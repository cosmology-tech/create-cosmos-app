import { BinaryReader, BinaryWriter } from "../../binary";
import { JsonSafe } from "../../json-safe";
import { DeepPartial, isSet } from "../../helpers";
import { ComputedRef } from "vue";
export const protobufPackage = "google.api";
/**
 * `Authentication` defines the authentication configuration for API methods
 * provided by an API service.
 * 
 * Example:
 * 
 *     name: calendar.googleapis.com
 *     authentication:
 *       providers:
 *       - id: google_calendar_auth
 *         jwks_uri: https://www.googleapis.com/oauth2/v1/certs
 *         issuer: https://securetoken.google.com
 *       rules:
 *       - selector: "*"
 *         requirements:
 *           provider_id: google_calendar_auth
 *       - selector: google.calendar.Delegate
 *         oauth:
 *           canonical_scopes: https://www.googleapis.com/auth/calendar.read
 */
export interface Authentication {
  /**
   * A list of authentication rules that apply to individual API methods.
   * 
   * **NOTE:** All service configuration rules follow "last one wins" order.
   */
  rules: AuthenticationRule[];
  /** Defines a set of authentication providers that a service supports. */
  providers: AuthProvider[];
}
export interface ReactiveAuthentication {
  rules: ComputedRef<AuthenticationRule[]>;
  providers: ComputedRef<AuthProvider[]>;
}
export interface AuthenticationProtoMsg {
  typeUrl: "/google.api.Authentication";
  value: Uint8Array;
}
/**
 * `Authentication` defines the authentication configuration for API methods
 * provided by an API service.
 * 
 * Example:
 * 
 *     name: calendar.googleapis.com
 *     authentication:
 *       providers:
 *       - id: google_calendar_auth
 *         jwks_uri: https://www.googleapis.com/oauth2/v1/certs
 *         issuer: https://securetoken.google.com
 *       rules:
 *       - selector: "*"
 *         requirements:
 *           provider_id: google_calendar_auth
 *       - selector: google.calendar.Delegate
 *         oauth:
 *           canonical_scopes: https://www.googleapis.com/auth/calendar.read
 */
export interface AuthenticationSDKType {
  rules: AuthenticationRuleSDKType[];
  providers: AuthProviderSDKType[];
}
/**
 * Authentication rules for the service.
 * 
 * By default, if a method has any authentication requirements, every request
 * must include a valid credential matching one of the requirements.
 * It's an error to include more than one kind of credential in a single
 * request.
 * 
 * If a method doesn't have any auth requirements, request credentials will be
 * ignored.
 */
export interface AuthenticationRule {
  /**
   * Selects the methods to which this rule applies.
   * 
   * Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
   */
  selector: string;
  /** The requirements for OAuth credentials. */
  oauth?: OAuthRequirements;
  /**
   * If true, the service accepts API keys without any other credential.
   * This flag only applies to HTTP and gRPC requests.
   */
  allowWithoutCredential: boolean;
  /** Requirements for additional authentication providers. */
  requirements: AuthRequirement[];
}
export interface ReactiveAuthenticationRule {
  selector: ComputedRef<string>;
  oauth?: ComputedRef<OAuthRequirements>;
  allowWithoutCredential: ComputedRef<boolean>;
  requirements: ComputedRef<AuthRequirement[]>;
}
export interface AuthenticationRuleProtoMsg {
  typeUrl: "/google.api.AuthenticationRule";
  value: Uint8Array;
}
/**
 * Authentication rules for the service.
 * 
 * By default, if a method has any authentication requirements, every request
 * must include a valid credential matching one of the requirements.
 * It's an error to include more than one kind of credential in a single
 * request.
 * 
 * If a method doesn't have any auth requirements, request credentials will be
 * ignored.
 */
export interface AuthenticationRuleSDKType {
  selector: string;
  oauth?: OAuthRequirementsSDKType;
  allow_without_credential: boolean;
  requirements: AuthRequirementSDKType[];
}
/** Specifies a location to extract JWT from an API request. */
export interface JwtLocation {
  /** Specifies HTTP header name to extract JWT token. */
  header?: string;
  /** Specifies URL query parameter name to extract JWT token. */
  query?: string;
  /**
   * The value prefix. The value format is "value_prefix{token}"
   * Only applies to "in" header type. Must be empty for "in" query type.
   * If not empty, the header value has to match (case sensitive) this prefix.
   * If not matched, JWT will not be extracted. If matched, JWT will be
   * extracted after the prefix is removed.
   * 
   * For example, for "Authorization: Bearer {JWT}",
   * value_prefix="Bearer " with a space at the end.
   */
  valuePrefix: string;
}
export interface ReactiveJwtLocation {
  header?: ComputedRef<string>;
  query?: ComputedRef<string>;
  valuePrefix: ComputedRef<string>;
}
export interface JwtLocationProtoMsg {
  typeUrl: "/google.api.JwtLocation";
  value: Uint8Array;
}
/** Specifies a location to extract JWT from an API request. */
export interface JwtLocationSDKType {
  header?: string;
  query?: string;
  value_prefix: string;
}
/**
 * Configuration for an authentication provider, including support for
 * [JSON Web Token
 * (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).
 */
