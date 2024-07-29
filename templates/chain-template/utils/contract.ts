import { Asset, Chain } from '@chain-registry/types';
import { toBech32, fromBech32 } from '@cosmjs/encoding';
import BigNumber from 'bignumber.js';

export const validateContractAddress = (
  address: string,
  bech32Prefix: string
) => {
  if (!bech32Prefix)
    return 'Cannot retrieve bech32 prefix of the current network.';

  if (!address.startsWith(bech32Prefix))
    return `Invalid prefix (expected "${bech32Prefix}")`;

  const bytes = Array.from(Array(32).keys());
  const exampleAddress = toBech32(bech32Prefix, new Uint8Array(bytes));

  if (address.length !== exampleAddress.length) return 'Invalid address length';

  try {
    fromBech32(address);
  } catch (e) {
    return (e as Error).message;
  }

  return null;
};

export const validateJson = (text: string) => {
  try {
    if (text.trim().length === 0)
      throw new SyntaxError(`Can't use empty string`);
    JSON.parse(text);
    return null;
  } catch (error) {
    return (error as SyntaxError).message;
  }
};

export const prettifyJson = (text: string) => {
  try {
    return JSON.stringify(JSON.parse(text), null, 2);
  } catch {
    return text;
  }
};

export const countJsonLines = (text: string) => text.split(/\n/).length;

export const getExplorerLink = (chain: Chain, txHash: string) => {
  const txPageLink = chain.explorers?.[0].tx_page ?? '';
  return `${txPageLink.replace('${txHash}', txHash)}`;
};

export const getExponentFromAsset = (asset: Asset) => {
  return asset.denom_units.find((unit) => unit.denom === asset.display)
    ?.exponent;
};

export const bytesToKb = (bytes: number) => {
  return BigNumber(bytes)
    .dividedBy(1000)
    .toFixed(bytes >= 1000 ? 0 : 2);
};
