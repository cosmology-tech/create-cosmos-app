import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryTotalUnclaimedRequest, QueryTotalUnclaimedResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimsRecordsRequest, QueryClaimsRecordsResponse, QueryClaimsRecordRequest, QueryClaimsRecordResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** TotalUnclaimed queries the total unclaimed tokens from the airdrop */
  totalUnclaimed(request?: DeepPartial<QueryTotalUnclaimedRequest>, metadata?: grpc.Metadata): Promise<QueryTotalUnclaimedResponse>;
  /** Params returns the claims module parameters */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /** ClaimsRecords returns all claims records */
  claimsRecords(request?: DeepPartial<QueryClaimsRecordsRequest>, metadata?: grpc.Metadata): Promise<QueryClaimsRecordsResponse>;
  /** ClaimsRecord returns the claims record for a given address */
  claimsRecord(request: DeepPartial<QueryClaimsRecordRequest>, metadata?: grpc.Metadata): Promise<QueryClaimsRecordResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.totalUnclaimed = this.totalUnclaimed.bind(this);
    this.params = this.params.bind(this);
    this.claimsRecords = this.claimsRecords.bind(this);
    this.claimsRecord = this.claimsRecord.bind(this);
  }
  totalUnclaimed(request: DeepPartial<QueryTotalUnclaimedRequest> = {}, metadata?: grpc.Metadata): Promise<QueryTotalUnclaimedResponse> {
    return this.rpc.unary(QueryTotalUnclaimedDesc, QueryTotalUnclaimedRequest.fromPartial(request), metadata);
  }
  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }
  claimsRecords(request: DeepPartial<QueryClaimsRecordsRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryClaimsRecordsResponse> {
    return this.rpc.unary(QueryClaimsRecordsDesc, QueryClaimsRecordsRequest.fromPartial(request), metadata);
  }
  claimsRecord(request: DeepPartial<QueryClaimsRecordRequest>, metadata?: grpc.Metadata): Promise<QueryClaimsRecordResponse> {
    return this.rpc.unary(QueryClaimsRecordDesc, QueryClaimsRecordRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "evmos.claims.v1.Query"
};
export const QueryTotalUnclaimedDesc: UnaryMethodDefinitionish = {
  methodName: "TotalUnclaimed",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryTotalUnclaimedRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTotalUnclaimedResponse.decode(data),
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
export const QueryClaimsRecordsDesc: UnaryMethodDefinitionish = {
  methodName: "ClaimsRecords",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryClaimsRecordsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryClaimsRecordsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryClaimsRecordDesc: UnaryMethodDefinitionish = {
  methodName: "ClaimsRecord",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryClaimsRecordRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryClaimsRecordResponse.decode(data),
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