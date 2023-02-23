import React, { ReactElement, useEffect, useState } from 'react';
import { useChain, useManager } from '@cosmos-kit/react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Pool as OsmosisPool } from 'osmojs/types/codegen/osmosis/gamm/pool-models/balancer/balancerPool';
import { EpochInfo } from 'osmojs/types/codegen/osmosis/epochs/genesis';
import BigNumber from 'bignumber.js';
import { osmosis, cosmos } from 'osmojs';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import Long from 'long';
import {
  calculateShareOutAmount,
  calculateCoinsNeededInPoolForValue,
  calculateMaxCoinsForPool,
  makePoolsPretty,
  makePoolsPrettyValues,
  getPricesFromCoinGecko,
  prettyPool,
  getBalancerPools,
} from '@cosmology/core';

import { chainName } from '../../config';
import PoolList from './pool-list';
import PoolCard from './pool-card';
import { PoolDetailModal } from './pool-detail-modal';

// TODO: extract logic inside useEffect into functions
// TODO: use react-error-boundary to handle errors
// TODO: use Promose.allSettled to optimize all the requests, figure out the request flow
// TODO: use existing approach (@cosmology/core, pretty pool, etc) to format the pool data

dayjs.extend(duration);

const StatBox = ({
  children,
  bgColor,
}: {
  bgColor?: string;
  children: ReactElement;
}) => (
  <Box
    w="234px"
    h="92px"
    borderRadius="7px"
    bgColor={bgColor || '#F5F7FB'}
    py="20px"
    px="22px"
  >
    {children}
  </Box>
);

const Colon = () => (
  <Text mx="4px" transform="translateY(-2px)">
    :
  </Text>
);

const exponentiate = (num: number | string | undefined, exp: number) => {
  if (!num) return 0;
  return new BigNumber(num)
    .multipliedBy(new BigNumber(10).exponentiatedBy(exp))
    .toNumber();
};

type Token = {
  [key: string]: number | string;
};

type Fee = {
  [key: string]: number | string;
};

type ExtraPoolProperties = {
  fees7D: number;
  volume24H: number;
  liquidity: number;
  myLiquidity?: number;
  bonded?: number;
};

export type Pool = OsmosisPool & ExtraPoolProperties;

interface IData {
  myPools: Pool[];
  allPools: Pool[];
  allTokens: Token[];
  highlightedPools: Pool[];
}

