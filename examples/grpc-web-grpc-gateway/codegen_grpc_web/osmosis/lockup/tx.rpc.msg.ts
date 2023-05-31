import { UnaryMethodDefinitionish } from "../../grpc-web";
import { DeepPartial } from "../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgLockTokens, MsgLockTokensResponse, MsgBeginUnlockingAll, MsgBeginUnlockingAllResponse, MsgBeginUnlocking, MsgBeginUnlockingResponse, MsgExtendLockup, MsgExtendLockupResponse, MsgForceUnlock, MsgForceUnlockResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** LockTokens lock tokens */
  lockTokens(request: DeepPartial<MsgLockTokens>, metadata?: grpc.Metadata): Promise<MsgLockTokensResponse>;
  /** BeginUnlockingAll begin unlocking all tokens */
  beginUnlockingAll(request: DeepPartial<MsgBeginUnlockingAll>, metadata?: grpc.Metadata): Promise<MsgBeginUnlockingAllResponse>;
  /** MsgBeginUnlocking begins unlocking tokens by lock ID */
  beginUnlocking(request: DeepPartial<MsgBeginUnlocking>, metadata?: grpc.Metadata): Promise<MsgBeginUnlockingResponse>;
  /** MsgEditLockup edits the existing lockups by lock ID */
  extendLockup(request: DeepPartial<MsgExtendLockup>, metadata?: grpc.Metadata): Promise<MsgExtendLockupResponse>;
  forceUnlock(request: DeepPartial<MsgForceUnlock>, metadata?: grpc.Metadata): Promise<MsgForceUnlockResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.lockTokens = this.lockTokens.bind(this);
    this.beginUnlockingAll = this.beginUnlockingAll.bind(this);
    this.beginUnlocking = this.beginUnlocking.bind(this);
    this.extendLockup = this.extendLockup.bind(this);
    this.forceUnlock = this.forceUnlock.bind(this);
  }
  lockTokens(request: DeepPartial<MsgLockTokens>, metadata?: grpc.Metadata): Promise<MsgLockTokensResponse> {
    return this.rpc.unary(MsgLockTokensDesc, MsgLockTokens.fromPartial(request), metadata);
  }
  beginUnlockingAll(request: DeepPartial<MsgBeginUnlockingAll>, metadata?: grpc.Metadata): Promise<MsgBeginUnlockingAllResponse> {
    return this.rpc.unary(MsgBeginUnlockingAllDesc, MsgBeginUnlockingAll.fromPartial(request), metadata);
  }
  beginUnlocking(request: DeepPartial<MsgBeginUnlocking>, metadata?: grpc.Metadata): Promise<MsgBeginUnlockingResponse> {
    return this.rpc.unary(MsgBeginUnlockingDesc, MsgBeginUnlocking.fromPartial(request), metadata);
  }
  extendLockup(request: DeepPartial<MsgExtendLockup>, metadata?: grpc.Metadata): Promise<MsgExtendLockupResponse> {
    return this.rpc.unary(MsgExtendLockupDesc, MsgExtendLockup.fromPartial(request), metadata);
  }
  forceUnlock(request: DeepPartial<MsgForceUnlock>, metadata?: grpc.Metadata): Promise<MsgForceUnlockResponse> {
    return this.rpc.unary(MsgForceUnlockDesc, MsgForceUnlock.fromPartial(request), metadata);
  }
}
export const MsgDesc = {
  serviceName: "osmosis.lockup.Msg"
};
export const MsgLockTokensDesc: UnaryMethodDefinitionish = {
  methodName: "LockTokens",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgLockTokens.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgLockTokensResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgBeginUnlockingAllDesc: UnaryMethodDefinitionish = {
  methodName: "BeginUnlockingAll",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgBeginUnlockingAll.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgBeginUnlockingAllResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgBeginUnlockingDesc: UnaryMethodDefinitionish = {
  methodName: "BeginUnlocking",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgBeginUnlocking.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgBeginUnlockingResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgExtendLockupDesc: UnaryMethodDefinitionish = {
  methodName: "ExtendLockup",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgExtendLockup.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgExtendLockupResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgForceUnlockDesc: UnaryMethodDefinitionish = {
  methodName: "ForceUnlock",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgForceUnlock.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgForceUnlockResponse.decode(data),
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