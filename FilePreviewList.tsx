import React from 'react';
import { ProcessedFile } from './RenamerPage';
import FilePreviewItem from './FilePreviewItem';

interface FilePreviewListProps {
  files: ProcessedFile[];
  onRemove: (id: string) => void;
  onNameChange: (id: string, newName: string) => void;
}

const FilePreviewList: React.FC<FilePreviewListProps> = ({ files, onRemove, onNameChange }) => {
  return (
    <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2">
      {files.map(file => (
        <FilePreviewItem 
            key={file.id} 
            file={file} 
            onRemove={onRemove} 
            onNameChange={onNameChange} 
        />
      ))}
    </div>
  );
};

export default FilePreviewList;
