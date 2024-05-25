import { createContext, useContext, useState } from 'react';
import { Theme, ThemeContextType } from './types';

const ThemeContext = createContext<ThemeContextType | null>(null);

function ThemeProvider({ children }: { children: React.ReactElement }) {
  const [theme, setTheme] = useState<Theme>('light');

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useThemeContext muse be used with ThemeProvider');
  return context;
}

export { ThemeProvider, useThemeContext };
