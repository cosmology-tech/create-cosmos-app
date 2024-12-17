import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
import { ComputedRef } from "vue";
export const protobufPackage = "cosmos.orm.v1";
/** TableDescriptor describes an ORM table. */
export interface TableDescriptor {
  /** primary_key defines the primary key for the table. */
  primaryKey?: PrimaryKeyDescriptor;
  /** index defines one or more secondary indexes. */
  index: SecondaryIndexDescriptor[];
  /**
   * id is a non-zero integer ID that must be unique within the
   * tables and singletons in this file. It may be deprecated in the future when this
   * can be auto-generated.
   */
  id: number;
}
export interface ReactiveTableDescriptor {
  primaryKey?: ComputedRef<PrimaryKeyDescriptor>;
  index: ComputedRef<SecondaryIndexDescriptor[]>;
  id: ComputedRef<number>;
}
export interface TableDescriptorProtoMsg {
  typeUrl: "/cosmos.orm.v1.TableDescriptor";
  value: Uint8Array;
}
/** TableDescriptor describes an ORM table. */
export interface TableDescriptorSDKType {
  primary_key?: PrimaryKeyDescriptorSDKType;
  index: SecondaryIndexDescriptorSDKType[];
  id: number;
}
/** PrimaryKeyDescriptor describes a table primary key. */
export interface PrimaryKeyDescriptor {
  /**
   * fields is a comma-separated list of fields in the primary key. Spaces are
   * not allowed. Supported field types, their encodings, and any applicable constraints
   * are described below.
   *   - uint32 are encoded as 2,3,4 or 5 bytes using a compact encoding that
   *     is suitable for sorted iteration (not varint encoding). This type is
   *     well-suited for small integers.
   *   - uint64 are encoded as 2,4,6 or 9 bytes using a compact encoding that
   *     is suitable for sorted iteration (not varint encoding). This type is
   *     well-suited for small integers such as auto-incrementing sequences.
   *   - fixed32, fixed64 are encoded as big-endian fixed width bytes and support
   *   sorted iteration. These types are well-suited for encoding fixed with
   *   decimals as integers.
   *   - string's are encoded as raw bytes in terminal key segments and null-terminated
   *   in non-terminal segments. Null characters are thus forbidden in strings.
   *   string fields support sorted iteration.
   *   - bytes are encoded as raw bytes in terminal segments and length-prefixed
   *   with a 32-bit unsigned varint in non-terminal segments.
   *   - int32, sint32, int64, sint64, sfixed32, sfixed64 are encoded as fixed width bytes with
   *   an encoding that enables sorted iteration.
   *   - google.protobuf.Timestamp and google.protobuf.Duration are encoded
   *   as 12 bytes using an encoding that enables sorted iteration.
   *   - enum fields are encoded using varint encoding and do not support sorted
   *   iteration.
   *   - bool fields are encoded as a single byte 0 or 1.
   * 
   * All other fields types are unsupported in keys including repeated and
   * oneof fields.
   * 
   * Primary keys are prefixed by the varint encoded table id and the byte 0x0
   * plus any additional prefix specified by the schema.
   */
  fields: string;
  /**
   * auto_increment specifies that the primary key is generated by an
   * auto-incrementing integer. If this is set to true fields must only
   * contain one field of that is of type uint64.
   */
  autoIncrement: boolean;
}
export interface ReactivePrimaryKeyDescriptor {
  fields: ComputedRef<string>;
  autoIncrement: ComputedRef<boolean>;
}
export interface PrimaryKeyDescriptorProtoMsg {
  typeUrl: "/cosmos.orm.v1.PrimaryKeyDescriptor";
  value: Uint8Array;
}
/** PrimaryKeyDescriptor describes a table primary key. */
export interface PrimaryKeyDescriptorSDKType {
  fields: string;
  auto_increment: boolean;
}
/** PrimaryKeyDescriptor describes a table secondary index. */
export interface SecondaryIndexDescriptor {
  /**
   * fields is a comma-separated list of fields in the index. The supported
   * field types are the same as those for PrimaryKeyDescriptor.fields.
   * Index keys are prefixed by the varint encoded table id and the varint
   * encoded index id plus any additional prefix specified by the schema.
   * 
   * In addition the field segments, non-unique index keys are suffixed with
   * any additional primary key fields not present in the index fields so that the
   * primary key can be reconstructed. Unique indexes instead of being suffixed
   * store the remaining primary key fields in the value..
   */
  fields: string;
  /**
   * id is a non-zero integer ID that must be unique within the indexes for this
   * table and less than 32768. It may be deprecated in the future when this can
   * be auto-generated.
   */
  id: number;
  /** unique specifies that this an unique index. */
  unique: boolean;
}
export interface ReactiveSecondaryIndexDescriptor {
  fields: ComputedRef<string>;
  id: ComputedRef<number>;
  unique: ComputedRef<boolean>;
}
export interface SecondaryIndexDescriptorProtoMsg {
  typeUrl: "/cosmos.orm.v1.SecondaryIndexDescriptor";
  value: Uint8Array;
}
/** PrimaryKeyDescriptor describes a table secondary index. */
export interface SecondaryIndexDescriptorSDKType {
  fields: string;
  id: number;
  unique: boolean;
}
/** TableDescriptor describes an ORM singleton table which has at most one instance. */
export interface SingletonDescriptor {
  /**
   * id is a non-zero integer ID that must be unique within the
   * tables and singletons in this file. It may be deprecated in the future when this
   * can be auto-generated.
   */
  id: number;
}
export interface ReactiveSingletonDescriptor {
  id: ComputedRef<number>;
}
export interface SingletonDescriptorProtoMsg {
  typeUrl: "/cosmos.orm.v1.SingletonDescriptor";
  value: Uint8Array;
}
/** TableDescriptor describes an ORM singleton table which has at most one instance. */
export interface SingletonDescriptorSDKType {
  id: number;
}
function createBaseTableDescriptor(): TableDescriptor {
  return {
    primaryKey: undefined,
    index: [],
    id: 0
  };
}
export const TableDescriptor = {
  typeUrl: "/cosmos.orm.v1.TableDescriptor",
  aminoType: "cosmos-sdk/TableDescriptor",
  is(o: any): o is TableDescriptor {
    return o && (o.$typeUrl === TableDescriptor.typeUrl || Array.isArray(o.index) && (!o.index.length || SecondaryIndexDescriptor.is(o.index[0])) && typeof o.id === "number");
  },
  isSDK(o: any): o is TableDescriptorSDKType {
    return o && (o.$typeUrl === TableDescriptor.typeUrl || Array.isArray(o.index) && (!o.index.length || SecondaryIndexDescriptor.isSDK(o.index[0])) && typeof o.id === "number");
  },
  encode(message: TableDescriptor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.primaryKey !== undefined) {
      PrimaryKeyDescriptor.encode(message.primaryKey, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.index) {
      SecondaryIndexDescriptor.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.id !== 0) {
      writer.uint32(24).uint32(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TableDescriptor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.primaryKey = PrimaryKeyDescriptor.decode(reader, reader.uint32());
          break;
        case 2:
          message.index.push(SecondaryIndexDescriptor.decode(reader, reader.uint32()));
          break;
        case 3:
          message.id = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TableDescriptor {
    return {
      primaryKey: isSet(object.primaryKey) ? PrimaryKeyDescriptor.fromJSON(object.primaryKey) : undefined,
      index: Array.isArray(object?.index) ? object.index.map((e: any) => SecondaryIndexDescriptor.fromJSON(e)) : [],
      id: isSet(object.id) ? Number(object.id) : 0
    };
  },
  toJSON(message: TableDescriptor): JsonSafe<TableDescriptor> {
    const obj: any = {};
    message.primaryKey !== undefined && (obj.primaryKey = message.primaryKey ? PrimaryKeyDescriptor.toJSON(message.primaryKey) : undefined);
    if (message.index) {
      obj.index = message.index.map(e => e ? SecondaryIndexDescriptor.toJSON(e) : undefined);
    } else {
      obj.index = [];
    }
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },
  fromPartial(object: DeepPartial<TableDescriptor>): TableDescriptor {
    const message = createBaseTableDescriptor();
    message.primaryKey = object.primaryKey !== undefined && object.primaryKey !== null ? PrimaryKeyDescriptor.fromPartial(object.primaryKey) : undefined;
    message.index = object.index?.map(e => SecondaryIndexDescriptor.fromPartial(e)) || [];
    message.id = object.id ?? 0;
    return message;
  },
  fromSDK(object: TableDescriptorSDKType): TableDescriptor {
    return {
      primaryKey: object.primary_key ? PrimaryKeyDescriptor.fromSDK(object.primary_key) : undefined,
      index: Array.isArray(object?.index) ? object.index.map((e: any) => SecondaryIndexDescriptor.fromSDK(e)) : [],
      id: object?.id
    };
  },
  fromSDKJSON(object: any): TableDescriptorSDKType {
    return {
      primary_key: isSet(object.primary_key) ? PrimaryKeyDescriptor.fromSDKJSON(object.primary_key) : undefined,
      index: Array.isArray(object?.index) ? object.index.map((e: any) => SecondaryIndexDescriptor.fromSDKJSON(e)) : [],
      id: isSet(object.id) ? Number(object.id) : 0
    };
  },
  toSDK(message: TableDescriptor): TableDescriptorSDKType {
    const obj: any = {};
    message.primaryKey !== undefined && (obj.primary_key = message.primaryKey ? PrimaryKeyDescriptor.toSDK(message.primaryKey) : undefined);
    if (message.index) {
      obj.index = message.index.map(e => e ? SecondaryIndexDescriptor.toSDK(e) : undefined);
    } else {
      obj.index = [];
    }
    obj.id = message.id;
    return obj;
  },
  fromAmino(object: TableDescriptorAmino): TableDescriptor {
    const message = createBaseTableDescriptor();
    if (object.primary_key !== undefined && object.primary_key !== null) {
      message.primaryKey = PrimaryKeyDescriptor.fromAmino(object.primary_key);
    }
    message.index = object.index?.map(e => SecondaryIndexDescriptor.fromAmino(e)) || [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: TableDescriptor): TableDescriptorAmino {
    const obj: any = {};
    obj.primary_key = message.primaryKey ? PrimaryKeyDescriptor.toAmino(message.primaryKey) : undefined;
    if (message.index) {
      obj.index = message.index.map(e => e ? SecondaryIndexDescriptor.toAmino(e) : undefined);
    } else {
      obj.index = message.index;
    }
    obj.id = message.id === 0 ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: TableDescriptorAminoMsg): TableDescriptor {
    return TableDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message: TableDescriptor): TableDescriptorAminoMsg {
    return {
      type: "cosmos-sdk/TableDescriptor",
      value: TableDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message: TableDescriptorProtoMsg): TableDescriptor {
    return TableDescriptor.decode(message.value);
  },
  toProto(message: TableDescriptor): Uint8Array {
    return TableDescriptor.encode(message).finish();
  },
  toProtoMsg(message: TableDescriptor): TableDescriptorProtoMsg {
    return {
      typeUrl: "/cosmos.orm.v1.TableDescriptor",
      value: TableDescriptor.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TableDescriptor.typeUrl, TableDescriptor);
GlobalDecoderRegistry.registerAminoProtoMapping(TableDescriptor.aminoType, TableDescriptor.typeUrl);
function createBasePrimaryKeyDescriptor(): PrimaryKeyDescriptor {
  return {
    fields: "",
    autoIncrement: false
  };
}
export const PrimaryKeyDescriptor = {
  typeUrl: "/cosmos.orm.v1.PrimaryKeyDescriptor",
  aminoType: "cosmos-sdk/PrimaryKeyDescriptor",
  is(o: any): o is PrimaryKeyDescriptor {
    return o && (o.$typeUrl === PrimaryKeyDescriptor.typeUrl || typeof o.fields === "string" && typeof o.autoIncrement === "boolean");
  },
  isSDK(o: any): o is PrimaryKeyDescriptorSDKType {
    return o && (o.$typeUrl === PrimaryKeyDescriptor.typeUrl || typeof o.fields === "string" && typeof o.auto_increment === "boolean");
  },
  encode(message: PrimaryKeyDescriptor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fields !== "") {
      writer.uint32(10).string(message.fields);
    }
    if (message.autoIncrement === true) {
      writer.uint32(16).bool(message.autoIncrement);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PrimaryKeyDescriptor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrimaryKeyDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fields = reader.string();
          break;
        case 2:
          message.autoIncrement = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PrimaryKeyDescriptor {
    return {
      fields: isSet(object.fields) ? String(object.fields) : "",
      autoIncrement: isSet(object.autoIncrement) ? Boolean(object.autoIncrement) : false
    };
  },
  toJSON(message: PrimaryKeyDescriptor): JsonSafe<PrimaryKeyDescriptor> {
    const obj: any = {};
    message.fields !== undefined && (obj.fields = message.fields);
    message.autoIncrement !== undefined && (obj.autoIncrement = message.autoIncrement);
    return obj;
  },
  fromPartial(object: DeepPartial<PrimaryKeyDescriptor>): PrimaryKeyDescriptor {
    const message = createBasePrimaryKeyDescriptor();
    message.fields = object.fields ?? "";
    message.autoIncrement = object.autoIncrement ?? false;
    return message;
  },
  fromSDK(object: PrimaryKeyDescriptorSDKType): PrimaryKeyDescriptor {
    return {
      fields: object?.fields,
      autoIncrement: object?.auto_increment
    };
  },
  fromSDKJSON(object: any): PrimaryKeyDescriptorSDKType {
    return {
      fields: isSet(object.fields) ? String(object.fields) : "",
      auto_increment: isSet(object.auto_increment) ? Boolean(object.auto_increment) : false
    };
  },
  toSDK(message: PrimaryKeyDescriptor): PrimaryKeyDescriptorSDKType {
    const obj: any = {};
    obj.fields = message.fields;
    obj.auto_increment = message.autoIncrement;
    return obj;
  },
  fromAmino(object: PrimaryKeyDescriptorAmino): PrimaryKeyDescriptor {
    const message = createBasePrimaryKeyDescriptor();
    if (object.fields !== undefined && object.fields !== null) {
      message.fields = object.fields;
    }
    if (object.auto_increment !== undefined && object.auto_increment !== null) {
      message.autoIncrement = object.auto_increment;
    }
    return message;
  },
  toAmino(message: PrimaryKeyDescriptor): PrimaryKeyDescriptorAmino {
    const obj: any = {};
    obj.fields = message.fields === "" ? undefined : message.fields;
    obj.auto_increment = message.autoIncrement === false ? undefined : message.autoIncrement;
    return obj;
  },
  fromAminoMsg(object: PrimaryKeyDescriptorAminoMsg): PrimaryKeyDescriptor {
    return PrimaryKeyDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message: PrimaryKeyDescriptor): PrimaryKeyDescriptorAminoMsg {
    return {
      type: "cosmos-sdk/PrimaryKeyDescriptor",
      value: PrimaryKeyDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message: PrimaryKeyDescriptorProtoMsg): PrimaryKeyDescriptor {
    return PrimaryKeyDescriptor.decode(message.value);
  },
  toProto(message: PrimaryKeyDescriptor): Uint8Array {
    return PrimaryKeyDescriptor.encode(message).finish();
  },
  toProtoMsg(message: PrimaryKeyDescriptor): PrimaryKeyDescriptorProtoMsg {
    return {
      typeUrl: "/cosmos.orm.v1.PrimaryKeyDescriptor",
      value: PrimaryKeyDescriptor.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PrimaryKeyDescriptor.typeUrl, PrimaryKeyDescriptor);
GlobalDecoderRegistry.registerAminoProtoMapping(PrimaryKeyDescriptor.aminoType, PrimaryKeyDescriptor.typeUrl);
function createBaseSecondaryIndexDescriptor(): SecondaryIndexDescriptor {
  return {
    fields: "",
    id: 0,
    unique: false
  };
}
export const SecondaryIndexDescriptor = {
  typeUrl: "/cosmos.orm.v1.SecondaryIndexDescriptor",
  aminoType: "cosmos-sdk/SecondaryIndexDescriptor",
  is(o: any): o is SecondaryIndexDescriptor {
    return o && (o.$typeUrl === SecondaryIndexDescriptor.typeUrl || typeof o.fields === "string" && typeof o.id === "number" && typeof o.unique === "boolean");
  },
  isSDK(o: any): o is SecondaryIndexDescriptorSDKType {
    return o && (o.$typeUrl === SecondaryIndexDescriptor.typeUrl || typeof o.fields === "string" && typeof o.id === "number" && typeof o.unique === "boolean");
  },
  encode(message: SecondaryIndexDescriptor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fields !== "") {
      writer.uint32(10).string(message.fields);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint32(message.id);
    }
    if (message.unique === true) {
      writer.uint32(24).bool(message.unique);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SecondaryIndexDescriptor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecondaryIndexDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fields = reader.string();
          break;
        case 2:
          message.id = reader.uint32();
          break;
        case 3:
          message.unique = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SecondaryIndexDescriptor {
    return {
      fields: isSet(object.fields) ? String(object.fields) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      unique: isSet(object.unique) ? Boolean(object.unique) : false
    };
  },
  toJSON(message: SecondaryIndexDescriptor): JsonSafe<SecondaryIndexDescriptor> {
    const obj: any = {};
    message.fields !== undefined && (obj.fields = message.fields);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.unique !== undefined && (obj.unique = message.unique);
    return obj;
  },
  fromPartial(object: DeepPartial<SecondaryIndexDescriptor>): SecondaryIndexDescriptor {
    const message = createBaseSecondaryIndexDescriptor();
    message.fields = object.fields ?? "";
    message.id = object.id ?? 0;
    message.unique = object.unique ?? false;
    return message;
  },
  fromSDK(object: SecondaryIndexDescriptorSDKType): SecondaryIndexDescriptor {
    return {
      fields: object?.fields,
      id: object?.id,
      unique: object?.unique
    };
  },
  fromSDKJSON(object: any): SecondaryIndexDescriptorSDKType {
    return {
      fields: isSet(object.fields) ? String(object.fields) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      unique: isSet(object.unique) ? Boolean(object.unique) : false
    };
  },
  toSDK(message: SecondaryIndexDescriptor): SecondaryIndexDescriptorSDKType {
    const obj: any = {};
    obj.fields = message.fields;
    obj.id = message.id;
    obj.unique = message.unique;
    return obj;
  },
  fromAmino(object: SecondaryIndexDescriptorAmino): SecondaryIndexDescriptor {
    const message = createBaseSecondaryIndexDescriptor();
    if (object.fields !== undefined && object.fields !== null) {
      message.fields = object.fields;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.unique !== undefined && object.unique !== null) {
      message.unique = object.unique;
    }
    return message;
  },
  toAmino(message: SecondaryIndexDescriptor): SecondaryIndexDescriptorAmino {
    const obj: any = {};
    obj.fields = message.fields === "" ? undefined : message.fields;
    obj.id = message.id === 0 ? undefined : message.id;
    obj.unique = message.unique === false ? undefined : message.unique;
    return obj;
  },
  fromAminoMsg(object: SecondaryIndexDescriptorAminoMsg): SecondaryIndexDescriptor {
    return SecondaryIndexDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message: SecondaryIndexDescriptor): SecondaryIndexDescriptorAminoMsg {
    return {
      type: "cosmos-sdk/SecondaryIndexDescriptor",
      value: SecondaryIndexDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message: SecondaryIndexDescriptorProtoMsg): SecondaryIndexDescriptor {
    return SecondaryIndexDescriptor.decode(message.value);
  },
  toProto(message: SecondaryIndexDescriptor): Uint8Array {
    return SecondaryIndexDescriptor.encode(message).finish();
  },
  toProtoMsg(message: SecondaryIndexDescriptor): SecondaryIndexDescriptorProtoMsg {
    return {
      typeUrl: "/cosmos.orm.v1.SecondaryIndexDescriptor",
      value: SecondaryIndexDescriptor.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SecondaryIndexDescriptor.typeUrl, SecondaryIndexDescriptor);
GlobalDecoderRegistry.registerAminoProtoMapping(SecondaryIndexDescriptor.aminoType, SecondaryIndexDescriptor.typeUrl);
function createBaseSingletonDescriptor(): SingletonDescriptor {
  return {
    id: 0
  };
}
export const SingletonDescriptor = {
  typeUrl: "/cosmos.orm.v1.SingletonDescriptor",
  aminoType: "cosmos-sdk/SingletonDescriptor",
  is(o: any): o is SingletonDescriptor {
    return o && (o.$typeUrl === SingletonDescriptor.typeUrl || typeof o.id === "number");
  },
  isSDK(o: any): o is SingletonDescriptorSDKType {
    return o && (o.$typeUrl === SingletonDescriptor.typeUrl || typeof o.id === "number");
  },
  encode(message: SingletonDescriptor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SingletonDescriptor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSingletonDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SingletonDescriptor {
    return {
      id: isSet(object.id) ? Number(object.id) : 0
    };
  },
  toJSON(message: SingletonDescriptor): JsonSafe<SingletonDescriptor> {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },
  fromPartial(object: DeepPartial<SingletonDescriptor>): SingletonDescriptor {
    const message = createBaseSingletonDescriptor();
    message.id = object.id ?? 0;
    return message;
  },
  fromSDK(object: SingletonDescriptorSDKType): SingletonDescriptor {
    return {
      id: object?.id
    };
  },
  fromSDKJSON(object: any): SingletonDescriptorSDKType {
    return {
      id: isSet(object.id) ? Number(object.id) : 0
    };
  },
  toSDK(message: SingletonDescriptor): SingletonDescriptorSDKType {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAmino(object: SingletonDescriptorAmino): SingletonDescriptor {
    const message = createBaseSingletonDescriptor();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: SingletonDescriptor): SingletonDescriptorAmino {
    const obj: any = {};
    obj.id = message.id === 0 ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: SingletonDescriptorAminoMsg): SingletonDescriptor {
    return SingletonDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message: SingletonDescriptor): SingletonDescriptorAminoMsg {
    return {
      type: "cosmos-sdk/SingletonDescriptor",
      value: SingletonDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message: SingletonDescriptorProtoMsg): SingletonDescriptor {
    return SingletonDescriptor.decode(message.value);
  },
  toProto(message: SingletonDescriptor): Uint8Array {
    return SingletonDescriptor.encode(message).finish();
  },
  toProtoMsg(message: SingletonDescriptor): SingletonDescriptorProtoMsg {
    return {
      typeUrl: "/cosmos.orm.v1.SingletonDescriptor",
      value: SingletonDescriptor.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SingletonDescriptor.typeUrl, SingletonDescriptor);
GlobalDecoderRegistry.registerAminoProtoMapping(SingletonDescriptor.aminoType, SingletonDescriptor.typeUrl);