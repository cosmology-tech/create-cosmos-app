import { BinaryReader, BinaryWriter } from "../../binary";
import { JsonSafe } from "../../json-safe";
import { DeepPartial, isSet, isObject } from "../../helpers";
import { ComputedRef } from "vue";
export const protobufPackage = "google.api";
/**
 * Quota configuration helps to achieve fairness and budgeting in service
 * usage.
 * 
 * The metric based quota configuration works this way:
 * - The service configuration defines a set of metrics.
 * - For API calls, the quota.metric_rules maps methods to metrics with
 *   corresponding costs.
 * - The quota.limits defines limits on the metrics, which will be used for
 *   quota checks at runtime.
 * 
 * An example quota configuration in yaml format:
 * 
 *    quota:
 *      limits:
 * 
 *      - name: apiWriteQpsPerProject
 *        metric: library.googleapis.com/write_calls
 *        unit: "1/min/{project}"  # rate limit for consumer projects
 *        values:
 *          STANDARD: 10000
 * 
 * 
 *      # The metric rules bind all methods to the read_calls metric,
 *      # except for the UpdateBook and DeleteBook methods. These two methods
 *      # are mapped to the write_calls metric, with the UpdateBook method
 *      # consuming at twice rate as the DeleteBook method.
 *      metric_rules:
 *      - selector: "*"
 *        metric_costs:
 *          library.googleapis.com/read_calls: 1
 *      - selector: google.example.library.v1.LibraryService.UpdateBook
 *        metric_costs:
 *          library.googleapis.com/write_calls: 2
 *      - selector: google.example.library.v1.LibraryService.DeleteBook
 *        metric_costs:
 *          library.googleapis.com/write_calls: 1
 * 
 *  Corresponding Metric definition:
 * 
 *      metrics:
 *      - name: library.googleapis.com/read_calls
 *        display_name: Read requests
 *        metric_kind: DELTA
 *        value_type: INT64
 * 
 *      - name: library.googleapis.com/write_calls
 *        display_name: Write requests
 *        metric_kind: DELTA
 *        value_type: INT64
 */
export interface Quota {
  /** List of `QuotaLimit` definitions for the service. */
  limits: QuotaLimit[];
  /**
   * List of `MetricRule` definitions, each one mapping a selected method to one
   * or more metrics.
   */
  metricRules: MetricRule[];
}
export interface ReactiveQuota {
  limits: ComputedRef<QuotaLimit[]>;
  metricRules: ComputedRef<MetricRule[]>;
}
export interface QuotaProtoMsg {
  typeUrl: "/google.api.Quota";
  value: Uint8Array;
}
/**
 * Quota configuration helps to achieve fairness and budgeting in service
 * usage.
 * 
 * The metric based quota configuration works this way:
 * - The service configuration defines a set of metrics.
 * - For API calls, the quota.metric_rules maps methods to metrics with
 *   corresponding costs.
 * - The quota.limits defines limits on the metrics, which will be used for
 *   quota checks at runtime.
 * 
 * An example quota configuration in yaml format:
 * 
 *    quota:
 *      limits:
 * 
 *      - name: apiWriteQpsPerProject
 *        metric: library.googleapis.com/write_calls
 *        unit: "1/min/{project}"  # rate limit for consumer projects
 *        values:
 *          STANDARD: 10000
 * 
 * 
 *      # The metric rules bind all methods to the read_calls metric,
 *      # except for the UpdateBook and DeleteBook methods. These two methods
 *      # are mapped to the write_calls metric, with the UpdateBook method
 *      # consuming at twice rate as the DeleteBook method.
 *      metric_rules:
 *      - selector: "*"
 *        metric_costs:
 *          library.googleapis.com/read_calls: 1
 *      - selector: google.example.library.v1.LibraryService.UpdateBook
 *        metric_costs:
 *          library.googleapis.com/write_calls: 2
 *      - selector: google.example.library.v1.LibraryService.DeleteBook
 *        metric_costs:
 *          library.googleapis.com/write_calls: 1
 * 
 *  Corresponding Metric definition:
 * 
 *      metrics:
 *      - name: library.googleapis.com/read_calls
 *        display_name: Read requests
 *        metric_kind: DELTA
 *        value_type: INT64
 * 
 *      - name: library.googleapis.com/write_calls
 *        display_name: Write requests
 *        metric_kind: DELTA
 *        value_type: INT64
 */
