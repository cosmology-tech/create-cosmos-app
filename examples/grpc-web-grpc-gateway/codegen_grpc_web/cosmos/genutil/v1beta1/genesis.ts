import * as _m0 from "protobufjs/minimal";
import { bytesFromBase64, base64FromBytes, DeepPartial } from "../../../helpers";
export const protobufPackage = "cosmos.genutil.v1beta1";
/** GenesisState defines the raw genesis transaction in JSON. */
export interface GenesisState {
  /** gen_txs defines the genesis transactions. */
  genTxs: Uint8Array[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cosmos.genutil.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the raw genesis transaction in JSON. */
export interface GenesisStateAmino {
  /** gen_txs defines the genesis transactions. */
  gen_txs: Uint8Array[];
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the raw genesis transaction in JSON. */
export interface GenesisStateSDKType {
  gen_txs: Uint8Array[];
}
function createBaseGenesisState(): GenesisState {
  return {
    genTxs: []
  };
}
export const GenesisState = {
  typeUrl: "/cosmos.genutil.v1beta1.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.genTxs) {
      writer.uint32(10).bytes(v!);
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
        case 1:
          message.genTxs.push(reader.bytes());
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
      genTxs: Array.isArray(object?.genTxs) ? object.genTxs.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.genTxs) {
      obj.genTxs = message.genTxs.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.genTxs = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.genTxs = object.genTxs?.map(e => e) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      genTxs: Array.isArray(object?.gen_txs) ? object.gen_txs.map((e: any) => e) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    if (message.genTxs) {
      obj.gen_txs = message.genTxs.map(e => e);
    } else {
      obj.gen_txs = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      genTxs: Array.isArray(object?.gen_txs) ? object.gen_txs.map((e: any) => e) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.genTxs) {
      obj.gen_txs = message.genTxs.map(e => e);
    } else {
      obj.gen_txs = [];
    }
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
      typeUrl: "/cosmos.genutil.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};