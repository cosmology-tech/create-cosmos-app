import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryIncentivesRequest, QueryIncentivesResponse, QueryIncentiveRequest, QueryIncentiveResponse, QueryGasMetersRequest, QueryGasMetersResponse, QueryGasMeterRequest, QueryGasMeterResponse, QueryAllocationMetersRequest, QueryAllocationMetersResponse, QueryAllocationMeterRequest, QueryAllocationMeterResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Incentives retrieves registered incentives */
  incentives(request?: DeepPartial<QueryIncentivesRequest>, metadata?: grpc.Metadata): Promise<QueryIncentivesResponse>;
  /** Incentive retrieves a registered incentive */
  incentive(request: DeepPartial<QueryIncentiveRequest>, metadata?: grpc.Metadata): Promise<QueryIncentiveResponse>;
  /** GasMeters retrieves active gas meters for a given contract */
  gasMeters(request: DeepPartial<QueryGasMetersRequest>, metadata?: grpc.Metadata): Promise<QueryGasMetersResponse>;
  /** GasMeter Retrieves a active gas meter */
  gasMeter(request: DeepPartial<QueryGasMeterRequest>, metadata?: grpc.Metadata): Promise<QueryGasMeterResponse>;
  /**
   * AllocationMeters retrieves active allocation meters for a given
   * denomination
   */
  allocationMeters(request?: DeepPartial<QueryAllocationMetersRequest>, metadata?: grpc.Metadata): Promise<QueryAllocationMetersResponse>;
  /** AllocationMeter Retrieves a active gas meter */
  allocationMeter(request: DeepPartial<QueryAllocationMeterRequest>, metadata?: grpc.Metadata): Promise<QueryAllocationMeterResponse>;
  /** Params retrieves the incentives module params */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.incentives = this.incentives.bind(this);
    this.incentive = this.incentive.bind(this);
    this.gasMeters = this.gasMeters.bind(this);
    this.gasMeter = this.gasMeter.bind(this);
    this.allocationMeters = this.allocationMeters.bind(this);
    this.allocationMeter = this.allocationMeter.bind(this);
    this.params = this.params.bind(this);
  }
  incentives(request: DeepPartial<QueryIncentivesRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryIncentivesResponse> {
    return this.rpc.unary(QueryIncentivesDesc, QueryIncentivesRequest.fromPartial(request), metadata);
  }
  incentive(request: DeepPartial<QueryIncentiveRequest>, metadata?: grpc.Metadata): Promise<QueryIncentiveResponse> {
    return this.rpc.unary(QueryIncentiveDesc, QueryIncentiveRequest.fromPartial(request), metadata);
  }
  gasMeters(request: DeepPartial<QueryGasMetersRequest>, metadata?: grpc.Metadata): Promise<QueryGasMetersResponse> {
    return this.rpc.unary(QueryGasMetersDesc, QueryGasMetersRequest.fromPartial(request), metadata);
  }
  gasMeter(request: DeepPartial<QueryGasMeterRequest>, metadata?: grpc.Metadata): Promise<QueryGasMeterResponse> {
    return this.rpc.unary(QueryGasMeterDesc, QueryGasMeterRequest.fromPartial(request), metadata);
  }
  allocationMeters(request: DeepPartial<QueryAllocationMetersRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAllocationMetersResponse> {
    return this.rpc.unary(QueryAllocationMetersDesc, QueryAllocationMetersRequest.fromPartial(request), metadata);
  }
  allocationMeter(request: DeepPartial<QueryAllocationMeterRequest>, metadata?: grpc.Metadata): Promise<QueryAllocationMeterResponse> {
    return this.rpc.unary(QueryAllocationMeterDesc, QueryAllocationMeterRequest.fromPartial(request), metadata);
  }
  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "evmos.incentives.v1.Query"
};
export const QueryIncentivesDesc: UnaryMethodDefinitionish = {
  methodName: "Incentives",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryIncentivesRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryIncentivesResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryIncentiveDesc: UnaryMethodDefinitionish = {
  methodName: "Incentive",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryIncentiveRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryIncentiveResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryGasMetersDesc: UnaryMethodDefinitionish = {
  methodName: "GasMeters",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGasMetersRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGasMetersResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryGasMeterDesc: UnaryMethodDefinitionish = {
  methodName: "GasMeter",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGasMeterRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGasMeterResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAllocationMetersDesc: UnaryMethodDefinitionish = {
  methodName: "AllocationMeters",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAllocationMetersRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllocationMetersResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAllocationMeterDesc: UnaryMethodDefinitionish = {
  methodName: "AllocationMeter",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAllocationMeterRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllocationMeterResponse.decode(data),
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