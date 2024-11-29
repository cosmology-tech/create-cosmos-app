
import { Ref } from 'vue'
import { useWalletManager } from '@interchain-kit/vue'
import { useAssets } from './useAssets'
import { Asset, AssetList } from '@chain-registry/types';
import { Coin } from 'osmojs/cosmos/base/v1beta1/coin';
import BigNumber from 'bignumber.js'
import { CoinDenom, CoinSymbol, Exponent, PriceHash } from '../utils/types';


export const useChainUtils = (chainName: Ref<string>) => {
  const wm = useWalletManager()
  const { nativeAssets, allAssets, ibcAssets } = useAssets(chainName)

  const getChainName = (ibcDenom: CoinDenom) => {
    const nativeAsset = nativeAssets.find((asset) => asset.base === ibcDenom)
    if (nativeAsset) {
      return chainName.value
    }
    const asset = ibcAssets.find((asset) => asset.base === ibcDenom);
    const ibcChainName = asset?.traces?.[0].counterparty.chain_name;
    if (!ibcChainName) throw Error('chainName not found for ibcDenom: ' + ibcDenom);
    return ibcChainName;
  };

  const getPrettyChainName = (ibcDenom: CoinDenom) => {
    const chainName = getChainName(ibcDenom);
    try {
      const chainRecord = wm.getChainByName(chainName)
      return chainRecord?.prettyName;
    } catch (e) {
      return 'CHAIN_INFO_NOT_FOUND'
    }
  };

  const getDenomBySymbol = (symbol: string) => {
    const asset1 = nativeAssets.find(asset => asset.symbol === symbol)
    if (asset1) {
      return asset1.base
    }
    const asset2 = ibcAssets.find(asset => asset.symbol === symbol)
    if (asset2) {
      return asset2.base
    }
  }

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

  const getExponentByDenom = (denom: CoinDenom): Exponent => {
    const asset = getAssetByDenom(denom);
    const unit = asset.denom_units.find(({ denom }) => denom === asset.display);
    return unit?.exponent || 0;
  };

  const calcCoinDollarValue = (prices: PriceHash, coin: Coin) => {
    const { denom, amount } = coin;
    return new BigNumber(amount)
      .shiftedBy(-getExponentByDenom(denom))
      .multipliedBy(prices[denom])
      .toString();
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

  const convRawToDispAmount = (symbol: string, amount: string | number, chainName?: string) => {
    const denom = symbolToDenom(symbol, chainName);
    return new BigNumber(amount)
      .shiftedBy(-getExponentByDenom(denom))
      .toString();
  };

  const getChainLogo = (chainName: string) => {
    const { logoURIs } = wm.getChainByName(chainName)
    return logoURIs
  }

  return {
    getChainName,
    getPrettyChainName,
    getDenomBySymbol,
    convRawToDispAmount,
    denomToSymbol,
    calcCoinDollarValue,
    getExponentByDenom,
    getAssetByDenom,
    symbolToDenom,
    getChainLogo
  }
}