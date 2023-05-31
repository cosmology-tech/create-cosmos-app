import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { SimulateRequest, SimulateResponse, GetTxRequest, GetTxResponse, BroadcastTxRequest, BroadcastTxResponse, GetTxsEventRequest, GetTxsEventResponse, GetBlockWithTxsRequest, GetBlockWithTxsResponse } from "./service";
/** Service defines a gRPC service for interacting with transactions. */
export interface Service {
  /** Simulate simulates executing a transaction for estimating gas usage. */
  simulate(request: DeepPartial<SimulateRequest>, metadata?: grpc.Metadata): Promise<SimulateResponse>;
  /** GetTx fetches a tx by hash. */
  getTx(request: DeepPartial<GetTxRequest>, metadata?: grpc.Metadata): Promise<GetTxResponse>;
  /** BroadcastTx broadcast transaction. */
  broadcastTx(request: DeepPartial<BroadcastTxRequest>, metadata?: grpc.Metadata): Promise<BroadcastTxResponse>;
  /** GetTxsEvent fetches txs by event. */
  getTxsEvent(request: DeepPartial<GetTxsEventRequest>, metadata?: grpc.Metadata): Promise<GetTxsEventResponse>;
  /**
   * GetBlockWithTxs fetches a block with decoded txs.
   * 
   * Since: cosmos-sdk 0.45.2
   */
  getBlockWithTxs(request: DeepPartial<GetBlockWithTxsRequest>, metadata?: grpc.Metadata): Promise<GetBlockWithTxsResponse>;
}
export class ServiceClientImpl implements Service {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.simulate = this.simulate.bind(this);
    this.getTx = this.getTx.bind(this);
    this.broadcastTx = this.broadcastTx.bind(this);
    this.getTxsEvent = this.getTxsEvent.bind(this);
    this.getBlockWithTxs = this.getBlockWithTxs.bind(this);
  }
  simulate(request: DeepPartial<SimulateRequest>, metadata?: grpc.Metadata): Promise<SimulateResponse> {
    return this.rpc.unary(SimulateDesc, SimulateRequest.fromPartial(request), metadata);
  }
  getTx(request: DeepPartial<GetTxRequest>, metadata?: grpc.Metadata): Promise<GetTxResponse> {
    return this.rpc.unary(GetTxDesc, GetTxRequest.fromPartial(request), metadata);
  }
  broadcastTx(request: DeepPartial<BroadcastTxRequest>, metadata?: grpc.Metadata): Promise<BroadcastTxResponse> {
    return this.rpc.unary(BroadcastTxDesc, BroadcastTxRequest.fromPartial(request), metadata);
  }
  getTxsEvent(request: DeepPartial<GetTxsEventRequest>, metadata?: grpc.Metadata): Promise<GetTxsEventResponse> {
    return this.rpc.unary(GetTxsEventDesc, GetTxsEventRequest.fromPartial(request), metadata);
  }
  getBlockWithTxs(request: DeepPartial<GetBlockWithTxsRequest>, metadata?: grpc.Metadata): Promise<GetBlockWithTxsResponse> {
    return this.rpc.unary(GetBlockWithTxsDesc, GetBlockWithTxsRequest.fromPartial(request), metadata);
  }
}
export const ServiceDesc = {
  serviceName: "cosmos.tx.v1beta1.Service"
};
export const SimulateDesc: UnaryMethodDefinitionish = {
  methodName: "Simulate",
  service: ServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return SimulateRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...SimulateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const GetTxDesc: UnaryMethodDefinitionish = {
  methodName: "GetTx",
  service: ServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return GetTxRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...GetTxResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const BroadcastTxDesc: UnaryMethodDefinitionish = {
  methodName: "BroadcastTx",
  service: ServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return BroadcastTxRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...BroadcastTxResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const GetTxsEventDesc: UnaryMethodDefinitionish = {
  methodName: "GetTxsEvent",
  service: ServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return GetTxsEventRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...GetTxsEventResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const GetBlockWithTxsDesc: UnaryMethodDefinitionish = {
  methodName: "GetBlockWithTxs",
  service: ServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return GetBlockWithTxsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...GetBlockWithTxsResponse.decode(data),
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