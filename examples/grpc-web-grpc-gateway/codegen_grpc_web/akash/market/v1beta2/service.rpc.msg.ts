import { MsgCreateBid, MsgCreateBidResponse, MsgCloseBid, MsgCloseBidResponse } from "./bid";
import { MsgWithdrawLease, MsgWithdrawLeaseResponse, MsgCreateLease, MsgCreateLeaseResponse, MsgCloseLease, MsgCloseLeaseResponse } from "./lease";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
/** Msg defines the market Msg service */
export interface Msg {
  /** CreateBid defines a method to create a bid given proper inputs. */
  createBid(request: DeepPartial<MsgCreateBid>, metadata?: grpc.Metadata): Promise<MsgCreateBidResponse>;
  /** CloseBid defines a method to close a bid given proper inputs. */
  closeBid(request: DeepPartial<MsgCloseBid>, metadata?: grpc.Metadata): Promise<MsgCloseBidResponse>;
  /** WithdrawLease withdraws accrued funds from the lease payment */
  withdrawLease(request: DeepPartial<MsgWithdrawLease>, metadata?: grpc.Metadata): Promise<MsgWithdrawLeaseResponse>;
  /** CreateLease creates a new lease */
  createLease(request: DeepPartial<MsgCreateLease>, metadata?: grpc.Metadata): Promise<MsgCreateLeaseResponse>;
  /** CloseLease defines a method to close an order given proper inputs. */
  closeLease(request: DeepPartial<MsgCloseLease>, metadata?: grpc.Metadata): Promise<MsgCloseLeaseResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createBid = this.createBid.bind(this);
    this.closeBid = this.closeBid.bind(this);
    this.withdrawLease = this.withdrawLease.bind(this);
    this.createLease = this.createLease.bind(this);
    this.closeLease = this.closeLease.bind(this);
  }
  createBid(request: DeepPartial<MsgCreateBid>, metadata?: grpc.Metadata): Promise<MsgCreateBidResponse> {
    return this.rpc.unary(MsgCreateBidDesc, MsgCreateBid.fromPartial(request), metadata);
  }
  closeBid(request: DeepPartial<MsgCloseBid>, metadata?: grpc.Metadata): Promise<MsgCloseBidResponse> {
    return this.rpc.unary(MsgCloseBidDesc, MsgCloseBid.fromPartial(request), metadata);
  }
  withdrawLease(request: DeepPartial<MsgWithdrawLease>, metadata?: grpc.Metadata): Promise<MsgWithdrawLeaseResponse> {
    return this.rpc.unary(MsgWithdrawLeaseDesc, MsgWithdrawLease.fromPartial(request), metadata);
  }
  createLease(request: DeepPartial<MsgCreateLease>, metadata?: grpc.Metadata): Promise<MsgCreateLeaseResponse> {
    return this.rpc.unary(MsgCreateLeaseDesc, MsgCreateLease.fromPartial(request), metadata);
  }
  closeLease(request: DeepPartial<MsgCloseLease>, metadata?: grpc.Metadata): Promise<MsgCloseLeaseResponse> {
    return this.rpc.unary(MsgCloseLeaseDesc, MsgCloseLease.fromPartial(request), metadata);
  }
}
export const MsgDesc = {
  serviceName: "akash.market.v1beta2.Msg"
};
export const MsgCreateBidDesc: UnaryMethodDefinitionish = {
  methodName: "CreateBid",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgCreateBid.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCreateBidResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgCloseBidDesc: UnaryMethodDefinitionish = {
  methodName: "CloseBid",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgCloseBid.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCloseBidResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgWithdrawLeaseDesc: UnaryMethodDefinitionish = {
  methodName: "WithdrawLease",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgWithdrawLease.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgWithdrawLeaseResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgCreateLeaseDesc: UnaryMethodDefinitionish = {
  methodName: "CreateLease",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgCreateLease.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCreateLeaseResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgCloseLeaseDesc: UnaryMethodDefinitionish = {
  methodName: "CloseLease",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgCloseLease.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCloseLeaseResponse.decode(data),
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