import { Ref, computed, ref, watch } from 'vue'
import { ExtensionWallet } from '@interchain-kit/core'
import { useChain, useWalletManager } from '@interchain-kit/vue'
import { SigningStargateClient } from '@cosmjs/stargate'

export const useStargateClient = (chainName: Ref<string>) => {
  const { rpcEndpoint, chain } = useChain(chainName)
  const stargazeClient = ref()
  const wm = useWalletManager()
  const signer = computed(() => {
    if (!chain.value.chainId) {
      return
    }
    const wallet = wm.getCurrentWallet() as unknown as ExtensionWallet
    return wallet.getOfflineSigner(chain.value.chainId, 'direct') // cosmoshub-4
  })
  const _fetchClient = async (rpcEndpoint: string, signer: any) => {
    if (!rpcEndpoint || !signer) {
      return
    }
    let res = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer)
    stargazeClient.value = res
  }
  watch([rpcEndpoint, signer], ([rpc, sn]) => {
    _fetchClient(rpc as string, sn)
  })
  _fetchClient(rpcEndpoint.value as string, signer.value)
  return stargazeClient
}