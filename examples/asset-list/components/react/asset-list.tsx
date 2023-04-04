import React, { useEffect, useMemo } from 'react';
import { Box, Center, Spinner, Text } from '@chakra-ui/react';
import AssetsOverview from './assets-overview';
import OsmosisAssetsList, { getChainName } from './osmosis-assets';
import { chainName } from '../../config';
import { useChain, useManager } from '@cosmos-kit/react';
import { useRequest, useOsmosisClient } from '../../hooks';
import {
  baseUnitsToDisplayUnits,
  baseUnitsToDollarValue,
  getOsmoAssetByDenom,
  osmoDenomToSymbol,
} from '../../utils';
import { PrettyAsset, PriceHash, Token } from '../types';
import BigNumber from 'bignumber.js';
import tokensApi from '../../api/tokens';
import { Coin } from 'osmojs/types/codegen/cosmos/base/v1beta1/coin';

const tokenToPriceHash = (prev: PriceHash, cur: Token): PriceHash => ({
  ...prev,
  [cur.denom]: cur.price,
});

export const AssetList = () => {
  const { address } = useChain(chainName);
  const { getChainRecord } = useManager();
  const osmosisClient = useOsmosisClient(chainName);
  const getAllBalances = useRequest(osmosisClient.getAllBalances);
  const getAllTokens = useRequest(tokensApi.getTokens);

  const prices = useMemo(() => {
    return getAllTokens.data?.reduce(tokenToPriceHash, {});
  }, [getAllTokens.data]);

  useEffect(() => {
    if (!address) return;

    console.log('getting data...');
    getAllBalances.request({ address });
    getAllTokens.request();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  let assets: PrettyAsset[] = [];
  if ((getAllBalances.data || [])?.length > 0 && prices) {
    const balanceCoins: Coin[] = (getAllBalances.data || []).filter(
      ({ denom }) => !denom.startsWith('gamm') && prices[denom]
    );

    const emptyCoins: Coin[] = (getAllTokens.data || [])
      .filter(
        (token) => !balanceCoins.find(({ denom }) => denom === token.denom)
      )
      .sort((tokenA, tokenB) => tokenB.liquidity - tokenA.liquidity)
      .slice(0, 30)
      .map(({ denom }) => ({ denom, amount: '0' }));

    assets = [...balanceCoins, ...emptyCoins]
      .map(({ amount, denom }) => {
        const asset = getOsmoAssetByDenom(denom);
        const chainName = getChainName(asset.base);
        const chainRecord = getChainRecord(chainName);
        const symbol = osmoDenomToSymbol(denom);
        const dollarValue = baseUnitsToDollarValue(prices, symbol, amount);
        return {
          symbol,
          logoUrl: asset.logo_URIs?.png,
          prettyChainName: chainRecord.chain.pretty_name,
          displayAmount: baseUnitsToDisplayUnits(symbol, amount),
          dollarValue,
          amount,
          denom,
        };
      })
      .sort((a, b) =>
        new BigNumber(a.dollarValue).lt(b.dollarValue) ? 1 : -1
      );
  }

  return (
    <Box maxW="768px" mx="auto" mb="60px">
      <Text
        fontSize="20px"
        fontWeight="600"
        color="#2C3137"
        lineHeight="24px"
        mb="26px"
      >
        My assets
      </Text>
      <AssetsOverview />
      <Text
        fontSize="18px"
        fontWeight="600"
        color="#697584"
        lineHeight="22px"
        mb="20px"
      >
        On Osmosis
      </Text>
      {getAllBalances.loading || !prices ? (
        <Loader />
      ) : (
        <OsmosisAssetsList
          assets={assets}
          prices={prices}
          updateBalances={getAllBalances.request}
        />
      )}
    </Box>
  );
};

const Loader = () => {
  return (
    <Center h="100px">
      <Spinner size="md" color="#2C3137" emptyColor="#EEF2F8" />
    </Center>
  );
};
