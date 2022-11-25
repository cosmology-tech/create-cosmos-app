import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { WalletProvider } from '@cosmos-kit/react';
import { ChakraProvider } from '@chakra-ui/react';
import { defaultTheme, chainName } from '../config';
import { wallets as keplrWallets } from '@cosmos-kit/keplr';
import { wallets as cosmostationWallets } from '@cosmos-kit/cosmostation';
import { wallets as leapWallets } from '@cosmos-kit/leap';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { chains, assets } from 'chain-registry';
import { getSigningCosmosClientOptions } from '../codegen';

import { SignerOptions } from '@cosmos-kit/core';
import { Chain } from '@chain-registry/types';
import { GasPrice } from '@cosmjs/stargate';

const queryClient = new QueryClient();

function CreateCosmosApp({ Component, pageProps }: AppProps) {
  const signerOptions: SignerOptions = {
    signingStargate: (_chain: Chain) => {
      return getSigningCosmosClientOptions();
    },
    signingCosmwasm: (chain: Chain) => {
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
      <QueryClientProvider client={queryClient} >
        <WalletProvider
          chains={chains}
          assetLists={assets}
          wallets={[...keplrWallets, ...cosmostationWallets, ...leapWallets]}
          signerOptions={signerOptions}
        >
          <Component {...pageProps} />
        </WalletProvider>
        {/* <ReactQueryDevtools initialIsOpen={false}/> */}
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default CreateCosmosApp;
