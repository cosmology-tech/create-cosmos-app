import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { WalletProvider } from '@cosmos-kit/react';
import { ChakraProvider } from '@chakra-ui/react';
import { defaultTheme } from '../config';
import { wallets } from '@cosmos-kit/keplr';
import { chains } from 'chain-registry';
import { getSigningCosmosClientOptions } from 'stargaze-zone';
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
        chains={chains}
        wallets={wallets}
        signerOptions={signerOptions}
      >
        <Component {...pageProps} />
      </WalletProvider>
    </ChakraProvider>
  );
}

export default CreateCosmosApp;