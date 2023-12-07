import { useQuery } from '@tanstack/react-query';
import { useGraphQL } from '@/hooks';
import { GET_EVENTS } from '@/config';
import { EventSortBy, Filter } from '@/gql/graphql';

export function useEvents(collectionAddr: string, tokenId: string, enabled = true) {
  const gql = useGraphQL();

  const query = useQuery({
    queryKey: ['eventsQuery', collectionAddr, tokenId],
    queryFn: () =>
      gql.request(GET_EVENTS, {
        forToken: { collectionAddr, tokenId },
        filter: Filter.TokenMetadatas,
        sortBy: EventSortBy.BlockHeightAsc,
      }),
    staleTime: Infinity,
    enabled
  });

  return { query, value: query.data?.events.edges }
}