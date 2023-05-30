import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../../grpc-web";
import { DeepPartial } from "../../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryDenomTraceRequest, QueryDenomTraceResponse, QueryDenomTracesRequest, QueryDenomTracesResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
  /** DenomTrace queries a denomination trace information. */
  denomTrace(request: DeepPartial<QueryDenomTraceRequest>, metadata?: grpc.Metadata): Promise<QueryDenomTraceResponse>;
  /** DenomTraces queries all denomination traces. */
  denomTraces(request?: DeepPartial<QueryDenomTracesRequest>, metadata?: grpc.Metadata): Promise<QueryDenomTracesResponse>;
  /** Params queries all parameters of the ibc-transfer module. */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.denomTrace = this.denomTrace.bind(this);
    this.denomTraces = this.denomTraces.bind(this);
    this.params = this.params.bind(this);
  }
  denomTrace(request: DeepPartial<QueryDenomTraceRequest>, metadata?: grpc.Metadata): Promise<QueryDenomTraceResponse> {
    return this.rpc.unary(QueryDenomTraceDesc, QueryDenomTraceRequest.fromPartial(request), metadata);
  }
  denomTraces(request: DeepPartial<QueryDenomTracesRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryDenomTracesResponse> {
    return this.rpc.unary(QueryDenomTracesDesc, QueryDenomTracesRequest.fromPartial(request), metadata);
  }
  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "ibc.applications.transfer.v1.Query"
};
export const QueryDenomTraceDesc: UnaryMethodDefinitionish = {
  methodName: "DenomTrace",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryDenomTraceRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryDenomTraceResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryDenomTracesDesc: UnaryMethodDefinitionish = {
  methodName: "DenomTraces",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryDenomTracesRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryDenomTracesResponse.decode(data),
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