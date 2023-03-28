import React, { useCallback, useEffect, useState } from 'react';
import { useChain } from '@cosmos-kit/react';
import {
  Box,
  Center,
  Flex,
  Heading,
  Spinner,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Pool as OsmosisPool } from 'osmojs/types/codegen/osmosis/gamm/pool-models/balancer/balancerPool';
import { Gauge } from 'osmojs/types/codegen/osmosis/incentives/gauge';
import { Coin } from 'osmojs/types/codegen/cosmos/base/v1beta1/coin';
import { PeriodLock } from 'osmojs/types/codegen/osmosis/lockup/lock';
import BigNumber from 'bignumber.js';
import { osmosis } from 'osmojs';
import Long from 'long';
import { chainName } from '../../config';
import PoolList from './pool-list';
import PoolCard from './pool-card';
import { PoolDetailModal } from './pool-detail-modal';
import AddLiquidityModal from './add-liquidity-modal';
import RemoveLiquidityModal from './remove-liquidity-modal';
import BondSharesModal from './bond-shares-modal';
import { Peroid, Rewards } from '../types';
import { convertGammTokenToDollarValue, calcPoolAprs } from '../../utils';
import { PriceHash } from '../../utils/types';
import { Duration } from 'osmojs/types/codegen/google/protobuf/duration';
import { ActiveGaugesPerDenomResponse } from 'osmojs/types/codegen/osmosis/incentives/query';
import { SuperfluidAsset } from 'osmojs/types/codegen/osmosis/superfluid/superfluid';
import { PoolsOverview } from './pools-overview';

type Token = {
  [key: string]: number | string;
};

type Fee = {
  [key: string]: number | string;
};

type PoolApr = { [K in '1' | '7' | '14']: ReturnType<typeof calcPoolAprs> };

type ExtraPoolProperties = {
  fees7D: number;
  volume24H: number;
  volume7d: number;
  liquidity: string | number;
  myLiquidity?: string | number;
  bonded?: string | number;
  apr: PoolApr;
};

export type Pool = OsmosisPool & ExtraPoolProperties;

interface IData {
  locks: PeriodLock[];
  balances: Coin[];
  lockedCoins: Coin[];
  myPools: Pool[];
  allPools: Pool[];
  allTokens: Token[];
  highlightedPools: Pool[];
  prices: PriceHash;
  delegatedCoins: Coin[];
  rewards: Rewards;
}

const exponentiate = (num: number | string | undefined, exp: number) => {
  if (!num) return 0;
  return new BigNumber(num)
    .multipliedBy(new BigNumber(10).exponentiatedBy(exp))
    .toNumber();
};

const splitIntoChunks = (arr: any[], chunkSize: number) => {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
};

const getSuperfluidApr = async () => {
  const response = await fetch('https://api-osmosis.imperator.co/apr/v2/all');
  const aprs = await response.json();

  if (aprs.status_code === 500) return 0;

  const superfluidApr = aprs
    .find((apr: { apr_list: any[] }) =>
      apr.apr_list.find((a) => a.symbol === 'ECH')
    )
    .apr_list.find(
      (a: { symbol: string }) => a.symbol === 'ECH'
    ).apr_superfluid;

  return superfluidApr;
};

