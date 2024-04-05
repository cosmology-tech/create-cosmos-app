// TODO fix type issues
// @ts-nocheck

import { useChain } from '@cosmos-kit/react';
import { ChainName } from 'cosmos-kit';
import { Box, Spinner, Text } from '@interchain-ui/react';

import { useStakingData } from '@/hooks';
import Overview from './Overview';

export const ClaimRewardsSection = ({
  chainName,
}: {
  chainName: ChainName;
}) => {
  const { isWalletConnected } = useChain(chainName);
  const { data, isLoading, refetch } = useStakingData(chainName);

  return (
    <Box mt="$16" mb="$26">
      {!isWalletConnected ? (
        <Box
          height="$28"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontWeight="$semibold" fontSize="$xl">
            Please connect the wallet
          </Text>
        </Box>
      ) : isLoading || !data ? (
        <Box
          height="$28"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Spinner size="$7xl" />
        </Box>
      ) : (
        <Overview
          balance={data.balance}
          rewards={data.rewards}
          staked={data.totalDelegated}
          updateData={refetch}
          chainName={chainName}
          prices={data.prices}
        />
      )}
    </Box>
  );
};
