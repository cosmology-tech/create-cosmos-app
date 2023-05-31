import { MetricDescriptor, MetricDescriptorAmino, MetricDescriptorSDKType } from "../../api/metric";
import { Distribution_BucketOptions } from "../../api/distribution";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, toTimestamp, fromTimestamp, isObject } from "../../../helpers";
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
export const LogMetric_ApiVersionAmino = LogMetric_ApiVersion;
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
export interface LogMetric_LabelExtractorsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface LogMetric_LabelExtractorsEntryAmino {
  key: string;
  value: string;
}
export interface LogMetric_LabelExtractorsEntryAminoMsg {
  type: string;
  value: LogMetric_LabelExtractorsEntryAmino;
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
export interface LogMetricAmino {
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
  metric_descriptor?: MetricDescriptorAmino;
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
  value_extractor: string;
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
  label_extractors: {
    [key: string]: string;
  };
  /**
   * Optional. The `bucket_options` are required when the logs-based metric is
   * using a DISTRIBUTION value type and it describes the bucket boundaries
   * used to create a histogram of the extracted values.
   */
  bucket_options?: Distribution_BucketOptionsAmino;
  /**
   * Output only. The creation timestamp of the metric.
   * 
   * This field may not be present for older metrics.
   */
  create_time?: Date;
  /**
   * Output only. The last update timestamp of the metric.
   * 
   * This field may not be present for older metrics.
   */
  update_time?: Date;
  /**
   * Deprecated. The API version that created or updated this metric.
   * The v2 format is used by default and cannot be changed.
   */
  /** @deprecated */
  version: LogMetric_ApiVersion;
}
export interface LogMetricAminoMsg {
  type: "/google.logging.v2.LogMetric";
  value: LogMetricAmino;
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
export interface ListLogMetricsRequestProtoMsg {
  typeUrl: "/google.logging.v2.ListLogMetricsRequest";
  value: Uint8Array;
}
/** The parameters to ListLogMetrics. */
export interface ListLogMetricsRequestAmino {
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
  page_token: string;
  /**
   * Optional. The maximum number of results to return from this request.
   * Non-positive values are ignored. The presence of `nextPageToken` in the
   * response indicates that more results might be available.
   */
  page_size: number;
}
export interface ListLogMetricsRequestAminoMsg {
  type: "/google.logging.v2.ListLogMetricsRequest";
  value: ListLogMetricsRequestAmino;
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
export interface ListLogMetricsResponseProtoMsg {
  typeUrl: "/google.logging.v2.ListLogMetricsResponse";
  value: Uint8Array;
}
/** Result returned from ListLogMetrics. */
export interface ListLogMetricsResponseAmino {
  /** A list of logs-based metrics. */
  metrics: LogMetricAmino[];
  /**
   * If there might be more results than appear in this response, then
   * `nextPageToken` is included. To get the next set of results, call this
   * method again using the value of `nextPageToken` as `pageToken`.
   */
  next_page_token: string;
}
export interface ListLogMetricsResponseAminoMsg {
  type: "/google.logging.v2.ListLogMetricsResponse";
  value: ListLogMetricsResponseAmino;
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
export interface GetLogMetricRequestProtoMsg {
  typeUrl: "/google.logging.v2.GetLogMetricRequest";
  value: Uint8Array;
}
/** The parameters to GetLogMetric. */
export interface GetLogMetricRequestAmino {
  /**
   * Required. The resource name of the desired metric:
   * 
   *     "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
   */
  metric_name: string;
}
export interface GetLogMetricRequestAminoMsg {
  type: "/google.logging.v2.GetLogMetricRequest";
  value: GetLogMetricRequestAmino;
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
export interface CreateLogMetricRequestProtoMsg {
  typeUrl: "/google.logging.v2.CreateLogMetricRequest";
  value: Uint8Array;
}
/** The parameters to CreateLogMetric. */
export interface CreateLogMetricRequestAmino {
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
  metric?: LogMetricAmino;
}
export interface CreateLogMetricRequestAminoMsg {
  type: "/google.logging.v2.CreateLogMetricRequest";
  value: CreateLogMetricRequestAmino;
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
export interface UpdateLogMetricRequestProtoMsg {
  typeUrl: "/google.logging.v2.UpdateLogMetricRequest";
  value: Uint8Array;
}
/** The parameters to UpdateLogMetric. */
export interface UpdateLogMetricRequestAmino {
  /**
   * Required. The resource name of the metric to update:
   * 
   *     "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
   * 
   * The updated metric must be provided in the request and it's
   * `name` field must be the same as `[METRIC_ID]` If the metric
   * does not exist in `[PROJECT_ID]`, then a new metric is created.
   */
  metric_name: string;
  /** Required. The updated metric. */
  metric?: LogMetricAmino;
}
export interface UpdateLogMetricRequestAminoMsg {
  type: "/google.logging.v2.UpdateLogMetricRequest";
  value: UpdateLogMetricRequestAmino;
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
export interface DeleteLogMetricRequestProtoMsg {
  typeUrl: "/google.logging.v2.DeleteLogMetricRequest";
  value: Uint8Array;
}
/** The parameters to DeleteLogMetric. */
export interface DeleteLogMetricRequestAmino {
  /**
   * Required. The resource name of the metric to delete:
   * 
   *     "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
   */
  metric_name: string;
}
export interface DeleteLogMetricRequestAminoMsg {
  type: "/google.logging.v2.DeleteLogMetricRequest";
  value: DeleteLogMetricRequestAmino;
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
  encode(message: LogMetric_LabelExtractorsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): LogMetric_LabelExtractorsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  toJSON(message: LogMetric_LabelExtractorsEntry): unknown {
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
  toSDK(message: LogMetric_LabelExtractorsEntry): LogMetric_LabelExtractorsEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: LogMetric_LabelExtractorsEntryAmino): LogMetric_LabelExtractorsEntry {
    return {
      key: object.key,
      value: object.value
    };
  },
  toAmino(message: LogMetric_LabelExtractorsEntry): LogMetric_LabelExtractorsEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
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
  encode(message: LogMetric, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): LogMetric {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
      version: isSet(object.version) ? logMetric_ApiVersionFromJSON(object.version) : 0
    };
  },
  toJSON(message: LogMetric): unknown {
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
      version: isSet(object.version) ? logMetric_ApiVersionFromJSON(object.version) : 0
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
    return {
      name: object.name,
      description: object.description,
      filter: object.filter,
      disabled: object.disabled,
      metricDescriptor: object?.metric_descriptor ? MetricDescriptor.fromAmino(object.metric_descriptor) : undefined,
      valueExtractor: object.value_extractor,
      labelExtractors: isObject(object.label_extractors) ? Object.entries(object.label_extractors).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      bucketOptions: object?.bucket_options ? Distribution_BucketOptions.fromAmino(object.bucket_options) : undefined,
      createTime: object?.create_time ? Timestamp.fromAmino(object.create_time) : undefined,
      updateTime: object?.update_time ? Timestamp.fromAmino(object.update_time) : undefined,
      version: isSet(object.version) ? logMetric_ApiVersionFromJSON(object.version) : 0
    };
  },
  toAmino(message: LogMetric): LogMetricAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.description = message.description;
    obj.filter = message.filter;
    obj.disabled = message.disabled;
    obj.metric_descriptor = message.metricDescriptor ? MetricDescriptor.toAmino(message.metricDescriptor) : undefined;
    obj.value_extractor = message.valueExtractor;
    obj.label_extractors = {};
    if (message.labelExtractors) {
      Object.entries(message.labelExtractors).forEach(([k, v]) => {
        obj.label_extractors[k] = v;
      });
    }
    obj.bucket_options = message.bucketOptions ? Distribution_BucketOptions.toAmino(message.bucketOptions) : undefined;
    obj.create_time = message.createTime ? Timestamp.toAmino(message.createTime) : undefined;
    obj.update_time = message.updateTime ? Timestamp.toAmino(message.updateTime) : undefined;
    obj.version = message.version;
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
  encode(message: ListLogMetricsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): ListLogMetricsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  toJSON(message: ListLogMetricsRequest): unknown {
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
  toSDK(message: ListLogMetricsRequest): ListLogMetricsRequestSDKType {
    const obj: any = {};
    obj.parent = message.parent;
    obj.page_token = message.pageToken;
    obj.page_size = message.pageSize;
    return obj;
  },
  fromAmino(object: ListLogMetricsRequestAmino): ListLogMetricsRequest {
    return {
      parent: object.parent,
      pageToken: object.page_token,
      pageSize: object.page_size
    };
  },
  toAmino(message: ListLogMetricsRequest): ListLogMetricsRequestAmino {
    const obj: any = {};
    obj.parent = message.parent;
    obj.page_token = message.pageToken;
    obj.page_size = message.pageSize;
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
  encode(message: ListLogMetricsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.metrics) {
      LogMetric.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ListLogMetricsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  toJSON(message: ListLogMetricsResponse): unknown {
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
    return {
      metrics: Array.isArray(object?.metrics) ? object.metrics.map((e: any) => LogMetric.fromAmino(e)) : [],
      nextPageToken: object.next_page_token
    };
  },
  toAmino(message: ListLogMetricsResponse): ListLogMetricsResponseAmino {
    const obj: any = {};
    if (message.metrics) {
      obj.metrics = message.metrics.map(e => e ? LogMetric.toAmino(e) : undefined);
    } else {
      obj.metrics = [];
    }
    obj.next_page_token = message.nextPageToken;
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
  encode(message: GetLogMetricRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metricName !== "") {
      writer.uint32(10).string(message.metricName);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetLogMetricRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  toJSON(message: GetLogMetricRequest): unknown {
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
  toSDK(message: GetLogMetricRequest): GetLogMetricRequestSDKType {
    const obj: any = {};
    obj.metric_name = message.metricName;
    return obj;
  },
  fromAmino(object: GetLogMetricRequestAmino): GetLogMetricRequest {
    return {
      metricName: object.metric_name
    };
  },
  toAmino(message: GetLogMetricRequest): GetLogMetricRequestAmino {
    const obj: any = {};
    obj.metric_name = message.metricName;
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
  encode(message: CreateLogMetricRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.metric !== undefined) {
      LogMetric.encode(message.metric, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CreateLogMetricRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  toJSON(message: CreateLogMetricRequest): unknown {
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
  toSDK(message: CreateLogMetricRequest): CreateLogMetricRequestSDKType {
    const obj: any = {};
    obj.parent = message.parent;
    message.metric !== undefined && (obj.metric = message.metric ? LogMetric.toSDK(message.metric) : undefined);
    return obj;
  },
  fromAmino(object: CreateLogMetricRequestAmino): CreateLogMetricRequest {
    return {
      parent: object.parent,
      metric: object?.metric ? LogMetric.fromAmino(object.metric) : undefined
    };
  },
  toAmino(message: CreateLogMetricRequest): CreateLogMetricRequestAmino {
    const obj: any = {};
    obj.parent = message.parent;
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
  encode(message: UpdateLogMetricRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metricName !== "") {
      writer.uint32(10).string(message.metricName);
    }
    if (message.metric !== undefined) {
      LogMetric.encode(message.metric, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLogMetricRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  toJSON(message: UpdateLogMetricRequest): unknown {
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
  toSDK(message: UpdateLogMetricRequest): UpdateLogMetricRequestSDKType {
    const obj: any = {};
    obj.metric_name = message.metricName;
    message.metric !== undefined && (obj.metric = message.metric ? LogMetric.toSDK(message.metric) : undefined);
    return obj;
  },
  fromAmino(object: UpdateLogMetricRequestAmino): UpdateLogMetricRequest {
    return {
      metricName: object.metric_name,
      metric: object?.metric ? LogMetric.fromAmino(object.metric) : undefined
    };
  },
  toAmino(message: UpdateLogMetricRequest): UpdateLogMetricRequestAmino {
    const obj: any = {};
    obj.metric_name = message.metricName;
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
  encode(message: DeleteLogMetricRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metricName !== "") {
      writer.uint32(10).string(message.metricName);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteLogMetricRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  toJSON(message: DeleteLogMetricRequest): unknown {
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
  toSDK(message: DeleteLogMetricRequest): DeleteLogMetricRequestSDKType {
    const obj: any = {};
    obj.metric_name = message.metricName;
    return obj;
  },
  fromAmino(object: DeleteLogMetricRequestAmino): DeleteLogMetricRequest {
    return {
      metricName: object.metric_name
    };
  },
  toAmino(message: DeleteLogMetricRequest): DeleteLogMetricRequestAmino {
    const obj: any = {};
    obj.metric_name = message.metricName;
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