export interface QuotaSDKType {
  limits: QuotaLimitSDKType[];
  metric_rules: MetricRuleSDKType[];
}
export interface MetricRule_MetricCostsEntry {
  key: string;
  value: bigint;
}
export interface ReactiveMetricRule_MetricCostsEntry {
  key: ComputedRef<string>;
  value: ComputedRef<bigint>;
}
export interface MetricRule_MetricCostsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface MetricRule_MetricCostsEntrySDKType {
  key: string;
  value: bigint;
}
/**
 * Bind API methods to metrics. Binding a method to a metric causes that
 * metric's configured quota behaviors to apply to the method call.
 */
export interface MetricRule {
  /**
   * Selects the methods to which this rule applies.
   * 
   * Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
   */
  selector: string;
  /**
   * Metrics to update when the selected methods are called, and the associated
   * cost applied to each metric.
   * 
   * The key of the map is the metric name, and the values are the amount
   * increased for the metric against which the quota limits are defined.
   * The value must not be negative.
   */
  metricCosts: {
    [key: string]: bigint;
  };
}
export interface ReactiveMetricRule {
  selector: ComputedRef<string>;
  metricCosts: ComputedRef<{
    [key: string]: bigint;
  }>;
}
export interface MetricRuleProtoMsg {
  typeUrl: "/google.api.MetricRule";
  value: Uint8Array;
}
/**
 * Bind API methods to metrics. Binding a method to a metric causes that
 * metric's configured quota behaviors to apply to the method call.
 */
export interface MetricRuleSDKType {
  selector: string;
  metric_costs: {
    [key: string]: bigint;
  };
}
export interface QuotaLimit_ValuesEntry {
  key: string;
  value: bigint;
}
export interface ReactiveQuotaLimit_ValuesEntry {
  key: ComputedRef<string>;
  value: ComputedRef<bigint>;
}
export interface QuotaLimit_ValuesEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface QuotaLimit_ValuesEntrySDKType {
  key: string;
  value: bigint;
}
/**
 * `QuotaLimit` defines a specific limit that applies over a specified duration
 * for a limit type. There can be at most one limit for a duration and limit
 * type combination defined within a `QuotaGroup`.
 */
