import { useChain } from "@interchain-kit/vue";
import { Proposal } from "../../outputv4/cosmos/gov/v1/gov";
import { computed, ref, Ref } from 'vue'
import { MessageComposer } from "../../outputv4/cosmos/gov/v1/tx.registry";
import { coins, StdFee } from "@cosmjs/amino";
import { useAssets } from "../useAssets";
import { useStargateClient } from "../useStargateClient";

export type useVotingOptions = {
  chainName: Ref<string>;
  proposal: Ref<Proposal>;
}

export type onVoteOptions = {
  option: number;
  success?: () => void
  error?: () => void
}

export function useVoting({ chainName, proposal }: useVotingOptions) {
  const isVoting = ref(false)
  const { address } = useChain(chainName)
  const { allAssets } = useAssets(chainName)
  const stargazeClient = useStargateClient(chainName)

  const onVote = async ({ option, success = () => { }, error = () => { } }: onVoteOptions) => {
    console.log('option', option)
    const msg = computed(() => {
      if (address.value && proposal.value.id) {
        return MessageComposer.fromPartial.vote({
          option,
          voter: address.value,
          proposalId: proposal.value.id,
          metadata: proposal.value.metadata
        })
      }
    })
    const fee: StdFee = {
      amount: coins('1000', allAssets[0].base),
      gas: '100000'
    }

    isVoting.value = true
    try {
      let res = await stargazeClient.value.signAndBroadcast(
        address.value,
        [msg],
        fee
      )
      console.log('[vote result]', res)
      success()
    } catch (e) {
      error()
      console.error(e)
    } finally {
      isVoting.value = false
    }
  }
  return {
    isVoting,
    onVote
  }
}