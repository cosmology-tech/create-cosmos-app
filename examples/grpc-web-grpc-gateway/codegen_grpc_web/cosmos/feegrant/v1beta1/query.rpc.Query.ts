import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryAllowanceRequest, QueryAllowanceResponse, QueryAllowancesRequest, QueryAllowancesResponse, QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Allowance returns fee granted to the grantee by the granter. */
  allowance(request: DeepPartial<QueryAllowanceRequest>, metadata?: grpc.Metadata): Promise<QueryAllowanceResponse>;
  /** Allowances returns all the grants for address. */
  allowances(request: DeepPartial<QueryAllowancesRequest>, metadata?: grpc.Metadata): Promise<QueryAllowancesResponse>;
  /**
   * AllowancesByGranter returns all the grants given by an address
   * Since v0.46
   */
  allowancesByGranter(request: DeepPartial<QueryAllowancesByGranterRequest>, metadata?: grpc.Metadata): Promise<QueryAllowancesByGranterResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.allowance = this.allowance.bind(this);
    this.allowances = this.allowances.bind(this);
    this.allowancesByGranter = this.allowancesByGranter.bind(this);
  }
  allowance(request: DeepPartial<QueryAllowanceRequest>, metadata?: grpc.Metadata): Promise<QueryAllowanceResponse> {
    return this.rpc.unary(QueryAllowanceDesc, QueryAllowanceRequest.fromPartial(request), metadata);
  }
  allowances(request: DeepPartial<QueryAllowancesRequest>, metadata?: grpc.Metadata): Promise<QueryAllowancesResponse> {
    return this.rpc.unary(QueryAllowancesDesc, QueryAllowancesRequest.fromPartial(request), metadata);
  }
  allowancesByGranter(request: DeepPartial<QueryAllowancesByGranterRequest>, metadata?: grpc.Metadata): Promise<QueryAllowancesByGranterResponse> {
    return this.rpc.unary(QueryAllowancesByGranterDesc, QueryAllowancesByGranterRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "cosmos.feegrant.v1beta1.Query"
};
export const QueryAllowanceDesc: UnaryMethodDefinitionish = {
  methodName: "Allowance",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAllowanceRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllowanceResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAllowancesDesc: UnaryMethodDefinitionish = {
  methodName: "Allowances",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAllowancesRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllowancesResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAllowancesByGranterDesc: UnaryMethodDefinitionish = {
  methodName: "AllowancesByGranter",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAllowancesByGranterRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllowancesByGranterResponse.decode(data),
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