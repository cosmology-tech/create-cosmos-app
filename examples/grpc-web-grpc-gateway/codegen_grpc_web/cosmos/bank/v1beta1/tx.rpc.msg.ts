import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgSend, MsgSendResponse, MsgMultiSend, MsgMultiSendResponse } from "./tx";
/** Msg defines the bank Msg service. */
export interface Msg {
  /** Send defines a method for sending coins from one account to another account. */
  send(request: DeepPartial<MsgSend>, metadata?: grpc.Metadata): Promise<MsgSendResponse>;
  /** MultiSend defines a method for sending coins from some accounts to other accounts. */
  multiSend(request: DeepPartial<MsgMultiSend>, metadata?: grpc.Metadata): Promise<MsgMultiSendResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.send = this.send.bind(this);
    this.multiSend = this.multiSend.bind(this);
  }
  send(request: DeepPartial<MsgSend>, metadata?: grpc.Metadata): Promise<MsgSendResponse> {
    return this.rpc.unary(MsgSendDesc, MsgSend.fromPartial(request), metadata);
  }
  multiSend(request: DeepPartial<MsgMultiSend>, metadata?: grpc.Metadata): Promise<MsgMultiSendResponse> {
    return this.rpc.unary(MsgMultiSendDesc, MsgMultiSend.fromPartial(request), metadata);
  }
}
export const MsgDesc = {
  serviceName: "cosmos.bank.v1beta1.Msg"
};
export const MsgSendDesc: UnaryMethodDefinitionish = {
  methodName: "Send",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgSend.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSendResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgMultiSendDesc: UnaryMethodDefinitionish = {
  methodName: "MultiSend",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgMultiSend.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgMultiSendResponse.decode(data),
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