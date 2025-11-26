import Header from './Header';

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors">
      <Header />
      
      <main className="flex items-center justify-center px-4 py-8 min-h-[calc(100vh-73px)]">
        {children}
      </main>
    </div>
  );
}

export default Layout;
