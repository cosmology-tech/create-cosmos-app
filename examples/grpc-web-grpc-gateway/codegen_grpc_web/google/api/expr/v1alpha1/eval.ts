import { Value, ValueAmino, ValueSDKType } from "./value";
import { Status, StatusAmino, StatusSDKType } from "../../../rpc/status";
import { Long, DeepPartial, isSet } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "google.api.expr.v1alpha1";
/**
 * The state of an evaluation.
 * 
 * Can represent an inital, partial, or completed state of evaluation.
 */
export interface EvalState {
  /** The unique values referenced in this message. */
  values: ExprValue[];
  /**
   * An ordered list of results.
   * 
   * Tracks the flow of evaluation through the expression.
   * May be sparse.
   */
  results: EvalState_Result[];
}
export interface EvalStateProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.EvalState";
  value: Uint8Array;
}
/**
 * The state of an evaluation.
 * 
 * Can represent an inital, partial, or completed state of evaluation.
 */
export interface EvalStateAmino {
  /** The unique values referenced in this message. */
  values: ExprValueAmino[];
  /**
   * An ordered list of results.
   * 
   * Tracks the flow of evaluation through the expression.
   * May be sparse.
   */
  results: EvalState_ResultAmino[];
}
export interface EvalStateAminoMsg {
  type: "/google.api.expr.v1alpha1.EvalState";
  value: EvalStateAmino;
}
/**
 * The state of an evaluation.
 * 
 * Can represent an inital, partial, or completed state of evaluation.
 */
export interface EvalStateSDKType {
  values: ExprValueSDKType[];
  results: EvalState_ResultSDKType[];
}
/** A single evalution result. */
export interface EvalState_Result {
  /** The id of the expression this result if for. */
  expr: Long;
  /** The index in `values` of the resulting value. */
  value: Long;
}
export interface EvalState_ResultProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.Result";
  value: Uint8Array;
}
/** A single evalution result. */
export interface EvalState_ResultAmino {
  /** The id of the expression this result if for. */
  expr: string;
  /** The index in `values` of the resulting value. */
  value: string;
}
export interface EvalState_ResultAminoMsg {
  type: "/google.api.expr.v1alpha1.Result";
  value: EvalState_ResultAmino;
}
/** A single evalution result. */
export interface EvalState_ResultSDKType {
  expr: Long;
  value: Long;
}
/** The value of an evaluated expression. */
export interface ExprValue {
  /** A concrete value. */
  value?: Value;
  /**
   * The set of errors in the critical path of evalution.
   * 
   * Only errors in the critical path are included. For example,
   * `(<error1> || true) && <error2>` will only result in `<error2>`,
   * while `<error1> || <error2>` will result in both `<error1>` and
   * `<error2>`.
   * 
   * Errors cause by the presence of other errors are not included in the
   * set. For example `<error1>.foo`, `foo(<error1>)`, and `<error1> + 1` will
   * only result in `<error1>`.
   * 
   * Multiple errors *might* be included when evaluation could result
   * in different errors. For example `<error1> + <error2>` and
   * `foo(<error1>, <error2>)` may result in `<error1>`, `<error2>` or both.
   * The exact subset of errors included for this case is unspecified and
   * depends on the implementation details of the evaluator.
   */
  error?: ErrorSet;
  /**
   * The set of unknowns in the critical path of evaluation.
   * 
   * Unknown behaves identically to Error with regards to propagation.
   * Specifically, only unknowns in the critical path are included, unknowns
   * caused by the presence of other unknowns are not included, and multiple
   * unknowns *might* be included included when evaluation could result in
   * different unknowns. For example:
   * 
   *     (<unknown[1]> || true) && <unknown[2]> -> <unknown[2]>
   *     <unknown[1]> || <unknown[2]> -> <unknown[1,2]>
   *     <unknown[1]>.foo -> <unknown[1]>
   *     foo(<unknown[1]>) -> <unknown[1]>
   *     <unknown[1]> + <unknown[2]> -> <unknown[1]> or <unknown[2[>
   * 
   * Unknown takes precidence over Error in cases where a `Value` can short
   * circuit the result:
   * 
   *     <error> || <unknown> -> <unknown>
   *     <error> && <unknown> -> <unknown>
   * 
   * Errors take precidence in all other cases:
   * 
   *     <unknown> + <error> -> <error>
   *     foo(<unknown>, <error>) -> <error>
   */
  unknown?: UnknownSet;
}
export interface ExprValueProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.ExprValue";
  value: Uint8Array;
}
/** The value of an evaluated expression. */
export interface ExprValueAmino {
  /** A concrete value. */
  value?: ValueAmino;
  /**
   * The set of errors in the critical path of evalution.
   * 
   * Only errors in the critical path are included. For example,
   * `(<error1> || true) && <error2>` will only result in `<error2>`,
   * while `<error1> || <error2>` will result in both `<error1>` and
   * `<error2>`.
   * 
   * Errors cause by the presence of other errors are not included in the
   * set. For example `<error1>.foo`, `foo(<error1>)`, and `<error1> + 1` will
   * only result in `<error1>`.
   * 
   * Multiple errors *might* be included when evaluation could result
   * in different errors. For example `<error1> + <error2>` and
   * `foo(<error1>, <error2>)` may result in `<error1>`, `<error2>` or both.
   * The exact subset of errors included for this case is unspecified and
   * depends on the implementation details of the evaluator.
   */
  error?: ErrorSetAmino;
  /**
   * The set of unknowns in the critical path of evaluation.
   * 
   * Unknown behaves identically to Error with regards to propagation.
   * Specifically, only unknowns in the critical path are included, unknowns
   * caused by the presence of other unknowns are not included, and multiple
   * unknowns *might* be included included when evaluation could result in
   * different unknowns. For example:
   * 
   *     (<unknown[1]> || true) && <unknown[2]> -> <unknown[2]>
   *     <unknown[1]> || <unknown[2]> -> <unknown[1,2]>
   *     <unknown[1]>.foo -> <unknown[1]>
   *     foo(<unknown[1]>) -> <unknown[1]>
   *     <unknown[1]> + <unknown[2]> -> <unknown[1]> or <unknown[2[>
   * 
   * Unknown takes precidence over Error in cases where a `Value` can short
   * circuit the result:
   * 
   *     <error> || <unknown> -> <unknown>
   *     <error> && <unknown> -> <unknown>
   * 
   * Errors take precidence in all other cases:
   * 
   *     <unknown> + <error> -> <error>
   *     foo(<unknown>, <error>) -> <error>
   */
  unknown?: UnknownSetAmino;
}
export interface ExprValueAminoMsg {
  type: "/google.api.expr.v1alpha1.ExprValue";
  value: ExprValueAmino;
}
/** The value of an evaluated expression. */
export interface ExprValueSDKType {
  value?: ValueSDKType;
  error?: ErrorSetSDKType;
  unknown?: UnknownSetSDKType;
}
/**
 * A set of errors.
 * 
 * The errors included depend on the context. See `ExprValue.error`.
 */
