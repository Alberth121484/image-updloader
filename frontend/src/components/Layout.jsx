import Header from './Header';

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors">
      <Header />
      
      <main className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 min-h-[calc(100vh-57px)] sm:min-h-[calc(100vh-65px)]">
        {children}
      </main>
    </div>
  );
}

export default Layout;
