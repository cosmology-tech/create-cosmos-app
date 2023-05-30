import { SourceInfo, SourceInfoAmino, SourceInfoSDKType, Expr, ExprAmino, ExprSDKType, Constant, ConstantAmino, ConstantSDKType } from "./syntax";
import { Empty, EmptyAmino, EmptySDKType } from "../../../protobuf/empty";
import { NullValue, nullValueFromJSON, nullValueToJSON } from "../../../protobuf/struct";
import { Long, isSet, DeepPartial, isObject } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "google.api.expr.v1alpha1";
/** CEL primitive types. */
export enum Type_PrimitiveType {
  /** PRIMITIVE_TYPE_UNSPECIFIED - Unspecified type. */
  PRIMITIVE_TYPE_UNSPECIFIED = 0,
  /** BOOL - Boolean type. */
  BOOL = 1,
  /**
   * INT64 - Int64 type.
   * 
   * Proto-based integer values are widened to int64.
   */
  INT64 = 2,
  /**
   * UINT64 - Uint64 type.
   * 
   * Proto-based unsigned integer values are widened to uint64.
   */
  UINT64 = 3,
  /**
   * DOUBLE - Double type.
   * 
   * Proto-based float values are widened to double values.
   */
  DOUBLE = 4,
  /** STRING - String type. */
  STRING = 5,
  /** BYTES - Bytes type. */
  BYTES = 6,
  UNRECOGNIZED = -1,
}
export const Type_PrimitiveTypeSDKType = Type_PrimitiveType;
export const Type_PrimitiveTypeAmino = Type_PrimitiveType;
export function type_PrimitiveTypeFromJSON(object: any): Type_PrimitiveType {
  switch (object) {
    case 0:
    case "PRIMITIVE_TYPE_UNSPECIFIED":
      return Type_PrimitiveType.PRIMITIVE_TYPE_UNSPECIFIED;
    case 1:
    case "BOOL":
      return Type_PrimitiveType.BOOL;
    case 2:
    case "INT64":
      return Type_PrimitiveType.INT64;
    case 3:
    case "UINT64":
      return Type_PrimitiveType.UINT64;
    case 4:
    case "DOUBLE":
      return Type_PrimitiveType.DOUBLE;
    case 5:
    case "STRING":
      return Type_PrimitiveType.STRING;
    case 6:
    case "BYTES":
      return Type_PrimitiveType.BYTES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Type_PrimitiveType.UNRECOGNIZED;
  }
}
export function type_PrimitiveTypeToJSON(object: Type_PrimitiveType): string {
  switch (object) {
    case Type_PrimitiveType.PRIMITIVE_TYPE_UNSPECIFIED:
      return "PRIMITIVE_TYPE_UNSPECIFIED";
    case Type_PrimitiveType.BOOL:
      return "BOOL";
    case Type_PrimitiveType.INT64:
      return "INT64";
    case Type_PrimitiveType.UINT64:
      return "UINT64";
    case Type_PrimitiveType.DOUBLE:
      return "DOUBLE";
    case Type_PrimitiveType.STRING:
      return "STRING";
    case Type_PrimitiveType.BYTES:
      return "BYTES";
    case Type_PrimitiveType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Well-known protobuf types treated with first-class support in CEL. */
export enum Type_WellKnownType {
  /** WELL_KNOWN_TYPE_UNSPECIFIED - Unspecified type. */
  WELL_KNOWN_TYPE_UNSPECIFIED = 0,
  /**
   * ANY - Well-known protobuf.Any type.
   * 
   * Any types are a polymorphic message type. During type-checking they are
   * treated like `DYN` types, but at runtime they are resolved to a specific
   * message type specified at evaluation time.
   */
  ANY = 1,
  /** TIMESTAMP - Well-known protobuf.Timestamp type, internally referenced as `timestamp`. */
  TIMESTAMP = 2,
  /** DURATION - Well-known protobuf.Duration type, internally referenced as `duration`. */
  DURATION = 3,
  UNRECOGNIZED = -1,
}
export const Type_WellKnownTypeSDKType = Type_WellKnownType;
export const Type_WellKnownTypeAmino = Type_WellKnownType;
export function type_WellKnownTypeFromJSON(object: any): Type_WellKnownType {
  switch (object) {
    case 0:
    case "WELL_KNOWN_TYPE_UNSPECIFIED":
      return Type_WellKnownType.WELL_KNOWN_TYPE_UNSPECIFIED;
    case 1:
    case "ANY":
      return Type_WellKnownType.ANY;
    case 2:
    case "TIMESTAMP":
      return Type_WellKnownType.TIMESTAMP;
    case 3:
    case "DURATION":
      return Type_WellKnownType.DURATION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Type_WellKnownType.UNRECOGNIZED;
  }
}
export function type_WellKnownTypeToJSON(object: Type_WellKnownType): string {
  switch (object) {
    case Type_WellKnownType.WELL_KNOWN_TYPE_UNSPECIFIED:
      return "WELL_KNOWN_TYPE_UNSPECIFIED";
    case Type_WellKnownType.ANY:
      return "ANY";
    case Type_WellKnownType.TIMESTAMP:
      return "TIMESTAMP";
    case Type_WellKnownType.DURATION:
      return "DURATION";
    case Type_WellKnownType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface CheckedExpr_ReferenceMapEntry {
  key: Long;
  value?: Reference;
}
export interface CheckedExpr_ReferenceMapEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface CheckedExpr_ReferenceMapEntryAmino {
  key: string;
  value?: ReferenceAmino;
}
export interface CheckedExpr_ReferenceMapEntryAminoMsg {
  type: string;
  value: CheckedExpr_ReferenceMapEntryAmino;
}
export interface CheckedExpr_ReferenceMapEntrySDKType {
  key: Long;
  value?: ReferenceSDKType;
}
export interface CheckedExpr_TypeMapEntry {
  key: Long;
  value?: Type;
}
export interface CheckedExpr_TypeMapEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface CheckedExpr_TypeMapEntryAmino {
  key: string;
  value?: TypeAmino;
}
export interface CheckedExpr_TypeMapEntryAminoMsg {
  type: string;
  value: CheckedExpr_TypeMapEntryAmino;
}
export interface CheckedExpr_TypeMapEntrySDKType {
  key: Long;
  value?: TypeSDKType;
}
/** A CEL expression which has been successfully type checked. */
export interface CheckedExpr {
  /**
   * A map from expression ids to resolved references.
   * 
   * The following entries are in this table:
   * 
   * - An Ident or Select expression is represented here if it resolves to a
   *   declaration. For instance, if `a.b.c` is represented by
   *   `select(select(id(a), b), c)`, and `a.b` resolves to a declaration,
   *   while `c` is a field selection, then the reference is attached to the
   *   nested select expression (but not to the id or or the outer select).
   *   In turn, if `a` resolves to a declaration and `b.c` are field selections,
   *   the reference is attached to the ident expression.
   * - Every Call expression has an entry here, identifying the function being
   *   called.
   * - Every CreateStruct expression for a message has an entry, identifying
   *   the message.
   */
  referenceMap?: {
    [key: Long]: Reference;
  };
  /**
   * A map from expression ids to types.
   * 
   * Every expression node which has a type different than DYN has a mapping
   * here. If an expression has type DYN, it is omitted from this map to save
   * space.
   */
  typeMap?: {
    [key: Long]: Type;
  };
  /**
   * The source info derived from input that generated the parsed `expr` and
   * any optimizations made during the type-checking pass.
   */
  sourceInfo?: SourceInfo;
  /**
   * The expr version indicates the major / minor version number of the `expr`
   * representation.
   * 
   * The most common reason for a version change will be to indicate to the CEL
   * runtimes that transformations have been performed on the expr during static
   * analysis. In some cases, this will save the runtime the work of applying
   * the same or similar transformations prior to evaluation.
   */
  exprVersion: string;
  /**
   * The checked expression. Semantically equivalent to the parsed `expr`, but
   * may have structural differences.
   */
  expr?: Expr;
}
export interface CheckedExprProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.CheckedExpr";
  value: Uint8Array;
}
/** A CEL expression which has been successfully type checked. */
export interface CheckedExprAmino {
  /**
   * A map from expression ids to resolved references.
   * 
   * The following entries are in this table:
   * 
   * - An Ident or Select expression is represented here if it resolves to a
   *   declaration. For instance, if `a.b.c` is represented by
   *   `select(select(id(a), b), c)`, and `a.b` resolves to a declaration,
   *   while `c` is a field selection, then the reference is attached to the
   *   nested select expression (but not to the id or or the outer select).
   *   In turn, if `a` resolves to a declaration and `b.c` are field selections,
   *   the reference is attached to the ident expression.
   * - Every Call expression has an entry here, identifying the function being
   *   called.
   * - Every CreateStruct expression for a message has an entry, identifying
   *   the message.
   */
  reference_map?: {
    [key: string]: ReferenceAmino;
  };
  /**
   * A map from expression ids to types.
   * 
   * Every expression node which has a type different than DYN has a mapping
   * here. If an expression has type DYN, it is omitted from this map to save
   * space.
   */
  type_map?: {
    [key: string]: TypeAmino;
  };
  /**
   * The source info derived from input that generated the parsed `expr` and
   * any optimizations made during the type-checking pass.
   */
  source_info?: SourceInfoAmino;
  /**
   * The expr version indicates the major / minor version number of the `expr`
   * representation.
   * 
   * The most common reason for a version change will be to indicate to the CEL
   * runtimes that transformations have been performed on the expr during static
   * analysis. In some cases, this will save the runtime the work of applying
   * the same or similar transformations prior to evaluation.
   */
  expr_version: string;
  /**
   * The checked expression. Semantically equivalent to the parsed `expr`, but
   * may have structural differences.
   */
  expr?: ExprAmino;
}
export interface CheckedExprAminoMsg {
  type: "/google.api.expr.v1alpha1.CheckedExpr";
  value: CheckedExprAmino;
}
/** A CEL expression which has been successfully type checked. */
export interface CheckedExprSDKType {
  reference_map?: {
    [key: Long]: ReferenceSDKType;
  };
  type_map?: {
    [key: Long]: TypeSDKType;
  };
  source_info?: SourceInfoSDKType;
  expr_version: string;
  expr?: ExprSDKType;
}
/** Represents a CEL type. */
export interface Type {
  /** Dynamic type. */
  dyn?: Empty;
  /** Null value. */
  null?: NullValue;
  /** Primitive types: `true`, `1u`, `-2.0`, `'string'`, `b'bytes'`. */
  primitive?: Type_PrimitiveType;
  /** Wrapper of a primitive type, e.g. `google.protobuf.Int64Value`. */
  wrapper?: Type_PrimitiveType;
  /** Well-known protobuf type such as `google.protobuf.Timestamp`. */
  wellKnown?: Type_WellKnownType;
  /** Parameterized list with elements of `list_type`, e.g. `list<timestamp>`. */
  listType?: Type_ListType;
  /** Parameterized map with typed keys and values. */
  mapType?: Type_MapType;
  /** Function type. */
  function?: Type_FunctionType;
  /**
   * Protocol buffer message type.
   * 
   * The `message_type` string specifies the qualified message type name. For
   * example, `google.plus.Profile`.
   */
  messageType?: string;
  /**
   * Type param type.
   * 
   * The `type_param` string specifies the type parameter name, e.g. `list<E>`
   * would be a `list_type` whose element type was a `type_param` type
   * named `E`.
   */
  typeParam?: string;
  /**
   * Type type.
   * 
   * The `type` value specifies the target type. e.g. int is type with a
   * target type of `Primitive.INT`.
   */
  type?: Type;
  /**
   * Error type.
   * 
   * During type-checking if an expression is an error, its type is propagated
   * as the `ERROR` type. This permits the type-checker to discover other
   * errors present in the expression.
   */
  error?: Empty;
  /** Abstract, application defined type. */
  abstractType?: Type_AbstractType;
}
export interface TypeProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.Type";
  value: Uint8Array;
}
/** Represents a CEL type. */
export interface TypeAmino {
  /** Dynamic type. */
  dyn?: EmptyAmino;
  /** Null value. */
  null?: NullValue;
  /** Primitive types: `true`, `1u`, `-2.0`, `'string'`, `b'bytes'`. */
  primitive?: Type_PrimitiveType;
  /** Wrapper of a primitive type, e.g. `google.protobuf.Int64Value`. */
  wrapper?: Type_PrimitiveType;
  /** Well-known protobuf type such as `google.protobuf.Timestamp`. */
  well_known?: Type_WellKnownType;
  /** Parameterized list with elements of `list_type`, e.g. `list<timestamp>`. */
  list_type?: Type_ListTypeAmino;
  /** Parameterized map with typed keys and values. */
  map_type?: Type_MapTypeAmino;
  /** Function type. */
  function?: Type_FunctionTypeAmino;
  /**
   * Protocol buffer message type.
   * 
   * The `message_type` string specifies the qualified message type name. For
   * example, `google.plus.Profile`.
   */
  message_type?: string;
  /**
   * Type param type.
   * 
   * The `type_param` string specifies the type parameter name, e.g. `list<E>`
   * would be a `list_type` whose element type was a `type_param` type
   * named `E`.
   */
  type_param?: string;
  /**
   * Type type.
   * 
   * The `type` value specifies the target type. e.g. int is type with a
   * target type of `Primitive.INT`.
   */
  type?: TypeAmino;
  /**
   * Error type.
   * 
   * During type-checking if an expression is an error, its type is propagated
   * as the `ERROR` type. This permits the type-checker to discover other
   * errors present in the expression.
   */
  error?: EmptyAmino;
  /** Abstract, application defined type. */
  abstract_type?: Type_AbstractTypeAmino;
}
export interface TypeAminoMsg {
  type: "/google.api.expr.v1alpha1.Type";
  value: TypeAmino;
}
/** Represents a CEL type. */
export interface TypeSDKType {
  dyn?: EmptySDKType;
  null?: NullValue;
  primitive?: Type_PrimitiveType;
  wrapper?: Type_PrimitiveType;
  well_known?: Type_WellKnownType;
  list_type?: Type_ListTypeSDKType;
  map_type?: Type_MapTypeSDKType;
  function?: Type_FunctionTypeSDKType;
  message_type?: string;
  type_param?: string;
  type?: TypeSDKType;
  error?: EmptySDKType;
  abstract_type?: Type_AbstractTypeSDKType;
}
/** List type with typed elements, e.g. `list<example.proto.MyMessage>`. */
export interface Type_ListType {
  /** The element type. */
  elemType?: Type;
}
export interface Type_ListTypeProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.ListType";
  value: Uint8Array;
}
/** List type with typed elements, e.g. `list<example.proto.MyMessage>`. */
export interface Type_ListTypeAmino {
  /** The element type. */
  elem_type?: TypeAmino;
}
export interface Type_ListTypeAminoMsg {
  type: "/google.api.expr.v1alpha1.ListType";
  value: Type_ListTypeAmino;
}
/** List type with typed elements, e.g. `list<example.proto.MyMessage>`. */
export interface Type_ListTypeSDKType {
  elem_type?: TypeSDKType;
}
/** Map type with parameterized key and value types, e.g. `map<string, int>`. */
export interface Type_MapType {
  /** The type of the key. */
  keyType?: Type;
  /** The type of the value. */
  valueType?: Type;
}
export interface Type_MapTypeProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.MapType";
  value: Uint8Array;
}
/** Map type with parameterized key and value types, e.g. `map<string, int>`. */
export interface Type_MapTypeAmino {
  /** The type of the key. */
  key_type?: TypeAmino;
  /** The type of the value. */
  value_type?: TypeAmino;
}
export interface Type_MapTypeAminoMsg {
  type: "/google.api.expr.v1alpha1.MapType";
  value: Type_MapTypeAmino;
}
/** Map type with parameterized key and value types, e.g. `map<string, int>`. */
export interface Type_MapTypeSDKType {
  key_type?: TypeSDKType;
  value_type?: TypeSDKType;
}
/** Function type with result and arg types. */
export interface Type_FunctionType {
  /** Result type of the function. */
  resultType?: Type;
  /** Argument types of the function. */
  argTypes: Type[];
}
export interface Type_FunctionTypeProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.FunctionType";
  value: Uint8Array;
}
/** Function type with result and arg types. */
export interface Type_FunctionTypeAmino {
  /** Result type of the function. */
  result_type?: TypeAmino;
  /** Argument types of the function. */
  arg_types: TypeAmino[];
}
export interface Type_FunctionTypeAminoMsg {
  type: "/google.api.expr.v1alpha1.FunctionType";
  value: Type_FunctionTypeAmino;
}
/** Function type with result and arg types. */
export interface Type_FunctionTypeSDKType {
  result_type?: TypeSDKType;
  arg_types: TypeSDKType[];
}
/** Application defined abstract type. */
export interface Type_AbstractType {
  /** The fully qualified name of this abstract type. */
  name: string;
  /** Parameter types for this abstract type. */
  parameterTypes: Type[];
}
export interface Type_AbstractTypeProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.AbstractType";
  value: Uint8Array;
}
/** Application defined abstract type. */
export interface Type_AbstractTypeAmino {
  /** The fully qualified name of this abstract type. */
  name: string;
  /** Parameter types for this abstract type. */
  parameter_types: TypeAmino[];
}
export interface Type_AbstractTypeAminoMsg {
  type: "/google.api.expr.v1alpha1.AbstractType";
  value: Type_AbstractTypeAmino;
}
/** Application defined abstract type. */
export interface Type_AbstractTypeSDKType {
  name: string;
  parameter_types: TypeSDKType[];
}
/**
 * Represents a declaration of a named value or function.
 * 
 * A declaration is part of the contract between the expression, the agent
 * evaluating that expression, and the caller requesting evaluation.
 */
