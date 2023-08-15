import { asset_list, assets } from '@chain-registry/osmosis';
import { Asset as OsmosisAsset } from '@chain-registry/types';

export const osmosisAssets: OsmosisAsset[] = [
  ...assets.assets,
  ...asset_list.assets,
].filter(({ type_asset }) => type_asset !== 'ics20');
