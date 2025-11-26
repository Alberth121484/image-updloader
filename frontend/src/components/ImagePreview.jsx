import { useState } from 'react';

function ImagePreview({ imageUrl, filename, onDownload }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(imageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = imageUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    if (onDownload) {
      onDownload();
    } else {
      // Direct download via anchor
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = filename || 'image';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="w-full max-w-[540px] flex flex-col items-center">
      {/* Image Container */}
      <div className="w-full rounded-xl overflow-hidden shadow-lg bg-light-card dark:bg-dark-card">
        <img 
          src={imageUrl} 
          alt="Uploaded preview"
          className="w-full h-auto object-contain max-h-[400px]"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-6">
        {/* Share Button */}
        <button
          onClick={handleShare}
          className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white text-xs font-semibold rounded-lg hover:bg-primary/90 transition-colors"
        >
          <img 
            src="/assets/Link.svg" 
            alt="" 
            className="w-4 h-4 brightness-0 invert"
          />
          {copied ? 'Copied!' : 'Share'}
        </button>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white text-xs font-semibold rounded-lg hover:bg-primary/90 transition-colors"
        >
          <img 
            src="/assets/download.svg" 
            alt="" 
            className="w-4 h-4 brightness-0 invert"
          />
          Download
        </button>
      </div>
    </div>
  );
}

export default ImagePreview;
