import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryParamsRequest, QueryParamsResponse, QueryInflationRequest, QueryInflationResponse, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
  /** Params returns the total set of minting parameters. */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /** Inflation returns the current minting inflation value. */
  inflation(request?: DeepPartial<QueryInflationRequest>, metadata?: grpc.Metadata): Promise<QueryInflationResponse>;
  /** AnnualProvisions current minting annual provisions value. */
  annualProvisions(request?: DeepPartial<QueryAnnualProvisionsRequest>, metadata?: grpc.Metadata): Promise<QueryAnnualProvisionsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.inflation = this.inflation.bind(this);
    this.annualProvisions = this.annualProvisions.bind(this);
  }
  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }
  inflation(request: DeepPartial<QueryInflationRequest> = {}, metadata?: grpc.Metadata): Promise<QueryInflationResponse> {
    return this.rpc.unary(QueryInflationDesc, QueryInflationRequest.fromPartial(request), metadata);
  }
  annualProvisions(request: DeepPartial<QueryAnnualProvisionsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryAnnualProvisionsResponse> {
    return this.rpc.unary(QueryAnnualProvisionsDesc, QueryAnnualProvisionsRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "cosmos.mint.v1beta1.Query"
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
export const QueryInflationDesc: UnaryMethodDefinitionish = {
  methodName: "Inflation",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryInflationRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryInflationResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAnnualProvisionsDesc: UnaryMethodDefinitionish = {
  methodName: "AnnualProvisions",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAnnualProvisionsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAnnualProvisionsResponse.decode(data),
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