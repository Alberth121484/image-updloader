function UploadProgress({ progress }) {
  const isIndeterminate = progress === undefined || progress === null;

  return (
    <div className="w-full max-w-[calc(100vw-2rem)] sm:max-w-[480px] md:max-w-[540px] lg:max-w-[600px] p-6 sm:p-8 rounded-xl bg-light-card dark:bg-dark-card shadow-sm">
      {/* Text */}
      <p className="text-base text-center mb-6">
        <span className="font-medium text-text-dark dark:text-text-light">Uploading</span>
        <span className="font-light text-text-muted">, please wait..</span>
      </p>

      {/* Progress Bar Container */}
      <div className="w-full h-1.5 bg-light-border dark:bg-dark-border rounded-full overflow-hidden relative">
        {isIndeterminate ? (
          /* Indeterminate Progress Bar */
          <div 
            className="absolute h-full w-1/3 bg-primary rounded-full animate-progress"
          />
        ) : (
          /* Determinate Progress Bar */
          <div 
            className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        )}
      </div>
    </div>
  );
}

export default UploadProgress;
