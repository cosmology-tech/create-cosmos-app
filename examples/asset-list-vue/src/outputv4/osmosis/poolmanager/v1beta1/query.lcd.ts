import { SwapAmountInRoute, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteSDKType } from "./swap_route";
import { Params, ParamsSDKType } from "./genesis";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { LCDClient } from "@cosmology/lcd";
import { ParamsRequest, ParamsRequestSDKType, ParamsResponse, ParamsResponseSDKType, EstimateSwapExactAmountInRequest, EstimateSwapExactAmountInRequestSDKType, EstimateSwapExactAmountInResponse, EstimateSwapExactAmountInResponseSDKType, EstimateSinglePoolSwapExactAmountInRequest, EstimateSinglePoolSwapExactAmountInRequestSDKType, EstimateSwapExactAmountOutRequest, EstimateSwapExactAmountOutRequestSDKType, EstimateSwapExactAmountOutResponse, EstimateSwapExactAmountOutResponseSDKType, EstimateSinglePoolSwapExactAmountOutRequest, EstimateSinglePoolSwapExactAmountOutRequestSDKType, NumPoolsRequest, NumPoolsRequestSDKType, NumPoolsResponse, NumPoolsResponseSDKType, PoolRequest, PoolRequestSDKType, PoolResponse, PoolResponseSDKType, AllPoolsRequest, AllPoolsRequestSDKType, AllPoolsResponse, AllPoolsResponseSDKType, SpotPriceRequest, SpotPriceRequestSDKType, SpotPriceResponse, SpotPriceResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.estimateSwapExactAmountIn = this.estimateSwapExactAmountIn.bind(this);
    this.estimateSinglePoolSwapExactAmountIn = this.estimateSinglePoolSwapExactAmountIn.bind(this);
    this.estimateSwapExactAmountOut = this.estimateSwapExactAmountOut.bind(this);
    this.estimateSinglePoolSwapExactAmountOut = this.estimateSinglePoolSwapExactAmountOut.bind(this);
    this.numPools = this.numPools.bind(this);
    this.pool = this.pool.bind(this);
    this.allPools = this.allPools.bind(this);
    this.spotPrice = this.spotPrice.bind(this);
  }
  /* Params */
  async params(_params: ParamsRequest = {}): Promise<ParamsResponseSDKType> {
    const endpoint = `osmosis/poolmanager/v1beta1/Params`;
    return ParamsResponse.fromSDKJSON(await this.req.get<ParamsResponseSDKType>(endpoint));
  }
  /* Estimates swap amount out given in. */
  async estimateSwapExactAmountIn(params: EstimateSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    if (typeof params?.routes !== "undefined") {
      options.params.routes = params.routes;
    }
    const endpoint = `osmosis/poolmanager/v1beta1/${params.poolId}/estimate/swap_exact_amount_in`;
    return EstimateSwapExactAmountInResponse.fromSDKJSON(await this.req.get<EstimateSwapExactAmountInResponseSDKType>(endpoint, options));
  }
  /* EstimateSinglePoolSwapExactAmountIn */
  async estimateSinglePoolSwapExactAmountIn(params: EstimateSinglePoolSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    if (typeof params?.tokenOutDenom !== "undefined") {
      options.params.token_out_denom = params.tokenOutDenom;
    }
    const endpoint = `osmosis/poolmanager/v1beta1/${params.poolId}/estimate/single_pool_swap_exact_amount_in`;
    return EstimateSwapExactAmountInResponse.fromSDKJSON(await this.req.get<EstimateSwapExactAmountInResponseSDKType>(endpoint, options));
  }
  /* Estimates swap amount in given out. */
  async estimateSwapExactAmountOut(params: EstimateSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.routes !== "undefined") {
      options.params.routes = params.routes;
    }
    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    const endpoint = `osmosis/poolmanager/v1beta1/${params.poolId}/estimate/swap_exact_amount_out`;
    return EstimateSwapExactAmountOutResponse.fromSDKJSON(await this.req.get<EstimateSwapExactAmountOutResponseSDKType>(endpoint, options));
  }
  /* EstimateSinglePoolSwapExactAmountOut */
  async estimateSinglePoolSwapExactAmountOut(params: EstimateSinglePoolSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.tokenInDenom !== "undefined") {
      options.params.token_in_denom = params.tokenInDenom;
    }
    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    const endpoint = `osmosis/poolmanager/v1beta1/${params.poolId}/estimate_out/single_pool_swap_exact_amount_out`;
    return EstimateSwapExactAmountOutResponse.fromSDKJSON(await this.req.get<EstimateSwapExactAmountOutResponseSDKType>(endpoint, options));
  }
  /* Returns the total number of pools existing in Osmosis. */
  async numPools(_params: NumPoolsRequest = {}): Promise<NumPoolsResponseSDKType> {
    const endpoint = `osmosis/poolmanager/v1beta1/num_pools`;
    return NumPoolsResponse.fromSDKJSON(await this.req.get<NumPoolsResponseSDKType>(endpoint));
  }
  /* Pool returns the Pool specified by the pool id */
  async pool(params: PoolRequest): Promise<PoolResponseSDKType> {
    const endpoint = `osmosis/poolmanager/v1beta1/pools/${params.poolId}`;
    return PoolResponse.fromSDKJSON(await this.req.get<PoolResponseSDKType>(endpoint));
  }
  /* AllPools returns all pools on the Osmosis chain sorted by IDs. */
  async allPools(params: AllPoolsRequest): Promise<AllPoolsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.poolId !== "undefined") {
      options.params.pool_id = params.poolId;
    }
    const endpoint = `osmosis/poolmanager/v1beta1/all-pools`;
    return AllPoolsResponse.fromSDKJSON(await this.req.get<AllPoolsResponseSDKType>(endpoint, options));
  }
  /* SpotPrice defines a gRPC query handler that returns the spot price given
   a base denomination and a quote denomination. */
  async spotPrice(params: SpotPriceRequest): Promise<SpotPriceResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.baseAssetDenom !== "undefined") {
      options.params.base_asset_denom = params.baseAssetDenom;
    }
    if (typeof params?.quoteAssetDenom !== "undefined") {
      options.params.quote_asset_denom = params.quoteAssetDenom;
    }
    const endpoint = `osmosis/poolmanager/pools/${params.poolId}/prices`;
    return SpotPriceResponse.fromSDKJSON(await this.req.get<SpotPriceResponseSDKType>(endpoint, options));
  }
}