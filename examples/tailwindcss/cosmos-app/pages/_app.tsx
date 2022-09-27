import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WalletProvider } from '@cosmos-kit/react'
import { ChakraProvider } from '@chakra-ui/react'
import { defaultTheme } from '../config'
import { wallets } from '@cosmos-kit/config'
import { TailwindModal } from '../components'

import { SignerOptions } from '@cosmos-kit/core'
import { chains } from 'chain-registry'

function CreateCosmosApp({ Component, pageProps }: AppProps) {
  const signerOptions: SignerOptions = {
    // stargate: (_chain: Chain) => {
    //   return getSigningCosmosClientOptions();
    // }
  }

  return (
    <ChakraProvider theme={defaultTheme}>
      <WalletProvider
        chains={chains}
        wallets={wallets}
        signerOptions={signerOptions}
        walletModal={TailwindModal}
      >
        <Component {...pageProps} />
      </WalletProvider>
    </ChakraProvider>
  )
}

export default CreateCosmosApp
