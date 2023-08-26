import { Asset, AssetList } from '@chain-registry/types';
import { asset_lists as assetLists } from '@chain-registry/assets';
import { Coin } from 'interchain-query/cosmos/base/v1beta1/coin';
import { assets, ibc } from 'chain-registry';
import BigNumber from 'bignumber.js';

export const truncateDenom = (denom: string) => {
  return denom.slice(0, 10) + '...' + denom.slice(-6);
};

export const shiftDigits = (value: number | string, exponent: number) => {
  return new BigNumber(value).shiftedBy(exponent).toNumber();
};

export const getChainAssets = (chainName: string) => {
  return assets.find((chain) => chain.chain_name === chainName) as AssetList;
};

export const getCoin = (chainName: string) => {
  const chainAssets = getChainAssets(chainName);
  return chainAssets?.assets[0] as Asset;
};

export const getExponent = (chainName: string) => {
  const coin = getCoin(chainName);
  return coin?.denom_units.find((unit) => unit.denom === coin.display)
    ?.exponent as number;
};

const filterAssets = (chainName: string, assetList: AssetList[]): Asset[] => {
  return (
    assetList
      .find(({ chain_name }) => chain_name === chainName)
      ?.assets?.filter(({ type_asset }) => type_asset !== 'ics20') || []
  );
};

const getAllAssets = (chainName: string) => {
  const nativeAssets = filterAssets(chainName, assets);
  const ibcAssets = filterAssets(chainName, assetLists);

  return [...nativeAssets, ...ibcAssets];
};

export const denomToAsset = (chainName: string, denom: string) => {
  return getAllAssets(chainName).find((asset) => asset.base === denom);
};

export const denomToExponent = (chainName: string, denom: string) => {
  const asset = denomToAsset(chainName, denom);
  const unit = asset?.denom_units.find(({ denom }) => denom === asset.display);
  return unit?.exponent || 6;
};

export const prettyBalance = (chainName: string, balance: Coin) => {
  const { amount, denom } = balance;
  const asset = denomToAsset(chainName, denom);
  const symbol = asset?.symbol || truncateDenom(denom);
  const exponent = denomToExponent(chainName, denom);
  const displayAmount = shiftDigits(amount, -exponent);
  const logoUrl = Object.values(asset?.logo_URIs || {}).find((url) => url);

  return { denom, symbol, amount, displayAmount, logoUrl, exponent };
};

export type PrettyBalance = ReturnType<typeof prettyBalance>;

export const getIbcInfo = (fromChainName: string, toChainName: string) => {
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
