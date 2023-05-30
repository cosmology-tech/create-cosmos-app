import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryPoolsRequest, QueryPoolsResponse, QueryNumPoolsRequest, QueryNumPoolsResponse, QueryTotalLiquidityRequest, QueryTotalLiquidityResponse, QueryPoolsWithFilterRequest, QueryPoolsWithFilterResponse, QueryPoolRequest, QueryPoolResponse, QueryPoolTypeRequest, QueryPoolTypeResponse, QueryCalcJoinPoolNoSwapSharesRequest, QueryCalcJoinPoolNoSwapSharesResponse, QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesResponse, QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesResponse, QueryPoolParamsRequest, QueryPoolParamsResponse, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponse, QueryTotalSharesRequest, QueryTotalSharesResponse, QuerySpotPriceRequest, QuerySpotPriceResponse, QuerySwapExactAmountInRequest, QuerySwapExactAmountInResponse, QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutResponse } from "./query";
export interface Query {
  pools(request?: DeepPartial<QueryPoolsRequest>, metadata?: grpc.Metadata): Promise<QueryPoolsResponse>;
  numPools(request?: DeepPartial<QueryNumPoolsRequest>, metadata?: grpc.Metadata): Promise<QueryNumPoolsResponse>;
  totalLiquidity(request?: DeepPartial<QueryTotalLiquidityRequest>, metadata?: grpc.Metadata): Promise<QueryTotalLiquidityResponse>;
  /**
   * PoolsWithFilter allows you to query specific pools with requested
   * parameters
   */
  poolsWithFilter(request: DeepPartial<QueryPoolsWithFilterRequest>, metadata?: grpc.Metadata): Promise<QueryPoolsWithFilterResponse>;
  /** Per Pool gRPC Endpoints */
  pool(request: DeepPartial<QueryPoolRequest>, metadata?: grpc.Metadata): Promise<QueryPoolResponse>;
  /**
   * PoolType returns the type of the pool.
   * Returns "Balancer" as a string literal when the pool is a balancer pool.
   * Errors if the pool is failed to be type caseted.
   */
  poolType(request: DeepPartial<QueryPoolTypeRequest>, metadata?: grpc.Metadata): Promise<QueryPoolTypeResponse>;
  /**
   * Simulates joining pool without a swap. Returns the amount of shares you'd
   * get and tokens needed to provide
   */
  calcJoinPoolNoSwapShares(request: DeepPartial<QueryCalcJoinPoolNoSwapSharesRequest>, metadata?: grpc.Metadata): Promise<QueryCalcJoinPoolNoSwapSharesResponse>;
  calcJoinPoolShares(request: DeepPartial<QueryCalcJoinPoolSharesRequest>, metadata?: grpc.Metadata): Promise<QueryCalcJoinPoolSharesResponse>;
  calcExitPoolCoinsFromShares(request: DeepPartial<QueryCalcExitPoolCoinsFromSharesRequest>, metadata?: grpc.Metadata): Promise<QueryCalcExitPoolCoinsFromSharesResponse>;
  poolParams(request: DeepPartial<QueryPoolParamsRequest>, metadata?: grpc.Metadata): Promise<QueryPoolParamsResponse>;
  totalPoolLiquidity(request: DeepPartial<QueryTotalPoolLiquidityRequest>, metadata?: grpc.Metadata): Promise<QueryTotalPoolLiquidityResponse>;
  totalShares(request: DeepPartial<QueryTotalSharesRequest>, metadata?: grpc.Metadata): Promise<QueryTotalSharesResponse>;
  /**
   * SpotPrice defines a gRPC query handler that returns the spot price given
   * a base denomination and a quote denomination.
   */
  spotPrice(request: DeepPartial<QuerySpotPriceRequest>, metadata?: grpc.Metadata): Promise<QuerySpotPriceResponse>;
  /** Estimate the swap. */
  estimateSwapExactAmountIn(request: DeepPartial<QuerySwapExactAmountInRequest>, metadata?: grpc.Metadata): Promise<QuerySwapExactAmountInResponse>;
  estimateSwapExactAmountOut(request: DeepPartial<QuerySwapExactAmountOutRequest>, metadata?: grpc.Metadata): Promise<QuerySwapExactAmountOutResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.pools = this.pools.bind(this);
    this.numPools = this.numPools.bind(this);
    this.totalLiquidity = this.totalLiquidity.bind(this);
    this.poolsWithFilter = this.poolsWithFilter.bind(this);
    this.pool = this.pool.bind(this);
    this.poolType = this.poolType.bind(this);
    this.calcJoinPoolNoSwapShares = this.calcJoinPoolNoSwapShares.bind(this);
    this.calcJoinPoolShares = this.calcJoinPoolShares.bind(this);
    this.calcExitPoolCoinsFromShares = this.calcExitPoolCoinsFromShares.bind(this);
    this.poolParams = this.poolParams.bind(this);
    this.totalPoolLiquidity = this.totalPoolLiquidity.bind(this);
    this.totalShares = this.totalShares.bind(this);
    this.spotPrice = this.spotPrice.bind(this);
    this.estimateSwapExactAmountIn = this.estimateSwapExactAmountIn.bind(this);
    this.estimateSwapExactAmountOut = this.estimateSwapExactAmountOut.bind(this);
  }
  pools(request: DeepPartial<QueryPoolsRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryPoolsResponse> {
    return this.rpc.unary(QueryPoolsDesc, QueryPoolsRequest.fromPartial(request), metadata);
  }
  numPools(request: DeepPartial<QueryNumPoolsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryNumPoolsResponse> {
    return this.rpc.unary(QueryNumPoolsDesc, QueryNumPoolsRequest.fromPartial(request), metadata);
  }
  totalLiquidity(request: DeepPartial<QueryTotalLiquidityRequest> = {}, metadata?: grpc.Metadata): Promise<QueryTotalLiquidityResponse> {
    return this.rpc.unary(QueryTotalLiquidityDesc, QueryTotalLiquidityRequest.fromPartial(request), metadata);
  }
  poolsWithFilter(request: DeepPartial<QueryPoolsWithFilterRequest>, metadata?: grpc.Metadata): Promise<QueryPoolsWithFilterResponse> {
    return this.rpc.unary(QueryPoolsWithFilterDesc, QueryPoolsWithFilterRequest.fromPartial(request), metadata);
  }
  pool(request: DeepPartial<QueryPoolRequest>, metadata?: grpc.Metadata): Promise<QueryPoolResponse> {
    return this.rpc.unary(QueryPoolDesc, QueryPoolRequest.fromPartial(request), metadata);
  }
  poolType(request: DeepPartial<QueryPoolTypeRequest>, metadata?: grpc.Metadata): Promise<QueryPoolTypeResponse> {
    return this.rpc.unary(QueryPoolTypeDesc, QueryPoolTypeRequest.fromPartial(request), metadata);
  }
  calcJoinPoolNoSwapShares(request: DeepPartial<QueryCalcJoinPoolNoSwapSharesRequest>, metadata?: grpc.Metadata): Promise<QueryCalcJoinPoolNoSwapSharesResponse> {
    return this.rpc.unary(QueryCalcJoinPoolNoSwapSharesDesc, QueryCalcJoinPoolNoSwapSharesRequest.fromPartial(request), metadata);
  }
  calcJoinPoolShares(request: DeepPartial<QueryCalcJoinPoolSharesRequest>, metadata?: grpc.Metadata): Promise<QueryCalcJoinPoolSharesResponse> {
    return this.rpc.unary(QueryCalcJoinPoolSharesDesc, QueryCalcJoinPoolSharesRequest.fromPartial(request), metadata);
  }
  calcExitPoolCoinsFromShares(request: DeepPartial<QueryCalcExitPoolCoinsFromSharesRequest>, metadata?: grpc.Metadata): Promise<QueryCalcExitPoolCoinsFromSharesResponse> {
    return this.rpc.unary(QueryCalcExitPoolCoinsFromSharesDesc, QueryCalcExitPoolCoinsFromSharesRequest.fromPartial(request), metadata);
  }
  poolParams(request: DeepPartial<QueryPoolParamsRequest>, metadata?: grpc.Metadata): Promise<QueryPoolParamsResponse> {
    return this.rpc.unary(QueryPoolParamsDesc, QueryPoolParamsRequest.fromPartial(request), metadata);
  }
  totalPoolLiquidity(request: DeepPartial<QueryTotalPoolLiquidityRequest>, metadata?: grpc.Metadata): Promise<QueryTotalPoolLiquidityResponse> {
    return this.rpc.unary(QueryTotalPoolLiquidityDesc, QueryTotalPoolLiquidityRequest.fromPartial(request), metadata);
  }
  totalShares(request: DeepPartial<QueryTotalSharesRequest>, metadata?: grpc.Metadata): Promise<QueryTotalSharesResponse> {
    return this.rpc.unary(QueryTotalSharesDesc, QueryTotalSharesRequest.fromPartial(request), metadata);
  }
  spotPrice(request: DeepPartial<QuerySpotPriceRequest>, metadata?: grpc.Metadata): Promise<QuerySpotPriceResponse> {
    return this.rpc.unary(QuerySpotPriceDesc, QuerySpotPriceRequest.fromPartial(request), metadata);
  }
  estimateSwapExactAmountIn(request: DeepPartial<QuerySwapExactAmountInRequest>, metadata?: grpc.Metadata): Promise<QuerySwapExactAmountInResponse> {
    return this.rpc.unary(QuerySwapExactAmountInDesc, QuerySwapExactAmountInRequest.fromPartial(request), metadata);
  }
  estimateSwapExactAmountOut(request: DeepPartial<QuerySwapExactAmountOutRequest>, metadata?: grpc.Metadata): Promise<QuerySwapExactAmountOutResponse> {
    return this.rpc.unary(QuerySwapExactAmountOutDesc, QuerySwapExactAmountOutRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "osmosis.gamm.v1beta1.Query"
};
export const QueryPoolsDesc: UnaryMethodDefinitionish = {
  methodName: "Pools",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryPoolsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryPoolsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryNumPoolsDesc: UnaryMethodDefinitionish = {
  methodName: "NumPools",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryNumPoolsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryNumPoolsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryTotalLiquidityDesc: UnaryMethodDefinitionish = {
  methodName: "TotalLiquidity",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryTotalLiquidityRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTotalLiquidityResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryPoolsWithFilterDesc: UnaryMethodDefinitionish = {
  methodName: "PoolsWithFilter",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryPoolsWithFilterRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryPoolsWithFilterResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryPoolDesc: UnaryMethodDefinitionish = {
  methodName: "Pool",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryPoolRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryPoolResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryPoolTypeDesc: UnaryMethodDefinitionish = {
  methodName: "PoolType",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryPoolTypeRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryPoolTypeResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryCalcJoinPoolNoSwapSharesDesc: UnaryMethodDefinitionish = {
  methodName: "CalcJoinPoolNoSwapShares",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryCalcJoinPoolNoSwapSharesRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryCalcJoinPoolNoSwapSharesResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryCalcJoinPoolSharesDesc: UnaryMethodDefinitionish = {
  methodName: "CalcJoinPoolShares",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryCalcJoinPoolSharesRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryCalcJoinPoolSharesResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryCalcExitPoolCoinsFromSharesDesc: UnaryMethodDefinitionish = {
  methodName: "CalcExitPoolCoinsFromShares",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryCalcExitPoolCoinsFromSharesRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryCalcExitPoolCoinsFromSharesResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryPoolParamsDesc: UnaryMethodDefinitionish = {
  methodName: "PoolParams",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryPoolParamsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryPoolParamsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryTotalPoolLiquidityDesc: UnaryMethodDefinitionish = {
  methodName: "TotalPoolLiquidity",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryTotalPoolLiquidityRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTotalPoolLiquidityResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryTotalSharesDesc: UnaryMethodDefinitionish = {
  methodName: "TotalShares",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryTotalSharesRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTotalSharesResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QuerySpotPriceDesc: UnaryMethodDefinitionish = {
  methodName: "SpotPrice",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QuerySpotPriceRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QuerySpotPriceResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryEstimateSwapExactAmountInDesc: UnaryMethodDefinitionish = {
  methodName: "EstimateSwapExactAmountIn",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QuerySwapExactAmountInRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QuerySwapExactAmountInResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryEstimateSwapExactAmountOutDesc: UnaryMethodDefinitionish = {
  methodName: "EstimateSwapExactAmountOut",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QuerySwapExactAmountOutRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QuerySwapExactAmountOutResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
export class GrpcWebImpl {
  host: string;
  options: {
    transport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  };
  constructor(host: string, options: {
    transport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  }) {
    this.host = host;
    this.options = options;
  }
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, _request: any, metadata: grpc.Metadata | undefined) {
    const request = {
      ..._request,
      ...methodDesc.requestType
    };
    const maybeCombinedMetadata = metadata && this.options.metadata ? new BrowserHeaders({
      ...this.options?.metadata.headersMap,
      ...metadata?.headersMap
    }) : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = (new Error(response.statusMessage) as any);
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        }
      });
    });
  }
}