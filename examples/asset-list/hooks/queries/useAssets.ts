import { useChain } from "@cosmos-kit/react"
import { useQueryHooks } from "./useQueryHooks";
import { UseQueryResult } from "@tanstack/react-query";
import { getPagination } from "./useTotalAssets";
import { useMemo } from "react";
import { Coin } from "interchain-query/cosmos/base/v1beta1/coin";
import {
  getChainNameByStakingDenom,
  convertBaseUnitToDisplayUnitByDenom,
  convertBaseUnitToDollarValueByDenom
} from '@chain-registry/utils'
import { useGeckoPrices } from './useGeckoPrices';
import BigNumber from "bignumber.js";
import { PrettyAsset } from "@/components";

import { assets, chains } from '@/utils/local-chain-registry'

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

export const useAssets = (chainName: string) => {

  // address for balance
  const { address } = useChain(chainName)

  // init cosmos query client for balance
  const { cosmosQuery, isReady } = useQueryHooks(chainName);
  const { data: allBalances = [], isLoading: isAllBalanceLoading, refetch: refetchAllBalances }: UseQueryResult<Coin[]> =
    cosmosQuery.bank.v1beta1.useAllBalances({
      request: {
        address: address || '',
        pagination: getPagination(100n),
      },
      options: {
        enabled: isReady,
        select: ({ balances }) => balances || [],
      },
    });

  // get gecko prices, get price map
  const { data: priceMap = {}, isLoading: isGeckoPricesLading } = useGeckoPrices()

  const data = useMemo(() => {

    const assetToDisplay = assets.find(a => a.chain_name === chainName)?.assets || []

    return assetToDisplay.map((asset) => {

      const { base, symbol } = asset

      const amount = allBalances.find((balance: Coin) => balance.denom === base)?.amount || '0'
      const dollarValue = convertBaseUnitToDollarValueByDenom(assets, priceMap, base, amount, chainName)
      const displayAmount = convertBaseUnitToDisplayUnitByDenom(assets, base, amount, chainName)

      const prettyChainName = getChainNameByStakingDenom(chains, base) || ''

      return {
        symbol,
        logoUrl: asset?.logo_URIs?.png || asset?.logo_URIs?.svg,
        prettyChainName,
        displayAmount,
        dollarValue,
        amount,
        denom: base,
      };
    }).sort((a, b) => BigNumber(a.displayAmount).lte(b.displayAmount) ? 1 : -1)

  }, [chainName, allBalances, priceMap])

<<<<<<< HEAD
  const isLoading = [isAllBalanceLoading, isGeckoPricesLading].some(isLoading => isLoading === true)
=======
        let displayAmount = '0'
        if (assetBySymbol) {
          displayAmount = convertBaseUnitToDisplayUnit(assets, symbol, amount)
        }

        const prettyChainName = getChainNameByDenom(assets, denom) || ''

        return {
          ...asset,
          symbol,
          logoUrl: asset?.logo_URIs?.png || asset?.logo_URIs?.svg,
          prettyChainName,
          displayAmount,
          dollarValue,
          amount,
          denom,
        };
      }).sort((a, b) => BigNumber(a.displayAmount).lte(b.displayAmount) ? 1 : -1)
    }
    return []
  }, [topTokens, chainName, allBalances, priceMap])

  const isLoading = [isAllBalanceLoading, isTopTokensLoading, isGeckoPricesLading].some(isLoading => isLoading === true)
>>>>>>> 2e6b1810 (change to chain registry util function)

  return { data, isLoading, refetch: refetchAllBalances }
}
