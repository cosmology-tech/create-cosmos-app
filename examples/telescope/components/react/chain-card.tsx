import { Box, Stack, useColorModeValue, Text } from '@interchain-ui/react';
import Image from 'next/image';
import { ChainCardProps } from '../types';

export const ChainCard = (props: ChainCardProps) => {
  return (
    <Stack
      direction="horizontal"
      space={3}
      attributes={{
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        wordBreak: 'break-word',
        color: useColorModeValue('blackAlpha.800', 'whiteAlpha.800'),
        width: 'full',
      }}
    >
      {/* @ts-ignore */}
      <Box
        attributes={{
          minWidth: 10,
          minHeight: 10,
          maxWidth: 10,
          maxHeight: 10,
          width: 'full',
          height: 'full',
          border: '1px solid',
          borderColor: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
          borderRadius: 'full',
          overflow: 'hidden',
        }}
      >
        {/* @ts-ignore */}
        <Image
          alt=""
          src={props.icon || 'https://dummyimage.com/150/9e9e9e/ffffff&text=☒'}
        />
      </Box>
      <Text fontSize="xl" fontWeight="semibold"
        attributes={{
          paddingBottom: '18px',
        }}
      >
        {props.prettyName}
      </Text>
    </Stack>
  );
};