export interface Decl {
  /**
   * The fully qualified name of the declaration.
   * 
   * Declarations are organized in containers and this represents the full path
   * to the declaration in its container, as in `google.api.expr.Decl`.
   * 
   * Declarations used as [FunctionDecl.Overload][google.api.expr.v1alpha1.Decl.FunctionDecl.Overload] parameters may or may not
   * have a name depending on whether the overload is function declaration or a
   * function definition containing a result [Expr][google.api.expr.v1alpha1.Expr].
   */
  name: string;
  /** Identifier declaration. */
  ident?: Decl_IdentDecl;
  /** Function declaration. */
  function?: Decl_FunctionDecl;
}
export interface DeclProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.Decl";
  value: Uint8Array;
}
/**
 * Represents a declaration of a named value or function.
 * 
 * A declaration is part of the contract between the expression, the agent
 * evaluating that expression, and the caller requesting evaluation.
 */
export interface DeclAmino {
  /**
   * The fully qualified name of the declaration.
   * 
   * Declarations are organized in containers and this represents the full path
   * to the declaration in its container, as in `google.api.expr.Decl`.
   * 
   * Declarations used as [FunctionDecl.Overload][google.api.expr.v1alpha1.Decl.FunctionDecl.Overload] parameters may or may not
   * have a name depending on whether the overload is function declaration or a
   * function definition containing a result [Expr][google.api.expr.v1alpha1.Expr].
   */
  name: string;
  /** Identifier declaration. */
  ident?: Decl_IdentDeclAmino;
  /** Function declaration. */
  function?: Decl_FunctionDeclAmino;
}
export interface DeclAminoMsg {
  type: "/google.api.expr.v1alpha1.Decl";
  value: DeclAmino;
}
/**
 * Represents a declaration of a named value or function.
 * 
 * A declaration is part of the contract between the expression, the agent
 * evaluating that expression, and the caller requesting evaluation.
 */
export interface DeclSDKType {
  name: string;
  ident?: Decl_IdentDeclSDKType;
  function?: Decl_FunctionDeclSDKType;
}
/**
 * Identifier declaration which specifies its type and optional `Expr` value.
 * 
 * An identifier without a value is a declaration that must be provided at
 * evaluation time. An identifier with a value should resolve to a constant,
 * but may be used in conjunction with other identifiers bound at evaluation
 * time.
 */
export interface Decl_IdentDecl {
  /** Required. The type of the identifier. */
  type?: Type;
  /**
   * The constant value of the identifier. If not specified, the identifier
   * must be supplied at evaluation time.
   */
  value?: Constant;
  /** Documentation string for the identifier. */
  doc: string;
}
export interface Decl_IdentDeclProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.IdentDecl";
  value: Uint8Array;
}
/**
 * Identifier declaration which specifies its type and optional `Expr` value.
 * 
 * An identifier without a value is a declaration that must be provided at
 * evaluation time. An identifier with a value should resolve to a constant,
 * but may be used in conjunction with other identifiers bound at evaluation
 * time.
 */
export interface Decl_IdentDeclAmino {
  /** Required. The type of the identifier. */
  type?: TypeAmino;
  /**
   * The constant value of the identifier. If not specified, the identifier
   * must be supplied at evaluation time.
   */
  value?: ConstantAmino;
  /** Documentation string for the identifier. */
  doc: string;
}
export interface Decl_IdentDeclAminoMsg {
  type: "/google.api.expr.v1alpha1.IdentDecl";
  value: Decl_IdentDeclAmino;
}
/**
 * Identifier declaration which specifies its type and optional `Expr` value.
 * 
 * An identifier without a value is a declaration that must be provided at
 * evaluation time. An identifier with a value should resolve to a constant,
 * but may be used in conjunction with other identifiers bound at evaluation
 * time.
 */
