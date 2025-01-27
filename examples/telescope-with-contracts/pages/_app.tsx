import '../styles/globals.css';
import '@interchain-ui/react/styles';

import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { SignerOptions, wallets } from 'cosmos-kit';
import { ChainProvider } from '@cosmos-kit/react';
import { chains, assets } from 'chain-registry';
import { getSigningCosmosClientOptions } from 'stargazejs';
import { GasPrice } from '@cosmjs/stargate';

import { defaultTheme } from 'config';


const queryClient = new QueryClient();

const client = new ApolloClient({
  uri: 'https://constellations-api.mainnet.stargaze-apis.com/graphql',
  cache: new InMemoryCache(),
});

function CreateCosmosApp({ Component, pageProps }: AppProps) {
  const signerOptions: SignerOptions = {
    signingStargate: () => {
      return getSigningCosmosClientOptions();
    },
    signingCosmwasm: (chain) => {
      switch (chain.chain_name) {
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
          <ApolloProvider client={client}>
            {/* TODO fix type error */}
            {/* @ts-ignore */}
            <Component {...pageProps} />
          </ApolloProvider>
        </ChainProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default CreateCosmosApp;
