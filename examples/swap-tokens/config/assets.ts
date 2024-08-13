import { chains } from 'chain-registry';
import { Asset, AssetList } from '@chain-registry/types';
import { CoinDenom } from '@osmonauts/math/dist/types';
import { assets, asset_list } from '@chain-registry/osmosis';
import { CoinGeckoId } from '@/hooks';
import { defaultChainName } from '@/config';

export function removeDuplicatesByBase(items: Asset[]): Asset[] {
  const seenBases = new Set<String>();
  const uniqueItems: Asset[] = [];

  for (const item of items) {
    if (!seenBases.has(item.base) && item.type_asset !== 'ics20') {
      seenBases.add(item.base);
      uniqueItems.push(item);
    }
  }

  return uniqueItems;
}

export type Assets = Asset[] & {
  WithCoinGeckoId: Asset[];
  CoinGeckoIds: CoinGeckoId[];
  CoinDenomToAsset: Record<CoinDenom, Asset>;
  CoinGeckoIdToAsset: Record<CoinGeckoId, Asset>;
};

export const OsmosisAssets = removeDuplicatesByBase([
  ...assets.assets,
  ...asset_list.assets,
] as Asset[]);

export const osmosisAssetsList: AssetList[] = [
  {
    assets: OsmosisAssets,
    chain_name: 'osmosis',
  },
];

OsmosisAssets.WithCoinGeckoId = OsmosisAssets.filter(({ coingecko_id }) =>
  Boolean(coingecko_id)
);

OsmosisAssets.CoinGeckoIds = OsmosisAssets.WithCoinGeckoId.map(
  ({ coingecko_id }) => coingecko_id
) as CoinGeckoId[];

OsmosisAssets.CoinGeckoIdToAsset = OsmosisAssets.WithCoinGeckoId.reduce(
  (cache, asset) => ({ ...cache, [asset.coingecko_id!]: asset }),
  {}
);

OsmosisAssets.CoinDenomToAsset = OsmosisAssets.reduce(
  (cache, asset) => ({ ...cache, [asset.base]: asset }),
  {}
);

function getChainByDenom(denom: CoinDenom) {
  let chainName = '';
  if (assets.assets.find(({ base }) => base === denom)) {
    chainName = defaultChainName;
  } else {
    const asset = asset_list.assets.find(({ base }) => base === denom);
    chainName = asset?.traces?.[0].counterparty.chain_name || '';
  }
  return chainName
    ? chains.find(({ chain_name }) => chain_name === chainName)
    : null;
}

export const Osmosis = {
  getChainByDenom,
  Assets: OsmosisAssets,
};
