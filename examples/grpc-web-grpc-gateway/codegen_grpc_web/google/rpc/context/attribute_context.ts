import { Struct, StructAmino, StructSDKType } from "../../protobuf/struct";
import { Timestamp } from "../../protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../protobuf/duration";
import { Any, AnyAmino, AnySDKType } from "../../protobuf/any";
import { Long, isSet, DeepPartial, isObject, toTimestamp, fromTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "google.rpc.context";
/**
 * This message defines the standard attribute vocabulary for Google APIs.
 * 
 * An attribute is a piece of metadata that describes an activity on a network
 * service. For example, the size of an HTTP request, or the status code of
 * an HTTP response.
 * 
 * Each attribute has a type and a name, which is logically defined as
 * a proto message field in `AttributeContext`. The field type becomes the
 * attribute type, and the field path becomes the attribute name. For example,
 * the attribute `source.ip` maps to field `AttributeContext.source.ip`.
 * 
 * This message definition is guaranteed not to have any wire breaking change.
 * So you can use it directly for passing attributes across different systems.
 * 
 * NOTE: Different system may generate different subset of attributes. Please
 * verify the system specification before relying on an attribute generated
 * a system.
 */
export interface AttributeContext {
  /**
   * The origin of a network activity. In a multi hop network activity,
   * the origin represents the sender of the first hop. For the first hop,
   * the `source` and the `origin` must have the same content.
   */
  origin?: AttributeContext_Peer;
  /**
   * The source of a network activity, such as starting a TCP connection.
   * In a multi hop network activity, the source represents the sender of the
   * last hop.
   */
  source?: AttributeContext_Peer;
  /**
   * The destination of a network activity, such as accepting a TCP connection.
   * In a multi hop network activity, the destination represents the receiver of
   * the last hop.
   */
  destination?: AttributeContext_Peer;
  /** Represents a network request, such as an HTTP request. */
  request?: AttributeContext_Request;
  /** Represents a network response, such as an HTTP response. */
  response?: AttributeContext_Response;
  /**
   * Represents a target resource that is involved with a network activity.
   * If multiple resources are involved with an activity, this must be the
   * primary one.
   */
  resource?: AttributeContext_Resource;
  /** Represents an API operation that is involved to a network activity. */
  api?: AttributeContext_Api;
  /** Supports extensions for advanced use cases, such as logs and metrics. */
  extensions: Any[];
}
export interface AttributeContextProtoMsg {
  typeUrl: "/google.rpc.context.AttributeContext";
  value: Uint8Array;
}
/**
 * This message defines the standard attribute vocabulary for Google APIs.
 * 
 * An attribute is a piece of metadata that describes an activity on a network
 * service. For example, the size of an HTTP request, or the status code of
 * an HTTP response.
 * 
 * Each attribute has a type and a name, which is logically defined as
 * a proto message field in `AttributeContext`. The field type becomes the
 * attribute type, and the field path becomes the attribute name. For example,
 * the attribute `source.ip` maps to field `AttributeContext.source.ip`.
 * 
 * This message definition is guaranteed not to have any wire breaking change.
 * So you can use it directly for passing attributes across different systems.
 * 
 * NOTE: Different system may generate different subset of attributes. Please
 * verify the system specification before relying on an attribute generated
 * a system.
 */
export interface AttributeContextAmino {
  /**
   * The origin of a network activity. In a multi hop network activity,
   * the origin represents the sender of the first hop. For the first hop,
   * the `source` and the `origin` must have the same content.
   */
  origin?: AttributeContext_PeerAmino;
  /**
   * The source of a network activity, such as starting a TCP connection.
   * In a multi hop network activity, the source represents the sender of the
   * last hop.
   */
  source?: AttributeContext_PeerAmino;
  /**
   * The destination of a network activity, such as accepting a TCP connection.
   * In a multi hop network activity, the destination represents the receiver of
   * the last hop.
   */
  destination?: AttributeContext_PeerAmino;
  /** Represents a network request, such as an HTTP request. */
  request?: AttributeContext_RequestAmino;
  /** Represents a network response, such as an HTTP response. */
  response?: AttributeContext_ResponseAmino;
  /**
   * Represents a target resource that is involved with a network activity.
   * If multiple resources are involved with an activity, this must be the
   * primary one.
   */
  resource?: AttributeContext_ResourceAmino;
  /** Represents an API operation that is involved to a network activity. */
  api?: AttributeContext_ApiAmino;
  /** Supports extensions for advanced use cases, such as logs and metrics. */
  extensions: AnyAmino[];
}
export interface AttributeContextAminoMsg {
  type: "/google.rpc.context.AttributeContext";
  value: AttributeContextAmino;
}
/**
 * This message defines the standard attribute vocabulary for Google APIs.
 * 
 * An attribute is a piece of metadata that describes an activity on a network
 * service. For example, the size of an HTTP request, or the status code of
 * an HTTP response.
 * 
 * Each attribute has a type and a name, which is logically defined as
 * a proto message field in `AttributeContext`. The field type becomes the
 * attribute type, and the field path becomes the attribute name. For example,
 * the attribute `source.ip` maps to field `AttributeContext.source.ip`.
 * 
 * This message definition is guaranteed not to have any wire breaking change.
 * So you can use it directly for passing attributes across different systems.
 * 
 * NOTE: Different system may generate different subset of attributes. Please
 * verify the system specification before relying on an attribute generated
 * a system.
 */
export interface AttributeContextSDKType {
  origin?: AttributeContext_PeerSDKType;
  source?: AttributeContext_PeerSDKType;
  destination?: AttributeContext_PeerSDKType;
  request?: AttributeContext_RequestSDKType;
  response?: AttributeContext_ResponseSDKType;
  resource?: AttributeContext_ResourceSDKType;
  api?: AttributeContext_ApiSDKType;
  extensions: AnySDKType[];
}
export interface AttributeContext_Peer_LabelsEntry {
  key: string;
  value: string;
}
export interface AttributeContext_Peer_LabelsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface AttributeContext_Peer_LabelsEntryAmino {
  key: string;
  value: string;
}
export interface AttributeContext_Peer_LabelsEntryAminoMsg {
  type: string;
  value: AttributeContext_Peer_LabelsEntryAmino;
}
export interface AttributeContext_Peer_LabelsEntrySDKType {
  key: string;
  value: string;
}
/**
 * This message defines attributes for a node that handles a network request.
 * The node can be either a service or an application that sends, forwards,
 * or receives the request. Service peers should fill in
 * `principal` and `labels` as appropriate.
 */
export interface AttributeContext_Peer {
  /** The IP address of the peer. */
  ip: string;
  /** The network port of the peer. */
  port: Long;
  /** The labels associated with the peer. */
  labels: {
    [key: string]: string;
  };
  /**
   * The identity of this peer. Similar to `Request.auth.principal`, but
   * relative to the peer instead of the request. For example, the
   * idenity associated with a load balancer that forwared the request.
   */
  principal: string;
  /**
   * The CLDR country/region code associated with the above IP address.
   * If the IP address is private, the `region_code` should reflect the
   * physical location where this peer is running.
   */
  regionCode: string;
}
export interface AttributeContext_PeerProtoMsg {
  typeUrl: "/google.rpc.context.Peer";
  value: Uint8Array;
}
/**
 * This message defines attributes for a node that handles a network request.
 * The node can be either a service or an application that sends, forwards,
 * or receives the request. Service peers should fill in
 * `principal` and `labels` as appropriate.
 */
export interface AttributeContext_PeerAmino {
  /** The IP address of the peer. */
  ip: string;
  /** The network port of the peer. */
  port: string;
  /** The labels associated with the peer. */
  labels: {
    [key: string]: string;
  };
  /**
   * The identity of this peer. Similar to `Request.auth.principal`, but
   * relative to the peer instead of the request. For example, the
   * idenity associated with a load balancer that forwared the request.
   */
  principal: string;
  /**
   * The CLDR country/region code associated with the above IP address.
   * If the IP address is private, the `region_code` should reflect the
   * physical location where this peer is running.
   */
  region_code: string;
}
export interface AttributeContext_PeerAminoMsg {
  type: "/google.rpc.context.Peer";
  value: AttributeContext_PeerAmino;
}
/**
 * This message defines attributes for a node that handles a network request.
 * The node can be either a service or an application that sends, forwards,
 * or receives the request. Service peers should fill in
 * `principal` and `labels` as appropriate.
 */
export interface AttributeContext_PeerSDKType {
  ip: string;
  port: Long;
  labels: {
    [key: string]: string;
  };
  principal: string;
  region_code: string;
}
/**
 * This message defines attributes associated with API operations, such as
 * a network API request. The terminology is based on the conventions used
 * by Google APIs, Istio, and OpenAPI.
 */
export interface AttributeContext_Api {
  /**
   * The API service name. It is a logical identifier for a networked API,
   * such as "pubsub.googleapis.com". The naming syntax depends on the
   * API management system being used for handling the request.
   */
  service: string;
  /**
   * The API operation name. For gRPC requests, it is the fully qualified API
   * method name, such as "google.pubsub.v1.Publisher.Publish". For OpenAPI
   * requests, it is the `operationId`, such as "getPet".
   */
  operation: string;
  /**
   * The API protocol used for sending the request, such as "http", "https",
   * "grpc", or "internal".
   */
  protocol: string;
  /**
   * The API version associated with the API operation above, such as "v1" or
   * "v1alpha1".
   */
  version: string;
}
export interface AttributeContext_ApiProtoMsg {
  typeUrl: "/google.rpc.context.Api";
  value: Uint8Array;
}
/**
 * This message defines attributes associated with API operations, such as
 * a network API request. The terminology is based on the conventions used
 * by Google APIs, Istio, and OpenAPI.
 */
export interface AttributeContext_ApiAmino {
  /**
   * The API service name. It is a logical identifier for a networked API,
   * such as "pubsub.googleapis.com". The naming syntax depends on the
   * API management system being used for handling the request.
   */
  service: string;
  /**
   * The API operation name. For gRPC requests, it is the fully qualified API
   * method name, such as "google.pubsub.v1.Publisher.Publish". For OpenAPI
   * requests, it is the `operationId`, such as "getPet".
   */
  operation: string;
  /**
   * The API protocol used for sending the request, such as "http", "https",
   * "grpc", or "internal".
   */
  protocol: string;
  /**
   * The API version associated with the API operation above, such as "v1" or
   * "v1alpha1".
   */
  version: string;
}
export interface AttributeContext_ApiAminoMsg {
  type: "/google.rpc.context.Api";
  value: AttributeContext_ApiAmino;
}
/**
 * This message defines attributes associated with API operations, such as
 * a network API request. The terminology is based on the conventions used
 * by Google APIs, Istio, and OpenAPI.
 */
export interface AttributeContext_ApiSDKType {
  service: string;
  operation: string;
  protocol: string;
  version: string;
}
/**
 * This message defines request authentication attributes. Terminology is
 * based on the JSON Web Token (JWT) standard, but the terms also
 * correlate to concepts in other standards.
 */
export interface AttributeContext_Auth {
  /**
   * The authenticated principal. Reflects the issuer (`iss`) and subject
   * (`sub`) claims within a JWT. The issuer and subject should be `/`
   * delimited, with `/` percent-encoded within the subject fragment. For
   * Google accounts, the principal format is:
   * "https://accounts.google.com/{id}"
   */
  principal: string;
  /**
   * The intended audience(s) for this authentication information. Reflects
   * the audience (`aud`) claim within a JWT. The audience
   * value(s) depends on the `issuer`, but typically include one or more of
   * the following pieces of information:
   * 
   * *  The services intended to receive the credential. For example,
   *    ["https://pubsub.googleapis.com/", "https://storage.googleapis.com/"].
   * *  A set of service-based scopes. For example,
   *    ["https://www.googleapis.com/auth/cloud-platform"].
   * *  The client id of an app, such as the Firebase project id for JWTs
   *    from Firebase Auth.
   * 
   * Consult the documentation for the credential issuer to determine the
   * information provided.
   */
  audiences: string[];
  /**
   * The authorized presenter of the credential. Reflects the optional
   * Authorized Presenter (`azp`) claim within a JWT or the
   * OAuth client id. For example, a Google Cloud Platform client id looks
   * as follows: "123456789012.apps.googleusercontent.com".
   */
  presenter: string;
  /**
   * Structured claims presented with the credential. JWTs include
   * `{key: value}` pairs for standard and private claims. The following
   * is a subset of the standard required and optional claims that would
   * typically be presented for a Google-based JWT:
   * 
   *    {'iss': 'accounts.google.com',
   *     'sub': '113289723416554971153',
   *     'aud': ['123456789012', 'pubsub.googleapis.com'],
   *     'azp': '123456789012.apps.googleusercontent.com',
   *     'email': 'jsmith@example.com',
   *     'iat': 1353601026,
   *     'exp': 1353604926}
   * 
   * SAML assertions are similarly specified, but with an identity provider
   * dependent structure.
   */
  claims?: Struct;
  /**
   * A list of access level resource names that allow resources to be
   * accessed by authenticated requester. It is part of Secure GCP processing
   * for the incoming request. An access level string has the format:
   * "//{api_service_name}/accessPolicies/{policy_id}/accessLevels/{short_name}"
   * 
   * Example:
   * "//accesscontextmanager.googleapis.com/accessPolicies/MY_POLICY_ID/accessLevels/MY_LEVEL"
   */
  accessLevels: string[];
}
export interface AttributeContext_AuthProtoMsg {
  typeUrl: "/google.rpc.context.Auth";
  value: Uint8Array;
}
/**
 * This message defines request authentication attributes. Terminology is
 * based on the JSON Web Token (JWT) standard, but the terms also
 * correlate to concepts in other standards.
 */
export interface AttributeContext_AuthAmino {
  /**
   * The authenticated principal. Reflects the issuer (`iss`) and subject
   * (`sub`) claims within a JWT. The issuer and subject should be `/`
   * delimited, with `/` percent-encoded within the subject fragment. For
   * Google accounts, the principal format is:
   * "https://accounts.google.com/{id}"
   */
  principal: string;
  /**
   * The intended audience(s) for this authentication information. Reflects
   * the audience (`aud`) claim within a JWT. The audience
   * value(s) depends on the `issuer`, but typically include one or more of
   * the following pieces of information:
   * 
   * *  The services intended to receive the credential. For example,
   *    ["https://pubsub.googleapis.com/", "https://storage.googleapis.com/"].
   * *  A set of service-based scopes. For example,
   *    ["https://www.googleapis.com/auth/cloud-platform"].
   * *  The client id of an app, such as the Firebase project id for JWTs
   *    from Firebase Auth.
   * 
   * Consult the documentation for the credential issuer to determine the
   * information provided.
   */
  audiences: string[];
  /**
   * The authorized presenter of the credential. Reflects the optional
   * Authorized Presenter (`azp`) claim within a JWT or the
   * OAuth client id. For example, a Google Cloud Platform client id looks
   * as follows: "123456789012.apps.googleusercontent.com".
   */
  presenter: string;
  /**
   * Structured claims presented with the credential. JWTs include
   * `{key: value}` pairs for standard and private claims. The following
   * is a subset of the standard required and optional claims that would
   * typically be presented for a Google-based JWT:
   * 
   *    {'iss': 'accounts.google.com',
   *     'sub': '113289723416554971153',
   *     'aud': ['123456789012', 'pubsub.googleapis.com'],
   *     'azp': '123456789012.apps.googleusercontent.com',
   *     'email': 'jsmith@example.com',
   *     'iat': 1353601026,
   *     'exp': 1353604926}
   * 
   * SAML assertions are similarly specified, but with an identity provider
   * dependent structure.
   */
  claims?: StructAmino;
  /**
   * A list of access level resource names that allow resources to be
   * accessed by authenticated requester. It is part of Secure GCP processing
   * for the incoming request. An access level string has the format:
   * "//{api_service_name}/accessPolicies/{policy_id}/accessLevels/{short_name}"
   * 
   * Example:
   * "//accesscontextmanager.googleapis.com/accessPolicies/MY_POLICY_ID/accessLevels/MY_LEVEL"
   */
  access_levels: string[];
}
export interface AttributeContext_AuthAminoMsg {
  type: "/google.rpc.context.Auth";
  value: AttributeContext_AuthAmino;
}
/**
 * This message defines request authentication attributes. Terminology is
 * based on the JSON Web Token (JWT) standard, but the terms also
 * correlate to concepts in other standards.
 */
export interface AttributeContext_AuthSDKType {
  principal: string;
  audiences: string[];
  presenter: string;
  claims?: StructSDKType;
  access_levels: string[];
}
export interface AttributeContext_Request_HeadersEntry {
  key: string;
  value: string;
}
export interface AttributeContext_Request_HeadersEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface AttributeContext_Request_HeadersEntryAmino {
  key: string;
  value: string;
}
export interface AttributeContext_Request_HeadersEntryAminoMsg {
  type: string;
  value: AttributeContext_Request_HeadersEntryAmino;
}
export interface AttributeContext_Request_HeadersEntrySDKType {
  key: string;
  value: string;
}
/**
 * This message defines attributes for an HTTP request. If the actual
 * request is not an HTTP request, the runtime system should try to map
 * the actual request to an equivalent HTTP request.
 */
export interface AttributeContext_Request {
  /**
   * The unique ID for a request, which can be propagated to downstream
   * systems. The ID should have low probability of collision
   * within a single day for a specific service.
   */
  id: string;
  /** The HTTP request method, such as `GET`, `POST`. */
  method: string;
  /**
   * The HTTP request headers. If multiple headers share the same key, they
   * must be merged according to the HTTP spec. All header keys must be
   * lowercased, because HTTP header keys are case-insensitive.
   */
  headers: {
    [key: string]: string;
  };
  /** The HTTP URL path. */
  path: string;
  /** The HTTP request `Host` header value. */
  host: string;
  /** The HTTP URL scheme, such as `http` and `https`. */
  scheme: string;
  /**
   * The HTTP URL query in the format of `name1=value1&name2=value2`, as it
   * appears in the first line of the HTTP request. No decoding is performed.
   */
  query: string;
  /**
   * The timestamp when the `destination` service receives the last byte of
   * the request.
   */
  time?: Date;
  /** The HTTP request size in bytes. If unknown, it must be -1. */
  size: Long;
  /**
   * The network protocol used with the request, such as "http/1.1",
   * "spdy/3", "h2", "h2c", "webrtc", "tcp", "udp", "quic". See
   * https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids
   * for details.
   */
  protocol: string;
  /**
   * A special parameter for request reason. It is used by security systems
   * to associate auditing information with a request.
   */
  reason: string;
  /**
   * The request authentication. May be absent for unauthenticated requests.
   * Derived from the HTTP request `Authorization` header or equivalent.
   */
  auth?: AttributeContext_Auth;
}
export interface AttributeContext_RequestProtoMsg {
  typeUrl: "/google.rpc.context.Request";
  value: Uint8Array;
}
/**
 * This message defines attributes for an HTTP request. If the actual
 * request is not an HTTP request, the runtime system should try to map
 * the actual request to an equivalent HTTP request.
 */
export interface AttributeContext_RequestAmino {
  /**
   * The unique ID for a request, which can be propagated to downstream
   * systems. The ID should have low probability of collision
   * within a single day for a specific service.
   */
  id: string;
  /** The HTTP request method, such as `GET`, `POST`. */
  method: string;
  /**
   * The HTTP request headers. If multiple headers share the same key, they
   * must be merged according to the HTTP spec. All header keys must be
   * lowercased, because HTTP header keys are case-insensitive.
   */
  headers: {
    [key: string]: string;
  };
  /** The HTTP URL path. */
  path: string;
  /** The HTTP request `Host` header value. */
  host: string;
  /** The HTTP URL scheme, such as `http` and `https`. */
  scheme: string;
  /**
   * The HTTP URL query in the format of `name1=value1&name2=value2`, as it
   * appears in the first line of the HTTP request. No decoding is performed.
   */
  query: string;
  /**
   * The timestamp when the `destination` service receives the last byte of
   * the request.
   */
  time?: Date;
  /** The HTTP request size in bytes. If unknown, it must be -1. */
  size: string;
  /**
   * The network protocol used with the request, such as "http/1.1",
   * "spdy/3", "h2", "h2c", "webrtc", "tcp", "udp", "quic". See
   * https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids
   * for details.
   */
  protocol: string;
  /**
   * A special parameter for request reason. It is used by security systems
   * to associate auditing information with a request.
   */
  reason: string;
  /**
   * The request authentication. May be absent for unauthenticated requests.
   * Derived from the HTTP request `Authorization` header or equivalent.
   */
  auth?: AttributeContext_AuthAmino;
}
export interface AttributeContext_RequestAminoMsg {
  type: "/google.rpc.context.Request";
  value: AttributeContext_RequestAmino;
}
/**
 * This message defines attributes for an HTTP request. If the actual
 * request is not an HTTP request, the runtime system should try to map
 * the actual request to an equivalent HTTP request.
 */
export interface AttributeContext_RequestSDKType {
  id: string;
  method: string;
  headers: {
    [key: string]: string;
  };
  path: string;
  host: string;
  scheme: string;
  query: string;
  time?: Date;
  size: Long;
  protocol: string;
  reason: string;
  auth?: AttributeContext_AuthSDKType;
}
export interface AttributeContext_Response_HeadersEntry {
  key: string;
  value: string;
}
export interface AttributeContext_Response_HeadersEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface AttributeContext_Response_HeadersEntryAmino {
  key: string;
  value: string;
}
export interface AttributeContext_Response_HeadersEntryAminoMsg {
  type: string;
  value: AttributeContext_Response_HeadersEntryAmino;
}
export interface AttributeContext_Response_HeadersEntrySDKType {
  key: string;
  value: string;
}
/**
 * This message defines attributes for a typical network response. It
 * generally models semantics of an HTTP response.
 */
export interface AttributeContext_Response {
  /** The HTTP response status code, such as `200` and `404`. */
  code: Long;
  /** The HTTP response size in bytes. If unknown, it must be -1. */
  size: Long;
  /**
   * The HTTP response headers. If multiple headers share the same key, they
   * must be merged according to HTTP spec. All header keys must be
   * lowercased, because HTTP header keys are case-insensitive.
   */
  headers: {
    [key: string]: string;
  };
  /**
   * The timestamp when the `destination` service sends the last byte of
   * the response.
   */
  time?: Date;
  /**
   * The length of time it takes the backend service to fully respond to a
   * request. Measured from when the destination service starts to send the
   * request to the backend until when the destination service receives the
   * complete response from the backend.
   */
  backendLatency?: Duration;
}
export interface AttributeContext_ResponseProtoMsg {
  typeUrl: "/google.rpc.context.Response";
  value: Uint8Array;
}
/**
 * This message defines attributes for a typical network response. It
 * generally models semantics of an HTTP response.
 */
export interface AttributeContext_ResponseAmino {
  /** The HTTP response status code, such as `200` and `404`. */
  code: string;
  /** The HTTP response size in bytes. If unknown, it must be -1. */
  size: string;
  /**
   * The HTTP response headers. If multiple headers share the same key, they
   * must be merged according to HTTP spec. All header keys must be
   * lowercased, because HTTP header keys are case-insensitive.
   */
  headers: {
    [key: string]: string;
  };
  /**
   * The timestamp when the `destination` service sends the last byte of
   * the response.
   */
  time?: Date;
  /**
   * The length of time it takes the backend service to fully respond to a
   * request. Measured from when the destination service starts to send the
   * request to the backend until when the destination service receives the
   * complete response from the backend.
   */
  backend_latency?: DurationAmino;
}
export interface AttributeContext_ResponseAminoMsg {
  type: "/google.rpc.context.Response";
  value: AttributeContext_ResponseAmino;
}
/**
 * This message defines attributes for a typical network response. It
 * generally models semantics of an HTTP response.
 */
export interface AttributeContext_ResponseSDKType {
  code: Long;
  size: Long;
  headers: {
    [key: string]: string;
  };
  time?: Date;
  backend_latency?: DurationSDKType;
}
export interface AttributeContext_Resource_LabelsEntry {
  key: string;
  value: string;
}
export interface AttributeContext_Resource_LabelsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface AttributeContext_Resource_LabelsEntryAmino {
  key: string;
  value: string;
}
export interface AttributeContext_Resource_LabelsEntryAminoMsg {
  type: string;
  value: AttributeContext_Resource_LabelsEntryAmino;
}
export interface AttributeContext_Resource_LabelsEntrySDKType {
  key: string;
  value: string;
}
export interface AttributeContext_Resource_AnnotationsEntry {
  key: string;
  value: string;
}
export interface AttributeContext_Resource_AnnotationsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface AttributeContext_Resource_AnnotationsEntryAmino {
  key: string;
  value: string;
}
export interface AttributeContext_Resource_AnnotationsEntryAminoMsg {
  type: string;
  value: AttributeContext_Resource_AnnotationsEntryAmino;
}
export interface AttributeContext_Resource_AnnotationsEntrySDKType {
  key: string;
  value: string;
}
/**
 * This message defines core attributes for a resource. A resource is an
 * addressable (named) entity provided by the destination service. For
 * example, a file stored on a network storage service.
 */
export interface AttributeContext_Resource {
  /**
   * The name of the service that this resource belongs to, such as
   * `pubsub.googleapis.com`. The service may be different from the DNS
   * hostname that actually serves the request.
   */
  service: string;
  /**
   * The stable identifier (name) of a resource on the `service`. A resource
   * can be logically identified as "//{resource.service}/{resource.name}".
   * The differences between a resource name and a URI are:
   * 
   * *   Resource name is a logical identifier, independent of network
   *     protocol and API version. For example,
   *     `//pubsub.googleapis.com/projects/123/topics/news-feed`.
   * *   URI often includes protocol and version information, so it can
   *     be used directly by applications. For example,
   *     `https://pubsub.googleapis.com/v1/projects/123/topics/news-feed`.
   * 
   * See https://cloud.google.com/apis/design/resource_names for details.
   */
  name: string;
  /**
   * The type of the resource. The syntax is platform-specific because
   * different platforms define their resources differently.
   * 
   * For Google APIs, the type format must be "{service}/{kind}".
   */
  type: string;
  /**
   * The labels or tags on the resource, such as AWS resource tags and
   * Kubernetes resource labels.
   */
  labels: {
    [key: string]: string;
  };
  /**
   * The unique identifier of the resource. UID is unique in the time
   * and space for this resource within the scope of the service. It is
   * typically generated by the server on successful creation of a resource
   * and must not be changed. UID is used to uniquely identify resources
   * with resource name reuses. This should be a UUID4.
   */
  uid: string;
  /**
   * Annotations is an unstructured key-value map stored with a resource that
   * may be set by external tools to store and retrieve arbitrary metadata.
   * They are not queryable and should be preserved when modifying objects.
   * 
   * More info: https://kubernetes.io/docs/user-guide/annotations
   */
  annotations: {
    [key: string]: string;
  };
  /** Mutable. The display name set by clients. Must be <= 63 characters. */
  displayName: string;
  /**
   * Output only. The timestamp when the resource was created. This may
   * be either the time creation was initiated or when it was completed.
   */
  createTime?: Date;
  /**
   * Output only. The timestamp when the resource was last updated. Any
   * change to the resource made by users must refresh this value.
   * Changes to a resource made by the service should refresh this value.
   */
  updateTime?: Date;
  /**
   * Output only. The timestamp when the resource was deleted.
   * If the resource is not deleted, this must be empty.
   */
  deleteTime?: Date;
  /**
   * Output only. An opaque value that uniquely identifies a version or
   * generation of a resource. It can be used to confirm that the client
   * and server agree on the ordering of a resource being written.
   */
  etag: string;
  /**
   * Immutable. The location of the resource. The location encoding is
   * specific to the service provider, and new encoding may be introduced
   * as the service evolves.
   * 
   * For Google Cloud products, the encoding is what is used by Google Cloud
   * APIs, such as `us-east1`, `aws-us-east-1`, and `azure-eastus2`. The
   * semantics of `location` is identical to the
   * `cloud.googleapis.com/location` label used by some Google Cloud APIs.
   */
  location: string;
}
export interface AttributeContext_ResourceProtoMsg {
  typeUrl: "/google.rpc.context.Resource";
  value: Uint8Array;
}
/**
 * This message defines core attributes for a resource. A resource is an
 * addressable (named) entity provided by the destination service. For
 * example, a file stored on a network storage service.
 */
export interface AttributeContext_ResourceAmino {
  /**
   * The name of the service that this resource belongs to, such as
   * `pubsub.googleapis.com`. The service may be different from the DNS
   * hostname that actually serves the request.
   */
  service: string;
  /**
   * The stable identifier (name) of a resource on the `service`. A resource
   * can be logically identified as "//{resource.service}/{resource.name}".
   * The differences between a resource name and a URI are:
   * 
   * *   Resource name is a logical identifier, independent of network
   *     protocol and API version. For example,
   *     `//pubsub.googleapis.com/projects/123/topics/news-feed`.
   * *   URI often includes protocol and version information, so it can
   *     be used directly by applications. For example,
   *     `https://pubsub.googleapis.com/v1/projects/123/topics/news-feed`.
   * 
   * See https://cloud.google.com/apis/design/resource_names for details.
   */
  name: string;
  /**
   * The type of the resource. The syntax is platform-specific because
   * different platforms define their resources differently.
   * 
   * For Google APIs, the type format must be "{service}/{kind}".
   */
  type: string;
  /**
   * The labels or tags on the resource, such as AWS resource tags and
   * Kubernetes resource labels.
   */
  labels: {
    [key: string]: string;
  };
  /**
   * The unique identifier of the resource. UID is unique in the time
   * and space for this resource within the scope of the service. It is
   * typically generated by the server on successful creation of a resource
   * and must not be changed. UID is used to uniquely identify resources
   * with resource name reuses. This should be a UUID4.
   */
  uid: string;
  /**
   * Annotations is an unstructured key-value map stored with a resource that
   * may be set by external tools to store and retrieve arbitrary metadata.
   * They are not queryable and should be preserved when modifying objects.
   * 
   * More info: https://kubernetes.io/docs/user-guide/annotations
   */
  annotations: {
    [key: string]: string;
  };
  /** Mutable. The display name set by clients. Must be <= 63 characters. */
  display_name: string;
  /**
   * Output only. The timestamp when the resource was created. This may
   * be either the time creation was initiated or when it was completed.
   */
  create_time?: Date;
  /**
   * Output only. The timestamp when the resource was last updated. Any
   * change to the resource made by users must refresh this value.
   * Changes to a resource made by the service should refresh this value.
   */
  update_time?: Date;
  /**
   * Output only. The timestamp when the resource was deleted.
   * If the resource is not deleted, this must be empty.
   */
  delete_time?: Date;
  /**
   * Output only. An opaque value that uniquely identifies a version or
   * generation of a resource. It can be used to confirm that the client
   * and server agree on the ordering of a resource being written.
   */
  etag: string;
  /**
   * Immutable. The location of the resource. The location encoding is
   * specific to the service provider, and new encoding may be introduced
   * as the service evolves.
   * 
   * For Google Cloud products, the encoding is what is used by Google Cloud
   * APIs, such as `us-east1`, `aws-us-east-1`, and `azure-eastus2`. The
   * semantics of `location` is identical to the
   * `cloud.googleapis.com/location` label used by some Google Cloud APIs.
   */
  location: string;
}
export interface AttributeContext_ResourceAminoMsg {
  type: "/google.rpc.context.Resource";
  value: AttributeContext_ResourceAmino;
}
/**
 * This message defines core attributes for a resource. A resource is an
 * addressable (named) entity provided by the destination service. For
 * example, a file stored on a network storage service.
 */
export interface AttributeContext_ResourceSDKType {
  service: string;
  name: string;
  type: string;
  labels: {
    [key: string]: string;
  };
  uid: string;
  annotations: {
    [key: string]: string;
  };
  display_name: string;
  create_time?: Date;
  update_time?: Date;
  delete_time?: Date;
  etag: string;
  location: string;
}
function createBaseAttributeContext(): AttributeContext {
  return {
    origin: undefined,
    source: undefined,
    destination: undefined,
    request: undefined,
    response: undefined,
    resource: undefined,
    api: undefined,
    extensions: []
  };
}
export const AttributeContext = {
  typeUrl: "/google.rpc.context.AttributeContext",
  encode(message: AttributeContext, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.origin !== undefined) {
      AttributeContext_Peer.encode(message.origin, writer.uint32(58).fork()).ldelim();
    }
    if (message.source !== undefined) {
      AttributeContext_Peer.encode(message.source, writer.uint32(10).fork()).ldelim();
    }
    if (message.destination !== undefined) {
      AttributeContext_Peer.encode(message.destination, writer.uint32(18).fork()).ldelim();
    }
    if (message.request !== undefined) {
      AttributeContext_Request.encode(message.request, writer.uint32(26).fork()).ldelim();
    }
    if (message.response !== undefined) {
      AttributeContext_Response.encode(message.response, writer.uint32(34).fork()).ldelim();
    }
    if (message.resource !== undefined) {
      AttributeContext_Resource.encode(message.resource, writer.uint32(42).fork()).ldelim();
    }
    if (message.api !== undefined) {
      AttributeContext_Api.encode(message.api, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.extensions) {
      Any.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 7:
          message.origin = AttributeContext_Peer.decode(reader, reader.uint32());
          break;
        case 1:
          message.source = AttributeContext_Peer.decode(reader, reader.uint32());
          break;
        case 2:
          message.destination = AttributeContext_Peer.decode(reader, reader.uint32());
          break;
        case 3:
          message.request = AttributeContext_Request.decode(reader, reader.uint32());
          break;
        case 4:
          message.response = AttributeContext_Response.decode(reader, reader.uint32());
          break;
        case 5:
          message.resource = AttributeContext_Resource.decode(reader, reader.uint32());
          break;
        case 6:
          message.api = AttributeContext_Api.decode(reader, reader.uint32());
          break;
        case 8:
          message.extensions.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AttributeContext {
    return {
      origin: isSet(object.origin) ? AttributeContext_Peer.fromJSON(object.origin) : undefined,
      source: isSet(object.source) ? AttributeContext_Peer.fromJSON(object.source) : undefined,
      destination: isSet(object.destination) ? AttributeContext_Peer.fromJSON(object.destination) : undefined,
      request: isSet(object.request) ? AttributeContext_Request.fromJSON(object.request) : undefined,
      response: isSet(object.response) ? AttributeContext_Response.fromJSON(object.response) : undefined,
      resource: isSet(object.resource) ? AttributeContext_Resource.fromJSON(object.resource) : undefined,
      api: isSet(object.api) ? AttributeContext_Api.fromJSON(object.api) : undefined,
      extensions: Array.isArray(object?.extensions) ? object.extensions.map((e: any) => Any.fromJSON(e)) : []
    };
  },
  toJSON(message: AttributeContext): unknown {
    const obj: any = {};
    message.origin !== undefined && (obj.origin = message.origin ? AttributeContext_Peer.toJSON(message.origin) : undefined);
    message.source !== undefined && (obj.source = message.source ? AttributeContext_Peer.toJSON(message.source) : undefined);
    message.destination !== undefined && (obj.destination = message.destination ? AttributeContext_Peer.toJSON(message.destination) : undefined);
    message.request !== undefined && (obj.request = message.request ? AttributeContext_Request.toJSON(message.request) : undefined);
    message.response !== undefined && (obj.response = message.response ? AttributeContext_Response.toJSON(message.response) : undefined);
    message.resource !== undefined && (obj.resource = message.resource ? AttributeContext_Resource.toJSON(message.resource) : undefined);
    message.api !== undefined && (obj.api = message.api ? AttributeContext_Api.toJSON(message.api) : undefined);
    if (message.extensions) {
      obj.extensions = message.extensions.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.extensions = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<AttributeContext>): AttributeContext {
    const message = createBaseAttributeContext();
    message.origin = object.origin !== undefined && object.origin !== null ? AttributeContext_Peer.fromPartial(object.origin) : undefined;
    message.source = object.source !== undefined && object.source !== null ? AttributeContext_Peer.fromPartial(object.source) : undefined;
    message.destination = object.destination !== undefined && object.destination !== null ? AttributeContext_Peer.fromPartial(object.destination) : undefined;
    message.request = object.request !== undefined && object.request !== null ? AttributeContext_Request.fromPartial(object.request) : undefined;
    message.response = object.response !== undefined && object.response !== null ? AttributeContext_Response.fromPartial(object.response) : undefined;
    message.resource = object.resource !== undefined && object.resource !== null ? AttributeContext_Resource.fromPartial(object.resource) : undefined;
    message.api = object.api !== undefined && object.api !== null ? AttributeContext_Api.fromPartial(object.api) : undefined;
    message.extensions = object.extensions?.map(e => Any.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: AttributeContextSDKType): AttributeContext {
    return {
      origin: object.origin ? AttributeContext_Peer.fromSDK(object.origin) : undefined,
      source: object.source ? AttributeContext_Peer.fromSDK(object.source) : undefined,
      destination: object.destination ? AttributeContext_Peer.fromSDK(object.destination) : undefined,
      request: object.request ? AttributeContext_Request.fromSDK(object.request) : undefined,
      response: object.response ? AttributeContext_Response.fromSDK(object.response) : undefined,
      resource: object.resource ? AttributeContext_Resource.fromSDK(object.resource) : undefined,
      api: object.api ? AttributeContext_Api.fromSDK(object.api) : undefined,
      extensions: Array.isArray(object?.extensions) ? object.extensions.map((e: any) => Any.fromSDK(e)) : []
    };
  },
  toSDK(message: AttributeContext): AttributeContextSDKType {
    const obj: any = {};
    message.origin !== undefined && (obj.origin = message.origin ? AttributeContext_Peer.toSDK(message.origin) : undefined);
    message.source !== undefined && (obj.source = message.source ? AttributeContext_Peer.toSDK(message.source) : undefined);
    message.destination !== undefined && (obj.destination = message.destination ? AttributeContext_Peer.toSDK(message.destination) : undefined);
    message.request !== undefined && (obj.request = message.request ? AttributeContext_Request.toSDK(message.request) : undefined);
    message.response !== undefined && (obj.response = message.response ? AttributeContext_Response.toSDK(message.response) : undefined);
    message.resource !== undefined && (obj.resource = message.resource ? AttributeContext_Resource.toSDK(message.resource) : undefined);
    message.api !== undefined && (obj.api = message.api ? AttributeContext_Api.toSDK(message.api) : undefined);
    if (message.extensions) {
      obj.extensions = message.extensions.map(e => e ? Any.toSDK(e) : undefined);
    } else {
      obj.extensions = [];
    }
    return obj;
  },
  fromAmino(object: AttributeContextAmino): AttributeContext {
    return {
      origin: object?.origin ? AttributeContext_Peer.fromAmino(object.origin) : undefined,
      source: object?.source ? AttributeContext_Peer.fromAmino(object.source) : undefined,
      destination: object?.destination ? AttributeContext_Peer.fromAmino(object.destination) : undefined,
      request: object?.request ? AttributeContext_Request.fromAmino(object.request) : undefined,
      response: object?.response ? AttributeContext_Response.fromAmino(object.response) : undefined,
      resource: object?.resource ? AttributeContext_Resource.fromAmino(object.resource) : undefined,
      api: object?.api ? AttributeContext_Api.fromAmino(object.api) : undefined,
      extensions: Array.isArray(object?.extensions) ? object.extensions.map((e: any) => Any.fromAmino(e)) : []
    };
  },
  toAmino(message: AttributeContext): AttributeContextAmino {
    const obj: any = {};
    obj.origin = message.origin ? AttributeContext_Peer.toAmino(message.origin) : undefined;
    obj.source = message.source ? AttributeContext_Peer.toAmino(message.source) : undefined;
    obj.destination = message.destination ? AttributeContext_Peer.toAmino(message.destination) : undefined;
    obj.request = message.request ? AttributeContext_Request.toAmino(message.request) : undefined;
    obj.response = message.response ? AttributeContext_Response.toAmino(message.response) : undefined;
    obj.resource = message.resource ? AttributeContext_Resource.toAmino(message.resource) : undefined;
    obj.api = message.api ? AttributeContext_Api.toAmino(message.api) : undefined;
    if (message.extensions) {
      obj.extensions = message.extensions.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.extensions = [];
    }
    return obj;
  },
  fromAminoMsg(object: AttributeContextAminoMsg): AttributeContext {
    return AttributeContext.fromAmino(object.value);
  },
  fromProtoMsg(message: AttributeContextProtoMsg): AttributeContext {
    return AttributeContext.decode(message.value);
  },
  toProto(message: AttributeContext): Uint8Array {
    return AttributeContext.encode(message).finish();
  },
  toProtoMsg(message: AttributeContext): AttributeContextProtoMsg {
    return {
      typeUrl: "/google.rpc.context.AttributeContext",
      value: AttributeContext.encode(message).finish()
    };
  }
};
function createBaseAttributeContext_Peer_LabelsEntry(): AttributeContext_Peer_LabelsEntry {
  return {
    key: "",
    value: ""
  };
}
export const AttributeContext_Peer_LabelsEntry = {
  encode(message: AttributeContext_Peer_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Peer_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Peer_LabelsEntry();
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
  fromJSON(object: any): AttributeContext_Peer_LabelsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: AttributeContext_Peer_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: DeepPartial<AttributeContext_Peer_LabelsEntry>): AttributeContext_Peer_LabelsEntry {
    const message = createBaseAttributeContext_Peer_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromSDK(object: AttributeContext_Peer_LabelsEntrySDKType): AttributeContext_Peer_LabelsEntry {
    return {
      key: object?.key,
      value: object?.value
    };
  },
  toSDK(message: AttributeContext_Peer_LabelsEntry): AttributeContext_Peer_LabelsEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: AttributeContext_Peer_LabelsEntryAmino): AttributeContext_Peer_LabelsEntry {
    return {
      key: object.key,
      value: object.value
    };
  },
  toAmino(message: AttributeContext_Peer_LabelsEntry): AttributeContext_Peer_LabelsEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: AttributeContext_Peer_LabelsEntryAminoMsg): AttributeContext_Peer_LabelsEntry {
    return AttributeContext_Peer_LabelsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: AttributeContext_Peer_LabelsEntryProtoMsg): AttributeContext_Peer_LabelsEntry {
    return AttributeContext_Peer_LabelsEntry.decode(message.value);
  },
  toProto(message: AttributeContext_Peer_LabelsEntry): Uint8Array {
    return AttributeContext_Peer_LabelsEntry.encode(message).finish();
  }
};
function createBaseAttributeContext_Peer(): AttributeContext_Peer {
  return {
    ip: "",
    port: Long.ZERO,
    labels: {},
    principal: "",
    regionCode: ""
  };
}
export const AttributeContext_Peer = {
  typeUrl: "/google.rpc.context.Peer",
  encode(message: AttributeContext_Peer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ip !== "") {
      writer.uint32(10).string(message.ip);
    }
    if (!message.port.isZero()) {
      writer.uint32(16).int64(message.port);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      AttributeContext_Peer_LabelsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(50).fork()).ldelim();
    });
    if (message.principal !== "") {
      writer.uint32(58).string(message.principal);
    }
    if (message.regionCode !== "") {
      writer.uint32(66).string(message.regionCode);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Peer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Peer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ip = reader.string();
          break;
        case 2:
          message.port = (reader.int64() as Long);
          break;
        case 6:
          const entry6 = AttributeContext_Peer_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          break;
        case 7:
          message.principal = reader.string();
          break;
        case 8:
          message.regionCode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AttributeContext_Peer {
    return {
      ip: isSet(object.ip) ? String(object.ip) : "",
      port: isSet(object.port) ? Long.fromValue(object.port) : Long.ZERO,
      labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      principal: isSet(object.principal) ? String(object.principal) : "",
      regionCode: isSet(object.regionCode) ? String(object.regionCode) : ""
    };
  },
  toJSON(message: AttributeContext_Peer): unknown {
    const obj: any = {};
    message.ip !== undefined && (obj.ip = message.ip);
    message.port !== undefined && (obj.port = (message.port || Long.ZERO).toString());
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.principal !== undefined && (obj.principal = message.principal);
    message.regionCode !== undefined && (obj.regionCode = message.regionCode);
    return obj;
  },
  fromPartial(object: DeepPartial<AttributeContext_Peer>): AttributeContext_Peer {
    const message = createBaseAttributeContext_Peer();
    message.ip = object.ip ?? "";
    message.port = object.port !== undefined && object.port !== null ? Long.fromValue(object.port) : Long.ZERO;
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.principal = object.principal ?? "";
    message.regionCode = object.regionCode ?? "";
    return message;
  },
  fromSDK(object: AttributeContext_PeerSDKType): AttributeContext_Peer {
    return {
      ip: object?.ip,
      port: object?.port,
      labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      principal: object?.principal,
      regionCode: object?.region_code
    };
  },
  toSDK(message: AttributeContext_Peer): AttributeContext_PeerSDKType {
    const obj: any = {};
    obj.ip = message.ip;
    obj.port = message.port;
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    obj.principal = message.principal;
    obj.region_code = message.regionCode;
    return obj;
  },
  fromAmino(object: AttributeContext_PeerAmino): AttributeContext_Peer {
    return {
      ip: object.ip,
      port: Long.fromString(object.port),
      labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      principal: object.principal,
      regionCode: object.region_code
    };
  },
  toAmino(message: AttributeContext_Peer): AttributeContext_PeerAmino {
    const obj: any = {};
    obj.ip = message.ip;
    obj.port = message.port ? message.port.toString() : undefined;
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    obj.principal = message.principal;
    obj.region_code = message.regionCode;
    return obj;
  },
  fromAminoMsg(object: AttributeContext_PeerAminoMsg): AttributeContext_Peer {
    return AttributeContext_Peer.fromAmino(object.value);
  },
  fromProtoMsg(message: AttributeContext_PeerProtoMsg): AttributeContext_Peer {
    return AttributeContext_Peer.decode(message.value);
  },
  toProto(message: AttributeContext_Peer): Uint8Array {
    return AttributeContext_Peer.encode(message).finish();
  },
  toProtoMsg(message: AttributeContext_Peer): AttributeContext_PeerProtoMsg {
    return {
      typeUrl: "/google.rpc.context.Peer",
      value: AttributeContext_Peer.encode(message).finish()
    };
  }
};
function createBaseAttributeContext_Api(): AttributeContext_Api {
  return {
    service: "",
    operation: "",
    protocol: "",
    version: ""
  };
}
export const AttributeContext_Api = {
  typeUrl: "/google.rpc.context.Api",
  encode(message: AttributeContext_Api, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.service !== "") {
      writer.uint32(10).string(message.service);
    }
    if (message.operation !== "") {
      writer.uint32(18).string(message.operation);
    }
    if (message.protocol !== "") {
      writer.uint32(26).string(message.protocol);
    }
    if (message.version !== "") {
      writer.uint32(34).string(message.version);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Api {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Api();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.service = reader.string();
          break;
        case 2:
          message.operation = reader.string();
          break;
        case 3:
          message.protocol = reader.string();
          break;
        case 4:
          message.version = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AttributeContext_Api {
    return {
      service: isSet(object.service) ? String(object.service) : "",
      operation: isSet(object.operation) ? String(object.operation) : "",
      protocol: isSet(object.protocol) ? String(object.protocol) : "",
      version: isSet(object.version) ? String(object.version) : ""
    };
  },
  toJSON(message: AttributeContext_Api): unknown {
    const obj: any = {};
    message.service !== undefined && (obj.service = message.service);
    message.operation !== undefined && (obj.operation = message.operation);
    message.protocol !== undefined && (obj.protocol = message.protocol);
    message.version !== undefined && (obj.version = message.version);
    return obj;
  },
  fromPartial(object: DeepPartial<AttributeContext_Api>): AttributeContext_Api {
    const message = createBaseAttributeContext_Api();
    message.service = object.service ?? "";
    message.operation = object.operation ?? "";
    message.protocol = object.protocol ?? "";
    message.version = object.version ?? "";
    return message;
  },
  fromSDK(object: AttributeContext_ApiSDKType): AttributeContext_Api {
    return {
      service: object?.service,
      operation: object?.operation,
      protocol: object?.protocol,
      version: object?.version
    };
  },
  toSDK(message: AttributeContext_Api): AttributeContext_ApiSDKType {
    const obj: any = {};
    obj.service = message.service;
    obj.operation = message.operation;
    obj.protocol = message.protocol;
    obj.version = message.version;
    return obj;
  },
  fromAmino(object: AttributeContext_ApiAmino): AttributeContext_Api {
    return {
      service: object.service,
      operation: object.operation,
      protocol: object.protocol,
      version: object.version
    };
  },
  toAmino(message: AttributeContext_Api): AttributeContext_ApiAmino {
    const obj: any = {};
    obj.service = message.service;
    obj.operation = message.operation;
    obj.protocol = message.protocol;
    obj.version = message.version;
    return obj;
  },
  fromAminoMsg(object: AttributeContext_ApiAminoMsg): AttributeContext_Api {
    return AttributeContext_Api.fromAmino(object.value);
  },
  fromProtoMsg(message: AttributeContext_ApiProtoMsg): AttributeContext_Api {
    return AttributeContext_Api.decode(message.value);
  },
  toProto(message: AttributeContext_Api): Uint8Array {
    return AttributeContext_Api.encode(message).finish();
  },
  toProtoMsg(message: AttributeContext_Api): AttributeContext_ApiProtoMsg {
    return {
      typeUrl: "/google.rpc.context.Api",
      value: AttributeContext_Api.encode(message).finish()
    };
  }
};
function createBaseAttributeContext_Auth(): AttributeContext_Auth {
  return {
    principal: "",
    audiences: [],
    presenter: "",
    claims: undefined,
    accessLevels: []
  };
}
export const AttributeContext_Auth = {
  typeUrl: "/google.rpc.context.Auth",
  encode(message: AttributeContext_Auth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.principal !== "") {
      writer.uint32(10).string(message.principal);
    }
    for (const v of message.audiences) {
      writer.uint32(18).string(v!);
    }
    if (message.presenter !== "") {
      writer.uint32(26).string(message.presenter);
    }
    if (message.claims !== undefined) {
      Struct.encode(message.claims, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.accessLevels) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Auth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Auth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.principal = reader.string();
          break;
        case 2:
          message.audiences.push(reader.string());
          break;
        case 3:
          message.presenter = reader.string();
          break;
        case 4:
          message.claims = Struct.decode(reader, reader.uint32());
          break;
        case 5:
          message.accessLevels.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AttributeContext_Auth {
    return {
      principal: isSet(object.principal) ? String(object.principal) : "",
      audiences: Array.isArray(object?.audiences) ? object.audiences.map((e: any) => String(e)) : [],
      presenter: isSet(object.presenter) ? String(object.presenter) : "",
      claims: isSet(object.claims) ? Struct.fromJSON(object.claims) : undefined,
      accessLevels: Array.isArray(object?.accessLevels) ? object.accessLevels.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: AttributeContext_Auth): unknown {
    const obj: any = {};
    message.principal !== undefined && (obj.principal = message.principal);
    if (message.audiences) {
      obj.audiences = message.audiences.map(e => e);
    } else {
      obj.audiences = [];
    }
    message.presenter !== undefined && (obj.presenter = message.presenter);
    message.claims !== undefined && (obj.claims = message.claims ? Struct.toJSON(message.claims) : undefined);
    if (message.accessLevels) {
      obj.accessLevels = message.accessLevels.map(e => e);
    } else {
      obj.accessLevels = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<AttributeContext_Auth>): AttributeContext_Auth {
    const message = createBaseAttributeContext_Auth();
    message.principal = object.principal ?? "";
    message.audiences = object.audiences?.map(e => e) || [];
    message.presenter = object.presenter ?? "";
    message.claims = object.claims !== undefined && object.claims !== null ? Struct.fromPartial(object.claims) : undefined;
    message.accessLevels = object.accessLevels?.map(e => e) || [];
    return message;
  },
  fromSDK(object: AttributeContext_AuthSDKType): AttributeContext_Auth {
    return {
      principal: object?.principal,
      audiences: Array.isArray(object?.audiences) ? object.audiences.map((e: any) => e) : [],
      presenter: object?.presenter,
      claims: object.claims ? Struct.fromSDK(object.claims) : undefined,
      accessLevels: Array.isArray(object?.access_levels) ? object.access_levels.map((e: any) => e) : []
    };
  },
  toSDK(message: AttributeContext_Auth): AttributeContext_AuthSDKType {
    const obj: any = {};
    obj.principal = message.principal;
    if (message.audiences) {
      obj.audiences = message.audiences.map(e => e);
    } else {
      obj.audiences = [];
    }
    obj.presenter = message.presenter;
    message.claims !== undefined && (obj.claims = message.claims ? Struct.toSDK(message.claims) : undefined);
    if (message.accessLevels) {
      obj.access_levels = message.accessLevels.map(e => e);
    } else {
      obj.access_levels = [];
    }
    return obj;
  },
  fromAmino(object: AttributeContext_AuthAmino): AttributeContext_Auth {
    return {
      principal: object.principal,
      audiences: Array.isArray(object?.audiences) ? object.audiences.map((e: any) => e) : [],
      presenter: object.presenter,
      claims: object?.claims ? Struct.fromAmino(object.claims) : undefined,
      accessLevels: Array.isArray(object?.access_levels) ? object.access_levels.map((e: any) => e) : []
    };
  },
  toAmino(message: AttributeContext_Auth): AttributeContext_AuthAmino {
    const obj: any = {};
    obj.principal = message.principal;
    if (message.audiences) {
      obj.audiences = message.audiences.map(e => e);
    } else {
      obj.audiences = [];
    }
    obj.presenter = message.presenter;
    obj.claims = message.claims ? Struct.toAmino(message.claims) : undefined;
    if (message.accessLevels) {
      obj.access_levels = message.accessLevels.map(e => e);
    } else {
      obj.access_levels = [];
    }
    return obj;
  },
  fromAminoMsg(object: AttributeContext_AuthAminoMsg): AttributeContext_Auth {
    return AttributeContext_Auth.fromAmino(object.value);
  },
  fromProtoMsg(message: AttributeContext_AuthProtoMsg): AttributeContext_Auth {
    return AttributeContext_Auth.decode(message.value);
  },
  toProto(message: AttributeContext_Auth): Uint8Array {
    return AttributeContext_Auth.encode(message).finish();
  },
  toProtoMsg(message: AttributeContext_Auth): AttributeContext_AuthProtoMsg {
    return {
      typeUrl: "/google.rpc.context.Auth",
      value: AttributeContext_Auth.encode(message).finish()
    };
  }
};
function createBaseAttributeContext_Request_HeadersEntry(): AttributeContext_Request_HeadersEntry {
  return {
    key: "",
    value: ""
  };
}
export const AttributeContext_Request_HeadersEntry = {
  encode(message: AttributeContext_Request_HeadersEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Request_HeadersEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Request_HeadersEntry();
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
  fromJSON(object: any): AttributeContext_Request_HeadersEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: AttributeContext_Request_HeadersEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: DeepPartial<AttributeContext_Request_HeadersEntry>): AttributeContext_Request_HeadersEntry {
    const message = createBaseAttributeContext_Request_HeadersEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromSDK(object: AttributeContext_Request_HeadersEntrySDKType): AttributeContext_Request_HeadersEntry {
    return {
      key: object?.key,
      value: object?.value
    };
  },
  toSDK(message: AttributeContext_Request_HeadersEntry): AttributeContext_Request_HeadersEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: AttributeContext_Request_HeadersEntryAmino): AttributeContext_Request_HeadersEntry {
    return {
      key: object.key,
      value: object.value
    };
  },
  toAmino(message: AttributeContext_Request_HeadersEntry): AttributeContext_Request_HeadersEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: AttributeContext_Request_HeadersEntryAminoMsg): AttributeContext_Request_HeadersEntry {
    return AttributeContext_Request_HeadersEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: AttributeContext_Request_HeadersEntryProtoMsg): AttributeContext_Request_HeadersEntry {
    return AttributeContext_Request_HeadersEntry.decode(message.value);
  },
  toProto(message: AttributeContext_Request_HeadersEntry): Uint8Array {
    return AttributeContext_Request_HeadersEntry.encode(message).finish();
  }
};
function createBaseAttributeContext_Request(): AttributeContext_Request {
  return {
    id: "",
    method: "",
    headers: {},
    path: "",
    host: "",
    scheme: "",
    query: "",
    time: undefined,
    size: Long.ZERO,
    protocol: "",
    reason: "",
    auth: undefined
  };
}
export const AttributeContext_Request = {
  typeUrl: "/google.rpc.context.Request",
  encode(message: AttributeContext_Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.method !== "") {
      writer.uint32(18).string(message.method);
    }
    Object.entries(message.headers).forEach(([key, value]) => {
      AttributeContext_Request_HeadersEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    if (message.path !== "") {
      writer.uint32(34).string(message.path);
    }
    if (message.host !== "") {
      writer.uint32(42).string(message.host);
    }
    if (message.scheme !== "") {
      writer.uint32(50).string(message.scheme);
    }
    if (message.query !== "") {
      writer.uint32(58).string(message.query);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(74).fork()).ldelim();
    }
    if (!message.size.isZero()) {
      writer.uint32(80).int64(message.size);
    }
    if (message.protocol !== "") {
      writer.uint32(90).string(message.protocol);
    }
    if (message.reason !== "") {
      writer.uint32(98).string(message.reason);
    }
    if (message.auth !== undefined) {
      AttributeContext_Auth.encode(message.auth, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.method = reader.string();
          break;
        case 3:
          const entry3 = AttributeContext_Request_HeadersEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.headers[entry3.key] = entry3.value;
          }
          break;
        case 4:
          message.path = reader.string();
          break;
        case 5:
          message.host = reader.string();
          break;
        case 6:
          message.scheme = reader.string();
          break;
        case 7:
          message.query = reader.string();
          break;
        case 9:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 10:
          message.size = (reader.int64() as Long);
          break;
        case 11:
          message.protocol = reader.string();
          break;
        case 12:
          message.reason = reader.string();
          break;
        case 13:
          message.auth = AttributeContext_Auth.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AttributeContext_Request {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      method: isSet(object.method) ? String(object.method) : "",
      headers: isObject(object.headers) ? Object.entries(object.headers).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      path: isSet(object.path) ? String(object.path) : "",
      host: isSet(object.host) ? String(object.host) : "",
      scheme: isSet(object.scheme) ? String(object.scheme) : "",
      query: isSet(object.query) ? String(object.query) : "",
      time: isSet(object.time) ? new Date(object.time) : undefined,
      size: isSet(object.size) ? Long.fromValue(object.size) : Long.ZERO,
      protocol: isSet(object.protocol) ? String(object.protocol) : "",
      reason: isSet(object.reason) ? String(object.reason) : "",
      auth: isSet(object.auth) ? AttributeContext_Auth.fromJSON(object.auth) : undefined
    };
  },
  toJSON(message: AttributeContext_Request): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.method !== undefined && (obj.method = message.method);
    obj.headers = {};
    if (message.headers) {
      Object.entries(message.headers).forEach(([k, v]) => {
        obj.headers[k] = v;
      });
    }
    message.path !== undefined && (obj.path = message.path);
    message.host !== undefined && (obj.host = message.host);
    message.scheme !== undefined && (obj.scheme = message.scheme);
    message.query !== undefined && (obj.query = message.query);
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.size !== undefined && (obj.size = (message.size || Long.ZERO).toString());
    message.protocol !== undefined && (obj.protocol = message.protocol);
    message.reason !== undefined && (obj.reason = message.reason);
    message.auth !== undefined && (obj.auth = message.auth ? AttributeContext_Auth.toJSON(message.auth) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<AttributeContext_Request>): AttributeContext_Request {
    const message = createBaseAttributeContext_Request();
    message.id = object.id ?? "";
    message.method = object.method ?? "";
    message.headers = Object.entries(object.headers ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.path = object.path ?? "";
    message.host = object.host ?? "";
    message.scheme = object.scheme ?? "";
    message.query = object.query ?? "";
    message.time = object.time ?? undefined;
    message.size = object.size !== undefined && object.size !== null ? Long.fromValue(object.size) : Long.ZERO;
    message.protocol = object.protocol ?? "";
    message.reason = object.reason ?? "";
    message.auth = object.auth !== undefined && object.auth !== null ? AttributeContext_Auth.fromPartial(object.auth) : undefined;
    return message;
  },
  fromSDK(object: AttributeContext_RequestSDKType): AttributeContext_Request {
    return {
      id: object?.id,
      method: object?.method,
      headers: isObject(object.headers) ? Object.entries(object.headers).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      path: object?.path,
      host: object?.host,
      scheme: object?.scheme,
      query: object?.query,
      time: object.time ?? undefined,
      size: object?.size,
      protocol: object?.protocol,
      reason: object?.reason,
      auth: object.auth ? AttributeContext_Auth.fromSDK(object.auth) : undefined
    };
  },
  toSDK(message: AttributeContext_Request): AttributeContext_RequestSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.method = message.method;
    obj.headers = {};
    if (message.headers) {
      Object.entries(message.headers).forEach(([k, v]) => {
        obj.headers[k] = v;
      });
    }
    obj.path = message.path;
    obj.host = message.host;
    obj.scheme = message.scheme;
    obj.query = message.query;
    message.time !== undefined && (obj.time = message.time ?? undefined);
    obj.size = message.size;
    obj.protocol = message.protocol;
    obj.reason = message.reason;
    message.auth !== undefined && (obj.auth = message.auth ? AttributeContext_Auth.toSDK(message.auth) : undefined);
    return obj;
  },
  fromAmino(object: AttributeContext_RequestAmino): AttributeContext_Request {
    return {
      id: object.id,
      method: object.method,
      headers: isObject(object.headers) ? Object.entries(object.headers).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      path: object.path,
      host: object.host,
      scheme: object.scheme,
      query: object.query,
      time: object?.time ? Timestamp.fromAmino(object.time) : undefined,
      size: Long.fromString(object.size),
      protocol: object.protocol,
      reason: object.reason,
      auth: object?.auth ? AttributeContext_Auth.fromAmino(object.auth) : undefined
    };
  },
  toAmino(message: AttributeContext_Request): AttributeContext_RequestAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.method = message.method;
    obj.headers = {};
    if (message.headers) {
      Object.entries(message.headers).forEach(([k, v]) => {
        obj.headers[k] = v;
      });
    }
    obj.path = message.path;
    obj.host = message.host;
    obj.scheme = message.scheme;
    obj.query = message.query;
    obj.time = message.time ? Timestamp.toAmino(message.time) : undefined;
    obj.size = message.size ? message.size.toString() : undefined;
    obj.protocol = message.protocol;
    obj.reason = message.reason;
    obj.auth = message.auth ? AttributeContext_Auth.toAmino(message.auth) : undefined;
    return obj;
  },
  fromAminoMsg(object: AttributeContext_RequestAminoMsg): AttributeContext_Request {
    return AttributeContext_Request.fromAmino(object.value);
  },
  fromProtoMsg(message: AttributeContext_RequestProtoMsg): AttributeContext_Request {
    return AttributeContext_Request.decode(message.value);
  },
  toProto(message: AttributeContext_Request): Uint8Array {
    return AttributeContext_Request.encode(message).finish();
  },
  toProtoMsg(message: AttributeContext_Request): AttributeContext_RequestProtoMsg {
    return {
      typeUrl: "/google.rpc.context.Request",
      value: AttributeContext_Request.encode(message).finish()
    };
  }
};
function createBaseAttributeContext_Response_HeadersEntry(): AttributeContext_Response_HeadersEntry {
  return {
    key: "",
    value: ""
  };
}
export const AttributeContext_Response_HeadersEntry = {
  encode(message: AttributeContext_Response_HeadersEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Response_HeadersEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Response_HeadersEntry();
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
  fromJSON(object: any): AttributeContext_Response_HeadersEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: AttributeContext_Response_HeadersEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: DeepPartial<AttributeContext_Response_HeadersEntry>): AttributeContext_Response_HeadersEntry {
    const message = createBaseAttributeContext_Response_HeadersEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromSDK(object: AttributeContext_Response_HeadersEntrySDKType): AttributeContext_Response_HeadersEntry {
    return {
      key: object?.key,
      value: object?.value
    };
  },
  toSDK(message: AttributeContext_Response_HeadersEntry): AttributeContext_Response_HeadersEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: AttributeContext_Response_HeadersEntryAmino): AttributeContext_Response_HeadersEntry {
    return {
      key: object.key,
      value: object.value
    };
  },
  toAmino(message: AttributeContext_Response_HeadersEntry): AttributeContext_Response_HeadersEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: AttributeContext_Response_HeadersEntryAminoMsg): AttributeContext_Response_HeadersEntry {
    return AttributeContext_Response_HeadersEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: AttributeContext_Response_HeadersEntryProtoMsg): AttributeContext_Response_HeadersEntry {
    return AttributeContext_Response_HeadersEntry.decode(message.value);
  },
  toProto(message: AttributeContext_Response_HeadersEntry): Uint8Array {
    return AttributeContext_Response_HeadersEntry.encode(message).finish();
  }
};
function createBaseAttributeContext_Response(): AttributeContext_Response {
  return {
    code: Long.ZERO,
    size: Long.ZERO,
    headers: {},
    time: undefined,
    backendLatency: undefined
  };
}
export const AttributeContext_Response = {
  typeUrl: "/google.rpc.context.Response",
  encode(message: AttributeContext_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.code.isZero()) {
      writer.uint32(8).int64(message.code);
    }
    if (!message.size.isZero()) {
      writer.uint32(16).int64(message.size);
    }
    Object.entries(message.headers).forEach(([key, value]) => {
      AttributeContext_Response_HeadersEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(34).fork()).ldelim();
    }
    if (message.backendLatency !== undefined) {
      Duration.encode(message.backendLatency, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = (reader.int64() as Long);
          break;
        case 2:
          message.size = (reader.int64() as Long);
          break;
        case 3:
          const entry3 = AttributeContext_Response_HeadersEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.headers[entry3.key] = entry3.value;
          }
          break;
        case 4:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.backendLatency = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AttributeContext_Response {
    return {
      code: isSet(object.code) ? Long.fromValue(object.code) : Long.ZERO,
      size: isSet(object.size) ? Long.fromValue(object.size) : Long.ZERO,
      headers: isObject(object.headers) ? Object.entries(object.headers).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      time: isSet(object.time) ? new Date(object.time) : undefined,
      backendLatency: isSet(object.backendLatency) ? Duration.fromJSON(object.backendLatency) : undefined
    };
  },
  toJSON(message: AttributeContext_Response): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = (message.code || Long.ZERO).toString());
    message.size !== undefined && (obj.size = (message.size || Long.ZERO).toString());
    obj.headers = {};
    if (message.headers) {
      Object.entries(message.headers).forEach(([k, v]) => {
        obj.headers[k] = v;
      });
    }
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.backendLatency !== undefined && (obj.backendLatency = message.backendLatency ? Duration.toJSON(message.backendLatency) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<AttributeContext_Response>): AttributeContext_Response {
    const message = createBaseAttributeContext_Response();
    message.code = object.code !== undefined && object.code !== null ? Long.fromValue(object.code) : Long.ZERO;
    message.size = object.size !== undefined && object.size !== null ? Long.fromValue(object.size) : Long.ZERO;
    message.headers = Object.entries(object.headers ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.time = object.time ?? undefined;
    message.backendLatency = object.backendLatency !== undefined && object.backendLatency !== null ? Duration.fromPartial(object.backendLatency) : undefined;
    return message;
  },
  fromSDK(object: AttributeContext_ResponseSDKType): AttributeContext_Response {
    return {
      code: object?.code,
      size: object?.size,
      headers: isObject(object.headers) ? Object.entries(object.headers).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      time: object.time ?? undefined,
      backendLatency: object.backend_latency ? Duration.fromSDK(object.backend_latency) : undefined
    };
  },
  toSDK(message: AttributeContext_Response): AttributeContext_ResponseSDKType {
    const obj: any = {};
    obj.code = message.code;
    obj.size = message.size;
    obj.headers = {};
    if (message.headers) {
      Object.entries(message.headers).forEach(([k, v]) => {
        obj.headers[k] = v;
      });
    }
    message.time !== undefined && (obj.time = message.time ?? undefined);
    message.backendLatency !== undefined && (obj.backend_latency = message.backendLatency ? Duration.toSDK(message.backendLatency) : undefined);
    return obj;
  },
  fromAmino(object: AttributeContext_ResponseAmino): AttributeContext_Response {
    return {
      code: Long.fromString(object.code),
      size: Long.fromString(object.size),
      headers: isObject(object.headers) ? Object.entries(object.headers).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      time: object?.time ? Timestamp.fromAmino(object.time) : undefined,
      backendLatency: object?.backend_latency ? Duration.fromAmino(object.backend_latency) : undefined
    };
  },
  toAmino(message: AttributeContext_Response): AttributeContext_ResponseAmino {
    const obj: any = {};
    obj.code = message.code ? message.code.toString() : undefined;
    obj.size = message.size ? message.size.toString() : undefined;
    obj.headers = {};
    if (message.headers) {
      Object.entries(message.headers).forEach(([k, v]) => {
        obj.headers[k] = v;
      });
    }
    obj.time = message.time ? Timestamp.toAmino(message.time) : undefined;
    obj.backend_latency = message.backendLatency ? Duration.toAmino(message.backendLatency) : undefined;
    return obj;
  },
  fromAminoMsg(object: AttributeContext_ResponseAminoMsg): AttributeContext_Response {
    return AttributeContext_Response.fromAmino(object.value);
  },
  fromProtoMsg(message: AttributeContext_ResponseProtoMsg): AttributeContext_Response {
    return AttributeContext_Response.decode(message.value);
  },
  toProto(message: AttributeContext_Response): Uint8Array {
    return AttributeContext_Response.encode(message).finish();
  },
  toProtoMsg(message: AttributeContext_Response): AttributeContext_ResponseProtoMsg {
    return {
      typeUrl: "/google.rpc.context.Response",
      value: AttributeContext_Response.encode(message).finish()
    };
  }
};
function createBaseAttributeContext_Resource_LabelsEntry(): AttributeContext_Resource_LabelsEntry {
  return {
    key: "",
    value: ""
  };
}
export const AttributeContext_Resource_LabelsEntry = {
  encode(message: AttributeContext_Resource_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Resource_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Resource_LabelsEntry();
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
  fromJSON(object: any): AttributeContext_Resource_LabelsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: AttributeContext_Resource_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: DeepPartial<AttributeContext_Resource_LabelsEntry>): AttributeContext_Resource_LabelsEntry {
    const message = createBaseAttributeContext_Resource_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromSDK(object: AttributeContext_Resource_LabelsEntrySDKType): AttributeContext_Resource_LabelsEntry {
    return {
      key: object?.key,
      value: object?.value
    };
  },
  toSDK(message: AttributeContext_Resource_LabelsEntry): AttributeContext_Resource_LabelsEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: AttributeContext_Resource_LabelsEntryAmino): AttributeContext_Resource_LabelsEntry {
    return {
      key: object.key,
      value: object.value
    };
  },
  toAmino(message: AttributeContext_Resource_LabelsEntry): AttributeContext_Resource_LabelsEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: AttributeContext_Resource_LabelsEntryAminoMsg): AttributeContext_Resource_LabelsEntry {
    return AttributeContext_Resource_LabelsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: AttributeContext_Resource_LabelsEntryProtoMsg): AttributeContext_Resource_LabelsEntry {
    return AttributeContext_Resource_LabelsEntry.decode(message.value);
  },
  toProto(message: AttributeContext_Resource_LabelsEntry): Uint8Array {
    return AttributeContext_Resource_LabelsEntry.encode(message).finish();
  }
};
function createBaseAttributeContext_Resource_AnnotationsEntry(): AttributeContext_Resource_AnnotationsEntry {
  return {
    key: "",
    value: ""
  };
}
export const AttributeContext_Resource_AnnotationsEntry = {
  encode(message: AttributeContext_Resource_AnnotationsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Resource_AnnotationsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Resource_AnnotationsEntry();
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
  fromJSON(object: any): AttributeContext_Resource_AnnotationsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: AttributeContext_Resource_AnnotationsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: DeepPartial<AttributeContext_Resource_AnnotationsEntry>): AttributeContext_Resource_AnnotationsEntry {
    const message = createBaseAttributeContext_Resource_AnnotationsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromSDK(object: AttributeContext_Resource_AnnotationsEntrySDKType): AttributeContext_Resource_AnnotationsEntry {
    return {
      key: object?.key,
      value: object?.value
    };
  },
  toSDK(message: AttributeContext_Resource_AnnotationsEntry): AttributeContext_Resource_AnnotationsEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: AttributeContext_Resource_AnnotationsEntryAmino): AttributeContext_Resource_AnnotationsEntry {
    return {
      key: object.key,
      value: object.value
    };
  },
  toAmino(message: AttributeContext_Resource_AnnotationsEntry): AttributeContext_Resource_AnnotationsEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: AttributeContext_Resource_AnnotationsEntryAminoMsg): AttributeContext_Resource_AnnotationsEntry {
    return AttributeContext_Resource_AnnotationsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: AttributeContext_Resource_AnnotationsEntryProtoMsg): AttributeContext_Resource_AnnotationsEntry {
    return AttributeContext_Resource_AnnotationsEntry.decode(message.value);
  },
  toProto(message: AttributeContext_Resource_AnnotationsEntry): Uint8Array {
    return AttributeContext_Resource_AnnotationsEntry.encode(message).finish();
  }
};
function createBaseAttributeContext_Resource(): AttributeContext_Resource {
  return {
    service: "",
    name: "",
    type: "",
    labels: {},
    uid: "",
    annotations: {},
    displayName: "",
    createTime: undefined,
    updateTime: undefined,
    deleteTime: undefined,
    etag: "",
    location: ""
  };
}
export const AttributeContext_Resource = {
  typeUrl: "/google.rpc.context.Resource",
  encode(message: AttributeContext_Resource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.service !== "") {
      writer.uint32(10).string(message.service);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      AttributeContext_Resource_LabelsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.uid !== "") {
      writer.uint32(42).string(message.uid);
    }
    Object.entries(message.annotations).forEach(([key, value]) => {
      AttributeContext_Resource_AnnotationsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(50).fork()).ldelim();
    });
    if (message.displayName !== "") {
      writer.uint32(58).string(message.displayName);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(66).fork()).ldelim();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(74).fork()).ldelim();
    }
    if (message.deleteTime !== undefined) {
      Timestamp.encode(toTimestamp(message.deleteTime), writer.uint32(82).fork()).ldelim();
    }
    if (message.etag !== "") {
      writer.uint32(90).string(message.etag);
    }
    if (message.location !== "") {
      writer.uint32(98).string(message.location);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Resource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Resource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.service = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.type = reader.string();
          break;
        case 4:
          const entry4 = AttributeContext_Resource_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.uid = reader.string();
          break;
        case 6:
          const entry6 = AttributeContext_Resource_AnnotationsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.annotations[entry6.key] = entry6.value;
          }
          break;
        case 7:
          message.displayName = reader.string();
          break;
        case 8:
          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 9:
          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 10:
          message.deleteTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 11:
          message.etag = reader.string();
          break;
        case 12:
          message.location = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AttributeContext_Resource {
    return {
      service: isSet(object.service) ? String(object.service) : "",
      name: isSet(object.name) ? String(object.name) : "",
      type: isSet(object.type) ? String(object.type) : "",
      labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      uid: isSet(object.uid) ? String(object.uid) : "",
      annotations: isObject(object.annotations) ? Object.entries(object.annotations).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      displayName: isSet(object.displayName) ? String(object.displayName) : "",
      createTime: isSet(object.createTime) ? new Date(object.createTime) : undefined,
      updateTime: isSet(object.updateTime) ? new Date(object.updateTime) : undefined,
      deleteTime: isSet(object.deleteTime) ? new Date(object.deleteTime) : undefined,
      etag: isSet(object.etag) ? String(object.etag) : "",
      location: isSet(object.location) ? String(object.location) : ""
    };
  },
  toJSON(message: AttributeContext_Resource): unknown {
    const obj: any = {};
    message.service !== undefined && (obj.service = message.service);
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined && (obj.type = message.type);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.uid !== undefined && (obj.uid = message.uid);
    obj.annotations = {};
    if (message.annotations) {
      Object.entries(message.annotations).forEach(([k, v]) => {
        obj.annotations[k] = v;
      });
    }
    message.displayName !== undefined && (obj.displayName = message.displayName);
    message.createTime !== undefined && (obj.createTime = message.createTime.toISOString());
    message.updateTime !== undefined && (obj.updateTime = message.updateTime.toISOString());
    message.deleteTime !== undefined && (obj.deleteTime = message.deleteTime.toISOString());
    message.etag !== undefined && (obj.etag = message.etag);
    message.location !== undefined && (obj.location = message.location);
    return obj;
  },
  fromPartial(object: DeepPartial<AttributeContext_Resource>): AttributeContext_Resource {
    const message = createBaseAttributeContext_Resource();
    message.service = object.service ?? "";
    message.name = object.name ?? "";
    message.type = object.type ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.uid = object.uid ?? "";
    message.annotations = Object.entries(object.annotations ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.displayName = object.displayName ?? "";
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    message.deleteTime = object.deleteTime ?? undefined;
    message.etag = object.etag ?? "";
    message.location = object.location ?? "";
    return message;
  },
  fromSDK(object: AttributeContext_ResourceSDKType): AttributeContext_Resource {
    return {
      service: object?.service,
      name: object?.name,
      type: object?.type,
      labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      uid: object?.uid,
      annotations: isObject(object.annotations) ? Object.entries(object.annotations).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      displayName: object?.display_name,
      createTime: object.create_time ?? undefined,
      updateTime: object.update_time ?? undefined,
      deleteTime: object.delete_time ?? undefined,
      etag: object?.etag,
      location: object?.location
    };
  },
  toSDK(message: AttributeContext_Resource): AttributeContext_ResourceSDKType {
    const obj: any = {};
    obj.service = message.service;
    obj.name = message.name;
    obj.type = message.type;
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    obj.uid = message.uid;
    obj.annotations = {};
    if (message.annotations) {
      Object.entries(message.annotations).forEach(([k, v]) => {
        obj.annotations[k] = v;
      });
    }
    obj.display_name = message.displayName;
    message.createTime !== undefined && (obj.create_time = message.createTime ?? undefined);
    message.updateTime !== undefined && (obj.update_time = message.updateTime ?? undefined);
    message.deleteTime !== undefined && (obj.delete_time = message.deleteTime ?? undefined);
    obj.etag = message.etag;
    obj.location = message.location;
    return obj;
  },
  fromAmino(object: AttributeContext_ResourceAmino): AttributeContext_Resource {
    return {
      service: object.service,
      name: object.name,
      type: object.type,
      labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      uid: object.uid,
      annotations: isObject(object.annotations) ? Object.entries(object.annotations).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      displayName: object.display_name,
      createTime: object?.create_time ? Timestamp.fromAmino(object.create_time) : undefined,
      updateTime: object?.update_time ? Timestamp.fromAmino(object.update_time) : undefined,
      deleteTime: object?.delete_time ? Timestamp.fromAmino(object.delete_time) : undefined,
      etag: object.etag,
      location: object.location
    };
  },
  toAmino(message: AttributeContext_Resource): AttributeContext_ResourceAmino {
    const obj: any = {};
    obj.service = message.service;
    obj.name = message.name;
    obj.type = message.type;
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    obj.uid = message.uid;
    obj.annotations = {};
    if (message.annotations) {
      Object.entries(message.annotations).forEach(([k, v]) => {
        obj.annotations[k] = v;
      });
    }
    obj.display_name = message.displayName;
    obj.create_time = message.createTime ? Timestamp.toAmino(message.createTime) : undefined;
    obj.update_time = message.updateTime ? Timestamp.toAmino(message.updateTime) : undefined;
    obj.delete_time = message.deleteTime ? Timestamp.toAmino(message.deleteTime) : undefined;
    obj.etag = message.etag;
    obj.location = message.location;
    return obj;
  },
  fromAminoMsg(object: AttributeContext_ResourceAminoMsg): AttributeContext_Resource {
    return AttributeContext_Resource.fromAmino(object.value);
  },
  fromProtoMsg(message: AttributeContext_ResourceProtoMsg): AttributeContext_Resource {
    return AttributeContext_Resource.decode(message.value);
  },
  toProto(message: AttributeContext_Resource): Uint8Array {
    return AttributeContext_Resource.encode(message).finish();
  },
  toProtoMsg(message: AttributeContext_Resource): AttributeContext_ResourceProtoMsg {
    return {
      typeUrl: "/google.rpc.context.Resource",
      value: AttributeContext_Resource.encode(message).finish()
    };
  }
};