export interface ErrorSet {
  /** The errors in the set. */
  errors: Status[];
}
export interface ErrorSetProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.ErrorSet";
  value: Uint8Array;
}
/**
 * A set of errors.
 * 
 * The errors included depend on the context. See `ExprValue.error`.
 */
export interface ErrorSetAmino {
  /** The errors in the set. */
  errors: StatusAmino[];
}
export interface ErrorSetAminoMsg {
  type: "/google.api.expr.v1alpha1.ErrorSet";
  value: ErrorSetAmino;
}
/**
 * A set of errors.
 * 
 * The errors included depend on the context. See `ExprValue.error`.
 */
export interface ErrorSetSDKType {
  errors: StatusSDKType[];
}
/**
 * A set of expressions for which the value is unknown.
 * 
 * The unknowns included depend on the context. See `ExprValue.unknown`.
 */
export interface UnknownSet {
  /** The ids of the expressions with unknown values. */
  exprs: Long[];
}
export interface UnknownSetProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.UnknownSet";
  value: Uint8Array;
}
/**
 * A set of expressions for which the value is unknown.
 * 
 * The unknowns included depend on the context. See `ExprValue.unknown`.
 */
export interface UnknownSetAmino {
  /** The ids of the expressions with unknown values. */
  exprs: string[];
}
export interface UnknownSetAminoMsg {
  type: "/google.api.expr.v1alpha1.UnknownSet";
  value: UnknownSetAmino;
}
/**
 * A set of expressions for which the value is unknown.
 * 
 * The unknowns included depend on the context. See `ExprValue.unknown`.
 */
