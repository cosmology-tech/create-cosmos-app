// TODO fix type issues
// @ts-nocheck

import Image from 'next/image';
import { Text, Box, useTheme } from '@interchain-ui/react';

interface IChainCard {
  prettyName: string;
  icon?: string;
}

export const ChainCard = (props: IChainCard) => {
  const { theme } = useTheme();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap="$4"
      overflow="hidden"
      wordBreak="break-word"
      color={theme === 'light' ? '$blackAlpha800' : '$whiteAlpha800'}
      width="100%"
    >
      <Box
        borderWidth="1px"
        borderStyle="solid"
        borderColor={theme === 'light' ? '$blackAlpha200' : '$whiteAlpha200'}
        border="1px solid"
        borderRadius="$full"
        overflow="hidden"
      >
        <Image
          width="30"
          height="30"
          alt="chain icon"
          src={props.icon ?? 'https://dummyimage.com/150/9e9e9e/ffffff&text=☒'}
        />
      </Box>

      <Text fontSize="$xl" fontWeight="$semibold">
        {props.prettyName}
      </Text>
    </Box>
  );
};
