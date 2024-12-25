import '../styles/globals.css';
import '@interchain-ui/react/styles';

import type { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ChainProvider } from '@interchain-kit/react';
import {
  defaultAssetList,
  defaultChain,
  defaultChainName,
} from '../config/defaults';
import { keplrWallet } from '@interchain-kit/keplr-extension';
import { leapWallet } from '@interchain-kit/leap-extension';
import {
  Box,
  ThemeProvider,
  Toaster,
  useTheme,
  useColorModeValue,
} from '@interchain-ui/react';
import { defaultRpcEndpoint } from '@/config';
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

  return (
    <ThemeProvider>
      <ChainProvider
        chains={[defaultChain!]}
        assetLists={[defaultAssetList!]}
        // @ts-ignore
        wallets={[keplrWallet]}
        signerOptions={{
          signing: () => {
            return {
              broadcast: {
                checkTx: true,
                deliverTx: true,
              },
            };
          },
        }}
        endpointOptions={{
          endpoints: {
            [defaultChainName]: {
              rpc: [defaultRpcEndpoint],
            },
          },
        }}
      >
        <QueryClientProvider client={queryClient}>
          <Box
            className={themeClass}
            minHeight="100dvh"
            backgroundColor={useColorModeValue('$white', '$background')}
          >
            {/* TODO fix type error */}
            {/* @ts-ignore */}
            <Component {...pageProps} />
          </Box>
        </QueryClientProvider>
      </ChainProvider>

      <Toaster position={'top-right'} closeButton={true} />
    </ThemeProvider>
  );
}

export default CreateCosmosApp;
