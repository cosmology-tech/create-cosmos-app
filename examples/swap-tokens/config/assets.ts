import { chains } from 'chain-registry';
import { Asset } from '@chain-registry/types';
import { Denom } from '@chain-registry/utils';
import { CoinGeckoId } from '@/hooks';
import { defaultChainName } from '@/config';
import { asset_lists } from "@chain-registry/assets"
import { assets } from "chain-registry"

export type Assets = Asset[] & {
  WithCoinGeckoId: Asset[];
  CoinGeckoIds: CoinGeckoId[];
  CoinDenomToAsset: Record<Denom, Asset>;
  CoinGeckoIdToAsset: Record<CoinGeckoId, Asset>;
}

let osmosisAssets: Asset[] = []
// assets from @chain-registry/assets
const chainInfo = asset_lists.find(({ chain_name }) => chain_name === 'osmosis')
if (Array.isArray(chainInfo?.assets)) {
  osmosisAssets = [...chainInfo?.assets]
}
// assets from chain-registry
let chainInfo2 = assets.find(({ chain_name }) => chain_name === 'osmosis')
if (Array.isArray(chainInfo2?.assets)) {
  osmosisAssets = [...osmosisAssets, ...chainInfo2.assets]
}

export const OsmosisAssets = [
  ...osmosisAssets
].filter(({ type_asset }) => type_asset !== 'ics20') as Assets;

OsmosisAssets.WithCoinGeckoId = OsmosisAssets
  .filter(({ coingecko_id }) => Boolean(coingecko_id));

OsmosisAssets.CoinGeckoIds = OsmosisAssets.WithCoinGeckoId
  .map(({ coingecko_id }) => coingecko_id) as CoinGeckoId[];

OsmosisAssets.CoinGeckoIdToAsset = OsmosisAssets.WithCoinGeckoId
  .reduce((cache, asset) => ({ ...cache, [asset.coingecko_id!]: asset }), {})

OsmosisAssets.CoinDenomToAsset = OsmosisAssets
  .reduce((cache, asset) => ({ ...cache, [asset.base]: asset }), {});

function getChainByDenom(denom: Denom) {
  let chainName = '';
  if (chainInfo2?.assets.find(({ base }) => base === denom)) {
    chainName = defaultChainName;
  } else {
    const asset = chainInfo?.assets.find(({ base }) => base === denom);
    chainName = asset?.traces?.[0].counterparty.chain_name || '';
  }
  return chainName
    ? chains.find(({ chain_name }) => chain_name === chainName)
    : null
}

export const Osmosis = {
  getChainByDenom,
  Assets: OsmosisAssets
}