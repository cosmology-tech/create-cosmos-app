import { InjSigningClient } from '@interchainjs/injective/signing-client';
import { Ref, computed, ref, watch } from 'vue'
import { ExtensionWallet } from '@interchain-kit/core'
import { useChain, useWalletManager } from '@interchain-kit/vue'
import { toEncoders, toConverters } from '@interchainjs/cosmos/utils';
import { MsgSend } from 'interchain-vue/cosmos/bank/v1beta1/tx';

export const useInjectiveClient = (chainName: Ref<string>) => {
  const { rpcEndpoint, chain } = useChain(chainName)
  const injectiveClient = ref()
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
    signer.signMode = 'direct'
    let res = await InjSigningClient.connectWithSigner(rpcEndpoint, signer)

    injectiveClient.value = res
    injectiveClient.value?.addEncoders(toEncoders(MsgSend));
    injectiveClient.value?.addConverters(toConverters(MsgSend));
  }
  watch([rpcEndpoint, signer], ([rpc, sn]) => {
    _fetchClient(rpc as string, sn)
  })
  _fetchClient(rpcEndpoint.value as string, signer.value)
  return injectiveClient
}