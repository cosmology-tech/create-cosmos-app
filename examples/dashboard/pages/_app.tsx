import '../style/test-style.css';
import '@interchain-ui/react/styles';

import { ChakraProvider } from '@chakra-ui/react';
import { Decimal } from '@cosmjs/math';
import { GasPrice } from '@cosmjs/stargate';
import { ChainProvider } from '@cosmos-kit/react';
import { assets, chains } from 'chain-registry';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
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
        signerOptions={{
          signingStargate: (chain) => {
            switch (chain.chain_name) {
              case 'osmosis':
                return {
                  gasPrice: new GasPrice(Decimal.zero(1), 'uosmo'),
                };
              default:
                return void 0;
            }
          },
        }}
      >
        {/* TODO fix type error */}
        {/* @ts-ignore */}
        <Component {...pageProps} />
      </ChainProvider>
    </ChakraProvider>
  );
}

export default MyApp;
