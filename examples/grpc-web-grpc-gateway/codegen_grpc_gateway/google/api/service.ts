import { Api, ApiAmino, ApiSDKType } from "../protobuf/api";
import { Type, TypeAmino, TypeSDKType, Enum, EnumAmino, EnumSDKType } from "../protobuf/type";
import { Documentation, DocumentationAmino, DocumentationSDKType } from "./documentation";
import { Backend, BackendAmino, BackendSDKType } from "./backend";
import { Http, HttpAmino, HttpSDKType } from "./http";
import { Quota, QuotaAmino, QuotaSDKType } from "./quota";
import { Authentication, AuthenticationAmino, AuthenticationSDKType } from "./auth";
import { Context, ContextAmino, ContextSDKType } from "./context";
import { Usage, UsageAmino, UsageSDKType } from "./usage";
import { Endpoint, EndpointAmino, EndpointSDKType } from "./endpoint";
import { Control, ControlAmino, ControlSDKType } from "./control";
import { LogDescriptor, LogDescriptorAmino, LogDescriptorSDKType } from "./log";
import { MetricDescriptor, MetricDescriptorAmino, MetricDescriptorSDKType } from "./metric";
import { MonitoredResourceDescriptor, MonitoredResourceDescriptorAmino, MonitoredResourceDescriptorSDKType } from "./monitored_resource";
import { Billing, BillingAmino, BillingSDKType } from "./billing";
import { Logging, LoggingAmino, LoggingSDKType } from "./logging";
import { Monitoring, MonitoringAmino, MonitoringSDKType } from "./monitoring";
import { SystemParameters, SystemParametersAmino, SystemParametersSDKType } from "./system_parameter";
import { SourceInfo, SourceInfoAmino, SourceInfoSDKType } from "./source_info";
import { UInt32Value, UInt32ValueAmino, UInt32ValueSDKType } from "../protobuf/wrappers";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../helpers";
export const protobufPackage = "google.api";
/**
 * `Service` is the root object of Google service configuration schema. It
 * describes basic information about a service, such as the name and the
 * title, and delegates other aspects to sub-sections. Each sub-section is
 * either a proto message or a repeated proto message that configures a
 * specific aspect, such as auth. See each proto message definition for details.
 * 
 * Example:
 * 
 *     type: google.api.Service
 *     name: calendar.googleapis.com
 *     title: Google Calendar API
 *     apis:
 *     - name: google.calendar.v3.Calendar
 *     authentication:
 *       providers:
 *       - id: google_calendar_auth
 *         jwks_uri: https://www.googleapis.com/oauth2/v1/certs
 *         issuer: https://securetoken.google.com
 *       rules:
 *       - selector: "*"
 *         requirements:
 *           provider_id: google_calendar_auth
 */
