import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { WalletProvider } from '@cosmos-kit/react';
import { ChakraProvider } from '@chakra-ui/react';
import { defaultTheme, chainName } from '../config';
import { wallets } from '@cosmos-kit/keplr';

import { SignerOptions } from '@cosmos-kit/core';
import { chains, assets } from 'chain-registry';

function CreateCosmosApp({ Component, pageProps }: AppProps) {
  const signerOptions: SignerOptions = {
    // stargate: (_chain: Chain) => {
    //   return getSigningCosmosClientOptions();
    // }
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
