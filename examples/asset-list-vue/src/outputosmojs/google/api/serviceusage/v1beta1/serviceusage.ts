import { QuotaView, QuotaViewSDKType, QuotaOverride, QuotaOverrideSDKType, QuotaSafetyCheck, QuotaSafetyCheckSDKType, OverrideInlineSource, OverrideInlineSourceSDKType, Service, ServiceSDKType, ConsumerQuotaMetric, ConsumerQuotaMetricSDKType, AdminQuotaPolicy, AdminQuotaPolicySDKType, ServiceIdentity, ServiceIdentitySDKType, quotaViewFromJSON, quotaViewToJSON, quotaSafetyCheckFromJSON, quotaSafetyCheckToJSON } from "./resources";
import { FieldMask, FieldMaskSDKType } from "../../../protobuf/field_mask";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
import { ComputedRef } from "vue";
export const protobufPackage = "google.api.serviceusage.v1beta1";
/** Enum for service identity state. */
export enum GetServiceIdentityResponse_IdentityState {
  /**
   * IDENTITY_STATE_UNSPECIFIED - Default service identity state. This value is used if the state is
   * omitted.
   */
  IDENTITY_STATE_UNSPECIFIED = 0,
  /** ACTIVE - Service identity has been created and can be used. */
  ACTIVE = 1,
  UNRECOGNIZED = -1,
}
export const GetServiceIdentityResponse_IdentityStateSDKType = GetServiceIdentityResponse_IdentityState;
export function getServiceIdentityResponse_IdentityStateFromJSON(object: any): GetServiceIdentityResponse_IdentityState {
  switch (object) {
    case 0:
    case "IDENTITY_STATE_UNSPECIFIED":
      return GetServiceIdentityResponse_IdentityState.IDENTITY_STATE_UNSPECIFIED;
    case 1:
    case "ACTIVE":
      return GetServiceIdentityResponse_IdentityState.ACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GetServiceIdentityResponse_IdentityState.UNRECOGNIZED;
  }
}
export function getServiceIdentityResponse_IdentityStateToJSON(object: GetServiceIdentityResponse_IdentityState): string {
  switch (object) {
    case GetServiceIdentityResponse_IdentityState.IDENTITY_STATE_UNSPECIFIED:
      return "IDENTITY_STATE_UNSPECIFIED";
    case GetServiceIdentityResponse_IdentityState.ACTIVE:
      return "ACTIVE";
    case GetServiceIdentityResponse_IdentityState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Request message for the `EnableService` method. */
export interface EnableServiceRequest {
  /**
   * Name of the consumer and service to enable the service on.
   * 
   * The `EnableService` and `DisableService` methods currently only support
   * projects.
   * 
   * Enabling a service requires that the service is public or is shared with
   * the user enabling the service.
   * 
   * An example name would be:
   * `projects/123/services/serviceusage.googleapis.com`
   * where `123` is the project number (not project ID).
   */
  name: string;
}
export interface ReactiveEnableServiceRequest {
  name: ComputedRef<string>;
}
export interface EnableServiceRequestProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.EnableServiceRequest";
  value: Uint8Array;
}
/** Request message for the `EnableService` method. */
export interface EnableServiceRequestSDKType {
  name: string;
}
/** Request message for the `DisableService` method. */
export interface DisableServiceRequest {
  /**
   * Name of the consumer and service to disable the service on.
   * 
   * The enable and disable methods currently only support projects.
   * 
   * An example name would be:
   * `projects/123/services/serviceusage.googleapis.com`
   * where `123` is the project number (not project ID).
   */
  name: string;
}
export interface ReactiveDisableServiceRequest {
  name: ComputedRef<string>;
}
export interface DisableServiceRequestProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.DisableServiceRequest";
  value: Uint8Array;
}
/** Request message for the `DisableService` method. */
export interface DisableServiceRequestSDKType {
  name: string;
}
/** Request message for the `GetService` method. */
export interface GetServiceRequest {
  /**
   * Name of the consumer and service to get the `ConsumerState` for.
   * 
   * An example name would be:
   * `projects/123/services/serviceusage.googleapis.com`
   * where `123` is the project number (not project ID).
   */
  name: string;
}
export interface ReactiveGetServiceRequest {
  name: ComputedRef<string>;
}
export interface GetServiceRequestProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.GetServiceRequest";
  value: Uint8Array;
}
/** Request message for the `GetService` method. */
export interface GetServiceRequestSDKType {
  name: string;
}
/** Request message for the `ListServices` method. */
export interface ListServicesRequest {
  /**
   * Parent to search for services on.
   * 
   * An example name would be:
   * `projects/123`
   * where `123` is the project number (not project ID).
   */
  parent: string;
  /**
   * Requested size of the next page of data.
   * Requested page size cannot exceed 200.
   *  If not set, the default page size is 50.
   */
  pageSize: number;
  /**
   * Token identifying which result to start with, which is returned by a
   * previous list call.
   */
  pageToken: string;
  /**
   * Only list services that conform to the given filter.
   * The allowed filter strings are `state:ENABLED` and `state:DISABLED`.
   */
  filter: string;
}
export interface ReactiveListServicesRequest {
  parent: ComputedRef<string>;
  pageSize: ComputedRef<number>;
  pageToken: ComputedRef<string>;
  filter: ComputedRef<string>;
}
export interface ListServicesRequestProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.ListServicesRequest";
  value: Uint8Array;
}
/** Request message for the `ListServices` method. */
export interface ListServicesRequestSDKType {
  parent: string;
  page_size: number;
  page_token: string;
  filter: string;
}
/** Response message for the `ListServices` method. */
export interface ListServicesResponse {
  /** The available services for the requested project. */
  services: Service[];
  /**
   * Token that can be passed to `ListServices` to resume a paginated
   * query.
   */
  nextPageToken: string;
}
export interface ReactiveListServicesResponse {
  services: ComputedRef<Service[]>;
  nextPageToken: ComputedRef<string>;
}
export interface ListServicesResponseProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.ListServicesResponse";
  value: Uint8Array;
}
/** Response message for the `ListServices` method. */
export interface ListServicesResponseSDKType {
  services: ServiceSDKType[];
  next_page_token: string;
}
/** Request message for the `BatchEnableServices` method. */
export interface BatchEnableServicesRequest {
  /**
   * Parent to enable services on.
   * 
   * An example name would be:
   * `projects/123`
   * where `123` is the project number (not project ID).
   * 
   * The `BatchEnableServices` method currently only supports projects.
   */
  parent: string;
  /**
   * The identifiers of the services to enable on the project.
   * 
   * A valid identifier would be:
   * serviceusage.googleapis.com
   * 
   * Enabling services requires that each service is public or is shared with
   * the user enabling the service.
   * 
   * Two or more services must be specified. To enable a single service,
   * use the `EnableService` method instead.
   * 
   * A single request can enable a maximum of 20 services at a time. If more
   * than 20 services are specified, the request will fail, and no state changes
   * will occur.
   */
  serviceIds: string[];
}
export interface ReactiveBatchEnableServicesRequest {
  parent: ComputedRef<string>;
  serviceIds: ComputedRef<string[]>;
}
export interface BatchEnableServicesRequestProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.BatchEnableServicesRequest";
  value: Uint8Array;
}
/** Request message for the `BatchEnableServices` method. */
export interface BatchEnableServicesRequestSDKType {
  parent: string;
  service_ids: string[];
}
/** Request message for ListConsumerQuotaMetrics */
export interface ListConsumerQuotaMetricsRequest {
  /**
   * Parent of the quotas resource.
   * 
   * Some example names would be:
   * `projects/123/services/serviceconsumermanagement.googleapis.com`
   * `folders/345/services/serviceconsumermanagement.googleapis.com`
   * `organizations/456/services/serviceconsumermanagement.googleapis.com`
   */
  parent: string;
  /** Requested size of the next page of data. */
  pageSize: number;
  /**
   * Token identifying which result to start with; returned by a previous list
   * call.
   */
  pageToken: string;
  /** Specifies the level of detail for quota information in the response. */
  view: QuotaView;
}
export interface ReactiveListConsumerQuotaMetricsRequest {
  parent: ComputedRef<string>;
  pageSize: ComputedRef<number>;
  pageToken: ComputedRef<string>;
  view: ComputedRef<QuotaView>;
}
export interface ListConsumerQuotaMetricsRequestProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.ListConsumerQuotaMetricsRequest";
  value: Uint8Array;
}
/** Request message for ListConsumerQuotaMetrics */
export interface ListConsumerQuotaMetricsRequestSDKType {
  parent: string;
  page_size: number;
  page_token: string;
  view: QuotaView;
}
/** Response message for ListConsumerQuotaMetrics */
export interface ListConsumerQuotaMetricsResponse {
  /** Quota settings for the consumer, organized by quota metric. */
  metrics: ConsumerQuotaMetric[];
  /**
   * Token identifying which result to start with; returned by a previous list
   * call.
   */
  nextPageToken: string;
}
export interface ReactiveListConsumerQuotaMetricsResponse {
  metrics: ComputedRef<ConsumerQuotaMetric[]>;
  nextPageToken: ComputedRef<string>;
}
export interface ListConsumerQuotaMetricsResponseProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.ListConsumerQuotaMetricsResponse";
  value: Uint8Array;
}
/** Response message for ListConsumerQuotaMetrics */
export interface ListConsumerQuotaMetricsResponseSDKType {
  metrics: ConsumerQuotaMetricSDKType[];
  next_page_token: string;
}
/** Request message for GetConsumerQuotaMetric */
export interface GetConsumerQuotaMetricRequest {
  /**
   * The resource name of the quota limit.
   * 
   * An example name would be:
   * `projects/123/services/serviceusage.googleapis.com/quotas/metrics/serviceusage.googleapis.com%2Fmutate_requests`
   */
  name: string;
  /** Specifies the level of detail for quota information in the response. */
  view: QuotaView;
}
export interface ReactiveGetConsumerQuotaMetricRequest {
  name: ComputedRef<string>;
  view: ComputedRef<QuotaView>;
}
export interface GetConsumerQuotaMetricRequestProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.GetConsumerQuotaMetricRequest";
  value: Uint8Array;
}
/** Request message for GetConsumerQuotaMetric */
export interface GetConsumerQuotaMetricRequestSDKType {
  name: string;
  view: QuotaView;
}
/** Request message for GetConsumerQuotaLimit */
export interface GetConsumerQuotaLimitRequest {
  /**
   * The resource name of the quota limit.
   * 
   * Use the quota limit resource name returned by previous
   * ListConsumerQuotaMetrics and GetConsumerQuotaMetric API calls.
   */
  name: string;
  /** Specifies the level of detail for quota information in the response. */
  view: QuotaView;
}
export interface ReactiveGetConsumerQuotaLimitRequest {
  name: ComputedRef<string>;
  view: ComputedRef<QuotaView>;
}
export interface GetConsumerQuotaLimitRequestProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.GetConsumerQuotaLimitRequest";
  value: Uint8Array;
}
/** Request message for GetConsumerQuotaLimit */
export interface GetConsumerQuotaLimitRequestSDKType {
  name: string;
  view: QuotaView;
}
/** Request message for CreateAdminOverride. */
export interface CreateAdminOverrideRequest {
  /**
   * The resource name of the parent quota limit, returned by a
   * ListConsumerQuotaMetrics or GetConsumerQuotaMetric call.
   * 
   * An example name would be:
   * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
   */
  parent: string;
  /** The admin override to create. */
  override?: QuotaOverride;
  /**
   * Whether to force the creation of the quota override.
   * Setting the force parameter to 'true' ignores all quota safety checks that
   * would fail the request. QuotaSafetyCheck lists all such validations.
   */
  force: boolean;
  /**
   * The list of quota safety checks to ignore before the override mutation.
   * Unlike 'force' field that ignores all the quota safety checks, the
   * 'force_only' field ignores only the specified checks; other checks are
   * still enforced. The 'force' and 'force_only' fields cannot both be set.
   */
  forceOnly: QuotaSafetyCheck[];
}
export interface ReactiveCreateAdminOverrideRequest {
  parent: ComputedRef<string>;
  override?: ComputedRef<QuotaOverride>;
  force: ComputedRef<boolean>;
  forceOnly: ComputedRef<QuotaSafetyCheck[]>;
}
export interface CreateAdminOverrideRequestProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.CreateAdminOverrideRequest";
  value: Uint8Array;
}
/** Request message for CreateAdminOverride. */
export interface CreateAdminOverrideRequestSDKType {
  parent: string;
  override?: QuotaOverrideSDKType;
  force: boolean;
  force_only: QuotaSafetyCheck[];
}
/** Request message for UpdateAdminOverride. */
export interface UpdateAdminOverrideRequest {
  /**
   * The resource name of the override to update.
   * 
   * An example name would be:
   * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/adminOverrides/4a3f2c1d`
   */
  name: string;
  /**
   * The new override.
   * Only the override_value is updated; all other fields are ignored.
   */
  override?: QuotaOverride;
  /**
   * Whether to force the update of the quota override.
   * Setting the force parameter to 'true' ignores all quota safety checks that
   * would fail the request. QuotaSafetyCheck lists all such validations.
   */
  force: boolean;
  /**
   * Update only the specified fields of the override.
   * If unset, all fields will be updated.
   */
  updateMask?: FieldMask;
  /**
   * The list of quota safety checks to ignore before the override mutation.
   * Unlike 'force' field that ignores all the quota safety checks, the
   * 'force_only' field ignores only the specified checks; other checks are
   * still enforced. The 'force' and 'force_only' fields cannot both be set.
   */
  forceOnly: QuotaSafetyCheck[];
}
export interface ReactiveUpdateAdminOverrideRequest {
  name: ComputedRef<string>;
  override?: ComputedRef<QuotaOverride>;
  force: ComputedRef<boolean>;
  updateMask?: ComputedRef<FieldMask>;
  forceOnly: ComputedRef<QuotaSafetyCheck[]>;
}
export interface UpdateAdminOverrideRequestProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.UpdateAdminOverrideRequest";
  value: Uint8Array;
}
/** Request message for UpdateAdminOverride. */
export interface UpdateAdminOverrideRequestSDKType {
  name: string;
  override?: QuotaOverrideSDKType;
  force: boolean;
  update_mask?: FieldMaskSDKType;
  force_only: QuotaSafetyCheck[];
}
/** Request message for DeleteAdminOverride. */
export interface DeleteAdminOverrideRequest {
  /**
   * The resource name of the override to delete.
   * 
   * An example name would be:
   * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/adminOverrides/4a3f2c1d`
   */
  name: string;
  /**
   * Whether to force the deletion of the quota override.
   * Setting the force parameter to 'true' ignores all quota safety checks that
   * would fail the request. QuotaSafetyCheck lists all such validations.
   */
  force: boolean;
  /**
   * The list of quota safety checks to ignore before the override mutation.
   * Unlike 'force' field that ignores all the quota safety checks, the
   * 'force_only' field ignores only the specified checks; other checks are
   * still enforced. The 'force' and 'force_only' fields cannot both be set.
   */
  forceOnly: QuotaSafetyCheck[];
}
export interface ReactiveDeleteAdminOverrideRequest {
  name: ComputedRef<string>;
  force: ComputedRef<boolean>;
  forceOnly: ComputedRef<QuotaSafetyCheck[]>;
}
export interface DeleteAdminOverrideRequestProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.DeleteAdminOverrideRequest";
  value: Uint8Array;
}
/** Request message for DeleteAdminOverride. */
export interface DeleteAdminOverrideRequestSDKType {
  name: string;
  force: boolean;
  force_only: QuotaSafetyCheck[];
}
/** Request message for ListAdminOverrides */
export interface ListAdminOverridesRequest {
  /**
   * The resource name of the parent quota limit, returned by a
   * ListConsumerQuotaMetrics or GetConsumerQuotaMetric call.
   * 
   * An example name would be:
   * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
   */
  parent: string;
  /** Requested size of the next page of data. */
  pageSize: number;
  /**
   * Token identifying which result to start with; returned by a previous list
   * call.
   */
  pageToken: string;
}
export interface ReactiveListAdminOverridesRequest {
  parent: ComputedRef<string>;
  pageSize: ComputedRef<number>;
  pageToken: ComputedRef<string>;
}
export interface ListAdminOverridesRequestProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.ListAdminOverridesRequest";
  value: Uint8Array;
}
/** Request message for ListAdminOverrides */
export interface ListAdminOverridesRequestSDKType {
  parent: string;
  page_size: number;
  page_token: string;
}
/** Response message for ListAdminOverrides. */
export interface ListAdminOverridesResponse {
  /** Admin overrides on this limit. */
  overrides: QuotaOverride[];
  /**
   * Token identifying which result to start with; returned by a previous list
   * call.
   */
  nextPageToken: string;
}
export interface ReactiveListAdminOverridesResponse {
  overrides: ComputedRef<QuotaOverride[]>;
  nextPageToken: ComputedRef<string>;
}
export interface ListAdminOverridesResponseProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.ListAdminOverridesResponse";
  value: Uint8Array;
}
/** Response message for ListAdminOverrides. */
export interface ListAdminOverridesResponseSDKType {
  overrides: QuotaOverrideSDKType[];
  next_page_token: string;
}
/** Response message for BatchCreateAdminOverrides */
export interface BatchCreateAdminOverridesResponse {
  /** The overrides that were created. */
  overrides: QuotaOverride[];
}
export interface ReactiveBatchCreateAdminOverridesResponse {
  overrides: ComputedRef<QuotaOverride[]>;
}
export interface BatchCreateAdminOverridesResponseProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.BatchCreateAdminOverridesResponse";
  value: Uint8Array;
}
/** Response message for BatchCreateAdminOverrides */
export interface BatchCreateAdminOverridesResponseSDKType {
  overrides: QuotaOverrideSDKType[];
}
/** Request message for ImportAdminOverrides */
export interface ImportAdminOverridesRequest {
  /**
   * The resource name of the consumer.
   * 
   * An example name would be:
   * `projects/123/services/compute.googleapis.com`
   */
  parent: string;
  /** The import data is specified in the request message itself */
  inlineSource?: OverrideInlineSource;
  /**
   * Whether to force the creation of the quota overrides.
   * Setting the force parameter to 'true' ignores all quota safety checks that
   * would fail the request. QuotaSafetyCheck lists all such validations.
   */
  force: boolean;
  /**
   * The list of quota safety checks to ignore before the override mutation.
   * Unlike 'force' field that ignores all the quota safety checks, the
   * 'force_only' field ignores only the specified checks; other checks are
   * still enforced. The 'force' and 'force_only' fields cannot both be set.
   */
  forceOnly: QuotaSafetyCheck[];
}
export interface ReactiveImportAdminOverridesRequest {
  parent: ComputedRef<string>;
  inlineSource?: ComputedRef<OverrideInlineSource>;
  force: ComputedRef<boolean>;
  forceOnly: ComputedRef<QuotaSafetyCheck[]>;
}
export interface ImportAdminOverridesRequestProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.ImportAdminOverridesRequest";
  value: Uint8Array;
}
/** Request message for ImportAdminOverrides */
export interface ImportAdminOverridesRequestSDKType {
  parent: string;
  inline_source?: OverrideInlineSourceSDKType;
  force: boolean;
  force_only: QuotaSafetyCheck[];
}
/** Response message for ImportAdminOverrides */
export interface ImportAdminOverridesResponse {
  /** The overrides that were created from the imported data. */
  overrides: QuotaOverride[];
}
export interface ReactiveImportAdminOverridesResponse {
  overrides: ComputedRef<QuotaOverride[]>;
}
export interface ImportAdminOverridesResponseProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.ImportAdminOverridesResponse";
  value: Uint8Array;
}
/** Response message for ImportAdminOverrides */
export interface ImportAdminOverridesResponseSDKType {
  overrides: QuotaOverrideSDKType[];
}
/**
 * Metadata message that provides information such as progress,
 * partial failures, and similar information on each GetOperation call
 * of LRO returned by ImportAdminOverrides.
 */
