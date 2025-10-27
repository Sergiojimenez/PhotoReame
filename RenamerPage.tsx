import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import FileDropper from './FileDropper';
import FilePreviewList from './FilePreviewList';
import Button from './Button';

// Inform TypeScript that JSZip will be available on the window object.
declare global {
  interface Window {
    JSZip: any;
  }
}

export interface ProcessedFile {
  id: string;
  originalFile: File;
  previewUrl: string;
  originalName: string;
  newName: string;
  isLoading: boolean;
}

const RenamerPage: React.FC = () => {
  const [files, setFiles] = useState<ProcessedFile[]>([]);

  const handleFilesAdded = (incomingFiles: File[]) => {
    const newFiles: ProcessedFile[] = incomingFiles.map(file => ({
      id: `${file.name}-${file.lastModified}-${Math.random()}`,
      originalFile: file,
      previewUrl: URL.createObjectURL(file),
      originalName: file.name,
      newName: '',
      isLoading: false,
    }));
    setFiles(prevFiles => [...prevFiles, ...newFiles]);
  };
  
  const handleRemoveFile = (id: string) => {
    setFiles(prevFiles => prevFiles.filter(file => file.id !== id));
  };

  const handleNameChange = (id: string, newName: string) => {
    setFiles(prevFiles => prevFiles.map(file => file.id === id ? { ...file, newName } : file));
  };
  
  const handleClearAll = () => {
    setFiles([]);
  };

  const handleAnalyze = () => {
    setFiles(prevFiles => prevFiles.map(file => ({ ...file, isLoading: true })));

    // Simulate AI processing
    setTimeout(() => {
        setFiles(prevFiles => prevFiles.map((file, index) => {
            const originalName = file.originalName;
            const lastDotIndex = originalName.lastIndexOf('.');
            
            // Check if there is a valid extension (not the first character)
            const extension = (lastDotIndex > 0 && lastDotIndex < originalName.length - 1) 
                ? originalName.substring(lastDotIndex) // Keep the dot, e.g., ".jpg"
                : ''; 

            const newBaseName = `Holiday-Beach-${String(index + 1).padStart(3, '0')}`;
            const newName = `${newBaseName}${extension}`; // Append original extension (with dot)
            
            return { ...file, newName, isLoading: false };
        }));
    }, 1500);
  };
  
  const handleRenameAndDownload = async () => {
    if (!window.JSZip) {
        alert('Error: Zipping library not found.');
        return;
    }
    const zip = new window.JSZip();
    files.forEach(file => {
        let finalName = (file.newName || file.originalName).trim();

        // Get original extension, including the dot (e.g., ".jpg")
        const originalName = file.originalName;
        const lastDotIndexOriginal = originalName.lastIndexOf('.');
        const originalExtension = (lastDotIndexOriginal > 0 && lastDotIndexOriginal < originalName.length - 1)
            ? originalName.substring(lastDotIndexOriginal)
            : '';

        // Check if the final name has an extension
        const lastDotIndexFinal = finalName.lastIndexOf('.');
        const finalNameHasExtension = (lastDotIndexFinal > 0 && lastDotIndexFinal < finalName.length - 1);
        
        // If the new name is missing an extension, and the original had one, append the original extension.
        if (originalExtension && !finalNameHasExtension) {
            finalName += originalExtension;
        }
        
        zip.file(finalName, file.originalFile);
    });

    zip.generateAsync({ type: 'blob' }).then((content: Blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(content);
        link.download = 'PhotoRename_Batch.zip';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
  };

  // Cleanup blob URLs on unmount
  useEffect(() => {
    return () => {
      files.forEach(file => URL.revokeObjectURL(file.previewUrl));
    };
  }, [files]);

  return (
    <div className="bg-[rgb(var(--color-surface-base))] text-[rgb(var(--color-text-primary))] min-h-screen flex flex-col">
      <Header theme="dark" />
      <main className="flex-grow container mx-auto px-6 py-16 md:py-24 flex flex-col items-center">
        <div className="w-full max-w-4xl">
            {files.length === 0 ? (
                <FileDropper onFilesAdded={handleFilesAdded} />
            ) : (
                <div className="space-y-8">
                    <div>
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 p-4 bg-[rgb(var(--color-surface-card))] rounded-lg border border-[rgb(var(--color-border-subtle))]">
                            <h2 className="text-2xl font-bold">Your Photos ({files.length})</h2>
                            <div className="flex items-center gap-2 flex-wrap justify-center">
                                <Button variant="outlined" size="m" onClick={handleAnalyze}>Analyze Photos</Button>
                                <Button size="m" onClick={handleRenameAndDownload}>Rename & Download</Button>
                                <Button variant="text" color="danger" size="m" onClick={handleClearAll}>Clear All</Button>
                            </div>
                        </div>
                        <FilePreviewList files={files} onRemove={handleRemoveFile} onNameChange={handleNameChange} />
                    </div>
                </div>
            )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RenamerPage;