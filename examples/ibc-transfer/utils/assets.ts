import { Asset as OsmosisAsset } from "@chain-registry/types";
import { asset_lists } from "@chain-registry/assets"
import { assets } from "chain-registry"

let osmosisAssets: OsmosisAsset[] = []
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

export {
  osmosisAssets
};
