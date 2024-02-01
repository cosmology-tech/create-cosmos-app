import '../styles/globals.css';
import '@interchain-ui/react/styles';

import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import {chainAsset, chainInfo, defaultTheme} from '../config';

import { SignerOptions, wallets } from 'cosmos-kit';
import { ChainProvider } from '@cosmos-kit/react';
import { assets, chains } from 'chain-registry';
import { getSigningCosmosClientOptions } from 'interchain';
import {AssetList, Chain} from "@chain-registry/types";

function CreateCosmosApp({ Component, pageProps }: AppProps) {
  const _chains: Chain[] = [chainInfo];
  const _assets: AssetList[] = [chainAsset];

  const signerOptions: SignerOptions = {
    signingStargate: () => {
      return getSigningCosmosClientOptions();
    },
  };

  return (
    <ChakraProvider theme={defaultTheme}>
      <ChainProvider
        chains={_chains}
        assetLists={_assets}
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
      >
        <Component {...pageProps} />
      </ChainProvider>
    </ChakraProvider>
  );
}

export default CreateCosmosApp;
