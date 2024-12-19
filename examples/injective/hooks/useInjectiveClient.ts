import { useChain, useWalletManager } from '@interchain-kit/react'
import { InjSigningClient } from '@interchainjs/injective/signing-client';
import { toEncoders, toConverters } from '@interchainjs/cosmos/utils';
import { MsgSend } from '../src/codegen/cosmos/bank/v1beta1/tx';
import { useEffect, useMemo, useState } from 'react'

export const useInjectiveClient = (chainName: string) => {
  const { rpcEndpoint, chain } = useChain(chainName)
  const [injectiveClient, setInjectiveClient] = useState<InjSigningClient>()
  const wm = useWalletManager()

  const signer = useMemo(() => {
    if (!chain.chainId) {
      return
    }
    const wallet = wm.getCurrentWallet()
    return wallet.getOfflineSignerDirect(chain.chainId)
  }, [wm, chain])

  const _fetchClient = async (rpcEndpoint: string, signer: any) => {
    if (!rpcEndpoint || !signer) {
      return
    }
    signer.signMode = 'direct'
    let res = await InjSigningClient.connectWithSigner(rpcEndpoint, signer)
    res.addEncoders(toEncoders(MsgSend));
    res.addConverters(toConverters(MsgSend));
    setInjectiveClient(res)
  }

  useEffect(() => {
    _fetchClient(rpcEndpoint as string, signer)
  }, [rpcEndpoint, signer])

  return injectiveClient
}