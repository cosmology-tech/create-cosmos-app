import { defaultChainName } from '@/config';
import { UseQueryResult } from '@tanstack/react-query';
import { EpochInfo } from 'osmo-query/dist/codegen/osmosis/epochs/genesis';
import { useQueryHooks } from './useQueryHooks';

export const useEpochs = () => {
  const { osmosisQuery, isReady, isFetching } = useQueryHooks(defaultChainName);

  const epochsQuery: UseQueryResult<EpochInfo[]> =
    osmosisQuery.epochs.v1beta1.useEpochInfos({
      options: {
        enabled: isReady,
        select: ({ epochs }) => epochs,
        staleTime: Infinity,
      },
    });

  const epochs = epochsQuery.data;
  const updateEpochs = epochsQuery.refetch;
  const isLoading = isFetching || epochsQuery.isFetching;

  return { epochs, updateEpochs, isLoading };
};
