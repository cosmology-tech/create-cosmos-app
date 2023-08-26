/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query MintTokens($collectionAddr: String, $limit: Int) {\n    tokens(collectionAddr: $collectionAddr, limit: $limit) {\n      tokens {\n        tokenId\n        imageUrl\n      }\n    }\n  }\n": types.MintTokensDocument,
    "\n  query MintCollections($limit: Int, $sortBy: CollectionSortBy) {\n    collections(limit: $limit, sortBy: $sortBy) {\n      collections {\n        collectionAddr\n        floorPrice\n      }\n    }\n  }\n": types.MintCollectionsDocument,
    "\n  query Collections($tokenOwnerAddr: String) {\n    collections(tokenOwnerAddr: $tokenOwnerAddr) {\n      collections {\n        collectionAddr\n        name\n        description\n        tokensCount\n        createdBy {\n          addr\n          name {\n            name\n            ownerAddr\n            associatedAddr\n          }\n        }\n        floorPrice\n      }\n      total\n    }\n  }\n": types.CollectionsDocument,
    "\n  query CollectionImage($collectionAddr: String!) {\n    collection(collectionAddr: $collectionAddr) {\n      image\n    }\n  }\n": types.CollectionImageDocument,
    "\n  query Tokens($ownerAddr: String, $sortBy: TokenSortBy, $limit: Int) {\n    tokens(ownerAddr: $ownerAddr, sortBy: $sortBy, limit: $limit) {\n      total\n      tokens {\n        collectionAddr\n        name\n        price {\n          denom\n          amount\n        }\n        priceExpiresAt\n        saleType\n        tokenId\n        highestCollectionBid\n        description\n        forSale\n        imageUrl\n        rarityOrder\n        traits {\n          name\n          value\n          rarityPercent\n        }\n        id\n        lastSale {\n          eventName\n          price {\n            denom\n            amount\n          }\n        }\n        highestCollectionBidEvent {\n          bidder {\n            addr\n          }\n        }\n      }\n    }\n  }\n": types.TokensDocument,
    "\n  query Names($associatedAddr: String) {\n    names(associatedAddr: $associatedAddr) {\n      names {\n        name\n        records {\n          id\n          recordName\n          recordValue\n          verified\n          createdAt\n          updatedAt\n          name\n          contractAddr\n        }\n      }\n    }\n  }\n": types.NamesDocument,
    "\n  query Events($forToken: TokenInput, $filter: Filter, $sortBy: EventSortBy) {\n    events(forToken: $forToken, filter: $filter, sortBy: $sortBy) {\n      edges {\n        node {\n          eventName\n          price {\n            denom\n            amount\n          }\n          data\n          action\n          id\n        }\n      }\n    }\n  }\n": types.EventsDocument,
    "\n  query Contract($address: String!) {\n    contract(address: $address) {\n      contractInfo\n    }\n  }\n": types.ContractDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query MintTokens($collectionAddr: String, $limit: Int) {\n    tokens(collectionAddr: $collectionAddr, limit: $limit) {\n      tokens {\n        tokenId\n        imageUrl\n      }\n    }\n  }\n"): (typeof documents)["\n  query MintTokens($collectionAddr: String, $limit: Int) {\n    tokens(collectionAddr: $collectionAddr, limit: $limit) {\n      tokens {\n        tokenId\n        imageUrl\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query MintCollections($limit: Int, $sortBy: CollectionSortBy) {\n    collections(limit: $limit, sortBy: $sortBy) {\n      collections {\n        collectionAddr\n        floorPrice\n      }\n    }\n  }\n"): (typeof documents)["\n  query MintCollections($limit: Int, $sortBy: CollectionSortBy) {\n    collections(limit: $limit, sortBy: $sortBy) {\n      collections {\n        collectionAddr\n        floorPrice\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Collections($tokenOwnerAddr: String) {\n    collections(tokenOwnerAddr: $tokenOwnerAddr) {\n      collections {\n        collectionAddr\n        name\n        description\n        tokensCount\n        createdBy {\n          addr\n          name {\n            name\n            ownerAddr\n            associatedAddr\n          }\n        }\n        floorPrice\n      }\n      total\n    }\n  }\n"): (typeof documents)["\n  query Collections($tokenOwnerAddr: String) {\n    collections(tokenOwnerAddr: $tokenOwnerAddr) {\n      collections {\n        collectionAddr\n        name\n        description\n        tokensCount\n        createdBy {\n          addr\n          name {\n            name\n            ownerAddr\n            associatedAddr\n          }\n        }\n        floorPrice\n      }\n      total\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CollectionImage($collectionAddr: String!) {\n    collection(collectionAddr: $collectionAddr) {\n      image\n    }\n  }\n"): (typeof documents)["\n  query CollectionImage($collectionAddr: String!) {\n    collection(collectionAddr: $collectionAddr) {\n      image\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Tokens($ownerAddr: String, $sortBy: TokenSortBy, $limit: Int) {\n    tokens(ownerAddr: $ownerAddr, sortBy: $sortBy, limit: $limit) {\n      total\n      tokens {\n        collectionAddr\n        name\n        price {\n          denom\n          amount\n        }\n        priceExpiresAt\n        saleType\n        tokenId\n        highestCollectionBid\n        description\n        forSale\n        imageUrl\n        rarityOrder\n        traits {\n          name\n          value\n          rarityPercent\n        }\n        id\n        lastSale {\n          eventName\n          price {\n            denom\n            amount\n          }\n        }\n        highestCollectionBidEvent {\n          bidder {\n            addr\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Tokens($ownerAddr: String, $sortBy: TokenSortBy, $limit: Int) {\n    tokens(ownerAddr: $ownerAddr, sortBy: $sortBy, limit: $limit) {\n      total\n      tokens {\n        collectionAddr\n        name\n        price {\n          denom\n          amount\n        }\n        priceExpiresAt\n        saleType\n        tokenId\n        highestCollectionBid\n        description\n        forSale\n        imageUrl\n        rarityOrder\n        traits {\n          name\n          value\n          rarityPercent\n        }\n        id\n        lastSale {\n          eventName\n          price {\n            denom\n            amount\n          }\n        }\n        highestCollectionBidEvent {\n          bidder {\n            addr\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Names($associatedAddr: String) {\n    names(associatedAddr: $associatedAddr) {\n      names {\n        name\n        records {\n          id\n          recordName\n          recordValue\n          verified\n          createdAt\n          updatedAt\n          name\n          contractAddr\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Names($associatedAddr: String) {\n    names(associatedAddr: $associatedAddr) {\n      names {\n        name\n        records {\n          id\n          recordName\n          recordValue\n          verified\n          createdAt\n          updatedAt\n          name\n          contractAddr\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Events($forToken: TokenInput, $filter: Filter, $sortBy: EventSortBy) {\n    events(forToken: $forToken, filter: $filter, sortBy: $sortBy) {\n      edges {\n        node {\n          eventName\n          price {\n            denom\n            amount\n          }\n          data\n          action\n          id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Events($forToken: TokenInput, $filter: Filter, $sortBy: EventSortBy) {\n    events(forToken: $forToken, filter: $filter, sortBy: $sortBy) {\n      edges {\n        node {\n          eventName\n          price {\n            denom\n            amount\n          }\n          data\n          action\n          id\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Contract($address: String!) {\n    contract(address: $address) {\n      contractInfo\n    }\n  }\n"): (typeof documents)["\n  query Contract($address: String!) {\n    contract(address: $address) {\n      contractInfo\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;