export interface ImportAdminOverridesMetadata {}
export interface ReactiveImportAdminOverridesMetadata {}
export interface ImportAdminOverridesMetadataProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.ImportAdminOverridesMetadata";
  value: Uint8Array;
}
/**
 * Metadata message that provides information such as progress,
 * partial failures, and similar information on each GetOperation call
 * of LRO returned by ImportAdminOverrides.
 */
export interface ImportAdminOverridesMetadataSDKType {}
/** Request message for CreateConsumerOverride. */
export interface CreateConsumerOverrideRequest {
  /**
   * The resource name of the parent quota limit, returned by a
   * ListConsumerQuotaMetrics or GetConsumerQuotaMetric call.
   * 
   * An example name would be:
   * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
   */
  parent: string;
  /** The override to create. */
  override?: QuotaOverride;
  /**
   * Whether to force the creation of the quota override.
   * Setting the force parameter to 'true' ignores all quota safety checks that
   * would fail the request. QuotaSafetyCheck lists all such validations.
   */
  force: boolean;
  /**
   * The list of quota safety checks to ignore before the override mutation.
   * Unlike 'force' field that ignores all the quota safety checks, the
   * 'force_only' field ignores only the specified checks; other checks are
   * still enforced. The 'force' and 'force_only' fields cannot both be set.
   */
  forceOnly: QuotaSafetyCheck[];
}
export interface ReactiveCreateConsumerOverrideRequest {
  parent: ComputedRef<string>;
  override?: ComputedRef<QuotaOverride>;
  force: ComputedRef<boolean>;
  forceOnly: ComputedRef<QuotaSafetyCheck[]>;
}
export interface CreateConsumerOverrideRequestProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.CreateConsumerOverrideRequest";
  value: Uint8Array;
}
/** Request message for CreateConsumerOverride. */
export interface CreateConsumerOverrideRequestSDKType {
  parent: string;
  override?: QuotaOverrideSDKType;
  force: boolean;
  force_only: QuotaSafetyCheck[];
}
/** Request message for UpdateConsumerOverride. */
export interface UpdateConsumerOverrideRequest {
  /**
   * The resource name of the override to update.
   * 
   * An example name would be:
   * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/consumerOverrides/4a3f2c1d`
   */
  name: string;
  /**
   * The new override.
   * Only the override_value is updated; all other fields are ignored.
   */
  override?: QuotaOverride;
  /**
   * Whether to force the update of the quota override.
   * Setting the force parameter to 'true' ignores all quota safety checks that
   * would fail the request. QuotaSafetyCheck lists all such validations.
   */
  force: boolean;
  /**
   * Update only the specified fields of the override.
   * If unset, all fields will be updated.
   */
  updateMask?: FieldMask;
  /**
   * The list of quota safety checks to ignore before the override mutation.
   * Unlike 'force' field that ignores all the quota safety checks, the
   * 'force_only' field ignores only the specified checks; other checks are
   * still enforced. The 'force' and 'force_only' fields cannot both be set.
   */
  forceOnly: QuotaSafetyCheck[];
}
export interface ReactiveUpdateConsumerOverrideRequest {
  name: ComputedRef<string>;
  override?: ComputedRef<QuotaOverride>;
  force: ComputedRef<boolean>;
  updateMask?: ComputedRef<FieldMask>;
  forceOnly: ComputedRef<QuotaSafetyCheck[]>;
}
export interface UpdateConsumerOverrideRequestProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.UpdateConsumerOverrideRequest";
  value: Uint8Array;
}
/** Request message for UpdateConsumerOverride. */
export interface UpdateConsumerOverrideRequestSDKType {
  name: string;
  override?: QuotaOverrideSDKType;
  force: boolean;
  update_mask?: FieldMaskSDKType;
  force_only: QuotaSafetyCheck[];
}
/** Request message for DeleteConsumerOverride. */
export interface DeleteConsumerOverrideRequest {
  /**
   * The resource name of the override to delete.
   * 
   * An example name would be:
   * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/consumerOverrides/4a3f2c1d`
   */
  name: string;
  /**
   * Whether to force the deletion of the quota override.
   * Setting the force parameter to 'true' ignores all quota safety checks that
   * would fail the request. QuotaSafetyCheck lists all such validations.
   */
  force: boolean;
  /**
   * The list of quota safety checks to ignore before the override mutation.
   * Unlike 'force' field that ignores all the quota safety checks, the
   * 'force_only' field ignores only the specified checks; other checks are
   * still enforced. The 'force' and 'force_only' fields cannot both be set.
   */
  forceOnly: QuotaSafetyCheck[];
}
export interface ReactiveDeleteConsumerOverrideRequest {
  name: ComputedRef<string>;
  force: ComputedRef<boolean>;
  forceOnly: ComputedRef<QuotaSafetyCheck[]>;
}
export interface DeleteConsumerOverrideRequestProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.DeleteConsumerOverrideRequest";
  value: Uint8Array;
}
/** Request message for DeleteConsumerOverride. */
export interface DeleteConsumerOverrideRequestSDKType {
  name: string;
  force: boolean;
  force_only: QuotaSafetyCheck[];
}
/** Request message for ListConsumerOverrides */
export interface ListConsumerOverridesRequest {
  /**
   * The resource name of the parent quota limit, returned by a
   * ListConsumerQuotaMetrics or GetConsumerQuotaMetric call.
   * 
   * An example name would be:
   * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
   */
  parent: string;
  /** Requested size of the next page of data. */
  pageSize: number;
  /**
   * Token identifying which result to start with; returned by a previous list
   * call.
   */
  pageToken: string;
}
export interface ReactiveListConsumerOverridesRequest {
  parent: ComputedRef<string>;
  pageSize: ComputedRef<number>;
  pageToken: ComputedRef<string>;
}
export interface ListConsumerOverridesRequestProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.ListConsumerOverridesRequest";
  value: Uint8Array;
}
/** Request message for ListConsumerOverrides */
export interface ListConsumerOverridesRequestSDKType {
  parent: string;
  page_size: number;
  page_token: string;
}
/** Response message for ListConsumerOverrides. */
export interface ListConsumerOverridesResponse {
  /** Consumer overrides on this limit. */
  overrides: QuotaOverride[];
  /**
   * Token identifying which result to start with; returned by a previous list
   * call.
   */
  nextPageToken: string;
}
export interface ReactiveListConsumerOverridesResponse {
  overrides: ComputedRef<QuotaOverride[]>;
  nextPageToken: ComputedRef<string>;
}
export interface ListConsumerOverridesResponseProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.ListConsumerOverridesResponse";
  value: Uint8Array;
}
/** Response message for ListConsumerOverrides. */
export interface ListConsumerOverridesResponseSDKType {
  overrides: QuotaOverrideSDKType[];
  next_page_token: string;
}
/** Response message for BatchCreateConsumerOverrides */
export interface BatchCreateConsumerOverridesResponse {
  /** The overrides that were created. */
  overrides: QuotaOverride[];
}
export interface ReactiveBatchCreateConsumerOverridesResponse {
  overrides: ComputedRef<QuotaOverride[]>;
}
export interface BatchCreateConsumerOverridesResponseProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.BatchCreateConsumerOverridesResponse";
  value: Uint8Array;
}
/** Response message for BatchCreateConsumerOverrides */
export interface BatchCreateConsumerOverridesResponseSDKType {
  overrides: QuotaOverrideSDKType[];
}
/** Request message for ImportConsumerOverrides */
export interface ImportConsumerOverridesRequest {
  /**
   * The resource name of the consumer.
   * 
   * An example name would be:
   * `projects/123/services/compute.googleapis.com`
   */
  parent: string;
  /** The import data is specified in the request message itself */
  inlineSource?: OverrideInlineSource;
  /**
   * Whether to force the creation of the quota overrides.
   * Setting the force parameter to 'true' ignores all quota safety checks that
   * would fail the request. QuotaSafetyCheck lists all such validations.
   */
  force: boolean;
  /**
   * The list of quota safety checks to ignore before the override mutation.
   * Unlike 'force' field that ignores all the quota safety checks, the
   * 'force_only' field ignores only the specified checks; other checks are
   * still enforced. The 'force' and 'force_only' fields cannot both be set.
   */
  forceOnly: QuotaSafetyCheck[];
}
export interface ReactiveImportConsumerOverridesRequest {
  parent: ComputedRef<string>;
  inlineSource?: ComputedRef<OverrideInlineSource>;
  force: ComputedRef<boolean>;
  forceOnly: ComputedRef<QuotaSafetyCheck[]>;
}
export interface ImportConsumerOverridesRequestProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.ImportConsumerOverridesRequest";
  value: Uint8Array;
}
/** Request message for ImportConsumerOverrides */
export interface ImportConsumerOverridesRequestSDKType {
  parent: string;
  inline_source?: OverrideInlineSourceSDKType;
  force: boolean;
  force_only: QuotaSafetyCheck[];
}
/** Response message for ImportConsumerOverrides */
export interface ImportConsumerOverridesResponse {
  /** The overrides that were created from the imported data. */
  overrides: QuotaOverride[];
}
export interface ReactiveImportConsumerOverridesResponse {
  overrides: ComputedRef<QuotaOverride[]>;
}
export interface ImportConsumerOverridesResponseProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.ImportConsumerOverridesResponse";
  value: Uint8Array;
}
/** Response message for ImportConsumerOverrides */
export interface ImportConsumerOverridesResponseSDKType {
  overrides: QuotaOverrideSDKType[];
}
/**
 * Metadata message that provides information such as progress,
 * partial failures, and similar information on each GetOperation call
 * of LRO returned by ImportConsumerOverrides.
 */
export interface ImportConsumerOverridesMetadata {}
export interface ReactiveImportConsumerOverridesMetadata {}
export interface ImportConsumerOverridesMetadataProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.ImportConsumerOverridesMetadata";
  value: Uint8Array;
}
/**
 * Metadata message that provides information such as progress,
 * partial failures, and similar information on each GetOperation call
 * of LRO returned by ImportConsumerOverrides.
 */
export interface ImportConsumerOverridesMetadataSDKType {}
/** Response message for ImportAdminQuotaPolicies */
export interface ImportAdminQuotaPoliciesResponse {
  /** The policies that were created from the imported data. */
  policies: AdminQuotaPolicy[];
}
export interface ReactiveImportAdminQuotaPoliciesResponse {
  policies: ComputedRef<AdminQuotaPolicy[]>;
}
export interface ImportAdminQuotaPoliciesResponseProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.ImportAdminQuotaPoliciesResponse";
  value: Uint8Array;
}
/** Response message for ImportAdminQuotaPolicies */
export interface ImportAdminQuotaPoliciesResponseSDKType {
  policies: AdminQuotaPolicySDKType[];
}
/**
 * Metadata message that provides information such as progress,
 * partial failures, and similar information on each GetOperation call
 * of LRO returned by ImportAdminQuotaPolicies.
 */
export interface ImportAdminQuotaPoliciesMetadata {}
export interface ReactiveImportAdminQuotaPoliciesMetadata {}
export interface ImportAdminQuotaPoliciesMetadataProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.ImportAdminQuotaPoliciesMetadata";
  value: Uint8Array;
}
/**
 * Metadata message that provides information such as progress,
 * partial failures, and similar information on each GetOperation call
 * of LRO returned by ImportAdminQuotaPolicies.
 */
export interface ImportAdminQuotaPoliciesMetadataSDKType {}
/**
 * Metadata message that provides information such as progress,
 * partial failures, and similar information on each GetOperation call
 * of LRO returned by CreateAdminQuotaPolicy.
 */
export interface CreateAdminQuotaPolicyMetadata {}
export interface ReactiveCreateAdminQuotaPolicyMetadata {}
export interface CreateAdminQuotaPolicyMetadataProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.CreateAdminQuotaPolicyMetadata";
  value: Uint8Array;
}
/**
 * Metadata message that provides information such as progress,
 * partial failures, and similar information on each GetOperation call
 * of LRO returned by CreateAdminQuotaPolicy.
 */
export interface CreateAdminQuotaPolicyMetadataSDKType {}
/**
 * Metadata message that provides information such as progress,
 * partial failures, and similar information on each GetOperation call
 * of LRO returned by UpdateAdminQuotaPolicy.
 */
export interface UpdateAdminQuotaPolicyMetadata {}
export interface ReactiveUpdateAdminQuotaPolicyMetadata {}
export interface UpdateAdminQuotaPolicyMetadataProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.UpdateAdminQuotaPolicyMetadata";
  value: Uint8Array;
}
/**
 * Metadata message that provides information such as progress,
 * partial failures, and similar information on each GetOperation call
 * of LRO returned by UpdateAdminQuotaPolicy.
 */
export interface UpdateAdminQuotaPolicyMetadataSDKType {}
/**
 * Metadata message that provides information such as progress,
 * partial failures, and similar information on each GetOperation call
 * of LRO returned by DeleteAdminQuotaPolicy.
 */
export interface DeleteAdminQuotaPolicyMetadata {}
export interface ReactiveDeleteAdminQuotaPolicyMetadata {}
export interface DeleteAdminQuotaPolicyMetadataProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.DeleteAdminQuotaPolicyMetadata";
  value: Uint8Array;
}
/**
 * Metadata message that provides information such as progress,
 * partial failures, and similar information on each GetOperation call
 * of LRO returned by DeleteAdminQuotaPolicy.
 */
