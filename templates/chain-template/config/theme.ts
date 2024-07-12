import { ThemeDef, ThemeVariant } from '@interchain-ui/react';

export const CustomTheme: Record<ThemeVariant, string> = {
  light: 'custom-light',
  dark: 'custom-dark',
};

export const lightTheme: ThemeDef = {
  name: CustomTheme.light,
  vars: {
    colors: {
      purple600: '#7310FF',
      purple400: '#AB6FFF',
      purple200: '#E5D4FB',
      purple100: '#F9F4FF',
      blackAlpha600: '#2C3137',
      blackAlpha400: '#697584',
      blackAlpha300: '#DDE2E9',
      blackAlpha200: '#D5DDE9',
      blackAlpha100: '#F6F8FE',
      white: '#FFFFFF',
      background: '#FFFFFF',
      green600: '#38A169',
      green400: '#63C892',
      green200: '#A9E8C7',
      orange600: '#ED8936',
      orange400: '#EBB07F',
      orange200: '#F5D1B4',
      red600: '#E65858',
      red400: '#E18080',
      red200: '#F1C4C4',
    },
  },
};

export const darkTheme: ThemeDef = {
  name: CustomTheme.dark,
  vars: {
    colors: {
      purple600: '#9042FE',
      purple400: '#AB6FFF',
      purple200: '#4D198F',
      purple100: '#14004D',
      blackAlpha600: '#FFFFFF',
      blackAlpha400: '#807C86',
      blackAlpha300: '#46424D',
      blackAlpha200: '#443F4B',
      blackAlpha100: '#29262F',
      white: '#FFFFFF',
      background: '#000000',
      green600: '#38A169',
      green400: '#63C892',
      green200: '#A9E8C7',
      orange600: '#ED8936',
      orange400: '#EBB07F',
      orange200: '#F5D1B4',
      red600: '#E65858',
      red400: '#E18080',
      red200: '#F1C4C4',
    },
  },
};
