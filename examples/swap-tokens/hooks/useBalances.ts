
import { Coin } from '@cosmjs/stargate';
import { useChain } from '@cosmos-kit/react';
import { UseQueryResult } from '@tanstack/react-query';
import { defaultChainName } from '@/config';
import { useQueryHooks } from '@/hooks';
import { paginate } from '.';

export function useBalances() {
  const { address } = useChain(defaultChainName);
  const { cosmos, isReady } = useQueryHooks(defaultChainName);

  const query: UseQueryResult<{ balances: Coin[] }> =
    cosmos.bank.v1beta1.useAllBalances({
      request: {
        address: address || '',
        pagination: paginate(),
      },
      options: {
        enabled: isReady
      }
    });

  const all = query.data?.balances || [];
  const hash = (all.reduce((acc, coin) => ({ ...acc, [coin.denom]: coin }), {}) || {}) as Record<Coin['denom'], Coin>;
  const pools = all.filter((coin) => coin.denom.startsWith('gamm')) || [];
  const assets = all.filter((coin) => !coin.denom.startsWith('gamm')) || [];

  return { query, all, hash, pools, assets };
}

// What query.data looks like:
// {
//   "balances": [
//     {
//       "denom": "gamm/pool/497",
//       "amount": "107398911806487170"
//     },
//     {
//       "denom": "gamm/pool/604",
//       "amount": "41455113564692"
//     },
//     {
//       "denom": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
//       "amount": "73759"
//     },
//     {
//       "denom": "ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4",
//       "amount": "64254656"
//     },
//     {
//       "denom": "uosmo",
//       "amount": "596479"
//     }
//   ],
//   "pagination": {
//     "nextKey": {},
//     "total": "5"
//   }
// }