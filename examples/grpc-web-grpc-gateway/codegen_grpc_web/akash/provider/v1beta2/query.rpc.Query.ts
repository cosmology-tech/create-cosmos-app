import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryProvidersRequest, QueryProvidersResponse, QueryProviderRequest, QueryProviderResponse } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
  /** Providers queries providers */
  providers(request?: DeepPartial<QueryProvidersRequest>, metadata?: grpc.Metadata): Promise<QueryProvidersResponse>;
  /** Provider queries provider details */
  provider(request: DeepPartial<QueryProviderRequest>, metadata?: grpc.Metadata): Promise<QueryProviderResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.providers = this.providers.bind(this);
    this.provider = this.provider.bind(this);
  }
  providers(request: DeepPartial<QueryProvidersRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryProvidersResponse> {
    return this.rpc.unary(QueryProvidersDesc, QueryProvidersRequest.fromPartial(request), metadata);
  }
  provider(request: DeepPartial<QueryProviderRequest>, metadata?: grpc.Metadata): Promise<QueryProviderResponse> {
    return this.rpc.unary(QueryProviderDesc, QueryProviderRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "akash.provider.v1beta2.Query"
};
export const QueryProvidersDesc: UnaryMethodDefinitionish = {
  methodName: "Providers",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryProvidersRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryProvidersResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryProviderDesc: UnaryMethodDefinitionish = {
  methodName: "Provider",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryProviderRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryProviderResponse.decode(data),
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