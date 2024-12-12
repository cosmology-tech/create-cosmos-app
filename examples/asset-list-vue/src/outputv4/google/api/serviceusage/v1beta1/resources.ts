import { Api, ApiSDKType } from "../../../protobuf/api";
import { Documentation, DocumentationSDKType } from "../../documentation";
import { Quota, QuotaSDKType } from "../../quota";
import { Authentication, AuthenticationSDKType } from "../../auth";
import { Usage, UsageSDKType } from "../../usage";
import { Endpoint, EndpointSDKType } from "../../endpoint";
import { MonitoredResourceDescriptor, MonitoredResourceDescriptorSDKType } from "../../monitored_resource";
import { Monitoring, MonitoringSDKType } from "../../monitoring";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, isObject } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
import { ComputedRef } from "vue";
export const protobufPackage = "google.api.serviceusage.v1beta1";
/** Whether or not a service has been enabled for use by a consumer. */
export enum State {
  /**
   * STATE_UNSPECIFIED - The default value, which indicates that the enabled state of the service
   * is unspecified or not meaningful. Currently, all consumers other than
   * projects (such as folders and organizations) are always in this state.
   */
  STATE_UNSPECIFIED = 0,
  /**
   * DISABLED - The service cannot be used by this consumer. It has either been explicitly
   * disabled, or has never been enabled.
   */
  DISABLED = 1,
  /** ENABLED - The service has been explicitly enabled for use by this consumer. */
  ENABLED = 2,
  UNRECOGNIZED = -1,
}
export const StateSDKType = State;
export function stateFromJSON(object: any): State {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return State.STATE_UNSPECIFIED;
    case 1:
    case "DISABLED":
      return State.DISABLED;
    case 2:
    case "ENABLED":
      return State.ENABLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return State.UNRECOGNIZED;
  }
}
export function stateToJSON(object: State): string {
  switch (object) {
    case State.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case State.DISABLED:
      return "DISABLED";
    case State.ENABLED:
      return "ENABLED";
    case State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Selected view of quota. Can be used to request more detailed quota
 * information when retrieving quota metrics and limits.
 */
export enum QuotaView {
  /**
   * QUOTA_VIEW_UNSPECIFIED - No quota view specified. Requests that do not specify a quota view will
   * typically default to the BASIC view.
   */
  QUOTA_VIEW_UNSPECIFIED = 0,
  /** BASIC - Only buckets with overrides are shown in the response. */
  BASIC = 1,
  /**
   * FULL - Include per-location buckets even if they do not have overrides.
   * When the view is FULL, and a limit has regional or zonal quota, the limit
   * will include buckets for all regions or zones that could support
   * overrides, even if none are currently present. In some cases this will
   * cause the response to become very large; callers that do not need this
   * extra information should use the BASIC view instead.
   */
  FULL = 2,
  UNRECOGNIZED = -1,
}
export const QuotaViewSDKType = QuotaView;
export function quotaViewFromJSON(object: any): QuotaView {
  switch (object) {
    case 0:
    case "QUOTA_VIEW_UNSPECIFIED":
      return QuotaView.QUOTA_VIEW_UNSPECIFIED;
    case 1:
    case "BASIC":
      return QuotaView.BASIC;
    case 2:
    case "FULL":
      return QuotaView.FULL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return QuotaView.UNRECOGNIZED;
  }
}
export function quotaViewToJSON(object: QuotaView): string {
  switch (object) {
    case QuotaView.QUOTA_VIEW_UNSPECIFIED:
      return "QUOTA_VIEW_UNSPECIFIED";
    case QuotaView.BASIC:
      return "BASIC";
    case QuotaView.FULL:
      return "FULL";
    case QuotaView.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Enumerations of quota safety checks. */
export enum QuotaSafetyCheck {
  /** QUOTA_SAFETY_CHECK_UNSPECIFIED - Unspecified quota safety check. */
  QUOTA_SAFETY_CHECK_UNSPECIFIED = 0,
  /**
   * LIMIT_DECREASE_BELOW_USAGE - Validates that a quota mutation would not cause the consumer's effective
   * limit to be lower than the consumer's quota usage.
   */
  LIMIT_DECREASE_BELOW_USAGE = 1,
  /**
   * LIMIT_DECREASE_PERCENTAGE_TOO_HIGH - Validates that a quota mutation would not cause the consumer's effective
   * limit to decrease by more than 10 percent.
   */
  LIMIT_DECREASE_PERCENTAGE_TOO_HIGH = 2,
  UNRECOGNIZED = -1,
}
export const QuotaSafetyCheckSDKType = QuotaSafetyCheck;
export function quotaSafetyCheckFromJSON(object: any): QuotaSafetyCheck {
  switch (object) {
    case 0:
    case "QUOTA_SAFETY_CHECK_UNSPECIFIED":
      return QuotaSafetyCheck.QUOTA_SAFETY_CHECK_UNSPECIFIED;
    case 1:
    case "LIMIT_DECREASE_BELOW_USAGE":
      return QuotaSafetyCheck.LIMIT_DECREASE_BELOW_USAGE;
    case 2:
    case "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH":
      return QuotaSafetyCheck.LIMIT_DECREASE_PERCENTAGE_TOO_HIGH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return QuotaSafetyCheck.UNRECOGNIZED;
  }
}
export function quotaSafetyCheckToJSON(object: QuotaSafetyCheck): string {
  switch (object) {
    case QuotaSafetyCheck.QUOTA_SAFETY_CHECK_UNSPECIFIED:
      return "QUOTA_SAFETY_CHECK_UNSPECIFIED";
    case QuotaSafetyCheck.LIMIT_DECREASE_BELOW_USAGE:
      return "LIMIT_DECREASE_BELOW_USAGE";
    case QuotaSafetyCheck.LIMIT_DECREASE_PERCENTAGE_TOO_HIGH:
      return "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH";
    case QuotaSafetyCheck.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** A service that is available for use by the consumer. */
export interface Service {
  /**
   * The resource name of the consumer and service.
   * 
   * A valid name would be:
   * - `projects/123/services/serviceusage.googleapis.com`
   */
  name: string;
  /**
   * The resource name of the consumer.
   * 
   * A valid name would be:
   * - `projects/123`
   */
  parent: string;
  /**
   * The service configuration of the available service.
   * Some fields may be filtered out of the configuration in responses to
   * the `ListServices` method. These fields are present only in responses to
   * the `GetService` method.
   */
  config?: ServiceConfig;
  /** Whether or not the service has been enabled for use by the consumer. */
  state: State;
}
export interface ReactiveService {
  name: ComputedRef<string>;
  parent: ComputedRef<string>;
  config?: ComputedRef<ServiceConfig>;
  state: ComputedRef<State>;
}
export interface ServiceProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.Service";
  value: Uint8Array;
}
/** A service that is available for use by the consumer. */
export interface ServiceSDKType {
  name: string;
  parent: string;
  config?: ServiceConfigSDKType;
  state: State;
}
/** The configuration of the service. */
export interface ServiceConfig {
  /**
   * The DNS address at which this service is available.
   * 
   * An example DNS address would be:
   * `calendar.googleapis.com`.
   */
  name: string;
  /** The product title for this service. */
  title: string;
  /**
   * A list of API interfaces exported by this service. Contains only the names,
   * versions, and method names of the interfaces.
   */
  apis: Api[];
  /**
   * Additional API documentation. Contains only the summary and the
   * documentation URL.
   */
  documentation?: Documentation;
  /** Quota configuration. */
  quota?: Quota;
  /** Auth configuration. Contains only the OAuth rules. */
  authentication?: Authentication;
  /** Configuration controlling usage of this service. */
  usage?: Usage;
  /**
   * Configuration for network endpoints. Contains only the names and aliases
   * of the endpoints.
   */
  endpoints: Endpoint[];
  /**
   * Defines the monitored resources used by this service. This is required
   * by the [Service.monitoring][google.api.Service.monitoring] and [Service.logging][google.api.Service.logging] configurations.
   */
  monitoredResources: MonitoredResourceDescriptor[];
  /**
   * Monitoring configuration.
   * This should not include the 'producer_destinations' field.
   */
  monitoring?: Monitoring;
}
export interface ReactiveServiceConfig {
  name: ComputedRef<string>;
  title: ComputedRef<string>;
  apis: ComputedRef<Api[]>;
  documentation?: ComputedRef<Documentation>;
  quota?: ComputedRef<Quota>;
  authentication?: ComputedRef<Authentication>;
  usage?: ComputedRef<Usage>;
  endpoints: ComputedRef<Endpoint[]>;
  monitoredResources: ComputedRef<MonitoredResourceDescriptor[]>;
  monitoring?: ComputedRef<Monitoring>;
}
export interface ServiceConfigProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.ServiceConfig";
  value: Uint8Array;
}
/** The configuration of the service. */
export interface ServiceConfigSDKType {
  name: string;
  title: string;
  apis: ApiSDKType[];
  documentation?: DocumentationSDKType;
  quota?: QuotaSDKType;
  authentication?: AuthenticationSDKType;
  usage?: UsageSDKType;
  endpoints: EndpointSDKType[];
  monitored_resources: MonitoredResourceDescriptorSDKType[];
  monitoring?: MonitoringSDKType;
}
/** The operation metadata returned for the batchend services operation. */
export interface OperationMetadata {
  /**
   * The full name of the resources that this operation is directly
   * associated with.
   */
  resourceNames: string[];
}
export interface ReactiveOperationMetadata {
  resourceNames: ComputedRef<string[]>;
}
export interface OperationMetadataProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.OperationMetadata";
  value: Uint8Array;
}
/** The operation metadata returned for the batchend services operation. */
export interface OperationMetadataSDKType {
  resource_names: string[];
}
/** Consumer quota settings for a quota metric. */
export interface ConsumerQuotaMetric {
  /**
   * The resource name of the quota settings on this metric for this consumer.
   * 
   * An example name would be:
   * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus`
   * 
   * The resource name is intended to be opaque and should not be parsed for
   * its component strings, since its representation could change in the future.
   */
  name: string;
  /**
   * The name of the metric.
   * 
   * An example name would be:
   * `compute.googleapis.com/cpus`
   */
  metric: string;
  /**
   * The display name of the metric.
   * 
   * An example name would be:
   * `CPUs`
   */
  displayName: string;
  /** The consumer quota for each quota limit defined on the metric. */
  consumerQuotaLimits: ConsumerQuotaLimit[];
  /**
   * The quota limits targeting the descendant containers of the
   * consumer in request.
   * 
   * If the consumer in request is of type `organizations`
   * or `folders`, the field will list per-project limits in the metric; if the
   * consumer in request is of type `project`, the field will be empty.
   * 
   * The `quota_buckets` field of each descendant consumer quota limit will not
   * be populated.
   */
  descendantConsumerQuotaLimits: ConsumerQuotaLimit[];
  /** The units in which the metric value is reported. */
  unit: string;
}
export interface ReactiveConsumerQuotaMetric {
  name: ComputedRef<string>;
  metric: ComputedRef<string>;
  displayName: ComputedRef<string>;
  consumerQuotaLimits: ComputedRef<ConsumerQuotaLimit[]>;
  descendantConsumerQuotaLimits: ComputedRef<ConsumerQuotaLimit[]>;
  unit: ComputedRef<string>;
}
export interface ConsumerQuotaMetricProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.ConsumerQuotaMetric";
  value: Uint8Array;
}
/** Consumer quota settings for a quota metric. */
export interface ConsumerQuotaMetricSDKType {
  name: string;
  metric: string;
  display_name: string;
  consumer_quota_limits: ConsumerQuotaLimitSDKType[];
  descendant_consumer_quota_limits: ConsumerQuotaLimitSDKType[];
  unit: string;
}
/** Consumer quota settings for a quota limit. */
export interface ConsumerQuotaLimit {
  /**
   * The resource name of the quota limit.
   * 
   * An example name would be:
   * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
   * 
   * The resource name is intended to be opaque and should not be parsed for
   * its component strings, since its representation could change in the future.
   */
  name: string;
  /**
   * The name of the parent metric of this limit.
   * 
   * An example name would be:
   * `compute.googleapis.com/cpus`
   */
  metric: string;
  /**
   * The limit unit.
   * 
   * An example unit would be
   * `1/{project}/{region}`
   * Note that `{project}` and `{region}` are not placeholders in this example;
   * the literal characters `{` and `}` occur in the string.
   */
  unit: string;
  /** Whether this limit is precise or imprecise. */
  isPrecise: boolean;
  /** Whether admin overrides are allowed on this limit */
  allowsAdminOverrides: boolean;
  /**
   * Summary of the enforced quota buckets, organized by quota dimension,
   * ordered from least specific to most specific (for example, the global
   * default bucket, with no quota dimensions, will always appear first).
   */
  quotaBuckets: QuotaBucket[];
}
export interface ReactiveConsumerQuotaLimit {
  name: ComputedRef<string>;
  metric: ComputedRef<string>;
  unit: ComputedRef<string>;
  isPrecise: ComputedRef<boolean>;
  allowsAdminOverrides: ComputedRef<boolean>;
  quotaBuckets: ComputedRef<QuotaBucket[]>;
}
export interface ConsumerQuotaLimitProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.ConsumerQuotaLimit";
  value: Uint8Array;
}
/** Consumer quota settings for a quota limit. */
export interface ConsumerQuotaLimitSDKType {
  name: string;
  metric: string;
  unit: string;
  is_precise: boolean;
  allows_admin_overrides: boolean;
  quota_buckets: QuotaBucketSDKType[];
}
export interface QuotaBucket_DimensionsEntry {
  key: string;
  value: string;
}
export interface ReactiveQuotaBucket_DimensionsEntry {
  key: ComputedRef<string>;
  value: ComputedRef<string>;
}
export interface QuotaBucket_DimensionsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface QuotaBucket_DimensionsEntrySDKType {
  key: string;
  value: string;
}
/** A quota bucket is a quota provisioning unit for a specific set of dimensions. */
export interface QuotaBucket {
  /**
   * The effective limit of this quota bucket. Equal to default_limit if there
   * are no overrides.
   */
  effectiveLimit: bigint;
  /**
   * The default limit of this quota bucket, as specified by the service
   * configuration.
   */
  defaultLimit: bigint;
  /** Producer override on this quota bucket. */
  producerOverride?: QuotaOverride;
  /** Consumer override on this quota bucket. */
  consumerOverride?: QuotaOverride;
  /** Admin override on this quota bucket. */
  adminOverride?: QuotaOverride;
  /**
   * The dimensions of this quota bucket.
   * 
   * If this map is empty, this is the global bucket, which is the default quota
   * value applied to all requests that do not have a more specific override.
   * 
   * If this map is nonempty, the default limit, effective limit, and quota
   * overrides apply only to requests that have the dimensions given in the map.
   * 
   * For example, if the map has key `region` and value `us-east-1`, then the
   * specified effective limit is only effective in that region, and the
   * specified overrides apply only in that region.
   */
  dimensions: {
    [key: string]: string;
  };
}
export interface ReactiveQuotaBucket {
  effectiveLimit: ComputedRef<bigint>;
  defaultLimit: ComputedRef<bigint>;
  producerOverride?: ComputedRef<QuotaOverride>;
  consumerOverride?: ComputedRef<QuotaOverride>;
  adminOverride?: ComputedRef<QuotaOverride>;
  dimensions: ComputedRef<{
    [key: string]: string;
  }>;
}
export interface QuotaBucketProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.QuotaBucket";
  value: Uint8Array;
}
/** A quota bucket is a quota provisioning unit for a specific set of dimensions. */
export interface QuotaBucketSDKType {
  effective_limit: bigint;
  default_limit: bigint;
  producer_override?: QuotaOverrideSDKType;
  consumer_override?: QuotaOverrideSDKType;
  admin_override?: QuotaOverrideSDKType;
  dimensions: {
    [key: string]: string;
  };
}
export interface QuotaOverride_DimensionsEntry {
  key: string;
  value: string;
}
export interface ReactiveQuotaOverride_DimensionsEntry {
  key: ComputedRef<string>;
  value: ComputedRef<string>;
}
export interface QuotaOverride_DimensionsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface QuotaOverride_DimensionsEntrySDKType {
  key: string;
  value: string;
}
/** A quota override */
export interface QuotaOverride {
  /**
   * The resource name of the override.
   * This name is generated by the server when the override is created.
   * 
   * Example names would be:
   * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/adminOverrides/4a3f2c1d`
   * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/consumerOverrides/4a3f2c1d`
   * 
   * The resource name is intended to be opaque and should not be parsed for
   * its component strings, since its representation could change in the future.
   */
  name: string;
  /**
   * The overriding quota limit value.
   * Can be any nonnegative integer, or -1 (unlimited quota).
   */
  overrideValue: bigint;
  /**
   * If this map is nonempty, then this override applies only to specific values
   * for dimensions defined in the limit unit.
   * 
   * For example, an override on a limit with the unit `1/{project}/{region}`
   * could contain an entry with the key `region` and the value `us-east-1`;
   * the override is only applied to quota consumed in that region.
   * 
   * This map has the following restrictions:
   * 
   * *   Keys that are not defined in the limit's unit are not valid keys.
   *     Any string appearing in `{brackets}` in the unit (besides `{project}`
   *     or
   *     `{user}`) is a defined key.
   * *   `project` is not a valid key; the project is already specified in
   *     the parent resource name.
   * *   `user` is not a valid key; the API does not support quota overrides
   *     that apply only to a specific user.
   * *   If `region` appears as a key, its value must be a valid Cloud region.
   * *   If `zone` appears as a key, its value must be a valid Cloud zone.
   * *   If any valid key other than `region` or `zone` appears in the map, then
   *     all valid keys other than `region` or `zone` must also appear in the
   *     map.
   */
  dimensions: {
    [key: string]: string;
  };
  /**
   * The name of the metric to which this override applies.
   * 
   * An example name would be:
   * `compute.googleapis.com/cpus`
   */
  metric: string;
  /**
   * The limit unit of the limit to which this override applies.
   * 
   * An example unit would be:
   * `1/{project}/{region}`
   * Note that `{project}` and `{region}` are not placeholders in this example;
   * the literal characters `{` and `}` occur in the string.
   */
  unit: string;
  /**
   * The resource name of the ancestor that requested the override. For example:
   * `organizations/12345` or `folders/67890`.
   * Used by admin overrides only.
   */
  adminOverrideAncestor: string;
}
export interface ReactiveQuotaOverride {
  name: ComputedRef<string>;
  overrideValue: ComputedRef<bigint>;
  dimensions: ComputedRef<{
    [key: string]: string;
  }>;
  metric: ComputedRef<string>;
  unit: ComputedRef<string>;
  adminOverrideAncestor: ComputedRef<string>;
}
export interface QuotaOverrideProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.QuotaOverride";
  value: Uint8Array;
}
/** A quota override */
export interface QuotaOverrideSDKType {
  name: string;
  override_value: bigint;
  dimensions: {
    [key: string]: string;
  };
  metric: string;
  unit: string;
  admin_override_ancestor: string;
}
/** Import data embedded in the request message */
export interface OverrideInlineSource {
  /**
   * The overrides to create.
   * Each override must have a value for 'metric' and 'unit', to specify
   * which metric and which limit the override should be applied to.
   * The 'name' field of the override does not need to be set; it is ignored.
   */
  overrides: QuotaOverride[];
}
export interface ReactiveOverrideInlineSource {
  overrides: ComputedRef<QuotaOverride[]>;
}
export interface OverrideInlineSourceProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.OverrideInlineSource";
  value: Uint8Array;
}
/** Import data embedded in the request message */
export interface OverrideInlineSourceSDKType {
  overrides: QuotaOverrideSDKType[];
}
export interface AdminQuotaPolicy_DimensionsEntry {
  key: string;
  value: string;
}
export interface ReactiveAdminQuotaPolicy_DimensionsEntry {
  key: ComputedRef<string>;
  value: ComputedRef<string>;
}
export interface AdminQuotaPolicy_DimensionsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface AdminQuotaPolicy_DimensionsEntrySDKType {
  key: string;
  value: string;
}
/** Quota policy created by quota administrator. */
export interface AdminQuotaPolicy {
  /**
   * The resource name of the policy.
   * This name is generated by the server when the policy is created.
   * 
   * Example names would be:
   * `organizations/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/adminQuotaPolicies/4a3f2c1d`
   */
  name: string;
  /**
   * The quota policy value.
   * Can be any nonnegative integer, or -1 (unlimited quota).
   */
  policyValue: bigint;
  /**
   * If this map is nonempty, then this policy applies only to specific values
   * for dimensions defined in the limit unit.
   * 
   * For example, an policy on a limit with the unit `1/{project}/{region}`
   * could contain an entry with the key `region` and the value `us-east-1`;
   * the policy is only applied to quota consumed in that region.
   * 
   * This map has the following restrictions:
   * 
   * *   If `region` appears as a key, its value must be a valid Cloud region.
   * *   If `zone` appears as a key, its value must be a valid Cloud zone.
   * *   Keys other than `region` or `zone` are not valid.
   */
  dimensions: {
    [key: string]: string;
  };
  /**
   * The name of the metric to which this policy applies.
   * 
   * An example name would be:
   * `compute.googleapis.com/cpus`
   */
  metric: string;
  /**
   * The limit unit of the limit to which this policy applies.
   * 
   * An example unit would be:
   * `1/{project}/{region}`
   * Note that `{project}` and `{region}` are not placeholders in this example;
   * the literal characters `{` and `}` occur in the string.
   */
  unit: string;
  /**
   * The cloud resource container at which the quota policy is created. The
   * format is `{container_type}/{container_number}`
   */
  container: string;
}
export interface ReactiveAdminQuotaPolicy {
  name: ComputedRef<string>;
  policyValue: ComputedRef<bigint>;
  dimensions: ComputedRef<{
    [key: string]: string;
  }>;
  metric: ComputedRef<string>;
  unit: ComputedRef<string>;
  container: ComputedRef<string>;
}
export interface AdminQuotaPolicyProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.AdminQuotaPolicy";
  value: Uint8Array;
}
/** Quota policy created by quota administrator. */
export interface AdminQuotaPolicySDKType {
  name: string;
  policy_value: bigint;
  dimensions: {
    [key: string]: string;
  };
  metric: string;
  unit: string;
  container: string;
}
/**
 * Service identity for a service. This is the identity that service producer
 * should use to access consumer resources.
 */
