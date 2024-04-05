import '../styles/globals.css';
import '@interchain-ui/react/styles';

import type { AppProps } from 'next/app';

import { SignerOptions, wallets } from 'cosmos-kit';
import { ChainProvider } from '@cosmos-kit/react';
import { chains, assets } from 'chain-registry';

import { TailwindModal } from '../components';
import { ThemeProvider } from '../contexts/theme';


function CreateCosmosApp({ Component, pageProps }: AppProps) {
  const signerOptions: SignerOptions = {
    // signingStargate: () => {
    //   return getSigningCosmosClientOptions();
    // }
  };

  return (
    <ChainProvider
      chains={chains}
      assetLists={assets}
      wallets={wallets}
      walletConnectOptions={{
        signClient: {
          projectId: 'a8510432ebb71e6948cfd6cde54b70f7',
          relayUrl: 'wss://relay.walletconnect.org',
          metadata: {
            name: 'CosmosKit Template',
            description: 'CosmosKit dapp template',
            url: 'https://docs.cosmology.zone/cosmos-kit/',
            icons: [],
          },
        },
      }}
      signerOptions={signerOptions}
      walletModal={TailwindModal}
    >
      <ThemeProvider>
        <div className="min-h-screen text-black bg-white dark:bg-gray-bg dark:text-white">
          {/* TODO fix type error */}
          {/* @ts-ignore */}
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </ChainProvider>
  );
}

export default CreateCosmosApp;
