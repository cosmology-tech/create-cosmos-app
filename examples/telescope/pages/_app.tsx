import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { WalletProvider } from '@cosmos-kit/react';
import { ChakraProvider } from '@chakra-ui/react';
import { defaultTheme, chainName } from '../config';
import { wallets } from '@cosmos-kit/keplr';
import { chains, assets } from 'chain-registry';
import { getSigningCosmosClientOptions } from '../codegen';

import { SignerOptions } from '@cosmos-kit/core';
import { Chain } from '@chain-registry/types';
import { GasPrice } from '@cosmjs/stargate';

function CreateCosmosApp({ Component, pageProps }: AppProps) {
  const signerOptions: SignerOptions = {
    stargate: (_chain: Chain) => {
      return getSigningCosmosClientOptions();
    },
    cosmwasm: (chain: Chain) => {
      switch (chain.chain_name) {
        case 'osmosis':
          return {
            gasPrice: GasPrice.fromString('0.0025uosmo')
          };
        case 'juno':
          return {
            gasPrice: GasPrice.fromString('0.0025ujuno')
          };
        case 'stargaze':
          return {
            gasPrice: GasPrice.fromString('0.0025ustars')
          };
      }
    }
  };

  return (
    <ChakraProvider theme={defaultTheme}>
      <WalletProvider
        chains={chains.filter(chain => chain.chain_name === chainName)}
        assetLists={assets.filter(asset => asset.chain_name === chainName)}
        wallets={wallets}
        signerOptions={signerOptions}
      >
        <Component {...pageProps} />
      </WalletProvider>
    </ChakraProvider>
  );
}

export default CreateCosmosApp;
