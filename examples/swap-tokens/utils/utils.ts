import BigNumber from 'bignumber.js';
import { chains } from 'chain-registry';
import { Asset, Chain } from '@chain-registry/types';

export function integer(number: number | string) {
  return new BigNumber(number).decimalPlaces(0, BigNumber.ROUND_DOWN).toString();
}

export function getLogo(from: Asset | Chain) {
  return from.logo_URIs?.svg || from.logo_URIs?.png;
}

export function getChainLogo(name: string) {
  const chain: Chain = chains.find(chain => chain.chain_name === name) as Chain;
  return chain ? getLogo(chain) : null;
}

// To ensure that each asset in the assets array has a unique symbol
export function removeDuplicateAssetSymbols(assets: Asset[]) {
  const seen = new Set<string>(); // set to store unique asset symbols
  const duplicates = new Set<string>(); // set to store duplicate asset symbols
  let resAssets = [] as Asset[]
  assets.forEach(asset => {
    let { symbol } = asset
    if (seen.has(symbol)) {
      duplicates.add(symbol)
    } else {
      seen.add(symbol)
      resAssets.push(asset)
    }
  })
  const duplicatesArr = Array.from(duplicates)
  if (duplicatesArr.length > 0) {
    console.error(`duplicate symbols found: ${duplicatesArr.join(', ')}`)
  }
  return resAssets
}