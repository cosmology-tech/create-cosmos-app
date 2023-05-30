import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryTokenPairsRequest, QueryTokenPairsResponse, QueryTokenPairRequest, QueryTokenPairResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** TokenPairs retrieves registered token pairs */
  tokenPairs(request?: DeepPartial<QueryTokenPairsRequest>, metadata?: grpc.Metadata): Promise<QueryTokenPairsResponse>;
  /** TokenPair retrieves a registered token pair */
  tokenPair(request: DeepPartial<QueryTokenPairRequest>, metadata?: grpc.Metadata): Promise<QueryTokenPairResponse>;
  /** Params retrieves the erc20 module params */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.tokenPairs = this.tokenPairs.bind(this);
    this.tokenPair = this.tokenPair.bind(this);
    this.params = this.params.bind(this);
  }
  tokenPairs(request: DeepPartial<QueryTokenPairsRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryTokenPairsResponse> {
    return this.rpc.unary(QueryTokenPairsDesc, QueryTokenPairsRequest.fromPartial(request), metadata);
  }
  tokenPair(request: DeepPartial<QueryTokenPairRequest>, metadata?: grpc.Metadata): Promise<QueryTokenPairResponse> {
    return this.rpc.unary(QueryTokenPairDesc, QueryTokenPairRequest.fromPartial(request), metadata);
  }
  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "evmos.erc20.v1.Query"
};
export const QueryTokenPairsDesc: UnaryMethodDefinitionish = {
  methodName: "TokenPairs",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryTokenPairsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTokenPairsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryTokenPairDesc: UnaryMethodDefinitionish = {
  methodName: "TokenPair",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryTokenPairRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTokenPairResponse.decode(data),
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