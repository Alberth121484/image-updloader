import { ThemeProvider } from './context';
import { Layout, Dropzone, UploadProgress, ImagePreview } from './components';
import { useUpload } from './hooks';
import { getDownloadUrl } from './services';

function App() {
  const {
    progress,
    uploadedImage,
    error,
    upload,
    reset,
    isIdle,
    isUploading,
    isSuccess,
    isError
  } = useUpload();

  const handleFileSelect = async (file) => {
    await upload(file);
  };

  const handleDownload = () => {
    if (uploadedImage) {
      window.open(getDownloadUrl(uploadedImage.filename), '_blank');
    }
  };

  const handleUploadAnother = () => {
    reset();
  };

  return (
    <ThemeProvider>
      <Layout>
        {/* Idle State - Show Dropzone */}
        {isIdle && (
          <Dropzone 
            onFileSelect={handleFileSelect}
            disabled={false}
          />
        )}

        {/* Uploading State - Show Progress */}
        {isUploading && (
          <UploadProgress progress={progress} />
        )}

        {/* Success State - Show Image Preview */}
        {isSuccess && uploadedImage && (
          <div className="flex flex-col items-center">
            <ImagePreview 
              imageUrl={uploadedImage.url}
              filename={uploadedImage.originalName}
              onDownload={handleDownload}
            />
            <button
              onClick={handleUploadAnother}
              className="mt-6 text-sm text-primary hover:underline"
            >
              Upload another image
            </button>
          </div>
        )}

        {/* Error State */}
        {isError && (
          <div className="w-full max-w-[540px] p-8 rounded-xl bg-light-card dark:bg-dark-card text-center">
            <p className="text-red-500 mb-4">{error}</p>
            <button
              onClick={reset}
              className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90"
            >
              Try again
            </button>
          </div>
        )}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
