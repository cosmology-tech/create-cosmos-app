import { BinaryReader, BinaryWriter } from "../binary";
import { isSet, DeepPartial } from "../helpers";
import { GlobalDecoderRegistry } from "../registry";
export const protobufPackage = "cosmos_proto";
export enum ScalarType {
  SCALAR_TYPE_UNSPECIFIED = 0,
  SCALAR_TYPE_STRING = 1,
  SCALAR_TYPE_BYTES = 2,
  UNRECOGNIZED = -1,
}
export const ScalarTypeSDKType = ScalarType;
export const ScalarTypeAmino = ScalarType;
export function scalarTypeFromJSON(object: any): ScalarType {
  switch (object) {
    case 0:
    case "SCALAR_TYPE_UNSPECIFIED":
      return ScalarType.SCALAR_TYPE_UNSPECIFIED;
    case 1:
    case "SCALAR_TYPE_STRING":
      return ScalarType.SCALAR_TYPE_STRING;
    case 2:
    case "SCALAR_TYPE_BYTES":
      return ScalarType.SCALAR_TYPE_BYTES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ScalarType.UNRECOGNIZED;
  }
}
export function scalarTypeToJSON(object: ScalarType): string {
  switch (object) {
    case ScalarType.SCALAR_TYPE_UNSPECIFIED:
      return "SCALAR_TYPE_UNSPECIFIED";
    case ScalarType.SCALAR_TYPE_STRING:
      return "SCALAR_TYPE_STRING";
    case ScalarType.SCALAR_TYPE_BYTES:
      return "SCALAR_TYPE_BYTES";
    case ScalarType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * InterfaceDescriptor describes an interface type to be used with
 * accepts_interface and implements_interface and declared by declare_interface.
 */
export interface InterfaceDescriptor {
  /**
   * name is the name of the interface. It should be a short-name (without
   * a period) such that the fully qualified name of the interface will be
   * package.name, ex. for the package a.b and interface named C, the
   * fully-qualified name will be a.b.C.
   */
  name: string;
  /**
   * description is a human-readable description of the interface and its
   * purpose.
   */
  description: string;
}
export interface InterfaceDescriptorProtoMsg {
  typeUrl: "/cosmos_proto.InterfaceDescriptor";
  value: Uint8Array;
}
/**
 * InterfaceDescriptor describes an interface type to be used with
 * accepts_interface and implements_interface and declared by declare_interface.
 */
export interface InterfaceDescriptorAmino {
  /**
   * name is the name of the interface. It should be a short-name (without
   * a period) such that the fully qualified name of the interface will be
   * package.name, ex. for the package a.b and interface named C, the
   * fully-qualified name will be a.b.C.
   */
  name?: string;
  /**
   * description is a human-readable description of the interface and its
   * purpose.
   */
  description?: string;
}
export interface InterfaceDescriptorAminoMsg {
  type: "/cosmos_proto.InterfaceDescriptor";
  value: InterfaceDescriptorAmino;
}
/**
 * InterfaceDescriptor describes an interface type to be used with
 * accepts_interface and implements_interface and declared by declare_interface.
 */
export interface InterfaceDescriptorSDKType {
  name: string;
  description: string;
}
/**
 * ScalarDescriptor describes an scalar type to be used with
 * the scalar field option and declared by declare_scalar.
 * Scalars extend simple protobuf built-in types with additional
 * syntax and semantics, for instance to represent big integers.
 * Scalars should ideally define an encoding such that there is only one
 * valid syntactical representation for a given semantic meaning,
 * i.e. the encoding should be deterministic.
 */
export interface ScalarDescriptor {
  /**
   * name is the name of the scalar. It should be a short-name (without
   * a period) such that the fully qualified name of the scalar will be
   * package.name, ex. for the package a.b and scalar named C, the
   * fully-qualified name will be a.b.C.
   */
  name: string;
  /**
   * description is a human-readable description of the scalar and its
   * encoding format. For instance a big integer or decimal scalar should
   * specify precisely the expected encoding format.
   */
  description: string;
  /**
   * field_type is the type of field with which this scalar can be used.
   * Scalars can be used with one and only one type of field so that
   * encoding standards and simple and clear. Currently only string and
   * bytes fields are supported for scalars.
   */
  fieldType: ScalarType[];
}
export interface ScalarDescriptorProtoMsg {
  typeUrl: "/cosmos_proto.ScalarDescriptor";
  value: Uint8Array;
}
/**
 * ScalarDescriptor describes an scalar type to be used with
 * the scalar field option and declared by declare_scalar.
 * Scalars extend simple protobuf built-in types with additional
 * syntax and semantics, for instance to represent big integers.
 * Scalars should ideally define an encoding such that there is only one
 * valid syntactical representation for a given semantic meaning,
 * i.e. the encoding should be deterministic.
 */
export interface ScalarDescriptorAmino {
  /**
   * name is the name of the scalar. It should be a short-name (without
   * a period) such that the fully qualified name of the scalar will be
   * package.name, ex. for the package a.b and scalar named C, the
   * fully-qualified name will be a.b.C.
   */
  name?: string;
  /**
   * description is a human-readable description of the scalar and its
   * encoding format. For instance a big integer or decimal scalar should
   * specify precisely the expected encoding format.
   */
  description?: string;
  /**
   * field_type is the type of field with which this scalar can be used.
   * Scalars can be used with one and only one type of field so that
   * encoding standards and simple and clear. Currently only string and
   * bytes fields are supported for scalars.
   */
  field_type?: ScalarType[];
}
export interface ScalarDescriptorAminoMsg {
  type: "/cosmos_proto.ScalarDescriptor";
  value: ScalarDescriptorAmino;
}
/**
 * ScalarDescriptor describes an scalar type to be used with
 * the scalar field option and declared by declare_scalar.
 * Scalars extend simple protobuf built-in types with additional
 * syntax and semantics, for instance to represent big integers.
 * Scalars should ideally define an encoding such that there is only one
 * valid syntactical representation for a given semantic meaning,
 * i.e. the encoding should be deterministic.
 */
export interface ScalarDescriptorSDKType {
  name: string;
  description: string;
  field_type: ScalarType[];
}
function createBaseInterfaceDescriptor(): InterfaceDescriptor {
  return {
    name: "",
    description: ""
  };
}
export const InterfaceDescriptor = {
  typeUrl: "/cosmos_proto.InterfaceDescriptor",
  is(o: any): o is InterfaceDescriptor {
    return o && (o.$typeUrl === InterfaceDescriptor.typeUrl || typeof o.name === "string" && typeof o.description === "string");
  },
  isSDK(o: any): o is InterfaceDescriptorSDKType {
    return o && (o.$typeUrl === InterfaceDescriptor.typeUrl || typeof o.name === "string" && typeof o.description === "string");
  },
  isAmino(o: any): o is InterfaceDescriptorAmino {
    return o && (o.$typeUrl === InterfaceDescriptor.typeUrl || typeof o.name === "string" && typeof o.description === "string");
  },
  encode(message: InterfaceDescriptor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InterfaceDescriptor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterfaceDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InterfaceDescriptor {
    const obj = createBaseInterfaceDescriptor();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.description)) obj.description = String(object.description);
    return obj;
  },
  toJSON(message: InterfaceDescriptor): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },
  fromPartial(object: DeepPartial<InterfaceDescriptor>): InterfaceDescriptor {
    const message = createBaseInterfaceDescriptor();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromSDK(object: InterfaceDescriptorSDKType): InterfaceDescriptor {
    return {
      name: object?.name,
      description: object?.description
    };
  },
  toSDK(message: InterfaceDescriptor): InterfaceDescriptorSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.description = message.description;
    return obj;
  },
  fromAmino(object: InterfaceDescriptorAmino): InterfaceDescriptor {
    const message = createBaseInterfaceDescriptor();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message: InterfaceDescriptor): InterfaceDescriptorAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.description = message.description;
    return obj;
  },
  fromAminoMsg(object: InterfaceDescriptorAminoMsg): InterfaceDescriptor {
    return InterfaceDescriptor.fromAmino(object.value);
  },
  fromProtoMsg(message: InterfaceDescriptorProtoMsg): InterfaceDescriptor {
    return InterfaceDescriptor.decode(message.value);
  },
  toProto(message: InterfaceDescriptor): Uint8Array {
    return InterfaceDescriptor.encode(message).finish();
  },
  toProtoMsg(message: InterfaceDescriptor): InterfaceDescriptorProtoMsg {
    return {
      typeUrl: "/cosmos_proto.InterfaceDescriptor",
      value: InterfaceDescriptor.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(InterfaceDescriptor.typeUrl, InterfaceDescriptor);
function createBaseScalarDescriptor(): ScalarDescriptor {
  return {
    name: "",
    description: "",
    fieldType: []
  };
}
export const ScalarDescriptor = {
  typeUrl: "/cosmos_proto.ScalarDescriptor",
  is(o: any): o is ScalarDescriptor {
    return o && (o.$typeUrl === ScalarDescriptor.typeUrl || typeof o.name === "string" && typeof o.description === "string" && Array.isArray(o.fieldType));
  },
  isSDK(o: any): o is ScalarDescriptorSDKType {
    return o && (o.$typeUrl === ScalarDescriptor.typeUrl || typeof o.name === "string" && typeof o.description === "string" && Array.isArray(o.field_type));
  },
  isAmino(o: any): o is ScalarDescriptorAmino {
    return o && (o.$typeUrl === ScalarDescriptor.typeUrl || typeof o.name === "string" && typeof o.description === "string" && Array.isArray(o.field_type));
  },
  encode(message: ScalarDescriptor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }
    writer.uint32(26).fork();
    for (const v of message.fieldType) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ScalarDescriptor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScalarDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.fieldType.push((reader.int32() as any));
            }
          } else {
            message.fieldType.push((reader.int32() as any));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ScalarDescriptor {
    const obj = createBaseScalarDescriptor();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.description)) obj.description = String(object.description);
    if (Array.isArray(object?.fieldType)) obj.fieldType = object.fieldType.map((e: any) => scalarTypeFromJSON(e));
    return obj;
  },
  toJSON(message: ScalarDescriptor): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    if (message.fieldType) {
      obj.fieldType = message.fieldType.map(e => scalarTypeToJSON(e));
    } else {
      obj.fieldType = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ScalarDescriptor>): ScalarDescriptor {
    const message = createBaseScalarDescriptor();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.fieldType = object.fieldType?.map(e => e) || [];
    return message;
  },
  fromSDK(object: ScalarDescriptorSDKType): ScalarDescriptor {
    return {
      name: object?.name,
      description: object?.description,
      fieldType: Array.isArray(object?.field_type) ? object.field_type.map((e: any) => scalarTypeFromJSON(e)) : []
    };
  },
  toSDK(message: ScalarDescriptor): ScalarDescriptorSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.description = message.description;
    if (message.fieldType) {
      obj.field_type = message.fieldType.map(e => scalarTypeToJSON(e));
    } else {
      obj.field_type = [];
    }
    return obj;
  },
  fromAmino(object: ScalarDescriptorAmino): ScalarDescriptor {
    const message = createBaseScalarDescriptor();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.fieldType = object.field_type?.map(e => scalarTypeFromJSON(e)) || [];
    return message;
  },
  toAmino(message: ScalarDescriptor): ScalarDescriptorAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.description = message.description;
    if (message.fieldType) {
      obj.field_type = message.fieldType.map(e => scalarTypeToJSON(e));
    } else {
      obj.field_type = [];
    }
    return obj;
  },
  fromAminoMsg(object: ScalarDescriptorAminoMsg): ScalarDescriptor {
    return ScalarDescriptor.fromAmino(object.value);
  },
  fromProtoMsg(message: ScalarDescriptorProtoMsg): ScalarDescriptor {
    return ScalarDescriptor.decode(message.value);
  },
  toProto(message: ScalarDescriptor): Uint8Array {
    return ScalarDescriptor.encode(message).finish();
  },
  toProtoMsg(message: ScalarDescriptor): ScalarDescriptorProtoMsg {
    return {
      typeUrl: "/cosmos_proto.ScalarDescriptor",
      value: ScalarDescriptor.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ScalarDescriptor.typeUrl, ScalarDescriptor);