import { Status, StatusAmino, StatusSDKType } from "../../../rpc/status";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../../helpers";
export const protobufPackage = "google.api.servicecontrol.v1";
/** Error codes for Check responses. */
export enum CheckError_Code {
  /** ERROR_CODE_UNSPECIFIED - This is never used in `CheckResponse`. */
  ERROR_CODE_UNSPECIFIED = 0,
  /**
   * NOT_FOUND - The consumer's project id, network container, or resource container was
   * not found. Same as [google.rpc.Code.NOT_FOUND][google.rpc.Code.NOT_FOUND].
   */
  NOT_FOUND = 5,
  /**
   * PERMISSION_DENIED - The consumer doesn't have access to the specified resource.
   * Same as [google.rpc.Code.PERMISSION_DENIED][google.rpc.Code.PERMISSION_DENIED].
   */
  PERMISSION_DENIED = 7,
  /** RESOURCE_EXHAUSTED - Quota check failed. Same as [google.rpc.Code.RESOURCE_EXHAUSTED][google.rpc.Code.RESOURCE_EXHAUSTED]. */
  RESOURCE_EXHAUSTED = 8,
  /** SERVICE_NOT_ACTIVATED - The consumer hasn't activated the service. */
  SERVICE_NOT_ACTIVATED = 104,
  /** BILLING_DISABLED - The consumer cannot access the service because billing is disabled. */
  BILLING_DISABLED = 107,
  /** PROJECT_DELETED - The consumer's project has been marked as deleted (soft deletion). */
  PROJECT_DELETED = 108,
  /** PROJECT_INVALID - The consumer's project number or id does not represent a valid project. */
  PROJECT_INVALID = 114,
  /**
   * CONSUMER_INVALID - The input consumer info does not represent a valid consumer folder or
   * organization.
   */
  CONSUMER_INVALID = 125,
  /**
   * IP_ADDRESS_BLOCKED - The IP address of the consumer is invalid for the specific consumer
   * project.
   */
  IP_ADDRESS_BLOCKED = 109,
  /**
   * REFERER_BLOCKED - The referer address of the consumer request is invalid for the specific
   * consumer project.
   */
  REFERER_BLOCKED = 110,
  /**
   * CLIENT_APP_BLOCKED - The client application of the consumer request is invalid for the
   * specific consumer project.
   */
  CLIENT_APP_BLOCKED = 111,
  /**
   * API_TARGET_BLOCKED - The API targeted by this request is invalid for the specified consumer
   * project.
   */
  API_TARGET_BLOCKED = 122,
  /** API_KEY_INVALID - The consumer's API key is invalid. */
  API_KEY_INVALID = 105,
  /** API_KEY_EXPIRED - The consumer's API Key has expired. */
  API_KEY_EXPIRED = 112,
  /** API_KEY_NOT_FOUND - The consumer's API Key was not found in config record. */
  API_KEY_NOT_FOUND = 113,
  /** INVALID_CREDENTIAL - The credential in the request can not be verified. */
  INVALID_CREDENTIAL = 123,
  /** NAMESPACE_LOOKUP_UNAVAILABLE - The backend server for looking up project id/number is unavailable. */
  NAMESPACE_LOOKUP_UNAVAILABLE = 300,
  /** SERVICE_STATUS_UNAVAILABLE - The backend server for checking service status is unavailable. */
  SERVICE_STATUS_UNAVAILABLE = 301,
  /** BILLING_STATUS_UNAVAILABLE - The backend server for checking billing status is unavailable. */
  BILLING_STATUS_UNAVAILABLE = 302,
  /** CLOUD_RESOURCE_MANAGER_BACKEND_UNAVAILABLE - Cloud Resource Manager backend server is unavailable. */
  CLOUD_RESOURCE_MANAGER_BACKEND_UNAVAILABLE = 305,
  UNRECOGNIZED = -1,
}
export const CheckError_CodeSDKType = CheckError_Code;
export const CheckError_CodeAmino = CheckError_Code;
export function checkError_CodeFromJSON(object: any): CheckError_Code {
  switch (object) {
    case 0:
    case "ERROR_CODE_UNSPECIFIED":
      return CheckError_Code.ERROR_CODE_UNSPECIFIED;
    case 5:
    case "NOT_FOUND":
      return CheckError_Code.NOT_FOUND;
    case 7:
    case "PERMISSION_DENIED":
      return CheckError_Code.PERMISSION_DENIED;
    case 8:
    case "RESOURCE_EXHAUSTED":
      return CheckError_Code.RESOURCE_EXHAUSTED;
    case 104:
    case "SERVICE_NOT_ACTIVATED":
      return CheckError_Code.SERVICE_NOT_ACTIVATED;
    case 107:
    case "BILLING_DISABLED":
      return CheckError_Code.BILLING_DISABLED;
    case 108:
    case "PROJECT_DELETED":
      return CheckError_Code.PROJECT_DELETED;
    case 114:
    case "PROJECT_INVALID":
      return CheckError_Code.PROJECT_INVALID;
    case 125:
    case "CONSUMER_INVALID":
      return CheckError_Code.CONSUMER_INVALID;
    case 109:
    case "IP_ADDRESS_BLOCKED":
      return CheckError_Code.IP_ADDRESS_BLOCKED;
    case 110:
    case "REFERER_BLOCKED":
      return CheckError_Code.REFERER_BLOCKED;
    case 111:
    case "CLIENT_APP_BLOCKED":
      return CheckError_Code.CLIENT_APP_BLOCKED;
    case 122:
    case "API_TARGET_BLOCKED":
      return CheckError_Code.API_TARGET_BLOCKED;
    case 105:
    case "API_KEY_INVALID":
      return CheckError_Code.API_KEY_INVALID;
    case 112:
    case "API_KEY_EXPIRED":
      return CheckError_Code.API_KEY_EXPIRED;
    case 113:
    case "API_KEY_NOT_FOUND":
      return CheckError_Code.API_KEY_NOT_FOUND;
    case 123:
    case "INVALID_CREDENTIAL":
      return CheckError_Code.INVALID_CREDENTIAL;
    case 300:
    case "NAMESPACE_LOOKUP_UNAVAILABLE":
      return CheckError_Code.NAMESPACE_LOOKUP_UNAVAILABLE;
    case 301:
    case "SERVICE_STATUS_UNAVAILABLE":
      return CheckError_Code.SERVICE_STATUS_UNAVAILABLE;
    case 302:
    case "BILLING_STATUS_UNAVAILABLE":
      return CheckError_Code.BILLING_STATUS_UNAVAILABLE;
    case 305:
    case "CLOUD_RESOURCE_MANAGER_BACKEND_UNAVAILABLE":
      return CheckError_Code.CLOUD_RESOURCE_MANAGER_BACKEND_UNAVAILABLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CheckError_Code.UNRECOGNIZED;
  }
}
export function checkError_CodeToJSON(object: CheckError_Code): string {
  switch (object) {
    case CheckError_Code.ERROR_CODE_UNSPECIFIED:
      return "ERROR_CODE_UNSPECIFIED";
    case CheckError_Code.NOT_FOUND:
      return "NOT_FOUND";
    case CheckError_Code.PERMISSION_DENIED:
      return "PERMISSION_DENIED";
    case CheckError_Code.RESOURCE_EXHAUSTED:
      return "RESOURCE_EXHAUSTED";
    case CheckError_Code.SERVICE_NOT_ACTIVATED:
      return "SERVICE_NOT_ACTIVATED";
    case CheckError_Code.BILLING_DISABLED:
      return "BILLING_DISABLED";
    case CheckError_Code.PROJECT_DELETED:
      return "PROJECT_DELETED";
    case CheckError_Code.PROJECT_INVALID:
      return "PROJECT_INVALID";
    case CheckError_Code.CONSUMER_INVALID:
      return "CONSUMER_INVALID";
    case CheckError_Code.IP_ADDRESS_BLOCKED:
      return "IP_ADDRESS_BLOCKED";
    case CheckError_Code.REFERER_BLOCKED:
      return "REFERER_BLOCKED";
    case CheckError_Code.CLIENT_APP_BLOCKED:
      return "CLIENT_APP_BLOCKED";
    case CheckError_Code.API_TARGET_BLOCKED:
      return "API_TARGET_BLOCKED";
    case CheckError_Code.API_KEY_INVALID:
      return "API_KEY_INVALID";
    case CheckError_Code.API_KEY_EXPIRED:
      return "API_KEY_EXPIRED";
    case CheckError_Code.API_KEY_NOT_FOUND:
      return "API_KEY_NOT_FOUND";
    case CheckError_Code.INVALID_CREDENTIAL:
      return "INVALID_CREDENTIAL";
    case CheckError_Code.NAMESPACE_LOOKUP_UNAVAILABLE:
      return "NAMESPACE_LOOKUP_UNAVAILABLE";
    case CheckError_Code.SERVICE_STATUS_UNAVAILABLE:
      return "SERVICE_STATUS_UNAVAILABLE";
    case CheckError_Code.BILLING_STATUS_UNAVAILABLE:
      return "BILLING_STATUS_UNAVAILABLE";
    case CheckError_Code.CLOUD_RESOURCE_MANAGER_BACKEND_UNAVAILABLE:
      return "CLOUD_RESOURCE_MANAGER_BACKEND_UNAVAILABLE";
    case CheckError_Code.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Defines the errors to be returned in
 * [google.api.servicecontrol.v1.CheckResponse.check_errors][google.api.servicecontrol.v1.CheckResponse.check_errors].
 */
export interface CheckError {
  /** The error code. */
  code: CheckError_Code;
  /**
   * Subject to whom this error applies. See the specific code enum for more
   * details on this field. For example:
   * 
   * - "project:<project-id or project-number>"
   * - "folder:<folder-id>"
   * - "organization:<organization-id>"
   */
  subject: string;
  /** Free-form text providing details on the error cause of the error. */
  detail: string;
  /**
   * Contains public information about the check error. If available,
   * `status.code` will be non zero and client can propagate it out as public
   * error.
   */
  status?: Status;
}
export interface CheckErrorProtoMsg {
  typeUrl: "/google.api.servicecontrol.v1.CheckError";
  value: Uint8Array;
}
/**
 * Defines the errors to be returned in
 * [google.api.servicecontrol.v1.CheckResponse.check_errors][google.api.servicecontrol.v1.CheckResponse.check_errors].
 */
export interface CheckErrorAmino {
  /** The error code. */
  code: CheckError_Code;
  /**
   * Subject to whom this error applies. See the specific code enum for more
   * details on this field. For example:
   * 
   * - "project:<project-id or project-number>"
   * - "folder:<folder-id>"
   * - "organization:<organization-id>"
   */
  subject: string;
  /** Free-form text providing details on the error cause of the error. */
  detail: string;
  /**
   * Contains public information about the check error. If available,
   * `status.code` will be non zero and client can propagate it out as public
   * error.
   */
  status?: StatusAmino;
}
export interface CheckErrorAminoMsg {
  type: "/google.api.servicecontrol.v1.CheckError";
  value: CheckErrorAmino;
}
/**
 * Defines the errors to be returned in
 * [google.api.servicecontrol.v1.CheckResponse.check_errors][google.api.servicecontrol.v1.CheckResponse.check_errors].
 */
export interface CheckErrorSDKType {
  code: CheckError_Code;
  subject: string;
  detail: string;
  status?: StatusSDKType;
}
function createBaseCheckError(): CheckError {
  return {
    code: 0,
    subject: "",
    detail: "",
    status: undefined
  };
}
export const CheckError = {
  typeUrl: "/google.api.servicecontrol.v1.CheckError",
  encode(message: CheckError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.subject !== "") {
      writer.uint32(34).string(message.subject);
    }
    if (message.detail !== "") {
      writer.uint32(18).string(message.detail);
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CheckError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = (reader.int32() as any);
          break;
        case 4:
          message.subject = reader.string();
          break;
        case 2:
          message.detail = reader.string();
          break;
        case 3:
          message.status = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CheckError {
    return {
      code: isSet(object.code) ? checkError_CodeFromJSON(object.code) : 0,
      subject: isSet(object.subject) ? String(object.subject) : "",
      detail: isSet(object.detail) ? String(object.detail) : "",
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined
    };
  },
  toJSON(message: CheckError): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = checkError_CodeToJSON(message.code));
    message.subject !== undefined && (obj.subject = message.subject);
    message.detail !== undefined && (obj.detail = message.detail);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<CheckError>): CheckError {
    const message = createBaseCheckError();
    message.code = object.code ?? 0;
    message.subject = object.subject ?? "";
    message.detail = object.detail ?? "";
    message.status = object.status !== undefined && object.status !== null ? Status.fromPartial(object.status) : undefined;
    return message;
  },
  fromSDK(object: CheckErrorSDKType): CheckError {
    return {
      code: isSet(object.code) ? checkError_CodeFromJSON(object.code) : 0,
      subject: object?.subject,
      detail: object?.detail,
      status: object.status ? Status.fromSDK(object.status) : undefined
    };
  },
  toSDK(message: CheckError): CheckErrorSDKType {
    const obj: any = {};
    message.code !== undefined && (obj.code = checkError_CodeToJSON(message.code));
    obj.subject = message.subject;
    obj.detail = message.detail;
    message.status !== undefined && (obj.status = message.status ? Status.toSDK(message.status) : undefined);
    return obj;
  },
  fromAmino(object: CheckErrorAmino): CheckError {
    return {
      code: isSet(object.code) ? checkError_CodeFromJSON(object.code) : 0,
      subject: object.subject,
      detail: object.detail,
      status: object?.status ? Status.fromAmino(object.status) : undefined
    };
  },
  toAmino(message: CheckError): CheckErrorAmino {
    const obj: any = {};
    obj.code = message.code;
    obj.subject = message.subject;
    obj.detail = message.detail;
    obj.status = message.status ? Status.toAmino(message.status) : undefined;
    return obj;
  },
  fromAminoMsg(object: CheckErrorAminoMsg): CheckError {
    return CheckError.fromAmino(object.value);
  },
  fromProtoMsg(message: CheckErrorProtoMsg): CheckError {
    return CheckError.decode(message.value);
  },
  toProto(message: CheckError): Uint8Array {
    return CheckError.encode(message).finish();
  },
  toProtoMsg(message: CheckError): CheckErrorProtoMsg {
    return {
      typeUrl: "/google.api.servicecontrol.v1.CheckError",
      value: CheckError.encode(message).finish()
    };
  }
};