export const ProvideLiquidity = () => {
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(['00', '00', '00']);
  const [pool, setPool] = useState<Pool>();
  const [data, setData] = useState<IData>();

  const { getChainLogo } = useManager();
  const { address, getRpcEndpoint, assets } = useChain(chainName);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const osmoPrice =
    data?.allTokens.find((token) => token.denom === assets?.assets[0].base)
      ?.price || 0;

  const calcCountdown = (epochs: EpochInfo[]) => {
    const currentEpoch = epochs.find(
      (epoch) => epoch.identifier === 'day'
    ) as EpochInfo;
    const startTime = currentEpoch.currentEpochStartTime;
    const duration = currentEpoch.duration?.seconds.low || 60 * 60 * 24;
    const endTime = dayjs(startTime).add(duration, 'second');

    const countdownInterval = setInterval(() => {
      if (dayjs().isAfter(endTime)) clearInterval(countdownInterval);

      const leftTime = dayjs.duration(endTime.diff(dayjs())).format('HH:mm:ss');
      setCountdown(leftTime.split(':'));
    }, 1000);
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

  const addExtraPropertiesToPool = (
    pool: OsmosisPool,
    tokens: Token[],
    fees: Fee[]
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
    const fees7D = Math.round(Number(feeData?.fees_spent_7d || 0));

    return { ...pool, liquidity, volume24H, fees7D };
  };

  const removeUnsupportedPools = (
    { poolAssets }: OsmosisPool,
    tokens: Token[]
  ) => {
    // TODO: get token data from asset_list and coingecko if not found on osmosis tokens
    return !poolAssets.some(
      ({ token }) =>
        token?.denom.startsWith('gamm/pool') ||
        !tokens.find(({ denom }) => denom === token?.denom)
    );
  };

  useEffect(() => {
    const getData = async () => {
      if (!address) {
        setData({
          myPools: [],
          allPools: [],
          allTokens: [],
          highlightedPools: [],
        });
        return;
      }

      setIsLoading(true);

      let rpcEndpoint = await getRpcEndpoint();

      if (!rpcEndpoint) {
        console.log('no rpc endpoint — using a fallback');
        rpcEndpoint = `https://rpc.cosmos.directory/${chainName}`;
      }

      const client = await osmosis.ClientFactory.createRPCQueryClient({
        rpcEndpoint,
      });

      // get bondedTokensRatio() {
      //     return this.stakedTokens / this.mintedTokens;
      // };

      // get apr() {
      //     console.log(this.inflation, this.communityTax, this.bondedTokensRatio)
      //     return (this.inflation * (1 - this.communityTax)) / this.bondedTokensRatio;
      // };

      // const res1 = await client.osmosis.mint.v1beta1.params(); // staking "250000000000000000"
      // const res2 = await client.cosmos.distribution.v1beta1.params(); // communityTax: '0'
      // const res3 = await client.cosmos.staking.v1beta1.params(); //minCommissionRate "50000000000000000"
      // const res4 = await client.cosmos.staking.v1beta1.pool(); // bondedTokens "214352468432661" notBondedTokens "8090978063981"
      // console.log('res4', res4);

      // GET APR
      // const response = await fetch(
      //   'https://api-osmosis.imperator.co/apr/v2/staking'
      // );
      // const data = await response.json();
      // console.log(data);

      // const { balances: allBalances } =
      //   await client.cosmos.bank.v1beta1.allBalances({
      //     address,
      //   });
      // console.log('allBalances', allBalances);

      // const balancerPools = await getBalancerPools(client);
      // console.log('balancerPools', balancerPools);

      // const prices = await getPricesFromCoinGecko();
      // console.log('prices', prices);

      // const prettyPools = makePoolsPretty(prices, balancerPools);
      // console.log('prettyPools', prettyPools);

      // return;

      // GET EPOCHS
      // TODO: use error handle
      const { epochs } = await client.osmosis.epochs.v1beta1.epochInfos();
      calcCountdown(epochs);

      // GET TOKENS
      const allTokens = await getTokens();

      // GET FEES
      const fees = await getFees();

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

      const allPools = pools
        .filter(({ typeUrl }) => !typeUrl.includes('stableswap'))
        .map(({ value }) => osmosis.gamm.v1beta1.Pool.decode(value))
        .filter((pool) => removeUnsupportedPools(pool, allTokens))
        .map((pool) => addExtraPropertiesToPool(pool, allTokens, fees))
        .sort((a, b) => b.liquidity - a.liquidity)
        .slice(0, 100);

      console.log('allPools', allPools);

      // GET SUPERFLUID POOLS
      const { assets: superfluidAssets } =
        await client.osmosis.superfluid.allAssets();

      const highlightedPools = superfluidAssets
        .map(({ denom }) => {
          const poolId = parseInt(denom.match(/\d+/)![0]);
          return allPools.filter(({ id }) => id.low === poolId)[0];
        })
        .sort((a, b) => b.liquidity - a.liquidity)
        .slice(0, 3);

      // GET MY POOLS
      // TODO: handle fatch error
      const { balances } = await client.cosmos.bank.v1beta1.allBalances({
        address,
      });

      console.log('balances', balances);

      // osmosis/lockup/v1beta1/account_locked_longer_duration
      const locks = client.osmosis.lockup.accountLockedLongerDuration({
        owner: address,
      });

      const myPools: Pool[] = balances
        .filter(({ denom }) => denom.startsWith('gamm/pool'))
        .map(({ denom }) => {
          const poolId = parseInt(denom.match(/\d+/)![0]);
          const pool = allPools.filter(({ id }) => id.low === poolId)[0];
          const myLiquidity = 0;
          const bonded = 0;
          return { ...pool, myLiquidity, bonded };
        });

      setData({
        myPools,
        allPools,
        allTokens,
        highlightedPools,
      });
      setIsLoading(false);
    };

    getData();
  }, [address, getRpcEndpoint]);

  return (
    <Box mb={14} width="800px" mx="auto">
      <Heading fontSize="20px" fontWeight="600" mb="28px">
        Liquidity Pools
      </Heading>

      <Flex justifyContent="space-between" mb="25px">
        <StatBox>
          <Flex h="100%" alignItems="center">
            <Image
              w="56px"
              alt="Osmosis"
              src={getChainLogo(chainName)}
              transform="translateX(-8px)"
            />
            <Flex flexDir="column" justifyContent="space-between">
              <Text color="#697584" fontWeight="600" fontSize="14px">
                OSMO Price
              </Text>
              <Flex alignItems="flex-end" gap="1px">
                <Text fontWeight="600" fontSize="14px" lineHeight="24px">
                  $
                </Text>
                <Text
                  color="#2C3137"
                  fontWeight="600"
                  fontSize="26px"
                  lineHeight="30px"
                >
                  {Number(osmoPrice).toFixed(2)}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </StatBox>

        <StatBox>
          <Flex
            h="100%"
            flexDir="column"
            justifyContent="center"
            fontWeight="600"
          >
            <Text color="#697584" fontSize="14px">
              Reward distribution in
            </Text>
            <Flex
              color="#2C3137"
              fontSize="26px"
              lineHeight="30px"
              alignItems="center"
            >
              <Text>{countdown[0]}</Text>
              <Colon />
              <Text>{countdown[1]}</Text>
              <Colon />
              <Text>{countdown[2]}</Text>
            </Flex>
          </Flex>
        </StatBox>

        <StatBox bgColor="#E5FFE4">
          <Flex
            h="100%"
            flexDir="column"
            justifyContent="center"
            fontWeight="600"
          >
            <Text color="#36BB35" fontSize="14px">
              Yesterdays rewards
            </Text>
            <Flex alignItems="flex-end" gap="12px">
              <Flex alignItems="flex-end" gap="2px">
                <Text color="#36BB35" fontSize="26px" lineHeight="30px">
                  18.82
                </Text>
                <Text color="#36BB35" fontSize="14px">
                  OSMO
                </Text>
              </Flex>
              <Text color="#36BB35" fontWeight="400" fontSize="14px">
                $12.87
              </Text>
            </Flex>
          </Flex>
        </StatBox>
      </Flex>

      {/* MY POOLS */}
      {data?.myPools && data?.myPools.length > 0 && (
        <>
          <Heading fontSize="18px" fontWeight="600" mb="20px" color="#697584">
            My Pools
          </Heading>
          <Box mb="38px">
            <PoolList
              pools={data?.myPools || []}
              setPool={setPool}
              currentPool={pool}
              openPoolDetailModal={onOpen}
              isMyPools
            />
          </Box>
        </>
      )}

      {/* HIGHLIGHTED POOLS */}
      <Heading fontSize="18px" fontWeight="600" mb="34px" color="#697584">
        Highlighted Pools
      </Heading>
      <Flex justifyContent="space-between" mb="50px" wrap="wrap" rowGap="20px">
        {data?.highlightedPools.map((pool) => (
          <PoolCard
            pool={pool}
            key={pool.id.low}
            setPool={setPool}
            openPoolDetailModal={onOpen}
          />
        ))}
      </Flex>

      {/* ALL POOLS */}
      <Heading fontSize="18px" fontWeight="600" mb="20px" color="#697584">
        All Pools
      </Heading>
      <Box mb="100px" position="relative">
        {data?.allPools && data?.allPools.length > 0 && (
          <PoolList
            pools={showAll ? data.allPools : data.allPools.slice(0, 6)}
            setPool={setPool}
            currentPool={pool}
            openPoolDetailModal={onOpen}
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
                'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.2) 100%)',
            }}
          >
            <Text
              color="#697584"
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

      <PoolDetailModal isOpen={isOpen} onClose={onClose} pool={pool} />
    </Box>
  );
};
