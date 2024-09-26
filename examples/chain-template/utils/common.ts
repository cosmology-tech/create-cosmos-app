import { assets } from 'chain-registry';
import { Asset, AssetList } from '@chain-registry/types';
import { GasPrice } from '@cosmjs/stargate';
import { SignerOptions, Wallet } from '@cosmos-kit/core';

export const getChainAssets = (chainName: string) => {
  return assets.find((chain) => chain.chain_name === chainName) as AssetList;
};

export const getCoin = (chainName: string) => {
  const chainAssets = getChainAssets(chainName);
  return chainAssets.assets[0] as Asset;
};

export const getExponent = (chainName: string) => {
  return getCoin(chainName).denom_units.find(
    (unit) => unit.denom === getCoin(chainName).display,
  )?.exponent as number;
};

export const shortenAddress = (address: string, partLength = 6) => {
  return `${address.slice(0, partLength)}...${address.slice(-partLength)}`;
};

export const getWalletLogo = (wallet: Wallet) => {
  if (!wallet?.logo) return '';

  return typeof wallet.logo === 'string'
    ? wallet.logo
    : wallet.logo.major || wallet.logo.minor;
};

export const getSignerOptions = (): SignerOptions => {
  const defaultGasPrice = GasPrice.fromString('0.025uosmo');

  return {
    // @ts-ignore
    signingStargate: (chain) => {
      if (typeof chain === 'string') {
        return { gasPrice: defaultGasPrice };
      }
      let gasPrice;
      try {
        const feeToken = chain.fees?.fee_tokens[0];
        const fee = `${feeToken?.average_gas_price || 0.025}${feeToken?.denom}`;
        gasPrice = GasPrice.fromString(fee);
      } catch (error) {
        gasPrice = defaultGasPrice;
      }
      return { gasPrice };
    },
    preferredSignType: () => 'direct',
  };
};