export interface Decl_IdentDeclSDKType {
  type?: TypeSDKType;
  value?: ConstantSDKType;
  doc: string;
}
/**
 * Function declaration specifies one or more overloads which indicate the
 * function's parameter types and return type.
 * 
 * Functions have no observable side-effects (there may be side-effects like
 * logging which are not observable from CEL).
 */
export interface Decl_FunctionDecl {
  /** Required. List of function overloads, must contain at least one overload. */
  overloads: Decl_FunctionDecl_Overload[];
}
export interface Decl_FunctionDeclProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.FunctionDecl";
  value: Uint8Array;
}
/**
 * Function declaration specifies one or more overloads which indicate the
 * function's parameter types and return type.
 * 
 * Functions have no observable side-effects (there may be side-effects like
 * logging which are not observable from CEL).
 */
export interface Decl_FunctionDeclAmino {
  /** Required. List of function overloads, must contain at least one overload. */
  overloads: Decl_FunctionDecl_OverloadAmino[];
}
export interface Decl_FunctionDeclAminoMsg {
  type: "/google.api.expr.v1alpha1.FunctionDecl";
  value: Decl_FunctionDeclAmino;
}
/**
 * Function declaration specifies one or more overloads which indicate the
 * function's parameter types and return type.
 * 
 * Functions have no observable side-effects (there may be side-effects like
 * logging which are not observable from CEL).
 */
export interface Decl_FunctionDeclSDKType {
  overloads: Decl_FunctionDecl_OverloadSDKType[];
}
/**
 * An overload indicates a function's parameter types and return type, and
 * may optionally include a function body described in terms of [Expr][google.api.expr.v1alpha1.Expr]
 * values.
 * 
 * Functions overloads are declared in either a function or method
 * call-style. For methods, the `params[0]` is the expected type of the
 * target receiver.
 * 
 * Overloads must have non-overlapping argument types after erasure of all
 * parameterized type variables (similar as type erasure in Java).
 */
export interface Decl_FunctionDecl_Overload {
  /**
   * Required. Globally unique overload name of the function which reflects
   * the function name and argument types.
   * 
   * This will be used by a [Reference][google.api.expr.v1alpha1.Reference] to indicate the `overload_id` that
   * was resolved for the function `name`.
   */
  overloadId: string;
  /**
   * List of function parameter [Type][google.api.expr.v1alpha1.Type] values.
   * 
   * Param types are disjoint after generic type parameters have been
   * replaced with the type `DYN`. Since the `DYN` type is compatible with
   * any other type, this means that if `A` is a type parameter, the
   * function types `int<A>` and `int<int>` are not disjoint. Likewise,
   * `map<string, string>` is not disjoint from `map<K, V>`.
   * 
   * When the `result_type` of a function is a generic type param, the
   * type param name also appears as the `type` of on at least one params.
   */
  params: Type[];
  /**
   * The type param names associated with the function declaration.
   * 
   * For example, `function ex<K,V>(K key, map<K, V> map) : V` would yield
   * the type params of `K, V`.
   */
  typeParams: string[];
  /**
   * Required. The result type of the function. For example, the operator
   * `string.isEmpty()` would have `result_type` of `kind: BOOL`.
   */
  resultType?: Type;
  /**
   * Whether the function is to be used in a method call-style `x.f(...)`
   * of a function call-style `f(x, ...)`.
   * 
   * For methods, the first parameter declaration, `params[0]` is the
   * expected type of the target receiver.
   */
  isInstanceFunction: boolean;
  /** Documentation string for the overload. */
  doc: string;
}
export interface Decl_FunctionDecl_OverloadProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.Overload";
  value: Uint8Array;
}
/**
 * An overload indicates a function's parameter types and return type, and
 * may optionally include a function body described in terms of [Expr][google.api.expr.v1alpha1.Expr]
 * values.
 * 
 * Functions overloads are declared in either a function or method
 * call-style. For methods, the `params[0]` is the expected type of the
 * target receiver.
 * 
 * Overloads must have non-overlapping argument types after erasure of all
 * parameterized type variables (similar as type erasure in Java).
 */
export interface Decl_FunctionDecl_OverloadAmino {
  /**
   * Required. Globally unique overload name of the function which reflects
   * the function name and argument types.
   * 
   * This will be used by a [Reference][google.api.expr.v1alpha1.Reference] to indicate the `overload_id` that
   * was resolved for the function `name`.
   */
  overload_id: string;
  /**
   * List of function parameter [Type][google.api.expr.v1alpha1.Type] values.
   * 
   * Param types are disjoint after generic type parameters have been
   * replaced with the type `DYN`. Since the `DYN` type is compatible with
   * any other type, this means that if `A` is a type parameter, the
   * function types `int<A>` and `int<int>` are not disjoint. Likewise,
   * `map<string, string>` is not disjoint from `map<K, V>`.
   * 
   * When the `result_type` of a function is a generic type param, the
   * type param name also appears as the `type` of on at least one params.
   */
  params: TypeAmino[];
  /**
   * The type param names associated with the function declaration.
   * 
   * For example, `function ex<K,V>(K key, map<K, V> map) : V` would yield
   * the type params of `K, V`.
   */
  type_params: string[];
  /**
   * Required. The result type of the function. For example, the operator
   * `string.isEmpty()` would have `result_type` of `kind: BOOL`.
   */
  result_type?: TypeAmino;
  /**
   * Whether the function is to be used in a method call-style `x.f(...)`
   * of a function call-style `f(x, ...)`.
   * 
   * For methods, the first parameter declaration, `params[0]` is the
   * expected type of the target receiver.
   */
  is_instance_function: boolean;
  /** Documentation string for the overload. */
  doc: string;
}
export interface Decl_FunctionDecl_OverloadAminoMsg {
  type: "/google.api.expr.v1alpha1.Overload";
  value: Decl_FunctionDecl_OverloadAmino;
}
/**
 * An overload indicates a function's parameter types and return type, and
 * may optionally include a function body described in terms of [Expr][google.api.expr.v1alpha1.Expr]
 * values.
 * 
 * Functions overloads are declared in either a function or method
 * call-style. For methods, the `params[0]` is the expected type of the
 * target receiver.
 * 
 * Overloads must have non-overlapping argument types after erasure of all
 * parameterized type variables (similar as type erasure in Java).
 */
