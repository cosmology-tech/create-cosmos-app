// @ts-nocheck
import { ReactNode } from 'react';
import { Box, Text, useColorModeValue } from '@interchain-ui/react';
import { WalletStatus } from 'cosmos-kit';

export const WarnBlock = ({
  wordOfWarning,
  icon,
}: {
  wordOfWarning?: string;
  icon?: ReactNode;
}) => {
  return (
    <Box
      borderRadius="md"
      paddingTop="$4"
      paddingBottom="$4"
      paddingLeft="$4"
      paddingRight="$4"
      backgroundColor={useColorModeValue('$orange200', '$orange300')}
      color="$text"
    >
      <Box
        display="flex"
        gap="$4"
        alignItems="flex-start"
        justifyContent="center"
        width="$full"
        overflowY="scroll"
        // TODO fix type error
        // @ts-ignore
        style={{
          // For Firefox
          scrollbarWidth: 'auto',
          scrollbarColor: useColorModeValue(
            'rgba(0,0,0,0.3) rgba(0,0,0,0.2)',
            'rgba(255,255,255,0.2) rgba(255,255,255,0.1)'
          ),
          // For Chrome and other browsers except Firefox
          '&::-webkit-scrollbar': {
            width: '14px',
            background: useColorModeValue(
              'rgba(220,220,220,0.1)',
              'rgba(60,60,60,0.1)'
            ),
            borderRadius: '3px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: useColorModeValue(
              'rgba(0,0,0,0.1)',
              'rgba(255,255,255,0.1)'
            ),
            borderRadius: '10px',
            border: '3px solid transparent',
            backgroundClip: 'content-box',
          },
        }}
      >
        <Box position="sticky" top={0}>
          {icon}
        </Box>
        <Text attributes={{ maxHeight: '40px' }}>{wordOfWarning}</Text>
      </Box>
    </Box>
  );
};

export const RejectedWarn = ({
  wordOfWarning,
  icon,
}: {
  wordOfWarning?: string;
  icon?: ReactNode;
}) => {
  return <WarnBlock wordOfWarning={wordOfWarning} icon={icon} />;
};

export const ConnectStatusWarn = ({
  walletStatus,
  rejected,
  error,
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
