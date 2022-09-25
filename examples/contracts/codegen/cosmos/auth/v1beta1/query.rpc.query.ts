import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAccountsRequest, QueryAccountsResponse, QueryAccountsResponseSDKType, QueryAccountRequest, QueryAccountResponse, QueryAccountResponseSDKType, QueryParamsRequest, QueryParamsResponse, QueryParamsResponseSDKType, QueryModuleAccountsRequest, QueryModuleAccountsResponse, QueryModuleAccountsResponseSDKType, Bech32PrefixRequest, Bech32PrefixResponse, Bech32PrefixResponseSDKType, AddressBytesToStringRequest, AddressBytesToStringResponse, AddressBytesToStringResponseSDKType, AddressStringToBytesRequest, AddressStringToBytesResponse, AddressStringToBytesResponseSDKType } from "./query";
/** Query defines the RPC service */

export interface Query {
  accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponseSDKType>;
  /*Accounts returns all the existing accounts
  
  Since: cosmos-sdk 0.43*/

  account(request: QueryAccountRequest): Promise<QueryAccountResponseSDKType>;
  /*Account returns account details based on address.*/

  params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
  /*Params queries all parameters.*/

  moduleAccounts(request?: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponseSDKType>;
  /*ModuleAccounts returns all the existing module accounts.*/

  bech32Prefix(request?: Bech32PrefixRequest): Promise<Bech32PrefixResponseSDKType>;
  /*Bech32 queries bech32Prefix*/

  addressBytesToString(request: AddressBytesToStringRequest): Promise<AddressBytesToStringResponseSDKType>;
  /*AddressBytesToString converts Account Address bytes to string*/

  addressStringToBytes(request: AddressStringToBytesRequest): Promise<AddressStringToBytesResponseSDKType>;
  /*AddressStringToBytes converts Address string to bytes*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.accounts = this.accounts.bind(this);
    this.account = this.account.bind(this);
    this.params = this.params.bind(this);
    this.moduleAccounts = this.moduleAccounts.bind(this);
    this.bech32Prefix = this.bech32Prefix.bind(this);
    this.addressBytesToString = this.addressBytesToString.bind(this);
    this.addressStringToBytes = this.addressStringToBytes.bind(this);
  }

  accounts(request: QueryAccountsRequest = {
    pagination: undefined
  }): Promise<QueryAccountsResponseSDKType> {
    const data = QueryAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Accounts", data);
    return promise.then(data => QueryAccountsResponse.decode(new _m0.Reader(data)));
  }

  account(request: QueryAccountRequest): Promise<QueryAccountResponseSDKType> {
    const data = QueryAccountRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Account", data);
    return promise.then(data => QueryAccountResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  moduleAccounts(request: QueryModuleAccountsRequest = {}): Promise<QueryModuleAccountsResponseSDKType> {
    const data = QueryModuleAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "ModuleAccounts", data);
    return promise.then(data => QueryModuleAccountsResponse.decode(new _m0.Reader(data)));
  }

  bech32Prefix(request: Bech32PrefixRequest = {}): Promise<Bech32PrefixResponseSDKType> {
    const data = Bech32PrefixRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Bech32Prefix", data);
    return promise.then(data => Bech32PrefixResponse.decode(new _m0.Reader(data)));
  }

  addressBytesToString(request: AddressBytesToStringRequest): Promise<AddressBytesToStringResponseSDKType> {
    const data = AddressBytesToStringRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressBytesToString", data);
    return promise.then(data => AddressBytesToStringResponse.decode(new _m0.Reader(data)));
  }

  addressStringToBytes(request: AddressStringToBytesRequest): Promise<AddressStringToBytesResponseSDKType> {
    const data = AddressStringToBytesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressStringToBytes", data);
    return promise.then(data => AddressStringToBytesResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponseSDKType> {
      return queryService.accounts(request);
    },

    account(request: QueryAccountRequest): Promise<QueryAccountResponseSDKType> {
      return queryService.account(request);
    },

    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType> {
      return queryService.params(request);
    },

    moduleAccounts(request?: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponseSDKType> {
      return queryService.moduleAccounts(request);
    },

    bech32Prefix(request?: Bech32PrefixRequest): Promise<Bech32PrefixResponseSDKType> {
      return queryService.bech32Prefix(request);
    },

    addressBytesToString(request: AddressBytesToStringRequest): Promise<AddressBytesToStringResponseSDKType> {
      return queryService.addressBytesToString(request);
    },

    addressStringToBytes(request: AddressStringToBytesRequest): Promise<AddressStringToBytesResponseSDKType> {
      return queryService.addressStringToBytes(request);
    }

  };
};