import { UseQueryResult } from '@tanstack/react-query';
import { PriceHash } from '@osmonauts/math/dist/types';
import { Pool } from 'osmo-query/dist/codegen/osmosis/gamm/pool-models/balancer/balancerPool';
import { defaultChainName, Osmosis } from "@/config";
import { paginate, useQueryHooks } from "@/hooks";

export type Pools = ReturnType<typeof usePools>;

export type PoolList = Pool[] & {
  priced: Pool[];
}

export function usePools(prices: PriceHash = {}) {
  const { osmosis, isReady } = useQueryHooks(defaultChainName);
  const query: UseQueryResult<{ pools: Pool[] }> = osmosis.gamm.v1beta1.usePools(
    {
      request: {
        pagination: paginate(5000n),
      },
      options: {
        enabled: isReady,
        staleTime: Infinity,
      },
    }
  );

  const all = query.data?.pools || [];
  const map = all.reduce((map, pool) => (map.set(pool.id, pool)), new Map<bigint, Pool>())
  const stableswap = all.filter(({ $typeUrl }) => $typeUrl?.includes('stableswap')) || [];
  const freefloat = (all.filter(({ $typeUrl }) => !$typeUrl?.includes('stableswap')) || []) as PoolList;

  freefloat.priced = freefloat.filter(({ poolAssets }) =>
    poolAssets.every(({ token }) =>
      prices[token.denom] && Osmosis.Assets.CoinDenomToAsset[token.denom]));

  return { query, all, map, freefloat, stableswap }
}

// What query.data looks like:
// {
//   "pools": [
//     {
//       "$typeUrl": "/osmosis.gamm.v1beta1.Pool",
//       "address": "osmo1mw0ac6rwlp5r8wapwk3zs6g29h8fcscxqakdzw9emkne6c8wjp9q0t3v8t",
//       "id": "1",
//       "poolParams": {
//         "swapFee": "0.002",
//         "exitFee": "0"
//       },
//       "futurePoolGovernor": "24h",
//       "totalShares": {
//         "denom": "gamm/pool/1",
//         "amount": "111821403347144698250152229"
//       },
//       "poolAssets": [
//         {
//           "token": {
//             "denom": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
//             "amount": "818861561574"
//           },
//           "weight": "536870912000000"
//         },
//         {
//           "token": {
//             "denom": "uosmo",
//             "amount": "22649818509522"
//           },
//           "weight": "536870912000000"
//         }
//       ],
//       "totalWeight": "1073741824000000"
//     },
//     {
//       "$typeUrl": "/osmosis.gamm.v1beta1.Pool",
//       "address": "osmo1500hy75krs9e8t50aav6fahk8sxhajn9ctp40qwvvn8tcprkk6wszun4a5",
//       "id": "2",
//       "poolParams": {
//         "swapFee": "0.005",
//         "exitFee": "0"
//       },
//       "futurePoolGovernor": "24h",
//       "totalShares": {
//         "denom": "gamm/pool/2",
//         "amount": "177673458733981827330189071"
//       },
//       "poolAssets": [
//         {
//           "token": {
//             "denom": "uion",
//             "amount": "453966264"
//           },
//           "weight": "858993459200000"
//         },
//         {
//           "token": {
//             "denom": "uosmo",
//             "amount": "89600840294"
//           },
//           "weight": "214748364800000"
//         }
//       ],
//       "totalWeight": "1073741824000000"
//     },
//     {
//       "$typeUrl": "/osmosis.gamm.v1beta1.Pool",
//       "address": "osmo1c9gj5nwxhuh2gz7wwg4r8e8tw8v7ggy9lh2hu7kkdgh0t450754qh9cpvd",
//       "id": "3",
//       "poolParams": {
//         "swapFee": "0.002",
//         "exitFee": "0"
//       },
//       "futurePoolGovernor": "24h",
//       "totalShares": {
//         "denom": "gamm/pool/3",
//         "amount": "53836098892478268478896011"
//       },
//       "poolAssets": [
//         {
//           "token": {
//             "denom": "ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4",
//             "amount": "551533931292"
//           },
//           "weight": "536870912000000"
//         },
//         {
//           "token": {
//             "denom": "uosmo",
//             "amount": "1972439451246"
//           },
//           "weight": "536870912000000"
//         }
//       ],
//       "totalWeight": "1073741824000000"
//     },
//     ...
//     {
//       "$typeUrl": "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool",
//       "address": "osmo1ccjfm7gpa37mc9zwq553p0ttzq3ga5g6jzarz37lcq4qlnsdcxhsghcv3y",
//       "id": "810",
//       "poolParams": {
//         "swapFee": "0.003",
//         "exitFee": "0"
//       },
//       "futurePoolGovernor": "",
//       "totalShares": {
//         "denom": "gamm/pool/810",
//         "amount": "1917808387404168955247"
//       },
//       "poolLiquidity": [
//         {
//           "denom": "ibc/5DD1F95ED336014D00CE2520977EC71566D282F9749170ADC83A392E0EA7426A",
//           "amount": "12905697414911"
//         },
//         {
//           "denom": "ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4",
//           "amount": "12760839351518"
//         }
//       ],
//       "scalingFactors": [
//         "100000",
//         "136789"
//       ],
//       "scalingFactorController": "osmo1k8c2m5cn322akk5wy8lpt87dd2f4yh9afcd7af"
//     },
//   ],
//   "pagination": {
//     "nextKey": {},
//     "total": "1115"
//   }
// }