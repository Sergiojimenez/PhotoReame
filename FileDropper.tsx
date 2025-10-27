import React, { useState, useCallback } from 'react';
import UploadIcon from './UploadIcon';
import Button from './Button';

interface FileDropperProps {
  onFilesAdded: (files: File[]) => void;
}

const FileDropper: React.FC<FileDropperProps> = ({ onFilesAdded }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true);
    } else if (e.type === 'dragleave') {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const imageFiles = Array.from(files).filter(file => file.type.startsWith('image/'));
      onFilesAdded(imageFiles);
    }
  }, [onFilesAdded]);
  
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const imageFiles = Array.from(files).filter(file => file.type.startsWith('image/'));
      onFilesAdded(imageFiles);
    }
  };

  const baseClasses = "relative block w-full rounded-lg border-2 border-dashed p-12 text-center transition-colors duration-300";
  const draggingClasses = "border-[rgb(var(--color-brand-primary))] bg-[rgba(var(--color-brand-primary),0.1)]";
  const defaultClasses = "border-[rgb(var(--color-border-subtle))] hover:border-[rgb(var(--color-border-interactive))]";

  return (
    <div
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      className={`${baseClasses} ${isDragging ? draggingClasses : defaultClasses}`}
    >
      <div className="flex flex-col items-center">
        <UploadIcon className="mx-auto h-12 w-12 text-[rgb(var(--color-text-secondary))]" />
        <span className="mt-4 block text-lg font-semibold text-[rgb(var(--color-text-primary))]">
          Drag & drop your photos here
        </span>
        <span className="mt-1 block text-sm text-[rgb(var(--color-text-secondary))]">or</span>
        <input
            type="file"
            id="file-upload"
            className="sr-only"
            multiple
            accept="image/*"
            onChange={handleFileSelect}
        />
        <Button size="m" variant="outlined" className="mt-4" onClick={() => document.getElementById('file-upload')?.click()}>
            Select Photos
        </Button>
      </div>
    </div>
  );
};

export default FileDropper;
