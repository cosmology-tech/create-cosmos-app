import { STARGAZE_GRAPHQL_ENDPOINT } from '@/config';
import { GraphQLClient } from 'graphql-request';

export function useGraphQL() {
  return new GraphQLClient(STARGAZE_GRAPHQL_ENDPOINT);
}