import React, { useCallback, useEffect, useMemo, useState } from 'react';
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
import { Coin } from 'osmojs/types/codegen/cosmos/base/v1beta1/coin';
import BigNumber from 'bignumber.js';
import { chainName } from '../../config';
import PoolList from './pool-list';
import PoolCard from './pool-card';
import { PoolDetailModal } from './pool-detail-modal';
import AddLiquidityModal from './add-liquidity-modal';
import RemoveLiquidityModal from './remove-liquidity-modal';
import BondSharesModal from './bond-shares-modal';
import {
  ExtraPoolProperties,
  GaugeQueryResult,
  Peroid,
  PoolApr,
} from '../types';
import {
  convertGammTokenToDollarValue,
  calcPoolAprs,
  calcPoolLiquidity,
} from '../../utils';
import { PriceHash } from '../../utils/types';
import { PoolsOverview } from './pools-overview';
import * as api from '../../api';
import { useOsmosisRequests, useQueuedRequests, useRequest } from '../../hooks';

export type Pool = OsmosisPool & ExtraPoolProperties;

const addPropertiesToPool = (
  pool: OsmosisPool,
  fees: api.Fee[],
  balances: Coin[],
  lockedCoins: Coin[],
  prices: PriceHash
) => {
  const liquidity = new BigNumber(calcPoolLiquidity(pool, prices))
    .decimalPlaces(0)
    .toNumber();

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

export const ProvideLiquidity = () => {
  const [showAll, setShowAll] = useState(false);
  const [period, setPeriod] = useState<Peroid>('14');
  const [pool, setPool] = useState<Pool>();

  const bondSharesModal = useDisclosure();
  const poolDetailModal = useDisclosure();
  const addLiquidityModal = useDisclosure();
  const removeLiquidityModal = useDisclosure();

  const { address, assets } = useChain(chainName);
  const { colorMode } = useColorMode();

  const getFees = useRequest<typeof api.getFees>(api.getFees);
  const getTokens = useRequest<typeof api.getTokens>(api.getTokens);
  const getRewards = useRequest<typeof api.getRewards>(api.getRewards);
  const getSuperfluidApr = useRequest<typeof api.getSuperfluidApr>(
    api.getSuperfluidApr
  );

  const getGaugesRequest = useQueuedRequests<GaugeQueryResult>({
    queueLength: 10,
    queueGap: 1000,
  });

  const {
    getAllBalances,
    getAllPools,
    getLockedCoins,
    getLockableDurations,
    getLocks,
    getSuperfluidAssets,
    getSuperfluidDelegations,
    getActiveGauges,
  } = useOsmosisRequests(chainName);

  const prices = useMemo(() => {
    if (!getTokens.data) return;
    const prices: PriceHash = getTokens.data.reduce(
      (prev, cur) => ({
        ...prev,
        [cur.denom]: cur.price,
      }),
      {}
    );
    return prices;
  }, [getTokens.data]);

  useEffect(() => {
    getFees.request();
    getTokens.request();
    getSuperfluidApr.request();
    getLockableDurations.request();
    getSuperfluidAssets.request();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!address) return;
    getRewards.request(address);
    getAllBalances.request({ address });
    getLockedCoins.request({ owner: address });
    getLocks.request({ owner: address });
    getSuperfluidDelegations.request({ delegatorAddress: address });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  useEffect(() => {
    if (!prices) return;
    getAllPools.request(prices);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prices]);

  const osmoPrice = useMemo(() => {
    if (!getTokens.data) return 0;
    return (
      getTokens.data.find((token) => token.denom === assets?.assets[0].base)
        ?.price || 0
    );
  }, [assets, getTokens.data]);

  const prettyPools = useMemo(() => {
    const fees = getFees.data;
    const allPools = getAllPools.data;
    const balances = getAllBalances.data;
    const lockedCoins = getLockedCoins.data;

    if (!allPools || !prices || !fees || !balances || !lockedCoins) return;

    return allPools.map((pool) =>
      addPropertiesToPool(pool, fees, balances, lockedCoins, prices)
    );
  }, [
    prices,
    getFees.data,
    getAllPools.data,
    getLockedCoins.data,
    getAllBalances.data,
  ]);

  const allPoolAprs = useMemo(() => {
    if (
      !prices ||
      !prettyPools ||
      !getSuperfluidApr.data ||
      !getSuperfluidAssets.data ||
      !getLockableDurations.data ||
      getGaugesRequest.data.length === 0
    )
      return;

    const allPoolAprs: { [key: number]: PoolApr } =
      getGaugesRequest.data.reduce((prev, cur) => {
        const pool = prettyPools.find(({ id }) => id.low === cur.poolId)!;
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
              aprSuperfluid: getSuperfluidApr.data!,
              lockupDurations: getLockableDurations.data!,
              superfluidPools: getSuperfluidAssets.data!,
              volume7d: pool.volume7d,
              lockup: duration,
            }),
          };
        }, {});
        return { ...prev, [cur.poolId]: apr };
      }, {});

    return allPoolAprs;
  }, [
    getGaugesRequest.data,
    getLockableDurations.data,
    getSuperfluidApr.data,
    getSuperfluidAssets.data,
    prettyPools,
    prices,
  ]);

  const addAprToPool = useCallback(
    (pool: Pool) => {
      if (!pool || !allPoolAprs || !allPoolAprs[pool.id.low]) return pool;
      return {
        ...pool,
        apr: allPoolAprs[pool.id.low],
      };
    },
    [allPoolAprs]
  );

  const allPools = useMemo(() => {
    if (!prettyPools) return;
    return prettyPools
      .sort((a, b) => (new BigNumber(a.liquidity).lt(b.liquidity) ? 1 : -1))
      .slice(0, 20)
      .map(addAprToPool);
  }, [addAprToPool, prettyPools]);

  const highlightedPools = useMemo(() => {
    if (!getSuperfluidAssets.data || !prettyPools) return;
    const poolsData = getSuperfluidAssets.data
      .map(({ denom }) => {
        const poolId = parseInt(denom.match(/\d+/)![0]);
        const poolData = prettyPools.find(({ id }) => id.low === poolId);
        if (!poolData) return;
        return poolData;
      })
      .filter(Boolean) as Pool[];

    return poolsData
      .sort((a, b) => (new BigNumber(a!.liquidity).lt(b!.liquidity) ? 1 : -1))
      .slice(0, 3)
      .map(addAprToPool);
  }, [addAprToPool, getSuperfluidAssets.data, prettyPools]);

  const myPools = useMemo(() => {
    if (!getAllBalances.data || !prettyPools || !address) return;
    const poolsData = getAllBalances.data
      .filter(({ denom }) => denom.startsWith('gamm/pool'))
      .map((coin) => {
        const poolId = parseInt(coin.denom.match(/\d+/)![0]);
        const poolData = prettyPools.find(({ id }) => id.low === poolId);
        if (!poolData) return;
        return poolData;
      })
      .filter(Boolean) as Pool[];

    return poolsData.map(addAprToPool);
  }, [addAprToPool, getAllBalances.data, prettyPools, address]);

  useEffect(() => {
    if (!allPools || !highlightedPools || !myPools || !prettyPools) return;

    const poolIds = [...allPools, ...highlightedPools, ...myPools].map(
      (pool) => pool.id.low
    );

    const poolIdsWithDenom: { id: number; denom: string }[] = [
      ...new Set(poolIds),
    ]
      .map((id) => prettyPools.find((pool) => pool.id.low === id)!)
      .map((pool) => ({
        id: pool.id.low,
        denom: pool.totalShares!.denom,
      }))
      .filter(({ id }) => !allPoolAprs || !allPoolAprs[id]);

    if (poolIdsWithDenom.length === 0) return;

    const activeGaugesQueries = poolIdsWithDenom.map(({ id, denom }) => {
      return getActiveGauges({ denom }).then((res) => ({
        poolId: id,
        gauges: res.data,
      }));
    });

    getGaugesRequest.sendQueuedRequests(activeGaugesQueries);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allPools, highlightedPools, myPools, prettyPools]);

  const updatePoolsData = () => {
    if (!address) return;
    getLockedCoins.request({ owner: address });
    getAllBalances.request({ address });
  };

  const headingColor = useColorModeValue('#697584', '#A7B4C2');

  const isLoading =
    getLocks.loading ||
    getRewards.loading ||
    getAllBalances.loading ||
    getLockedCoins.loading ||
    getSuperfluidDelegations.loading;

  return (
    <Box mb={14} maxWidth="800px" mx="auto">
      <Heading fontSize="20px" fontWeight="600" mb="28px">
        Liquidity Pools
      </Heading>

      <PoolsOverview
        osmoPrice={osmoPrice}
        totalRewardPerDay={getRewards.data?.total_day_usd || 0}
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
            {myPools && myPools.length > 0 && (
              <PoolList
                pools={myPools}
                setPool={setPool}
                isFetchingApr={getGaugesRequest.loading}
                isMyPools
                openPoolDetailModal={poolDetailModal.onOpen}
                openModals={{
                  onAddLiquidityOpen: addLiquidityModal.onOpen,
                  onRemoveLiquidityOpen: removeLiquidityModal.onOpen,
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
        {highlightedPools?.map((pool) => (
          <PoolCard
            pool={pool}
            key={pool.id.low}
            setPool={setPool}
            openPoolDetailModal={poolDetailModal.onOpen}
            isFetchingApr={getGaugesRequest.loading}
          />
        ))}
      </Flex>

      {/* ALL POOLS */}
      <Heading fontSize="18px" fontWeight="600" mb="20px" color={headingColor}>
        All Pools
      </Heading>
      <Box mb="100px" position="relative">
        {allPools && allPools.length > 0 && (
          <PoolList
            pools={showAll ? allPools : allPools.slice(0, 6)}
            setPool={setPool}
            isFetchingApr={getGaugesRequest.loading}
            openPoolDetailModal={poolDetailModal.onOpen}
            openModals={{
              onAddLiquidityOpen: addLiquidityModal.onOpen,
              onRemoveLiquidityOpen: removeLiquidityModal.onOpen,
            }}
          />
        )}
        {allPools && allPools.length > 6 && (
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

      {pool && prices && getLocks.data && getSuperfluidDelegations.data && (
        <PoolDetailModal
          isOpen={poolDetailModal.isOpen}
          onClose={poolDetailModal.onClose}
          pool={pool}
          prices={prices}
          rewardPerDay={getRewards.data?.pools?.[pool.id.low]?.day_usd || 0}
          locks={getLocks.data}
          delegatedCoins={getSuperfluidDelegations.data}
          updatePoolsData={updatePoolsData}
          setPeroid={setPeriod}
          openModals={{
            onAddLiquidityOpen: addLiquidityModal.onOpen,
            onRemoveLiquidityOpen: removeLiquidityModal.onOpen,
            onBondSharesOpen: bondSharesModal.onOpen,
          }}
        />
      )}

      {pool && prices && getAllBalances.data && (
        <AddLiquidityModal
          isOpen={addLiquidityModal.isOpen}
          onClose={addLiquidityModal.onClose}
          currentPool={pool}
          balances={getAllBalances.data}
          prices={prices}
          updatePoolsData={updatePoolsData}
          closeDetailModal={poolDetailModal.onClose}
        />
      )}

      {pool && prices && (
        <RemoveLiquidityModal
          isOpen={removeLiquidityModal.isOpen}
          onClose={removeLiquidityModal.onClose}
          currentPool={pool}
          prices={prices}
          updatePoolsData={updatePoolsData}
          closeDetailModal={poolDetailModal.onClose}
        />
      )}

      {pool && prices && (
        <BondSharesModal
          isOpen={bondSharesModal.isOpen}
          onClose={bondSharesModal.onClose}
          currentPool={pool}
          prices={prices}
          updatePoolsData={updatePoolsData}
          period={period}
          closeDetailModal={poolDetailModal.onClose}
        />
      )}
    </Box>
  );
};
