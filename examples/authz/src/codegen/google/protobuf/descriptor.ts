//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { JsonSafe } from "../../json-safe";
import { DeepPartial, isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export const protobufPackage = "google.protobuf";
export enum FieldDescriptorProto_Type {
  /**
   * TYPE_DOUBLE - 0 is reserved for errors.
   * Order is weird for historical reasons.
   */
  TYPE_DOUBLE = 1,
  TYPE_FLOAT = 2,
  /**
   * TYPE_INT64 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
   * negative values are likely.
   */
  TYPE_INT64 = 3,
  TYPE_UINT64 = 4,
  /**
   * TYPE_INT32 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
   * negative values are likely.
   */
  TYPE_INT32 = 5,
  TYPE_FIXED64 = 6,
  TYPE_FIXED32 = 7,
  TYPE_BOOL = 8,
  TYPE_STRING = 9,
  /**
   * TYPE_GROUP - Tag-delimited aggregate.
   * Group type is deprecated and not supported in proto3. However, Proto3
   * implementations should still be able to parse the group wire format and
   * treat group fields as unknown fields.
   */
  TYPE_GROUP = 10,
  TYPE_MESSAGE = 11,
  /** TYPE_BYTES - New in version 2. */
  TYPE_BYTES = 12,
  TYPE_UINT32 = 13,
  TYPE_ENUM = 14,
  TYPE_SFIXED32 = 15,
  TYPE_SFIXED64 = 16,
  /** TYPE_SINT32 - Uses ZigZag encoding. */
  TYPE_SINT32 = 17,
  /** TYPE_SINT64 - Uses ZigZag encoding. */
  TYPE_SINT64 = 18,
  UNRECOGNIZED = -1,
}
export const FieldDescriptorProto_TypeSDKType = FieldDescriptorProto_Type;
export const FieldDescriptorProto_TypeAmino = FieldDescriptorProto_Type;
export function fieldDescriptorProto_TypeFromJSON(object: any): FieldDescriptorProto_Type {
  switch (object) {
    case 1:
    case "TYPE_DOUBLE":
      return FieldDescriptorProto_Type.TYPE_DOUBLE;
    case 2:
    case "TYPE_FLOAT":
      return FieldDescriptorProto_Type.TYPE_FLOAT;
    case 3:
    case "TYPE_INT64":
      return FieldDescriptorProto_Type.TYPE_INT64;
    case 4:
    case "TYPE_UINT64":
      return FieldDescriptorProto_Type.TYPE_UINT64;
    case 5:
    case "TYPE_INT32":
      return FieldDescriptorProto_Type.TYPE_INT32;
    case 6:
    case "TYPE_FIXED64":
      return FieldDescriptorProto_Type.TYPE_FIXED64;
    case 7:
    case "TYPE_FIXED32":
      return FieldDescriptorProto_Type.TYPE_FIXED32;
    case 8:
    case "TYPE_BOOL":
      return FieldDescriptorProto_Type.TYPE_BOOL;
    case 9:
    case "TYPE_STRING":
      return FieldDescriptorProto_Type.TYPE_STRING;
    case 10:
    case "TYPE_GROUP":
      return FieldDescriptorProto_Type.TYPE_GROUP;
    case 11:
    case "TYPE_MESSAGE":
      return FieldDescriptorProto_Type.TYPE_MESSAGE;
    case 12:
    case "TYPE_BYTES":
      return FieldDescriptorProto_Type.TYPE_BYTES;
    case 13:
    case "TYPE_UINT32":
      return FieldDescriptorProto_Type.TYPE_UINT32;
    case 14:
    case "TYPE_ENUM":
      return FieldDescriptorProto_Type.TYPE_ENUM;
    case 15:
    case "TYPE_SFIXED32":
      return FieldDescriptorProto_Type.TYPE_SFIXED32;
    case 16:
    case "TYPE_SFIXED64":
      return FieldDescriptorProto_Type.TYPE_SFIXED64;
    case 17:
    case "TYPE_SINT32":
      return FieldDescriptorProto_Type.TYPE_SINT32;
    case 18:
    case "TYPE_SINT64":
      return FieldDescriptorProto_Type.TYPE_SINT64;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldDescriptorProto_Type.UNRECOGNIZED;
  }
}
export function fieldDescriptorProto_TypeToJSON(object: FieldDescriptorProto_Type): string {
  switch (object) {
    case FieldDescriptorProto_Type.TYPE_DOUBLE:
      return "TYPE_DOUBLE";
    case FieldDescriptorProto_Type.TYPE_FLOAT:
      return "TYPE_FLOAT";
    case FieldDescriptorProto_Type.TYPE_INT64:
      return "TYPE_INT64";
    case FieldDescriptorProto_Type.TYPE_UINT64:
      return "TYPE_UINT64";
    case FieldDescriptorProto_Type.TYPE_INT32:
      return "TYPE_INT32";
    case FieldDescriptorProto_Type.TYPE_FIXED64:
      return "TYPE_FIXED64";
    case FieldDescriptorProto_Type.TYPE_FIXED32:
      return "TYPE_FIXED32";
    case FieldDescriptorProto_Type.TYPE_BOOL:
      return "TYPE_BOOL";
    case FieldDescriptorProto_Type.TYPE_STRING:
      return "TYPE_STRING";
    case FieldDescriptorProto_Type.TYPE_GROUP:
      return "TYPE_GROUP";
    case FieldDescriptorProto_Type.TYPE_MESSAGE:
      return "TYPE_MESSAGE";
    case FieldDescriptorProto_Type.TYPE_BYTES:
      return "TYPE_BYTES";
    case FieldDescriptorProto_Type.TYPE_UINT32:
      return "TYPE_UINT32";
    case FieldDescriptorProto_Type.TYPE_ENUM:
      return "TYPE_ENUM";
    case FieldDescriptorProto_Type.TYPE_SFIXED32:
      return "TYPE_SFIXED32";
    case FieldDescriptorProto_Type.TYPE_SFIXED64:
      return "TYPE_SFIXED64";
    case FieldDescriptorProto_Type.TYPE_SINT32:
      return "TYPE_SINT32";
    case FieldDescriptorProto_Type.TYPE_SINT64:
      return "TYPE_SINT64";
    case FieldDescriptorProto_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum FieldDescriptorProto_Label {
  /** LABEL_OPTIONAL - 0 is reserved for errors */
  LABEL_OPTIONAL = 1,
  LABEL_REQUIRED = 2,
  LABEL_REPEATED = 3,
  UNRECOGNIZED = -1,
}
export const FieldDescriptorProto_LabelSDKType = FieldDescriptorProto_Label;
export const FieldDescriptorProto_LabelAmino = FieldDescriptorProto_Label;
export function fieldDescriptorProto_LabelFromJSON(object: any): FieldDescriptorProto_Label {
  switch (object) {
    case 1:
    case "LABEL_OPTIONAL":
      return FieldDescriptorProto_Label.LABEL_OPTIONAL;
    case 2:
    case "LABEL_REQUIRED":
      return FieldDescriptorProto_Label.LABEL_REQUIRED;
    case 3:
    case "LABEL_REPEATED":
      return FieldDescriptorProto_Label.LABEL_REPEATED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldDescriptorProto_Label.UNRECOGNIZED;
  }
}
export function fieldDescriptorProto_LabelToJSON(object: FieldDescriptorProto_Label): string {
  switch (object) {
    case FieldDescriptorProto_Label.LABEL_OPTIONAL:
      return "LABEL_OPTIONAL";
    case FieldDescriptorProto_Label.LABEL_REQUIRED:
      return "LABEL_REQUIRED";
    case FieldDescriptorProto_Label.LABEL_REPEATED:
      return "LABEL_REPEATED";
    case FieldDescriptorProto_Label.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Generated classes can be optimized for speed or code size. */
export enum FileOptions_OptimizeMode {
  /**
   * SPEED - Generate complete code for parsing, serialization,
   * etc.
   */
  SPEED = 1,
  /** CODE_SIZE - Use ReflectionOps to implement these methods. */
  CODE_SIZE = 2,
  /** LITE_RUNTIME - Generate code using MessageLite and the lite runtime. */
  LITE_RUNTIME = 3,
  UNRECOGNIZED = -1,
}
export const FileOptions_OptimizeModeSDKType = FileOptions_OptimizeMode;
export const FileOptions_OptimizeModeAmino = FileOptions_OptimizeMode;
export function fileOptions_OptimizeModeFromJSON(object: any): FileOptions_OptimizeMode {
  switch (object) {
    case 1:
    case "SPEED":
      return FileOptions_OptimizeMode.SPEED;
    case 2:
    case "CODE_SIZE":
      return FileOptions_OptimizeMode.CODE_SIZE;
    case 3:
    case "LITE_RUNTIME":
      return FileOptions_OptimizeMode.LITE_RUNTIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FileOptions_OptimizeMode.UNRECOGNIZED;
  }
}
export function fileOptions_OptimizeModeToJSON(object: FileOptions_OptimizeMode): string {
  switch (object) {
    case FileOptions_OptimizeMode.SPEED:
      return "SPEED";
    case FileOptions_OptimizeMode.CODE_SIZE:
      return "CODE_SIZE";
    case FileOptions_OptimizeMode.LITE_RUNTIME:
      return "LITE_RUNTIME";
    case FileOptions_OptimizeMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum FieldOptions_CType {
  /** STRING - Default mode. */
  STRING = 0,
  CORD = 1,
  STRING_PIECE = 2,
  UNRECOGNIZED = -1,
}
export const FieldOptions_CTypeSDKType = FieldOptions_CType;
export const FieldOptions_CTypeAmino = FieldOptions_CType;
export function fieldOptions_CTypeFromJSON(object: any): FieldOptions_CType {
  switch (object) {
    case 0:
    case "STRING":
      return FieldOptions_CType.STRING;
    case 1:
    case "CORD":
      return FieldOptions_CType.CORD;
    case 2:
    case "STRING_PIECE":
      return FieldOptions_CType.STRING_PIECE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldOptions_CType.UNRECOGNIZED;
  }
}
export function fieldOptions_CTypeToJSON(object: FieldOptions_CType): string {
  switch (object) {
    case FieldOptions_CType.STRING:
      return "STRING";
    case FieldOptions_CType.CORD:
      return "CORD";
    case FieldOptions_CType.STRING_PIECE:
      return "STRING_PIECE";
    case FieldOptions_CType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum FieldOptions_JSType {
  /** JS_NORMAL - Use the default type. */
  JS_NORMAL = 0,
  /** JS_STRING - Use JavaScript strings. */
  JS_STRING = 1,
  /** JS_NUMBER - Use JavaScript numbers. */
  JS_NUMBER = 2,
  UNRECOGNIZED = -1,
}
export const FieldOptions_JSTypeSDKType = FieldOptions_JSType;
export const FieldOptions_JSTypeAmino = FieldOptions_JSType;
export function fieldOptions_JSTypeFromJSON(object: any): FieldOptions_JSType {
  switch (object) {
    case 0:
    case "JS_NORMAL":
      return FieldOptions_JSType.JS_NORMAL;
    case 1:
    case "JS_STRING":
      return FieldOptions_JSType.JS_STRING;
    case 2:
    case "JS_NUMBER":
      return FieldOptions_JSType.JS_NUMBER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldOptions_JSType.UNRECOGNIZED;
  }
}
export function fieldOptions_JSTypeToJSON(object: FieldOptions_JSType): string {
  switch (object) {
    case FieldOptions_JSType.JS_NORMAL:
      return "JS_NORMAL";
    case FieldOptions_JSType.JS_STRING:
      return "JS_STRING";
    case FieldOptions_JSType.JS_NUMBER:
      return "JS_NUMBER";
    case FieldOptions_JSType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Is this method side-effect-free (or safe in HTTP parlance), or idempotent,
 * or neither? HTTP based RPC implementation may choose GET verb for safe
 * methods, and PUT verb for idempotent methods instead of the default POST.
 */
export enum MethodOptions_IdempotencyLevel {
  IDEMPOTENCY_UNKNOWN = 0,
  /** NO_SIDE_EFFECTS - implies idempotent */
  NO_SIDE_EFFECTS = 1,
  /** IDEMPOTENT - idempotent, but may have side effects */
  IDEMPOTENT = 2,
  UNRECOGNIZED = -1,
}
export const MethodOptions_IdempotencyLevelSDKType = MethodOptions_IdempotencyLevel;
export const MethodOptions_IdempotencyLevelAmino = MethodOptions_IdempotencyLevel;
export function methodOptions_IdempotencyLevelFromJSON(object: any): MethodOptions_IdempotencyLevel {
  switch (object) {
    case 0:
    case "IDEMPOTENCY_UNKNOWN":
      return MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN;
    case 1:
    case "NO_SIDE_EFFECTS":
      return MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS;
    case 2:
    case "IDEMPOTENT":
      return MethodOptions_IdempotencyLevel.IDEMPOTENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MethodOptions_IdempotencyLevel.UNRECOGNIZED;
  }
}
export function methodOptions_IdempotencyLevelToJSON(object: MethodOptions_IdempotencyLevel): string {
  switch (object) {
    case MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
      return "IDEMPOTENCY_UNKNOWN";
    case MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
      return "NO_SIDE_EFFECTS";
    case MethodOptions_IdempotencyLevel.IDEMPOTENT:
      return "IDEMPOTENT";
    case MethodOptions_IdempotencyLevel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * The protocol compiler can output a FileDescriptorSet containing the .proto
 * files it parses.
 */
export interface FileDescriptorSet {
  file: FileDescriptorProto[];
}
export interface FileDescriptorSetProtoMsg {
  typeUrl: "/google.protobuf.FileDescriptorSet";
  value: Uint8Array;
}
/**
 * The protocol compiler can output a FileDescriptorSet containing the .proto
 * files it parses.
 */
export interface FileDescriptorSetAmino {
  file?: FileDescriptorProtoAmino[];
}
export interface FileDescriptorSetAminoMsg {
  type: "/google.protobuf.FileDescriptorSet";
  value: FileDescriptorSetAmino;
}
/**
 * The protocol compiler can output a FileDescriptorSet containing the .proto
 * files it parses.
 */
export interface FileDescriptorSetSDKType {
  file: FileDescriptorProtoSDKType[];
}
/** Describes a complete .proto file. */
export interface FileDescriptorProto {
  /** file name, relative to root of source tree */
  name: string;
  package: string;
  /** Names of files imported by this file. */
  dependency: string[];
  /** Indexes of the public imported files in the dependency list above. */
  publicDependency: number[];
  /**
   * Indexes of the weak imported files in the dependency list.
   * For Google-internal migration only. Do not use.
   */
  weakDependency: number[];
  /** All top-level definitions in this file. */
  messageType: DescriptorProto[];
  enumType: EnumDescriptorProto[];
  service: ServiceDescriptorProto[];
  extension: FieldDescriptorProto[];
  options?: FileOptions;
  /**
   * This field contains optional information about the original source code.
   * You may safely remove this entire field without harming runtime
   * functionality of the descriptors -- the information is needed only by
   * development tools.
   */
  sourceCodeInfo?: SourceCodeInfo;
  /**
   * The syntax of the proto file.
   * The supported values are "proto2" and "proto3".
   */
  syntax: string;
}
export interface FileDescriptorProtoProtoMsg {
  typeUrl: "/google.protobuf.FileDescriptorProto";
  value: Uint8Array;
}
/** Describes a complete .proto file. */
export interface FileDescriptorProtoAmino {
  /** file name, relative to root of source tree */
  name?: string;
  package?: string;
  /** Names of files imported by this file. */
  dependency?: string[];
  /** Indexes of the public imported files in the dependency list above. */
  public_dependency?: number[];
  /**
   * Indexes of the weak imported files in the dependency list.
   * For Google-internal migration only. Do not use.
   */
  weak_dependency?: number[];
  /** All top-level definitions in this file. */
  message_type?: DescriptorProtoAmino[];
  enum_type?: EnumDescriptorProtoAmino[];
  service?: ServiceDescriptorProtoAmino[];
  extension?: FieldDescriptorProtoAmino[];
  options?: FileOptionsAmino;
  /**
   * This field contains optional information about the original source code.
   * You may safely remove this entire field without harming runtime
   * functionality of the descriptors -- the information is needed only by
   * development tools.
   */
  source_code_info?: SourceCodeInfoAmino;
  /**
   * The syntax of the proto file.
   * The supported values are "proto2" and "proto3".
   */
  syntax?: string;
}
export interface FileDescriptorProtoAminoMsg {
  type: "/google.protobuf.FileDescriptorProto";
  value: FileDescriptorProtoAmino;
}
/** Describes a complete .proto file. */
export interface FileDescriptorProtoSDKType {
  name: string;
  package: string;
  dependency: string[];
  public_dependency: number[];
  weak_dependency: number[];
  message_type: DescriptorProtoSDKType[];
  enum_type: EnumDescriptorProtoSDKType[];
  service: ServiceDescriptorProtoSDKType[];
  extension: FieldDescriptorProtoSDKType[];
  options?: FileOptionsSDKType;
  source_code_info?: SourceCodeInfoSDKType;
  syntax: string;
}
/** Describes a message type. */
export interface DescriptorProto {
  name: string;
  field: FieldDescriptorProto[];
  extension: FieldDescriptorProto[];
  nestedType: DescriptorProto[];
  enumType: EnumDescriptorProto[];
  extensionRange: DescriptorProto_ExtensionRange[];
  oneofDecl: OneofDescriptorProto[];
  options?: MessageOptions;
  reservedRange: DescriptorProto_ReservedRange[];
  /**
   * Reserved field names, which may not be used by fields in the same message.
   * A given name may only be reserved once.
   */
  reservedName: string[];
}
export interface DescriptorProtoProtoMsg {
  typeUrl: "/google.protobuf.DescriptorProto";
  value: Uint8Array;
}
/** Describes a message type. */
export interface DescriptorProtoAmino {
  name?: string;
  field?: FieldDescriptorProtoAmino[];
  extension?: FieldDescriptorProtoAmino[];
  nested_type?: DescriptorProtoAmino[];
  enum_type?: EnumDescriptorProtoAmino[];
  extension_range?: DescriptorProto_ExtensionRangeAmino[];
  oneof_decl?: OneofDescriptorProtoAmino[];
  options?: MessageOptionsAmino;
  reserved_range?: DescriptorProto_ReservedRangeAmino[];
  /**
   * Reserved field names, which may not be used by fields in the same message.
   * A given name may only be reserved once.
   */
  reserved_name?: string[];
}
export interface DescriptorProtoAminoMsg {
  type: "/google.protobuf.DescriptorProto";
  value: DescriptorProtoAmino;
}
/** Describes a message type. */
export interface DescriptorProtoSDKType {
  name: string;
  field: FieldDescriptorProtoSDKType[];
  extension: FieldDescriptorProtoSDKType[];
  nested_type: DescriptorProtoSDKType[];
  enum_type: EnumDescriptorProtoSDKType[];
  extension_range: DescriptorProto_ExtensionRangeSDKType[];
  oneof_decl: OneofDescriptorProtoSDKType[];
  options?: MessageOptionsSDKType;
  reserved_range: DescriptorProto_ReservedRangeSDKType[];
  reserved_name: string[];
}
export interface DescriptorProto_ExtensionRange {
  /** Inclusive. */
  start: number;
  /** Exclusive. */
  end: number;
  options?: ExtensionRangeOptions;
}
export interface DescriptorProto_ExtensionRangeProtoMsg {
  typeUrl: "/google.protobuf.ExtensionRange";
  value: Uint8Array;
}
export interface DescriptorProto_ExtensionRangeAmino {
  /** Inclusive. */
  start?: number;
  /** Exclusive. */
  end?: number;
  options?: ExtensionRangeOptionsAmino;
}
export interface DescriptorProto_ExtensionRangeAminoMsg {
  type: "/google.protobuf.ExtensionRange";
  value: DescriptorProto_ExtensionRangeAmino;
}
export interface DescriptorProto_ExtensionRangeSDKType {
  start: number;
  end: number;
  options?: ExtensionRangeOptionsSDKType;
}
/**
 * Range of reserved tag numbers. Reserved tag numbers may not be used by
 * fields or extension ranges in the same message. Reserved ranges may
 * not overlap.
 */
export interface DescriptorProto_ReservedRange {
  /** Inclusive. */
  start: number;
  /** Exclusive. */
  end: number;
}
export interface DescriptorProto_ReservedRangeProtoMsg {
  typeUrl: "/google.protobuf.ReservedRange";
  value: Uint8Array;
}
/**
 * Range of reserved tag numbers. Reserved tag numbers may not be used by
 * fields or extension ranges in the same message. Reserved ranges may
 * not overlap.
 */
export interface DescriptorProto_ReservedRangeAmino {
  /** Inclusive. */
  start?: number;
  /** Exclusive. */
  end?: number;
}
export interface DescriptorProto_ReservedRangeAminoMsg {
  type: "/google.protobuf.ReservedRange";
  value: DescriptorProto_ReservedRangeAmino;
}
/**
 * Range of reserved tag numbers. Reserved tag numbers may not be used by
 * fields or extension ranges in the same message. Reserved ranges may
 * not overlap.
 */
export interface DescriptorProto_ReservedRangeSDKType {
  start: number;
  end: number;
}
export interface ExtensionRangeOptions {
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}
export interface ExtensionRangeOptionsProtoMsg {
  typeUrl: "/google.protobuf.ExtensionRangeOptions";
  value: Uint8Array;
}
export interface ExtensionRangeOptionsAmino {
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option?: UninterpretedOptionAmino[];
}
export interface ExtensionRangeOptionsAminoMsg {
  type: "/google.protobuf.ExtensionRangeOptions";
  value: ExtensionRangeOptionsAmino;
}
export interface ExtensionRangeOptionsSDKType {
  uninterpreted_option: UninterpretedOptionSDKType[];
}
/** Describes a field within a message. */
export interface FieldDescriptorProto {
  name: string;
  number: number;
  label: FieldDescriptorProto_Label;
  /**
   * If type_name is set, this need not be set.  If both this and type_name
   * are set, this must be one of TYPE_ENUM, TYPE_MESSAGE or TYPE_GROUP.
   */
  type: FieldDescriptorProto_Type;
  /**
   * For message and enum types, this is the name of the type.  If the name
   * starts with a '.', it is fully-qualified.  Otherwise, C++-like scoping
   * rules are used to find the type (i.e. first the nested types within this
   * message are searched, then within the parent, on up to the root
   * namespace).
   */
  typeName: string;
  /**
   * For extensions, this is the name of the type being extended.  It is
   * resolved in the same manner as type_name.
   */
  extendee: string;
  /**
   * For numeric types, contains the original text representation of the value.
   * For booleans, "true" or "false".
   * For strings, contains the default text contents (not escaped in any way).
   * For bytes, contains the C escaped value.  All bytes >= 128 are escaped.
   * TODO(kenton):  Base-64 encode?
   */
  defaultValue: string;
  /**
   * If set, gives the index of a oneof in the containing type's oneof_decl
   * list.  This field is a member of that oneof.
   */
  oneofIndex: number;
  /**
   * JSON name of this field. The value is set by protocol compiler. If the
   * user has set a "json_name" option on this field, that option's value
   * will be used. Otherwise, it's deduced from the field's name by converting
   * it to camelCase.
   */
  jsonName: string;
  options?: FieldOptions;
}
export interface FieldDescriptorProtoProtoMsg {
  typeUrl: "/google.protobuf.FieldDescriptorProto";
  value: Uint8Array;
}
/** Describes a field within a message. */
export interface FieldDescriptorProtoAmino {
  name?: string;
  number?: number;
  label?: FieldDescriptorProto_Label;
  /**
   * If type_name is set, this need not be set.  If both this and type_name
   * are set, this must be one of TYPE_ENUM, TYPE_MESSAGE or TYPE_GROUP.
   */
  type?: FieldDescriptorProto_Type;
  /**
   * For message and enum types, this is the name of the type.  If the name
   * starts with a '.', it is fully-qualified.  Otherwise, C++-like scoping
   * rules are used to find the type (i.e. first the nested types within this
   * message are searched, then within the parent, on up to the root
   * namespace).
   */
  type_name?: string;
  /**
   * For extensions, this is the name of the type being extended.  It is
   * resolved in the same manner as type_name.
   */
  extendee?: string;
  /**
   * For numeric types, contains the original text representation of the value.
   * For booleans, "true" or "false".
   * For strings, contains the default text contents (not escaped in any way).
   * For bytes, contains the C escaped value.  All bytes >= 128 are escaped.
   * TODO(kenton):  Base-64 encode?
   */
  default_value?: string;
  /**
   * If set, gives the index of a oneof in the containing type's oneof_decl
   * list.  This field is a member of that oneof.
   */
  oneof_index?: number;
  /**
   * JSON name of this field. The value is set by protocol compiler. If the
   * user has set a "json_name" option on this field, that option's value
   * will be used. Otherwise, it's deduced from the field's name by converting
   * it to camelCase.
   */
  json_name?: string;
  options?: FieldOptionsAmino;
}
export interface FieldDescriptorProtoAminoMsg {
  type: "/google.protobuf.FieldDescriptorProto";
  value: FieldDescriptorProtoAmino;
}
/** Describes a field within a message. */
export interface FieldDescriptorProtoSDKType {
  name: string;
  number: number;
  label: FieldDescriptorProto_Label;
  type: FieldDescriptorProto_Type;
  type_name: string;
  extendee: string;
  default_value: string;
  oneof_index: number;
  json_name: string;
  options?: FieldOptionsSDKType;
}
/** Describes a oneof. */
export interface OneofDescriptorProto {
  name: string;
  options?: OneofOptions;
}
export interface OneofDescriptorProtoProtoMsg {
  typeUrl: "/google.protobuf.OneofDescriptorProto";
  value: Uint8Array;
}
/** Describes a oneof. */
export interface OneofDescriptorProtoAmino {
  name?: string;
  options?: OneofOptionsAmino;
}
export interface OneofDescriptorProtoAminoMsg {
  type: "/google.protobuf.OneofDescriptorProto";
  value: OneofDescriptorProtoAmino;
}
/** Describes a oneof. */
export interface OneofDescriptorProtoSDKType {
  name: string;
  options?: OneofOptionsSDKType;
}
/** Describes an enum type. */
export interface EnumDescriptorProto {
  name: string;
  value: EnumValueDescriptorProto[];
  options?: EnumOptions;
  /**
   * Range of reserved numeric values. Reserved numeric values may not be used
   * by enum values in the same enum declaration. Reserved ranges may not
   * overlap.
   */
  reservedRange: EnumDescriptorProto_EnumReservedRange[];
  /**
   * Reserved enum value names, which may not be reused. A given name may only
   * be reserved once.
   */
  reservedName: string[];
}
export interface EnumDescriptorProtoProtoMsg {
  typeUrl: "/google.protobuf.EnumDescriptorProto";
  value: Uint8Array;
}
/** Describes an enum type. */
export interface EnumDescriptorProtoAmino {
  name?: string;
  value?: EnumValueDescriptorProtoAmino[];
  options?: EnumOptionsAmino;
  /**
   * Range of reserved numeric values. Reserved numeric values may not be used
   * by enum values in the same enum declaration. Reserved ranges may not
   * overlap.
   */
  reserved_range?: EnumDescriptorProto_EnumReservedRangeAmino[];
  /**
   * Reserved enum value names, which may not be reused. A given name may only
   * be reserved once.
   */
  reserved_name?: string[];
}
export interface EnumDescriptorProtoAminoMsg {
  type: "/google.protobuf.EnumDescriptorProto";
  value: EnumDescriptorProtoAmino;
}
/** Describes an enum type. */
export interface EnumDescriptorProtoSDKType {
  name: string;
  value: EnumValueDescriptorProtoSDKType[];
  options?: EnumOptionsSDKType;
  reserved_range: EnumDescriptorProto_EnumReservedRangeSDKType[];
  reserved_name: string[];
}
/**
 * Range of reserved numeric values. Reserved values may not be used by
 * entries in the same enum. Reserved ranges may not overlap.
 * 
 * Note that this is distinct from DescriptorProto.ReservedRange in that it
 * is inclusive such that it can appropriately represent the entire int32
 * domain.
 */
export interface EnumDescriptorProto_EnumReservedRange {
  /** Inclusive. */
  start: number;
  /** Inclusive. */
  end: number;
}
export interface EnumDescriptorProto_EnumReservedRangeProtoMsg {
  typeUrl: "/google.protobuf.EnumReservedRange";
  value: Uint8Array;
}
/**
 * Range of reserved numeric values. Reserved values may not be used by
 * entries in the same enum. Reserved ranges may not overlap.
 * 
 * Note that this is distinct from DescriptorProto.ReservedRange in that it
 * is inclusive such that it can appropriately represent the entire int32
 * domain.
 */
export interface EnumDescriptorProto_EnumReservedRangeAmino {
  /** Inclusive. */
  start?: number;
  /** Inclusive. */
  end?: number;
}
export interface EnumDescriptorProto_EnumReservedRangeAminoMsg {
  type: "/google.protobuf.EnumReservedRange";
  value: EnumDescriptorProto_EnumReservedRangeAmino;
}
/**
 * Range of reserved numeric values. Reserved values may not be used by
 * entries in the same enum. Reserved ranges may not overlap.
 * 
 * Note that this is distinct from DescriptorProto.ReservedRange in that it
 * is inclusive such that it can appropriately represent the entire int32
 * domain.
 */
export interface EnumDescriptorProto_EnumReservedRangeSDKType {
  start: number;
  end: number;
}
/** Describes a value within an enum. */
export interface EnumValueDescriptorProto {
  name: string;
  number: number;
  options?: EnumValueOptions;
}
export interface EnumValueDescriptorProtoProtoMsg {
  typeUrl: "/google.protobuf.EnumValueDescriptorProto";
  value: Uint8Array;
}
/** Describes a value within an enum. */
export interface EnumValueDescriptorProtoAmino {
  name?: string;
  number?: number;
  options?: EnumValueOptionsAmino;
}
export interface EnumValueDescriptorProtoAminoMsg {
  type: "/google.protobuf.EnumValueDescriptorProto";
  value: EnumValueDescriptorProtoAmino;
}
/** Describes a value within an enum. */
export interface EnumValueDescriptorProtoSDKType {
  name: string;
  number: number;
  options?: EnumValueOptionsSDKType;
}
/** Describes a service. */
export interface ServiceDescriptorProto {
  name: string;
  method: MethodDescriptorProto[];
  options?: ServiceOptions;
}
export interface ServiceDescriptorProtoProtoMsg {
  typeUrl: "/google.protobuf.ServiceDescriptorProto";
  value: Uint8Array;
}
/** Describes a service. */
export interface ServiceDescriptorProtoAmino {
  name?: string;
  method?: MethodDescriptorProtoAmino[];
  options?: ServiceOptionsAmino;
}
export interface ServiceDescriptorProtoAminoMsg {
  type: "/google.protobuf.ServiceDescriptorProto";
  value: ServiceDescriptorProtoAmino;
}
/** Describes a service. */
export interface ServiceDescriptorProtoSDKType {
  name: string;
  method: MethodDescriptorProtoSDKType[];
  options?: ServiceOptionsSDKType;
}
/** Describes a method of a service. */
export interface MethodDescriptorProto {
  name: string;
  /**
   * Input and output type names.  These are resolved in the same way as
   * FieldDescriptorProto.type_name, but must refer to a message type.
   */
  inputType: string;
  outputType: string;
  options?: MethodOptions;
  /** Identifies if client streams multiple client messages */
  clientStreaming: boolean;
  /** Identifies if server streams multiple server messages */
  serverStreaming: boolean;
}
export interface MethodDescriptorProtoProtoMsg {
  typeUrl: "/google.protobuf.MethodDescriptorProto";
  value: Uint8Array;
}
/** Describes a method of a service. */
export interface MethodDescriptorProtoAmino {
  name?: string;
  /**
   * Input and output type names.  These are resolved in the same way as
   * FieldDescriptorProto.type_name, but must refer to a message type.
   */
  input_type?: string;
  output_type?: string;
  options?: MethodOptionsAmino;
  /** Identifies if client streams multiple client messages */
  client_streaming?: boolean;
  /** Identifies if server streams multiple server messages */
  server_streaming?: boolean;
}
export interface MethodDescriptorProtoAminoMsg {
  type: "/google.protobuf.MethodDescriptorProto";
  value: MethodDescriptorProtoAmino;
}
/** Describes a method of a service. */
export interface MethodDescriptorProtoSDKType {
  name: string;
  input_type: string;
  output_type: string;
  options?: MethodOptionsSDKType;
  client_streaming: boolean;
  server_streaming: boolean;
}
export interface FileOptions {
  /**
   * Sets the Java package where classes generated from this .proto will be
   * placed.  By default, the proto package is used, but this is often
   * inappropriate because proto packages do not normally start with backwards
   * domain names.
   */
  javaPackage: string;
  /**
   * If set, all the classes from the .proto file are wrapped in a single
   * outer class with the given name.  This applies to both Proto1
   * (equivalent to the old "--one_java_file" option) and Proto2 (where
   * a .proto always translates to a single class, but you may want to
   * explicitly choose the class name).
   */
  javaOuterClassname: string;
  /**
   * If set true, then the Java code generator will generate a separate .java
   * file for each top-level message, enum, and service defined in the .proto
   * file.  Thus, these types will *not* be nested inside the outer class
   * named by java_outer_classname.  However, the outer class will still be
   * generated to contain the file's getDescriptor() method as well as any
   * top-level extensions defined in the file.
   */
  javaMultipleFiles: boolean;
  /** This option does nothing. */
  /** @deprecated */
  javaGenerateEqualsAndHash: boolean;
  /**
   * If set true, then the Java2 code generator will generate code that
   * throws an exception whenever an attempt is made to assign a non-UTF-8
   * byte sequence to a string field.
   * Message reflection will do the same.
   * However, an extension field still accepts non-UTF-8 byte sequences.
   * This option has no effect on when used with the lite runtime.
   */
  javaStringCheckUtf8: boolean;
  optimizeFor: FileOptions_OptimizeMode;
  /**
   * Sets the Go package where structs generated from this .proto will be
   * placed. If omitted, the Go package will be derived from the following:
   *   - The basename of the package import path, if provided.
   *   - Otherwise, the package statement in the .proto file, if present.
   *   - Otherwise, the basename of the .proto file, without extension.
   */
  goPackage: string;
  /**
   * Should generic services be generated in each language?  "Generic" services
   * are not specific to any particular RPC system.  They are generated by the
   * main code generators in each language (without additional plugins).
   * Generic services were the only kind of service generation supported by
   * early versions of google.protobuf.
   * 
   * Generic services are now considered deprecated in favor of using plugins
   * that generate code specific to your particular RPC system.  Therefore,
   * these default to false.  Old code which depends on generic services should
   * explicitly set them to true.
   */
  ccGenericServices: boolean;
  javaGenericServices: boolean;
  pyGenericServices: boolean;
  phpGenericServices: boolean;
  /**
   * Is this file deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for everything in the file, or it will be completely ignored; in the very
   * least, this is a formalization for deprecating files.
   */
  deprecated: boolean;
  /**
   * Enables the use of arenas for the proto messages in this file. This applies
   * only to generated classes for C++.
   */
  ccEnableArenas: boolean;
  /**
   * Sets the objective c class prefix which is prepended to all objective c
   * generated classes from this .proto. There is no default.
   */
  objcClassPrefix: string;
  /** Namespace for generated classes; defaults to the package. */
  csharpNamespace: string;
  /**
   * By default Swift generators will take the proto package and CamelCase it
   * replacing '.' with underscore and use that to prefix the types/symbols
   * defined. When this options is provided, they will use this value instead
   * to prefix the types/symbols defined.
   */
  swiftPrefix: string;
  /**
   * Sets the php class prefix which is prepended to all php generated classes
   * from this .proto. Default is empty.
   */
  phpClassPrefix: string;
  /**
   * Use this option to change the namespace of php generated classes. Default
   * is empty. When this option is empty, the package name will be used for
   * determining the namespace.
   */
  phpNamespace: string;
  /**
   * Use this option to change the namespace of php generated metadata classes.
   * Default is empty. When this option is empty, the proto file name will be
   * used for determining the namespace.
   */
  phpMetadataNamespace: string;
  /**
   * Use this option to change the package of ruby generated classes. Default
   * is empty. When this option is not set, the package name will be used for
   * determining the ruby package.
   */
  rubyPackage: string;
  /**
   * The parser stores options it doesn't recognize here.
   * See the documentation for the "Options" section above.
   */
  uninterpretedOption: UninterpretedOption[];
}
export interface FileOptionsProtoMsg {
  typeUrl: "/google.protobuf.FileOptions";
  value: Uint8Array;
}
export interface FileOptionsAmino {
  /**
   * Sets the Java package where classes generated from this .proto will be
   * placed.  By default, the proto package is used, but this is often
   * inappropriate because proto packages do not normally start with backwards
   * domain names.
   */
  java_package?: string;
  /**
   * If set, all the classes from the .proto file are wrapped in a single
   * outer class with the given name.  This applies to both Proto1
   * (equivalent to the old "--one_java_file" option) and Proto2 (where
   * a .proto always translates to a single class, but you may want to
   * explicitly choose the class name).
   */
  java_outer_classname?: string;
  /**
   * If set true, then the Java code generator will generate a separate .java
   * file for each top-level message, enum, and service defined in the .proto
   * file.  Thus, these types will *not* be nested inside the outer class
   * named by java_outer_classname.  However, the outer class will still be
   * generated to contain the file's getDescriptor() method as well as any
   * top-level extensions defined in the file.
   */
  java_multiple_files?: boolean;
  /** This option does nothing. */
  /** @deprecated */
  java_generate_equals_and_hash?: boolean;
  /**
   * If set true, then the Java2 code generator will generate code that
   * throws an exception whenever an attempt is made to assign a non-UTF-8
   * byte sequence to a string field.
   * Message reflection will do the same.
   * However, an extension field still accepts non-UTF-8 byte sequences.
   * This option has no effect on when used with the lite runtime.
   */
  java_string_check_utf8?: boolean;
  optimize_for?: FileOptions_OptimizeMode;
  /**
   * Sets the Go package where structs generated from this .proto will be
   * placed. If omitted, the Go package will be derived from the following:
   *   - The basename of the package import path, if provided.
   *   - Otherwise, the package statement in the .proto file, if present.
   *   - Otherwise, the basename of the .proto file, without extension.
   */
  go_package?: string;
  /**
   * Should generic services be generated in each language?  "Generic" services
   * are not specific to any particular RPC system.  They are generated by the
   * main code generators in each language (without additional plugins).
   * Generic services were the only kind of service generation supported by
   * early versions of google.protobuf.
   * 
   * Generic services are now considered deprecated in favor of using plugins
   * that generate code specific to your particular RPC system.  Therefore,
   * these default to false.  Old code which depends on generic services should
   * explicitly set them to true.
   */
  cc_generic_services?: boolean;
  java_generic_services?: boolean;
  py_generic_services?: boolean;
  php_generic_services?: boolean;
  /**
   * Is this file deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for everything in the file, or it will be completely ignored; in the very
   * least, this is a formalization for deprecating files.
   */
  deprecated?: boolean;
  /**
   * Enables the use of arenas for the proto messages in this file. This applies
   * only to generated classes for C++.
   */
  cc_enable_arenas?: boolean;
  /**
   * Sets the objective c class prefix which is prepended to all objective c
   * generated classes from this .proto. There is no default.
   */
  objc_class_prefix?: string;
  /** Namespace for generated classes; defaults to the package. */
  csharp_namespace?: string;
  /**
   * By default Swift generators will take the proto package and CamelCase it
   * replacing '.' with underscore and use that to prefix the types/symbols
   * defined. When this options is provided, they will use this value instead
   * to prefix the types/symbols defined.
   */
  swift_prefix?: string;
  /**
   * Sets the php class prefix which is prepended to all php generated classes
   * from this .proto. Default is empty.
   */
  php_class_prefix?: string;
  /**
   * Use this option to change the namespace of php generated classes. Default
   * is empty. When this option is empty, the package name will be used for
   * determining the namespace.
   */
  php_namespace?: string;
  /**
   * Use this option to change the namespace of php generated metadata classes.
   * Default is empty. When this option is empty, the proto file name will be
   * used for determining the namespace.
   */
  php_metadata_namespace?: string;
  /**
   * Use this option to change the package of ruby generated classes. Default
   * is empty. When this option is not set, the package name will be used for
   * determining the ruby package.
   */
  ruby_package?: string;
  /**
   * The parser stores options it doesn't recognize here.
   * See the documentation for the "Options" section above.
   */
  uninterpreted_option?: UninterpretedOptionAmino[];
}
export interface FileOptionsAminoMsg {
  type: "/google.protobuf.FileOptions";
  value: FileOptionsAmino;
}
export interface FileOptionsSDKType {
  java_package: string;
  java_outer_classname: string;
  java_multiple_files: boolean;
  /** @deprecated */
  java_generate_equals_and_hash: boolean;
  java_string_check_utf8: boolean;
  optimize_for: FileOptions_OptimizeMode;
  go_package: string;
  cc_generic_services: boolean;
  java_generic_services: boolean;
  py_generic_services: boolean;
  php_generic_services: boolean;
  deprecated: boolean;
  cc_enable_arenas: boolean;
  objc_class_prefix: string;
  csharp_namespace: string;
  swift_prefix: string;
  php_class_prefix: string;
  php_namespace: string;
  php_metadata_namespace: string;
  ruby_package: string;
  uninterpreted_option: UninterpretedOptionSDKType[];
}
export interface MessageOptions {
  /**
   * Set true to use the old proto1 MessageSet wire format for extensions.
   * This is provided for backwards-compatibility with the MessageSet wire
   * format.  You should not use this for any other reason:  It's less
   * efficient, has fewer features, and is more complicated.
   * 
   * The message must be defined exactly as follows:
   *   message Foo {
   *     option message_set_wire_format = true;
   *     extensions 4 to max;
   *   }
   * Note that the message cannot have any defined fields; MessageSets only
   * have extensions.
   * 
   * All extensions of your type must be singular messages; e.g. they cannot
   * be int32s, enums, or repeated messages.
   * 
   * Because this is an option, the above two restrictions are not enforced by
   * the protocol compiler.
   */
  messageSetWireFormat: boolean;
  /**
   * Disables the generation of the standard "descriptor()" accessor, which can
   * conflict with a field of the same name.  This is meant to make migration
   * from proto1 easier; new code should avoid fields named "descriptor".
   */
  noStandardDescriptorAccessor: boolean;
  /**
   * Is this message deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the message, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating messages.
   */
  deprecated: boolean;
  /**
   * Whether the message is an automatically generated map entry type for the
   * maps field.
   * 
   * For maps fields:
   *     map<KeyType, ValueType> map_field = 1;
   * The parsed descriptor looks like:
   *     message MapFieldEntry {
   *         option map_entry = true;
   *         optional KeyType key = 1;
   *         optional ValueType value = 2;
   *     }
   *     repeated MapFieldEntry map_field = 1;
   * 
   * Implementations may choose not to generate the map_entry=true message, but
   * use a native map in the target language to hold the keys and values.
   * The reflection APIs in such implementations still need to work as
   * if the field is a repeated message field.
   * 
   * NOTE: Do not set the option in .proto files. Always use the maps syntax
   * instead. The option should only be implicitly set by the proto compiler
   * parser.
   */
  mapEntry: boolean;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}
export interface MessageOptionsProtoMsg {
  typeUrl: "/google.protobuf.MessageOptions";
  value: Uint8Array;
}
export interface MessageOptionsAmino {
  /**
   * Set true to use the old proto1 MessageSet wire format for extensions.
   * This is provided for backwards-compatibility with the MessageSet wire
   * format.  You should not use this for any other reason:  It's less
   * efficient, has fewer features, and is more complicated.
   * 
   * The message must be defined exactly as follows:
   *   message Foo {
   *     option message_set_wire_format = true;
   *     extensions 4 to max;
   *   }
   * Note that the message cannot have any defined fields; MessageSets only
   * have extensions.
   * 
   * All extensions of your type must be singular messages; e.g. they cannot
   * be int32s, enums, or repeated messages.
   * 
   * Because this is an option, the above two restrictions are not enforced by
   * the protocol compiler.
   */
  message_set_wire_format?: boolean;
  /**
   * Disables the generation of the standard "descriptor()" accessor, which can
   * conflict with a field of the same name.  This is meant to make migration
   * from proto1 easier; new code should avoid fields named "descriptor".
   */
  no_standard_descriptor_accessor?: boolean;
  /**
   * Is this message deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the message, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating messages.
   */
  deprecated?: boolean;
  /**
   * Whether the message is an automatically generated map entry type for the
   * maps field.
   * 
   * For maps fields:
   *     map<KeyType, ValueType> map_field = 1;
   * The parsed descriptor looks like:
   *     message MapFieldEntry {
   *         option map_entry = true;
   *         optional KeyType key = 1;
   *         optional ValueType value = 2;
   *     }
   *     repeated MapFieldEntry map_field = 1;
   * 
   * Implementations may choose not to generate the map_entry=true message, but
   * use a native map in the target language to hold the keys and values.
   * The reflection APIs in such implementations still need to work as
   * if the field is a repeated message field.
   * 
   * NOTE: Do not set the option in .proto files. Always use the maps syntax
   * instead. The option should only be implicitly set by the proto compiler
   * parser.
   */
  map_entry?: boolean;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option?: UninterpretedOptionAmino[];
}
export interface MessageOptionsAminoMsg {
  type: "/google.protobuf.MessageOptions";
  value: MessageOptionsAmino;
}
export interface MessageOptionsSDKType {
  message_set_wire_format: boolean;
  no_standard_descriptor_accessor: boolean;
  deprecated: boolean;
  map_entry: boolean;
  uninterpreted_option: UninterpretedOptionSDKType[];
}
export interface FieldOptions {
  /**
   * The ctype option instructs the C++ code generator to use a different
   * representation of the field than it normally would.  See the specific
   * options below.  This option is not yet implemented in the open source
   * release -- sorry, we'll try to include it in a future version!
   */
  ctype: FieldOptions_CType;
  /**
   * The packed option can be enabled for repeated primitive fields to enable
   * a more efficient representation on the wire. Rather than repeatedly
   * writing the tag and type for each element, the entire array is encoded as
   * a single length-delimited blob. In proto3, only explicit setting it to
   * false will avoid using packed encoding.
   */
  packed: boolean;
  /**
   * The jstype option determines the JavaScript type used for values of the
   * field.  The option is permitted only for 64 bit integral and fixed types
   * (int64, uint64, sint64, fixed64, sfixed64).  A field with jstype JS_STRING
   * is represented as JavaScript string, which avoids loss of precision that
   * can happen when a large value is converted to a floating point JavaScript.
   * Specifying JS_NUMBER for the jstype causes the generated JavaScript code to
   * use the JavaScript "number" type.  The behavior of the default option
   * JS_NORMAL is implementation dependent.
   * 
   * This option is an enum to permit additional types to be added, e.g.
   * goog.math.Integer.
   */
  jstype: FieldOptions_JSType;
  /**
   * Should this field be parsed lazily?  Lazy applies only to message-type
   * fields.  It means that when the outer message is initially parsed, the
   * inner message's contents will not be parsed but instead stored in encoded
   * form.  The inner message will actually be parsed when it is first accessed.
   * 
   * This is only a hint.  Implementations are free to choose whether to use
   * eager or lazy parsing regardless of the value of this option.  However,
   * setting this option true suggests that the protocol author believes that
   * using lazy parsing on this field is worth the additional bookkeeping
   * overhead typically needed to implement it.
   * 
   * This option does not affect the public interface of any generated code;
   * all method signatures remain the same.  Furthermore, thread-safety of the
   * interface is not affected by this option; const methods remain safe to
   * call from multiple threads concurrently, while non-const methods continue
   * to require exclusive access.
   * 
   * 
   * Note that implementations may choose not to check required fields within
   * a lazy sub-message.  That is, calling IsInitialized() on the outer message
   * may return true even if the inner message has missing required fields.
   * This is necessary because otherwise the inner message would have to be
   * parsed in order to perform the check, defeating the purpose of lazy
   * parsing.  An implementation which chooses not to check required fields
   * must be consistent about it.  That is, for any particular sub-message, the
   * implementation must either *always* check its required fields, or *never*
   * check its required fields, regardless of whether or not the message has
   * been parsed.
   */
  lazy: boolean;
  /**
   * Is this field deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for accessors, or it will be completely ignored; in the very least, this
   * is a formalization for deprecating fields.
   */
  deprecated: boolean;
  /** For Google-internal migration only. Do not use. */
  weak: boolean;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}
export interface FieldOptionsProtoMsg {
  typeUrl: "/google.protobuf.FieldOptions";
  value: Uint8Array;
}
export interface FieldOptionsAmino {
  /**
   * The ctype option instructs the C++ code generator to use a different
   * representation of the field than it normally would.  See the specific
   * options below.  This option is not yet implemented in the open source
   * release -- sorry, we'll try to include it in a future version!
   */
  ctype?: FieldOptions_CType;
  /**
   * The packed option can be enabled for repeated primitive fields to enable
   * a more efficient representation on the wire. Rather than repeatedly
   * writing the tag and type for each element, the entire array is encoded as
   * a single length-delimited blob. In proto3, only explicit setting it to
   * false will avoid using packed encoding.
   */
  packed?: boolean;
  /**
   * The jstype option determines the JavaScript type used for values of the
   * field.  The option is permitted only for 64 bit integral and fixed types
   * (int64, uint64, sint64, fixed64, sfixed64).  A field with jstype JS_STRING
   * is represented as JavaScript string, which avoids loss of precision that
   * can happen when a large value is converted to a floating point JavaScript.
   * Specifying JS_NUMBER for the jstype causes the generated JavaScript code to
   * use the JavaScript "number" type.  The behavior of the default option
   * JS_NORMAL is implementation dependent.
   * 
   * This option is an enum to permit additional types to be added, e.g.
   * goog.math.Integer.
   */
  jstype?: FieldOptions_JSType;
  /**
   * Should this field be parsed lazily?  Lazy applies only to message-type
   * fields.  It means that when the outer message is initially parsed, the
   * inner message's contents will not be parsed but instead stored in encoded
   * form.  The inner message will actually be parsed when it is first accessed.
   * 
   * This is only a hint.  Implementations are free to choose whether to use
   * eager or lazy parsing regardless of the value of this option.  However,
   * setting this option true suggests that the protocol author believes that
   * using lazy parsing on this field is worth the additional bookkeeping
   * overhead typically needed to implement it.
   * 
   * This option does not affect the public interface of any generated code;
   * all method signatures remain the same.  Furthermore, thread-safety of the
   * interface is not affected by this option; const methods remain safe to
   * call from multiple threads concurrently, while non-const methods continue
   * to require exclusive access.
   * 
   * 
   * Note that implementations may choose not to check required fields within
   * a lazy sub-message.  That is, calling IsInitialized() on the outer message
   * may return true even if the inner message has missing required fields.
   * This is necessary because otherwise the inner message would have to be
   * parsed in order to perform the check, defeating the purpose of lazy
   * parsing.  An implementation which chooses not to check required fields
   * must be consistent about it.  That is, for any particular sub-message, the
   * implementation must either *always* check its required fields, or *never*
   * check its required fields, regardless of whether or not the message has
   * been parsed.
   */
  lazy?: boolean;
  /**
   * Is this field deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for accessors, or it will be completely ignored; in the very least, this
   * is a formalization for deprecating fields.
   */
  deprecated?: boolean;
  /** For Google-internal migration only. Do not use. */
  weak?: boolean;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option?: UninterpretedOptionAmino[];
}
export interface FieldOptionsAminoMsg {
  type: "/google.protobuf.FieldOptions";
  value: FieldOptionsAmino;
}
export interface FieldOptionsSDKType {
  ctype: FieldOptions_CType;
  packed: boolean;
  jstype: FieldOptions_JSType;
  lazy: boolean;
  deprecated: boolean;
  weak: boolean;
  uninterpreted_option: UninterpretedOptionSDKType[];
}
export interface OneofOptions {
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}
export interface OneofOptionsProtoMsg {
  typeUrl: "/google.protobuf.OneofOptions";
  value: Uint8Array;
}
export interface OneofOptionsAmino {
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option?: UninterpretedOptionAmino[];
}
export interface OneofOptionsAminoMsg {
  type: "/google.protobuf.OneofOptions";
  value: OneofOptionsAmino;
}
export interface OneofOptionsSDKType {
  uninterpreted_option: UninterpretedOptionSDKType[];
}
export interface EnumOptions {
  /**
   * Set this option to true to allow mapping different tag names to the same
   * value.
   */
  allowAlias: boolean;
  /**
   * Is this enum deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the enum, or it will be completely ignored; in the very least, this
   * is a formalization for deprecating enums.
   */
  deprecated: boolean;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}
export interface EnumOptionsProtoMsg {
  typeUrl: "/google.protobuf.EnumOptions";
  value: Uint8Array;
}
export interface EnumOptionsAmino {
  /**
   * Set this option to true to allow mapping different tag names to the same
   * value.
   */
  allow_alias?: boolean;
  /**
   * Is this enum deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the enum, or it will be completely ignored; in the very least, this
   * is a formalization for deprecating enums.
   */
  deprecated?: boolean;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option?: UninterpretedOptionAmino[];
}
export interface EnumOptionsAminoMsg {
  type: "/google.protobuf.EnumOptions";
  value: EnumOptionsAmino;
}
export interface EnumOptionsSDKType {
  allow_alias: boolean;
  deprecated: boolean;
  uninterpreted_option: UninterpretedOptionSDKType[];
}
export interface EnumValueOptions {
  /**
   * Is this enum value deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the enum value, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating enum values.
   */
  deprecated: boolean;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}
export interface EnumValueOptionsProtoMsg {
  typeUrl: "/google.protobuf.EnumValueOptions";
  value: Uint8Array;
}
export interface EnumValueOptionsAmino {
  /**
   * Is this enum value deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the enum value, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating enum values.
   */
  deprecated?: boolean;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option?: UninterpretedOptionAmino[];
}
export interface EnumValueOptionsAminoMsg {
  type: "/google.protobuf.EnumValueOptions";
  value: EnumValueOptionsAmino;
}
export interface EnumValueOptionsSDKType {
  deprecated: boolean;
  uninterpreted_option: UninterpretedOptionSDKType[];
}
export interface ServiceOptions {
  /**
   * Is this service deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the service, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating services.
   */
  deprecated: boolean;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}
export interface ServiceOptionsProtoMsg {
  typeUrl: "/google.protobuf.ServiceOptions";
  value: Uint8Array;
}
export interface ServiceOptionsAmino {
  /**
   * Is this service deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the service, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating services.
   */
  deprecated?: boolean;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option?: UninterpretedOptionAmino[];
}
export interface ServiceOptionsAminoMsg {
  type: "/google.protobuf.ServiceOptions";
  value: ServiceOptionsAmino;
}
export interface ServiceOptionsSDKType {
  deprecated: boolean;
  uninterpreted_option: UninterpretedOptionSDKType[];
}
export interface MethodOptions {
  /**
   * Is this method deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the method, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating methods.
   */
  deprecated: boolean;
  idempotencyLevel: MethodOptions_IdempotencyLevel;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}
export interface MethodOptionsProtoMsg {
  typeUrl: "/google.protobuf.MethodOptions";
  value: Uint8Array;
}
export interface MethodOptionsAmino {
  /**
   * Is this method deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the method, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating methods.
   */
  deprecated?: boolean;
  idempotency_level?: MethodOptions_IdempotencyLevel;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option?: UninterpretedOptionAmino[];
}
export interface MethodOptionsAminoMsg {
  type: "/google.protobuf.MethodOptions";
  value: MethodOptionsAmino;
}
export interface MethodOptionsSDKType {
  deprecated: boolean;
  idempotency_level: MethodOptions_IdempotencyLevel;
  uninterpreted_option: UninterpretedOptionSDKType[];
}
/**
 * A message representing a option the parser does not recognize. This only
 * appears in options protos created by the compiler::Parser class.
 * DescriptorPool resolves these when building Descriptor objects. Therefore,
 * options protos in descriptor objects (e.g. returned by Descriptor::options(),
 * or produced by Descriptor::CopyTo()) will never have UninterpretedOptions
 * in them.
 */
export interface UninterpretedOption {
  name: UninterpretedOption_NamePart[];
  /**
   * The value of the uninterpreted option, in whatever type the tokenizer
   * identified it as during parsing. Exactly one of these should be set.
   */
  identifierValue: string;
  positiveIntValue: bigint;
  negativeIntValue: bigint;
  doubleValue: number;
  stringValue: Uint8Array;
  aggregateValue: string;
}
export interface UninterpretedOptionProtoMsg {
  typeUrl: "/google.protobuf.UninterpretedOption";
  value: Uint8Array;
}
/**
 * A message representing a option the parser does not recognize. This only
 * appears in options protos created by the compiler::Parser class.
 * DescriptorPool resolves these when building Descriptor objects. Therefore,
 * options protos in descriptor objects (e.g. returned by Descriptor::options(),
 * or produced by Descriptor::CopyTo()) will never have UninterpretedOptions
 * in them.
 */
export interface UninterpretedOptionAmino {
  name?: UninterpretedOption_NamePartAmino[];
  /**
   * The value of the uninterpreted option, in whatever type the tokenizer
   * identified it as during parsing. Exactly one of these should be set.
   */
  identifier_value?: string;
  positive_int_value?: string;
  negative_int_value?: string;
  double_value?: number;
  string_value?: string;
  aggregate_value?: string;
}
export interface UninterpretedOptionAminoMsg {
  type: "/google.protobuf.UninterpretedOption";
  value: UninterpretedOptionAmino;
}
/**
 * A message representing a option the parser does not recognize. This only
 * appears in options protos created by the compiler::Parser class.
 * DescriptorPool resolves these when building Descriptor objects. Therefore,
 * options protos in descriptor objects (e.g. returned by Descriptor::options(),
 * or produced by Descriptor::CopyTo()) will never have UninterpretedOptions
 * in them.
 */
export interface UninterpretedOptionSDKType {
  name: UninterpretedOption_NamePartSDKType[];
  identifier_value: string;
  positive_int_value: bigint;
  negative_int_value: bigint;
  double_value: number;
  string_value: Uint8Array;
  aggregate_value: string;
}
/**
 * The name of the uninterpreted option.  Each string represents a segment in
 * a dot-separated name.  is_extension is true iff a segment represents an
 * extension (denoted with parentheses in options specs in .proto files).
 * E.g.,{ ["foo", false], ["bar.baz", true], ["qux", false] } represents
 * "foo.(bar.baz).qux".
 */
export interface UninterpretedOption_NamePart {
  namePart: string;
  isExtension: boolean;
}
export interface UninterpretedOption_NamePartProtoMsg {
  typeUrl: "/google.protobuf.NamePart";
  value: Uint8Array;
}
/**
 * The name of the uninterpreted option.  Each string represents a segment in
 * a dot-separated name.  is_extension is true iff a segment represents an
 * extension (denoted with parentheses in options specs in .proto files).
 * E.g.,{ ["foo", false], ["bar.baz", true], ["qux", false] } represents
 * "foo.(bar.baz).qux".
 */
export interface UninterpretedOption_NamePartAmino {
  name_part?: string;
  is_extension?: boolean;
}
export interface UninterpretedOption_NamePartAminoMsg {
  type: "/google.protobuf.NamePart";
  value: UninterpretedOption_NamePartAmino;
}
/**
 * The name of the uninterpreted option.  Each string represents a segment in
 * a dot-separated name.  is_extension is true iff a segment represents an
 * extension (denoted with parentheses in options specs in .proto files).
 * E.g.,{ ["foo", false], ["bar.baz", true], ["qux", false] } represents
 * "foo.(bar.baz).qux".
 */
export interface UninterpretedOption_NamePartSDKType {
  name_part: string;
  is_extension: boolean;
}
/**
 * Encapsulates information about the original source file from which a
 * FileDescriptorProto was generated.
 */
export interface SourceCodeInfo {
  /**
   * A Location identifies a piece of source code in a .proto file which
   * corresponds to a particular definition.  This information is intended
   * to be useful to IDEs, code indexers, documentation generators, and similar
   * tools.
   * 
   * For example, say we have a file like:
   *   message Foo {
   *     optional string foo = 1;
   *   }
   * Let's look at just the field definition:
   *   optional string foo = 1;
   *   ^       ^^     ^^  ^  ^^^
   *   a       bc     de  f  ghi
   * We have the following locations:
   *   span   path               represents
   *   [a,i)  [ 4, 0, 2, 0 ]     The whole field definition.
   *   [a,b)  [ 4, 0, 2, 0, 4 ]  The label (optional).
   *   [c,d)  [ 4, 0, 2, 0, 5 ]  The type (string).
   *   [e,f)  [ 4, 0, 2, 0, 1 ]  The name (foo).
   *   [g,h)  [ 4, 0, 2, 0, 3 ]  The number (1).
   * 
   * Notes:
   * - A location may refer to a repeated field itself (i.e. not to any
   *   particular index within it).  This is used whenever a set of elements are
   *   logically enclosed in a single code segment.  For example, an entire
   *   extend block (possibly containing multiple extension definitions) will
   *   have an outer location whose path refers to the "extensions" repeated
   *   field without an index.
   * - Multiple locations may have the same path.  This happens when a single
   *   logical declaration is spread out across multiple places.  The most
   *   obvious example is the "extend" block again -- there may be multiple
   *   extend blocks in the same scope, each of which will have the same path.
   * - A location's span is not always a subset of its parent's span.  For
   *   example, the "extendee" of an extension declaration appears at the
   *   beginning of the "extend" block and is shared by all extensions within
   *   the block.
   * - Just because a location's span is a subset of some other location's span
   *   does not mean that it is a descendant.  For example, a "group" defines
   *   both a type and a field in a single declaration.  Thus, the locations
   *   corresponding to the type and field and their components will overlap.
   * - Code which tries to interpret locations should probably be designed to
   *   ignore those that it doesn't understand, as more types of locations could
   *   be recorded in the future.
   */
  location: SourceCodeInfo_Location[];
}
export interface SourceCodeInfoProtoMsg {
  typeUrl: "/google.protobuf.SourceCodeInfo";
  value: Uint8Array;
}
/**
 * Encapsulates information about the original source file from which a
 * FileDescriptorProto was generated.
 */
export interface SourceCodeInfoAmino {
  /**
   * A Location identifies a piece of source code in a .proto file which
   * corresponds to a particular definition.  This information is intended
   * to be useful to IDEs, code indexers, documentation generators, and similar
   * tools.
   * 
   * For example, say we have a file like:
   *   message Foo {
   *     optional string foo = 1;
   *   }
   * Let's look at just the field definition:
   *   optional string foo = 1;
   *   ^       ^^     ^^  ^  ^^^
   *   a       bc     de  f  ghi
   * We have the following locations:
   *   span   path               represents
   *   [a,i)  [ 4, 0, 2, 0 ]     The whole field definition.
   *   [a,b)  [ 4, 0, 2, 0, 4 ]  The label (optional).
   *   [c,d)  [ 4, 0, 2, 0, 5 ]  The type (string).
   *   [e,f)  [ 4, 0, 2, 0, 1 ]  The name (foo).
   *   [g,h)  [ 4, 0, 2, 0, 3 ]  The number (1).
   * 
   * Notes:
   * - A location may refer to a repeated field itself (i.e. not to any
   *   particular index within it).  This is used whenever a set of elements are
   *   logically enclosed in a single code segment.  For example, an entire
   *   extend block (possibly containing multiple extension definitions) will
   *   have an outer location whose path refers to the "extensions" repeated
   *   field without an index.
   * - Multiple locations may have the same path.  This happens when a single
   *   logical declaration is spread out across multiple places.  The most
   *   obvious example is the "extend" block again -- there may be multiple
   *   extend blocks in the same scope, each of which will have the same path.
   * - A location's span is not always a subset of its parent's span.  For
   *   example, the "extendee" of an extension declaration appears at the
   *   beginning of the "extend" block and is shared by all extensions within
   *   the block.
   * - Just because a location's span is a subset of some other location's span
   *   does not mean that it is a descendant.  For example, a "group" defines
   *   both a type and a field in a single declaration.  Thus, the locations
   *   corresponding to the type and field and their components will overlap.
   * - Code which tries to interpret locations should probably be designed to
   *   ignore those that it doesn't understand, as more types of locations could
   *   be recorded in the future.
   */
  location?: SourceCodeInfo_LocationAmino[];
}
export interface SourceCodeInfoAminoMsg {
  type: "/google.protobuf.SourceCodeInfo";
  value: SourceCodeInfoAmino;
}
/**
 * Encapsulates information about the original source file from which a
 * FileDescriptorProto was generated.
 */
export interface SourceCodeInfoSDKType {
  location: SourceCodeInfo_LocationSDKType[];
}
export interface SourceCodeInfo_Location {
  /**
   * Identifies which part of the FileDescriptorProto was defined at this
   * location.
   * 
   * Each element is a field number or an index.  They form a path from
   * the root FileDescriptorProto to the place where the definition.  For
   * example, this path:
   *   [ 4, 3, 2, 7, 1 ]
   * refers to:
   *   file.message_type(3)  // 4, 3
   *       .field(7)         // 2, 7
   *       .name()           // 1
   * This is because FileDescriptorProto.message_type has field number 4:
   *   repeated DescriptorProto message_type = 4;
   * and DescriptorProto.field has field number 2:
   *   repeated FieldDescriptorProto field = 2;
   * and FieldDescriptorProto.name has field number 1:
   *   optional string name = 1;
   * 
   * Thus, the above path gives the location of a field name.  If we removed
   * the last element:
   *   [ 4, 3, 2, 7 ]
   * this path refers to the whole field declaration (from the beginning
   * of the label to the terminating semicolon).
   */
  path: number[];
  /**
   * Always has exactly three or four elements: start line, start column,
   * end line (optional, otherwise assumed same as start line), end column.
   * These are packed into a single field for efficiency.  Note that line
   * and column numbers are zero-based -- typically you will want to add
   * 1 to each before displaying to a user.
   */
  span: number[];
  /**
   * If this SourceCodeInfo represents a complete declaration, these are any
   * comments appearing before and after the declaration which appear to be
   * attached to the declaration.
   * 
   * A series of line comments appearing on consecutive lines, with no other
   * tokens appearing on those lines, will be treated as a single comment.
   * 
   * leading_detached_comments will keep paragraphs of comments that appear
   * before (but not connected to) the current element. Each paragraph,
   * separated by empty lines, will be one comment element in the repeated
   * field.
   * 
   * Only the comment content is provided; comment markers (e.g. //) are
   * stripped out.  For block comments, leading whitespace and an asterisk
   * will be stripped from the beginning of each line other than the first.
   * Newlines are included in the output.
   * 
   * Examples:
   * 
   *   optional int32 foo = 1;  // Comment attached to foo.
   *   // Comment attached to bar.
   *   optional int32 bar = 2;
   * 
   *   optional string baz = 3;
   *   // Comment attached to baz.
   *   // Another line attached to baz.
   * 
   *   // Comment attached to qux.
   *   //
   *   // Another line attached to qux.
   *   optional double qux = 4;
   * 
   *   // Detached comment for corge. This is not leading or trailing comments
   *   // to qux or corge because there are blank lines separating it from
   *   // both.
   * 
   *   // Detached comment for corge paragraph 2.
   * 
   *   optional string corge = 5;
   *   /* Block comment attached
   *    * to corge.  Leading asterisks
   *    * will be removed. *\/
   *   /* Block comment attached to
   *    * grault. *\/
   *   optional int32 grault = 6;
   * 
   *   // ignored detached comments.
   */
  leadingComments: string;
  trailingComments: string;
  leadingDetachedComments: string[];
}
export interface SourceCodeInfo_LocationProtoMsg {
  typeUrl: "/google.protobuf.Location";
  value: Uint8Array;
}
export interface SourceCodeInfo_LocationAmino {
  /**
   * Identifies which part of the FileDescriptorProto was defined at this
   * location.
   * 
   * Each element is a field number or an index.  They form a path from
   * the root FileDescriptorProto to the place where the definition.  For
   * example, this path:
   *   [ 4, 3, 2, 7, 1 ]
   * refers to:
   *   file.message_type(3)  // 4, 3
   *       .field(7)         // 2, 7
   *       .name()           // 1
   * This is because FileDescriptorProto.message_type has field number 4:
   *   repeated DescriptorProto message_type = 4;
   * and DescriptorProto.field has field number 2:
   *   repeated FieldDescriptorProto field = 2;
   * and FieldDescriptorProto.name has field number 1:
   *   optional string name = 1;
   * 
   * Thus, the above path gives the location of a field name.  If we removed
   * the last element:
   *   [ 4, 3, 2, 7 ]
   * this path refers to the whole field declaration (from the beginning
   * of the label to the terminating semicolon).
   */
  path?: number[];
  /**
   * Always has exactly three or four elements: start line, start column,
   * end line (optional, otherwise assumed same as start line), end column.
   * These are packed into a single field for efficiency.  Note that line
   * and column numbers are zero-based -- typically you will want to add
   * 1 to each before displaying to a user.
   */
  span?: number[];
  /**
   * If this SourceCodeInfo represents a complete declaration, these are any
   * comments appearing before and after the declaration which appear to be
   * attached to the declaration.
   * 
   * A series of line comments appearing on consecutive lines, with no other
   * tokens appearing on those lines, will be treated as a single comment.
   * 
   * leading_detached_comments will keep paragraphs of comments that appear
   * before (but not connected to) the current element. Each paragraph,
   * separated by empty lines, will be one comment element in the repeated
   * field.
   * 
   * Only the comment content is provided; comment markers (e.g. //) are
   * stripped out.  For block comments, leading whitespace and an asterisk
   * will be stripped from the beginning of each line other than the first.
   * Newlines are included in the output.
   * 
   * Examples:
   * 
   *   optional int32 foo = 1;  // Comment attached to foo.
   *   // Comment attached to bar.
   *   optional int32 bar = 2;
   * 
   *   optional string baz = 3;
   *   // Comment attached to baz.
   *   // Another line attached to baz.
   * 
   *   // Comment attached to qux.
   *   //
   *   // Another line attached to qux.
   *   optional double qux = 4;
   * 
   *   // Detached comment for corge. This is not leading or trailing comments
   *   // to qux or corge because there are blank lines separating it from
   *   // both.
   * 
   *   // Detached comment for corge paragraph 2.
   * 
   *   optional string corge = 5;
   *   /* Block comment attached
   *    * to corge.  Leading asterisks
   *    * will be removed. *\/
   *   /* Block comment attached to
   *    * grault. *\/
   *   optional int32 grault = 6;
   * 
   *   // ignored detached comments.
   */
  leading_comments?: string;
  trailing_comments?: string;
  leading_detached_comments?: string[];
}
export interface SourceCodeInfo_LocationAminoMsg {
  type: "/google.protobuf.Location";
  value: SourceCodeInfo_LocationAmino;
}
export interface SourceCodeInfo_LocationSDKType {
  path: number[];
  span: number[];
  leading_comments: string;
  trailing_comments: string;
  leading_detached_comments: string[];
}
/**
 * Describes the relationship between generated code and its original source
 * file. A GeneratedCodeInfo message is associated with only one generated
 * source file, but may contain references to different source .proto files.
 */
export interface GeneratedCodeInfo {
  /**
   * An Annotation connects some span of text in generated code to an element
   * of its generating .proto file.
   */
  annotation: GeneratedCodeInfo_Annotation[];
}
export interface GeneratedCodeInfoProtoMsg {
  typeUrl: "/google.protobuf.GeneratedCodeInfo";
  value: Uint8Array;
}
/**
 * Describes the relationship between generated code and its original source
 * file. A GeneratedCodeInfo message is associated with only one generated
 * source file, but may contain references to different source .proto files.
 */
export interface GeneratedCodeInfoAmino {
  /**
   * An Annotation connects some span of text in generated code to an element
   * of its generating .proto file.
   */
  annotation?: GeneratedCodeInfo_AnnotationAmino[];
}
export interface GeneratedCodeInfoAminoMsg {
  type: "/google.protobuf.GeneratedCodeInfo";
  value: GeneratedCodeInfoAmino;
}
/**
 * Describes the relationship between generated code and its original source
 * file. A GeneratedCodeInfo message is associated with only one generated
 * source file, but may contain references to different source .proto files.
 */
export interface GeneratedCodeInfoSDKType {
  annotation: GeneratedCodeInfo_AnnotationSDKType[];
}
export interface GeneratedCodeInfo_Annotation {
  /**
   * Identifies the element in the original source .proto file. This field
   * is formatted the same as SourceCodeInfo.Location.path.
   */
  path: number[];
  /** Identifies the filesystem path to the original source .proto. */
  sourceFile: string;
  /**
   * Identifies the starting offset in bytes in the generated code
   * that relates to the identified object.
   */
  begin: number;
  /**
   * Identifies the ending offset in bytes in the generated code that
   * relates to the identified offset. The end offset should be one past
   * the last relevant byte (so the length of the text = end - begin).
   */
  end: number;
}
export interface GeneratedCodeInfo_AnnotationProtoMsg {
  typeUrl: "/google.protobuf.Annotation";
  value: Uint8Array;
}
export interface GeneratedCodeInfo_AnnotationAmino {
  /**
   * Identifies the element in the original source .proto file. This field
   * is formatted the same as SourceCodeInfo.Location.path.
   */
  path?: number[];
  /** Identifies the filesystem path to the original source .proto. */
  source_file?: string;
  /**
   * Identifies the starting offset in bytes in the generated code
   * that relates to the identified object.
   */
  begin?: number;
  /**
   * Identifies the ending offset in bytes in the generated code that
   * relates to the identified offset. The end offset should be one past
   * the last relevant byte (so the length of the text = end - begin).
   */
  end?: number;
}
export interface GeneratedCodeInfo_AnnotationAminoMsg {
  type: "/google.protobuf.Annotation";
  value: GeneratedCodeInfo_AnnotationAmino;
}
export interface GeneratedCodeInfo_AnnotationSDKType {
  path: number[];
  source_file: string;
  begin: number;
  end: number;
}
function createBaseFileDescriptorSet(): FileDescriptorSet {
  return {
    file: []
  };
}
export const FileDescriptorSet = {
  typeUrl: "/google.protobuf.FileDescriptorSet",
  is(o: any): o is FileDescriptorSet {
    return o && (o.$typeUrl === FileDescriptorSet.typeUrl || Array.isArray(o.file) && (!o.file.length || FileDescriptorProto.is(o.file[0])));
  },
  isSDK(o: any): o is FileDescriptorSetSDKType {
    return o && (o.$typeUrl === FileDescriptorSet.typeUrl || Array.isArray(o.file) && (!o.file.length || FileDescriptorProto.isSDK(o.file[0])));
  },
  isAmino(o: any): o is FileDescriptorSetAmino {
    return o && (o.$typeUrl === FileDescriptorSet.typeUrl || Array.isArray(o.file) && (!o.file.length || FileDescriptorProto.isAmino(o.file[0])));
  },
  encode(message: FileDescriptorSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.file) {
      FileDescriptorProto.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FileDescriptorSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileDescriptorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.file.push(FileDescriptorProto.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FileDescriptorSet {
    const obj = createBaseFileDescriptorSet();
    if (Array.isArray(object?.file)) obj.file = object.file.map((e: any) => FileDescriptorProto.fromJSON(e));
    return obj;
  },
  toJSON(message: FileDescriptorSet): JsonSafe<FileDescriptorSet> {
    const obj: any = {};
    if (message.file) {
      obj.file = message.file.map(e => e ? FileDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.file = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<FileDescriptorSet>): FileDescriptorSet {
    const message = createBaseFileDescriptorSet();
    message.file = object.file?.map(e => FileDescriptorProto.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: FileDescriptorSetSDKType): FileDescriptorSet {
    return {
      file: Array.isArray(object?.file) ? object.file.map((e: any) => FileDescriptorProto.fromSDK(e)) : []
    };
  },
  toSDK(message: FileDescriptorSet): FileDescriptorSetSDKType {
    const obj: any = {};
    if (message.file) {
      obj.file = message.file.map(e => e ? FileDescriptorProto.toSDK(e) : undefined);
    } else {
      obj.file = [];
    }
    return obj;
  },
  fromAmino(object: FileDescriptorSetAmino): FileDescriptorSet {
    const message = createBaseFileDescriptorSet();
    message.file = object.file?.map(e => FileDescriptorProto.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: FileDescriptorSet): FileDescriptorSetAmino {
    const obj: any = {};
    if (message.file) {
      obj.file = message.file.map(e => e ? FileDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.file = message.file;
    }
    return obj;
  },
  fromAminoMsg(object: FileDescriptorSetAminoMsg): FileDescriptorSet {
    return FileDescriptorSet.fromAmino(object.value);
  },
  fromProtoMsg(message: FileDescriptorSetProtoMsg): FileDescriptorSet {
    return FileDescriptorSet.decode(message.value);
  },
  toProto(message: FileDescriptorSet): Uint8Array {
    return FileDescriptorSet.encode(message).finish();
  },
  toProtoMsg(message: FileDescriptorSet): FileDescriptorSetProtoMsg {
    return {
      typeUrl: "/google.protobuf.FileDescriptorSet",
      value: FileDescriptorSet.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FileDescriptorSet.typeUrl, FileDescriptorSet);
function createBaseFileDescriptorProto(): FileDescriptorProto {
  return {
    name: "",
    package: "",
    dependency: [],
    publicDependency: [],
    weakDependency: [],
    messageType: [],
    enumType: [],
    service: [],
    extension: [],
    options: undefined,
    sourceCodeInfo: undefined,
    syntax: ""
  };
}
export const FileDescriptorProto = {
  typeUrl: "/google.protobuf.FileDescriptorProto",
  is(o: any): o is FileDescriptorProto {
    return o && (o.$typeUrl === FileDescriptorProto.typeUrl || typeof o.name === "string" && typeof o.package === "string" && Array.isArray(o.dependency) && (!o.dependency.length || typeof o.dependency[0] === "string") && Array.isArray(o.publicDependency) && (!o.publicDependency.length || typeof o.publicDependency[0] === "number") && Array.isArray(o.weakDependency) && (!o.weakDependency.length || typeof o.weakDependency[0] === "number") && Array.isArray(o.messageType) && (!o.messageType.length || DescriptorProto.is(o.messageType[0])) && Array.isArray(o.enumType) && (!o.enumType.length || EnumDescriptorProto.is(o.enumType[0])) && Array.isArray(o.service) && (!o.service.length || ServiceDescriptorProto.is(o.service[0])) && Array.isArray(o.extension) && (!o.extension.length || FieldDescriptorProto.is(o.extension[0])) && typeof o.syntax === "string");
  },
  isSDK(o: any): o is FileDescriptorProtoSDKType {
    return o && (o.$typeUrl === FileDescriptorProto.typeUrl || typeof o.name === "string" && typeof o.package === "string" && Array.isArray(o.dependency) && (!o.dependency.length || typeof o.dependency[0] === "string") && Array.isArray(o.public_dependency) && (!o.public_dependency.length || typeof o.public_dependency[0] === "number") && Array.isArray(o.weak_dependency) && (!o.weak_dependency.length || typeof o.weak_dependency[0] === "number") && Array.isArray(o.message_type) && (!o.message_type.length || DescriptorProto.isSDK(o.message_type[0])) && Array.isArray(o.enum_type) && (!o.enum_type.length || EnumDescriptorProto.isSDK(o.enum_type[0])) && Array.isArray(o.service) && (!o.service.length || ServiceDescriptorProto.isSDK(o.service[0])) && Array.isArray(o.extension) && (!o.extension.length || FieldDescriptorProto.isSDK(o.extension[0])) && typeof o.syntax === "string");
  },
  isAmino(o: any): o is FileDescriptorProtoAmino {
    return o && (o.$typeUrl === FileDescriptorProto.typeUrl || typeof o.name === "string" && typeof o.package === "string" && Array.isArray(o.dependency) && (!o.dependency.length || typeof o.dependency[0] === "string") && Array.isArray(o.public_dependency) && (!o.public_dependency.length || typeof o.public_dependency[0] === "number") && Array.isArray(o.weak_dependency) && (!o.weak_dependency.length || typeof o.weak_dependency[0] === "number") && Array.isArray(o.message_type) && (!o.message_type.length || DescriptorProto.isAmino(o.message_type[0])) && Array.isArray(o.enum_type) && (!o.enum_type.length || EnumDescriptorProto.isAmino(o.enum_type[0])) && Array.isArray(o.service) && (!o.service.length || ServiceDescriptorProto.isAmino(o.service[0])) && Array.isArray(o.extension) && (!o.extension.length || FieldDescriptorProto.isAmino(o.extension[0])) && typeof o.syntax === "string");
  },
  encode(message: FileDescriptorProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.package !== undefined) {
      writer.uint32(18).string(message.package);
    }
    for (const v of message.dependency) {
      writer.uint32(26).string(v!);
    }
    writer.uint32(82).fork();
    for (const v of message.publicDependency) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(90).fork();
    for (const v of message.weakDependency) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.messageType) {
      DescriptorProto.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.enumType) {
      EnumDescriptorProto.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.service) {
      ServiceDescriptorProto.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.extension) {
      FieldDescriptorProto.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.options !== undefined) {
      FileOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
    }
    if (message.sourceCodeInfo !== undefined) {
      SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(74).fork()).ldelim();
    }
    if (message.syntax !== undefined) {
      writer.uint32(98).string(message.syntax);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FileDescriptorProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.package = reader.string();
          break;
        case 3:
          message.dependency.push(reader.string());
          break;
        case 10:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.publicDependency.push(reader.int32());
            }
          } else {
            message.publicDependency.push(reader.int32());
          }
          break;
        case 11:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.weakDependency.push(reader.int32());
            }
          } else {
            message.weakDependency.push(reader.int32());
          }
          break;
        case 4:
          message.messageType.push(DescriptorProto.decode(reader, reader.uint32()));
          break;
        case 5:
          message.enumType.push(EnumDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 6:
          message.service.push(ServiceDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 7:
          message.extension.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 8:
          message.options = FileOptions.decode(reader, reader.uint32());
          break;
        case 9:
          message.sourceCodeInfo = SourceCodeInfo.decode(reader, reader.uint32());
          break;
        case 12:
          message.syntax = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FileDescriptorProto {
    const obj = createBaseFileDescriptorProto();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.package)) obj.package = String(object.package);
    if (Array.isArray(object?.dependency)) obj.dependency = object.dependency.map((e: any) => String(e));
    if (Array.isArray(object?.publicDependency)) obj.publicDependency = object.publicDependency.map((e: any) => Number(e));
    if (Array.isArray(object?.weakDependency)) obj.weakDependency = object.weakDependency.map((e: any) => Number(e));
    if (Array.isArray(object?.messageType)) obj.messageType = object.messageType.map((e: any) => DescriptorProto.fromJSON(e));
    if (Array.isArray(object?.enumType)) obj.enumType = object.enumType.map((e: any) => EnumDescriptorProto.fromJSON(e));
    if (Array.isArray(object?.service)) obj.service = object.service.map((e: any) => ServiceDescriptorProto.fromJSON(e));
    if (Array.isArray(object?.extension)) obj.extension = object.extension.map((e: any) => FieldDescriptorProto.fromJSON(e));
    if (isSet(object.options)) obj.options = FileOptions.fromJSON(object.options);
    if (isSet(object.sourceCodeInfo)) obj.sourceCodeInfo = SourceCodeInfo.fromJSON(object.sourceCodeInfo);
    if (isSet(object.syntax)) obj.syntax = String(object.syntax);
    return obj;
  },
  toJSON(message: FileDescriptorProto): JsonSafe<FileDescriptorProto> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.package !== undefined && (obj.package = message.package);
    if (message.dependency) {
      obj.dependency = message.dependency.map(e => e);
    } else {
      obj.dependency = [];
    }
    if (message.publicDependency) {
      obj.publicDependency = message.publicDependency.map(e => Math.round(e));
    } else {
      obj.publicDependency = [];
    }
    if (message.weakDependency) {
      obj.weakDependency = message.weakDependency.map(e => Math.round(e));
    } else {
      obj.weakDependency = [];
    }
    if (message.messageType) {
      obj.messageType = message.messageType.map(e => e ? DescriptorProto.toJSON(e) : undefined);
    } else {
      obj.messageType = [];
    }
    if (message.enumType) {
      obj.enumType = message.enumType.map(e => e ? EnumDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.enumType = [];
    }
    if (message.service) {
      obj.service = message.service.map(e => e ? ServiceDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.service = [];
    }
    if (message.extension) {
      obj.extension = message.extension.map(e => e ? FieldDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.extension = [];
    }
    message.options !== undefined && (obj.options = message.options ? FileOptions.toJSON(message.options) : undefined);
    message.sourceCodeInfo !== undefined && (obj.sourceCodeInfo = message.sourceCodeInfo ? SourceCodeInfo.toJSON(message.sourceCodeInfo) : undefined);
    message.syntax !== undefined && (obj.syntax = message.syntax);
    return obj;
  },
  fromPartial(object: DeepPartial<FileDescriptorProto>): FileDescriptorProto {
    const message = createBaseFileDescriptorProto();
    message.name = object.name ?? "";
    message.package = object.package ?? "";
    message.dependency = object.dependency?.map(e => e) || [];
    message.publicDependency = object.publicDependency?.map(e => e) || [];
    message.weakDependency = object.weakDependency?.map(e => e) || [];
    message.messageType = object.messageType?.map(e => DescriptorProto.fromPartial(e)) || [];
    message.enumType = object.enumType?.map(e => EnumDescriptorProto.fromPartial(e)) || [];
    message.service = object.service?.map(e => ServiceDescriptorProto.fromPartial(e)) || [];
    message.extension = object.extension?.map(e => FieldDescriptorProto.fromPartial(e)) || [];
    if (object.options !== undefined && object.options !== null) {
      message.options = FileOptions.fromPartial(object.options);
    }
    if (object.sourceCodeInfo !== undefined && object.sourceCodeInfo !== null) {
      message.sourceCodeInfo = SourceCodeInfo.fromPartial(object.sourceCodeInfo);
    }
    message.syntax = object.syntax ?? "";
    return message;
  },
  fromSDK(object: FileDescriptorProtoSDKType): FileDescriptorProto {
    return {
      name: object?.name,
      package: object?.package,
      dependency: Array.isArray(object?.dependency) ? object.dependency.map((e: any) => e) : [],
      publicDependency: Array.isArray(object?.public_dependency) ? object.public_dependency.map((e: any) => e) : [],
      weakDependency: Array.isArray(object?.weak_dependency) ? object.weak_dependency.map((e: any) => e) : [],
      messageType: Array.isArray(object?.message_type) ? object.message_type.map((e: any) => DescriptorProto.fromSDK(e)) : [],
      enumType: Array.isArray(object?.enum_type) ? object.enum_type.map((e: any) => EnumDescriptorProto.fromSDK(e)) : [],
      service: Array.isArray(object?.service) ? object.service.map((e: any) => ServiceDescriptorProto.fromSDK(e)) : [],
      extension: Array.isArray(object?.extension) ? object.extension.map((e: any) => FieldDescriptorProto.fromSDK(e)) : [],
      options: object.options ? FileOptions.fromSDK(object.options) : undefined,
      sourceCodeInfo: object.source_code_info ? SourceCodeInfo.fromSDK(object.source_code_info) : undefined,
      syntax: object?.syntax
    };
  },
  toSDK(message: FileDescriptorProto): FileDescriptorProtoSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.package = message.package;
    if (message.dependency) {
      obj.dependency = message.dependency.map(e => e);
    } else {
      obj.dependency = [];
    }
    if (message.publicDependency) {
      obj.public_dependency = message.publicDependency.map(e => e);
    } else {
      obj.public_dependency = [];
    }
    if (message.weakDependency) {
      obj.weak_dependency = message.weakDependency.map(e => e);
    } else {
      obj.weak_dependency = [];
    }
    if (message.messageType) {
      obj.message_type = message.messageType.map(e => e ? DescriptorProto.toSDK(e) : undefined);
    } else {
      obj.message_type = [];
    }
    if (message.enumType) {
      obj.enum_type = message.enumType.map(e => e ? EnumDescriptorProto.toSDK(e) : undefined);
    } else {
      obj.enum_type = [];
    }
    if (message.service) {
      obj.service = message.service.map(e => e ? ServiceDescriptorProto.toSDK(e) : undefined);
    } else {
      obj.service = [];
    }
    if (message.extension) {
      obj.extension = message.extension.map(e => e ? FieldDescriptorProto.toSDK(e) : undefined);
    } else {
      obj.extension = [];
    }
    message.options !== undefined && (obj.options = message.options ? FileOptions.toSDK(message.options) : undefined);
    message.sourceCodeInfo !== undefined && (obj.source_code_info = message.sourceCodeInfo ? SourceCodeInfo.toSDK(message.sourceCodeInfo) : undefined);
    obj.syntax = message.syntax;
    return obj;
  },
  fromAmino(object: FileDescriptorProtoAmino): FileDescriptorProto {
    const message = createBaseFileDescriptorProto();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.package !== undefined && object.package !== null) {
      message.package = object.package;
    }
    message.dependency = object.dependency?.map(e => e) || [];
    message.publicDependency = object.public_dependency?.map(e => e) || [];
    message.weakDependency = object.weak_dependency?.map(e => e) || [];
    message.messageType = object.message_type?.map(e => DescriptorProto.fromAmino(e)) || [];
    message.enumType = object.enum_type?.map(e => EnumDescriptorProto.fromAmino(e)) || [];
    message.service = object.service?.map(e => ServiceDescriptorProto.fromAmino(e)) || [];
    message.extension = object.extension?.map(e => FieldDescriptorProto.fromAmino(e)) || [];
    if (object.options !== undefined && object.options !== null) {
      message.options = FileOptions.fromAmino(object.options);
    }
    if (object.source_code_info !== undefined && object.source_code_info !== null) {
      message.sourceCodeInfo = SourceCodeInfo.fromAmino(object.source_code_info);
    }
    if (object.syntax !== undefined && object.syntax !== null) {
      message.syntax = object.syntax;
    }
    return message;
  },
  toAmino(message: FileDescriptorProto): FileDescriptorProtoAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.package = message.package === "" ? undefined : message.package;
    if (message.dependency) {
      obj.dependency = message.dependency.map(e => e);
    } else {
      obj.dependency = message.dependency;
    }
    if (message.publicDependency) {
      obj.public_dependency = message.publicDependency.map(e => e);
    } else {
      obj.public_dependency = message.publicDependency;
    }
    if (message.weakDependency) {
      obj.weak_dependency = message.weakDependency.map(e => e);
    } else {
      obj.weak_dependency = message.weakDependency;
    }
    if (message.messageType) {
      obj.message_type = message.messageType.map(e => e ? DescriptorProto.toAmino(e) : undefined);
    } else {
      obj.message_type = message.messageType;
    }
    if (message.enumType) {
      obj.enum_type = message.enumType.map(e => e ? EnumDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.enum_type = message.enumType;
    }
    if (message.service) {
      obj.service = message.service.map(e => e ? ServiceDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.service = message.service;
    }
    if (message.extension) {
      obj.extension = message.extension.map(e => e ? FieldDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.extension = message.extension;
    }
    obj.options = message.options ? FileOptions.toAmino(message.options) : undefined;
    obj.source_code_info = message.sourceCodeInfo ? SourceCodeInfo.toAmino(message.sourceCodeInfo) : undefined;
    obj.syntax = message.syntax === "" ? undefined : message.syntax;
    return obj;
  },
  fromAminoMsg(object: FileDescriptorProtoAminoMsg): FileDescriptorProto {
    return FileDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message: FileDescriptorProtoProtoMsg): FileDescriptorProto {
    return FileDescriptorProto.decode(message.value);
  },
  toProto(message: FileDescriptorProto): Uint8Array {
    return FileDescriptorProto.encode(message).finish();
  },
  toProtoMsg(message: FileDescriptorProto): FileDescriptorProtoProtoMsg {
    return {
      typeUrl: "/google.protobuf.FileDescriptorProto",
      value: FileDescriptorProto.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FileDescriptorProto.typeUrl, FileDescriptorProto);
function createBaseDescriptorProto(): DescriptorProto {
  return {
    name: "",
    field: [],
    extension: [],
    nestedType: [],
    enumType: [],
    extensionRange: [],
    oneofDecl: [],
    options: undefined,
    reservedRange: [],
    reservedName: []
  };
}
export const DescriptorProto = {
  typeUrl: "/google.protobuf.DescriptorProto",
  is(o: any): o is DescriptorProto {
    return o && (o.$typeUrl === DescriptorProto.typeUrl || typeof o.name === "string" && Array.isArray(o.field) && (!o.field.length || FieldDescriptorProto.is(o.field[0])) && Array.isArray(o.extension) && (!o.extension.length || FieldDescriptorProto.is(o.extension[0])) && Array.isArray(o.nestedType) && (!o.nestedType.length || DescriptorProto.is(o.nestedType[0])) && Array.isArray(o.enumType) && (!o.enumType.length || EnumDescriptorProto.is(o.enumType[0])) && Array.isArray(o.extensionRange) && (!o.extensionRange.length || DescriptorProto_ExtensionRange.is(o.extensionRange[0])) && Array.isArray(o.oneofDecl) && (!o.oneofDecl.length || OneofDescriptorProto.is(o.oneofDecl[0])) && Array.isArray(o.reservedRange) && (!o.reservedRange.length || DescriptorProto_ReservedRange.is(o.reservedRange[0])) && Array.isArray(o.reservedName) && (!o.reservedName.length || typeof o.reservedName[0] === "string"));
  },
  isSDK(o: any): o is DescriptorProtoSDKType {
    return o && (o.$typeUrl === DescriptorProto.typeUrl || typeof o.name === "string" && Array.isArray(o.field) && (!o.field.length || FieldDescriptorProto.isSDK(o.field[0])) && Array.isArray(o.extension) && (!o.extension.length || FieldDescriptorProto.isSDK(o.extension[0])) && Array.isArray(o.nested_type) && (!o.nested_type.length || DescriptorProto.isSDK(o.nested_type[0])) && Array.isArray(o.enum_type) && (!o.enum_type.length || EnumDescriptorProto.isSDK(o.enum_type[0])) && Array.isArray(o.extension_range) && (!o.extension_range.length || DescriptorProto_ExtensionRange.isSDK(o.extension_range[0])) && Array.isArray(o.oneof_decl) && (!o.oneof_decl.length || OneofDescriptorProto.isSDK(o.oneof_decl[0])) && Array.isArray(o.reserved_range) && (!o.reserved_range.length || DescriptorProto_ReservedRange.isSDK(o.reserved_range[0])) && Array.isArray(o.reserved_name) && (!o.reserved_name.length || typeof o.reserved_name[0] === "string"));
  },
  isAmino(o: any): o is DescriptorProtoAmino {
    return o && (o.$typeUrl === DescriptorProto.typeUrl || typeof o.name === "string" && Array.isArray(o.field) && (!o.field.length || FieldDescriptorProto.isAmino(o.field[0])) && Array.isArray(o.extension) && (!o.extension.length || FieldDescriptorProto.isAmino(o.extension[0])) && Array.isArray(o.nested_type) && (!o.nested_type.length || DescriptorProto.isAmino(o.nested_type[0])) && Array.isArray(o.enum_type) && (!o.enum_type.length || EnumDescriptorProto.isAmino(o.enum_type[0])) && Array.isArray(o.extension_range) && (!o.extension_range.length || DescriptorProto_ExtensionRange.isAmino(o.extension_range[0])) && Array.isArray(o.oneof_decl) && (!o.oneof_decl.length || OneofDescriptorProto.isAmino(o.oneof_decl[0])) && Array.isArray(o.reserved_range) && (!o.reserved_range.length || DescriptorProto_ReservedRange.isAmino(o.reserved_range[0])) && Array.isArray(o.reserved_name) && (!o.reserved_name.length || typeof o.reserved_name[0] === "string"));
  },
  encode(message: DescriptorProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.field) {
      FieldDescriptorProto.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.extension) {
      FieldDescriptorProto.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.nestedType) {
      DescriptorProto.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.enumType) {
      EnumDescriptorProto.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.extensionRange) {
      DescriptorProto_ExtensionRange.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.oneofDecl) {
      OneofDescriptorProto.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.options !== undefined) {
      MessageOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.reservedRange) {
      DescriptorProto_ReservedRange.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.reservedName) {
      writer.uint32(82).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DescriptorProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.field.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 6:
          message.extension.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 3:
          message.nestedType.push(DescriptorProto.decode(reader, reader.uint32()));
          break;
        case 4:
          message.enumType.push(EnumDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 5:
          message.extensionRange.push(DescriptorProto_ExtensionRange.decode(reader, reader.uint32()));
          break;
        case 8:
          message.oneofDecl.push(OneofDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 7:
          message.options = MessageOptions.decode(reader, reader.uint32());
          break;
        case 9:
          message.reservedRange.push(DescriptorProto_ReservedRange.decode(reader, reader.uint32()));
          break;
        case 10:
          message.reservedName.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DescriptorProto {
    const obj = createBaseDescriptorProto();
    if (isSet(object.name)) obj.name = String(object.name);
    if (Array.isArray(object?.field)) obj.field = object.field.map((e: any) => FieldDescriptorProto.fromJSON(e));
    if (Array.isArray(object?.extension)) obj.extension = object.extension.map((e: any) => FieldDescriptorProto.fromJSON(e));
    if (Array.isArray(object?.nestedType)) obj.nestedType = object.nestedType.map((e: any) => DescriptorProto.fromJSON(e));
    if (Array.isArray(object?.enumType)) obj.enumType = object.enumType.map((e: any) => EnumDescriptorProto.fromJSON(e));
    if (Array.isArray(object?.extensionRange)) obj.extensionRange = object.extensionRange.map((e: any) => DescriptorProto_ExtensionRange.fromJSON(e));
    if (Array.isArray(object?.oneofDecl)) obj.oneofDecl = object.oneofDecl.map((e: any) => OneofDescriptorProto.fromJSON(e));
    if (isSet(object.options)) obj.options = MessageOptions.fromJSON(object.options);
    if (Array.isArray(object?.reservedRange)) obj.reservedRange = object.reservedRange.map((e: any) => DescriptorProto_ReservedRange.fromJSON(e));
    if (Array.isArray(object?.reservedName)) obj.reservedName = object.reservedName.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: DescriptorProto): JsonSafe<DescriptorProto> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.field) {
      obj.field = message.field.map(e => e ? FieldDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.field = [];
    }
    if (message.extension) {
      obj.extension = message.extension.map(e => e ? FieldDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.extension = [];
    }
    if (message.nestedType) {
      obj.nestedType = message.nestedType.map(e => e ? DescriptorProto.toJSON(e) : undefined);
    } else {
      obj.nestedType = [];
    }
    if (message.enumType) {
      obj.enumType = message.enumType.map(e => e ? EnumDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.enumType = [];
    }
    if (message.extensionRange) {
      obj.extensionRange = message.extensionRange.map(e => e ? DescriptorProto_ExtensionRange.toJSON(e) : undefined);
    } else {
      obj.extensionRange = [];
    }
    if (message.oneofDecl) {
      obj.oneofDecl = message.oneofDecl.map(e => e ? OneofDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.oneofDecl = [];
    }
    message.options !== undefined && (obj.options = message.options ? MessageOptions.toJSON(message.options) : undefined);
    if (message.reservedRange) {
      obj.reservedRange = message.reservedRange.map(e => e ? DescriptorProto_ReservedRange.toJSON(e) : undefined);
    } else {
      obj.reservedRange = [];
    }
    if (message.reservedName) {
      obj.reservedName = message.reservedName.map(e => e);
    } else {
      obj.reservedName = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<DescriptorProto>): DescriptorProto {
    const message = createBaseDescriptorProto();
    message.name = object.name ?? "";
    message.field = object.field?.map(e => FieldDescriptorProto.fromPartial(e)) || [];
    message.extension = object.extension?.map(e => FieldDescriptorProto.fromPartial(e)) || [];
    message.nestedType = object.nestedType?.map(e => DescriptorProto.fromPartial(e)) || [];
    message.enumType = object.enumType?.map(e => EnumDescriptorProto.fromPartial(e)) || [];
    message.extensionRange = object.extensionRange?.map(e => DescriptorProto_ExtensionRange.fromPartial(e)) || [];
    message.oneofDecl = object.oneofDecl?.map(e => OneofDescriptorProto.fromPartial(e)) || [];
    if (object.options !== undefined && object.options !== null) {
      message.options = MessageOptions.fromPartial(object.options);
    }
    message.reservedRange = object.reservedRange?.map(e => DescriptorProto_ReservedRange.fromPartial(e)) || [];
    message.reservedName = object.reservedName?.map(e => e) || [];
    return message;
  },
  fromSDK(object: DescriptorProtoSDKType): DescriptorProto {
    return {
      name: object?.name,
      field: Array.isArray(object?.field) ? object.field.map((e: any) => FieldDescriptorProto.fromSDK(e)) : [],
      extension: Array.isArray(object?.extension) ? object.extension.map((e: any) => FieldDescriptorProto.fromSDK(e)) : [],
      nestedType: Array.isArray(object?.nested_type) ? object.nested_type.map((e: any) => DescriptorProto.fromSDK(e)) : [],
      enumType: Array.isArray(object?.enum_type) ? object.enum_type.map((e: any) => EnumDescriptorProto.fromSDK(e)) : [],
      extensionRange: Array.isArray(object?.extension_range) ? object.extension_range.map((e: any) => DescriptorProto_ExtensionRange.fromSDK(e)) : [],
      oneofDecl: Array.isArray(object?.oneof_decl) ? object.oneof_decl.map((e: any) => OneofDescriptorProto.fromSDK(e)) : [],
      options: object.options ? MessageOptions.fromSDK(object.options) : undefined,
      reservedRange: Array.isArray(object?.reserved_range) ? object.reserved_range.map((e: any) => DescriptorProto_ReservedRange.fromSDK(e)) : [],
      reservedName: Array.isArray(object?.reserved_name) ? object.reserved_name.map((e: any) => e) : []
    };
  },
  toSDK(message: DescriptorProto): DescriptorProtoSDKType {
    const obj: any = {};
    obj.name = message.name;
    if (message.field) {
      obj.field = message.field.map(e => e ? FieldDescriptorProto.toSDK(e) : undefined);
    } else {
      obj.field = [];
    }
    if (message.extension) {
      obj.extension = message.extension.map(e => e ? FieldDescriptorProto.toSDK(e) : undefined);
    } else {
      obj.extension = [];
    }
    if (message.nestedType) {
      obj.nested_type = message.nestedType.map(e => e ? DescriptorProto.toSDK(e) : undefined);
    } else {
      obj.nested_type = [];
    }
    if (message.enumType) {
      obj.enum_type = message.enumType.map(e => e ? EnumDescriptorProto.toSDK(e) : undefined);
    } else {
      obj.enum_type = [];
    }
    if (message.extensionRange) {
      obj.extension_range = message.extensionRange.map(e => e ? DescriptorProto_ExtensionRange.toSDK(e) : undefined);
    } else {
      obj.extension_range = [];
    }
    if (message.oneofDecl) {
      obj.oneof_decl = message.oneofDecl.map(e => e ? OneofDescriptorProto.toSDK(e) : undefined);
    } else {
      obj.oneof_decl = [];
    }
    message.options !== undefined && (obj.options = message.options ? MessageOptions.toSDK(message.options) : undefined);
    if (message.reservedRange) {
      obj.reserved_range = message.reservedRange.map(e => e ? DescriptorProto_ReservedRange.toSDK(e) : undefined);
    } else {
      obj.reserved_range = [];
    }
    if (message.reservedName) {
      obj.reserved_name = message.reservedName.map(e => e);
    } else {
      obj.reserved_name = [];
    }
    return obj;
  },
  fromAmino(object: DescriptorProtoAmino): DescriptorProto {
    const message = createBaseDescriptorProto();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    message.field = object.field?.map(e => FieldDescriptorProto.fromAmino(e)) || [];
    message.extension = object.extension?.map(e => FieldDescriptorProto.fromAmino(e)) || [];
    message.nestedType = object.nested_type?.map(e => DescriptorProto.fromAmino(e)) || [];
    message.enumType = object.enum_type?.map(e => EnumDescriptorProto.fromAmino(e)) || [];
    message.extensionRange = object.extension_range?.map(e => DescriptorProto_ExtensionRange.fromAmino(e)) || [];
    message.oneofDecl = object.oneof_decl?.map(e => OneofDescriptorProto.fromAmino(e)) || [];
    if (object.options !== undefined && object.options !== null) {
      message.options = MessageOptions.fromAmino(object.options);
    }
    message.reservedRange = object.reserved_range?.map(e => DescriptorProto_ReservedRange.fromAmino(e)) || [];
    message.reservedName = object.reserved_name?.map(e => e) || [];
    return message;
  },
  toAmino(message: DescriptorProto): DescriptorProtoAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    if (message.field) {
      obj.field = message.field.map(e => e ? FieldDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.field = message.field;
    }
    if (message.extension) {
      obj.extension = message.extension.map(e => e ? FieldDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.extension = message.extension;
    }
    if (message.nestedType) {
      obj.nested_type = message.nestedType.map(e => e ? DescriptorProto.toAmino(e) : undefined);
    } else {
      obj.nested_type = message.nestedType;
    }
    if (message.enumType) {
      obj.enum_type = message.enumType.map(e => e ? EnumDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.enum_type = message.enumType;
    }
    if (message.extensionRange) {
      obj.extension_range = message.extensionRange.map(e => e ? DescriptorProto_ExtensionRange.toAmino(e) : undefined);
    } else {
      obj.extension_range = message.extensionRange;
    }
    if (message.oneofDecl) {
      obj.oneof_decl = message.oneofDecl.map(e => e ? OneofDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.oneof_decl = message.oneofDecl;
    }
    obj.options = message.options ? MessageOptions.toAmino(message.options) : undefined;
    if (message.reservedRange) {
      obj.reserved_range = message.reservedRange.map(e => e ? DescriptorProto_ReservedRange.toAmino(e) : undefined);
    } else {
      obj.reserved_range = message.reservedRange;
    }
    if (message.reservedName) {
      obj.reserved_name = message.reservedName.map(e => e);
    } else {
      obj.reserved_name = message.reservedName;
    }
    return obj;
  },
  fromAminoMsg(object: DescriptorProtoAminoMsg): DescriptorProto {
    return DescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message: DescriptorProtoProtoMsg): DescriptorProto {
    return DescriptorProto.decode(message.value);
  },
  toProto(message: DescriptorProto): Uint8Array {
    return DescriptorProto.encode(message).finish();
  },
  toProtoMsg(message: DescriptorProto): DescriptorProtoProtoMsg {
    return {
      typeUrl: "/google.protobuf.DescriptorProto",
      value: DescriptorProto.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DescriptorProto.typeUrl, DescriptorProto);
function createBaseDescriptorProto_ExtensionRange(): DescriptorProto_ExtensionRange {
  return {
    start: 0,
    end: 0,
    options: undefined
  };
}
export const DescriptorProto_ExtensionRange = {
  typeUrl: "/google.protobuf.ExtensionRange",
  is(o: any): o is DescriptorProto_ExtensionRange {
    return o && (o.$typeUrl === DescriptorProto_ExtensionRange.typeUrl || typeof o.start === "number" && typeof o.end === "number");
  },
  isSDK(o: any): o is DescriptorProto_ExtensionRangeSDKType {
    return o && (o.$typeUrl === DescriptorProto_ExtensionRange.typeUrl || typeof o.start === "number" && typeof o.end === "number");
  },
  isAmino(o: any): o is DescriptorProto_ExtensionRangeAmino {
    return o && (o.$typeUrl === DescriptorProto_ExtensionRange.typeUrl || typeof o.start === "number" && typeof o.end === "number");
  },
  encode(message: DescriptorProto_ExtensionRange, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.start !== undefined) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== undefined) {
      writer.uint32(16).int32(message.end);
    }
    if (message.options !== undefined) {
      ExtensionRangeOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DescriptorProto_ExtensionRange {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescriptorProto_ExtensionRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = reader.int32();
          break;
        case 2:
          message.end = reader.int32();
          break;
        case 3:
          message.options = ExtensionRangeOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DescriptorProto_ExtensionRange {
    const obj = createBaseDescriptorProto_ExtensionRange();
    if (isSet(object.start)) obj.start = Number(object.start);
    if (isSet(object.end)) obj.end = Number(object.end);
    if (isSet(object.options)) obj.options = ExtensionRangeOptions.fromJSON(object.options);
    return obj;
  },
  toJSON(message: DescriptorProto_ExtensionRange): JsonSafe<DescriptorProto_ExtensionRange> {
    const obj: any = {};
    message.start !== undefined && (obj.start = Math.round(message.start));
    message.end !== undefined && (obj.end = Math.round(message.end));
    message.options !== undefined && (obj.options = message.options ? ExtensionRangeOptions.toJSON(message.options) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<DescriptorProto_ExtensionRange>): DescriptorProto_ExtensionRange {
    const message = createBaseDescriptorProto_ExtensionRange();
    message.start = object.start ?? 0;
    message.end = object.end ?? 0;
    if (object.options !== undefined && object.options !== null) {
      message.options = ExtensionRangeOptions.fromPartial(object.options);
    }
    return message;
  },
  fromSDK(object: DescriptorProto_ExtensionRangeSDKType): DescriptorProto_ExtensionRange {
    return {
      start: object?.start,
      end: object?.end,
      options: object.options ? ExtensionRangeOptions.fromSDK(object.options) : undefined
    };
  },
  toSDK(message: DescriptorProto_ExtensionRange): DescriptorProto_ExtensionRangeSDKType {
    const obj: any = {};
    obj.start = message.start;
    obj.end = message.end;
    message.options !== undefined && (obj.options = message.options ? ExtensionRangeOptions.toSDK(message.options) : undefined);
    return obj;
  },
  fromAmino(object: DescriptorProto_ExtensionRangeAmino): DescriptorProto_ExtensionRange {
    const message = createBaseDescriptorProto_ExtensionRange();
    if (object.start !== undefined && object.start !== null) {
      message.start = object.start;
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = object.end;
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = ExtensionRangeOptions.fromAmino(object.options);
    }
    return message;
  },
  toAmino(message: DescriptorProto_ExtensionRange): DescriptorProto_ExtensionRangeAmino {
    const obj: any = {};
    obj.start = message.start === 0 ? undefined : message.start;
    obj.end = message.end === 0 ? undefined : message.end;
    obj.options = message.options ? ExtensionRangeOptions.toAmino(message.options) : undefined;
    return obj;
  },
  fromAminoMsg(object: DescriptorProto_ExtensionRangeAminoMsg): DescriptorProto_ExtensionRange {
    return DescriptorProto_ExtensionRange.fromAmino(object.value);
  },
  fromProtoMsg(message: DescriptorProto_ExtensionRangeProtoMsg): DescriptorProto_ExtensionRange {
    return DescriptorProto_ExtensionRange.decode(message.value);
  },
  toProto(message: DescriptorProto_ExtensionRange): Uint8Array {
    return DescriptorProto_ExtensionRange.encode(message).finish();
  },
  toProtoMsg(message: DescriptorProto_ExtensionRange): DescriptorProto_ExtensionRangeProtoMsg {
    return {
      typeUrl: "/google.protobuf.ExtensionRange",
      value: DescriptorProto_ExtensionRange.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DescriptorProto_ExtensionRange.typeUrl, DescriptorProto_ExtensionRange);
function createBaseDescriptorProto_ReservedRange(): DescriptorProto_ReservedRange {
  return {
    start: 0,
    end: 0
  };
}
export const DescriptorProto_ReservedRange = {
  typeUrl: "/google.protobuf.ReservedRange",
  is(o: any): o is DescriptorProto_ReservedRange {
    return o && (o.$typeUrl === DescriptorProto_ReservedRange.typeUrl || typeof o.start === "number" && typeof o.end === "number");
  },
  isSDK(o: any): o is DescriptorProto_ReservedRangeSDKType {
    return o && (o.$typeUrl === DescriptorProto_ReservedRange.typeUrl || typeof o.start === "number" && typeof o.end === "number");
  },
  isAmino(o: any): o is DescriptorProto_ReservedRangeAmino {
    return o && (o.$typeUrl === DescriptorProto_ReservedRange.typeUrl || typeof o.start === "number" && typeof o.end === "number");
  },
  encode(message: DescriptorProto_ReservedRange, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.start !== undefined) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== undefined) {
      writer.uint32(16).int32(message.end);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DescriptorProto_ReservedRange {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescriptorProto_ReservedRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = reader.int32();
          break;
        case 2:
          message.end = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DescriptorProto_ReservedRange {
    const obj = createBaseDescriptorProto_ReservedRange();
    if (isSet(object.start)) obj.start = Number(object.start);
    if (isSet(object.end)) obj.end = Number(object.end);
    return obj;
  },
  toJSON(message: DescriptorProto_ReservedRange): JsonSafe<DescriptorProto_ReservedRange> {
    const obj: any = {};
    message.start !== undefined && (obj.start = Math.round(message.start));
    message.end !== undefined && (obj.end = Math.round(message.end));
    return obj;
  },
  fromPartial(object: DeepPartial<DescriptorProto_ReservedRange>): DescriptorProto_ReservedRange {
    const message = createBaseDescriptorProto_ReservedRange();
    message.start = object.start ?? 0;
    message.end = object.end ?? 0;
    return message;
  },
  fromSDK(object: DescriptorProto_ReservedRangeSDKType): DescriptorProto_ReservedRange {
    return {
      start: object?.start,
      end: object?.end
    };
  },
  toSDK(message: DescriptorProto_ReservedRange): DescriptorProto_ReservedRangeSDKType {
    const obj: any = {};
    obj.start = message.start;
    obj.end = message.end;
    return obj;
  },
  fromAmino(object: DescriptorProto_ReservedRangeAmino): DescriptorProto_ReservedRange {
    const message = createBaseDescriptorProto_ReservedRange();
    if (object.start !== undefined && object.start !== null) {
      message.start = object.start;
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = object.end;
    }
    return message;
  },
  toAmino(message: DescriptorProto_ReservedRange): DescriptorProto_ReservedRangeAmino {
    const obj: any = {};
    obj.start = message.start === 0 ? undefined : message.start;
    obj.end = message.end === 0 ? undefined : message.end;
    return obj;
  },
  fromAminoMsg(object: DescriptorProto_ReservedRangeAminoMsg): DescriptorProto_ReservedRange {
    return DescriptorProto_ReservedRange.fromAmino(object.value);
  },
  fromProtoMsg(message: DescriptorProto_ReservedRangeProtoMsg): DescriptorProto_ReservedRange {
    return DescriptorProto_ReservedRange.decode(message.value);
  },
  toProto(message: DescriptorProto_ReservedRange): Uint8Array {
    return DescriptorProto_ReservedRange.encode(message).finish();
  },
  toProtoMsg(message: DescriptorProto_ReservedRange): DescriptorProto_ReservedRangeProtoMsg {
    return {
      typeUrl: "/google.protobuf.ReservedRange",
      value: DescriptorProto_ReservedRange.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DescriptorProto_ReservedRange.typeUrl, DescriptorProto_ReservedRange);
function createBaseExtensionRangeOptions(): ExtensionRangeOptions {
  return {
    uninterpretedOption: []
  };
}
export const ExtensionRangeOptions = {
  typeUrl: "/google.protobuf.ExtensionRangeOptions",
  is(o: any): o is ExtensionRangeOptions {
    return o && (o.$typeUrl === ExtensionRangeOptions.typeUrl || Array.isArray(o.uninterpretedOption) && (!o.uninterpretedOption.length || UninterpretedOption.is(o.uninterpretedOption[0])));
  },
  isSDK(o: any): o is ExtensionRangeOptionsSDKType {
    return o && (o.$typeUrl === ExtensionRangeOptions.typeUrl || Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || UninterpretedOption.isSDK(o.uninterpreted_option[0])));
  },
  isAmino(o: any): o is ExtensionRangeOptionsAmino {
    return o && (o.$typeUrl === ExtensionRangeOptions.typeUrl || Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || UninterpretedOption.isAmino(o.uninterpreted_option[0])));
  },
  encode(message: ExtensionRangeOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExtensionRangeOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtensionRangeOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExtensionRangeOptions {
    const obj = createBaseExtensionRangeOptions();
    if (Array.isArray(object?.uninterpretedOption)) obj.uninterpretedOption = object.uninterpretedOption.map((e: any) => UninterpretedOption.fromJSON(e));
    return obj;
  },
  toJSON(message: ExtensionRangeOptions): JsonSafe<ExtensionRangeOptions> {
    const obj: any = {};
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map(e => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ExtensionRangeOptions>): ExtensionRangeOptions {
    const message = createBaseExtensionRangeOptions();
    message.uninterpretedOption = object.uninterpretedOption?.map(e => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ExtensionRangeOptionsSDKType): ExtensionRangeOptions {
    return {
      uninterpretedOption: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromSDK(e)) : []
    };
  },
  toSDK(message: ExtensionRangeOptions): ExtensionRangeOptionsSDKType {
    const obj: any = {};
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? UninterpretedOption.toSDK(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromAmino(object: ExtensionRangeOptionsAmino): ExtensionRangeOptions {
    const message = createBaseExtensionRangeOptions();
    message.uninterpretedOption = object.uninterpreted_option?.map(e => UninterpretedOption.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ExtensionRangeOptions): ExtensionRangeOptionsAmino {
    const obj: any = {};
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? UninterpretedOption.toAmino(e) : undefined);
    } else {
      obj.uninterpreted_option = message.uninterpretedOption;
    }
    return obj;
  },
  fromAminoMsg(object: ExtensionRangeOptionsAminoMsg): ExtensionRangeOptions {
    return ExtensionRangeOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: ExtensionRangeOptionsProtoMsg): ExtensionRangeOptions {
    return ExtensionRangeOptions.decode(message.value);
  },
  toProto(message: ExtensionRangeOptions): Uint8Array {
    return ExtensionRangeOptions.encode(message).finish();
  },
  toProtoMsg(message: ExtensionRangeOptions): ExtensionRangeOptionsProtoMsg {
    return {
      typeUrl: "/google.protobuf.ExtensionRangeOptions",
      value: ExtensionRangeOptions.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ExtensionRangeOptions.typeUrl, ExtensionRangeOptions);
function createBaseFieldDescriptorProto(): FieldDescriptorProto {
  return {
    name: "",
    number: 0,
    label: 1,
    type: 1,
    typeName: "",
    extendee: "",
    defaultValue: "",
    oneofIndex: 0,
    jsonName: "",
    options: undefined
  };
}
export const FieldDescriptorProto = {
  typeUrl: "/google.protobuf.FieldDescriptorProto",
  is(o: any): o is FieldDescriptorProto {
    return o && (o.$typeUrl === FieldDescriptorProto.typeUrl || typeof o.name === "string" && typeof o.number === "number" && isSet(o.label) && isSet(o.type) && typeof o.typeName === "string" && typeof o.extendee === "string" && typeof o.defaultValue === "string" && typeof o.oneofIndex === "number" && typeof o.jsonName === "string");
  },
  isSDK(o: any): o is FieldDescriptorProtoSDKType {
    return o && (o.$typeUrl === FieldDescriptorProto.typeUrl || typeof o.name === "string" && typeof o.number === "number" && isSet(o.label) && isSet(o.type) && typeof o.type_name === "string" && typeof o.extendee === "string" && typeof o.default_value === "string" && typeof o.oneof_index === "number" && typeof o.json_name === "string");
  },
  isAmino(o: any): o is FieldDescriptorProtoAmino {
    return o && (o.$typeUrl === FieldDescriptorProto.typeUrl || typeof o.name === "string" && typeof o.number === "number" && isSet(o.label) && isSet(o.type) && typeof o.type_name === "string" && typeof o.extendee === "string" && typeof o.default_value === "string" && typeof o.oneof_index === "number" && typeof o.json_name === "string");
  },
  encode(message: FieldDescriptorProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== undefined) {
      writer.uint32(24).int32(message.number);
    }
    if (message.label !== 1) {
      writer.uint32(32).int32(message.label);
    }
    if (message.type !== 1) {
      writer.uint32(40).int32(message.type);
    }
    if (message.typeName !== undefined) {
      writer.uint32(50).string(message.typeName);
    }
    if (message.extendee !== undefined) {
      writer.uint32(18).string(message.extendee);
    }
    if (message.defaultValue !== undefined) {
      writer.uint32(58).string(message.defaultValue);
    }
    if (message.oneofIndex !== undefined) {
      writer.uint32(72).int32(message.oneofIndex);
    }
    if (message.jsonName !== undefined) {
      writer.uint32(82).string(message.jsonName);
    }
    if (message.options !== undefined) {
      FieldOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FieldDescriptorProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 3:
          message.number = reader.int32();
          break;
        case 4:
          message.label = (reader.int32() as any);
          break;
        case 5:
          message.type = (reader.int32() as any);
          break;
        case 6:
          message.typeName = reader.string();
          break;
        case 2:
          message.extendee = reader.string();
          break;
        case 7:
          message.defaultValue = reader.string();
          break;
        case 9:
          message.oneofIndex = reader.int32();
          break;
        case 10:
          message.jsonName = reader.string();
          break;
        case 8:
          message.options = FieldOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FieldDescriptorProto {
    const obj = createBaseFieldDescriptorProto();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.number)) obj.number = Number(object.number);
    if (isSet(object.label)) obj.label = fieldDescriptorProto_LabelFromJSON(object.label);
    if (isSet(object.type)) obj.type = fieldDescriptorProto_TypeFromJSON(object.type);
    if (isSet(object.typeName)) obj.typeName = String(object.typeName);
    if (isSet(object.extendee)) obj.extendee = String(object.extendee);
    if (isSet(object.defaultValue)) obj.defaultValue = String(object.defaultValue);
    if (isSet(object.oneofIndex)) obj.oneofIndex = Number(object.oneofIndex);
    if (isSet(object.jsonName)) obj.jsonName = String(object.jsonName);
    if (isSet(object.options)) obj.options = FieldOptions.fromJSON(object.options);
    return obj;
  },
  toJSON(message: FieldDescriptorProto): JsonSafe<FieldDescriptorProto> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.number !== undefined && (obj.number = Math.round(message.number));
    message.label !== undefined && (obj.label = fieldDescriptorProto_LabelToJSON(message.label));
    message.type !== undefined && (obj.type = fieldDescriptorProto_TypeToJSON(message.type));
    message.typeName !== undefined && (obj.typeName = message.typeName);
    message.extendee !== undefined && (obj.extendee = message.extendee);
    message.defaultValue !== undefined && (obj.defaultValue = message.defaultValue);
    message.oneofIndex !== undefined && (obj.oneofIndex = Math.round(message.oneofIndex));
    message.jsonName !== undefined && (obj.jsonName = message.jsonName);
    message.options !== undefined && (obj.options = message.options ? FieldOptions.toJSON(message.options) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<FieldDescriptorProto>): FieldDescriptorProto {
    const message = createBaseFieldDescriptorProto();
    message.name = object.name ?? "";
    message.number = object.number ?? 0;
    message.label = object.label ?? 1;
    message.type = object.type ?? 1;
    message.typeName = object.typeName ?? "";
    message.extendee = object.extendee ?? "";
    message.defaultValue = object.defaultValue ?? "";
    message.oneofIndex = object.oneofIndex ?? 0;
    message.jsonName = object.jsonName ?? "";
    if (object.options !== undefined && object.options !== null) {
      message.options = FieldOptions.fromPartial(object.options);
    }
    return message;
  },
  fromSDK(object: FieldDescriptorProtoSDKType): FieldDescriptorProto {
    return {
      name: object?.name,
      number: object?.number,
      label: isSet(object.label) ? fieldDescriptorProto_LabelFromJSON(object.label) : -1,
      type: isSet(object.type) ? fieldDescriptorProto_TypeFromJSON(object.type) : -1,
      typeName: object?.type_name,
      extendee: object?.extendee,
      defaultValue: object?.default_value,
      oneofIndex: object?.oneof_index,
      jsonName: object?.json_name,
      options: object.options ? FieldOptions.fromSDK(object.options) : undefined
    };
  },
  toSDK(message: FieldDescriptorProto): FieldDescriptorProtoSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.number = message.number;
    message.label !== undefined && (obj.label = fieldDescriptorProto_LabelToJSON(message.label));
    message.type !== undefined && (obj.type = fieldDescriptorProto_TypeToJSON(message.type));
    obj.type_name = message.typeName;
    obj.extendee = message.extendee;
    obj.default_value = message.defaultValue;
    obj.oneof_index = message.oneofIndex;
    obj.json_name = message.jsonName;
    message.options !== undefined && (obj.options = message.options ? FieldOptions.toSDK(message.options) : undefined);
    return obj;
  },
  fromAmino(object: FieldDescriptorProtoAmino): FieldDescriptorProto {
    const message = createBaseFieldDescriptorProto();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.number !== undefined && object.number !== null) {
      message.number = object.number;
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = object.label;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.type_name !== undefined && object.type_name !== null) {
      message.typeName = object.type_name;
    }
    if (object.extendee !== undefined && object.extendee !== null) {
      message.extendee = object.extendee;
    }
    if (object.default_value !== undefined && object.default_value !== null) {
      message.defaultValue = object.default_value;
    }
    if (object.oneof_index !== undefined && object.oneof_index !== null) {
      message.oneofIndex = object.oneof_index;
    }
    if (object.json_name !== undefined && object.json_name !== null) {
      message.jsonName = object.json_name;
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = FieldOptions.fromAmino(object.options);
    }
    return message;
  },
  toAmino(message: FieldDescriptorProto): FieldDescriptorProtoAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.number = message.number === 0 ? undefined : message.number;
    obj.label = message.label === 1 ? undefined : message.label;
    obj.type = message.type === 1 ? undefined : message.type;
    obj.type_name = message.typeName === "" ? undefined : message.typeName;
    obj.extendee = message.extendee === "" ? undefined : message.extendee;
    obj.default_value = message.defaultValue === "" ? undefined : message.defaultValue;
    obj.oneof_index = message.oneofIndex === 0 ? undefined : message.oneofIndex;
    obj.json_name = message.jsonName === "" ? undefined : message.jsonName;
    obj.options = message.options ? FieldOptions.toAmino(message.options) : undefined;
    return obj;
  },
  fromAminoMsg(object: FieldDescriptorProtoAminoMsg): FieldDescriptorProto {
    return FieldDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message: FieldDescriptorProtoProtoMsg): FieldDescriptorProto {
    return FieldDescriptorProto.decode(message.value);
  },
  toProto(message: FieldDescriptorProto): Uint8Array {
    return FieldDescriptorProto.encode(message).finish();
  },
  toProtoMsg(message: FieldDescriptorProto): FieldDescriptorProtoProtoMsg {
    return {
      typeUrl: "/google.protobuf.FieldDescriptorProto",
      value: FieldDescriptorProto.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FieldDescriptorProto.typeUrl, FieldDescriptorProto);
function createBaseOneofDescriptorProto(): OneofDescriptorProto {
  return {
    name: "",
    options: undefined
  };
}
export const OneofDescriptorProto = {
  typeUrl: "/google.protobuf.OneofDescriptorProto",
  is(o: any): o is OneofDescriptorProto {
    return o && (o.$typeUrl === OneofDescriptorProto.typeUrl || typeof o.name === "string");
  },
  isSDK(o: any): o is OneofDescriptorProtoSDKType {
    return o && (o.$typeUrl === OneofDescriptorProto.typeUrl || typeof o.name === "string");
  },
  isAmino(o: any): o is OneofDescriptorProtoAmino {
    return o && (o.$typeUrl === OneofDescriptorProto.typeUrl || typeof o.name === "string");
  },
  encode(message: OneofDescriptorProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.options !== undefined) {
      OneofOptions.encode(message.options, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OneofDescriptorProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOneofDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.options = OneofOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OneofDescriptorProto {
    const obj = createBaseOneofDescriptorProto();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.options)) obj.options = OneofOptions.fromJSON(object.options);
    return obj;
  },
  toJSON(message: OneofDescriptorProto): JsonSafe<OneofDescriptorProto> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.options !== undefined && (obj.options = message.options ? OneofOptions.toJSON(message.options) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<OneofDescriptorProto>): OneofDescriptorProto {
    const message = createBaseOneofDescriptorProto();
    message.name = object.name ?? "";
    if (object.options !== undefined && object.options !== null) {
      message.options = OneofOptions.fromPartial(object.options);
    }
    return message;
  },
  fromSDK(object: OneofDescriptorProtoSDKType): OneofDescriptorProto {
    return {
      name: object?.name,
      options: object.options ? OneofOptions.fromSDK(object.options) : undefined
    };
  },
  toSDK(message: OneofDescriptorProto): OneofDescriptorProtoSDKType {
    const obj: any = {};
    obj.name = message.name;
    message.options !== undefined && (obj.options = message.options ? OneofOptions.toSDK(message.options) : undefined);
    return obj;
  },
  fromAmino(object: OneofDescriptorProtoAmino): OneofDescriptorProto {
    const message = createBaseOneofDescriptorProto();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = OneofOptions.fromAmino(object.options);
    }
    return message;
  },
  toAmino(message: OneofDescriptorProto): OneofDescriptorProtoAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.options = message.options ? OneofOptions.toAmino(message.options) : undefined;
    return obj;
  },
  fromAminoMsg(object: OneofDescriptorProtoAminoMsg): OneofDescriptorProto {
    return OneofDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message: OneofDescriptorProtoProtoMsg): OneofDescriptorProto {
    return OneofDescriptorProto.decode(message.value);
  },
  toProto(message: OneofDescriptorProto): Uint8Array {
    return OneofDescriptorProto.encode(message).finish();
  },
  toProtoMsg(message: OneofDescriptorProto): OneofDescriptorProtoProtoMsg {
    return {
      typeUrl: "/google.protobuf.OneofDescriptorProto",
      value: OneofDescriptorProto.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(OneofDescriptorProto.typeUrl, OneofDescriptorProto);
function createBaseEnumDescriptorProto(): EnumDescriptorProto {
  return {
    name: "",
    value: [],
    options: undefined,
    reservedRange: [],
    reservedName: []
  };
}
export const EnumDescriptorProto = {
  typeUrl: "/google.protobuf.EnumDescriptorProto",
  is(o: any): o is EnumDescriptorProto {
    return o && (o.$typeUrl === EnumDescriptorProto.typeUrl || typeof o.name === "string" && Array.isArray(o.value) && (!o.value.length || EnumValueDescriptorProto.is(o.value[0])) && Array.isArray(o.reservedRange) && (!o.reservedRange.length || EnumDescriptorProto_EnumReservedRange.is(o.reservedRange[0])) && Array.isArray(o.reservedName) && (!o.reservedName.length || typeof o.reservedName[0] === "string"));
  },
  isSDK(o: any): o is EnumDescriptorProtoSDKType {
    return o && (o.$typeUrl === EnumDescriptorProto.typeUrl || typeof o.name === "string" && Array.isArray(o.value) && (!o.value.length || EnumValueDescriptorProto.isSDK(o.value[0])) && Array.isArray(o.reserved_range) && (!o.reserved_range.length || EnumDescriptorProto_EnumReservedRange.isSDK(o.reserved_range[0])) && Array.isArray(o.reserved_name) && (!o.reserved_name.length || typeof o.reserved_name[0] === "string"));
  },
  isAmino(o: any): o is EnumDescriptorProtoAmino {
    return o && (o.$typeUrl === EnumDescriptorProto.typeUrl || typeof o.name === "string" && Array.isArray(o.value) && (!o.value.length || EnumValueDescriptorProto.isAmino(o.value[0])) && Array.isArray(o.reserved_range) && (!o.reserved_range.length || EnumDescriptorProto_EnumReservedRange.isAmino(o.reserved_range[0])) && Array.isArray(o.reserved_name) && (!o.reserved_name.length || typeof o.reserved_name[0] === "string"));
  },
  encode(message: EnumDescriptorProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.value) {
      EnumValueDescriptorProto.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.options !== undefined) {
      EnumOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.reservedRange) {
      EnumDescriptorProto_EnumReservedRange.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.reservedName) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EnumDescriptorProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.value.push(EnumValueDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 3:
          message.options = EnumOptions.decode(reader, reader.uint32());
          break;
        case 4:
          message.reservedRange.push(EnumDescriptorProto_EnumReservedRange.decode(reader, reader.uint32()));
          break;
        case 5:
          message.reservedName.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EnumDescriptorProto {
    const obj = createBaseEnumDescriptorProto();
    if (isSet(object.name)) obj.name = String(object.name);
    if (Array.isArray(object?.value)) obj.value = object.value.map((e: any) => EnumValueDescriptorProto.fromJSON(e));
    if (isSet(object.options)) obj.options = EnumOptions.fromJSON(object.options);
    if (Array.isArray(object?.reservedRange)) obj.reservedRange = object.reservedRange.map((e: any) => EnumDescriptorProto_EnumReservedRange.fromJSON(e));
    if (Array.isArray(object?.reservedName)) obj.reservedName = object.reservedName.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: EnumDescriptorProto): JsonSafe<EnumDescriptorProto> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.value) {
      obj.value = message.value.map(e => e ? EnumValueDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.value = [];
    }
    message.options !== undefined && (obj.options = message.options ? EnumOptions.toJSON(message.options) : undefined);
    if (message.reservedRange) {
      obj.reservedRange = message.reservedRange.map(e => e ? EnumDescriptorProto_EnumReservedRange.toJSON(e) : undefined);
    } else {
      obj.reservedRange = [];
    }
    if (message.reservedName) {
      obj.reservedName = message.reservedName.map(e => e);
    } else {
      obj.reservedName = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<EnumDescriptorProto>): EnumDescriptorProto {
    const message = createBaseEnumDescriptorProto();
    message.name = object.name ?? "";
    message.value = object.value?.map(e => EnumValueDescriptorProto.fromPartial(e)) || [];
    if (object.options !== undefined && object.options !== null) {
      message.options = EnumOptions.fromPartial(object.options);
    }
    message.reservedRange = object.reservedRange?.map(e => EnumDescriptorProto_EnumReservedRange.fromPartial(e)) || [];
    message.reservedName = object.reservedName?.map(e => e) || [];
    return message;
  },
  fromSDK(object: EnumDescriptorProtoSDKType): EnumDescriptorProto {
    return {
      name: object?.name,
      value: Array.isArray(object?.value) ? object.value.map((e: any) => EnumValueDescriptorProto.fromSDK(e)) : [],
      options: object.options ? EnumOptions.fromSDK(object.options) : undefined,
      reservedRange: Array.isArray(object?.reserved_range) ? object.reserved_range.map((e: any) => EnumDescriptorProto_EnumReservedRange.fromSDK(e)) : [],
      reservedName: Array.isArray(object?.reserved_name) ? object.reserved_name.map((e: any) => e) : []
    };
  },
  toSDK(message: EnumDescriptorProto): EnumDescriptorProtoSDKType {
    const obj: any = {};
    obj.name = message.name;
    if (message.value) {
      obj.value = message.value.map(e => e ? EnumValueDescriptorProto.toSDK(e) : undefined);
    } else {
      obj.value = [];
    }
    message.options !== undefined && (obj.options = message.options ? EnumOptions.toSDK(message.options) : undefined);
    if (message.reservedRange) {
      obj.reserved_range = message.reservedRange.map(e => e ? EnumDescriptorProto_EnumReservedRange.toSDK(e) : undefined);
    } else {
      obj.reserved_range = [];
    }
    if (message.reservedName) {
      obj.reserved_name = message.reservedName.map(e => e);
    } else {
      obj.reserved_name = [];
    }
    return obj;
  },
  fromAmino(object: EnumDescriptorProtoAmino): EnumDescriptorProto {
    const message = createBaseEnumDescriptorProto();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    message.value = object.value?.map(e => EnumValueDescriptorProto.fromAmino(e)) || [];
    if (object.options !== undefined && object.options !== null) {
      message.options = EnumOptions.fromAmino(object.options);
    }
    message.reservedRange = object.reserved_range?.map(e => EnumDescriptorProto_EnumReservedRange.fromAmino(e)) || [];
    message.reservedName = object.reserved_name?.map(e => e) || [];
    return message;
  },
  toAmino(message: EnumDescriptorProto): EnumDescriptorProtoAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    if (message.value) {
      obj.value = message.value.map(e => e ? EnumValueDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.value = message.value;
    }
    obj.options = message.options ? EnumOptions.toAmino(message.options) : undefined;
    if (message.reservedRange) {
      obj.reserved_range = message.reservedRange.map(e => e ? EnumDescriptorProto_EnumReservedRange.toAmino(e) : undefined);
    } else {
      obj.reserved_range = message.reservedRange;
    }
    if (message.reservedName) {
      obj.reserved_name = message.reservedName.map(e => e);
    } else {
      obj.reserved_name = message.reservedName;
    }
    return obj;
  },
  fromAminoMsg(object: EnumDescriptorProtoAminoMsg): EnumDescriptorProto {
    return EnumDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message: EnumDescriptorProtoProtoMsg): EnumDescriptorProto {
    return EnumDescriptorProto.decode(message.value);
  },
  toProto(message: EnumDescriptorProto): Uint8Array {
    return EnumDescriptorProto.encode(message).finish();
  },
  toProtoMsg(message: EnumDescriptorProto): EnumDescriptorProtoProtoMsg {
    return {
      typeUrl: "/google.protobuf.EnumDescriptorProto",
      value: EnumDescriptorProto.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EnumDescriptorProto.typeUrl, EnumDescriptorProto);
function createBaseEnumDescriptorProto_EnumReservedRange(): EnumDescriptorProto_EnumReservedRange {
  return {
    start: 0,
    end: 0
  };
}
export const EnumDescriptorProto_EnumReservedRange = {
  typeUrl: "/google.protobuf.EnumReservedRange",
  is(o: any): o is EnumDescriptorProto_EnumReservedRange {
    return o && (o.$typeUrl === EnumDescriptorProto_EnumReservedRange.typeUrl || typeof o.start === "number" && typeof o.end === "number");
  },
  isSDK(o: any): o is EnumDescriptorProto_EnumReservedRangeSDKType {
    return o && (o.$typeUrl === EnumDescriptorProto_EnumReservedRange.typeUrl || typeof o.start === "number" && typeof o.end === "number");
  },
  isAmino(o: any): o is EnumDescriptorProto_EnumReservedRangeAmino {
    return o && (o.$typeUrl === EnumDescriptorProto_EnumReservedRange.typeUrl || typeof o.start === "number" && typeof o.end === "number");
  },
  encode(message: EnumDescriptorProto_EnumReservedRange, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.start !== undefined) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== undefined) {
      writer.uint32(16).int32(message.end);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EnumDescriptorProto_EnumReservedRange {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumDescriptorProto_EnumReservedRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = reader.int32();
          break;
        case 2:
          message.end = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EnumDescriptorProto_EnumReservedRange {
    const obj = createBaseEnumDescriptorProto_EnumReservedRange();
    if (isSet(object.start)) obj.start = Number(object.start);
    if (isSet(object.end)) obj.end = Number(object.end);
    return obj;
  },
  toJSON(message: EnumDescriptorProto_EnumReservedRange): JsonSafe<EnumDescriptorProto_EnumReservedRange> {
    const obj: any = {};
    message.start !== undefined && (obj.start = Math.round(message.start));
    message.end !== undefined && (obj.end = Math.round(message.end));
    return obj;
  },
  fromPartial(object: DeepPartial<EnumDescriptorProto_EnumReservedRange>): EnumDescriptorProto_EnumReservedRange {
    const message = createBaseEnumDescriptorProto_EnumReservedRange();
    message.start = object.start ?? 0;
    message.end = object.end ?? 0;
    return message;
  },
  fromSDK(object: EnumDescriptorProto_EnumReservedRangeSDKType): EnumDescriptorProto_EnumReservedRange {
    return {
      start: object?.start,
      end: object?.end
    };
  },
  toSDK(message: EnumDescriptorProto_EnumReservedRange): EnumDescriptorProto_EnumReservedRangeSDKType {
    const obj: any = {};
    obj.start = message.start;
    obj.end = message.end;
    return obj;
  },
  fromAmino(object: EnumDescriptorProto_EnumReservedRangeAmino): EnumDescriptorProto_EnumReservedRange {
    const message = createBaseEnumDescriptorProto_EnumReservedRange();
    if (object.start !== undefined && object.start !== null) {
      message.start = object.start;
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = object.end;
    }
    return message;
  },
  toAmino(message: EnumDescriptorProto_EnumReservedRange): EnumDescriptorProto_EnumReservedRangeAmino {
    const obj: any = {};
    obj.start = message.start === 0 ? undefined : message.start;
    obj.end = message.end === 0 ? undefined : message.end;
    return obj;
  },
  fromAminoMsg(object: EnumDescriptorProto_EnumReservedRangeAminoMsg): EnumDescriptorProto_EnumReservedRange {
    return EnumDescriptorProto_EnumReservedRange.fromAmino(object.value);
  },
  fromProtoMsg(message: EnumDescriptorProto_EnumReservedRangeProtoMsg): EnumDescriptorProto_EnumReservedRange {
    return EnumDescriptorProto_EnumReservedRange.decode(message.value);
  },
  toProto(message: EnumDescriptorProto_EnumReservedRange): Uint8Array {
    return EnumDescriptorProto_EnumReservedRange.encode(message).finish();
  },
  toProtoMsg(message: EnumDescriptorProto_EnumReservedRange): EnumDescriptorProto_EnumReservedRangeProtoMsg {
    return {
      typeUrl: "/google.protobuf.EnumReservedRange",
      value: EnumDescriptorProto_EnumReservedRange.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EnumDescriptorProto_EnumReservedRange.typeUrl, EnumDescriptorProto_EnumReservedRange);
function createBaseEnumValueDescriptorProto(): EnumValueDescriptorProto {
  return {
    name: "",
    number: 0,
    options: undefined
  };
}
export const EnumValueDescriptorProto = {
  typeUrl: "/google.protobuf.EnumValueDescriptorProto",
  is(o: any): o is EnumValueDescriptorProto {
    return o && (o.$typeUrl === EnumValueDescriptorProto.typeUrl || typeof o.name === "string" && typeof o.number === "number");
  },
  isSDK(o: any): o is EnumValueDescriptorProtoSDKType {
    return o && (o.$typeUrl === EnumValueDescriptorProto.typeUrl || typeof o.name === "string" && typeof o.number === "number");
  },
  isAmino(o: any): o is EnumValueDescriptorProtoAmino {
    return o && (o.$typeUrl === EnumValueDescriptorProto.typeUrl || typeof o.name === "string" && typeof o.number === "number");
  },
  encode(message: EnumValueDescriptorProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== undefined) {
      writer.uint32(16).int32(message.number);
    }
    if (message.options !== undefined) {
      EnumValueOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EnumValueDescriptorProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumValueDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.number = reader.int32();
          break;
        case 3:
          message.options = EnumValueOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EnumValueDescriptorProto {
    const obj = createBaseEnumValueDescriptorProto();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.number)) obj.number = Number(object.number);
    if (isSet(object.options)) obj.options = EnumValueOptions.fromJSON(object.options);
    return obj;
  },
  toJSON(message: EnumValueDescriptorProto): JsonSafe<EnumValueDescriptorProto> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.number !== undefined && (obj.number = Math.round(message.number));
    message.options !== undefined && (obj.options = message.options ? EnumValueOptions.toJSON(message.options) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<EnumValueDescriptorProto>): EnumValueDescriptorProto {
    const message = createBaseEnumValueDescriptorProto();
    message.name = object.name ?? "";
    message.number = object.number ?? 0;
    if (object.options !== undefined && object.options !== null) {
      message.options = EnumValueOptions.fromPartial(object.options);
    }
    return message;
  },
  fromSDK(object: EnumValueDescriptorProtoSDKType): EnumValueDescriptorProto {
    return {
      name: object?.name,
      number: object?.number,
      options: object.options ? EnumValueOptions.fromSDK(object.options) : undefined
    };
  },
  toSDK(message: EnumValueDescriptorProto): EnumValueDescriptorProtoSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.number = message.number;
    message.options !== undefined && (obj.options = message.options ? EnumValueOptions.toSDK(message.options) : undefined);
    return obj;
  },
  fromAmino(object: EnumValueDescriptorProtoAmino): EnumValueDescriptorProto {
    const message = createBaseEnumValueDescriptorProto();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.number !== undefined && object.number !== null) {
      message.number = object.number;
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = EnumValueOptions.fromAmino(object.options);
    }
    return message;
  },
  toAmino(message: EnumValueDescriptorProto): EnumValueDescriptorProtoAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.number = message.number === 0 ? undefined : message.number;
    obj.options = message.options ? EnumValueOptions.toAmino(message.options) : undefined;
    return obj;
  },
  fromAminoMsg(object: EnumValueDescriptorProtoAminoMsg): EnumValueDescriptorProto {
    return EnumValueDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message: EnumValueDescriptorProtoProtoMsg): EnumValueDescriptorProto {
    return EnumValueDescriptorProto.decode(message.value);
  },
  toProto(message: EnumValueDescriptorProto): Uint8Array {
    return EnumValueDescriptorProto.encode(message).finish();
  },
  toProtoMsg(message: EnumValueDescriptorProto): EnumValueDescriptorProtoProtoMsg {
    return {
      typeUrl: "/google.protobuf.EnumValueDescriptorProto",
      value: EnumValueDescriptorProto.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EnumValueDescriptorProto.typeUrl, EnumValueDescriptorProto);
function createBaseServiceDescriptorProto(): ServiceDescriptorProto {
  return {
    name: "",
    method: [],
    options: undefined
  };
}
export const ServiceDescriptorProto = {
  typeUrl: "/google.protobuf.ServiceDescriptorProto",
  is(o: any): o is ServiceDescriptorProto {
    return o && (o.$typeUrl === ServiceDescriptorProto.typeUrl || typeof o.name === "string" && Array.isArray(o.method) && (!o.method.length || MethodDescriptorProto.is(o.method[0])));
  },
  isSDK(o: any): o is ServiceDescriptorProtoSDKType {
    return o && (o.$typeUrl === ServiceDescriptorProto.typeUrl || typeof o.name === "string" && Array.isArray(o.method) && (!o.method.length || MethodDescriptorProto.isSDK(o.method[0])));
  },
  isAmino(o: any): o is ServiceDescriptorProtoAmino {
    return o && (o.$typeUrl === ServiceDescriptorProto.typeUrl || typeof o.name === "string" && Array.isArray(o.method) && (!o.method.length || MethodDescriptorProto.isAmino(o.method[0])));
  },
  encode(message: ServiceDescriptorProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.method) {
      MethodDescriptorProto.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.options !== undefined) {
      ServiceOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ServiceDescriptorProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.method.push(MethodDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 3:
          message.options = ServiceOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ServiceDescriptorProto {
    const obj = createBaseServiceDescriptorProto();
    if (isSet(object.name)) obj.name = String(object.name);
    if (Array.isArray(object?.method)) obj.method = object.method.map((e: any) => MethodDescriptorProto.fromJSON(e));
    if (isSet(object.options)) obj.options = ServiceOptions.fromJSON(object.options);
    return obj;
  },
  toJSON(message: ServiceDescriptorProto): JsonSafe<ServiceDescriptorProto> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.method) {
      obj.method = message.method.map(e => e ? MethodDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.method = [];
    }
    message.options !== undefined && (obj.options = message.options ? ServiceOptions.toJSON(message.options) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ServiceDescriptorProto>): ServiceDescriptorProto {
    const message = createBaseServiceDescriptorProto();
    message.name = object.name ?? "";
    message.method = object.method?.map(e => MethodDescriptorProto.fromPartial(e)) || [];
    if (object.options !== undefined && object.options !== null) {
      message.options = ServiceOptions.fromPartial(object.options);
    }
    return message;
  },
  fromSDK(object: ServiceDescriptorProtoSDKType): ServiceDescriptorProto {
    return {
      name: object?.name,
      method: Array.isArray(object?.method) ? object.method.map((e: any) => MethodDescriptorProto.fromSDK(e)) : [],
      options: object.options ? ServiceOptions.fromSDK(object.options) : undefined
    };
  },
  toSDK(message: ServiceDescriptorProto): ServiceDescriptorProtoSDKType {
    const obj: any = {};
    obj.name = message.name;
    if (message.method) {
      obj.method = message.method.map(e => e ? MethodDescriptorProto.toSDK(e) : undefined);
    } else {
      obj.method = [];
    }
    message.options !== undefined && (obj.options = message.options ? ServiceOptions.toSDK(message.options) : undefined);
    return obj;
  },
  fromAmino(object: ServiceDescriptorProtoAmino): ServiceDescriptorProto {
    const message = createBaseServiceDescriptorProto();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    message.method = object.method?.map(e => MethodDescriptorProto.fromAmino(e)) || [];
    if (object.options !== undefined && object.options !== null) {
      message.options = ServiceOptions.fromAmino(object.options);
    }
    return message;
  },
  toAmino(message: ServiceDescriptorProto): ServiceDescriptorProtoAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    if (message.method) {
      obj.method = message.method.map(e => e ? MethodDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.method = message.method;
    }
    obj.options = message.options ? ServiceOptions.toAmino(message.options) : undefined;
    return obj;
  },
  fromAminoMsg(object: ServiceDescriptorProtoAminoMsg): ServiceDescriptorProto {
    return ServiceDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceDescriptorProtoProtoMsg): ServiceDescriptorProto {
    return ServiceDescriptorProto.decode(message.value);
  },
  toProto(message: ServiceDescriptorProto): Uint8Array {
    return ServiceDescriptorProto.encode(message).finish();
  },
  toProtoMsg(message: ServiceDescriptorProto): ServiceDescriptorProtoProtoMsg {
    return {
      typeUrl: "/google.protobuf.ServiceDescriptorProto",
      value: ServiceDescriptorProto.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ServiceDescriptorProto.typeUrl, ServiceDescriptorProto);
function createBaseMethodDescriptorProto(): MethodDescriptorProto {
  return {
    name: "",
    inputType: "",
    outputType: "",
    options: undefined,
    clientStreaming: false,
    serverStreaming: false
  };
}
export const MethodDescriptorProto = {
  typeUrl: "/google.protobuf.MethodDescriptorProto",
  is(o: any): o is MethodDescriptorProto {
    return o && (o.$typeUrl === MethodDescriptorProto.typeUrl || typeof o.name === "string" && typeof o.inputType === "string" && typeof o.outputType === "string" && typeof o.clientStreaming === "boolean" && typeof o.serverStreaming === "boolean");
  },
  isSDK(o: any): o is MethodDescriptorProtoSDKType {
    return o && (o.$typeUrl === MethodDescriptorProto.typeUrl || typeof o.name === "string" && typeof o.input_type === "string" && typeof o.output_type === "string" && typeof o.client_streaming === "boolean" && typeof o.server_streaming === "boolean");
  },
  isAmino(o: any): o is MethodDescriptorProtoAmino {
    return o && (o.$typeUrl === MethodDescriptorProto.typeUrl || typeof o.name === "string" && typeof o.input_type === "string" && typeof o.output_type === "string" && typeof o.client_streaming === "boolean" && typeof o.server_streaming === "boolean");
  },
  encode(message: MethodDescriptorProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.inputType !== undefined) {
      writer.uint32(18).string(message.inputType);
    }
    if (message.outputType !== undefined) {
      writer.uint32(26).string(message.outputType);
    }
    if (message.options !== undefined) {
      MethodOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
    }
    if (message.clientStreaming !== undefined) {
      writer.uint32(40).bool(message.clientStreaming);
    }
    if (message.serverStreaming !== undefined) {
      writer.uint32(48).bool(message.serverStreaming);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MethodDescriptorProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMethodDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.inputType = reader.string();
          break;
        case 3:
          message.outputType = reader.string();
          break;
        case 4:
          message.options = MethodOptions.decode(reader, reader.uint32());
          break;
        case 5:
          message.clientStreaming = reader.bool();
          break;
        case 6:
          message.serverStreaming = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MethodDescriptorProto {
    const obj = createBaseMethodDescriptorProto();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.inputType)) obj.inputType = String(object.inputType);
    if (isSet(object.outputType)) obj.outputType = String(object.outputType);
    if (isSet(object.options)) obj.options = MethodOptions.fromJSON(object.options);
    if (isSet(object.clientStreaming)) obj.clientStreaming = Boolean(object.clientStreaming);
    if (isSet(object.serverStreaming)) obj.serverStreaming = Boolean(object.serverStreaming);
    return obj;
  },
  toJSON(message: MethodDescriptorProto): JsonSafe<MethodDescriptorProto> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.inputType !== undefined && (obj.inputType = message.inputType);
    message.outputType !== undefined && (obj.outputType = message.outputType);
    message.options !== undefined && (obj.options = message.options ? MethodOptions.toJSON(message.options) : undefined);
    message.clientStreaming !== undefined && (obj.clientStreaming = message.clientStreaming);
    message.serverStreaming !== undefined && (obj.serverStreaming = message.serverStreaming);
    return obj;
  },
  fromPartial(object: DeepPartial<MethodDescriptorProto>): MethodDescriptorProto {
    const message = createBaseMethodDescriptorProto();
    message.name = object.name ?? "";
    message.inputType = object.inputType ?? "";
    message.outputType = object.outputType ?? "";
    if (object.options !== undefined && object.options !== null) {
      message.options = MethodOptions.fromPartial(object.options);
    }
    message.clientStreaming = object.clientStreaming ?? false;
    message.serverStreaming = object.serverStreaming ?? false;
    return message;
  },
  fromSDK(object: MethodDescriptorProtoSDKType): MethodDescriptorProto {
    return {
      name: object?.name,
      inputType: object?.input_type,
      outputType: object?.output_type,
      options: object.options ? MethodOptions.fromSDK(object.options) : undefined,
      clientStreaming: object?.client_streaming,
      serverStreaming: object?.server_streaming
    };
  },
  toSDK(message: MethodDescriptorProto): MethodDescriptorProtoSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.input_type = message.inputType;
    obj.output_type = message.outputType;
    message.options !== undefined && (obj.options = message.options ? MethodOptions.toSDK(message.options) : undefined);
    obj.client_streaming = message.clientStreaming;
    obj.server_streaming = message.serverStreaming;
    return obj;
  },
  fromAmino(object: MethodDescriptorProtoAmino): MethodDescriptorProto {
    const message = createBaseMethodDescriptorProto();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.input_type !== undefined && object.input_type !== null) {
      message.inputType = object.input_type;
    }
    if (object.output_type !== undefined && object.output_type !== null) {
      message.outputType = object.output_type;
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = MethodOptions.fromAmino(object.options);
    }
    if (object.client_streaming !== undefined && object.client_streaming !== null) {
      message.clientStreaming = object.client_streaming;
    }
    if (object.server_streaming !== undefined && object.server_streaming !== null) {
      message.serverStreaming = object.server_streaming;
    }
    return message;
  },
  toAmino(message: MethodDescriptorProto): MethodDescriptorProtoAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.input_type = message.inputType === "" ? undefined : message.inputType;
    obj.output_type = message.outputType === "" ? undefined : message.outputType;
    obj.options = message.options ? MethodOptions.toAmino(message.options) : undefined;
    obj.client_streaming = message.clientStreaming === false ? undefined : message.clientStreaming;
    obj.server_streaming = message.serverStreaming === false ? undefined : message.serverStreaming;
    return obj;
  },
  fromAminoMsg(object: MethodDescriptorProtoAminoMsg): MethodDescriptorProto {
    return MethodDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message: MethodDescriptorProtoProtoMsg): MethodDescriptorProto {
    return MethodDescriptorProto.decode(message.value);
  },
  toProto(message: MethodDescriptorProto): Uint8Array {
    return MethodDescriptorProto.encode(message).finish();
  },
  toProtoMsg(message: MethodDescriptorProto): MethodDescriptorProtoProtoMsg {
    return {
      typeUrl: "/google.protobuf.MethodDescriptorProto",
      value: MethodDescriptorProto.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MethodDescriptorProto.typeUrl, MethodDescriptorProto);
function createBaseFileOptions(): FileOptions {
  return {
    javaPackage: "",
    javaOuterClassname: "",
    javaMultipleFiles: false,
    javaGenerateEqualsAndHash: false,
    javaStringCheckUtf8: false,
    optimizeFor: 1,
    goPackage: "",
    ccGenericServices: false,
    javaGenericServices: false,
    pyGenericServices: false,
    phpGenericServices: false,
    deprecated: false,
    ccEnableArenas: false,
    objcClassPrefix: "",
    csharpNamespace: "",
    swiftPrefix: "",
    phpClassPrefix: "",
    phpNamespace: "",
    phpMetadataNamespace: "",
    rubyPackage: "",
    uninterpretedOption: []
  };
}
export const FileOptions = {
  typeUrl: "/google.protobuf.FileOptions",
  is(o: any): o is FileOptions {
    return o && (o.$typeUrl === FileOptions.typeUrl || typeof o.javaPackage === "string" && typeof o.javaOuterClassname === "string" && typeof o.javaMultipleFiles === "boolean" && typeof o.javaGenerateEqualsAndHash === "boolean" && typeof o.javaStringCheckUtf8 === "boolean" && isSet(o.optimizeFor) && typeof o.goPackage === "string" && typeof o.ccGenericServices === "boolean" && typeof o.javaGenericServices === "boolean" && typeof o.pyGenericServices === "boolean" && typeof o.phpGenericServices === "boolean" && typeof o.deprecated === "boolean" && typeof o.ccEnableArenas === "boolean" && typeof o.objcClassPrefix === "string" && typeof o.csharpNamespace === "string" && typeof o.swiftPrefix === "string" && typeof o.phpClassPrefix === "string" && typeof o.phpNamespace === "string" && typeof o.phpMetadataNamespace === "string" && typeof o.rubyPackage === "string" && Array.isArray(o.uninterpretedOption) && (!o.uninterpretedOption.length || UninterpretedOption.is(o.uninterpretedOption[0])));
  },
  isSDK(o: any): o is FileOptionsSDKType {
    return o && (o.$typeUrl === FileOptions.typeUrl || typeof o.java_package === "string" && typeof o.java_outer_classname === "string" && typeof o.java_multiple_files === "boolean" && typeof o.java_generate_equals_and_hash === "boolean" && typeof o.java_string_check_utf8 === "boolean" && isSet(o.optimize_for) && typeof o.go_package === "string" && typeof o.cc_generic_services === "boolean" && typeof o.java_generic_services === "boolean" && typeof o.py_generic_services === "boolean" && typeof o.php_generic_services === "boolean" && typeof o.deprecated === "boolean" && typeof o.cc_enable_arenas === "boolean" && typeof o.objc_class_prefix === "string" && typeof o.csharp_namespace === "string" && typeof o.swift_prefix === "string" && typeof o.php_class_prefix === "string" && typeof o.php_namespace === "string" && typeof o.php_metadata_namespace === "string" && typeof o.ruby_package === "string" && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || UninterpretedOption.isSDK(o.uninterpreted_option[0])));
  },
  isAmino(o: any): o is FileOptionsAmino {
    return o && (o.$typeUrl === FileOptions.typeUrl || typeof o.java_package === "string" && typeof o.java_outer_classname === "string" && typeof o.java_multiple_files === "boolean" && typeof o.java_generate_equals_and_hash === "boolean" && typeof o.java_string_check_utf8 === "boolean" && isSet(o.optimize_for) && typeof o.go_package === "string" && typeof o.cc_generic_services === "boolean" && typeof o.java_generic_services === "boolean" && typeof o.py_generic_services === "boolean" && typeof o.php_generic_services === "boolean" && typeof o.deprecated === "boolean" && typeof o.cc_enable_arenas === "boolean" && typeof o.objc_class_prefix === "string" && typeof o.csharp_namespace === "string" && typeof o.swift_prefix === "string" && typeof o.php_class_prefix === "string" && typeof o.php_namespace === "string" && typeof o.php_metadata_namespace === "string" && typeof o.ruby_package === "string" && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || UninterpretedOption.isAmino(o.uninterpreted_option[0])));
  },
  encode(message: FileOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.javaPackage !== undefined) {
      writer.uint32(10).string(message.javaPackage);
    }
    if (message.javaOuterClassname !== undefined) {
      writer.uint32(66).string(message.javaOuterClassname);
    }
    if (message.javaMultipleFiles !== undefined) {
      writer.uint32(80).bool(message.javaMultipleFiles);
    }
    if (message.javaGenerateEqualsAndHash !== undefined) {
      writer.uint32(160).bool(message.javaGenerateEqualsAndHash);
    }
    if (message.javaStringCheckUtf8 !== undefined) {
      writer.uint32(216).bool(message.javaStringCheckUtf8);
    }
    if (message.optimizeFor !== 1) {
      writer.uint32(72).int32(message.optimizeFor);
    }
    if (message.goPackage !== undefined) {
      writer.uint32(90).string(message.goPackage);
    }
    if (message.ccGenericServices !== undefined) {
      writer.uint32(128).bool(message.ccGenericServices);
    }
    if (message.javaGenericServices !== undefined) {
      writer.uint32(136).bool(message.javaGenericServices);
    }
    if (message.pyGenericServices !== undefined) {
      writer.uint32(144).bool(message.pyGenericServices);
    }
    if (message.phpGenericServices !== undefined) {
      writer.uint32(336).bool(message.phpGenericServices);
    }
    if (message.deprecated !== undefined) {
      writer.uint32(184).bool(message.deprecated);
    }
    if (message.ccEnableArenas !== undefined) {
      writer.uint32(248).bool(message.ccEnableArenas);
    }
    if (message.objcClassPrefix !== undefined) {
      writer.uint32(290).string(message.objcClassPrefix);
    }
    if (message.csharpNamespace !== undefined) {
      writer.uint32(298).string(message.csharpNamespace);
    }
    if (message.swiftPrefix !== undefined) {
      writer.uint32(314).string(message.swiftPrefix);
    }
    if (message.phpClassPrefix !== undefined) {
      writer.uint32(322).string(message.phpClassPrefix);
    }
    if (message.phpNamespace !== undefined) {
      writer.uint32(330).string(message.phpNamespace);
    }
    if (message.phpMetadataNamespace !== undefined) {
      writer.uint32(354).string(message.phpMetadataNamespace);
    }
    if (message.rubyPackage !== undefined) {
      writer.uint32(362).string(message.rubyPackage);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FileOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.javaPackage = reader.string();
          break;
        case 8:
          message.javaOuterClassname = reader.string();
          break;
        case 10:
          message.javaMultipleFiles = reader.bool();
          break;
        case 20:
          message.javaGenerateEqualsAndHash = reader.bool();
          break;
        case 27:
          message.javaStringCheckUtf8 = reader.bool();
          break;
        case 9:
          message.optimizeFor = (reader.int32() as any);
          break;
        case 11:
          message.goPackage = reader.string();
          break;
        case 16:
          message.ccGenericServices = reader.bool();
          break;
        case 17:
          message.javaGenericServices = reader.bool();
          break;
        case 18:
          message.pyGenericServices = reader.bool();
          break;
        case 42:
          message.phpGenericServices = reader.bool();
          break;
        case 23:
          message.deprecated = reader.bool();
          break;
        case 31:
          message.ccEnableArenas = reader.bool();
          break;
        case 36:
          message.objcClassPrefix = reader.string();
          break;
        case 37:
          message.csharpNamespace = reader.string();
          break;
        case 39:
          message.swiftPrefix = reader.string();
          break;
        case 40:
          message.phpClassPrefix = reader.string();
          break;
        case 41:
          message.phpNamespace = reader.string();
          break;
        case 44:
          message.phpMetadataNamespace = reader.string();
          break;
        case 45:
          message.rubyPackage = reader.string();
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FileOptions {
    const obj = createBaseFileOptions();
    if (isSet(object.javaPackage)) obj.javaPackage = String(object.javaPackage);
    if (isSet(object.javaOuterClassname)) obj.javaOuterClassname = String(object.javaOuterClassname);
    if (isSet(object.javaMultipleFiles)) obj.javaMultipleFiles = Boolean(object.javaMultipleFiles);
    if (isSet(object.javaGenerateEqualsAndHash)) obj.javaGenerateEqualsAndHash = Boolean(object.javaGenerateEqualsAndHash);
    if (isSet(object.javaStringCheckUtf8)) obj.javaStringCheckUtf8 = Boolean(object.javaStringCheckUtf8);
    if (isSet(object.optimizeFor)) obj.optimizeFor = fileOptions_OptimizeModeFromJSON(object.optimizeFor);
    if (isSet(object.goPackage)) obj.goPackage = String(object.goPackage);
    if (isSet(object.ccGenericServices)) obj.ccGenericServices = Boolean(object.ccGenericServices);
    if (isSet(object.javaGenericServices)) obj.javaGenericServices = Boolean(object.javaGenericServices);
    if (isSet(object.pyGenericServices)) obj.pyGenericServices = Boolean(object.pyGenericServices);
    if (isSet(object.phpGenericServices)) obj.phpGenericServices = Boolean(object.phpGenericServices);
    if (isSet(object.deprecated)) obj.deprecated = Boolean(object.deprecated);
    if (isSet(object.ccEnableArenas)) obj.ccEnableArenas = Boolean(object.ccEnableArenas);
    if (isSet(object.objcClassPrefix)) obj.objcClassPrefix = String(object.objcClassPrefix);
    if (isSet(object.csharpNamespace)) obj.csharpNamespace = String(object.csharpNamespace);
    if (isSet(object.swiftPrefix)) obj.swiftPrefix = String(object.swiftPrefix);
    if (isSet(object.phpClassPrefix)) obj.phpClassPrefix = String(object.phpClassPrefix);
    if (isSet(object.phpNamespace)) obj.phpNamespace = String(object.phpNamespace);
    if (isSet(object.phpMetadataNamespace)) obj.phpMetadataNamespace = String(object.phpMetadataNamespace);
    if (isSet(object.rubyPackage)) obj.rubyPackage = String(object.rubyPackage);
    if (Array.isArray(object?.uninterpretedOption)) obj.uninterpretedOption = object.uninterpretedOption.map((e: any) => UninterpretedOption.fromJSON(e));
    return obj;
  },
  toJSON(message: FileOptions): JsonSafe<FileOptions> {
    const obj: any = {};
    message.javaPackage !== undefined && (obj.javaPackage = message.javaPackage);
    message.javaOuterClassname !== undefined && (obj.javaOuterClassname = message.javaOuterClassname);
    message.javaMultipleFiles !== undefined && (obj.javaMultipleFiles = message.javaMultipleFiles);
    message.javaGenerateEqualsAndHash !== undefined && (obj.javaGenerateEqualsAndHash = message.javaGenerateEqualsAndHash);
    message.javaStringCheckUtf8 !== undefined && (obj.javaStringCheckUtf8 = message.javaStringCheckUtf8);
    message.optimizeFor !== undefined && (obj.optimizeFor = fileOptions_OptimizeModeToJSON(message.optimizeFor));
    message.goPackage !== undefined && (obj.goPackage = message.goPackage);
    message.ccGenericServices !== undefined && (obj.ccGenericServices = message.ccGenericServices);
    message.javaGenericServices !== undefined && (obj.javaGenericServices = message.javaGenericServices);
    message.pyGenericServices !== undefined && (obj.pyGenericServices = message.pyGenericServices);
    message.phpGenericServices !== undefined && (obj.phpGenericServices = message.phpGenericServices);
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    message.ccEnableArenas !== undefined && (obj.ccEnableArenas = message.ccEnableArenas);
    message.objcClassPrefix !== undefined && (obj.objcClassPrefix = message.objcClassPrefix);
    message.csharpNamespace !== undefined && (obj.csharpNamespace = message.csharpNamespace);
    message.swiftPrefix !== undefined && (obj.swiftPrefix = message.swiftPrefix);
    message.phpClassPrefix !== undefined && (obj.phpClassPrefix = message.phpClassPrefix);
    message.phpNamespace !== undefined && (obj.phpNamespace = message.phpNamespace);
    message.phpMetadataNamespace !== undefined && (obj.phpMetadataNamespace = message.phpMetadataNamespace);
    message.rubyPackage !== undefined && (obj.rubyPackage = message.rubyPackage);
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map(e => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<FileOptions>): FileOptions {
    const message = createBaseFileOptions();
    message.javaPackage = object.javaPackage ?? "";
    message.javaOuterClassname = object.javaOuterClassname ?? "";
    message.javaMultipleFiles = object.javaMultipleFiles ?? false;
    message.javaGenerateEqualsAndHash = object.javaGenerateEqualsAndHash ?? false;
    message.javaStringCheckUtf8 = object.javaStringCheckUtf8 ?? false;
    message.optimizeFor = object.optimizeFor ?? 1;
    message.goPackage = object.goPackage ?? "";
    message.ccGenericServices = object.ccGenericServices ?? false;
    message.javaGenericServices = object.javaGenericServices ?? false;
    message.pyGenericServices = object.pyGenericServices ?? false;
    message.phpGenericServices = object.phpGenericServices ?? false;
    message.deprecated = object.deprecated ?? false;
    message.ccEnableArenas = object.ccEnableArenas ?? false;
    message.objcClassPrefix = object.objcClassPrefix ?? "";
    message.csharpNamespace = object.csharpNamespace ?? "";
    message.swiftPrefix = object.swiftPrefix ?? "";
    message.phpClassPrefix = object.phpClassPrefix ?? "";
    message.phpNamespace = object.phpNamespace ?? "";
    message.phpMetadataNamespace = object.phpMetadataNamespace ?? "";
    message.rubyPackage = object.rubyPackage ?? "";
    message.uninterpretedOption = object.uninterpretedOption?.map(e => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: FileOptionsSDKType): FileOptions {
    return {
      javaPackage: object?.java_package,
      javaOuterClassname: object?.java_outer_classname,
      javaMultipleFiles: object?.java_multiple_files,
      javaGenerateEqualsAndHash: object?.java_generate_equals_and_hash,
      javaStringCheckUtf8: object?.java_string_check_utf8,
      optimizeFor: isSet(object.optimize_for) ? fileOptions_OptimizeModeFromJSON(object.optimize_for) : -1,
      goPackage: object?.go_package,
      ccGenericServices: object?.cc_generic_services,
      javaGenericServices: object?.java_generic_services,
      pyGenericServices: object?.py_generic_services,
      phpGenericServices: object?.php_generic_services,
      deprecated: object?.deprecated,
      ccEnableArenas: object?.cc_enable_arenas,
      objcClassPrefix: object?.objc_class_prefix,
      csharpNamespace: object?.csharp_namespace,
      swiftPrefix: object?.swift_prefix,
      phpClassPrefix: object?.php_class_prefix,
      phpNamespace: object?.php_namespace,
      phpMetadataNamespace: object?.php_metadata_namespace,
      rubyPackage: object?.ruby_package,
      uninterpretedOption: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromSDK(e)) : []
    };
  },
  toSDK(message: FileOptions): FileOptionsSDKType {
    const obj: any = {};
    obj.java_package = message.javaPackage;
    obj.java_outer_classname = message.javaOuterClassname;
    obj.java_multiple_files = message.javaMultipleFiles;
    obj.java_generate_equals_and_hash = message.javaGenerateEqualsAndHash;
    obj.java_string_check_utf8 = message.javaStringCheckUtf8;
    message.optimizeFor !== undefined && (obj.optimize_for = fileOptions_OptimizeModeToJSON(message.optimizeFor));
    obj.go_package = message.goPackage;
    obj.cc_generic_services = message.ccGenericServices;
    obj.java_generic_services = message.javaGenericServices;
    obj.py_generic_services = message.pyGenericServices;
    obj.php_generic_services = message.phpGenericServices;
    obj.deprecated = message.deprecated;
    obj.cc_enable_arenas = message.ccEnableArenas;
    obj.objc_class_prefix = message.objcClassPrefix;
    obj.csharp_namespace = message.csharpNamespace;
    obj.swift_prefix = message.swiftPrefix;
    obj.php_class_prefix = message.phpClassPrefix;
    obj.php_namespace = message.phpNamespace;
    obj.php_metadata_namespace = message.phpMetadataNamespace;
    obj.ruby_package = message.rubyPackage;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? UninterpretedOption.toSDK(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromAmino(object: FileOptionsAmino): FileOptions {
    const message = createBaseFileOptions();
    if (object.java_package !== undefined && object.java_package !== null) {
      message.javaPackage = object.java_package;
    }
    if (object.java_outer_classname !== undefined && object.java_outer_classname !== null) {
      message.javaOuterClassname = object.java_outer_classname;
    }
    if (object.java_multiple_files !== undefined && object.java_multiple_files !== null) {
      message.javaMultipleFiles = object.java_multiple_files;
    }
    if (object.java_generate_equals_and_hash !== undefined && object.java_generate_equals_and_hash !== null) {
      message.javaGenerateEqualsAndHash = object.java_generate_equals_and_hash;
    }
    if (object.java_string_check_utf8 !== undefined && object.java_string_check_utf8 !== null) {
      message.javaStringCheckUtf8 = object.java_string_check_utf8;
    }
    if (object.optimize_for !== undefined && object.optimize_for !== null) {
      message.optimizeFor = object.optimize_for;
    }
    if (object.go_package !== undefined && object.go_package !== null) {
      message.goPackage = object.go_package;
    }
    if (object.cc_generic_services !== undefined && object.cc_generic_services !== null) {
      message.ccGenericServices = object.cc_generic_services;
    }
    if (object.java_generic_services !== undefined && object.java_generic_services !== null) {
      message.javaGenericServices = object.java_generic_services;
    }
    if (object.py_generic_services !== undefined && object.py_generic_services !== null) {
      message.pyGenericServices = object.py_generic_services;
    }
    if (object.php_generic_services !== undefined && object.php_generic_services !== null) {
      message.phpGenericServices = object.php_generic_services;
    }
    if (object.deprecated !== undefined && object.deprecated !== null) {
      message.deprecated = object.deprecated;
    }
    if (object.cc_enable_arenas !== undefined && object.cc_enable_arenas !== null) {
      message.ccEnableArenas = object.cc_enable_arenas;
    }
    if (object.objc_class_prefix !== undefined && object.objc_class_prefix !== null) {
      message.objcClassPrefix = object.objc_class_prefix;
    }
    if (object.csharp_namespace !== undefined && object.csharp_namespace !== null) {
      message.csharpNamespace = object.csharp_namespace;
    }
    if (object.swift_prefix !== undefined && object.swift_prefix !== null) {
      message.swiftPrefix = object.swift_prefix;
    }
    if (object.php_class_prefix !== undefined && object.php_class_prefix !== null) {
      message.phpClassPrefix = object.php_class_prefix;
    }
    if (object.php_namespace !== undefined && object.php_namespace !== null) {
      message.phpNamespace = object.php_namespace;
    }
    if (object.php_metadata_namespace !== undefined && object.php_metadata_namespace !== null) {
      message.phpMetadataNamespace = object.php_metadata_namespace;
    }
    if (object.ruby_package !== undefined && object.ruby_package !== null) {
      message.rubyPackage = object.ruby_package;
    }
    message.uninterpretedOption = object.uninterpreted_option?.map(e => UninterpretedOption.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: FileOptions): FileOptionsAmino {
    const obj: any = {};
    obj.java_package = message.javaPackage === "" ? undefined : message.javaPackage;
    obj.java_outer_classname = message.javaOuterClassname === "" ? undefined : message.javaOuterClassname;
    obj.java_multiple_files = message.javaMultipleFiles === false ? undefined : message.javaMultipleFiles;
    obj.java_generate_equals_and_hash = message.javaGenerateEqualsAndHash === false ? undefined : message.javaGenerateEqualsAndHash;
    obj.java_string_check_utf8 = message.javaStringCheckUtf8 === false ? undefined : message.javaStringCheckUtf8;
    obj.optimize_for = message.optimizeFor === 1 ? undefined : message.optimizeFor;
    obj.go_package = message.goPackage === "" ? undefined : message.goPackage;
    obj.cc_generic_services = message.ccGenericServices === false ? undefined : message.ccGenericServices;
    obj.java_generic_services = message.javaGenericServices === false ? undefined : message.javaGenericServices;
    obj.py_generic_services = message.pyGenericServices === false ? undefined : message.pyGenericServices;
    obj.php_generic_services = message.phpGenericServices === false ? undefined : message.phpGenericServices;
    obj.deprecated = message.deprecated === false ? undefined : message.deprecated;
    obj.cc_enable_arenas = message.ccEnableArenas === false ? undefined : message.ccEnableArenas;
    obj.objc_class_prefix = message.objcClassPrefix === "" ? undefined : message.objcClassPrefix;
    obj.csharp_namespace = message.csharpNamespace === "" ? undefined : message.csharpNamespace;
    obj.swift_prefix = message.swiftPrefix === "" ? undefined : message.swiftPrefix;
    obj.php_class_prefix = message.phpClassPrefix === "" ? undefined : message.phpClassPrefix;
    obj.php_namespace = message.phpNamespace === "" ? undefined : message.phpNamespace;
    obj.php_metadata_namespace = message.phpMetadataNamespace === "" ? undefined : message.phpMetadataNamespace;
    obj.ruby_package = message.rubyPackage === "" ? undefined : message.rubyPackage;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? UninterpretedOption.toAmino(e) : undefined);
    } else {
      obj.uninterpreted_option = message.uninterpretedOption;
    }
    return obj;
  },
  fromAminoMsg(object: FileOptionsAminoMsg): FileOptions {
    return FileOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: FileOptionsProtoMsg): FileOptions {
    return FileOptions.decode(message.value);
  },
  toProto(message: FileOptions): Uint8Array {
    return FileOptions.encode(message).finish();
  },
  toProtoMsg(message: FileOptions): FileOptionsProtoMsg {
    return {
      typeUrl: "/google.protobuf.FileOptions",
      value: FileOptions.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FileOptions.typeUrl, FileOptions);
function createBaseMessageOptions(): MessageOptions {
  return {
    messageSetWireFormat: false,
    noStandardDescriptorAccessor: false,
    deprecated: false,
    mapEntry: false,
    uninterpretedOption: []
  };
}
export const MessageOptions = {
  typeUrl: "/google.protobuf.MessageOptions",
  is(o: any): o is MessageOptions {
    return o && (o.$typeUrl === MessageOptions.typeUrl || typeof o.messageSetWireFormat === "boolean" && typeof o.noStandardDescriptorAccessor === "boolean" && typeof o.deprecated === "boolean" && typeof o.mapEntry === "boolean" && Array.isArray(o.uninterpretedOption) && (!o.uninterpretedOption.length || UninterpretedOption.is(o.uninterpretedOption[0])));
  },
  isSDK(o: any): o is MessageOptionsSDKType {
    return o && (o.$typeUrl === MessageOptions.typeUrl || typeof o.message_set_wire_format === "boolean" && typeof o.no_standard_descriptor_accessor === "boolean" && typeof o.deprecated === "boolean" && typeof o.map_entry === "boolean" && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || UninterpretedOption.isSDK(o.uninterpreted_option[0])));
  },
  isAmino(o: any): o is MessageOptionsAmino {
    return o && (o.$typeUrl === MessageOptions.typeUrl || typeof o.message_set_wire_format === "boolean" && typeof o.no_standard_descriptor_accessor === "boolean" && typeof o.deprecated === "boolean" && typeof o.map_entry === "boolean" && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || UninterpretedOption.isAmino(o.uninterpreted_option[0])));
  },
  encode(message: MessageOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.messageSetWireFormat !== undefined) {
      writer.uint32(8).bool(message.messageSetWireFormat);
    }
    if (message.noStandardDescriptorAccessor !== undefined) {
      writer.uint32(16).bool(message.noStandardDescriptorAccessor);
    }
    if (message.deprecated !== undefined) {
      writer.uint32(24).bool(message.deprecated);
    }
    if (message.mapEntry !== undefined) {
      writer.uint32(56).bool(message.mapEntry);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MessageOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageSetWireFormat = reader.bool();
          break;
        case 2:
          message.noStandardDescriptorAccessor = reader.bool();
          break;
        case 3:
          message.deprecated = reader.bool();
          break;
        case 7:
          message.mapEntry = reader.bool();
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MessageOptions {
    const obj = createBaseMessageOptions();
    if (isSet(object.messageSetWireFormat)) obj.messageSetWireFormat = Boolean(object.messageSetWireFormat);
    if (isSet(object.noStandardDescriptorAccessor)) obj.noStandardDescriptorAccessor = Boolean(object.noStandardDescriptorAccessor);
    if (isSet(object.deprecated)) obj.deprecated = Boolean(object.deprecated);
    if (isSet(object.mapEntry)) obj.mapEntry = Boolean(object.mapEntry);
    if (Array.isArray(object?.uninterpretedOption)) obj.uninterpretedOption = object.uninterpretedOption.map((e: any) => UninterpretedOption.fromJSON(e));
    return obj;
  },
  toJSON(message: MessageOptions): JsonSafe<MessageOptions> {
    const obj: any = {};
    message.messageSetWireFormat !== undefined && (obj.messageSetWireFormat = message.messageSetWireFormat);
    message.noStandardDescriptorAccessor !== undefined && (obj.noStandardDescriptorAccessor = message.noStandardDescriptorAccessor);
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    message.mapEntry !== undefined && (obj.mapEntry = message.mapEntry);
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map(e => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MessageOptions>): MessageOptions {
    const message = createBaseMessageOptions();
    message.messageSetWireFormat = object.messageSetWireFormat ?? false;
    message.noStandardDescriptorAccessor = object.noStandardDescriptorAccessor ?? false;
    message.deprecated = object.deprecated ?? false;
    message.mapEntry = object.mapEntry ?? false;
    message.uninterpretedOption = object.uninterpretedOption?.map(e => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MessageOptionsSDKType): MessageOptions {
    return {
      messageSetWireFormat: object?.message_set_wire_format,
      noStandardDescriptorAccessor: object?.no_standard_descriptor_accessor,
      deprecated: object?.deprecated,
      mapEntry: object?.map_entry,
      uninterpretedOption: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromSDK(e)) : []
    };
  },
  toSDK(message: MessageOptions): MessageOptionsSDKType {
    const obj: any = {};
    obj.message_set_wire_format = message.messageSetWireFormat;
    obj.no_standard_descriptor_accessor = message.noStandardDescriptorAccessor;
    obj.deprecated = message.deprecated;
    obj.map_entry = message.mapEntry;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? UninterpretedOption.toSDK(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromAmino(object: MessageOptionsAmino): MessageOptions {
    const message = createBaseMessageOptions();
    if (object.message_set_wire_format !== undefined && object.message_set_wire_format !== null) {
      message.messageSetWireFormat = object.message_set_wire_format;
    }
    if (object.no_standard_descriptor_accessor !== undefined && object.no_standard_descriptor_accessor !== null) {
      message.noStandardDescriptorAccessor = object.no_standard_descriptor_accessor;
    }
    if (object.deprecated !== undefined && object.deprecated !== null) {
      message.deprecated = object.deprecated;
    }
    if (object.map_entry !== undefined && object.map_entry !== null) {
      message.mapEntry = object.map_entry;
    }
    message.uninterpretedOption = object.uninterpreted_option?.map(e => UninterpretedOption.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MessageOptions): MessageOptionsAmino {
    const obj: any = {};
    obj.message_set_wire_format = message.messageSetWireFormat === false ? undefined : message.messageSetWireFormat;
    obj.no_standard_descriptor_accessor = message.noStandardDescriptorAccessor === false ? undefined : message.noStandardDescriptorAccessor;
    obj.deprecated = message.deprecated === false ? undefined : message.deprecated;
    obj.map_entry = message.mapEntry === false ? undefined : message.mapEntry;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? UninterpretedOption.toAmino(e) : undefined);
    } else {
      obj.uninterpreted_option = message.uninterpretedOption;
    }
    return obj;
  },
  fromAminoMsg(object: MessageOptionsAminoMsg): MessageOptions {
    return MessageOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: MessageOptionsProtoMsg): MessageOptions {
    return MessageOptions.decode(message.value);
  },
  toProto(message: MessageOptions): Uint8Array {
    return MessageOptions.encode(message).finish();
  },
  toProtoMsg(message: MessageOptions): MessageOptionsProtoMsg {
    return {
      typeUrl: "/google.protobuf.MessageOptions",
      value: MessageOptions.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MessageOptions.typeUrl, MessageOptions);
function createBaseFieldOptions(): FieldOptions {
  return {
    ctype: 1,
    packed: false,
    jstype: 1,
    lazy: false,
    deprecated: false,
    weak: false,
    uninterpretedOption: []
  };
}
export const FieldOptions = {
  typeUrl: "/google.protobuf.FieldOptions",
  is(o: any): o is FieldOptions {
    return o && (o.$typeUrl === FieldOptions.typeUrl || isSet(o.ctype) && typeof o.packed === "boolean" && isSet(o.jstype) && typeof o.lazy === "boolean" && typeof o.deprecated === "boolean" && typeof o.weak === "boolean" && Array.isArray(o.uninterpretedOption) && (!o.uninterpretedOption.length || UninterpretedOption.is(o.uninterpretedOption[0])));
  },
  isSDK(o: any): o is FieldOptionsSDKType {
    return o && (o.$typeUrl === FieldOptions.typeUrl || isSet(o.ctype) && typeof o.packed === "boolean" && isSet(o.jstype) && typeof o.lazy === "boolean" && typeof o.deprecated === "boolean" && typeof o.weak === "boolean" && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || UninterpretedOption.isSDK(o.uninterpreted_option[0])));
  },
  isAmino(o: any): o is FieldOptionsAmino {
    return o && (o.$typeUrl === FieldOptions.typeUrl || isSet(o.ctype) && typeof o.packed === "boolean" && isSet(o.jstype) && typeof o.lazy === "boolean" && typeof o.deprecated === "boolean" && typeof o.weak === "boolean" && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || UninterpretedOption.isAmino(o.uninterpreted_option[0])));
  },
  encode(message: FieldOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ctype !== 1) {
      writer.uint32(8).int32(message.ctype);
    }
    if (message.packed !== undefined) {
      writer.uint32(16).bool(message.packed);
    }
    if (message.jstype !== 1) {
      writer.uint32(48).int32(message.jstype);
    }
    if (message.lazy !== undefined) {
      writer.uint32(40).bool(message.lazy);
    }
    if (message.deprecated !== undefined) {
      writer.uint32(24).bool(message.deprecated);
    }
    if (message.weak !== undefined) {
      writer.uint32(80).bool(message.weak);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FieldOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ctype = (reader.int32() as any);
          break;
        case 2:
          message.packed = reader.bool();
          break;
        case 6:
          message.jstype = (reader.int32() as any);
          break;
        case 5:
          message.lazy = reader.bool();
          break;
        case 3:
          message.deprecated = reader.bool();
          break;
        case 10:
          message.weak = reader.bool();
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FieldOptions {
    const obj = createBaseFieldOptions();
    if (isSet(object.ctype)) obj.ctype = fieldOptions_CTypeFromJSON(object.ctype);
    if (isSet(object.packed)) obj.packed = Boolean(object.packed);
    if (isSet(object.jstype)) obj.jstype = fieldOptions_JSTypeFromJSON(object.jstype);
    if (isSet(object.lazy)) obj.lazy = Boolean(object.lazy);
    if (isSet(object.deprecated)) obj.deprecated = Boolean(object.deprecated);
    if (isSet(object.weak)) obj.weak = Boolean(object.weak);
    if (Array.isArray(object?.uninterpretedOption)) obj.uninterpretedOption = object.uninterpretedOption.map((e: any) => UninterpretedOption.fromJSON(e));
    return obj;
  },
  toJSON(message: FieldOptions): JsonSafe<FieldOptions> {
    const obj: any = {};
    message.ctype !== undefined && (obj.ctype = fieldOptions_CTypeToJSON(message.ctype));
    message.packed !== undefined && (obj.packed = message.packed);
    message.jstype !== undefined && (obj.jstype = fieldOptions_JSTypeToJSON(message.jstype));
    message.lazy !== undefined && (obj.lazy = message.lazy);
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    message.weak !== undefined && (obj.weak = message.weak);
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map(e => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<FieldOptions>): FieldOptions {
    const message = createBaseFieldOptions();
    message.ctype = object.ctype ?? 1;
    message.packed = object.packed ?? false;
    message.jstype = object.jstype ?? 1;
    message.lazy = object.lazy ?? false;
    message.deprecated = object.deprecated ?? false;
    message.weak = object.weak ?? false;
    message.uninterpretedOption = object.uninterpretedOption?.map(e => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: FieldOptionsSDKType): FieldOptions {
    return {
      ctype: isSet(object.ctype) ? fieldOptions_CTypeFromJSON(object.ctype) : -1,
      packed: object?.packed,
      jstype: isSet(object.jstype) ? fieldOptions_JSTypeFromJSON(object.jstype) : -1,
      lazy: object?.lazy,
      deprecated: object?.deprecated,
      weak: object?.weak,
      uninterpretedOption: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromSDK(e)) : []
    };
  },
  toSDK(message: FieldOptions): FieldOptionsSDKType {
    const obj: any = {};
    message.ctype !== undefined && (obj.ctype = fieldOptions_CTypeToJSON(message.ctype));
    obj.packed = message.packed;
    message.jstype !== undefined && (obj.jstype = fieldOptions_JSTypeToJSON(message.jstype));
    obj.lazy = message.lazy;
    obj.deprecated = message.deprecated;
    obj.weak = message.weak;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? UninterpretedOption.toSDK(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromAmino(object: FieldOptionsAmino): FieldOptions {
    const message = createBaseFieldOptions();
    if (object.ctype !== undefined && object.ctype !== null) {
      message.ctype = object.ctype;
    }
    if (object.packed !== undefined && object.packed !== null) {
      message.packed = object.packed;
    }
    if (object.jstype !== undefined && object.jstype !== null) {
      message.jstype = object.jstype;
    }
    if (object.lazy !== undefined && object.lazy !== null) {
      message.lazy = object.lazy;
    }
    if (object.deprecated !== undefined && object.deprecated !== null) {
      message.deprecated = object.deprecated;
    }
    if (object.weak !== undefined && object.weak !== null) {
      message.weak = object.weak;
    }
    message.uninterpretedOption = object.uninterpreted_option?.map(e => UninterpretedOption.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: FieldOptions): FieldOptionsAmino {
    const obj: any = {};
    obj.ctype = message.ctype === 1 ? undefined : message.ctype;
    obj.packed = message.packed === false ? undefined : message.packed;
    obj.jstype = message.jstype === 1 ? undefined : message.jstype;
    obj.lazy = message.lazy === false ? undefined : message.lazy;
    obj.deprecated = message.deprecated === false ? undefined : message.deprecated;
    obj.weak = message.weak === false ? undefined : message.weak;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? UninterpretedOption.toAmino(e) : undefined);
    } else {
      obj.uninterpreted_option = message.uninterpretedOption;
    }
    return obj;
  },
  fromAminoMsg(object: FieldOptionsAminoMsg): FieldOptions {
    return FieldOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: FieldOptionsProtoMsg): FieldOptions {
    return FieldOptions.decode(message.value);
  },
  toProto(message: FieldOptions): Uint8Array {
    return FieldOptions.encode(message).finish();
  },
  toProtoMsg(message: FieldOptions): FieldOptionsProtoMsg {
    return {
      typeUrl: "/google.protobuf.FieldOptions",
      value: FieldOptions.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FieldOptions.typeUrl, FieldOptions);
function createBaseOneofOptions(): OneofOptions {
  return {
    uninterpretedOption: []
  };
}
export const OneofOptions = {
  typeUrl: "/google.protobuf.OneofOptions",
  is(o: any): o is OneofOptions {
    return o && (o.$typeUrl === OneofOptions.typeUrl || Array.isArray(o.uninterpretedOption) && (!o.uninterpretedOption.length || UninterpretedOption.is(o.uninterpretedOption[0])));
  },
  isSDK(o: any): o is OneofOptionsSDKType {
    return o && (o.$typeUrl === OneofOptions.typeUrl || Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || UninterpretedOption.isSDK(o.uninterpreted_option[0])));
  },
  isAmino(o: any): o is OneofOptionsAmino {
    return o && (o.$typeUrl === OneofOptions.typeUrl || Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || UninterpretedOption.isAmino(o.uninterpreted_option[0])));
  },
  encode(message: OneofOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OneofOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOneofOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OneofOptions {
    const obj = createBaseOneofOptions();
    if (Array.isArray(object?.uninterpretedOption)) obj.uninterpretedOption = object.uninterpretedOption.map((e: any) => UninterpretedOption.fromJSON(e));
    return obj;
  },
  toJSON(message: OneofOptions): JsonSafe<OneofOptions> {
    const obj: any = {};
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map(e => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<OneofOptions>): OneofOptions {
    const message = createBaseOneofOptions();
    message.uninterpretedOption = object.uninterpretedOption?.map(e => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: OneofOptionsSDKType): OneofOptions {
    return {
      uninterpretedOption: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromSDK(e)) : []
    };
  },
  toSDK(message: OneofOptions): OneofOptionsSDKType {
    const obj: any = {};
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? UninterpretedOption.toSDK(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromAmino(object: OneofOptionsAmino): OneofOptions {
    const message = createBaseOneofOptions();
    message.uninterpretedOption = object.uninterpreted_option?.map(e => UninterpretedOption.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: OneofOptions): OneofOptionsAmino {
    const obj: any = {};
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? UninterpretedOption.toAmino(e) : undefined);
    } else {
      obj.uninterpreted_option = message.uninterpretedOption;
    }
    return obj;
  },
  fromAminoMsg(object: OneofOptionsAminoMsg): OneofOptions {
    return OneofOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: OneofOptionsProtoMsg): OneofOptions {
    return OneofOptions.decode(message.value);
  },
  toProto(message: OneofOptions): Uint8Array {
    return OneofOptions.encode(message).finish();
  },
  toProtoMsg(message: OneofOptions): OneofOptionsProtoMsg {
    return {
      typeUrl: "/google.protobuf.OneofOptions",
      value: OneofOptions.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(OneofOptions.typeUrl, OneofOptions);
function createBaseEnumOptions(): EnumOptions {
  return {
    allowAlias: false,
    deprecated: false,
    uninterpretedOption: []
  };
}
export const EnumOptions = {
  typeUrl: "/google.protobuf.EnumOptions",
  is(o: any): o is EnumOptions {
    return o && (o.$typeUrl === EnumOptions.typeUrl || typeof o.allowAlias === "boolean" && typeof o.deprecated === "boolean" && Array.isArray(o.uninterpretedOption) && (!o.uninterpretedOption.length || UninterpretedOption.is(o.uninterpretedOption[0])));
  },
  isSDK(o: any): o is EnumOptionsSDKType {
    return o && (o.$typeUrl === EnumOptions.typeUrl || typeof o.allow_alias === "boolean" && typeof o.deprecated === "boolean" && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || UninterpretedOption.isSDK(o.uninterpreted_option[0])));
  },
  isAmino(o: any): o is EnumOptionsAmino {
    return o && (o.$typeUrl === EnumOptions.typeUrl || typeof o.allow_alias === "boolean" && typeof o.deprecated === "boolean" && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || UninterpretedOption.isAmino(o.uninterpreted_option[0])));
  },
  encode(message: EnumOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.allowAlias !== undefined) {
      writer.uint32(16).bool(message.allowAlias);
    }
    if (message.deprecated !== undefined) {
      writer.uint32(24).bool(message.deprecated);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EnumOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.allowAlias = reader.bool();
          break;
        case 3:
          message.deprecated = reader.bool();
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EnumOptions {
    const obj = createBaseEnumOptions();
    if (isSet(object.allowAlias)) obj.allowAlias = Boolean(object.allowAlias);
    if (isSet(object.deprecated)) obj.deprecated = Boolean(object.deprecated);
    if (Array.isArray(object?.uninterpretedOption)) obj.uninterpretedOption = object.uninterpretedOption.map((e: any) => UninterpretedOption.fromJSON(e));
    return obj;
  },
  toJSON(message: EnumOptions): JsonSafe<EnumOptions> {
    const obj: any = {};
    message.allowAlias !== undefined && (obj.allowAlias = message.allowAlias);
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map(e => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<EnumOptions>): EnumOptions {
    const message = createBaseEnumOptions();
    message.allowAlias = object.allowAlias ?? false;
    message.deprecated = object.deprecated ?? false;
    message.uninterpretedOption = object.uninterpretedOption?.map(e => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: EnumOptionsSDKType): EnumOptions {
    return {
      allowAlias: object?.allow_alias,
      deprecated: object?.deprecated,
      uninterpretedOption: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromSDK(e)) : []
    };
  },
  toSDK(message: EnumOptions): EnumOptionsSDKType {
    const obj: any = {};
    obj.allow_alias = message.allowAlias;
    obj.deprecated = message.deprecated;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? UninterpretedOption.toSDK(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromAmino(object: EnumOptionsAmino): EnumOptions {
    const message = createBaseEnumOptions();
    if (object.allow_alias !== undefined && object.allow_alias !== null) {
      message.allowAlias = object.allow_alias;
    }
    if (object.deprecated !== undefined && object.deprecated !== null) {
      message.deprecated = object.deprecated;
    }
    message.uninterpretedOption = object.uninterpreted_option?.map(e => UninterpretedOption.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EnumOptions): EnumOptionsAmino {
    const obj: any = {};
    obj.allow_alias = message.allowAlias === false ? undefined : message.allowAlias;
    obj.deprecated = message.deprecated === false ? undefined : message.deprecated;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? UninterpretedOption.toAmino(e) : undefined);
    } else {
      obj.uninterpreted_option = message.uninterpretedOption;
    }
    return obj;
  },
  fromAminoMsg(object: EnumOptionsAminoMsg): EnumOptions {
    return EnumOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: EnumOptionsProtoMsg): EnumOptions {
    return EnumOptions.decode(message.value);
  },
  toProto(message: EnumOptions): Uint8Array {
    return EnumOptions.encode(message).finish();
  },
  toProtoMsg(message: EnumOptions): EnumOptionsProtoMsg {
    return {
      typeUrl: "/google.protobuf.EnumOptions",
      value: EnumOptions.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EnumOptions.typeUrl, EnumOptions);
function createBaseEnumValueOptions(): EnumValueOptions {
  return {
    deprecated: false,
    uninterpretedOption: []
  };
}
export const EnumValueOptions = {
  typeUrl: "/google.protobuf.EnumValueOptions",
  is(o: any): o is EnumValueOptions {
    return o && (o.$typeUrl === EnumValueOptions.typeUrl || typeof o.deprecated === "boolean" && Array.isArray(o.uninterpretedOption) && (!o.uninterpretedOption.length || UninterpretedOption.is(o.uninterpretedOption[0])));
  },
  isSDK(o: any): o is EnumValueOptionsSDKType {
    return o && (o.$typeUrl === EnumValueOptions.typeUrl || typeof o.deprecated === "boolean" && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || UninterpretedOption.isSDK(o.uninterpreted_option[0])));
  },
  isAmino(o: any): o is EnumValueOptionsAmino {
    return o && (o.$typeUrl === EnumValueOptions.typeUrl || typeof o.deprecated === "boolean" && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || UninterpretedOption.isAmino(o.uninterpreted_option[0])));
  },
  encode(message: EnumValueOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deprecated !== undefined) {
      writer.uint32(8).bool(message.deprecated);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EnumValueOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumValueOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deprecated = reader.bool();
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EnumValueOptions {
    const obj = createBaseEnumValueOptions();
    if (isSet(object.deprecated)) obj.deprecated = Boolean(object.deprecated);
    if (Array.isArray(object?.uninterpretedOption)) obj.uninterpretedOption = object.uninterpretedOption.map((e: any) => UninterpretedOption.fromJSON(e));
    return obj;
  },
  toJSON(message: EnumValueOptions): JsonSafe<EnumValueOptions> {
    const obj: any = {};
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map(e => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<EnumValueOptions>): EnumValueOptions {
    const message = createBaseEnumValueOptions();
    message.deprecated = object.deprecated ?? false;
    message.uninterpretedOption = object.uninterpretedOption?.map(e => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: EnumValueOptionsSDKType): EnumValueOptions {
    return {
      deprecated: object?.deprecated,
      uninterpretedOption: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromSDK(e)) : []
    };
  },
  toSDK(message: EnumValueOptions): EnumValueOptionsSDKType {
    const obj: any = {};
    obj.deprecated = message.deprecated;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? UninterpretedOption.toSDK(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromAmino(object: EnumValueOptionsAmino): EnumValueOptions {
    const message = createBaseEnumValueOptions();
    if (object.deprecated !== undefined && object.deprecated !== null) {
      message.deprecated = object.deprecated;
    }
    message.uninterpretedOption = object.uninterpreted_option?.map(e => UninterpretedOption.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EnumValueOptions): EnumValueOptionsAmino {
    const obj: any = {};
    obj.deprecated = message.deprecated === false ? undefined : message.deprecated;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? UninterpretedOption.toAmino(e) : undefined);
    } else {
      obj.uninterpreted_option = message.uninterpretedOption;
    }
    return obj;
  },
  fromAminoMsg(object: EnumValueOptionsAminoMsg): EnumValueOptions {
    return EnumValueOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: EnumValueOptionsProtoMsg): EnumValueOptions {
    return EnumValueOptions.decode(message.value);
  },
  toProto(message: EnumValueOptions): Uint8Array {
    return EnumValueOptions.encode(message).finish();
  },
  toProtoMsg(message: EnumValueOptions): EnumValueOptionsProtoMsg {
    return {
      typeUrl: "/google.protobuf.EnumValueOptions",
      value: EnumValueOptions.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EnumValueOptions.typeUrl, EnumValueOptions);
function createBaseServiceOptions(): ServiceOptions {
  return {
    deprecated: false,
    uninterpretedOption: []
  };
}
export const ServiceOptions = {
  typeUrl: "/google.protobuf.ServiceOptions",
  is(o: any): o is ServiceOptions {
    return o && (o.$typeUrl === ServiceOptions.typeUrl || typeof o.deprecated === "boolean" && Array.isArray(o.uninterpretedOption) && (!o.uninterpretedOption.length || UninterpretedOption.is(o.uninterpretedOption[0])));
  },
  isSDK(o: any): o is ServiceOptionsSDKType {
    return o && (o.$typeUrl === ServiceOptions.typeUrl || typeof o.deprecated === "boolean" && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || UninterpretedOption.isSDK(o.uninterpreted_option[0])));
  },
  isAmino(o: any): o is ServiceOptionsAmino {
    return o && (o.$typeUrl === ServiceOptions.typeUrl || typeof o.deprecated === "boolean" && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || UninterpretedOption.isAmino(o.uninterpreted_option[0])));
  },
  encode(message: ServiceOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deprecated !== undefined) {
      writer.uint32(264).bool(message.deprecated);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ServiceOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 33:
          message.deprecated = reader.bool();
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ServiceOptions {
    const obj = createBaseServiceOptions();
    if (isSet(object.deprecated)) obj.deprecated = Boolean(object.deprecated);
    if (Array.isArray(object?.uninterpretedOption)) obj.uninterpretedOption = object.uninterpretedOption.map((e: any) => UninterpretedOption.fromJSON(e));
    return obj;
  },
  toJSON(message: ServiceOptions): JsonSafe<ServiceOptions> {
    const obj: any = {};
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map(e => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ServiceOptions>): ServiceOptions {
    const message = createBaseServiceOptions();
    message.deprecated = object.deprecated ?? false;
    message.uninterpretedOption = object.uninterpretedOption?.map(e => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ServiceOptionsSDKType): ServiceOptions {
    return {
      deprecated: object?.deprecated,
      uninterpretedOption: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromSDK(e)) : []
    };
  },
  toSDK(message: ServiceOptions): ServiceOptionsSDKType {
    const obj: any = {};
    obj.deprecated = message.deprecated;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? UninterpretedOption.toSDK(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromAmino(object: ServiceOptionsAmino): ServiceOptions {
    const message = createBaseServiceOptions();
    if (object.deprecated !== undefined && object.deprecated !== null) {
      message.deprecated = object.deprecated;
    }
    message.uninterpretedOption = object.uninterpreted_option?.map(e => UninterpretedOption.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ServiceOptions): ServiceOptionsAmino {
    const obj: any = {};
    obj.deprecated = message.deprecated === false ? undefined : message.deprecated;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? UninterpretedOption.toAmino(e) : undefined);
    } else {
      obj.uninterpreted_option = message.uninterpretedOption;
    }
    return obj;
  },
  fromAminoMsg(object: ServiceOptionsAminoMsg): ServiceOptions {
    return ServiceOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceOptionsProtoMsg): ServiceOptions {
    return ServiceOptions.decode(message.value);
  },
  toProto(message: ServiceOptions): Uint8Array {
    return ServiceOptions.encode(message).finish();
  },
  toProtoMsg(message: ServiceOptions): ServiceOptionsProtoMsg {
    return {
      typeUrl: "/google.protobuf.ServiceOptions",
      value: ServiceOptions.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ServiceOptions.typeUrl, ServiceOptions);
function createBaseMethodOptions(): MethodOptions {
  return {
    deprecated: false,
    idempotencyLevel: 1,
    uninterpretedOption: []
  };
}
export const MethodOptions = {
  typeUrl: "/google.protobuf.MethodOptions",
  is(o: any): o is MethodOptions {
    return o && (o.$typeUrl === MethodOptions.typeUrl || typeof o.deprecated === "boolean" && isSet(o.idempotencyLevel) && Array.isArray(o.uninterpretedOption) && (!o.uninterpretedOption.length || UninterpretedOption.is(o.uninterpretedOption[0])));
  },
  isSDK(o: any): o is MethodOptionsSDKType {
    return o && (o.$typeUrl === MethodOptions.typeUrl || typeof o.deprecated === "boolean" && isSet(o.idempotency_level) && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || UninterpretedOption.isSDK(o.uninterpreted_option[0])));
  },
  isAmino(o: any): o is MethodOptionsAmino {
    return o && (o.$typeUrl === MethodOptions.typeUrl || typeof o.deprecated === "boolean" && isSet(o.idempotency_level) && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || UninterpretedOption.isAmino(o.uninterpreted_option[0])));
  },
  encode(message: MethodOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deprecated !== undefined) {
      writer.uint32(264).bool(message.deprecated);
    }
    if (message.idempotencyLevel !== 1) {
      writer.uint32(272).int32(message.idempotencyLevel);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MethodOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMethodOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 33:
          message.deprecated = reader.bool();
          break;
        case 34:
          message.idempotencyLevel = (reader.int32() as any);
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MethodOptions {
    const obj = createBaseMethodOptions();
    if (isSet(object.deprecated)) obj.deprecated = Boolean(object.deprecated);
    if (isSet(object.idempotencyLevel)) obj.idempotencyLevel = methodOptions_IdempotencyLevelFromJSON(object.idempotencyLevel);
    if (Array.isArray(object?.uninterpretedOption)) obj.uninterpretedOption = object.uninterpretedOption.map((e: any) => UninterpretedOption.fromJSON(e));
    return obj;
  },
  toJSON(message: MethodOptions): JsonSafe<MethodOptions> {
    const obj: any = {};
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    message.idempotencyLevel !== undefined && (obj.idempotencyLevel = methodOptions_IdempotencyLevelToJSON(message.idempotencyLevel));
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map(e => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MethodOptions>): MethodOptions {
    const message = createBaseMethodOptions();
    message.deprecated = object.deprecated ?? false;
    message.idempotencyLevel = object.idempotencyLevel ?? 1;
    message.uninterpretedOption = object.uninterpretedOption?.map(e => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MethodOptionsSDKType): MethodOptions {
    return {
      deprecated: object?.deprecated,
      idempotencyLevel: isSet(object.idempotency_level) ? methodOptions_IdempotencyLevelFromJSON(object.idempotency_level) : -1,
      uninterpretedOption: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromSDK(e)) : []
    };
  },
  toSDK(message: MethodOptions): MethodOptionsSDKType {
    const obj: any = {};
    obj.deprecated = message.deprecated;
    message.idempotencyLevel !== undefined && (obj.idempotency_level = methodOptions_IdempotencyLevelToJSON(message.idempotencyLevel));
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? UninterpretedOption.toSDK(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromAmino(object: MethodOptionsAmino): MethodOptions {
    const message = createBaseMethodOptions();
    if (object.deprecated !== undefined && object.deprecated !== null) {
      message.deprecated = object.deprecated;
    }
    if (object.idempotency_level !== undefined && object.idempotency_level !== null) {
      message.idempotencyLevel = object.idempotency_level;
    }
    message.uninterpretedOption = object.uninterpreted_option?.map(e => UninterpretedOption.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MethodOptions): MethodOptionsAmino {
    const obj: any = {};
    obj.deprecated = message.deprecated === false ? undefined : message.deprecated;
    obj.idempotency_level = message.idempotencyLevel === 1 ? undefined : message.idempotencyLevel;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? UninterpretedOption.toAmino(e) : undefined);
    } else {
      obj.uninterpreted_option = message.uninterpretedOption;
    }
    return obj;
  },
  fromAminoMsg(object: MethodOptionsAminoMsg): MethodOptions {
    return MethodOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: MethodOptionsProtoMsg): MethodOptions {
    return MethodOptions.decode(message.value);
  },
  toProto(message: MethodOptions): Uint8Array {
    return MethodOptions.encode(message).finish();
  },
  toProtoMsg(message: MethodOptions): MethodOptionsProtoMsg {
    return {
      typeUrl: "/google.protobuf.MethodOptions",
      value: MethodOptions.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MethodOptions.typeUrl, MethodOptions);
function createBaseUninterpretedOption(): UninterpretedOption {
  return {
    name: [],
    identifierValue: "",
    positiveIntValue: BigInt(0),
    negativeIntValue: BigInt(0),
    doubleValue: 0,
    stringValue: new Uint8Array(),
    aggregateValue: ""
  };
}
export const UninterpretedOption = {
  typeUrl: "/google.protobuf.UninterpretedOption",
  is(o: any): o is UninterpretedOption {
    return o && (o.$typeUrl === UninterpretedOption.typeUrl || Array.isArray(o.name) && (!o.name.length || UninterpretedOption_NamePart.is(o.name[0])) && typeof o.identifierValue === "string" && typeof o.positiveIntValue === "bigint" && typeof o.negativeIntValue === "bigint" && typeof o.doubleValue === "number" && (o.stringValue instanceof Uint8Array || typeof o.stringValue === "string") && typeof o.aggregateValue === "string");
  },
  isSDK(o: any): o is UninterpretedOptionSDKType {
    return o && (o.$typeUrl === UninterpretedOption.typeUrl || Array.isArray(o.name) && (!o.name.length || UninterpretedOption_NamePart.isSDK(o.name[0])) && typeof o.identifier_value === "string" && typeof o.positive_int_value === "bigint" && typeof o.negative_int_value === "bigint" && typeof o.double_value === "number" && (o.string_value instanceof Uint8Array || typeof o.string_value === "string") && typeof o.aggregate_value === "string");
  },
  isAmino(o: any): o is UninterpretedOptionAmino {
    return o && (o.$typeUrl === UninterpretedOption.typeUrl || Array.isArray(o.name) && (!o.name.length || UninterpretedOption_NamePart.isAmino(o.name[0])) && typeof o.identifier_value === "string" && typeof o.positive_int_value === "bigint" && typeof o.negative_int_value === "bigint" && typeof o.double_value === "number" && (o.string_value instanceof Uint8Array || typeof o.string_value === "string") && typeof o.aggregate_value === "string");
  },
  encode(message: UninterpretedOption, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.name) {
      UninterpretedOption_NamePart.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.identifierValue !== undefined) {
      writer.uint32(26).string(message.identifierValue);
    }
    if (message.positiveIntValue !== undefined) {
      writer.uint32(32).uint64(message.positiveIntValue);
    }
    if (message.negativeIntValue !== undefined) {
      writer.uint32(40).int64(message.negativeIntValue);
    }
    if (message.doubleValue !== undefined) {
      writer.uint32(49).double(message.doubleValue);
    }
    if (message.stringValue.length !== 0) {
      writer.uint32(58).bytes(message.stringValue);
    }
    if (message.aggregateValue !== undefined) {
      writer.uint32(66).string(message.aggregateValue);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UninterpretedOption {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUninterpretedOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.name.push(UninterpretedOption_NamePart.decode(reader, reader.uint32()));
          break;
        case 3:
          message.identifierValue = reader.string();
          break;
        case 4:
          message.positiveIntValue = reader.uint64();
          break;
        case 5:
          message.negativeIntValue = reader.int64();
          break;
        case 6:
          message.doubleValue = reader.double();
          break;
        case 7:
          message.stringValue = reader.bytes();
          break;
        case 8:
          message.aggregateValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UninterpretedOption {
    const obj = createBaseUninterpretedOption();
    if (Array.isArray(object?.name)) obj.name = object.name.map((e: any) => UninterpretedOption_NamePart.fromJSON(e));
    if (isSet(object.identifierValue)) obj.identifierValue = String(object.identifierValue);
    if (isSet(object.positiveIntValue)) obj.positiveIntValue = BigInt(object.positiveIntValue.toString());
    if (isSet(object.negativeIntValue)) obj.negativeIntValue = BigInt(object.negativeIntValue.toString());
    if (isSet(object.doubleValue)) obj.doubleValue = Number(object.doubleValue);
    if (isSet(object.stringValue)) obj.stringValue = bytesFromBase64(object.stringValue);
    if (isSet(object.aggregateValue)) obj.aggregateValue = String(object.aggregateValue);
    return obj;
  },
  toJSON(message: UninterpretedOption): JsonSafe<UninterpretedOption> {
    const obj: any = {};
    if (message.name) {
      obj.name = message.name.map(e => e ? UninterpretedOption_NamePart.toJSON(e) : undefined);
    } else {
      obj.name = [];
    }
    message.identifierValue !== undefined && (obj.identifierValue = message.identifierValue);
    message.positiveIntValue !== undefined && (obj.positiveIntValue = (message.positiveIntValue || BigInt(0)).toString());
    message.negativeIntValue !== undefined && (obj.negativeIntValue = (message.negativeIntValue || BigInt(0)).toString());
    message.doubleValue !== undefined && (obj.doubleValue = message.doubleValue);
    message.stringValue !== undefined && (obj.stringValue = base64FromBytes(message.stringValue !== undefined ? message.stringValue : new Uint8Array()));
    message.aggregateValue !== undefined && (obj.aggregateValue = message.aggregateValue);
    return obj;
  },
  fromPartial(object: DeepPartial<UninterpretedOption>): UninterpretedOption {
    const message = createBaseUninterpretedOption();
    message.name = object.name?.map(e => UninterpretedOption_NamePart.fromPartial(e)) || [];
    message.identifierValue = object.identifierValue ?? "";
    if (object.positiveIntValue !== undefined && object.positiveIntValue !== null) {
      message.positiveIntValue = BigInt(object.positiveIntValue.toString());
    }
    if (object.negativeIntValue !== undefined && object.negativeIntValue !== null) {
      message.negativeIntValue = BigInt(object.negativeIntValue.toString());
    }
    message.doubleValue = object.doubleValue ?? 0;
    message.stringValue = object.stringValue ?? new Uint8Array();
    message.aggregateValue = object.aggregateValue ?? "";
    return message;
  },
  fromSDK(object: UninterpretedOptionSDKType): UninterpretedOption {
    return {
      name: Array.isArray(object?.name) ? object.name.map((e: any) => UninterpretedOption_NamePart.fromSDK(e)) : [],
      identifierValue: object?.identifier_value,
      positiveIntValue: object?.positive_int_value,
      negativeIntValue: object?.negative_int_value,
      doubleValue: object?.double_value,
      stringValue: object?.string_value,
      aggregateValue: object?.aggregate_value
    };
  },
  toSDK(message: UninterpretedOption): UninterpretedOptionSDKType {
    const obj: any = {};
    if (message.name) {
      obj.name = message.name.map(e => e ? UninterpretedOption_NamePart.toSDK(e) : undefined);
    } else {
      obj.name = [];
    }
    obj.identifier_value = message.identifierValue;
    obj.positive_int_value = message.positiveIntValue;
    obj.negative_int_value = message.negativeIntValue;
    obj.double_value = message.doubleValue;
    obj.string_value = message.stringValue;
    obj.aggregate_value = message.aggregateValue;
    return obj;
  },
  fromAmino(object: UninterpretedOptionAmino): UninterpretedOption {
    const message = createBaseUninterpretedOption();
    message.name = object.name?.map(e => UninterpretedOption_NamePart.fromAmino(e)) || [];
    if (object.identifier_value !== undefined && object.identifier_value !== null) {
      message.identifierValue = object.identifier_value;
    }
    if (object.positive_int_value !== undefined && object.positive_int_value !== null) {
      message.positiveIntValue = BigInt(object.positive_int_value);
    }
    if (object.negative_int_value !== undefined && object.negative_int_value !== null) {
      message.negativeIntValue = BigInt(object.negative_int_value);
    }
    if (object.double_value !== undefined && object.double_value !== null) {
      message.doubleValue = object.double_value;
    }
    if (object.string_value !== undefined && object.string_value !== null) {
      message.stringValue = bytesFromBase64(object.string_value);
    }
    if (object.aggregate_value !== undefined && object.aggregate_value !== null) {
      message.aggregateValue = object.aggregate_value;
    }
    return message;
  },
  toAmino(message: UninterpretedOption): UninterpretedOptionAmino {
    const obj: any = {};
    if (message.name) {
      obj.name = message.name.map(e => e ? UninterpretedOption_NamePart.toAmino(e) : undefined);
    } else {
      obj.name = message.name;
    }
    obj.identifier_value = message.identifierValue === "" ? undefined : message.identifierValue;
    obj.positive_int_value = message.positiveIntValue !== BigInt(0) ? message.positiveIntValue.toString() : undefined;
    obj.negative_int_value = message.negativeIntValue !== BigInt(0) ? message.negativeIntValue.toString() : undefined;
    obj.double_value = message.doubleValue === 0 ? undefined : message.doubleValue;
    obj.string_value = message.stringValue ? base64FromBytes(message.stringValue) : undefined;
    obj.aggregate_value = message.aggregateValue === "" ? undefined : message.aggregateValue;
    return obj;
  },
  fromAminoMsg(object: UninterpretedOptionAminoMsg): UninterpretedOption {
    return UninterpretedOption.fromAmino(object.value);
  },
  fromProtoMsg(message: UninterpretedOptionProtoMsg): UninterpretedOption {
    return UninterpretedOption.decode(message.value);
  },
  toProto(message: UninterpretedOption): Uint8Array {
    return UninterpretedOption.encode(message).finish();
  },
  toProtoMsg(message: UninterpretedOption): UninterpretedOptionProtoMsg {
    return {
      typeUrl: "/google.protobuf.UninterpretedOption",
      value: UninterpretedOption.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UninterpretedOption.typeUrl, UninterpretedOption);
function createBaseUninterpretedOption_NamePart(): UninterpretedOption_NamePart {
  return {
    namePart: "",
    isExtension: false
  };
}
export const UninterpretedOption_NamePart = {
  typeUrl: "/google.protobuf.NamePart",
  is(o: any): o is UninterpretedOption_NamePart {
    return o && (o.$typeUrl === UninterpretedOption_NamePart.typeUrl || typeof o.namePart === "string" && typeof o.isExtension === "boolean");
  },
  isSDK(o: any): o is UninterpretedOption_NamePartSDKType {
    return o && (o.$typeUrl === UninterpretedOption_NamePart.typeUrl || typeof o.name_part === "string" && typeof o.is_extension === "boolean");
  },
  isAmino(o: any): o is UninterpretedOption_NamePartAmino {
    return o && (o.$typeUrl === UninterpretedOption_NamePart.typeUrl || typeof o.name_part === "string" && typeof o.is_extension === "boolean");
  },
  encode(message: UninterpretedOption_NamePart, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.namePart !== undefined) {
      writer.uint32(10).string(message.namePart);
    }
    if (message.isExtension !== undefined) {
      writer.uint32(16).bool(message.isExtension);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UninterpretedOption_NamePart {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUninterpretedOption_NamePart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.namePart = reader.string();
          break;
        case 2:
          message.isExtension = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UninterpretedOption_NamePart {
    const obj = createBaseUninterpretedOption_NamePart();
    if (isSet(object.namePart)) obj.namePart = String(object.namePart);
    if (isSet(object.isExtension)) obj.isExtension = Boolean(object.isExtension);
    return obj;
  },
  toJSON(message: UninterpretedOption_NamePart): JsonSafe<UninterpretedOption_NamePart> {
    const obj: any = {};
    message.namePart !== undefined && (obj.namePart = message.namePart);
    message.isExtension !== undefined && (obj.isExtension = message.isExtension);
    return obj;
  },
  fromPartial(object: DeepPartial<UninterpretedOption_NamePart>): UninterpretedOption_NamePart {
    const message = createBaseUninterpretedOption_NamePart();
    message.namePart = object.namePart ?? "";
    message.isExtension = object.isExtension ?? false;
    return message;
  },
  fromSDK(object: UninterpretedOption_NamePartSDKType): UninterpretedOption_NamePart {
    return {
      namePart: object?.name_part,
      isExtension: object?.is_extension
    };
  },
  toSDK(message: UninterpretedOption_NamePart): UninterpretedOption_NamePartSDKType {
    const obj: any = {};
    obj.name_part = message.namePart;
    obj.is_extension = message.isExtension;
    return obj;
  },
  fromAmino(object: UninterpretedOption_NamePartAmino): UninterpretedOption_NamePart {
    const message = createBaseUninterpretedOption_NamePart();
    if (object.name_part !== undefined && object.name_part !== null) {
      message.namePart = object.name_part;
    }
    if (object.is_extension !== undefined && object.is_extension !== null) {
      message.isExtension = object.is_extension;
    }
    return message;
  },
  toAmino(message: UninterpretedOption_NamePart): UninterpretedOption_NamePartAmino {
    const obj: any = {};
    obj.name_part = message.namePart === "" ? undefined : message.namePart;
    obj.is_extension = message.isExtension === false ? undefined : message.isExtension;
    return obj;
  },
  fromAminoMsg(object: UninterpretedOption_NamePartAminoMsg): UninterpretedOption_NamePart {
    return UninterpretedOption_NamePart.fromAmino(object.value);
  },
  fromProtoMsg(message: UninterpretedOption_NamePartProtoMsg): UninterpretedOption_NamePart {
    return UninterpretedOption_NamePart.decode(message.value);
  },
  toProto(message: UninterpretedOption_NamePart): Uint8Array {
    return UninterpretedOption_NamePart.encode(message).finish();
  },
  toProtoMsg(message: UninterpretedOption_NamePart): UninterpretedOption_NamePartProtoMsg {
    return {
      typeUrl: "/google.protobuf.NamePart",
      value: UninterpretedOption_NamePart.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UninterpretedOption_NamePart.typeUrl, UninterpretedOption_NamePart);
function createBaseSourceCodeInfo(): SourceCodeInfo {
  return {
    location: []
  };
}
export const SourceCodeInfo = {
  typeUrl: "/google.protobuf.SourceCodeInfo",
  is(o: any): o is SourceCodeInfo {
    return o && (o.$typeUrl === SourceCodeInfo.typeUrl || Array.isArray(o.location) && (!o.location.length || SourceCodeInfo_Location.is(o.location[0])));
  },
  isSDK(o: any): o is SourceCodeInfoSDKType {
    return o && (o.$typeUrl === SourceCodeInfo.typeUrl || Array.isArray(o.location) && (!o.location.length || SourceCodeInfo_Location.isSDK(o.location[0])));
  },
  isAmino(o: any): o is SourceCodeInfoAmino {
    return o && (o.$typeUrl === SourceCodeInfo.typeUrl || Array.isArray(o.location) && (!o.location.length || SourceCodeInfo_Location.isAmino(o.location[0])));
  },
  encode(message: SourceCodeInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.location) {
      SourceCodeInfo_Location.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SourceCodeInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceCodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.location.push(SourceCodeInfo_Location.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SourceCodeInfo {
    const obj = createBaseSourceCodeInfo();
    if (Array.isArray(object?.location)) obj.location = object.location.map((e: any) => SourceCodeInfo_Location.fromJSON(e));
    return obj;
  },
  toJSON(message: SourceCodeInfo): JsonSafe<SourceCodeInfo> {
    const obj: any = {};
    if (message.location) {
      obj.location = message.location.map(e => e ? SourceCodeInfo_Location.toJSON(e) : undefined);
    } else {
      obj.location = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<SourceCodeInfo>): SourceCodeInfo {
    const message = createBaseSourceCodeInfo();
    message.location = object.location?.map(e => SourceCodeInfo_Location.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: SourceCodeInfoSDKType): SourceCodeInfo {
    return {
      location: Array.isArray(object?.location) ? object.location.map((e: any) => SourceCodeInfo_Location.fromSDK(e)) : []
    };
  },
  toSDK(message: SourceCodeInfo): SourceCodeInfoSDKType {
    const obj: any = {};
    if (message.location) {
      obj.location = message.location.map(e => e ? SourceCodeInfo_Location.toSDK(e) : undefined);
    } else {
      obj.location = [];
    }
    return obj;
  },
  fromAmino(object: SourceCodeInfoAmino): SourceCodeInfo {
    const message = createBaseSourceCodeInfo();
    message.location = object.location?.map(e => SourceCodeInfo_Location.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SourceCodeInfo): SourceCodeInfoAmino {
    const obj: any = {};
    if (message.location) {
      obj.location = message.location.map(e => e ? SourceCodeInfo_Location.toAmino(e) : undefined);
    } else {
      obj.location = message.location;
    }
    return obj;
  },
  fromAminoMsg(object: SourceCodeInfoAminoMsg): SourceCodeInfo {
    return SourceCodeInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: SourceCodeInfoProtoMsg): SourceCodeInfo {
    return SourceCodeInfo.decode(message.value);
  },
  toProto(message: SourceCodeInfo): Uint8Array {
    return SourceCodeInfo.encode(message).finish();
  },
  toProtoMsg(message: SourceCodeInfo): SourceCodeInfoProtoMsg {
    return {
      typeUrl: "/google.protobuf.SourceCodeInfo",
      value: SourceCodeInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SourceCodeInfo.typeUrl, SourceCodeInfo);
function createBaseSourceCodeInfo_Location(): SourceCodeInfo_Location {
  return {
    path: [],
    span: [],
    leadingComments: "",
    trailingComments: "",
    leadingDetachedComments: []
  };
}
export const SourceCodeInfo_Location = {
  typeUrl: "/google.protobuf.Location",
  is(o: any): o is SourceCodeInfo_Location {
    return o && (o.$typeUrl === SourceCodeInfo_Location.typeUrl || Array.isArray(o.path) && (!o.path.length || typeof o.path[0] === "number") && Array.isArray(o.span) && (!o.span.length || typeof o.span[0] === "number") && typeof o.leadingComments === "string" && typeof o.trailingComments === "string" && Array.isArray(o.leadingDetachedComments) && (!o.leadingDetachedComments.length || typeof o.leadingDetachedComments[0] === "string"));
  },
  isSDK(o: any): o is SourceCodeInfo_LocationSDKType {
    return o && (o.$typeUrl === SourceCodeInfo_Location.typeUrl || Array.isArray(o.path) && (!o.path.length || typeof o.path[0] === "number") && Array.isArray(o.span) && (!o.span.length || typeof o.span[0] === "number") && typeof o.leading_comments === "string" && typeof o.trailing_comments === "string" && Array.isArray(o.leading_detached_comments) && (!o.leading_detached_comments.length || typeof o.leading_detached_comments[0] === "string"));
  },
  isAmino(o: any): o is SourceCodeInfo_LocationAmino {
    return o && (o.$typeUrl === SourceCodeInfo_Location.typeUrl || Array.isArray(o.path) && (!o.path.length || typeof o.path[0] === "number") && Array.isArray(o.span) && (!o.span.length || typeof o.span[0] === "number") && typeof o.leading_comments === "string" && typeof o.trailing_comments === "string" && Array.isArray(o.leading_detached_comments) && (!o.leading_detached_comments.length || typeof o.leading_detached_comments[0] === "string"));
  },
  encode(message: SourceCodeInfo_Location, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.path) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.span) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.leadingComments !== undefined) {
      writer.uint32(26).string(message.leadingComments);
    }
    if (message.trailingComments !== undefined) {
      writer.uint32(34).string(message.trailingComments);
    }
    for (const v of message.leadingDetachedComments) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SourceCodeInfo_Location {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceCodeInfo_Location();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.path.push(reader.int32());
            }
          } else {
            message.path.push(reader.int32());
          }
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.span.push(reader.int32());
            }
          } else {
            message.span.push(reader.int32());
          }
          break;
        case 3:
          message.leadingComments = reader.string();
          break;
        case 4:
          message.trailingComments = reader.string();
          break;
        case 6:
          message.leadingDetachedComments.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SourceCodeInfo_Location {
    const obj = createBaseSourceCodeInfo_Location();
    if (Array.isArray(object?.path)) obj.path = object.path.map((e: any) => Number(e));
    if (Array.isArray(object?.span)) obj.span = object.span.map((e: any) => Number(e));
    if (isSet(object.leadingComments)) obj.leadingComments = String(object.leadingComments);
    if (isSet(object.trailingComments)) obj.trailingComments = String(object.trailingComments);
    if (Array.isArray(object?.leadingDetachedComments)) obj.leadingDetachedComments = object.leadingDetachedComments.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: SourceCodeInfo_Location): JsonSafe<SourceCodeInfo_Location> {
    const obj: any = {};
    if (message.path) {
      obj.path = message.path.map(e => Math.round(e));
    } else {
      obj.path = [];
    }
    if (message.span) {
      obj.span = message.span.map(e => Math.round(e));
    } else {
      obj.span = [];
    }
    message.leadingComments !== undefined && (obj.leadingComments = message.leadingComments);
    message.trailingComments !== undefined && (obj.trailingComments = message.trailingComments);
    if (message.leadingDetachedComments) {
      obj.leadingDetachedComments = message.leadingDetachedComments.map(e => e);
    } else {
      obj.leadingDetachedComments = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<SourceCodeInfo_Location>): SourceCodeInfo_Location {
    const message = createBaseSourceCodeInfo_Location();
    message.path = object.path?.map(e => e) || [];
    message.span = object.span?.map(e => e) || [];
    message.leadingComments = object.leadingComments ?? "";
    message.trailingComments = object.trailingComments ?? "";
    message.leadingDetachedComments = object.leadingDetachedComments?.map(e => e) || [];
    return message;
  },
  fromSDK(object: SourceCodeInfo_LocationSDKType): SourceCodeInfo_Location {
    return {
      path: Array.isArray(object?.path) ? object.path.map((e: any) => e) : [],
      span: Array.isArray(object?.span) ? object.span.map((e: any) => e) : [],
      leadingComments: object?.leading_comments,
      trailingComments: object?.trailing_comments,
      leadingDetachedComments: Array.isArray(object?.leading_detached_comments) ? object.leading_detached_comments.map((e: any) => e) : []
    };
  },
  toSDK(message: SourceCodeInfo_Location): SourceCodeInfo_LocationSDKType {
    const obj: any = {};
    if (message.path) {
      obj.path = message.path.map(e => e);
    } else {
      obj.path = [];
    }
    if (message.span) {
      obj.span = message.span.map(e => e);
    } else {
      obj.span = [];
    }
    obj.leading_comments = message.leadingComments;
    obj.trailing_comments = message.trailingComments;
    if (message.leadingDetachedComments) {
      obj.leading_detached_comments = message.leadingDetachedComments.map(e => e);
    } else {
      obj.leading_detached_comments = [];
    }
    return obj;
  },
  fromAmino(object: SourceCodeInfo_LocationAmino): SourceCodeInfo_Location {
    const message = createBaseSourceCodeInfo_Location();
    message.path = object.path?.map(e => e) || [];
    message.span = object.span?.map(e => e) || [];
    if (object.leading_comments !== undefined && object.leading_comments !== null) {
      message.leadingComments = object.leading_comments;
    }
    if (object.trailing_comments !== undefined && object.trailing_comments !== null) {
      message.trailingComments = object.trailing_comments;
    }
    message.leadingDetachedComments = object.leading_detached_comments?.map(e => e) || [];
    return message;
  },
  toAmino(message: SourceCodeInfo_Location): SourceCodeInfo_LocationAmino {
    const obj: any = {};
    if (message.path) {
      obj.path = message.path.map(e => e);
    } else {
      obj.path = message.path;
    }
    if (message.span) {
      obj.span = message.span.map(e => e);
    } else {
      obj.span = message.span;
    }
    obj.leading_comments = message.leadingComments === "" ? undefined : message.leadingComments;
    obj.trailing_comments = message.trailingComments === "" ? undefined : message.trailingComments;
    if (message.leadingDetachedComments) {
      obj.leading_detached_comments = message.leadingDetachedComments.map(e => e);
    } else {
      obj.leading_detached_comments = message.leadingDetachedComments;
    }
    return obj;
  },
  fromAminoMsg(object: SourceCodeInfo_LocationAminoMsg): SourceCodeInfo_Location {
    return SourceCodeInfo_Location.fromAmino(object.value);
  },
  fromProtoMsg(message: SourceCodeInfo_LocationProtoMsg): SourceCodeInfo_Location {
    return SourceCodeInfo_Location.decode(message.value);
  },
  toProto(message: SourceCodeInfo_Location): Uint8Array {
    return SourceCodeInfo_Location.encode(message).finish();
  },
  toProtoMsg(message: SourceCodeInfo_Location): SourceCodeInfo_LocationProtoMsg {
    return {
      typeUrl: "/google.protobuf.Location",
      value: SourceCodeInfo_Location.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SourceCodeInfo_Location.typeUrl, SourceCodeInfo_Location);
function createBaseGeneratedCodeInfo(): GeneratedCodeInfo {
  return {
    annotation: []
  };
}
export const GeneratedCodeInfo = {
  typeUrl: "/google.protobuf.GeneratedCodeInfo",
  is(o: any): o is GeneratedCodeInfo {
    return o && (o.$typeUrl === GeneratedCodeInfo.typeUrl || Array.isArray(o.annotation) && (!o.annotation.length || GeneratedCodeInfo_Annotation.is(o.annotation[0])));
  },
  isSDK(o: any): o is GeneratedCodeInfoSDKType {
    return o && (o.$typeUrl === GeneratedCodeInfo.typeUrl || Array.isArray(o.annotation) && (!o.annotation.length || GeneratedCodeInfo_Annotation.isSDK(o.annotation[0])));
  },
  isAmino(o: any): o is GeneratedCodeInfoAmino {
    return o && (o.$typeUrl === GeneratedCodeInfo.typeUrl || Array.isArray(o.annotation) && (!o.annotation.length || GeneratedCodeInfo_Annotation.isAmino(o.annotation[0])));
  },
  encode(message: GeneratedCodeInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.annotation) {
      GeneratedCodeInfo_Annotation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GeneratedCodeInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeneratedCodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.annotation.push(GeneratedCodeInfo_Annotation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GeneratedCodeInfo {
    const obj = createBaseGeneratedCodeInfo();
    if (Array.isArray(object?.annotation)) obj.annotation = object.annotation.map((e: any) => GeneratedCodeInfo_Annotation.fromJSON(e));
    return obj;
  },
  toJSON(message: GeneratedCodeInfo): JsonSafe<GeneratedCodeInfo> {
    const obj: any = {};
    if (message.annotation) {
      obj.annotation = message.annotation.map(e => e ? GeneratedCodeInfo_Annotation.toJSON(e) : undefined);
    } else {
      obj.annotation = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GeneratedCodeInfo>): GeneratedCodeInfo {
    const message = createBaseGeneratedCodeInfo();
    message.annotation = object.annotation?.map(e => GeneratedCodeInfo_Annotation.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GeneratedCodeInfoSDKType): GeneratedCodeInfo {
    return {
      annotation: Array.isArray(object?.annotation) ? object.annotation.map((e: any) => GeneratedCodeInfo_Annotation.fromSDK(e)) : []
    };
  },
  toSDK(message: GeneratedCodeInfo): GeneratedCodeInfoSDKType {
    const obj: any = {};
    if (message.annotation) {
      obj.annotation = message.annotation.map(e => e ? GeneratedCodeInfo_Annotation.toSDK(e) : undefined);
    } else {
      obj.annotation = [];
    }
    return obj;
  },
  fromAmino(object: GeneratedCodeInfoAmino): GeneratedCodeInfo {
    const message = createBaseGeneratedCodeInfo();
    message.annotation = object.annotation?.map(e => GeneratedCodeInfo_Annotation.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GeneratedCodeInfo): GeneratedCodeInfoAmino {
    const obj: any = {};
    if (message.annotation) {
      obj.annotation = message.annotation.map(e => e ? GeneratedCodeInfo_Annotation.toAmino(e) : undefined);
    } else {
      obj.annotation = message.annotation;
    }
    return obj;
  },
  fromAminoMsg(object: GeneratedCodeInfoAminoMsg): GeneratedCodeInfo {
    return GeneratedCodeInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: GeneratedCodeInfoProtoMsg): GeneratedCodeInfo {
    return GeneratedCodeInfo.decode(message.value);
  },
  toProto(message: GeneratedCodeInfo): Uint8Array {
    return GeneratedCodeInfo.encode(message).finish();
  },
  toProtoMsg(message: GeneratedCodeInfo): GeneratedCodeInfoProtoMsg {
    return {
      typeUrl: "/google.protobuf.GeneratedCodeInfo",
      value: GeneratedCodeInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GeneratedCodeInfo.typeUrl, GeneratedCodeInfo);
function createBaseGeneratedCodeInfo_Annotation(): GeneratedCodeInfo_Annotation {
  return {
    path: [],
    sourceFile: "",
    begin: 0,
    end: 0
  };
}
export const GeneratedCodeInfo_Annotation = {
  typeUrl: "/google.protobuf.Annotation",
  is(o: any): o is GeneratedCodeInfo_Annotation {
    return o && (o.$typeUrl === GeneratedCodeInfo_Annotation.typeUrl || Array.isArray(o.path) && (!o.path.length || typeof o.path[0] === "number") && typeof o.sourceFile === "string" && typeof o.begin === "number" && typeof o.end === "number");
  },
  isSDK(o: any): o is GeneratedCodeInfo_AnnotationSDKType {
    return o && (o.$typeUrl === GeneratedCodeInfo_Annotation.typeUrl || Array.isArray(o.path) && (!o.path.length || typeof o.path[0] === "number") && typeof o.source_file === "string" && typeof o.begin === "number" && typeof o.end === "number");
  },
  isAmino(o: any): o is GeneratedCodeInfo_AnnotationAmino {
    return o && (o.$typeUrl === GeneratedCodeInfo_Annotation.typeUrl || Array.isArray(o.path) && (!o.path.length || typeof o.path[0] === "number") && typeof o.source_file === "string" && typeof o.begin === "number" && typeof o.end === "number");
  },
  encode(message: GeneratedCodeInfo_Annotation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.path) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.sourceFile !== undefined) {
      writer.uint32(18).string(message.sourceFile);
    }
    if (message.begin !== undefined) {
      writer.uint32(24).int32(message.begin);
    }
    if (message.end !== undefined) {
      writer.uint32(32).int32(message.end);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GeneratedCodeInfo_Annotation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeneratedCodeInfo_Annotation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.path.push(reader.int32());
            }
          } else {
            message.path.push(reader.int32());
          }
          break;
        case 2:
          message.sourceFile = reader.string();
          break;
        case 3:
          message.begin = reader.int32();
          break;
        case 4:
          message.end = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GeneratedCodeInfo_Annotation {
    const obj = createBaseGeneratedCodeInfo_Annotation();
    if (Array.isArray(object?.path)) obj.path = object.path.map((e: any) => Number(e));
    if (isSet(object.sourceFile)) obj.sourceFile = String(object.sourceFile);
    if (isSet(object.begin)) obj.begin = Number(object.begin);
    if (isSet(object.end)) obj.end = Number(object.end);
    return obj;
  },
  toJSON(message: GeneratedCodeInfo_Annotation): JsonSafe<GeneratedCodeInfo_Annotation> {
    const obj: any = {};
    if (message.path) {
      obj.path = message.path.map(e => Math.round(e));
    } else {
      obj.path = [];
    }
    message.sourceFile !== undefined && (obj.sourceFile = message.sourceFile);
    message.begin !== undefined && (obj.begin = Math.round(message.begin));
    message.end !== undefined && (obj.end = Math.round(message.end));
    return obj;
  },
  fromPartial(object: DeepPartial<GeneratedCodeInfo_Annotation>): GeneratedCodeInfo_Annotation {
    const message = createBaseGeneratedCodeInfo_Annotation();
    message.path = object.path?.map(e => e) || [];
    message.sourceFile = object.sourceFile ?? "";
    message.begin = object.begin ?? 0;
    message.end = object.end ?? 0;
    return message;
  },
  fromSDK(object: GeneratedCodeInfo_AnnotationSDKType): GeneratedCodeInfo_Annotation {
    return {
      path: Array.isArray(object?.path) ? object.path.map((e: any) => e) : [],
      sourceFile: object?.source_file,
      begin: object?.begin,
      end: object?.end
    };
  },
  toSDK(message: GeneratedCodeInfo_Annotation): GeneratedCodeInfo_AnnotationSDKType {
    const obj: any = {};
    if (message.path) {
      obj.path = message.path.map(e => e);
    } else {
      obj.path = [];
    }
    obj.source_file = message.sourceFile;
    obj.begin = message.begin;
    obj.end = message.end;
    return obj;
  },
  fromAmino(object: GeneratedCodeInfo_AnnotationAmino): GeneratedCodeInfo_Annotation {
    const message = createBaseGeneratedCodeInfo_Annotation();
    message.path = object.path?.map(e => e) || [];
    if (object.source_file !== undefined && object.source_file !== null) {
      message.sourceFile = object.source_file;
    }
    if (object.begin !== undefined && object.begin !== null) {
      message.begin = object.begin;
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = object.end;
    }
    return message;
  },
  toAmino(message: GeneratedCodeInfo_Annotation): GeneratedCodeInfo_AnnotationAmino {
    const obj: any = {};
    if (message.path) {
      obj.path = message.path.map(e => e);
    } else {
      obj.path = message.path;
    }
    obj.source_file = message.sourceFile === "" ? undefined : message.sourceFile;
    obj.begin = message.begin === 0 ? undefined : message.begin;
    obj.end = message.end === 0 ? undefined : message.end;
    return obj;
  },
  fromAminoMsg(object: GeneratedCodeInfo_AnnotationAminoMsg): GeneratedCodeInfo_Annotation {
    return GeneratedCodeInfo_Annotation.fromAmino(object.value);
  },
  fromProtoMsg(message: GeneratedCodeInfo_AnnotationProtoMsg): GeneratedCodeInfo_Annotation {
    return GeneratedCodeInfo_Annotation.decode(message.value);
  },
  toProto(message: GeneratedCodeInfo_Annotation): Uint8Array {
    return GeneratedCodeInfo_Annotation.encode(message).finish();
  },
  toProtoMsg(message: GeneratedCodeInfo_Annotation): GeneratedCodeInfo_AnnotationProtoMsg {
    return {
      typeUrl: "/google.protobuf.Annotation",
      value: GeneratedCodeInfo_Annotation.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GeneratedCodeInfo_Annotation.typeUrl, GeneratedCodeInfo_Annotation);