import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimRecordRequest, QueryClaimRecordResponse, QueryClaimableForActionRequest, QueryClaimableForActionResponse, QueryTotalClaimableRequest, QueryTotalClaimableResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  moduleAccountBalance(request?: DeepPartial<QueryModuleAccountBalanceRequest>, metadata?: grpc.Metadata): Promise<QueryModuleAccountBalanceResponse>;
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  claimRecord(request: DeepPartial<QueryClaimRecordRequest>, metadata?: grpc.Metadata): Promise<QueryClaimRecordResponse>;
  claimableForAction(request: DeepPartial<QueryClaimableForActionRequest>, metadata?: grpc.Metadata): Promise<QueryClaimableForActionResponse>;
  totalClaimable(request: DeepPartial<QueryTotalClaimableRequest>, metadata?: grpc.Metadata): Promise<QueryTotalClaimableResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.moduleAccountBalance = this.moduleAccountBalance.bind(this);
    this.params = this.params.bind(this);
    this.claimRecord = this.claimRecord.bind(this);
    this.claimableForAction = this.claimableForAction.bind(this);
    this.totalClaimable = this.totalClaimable.bind(this);
  }
  moduleAccountBalance(request: DeepPartial<QueryModuleAccountBalanceRequest> = {}, metadata?: grpc.Metadata): Promise<QueryModuleAccountBalanceResponse> {
    return this.rpc.unary(QueryModuleAccountBalanceDesc, QueryModuleAccountBalanceRequest.fromPartial(request), metadata);
  }
  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }
  claimRecord(request: DeepPartial<QueryClaimRecordRequest>, metadata?: grpc.Metadata): Promise<QueryClaimRecordResponse> {
    return this.rpc.unary(QueryClaimRecordDesc, QueryClaimRecordRequest.fromPartial(request), metadata);
  }
  claimableForAction(request: DeepPartial<QueryClaimableForActionRequest>, metadata?: grpc.Metadata): Promise<QueryClaimableForActionResponse> {
    return this.rpc.unary(QueryClaimableForActionDesc, QueryClaimableForActionRequest.fromPartial(request), metadata);
  }
  totalClaimable(request: DeepPartial<QueryTotalClaimableRequest>, metadata?: grpc.Metadata): Promise<QueryTotalClaimableResponse> {
    return this.rpc.unary(QueryTotalClaimableDesc, QueryTotalClaimableRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "osmosis.claim.v1beta1.Query"
};
export const QueryModuleAccountBalanceDesc: UnaryMethodDefinitionish = {
  methodName: "ModuleAccountBalance",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryModuleAccountBalanceRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryModuleAccountBalanceResponse.decode(data),
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
export const QueryClaimRecordDesc: UnaryMethodDefinitionish = {
  methodName: "ClaimRecord",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryClaimRecordRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryClaimRecordResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryClaimableForActionDesc: UnaryMethodDefinitionish = {
  methodName: "ClaimableForAction",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryClaimableForActionRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryClaimableForActionResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryTotalClaimableDesc: UnaryMethodDefinitionish = {
  methodName: "TotalClaimable",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryTotalClaimableRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTotalClaimableResponse.decode(data),
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