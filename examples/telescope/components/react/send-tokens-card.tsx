import React from 'react';
import {
  Box,
  Button,
  Center,
  Stack,
  Text,
  useTheme
} from '@interchain-ui/react';

export const SendTokensCard = ({
  balance,
  response,
  isFetchingBalance,
  isConnectWallet,
  getBalanceButtonText,
  handleClickGetBalance,
  sendTokensButtonText,
  handleClickSendTokens,
}: {
  balance: number;
  response?: string;
  isFetchingBalance: boolean;
  isConnectWallet: boolean;
  sendTokensButtonText?: string;
  handleClickSendTokens: () => void;
  getBalanceButtonText?: string;
  handleClickGetBalance: () => void;
}) => {
  // const { colorMode } = useColorMode();
  const { theme } = useTheme();
  if (!isConnectWallet) {
    return (
      // @ts-ignore
      <Box boxShadow="0 0 2px #ccc, 0 0 5px -1px #ccc" borderRadius="lg" p={5}>
        <Text
          as="h3"
          attributes={{
            margin: 30,
            textAlign: 'center',
            fontSize: { mobile: 'xl', mdMobile: '2xl' },
            fontWeight: 'extrabold',
            color: 'primary.400',
          }}
        >
          Please Connect Your Wallet!
        </Text>
      </Box>
    );
  }
  return (
    <Stack
      space={6}
      attributes={{
        borderRadius: 'lg',
        width: 'full',
        maxWidth: 'md',
        padding: 6,
        paddingTop: 10,
        boxShadow: theme === 'light' ? '0 0 2px #dfdfdf, 0 0 6px -2px #d3d3d3' : '0 0 2px #212121, 0 0 6px -2px #8a8a8a',
      }}
    >
      <Stack
        direction="horizontal"
        attributes={{
          borderRadius: 'md',
          border: '1px solid',
          padding: 4,
          justifyContent: 'space-between',
          alignItems: 'center',
          borderColor: theme === 'light' ? '$blackAlpha200' : '$whiteAlpha200',
        }}
      >
        <Text>
          Balance:&ensp;
          <Text
            as="span"
            fontWeight="semibold"
            fontSize="xl"
            color={theme === 'light' ? '$blackAlpha800' : '$whiteAlpha800'}
          >
            {balance}
          </Text>
        </Text>
        <Button
          size="sm"
          isLoading={isFetchingBalance}
          variant="outlined"
          onClick={handleClickGetBalance}
        >
          {getBalanceButtonText || 'Fetch Balance'}
        </Button>
      </Stack>
      <Center>
        <Button
          variant="outlined"
          onClick={handleClickSendTokens}
        >
          {sendTokensButtonText || 'Send Tokens (to self)'}
        </Button>
      </Center>
      {response && (
        <Stack>
          <Text fontWeight="medium">Result</Text>
          {/* @ts-ignore */}
          <Box
            border="1px solid"
            borderColor={theme === 'light' ? '$blackAlpha200' : '$whiteAlpha200'}
            bg="rgba(0, 0, 0, 0.01)"
            borderRadius="md"
            opacity={0.8}
            overflowX="scroll"
            p={4}
            attributes={{
              // For Firefox
              scrollbarWidth: 'auto',
              scrollbarColor: theme === 'light' ? 'rgba(0, 0, 0, 0.3) rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.1)',
              // For Chrome and other browsers except Firefox
              '&::-webkit-scrollbar': {
                height: '8px',
                background: theme === 'light' ? 'rgba(220, 220, 220, 0.01)' : 'rgba(0, 0, 0, 0.01)',
                borderRadius: '6px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: theme === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)',
                borderRadius: '6px',
                border: '2px solid transparent',
                backgroundClip: 'content-box',
              },
            }}
          >
            <pre>{response}</pre>
          </Box>
        </Stack>
      )}
    </Stack>
  );
};
