import { Value, ValueAmino, ValueSDKType } from "./value";
import { Long, DeepPartial, isSet } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "google.api.expr.v1alpha1";
/**
 * Values of intermediate expressions produced when evaluating expression.
 * Deprecated, use `EvalState` instead.
 */
/** @deprecated */
export interface Explain {
  /**
   * All of the observed values.
   * 
   * The field value_index is an index in the values list.
   * Separating values from steps is needed to remove redundant values.
   */
  values: Value[];
  /**
   * List of steps.
   * 
   * Repeated evaluations of the same expression generate new ExprStep
   * instances. The order of such ExprStep instances matches the order of
   * elements returned by Comprehension.iter_range.
   */
  exprSteps: Explain_ExprStep[];
}
export interface ExplainProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.Explain";
  value: Uint8Array;
}
/**
 * Values of intermediate expressions produced when evaluating expression.
 * Deprecated, use `EvalState` instead.
 */
/** @deprecated */
export interface ExplainAmino {
  /**
   * All of the observed values.
   * 
   * The field value_index is an index in the values list.
   * Separating values from steps is needed to remove redundant values.
   */
  values: ValueAmino[];
  /**
   * List of steps.
   * 
   * Repeated evaluations of the same expression generate new ExprStep
   * instances. The order of such ExprStep instances matches the order of
   * elements returned by Comprehension.iter_range.
   */
  expr_steps: Explain_ExprStepAmino[];
}
export interface ExplainAminoMsg {
  type: "/google.api.expr.v1alpha1.Explain";
  value: ExplainAmino;
}
/**
 * Values of intermediate expressions produced when evaluating expression.
 * Deprecated, use `EvalState` instead.
 */
