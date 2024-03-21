import { assets } from 'chain-registry';
import { Asset, AssetList, Chain } from '@chain-registry/types';

export const getChainLogoByChainName = (chainName: string): string => {
  const asset = assets.find(({ chain_name }) => chain_name === chainName)
    ?.assets?.[0];
  return Object.values(asset?.logo_URIs || {})?.[0] || '';
};

export const getChainLogoFromChain = (chain: Chain) => {
  return Object.values(chain?.logo_URIs || {})?.[0] || '';
};

export const getChainAssets = (chainName: string) => {
  return assets.find((chain) => chain.chain_name === chainName) as AssetList;
};

export const getTokenByChainName = (chainName: string) => {
  const chainAssets = getChainAssets(chainName);
  return chainAssets.assets[0] as Asset;
};

export const getExponentByChainName = (chainName: string) => {
  return (
    getTokenByChainName(chainName).denom_units.find(
      (unit) => unit.denom === getTokenByChainName(chainName).display
    )?.exponent || 6
  );
};

export const getExponentByDenom = (denom: string) => {
  const asset = assets.find((chain) => chain.assets[0].base === denom)
    ?.assets[0];
  const exponent = asset?.denom_units.find(
    (unit) => unit.denom === asset.display
  )?.exponent;
  return exponent || 6;
};

export const getSymbolByDenom = (denom: string) => {
  const asset = assets.find((chain) => chain.assets[0].base === denom)
    ?.assets[0];
  return asset?.symbol || '';
};
