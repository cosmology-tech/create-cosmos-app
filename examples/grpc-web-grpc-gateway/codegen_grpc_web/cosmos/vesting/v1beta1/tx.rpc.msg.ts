import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgCreateVestingAccount, MsgCreateVestingAccountResponse, MsgCreatePermanentLockedAccount, MsgCreatePermanentLockedAccountResponse, MsgCreatePeriodicVestingAccount, MsgCreatePeriodicVestingAccountResponse } from "./tx";
/** Msg defines the bank Msg service. */
export interface Msg {
  /**
   * CreateVestingAccount defines a method that enables creating a vesting
   * account.
   */
  createVestingAccount(request: DeepPartial<MsgCreateVestingAccount>, metadata?: grpc.Metadata): Promise<MsgCreateVestingAccountResponse>;
  /**
   * CreatePermanentLockedAccount defines a method that enables creating a permanent
   * locked account.
   */
  createPermanentLockedAccount(request: DeepPartial<MsgCreatePermanentLockedAccount>, metadata?: grpc.Metadata): Promise<MsgCreatePermanentLockedAccountResponse>;
  /**
   * CreatePeriodicVestingAccount defines a method that enables creating a
   * periodic vesting account.
   */
  createPeriodicVestingAccount(request: DeepPartial<MsgCreatePeriodicVestingAccount>, metadata?: grpc.Metadata): Promise<MsgCreatePeriodicVestingAccountResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createVestingAccount = this.createVestingAccount.bind(this);
    this.createPermanentLockedAccount = this.createPermanentLockedAccount.bind(this);
    this.createPeriodicVestingAccount = this.createPeriodicVestingAccount.bind(this);
  }
  createVestingAccount(request: DeepPartial<MsgCreateVestingAccount>, metadata?: grpc.Metadata): Promise<MsgCreateVestingAccountResponse> {
    return this.rpc.unary(MsgCreateVestingAccountDesc, MsgCreateVestingAccount.fromPartial(request), metadata);
  }
  createPermanentLockedAccount(request: DeepPartial<MsgCreatePermanentLockedAccount>, metadata?: grpc.Metadata): Promise<MsgCreatePermanentLockedAccountResponse> {
    return this.rpc.unary(MsgCreatePermanentLockedAccountDesc, MsgCreatePermanentLockedAccount.fromPartial(request), metadata);
  }
  createPeriodicVestingAccount(request: DeepPartial<MsgCreatePeriodicVestingAccount>, metadata?: grpc.Metadata): Promise<MsgCreatePeriodicVestingAccountResponse> {
    return this.rpc.unary(MsgCreatePeriodicVestingAccountDesc, MsgCreatePeriodicVestingAccount.fromPartial(request), metadata);
  }
}
export const MsgDesc = {
  serviceName: "cosmos.vesting.v1beta1.Msg"
};
export const MsgCreateVestingAccountDesc: UnaryMethodDefinitionish = {
  methodName: "CreateVestingAccount",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgCreateVestingAccount.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCreateVestingAccountResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgCreatePermanentLockedAccountDesc: UnaryMethodDefinitionish = {
  methodName: "CreatePermanentLockedAccount",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgCreatePermanentLockedAccount.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCreatePermanentLockedAccountResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgCreatePeriodicVestingAccountDesc: UnaryMethodDefinitionish = {
  methodName: "CreatePeriodicVestingAccount",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgCreatePeriodicVestingAccount.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCreatePeriodicVestingAccountResponse.decode(data),
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