import React, { useState, useCallback } from 'react';
import { GoogleGenAI } from '@google/genai';
import JSZip from 'jszip';
import saveAs from 'file-saver';
import Header from './Header';
import FileDropper from './FileDropper';
import FilePreviewList from './FilePreviewList';
import Button from './Button';

export interface ProcessedFile {
  id: string;
  file: File;
  originalName: string;
  newName: string;
  previewUrl: string;
  isLoading: boolean;
}

const generateId = () => `id_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      resolve(result.split(',')[1]);
    };
    reader.onerror = (error) => reject(error);
  });
};

const RenamerPage: React.FC = () => {
  const [files, setFiles] = useState<ProcessedFile[]>([]);
  const [isRenaming, setIsRenaming] = useState(false);
  const [namingPattern, setNamingPattern] = useState('{description}-{date}');
  const [error, setError] = useState<string | null>(null);

  const handleFilesAdded = useCallback((addedFiles: File[]) => {
    const newFiles: ProcessedFile[] = Array.from(addedFiles)
      .filter((file) => file.type.startsWith('image/'))
      .map((file) => ({
        id: generateId(),
        file,
        originalName: file.name,
        newName: '',
        previewUrl: URL.createObjectURL(file),
        isLoading: false,
      }));
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  }, []);

  const handleRemoveFile = (id: string) => {
    setFiles((currentFiles) => {
      const fileToRemove = currentFiles.find((f) => f.id === id);
      if (fileToRemove) {
        URL.revokeObjectURL(fileToRemove.previewUrl);
      }
      return currentFiles.filter((f) => f.id !== id);
    });
  };

  const handleNameChange = (id: string, newName: string) => {
    setFiles((currentFiles) =>
      currentFiles.map((f) => (f.id === id ? { ...f, newName } : f))
    );
  };

  const handleClearAll = () => {
    files.forEach((file) => URL.revokeObjectURL(file.previewUrl));
    setFiles([]);
  };

  const handleRenameAll = async () => {
    if (!files.length) return;
    setIsRenaming(true);
    setError(null);

    setFiles((currentFiles) => currentFiles.map((f) => ({ ...f, isLoading: true })));

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      const renamePromises = files.map(async (file) => {
        try {
          const base64Image = await fileToBase64(file.file);
          const prompt = `Analyze this image and suggest a concise, descriptive filename. The filename should be lowercase, use hyphens instead of spaces, and not include a file extension. Example: 'a-red-car-on-a-sunny-day'.`;
          
          const imagePart = {
            inlineData: {
              mimeType: file.file.type,
              data: base64Image,
            },
          };
          const textPart = { text: prompt };

          // Fix: Use ai.models.generateContent to generate content
          const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: { parts: [imagePart, textPart] },
          });

          // Fix: Use response.text to get the generated text
          let description = response.text.trim().replace(/[^a-z0-9\s-]/gi, '').replace(/\s+/g, '-').toLowerCase();
          const date = new Date().toISOString().split('T')[0];
          const finalNameWithPattern = namingPattern
            .replace('{description}', description)
            .replace('{date}', date);
          
          const extension = file.originalName.split('.').pop() || 'jpg';
          const newName = `${finalNameWithPattern}.${extension}`;

          setFiles((currentFiles) =>
            currentFiles.map((f) => (f.id === file.id ? { ...f, newName, isLoading: false } : f))
          );
        } catch (err) {
          console.error('Error renaming file:', file.originalName, err);
          const extension = file.originalName.split('.').pop() || 'jpg';
          setFiles((currentFiles) =>
            currentFiles.map((f) =>
              f.id === file.id ? { ...f, newName: `error-renaming.${extension}`, isLoading: false } : f
            )
          );
        }
      });

      await Promise.all(renamePromises);
    } catch (apiError) {
      console.error('Gemini API Error:', apiError);
      setError('Failed to contact the AI service. Please check your API key and try again.');
    } finally {
      setIsRenaming(false);
    }
  };

  const handleDownloadAll = async () => {
    if (!files.length) return;

    const zip = new JSZip();
    files.forEach((file) => {
      const filename = file.newName.trim() ? file.newName : file.originalName;
      zip.file(filename, file.file);
    });

    try {
      const content = await zip.generateAsync({ type: 'blob' });
      saveAs(content, 'renamed-photos.zip');
    } catch (e) {
      console.error('Error creating zip file', e);
      setError('There was an error creating the zip file.');
    }
  };

  return (
    <div className="bg-[rgb(var(--color-surface-base))] text-[rgb(var(--color-text-primary))] min-h-screen flex flex-col">
      <Header theme="dark" />
      <main className="flex-grow container mx-auto px-6 flex items-center justify-center">
        <div className="grid lg:grid-cols-12 gap-8 w-full">
          {/* Left Column: Controls */}
          <div className="lg:col-span-4 bg-[rgb(var(--color-surface-header))] p-6 rounded-lg flex flex-col shadow-lg">
            <h1 className="text-2xl font-bold mb-6">Rename Settings</h1>
            <div className="mb-6">
              <label htmlFor="naming-pattern" className="block text-sm font-medium text-gray-300 mb-2">
                Naming Pattern
              </label>
              <input
                type="text"
                id="naming-pattern"
                value={namingPattern}
                onChange={(e) => setNamingPattern(e.target.value)}
                className="w-full bg-[rgb(var(--color-surface-card))] text-white border border-[rgb(var(--color-border-subtle))] rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-brand-primary))] transition"
                disabled={isRenaming}
              />
              <p className="text-xs text-[rgb(var(--color-text-secondary))] mt-2">
                Use {'{description}'}, {'{date}'}.
              </p>
            </div>
            {error && <p className="text-[rgb(var(--color-danger))] text-sm mb-4">{error}</p>}
            <div className="space-y-4 mt-auto pt-4 border-t border-[rgb(var(--color-border-subtle))]">
              <Button
                size="l"
                className="w-full"
                onClick={handleRenameAll}
                disabled={isRenaming || files.length === 0}
              >
                {isRenaming ? 'Renaming...' : `Rename ${files.length} Photos`}
              </Button>
              <Button
                size="l"
                variant="outlined"
                className="w-full"
                onClick={handleDownloadAll}
                disabled={isRenaming || files.length === 0 || files.some((f) => !f.newName)}
              >
                Download All (.zip)
              </Button>
            </div>
          </div>

          {/* Right Column: File List */}
          <div className="lg:col-span-8 bg-[rgb(var(--color-surface-header))] p-6 rounded-lg flex flex-col shadow-lg">
            {files.length === 0 ? (
              <FileDropper onFilesAdded={handleFilesAdded} disabled={isRenaming} />
            ) : (
              <div className="flex flex-col">
                <div className="flex justify-between items-center mb-4 pb-4 border-b border-[rgb(var(--color-border-subtle))]">
                  <h2 className="text-xl font-bold">Your Photos ({files.length})</h2>
                  <div className="flex items-center gap-2">
                    <Button variant="text" color="danger" onClick={handleClearAll} disabled={isRenaming}>
                      Clear All
                    </Button>
                  </div>
                </div>
                <div className="flex-grow overflow-hidden">
                  <FilePreviewList
                    files={files}
                    onRemove={handleRemoveFile}
                    onNameChange={handleNameChange}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default RenamerPage;