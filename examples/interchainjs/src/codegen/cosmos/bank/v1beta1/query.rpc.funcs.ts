import { Rpc } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams, RPC_CLIENT_QUERY_KEY } from "../../../react-query";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryBalanceRequest, QueryBalanceResponse, QueryAllBalancesRequest, QueryAllBalancesResponse, QuerySpendableBalancesRequest, QuerySpendableBalancesResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomMetadataRequest, QueryDenomMetadataResponse, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse, QueryDenomOwnersRequest, QueryDenomOwnersResponse } from "./query";

// common utils

export interface QueryBuilderOptions<TReq, TRes> {
  reqEncoderFn: (request: TReq, writer?: BinaryWriter) => BinaryWriter
  resDecoderFn: (input: BinaryReader | Uint8Array, length?: number) => TRes
  service: string,
  method: string,
  getRpcInstance: () => Rpc | undefined
}

export interface UseQueryBuilderOptions<TReq, TRes> {
  builderQueryFn: (getRpcInstance: () => Rpc | undefined) => (request: TReq) => Promise<TRes>,
  queryKeyPrefix: string
}

export function buildQuery<TReq, TRes>(opts: QueryBuilderOptions<TReq, TRes>) {
    return async (request: TReq) => {
      const rpc = opts.getRpcInstance();

      if (!rpc) throw new Error("Query Rpc is not initialized");

      const data = opts.reqEncoderFn(request).finish();
      const response = await rpc.request(opts.service, opts.method, data);
      return opts.resDecoderFn(new BinaryReader(response));
    };
}

export function buildUseQuery<TReq, TRes>(opts: UseQueryBuilderOptions<TReq, TRes>) {
  return <TData = TRes>({
    request,
    options,
    rpcEndpoint
  }: UseQueryParams<TReq, TRes, TData>) => {
    const queryClient = useQueryClient();
    const queryKey = rpcEndpoint ? [RPC_CLIENT_QUERY_KEY, rpcEndpoint] : [RPC_CLIENT_QUERY_KEY];
    const rpc = queryClient.getQueryData<Rpc>(queryKey);
    const queryFn = opts.builderQueryFn(()=>{
      return rpc;
    });
    return useQuery<TRes, Error, TData>([opts.queryKeyPrefix, request], () => queryFn(request), options);
  };
}

export interface UseQueryParams<TReq, TRes, TData = TRes> extends ReactQueryParams<TRes, TData> {
  request: TReq;
}

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