const getPoolsApr = async (
  pools: Pool[],
  durations: Duration[],
  superfluidAssets: SuperfluidAsset[],
  poolIds: { id: number; denom: string }[],
  prices: PriceHash,
  getActiveGauges: (denom: string) => Promise<ActiveGaugesPerDenomResponse>
): Promise<{ [key: number]: PoolApr }> => {
  const poolIdChunks: typeof poolIds[] = splitIntoChunks(poolIds, 10);

  let allGauges: { poolId: number; gauges: Gauge[] }[] = [];

  for (const [index, ids] of Object.entries(poolIdChunks)) {
    const getGaugesRequests = ids.map(({ id, denom }) => {
      return getActiveGauges(denom).then((res) => ({
        poolId: id,
        gauges: res.data,
      }));
    });

    let gauges = [];

    try {
      gauges = await Promise.all(getGaugesRequests);
    } catch (error) {
      console.error(error);
      break;
    }

    allGauges = [...allGauges, ...gauges];

    if (Number(index) !== poolIdChunks.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  const superfluidApr = await getSuperfluidApr();

  const allPoolAprs = allGauges.reduce((prev, cur) => {
    const pool = pools.find(({ id }) => id.low === cur.poolId)!;
    const swapFee = new BigNumber(pool.poolParams!.swapFee)
      .shiftedBy(-18)
      .toString();

    const apr = ['1', '7', '14'].reduce((aprs, duration) => {
      return {
        ...aprs,
        [duration]: calcPoolAprs({
          pool,
          prices,
          swapFee,
          activeGauges: cur.gauges,
          aprSuperfluid: superfluidApr,
          lockupDurations: durations,
          superfluidPools: superfluidAssets,
          volume7d: pool.volume7d,
          lockup: duration,
        }),
      };
    }, {});

    return { ...prev, [cur.poolId]: apr };
  }, {});

  return allPoolAprs;
};

const getTokens = async () => {
  const response = await fetch(
    'https://api-osmosis.imperator.co/tokens/v2/all'
  );
  const tokens = (await response.json()) as Token[];
  return tokens;
};

const getFees = async () => {
  const response = await fetch(
    'https://api-osmosis.imperator.co/fees/v1/pools'
  );
  const { data: fees }: { data: Fee[] } = await response.json();
  return fees;
};

const getRewards = async (address: string): Promise<Rewards> => {
  const response = await fetch(
    `https://api-osmosis-chain.imperator.co/lp/v1/rewards/estimation/${address}`
  );
  const res = await response.json();
  return res;
};

const handleResults = (results: any[]) => {
  const errors = results
    .filter((result) => result.status === 'rejected')
    .map((result) => result.reason);

  if (errors.length) {
    throw new AggregateError(errors);
  }

  return results.map((result) => result.value);
};

export const ProvideLiquidity = () => {
  const [showAll, setShowAll] = useState(false);
  const [isFetchingApr, setIsFetchingApr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [allAprs, setAllAprs] = useState<{ [key: number]: PoolApr }>({});
  const [period, setPeriod] = useState<Peroid>('14');
  const [pool, setPool] = useState<Pool>();
  const [data, setData] = useState<IData>({
    prices: {},
    balances: [],
    lockedCoins: [],
    myPools: [],
    allPools: [],
    allTokens: [],
    highlightedPools: [],
    locks: [],
    delegatedCoins: [],
    rewards: {
      pools: {},
      total_day_usd: 0,
      total_month_usd: 0,
      total_year_usd: 0,
    },
  });

  const {
    isOpen: isAddLiquidityOpen,
    onOpen: onAddLiquidityOpen,
    onClose: onAddLiquidityClose,
  } = useDisclosure();

  const {
    isOpen: isRemoveLiquidityOpen,
    onOpen: onRemoveLiquidityOpen,
    onClose: onRemoveLiquidityClose,
  } = useDisclosure();

  const {
    isOpen: isBondSharesOpen,
    onOpen: onBondSharesOpen,
    onClose: onBondSharesClose,
  } = useDisclosure();

  const { address, getRpcEndpoint, assets } = useChain(chainName);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  const osmoPrice =
    data?.allTokens.find((token) => token.denom === assets?.assets[0].base)
      ?.price || 0;

  const addPropertiesToPool = (
    pool: OsmosisPool,
    tokens: Token[],
    fees: Fee[],
    balances: Coin[],
    lockedCoins: Coin[],
    prices: PriceHash
  ) => {
    const liquidity = +pool.poolAssets
      .map(({ token }) => {
        const tokenData = tokens.find(({ denom }) => denom === token?.denom);
        const exp = tokenData!.exponent;
        const price = tokenData!.price;
        const tokenToUsd = new BigNumber(exponentiate(token?.amount, -exp))
          .multipliedBy(price)
          .toFixed(1);

        return tokenToUsd;
      })
      .reduce((prev, cur) => new BigNumber(prev).plus(cur), new BigNumber(0))
      .toFixed(0);

    const feeData = fees.find((fee) => fee.pool_id === pool.id.low.toString());
    const volume24H = Math.round(Number(feeData?.volume_24h || 0));
    const volume7d = Math.round(Number(feeData?.volume_7d || 0));
    const fees7D = Math.round(Number(feeData?.fees_spent_7d || 0));

    const balanceCoin = balances.find(
      ({ denom }) => denom === pool.totalShares?.denom
    );
    const myLiquidity = balanceCoin
      ? convertGammTokenToDollarValue(balanceCoin, pool, prices)
      : 0;

    const lockedCoin = lockedCoins.find(
      ({ denom }) => denom === pool.totalShares?.denom
    );
    const bonded = lockedCoin
      ? convertGammTokenToDollarValue(lockedCoin, pool, prices)
      : 0;

    const apr = {
      1: { totalApr: '0' },
      7: { totalApr: '0' },
      14: { totalApr: '0' },
    };

    return {
      ...pool,
      liquidity,
      volume24H,
      fees7D,
      volume7d,
      apr,
      myLiquidity,
      bonded,
    };
  };

  const removeUnsupportedPools = (
    { poolAssets }: OsmosisPool,
    tokens: Token[]
  ) => {
    return !poolAssets.some(
      ({ token }) =>
        token?.denom.startsWith('gamm/pool') ||
        !tokens.find(({ denom }) => denom === token?.denom)
    );
  };

  const getData = useCallback(async () => {
    if (!address) {
      setData((prev) => ({
        ...prev,
        myPools: [],
      }));
      return;
    }
    setIsLoading(true);
    console.log('getting data...');

    let rpcEndpoint = await getRpcEndpoint();

    if (!rpcEndpoint) {
      console.log('no rpc endpoint — using a fallback');
      rpcEndpoint = `https://rpc.cosmos.directory/${chainName}`;
    }

    const client = await osmosis.ClientFactory.createRPCQueryClient({
      rpcEndpoint,
    });

    const results = await Promise.allSettled([
      getRewards(address),
      getTokens(),
      getFees(),
    ]);

    const [rewards, allTokens, fees] = handleResults(results);

    const prices = allTokens.reduce(
      (prev: any, cur: { denom: any; price: any }) => ({
        ...prev,
        [cur.denom]: cur.price,
      }),
      {}
    );

    // GET DELEGATIONS
    const { totalDelegatedCoins: delegatedCoins } =
      await client.osmosis.superfluid.superfluidDelegationsByDelegator({
        delegatorAddress: address,
      });

    // GET ALL POOLS
    const { pools } = await client.osmosis.gamm.v1beta1.pools({
      pagination: {
        key: new Uint8Array(),
        offset: Long.fromNumber(0),
        limit: Long.fromNumber(1200),
        countTotal: false,
        reverse: false,
      },
    });

    const { balances } = await client.cosmos.bank.v1beta1.allBalances({
      address,
    });

    const { coins: lockedCoins } =
      await client.osmosis.lockup.accountLockedCoins({
        owner: address,
      });

    const formattedPools = pools
      .filter(({ typeUrl }) => !typeUrl.includes('stableswap'))
      .map(({ value }) => osmosis.gamm.v1beta1.Pool.decode(value))
      .filter((pool) => removeUnsupportedPools(pool, allTokens))
      .map((pool) =>
        addPropertiesToPool(
          pool,
          allTokens,
          fees,
          balances,
          lockedCoins,
          prices
        )
      );

    const allPools = formattedPools
      .sort((a, b) => b.liquidity - a.liquidity)
      .slice(0, 20);

    // GET SUPERFLUID POOLS
    const { assets: superfluidAssets } =
      await client.osmosis.superfluid.allAssets();

    const highlightedPools = superfluidAssets
      .map(({ denom }) => {
        const poolId = parseInt(denom.match(/\d+/)![0]);
        return formattedPools.filter(({ id }) => id.low === poolId)[0];
      })
      .sort((a, b) => b.liquidity - a.liquidity)
      .slice(0, 3);

    // GET MY POOLS
    const myPools: Pool[] = balances
      .filter(({ denom }) => denom.startsWith('gamm/pool'))
      .map((coin) => {
        const poolId = parseInt(coin.denom.match(/\d+/)![0]);
        return formattedPools.filter(({ id }) => id.low === poolId)[0];
      });

    const { locks } = await client.osmosis.lockup.accountLockedLongerDuration({
      owner: address,
    });

    setData({
      prices,
      balances,
      lockedCoins,
      myPools,
      allPools,
      allTokens,
      highlightedPools,
      locks,
      delegatedCoins,
      rewards,
    });
    setIsLoading(false);
    console.log('getting data done!');

    // ============
    // GET APR PART
    // ============
    setIsFetchingApr(true);

    const { lockableDurations } =
      await client.osmosis.incentives.lockableDurations();

    const poolIds = [...allPools, ...highlightedPools, ...myPools].map(
      (pool) => pool.id.low
    );

    const poolIdsWithDenom: { id: number; denom: string }[] = [
      ...new Set(poolIds),
    ]
      .map((id) => formattedPools.find((pool) => pool.id.low === id)!)
      .map((pool) => ({
        id: pool.id.low,
        denom: pool.totalShares!.denom,
      }))
      .filter(({ id }) => !allAprs[id]);

    const getActiveGauges = (denom: string) => {
      return client.osmosis.incentives.activeGaugesPerDenom({ denom });
    };

    let poolsApr: { [key: number]: PoolApr } = {};

    if (poolIdsWithDenom.length) {
      const poolsAprNew = await getPoolsApr(
        formattedPools,
        lockableDurations,
        superfluidAssets,
        poolIdsWithDenom,
        prices,
        getActiveGauges
      );
      poolsApr = { ...allAprs, ...poolsAprNew };
      setAllAprs(poolsApr);
      console.log('added new apr', Object.keys(poolsAprNew).length);
    } else {
      poolsApr = allAprs;
      console.log('use previous apr');
    }

    const addAprToPool = (pool: Pool) => {
      return {
        ...pool,
        apr: poolsApr[pool.id.low] || {
          1: { totalApr: '0' },
          7: { totalApr: '0' },
          14: { totalApr: '0' },
        },
      };
    };

    const myPoolsWithApr = myPools.map(addAprToPool);
    const allPoolsWithApr = allPools.map(addAprToPool);
    const highlightedPoolsWithApr = highlightedPools.map(addAprToPool);

    setData((prev) => ({
      ...prev,
      myPools: myPoolsWithApr,
      allPools: allPoolsWithApr,
      highlightedPools: highlightedPoolsWithApr,
    }));

    setIsFetchingApr(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, getRpcEndpoint]);

  useEffect(() => {
    getData();
  }, [getData]);

  const headingColor = useColorModeValue('#697584', '#A7B4C2');

  return (
    <Box mb={14} maxWidth="800px" mx="auto">
      <Heading fontSize="20px" fontWeight="600" mb="28px">
        Liquidity Pools
      </Heading>

      <PoolsOverview
        osmoPrice={osmoPrice}
        totalRewardPerDay={data.rewards.total_day_usd || 0}
      />

      {/* MY POOLS */}
      <Heading fontSize="18px" fontWeight="600" mb="20px" color={headingColor}>
        My Pools
      </Heading>
      <Box mb="38px">
        {isLoading ? (
          <Center h="100px">
            <Spinner size="lg" />
          </Center>
        ) : (
          <>
            {data?.myPools && data?.myPools.length > 0 && (
              <PoolList
                pools={data?.myPools || []}
                setPool={setPool}
                isFetchingApr={isFetchingApr}
                openPoolDetailModal={onOpen}
                isMyPools
                openModals={{
                  onAddLiquidityOpen,
                  onRemoveLiquidityOpen,
                }}
              />
            )}
          </>
        )}
      </Box>

      {/* HIGHLIGHTED POOLS */}
      <Heading fontSize="18px" fontWeight="600" mb="34px" color={headingColor}>
        Highlighted Pools
      </Heading>
      <Flex justifyContent="space-between" mb="50px" wrap="wrap" rowGap="20px">
        {data?.highlightedPools.map((pool) => (
          <PoolCard
            pool={pool}
            key={pool.id.low}
            setPool={setPool}
            openPoolDetailModal={onOpen}
            isFetchingApr={isFetchingApr}
          />
        ))}
      </Flex>

      {/* ALL POOLS */}
      <Heading fontSize="18px" fontWeight="600" mb="20px" color={headingColor}>
        All Pools
      </Heading>
      <Box mb="100px" position="relative">
        {data?.allPools && data?.allPools.length > 0 && (
          <PoolList
            pools={showAll ? data.allPools : data.allPools.slice(0, 6)}
            setPool={setPool}
            isFetchingApr={isFetchingApr}
            openPoolDetailModal={onOpen}
            openModals={{
              onAddLiquidityOpen,
              onRemoveLiquidityOpen,
            }}
          />
        )}
        {data?.allPools && data?.allPools.length > 6 && (
          <Flex
            w="100%"
            h={showAll ? 'min-content' : '200px'}
            position="absolute"
            bottom="-50px"
            alignItems="flex-end"
            justifyContent="center"
            zIndex={0}
            css={{
              background:
                colorMode === 'light'
                  ? 'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.2) 100%)'
                  : 'linear-gradient(to top, rgba(44,49,55,1) 0%, rgba(44,49,55,0.8) 50%, rgba(44,49,55,0.2) 100%)',
            }}
          >
            <Text
              color={colorMode === 'light' ? '#697584' : '#A7B4C2'}
              fontSize="14px"
              fontWeight="600"
              cursor="pointer"
              onClick={() => setShowAll(!showAll)}
            >
              {`Show ${showAll ? 'less' : 'more'}`}
              {showAll ? (
                <ChevronUpIcon boxSize={6} transform="translateY(-1px)" />
              ) : (
                <ChevronDownIcon boxSize={6} transform="translateY(-1px)" />
              )}
            </Text>
          </Flex>
        )}
      </Box>

      {pool && (
        <PoolDetailModal
          isOpen={isOpen}
          onClose={onClose}
          pool={pool}
          prices={data.prices}
          rewardPerDay={data.rewards?.pools?.[pool.id.low]?.day_usd || 0}
          locks={data.locks}
          delegatedCoins={data.delegatedCoins}
          updatePoolsData={getData}
          setPeroid={setPeriod}
          openModals={{
            onAddLiquidityOpen,
            onRemoveLiquidityOpen,
            onBondSharesOpen,
          }}
        />
      )}

      {pool && (
        <AddLiquidityModal
          isOpen={isAddLiquidityOpen}
          onClose={onAddLiquidityClose}
          currentPool={pool}
          balances={data.balances}
          prices={data.prices}
          updatePoolsData={getData}
          closeDetailModal={onClose}
        />
      )}

      {pool && (
        <RemoveLiquidityModal
          isOpen={isRemoveLiquidityOpen}
          onClose={onRemoveLiquidityClose}
          currentPool={pool}
          prices={data.prices}
          updatePoolsData={getData}
          closeDetailModal={onClose}
        />
      )}

      {pool && (
        <BondSharesModal
          isOpen={isBondSharesOpen}
          onClose={onBondSharesClose}
          currentPool={pool}
          prices={data.prices}
          updatePoolsData={getData}
          period={period}
          closeDetailModal={onClose}
        />
      )}
    </Box>
  );
};
