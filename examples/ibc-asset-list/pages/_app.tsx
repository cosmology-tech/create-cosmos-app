import '../styles/globals.css';
import '@interchain-ui/react/globalStyles';
import '@interchain-ui/react/styles';

import { OverlaysManager, ThemeProvider, Toaster, useTheme } from '@interchain-ui/react';
import type { AppProps } from 'next/app';
import { ChainProvider } from '@cosmos-kit/react';

import { aminoTypes, registry } from '../config/defaults';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { assets, chains } from 'chain-registry';
import { GasPrice } from '@cosmjs/stargate';
import { SignerOptions, wallets } from 'cosmos-kit';
import { Chain } from '@chain-registry/types';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

function CreateCosmosApp({ Component, pageProps }: AppProps) {
  const { themeClass } = useTheme();
  const signerOptions: SignerOptions = {
    // @ts-ignore
    signingStargate: () => {
      return {
        aminoTypes,
        registry,
      };
    },
    // @ts-ignore
    signingCosmwasm: (chain: Chain) => {
      switch (chain.chain_name) {
        case 'osmosis':
        case 'osmosistestnet':
          return {
            gasPrice: GasPrice.fromString('0.0025uosmo'),
          };
      }
    },
  };

  return (
    <ThemeProvider>
      <ChainProvider
        // @ts-ignore
        chains={chains}
        // @ts-ignore
        assetLists={assets}
        wallets={wallets}
        walletConnectOptions={{
          signClient: {
            projectId: 'a8510432ebb71e6948cfd6cde54b70f7',
            relayUrl: 'wss://relay.walletconnect.org',
            metadata: {
              name: 'Cosmos Kit dApp',
              description: 'Cosmos Kit dApp built by Create Cosmos App',
              url: 'https://docs.cosmology.zone/cosmos-kit/',
              icons: [],
            },
          },
        }}
        signerOptions={signerOptions}
      >
        <QueryClientProvider client={queryClient}>
          <main id="main" className={themeClass}>
            <Component {...pageProps} />
          </main>
        </QueryClientProvider>
      </ChainProvider>

      <Toaster position={'top-right'} closeButton={true} />
      <OverlaysManager />
    </ThemeProvider>
  );
}

export default CreateCosmosApp;