export interface AuthProvider {
  /**
   * The unique identifier of the auth provider. It will be referred to by
   * `AuthRequirement.provider_id`.
   * 
   * Example: "bookstore_auth".
   */
  id: string;
  /**
   * Identifies the principal that issued the JWT. See
   * https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.1
   * Usually a URL or an email address.
   * 
   * Example: https://securetoken.google.com
   * Example: 1234567-compute@developer.gserviceaccount.com
   */
  issuer: string;
  /**
   * URL of the provider's public key set to validate signature of the JWT. See
   * [OpenID
   * Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
   * Optional if the key set document:
   *  - can be retrieved from
   *    [OpenID
   *    Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html)
   *    of the issuer.
   *  - can be inferred from the email domain of the issuer (e.g. a Google
   *  service account).
   * 
   * Example: https://www.googleapis.com/oauth2/v1/certs
   */
  jwksUri: string;
  /**
   * The list of JWT
   * [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3).
   * that are allowed to access. A JWT containing any of these audiences will
   * be accepted. When this setting is absent, JWTs with audiences:
   *   - "https://[service.name]/[google.protobuf.Api.name]"
   *   - "https://[service.name]/"
   * will be accepted.
   * For example, if no audiences are in the setting, LibraryService API will
   * accept JWTs with the following audiences:
   *   -
   *   https://library-example.googleapis.com/google.example.library.v1.LibraryService
   *   - https://library-example.googleapis.com/
   * 
   * Example:
   * 
   *     audiences: bookstore_android.apps.googleusercontent.com,
   *                bookstore_web.apps.googleusercontent.com
   */
  audiences: string;
  /**
   * Redirect URL if JWT token is required but not present or is expired.
   * Implement authorizationUrl of securityDefinitions in OpenAPI spec.
   */
  authorizationUrl: string;
  /**
   * Defines the locations to extract the JWT.
   * 
   * JWT locations can be either from HTTP headers or URL query parameters.
   * The rule is that the first match wins. The checking order is: checking
   * all headers first, then URL query parameters.
   * 
   * If not specified,  default to use following 3 locations:
   *    1) Authorization: Bearer
   *    2) x-goog-iap-jwt-assertion
   *    3) access_token query parameter
   * 
   * Default locations can be specified as followings:
   *    jwt_locations:
   *    - header: Authorization
   *      value_prefix: "Bearer "
   *    - header: x-goog-iap-jwt-assertion
   *    - query: access_token
   */
  jwtLocations: JwtLocation[];
}
export interface ReactiveAuthProvider {
  id: ComputedRef<string>;
  issuer: ComputedRef<string>;
  jwksUri: ComputedRef<string>;
  audiences: ComputedRef<string>;
  authorizationUrl: ComputedRef<string>;
  jwtLocations: ComputedRef<JwtLocation[]>;
}
export interface AuthProviderProtoMsg {
  typeUrl: "/google.api.AuthProvider";
  value: Uint8Array;
}
/**
 * Configuration for an authentication provider, including support for
 * [JSON Web Token
 * (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).
 */
export interface AuthProviderSDKType {
  id: string;
  issuer: string;
  jwks_uri: string;
  audiences: string;
  authorization_url: string;
  jwt_locations: JwtLocationSDKType[];
}
/**
 * OAuth scopes are a way to define data and permissions on data. For example,
 * there are scopes defined for "Read-only access to Google Calendar" and
 * "Access to Cloud Platform". Users can consent to a scope for an application,
 * giving it permission to access that data on their behalf.
 * 
 * OAuth scope specifications should be fairly coarse grained; a user will need
 * to see and understand the text description of what your scope means.
 * 
 * In most cases: use one or at most two OAuth scopes for an entire family of
 * products. If your product has multiple APIs, you should probably be sharing
 * the OAuth scope across all of those APIs.
 * 
 * When you need finer grained OAuth consent screens: talk with your product
 * management about how developers will use them in practice.
 * 
 * Please note that even though each of the canonical scopes is enough for a
 * request to be accepted and passed to the backend, a request can still fail
 * due to the backend requiring additional scopes or permissions.
 */
