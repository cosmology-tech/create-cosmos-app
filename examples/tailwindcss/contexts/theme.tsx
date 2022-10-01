import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
  useCallback
} from 'react';

export interface ThemeContext {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const Theme = createContext<ThemeContext>({
  theme: 'light',
  toggleTheme: () => { }
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    switch (theme) {
      case 'light':
        document.documentElement.classList.remove('dark');
        break;
      case 'dark':
        document.documentElement.classList.add('dark');
        break;
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    switch (theme) {
      case 'light':
        setTheme('dark');
        break;
      case 'dark':
        setTheme('light');
        break;
    }
  }, [theme]);

  return (
    <Theme.Provider
      value={{
        theme,
        toggleTheme
      }}
    >
      {children}
    </Theme.Provider>
  );
};

export const useTheme = (): ThemeContext => useContext(Theme);
