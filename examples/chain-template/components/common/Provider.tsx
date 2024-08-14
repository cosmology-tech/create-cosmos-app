import { ThemeProvider, useTheme } from '@interchain-ui/react';
import { darkTheme, lightTheme, CustomTheme } from '@/config';

type CustomThemeProviderProps = {
  children: React.ReactNode;
};

export const CustomThemeProvider = ({ children }: CustomThemeProviderProps) => {
  const { theme } = useTheme();

  return (
    <ThemeProvider
      themeDefs={[lightTheme, darkTheme]}
      customTheme={CustomTheme[theme]}
    >
      {children}
    </ThemeProvider>
  );
};
