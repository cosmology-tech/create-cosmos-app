import { UnaryMethodDefinitionish } from "../../grpc-web";
import { DeepPartial } from "../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgSuperfluidDelegate, MsgSuperfluidDelegateResponse, MsgSuperfluidUndelegate, MsgSuperfluidUndelegateResponse, MsgSuperfluidUnbondLock, MsgSuperfluidUnbondLockResponse, MsgLockAndSuperfluidDelegate, MsgLockAndSuperfluidDelegateResponse, MsgUnPoolWhitelistedPool, MsgUnPoolWhitelistedPoolResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** Execute superfluid delegation for a lockup */
  superfluidDelegate(request: DeepPartial<MsgSuperfluidDelegate>, metadata?: grpc.Metadata): Promise<MsgSuperfluidDelegateResponse>;
  /** Execute superfluid undelegation for a lockup */
  superfluidUndelegate(request: DeepPartial<MsgSuperfluidUndelegate>, metadata?: grpc.Metadata): Promise<MsgSuperfluidUndelegateResponse>;
  /**
   * For a given lock that is being superfluidly undelegated,
   * also unbond the underlying lock.
   */
  superfluidUnbondLock(request: DeepPartial<MsgSuperfluidUnbondLock>, metadata?: grpc.Metadata): Promise<MsgSuperfluidUnbondLockResponse>;
  /** Execute lockup lock and superfluid delegation in a single msg */
  lockAndSuperfluidDelegate(request: DeepPartial<MsgLockAndSuperfluidDelegate>, metadata?: grpc.Metadata): Promise<MsgLockAndSuperfluidDelegateResponse>;
  unPoolWhitelistedPool(request: DeepPartial<MsgUnPoolWhitelistedPool>, metadata?: grpc.Metadata): Promise<MsgUnPoolWhitelistedPoolResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.superfluidDelegate = this.superfluidDelegate.bind(this);
    this.superfluidUndelegate = this.superfluidUndelegate.bind(this);
    this.superfluidUnbondLock = this.superfluidUnbondLock.bind(this);
    this.lockAndSuperfluidDelegate = this.lockAndSuperfluidDelegate.bind(this);
    this.unPoolWhitelistedPool = this.unPoolWhitelistedPool.bind(this);
  }
  superfluidDelegate(request: DeepPartial<MsgSuperfluidDelegate>, metadata?: grpc.Metadata): Promise<MsgSuperfluidDelegateResponse> {
    return this.rpc.unary(MsgSuperfluidDelegateDesc, MsgSuperfluidDelegate.fromPartial(request), metadata);
  }
  superfluidUndelegate(request: DeepPartial<MsgSuperfluidUndelegate>, metadata?: grpc.Metadata): Promise<MsgSuperfluidUndelegateResponse> {
    return this.rpc.unary(MsgSuperfluidUndelegateDesc, MsgSuperfluidUndelegate.fromPartial(request), metadata);
  }
  superfluidUnbondLock(request: DeepPartial<MsgSuperfluidUnbondLock>, metadata?: grpc.Metadata): Promise<MsgSuperfluidUnbondLockResponse> {
    return this.rpc.unary(MsgSuperfluidUnbondLockDesc, MsgSuperfluidUnbondLock.fromPartial(request), metadata);
  }
  lockAndSuperfluidDelegate(request: DeepPartial<MsgLockAndSuperfluidDelegate>, metadata?: grpc.Metadata): Promise<MsgLockAndSuperfluidDelegateResponse> {
    return this.rpc.unary(MsgLockAndSuperfluidDelegateDesc, MsgLockAndSuperfluidDelegate.fromPartial(request), metadata);
  }
  unPoolWhitelistedPool(request: DeepPartial<MsgUnPoolWhitelistedPool>, metadata?: grpc.Metadata): Promise<MsgUnPoolWhitelistedPoolResponse> {
    return this.rpc.unary(MsgUnPoolWhitelistedPoolDesc, MsgUnPoolWhitelistedPool.fromPartial(request), metadata);
  }
}
export const MsgDesc = {
  serviceName: "osmosis.superfluid.Msg"
};
export const MsgSuperfluidDelegateDesc: UnaryMethodDefinitionish = {
  methodName: "SuperfluidDelegate",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgSuperfluidDelegate.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSuperfluidDelegateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgSuperfluidUndelegateDesc: UnaryMethodDefinitionish = {
  methodName: "SuperfluidUndelegate",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgSuperfluidUndelegate.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSuperfluidUndelegateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgSuperfluidUnbondLockDesc: UnaryMethodDefinitionish = {
  methodName: "SuperfluidUnbondLock",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgSuperfluidUnbondLock.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSuperfluidUnbondLockResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgLockAndSuperfluidDelegateDesc: UnaryMethodDefinitionish = {
  methodName: "LockAndSuperfluidDelegate",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgLockAndSuperfluidDelegate.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgLockAndSuperfluidDelegateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgUnPoolWhitelistedPoolDesc: UnaryMethodDefinitionish = {
  methodName: "UnPoolWhitelistedPool",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgUnPoolWhitelistedPool.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUnPoolWhitelistedPoolResponse.decode(data),
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