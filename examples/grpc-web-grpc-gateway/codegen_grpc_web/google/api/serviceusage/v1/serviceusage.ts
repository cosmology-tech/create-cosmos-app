import { Service, ServiceAmino, ServiceSDKType } from "./resources";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../../helpers";
export const protobufPackage = "google.api.serviceusage.v1";
/**
 * Enum to determine if service usage should be checked when disabling a
 * service.
 */
export enum DisableServiceRequest_CheckIfServiceHasUsage {
  /** CHECK_IF_SERVICE_HAS_USAGE_UNSPECIFIED - When unset, the default behavior is used, which is SKIP. */
  CHECK_IF_SERVICE_HAS_USAGE_UNSPECIFIED = 0,
  /** SKIP - If set, skip checking service usage when disabling a service. */
  SKIP = 1,
  /**
   * CHECK - If set, service usage is checked when disabling the service. If a
   * service, or its dependents, has usage in the last 30 days, the request
   * returns a FAILED_PRECONDITION error.
   */
  CHECK = 2,
  UNRECOGNIZED = -1,
}
export const DisableServiceRequest_CheckIfServiceHasUsageSDKType = DisableServiceRequest_CheckIfServiceHasUsage;
export const DisableServiceRequest_CheckIfServiceHasUsageAmino = DisableServiceRequest_CheckIfServiceHasUsage;
export function disableServiceRequest_CheckIfServiceHasUsageFromJSON(object: any): DisableServiceRequest_CheckIfServiceHasUsage {
  switch (object) {
    case 0:
    case "CHECK_IF_SERVICE_HAS_USAGE_UNSPECIFIED":
      return DisableServiceRequest_CheckIfServiceHasUsage.CHECK_IF_SERVICE_HAS_USAGE_UNSPECIFIED;
    case 1:
    case "SKIP":
      return DisableServiceRequest_CheckIfServiceHasUsage.SKIP;
    case 2:
    case "CHECK":
      return DisableServiceRequest_CheckIfServiceHasUsage.CHECK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DisableServiceRequest_CheckIfServiceHasUsage.UNRECOGNIZED;
  }
}
export function disableServiceRequest_CheckIfServiceHasUsageToJSON(object: DisableServiceRequest_CheckIfServiceHasUsage): string {
  switch (object) {
    case DisableServiceRequest_CheckIfServiceHasUsage.CHECK_IF_SERVICE_HAS_USAGE_UNSPECIFIED:
      return "CHECK_IF_SERVICE_HAS_USAGE_UNSPECIFIED";
    case DisableServiceRequest_CheckIfServiceHasUsage.SKIP:
      return "SKIP";
    case DisableServiceRequest_CheckIfServiceHasUsage.CHECK:
      return "CHECK";
    case DisableServiceRequest_CheckIfServiceHasUsage.UNRECOGNIZED:
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
   * `projects/123/services/serviceusage.googleapis.com` where `123` is the
   * project number.
   */
  name: string;
}
export interface EnableServiceRequestProtoMsg {
  typeUrl: "/google.api.serviceusage.v1.EnableServiceRequest";
  value: Uint8Array;
}
/** Request message for the `EnableService` method. */
export interface EnableServiceRequestAmino {
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
   * `projects/123/services/serviceusage.googleapis.com` where `123` is the
   * project number.
   */
  name: string;
}
export interface EnableServiceRequestAminoMsg {
  type: "/google.api.serviceusage.v1.EnableServiceRequest";
  value: EnableServiceRequestAmino;
}
/** Request message for the `EnableService` method. */
export interface EnableServiceRequestSDKType {
  name: string;
}
/**
 * Response message for the `EnableService` method.
 * This response message is assigned to the `response` field of the returned
 * Operation when that operation is done.
 */
export interface EnableServiceResponse {
  /** The new state of the service after enabling. */
  service?: Service;
}
export interface EnableServiceResponseProtoMsg {
  typeUrl: "/google.api.serviceusage.v1.EnableServiceResponse";
  value: Uint8Array;
}
/**
 * Response message for the `EnableService` method.
 * This response message is assigned to the `response` field of the returned
 * Operation when that operation is done.
 */
export interface EnableServiceResponseAmino {
  /** The new state of the service after enabling. */
  service?: ServiceAmino;
}
export interface EnableServiceResponseAminoMsg {
  type: "/google.api.serviceusage.v1.EnableServiceResponse";
  value: EnableServiceResponseAmino;
}
/**
 * Response message for the `EnableService` method.
 * This response message is assigned to the `response` field of the returned
 * Operation when that operation is done.
 */
export interface EnableServiceResponseSDKType {
  service?: ServiceSDKType;
}
/** Request message for the `DisableService` method. */
export interface DisableServiceRequest {
  /**
   * Name of the consumer and service to disable the service on.
   * 
   * The enable and disable methods currently only support projects.
   * 
   * An example name would be:
   * `projects/123/services/serviceusage.googleapis.com` where `123` is the
   * project number.
   */
  name: string;
  /**
   * Indicates if services that are enabled and which depend on this service
   * should also be disabled. If not set, an error will be generated if any
   * enabled services depend on the service to be disabled. When set, the
   * service, and any enabled services that depend on it, will be disabled
   * together.
   */
  disableDependentServices: boolean;
  /** Defines the behavior for checking service usage when disabling a service. */
  checkIfServiceHasUsage: DisableServiceRequest_CheckIfServiceHasUsage;
}
export interface DisableServiceRequestProtoMsg {
  typeUrl: "/google.api.serviceusage.v1.DisableServiceRequest";
  value: Uint8Array;
}
/** Request message for the `DisableService` method. */
export interface DisableServiceRequestAmino {
  /**
   * Name of the consumer and service to disable the service on.
   * 
   * The enable and disable methods currently only support projects.
   * 
   * An example name would be:
   * `projects/123/services/serviceusage.googleapis.com` where `123` is the
   * project number.
   */
  name: string;
  /**
   * Indicates if services that are enabled and which depend on this service
   * should also be disabled. If not set, an error will be generated if any
   * enabled services depend on the service to be disabled. When set, the
   * service, and any enabled services that depend on it, will be disabled
   * together.
   */
  disable_dependent_services: boolean;
  /** Defines the behavior for checking service usage when disabling a service. */
  check_if_service_has_usage: DisableServiceRequest_CheckIfServiceHasUsage;
}
export interface DisableServiceRequestAminoMsg {
  type: "/google.api.serviceusage.v1.DisableServiceRequest";
  value: DisableServiceRequestAmino;
}
/** Request message for the `DisableService` method. */
export interface DisableServiceRequestSDKType {
  name: string;
  disable_dependent_services: boolean;
  check_if_service_has_usage: DisableServiceRequest_CheckIfServiceHasUsage;
}
/**
 * Response message for the `DisableService` method.
 * This response message is assigned to the `response` field of the returned
 * Operation when that operation is done.
 */
export interface DisableServiceResponse {
  /** The new state of the service after disabling. */
  service?: Service;
}
export interface DisableServiceResponseProtoMsg {
  typeUrl: "/google.api.serviceusage.v1.DisableServiceResponse";
  value: Uint8Array;
}
/**
 * Response message for the `DisableService` method.
 * This response message is assigned to the `response` field of the returned
 * Operation when that operation is done.
 */
export interface DisableServiceResponseAmino {
  /** The new state of the service after disabling. */
  service?: ServiceAmino;
}
export interface DisableServiceResponseAminoMsg {
  type: "/google.api.serviceusage.v1.DisableServiceResponse";
  value: DisableServiceResponseAmino;
}
/**
 * Response message for the `DisableService` method.
 * This response message is assigned to the `response` field of the returned
 * Operation when that operation is done.
 */
export interface DisableServiceResponseSDKType {
  service?: ServiceSDKType;
}
/** Request message for the `GetService` method. */
export interface GetServiceRequest {
  /**
   * Name of the consumer and service to get the `ConsumerState` for.
   * 
   * An example name would be:
   * `projects/123/services/serviceusage.googleapis.com` where `123` is the
   * project number.
   */
  name: string;
}
export interface GetServiceRequestProtoMsg {
  typeUrl: "/google.api.serviceusage.v1.GetServiceRequest";
  value: Uint8Array;
}
/** Request message for the `GetService` method. */
export interface GetServiceRequestAmino {
  /**
   * Name of the consumer and service to get the `ConsumerState` for.
   * 
   * An example name would be:
   * `projects/123/services/serviceusage.googleapis.com` where `123` is the
   * project number.
   */
  name: string;
}
export interface GetServiceRequestAminoMsg {
  type: "/google.api.serviceusage.v1.GetServiceRequest";
  value: GetServiceRequestAmino;
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
   * `projects/123` where `123` is the project number.
   */
  parent: string;
  /**
   * Requested size of the next page of data.
   * Requested page size cannot exceed 200.
   * If not set, the default page size is 50.
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
export interface ListServicesRequestProtoMsg {
  typeUrl: "/google.api.serviceusage.v1.ListServicesRequest";
  value: Uint8Array;
}
/** Request message for the `ListServices` method. */
export interface ListServicesRequestAmino {
  /**
   * Parent to search for services on.
   * 
   * An example name would be:
   * `projects/123` where `123` is the project number.
   */
  parent: string;
  /**
   * Requested size of the next page of data.
   * Requested page size cannot exceed 200.
   * If not set, the default page size is 50.
   */
  page_size: number;
  /**
   * Token identifying which result to start with, which is returned by a
   * previous list call.
   */
  page_token: string;
  /**
   * Only list services that conform to the given filter.
   * The allowed filter strings are `state:ENABLED` and `state:DISABLED`.
   */
  filter: string;
}
export interface ListServicesRequestAminoMsg {
  type: "/google.api.serviceusage.v1.ListServicesRequest";
  value: ListServicesRequestAmino;
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
export interface ListServicesResponseProtoMsg {
  typeUrl: "/google.api.serviceusage.v1.ListServicesResponse";
  value: Uint8Array;
}
/** Response message for the `ListServices` method. */
export interface ListServicesResponseAmino {
  /** The available services for the requested project. */
  services: ServiceAmino[];
  /**
   * Token that can be passed to `ListServices` to resume a paginated
   * query.
   */
  next_page_token: string;
}
export interface ListServicesResponseAminoMsg {
  type: "/google.api.serviceusage.v1.ListServicesResponse";
  value: ListServicesResponseAmino;
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
   * `projects/123` where `123` is the project number.
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
   * A single request can enable a maximum of 20 services at a time. If more
   * than 20 services are specified, the request will fail, and no state changes
   * will occur.
   */
  serviceIds: string[];
}
export interface BatchEnableServicesRequestProtoMsg {
  typeUrl: "/google.api.serviceusage.v1.BatchEnableServicesRequest";
  value: Uint8Array;
}
/** Request message for the `BatchEnableServices` method. */
export interface BatchEnableServicesRequestAmino {
  /**
   * Parent to enable services on.
   * 
   * An example name would be:
   * `projects/123` where `123` is the project number.
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
   * A single request can enable a maximum of 20 services at a time. If more
   * than 20 services are specified, the request will fail, and no state changes
   * will occur.
   */
  service_ids: string[];
}
export interface BatchEnableServicesRequestAminoMsg {
  type: "/google.api.serviceusage.v1.BatchEnableServicesRequest";
  value: BatchEnableServicesRequestAmino;
}
/** Request message for the `BatchEnableServices` method. */
export interface BatchEnableServicesRequestSDKType {
  parent: string;
  service_ids: string[];
}
/**
 * Response message for the `BatchEnableServices` method.
 * This response message is assigned to the `response` field of the returned
 * Operation when that operation is done.
 */
export interface BatchEnableServicesResponse {
  /** The new state of the services after enabling. */
  services: Service[];
  /**
   * If allow_partial_success is true, and one or more services could not be
   * enabled, this field contains the details about each failure.
   */
  failures: BatchEnableServicesResponse_EnableFailure[];
}
export interface BatchEnableServicesResponseProtoMsg {
  typeUrl: "/google.api.serviceusage.v1.BatchEnableServicesResponse";
  value: Uint8Array;
}
/**
 * Response message for the `BatchEnableServices` method.
 * This response message is assigned to the `response` field of the returned
 * Operation when that operation is done.
 */
export interface BatchEnableServicesResponseAmino {
  /** The new state of the services after enabling. */
  services: ServiceAmino[];
  /**
   * If allow_partial_success is true, and one or more services could not be
   * enabled, this field contains the details about each failure.
   */
  failures: BatchEnableServicesResponse_EnableFailureAmino[];
}
export interface BatchEnableServicesResponseAminoMsg {
  type: "/google.api.serviceusage.v1.BatchEnableServicesResponse";
  value: BatchEnableServicesResponseAmino;
}
/**
 * Response message for the `BatchEnableServices` method.
 * This response message is assigned to the `response` field of the returned
 * Operation when that operation is done.
 */
export interface BatchEnableServicesResponseSDKType {
  services: ServiceSDKType[];
  failures: BatchEnableServicesResponse_EnableFailureSDKType[];
}
/** Provides error messages for the failing services. */
export interface BatchEnableServicesResponse_EnableFailure {
  /** The service id of a service that could not be enabled. */
  serviceId: string;
  /** An error message describing why the service could not be enabled. */
  errorMessage: string;
}
export interface BatchEnableServicesResponse_EnableFailureProtoMsg {
  typeUrl: "/google.api.serviceusage.v1.EnableFailure";
  value: Uint8Array;
}
/** Provides error messages for the failing services. */
export interface BatchEnableServicesResponse_EnableFailureAmino {
  /** The service id of a service that could not be enabled. */
  service_id: string;
  /** An error message describing why the service could not be enabled. */
  error_message: string;
}
export interface BatchEnableServicesResponse_EnableFailureAminoMsg {
  type: "/google.api.serviceusage.v1.EnableFailure";
  value: BatchEnableServicesResponse_EnableFailureAmino;
}
/** Provides error messages for the failing services. */
export interface BatchEnableServicesResponse_EnableFailureSDKType {
  service_id: string;
  error_message: string;
}
/** Request message for the `BatchGetServices` method. */
export interface BatchGetServicesRequest {
  /**
   * Parent to retrieve services from.
   * If this is set, the parent of all of the services specified in `names` must
   * match this field. An example name would be: `projects/123` where `123` is
   * the project number. The `BatchGetServices` method currently only supports
   * projects.
   */
  parent: string;
  /**
   * Names of the services to retrieve.
   * 
   * An example name would be:
   * `projects/123/services/serviceusage.googleapis.com` where `123` is the
   * project number.
   * A single request can get a maximum of 30 services at a time.
   */
  names: string[];
}
export interface BatchGetServicesRequestProtoMsg {
  typeUrl: "/google.api.serviceusage.v1.BatchGetServicesRequest";
  value: Uint8Array;
}
/** Request message for the `BatchGetServices` method. */
export interface BatchGetServicesRequestAmino {
  /**
   * Parent to retrieve services from.
   * If this is set, the parent of all of the services specified in `names` must
   * match this field. An example name would be: `projects/123` where `123` is
   * the project number. The `BatchGetServices` method currently only supports
   * projects.
   */
  parent: string;
  /**
   * Names of the services to retrieve.
   * 
   * An example name would be:
   * `projects/123/services/serviceusage.googleapis.com` where `123` is the
   * project number.
   * A single request can get a maximum of 30 services at a time.
   */
  names: string[];
}
export interface BatchGetServicesRequestAminoMsg {
  type: "/google.api.serviceusage.v1.BatchGetServicesRequest";
  value: BatchGetServicesRequestAmino;
}
/** Request message for the `BatchGetServices` method. */
export interface BatchGetServicesRequestSDKType {
  parent: string;
  names: string[];
}
/** Response message for the `BatchGetServices` method. */
export interface BatchGetServicesResponse {
  /** The requested Service states. */
  services: Service[];
}
export interface BatchGetServicesResponseProtoMsg {
  typeUrl: "/google.api.serviceusage.v1.BatchGetServicesResponse";
  value: Uint8Array;
}
/** Response message for the `BatchGetServices` method. */
export interface BatchGetServicesResponseAmino {
  /** The requested Service states. */
  services: ServiceAmino[];
}
export interface BatchGetServicesResponseAminoMsg {
  type: "/google.api.serviceusage.v1.BatchGetServicesResponse";
  value: BatchGetServicesResponseAmino;
}
/** Response message for the `BatchGetServices` method. */
export interface BatchGetServicesResponseSDKType {
  services: ServiceSDKType[];
}
function createBaseEnableServiceRequest(): EnableServiceRequest {
  return {
    name: ""
  };
}
export const EnableServiceRequest = {
  typeUrl: "/google.api.serviceusage.v1.EnableServiceRequest",
  encode(message: EnableServiceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EnableServiceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  toJSON(message: EnableServiceRequest): unknown {
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
  toSDK(message: EnableServiceRequest): EnableServiceRequestSDKType {
    const obj: any = {};
    obj.name = message.name;
    return obj;
  },
  fromAmino(object: EnableServiceRequestAmino): EnableServiceRequest {
    return {
      name: object.name
    };
  },
  toAmino(message: EnableServiceRequest): EnableServiceRequestAmino {
    const obj: any = {};
    obj.name = message.name;
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
      typeUrl: "/google.api.serviceusage.v1.EnableServiceRequest",
      value: EnableServiceRequest.encode(message).finish()
    };
  }
};
function createBaseEnableServiceResponse(): EnableServiceResponse {
  return {
    service: undefined
  };
}
export const EnableServiceResponse = {
  typeUrl: "/google.api.serviceusage.v1.EnableServiceResponse",
  encode(message: EnableServiceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.service !== undefined) {
      Service.encode(message.service, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EnableServiceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnableServiceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.service = Service.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EnableServiceResponse {
    return {
      service: isSet(object.service) ? Service.fromJSON(object.service) : undefined
    };
  },
  toJSON(message: EnableServiceResponse): unknown {
    const obj: any = {};
    message.service !== undefined && (obj.service = message.service ? Service.toJSON(message.service) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<EnableServiceResponse>): EnableServiceResponse {
    const message = createBaseEnableServiceResponse();
    message.service = object.service !== undefined && object.service !== null ? Service.fromPartial(object.service) : undefined;
    return message;
  },
  fromSDK(object: EnableServiceResponseSDKType): EnableServiceResponse {
    return {
      service: object.service ? Service.fromSDK(object.service) : undefined
    };
  },
  toSDK(message: EnableServiceResponse): EnableServiceResponseSDKType {
    const obj: any = {};
    message.service !== undefined && (obj.service = message.service ? Service.toSDK(message.service) : undefined);
    return obj;
  },
  fromAmino(object: EnableServiceResponseAmino): EnableServiceResponse {
    return {
      service: object?.service ? Service.fromAmino(object.service) : undefined
    };
  },
  toAmino(message: EnableServiceResponse): EnableServiceResponseAmino {
    const obj: any = {};
    obj.service = message.service ? Service.toAmino(message.service) : undefined;
    return obj;
  },
  fromAminoMsg(object: EnableServiceResponseAminoMsg): EnableServiceResponse {
    return EnableServiceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: EnableServiceResponseProtoMsg): EnableServiceResponse {
    return EnableServiceResponse.decode(message.value);
  },
  toProto(message: EnableServiceResponse): Uint8Array {
    return EnableServiceResponse.encode(message).finish();
  },
  toProtoMsg(message: EnableServiceResponse): EnableServiceResponseProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1.EnableServiceResponse",
      value: EnableServiceResponse.encode(message).finish()
    };
  }
};
function createBaseDisableServiceRequest(): DisableServiceRequest {
  return {
    name: "",
    disableDependentServices: false,
    checkIfServiceHasUsage: 0
  };
}
export const DisableServiceRequest = {
  typeUrl: "/google.api.serviceusage.v1.DisableServiceRequest",
  encode(message: DisableServiceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.disableDependentServices === true) {
      writer.uint32(16).bool(message.disableDependentServices);
    }
    if (message.checkIfServiceHasUsage !== 0) {
      writer.uint32(24).int32(message.checkIfServiceHasUsage);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DisableServiceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisableServiceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.disableDependentServices = reader.bool();
          break;
        case 3:
          message.checkIfServiceHasUsage = (reader.int32() as any);
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
      name: isSet(object.name) ? String(object.name) : "",
      disableDependentServices: isSet(object.disableDependentServices) ? Boolean(object.disableDependentServices) : false,
      checkIfServiceHasUsage: isSet(object.checkIfServiceHasUsage) ? disableServiceRequest_CheckIfServiceHasUsageFromJSON(object.checkIfServiceHasUsage) : 0
    };
  },
  toJSON(message: DisableServiceRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.disableDependentServices !== undefined && (obj.disableDependentServices = message.disableDependentServices);
    message.checkIfServiceHasUsage !== undefined && (obj.checkIfServiceHasUsage = disableServiceRequest_CheckIfServiceHasUsageToJSON(message.checkIfServiceHasUsage));
    return obj;
  },
  fromPartial(object: DeepPartial<DisableServiceRequest>): DisableServiceRequest {
    const message = createBaseDisableServiceRequest();
    message.name = object.name ?? "";
    message.disableDependentServices = object.disableDependentServices ?? false;
    message.checkIfServiceHasUsage = object.checkIfServiceHasUsage ?? 0;
    return message;
  },
  fromSDK(object: DisableServiceRequestSDKType): DisableServiceRequest {
    return {
      name: object?.name,
      disableDependentServices: object?.disable_dependent_services,
      checkIfServiceHasUsage: isSet(object.check_if_service_has_usage) ? disableServiceRequest_CheckIfServiceHasUsageFromJSON(object.check_if_service_has_usage) : 0
    };
  },
  toSDK(message: DisableServiceRequest): DisableServiceRequestSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.disable_dependent_services = message.disableDependentServices;
    message.checkIfServiceHasUsage !== undefined && (obj.check_if_service_has_usage = disableServiceRequest_CheckIfServiceHasUsageToJSON(message.checkIfServiceHasUsage));
    return obj;
  },
  fromAmino(object: DisableServiceRequestAmino): DisableServiceRequest {
    return {
      name: object.name,
      disableDependentServices: object.disable_dependent_services,
      checkIfServiceHasUsage: isSet(object.check_if_service_has_usage) ? disableServiceRequest_CheckIfServiceHasUsageFromJSON(object.check_if_service_has_usage) : 0
    };
  },
  toAmino(message: DisableServiceRequest): DisableServiceRequestAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.disable_dependent_services = message.disableDependentServices;
    obj.check_if_service_has_usage = message.checkIfServiceHasUsage;
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
      typeUrl: "/google.api.serviceusage.v1.DisableServiceRequest",
      value: DisableServiceRequest.encode(message).finish()
    };
  }
};
function createBaseDisableServiceResponse(): DisableServiceResponse {
  return {
    service: undefined
  };
}
export const DisableServiceResponse = {
  typeUrl: "/google.api.serviceusage.v1.DisableServiceResponse",
  encode(message: DisableServiceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.service !== undefined) {
      Service.encode(message.service, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DisableServiceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisableServiceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.service = Service.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DisableServiceResponse {
    return {
      service: isSet(object.service) ? Service.fromJSON(object.service) : undefined
    };
  },
  toJSON(message: DisableServiceResponse): unknown {
    const obj: any = {};
    message.service !== undefined && (obj.service = message.service ? Service.toJSON(message.service) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<DisableServiceResponse>): DisableServiceResponse {
    const message = createBaseDisableServiceResponse();
    message.service = object.service !== undefined && object.service !== null ? Service.fromPartial(object.service) : undefined;
    return message;
  },
  fromSDK(object: DisableServiceResponseSDKType): DisableServiceResponse {
    return {
      service: object.service ? Service.fromSDK(object.service) : undefined
    };
  },
  toSDK(message: DisableServiceResponse): DisableServiceResponseSDKType {
    const obj: any = {};
    message.service !== undefined && (obj.service = message.service ? Service.toSDK(message.service) : undefined);
    return obj;
  },
  fromAmino(object: DisableServiceResponseAmino): DisableServiceResponse {
    return {
      service: object?.service ? Service.fromAmino(object.service) : undefined
    };
  },
  toAmino(message: DisableServiceResponse): DisableServiceResponseAmino {
    const obj: any = {};
    obj.service = message.service ? Service.toAmino(message.service) : undefined;
    return obj;
  },
  fromAminoMsg(object: DisableServiceResponseAminoMsg): DisableServiceResponse {
    return DisableServiceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: DisableServiceResponseProtoMsg): DisableServiceResponse {
    return DisableServiceResponse.decode(message.value);
  },
  toProto(message: DisableServiceResponse): Uint8Array {
    return DisableServiceResponse.encode(message).finish();
  },
  toProtoMsg(message: DisableServiceResponse): DisableServiceResponseProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1.DisableServiceResponse",
      value: DisableServiceResponse.encode(message).finish()
    };
  }
};
function createBaseGetServiceRequest(): GetServiceRequest {
  return {
    name: ""
  };
}
export const GetServiceRequest = {
  typeUrl: "/google.api.serviceusage.v1.GetServiceRequest",
  encode(message: GetServiceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetServiceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  toJSON(message: GetServiceRequest): unknown {
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
  toSDK(message: GetServiceRequest): GetServiceRequestSDKType {
    const obj: any = {};
    obj.name = message.name;
    return obj;
  },
  fromAmino(object: GetServiceRequestAmino): GetServiceRequest {
    return {
      name: object.name
    };
  },
  toAmino(message: GetServiceRequest): GetServiceRequestAmino {
    const obj: any = {};
    obj.name = message.name;
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
      typeUrl: "/google.api.serviceusage.v1.GetServiceRequest",
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
  typeUrl: "/google.api.serviceusage.v1.ListServicesRequest",
  encode(message: ListServicesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): ListServicesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  toJSON(message: ListServicesRequest): unknown {
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
  toSDK(message: ListServicesRequest): ListServicesRequestSDKType {
    const obj: any = {};
    obj.parent = message.parent;
    obj.page_size = message.pageSize;
    obj.page_token = message.pageToken;
    obj.filter = message.filter;
    return obj;
  },
  fromAmino(object: ListServicesRequestAmino): ListServicesRequest {
    return {
      parent: object.parent,
      pageSize: object.page_size,
      pageToken: object.page_token,
      filter: object.filter
    };
  },
  toAmino(message: ListServicesRequest): ListServicesRequestAmino {
    const obj: any = {};
    obj.parent = message.parent;
    obj.page_size = message.pageSize;
    obj.page_token = message.pageToken;
    obj.filter = message.filter;
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
      typeUrl: "/google.api.serviceusage.v1.ListServicesRequest",
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
  typeUrl: "/google.api.serviceusage.v1.ListServicesResponse",
  encode(message: ListServicesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.services) {
      Service.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ListServicesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  toJSON(message: ListServicesResponse): unknown {
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
    return {
      services: Array.isArray(object?.services) ? object.services.map((e: any) => Service.fromAmino(e)) : [],
      nextPageToken: object.next_page_token
    };
  },
  toAmino(message: ListServicesResponse): ListServicesResponseAmino {
    const obj: any = {};
    if (message.services) {
      obj.services = message.services.map(e => e ? Service.toAmino(e) : undefined);
    } else {
      obj.services = [];
    }
    obj.next_page_token = message.nextPageToken;
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
      typeUrl: "/google.api.serviceusage.v1.ListServicesResponse",
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
  typeUrl: "/google.api.serviceusage.v1.BatchEnableServicesRequest",
  encode(message: BatchEnableServicesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    for (const v of message.serviceIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BatchEnableServicesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  toJSON(message: BatchEnableServicesRequest): unknown {
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
    return {
      parent: object.parent,
      serviceIds: Array.isArray(object?.service_ids) ? object.service_ids.map((e: any) => e) : []
    };
  },
  toAmino(message: BatchEnableServicesRequest): BatchEnableServicesRequestAmino {
    const obj: any = {};
    obj.parent = message.parent;
    if (message.serviceIds) {
      obj.service_ids = message.serviceIds.map(e => e);
    } else {
      obj.service_ids = [];
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
      typeUrl: "/google.api.serviceusage.v1.BatchEnableServicesRequest",
      value: BatchEnableServicesRequest.encode(message).finish()
    };
  }
};
function createBaseBatchEnableServicesResponse(): BatchEnableServicesResponse {
  return {
    services: [],
    failures: []
  };
}
export const BatchEnableServicesResponse = {
  typeUrl: "/google.api.serviceusage.v1.BatchEnableServicesResponse",
  encode(message: BatchEnableServicesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.services) {
      Service.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.failures) {
      BatchEnableServicesResponse_EnableFailure.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BatchEnableServicesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchEnableServicesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.services.push(Service.decode(reader, reader.uint32()));
          break;
        case 2:
          message.failures.push(BatchEnableServicesResponse_EnableFailure.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BatchEnableServicesResponse {
    return {
      services: Array.isArray(object?.services) ? object.services.map((e: any) => Service.fromJSON(e)) : [],
      failures: Array.isArray(object?.failures) ? object.failures.map((e: any) => BatchEnableServicesResponse_EnableFailure.fromJSON(e)) : []
    };
  },
  toJSON(message: BatchEnableServicesResponse): unknown {
    const obj: any = {};
    if (message.services) {
      obj.services = message.services.map(e => e ? Service.toJSON(e) : undefined);
    } else {
      obj.services = [];
    }
    if (message.failures) {
      obj.failures = message.failures.map(e => e ? BatchEnableServicesResponse_EnableFailure.toJSON(e) : undefined);
    } else {
      obj.failures = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<BatchEnableServicesResponse>): BatchEnableServicesResponse {
    const message = createBaseBatchEnableServicesResponse();
    message.services = object.services?.map(e => Service.fromPartial(e)) || [];
    message.failures = object.failures?.map(e => BatchEnableServicesResponse_EnableFailure.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: BatchEnableServicesResponseSDKType): BatchEnableServicesResponse {
    return {
      services: Array.isArray(object?.services) ? object.services.map((e: any) => Service.fromSDK(e)) : [],
      failures: Array.isArray(object?.failures) ? object.failures.map((e: any) => BatchEnableServicesResponse_EnableFailure.fromSDK(e)) : []
    };
  },
  toSDK(message: BatchEnableServicesResponse): BatchEnableServicesResponseSDKType {
    const obj: any = {};
    if (message.services) {
      obj.services = message.services.map(e => e ? Service.toSDK(e) : undefined);
    } else {
      obj.services = [];
    }
    if (message.failures) {
      obj.failures = message.failures.map(e => e ? BatchEnableServicesResponse_EnableFailure.toSDK(e) : undefined);
    } else {
      obj.failures = [];
    }
    return obj;
  },
  fromAmino(object: BatchEnableServicesResponseAmino): BatchEnableServicesResponse {
    return {
      services: Array.isArray(object?.services) ? object.services.map((e: any) => Service.fromAmino(e)) : [],
      failures: Array.isArray(object?.failures) ? object.failures.map((e: any) => BatchEnableServicesResponse_EnableFailure.fromAmino(e)) : []
    };
  },
  toAmino(message: BatchEnableServicesResponse): BatchEnableServicesResponseAmino {
    const obj: any = {};
    if (message.services) {
      obj.services = message.services.map(e => e ? Service.toAmino(e) : undefined);
    } else {
      obj.services = [];
    }
    if (message.failures) {
      obj.failures = message.failures.map(e => e ? BatchEnableServicesResponse_EnableFailure.toAmino(e) : undefined);
    } else {
      obj.failures = [];
    }
    return obj;
  },
  fromAminoMsg(object: BatchEnableServicesResponseAminoMsg): BatchEnableServicesResponse {
    return BatchEnableServicesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchEnableServicesResponseProtoMsg): BatchEnableServicesResponse {
    return BatchEnableServicesResponse.decode(message.value);
  },
  toProto(message: BatchEnableServicesResponse): Uint8Array {
    return BatchEnableServicesResponse.encode(message).finish();
  },
  toProtoMsg(message: BatchEnableServicesResponse): BatchEnableServicesResponseProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1.BatchEnableServicesResponse",
      value: BatchEnableServicesResponse.encode(message).finish()
    };
  }
};
function createBaseBatchEnableServicesResponse_EnableFailure(): BatchEnableServicesResponse_EnableFailure {
  return {
    serviceId: "",
    errorMessage: ""
  };
}
export const BatchEnableServicesResponse_EnableFailure = {
  typeUrl: "/google.api.serviceusage.v1.EnableFailure",
  encode(message: BatchEnableServicesResponse_EnableFailure, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceId !== "") {
      writer.uint32(10).string(message.serviceId);
    }
    if (message.errorMessage !== "") {
      writer.uint32(18).string(message.errorMessage);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BatchEnableServicesResponse_EnableFailure {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchEnableServicesResponse_EnableFailure();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceId = reader.string();
          break;
        case 2:
          message.errorMessage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BatchEnableServicesResponse_EnableFailure {
    return {
      serviceId: isSet(object.serviceId) ? String(object.serviceId) : "",
      errorMessage: isSet(object.errorMessage) ? String(object.errorMessage) : ""
    };
  },
  toJSON(message: BatchEnableServicesResponse_EnableFailure): unknown {
    const obj: any = {};
    message.serviceId !== undefined && (obj.serviceId = message.serviceId);
    message.errorMessage !== undefined && (obj.errorMessage = message.errorMessage);
    return obj;
  },
  fromPartial(object: DeepPartial<BatchEnableServicesResponse_EnableFailure>): BatchEnableServicesResponse_EnableFailure {
    const message = createBaseBatchEnableServicesResponse_EnableFailure();
    message.serviceId = object.serviceId ?? "";
    message.errorMessage = object.errorMessage ?? "";
    return message;
  },
  fromSDK(object: BatchEnableServicesResponse_EnableFailureSDKType): BatchEnableServicesResponse_EnableFailure {
    return {
      serviceId: object?.service_id,
      errorMessage: object?.error_message
    };
  },
  toSDK(message: BatchEnableServicesResponse_EnableFailure): BatchEnableServicesResponse_EnableFailureSDKType {
    const obj: any = {};
    obj.service_id = message.serviceId;
    obj.error_message = message.errorMessage;
    return obj;
  },
  fromAmino(object: BatchEnableServicesResponse_EnableFailureAmino): BatchEnableServicesResponse_EnableFailure {
    return {
      serviceId: object.service_id,
      errorMessage: object.error_message
    };
  },
  toAmino(message: BatchEnableServicesResponse_EnableFailure): BatchEnableServicesResponse_EnableFailureAmino {
    const obj: any = {};
    obj.service_id = message.serviceId;
    obj.error_message = message.errorMessage;
    return obj;
  },
  fromAminoMsg(object: BatchEnableServicesResponse_EnableFailureAminoMsg): BatchEnableServicesResponse_EnableFailure {
    return BatchEnableServicesResponse_EnableFailure.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchEnableServicesResponse_EnableFailureProtoMsg): BatchEnableServicesResponse_EnableFailure {
    return BatchEnableServicesResponse_EnableFailure.decode(message.value);
  },
  toProto(message: BatchEnableServicesResponse_EnableFailure): Uint8Array {
    return BatchEnableServicesResponse_EnableFailure.encode(message).finish();
  },
  toProtoMsg(message: BatchEnableServicesResponse_EnableFailure): BatchEnableServicesResponse_EnableFailureProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1.EnableFailure",
      value: BatchEnableServicesResponse_EnableFailure.encode(message).finish()
    };
  }
};
function createBaseBatchGetServicesRequest(): BatchGetServicesRequest {
  return {
    parent: "",
    names: []
  };
}
export const BatchGetServicesRequest = {
  typeUrl: "/google.api.serviceusage.v1.BatchGetServicesRequest",
  encode(message: BatchGetServicesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    for (const v of message.names) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BatchGetServicesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchGetServicesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.names.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BatchGetServicesRequest {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      names: Array.isArray(object?.names) ? object.names.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: BatchGetServicesRequest): unknown {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    if (message.names) {
      obj.names = message.names.map(e => e);
    } else {
      obj.names = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<BatchGetServicesRequest>): BatchGetServicesRequest {
    const message = createBaseBatchGetServicesRequest();
    message.parent = object.parent ?? "";
    message.names = object.names?.map(e => e) || [];
    return message;
  },
  fromSDK(object: BatchGetServicesRequestSDKType): BatchGetServicesRequest {
    return {
      parent: object?.parent,
      names: Array.isArray(object?.names) ? object.names.map((e: any) => e) : []
    };
  },
  toSDK(message: BatchGetServicesRequest): BatchGetServicesRequestSDKType {
    const obj: any = {};
    obj.parent = message.parent;
    if (message.names) {
      obj.names = message.names.map(e => e);
    } else {
      obj.names = [];
    }
    return obj;
  },
  fromAmino(object: BatchGetServicesRequestAmino): BatchGetServicesRequest {
    return {
      parent: object.parent,
      names: Array.isArray(object?.names) ? object.names.map((e: any) => e) : []
    };
  },
  toAmino(message: BatchGetServicesRequest): BatchGetServicesRequestAmino {
    const obj: any = {};
    obj.parent = message.parent;
    if (message.names) {
      obj.names = message.names.map(e => e);
    } else {
      obj.names = [];
    }
    return obj;
  },
  fromAminoMsg(object: BatchGetServicesRequestAminoMsg): BatchGetServicesRequest {
    return BatchGetServicesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchGetServicesRequestProtoMsg): BatchGetServicesRequest {
    return BatchGetServicesRequest.decode(message.value);
  },
  toProto(message: BatchGetServicesRequest): Uint8Array {
    return BatchGetServicesRequest.encode(message).finish();
  },
  toProtoMsg(message: BatchGetServicesRequest): BatchGetServicesRequestProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1.BatchGetServicesRequest",
      value: BatchGetServicesRequest.encode(message).finish()
    };
  }
};
function createBaseBatchGetServicesResponse(): BatchGetServicesResponse {
  return {
    services: []
  };
}
export const BatchGetServicesResponse = {
  typeUrl: "/google.api.serviceusage.v1.BatchGetServicesResponse",
  encode(message: BatchGetServicesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.services) {
      Service.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BatchGetServicesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchGetServicesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.services.push(Service.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BatchGetServicesResponse {
    return {
      services: Array.isArray(object?.services) ? object.services.map((e: any) => Service.fromJSON(e)) : []
    };
  },
  toJSON(message: BatchGetServicesResponse): unknown {
    const obj: any = {};
    if (message.services) {
      obj.services = message.services.map(e => e ? Service.toJSON(e) : undefined);
    } else {
      obj.services = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<BatchGetServicesResponse>): BatchGetServicesResponse {
    const message = createBaseBatchGetServicesResponse();
    message.services = object.services?.map(e => Service.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: BatchGetServicesResponseSDKType): BatchGetServicesResponse {
    return {
      services: Array.isArray(object?.services) ? object.services.map((e: any) => Service.fromSDK(e)) : []
    };
  },
  toSDK(message: BatchGetServicesResponse): BatchGetServicesResponseSDKType {
    const obj: any = {};
    if (message.services) {
      obj.services = message.services.map(e => e ? Service.toSDK(e) : undefined);
    } else {
      obj.services = [];
    }
    return obj;
  },
  fromAmino(object: BatchGetServicesResponseAmino): BatchGetServicesResponse {
    return {
      services: Array.isArray(object?.services) ? object.services.map((e: any) => Service.fromAmino(e)) : []
    };
  },
  toAmino(message: BatchGetServicesResponse): BatchGetServicesResponseAmino {
    const obj: any = {};
    if (message.services) {
      obj.services = message.services.map(e => e ? Service.toAmino(e) : undefined);
    } else {
      obj.services = [];
    }
    return obj;
  },
  fromAminoMsg(object: BatchGetServicesResponseAminoMsg): BatchGetServicesResponse {
    return BatchGetServicesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchGetServicesResponseProtoMsg): BatchGetServicesResponse {
    return BatchGetServicesResponse.decode(message.value);
  },
  toProto(message: BatchGetServicesResponse): Uint8Array {
    return BatchGetServicesResponse.encode(message).finish();
  },
  toProtoMsg(message: BatchGetServicesResponse): BatchGetServicesResponseProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1.BatchGetServicesResponse",
      value: BatchGetServicesResponse.encode(message).finish()
    };
  }
};