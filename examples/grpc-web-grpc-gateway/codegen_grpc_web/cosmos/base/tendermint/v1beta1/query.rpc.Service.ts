import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../../grpc-web";
import { DeepPartial } from "../../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { GetNodeInfoRequest, GetNodeInfoResponse, GetSyncingRequest, GetSyncingResponse, GetLatestBlockRequest, GetLatestBlockResponse, GetBlockByHeightRequest, GetBlockByHeightResponse, GetLatestValidatorSetRequest, GetLatestValidatorSetResponse, GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse } from "./query";
/** Service defines the gRPC querier service for tendermint queries. */
export interface Service {
  /** GetNodeInfo queries the current node info. */
  getNodeInfo(request?: DeepPartial<GetNodeInfoRequest>, metadata?: grpc.Metadata): Promise<GetNodeInfoResponse>;
  /** GetSyncing queries node syncing. */
  getSyncing(request?: DeepPartial<GetSyncingRequest>, metadata?: grpc.Metadata): Promise<GetSyncingResponse>;
  /** GetLatestBlock returns the latest block. */
  getLatestBlock(request?: DeepPartial<GetLatestBlockRequest>, metadata?: grpc.Metadata): Promise<GetLatestBlockResponse>;
  /** GetBlockByHeight queries block for given height. */
  getBlockByHeight(request: DeepPartial<GetBlockByHeightRequest>, metadata?: grpc.Metadata): Promise<GetBlockByHeightResponse>;
  /** GetLatestValidatorSet queries latest validator-set. */
  getLatestValidatorSet(request?: DeepPartial<GetLatestValidatorSetRequest>, metadata?: grpc.Metadata): Promise<GetLatestValidatorSetResponse>;
  /** GetValidatorSetByHeight queries validator-set at a given height. */
  getValidatorSetByHeight(request: DeepPartial<GetValidatorSetByHeightRequest>, metadata?: grpc.Metadata): Promise<GetValidatorSetByHeightResponse>;
}
export class ServiceClientImpl implements Service {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.getNodeInfo = this.getNodeInfo.bind(this);
    this.getSyncing = this.getSyncing.bind(this);
    this.getLatestBlock = this.getLatestBlock.bind(this);
    this.getBlockByHeight = this.getBlockByHeight.bind(this);
    this.getLatestValidatorSet = this.getLatestValidatorSet.bind(this);
    this.getValidatorSetByHeight = this.getValidatorSetByHeight.bind(this);
  }
  getNodeInfo(request: DeepPartial<GetNodeInfoRequest> = {}, metadata?: grpc.Metadata): Promise<GetNodeInfoResponse> {
    return this.rpc.unary(GetNodeInfoDesc, GetNodeInfoRequest.fromPartial(request), metadata);
  }
  getSyncing(request: DeepPartial<GetSyncingRequest> = {}, metadata?: grpc.Metadata): Promise<GetSyncingResponse> {
    return this.rpc.unary(GetSyncingDesc, GetSyncingRequest.fromPartial(request), metadata);
  }
  getLatestBlock(request: DeepPartial<GetLatestBlockRequest> = {}, metadata?: grpc.Metadata): Promise<GetLatestBlockResponse> {
    return this.rpc.unary(GetLatestBlockDesc, GetLatestBlockRequest.fromPartial(request), metadata);
  }
  getBlockByHeight(request: DeepPartial<GetBlockByHeightRequest>, metadata?: grpc.Metadata): Promise<GetBlockByHeightResponse> {
    return this.rpc.unary(GetBlockByHeightDesc, GetBlockByHeightRequest.fromPartial(request), metadata);
  }
  getLatestValidatorSet(request: DeepPartial<GetLatestValidatorSetRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<GetLatestValidatorSetResponse> {
    return this.rpc.unary(GetLatestValidatorSetDesc, GetLatestValidatorSetRequest.fromPartial(request), metadata);
  }
  getValidatorSetByHeight(request: DeepPartial<GetValidatorSetByHeightRequest>, metadata?: grpc.Metadata): Promise<GetValidatorSetByHeightResponse> {
    return this.rpc.unary(GetValidatorSetByHeightDesc, GetValidatorSetByHeightRequest.fromPartial(request), metadata);
  }
}
export const ServiceDesc = {
  serviceName: "cosmos.base.tendermint.v1beta1.Service"
};
export const GetNodeInfoDesc: UnaryMethodDefinitionish = {
  methodName: "GetNodeInfo",
  service: ServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return GetNodeInfoRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...GetNodeInfoResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const GetSyncingDesc: UnaryMethodDefinitionish = {
  methodName: "GetSyncing",
  service: ServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return GetSyncingRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...GetSyncingResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const GetLatestBlockDesc: UnaryMethodDefinitionish = {
  methodName: "GetLatestBlock",
  service: ServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return GetLatestBlockRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...GetLatestBlockResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const GetBlockByHeightDesc: UnaryMethodDefinitionish = {
  methodName: "GetBlockByHeight",
  service: ServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return GetBlockByHeightRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...GetBlockByHeightResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const GetLatestValidatorSetDesc: UnaryMethodDefinitionish = {
  methodName: "GetLatestValidatorSet",
  service: ServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return GetLatestValidatorSetRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...GetLatestValidatorSetResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const GetValidatorSetByHeightDesc: UnaryMethodDefinitionish = {
  methodName: "GetValidatorSetByHeight",
  service: ServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return GetValidatorSetByHeightRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...GetValidatorSetByHeightResponse.decode(data),
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