// @ts-nocheck
import * as React from 'react';
import { Text, Stack, Box } from '@interchain-ui/react';

interface IUserInfo {
  walletIcon?: string;
  username?: string;
  icon?: React.ReactNode;
}

export const UserInfo = ({ username, icon }: IUserInfo) => {
  return (
    <Stack
      direction="vertical"
      space={1}
      attributes={{
        alignItems: 'center',
      }}
    >
      {username && (
        <>
          <Box
            display={icon ? 'block' : 'none'}
            width={{
              mobile: '$16',
              tablet: '$19',
            }}
            height={{
              mobile: '$16',
              tablet: '$19',
            }}
            borderRadius="$full"
            overflow="hidden"
          >
            {icon}
          </Box>

          <Text
            fontSize={{ mobile: '$sm', tablet: '$xl' }}
            fontWeight="$semibold"
          >
            {username}
          </Text>
        </>
      )}
    </Stack>
  );
};
