import { useChain } from "@cosmos-kit/react"
import { useQueryHooks } from "./useQueryHooks";
import { UseQueryResult } from "@tanstack/react-query";
import { getPagination } from "./useTotalAssets";
import { useMemo } from "react";
import { useOsmosisToken } from "./useOsmosisToken";
import { Coin } from "osmo-query/dist/codegen/cosmos/base/v1beta1/coin";
import {
  getAssetByDenom,
  getChainNameByDenom,
  convertBaseUnitToDollarValue,
  getAssetBySymbol,
  convertBaseUnitToDisplayUnit
} from '@chain-registry/utils'
import { useGeckoPrices } from './useGeckoPrices';
import { getAssetsByChainName } from '@/utils/local-chain-registry'
import BigNumber from "bignumber.js";

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

  // get osmosis token
  const { data: topTokens = [], isLoading: isTopTokensLoading } = useOsmosisToken();

  // get gecko prices, get price map
  const { data: priceMap = null, isLoading: isGeckoPricesLading } = useGeckoPrices()

  const data = useMemo(() => {

    if (priceMap) {

      const assets = getAssetsByChainName(chainName)

      return topTokens.map((token) => {

        const { denom, symbol } = token

        const asset = getAssetByDenom(assets, token.denom, chainName)

        const amount = allBalances.find((balance: Coin) => balance.denom === denom)?.amount || '0'

        let dollarValue = '0'
        const assetBySymbol = getAssetBySymbol(assets, symbol)
        if (assetBySymbol) {
          dollarValue = convertBaseUnitToDollarValue(assets, priceMap, symbol, amount)
        }

        let displayAmount = '0'
        if (assetBySymbol) {
          displayAmount = convertBaseUnitToDisplayUnit(assets, symbol, amount)
        }

        const prettyChainName = getChainNameByDenom(assets, denom) || ''

        return {
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

  return { data, isLoading, refetch: refetchAllBalances }
}
