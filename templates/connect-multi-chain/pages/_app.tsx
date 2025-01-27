import '../styles/globals.css';
import '@interchain-ui/react/styles';

import type { AppProps } from 'next/app';
import { SignerOptions, wallets } from 'cosmos-kit';
import { ChainProvider } from '@cosmos-kit/react';
import { assets, chains } from 'chain-registry';
import {
  Box,
  ThemeProvider,
  useColorModeValue,
  useTheme,
} from '@interchain-ui/react';

function CreateCosmosApp({ Component, pageProps }: AppProps) {
  const { themeClass } = useTheme();

  const signerOptions: SignerOptions = {
    // signingStargate: () => {
    //   return getSigningCosmosClientOptions();
    // }
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
              url: 'https://docs.hyperweb.io/cosmos-kit/',
              icons: [],
            },
          },
        }}
        // @ts-ignore
        signerOptions={signerOptions}
      >
        <Box
          className={themeClass}
          minHeight="100dvh"
          backgroundColor={useColorModeValue('$white', '$background')}
        >
          {/* @ts-ignore */}
          <Component {...pageProps} />
        </Box>
      </ChainProvider>
    </ThemeProvider>
  );
}

export default CreateCosmosApp;