export interface ServiceIdentity {
  /**
   * The email address of the service account that a service producer would use
   * to access consumer resources.
   */
  email: string;
  /**
   * The unique and stable id of the service account.
   * https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts#ServiceAccount
   */
  uniqueId: string;
}
export interface ReactiveServiceIdentity {
  email: ComputedRef<string>;
  uniqueId: ComputedRef<string>;
}
export interface ServiceIdentityProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.ServiceIdentity";
  value: Uint8Array;
}
/**
 * Service identity for a service. This is the identity that service producer
 * should use to access consumer resources.
 */
export interface ServiceIdentitySDKType {
  email: string;
  unique_id: string;
}
function createBaseService(): Service {
  return {
    name: "",
    parent: "",
    config: undefined,
    state: 0
  };
}
export const Service = {
  typeUrl: "/google.api.serviceusage.v1beta1.Service",
  encode(message: Service, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.parent !== "") {
      writer.uint32(42).string(message.parent);
    }
    if (message.config !== undefined) {
      ServiceConfig.encode(message.config, writer.uint32(18).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Service {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 5:
          message.parent = reader.string();
          break;
        case 2:
          message.config = ServiceConfig.decode(reader, reader.uint32());
          break;
        case 4:
          message.state = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Service {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      parent: isSet(object.parent) ? String(object.parent) : "",
      config: isSet(object.config) ? ServiceConfig.fromJSON(object.config) : undefined,
      state: isSet(object.state) ? stateFromJSON(object.state) : -1
    };
  },
  toJSON(message: Service): JsonSafe<Service> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.parent !== undefined && (obj.parent = message.parent);
    message.config !== undefined && (obj.config = message.config ? ServiceConfig.toJSON(message.config) : undefined);
    message.state !== undefined && (obj.state = stateToJSON(message.state));
    return obj;
  },
  fromPartial(object: DeepPartial<Service>): Service {
    const message = createBaseService();
    message.name = object.name ?? "";
    message.parent = object.parent ?? "";
    message.config = object.config !== undefined && object.config !== null ? ServiceConfig.fromPartial(object.config) : undefined;
    message.state = object.state ?? 0;
    return message;
  },
  fromSDK(object: ServiceSDKType): Service {
    return {
      name: object?.name,
      parent: object?.parent,
      config: object.config ? ServiceConfig.fromSDK(object.config) : undefined,
      state: isSet(object.state) ? stateFromJSON(object.state) : -1
    };
  },
  fromSDKJSON(object: any): ServiceSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      parent: isSet(object.parent) ? String(object.parent) : "",
      config: isSet(object.config) ? ServiceConfig.fromSDKJSON(object.config) : undefined,
      state: isSet(object.state) ? stateFromJSON(object.state) : -1
    };
  },
  toSDK(message: Service): ServiceSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.parent = message.parent;
    message.config !== undefined && (obj.config = message.config ? ServiceConfig.toSDK(message.config) : undefined);
    message.state !== undefined && (obj.state = stateToJSON(message.state));
    return obj;
  },
  fromAmino(object: ServiceAmino): Service {
    const message = createBaseService();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    }
    if (object.config !== undefined && object.config !== null) {
      message.config = ServiceConfig.fromAmino(object.config);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    return message;
  },
  toAmino(message: Service): ServiceAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.parent = message.parent === "" ? undefined : message.parent;
    obj.config = message.config ? ServiceConfig.toAmino(message.config) : undefined;
    obj.state = message.state === 0 ? undefined : message.state;
    return obj;
  },
  fromAminoMsg(object: ServiceAminoMsg): Service {
    return Service.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceProtoMsg): Service {
    return Service.decode(message.value);
  },
  toProto(message: Service): Uint8Array {
    return Service.encode(message).finish();
  },
  toProtoMsg(message: Service): ServiceProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.Service",
      value: Service.encode(message).finish()
    };
  }
};
function createBaseServiceConfig(): ServiceConfig {
  return {
    name: "",
    title: "",
    apis: [],
    documentation: undefined,
    quota: undefined,
    authentication: undefined,
    usage: undefined,
    endpoints: [],
    monitoredResources: [],
    monitoring: undefined
  };
}
export const ServiceConfig = {
  typeUrl: "/google.api.serviceusage.v1beta1.ServiceConfig",
  encode(message: ServiceConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    for (const v of message.apis) {
      Api.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.documentation !== undefined) {
      Documentation.encode(message.documentation, writer.uint32(50).fork()).ldelim();
    }
    if (message.quota !== undefined) {
      Quota.encode(message.quota, writer.uint32(82).fork()).ldelim();
    }
    if (message.authentication !== undefined) {
      Authentication.encode(message.authentication, writer.uint32(90).fork()).ldelim();
    }
    if (message.usage !== undefined) {
      Usage.encode(message.usage, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.endpoints) {
      Endpoint.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    for (const v of message.monitoredResources) {
      MonitoredResourceDescriptor.encode(v!, writer.uint32(202).fork()).ldelim();
    }
    if (message.monitoring !== undefined) {
      Monitoring.encode(message.monitoring, writer.uint32(226).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ServiceConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.apis.push(Api.decode(reader, reader.uint32()));
          break;
        case 6:
          message.documentation = Documentation.decode(reader, reader.uint32());
          break;
        case 10:
          message.quota = Quota.decode(reader, reader.uint32());
          break;
        case 11:
          message.authentication = Authentication.decode(reader, reader.uint32());
          break;
        case 15:
          message.usage = Usage.decode(reader, reader.uint32());
          break;
        case 18:
          message.endpoints.push(Endpoint.decode(reader, reader.uint32()));
          break;
        case 25:
          message.monitoredResources.push(MonitoredResourceDescriptor.decode(reader, reader.uint32()));
          break;
        case 28:
          message.monitoring = Monitoring.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ServiceConfig {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      title: isSet(object.title) ? String(object.title) : "",
      apis: Array.isArray(object?.apis) ? object.apis.map((e: any) => Api.fromJSON(e)) : [],
      documentation: isSet(object.documentation) ? Documentation.fromJSON(object.documentation) : undefined,
      quota: isSet(object.quota) ? Quota.fromJSON(object.quota) : undefined,
      authentication: isSet(object.authentication) ? Authentication.fromJSON(object.authentication) : undefined,
      usage: isSet(object.usage) ? Usage.fromJSON(object.usage) : undefined,
      endpoints: Array.isArray(object?.endpoints) ? object.endpoints.map((e: any) => Endpoint.fromJSON(e)) : [],
      monitoredResources: Array.isArray(object?.monitoredResources) ? object.monitoredResources.map((e: any) => MonitoredResourceDescriptor.fromJSON(e)) : [],
      monitoring: isSet(object.monitoring) ? Monitoring.fromJSON(object.monitoring) : undefined
    };
  },
  toJSON(message: ServiceConfig): JsonSafe<ServiceConfig> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.title !== undefined && (obj.title = message.title);
    if (message.apis) {
      obj.apis = message.apis.map(e => e ? Api.toJSON(e) : undefined);
    } else {
      obj.apis = [];
    }
    message.documentation !== undefined && (obj.documentation = message.documentation ? Documentation.toJSON(message.documentation) : undefined);
    message.quota !== undefined && (obj.quota = message.quota ? Quota.toJSON(message.quota) : undefined);
    message.authentication !== undefined && (obj.authentication = message.authentication ? Authentication.toJSON(message.authentication) : undefined);
    message.usage !== undefined && (obj.usage = message.usage ? Usage.toJSON(message.usage) : undefined);
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map(e => e ? Endpoint.toJSON(e) : undefined);
    } else {
      obj.endpoints = [];
    }
    if (message.monitoredResources) {
      obj.monitoredResources = message.monitoredResources.map(e => e ? MonitoredResourceDescriptor.toJSON(e) : undefined);
    } else {
      obj.monitoredResources = [];
    }
    message.monitoring !== undefined && (obj.monitoring = message.monitoring ? Monitoring.toJSON(message.monitoring) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ServiceConfig>): ServiceConfig {
    const message = createBaseServiceConfig();
    message.name = object.name ?? "";
    message.title = object.title ?? "";
    message.apis = object.apis?.map(e => Api.fromPartial(e)) || [];
    message.documentation = object.documentation !== undefined && object.documentation !== null ? Documentation.fromPartial(object.documentation) : undefined;
    message.quota = object.quota !== undefined && object.quota !== null ? Quota.fromPartial(object.quota) : undefined;
    message.authentication = object.authentication !== undefined && object.authentication !== null ? Authentication.fromPartial(object.authentication) : undefined;
    message.usage = object.usage !== undefined && object.usage !== null ? Usage.fromPartial(object.usage) : undefined;
    message.endpoints = object.endpoints?.map(e => Endpoint.fromPartial(e)) || [];
    message.monitoredResources = object.monitoredResources?.map(e => MonitoredResourceDescriptor.fromPartial(e)) || [];
    message.monitoring = object.monitoring !== undefined && object.monitoring !== null ? Monitoring.fromPartial(object.monitoring) : undefined;
    return message;
  },
  fromSDK(object: ServiceConfigSDKType): ServiceConfig {
    return {
      name: object?.name,
      title: object?.title,
      apis: Array.isArray(object?.apis) ? object.apis.map((e: any) => Api.fromSDK(e)) : [],
      documentation: object.documentation ? Documentation.fromSDK(object.documentation) : undefined,
      quota: object.quota ? Quota.fromSDK(object.quota) : undefined,
      authentication: object.authentication ? Authentication.fromSDK(object.authentication) : undefined,
      usage: object.usage ? Usage.fromSDK(object.usage) : undefined,
      endpoints: Array.isArray(object?.endpoints) ? object.endpoints.map((e: any) => Endpoint.fromSDK(e)) : [],
      monitoredResources: Array.isArray(object?.monitored_resources) ? object.monitored_resources.map((e: any) => MonitoredResourceDescriptor.fromSDK(e)) : [],
      monitoring: object.monitoring ? Monitoring.fromSDK(object.monitoring) : undefined
    };
  },
  fromSDKJSON(object: any): ServiceConfigSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      title: isSet(object.title) ? String(object.title) : "",
      apis: Array.isArray(object?.apis) ? object.apis.map((e: any) => Api.fromSDKJSON(e)) : [],
      documentation: isSet(object.documentation) ? Documentation.fromSDKJSON(object.documentation) : undefined,
      quota: isSet(object.quota) ? Quota.fromSDKJSON(object.quota) : undefined,
      authentication: isSet(object.authentication) ? Authentication.fromSDKJSON(object.authentication) : undefined,
      usage: isSet(object.usage) ? Usage.fromSDKJSON(object.usage) : undefined,
      endpoints: Array.isArray(object?.endpoints) ? object.endpoints.map((e: any) => Endpoint.fromSDKJSON(e)) : [],
      monitored_resources: Array.isArray(object?.monitored_resources) ? object.monitored_resources.map((e: any) => MonitoredResourceDescriptor.fromSDKJSON(e)) : [],
      monitoring: isSet(object.monitoring) ? Monitoring.fromSDKJSON(object.monitoring) : undefined
    };
  },
  toSDK(message: ServiceConfig): ServiceConfigSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.title = message.title;
    if (message.apis) {
      obj.apis = message.apis.map(e => e ? Api.toSDK(e) : undefined);
    } else {
      obj.apis = [];
    }
    message.documentation !== undefined && (obj.documentation = message.documentation ? Documentation.toSDK(message.documentation) : undefined);
    message.quota !== undefined && (obj.quota = message.quota ? Quota.toSDK(message.quota) : undefined);
    message.authentication !== undefined && (obj.authentication = message.authentication ? Authentication.toSDK(message.authentication) : undefined);
    message.usage !== undefined && (obj.usage = message.usage ? Usage.toSDK(message.usage) : undefined);
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map(e => e ? Endpoint.toSDK(e) : undefined);
    } else {
      obj.endpoints = [];
    }
    if (message.monitoredResources) {
      obj.monitored_resources = message.monitoredResources.map(e => e ? MonitoredResourceDescriptor.toSDK(e) : undefined);
    } else {
      obj.monitored_resources = [];
    }
    message.monitoring !== undefined && (obj.monitoring = message.monitoring ? Monitoring.toSDK(message.monitoring) : undefined);
    return obj;
  },
  fromAmino(object: ServiceConfigAmino): ServiceConfig {
    const message = createBaseServiceConfig();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    message.apis = object.apis?.map(e => Api.fromAmino(e)) || [];
    if (object.documentation !== undefined && object.documentation !== null) {
      message.documentation = Documentation.fromAmino(object.documentation);
    }
    if (object.quota !== undefined && object.quota !== null) {
      message.quota = Quota.fromAmino(object.quota);
    }
    if (object.authentication !== undefined && object.authentication !== null) {
      message.authentication = Authentication.fromAmino(object.authentication);
    }
    if (object.usage !== undefined && object.usage !== null) {
      message.usage = Usage.fromAmino(object.usage);
    }
    message.endpoints = object.endpoints?.map(e => Endpoint.fromAmino(e)) || [];
    message.monitoredResources = object.monitored_resources?.map(e => MonitoredResourceDescriptor.fromAmino(e)) || [];
    if (object.monitoring !== undefined && object.monitoring !== null) {
      message.monitoring = Monitoring.fromAmino(object.monitoring);
    }
    return message;
  },
  toAmino(message: ServiceConfig): ServiceConfigAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.title = message.title === "" ? undefined : message.title;
    if (message.apis) {
      obj.apis = message.apis.map(e => e ? Api.toAmino(e) : undefined);
    } else {
      obj.apis = message.apis;
    }
    obj.documentation = message.documentation ? Documentation.toAmino(message.documentation) : undefined;
    obj.quota = message.quota ? Quota.toAmino(message.quota) : undefined;
    obj.authentication = message.authentication ? Authentication.toAmino(message.authentication) : undefined;
    obj.usage = message.usage ? Usage.toAmino(message.usage) : undefined;
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map(e => e ? Endpoint.toAmino(e) : undefined);
    } else {
      obj.endpoints = message.endpoints;
    }
    if (message.monitoredResources) {
      obj.monitored_resources = message.monitoredResources.map(e => e ? MonitoredResourceDescriptor.toAmino(e) : undefined);
    } else {
      obj.monitored_resources = message.monitoredResources;
    }
    obj.monitoring = message.monitoring ? Monitoring.toAmino(message.monitoring) : undefined;
    return obj;
  },
  fromAminoMsg(object: ServiceConfigAminoMsg): ServiceConfig {
    return ServiceConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceConfigProtoMsg): ServiceConfig {
    return ServiceConfig.decode(message.value);
  },
  toProto(message: ServiceConfig): Uint8Array {
    return ServiceConfig.encode(message).finish();
  },
  toProtoMsg(message: ServiceConfig): ServiceConfigProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.ServiceConfig",
      value: ServiceConfig.encode(message).finish()
    };
  }
};
function createBaseOperationMetadata(): OperationMetadata {
  return {
    resourceNames: []
  };
}
export const OperationMetadata = {
  typeUrl: "/google.api.serviceusage.v1beta1.OperationMetadata",
  encode(message: OperationMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.resourceNames) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OperationMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.resourceNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OperationMetadata {
    return {
      resourceNames: Array.isArray(object?.resourceNames) ? object.resourceNames.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: OperationMetadata): JsonSafe<OperationMetadata> {
    const obj: any = {};
    if (message.resourceNames) {
      obj.resourceNames = message.resourceNames.map(e => e);
    } else {
      obj.resourceNames = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<OperationMetadata>): OperationMetadata {
    const message = createBaseOperationMetadata();
    message.resourceNames = object.resourceNames?.map(e => e) || [];
    return message;
  },
  fromSDK(object: OperationMetadataSDKType): OperationMetadata {
    return {
      resourceNames: Array.isArray(object?.resource_names) ? object.resource_names.map((e: any) => e) : []
    };
  },
  fromSDKJSON(object: any): OperationMetadataSDKType {
    return {
      resource_names: Array.isArray(object?.resource_names) ? object.resource_names.map((e: any) => String(e)) : []
    };
  },
  toSDK(message: OperationMetadata): OperationMetadataSDKType {
    const obj: any = {};
    if (message.resourceNames) {
      obj.resource_names = message.resourceNames.map(e => e);
    } else {
      obj.resource_names = [];
    }
    return obj;
  },
  fromAmino(object: OperationMetadataAmino): OperationMetadata {
    const message = createBaseOperationMetadata();
    message.resourceNames = object.resource_names?.map(e => e) || [];
    return message;
  },
  toAmino(message: OperationMetadata): OperationMetadataAmino {
    const obj: any = {};
    if (message.resourceNames) {
      obj.resource_names = message.resourceNames.map(e => e);
    } else {
      obj.resource_names = message.resourceNames;
    }
    return obj;
  },
  fromAminoMsg(object: OperationMetadataAminoMsg): OperationMetadata {
    return OperationMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: OperationMetadataProtoMsg): OperationMetadata {
    return OperationMetadata.decode(message.value);
  },
  toProto(message: OperationMetadata): Uint8Array {
    return OperationMetadata.encode(message).finish();
  },
  toProtoMsg(message: OperationMetadata): OperationMetadataProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.OperationMetadata",
      value: OperationMetadata.encode(message).finish()
    };
  }
};
function createBaseConsumerQuotaMetric(): ConsumerQuotaMetric {
  return {
    name: "",
    metric: "",
    displayName: "",
    consumerQuotaLimits: [],
    descendantConsumerQuotaLimits: [],
    unit: ""
  };
}
export const ConsumerQuotaMetric = {
  typeUrl: "/google.api.serviceusage.v1beta1.ConsumerQuotaMetric",
  encode(message: ConsumerQuotaMetric, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.metric !== "") {
      writer.uint32(34).string(message.metric);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    for (const v of message.consumerQuotaLimits) {
      ConsumerQuotaLimit.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.descendantConsumerQuotaLimits) {
      ConsumerQuotaLimit.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.unit !== "") {
      writer.uint32(42).string(message.unit);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsumerQuotaMetric {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsumerQuotaMetric();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 4:
          message.metric = reader.string();
          break;
        case 2:
          message.displayName = reader.string();
          break;
        case 3:
          message.consumerQuotaLimits.push(ConsumerQuotaLimit.decode(reader, reader.uint32()));
          break;
        case 6:
          message.descendantConsumerQuotaLimits.push(ConsumerQuotaLimit.decode(reader, reader.uint32()));
          break;
        case 5:
          message.unit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsumerQuotaMetric {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      metric: isSet(object.metric) ? String(object.metric) : "",
      displayName: isSet(object.displayName) ? String(object.displayName) : "",
      consumerQuotaLimits: Array.isArray(object?.consumerQuotaLimits) ? object.consumerQuotaLimits.map((e: any) => ConsumerQuotaLimit.fromJSON(e)) : [],
      descendantConsumerQuotaLimits: Array.isArray(object?.descendantConsumerQuotaLimits) ? object.descendantConsumerQuotaLimits.map((e: any) => ConsumerQuotaLimit.fromJSON(e)) : [],
      unit: isSet(object.unit) ? String(object.unit) : ""
    };
  },
  toJSON(message: ConsumerQuotaMetric): JsonSafe<ConsumerQuotaMetric> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.metric !== undefined && (obj.metric = message.metric);
    message.displayName !== undefined && (obj.displayName = message.displayName);
    if (message.consumerQuotaLimits) {
      obj.consumerQuotaLimits = message.consumerQuotaLimits.map(e => e ? ConsumerQuotaLimit.toJSON(e) : undefined);
    } else {
      obj.consumerQuotaLimits = [];
    }
    if (message.descendantConsumerQuotaLimits) {
      obj.descendantConsumerQuotaLimits = message.descendantConsumerQuotaLimits.map(e => e ? ConsumerQuotaLimit.toJSON(e) : undefined);
    } else {
      obj.descendantConsumerQuotaLimits = [];
    }
    message.unit !== undefined && (obj.unit = message.unit);
    return obj;
  },
  fromPartial(object: DeepPartial<ConsumerQuotaMetric>): ConsumerQuotaMetric {
    const message = createBaseConsumerQuotaMetric();
    message.name = object.name ?? "";
    message.metric = object.metric ?? "";
    message.displayName = object.displayName ?? "";
    message.consumerQuotaLimits = object.consumerQuotaLimits?.map(e => ConsumerQuotaLimit.fromPartial(e)) || [];
    message.descendantConsumerQuotaLimits = object.descendantConsumerQuotaLimits?.map(e => ConsumerQuotaLimit.fromPartial(e)) || [];
    message.unit = object.unit ?? "";
    return message;
  },
  fromSDK(object: ConsumerQuotaMetricSDKType): ConsumerQuotaMetric {
    return {
      name: object?.name,
      metric: object?.metric,
      displayName: object?.display_name,
      consumerQuotaLimits: Array.isArray(object?.consumer_quota_limits) ? object.consumer_quota_limits.map((e: any) => ConsumerQuotaLimit.fromSDK(e)) : [],
      descendantConsumerQuotaLimits: Array.isArray(object?.descendant_consumer_quota_limits) ? object.descendant_consumer_quota_limits.map((e: any) => ConsumerQuotaLimit.fromSDK(e)) : [],
      unit: object?.unit
    };
  },
  fromSDKJSON(object: any): ConsumerQuotaMetricSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      metric: isSet(object.metric) ? String(object.metric) : "",
      display_name: isSet(object.display_name) ? String(object.display_name) : "",
      consumer_quota_limits: Array.isArray(object?.consumer_quota_limits) ? object.consumer_quota_limits.map((e: any) => ConsumerQuotaLimit.fromSDKJSON(e)) : [],
      descendant_consumer_quota_limits: Array.isArray(object?.descendant_consumer_quota_limits) ? object.descendant_consumer_quota_limits.map((e: any) => ConsumerQuotaLimit.fromSDKJSON(e)) : [],
      unit: isSet(object.unit) ? String(object.unit) : ""
    };
  },
  toSDK(message: ConsumerQuotaMetric): ConsumerQuotaMetricSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.metric = message.metric;
    obj.display_name = message.displayName;
    if (message.consumerQuotaLimits) {
      obj.consumer_quota_limits = message.consumerQuotaLimits.map(e => e ? ConsumerQuotaLimit.toSDK(e) : undefined);
    } else {
      obj.consumer_quota_limits = [];
    }
    if (message.descendantConsumerQuotaLimits) {
      obj.descendant_consumer_quota_limits = message.descendantConsumerQuotaLimits.map(e => e ? ConsumerQuotaLimit.toSDK(e) : undefined);
    } else {
      obj.descendant_consumer_quota_limits = [];
    }
    obj.unit = message.unit;
    return obj;
  },
  fromAmino(object: ConsumerQuotaMetricAmino): ConsumerQuotaMetric {
    const message = createBaseConsumerQuotaMetric();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.metric !== undefined && object.metric !== null) {
      message.metric = object.metric;
    }
    if (object.display_name !== undefined && object.display_name !== null) {
      message.displayName = object.display_name;
    }
    message.consumerQuotaLimits = object.consumer_quota_limits?.map(e => ConsumerQuotaLimit.fromAmino(e)) || [];
    message.descendantConsumerQuotaLimits = object.descendant_consumer_quota_limits?.map(e => ConsumerQuotaLimit.fromAmino(e)) || [];
    if (object.unit !== undefined && object.unit !== null) {
      message.unit = object.unit;
    }
    return message;
  },
  toAmino(message: ConsumerQuotaMetric): ConsumerQuotaMetricAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.metric = message.metric === "" ? undefined : message.metric;
    obj.display_name = message.displayName === "" ? undefined : message.displayName;
    if (message.consumerQuotaLimits) {
      obj.consumer_quota_limits = message.consumerQuotaLimits.map(e => e ? ConsumerQuotaLimit.toAmino(e) : undefined);
    } else {
      obj.consumer_quota_limits = message.consumerQuotaLimits;
    }
    if (message.descendantConsumerQuotaLimits) {
      obj.descendant_consumer_quota_limits = message.descendantConsumerQuotaLimits.map(e => e ? ConsumerQuotaLimit.toAmino(e) : undefined);
    } else {
      obj.descendant_consumer_quota_limits = message.descendantConsumerQuotaLimits;
    }
    obj.unit = message.unit === "" ? undefined : message.unit;
    return obj;
  },
  fromAminoMsg(object: ConsumerQuotaMetricAminoMsg): ConsumerQuotaMetric {
    return ConsumerQuotaMetric.fromAmino(object.value);
  },
  fromProtoMsg(message: ConsumerQuotaMetricProtoMsg): ConsumerQuotaMetric {
    return ConsumerQuotaMetric.decode(message.value);
  },
  toProto(message: ConsumerQuotaMetric): Uint8Array {
    return ConsumerQuotaMetric.encode(message).finish();
  },
  toProtoMsg(message: ConsumerQuotaMetric): ConsumerQuotaMetricProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.ConsumerQuotaMetric",
      value: ConsumerQuotaMetric.encode(message).finish()
    };
  }
};
function createBaseConsumerQuotaLimit(): ConsumerQuotaLimit {
  return {
    name: "",
    metric: "",
    unit: "",
    isPrecise: false,
    allowsAdminOverrides: false,
    quotaBuckets: []
  };
}
export const ConsumerQuotaLimit = {
  typeUrl: "/google.api.serviceusage.v1beta1.ConsumerQuotaLimit",
  encode(message: ConsumerQuotaLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.metric !== "") {
      writer.uint32(66).string(message.metric);
    }
    if (message.unit !== "") {
      writer.uint32(18).string(message.unit);
    }
    if (message.isPrecise === true) {
      writer.uint32(24).bool(message.isPrecise);
    }
    if (message.allowsAdminOverrides === true) {
      writer.uint32(56).bool(message.allowsAdminOverrides);
    }
    for (const v of message.quotaBuckets) {
      QuotaBucket.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsumerQuotaLimit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsumerQuotaLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 8:
          message.metric = reader.string();
          break;
        case 2:
          message.unit = reader.string();
          break;
        case 3:
          message.isPrecise = reader.bool();
          break;
        case 7:
          message.allowsAdminOverrides = reader.bool();
          break;
        case 9:
          message.quotaBuckets.push(QuotaBucket.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsumerQuotaLimit {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      metric: isSet(object.metric) ? String(object.metric) : "",
      unit: isSet(object.unit) ? String(object.unit) : "",
      isPrecise: isSet(object.isPrecise) ? Boolean(object.isPrecise) : false,
      allowsAdminOverrides: isSet(object.allowsAdminOverrides) ? Boolean(object.allowsAdminOverrides) : false,
      quotaBuckets: Array.isArray(object?.quotaBuckets) ? object.quotaBuckets.map((e: any) => QuotaBucket.fromJSON(e)) : []
    };
  },
  toJSON(message: ConsumerQuotaLimit): JsonSafe<ConsumerQuotaLimit> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.metric !== undefined && (obj.metric = message.metric);
    message.unit !== undefined && (obj.unit = message.unit);
    message.isPrecise !== undefined && (obj.isPrecise = message.isPrecise);
    message.allowsAdminOverrides !== undefined && (obj.allowsAdminOverrides = message.allowsAdminOverrides);
    if (message.quotaBuckets) {
      obj.quotaBuckets = message.quotaBuckets.map(e => e ? QuotaBucket.toJSON(e) : undefined);
    } else {
      obj.quotaBuckets = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ConsumerQuotaLimit>): ConsumerQuotaLimit {
    const message = createBaseConsumerQuotaLimit();
    message.name = object.name ?? "";
    message.metric = object.metric ?? "";
    message.unit = object.unit ?? "";
    message.isPrecise = object.isPrecise ?? false;
    message.allowsAdminOverrides = object.allowsAdminOverrides ?? false;
    message.quotaBuckets = object.quotaBuckets?.map(e => QuotaBucket.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ConsumerQuotaLimitSDKType): ConsumerQuotaLimit {
    return {
      name: object?.name,
      metric: object?.metric,
      unit: object?.unit,
      isPrecise: object?.is_precise,
      allowsAdminOverrides: object?.allows_admin_overrides,
      quotaBuckets: Array.isArray(object?.quota_buckets) ? object.quota_buckets.map((e: any) => QuotaBucket.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): ConsumerQuotaLimitSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      metric: isSet(object.metric) ? String(object.metric) : "",
      unit: isSet(object.unit) ? String(object.unit) : "",
      is_precise: isSet(object.is_precise) ? Boolean(object.is_precise) : false,
      allows_admin_overrides: isSet(object.allows_admin_overrides) ? Boolean(object.allows_admin_overrides) : false,
      quota_buckets: Array.isArray(object?.quota_buckets) ? object.quota_buckets.map((e: any) => QuotaBucket.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: ConsumerQuotaLimit): ConsumerQuotaLimitSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.metric = message.metric;
    obj.unit = message.unit;
    obj.is_precise = message.isPrecise;
    obj.allows_admin_overrides = message.allowsAdminOverrides;
    if (message.quotaBuckets) {
      obj.quota_buckets = message.quotaBuckets.map(e => e ? QuotaBucket.toSDK(e) : undefined);
    } else {
      obj.quota_buckets = [];
    }
    return obj;
  },
  fromAmino(object: ConsumerQuotaLimitAmino): ConsumerQuotaLimit {
    const message = createBaseConsumerQuotaLimit();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.metric !== undefined && object.metric !== null) {
      message.metric = object.metric;
    }
    if (object.unit !== undefined && object.unit !== null) {
      message.unit = object.unit;
    }
    if (object.is_precise !== undefined && object.is_precise !== null) {
      message.isPrecise = object.is_precise;
    }
    if (object.allows_admin_overrides !== undefined && object.allows_admin_overrides !== null) {
      message.allowsAdminOverrides = object.allows_admin_overrides;
    }
    message.quotaBuckets = object.quota_buckets?.map(e => QuotaBucket.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ConsumerQuotaLimit): ConsumerQuotaLimitAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.metric = message.metric === "" ? undefined : message.metric;
    obj.unit = message.unit === "" ? undefined : message.unit;
    obj.is_precise = message.isPrecise === false ? undefined : message.isPrecise;
    obj.allows_admin_overrides = message.allowsAdminOverrides === false ? undefined : message.allowsAdminOverrides;
    if (message.quotaBuckets) {
      obj.quota_buckets = message.quotaBuckets.map(e => e ? QuotaBucket.toAmino(e) : undefined);
    } else {
      obj.quota_buckets = message.quotaBuckets;
    }
    return obj;
  },
  fromAminoMsg(object: ConsumerQuotaLimitAminoMsg): ConsumerQuotaLimit {
    return ConsumerQuotaLimit.fromAmino(object.value);
  },
  fromProtoMsg(message: ConsumerQuotaLimitProtoMsg): ConsumerQuotaLimit {
    return ConsumerQuotaLimit.decode(message.value);
  },
  toProto(message: ConsumerQuotaLimit): Uint8Array {
    return ConsumerQuotaLimit.encode(message).finish();
  },
  toProtoMsg(message: ConsumerQuotaLimit): ConsumerQuotaLimitProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.ConsumerQuotaLimit",
      value: ConsumerQuotaLimit.encode(message).finish()
    };
  }
};
function createBaseQuotaBucket_DimensionsEntry(): QuotaBucket_DimensionsEntry {
  return {
    key: "",
    value: ""
  };
}
export const QuotaBucket_DimensionsEntry = {
  encode(message: QuotaBucket_DimensionsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuotaBucket_DimensionsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaBucket_DimensionsEntry();
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
  fromJSON(object: any): QuotaBucket_DimensionsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: QuotaBucket_DimensionsEntry): JsonSafe<QuotaBucket_DimensionsEntry> {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: DeepPartial<QuotaBucket_DimensionsEntry>): QuotaBucket_DimensionsEntry {
    const message = createBaseQuotaBucket_DimensionsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromSDK(object: QuotaBucket_DimensionsEntrySDKType): QuotaBucket_DimensionsEntry {
    return {
      key: object?.key,
      value: object?.value
    };
  },
  fromSDKJSON(object: any): QuotaBucket_DimensionsEntrySDKType {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toSDK(message: QuotaBucket_DimensionsEntry): QuotaBucket_DimensionsEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: QuotaBucket_DimensionsEntryAmino): QuotaBucket_DimensionsEntry {
    const message = createBaseQuotaBucket_DimensionsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: QuotaBucket_DimensionsEntry): QuotaBucket_DimensionsEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: QuotaBucket_DimensionsEntryAminoMsg): QuotaBucket_DimensionsEntry {
    return QuotaBucket_DimensionsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: QuotaBucket_DimensionsEntryProtoMsg): QuotaBucket_DimensionsEntry {
    return QuotaBucket_DimensionsEntry.decode(message.value);
  },
  toProto(message: QuotaBucket_DimensionsEntry): Uint8Array {
    return QuotaBucket_DimensionsEntry.encode(message).finish();
  }
};
function createBaseQuotaBucket(): QuotaBucket {
  return {
    effectiveLimit: BigInt(0),
    defaultLimit: BigInt(0),
    producerOverride: undefined,
    consumerOverride: undefined,
    adminOverride: undefined,
    dimensions: {}
  };
}
export const QuotaBucket = {
  typeUrl: "/google.api.serviceusage.v1beta1.QuotaBucket",
  encode(message: QuotaBucket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.effectiveLimit !== BigInt(0)) {
      writer.uint32(8).int64(message.effectiveLimit);
    }
    if (message.defaultLimit !== BigInt(0)) {
      writer.uint32(16).int64(message.defaultLimit);
    }
    if (message.producerOverride !== undefined) {
      QuotaOverride.encode(message.producerOverride, writer.uint32(26).fork()).ldelim();
    }
    if (message.consumerOverride !== undefined) {
      QuotaOverride.encode(message.consumerOverride, writer.uint32(34).fork()).ldelim();
    }
    if (message.adminOverride !== undefined) {
      QuotaOverride.encode(message.adminOverride, writer.uint32(42).fork()).ldelim();
    }
    Object.entries(message.dimensions).forEach(([key, value]) => {
      QuotaBucket_DimensionsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(50).fork()).ldelim();
    });
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuotaBucket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaBucket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effectiveLimit = reader.int64();
          break;
        case 2:
          message.defaultLimit = reader.int64();
          break;
        case 3:
          message.producerOverride = QuotaOverride.decode(reader, reader.uint32());
          break;
        case 4:
          message.consumerOverride = QuotaOverride.decode(reader, reader.uint32());
          break;
        case 5:
          message.adminOverride = QuotaOverride.decode(reader, reader.uint32());
          break;
        case 6:
          const entry6 = QuotaBucket_DimensionsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.dimensions[entry6.key] = entry6.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuotaBucket {
    return {
      effectiveLimit: isSet(object.effectiveLimit) ? BigInt(object.effectiveLimit.toString()) : BigInt(0),
      defaultLimit: isSet(object.defaultLimit) ? BigInt(object.defaultLimit.toString()) : BigInt(0),
      producerOverride: isSet(object.producerOverride) ? QuotaOverride.fromJSON(object.producerOverride) : undefined,
      consumerOverride: isSet(object.consumerOverride) ? QuotaOverride.fromJSON(object.consumerOverride) : undefined,
      adminOverride: isSet(object.adminOverride) ? QuotaOverride.fromJSON(object.adminOverride) : undefined,
      dimensions: isObject(object.dimensions) ? Object.entries(object.dimensions).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {}
    };
  },
  toJSON(message: QuotaBucket): JsonSafe<QuotaBucket> {
    const obj: any = {};
    message.effectiveLimit !== undefined && (obj.effectiveLimit = (message.effectiveLimit || BigInt(0)).toString());
    message.defaultLimit !== undefined && (obj.defaultLimit = (message.defaultLimit || BigInt(0)).toString());
    message.producerOverride !== undefined && (obj.producerOverride = message.producerOverride ? QuotaOverride.toJSON(message.producerOverride) : undefined);
    message.consumerOverride !== undefined && (obj.consumerOverride = message.consumerOverride ? QuotaOverride.toJSON(message.consumerOverride) : undefined);
    message.adminOverride !== undefined && (obj.adminOverride = message.adminOverride ? QuotaOverride.toJSON(message.adminOverride) : undefined);
    obj.dimensions = {};
    if (message.dimensions) {
      Object.entries(message.dimensions).forEach(([k, v]) => {
        obj.dimensions[k] = v;
      });
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QuotaBucket>): QuotaBucket {
    const message = createBaseQuotaBucket();
    message.effectiveLimit = object.effectiveLimit !== undefined && object.effectiveLimit !== null ? BigInt(object.effectiveLimit.toString()) : BigInt(0);
    message.defaultLimit = object.defaultLimit !== undefined && object.defaultLimit !== null ? BigInt(object.defaultLimit.toString()) : BigInt(0);
    message.producerOverride = object.producerOverride !== undefined && object.producerOverride !== null ? QuotaOverride.fromPartial(object.producerOverride) : undefined;
    message.consumerOverride = object.consumerOverride !== undefined && object.consumerOverride !== null ? QuotaOverride.fromPartial(object.consumerOverride) : undefined;
    message.adminOverride = object.adminOverride !== undefined && object.adminOverride !== null ? QuotaOverride.fromPartial(object.adminOverride) : undefined;
    message.dimensions = Object.entries(object.dimensions ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromSDK(object: QuotaBucketSDKType): QuotaBucket {
    return {
      effectiveLimit: object?.effective_limit,
      defaultLimit: object?.default_limit,
      producerOverride: object.producer_override ? QuotaOverride.fromSDK(object.producer_override) : undefined,
      consumerOverride: object.consumer_override ? QuotaOverride.fromSDK(object.consumer_override) : undefined,
      adminOverride: object.admin_override ? QuotaOverride.fromSDK(object.admin_override) : undefined,
      dimensions: isObject(object.dimensions) ? Object.entries(object.dimensions).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {}
    };
  },
  fromSDKJSON(object: any): QuotaBucketSDKType {
    return {
      effective_limit: isSet(object.effective_limit) ? BigInt(object.effective_limit.toString()) : BigInt(0),
      default_limit: isSet(object.default_limit) ? BigInt(object.default_limit.toString()) : BigInt(0),
      producer_override: isSet(object.producer_override) ? QuotaOverride.fromSDKJSON(object.producer_override) : undefined,
      consumer_override: isSet(object.consumer_override) ? QuotaOverride.fromSDKJSON(object.consumer_override) : undefined,
      admin_override: isSet(object.admin_override) ? QuotaOverride.fromSDKJSON(object.admin_override) : undefined,
      dimensions: isObject(object.dimensions) ? Object.entries(object.dimensions).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {}
    };
  },
  toSDK(message: QuotaBucket): QuotaBucketSDKType {
    const obj: any = {};
    obj.effective_limit = message.effectiveLimit;
    obj.default_limit = message.defaultLimit;
    message.producerOverride !== undefined && (obj.producer_override = message.producerOverride ? QuotaOverride.toSDK(message.producerOverride) : undefined);
    message.consumerOverride !== undefined && (obj.consumer_override = message.consumerOverride ? QuotaOverride.toSDK(message.consumerOverride) : undefined);
    message.adminOverride !== undefined && (obj.admin_override = message.adminOverride ? QuotaOverride.toSDK(message.adminOverride) : undefined);
    obj.dimensions = {};
    if (message.dimensions) {
      Object.entries(message.dimensions).forEach(([k, v]) => {
        obj.dimensions[k] = v;
      });
    }
    return obj;
  },
  fromAmino(object: QuotaBucketAmino): QuotaBucket {
    const message = createBaseQuotaBucket();
    if (object.effective_limit !== undefined && object.effective_limit !== null) {
      message.effectiveLimit = BigInt(object.effective_limit);
    }
    if (object.default_limit !== undefined && object.default_limit !== null) {
      message.defaultLimit = BigInt(object.default_limit);
    }
    if (object.producer_override !== undefined && object.producer_override !== null) {
      message.producerOverride = QuotaOverride.fromAmino(object.producer_override);
    }
    if (object.consumer_override !== undefined && object.consumer_override !== null) {
      message.consumerOverride = QuotaOverride.fromAmino(object.consumer_override);
    }
    if (object.admin_override !== undefined && object.admin_override !== null) {
      message.adminOverride = QuotaOverride.fromAmino(object.admin_override);
    }
    message.dimensions = Object.entries(object.dimensions ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message: QuotaBucket): QuotaBucketAmino {
    const obj: any = {};
    obj.effective_limit = message.effectiveLimit !== BigInt(0) ? message.effectiveLimit?.toString() : undefined;
    obj.default_limit = message.defaultLimit !== BigInt(0) ? message.defaultLimit?.toString() : undefined;
    obj.producer_override = message.producerOverride ? QuotaOverride.toAmino(message.producerOverride) : undefined;
    obj.consumer_override = message.consumerOverride ? QuotaOverride.toAmino(message.consumerOverride) : undefined;
    obj.admin_override = message.adminOverride ? QuotaOverride.toAmino(message.adminOverride) : undefined;
    obj.dimensions = {};
    if (message.dimensions) {
      Object.entries(message.dimensions).forEach(([k, v]) => {
        obj.dimensions[k] = v;
      });
    }
    return obj;
  },
  fromAminoMsg(object: QuotaBucketAminoMsg): QuotaBucket {
    return QuotaBucket.fromAmino(object.value);
  },
  fromProtoMsg(message: QuotaBucketProtoMsg): QuotaBucket {
    return QuotaBucket.decode(message.value);
  },
  toProto(message: QuotaBucket): Uint8Array {
    return QuotaBucket.encode(message).finish();
  },
  toProtoMsg(message: QuotaBucket): QuotaBucketProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.QuotaBucket",
      value: QuotaBucket.encode(message).finish()
    };
  }
};
function createBaseQuotaOverride_DimensionsEntry(): QuotaOverride_DimensionsEntry {
  return {
    key: "",
    value: ""
  };
}
export const QuotaOverride_DimensionsEntry = {
  encode(message: QuotaOverride_DimensionsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuotaOverride_DimensionsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaOverride_DimensionsEntry();
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
  fromJSON(object: any): QuotaOverride_DimensionsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: QuotaOverride_DimensionsEntry): JsonSafe<QuotaOverride_DimensionsEntry> {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: DeepPartial<QuotaOverride_DimensionsEntry>): QuotaOverride_DimensionsEntry {
    const message = createBaseQuotaOverride_DimensionsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromSDK(object: QuotaOverride_DimensionsEntrySDKType): QuotaOverride_DimensionsEntry {
    return {
      key: object?.key,
      value: object?.value
    };
  },
  fromSDKJSON(object: any): QuotaOverride_DimensionsEntrySDKType {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toSDK(message: QuotaOverride_DimensionsEntry): QuotaOverride_DimensionsEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: QuotaOverride_DimensionsEntryAmino): QuotaOverride_DimensionsEntry {
    const message = createBaseQuotaOverride_DimensionsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: QuotaOverride_DimensionsEntry): QuotaOverride_DimensionsEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: QuotaOverride_DimensionsEntryAminoMsg): QuotaOverride_DimensionsEntry {
    return QuotaOverride_DimensionsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: QuotaOverride_DimensionsEntryProtoMsg): QuotaOverride_DimensionsEntry {
    return QuotaOverride_DimensionsEntry.decode(message.value);
  },
  toProto(message: QuotaOverride_DimensionsEntry): Uint8Array {
    return QuotaOverride_DimensionsEntry.encode(message).finish();
  }
};
function createBaseQuotaOverride(): QuotaOverride {
  return {
    name: "",
    overrideValue: BigInt(0),
    dimensions: {},
    metric: "",
    unit: "",
    adminOverrideAncestor: ""
  };
}
export const QuotaOverride = {
  typeUrl: "/google.api.serviceusage.v1beta1.QuotaOverride",
  encode(message: QuotaOverride, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.overrideValue !== BigInt(0)) {
      writer.uint32(16).int64(message.overrideValue);
    }
    Object.entries(message.dimensions).forEach(([key, value]) => {
      QuotaOverride_DimensionsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    if (message.metric !== "") {
      writer.uint32(34).string(message.metric);
    }
    if (message.unit !== "") {
      writer.uint32(42).string(message.unit);
    }
    if (message.adminOverrideAncestor !== "") {
      writer.uint32(50).string(message.adminOverrideAncestor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuotaOverride {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaOverride();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.overrideValue = reader.int64();
          break;
        case 3:
          const entry3 = QuotaOverride_DimensionsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.dimensions[entry3.key] = entry3.value;
          }
          break;
        case 4:
          message.metric = reader.string();
          break;
        case 5:
          message.unit = reader.string();
          break;
        case 6:
          message.adminOverrideAncestor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuotaOverride {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      overrideValue: isSet(object.overrideValue) ? BigInt(object.overrideValue.toString()) : BigInt(0),
      dimensions: isObject(object.dimensions) ? Object.entries(object.dimensions).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      metric: isSet(object.metric) ? String(object.metric) : "",
      unit: isSet(object.unit) ? String(object.unit) : "",
      adminOverrideAncestor: isSet(object.adminOverrideAncestor) ? String(object.adminOverrideAncestor) : ""
    };
  },
  toJSON(message: QuotaOverride): JsonSafe<QuotaOverride> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.overrideValue !== undefined && (obj.overrideValue = (message.overrideValue || BigInt(0)).toString());
    obj.dimensions = {};
    if (message.dimensions) {
      Object.entries(message.dimensions).forEach(([k, v]) => {
        obj.dimensions[k] = v;
      });
    }
    message.metric !== undefined && (obj.metric = message.metric);
    message.unit !== undefined && (obj.unit = message.unit);
    message.adminOverrideAncestor !== undefined && (obj.adminOverrideAncestor = message.adminOverrideAncestor);
    return obj;
  },
  fromPartial(object: DeepPartial<QuotaOverride>): QuotaOverride {
    const message = createBaseQuotaOverride();
    message.name = object.name ?? "";
    message.overrideValue = object.overrideValue !== undefined && object.overrideValue !== null ? BigInt(object.overrideValue.toString()) : BigInt(0);
    message.dimensions = Object.entries(object.dimensions ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.metric = object.metric ?? "";
    message.unit = object.unit ?? "";
    message.adminOverrideAncestor = object.adminOverrideAncestor ?? "";
    return message;
  },
  fromSDK(object: QuotaOverrideSDKType): QuotaOverride {
    return {
      name: object?.name,
      overrideValue: object?.override_value,
      dimensions: isObject(object.dimensions) ? Object.entries(object.dimensions).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      metric: object?.metric,
      unit: object?.unit,
      adminOverrideAncestor: object?.admin_override_ancestor
    };
  },
  fromSDKJSON(object: any): QuotaOverrideSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      override_value: isSet(object.override_value) ? BigInt(object.override_value.toString()) : BigInt(0),
      dimensions: isObject(object.dimensions) ? Object.entries(object.dimensions).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      metric: isSet(object.metric) ? String(object.metric) : "",
      unit: isSet(object.unit) ? String(object.unit) : "",
      admin_override_ancestor: isSet(object.admin_override_ancestor) ? String(object.admin_override_ancestor) : ""
    };
  },
  toSDK(message: QuotaOverride): QuotaOverrideSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.override_value = message.overrideValue;
    obj.dimensions = {};
    if (message.dimensions) {
      Object.entries(message.dimensions).forEach(([k, v]) => {
        obj.dimensions[k] = v;
      });
    }
    obj.metric = message.metric;
    obj.unit = message.unit;
    obj.admin_override_ancestor = message.adminOverrideAncestor;
    return obj;
  },
  fromAmino(object: QuotaOverrideAmino): QuotaOverride {
    const message = createBaseQuotaOverride();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.override_value !== undefined && object.override_value !== null) {
      message.overrideValue = BigInt(object.override_value);
    }
    message.dimensions = Object.entries(object.dimensions ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    if (object.metric !== undefined && object.metric !== null) {
      message.metric = object.metric;
    }
    if (object.unit !== undefined && object.unit !== null) {
      message.unit = object.unit;
    }
    if (object.admin_override_ancestor !== undefined && object.admin_override_ancestor !== null) {
      message.adminOverrideAncestor = object.admin_override_ancestor;
    }
    return message;
  },
  toAmino(message: QuotaOverride): QuotaOverrideAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.override_value = message.overrideValue !== BigInt(0) ? message.overrideValue?.toString() : undefined;
    obj.dimensions = {};
    if (message.dimensions) {
      Object.entries(message.dimensions).forEach(([k, v]) => {
        obj.dimensions[k] = v;
      });
    }
    obj.metric = message.metric === "" ? undefined : message.metric;
    obj.unit = message.unit === "" ? undefined : message.unit;
    obj.admin_override_ancestor = message.adminOverrideAncestor === "" ? undefined : message.adminOverrideAncestor;
    return obj;
  },
  fromAminoMsg(object: QuotaOverrideAminoMsg): QuotaOverride {
    return QuotaOverride.fromAmino(object.value);
  },
  fromProtoMsg(message: QuotaOverrideProtoMsg): QuotaOverride {
    return QuotaOverride.decode(message.value);
  },
  toProto(message: QuotaOverride): Uint8Array {
    return QuotaOverride.encode(message).finish();
  },
  toProtoMsg(message: QuotaOverride): QuotaOverrideProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.QuotaOverride",
      value: QuotaOverride.encode(message).finish()
    };
  }
};
function createBaseOverrideInlineSource(): OverrideInlineSource {
  return {
    overrides: []
  };
}
export const OverrideInlineSource = {
  typeUrl: "/google.api.serviceusage.v1beta1.OverrideInlineSource",
  encode(message: OverrideInlineSource, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.overrides) {
      QuotaOverride.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OverrideInlineSource {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOverrideInlineSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.overrides.push(QuotaOverride.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OverrideInlineSource {
    return {
      overrides: Array.isArray(object?.overrides) ? object.overrides.map((e: any) => QuotaOverride.fromJSON(e)) : []
    };
  },
  toJSON(message: OverrideInlineSource): JsonSafe<OverrideInlineSource> {
    const obj: any = {};
    if (message.overrides) {
      obj.overrides = message.overrides.map(e => e ? QuotaOverride.toJSON(e) : undefined);
    } else {
      obj.overrides = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<OverrideInlineSource>): OverrideInlineSource {
    const message = createBaseOverrideInlineSource();
    message.overrides = object.overrides?.map(e => QuotaOverride.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: OverrideInlineSourceSDKType): OverrideInlineSource {
    return {
      overrides: Array.isArray(object?.overrides) ? object.overrides.map((e: any) => QuotaOverride.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): OverrideInlineSourceSDKType {
    return {
      overrides: Array.isArray(object?.overrides) ? object.overrides.map((e: any) => QuotaOverride.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: OverrideInlineSource): OverrideInlineSourceSDKType {
    const obj: any = {};
    if (message.overrides) {
      obj.overrides = message.overrides.map(e => e ? QuotaOverride.toSDK(e) : undefined);
    } else {
      obj.overrides = [];
    }
    return obj;
  },
  fromAmino(object: OverrideInlineSourceAmino): OverrideInlineSource {
    const message = createBaseOverrideInlineSource();
    message.overrides = object.overrides?.map(e => QuotaOverride.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: OverrideInlineSource): OverrideInlineSourceAmino {
    const obj: any = {};
    if (message.overrides) {
      obj.overrides = message.overrides.map(e => e ? QuotaOverride.toAmino(e) : undefined);
    } else {
      obj.overrides = message.overrides;
    }
    return obj;
  },
  fromAminoMsg(object: OverrideInlineSourceAminoMsg): OverrideInlineSource {
    return OverrideInlineSource.fromAmino(object.value);
  },
  fromProtoMsg(message: OverrideInlineSourceProtoMsg): OverrideInlineSource {
    return OverrideInlineSource.decode(message.value);
  },
  toProto(message: OverrideInlineSource): Uint8Array {
    return OverrideInlineSource.encode(message).finish();
  },
  toProtoMsg(message: OverrideInlineSource): OverrideInlineSourceProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.OverrideInlineSource",
      value: OverrideInlineSource.encode(message).finish()
    };
  }
};
function createBaseAdminQuotaPolicy_DimensionsEntry(): AdminQuotaPolicy_DimensionsEntry {
  return {
    key: "",
    value: ""
  };
}
export const AdminQuotaPolicy_DimensionsEntry = {
  encode(message: AdminQuotaPolicy_DimensionsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AdminQuotaPolicy_DimensionsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminQuotaPolicy_DimensionsEntry();
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
  fromJSON(object: any): AdminQuotaPolicy_DimensionsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: AdminQuotaPolicy_DimensionsEntry): JsonSafe<AdminQuotaPolicy_DimensionsEntry> {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: DeepPartial<AdminQuotaPolicy_DimensionsEntry>): AdminQuotaPolicy_DimensionsEntry {
    const message = createBaseAdminQuotaPolicy_DimensionsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromSDK(object: AdminQuotaPolicy_DimensionsEntrySDKType): AdminQuotaPolicy_DimensionsEntry {
    return {
      key: object?.key,
      value: object?.value
    };
  },
  fromSDKJSON(object: any): AdminQuotaPolicy_DimensionsEntrySDKType {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toSDK(message: AdminQuotaPolicy_DimensionsEntry): AdminQuotaPolicy_DimensionsEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: AdminQuotaPolicy_DimensionsEntryAmino): AdminQuotaPolicy_DimensionsEntry {
    const message = createBaseAdminQuotaPolicy_DimensionsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: AdminQuotaPolicy_DimensionsEntry): AdminQuotaPolicy_DimensionsEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: AdminQuotaPolicy_DimensionsEntryAminoMsg): AdminQuotaPolicy_DimensionsEntry {
    return AdminQuotaPolicy_DimensionsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: AdminQuotaPolicy_DimensionsEntryProtoMsg): AdminQuotaPolicy_DimensionsEntry {
    return AdminQuotaPolicy_DimensionsEntry.decode(message.value);
  },
  toProto(message: AdminQuotaPolicy_DimensionsEntry): Uint8Array {
    return AdminQuotaPolicy_DimensionsEntry.encode(message).finish();
  }
};
function createBaseAdminQuotaPolicy(): AdminQuotaPolicy {
  return {
    name: "",
    policyValue: BigInt(0),
    dimensions: {},
    metric: "",
    unit: "",
    container: ""
  };
}
export const AdminQuotaPolicy = {
  typeUrl: "/google.api.serviceusage.v1beta1.AdminQuotaPolicy",
  encode(message: AdminQuotaPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.policyValue !== BigInt(0)) {
      writer.uint32(16).int64(message.policyValue);
    }
    Object.entries(message.dimensions).forEach(([key, value]) => {
      AdminQuotaPolicy_DimensionsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    if (message.metric !== "") {
      writer.uint32(34).string(message.metric);
    }
    if (message.unit !== "") {
      writer.uint32(42).string(message.unit);
    }
    if (message.container !== "") {
      writer.uint32(50).string(message.container);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AdminQuotaPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminQuotaPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.policyValue = reader.int64();
          break;
        case 3:
          const entry3 = AdminQuotaPolicy_DimensionsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.dimensions[entry3.key] = entry3.value;
          }
          break;
        case 4:
          message.metric = reader.string();
          break;
        case 5:
          message.unit = reader.string();
          break;
        case 6:
          message.container = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AdminQuotaPolicy {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      policyValue: isSet(object.policyValue) ? BigInt(object.policyValue.toString()) : BigInt(0),
      dimensions: isObject(object.dimensions) ? Object.entries(object.dimensions).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      metric: isSet(object.metric) ? String(object.metric) : "",
      unit: isSet(object.unit) ? String(object.unit) : "",
      container: isSet(object.container) ? String(object.container) : ""
    };
  },
  toJSON(message: AdminQuotaPolicy): JsonSafe<AdminQuotaPolicy> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.policyValue !== undefined && (obj.policyValue = (message.policyValue || BigInt(0)).toString());
    obj.dimensions = {};
    if (message.dimensions) {
      Object.entries(message.dimensions).forEach(([k, v]) => {
        obj.dimensions[k] = v;
      });
    }
    message.metric !== undefined && (obj.metric = message.metric);
    message.unit !== undefined && (obj.unit = message.unit);
    message.container !== undefined && (obj.container = message.container);
    return obj;
  },
  fromPartial(object: DeepPartial<AdminQuotaPolicy>): AdminQuotaPolicy {
    const message = createBaseAdminQuotaPolicy();
    message.name = object.name ?? "";
    message.policyValue = object.policyValue !== undefined && object.policyValue !== null ? BigInt(object.policyValue.toString()) : BigInt(0);
    message.dimensions = Object.entries(object.dimensions ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.metric = object.metric ?? "";
    message.unit = object.unit ?? "";
    message.container = object.container ?? "";
    return message;
  },
  fromSDK(object: AdminQuotaPolicySDKType): AdminQuotaPolicy {
    return {
      name: object?.name,
      policyValue: object?.policy_value,
      dimensions: isObject(object.dimensions) ? Object.entries(object.dimensions).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      metric: object?.metric,
      unit: object?.unit,
      container: object?.container
    };
  },
  fromSDKJSON(object: any): AdminQuotaPolicySDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      policy_value: isSet(object.policy_value) ? BigInt(object.policy_value.toString()) : BigInt(0),
      dimensions: isObject(object.dimensions) ? Object.entries(object.dimensions).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      metric: isSet(object.metric) ? String(object.metric) : "",
      unit: isSet(object.unit) ? String(object.unit) : "",
      container: isSet(object.container) ? String(object.container) : ""
    };
  },
  toSDK(message: AdminQuotaPolicy): AdminQuotaPolicySDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.policy_value = message.policyValue;
    obj.dimensions = {};
    if (message.dimensions) {
      Object.entries(message.dimensions).forEach(([k, v]) => {
        obj.dimensions[k] = v;
      });
    }
    obj.metric = message.metric;
    obj.unit = message.unit;
    obj.container = message.container;
    return obj;
  },
  fromAmino(object: AdminQuotaPolicyAmino): AdminQuotaPolicy {
    const message = createBaseAdminQuotaPolicy();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.policy_value !== undefined && object.policy_value !== null) {
      message.policyValue = BigInt(object.policy_value);
    }
    message.dimensions = Object.entries(object.dimensions ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    if (object.metric !== undefined && object.metric !== null) {
      message.metric = object.metric;
    }
    if (object.unit !== undefined && object.unit !== null) {
      message.unit = object.unit;
    }
    if (object.container !== undefined && object.container !== null) {
      message.container = object.container;
    }
    return message;
  },
  toAmino(message: AdminQuotaPolicy): AdminQuotaPolicyAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.policy_value = message.policyValue !== BigInt(0) ? message.policyValue?.toString() : undefined;
    obj.dimensions = {};
    if (message.dimensions) {
      Object.entries(message.dimensions).forEach(([k, v]) => {
        obj.dimensions[k] = v;
      });
    }
    obj.metric = message.metric === "" ? undefined : message.metric;
    obj.unit = message.unit === "" ? undefined : message.unit;
    obj.container = message.container === "" ? undefined : message.container;
    return obj;
  },
  fromAminoMsg(object: AdminQuotaPolicyAminoMsg): AdminQuotaPolicy {
    return AdminQuotaPolicy.fromAmino(object.value);
  },
  fromProtoMsg(message: AdminQuotaPolicyProtoMsg): AdminQuotaPolicy {
    return AdminQuotaPolicy.decode(message.value);
  },
  toProto(message: AdminQuotaPolicy): Uint8Array {
    return AdminQuotaPolicy.encode(message).finish();
  },
  toProtoMsg(message: AdminQuotaPolicy): AdminQuotaPolicyProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.AdminQuotaPolicy",
      value: AdminQuotaPolicy.encode(message).finish()
    };
  }
};
function createBaseServiceIdentity(): ServiceIdentity {
  return {
    email: "",
    uniqueId: ""
  };
}
export const ServiceIdentity = {
  typeUrl: "/google.api.serviceusage.v1beta1.ServiceIdentity",
  encode(message: ServiceIdentity, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.uniqueId !== "") {
      writer.uint32(18).string(message.uniqueId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ServiceIdentity {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceIdentity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.email = reader.string();
          break;
        case 2:
          message.uniqueId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ServiceIdentity {
    return {
      email: isSet(object.email) ? String(object.email) : "",
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : ""
    };
  },
  toJSON(message: ServiceIdentity): JsonSafe<ServiceIdentity> {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    return obj;
  },
  fromPartial(object: DeepPartial<ServiceIdentity>): ServiceIdentity {
    const message = createBaseServiceIdentity();
    message.email = object.email ?? "";
    message.uniqueId = object.uniqueId ?? "";
    return message;
  },
  fromSDK(object: ServiceIdentitySDKType): ServiceIdentity {
    return {
      email: object?.email,
      uniqueId: object?.unique_id
    };
  },
  fromSDKJSON(object: any): ServiceIdentitySDKType {
    return {
      email: isSet(object.email) ? String(object.email) : "",
      unique_id: isSet(object.unique_id) ? String(object.unique_id) : ""
    };
  },
  toSDK(message: ServiceIdentity): ServiceIdentitySDKType {
    const obj: any = {};
    obj.email = message.email;
    obj.unique_id = message.uniqueId;
    return obj;
  },
  fromAmino(object: ServiceIdentityAmino): ServiceIdentity {
    const message = createBaseServiceIdentity();
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    }
    if (object.unique_id !== undefined && object.unique_id !== null) {
      message.uniqueId = object.unique_id;
    }
    return message;
  },
  toAmino(message: ServiceIdentity): ServiceIdentityAmino {
    const obj: any = {};
    obj.email = message.email === "" ? undefined : message.email;
    obj.unique_id = message.uniqueId === "" ? undefined : message.uniqueId;
    return obj;
  },
  fromAminoMsg(object: ServiceIdentityAminoMsg): ServiceIdentity {
    return ServiceIdentity.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceIdentityProtoMsg): ServiceIdentity {
    return ServiceIdentity.decode(message.value);
  },
  toProto(message: ServiceIdentity): Uint8Array {
    return ServiceIdentity.encode(message).finish();
  },
  toProtoMsg(message: ServiceIdentity): ServiceIdentityProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.ServiceIdentity",
      value: ServiceIdentity.encode(message).finish()
    };
  }
};