export interface QuotaLimit {
  /**
   * Name of the quota limit.
   * 
   * The name must be provided, and it must be unique within the service. The
   * name can only include alphanumeric characters as well as '-'.
   * 
   * The maximum length of the limit name is 64 characters.
   */
  name: string;
  /**
   * Optional. User-visible, extended description for this quota limit.
   * Should be used only when more context is needed to understand this limit
   * than provided by the limit's display name (see: `display_name`).
   */
  description: string;
  /**
   * Default number of tokens that can be consumed during the specified
   * duration. This is the number of tokens assigned when a client
   * application developer activates the service for his/her project.
   * 
   * Specifying a value of 0 will block all requests. This can be used if you
   * are provisioning quota to selected consumers and blocking others.
   * Similarly, a value of -1 will indicate an unlimited quota. No other
   * negative values are allowed.
   * 
   * Used by group-based quotas only.
   */
  defaultLimit: bigint;
  /**
   * Maximum number of tokens that can be consumed during the specified
   * duration. Client application developers can override the default limit up
   * to this maximum. If specified, this value cannot be set to a value less
   * than the default limit. If not specified, it is set to the default limit.
   * 
   * To allow clients to apply overrides with no upper bound, set this to -1,
   * indicating unlimited maximum quota.
   * 
   * Used by group-based quotas only.
   */
  maxLimit: bigint;
  /**
   * Free tier value displayed in the Developers Console for this limit.
   * The free tier is the number of tokens that will be subtracted from the
   * billed amount when billing is enabled.
   * This field can only be set on a limit with duration "1d", in a billable
   * group; it is invalid on any other limit. If this field is not set, it
   * defaults to 0, indicating that there is no free tier for this service.
   * 
   * Used by group-based quotas only.
   */
  freeTier: bigint;
  /**
   * Duration of this limit in textual notation. Must be "100s" or "1d".
   * 
   * Used by group-based quotas only.
   */
  duration: string;
  /**
   * The name of the metric this quota limit applies to. The quota limits with
   * the same metric will be checked together during runtime. The metric must be
   * defined within the service config.
   */
  metric: string;
  /**
   * Specify the unit of the quota limit. It uses the same syntax as
   * [Metric.unit][]. The supported unit kinds are determined by the quota
   * backend system.
   * 
   * Here are some examples:
   * * "1/min/{project}" for quota per minute per project.
   * 
   * Note: the order of unit components is insignificant.
   * The "1" at the beginning is required to follow the metric unit syntax.
   */
  unit: string;
  /**
   * Tiered limit values. You must specify this as a key:value pair, with an
   * integer value that is the maximum number of requests allowed for the
   * specified unit. Currently only STANDARD is supported.
   */
  values: {
    [key: string]: bigint;
  };
  /**
   * User-visible display name for this limit.
   * Optional. If not set, the UI will provide a default display name based on
   * the quota configuration. This field can be used to override the default
   * display name generated from the configuration.
   */
  displayName: string;
}
export interface ReactiveQuotaLimit {
  name: ComputedRef<string>;
  description: ComputedRef<string>;
  defaultLimit: ComputedRef<bigint>;
  maxLimit: ComputedRef<bigint>;
  freeTier: ComputedRef<bigint>;
  duration: ComputedRef<string>;
  metric: ComputedRef<string>;
  unit: ComputedRef<string>;
  values: ComputedRef<{
    [key: string]: bigint;
  }>;
  displayName: ComputedRef<string>;
}
export interface QuotaLimitProtoMsg {
  typeUrl: "/google.api.QuotaLimit";
  value: Uint8Array;
}
/**
 * `QuotaLimit` defines a specific limit that applies over a specified duration
 * for a limit type. There can be at most one limit for a duration and limit
 * type combination defined within a `QuotaGroup`.
 */
