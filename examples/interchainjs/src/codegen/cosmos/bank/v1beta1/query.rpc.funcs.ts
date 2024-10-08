import { buildQuery, Rpc } from "../../../helpers";
import { UseQueryParams, buildUseQuery } from "../../../react-query";
import { QueryBalanceRequest, QueryBalanceResponse, QueryAllBalancesRequest, QueryAllBalancesResponse, QuerySpendableBalancesRequest, QuerySpendableBalancesResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomMetadataRequest, QueryDenomMetadataResponse, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse, QueryDenomOwnersRequest, QueryDenomOwnersResponse } from "./query";

// generated helper functions

export type UseBalanceQuery = UseQueryParams<QueryBalanceRequest, QueryBalanceResponse>;
export type UseAllBalancesQuery = UseQueryParams<QueryAllBalancesRequest, QueryAllBalancesResponse>;

export const createGetBalance = (getRpcInstance: () => Rpc | undefined) => buildQuery<QueryBalanceRequest, QueryBalanceResponse>({
  reqEncoderFn: QueryBalanceRequest.encode,
  resDecoderFn: QueryBalanceResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Balance",
  getRpcInstance
});

export const createGetAllBalances = (getRpcInstance: () => Rpc | undefined) => buildQuery<QueryAllBalancesRequest, QueryAllBalancesResponse>({
  reqEncoderFn: QueryAllBalancesRequest.encode,
  resDecoderFn: QueryAllBalancesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AllBalances",
  getRpcInstance
});

export const useBalance = buildUseQuery<QueryBalanceRequest, QueryBalanceResponse>({
  builderQueryFn: createGetBalance,
  queryKeyPrefix: 'balanceQuery'
});

export const useAllBalances = buildUseQuery<QueryAllBalancesRequest, QueryAllBalancesResponse>({
  builderQueryFn: createGetAllBalances,
  queryKeyPrefix: 'allBalancesQuery'
});

