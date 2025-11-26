import { useState } from 'react';
import { ThemeProvider } from './context';
import { Layout, Dropzone } from './components';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (file) => {
    console.log('File selected:', file);
    setSelectedFile(file);
  };

  return (
    <ThemeProvider>
      <Layout>
        <Dropzone 
          onFileSelect={handleFileSelect}
          disabled={false}
        />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
