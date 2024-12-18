import { Ref, computed } from 'vue'
import { useBalance } from '../common/useBalance'
import { useDelegationValidators } from './useDelegationValidators'
import { useDelegationTotalRewards } from './useDelegationTotalRewards'
import { useValidators } from '../common/useValidators'
import { useDelegatorDelegations } from '../common/useDelegatorDelegations'
import { useAnnualProvisions } from './useAnnualProvisions'
import { useCommunityTax } from './useCommunityTax'
import { calcTotalDelegation, extendValidators } from '../../utils/stake-tokens/staking'
import { usePool } from '../common/usePool'

export const useStakingData = (chainName: Ref<string>) => {
  const { data: balance, isLoading: isBalanceLoading, refetch: refetchBalance } = useBalance(chainName)

  const { data: delegationValidators, refetch: refetchDelegationValidators } = useDelegationValidators(chainName)


  const { data: delegationTotalRewards, refetch: refetchDelegationTotalRewards } = useDelegationTotalRewards(chainName)

  const { data: allValidators, refetch: refetchAllValidators } = useValidators(chainName)

  const { data: delegatorDelegations, refetch: refetchDelegatorDelegations } = useDelegatorDelegations(chainName)

  const { data: annualProvisions, refetch: refetchAnnualProvisions } = useAnnualProvisions(chainName)

  const { data: communityTax, refetch: refetchUseCommunityTax } = useCommunityTax(chainName)

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

  const extendedMyValidators = computed(() => {
    return extendValidators(
      delegationValidators.value,
      delegatorDelegations.value,
      delegationTotalRewards.value?.byValidators,
      chainMetadata.value
    )
  })

  const extendedAllValidators = computed(() => {
    return extendValidators(
      allValidators.value,
      delegatorDelegations.value,
      delegationTotalRewards.value?.byValidators,
      chainMetadata.value
    )
  })

  const refetch = () => {
    refetchBalance()
    refetchAllValidators()
    refetchAnnualProvisions()
    refetchDelegationTotalRewards()
    refetchDelegatorDelegations()
    refetchDelegationValidators()
    refetchUseCommunityTax
  }

  return {
    balance,
    rewards: delegationTotalRewards,
    totalDelegated,
    isLoading,
    allValidators: extendedAllValidators,
    myValidators: extendedMyValidators,
    refetch
  }
}