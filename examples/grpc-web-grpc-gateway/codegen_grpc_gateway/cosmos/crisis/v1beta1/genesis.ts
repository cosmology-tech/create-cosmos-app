import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "cosmos.crisis.v1beta1";
/** GenesisState defines the crisis module's genesis state. */
export interface GenesisState {
  /**
   * constant_fee is the fee used to verify the invariant in the crisis
   * module.
   */
  constantFee?: Coin;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cosmos.crisis.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the crisis module's genesis state. */
export interface GenesisStateAmino {
  /**
   * constant_fee is the fee used to verify the invariant in the crisis
   * module.
   */
  constant_fee?: CoinAmino;
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the crisis module's genesis state. */
export interface GenesisStateSDKType {
  constant_fee?: CoinSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    constantFee: undefined
  };
}
export const GenesisState = {
  typeUrl: "/cosmos.crisis.v1beta1.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.constantFee !== undefined) {
      Coin.encode(message.constantFee, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.constantFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      constantFee: isSet(object.constantFee) ? Coin.fromJSON(object.constantFee) : undefined
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.constantFee !== undefined && (obj.constantFee = message.constantFee ? Coin.toJSON(message.constantFee) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.constantFee = object.constantFee !== undefined && object.constantFee !== null ? Coin.fromPartial(object.constantFee) : undefined;
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      constantFee: object.constant_fee ? Coin.fromSDK(object.constant_fee) : undefined
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.constantFee !== undefined && (obj.constant_fee = message.constantFee ? Coin.toSDK(message.constantFee) : undefined);
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      constantFee: object?.constant_fee ? Coin.fromAmino(object.constant_fee) : undefined
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.constant_fee = message.constantFee ? Coin.toAmino(message.constantFee) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/cosmos.crisis.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};