export interface Decl_FunctionDecl_OverloadSDKType {
  overload_id: string;
  params: TypeSDKType[];
  type_params: string[];
  result_type?: TypeSDKType;
  is_instance_function: boolean;
  doc: string;
}
/** Describes a resolved reference to a declaration. */
export interface Reference {
  /** The fully qualified name of the declaration. */
  name: string;
  /**
   * For references to functions, this is a list of `Overload.overload_id`
   * values which match according to typing rules.
   * 
   * If the list has more than one element, overload resolution among the
   * presented candidates must happen at runtime because of dynamic types. The
   * type checker attempts to narrow down this list as much as possible.
   * 
   * Empty if this is not a reference to a [Decl.FunctionDecl][google.api.expr.v1alpha1.Decl.FunctionDecl].
   */
  overloadId: string[];
  /**
   * For references to constants, this may contain the value of the
   * constant if known at compile time.
   */
  value?: Constant;
}
export interface ReferenceProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.Reference";
  value: Uint8Array;
}
/** Describes a resolved reference to a declaration. */
export interface ReferenceAmino {
  /** The fully qualified name of the declaration. */
  name: string;
  /**
   * For references to functions, this is a list of `Overload.overload_id`
   * values which match according to typing rules.
   * 
   * If the list has more than one element, overload resolution among the
   * presented candidates must happen at runtime because of dynamic types. The
   * type checker attempts to narrow down this list as much as possible.
   * 
   * Empty if this is not a reference to a [Decl.FunctionDecl][google.api.expr.v1alpha1.Decl.FunctionDecl].
   */
  overload_id: string[];
  /**
   * For references to constants, this may contain the value of the
   * constant if known at compile time.
   */
  value?: ConstantAmino;
}
export interface ReferenceAminoMsg {
  type: "/google.api.expr.v1alpha1.Reference";
  value: ReferenceAmino;
}
/** Describes a resolved reference to a declaration. */
export interface ReferenceSDKType {
  name: string;
  overload_id: string[];
  value?: ConstantSDKType;
}
function createBaseCheckedExpr_ReferenceMapEntry(): CheckedExpr_ReferenceMapEntry {
  return {
    key: Long.ZERO,
    value: undefined
  };
}
export const CheckedExpr_ReferenceMapEntry = {
  encode(message: CheckedExpr_ReferenceMapEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.key.isZero()) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== undefined) {
      Reference.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CheckedExpr_ReferenceMapEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckedExpr_ReferenceMapEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = (reader.int64() as Long);
          break;
        case 2:
          message.value = Reference.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CheckedExpr_ReferenceMapEntry {
    return {
      key: isSet(object.key) ? Long.fromValue(object.key) : Long.ZERO,
      value: isSet(object.value) ? Reference.fromJSON(object.value) : undefined
    };
  },
  toJSON(message: CheckedExpr_ReferenceMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = (message.key || Long.ZERO).toString());
    message.value !== undefined && (obj.value = message.value ? Reference.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<CheckedExpr_ReferenceMapEntry>): CheckedExpr_ReferenceMapEntry {
    const message = createBaseCheckedExpr_ReferenceMapEntry();
    message.key = object.key !== undefined && object.key !== null ? Long.fromValue(object.key) : Long.ZERO;
    message.value = object.value !== undefined && object.value !== null ? Reference.fromPartial(object.value) : undefined;
    return message;
  },
  fromSDK(object: CheckedExpr_ReferenceMapEntrySDKType): CheckedExpr_ReferenceMapEntry {
    return {
      key: object?.key,
      value: object.value ? Reference.fromSDK(object.value) : undefined
    };
  },
  toSDK(message: CheckedExpr_ReferenceMapEntry): CheckedExpr_ReferenceMapEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    message.value !== undefined && (obj.value = message.value ? Reference.toSDK(message.value) : undefined);
    return obj;
  },
  fromAmino(object: CheckedExpr_ReferenceMapEntryAmino): CheckedExpr_ReferenceMapEntry {
    return {
      key: Long.fromString(object.key),
      value: object?.value ? Reference.fromAmino(object.value) : undefined
    };
  },
  toAmino(message: CheckedExpr_ReferenceMapEntry): CheckedExpr_ReferenceMapEntryAmino {
    const obj: any = {};
    obj.key = message.key ? message.key.toString() : undefined;
    obj.value = message.value ? Reference.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: CheckedExpr_ReferenceMapEntryAminoMsg): CheckedExpr_ReferenceMapEntry {
    return CheckedExpr_ReferenceMapEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: CheckedExpr_ReferenceMapEntryProtoMsg): CheckedExpr_ReferenceMapEntry {
    return CheckedExpr_ReferenceMapEntry.decode(message.value);
  },
  toProto(message: CheckedExpr_ReferenceMapEntry): Uint8Array {
    return CheckedExpr_ReferenceMapEntry.encode(message).finish();
  }
};
function createBaseCheckedExpr_TypeMapEntry(): CheckedExpr_TypeMapEntry {
  return {
    key: Long.ZERO,
    value: undefined
  };
}
export const CheckedExpr_TypeMapEntry = {
  encode(message: CheckedExpr_TypeMapEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.key.isZero()) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== undefined) {
      Type.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CheckedExpr_TypeMapEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckedExpr_TypeMapEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = (reader.int64() as Long);
          break;
        case 2:
          message.value = Type.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CheckedExpr_TypeMapEntry {
    return {
      key: isSet(object.key) ? Long.fromValue(object.key) : Long.ZERO,
      value: isSet(object.value) ? Type.fromJSON(object.value) : undefined
    };
  },
  toJSON(message: CheckedExpr_TypeMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = (message.key || Long.ZERO).toString());
    message.value !== undefined && (obj.value = message.value ? Type.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<CheckedExpr_TypeMapEntry>): CheckedExpr_TypeMapEntry {
    const message = createBaseCheckedExpr_TypeMapEntry();
    message.key = object.key !== undefined && object.key !== null ? Long.fromValue(object.key) : Long.ZERO;
    message.value = object.value !== undefined && object.value !== null ? Type.fromPartial(object.value) : undefined;
    return message;
  },
  fromSDK(object: CheckedExpr_TypeMapEntrySDKType): CheckedExpr_TypeMapEntry {
    return {
      key: object?.key,
      value: object.value ? Type.fromSDK(object.value) : undefined
    };
  },
  toSDK(message: CheckedExpr_TypeMapEntry): CheckedExpr_TypeMapEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    message.value !== undefined && (obj.value = message.value ? Type.toSDK(message.value) : undefined);
    return obj;
  },
  fromAmino(object: CheckedExpr_TypeMapEntryAmino): CheckedExpr_TypeMapEntry {
    return {
      key: Long.fromString(object.key),
      value: object?.value ? Type.fromAmino(object.value) : undefined
    };
  },
  toAmino(message: CheckedExpr_TypeMapEntry): CheckedExpr_TypeMapEntryAmino {
    const obj: any = {};
    obj.key = message.key ? message.key.toString() : undefined;
    obj.value = message.value ? Type.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: CheckedExpr_TypeMapEntryAminoMsg): CheckedExpr_TypeMapEntry {
    return CheckedExpr_TypeMapEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: CheckedExpr_TypeMapEntryProtoMsg): CheckedExpr_TypeMapEntry {
    return CheckedExpr_TypeMapEntry.decode(message.value);
  },
  toProto(message: CheckedExpr_TypeMapEntry): Uint8Array {
    return CheckedExpr_TypeMapEntry.encode(message).finish();
  }
};
function createBaseCheckedExpr(): CheckedExpr {
  return {
    referenceMap: {},
    typeMap: {},
    sourceInfo: undefined,
    exprVersion: "",
    expr: undefined
  };
}
export const CheckedExpr = {
  typeUrl: "/google.api.expr.v1alpha1.CheckedExpr",
  encode(message: CheckedExpr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.referenceMap).forEach(([key, value]) => {
      CheckedExpr_ReferenceMapEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(18).fork()).ldelim();
    });
    Object.entries(message.typeMap).forEach(([key, value]) => {
      CheckedExpr_TypeMapEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    if (message.sourceInfo !== undefined) {
      SourceInfo.encode(message.sourceInfo, writer.uint32(42).fork()).ldelim();
    }
    if (message.exprVersion !== "") {
      writer.uint32(50).string(message.exprVersion);
    }
    if (message.expr !== undefined) {
      Expr.encode(message.expr, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CheckedExpr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckedExpr();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          const entry2 = CheckedExpr_ReferenceMapEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.referenceMap[entry2.key] = entry2.value;
          }
          break;
        case 3:
          const entry3 = CheckedExpr_TypeMapEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.typeMap[entry3.key] = entry3.value;
          }
          break;
        case 5:
          message.sourceInfo = SourceInfo.decode(reader, reader.uint32());
          break;
        case 6:
          message.exprVersion = reader.string();
          break;
        case 4:
          message.expr = Expr.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CheckedExpr {
    return {
      referenceMap: isObject(object.referenceMap) ? Object.entries(object.referenceMap).reduce<{
        [key: Long]: Reference;
      }>((acc, [key, value]) => {
        acc[Number(key)] = Reference.fromJSON(value);
        return acc;
      }, {}) : {},
      typeMap: isObject(object.typeMap) ? Object.entries(object.typeMap).reduce<{
        [key: Long]: Type;
      }>((acc, [key, value]) => {
        acc[Number(key)] = Type.fromJSON(value);
        return acc;
      }, {}) : {},
      sourceInfo: isSet(object.sourceInfo) ? SourceInfo.fromJSON(object.sourceInfo) : undefined,
      exprVersion: isSet(object.exprVersion) ? String(object.exprVersion) : "",
      expr: isSet(object.expr) ? Expr.fromJSON(object.expr) : undefined
    };
  },
  toJSON(message: CheckedExpr): unknown {
    const obj: any = {};
    obj.referenceMap = {};
    if (message.referenceMap) {
      Object.entries(message.referenceMap).forEach(([k, v]) => {
        obj.referenceMap[k] = Reference.toJSON(v);
      });
    }
    obj.typeMap = {};
    if (message.typeMap) {
      Object.entries(message.typeMap).forEach(([k, v]) => {
        obj.typeMap[k] = Type.toJSON(v);
      });
    }
    message.sourceInfo !== undefined && (obj.sourceInfo = message.sourceInfo ? SourceInfo.toJSON(message.sourceInfo) : undefined);
    message.exprVersion !== undefined && (obj.exprVersion = message.exprVersion);
    message.expr !== undefined && (obj.expr = message.expr ? Expr.toJSON(message.expr) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<CheckedExpr>): CheckedExpr {
    const message = createBaseCheckedExpr();
    message.referenceMap = Object.entries(object.referenceMap ?? {}).reduce<{
      [key: Long]: Reference;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Reference.fromPartial(value);
      }
      return acc;
    }, {});
    message.typeMap = Object.entries(object.typeMap ?? {}).reduce<{
      [key: Long]: Type;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Type.fromPartial(value);
      }
      return acc;
    }, {});
    message.sourceInfo = object.sourceInfo !== undefined && object.sourceInfo !== null ? SourceInfo.fromPartial(object.sourceInfo) : undefined;
    message.exprVersion = object.exprVersion ?? "";
    message.expr = object.expr !== undefined && object.expr !== null ? Expr.fromPartial(object.expr) : undefined;
    return message;
  },
  fromSDK(object: CheckedExprSDKType): CheckedExpr {
    return {
      referenceMap: isObject(object.reference_map) ? Object.entries(object.reference_map).reduce<{
        [key: Long]: Reference;
      }>((acc, [key, value]) => {
        acc[Number(key)] = Reference.fromSDK(value);
        return acc;
      }, {}) : {},
      typeMap: isObject(object.type_map) ? Object.entries(object.type_map).reduce<{
        [key: Long]: Type;
      }>((acc, [key, value]) => {
        acc[Number(key)] = Type.fromSDK(value);
        return acc;
      }, {}) : {},
      sourceInfo: object.source_info ? SourceInfo.fromSDK(object.source_info) : undefined,
      exprVersion: object?.expr_version,
      expr: object.expr ? Expr.fromSDK(object.expr) : undefined
    };
  },
  toSDK(message: CheckedExpr): CheckedExprSDKType {
    const obj: any = {};
    obj.reference_map = {};
    if (message.referenceMap) {
      Object.entries(message.referenceMap).forEach(([k, v]) => {
        obj.reference_map[k] = Reference.toSDK(v);
      });
    }
    obj.type_map = {};
    if (message.typeMap) {
      Object.entries(message.typeMap).forEach(([k, v]) => {
        obj.type_map[k] = Type.toSDK(v);
      });
    }
    message.sourceInfo !== undefined && (obj.source_info = message.sourceInfo ? SourceInfo.toSDK(message.sourceInfo) : undefined);
    obj.expr_version = message.exprVersion;
    message.expr !== undefined && (obj.expr = message.expr ? Expr.toSDK(message.expr) : undefined);
    return obj;
  },
  fromAmino(object: CheckedExprAmino): CheckedExpr {
    return {
      referenceMap: isObject(object.reference_map) ? Object.entries(object.reference_map).reduce<{
        [key: Long]: Reference;
      }>((acc, [key, value]) => {
        acc[Number(key)] = Reference.fromAmino(value);
        return acc;
      }, {}) : {},
      typeMap: isObject(object.type_map) ? Object.entries(object.type_map).reduce<{
        [key: Long]: Type;
      }>((acc, [key, value]) => {
        acc[Number(key)] = Type.fromAmino(value);
        return acc;
      }, {}) : {},
      sourceInfo: object?.source_info ? SourceInfo.fromAmino(object.source_info) : undefined,
      exprVersion: object.expr_version,
      expr: object?.expr ? Expr.fromAmino(object.expr) : undefined
    };
  },
  toAmino(message: CheckedExpr): CheckedExprAmino {
    const obj: any = {};
    obj.reference_map = {};
    if (message.referenceMap) {
      Object.entries(message.referenceMap).forEach(([k, v]) => {
        obj.reference_map[k] = Reference.toAmino(v);
      });
    }
    obj.type_map = {};
    if (message.typeMap) {
      Object.entries(message.typeMap).forEach(([k, v]) => {
        obj.type_map[k] = Type.toAmino(v);
      });
    }
    obj.source_info = message.sourceInfo ? SourceInfo.toAmino(message.sourceInfo) : undefined;
    obj.expr_version = message.exprVersion;
    obj.expr = message.expr ? Expr.toAmino(message.expr) : undefined;
    return obj;
  },
  fromAminoMsg(object: CheckedExprAminoMsg): CheckedExpr {
    return CheckedExpr.fromAmino(object.value);
  },
  fromProtoMsg(message: CheckedExprProtoMsg): CheckedExpr {
    return CheckedExpr.decode(message.value);
  },
  toProto(message: CheckedExpr): Uint8Array {
    return CheckedExpr.encode(message).finish();
  },
  toProtoMsg(message: CheckedExpr): CheckedExprProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.CheckedExpr",
      value: CheckedExpr.encode(message).finish()
    };
  }
};
function createBaseType(): Type {
  return {
    dyn: undefined,
    null: undefined,
    primitive: undefined,
    wrapper: undefined,
    wellKnown: undefined,
    listType: undefined,
    mapType: undefined,
    function: undefined,
    messageType: undefined,
    typeParam: undefined,
    type: undefined,
    error: undefined,
    abstractType: undefined
  };
}
export const Type = {
  typeUrl: "/google.api.expr.v1alpha1.Type",
  encode(message: Type, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dyn !== undefined) {
      Empty.encode(message.dyn, writer.uint32(10).fork()).ldelim();
    }
    if (message.null !== undefined) {
      writer.uint32(16).int32(message.null);
    }
    if (message.primitive !== undefined) {
      writer.uint32(24).int32(message.primitive);
    }
    if (message.wrapper !== undefined) {
      writer.uint32(32).int32(message.wrapper);
    }
    if (message.wellKnown !== undefined) {
      writer.uint32(40).int32(message.wellKnown);
    }
    if (message.listType !== undefined) {
      Type_ListType.encode(message.listType, writer.uint32(50).fork()).ldelim();
    }
    if (message.mapType !== undefined) {
      Type_MapType.encode(message.mapType, writer.uint32(58).fork()).ldelim();
    }
    if (message.function !== undefined) {
      Type_FunctionType.encode(message.function, writer.uint32(66).fork()).ldelim();
    }
    if (message.messageType !== undefined) {
      writer.uint32(74).string(message.messageType);
    }
    if (message.typeParam !== undefined) {
      writer.uint32(82).string(message.typeParam);
    }
    if (message.type !== undefined) {
      Type.encode(message.type, writer.uint32(90).fork()).ldelim();
    }
    if (message.error !== undefined) {
      Empty.encode(message.error, writer.uint32(98).fork()).ldelim();
    }
    if (message.abstractType !== undefined) {
      Type_AbstractType.encode(message.abstractType, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Type {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dyn = Empty.decode(reader, reader.uint32());
          break;
        case 2:
          message.null = (reader.int32() as any);
          break;
        case 3:
          message.primitive = (reader.int32() as any);
          break;
        case 4:
          message.wrapper = (reader.int32() as any);
          break;
        case 5:
          message.wellKnown = (reader.int32() as any);
          break;
        case 6:
          message.listType = Type_ListType.decode(reader, reader.uint32());
          break;
        case 7:
          message.mapType = Type_MapType.decode(reader, reader.uint32());
          break;
        case 8:
          message.function = Type_FunctionType.decode(reader, reader.uint32());
          break;
        case 9:
          message.messageType = reader.string();
          break;
        case 10:
          message.typeParam = reader.string();
          break;
        case 11:
          message.type = Type.decode(reader, reader.uint32());
          break;
        case 12:
          message.error = Empty.decode(reader, reader.uint32());
          break;
        case 14:
          message.abstractType = Type_AbstractType.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Type {
    return {
      dyn: isSet(object.dyn) ? Empty.fromJSON(object.dyn) : undefined,
      null: isSet(object.null) ? nullValueFromJSON(object.null) : undefined,
      primitive: isSet(object.primitive) ? type_PrimitiveTypeFromJSON(object.primitive) : undefined,
      wrapper: isSet(object.wrapper) ? type_PrimitiveTypeFromJSON(object.wrapper) : undefined,
      wellKnown: isSet(object.wellKnown) ? type_WellKnownTypeFromJSON(object.wellKnown) : undefined,
      listType: isSet(object.listType) ? Type_ListType.fromJSON(object.listType) : undefined,
      mapType: isSet(object.mapType) ? Type_MapType.fromJSON(object.mapType) : undefined,
      function: isSet(object.function) ? Type_FunctionType.fromJSON(object.function) : undefined,
      messageType: isSet(object.messageType) ? String(object.messageType) : undefined,
      typeParam: isSet(object.typeParam) ? String(object.typeParam) : undefined,
      type: isSet(object.type) ? Type.fromJSON(object.type) : undefined,
      error: isSet(object.error) ? Empty.fromJSON(object.error) : undefined,
      abstractType: isSet(object.abstractType) ? Type_AbstractType.fromJSON(object.abstractType) : undefined
    };
  },
  toJSON(message: Type): unknown {
    const obj: any = {};
    message.dyn !== undefined && (obj.dyn = message.dyn ? Empty.toJSON(message.dyn) : undefined);
    message.null !== undefined && (obj.null = nullValueToJSON(message.null));
    message.primitive !== undefined && (obj.primitive = type_PrimitiveTypeToJSON(message.primitive));
    message.wrapper !== undefined && (obj.wrapper = type_PrimitiveTypeToJSON(message.wrapper));
    message.wellKnown !== undefined && (obj.wellKnown = type_WellKnownTypeToJSON(message.wellKnown));
    message.listType !== undefined && (obj.listType = message.listType ? Type_ListType.toJSON(message.listType) : undefined);
    message.mapType !== undefined && (obj.mapType = message.mapType ? Type_MapType.toJSON(message.mapType) : undefined);
    message.function !== undefined && (obj.function = message.function ? Type_FunctionType.toJSON(message.function) : undefined);
    message.messageType !== undefined && (obj.messageType = message.messageType);
    message.typeParam !== undefined && (obj.typeParam = message.typeParam);
    message.type !== undefined && (obj.type = message.type ? Type.toJSON(message.type) : undefined);
    message.error !== undefined && (obj.error = message.error ? Empty.toJSON(message.error) : undefined);
    message.abstractType !== undefined && (obj.abstractType = message.abstractType ? Type_AbstractType.toJSON(message.abstractType) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Type>): Type {
    const message = createBaseType();
    message.dyn = object.dyn !== undefined && object.dyn !== null ? Empty.fromPartial(object.dyn) : undefined;
    message.null = object.null ?? undefined;
    message.primitive = object.primitive ?? undefined;
    message.wrapper = object.wrapper ?? undefined;
    message.wellKnown = object.wellKnown ?? undefined;
    message.listType = object.listType !== undefined && object.listType !== null ? Type_ListType.fromPartial(object.listType) : undefined;
    message.mapType = object.mapType !== undefined && object.mapType !== null ? Type_MapType.fromPartial(object.mapType) : undefined;
    message.function = object.function !== undefined && object.function !== null ? Type_FunctionType.fromPartial(object.function) : undefined;
    message.messageType = object.messageType ?? undefined;
    message.typeParam = object.typeParam ?? undefined;
    message.type = object.type !== undefined && object.type !== null ? Type.fromPartial(object.type) : undefined;
    message.error = object.error !== undefined && object.error !== null ? Empty.fromPartial(object.error) : undefined;
    message.abstractType = object.abstractType !== undefined && object.abstractType !== null ? Type_AbstractType.fromPartial(object.abstractType) : undefined;
    return message;
  },
  fromSDK(object: TypeSDKType): Type {
    return {
      dyn: object.dyn ? Empty.fromSDK(object.dyn) : undefined,
      null: isSet(object.null) ? nullValueFromJSON(object.null) : undefined,
      primitive: isSet(object.primitive) ? type_PrimitiveTypeFromJSON(object.primitive) : undefined,
      wrapper: isSet(object.wrapper) ? type_PrimitiveTypeFromJSON(object.wrapper) : undefined,
      wellKnown: isSet(object.well_known) ? type_WellKnownTypeFromJSON(object.well_known) : undefined,
      listType: object.list_type ? Type_ListType.fromSDK(object.list_type) : undefined,
      mapType: object.map_type ? Type_MapType.fromSDK(object.map_type) : undefined,
      function: object.function ? Type_FunctionType.fromSDK(object.function) : undefined,
      messageType: object?.message_type,
      typeParam: object?.type_param,
      type: object.type ? Type.fromSDK(object.type) : undefined,
      error: object.error ? Empty.fromSDK(object.error) : undefined,
      abstractType: object.abstract_type ? Type_AbstractType.fromSDK(object.abstract_type) : undefined
    };
  },
  toSDK(message: Type): TypeSDKType {
    const obj: any = {};
    message.dyn !== undefined && (obj.dyn = message.dyn ? Empty.toSDK(message.dyn) : undefined);
    message.null !== undefined && (obj.null = nullValueToJSON(message.null));
    message.primitive !== undefined && (obj.primitive = type_PrimitiveTypeToJSON(message.primitive));
    message.wrapper !== undefined && (obj.wrapper = type_PrimitiveTypeToJSON(message.wrapper));
    message.wellKnown !== undefined && (obj.well_known = type_WellKnownTypeToJSON(message.wellKnown));
    message.listType !== undefined && (obj.list_type = message.listType ? Type_ListType.toSDK(message.listType) : undefined);
    message.mapType !== undefined && (obj.map_type = message.mapType ? Type_MapType.toSDK(message.mapType) : undefined);
    message.function !== undefined && (obj.function = message.function ? Type_FunctionType.toSDK(message.function) : undefined);
    obj.message_type = message.messageType;
    obj.type_param = message.typeParam;
    message.type !== undefined && (obj.type = message.type ? Type.toSDK(message.type) : undefined);
    message.error !== undefined && (obj.error = message.error ? Empty.toSDK(message.error) : undefined);
    message.abstractType !== undefined && (obj.abstract_type = message.abstractType ? Type_AbstractType.toSDK(message.abstractType) : undefined);
    return obj;
  },
  fromAmino(object: TypeAmino): Type {
    return {
      dyn: object?.dyn ? Empty.fromAmino(object.dyn) : undefined,
      null: isSet(object.null) ? nullValueFromJSON(object.null) : undefined,
      primitive: isSet(object.primitive) ? type_PrimitiveTypeFromJSON(object.primitive) : undefined,
      wrapper: isSet(object.wrapper) ? type_PrimitiveTypeFromJSON(object.wrapper) : undefined,
      wellKnown: isSet(object.well_known) ? type_WellKnownTypeFromJSON(object.well_known) : undefined,
      listType: object?.list_type ? Type_ListType.fromAmino(object.list_type) : undefined,
      mapType: object?.map_type ? Type_MapType.fromAmino(object.map_type) : undefined,
      function: object?.function ? Type_FunctionType.fromAmino(object.function) : undefined,
      messageType: object?.message_type,
      typeParam: object?.type_param,
      type: object?.type ? Type.fromAmino(object.type) : undefined,
      error: object?.error ? Empty.fromAmino(object.error) : undefined,
      abstractType: object?.abstract_type ? Type_AbstractType.fromAmino(object.abstract_type) : undefined
    };
  },
  toAmino(message: Type): TypeAmino {
    const obj: any = {};
    obj.dyn = message.dyn ? Empty.toAmino(message.dyn) : undefined;
    obj.null = message.null;
    obj.primitive = message.primitive;
    obj.wrapper = message.wrapper;
    obj.well_known = message.wellKnown;
    obj.list_type = message.listType ? Type_ListType.toAmino(message.listType) : undefined;
    obj.map_type = message.mapType ? Type_MapType.toAmino(message.mapType) : undefined;
    obj.function = message.function ? Type_FunctionType.toAmino(message.function) : undefined;
    obj.message_type = message.messageType;
    obj.type_param = message.typeParam;
    obj.type = message.type ? Type.toAmino(message.type) : undefined;
    obj.error = message.error ? Empty.toAmino(message.error) : undefined;
    obj.abstract_type = message.abstractType ? Type_AbstractType.toAmino(message.abstractType) : undefined;
    return obj;
  },
  fromAminoMsg(object: TypeAminoMsg): Type {
    return Type.fromAmino(object.value);
  },
  fromProtoMsg(message: TypeProtoMsg): Type {
    return Type.decode(message.value);
  },
  toProto(message: Type): Uint8Array {
    return Type.encode(message).finish();
  },
  toProtoMsg(message: Type): TypeProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.Type",
      value: Type.encode(message).finish()
    };
  }
};
function createBaseType_ListType(): Type_ListType {
  return {
    elemType: undefined
  };
}
export const Type_ListType = {
  typeUrl: "/google.api.expr.v1alpha1.ListType",
  encode(message: Type_ListType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.elemType !== undefined) {
      Type.encode(message.elemType, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Type_ListType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseType_ListType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.elemType = Type.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Type_ListType {
    return {
      elemType: isSet(object.elemType) ? Type.fromJSON(object.elemType) : undefined
    };
  },
  toJSON(message: Type_ListType): unknown {
    const obj: any = {};
    message.elemType !== undefined && (obj.elemType = message.elemType ? Type.toJSON(message.elemType) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Type_ListType>): Type_ListType {
    const message = createBaseType_ListType();
    message.elemType = object.elemType !== undefined && object.elemType !== null ? Type.fromPartial(object.elemType) : undefined;
    return message;
  },
  fromSDK(object: Type_ListTypeSDKType): Type_ListType {
    return {
      elemType: object.elem_type ? Type.fromSDK(object.elem_type) : undefined
    };
  },
  toSDK(message: Type_ListType): Type_ListTypeSDKType {
    const obj: any = {};
    message.elemType !== undefined && (obj.elem_type = message.elemType ? Type.toSDK(message.elemType) : undefined);
    return obj;
  },
  fromAmino(object: Type_ListTypeAmino): Type_ListType {
    return {
      elemType: object?.elem_type ? Type.fromAmino(object.elem_type) : undefined
    };
  },
  toAmino(message: Type_ListType): Type_ListTypeAmino {
    const obj: any = {};
    obj.elem_type = message.elemType ? Type.toAmino(message.elemType) : undefined;
    return obj;
  },
  fromAminoMsg(object: Type_ListTypeAminoMsg): Type_ListType {
    return Type_ListType.fromAmino(object.value);
  },
  fromProtoMsg(message: Type_ListTypeProtoMsg): Type_ListType {
    return Type_ListType.decode(message.value);
  },
  toProto(message: Type_ListType): Uint8Array {
    return Type_ListType.encode(message).finish();
  },
  toProtoMsg(message: Type_ListType): Type_ListTypeProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.ListType",
      value: Type_ListType.encode(message).finish()
    };
  }
};
function createBaseType_MapType(): Type_MapType {
  return {
    keyType: undefined,
    valueType: undefined
  };
}
export const Type_MapType = {
  typeUrl: "/google.api.expr.v1alpha1.MapType",
  encode(message: Type_MapType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyType !== undefined) {
      Type.encode(message.keyType, writer.uint32(10).fork()).ldelim();
    }
    if (message.valueType !== undefined) {
      Type.encode(message.valueType, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Type_MapType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseType_MapType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyType = Type.decode(reader, reader.uint32());
          break;
        case 2:
          message.valueType = Type.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Type_MapType {
    return {
      keyType: isSet(object.keyType) ? Type.fromJSON(object.keyType) : undefined,
      valueType: isSet(object.valueType) ? Type.fromJSON(object.valueType) : undefined
    };
  },
  toJSON(message: Type_MapType): unknown {
    const obj: any = {};
    message.keyType !== undefined && (obj.keyType = message.keyType ? Type.toJSON(message.keyType) : undefined);
    message.valueType !== undefined && (obj.valueType = message.valueType ? Type.toJSON(message.valueType) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Type_MapType>): Type_MapType {
    const message = createBaseType_MapType();
    message.keyType = object.keyType !== undefined && object.keyType !== null ? Type.fromPartial(object.keyType) : undefined;
    message.valueType = object.valueType !== undefined && object.valueType !== null ? Type.fromPartial(object.valueType) : undefined;
    return message;
  },
  fromSDK(object: Type_MapTypeSDKType): Type_MapType {
    return {
      keyType: object.key_type ? Type.fromSDK(object.key_type) : undefined,
      valueType: object.value_type ? Type.fromSDK(object.value_type) : undefined
    };
  },
  toSDK(message: Type_MapType): Type_MapTypeSDKType {
    const obj: any = {};
    message.keyType !== undefined && (obj.key_type = message.keyType ? Type.toSDK(message.keyType) : undefined);
    message.valueType !== undefined && (obj.value_type = message.valueType ? Type.toSDK(message.valueType) : undefined);
    return obj;
  },
  fromAmino(object: Type_MapTypeAmino): Type_MapType {
    return {
      keyType: object?.key_type ? Type.fromAmino(object.key_type) : undefined,
      valueType: object?.value_type ? Type.fromAmino(object.value_type) : undefined
    };
  },
  toAmino(message: Type_MapType): Type_MapTypeAmino {
    const obj: any = {};
    obj.key_type = message.keyType ? Type.toAmino(message.keyType) : undefined;
    obj.value_type = message.valueType ? Type.toAmino(message.valueType) : undefined;
    return obj;
  },
  fromAminoMsg(object: Type_MapTypeAminoMsg): Type_MapType {
    return Type_MapType.fromAmino(object.value);
  },
  fromProtoMsg(message: Type_MapTypeProtoMsg): Type_MapType {
    return Type_MapType.decode(message.value);
  },
  toProto(message: Type_MapType): Uint8Array {
    return Type_MapType.encode(message).finish();
  },
  toProtoMsg(message: Type_MapType): Type_MapTypeProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.MapType",
      value: Type_MapType.encode(message).finish()
    };
  }
};
function createBaseType_FunctionType(): Type_FunctionType {
  return {
    resultType: undefined,
    argTypes: []
  };
}
export const Type_FunctionType = {
  typeUrl: "/google.api.expr.v1alpha1.FunctionType",
  encode(message: Type_FunctionType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resultType !== undefined) {
      Type.encode(message.resultType, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.argTypes) {
      Type.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Type_FunctionType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseType_FunctionType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resultType = Type.decode(reader, reader.uint32());
          break;
        case 2:
          message.argTypes.push(Type.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Type_FunctionType {
    return {
      resultType: isSet(object.resultType) ? Type.fromJSON(object.resultType) : undefined,
      argTypes: Array.isArray(object?.argTypes) ? object.argTypes.map((e: any) => Type.fromJSON(e)) : []
    };
  },
  toJSON(message: Type_FunctionType): unknown {
    const obj: any = {};
    message.resultType !== undefined && (obj.resultType = message.resultType ? Type.toJSON(message.resultType) : undefined);
    if (message.argTypes) {
      obj.argTypes = message.argTypes.map(e => e ? Type.toJSON(e) : undefined);
    } else {
      obj.argTypes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Type_FunctionType>): Type_FunctionType {
    const message = createBaseType_FunctionType();
    message.resultType = object.resultType !== undefined && object.resultType !== null ? Type.fromPartial(object.resultType) : undefined;
    message.argTypes = object.argTypes?.map(e => Type.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: Type_FunctionTypeSDKType): Type_FunctionType {
    return {
      resultType: object.result_type ? Type.fromSDK(object.result_type) : undefined,
      argTypes: Array.isArray(object?.arg_types) ? object.arg_types.map((e: any) => Type.fromSDK(e)) : []
    };
  },
  toSDK(message: Type_FunctionType): Type_FunctionTypeSDKType {
    const obj: any = {};
    message.resultType !== undefined && (obj.result_type = message.resultType ? Type.toSDK(message.resultType) : undefined);
    if (message.argTypes) {
      obj.arg_types = message.argTypes.map(e => e ? Type.toSDK(e) : undefined);
    } else {
      obj.arg_types = [];
    }
    return obj;
  },
  fromAmino(object: Type_FunctionTypeAmino): Type_FunctionType {
    return {
      resultType: object?.result_type ? Type.fromAmino(object.result_type) : undefined,
      argTypes: Array.isArray(object?.arg_types) ? object.arg_types.map((e: any) => Type.fromAmino(e)) : []
    };
  },
  toAmino(message: Type_FunctionType): Type_FunctionTypeAmino {
    const obj: any = {};
    obj.result_type = message.resultType ? Type.toAmino(message.resultType) : undefined;
    if (message.argTypes) {
      obj.arg_types = message.argTypes.map(e => e ? Type.toAmino(e) : undefined);
    } else {
      obj.arg_types = [];
    }
    return obj;
  },
  fromAminoMsg(object: Type_FunctionTypeAminoMsg): Type_FunctionType {
    return Type_FunctionType.fromAmino(object.value);
  },
  fromProtoMsg(message: Type_FunctionTypeProtoMsg): Type_FunctionType {
    return Type_FunctionType.decode(message.value);
  },
  toProto(message: Type_FunctionType): Uint8Array {
    return Type_FunctionType.encode(message).finish();
  },
  toProtoMsg(message: Type_FunctionType): Type_FunctionTypeProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.FunctionType",
      value: Type_FunctionType.encode(message).finish()
    };
  }
};
function createBaseType_AbstractType(): Type_AbstractType {
  return {
    name: "",
    parameterTypes: []
  };
}
export const Type_AbstractType = {
  typeUrl: "/google.api.expr.v1alpha1.AbstractType",
  encode(message: Type_AbstractType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.parameterTypes) {
      Type.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Type_AbstractType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseType_AbstractType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.parameterTypes.push(Type.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Type_AbstractType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      parameterTypes: Array.isArray(object?.parameterTypes) ? object.parameterTypes.map((e: any) => Type.fromJSON(e)) : []
    };
  },
  toJSON(message: Type_AbstractType): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.parameterTypes) {
      obj.parameterTypes = message.parameterTypes.map(e => e ? Type.toJSON(e) : undefined);
    } else {
      obj.parameterTypes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Type_AbstractType>): Type_AbstractType {
    const message = createBaseType_AbstractType();
    message.name = object.name ?? "";
    message.parameterTypes = object.parameterTypes?.map(e => Type.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: Type_AbstractTypeSDKType): Type_AbstractType {
    return {
      name: object?.name,
      parameterTypes: Array.isArray(object?.parameter_types) ? object.parameter_types.map((e: any) => Type.fromSDK(e)) : []
    };
  },
  toSDK(message: Type_AbstractType): Type_AbstractTypeSDKType {
    const obj: any = {};
    obj.name = message.name;
    if (message.parameterTypes) {
      obj.parameter_types = message.parameterTypes.map(e => e ? Type.toSDK(e) : undefined);
    } else {
      obj.parameter_types = [];
    }
    return obj;
  },
  fromAmino(object: Type_AbstractTypeAmino): Type_AbstractType {
    return {
      name: object.name,
      parameterTypes: Array.isArray(object?.parameter_types) ? object.parameter_types.map((e: any) => Type.fromAmino(e)) : []
    };
  },
  toAmino(message: Type_AbstractType): Type_AbstractTypeAmino {
    const obj: any = {};
    obj.name = message.name;
    if (message.parameterTypes) {
      obj.parameter_types = message.parameterTypes.map(e => e ? Type.toAmino(e) : undefined);
    } else {
      obj.parameter_types = [];
    }
    return obj;
  },
  fromAminoMsg(object: Type_AbstractTypeAminoMsg): Type_AbstractType {
    return Type_AbstractType.fromAmino(object.value);
  },
  fromProtoMsg(message: Type_AbstractTypeProtoMsg): Type_AbstractType {
    return Type_AbstractType.decode(message.value);
  },
  toProto(message: Type_AbstractType): Uint8Array {
    return Type_AbstractType.encode(message).finish();
  },
  toProtoMsg(message: Type_AbstractType): Type_AbstractTypeProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.AbstractType",
      value: Type_AbstractType.encode(message).finish()
    };
  }
};
function createBaseDecl(): Decl {
  return {
    name: "",
    ident: undefined,
    function: undefined
  };
}
export const Decl = {
  typeUrl: "/google.api.expr.v1alpha1.Decl",
  encode(message: Decl, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.ident !== undefined) {
      Decl_IdentDecl.encode(message.ident, writer.uint32(18).fork()).ldelim();
    }
    if (message.function !== undefined) {
      Decl_FunctionDecl.encode(message.function, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Decl {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecl();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.ident = Decl_IdentDecl.decode(reader, reader.uint32());
          break;
        case 3:
          message.function = Decl_FunctionDecl.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Decl {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      ident: isSet(object.ident) ? Decl_IdentDecl.fromJSON(object.ident) : undefined,
      function: isSet(object.function) ? Decl_FunctionDecl.fromJSON(object.function) : undefined
    };
  },
  toJSON(message: Decl): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.ident !== undefined && (obj.ident = message.ident ? Decl_IdentDecl.toJSON(message.ident) : undefined);
    message.function !== undefined && (obj.function = message.function ? Decl_FunctionDecl.toJSON(message.function) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Decl>): Decl {
    const message = createBaseDecl();
    message.name = object.name ?? "";
    message.ident = object.ident !== undefined && object.ident !== null ? Decl_IdentDecl.fromPartial(object.ident) : undefined;
    message.function = object.function !== undefined && object.function !== null ? Decl_FunctionDecl.fromPartial(object.function) : undefined;
    return message;
  },
  fromSDK(object: DeclSDKType): Decl {
    return {
      name: object?.name,
      ident: object.ident ? Decl_IdentDecl.fromSDK(object.ident) : undefined,
      function: object.function ? Decl_FunctionDecl.fromSDK(object.function) : undefined
    };
  },
  toSDK(message: Decl): DeclSDKType {
    const obj: any = {};
    obj.name = message.name;
    message.ident !== undefined && (obj.ident = message.ident ? Decl_IdentDecl.toSDK(message.ident) : undefined);
    message.function !== undefined && (obj.function = message.function ? Decl_FunctionDecl.toSDK(message.function) : undefined);
    return obj;
  },
  fromAmino(object: DeclAmino): Decl {
    return {
      name: object.name,
      ident: object?.ident ? Decl_IdentDecl.fromAmino(object.ident) : undefined,
      function: object?.function ? Decl_FunctionDecl.fromAmino(object.function) : undefined
    };
  },
  toAmino(message: Decl): DeclAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.ident = message.ident ? Decl_IdentDecl.toAmino(message.ident) : undefined;
    obj.function = message.function ? Decl_FunctionDecl.toAmino(message.function) : undefined;
    return obj;
  },
  fromAminoMsg(object: DeclAminoMsg): Decl {
    return Decl.fromAmino(object.value);
  },
  fromProtoMsg(message: DeclProtoMsg): Decl {
    return Decl.decode(message.value);
  },
  toProto(message: Decl): Uint8Array {
    return Decl.encode(message).finish();
  },
  toProtoMsg(message: Decl): DeclProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.Decl",
      value: Decl.encode(message).finish()
    };
  }
};
function createBaseDecl_IdentDecl(): Decl_IdentDecl {
  return {
    type: undefined,
    value: undefined,
    doc: ""
  };
}
export const Decl_IdentDecl = {
  typeUrl: "/google.api.expr.v1alpha1.IdentDecl",
  encode(message: Decl_IdentDecl, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== undefined) {
      Type.encode(message.type, writer.uint32(10).fork()).ldelim();
    }
    if (message.value !== undefined) {
      Constant.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    if (message.doc !== "") {
      writer.uint32(26).string(message.doc);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Decl_IdentDecl {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecl_IdentDecl();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = Type.decode(reader, reader.uint32());
          break;
        case 2:
          message.value = Constant.decode(reader, reader.uint32());
          break;
        case 3:
          message.doc = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Decl_IdentDecl {
    return {
      type: isSet(object.type) ? Type.fromJSON(object.type) : undefined,
      value: isSet(object.value) ? Constant.fromJSON(object.value) : undefined,
      doc: isSet(object.doc) ? String(object.doc) : ""
    };
  },
  toJSON(message: Decl_IdentDecl): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type ? Type.toJSON(message.type) : undefined);
    message.value !== undefined && (obj.value = message.value ? Constant.toJSON(message.value) : undefined);
    message.doc !== undefined && (obj.doc = message.doc);
    return obj;
  },
  fromPartial(object: DeepPartial<Decl_IdentDecl>): Decl_IdentDecl {
    const message = createBaseDecl_IdentDecl();
    message.type = object.type !== undefined && object.type !== null ? Type.fromPartial(object.type) : undefined;
    message.value = object.value !== undefined && object.value !== null ? Constant.fromPartial(object.value) : undefined;
    message.doc = object.doc ?? "";
    return message;
  },
  fromSDK(object: Decl_IdentDeclSDKType): Decl_IdentDecl {
    return {
      type: object.type ? Type.fromSDK(object.type) : undefined,
      value: object.value ? Constant.fromSDK(object.value) : undefined,
      doc: object?.doc
    };
  },
  toSDK(message: Decl_IdentDecl): Decl_IdentDeclSDKType {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type ? Type.toSDK(message.type) : undefined);
    message.value !== undefined && (obj.value = message.value ? Constant.toSDK(message.value) : undefined);
    obj.doc = message.doc;
    return obj;
  },
  fromAmino(object: Decl_IdentDeclAmino): Decl_IdentDecl {
    return {
      type: object?.type ? Type.fromAmino(object.type) : undefined,
      value: object?.value ? Constant.fromAmino(object.value) : undefined,
      doc: object.doc
    };
  },
  toAmino(message: Decl_IdentDecl): Decl_IdentDeclAmino {
    const obj: any = {};
    obj.type = message.type ? Type.toAmino(message.type) : undefined;
    obj.value = message.value ? Constant.toAmino(message.value) : undefined;
    obj.doc = message.doc;
    return obj;
  },
  fromAminoMsg(object: Decl_IdentDeclAminoMsg): Decl_IdentDecl {
    return Decl_IdentDecl.fromAmino(object.value);
  },
  fromProtoMsg(message: Decl_IdentDeclProtoMsg): Decl_IdentDecl {
    return Decl_IdentDecl.decode(message.value);
  },
  toProto(message: Decl_IdentDecl): Uint8Array {
    return Decl_IdentDecl.encode(message).finish();
  },
  toProtoMsg(message: Decl_IdentDecl): Decl_IdentDeclProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.IdentDecl",
      value: Decl_IdentDecl.encode(message).finish()
    };
  }
};
function createBaseDecl_FunctionDecl(): Decl_FunctionDecl {
  return {
    overloads: []
  };
}
export const Decl_FunctionDecl = {
  typeUrl: "/google.api.expr.v1alpha1.FunctionDecl",
  encode(message: Decl_FunctionDecl, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.overloads) {
      Decl_FunctionDecl_Overload.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Decl_FunctionDecl {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecl_FunctionDecl();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.overloads.push(Decl_FunctionDecl_Overload.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Decl_FunctionDecl {
    return {
      overloads: Array.isArray(object?.overloads) ? object.overloads.map((e: any) => Decl_FunctionDecl_Overload.fromJSON(e)) : []
    };
  },
  toJSON(message: Decl_FunctionDecl): unknown {
    const obj: any = {};
    if (message.overloads) {
      obj.overloads = message.overloads.map(e => e ? Decl_FunctionDecl_Overload.toJSON(e) : undefined);
    } else {
      obj.overloads = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Decl_FunctionDecl>): Decl_FunctionDecl {
    const message = createBaseDecl_FunctionDecl();
    message.overloads = object.overloads?.map(e => Decl_FunctionDecl_Overload.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: Decl_FunctionDeclSDKType): Decl_FunctionDecl {
    return {
      overloads: Array.isArray(object?.overloads) ? object.overloads.map((e: any) => Decl_FunctionDecl_Overload.fromSDK(e)) : []
    };
  },
  toSDK(message: Decl_FunctionDecl): Decl_FunctionDeclSDKType {
    const obj: any = {};
    if (message.overloads) {
      obj.overloads = message.overloads.map(e => e ? Decl_FunctionDecl_Overload.toSDK(e) : undefined);
    } else {
      obj.overloads = [];
    }
    return obj;
  },
  fromAmino(object: Decl_FunctionDeclAmino): Decl_FunctionDecl {
    return {
      overloads: Array.isArray(object?.overloads) ? object.overloads.map((e: any) => Decl_FunctionDecl_Overload.fromAmino(e)) : []
    };
  },
  toAmino(message: Decl_FunctionDecl): Decl_FunctionDeclAmino {
    const obj: any = {};
    if (message.overloads) {
      obj.overloads = message.overloads.map(e => e ? Decl_FunctionDecl_Overload.toAmino(e) : undefined);
    } else {
      obj.overloads = [];
    }
    return obj;
  },
  fromAminoMsg(object: Decl_FunctionDeclAminoMsg): Decl_FunctionDecl {
    return Decl_FunctionDecl.fromAmino(object.value);
  },
  fromProtoMsg(message: Decl_FunctionDeclProtoMsg): Decl_FunctionDecl {
    return Decl_FunctionDecl.decode(message.value);
  },
  toProto(message: Decl_FunctionDecl): Uint8Array {
    return Decl_FunctionDecl.encode(message).finish();
  },
  toProtoMsg(message: Decl_FunctionDecl): Decl_FunctionDeclProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.FunctionDecl",
      value: Decl_FunctionDecl.encode(message).finish()
    };
  }
};
function createBaseDecl_FunctionDecl_Overload(): Decl_FunctionDecl_Overload {
  return {
    overloadId: "",
    params: [],
    typeParams: [],
    resultType: undefined,
    isInstanceFunction: false,
    doc: ""
  };
}
export const Decl_FunctionDecl_Overload = {
  typeUrl: "/google.api.expr.v1alpha1.Overload",
  encode(message: Decl_FunctionDecl_Overload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.overloadId !== "") {
      writer.uint32(10).string(message.overloadId);
    }
    for (const v of message.params) {
      Type.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.typeParams) {
      writer.uint32(26).string(v!);
    }
    if (message.resultType !== undefined) {
      Type.encode(message.resultType, writer.uint32(34).fork()).ldelim();
    }
    if (message.isInstanceFunction === true) {
      writer.uint32(40).bool(message.isInstanceFunction);
    }
    if (message.doc !== "") {
      writer.uint32(50).string(message.doc);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Decl_FunctionDecl_Overload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecl_FunctionDecl_Overload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.overloadId = reader.string();
          break;
        case 2:
          message.params.push(Type.decode(reader, reader.uint32()));
          break;
        case 3:
          message.typeParams.push(reader.string());
          break;
        case 4:
          message.resultType = Type.decode(reader, reader.uint32());
          break;
        case 5:
          message.isInstanceFunction = reader.bool();
          break;
        case 6:
          message.doc = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Decl_FunctionDecl_Overload {
    return {
      overloadId: isSet(object.overloadId) ? String(object.overloadId) : "",
      params: Array.isArray(object?.params) ? object.params.map((e: any) => Type.fromJSON(e)) : [],
      typeParams: Array.isArray(object?.typeParams) ? object.typeParams.map((e: any) => String(e)) : [],
      resultType: isSet(object.resultType) ? Type.fromJSON(object.resultType) : undefined,
      isInstanceFunction: isSet(object.isInstanceFunction) ? Boolean(object.isInstanceFunction) : false,
      doc: isSet(object.doc) ? String(object.doc) : ""
    };
  },
  toJSON(message: Decl_FunctionDecl_Overload): unknown {
    const obj: any = {};
    message.overloadId !== undefined && (obj.overloadId = message.overloadId);
    if (message.params) {
      obj.params = message.params.map(e => e ? Type.toJSON(e) : undefined);
    } else {
      obj.params = [];
    }
    if (message.typeParams) {
      obj.typeParams = message.typeParams.map(e => e);
    } else {
      obj.typeParams = [];
    }
    message.resultType !== undefined && (obj.resultType = message.resultType ? Type.toJSON(message.resultType) : undefined);
    message.isInstanceFunction !== undefined && (obj.isInstanceFunction = message.isInstanceFunction);
    message.doc !== undefined && (obj.doc = message.doc);
    return obj;
  },
  fromPartial(object: DeepPartial<Decl_FunctionDecl_Overload>): Decl_FunctionDecl_Overload {
    const message = createBaseDecl_FunctionDecl_Overload();
    message.overloadId = object.overloadId ?? "";
    message.params = object.params?.map(e => Type.fromPartial(e)) || [];
    message.typeParams = object.typeParams?.map(e => e) || [];
    message.resultType = object.resultType !== undefined && object.resultType !== null ? Type.fromPartial(object.resultType) : undefined;
    message.isInstanceFunction = object.isInstanceFunction ?? false;
    message.doc = object.doc ?? "";
    return message;
  },
  fromSDK(object: Decl_FunctionDecl_OverloadSDKType): Decl_FunctionDecl_Overload {
    return {
      overloadId: object?.overload_id,
      params: Array.isArray(object?.params) ? object.params.map((e: any) => Type.fromSDK(e)) : [],
      typeParams: Array.isArray(object?.type_params) ? object.type_params.map((e: any) => e) : [],
      resultType: object.result_type ? Type.fromSDK(object.result_type) : undefined,
      isInstanceFunction: object?.is_instance_function,
      doc: object?.doc
    };
  },
  toSDK(message: Decl_FunctionDecl_Overload): Decl_FunctionDecl_OverloadSDKType {
    const obj: any = {};
    obj.overload_id = message.overloadId;
    if (message.params) {
      obj.params = message.params.map(e => e ? Type.toSDK(e) : undefined);
    } else {
      obj.params = [];
    }
    if (message.typeParams) {
      obj.type_params = message.typeParams.map(e => e);
    } else {
      obj.type_params = [];
    }
    message.resultType !== undefined && (obj.result_type = message.resultType ? Type.toSDK(message.resultType) : undefined);
    obj.is_instance_function = message.isInstanceFunction;
    obj.doc = message.doc;
    return obj;
  },
  fromAmino(object: Decl_FunctionDecl_OverloadAmino): Decl_FunctionDecl_Overload {
    return {
      overloadId: object.overload_id,
      params: Array.isArray(object?.params) ? object.params.map((e: any) => Type.fromAmino(e)) : [],
      typeParams: Array.isArray(object?.type_params) ? object.type_params.map((e: any) => e) : [],
      resultType: object?.result_type ? Type.fromAmino(object.result_type) : undefined,
      isInstanceFunction: object.is_instance_function,
      doc: object.doc
    };
  },
  toAmino(message: Decl_FunctionDecl_Overload): Decl_FunctionDecl_OverloadAmino {
    const obj: any = {};
    obj.overload_id = message.overloadId;
    if (message.params) {
      obj.params = message.params.map(e => e ? Type.toAmino(e) : undefined);
    } else {
      obj.params = [];
    }
    if (message.typeParams) {
      obj.type_params = message.typeParams.map(e => e);
    } else {
      obj.type_params = [];
    }
    obj.result_type = message.resultType ? Type.toAmino(message.resultType) : undefined;
    obj.is_instance_function = message.isInstanceFunction;
    obj.doc = message.doc;
    return obj;
  },
  fromAminoMsg(object: Decl_FunctionDecl_OverloadAminoMsg): Decl_FunctionDecl_Overload {
    return Decl_FunctionDecl_Overload.fromAmino(object.value);
  },
  fromProtoMsg(message: Decl_FunctionDecl_OverloadProtoMsg): Decl_FunctionDecl_Overload {
    return Decl_FunctionDecl_Overload.decode(message.value);
  },
  toProto(message: Decl_FunctionDecl_Overload): Uint8Array {
    return Decl_FunctionDecl_Overload.encode(message).finish();
  },
  toProtoMsg(message: Decl_FunctionDecl_Overload): Decl_FunctionDecl_OverloadProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.Overload",
      value: Decl_FunctionDecl_Overload.encode(message).finish()
    };
  }
};
function createBaseReference(): Reference {
  return {
    name: "",
    overloadId: [],
    value: undefined
  };
}
export const Reference = {
  typeUrl: "/google.api.expr.v1alpha1.Reference",
  encode(message: Reference, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.overloadId) {
      writer.uint32(26).string(v!);
    }
    if (message.value !== undefined) {
      Constant.encode(message.value, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Reference {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 3:
          message.overloadId.push(reader.string());
          break;
        case 4:
          message.value = Constant.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Reference {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      overloadId: Array.isArray(object?.overloadId) ? object.overloadId.map((e: any) => String(e)) : [],
      value: isSet(object.value) ? Constant.fromJSON(object.value) : undefined
    };
  },
  toJSON(message: Reference): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.overloadId) {
      obj.overloadId = message.overloadId.map(e => e);
    } else {
      obj.overloadId = [];
    }
    message.value !== undefined && (obj.value = message.value ? Constant.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Reference>): Reference {
    const message = createBaseReference();
    message.name = object.name ?? "";
    message.overloadId = object.overloadId?.map(e => e) || [];
    message.value = object.value !== undefined && object.value !== null ? Constant.fromPartial(object.value) : undefined;
    return message;
  },
  fromSDK(object: ReferenceSDKType): Reference {
    return {
      name: object?.name,
      overloadId: Array.isArray(object?.overload_id) ? object.overload_id.map((e: any) => e) : [],
      value: object.value ? Constant.fromSDK(object.value) : undefined
    };
  },
  toSDK(message: Reference): ReferenceSDKType {
    const obj: any = {};
    obj.name = message.name;
    if (message.overloadId) {
      obj.overload_id = message.overloadId.map(e => e);
    } else {
      obj.overload_id = [];
    }
    message.value !== undefined && (obj.value = message.value ? Constant.toSDK(message.value) : undefined);
    return obj;
  },
  fromAmino(object: ReferenceAmino): Reference {
    return {
      name: object.name,
      overloadId: Array.isArray(object?.overload_id) ? object.overload_id.map((e: any) => e) : [],
      value: object?.value ? Constant.fromAmino(object.value) : undefined
    };
  },
  toAmino(message: Reference): ReferenceAmino {
    const obj: any = {};
    obj.name = message.name;
    if (message.overloadId) {
      obj.overload_id = message.overloadId.map(e => e);
    } else {
      obj.overload_id = [];
    }
    obj.value = message.value ? Constant.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: ReferenceAminoMsg): Reference {
    return Reference.fromAmino(object.value);
  },
  fromProtoMsg(message: ReferenceProtoMsg): Reference {
    return Reference.decode(message.value);
  },
  toProto(message: Reference): Uint8Array {
    return Reference.encode(message).finish();
  },
  toProtoMsg(message: Reference): ReferenceProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.Reference",
      value: Reference.encode(message).finish()
    };
  }
};