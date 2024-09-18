import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryBalanceRequest, QueryBalanceResponse, QueryOwnerRequest, QueryOwnerResponse, QuerySupplyRequest, QuerySupplyResponse, QueryNFTsRequest, QueryNFTsResponse, QueryNFTRequest, QueryNFTResponse, QueryClassRequest, QueryClassResponse, QueryClassesRequest, QueryClassesResponse } from "./query";
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
    return promise.then(data => QueryBalanceResponse.decode(new BinaryReader(data)));
  }
  owner(request: QueryOwnerRequest): Promise<QueryOwnerResponse> {
    const data = QueryOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Owner", data);
    return promise.then(data => QueryOwnerResponse.decode(new BinaryReader(data)));
  }
  supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse> {
    const data = QuerySupplyRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Supply", data);
    return promise.then(data => QuerySupplyResponse.decode(new BinaryReader(data)));
  }
  nFTs(request: QueryNFTsRequest): Promise<QueryNFTsResponse> {
    const data = QueryNFTsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "NFTs", data);
    return promise.then(data => QueryNFTsResponse.decode(new BinaryReader(data)));
  }
  nFT(request: QueryNFTRequest): Promise<QueryNFTResponse> {
    const data = QueryNFTRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "NFT", data);
    return promise.then(data => QueryNFTResponse.decode(new BinaryReader(data)));
  }
  class(request: QueryClassRequest): Promise<QueryClassResponse> {
    const data = QueryClassRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Class", data);
    return promise.then(data => QueryClassResponse.decode(new BinaryReader(data)));
  }
  classes(request: QueryClassesRequest = {
    pagination: undefined
  }): Promise<QueryClassesResponse> {
    const data = QueryClassesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Classes", data);
    return promise.then(data => QueryClassesResponse.decode(new BinaryReader(data)));
  }
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
export interface UseBalanceQuery<TData> extends ReactQueryParams<QueryBalanceResponse, TData> {
  request: QueryBalanceRequest;
}
export interface UseOwnerQuery<TData> extends ReactQueryParams<QueryOwnerResponse, TData> {
  request: QueryOwnerRequest;
}
export interface UseSupplyQuery<TData> extends ReactQueryParams<QuerySupplyResponse, TData> {
  request: QuerySupplyRequest;
}
export interface UseNFTsQuery<TData> extends ReactQueryParams<QueryNFTsResponse, TData> {
  request: QueryNFTsRequest;
}
export interface UseNFTQuery<TData> extends ReactQueryParams<QueryNFTResponse, TData> {
  request: QueryNFTRequest;
}
export interface UseClassQuery<TData> extends ReactQueryParams<QueryClassResponse, TData> {
  request: QueryClassRequest;
}
export interface UseClassesQuery<TData> extends ReactQueryParams<QueryClassesResponse, TData> {
  request?: QueryClassesRequest;
}
const _queryClients: WeakMap<ProtobufRpcClient, QueryClientImpl> = new WeakMap();
const getQueryService = (rpc: ProtobufRpcClient | undefined): QueryClientImpl | undefined => {
  if (!rpc) return;
  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }
  const queryService = new QueryClientImpl(rpc);
  _queryClients.set(rpc, queryService);
  return queryService;
};
export const createRpcQueryHooks = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  const useBalance = <TData = QueryBalanceResponse,>({
    request,
    options
  }: UseBalanceQuery<TData>) => {
    return useQuery<QueryBalanceResponse, Error, TData>(["balanceQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.balance(request);
    }, options);
  };
  const useOwner = <TData = QueryOwnerResponse,>({
    request,
    options
  }: UseOwnerQuery<TData>) => {
    return useQuery<QueryOwnerResponse, Error, TData>(["ownerQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.owner(request);
    }, options);
  };
  const useSupply = <TData = QuerySupplyResponse,>({
    request,
    options
  }: UseSupplyQuery<TData>) => {
    return useQuery<QuerySupplyResponse, Error, TData>(["supplyQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.supply(request);
    }, options);
  };
  const useNFTs = <TData = QueryNFTsResponse,>({
    request,
    options
  }: UseNFTsQuery<TData>) => {
    return useQuery<QueryNFTsResponse, Error, TData>(["nFTsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.nFTs(request);
    }, options);
  };
  const useNFT = <TData = QueryNFTResponse,>({
    request,
    options
  }: UseNFTQuery<TData>) => {
    return useQuery<QueryNFTResponse, Error, TData>(["nFTQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.nFT(request);
    }, options);
  };
  const useClass = <TData = QueryClassResponse,>({
    request,
    options
  }: UseClassQuery<TData>) => {
    return useQuery<QueryClassResponse, Error, TData>(["classQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.class(request);
    }, options);
  };
  const useClasses = <TData = QueryClassesResponse,>({
    request,
    options
  }: UseClassesQuery<TData>) => {
    return useQuery<QueryClassesResponse, Error, TData>(["classesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.classes(request);
    }, options);
  };
  return {
    /** Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */useBalance,
    /** Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */useOwner,
    /** Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */useSupply,
    /**
     * NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
     * ERC721Enumerable
     */
    useNFTs,
    /** NFT queries an NFT based on its class and id. */useNFT,
    /** Class queries an NFT class based on its id */useClass,
    /** Classes queries all NFT classes */useClasses
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryBalanceStore {
    store = new QueryStore<QueryBalanceRequest, QueryBalanceResponse>(queryService?.balance);
    balance(request: QueryBalanceRequest) {
      return this.store.getData(request);
    }
  }
  class QueryOwnerStore {
    store = new QueryStore<QueryOwnerRequest, QueryOwnerResponse>(queryService?.owner);
    owner(request: QueryOwnerRequest) {
      return this.store.getData(request);
    }
  }
  class QuerySupplyStore {
    store = new QueryStore<QuerySupplyRequest, QuerySupplyResponse>(queryService?.supply);
    supply(request: QuerySupplyRequest) {
      return this.store.getData(request);
    }
  }
  class QueryNFTsStore {
    store = new QueryStore<QueryNFTsRequest, QueryNFTsResponse>(queryService?.nFTs);
    nFTs(request: QueryNFTsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryNFTStore {
    store = new QueryStore<QueryNFTRequest, QueryNFTResponse>(queryService?.nFT);
    nFT(request: QueryNFTRequest) {
      return this.store.getData(request);
    }
  }
  class QueryClassStore {
    store = new QueryStore<QueryClassRequest, QueryClassResponse>(queryService?.class);
    class(request: QueryClassRequest) {
      return this.store.getData(request);
    }
  }
  class QueryClassesStore {
    store = new QueryStore<QueryClassesRequest, QueryClassesResponse>(queryService?.classes);
    classes(request: QueryClassesRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */QueryBalanceStore,
    /** Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */QueryOwnerStore,
    /** Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */QuerySupplyStore,
    /**
     * NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
     * ERC721Enumerable
     */
    QueryNFTsStore,
    /** NFT queries an NFT based on its class and id. */QueryNFTStore,
    /** Class queries an NFT class based on its id */QueryClassStore,
    /** Classes queries all NFT classes */QueryClassesStore
  };
};