import { MetricDescriptor, MetricDescriptorSDKType } from "../../api/metric";
import { Distribution_BucketOptions, Distribution_BucketOptionsSDKType } from "../../api/distribution";
import { Timestamp, TimestampSDKType } from "../../protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, toTimestamp, fromTimestamp, isObject } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { ComputedRef } from "vue";
export const protobufPackage = "google.logging.v2";
/** Logging API version. */
export enum LogMetric_ApiVersion {
  /** V2 - Logging API v2. */
  V2 = 0,
  /** V1 - Logging API v1. */
  V1 = 1,
  UNRECOGNIZED = -1,
}
export const LogMetric_ApiVersionSDKType = LogMetric_ApiVersion;
export function logMetric_ApiVersionFromJSON(object: any): LogMetric_ApiVersion {
  switch (object) {
    case 0:
    case "V2":
      return LogMetric_ApiVersion.V2;
    case 1:
    case "V1":
      return LogMetric_ApiVersion.V1;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LogMetric_ApiVersion.UNRECOGNIZED;
  }
}
export function logMetric_ApiVersionToJSON(object: LogMetric_ApiVersion): string {
  switch (object) {
    case LogMetric_ApiVersion.V2:
      return "V2";
    case LogMetric_ApiVersion.V1:
      return "V1";
    case LogMetric_ApiVersion.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface LogMetric_LabelExtractorsEntry {
  key: string;
  value: string;
}
export interface ReactiveLogMetric_LabelExtractorsEntry {
  key: ComputedRef<string>;
  value: ComputedRef<string>;
}
export interface LogMetric_LabelExtractorsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface LogMetric_LabelExtractorsEntrySDKType {
  key: string;
  value: string;
}
/**
 * Describes a logs-based metric. The value of the metric is the number of log
 * entries that match a logs filter in a given time interval.
 * 
 * Logs-based metrics can also be used to extract values from logs and create a
 * distribution of the values. The distribution records the statistics of the
 * extracted values along with an optional histogram of the values as specified
 * by the bucket options.
 */
export interface LogMetric {
  /**
   * Required. The client-assigned metric identifier.
   * Examples: `"error_count"`, `"nginx/requests"`.
   * 
   * Metric identifiers are limited to 100 characters and can include only the
   * following characters: `A-Z`, `a-z`, `0-9`, and the special characters
   * `_-.,+!*',()%/`. The forward-slash character (`/`) denotes a hierarchy of
   * name pieces, and it cannot be the first character of the name.
   * 
   * This field is the `[METRIC_ID]` part of a metric resource name in the
   * format "projects/[PROJECT_ID]/metrics/[METRIC_ID]". Example: If the
   * resource name of a metric is
   * `"projects/my-project/metrics/nginx%2Frequests"`, this field's value is
   * `"nginx/requests"`.
   */
  name: string;
  /**
   * Optional. A description of this metric, which is used in documentation.
   * The maximum length of the description is 8000 characters.
   */
  description: string;
  /**
   * Required. An [advanced logs
   * filter](https://cloud.google.com/logging/docs/view/advanced_filters) which
   * is used to match log entries. Example:
   * 
   *     "resource.type=gae_app AND severity>=ERROR"
   * 
   * The maximum length of the filter is 20000 characters.
   */
  filter: string;
  /**
   * Optional. If set to True, then this metric is disabled and it does not
   * generate any points.
   */
  disabled: boolean;
  /**
   * Optional. The metric descriptor associated with the logs-based metric.
   * If unspecified, it uses a default metric descriptor with a DELTA metric
   * kind, INT64 value type, with no labels and a unit of "1". Such a metric
   * counts the number of log entries matching the `filter` expression.
   * 
   * The `name`, `type`, and `description` fields in the `metric_descriptor`
   * are output only, and is constructed using the `name` and `description`
   * field in the LogMetric.
   * 
   * To create a logs-based metric that records a distribution of log values, a
   * DELTA metric kind with a DISTRIBUTION value type must be used along with
   * a `value_extractor` expression in the LogMetric.
   * 
   * Each label in the metric descriptor must have a matching label
   * name as the key and an extractor expression as the value in the
   * `label_extractors` map.
   * 
   * The `metric_kind` and `value_type` fields in the `metric_descriptor` cannot
   * be updated once initially configured. New labels can be added in the
   * `metric_descriptor`, but existing labels cannot be modified except for
   * their description.
   */
  metricDescriptor?: MetricDescriptor;
  /**
   * Optional. A `value_extractor` is required when using a distribution
   * logs-based metric to extract the values to record from a log entry.
   * Two functions are supported for value extraction: `EXTRACT(field)` or
   * `REGEXP_EXTRACT(field, regex)`. The argument are:
   *   1. field: The name of the log entry field from which the value is to be
   *      extracted.
   *   2. regex: A regular expression using the Google RE2 syntax
   *      (https://github.com/google/re2/wiki/Syntax) with a single capture
   *      group to extract data from the specified log entry field. The value
   *      of the field is converted to a string before applying the regex.
   *      It is an error to specify a regex that does not include exactly one
   *      capture group.
   * 
   * The result of the extraction must be convertible to a double type, as the
   * distribution always records double values. If either the extraction or
   * the conversion to double fails, then those values are not recorded in the
   * distribution.
   * 
   * Example: `REGEXP_EXTRACT(jsonPayload.request, ".*quantity=(\d+).*")`
   */
  valueExtractor: string;
  /**
   * Optional. A map from a label key string to an extractor expression which is
   * used to extract data from a log entry field and assign as the label value.
   * Each label key specified in the LabelDescriptor must have an associated
   * extractor expression in this map. The syntax of the extractor expression
   * is the same as for the `value_extractor` field.
   * 
   * The extracted value is converted to the type defined in the label
   * descriptor. If the either the extraction or the type conversion fails,
   * the label will have a default value. The default value for a string
   * label is an empty string, for an integer label its 0, and for a boolean
   * label its `false`.
   * 
   * Note that there are upper bounds on the maximum number of labels and the
   * number of active time series that are allowed in a project.
   */
  labelExtractors: {
    [key: string]: string;
  };
  /**
   * Optional. The `bucket_options` are required when the logs-based metric is
   * using a DISTRIBUTION value type and it describes the bucket boundaries
   * used to create a histogram of the extracted values.
   */
  bucketOptions?: Distribution_BucketOptions;
  /**
   * Output only. The creation timestamp of the metric.
   * 
   * This field may not be present for older metrics.
   */
  createTime?: Date;
  /**
   * Output only. The last update timestamp of the metric.
   * 
   * This field may not be present for older metrics.
   */
  updateTime?: Date;
  /**
   * Deprecated. The API version that created or updated this metric.
   * The v2 format is used by default and cannot be changed.
   */
  /** @deprecated */
  version: LogMetric_ApiVersion;
}
export interface ReactiveLogMetric {
  name: ComputedRef<string>;
  description: ComputedRef<string>;
  filter: ComputedRef<string>;
  disabled: ComputedRef<boolean>;
  metricDescriptor?: ComputedRef<MetricDescriptor>;
  valueExtractor: ComputedRef<string>;
  labelExtractors: ComputedRef<{
    [key: string]: string;
  }>;
  bucketOptions?: ComputedRef<Distribution_BucketOptions>;
  createTime?: ComputedRef<Date>;
  updateTime?: ComputedRef<Date>;
  version: ComputedRef<LogMetric_ApiVersion>;
}
export interface LogMetricProtoMsg {
  typeUrl: "/google.logging.v2.LogMetric";
  value: Uint8Array;
}
/**
 * Describes a logs-based metric. The value of the metric is the number of log
 * entries that match a logs filter in a given time interval.
 * 
 * Logs-based metrics can also be used to extract values from logs and create a
 * distribution of the values. The distribution records the statistics of the
 * extracted values along with an optional histogram of the values as specified
 * by the bucket options.
 */
export interface LogMetricSDKType {
  name: string;
  description: string;
  filter: string;
  disabled: boolean;
  metric_descriptor?: MetricDescriptorSDKType;
  value_extractor: string;
  label_extractors: {
    [key: string]: string;
  };
  bucket_options?: Distribution_BucketOptionsSDKType;
  create_time?: Date;
  update_time?: Date;
  /** @deprecated */
  version: LogMetric_ApiVersion;
}
/** The parameters to ListLogMetrics. */
export interface ListLogMetricsRequest {
  /**
   * Required. The name of the project containing the metrics:
   * 
   *     "projects/[PROJECT_ID]"
   */
  parent: string;
  /**
   * Optional. If present, then retrieve the next batch of results from the
   * preceding call to this method. `pageToken` must be the value of
   * `nextPageToken` from the previous response. The values of other method
   * parameters should be identical to those in the previous call.
   */
  pageToken: string;
  /**
   * Optional. The maximum number of results to return from this request.
   * Non-positive values are ignored. The presence of `nextPageToken` in the
   * response indicates that more results might be available.
   */
  pageSize: number;
}
export interface ReactiveListLogMetricsRequest {
  parent: ComputedRef<string>;
  pageToken: ComputedRef<string>;
  pageSize: ComputedRef<number>;
}
export interface ListLogMetricsRequestProtoMsg {
  typeUrl: "/google.logging.v2.ListLogMetricsRequest";
  value: Uint8Array;
}
/** The parameters to ListLogMetrics. */
export interface ListLogMetricsRequestSDKType {
  parent: string;
  page_token: string;
  page_size: number;
}
/** Result returned from ListLogMetrics. */
export interface ListLogMetricsResponse {
  /** A list of logs-based metrics. */
  metrics: LogMetric[];
  /**
   * If there might be more results than appear in this response, then
   * `nextPageToken` is included. To get the next set of results, call this
   * method again using the value of `nextPageToken` as `pageToken`.
   */
  nextPageToken: string;
}
export interface ReactiveListLogMetricsResponse {
  metrics: ComputedRef<LogMetric[]>;
  nextPageToken: ComputedRef<string>;
}
export interface ListLogMetricsResponseProtoMsg {
  typeUrl: "/google.logging.v2.ListLogMetricsResponse";
  value: Uint8Array;
}
/** Result returned from ListLogMetrics. */
export interface ListLogMetricsResponseSDKType {
  metrics: LogMetricSDKType[];
  next_page_token: string;
}
/** The parameters to GetLogMetric. */
export interface GetLogMetricRequest {
  /**
   * Required. The resource name of the desired metric:
   * 
   *     "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
   */
  metricName: string;
}
export interface ReactiveGetLogMetricRequest {
  metricName: ComputedRef<string>;
}
export interface GetLogMetricRequestProtoMsg {
  typeUrl: "/google.logging.v2.GetLogMetricRequest";
  value: Uint8Array;
}
/** The parameters to GetLogMetric. */
export interface GetLogMetricRequestSDKType {
  metric_name: string;
}
/** The parameters to CreateLogMetric. */
export interface CreateLogMetricRequest {
  /**
   * Required. The resource name of the project in which to create the metric:
   * 
   *     "projects/[PROJECT_ID]"
   * 
   * The new metric must be provided in the request.
   */
  parent: string;
  /**
   * Required. The new logs-based metric, which must not have an identifier that
   * already exists.
   */
  metric?: LogMetric;
}
export interface ReactiveCreateLogMetricRequest {
  parent: ComputedRef<string>;
  metric?: ComputedRef<LogMetric>;
}
export interface CreateLogMetricRequestProtoMsg {
  typeUrl: "/google.logging.v2.CreateLogMetricRequest";
  value: Uint8Array;
}
/** The parameters to CreateLogMetric. */
export interface CreateLogMetricRequestSDKType {
  parent: string;
  metric?: LogMetricSDKType;
}
/** The parameters to UpdateLogMetric. */
export interface UpdateLogMetricRequest {
  /**
   * Required. The resource name of the metric to update:
   * 
   *     "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
   * 
   * The updated metric must be provided in the request and it's
   * `name` field must be the same as `[METRIC_ID]` If the metric
   * does not exist in `[PROJECT_ID]`, then a new metric is created.
   */
  metricName: string;
  /** Required. The updated metric. */
  metric?: LogMetric;
}
export interface ReactiveUpdateLogMetricRequest {
  metricName: ComputedRef<string>;
  metric?: ComputedRef<LogMetric>;
}
export interface UpdateLogMetricRequestProtoMsg {
  typeUrl: "/google.logging.v2.UpdateLogMetricRequest";
  value: Uint8Array;
}
/** The parameters to UpdateLogMetric. */
export interface UpdateLogMetricRequestSDKType {
  metric_name: string;
  metric?: LogMetricSDKType;
}
/** The parameters to DeleteLogMetric. */
export interface DeleteLogMetricRequest {
  /**
   * Required. The resource name of the metric to delete:
   * 
   *     "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
   */
  metricName: string;
}
export interface ReactiveDeleteLogMetricRequest {
  metricName: ComputedRef<string>;
}
export interface DeleteLogMetricRequestProtoMsg {
  typeUrl: "/google.logging.v2.DeleteLogMetricRequest";
  value: Uint8Array;
}
/** The parameters to DeleteLogMetric. */
export interface DeleteLogMetricRequestSDKType {
  metric_name: string;
}
function createBaseLogMetric_LabelExtractorsEntry(): LogMetric_LabelExtractorsEntry {
  return {
    key: "",
    value: ""
  };
}
export const LogMetric_LabelExtractorsEntry = {
  encode(message: LogMetric_LabelExtractorsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LogMetric_LabelExtractorsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogMetric_LabelExtractorsEntry();
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
  fromJSON(object: any): LogMetric_LabelExtractorsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: LogMetric_LabelExtractorsEntry): JsonSafe<LogMetric_LabelExtractorsEntry> {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: DeepPartial<LogMetric_LabelExtractorsEntry>): LogMetric_LabelExtractorsEntry {
    const message = createBaseLogMetric_LabelExtractorsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromSDK(object: LogMetric_LabelExtractorsEntrySDKType): LogMetric_LabelExtractorsEntry {
    return {
      key: object?.key,
      value: object?.value
    };
  },
  fromSDKJSON(object: any): LogMetric_LabelExtractorsEntrySDKType {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toSDK(message: LogMetric_LabelExtractorsEntry): LogMetric_LabelExtractorsEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: LogMetric_LabelExtractorsEntryAmino): LogMetric_LabelExtractorsEntry {
    const message = createBaseLogMetric_LabelExtractorsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: LogMetric_LabelExtractorsEntry): LogMetric_LabelExtractorsEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: LogMetric_LabelExtractorsEntryAminoMsg): LogMetric_LabelExtractorsEntry {
    return LogMetric_LabelExtractorsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: LogMetric_LabelExtractorsEntryProtoMsg): LogMetric_LabelExtractorsEntry {
    return LogMetric_LabelExtractorsEntry.decode(message.value);
  },
  toProto(message: LogMetric_LabelExtractorsEntry): Uint8Array {
    return LogMetric_LabelExtractorsEntry.encode(message).finish();
  }
};
function createBaseLogMetric(): LogMetric {
  return {
    name: "",
    description: "",
    filter: "",
    disabled: false,
    metricDescriptor: undefined,
    valueExtractor: "",
    labelExtractors: {},
    bucketOptions: undefined,
    createTime: undefined,
    updateTime: undefined,
    version: 0
  };
}
export const LogMetric = {
  typeUrl: "/google.logging.v2.LogMetric",
  encode(message: LogMetric, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.filter !== "") {
      writer.uint32(26).string(message.filter);
    }
    if (message.disabled === true) {
      writer.uint32(96).bool(message.disabled);
    }
    if (message.metricDescriptor !== undefined) {
      MetricDescriptor.encode(message.metricDescriptor, writer.uint32(42).fork()).ldelim();
    }
    if (message.valueExtractor !== "") {
      writer.uint32(50).string(message.valueExtractor);
    }
    Object.entries(message.labelExtractors).forEach(([key, value]) => {
      LogMetric_LabelExtractorsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(58).fork()).ldelim();
    });
    if (message.bucketOptions !== undefined) {
      Distribution_BucketOptions.encode(message.bucketOptions, writer.uint32(66).fork()).ldelim();
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(74).fork()).ldelim();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(82).fork()).ldelim();
    }
    if (message.version !== 0) {
      writer.uint32(32).int32(message.version);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LogMetric {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogMetric();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.filter = reader.string();
          break;
        case 12:
          message.disabled = reader.bool();
          break;
        case 5:
          message.metricDescriptor = MetricDescriptor.decode(reader, reader.uint32());
          break;
        case 6:
          message.valueExtractor = reader.string();
          break;
        case 7:
          const entry7 = LogMetric_LabelExtractorsEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.labelExtractors[entry7.key] = entry7.value;
          }
          break;
        case 8:
          message.bucketOptions = Distribution_BucketOptions.decode(reader, reader.uint32());
          break;
        case 9:
          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 10:
          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.version = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LogMetric {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      filter: isSet(object.filter) ? String(object.filter) : "",
      disabled: isSet(object.disabled) ? Boolean(object.disabled) : false,
      metricDescriptor: isSet(object.metricDescriptor) ? MetricDescriptor.fromJSON(object.metricDescriptor) : undefined,
      valueExtractor: isSet(object.valueExtractor) ? String(object.valueExtractor) : "",
      labelExtractors: isObject(object.labelExtractors) ? Object.entries(object.labelExtractors).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      bucketOptions: isSet(object.bucketOptions) ? Distribution_BucketOptions.fromJSON(object.bucketOptions) : undefined,
      createTime: isSet(object.createTime) ? new Date(object.createTime) : undefined,
      updateTime: isSet(object.updateTime) ? new Date(object.updateTime) : undefined,
      version: isSet(object.version) ? logMetric_ApiVersionFromJSON(object.version) : -1
    };
  },
  toJSON(message: LogMetric): JsonSafe<LogMetric> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.filter !== undefined && (obj.filter = message.filter);
    message.disabled !== undefined && (obj.disabled = message.disabled);
    message.metricDescriptor !== undefined && (obj.metricDescriptor = message.metricDescriptor ? MetricDescriptor.toJSON(message.metricDescriptor) : undefined);
    message.valueExtractor !== undefined && (obj.valueExtractor = message.valueExtractor);
    obj.labelExtractors = {};
    if (message.labelExtractors) {
      Object.entries(message.labelExtractors).forEach(([k, v]) => {
        obj.labelExtractors[k] = v;
      });
    }
    message.bucketOptions !== undefined && (obj.bucketOptions = message.bucketOptions ? Distribution_BucketOptions.toJSON(message.bucketOptions) : undefined);
    message.createTime !== undefined && (obj.createTime = message.createTime.toISOString());
    message.updateTime !== undefined && (obj.updateTime = message.updateTime.toISOString());
    message.version !== undefined && (obj.version = logMetric_ApiVersionToJSON(message.version));
    return obj;
  },
  fromPartial(object: DeepPartial<LogMetric>): LogMetric {
    const message = createBaseLogMetric();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.filter = object.filter ?? "";
    message.disabled = object.disabled ?? false;
    message.metricDescriptor = object.metricDescriptor !== undefined && object.metricDescriptor !== null ? MetricDescriptor.fromPartial(object.metricDescriptor) : undefined;
    message.valueExtractor = object.valueExtractor ?? "";
    message.labelExtractors = Object.entries(object.labelExtractors ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.bucketOptions = object.bucketOptions !== undefined && object.bucketOptions !== null ? Distribution_BucketOptions.fromPartial(object.bucketOptions) : undefined;
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    message.version = object.version ?? 0;
    return message;
  },
  fromSDK(object: LogMetricSDKType): LogMetric {
    return {
      name: object?.name,
      description: object?.description,
      filter: object?.filter,
      disabled: object?.disabled,
      metricDescriptor: object.metric_descriptor ? MetricDescriptor.fromSDK(object.metric_descriptor) : undefined,
      valueExtractor: object?.value_extractor,
      labelExtractors: isObject(object.label_extractors) ? Object.entries(object.label_extractors).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      bucketOptions: object.bucket_options ? Distribution_BucketOptions.fromSDK(object.bucket_options) : undefined,
      createTime: object.create_time ?? undefined,
      updateTime: object.update_time ?? undefined,
      version: isSet(object.version) ? logMetric_ApiVersionFromJSON(object.version) : -1
    };
  },
  fromSDKJSON(object: any): LogMetricSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      filter: isSet(object.filter) ? String(object.filter) : "",
      disabled: isSet(object.disabled) ? Boolean(object.disabled) : false,
      metric_descriptor: isSet(object.metric_descriptor) ? MetricDescriptor.fromSDKJSON(object.metric_descriptor) : undefined,
      value_extractor: isSet(object.value_extractor) ? String(object.value_extractor) : "",
      label_extractors: isObject(object.label_extractors) ? Object.entries(object.label_extractors).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      bucket_options: isSet(object.bucket_options) ? Distribution_BucketOptions.fromSDKJSON(object.bucket_options) : undefined,
      create_time: isSet(object.create_time) ? new Date(object.create_time) : undefined,
      update_time: isSet(object.update_time) ? new Date(object.update_time) : undefined,
      version: isSet(object.version) ? logMetric_ApiVersionFromJSON(object.version) : -1
    };
  },
  toSDK(message: LogMetric): LogMetricSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.description = message.description;
    obj.filter = message.filter;
    obj.disabled = message.disabled;
    message.metricDescriptor !== undefined && (obj.metric_descriptor = message.metricDescriptor ? MetricDescriptor.toSDK(message.metricDescriptor) : undefined);
    obj.value_extractor = message.valueExtractor;
    obj.label_extractors = {};
    if (message.labelExtractors) {
      Object.entries(message.labelExtractors).forEach(([k, v]) => {
        obj.label_extractors[k] = v;
      });
    }
    message.bucketOptions !== undefined && (obj.bucket_options = message.bucketOptions ? Distribution_BucketOptions.toSDK(message.bucketOptions) : undefined);
    message.createTime !== undefined && (obj.create_time = message.createTime ?? undefined);
    message.updateTime !== undefined && (obj.update_time = message.updateTime ?? undefined);
    message.version !== undefined && (obj.version = logMetric_ApiVersionToJSON(message.version));
    return obj;
  },
  fromAmino(object: LogMetricAmino): LogMetric {
    const message = createBaseLogMetric();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.filter !== undefined && object.filter !== null) {
      message.filter = object.filter;
    }
    if (object.disabled !== undefined && object.disabled !== null) {
      message.disabled = object.disabled;
    }
    if (object.metric_descriptor !== undefined && object.metric_descriptor !== null) {
      message.metricDescriptor = MetricDescriptor.fromAmino(object.metric_descriptor);
    }
    if (object.value_extractor !== undefined && object.value_extractor !== null) {
      message.valueExtractor = object.value_extractor;
    }
    message.labelExtractors = Object.entries(object.label_extractors ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    if (object.bucket_options !== undefined && object.bucket_options !== null) {
      message.bucketOptions = Distribution_BucketOptions.fromAmino(object.bucket_options);
    }
    if (object.create_time !== undefined && object.create_time !== null) {
      message.createTime = fromTimestamp(Timestamp.fromAmino(object.create_time));
    }
    if (object.update_time !== undefined && object.update_time !== null) {
      message.updateTime = fromTimestamp(Timestamp.fromAmino(object.update_time));
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    return message;
  },
  toAmino(message: LogMetric): LogMetricAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.filter = message.filter === "" ? undefined : message.filter;
    obj.disabled = message.disabled === false ? undefined : message.disabled;
    obj.metric_descriptor = message.metricDescriptor ? MetricDescriptor.toAmino(message.metricDescriptor) : undefined;
    obj.value_extractor = message.valueExtractor === "" ? undefined : message.valueExtractor;
    obj.label_extractors = {};
    if (message.labelExtractors) {
      Object.entries(message.labelExtractors).forEach(([k, v]) => {
        obj.label_extractors[k] = v;
      });
    }
    obj.bucket_options = message.bucketOptions ? Distribution_BucketOptions.toAmino(message.bucketOptions) : undefined;
    obj.create_time = message.createTime ? Timestamp.toAmino(toTimestamp(message.createTime)) : undefined;
    obj.update_time = message.updateTime ? Timestamp.toAmino(toTimestamp(message.updateTime)) : undefined;
    obj.version = message.version === 0 ? undefined : message.version;
    return obj;
  },
  fromAminoMsg(object: LogMetricAminoMsg): LogMetric {
    return LogMetric.fromAmino(object.value);
  },
  fromProtoMsg(message: LogMetricProtoMsg): LogMetric {
    return LogMetric.decode(message.value);
  },
  toProto(message: LogMetric): Uint8Array {
    return LogMetric.encode(message).finish();
  },
  toProtoMsg(message: LogMetric): LogMetricProtoMsg {
    return {
      typeUrl: "/google.logging.v2.LogMetric",
      value: LogMetric.encode(message).finish()
    };
  }
};
function createBaseListLogMetricsRequest(): ListLogMetricsRequest {
  return {
    parent: "",
    pageToken: "",
    pageSize: 0
  };
}
export const ListLogMetricsRequest = {
  typeUrl: "/google.logging.v2.ListLogMetricsRequest",
  encode(message: ListLogMetricsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }
    if (message.pageSize !== 0) {
      writer.uint32(24).int32(message.pageSize);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListLogMetricsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListLogMetricsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.pageToken = reader.string();
          break;
        case 3:
          message.pageSize = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListLogMetricsRequest {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      pageToken: isSet(object.pageToken) ? String(object.pageToken) : "",
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0
    };
  },
  toJSON(message: ListLogMetricsRequest): JsonSafe<ListLogMetricsRequest> {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    return obj;
  },
  fromPartial(object: DeepPartial<ListLogMetricsRequest>): ListLogMetricsRequest {
    const message = createBaseListLogMetricsRequest();
    message.parent = object.parent ?? "";
    message.pageToken = object.pageToken ?? "";
    message.pageSize = object.pageSize ?? 0;
    return message;
  },
  fromSDK(object: ListLogMetricsRequestSDKType): ListLogMetricsRequest {
    return {
      parent: object?.parent,
      pageToken: object?.page_token,
      pageSize: object?.page_size
    };
  },
  fromSDKJSON(object: any): ListLogMetricsRequestSDKType {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      page_token: isSet(object.page_token) ? String(object.page_token) : "",
      page_size: isSet(object.page_size) ? Number(object.page_size) : 0
    };
  },
  toSDK(message: ListLogMetricsRequest): ListLogMetricsRequestSDKType {
    const obj: any = {};
    obj.parent = message.parent;
    obj.page_token = message.pageToken;
    obj.page_size = message.pageSize;
    return obj;
  },
  fromAmino(object: ListLogMetricsRequestAmino): ListLogMetricsRequest {
    const message = createBaseListLogMetricsRequest();
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    }
    if (object.page_token !== undefined && object.page_token !== null) {
      message.pageToken = object.page_token;
    }
    if (object.page_size !== undefined && object.page_size !== null) {
      message.pageSize = object.page_size;
    }
    return message;
  },
  toAmino(message: ListLogMetricsRequest): ListLogMetricsRequestAmino {
    const obj: any = {};
    obj.parent = message.parent === "" ? undefined : message.parent;
    obj.page_token = message.pageToken === "" ? undefined : message.pageToken;
    obj.page_size = message.pageSize === 0 ? undefined : message.pageSize;
    return obj;
  },
  fromAminoMsg(object: ListLogMetricsRequestAminoMsg): ListLogMetricsRequest {
    return ListLogMetricsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ListLogMetricsRequestProtoMsg): ListLogMetricsRequest {
    return ListLogMetricsRequest.decode(message.value);
  },
  toProto(message: ListLogMetricsRequest): Uint8Array {
    return ListLogMetricsRequest.encode(message).finish();
  },
  toProtoMsg(message: ListLogMetricsRequest): ListLogMetricsRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.ListLogMetricsRequest",
      value: ListLogMetricsRequest.encode(message).finish()
    };
  }
};
function createBaseListLogMetricsResponse(): ListLogMetricsResponse {
  return {
    metrics: [],
    nextPageToken: ""
  };
}
export const ListLogMetricsResponse = {
  typeUrl: "/google.logging.v2.ListLogMetricsResponse",
  encode(message: ListLogMetricsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.metrics) {
      LogMetric.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListLogMetricsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListLogMetricsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metrics.push(LogMetric.decode(reader, reader.uint32()));
          break;
        case 2:
          message.nextPageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListLogMetricsResponse {
    return {
      metrics: Array.isArray(object?.metrics) ? object.metrics.map((e: any) => LogMetric.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? String(object.nextPageToken) : ""
    };
  },
  toJSON(message: ListLogMetricsResponse): JsonSafe<ListLogMetricsResponse> {
    const obj: any = {};
    if (message.metrics) {
      obj.metrics = message.metrics.map(e => e ? LogMetric.toJSON(e) : undefined);
    } else {
      obj.metrics = [];
    }
    message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
    return obj;
  },
  fromPartial(object: DeepPartial<ListLogMetricsResponse>): ListLogMetricsResponse {
    const message = createBaseListLogMetricsResponse();
    message.metrics = object.metrics?.map(e => LogMetric.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
  fromSDK(object: ListLogMetricsResponseSDKType): ListLogMetricsResponse {
    return {
      metrics: Array.isArray(object?.metrics) ? object.metrics.map((e: any) => LogMetric.fromSDK(e)) : [],
      nextPageToken: object?.next_page_token
    };
  },
  fromSDKJSON(object: any): ListLogMetricsResponseSDKType {
    return {
      metrics: Array.isArray(object?.metrics) ? object.metrics.map((e: any) => LogMetric.fromSDKJSON(e)) : [],
      next_page_token: isSet(object.next_page_token) ? String(object.next_page_token) : ""
    };
  },
  toSDK(message: ListLogMetricsResponse): ListLogMetricsResponseSDKType {
    const obj: any = {};
    if (message.metrics) {
      obj.metrics = message.metrics.map(e => e ? LogMetric.toSDK(e) : undefined);
    } else {
      obj.metrics = [];
    }
    obj.next_page_token = message.nextPageToken;
    return obj;
  },
  fromAmino(object: ListLogMetricsResponseAmino): ListLogMetricsResponse {
    const message = createBaseListLogMetricsResponse();
    message.metrics = object.metrics?.map(e => LogMetric.fromAmino(e)) || [];
    if (object.next_page_token !== undefined && object.next_page_token !== null) {
      message.nextPageToken = object.next_page_token;
    }
    return message;
  },
  toAmino(message: ListLogMetricsResponse): ListLogMetricsResponseAmino {
    const obj: any = {};
    if (message.metrics) {
      obj.metrics = message.metrics.map(e => e ? LogMetric.toAmino(e) : undefined);
    } else {
      obj.metrics = message.metrics;
    }
    obj.next_page_token = message.nextPageToken === "" ? undefined : message.nextPageToken;
    return obj;
  },
  fromAminoMsg(object: ListLogMetricsResponseAminoMsg): ListLogMetricsResponse {
    return ListLogMetricsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ListLogMetricsResponseProtoMsg): ListLogMetricsResponse {
    return ListLogMetricsResponse.decode(message.value);
  },
  toProto(message: ListLogMetricsResponse): Uint8Array {
    return ListLogMetricsResponse.encode(message).finish();
  },
  toProtoMsg(message: ListLogMetricsResponse): ListLogMetricsResponseProtoMsg {
    return {
      typeUrl: "/google.logging.v2.ListLogMetricsResponse",
      value: ListLogMetricsResponse.encode(message).finish()
    };
  }
};
function createBaseGetLogMetricRequest(): GetLogMetricRequest {
  return {
    metricName: ""
  };
}
export const GetLogMetricRequest = {
  typeUrl: "/google.logging.v2.GetLogMetricRequest",
  encode(message: GetLogMetricRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.metricName !== "") {
      writer.uint32(10).string(message.metricName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetLogMetricRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLogMetricRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metricName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetLogMetricRequest {
    return {
      metricName: isSet(object.metricName) ? String(object.metricName) : ""
    };
  },
  toJSON(message: GetLogMetricRequest): JsonSafe<GetLogMetricRequest> {
    const obj: any = {};
    message.metricName !== undefined && (obj.metricName = message.metricName);
    return obj;
  },
  fromPartial(object: DeepPartial<GetLogMetricRequest>): GetLogMetricRequest {
    const message = createBaseGetLogMetricRequest();
    message.metricName = object.metricName ?? "";
    return message;
  },
  fromSDK(object: GetLogMetricRequestSDKType): GetLogMetricRequest {
    return {
      metricName: object?.metric_name
    };
  },
  fromSDKJSON(object: any): GetLogMetricRequestSDKType {
    return {
      metric_name: isSet(object.metric_name) ? String(object.metric_name) : ""
    };
  },
  toSDK(message: GetLogMetricRequest): GetLogMetricRequestSDKType {
    const obj: any = {};
    obj.metric_name = message.metricName;
    return obj;
  },
  fromAmino(object: GetLogMetricRequestAmino): GetLogMetricRequest {
    const message = createBaseGetLogMetricRequest();
    if (object.metric_name !== undefined && object.metric_name !== null) {
      message.metricName = object.metric_name;
    }
    return message;
  },
  toAmino(message: GetLogMetricRequest): GetLogMetricRequestAmino {
    const obj: any = {};
    obj.metric_name = message.metricName === "" ? undefined : message.metricName;
    return obj;
  },
  fromAminoMsg(object: GetLogMetricRequestAminoMsg): GetLogMetricRequest {
    return GetLogMetricRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: GetLogMetricRequestProtoMsg): GetLogMetricRequest {
    return GetLogMetricRequest.decode(message.value);
  },
  toProto(message: GetLogMetricRequest): Uint8Array {
    return GetLogMetricRequest.encode(message).finish();
  },
  toProtoMsg(message: GetLogMetricRequest): GetLogMetricRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.GetLogMetricRequest",
      value: GetLogMetricRequest.encode(message).finish()
    };
  }
};
function createBaseCreateLogMetricRequest(): CreateLogMetricRequest {
  return {
    parent: "",
    metric: undefined
  };
}
export const CreateLogMetricRequest = {
  typeUrl: "/google.logging.v2.CreateLogMetricRequest",
  encode(message: CreateLogMetricRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.metric !== undefined) {
      LogMetric.encode(message.metric, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CreateLogMetricRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateLogMetricRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.metric = LogMetric.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CreateLogMetricRequest {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      metric: isSet(object.metric) ? LogMetric.fromJSON(object.metric) : undefined
    };
  },
  toJSON(message: CreateLogMetricRequest): JsonSafe<CreateLogMetricRequest> {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.metric !== undefined && (obj.metric = message.metric ? LogMetric.toJSON(message.metric) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<CreateLogMetricRequest>): CreateLogMetricRequest {
    const message = createBaseCreateLogMetricRequest();
    message.parent = object.parent ?? "";
    message.metric = object.metric !== undefined && object.metric !== null ? LogMetric.fromPartial(object.metric) : undefined;
    return message;
  },
  fromSDK(object: CreateLogMetricRequestSDKType): CreateLogMetricRequest {
    return {
      parent: object?.parent,
      metric: object.metric ? LogMetric.fromSDK(object.metric) : undefined
    };
  },
  fromSDKJSON(object: any): CreateLogMetricRequestSDKType {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      metric: isSet(object.metric) ? LogMetric.fromSDKJSON(object.metric) : undefined
    };
  },
  toSDK(message: CreateLogMetricRequest): CreateLogMetricRequestSDKType {
    const obj: any = {};
    obj.parent = message.parent;
    message.metric !== undefined && (obj.metric = message.metric ? LogMetric.toSDK(message.metric) : undefined);
    return obj;
  },
  fromAmino(object: CreateLogMetricRequestAmino): CreateLogMetricRequest {
    const message = createBaseCreateLogMetricRequest();
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    }
    if (object.metric !== undefined && object.metric !== null) {
      message.metric = LogMetric.fromAmino(object.metric);
    }
    return message;
  },
  toAmino(message: CreateLogMetricRequest): CreateLogMetricRequestAmino {
    const obj: any = {};
    obj.parent = message.parent === "" ? undefined : message.parent;
    obj.metric = message.metric ? LogMetric.toAmino(message.metric) : undefined;
    return obj;
  },
  fromAminoMsg(object: CreateLogMetricRequestAminoMsg): CreateLogMetricRequest {
    return CreateLogMetricRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: CreateLogMetricRequestProtoMsg): CreateLogMetricRequest {
    return CreateLogMetricRequest.decode(message.value);
  },
  toProto(message: CreateLogMetricRequest): Uint8Array {
    return CreateLogMetricRequest.encode(message).finish();
  },
  toProtoMsg(message: CreateLogMetricRequest): CreateLogMetricRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.CreateLogMetricRequest",
      value: CreateLogMetricRequest.encode(message).finish()
    };
  }
};
function createBaseUpdateLogMetricRequest(): UpdateLogMetricRequest {
  return {
    metricName: "",
    metric: undefined
  };
}
export const UpdateLogMetricRequest = {
  typeUrl: "/google.logging.v2.UpdateLogMetricRequest",
  encode(message: UpdateLogMetricRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.metricName !== "") {
      writer.uint32(10).string(message.metricName);
    }
    if (message.metric !== undefined) {
      LogMetric.encode(message.metric, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateLogMetricRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateLogMetricRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metricName = reader.string();
          break;
        case 2:
          message.metric = LogMetric.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpdateLogMetricRequest {
    return {
      metricName: isSet(object.metricName) ? String(object.metricName) : "",
      metric: isSet(object.metric) ? LogMetric.fromJSON(object.metric) : undefined
    };
  },
  toJSON(message: UpdateLogMetricRequest): JsonSafe<UpdateLogMetricRequest> {
    const obj: any = {};
    message.metricName !== undefined && (obj.metricName = message.metricName);
    message.metric !== undefined && (obj.metric = message.metric ? LogMetric.toJSON(message.metric) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<UpdateLogMetricRequest>): UpdateLogMetricRequest {
    const message = createBaseUpdateLogMetricRequest();
    message.metricName = object.metricName ?? "";
    message.metric = object.metric !== undefined && object.metric !== null ? LogMetric.fromPartial(object.metric) : undefined;
    return message;
  },
  fromSDK(object: UpdateLogMetricRequestSDKType): UpdateLogMetricRequest {
    return {
      metricName: object?.metric_name,
      metric: object.metric ? LogMetric.fromSDK(object.metric) : undefined
    };
  },
  fromSDKJSON(object: any): UpdateLogMetricRequestSDKType {
    return {
      metric_name: isSet(object.metric_name) ? String(object.metric_name) : "",
      metric: isSet(object.metric) ? LogMetric.fromSDKJSON(object.metric) : undefined
    };
  },
  toSDK(message: UpdateLogMetricRequest): UpdateLogMetricRequestSDKType {
    const obj: any = {};
    obj.metric_name = message.metricName;
    message.metric !== undefined && (obj.metric = message.metric ? LogMetric.toSDK(message.metric) : undefined);
    return obj;
  },
  fromAmino(object: UpdateLogMetricRequestAmino): UpdateLogMetricRequest {
    const message = createBaseUpdateLogMetricRequest();
    if (object.metric_name !== undefined && object.metric_name !== null) {
      message.metricName = object.metric_name;
    }
    if (object.metric !== undefined && object.metric !== null) {
      message.metric = LogMetric.fromAmino(object.metric);
    }
    return message;
  },
  toAmino(message: UpdateLogMetricRequest): UpdateLogMetricRequestAmino {
    const obj: any = {};
    obj.metric_name = message.metricName === "" ? undefined : message.metricName;
    obj.metric = message.metric ? LogMetric.toAmino(message.metric) : undefined;
    return obj;
  },
  fromAminoMsg(object: UpdateLogMetricRequestAminoMsg): UpdateLogMetricRequest {
    return UpdateLogMetricRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateLogMetricRequestProtoMsg): UpdateLogMetricRequest {
    return UpdateLogMetricRequest.decode(message.value);
  },
  toProto(message: UpdateLogMetricRequest): Uint8Array {
    return UpdateLogMetricRequest.encode(message).finish();
  },
  toProtoMsg(message: UpdateLogMetricRequest): UpdateLogMetricRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.UpdateLogMetricRequest",
      value: UpdateLogMetricRequest.encode(message).finish()
    };
  }
};
function createBaseDeleteLogMetricRequest(): DeleteLogMetricRequest {
  return {
    metricName: ""
  };
}
export const DeleteLogMetricRequest = {
  typeUrl: "/google.logging.v2.DeleteLogMetricRequest",
  encode(message: DeleteLogMetricRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.metricName !== "") {
      writer.uint32(10).string(message.metricName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DeleteLogMetricRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteLogMetricRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metricName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DeleteLogMetricRequest {
    return {
      metricName: isSet(object.metricName) ? String(object.metricName) : ""
    };
  },
  toJSON(message: DeleteLogMetricRequest): JsonSafe<DeleteLogMetricRequest> {
    const obj: any = {};
    message.metricName !== undefined && (obj.metricName = message.metricName);
    return obj;
  },
  fromPartial(object: DeepPartial<DeleteLogMetricRequest>): DeleteLogMetricRequest {
    const message = createBaseDeleteLogMetricRequest();
    message.metricName = object.metricName ?? "";
    return message;
  },
  fromSDK(object: DeleteLogMetricRequestSDKType): DeleteLogMetricRequest {
    return {
      metricName: object?.metric_name
    };
  },
  fromSDKJSON(object: any): DeleteLogMetricRequestSDKType {
    return {
      metric_name: isSet(object.metric_name) ? String(object.metric_name) : ""
    };
  },
  toSDK(message: DeleteLogMetricRequest): DeleteLogMetricRequestSDKType {
    const obj: any = {};
    obj.metric_name = message.metricName;
    return obj;
  },
  fromAmino(object: DeleteLogMetricRequestAmino): DeleteLogMetricRequest {
    const message = createBaseDeleteLogMetricRequest();
    if (object.metric_name !== undefined && object.metric_name !== null) {
      message.metricName = object.metric_name;
    }
    return message;
  },
  toAmino(message: DeleteLogMetricRequest): DeleteLogMetricRequestAmino {
    const obj: any = {};
    obj.metric_name = message.metricName === "" ? undefined : message.metricName;
    return obj;
  },
  fromAminoMsg(object: DeleteLogMetricRequestAminoMsg): DeleteLogMetricRequest {
    return DeleteLogMetricRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: DeleteLogMetricRequestProtoMsg): DeleteLogMetricRequest {
    return DeleteLogMetricRequest.decode(message.value);
  },
  toProto(message: DeleteLogMetricRequest): Uint8Array {
    return DeleteLogMetricRequest.encode(message).finish();
  },
  toProtoMsg(message: DeleteLogMetricRequest): DeleteLogMetricRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.DeleteLogMetricRequest",
      value: DeleteLogMetricRequest.encode(message).finish()
    };
  }
};