/** @deprecated */
export interface ExplainSDKType {
  values: ValueSDKType[];
  expr_steps: Explain_ExprStepSDKType[];
}
/** ID and value index of one step. */
export interface Explain_ExprStep {
  /** ID of corresponding Expr node. */
  id: Long;
  /** Index of the value in the values list. */
  valueIndex: number;
}
export interface Explain_ExprStepProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.ExprStep";
  value: Uint8Array;
}
/** ID and value index of one step. */
export interface Explain_ExprStepAmino {
  /** ID of corresponding Expr node. */
  id: string;
  /** Index of the value in the values list. */
  value_index: number;
}
export interface Explain_ExprStepAminoMsg {
  type: "/google.api.expr.v1alpha1.ExprStep";
  value: Explain_ExprStepAmino;
}
/** ID and value index of one step. */
export interface Explain_ExprStepSDKType {
  id: Long;
  value_index: number;
}
function createBaseExplain(): Explain {
  return {
    values: [],
    exprSteps: []
  };
}
export const Explain = {
  typeUrl: "/google.api.expr.v1alpha1.Explain",
  encode(message: Explain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.values) {
      Value.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.exprSteps) {
      Explain_ExprStep.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Explain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExplain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(Value.decode(reader, reader.uint32()));
          break;
        case 2:
          message.exprSteps.push(Explain_ExprStep.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Explain {
    return {
      values: Array.isArray(object?.values) ? object.values.map((e: any) => Value.fromJSON(e)) : [],
      exprSteps: Array.isArray(object?.exprSteps) ? object.exprSteps.map((e: any) => Explain_ExprStep.fromJSON(e)) : []
    };
  },
  toJSON(message: Explain): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map(e => e ? Value.toJSON(e) : undefined);
    } else {
      obj.values = [];
    }
    if (message.exprSteps) {
      obj.exprSteps = message.exprSteps.map(e => e ? Explain_ExprStep.toJSON(e) : undefined);
    } else {
      obj.exprSteps = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Explain>): Explain {
    const message = createBaseExplain();
    message.values = object.values?.map(e => Value.fromPartial(e)) || [];
    message.exprSteps = object.exprSteps?.map(e => Explain_ExprStep.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ExplainSDKType): Explain {
    return {
      values: Array.isArray(object?.values) ? object.values.map((e: any) => Value.fromSDK(e)) : [],
      exprSteps: Array.isArray(object?.expr_steps) ? object.expr_steps.map((e: any) => Explain_ExprStep.fromSDK(e)) : []
    };
  },
  toSDK(message: Explain): ExplainSDKType {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map(e => e ? Value.toSDK(e) : undefined);
    } else {
      obj.values = [];
    }
    if (message.exprSteps) {
      obj.expr_steps = message.exprSteps.map(e => e ? Explain_ExprStep.toSDK(e) : undefined);
    } else {
      obj.expr_steps = [];
    }
    return obj;
  },
  fromAmino(object: ExplainAmino): Explain {
    return {
      values: Array.isArray(object?.values) ? object.values.map((e: any) => Value.fromAmino(e)) : [],
      exprSteps: Array.isArray(object?.expr_steps) ? object.expr_steps.map((e: any) => Explain_ExprStep.fromAmino(e)) : []
    };
  },
  toAmino(message: Explain): ExplainAmino {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map(e => e ? Value.toAmino(e) : undefined);
    } else {
      obj.values = [];
    }
    if (message.exprSteps) {
      obj.expr_steps = message.exprSteps.map(e => e ? Explain_ExprStep.toAmino(e) : undefined);
    } else {
      obj.expr_steps = [];
    }
    return obj;
  },
  fromAminoMsg(object: ExplainAminoMsg): Explain {
    return Explain.fromAmino(object.value);
  },
  fromProtoMsg(message: ExplainProtoMsg): Explain {
    return Explain.decode(message.value);
  },
  toProto(message: Explain): Uint8Array {
    return Explain.encode(message).finish();
  },
  toProtoMsg(message: Explain): ExplainProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.Explain",
      value: Explain.encode(message).finish()
    };
  }
};
function createBaseExplain_ExprStep(): Explain_ExprStep {
  return {
    id: Long.ZERO,
    valueIndex: 0
  };
}
export const Explain_ExprStep = {
  typeUrl: "/google.api.expr.v1alpha1.ExprStep",
  encode(message: Explain_ExprStep, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).int64(message.id);
    }
    if (message.valueIndex !== 0) {
      writer.uint32(16).int32(message.valueIndex);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Explain_ExprStep {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExplain_ExprStep();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = (reader.int64() as Long);
          break;
        case 2:
          message.valueIndex = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Explain_ExprStep {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.ZERO,
      valueIndex: isSet(object.valueIndex) ? Number(object.valueIndex) : 0
    };
  },
  toJSON(message: Explain_ExprStep): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.ZERO).toString());
    message.valueIndex !== undefined && (obj.valueIndex = Math.round(message.valueIndex));
    return obj;
  },
  fromPartial(object: DeepPartial<Explain_ExprStep>): Explain_ExprStep {
    const message = createBaseExplain_ExprStep();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.ZERO;
    message.valueIndex = object.valueIndex ?? 0;
    return message;
  },
  fromSDK(object: Explain_ExprStepSDKType): Explain_ExprStep {
    return {
      id: object?.id,
      valueIndex: object?.value_index
    };
  },
  toSDK(message: Explain_ExprStep): Explain_ExprStepSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.value_index = message.valueIndex;
    return obj;
  },
  fromAmino(object: Explain_ExprStepAmino): Explain_ExprStep {
    return {
      id: Long.fromString(object.id),
      valueIndex: object.value_index
    };
  },
  toAmino(message: Explain_ExprStep): Explain_ExprStepAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.value_index = message.valueIndex;
    return obj;
  },
  fromAminoMsg(object: Explain_ExprStepAminoMsg): Explain_ExprStep {
    return Explain_ExprStep.fromAmino(object.value);
  },
  fromProtoMsg(message: Explain_ExprStepProtoMsg): Explain_ExprStep {
    return Explain_ExprStep.decode(message.value);
  },
  toProto(message: Explain_ExprStep): Uint8Array {
    return Explain_ExprStep.encode(message).finish();
  },
  toProtoMsg(message: Explain_ExprStep): Explain_ExprStepProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.ExprStep",
      value: Explain_ExprStep.encode(message).finish()
    };
  }
};