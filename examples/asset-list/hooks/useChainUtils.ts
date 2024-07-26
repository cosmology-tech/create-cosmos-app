import { useManager } from '@cosmos-kit/react';
import { useMemo } from 'react';
import { Asset, AssetList } from '@chain-registry/types';
import { asset_lists as ibcAssetLists } from '@chain-registry/assets';
import { assets as chainAssets, ibc } from 'chain-registry';
import { CoinDenom, CoinSymbol, Exponent, PriceHash } from '../utils/types';
import BigNumber from 'bignumber.js';
import { Coin } from '@cosmjs/amino';
import { PrettyAsset } from '../components';
import { ChainName } from 'cosmos-kit';

export const useChainUtils = (chainName: string) => {
  const { getChainRecord } = useManager();

  const filterAssets = (assetList: AssetList[]): Asset[] => {
    return (
      assetList
        .find(({ chain_name }) => chain_name === chainName)
        ?.assets?.filter(({ type_asset }) => type_asset !== 'ics20') || []
    );
  };

  const { nativeAssets, ibcAssets } = useMemo(() => {
    // @ts-ignore
    const nativeAssets = filterAssets(chainAssets);
    // @ts-ignore
    const ibcAssets = filterAssets(ibcAssetLists);

    return { nativeAssets, ibcAssets };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chainName]);

  const allAssets = [...nativeAssets, ...ibcAssets];

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

  const symbolToDenom = (symbol: CoinSymbol, chainName?: string): CoinDenom => {
    const asset = allAssets.find((asset) => (
      asset.symbol === symbol
      && (
        !chainName
        || asset.traces?.[0].counterparty.chain_name.toLowerCase() === chainName.toLowerCase()
      )
    ));
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
    if (!ibcChainName) throw Error('chainName not found for ibcDenom: ' + ibcDenom);
    return ibcChainName;
  };

  const getPrettyChainName = (ibcDenom: CoinDenom) => {
    const chainName = getChainName(ibcDenom);
    try {
      const chainRecord = getChainRecord(chainName);
      // @ts-ignore
      return chainRecord.chain.pretty_name;
    } catch (e) {
      return 'CHAIN_INFO_NOT_FOUND'
    }
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

  const getDenomBySymbolAndChain = (chainName: ChainName, symbol: string) => {
    const chainRecord = getChainRecord(chainName);
    const denom = chainRecord.assetList?.assets.find((asset) => asset.symbol === symbol)?.base;
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
    allAssets,
    nativeAssets,
    ibcAssets,
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
    getDenomBySymbolAndChain
  };
};
