import { NullValue, NullValueSDKType, nullValueFromJSON, nullValueToJSON } from "../../../protobuf/struct";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../protobuf/any";
import { Long, isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "google.api.expr.v1beta1";
/**
 * Represents a CEL value.
 * 
 * This is similar to `google.protobuf.Value`, but can represent CEL's full
 * range of values.
 */
export interface Value {
  /** Null value. */
  nullValue?: NullValue;
  /** Boolean value. */
  boolValue?: boolean;
  /** Signed integer value. */
  int64Value?: Long;
  /** Unsigned integer value. */
  uint64Value?: Long;
  /** Floating point value. */
  doubleValue?: number;
  /** UTF-8 string value. */
  stringValue?: string;
  /** Byte string value. */
  bytesValue?: Uint8Array;
  /** An enum value. */
  enumValue?: EnumValue;
  /** The proto message backing an object value. */
  objectValue?: Any;
  /** Map value. */
  mapValue?: MapValue;
  /** List value. */
  listValue?: ListValue;
  /** A Type value represented by the fully qualified name of the type. */
  typeValue?: string;
}
export interface ValueProtoMsg {
  typeUrl: "/google.api.expr.v1beta1.Value";
  value: Uint8Array;
}
/**
 * Represents a CEL value.
 * 
 * This is similar to `google.protobuf.Value`, but can represent CEL's full
 * range of values.
 */
export interface ValueAmino {
  /** Null value. */
  null_value?: NullValue;
  /** Boolean value. */
  bool_value?: boolean;
  /** Signed integer value. */
  int64_value?: string;
  /** Unsigned integer value. */
  uint64_value?: string;
  /** Floating point value. */
  double_value?: number;
  /** UTF-8 string value. */
  string_value?: string;
  /** Byte string value. */
  bytes_value?: Uint8Array;
  /** An enum value. */
  enum_value?: EnumValueAmino;
  /** The proto message backing an object value. */
  object_value?: AnyAmino;
  /** Map value. */
  map_value?: MapValueAmino;
  /** List value. */
  list_value?: ListValueAmino;
  /** A Type value represented by the fully qualified name of the type. */
  type_value?: string;
}
export interface ValueAminoMsg {
  type: "/google.api.expr.v1beta1.Value";
  value: ValueAmino;
}
/**
 * Represents a CEL value.
 * 
 * This is similar to `google.protobuf.Value`, but can represent CEL's full
 * range of values.
 */
export interface ValueSDKType {
  null_value?: NullValue;
  bool_value?: boolean;
  int64_value?: Long;
  uint64_value?: Long;
  double_value?: number;
  string_value?: string;
  bytes_value?: Uint8Array;
  enum_value?: EnumValueSDKType;
  object_value?: AnySDKType;
  map_value?: MapValueSDKType;
  list_value?: ListValueSDKType;
  type_value?: string;
}
/** An enum value. */
export interface EnumValue {
  /** The fully qualified name of the enum type. */
  type: string;
  /** The value of the enum. */
  value: number;
}
export interface EnumValueProtoMsg {
  typeUrl: "/google.api.expr.v1beta1.EnumValue";
  value: Uint8Array;
}
/** An enum value. */
export interface EnumValueAmino {
  /** The fully qualified name of the enum type. */
  type: string;
  /** The value of the enum. */
  value: number;
}
export interface EnumValueAminoMsg {
  type: "/google.api.expr.v1beta1.EnumValue";
  value: EnumValueAmino;
}
/** An enum value. */
export interface EnumValueSDKType {
  type: string;
  value: number;
}
/**
 * A list.
 * 
 * Wrapped in a message so 'not set' and empty can be differentiated, which is
 * required for use in a 'oneof'.
 */
export interface ListValue {
  /** The ordered values in the list. */
  values: Value[];
}
export interface ListValueProtoMsg {
  typeUrl: "/google.api.expr.v1beta1.ListValue";
  value: Uint8Array;
}
/**
 * A list.
 * 
 * Wrapped in a message so 'not set' and empty can be differentiated, which is
 * required for use in a 'oneof'.
 */
export interface ListValueAmino {
  /** The ordered values in the list. */
  values: ValueAmino[];
}
export interface ListValueAminoMsg {
  type: "/google.api.expr.v1beta1.ListValue";
  value: ListValueAmino;
}
/**
 * A list.
 * 
 * Wrapped in a message so 'not set' and empty can be differentiated, which is
 * required for use in a 'oneof'.
 */
export interface ListValueSDKType {
  values: ValueSDKType[];
}
/**
 * A map.
 * 
 * Wrapped in a message so 'not set' and empty can be differentiated, which is
 * required for use in a 'oneof'.
 */
export interface MapValue {
  /**
   * The set of map entries.
   * 
   * CEL has fewer restrictions on keys, so a protobuf map represenation
   * cannot be used.
   */
  entries: MapValue_Entry[];
}
export interface MapValueProtoMsg {
  typeUrl: "/google.api.expr.v1beta1.MapValue";
  value: Uint8Array;
}
/**
 * A map.
 * 
 * Wrapped in a message so 'not set' and empty can be differentiated, which is
 * required for use in a 'oneof'.
 */
export interface MapValueAmino {
  /**
   * The set of map entries.
   * 
   * CEL has fewer restrictions on keys, so a protobuf map represenation
   * cannot be used.
   */
  entries: MapValue_EntryAmino[];
}
export interface MapValueAminoMsg {
  type: "/google.api.expr.v1beta1.MapValue";
  value: MapValueAmino;
}
/**
 * A map.
 * 
 * Wrapped in a message so 'not set' and empty can be differentiated, which is
 * required for use in a 'oneof'.
 */
export interface MapValueSDKType {
  entries: MapValue_EntrySDKType[];
}
/** An entry in the map. */
export interface MapValue_Entry {
  /**
   * The key.
   * 
   * Must be unique with in the map.
   * Currently only boolean, int, uint, and string values can be keys.
   */
  key?: Value;
  /** The value. */
  value?: Value;
}
export interface MapValue_EntryProtoMsg {
  typeUrl: "/google.api.expr.v1beta1.Entry";
  value: Uint8Array;
}
/** An entry in the map. */
export interface MapValue_EntryAmino {
  /**
   * The key.
   * 
   * Must be unique with in the map.
   * Currently only boolean, int, uint, and string values can be keys.
   */
  key?: ValueAmino;
  /** The value. */
  value?: ValueAmino;
}
export interface MapValue_EntryAminoMsg {
  type: "/google.api.expr.v1beta1.Entry";
  value: MapValue_EntryAmino;
}
/** An entry in the map. */
export interface MapValue_EntrySDKType {
  key?: ValueSDKType;
  value?: ValueSDKType;
}
function createBaseValue(): Value {
  return {
    nullValue: undefined,
    boolValue: undefined,
    int64Value: undefined,
    uint64Value: undefined,
    doubleValue: undefined,
    stringValue: undefined,
    bytesValue: undefined,
    enumValue: undefined,
    objectValue: undefined,
    mapValue: undefined,
    listValue: undefined,
    typeValue: undefined
  };
}
export const Value = {
  typeUrl: "/google.api.expr.v1beta1.Value",
  encode(message: Value, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nullValue !== undefined) {
      writer.uint32(8).int32(message.nullValue);
    }
    if (message.boolValue !== undefined) {
      writer.uint32(16).bool(message.boolValue);
    }
    if (message.int64Value !== undefined) {
      writer.uint32(24).int64(message.int64Value);
    }
    if (message.uint64Value !== undefined) {
      writer.uint32(32).uint64(message.uint64Value);
    }
    if (message.doubleValue !== undefined) {
      writer.uint32(41).double(message.doubleValue);
    }
    if (message.stringValue !== undefined) {
      writer.uint32(50).string(message.stringValue);
    }
    if (message.bytesValue !== undefined) {
      writer.uint32(58).bytes(message.bytesValue);
    }
    if (message.enumValue !== undefined) {
      EnumValue.encode(message.enumValue, writer.uint32(74).fork()).ldelim();
    }
    if (message.objectValue !== undefined) {
      Any.encode(message.objectValue, writer.uint32(82).fork()).ldelim();
    }
    if (message.mapValue !== undefined) {
      MapValue.encode(message.mapValue, writer.uint32(90).fork()).ldelim();
    }
    if (message.listValue !== undefined) {
      ListValue.encode(message.listValue, writer.uint32(98).fork()).ldelim();
    }
    if (message.typeValue !== undefined) {
      writer.uint32(122).string(message.typeValue);
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
          message.boolValue = reader.bool();
          break;
        case 3:
          message.int64Value = (reader.int64() as Long);
          break;
        case 4:
          message.uint64Value = (reader.uint64() as Long);
          break;
        case 5:
          message.doubleValue = reader.double();
          break;
        case 6:
          message.stringValue = reader.string();
          break;
        case 7:
          message.bytesValue = reader.bytes();
          break;
        case 9:
          message.enumValue = EnumValue.decode(reader, reader.uint32());
          break;
        case 10:
          message.objectValue = Any.decode(reader, reader.uint32());
          break;
        case 11:
          message.mapValue = MapValue.decode(reader, reader.uint32());
          break;
        case 12:
          message.listValue = ListValue.decode(reader, reader.uint32());
          break;
        case 15:
          message.typeValue = reader.string();
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
      boolValue: isSet(object.boolValue) ? Boolean(object.boolValue) : undefined,
      int64Value: isSet(object.int64Value) ? Long.fromValue(object.int64Value) : undefined,
      uint64Value: isSet(object.uint64Value) ? Long.fromValue(object.uint64Value) : undefined,
      doubleValue: isSet(object.doubleValue) ? Number(object.doubleValue) : undefined,
      stringValue: isSet(object.stringValue) ? String(object.stringValue) : undefined,
      bytesValue: isSet(object.bytesValue) ? bytesFromBase64(object.bytesValue) : undefined,
      enumValue: isSet(object.enumValue) ? EnumValue.fromJSON(object.enumValue) : undefined,
      objectValue: isSet(object.objectValue) ? Any.fromJSON(object.objectValue) : undefined,
      mapValue: isSet(object.mapValue) ? MapValue.fromJSON(object.mapValue) : undefined,
      listValue: isSet(object.listValue) ? ListValue.fromJSON(object.listValue) : undefined,
      typeValue: isSet(object.typeValue) ? String(object.typeValue) : undefined
    };
  },
  toJSON(message: Value): unknown {
    const obj: any = {};
    message.nullValue !== undefined && (obj.nullValue = nullValueToJSON(message.nullValue));
    message.boolValue !== undefined && (obj.boolValue = message.boolValue);
    message.int64Value !== undefined && (obj.int64Value = (message.int64Value || undefined).toString());
    message.uint64Value !== undefined && (obj.uint64Value = (message.uint64Value || undefined).toString());
    message.doubleValue !== undefined && (obj.doubleValue = message.doubleValue);
    message.stringValue !== undefined && (obj.stringValue = message.stringValue);
    message.bytesValue !== undefined && (obj.bytesValue = message.bytesValue !== undefined ? base64FromBytes(message.bytesValue) : undefined);
    message.enumValue !== undefined && (obj.enumValue = message.enumValue ? EnumValue.toJSON(message.enumValue) : undefined);
    message.objectValue !== undefined && (obj.objectValue = message.objectValue ? Any.toJSON(message.objectValue) : undefined);
    message.mapValue !== undefined && (obj.mapValue = message.mapValue ? MapValue.toJSON(message.mapValue) : undefined);
    message.listValue !== undefined && (obj.listValue = message.listValue ? ListValue.toJSON(message.listValue) : undefined);
    message.typeValue !== undefined && (obj.typeValue = message.typeValue);
    return obj;
  },
  fromPartial(object: DeepPartial<Value>): Value {
    const message = createBaseValue();
    message.nullValue = object.nullValue ?? undefined;
    message.boolValue = object.boolValue ?? undefined;
    message.int64Value = object.int64Value !== undefined && object.int64Value !== null ? Long.fromValue(object.int64Value) : undefined;
    message.uint64Value = object.uint64Value !== undefined && object.uint64Value !== null ? Long.fromValue(object.uint64Value) : undefined;
    message.doubleValue = object.doubleValue ?? undefined;
    message.stringValue = object.stringValue ?? undefined;
    message.bytesValue = object.bytesValue ?? undefined;
    message.enumValue = object.enumValue !== undefined && object.enumValue !== null ? EnumValue.fromPartial(object.enumValue) : undefined;
    message.objectValue = object.objectValue !== undefined && object.objectValue !== null ? Any.fromPartial(object.objectValue) : undefined;
    message.mapValue = object.mapValue !== undefined && object.mapValue !== null ? MapValue.fromPartial(object.mapValue) : undefined;
    message.listValue = object.listValue !== undefined && object.listValue !== null ? ListValue.fromPartial(object.listValue) : undefined;
    message.typeValue = object.typeValue ?? undefined;
    return message;
  },
  fromSDK(object: ValueSDKType): Value {
    return {
      nullValue: isSet(object.null_value) ? nullValueFromJSON(object.null_value) : undefined,
      boolValue: object?.bool_value,
      int64Value: object?.int64_value,
      uint64Value: object?.uint64_value,
      doubleValue: object?.double_value,
      stringValue: object?.string_value,
      bytesValue: object?.bytes_value,
      enumValue: object.enum_value ? EnumValue.fromSDK(object.enum_value) : undefined,
      objectValue: object.object_value ? Any.fromSDK(object.object_value) : undefined,
      mapValue: object.map_value ? MapValue.fromSDK(object.map_value) : undefined,
      listValue: object.list_value ? ListValue.fromSDK(object.list_value) : undefined,
      typeValue: object?.type_value
    };
  },
  toSDK(message: Value): ValueSDKType {
    const obj: any = {};
    message.nullValue !== undefined && (obj.null_value = nullValueToJSON(message.nullValue));
    obj.bool_value = message.boolValue;
    obj.int64_value = message.int64Value;
    obj.uint64_value = message.uint64Value;
    obj.double_value = message.doubleValue;
    obj.string_value = message.stringValue;
    obj.bytes_value = message.bytesValue;
    message.enumValue !== undefined && (obj.enum_value = message.enumValue ? EnumValue.toSDK(message.enumValue) : undefined);
    message.objectValue !== undefined && (obj.object_value = message.objectValue ? Any.toSDK(message.objectValue) : undefined);
    message.mapValue !== undefined && (obj.map_value = message.mapValue ? MapValue.toSDK(message.mapValue) : undefined);
    message.listValue !== undefined && (obj.list_value = message.listValue ? ListValue.toSDK(message.listValue) : undefined);
    obj.type_value = message.typeValue;
    return obj;
  },
  fromAmino(object: ValueAmino): Value {
    return {
      nullValue: isSet(object.null_value) ? nullValueFromJSON(object.null_value) : undefined,
      boolValue: object?.bool_value,
      int64Value: object?.int64_value ? Long.fromString(object.int64_value) : undefined,
      uint64Value: object?.uint64_value ? Long.fromString(object.uint64_value) : undefined,
      doubleValue: object?.double_value,
      stringValue: object?.string_value,
      bytesValue: object?.bytes_value,
      enumValue: object?.enum_value ? EnumValue.fromAmino(object.enum_value) : undefined,
      objectValue: object?.object_value ? Any.fromAmino(object.object_value) : undefined,
      mapValue: object?.map_value ? MapValue.fromAmino(object.map_value) : undefined,
      listValue: object?.list_value ? ListValue.fromAmino(object.list_value) : undefined,
      typeValue: object?.type_value
    };
  },
  toAmino(message: Value): ValueAmino {
    const obj: any = {};
    obj.null_value = message.nullValue;
    obj.bool_value = message.boolValue;
    obj.int64_value = message.int64Value ? message.int64Value.toString() : undefined;
    obj.uint64_value = message.uint64Value ? message.uint64Value.toString() : undefined;
    obj.double_value = message.doubleValue;
    obj.string_value = message.stringValue;
    obj.bytes_value = message.bytesValue;
    obj.enum_value = message.enumValue ? EnumValue.toAmino(message.enumValue) : undefined;
    obj.object_value = message.objectValue ? Any.toAmino(message.objectValue) : undefined;
    obj.map_value = message.mapValue ? MapValue.toAmino(message.mapValue) : undefined;
    obj.list_value = message.listValue ? ListValue.toAmino(message.listValue) : undefined;
    obj.type_value = message.typeValue;
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
      typeUrl: "/google.api.expr.v1beta1.Value",
      value: Value.encode(message).finish()
    };
  }
};
function createBaseEnumValue(): EnumValue {
  return {
    type: "",
    value: 0
  };
}
export const EnumValue = {
  typeUrl: "/google.api.expr.v1beta1.EnumValue",
  encode(message: EnumValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EnumValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.value = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EnumValue {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      value: isSet(object.value) ? Number(object.value) : 0
    };
  },
  toJSON(message: EnumValue): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },
  fromPartial(object: DeepPartial<EnumValue>): EnumValue {
    const message = createBaseEnumValue();
    message.type = object.type ?? "";
    message.value = object.value ?? 0;
    return message;
  },
  fromSDK(object: EnumValueSDKType): EnumValue {
    return {
      type: object?.type,
      value: object?.value
    };
  },
  toSDK(message: EnumValue): EnumValueSDKType {
    const obj: any = {};
    obj.type = message.type;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: EnumValueAmino): EnumValue {
    return {
      type: object.type,
      value: object.value
    };
  },
  toAmino(message: EnumValue): EnumValueAmino {
    const obj: any = {};
    obj.type = message.type;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: EnumValueAminoMsg): EnumValue {
    return EnumValue.fromAmino(object.value);
  },
  fromProtoMsg(message: EnumValueProtoMsg): EnumValue {
    return EnumValue.decode(message.value);
  },
  toProto(message: EnumValue): Uint8Array {
    return EnumValue.encode(message).finish();
  },
  toProtoMsg(message: EnumValue): EnumValueProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1beta1.EnumValue",
      value: EnumValue.encode(message).finish()
    };
  }
};
function createBaseListValue(): ListValue {
  return {
    values: []
  };
}
export const ListValue = {
  typeUrl: "/google.api.expr.v1beta1.ListValue",
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
      typeUrl: "/google.api.expr.v1beta1.ListValue",
      value: ListValue.encode(message).finish()
    };
  }
};
function createBaseMapValue(): MapValue {
  return {
    entries: []
  };
}
export const MapValue = {
  typeUrl: "/google.api.expr.v1beta1.MapValue",
  encode(message: MapValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entries) {
      MapValue_Entry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MapValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(MapValue_Entry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MapValue {
    return {
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => MapValue_Entry.fromJSON(e)) : []
    };
  },
  toJSON(message: MapValue): unknown {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? MapValue_Entry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MapValue>): MapValue {
    const message = createBaseMapValue();
    message.entries = object.entries?.map(e => MapValue_Entry.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MapValueSDKType): MapValue {
    return {
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => MapValue_Entry.fromSDK(e)) : []
    };
  },
  toSDK(message: MapValue): MapValueSDKType {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? MapValue_Entry.toSDK(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromAmino(object: MapValueAmino): MapValue {
    return {
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => MapValue_Entry.fromAmino(e)) : []
    };
  },
  toAmino(message: MapValue): MapValueAmino {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? MapValue_Entry.toAmino(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromAminoMsg(object: MapValueAminoMsg): MapValue {
    return MapValue.fromAmino(object.value);
  },
  fromProtoMsg(message: MapValueProtoMsg): MapValue {
    return MapValue.decode(message.value);
  },
  toProto(message: MapValue): Uint8Array {
    return MapValue.encode(message).finish();
  },
  toProtoMsg(message: MapValue): MapValueProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1beta1.MapValue",
      value: MapValue.encode(message).finish()
    };
  }
};
function createBaseMapValue_Entry(): MapValue_Entry {
  return {
    key: undefined,
    value: undefined
  };
}
export const MapValue_Entry = {
  typeUrl: "/google.api.expr.v1beta1.Entry",
  encode(message: MapValue_Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== undefined) {
      Value.encode(message.key, writer.uint32(10).fork()).ldelim();
    }
    if (message.value !== undefined) {
      Value.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MapValue_Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapValue_Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = Value.decode(reader, reader.uint32());
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
  fromJSON(object: any): MapValue_Entry {
    return {
      key: isSet(object.key) ? Value.fromJSON(object.key) : undefined,
      value: isSet(object.value) ? Value.fromJSON(object.value) : undefined
    };
  },
  toJSON(message: MapValue_Entry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key ? Value.toJSON(message.key) : undefined);
    message.value !== undefined && (obj.value = message.value ? Value.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MapValue_Entry>): MapValue_Entry {
    const message = createBaseMapValue_Entry();
    message.key = object.key !== undefined && object.key !== null ? Value.fromPartial(object.key) : undefined;
    message.value = object.value !== undefined && object.value !== null ? Value.fromPartial(object.value) : undefined;
    return message;
  },
  fromSDK(object: MapValue_EntrySDKType): MapValue_Entry {
    return {
      key: object.key ? Value.fromSDK(object.key) : undefined,
      value: object.value ? Value.fromSDK(object.value) : undefined
    };
  },
  toSDK(message: MapValue_Entry): MapValue_EntrySDKType {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key ? Value.toSDK(message.key) : undefined);
    message.value !== undefined && (obj.value = message.value ? Value.toSDK(message.value) : undefined);
    return obj;
  },
  fromAmino(object: MapValue_EntryAmino): MapValue_Entry {
    return {
      key: object?.key ? Value.fromAmino(object.key) : undefined,
      value: object?.value ? Value.fromAmino(object.value) : undefined
    };
  },
  toAmino(message: MapValue_Entry): MapValue_EntryAmino {
    const obj: any = {};
    obj.key = message.key ? Value.toAmino(message.key) : undefined;
    obj.value = message.value ? Value.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: MapValue_EntryAminoMsg): MapValue_Entry {
    return MapValue_Entry.fromAmino(object.value);
  },
  fromProtoMsg(message: MapValue_EntryProtoMsg): MapValue_Entry {
    return MapValue_Entry.decode(message.value);
  },
  toProto(message: MapValue_Entry): Uint8Array {
    return MapValue_Entry.encode(message).finish();
  },
  toProtoMsg(message: MapValue_Entry): MapValue_EntryProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1beta1.Entry",
      value: MapValue_Entry.encode(message).finish()
    };
  }
};