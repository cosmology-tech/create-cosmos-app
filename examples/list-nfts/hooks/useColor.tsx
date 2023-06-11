import { useColorModeValue } from '@chakra-ui/react';

export const useColor = () => {
  return {
    textColor: {
      primary: useColorModeValue('black.600', 'black.100'),
      secondary: useColorModeValue('black.300', 'black.200'),
      tertiary: useColorModeValue('#FFF', 'black.600'),
    },
    bgColor: {
      primary: useColorModeValue('#FFF', 'black.600'),
      secondary: useColorModeValue('black.600', 'black.100'),
      tertiary: useColorModeValue('black.100', 'black.900'),
    },
    bgSimpleBtnColor: useColorModeValue('black.100', 'black.700'),
    bgTabListColor: useColorModeValue('#F0F3FA', 'black.900'),
    borderColor: {
      primary: useColorModeValue('#FFF', 'black.600'),
      secondary: useColorModeValue('#D1D6DD', 'black.700'),
    },
  };
};
