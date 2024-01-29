import type { AppProps } from 'next/app';
import { ChainProvider } from '@cosmos-kit/react';
import { wallets as keplr } from '@cosmos-kit/keplr';
import { wallets as cosmostation } from '@cosmos-kit/cosmostation';
import { wallets as leap } from '@cosmos-kit/leap';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Box, ThemeProvider, Toaster, useTheme, useColorModeValue } from '@interchain-ui/react';
import '@interchain-ui/react/styles';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { SignerOptions } from '@cosmos-kit/core';
import { chains, assets } from 'chain-registry';
import '../styles/globals.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

function CreateCosmosApp({ Component, pageProps }: AppProps) {
  const { themeClass } = useTheme();

  const signerOptions: SignerOptions = {
    // signingStargate: () => {
    //   return getSigningCosmosClientOptions();
    // }
  };

  return (
    <ThemeProvider>
      <ChainProvider
        chains={chains}
        assetLists={assets}
        wallets={[...keplr, ...leap]}
        walletConnectOptions={{
          signClient: {
            projectId: 'a8510432ebb71e6948cfd6cde54b70f7',
            relayUrl: 'wss://relay.walletconnect.org',
            metadata: {
              name: 'CosmosKit Template',
              description: 'CosmosKit dapp template',
              url: 'https://docs.cosmoskit.com/',
              icons: [],
            },
          },
        }}
        signerOptions={signerOptions}
      >
        <QueryClientProvider client={queryClient}>
          <Box className={themeClass} minHeight="100dvh" backgroundColor={useColorModeValue('$white', '$background')}>
            <Component {...pageProps} />
          </Box>
        </QueryClientProvider>
      </ChainProvider>

      <Toaster position={'top-right'} closeButton={true} />
    </ThemeProvider>
  );
}

export default CreateCosmosApp;
