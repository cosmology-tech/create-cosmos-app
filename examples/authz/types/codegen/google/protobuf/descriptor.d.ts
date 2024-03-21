import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
export declare enum FieldDescriptorProto_Type {
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
    UNRECOGNIZED = -1
}
export declare const FieldDescriptorProto_TypeSDKType: typeof FieldDescriptorProto_Type;
export declare const FieldDescriptorProto_TypeAmino: typeof FieldDescriptorProto_Type;
export declare function fieldDescriptorProto_TypeFromJSON(object: any): FieldDescriptorProto_Type;
export declare function fieldDescriptorProto_TypeToJSON(object: FieldDescriptorProto_Type): string;
export declare enum FieldDescriptorProto_Label {
    /** LABEL_OPTIONAL - 0 is reserved for errors */
    LABEL_OPTIONAL = 1,
    LABEL_REQUIRED = 2,
    LABEL_REPEATED = 3,
    UNRECOGNIZED = -1
}
export declare const FieldDescriptorProto_LabelSDKType: typeof FieldDescriptorProto_Label;
export declare const FieldDescriptorProto_LabelAmino: typeof FieldDescriptorProto_Label;
export declare function fieldDescriptorProto_LabelFromJSON(object: any): FieldDescriptorProto_Label;
export declare function fieldDescriptorProto_LabelToJSON(object: FieldDescriptorProto_Label): string;
/** Generated classes can be optimized for speed or code size. */
export declare enum FileOptions_OptimizeMode {
    /**
     * SPEED - Generate complete code for parsing, serialization,
     * etc.
     */
    SPEED = 1,
    /** CODE_SIZE - Use ReflectionOps to implement these methods. */
    CODE_SIZE = 2,
    /** LITE_RUNTIME - Generate code using MessageLite and the lite runtime. */
    LITE_RUNTIME = 3,
    UNRECOGNIZED = -1
}
export declare const FileOptions_OptimizeModeSDKType: typeof FileOptions_OptimizeMode;
export declare const FileOptions_OptimizeModeAmino: typeof FileOptions_OptimizeMode;
export declare function fileOptions_OptimizeModeFromJSON(object: any): FileOptions_OptimizeMode;
export declare function fileOptions_OptimizeModeToJSON(object: FileOptions_OptimizeMode): string;
export declare enum FieldOptions_CType {
    /** STRING - Default mode. */
    STRING = 0,
    CORD = 1,
    STRING_PIECE = 2,
    UNRECOGNIZED = -1
}
export declare const FieldOptions_CTypeSDKType: typeof FieldOptions_CType;
export declare const FieldOptions_CTypeAmino: typeof FieldOptions_CType;
export declare function fieldOptions_CTypeFromJSON(object: any): FieldOptions_CType;
export declare function fieldOptions_CTypeToJSON(object: FieldOptions_CType): string;
export declare enum FieldOptions_JSType {
    /** JS_NORMAL - Use the default type. */
    JS_NORMAL = 0,
    /** JS_STRING - Use JavaScript strings. */
    JS_STRING = 1,
    /** JS_NUMBER - Use JavaScript numbers. */
    JS_NUMBER = 2,
    UNRECOGNIZED = -1
}
export declare const FieldOptions_JSTypeSDKType: typeof FieldOptions_JSType;
export declare const FieldOptions_JSTypeAmino: typeof FieldOptions_JSType;
export declare function fieldOptions_JSTypeFromJSON(object: any): FieldOptions_JSType;
export declare function fieldOptions_JSTypeToJSON(object: FieldOptions_JSType): string;
/**
 * Is this method side-effect-free (or safe in HTTP parlance), or idempotent,
 * or neither? HTTP based RPC implementation may choose GET verb for safe
 * methods, and PUT verb for idempotent methods instead of the default POST.
 */
