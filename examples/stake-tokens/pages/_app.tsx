import '@interchain-ui/react/styles';
import '@interchain-ui/react/globalStyles';

import type { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { SignerOptions, wallets } from 'cosmos-kit';
import { ChainProvider } from '@cosmos-kit/react';
import { chains, assets } from 'chain-registry';
import { GasPrice } from '@cosmjs/stargate';

import {
  Box,
  Toaster,
  useTheme,
  useColorModeValue,
  ThemeProvider,
  OverlaysManager,
} from '@interchain-ui/react';

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
    // TODO fix type error
    // @ts-ignore
    signingStargate: (chain) => {
      let gasPrice;
      try {
        // TODO fix type error
        // @ts-ignore
        const feeToken = chain.fees?.fee_tokens[0];
        const fee = `${feeToken?.average_gas_price || 0.025}${feeToken?.denom}`;
        gasPrice = GasPrice.fromString(fee);
      } catch (error) {
        gasPrice = GasPrice.fromString('0.025uosmo');
      }
      return { gasPrice };
    },
  };

  return (
    <ThemeProvider>
      <ChainProvider
        // @ts-ignore
        chains={chains}
        // @ts-ignore
        assetLists={assets}
        wallets={wallets}
        walletConnectOptions={{
          signClient: {
            projectId: 'a8510432ebb71e6948cfd6cde54b70f7',
            relayUrl: 'wss://relay.walletconnect.org',
            metadata: {
              name: 'Cosmos Kit dApp',
              description: 'Cosmos Kit dApp built by Create Cosmos App',
              url: 'https://docs.cosmology.zone/cosmos-kit/',
              icons: [],
            },
          },
        }}
        signerOptions={signerOptions}
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
            <Toaster position="top-right" closeButton={true} />
          </Box>
          {/* <ReactQueryDevtools /> */}
        </QueryClientProvider>
      </ChainProvider>
      <OverlaysManager />
    </ThemeProvider>
  );
}

export default CreateCosmosApp;
