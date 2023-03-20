import { shuffledArray } from '@cosmology-ui/react';
import { assets, chains } from 'chain-registry';

export type ChainListType = {
  chainName: string;
  label: string;
  value: string;
  symbol: string;
  icon?: {
    png?: string;
    jpeg?: string;
    svg?: string;
  };
  ibc?: {
    source_channel?: string;
    source_denom?: string;
    dst_channel?: string;
  };
  address: string;
  amountValue: string;
  fiatValue: string;
};

const defaultStringArray = [
  ...[...Array(26)].map((_, i) => String.fromCharCode('A'.charCodeAt(0) + i)),
  ...[...Array(26)].map((_, i) => String.fromCharCode('a'.charCodeAt(0) + i)),
  ...[...Array(10)].map((_, i) => i.toString()),
];

const handleShuffledLetters = (name: string, maxLength: number = 32) => {
  const randomLetter = shuffledArray(defaultStringArray)
    .toString()
    .replaceAll(',', '');
  // eslint-disable-next-line
  return (name.replaceAll(/[\-[\s[\.]/g, '') + randomLetter).slice(
    0,
    maxLength
  );
};

export const chainList = assets
  .filter((list) => {
    const chain = chains.find((chain) => chain.chain_name === list.chain_name);
    if (!chain) return false;
    if (chain.network_type !== 'mainnet') return false;
    return true;
  })
  .map(({ assets }) => assets.values())
  .map((iterator) => {
    for (const value of iterator) {
      return {
        chainName: value.base,
        symbol: value.symbol,
        label: value.name,
        value: value.name,
        icon: {
          png: value.logo_URIs?.png,
          jpeg: value.logo_URIs?.jpeg,
          svg: value.logo_URIs?.svg,
        },
        ibc: value.ibc,
        address:
          value.base.slice(0, 1) === 'u'
            ? handleShuffledLetters(value.name, 12)
            : handleShuffledLetters(value.name),
        amountValue: (
          parseFloat(
            shuffledArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
              .toString()
              .replaceAll(',', '')
          ) / 100000000
        ).toFixed(6),
        fiatValue: `$${(
          parseFloat(
            shuffledArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
              .toString()
              .replaceAll(',', '')
          ) / 1000000000
        ).toFixed(2)}`,
      };
    }
  })
  .filter((a) => (a ? a.icon : null)) // only images
  .sort(
    () => (Math.random() > 0.5 ? 1 : -1) // random
  ) as ChainListType[];
