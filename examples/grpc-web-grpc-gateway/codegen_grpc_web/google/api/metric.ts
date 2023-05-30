import { LaunchStage, launchStageFromJSON, launchStageToJSON } from "./launch_stage";
import { Duration, DurationAmino, DurationSDKType } from "../protobuf/duration";
import { LabelDescriptor, LabelDescriptorAmino, LabelDescriptorSDKType } from "./label";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, isObject } from "../../helpers";
export const protobufPackage = "google.api";
/**
 * The kind of measurement. It describes how the data is reported.
 * For information on setting the start time and end time based on
 * the MetricKind, see [TimeInterval][google.monitoring.v3.TimeInterval].
 */
export enum MetricDescriptor_MetricKind {
  /** METRIC_KIND_UNSPECIFIED - Do not use this default value. */
  METRIC_KIND_UNSPECIFIED = 0,
  /** GAUGE - An instantaneous measurement of a value. */
  GAUGE = 1,
  /** DELTA - The change in a value during a time interval. */
  DELTA = 2,
  /**
   * CUMULATIVE - A value accumulated over a time interval.  Cumulative
   * measurements in a time series should have the same start time
   * and increasing end times, until an event resets the cumulative
   * value to zero and sets a new start time for the following
   * points.
   */
  CUMULATIVE = 3,
  UNRECOGNIZED = -1,
}
export const MetricDescriptor_MetricKindSDKType = MetricDescriptor_MetricKind;
export const MetricDescriptor_MetricKindAmino = MetricDescriptor_MetricKind;
export function metricDescriptor_MetricKindFromJSON(object: any): MetricDescriptor_MetricKind {
  switch (object) {
    case 0:
    case "METRIC_KIND_UNSPECIFIED":
      return MetricDescriptor_MetricKind.METRIC_KIND_UNSPECIFIED;
    case 1:
    case "GAUGE":
      return MetricDescriptor_MetricKind.GAUGE;
    case 2:
    case "DELTA":
      return MetricDescriptor_MetricKind.DELTA;
    case 3:
    case "CUMULATIVE":
      return MetricDescriptor_MetricKind.CUMULATIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MetricDescriptor_MetricKind.UNRECOGNIZED;
  }
}
export function metricDescriptor_MetricKindToJSON(object: MetricDescriptor_MetricKind): string {
  switch (object) {
    case MetricDescriptor_MetricKind.METRIC_KIND_UNSPECIFIED:
      return "METRIC_KIND_UNSPECIFIED";
    case MetricDescriptor_MetricKind.GAUGE:
      return "GAUGE";
    case MetricDescriptor_MetricKind.DELTA:
      return "DELTA";
    case MetricDescriptor_MetricKind.CUMULATIVE:
      return "CUMULATIVE";
    case MetricDescriptor_MetricKind.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** The value type of a metric. */
export enum MetricDescriptor_ValueType {
  /** VALUE_TYPE_UNSPECIFIED - Do not use this default value. */
  VALUE_TYPE_UNSPECIFIED = 0,
  /**
   * BOOL - The value is a boolean.
   * This value type can be used only if the metric kind is `GAUGE`.
   */
  BOOL = 1,
  /** INT64 - The value is a signed 64-bit integer. */
  INT64 = 2,
  /** DOUBLE - The value is a double precision floating point number. */
  DOUBLE = 3,
  /**
   * STRING - The value is a text string.
   * This value type can be used only if the metric kind is `GAUGE`.
   */
  STRING = 4,
  /** DISTRIBUTION - The value is a [`Distribution`][google.api.Distribution]. */
  DISTRIBUTION = 5,
  /** MONEY - The value is money. */
  MONEY = 6,
  UNRECOGNIZED = -1,
}
export const MetricDescriptor_ValueTypeSDKType = MetricDescriptor_ValueType;
export const MetricDescriptor_ValueTypeAmino = MetricDescriptor_ValueType;
export function metricDescriptor_ValueTypeFromJSON(object: any): MetricDescriptor_ValueType {
  switch (object) {
    case 0:
    case "VALUE_TYPE_UNSPECIFIED":
      return MetricDescriptor_ValueType.VALUE_TYPE_UNSPECIFIED;
    case 1:
    case "BOOL":
      return MetricDescriptor_ValueType.BOOL;
    case 2:
    case "INT64":
      return MetricDescriptor_ValueType.INT64;
    case 3:
    case "DOUBLE":
      return MetricDescriptor_ValueType.DOUBLE;
    case 4:
    case "STRING":
      return MetricDescriptor_ValueType.STRING;
    case 5:
    case "DISTRIBUTION":
      return MetricDescriptor_ValueType.DISTRIBUTION;
    case 6:
    case "MONEY":
      return MetricDescriptor_ValueType.MONEY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MetricDescriptor_ValueType.UNRECOGNIZED;
  }
}
export function metricDescriptor_ValueTypeToJSON(object: MetricDescriptor_ValueType): string {
  switch (object) {
    case MetricDescriptor_ValueType.VALUE_TYPE_UNSPECIFIED:
      return "VALUE_TYPE_UNSPECIFIED";
    case MetricDescriptor_ValueType.BOOL:
      return "BOOL";
    case MetricDescriptor_ValueType.INT64:
      return "INT64";
    case MetricDescriptor_ValueType.DOUBLE:
      return "DOUBLE";
    case MetricDescriptor_ValueType.STRING:
      return "STRING";
    case MetricDescriptor_ValueType.DISTRIBUTION:
      return "DISTRIBUTION";
    case MetricDescriptor_ValueType.MONEY:
      return "MONEY";
    case MetricDescriptor_ValueType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Defines a metric type and its schema. Once a metric descriptor is created,
 * deleting or altering it stops data collection and makes the metric type's
 * existing data unusable.
 */
export interface MetricDescriptor {
  /** The resource name of the metric descriptor. */
  name: string;
  /**
   * The metric type, including its DNS name prefix. The type is not
   * URL-encoded. All user-defined metric types have the DNS name
   * `custom.googleapis.com` or `external.googleapis.com`. Metric types should
   * use a natural hierarchical grouping. For example:
   * 
   *     "custom.googleapis.com/invoice/paid/amount"
   *     "external.googleapis.com/prometheus/up"
   *     "appengine.googleapis.com/http/server/response_latencies"
   */
  type: string;
  /**
   * The set of labels that can be used to describe a specific
   * instance of this metric type. For example, the
   * `appengine.googleapis.com/http/server/response_latencies` metric
   * type has a label for the HTTP response code, `response_code`, so
   * you can look at latencies for successful responses or just
   * for responses that failed.
   */
  labels: LabelDescriptor[];
  /**
   * Whether the metric records instantaneous values, changes to a value, etc.
   * Some combinations of `metric_kind` and `value_type` might not be supported.
   */
  metricKind: MetricDescriptor_MetricKind;
  /**
   * Whether the measurement is an integer, a floating-point number, etc.
   * Some combinations of `metric_kind` and `value_type` might not be supported.
   */
  valueType: MetricDescriptor_ValueType;
  /**
   * The units in which the metric value is reported. It is only applicable
   * if the `value_type` is `INT64`, `DOUBLE`, or `DISTRIBUTION`. The `unit`
   * defines the representation of the stored metric values.
   * 
   * Different systems might scale the values to be more easily displayed (so a
   * value of `0.02kBy` _might_ be displayed as `20By`, and a value of
   * `3523kBy` _might_ be displayed as `3.5MBy`). However, if the `unit` is
   * `kBy`, then the value of the metric is always in thousands of bytes, no
   * matter how it might be displayed.
   * 
   * If you want a custom metric to record the exact number of CPU-seconds used
   * by a job, you can create an `INT64 CUMULATIVE` metric whose `unit` is
   * `s{CPU}` (or equivalently `1s{CPU}` or just `s`). If the job uses 12,005
   * CPU-seconds, then the value is written as `12005`.
   * 
   * Alternatively, if you want a custom metric to record data in a more
   * granular way, you can create a `DOUBLE CUMULATIVE` metric whose `unit` is
   * `ks{CPU}`, and then write the value `12.005` (which is `12005/1000`),
   * or use `Kis{CPU}` and write `11.723` (which is `12005/1024`).
   * 
   * The supported units are a subset of [The Unified Code for Units of
   * Measure](https://unitsofmeasure.org/ucum.html) standard:
   * 
   * **Basic units (UNIT)**
   * 
   * * `bit`   bit
   * * `By`    byte
   * * `s`     second
   * * `min`   minute
   * * `h`     hour
   * * `d`     day
   * * `1`     dimensionless
   * 
   * **Prefixes (PREFIX)**
   * 
   * * `k`     kilo    (10^3)
   * * `M`     mega    (10^6)
   * * `G`     giga    (10^9)
   * * `T`     tera    (10^12)
   * * `P`     peta    (10^15)
   * * `E`     exa     (10^18)
   * * `Z`     zetta   (10^21)
   * * `Y`     yotta   (10^24)
   * 
   * * `m`     milli   (10^-3)
   * * `u`     micro   (10^-6)
   * * `n`     nano    (10^-9)
   * * `p`     pico    (10^-12)
   * * `f`     femto   (10^-15)
   * * `a`     atto    (10^-18)
   * * `z`     zepto   (10^-21)
   * * `y`     yocto   (10^-24)
   * 
   * * `Ki`    kibi    (2^10)
   * * `Mi`    mebi    (2^20)
   * * `Gi`    gibi    (2^30)
   * * `Ti`    tebi    (2^40)
   * * `Pi`    pebi    (2^50)
   * 
   * **Grammar**
   * 
   * The grammar also includes these connectors:
   * 
   * * `/`    division or ratio (as an infix operator). For examples,
   *          `kBy/{email}` or `MiBy/10ms` (although you should almost never
   *          have `/s` in a metric `unit`; rates should always be computed at
   *          query time from the underlying cumulative or delta value).
   * * `.`    multiplication or composition (as an infix operator). For
   *          examples, `GBy.d` or `k{watt}.h`.
   * 
   * The grammar for a unit is as follows:
   * 
   *     Expression = Component { "." Component } { "/" Component } ;
   * 
   *     Component = ( [ PREFIX ] UNIT | "%" ) [ Annotation ]
   *               | Annotation
   *               | "1"
   *               ;
   * 
   *     Annotation = "{" NAME "}" ;
   * 
   * Notes:
   * 
   * * `Annotation` is just a comment if it follows a `UNIT`. If the annotation
   *    is used alone, then the unit is equivalent to `1`. For examples,
   *    `{request}/s == 1/s`, `By{transmitted}/s == By/s`.
   * * `NAME` is a sequence of non-blank printable ASCII characters not
   *    containing `{` or `}`.
   * * `1` represents a unitary [dimensionless
   *    unit](https://en.wikipedia.org/wiki/Dimensionless_quantity) of 1, such
   *    as in `1/s`. It is typically used when none of the basic units are
   *    appropriate. For example, "new users per day" can be represented as
   *    `1/d` or `{new-users}/d` (and a metric value `5` would mean "5 new
   *    users). Alternatively, "thousands of page views per day" would be
   *    represented as `1000/d` or `k1/d` or `k{page_views}/d` (and a metric
   *    value of `5.3` would mean "5300 page views per day").
   * * `%` represents dimensionless value of 1/100, and annotates values giving
   *    a percentage (so the metric values are typically in the range of 0..100,
   *    and a metric value `3` means "3 percent").
   * * `10^2.%` indicates a metric contains a ratio, typically in the range
   *    0..1, that will be multiplied by 100 and displayed as a percentage
   *    (so a metric value `0.03` means "3 percent").
   */
  unit: string;
  /** A detailed description of the metric, which can be used in documentation. */
  description: string;
  /**
   * A concise name for the metric, which can be displayed in user interfaces.
   * Use sentence case without an ending period, for example "Request count".
   * This field is optional but it is recommended to be set for any metrics
   * associated with user-visible concepts, such as Quota.
   */
  displayName: string;
  /** Optional. Metadata which can be used to guide usage of the metric. */
  metadata?: MetricDescriptor_MetricDescriptorMetadata;
  /** Optional. The launch stage of the metric definition. */
  launchStage: LaunchStage;
  /**
   * Read-only. If present, then a [time
   * series][google.monitoring.v3.TimeSeries], which is identified partially by
   * a metric type and a [MonitoredResourceDescriptor][google.api.MonitoredResourceDescriptor], that is associated
   * with this metric type can only be associated with one of the monitored
   * resource types listed here.
   */
  monitoredResourceTypes: string[];
}
export interface MetricDescriptorProtoMsg {
  typeUrl: "/google.api.MetricDescriptor";
  value: Uint8Array;
}
/**
 * Defines a metric type and its schema. Once a metric descriptor is created,
 * deleting or altering it stops data collection and makes the metric type's
 * existing data unusable.
 */
export interface MetricDescriptorAmino {
  /** The resource name of the metric descriptor. */
  name: string;
  /**
   * The metric type, including its DNS name prefix. The type is not
   * URL-encoded. All user-defined metric types have the DNS name
   * `custom.googleapis.com` or `external.googleapis.com`. Metric types should
   * use a natural hierarchical grouping. For example:
   * 
   *     "custom.googleapis.com/invoice/paid/amount"
   *     "external.googleapis.com/prometheus/up"
   *     "appengine.googleapis.com/http/server/response_latencies"
   */
  type: string;
  /**
   * The set of labels that can be used to describe a specific
   * instance of this metric type. For example, the
   * `appengine.googleapis.com/http/server/response_latencies` metric
   * type has a label for the HTTP response code, `response_code`, so
   * you can look at latencies for successful responses or just
   * for responses that failed.
   */
  labels: LabelDescriptorAmino[];
  /**
   * Whether the metric records instantaneous values, changes to a value, etc.
   * Some combinations of `metric_kind` and `value_type` might not be supported.
   */
  metric_kind: MetricDescriptor_MetricKind;
  /**
   * Whether the measurement is an integer, a floating-point number, etc.
   * Some combinations of `metric_kind` and `value_type` might not be supported.
   */
  value_type: MetricDescriptor_ValueType;
  /**
   * The units in which the metric value is reported. It is only applicable
   * if the `value_type` is `INT64`, `DOUBLE`, or `DISTRIBUTION`. The `unit`
   * defines the representation of the stored metric values.
   * 
   * Different systems might scale the values to be more easily displayed (so a
   * value of `0.02kBy` _might_ be displayed as `20By`, and a value of
   * `3523kBy` _might_ be displayed as `3.5MBy`). However, if the `unit` is
   * `kBy`, then the value of the metric is always in thousands of bytes, no
   * matter how it might be displayed.
   * 
   * If you want a custom metric to record the exact number of CPU-seconds used
   * by a job, you can create an `INT64 CUMULATIVE` metric whose `unit` is
   * `s{CPU}` (or equivalently `1s{CPU}` or just `s`). If the job uses 12,005
   * CPU-seconds, then the value is written as `12005`.
   * 
   * Alternatively, if you want a custom metric to record data in a more
   * granular way, you can create a `DOUBLE CUMULATIVE` metric whose `unit` is
   * `ks{CPU}`, and then write the value `12.005` (which is `12005/1000`),
   * or use `Kis{CPU}` and write `11.723` (which is `12005/1024`).
   * 
   * The supported units are a subset of [The Unified Code for Units of
   * Measure](https://unitsofmeasure.org/ucum.html) standard:
   * 
   * **Basic units (UNIT)**
   * 
   * * `bit`   bit
   * * `By`    byte
   * * `s`     second
   * * `min`   minute
   * * `h`     hour
   * * `d`     day
   * * `1`     dimensionless
   * 
   * **Prefixes (PREFIX)**
   * 
   * * `k`     kilo    (10^3)
   * * `M`     mega    (10^6)
   * * `G`     giga    (10^9)
   * * `T`     tera    (10^12)
   * * `P`     peta    (10^15)
   * * `E`     exa     (10^18)
   * * `Z`     zetta   (10^21)
   * * `Y`     yotta   (10^24)
   * 
   * * `m`     milli   (10^-3)
   * * `u`     micro   (10^-6)
   * * `n`     nano    (10^-9)
   * * `p`     pico    (10^-12)
   * * `f`     femto   (10^-15)
   * * `a`     atto    (10^-18)
   * * `z`     zepto   (10^-21)
   * * `y`     yocto   (10^-24)
   * 
   * * `Ki`    kibi    (2^10)
   * * `Mi`    mebi    (2^20)
   * * `Gi`    gibi    (2^30)
   * * `Ti`    tebi    (2^40)
   * * `Pi`    pebi    (2^50)
   * 
   * **Grammar**
   * 
   * The grammar also includes these connectors:
   * 
   * * `/`    division or ratio (as an infix operator). For examples,
   *          `kBy/{email}` or `MiBy/10ms` (although you should almost never
   *          have `/s` in a metric `unit`; rates should always be computed at
   *          query time from the underlying cumulative or delta value).
   * * `.`    multiplication or composition (as an infix operator). For
   *          examples, `GBy.d` or `k{watt}.h`.
   * 
   * The grammar for a unit is as follows:
   * 
   *     Expression = Component { "." Component } { "/" Component } ;
   * 
   *     Component = ( [ PREFIX ] UNIT | "%" ) [ Annotation ]
   *               | Annotation
   *               | "1"
   *               ;
   * 
   *     Annotation = "{" NAME "}" ;
   * 
   * Notes:
   * 
   * * `Annotation` is just a comment if it follows a `UNIT`. If the annotation
   *    is used alone, then the unit is equivalent to `1`. For examples,
   *    `{request}/s == 1/s`, `By{transmitted}/s == By/s`.
   * * `NAME` is a sequence of non-blank printable ASCII characters not
   *    containing `{` or `}`.
   * * `1` represents a unitary [dimensionless
   *    unit](https://en.wikipedia.org/wiki/Dimensionless_quantity) of 1, such
   *    as in `1/s`. It is typically used when none of the basic units are
   *    appropriate. For example, "new users per day" can be represented as
   *    `1/d` or `{new-users}/d` (and a metric value `5` would mean "5 new
   *    users). Alternatively, "thousands of page views per day" would be
   *    represented as `1000/d` or `k1/d` or `k{page_views}/d` (and a metric
   *    value of `5.3` would mean "5300 page views per day").
   * * `%` represents dimensionless value of 1/100, and annotates values giving
   *    a percentage (so the metric values are typically in the range of 0..100,
   *    and a metric value `3` means "3 percent").
   * * `10^2.%` indicates a metric contains a ratio, typically in the range
   *    0..1, that will be multiplied by 100 and displayed as a percentage
   *    (so a metric value `0.03` means "3 percent").
   */
  unit: string;
  /** A detailed description of the metric, which can be used in documentation. */
  description: string;
  /**
   * A concise name for the metric, which can be displayed in user interfaces.
   * Use sentence case without an ending period, for example "Request count".
   * This field is optional but it is recommended to be set for any metrics
   * associated with user-visible concepts, such as Quota.
   */
  display_name: string;
  /** Optional. Metadata which can be used to guide usage of the metric. */
  metadata?: MetricDescriptor_MetricDescriptorMetadataAmino;
  /** Optional. The launch stage of the metric definition. */
  launch_stage: LaunchStage;
  /**
   * Read-only. If present, then a [time
   * series][google.monitoring.v3.TimeSeries], which is identified partially by
   * a metric type and a [MonitoredResourceDescriptor][google.api.MonitoredResourceDescriptor], that is associated
   * with this metric type can only be associated with one of the monitored
   * resource types listed here.
   */
  monitored_resource_types: string[];
}
export interface MetricDescriptorAminoMsg {
  type: "/google.api.MetricDescriptor";
  value: MetricDescriptorAmino;
}
/**
 * Defines a metric type and its schema. Once a metric descriptor is created,
 * deleting or altering it stops data collection and makes the metric type's
 * existing data unusable.
 */
export interface MetricDescriptorSDKType {
  name: string;
  type: string;
  labels: LabelDescriptorSDKType[];
  metric_kind: MetricDescriptor_MetricKind;
  value_type: MetricDescriptor_ValueType;
  unit: string;
  description: string;
  display_name: string;
  metadata?: MetricDescriptor_MetricDescriptorMetadataSDKType;
  launch_stage: LaunchStage;
  monitored_resource_types: string[];
}
/** Additional annotations that can be used to guide the usage of a metric. */
export interface MetricDescriptor_MetricDescriptorMetadata {
  /** Deprecated. Must use the [MetricDescriptor.launch_stage][google.api.MetricDescriptor.launch_stage] instead. */
  /** @deprecated */
  launchStage: LaunchStage;
  /**
   * The sampling period of metric data points. For metrics which are written
   * periodically, consecutive data points are stored at this time interval,
   * excluding data loss due to errors. Metrics with a higher granularity have
   * a smaller sampling period.
   */
  samplePeriod?: Duration;
  /**
   * The delay of data points caused by ingestion. Data points older than this
   * age are guaranteed to be ingested and available to be read, excluding
   * data loss due to errors.
   */
  ingestDelay?: Duration;
}
export interface MetricDescriptor_MetricDescriptorMetadataProtoMsg {
  typeUrl: "/google.api.MetricDescriptorMetadata";
  value: Uint8Array;
}
/** Additional annotations that can be used to guide the usage of a metric. */
export interface MetricDescriptor_MetricDescriptorMetadataAmino {
  /** Deprecated. Must use the [MetricDescriptor.launch_stage][google.api.MetricDescriptor.launch_stage] instead. */
  /** @deprecated */
  launch_stage: LaunchStage;
  /**
   * The sampling period of metric data points. For metrics which are written
   * periodically, consecutive data points are stored at this time interval,
   * excluding data loss due to errors. Metrics with a higher granularity have
   * a smaller sampling period.
   */
  sample_period?: DurationAmino;
  /**
   * The delay of data points caused by ingestion. Data points older than this
   * age are guaranteed to be ingested and available to be read, excluding
   * data loss due to errors.
   */
  ingest_delay?: DurationAmino;
}
export interface MetricDescriptor_MetricDescriptorMetadataAminoMsg {
  type: "/google.api.MetricDescriptorMetadata";
  value: MetricDescriptor_MetricDescriptorMetadataAmino;
}
/** Additional annotations that can be used to guide the usage of a metric. */
export interface MetricDescriptor_MetricDescriptorMetadataSDKType {
  /** @deprecated */
  launch_stage: LaunchStage;
  sample_period?: DurationSDKType;
  ingest_delay?: DurationSDKType;
}
export interface Metric_LabelsEntry {
  key: string;
  value: string;
}
export interface Metric_LabelsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface Metric_LabelsEntryAmino {
  key: string;
  value: string;
}
export interface Metric_LabelsEntryAminoMsg {
  type: string;
  value: Metric_LabelsEntryAmino;
}
export interface Metric_LabelsEntrySDKType {
  key: string;
  value: string;
}
/**
 * A specific metric, identified by specifying values for all of the
 * labels of a [`MetricDescriptor`][google.api.MetricDescriptor].
 */
export interface Metric {
  /**
   * An existing metric type, see [google.api.MetricDescriptor][google.api.MetricDescriptor].
   * For example, `custom.googleapis.com/invoice/paid/amount`.
   */
  type: string;
  /**
   * The set of label values that uniquely identify this metric. All
   * labels listed in the `MetricDescriptor` must be assigned values.
   */
  labels: {
    [key: string]: string;
  };
}
export interface MetricProtoMsg {
  typeUrl: "/google.api.Metric";
  value: Uint8Array;
}
/**
 * A specific metric, identified by specifying values for all of the
 * labels of a [`MetricDescriptor`][google.api.MetricDescriptor].
 */
export interface MetricAmino {
  /**
   * An existing metric type, see [google.api.MetricDescriptor][google.api.MetricDescriptor].
   * For example, `custom.googleapis.com/invoice/paid/amount`.
   */
  type: string;
  /**
   * The set of label values that uniquely identify this metric. All
   * labels listed in the `MetricDescriptor` must be assigned values.
   */
  labels: {
    [key: string]: string;
  };
}
export interface MetricAminoMsg {
  type: "/google.api.Metric";
  value: MetricAmino;
}
/**
 * A specific metric, identified by specifying values for all of the
 * labels of a [`MetricDescriptor`][google.api.MetricDescriptor].
 */
export interface MetricSDKType {
  type: string;
  labels: {
    [key: string]: string;
  };
}
function createBaseMetricDescriptor(): MetricDescriptor {
  return {
    name: "",
    type: "",
    labels: [],
    metricKind: 0,
    valueType: 0,
    unit: "",
    description: "",
    displayName: "",
    metadata: undefined,
    launchStage: 0,
    monitoredResourceTypes: []
  };
}
export const MetricDescriptor = {
  typeUrl: "/google.api.MetricDescriptor",
  encode(message: MetricDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== "") {
      writer.uint32(66).string(message.type);
    }
    for (const v of message.labels) {
      LabelDescriptor.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.metricKind !== 0) {
      writer.uint32(24).int32(message.metricKind);
    }
    if (message.valueType !== 0) {
      writer.uint32(32).int32(message.valueType);
    }
    if (message.unit !== "") {
      writer.uint32(42).string(message.unit);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.displayName !== "") {
      writer.uint32(58).string(message.displayName);
    }
    if (message.metadata !== undefined) {
      MetricDescriptor_MetricDescriptorMetadata.encode(message.metadata, writer.uint32(82).fork()).ldelim();
    }
    if (message.launchStage !== 0) {
      writer.uint32(96).int32(message.launchStage);
    }
    for (const v of message.monitoredResourceTypes) {
      writer.uint32(106).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MetricDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetricDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 8:
          message.type = reader.string();
          break;
        case 2:
          message.labels.push(LabelDescriptor.decode(reader, reader.uint32()));
          break;
        case 3:
          message.metricKind = (reader.int32() as any);
          break;
        case 4:
          message.valueType = (reader.int32() as any);
          break;
        case 5:
          message.unit = reader.string();
          break;
        case 6:
          message.description = reader.string();
          break;
        case 7:
          message.displayName = reader.string();
          break;
        case 10:
          message.metadata = MetricDescriptor_MetricDescriptorMetadata.decode(reader, reader.uint32());
          break;
        case 12:
          message.launchStage = (reader.int32() as any);
          break;
        case 13:
          message.monitoredResourceTypes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MetricDescriptor {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      type: isSet(object.type) ? String(object.type) : "",
      labels: Array.isArray(object?.labels) ? object.labels.map((e: any) => LabelDescriptor.fromJSON(e)) : [],
      metricKind: isSet(object.metricKind) ? metricDescriptor_MetricKindFromJSON(object.metricKind) : 0,
      valueType: isSet(object.valueType) ? metricDescriptor_ValueTypeFromJSON(object.valueType) : 0,
      unit: isSet(object.unit) ? String(object.unit) : "",
      description: isSet(object.description) ? String(object.description) : "",
      displayName: isSet(object.displayName) ? String(object.displayName) : "",
      metadata: isSet(object.metadata) ? MetricDescriptor_MetricDescriptorMetadata.fromJSON(object.metadata) : undefined,
      launchStage: isSet(object.launchStage) ? launchStageFromJSON(object.launchStage) : 0,
      monitoredResourceTypes: Array.isArray(object?.monitoredResourceTypes) ? object.monitoredResourceTypes.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: MetricDescriptor): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined && (obj.type = message.type);
    if (message.labels) {
      obj.labels = message.labels.map(e => e ? LabelDescriptor.toJSON(e) : undefined);
    } else {
      obj.labels = [];
    }
    message.metricKind !== undefined && (obj.metricKind = metricDescriptor_MetricKindToJSON(message.metricKind));
    message.valueType !== undefined && (obj.valueType = metricDescriptor_ValueTypeToJSON(message.valueType));
    message.unit !== undefined && (obj.unit = message.unit);
    message.description !== undefined && (obj.description = message.description);
    message.displayName !== undefined && (obj.displayName = message.displayName);
    message.metadata !== undefined && (obj.metadata = message.metadata ? MetricDescriptor_MetricDescriptorMetadata.toJSON(message.metadata) : undefined);
    message.launchStage !== undefined && (obj.launchStage = launchStageToJSON(message.launchStage));
    if (message.monitoredResourceTypes) {
      obj.monitoredResourceTypes = message.monitoredResourceTypes.map(e => e);
    } else {
      obj.monitoredResourceTypes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MetricDescriptor>): MetricDescriptor {
    const message = createBaseMetricDescriptor();
    message.name = object.name ?? "";
    message.type = object.type ?? "";
    message.labels = object.labels?.map(e => LabelDescriptor.fromPartial(e)) || [];
    message.metricKind = object.metricKind ?? 0;
    message.valueType = object.valueType ?? 0;
    message.unit = object.unit ?? "";
    message.description = object.description ?? "";
    message.displayName = object.displayName ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? MetricDescriptor_MetricDescriptorMetadata.fromPartial(object.metadata) : undefined;
    message.launchStage = object.launchStage ?? 0;
    message.monitoredResourceTypes = object.monitoredResourceTypes?.map(e => e) || [];
    return message;
  },
  fromSDK(object: MetricDescriptorSDKType): MetricDescriptor {
    return {
      name: object?.name,
      type: object?.type,
      labels: Array.isArray(object?.labels) ? object.labels.map((e: any) => LabelDescriptor.fromSDK(e)) : [],
      metricKind: isSet(object.metric_kind) ? metricDescriptor_MetricKindFromJSON(object.metric_kind) : 0,
      valueType: isSet(object.value_type) ? metricDescriptor_ValueTypeFromJSON(object.value_type) : 0,
      unit: object?.unit,
      description: object?.description,
      displayName: object?.display_name,
      metadata: object.metadata ? MetricDescriptor_MetricDescriptorMetadata.fromSDK(object.metadata) : undefined,
      launchStage: isSet(object.launch_stage) ? launchStageFromJSON(object.launch_stage) : 0,
      monitoredResourceTypes: Array.isArray(object?.monitored_resource_types) ? object.monitored_resource_types.map((e: any) => e) : []
    };
  },
  toSDK(message: MetricDescriptor): MetricDescriptorSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.type = message.type;
    if (message.labels) {
      obj.labels = message.labels.map(e => e ? LabelDescriptor.toSDK(e) : undefined);
    } else {
      obj.labels = [];
    }
    message.metricKind !== undefined && (obj.metric_kind = metricDescriptor_MetricKindToJSON(message.metricKind));
    message.valueType !== undefined && (obj.value_type = metricDescriptor_ValueTypeToJSON(message.valueType));
    obj.unit = message.unit;
    obj.description = message.description;
    obj.display_name = message.displayName;
    message.metadata !== undefined && (obj.metadata = message.metadata ? MetricDescriptor_MetricDescriptorMetadata.toSDK(message.metadata) : undefined);
    message.launchStage !== undefined && (obj.launch_stage = launchStageToJSON(message.launchStage));
    if (message.monitoredResourceTypes) {
      obj.monitored_resource_types = message.monitoredResourceTypes.map(e => e);
    } else {
      obj.monitored_resource_types = [];
    }
    return obj;
  },
  fromAmino(object: MetricDescriptorAmino): MetricDescriptor {
    return {
      name: object.name,
      type: object.type,
      labels: Array.isArray(object?.labels) ? object.labels.map((e: any) => LabelDescriptor.fromAmino(e)) : [],
      metricKind: isSet(object.metric_kind) ? metricDescriptor_MetricKindFromJSON(object.metric_kind) : 0,
      valueType: isSet(object.value_type) ? metricDescriptor_ValueTypeFromJSON(object.value_type) : 0,
      unit: object.unit,
      description: object.description,
      displayName: object.display_name,
      metadata: object?.metadata ? MetricDescriptor_MetricDescriptorMetadata.fromAmino(object.metadata) : undefined,
      launchStage: isSet(object.launch_stage) ? launchStageFromJSON(object.launch_stage) : 0,
      monitoredResourceTypes: Array.isArray(object?.monitored_resource_types) ? object.monitored_resource_types.map((e: any) => e) : []
    };
  },
  toAmino(message: MetricDescriptor): MetricDescriptorAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.type = message.type;
    if (message.labels) {
      obj.labels = message.labels.map(e => e ? LabelDescriptor.toAmino(e) : undefined);
    } else {
      obj.labels = [];
    }
    obj.metric_kind = message.metricKind;
    obj.value_type = message.valueType;
    obj.unit = message.unit;
    obj.description = message.description;
    obj.display_name = message.displayName;
    obj.metadata = message.metadata ? MetricDescriptor_MetricDescriptorMetadata.toAmino(message.metadata) : undefined;
    obj.launch_stage = message.launchStage;
    if (message.monitoredResourceTypes) {
      obj.monitored_resource_types = message.monitoredResourceTypes.map(e => e);
    } else {
      obj.monitored_resource_types = [];
    }
    return obj;
  },
  fromAminoMsg(object: MetricDescriptorAminoMsg): MetricDescriptor {
    return MetricDescriptor.fromAmino(object.value);
  },
  fromProtoMsg(message: MetricDescriptorProtoMsg): MetricDescriptor {
    return MetricDescriptor.decode(message.value);
  },
  toProto(message: MetricDescriptor): Uint8Array {
    return MetricDescriptor.encode(message).finish();
  },
  toProtoMsg(message: MetricDescriptor): MetricDescriptorProtoMsg {
    return {
      typeUrl: "/google.api.MetricDescriptor",
      value: MetricDescriptor.encode(message).finish()
    };
  }
};
function createBaseMetricDescriptor_MetricDescriptorMetadata(): MetricDescriptor_MetricDescriptorMetadata {
  return {
    launchStage: 0,
    samplePeriod: undefined,
    ingestDelay: undefined
  };
}
export const MetricDescriptor_MetricDescriptorMetadata = {
  typeUrl: "/google.api.MetricDescriptorMetadata",
  encode(message: MetricDescriptor_MetricDescriptorMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.launchStage !== 0) {
      writer.uint32(8).int32(message.launchStage);
    }
    if (message.samplePeriod !== undefined) {
      Duration.encode(message.samplePeriod, writer.uint32(18).fork()).ldelim();
    }
    if (message.ingestDelay !== undefined) {
      Duration.encode(message.ingestDelay, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MetricDescriptor_MetricDescriptorMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetricDescriptor_MetricDescriptorMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.launchStage = (reader.int32() as any);
          break;
        case 2:
          message.samplePeriod = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.ingestDelay = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MetricDescriptor_MetricDescriptorMetadata {
    return {
      launchStage: isSet(object.launchStage) ? launchStageFromJSON(object.launchStage) : 0,
      samplePeriod: isSet(object.samplePeriod) ? Duration.fromJSON(object.samplePeriod) : undefined,
      ingestDelay: isSet(object.ingestDelay) ? Duration.fromJSON(object.ingestDelay) : undefined
    };
  },
  toJSON(message: MetricDescriptor_MetricDescriptorMetadata): unknown {
    const obj: any = {};
    message.launchStage !== undefined && (obj.launchStage = launchStageToJSON(message.launchStage));
    message.samplePeriod !== undefined && (obj.samplePeriod = message.samplePeriod ? Duration.toJSON(message.samplePeriod) : undefined);
    message.ingestDelay !== undefined && (obj.ingestDelay = message.ingestDelay ? Duration.toJSON(message.ingestDelay) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MetricDescriptor_MetricDescriptorMetadata>): MetricDescriptor_MetricDescriptorMetadata {
    const message = createBaseMetricDescriptor_MetricDescriptorMetadata();
    message.launchStage = object.launchStage ?? 0;
    message.samplePeriod = object.samplePeriod !== undefined && object.samplePeriod !== null ? Duration.fromPartial(object.samplePeriod) : undefined;
    message.ingestDelay = object.ingestDelay !== undefined && object.ingestDelay !== null ? Duration.fromPartial(object.ingestDelay) : undefined;
    return message;
  },
  fromSDK(object: MetricDescriptor_MetricDescriptorMetadataSDKType): MetricDescriptor_MetricDescriptorMetadata {
    return {
      launchStage: isSet(object.launch_stage) ? launchStageFromJSON(object.launch_stage) : 0,
      samplePeriod: object.sample_period ? Duration.fromSDK(object.sample_period) : undefined,
      ingestDelay: object.ingest_delay ? Duration.fromSDK(object.ingest_delay) : undefined
    };
  },
  toSDK(message: MetricDescriptor_MetricDescriptorMetadata): MetricDescriptor_MetricDescriptorMetadataSDKType {
    const obj: any = {};
    message.launchStage !== undefined && (obj.launch_stage = launchStageToJSON(message.launchStage));
    message.samplePeriod !== undefined && (obj.sample_period = message.samplePeriod ? Duration.toSDK(message.samplePeriod) : undefined);
    message.ingestDelay !== undefined && (obj.ingest_delay = message.ingestDelay ? Duration.toSDK(message.ingestDelay) : undefined);
    return obj;
  },
  fromAmino(object: MetricDescriptor_MetricDescriptorMetadataAmino): MetricDescriptor_MetricDescriptorMetadata {
    return {
      launchStage: isSet(object.launch_stage) ? launchStageFromJSON(object.launch_stage) : 0,
      samplePeriod: object?.sample_period ? Duration.fromAmino(object.sample_period) : undefined,
      ingestDelay: object?.ingest_delay ? Duration.fromAmino(object.ingest_delay) : undefined
    };
  },
  toAmino(message: MetricDescriptor_MetricDescriptorMetadata): MetricDescriptor_MetricDescriptorMetadataAmino {
    const obj: any = {};
    obj.launch_stage = message.launchStage;
    obj.sample_period = message.samplePeriod ? Duration.toAmino(message.samplePeriod) : undefined;
    obj.ingest_delay = message.ingestDelay ? Duration.toAmino(message.ingestDelay) : undefined;
    return obj;
  },
  fromAminoMsg(object: MetricDescriptor_MetricDescriptorMetadataAminoMsg): MetricDescriptor_MetricDescriptorMetadata {
    return MetricDescriptor_MetricDescriptorMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: MetricDescriptor_MetricDescriptorMetadataProtoMsg): MetricDescriptor_MetricDescriptorMetadata {
    return MetricDescriptor_MetricDescriptorMetadata.decode(message.value);
  },
  toProto(message: MetricDescriptor_MetricDescriptorMetadata): Uint8Array {
    return MetricDescriptor_MetricDescriptorMetadata.encode(message).finish();
  },
  toProtoMsg(message: MetricDescriptor_MetricDescriptorMetadata): MetricDescriptor_MetricDescriptorMetadataProtoMsg {
    return {
      typeUrl: "/google.api.MetricDescriptorMetadata",
      value: MetricDescriptor_MetricDescriptorMetadata.encode(message).finish()
    };
  }
};
function createBaseMetric_LabelsEntry(): Metric_LabelsEntry {
  return {
    key: "",
    value: ""
  };
}
export const Metric_LabelsEntry = {
  encode(message: Metric_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Metric_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetric_LabelsEntry();
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
  fromJSON(object: any): Metric_LabelsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: Metric_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: DeepPartial<Metric_LabelsEntry>): Metric_LabelsEntry {
    const message = createBaseMetric_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromSDK(object: Metric_LabelsEntrySDKType): Metric_LabelsEntry {
    return {
      key: object?.key,
      value: object?.value
    };
  },
  toSDK(message: Metric_LabelsEntry): Metric_LabelsEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: Metric_LabelsEntryAmino): Metric_LabelsEntry {
    return {
      key: object.key,
      value: object.value
    };
  },
  toAmino(message: Metric_LabelsEntry): Metric_LabelsEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: Metric_LabelsEntryAminoMsg): Metric_LabelsEntry {
    return Metric_LabelsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: Metric_LabelsEntryProtoMsg): Metric_LabelsEntry {
    return Metric_LabelsEntry.decode(message.value);
  },
  toProto(message: Metric_LabelsEntry): Uint8Array {
    return Metric_LabelsEntry.encode(message).finish();
  }
};
function createBaseMetric(): Metric {
  return {
    type: "",
    labels: {}
  };
}
export const Metric = {
  typeUrl: "/google.api.Metric",
  encode(message: Metric, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      Metric_LabelsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Metric {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetric();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.type = reader.string();
          break;
        case 2:
          const entry2 = Metric_LabelsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.labels[entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Metric {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {}
    };
  },
  toJSON(message: Metric): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Metric>): Metric {
    const message = createBaseMetric();
    message.type = object.type ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromSDK(object: MetricSDKType): Metric {
    return {
      type: object?.type,
      labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {}
    };
  },
  toSDK(message: Metric): MetricSDKType {
    const obj: any = {};
    obj.type = message.type;
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    return obj;
  },
  fromAmino(object: MetricAmino): Metric {
    return {
      type: object.type,
      labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {}
    };
  },
  toAmino(message: Metric): MetricAmino {
    const obj: any = {};
    obj.type = message.type;
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    return obj;
  },
  fromAminoMsg(object: MetricAminoMsg): Metric {
    return Metric.fromAmino(object.value);
  },
  fromProtoMsg(message: MetricProtoMsg): Metric {
    return Metric.decode(message.value);
  },
  toProto(message: Metric): Uint8Array {
    return Metric.encode(message).finish();
  },
  toProtoMsg(message: Metric): MetricProtoMsg {
    return {
      typeUrl: "/google.api.Metric",
      value: Metric.encode(message).finish()
    };
  }
};