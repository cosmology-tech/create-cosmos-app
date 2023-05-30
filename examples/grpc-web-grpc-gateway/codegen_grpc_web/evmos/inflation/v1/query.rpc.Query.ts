import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryPeriodRequest, QueryPeriodResponse, QueryEpochMintProvisionRequest, QueryEpochMintProvisionResponse, QuerySkippedEpochsRequest, QuerySkippedEpochsResponse, QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponse, QueryInflationRateRequest, QueryInflationRateResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
  /** Period retrieves current period. */
  period(request?: DeepPartial<QueryPeriodRequest>, metadata?: grpc.Metadata): Promise<QueryPeriodResponse>;
  /** EpochMintProvision retrieves current minting epoch provision value. */
  epochMintProvision(request?: DeepPartial<QueryEpochMintProvisionRequest>, metadata?: grpc.Metadata): Promise<QueryEpochMintProvisionResponse>;
  /** SkippedEpochs retrieves the total number of skipped epochs. */
  skippedEpochs(request?: DeepPartial<QuerySkippedEpochsRequest>, metadata?: grpc.Metadata): Promise<QuerySkippedEpochsResponse>;
  /**
   * CirculatingSupply retrieves the total number of tokens that are in
   * circulation (i.e. excluding unvested tokens).
   */
  circulatingSupply(request?: DeepPartial<QueryCirculatingSupplyRequest>, metadata?: grpc.Metadata): Promise<QueryCirculatingSupplyResponse>;
  /** InflationRate retrieves the inflation rate of the current period. */
  inflationRate(request?: DeepPartial<QueryInflationRateRequest>, metadata?: grpc.Metadata): Promise<QueryInflationRateResponse>;
  /** Params retrieves the total set of minting parameters. */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.period = this.period.bind(this);
    this.epochMintProvision = this.epochMintProvision.bind(this);
    this.skippedEpochs = this.skippedEpochs.bind(this);
    this.circulatingSupply = this.circulatingSupply.bind(this);
    this.inflationRate = this.inflationRate.bind(this);
    this.params = this.params.bind(this);
  }
  period(request: DeepPartial<QueryPeriodRequest> = {}, metadata?: grpc.Metadata): Promise<QueryPeriodResponse> {
    return this.rpc.unary(QueryPeriodDesc, QueryPeriodRequest.fromPartial(request), metadata);
  }
  epochMintProvision(request: DeepPartial<QueryEpochMintProvisionRequest> = {}, metadata?: grpc.Metadata): Promise<QueryEpochMintProvisionResponse> {
    return this.rpc.unary(QueryEpochMintProvisionDesc, QueryEpochMintProvisionRequest.fromPartial(request), metadata);
  }
  skippedEpochs(request: DeepPartial<QuerySkippedEpochsRequest> = {}, metadata?: grpc.Metadata): Promise<QuerySkippedEpochsResponse> {
    return this.rpc.unary(QuerySkippedEpochsDesc, QuerySkippedEpochsRequest.fromPartial(request), metadata);
  }
  circulatingSupply(request: DeepPartial<QueryCirculatingSupplyRequest> = {}, metadata?: grpc.Metadata): Promise<QueryCirculatingSupplyResponse> {
    return this.rpc.unary(QueryCirculatingSupplyDesc, QueryCirculatingSupplyRequest.fromPartial(request), metadata);
  }
  inflationRate(request: DeepPartial<QueryInflationRateRequest> = {}, metadata?: grpc.Metadata): Promise<QueryInflationRateResponse> {
    return this.rpc.unary(QueryInflationRateDesc, QueryInflationRateRequest.fromPartial(request), metadata);
  }
  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "evmos.inflation.v1.Query"
};
export const QueryPeriodDesc: UnaryMethodDefinitionish = {
  methodName: "Period",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryPeriodRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryPeriodResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryEpochMintProvisionDesc: UnaryMethodDefinitionish = {
  methodName: "EpochMintProvision",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryEpochMintProvisionRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryEpochMintProvisionResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QuerySkippedEpochsDesc: UnaryMethodDefinitionish = {
  methodName: "SkippedEpochs",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QuerySkippedEpochsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QuerySkippedEpochsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryCirculatingSupplyDesc: UnaryMethodDefinitionish = {
  methodName: "CirculatingSupply",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryCirculatingSupplyRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryCirculatingSupplyResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryInflationRateDesc: UnaryMethodDefinitionish = {
  methodName: "InflationRate",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryInflationRateRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryInflationRateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryParamsDesc: UnaryMethodDefinitionish = {
  methodName: "Params",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryParamsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryParamsResponse.decode(data),
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