import { Ref, computed } from 'vue'
import { useChain } from '@interchain-kit/vue'
import { useRpcClient } from '../../codegen'
import { useBalance } from '../useBalance'
import { useDelegationValidators } from './useDelegationValidators'
import { useDelegationTotalRewards } from './useDelegationTotalRewards'
import { useValidators } from '../useValidators'
import { useDelegationDelegators } from '../useDelegatorDelegations'
import { useParams } from './useParams'
import { useAnnualProvisions } from './useAnnualProvisions'
import { useCommunityTax } from './useCommunityTax'
import { calcTotalDelegation, extendValidators } from '../../utils/stake-tokens/staking'
import { usePool } from '../usePool'

export const useStakingData = (chainName: Ref<string>) => {
  const { rpcEndpoint, address } = useChain(chainName)
  const { data: rpcClient } = useRpcClient({
    rpcEndpoint,
    options: {
      enabled: computed(() => !!rpcEndpoint.value),
    },
  });

  const { data: balance, isLoading: isBalanceLoading } = useBalance(chainName)

  const { data: delegationValidators } = useDelegationValidators(chainName)
  console.log('delegationValidators', delegationValidators)


  const { data: delegationTotalRewards } = useDelegationTotalRewards(chainName)
  console.log('delegationTotalRewards>', delegationTotalRewards)

  const { validators: allValidators } = useValidators(chainName)

  const { data: delegatorDelegations } = useDelegationDelegators(chainName)
  console.log('delegatorDelegations>', delegatorDelegations)

  const { data: params } = useParams(chainName)
  console.log('params>>', params)

  const { data: annualProvisions } = useAnnualProvisions(chainName)
  console.log('annualProvisions', annualProvisions)

  const { data: communityTax } = useCommunityTax(chainName)
  console.log('communityTax', communityTax)

  const { pool } = usePool(chainName)

  const totalDelegated = computed<string>(() => {
    if (delegatorDelegations.value) {
      return calcTotalDelegation(delegatorDelegations.value)
    }
    return '0'
  })

  const isLoading = computed(() => {
    return isBalanceLoading.value
  })

  const chainMetadata = computed(() => {
    return {
      annualProvisions: annualProvisions.value || '',
      communityTax: communityTax.value || '',
      pool: pool.value || {
        notBondedTokens: '0',
        bondedTokens: '0'
      }
    }
  })

  const extendedAllValidators = computed(() => {
    return extendValidators(
      allValidators.value,
      delegatorDelegations.value,
      delegationTotalRewards.value?.byValidators,
      chainMetadata.value
    )
  })

  return {
    balance,
    rewards: delegationTotalRewards,
    totalDelegated,
    isLoading,
    allValidators: extendedAllValidators
  }
}