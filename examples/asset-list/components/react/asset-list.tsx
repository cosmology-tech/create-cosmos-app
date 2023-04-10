import React, { useEffect, useMemo } from 'react';
import {
  Box,
  Center,
  Spinner,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import AssetsOverview from './assets-overview';
import OsmosisAssetsList from './osmosis-assets';
import { useChain, useManager } from '@cosmos-kit/react';
import { useRequest, useOsmosisClient, useIbcAssets } from '../../hooks';
import { PrettyAsset } from '../types';
import BigNumber from 'bignumber.js';
import { getTokens } from '../../api';
import { Coin } from 'osmojs/types/codegen/cosmos/base/v1beta1/coin';
import { ChainName } from '@cosmos-kit/core';

const MAX_TOP_TOKENS = 60;
const MAX_TOKENS_TO_SHOW = 50;

interface IProps {
  selectedChainName: ChainName;
}

export const AssetList: React.FC<IProps> = ({ selectedChainName }) => {
  const { getChainRecord } = useManager();
  const osmosisClient = useOsmosisClient(selectedChainName);
  const { address, isWalletConnected, connect, chain } =
    useChain(selectedChainName);

  const {
    ibcAssets,
    getPriceHash,
    getAssetByDenom,
    convRawToDispAmount,
    calcCoinDollarValue,
    denomToSymbol,
    getPrettyChainName,
  } = useIbcAssets(selectedChainName);

  const getAllTokens = useRequest<typeof getTokens>(getTokens);
  const getPrices = useRequest<typeof getPriceHash>(getPriceHash);
  const getAllBalances = useRequest<typeof osmosisClient.getAllBalances>(
    osmosisClient.getAllBalances
  );

  useEffect(() => {
    if (!address) return;
    getPrices.request();
    getAllBalances.request({ address });

    return () => {
      getPrices.cleanUpData();
      getAllBalances.cleanUpData();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  useEffect(() => {
    getAllTokens.request();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const prices = getPrices.data;
  const allTokens = getAllTokens.data;
  const allBalances = getAllBalances.data;

  const topTokensByLiquidity = useMemo(() => {
    if (!allTokens) return;
    return allTokens
      .sort((a, b) => b.liquidity - a.liquidity)
      .slice(0, MAX_TOP_TOKENS)
      .map((token) => token.symbol);
  }, [allTokens]);

  const assets: PrettyAsset[] = useMemo(() => {
    if (!allBalances || !prices || !topTokensByLiquidity) return [];

    const nativeAndIbcBalances: Coin[] = allBalances.filter(
      ({ denom }) => !denom.startsWith('gamm') && prices[denom]
    );

    const emptyBalances: Coin[] = ibcAssets
      .filter(
        (asset) =>
          !nativeAndIbcBalances.find(({ denom }) => denom === asset.base) &&
          prices[asset.base]
      )
      .filter(
        (asset) =>
          ibcAssets.length <= MAX_TOKENS_TO_SHOW ||
          topTokensByLiquidity.includes(asset.symbol)
      )
      .map((asset) => ({ denom: asset.base, amount: '0' }));

    const allAssets = [...nativeAndIbcBalances, ...emptyBalances]
      .map(({ amount, denom }) => {
        const asset = getAssetByDenom(denom);
        const symbol = denomToSymbol(denom);
        const dollarValue = calcCoinDollarValue(prices, { amount, denom });
        return {
          symbol,
          logoUrl: asset.logo_URIs?.png || asset.logo_URIs?.svg,
          prettyChainName: getPrettyChainName(denom),
          displayAmount: convRawToDispAmount(denom, amount),
          dollarValue,
          amount,
          denom,
        };
      })
      .sort((a, b) =>
        new BigNumber(a.dollarValue).lt(b.dollarValue) ? 1 : -1
      );
    return allAssets;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allBalances, topTokensByLiquidity, prices, getChainRecord]);

  const titleColor = useColorModeValue('#697584', '#A7B4C2');

  if (!isWalletConnected) {
    return (
      <Box maxW="768px" mx="auto" mb="60px">
        <SectionTitle />
        <Center h="120px" bg="#F5F7FB" borderRadius="6px">
          <Text fontSize="18px" color="#2C3137">
            <span style={{ cursor: 'pointer' }} onClick={connect}>
              Connect the wallet
            </span>
            &nbsp;<span style={{ color: '#697584' }}>to see the assets</span>
          </Text>
        </Center>
      </Box>
    );
  }

  return (
    <Box maxW="768px" mx="auto" mb="60px">
      <SectionTitle />
      <AssetsOverview
        assets={assets}
        prices={prices}
        balances={allBalances}
        isGettingBalances={getAllBalances.loading}
        updateBalances={getAllBalances.request}
        selectedChainName={selectedChainName}
      />
      <Text
        fontSize="18px"
        fontWeight="600"
        color={titleColor}
        lineHeight="22px"
        mb="20px"
      >
        On {chain.pretty_name}
      </Text>
      {getAllBalances.loading || !prices ? (
        <Loader />
      ) : (
        <OsmosisAssetsList
          assets={assets}
          prices={prices}
          updateBalances={getAllBalances.request}
          selectedChainName={selectedChainName}
        />
      )}
    </Box>
  );
};

const SectionTitle = () => {
  const textColor = useColorModeValue('#2C3137', '#EEF2F8');
  return (
    <Text
      fontSize="20px"
      fontWeight="600"
      color={textColor}
      lineHeight="24px"
      mb="26px"
    >
      My Assets
    </Text>
  );
};

const Loader = () => {
  return (
    <Center h="100px">
      <Spinner size="md" color="#2C3137" emptyColor="#EEF2F8" />
    </Center>
  );
};