export declare enum MethodOptions_IdempotencyLevel {
    IDEMPOTENCY_UNKNOWN = 0,
    /** NO_SIDE_EFFECTS - implies idempotent */
    NO_SIDE_EFFECTS = 1,
    /** IDEMPOTENT - idempotent, but may have side effects */
    IDEMPOTENT = 2,
    UNRECOGNIZED = -1
}
export declare const MethodOptions_IdempotencyLevelSDKType: typeof MethodOptions_IdempotencyLevel;
export declare const MethodOptions_IdempotencyLevelAmino: typeof MethodOptions_IdempotencyLevel;
export declare function methodOptions_IdempotencyLevelFromJSON(object: any): MethodOptions_IdempotencyLevel;
export declare function methodOptions_IdempotencyLevelToJSON(object: MethodOptions_IdempotencyLevel): string;
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
    options?: FileOptions | undefined;
    /**
     * This field contains optional information about the original source code.
     * You may safely remove this entire field without harming runtime
     * functionality of the descriptors -- the information is needed only by
     * development tools.
     */
    sourceCodeInfo?: SourceCodeInfo | undefined;
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
    options?: FileOptionsAmino | undefined;
    /**
     * This field contains optional information about the original source code.
     * You may safely remove this entire field without harming runtime
     * functionality of the descriptors -- the information is needed only by
     * development tools.
     */
    source_code_info?: SourceCodeInfoAmino | undefined;
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
    options?: FileOptionsSDKType | undefined;
    source_code_info?: SourceCodeInfoSDKType | undefined;
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
    options?: MessageOptions | undefined;
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
    options?: MessageOptionsAmino | undefined;
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
    options?: MessageOptionsSDKType | undefined;
    reserved_range: DescriptorProto_ReservedRangeSDKType[];
    reserved_name: string[];
}
export interface DescriptorProto_ExtensionRange {
    /** Inclusive. */
    start: number;
    /** Exclusive. */
    end: number;
    options?: ExtensionRangeOptions | undefined;
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
    options?: ExtensionRangeOptionsAmino | undefined;
}
export interface DescriptorProto_ExtensionRangeAminoMsg {
    type: "/google.protobuf.ExtensionRange";
    value: DescriptorProto_ExtensionRangeAmino;
}
export interface DescriptorProto_ExtensionRangeSDKType {
    start: number;
    end: number;
    options?: ExtensionRangeOptionsSDKType | undefined;
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
    options?: FieldOptions | undefined;
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
    options?: FieldOptionsAmino | undefined;
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
    options?: FieldOptionsSDKType | undefined;
}
/** Describes a oneof. */
export interface OneofDescriptorProto {
    name: string;
    options?: OneofOptions | undefined;
}
export interface OneofDescriptorProtoProtoMsg {
    typeUrl: "/google.protobuf.OneofDescriptorProto";
    value: Uint8Array;
}
/** Describes a oneof. */
export interface OneofDescriptorProtoAmino {
    name?: string;
    options?: OneofOptionsAmino | undefined;
}
export interface OneofDescriptorProtoAminoMsg {
    type: "/google.protobuf.OneofDescriptorProto";
    value: OneofDescriptorProtoAmino;
}
/** Describes a oneof. */
export interface OneofDescriptorProtoSDKType {
    name: string;
    options?: OneofOptionsSDKType | undefined;
}
/** Describes an enum type. */
export interface EnumDescriptorProto {
    name: string;
    value: EnumValueDescriptorProto[];
    options?: EnumOptions | undefined;
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
    options?: EnumOptionsAmino | undefined;
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
    options?: EnumOptionsSDKType | undefined;
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
    options?: EnumValueOptions | undefined;
}
export interface EnumValueDescriptorProtoProtoMsg {
    typeUrl: "/google.protobuf.EnumValueDescriptorProto";
    value: Uint8Array;
}
/** Describes a value within an enum. */
export interface EnumValueDescriptorProtoAmino {
    name?: string;
    number?: number;
    options?: EnumValueOptionsAmino | undefined;
}
export interface EnumValueDescriptorProtoAminoMsg {
    type: "/google.protobuf.EnumValueDescriptorProto";
    value: EnumValueDescriptorProtoAmino;
}
/** Describes a value within an enum. */
export interface EnumValueDescriptorProtoSDKType {
    name: string;
    number: number;
    options?: EnumValueOptionsSDKType | undefined;
}
/** Describes a service. */
export interface ServiceDescriptorProto {
    name: string;
    method: MethodDescriptorProto[];
    options?: ServiceOptions | undefined;
}
export interface ServiceDescriptorProtoProtoMsg {
    typeUrl: "/google.protobuf.ServiceDescriptorProto";
    value: Uint8Array;
}
/** Describes a service. */
export interface ServiceDescriptorProtoAmino {
    name?: string;
    method?: MethodDescriptorProtoAmino[];
    options?: ServiceOptionsAmino | undefined;
}
export interface ServiceDescriptorProtoAminoMsg {
    type: "/google.protobuf.ServiceDescriptorProto";
    value: ServiceDescriptorProtoAmino;
}
/** Describes a service. */
export interface ServiceDescriptorProtoSDKType {
    name: string;
    method: MethodDescriptorProtoSDKType[];
    options?: ServiceOptionsSDKType | undefined;
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
    options?: MethodOptions | undefined;
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
    options?: MethodOptionsAmino | undefined;
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
    options?: MethodOptionsSDKType | undefined;
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
export declare const FileDescriptorSet: {
    typeUrl: string;
    is(o: any): o is FileDescriptorSet;
    isSDK(o: any): o is FileDescriptorSetSDKType;
    isAmino(o: any): o is FileDescriptorSetAmino;
    encode(message: FileDescriptorSet, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): FileDescriptorSet;
    fromJSON(object: any): FileDescriptorSet;
    toJSON(message: FileDescriptorSet): unknown;
    fromPartial(object: DeepPartial<FileDescriptorSet>): FileDescriptorSet;
    fromSDK(object: FileDescriptorSetSDKType): FileDescriptorSet;
    toSDK(message: FileDescriptorSet): FileDescriptorSetSDKType;
    fromAmino(object: FileDescriptorSetAmino): FileDescriptorSet;
    toAmino(message: FileDescriptorSet): FileDescriptorSetAmino;
    fromAminoMsg(object: FileDescriptorSetAminoMsg): FileDescriptorSet;
    fromProtoMsg(message: FileDescriptorSetProtoMsg): FileDescriptorSet;
    toProto(message: FileDescriptorSet): Uint8Array;
    toProtoMsg(message: FileDescriptorSet): FileDescriptorSetProtoMsg;
};
export declare const FileDescriptorProto: {
    typeUrl: string;
    is(o: any): o is FileDescriptorProto;
    isSDK(o: any): o is FileDescriptorProtoSDKType;
    isAmino(o: any): o is FileDescriptorProtoAmino;
    encode(message: FileDescriptorProto, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): FileDescriptorProto;
    fromJSON(object: any): FileDescriptorProto;
    toJSON(message: FileDescriptorProto): unknown;
    fromPartial(object: DeepPartial<FileDescriptorProto>): FileDescriptorProto;
    fromSDK(object: FileDescriptorProtoSDKType): FileDescriptorProto;
    toSDK(message: FileDescriptorProto): FileDescriptorProtoSDKType;
    fromAmino(object: FileDescriptorProtoAmino): FileDescriptorProto;
    toAmino(message: FileDescriptorProto): FileDescriptorProtoAmino;
    fromAminoMsg(object: FileDescriptorProtoAminoMsg): FileDescriptorProto;
    fromProtoMsg(message: FileDescriptorProtoProtoMsg): FileDescriptorProto;
    toProto(message: FileDescriptorProto): Uint8Array;
    toProtoMsg(message: FileDescriptorProto): FileDescriptorProtoProtoMsg;
};
export declare const DescriptorProto: {
    typeUrl: string;
    is(o: any): o is DescriptorProto;
    isSDK(o: any): o is DescriptorProtoSDKType;
    isAmino(o: any): o is DescriptorProtoAmino;
    encode(message: DescriptorProto, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DescriptorProto;
    fromJSON(object: any): DescriptorProto;
    toJSON(message: DescriptorProto): unknown;
    fromPartial(object: DeepPartial<DescriptorProto>): DescriptorProto;
    fromSDK(object: DescriptorProtoSDKType): DescriptorProto;
    toSDK(message: DescriptorProto): DescriptorProtoSDKType;
    fromAmino(object: DescriptorProtoAmino): DescriptorProto;
    toAmino(message: DescriptorProto): DescriptorProtoAmino;
    fromAminoMsg(object: DescriptorProtoAminoMsg): DescriptorProto;
    fromProtoMsg(message: DescriptorProtoProtoMsg): DescriptorProto;
    toProto(message: DescriptorProto): Uint8Array;
    toProtoMsg(message: DescriptorProto): DescriptorProtoProtoMsg;
};
export declare const DescriptorProto_ExtensionRange: {
    typeUrl: string;
    is(o: any): o is DescriptorProto_ExtensionRange;
    isSDK(o: any): o is DescriptorProto_ExtensionRangeSDKType;
    isAmino(o: any): o is DescriptorProto_ExtensionRangeAmino;
    encode(message: DescriptorProto_ExtensionRange, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DescriptorProto_ExtensionRange;
    fromJSON(object: any): DescriptorProto_ExtensionRange;
    toJSON(message: DescriptorProto_ExtensionRange): unknown;
    fromPartial(object: DeepPartial<DescriptorProto_ExtensionRange>): DescriptorProto_ExtensionRange;
    fromSDK(object: DescriptorProto_ExtensionRangeSDKType): DescriptorProto_ExtensionRange;
    toSDK(message: DescriptorProto_ExtensionRange): DescriptorProto_ExtensionRangeSDKType;
    fromAmino(object: DescriptorProto_ExtensionRangeAmino): DescriptorProto_ExtensionRange;
    toAmino(message: DescriptorProto_ExtensionRange): DescriptorProto_ExtensionRangeAmino;
    fromAminoMsg(object: DescriptorProto_ExtensionRangeAminoMsg): DescriptorProto_ExtensionRange;
    fromProtoMsg(message: DescriptorProto_ExtensionRangeProtoMsg): DescriptorProto_ExtensionRange;
    toProto(message: DescriptorProto_ExtensionRange): Uint8Array;
    toProtoMsg(message: DescriptorProto_ExtensionRange): DescriptorProto_ExtensionRangeProtoMsg;
};
export declare const DescriptorProto_ReservedRange: {
    typeUrl: string;
    is(o: any): o is DescriptorProto_ReservedRange;
    isSDK(o: any): o is DescriptorProto_ReservedRangeSDKType;
    isAmino(o: any): o is DescriptorProto_ReservedRangeAmino;
    encode(message: DescriptorProto_ReservedRange, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DescriptorProto_ReservedRange;
    fromJSON(object: any): DescriptorProto_ReservedRange;
    toJSON(message: DescriptorProto_ReservedRange): unknown;
    fromPartial(object: DeepPartial<DescriptorProto_ReservedRange>): DescriptorProto_ReservedRange;
    fromSDK(object: DescriptorProto_ReservedRangeSDKType): DescriptorProto_ReservedRange;
    toSDK(message: DescriptorProto_ReservedRange): DescriptorProto_ReservedRangeSDKType;
    fromAmino(object: DescriptorProto_ReservedRangeAmino): DescriptorProto_ReservedRange;
    toAmino(message: DescriptorProto_ReservedRange): DescriptorProto_ReservedRangeAmino;
    fromAminoMsg(object: DescriptorProto_ReservedRangeAminoMsg): DescriptorProto_ReservedRange;
    fromProtoMsg(message: DescriptorProto_ReservedRangeProtoMsg): DescriptorProto_ReservedRange;
    toProto(message: DescriptorProto_ReservedRange): Uint8Array;
    toProtoMsg(message: DescriptorProto_ReservedRange): DescriptorProto_ReservedRangeProtoMsg;
};
export declare const ExtensionRangeOptions: {
    typeUrl: string;
    is(o: any): o is ExtensionRangeOptions;
    isSDK(o: any): o is ExtensionRangeOptionsSDKType;
    isAmino(o: any): o is ExtensionRangeOptionsAmino;
    encode(message: ExtensionRangeOptions, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ExtensionRangeOptions;
    fromJSON(object: any): ExtensionRangeOptions;
    toJSON(message: ExtensionRangeOptions): unknown;
    fromPartial(object: DeepPartial<ExtensionRangeOptions>): ExtensionRangeOptions;
    fromSDK(object: ExtensionRangeOptionsSDKType): ExtensionRangeOptions;
    toSDK(message: ExtensionRangeOptions): ExtensionRangeOptionsSDKType;
    fromAmino(object: ExtensionRangeOptionsAmino): ExtensionRangeOptions;
    toAmino(message: ExtensionRangeOptions): ExtensionRangeOptionsAmino;
    fromAminoMsg(object: ExtensionRangeOptionsAminoMsg): ExtensionRangeOptions;
    fromProtoMsg(message: ExtensionRangeOptionsProtoMsg): ExtensionRangeOptions;
    toProto(message: ExtensionRangeOptions): Uint8Array;
    toProtoMsg(message: ExtensionRangeOptions): ExtensionRangeOptionsProtoMsg;
};
export declare const FieldDescriptorProto: {
    typeUrl: string;
    is(o: any): o is FieldDescriptorProto;
    isSDK(o: any): o is FieldDescriptorProtoSDKType;
    isAmino(o: any): o is FieldDescriptorProtoAmino;
    encode(message: FieldDescriptorProto, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): FieldDescriptorProto;
    fromJSON(object: any): FieldDescriptorProto;
    toJSON(message: FieldDescriptorProto): unknown;
    fromPartial(object: DeepPartial<FieldDescriptorProto>): FieldDescriptorProto;
    fromSDK(object: FieldDescriptorProtoSDKType): FieldDescriptorProto;
    toSDK(message: FieldDescriptorProto): FieldDescriptorProtoSDKType;
    fromAmino(object: FieldDescriptorProtoAmino): FieldDescriptorProto;
    toAmino(message: FieldDescriptorProto): FieldDescriptorProtoAmino;
    fromAminoMsg(object: FieldDescriptorProtoAminoMsg): FieldDescriptorProto;
    fromProtoMsg(message: FieldDescriptorProtoProtoMsg): FieldDescriptorProto;
    toProto(message: FieldDescriptorProto): Uint8Array;
    toProtoMsg(message: FieldDescriptorProto): FieldDescriptorProtoProtoMsg;
};
export declare const OneofDescriptorProto: {
    typeUrl: string;
    is(o: any): o is OneofDescriptorProto;
    isSDK(o: any): o is OneofDescriptorProtoSDKType;
    isAmino(o: any): o is OneofDescriptorProtoAmino;
    encode(message: OneofDescriptorProto, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): OneofDescriptorProto;
    fromJSON(object: any): OneofDescriptorProto;
    toJSON(message: OneofDescriptorProto): unknown;
    fromPartial(object: DeepPartial<OneofDescriptorProto>): OneofDescriptorProto;
    fromSDK(object: OneofDescriptorProtoSDKType): OneofDescriptorProto;
    toSDK(message: OneofDescriptorProto): OneofDescriptorProtoSDKType;
    fromAmino(object: OneofDescriptorProtoAmino): OneofDescriptorProto;
    toAmino(message: OneofDescriptorProto): OneofDescriptorProtoAmino;
    fromAminoMsg(object: OneofDescriptorProtoAminoMsg): OneofDescriptorProto;
    fromProtoMsg(message: OneofDescriptorProtoProtoMsg): OneofDescriptorProto;
    toProto(message: OneofDescriptorProto): Uint8Array;
    toProtoMsg(message: OneofDescriptorProto): OneofDescriptorProtoProtoMsg;
};
export declare const EnumDescriptorProto: {
    typeUrl: string;
    is(o: any): o is EnumDescriptorProto;
    isSDK(o: any): o is EnumDescriptorProtoSDKType;
    isAmino(o: any): o is EnumDescriptorProtoAmino;
    encode(message: EnumDescriptorProto, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EnumDescriptorProto;
    fromJSON(object: any): EnumDescriptorProto;
    toJSON(message: EnumDescriptorProto): unknown;
    fromPartial(object: DeepPartial<EnumDescriptorProto>): EnumDescriptorProto;
    fromSDK(object: EnumDescriptorProtoSDKType): EnumDescriptorProto;
    toSDK(message: EnumDescriptorProto): EnumDescriptorProtoSDKType;
    fromAmino(object: EnumDescriptorProtoAmino): EnumDescriptorProto;
    toAmino(message: EnumDescriptorProto): EnumDescriptorProtoAmino;
    fromAminoMsg(object: EnumDescriptorProtoAminoMsg): EnumDescriptorProto;
    fromProtoMsg(message: EnumDescriptorProtoProtoMsg): EnumDescriptorProto;
    toProto(message: EnumDescriptorProto): Uint8Array;
    toProtoMsg(message: EnumDescriptorProto): EnumDescriptorProtoProtoMsg;
};
export declare const EnumDescriptorProto_EnumReservedRange: {
    typeUrl: string;
    is(o: any): o is EnumDescriptorProto_EnumReservedRange;
    isSDK(o: any): o is EnumDescriptorProto_EnumReservedRangeSDKType;
    isAmino(o: any): o is EnumDescriptorProto_EnumReservedRangeAmino;
    encode(message: EnumDescriptorProto_EnumReservedRange, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EnumDescriptorProto_EnumReservedRange;
    fromJSON(object: any): EnumDescriptorProto_EnumReservedRange;
    toJSON(message: EnumDescriptorProto_EnumReservedRange): unknown;
    fromPartial(object: DeepPartial<EnumDescriptorProto_EnumReservedRange>): EnumDescriptorProto_EnumReservedRange;
    fromSDK(object: EnumDescriptorProto_EnumReservedRangeSDKType): EnumDescriptorProto_EnumReservedRange;
    toSDK(message: EnumDescriptorProto_EnumReservedRange): EnumDescriptorProto_EnumReservedRangeSDKType;
    fromAmino(object: EnumDescriptorProto_EnumReservedRangeAmino): EnumDescriptorProto_EnumReservedRange;
    toAmino(message: EnumDescriptorProto_EnumReservedRange): EnumDescriptorProto_EnumReservedRangeAmino;
    fromAminoMsg(object: EnumDescriptorProto_EnumReservedRangeAminoMsg): EnumDescriptorProto_EnumReservedRange;
    fromProtoMsg(message: EnumDescriptorProto_EnumReservedRangeProtoMsg): EnumDescriptorProto_EnumReservedRange;
    toProto(message: EnumDescriptorProto_EnumReservedRange): Uint8Array;
    toProtoMsg(message: EnumDescriptorProto_EnumReservedRange): EnumDescriptorProto_EnumReservedRangeProtoMsg;
};
export declare const EnumValueDescriptorProto: {
    typeUrl: string;
    is(o: any): o is EnumValueDescriptorProto;
    isSDK(o: any): o is EnumValueDescriptorProtoSDKType;
    isAmino(o: any): o is EnumValueDescriptorProtoAmino;
    encode(message: EnumValueDescriptorProto, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EnumValueDescriptorProto;
    fromJSON(object: any): EnumValueDescriptorProto;
    toJSON(message: EnumValueDescriptorProto): unknown;
    fromPartial(object: DeepPartial<EnumValueDescriptorProto>): EnumValueDescriptorProto;
    fromSDK(object: EnumValueDescriptorProtoSDKType): EnumValueDescriptorProto;
    toSDK(message: EnumValueDescriptorProto): EnumValueDescriptorProtoSDKType;
    fromAmino(object: EnumValueDescriptorProtoAmino): EnumValueDescriptorProto;
    toAmino(message: EnumValueDescriptorProto): EnumValueDescriptorProtoAmino;
    fromAminoMsg(object: EnumValueDescriptorProtoAminoMsg): EnumValueDescriptorProto;
    fromProtoMsg(message: EnumValueDescriptorProtoProtoMsg): EnumValueDescriptorProto;
    toProto(message: EnumValueDescriptorProto): Uint8Array;
    toProtoMsg(message: EnumValueDescriptorProto): EnumValueDescriptorProtoProtoMsg;
};
export declare const ServiceDescriptorProto: {
    typeUrl: string;
    is(o: any): o is ServiceDescriptorProto;
    isSDK(o: any): o is ServiceDescriptorProtoSDKType;
    isAmino(o: any): o is ServiceDescriptorProtoAmino;
    encode(message: ServiceDescriptorProto, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ServiceDescriptorProto;
    fromJSON(object: any): ServiceDescriptorProto;
    toJSON(message: ServiceDescriptorProto): unknown;
    fromPartial(object: DeepPartial<ServiceDescriptorProto>): ServiceDescriptorProto;
    fromSDK(object: ServiceDescriptorProtoSDKType): ServiceDescriptorProto;
    toSDK(message: ServiceDescriptorProto): ServiceDescriptorProtoSDKType;
    fromAmino(object: ServiceDescriptorProtoAmino): ServiceDescriptorProto;
    toAmino(message: ServiceDescriptorProto): ServiceDescriptorProtoAmino;
    fromAminoMsg(object: ServiceDescriptorProtoAminoMsg): ServiceDescriptorProto;
    fromProtoMsg(message: ServiceDescriptorProtoProtoMsg): ServiceDescriptorProto;
    toProto(message: ServiceDescriptorProto): Uint8Array;
    toProtoMsg(message: ServiceDescriptorProto): ServiceDescriptorProtoProtoMsg;
};
export declare const MethodDescriptorProto: {
    typeUrl: string;
    is(o: any): o is MethodDescriptorProto;
    isSDK(o: any): o is MethodDescriptorProtoSDKType;
    isAmino(o: any): o is MethodDescriptorProtoAmino;
    encode(message: MethodDescriptorProto, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MethodDescriptorProto;
    fromJSON(object: any): MethodDescriptorProto;
    toJSON(message: MethodDescriptorProto): unknown;
    fromPartial(object: DeepPartial<MethodDescriptorProto>): MethodDescriptorProto;
    fromSDK(object: MethodDescriptorProtoSDKType): MethodDescriptorProto;
    toSDK(message: MethodDescriptorProto): MethodDescriptorProtoSDKType;
    fromAmino(object: MethodDescriptorProtoAmino): MethodDescriptorProto;
    toAmino(message: MethodDescriptorProto): MethodDescriptorProtoAmino;
    fromAminoMsg(object: MethodDescriptorProtoAminoMsg): MethodDescriptorProto;
    fromProtoMsg(message: MethodDescriptorProtoProtoMsg): MethodDescriptorProto;
    toProto(message: MethodDescriptorProto): Uint8Array;
    toProtoMsg(message: MethodDescriptorProto): MethodDescriptorProtoProtoMsg;
};
export declare const FileOptions: {
    typeUrl: string;
    is(o: any): o is FileOptions;
    isSDK(o: any): o is FileOptionsSDKType;
    isAmino(o: any): o is FileOptionsAmino;
    encode(message: FileOptions, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): FileOptions;
    fromJSON(object: any): FileOptions;
    toJSON(message: FileOptions): unknown;
    fromPartial(object: DeepPartial<FileOptions>): FileOptions;
    fromSDK(object: FileOptionsSDKType): FileOptions;
    toSDK(message: FileOptions): FileOptionsSDKType;
    fromAmino(object: FileOptionsAmino): FileOptions;
    toAmino(message: FileOptions): FileOptionsAmino;
    fromAminoMsg(object: FileOptionsAminoMsg): FileOptions;
    fromProtoMsg(message: FileOptionsProtoMsg): FileOptions;
    toProto(message: FileOptions): Uint8Array;
    toProtoMsg(message: FileOptions): FileOptionsProtoMsg;
};
export declare const MessageOptions: {
    typeUrl: string;
    is(o: any): o is MessageOptions;
    isSDK(o: any): o is MessageOptionsSDKType;
    isAmino(o: any): o is MessageOptionsAmino;
    encode(message: MessageOptions, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MessageOptions;
    fromJSON(object: any): MessageOptions;
    toJSON(message: MessageOptions): unknown;
    fromPartial(object: DeepPartial<MessageOptions>): MessageOptions;
    fromSDK(object: MessageOptionsSDKType): MessageOptions;
    toSDK(message: MessageOptions): MessageOptionsSDKType;
    fromAmino(object: MessageOptionsAmino): MessageOptions;
    toAmino(message: MessageOptions): MessageOptionsAmino;
    fromAminoMsg(object: MessageOptionsAminoMsg): MessageOptions;
    fromProtoMsg(message: MessageOptionsProtoMsg): MessageOptions;
    toProto(message: MessageOptions): Uint8Array;
    toProtoMsg(message: MessageOptions): MessageOptionsProtoMsg;
};
export declare const FieldOptions: {
    typeUrl: string;
    is(o: any): o is FieldOptions;
    isSDK(o: any): o is FieldOptionsSDKType;
    isAmino(o: any): o is FieldOptionsAmino;
    encode(message: FieldOptions, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): FieldOptions;
    fromJSON(object: any): FieldOptions;
    toJSON(message: FieldOptions): unknown;
    fromPartial(object: DeepPartial<FieldOptions>): FieldOptions;
    fromSDK(object: FieldOptionsSDKType): FieldOptions;
    toSDK(message: FieldOptions): FieldOptionsSDKType;
    fromAmino(object: FieldOptionsAmino): FieldOptions;
    toAmino(message: FieldOptions): FieldOptionsAmino;
    fromAminoMsg(object: FieldOptionsAminoMsg): FieldOptions;
    fromProtoMsg(message: FieldOptionsProtoMsg): FieldOptions;
    toProto(message: FieldOptions): Uint8Array;
    toProtoMsg(message: FieldOptions): FieldOptionsProtoMsg;
};
export declare const OneofOptions: {
    typeUrl: string;
    is(o: any): o is OneofOptions;
    isSDK(o: any): o is OneofOptionsSDKType;
    isAmino(o: any): o is OneofOptionsAmino;
    encode(message: OneofOptions, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): OneofOptions;
    fromJSON(object: any): OneofOptions;
    toJSON(message: OneofOptions): unknown;
    fromPartial(object: DeepPartial<OneofOptions>): OneofOptions;
    fromSDK(object: OneofOptionsSDKType): OneofOptions;
    toSDK(message: OneofOptions): OneofOptionsSDKType;
    fromAmino(object: OneofOptionsAmino): OneofOptions;
    toAmino(message: OneofOptions): OneofOptionsAmino;
    fromAminoMsg(object: OneofOptionsAminoMsg): OneofOptions;
    fromProtoMsg(message: OneofOptionsProtoMsg): OneofOptions;
    toProto(message: OneofOptions): Uint8Array;
    toProtoMsg(message: OneofOptions): OneofOptionsProtoMsg;
};
export declare const EnumOptions: {
    typeUrl: string;
    is(o: any): o is EnumOptions;
    isSDK(o: any): o is EnumOptionsSDKType;
    isAmino(o: any): o is EnumOptionsAmino;
    encode(message: EnumOptions, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EnumOptions;
    fromJSON(object: any): EnumOptions;
    toJSON(message: EnumOptions): unknown;
    fromPartial(object: DeepPartial<EnumOptions>): EnumOptions;
    fromSDK(object: EnumOptionsSDKType): EnumOptions;
    toSDK(message: EnumOptions): EnumOptionsSDKType;
    fromAmino(object: EnumOptionsAmino): EnumOptions;
    toAmino(message: EnumOptions): EnumOptionsAmino;
    fromAminoMsg(object: EnumOptionsAminoMsg): EnumOptions;
    fromProtoMsg(message: EnumOptionsProtoMsg): EnumOptions;
    toProto(message: EnumOptions): Uint8Array;
    toProtoMsg(message: EnumOptions): EnumOptionsProtoMsg;
};
export declare const EnumValueOptions: {
    typeUrl: string;
    is(o: any): o is EnumValueOptions;
    isSDK(o: any): o is EnumValueOptionsSDKType;
    isAmino(o: any): o is EnumValueOptionsAmino;
    encode(message: EnumValueOptions, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EnumValueOptions;
    fromJSON(object: any): EnumValueOptions;
    toJSON(message: EnumValueOptions): unknown;
    fromPartial(object: DeepPartial<EnumValueOptions>): EnumValueOptions;
    fromSDK(object: EnumValueOptionsSDKType): EnumValueOptions;
    toSDK(message: EnumValueOptions): EnumValueOptionsSDKType;
    fromAmino(object: EnumValueOptionsAmino): EnumValueOptions;
    toAmino(message: EnumValueOptions): EnumValueOptionsAmino;
    fromAminoMsg(object: EnumValueOptionsAminoMsg): EnumValueOptions;
    fromProtoMsg(message: EnumValueOptionsProtoMsg): EnumValueOptions;
    toProto(message: EnumValueOptions): Uint8Array;
    toProtoMsg(message: EnumValueOptions): EnumValueOptionsProtoMsg;
};
export declare const ServiceOptions: {
    typeUrl: string;
    is(o: any): o is ServiceOptions;
    isSDK(o: any): o is ServiceOptionsSDKType;
    isAmino(o: any): o is ServiceOptionsAmino;
    encode(message: ServiceOptions, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ServiceOptions;
    fromJSON(object: any): ServiceOptions;
    toJSON(message: ServiceOptions): unknown;
    fromPartial(object: DeepPartial<ServiceOptions>): ServiceOptions;
    fromSDK(object: ServiceOptionsSDKType): ServiceOptions;
    toSDK(message: ServiceOptions): ServiceOptionsSDKType;
    fromAmino(object: ServiceOptionsAmino): ServiceOptions;
    toAmino(message: ServiceOptions): ServiceOptionsAmino;
    fromAminoMsg(object: ServiceOptionsAminoMsg): ServiceOptions;
    fromProtoMsg(message: ServiceOptionsProtoMsg): ServiceOptions;
    toProto(message: ServiceOptions): Uint8Array;
    toProtoMsg(message: ServiceOptions): ServiceOptionsProtoMsg;
};
export declare const MethodOptions: {
    typeUrl: string;
    is(o: any): o is MethodOptions;
    isSDK(o: any): o is MethodOptionsSDKType;
    isAmino(o: any): o is MethodOptionsAmino;
    encode(message: MethodOptions, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MethodOptions;
    fromJSON(object: any): MethodOptions;
    toJSON(message: MethodOptions): unknown;
    fromPartial(object: DeepPartial<MethodOptions>): MethodOptions;
    fromSDK(object: MethodOptionsSDKType): MethodOptions;
    toSDK(message: MethodOptions): MethodOptionsSDKType;
    fromAmino(object: MethodOptionsAmino): MethodOptions;
    toAmino(message: MethodOptions): MethodOptionsAmino;
    fromAminoMsg(object: MethodOptionsAminoMsg): MethodOptions;
    fromProtoMsg(message: MethodOptionsProtoMsg): MethodOptions;
    toProto(message: MethodOptions): Uint8Array;
    toProtoMsg(message: MethodOptions): MethodOptionsProtoMsg;
};
export declare const UninterpretedOption: {
    typeUrl: string;
    is(o: any): o is UninterpretedOption;
    isSDK(o: any): o is UninterpretedOptionSDKType;
    isAmino(o: any): o is UninterpretedOptionAmino;
    encode(message: UninterpretedOption, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UninterpretedOption;
    fromJSON(object: any): UninterpretedOption;
    toJSON(message: UninterpretedOption): unknown;
    fromPartial(object: DeepPartial<UninterpretedOption>): UninterpretedOption;
    fromSDK(object: UninterpretedOptionSDKType): UninterpretedOption;
    toSDK(message: UninterpretedOption): UninterpretedOptionSDKType;
    fromAmino(object: UninterpretedOptionAmino): UninterpretedOption;
    toAmino(message: UninterpretedOption): UninterpretedOptionAmino;
    fromAminoMsg(object: UninterpretedOptionAminoMsg): UninterpretedOption;
    fromProtoMsg(message: UninterpretedOptionProtoMsg): UninterpretedOption;
    toProto(message: UninterpretedOption): Uint8Array;
    toProtoMsg(message: UninterpretedOption): UninterpretedOptionProtoMsg;
};
export declare const UninterpretedOption_NamePart: {
    typeUrl: string;
    is(o: any): o is UninterpretedOption_NamePart;
    isSDK(o: any): o is UninterpretedOption_NamePartSDKType;
    isAmino(o: any): o is UninterpretedOption_NamePartAmino;
    encode(message: UninterpretedOption_NamePart, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UninterpretedOption_NamePart;
    fromJSON(object: any): UninterpretedOption_NamePart;
    toJSON(message: UninterpretedOption_NamePart): unknown;
    fromPartial(object: DeepPartial<UninterpretedOption_NamePart>): UninterpretedOption_NamePart;
    fromSDK(object: UninterpretedOption_NamePartSDKType): UninterpretedOption_NamePart;
    toSDK(message: UninterpretedOption_NamePart): UninterpretedOption_NamePartSDKType;
    fromAmino(object: UninterpretedOption_NamePartAmino): UninterpretedOption_NamePart;
    toAmino(message: UninterpretedOption_NamePart): UninterpretedOption_NamePartAmino;
    fromAminoMsg(object: UninterpretedOption_NamePartAminoMsg): UninterpretedOption_NamePart;
    fromProtoMsg(message: UninterpretedOption_NamePartProtoMsg): UninterpretedOption_NamePart;
    toProto(message: UninterpretedOption_NamePart): Uint8Array;
    toProtoMsg(message: UninterpretedOption_NamePart): UninterpretedOption_NamePartProtoMsg;
};
export declare const SourceCodeInfo: {
    typeUrl: string;
    is(o: any): o is SourceCodeInfo;
    isSDK(o: any): o is SourceCodeInfoSDKType;
    isAmino(o: any): o is SourceCodeInfoAmino;
    encode(message: SourceCodeInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SourceCodeInfo;
    fromJSON(object: any): SourceCodeInfo;
    toJSON(message: SourceCodeInfo): unknown;
    fromPartial(object: DeepPartial<SourceCodeInfo>): SourceCodeInfo;
    fromSDK(object: SourceCodeInfoSDKType): SourceCodeInfo;
    toSDK(message: SourceCodeInfo): SourceCodeInfoSDKType;
    fromAmino(object: SourceCodeInfoAmino): SourceCodeInfo;
    toAmino(message: SourceCodeInfo): SourceCodeInfoAmino;
    fromAminoMsg(object: SourceCodeInfoAminoMsg): SourceCodeInfo;
    fromProtoMsg(message: SourceCodeInfoProtoMsg): SourceCodeInfo;
    toProto(message: SourceCodeInfo): Uint8Array;
    toProtoMsg(message: SourceCodeInfo): SourceCodeInfoProtoMsg;
};
export declare const SourceCodeInfo_Location: {
    typeUrl: string;
    is(o: any): o is SourceCodeInfo_Location;
    isSDK(o: any): o is SourceCodeInfo_LocationSDKType;
    isAmino(o: any): o is SourceCodeInfo_LocationAmino;
    encode(message: SourceCodeInfo_Location, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SourceCodeInfo_Location;
    fromJSON(object: any): SourceCodeInfo_Location;
    toJSON(message: SourceCodeInfo_Location): unknown;
    fromPartial(object: DeepPartial<SourceCodeInfo_Location>): SourceCodeInfo_Location;
    fromSDK(object: SourceCodeInfo_LocationSDKType): SourceCodeInfo_Location;
    toSDK(message: SourceCodeInfo_Location): SourceCodeInfo_LocationSDKType;
    fromAmino(object: SourceCodeInfo_LocationAmino): SourceCodeInfo_Location;
    toAmino(message: SourceCodeInfo_Location): SourceCodeInfo_LocationAmino;
    fromAminoMsg(object: SourceCodeInfo_LocationAminoMsg): SourceCodeInfo_Location;
    fromProtoMsg(message: SourceCodeInfo_LocationProtoMsg): SourceCodeInfo_Location;
    toProto(message: SourceCodeInfo_Location): Uint8Array;
    toProtoMsg(message: SourceCodeInfo_Location): SourceCodeInfo_LocationProtoMsg;
};
export declare const GeneratedCodeInfo: {
    typeUrl: string;
    is(o: any): o is GeneratedCodeInfo;
    isSDK(o: any): o is GeneratedCodeInfoSDKType;
    isAmino(o: any): o is GeneratedCodeInfoAmino;
    encode(message: GeneratedCodeInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GeneratedCodeInfo;
    fromJSON(object: any): GeneratedCodeInfo;
    toJSON(message: GeneratedCodeInfo): unknown;
    fromPartial(object: DeepPartial<GeneratedCodeInfo>): GeneratedCodeInfo;
    fromSDK(object: GeneratedCodeInfoSDKType): GeneratedCodeInfo;
    toSDK(message: GeneratedCodeInfo): GeneratedCodeInfoSDKType;
    fromAmino(object: GeneratedCodeInfoAmino): GeneratedCodeInfo;
    toAmino(message: GeneratedCodeInfo): GeneratedCodeInfoAmino;
    fromAminoMsg(object: GeneratedCodeInfoAminoMsg): GeneratedCodeInfo;
    fromProtoMsg(message: GeneratedCodeInfoProtoMsg): GeneratedCodeInfo;
    toProto(message: GeneratedCodeInfo): Uint8Array;
    toProtoMsg(message: GeneratedCodeInfo): GeneratedCodeInfoProtoMsg;
};
export declare const GeneratedCodeInfo_Annotation: {
    typeUrl: string;
    is(o: any): o is GeneratedCodeInfo_Annotation;
    isSDK(o: any): o is GeneratedCodeInfo_AnnotationSDKType;
    isAmino(o: any): o is GeneratedCodeInfo_AnnotationAmino;
    encode(message: GeneratedCodeInfo_Annotation, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GeneratedCodeInfo_Annotation;
    fromJSON(object: any): GeneratedCodeInfo_Annotation;
    toJSON(message: GeneratedCodeInfo_Annotation): unknown;
    fromPartial(object: DeepPartial<GeneratedCodeInfo_Annotation>): GeneratedCodeInfo_Annotation;
    fromSDK(object: GeneratedCodeInfo_AnnotationSDKType): GeneratedCodeInfo_Annotation;
    toSDK(message: GeneratedCodeInfo_Annotation): GeneratedCodeInfo_AnnotationSDKType;
    fromAmino(object: GeneratedCodeInfo_AnnotationAmino): GeneratedCodeInfo_Annotation;
    toAmino(message: GeneratedCodeInfo_Annotation): GeneratedCodeInfo_AnnotationAmino;
    fromAminoMsg(object: GeneratedCodeInfo_AnnotationAminoMsg): GeneratedCodeInfo_Annotation;
    fromProtoMsg(message: GeneratedCodeInfo_AnnotationProtoMsg): GeneratedCodeInfo_Annotation;
    toProto(message: GeneratedCodeInfo_Annotation): Uint8Array;
    toProtoMsg(message: GeneratedCodeInfo_Annotation): GeneratedCodeInfo_AnnotationProtoMsg;
};
