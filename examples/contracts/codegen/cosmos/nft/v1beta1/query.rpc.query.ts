import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryBalanceRequest, QueryBalanceResponse, QueryBalanceResponseSDKType, QueryOwnerRequest, QueryOwnerResponse, QueryOwnerResponseSDKType, QuerySupplyRequest, QuerySupplyResponse, QuerySupplyResponseSDKType, QueryNFTsRequest, QueryNFTsResponse, QueryNFTsResponseSDKType, QueryNFTRequest, QueryNFTResponse, QueryNFTResponseSDKType, QueryClassRequest, QueryClassResponse, QueryClassResponseSDKType, QueryClassesRequest, QueryClassesResponse, QueryClassesResponseSDKType } from "./query";
/** Query defines the RPC service */

export interface Query {
  balance(request: QueryBalanceRequest): Promise<QueryBalanceResponseSDKType>;
  /*Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721*/

  owner(request: QueryOwnerRequest): Promise<QueryOwnerResponseSDKType>;
  /*Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721*/

  supply(request: QuerySupplyRequest): Promise<QuerySupplyResponseSDKType>;
  /*Supply queries the number of NFTs from the given class, same as totalSupply of ERC721.*/

  nFTs(request: QueryNFTsRequest): Promise<QueryNFTsResponseSDKType>;
  /*NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
  ERC721Enumerable*/

  nFT(request: QueryNFTRequest): Promise<QueryNFTResponseSDKType>;
  /*NFT queries an NFT based on its class and id.*/

  class(request: QueryClassRequest): Promise<QueryClassResponseSDKType>;
  /*Class queries an NFT class based on its id*/

  classes(request?: QueryClassesRequest): Promise<QueryClassesResponseSDKType>;
  /*Classes queries all NFT classes*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.balance = this.balance.bind(this);
    this.owner = this.owner.bind(this);
    this.supply = this.supply.bind(this);
    this.nFTs = this.nFTs.bind(this);
    this.nFT = this.nFT.bind(this);
    this.class = this.class.bind(this);
    this.classes = this.classes.bind(this);
  }

  balance(request: QueryBalanceRequest): Promise<QueryBalanceResponseSDKType> {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Balance", data);
    return promise.then(data => QueryBalanceResponse.decode(new _m0.Reader(data)));
  }

  owner(request: QueryOwnerRequest): Promise<QueryOwnerResponseSDKType> {
    const data = QueryOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Owner", data);
    return promise.then(data => QueryOwnerResponse.decode(new _m0.Reader(data)));
  }

  supply(request: QuerySupplyRequest): Promise<QuerySupplyResponseSDKType> {
    const data = QuerySupplyRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Supply", data);
    return promise.then(data => QuerySupplyResponse.decode(new _m0.Reader(data)));
  }

  nFTs(request: QueryNFTsRequest): Promise<QueryNFTsResponseSDKType> {
    const data = QueryNFTsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "NFTs", data);
    return promise.then(data => QueryNFTsResponse.decode(new _m0.Reader(data)));
  }

  nFT(request: QueryNFTRequest): Promise<QueryNFTResponseSDKType> {
    const data = QueryNFTRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "NFT", data);
    return promise.then(data => QueryNFTResponse.decode(new _m0.Reader(data)));
  }

  class(request: QueryClassRequest): Promise<QueryClassResponseSDKType> {
    const data = QueryClassRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Class", data);
    return promise.then(data => QueryClassResponse.decode(new _m0.Reader(data)));
  }

  classes(request: QueryClassesRequest = {
    pagination: undefined
  }): Promise<QueryClassesResponseSDKType> {
    const data = QueryClassesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Classes", data);
    return promise.then(data => QueryClassesResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponseSDKType> {
      return queryService.balance(request);
    },

    owner(request: QueryOwnerRequest): Promise<QueryOwnerResponseSDKType> {
      return queryService.owner(request);
    },

    supply(request: QuerySupplyRequest): Promise<QuerySupplyResponseSDKType> {
      return queryService.supply(request);
    },

    nFTs(request: QueryNFTsRequest): Promise<QueryNFTsResponseSDKType> {
      return queryService.nFTs(request);
    },

    nFT(request: QueryNFTRequest): Promise<QueryNFTResponseSDKType> {
      return queryService.nFT(request);
    },

    class(request: QueryClassRequest): Promise<QueryClassResponseSDKType> {
      return queryService.class(request);
    },

    classes(request?: QueryClassesRequest): Promise<QueryClassesResponseSDKType> {
      return queryService.classes(request);
    }

  };
};