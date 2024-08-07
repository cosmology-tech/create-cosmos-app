import { asset_list, assets } from "@chain-registry/osmosis";
import { Asset as OsmosisAsset } from "@chain-registry/types";

// @ts-ignore
export const osmosisAssets: OsmosisAsset[] = [
  ...assets.assets,
  ...asset_list.assets,
];
