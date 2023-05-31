import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgSetWithdrawAddress, MsgSetWithdrawAddressResponse, MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardResponse, MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionResponse, MsgFundCommunityPool, MsgFundCommunityPoolResponse } from "./tx";
/** Msg defines the distribution Msg service. */
export interface Msg {
  /**
   * SetWithdrawAddress defines a method to change the withdraw address
   * for a delegator (or validator self-delegation).
   */
  setWithdrawAddress(request: DeepPartial<MsgSetWithdrawAddress>, metadata?: grpc.Metadata): Promise<MsgSetWithdrawAddressResponse>;
  /**
   * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
   * from a single validator.
   */
  withdrawDelegatorReward(request: DeepPartial<MsgWithdrawDelegatorReward>, metadata?: grpc.Metadata): Promise<MsgWithdrawDelegatorRewardResponse>;
  /**
   * WithdrawValidatorCommission defines a method to withdraw the
   * full commission to the validator address.
   */
  withdrawValidatorCommission(request: DeepPartial<MsgWithdrawValidatorCommission>, metadata?: grpc.Metadata): Promise<MsgWithdrawValidatorCommissionResponse>;
  /**
   * FundCommunityPool defines a method to allow an account to directly
   * fund the community pool.
   */
  fundCommunityPool(request: DeepPartial<MsgFundCommunityPool>, metadata?: grpc.Metadata): Promise<MsgFundCommunityPoolResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.setWithdrawAddress = this.setWithdrawAddress.bind(this);
    this.withdrawDelegatorReward = this.withdrawDelegatorReward.bind(this);
    this.withdrawValidatorCommission = this.withdrawValidatorCommission.bind(this);
    this.fundCommunityPool = this.fundCommunityPool.bind(this);
  }
  setWithdrawAddress(request: DeepPartial<MsgSetWithdrawAddress>, metadata?: grpc.Metadata): Promise<MsgSetWithdrawAddressResponse> {
    return this.rpc.unary(MsgSetWithdrawAddressDesc, MsgSetWithdrawAddress.fromPartial(request), metadata);
  }
  withdrawDelegatorReward(request: DeepPartial<MsgWithdrawDelegatorReward>, metadata?: grpc.Metadata): Promise<MsgWithdrawDelegatorRewardResponse> {
    return this.rpc.unary(MsgWithdrawDelegatorRewardDesc, MsgWithdrawDelegatorReward.fromPartial(request), metadata);
  }
  withdrawValidatorCommission(request: DeepPartial<MsgWithdrawValidatorCommission>, metadata?: grpc.Metadata): Promise<MsgWithdrawValidatorCommissionResponse> {
    return this.rpc.unary(MsgWithdrawValidatorCommissionDesc, MsgWithdrawValidatorCommission.fromPartial(request), metadata);
  }
  fundCommunityPool(request: DeepPartial<MsgFundCommunityPool>, metadata?: grpc.Metadata): Promise<MsgFundCommunityPoolResponse> {
    return this.rpc.unary(MsgFundCommunityPoolDesc, MsgFundCommunityPool.fromPartial(request), metadata);
  }
}
export const MsgDesc = {
  serviceName: "cosmos.distribution.v1beta1.Msg"
};
export const MsgSetWithdrawAddressDesc: UnaryMethodDefinitionish = {
  methodName: "SetWithdrawAddress",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgSetWithdrawAddress.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetWithdrawAddressResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgWithdrawDelegatorRewardDesc: UnaryMethodDefinitionish = {
  methodName: "WithdrawDelegatorReward",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgWithdrawDelegatorReward.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgWithdrawDelegatorRewardResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgWithdrawValidatorCommissionDesc: UnaryMethodDefinitionish = {
  methodName: "WithdrawValidatorCommission",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgWithdrawValidatorCommission.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgWithdrawValidatorCommissionResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgFundCommunityPoolDesc: UnaryMethodDefinitionish = {
  methodName: "FundCommunityPool",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgFundCommunityPool.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgFundCommunityPoolResponse.decode(data),
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