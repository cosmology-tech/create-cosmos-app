import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, isSet } from "../../../helpers";
/** Params holds parameters for the incentives module */
export interface Params {
  poolCreationFee: Coin[];
}
export interface ParamsProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.Params";
  value: Uint8Array;
}
/** Params holds parameters for the incentives module */
export interface ParamsAmino {
  pool_creation_fee: CoinAmino[];
}
export interface ParamsAminoMsg {
  type: "osmosis/gamm/params";
  value: ParamsAmino;
}
/** Params holds parameters for the incentives module */
export interface ParamsSDKType {
  pool_creation_fee: CoinSDKType[];
}
/** GenesisState defines the gamm module's genesis state. */
export interface GenesisState {
  pools: Any[];
  /** will be renamed to next_pool_id in an upcoming version */
  nextPoolNumber: bigint;
  params: Params | undefined;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the gamm module's genesis state. */
export interface GenesisStateAmino {
  pools: AnyAmino[];
  /** will be renamed to next_pool_id in an upcoming version */
  next_pool_number: string;
  params?: ParamsAmino | undefined;
}
export interface GenesisStateAminoMsg {
  type: "osmosis/gamm/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the gamm module's genesis state. */
export interface GenesisStateSDKType {
  pools: AnySDKType[];
  next_pool_number: bigint;
  params: ParamsSDKType | undefined;
}
function createBaseParams(): Params {
  return {
    poolCreationFee: []
  };
}
export const Params = {
  typeUrl: "/osmosis.gamm.v1beta1.Params",
  aminoType: "osmosis/gamm/params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.poolCreationFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.poolCreationFee.push(Coin.decode(reader, reader.uint32()));
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
      poolCreationFee: Array.isArray(object?.poolCreationFee) ? object.poolCreationFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.poolCreationFee) {
      obj.poolCreationFee = message.poolCreationFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.poolCreationFee = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.poolCreationFee = object.poolCreationFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      poolCreationFee: Array.isArray(object?.pool_creation_fee) ? object.pool_creation_fee.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    if (message.poolCreationFee) {
      obj.pool_creation_fee = message.poolCreationFee.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.pool_creation_fee = [];
    }
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      poolCreationFee: Array.isArray(object?.pool_creation_fee) ? object.pool_creation_fee.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.poolCreationFee) {
      obj.pool_creation_fee = message.poolCreationFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.pool_creation_fee = [];
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "osmosis/gamm/params",
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
      typeUrl: "/osmosis.gamm.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    pools: [],
    nextPoolNumber: BigInt(0),
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.gamm.v1beta1.GenesisState",
  aminoType: "osmosis/gamm/genesis-state",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPoolNumber !== BigInt(0)) {
      writer.uint32(16).uint64(message.nextPoolNumber);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(Any.decode(reader, reader.uint32()));
          break;
        case 2:
          message.nextPoolNumber = reader.uint64();
          break;
        case 3:
          message.params = Params.decode(reader, reader.uint32());
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
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Any.fromJSON(e)) : [],
      nextPoolNumber: isSet(object.nextPoolNumber) ? BigInt(object.nextPoolNumber.toString()) : BigInt(0),
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }
    message.nextPoolNumber !== undefined && (obj.nextPoolNumber = (message.nextPoolNumber || BigInt(0)).toString());
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.pools = object.pools?.map(e => Any.fromPartial(e)) || [];
    message.nextPoolNumber = object.nextPoolNumber !== undefined && object.nextPoolNumber !== null ? BigInt(object.nextPoolNumber.toString()) : BigInt(0);
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Any.fromSDK(e)) : [],
      nextPoolNumber: object?.next_pool_number,
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? Any.toSDK(e) : undefined);
    } else {
      obj.pools = [];
    }
    obj.next_pool_number = message.nextPoolNumber;
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Any.fromAmino(e)) : [],
      nextPoolNumber: BigInt(object.next_pool_number),
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.pools = [];
    }
    obj.next_pool_number = message.nextPoolNumber ? message.nextPoolNumber.toString() : undefined;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "osmosis/gamm/genesis-state",
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
      typeUrl: "/osmosis.gamm.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};