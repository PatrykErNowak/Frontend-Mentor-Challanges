import { createContext, useContext, useEffect } from 'react';
import { useLocalStorage } from 'react-use';

// Types
type DarkModeContextType = {
  isDarkMode: boolean | undefined;
  toggleDarkMode: () => void;
};

type DarkModeProviderProps = {
  children: React.ReactElement | React.ReactElement[];
};

// ------------------------------------------------------------------------------

const DarkModeContext = createContext<DarkModeContextType | null>(null);

function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useLocalStorage('DarkMode', window.matchMedia('(prefers-color-scheme: dark)').matches);

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
    setIsDarkMode(!isDarkMode);
  }

  return <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context) throw new Error('useDarkMode muse be used with ThemeProvider');
  return context;
}

export { useDarkMode, DarkModeProvider };
