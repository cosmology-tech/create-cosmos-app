import { GraphQLClient } from 'graphql-request';
import { stargazeGraphQLEndpoint } from '@/config';

const graphQLClient = new GraphQLClient(stargazeGraphQLEndpoint);

export const useGraphqlRequest = () => {
  return { request: graphQLClient.request.bind(graphQLClient) };
};
