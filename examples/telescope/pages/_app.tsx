import '../styles/globals.css';
import '@interchain-ui/react/styles';

import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { SignerOptions, wallets } from 'cosmos-kit';
import { ChainProvider } from '@cosmos-kit/react';
import { chains, assets } from 'chain-registry';
import { getSigningCosmosClientOptions } from '../src/codegen';
import { GasPrice } from '@cosmjs/stargate';

import { defaultTheme } from '../config';

const queryClient = new QueryClient();

function CreateCosmosApp({ Component, pageProps }: AppProps) {
  const signerOptions: SignerOptions = {
    signingStargate: () => {
      return getSigningCosmosClientOptions();
    },
    signingCosmwasm: (chain) => {
      switch (chain.chain_name) {
        case 'osmosis':
          return {
            gasPrice: GasPrice.fromString('0.0025uosmo'),
          };
        case 'juno':
          return {
            gasPrice: GasPrice.fromString('0.0025ujuno'),
          };
        case 'stargaze':
          return {
            gasPrice: GasPrice.fromString('0.0025ustars'),
          };
      }
    },
  };

  return (
    <ChakraProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <ChainProvider
          chains={chains}
          assetLists={assets}
          wallets={wallets}
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
          signerOptions={signerOptions}
        >
          {/* TODO fix type error */}
          {/* @ts-ignore */}
          <Component {...pageProps} />
        </ChainProvider>
        {/* <ReactQueryDevtools initialIsOpen={false}/> */}
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default CreateCosmosApp;
