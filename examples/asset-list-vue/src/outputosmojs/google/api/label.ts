import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "google.api";
/** Value types that can be used as label values. */
export enum LabelDescriptor_ValueType {
  /** STRING - A variable-length string. This is the default. */
  STRING = 0,
  /** BOOL - Boolean; true or false. */
  BOOL = 1,
  /** INT64 - A 64-bit signed integer. */
  INT64 = 2,
  UNRECOGNIZED = -1,
}
export const LabelDescriptor_ValueTypeSDKType = LabelDescriptor_ValueType;
export function labelDescriptor_ValueTypeFromJSON(object: any): LabelDescriptor_ValueType {
  switch (object) {
    case 0:
    case "STRING":
      return LabelDescriptor_ValueType.STRING;
    case 1:
    case "BOOL":
      return LabelDescriptor_ValueType.BOOL;
    case 2:
    case "INT64":
      return LabelDescriptor_ValueType.INT64;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LabelDescriptor_ValueType.UNRECOGNIZED;
  }
}
export function labelDescriptor_ValueTypeToJSON(object: LabelDescriptor_ValueType): string {
  switch (object) {
    case LabelDescriptor_ValueType.STRING:
      return "STRING";
    case LabelDescriptor_ValueType.BOOL:
      return "BOOL";
    case LabelDescriptor_ValueType.INT64:
      return "INT64";
    case LabelDescriptor_ValueType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** A description of a label. */
export interface LabelDescriptor {
  /** The label key. */
  key: string;
  /** The type of data that can be assigned to the label. */
  valueType: LabelDescriptor_ValueType;
  /** A human-readable description for the label. */
  description: string;
}
export interface LabelDescriptorProtoMsg {
  typeUrl: "/google.api.LabelDescriptor";
  value: Uint8Array;
}
/** A description of a label. */
export interface LabelDescriptorSDKType {
  key: string;
  value_type: LabelDescriptor_ValueType;
  description: string;
}
function createBaseLabelDescriptor(): LabelDescriptor {
  return {
    key: "",
    valueType: 0,
    description: ""
  };
}
export const LabelDescriptor = {
  typeUrl: "/google.api.LabelDescriptor",
  encode(message: LabelDescriptor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.valueType !== 0) {
      writer.uint32(16).int32(message.valueType);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LabelDescriptor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLabelDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.valueType = (reader.int32() as any);
          break;
        case 3:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LabelDescriptor {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      valueType: isSet(object.valueType) ? labelDescriptor_ValueTypeFromJSON(object.valueType) : -1,
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  toJSON(message: LabelDescriptor): JsonSafe<LabelDescriptor> {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.valueType !== undefined && (obj.valueType = labelDescriptor_ValueTypeToJSON(message.valueType));
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },
  fromPartial(object: DeepPartial<LabelDescriptor>): LabelDescriptor {
    const message = createBaseLabelDescriptor();
    message.key = object.key ?? "";
    message.valueType = object.valueType ?? 0;
    message.description = object.description ?? "";
    return message;
  },
  fromSDK(object: LabelDescriptorSDKType): LabelDescriptor {
    return {
      key: object?.key,
      valueType: isSet(object.value_type) ? labelDescriptor_ValueTypeFromJSON(object.value_type) : -1,
      description: object?.description
    };
  },
  fromSDKJSON(object: any): LabelDescriptorSDKType {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value_type: isSet(object.value_type) ? labelDescriptor_ValueTypeFromJSON(object.value_type) : -1,
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  toSDK(message: LabelDescriptor): LabelDescriptorSDKType {
    const obj: any = {};
    obj.key = message.key;
    message.valueType !== undefined && (obj.value_type = labelDescriptor_ValueTypeToJSON(message.valueType));
    obj.description = message.description;
    return obj;
  },
  fromAmino(object: LabelDescriptorAmino): LabelDescriptor {
    const message = createBaseLabelDescriptor();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value_type !== undefined && object.value_type !== null) {
      message.valueType = object.value_type;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message: LabelDescriptor): LabelDescriptorAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value_type = message.valueType === 0 ? undefined : message.valueType;
    obj.description = message.description === "" ? undefined : message.description;
    return obj;
  },
  fromAminoMsg(object: LabelDescriptorAminoMsg): LabelDescriptor {
    return LabelDescriptor.fromAmino(object.value);
  },
  fromProtoMsg(message: LabelDescriptorProtoMsg): LabelDescriptor {
    return LabelDescriptor.decode(message.value);
  },
  toProto(message: LabelDescriptor): Uint8Array {
    return LabelDescriptor.encode(message).finish();
  },
  toProtoMsg(message: LabelDescriptor): LabelDescriptorProtoMsg {
    return {
      typeUrl: "/google.api.LabelDescriptor",
      value: LabelDescriptor.encode(message).finish()
    };
  }
};