import { assets } from 'chain-registry';
import { AssetList, Asset } from '@chain-registry/types';
import { GeneratedType, Registry } from '@cosmjs/proto-signing';
import { AminoTypes } from '@cosmjs/stargate';
import {
  cosmosAminoConverters,
  cosmosProtoRegistry,
  cosmwasmAminoConverters,
  cosmwasmProtoRegistry,
  ibcProtoRegistry,
  ibcAminoConverters,
} from 'interchain-query';

export const defaultChainName = 'cosmoshub';
export const KeplrWalletName = 'keplr-extension';

export const chainassets: AssetList = assets.find(
  (chain) => chain.chain_name === defaultChainName
) as AssetList;

export const coin: Asset = chainassets.assets.find(
  (asset) => asset.base === 'uatom'
) as Asset;

const protoRegistry: ReadonlyArray<[string, GeneratedType]> = [
  ...cosmosProtoRegistry,
  ...cosmwasmProtoRegistry,
  ...ibcProtoRegistry,
];

const aminoConverters = {
  ...cosmosAminoConverters,
  ...cosmwasmAminoConverters,
  ...ibcAminoConverters,
};

export const registry = new Registry(protoRegistry);
export const aminoTypes = new AminoTypes(aminoConverters);
