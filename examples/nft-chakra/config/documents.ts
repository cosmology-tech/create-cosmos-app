import { graphql as gql } from '@/gql';
import { TokensQuery, CollectionsQuery } from '@/gql/graphql';

export const mintTokensQueryDoc = gql(`
  query MintTokens($collectionAddr: String, $limit: Int) {
    tokens(collectionAddr: $collectionAddr, limit: $limit) {
      tokens {
        tokenId
        imageUrl
      }
    }
  }
`);

export const mintCollectionsQueryDoc = gql(`
  query MintCollections($limit: Int, $sortBy: CollectionSortBy) {
    collections(limit: $limit, sortBy: $sortBy) {
      collections {
        collectionAddr
        floorPrice
      }
    }
  }
`);

export const collectionsQueryDoc = gql(`
  query Collections($tokenOwnerAddr: String) {
    collections(tokenOwnerAddr: $tokenOwnerAddr) {
      collections {
        collectionAddr
        name
        description
        tokensCount
        createdBy {
          addr
          name {
            name
            ownerAddr
            associatedAddr
          }
        }
        floorPrice
      }
      total
    }
  }
`);

export type Collection = CollectionsQuery['collections']['collections'][0];

export const collectionImageQueryDoc = gql(`
  query CollectionImage($collectionAddr: String!) {
    collection(collectionAddr: $collectionAddr) {
      image
    }
  }
`);

export const ownedTokensQueryDoc = gql(`
  query Tokens($ownerAddr: String, $sortBy: TokenSortBy, $limit: Int) {
    tokens(ownerAddr: $ownerAddr, sortBy: $sortBy, limit: $limit) {
      total
      tokens {
        collectionAddr
        name
        price {
          denom
          amount
        }
        priceExpiresAt
        saleType
        tokenId
        highestCollectionBid
        description
        forSale
        imageUrl
        rarityOrder
        traits {
          name
          value
          rarityPercent
        }
        id
        lastSale {
          eventName
          price {
            denom
            amount
          }
        }
        highestCollectionBidEvent {
          bidder {
            addr
          }
        }
      }
    }
  }
`);

export type Token = TokensQuery['tokens']['tokens'][0];

export type Trait = NonNullable<Token['traits']>[0];

export const namesQueryDoc = gql(`
  query Names($associatedAddr: String) {
    names(associatedAddr: $associatedAddr) {
      names {
        name
        records {
          id
          recordName
          recordValue
          verified
          createdAt
          updatedAt
          name
          contractAddr
        }
      }
    }
  }
`);

export const eventsQueryDoc = gql(`
  query Events($forToken: TokenInput, $filter: Filter, $sortBy: EventSortBy) {
    events(forToken: $forToken, filter: $filter, sortBy: $sortBy) {
      edges {
        node {
          eventName
          price {
            denom
            amount
          }
          data
          action
          id
        }
      }
    }
  }
`);

export const contractQueryDoc = gql(`
  query Contract($address: String!) {
    contract(address: $address) {
      contractInfo
    }
  }
`);