export interface QuotaLimitSDKType {
  name: string;
  description: string;
  default_limit: bigint;
  max_limit: bigint;
  free_tier: bigint;
  duration: string;
  metric: string;
  unit: string;
  values: {
    [key: string]: bigint;
  };
  display_name: string;
}
function createBaseQuota(): Quota {
  return {
    limits: [],
    metricRules: []
  };
}
export const Quota = {
  typeUrl: "/google.api.Quota",
  encode(message: Quota, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.limits) {
      QuotaLimit.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.metricRules) {
      MetricRule.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Quota {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuota();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.limits.push(QuotaLimit.decode(reader, reader.uint32()));
          break;
        case 4:
          message.metricRules.push(MetricRule.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Quota {
    return {
      limits: Array.isArray(object?.limits) ? object.limits.map((e: any) => QuotaLimit.fromJSON(e)) : [],
      metricRules: Array.isArray(object?.metricRules) ? object.metricRules.map((e: any) => MetricRule.fromJSON(e)) : []
    };
  },
  toJSON(message: Quota): JsonSafe<Quota> {
    const obj: any = {};
    if (message.limits) {
      obj.limits = message.limits.map(e => e ? QuotaLimit.toJSON(e) : undefined);
    } else {
      obj.limits = [];
    }
    if (message.metricRules) {
      obj.metricRules = message.metricRules.map(e => e ? MetricRule.toJSON(e) : undefined);
    } else {
      obj.metricRules = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Quota>): Quota {
    const message = createBaseQuota();
    message.limits = object.limits?.map(e => QuotaLimit.fromPartial(e)) || [];
    message.metricRules = object.metricRules?.map(e => MetricRule.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QuotaSDKType): Quota {
    return {
      limits: Array.isArray(object?.limits) ? object.limits.map((e: any) => QuotaLimit.fromSDK(e)) : [],
      metricRules: Array.isArray(object?.metric_rules) ? object.metric_rules.map((e: any) => MetricRule.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): QuotaSDKType {
    return {
      limits: Array.isArray(object?.limits) ? object.limits.map((e: any) => QuotaLimit.fromSDKJSON(e)) : [],
      metric_rules: Array.isArray(object?.metric_rules) ? object.metric_rules.map((e: any) => MetricRule.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: Quota): QuotaSDKType {
    const obj: any = {};
    if (message.limits) {
      obj.limits = message.limits.map(e => e ? QuotaLimit.toSDK(e) : undefined);
    } else {
      obj.limits = [];
    }
    if (message.metricRules) {
      obj.metric_rules = message.metricRules.map(e => e ? MetricRule.toSDK(e) : undefined);
    } else {
      obj.metric_rules = [];
    }
    return obj;
  },
  fromAmino(object: QuotaAmino): Quota {
    const message = createBaseQuota();
    message.limits = object.limits?.map(e => QuotaLimit.fromAmino(e)) || [];
    message.metricRules = object.metric_rules?.map(e => MetricRule.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Quota): QuotaAmino {
    const obj: any = {};
    if (message.limits) {
      obj.limits = message.limits.map(e => e ? QuotaLimit.toAmino(e) : undefined);
    } else {
      obj.limits = message.limits;
    }
    if (message.metricRules) {
      obj.metric_rules = message.metricRules.map(e => e ? MetricRule.toAmino(e) : undefined);
    } else {
      obj.metric_rules = message.metricRules;
    }
    return obj;
  },
  fromAminoMsg(object: QuotaAminoMsg): Quota {
    return Quota.fromAmino(object.value);
  },
  fromProtoMsg(message: QuotaProtoMsg): Quota {
    return Quota.decode(message.value);
  },
  toProto(message: Quota): Uint8Array {
    return Quota.encode(message).finish();
  },
  toProtoMsg(message: Quota): QuotaProtoMsg {
    return {
      typeUrl: "/google.api.Quota",
      value: Quota.encode(message).finish()
    };
  }
};
function createBaseMetricRule_MetricCostsEntry(): MetricRule_MetricCostsEntry {
  return {
    key: "",
    value: BigInt(0)
  };
}
export const MetricRule_MetricCostsEntry = {
  encode(message: MetricRule_MetricCostsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== BigInt(0)) {
      writer.uint32(16).int64(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MetricRule_MetricCostsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetricRule_MetricCostsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MetricRule_MetricCostsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? BigInt(object.value.toString()) : BigInt(0)
    };
  },
  toJSON(message: MetricRule_MetricCostsEntry): JsonSafe<MetricRule_MetricCostsEntry> {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = (message.value || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MetricRule_MetricCostsEntry>): MetricRule_MetricCostsEntry {
    const message = createBaseMetricRule_MetricCostsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? BigInt(object.value.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: MetricRule_MetricCostsEntrySDKType): MetricRule_MetricCostsEntry {
    return {
      key: object?.key,
      value: object?.value
    };
  },
  fromSDKJSON(object: any): MetricRule_MetricCostsEntrySDKType {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? BigInt(object.value.toString()) : BigInt(0)
    };
  },
  toSDK(message: MetricRule_MetricCostsEntry): MetricRule_MetricCostsEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: MetricRule_MetricCostsEntryAmino): MetricRule_MetricCostsEntry {
    const message = createBaseMetricRule_MetricCostsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = BigInt(object.value);
    }
    return message;
  },
  toAmino(message: MetricRule_MetricCostsEntry): MetricRule_MetricCostsEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value !== BigInt(0) ? message.value?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MetricRule_MetricCostsEntryAminoMsg): MetricRule_MetricCostsEntry {
    return MetricRule_MetricCostsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: MetricRule_MetricCostsEntryProtoMsg): MetricRule_MetricCostsEntry {
    return MetricRule_MetricCostsEntry.decode(message.value);
  },
  toProto(message: MetricRule_MetricCostsEntry): Uint8Array {
    return MetricRule_MetricCostsEntry.encode(message).finish();
  }
};
function createBaseMetricRule(): MetricRule {
  return {
    selector: "",
    metricCosts: {}
  };
}
export const MetricRule = {
  typeUrl: "/google.api.MetricRule",
  encode(message: MetricRule, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }
    Object.entries(message.metricCosts).forEach(([key, value]) => {
      MetricRule_MetricCostsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(16).fork()).ldelim();
    });
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MetricRule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetricRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.selector = reader.string();
          break;
        case 2:
          const entry2 = MetricRule_MetricCostsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.metricCosts[entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MetricRule {
    return {
      selector: isSet(object.selector) ? String(object.selector) : "",
      metricCosts: isObject(object.metricCosts) ? Object.entries(object.metricCosts).reduce<{
        [key: string]: bigint;
      }>((acc, [key, value]) => {
        acc[key] = BigInt((value as bigint | string).toString());
        return acc;
      }, {}) : {}
    };
  },
  toJSON(message: MetricRule): JsonSafe<MetricRule> {
    const obj: any = {};
    message.selector !== undefined && (obj.selector = message.selector);
    obj.metricCosts = {};
    if (message.metricCosts) {
      Object.entries(message.metricCosts).forEach(([k, v]) => {
        obj.metricCosts[k] = v.toString();
      });
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MetricRule>): MetricRule {
    const message = createBaseMetricRule();
    message.selector = object.selector ?? "";
    message.metricCosts = Object.entries(object.metricCosts ?? {}).reduce<{
      [key: string]: bigint;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = BigInt(value.toString());
      }
      return acc;
    }, {});
    return message;
  },
  fromSDK(object: MetricRuleSDKType): MetricRule {
    return {
      selector: object?.selector,
      metricCosts: isObject(object.metric_costs) ? Object.entries(object.metric_costs).reduce<{
        [key: string]: bigint;
      }>((acc, [key, value]) => {
        acc[key] = BigInt((value as bigint | string).toString());
        return acc;
      }, {}) : {}
    };
  },
  fromSDKJSON(object: any): MetricRuleSDKType {
    return {
      selector: isSet(object.selector) ? String(object.selector) : "",
      metric_costs: isObject(object.metric_costs) ? Object.entries(object.metric_costs).reduce<{
        [key: string]: bigint;
      }>((acc, [key, value]) => {
        acc[key] = BigInt((value as bigint | string).toString());
        return acc;
      }, {}) : {}
    };
  },
  toSDK(message: MetricRule): MetricRuleSDKType {
    const obj: any = {};
    obj.selector = message.selector;
    obj.metric_costs = {};
    if (message.metricCosts) {
      Object.entries(message.metricCosts).forEach(([k, v]) => {
        obj.metric_costs[k] = v.toString();
      });
    }
    return obj;
  },
  fromAmino(object: MetricRuleAmino): MetricRule {
    const message = createBaseMetricRule();
    if (object.selector !== undefined && object.selector !== null) {
      message.selector = object.selector;
    }
    message.metricCosts = Object.entries(object.metric_costs ?? {}).reduce<{
      [key: string]: bigint;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = BigInt(value.toString());
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message: MetricRule): MetricRuleAmino {
    const obj: any = {};
    obj.selector = message.selector === "" ? undefined : message.selector;
    obj.metric_costs = {};
    if (message.metricCosts) {
      Object.entries(message.metricCosts).forEach(([k, v]) => {
        obj.metric_costs[k] = v.toString();
      });
    }
    return obj;
  },
  fromAminoMsg(object: MetricRuleAminoMsg): MetricRule {
    return MetricRule.fromAmino(object.value);
  },
  fromProtoMsg(message: MetricRuleProtoMsg): MetricRule {
    return MetricRule.decode(message.value);
  },
  toProto(message: MetricRule): Uint8Array {
    return MetricRule.encode(message).finish();
  },
  toProtoMsg(message: MetricRule): MetricRuleProtoMsg {
    return {
      typeUrl: "/google.api.MetricRule",
      value: MetricRule.encode(message).finish()
    };
  }
};
function createBaseQuotaLimit_ValuesEntry(): QuotaLimit_ValuesEntry {
  return {
    key: "",
    value: BigInt(0)
  };
}
export const QuotaLimit_ValuesEntry = {
  encode(message: QuotaLimit_ValuesEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== BigInt(0)) {
      writer.uint32(16).int64(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuotaLimit_ValuesEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaLimit_ValuesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuotaLimit_ValuesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? BigInt(object.value.toString()) : BigInt(0)
    };
  },
  toJSON(message: QuotaLimit_ValuesEntry): JsonSafe<QuotaLimit_ValuesEntry> {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = (message.value || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QuotaLimit_ValuesEntry>): QuotaLimit_ValuesEntry {
    const message = createBaseQuotaLimit_ValuesEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? BigInt(object.value.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QuotaLimit_ValuesEntrySDKType): QuotaLimit_ValuesEntry {
    return {
      key: object?.key,
      value: object?.value
    };
  },
  fromSDKJSON(object: any): QuotaLimit_ValuesEntrySDKType {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? BigInt(object.value.toString()) : BigInt(0)
    };
  },
  toSDK(message: QuotaLimit_ValuesEntry): QuotaLimit_ValuesEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: QuotaLimit_ValuesEntryAmino): QuotaLimit_ValuesEntry {
    const message = createBaseQuotaLimit_ValuesEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = BigInt(object.value);
    }
    return message;
  },
  toAmino(message: QuotaLimit_ValuesEntry): QuotaLimit_ValuesEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value !== BigInt(0) ? message.value?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuotaLimit_ValuesEntryAminoMsg): QuotaLimit_ValuesEntry {
    return QuotaLimit_ValuesEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: QuotaLimit_ValuesEntryProtoMsg): QuotaLimit_ValuesEntry {
    return QuotaLimit_ValuesEntry.decode(message.value);
  },
  toProto(message: QuotaLimit_ValuesEntry): Uint8Array {
    return QuotaLimit_ValuesEntry.encode(message).finish();
  }
};
function createBaseQuotaLimit(): QuotaLimit {
  return {
    name: "",
    description: "",
    defaultLimit: BigInt(0),
    maxLimit: BigInt(0),
    freeTier: BigInt(0),
    duration: "",
    metric: "",
    unit: "",
    values: {},
    displayName: ""
  };
}
export const QuotaLimit = {
  typeUrl: "/google.api.QuotaLimit",
  encode(message: QuotaLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(50).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.defaultLimit !== BigInt(0)) {
      writer.uint32(24).int64(message.defaultLimit);
    }
    if (message.maxLimit !== BigInt(0)) {
      writer.uint32(32).int64(message.maxLimit);
    }
    if (message.freeTier !== BigInt(0)) {
      writer.uint32(56).int64(message.freeTier);
    }
    if (message.duration !== "") {
      writer.uint32(42).string(message.duration);
    }
    if (message.metric !== "") {
      writer.uint32(66).string(message.metric);
    }
    if (message.unit !== "") {
      writer.uint32(74).string(message.unit);
    }
    Object.entries(message.values).forEach(([key, value]) => {
      QuotaLimit_ValuesEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(80).fork()).ldelim();
    });
    if (message.displayName !== "") {
      writer.uint32(98).string(message.displayName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuotaLimit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 6:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.defaultLimit = reader.int64();
          break;
        case 4:
          message.maxLimit = reader.int64();
          break;
        case 7:
          message.freeTier = reader.int64();
          break;
        case 5:
          message.duration = reader.string();
          break;
        case 8:
          message.metric = reader.string();
          break;
        case 9:
          message.unit = reader.string();
          break;
        case 10:
          const entry10 = QuotaLimit_ValuesEntry.decode(reader, reader.uint32());
          if (entry10.value !== undefined) {
            message.values[entry10.key] = entry10.value;
          }
          break;
        case 12:
          message.displayName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuotaLimit {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      defaultLimit: isSet(object.defaultLimit) ? BigInt(object.defaultLimit.toString()) : BigInt(0),
      maxLimit: isSet(object.maxLimit) ? BigInt(object.maxLimit.toString()) : BigInt(0),
      freeTier: isSet(object.freeTier) ? BigInt(object.freeTier.toString()) : BigInt(0),
      duration: isSet(object.duration) ? String(object.duration) : "",
      metric: isSet(object.metric) ? String(object.metric) : "",
      unit: isSet(object.unit) ? String(object.unit) : "",
      values: isObject(object.values) ? Object.entries(object.values).reduce<{
        [key: string]: bigint;
      }>((acc, [key, value]) => {
        acc[key] = BigInt((value as bigint | string).toString());
        return acc;
      }, {}) : {},
      displayName: isSet(object.displayName) ? String(object.displayName) : ""
    };
  },
  toJSON(message: QuotaLimit): JsonSafe<QuotaLimit> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.defaultLimit !== undefined && (obj.defaultLimit = (message.defaultLimit || BigInt(0)).toString());
    message.maxLimit !== undefined && (obj.maxLimit = (message.maxLimit || BigInt(0)).toString());
    message.freeTier !== undefined && (obj.freeTier = (message.freeTier || BigInt(0)).toString());
    message.duration !== undefined && (obj.duration = message.duration);
    message.metric !== undefined && (obj.metric = message.metric);
    message.unit !== undefined && (obj.unit = message.unit);
    obj.values = {};
    if (message.values) {
      Object.entries(message.values).forEach(([k, v]) => {
        obj.values[k] = v.toString();
      });
    }
    message.displayName !== undefined && (obj.displayName = message.displayName);
    return obj;
  },
  fromPartial(object: DeepPartial<QuotaLimit>): QuotaLimit {
    const message = createBaseQuotaLimit();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.defaultLimit = object.defaultLimit !== undefined && object.defaultLimit !== null ? BigInt(object.defaultLimit.toString()) : BigInt(0);
    message.maxLimit = object.maxLimit !== undefined && object.maxLimit !== null ? BigInt(object.maxLimit.toString()) : BigInt(0);
    message.freeTier = object.freeTier !== undefined && object.freeTier !== null ? BigInt(object.freeTier.toString()) : BigInt(0);
    message.duration = object.duration ?? "";
    message.metric = object.metric ?? "";
    message.unit = object.unit ?? "";
    message.values = Object.entries(object.values ?? {}).reduce<{
      [key: string]: bigint;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = BigInt(value.toString());
      }
      return acc;
    }, {});
    message.displayName = object.displayName ?? "";
    return message;
  },
  fromSDK(object: QuotaLimitSDKType): QuotaLimit {
    return {
      name: object?.name,
      description: object?.description,
      defaultLimit: object?.default_limit,
      maxLimit: object?.max_limit,
      freeTier: object?.free_tier,
      duration: object?.duration,
      metric: object?.metric,
      unit: object?.unit,
      values: isObject(object.values) ? Object.entries(object.values).reduce<{
        [key: string]: bigint;
      }>((acc, [key, value]) => {
        acc[key] = BigInt((value as bigint | string).toString());
        return acc;
      }, {}) : {},
      displayName: object?.display_name
    };
  },
  fromSDKJSON(object: any): QuotaLimitSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      default_limit: isSet(object.default_limit) ? BigInt(object.default_limit.toString()) : BigInt(0),
      max_limit: isSet(object.max_limit) ? BigInt(object.max_limit.toString()) : BigInt(0),
      free_tier: isSet(object.free_tier) ? BigInt(object.free_tier.toString()) : BigInt(0),
      duration: isSet(object.duration) ? String(object.duration) : "",
      metric: isSet(object.metric) ? String(object.metric) : "",
      unit: isSet(object.unit) ? String(object.unit) : "",
      values: isObject(object.values) ? Object.entries(object.values).reduce<{
        [key: string]: bigint;
      }>((acc, [key, value]) => {
        acc[key] = BigInt((value as bigint | string).toString());
        return acc;
      }, {}) : {},
      display_name: isSet(object.display_name) ? String(object.display_name) : ""
    };
  },
  toSDK(message: QuotaLimit): QuotaLimitSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.description = message.description;
    obj.default_limit = message.defaultLimit;
    obj.max_limit = message.maxLimit;
    obj.free_tier = message.freeTier;
    obj.duration = message.duration;
    obj.metric = message.metric;
    obj.unit = message.unit;
    obj.values = {};
    if (message.values) {
      Object.entries(message.values).forEach(([k, v]) => {
        obj.values[k] = v.toString();
      });
    }
    obj.display_name = message.displayName;
    return obj;
  },
  fromAmino(object: QuotaLimitAmino): QuotaLimit {
    const message = createBaseQuotaLimit();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.default_limit !== undefined && object.default_limit !== null) {
      message.defaultLimit = BigInt(object.default_limit);
    }
    if (object.max_limit !== undefined && object.max_limit !== null) {
      message.maxLimit = BigInt(object.max_limit);
    }
    if (object.free_tier !== undefined && object.free_tier !== null) {
      message.freeTier = BigInt(object.free_tier);
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = object.duration;
    }
    if (object.metric !== undefined && object.metric !== null) {
      message.metric = object.metric;
    }
    if (object.unit !== undefined && object.unit !== null) {
      message.unit = object.unit;
    }
    message.values = Object.entries(object.values ?? {}).reduce<{
      [key: string]: bigint;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = BigInt(value.toString());
      }
      return acc;
    }, {});
    if (object.display_name !== undefined && object.display_name !== null) {
      message.displayName = object.display_name;
    }
    return message;
  },
  toAmino(message: QuotaLimit): QuotaLimitAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.default_limit = message.defaultLimit !== BigInt(0) ? message.defaultLimit?.toString() : undefined;
    obj.max_limit = message.maxLimit !== BigInt(0) ? message.maxLimit?.toString() : undefined;
    obj.free_tier = message.freeTier !== BigInt(0) ? message.freeTier?.toString() : undefined;
    obj.duration = message.duration === "" ? undefined : message.duration;
    obj.metric = message.metric === "" ? undefined : message.metric;
    obj.unit = message.unit === "" ? undefined : message.unit;
    obj.values = {};
    if (message.values) {
      Object.entries(message.values).forEach(([k, v]) => {
        obj.values[k] = v.toString();
      });
    }
    obj.display_name = message.displayName === "" ? undefined : message.displayName;
    return obj;
  },
  fromAminoMsg(object: QuotaLimitAminoMsg): QuotaLimit {
    return QuotaLimit.fromAmino(object.value);
  },
  fromProtoMsg(message: QuotaLimitProtoMsg): QuotaLimit {
    return QuotaLimit.decode(message.value);
  },
  toProto(message: QuotaLimit): Uint8Array {
    return QuotaLimit.encode(message).finish();
  },
  toProtoMsg(message: QuotaLimit): QuotaLimitProtoMsg {
    return {
      typeUrl: "/google.api.QuotaLimit",
      value: QuotaLimit.encode(message).finish()
    };
  }
};