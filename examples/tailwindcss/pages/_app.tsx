import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { defaultTheme, WalletProvider } from '@cosmos-kit/react';
import { wallets as keplrWallets } from '@cosmos-kit/keplr';
import { wallets as cosmostationWallets } from '@cosmos-kit/cosmostation';
import { wallets as leapWallets } from '@cosmos-kit/leap';

import { TailwindModal } from '../components';
import { ThemeProvider } from '../contexts/theme';

import { SignerOptions } from '@cosmos-kit/core';
import { chains, assets } from 'chain-registry';

function CreateCosmosApp({ Component, pageProps }: AppProps) {
  const signerOptions: SignerOptions = {
    // signingStargate: (_chain: Chain) => {
    //   return getSigningCosmosClientOptions();
    // }
  };

  return (
    <WalletProvider
      chains={chains}
      assetLists={assets}
      wallets={[
        ...keplrWallets,
        ...cosmostationWallets,
        ...leapWallets,
      ]}
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
