import { Value, ValueSDKType } from "./value";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { JsonSafe } from "../../../../json-safe";
import { DeepPartial, isSet } from "../../../../helpers";
import { ComputedRef } from "vue";
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
export interface ReactiveExplain {
  values: ComputedRef<Value[]>;
  exprSteps: ComputedRef<Explain_ExprStep[]>;
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
export interface ExplainSDKType {
  values: ValueSDKType[];
  expr_steps: Explain_ExprStepSDKType[];
}
/** ID and value index of one step. */
export interface Explain_ExprStep {
  /** ID of corresponding Expr node. */
  id: bigint;
  /** Index of the value in the values list. */
  valueIndex: number;
}
export interface ReactiveExplain_ExprStep {
  id: ComputedRef<bigint>;
  valueIndex: ComputedRef<number>;
}
export interface Explain_ExprStepProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.ExprStep";
  value: Uint8Array;
}
/** ID and value index of one step. */
export interface Explain_ExprStepSDKType {
  id: bigint;
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
  encode(message: Explain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.values) {
      Value.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.exprSteps) {
      Explain_ExprStep.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Explain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  toJSON(message: Explain): JsonSafe<Explain> {
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
  fromSDKJSON(object: any): ExplainSDKType {
    return {
      values: Array.isArray(object?.values) ? object.values.map((e: any) => Value.fromSDKJSON(e)) : [],
      expr_steps: Array.isArray(object?.expr_steps) ? object.expr_steps.map((e: any) => Explain_ExprStep.fromSDKJSON(e)) : []
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
    const message = createBaseExplain();
    message.values = object.values?.map(e => Value.fromAmino(e)) || [];
    message.exprSteps = object.expr_steps?.map(e => Explain_ExprStep.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Explain): ExplainAmino {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map(e => e ? Value.toAmino(e) : undefined);
    } else {
      obj.values = message.values;
    }
    if (message.exprSteps) {
      obj.expr_steps = message.exprSteps.map(e => e ? Explain_ExprStep.toAmino(e) : undefined);
    } else {
      obj.expr_steps = message.exprSteps;
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
    id: BigInt(0),
    valueIndex: 0
  };
}
export const Explain_ExprStep = {
  typeUrl: "/google.api.expr.v1alpha1.ExprStep",
  encode(message: Explain_ExprStep, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).int64(message.id);
    }
    if (message.valueIndex !== 0) {
      writer.uint32(16).int32(message.valueIndex);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Explain_ExprStep {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExplain_ExprStep();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int64();
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
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      valueIndex: isSet(object.valueIndex) ? Number(object.valueIndex) : 0
    };
  },
  toJSON(message: Explain_ExprStep): JsonSafe<Explain_ExprStep> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.valueIndex !== undefined && (obj.valueIndex = Math.round(message.valueIndex));
    return obj;
  },
  fromPartial(object: DeepPartial<Explain_ExprStep>): Explain_ExprStep {
    const message = createBaseExplain_ExprStep();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.valueIndex = object.valueIndex ?? 0;
    return message;
  },
  fromSDK(object: Explain_ExprStepSDKType): Explain_ExprStep {
    return {
      id: object?.id,
      valueIndex: object?.value_index
    };
  },
  fromSDKJSON(object: any): Explain_ExprStepSDKType {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      value_index: isSet(object.value_index) ? Number(object.value_index) : 0
    };
  },
  toSDK(message: Explain_ExprStep): Explain_ExprStepSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.value_index = message.valueIndex;
    return obj;
  },
  fromAmino(object: Explain_ExprStepAmino): Explain_ExprStep {
    const message = createBaseExplain_ExprStep();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.value_index !== undefined && object.value_index !== null) {
      message.valueIndex = object.value_index;
    }
    return message;
  },
  toAmino(message: Explain_ExprStep): Explain_ExprStepAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.value_index = message.valueIndex === 0 ? undefined : message.valueIndex;
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