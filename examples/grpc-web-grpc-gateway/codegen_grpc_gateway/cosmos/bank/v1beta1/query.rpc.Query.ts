import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Params, ParamsSDKType, Metadata, MetadataSDKType } from "./bank";
import * as fm from "../../../grpc-gateway";
import { QueryBalanceRequest, QueryBalanceRequestSDKType, QueryBalanceResponse, QueryBalanceResponseSDKType, QueryAllBalancesRequest, QueryAllBalancesRequestSDKType, QueryAllBalancesResponse, QueryAllBalancesResponseSDKType, QuerySpendableBalancesRequest, QuerySpendableBalancesRequestSDKType, QuerySpendableBalancesResponse, QuerySpendableBalancesResponseSDKType, QueryTotalSupplyRequest, QueryTotalSupplyRequestSDKType, QueryTotalSupplyResponse, QueryTotalSupplyResponseSDKType, QuerySupplyOfRequest, QuerySupplyOfRequestSDKType, QuerySupplyOfResponse, QuerySupplyOfResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDenomMetadataRequest, QueryDenomMetadataRequestSDKType, QueryDenomMetadataResponse, QueryDenomMetadataResponseSDKType, QueryDenomsMetadataRequest, QueryDenomsMetadataRequestSDKType, QueryDenomsMetadataResponse, QueryDenomsMetadataResponseSDKType, QueryDenomOwnersRequest, QueryDenomOwnersRequestSDKType, QueryDenomOwnersResponse, QueryDenomOwnersResponseSDKType } from "./query";
export class Query {
  /** Balance queries the balance of a single coin for a single account. */
  static balance(request: QueryBalanceRequest, initRequest?: fm.InitReq): Promise<QueryBalanceResponse> {
    return fm.fetchReq(`/cosmos/bank/v1beta1/balances/${request["address"]}/by_denom?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** AllBalances queries the balance of all coins for a single account. */
  static allBalances(request: QueryAllBalancesRequest, initRequest?: fm.InitReq): Promise<QueryAllBalancesResponse> {
    return fm.fetchReq(`/cosmos/bank/v1beta1/balances/${request["address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * SpendableBalances queries the spenable balance of all coins for a single
   * account.
   */
  static spendableBalances(request: QuerySpendableBalancesRequest, initRequest?: fm.InitReq): Promise<QuerySpendableBalancesResponse> {
    return fm.fetchReq(`/cosmos/bank/v1beta1/spendable_balances/${request["address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** TotalSupply queries the total supply of all coins. */
  static totalSupply(request: QueryTotalSupplyRequest, initRequest?: fm.InitReq): Promise<QueryTotalSupplyResponse> {
    return fm.fetchReq(`/cosmos/bank/v1beta1/supply?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** SupplyOf queries the supply of a single coin. */
  static supplyOf(request: QuerySupplyOfRequest, initRequest?: fm.InitReq): Promise<QuerySupplyOfResponse> {
    return fm.fetchReq(`/cosmos/bank/v1beta1/supply/by_denom?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Params queries the parameters of x/bank module. */
  static params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/cosmos/bank/v1beta1/params?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** DenomsMetadata queries the client metadata of a given coin denomination. */
  static denomMetadata(request: QueryDenomMetadataRequest, initRequest?: fm.InitReq): Promise<QueryDenomMetadataResponse> {
    return fm.fetchReq(`/cosmos/bank/v1beta1/denoms_metadata/${request["denom"]}?${fm.renderURLSearchParams({
      ...request
    }, ["denom"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * DenomsMetadata queries the client metadata for all registered coin
   * denominations.
   */
  static denomsMetadata(request: QueryDenomsMetadataRequest, initRequest?: fm.InitReq): Promise<QueryDenomsMetadataResponse> {
    return fm.fetchReq(`/cosmos/bank/v1beta1/denoms_metadata?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * DenomOwners queries for all account addresses that own a particular token
   * denomination.
   */
  static denomOwners(request: QueryDenomOwnersRequest, initRequest?: fm.InitReq): Promise<QueryDenomOwnersResponse> {
    return fm.fetchReq(`/cosmos/bank/v1beta1/denom_owners/${request["denom"]}?${fm.renderURLSearchParams({
      ...request
    }, ["denom"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
}
export class Querier {
  private readonly url: string;
  constructor(url: string) {
    this.url = url;
  }
  /** Balance queries the balance of a single coin for a single account. */
  async balance(req: QueryBalanceRequest, headers?: HeadersInit): Promise<QueryBalanceResponse> {
    return Query.balance(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** AllBalances queries the balance of all coins for a single account. */
  async allBalances(req: QueryAllBalancesRequest, headers?: HeadersInit): Promise<QueryAllBalancesResponse> {
    return Query.allBalances(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * SpendableBalances queries the spenable balance of all coins for a single
   * account.
   */
  async spendableBalances(req: QuerySpendableBalancesRequest, headers?: HeadersInit): Promise<QuerySpendableBalancesResponse> {
    return Query.spendableBalances(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** TotalSupply queries the total supply of all coins. */
  async totalSupply(req: QueryTotalSupplyRequest, headers?: HeadersInit): Promise<QueryTotalSupplyResponse> {
    return Query.totalSupply(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** SupplyOf queries the supply of a single coin. */
  async supplyOf(req: QuerySupplyOfRequest, headers?: HeadersInit): Promise<QuerySupplyOfResponse> {
    return Query.supplyOf(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Params queries the parameters of x/bank module. */
  async params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse> {
    return Query.params(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** DenomsMetadata queries the client metadata of a given coin denomination. */
  async denomMetadata(req: QueryDenomMetadataRequest, headers?: HeadersInit): Promise<QueryDenomMetadataResponse> {
    return Query.denomMetadata(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * DenomsMetadata queries the client metadata for all registered coin
   * denominations.
   */
  async denomsMetadata(req: QueryDenomsMetadataRequest, headers?: HeadersInit): Promise<QueryDenomsMetadataResponse> {
    return Query.denomsMetadata(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * DenomOwners queries for all account addresses that own a particular token
   * denomination.
   */
  async denomOwners(req: QueryDenomOwnersRequest, headers?: HeadersInit): Promise<QueryDenomOwnersResponse> {
    return Query.denomOwners(req, {
      headers,
      pathPrefix: this.url
    });
  }
}