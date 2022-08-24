import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { GasPrice } from '@cosmjs/stargate'
import { ChakraProvider } from '@chakra-ui/react';
import { defaultTheme } from '../config';
import { ChainInfoID } from '@cosmos-kit/types';
import { WalletManagerProvider } from '@cosmos-kit/react';

const LOCAL_STORAGE_KEY = 'connectedWalletId'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <WalletManagerProvider
      walletConnectClientMeta={{
        name: 'CosmosWalletDApp',
        description: 'A dApp using the @cosmos-kit/react library.',
        url: 'https://github.com/cosmology-tech/cosmos-wallet/tree/main/packages/react',
        // @cosmology-tech's GitHub avatar
        icons: ['https://avatars.githubusercontent.com/u/101243801?s=200&v=4'],
      }}
      renderLoader={() => <p>Loading...</p>}
      localStorageKey={LOCAL_STORAGE_KEY}
      defaultChainId={ChainInfoID.Juno1}
      getSigningCosmWasmClientOptions={(chainInfo) => ({
        gasPrice: GasPrice.fromString(
          '0.0025' + chainInfo.feeCurrencies[0].coinMinimalDenom
        ),
      })}
      getSigningStargateClientOptions={(chainInfo) => ({
        gasPrice: GasPrice.fromString(
          '0.0025' + chainInfo.feeCurrencies[0].coinMinimalDenom
        ),
      })}
    // Choose a different RPC node for the desired chain.
    // chainInfoOverrides={[
    //   {
    //     ...ChainInfoMap[ChainInfoID.Juno1],
    //     rpc: "https://another.rpc.com",
    //   }
    // ]}
    >
      <ChakraProvider theme={defaultTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </WalletManagerProvider>
  )
}

export default MyApp
