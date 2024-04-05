//@ts-nocheck
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Params, ParamsSDKType, Metadata, MetadataSDKType } from "./bank";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryBalanceRequest, QueryBalanceRequestSDKType, QueryBalanceResponse, QueryBalanceResponseSDKType, QueryAllBalancesRequest, QueryAllBalancesRequestSDKType, QueryAllBalancesResponse, QueryAllBalancesResponseSDKType, QuerySpendableBalancesRequest, QuerySpendableBalancesRequestSDKType, QuerySpendableBalancesResponse, QuerySpendableBalancesResponseSDKType, QueryTotalSupplyRequest, QueryTotalSupplyRequestSDKType, QueryTotalSupplyResponse, QueryTotalSupplyResponseSDKType, QuerySupplyOfRequest, QuerySupplyOfRequestSDKType, QuerySupplyOfResponse, QuerySupplyOfResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDenomMetadataRequest, QueryDenomMetadataRequestSDKType, QueryDenomMetadataResponse, QueryDenomMetadataResponseSDKType, QueryDenomsMetadataRequest, QueryDenomsMetadataRequestSDKType, QueryDenomsMetadataResponse, QueryDenomsMetadataResponseSDKType, QueryDenomOwnersRequest, QueryDenomOwnersRequestSDKType, QueryDenomOwnersResponse, QueryDenomOwnersResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Balance queries the balance of a single coin for a single account. */
  balance = async (params: QueryBalanceRequest): Promise<QueryBalanceResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `cosmos/bank/v1beta1/balances/${params.address}/by_denom`;
    return await this.req.get<QueryBalanceResponseSDKType>(endpoint, options);
  };
  /* AllBalances queries the balance of all coins for a single account. */
  allBalances = async (params: QueryAllBalancesRequest): Promise<QueryAllBalancesResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/bank/v1beta1/balances/${params.address}`;
    return await this.req.get<QueryAllBalancesResponseSDKType>(endpoint, options);
  };
  /* SpendableBalances queries the spenable balance of all coins for a single
   account. */
  spendableBalances = async (params: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/bank/v1beta1/spendable_balances/${params.address}`;
    return await this.req.get<QuerySpendableBalancesResponseSDKType>(endpoint, options);
  };
  /* TotalSupply queries the total supply of all coins. */
  totalSupply = async (params: QueryTotalSupplyRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<QueryTotalSupplyResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/bank/v1beta1/supply`;
    return await this.req.get<QueryTotalSupplyResponseSDKType>(endpoint, options);
  };
  /* SupplyOf queries the supply of a single coin. */
  supplyOf = async (params: QuerySupplyOfRequest): Promise<QuerySupplyOfResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `cosmos/bank/v1beta1/supply/by_denom`;
    return await this.req.get<QuerySupplyOfResponseSDKType>(endpoint, options);
  };
  /* Params queries the parameters of x/bank module. */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> => {
    const endpoint = `cosmos/bank/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  };
  /* DenomsMetadata queries the client metadata of a given coin denomination. */
  denomMetadata = async (params: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponseSDKType> => {
    const endpoint = `cosmos/bank/v1beta1/denoms_metadata/${params.denom}`;
    return await this.req.get<QueryDenomMetadataResponseSDKType>(endpoint);
  };
  /* DenomsMetadata queries the client metadata for all registered coin
   denominations. */
  denomsMetadata = async (params: QueryDenomsMetadataRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<QueryDenomsMetadataResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/bank/v1beta1/denoms_metadata`;
    return await this.req.get<QueryDenomsMetadataResponseSDKType>(endpoint, options);
  };
  /* DenomOwners queries for all account addresses that own a particular token
   denomination. */
  denomOwners = async (params: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/bank/v1beta1/denom_owners/${params.denom}`;
    return await this.req.get<QueryDenomOwnersResponseSDKType>(endpoint, options);
  };
}