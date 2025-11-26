import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const MAX_SIZE = 2 * 1024 * 1024; // 2MB
const ACCEPTED_TYPES = {
  'image/jpeg': ['.jpg', '.jpeg'],
  'image/png': ['.png'],
  'image/gif': ['.gif']
};

function Dropzone({ onFileSelect, disabled }) {
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (rejectedFiles.length > 0) {
      const error = rejectedFiles[0].errors[0];
      if (error.code === 'file-too-large') {
        alert('File too large. Maximum size is 2MB.');
      } else if (error.code === 'file-invalid-type') {
        alert('Invalid file type. Only JPG, PNG, and GIF are allowed.');
      }
      return;
    }

    if (acceptedFiles.length > 0) {
      onFileSelect(acceptedFiles[0]);
    }
  }, [onFileSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ACCEPTED_TYPES,
    maxSize: MAX_SIZE,
    multiple: false,
    disabled
  });

  return (
    <div
      {...getRootProps()}
      className={`
        w-full max-w-[540px] min-h-[340px] 
        flex flex-col items-center justify-center
        border-2 border-dashed rounded-xl
        cursor-pointer transition-all duration-200
        ${isDragActive 
          ? 'border-primary bg-primary/5' 
          : 'border-light-border dark:border-dark-border'
        }
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-primary'}
        bg-light-card dark:bg-dark-card
      `}
    >
      <input {...getInputProps()} />
      
      {/* Upload Icon */}
      <div className="mb-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <img 
            src="/assets/upload.svg" 
            alt="Upload" 
            className="w-6 h-6"
          />
        </div>
      </div>

      {/* Main Text */}
      <p className="text-base text-text-dark dark:text-text-light font-light">
        Drag & drop a file or{' '}
        <span className="text-primary font-medium cursor-pointer hover:underline">
          browse files
        </span>
      </p>

      {/* Subtitle */}
      <p className="text-sm text-text-muted mt-2 font-light">
        JPG, PNG or GIF - Max file size 2MB
      </p>
    </div>
  );
}

export default Dropzone;
