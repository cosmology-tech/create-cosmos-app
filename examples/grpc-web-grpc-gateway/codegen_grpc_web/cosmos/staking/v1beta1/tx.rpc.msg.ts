import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgCreateValidator, MsgCreateValidatorResponse, MsgEditValidator, MsgEditValidatorResponse, MsgDelegate, MsgDelegateResponse, MsgBeginRedelegate, MsgBeginRedelegateResponse, MsgUndelegate, MsgUndelegateResponse } from "./tx";
/** Msg defines the staking Msg service. */
export interface Msg {
  /** CreateValidator defines a method for creating a new validator. */
  createValidator(request: DeepPartial<MsgCreateValidator>, metadata?: grpc.Metadata): Promise<MsgCreateValidatorResponse>;
  /** EditValidator defines a method for editing an existing validator. */
  editValidator(request: DeepPartial<MsgEditValidator>, metadata?: grpc.Metadata): Promise<MsgEditValidatorResponse>;
  /**
   * Delegate defines a method for performing a delegation of coins
   * from a delegator to a validator.
   */
  delegate(request: DeepPartial<MsgDelegate>, metadata?: grpc.Metadata): Promise<MsgDelegateResponse>;
  /**
   * BeginRedelegate defines a method for performing a redelegation
   * of coins from a delegator and source validator to a destination validator.
   */
  beginRedelegate(request: DeepPartial<MsgBeginRedelegate>, metadata?: grpc.Metadata): Promise<MsgBeginRedelegateResponse>;
  /**
   * Undelegate defines a method for performing an undelegation from a
   * delegate and a validator.
   */
  undelegate(request: DeepPartial<MsgUndelegate>, metadata?: grpc.Metadata): Promise<MsgUndelegateResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createValidator = this.createValidator.bind(this);
    this.editValidator = this.editValidator.bind(this);
    this.delegate = this.delegate.bind(this);
    this.beginRedelegate = this.beginRedelegate.bind(this);
    this.undelegate = this.undelegate.bind(this);
  }
  createValidator(request: DeepPartial<MsgCreateValidator>, metadata?: grpc.Metadata): Promise<MsgCreateValidatorResponse> {
    return this.rpc.unary(MsgCreateValidatorDesc, MsgCreateValidator.fromPartial(request), metadata);
  }
  editValidator(request: DeepPartial<MsgEditValidator>, metadata?: grpc.Metadata): Promise<MsgEditValidatorResponse> {
    return this.rpc.unary(MsgEditValidatorDesc, MsgEditValidator.fromPartial(request), metadata);
  }
  delegate(request: DeepPartial<MsgDelegate>, metadata?: grpc.Metadata): Promise<MsgDelegateResponse> {
    return this.rpc.unary(MsgDelegateDesc, MsgDelegate.fromPartial(request), metadata);
  }
  beginRedelegate(request: DeepPartial<MsgBeginRedelegate>, metadata?: grpc.Metadata): Promise<MsgBeginRedelegateResponse> {
    return this.rpc.unary(MsgBeginRedelegateDesc, MsgBeginRedelegate.fromPartial(request), metadata);
  }
  undelegate(request: DeepPartial<MsgUndelegate>, metadata?: grpc.Metadata): Promise<MsgUndelegateResponse> {
    return this.rpc.unary(MsgUndelegateDesc, MsgUndelegate.fromPartial(request), metadata);
  }
}
export const MsgDesc = {
  serviceName: "cosmos.staking.v1beta1.Msg"
};
export const MsgCreateValidatorDesc: UnaryMethodDefinitionish = {
  methodName: "CreateValidator",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgCreateValidator.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCreateValidatorResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgEditValidatorDesc: UnaryMethodDefinitionish = {
  methodName: "EditValidator",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgEditValidator.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgEditValidatorResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgDelegateDesc: UnaryMethodDefinitionish = {
  methodName: "Delegate",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgDelegate.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgDelegateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgBeginRedelegateDesc: UnaryMethodDefinitionish = {
  methodName: "BeginRedelegate",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgBeginRedelegate.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgBeginRedelegateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgUndelegateDesc: UnaryMethodDefinitionish = {
  methodName: "Undelegate",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgUndelegate.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUndelegateResponse.decode(data),
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