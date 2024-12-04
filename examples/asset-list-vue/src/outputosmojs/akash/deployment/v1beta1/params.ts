import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "akash.deployment.v1beta1";
/** Params defines the parameters for the x/deployment package */
export interface Params {
  deploymentMinDeposit: Coin | undefined;
}
export interface ParamsProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the x/deployment package */
export interface ParamsSDKType {
  deployment_min_deposit: CoinSDKType | undefined;
}
function createBaseParams(): Params {
  return {
    deploymentMinDeposit: Coin.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/akash.deployment.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deploymentMinDeposit !== undefined) {
      Coin.encode(message.deploymentMinDeposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.deploymentMinDeposit !== undefined && (obj.deploymentMinDeposit = message.deploymentMinDeposit ? Coin.toJSON(message.deploymentMinDeposit) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<Partial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.deploymentMinDeposit = object.deploymentMinDeposit !== undefined && object.deploymentMinDeposit !== null ? Coin.fromPartial(object.deploymentMinDeposit) : undefined;
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      deploymentMinDeposit: object.deployment_min_deposit ? Coin.fromSDK(object.deployment_min_deposit) : undefined
    };
  },
  fromSDKJSON(object: any): ParamsSDKType {
    return {
      deployment_min_deposit: isSet(object.deployment_min_deposit) ? Coin.fromSDKJSON(object.deployment_min_deposit) : undefined
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    message.deploymentMinDeposit !== undefined && (obj.deployment_min_deposit = message.deploymentMinDeposit ? Coin.toSDK(message.deploymentMinDeposit) : undefined);
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.deployment_min_deposit !== undefined && object.deployment_min_deposit !== null) {
      message.deploymentMinDeposit = Coin.fromAmino(object.deployment_min_deposit);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.deployment_min_deposit = message.deploymentMinDeposit ? Coin.toAmino(message.deploymentMinDeposit) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "akash/deployment/params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};