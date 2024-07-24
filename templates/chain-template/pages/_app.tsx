import '../styles/globals.css';
import '@interchain-ui/react/styles';

import type { AppProps } from 'next/app';
import { SignerOptions } from 'cosmos-kit';
import { ChainProvider } from '@cosmos-kit/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Box, ThemeProvider, Toaster, useTheme } from '@interchain-ui/react';
import { GasPrice } from '@cosmjs/stargate';

import { Layout } from '@/components';
import {
  darkTheme,
  lightTheme,
  CustomTheme,
  wallets,
  staticChains,
  staticAssets,
} from '@/config';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

function CreateCosmosApp({ Component, pageProps }: AppProps) {
  const { themeClass, theme } = useTheme();

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
    <ThemeProvider
      themeDefs={[lightTheme, darkTheme]}
      customTheme={CustomTheme[theme]}
    >
      <ChainProvider
        chains={staticChains}
        // @ts-ignore
        assetLists={staticAssets}
        wallets={wallets}
        walletConnectOptions={{
          signClient: {
            projectId: 'a8510432ebb71e6948cfd6cde54b70f7',
            relayUrl: 'wss://relay.walletconnect.org',
            metadata: {
              name: 'CosmosKit Template',
              description: 'CosmosKit dapp template',
              url: 'https://docs.cosmology.zone/cosmos-kit/',
              icons: [],
            },
          },
        }}
        // @ts-ignore
        signerOptions={signerOptions}
        endpointOptions={{
          endpoints: {
            osmosis: {
              rpc: ['http://localhost:26657'],
            },
          },
        }}
      >
        <QueryClientProvider client={queryClient}>
          <Box className={themeClass}>
            <Layout>
              {/* @ts-ignore */}
              <Component {...pageProps} />
              <Toaster position="top-right" closeButton={true} />
            </Layout>
          </Box>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ChainProvider>
    </ThemeProvider>
  );
}

export default CreateCosmosApp;