export interface OAuthRequirements {
  /**
   * The list of publicly documented OAuth scopes that are allowed access. An
   * OAuth token containing any of these scopes will be accepted.
   * 
   * Example:
   * 
   *      canonical_scopes: https://www.googleapis.com/auth/calendar,
   *                        https://www.googleapis.com/auth/calendar.read
   */
  canonicalScopes: string;
}
export interface ReactiveOAuthRequirements {
  canonicalScopes: ComputedRef<string>;
}
export interface OAuthRequirementsProtoMsg {
  typeUrl: "/google.api.OAuthRequirements";
  value: Uint8Array;
}
/**
 * OAuth scopes are a way to define data and permissions on data. For example,
 * there are scopes defined for "Read-only access to Google Calendar" and
 * "Access to Cloud Platform". Users can consent to a scope for an application,
 * giving it permission to access that data on their behalf.
 * 
 * OAuth scope specifications should be fairly coarse grained; a user will need
 * to see and understand the text description of what your scope means.
 * 
 * In most cases: use one or at most two OAuth scopes for an entire family of
 * products. If your product has multiple APIs, you should probably be sharing
 * the OAuth scope across all of those APIs.
 * 
 * When you need finer grained OAuth consent screens: talk with your product
 * management about how developers will use them in practice.
 * 
 * Please note that even though each of the canonical scopes is enough for a
 * request to be accepted and passed to the backend, a request can still fail
 * due to the backend requiring additional scopes or permissions.
 */
export interface OAuthRequirementsSDKType {
  canonical_scopes: string;
}
/**
 * User-defined authentication requirements, including support for
 * [JSON Web Token
 * (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).
 */
export interface AuthRequirement {
  /**
   * [id][google.api.AuthProvider.id] from authentication provider.
   * 
   * Example:
   * 
   *     provider_id: bookstore_auth
   */
  providerId: string;
  /**
   * NOTE: This will be deprecated soon, once AuthProvider.audiences is
   * implemented and accepted in all the runtime components.
   * 
   * The list of JWT
   * [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3).
   * that are allowed to access. A JWT containing any of these audiences will
   * be accepted. When this setting is absent, only JWTs with audience
   * "https://[Service_name][google.api.Service.name]/[API_name][google.protobuf.Api.name]"
   * will be accepted. For example, if no audiences are in the setting,
   * LibraryService API will only accept JWTs with the following audience
   * "https://library-example.googleapis.com/google.example.library.v1.LibraryService".
   * 
   * Example:
   * 
   *     audiences: bookstore_android.apps.googleusercontent.com,
   *                bookstore_web.apps.googleusercontent.com
   */
  audiences: string;
}
export interface ReactiveAuthRequirement {
  providerId: ComputedRef<string>;
  audiences: ComputedRef<string>;
}
export interface AuthRequirementProtoMsg {
  typeUrl: "/google.api.AuthRequirement";
  value: Uint8Array;
}
/**
 * User-defined authentication requirements, including support for
 * [JSON Web Token
 * (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).
 */
