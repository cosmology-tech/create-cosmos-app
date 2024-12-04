import { osmosis } from 'osmojs'
import { Ref, computed } from 'vue'
import { Pool } from "osmojs/osmosis/gamm/v1beta1/balancerPool";
import { useQuery } from '@tanstack/vue-query'

const getPagination = (limit: bigint) => ({
  limit,
  key: new Uint8Array(),
  offset: 0n,
  countTotal: true,
  reverse: false,
});

export const useBalances = (rpcEndpoint: Ref<string>, address: Ref<string>) => {
  const _requestBalances = async (rpcEndpoint: string, address: string) => {
    if (!rpcEndpoint || !address) {
      return
    }
    const { createRPCQueryClient } = osmosis.ClientFactory;
    const client = await createRPCQueryClient({ rpcEndpoint });
    const { balances } = await client.cosmos.bank.v1beta1.allBalances({
      address,
      pagination: getPagination(100n),
    });
    return balances
  }

  const enabled = computed(() => {
    return !!rpcEndpoint.value && !!address.value
  })

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['balances', rpcEndpoint, address],
    queryFn: () => {
      return _requestBalances(rpcEndpoint.value, address.value)
    },
    enabled
  })
  return {
    refetch,
    balances: data,
    isLoading,
    error
  }
}

export const useDelegations = (rpcEndpoint: Ref<string>, address: Ref<string>) => {
  const _requestDelegations = async (rpcEndpoint: string, address: string) => {
    if (!rpcEndpoint || !address) {
      return
    }
    const { createRPCQueryClient } = osmosis.ClientFactory;
    const client = await createRPCQueryClient({ rpcEndpoint });
    const { delegationResponses } = await client.cosmos.staking.v1beta1.delegatorDelegations({
      delegatorAddr: address,
      pagination: getPagination(100n),
    })
    return delegationResponses.map(({ balance }) => balance) || []
  }

  const enabled = computed(() => {
    return !!rpcEndpoint.value && !!address.value
  })

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['delegations', rpcEndpoint, address],
    queryFn: () => {
      return _requestDelegations(rpcEndpoint.value, address.value)
    },
    enabled
  })

  return {
    refetch,
    delegations: data,
    isLoading,
    error
  }
}

export const useLockedCoins = (rpcEndpoint: Ref<string>, address: Ref<string>) => {
  const _requestLockedCoins = async (rpcEndpoint: string, address: string) => {
    if (!rpcEndpoint || !address) {
      return
    }
    const { createRPCQueryClient } = osmosis.ClientFactory;
    const client = await createRPCQueryClient({ rpcEndpoint });
    const { coins } = await client.osmosis.lockup.accountLockedCoins({
      owner: address
    })
    return coins
  }

  const enabled = computed(() => {
    return !!rpcEndpoint.value && !!address.value
  })

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['lockedCoins', rpcEndpoint, address],
    queryFn: () => {
      return _requestLockedCoins(rpcEndpoint.value, address.value)
    },
    enabled
  })
  return {
    refetch,
    lockedCoins: data,
    isLoading,
    error
  }
}

export const usePools = (rpcEndpoint: Ref<string>, address: Ref<string>) => {
  const _requestPools = async (rpcEndpoint: string, address: string) => {
    if (!rpcEndpoint || !address) {
      return
    }
    const { createRPCQueryClient } = osmosis.ClientFactory;
    const client = await createRPCQueryClient({ rpcEndpoint });
    const { pools } = await client.osmosis.gamm.v1beta1.pools({
      pagination: getPagination(5000n),
    })
    return pools as Pool[]
  }

  const enabled = computed(() => {
    return !!rpcEndpoint.value && !!address.value
  })

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['pools', rpcEndpoint, address],
    queryFn: () => {
      return _requestPools(rpcEndpoint.value, address.value)
    },
    enabled
  })
  _requestPools(rpcEndpoint.value, address.value)

  return {
    refetch,
    pools: data,
    isLoading,
    error
  }
}