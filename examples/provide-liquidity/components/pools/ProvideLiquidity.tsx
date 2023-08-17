import React, { useState } from 'react';
import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Spinner,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import PoolList from './PoolList';
import PoolCard from './PoolCard';
import {
  AddLiquidityModal,
  BondSharesModal,
  PoolDetailModal,
  RemoveLiquidityModal,
} from './modals';
import { PoolsOverview } from './PoolsOverview';
import { Durations, usePoolsApr, usePoolsData } from '@/hooks';
import { ExtendedPool } from '@/utils';
import { useChain } from '@cosmos-kit/react';
import { defaultChainName } from '@/config';

export const ProvideLiquidity = () => {
  const [showAll, setShowAll] = useState(false);
  const [period, setPeriod] = useState<Durations>('14');
  const [pool, setPool] = useState<ExtendedPool>();

  const { data, isLoading, refetch } = usePoolsData();
  const { poolsApr, isFetchingApr } = usePoolsApr(data?.uniquePools || []);
  const { isWalletConnected } = useChain(defaultChainName);

  const bondSharesModal = useDisclosure();
  const poolDetailModal = useDisclosure();
  const addLiquidityModal = useDisclosure();
  const removeLiquidityModal = useDisclosure();

  const { colorMode } = useColorMode();
  const headingColor = useColorModeValue('#697584', '#A7B4C2');

  const sectionTitle = (
    <Heading fontSize="20px" fontWeight="600" mb="28px">
      Liquidity Pools
    </Heading>
  );

  const overview = (
    <PoolsOverview totalDayReward={data?.rewards.total_day_usd || 0} />
  );

  if (!isWalletConnected) {
    return (
      <Box mb={14} maxWidth="800px" mx="auto">
        {sectionTitle}
        {overview}
        <Center h="200px" bg="#F5F7FB" borderRadius="6px">
          <Text fontSize="18px" color="#2C3137">
            Connect the wallet to provide liquidity
          </Text>
        </Center>
      </Box>
    );
  }

  if (isLoading) {
    return (
      <Box mb={14} maxWidth="800px" mx="auto">
        {sectionTitle}
        {overview}
        <Center h="200px">
          <Spinner
            size="lg"
            color="#2C3137"
            emptyColor="#EEF2F8"
            speed="0.4s"
          />
        </Center>
      </Box>
    );
  }

  return (
    <Box mb={14} maxWidth="800px" mx="auto">
      {sectionTitle}
      {overview}
      <Heading fontSize="18px" fontWeight="600" mb="20px" color={headingColor}>
        My Pools
      </Heading>
      <Box mb="38px">
        {data?.myPools && data.myPools.length > 0 && (
          <PoolList
            pools={data.myPools}
            setPool={setPool}
            poolsApr={poolsApr}
            isFetchingApr={isFetchingApr}
            isMyPools
            openPoolDetailModal={poolDetailModal.onOpen}
            openModals={{
              onAddLiquidityOpen: addLiquidityModal.onOpen,
              onRemoveLiquidityOpen: removeLiquidityModal.onOpen,
            }}
          />
        )}
      </Box>

      <Heading fontSize="18px" fontWeight="600" mb="34px" color={headingColor}>
        Highlighted Pools
      </Heading>
      <Flex justifyContent="space-between" mb="50px" wrap="wrap" rowGap="20px">
        {data?.highlightedPools?.map((pool) => (
          <PoolCard
            pool={pool}
            key={pool.id.toString()}
            setPool={setPool}
            openPoolDetailModal={poolDetailModal.onOpen}
            isFetchingApr={isFetchingApr}
            poolApr={poolsApr?.[pool.denom]}
          />
        ))}
      </Flex>

      <Heading fontSize="18px" fontWeight="600" mb="20px" color={headingColor}>
        All Pools
      </Heading>
      <Box mb="100px" position="relative">
        {data?.allPools && data.allPools.length > 0 && (
          <PoolList
            pools={showAll ? data.allPools : data.allPools.slice(0, 6)}
            setPool={setPool}
            poolsApr={poolsApr}
            isFetchingApr={isFetchingApr}
            openPoolDetailModal={poolDetailModal.onOpen}
            openModals={{
              onAddLiquidityOpen: addLiquidityModal.onOpen,
              onRemoveLiquidityOpen: removeLiquidityModal.onOpen,
            }}
          />
        )}
        {data?.allPools && data.allPools.length > 6 && (
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

      <Divider mb={16} />

      {pool && data && (
        <PoolDetailModal
          isOpen={poolDetailModal.isOpen}
          onClose={poolDetailModal.onClose}
          pool={pool}
          poolApr={poolsApr?.[pool.denom]}
          prices={data.prices}
          rewardPerDay={data.rewards.pools?.[Number(pool.id)]?.day_usd || 0}
          locks={data.locks}
          delegatedCoins={data.superfluidDelegations}
          updatePoolsData={refetch}
          setPeroid={setPeriod}
          openModals={{
            onAddLiquidityOpen: addLiquidityModal.onOpen,
            onRemoveLiquidityOpen: removeLiquidityModal.onOpen,
            onBondSharesOpen: bondSharesModal.onOpen,
          }}
        />
      )}

      {pool && data && (
        <AddLiquidityModal
          isOpen={addLiquidityModal.isOpen}
          onClose={addLiquidityModal.onClose}
          currentPool={pool}
          balances={data.balances}
          prices={data.prices}
          updatePoolsData={refetch}
          closeDetailModal={poolDetailModal.onClose}
        />
      )}

      {pool && data?.prices && (
        <RemoveLiquidityModal
          isOpen={removeLiquidityModal.isOpen}
          onClose={removeLiquidityModal.onClose}
          currentPool={pool}
          prices={data.prices}
          updatePoolsData={refetch}
          closeDetailModal={poolDetailModal.onClose}
        />
      )}

      {pool && data?.prices && (
        <BondSharesModal
          isOpen={bondSharesModal.isOpen}
          onClose={bondSharesModal.onClose}
          currentPool={pool}
          prices={data.prices}
          updatePoolsData={refetch}
          period={period}
          closeDetailModal={poolDetailModal.onClose}
        />
      )}
    </Box>
  );
};
