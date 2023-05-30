import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryGrantsRequest, QueryGrantsResponse, QueryGranterGrantsRequest, QueryGranterGrantsResponse, QueryGranteeGrantsRequest, QueryGranteeGrantsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Returns list of `Authorization`, granted to the grantee by the granter. */
  grants(request: DeepPartial<QueryGrantsRequest>, metadata?: grpc.Metadata): Promise<QueryGrantsResponse>;
  /**
   * GranterGrants returns list of `GrantAuthorization`, granted by granter.
   * 
   * Since: cosmos-sdk 0.46
   */
  granterGrants(request: DeepPartial<QueryGranterGrantsRequest>, metadata?: grpc.Metadata): Promise<QueryGranterGrantsResponse>;
  /**
   * GranteeGrants returns a list of `GrantAuthorization` by grantee.
   * 
   * Since: cosmos-sdk 0.46
   */
  granteeGrants(request: DeepPartial<QueryGranteeGrantsRequest>, metadata?: grpc.Metadata): Promise<QueryGranteeGrantsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.grants = this.grants.bind(this);
    this.granterGrants = this.granterGrants.bind(this);
    this.granteeGrants = this.granteeGrants.bind(this);
  }
  grants(request: DeepPartial<QueryGrantsRequest>, metadata?: grpc.Metadata): Promise<QueryGrantsResponse> {
    return this.rpc.unary(QueryGrantsDesc, QueryGrantsRequest.fromPartial(request), metadata);
  }
  granterGrants(request: DeepPartial<QueryGranterGrantsRequest>, metadata?: grpc.Metadata): Promise<QueryGranterGrantsResponse> {
    return this.rpc.unary(QueryGranterGrantsDesc, QueryGranterGrantsRequest.fromPartial(request), metadata);
  }
  granteeGrants(request: DeepPartial<QueryGranteeGrantsRequest>, metadata?: grpc.Metadata): Promise<QueryGranteeGrantsResponse> {
    return this.rpc.unary(QueryGranteeGrantsDesc, QueryGranteeGrantsRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "cosmos.authz.v1beta1.Query"
};
export const QueryGrantsDesc: UnaryMethodDefinitionish = {
  methodName: "Grants",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGrantsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGrantsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryGranterGrantsDesc: UnaryMethodDefinitionish = {
  methodName: "GranterGrants",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGranterGrantsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGranterGrantsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryGranteeGrantsDesc: UnaryMethodDefinitionish = {
  methodName: "GranteeGrants",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGranteeGrantsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGranteeGrantsResponse.decode(data),
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