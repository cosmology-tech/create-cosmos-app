import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { JsonSafe } from "../../json-safe";
import { DeepPartial } from "../../helpers";
import { ComputedRef } from "vue";
export const protobufPackage = "osmosis.concentratedliquidity";
export interface Params {
  /**
   * authorized_tick_spacing is an array of uint64s that represents the tick
   * spacing values concentrated-liquidity pools can be created with. For
   * example, an authorized_tick_spacing of [1, 10, 30] allows for pools
   * to be created with tick spacing of 1, 10, or 30.
   */
  authorizedTickSpacing: bigint[];
  authorizedSwapFees: string[];
}
export interface ReactiveParams {
  authorizedTickSpacing: ComputedRef<bigint[]>;
  authorizedSwapFees: ComputedRef<string[]>;
}
export interface ParamsProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.Params";
  value: Uint8Array;
}
export interface ParamsSDKType {
  authorized_tick_spacing: bigint[];
  authorized_swap_fees: string[];
}
function createBaseParams(): Params {
  return {
    authorizedTickSpacing: [],
    authorizedSwapFees: []
  };
}
export const Params = {
  typeUrl: "/osmosis.concentratedliquidity.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.authorizedTickSpacing) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.authorizedSwapFees) {
      writer.uint32(18).string(Decimal.fromUserInput(v!, 18).atomics);
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
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.authorizedTickSpacing.push(reader.uint64());
            }
          } else {
            message.authorizedTickSpacing.push(reader.uint64());
          }
          break;
        case 2:
          message.authorizedSwapFees.push(Decimal.fromAtomics(reader.string(), 18).toString());
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
      authorizedTickSpacing: Array.isArray(object?.authorizedTickSpacing) ? object.authorizedTickSpacing.map((e: any) => BigInt(e.toString())) : [],
      authorizedSwapFees: Array.isArray(object?.authorizedSwapFees) ? object.authorizedSwapFees.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    if (message.authorizedTickSpacing) {
      obj.authorizedTickSpacing = message.authorizedTickSpacing.map(e => (e || BigInt(0)).toString());
    } else {
      obj.authorizedTickSpacing = [];
    }
    if (message.authorizedSwapFees) {
      obj.authorizedSwapFees = message.authorizedSwapFees.map(e => e);
    } else {
      obj.authorizedSwapFees = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.authorizedTickSpacing = object.authorizedTickSpacing?.map(e => BigInt(e.toString())) || [];
    message.authorizedSwapFees = object.authorizedSwapFees?.map(e => e) || [];
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      authorizedTickSpacing: Array.isArray(object?.authorized_tick_spacing) ? object.authorized_tick_spacing.map((e: any) => e) : [],
      authorizedSwapFees: Array.isArray(object?.authorized_swap_fees) ? object.authorized_swap_fees.map((e: any) => e) : []
    };
  },
  fromSDKJSON(object: any): ParamsSDKType {
    return {
      authorized_tick_spacing: Array.isArray(object?.authorized_tick_spacing) ? object.authorized_tick_spacing.map((e: any) => BigInt(e.toString())) : [],
      authorized_swap_fees: Array.isArray(object?.authorized_swap_fees) ? object.authorized_swap_fees.map((e: any) => String(e)) : []
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    if (message.authorizedTickSpacing) {
      obj.authorized_tick_spacing = message.authorizedTickSpacing.map(e => e);
    } else {
      obj.authorized_tick_spacing = [];
    }
    if (message.authorizedSwapFees) {
      obj.authorized_swap_fees = message.authorizedSwapFees.map(e => e);
    } else {
      obj.authorized_swap_fees = [];
    }
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.authorizedTickSpacing = object.authorized_tick_spacing?.map(e => BigInt(e)) || [];
    message.authorizedSwapFees = object.authorized_swap_fees?.map(e => e) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.authorizedTickSpacing) {
      obj.authorized_tick_spacing = message.authorizedTickSpacing.map(e => e.toString());
    } else {
      obj.authorized_tick_spacing = message.authorizedTickSpacing;
    }
    if (message.authorizedSwapFees) {
      obj.authorized_swap_fees = message.authorizedSwapFees.map(e => e);
    } else {
      obj.authorized_swap_fees = message.authorizedSwapFees;
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/params",
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
      typeUrl: "/osmosis.concentratedliquidity.Params",
      value: Params.encode(message).finish()
    };
  }
};