export interface Service {
  /**
   * The service name, which is a DNS-like logical identifier for the
   * service, such as `calendar.googleapis.com`. The service name
   * typically goes through DNS verification to make sure the owner
   * of the service also owns the DNS name.
   */
  name: string;
  /** The product title for this service. */
  title: string;
  /** The Google project that owns this service. */
  producerProjectId: string;
  /**
   * A unique ID for a specific instance of this message, typically assigned
   * by the client for tracking purpose. Must be no longer than 63 characters
   * and only lower case letters, digits, '.', '_' and '-' are allowed. If
   * empty, the server may choose to generate one instead.
   */
  id: string;
  /**
   * A list of API interfaces exported by this service. Only the `name` field
   * of the [google.protobuf.Api][google.protobuf.Api] needs to be provided by the configuration
   * author, as the remaining fields will be derived from the IDL during the
   * normalization process. It is an error to specify an API interface here
   * which cannot be resolved against the associated IDL files.
   */
  apis: Api[];
  /**
   * A list of all proto message types included in this API service.
   * Types referenced directly or indirectly by the `apis` are
   * automatically included.  Messages which are not referenced but
   * shall be included, such as types used by the `google.protobuf.Any` type,
   * should be listed here by name. Example:
   * 
   *     types:
   *     - name: google.protobuf.Int32
   */
  types: Type[];
  /**
   * A list of all enum types included in this API service.  Enums
   * referenced directly or indirectly by the `apis` are automatically
   * included.  Enums which are not referenced but shall be included
   * should be listed here by name. Example:
   * 
   *     enums:
   *     - name: google.someapi.v1.SomeEnum
   */
  enums: Enum[];
  /** Additional API documentation. */
  documentation?: Documentation;
  /** API backend configuration. */
  backend?: Backend;
  /** HTTP configuration. */
  http?: Http;
  /** Quota configuration. */
  quota?: Quota;
  /** Auth configuration. */
  authentication?: Authentication;
  /** Context configuration. */
  context?: Context;
  /** Configuration controlling usage of this service. */
  usage?: Usage;
  /**
   * Configuration for network endpoints.  If this is empty, then an endpoint
   * with the same name as the service is automatically generated to service all
   * defined APIs.
   */
  endpoints: Endpoint[];
  /** Configuration for the service control plane. */
  control?: Control;
  /** Defines the logs used by this service. */
  logs: LogDescriptor[];
  /** Defines the metrics used by this service. */
  metrics: MetricDescriptor[];
  /**
   * Defines the monitored resources used by this service. This is required
   * by the [Service.monitoring][google.api.Service.monitoring] and [Service.logging][google.api.Service.logging] configurations.
   */
  monitoredResources: MonitoredResourceDescriptor[];
  /** Billing configuration. */
  billing?: Billing;
  /** Logging configuration. */
  logging?: Logging;
  /** Monitoring configuration. */
  monitoring?: Monitoring;
  /** System parameter configuration. */
  systemParameters?: SystemParameters;
  /** Output only. The source information for this configuration if available. */
  sourceInfo?: SourceInfo;
  /**
   * Obsolete. Do not use.
   * 
   * This field has no semantic meaning. The service config compiler always
   * sets this field to `3`.
   */
  /** @deprecated */
  configVersion?: UInt32Value;
}
export interface ServiceProtoMsg {
  typeUrl: "/google.api.Service";
  value: Uint8Array;
}
/**
 * `Service` is the root object of Google service configuration schema. It
 * describes basic information about a service, such as the name and the
 * title, and delegates other aspects to sub-sections. Each sub-section is
 * either a proto message or a repeated proto message that configures a
 * specific aspect, such as auth. See each proto message definition for details.
 * 
 * Example:
 * 
 *     type: google.api.Service
 *     name: calendar.googleapis.com
 *     title: Google Calendar API
 *     apis:
 *     - name: google.calendar.v3.Calendar
 *     authentication:
 *       providers:
 *       - id: google_calendar_auth
 *         jwks_uri: https://www.googleapis.com/oauth2/v1/certs
 *         issuer: https://securetoken.google.com
 *       rules:
 *       - selector: "*"
 *         requirements:
 *           provider_id: google_calendar_auth
 */
