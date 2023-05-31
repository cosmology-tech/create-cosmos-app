import { UnaryMethodDefinitionish } from "../../../../grpc-web";
import { DeepPartial } from "../../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgConnectionOpenInit, MsgConnectionOpenInitResponse, MsgConnectionOpenTry, MsgConnectionOpenTryResponse, MsgConnectionOpenAck, MsgConnectionOpenAckResponse, MsgConnectionOpenConfirm, MsgConnectionOpenConfirmResponse } from "./tx";
/** Msg defines the ibc/connection Msg service. */
export interface Msg {
  /** ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit. */
  connectionOpenInit(request: DeepPartial<MsgConnectionOpenInit>, metadata?: grpc.Metadata): Promise<MsgConnectionOpenInitResponse>;
  /** ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry. */
  connectionOpenTry(request: DeepPartial<MsgConnectionOpenTry>, metadata?: grpc.Metadata): Promise<MsgConnectionOpenTryResponse>;
  /** ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck. */
  connectionOpenAck(request: DeepPartial<MsgConnectionOpenAck>, metadata?: grpc.Metadata): Promise<MsgConnectionOpenAckResponse>;
  /**
   * ConnectionOpenConfirm defines a rpc handler method for
   * MsgConnectionOpenConfirm.
   */
  connectionOpenConfirm(request: DeepPartial<MsgConnectionOpenConfirm>, metadata?: grpc.Metadata): Promise<MsgConnectionOpenConfirmResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.connectionOpenInit = this.connectionOpenInit.bind(this);
    this.connectionOpenTry = this.connectionOpenTry.bind(this);
    this.connectionOpenAck = this.connectionOpenAck.bind(this);
    this.connectionOpenConfirm = this.connectionOpenConfirm.bind(this);
  }
  connectionOpenInit(request: DeepPartial<MsgConnectionOpenInit>, metadata?: grpc.Metadata): Promise<MsgConnectionOpenInitResponse> {
    return this.rpc.unary(MsgConnectionOpenInitDesc, MsgConnectionOpenInit.fromPartial(request), metadata);
  }
  connectionOpenTry(request: DeepPartial<MsgConnectionOpenTry>, metadata?: grpc.Metadata): Promise<MsgConnectionOpenTryResponse> {
    return this.rpc.unary(MsgConnectionOpenTryDesc, MsgConnectionOpenTry.fromPartial(request), metadata);
  }
  connectionOpenAck(request: DeepPartial<MsgConnectionOpenAck>, metadata?: grpc.Metadata): Promise<MsgConnectionOpenAckResponse> {
    return this.rpc.unary(MsgConnectionOpenAckDesc, MsgConnectionOpenAck.fromPartial(request), metadata);
  }
  connectionOpenConfirm(request: DeepPartial<MsgConnectionOpenConfirm>, metadata?: grpc.Metadata): Promise<MsgConnectionOpenConfirmResponse> {
    return this.rpc.unary(MsgConnectionOpenConfirmDesc, MsgConnectionOpenConfirm.fromPartial(request), metadata);
  }
}
export const MsgDesc = {
  serviceName: "ibc.core.connection.v1.Msg"
};
export const MsgConnectionOpenInitDesc: UnaryMethodDefinitionish = {
  methodName: "ConnectionOpenInit",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgConnectionOpenInit.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgConnectionOpenInitResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgConnectionOpenTryDesc: UnaryMethodDefinitionish = {
  methodName: "ConnectionOpenTry",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgConnectionOpenTry.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgConnectionOpenTryResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgConnectionOpenAckDesc: UnaryMethodDefinitionish = {
  methodName: "ConnectionOpenAck",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgConnectionOpenAck.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgConnectionOpenAckResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgConnectionOpenConfirmDesc: UnaryMethodDefinitionish = {
  methodName: "ConnectionOpenConfirm",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgConnectionOpenConfirm.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgConnectionOpenConfirmResponse.decode(data),
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