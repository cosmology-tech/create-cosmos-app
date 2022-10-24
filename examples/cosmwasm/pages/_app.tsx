import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { WalletProvider } from '@cosmos-kit/react';
import { ChakraProvider } from '@chakra-ui/react';
import { defaultTheme } from '../config';
import { wallets } from '@cosmos-kit/keplr';
import { assets, chains } from 'chain-registry';
import { getSigningCosmosClientOptions } from 'interchain';
import { GasPrice } from '@cosmjs/stargate';

import { SignerOptions } from '@cosmos-kit/core';
import { Chain } from '@chain-registry/types';

function CreateCosmosApp({ Component, pageProps }: AppProps) {
  const signerOptions: SignerOptions = {
    stargate: (_chain: Chain) => {
      return getSigningCosmosClientOptions();
    },
    cosmwasm: (chain: Chain) => {
      switch (chain.chain_name) {
        case 'cosmwasmtestnet':
          return {
            gasPrice: GasPrice.fromString('0.0025umlga')
          };
      }
    }
  };

  return (
    <ChakraProvider theme={defaultTheme}>
      <WalletProvider
        chains={chains}
        assetLists={assets}
        wallets={wallets}
        signerOptions={signerOptions}
        endpointOptions={{
          cosmwasmtestnet: {
            rpc: ['https://rpc.malaga-420.cosmwasm.com/']
          }
        }}
      >
        <Component {...pageProps} />
      </WalletProvider>
    </ChakraProvider>
  );
}

export default CreateCosmosApp;