export interface ServiceAmino {
  /**
   * The service name, which is a DNS-like logical identifier for the
   * service, such as `calendar.googleapis.com`. The service name
   * typically goes through DNS verification to make sure the owner
   * of the service also owns the DNS name.
   */
  name: string;
  /** The product title for this service. */
  title: string;
  /** The Google project that owns this service. */
  producer_project_id: string;
  /**
   * A unique ID for a specific instance of this message, typically assigned
   * by the client for tracking purpose. Must be no longer than 63 characters
   * and only lower case letters, digits, '.', '_' and '-' are allowed. If
   * empty, the server may choose to generate one instead.
   */
  id: string;
  /**
   * A list of API interfaces exported by this service. Only the `name` field
   * of the [google.protobuf.Api][google.protobuf.Api] needs to be provided by the configuration
   * author, as the remaining fields will be derived from the IDL during the
   * normalization process. It is an error to specify an API interface here
   * which cannot be resolved against the associated IDL files.
   */
  apis: ApiAmino[];
  /**
   * A list of all proto message types included in this API service.
   * Types referenced directly or indirectly by the `apis` are
   * automatically included.  Messages which are not referenced but
   * shall be included, such as types used by the `google.protobuf.Any` type,
   * should be listed here by name. Example:
   * 
   *     types:
   *     - name: google.protobuf.Int32
   */
  types: TypeAmino[];
  /**
   * A list of all enum types included in this API service.  Enums
   * referenced directly or indirectly by the `apis` are automatically
   * included.  Enums which are not referenced but shall be included
   * should be listed here by name. Example:
   * 
   *     enums:
   *     - name: google.someapi.v1.SomeEnum
   */
  enums: EnumAmino[];
  /** Additional API documentation. */
  documentation?: DocumentationAmino;
  /** API backend configuration. */
  backend?: BackendAmino;
  /** HTTP configuration. */
  http?: HttpAmino;
  /** Quota configuration. */
  quota?: QuotaAmino;
  /** Auth configuration. */
  authentication?: AuthenticationAmino;
  /** Context configuration. */
  context?: ContextAmino;
  /** Configuration controlling usage of this service. */
  usage?: UsageAmino;
  /**
   * Configuration for network endpoints.  If this is empty, then an endpoint
   * with the same name as the service is automatically generated to service all
   * defined APIs.
   */
  endpoints: EndpointAmino[];
  /** Configuration for the service control plane. */
  control?: ControlAmino;
  /** Defines the logs used by this service. */
  logs: LogDescriptorAmino[];
  /** Defines the metrics used by this service. */
  metrics: MetricDescriptorAmino[];
  /**
   * Defines the monitored resources used by this service. This is required
   * by the [Service.monitoring][google.api.Service.monitoring] and [Service.logging][google.api.Service.logging] configurations.
   */
  monitored_resources: MonitoredResourceDescriptorAmino[];
  /** Billing configuration. */
  billing?: BillingAmino;
  /** Logging configuration. */
  logging?: LoggingAmino;
  /** Monitoring configuration. */
  monitoring?: MonitoringAmino;
  /** System parameter configuration. */
  system_parameters?: SystemParametersAmino;
  /** Output only. The source information for this configuration if available. */
  source_info?: SourceInfoAmino;
  /**
   * Obsolete. Do not use.
   * 
   * This field has no semantic meaning. The service config compiler always
   * sets this field to `3`.
   */
  /** @deprecated */
  config_version?: UInt32ValueAmino;
}
export interface ServiceAminoMsg {
  type: "/google.api.Service";
  value: ServiceAmino;
}
/**
 * `Service` is the root object of Google service configuration schema. It
 * describes basic information about a service, such as the name and the
 * title, and delegates other aspects to sub-sections. Each sub-section is
 * either a proto message or a repeated proto message that configures a
 * specific aspect, such as auth. See each proto message definition for details.
 * 
 * Example:
 * 
 *     type: google.api.Service
 *     name: calendar.googleapis.com
 *     title: Google Calendar API
 *     apis:
 *     - name: google.calendar.v3.Calendar
 *     authentication:
 *       providers:
 *       - id: google_calendar_auth
 *         jwks_uri: https://www.googleapis.com/oauth2/v1/certs
 *         issuer: https://securetoken.google.com
 *       rules:
 *       - selector: "*"
 *         requirements:
 *           provider_id: google_calendar_auth
 */
