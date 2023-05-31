import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgJoinPool, MsgJoinPoolResponse, MsgExitPool, MsgExitPoolResponse, MsgSwapExactAmountIn, MsgSwapExactAmountInResponse, MsgSwapExactAmountOut, MsgSwapExactAmountOutResponse, MsgJoinSwapExternAmountIn, MsgJoinSwapExternAmountInResponse, MsgJoinSwapShareAmountOut, MsgJoinSwapShareAmountOutResponse, MsgExitSwapExternAmountOut, MsgExitSwapExternAmountOutResponse, MsgExitSwapShareAmountIn, MsgExitSwapShareAmountInResponse } from "./tx";
export interface Msg {
  joinPool(request: DeepPartial<MsgJoinPool>, metadata?: grpc.Metadata): Promise<MsgJoinPoolResponse>;
  exitPool(request: DeepPartial<MsgExitPool>, metadata?: grpc.Metadata): Promise<MsgExitPoolResponse>;
  swapExactAmountIn(request: DeepPartial<MsgSwapExactAmountIn>, metadata?: grpc.Metadata): Promise<MsgSwapExactAmountInResponse>;
  swapExactAmountOut(request: DeepPartial<MsgSwapExactAmountOut>, metadata?: grpc.Metadata): Promise<MsgSwapExactAmountOutResponse>;
  joinSwapExternAmountIn(request: DeepPartial<MsgJoinSwapExternAmountIn>, metadata?: grpc.Metadata): Promise<MsgJoinSwapExternAmountInResponse>;
  joinSwapShareAmountOut(request: DeepPartial<MsgJoinSwapShareAmountOut>, metadata?: grpc.Metadata): Promise<MsgJoinSwapShareAmountOutResponse>;
  exitSwapExternAmountOut(request: DeepPartial<MsgExitSwapExternAmountOut>, metadata?: grpc.Metadata): Promise<MsgExitSwapExternAmountOutResponse>;
  exitSwapShareAmountIn(request: DeepPartial<MsgExitSwapShareAmountIn>, metadata?: grpc.Metadata): Promise<MsgExitSwapShareAmountInResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.joinPool = this.joinPool.bind(this);
    this.exitPool = this.exitPool.bind(this);
    this.swapExactAmountIn = this.swapExactAmountIn.bind(this);
    this.swapExactAmountOut = this.swapExactAmountOut.bind(this);
    this.joinSwapExternAmountIn = this.joinSwapExternAmountIn.bind(this);
    this.joinSwapShareAmountOut = this.joinSwapShareAmountOut.bind(this);
    this.exitSwapExternAmountOut = this.exitSwapExternAmountOut.bind(this);
    this.exitSwapShareAmountIn = this.exitSwapShareAmountIn.bind(this);
  }
  joinPool(request: DeepPartial<MsgJoinPool>, metadata?: grpc.Metadata): Promise<MsgJoinPoolResponse> {
    return this.rpc.unary(MsgJoinPoolDesc, MsgJoinPool.fromPartial(request), metadata);
  }
  exitPool(request: DeepPartial<MsgExitPool>, metadata?: grpc.Metadata): Promise<MsgExitPoolResponse> {
    return this.rpc.unary(MsgExitPoolDesc, MsgExitPool.fromPartial(request), metadata);
  }
  swapExactAmountIn(request: DeepPartial<MsgSwapExactAmountIn>, metadata?: grpc.Metadata): Promise<MsgSwapExactAmountInResponse> {
    return this.rpc.unary(MsgSwapExactAmountInDesc, MsgSwapExactAmountIn.fromPartial(request), metadata);
  }
  swapExactAmountOut(request: DeepPartial<MsgSwapExactAmountOut>, metadata?: grpc.Metadata): Promise<MsgSwapExactAmountOutResponse> {
    return this.rpc.unary(MsgSwapExactAmountOutDesc, MsgSwapExactAmountOut.fromPartial(request), metadata);
  }
  joinSwapExternAmountIn(request: DeepPartial<MsgJoinSwapExternAmountIn>, metadata?: grpc.Metadata): Promise<MsgJoinSwapExternAmountInResponse> {
    return this.rpc.unary(MsgJoinSwapExternAmountInDesc, MsgJoinSwapExternAmountIn.fromPartial(request), metadata);
  }
  joinSwapShareAmountOut(request: DeepPartial<MsgJoinSwapShareAmountOut>, metadata?: grpc.Metadata): Promise<MsgJoinSwapShareAmountOutResponse> {
    return this.rpc.unary(MsgJoinSwapShareAmountOutDesc, MsgJoinSwapShareAmountOut.fromPartial(request), metadata);
  }
  exitSwapExternAmountOut(request: DeepPartial<MsgExitSwapExternAmountOut>, metadata?: grpc.Metadata): Promise<MsgExitSwapExternAmountOutResponse> {
    return this.rpc.unary(MsgExitSwapExternAmountOutDesc, MsgExitSwapExternAmountOut.fromPartial(request), metadata);
  }
  exitSwapShareAmountIn(request: DeepPartial<MsgExitSwapShareAmountIn>, metadata?: grpc.Metadata): Promise<MsgExitSwapShareAmountInResponse> {
    return this.rpc.unary(MsgExitSwapShareAmountInDesc, MsgExitSwapShareAmountIn.fromPartial(request), metadata);
  }
}
export const MsgDesc = {
  serviceName: "osmosis.gamm.v1beta1.Msg"
};
export const MsgJoinPoolDesc: UnaryMethodDefinitionish = {
  methodName: "JoinPool",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgJoinPool.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgJoinPoolResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgExitPoolDesc: UnaryMethodDefinitionish = {
  methodName: "ExitPool",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgExitPool.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgExitPoolResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgSwapExactAmountInDesc: UnaryMethodDefinitionish = {
  methodName: "SwapExactAmountIn",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgSwapExactAmountIn.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSwapExactAmountInResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgSwapExactAmountOutDesc: UnaryMethodDefinitionish = {
  methodName: "SwapExactAmountOut",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgSwapExactAmountOut.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSwapExactAmountOutResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgJoinSwapExternAmountInDesc: UnaryMethodDefinitionish = {
  methodName: "JoinSwapExternAmountIn",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgJoinSwapExternAmountIn.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgJoinSwapExternAmountInResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgJoinSwapShareAmountOutDesc: UnaryMethodDefinitionish = {
  methodName: "JoinSwapShareAmountOut",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgJoinSwapShareAmountOut.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgJoinSwapShareAmountOutResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgExitSwapExternAmountOutDesc: UnaryMethodDefinitionish = {
  methodName: "ExitSwapExternAmountOut",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgExitSwapExternAmountOut.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgExitSwapExternAmountOutResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgExitSwapShareAmountInDesc: UnaryMethodDefinitionish = {
  methodName: "ExitSwapShareAmountIn",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgExitSwapShareAmountIn.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgExitSwapShareAmountInResponse.decode(data),
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