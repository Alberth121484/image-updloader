import { useTheme } from '../context';

function Header() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between border-b border-light-border dark:border-dark-border bg-light-card dark:bg-dark-bg">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img 
          src="/assets/logo-small.svg" 
          alt="ImageUpload Logo" 
          className="w-8 h-8"
        />
        <span className="text-base font-medium text-text-dark dark:text-text-light">
          ImageUpload
        </span>
      </div>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg border border-light-border dark:border-dark-border hover:bg-gray-100 dark:hover:bg-dark-card active:scale-95 transition-all duration-200"
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDark ? (
          <img src="/assets/Sun_fill.svg" alt="" className="w-5 h-5" />
        ) : (
          <img src="/assets/Moon_fill.svg" alt="" className="w-5 h-5" />
        )}
      </button>
    </header>
  );
}

export default Header;