export interface ServiceSDKType {
  name: string;
  title: string;
  producer_project_id: string;
  id: string;
  apis: ApiSDKType[];
  types: TypeSDKType[];
  enums: EnumSDKType[];
  documentation?: DocumentationSDKType;
  backend?: BackendSDKType;
  http?: HttpSDKType;
  quota?: QuotaSDKType;
  authentication?: AuthenticationSDKType;
  context?: ContextSDKType;
  usage?: UsageSDKType;
  endpoints: EndpointSDKType[];
  control?: ControlSDKType;
  logs: LogDescriptorSDKType[];
  metrics: MetricDescriptorSDKType[];
  monitored_resources: MonitoredResourceDescriptorSDKType[];
  billing?: BillingSDKType;
  logging?: LoggingSDKType;
  monitoring?: MonitoringSDKType;
  system_parameters?: SystemParametersSDKType;
  source_info?: SourceInfoSDKType;
  /** @deprecated */
  config_version?: UInt32ValueSDKType;
}
function createBaseService(): Service {
  return {
    name: "",
    title: "",
    producerProjectId: "",
    id: "",
    apis: [],
    types: [],
    enums: [],
    documentation: undefined,
    backend: undefined,
    http: undefined,
    quota: undefined,
    authentication: undefined,
    context: undefined,
    usage: undefined,
    endpoints: [],
    control: undefined,
    logs: [],
    metrics: [],
    monitoredResources: [],
    billing: undefined,
    logging: undefined,
    monitoring: undefined,
    systemParameters: undefined,
    sourceInfo: undefined,
    configVersion: undefined
  };
}
export const Service = {
  typeUrl: "/google.api.Service",
  encode(message: Service, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.producerProjectId !== "") {
      writer.uint32(178).string(message.producerProjectId);
    }
    if (message.id !== "") {
      writer.uint32(266).string(message.id);
    }
    for (const v of message.apis) {
      Api.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.types) {
      Type.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.enums) {
      Enum.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.documentation !== undefined) {
      Documentation.encode(message.documentation, writer.uint32(50).fork()).ldelim();
    }
    if (message.backend !== undefined) {
      Backend.encode(message.backend, writer.uint32(66).fork()).ldelim();
    }
    if (message.http !== undefined) {
      Http.encode(message.http, writer.uint32(74).fork()).ldelim();
    }
    if (message.quota !== undefined) {
      Quota.encode(message.quota, writer.uint32(82).fork()).ldelim();
    }
    if (message.authentication !== undefined) {
      Authentication.encode(message.authentication, writer.uint32(90).fork()).ldelim();
    }
    if (message.context !== undefined) {
      Context.encode(message.context, writer.uint32(98).fork()).ldelim();
    }
    if (message.usage !== undefined) {
      Usage.encode(message.usage, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.endpoints) {
      Endpoint.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    if (message.control !== undefined) {
      Control.encode(message.control, writer.uint32(170).fork()).ldelim();
    }
    for (const v of message.logs) {
      LogDescriptor.encode(v!, writer.uint32(186).fork()).ldelim();
    }
    for (const v of message.metrics) {
      MetricDescriptor.encode(v!, writer.uint32(194).fork()).ldelim();
    }
    for (const v of message.monitoredResources) {
      MonitoredResourceDescriptor.encode(v!, writer.uint32(202).fork()).ldelim();
    }
    if (message.billing !== undefined) {
      Billing.encode(message.billing, writer.uint32(210).fork()).ldelim();
    }
    if (message.logging !== undefined) {
      Logging.encode(message.logging, writer.uint32(218).fork()).ldelim();
    }
    if (message.monitoring !== undefined) {
      Monitoring.encode(message.monitoring, writer.uint32(226).fork()).ldelim();
    }
    if (message.systemParameters !== undefined) {
      SystemParameters.encode(message.systemParameters, writer.uint32(234).fork()).ldelim();
    }
    if (message.sourceInfo !== undefined) {
      SourceInfo.encode(message.sourceInfo, writer.uint32(298).fork()).ldelim();
    }
    if (message.configVersion !== undefined) {
      UInt32Value.encode(message.configVersion, writer.uint32(162).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Service {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 22:
          message.producerProjectId = reader.string();
          break;
        case 33:
          message.id = reader.string();
          break;
        case 3:
          message.apis.push(Api.decode(reader, reader.uint32()));
          break;
        case 4:
          message.types.push(Type.decode(reader, reader.uint32()));
          break;
        case 5:
          message.enums.push(Enum.decode(reader, reader.uint32()));
          break;
        case 6:
          message.documentation = Documentation.decode(reader, reader.uint32());
          break;
        case 8:
          message.backend = Backend.decode(reader, reader.uint32());
          break;
        case 9:
          message.http = Http.decode(reader, reader.uint32());
          break;
        case 10:
          message.quota = Quota.decode(reader, reader.uint32());
          break;
        case 11:
          message.authentication = Authentication.decode(reader, reader.uint32());
          break;
        case 12:
          message.context = Context.decode(reader, reader.uint32());
          break;
        case 15:
          message.usage = Usage.decode(reader, reader.uint32());
          break;
        case 18:
          message.endpoints.push(Endpoint.decode(reader, reader.uint32()));
          break;
        case 21:
          message.control = Control.decode(reader, reader.uint32());
          break;
        case 23:
          message.logs.push(LogDescriptor.decode(reader, reader.uint32()));
          break;
        case 24:
          message.metrics.push(MetricDescriptor.decode(reader, reader.uint32()));
          break;
        case 25:
          message.monitoredResources.push(MonitoredResourceDescriptor.decode(reader, reader.uint32()));
          break;
        case 26:
          message.billing = Billing.decode(reader, reader.uint32());
          break;
        case 27:
          message.logging = Logging.decode(reader, reader.uint32());
          break;
        case 28:
          message.monitoring = Monitoring.decode(reader, reader.uint32());
          break;
        case 29:
          message.systemParameters = SystemParameters.decode(reader, reader.uint32());
          break;
        case 37:
          message.sourceInfo = SourceInfo.decode(reader, reader.uint32());
          break;
        case 20:
          message.configVersion = UInt32Value.decode(reader, reader.uint32());
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
      title: isSet(object.title) ? String(object.title) : "",
      producerProjectId: isSet(object.producerProjectId) ? String(object.producerProjectId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      apis: Array.isArray(object?.apis) ? object.apis.map((e: any) => Api.fromJSON(e)) : [],
      types: Array.isArray(object?.types) ? object.types.map((e: any) => Type.fromJSON(e)) : [],
      enums: Array.isArray(object?.enums) ? object.enums.map((e: any) => Enum.fromJSON(e)) : [],
      documentation: isSet(object.documentation) ? Documentation.fromJSON(object.documentation) : undefined,
      backend: isSet(object.backend) ? Backend.fromJSON(object.backend) : undefined,
      http: isSet(object.http) ? Http.fromJSON(object.http) : undefined,
      quota: isSet(object.quota) ? Quota.fromJSON(object.quota) : undefined,
      authentication: isSet(object.authentication) ? Authentication.fromJSON(object.authentication) : undefined,
      context: isSet(object.context) ? Context.fromJSON(object.context) : undefined,
      usage: isSet(object.usage) ? Usage.fromJSON(object.usage) : undefined,
      endpoints: Array.isArray(object?.endpoints) ? object.endpoints.map((e: any) => Endpoint.fromJSON(e)) : [],
      control: isSet(object.control) ? Control.fromJSON(object.control) : undefined,
      logs: Array.isArray(object?.logs) ? object.logs.map((e: any) => LogDescriptor.fromJSON(e)) : [],
      metrics: Array.isArray(object?.metrics) ? object.metrics.map((e: any) => MetricDescriptor.fromJSON(e)) : [],
      monitoredResources: Array.isArray(object?.monitoredResources) ? object.monitoredResources.map((e: any) => MonitoredResourceDescriptor.fromJSON(e)) : [],
      billing: isSet(object.billing) ? Billing.fromJSON(object.billing) : undefined,
      logging: isSet(object.logging) ? Logging.fromJSON(object.logging) : undefined,
      monitoring: isSet(object.monitoring) ? Monitoring.fromJSON(object.monitoring) : undefined,
      systemParameters: isSet(object.systemParameters) ? SystemParameters.fromJSON(object.systemParameters) : undefined,
      sourceInfo: isSet(object.sourceInfo) ? SourceInfo.fromJSON(object.sourceInfo) : undefined,
      configVersion: isSet(object.configVersion) ? UInt32Value.fromJSON(object.configVersion) : undefined
    };
  },
  toJSON(message: Service): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.title !== undefined && (obj.title = message.title);
    message.producerProjectId !== undefined && (obj.producerProjectId = message.producerProjectId);
    message.id !== undefined && (obj.id = message.id);
    if (message.apis) {
      obj.apis = message.apis.map(e => e ? Api.toJSON(e) : undefined);
    } else {
      obj.apis = [];
    }
    if (message.types) {
      obj.types = message.types.map(e => e ? Type.toJSON(e) : undefined);
    } else {
      obj.types = [];
    }
    if (message.enums) {
      obj.enums = message.enums.map(e => e ? Enum.toJSON(e) : undefined);
    } else {
      obj.enums = [];
    }
    message.documentation !== undefined && (obj.documentation = message.documentation ? Documentation.toJSON(message.documentation) : undefined);
    message.backend !== undefined && (obj.backend = message.backend ? Backend.toJSON(message.backend) : undefined);
    message.http !== undefined && (obj.http = message.http ? Http.toJSON(message.http) : undefined);
    message.quota !== undefined && (obj.quota = message.quota ? Quota.toJSON(message.quota) : undefined);
    message.authentication !== undefined && (obj.authentication = message.authentication ? Authentication.toJSON(message.authentication) : undefined);
    message.context !== undefined && (obj.context = message.context ? Context.toJSON(message.context) : undefined);
    message.usage !== undefined && (obj.usage = message.usage ? Usage.toJSON(message.usage) : undefined);
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map(e => e ? Endpoint.toJSON(e) : undefined);
    } else {
      obj.endpoints = [];
    }
    message.control !== undefined && (obj.control = message.control ? Control.toJSON(message.control) : undefined);
    if (message.logs) {
      obj.logs = message.logs.map(e => e ? LogDescriptor.toJSON(e) : undefined);
    } else {
      obj.logs = [];
    }
    if (message.metrics) {
      obj.metrics = message.metrics.map(e => e ? MetricDescriptor.toJSON(e) : undefined);
    } else {
      obj.metrics = [];
    }
    if (message.monitoredResources) {
      obj.monitoredResources = message.monitoredResources.map(e => e ? MonitoredResourceDescriptor.toJSON(e) : undefined);
    } else {
      obj.monitoredResources = [];
    }
    message.billing !== undefined && (obj.billing = message.billing ? Billing.toJSON(message.billing) : undefined);
    message.logging !== undefined && (obj.logging = message.logging ? Logging.toJSON(message.logging) : undefined);
    message.monitoring !== undefined && (obj.monitoring = message.monitoring ? Monitoring.toJSON(message.monitoring) : undefined);
    message.systemParameters !== undefined && (obj.systemParameters = message.systemParameters ? SystemParameters.toJSON(message.systemParameters) : undefined);
    message.sourceInfo !== undefined && (obj.sourceInfo = message.sourceInfo ? SourceInfo.toJSON(message.sourceInfo) : undefined);
    message.configVersion !== undefined && (obj.configVersion = message.configVersion ? UInt32Value.toJSON(message.configVersion) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Service>): Service {
    const message = createBaseService();
    message.name = object.name ?? "";
    message.title = object.title ?? "";
    message.producerProjectId = object.producerProjectId ?? "";
    message.id = object.id ?? "";
    message.apis = object.apis?.map(e => Api.fromPartial(e)) || [];
    message.types = object.types?.map(e => Type.fromPartial(e)) || [];
    message.enums = object.enums?.map(e => Enum.fromPartial(e)) || [];
    message.documentation = object.documentation !== undefined && object.documentation !== null ? Documentation.fromPartial(object.documentation) : undefined;
    message.backend = object.backend !== undefined && object.backend !== null ? Backend.fromPartial(object.backend) : undefined;
    message.http = object.http !== undefined && object.http !== null ? Http.fromPartial(object.http) : undefined;
    message.quota = object.quota !== undefined && object.quota !== null ? Quota.fromPartial(object.quota) : undefined;
    message.authentication = object.authentication !== undefined && object.authentication !== null ? Authentication.fromPartial(object.authentication) : undefined;
    message.context = object.context !== undefined && object.context !== null ? Context.fromPartial(object.context) : undefined;
    message.usage = object.usage !== undefined && object.usage !== null ? Usage.fromPartial(object.usage) : undefined;
    message.endpoints = object.endpoints?.map(e => Endpoint.fromPartial(e)) || [];
    message.control = object.control !== undefined && object.control !== null ? Control.fromPartial(object.control) : undefined;
    message.logs = object.logs?.map(e => LogDescriptor.fromPartial(e)) || [];
    message.metrics = object.metrics?.map(e => MetricDescriptor.fromPartial(e)) || [];
    message.monitoredResources = object.monitoredResources?.map(e => MonitoredResourceDescriptor.fromPartial(e)) || [];
    message.billing = object.billing !== undefined && object.billing !== null ? Billing.fromPartial(object.billing) : undefined;
    message.logging = object.logging !== undefined && object.logging !== null ? Logging.fromPartial(object.logging) : undefined;
    message.monitoring = object.monitoring !== undefined && object.monitoring !== null ? Monitoring.fromPartial(object.monitoring) : undefined;
    message.systemParameters = object.systemParameters !== undefined && object.systemParameters !== null ? SystemParameters.fromPartial(object.systemParameters) : undefined;
    message.sourceInfo = object.sourceInfo !== undefined && object.sourceInfo !== null ? SourceInfo.fromPartial(object.sourceInfo) : undefined;
    message.configVersion = object.configVersion !== undefined && object.configVersion !== null ? UInt32Value.fromPartial(object.configVersion) : undefined;
    return message;
  },
  fromSDK(object: ServiceSDKType): Service {
    return {
      name: object?.name,
      title: object?.title,
      producerProjectId: object?.producer_project_id,
      id: object?.id,
      apis: Array.isArray(object?.apis) ? object.apis.map((e: any) => Api.fromSDK(e)) : [],
      types: Array.isArray(object?.types) ? object.types.map((e: any) => Type.fromSDK(e)) : [],
      enums: Array.isArray(object?.enums) ? object.enums.map((e: any) => Enum.fromSDK(e)) : [],
      documentation: object.documentation ? Documentation.fromSDK(object.documentation) : undefined,
      backend: object.backend ? Backend.fromSDK(object.backend) : undefined,
      http: object.http ? Http.fromSDK(object.http) : undefined,
      quota: object.quota ? Quota.fromSDK(object.quota) : undefined,
      authentication: object.authentication ? Authentication.fromSDK(object.authentication) : undefined,
      context: object.context ? Context.fromSDK(object.context) : undefined,
      usage: object.usage ? Usage.fromSDK(object.usage) : undefined,
      endpoints: Array.isArray(object?.endpoints) ? object.endpoints.map((e: any) => Endpoint.fromSDK(e)) : [],
      control: object.control ? Control.fromSDK(object.control) : undefined,
      logs: Array.isArray(object?.logs) ? object.logs.map((e: any) => LogDescriptor.fromSDK(e)) : [],
      metrics: Array.isArray(object?.metrics) ? object.metrics.map((e: any) => MetricDescriptor.fromSDK(e)) : [],
      monitoredResources: Array.isArray(object?.monitored_resources) ? object.monitored_resources.map((e: any) => MonitoredResourceDescriptor.fromSDK(e)) : [],
      billing: object.billing ? Billing.fromSDK(object.billing) : undefined,
      logging: object.logging ? Logging.fromSDK(object.logging) : undefined,
      monitoring: object.monitoring ? Monitoring.fromSDK(object.monitoring) : undefined,
      systemParameters: object.system_parameters ? SystemParameters.fromSDK(object.system_parameters) : undefined,
      sourceInfo: object.source_info ? SourceInfo.fromSDK(object.source_info) : undefined,
      configVersion: object.config_version ? UInt32Value.fromSDK(object.config_version) : undefined
    };
  },
  toSDK(message: Service): ServiceSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.title = message.title;
    obj.producer_project_id = message.producerProjectId;
    obj.id = message.id;
    if (message.apis) {
      obj.apis = message.apis.map(e => e ? Api.toSDK(e) : undefined);
    } else {
      obj.apis = [];
    }
    if (message.types) {
      obj.types = message.types.map(e => e ? Type.toSDK(e) : undefined);
    } else {
      obj.types = [];
    }
    if (message.enums) {
      obj.enums = message.enums.map(e => e ? Enum.toSDK(e) : undefined);
    } else {
      obj.enums = [];
    }
    message.documentation !== undefined && (obj.documentation = message.documentation ? Documentation.toSDK(message.documentation) : undefined);
    message.backend !== undefined && (obj.backend = message.backend ? Backend.toSDK(message.backend) : undefined);
    message.http !== undefined && (obj.http = message.http ? Http.toSDK(message.http) : undefined);
    message.quota !== undefined && (obj.quota = message.quota ? Quota.toSDK(message.quota) : undefined);
    message.authentication !== undefined && (obj.authentication = message.authentication ? Authentication.toSDK(message.authentication) : undefined);
    message.context !== undefined && (obj.context = message.context ? Context.toSDK(message.context) : undefined);
    message.usage !== undefined && (obj.usage = message.usage ? Usage.toSDK(message.usage) : undefined);
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map(e => e ? Endpoint.toSDK(e) : undefined);
    } else {
      obj.endpoints = [];
    }
    message.control !== undefined && (obj.control = message.control ? Control.toSDK(message.control) : undefined);
    if (message.logs) {
      obj.logs = message.logs.map(e => e ? LogDescriptor.toSDK(e) : undefined);
    } else {
      obj.logs = [];
    }
    if (message.metrics) {
      obj.metrics = message.metrics.map(e => e ? MetricDescriptor.toSDK(e) : undefined);
    } else {
      obj.metrics = [];
    }
    if (message.monitoredResources) {
      obj.monitored_resources = message.monitoredResources.map(e => e ? MonitoredResourceDescriptor.toSDK(e) : undefined);
    } else {
      obj.monitored_resources = [];
    }
    message.billing !== undefined && (obj.billing = message.billing ? Billing.toSDK(message.billing) : undefined);
    message.logging !== undefined && (obj.logging = message.logging ? Logging.toSDK(message.logging) : undefined);
    message.monitoring !== undefined && (obj.monitoring = message.monitoring ? Monitoring.toSDK(message.monitoring) : undefined);
    message.systemParameters !== undefined && (obj.system_parameters = message.systemParameters ? SystemParameters.toSDK(message.systemParameters) : undefined);
    message.sourceInfo !== undefined && (obj.source_info = message.sourceInfo ? SourceInfo.toSDK(message.sourceInfo) : undefined);
    message.configVersion !== undefined && (obj.config_version = message.configVersion ? UInt32Value.toSDK(message.configVersion) : undefined);
    return obj;
  },
  fromAmino(object: ServiceAmino): Service {
    return {
      name: object.name,
      title: object.title,
      producerProjectId: object.producer_project_id,
      id: object.id,
      apis: Array.isArray(object?.apis) ? object.apis.map((e: any) => Api.fromAmino(e)) : [],
      types: Array.isArray(object?.types) ? object.types.map((e: any) => Type.fromAmino(e)) : [],
      enums: Array.isArray(object?.enums) ? object.enums.map((e: any) => Enum.fromAmino(e)) : [],
      documentation: object?.documentation ? Documentation.fromAmino(object.documentation) : undefined,
      backend: object?.backend ? Backend.fromAmino(object.backend) : undefined,
      http: object?.http ? Http.fromAmino(object.http) : undefined,
      quota: object?.quota ? Quota.fromAmino(object.quota) : undefined,
      authentication: object?.authentication ? Authentication.fromAmino(object.authentication) : undefined,
      context: object?.context ? Context.fromAmino(object.context) : undefined,
      usage: object?.usage ? Usage.fromAmino(object.usage) : undefined,
      endpoints: Array.isArray(object?.endpoints) ? object.endpoints.map((e: any) => Endpoint.fromAmino(e)) : [],
      control: object?.control ? Control.fromAmino(object.control) : undefined,
      logs: Array.isArray(object?.logs) ? object.logs.map((e: any) => LogDescriptor.fromAmino(e)) : [],
      metrics: Array.isArray(object?.metrics) ? object.metrics.map((e: any) => MetricDescriptor.fromAmino(e)) : [],
      monitoredResources: Array.isArray(object?.monitored_resources) ? object.monitored_resources.map((e: any) => MonitoredResourceDescriptor.fromAmino(e)) : [],
      billing: object?.billing ? Billing.fromAmino(object.billing) : undefined,
      logging: object?.logging ? Logging.fromAmino(object.logging) : undefined,
      monitoring: object?.monitoring ? Monitoring.fromAmino(object.monitoring) : undefined,
      systemParameters: object?.system_parameters ? SystemParameters.fromAmino(object.system_parameters) : undefined,
      sourceInfo: object?.source_info ? SourceInfo.fromAmino(object.source_info) : undefined,
      configVersion: object?.config_version ? UInt32Value.fromAmino(object.config_version) : undefined
    };
  },
  toAmino(message: Service): ServiceAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.title = message.title;
    obj.producer_project_id = message.producerProjectId;
    obj.id = message.id;
    if (message.apis) {
      obj.apis = message.apis.map(e => e ? Api.toAmino(e) : undefined);
    } else {
      obj.apis = [];
    }
    if (message.types) {
      obj.types = message.types.map(e => e ? Type.toAmino(e) : undefined);
    } else {
      obj.types = [];
    }
    if (message.enums) {
      obj.enums = message.enums.map(e => e ? Enum.toAmino(e) : undefined);
    } else {
      obj.enums = [];
    }
    obj.documentation = message.documentation ? Documentation.toAmino(message.documentation) : undefined;
    obj.backend = message.backend ? Backend.toAmino(message.backend) : undefined;
    obj.http = message.http ? Http.toAmino(message.http) : undefined;
    obj.quota = message.quota ? Quota.toAmino(message.quota) : undefined;
    obj.authentication = message.authentication ? Authentication.toAmino(message.authentication) : undefined;
    obj.context = message.context ? Context.toAmino(message.context) : undefined;
    obj.usage = message.usage ? Usage.toAmino(message.usage) : undefined;
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map(e => e ? Endpoint.toAmino(e) : undefined);
    } else {
      obj.endpoints = [];
    }
    obj.control = message.control ? Control.toAmino(message.control) : undefined;
    if (message.logs) {
      obj.logs = message.logs.map(e => e ? LogDescriptor.toAmino(e) : undefined);
    } else {
      obj.logs = [];
    }
    if (message.metrics) {
      obj.metrics = message.metrics.map(e => e ? MetricDescriptor.toAmino(e) : undefined);
    } else {
      obj.metrics = [];
    }
    if (message.monitoredResources) {
      obj.monitored_resources = message.monitoredResources.map(e => e ? MonitoredResourceDescriptor.toAmino(e) : undefined);
    } else {
      obj.monitored_resources = [];
    }
    obj.billing = message.billing ? Billing.toAmino(message.billing) : undefined;
    obj.logging = message.logging ? Logging.toAmino(message.logging) : undefined;
    obj.monitoring = message.monitoring ? Monitoring.toAmino(message.monitoring) : undefined;
    obj.system_parameters = message.systemParameters ? SystemParameters.toAmino(message.systemParameters) : undefined;
    obj.source_info = message.sourceInfo ? SourceInfo.toAmino(message.sourceInfo) : undefined;
    obj.config_version = message.configVersion ? UInt32Value.toAmino(message.configVersion) : undefined;
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
      typeUrl: "/google.api.Service",
      value: Service.encode(message).finish()
    };
  }
};