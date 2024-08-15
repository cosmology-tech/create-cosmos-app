import { useChain } from '@cosmos-kit/react';
import { ChainName } from 'cosmos-kit';
import { Box, Spinner, Text } from '@interchain-ui/react';

import Overview from './Overview';
import { MyValidators } from './MyValidators';
import { AllValidators } from './AllValidators';
import { useStakingData, useValidatorLogos } from '@/hooks';

export const StakingSection = ({ chainName }: { chainName: ChainName }) => {
  const { isWalletConnected } = useChain(chainName);
  const { data, isLoading, refetch } = useStakingData(chainName);
  const { data: logos, isLoading: isFetchingLogos } = useValidatorLogos(
    chainName,
    data?.allValidators || []
  );

  return (
    <Box my="$16">
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
      ) : isLoading || isFetchingLogos || !data ? (
        <Box
          height="$28"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Spinner size="$7xl" />
        </Box>
      ) : (
        <>
          <Overview
            balance={data.balance}
            rewards={data.rewards}
            staked={data.totalDelegated}
            updateData={refetch}
            chainName={chainName}
            prices={data.prices}
          />

          {data.myValidators.length > 0 && (
            <MyValidators
              myValidators={data.myValidators}
              allValidators={data.allValidators}
              balance={data.balance}
              updateData={refetch}
              unbondingDays={data.unbondingDays}
              chainName={chainName}
              logos={logos}
              prices={data.prices}
            />
          )}

          <AllValidators
            balance={data.balance}
            validators={data.allValidators}
            updateData={refetch}
            unbondingDays={data.unbondingDays}
            chainName={chainName}
            logos={logos}
            prices={data.prices}
          />
        </>
      )}
    </Box>
  );
};
