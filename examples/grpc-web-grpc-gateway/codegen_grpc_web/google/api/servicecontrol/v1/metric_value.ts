import { Timestamp } from "../../../protobuf/timestamp";
import { Distribution, DistributionAmino, DistributionSDKType } from "./distribution";
import { Long, isSet, DeepPartial, toTimestamp, fromTimestamp, isObject } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "google.api.servicecontrol.v1";
export interface MetricValue_LabelsEntry {
  key: string;
  value: string;
}
export interface MetricValue_LabelsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface MetricValue_LabelsEntryAmino {
  key: string;
  value: string;
}
export interface MetricValue_LabelsEntryAminoMsg {
  type: string;
  value: MetricValue_LabelsEntryAmino;
}
export interface MetricValue_LabelsEntrySDKType {
  key: string;
  value: string;
}
/** Represents a single metric value. */
export interface MetricValue {
  /**
   * The labels describing the metric value.
   * See comments on [google.api.servicecontrol.v1.Operation.labels][google.api.servicecontrol.v1.Operation.labels] for
   * the overriding relationship.
   * Note that this map must not contain monitored resource labels.
   */
  labels: {
    [key: string]: string;
  };
  /**
   * The start of the time period over which this metric value's measurement
   * applies. The time period has different semantics for different metric
   * types (cumulative, delta, and gauge). See the metric definition
   * documentation in the service configuration for details. If not specified,
   * [google.api.servicecontrol.v1.Operation.start_time][google.api.servicecontrol.v1.Operation.start_time] will be used.
   */
  startTime?: Date;
  /**
   * The end of the time period over which this metric value's measurement
   * applies.  If not specified,
   * [google.api.servicecontrol.v1.Operation.end_time][google.api.servicecontrol.v1.Operation.end_time] will be used.
   */
  endTime?: Date;
  /** A boolean value. */
  boolValue?: boolean;
  /** A signed 64-bit integer value. */
  int64Value?: Long;
  /** A double precision floating point value. */
  doubleValue?: number;
  /** A text string value. */
  stringValue?: string;
  /** A distribution value. */
  distributionValue?: Distribution;
}
export interface MetricValueProtoMsg {
  typeUrl: "/google.api.servicecontrol.v1.MetricValue";
  value: Uint8Array;
}
/** Represents a single metric value. */
export interface MetricValueAmino {
  /**
   * The labels describing the metric value.
   * See comments on [google.api.servicecontrol.v1.Operation.labels][google.api.servicecontrol.v1.Operation.labels] for
   * the overriding relationship.
   * Note that this map must not contain monitored resource labels.
   */
  labels: {
    [key: string]: string;
  };
  /**
   * The start of the time period over which this metric value's measurement
   * applies. The time period has different semantics for different metric
   * types (cumulative, delta, and gauge). See the metric definition
   * documentation in the service configuration for details. If not specified,
   * [google.api.servicecontrol.v1.Operation.start_time][google.api.servicecontrol.v1.Operation.start_time] will be used.
   */
  start_time?: Date;
  /**
   * The end of the time period over which this metric value's measurement
   * applies.  If not specified,
   * [google.api.servicecontrol.v1.Operation.end_time][google.api.servicecontrol.v1.Operation.end_time] will be used.
   */
  end_time?: Date;
  /** A boolean value. */
  bool_value?: boolean;
  /** A signed 64-bit integer value. */
  int64_value?: string;
  /** A double precision floating point value. */
  double_value?: number;
  /** A text string value. */
  string_value?: string;
  /** A distribution value. */
  distribution_value?: DistributionAmino;
}
export interface MetricValueAminoMsg {
  type: "/google.api.servicecontrol.v1.MetricValue";
  value: MetricValueAmino;
}
/** Represents a single metric value. */
export interface MetricValueSDKType {
  labels: {
    [key: string]: string;
  };
  start_time?: Date;
  end_time?: Date;
  bool_value?: boolean;
  int64_value?: Long;
  double_value?: number;
  string_value?: string;
  distribution_value?: DistributionSDKType;
}
/**
 * Represents a set of metric values in the same metric.
 * Each metric value in the set should have a unique combination of start time,
 * end time, and label values.
 */
