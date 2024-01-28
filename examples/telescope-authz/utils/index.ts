import { assets } from 'chain-registry';

export const getChainLogoUrl = (chainName: string): string => {
  const asset = assets.find(({ chain_name }) => chain_name === chainName)
    ?.assets?.[0];
  return Object.values(asset?.logo_URIs || {})?.[0] || '';
};
