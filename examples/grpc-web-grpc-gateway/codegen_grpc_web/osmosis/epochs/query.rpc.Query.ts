import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../grpc-web";
import { DeepPartial } from "../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryEpochsInfoRequest, QueryEpochsInfoResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** EpochInfos provide running epochInfos */
  epochInfos(request?: DeepPartial<QueryEpochsInfoRequest>, metadata?: grpc.Metadata): Promise<QueryEpochsInfoResponse>;
  /** CurrentEpoch provide current epoch of specified identifier */
  currentEpoch(request: DeepPartial<QueryCurrentEpochRequest>, metadata?: grpc.Metadata): Promise<QueryCurrentEpochResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.epochInfos = this.epochInfos.bind(this);
    this.currentEpoch = this.currentEpoch.bind(this);
  }
  epochInfos(request: DeepPartial<QueryEpochsInfoRequest> = {}, metadata?: grpc.Metadata): Promise<QueryEpochsInfoResponse> {
    return this.rpc.unary(QueryEpochsInfoDesc, QueryEpochsInfoRequest.fromPartial(request), metadata);
  }
  currentEpoch(request: DeepPartial<QueryCurrentEpochRequest>, metadata?: grpc.Metadata): Promise<QueryCurrentEpochResponse> {
    return this.rpc.unary(QueryCurrentEpochDesc, QueryCurrentEpochRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "osmosis.epochs.v1beta1.Query"
};
export const QueryEpochInfosDesc: UnaryMethodDefinitionish = {
  methodName: "EpochInfos",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryEpochsInfoRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryEpochsInfoResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryCurrentEpochDesc: UnaryMethodDefinitionish = {
  methodName: "CurrentEpoch",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryCurrentEpochRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryCurrentEpochResponse.decode(data),
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