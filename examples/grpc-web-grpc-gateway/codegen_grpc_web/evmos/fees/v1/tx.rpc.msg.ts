import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgRegisterDevFeeInfo, MsgRegisterDevFeeInfoResponse, MsgCancelDevFeeInfo, MsgCancelDevFeeInfoResponse, MsgUpdateDevFeeInfo, MsgUpdateDevFeeInfoResponse } from "./tx";
/** Msg defines the fees Msg service. */
export interface Msg {
  /**
   * RegisterDevFeeInfo is used by a deployer to register a new contract for
   * receiving transaction fees
   */
  registerDevFeeInfo(request: DeepPartial<MsgRegisterDevFeeInfo>, metadata?: grpc.Metadata): Promise<MsgRegisterDevFeeInfoResponse>;
  /**
   * CancelDevFeeInfo is used by a deployer to cancel a registered contract
   * and stop receiving transaction fees
   */
  cancelDevFeeInfo(request: DeepPartial<MsgCancelDevFeeInfo>, metadata?: grpc.Metadata): Promise<MsgCancelDevFeeInfoResponse>;
  /** UpdateDevFeeInfo is used by a deployer to update the withdraw address */
  updateDevFeeInfo(request: DeepPartial<MsgUpdateDevFeeInfo>, metadata?: grpc.Metadata): Promise<MsgUpdateDevFeeInfoResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.registerDevFeeInfo = this.registerDevFeeInfo.bind(this);
    this.cancelDevFeeInfo = this.cancelDevFeeInfo.bind(this);
    this.updateDevFeeInfo = this.updateDevFeeInfo.bind(this);
  }
  registerDevFeeInfo(request: DeepPartial<MsgRegisterDevFeeInfo>, metadata?: grpc.Metadata): Promise<MsgRegisterDevFeeInfoResponse> {
    return this.rpc.unary(MsgRegisterDevFeeInfoDesc, MsgRegisterDevFeeInfo.fromPartial(request), metadata);
  }
  cancelDevFeeInfo(request: DeepPartial<MsgCancelDevFeeInfo>, metadata?: grpc.Metadata): Promise<MsgCancelDevFeeInfoResponse> {
    return this.rpc.unary(MsgCancelDevFeeInfoDesc, MsgCancelDevFeeInfo.fromPartial(request), metadata);
  }
  updateDevFeeInfo(request: DeepPartial<MsgUpdateDevFeeInfo>, metadata?: grpc.Metadata): Promise<MsgUpdateDevFeeInfoResponse> {
    return this.rpc.unary(MsgUpdateDevFeeInfoDesc, MsgUpdateDevFeeInfo.fromPartial(request), metadata);
  }
}
export const MsgDesc = {
  serviceName: "evmos.fees.v1.Msg"
};
export const MsgRegisterDevFeeInfoDesc: UnaryMethodDefinitionish = {
  methodName: "RegisterDevFeeInfo",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgRegisterDevFeeInfo.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgRegisterDevFeeInfoResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgCancelDevFeeInfoDesc: UnaryMethodDefinitionish = {
  methodName: "CancelDevFeeInfo",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgCancelDevFeeInfo.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCancelDevFeeInfoResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgUpdateDevFeeInfoDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateDevFeeInfo",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgUpdateDevFeeInfo.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpdateDevFeeInfoResponse.decode(data),
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