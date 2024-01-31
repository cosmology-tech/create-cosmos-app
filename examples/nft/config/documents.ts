import { graphql as gql } from '@/gql';

export const MINT_TOKENS = gql(`
  query MintTokens($collectionAddr: String, $limit: Int) {
    tokens(collectionAddr: $collectionAddr, limit: $limit) {
      tokens {
        tokenId
        imageUrl
      }
    }
  }
`);

export const MINT_COLLECTIONS = gql(`
  query MintCollections($limit: Int, $sortBy: CollectionSortBy) {
    collections(limit: $limit, sortBy: $sortBy) {
      collections {
        collectionAddr
        floorPrice
      }
    }
  }
`);

export const GET_COLLECTIONS = gql(`
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


export const GET_COLLECTION_IMAGE = gql(`
  query CollectionImage($collectionAddr: String!) {
    collection(collectionAddr: $collectionAddr) {
      image
    }
  }
`);

export const GET_TOKENS = gql(`
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

export const GET_NAMES = gql(`
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

export const GET_EVENTS = gql(`
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

export const GET_CONTRACT = gql(`
  query Contract($address: String!) {
    contract(address: $address) {
      contractInfo
    }
  }
`);