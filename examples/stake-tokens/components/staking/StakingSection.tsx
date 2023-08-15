import { useChain } from '@cosmos-kit/react';
import { Box, Center, Spinner, Text } from '@chakra-ui/react';
import Overview from './Overview';
import { MyValidators } from './MyValidators';
import { AllValidators } from './AllValidators';
import { ChainName } from '@cosmos-kit/core';
import { useStakingData, useValidatorLogos } from '@/hooks';

export const StakingSection = ({ chainName }: { chainName: ChainName }) => {
  const { isWalletConnected } = useChain(chainName);
  const { data, isLoading, refetch } = useStakingData(chainName);
  const { data: logos, isLoading: isFetchingLogos } = useValidatorLogos(
    chainName,
    data?.allValidators || []
  );

  return (
    <Box my={14}>
      {!isWalletConnected ? (
        <Center h={48} width="100%">
          <Text fontWeight="600" fontSize="20px">
            Please connect the wallet
          </Text>
        </Center>
      ) : isLoading || isFetchingLogos || !data ? (
        <Center h={48} width="100%">
          <Spinner size="lg" speed="0.4s" />
        </Center>
      ) : (
        <>
          <Overview
            balance={data.balance}
            rewards={data.rewards}
            staked={data.totalDelegated}
            updateData={refetch}
            chainName={chainName}
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
            />
          )}

          <AllValidators
            balance={data.balance}
            validators={data.allValidators}
            updateData={refetch}
            unbondingDays={data.unbondingDays}
            chainName={chainName}
            logos={logos}
          />
        </>
      )}
    </Box>
  );
};
