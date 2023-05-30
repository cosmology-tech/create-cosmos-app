import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryParamsRequest, QueryParamsResponse, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * Params defines a gRPC query method that returns the tokenfactory module's
   * parameters.
   */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /**
   * DenomAuthorityMetadata defines a gRPC query method for fetching
   * DenomAuthorityMetadata for a particular denom.
   */
  denomAuthorityMetadata(request: DeepPartial<QueryDenomAuthorityMetadataRequest>, metadata?: grpc.Metadata): Promise<QueryDenomAuthorityMetadataResponse>;
  /**
   * DenomsFromCreator defines a gRPC query method for fetching all
   * denominations created by a specific admin/creator.
   */
  denomsFromCreator(request: DeepPartial<QueryDenomsFromCreatorRequest>, metadata?: grpc.Metadata): Promise<QueryDenomsFromCreatorResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.denomAuthorityMetadata = this.denomAuthorityMetadata.bind(this);
    this.denomsFromCreator = this.denomsFromCreator.bind(this);
  }
  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }
  denomAuthorityMetadata(request: DeepPartial<QueryDenomAuthorityMetadataRequest>, metadata?: grpc.Metadata): Promise<QueryDenomAuthorityMetadataResponse> {
    return this.rpc.unary(QueryDenomAuthorityMetadataDesc, QueryDenomAuthorityMetadataRequest.fromPartial(request), metadata);
  }
  denomsFromCreator(request: DeepPartial<QueryDenomsFromCreatorRequest>, metadata?: grpc.Metadata): Promise<QueryDenomsFromCreatorResponse> {
    return this.rpc.unary(QueryDenomsFromCreatorDesc, QueryDenomsFromCreatorRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "osmosis.tokenfactory.v1beta1.Query"
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
export const QueryDenomAuthorityMetadataDesc: UnaryMethodDefinitionish = {
  methodName: "DenomAuthorityMetadata",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryDenomAuthorityMetadataRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryDenomAuthorityMetadataResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryDenomsFromCreatorDesc: UnaryMethodDefinitionish = {
  methodName: "DenomsFromCreator",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryDenomsFromCreatorRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryDenomsFromCreatorResponse.decode(data),
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