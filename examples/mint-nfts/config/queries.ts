import { gql } from '@apollo/client';

export const COLLECTIONS = gql`
  query Collections($limit: Int, $sortBy: CollectionSortBy) {
    collections(limit: $limit, sortBy: $sortBy) {
      collections {
        collectionAddr
        floorPrice
      }
    }
  }
`;

export const COLLECTION = gql`
  query Collection($collectionAddr: String!) {
    collection(collectionAddr: $collectionAddr) {
      image
    }
  }
`;
