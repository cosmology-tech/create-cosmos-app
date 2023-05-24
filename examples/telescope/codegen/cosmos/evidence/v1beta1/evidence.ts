import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */
export interface Equivocation {
  height: bigint;
  time?: Date | undefined;
  power: bigint;
  consensusAddress: string;
}
/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */
export interface EquivocationSDKType {
  height: bigint;
  time?: Date | undefined;
  power: bigint;
  consensus_address: string;
}
function createBaseEquivocation(): Equivocation {
  return {
    height: BigInt("0"),
    time: undefined,
    power: BigInt("0"),
    consensusAddress: ""
  };
}
export const Equivocation = {
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
          message.height = BigInt(reader.int64().toString());
          break;
        case 2:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.power = BigInt(reader.int64().toString());
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
  fromPartial(object: Partial<Equivocation>): Equivocation {
    const message = createBaseEquivocation();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt("0");
    message.time = object.time ?? undefined;
    message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt("0");
    message.consensusAddress = object.consensusAddress ?? "";
    return message;
  }
};