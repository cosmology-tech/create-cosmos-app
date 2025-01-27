import '../styles/globals.css';
import '@interchain-ui/react/styles';

import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { defaultTheme } from '../config';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { ChainProvider } from '@cosmos-kit/react';
import { SignerOptions, wallets } from 'cosmos-kit';
import { assets, chains } from 'chain-registry';
import { GasPrice } from '@cosmjs/stargate';
import { aminoTypes, registry } from '../config/defaults';
import { Chain } from '@chain-registry/types';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

function CreateCosmosApp({ Component, pageProps }: AppProps) {
  const signerOptions: SignerOptions = {
    // @ts-ignore
    signingStargate: () => {
      return {
        aminoTypes,
        registry,
      };
    },
    // @ts-ignore
    signingCosmwasm: (chain: Chain) => {
      switch (chain.chain_name) {
        case 'osmosis':
        case 'osmosistestnet':
          return {
            gasPrice: GasPrice.fromString('0.0025uosmo'),
          };
      }
    },
  };

  return (
    <ChakraProvider theme={defaultTheme}>
      <ChainProvider
        chains={chains}
        assetLists={assets}
        wallets={wallets}
        signerOptions={signerOptions}
        walletConnectOptions={{
          signClient: {
            projectId: 'a8510432ebb71e6948cfd6cde54b70f7',
            relayUrl: 'wss://relay.walletconnect.org',
            metadata: {
              name: 'Cosmos Kit dApp',
              description: 'Cosmos Kit dApp built by Create Cosmos App',
              url: 'https://docs.hyperweb.io/cosmos-kit/',
              icons: [],
            },
          },
        }}
      >
        <QueryClientProvider client={queryClient}>
          {/* TODO fix type error */}
          {/* @ts-ignore */}
          <Component {...pageProps} />
        </QueryClientProvider>
      </ChainProvider>
    </ChakraProvider>
  );
}

export default CreateCosmosApp;
