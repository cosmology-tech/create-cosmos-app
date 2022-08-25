import React, { ReactNode } from 'react';
import { Text, useColorModeValue, Stack, Box } from '@chakra-ui/react';
import { ConnectedUserCardType } from './types';

export const ConnectedUserCard = ({
  userName,
  icon
}: ConnectedUserCardType) => {
  return (
    <Stack
      isInline={true}
      spacing={2}
      justifyContent="center"
      alignItems="center"
      borderRadius="lg"
      bg={useColorModeValue('whiteAlpha.100', 'blackAlpha.100')}
      boxShadow={useColorModeValue(
        'inset 0 0 12px -5px #d3d3d3',
        'inset 0 0 14px -7px #828282'
      )}
      w="full"
      minW="fit-content"
      p={2}
      paddingX={20}
    >
      <Box
        display={icon ? 'block' : 'none'}
        minW={14}
        maxW={14}
        w={14}
        minH={14}
        maxH={14}
        h={14}
        borderRadius="full"
        overflow="hidden"
      >
        {icon}
      </Box>
      <Text fontSize={{ lg: 'lg' }} fontWeight="semibold">
        {userName}
      </Text>
    </Stack>
  );
};

export const ConnectedUserInfo = ({
  name,
  icon
}: {
  name: string;
  icon?: ReactNode;
}) => {
  return <ConnectedUserCard userName={name} icon={icon} />;
};
