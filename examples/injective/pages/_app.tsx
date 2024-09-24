import '../styles/globals.css';
import '@interchain-ui/react/styles';

import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { assetLists, chains } from '@chain-registry/v2';
import { ChainProvider } from '@interchain-kit/react'
import { keplrWallet } from '@interchain-kit/keplr-extension'
import { leapWallet } from '@interchain-kit/leap-extension'
// @ts-ignore
import { WCWallet } from '@interchain-kit/core'

import { defaultTheme, chainName } from '../config';



const walletConnect = new WCWallet(
  // {
  //   name: 'string;1',
  //   mode: 'wallet-connect',
  //   prettyName: 'string;2',
  //   walletconnect: {
  //     name: 'string;3',
  //     projectId: 'string;4',
  //   }
  // }
)

const queryClient = new QueryClient();

const chainNames = [chainName]
const _chains = chains.filter(c => chainNames.includes(c.chainName))
const _assetLists = assetLists.filter(a => chainNames.includes(a.chainName))

function CreateCosmosApp({ Component, pageProps }: AppProps) {
  const wallets = [keplrWallet, leapWallet, walletConnect]

  return (
    <>
      <ChakraProvider theme={defaultTheme}>
        <QueryClientProvider client={queryClient}>
          <ChainProvider
            chains={_chains}
            assetLists={_assetLists}
            // @ts-ignore
            wallets={wallets}
            signerOptions={{}}
            endpointOptions={{
              endpoints: {}
            }}
          >
            {/* @ts-ignore */}
            <Component {...pageProps} />
          </ChainProvider>
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
}

export default CreateCosmosApp;
