import React, { ReactNode } from 'react';
import { Box, Stack, Text, useColorModeValue } from '@interchain-ui/react';
import { WalletStatus } from 'cosmos-kit';

export const WarnBlock = ({
  wordOfWarning,
  icon
}: {
  wordOfWarning?: string;
  icon?: ReactNode;
}) => {
  return (
    // @ts-ignore
    <Box
      borderRadius="md"
      p={4}
      pr={2}
      bg={useColorModeValue('orange.200', 'orange.300')}
      color="blackAlpha.900"
    >
      <Stack
        direction='horizontal'
        space={2}
        attributes={{
          alignItems: 'start',
          justifyContent: 'center',
          width: 'full',
          overflowY: 'scroll',
        }}
      >
        {/* @ts-ignore */}
        <Box
          position="sticky" top={0}
        >
          {icon}
        </Box>
        <Text
          attributes={{
            maxHeight: 40,
          }}
        >{wordOfWarning}</Text>
      </Stack>
    </Box>
  );
};

export const RejectedWarn = ({
  wordOfWarning,
  icon
}: {
  wordOfWarning?: string;
  icon?: ReactNode;
}) => {
  // @ts-ignore
  return <WarnBlock
    wordOfWarning={wordOfWarning} icon={icon}
  />;
};

export const ConnectStatusWarn = ({
  walletStatus,
  rejected,
  error
}: {
  walletStatus: WalletStatus;
  rejected: ReactNode;
  error: ReactNode;
}) => {
  switch (walletStatus) {
    case WalletStatus.Rejected:
      return <>{rejected}</>;
    case WalletStatus.Error:
      return <>{error}</>;
    default:
      return <></>;
  }
};