export interface UnknownSetSDKType {
  exprs: Long[];
}
function createBaseEvalState(): EvalState {
  return {
    values: [],
    results: []
  };
}
export const EvalState = {
  typeUrl: "/google.api.expr.v1alpha1.EvalState",
  encode(message: EvalState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.values) {
      ExprValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.results) {
      EvalState_Result.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EvalState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvalState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(ExprValue.decode(reader, reader.uint32()));
          break;
        case 3:
          message.results.push(EvalState_Result.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EvalState {
    return {
      values: Array.isArray(object?.values) ? object.values.map((e: any) => ExprValue.fromJSON(e)) : [],
      results: Array.isArray(object?.results) ? object.results.map((e: any) => EvalState_Result.fromJSON(e)) : []
    };
  },
  toJSON(message: EvalState): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map(e => e ? ExprValue.toJSON(e) : undefined);
    } else {
      obj.values = [];
    }
    if (message.results) {
      obj.results = message.results.map(e => e ? EvalState_Result.toJSON(e) : undefined);
    } else {
      obj.results = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<EvalState>): EvalState {
    const message = createBaseEvalState();
    message.values = object.values?.map(e => ExprValue.fromPartial(e)) || [];
    message.results = object.results?.map(e => EvalState_Result.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: EvalStateSDKType): EvalState {
    return {
      values: Array.isArray(object?.values) ? object.values.map((e: any) => ExprValue.fromSDK(e)) : [],
      results: Array.isArray(object?.results) ? object.results.map((e: any) => EvalState_Result.fromSDK(e)) : []
    };
  },
  toSDK(message: EvalState): EvalStateSDKType {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map(e => e ? ExprValue.toSDK(e) : undefined);
    } else {
      obj.values = [];
    }
    if (message.results) {
      obj.results = message.results.map(e => e ? EvalState_Result.toSDK(e) : undefined);
    } else {
      obj.results = [];
    }
    return obj;
  },
  fromAmino(object: EvalStateAmino): EvalState {
    return {
      values: Array.isArray(object?.values) ? object.values.map((e: any) => ExprValue.fromAmino(e)) : [],
      results: Array.isArray(object?.results) ? object.results.map((e: any) => EvalState_Result.fromAmino(e)) : []
    };
  },
  toAmino(message: EvalState): EvalStateAmino {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map(e => e ? ExprValue.toAmino(e) : undefined);
    } else {
      obj.values = [];
    }
    if (message.results) {
      obj.results = message.results.map(e => e ? EvalState_Result.toAmino(e) : undefined);
    } else {
      obj.results = [];
    }
    return obj;
  },
  fromAminoMsg(object: EvalStateAminoMsg): EvalState {
    return EvalState.fromAmino(object.value);
  },
  fromProtoMsg(message: EvalStateProtoMsg): EvalState {
    return EvalState.decode(message.value);
  },
  toProto(message: EvalState): Uint8Array {
    return EvalState.encode(message).finish();
  },
  toProtoMsg(message: EvalState): EvalStateProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.EvalState",
      value: EvalState.encode(message).finish()
    };
  }
};
function createBaseEvalState_Result(): EvalState_Result {
  return {
    expr: Long.ZERO,
    value: Long.ZERO
  };
}
export const EvalState_Result = {
  typeUrl: "/google.api.expr.v1alpha1.Result",
  encode(message: EvalState_Result, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.expr.isZero()) {
      writer.uint32(8).int64(message.expr);
    }
    if (!message.value.isZero()) {
      writer.uint32(16).int64(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EvalState_Result {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvalState_Result();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.expr = (reader.int64() as Long);
          break;
        case 2:
          message.value = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EvalState_Result {
    return {
      expr: isSet(object.expr) ? Long.fromValue(object.expr) : Long.ZERO,
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.ZERO
    };
  },
  toJSON(message: EvalState_Result): unknown {
    const obj: any = {};
    message.expr !== undefined && (obj.expr = (message.expr || Long.ZERO).toString());
    message.value !== undefined && (obj.value = (message.value || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<EvalState_Result>): EvalState_Result {
    const message = createBaseEvalState_Result();
    message.expr = object.expr !== undefined && object.expr !== null ? Long.fromValue(object.expr) : Long.ZERO;
    message.value = object.value !== undefined && object.value !== null ? Long.fromValue(object.value) : Long.ZERO;
    return message;
  },
  fromSDK(object: EvalState_ResultSDKType): EvalState_Result {
    return {
      expr: object?.expr,
      value: object?.value
    };
  },
  toSDK(message: EvalState_Result): EvalState_ResultSDKType {
    const obj: any = {};
    obj.expr = message.expr;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: EvalState_ResultAmino): EvalState_Result {
    return {
      expr: Long.fromString(object.expr),
      value: Long.fromString(object.value)
    };
  },
  toAmino(message: EvalState_Result): EvalState_ResultAmino {
    const obj: any = {};
    obj.expr = message.expr ? message.expr.toString() : undefined;
    obj.value = message.value ? message.value.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EvalState_ResultAminoMsg): EvalState_Result {
    return EvalState_Result.fromAmino(object.value);
  },
  fromProtoMsg(message: EvalState_ResultProtoMsg): EvalState_Result {
    return EvalState_Result.decode(message.value);
  },
  toProto(message: EvalState_Result): Uint8Array {
    return EvalState_Result.encode(message).finish();
  },
  toProtoMsg(message: EvalState_Result): EvalState_ResultProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.Result",
      value: EvalState_Result.encode(message).finish()
    };
  }
};
function createBaseExprValue(): ExprValue {
  return {
    value: undefined,
    error: undefined,
    unknown: undefined
  };
}
export const ExprValue = {
  typeUrl: "/google.api.expr.v1alpha1.ExprValue",
  encode(message: ExprValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      Value.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      ErrorSet.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    if (message.unknown !== undefined) {
      UnknownSet.encode(message.unknown, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ExprValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExprValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = Value.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = ErrorSet.decode(reader, reader.uint32());
          break;
        case 3:
          message.unknown = UnknownSet.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExprValue {
    return {
      value: isSet(object.value) ? Value.fromJSON(object.value) : undefined,
      error: isSet(object.error) ? ErrorSet.fromJSON(object.error) : undefined,
      unknown: isSet(object.unknown) ? UnknownSet.fromJSON(object.unknown) : undefined
    };
  },
  toJSON(message: ExprValue): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value ? Value.toJSON(message.value) : undefined);
    message.error !== undefined && (obj.error = message.error ? ErrorSet.toJSON(message.error) : undefined);
    message.unknown !== undefined && (obj.unknown = message.unknown ? UnknownSet.toJSON(message.unknown) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ExprValue>): ExprValue {
    const message = createBaseExprValue();
    message.value = object.value !== undefined && object.value !== null ? Value.fromPartial(object.value) : undefined;
    message.error = object.error !== undefined && object.error !== null ? ErrorSet.fromPartial(object.error) : undefined;
    message.unknown = object.unknown !== undefined && object.unknown !== null ? UnknownSet.fromPartial(object.unknown) : undefined;
    return message;
  },
  fromSDK(object: ExprValueSDKType): ExprValue {
    return {
      value: object.value ? Value.fromSDK(object.value) : undefined,
      error: object.error ? ErrorSet.fromSDK(object.error) : undefined,
      unknown: object.unknown ? UnknownSet.fromSDK(object.unknown) : undefined
    };
  },
  toSDK(message: ExprValue): ExprValueSDKType {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value ? Value.toSDK(message.value) : undefined);
    message.error !== undefined && (obj.error = message.error ? ErrorSet.toSDK(message.error) : undefined);
    message.unknown !== undefined && (obj.unknown = message.unknown ? UnknownSet.toSDK(message.unknown) : undefined);
    return obj;
  },
  fromAmino(object: ExprValueAmino): ExprValue {
    return {
      value: object?.value ? Value.fromAmino(object.value) : undefined,
      error: object?.error ? ErrorSet.fromAmino(object.error) : undefined,
      unknown: object?.unknown ? UnknownSet.fromAmino(object.unknown) : undefined
    };
  },
  toAmino(message: ExprValue): ExprValueAmino {
    const obj: any = {};
    obj.value = message.value ? Value.toAmino(message.value) : undefined;
    obj.error = message.error ? ErrorSet.toAmino(message.error) : undefined;
    obj.unknown = message.unknown ? UnknownSet.toAmino(message.unknown) : undefined;
    return obj;
  },
  fromAminoMsg(object: ExprValueAminoMsg): ExprValue {
    return ExprValue.fromAmino(object.value);
  },
  fromProtoMsg(message: ExprValueProtoMsg): ExprValue {
    return ExprValue.decode(message.value);
  },
  toProto(message: ExprValue): Uint8Array {
    return ExprValue.encode(message).finish();
  },
  toProtoMsg(message: ExprValue): ExprValueProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.ExprValue",
      value: ExprValue.encode(message).finish()
    };
  }
};
function createBaseErrorSet(): ErrorSet {
  return {
    errors: []
  };
}
export const ErrorSet = {
  typeUrl: "/google.api.expr.v1alpha1.ErrorSet",
  encode(message: ErrorSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.errors) {
      Status.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ErrorSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseErrorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.errors.push(Status.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ErrorSet {
    return {
      errors: Array.isArray(object?.errors) ? object.errors.map((e: any) => Status.fromJSON(e)) : []
    };
  },
  toJSON(message: ErrorSet): unknown {
    const obj: any = {};
    if (message.errors) {
      obj.errors = message.errors.map(e => e ? Status.toJSON(e) : undefined);
    } else {
      obj.errors = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ErrorSet>): ErrorSet {
    const message = createBaseErrorSet();
    message.errors = object.errors?.map(e => Status.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ErrorSetSDKType): ErrorSet {
    return {
      errors: Array.isArray(object?.errors) ? object.errors.map((e: any) => Status.fromSDK(e)) : []
    };
  },
  toSDK(message: ErrorSet): ErrorSetSDKType {
    const obj: any = {};
    if (message.errors) {
      obj.errors = message.errors.map(e => e ? Status.toSDK(e) : undefined);
    } else {
      obj.errors = [];
    }
    return obj;
  },
  fromAmino(object: ErrorSetAmino): ErrorSet {
    return {
      errors: Array.isArray(object?.errors) ? object.errors.map((e: any) => Status.fromAmino(e)) : []
    };
  },
  toAmino(message: ErrorSet): ErrorSetAmino {
    const obj: any = {};
    if (message.errors) {
      obj.errors = message.errors.map(e => e ? Status.toAmino(e) : undefined);
    } else {
      obj.errors = [];
    }
    return obj;
  },
  fromAminoMsg(object: ErrorSetAminoMsg): ErrorSet {
    return ErrorSet.fromAmino(object.value);
  },
  fromProtoMsg(message: ErrorSetProtoMsg): ErrorSet {
    return ErrorSet.decode(message.value);
  },
  toProto(message: ErrorSet): Uint8Array {
    return ErrorSet.encode(message).finish();
  },
  toProtoMsg(message: ErrorSet): ErrorSetProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.ErrorSet",
      value: ErrorSet.encode(message).finish()
    };
  }
};
function createBaseUnknownSet(): UnknownSet {
  return {
    exprs: []
  };
}
export const UnknownSet = {
  typeUrl: "/google.api.expr.v1alpha1.UnknownSet",
  encode(message: UnknownSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.exprs) {
      writer.int64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): UnknownSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnknownSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.exprs.push((reader.int64() as Long));
            }
          } else {
            message.exprs.push((reader.int64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UnknownSet {
    return {
      exprs: Array.isArray(object?.exprs) ? object.exprs.map((e: any) => Long.fromValue(e)) : []
    };
  },
  toJSON(message: UnknownSet): unknown {
    const obj: any = {};
    if (message.exprs) {
      obj.exprs = message.exprs.map(e => (e || Long.ZERO).toString());
    } else {
      obj.exprs = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<UnknownSet>): UnknownSet {
    const message = createBaseUnknownSet();
    message.exprs = object.exprs?.map(e => Long.fromValue(e)) || [];
    return message;
  },
  fromSDK(object: UnknownSetSDKType): UnknownSet {
    return {
      exprs: Array.isArray(object?.exprs) ? object.exprs.map((e: any) => e) : []
    };
  },
  toSDK(message: UnknownSet): UnknownSetSDKType {
    const obj: any = {};
    if (message.exprs) {
      obj.exprs = message.exprs.map(e => e);
    } else {
      obj.exprs = [];
    }
    return obj;
  },
  fromAmino(object: UnknownSetAmino): UnknownSet {
    return {
      exprs: Array.isArray(object?.exprs) ? object.exprs.map((e: any) => e) : []
    };
  },
  toAmino(message: UnknownSet): UnknownSetAmino {
    const obj: any = {};
    if (message.exprs) {
      obj.exprs = message.exprs.map(e => e);
    } else {
      obj.exprs = [];
    }
    return obj;
  },
  fromAminoMsg(object: UnknownSetAminoMsg): UnknownSet {
    return UnknownSet.fromAmino(object.value);
  },
  fromProtoMsg(message: UnknownSetProtoMsg): UnknownSet {
    return UnknownSet.decode(message.value);
  },
  toProto(message: UnknownSet): Uint8Array {
    return UnknownSet.encode(message).finish();
  },
  toProtoMsg(message: UnknownSet): UnknownSetProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.UnknownSet",
      value: UnknownSet.encode(message).finish()
    };
  }
};