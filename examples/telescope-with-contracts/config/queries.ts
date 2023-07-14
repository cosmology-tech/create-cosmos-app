import { gql } from '@apollo/client';

export const COLLECTIONS = gql`
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
`;

export const COLLECTION = gql`
  query Collection($collectionAddr: String!) {
    collection(collectionAddr: $collectionAddr) {
      image
    }
  }
`;

export const OWNED_TOKENS = gql`
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
`;

export const NAMES = gql`
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
`;

export const EVENTS = gql`
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
`;

export const CONTRACT = gql`
  query Contract($address: String!) {
    contract(address: $address) {
      contractInfo
    }
  }
`;
