import { TokensQuery, CollectionsQuery } from '@/gql/graphql';

export type Trait = NonNullable<Token['traits']>[0];
export type Token = TokensQuery['tokens']['tokens'][0];
export type Collection = CollectionsQuery['collections']['collections'][0];

export * from './projects';
export * from './defaults';
export * from './documents';