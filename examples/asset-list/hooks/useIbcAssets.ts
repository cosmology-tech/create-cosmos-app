import { useManager } from '@cosmos-kit/react';
import { useMemo } from 'react';
import { Asset } from '@chain-registry/types';
import { asset_lists as ibcAssetLists } from '@chain-registry/assets';
import { assets as chainAssets, ibc } from 'chain-registry';
import { getPrices } from '../api';
import { CoinDenom, CoinSymbol, Exponent, PriceHash } from '../utils/types';
import BigNumber from 'bignumber.js';
import { Coin } from '@cosmjs/amino';
import { PrettyAsset } from '../components';
import { ChainName } from '@cosmos-kit/core';

export const useIbcAssets = (chainName: string) => {
  const { getChainRecord } = useManager();

  const { nativeAssets, ibcAssets } = useMemo(() => {
    const nativeAssets: Asset[] =
      chainAssets.find((chain) => chain.chain_name === chainName)?.assets || [];
    const ibcAssets: Asset[] =
      ibcAssetLists.find((chain) => chain.chain_name === chainName)?.assets ||
      [];
    return { nativeAssets, ibcAssets };
  }, [chainName]);

  const allAssets = [...nativeAssets, ...ibcAssets];

  const getPriceHash = async (): Promise<PriceHash> => {
    const geckoIdAssets = allAssets.filter((asset) => !!asset?.coingecko_id);

    const geckoIds = geckoIdAssets.map(
      (asset) => asset!.coingecko_id
    ) as string[];

    return getPrices(geckoIds).then((geckoPrices) =>
      Object.entries(geckoPrices).reduce((priceHash, cur) => {
        const denom = geckoIdAssets.find(
          (asset) => asset.coingecko_id === cur[0]
        )!.base;
        return { ...priceHash, [denom]: cur[1].usd };
      }, {})
    );
  };

  const getIbcAssetsLength = () => {
    return ibcAssets.length;
  };

  const getAssetByDenom = (denom: CoinDenom): Asset => {
    return allAssets.find((asset) => asset.base === denom) as Asset;
  };

  const denomToSymbol = (denom: CoinDenom): CoinSymbol => {
    const asset = getAssetByDenom(denom);
    const symbol = asset?.symbol;
    if (!symbol) {
      return denom;
    }
    return symbol;
  };

  const symbolToDenom = (symbol: CoinSymbol): CoinDenom => {
    const asset = allAssets.find((asset) => asset.symbol === symbol);
    const base = asset?.base;
    if (!base) {
      return symbol;
    }
    return base;
  };

  const getExponentByDenom = (denom: CoinDenom): Exponent => {
    const asset = getAssetByDenom(denom);
    const unit = asset.denom_units.find(({ denom }) => denom === asset.display);
    return unit?.exponent || 0;
  };

  const convRawToDispAmount = (symbol: string, amount: string | number) => {
    const denom = symbolToDenom(symbol);
    return new BigNumber(amount)
      .shiftedBy(-getExponentByDenom(denom))
      .toString();
  };

  const calcCoinDollarValue = (prices: PriceHash, coin: Coin) => {
    const { denom, amount } = coin;
    return new BigNumber(amount)
      .shiftedBy(-getExponentByDenom(denom))
      .multipliedBy(prices[denom])
      .toString();
  };

  const getChainName = (ibcDenom: CoinDenom) => {
    if (nativeAssets.find((asset) => asset.base === ibcDenom)) {
      return chainName;
    }
    const asset = ibcAssets.find((asset) => asset.base === ibcDenom);
    const ibcChainName = asset?.traces?.[0].counterparty.chain_name;
    if (!ibcChainName) throw Error('chainName not found: ' + ibcDenom);
    return ibcChainName;
  };

  const getPrettyChainName = (ibcDenom: CoinDenom) => {
    const chainName = getChainName(ibcDenom);
    const chainRecord = getChainRecord(chainName);
    return chainRecord.chain.pretty_name;
  };

  const isNativeAsset = ({ denom }: PrettyAsset) => {
    return !!nativeAssets.find((asset) => asset.base === denom);
  };

  const getNativeDenom = (chainName: ChainName) => {
    const chainRecord = getChainRecord(chainName);
    const denom = chainRecord.assetList?.assets[0].base;
    if (!denom) throw Error('denom not found');
    return denom;
  };

  const getIbcInfo = (fromChainName: string, toChainName: string) => {
    let flipped = false;

    let ibcInfo = ibc.find(
      (i) =>
        i.chain_1.chain_name === fromChainName &&
        i.chain_2.chain_name === toChainName
    );

    if (!ibcInfo) {
      ibcInfo = ibc.find(
        (i) =>
          i.chain_1.chain_name === toChainName &&
          i.chain_2.chain_name === fromChainName
      );
      flipped = true;
    }

    if (!ibcInfo) {
      throw new Error('cannot find IBC info');
    }

    const key = flipped ? 'chain_2' : 'chain_1';
    const sourcePort = ibcInfo.channels[0][key].port_id;
    const sourceChannel = ibcInfo.channels[0][key].channel_id;

    return { sourcePort, sourceChannel };
  };

  return {
    nativeAssets,
    ibcAssets,
    getPriceHash,
    getAssetByDenom,
    denomToSymbol,
    symbolToDenom,
    convRawToDispAmount,
    calcCoinDollarValue,
    getIbcAssetsLength,
    getChainName,
    getPrettyChainName,
    isNativeAsset,
    getNativeDenom,
    getIbcInfo,
    getExponentByDenom,
  };
};