export interface MetricValueSet {
  /** The metric name defined in the service configuration. */
  metricName: string;
  /** The values in this metric. */
  metricValues: MetricValue[];
}
export interface MetricValueSetProtoMsg {
  typeUrl: "/google.api.servicecontrol.v1.MetricValueSet";
  value: Uint8Array;
}
/**
 * Represents a set of metric values in the same metric.
 * Each metric value in the set should have a unique combination of start time,
 * end time, and label values.
 */
export interface MetricValueSetAmino {
  /** The metric name defined in the service configuration. */
  metric_name: string;
  /** The values in this metric. */
  metric_values: MetricValueAmino[];
}
export interface MetricValueSetAminoMsg {
  type: "/google.api.servicecontrol.v1.MetricValueSet";
  value: MetricValueSetAmino;
}
/**
 * Represents a set of metric values in the same metric.
 * Each metric value in the set should have a unique combination of start time,
 * end time, and label values.
 */
export interface MetricValueSetSDKType {
  metric_name: string;
  metric_values: MetricValueSDKType[];
}
function createBaseMetricValue_LabelsEntry(): MetricValue_LabelsEntry {
  return {
    key: "",
    value: ""
  };
}
export const MetricValue_LabelsEntry = {
  encode(message: MetricValue_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MetricValue_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetricValue_LabelsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MetricValue_LabelsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: MetricValue_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: DeepPartial<MetricValue_LabelsEntry>): MetricValue_LabelsEntry {
    const message = createBaseMetricValue_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromSDK(object: MetricValue_LabelsEntrySDKType): MetricValue_LabelsEntry {
    return {
      key: object?.key,
      value: object?.value
    };
  },
  toSDK(message: MetricValue_LabelsEntry): MetricValue_LabelsEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: MetricValue_LabelsEntryAmino): MetricValue_LabelsEntry {
    return {
      key: object.key,
      value: object.value
    };
  },
  toAmino(message: MetricValue_LabelsEntry): MetricValue_LabelsEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: MetricValue_LabelsEntryAminoMsg): MetricValue_LabelsEntry {
    return MetricValue_LabelsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: MetricValue_LabelsEntryProtoMsg): MetricValue_LabelsEntry {
    return MetricValue_LabelsEntry.decode(message.value);
  },
  toProto(message: MetricValue_LabelsEntry): Uint8Array {
    return MetricValue_LabelsEntry.encode(message).finish();
  }
};
function createBaseMetricValue(): MetricValue {
  return {
    labels: {},
    startTime: undefined,
    endTime: undefined,
    boolValue: undefined,
    int64Value: undefined,
    doubleValue: undefined,
    stringValue: undefined,
    distributionValue: undefined
  };
}
export const MetricValue = {
  typeUrl: "/google.api.servicecontrol.v1.MetricValue",
  encode(message: MetricValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.labels).forEach(([key, value]) => {
      MetricValue_LabelsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(26).fork()).ldelim();
    }
    if (message.boolValue !== undefined) {
      writer.uint32(32).bool(message.boolValue);
    }
    if (message.int64Value !== undefined) {
      writer.uint32(40).int64(message.int64Value);
    }
    if (message.doubleValue !== undefined) {
      writer.uint32(49).double(message.doubleValue);
    }
    if (message.stringValue !== undefined) {
      writer.uint32(58).string(message.stringValue);
    }
    if (message.distributionValue !== undefined) {
      Distribution.encode(message.distributionValue, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MetricValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetricValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = MetricValue_LabelsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.labels[entry1.key] = entry1.value;
          }
          break;
        case 2:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.boolValue = reader.bool();
          break;
        case 5:
          message.int64Value = (reader.int64() as Long);
          break;
        case 6:
          message.doubleValue = reader.double();
          break;
        case 7:
          message.stringValue = reader.string();
          break;
        case 8:
          message.distributionValue = Distribution.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MetricValue {
    return {
      labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      startTime: isSet(object.startTime) ? new Date(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? new Date(object.endTime) : undefined,
      boolValue: isSet(object.boolValue) ? Boolean(object.boolValue) : undefined,
      int64Value: isSet(object.int64Value) ? Long.fromValue(object.int64Value) : undefined,
      doubleValue: isSet(object.doubleValue) ? Number(object.doubleValue) : undefined,
      stringValue: isSet(object.stringValue) ? String(object.stringValue) : undefined,
      distributionValue: isSet(object.distributionValue) ? Distribution.fromJSON(object.distributionValue) : undefined
    };
  },
  toJSON(message: MetricValue): unknown {
    const obj: any = {};
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    message.endTime !== undefined && (obj.endTime = message.endTime.toISOString());
    message.boolValue !== undefined && (obj.boolValue = message.boolValue);
    message.int64Value !== undefined && (obj.int64Value = (message.int64Value || undefined).toString());
    message.doubleValue !== undefined && (obj.doubleValue = message.doubleValue);
    message.stringValue !== undefined && (obj.stringValue = message.stringValue);
    message.distributionValue !== undefined && (obj.distributionValue = message.distributionValue ? Distribution.toJSON(message.distributionValue) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MetricValue>): MetricValue {
    const message = createBaseMetricValue();
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.boolValue = object.boolValue ?? undefined;
    message.int64Value = object.int64Value !== undefined && object.int64Value !== null ? Long.fromValue(object.int64Value) : undefined;
    message.doubleValue = object.doubleValue ?? undefined;
    message.stringValue = object.stringValue ?? undefined;
    message.distributionValue = object.distributionValue !== undefined && object.distributionValue !== null ? Distribution.fromPartial(object.distributionValue) : undefined;
    return message;
  },
  fromSDK(object: MetricValueSDKType): MetricValue {
    return {
      labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      startTime: object.start_time ?? undefined,
      endTime: object.end_time ?? undefined,
      boolValue: object?.bool_value,
      int64Value: object?.int64_value,
      doubleValue: object?.double_value,
      stringValue: object?.string_value,
      distributionValue: object.distribution_value ? Distribution.fromSDK(object.distribution_value) : undefined
    };
  },
  toSDK(message: MetricValue): MetricValueSDKType {
    const obj: any = {};
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.startTime !== undefined && (obj.start_time = message.startTime ?? undefined);
    message.endTime !== undefined && (obj.end_time = message.endTime ?? undefined);
    obj.bool_value = message.boolValue;
    obj.int64_value = message.int64Value;
    obj.double_value = message.doubleValue;
    obj.string_value = message.stringValue;
    message.distributionValue !== undefined && (obj.distribution_value = message.distributionValue ? Distribution.toSDK(message.distributionValue) : undefined);
    return obj;
  },
  fromAmino(object: MetricValueAmino): MetricValue {
    return {
      labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      startTime: object?.start_time ? Timestamp.fromAmino(object.start_time) : undefined,
      endTime: object?.end_time ? Timestamp.fromAmino(object.end_time) : undefined,
      boolValue: object?.bool_value,
      int64Value: object?.int64_value ? Long.fromString(object.int64_value) : undefined,
      doubleValue: object?.double_value,
      stringValue: object?.string_value,
      distributionValue: object?.distribution_value ? Distribution.fromAmino(object.distribution_value) : undefined
    };
  },
  toAmino(message: MetricValue): MetricValueAmino {
    const obj: any = {};
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    obj.start_time = message.startTime ? Timestamp.toAmino(message.startTime) : undefined;
    obj.end_time = message.endTime ? Timestamp.toAmino(message.endTime) : undefined;
    obj.bool_value = message.boolValue;
    obj.int64_value = message.int64Value ? message.int64Value.toString() : undefined;
    obj.double_value = message.doubleValue;
    obj.string_value = message.stringValue;
    obj.distribution_value = message.distributionValue ? Distribution.toAmino(message.distributionValue) : undefined;
    return obj;
  },
  fromAminoMsg(object: MetricValueAminoMsg): MetricValue {
    return MetricValue.fromAmino(object.value);
  },
  fromProtoMsg(message: MetricValueProtoMsg): MetricValue {
    return MetricValue.decode(message.value);
  },
  toProto(message: MetricValue): Uint8Array {
    return MetricValue.encode(message).finish();
  },
  toProtoMsg(message: MetricValue): MetricValueProtoMsg {
    return {
      typeUrl: "/google.api.servicecontrol.v1.MetricValue",
      value: MetricValue.encode(message).finish()
    };
  }
};
function createBaseMetricValueSet(): MetricValueSet {
  return {
    metricName: "",
    metricValues: []
  };
}
export const MetricValueSet = {
  typeUrl: "/google.api.servicecontrol.v1.MetricValueSet",
  encode(message: MetricValueSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metricName !== "") {
      writer.uint32(10).string(message.metricName);
    }
    for (const v of message.metricValues) {
      MetricValue.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MetricValueSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetricValueSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metricName = reader.string();
          break;
        case 2:
          message.metricValues.push(MetricValue.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MetricValueSet {
    return {
      metricName: isSet(object.metricName) ? String(object.metricName) : "",
      metricValues: Array.isArray(object?.metricValues) ? object.metricValues.map((e: any) => MetricValue.fromJSON(e)) : []
    };
  },
  toJSON(message: MetricValueSet): unknown {
    const obj: any = {};
    message.metricName !== undefined && (obj.metricName = message.metricName);
    if (message.metricValues) {
      obj.metricValues = message.metricValues.map(e => e ? MetricValue.toJSON(e) : undefined);
    } else {
      obj.metricValues = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MetricValueSet>): MetricValueSet {
    const message = createBaseMetricValueSet();
    message.metricName = object.metricName ?? "";
    message.metricValues = object.metricValues?.map(e => MetricValue.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MetricValueSetSDKType): MetricValueSet {
    return {
      metricName: object?.metric_name,
      metricValues: Array.isArray(object?.metric_values) ? object.metric_values.map((e: any) => MetricValue.fromSDK(e)) : []
    };
  },
  toSDK(message: MetricValueSet): MetricValueSetSDKType {
    const obj: any = {};
    obj.metric_name = message.metricName;
    if (message.metricValues) {
      obj.metric_values = message.metricValues.map(e => e ? MetricValue.toSDK(e) : undefined);
    } else {
      obj.metric_values = [];
    }
    return obj;
  },
  fromAmino(object: MetricValueSetAmino): MetricValueSet {
    return {
      metricName: object.metric_name,
      metricValues: Array.isArray(object?.metric_values) ? object.metric_values.map((e: any) => MetricValue.fromAmino(e)) : []
    };
  },
  toAmino(message: MetricValueSet): MetricValueSetAmino {
    const obj: any = {};
    obj.metric_name = message.metricName;
    if (message.metricValues) {
      obj.metric_values = message.metricValues.map(e => e ? MetricValue.toAmino(e) : undefined);
    } else {
      obj.metric_values = [];
    }
    return obj;
  },
  fromAminoMsg(object: MetricValueSetAminoMsg): MetricValueSet {
    return MetricValueSet.fromAmino(object.value);
  },
  fromProtoMsg(message: MetricValueSetProtoMsg): MetricValueSet {
    return MetricValueSet.decode(message.value);
  },
  toProto(message: MetricValueSet): Uint8Array {
    return MetricValueSet.encode(message).finish();
  },
  toProtoMsg(message: MetricValueSet): MetricValueSetProtoMsg {
    return {
      typeUrl: "/google.api.servicecontrol.v1.MetricValueSet",
      value: MetricValueSet.encode(message).finish()
    };
  }
};