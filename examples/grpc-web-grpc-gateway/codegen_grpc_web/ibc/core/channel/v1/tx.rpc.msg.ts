import { UnaryMethodDefinitionish } from "../../../../grpc-web";
import { DeepPartial } from "../../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgChannelOpenInit, MsgChannelOpenInitResponse, MsgChannelOpenTry, MsgChannelOpenTryResponse, MsgChannelOpenAck, MsgChannelOpenAckResponse, MsgChannelOpenConfirm, MsgChannelOpenConfirmResponse, MsgChannelCloseInit, MsgChannelCloseInitResponse, MsgChannelCloseConfirm, MsgChannelCloseConfirmResponse, MsgRecvPacket, MsgRecvPacketResponse, MsgTimeout, MsgTimeoutResponse, MsgTimeoutOnClose, MsgTimeoutOnCloseResponse, MsgAcknowledgement, MsgAcknowledgementResponse } from "./tx";
/** Msg defines the ibc/channel Msg service. */
export interface Msg {
  /** ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit. */
  channelOpenInit(request: DeepPartial<MsgChannelOpenInit>, metadata?: grpc.Metadata): Promise<MsgChannelOpenInitResponse>;
  /** ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry. */
  channelOpenTry(request: DeepPartial<MsgChannelOpenTry>, metadata?: grpc.Metadata): Promise<MsgChannelOpenTryResponse>;
  /** ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck. */
  channelOpenAck(request: DeepPartial<MsgChannelOpenAck>, metadata?: grpc.Metadata): Promise<MsgChannelOpenAckResponse>;
  /** ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm. */
  channelOpenConfirm(request: DeepPartial<MsgChannelOpenConfirm>, metadata?: grpc.Metadata): Promise<MsgChannelOpenConfirmResponse>;
  /** ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit. */
  channelCloseInit(request: DeepPartial<MsgChannelCloseInit>, metadata?: grpc.Metadata): Promise<MsgChannelCloseInitResponse>;
  /**
   * ChannelCloseConfirm defines a rpc handler method for
   * MsgChannelCloseConfirm.
   */
  channelCloseConfirm(request: DeepPartial<MsgChannelCloseConfirm>, metadata?: grpc.Metadata): Promise<MsgChannelCloseConfirmResponse>;
  /** RecvPacket defines a rpc handler method for MsgRecvPacket. */
  recvPacket(request: DeepPartial<MsgRecvPacket>, metadata?: grpc.Metadata): Promise<MsgRecvPacketResponse>;
  /** Timeout defines a rpc handler method for MsgTimeout. */
  timeout(request: DeepPartial<MsgTimeout>, metadata?: grpc.Metadata): Promise<MsgTimeoutResponse>;
  /** TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose. */
  timeoutOnClose(request: DeepPartial<MsgTimeoutOnClose>, metadata?: grpc.Metadata): Promise<MsgTimeoutOnCloseResponse>;
  /** Acknowledgement defines a rpc handler method for MsgAcknowledgement. */
  acknowledgement(request: DeepPartial<MsgAcknowledgement>, metadata?: grpc.Metadata): Promise<MsgAcknowledgementResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.channelOpenInit = this.channelOpenInit.bind(this);
    this.channelOpenTry = this.channelOpenTry.bind(this);
    this.channelOpenAck = this.channelOpenAck.bind(this);
    this.channelOpenConfirm = this.channelOpenConfirm.bind(this);
    this.channelCloseInit = this.channelCloseInit.bind(this);
    this.channelCloseConfirm = this.channelCloseConfirm.bind(this);
    this.recvPacket = this.recvPacket.bind(this);
    this.timeout = this.timeout.bind(this);
    this.timeoutOnClose = this.timeoutOnClose.bind(this);
    this.acknowledgement = this.acknowledgement.bind(this);
  }
  channelOpenInit(request: DeepPartial<MsgChannelOpenInit>, metadata?: grpc.Metadata): Promise<MsgChannelOpenInitResponse> {
    return this.rpc.unary(MsgChannelOpenInitDesc, MsgChannelOpenInit.fromPartial(request), metadata);
  }
  channelOpenTry(request: DeepPartial<MsgChannelOpenTry>, metadata?: grpc.Metadata): Promise<MsgChannelOpenTryResponse> {
    return this.rpc.unary(MsgChannelOpenTryDesc, MsgChannelOpenTry.fromPartial(request), metadata);
  }
  channelOpenAck(request: DeepPartial<MsgChannelOpenAck>, metadata?: grpc.Metadata): Promise<MsgChannelOpenAckResponse> {
    return this.rpc.unary(MsgChannelOpenAckDesc, MsgChannelOpenAck.fromPartial(request), metadata);
  }
  channelOpenConfirm(request: DeepPartial<MsgChannelOpenConfirm>, metadata?: grpc.Metadata): Promise<MsgChannelOpenConfirmResponse> {
    return this.rpc.unary(MsgChannelOpenConfirmDesc, MsgChannelOpenConfirm.fromPartial(request), metadata);
  }
  channelCloseInit(request: DeepPartial<MsgChannelCloseInit>, metadata?: grpc.Metadata): Promise<MsgChannelCloseInitResponse> {
    return this.rpc.unary(MsgChannelCloseInitDesc, MsgChannelCloseInit.fromPartial(request), metadata);
  }
  channelCloseConfirm(request: DeepPartial<MsgChannelCloseConfirm>, metadata?: grpc.Metadata): Promise<MsgChannelCloseConfirmResponse> {
    return this.rpc.unary(MsgChannelCloseConfirmDesc, MsgChannelCloseConfirm.fromPartial(request), metadata);
  }
  recvPacket(request: DeepPartial<MsgRecvPacket>, metadata?: grpc.Metadata): Promise<MsgRecvPacketResponse> {
    return this.rpc.unary(MsgRecvPacketDesc, MsgRecvPacket.fromPartial(request), metadata);
  }
  timeout(request: DeepPartial<MsgTimeout>, metadata?: grpc.Metadata): Promise<MsgTimeoutResponse> {
    return this.rpc.unary(MsgTimeoutDesc, MsgTimeout.fromPartial(request), metadata);
  }
  timeoutOnClose(request: DeepPartial<MsgTimeoutOnClose>, metadata?: grpc.Metadata): Promise<MsgTimeoutOnCloseResponse> {
    return this.rpc.unary(MsgTimeoutOnCloseDesc, MsgTimeoutOnClose.fromPartial(request), metadata);
  }
  acknowledgement(request: DeepPartial<MsgAcknowledgement>, metadata?: grpc.Metadata): Promise<MsgAcknowledgementResponse> {
    return this.rpc.unary(MsgAcknowledgementDesc, MsgAcknowledgement.fromPartial(request), metadata);
  }
}
export const MsgDesc = {
  serviceName: "ibc.core.channel.v1.Msg"
};
export const MsgChannelOpenInitDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelOpenInit",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgChannelOpenInit.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgChannelOpenInitResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgChannelOpenTryDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelOpenTry",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgChannelOpenTry.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgChannelOpenTryResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgChannelOpenAckDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelOpenAck",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgChannelOpenAck.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgChannelOpenAckResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgChannelOpenConfirmDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelOpenConfirm",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgChannelOpenConfirm.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgChannelOpenConfirmResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgChannelCloseInitDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelCloseInit",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgChannelCloseInit.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgChannelCloseInitResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgChannelCloseConfirmDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelCloseConfirm",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgChannelCloseConfirm.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgChannelCloseConfirmResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgRecvPacketDesc: UnaryMethodDefinitionish = {
  methodName: "RecvPacket",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgRecvPacket.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgRecvPacketResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgTimeoutDesc: UnaryMethodDefinitionish = {
  methodName: "Timeout",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgTimeout.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgTimeoutResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgTimeoutOnCloseDesc: UnaryMethodDefinitionish = {
  methodName: "TimeoutOnClose",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgTimeoutOnClose.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgTimeoutOnCloseResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgAcknowledgementDesc: UnaryMethodDefinitionish = {
  methodName: "Acknowledgement",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgAcknowledgement.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgAcknowledgementResponse.decode(data),
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