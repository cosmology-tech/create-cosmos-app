import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryBalanceRequest, QueryBalanceResponse, QueryBalanceResponseSDKType, QueryAllBalancesRequest, QueryAllBalancesResponse, QueryAllBalancesResponseSDKType, QuerySpendableBalancesRequest, QuerySpendableBalancesResponse, QuerySpendableBalancesResponseSDKType, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QueryTotalSupplyResponseSDKType, QuerySupplyOfRequest, QuerySupplyOfResponse, QuerySupplyOfResponseSDKType, QueryParamsRequest, QueryParamsResponse, QueryParamsResponseSDKType, QueryDenomMetadataRequest, QueryDenomMetadataResponse, QueryDenomMetadataResponseSDKType, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse, QueryDenomsMetadataResponseSDKType, QueryDenomOwnersRequest, QueryDenomOwnersResponse, QueryDenomOwnersResponseSDKType } from "./query";
/** Query defines the RPC service */

export interface Query {
  balance(request: QueryBalanceRequest): Promise<QueryBalanceResponseSDKType>;
  /*Balance queries the balance of a single coin for a single account.*/

  allBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponseSDKType>;
  /*AllBalances queries the balance of all coins for a single account.*/

  spendableBalances(request: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponseSDKType>;
  /*SpendableBalances queries the spenable balance of all coins for a single
  account.*/

  totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponseSDKType>;
  /*TotalSupply queries the total supply of all coins.*/

  supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponseSDKType>;
  /*SupplyOf queries the supply of a single coin.*/

  params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
  /*Params queries the parameters of x/bank module.*/

  denomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponseSDKType>;
  /*DenomsMetadata queries the client metadata of a given coin denomination.*/

  denomsMetadata(request?: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponseSDKType>;
  /*DenomsMetadata queries the client metadata for all registered coin
  denominations.*/

  denomOwners(request: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponseSDKType>;
  /*DenomOwners queries for all account addresses that own a particular token
  denomination.*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.balance = this.balance.bind(this);
    this.allBalances = this.allBalances.bind(this);
    this.spendableBalances = this.spendableBalances.bind(this);
    this.totalSupply = this.totalSupply.bind(this);
    this.supplyOf = this.supplyOf.bind(this);
    this.params = this.params.bind(this);
    this.denomMetadata = this.denomMetadata.bind(this);
    this.denomsMetadata = this.denomsMetadata.bind(this);
    this.denomOwners = this.denomOwners.bind(this);
  }

  balance(request: QueryBalanceRequest): Promise<QueryBalanceResponseSDKType> {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Balance", data);
    return promise.then(data => QueryBalanceResponse.decode(new _m0.Reader(data)));
  }

  allBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponseSDKType> {
    const data = QueryAllBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "AllBalances", data);
    return promise.then(data => QueryAllBalancesResponse.decode(new _m0.Reader(data)));
  }

  spendableBalances(request: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponseSDKType> {
    const data = QuerySpendableBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SpendableBalances", data);
    return promise.then(data => QuerySpendableBalancesResponse.decode(new _m0.Reader(data)));
  }

  totalSupply(request: QueryTotalSupplyRequest = {
    pagination: undefined
  }): Promise<QueryTotalSupplyResponseSDKType> {
    const data = QueryTotalSupplyRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "TotalSupply", data);
    return promise.then(data => QueryTotalSupplyResponse.decode(new _m0.Reader(data)));
  }

  supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponseSDKType> {
    const data = QuerySupplyOfRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SupplyOf", data);
    return promise.then(data => QuerySupplyOfResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  denomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponseSDKType> {
    const data = QueryDenomMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomMetadata", data);
    return promise.then(data => QueryDenomMetadataResponse.decode(new _m0.Reader(data)));
  }

  denomsMetadata(request: QueryDenomsMetadataRequest = {
    pagination: undefined
  }): Promise<QueryDenomsMetadataResponseSDKType> {
    const data = QueryDenomsMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomsMetadata", data);
    return promise.then(data => QueryDenomsMetadataResponse.decode(new _m0.Reader(data)));
  }

  denomOwners(request: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponseSDKType> {
    const data = QueryDenomOwnersRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomOwners", data);
    return promise.then(data => QueryDenomOwnersResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponseSDKType> {
      return queryService.balance(request);
    },

    allBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponseSDKType> {
      return queryService.allBalances(request);
    },

    spendableBalances(request: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponseSDKType> {
      return queryService.spendableBalances(request);
    },

    totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponseSDKType> {
      return queryService.totalSupply(request);
    },

    supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponseSDKType> {
      return queryService.supplyOf(request);
    },

    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType> {
      return queryService.params(request);
    },

    denomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponseSDKType> {
      return queryService.denomMetadata(request);
    },

    denomsMetadata(request?: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponseSDKType> {
      return queryService.denomsMetadata(request);
    },

    denomOwners(request: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponseSDKType> {
      return queryService.denomOwners(request);
    }

  };
};