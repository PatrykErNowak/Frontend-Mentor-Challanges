type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export type { Theme, ThemeContextType };
