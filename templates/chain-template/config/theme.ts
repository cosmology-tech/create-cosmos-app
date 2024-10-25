import { ThemeDef, ThemeVariant } from '@interchain-ui/react';

export const CustomTheme: Record<ThemeVariant, string> = {
  light: 'custom-light',
  dark: 'custom-dark',
};

export const lightColors: ThemeDef['vars']['colors'] = {
  purple900: '#322F3C',
  purple600: '#7310FF',
  purple400: '#AB6FFF',
  purple200: '#E5D4FB',
  purple100: '#F9F4FF',
  purple50: '#FCFAFF',
  blackAlpha600: '#2C3137',
  blackAlpha500: '#6D7987',
  blackAlpha400: '#697584',
  blackAlpha300: '#DDE2E9',
  blackAlpha200: '#D5DDE9',
  blackAlpha100: '#F6F8FE',
  blackAlpha50: '#FBFBFB',
  gray100: '#EFF2F4',
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
  blue100: '#F4FCFF',
  blue200: '#C6E7FF',
  blue300: '#AEDEFF',
  blue400: '#68C7FF',
  blue500: '#35B4FF',
  blue600: '#01A1FF',
  blue700: '#0068A6',
  blue800: '#194F8F',
  blue900: '#002D4D',
};

export const darkColors: ThemeDef['vars']['colors'] = {
  purple900: '#322F3C',
  purple600: '#9042FE',
  purple400: '#AB6FFF',
  purple200: '#4D198F',
  purple100: '#14004D',
  purple50: '#FCFAFF',
  blackAlpha600: '#FFFFFF',
  blackAlpha500: '#9EACBD',
  blackAlpha400: '#807C86',
  blackAlpha300: '#46424D',
  blackAlpha200: '#443F4B',
  blackAlpha100: '#29262F',
  blackAlpha50: '#1D2328',
  gray100: '#EFF2F4',
  white: '#FFFFFF',
  background: '#232A31',
  green600: '#38A169',
  green400: '#63C892',
  green200: '#A9E8C7',
  orange600: '#ED8936',
  orange400: '#EBB07F',
  orange200: '#F5D1B4',
  red600: '#E65858',
  red400: '#E18080',
  red200: '#F1C4C4',
  blue100: '#F4FCFF',
  blue200: '#C6E7FF',
  blue300: '#AEDEFF',
  blue400: '#68C7FF',
  blue500: '#35B4FF',
  blue600: '#01A1FF',
  blue700: '#0068A6',
  blue800: '#194F8F',
  blue900: '#002D4D',
};

export const lightTheme: ThemeDef = {
  name: CustomTheme.light,
  vars: {
    colors: lightColors,
  },
};

export const darkTheme: ThemeDef = {
  name: CustomTheme.dark,
  vars: {
    colors: darkColors,
  },
};
