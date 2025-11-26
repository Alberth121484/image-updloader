const API_BASE_URL = '/api';

/**
 * Upload an image file to the server
 * @param {File} file - The file to upload
 * @param {function} onProgress - Progress callback (0-100)
 * @returns {Promise<{success: boolean, data?: object, error?: string}>}
 */
export async function uploadImage(file, onProgress) {
  const formData = new FormData();
  formData.append('image', file);

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    // Track upload progress
    xhr.upload.addEventListener('progress', (event) => {
      if (event.lengthComputable && onProgress) {
        const percentComplete = Math.round((event.loaded / event.total) * 100);
        onProgress(percentComplete);
      }
    });

    // Handle completion
    xhr.addEventListener('load', () => {
      try {
        const response = JSON.parse(xhr.responseText);
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(response);
        } else {
          resolve({ 
            success: false, 
            error: response.error || 'Upload failed' 
          });
        }
      } catch (e) {
        resolve({ 
          success: false, 
          error: 'Invalid server response' 
        });
      }
    });

    // Handle errors
    xhr.addEventListener('error', () => {
      resolve({ 
        success: false, 
        error: 'Network error occurred' 
      });
    });

    xhr.addEventListener('abort', () => {
      resolve({ 
        success: false, 
        error: 'Upload cancelled' 
      });
    });

    xhr.open('POST', `${API_BASE_URL}/upload`);
    xhr.send(formData);
  });
}

/**
 * Get the download URL for an image
 * @param {string} filename - The filename to download
 * @returns {string} - The download URL
 */
export function getDownloadUrl(filename) {
  return `${API_BASE_URL}/download/${filename}`;
}

/**
 * Get the static image URL
 * @param {string} filename - The filename
 * @returns {string} - The static URL
 */
export function getImageUrl(filename) {
  return `/uploads/${filename}`;
}

/**
 * Check API health
 * @returns {Promise<boolean>}
 */
export async function checkHealth() {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    const data = await response.json();
    return data.status === 'ok';
  } catch {
    return false;
  }
}

export default {
  uploadImage,
  getDownloadUrl,
  getImageUrl,
  checkHealth
};
