import { ManagedService, ManagedServiceSDKType, ConfigSource, ConfigSourceSDKType, Rollout, RolloutSDKType, ChangeReport, ChangeReportSDKType, Diagnostic, DiagnosticSDKType } from "./resources";
import { Service, ServiceSDKType } from "../../service";
import { Any, AnySDKType } from "../../../protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "google.api.servicemanagement.v1";
export enum GetServiceConfigRequest_ConfigView {
  /** BASIC - Server response includes all fields except SourceInfo. */
  BASIC = 0,
  /**
   * FULL - Server response includes all fields including SourceInfo.
   * SourceFiles are of type 'google.api.servicemanagement.v1.ConfigFile'
   * and are only available for configs created using the
   * SubmitConfigSource method.
   */
  FULL = 1,
  UNRECOGNIZED = -1,
}
export const GetServiceConfigRequest_ConfigViewSDKType = GetServiceConfigRequest_ConfigView;
export function getServiceConfigRequest_ConfigViewFromJSON(object: any): GetServiceConfigRequest_ConfigView {
  switch (object) {
    case 0:
    case "BASIC":
      return GetServiceConfigRequest_ConfigView.BASIC;
    case 1:
    case "FULL":
      return GetServiceConfigRequest_ConfigView.FULL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GetServiceConfigRequest_ConfigView.UNRECOGNIZED;
  }
}
export function getServiceConfigRequest_ConfigViewToJSON(object: GetServiceConfigRequest_ConfigView): string {
  switch (object) {
    case GetServiceConfigRequest_ConfigView.BASIC:
      return "BASIC";
    case GetServiceConfigRequest_ConfigView.FULL:
      return "FULL";
    case GetServiceConfigRequest_ConfigView.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Request message for `ListServices` method. */
export interface ListServicesRequest {
  /** Include services produced by the specified project. */
  producerProjectId: string;
  /**
   * The max number of items to include in the response list. Page size is 50
   * if not specified. Maximum value is 100.
   */
  pageSize: number;
  /**
   * Token identifying which result to start with; returned by a previous list
   * call.
   */
  pageToken: string;
  /**
   * Include services consumed by the specified consumer.
   * 
   * The Google Service Management implementation accepts the following
   * forms:
   * - project:<project_id>
   */
  /** @deprecated */
  consumerId: string;
}
export interface ListServicesRequestProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.ListServicesRequest";
  value: Uint8Array;
}
/** Request message for `ListServices` method. */
export interface ListServicesRequestSDKType {
  producer_project_id: string;
  page_size: number;
  page_token: string;
  /** @deprecated */
  consumer_id: string;
}
/** Response message for `ListServices` method. */
export interface ListServicesResponse {
  /** The returned services will only have the name field set. */
  services: ManagedService[];
  /** Token that can be passed to `ListServices` to resume a paginated query. */
  nextPageToken: string;
}
export interface ListServicesResponseProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.ListServicesResponse";
  value: Uint8Array;
}
/** Response message for `ListServices` method. */
export interface ListServicesResponseSDKType {
  services: ManagedServiceSDKType[];
  next_page_token: string;
}
/** Request message for `GetService` method. */
export interface GetServiceRequest {
  /**
   * Required. The name of the service.  See the `ServiceManager` overview for naming
   * requirements.  For example: `example.googleapis.com`.
   */
  serviceName: string;
}
export interface GetServiceRequestProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.GetServiceRequest";
  value: Uint8Array;
}
/** Request message for `GetService` method. */
export interface GetServiceRequestSDKType {
  service_name: string;
}
/** Request message for CreateService method. */
export interface CreateServiceRequest {
  /** Required. Initial values for the service resource. */
  service?: ManagedService;
}
export interface CreateServiceRequestProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.CreateServiceRequest";
  value: Uint8Array;
}
/** Request message for CreateService method. */
export interface CreateServiceRequestSDKType {
  service?: ManagedServiceSDKType;
}
/** Request message for DeleteService method. */
export interface DeleteServiceRequest {
  /**
   * Required. The name of the service.  See the [overview](/service-management/overview)
   * for naming requirements.  For example: `example.googleapis.com`.
   */
  serviceName: string;
}
export interface DeleteServiceRequestProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.DeleteServiceRequest";
  value: Uint8Array;
}
/** Request message for DeleteService method. */
export interface DeleteServiceRequestSDKType {
  service_name: string;
}
/** Request message for UndeleteService method. */
export interface UndeleteServiceRequest {
  /**
   * Required. The name of the service. See the [overview](/service-management/overview)
   * for naming requirements. For example: `example.googleapis.com`.
   */
  serviceName: string;
}
export interface UndeleteServiceRequestProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.UndeleteServiceRequest";
  value: Uint8Array;
}
/** Request message for UndeleteService method. */
export interface UndeleteServiceRequestSDKType {
  service_name: string;
}
/** Response message for UndeleteService method. */
export interface UndeleteServiceResponse {
  /** Revived service resource. */
  service?: ManagedService;
}
export interface UndeleteServiceResponseProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.UndeleteServiceResponse";
  value: Uint8Array;
}
/** Response message for UndeleteService method. */
export interface UndeleteServiceResponseSDKType {
  service?: ManagedServiceSDKType;
}
/** Request message for GetServiceConfig method. */
export interface GetServiceConfigRequest {
  /**
   * Required. The name of the service.  See the [overview](/service-management/overview)
   * for naming requirements.  For example: `example.googleapis.com`.
   */
  serviceName: string;
  /**
   * Required. The id of the service configuration resource.
   * 
   * This field must be specified for the server to return all fields, including
   * `SourceInfo`.
   */
  configId: string;
  /**
   * Specifies which parts of the Service Config should be returned in the
   * response.
   */
  view: GetServiceConfigRequest_ConfigView;
}
export interface GetServiceConfigRequestProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.GetServiceConfigRequest";
  value: Uint8Array;
}
/** Request message for GetServiceConfig method. */
export interface GetServiceConfigRequestSDKType {
  service_name: string;
  config_id: string;
  view: GetServiceConfigRequest_ConfigView;
}
/** Request message for ListServiceConfigs method. */
export interface ListServiceConfigsRequest {
  /**
   * Required. The name of the service.  See the [overview](/service-management/overview)
   * for naming requirements.  For example: `example.googleapis.com`.
   */
  serviceName: string;
  /** The token of the page to retrieve. */
  pageToken: string;
  /**
   * The max number of items to include in the response list. Page size is 50
   * if not specified. Maximum value is 100.
   */
  pageSize: number;
}
export interface ListServiceConfigsRequestProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.ListServiceConfigsRequest";
  value: Uint8Array;
}
/** Request message for ListServiceConfigs method. */
export interface ListServiceConfigsRequestSDKType {
  service_name: string;
  page_token: string;
  page_size: number;
}
/** Response message for ListServiceConfigs method. */
export interface ListServiceConfigsResponse {
  /** The list of service configuration resources. */
  serviceConfigs: Service[];
  /** The token of the next page of results. */
  nextPageToken: string;
}
export interface ListServiceConfigsResponseProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.ListServiceConfigsResponse";
  value: Uint8Array;
}
/** Response message for ListServiceConfigs method. */
export interface ListServiceConfigsResponseSDKType {
  service_configs: ServiceSDKType[];
  next_page_token: string;
}
/** Request message for CreateServiceConfig method. */
export interface CreateServiceConfigRequest {
  /**
   * Required. The name of the service.  See the [overview](/service-management/overview)
   * for naming requirements.  For example: `example.googleapis.com`.
   */
  serviceName: string;
  /** Required. The service configuration resource. */
  serviceConfig?: Service;
}
export interface CreateServiceConfigRequestProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.CreateServiceConfigRequest";
  value: Uint8Array;
}
/** Request message for CreateServiceConfig method. */
export interface CreateServiceConfigRequestSDKType {
  service_name: string;
  service_config?: ServiceSDKType;
}
/** Request message for SubmitConfigSource method. */
export interface SubmitConfigSourceRequest {
  /**
   * Required. The name of the service.  See the [overview](/service-management/overview)
   * for naming requirements.  For example: `example.googleapis.com`.
   */
  serviceName: string;
  /** Required. The source configuration for the service. */
  configSource?: ConfigSource;
  /**
   * Optional. If set, this will result in the generation of a
   * `google.api.Service` configuration based on the `ConfigSource` provided,
   * but the generated config and the sources will NOT be persisted.
   */
  validateOnly: boolean;
}
export interface SubmitConfigSourceRequestProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.SubmitConfigSourceRequest";
  value: Uint8Array;
}
/** Request message for SubmitConfigSource method. */
export interface SubmitConfigSourceRequestSDKType {
  service_name: string;
  config_source?: ConfigSourceSDKType;
  validate_only: boolean;
}
/** Response message for SubmitConfigSource method. */
export interface SubmitConfigSourceResponse {
  /** The generated service configuration. */
  serviceConfig?: Service;
}
export interface SubmitConfigSourceResponseProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.SubmitConfigSourceResponse";
  value: Uint8Array;
}
/** Response message for SubmitConfigSource method. */
export interface SubmitConfigSourceResponseSDKType {
  service_config?: ServiceSDKType;
}
/** Request message for 'CreateServiceRollout' */
export interface CreateServiceRolloutRequest {
  /**
   * Required. The name of the service.  See the [overview](/service-management/overview)
   * for naming requirements.  For example: `example.googleapis.com`.
   */
  serviceName: string;
  /** Required. The rollout resource. The `service_name` field is output only. */
  rollout?: Rollout;
}
export interface CreateServiceRolloutRequestProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.CreateServiceRolloutRequest";
  value: Uint8Array;
}
/** Request message for 'CreateServiceRollout' */
export interface CreateServiceRolloutRequestSDKType {
  service_name: string;
  rollout?: RolloutSDKType;
}
/** Request message for 'ListServiceRollouts' */
export interface ListServiceRolloutsRequest {
  /**
   * Required. The name of the service.  See the [overview](/service-management/overview)
   * for naming requirements.  For example: `example.googleapis.com`.
   */
  serviceName: string;
  /** The token of the page to retrieve. */
  pageToken: string;
  /**
   * The max number of items to include in the response list. Page size is 50
   * if not specified. Maximum value is 100.
   */
  pageSize: number;
  /**
   * Required. Use `filter` to return subset of rollouts.
   * The following filters are supported:
   *   -- To limit the results to only those in
   *      [status](google.api.servicemanagement.v1.RolloutStatus) 'SUCCESS',
   *      use filter='status=SUCCESS'
   *   -- To limit the results to those in
   *      [status](google.api.servicemanagement.v1.RolloutStatus) 'CANCELLED'
   *      or 'FAILED', use filter='status=CANCELLED OR status=FAILED'
   */
  filter: string;
}
export interface ListServiceRolloutsRequestProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.ListServiceRolloutsRequest";
  value: Uint8Array;
}
/** Request message for 'ListServiceRollouts' */
export interface ListServiceRolloutsRequestSDKType {
  service_name: string;
  page_token: string;
  page_size: number;
  filter: string;
}
/** Response message for ListServiceRollouts method. */
export interface ListServiceRolloutsResponse {
  /** The list of rollout resources. */
  rollouts: Rollout[];
  /** The token of the next page of results. */
  nextPageToken: string;
}
export interface ListServiceRolloutsResponseProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.ListServiceRolloutsResponse";
  value: Uint8Array;
}
/** Response message for ListServiceRollouts method. */
export interface ListServiceRolloutsResponseSDKType {
  rollouts: RolloutSDKType[];
  next_page_token: string;
}
/** Request message for GetServiceRollout method. */
export interface GetServiceRolloutRequest {
  /**
   * Required. The name of the service.  See the [overview](/service-management/overview)
   * for naming requirements.  For example: `example.googleapis.com`.
   */
  serviceName: string;
  /** Required. The id of the rollout resource. */
  rolloutId: string;
}
export interface GetServiceRolloutRequestProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.GetServiceRolloutRequest";
  value: Uint8Array;
}
/** Request message for GetServiceRollout method. */
export interface GetServiceRolloutRequestSDKType {
  service_name: string;
  rollout_id: string;
}
/** Request message for GenerateConfigReport method. */
export interface GenerateConfigReportRequest {
  /**
   * Required. Service configuration for which we want to generate the report.
   * For this version of API, the supported types are
   * [google.api.servicemanagement.v1.ConfigRef][google.api.servicemanagement.v1.ConfigRef],
   * [google.api.servicemanagement.v1.ConfigSource][google.api.servicemanagement.v1.ConfigSource],
   * and [google.api.Service][google.api.Service]
   */
  newConfig?: Any;
  /**
   * Optional. Service configuration against which the comparison will be done.
   * For this version of API, the supported types are
   * [google.api.servicemanagement.v1.ConfigRef][google.api.servicemanagement.v1.ConfigRef],
   * [google.api.servicemanagement.v1.ConfigSource][google.api.servicemanagement.v1.ConfigSource],
   * and [google.api.Service][google.api.Service]
   */
  oldConfig?: Any;
}
export interface GenerateConfigReportRequestProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.GenerateConfigReportRequest";
  value: Uint8Array;
}
/** Request message for GenerateConfigReport method. */
export interface GenerateConfigReportRequestSDKType {
  new_config?: AnySDKType;
  old_config?: AnySDKType;
}
/** Response message for GenerateConfigReport method. */
export interface GenerateConfigReportResponse {
  /** Name of the service this report belongs to. */
  serviceName: string;
  /** ID of the service configuration this report belongs to. */
  id: string;
  /**
   * list of ChangeReport, each corresponding to comparison between two
   * service configurations.
   */
  changeReports: ChangeReport[];
  /**
   * Errors / Linter warnings associated with the service definition this
   * report
   * belongs to.
   */
  diagnostics: Diagnostic[];
}
export interface GenerateConfigReportResponseProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.GenerateConfigReportResponse";
  value: Uint8Array;
}
/** Response message for GenerateConfigReport method. */
export interface GenerateConfigReportResponseSDKType {
  service_name: string;
  id: string;
  change_reports: ChangeReportSDKType[];
  diagnostics: DiagnosticSDKType[];
}
function createBaseListServicesRequest(): ListServicesRequest {
  return {
    producerProjectId: "",
    pageSize: 0,
    pageToken: "",
    consumerId: ""
  };
}
export const ListServicesRequest = {
  typeUrl: "/google.api.servicemanagement.v1.ListServicesRequest",
  encode(message: ListServicesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.producerProjectId !== "") {
      writer.uint32(10).string(message.producerProjectId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(40).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(50).string(message.pageToken);
    }
    if (message.consumerId !== "") {
      writer.uint32(58).string(message.consumerId);
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
          message.producerProjectId = reader.string();
          break;
        case 5:
          message.pageSize = reader.int32();
          break;
        case 6:
          message.pageToken = reader.string();
          break;
        case 7:
          message.consumerId = reader.string();
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
      producerProjectId: isSet(object.producerProjectId) ? String(object.producerProjectId) : "",
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? String(object.pageToken) : "",
      consumerId: isSet(object.consumerId) ? String(object.consumerId) : ""
    };
  },
  toJSON(message: ListServicesRequest): JsonSafe<ListServicesRequest> {
    const obj: any = {};
    message.producerProjectId !== undefined && (obj.producerProjectId = message.producerProjectId);
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.consumerId !== undefined && (obj.consumerId = message.consumerId);
    return obj;
  },
  fromPartial(object: DeepPartial<ListServicesRequest>): ListServicesRequest {
    const message = createBaseListServicesRequest();
    message.producerProjectId = object.producerProjectId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.consumerId = object.consumerId ?? "";
    return message;
  },
  fromSDK(object: ListServicesRequestSDKType): ListServicesRequest {
    return {
      producerProjectId: object?.producer_project_id,
      pageSize: object?.page_size,
      pageToken: object?.page_token,
      consumerId: object?.consumer_id
    };
  },
  fromSDKJSON(object: any): ListServicesRequestSDKType {
    return {
      producer_project_id: isSet(object.producer_project_id) ? String(object.producer_project_id) : "",
      page_size: isSet(object.page_size) ? Number(object.page_size) : 0,
      page_token: isSet(object.page_token) ? String(object.page_token) : "",
      consumer_id: isSet(object.consumer_id) ? String(object.consumer_id) : ""
    };
  },
  toSDK(message: ListServicesRequest): ListServicesRequestSDKType {
    const obj: any = {};
    obj.producer_project_id = message.producerProjectId;
    obj.page_size = message.pageSize;
    obj.page_token = message.pageToken;
    obj.consumer_id = message.consumerId;
    return obj;
  },
  fromAmino(object: ListServicesRequestAmino): ListServicesRequest {
    const message = createBaseListServicesRequest();
    if (object.producer_project_id !== undefined && object.producer_project_id !== null) {
      message.producerProjectId = object.producer_project_id;
    }
    if (object.page_size !== undefined && object.page_size !== null) {
      message.pageSize = object.page_size;
    }
    if (object.page_token !== undefined && object.page_token !== null) {
      message.pageToken = object.page_token;
    }
    if (object.consumer_id !== undefined && object.consumer_id !== null) {
      message.consumerId = object.consumer_id;
    }
    return message;
  },
  toAmino(message: ListServicesRequest): ListServicesRequestAmino {
    const obj: any = {};
    obj.producer_project_id = message.producerProjectId === "" ? undefined : message.producerProjectId;
    obj.page_size = message.pageSize === 0 ? undefined : message.pageSize;
    obj.page_token = message.pageToken === "" ? undefined : message.pageToken;
    obj.consumer_id = message.consumerId === "" ? undefined : message.consumerId;
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
      typeUrl: "/google.api.servicemanagement.v1.ListServicesRequest",
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
  typeUrl: "/google.api.servicemanagement.v1.ListServicesResponse",
  encode(message: ListServicesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.services) {
      ManagedService.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.services.push(ManagedService.decode(reader, reader.uint32()));
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
      services: Array.isArray(object?.services) ? object.services.map((e: any) => ManagedService.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? String(object.nextPageToken) : ""
    };
  },
  toJSON(message: ListServicesResponse): JsonSafe<ListServicesResponse> {
    const obj: any = {};
    if (message.services) {
      obj.services = message.services.map(e => e ? ManagedService.toJSON(e) : undefined);
    } else {
      obj.services = [];
    }
    message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
    return obj;
  },
  fromPartial(object: DeepPartial<ListServicesResponse>): ListServicesResponse {
    const message = createBaseListServicesResponse();
    message.services = object.services?.map(e => ManagedService.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
  fromSDK(object: ListServicesResponseSDKType): ListServicesResponse {
    return {
      services: Array.isArray(object?.services) ? object.services.map((e: any) => ManagedService.fromSDK(e)) : [],
      nextPageToken: object?.next_page_token
    };
  },
  fromSDKJSON(object: any): ListServicesResponseSDKType {
    return {
      services: Array.isArray(object?.services) ? object.services.map((e: any) => ManagedService.fromSDKJSON(e)) : [],
      next_page_token: isSet(object.next_page_token) ? String(object.next_page_token) : ""
    };
  },
  toSDK(message: ListServicesResponse): ListServicesResponseSDKType {
    const obj: any = {};
    if (message.services) {
      obj.services = message.services.map(e => e ? ManagedService.toSDK(e) : undefined);
    } else {
      obj.services = [];
    }
    obj.next_page_token = message.nextPageToken;
    return obj;
  },
  fromAmino(object: ListServicesResponseAmino): ListServicesResponse {
    const message = createBaseListServicesResponse();
    message.services = object.services?.map(e => ManagedService.fromAmino(e)) || [];
    if (object.next_page_token !== undefined && object.next_page_token !== null) {
      message.nextPageToken = object.next_page_token;
    }
    return message;
  },
  toAmino(message: ListServicesResponse): ListServicesResponseAmino {
    const obj: any = {};
    if (message.services) {
      obj.services = message.services.map(e => e ? ManagedService.toAmino(e) : undefined);
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
      typeUrl: "/google.api.servicemanagement.v1.ListServicesResponse",
      value: ListServicesResponse.encode(message).finish()
    };
  }
};
function createBaseGetServiceRequest(): GetServiceRequest {
  return {
    serviceName: ""
  };
}
export const GetServiceRequest = {
  typeUrl: "/google.api.servicemanagement.v1.GetServiceRequest",
  encode(message: GetServiceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
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
          message.serviceName = reader.string();
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
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : ""
    };
  },
  toJSON(message: GetServiceRequest): JsonSafe<GetServiceRequest> {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    return obj;
  },
  fromPartial(object: DeepPartial<GetServiceRequest>): GetServiceRequest {
    const message = createBaseGetServiceRequest();
    message.serviceName = object.serviceName ?? "";
    return message;
  },
  fromSDK(object: GetServiceRequestSDKType): GetServiceRequest {
    return {
      serviceName: object?.service_name
    };
  },
  fromSDKJSON(object: any): GetServiceRequestSDKType {
    return {
      service_name: isSet(object.service_name) ? String(object.service_name) : ""
    };
  },
  toSDK(message: GetServiceRequest): GetServiceRequestSDKType {
    const obj: any = {};
    obj.service_name = message.serviceName;
    return obj;
  },
  fromAmino(object: GetServiceRequestAmino): GetServiceRequest {
    const message = createBaseGetServiceRequest();
    if (object.service_name !== undefined && object.service_name !== null) {
      message.serviceName = object.service_name;
    }
    return message;
  },
  toAmino(message: GetServiceRequest): GetServiceRequestAmino {
    const obj: any = {};
    obj.service_name = message.serviceName === "" ? undefined : message.serviceName;
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
      typeUrl: "/google.api.servicemanagement.v1.GetServiceRequest",
      value: GetServiceRequest.encode(message).finish()
    };
  }
};
function createBaseCreateServiceRequest(): CreateServiceRequest {
  return {
    service: undefined
  };
}
export const CreateServiceRequest = {
  typeUrl: "/google.api.servicemanagement.v1.CreateServiceRequest",
  encode(message: CreateServiceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.service !== undefined) {
      ManagedService.encode(message.service, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CreateServiceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateServiceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.service = ManagedService.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CreateServiceRequest {
    return {
      service: isSet(object.service) ? ManagedService.fromJSON(object.service) : undefined
    };
  },
  toJSON(message: CreateServiceRequest): JsonSafe<CreateServiceRequest> {
    const obj: any = {};
    message.service !== undefined && (obj.service = message.service ? ManagedService.toJSON(message.service) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<CreateServiceRequest>): CreateServiceRequest {
    const message = createBaseCreateServiceRequest();
    message.service = object.service !== undefined && object.service !== null ? ManagedService.fromPartial(object.service) : undefined;
    return message;
  },
  fromSDK(object: CreateServiceRequestSDKType): CreateServiceRequest {
    return {
      service: object.service ? ManagedService.fromSDK(object.service) : undefined
    };
  },
  fromSDKJSON(object: any): CreateServiceRequestSDKType {
    return {
      service: isSet(object.service) ? ManagedService.fromSDKJSON(object.service) : undefined
    };
  },
  toSDK(message: CreateServiceRequest): CreateServiceRequestSDKType {
    const obj: any = {};
    message.service !== undefined && (obj.service = message.service ? ManagedService.toSDK(message.service) : undefined);
    return obj;
  },
  fromAmino(object: CreateServiceRequestAmino): CreateServiceRequest {
    const message = createBaseCreateServiceRequest();
    if (object.service !== undefined && object.service !== null) {
      message.service = ManagedService.fromAmino(object.service);
    }
    return message;
  },
  toAmino(message: CreateServiceRequest): CreateServiceRequestAmino {
    const obj: any = {};
    obj.service = message.service ? ManagedService.toAmino(message.service) : undefined;
    return obj;
  },
  fromAminoMsg(object: CreateServiceRequestAminoMsg): CreateServiceRequest {
    return CreateServiceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: CreateServiceRequestProtoMsg): CreateServiceRequest {
    return CreateServiceRequest.decode(message.value);
  },
  toProto(message: CreateServiceRequest): Uint8Array {
    return CreateServiceRequest.encode(message).finish();
  },
  toProtoMsg(message: CreateServiceRequest): CreateServiceRequestProtoMsg {
    return {
      typeUrl: "/google.api.servicemanagement.v1.CreateServiceRequest",
      value: CreateServiceRequest.encode(message).finish()
    };
  }
};
function createBaseDeleteServiceRequest(): DeleteServiceRequest {
  return {
    serviceName: ""
  };
}
export const DeleteServiceRequest = {
  typeUrl: "/google.api.servicemanagement.v1.DeleteServiceRequest",
  encode(message: DeleteServiceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DeleteServiceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteServiceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DeleteServiceRequest {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : ""
    };
  },
  toJSON(message: DeleteServiceRequest): JsonSafe<DeleteServiceRequest> {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    return obj;
  },
  fromPartial(object: DeepPartial<DeleteServiceRequest>): DeleteServiceRequest {
    const message = createBaseDeleteServiceRequest();
    message.serviceName = object.serviceName ?? "";
    return message;
  },
  fromSDK(object: DeleteServiceRequestSDKType): DeleteServiceRequest {
    return {
      serviceName: object?.service_name
    };
  },
  fromSDKJSON(object: any): DeleteServiceRequestSDKType {
    return {
      service_name: isSet(object.service_name) ? String(object.service_name) : ""
    };
  },
  toSDK(message: DeleteServiceRequest): DeleteServiceRequestSDKType {
    const obj: any = {};
    obj.service_name = message.serviceName;
    return obj;
  },
  fromAmino(object: DeleteServiceRequestAmino): DeleteServiceRequest {
    const message = createBaseDeleteServiceRequest();
    if (object.service_name !== undefined && object.service_name !== null) {
      message.serviceName = object.service_name;
    }
    return message;
  },
  toAmino(message: DeleteServiceRequest): DeleteServiceRequestAmino {
    const obj: any = {};
    obj.service_name = message.serviceName === "" ? undefined : message.serviceName;
    return obj;
  },
  fromAminoMsg(object: DeleteServiceRequestAminoMsg): DeleteServiceRequest {
    return DeleteServiceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: DeleteServiceRequestProtoMsg): DeleteServiceRequest {
    return DeleteServiceRequest.decode(message.value);
  },
  toProto(message: DeleteServiceRequest): Uint8Array {
    return DeleteServiceRequest.encode(message).finish();
  },
  toProtoMsg(message: DeleteServiceRequest): DeleteServiceRequestProtoMsg {
    return {
      typeUrl: "/google.api.servicemanagement.v1.DeleteServiceRequest",
      value: DeleteServiceRequest.encode(message).finish()
    };
  }
};
function createBaseUndeleteServiceRequest(): UndeleteServiceRequest {
  return {
    serviceName: ""
  };
}
export const UndeleteServiceRequest = {
  typeUrl: "/google.api.servicemanagement.v1.UndeleteServiceRequest",
  encode(message: UndeleteServiceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UndeleteServiceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndeleteServiceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UndeleteServiceRequest {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : ""
    };
  },
  toJSON(message: UndeleteServiceRequest): JsonSafe<UndeleteServiceRequest> {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    return obj;
  },
  fromPartial(object: DeepPartial<UndeleteServiceRequest>): UndeleteServiceRequest {
    const message = createBaseUndeleteServiceRequest();
    message.serviceName = object.serviceName ?? "";
    return message;
  },
  fromSDK(object: UndeleteServiceRequestSDKType): UndeleteServiceRequest {
    return {
      serviceName: object?.service_name
    };
  },
  fromSDKJSON(object: any): UndeleteServiceRequestSDKType {
    return {
      service_name: isSet(object.service_name) ? String(object.service_name) : ""
    };
  },
  toSDK(message: UndeleteServiceRequest): UndeleteServiceRequestSDKType {
    const obj: any = {};
    obj.service_name = message.serviceName;
    return obj;
  },
  fromAmino(object: UndeleteServiceRequestAmino): UndeleteServiceRequest {
    const message = createBaseUndeleteServiceRequest();
    if (object.service_name !== undefined && object.service_name !== null) {
      message.serviceName = object.service_name;
    }
    return message;
  },
  toAmino(message: UndeleteServiceRequest): UndeleteServiceRequestAmino {
    const obj: any = {};
    obj.service_name = message.serviceName === "" ? undefined : message.serviceName;
    return obj;
  },
  fromAminoMsg(object: UndeleteServiceRequestAminoMsg): UndeleteServiceRequest {
    return UndeleteServiceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: UndeleteServiceRequestProtoMsg): UndeleteServiceRequest {
    return UndeleteServiceRequest.decode(message.value);
  },
  toProto(message: UndeleteServiceRequest): Uint8Array {
    return UndeleteServiceRequest.encode(message).finish();
  },
  toProtoMsg(message: UndeleteServiceRequest): UndeleteServiceRequestProtoMsg {
    return {
      typeUrl: "/google.api.servicemanagement.v1.UndeleteServiceRequest",
      value: UndeleteServiceRequest.encode(message).finish()
    };
  }
};
function createBaseUndeleteServiceResponse(): UndeleteServiceResponse {
  return {
    service: undefined
  };
}
export const UndeleteServiceResponse = {
  typeUrl: "/google.api.servicemanagement.v1.UndeleteServiceResponse",
  encode(message: UndeleteServiceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.service !== undefined) {
      ManagedService.encode(message.service, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UndeleteServiceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndeleteServiceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.service = ManagedService.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UndeleteServiceResponse {
    return {
      service: isSet(object.service) ? ManagedService.fromJSON(object.service) : undefined
    };
  },
  toJSON(message: UndeleteServiceResponse): JsonSafe<UndeleteServiceResponse> {
    const obj: any = {};
    message.service !== undefined && (obj.service = message.service ? ManagedService.toJSON(message.service) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<UndeleteServiceResponse>): UndeleteServiceResponse {
    const message = createBaseUndeleteServiceResponse();
    message.service = object.service !== undefined && object.service !== null ? ManagedService.fromPartial(object.service) : undefined;
    return message;
  },
  fromSDK(object: UndeleteServiceResponseSDKType): UndeleteServiceResponse {
    return {
      service: object.service ? ManagedService.fromSDK(object.service) : undefined
    };
  },
  fromSDKJSON(object: any): UndeleteServiceResponseSDKType {
    return {
      service: isSet(object.service) ? ManagedService.fromSDKJSON(object.service) : undefined
    };
  },
  toSDK(message: UndeleteServiceResponse): UndeleteServiceResponseSDKType {
    const obj: any = {};
    message.service !== undefined && (obj.service = message.service ? ManagedService.toSDK(message.service) : undefined);
    return obj;
  },
  fromAmino(object: UndeleteServiceResponseAmino): UndeleteServiceResponse {
    const message = createBaseUndeleteServiceResponse();
    if (object.service !== undefined && object.service !== null) {
      message.service = ManagedService.fromAmino(object.service);
    }
    return message;
  },
  toAmino(message: UndeleteServiceResponse): UndeleteServiceResponseAmino {
    const obj: any = {};
    obj.service = message.service ? ManagedService.toAmino(message.service) : undefined;
    return obj;
  },
  fromAminoMsg(object: UndeleteServiceResponseAminoMsg): UndeleteServiceResponse {
    return UndeleteServiceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: UndeleteServiceResponseProtoMsg): UndeleteServiceResponse {
    return UndeleteServiceResponse.decode(message.value);
  },
  toProto(message: UndeleteServiceResponse): Uint8Array {
    return UndeleteServiceResponse.encode(message).finish();
  },
  toProtoMsg(message: UndeleteServiceResponse): UndeleteServiceResponseProtoMsg {
    return {
      typeUrl: "/google.api.servicemanagement.v1.UndeleteServiceResponse",
      value: UndeleteServiceResponse.encode(message).finish()
    };
  }
};
function createBaseGetServiceConfigRequest(): GetServiceConfigRequest {
  return {
    serviceName: "",
    configId: "",
    view: 0
  };
}
export const GetServiceConfigRequest = {
  typeUrl: "/google.api.servicemanagement.v1.GetServiceConfigRequest",
  encode(message: GetServiceConfigRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    if (message.configId !== "") {
      writer.uint32(18).string(message.configId);
    }
    if (message.view !== 0) {
      writer.uint32(24).int32(message.view);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetServiceConfigRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetServiceConfigRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;
        case 2:
          message.configId = reader.string();
          break;
        case 3:
          message.view = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetServiceConfigRequest {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      configId: isSet(object.configId) ? String(object.configId) : "",
      view: isSet(object.view) ? getServiceConfigRequest_ConfigViewFromJSON(object.view) : -1
    };
  },
  toJSON(message: GetServiceConfigRequest): JsonSafe<GetServiceConfigRequest> {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.configId !== undefined && (obj.configId = message.configId);
    message.view !== undefined && (obj.view = getServiceConfigRequest_ConfigViewToJSON(message.view));
    return obj;
  },
  fromPartial(object: DeepPartial<GetServiceConfigRequest>): GetServiceConfigRequest {
    const message = createBaseGetServiceConfigRequest();
    message.serviceName = object.serviceName ?? "";
    message.configId = object.configId ?? "";
    message.view = object.view ?? 0;
    return message;
  },
  fromSDK(object: GetServiceConfigRequestSDKType): GetServiceConfigRequest {
    return {
      serviceName: object?.service_name,
      configId: object?.config_id,
      view: isSet(object.view) ? getServiceConfigRequest_ConfigViewFromJSON(object.view) : -1
    };
  },
  fromSDKJSON(object: any): GetServiceConfigRequestSDKType {
    return {
      service_name: isSet(object.service_name) ? String(object.service_name) : "",
      config_id: isSet(object.config_id) ? String(object.config_id) : "",
      view: isSet(object.view) ? getServiceConfigRequest_ConfigViewFromJSON(object.view) : -1
    };
  },
  toSDK(message: GetServiceConfigRequest): GetServiceConfigRequestSDKType {
    const obj: any = {};
    obj.service_name = message.serviceName;
    obj.config_id = message.configId;
    message.view !== undefined && (obj.view = getServiceConfigRequest_ConfigViewToJSON(message.view));
    return obj;
  },
  fromAmino(object: GetServiceConfigRequestAmino): GetServiceConfigRequest {
    const message = createBaseGetServiceConfigRequest();
    if (object.service_name !== undefined && object.service_name !== null) {
      message.serviceName = object.service_name;
    }
    if (object.config_id !== undefined && object.config_id !== null) {
      message.configId = object.config_id;
    }
    if (object.view !== undefined && object.view !== null) {
      message.view = object.view;
    }
    return message;
  },
  toAmino(message: GetServiceConfigRequest): GetServiceConfigRequestAmino {
    const obj: any = {};
    obj.service_name = message.serviceName === "" ? undefined : message.serviceName;
    obj.config_id = message.configId === "" ? undefined : message.configId;
    obj.view = message.view === 0 ? undefined : message.view;
    return obj;
  },
  fromAminoMsg(object: GetServiceConfigRequestAminoMsg): GetServiceConfigRequest {
    return GetServiceConfigRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: GetServiceConfigRequestProtoMsg): GetServiceConfigRequest {
    return GetServiceConfigRequest.decode(message.value);
  },
  toProto(message: GetServiceConfigRequest): Uint8Array {
    return GetServiceConfigRequest.encode(message).finish();
  },
  toProtoMsg(message: GetServiceConfigRequest): GetServiceConfigRequestProtoMsg {
    return {
      typeUrl: "/google.api.servicemanagement.v1.GetServiceConfigRequest",
      value: GetServiceConfigRequest.encode(message).finish()
    };
  }
};
function createBaseListServiceConfigsRequest(): ListServiceConfigsRequest {
  return {
    serviceName: "",
    pageToken: "",
    pageSize: 0
  };
}
export const ListServiceConfigsRequest = {
  typeUrl: "/google.api.servicemanagement.v1.ListServiceConfigsRequest",
  encode(message: ListServiceConfigsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }
    if (message.pageSize !== 0) {
      writer.uint32(24).int32(message.pageSize);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListServiceConfigsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListServiceConfigsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
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
  fromJSON(object: any): ListServiceConfigsRequest {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      pageToken: isSet(object.pageToken) ? String(object.pageToken) : "",
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0
    };
  },
  toJSON(message: ListServiceConfigsRequest): JsonSafe<ListServiceConfigsRequest> {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    return obj;
  },
  fromPartial(object: DeepPartial<ListServiceConfigsRequest>): ListServiceConfigsRequest {
    const message = createBaseListServiceConfigsRequest();
    message.serviceName = object.serviceName ?? "";
    message.pageToken = object.pageToken ?? "";
    message.pageSize = object.pageSize ?? 0;
    return message;
  },
  fromSDK(object: ListServiceConfigsRequestSDKType): ListServiceConfigsRequest {
    return {
      serviceName: object?.service_name,
      pageToken: object?.page_token,
      pageSize: object?.page_size
    };
  },
  fromSDKJSON(object: any): ListServiceConfigsRequestSDKType {
    return {
      service_name: isSet(object.service_name) ? String(object.service_name) : "",
      page_token: isSet(object.page_token) ? String(object.page_token) : "",
      page_size: isSet(object.page_size) ? Number(object.page_size) : 0
    };
  },
  toSDK(message: ListServiceConfigsRequest): ListServiceConfigsRequestSDKType {
    const obj: any = {};
    obj.service_name = message.serviceName;
    obj.page_token = message.pageToken;
    obj.page_size = message.pageSize;
    return obj;
  },
  fromAmino(object: ListServiceConfigsRequestAmino): ListServiceConfigsRequest {
    const message = createBaseListServiceConfigsRequest();
    if (object.service_name !== undefined && object.service_name !== null) {
      message.serviceName = object.service_name;
    }
    if (object.page_token !== undefined && object.page_token !== null) {
      message.pageToken = object.page_token;
    }
    if (object.page_size !== undefined && object.page_size !== null) {
      message.pageSize = object.page_size;
    }
    return message;
  },
  toAmino(message: ListServiceConfigsRequest): ListServiceConfigsRequestAmino {
    const obj: any = {};
    obj.service_name = message.serviceName === "" ? undefined : message.serviceName;
    obj.page_token = message.pageToken === "" ? undefined : message.pageToken;
    obj.page_size = message.pageSize === 0 ? undefined : message.pageSize;
    return obj;
  },
  fromAminoMsg(object: ListServiceConfigsRequestAminoMsg): ListServiceConfigsRequest {
    return ListServiceConfigsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ListServiceConfigsRequestProtoMsg): ListServiceConfigsRequest {
    return ListServiceConfigsRequest.decode(message.value);
  },
  toProto(message: ListServiceConfigsRequest): Uint8Array {
    return ListServiceConfigsRequest.encode(message).finish();
  },
  toProtoMsg(message: ListServiceConfigsRequest): ListServiceConfigsRequestProtoMsg {
    return {
      typeUrl: "/google.api.servicemanagement.v1.ListServiceConfigsRequest",
      value: ListServiceConfigsRequest.encode(message).finish()
    };
  }
};
function createBaseListServiceConfigsResponse(): ListServiceConfigsResponse {
  return {
    serviceConfigs: [],
    nextPageToken: ""
  };
}
export const ListServiceConfigsResponse = {
  typeUrl: "/google.api.servicemanagement.v1.ListServiceConfigsResponse",
  encode(message: ListServiceConfigsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.serviceConfigs) {
      Service.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListServiceConfigsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListServiceConfigsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceConfigs.push(Service.decode(reader, reader.uint32()));
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
  fromJSON(object: any): ListServiceConfigsResponse {
    return {
      serviceConfigs: Array.isArray(object?.serviceConfigs) ? object.serviceConfigs.map((e: any) => Service.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? String(object.nextPageToken) : ""
    };
  },
  toJSON(message: ListServiceConfigsResponse): JsonSafe<ListServiceConfigsResponse> {
    const obj: any = {};
    if (message.serviceConfigs) {
      obj.serviceConfigs = message.serviceConfigs.map(e => e ? Service.toJSON(e) : undefined);
    } else {
      obj.serviceConfigs = [];
    }
    message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
    return obj;
  },
  fromPartial(object: DeepPartial<ListServiceConfigsResponse>): ListServiceConfigsResponse {
    const message = createBaseListServiceConfigsResponse();
    message.serviceConfigs = object.serviceConfigs?.map(e => Service.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
  fromSDK(object: ListServiceConfigsResponseSDKType): ListServiceConfigsResponse {
    return {
      serviceConfigs: Array.isArray(object?.service_configs) ? object.service_configs.map((e: any) => Service.fromSDK(e)) : [],
      nextPageToken: object?.next_page_token
    };
  },
  fromSDKJSON(object: any): ListServiceConfigsResponseSDKType {
    return {
      service_configs: Array.isArray(object?.service_configs) ? object.service_configs.map((e: any) => Service.fromSDKJSON(e)) : [],
      next_page_token: isSet(object.next_page_token) ? String(object.next_page_token) : ""
    };
  },
  toSDK(message: ListServiceConfigsResponse): ListServiceConfigsResponseSDKType {
    const obj: any = {};
    if (message.serviceConfigs) {
      obj.service_configs = message.serviceConfigs.map(e => e ? Service.toSDK(e) : undefined);
    } else {
      obj.service_configs = [];
    }
    obj.next_page_token = message.nextPageToken;
    return obj;
  },
  fromAmino(object: ListServiceConfigsResponseAmino): ListServiceConfigsResponse {
    const message = createBaseListServiceConfigsResponse();
    message.serviceConfigs = object.service_configs?.map(e => Service.fromAmino(e)) || [];
    if (object.next_page_token !== undefined && object.next_page_token !== null) {
      message.nextPageToken = object.next_page_token;
    }
    return message;
  },
  toAmino(message: ListServiceConfigsResponse): ListServiceConfigsResponseAmino {
    const obj: any = {};
    if (message.serviceConfigs) {
      obj.service_configs = message.serviceConfigs.map(e => e ? Service.toAmino(e) : undefined);
    } else {
      obj.service_configs = message.serviceConfigs;
    }
    obj.next_page_token = message.nextPageToken === "" ? undefined : message.nextPageToken;
    return obj;
  },
  fromAminoMsg(object: ListServiceConfigsResponseAminoMsg): ListServiceConfigsResponse {
    return ListServiceConfigsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ListServiceConfigsResponseProtoMsg): ListServiceConfigsResponse {
    return ListServiceConfigsResponse.decode(message.value);
  },
  toProto(message: ListServiceConfigsResponse): Uint8Array {
    return ListServiceConfigsResponse.encode(message).finish();
  },
  toProtoMsg(message: ListServiceConfigsResponse): ListServiceConfigsResponseProtoMsg {
    return {
      typeUrl: "/google.api.servicemanagement.v1.ListServiceConfigsResponse",
      value: ListServiceConfigsResponse.encode(message).finish()
    };
  }
};
function createBaseCreateServiceConfigRequest(): CreateServiceConfigRequest {
  return {
    serviceName: "",
    serviceConfig: undefined
  };
}
export const CreateServiceConfigRequest = {
  typeUrl: "/google.api.servicemanagement.v1.CreateServiceConfigRequest",
  encode(message: CreateServiceConfigRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    if (message.serviceConfig !== undefined) {
      Service.encode(message.serviceConfig, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CreateServiceConfigRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateServiceConfigRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;
        case 2:
          message.serviceConfig = Service.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CreateServiceConfigRequest {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      serviceConfig: isSet(object.serviceConfig) ? Service.fromJSON(object.serviceConfig) : undefined
    };
  },
  toJSON(message: CreateServiceConfigRequest): JsonSafe<CreateServiceConfigRequest> {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.serviceConfig !== undefined && (obj.serviceConfig = message.serviceConfig ? Service.toJSON(message.serviceConfig) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<CreateServiceConfigRequest>): CreateServiceConfigRequest {
    const message = createBaseCreateServiceConfigRequest();
    message.serviceName = object.serviceName ?? "";
    message.serviceConfig = object.serviceConfig !== undefined && object.serviceConfig !== null ? Service.fromPartial(object.serviceConfig) : undefined;
    return message;
  },
  fromSDK(object: CreateServiceConfigRequestSDKType): CreateServiceConfigRequest {
    return {
      serviceName: object?.service_name,
      serviceConfig: object.service_config ? Service.fromSDK(object.service_config) : undefined
    };
  },
  fromSDKJSON(object: any): CreateServiceConfigRequestSDKType {
    return {
      service_name: isSet(object.service_name) ? String(object.service_name) : "",
      service_config: isSet(object.service_config) ? Service.fromSDKJSON(object.service_config) : undefined
    };
  },
  toSDK(message: CreateServiceConfigRequest): CreateServiceConfigRequestSDKType {
    const obj: any = {};
    obj.service_name = message.serviceName;
    message.serviceConfig !== undefined && (obj.service_config = message.serviceConfig ? Service.toSDK(message.serviceConfig) : undefined);
    return obj;
  },
  fromAmino(object: CreateServiceConfigRequestAmino): CreateServiceConfigRequest {
    const message = createBaseCreateServiceConfigRequest();
    if (object.service_name !== undefined && object.service_name !== null) {
      message.serviceName = object.service_name;
    }
    if (object.service_config !== undefined && object.service_config !== null) {
      message.serviceConfig = Service.fromAmino(object.service_config);
    }
    return message;
  },
  toAmino(message: CreateServiceConfigRequest): CreateServiceConfigRequestAmino {
    const obj: any = {};
    obj.service_name = message.serviceName === "" ? undefined : message.serviceName;
    obj.service_config = message.serviceConfig ? Service.toAmino(message.serviceConfig) : undefined;
    return obj;
  },
  fromAminoMsg(object: CreateServiceConfigRequestAminoMsg): CreateServiceConfigRequest {
    return CreateServiceConfigRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: CreateServiceConfigRequestProtoMsg): CreateServiceConfigRequest {
    return CreateServiceConfigRequest.decode(message.value);
  },
  toProto(message: CreateServiceConfigRequest): Uint8Array {
    return CreateServiceConfigRequest.encode(message).finish();
  },
  toProtoMsg(message: CreateServiceConfigRequest): CreateServiceConfigRequestProtoMsg {
    return {
      typeUrl: "/google.api.servicemanagement.v1.CreateServiceConfigRequest",
      value: CreateServiceConfigRequest.encode(message).finish()
    };
  }
};
function createBaseSubmitConfigSourceRequest(): SubmitConfigSourceRequest {
  return {
    serviceName: "",
    configSource: undefined,
    validateOnly: false
  };
}
export const SubmitConfigSourceRequest = {
  typeUrl: "/google.api.servicemanagement.v1.SubmitConfigSourceRequest",
  encode(message: SubmitConfigSourceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    if (message.configSource !== undefined) {
      ConfigSource.encode(message.configSource, writer.uint32(18).fork()).ldelim();
    }
    if (message.validateOnly === true) {
      writer.uint32(24).bool(message.validateOnly);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SubmitConfigSourceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubmitConfigSourceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;
        case 2:
          message.configSource = ConfigSource.decode(reader, reader.uint32());
          break;
        case 3:
          message.validateOnly = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SubmitConfigSourceRequest {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      configSource: isSet(object.configSource) ? ConfigSource.fromJSON(object.configSource) : undefined,
      validateOnly: isSet(object.validateOnly) ? Boolean(object.validateOnly) : false
    };
  },
  toJSON(message: SubmitConfigSourceRequest): JsonSafe<SubmitConfigSourceRequest> {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.configSource !== undefined && (obj.configSource = message.configSource ? ConfigSource.toJSON(message.configSource) : undefined);
    message.validateOnly !== undefined && (obj.validateOnly = message.validateOnly);
    return obj;
  },
  fromPartial(object: DeepPartial<SubmitConfigSourceRequest>): SubmitConfigSourceRequest {
    const message = createBaseSubmitConfigSourceRequest();
    message.serviceName = object.serviceName ?? "";
    message.configSource = object.configSource !== undefined && object.configSource !== null ? ConfigSource.fromPartial(object.configSource) : undefined;
    message.validateOnly = object.validateOnly ?? false;
    return message;
  },
  fromSDK(object: SubmitConfigSourceRequestSDKType): SubmitConfigSourceRequest {
    return {
      serviceName: object?.service_name,
      configSource: object.config_source ? ConfigSource.fromSDK(object.config_source) : undefined,
      validateOnly: object?.validate_only
    };
  },
  fromSDKJSON(object: any): SubmitConfigSourceRequestSDKType {
    return {
      service_name: isSet(object.service_name) ? String(object.service_name) : "",
      config_source: isSet(object.config_source) ? ConfigSource.fromSDKJSON(object.config_source) : undefined,
      validate_only: isSet(object.validate_only) ? Boolean(object.validate_only) : false
    };
  },
  toSDK(message: SubmitConfigSourceRequest): SubmitConfigSourceRequestSDKType {
    const obj: any = {};
    obj.service_name = message.serviceName;
    message.configSource !== undefined && (obj.config_source = message.configSource ? ConfigSource.toSDK(message.configSource) : undefined);
    obj.validate_only = message.validateOnly;
    return obj;
  },
  fromAmino(object: SubmitConfigSourceRequestAmino): SubmitConfigSourceRequest {
    const message = createBaseSubmitConfigSourceRequest();
    if (object.service_name !== undefined && object.service_name !== null) {
      message.serviceName = object.service_name;
    }
    if (object.config_source !== undefined && object.config_source !== null) {
      message.configSource = ConfigSource.fromAmino(object.config_source);
    }
    if (object.validate_only !== undefined && object.validate_only !== null) {
      message.validateOnly = object.validate_only;
    }
    return message;
  },
  toAmino(message: SubmitConfigSourceRequest): SubmitConfigSourceRequestAmino {
    const obj: any = {};
    obj.service_name = message.serviceName === "" ? undefined : message.serviceName;
    obj.config_source = message.configSource ? ConfigSource.toAmino(message.configSource) : undefined;
    obj.validate_only = message.validateOnly === false ? undefined : message.validateOnly;
    return obj;
  },
  fromAminoMsg(object: SubmitConfigSourceRequestAminoMsg): SubmitConfigSourceRequest {
    return SubmitConfigSourceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: SubmitConfigSourceRequestProtoMsg): SubmitConfigSourceRequest {
    return SubmitConfigSourceRequest.decode(message.value);
  },
  toProto(message: SubmitConfigSourceRequest): Uint8Array {
    return SubmitConfigSourceRequest.encode(message).finish();
  },
  toProtoMsg(message: SubmitConfigSourceRequest): SubmitConfigSourceRequestProtoMsg {
    return {
      typeUrl: "/google.api.servicemanagement.v1.SubmitConfigSourceRequest",
      value: SubmitConfigSourceRequest.encode(message).finish()
    };
  }
};
function createBaseSubmitConfigSourceResponse(): SubmitConfigSourceResponse {
  return {
    serviceConfig: undefined
  };
}
export const SubmitConfigSourceResponse = {
  typeUrl: "/google.api.servicemanagement.v1.SubmitConfigSourceResponse",
  encode(message: SubmitConfigSourceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceConfig !== undefined) {
      Service.encode(message.serviceConfig, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SubmitConfigSourceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubmitConfigSourceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceConfig = Service.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SubmitConfigSourceResponse {
    return {
      serviceConfig: isSet(object.serviceConfig) ? Service.fromJSON(object.serviceConfig) : undefined
    };
  },
  toJSON(message: SubmitConfigSourceResponse): JsonSafe<SubmitConfigSourceResponse> {
    const obj: any = {};
    message.serviceConfig !== undefined && (obj.serviceConfig = message.serviceConfig ? Service.toJSON(message.serviceConfig) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<SubmitConfigSourceResponse>): SubmitConfigSourceResponse {
    const message = createBaseSubmitConfigSourceResponse();
    message.serviceConfig = object.serviceConfig !== undefined && object.serviceConfig !== null ? Service.fromPartial(object.serviceConfig) : undefined;
    return message;
  },
  fromSDK(object: SubmitConfigSourceResponseSDKType): SubmitConfigSourceResponse {
    return {
      serviceConfig: object.service_config ? Service.fromSDK(object.service_config) : undefined
    };
  },
  fromSDKJSON(object: any): SubmitConfigSourceResponseSDKType {
    return {
      service_config: isSet(object.service_config) ? Service.fromSDKJSON(object.service_config) : undefined
    };
  },
  toSDK(message: SubmitConfigSourceResponse): SubmitConfigSourceResponseSDKType {
    const obj: any = {};
    message.serviceConfig !== undefined && (obj.service_config = message.serviceConfig ? Service.toSDK(message.serviceConfig) : undefined);
    return obj;
  },
  fromAmino(object: SubmitConfigSourceResponseAmino): SubmitConfigSourceResponse {
    const message = createBaseSubmitConfigSourceResponse();
    if (object.service_config !== undefined && object.service_config !== null) {
      message.serviceConfig = Service.fromAmino(object.service_config);
    }
    return message;
  },
  toAmino(message: SubmitConfigSourceResponse): SubmitConfigSourceResponseAmino {
    const obj: any = {};
    obj.service_config = message.serviceConfig ? Service.toAmino(message.serviceConfig) : undefined;
    return obj;
  },
  fromAminoMsg(object: SubmitConfigSourceResponseAminoMsg): SubmitConfigSourceResponse {
    return SubmitConfigSourceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: SubmitConfigSourceResponseProtoMsg): SubmitConfigSourceResponse {
    return SubmitConfigSourceResponse.decode(message.value);
  },
  toProto(message: SubmitConfigSourceResponse): Uint8Array {
    return SubmitConfigSourceResponse.encode(message).finish();
  },
  toProtoMsg(message: SubmitConfigSourceResponse): SubmitConfigSourceResponseProtoMsg {
    return {
      typeUrl: "/google.api.servicemanagement.v1.SubmitConfigSourceResponse",
      value: SubmitConfigSourceResponse.encode(message).finish()
    };
  }
};
function createBaseCreateServiceRolloutRequest(): CreateServiceRolloutRequest {
  return {
    serviceName: "",
    rollout: undefined
  };
}
export const CreateServiceRolloutRequest = {
  typeUrl: "/google.api.servicemanagement.v1.CreateServiceRolloutRequest",
  encode(message: CreateServiceRolloutRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    if (message.rollout !== undefined) {
      Rollout.encode(message.rollout, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CreateServiceRolloutRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateServiceRolloutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;
        case 2:
          message.rollout = Rollout.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CreateServiceRolloutRequest {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      rollout: isSet(object.rollout) ? Rollout.fromJSON(object.rollout) : undefined
    };
  },
  toJSON(message: CreateServiceRolloutRequest): JsonSafe<CreateServiceRolloutRequest> {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.rollout !== undefined && (obj.rollout = message.rollout ? Rollout.toJSON(message.rollout) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<CreateServiceRolloutRequest>): CreateServiceRolloutRequest {
    const message = createBaseCreateServiceRolloutRequest();
    message.serviceName = object.serviceName ?? "";
    message.rollout = object.rollout !== undefined && object.rollout !== null ? Rollout.fromPartial(object.rollout) : undefined;
    return message;
  },
  fromSDK(object: CreateServiceRolloutRequestSDKType): CreateServiceRolloutRequest {
    return {
      serviceName: object?.service_name,
      rollout: object.rollout ? Rollout.fromSDK(object.rollout) : undefined
    };
  },
  fromSDKJSON(object: any): CreateServiceRolloutRequestSDKType {
    return {
      service_name: isSet(object.service_name) ? String(object.service_name) : "",
      rollout: isSet(object.rollout) ? Rollout.fromSDKJSON(object.rollout) : undefined
    };
  },
  toSDK(message: CreateServiceRolloutRequest): CreateServiceRolloutRequestSDKType {
    const obj: any = {};
    obj.service_name = message.serviceName;
    message.rollout !== undefined && (obj.rollout = message.rollout ? Rollout.toSDK(message.rollout) : undefined);
    return obj;
  },
  fromAmino(object: CreateServiceRolloutRequestAmino): CreateServiceRolloutRequest {
    const message = createBaseCreateServiceRolloutRequest();
    if (object.service_name !== undefined && object.service_name !== null) {
      message.serviceName = object.service_name;
    }
    if (object.rollout !== undefined && object.rollout !== null) {
      message.rollout = Rollout.fromAmino(object.rollout);
    }
    return message;
  },
  toAmino(message: CreateServiceRolloutRequest): CreateServiceRolloutRequestAmino {
    const obj: any = {};
    obj.service_name = message.serviceName === "" ? undefined : message.serviceName;
    obj.rollout = message.rollout ? Rollout.toAmino(message.rollout) : undefined;
    return obj;
  },
  fromAminoMsg(object: CreateServiceRolloutRequestAminoMsg): CreateServiceRolloutRequest {
    return CreateServiceRolloutRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: CreateServiceRolloutRequestProtoMsg): CreateServiceRolloutRequest {
    return CreateServiceRolloutRequest.decode(message.value);
  },
  toProto(message: CreateServiceRolloutRequest): Uint8Array {
    return CreateServiceRolloutRequest.encode(message).finish();
  },
  toProtoMsg(message: CreateServiceRolloutRequest): CreateServiceRolloutRequestProtoMsg {
    return {
      typeUrl: "/google.api.servicemanagement.v1.CreateServiceRolloutRequest",
      value: CreateServiceRolloutRequest.encode(message).finish()
    };
  }
};
function createBaseListServiceRolloutsRequest(): ListServiceRolloutsRequest {
  return {
    serviceName: "",
    pageToken: "",
    pageSize: 0,
    filter: ""
  };
}
export const ListServiceRolloutsRequest = {
  typeUrl: "/google.api.servicemanagement.v1.ListServiceRolloutsRequest",
  encode(message: ListServiceRolloutsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }
    if (message.pageSize !== 0) {
      writer.uint32(24).int32(message.pageSize);
    }
    if (message.filter !== "") {
      writer.uint32(34).string(message.filter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListServiceRolloutsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListServiceRolloutsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;
        case 2:
          message.pageToken = reader.string();
          break;
        case 3:
          message.pageSize = reader.int32();
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
  fromJSON(object: any): ListServiceRolloutsRequest {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      pageToken: isSet(object.pageToken) ? String(object.pageToken) : "",
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
      filter: isSet(object.filter) ? String(object.filter) : ""
    };
  },
  toJSON(message: ListServiceRolloutsRequest): JsonSafe<ListServiceRolloutsRequest> {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },
  fromPartial(object: DeepPartial<ListServiceRolloutsRequest>): ListServiceRolloutsRequest {
    const message = createBaseListServiceRolloutsRequest();
    message.serviceName = object.serviceName ?? "";
    message.pageToken = object.pageToken ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.filter = object.filter ?? "";
    return message;
  },
  fromSDK(object: ListServiceRolloutsRequestSDKType): ListServiceRolloutsRequest {
    return {
      serviceName: object?.service_name,
      pageToken: object?.page_token,
      pageSize: object?.page_size,
      filter: object?.filter
    };
  },
  fromSDKJSON(object: any): ListServiceRolloutsRequestSDKType {
    return {
      service_name: isSet(object.service_name) ? String(object.service_name) : "",
      page_token: isSet(object.page_token) ? String(object.page_token) : "",
      page_size: isSet(object.page_size) ? Number(object.page_size) : 0,
      filter: isSet(object.filter) ? String(object.filter) : ""
    };
  },
  toSDK(message: ListServiceRolloutsRequest): ListServiceRolloutsRequestSDKType {
    const obj: any = {};
    obj.service_name = message.serviceName;
    obj.page_token = message.pageToken;
    obj.page_size = message.pageSize;
    obj.filter = message.filter;
    return obj;
  },
  fromAmino(object: ListServiceRolloutsRequestAmino): ListServiceRolloutsRequest {
    const message = createBaseListServiceRolloutsRequest();
    if (object.service_name !== undefined && object.service_name !== null) {
      message.serviceName = object.service_name;
    }
    if (object.page_token !== undefined && object.page_token !== null) {
      message.pageToken = object.page_token;
    }
    if (object.page_size !== undefined && object.page_size !== null) {
      message.pageSize = object.page_size;
    }
    if (object.filter !== undefined && object.filter !== null) {
      message.filter = object.filter;
    }
    return message;
  },
  toAmino(message: ListServiceRolloutsRequest): ListServiceRolloutsRequestAmino {
    const obj: any = {};
    obj.service_name = message.serviceName === "" ? undefined : message.serviceName;
    obj.page_token = message.pageToken === "" ? undefined : message.pageToken;
    obj.page_size = message.pageSize === 0 ? undefined : message.pageSize;
    obj.filter = message.filter === "" ? undefined : message.filter;
    return obj;
  },
  fromAminoMsg(object: ListServiceRolloutsRequestAminoMsg): ListServiceRolloutsRequest {
    return ListServiceRolloutsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ListServiceRolloutsRequestProtoMsg): ListServiceRolloutsRequest {
    return ListServiceRolloutsRequest.decode(message.value);
  },
  toProto(message: ListServiceRolloutsRequest): Uint8Array {
    return ListServiceRolloutsRequest.encode(message).finish();
  },
  toProtoMsg(message: ListServiceRolloutsRequest): ListServiceRolloutsRequestProtoMsg {
    return {
      typeUrl: "/google.api.servicemanagement.v1.ListServiceRolloutsRequest",
      value: ListServiceRolloutsRequest.encode(message).finish()
    };
  }
};
function createBaseListServiceRolloutsResponse(): ListServiceRolloutsResponse {
  return {
    rollouts: [],
    nextPageToken: ""
  };
}
export const ListServiceRolloutsResponse = {
  typeUrl: "/google.api.servicemanagement.v1.ListServiceRolloutsResponse",
  encode(message: ListServiceRolloutsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rollouts) {
      Rollout.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListServiceRolloutsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListServiceRolloutsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rollouts.push(Rollout.decode(reader, reader.uint32()));
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
  fromJSON(object: any): ListServiceRolloutsResponse {
    return {
      rollouts: Array.isArray(object?.rollouts) ? object.rollouts.map((e: any) => Rollout.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? String(object.nextPageToken) : ""
    };
  },
  toJSON(message: ListServiceRolloutsResponse): JsonSafe<ListServiceRolloutsResponse> {
    const obj: any = {};
    if (message.rollouts) {
      obj.rollouts = message.rollouts.map(e => e ? Rollout.toJSON(e) : undefined);
    } else {
      obj.rollouts = [];
    }
    message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
    return obj;
  },
  fromPartial(object: DeepPartial<ListServiceRolloutsResponse>): ListServiceRolloutsResponse {
    const message = createBaseListServiceRolloutsResponse();
    message.rollouts = object.rollouts?.map(e => Rollout.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
  fromSDK(object: ListServiceRolloutsResponseSDKType): ListServiceRolloutsResponse {
    return {
      rollouts: Array.isArray(object?.rollouts) ? object.rollouts.map((e: any) => Rollout.fromSDK(e)) : [],
      nextPageToken: object?.next_page_token
    };
  },
  fromSDKJSON(object: any): ListServiceRolloutsResponseSDKType {
    return {
      rollouts: Array.isArray(object?.rollouts) ? object.rollouts.map((e: any) => Rollout.fromSDKJSON(e)) : [],
      next_page_token: isSet(object.next_page_token) ? String(object.next_page_token) : ""
    };
  },
  toSDK(message: ListServiceRolloutsResponse): ListServiceRolloutsResponseSDKType {
    const obj: any = {};
    if (message.rollouts) {
      obj.rollouts = message.rollouts.map(e => e ? Rollout.toSDK(e) : undefined);
    } else {
      obj.rollouts = [];
    }
    obj.next_page_token = message.nextPageToken;
    return obj;
  },
  fromAmino(object: ListServiceRolloutsResponseAmino): ListServiceRolloutsResponse {
    const message = createBaseListServiceRolloutsResponse();
    message.rollouts = object.rollouts?.map(e => Rollout.fromAmino(e)) || [];
    if (object.next_page_token !== undefined && object.next_page_token !== null) {
      message.nextPageToken = object.next_page_token;
    }
    return message;
  },
  toAmino(message: ListServiceRolloutsResponse): ListServiceRolloutsResponseAmino {
    const obj: any = {};
    if (message.rollouts) {
      obj.rollouts = message.rollouts.map(e => e ? Rollout.toAmino(e) : undefined);
    } else {
      obj.rollouts = message.rollouts;
    }
    obj.next_page_token = message.nextPageToken === "" ? undefined : message.nextPageToken;
    return obj;
  },
  fromAminoMsg(object: ListServiceRolloutsResponseAminoMsg): ListServiceRolloutsResponse {
    return ListServiceRolloutsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ListServiceRolloutsResponseProtoMsg): ListServiceRolloutsResponse {
    return ListServiceRolloutsResponse.decode(message.value);
  },
  toProto(message: ListServiceRolloutsResponse): Uint8Array {
    return ListServiceRolloutsResponse.encode(message).finish();
  },
  toProtoMsg(message: ListServiceRolloutsResponse): ListServiceRolloutsResponseProtoMsg {
    return {
      typeUrl: "/google.api.servicemanagement.v1.ListServiceRolloutsResponse",
      value: ListServiceRolloutsResponse.encode(message).finish()
    };
  }
};
function createBaseGetServiceRolloutRequest(): GetServiceRolloutRequest {
  return {
    serviceName: "",
    rolloutId: ""
  };
}
export const GetServiceRolloutRequest = {
  typeUrl: "/google.api.servicemanagement.v1.GetServiceRolloutRequest",
  encode(message: GetServiceRolloutRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    if (message.rolloutId !== "") {
      writer.uint32(18).string(message.rolloutId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetServiceRolloutRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetServiceRolloutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;
        case 2:
          message.rolloutId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetServiceRolloutRequest {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      rolloutId: isSet(object.rolloutId) ? String(object.rolloutId) : ""
    };
  },
  toJSON(message: GetServiceRolloutRequest): JsonSafe<GetServiceRolloutRequest> {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.rolloutId !== undefined && (obj.rolloutId = message.rolloutId);
    return obj;
  },
  fromPartial(object: DeepPartial<GetServiceRolloutRequest>): GetServiceRolloutRequest {
    const message = createBaseGetServiceRolloutRequest();
    message.serviceName = object.serviceName ?? "";
    message.rolloutId = object.rolloutId ?? "";
    return message;
  },
  fromSDK(object: GetServiceRolloutRequestSDKType): GetServiceRolloutRequest {
    return {
      serviceName: object?.service_name,
      rolloutId: object?.rollout_id
    };
  },
  fromSDKJSON(object: any): GetServiceRolloutRequestSDKType {
    return {
      service_name: isSet(object.service_name) ? String(object.service_name) : "",
      rollout_id: isSet(object.rollout_id) ? String(object.rollout_id) : ""
    };
  },
  toSDK(message: GetServiceRolloutRequest): GetServiceRolloutRequestSDKType {
    const obj: any = {};
    obj.service_name = message.serviceName;
    obj.rollout_id = message.rolloutId;
    return obj;
  },
  fromAmino(object: GetServiceRolloutRequestAmino): GetServiceRolloutRequest {
    const message = createBaseGetServiceRolloutRequest();
    if (object.service_name !== undefined && object.service_name !== null) {
      message.serviceName = object.service_name;
    }
    if (object.rollout_id !== undefined && object.rollout_id !== null) {
      message.rolloutId = object.rollout_id;
    }
    return message;
  },
  toAmino(message: GetServiceRolloutRequest): GetServiceRolloutRequestAmino {
    const obj: any = {};
    obj.service_name = message.serviceName === "" ? undefined : message.serviceName;
    obj.rollout_id = message.rolloutId === "" ? undefined : message.rolloutId;
    return obj;
  },
  fromAminoMsg(object: GetServiceRolloutRequestAminoMsg): GetServiceRolloutRequest {
    return GetServiceRolloutRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: GetServiceRolloutRequestProtoMsg): GetServiceRolloutRequest {
    return GetServiceRolloutRequest.decode(message.value);
  },
  toProto(message: GetServiceRolloutRequest): Uint8Array {
    return GetServiceRolloutRequest.encode(message).finish();
  },
  toProtoMsg(message: GetServiceRolloutRequest): GetServiceRolloutRequestProtoMsg {
    return {
      typeUrl: "/google.api.servicemanagement.v1.GetServiceRolloutRequest",
      value: GetServiceRolloutRequest.encode(message).finish()
    };
  }
};
function createBaseGenerateConfigReportRequest(): GenerateConfigReportRequest {
  return {
    newConfig: undefined,
    oldConfig: undefined
  };
}
export const GenerateConfigReportRequest = {
  typeUrl: "/google.api.servicemanagement.v1.GenerateConfigReportRequest",
  encode(message: GenerateConfigReportRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.newConfig !== undefined) {
      Any.encode(message.newConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.oldConfig !== undefined) {
      Any.encode(message.oldConfig, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenerateConfigReportRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateConfigReportRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newConfig = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.oldConfig = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenerateConfigReportRequest {
    return {
      newConfig: isSet(object.newConfig) ? Any.fromJSON(object.newConfig) : undefined,
      oldConfig: isSet(object.oldConfig) ? Any.fromJSON(object.oldConfig) : undefined
    };
  },
  toJSON(message: GenerateConfigReportRequest): JsonSafe<GenerateConfigReportRequest> {
    const obj: any = {};
    message.newConfig !== undefined && (obj.newConfig = message.newConfig ? Any.toJSON(message.newConfig) : undefined);
    message.oldConfig !== undefined && (obj.oldConfig = message.oldConfig ? Any.toJSON(message.oldConfig) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GenerateConfigReportRequest>): GenerateConfigReportRequest {
    const message = createBaseGenerateConfigReportRequest();
    message.newConfig = object.newConfig !== undefined && object.newConfig !== null ? Any.fromPartial(object.newConfig) : undefined;
    message.oldConfig = object.oldConfig !== undefined && object.oldConfig !== null ? Any.fromPartial(object.oldConfig) : undefined;
    return message;
  },
  fromSDK(object: GenerateConfigReportRequestSDKType): GenerateConfigReportRequest {
    return {
      newConfig: object.new_config ? Any.fromSDK(object.new_config) : undefined,
      oldConfig: object.old_config ? Any.fromSDK(object.old_config) : undefined
    };
  },
  fromSDKJSON(object: any): GenerateConfigReportRequestSDKType {
    return {
      new_config: isSet(object.new_config) ? Any.fromSDKJSON(object.new_config) : undefined,
      old_config: isSet(object.old_config) ? Any.fromSDKJSON(object.old_config) : undefined
    };
  },
  toSDK(message: GenerateConfigReportRequest): GenerateConfigReportRequestSDKType {
    const obj: any = {};
    message.newConfig !== undefined && (obj.new_config = message.newConfig ? Any.toSDK(message.newConfig) : undefined);
    message.oldConfig !== undefined && (obj.old_config = message.oldConfig ? Any.toSDK(message.oldConfig) : undefined);
    return obj;
  },
  fromAmino(object: GenerateConfigReportRequestAmino): GenerateConfigReportRequest {
    const message = createBaseGenerateConfigReportRequest();
    if (object.new_config !== undefined && object.new_config !== null) {
      message.newConfig = Any.fromAmino(object.new_config);
    }
    if (object.old_config !== undefined && object.old_config !== null) {
      message.oldConfig = Any.fromAmino(object.old_config);
    }
    return message;
  },
  toAmino(message: GenerateConfigReportRequest): GenerateConfigReportRequestAmino {
    const obj: any = {};
    obj.new_config = message.newConfig ? Any.toAmino(message.newConfig) : undefined;
    obj.old_config = message.oldConfig ? Any.toAmino(message.oldConfig) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenerateConfigReportRequestAminoMsg): GenerateConfigReportRequest {
    return GenerateConfigReportRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: GenerateConfigReportRequestProtoMsg): GenerateConfigReportRequest {
    return GenerateConfigReportRequest.decode(message.value);
  },
  toProto(message: GenerateConfigReportRequest): Uint8Array {
    return GenerateConfigReportRequest.encode(message).finish();
  },
  toProtoMsg(message: GenerateConfigReportRequest): GenerateConfigReportRequestProtoMsg {
    return {
      typeUrl: "/google.api.servicemanagement.v1.GenerateConfigReportRequest",
      value: GenerateConfigReportRequest.encode(message).finish()
    };
  }
};
function createBaseGenerateConfigReportResponse(): GenerateConfigReportResponse {
  return {
    serviceName: "",
    id: "",
    changeReports: [],
    diagnostics: []
  };
}
export const GenerateConfigReportResponse = {
  typeUrl: "/google.api.servicemanagement.v1.GenerateConfigReportResponse",
  encode(message: GenerateConfigReportResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    for (const v of message.changeReports) {
      ChangeReport.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.diagnostics) {
      Diagnostic.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenerateConfigReportResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateConfigReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.changeReports.push(ChangeReport.decode(reader, reader.uint32()));
          break;
        case 4:
          message.diagnostics.push(Diagnostic.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenerateConfigReportResponse {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      id: isSet(object.id) ? String(object.id) : "",
      changeReports: Array.isArray(object?.changeReports) ? object.changeReports.map((e: any) => ChangeReport.fromJSON(e)) : [],
      diagnostics: Array.isArray(object?.diagnostics) ? object.diagnostics.map((e: any) => Diagnostic.fromJSON(e)) : []
    };
  },
  toJSON(message: GenerateConfigReportResponse): JsonSafe<GenerateConfigReportResponse> {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.id !== undefined && (obj.id = message.id);
    if (message.changeReports) {
      obj.changeReports = message.changeReports.map(e => e ? ChangeReport.toJSON(e) : undefined);
    } else {
      obj.changeReports = [];
    }
    if (message.diagnostics) {
      obj.diagnostics = message.diagnostics.map(e => e ? Diagnostic.toJSON(e) : undefined);
    } else {
      obj.diagnostics = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenerateConfigReportResponse>): GenerateConfigReportResponse {
    const message = createBaseGenerateConfigReportResponse();
    message.serviceName = object.serviceName ?? "";
    message.id = object.id ?? "";
    message.changeReports = object.changeReports?.map(e => ChangeReport.fromPartial(e)) || [];
    message.diagnostics = object.diagnostics?.map(e => Diagnostic.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenerateConfigReportResponseSDKType): GenerateConfigReportResponse {
    return {
      serviceName: object?.service_name,
      id: object?.id,
      changeReports: Array.isArray(object?.change_reports) ? object.change_reports.map((e: any) => ChangeReport.fromSDK(e)) : [],
      diagnostics: Array.isArray(object?.diagnostics) ? object.diagnostics.map((e: any) => Diagnostic.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): GenerateConfigReportResponseSDKType {
    return {
      service_name: isSet(object.service_name) ? String(object.service_name) : "",
      id: isSet(object.id) ? String(object.id) : "",
      change_reports: Array.isArray(object?.change_reports) ? object.change_reports.map((e: any) => ChangeReport.fromSDKJSON(e)) : [],
      diagnostics: Array.isArray(object?.diagnostics) ? object.diagnostics.map((e: any) => Diagnostic.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: GenerateConfigReportResponse): GenerateConfigReportResponseSDKType {
    const obj: any = {};
    obj.service_name = message.serviceName;
    obj.id = message.id;
    if (message.changeReports) {
      obj.change_reports = message.changeReports.map(e => e ? ChangeReport.toSDK(e) : undefined);
    } else {
      obj.change_reports = [];
    }
    if (message.diagnostics) {
      obj.diagnostics = message.diagnostics.map(e => e ? Diagnostic.toSDK(e) : undefined);
    } else {
      obj.diagnostics = [];
    }
    return obj;
  },
  fromAmino(object: GenerateConfigReportResponseAmino): GenerateConfigReportResponse {
    const message = createBaseGenerateConfigReportResponse();
    if (object.service_name !== undefined && object.service_name !== null) {
      message.serviceName = object.service_name;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    message.changeReports = object.change_reports?.map(e => ChangeReport.fromAmino(e)) || [];
    message.diagnostics = object.diagnostics?.map(e => Diagnostic.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenerateConfigReportResponse): GenerateConfigReportResponseAmino {
    const obj: any = {};
    obj.service_name = message.serviceName === "" ? undefined : message.serviceName;
    obj.id = message.id === "" ? undefined : message.id;
    if (message.changeReports) {
      obj.change_reports = message.changeReports.map(e => e ? ChangeReport.toAmino(e) : undefined);
    } else {
      obj.change_reports = message.changeReports;
    }
    if (message.diagnostics) {
      obj.diagnostics = message.diagnostics.map(e => e ? Diagnostic.toAmino(e) : undefined);
    } else {
      obj.diagnostics = message.diagnostics;
    }
    return obj;
  },
  fromAminoMsg(object: GenerateConfigReportResponseAminoMsg): GenerateConfigReportResponse {
    return GenerateConfigReportResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: GenerateConfigReportResponseProtoMsg): GenerateConfigReportResponse {
    return GenerateConfigReportResponse.decode(message.value);
  },
  toProto(message: GenerateConfigReportResponse): Uint8Array {
    return GenerateConfigReportResponse.encode(message).finish();
  },
  toProtoMsg(message: GenerateConfigReportResponse): GenerateConfigReportResponseProtoMsg {
    return {
      typeUrl: "/google.api.servicemanagement.v1.GenerateConfigReportResponse",
      value: GenerateConfigReportResponse.encode(message).finish()
    };
  }
};