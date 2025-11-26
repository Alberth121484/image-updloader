import { useState, useCallback } from 'react';
import { uploadImage, getDownloadUrl } from '../services';

// Upload states
export const UPLOAD_STATES = {
  IDLE: 'idle',
  UPLOADING: 'uploading',
  SUCCESS: 'success',
  ERROR: 'error'
};

export function useUpload() {
  const [state, setState] = useState(UPLOAD_STATES.IDLE);
  const [progress, setProgress] = useState(0);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [error, setError] = useState(null);

  const upload = useCallback(async (file) => {
    setState(UPLOAD_STATES.UPLOADING);
    setProgress(0);
    setError(null);

    const result = await uploadImage(file, (percent) => {
      setProgress(percent);
    });

    if (result.success) {
      setUploadedImage({
        url: result.data.url,
        filename: result.data.filename,
        originalName: result.data.originalName,
        downloadUrl: getDownloadUrl(result.data.filename)
      });
      setState(UPLOAD_STATES.SUCCESS);
    } else {
      setError(result.error);
      setState(UPLOAD_STATES.ERROR);
    }

    return result;
  }, []);

  const reset = useCallback(() => {
    setState(UPLOAD_STATES.IDLE);
    setProgress(0);
    setUploadedImage(null);
    setError(null);
  }, []);

  return {
    state,
    progress,
    uploadedImage,
    error,
    upload,
    reset,
    isIdle: state === UPLOAD_STATES.IDLE,
    isUploading: state === UPLOAD_STATES.UPLOADING,
    isSuccess: state === UPLOAD_STATES.SUCCESS,
    isError: state === UPLOAD_STATES.ERROR
  };
}

export default useUpload;
