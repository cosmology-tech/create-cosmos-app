import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { WalletProvider } from '@cosmos-kit/react';
import { wallets } from '@cosmos-kit/keplr';
import { TailwindModal } from '../components';
import { ThemeProvider } from '../contexts/theme';

import { SignerOptions } from '@cosmos-kit/core';
import { chains, assets } from 'chain-registry';

function CreateCosmosApp({ Component, pageProps }: AppProps) {
  const signerOptions: SignerOptions = {
    // stargate: (_chain: Chain) => {
    //   return getSigningCosmosClientOptions();
    // }
  };

  return (
    <WalletProvider
      chains={chains}
      assetLists={assets}
      wallets={wallets}
      signerOptions={signerOptions}
      walletModal={TailwindModal}
    >
      <ThemeProvider>
        <div className="min-h-screen text-black bg-white dark:bg-gray-bg dark:text-white">
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </WalletProvider>
  );
}

export default CreateCosmosApp;