export interface DeleteAdminQuotaPolicyMetadataSDKType {}
/** Request message for generating service identity. */
export interface GenerateServiceIdentityRequest {
  /**
   * Name of the consumer and service to generate an identity for.
   * 
   * The `GenerateServiceIdentity` methods currently only support projects.
   * 
   * An example name would be:
   * `projects/123/services/example.googleapis.com` where `123` is the
   * project number.
   */
  parent: string;
}
export interface ReactiveGenerateServiceIdentityRequest {
  parent: ComputedRef<string>;
}
export interface GenerateServiceIdentityRequestProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.GenerateServiceIdentityRequest";
  value: Uint8Array;
}
/** Request message for generating service identity. */
export interface GenerateServiceIdentityRequestSDKType {
  parent: string;
}
/** Response message for getting service identity. */
export interface GetServiceIdentityResponse {
  /**
   * Service identity that service producer can use to access consumer
   * resources. If exists is true, it contains email and unique_id. If exists is
   * false, it contains pre-constructed email and empty unique_id.
   */
  identity?: ServiceIdentity;
  /** Service identity state. */
  state: GetServiceIdentityResponse_IdentityState;
}
export interface ReactiveGetServiceIdentityResponse {
  identity?: ComputedRef<ServiceIdentity>;
  state: ComputedRef<GetServiceIdentityResponse_IdentityState>;
}
export interface GetServiceIdentityResponseProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.GetServiceIdentityResponse";
  value: Uint8Array;
}
/** Response message for getting service identity. */
export interface GetServiceIdentityResponseSDKType {
  identity?: ServiceIdentitySDKType;
  state: GetServiceIdentityResponse_IdentityState;
}
/** Metadata for the `GetServiceIdentity` method. */
export interface GetServiceIdentityMetadata {}
export interface ReactiveGetServiceIdentityMetadata {}
export interface GetServiceIdentityMetadataProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.GetServiceIdentityMetadata";
  value: Uint8Array;
}
/** Metadata for the `GetServiceIdentity` method. */
export interface GetServiceIdentityMetadataSDKType {}
function createBaseEnableServiceRequest(): EnableServiceRequest {
  return {
    name: ""
  };
}
export const EnableServiceRequest = {
  typeUrl: "/google.api.serviceusage.v1beta1.EnableServiceRequest",
  encode(message: EnableServiceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EnableServiceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnableServiceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EnableServiceRequest {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toJSON(message: EnableServiceRequest): JsonSafe<EnableServiceRequest> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial(object: DeepPartial<EnableServiceRequest>): EnableServiceRequest {
    const message = createBaseEnableServiceRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromSDK(object: EnableServiceRequestSDKType): EnableServiceRequest {
    return {
      name: object?.name
    };
  },
  fromSDKJSON(object: any): EnableServiceRequestSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toSDK(message: EnableServiceRequest): EnableServiceRequestSDKType {
    const obj: any = {};
    obj.name = message.name;
    return obj;
  },
  fromAmino(object: EnableServiceRequestAmino): EnableServiceRequest {
    const message = createBaseEnableServiceRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: EnableServiceRequest): EnableServiceRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: EnableServiceRequestAminoMsg): EnableServiceRequest {
    return EnableServiceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: EnableServiceRequestProtoMsg): EnableServiceRequest {
    return EnableServiceRequest.decode(message.value);
  },
  toProto(message: EnableServiceRequest): Uint8Array {
    return EnableServiceRequest.encode(message).finish();
  },
  toProtoMsg(message: EnableServiceRequest): EnableServiceRequestProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.EnableServiceRequest",
      value: EnableServiceRequest.encode(message).finish()
    };
  }
};
function createBaseDisableServiceRequest(): DisableServiceRequest {
  return {
    name: ""
  };
}
export const DisableServiceRequest = {
  typeUrl: "/google.api.serviceusage.v1beta1.DisableServiceRequest",
  encode(message: DisableServiceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DisableServiceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisableServiceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DisableServiceRequest {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toJSON(message: DisableServiceRequest): JsonSafe<DisableServiceRequest> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial(object: DeepPartial<DisableServiceRequest>): DisableServiceRequest {
    const message = createBaseDisableServiceRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromSDK(object: DisableServiceRequestSDKType): DisableServiceRequest {
    return {
      name: object?.name
    };
  },
  fromSDKJSON(object: any): DisableServiceRequestSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toSDK(message: DisableServiceRequest): DisableServiceRequestSDKType {
    const obj: any = {};
    obj.name = message.name;
    return obj;
  },
  fromAmino(object: DisableServiceRequestAmino): DisableServiceRequest {
    const message = createBaseDisableServiceRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: DisableServiceRequest): DisableServiceRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: DisableServiceRequestAminoMsg): DisableServiceRequest {
    return DisableServiceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: DisableServiceRequestProtoMsg): DisableServiceRequest {
    return DisableServiceRequest.decode(message.value);
  },
  toProto(message: DisableServiceRequest): Uint8Array {
    return DisableServiceRequest.encode(message).finish();
  },
  toProtoMsg(message: DisableServiceRequest): DisableServiceRequestProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.DisableServiceRequest",
      value: DisableServiceRequest.encode(message).finish()
    };
  }
};
function createBaseGetServiceRequest(): GetServiceRequest {
  return {
    name: ""
  };
}
export const GetServiceRequest = {
  typeUrl: "/google.api.serviceusage.v1beta1.GetServiceRequest",
  encode(message: GetServiceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetServiceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetServiceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetServiceRequest {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toJSON(message: GetServiceRequest): JsonSafe<GetServiceRequest> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial(object: DeepPartial<GetServiceRequest>): GetServiceRequest {
    const message = createBaseGetServiceRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromSDK(object: GetServiceRequestSDKType): GetServiceRequest {
    return {
      name: object?.name
    };
  },
  fromSDKJSON(object: any): GetServiceRequestSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toSDK(message: GetServiceRequest): GetServiceRequestSDKType {
    const obj: any = {};
    obj.name = message.name;
    return obj;
  },
  fromAmino(object: GetServiceRequestAmino): GetServiceRequest {
    const message = createBaseGetServiceRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: GetServiceRequest): GetServiceRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: GetServiceRequestAminoMsg): GetServiceRequest {
    return GetServiceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: GetServiceRequestProtoMsg): GetServiceRequest {
    return GetServiceRequest.decode(message.value);
  },
  toProto(message: GetServiceRequest): Uint8Array {
    return GetServiceRequest.encode(message).finish();
  },
  toProtoMsg(message: GetServiceRequest): GetServiceRequestProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.GetServiceRequest",
      value: GetServiceRequest.encode(message).finish()
    };
  }
};
function createBaseListServicesRequest(): ListServicesRequest {
  return {
    parent: "",
    pageSize: 0,
    pageToken: "",
    filter: ""
  };
}
export const ListServicesRequest = {
  typeUrl: "/google.api.serviceusage.v1beta1.ListServicesRequest",
  encode(message: ListServicesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(34).string(message.filter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListServicesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListServicesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.pageSize = reader.int32();
          break;
        case 3:
          message.pageToken = reader.string();
          break;
        case 4:
          message.filter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListServicesRequest {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? String(object.pageToken) : "",
      filter: isSet(object.filter) ? String(object.filter) : ""
    };
  },
  toJSON(message: ListServicesRequest): JsonSafe<ListServicesRequest> {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },
  fromPartial(object: DeepPartial<ListServicesRequest>): ListServicesRequest {
    const message = createBaseListServicesRequest();
    message.parent = object.parent ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
  fromSDK(object: ListServicesRequestSDKType): ListServicesRequest {
    return {
      parent: object?.parent,
      pageSize: object?.page_size,
      pageToken: object?.page_token,
      filter: object?.filter
    };
  },
  fromSDKJSON(object: any): ListServicesRequestSDKType {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      page_size: isSet(object.page_size) ? Number(object.page_size) : 0,
      page_token: isSet(object.page_token) ? String(object.page_token) : "",
      filter: isSet(object.filter) ? String(object.filter) : ""
    };
  },
  toSDK(message: ListServicesRequest): ListServicesRequestSDKType {
    const obj: any = {};
    obj.parent = message.parent;
    obj.page_size = message.pageSize;
    obj.page_token = message.pageToken;
    obj.filter = message.filter;
    return obj;
  },
  fromAmino(object: ListServicesRequestAmino): ListServicesRequest {
    const message = createBaseListServicesRequest();
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    }
    if (object.page_size !== undefined && object.page_size !== null) {
      message.pageSize = object.page_size;
    }
    if (object.page_token !== undefined && object.page_token !== null) {
      message.pageToken = object.page_token;
    }
    if (object.filter !== undefined && object.filter !== null) {
      message.filter = object.filter;
    }
    return message;
  },
  toAmino(message: ListServicesRequest): ListServicesRequestAmino {
    const obj: any = {};
    obj.parent = message.parent === "" ? undefined : message.parent;
    obj.page_size = message.pageSize === 0 ? undefined : message.pageSize;
    obj.page_token = message.pageToken === "" ? undefined : message.pageToken;
    obj.filter = message.filter === "" ? undefined : message.filter;
    return obj;
  },
  fromAminoMsg(object: ListServicesRequestAminoMsg): ListServicesRequest {
    return ListServicesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ListServicesRequestProtoMsg): ListServicesRequest {
    return ListServicesRequest.decode(message.value);
  },
  toProto(message: ListServicesRequest): Uint8Array {
    return ListServicesRequest.encode(message).finish();
  },
  toProtoMsg(message: ListServicesRequest): ListServicesRequestProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.ListServicesRequest",
      value: ListServicesRequest.encode(message).finish()
    };
  }
};
function createBaseListServicesResponse(): ListServicesResponse {
  return {
    services: [],
    nextPageToken: ""
  };
}
export const ListServicesResponse = {
  typeUrl: "/google.api.serviceusage.v1beta1.ListServicesResponse",
  encode(message: ListServicesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.services) {
      Service.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListServicesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListServicesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.services.push(Service.decode(reader, reader.uint32()));
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
  fromJSON(object: any): ListServicesResponse {
    return {
      services: Array.isArray(object?.services) ? object.services.map((e: any) => Service.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? String(object.nextPageToken) : ""
    };
  },
  toJSON(message: ListServicesResponse): JsonSafe<ListServicesResponse> {
    const obj: any = {};
    if (message.services) {
      obj.services = message.services.map(e => e ? Service.toJSON(e) : undefined);
    } else {
      obj.services = [];
    }
    message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
    return obj;
  },
  fromPartial(object: DeepPartial<ListServicesResponse>): ListServicesResponse {
    const message = createBaseListServicesResponse();
    message.services = object.services?.map(e => Service.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
  fromSDK(object: ListServicesResponseSDKType): ListServicesResponse {
    return {
      services: Array.isArray(object?.services) ? object.services.map((e: any) => Service.fromSDK(e)) : [],
      nextPageToken: object?.next_page_token
    };
  },
  fromSDKJSON(object: any): ListServicesResponseSDKType {
    return {
      services: Array.isArray(object?.services) ? object.services.map((e: any) => Service.fromSDKJSON(e)) : [],
      next_page_token: isSet(object.next_page_token) ? String(object.next_page_token) : ""
    };
  },
  toSDK(message: ListServicesResponse): ListServicesResponseSDKType {
    const obj: any = {};
    if (message.services) {
      obj.services = message.services.map(e => e ? Service.toSDK(e) : undefined);
    } else {
      obj.services = [];
    }
    obj.next_page_token = message.nextPageToken;
    return obj;
  },
  fromAmino(object: ListServicesResponseAmino): ListServicesResponse {
    const message = createBaseListServicesResponse();
    message.services = object.services?.map(e => Service.fromAmino(e)) || [];
    if (object.next_page_token !== undefined && object.next_page_token !== null) {
      message.nextPageToken = object.next_page_token;
    }
    return message;
  },
  toAmino(message: ListServicesResponse): ListServicesResponseAmino {
    const obj: any = {};
    if (message.services) {
      obj.services = message.services.map(e => e ? Service.toAmino(e) : undefined);
    } else {
      obj.services = message.services;
    }
    obj.next_page_token = message.nextPageToken === "" ? undefined : message.nextPageToken;
    return obj;
  },
  fromAminoMsg(object: ListServicesResponseAminoMsg): ListServicesResponse {
    return ListServicesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ListServicesResponseProtoMsg): ListServicesResponse {
    return ListServicesResponse.decode(message.value);
  },
  toProto(message: ListServicesResponse): Uint8Array {
    return ListServicesResponse.encode(message).finish();
  },
  toProtoMsg(message: ListServicesResponse): ListServicesResponseProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.ListServicesResponse",
      value: ListServicesResponse.encode(message).finish()
    };
  }
};
function createBaseBatchEnableServicesRequest(): BatchEnableServicesRequest {
  return {
    parent: "",
    serviceIds: []
  };
}
export const BatchEnableServicesRequest = {
  typeUrl: "/google.api.serviceusage.v1beta1.BatchEnableServicesRequest",
  encode(message: BatchEnableServicesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    for (const v of message.serviceIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BatchEnableServicesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchEnableServicesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.serviceIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BatchEnableServicesRequest {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      serviceIds: Array.isArray(object?.serviceIds) ? object.serviceIds.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: BatchEnableServicesRequest): JsonSafe<BatchEnableServicesRequest> {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    if (message.serviceIds) {
      obj.serviceIds = message.serviceIds.map(e => e);
    } else {
      obj.serviceIds = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<BatchEnableServicesRequest>): BatchEnableServicesRequest {
    const message = createBaseBatchEnableServicesRequest();
    message.parent = object.parent ?? "";
    message.serviceIds = object.serviceIds?.map(e => e) || [];
    return message;
  },
  fromSDK(object: BatchEnableServicesRequestSDKType): BatchEnableServicesRequest {
    return {
      parent: object?.parent,
      serviceIds: Array.isArray(object?.service_ids) ? object.service_ids.map((e: any) => e) : []
    };
  },
  fromSDKJSON(object: any): BatchEnableServicesRequestSDKType {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      service_ids: Array.isArray(object?.service_ids) ? object.service_ids.map((e: any) => String(e)) : []
    };
  },
  toSDK(message: BatchEnableServicesRequest): BatchEnableServicesRequestSDKType {
    const obj: any = {};
    obj.parent = message.parent;
    if (message.serviceIds) {
      obj.service_ids = message.serviceIds.map(e => e);
    } else {
      obj.service_ids = [];
    }
    return obj;
  },
  fromAmino(object: BatchEnableServicesRequestAmino): BatchEnableServicesRequest {
    const message = createBaseBatchEnableServicesRequest();
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    }
    message.serviceIds = object.service_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: BatchEnableServicesRequest): BatchEnableServicesRequestAmino {
    const obj: any = {};
    obj.parent = message.parent === "" ? undefined : message.parent;
    if (message.serviceIds) {
      obj.service_ids = message.serviceIds.map(e => e);
    } else {
      obj.service_ids = message.serviceIds;
    }
    return obj;
  },
  fromAminoMsg(object: BatchEnableServicesRequestAminoMsg): BatchEnableServicesRequest {
    return BatchEnableServicesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchEnableServicesRequestProtoMsg): BatchEnableServicesRequest {
    return BatchEnableServicesRequest.decode(message.value);
  },
  toProto(message: BatchEnableServicesRequest): Uint8Array {
    return BatchEnableServicesRequest.encode(message).finish();
  },
  toProtoMsg(message: BatchEnableServicesRequest): BatchEnableServicesRequestProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.BatchEnableServicesRequest",
      value: BatchEnableServicesRequest.encode(message).finish()
    };
  }
};
function createBaseListConsumerQuotaMetricsRequest(): ListConsumerQuotaMetricsRequest {
  return {
    parent: "",
    pageSize: 0,
    pageToken: "",
    view: 0
  };
}
export const ListConsumerQuotaMetricsRequest = {
  typeUrl: "/google.api.serviceusage.v1beta1.ListConsumerQuotaMetricsRequest",
  encode(message: ListConsumerQuotaMetricsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    if (message.view !== 0) {
      writer.uint32(32).int32(message.view);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListConsumerQuotaMetricsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListConsumerQuotaMetricsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.pageSize = reader.int32();
          break;
        case 3:
          message.pageToken = reader.string();
          break;
        case 4:
          message.view = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListConsumerQuotaMetricsRequest {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? String(object.pageToken) : "",
      view: isSet(object.view) ? quotaViewFromJSON(object.view) : -1
    };
  },
  toJSON(message: ListConsumerQuotaMetricsRequest): JsonSafe<ListConsumerQuotaMetricsRequest> {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.view !== undefined && (obj.view = quotaViewToJSON(message.view));
    return obj;
  },
  fromPartial(object: DeepPartial<ListConsumerQuotaMetricsRequest>): ListConsumerQuotaMetricsRequest {
    const message = createBaseListConsumerQuotaMetricsRequest();
    message.parent = object.parent ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.view = object.view ?? 0;
    return message;
  },
  fromSDK(object: ListConsumerQuotaMetricsRequestSDKType): ListConsumerQuotaMetricsRequest {
    return {
      parent: object?.parent,
      pageSize: object?.page_size,
      pageToken: object?.page_token,
      view: isSet(object.view) ? quotaViewFromJSON(object.view) : -1
    };
  },
  fromSDKJSON(object: any): ListConsumerQuotaMetricsRequestSDKType {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      page_size: isSet(object.page_size) ? Number(object.page_size) : 0,
      page_token: isSet(object.page_token) ? String(object.page_token) : "",
      view: isSet(object.view) ? quotaViewFromJSON(object.view) : -1
    };
  },
  toSDK(message: ListConsumerQuotaMetricsRequest): ListConsumerQuotaMetricsRequestSDKType {
    const obj: any = {};
    obj.parent = message.parent;
    obj.page_size = message.pageSize;
    obj.page_token = message.pageToken;
    message.view !== undefined && (obj.view = quotaViewToJSON(message.view));
    return obj;
  },
  fromAmino(object: ListConsumerQuotaMetricsRequestAmino): ListConsumerQuotaMetricsRequest {
    const message = createBaseListConsumerQuotaMetricsRequest();
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    }
    if (object.page_size !== undefined && object.page_size !== null) {
      message.pageSize = object.page_size;
    }
    if (object.page_token !== undefined && object.page_token !== null) {
      message.pageToken = object.page_token;
    }
    if (object.view !== undefined && object.view !== null) {
      message.view = object.view;
    }
    return message;
  },
  toAmino(message: ListConsumerQuotaMetricsRequest): ListConsumerQuotaMetricsRequestAmino {
    const obj: any = {};
    obj.parent = message.parent === "" ? undefined : message.parent;
    obj.page_size = message.pageSize === 0 ? undefined : message.pageSize;
    obj.page_token = message.pageToken === "" ? undefined : message.pageToken;
    obj.view = message.view === 0 ? undefined : message.view;
    return obj;
  },
  fromAminoMsg(object: ListConsumerQuotaMetricsRequestAminoMsg): ListConsumerQuotaMetricsRequest {
    return ListConsumerQuotaMetricsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ListConsumerQuotaMetricsRequestProtoMsg): ListConsumerQuotaMetricsRequest {
    return ListConsumerQuotaMetricsRequest.decode(message.value);
  },
  toProto(message: ListConsumerQuotaMetricsRequest): Uint8Array {
    return ListConsumerQuotaMetricsRequest.encode(message).finish();
  },
  toProtoMsg(message: ListConsumerQuotaMetricsRequest): ListConsumerQuotaMetricsRequestProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.ListConsumerQuotaMetricsRequest",
      value: ListConsumerQuotaMetricsRequest.encode(message).finish()
    };
  }
};
function createBaseListConsumerQuotaMetricsResponse(): ListConsumerQuotaMetricsResponse {
  return {
    metrics: [],
    nextPageToken: ""
  };
}
export const ListConsumerQuotaMetricsResponse = {
  typeUrl: "/google.api.serviceusage.v1beta1.ListConsumerQuotaMetricsResponse",
  encode(message: ListConsumerQuotaMetricsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.metrics) {
      ConsumerQuotaMetric.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListConsumerQuotaMetricsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListConsumerQuotaMetricsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metrics.push(ConsumerQuotaMetric.decode(reader, reader.uint32()));
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
  fromJSON(object: any): ListConsumerQuotaMetricsResponse {
    return {
      metrics: Array.isArray(object?.metrics) ? object.metrics.map((e: any) => ConsumerQuotaMetric.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? String(object.nextPageToken) : ""
    };
  },
  toJSON(message: ListConsumerQuotaMetricsResponse): JsonSafe<ListConsumerQuotaMetricsResponse> {
    const obj: any = {};
    if (message.metrics) {
      obj.metrics = message.metrics.map(e => e ? ConsumerQuotaMetric.toJSON(e) : undefined);
    } else {
      obj.metrics = [];
    }
    message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
    return obj;
  },
  fromPartial(object: DeepPartial<ListConsumerQuotaMetricsResponse>): ListConsumerQuotaMetricsResponse {
    const message = createBaseListConsumerQuotaMetricsResponse();
    message.metrics = object.metrics?.map(e => ConsumerQuotaMetric.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
  fromSDK(object: ListConsumerQuotaMetricsResponseSDKType): ListConsumerQuotaMetricsResponse {
    return {
      metrics: Array.isArray(object?.metrics) ? object.metrics.map((e: any) => ConsumerQuotaMetric.fromSDK(e)) : [],
      nextPageToken: object?.next_page_token
    };
  },
  fromSDKJSON(object: any): ListConsumerQuotaMetricsResponseSDKType {
    return {
      metrics: Array.isArray(object?.metrics) ? object.metrics.map((e: any) => ConsumerQuotaMetric.fromSDKJSON(e)) : [],
      next_page_token: isSet(object.next_page_token) ? String(object.next_page_token) : ""
    };
  },
  toSDK(message: ListConsumerQuotaMetricsResponse): ListConsumerQuotaMetricsResponseSDKType {
    const obj: any = {};
    if (message.metrics) {
      obj.metrics = message.metrics.map(e => e ? ConsumerQuotaMetric.toSDK(e) : undefined);
    } else {
      obj.metrics = [];
    }
    obj.next_page_token = message.nextPageToken;
    return obj;
  },
  fromAmino(object: ListConsumerQuotaMetricsResponseAmino): ListConsumerQuotaMetricsResponse {
    const message = createBaseListConsumerQuotaMetricsResponse();
    message.metrics = object.metrics?.map(e => ConsumerQuotaMetric.fromAmino(e)) || [];
    if (object.next_page_token !== undefined && object.next_page_token !== null) {
      message.nextPageToken = object.next_page_token;
    }
    return message;
  },
  toAmino(message: ListConsumerQuotaMetricsResponse): ListConsumerQuotaMetricsResponseAmino {
    const obj: any = {};
    if (message.metrics) {
      obj.metrics = message.metrics.map(e => e ? ConsumerQuotaMetric.toAmino(e) : undefined);
    } else {
      obj.metrics = message.metrics;
    }
    obj.next_page_token = message.nextPageToken === "" ? undefined : message.nextPageToken;
    return obj;
  },
  fromAminoMsg(object: ListConsumerQuotaMetricsResponseAminoMsg): ListConsumerQuotaMetricsResponse {
    return ListConsumerQuotaMetricsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ListConsumerQuotaMetricsResponseProtoMsg): ListConsumerQuotaMetricsResponse {
    return ListConsumerQuotaMetricsResponse.decode(message.value);
  },
  toProto(message: ListConsumerQuotaMetricsResponse): Uint8Array {
    return ListConsumerQuotaMetricsResponse.encode(message).finish();
  },
  toProtoMsg(message: ListConsumerQuotaMetricsResponse): ListConsumerQuotaMetricsResponseProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.ListConsumerQuotaMetricsResponse",
      value: ListConsumerQuotaMetricsResponse.encode(message).finish()
    };
  }
};
function createBaseGetConsumerQuotaMetricRequest(): GetConsumerQuotaMetricRequest {
  return {
    name: "",
    view: 0
  };
}
export const GetConsumerQuotaMetricRequest = {
  typeUrl: "/google.api.serviceusage.v1beta1.GetConsumerQuotaMetricRequest",
  encode(message: GetConsumerQuotaMetricRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.view !== 0) {
      writer.uint32(16).int32(message.view);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetConsumerQuotaMetricRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetConsumerQuotaMetricRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.view = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetConsumerQuotaMetricRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      view: isSet(object.view) ? quotaViewFromJSON(object.view) : -1
    };
  },
  toJSON(message: GetConsumerQuotaMetricRequest): JsonSafe<GetConsumerQuotaMetricRequest> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.view !== undefined && (obj.view = quotaViewToJSON(message.view));
    return obj;
  },
  fromPartial(object: DeepPartial<GetConsumerQuotaMetricRequest>): GetConsumerQuotaMetricRequest {
    const message = createBaseGetConsumerQuotaMetricRequest();
    message.name = object.name ?? "";
    message.view = object.view ?? 0;
    return message;
  },
  fromSDK(object: GetConsumerQuotaMetricRequestSDKType): GetConsumerQuotaMetricRequest {
    return {
      name: object?.name,
      view: isSet(object.view) ? quotaViewFromJSON(object.view) : -1
    };
  },
  fromSDKJSON(object: any): GetConsumerQuotaMetricRequestSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      view: isSet(object.view) ? quotaViewFromJSON(object.view) : -1
    };
  },
  toSDK(message: GetConsumerQuotaMetricRequest): GetConsumerQuotaMetricRequestSDKType {
    const obj: any = {};
    obj.name = message.name;
    message.view !== undefined && (obj.view = quotaViewToJSON(message.view));
    return obj;
  },
  fromAmino(object: GetConsumerQuotaMetricRequestAmino): GetConsumerQuotaMetricRequest {
    const message = createBaseGetConsumerQuotaMetricRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.view !== undefined && object.view !== null) {
      message.view = object.view;
    }
    return message;
  },
  toAmino(message: GetConsumerQuotaMetricRequest): GetConsumerQuotaMetricRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.view = message.view === 0 ? undefined : message.view;
    return obj;
  },
  fromAminoMsg(object: GetConsumerQuotaMetricRequestAminoMsg): GetConsumerQuotaMetricRequest {
    return GetConsumerQuotaMetricRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: GetConsumerQuotaMetricRequestProtoMsg): GetConsumerQuotaMetricRequest {
    return GetConsumerQuotaMetricRequest.decode(message.value);
  },
  toProto(message: GetConsumerQuotaMetricRequest): Uint8Array {
    return GetConsumerQuotaMetricRequest.encode(message).finish();
  },
  toProtoMsg(message: GetConsumerQuotaMetricRequest): GetConsumerQuotaMetricRequestProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.GetConsumerQuotaMetricRequest",
      value: GetConsumerQuotaMetricRequest.encode(message).finish()
    };
  }
};
function createBaseGetConsumerQuotaLimitRequest(): GetConsumerQuotaLimitRequest {
  return {
    name: "",
    view: 0
  };
}
export const GetConsumerQuotaLimitRequest = {
  typeUrl: "/google.api.serviceusage.v1beta1.GetConsumerQuotaLimitRequest",
  encode(message: GetConsumerQuotaLimitRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.view !== 0) {
      writer.uint32(16).int32(message.view);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetConsumerQuotaLimitRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetConsumerQuotaLimitRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.view = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetConsumerQuotaLimitRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      view: isSet(object.view) ? quotaViewFromJSON(object.view) : -1
    };
  },
  toJSON(message: GetConsumerQuotaLimitRequest): JsonSafe<GetConsumerQuotaLimitRequest> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.view !== undefined && (obj.view = quotaViewToJSON(message.view));
    return obj;
  },
  fromPartial(object: DeepPartial<GetConsumerQuotaLimitRequest>): GetConsumerQuotaLimitRequest {
    const message = createBaseGetConsumerQuotaLimitRequest();
    message.name = object.name ?? "";
    message.view = object.view ?? 0;
    return message;
  },
  fromSDK(object: GetConsumerQuotaLimitRequestSDKType): GetConsumerQuotaLimitRequest {
    return {
      name: object?.name,
      view: isSet(object.view) ? quotaViewFromJSON(object.view) : -1
    };
  },
  fromSDKJSON(object: any): GetConsumerQuotaLimitRequestSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      view: isSet(object.view) ? quotaViewFromJSON(object.view) : -1
    };
  },
  toSDK(message: GetConsumerQuotaLimitRequest): GetConsumerQuotaLimitRequestSDKType {
    const obj: any = {};
    obj.name = message.name;
    message.view !== undefined && (obj.view = quotaViewToJSON(message.view));
    return obj;
  },
  fromAmino(object: GetConsumerQuotaLimitRequestAmino): GetConsumerQuotaLimitRequest {
    const message = createBaseGetConsumerQuotaLimitRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.view !== undefined && object.view !== null) {
      message.view = object.view;
    }
    return message;
  },
  toAmino(message: GetConsumerQuotaLimitRequest): GetConsumerQuotaLimitRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.view = message.view === 0 ? undefined : message.view;
    return obj;
  },
  fromAminoMsg(object: GetConsumerQuotaLimitRequestAminoMsg): GetConsumerQuotaLimitRequest {
    return GetConsumerQuotaLimitRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: GetConsumerQuotaLimitRequestProtoMsg): GetConsumerQuotaLimitRequest {
    return GetConsumerQuotaLimitRequest.decode(message.value);
  },
  toProto(message: GetConsumerQuotaLimitRequest): Uint8Array {
    return GetConsumerQuotaLimitRequest.encode(message).finish();
  },
  toProtoMsg(message: GetConsumerQuotaLimitRequest): GetConsumerQuotaLimitRequestProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.GetConsumerQuotaLimitRequest",
      value: GetConsumerQuotaLimitRequest.encode(message).finish()
    };
  }
};
function createBaseCreateAdminOverrideRequest(): CreateAdminOverrideRequest {
  return {
    parent: "",
    override: undefined,
    force: false,
    forceOnly: []
  };
}
export const CreateAdminOverrideRequest = {
  typeUrl: "/google.api.serviceusage.v1beta1.CreateAdminOverrideRequest",
  encode(message: CreateAdminOverrideRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.override !== undefined) {
      QuotaOverride.encode(message.override, writer.uint32(18).fork()).ldelim();
    }
    if (message.force === true) {
      writer.uint32(24).bool(message.force);
    }
    writer.uint32(34).fork();
    for (const v of message.forceOnly) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CreateAdminOverrideRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAdminOverrideRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.override = QuotaOverride.decode(reader, reader.uint32());
          break;
        case 3:
          message.force = reader.bool();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.forceOnly.push((reader.int32() as any));
            }
          } else {
            message.forceOnly.push((reader.int32() as any));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CreateAdminOverrideRequest {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      override: isSet(object.override) ? QuotaOverride.fromJSON(object.override) : undefined,
      force: isSet(object.force) ? Boolean(object.force) : false,
      forceOnly: Array.isArray(object?.forceOnly) ? object.forceOnly.map((e: any) => quotaSafetyCheckFromJSON(e)) : []
    };
  },
  toJSON(message: CreateAdminOverrideRequest): JsonSafe<CreateAdminOverrideRequest> {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.override !== undefined && (obj.override = message.override ? QuotaOverride.toJSON(message.override) : undefined);
    message.force !== undefined && (obj.force = message.force);
    if (message.forceOnly) {
      obj.forceOnly = message.forceOnly.map(e => quotaSafetyCheckToJSON(e));
    } else {
      obj.forceOnly = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<CreateAdminOverrideRequest>): CreateAdminOverrideRequest {
    const message = createBaseCreateAdminOverrideRequest();
    message.parent = object.parent ?? "";
    message.override = object.override !== undefined && object.override !== null ? QuotaOverride.fromPartial(object.override) : undefined;
    message.force = object.force ?? false;
    message.forceOnly = object.forceOnly?.map(e => e) || [];
    return message;
  },
  fromSDK(object: CreateAdminOverrideRequestSDKType): CreateAdminOverrideRequest {
    return {
      parent: object?.parent,
      override: object.override ? QuotaOverride.fromSDK(object.override) : undefined,
      force: object?.force,
      forceOnly: Array.isArray(object?.force_only) ? object.force_only.map((e: any) => quotaSafetyCheckFromJSON(e)) : []
    };
  },
  fromSDKJSON(object: any): CreateAdminOverrideRequestSDKType {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      override: isSet(object.override) ? QuotaOverride.fromSDKJSON(object.override) : undefined,
      force: isSet(object.force) ? Boolean(object.force) : false,
      force_only: Array.isArray(object?.force_only) ? object.force_only.map((e: any) => quotaSafetyCheckFromJSON(e)) : []
    };
  },
  toSDK(message: CreateAdminOverrideRequest): CreateAdminOverrideRequestSDKType {
    const obj: any = {};
    obj.parent = message.parent;
    message.override !== undefined && (obj.override = message.override ? QuotaOverride.toSDK(message.override) : undefined);
    obj.force = message.force;
    if (message.forceOnly) {
      obj.force_only = message.forceOnly.map(e => quotaSafetyCheckToJSON(e));
    } else {
      obj.force_only = [];
    }
    return obj;
  },
  fromAmino(object: CreateAdminOverrideRequestAmino): CreateAdminOverrideRequest {
    const message = createBaseCreateAdminOverrideRequest();
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    }
    if (object.override !== undefined && object.override !== null) {
      message.override = QuotaOverride.fromAmino(object.override);
    }
    if (object.force !== undefined && object.force !== null) {
      message.force = object.force;
    }
    message.forceOnly = object.force_only?.map(e => e) || [];
    return message;
  },
  toAmino(message: CreateAdminOverrideRequest): CreateAdminOverrideRequestAmino {
    const obj: any = {};
    obj.parent = message.parent === "" ? undefined : message.parent;
    obj.override = message.override ? QuotaOverride.toAmino(message.override) : undefined;
    obj.force = message.force === false ? undefined : message.force;
    if (message.forceOnly) {
      obj.force_only = message.forceOnly.map(e => e);
    } else {
      obj.force_only = message.forceOnly;
    }
    return obj;
  },
  fromAminoMsg(object: CreateAdminOverrideRequestAminoMsg): CreateAdminOverrideRequest {
    return CreateAdminOverrideRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: CreateAdminOverrideRequestProtoMsg): CreateAdminOverrideRequest {
    return CreateAdminOverrideRequest.decode(message.value);
  },
  toProto(message: CreateAdminOverrideRequest): Uint8Array {
    return CreateAdminOverrideRequest.encode(message).finish();
  },
  toProtoMsg(message: CreateAdminOverrideRequest): CreateAdminOverrideRequestProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.CreateAdminOverrideRequest",
      value: CreateAdminOverrideRequest.encode(message).finish()
    };
  }
};
function createBaseUpdateAdminOverrideRequest(): UpdateAdminOverrideRequest {
  return {
    name: "",
    override: undefined,
    force: false,
    updateMask: undefined,
    forceOnly: []
  };
}
export const UpdateAdminOverrideRequest = {
  typeUrl: "/google.api.serviceusage.v1beta1.UpdateAdminOverrideRequest",
  encode(message: UpdateAdminOverrideRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.override !== undefined) {
      QuotaOverride.encode(message.override, writer.uint32(18).fork()).ldelim();
    }
    if (message.force === true) {
      writer.uint32(24).bool(message.force);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(42).fork();
    for (const v of message.forceOnly) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateAdminOverrideRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAdminOverrideRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.override = QuotaOverride.decode(reader, reader.uint32());
          break;
        case 3:
          message.force = reader.bool();
          break;
        case 4:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.forceOnly.push((reader.int32() as any));
            }
          } else {
            message.forceOnly.push((reader.int32() as any));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpdateAdminOverrideRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      override: isSet(object.override) ? QuotaOverride.fromJSON(object.override) : undefined,
      force: isSet(object.force) ? Boolean(object.force) : false,
      updateMask: isSet(object.updateMask) ? FieldMask.fromJSON(object.updateMask) : undefined,
      forceOnly: Array.isArray(object?.forceOnly) ? object.forceOnly.map((e: any) => quotaSafetyCheckFromJSON(e)) : []
    };
  },
  toJSON(message: UpdateAdminOverrideRequest): JsonSafe<UpdateAdminOverrideRequest> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.override !== undefined && (obj.override = message.override ? QuotaOverride.toJSON(message.override) : undefined);
    message.force !== undefined && (obj.force = message.force);
    message.updateMask !== undefined && (obj.updateMask = message.updateMask ? FieldMask.toJSON(message.updateMask) : undefined);
    if (message.forceOnly) {
      obj.forceOnly = message.forceOnly.map(e => quotaSafetyCheckToJSON(e));
    } else {
      obj.forceOnly = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<UpdateAdminOverrideRequest>): UpdateAdminOverrideRequest {
    const message = createBaseUpdateAdminOverrideRequest();
    message.name = object.name ?? "";
    message.override = object.override !== undefined && object.override !== null ? QuotaOverride.fromPartial(object.override) : undefined;
    message.force = object.force ?? false;
    message.updateMask = object.updateMask !== undefined && object.updateMask !== null ? FieldMask.fromPartial(object.updateMask) : undefined;
    message.forceOnly = object.forceOnly?.map(e => e) || [];
    return message;
  },
  fromSDK(object: UpdateAdminOverrideRequestSDKType): UpdateAdminOverrideRequest {
    return {
      name: object?.name,
      override: object.override ? QuotaOverride.fromSDK(object.override) : undefined,
      force: object?.force,
      updateMask: object.update_mask ? FieldMask.fromSDK(object.update_mask) : undefined,
      forceOnly: Array.isArray(object?.force_only) ? object.force_only.map((e: any) => quotaSafetyCheckFromJSON(e)) : []
    };
  },
  fromSDKJSON(object: any): UpdateAdminOverrideRequestSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      override: isSet(object.override) ? QuotaOverride.fromSDKJSON(object.override) : undefined,
      force: isSet(object.force) ? Boolean(object.force) : false,
      update_mask: isSet(object.update_mask) ? FieldMask.fromSDKJSON(object.update_mask) : undefined,
      force_only: Array.isArray(object?.force_only) ? object.force_only.map((e: any) => quotaSafetyCheckFromJSON(e)) : []
    };
  },
  toSDK(message: UpdateAdminOverrideRequest): UpdateAdminOverrideRequestSDKType {
    const obj: any = {};
    obj.name = message.name;
    message.override !== undefined && (obj.override = message.override ? QuotaOverride.toSDK(message.override) : undefined);
    obj.force = message.force;
    message.updateMask !== undefined && (obj.update_mask = message.updateMask ? FieldMask.toSDK(message.updateMask) : undefined);
    if (message.forceOnly) {
      obj.force_only = message.forceOnly.map(e => quotaSafetyCheckToJSON(e));
    } else {
      obj.force_only = [];
    }
    return obj;
  },
  fromAmino(object: UpdateAdminOverrideRequestAmino): UpdateAdminOverrideRequest {
    const message = createBaseUpdateAdminOverrideRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.override !== undefined && object.override !== null) {
      message.override = QuotaOverride.fromAmino(object.override);
    }
    if (object.force !== undefined && object.force !== null) {
      message.force = object.force;
    }
    if (object.update_mask !== undefined && object.update_mask !== null) {
      message.updateMask = FieldMask.fromAmino(object.update_mask);
    }
    message.forceOnly = object.force_only?.map(e => e) || [];
    return message;
  },
  toAmino(message: UpdateAdminOverrideRequest): UpdateAdminOverrideRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.override = message.override ? QuotaOverride.toAmino(message.override) : undefined;
    obj.force = message.force === false ? undefined : message.force;
    obj.update_mask = message.updateMask ? FieldMask.toAmino(message.updateMask) : undefined;
    if (message.forceOnly) {
      obj.force_only = message.forceOnly.map(e => e);
    } else {
      obj.force_only = message.forceOnly;
    }
    return obj;
  },
  fromAminoMsg(object: UpdateAdminOverrideRequestAminoMsg): UpdateAdminOverrideRequest {
    return UpdateAdminOverrideRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateAdminOverrideRequestProtoMsg): UpdateAdminOverrideRequest {
    return UpdateAdminOverrideRequest.decode(message.value);
  },
  toProto(message: UpdateAdminOverrideRequest): Uint8Array {
    return UpdateAdminOverrideRequest.encode(message).finish();
  },
  toProtoMsg(message: UpdateAdminOverrideRequest): UpdateAdminOverrideRequestProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.UpdateAdminOverrideRequest",
      value: UpdateAdminOverrideRequest.encode(message).finish()
    };
  }
};
function createBaseDeleteAdminOverrideRequest(): DeleteAdminOverrideRequest {
  return {
    name: "",
    force: false,
    forceOnly: []
  };
}
export const DeleteAdminOverrideRequest = {
  typeUrl: "/google.api.serviceusage.v1beta1.DeleteAdminOverrideRequest",
  encode(message: DeleteAdminOverrideRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.force === true) {
      writer.uint32(16).bool(message.force);
    }
    writer.uint32(26).fork();
    for (const v of message.forceOnly) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DeleteAdminOverrideRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteAdminOverrideRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.force = reader.bool();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.forceOnly.push((reader.int32() as any));
            }
          } else {
            message.forceOnly.push((reader.int32() as any));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DeleteAdminOverrideRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      force: isSet(object.force) ? Boolean(object.force) : false,
      forceOnly: Array.isArray(object?.forceOnly) ? object.forceOnly.map((e: any) => quotaSafetyCheckFromJSON(e)) : []
    };
  },
  toJSON(message: DeleteAdminOverrideRequest): JsonSafe<DeleteAdminOverrideRequest> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.force !== undefined && (obj.force = message.force);
    if (message.forceOnly) {
      obj.forceOnly = message.forceOnly.map(e => quotaSafetyCheckToJSON(e));
    } else {
      obj.forceOnly = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<DeleteAdminOverrideRequest>): DeleteAdminOverrideRequest {
    const message = createBaseDeleteAdminOverrideRequest();
    message.name = object.name ?? "";
    message.force = object.force ?? false;
    message.forceOnly = object.forceOnly?.map(e => e) || [];
    return message;
  },
  fromSDK(object: DeleteAdminOverrideRequestSDKType): DeleteAdminOverrideRequest {
    return {
      name: object?.name,
      force: object?.force,
      forceOnly: Array.isArray(object?.force_only) ? object.force_only.map((e: any) => quotaSafetyCheckFromJSON(e)) : []
    };
  },
  fromSDKJSON(object: any): DeleteAdminOverrideRequestSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      force: isSet(object.force) ? Boolean(object.force) : false,
      force_only: Array.isArray(object?.force_only) ? object.force_only.map((e: any) => quotaSafetyCheckFromJSON(e)) : []
    };
  },
  toSDK(message: DeleteAdminOverrideRequest): DeleteAdminOverrideRequestSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.force = message.force;
    if (message.forceOnly) {
      obj.force_only = message.forceOnly.map(e => quotaSafetyCheckToJSON(e));
    } else {
      obj.force_only = [];
    }
    return obj;
  },
  fromAmino(object: DeleteAdminOverrideRequestAmino): DeleteAdminOverrideRequest {
    const message = createBaseDeleteAdminOverrideRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.force !== undefined && object.force !== null) {
      message.force = object.force;
    }
    message.forceOnly = object.force_only?.map(e => e) || [];
    return message;
  },
  toAmino(message: DeleteAdminOverrideRequest): DeleteAdminOverrideRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.force = message.force === false ? undefined : message.force;
    if (message.forceOnly) {
      obj.force_only = message.forceOnly.map(e => e);
    } else {
      obj.force_only = message.forceOnly;
    }
    return obj;
  },
  fromAminoMsg(object: DeleteAdminOverrideRequestAminoMsg): DeleteAdminOverrideRequest {
    return DeleteAdminOverrideRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: DeleteAdminOverrideRequestProtoMsg): DeleteAdminOverrideRequest {
    return DeleteAdminOverrideRequest.decode(message.value);
  },
  toProto(message: DeleteAdminOverrideRequest): Uint8Array {
    return DeleteAdminOverrideRequest.encode(message).finish();
  },
  toProtoMsg(message: DeleteAdminOverrideRequest): DeleteAdminOverrideRequestProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.DeleteAdminOverrideRequest",
      value: DeleteAdminOverrideRequest.encode(message).finish()
    };
  }
};
function createBaseListAdminOverridesRequest(): ListAdminOverridesRequest {
  return {
    parent: "",
    pageSize: 0,
    pageToken: ""
  };
}
export const ListAdminOverridesRequest = {
  typeUrl: "/google.api.serviceusage.v1beta1.ListAdminOverridesRequest",
  encode(message: ListAdminOverridesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListAdminOverridesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAdminOverridesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.pageSize = reader.int32();
          break;
        case 3:
          message.pageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListAdminOverridesRequest {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? String(object.pageToken) : ""
    };
  },
  toJSON(message: ListAdminOverridesRequest): JsonSafe<ListAdminOverridesRequest> {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },
  fromPartial(object: DeepPartial<ListAdminOverridesRequest>): ListAdminOverridesRequest {
    const message = createBaseListAdminOverridesRequest();
    message.parent = object.parent ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
  fromSDK(object: ListAdminOverridesRequestSDKType): ListAdminOverridesRequest {
    return {
      parent: object?.parent,
      pageSize: object?.page_size,
      pageToken: object?.page_token
    };
  },
  fromSDKJSON(object: any): ListAdminOverridesRequestSDKType {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      page_size: isSet(object.page_size) ? Number(object.page_size) : 0,
      page_token: isSet(object.page_token) ? String(object.page_token) : ""
    };
  },
  toSDK(message: ListAdminOverridesRequest): ListAdminOverridesRequestSDKType {
    const obj: any = {};
    obj.parent = message.parent;
    obj.page_size = message.pageSize;
    obj.page_token = message.pageToken;
    return obj;
  },
  fromAmino(object: ListAdminOverridesRequestAmino): ListAdminOverridesRequest {
    const message = createBaseListAdminOverridesRequest();
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    }
    if (object.page_size !== undefined && object.page_size !== null) {
      message.pageSize = object.page_size;
    }
    if (object.page_token !== undefined && object.page_token !== null) {
      message.pageToken = object.page_token;
    }
    return message;
  },
  toAmino(message: ListAdminOverridesRequest): ListAdminOverridesRequestAmino {
    const obj: any = {};
    obj.parent = message.parent === "" ? undefined : message.parent;
    obj.page_size = message.pageSize === 0 ? undefined : message.pageSize;
    obj.page_token = message.pageToken === "" ? undefined : message.pageToken;
    return obj;
  },
  fromAminoMsg(object: ListAdminOverridesRequestAminoMsg): ListAdminOverridesRequest {
    return ListAdminOverridesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ListAdminOverridesRequestProtoMsg): ListAdminOverridesRequest {
    return ListAdminOverridesRequest.decode(message.value);
  },
  toProto(message: ListAdminOverridesRequest): Uint8Array {
    return ListAdminOverridesRequest.encode(message).finish();
  },
  toProtoMsg(message: ListAdminOverridesRequest): ListAdminOverridesRequestProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.ListAdminOverridesRequest",
      value: ListAdminOverridesRequest.encode(message).finish()
    };
  }
};
function createBaseListAdminOverridesResponse(): ListAdminOverridesResponse {
  return {
    overrides: [],
    nextPageToken: ""
  };
}
export const ListAdminOverridesResponse = {
  typeUrl: "/google.api.serviceusage.v1beta1.ListAdminOverridesResponse",
  encode(message: ListAdminOverridesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.overrides) {
      QuotaOverride.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListAdminOverridesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAdminOverridesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.overrides.push(QuotaOverride.decode(reader, reader.uint32()));
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
  fromJSON(object: any): ListAdminOverridesResponse {
    return {
      overrides: Array.isArray(object?.overrides) ? object.overrides.map((e: any) => QuotaOverride.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? String(object.nextPageToken) : ""
    };
  },
  toJSON(message: ListAdminOverridesResponse): JsonSafe<ListAdminOverridesResponse> {
    const obj: any = {};
    if (message.overrides) {
      obj.overrides = message.overrides.map(e => e ? QuotaOverride.toJSON(e) : undefined);
    } else {
      obj.overrides = [];
    }
    message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
    return obj;
  },
  fromPartial(object: DeepPartial<ListAdminOverridesResponse>): ListAdminOverridesResponse {
    const message = createBaseListAdminOverridesResponse();
    message.overrides = object.overrides?.map(e => QuotaOverride.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
  fromSDK(object: ListAdminOverridesResponseSDKType): ListAdminOverridesResponse {
    return {
      overrides: Array.isArray(object?.overrides) ? object.overrides.map((e: any) => QuotaOverride.fromSDK(e)) : [],
      nextPageToken: object?.next_page_token
    };
  },
  fromSDKJSON(object: any): ListAdminOverridesResponseSDKType {
    return {
      overrides: Array.isArray(object?.overrides) ? object.overrides.map((e: any) => QuotaOverride.fromSDKJSON(e)) : [],
      next_page_token: isSet(object.next_page_token) ? String(object.next_page_token) : ""
    };
  },
  toSDK(message: ListAdminOverridesResponse): ListAdminOverridesResponseSDKType {
    const obj: any = {};
    if (message.overrides) {
      obj.overrides = message.overrides.map(e => e ? QuotaOverride.toSDK(e) : undefined);
    } else {
      obj.overrides = [];
    }
    obj.next_page_token = message.nextPageToken;
    return obj;
  },
  fromAmino(object: ListAdminOverridesResponseAmino): ListAdminOverridesResponse {
    const message = createBaseListAdminOverridesResponse();
    message.overrides = object.overrides?.map(e => QuotaOverride.fromAmino(e)) || [];
    if (object.next_page_token !== undefined && object.next_page_token !== null) {
      message.nextPageToken = object.next_page_token;
    }
    return message;
  },
  toAmino(message: ListAdminOverridesResponse): ListAdminOverridesResponseAmino {
    const obj: any = {};
    if (message.overrides) {
      obj.overrides = message.overrides.map(e => e ? QuotaOverride.toAmino(e) : undefined);
    } else {
      obj.overrides = message.overrides;
    }
    obj.next_page_token = message.nextPageToken === "" ? undefined : message.nextPageToken;
    return obj;
  },
  fromAminoMsg(object: ListAdminOverridesResponseAminoMsg): ListAdminOverridesResponse {
    return ListAdminOverridesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ListAdminOverridesResponseProtoMsg): ListAdminOverridesResponse {
    return ListAdminOverridesResponse.decode(message.value);
  },
  toProto(message: ListAdminOverridesResponse): Uint8Array {
    return ListAdminOverridesResponse.encode(message).finish();
  },
  toProtoMsg(message: ListAdminOverridesResponse): ListAdminOverridesResponseProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.ListAdminOverridesResponse",
      value: ListAdminOverridesResponse.encode(message).finish()
    };
  }
};
function createBaseBatchCreateAdminOverridesResponse(): BatchCreateAdminOverridesResponse {
  return {
    overrides: []
  };
}
export const BatchCreateAdminOverridesResponse = {
  typeUrl: "/google.api.serviceusage.v1beta1.BatchCreateAdminOverridesResponse",
  encode(message: BatchCreateAdminOverridesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.overrides) {
      QuotaOverride.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BatchCreateAdminOverridesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchCreateAdminOverridesResponse();
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
  fromJSON(object: any): BatchCreateAdminOverridesResponse {
    return {
      overrides: Array.isArray(object?.overrides) ? object.overrides.map((e: any) => QuotaOverride.fromJSON(e)) : []
    };
  },
  toJSON(message: BatchCreateAdminOverridesResponse): JsonSafe<BatchCreateAdminOverridesResponse> {
    const obj: any = {};
    if (message.overrides) {
      obj.overrides = message.overrides.map(e => e ? QuotaOverride.toJSON(e) : undefined);
    } else {
      obj.overrides = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<BatchCreateAdminOverridesResponse>): BatchCreateAdminOverridesResponse {
    const message = createBaseBatchCreateAdminOverridesResponse();
    message.overrides = object.overrides?.map(e => QuotaOverride.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: BatchCreateAdminOverridesResponseSDKType): BatchCreateAdminOverridesResponse {
    return {
      overrides: Array.isArray(object?.overrides) ? object.overrides.map((e: any) => QuotaOverride.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): BatchCreateAdminOverridesResponseSDKType {
    return {
      overrides: Array.isArray(object?.overrides) ? object.overrides.map((e: any) => QuotaOverride.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: BatchCreateAdminOverridesResponse): BatchCreateAdminOverridesResponseSDKType {
    const obj: any = {};
    if (message.overrides) {
      obj.overrides = message.overrides.map(e => e ? QuotaOverride.toSDK(e) : undefined);
    } else {
      obj.overrides = [];
    }
    return obj;
  },
  fromAmino(object: BatchCreateAdminOverridesResponseAmino): BatchCreateAdminOverridesResponse {
    const message = createBaseBatchCreateAdminOverridesResponse();
    message.overrides = object.overrides?.map(e => QuotaOverride.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: BatchCreateAdminOverridesResponse): BatchCreateAdminOverridesResponseAmino {
    const obj: any = {};
    if (message.overrides) {
      obj.overrides = message.overrides.map(e => e ? QuotaOverride.toAmino(e) : undefined);
    } else {
      obj.overrides = message.overrides;
    }
    return obj;
  },
  fromAminoMsg(object: BatchCreateAdminOverridesResponseAminoMsg): BatchCreateAdminOverridesResponse {
    return BatchCreateAdminOverridesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchCreateAdminOverridesResponseProtoMsg): BatchCreateAdminOverridesResponse {
    return BatchCreateAdminOverridesResponse.decode(message.value);
  },
  toProto(message: BatchCreateAdminOverridesResponse): Uint8Array {
    return BatchCreateAdminOverridesResponse.encode(message).finish();
  },
  toProtoMsg(message: BatchCreateAdminOverridesResponse): BatchCreateAdminOverridesResponseProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.BatchCreateAdminOverridesResponse",
      value: BatchCreateAdminOverridesResponse.encode(message).finish()
    };
  }
};
function createBaseImportAdminOverridesRequest(): ImportAdminOverridesRequest {
  return {
    parent: "",
    inlineSource: undefined,
    force: false,
    forceOnly: []
  };
}
export const ImportAdminOverridesRequest = {
  typeUrl: "/google.api.serviceusage.v1beta1.ImportAdminOverridesRequest",
  encode(message: ImportAdminOverridesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.inlineSource !== undefined) {
      OverrideInlineSource.encode(message.inlineSource, writer.uint32(18).fork()).ldelim();
    }
    if (message.force === true) {
      writer.uint32(24).bool(message.force);
    }
    writer.uint32(34).fork();
    for (const v of message.forceOnly) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ImportAdminOverridesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImportAdminOverridesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.inlineSource = OverrideInlineSource.decode(reader, reader.uint32());
          break;
        case 3:
          message.force = reader.bool();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.forceOnly.push((reader.int32() as any));
            }
          } else {
            message.forceOnly.push((reader.int32() as any));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ImportAdminOverridesRequest {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      inlineSource: isSet(object.inlineSource) ? OverrideInlineSource.fromJSON(object.inlineSource) : undefined,
      force: isSet(object.force) ? Boolean(object.force) : false,
      forceOnly: Array.isArray(object?.forceOnly) ? object.forceOnly.map((e: any) => quotaSafetyCheckFromJSON(e)) : []
    };
  },
  toJSON(message: ImportAdminOverridesRequest): JsonSafe<ImportAdminOverridesRequest> {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.inlineSource !== undefined && (obj.inlineSource = message.inlineSource ? OverrideInlineSource.toJSON(message.inlineSource) : undefined);
    message.force !== undefined && (obj.force = message.force);
    if (message.forceOnly) {
      obj.forceOnly = message.forceOnly.map(e => quotaSafetyCheckToJSON(e));
    } else {
      obj.forceOnly = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ImportAdminOverridesRequest>): ImportAdminOverridesRequest {
    const message = createBaseImportAdminOverridesRequest();
    message.parent = object.parent ?? "";
    message.inlineSource = object.inlineSource !== undefined && object.inlineSource !== null ? OverrideInlineSource.fromPartial(object.inlineSource) : undefined;
    message.force = object.force ?? false;
    message.forceOnly = object.forceOnly?.map(e => e) || [];
    return message;
  },
  fromSDK(object: ImportAdminOverridesRequestSDKType): ImportAdminOverridesRequest {
    return {
      parent: object?.parent,
      inlineSource: object.inline_source ? OverrideInlineSource.fromSDK(object.inline_source) : undefined,
      force: object?.force,
      forceOnly: Array.isArray(object?.force_only) ? object.force_only.map((e: any) => quotaSafetyCheckFromJSON(e)) : []
    };
  },
  fromSDKJSON(object: any): ImportAdminOverridesRequestSDKType {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      inline_source: isSet(object.inline_source) ? OverrideInlineSource.fromSDKJSON(object.inline_source) : undefined,
      force: isSet(object.force) ? Boolean(object.force) : false,
      force_only: Array.isArray(object?.force_only) ? object.force_only.map((e: any) => quotaSafetyCheckFromJSON(e)) : []
    };
  },
  toSDK(message: ImportAdminOverridesRequest): ImportAdminOverridesRequestSDKType {
    const obj: any = {};
    obj.parent = message.parent;
    message.inlineSource !== undefined && (obj.inline_source = message.inlineSource ? OverrideInlineSource.toSDK(message.inlineSource) : undefined);
    obj.force = message.force;
    if (message.forceOnly) {
      obj.force_only = message.forceOnly.map(e => quotaSafetyCheckToJSON(e));
    } else {
      obj.force_only = [];
    }
    return obj;
  },
  fromAmino(object: ImportAdminOverridesRequestAmino): ImportAdminOverridesRequest {
    const message = createBaseImportAdminOverridesRequest();
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    }
    if (object.inline_source !== undefined && object.inline_source !== null) {
      message.inlineSource = OverrideInlineSource.fromAmino(object.inline_source);
    }
    if (object.force !== undefined && object.force !== null) {
      message.force = object.force;
    }
    message.forceOnly = object.force_only?.map(e => e) || [];
    return message;
  },
  toAmino(message: ImportAdminOverridesRequest): ImportAdminOverridesRequestAmino {
    const obj: any = {};
    obj.parent = message.parent === "" ? undefined : message.parent;
    obj.inline_source = message.inlineSource ? OverrideInlineSource.toAmino(message.inlineSource) : undefined;
    obj.force = message.force === false ? undefined : message.force;
    if (message.forceOnly) {
      obj.force_only = message.forceOnly.map(e => e);
    } else {
      obj.force_only = message.forceOnly;
    }
    return obj;
  },
  fromAminoMsg(object: ImportAdminOverridesRequestAminoMsg): ImportAdminOverridesRequest {
    return ImportAdminOverridesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ImportAdminOverridesRequestProtoMsg): ImportAdminOverridesRequest {
    return ImportAdminOverridesRequest.decode(message.value);
  },
  toProto(message: ImportAdminOverridesRequest): Uint8Array {
    return ImportAdminOverridesRequest.encode(message).finish();
  },
  toProtoMsg(message: ImportAdminOverridesRequest): ImportAdminOverridesRequestProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.ImportAdminOverridesRequest",
      value: ImportAdminOverridesRequest.encode(message).finish()
    };
  }
};
function createBaseImportAdminOverridesResponse(): ImportAdminOverridesResponse {
  return {
    overrides: []
  };
}
export const ImportAdminOverridesResponse = {
  typeUrl: "/google.api.serviceusage.v1beta1.ImportAdminOverridesResponse",
  encode(message: ImportAdminOverridesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.overrides) {
      QuotaOverride.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ImportAdminOverridesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImportAdminOverridesResponse();
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
  fromJSON(object: any): ImportAdminOverridesResponse {
    return {
      overrides: Array.isArray(object?.overrides) ? object.overrides.map((e: any) => QuotaOverride.fromJSON(e)) : []
    };
  },
  toJSON(message: ImportAdminOverridesResponse): JsonSafe<ImportAdminOverridesResponse> {
    const obj: any = {};
    if (message.overrides) {
      obj.overrides = message.overrides.map(e => e ? QuotaOverride.toJSON(e) : undefined);
    } else {
      obj.overrides = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ImportAdminOverridesResponse>): ImportAdminOverridesResponse {
    const message = createBaseImportAdminOverridesResponse();
    message.overrides = object.overrides?.map(e => QuotaOverride.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ImportAdminOverridesResponseSDKType): ImportAdminOverridesResponse {
    return {
      overrides: Array.isArray(object?.overrides) ? object.overrides.map((e: any) => QuotaOverride.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): ImportAdminOverridesResponseSDKType {
    return {
      overrides: Array.isArray(object?.overrides) ? object.overrides.map((e: any) => QuotaOverride.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: ImportAdminOverridesResponse): ImportAdminOverridesResponseSDKType {
    const obj: any = {};
    if (message.overrides) {
      obj.overrides = message.overrides.map(e => e ? QuotaOverride.toSDK(e) : undefined);
    } else {
      obj.overrides = [];
    }
    return obj;
  },
  fromAmino(object: ImportAdminOverridesResponseAmino): ImportAdminOverridesResponse {
    const message = createBaseImportAdminOverridesResponse();
    message.overrides = object.overrides?.map(e => QuotaOverride.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ImportAdminOverridesResponse): ImportAdminOverridesResponseAmino {
    const obj: any = {};
    if (message.overrides) {
      obj.overrides = message.overrides.map(e => e ? QuotaOverride.toAmino(e) : undefined);
    } else {
      obj.overrides = message.overrides;
    }
    return obj;
  },
  fromAminoMsg(object: ImportAdminOverridesResponseAminoMsg): ImportAdminOverridesResponse {
    return ImportAdminOverridesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ImportAdminOverridesResponseProtoMsg): ImportAdminOverridesResponse {
    return ImportAdminOverridesResponse.decode(message.value);
  },
  toProto(message: ImportAdminOverridesResponse): Uint8Array {
    return ImportAdminOverridesResponse.encode(message).finish();
  },
  toProtoMsg(message: ImportAdminOverridesResponse): ImportAdminOverridesResponseProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.ImportAdminOverridesResponse",
      value: ImportAdminOverridesResponse.encode(message).finish()
    };
  }
};
function createBaseImportAdminOverridesMetadata(): ImportAdminOverridesMetadata {
  return {};
}
export const ImportAdminOverridesMetadata = {
  typeUrl: "/google.api.serviceusage.v1beta1.ImportAdminOverridesMetadata",
  encode(_: ImportAdminOverridesMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ImportAdminOverridesMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImportAdminOverridesMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): ImportAdminOverridesMetadata {
    return {};
  },
  toJSON(_: ImportAdminOverridesMetadata): JsonSafe<ImportAdminOverridesMetadata> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<ImportAdminOverridesMetadata>): ImportAdminOverridesMetadata {
    const message = createBaseImportAdminOverridesMetadata();
    return message;
  },
  fromSDK(_: ImportAdminOverridesMetadataSDKType): ImportAdminOverridesMetadata {
    return {};
  },
  fromSDKJSON(_: any): ImportAdminOverridesMetadataSDKType {
    return {};
  },
  toSDK(_: ImportAdminOverridesMetadata): ImportAdminOverridesMetadataSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: ImportAdminOverridesMetadataAmino): ImportAdminOverridesMetadata {
    const message = createBaseImportAdminOverridesMetadata();
    return message;
  },
  toAmino(_: ImportAdminOverridesMetadata): ImportAdminOverridesMetadataAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ImportAdminOverridesMetadataAminoMsg): ImportAdminOverridesMetadata {
    return ImportAdminOverridesMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: ImportAdminOverridesMetadataProtoMsg): ImportAdminOverridesMetadata {
    return ImportAdminOverridesMetadata.decode(message.value);
  },
  toProto(message: ImportAdminOverridesMetadata): Uint8Array {
    return ImportAdminOverridesMetadata.encode(message).finish();
  },
  toProtoMsg(message: ImportAdminOverridesMetadata): ImportAdminOverridesMetadataProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.ImportAdminOverridesMetadata",
      value: ImportAdminOverridesMetadata.encode(message).finish()
    };
  }
};
function createBaseCreateConsumerOverrideRequest(): CreateConsumerOverrideRequest {
  return {
    parent: "",
    override: undefined,
    force: false,
    forceOnly: []
  };
}
export const CreateConsumerOverrideRequest = {
  typeUrl: "/google.api.serviceusage.v1beta1.CreateConsumerOverrideRequest",
  encode(message: CreateConsumerOverrideRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.override !== undefined) {
      QuotaOverride.encode(message.override, writer.uint32(18).fork()).ldelim();
    }
    if (message.force === true) {
      writer.uint32(24).bool(message.force);
    }
    writer.uint32(34).fork();
    for (const v of message.forceOnly) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CreateConsumerOverrideRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateConsumerOverrideRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.override = QuotaOverride.decode(reader, reader.uint32());
          break;
        case 3:
          message.force = reader.bool();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.forceOnly.push((reader.int32() as any));
            }
          } else {
            message.forceOnly.push((reader.int32() as any));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CreateConsumerOverrideRequest {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      override: isSet(object.override) ? QuotaOverride.fromJSON(object.override) : undefined,
      force: isSet(object.force) ? Boolean(object.force) : false,
      forceOnly: Array.isArray(object?.forceOnly) ? object.forceOnly.map((e: any) => quotaSafetyCheckFromJSON(e)) : []
    };
  },
  toJSON(message: CreateConsumerOverrideRequest): JsonSafe<CreateConsumerOverrideRequest> {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.override !== undefined && (obj.override = message.override ? QuotaOverride.toJSON(message.override) : undefined);
    message.force !== undefined && (obj.force = message.force);
    if (message.forceOnly) {
      obj.forceOnly = message.forceOnly.map(e => quotaSafetyCheckToJSON(e));
    } else {
      obj.forceOnly = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<CreateConsumerOverrideRequest>): CreateConsumerOverrideRequest {
    const message = createBaseCreateConsumerOverrideRequest();
    message.parent = object.parent ?? "";
    message.override = object.override !== undefined && object.override !== null ? QuotaOverride.fromPartial(object.override) : undefined;
    message.force = object.force ?? false;
    message.forceOnly = object.forceOnly?.map(e => e) || [];
    return message;
  },
  fromSDK(object: CreateConsumerOverrideRequestSDKType): CreateConsumerOverrideRequest {
    return {
      parent: object?.parent,
      override: object.override ? QuotaOverride.fromSDK(object.override) : undefined,
      force: object?.force,
      forceOnly: Array.isArray(object?.force_only) ? object.force_only.map((e: any) => quotaSafetyCheckFromJSON(e)) : []
    };
  },
  fromSDKJSON(object: any): CreateConsumerOverrideRequestSDKType {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      override: isSet(object.override) ? QuotaOverride.fromSDKJSON(object.override) : undefined,
      force: isSet(object.force) ? Boolean(object.force) : false,
      force_only: Array.isArray(object?.force_only) ? object.force_only.map((e: any) => quotaSafetyCheckFromJSON(e)) : []
    };
  },
  toSDK(message: CreateConsumerOverrideRequest): CreateConsumerOverrideRequestSDKType {
    const obj: any = {};
    obj.parent = message.parent;
    message.override !== undefined && (obj.override = message.override ? QuotaOverride.toSDK(message.override) : undefined);
    obj.force = message.force;
    if (message.forceOnly) {
      obj.force_only = message.forceOnly.map(e => quotaSafetyCheckToJSON(e));
    } else {
      obj.force_only = [];
    }
    return obj;
  },
  fromAmino(object: CreateConsumerOverrideRequestAmino): CreateConsumerOverrideRequest {
    const message = createBaseCreateConsumerOverrideRequest();
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    }
    if (object.override !== undefined && object.override !== null) {
      message.override = QuotaOverride.fromAmino(object.override);
    }
    if (object.force !== undefined && object.force !== null) {
      message.force = object.force;
    }
    message.forceOnly = object.force_only?.map(e => e) || [];
    return message;
  },
  toAmino(message: CreateConsumerOverrideRequest): CreateConsumerOverrideRequestAmino {
    const obj: any = {};
    obj.parent = message.parent === "" ? undefined : message.parent;
    obj.override = message.override ? QuotaOverride.toAmino(message.override) : undefined;
    obj.force = message.force === false ? undefined : message.force;
    if (message.forceOnly) {
      obj.force_only = message.forceOnly.map(e => e);
    } else {
      obj.force_only = message.forceOnly;
    }
    return obj;
  },
  fromAminoMsg(object: CreateConsumerOverrideRequestAminoMsg): CreateConsumerOverrideRequest {
    return CreateConsumerOverrideRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: CreateConsumerOverrideRequestProtoMsg): CreateConsumerOverrideRequest {
    return CreateConsumerOverrideRequest.decode(message.value);
  },
  toProto(message: CreateConsumerOverrideRequest): Uint8Array {
    return CreateConsumerOverrideRequest.encode(message).finish();
  },
  toProtoMsg(message: CreateConsumerOverrideRequest): CreateConsumerOverrideRequestProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.CreateConsumerOverrideRequest",
      value: CreateConsumerOverrideRequest.encode(message).finish()
    };
  }
};
function createBaseUpdateConsumerOverrideRequest(): UpdateConsumerOverrideRequest {
  return {
    name: "",
    override: undefined,
    force: false,
    updateMask: undefined,
    forceOnly: []
  };
}
export const UpdateConsumerOverrideRequest = {
  typeUrl: "/google.api.serviceusage.v1beta1.UpdateConsumerOverrideRequest",
  encode(message: UpdateConsumerOverrideRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.override !== undefined) {
      QuotaOverride.encode(message.override, writer.uint32(18).fork()).ldelim();
    }
    if (message.force === true) {
      writer.uint32(24).bool(message.force);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(42).fork();
    for (const v of message.forceOnly) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateConsumerOverrideRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateConsumerOverrideRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.override = QuotaOverride.decode(reader, reader.uint32());
          break;
        case 3:
          message.force = reader.bool();
          break;
        case 4:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.forceOnly.push((reader.int32() as any));
            }
          } else {
            message.forceOnly.push((reader.int32() as any));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpdateConsumerOverrideRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      override: isSet(object.override) ? QuotaOverride.fromJSON(object.override) : undefined,
      force: isSet(object.force) ? Boolean(object.force) : false,
      updateMask: isSet(object.updateMask) ? FieldMask.fromJSON(object.updateMask) : undefined,
      forceOnly: Array.isArray(object?.forceOnly) ? object.forceOnly.map((e: any) => quotaSafetyCheckFromJSON(e)) : []
    };
  },
  toJSON(message: UpdateConsumerOverrideRequest): JsonSafe<UpdateConsumerOverrideRequest> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.override !== undefined && (obj.override = message.override ? QuotaOverride.toJSON(message.override) : undefined);
    message.force !== undefined && (obj.force = message.force);
    message.updateMask !== undefined && (obj.updateMask = message.updateMask ? FieldMask.toJSON(message.updateMask) : undefined);
    if (message.forceOnly) {
      obj.forceOnly = message.forceOnly.map(e => quotaSafetyCheckToJSON(e));
    } else {
      obj.forceOnly = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<UpdateConsumerOverrideRequest>): UpdateConsumerOverrideRequest {
    const message = createBaseUpdateConsumerOverrideRequest();
    message.name = object.name ?? "";
    message.override = object.override !== undefined && object.override !== null ? QuotaOverride.fromPartial(object.override) : undefined;
    message.force = object.force ?? false;
    message.updateMask = object.updateMask !== undefined && object.updateMask !== null ? FieldMask.fromPartial(object.updateMask) : undefined;
    message.forceOnly = object.forceOnly?.map(e => e) || [];
    return message;
  },
  fromSDK(object: UpdateConsumerOverrideRequestSDKType): UpdateConsumerOverrideRequest {
    return {
      name: object?.name,
      override: object.override ? QuotaOverride.fromSDK(object.override) : undefined,
      force: object?.force,
      updateMask: object.update_mask ? FieldMask.fromSDK(object.update_mask) : undefined,
      forceOnly: Array.isArray(object?.force_only) ? object.force_only.map((e: any) => quotaSafetyCheckFromJSON(e)) : []
    };
  },
  fromSDKJSON(object: any): UpdateConsumerOverrideRequestSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      override: isSet(object.override) ? QuotaOverride.fromSDKJSON(object.override) : undefined,
      force: isSet(object.force) ? Boolean(object.force) : false,
      update_mask: isSet(object.update_mask) ? FieldMask.fromSDKJSON(object.update_mask) : undefined,
      force_only: Array.isArray(object?.force_only) ? object.force_only.map((e: any) => quotaSafetyCheckFromJSON(e)) : []
    };
  },
  toSDK(message: UpdateConsumerOverrideRequest): UpdateConsumerOverrideRequestSDKType {
    const obj: any = {};
    obj.name = message.name;
    message.override !== undefined && (obj.override = message.override ? QuotaOverride.toSDK(message.override) : undefined);
    obj.force = message.force;
    message.updateMask !== undefined && (obj.update_mask = message.updateMask ? FieldMask.toSDK(message.updateMask) : undefined);
    if (message.forceOnly) {
      obj.force_only = message.forceOnly.map(e => quotaSafetyCheckToJSON(e));
    } else {
      obj.force_only = [];
    }
    return obj;
  },
  fromAmino(object: UpdateConsumerOverrideRequestAmino): UpdateConsumerOverrideRequest {
    const message = createBaseUpdateConsumerOverrideRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.override !== undefined && object.override !== null) {
      message.override = QuotaOverride.fromAmino(object.override);
    }
    if (object.force !== undefined && object.force !== null) {
      message.force = object.force;
    }
    if (object.update_mask !== undefined && object.update_mask !== null) {
      message.updateMask = FieldMask.fromAmino(object.update_mask);
    }
    message.forceOnly = object.force_only?.map(e => e) || [];
    return message;
  },
  toAmino(message: UpdateConsumerOverrideRequest): UpdateConsumerOverrideRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.override = message.override ? QuotaOverride.toAmino(message.override) : undefined;
    obj.force = message.force === false ? undefined : message.force;
    obj.update_mask = message.updateMask ? FieldMask.toAmino(message.updateMask) : undefined;
    if (message.forceOnly) {
      obj.force_only = message.forceOnly.map(e => e);
    } else {
      obj.force_only = message.forceOnly;
    }
    return obj;
  },
  fromAminoMsg(object: UpdateConsumerOverrideRequestAminoMsg): UpdateConsumerOverrideRequest {
    return UpdateConsumerOverrideRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateConsumerOverrideRequestProtoMsg): UpdateConsumerOverrideRequest {
    return UpdateConsumerOverrideRequest.decode(message.value);
  },
  toProto(message: UpdateConsumerOverrideRequest): Uint8Array {
    return UpdateConsumerOverrideRequest.encode(message).finish();
  },
  toProtoMsg(message: UpdateConsumerOverrideRequest): UpdateConsumerOverrideRequestProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.UpdateConsumerOverrideRequest",
      value: UpdateConsumerOverrideRequest.encode(message).finish()
    };
  }
};
function createBaseDeleteConsumerOverrideRequest(): DeleteConsumerOverrideRequest {
  return {
    name: "",
    force: false,
    forceOnly: []
  };
}
export const DeleteConsumerOverrideRequest = {
  typeUrl: "/google.api.serviceusage.v1beta1.DeleteConsumerOverrideRequest",
  encode(message: DeleteConsumerOverrideRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.force === true) {
      writer.uint32(16).bool(message.force);
    }
    writer.uint32(26).fork();
    for (const v of message.forceOnly) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DeleteConsumerOverrideRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteConsumerOverrideRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.force = reader.bool();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.forceOnly.push((reader.int32() as any));
            }
          } else {
            message.forceOnly.push((reader.int32() as any));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DeleteConsumerOverrideRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      force: isSet(object.force) ? Boolean(object.force) : false,
      forceOnly: Array.isArray(object?.forceOnly) ? object.forceOnly.map((e: any) => quotaSafetyCheckFromJSON(e)) : []
    };
  },
  toJSON(message: DeleteConsumerOverrideRequest): JsonSafe<DeleteConsumerOverrideRequest> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.force !== undefined && (obj.force = message.force);
    if (message.forceOnly) {
      obj.forceOnly = message.forceOnly.map(e => quotaSafetyCheckToJSON(e));
    } else {
      obj.forceOnly = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<DeleteConsumerOverrideRequest>): DeleteConsumerOverrideRequest {
    const message = createBaseDeleteConsumerOverrideRequest();
    message.name = object.name ?? "";
    message.force = object.force ?? false;
    message.forceOnly = object.forceOnly?.map(e => e) || [];
    return message;
  },
  fromSDK(object: DeleteConsumerOverrideRequestSDKType): DeleteConsumerOverrideRequest {
    return {
      name: object?.name,
      force: object?.force,
      forceOnly: Array.isArray(object?.force_only) ? object.force_only.map((e: any) => quotaSafetyCheckFromJSON(e)) : []
    };
  },
  fromSDKJSON(object: any): DeleteConsumerOverrideRequestSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      force: isSet(object.force) ? Boolean(object.force) : false,
      force_only: Array.isArray(object?.force_only) ? object.force_only.map((e: any) => quotaSafetyCheckFromJSON(e)) : []
    };
  },
  toSDK(message: DeleteConsumerOverrideRequest): DeleteConsumerOverrideRequestSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.force = message.force;
    if (message.forceOnly) {
      obj.force_only = message.forceOnly.map(e => quotaSafetyCheckToJSON(e));
    } else {
      obj.force_only = [];
    }
    return obj;
  },
  fromAmino(object: DeleteConsumerOverrideRequestAmino): DeleteConsumerOverrideRequest {
    const message = createBaseDeleteConsumerOverrideRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.force !== undefined && object.force !== null) {
      message.force = object.force;
    }
    message.forceOnly = object.force_only?.map(e => e) || [];
    return message;
  },
  toAmino(message: DeleteConsumerOverrideRequest): DeleteConsumerOverrideRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.force = message.force === false ? undefined : message.force;
    if (message.forceOnly) {
      obj.force_only = message.forceOnly.map(e => e);
    } else {
      obj.force_only = message.forceOnly;
    }
    return obj;
  },
  fromAminoMsg(object: DeleteConsumerOverrideRequestAminoMsg): DeleteConsumerOverrideRequest {
    return DeleteConsumerOverrideRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: DeleteConsumerOverrideRequestProtoMsg): DeleteConsumerOverrideRequest {
    return DeleteConsumerOverrideRequest.decode(message.value);
  },
  toProto(message: DeleteConsumerOverrideRequest): Uint8Array {
    return DeleteConsumerOverrideRequest.encode(message).finish();
  },
  toProtoMsg(message: DeleteConsumerOverrideRequest): DeleteConsumerOverrideRequestProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.DeleteConsumerOverrideRequest",
      value: DeleteConsumerOverrideRequest.encode(message).finish()
    };
  }
};
function createBaseListConsumerOverridesRequest(): ListConsumerOverridesRequest {
  return {
    parent: "",
    pageSize: 0,
    pageToken: ""
  };
}
export const ListConsumerOverridesRequest = {
  typeUrl: "/google.api.serviceusage.v1beta1.ListConsumerOverridesRequest",
  encode(message: ListConsumerOverridesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListConsumerOverridesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListConsumerOverridesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.pageSize = reader.int32();
          break;
        case 3:
          message.pageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListConsumerOverridesRequest {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? String(object.pageToken) : ""
    };
  },
  toJSON(message: ListConsumerOverridesRequest): JsonSafe<ListConsumerOverridesRequest> {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },
  fromPartial(object: DeepPartial<ListConsumerOverridesRequest>): ListConsumerOverridesRequest {
    const message = createBaseListConsumerOverridesRequest();
    message.parent = object.parent ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
  fromSDK(object: ListConsumerOverridesRequestSDKType): ListConsumerOverridesRequest {
    return {
      parent: object?.parent,
      pageSize: object?.page_size,
      pageToken: object?.page_token
    };
  },
  fromSDKJSON(object: any): ListConsumerOverridesRequestSDKType {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      page_size: isSet(object.page_size) ? Number(object.page_size) : 0,
      page_token: isSet(object.page_token) ? String(object.page_token) : ""
    };
  },
  toSDK(message: ListConsumerOverridesRequest): ListConsumerOverridesRequestSDKType {
    const obj: any = {};
    obj.parent = message.parent;
    obj.page_size = message.pageSize;
    obj.page_token = message.pageToken;
    return obj;
  },
  fromAmino(object: ListConsumerOverridesRequestAmino): ListConsumerOverridesRequest {
    const message = createBaseListConsumerOverridesRequest();
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    }
    if (object.page_size !== undefined && object.page_size !== null) {
      message.pageSize = object.page_size;
    }
    if (object.page_token !== undefined && object.page_token !== null) {
      message.pageToken = object.page_token;
    }
    return message;
  },
  toAmino(message: ListConsumerOverridesRequest): ListConsumerOverridesRequestAmino {
    const obj: any = {};
    obj.parent = message.parent === "" ? undefined : message.parent;
    obj.page_size = message.pageSize === 0 ? undefined : message.pageSize;
    obj.page_token = message.pageToken === "" ? undefined : message.pageToken;
    return obj;
  },
  fromAminoMsg(object: ListConsumerOverridesRequestAminoMsg): ListConsumerOverridesRequest {
    return ListConsumerOverridesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ListConsumerOverridesRequestProtoMsg): ListConsumerOverridesRequest {
    return ListConsumerOverridesRequest.decode(message.value);
  },
  toProto(message: ListConsumerOverridesRequest): Uint8Array {
    return ListConsumerOverridesRequest.encode(message).finish();
  },
  toProtoMsg(message: ListConsumerOverridesRequest): ListConsumerOverridesRequestProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.ListConsumerOverridesRequest",
      value: ListConsumerOverridesRequest.encode(message).finish()
    };
  }
};
function createBaseListConsumerOverridesResponse(): ListConsumerOverridesResponse {
  return {
    overrides: [],
    nextPageToken: ""
  };
}
export const ListConsumerOverridesResponse = {
  typeUrl: "/google.api.serviceusage.v1beta1.ListConsumerOverridesResponse",
  encode(message: ListConsumerOverridesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.overrides) {
      QuotaOverride.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListConsumerOverridesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListConsumerOverridesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.overrides.push(QuotaOverride.decode(reader, reader.uint32()));
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
  fromJSON(object: any): ListConsumerOverridesResponse {
    return {
      overrides: Array.isArray(object?.overrides) ? object.overrides.map((e: any) => QuotaOverride.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? String(object.nextPageToken) : ""
    };
  },
  toJSON(message: ListConsumerOverridesResponse): JsonSafe<ListConsumerOverridesResponse> {
    const obj: any = {};
    if (message.overrides) {
      obj.overrides = message.overrides.map(e => e ? QuotaOverride.toJSON(e) : undefined);
    } else {
      obj.overrides = [];
    }
    message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
    return obj;
  },
  fromPartial(object: DeepPartial<ListConsumerOverridesResponse>): ListConsumerOverridesResponse {
    const message = createBaseListConsumerOverridesResponse();
    message.overrides = object.overrides?.map(e => QuotaOverride.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
  fromSDK(object: ListConsumerOverridesResponseSDKType): ListConsumerOverridesResponse {
    return {
      overrides: Array.isArray(object?.overrides) ? object.overrides.map((e: any) => QuotaOverride.fromSDK(e)) : [],
      nextPageToken: object?.next_page_token
    };
  },
  fromSDKJSON(object: any): ListConsumerOverridesResponseSDKType {
    return {
      overrides: Array.isArray(object?.overrides) ? object.overrides.map((e: any) => QuotaOverride.fromSDKJSON(e)) : [],
      next_page_token: isSet(object.next_page_token) ? String(object.next_page_token) : ""
    };
  },
  toSDK(message: ListConsumerOverridesResponse): ListConsumerOverridesResponseSDKType {
    const obj: any = {};
    if (message.overrides) {
      obj.overrides = message.overrides.map(e => e ? QuotaOverride.toSDK(e) : undefined);
    } else {
      obj.overrides = [];
    }
    obj.next_page_token = message.nextPageToken;
    return obj;
  },
  fromAmino(object: ListConsumerOverridesResponseAmino): ListConsumerOverridesResponse {
    const message = createBaseListConsumerOverridesResponse();
    message.overrides = object.overrides?.map(e => QuotaOverride.fromAmino(e)) || [];
    if (object.next_page_token !== undefined && object.next_page_token !== null) {
      message.nextPageToken = object.next_page_token;
    }
    return message;
  },
  toAmino(message: ListConsumerOverridesResponse): ListConsumerOverridesResponseAmino {
    const obj: any = {};
    if (message.overrides) {
      obj.overrides = message.overrides.map(e => e ? QuotaOverride.toAmino(e) : undefined);
    } else {
      obj.overrides = message.overrides;
    }
    obj.next_page_token = message.nextPageToken === "" ? undefined : message.nextPageToken;
    return obj;
  },
  fromAminoMsg(object: ListConsumerOverridesResponseAminoMsg): ListConsumerOverridesResponse {
    return ListConsumerOverridesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ListConsumerOverridesResponseProtoMsg): ListConsumerOverridesResponse {
    return ListConsumerOverridesResponse.decode(message.value);
  },
  toProto(message: ListConsumerOverridesResponse): Uint8Array {
    return ListConsumerOverridesResponse.encode(message).finish();
  },
  toProtoMsg(message: ListConsumerOverridesResponse): ListConsumerOverridesResponseProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.ListConsumerOverridesResponse",
      value: ListConsumerOverridesResponse.encode(message).finish()
    };
  }
};
function createBaseBatchCreateConsumerOverridesResponse(): BatchCreateConsumerOverridesResponse {
  return {
    overrides: []
  };
}
export const BatchCreateConsumerOverridesResponse = {
  typeUrl: "/google.api.serviceusage.v1beta1.BatchCreateConsumerOverridesResponse",
  encode(message: BatchCreateConsumerOverridesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.overrides) {
      QuotaOverride.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BatchCreateConsumerOverridesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchCreateConsumerOverridesResponse();
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
  fromJSON(object: any): BatchCreateConsumerOverridesResponse {
    return {
      overrides: Array.isArray(object?.overrides) ? object.overrides.map((e: any) => QuotaOverride.fromJSON(e)) : []
    };
  },
  toJSON(message: BatchCreateConsumerOverridesResponse): JsonSafe<BatchCreateConsumerOverridesResponse> {
    const obj: any = {};
    if (message.overrides) {
      obj.overrides = message.overrides.map(e => e ? QuotaOverride.toJSON(e) : undefined);
    } else {
      obj.overrides = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<BatchCreateConsumerOverridesResponse>): BatchCreateConsumerOverridesResponse {
    const message = createBaseBatchCreateConsumerOverridesResponse();
    message.overrides = object.overrides?.map(e => QuotaOverride.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: BatchCreateConsumerOverridesResponseSDKType): BatchCreateConsumerOverridesResponse {
    return {
      overrides: Array.isArray(object?.overrides) ? object.overrides.map((e: any) => QuotaOverride.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): BatchCreateConsumerOverridesResponseSDKType {
    return {
      overrides: Array.isArray(object?.overrides) ? object.overrides.map((e: any) => QuotaOverride.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: BatchCreateConsumerOverridesResponse): BatchCreateConsumerOverridesResponseSDKType {
    const obj: any = {};
    if (message.overrides) {
      obj.overrides = message.overrides.map(e => e ? QuotaOverride.toSDK(e) : undefined);
    } else {
      obj.overrides = [];
    }
    return obj;
  },
  fromAmino(object: BatchCreateConsumerOverridesResponseAmino): BatchCreateConsumerOverridesResponse {
    const message = createBaseBatchCreateConsumerOverridesResponse();
    message.overrides = object.overrides?.map(e => QuotaOverride.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: BatchCreateConsumerOverridesResponse): BatchCreateConsumerOverridesResponseAmino {
    const obj: any = {};
    if (message.overrides) {
      obj.overrides = message.overrides.map(e => e ? QuotaOverride.toAmino(e) : undefined);
    } else {
      obj.overrides = message.overrides;
    }
    return obj;
  },
  fromAminoMsg(object: BatchCreateConsumerOverridesResponseAminoMsg): BatchCreateConsumerOverridesResponse {
    return BatchCreateConsumerOverridesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchCreateConsumerOverridesResponseProtoMsg): BatchCreateConsumerOverridesResponse {
    return BatchCreateConsumerOverridesResponse.decode(message.value);
  },
  toProto(message: BatchCreateConsumerOverridesResponse): Uint8Array {
    return BatchCreateConsumerOverridesResponse.encode(message).finish();
  },
  toProtoMsg(message: BatchCreateConsumerOverridesResponse): BatchCreateConsumerOverridesResponseProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.BatchCreateConsumerOverridesResponse",
      value: BatchCreateConsumerOverridesResponse.encode(message).finish()
    };
  }
};
function createBaseImportConsumerOverridesRequest(): ImportConsumerOverridesRequest {
  return {
    parent: "",
    inlineSource: undefined,
    force: false,
    forceOnly: []
  };
}
export const ImportConsumerOverridesRequest = {
  typeUrl: "/google.api.serviceusage.v1beta1.ImportConsumerOverridesRequest",
  encode(message: ImportConsumerOverridesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.inlineSource !== undefined) {
      OverrideInlineSource.encode(message.inlineSource, writer.uint32(18).fork()).ldelim();
    }
    if (message.force === true) {
      writer.uint32(24).bool(message.force);
    }
    writer.uint32(34).fork();
    for (const v of message.forceOnly) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ImportConsumerOverridesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImportConsumerOverridesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.inlineSource = OverrideInlineSource.decode(reader, reader.uint32());
          break;
        case 3:
          message.force = reader.bool();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.forceOnly.push((reader.int32() as any));
            }
          } else {
            message.forceOnly.push((reader.int32() as any));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ImportConsumerOverridesRequest {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      inlineSource: isSet(object.inlineSource) ? OverrideInlineSource.fromJSON(object.inlineSource) : undefined,
      force: isSet(object.force) ? Boolean(object.force) : false,
      forceOnly: Array.isArray(object?.forceOnly) ? object.forceOnly.map((e: any) => quotaSafetyCheckFromJSON(e)) : []
    };
  },
  toJSON(message: ImportConsumerOverridesRequest): JsonSafe<ImportConsumerOverridesRequest> {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.inlineSource !== undefined && (obj.inlineSource = message.inlineSource ? OverrideInlineSource.toJSON(message.inlineSource) : undefined);
    message.force !== undefined && (obj.force = message.force);
    if (message.forceOnly) {
      obj.forceOnly = message.forceOnly.map(e => quotaSafetyCheckToJSON(e));
    } else {
      obj.forceOnly = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ImportConsumerOverridesRequest>): ImportConsumerOverridesRequest {
    const message = createBaseImportConsumerOverridesRequest();
    message.parent = object.parent ?? "";
    message.inlineSource = object.inlineSource !== undefined && object.inlineSource !== null ? OverrideInlineSource.fromPartial(object.inlineSource) : undefined;
    message.force = object.force ?? false;
    message.forceOnly = object.forceOnly?.map(e => e) || [];
    return message;
  },
  fromSDK(object: ImportConsumerOverridesRequestSDKType): ImportConsumerOverridesRequest {
    return {
      parent: object?.parent,
      inlineSource: object.inline_source ? OverrideInlineSource.fromSDK(object.inline_source) : undefined,
      force: object?.force,
      forceOnly: Array.isArray(object?.force_only) ? object.force_only.map((e: any) => quotaSafetyCheckFromJSON(e)) : []
    };
  },
  fromSDKJSON(object: any): ImportConsumerOverridesRequestSDKType {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      inline_source: isSet(object.inline_source) ? OverrideInlineSource.fromSDKJSON(object.inline_source) : undefined,
      force: isSet(object.force) ? Boolean(object.force) : false,
      force_only: Array.isArray(object?.force_only) ? object.force_only.map((e: any) => quotaSafetyCheckFromJSON(e)) : []
    };
  },
  toSDK(message: ImportConsumerOverridesRequest): ImportConsumerOverridesRequestSDKType {
    const obj: any = {};
    obj.parent = message.parent;
    message.inlineSource !== undefined && (obj.inline_source = message.inlineSource ? OverrideInlineSource.toSDK(message.inlineSource) : undefined);
    obj.force = message.force;
    if (message.forceOnly) {
      obj.force_only = message.forceOnly.map(e => quotaSafetyCheckToJSON(e));
    } else {
      obj.force_only = [];
    }
    return obj;
  },
  fromAmino(object: ImportConsumerOverridesRequestAmino): ImportConsumerOverridesRequest {
    const message = createBaseImportConsumerOverridesRequest();
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    }
    if (object.inline_source !== undefined && object.inline_source !== null) {
      message.inlineSource = OverrideInlineSource.fromAmino(object.inline_source);
    }
    if (object.force !== undefined && object.force !== null) {
      message.force = object.force;
    }
    message.forceOnly = object.force_only?.map(e => e) || [];
    return message;
  },
  toAmino(message: ImportConsumerOverridesRequest): ImportConsumerOverridesRequestAmino {
    const obj: any = {};
    obj.parent = message.parent === "" ? undefined : message.parent;
    obj.inline_source = message.inlineSource ? OverrideInlineSource.toAmino(message.inlineSource) : undefined;
    obj.force = message.force === false ? undefined : message.force;
    if (message.forceOnly) {
      obj.force_only = message.forceOnly.map(e => e);
    } else {
      obj.force_only = message.forceOnly;
    }
    return obj;
  },
  fromAminoMsg(object: ImportConsumerOverridesRequestAminoMsg): ImportConsumerOverridesRequest {
    return ImportConsumerOverridesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ImportConsumerOverridesRequestProtoMsg): ImportConsumerOverridesRequest {
    return ImportConsumerOverridesRequest.decode(message.value);
  },
  toProto(message: ImportConsumerOverridesRequest): Uint8Array {
    return ImportConsumerOverridesRequest.encode(message).finish();
  },
  toProtoMsg(message: ImportConsumerOverridesRequest): ImportConsumerOverridesRequestProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.ImportConsumerOverridesRequest",
      value: ImportConsumerOverridesRequest.encode(message).finish()
    };
  }
};
function createBaseImportConsumerOverridesResponse(): ImportConsumerOverridesResponse {
  return {
    overrides: []
  };
}
export const ImportConsumerOverridesResponse = {
  typeUrl: "/google.api.serviceusage.v1beta1.ImportConsumerOverridesResponse",
  encode(message: ImportConsumerOverridesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.overrides) {
      QuotaOverride.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ImportConsumerOverridesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImportConsumerOverridesResponse();
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
  fromJSON(object: any): ImportConsumerOverridesResponse {
    return {
      overrides: Array.isArray(object?.overrides) ? object.overrides.map((e: any) => QuotaOverride.fromJSON(e)) : []
    };
  },
  toJSON(message: ImportConsumerOverridesResponse): JsonSafe<ImportConsumerOverridesResponse> {
    const obj: any = {};
    if (message.overrides) {
      obj.overrides = message.overrides.map(e => e ? QuotaOverride.toJSON(e) : undefined);
    } else {
      obj.overrides = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ImportConsumerOverridesResponse>): ImportConsumerOverridesResponse {
    const message = createBaseImportConsumerOverridesResponse();
    message.overrides = object.overrides?.map(e => QuotaOverride.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ImportConsumerOverridesResponseSDKType): ImportConsumerOverridesResponse {
    return {
      overrides: Array.isArray(object?.overrides) ? object.overrides.map((e: any) => QuotaOverride.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): ImportConsumerOverridesResponseSDKType {
    return {
      overrides: Array.isArray(object?.overrides) ? object.overrides.map((e: any) => QuotaOverride.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: ImportConsumerOverridesResponse): ImportConsumerOverridesResponseSDKType {
    const obj: any = {};
    if (message.overrides) {
      obj.overrides = message.overrides.map(e => e ? QuotaOverride.toSDK(e) : undefined);
    } else {
      obj.overrides = [];
    }
    return obj;
  },
  fromAmino(object: ImportConsumerOverridesResponseAmino): ImportConsumerOverridesResponse {
    const message = createBaseImportConsumerOverridesResponse();
    message.overrides = object.overrides?.map(e => QuotaOverride.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ImportConsumerOverridesResponse): ImportConsumerOverridesResponseAmino {
    const obj: any = {};
    if (message.overrides) {
      obj.overrides = message.overrides.map(e => e ? QuotaOverride.toAmino(e) : undefined);
    } else {
      obj.overrides = message.overrides;
    }
    return obj;
  },
  fromAminoMsg(object: ImportConsumerOverridesResponseAminoMsg): ImportConsumerOverridesResponse {
    return ImportConsumerOverridesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ImportConsumerOverridesResponseProtoMsg): ImportConsumerOverridesResponse {
    return ImportConsumerOverridesResponse.decode(message.value);
  },
  toProto(message: ImportConsumerOverridesResponse): Uint8Array {
    return ImportConsumerOverridesResponse.encode(message).finish();
  },
  toProtoMsg(message: ImportConsumerOverridesResponse): ImportConsumerOverridesResponseProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.ImportConsumerOverridesResponse",
      value: ImportConsumerOverridesResponse.encode(message).finish()
    };
  }
};
function createBaseImportConsumerOverridesMetadata(): ImportConsumerOverridesMetadata {
  return {};
}
export const ImportConsumerOverridesMetadata = {
  typeUrl: "/google.api.serviceusage.v1beta1.ImportConsumerOverridesMetadata",
  encode(_: ImportConsumerOverridesMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ImportConsumerOverridesMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImportConsumerOverridesMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): ImportConsumerOverridesMetadata {
    return {};
  },
  toJSON(_: ImportConsumerOverridesMetadata): JsonSafe<ImportConsumerOverridesMetadata> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<ImportConsumerOverridesMetadata>): ImportConsumerOverridesMetadata {
    const message = createBaseImportConsumerOverridesMetadata();
    return message;
  },
  fromSDK(_: ImportConsumerOverridesMetadataSDKType): ImportConsumerOverridesMetadata {
    return {};
  },
  fromSDKJSON(_: any): ImportConsumerOverridesMetadataSDKType {
    return {};
  },
  toSDK(_: ImportConsumerOverridesMetadata): ImportConsumerOverridesMetadataSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: ImportConsumerOverridesMetadataAmino): ImportConsumerOverridesMetadata {
    const message = createBaseImportConsumerOverridesMetadata();
    return message;
  },
  toAmino(_: ImportConsumerOverridesMetadata): ImportConsumerOverridesMetadataAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ImportConsumerOverridesMetadataAminoMsg): ImportConsumerOverridesMetadata {
    return ImportConsumerOverridesMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: ImportConsumerOverridesMetadataProtoMsg): ImportConsumerOverridesMetadata {
    return ImportConsumerOverridesMetadata.decode(message.value);
  },
  toProto(message: ImportConsumerOverridesMetadata): Uint8Array {
    return ImportConsumerOverridesMetadata.encode(message).finish();
  },
  toProtoMsg(message: ImportConsumerOverridesMetadata): ImportConsumerOverridesMetadataProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.ImportConsumerOverridesMetadata",
      value: ImportConsumerOverridesMetadata.encode(message).finish()
    };
  }
};
function createBaseImportAdminQuotaPoliciesResponse(): ImportAdminQuotaPoliciesResponse {
  return {
    policies: []
  };
}
export const ImportAdminQuotaPoliciesResponse = {
  typeUrl: "/google.api.serviceusage.v1beta1.ImportAdminQuotaPoliciesResponse",
  encode(message: ImportAdminQuotaPoliciesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.policies) {
      AdminQuotaPolicy.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ImportAdminQuotaPoliciesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImportAdminQuotaPoliciesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policies.push(AdminQuotaPolicy.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ImportAdminQuotaPoliciesResponse {
    return {
      policies: Array.isArray(object?.policies) ? object.policies.map((e: any) => AdminQuotaPolicy.fromJSON(e)) : []
    };
  },
  toJSON(message: ImportAdminQuotaPoliciesResponse): JsonSafe<ImportAdminQuotaPoliciesResponse> {
    const obj: any = {};
    if (message.policies) {
      obj.policies = message.policies.map(e => e ? AdminQuotaPolicy.toJSON(e) : undefined);
    } else {
      obj.policies = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ImportAdminQuotaPoliciesResponse>): ImportAdminQuotaPoliciesResponse {
    const message = createBaseImportAdminQuotaPoliciesResponse();
    message.policies = object.policies?.map(e => AdminQuotaPolicy.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ImportAdminQuotaPoliciesResponseSDKType): ImportAdminQuotaPoliciesResponse {
    return {
      policies: Array.isArray(object?.policies) ? object.policies.map((e: any) => AdminQuotaPolicy.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): ImportAdminQuotaPoliciesResponseSDKType {
    return {
      policies: Array.isArray(object?.policies) ? object.policies.map((e: any) => AdminQuotaPolicy.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: ImportAdminQuotaPoliciesResponse): ImportAdminQuotaPoliciesResponseSDKType {
    const obj: any = {};
    if (message.policies) {
      obj.policies = message.policies.map(e => e ? AdminQuotaPolicy.toSDK(e) : undefined);
    } else {
      obj.policies = [];
    }
    return obj;
  },
  fromAmino(object: ImportAdminQuotaPoliciesResponseAmino): ImportAdminQuotaPoliciesResponse {
    const message = createBaseImportAdminQuotaPoliciesResponse();
    message.policies = object.policies?.map(e => AdminQuotaPolicy.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ImportAdminQuotaPoliciesResponse): ImportAdminQuotaPoliciesResponseAmino {
    const obj: any = {};
    if (message.policies) {
      obj.policies = message.policies.map(e => e ? AdminQuotaPolicy.toAmino(e) : undefined);
    } else {
      obj.policies = message.policies;
    }
    return obj;
  },
  fromAminoMsg(object: ImportAdminQuotaPoliciesResponseAminoMsg): ImportAdminQuotaPoliciesResponse {
    return ImportAdminQuotaPoliciesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ImportAdminQuotaPoliciesResponseProtoMsg): ImportAdminQuotaPoliciesResponse {
    return ImportAdminQuotaPoliciesResponse.decode(message.value);
  },
  toProto(message: ImportAdminQuotaPoliciesResponse): Uint8Array {
    return ImportAdminQuotaPoliciesResponse.encode(message).finish();
  },
  toProtoMsg(message: ImportAdminQuotaPoliciesResponse): ImportAdminQuotaPoliciesResponseProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.ImportAdminQuotaPoliciesResponse",
      value: ImportAdminQuotaPoliciesResponse.encode(message).finish()
    };
  }
};
function createBaseImportAdminQuotaPoliciesMetadata(): ImportAdminQuotaPoliciesMetadata {
  return {};
}
export const ImportAdminQuotaPoliciesMetadata = {
  typeUrl: "/google.api.serviceusage.v1beta1.ImportAdminQuotaPoliciesMetadata",
  encode(_: ImportAdminQuotaPoliciesMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ImportAdminQuotaPoliciesMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImportAdminQuotaPoliciesMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): ImportAdminQuotaPoliciesMetadata {
    return {};
  },
  toJSON(_: ImportAdminQuotaPoliciesMetadata): JsonSafe<ImportAdminQuotaPoliciesMetadata> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<ImportAdminQuotaPoliciesMetadata>): ImportAdminQuotaPoliciesMetadata {
    const message = createBaseImportAdminQuotaPoliciesMetadata();
    return message;
  },
  fromSDK(_: ImportAdminQuotaPoliciesMetadataSDKType): ImportAdminQuotaPoliciesMetadata {
    return {};
  },
  fromSDKJSON(_: any): ImportAdminQuotaPoliciesMetadataSDKType {
    return {};
  },
  toSDK(_: ImportAdminQuotaPoliciesMetadata): ImportAdminQuotaPoliciesMetadataSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: ImportAdminQuotaPoliciesMetadataAmino): ImportAdminQuotaPoliciesMetadata {
    const message = createBaseImportAdminQuotaPoliciesMetadata();
    return message;
  },
  toAmino(_: ImportAdminQuotaPoliciesMetadata): ImportAdminQuotaPoliciesMetadataAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ImportAdminQuotaPoliciesMetadataAminoMsg): ImportAdminQuotaPoliciesMetadata {
    return ImportAdminQuotaPoliciesMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: ImportAdminQuotaPoliciesMetadataProtoMsg): ImportAdminQuotaPoliciesMetadata {
    return ImportAdminQuotaPoliciesMetadata.decode(message.value);
  },
  toProto(message: ImportAdminQuotaPoliciesMetadata): Uint8Array {
    return ImportAdminQuotaPoliciesMetadata.encode(message).finish();
  },
  toProtoMsg(message: ImportAdminQuotaPoliciesMetadata): ImportAdminQuotaPoliciesMetadataProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.ImportAdminQuotaPoliciesMetadata",
      value: ImportAdminQuotaPoliciesMetadata.encode(message).finish()
    };
  }
};
function createBaseCreateAdminQuotaPolicyMetadata(): CreateAdminQuotaPolicyMetadata {
  return {};
}
export const CreateAdminQuotaPolicyMetadata = {
  typeUrl: "/google.api.serviceusage.v1beta1.CreateAdminQuotaPolicyMetadata",
  encode(_: CreateAdminQuotaPolicyMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CreateAdminQuotaPolicyMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAdminQuotaPolicyMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): CreateAdminQuotaPolicyMetadata {
    return {};
  },
  toJSON(_: CreateAdminQuotaPolicyMetadata): JsonSafe<CreateAdminQuotaPolicyMetadata> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<CreateAdminQuotaPolicyMetadata>): CreateAdminQuotaPolicyMetadata {
    const message = createBaseCreateAdminQuotaPolicyMetadata();
    return message;
  },
  fromSDK(_: CreateAdminQuotaPolicyMetadataSDKType): CreateAdminQuotaPolicyMetadata {
    return {};
  },
  fromSDKJSON(_: any): CreateAdminQuotaPolicyMetadataSDKType {
    return {};
  },
  toSDK(_: CreateAdminQuotaPolicyMetadata): CreateAdminQuotaPolicyMetadataSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: CreateAdminQuotaPolicyMetadataAmino): CreateAdminQuotaPolicyMetadata {
    const message = createBaseCreateAdminQuotaPolicyMetadata();
    return message;
  },
  toAmino(_: CreateAdminQuotaPolicyMetadata): CreateAdminQuotaPolicyMetadataAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: CreateAdminQuotaPolicyMetadataAminoMsg): CreateAdminQuotaPolicyMetadata {
    return CreateAdminQuotaPolicyMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: CreateAdminQuotaPolicyMetadataProtoMsg): CreateAdminQuotaPolicyMetadata {
    return CreateAdminQuotaPolicyMetadata.decode(message.value);
  },
  toProto(message: CreateAdminQuotaPolicyMetadata): Uint8Array {
    return CreateAdminQuotaPolicyMetadata.encode(message).finish();
  },
  toProtoMsg(message: CreateAdminQuotaPolicyMetadata): CreateAdminQuotaPolicyMetadataProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.CreateAdminQuotaPolicyMetadata",
      value: CreateAdminQuotaPolicyMetadata.encode(message).finish()
    };
  }
};
function createBaseUpdateAdminQuotaPolicyMetadata(): UpdateAdminQuotaPolicyMetadata {
  return {};
}
export const UpdateAdminQuotaPolicyMetadata = {
  typeUrl: "/google.api.serviceusage.v1beta1.UpdateAdminQuotaPolicyMetadata",
  encode(_: UpdateAdminQuotaPolicyMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateAdminQuotaPolicyMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAdminQuotaPolicyMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): UpdateAdminQuotaPolicyMetadata {
    return {};
  },
  toJSON(_: UpdateAdminQuotaPolicyMetadata): JsonSafe<UpdateAdminQuotaPolicyMetadata> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<UpdateAdminQuotaPolicyMetadata>): UpdateAdminQuotaPolicyMetadata {
    const message = createBaseUpdateAdminQuotaPolicyMetadata();
    return message;
  },
  fromSDK(_: UpdateAdminQuotaPolicyMetadataSDKType): UpdateAdminQuotaPolicyMetadata {
    return {};
  },
  fromSDKJSON(_: any): UpdateAdminQuotaPolicyMetadataSDKType {
    return {};
  },
  toSDK(_: UpdateAdminQuotaPolicyMetadata): UpdateAdminQuotaPolicyMetadataSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: UpdateAdminQuotaPolicyMetadataAmino): UpdateAdminQuotaPolicyMetadata {
    const message = createBaseUpdateAdminQuotaPolicyMetadata();
    return message;
  },
  toAmino(_: UpdateAdminQuotaPolicyMetadata): UpdateAdminQuotaPolicyMetadataAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: UpdateAdminQuotaPolicyMetadataAminoMsg): UpdateAdminQuotaPolicyMetadata {
    return UpdateAdminQuotaPolicyMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateAdminQuotaPolicyMetadataProtoMsg): UpdateAdminQuotaPolicyMetadata {
    return UpdateAdminQuotaPolicyMetadata.decode(message.value);
  },
  toProto(message: UpdateAdminQuotaPolicyMetadata): Uint8Array {
    return UpdateAdminQuotaPolicyMetadata.encode(message).finish();
  },
  toProtoMsg(message: UpdateAdminQuotaPolicyMetadata): UpdateAdminQuotaPolicyMetadataProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.UpdateAdminQuotaPolicyMetadata",
      value: UpdateAdminQuotaPolicyMetadata.encode(message).finish()
    };
  }
};
function createBaseDeleteAdminQuotaPolicyMetadata(): DeleteAdminQuotaPolicyMetadata {
  return {};
}
export const DeleteAdminQuotaPolicyMetadata = {
  typeUrl: "/google.api.serviceusage.v1beta1.DeleteAdminQuotaPolicyMetadata",
  encode(_: DeleteAdminQuotaPolicyMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DeleteAdminQuotaPolicyMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteAdminQuotaPolicyMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): DeleteAdminQuotaPolicyMetadata {
    return {};
  },
  toJSON(_: DeleteAdminQuotaPolicyMetadata): JsonSafe<DeleteAdminQuotaPolicyMetadata> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<DeleteAdminQuotaPolicyMetadata>): DeleteAdminQuotaPolicyMetadata {
    const message = createBaseDeleteAdminQuotaPolicyMetadata();
    return message;
  },
  fromSDK(_: DeleteAdminQuotaPolicyMetadataSDKType): DeleteAdminQuotaPolicyMetadata {
    return {};
  },
  fromSDKJSON(_: any): DeleteAdminQuotaPolicyMetadataSDKType {
    return {};
  },
  toSDK(_: DeleteAdminQuotaPolicyMetadata): DeleteAdminQuotaPolicyMetadataSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: DeleteAdminQuotaPolicyMetadataAmino): DeleteAdminQuotaPolicyMetadata {
    const message = createBaseDeleteAdminQuotaPolicyMetadata();
    return message;
  },
  toAmino(_: DeleteAdminQuotaPolicyMetadata): DeleteAdminQuotaPolicyMetadataAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: DeleteAdminQuotaPolicyMetadataAminoMsg): DeleteAdminQuotaPolicyMetadata {
    return DeleteAdminQuotaPolicyMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: DeleteAdminQuotaPolicyMetadataProtoMsg): DeleteAdminQuotaPolicyMetadata {
    return DeleteAdminQuotaPolicyMetadata.decode(message.value);
  },
  toProto(message: DeleteAdminQuotaPolicyMetadata): Uint8Array {
    return DeleteAdminQuotaPolicyMetadata.encode(message).finish();
  },
  toProtoMsg(message: DeleteAdminQuotaPolicyMetadata): DeleteAdminQuotaPolicyMetadataProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.DeleteAdminQuotaPolicyMetadata",
      value: DeleteAdminQuotaPolicyMetadata.encode(message).finish()
    };
  }
};
function createBaseGenerateServiceIdentityRequest(): GenerateServiceIdentityRequest {
  return {
    parent: ""
  };
}
export const GenerateServiceIdentityRequest = {
  typeUrl: "/google.api.serviceusage.v1beta1.GenerateServiceIdentityRequest",
  encode(message: GenerateServiceIdentityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenerateServiceIdentityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateServiceIdentityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenerateServiceIdentityRequest {
    return {
      parent: isSet(object.parent) ? String(object.parent) : ""
    };
  },
  toJSON(message: GenerateServiceIdentityRequest): JsonSafe<GenerateServiceIdentityRequest> {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    return obj;
  },
  fromPartial(object: DeepPartial<GenerateServiceIdentityRequest>): GenerateServiceIdentityRequest {
    const message = createBaseGenerateServiceIdentityRequest();
    message.parent = object.parent ?? "";
    return message;
  },
  fromSDK(object: GenerateServiceIdentityRequestSDKType): GenerateServiceIdentityRequest {
    return {
      parent: object?.parent
    };
  },
  fromSDKJSON(object: any): GenerateServiceIdentityRequestSDKType {
    return {
      parent: isSet(object.parent) ? String(object.parent) : ""
    };
  },
  toSDK(message: GenerateServiceIdentityRequest): GenerateServiceIdentityRequestSDKType {
    const obj: any = {};
    obj.parent = message.parent;
    return obj;
  },
  fromAmino(object: GenerateServiceIdentityRequestAmino): GenerateServiceIdentityRequest {
    const message = createBaseGenerateServiceIdentityRequest();
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    }
    return message;
  },
  toAmino(message: GenerateServiceIdentityRequest): GenerateServiceIdentityRequestAmino {
    const obj: any = {};
    obj.parent = message.parent === "" ? undefined : message.parent;
    return obj;
  },
  fromAminoMsg(object: GenerateServiceIdentityRequestAminoMsg): GenerateServiceIdentityRequest {
    return GenerateServiceIdentityRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: GenerateServiceIdentityRequestProtoMsg): GenerateServiceIdentityRequest {
    return GenerateServiceIdentityRequest.decode(message.value);
  },
  toProto(message: GenerateServiceIdentityRequest): Uint8Array {
    return GenerateServiceIdentityRequest.encode(message).finish();
  },
  toProtoMsg(message: GenerateServiceIdentityRequest): GenerateServiceIdentityRequestProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.GenerateServiceIdentityRequest",
      value: GenerateServiceIdentityRequest.encode(message).finish()
    };
  }
};
function createBaseGetServiceIdentityResponse(): GetServiceIdentityResponse {
  return {
    identity: undefined,
    state: 0
  };
}
export const GetServiceIdentityResponse = {
  typeUrl: "/google.api.serviceusage.v1beta1.GetServiceIdentityResponse",
  encode(message: GetServiceIdentityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.identity !== undefined) {
      ServiceIdentity.encode(message.identity, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetServiceIdentityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetServiceIdentityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identity = ServiceIdentity.decode(reader, reader.uint32());
          break;
        case 2:
          message.state = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetServiceIdentityResponse {
    return {
      identity: isSet(object.identity) ? ServiceIdentity.fromJSON(object.identity) : undefined,
      state: isSet(object.state) ? getServiceIdentityResponse_IdentityStateFromJSON(object.state) : -1
    };
  },
  toJSON(message: GetServiceIdentityResponse): JsonSafe<GetServiceIdentityResponse> {
    const obj: any = {};
    message.identity !== undefined && (obj.identity = message.identity ? ServiceIdentity.toJSON(message.identity) : undefined);
    message.state !== undefined && (obj.state = getServiceIdentityResponse_IdentityStateToJSON(message.state));
    return obj;
  },
  fromPartial(object: DeepPartial<GetServiceIdentityResponse>): GetServiceIdentityResponse {
    const message = createBaseGetServiceIdentityResponse();
    message.identity = object.identity !== undefined && object.identity !== null ? ServiceIdentity.fromPartial(object.identity) : undefined;
    message.state = object.state ?? 0;
    return message;
  },
  fromSDK(object: GetServiceIdentityResponseSDKType): GetServiceIdentityResponse {
    return {
      identity: object.identity ? ServiceIdentity.fromSDK(object.identity) : undefined,
      state: isSet(object.state) ? getServiceIdentityResponse_IdentityStateFromJSON(object.state) : -1
    };
  },
  fromSDKJSON(object: any): GetServiceIdentityResponseSDKType {
    return {
      identity: isSet(object.identity) ? ServiceIdentity.fromSDKJSON(object.identity) : undefined,
      state: isSet(object.state) ? getServiceIdentityResponse_IdentityStateFromJSON(object.state) : -1
    };
  },
  toSDK(message: GetServiceIdentityResponse): GetServiceIdentityResponseSDKType {
    const obj: any = {};
    message.identity !== undefined && (obj.identity = message.identity ? ServiceIdentity.toSDK(message.identity) : undefined);
    message.state !== undefined && (obj.state = getServiceIdentityResponse_IdentityStateToJSON(message.state));
    return obj;
  },
  fromAmino(object: GetServiceIdentityResponseAmino): GetServiceIdentityResponse {
    const message = createBaseGetServiceIdentityResponse();
    if (object.identity !== undefined && object.identity !== null) {
      message.identity = ServiceIdentity.fromAmino(object.identity);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    return message;
  },
  toAmino(message: GetServiceIdentityResponse): GetServiceIdentityResponseAmino {
    const obj: any = {};
    obj.identity = message.identity ? ServiceIdentity.toAmino(message.identity) : undefined;
    obj.state = message.state === 0 ? undefined : message.state;
    return obj;
  },
  fromAminoMsg(object: GetServiceIdentityResponseAminoMsg): GetServiceIdentityResponse {
    return GetServiceIdentityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: GetServiceIdentityResponseProtoMsg): GetServiceIdentityResponse {
    return GetServiceIdentityResponse.decode(message.value);
  },
  toProto(message: GetServiceIdentityResponse): Uint8Array {
    return GetServiceIdentityResponse.encode(message).finish();
  },
  toProtoMsg(message: GetServiceIdentityResponse): GetServiceIdentityResponseProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.GetServiceIdentityResponse",
      value: GetServiceIdentityResponse.encode(message).finish()
    };
  }
};
function createBaseGetServiceIdentityMetadata(): GetServiceIdentityMetadata {
  return {};
}
export const GetServiceIdentityMetadata = {
  typeUrl: "/google.api.serviceusage.v1beta1.GetServiceIdentityMetadata",
  encode(_: GetServiceIdentityMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetServiceIdentityMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetServiceIdentityMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): GetServiceIdentityMetadata {
    return {};
  },
  toJSON(_: GetServiceIdentityMetadata): JsonSafe<GetServiceIdentityMetadata> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<GetServiceIdentityMetadata>): GetServiceIdentityMetadata {
    const message = createBaseGetServiceIdentityMetadata();
    return message;
  },
  fromSDK(_: GetServiceIdentityMetadataSDKType): GetServiceIdentityMetadata {
    return {};
  },
  fromSDKJSON(_: any): GetServiceIdentityMetadataSDKType {
    return {};
  },
  toSDK(_: GetServiceIdentityMetadata): GetServiceIdentityMetadataSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: GetServiceIdentityMetadataAmino): GetServiceIdentityMetadata {
    const message = createBaseGetServiceIdentityMetadata();
    return message;
  },
  toAmino(_: GetServiceIdentityMetadata): GetServiceIdentityMetadataAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: GetServiceIdentityMetadataAminoMsg): GetServiceIdentityMetadata {
    return GetServiceIdentityMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: GetServiceIdentityMetadataProtoMsg): GetServiceIdentityMetadata {
    return GetServiceIdentityMetadata.decode(message.value);
  },
  toProto(message: GetServiceIdentityMetadata): Uint8Array {
    return GetServiceIdentityMetadata.encode(message).finish();
  },
  toProtoMsg(message: GetServiceIdentityMetadata): GetServiceIdentityMetadataProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.GetServiceIdentityMetadata",
      value: GetServiceIdentityMetadata.encode(message).finish()
    };
  }
};