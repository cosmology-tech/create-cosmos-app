import { Asset, AssetList } from '@chain-registry/types';
import { GasPrice } from '@cosmjs/stargate';
import { SignerOptions, Wallet } from '@cosmos-kit/core';

export const getNativeAsset = (assets: AssetList) => {
  return assets.assets[0] as Asset;
};

export const getExponentFromAsset = (asset: Asset) => {
  const unit = asset.denom_units.find((unit) => unit.denom === asset.display);
  return unit?.exponent ?? 6;
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
  };
};
