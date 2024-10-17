import React from 'react';
import { Text, Stack, Box } from '@interchain-ui/react';
import { ConnectedUserCardType } from '../types';

export const ConnectedUserInfo = ({
  username,
  icon
}: ConnectedUserCardType) => {
  return (
    <Stack
      space={1}
      attributes={{
        alignItems: 'center',
      }}
    >
      {username && (
        <>
          {/* @ts-ignore */}
          <Box
            display={icon ? 'block' : 'none'}
            attributes={{
              minWidth: 20,
              maxWidth: 20,
              width: 20,
              minHeight: 20,
              maxHeight: 20,
              height: 20,
              borderRadius: 'full',
              overflow: 'hidden',
            }}
          >
            {icon}
          </Box>
          <Text fontSize={{ mobile: 'md', tablet: 'xl' }} fontWeight="semibold">
            {username}
          </Text>
        </>
      )}
    </Stack>
  );
};
