import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "akash.deployment.v1beta2";
/** Params defines the parameters for the x/deployment package */
export interface Params {
  deploymentMinDeposit?: Coin;
}
export interface ParamsProtoMsg {
  typeUrl: "/akash.deployment.v1beta2.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the x/deployment package */
export interface ParamsAmino {
  deployment_min_deposit?: CoinAmino;
}
export interface ParamsAminoMsg {
  type: "/akash.deployment.v1beta2.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the x/deployment package */
export interface ParamsSDKType {
  deployment_min_deposit?: CoinSDKType;
}
function createBaseParams(): Params {
  return {
    deploymentMinDeposit: undefined
  };
}
export const Params = {
  typeUrl: "/akash.deployment.v1beta2.Params",
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deploymentMinDeposit !== undefined) {
      Coin.encode(message.deploymentMinDeposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deploymentMinDeposit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      deploymentMinDeposit: isSet(object.deploymentMinDeposit) ? Coin.fromJSON(object.deploymentMinDeposit) : undefined
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.deploymentMinDeposit !== undefined && (obj.deploymentMinDeposit = message.deploymentMinDeposit ? Coin.toJSON(message.deploymentMinDeposit) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.deploymentMinDeposit = object.deploymentMinDeposit !== undefined && object.deploymentMinDeposit !== null ? Coin.fromPartial(object.deploymentMinDeposit) : undefined;
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      deploymentMinDeposit: object.deployment_min_deposit ? Coin.fromSDK(object.deployment_min_deposit) : undefined
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    message.deploymentMinDeposit !== undefined && (obj.deployment_min_deposit = message.deploymentMinDeposit ? Coin.toSDK(message.deploymentMinDeposit) : undefined);
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      deploymentMinDeposit: object?.deployment_min_deposit ? Coin.fromAmino(object.deployment_min_deposit) : undefined
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.deployment_min_deposit = message.deploymentMinDeposit ? Coin.toAmino(message.deploymentMinDeposit) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta2.Params",
      value: Params.encode(message).finish()
    };
  }
};