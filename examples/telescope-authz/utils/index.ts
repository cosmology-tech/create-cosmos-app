import { Chain } from '@chain-registry/types';
import { assets } from 'chain-registry';

export const getChainLogoByChainName = (chainName: string): string => {
  const asset = assets.find(({ chain_name }) => chain_name === chainName)
    ?.assets?.[0];
  return Object.values(asset?.logo_URIs || {})?.[0] || '';
};

export const getChainLogoFromChain = (chain: Chain) => {
  return Object.values(chain?.logo_URIs || {})?.[0] || '';
};
