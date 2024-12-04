import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { PositionWithUnderlyingAssetBreakdown, PositionWithUnderlyingAssetBreakdownSDKType } from "../position";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Params, ParamsSDKType } from "../params";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryPoolsRequest, QueryPoolsRequestSDKType, QueryPoolsResponse, QueryPoolsResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryUserPositionsRequest, QueryUserPositionsRequestSDKType, QueryUserPositionsResponse, QueryUserPositionsResponseSDKType, QueryTotalLiquidityForRangeRequest, QueryTotalLiquidityForRangeRequestSDKType, QueryTotalLiquidityForRangeResponse, QueryTotalLiquidityForRangeResponseSDKType, QueryLiquidityNetInDirectionRequest, QueryLiquidityNetInDirectionRequestSDKType, QueryLiquidityNetInDirectionResponse, QueryLiquidityNetInDirectionResponseSDKType, QueryClaimableFeesRequest, QueryClaimableFeesRequestSDKType, QueryClaimableFeesResponse, QueryClaimableFeesResponseSDKType, QueryPositionByIdRequest, QueryPositionByIdRequestSDKType, QueryPositionByIdResponse, QueryPositionByIdResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.pools = this.pools.bind(this);
    this.params = this.params.bind(this);
    this.userPositions = this.userPositions.bind(this);
    this.totalLiquidityForRange = this.totalLiquidityForRange.bind(this);
    this.liquidityNetInDirection = this.liquidityNetInDirection.bind(this);
    this.claimableFees = this.claimableFees.bind(this);
    this.positionById = this.positionById.bind(this);
  }
  /* Pools returns all concentrated liquidity pools */
  async pools(params: QueryPoolsRequest = {
    pagination: undefined
  }): Promise<QueryPoolsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `osmosis/concentratedliquidity/v1beta1/pools`;
    return QueryPoolsResponse.fromSDKJSON(await this.req.get<QueryPoolsResponseSDKType>(endpoint, options));
  }
  /* Params returns concentrated liquidity module params. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `osmosis/concentratedliquidity/v1beta1/params`;
    return QueryParamsResponse.fromSDKJSON(await this.req.get<QueryParamsResponseSDKType>(endpoint));
  }
  /* UserPositions returns all concentrated postitions of some address. */
  async userPositions(params: QueryUserPositionsRequest): Promise<QueryUserPositionsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.poolId !== "undefined") {
      options.params.pool_id = params.poolId;
    }
    const endpoint = `osmosis/concentratedliquidity/v1beta1/positions/${params.address}`;
    return QueryUserPositionsResponse.fromSDKJSON(await this.req.get<QueryUserPositionsResponseSDKType>(endpoint, options));
  }
  /* TotalLiquidityForRange the amount of liquidity existing within given range. */
  async totalLiquidityForRange(params: QueryTotalLiquidityForRangeRequest): Promise<QueryTotalLiquidityForRangeResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.poolId !== "undefined") {
      options.params.pool_id = params.poolId;
    }
    const endpoint = `osmosis/concentratedliquidity/v1beta1/total_liquidity_for_range`;
    return QueryTotalLiquidityForRangeResponse.fromSDKJSON(await this.req.get<QueryTotalLiquidityForRangeResponseSDKType>(endpoint, options));
  }
  /* LiquidityNetInDirection returns liquidity net in the direction given.
   Uses the bound if specified, if not uses either min tick / max tick
   depending on the direction. */
  async liquidityNetInDirection(params: QueryLiquidityNetInDirectionRequest): Promise<QueryLiquidityNetInDirectionResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.poolId !== "undefined") {
      options.params.pool_id = params.poolId;
    }
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    if (typeof params?.startTick !== "undefined") {
      options.params.start_tick = params.startTick;
    }
    if (typeof params?.boundTick !== "undefined") {
      options.params.bound_tick = params.boundTick;
    }
    const endpoint = `osmosis/concentratedliquidity/v1beta1/query_liquidity_net_in_direction`;
    return QueryLiquidityNetInDirectionResponse.fromSDKJSON(await this.req.get<QueryLiquidityNetInDirectionResponseSDKType>(endpoint, options));
  }
  /* ClaimableFees returns the amount of fees that can be claimed by a position
   with the given id. */
  async claimableFees(params: QueryClaimableFeesRequest): Promise<QueryClaimableFeesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.positionId !== "undefined") {
      options.params.position_id = params.positionId;
    }
    const endpoint = `osmosis/concentratedliquidity/v1beta1/claimable_fees`;
    return QueryClaimableFeesResponse.fromSDKJSON(await this.req.get<QueryClaimableFeesResponseSDKType>(endpoint, options));
  }
  /* PositionById returns a position with the given id. */
  async positionById(params: QueryPositionByIdRequest): Promise<QueryPositionByIdResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.positionId !== "undefined") {
      options.params.position_id = params.positionId;
    }
    const endpoint = `osmosis/concentratedliquidity/v1beta1/position_by_id`;
    return QueryPositionByIdResponse.fromSDKJSON(await this.req.get<QueryPositionByIdResponseSDKType>(endpoint, options));
  }
}