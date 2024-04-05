//@ts-nocheck
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { NFT, NFTSDKType, Class, ClassSDKType } from "./nft";
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryBalanceRequest, QueryBalanceRequestSDKType, QueryBalanceResponse, QueryBalanceResponseSDKType, QueryOwnerRequest, QueryOwnerRequestSDKType, QueryOwnerResponse, QueryOwnerResponseSDKType, QuerySupplyRequest, QuerySupplyRequestSDKType, QuerySupplyResponse, QuerySupplyResponseSDKType, QueryNFTsRequest, QueryNFTsRequestSDKType, QueryNFTsResponse, QueryNFTsResponseSDKType, QueryNFTRequest, QueryNFTRequestSDKType, QueryNFTResponse, QueryNFTResponseSDKType, QueryClassRequest, QueryClassRequestSDKType, QueryClassResponse, QueryClassResponseSDKType, QueryClassesRequest, QueryClassesRequestSDKType, QueryClassesResponse, QueryClassesResponseSDKType } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */
  balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /** Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */
  owner(request: QueryOwnerRequest): Promise<QueryOwnerResponse>;
  /** Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */
  supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
  /**
   * NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
   * ERC721Enumerable
   */
  nFTs(request: QueryNFTsRequest): Promise<QueryNFTsResponse>;
  /** NFT queries an NFT based on its class and id. */
  nFT(request: QueryNFTRequest): Promise<QueryNFTResponse>;
  /** Class queries an NFT class based on its id */
  class(request: QueryClassRequest): Promise<QueryClassResponse>;
  /** Classes queries all NFT classes */
  classes(request?: QueryClassesRequest): Promise<QueryClassesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */
  balance = async (request: QueryBalanceRequest): Promise<QueryBalanceResponse> => {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Balance", data);
    return promise.then(data => QueryBalanceResponse.decode(new BinaryReader(data)));
  };
  /* Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */
  owner = async (request: QueryOwnerRequest): Promise<QueryOwnerResponse> => {
    const data = QueryOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Owner", data);
    return promise.then(data => QueryOwnerResponse.decode(new BinaryReader(data)));
  };
  /* Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */
  supply = async (request: QuerySupplyRequest): Promise<QuerySupplyResponse> => {
    const data = QuerySupplyRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Supply", data);
    return promise.then(data => QuerySupplyResponse.decode(new BinaryReader(data)));
  };
  /* NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
   ERC721Enumerable */
  nFTs = async (request: QueryNFTsRequest): Promise<QueryNFTsResponse> => {
    const data = QueryNFTsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "NFTs", data);
    return promise.then(data => QueryNFTsResponse.decode(new BinaryReader(data)));
  };
  /* NFT queries an NFT based on its class and id. */
  nFT = async (request: QueryNFTRequest): Promise<QueryNFTResponse> => {
    const data = QueryNFTRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "NFT", data);
    return promise.then(data => QueryNFTResponse.decode(new BinaryReader(data)));
  };
  /* Class queries an NFT class based on its id */
  class = async (request: QueryClassRequest): Promise<QueryClassResponse> => {
    const data = QueryClassRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Class", data);
    return promise.then(data => QueryClassResponse.decode(new BinaryReader(data)));
  };
  /* Classes queries all NFT classes */
  classes = async (request: QueryClassesRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<QueryClassesResponse> => {
    const data = QueryClassesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Classes", data);
    return promise.then(data => QueryClassesResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
      return queryService.balance(request);
    },
    owner(request: QueryOwnerRequest): Promise<QueryOwnerResponse> {
      return queryService.owner(request);
    },
    supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse> {
      return queryService.supply(request);
    },
    nFTs(request: QueryNFTsRequest): Promise<QueryNFTsResponse> {
      return queryService.nFTs(request);
    },
    nFT(request: QueryNFTRequest): Promise<QueryNFTResponse> {
      return queryService.nFT(request);
    },
    class(request: QueryClassRequest): Promise<QueryClassResponse> {
      return queryService.class(request);
    },
    classes(request?: QueryClassesRequest): Promise<QueryClassesResponse> {
      return queryService.classes(request);
    }
  };
};