export interface AuthRequirementSDKType {
  provider_id: string;
  audiences: string;
}
function createBaseAuthentication(): Authentication {
  return {
    rules: [],
    providers: []
  };
}
export const Authentication = {
  typeUrl: "/google.api.Authentication",
  encode(message: Authentication, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rules) {
      AuthenticationRule.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.providers) {
      AuthProvider.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Authentication {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthentication();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.rules.push(AuthenticationRule.decode(reader, reader.uint32()));
          break;
        case 4:
          message.providers.push(AuthProvider.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Authentication {
    return {
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => AuthenticationRule.fromJSON(e)) : [],
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => AuthProvider.fromJSON(e)) : []
    };
  },
  toJSON(message: Authentication): JsonSafe<Authentication> {
    const obj: any = {};
    if (message.rules) {
      obj.rules = message.rules.map(e => e ? AuthenticationRule.toJSON(e) : undefined);
    } else {
      obj.rules = [];
    }
    if (message.providers) {
      obj.providers = message.providers.map(e => e ? AuthProvider.toJSON(e) : undefined);
    } else {
      obj.providers = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Authentication>): Authentication {
    const message = createBaseAuthentication();
    message.rules = object.rules?.map(e => AuthenticationRule.fromPartial(e)) || [];
    message.providers = object.providers?.map(e => AuthProvider.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: AuthenticationSDKType): Authentication {
    return {
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => AuthenticationRule.fromSDK(e)) : [],
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => AuthProvider.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): AuthenticationSDKType {
    return {
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => AuthenticationRule.fromSDKJSON(e)) : [],
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => AuthProvider.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: Authentication): AuthenticationSDKType {
    const obj: any = {};
    if (message.rules) {
      obj.rules = message.rules.map(e => e ? AuthenticationRule.toSDK(e) : undefined);
    } else {
      obj.rules = [];
    }
    if (message.providers) {
      obj.providers = message.providers.map(e => e ? AuthProvider.toSDK(e) : undefined);
    } else {
      obj.providers = [];
    }
    return obj;
  },
  fromAmino(object: AuthenticationAmino): Authentication {
    const message = createBaseAuthentication();
    message.rules = object.rules?.map(e => AuthenticationRule.fromAmino(e)) || [];
    message.providers = object.providers?.map(e => AuthProvider.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Authentication): AuthenticationAmino {
    const obj: any = {};
    if (message.rules) {
      obj.rules = message.rules.map(e => e ? AuthenticationRule.toAmino(e) : undefined);
    } else {
      obj.rules = message.rules;
    }
    if (message.providers) {
      obj.providers = message.providers.map(e => e ? AuthProvider.toAmino(e) : undefined);
    } else {
      obj.providers = message.providers;
    }
    return obj;
  },
  fromAminoMsg(object: AuthenticationAminoMsg): Authentication {
    return Authentication.fromAmino(object.value);
  },
  fromProtoMsg(message: AuthenticationProtoMsg): Authentication {
    return Authentication.decode(message.value);
  },
  toProto(message: Authentication): Uint8Array {
    return Authentication.encode(message).finish();
  },
  toProtoMsg(message: Authentication): AuthenticationProtoMsg {
    return {
      typeUrl: "/google.api.Authentication",
      value: Authentication.encode(message).finish()
    };
  }
};
function createBaseAuthenticationRule(): AuthenticationRule {
  return {
    selector: "",
    oauth: undefined,
    allowWithoutCredential: false,
    requirements: []
  };
}
export const AuthenticationRule = {
  typeUrl: "/google.api.AuthenticationRule",
  encode(message: AuthenticationRule, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }
    if (message.oauth !== undefined) {
      OAuthRequirements.encode(message.oauth, writer.uint32(18).fork()).ldelim();
    }
    if (message.allowWithoutCredential === true) {
      writer.uint32(40).bool(message.allowWithoutCredential);
    }
    for (const v of message.requirements) {
      AuthRequirement.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AuthenticationRule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthenticationRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.selector = reader.string();
          break;
        case 2:
          message.oauth = OAuthRequirements.decode(reader, reader.uint32());
          break;
        case 5:
          message.allowWithoutCredential = reader.bool();
          break;
        case 7:
          message.requirements.push(AuthRequirement.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AuthenticationRule {
    return {
      selector: isSet(object.selector) ? String(object.selector) : "",
      oauth: isSet(object.oauth) ? OAuthRequirements.fromJSON(object.oauth) : undefined,
      allowWithoutCredential: isSet(object.allowWithoutCredential) ? Boolean(object.allowWithoutCredential) : false,
      requirements: Array.isArray(object?.requirements) ? object.requirements.map((e: any) => AuthRequirement.fromJSON(e)) : []
    };
  },
  toJSON(message: AuthenticationRule): JsonSafe<AuthenticationRule> {
    const obj: any = {};
    message.selector !== undefined && (obj.selector = message.selector);
    message.oauth !== undefined && (obj.oauth = message.oauth ? OAuthRequirements.toJSON(message.oauth) : undefined);
    message.allowWithoutCredential !== undefined && (obj.allowWithoutCredential = message.allowWithoutCredential);
    if (message.requirements) {
      obj.requirements = message.requirements.map(e => e ? AuthRequirement.toJSON(e) : undefined);
    } else {
      obj.requirements = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<AuthenticationRule>): AuthenticationRule {
    const message = createBaseAuthenticationRule();
    message.selector = object.selector ?? "";
    message.oauth = object.oauth !== undefined && object.oauth !== null ? OAuthRequirements.fromPartial(object.oauth) : undefined;
    message.allowWithoutCredential = object.allowWithoutCredential ?? false;
    message.requirements = object.requirements?.map(e => AuthRequirement.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: AuthenticationRuleSDKType): AuthenticationRule {
    return {
      selector: object?.selector,
      oauth: object.oauth ? OAuthRequirements.fromSDK(object.oauth) : undefined,
      allowWithoutCredential: object?.allow_without_credential,
      requirements: Array.isArray(object?.requirements) ? object.requirements.map((e: any) => AuthRequirement.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): AuthenticationRuleSDKType {
    return {
      selector: isSet(object.selector) ? String(object.selector) : "",
      oauth: isSet(object.oauth) ? OAuthRequirements.fromSDKJSON(object.oauth) : undefined,
      allow_without_credential: isSet(object.allow_without_credential) ? Boolean(object.allow_without_credential) : false,
      requirements: Array.isArray(object?.requirements) ? object.requirements.map((e: any) => AuthRequirement.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: AuthenticationRule): AuthenticationRuleSDKType {
    const obj: any = {};
    obj.selector = message.selector;
    message.oauth !== undefined && (obj.oauth = message.oauth ? OAuthRequirements.toSDK(message.oauth) : undefined);
    obj.allow_without_credential = message.allowWithoutCredential;
    if (message.requirements) {
      obj.requirements = message.requirements.map(e => e ? AuthRequirement.toSDK(e) : undefined);
    } else {
      obj.requirements = [];
    }
    return obj;
  },
  fromAmino(object: AuthenticationRuleAmino): AuthenticationRule {
    const message = createBaseAuthenticationRule();
    if (object.selector !== undefined && object.selector !== null) {
      message.selector = object.selector;
    }
    if (object.oauth !== undefined && object.oauth !== null) {
      message.oauth = OAuthRequirements.fromAmino(object.oauth);
    }
    if (object.allow_without_credential !== undefined && object.allow_without_credential !== null) {
      message.allowWithoutCredential = object.allow_without_credential;
    }
    message.requirements = object.requirements?.map(e => AuthRequirement.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AuthenticationRule): AuthenticationRuleAmino {
    const obj: any = {};
    obj.selector = message.selector === "" ? undefined : message.selector;
    obj.oauth = message.oauth ? OAuthRequirements.toAmino(message.oauth) : undefined;
    obj.allow_without_credential = message.allowWithoutCredential === false ? undefined : message.allowWithoutCredential;
    if (message.requirements) {
      obj.requirements = message.requirements.map(e => e ? AuthRequirement.toAmino(e) : undefined);
    } else {
      obj.requirements = message.requirements;
    }
    return obj;
  },
  fromAminoMsg(object: AuthenticationRuleAminoMsg): AuthenticationRule {
    return AuthenticationRule.fromAmino(object.value);
  },
  fromProtoMsg(message: AuthenticationRuleProtoMsg): AuthenticationRule {
    return AuthenticationRule.decode(message.value);
  },
  toProto(message: AuthenticationRule): Uint8Array {
    return AuthenticationRule.encode(message).finish();
  },
  toProtoMsg(message: AuthenticationRule): AuthenticationRuleProtoMsg {
    return {
      typeUrl: "/google.api.AuthenticationRule",
      value: AuthenticationRule.encode(message).finish()
    };
  }
};
function createBaseJwtLocation(): JwtLocation {
  return {
    header: undefined,
    query: undefined,
    valuePrefix: ""
  };
}
export const JwtLocation = {
  typeUrl: "/google.api.JwtLocation",
  encode(message: JwtLocation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.header !== undefined) {
      writer.uint32(10).string(message.header);
    }
    if (message.query !== undefined) {
      writer.uint32(18).string(message.query);
    }
    if (message.valuePrefix !== "") {
      writer.uint32(26).string(message.valuePrefix);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): JwtLocation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJwtLocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = reader.string();
          break;
        case 2:
          message.query = reader.string();
          break;
        case 3:
          message.valuePrefix = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): JwtLocation {
    return {
      header: isSet(object.header) ? String(object.header) : undefined,
      query: isSet(object.query) ? String(object.query) : undefined,
      valuePrefix: isSet(object.valuePrefix) ? String(object.valuePrefix) : ""
    };
  },
  toJSON(message: JwtLocation): JsonSafe<JwtLocation> {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header);
    message.query !== undefined && (obj.query = message.query);
    message.valuePrefix !== undefined && (obj.valuePrefix = message.valuePrefix);
    return obj;
  },
  fromPartial(object: DeepPartial<JwtLocation>): JwtLocation {
    const message = createBaseJwtLocation();
    message.header = object.header ?? undefined;
    message.query = object.query ?? undefined;
    message.valuePrefix = object.valuePrefix ?? "";
    return message;
  },
  fromSDK(object: JwtLocationSDKType): JwtLocation {
    return {
      header: object?.header,
      query: object?.query,
      valuePrefix: object?.value_prefix
    };
  },
  fromSDKJSON(object: any): JwtLocationSDKType {
    return {
      header: isSet(object.header) ? String(object.header) : undefined,
      query: isSet(object.query) ? String(object.query) : undefined,
      value_prefix: isSet(object.value_prefix) ? String(object.value_prefix) : ""
    };
  },
  toSDK(message: JwtLocation): JwtLocationSDKType {
    const obj: any = {};
    obj.header = message.header;
    obj.query = message.query;
    obj.value_prefix = message.valuePrefix;
    return obj;
  },
  fromAmino(object: JwtLocationAmino): JwtLocation {
    const message = createBaseJwtLocation();
    if (object.header !== undefined && object.header !== null) {
      message.header = object.header;
    }
    if (object.query !== undefined && object.query !== null) {
      message.query = object.query;
    }
    if (object.value_prefix !== undefined && object.value_prefix !== null) {
      message.valuePrefix = object.value_prefix;
    }
    return message;
  },
  toAmino(message: JwtLocation): JwtLocationAmino {
    const obj: any = {};
    obj.header = message.header === null ? undefined : message.header;
    obj.query = message.query === null ? undefined : message.query;
    obj.value_prefix = message.valuePrefix === "" ? undefined : message.valuePrefix;
    return obj;
  },
  fromAminoMsg(object: JwtLocationAminoMsg): JwtLocation {
    return JwtLocation.fromAmino(object.value);
  },
  fromProtoMsg(message: JwtLocationProtoMsg): JwtLocation {
    return JwtLocation.decode(message.value);
  },
  toProto(message: JwtLocation): Uint8Array {
    return JwtLocation.encode(message).finish();
  },
  toProtoMsg(message: JwtLocation): JwtLocationProtoMsg {
    return {
      typeUrl: "/google.api.JwtLocation",
      value: JwtLocation.encode(message).finish()
    };
  }
};
function createBaseAuthProvider(): AuthProvider {
  return {
    id: "",
    issuer: "",
    jwksUri: "",
    audiences: "",
    authorizationUrl: "",
    jwtLocations: []
  };
}
export const AuthProvider = {
  typeUrl: "/google.api.AuthProvider",
  encode(message: AuthProvider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }
    if (message.jwksUri !== "") {
      writer.uint32(26).string(message.jwksUri);
    }
    if (message.audiences !== "") {
      writer.uint32(34).string(message.audiences);
    }
    if (message.authorizationUrl !== "") {
      writer.uint32(42).string(message.authorizationUrl);
    }
    for (const v of message.jwtLocations) {
      JwtLocation.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AuthProvider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.issuer = reader.string();
          break;
        case 3:
          message.jwksUri = reader.string();
          break;
        case 4:
          message.audiences = reader.string();
          break;
        case 5:
          message.authorizationUrl = reader.string();
          break;
        case 6:
          message.jwtLocations.push(JwtLocation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AuthProvider {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      jwksUri: isSet(object.jwksUri) ? String(object.jwksUri) : "",
      audiences: isSet(object.audiences) ? String(object.audiences) : "",
      authorizationUrl: isSet(object.authorizationUrl) ? String(object.authorizationUrl) : "",
      jwtLocations: Array.isArray(object?.jwtLocations) ? object.jwtLocations.map((e: any) => JwtLocation.fromJSON(e)) : []
    };
  },
  toJSON(message: AuthProvider): JsonSafe<AuthProvider> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.jwksUri !== undefined && (obj.jwksUri = message.jwksUri);
    message.audiences !== undefined && (obj.audiences = message.audiences);
    message.authorizationUrl !== undefined && (obj.authorizationUrl = message.authorizationUrl);
    if (message.jwtLocations) {
      obj.jwtLocations = message.jwtLocations.map(e => e ? JwtLocation.toJSON(e) : undefined);
    } else {
      obj.jwtLocations = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<AuthProvider>): AuthProvider {
    const message = createBaseAuthProvider();
    message.id = object.id ?? "";
    message.issuer = object.issuer ?? "";
    message.jwksUri = object.jwksUri ?? "";
    message.audiences = object.audiences ?? "";
    message.authorizationUrl = object.authorizationUrl ?? "";
    message.jwtLocations = object.jwtLocations?.map(e => JwtLocation.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: AuthProviderSDKType): AuthProvider {
    return {
      id: object?.id,
      issuer: object?.issuer,
      jwksUri: object?.jwks_uri,
      audiences: object?.audiences,
      authorizationUrl: object?.authorization_url,
      jwtLocations: Array.isArray(object?.jwt_locations) ? object.jwt_locations.map((e: any) => JwtLocation.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): AuthProviderSDKType {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      jwks_uri: isSet(object.jwks_uri) ? String(object.jwks_uri) : "",
      audiences: isSet(object.audiences) ? String(object.audiences) : "",
      authorization_url: isSet(object.authorization_url) ? String(object.authorization_url) : "",
      jwt_locations: Array.isArray(object?.jwt_locations) ? object.jwt_locations.map((e: any) => JwtLocation.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: AuthProvider): AuthProviderSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.issuer = message.issuer;
    obj.jwks_uri = message.jwksUri;
    obj.audiences = message.audiences;
    obj.authorization_url = message.authorizationUrl;
    if (message.jwtLocations) {
      obj.jwt_locations = message.jwtLocations.map(e => e ? JwtLocation.toSDK(e) : undefined);
    } else {
      obj.jwt_locations = [];
    }
    return obj;
  },
  fromAmino(object: AuthProviderAmino): AuthProvider {
    const message = createBaseAuthProvider();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    }
    if (object.jwks_uri !== undefined && object.jwks_uri !== null) {
      message.jwksUri = object.jwks_uri;
    }
    if (object.audiences !== undefined && object.audiences !== null) {
      message.audiences = object.audiences;
    }
    if (object.authorization_url !== undefined && object.authorization_url !== null) {
      message.authorizationUrl = object.authorization_url;
    }
    message.jwtLocations = object.jwt_locations?.map(e => JwtLocation.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AuthProvider): AuthProviderAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.issuer = message.issuer === "" ? undefined : message.issuer;
    obj.jwks_uri = message.jwksUri === "" ? undefined : message.jwksUri;
    obj.audiences = message.audiences === "" ? undefined : message.audiences;
    obj.authorization_url = message.authorizationUrl === "" ? undefined : message.authorizationUrl;
    if (message.jwtLocations) {
      obj.jwt_locations = message.jwtLocations.map(e => e ? JwtLocation.toAmino(e) : undefined);
    } else {
      obj.jwt_locations = message.jwtLocations;
    }
    return obj;
  },
  fromAminoMsg(object: AuthProviderAminoMsg): AuthProvider {
    return AuthProvider.fromAmino(object.value);
  },
  fromProtoMsg(message: AuthProviderProtoMsg): AuthProvider {
    return AuthProvider.decode(message.value);
  },
  toProto(message: AuthProvider): Uint8Array {
    return AuthProvider.encode(message).finish();
  },
  toProtoMsg(message: AuthProvider): AuthProviderProtoMsg {
    return {
      typeUrl: "/google.api.AuthProvider",
      value: AuthProvider.encode(message).finish()
    };
  }
};
function createBaseOAuthRequirements(): OAuthRequirements {
  return {
    canonicalScopes: ""
  };
}
export const OAuthRequirements = {
  typeUrl: "/google.api.OAuthRequirements",
  encode(message: OAuthRequirements, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.canonicalScopes !== "") {
      writer.uint32(10).string(message.canonicalScopes);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OAuthRequirements {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOAuthRequirements();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.canonicalScopes = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OAuthRequirements {
    return {
      canonicalScopes: isSet(object.canonicalScopes) ? String(object.canonicalScopes) : ""
    };
  },
  toJSON(message: OAuthRequirements): JsonSafe<OAuthRequirements> {
    const obj: any = {};
    message.canonicalScopes !== undefined && (obj.canonicalScopes = message.canonicalScopes);
    return obj;
  },
  fromPartial(object: DeepPartial<OAuthRequirements>): OAuthRequirements {
    const message = createBaseOAuthRequirements();
    message.canonicalScopes = object.canonicalScopes ?? "";
    return message;
  },
  fromSDK(object: OAuthRequirementsSDKType): OAuthRequirements {
    return {
      canonicalScopes: object?.canonical_scopes
    };
  },
  fromSDKJSON(object: any): OAuthRequirementsSDKType {
    return {
      canonical_scopes: isSet(object.canonical_scopes) ? String(object.canonical_scopes) : ""
    };
  },
  toSDK(message: OAuthRequirements): OAuthRequirementsSDKType {
    const obj: any = {};
    obj.canonical_scopes = message.canonicalScopes;
    return obj;
  },
  fromAmino(object: OAuthRequirementsAmino): OAuthRequirements {
    const message = createBaseOAuthRequirements();
    if (object.canonical_scopes !== undefined && object.canonical_scopes !== null) {
      message.canonicalScopes = object.canonical_scopes;
    }
    return message;
  },
  toAmino(message: OAuthRequirements): OAuthRequirementsAmino {
    const obj: any = {};
    obj.canonical_scopes = message.canonicalScopes === "" ? undefined : message.canonicalScopes;
    return obj;
  },
  fromAminoMsg(object: OAuthRequirementsAminoMsg): OAuthRequirements {
    return OAuthRequirements.fromAmino(object.value);
  },
  fromProtoMsg(message: OAuthRequirementsProtoMsg): OAuthRequirements {
    return OAuthRequirements.decode(message.value);
  },
  toProto(message: OAuthRequirements): Uint8Array {
    return OAuthRequirements.encode(message).finish();
  },
  toProtoMsg(message: OAuthRequirements): OAuthRequirementsProtoMsg {
    return {
      typeUrl: "/google.api.OAuthRequirements",
      value: OAuthRequirements.encode(message).finish()
    };
  }
};
function createBaseAuthRequirement(): AuthRequirement {
  return {
    providerId: "",
    audiences: ""
  };
}
export const AuthRequirement = {
  typeUrl: "/google.api.AuthRequirement",
  encode(message: AuthRequirement, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.providerId !== "") {
      writer.uint32(10).string(message.providerId);
    }
    if (message.audiences !== "") {
      writer.uint32(18).string(message.audiences);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AuthRequirement {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthRequirement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providerId = reader.string();
          break;
        case 2:
          message.audiences = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AuthRequirement {
    return {
      providerId: isSet(object.providerId) ? String(object.providerId) : "",
      audiences: isSet(object.audiences) ? String(object.audiences) : ""
    };
  },
  toJSON(message: AuthRequirement): JsonSafe<AuthRequirement> {
    const obj: any = {};
    message.providerId !== undefined && (obj.providerId = message.providerId);
    message.audiences !== undefined && (obj.audiences = message.audiences);
    return obj;
  },
  fromPartial(object: DeepPartial<AuthRequirement>): AuthRequirement {
    const message = createBaseAuthRequirement();
    message.providerId = object.providerId ?? "";
    message.audiences = object.audiences ?? "";
    return message;
  },
  fromSDK(object: AuthRequirementSDKType): AuthRequirement {
    return {
      providerId: object?.provider_id,
      audiences: object?.audiences
    };
  },
  fromSDKJSON(object: any): AuthRequirementSDKType {
    return {
      provider_id: isSet(object.provider_id) ? String(object.provider_id) : "",
      audiences: isSet(object.audiences) ? String(object.audiences) : ""
    };
  },
  toSDK(message: AuthRequirement): AuthRequirementSDKType {
    const obj: any = {};
    obj.provider_id = message.providerId;
    obj.audiences = message.audiences;
    return obj;
  },
  fromAmino(object: AuthRequirementAmino): AuthRequirement {
    const message = createBaseAuthRequirement();
    if (object.provider_id !== undefined && object.provider_id !== null) {
      message.providerId = object.provider_id;
    }
    if (object.audiences !== undefined && object.audiences !== null) {
      message.audiences = object.audiences;
    }
    return message;
  },
  toAmino(message: AuthRequirement): AuthRequirementAmino {
    const obj: any = {};
    obj.provider_id = message.providerId === "" ? undefined : message.providerId;
    obj.audiences = message.audiences === "" ? undefined : message.audiences;
    return obj;
  },
  fromAminoMsg(object: AuthRequirementAminoMsg): AuthRequirement {
    return AuthRequirement.fromAmino(object.value);
  },
  fromProtoMsg(message: AuthRequirementProtoMsg): AuthRequirement {
    return AuthRequirement.decode(message.value);
  },
  toProto(message: AuthRequirement): Uint8Array {
    return AuthRequirement.encode(message).finish();
  },
  toProtoMsg(message: AuthRequirement): AuthRequirementProtoMsg {
    return {
      typeUrl: "/google.api.AuthRequirement",
      value: AuthRequirement.encode(message).finish()
    };
  }
};