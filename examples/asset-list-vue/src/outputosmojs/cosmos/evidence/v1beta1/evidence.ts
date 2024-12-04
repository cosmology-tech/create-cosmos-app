import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "cosmos.evidence.v1beta1";
/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */
export interface Equivocation {
  height: bigint;
  time: Date;
  power: bigint;
  consensusAddress: string;
}
export interface EquivocationProtoMsg {
  typeUrl: "/cosmos.evidence.v1beta1.Equivocation";
  value: Uint8Array;
}
/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */
export interface EquivocationSDKType {
  height: bigint;
  time: Date;
  power: bigint;
  consensus_address: string;
}
function createBaseEquivocation(): Equivocation {
  return {
    height: BigInt(0),
    time: new Date(),
    power: BigInt(0),
    consensusAddress: ""
  };
}
export const Equivocation = {
  typeUrl: "/cosmos.evidence.v1beta1.Equivocation",
  encode(message: Equivocation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(18).fork()).ldelim();
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(24).int64(message.power);
    }
    if (message.consensusAddress !== "") {
      writer.uint32(34).string(message.consensusAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Equivocation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquivocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.power = reader.int64();
          break;
        case 4:
          message.consensusAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Equivocation {
    return {
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      time: isSet(object.time) ? new Date(object.time) : undefined,
      power: isSet(object.power) ? BigInt(object.power.toString()) : BigInt(0),
      consensusAddress: isSet(object.consensusAddress) ? String(object.consensusAddress) : ""
    };
  },
  toJSON(message: Equivocation): JsonSafe<Equivocation> {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.power !== undefined && (obj.power = (message.power || BigInt(0)).toString());
    message.consensusAddress !== undefined && (obj.consensusAddress = message.consensusAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<Equivocation>): Equivocation {
    const message = createBaseEquivocation();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.time = object.time ?? undefined;
    message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
    message.consensusAddress = object.consensusAddress ?? "";
    return message;
  },
  fromSDK(object: EquivocationSDKType): Equivocation {
    return {
      height: object?.height,
      time: object.time ?? undefined,
      power: object?.power,
      consensusAddress: object?.consensus_address
    };
  },
  fromSDKJSON(object: any): EquivocationSDKType {
    return {
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      time: isSet(object.time) ? new Date(object.time) : undefined,
      power: isSet(object.power) ? BigInt(object.power.toString()) : BigInt(0),
      consensus_address: isSet(object.consensus_address) ? String(object.consensus_address) : ""
    };
  },
  toSDK(message: Equivocation): EquivocationSDKType {
    const obj: any = {};
    obj.height = message.height;
    message.time !== undefined && (obj.time = message.time ?? undefined);
    obj.power = message.power;
    obj.consensus_address = message.consensusAddress;
    return obj;
  },
  fromAmino(object: EquivocationAmino): Equivocation {
    const message = createBaseEquivocation();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = fromTimestamp(Timestamp.fromAmino(object.time));
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = BigInt(object.power);
    }
    if (object.consensus_address !== undefined && object.consensus_address !== null) {
      message.consensusAddress = object.consensus_address;
    }
    return message;
  },
  toAmino(message: Equivocation): EquivocationAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : undefined;
    obj.power = message.power !== BigInt(0) ? message.power?.toString() : undefined;
    obj.consensus_address = message.consensusAddress === "" ? undefined : message.consensusAddress;
    return obj;
  },
  fromAminoMsg(object: EquivocationAminoMsg): Equivocation {
    return Equivocation.fromAmino(object.value);
  },
  toAminoMsg(message: Equivocation): EquivocationAminoMsg {
    return {
      type: "cosmos-sdk/Equivocation",
      value: Equivocation.toAmino(message)
    };
  },
  fromProtoMsg(message: EquivocationProtoMsg): Equivocation {
    return Equivocation.decode(message.value);
  },
  toProto(message: Equivocation): Uint8Array {
    return Equivocation.encode(message).finish();
  },
  toProtoMsg(message: Equivocation): EquivocationProtoMsg {
    return {
      typeUrl: "/cosmos.evidence.v1beta1.Equivocation",
      value: Equivocation.encode(message).finish()
    };
  }
};