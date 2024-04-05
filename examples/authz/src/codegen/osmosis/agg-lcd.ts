//@ts-nocheck
import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { LCDClient } from "@cosmology/lcd";
import { setPaginationParams } from "../helpers";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { SwapAmountInRoute, SwapAmountOutRoute, SwapAmountInRouteSDKType, SwapAmountOutRouteSDKType } from "./gamm/v1beta1/tx";
import { Params, ParamsSDKType, Metadata, MetadataSDKType } from "../cosmos/bank/v1beta1/bank";
import { QueryBalanceRequest, QueryBalanceRequestSDKType, QueryBalanceResponse, QueryBalanceResponseSDKType, QueryAllBalancesRequest, QueryAllBalancesRequestSDKType, QueryAllBalancesResponse, QueryAllBalancesResponseSDKType, QuerySpendableBalancesRequest, QuerySpendableBalancesRequestSDKType, QuerySpendableBalancesResponse, QuerySpendableBalancesResponseSDKType, QueryTotalSupplyRequest, QueryTotalSupplyRequestSDKType, QueryTotalSupplyResponse, QueryTotalSupplyResponseSDKType, QuerySupplyOfRequest, QuerySupplyOfRequestSDKType, QuerySupplyOfResponse, QuerySupplyOfResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDenomMetadataRequest, QueryDenomMetadataRequestSDKType, QueryDenomMetadataResponse, QueryDenomMetadataResponseSDKType, QueryDenomsMetadataRequest, QueryDenomsMetadataRequestSDKType, QueryDenomsMetadataResponse, QueryDenomsMetadataResponseSDKType, QueryDenomOwnersRequest, QueryDenomOwnersRequestSDKType, QueryDenomOwnersResponse, QueryDenomOwnersResponseSDKType } from "../cosmos/bank/v1beta1/query";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../google/protobuf/any";
import { Pool as Pool1 } from "./gamm/pool-models/balancer/balancerPool";
import { PoolSDKType as Pool1SDKType } from "./gamm/pool-models/balancer/balancerPool";
import { Pool as Pool2 } from "./gamm/pool-models/stableswap/stableswap_pool";
import { PoolSDKType as Pool2SDKType } from "./gamm/pool-models/stableswap/stableswap_pool";
import { QueryPoolsRequest, QueryPoolsRequestSDKType, QueryPoolsResponse, QueryPoolsResponseSDKType, QueryNumPoolsRequest, QueryNumPoolsRequestSDKType, QueryNumPoolsResponse, QueryNumPoolsResponseSDKType, QueryTotalLiquidityRequest, QueryTotalLiquidityRequestSDKType, QueryTotalLiquidityResponse, QueryTotalLiquidityResponseSDKType, QueryPoolsWithFilterRequest, QueryPoolsWithFilterRequestSDKType, QueryPoolsWithFilterResponse, QueryPoolsWithFilterResponseSDKType, QueryPoolRequest, QueryPoolRequestSDKType, QueryPoolResponse, QueryPoolResponseSDKType, QueryPoolTypeRequest, QueryPoolTypeRequestSDKType, QueryPoolTypeResponse, QueryPoolTypeResponseSDKType, QueryCalcJoinPoolNoSwapSharesRequest, QueryCalcJoinPoolNoSwapSharesRequestSDKType, QueryCalcJoinPoolNoSwapSharesResponse, QueryCalcJoinPoolNoSwapSharesResponseSDKType, QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesRequestSDKType, QueryCalcJoinPoolSharesResponse, QueryCalcJoinPoolSharesResponseSDKType, QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesRequestSDKType, QueryCalcExitPoolCoinsFromSharesResponse, QueryCalcExitPoolCoinsFromSharesResponseSDKType, QueryPoolParamsRequest, QueryPoolParamsRequestSDKType, QueryPoolParamsResponse, QueryPoolParamsResponseSDKType, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityRequestSDKType, QueryTotalPoolLiquidityResponse, QueryTotalPoolLiquidityResponseSDKType, QueryTotalSharesRequest, QueryTotalSharesRequestSDKType, QueryTotalSharesResponse, QueryTotalSharesResponseSDKType, QuerySpotPriceRequest, QuerySpotPriceRequestSDKType, QuerySpotPriceResponse, QuerySpotPriceResponseSDKType, QuerySwapExactAmountInRequest, QuerySwapExactAmountInRequestSDKType, QuerySwapExactAmountInResponse, QuerySwapExactAmountInResponseSDKType, QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutRequestSDKType, QuerySwapExactAmountOutResponse, QuerySwapExactAmountOutResponseSDKType } from "./gamm/v1beta1/query";
export class QueryClient {
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
  /* Pools */
  pools = async (params: QueryPoolsRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<QueryPoolsResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `osmosis/gamm/v1beta1/pools`;
    return await this.req.get<QueryPoolsResponseSDKType>(endpoint, options);
  };
  /* NumPools */
  numPools = async (_params: QueryNumPoolsRequest = {}): Promise<QueryNumPoolsResponseSDKType> => {
    const endpoint = `osmosis/gamm/v1beta1/num_pools`;
    return await this.req.get<QueryNumPoolsResponseSDKType>(endpoint);
  };
  /* TotalLiquidity */
  totalLiquidity = async (_params: QueryTotalLiquidityRequest = {}): Promise<QueryTotalLiquidityResponseSDKType> => {
    const endpoint = `osmosis/gamm/v1beta1/total_liquidity`;
    return await this.req.get<QueryTotalLiquidityResponseSDKType>(endpoint);
  };
  /* PoolsWithFilter allows you to query specific pools with requested
   parameters */
  poolsWithFilter = async (params: QueryPoolsWithFilterRequest): Promise<QueryPoolsWithFilterResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.minLiquidity !== "undefined") {
      options.params.min_liquidity = params.minLiquidity;
    }
    if (typeof params?.poolType !== "undefined") {
      options.params.pool_type = params.poolType;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `osmosis/gamm/v1beta1/filtered_pools`;
    return await this.req.get<QueryPoolsWithFilterResponseSDKType>(endpoint, options);
  };
  /* Per Pool gRPC Endpoints */
  pool = async (params: QueryPoolRequest): Promise<QueryPoolResponseSDKType> => {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}`;
    return await this.req.get<QueryPoolResponseSDKType>(endpoint);
  };
  /* PoolType returns the type of the pool.
   Returns "Balancer" as a string literal when the pool is a balancer pool.
   Errors if the pool is failed to be type caseted. */
  poolType = async (params: QueryPoolTypeRequest): Promise<QueryPoolTypeResponseSDKType> => {
    const endpoint = `osmosis/gamm/v1beta1/pool_type/${params.poolId}`;
    return await this.req.get<QueryPoolTypeResponseSDKType>(endpoint);
  };
  /* CalcJoinPoolShares */
  calcJoinPoolShares = async (params: QueryCalcJoinPoolSharesRequest): Promise<QueryCalcJoinPoolSharesResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.tokensIn !== "undefined") {
      options.params.tokens_in = params.tokensIn;
    }
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/join_swap_exact_in`;
    return await this.req.get<QueryCalcJoinPoolSharesResponseSDKType>(endpoint, options);
  };
  /* CalcExitPoolCoinsFromShares */
  calcExitPoolCoinsFromShares = async (params: QueryCalcExitPoolCoinsFromSharesRequest): Promise<QueryCalcExitPoolCoinsFromSharesResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.shareInAmount !== "undefined") {
      options.params.share_in_amount = params.shareInAmount;
    }
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/exit_swap_share_amount_in`;
    return await this.req.get<QueryCalcExitPoolCoinsFromSharesResponseSDKType>(endpoint, options);
  };
  /* PoolParams */
  poolParams = async (params: QueryPoolParamsRequest): Promise<QueryPoolParamsResponseSDKType> => {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/params`;
    return await this.req.get<QueryPoolParamsResponseSDKType>(endpoint);
  };
  /* TotalPoolLiquidity */
  totalPoolLiquidity = async (params: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponseSDKType> => {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/total_pool_liquidity`;
    return await this.req.get<QueryTotalPoolLiquidityResponseSDKType>(endpoint);
  };
  /* TotalShares */
  totalShares = async (params: QueryTotalSharesRequest): Promise<QueryTotalSharesResponseSDKType> => {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/total_shares`;
    return await this.req.get<QueryTotalSharesResponseSDKType>(endpoint);
  };
  /* SpotPrice defines a gRPC query handler that returns the spot price given
   a base denomination and a quote denomination. */
  spotPrice = async (params: QuerySpotPriceRequest): Promise<QuerySpotPriceResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.baseAssetDenom !== "undefined") {
      options.params.base_asset_denom = params.baseAssetDenom;
    }
    if (typeof params?.quoteAssetDenom !== "undefined") {
      options.params.quote_asset_denom = params.quoteAssetDenom;
    }
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/prices`;
    return await this.req.get<QuerySpotPriceResponseSDKType>(endpoint, options);
  };
  /* Estimate the swap. */
  estimateSwapExactAmountIn = async (params: QuerySwapExactAmountInRequest): Promise<QuerySwapExactAmountInResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.sender !== "undefined") {
      options.params.sender = params.sender;
    }
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    if (typeof params?.routes !== "undefined") {
      options.params.routes = params.routes;
    }
    const endpoint = `osmosis/gamm/v1beta1/${params.poolId}/estimate/swap_exact_amount_in`;
    return await this.req.get<QuerySwapExactAmountInResponseSDKType>(endpoint, options);
  };
  /* EstimateSwapExactAmountOut */
  estimateSwapExactAmountOut = async (params: QuerySwapExactAmountOutRequest): Promise<QuerySwapExactAmountOutResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.sender !== "undefined") {
      options.params.sender = params.sender;
    }
    if (typeof params?.routes !== "undefined") {
      options.params.routes = params.routes;
    }
    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    const endpoint = `osmosis/gamm/v1beta1/${params.poolId}/estimate/swap_exact_amount_out`;
    return await this.req.get<QuerySwapExactAmountOutResponseSDKType>(endpoint, options);
  };
}