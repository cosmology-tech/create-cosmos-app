import { osmosis } from 'osmojs'
import { ref, Ref, watch, computed } from 'vue'
import { Coin } from 'osmojs/cosmos/base/v1beta1/coin';
import { Pool } from "osmojs/osmosis/gamm/v1beta1/balancerPool";

const getPagination = (limit: bigint) => ({
  limit,
  key: new Uint8Array(),
  offset: 0n,
  countTotal: true,
  reverse: false,
});

export const useBalances = (rpcEndpoint: Ref<string>, address: Ref<string>) => {
  const allBalances = ref<Coin[]>([])
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
    allBalances.value = balances
  }
  watch([rpcEndpoint, address], ([rpc, addr]) => {
    if (rpc && addr) {
      _requestBalances(rpc, addr)
    }
  })
  _requestBalances(rpcEndpoint.value, address.value)
  return allBalances
}

export const useDelegations = (rpcEndpoint: Ref<string>, address: Ref<string>) => {
  const delegations = ref<Coin[]>([])
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
    delegations.value = delegationResponses.map(({ balance }) => balance) || []
  }
  watch([rpcEndpoint, address], ([rpc, addr]) => {
    if (rpc && addr) {
      _requestDelegations(rpc, addr)
    }
  })
  _requestDelegations(rpcEndpoint.value, address.value)
  return delegations
}

export const useLockedCoins = (rpcEndpoint: Ref<string>, address: Ref<string>) => {
  const lockedCoins = ref<Coin[]>([])
  const _requestLockedCoins = async (rpcEndpoint: string, address: string) => {
    if (!rpcEndpoint || !address) {
      return
    }
    const { createRPCQueryClient } = osmosis.ClientFactory;
    const client = await createRPCQueryClient({ rpcEndpoint });
    const { coins } = await client.osmosis.lockup.accountLockedCoins({
      owner: address
    })
    lockedCoins.value = coins
  }
  watch([rpcEndpoint, address], ([rpc, addr]) => {
    if (rpc && addr) {
      _requestLockedCoins(rpc, addr)
    }
  })
  _requestLockedCoins(rpcEndpoint.value, address.value)
  return lockedCoins
}

export const usePools = (rpcEndpoint: Ref<string>, address: Ref<string>) => {
  const pools = ref<Pool[]>([])
  const _requestLockedCoins = async (rpcEndpoint: string, address: string) => {
    if (!rpcEndpoint || !address) {
      return
    }
    const { createRPCQueryClient } = osmosis.ClientFactory;
    const client = await createRPCQueryClient({ rpcEndpoint });
    const { pools: pls } = await client.osmosis.gamm.v1beta1.pools({
      pagination: getPagination(5000n),
    })
    if (pools) {
      // @ts-ignore
      pools.value = pls
    }
  }
  watch([rpcEndpoint, address], ([rpc, addr]) => {
    if (rpc && addr) {
      _requestLockedCoins(rpc, addr)
    }
  })
  _requestLockedCoins(rpcEndpoint.value, address.value)

  return pools
}