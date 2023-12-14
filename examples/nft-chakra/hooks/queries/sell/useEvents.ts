import { useQuery } from '@tanstack/react-query';

import { eventsQueryDoc } from '@/config';
import { useGraphqlRequest } from '@/hooks';
import { EventSortBy, Filter } from '@/gql/graphql';

export const useEvents = (
  collectionAddr: string,
  tokenId: string,
  enabled: boolean = true
) => {
  const { request } = useGraphqlRequest();

  const eventsQuery = useQuery({
    queryKey: ['eventsQuery', collectionAddr, tokenId],
    queryFn: () =>
      request(eventsQueryDoc, {
        forToken: { collectionAddr, tokenId },
        filter: Filter.TokenMetadatas,
        sortBy: EventSortBy.BlockHeightAsc,
      }),
    select: (data) => data.events.edges,
    staleTime: Infinity,
    enabled,
  });

  return {
    events: eventsQuery.data,
    isLoading: eventsQuery.isLoading,
  };
};
