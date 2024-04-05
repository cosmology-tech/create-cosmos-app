//@ts-nocheck
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Params, ParamsSDKType, BaseAccount, BaseAccountSDKType, ModuleAccount, ModuleAccountSDKType } from "./auth";
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAccountsRequest, QueryAccountsRequestSDKType, QueryAccountsResponse, QueryAccountsResponseSDKType, QueryAccountRequest, QueryAccountRequestSDKType, QueryAccountResponse, QueryAccountResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryModuleAccountsRequest, QueryModuleAccountsRequestSDKType, QueryModuleAccountsResponse, QueryModuleAccountsResponseSDKType, Bech32PrefixRequest, Bech32PrefixRequestSDKType, Bech32PrefixResponse, Bech32PrefixResponseSDKType, AddressBytesToStringRequest, AddressBytesToStringRequestSDKType, AddressBytesToStringResponse, AddressBytesToStringResponseSDKType, AddressStringToBytesRequest, AddressStringToBytesRequestSDKType, AddressStringToBytesResponse, AddressStringToBytesResponseSDKType } from "./query";
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
    pagination: PageRequest.fromPartial({})
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