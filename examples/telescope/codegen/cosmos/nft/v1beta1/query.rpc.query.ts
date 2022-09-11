import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { NFT, Class } from "./nft";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryBalanceRequest, QueryBalanceResponse, QueryOwnerRequest, QueryOwnerResponse, QuerySupplyRequest, QuerySupplyResponse, QueryNFTsRequest, QueryNFTsResponse, QueryNFTRequest, QueryNFTResponse, QueryClassRequest, QueryClassResponse, QueryClassesRequest, QueryClassesResponse } from "./query";

/** Query defines the RPC service */
export interface Query {
  balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /*Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721*/

  owner(request: QueryOwnerRequest): Promise<QueryOwnerResponse>;
  /*Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721*/

  supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
  /*Supply queries the number of NFTs from the given class, same as totalSupply of ERC721.*/

  nFTs(request: QueryNFTsRequest): Promise<QueryNFTsResponse>;
  /*NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
  ERC721Enumerable*/

  nFT(request: QueryNFTRequest): Promise<QueryNFTResponse>;
  /*NFT queries an NFT based on its class and id.*/

  class(request: QueryClassRequest): Promise<QueryClassResponse>;
  /*Class queries an NFT class based on its id*/

  classes(request: QueryClassesRequest): Promise<QueryClassesResponse>;
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

  balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Balance", data);
    return promise.then(data => QueryBalanceResponse.decode(new _m0.Reader(data)));
  }

  owner(request: QueryOwnerRequest): Promise<QueryOwnerResponse> {
    const data = QueryOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Owner", data);
    return promise.then(data => QueryOwnerResponse.decode(new _m0.Reader(data)));
  }

  supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse> {
    const data = QuerySupplyRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Supply", data);
    return promise.then(data => QuerySupplyResponse.decode(new _m0.Reader(data)));
  }

  nFTs(request: QueryNFTsRequest): Promise<QueryNFTsResponse> {
    const data = QueryNFTsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "NFTs", data);
    return promise.then(data => QueryNFTsResponse.decode(new _m0.Reader(data)));
  }

  nFT(request: QueryNFTRequest): Promise<QueryNFTResponse> {
    const data = QueryNFTRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "NFT", data);
    return promise.then(data => QueryNFTResponse.decode(new _m0.Reader(data)));
  }

  class(request: QueryClassRequest): Promise<QueryClassResponse> {
    const data = QueryClassRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Class", data);
    return promise.then(data => QueryClassResponse.decode(new _m0.Reader(data)));
  }

  classes(request: QueryClassesRequest): Promise<QueryClassesResponse> {
    const data = QueryClassesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Classes", data);
    return promise.then(data => QueryClassesResponse.decode(new _m0.Reader(data)));
  }

}