import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChainProvider } from '@cosmos-kit/react';
import { ChakraProvider } from '@chakra-ui/react';
import { wallets as keplrWallets } from '@cosmos-kit/keplr';
import { wallets as cosmostationWallets } from '@cosmos-kit/cosmostation';
import { wallets as leapWallets } from '@cosmos-kit/leap';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import { chains, assets } from 'chain-registry';
import { getSigningCosmosClientOptions } from 'stargazejs';
import { GasPrice } from '@cosmjs/stargate';

import { SignerOptions } from '@cosmos-kit/core';
import { defaultTheme } from 'config';
import '@interchain-ui/react/styles';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

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
          wallets={[...keplrWallets, ...cosmostationWallets, ...leapWallets]}
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
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </ChainProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default CreateCosmosApp;
