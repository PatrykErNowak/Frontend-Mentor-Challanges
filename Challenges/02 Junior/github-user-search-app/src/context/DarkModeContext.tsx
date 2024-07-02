import { createContext, useContext, useEffect, useState } from 'react';

// Types
type DarkModeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

type DarkModeProviderProps = {
  children: React.ReactElement | React.ReactElement[];
};

// ------------------------------------------------------------------------------

const DarkModeContext = createContext<DarkModeContextType | null>(null);

function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
    }
    if (!isDarkMode) {
      document.documentElement.classList.remove('dark-mode');
      document.documentElement.classList.add('light-mode');
    }
  }, [isDarkMode]);

  function toggleDarkMode() {
    setIsDarkMode((prev) => !prev);
  }

  return <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context) throw new Error('useDarkMode muse be used with ThemeProvider');
  return context;
}

export { useDarkMode, DarkModeProvider };
