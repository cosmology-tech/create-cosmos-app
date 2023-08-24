import { useQuery } from '@tanstack/react-query';

import { mintTokensQueryDoc } from '@/config';
import { useCollectionAddress, useGraphqlRequest } from '@/hooks';

export const useTokens = () => {
  const { request } = useGraphqlRequest();
  const { collectionAddress } = useCollectionAddress();

  const tokensQuery = useQuery({
    queryKey: ['mintTokensQuery', collectionAddress.sg721Addr],
    queryFn: () =>
      request(mintTokensQueryDoc, {
        collectionAddr: collectionAddress.sg721Addr || '',
        limit: 10,
      }),
    select: (data) => data.tokens.tokens,
    enabled: !!collectionAddress.sg721Addr,
    staleTime: Infinity,
  });

  return { tokens: tokensQuery.data };
};
