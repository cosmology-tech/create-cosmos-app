// @ts-nocheck
import '../styles/globals.css';
import '@interchain-ui/react/styles';

import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { ChainProvider } from '@cosmos-kit/react';
import { SignerOptions, wallets } from 'cosmos-kit';
import { chains, assets } from 'chain-registry';

import { getSigningCosmosClientOptions } from 'interchain';

import { defaultTheme } from '../config';

function CreateCosmosApp({ Component, pageProps }: AppProps) {
  const signerOptions: SignerOptions = {
    // @ts-ignore
    signingStargate: () => {
      return getSigningCosmosClientOptions();
    },
  };

  return (
    <ChakraProvider theme={defaultTheme}>
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
    </ChakraProvider>
  );
}

export default CreateCosmosApp;
