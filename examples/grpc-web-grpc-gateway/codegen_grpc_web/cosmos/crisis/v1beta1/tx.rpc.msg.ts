import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgVerifyInvariant, MsgVerifyInvariantResponse } from "./tx";
/** Msg defines the bank Msg service. */
export interface Msg {
  /** VerifyInvariant defines a method to verify a particular invariance. */
  verifyInvariant(request: DeepPartial<MsgVerifyInvariant>, metadata?: grpc.Metadata): Promise<MsgVerifyInvariantResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.verifyInvariant = this.verifyInvariant.bind(this);
  }
  verifyInvariant(request: DeepPartial<MsgVerifyInvariant>, metadata?: grpc.Metadata): Promise<MsgVerifyInvariantResponse> {
    return this.rpc.unary(MsgVerifyInvariantDesc, MsgVerifyInvariant.fromPartial(request), metadata);
  }
}
export const MsgDesc = {
  serviceName: "cosmos.crisis.v1beta1.Msg"
};
export const MsgVerifyInvariantDesc: UnaryMethodDefinitionish = {
  methodName: "VerifyInvariant",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgVerifyInvariant.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgVerifyInvariantResponse.decode(data),
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