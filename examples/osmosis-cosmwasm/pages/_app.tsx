import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChainProvider } from '@cosmos-kit/react';
import { ChakraProvider } from '@chakra-ui/react';
import { wallets as keplrWallets } from '@cosmos-kit/keplr';
import { wallets as cosmostationWallets } from '@cosmos-kit/cosmostation';
import { wallets as leapWallets } from '@cosmos-kit/leap';

import { aminoTypes, registry } from '../config/defaults';
import { assets, chains } from 'chain-registry';
import { GasPrice } from '@cosmjs/stargate';
import { SignerOptions } from '@cosmos-kit/core';
import '@interchain-ui/react/styles';
import { defaultTheme } from '../config';

function CreateCosmosApp({ Component, pageProps }: AppProps) {
  const signerOptions: SignerOptions = {
    signingStargate: () => {
      return {
        aminoTypes,
        registry,
      };
    },
    signingCosmwasm: (chain) => {
      switch (chain.chain_name) {
        case 'osmosis':
        case 'osmosistestnet':
          return {
            gasPrice: GasPrice.fromString('0.0025uosmo'),
          };
        case 'cosmwasmtestnet':
          return {
            gasPrice: GasPrice.fromString('0.0025umlga'),
          };
      }
    },
  };

  return (
    <ChakraProvider theme={defaultTheme}>
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
        endpointOptions={{
          endpoints: {
            osmosistestnet: {
              rpc: ['https://testnet-rpc.osmosis.zone/'],
            },
          },
        }}
      >
        <Component {...pageProps} />
      </ChainProvider>
    </ChakraProvider>
  );
}

export default CreateCosmosApp;
