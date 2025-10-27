import React from 'react';
import { ProcessedFile } from './RenamerPage';
import TrashIcon from './TrashIcon';
import Button from './Button';

interface FilePreviewItemProps {
  file: ProcessedFile;
  onRemove: (id: string) => void;
  onNameChange: (id: string, newName: string) => void;
}

const FilePreviewItem: React.FC<FilePreviewItemProps> = ({ file, onRemove, onNameChange }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-[rgb(var(--color-surface-card))] rounded-lg border border-[rgb(var(--color-border-subtle))]">
      <img src={file.previewUrl} alt={file.originalName} className="w-16 h-16 object-cover rounded-md flex-shrink-0" />
      <div className="flex-grow min-w-0">
        <p className="text-sm text-[rgb(var(--color-text-secondary))] truncate" title={file.originalName}>
          {file.originalName}
        </p>
        <div className="relative">
             <input
                type="text"
                value={file.newName}
                onChange={(e) => onNameChange(file.id, e.target.value)}
                className="w-full bg-[rgb(var(--color-surface-header))] text-[rgb(var(--color-text-primary))] border border-[rgb(var(--color-border-subtle))] rounded-md py-1 px-2 text-base focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-brand-primary))] transition"
                />
            {file.isLoading && (
                 <div className="absolute inset-y-0 right-2 flex items-center">
                    <div className="w-4 h-4 border-2 border-t-transparent border-[rgb(var(--color-brand-primary))] rounded-full animate-spin"></div>
                </div>
            )}
        </div>
      </div>
       <Button variant="text" size="s" className="p-2 min-w-0" onClick={() => onRemove(file.id)}>
            <TrashIcon className="w-5 h-5 text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-danger))]" />
       </Button>
    </div>
  );
};

export default FilePreviewItem;
