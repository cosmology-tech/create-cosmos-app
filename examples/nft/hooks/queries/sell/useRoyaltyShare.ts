import { useQuery } from '@tanstack/react-query';

import { contractQueryDoc } from '@/config';
import { useGraphqlRequest } from '@/hooks';

type Share = string | undefined;

export const useRoyaltyShare = (address: string) => {
  const { request } = useGraphqlRequest();

  const contractQuery = useQuery({
    queryKey: ['contractQuery', address],
    queryFn: () => request(contractQueryDoc, { address }),
    select: (data) => data.contract?.contractInfo,
    staleTime: Infinity,
  });

  return {
    royaltyShare: contractQuery.data?.royalty_info.share as Share,
    isLoading: contractQuery.isLoading,
  };
};
