import { useState, useEffect } from 'react';
import { Layout } from './components';

function App() {
  const [isDark, setIsDark] = useState(false);

  // Apply theme class to document
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleToggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <Layout isDark={isDark} onToggleTheme={handleToggleTheme}>
      <div className="text-center">
        <h1 className="text-2xl font-medium text-text-dark dark:text-text-light">
          Image Upload App
        </h1>
        <p className="text-text-muted mt-2">
          Dropzone component coming next...
        </p>
      </div>
    </Layout>
  );
}

export default App;
