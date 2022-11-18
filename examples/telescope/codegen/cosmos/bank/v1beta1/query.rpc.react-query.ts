import { Rpc } from '../../../helpers'
import * as _m0 from 'protobufjs/minimal'
import { QueryClient, createProtobufRpcClient } from '@cosmjs/stargate'
import {
  QueryBalanceRequest,
  QueryBalanceResponse,
  QueryAllBalancesRequest,
  QueryAllBalancesResponse,
  QuerySpendableBalancesRequest,
  QuerySpendableBalancesResponse,
  QueryTotalSupplyRequest,
  QueryTotalSupplyResponse,
  QuerySupplyOfRequest,
  QuerySupplyOfResponse,
  QueryParamsRequest,
  QueryParamsResponse,
  QueryDenomMetadataRequest,
  QueryDenomMetadataResponse,
  QueryDenomsMetadataRequest,
  QueryDenomsMetadataResponse,
  QueryDenomOwnersRequest,
  QueryDenomOwnersResponse,
} from './query'
import { QueryClientImpl } from './query.rpc.Query'

import { Tendermint34Client, HttpEndpoint } from "@cosmjs/tendermint-rpc";

import {
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query'

interface ReactQueryParams<TResponse, TData = TResponse> {
  options?: UseQueryOptions<TResponse, Error, TData>;
}

export interface UseBalanceQuery<TData> extends ReactQueryParams<QueryBalanceResponse, TData> {
  request: QueryBalanceRequest;
}

export const createRpcQueryHooks = (rpcEndpoint: string | HttpEndpoint) => {
  const useBalance = <TData = QueryBalanceResponse>({
        request,
        options,
      }: UseBalanceQuery<TData>) =>
    useQuery<QueryBalanceResponse, Error, TData>(['queryBalance', request], async () => {
      const tmClient = await Tendermint34Client.connect(rpcEndpoint)
      //@ts-ignore
      const client = new QueryClient(tmClient)

      const rpc = createProtobufRpcClient(client)
      const queryService = new QueryClientImpl(rpc)

      return queryService.balance(request)
    }, options)


  return {
    useBalance
  }
}

export default createRpcQueryHooks
