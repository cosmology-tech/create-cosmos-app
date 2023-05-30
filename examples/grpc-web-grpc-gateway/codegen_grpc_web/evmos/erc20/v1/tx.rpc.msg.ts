import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgConvertCoin, MsgConvertCoinResponse, MsgConvertERC20, MsgConvertERC20Response } from "./tx";
/** Msg defines the erc20 Msg service. */
export interface Msg {
  /**
   * ConvertCoin mints a ERC20 representation of the native Cosmos coin denom
   * that is registered on the token mapping.
   */
  convertCoin(request: DeepPartial<MsgConvertCoin>, metadata?: grpc.Metadata): Promise<MsgConvertCoinResponse>;
  /**
   * ConvertERC20 mints a native Cosmos coin representation of the ERC20 token
   * contract that is registered on the token mapping.
   */
  convertERC20(request: DeepPartial<MsgConvertERC20>, metadata?: grpc.Metadata): Promise<MsgConvertERC20Response>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.convertCoin = this.convertCoin.bind(this);
    this.convertERC20 = this.convertERC20.bind(this);
  }
  convertCoin(request: DeepPartial<MsgConvertCoin>, metadata?: grpc.Metadata): Promise<MsgConvertCoinResponse> {
    return this.rpc.unary(MsgConvertCoinDesc, MsgConvertCoin.fromPartial(request), metadata);
  }
  convertERC20(request: DeepPartial<MsgConvertERC20>, metadata?: grpc.Metadata): Promise<MsgConvertERC20Response> {
    return this.rpc.unary(MsgConvertERC20Desc, MsgConvertERC20.fromPartial(request), metadata);
  }
}
export const MsgDesc = {
  serviceName: "evmos.erc20.v1.Msg"
};
export const MsgConvertCoinDesc: UnaryMethodDefinitionish = {
  methodName: "ConvertCoin",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgConvertCoin.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgConvertCoinResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgConvertERC20Desc: UnaryMethodDefinitionish = {
  methodName: "ConvertERC20",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgConvertERC20.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgConvertERC20Response.decode(data),
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