import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryAccountsRequest, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryParamsRequest, QueryParamsResponse, QueryModuleAccountsRequest, QueryModuleAccountsResponse, Bech32PrefixRequest, Bech32PrefixResponse, AddressBytesToStringRequest, AddressBytesToStringResponse, AddressStringToBytesRequest, AddressStringToBytesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * Accounts returns all the existing accounts
   * 
   * Since: cosmos-sdk 0.43
   */
  accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponse>;
  /** Account returns account details based on address. */
  account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
  /** Params queries all parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** ModuleAccounts returns all the existing module accounts. */
  moduleAccounts(request?: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponse>;
  /** Bech32 queries bech32Prefix */
  bech32Prefix(request?: Bech32PrefixRequest): Promise<Bech32PrefixResponse>;
  /** AddressBytesToString converts Account Address bytes to string */
  addressBytesToString(request: AddressBytesToStringRequest): Promise<AddressBytesToStringResponse>;
  /** AddressStringToBytes converts Address string to bytes */
  addressStringToBytes(request: AddressStringToBytesRequest): Promise<AddressStringToBytesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Accounts returns all the existing accounts
  
   Since: cosmos-sdk 0.43 */
  accounts = async (request: QueryAccountsRequest = {
    pagination: undefined
  }): Promise<QueryAccountsResponse> => {
    const data = QueryAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Accounts", data);
    return promise.then(data => QueryAccountsResponse.decode(new BinaryReader(data)));
  };
  /* Account returns account details based on address. */
  account = async (request: QueryAccountRequest): Promise<QueryAccountResponse> => {
    const data = QueryAccountRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Account", data);
    return promise.then(data => QueryAccountResponse.decode(new BinaryReader(data)));
  };
  /* Params queries all parameters. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* ModuleAccounts returns all the existing module accounts. */
  moduleAccounts = async (request: QueryModuleAccountsRequest = {}): Promise<QueryModuleAccountsResponse> => {
    const data = QueryModuleAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "ModuleAccounts", data);
    return promise.then(data => QueryModuleAccountsResponse.decode(new BinaryReader(data)));
  };
  /* Bech32 queries bech32Prefix */
  bech32Prefix = async (request: Bech32PrefixRequest = {}): Promise<Bech32PrefixResponse> => {
    const data = Bech32PrefixRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Bech32Prefix", data);
    return promise.then(data => Bech32PrefixResponse.decode(new BinaryReader(data)));
  };
  /* AddressBytesToString converts Account Address bytes to string */
  addressBytesToString = async (request: AddressBytesToStringRequest): Promise<AddressBytesToStringResponse> => {
    const data = AddressBytesToStringRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressBytesToString", data);
    return promise.then(data => AddressBytesToStringResponse.decode(new BinaryReader(data)));
  };
  /* AddressStringToBytes converts Address string to bytes */
  addressStringToBytes = async (request: AddressStringToBytesRequest): Promise<AddressStringToBytesResponse> => {
    const data = AddressStringToBytesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressStringToBytes", data);
    return promise.then(data => AddressStringToBytesResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponse> {
      return queryService.accounts(request);
    },
    account(request: QueryAccountRequest): Promise<QueryAccountResponse> {
      return queryService.account(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    moduleAccounts(request?: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponse> {
      return queryService.moduleAccounts(request);
    },
    bech32Prefix(request?: Bech32PrefixRequest): Promise<Bech32PrefixResponse> {
      return queryService.bech32Prefix(request);
    },
    addressBytesToString(request: AddressBytesToStringRequest): Promise<AddressBytesToStringResponse> {
      return queryService.addressBytesToString(request);
    },
    addressStringToBytes(request: AddressStringToBytesRequest): Promise<AddressStringToBytesResponse> {
      return queryService.addressStringToBytes(request);
    }
  };
};
export interface UseAccountsQuery<TData> extends ReactQueryParams<QueryAccountsResponse, TData> {
  request?: QueryAccountsRequest;
}
export interface UseAccountQuery<TData> extends ReactQueryParams<QueryAccountResponse, TData> {
  request: QueryAccountRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
}
export interface UseModuleAccountsQuery<TData> extends ReactQueryParams<QueryModuleAccountsResponse, TData> {
  request?: QueryModuleAccountsRequest;
}
export interface UseBech32PrefixQuery<TData> extends ReactQueryParams<Bech32PrefixResponse, TData> {
  request?: Bech32PrefixRequest;
}
export interface UseAddressBytesToStringQuery<TData> extends ReactQueryParams<AddressBytesToStringResponse, TData> {
  request: AddressBytesToStringRequest;
}
export interface UseAddressStringToBytesQuery<TData> extends ReactQueryParams<AddressStringToBytesResponse, TData> {
  request: AddressStringToBytesRequest;
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
  const useAccounts = <TData = QueryAccountsResponse,>({
    request,
    options
  }: UseAccountsQuery<TData>) => {
    return useQuery<QueryAccountsResponse, Error, TData>(["accountsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.accounts(request);
    }, options);
  };
  const useAccount = <TData = QueryAccountResponse,>({
    request,
    options
  }: UseAccountQuery<TData>) => {
    return useQuery<QueryAccountResponse, Error, TData>(["accountQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.account(request);
    }, options);
  };
  const useParams = <TData = QueryParamsResponse,>({
    request,
    options
  }: UseParamsQuery<TData>) => {
    return useQuery<QueryParamsResponse, Error, TData>(["paramsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };
  const useModuleAccounts = <TData = QueryModuleAccountsResponse,>({
    request,
    options
  }: UseModuleAccountsQuery<TData>) => {
    return useQuery<QueryModuleAccountsResponse, Error, TData>(["moduleAccountsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.moduleAccounts(request);
    }, options);
  };
  const useBech32Prefix = <TData = Bech32PrefixResponse,>({
    request,
    options
  }: UseBech32PrefixQuery<TData>) => {
    return useQuery<Bech32PrefixResponse, Error, TData>(["bech32PrefixQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.bech32Prefix(request);
    }, options);
  };
  const useAddressBytesToString = <TData = AddressBytesToStringResponse,>({
    request,
    options
  }: UseAddressBytesToStringQuery<TData>) => {
    return useQuery<AddressBytesToStringResponse, Error, TData>(["addressBytesToStringQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.addressBytesToString(request);
    }, options);
  };
  const useAddressStringToBytes = <TData = AddressStringToBytesResponse,>({
    request,
    options
  }: UseAddressStringToBytesQuery<TData>) => {
    return useQuery<AddressStringToBytesResponse, Error, TData>(["addressStringToBytesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.addressStringToBytes(request);
    }, options);
  };
  return {
    /**
     * Accounts returns all the existing accounts
     * 
     * Since: cosmos-sdk 0.43
     */
    useAccounts,
    /** Account returns account details based on address. */useAccount,
    /** Params queries all parameters. */useParams,
    /** ModuleAccounts returns all the existing module accounts. */useModuleAccounts,
    /** Bech32 queries bech32Prefix */useBech32Prefix,
    /** AddressBytesToString converts Account Address bytes to string */useAddressBytesToString,
    /** AddressStringToBytes converts Address string to bytes */useAddressStringToBytes
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryAccountsStore {
    store = new QueryStore<QueryAccountsRequest, QueryAccountsResponse>(queryService?.accounts);
    accounts(request: QueryAccountsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryAccountStore {
    store = new QueryStore<QueryAccountRequest, QueryAccountResponse>(queryService?.account);
    account(request: QueryAccountRequest) {
      return this.store.getData(request);
    }
  }
  class QueryParamsStore {
    store = new QueryStore<QueryParamsRequest, QueryParamsResponse>(queryService?.params);
    params(request: QueryParamsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryModuleAccountsStore {
    store = new QueryStore<QueryModuleAccountsRequest, QueryModuleAccountsResponse>(queryService?.moduleAccounts);
    moduleAccounts(request: QueryModuleAccountsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryBech32PrefixStore {
    store = new QueryStore<Bech32PrefixRequest, Bech32PrefixResponse>(queryService?.bech32Prefix);
    bech32Prefix(request: Bech32PrefixRequest) {
      return this.store.getData(request);
    }
  }
  class QueryAddressBytesToStringStore {
    store = new QueryStore<AddressBytesToStringRequest, AddressBytesToStringResponse>(queryService?.addressBytesToString);
    addressBytesToString(request: AddressBytesToStringRequest) {
      return this.store.getData(request);
    }
  }
  class QueryAddressStringToBytesStore {
    store = new QueryStore<AddressStringToBytesRequest, AddressStringToBytesResponse>(queryService?.addressStringToBytes);
    addressStringToBytes(request: AddressStringToBytesRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /**
     * Accounts returns all the existing accounts
     * 
     * Since: cosmos-sdk 0.43
     */
    QueryAccountsStore,
    /** Account returns account details based on address. */QueryAccountStore,
    /** Params queries all parameters. */QueryParamsStore,
    /** ModuleAccounts returns all the existing module accounts. */QueryModuleAccountsStore,
    /** Bech32 queries bech32Prefix */QueryBech32PrefixStore,
    /** AddressBytesToString converts Account Address bytes to string */QueryAddressBytesToStringStore,
    /** AddressStringToBytes converts Address string to bytes */QueryAddressStringToBytesStore
  };
};