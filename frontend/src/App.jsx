import { ThemeProvider } from './context';
import { Layout } from './components';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <div className="text-center">
          <h1 className="text-2xl font-medium text-text-dark dark:text-text-light">
            Image Upload App
          </h1>
          <p className="text-text-muted mt-2">
            Dropzone component coming next...
          </p>
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
