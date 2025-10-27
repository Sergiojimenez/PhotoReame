import React, { useState, useRef, useCallback } from 'react';
import UploadIcon from './UploadIcon';
import Button from './Button';

interface FileDropperProps {
  onFilesAdded: (files: File[]) => void;
  disabled?: boolean;
}

const FileDropper: React.FC<FileDropperProps> = ({ onFilesAdded, disabled }) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (disabled) return;
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragActive(true);
    } else if (e.type === 'dragleave') {
      setIsDragActive(false);
    }
  }, [disabled]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    if (disabled) return;
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onFilesAdded(Array.from(e.dataTransfer.files));
      e.dataTransfer.clearData();
    }
  }, [onFilesAdded, disabled]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
        onFilesAdded(Array.from(e.target.files));
        // Reset the input value to allow uploading the same file again
        if(e.target) {
            e.target.value = '';
        }
    }
  };

  const onButtonClick = () => {
    inputRef.current?.click();
  };

  const baseClasses = 'border-2 border-dashed rounded-lg p-12 text-center transition-colors duration-300 flex flex-col items-center justify-center w-full h-full';
  const inactiveClasses = 'border-[rgb(var(--color-border-subtle))] bg-[rgb(var(--color-surface-card))]';
  const activeClasses = 'border-[rgb(var(--color-brand-primary))] bg-[rgba(var(--color-brand-primary),0.1)]';
  const disabledClasses = 'opacity-50 cursor-not-allowed';

  return (
    <div
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      onClick={!disabled ? onButtonClick : undefined}
      className={`${baseClasses} ${isDragActive ? activeClasses : inactiveClasses} ${disabled ? disabledClasses : 'cursor-pointer'}`}
    >
      <input
        ref={inputRef}
        type="file"
        multiple
        accept="image/*"
        onChange={handleChange}
        className="hidden"
        disabled={disabled}
      />
      
        <UploadIcon className="w-12 h-12 text-[rgb(var(--color-text-secondary))] mx-auto mb-4" />
        <p className="text-[rgb(var(--color-text-primary))] font-bold mb-2">Drag & drop photos here</p>
        <p className="text-[rgb(var(--color-text-secondary))] text-sm mb-4">or</p>
        <Button onClick={onButtonClick} disabled={disabled} variant="outlined">
          Browse Files
        </Button>
    </div>
  );
};

export default FileDropper;
