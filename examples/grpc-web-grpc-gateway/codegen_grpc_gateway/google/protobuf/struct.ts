import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, isObject } from "../../helpers";
export const protobufPackage = "google.protobuf";
/**
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 * 
 *  The JSON representation for `NullValue` is JSON `null`.
 */
export enum NullValue {
  /** NULL_VALUE - Null value. */
  NULL_VALUE = 0,
  UNRECOGNIZED = -1,
}
export const NullValueSDKType = NullValue;
export const NullValueAmino = NullValue;
export function nullValueFromJSON(object: any): NullValue {
  switch (object) {
    case 0:
    case "NULL_VALUE":
      return NullValue.NULL_VALUE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NullValue.UNRECOGNIZED;
  }
}
export function nullValueToJSON(object: NullValue): string {
  switch (object) {
    case NullValue.NULL_VALUE:
      return "NULL_VALUE";
    case NullValue.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Struct_FieldsEntry {
  key: string;
  value?: Value;
}
export interface Struct_FieldsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface Struct_FieldsEntryAmino {
  key: string;
  value?: ValueAmino;
}
export interface Struct_FieldsEntryAminoMsg {
  type: string;
  value: Struct_FieldsEntryAmino;
}
export interface Struct_FieldsEntrySDKType {
  key: string;
  value?: ValueSDKType;
}
/**
 * `Struct` represents a structured data value, consisting of fields
 * which map to dynamically typed values. In some languages, `Struct`
 * might be supported by a native representation. For example, in
 * scripting languages like JS a struct is represented as an
 * object. The details of that representation are described together
 * with the proto support for the language.
 * 
 * The JSON representation for `Struct` is JSON object.
 */
export interface Struct {
  /** Unordered map of dynamically typed values. */
  fields?: {
    [key: string]: Value;
  };
}
export interface StructProtoMsg {
  typeUrl: "/google.protobuf.Struct";
  value: Uint8Array;
}
/**
 * `Struct` represents a structured data value, consisting of fields
 * which map to dynamically typed values. In some languages, `Struct`
 * might be supported by a native representation. For example, in
 * scripting languages like JS a struct is represented as an
 * object. The details of that representation are described together
 * with the proto support for the language.
 * 
 * The JSON representation for `Struct` is JSON object.
 */
export interface StructAmino {
  /** Unordered map of dynamically typed values. */
  fields?: {
    [key: string]: ValueAmino;
  };
}
export interface StructAminoMsg {
  type: "/google.protobuf.Struct";
  value: StructAmino;
}
/**
 * `Struct` represents a structured data value, consisting of fields
 * which map to dynamically typed values. In some languages, `Struct`
 * might be supported by a native representation. For example, in
 * scripting languages like JS a struct is represented as an
 * object. The details of that representation are described together
 * with the proto support for the language.
 * 
 * The JSON representation for `Struct` is JSON object.
 */
export interface StructSDKType {
  fields?: {
    [key: string]: ValueSDKType;
  };
}
/**
 * `Value` represents a dynamically typed value which can be either
 * null, a number, a string, a boolean, a recursive struct value, or a
 * list of values. A producer of value is expected to set one of that
 * variants, absence of any variant indicates an error.
 * 
 * The JSON representation for `Value` is JSON value.
 */
export interface Value {
  /** Represents a null value. */
  nullValue?: NullValue;
  /** Represents a double value. */
  numberValue?: number;
  /** Represents a string value. */
  stringValue?: string;
  /** Represents a boolean value. */
  boolValue?: boolean;
  /** Represents a structured value. */
  structValue?: Struct;
  /** Represents a repeated `Value`. */
  listValue?: ListValue;
}
export interface ValueProtoMsg {
  typeUrl: "/google.protobuf.Value";
  value: Uint8Array;
}
/**
 * `Value` represents a dynamically typed value which can be either
 * null, a number, a string, a boolean, a recursive struct value, or a
 * list of values. A producer of value is expected to set one of that
 * variants, absence of any variant indicates an error.
 * 
 * The JSON representation for `Value` is JSON value.
 */
export interface ValueAmino {
  /** Represents a null value. */
  null_value?: NullValue;
  /** Represents a double value. */
  number_value?: number;
  /** Represents a string value. */
  string_value?: string;
  /** Represents a boolean value. */
  bool_value?: boolean;
  /** Represents a structured value. */
  struct_value?: StructAmino;
  /** Represents a repeated `Value`. */
  list_value?: ListValueAmino;
}
export interface ValueAminoMsg {
  type: "/google.protobuf.Value";
  value: ValueAmino;
}
/**
 * `Value` represents a dynamically typed value which can be either
 * null, a number, a string, a boolean, a recursive struct value, or a
 * list of values. A producer of value is expected to set one of that
 * variants, absence of any variant indicates an error.
 * 
 * The JSON representation for `Value` is JSON value.
 */
export interface ValueSDKType {
  null_value?: NullValue;
  number_value?: number;
  string_value?: string;
  bool_value?: boolean;
  struct_value?: StructSDKType;
  list_value?: ListValueSDKType;
}
/**
 * `ListValue` is a wrapper around a repeated field of values.
 * 
 * The JSON representation for `ListValue` is JSON array.
 */
export interface ListValue {
  /** Repeated field of dynamically typed values. */
  values: Value[];
}
export interface ListValueProtoMsg {
  typeUrl: "/google.protobuf.ListValue";
  value: Uint8Array;
}
/**
 * `ListValue` is a wrapper around a repeated field of values.
 * 
 * The JSON representation for `ListValue` is JSON array.
 */
export interface ListValueAmino {
  /** Repeated field of dynamically typed values. */
  values: ValueAmino[];
}
export interface ListValueAminoMsg {
  type: "/google.protobuf.ListValue";
  value: ListValueAmino;
}
/**
 * `ListValue` is a wrapper around a repeated field of values.
 * 
 * The JSON representation for `ListValue` is JSON array.
 */
export interface ListValueSDKType {
  values: ValueSDKType[];
}
function createBaseStruct_FieldsEntry(): Struct_FieldsEntry {
  return {
    key: "",
    value: undefined
  };
}
export const Struct_FieldsEntry = {
  encode(message: Struct_FieldsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Struct_FieldsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStruct_FieldsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Value.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Struct_FieldsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Value.fromJSON(object.value) : undefined
    };
  },
  toJSON(message: Struct_FieldsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? Value.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Struct_FieldsEntry>): Struct_FieldsEntry {
    const message = createBaseStruct_FieldsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? Value.fromPartial(object.value) : undefined;
    return message;
  },
  fromSDK(object: Struct_FieldsEntrySDKType): Struct_FieldsEntry {
    return {
      key: object?.key,
      value: object.value ? Value.fromSDK(object.value) : undefined
    };
  },
  toSDK(message: Struct_FieldsEntry): Struct_FieldsEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    message.value !== undefined && (obj.value = message.value ? Value.toSDK(message.value) : undefined);
    return obj;
  },
  fromAmino(object: Struct_FieldsEntryAmino): Struct_FieldsEntry {
    return {
      key: object.key,
      value: object?.value ? Value.fromAmino(object.value) : undefined
    };
  },
  toAmino(message: Struct_FieldsEntry): Struct_FieldsEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value ? Value.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: Struct_FieldsEntryAminoMsg): Struct_FieldsEntry {
    return Struct_FieldsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: Struct_FieldsEntryProtoMsg): Struct_FieldsEntry {
    return Struct_FieldsEntry.decode(message.value);
  },
  toProto(message: Struct_FieldsEntry): Uint8Array {
    return Struct_FieldsEntry.encode(message).finish();
  }
};
function createBaseStruct(): Struct {
  return {
    fields: {}
  };
}
export const Struct = {
  typeUrl: "/google.protobuf.Struct",
  encode(message: Struct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.fields).forEach(([key, value]) => {
      Struct_FieldsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Struct {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStruct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = Struct_FieldsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.fields[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Struct {
    return {
      fields: isObject(object.fields) ? Object.entries(object.fields).reduce<{
        [key: string]: Value;
      }>((acc, [key, value]) => {
        acc[key] = Value.fromJSON(value);
        return acc;
      }, {}) : {}
    };
  },
  toJSON(message: Struct): unknown {
    const obj: any = {};
    obj.fields = {};
    if (message.fields) {
      Object.entries(message.fields).forEach(([k, v]) => {
        obj.fields[k] = Value.toJSON(v);
      });
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Struct>): Struct {
    const message = createBaseStruct();
    message.fields = Object.entries(object.fields ?? {}).reduce<{
      [key: string]: Value;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Value.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromSDK(object: StructSDKType): Struct {
    return {
      fields: isObject(object.fields) ? Object.entries(object.fields).reduce<{
        [key: string]: Value;
      }>((acc, [key, value]) => {
        acc[key] = Value.fromSDK(value);
        return acc;
      }, {}) : {}
    };
  },
  toSDK(message: Struct): StructSDKType {
    const obj: any = {};
    obj.fields = {};
    if (message.fields) {
      Object.entries(message.fields).forEach(([k, v]) => {
        obj.fields[k] = Value.toSDK(v);
      });
    }
    return obj;
  },
  fromAmino(object: StructAmino): Struct {
    return {
      fields: isObject(object.fields) ? Object.entries(object.fields).reduce<{
        [key: string]: Value;
      }>((acc, [key, value]) => {
        acc[key] = Value.fromAmino(value);
        return acc;
      }, {}) : {}
    };
  },
  toAmino(message: Struct): StructAmino {
    const obj: any = {};
    obj.fields = {};
    if (message.fields) {
      Object.entries(message.fields).forEach(([k, v]) => {
        obj.fields[k] = Value.toAmino(v);
      });
    }
    return obj;
  },
  fromAminoMsg(object: StructAminoMsg): Struct {
    return Struct.fromAmino(object.value);
  },
  fromProtoMsg(message: StructProtoMsg): Struct {
    return Struct.decode(message.value);
  },
  toProto(message: Struct): Uint8Array {
    return Struct.encode(message).finish();
  },
  toProtoMsg(message: Struct): StructProtoMsg {
    return {
      typeUrl: "/google.protobuf.Struct",
      value: Struct.encode(message).finish()
    };
  }
};
function createBaseValue(): Value {
  return {
    nullValue: undefined,
    numberValue: undefined,
    stringValue: undefined,
    boolValue: undefined,
    structValue: undefined,
    listValue: undefined
  };
}
export const Value = {
  typeUrl: "/google.protobuf.Value",
  encode(message: Value, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nullValue !== undefined) {
      writer.uint32(8).int32(message.nullValue);
    }
    if (message.numberValue !== undefined) {
      writer.uint32(17).double(message.numberValue);
    }
    if (message.stringValue !== undefined) {
      writer.uint32(26).string(message.stringValue);
    }
    if (message.boolValue !== undefined) {
      writer.uint32(32).bool(message.boolValue);
    }
    if (message.structValue !== undefined) {
      Struct.encode(message.structValue, writer.uint32(42).fork()).ldelim();
    }
    if (message.listValue !== undefined) {
      ListValue.encode(message.listValue, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Value {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nullValue = (reader.int32() as any);
          break;
        case 2:
          message.numberValue = reader.double();
          break;
        case 3:
          message.stringValue = reader.string();
          break;
        case 4:
          message.boolValue = reader.bool();
          break;
        case 5:
          message.structValue = Struct.decode(reader, reader.uint32());
          break;
        case 6:
          message.listValue = ListValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Value {
    return {
      nullValue: isSet(object.nullValue) ? nullValueFromJSON(object.nullValue) : undefined,
      numberValue: isSet(object.numberValue) ? Number(object.numberValue) : undefined,
      stringValue: isSet(object.stringValue) ? String(object.stringValue) : undefined,
      boolValue: isSet(object.boolValue) ? Boolean(object.boolValue) : undefined,
      structValue: isSet(object.structValue) ? Struct.fromJSON(object.structValue) : undefined,
      listValue: isSet(object.listValue) ? ListValue.fromJSON(object.listValue) : undefined
    };
  },
  toJSON(message: Value): unknown {
    const obj: any = {};
    message.nullValue !== undefined && (obj.nullValue = nullValueToJSON(message.nullValue));
    message.numberValue !== undefined && (obj.numberValue = message.numberValue);
    message.stringValue !== undefined && (obj.stringValue = message.stringValue);
    message.boolValue !== undefined && (obj.boolValue = message.boolValue);
    message.structValue !== undefined && (obj.structValue = message.structValue ? Struct.toJSON(message.structValue) : undefined);
    message.listValue !== undefined && (obj.listValue = message.listValue ? ListValue.toJSON(message.listValue) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Value>): Value {
    const message = createBaseValue();
    message.nullValue = object.nullValue ?? undefined;
    message.numberValue = object.numberValue ?? undefined;
    message.stringValue = object.stringValue ?? undefined;
    message.boolValue = object.boolValue ?? undefined;
    message.structValue = object.structValue !== undefined && object.structValue !== null ? Struct.fromPartial(object.structValue) : undefined;
    message.listValue = object.listValue !== undefined && object.listValue !== null ? ListValue.fromPartial(object.listValue) : undefined;
    return message;
  },
  fromSDK(object: ValueSDKType): Value {
    return {
      nullValue: isSet(object.null_value) ? nullValueFromJSON(object.null_value) : undefined,
      numberValue: object?.number_value,
      stringValue: object?.string_value,
      boolValue: object?.bool_value,
      structValue: object.struct_value ? Struct.fromSDK(object.struct_value) : undefined,
      listValue: object.list_value ? ListValue.fromSDK(object.list_value) : undefined
    };
  },
  toSDK(message: Value): ValueSDKType {
    const obj: any = {};
    message.nullValue !== undefined && (obj.null_value = nullValueToJSON(message.nullValue));
    obj.number_value = message.numberValue;
    obj.string_value = message.stringValue;
    obj.bool_value = message.boolValue;
    message.structValue !== undefined && (obj.struct_value = message.structValue ? Struct.toSDK(message.structValue) : undefined);
    message.listValue !== undefined && (obj.list_value = message.listValue ? ListValue.toSDK(message.listValue) : undefined);
    return obj;
  },
  fromAmino(object: ValueAmino): Value {
    return {
      nullValue: isSet(object.null_value) ? nullValueFromJSON(object.null_value) : undefined,
      numberValue: object?.number_value,
      stringValue: object?.string_value,
      boolValue: object?.bool_value,
      structValue: object?.struct_value ? Struct.fromAmino(object.struct_value) : undefined,
      listValue: object?.list_value ? ListValue.fromAmino(object.list_value) : undefined
    };
  },
  toAmino(message: Value): ValueAmino {
    const obj: any = {};
    obj.null_value = message.nullValue;
    obj.number_value = message.numberValue;
    obj.string_value = message.stringValue;
    obj.bool_value = message.boolValue;
    obj.struct_value = message.structValue ? Struct.toAmino(message.structValue) : undefined;
    obj.list_value = message.listValue ? ListValue.toAmino(message.listValue) : undefined;
    return obj;
  },
  fromAminoMsg(object: ValueAminoMsg): Value {
    return Value.fromAmino(object.value);
  },
  fromProtoMsg(message: ValueProtoMsg): Value {
    return Value.decode(message.value);
  },
  toProto(message: Value): Uint8Array {
    return Value.encode(message).finish();
  },
  toProtoMsg(message: Value): ValueProtoMsg {
    return {
      typeUrl: "/google.protobuf.Value",
      value: Value.encode(message).finish()
    };
  }
};
function createBaseListValue(): ListValue {
  return {
    values: []
  };
}
export const ListValue = {
  typeUrl: "/google.protobuf.ListValue",
  encode(message: ListValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.values) {
      Value.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ListValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(Value.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListValue {
    return {
      values: Array.isArray(object?.values) ? object.values.map((e: any) => Value.fromJSON(e)) : []
    };
  },
  toJSON(message: ListValue): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map(e => e ? Value.toJSON(e) : undefined);
    } else {
      obj.values = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ListValue>): ListValue {
    const message = createBaseListValue();
    message.values = object.values?.map(e => Value.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ListValueSDKType): ListValue {
    return {
      values: Array.isArray(object?.values) ? object.values.map((e: any) => Value.fromSDK(e)) : []
    };
  },
  toSDK(message: ListValue): ListValueSDKType {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map(e => e ? Value.toSDK(e) : undefined);
    } else {
      obj.values = [];
    }
    return obj;
  },
  fromAmino(object: ListValueAmino): ListValue {
    return {
      values: Array.isArray(object?.values) ? object.values.map((e: any) => Value.fromAmino(e)) : []
    };
  },
  toAmino(message: ListValue): ListValueAmino {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map(e => e ? Value.toAmino(e) : undefined);
    } else {
      obj.values = [];
    }
    return obj;
  },
  fromAminoMsg(object: ListValueAminoMsg): ListValue {
    return ListValue.fromAmino(object.value);
  },
  fromProtoMsg(message: ListValueProtoMsg): ListValue {
    return ListValue.decode(message.value);
  },
  toProto(message: ListValue): Uint8Array {
    return ListValue.encode(message).finish();
  },
  toProtoMsg(message: ListValue): ListValueProtoMsg {
    return {
      typeUrl: "/google.protobuf.ListValue",
      value: ListValue.encode(message).finish()
    };
  }
};