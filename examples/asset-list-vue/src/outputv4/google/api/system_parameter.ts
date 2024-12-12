import { BinaryReader, BinaryWriter } from "../../binary";
import { JsonSafe } from "../../json-safe";
import { DeepPartial, isSet } from "../../helpers";
import { ComputedRef } from "vue";
export const protobufPackage = "google.api";
/**
 * ### System parameter configuration
 * 
 * A system parameter is a special kind of parameter defined by the API
 * system, not by an individual API. It is typically mapped to an HTTP header
 * and/or a URL query parameter. This configuration specifies which methods
 * change the names of the system parameters.
 */
export interface SystemParameters {
  /**
   * Define system parameters.
   * 
   * The parameters defined here will override the default parameters
   * implemented by the system. If this field is missing from the service
   * config, default system parameters will be used. Default system parameters
   * and names is implementation-dependent.
   * 
   * Example: define api key for all methods
   * 
   *     system_parameters
   *       rules:
   *         - selector: "*"
   *           parameters:
   *             - name: api_key
   *               url_query_parameter: api_key
   * 
   * 
   * Example: define 2 api key names for a specific method.
   * 
   *     system_parameters
   *       rules:
   *         - selector: "/ListShelves"
   *           parameters:
   *             - name: api_key
   *               http_header: Api-Key1
   *             - name: api_key
   *               http_header: Api-Key2
   * 
   * **NOTE:** All service configuration rules follow "last one wins" order.
   */
  rules: SystemParameterRule[];
}
export interface ReactiveSystemParameters {
  rules: ComputedRef<SystemParameterRule[]>;
}
export interface SystemParametersProtoMsg {
  typeUrl: "/google.api.SystemParameters";
  value: Uint8Array;
}
/**
 * ### System parameter configuration
 * 
 * A system parameter is a special kind of parameter defined by the API
 * system, not by an individual API. It is typically mapped to an HTTP header
 * and/or a URL query parameter. This configuration specifies which methods
 * change the names of the system parameters.
 */
export interface SystemParametersSDKType {
  rules: SystemParameterRuleSDKType[];
}
/**
 * Define a system parameter rule mapping system parameter definitions to
 * methods.
 */
export interface SystemParameterRule {
  /**
   * Selects the methods to which this rule applies. Use '*' to indicate all
   * methods in all APIs.
   * 
   * Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
   */
  selector: string;
  /**
   * Define parameters. Multiple names may be defined for a parameter.
   * For a given method call, only one of them should be used. If multiple
   * names are used the behavior is implementation-dependent.
   * If none of the specified names are present the behavior is
   * parameter-dependent.
   */
  parameters: SystemParameter[];
}
export interface ReactiveSystemParameterRule {
  selector: ComputedRef<string>;
  parameters: ComputedRef<SystemParameter[]>;
}
export interface SystemParameterRuleProtoMsg {
  typeUrl: "/google.api.SystemParameterRule";
  value: Uint8Array;
}
/**
 * Define a system parameter rule mapping system parameter definitions to
 * methods.
 */
export interface SystemParameterRuleSDKType {
  selector: string;
  parameters: SystemParameterSDKType[];
}
/**
 * Define a parameter's name and location. The parameter may be passed as either
 * an HTTP header or a URL query parameter, and if both are passed the behavior
 * is implementation-dependent.
 */
export interface SystemParameter {
  /** Define the name of the parameter, such as "api_key" . It is case sensitive. */
  name: string;
  /**
   * Define the HTTP header name to use for the parameter. It is case
   * insensitive.
   */
  httpHeader: string;
  /**
   * Define the URL query parameter name to use for the parameter. It is case
   * sensitive.
   */
  urlQueryParameter: string;
}
export interface ReactiveSystemParameter {
  name: ComputedRef<string>;
  httpHeader: ComputedRef<string>;
  urlQueryParameter: ComputedRef<string>;
}
export interface SystemParameterProtoMsg {
  typeUrl: "/google.api.SystemParameter";
  value: Uint8Array;
}
/**
 * Define a parameter's name and location. The parameter may be passed as either
 * an HTTP header or a URL query parameter, and if both are passed the behavior
 * is implementation-dependent.
 */
export interface SystemParameterSDKType {
  name: string;
  http_header: string;
  url_query_parameter: string;
}
function createBaseSystemParameters(): SystemParameters {
  return {
    rules: []
  };
}
export const SystemParameters = {
  typeUrl: "/google.api.SystemParameters",
  encode(message: SystemParameters, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rules) {
      SystemParameterRule.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SystemParameters {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSystemParameters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rules.push(SystemParameterRule.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SystemParameters {
    return {
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => SystemParameterRule.fromJSON(e)) : []
    };
  },
  toJSON(message: SystemParameters): JsonSafe<SystemParameters> {
    const obj: any = {};
    if (message.rules) {
      obj.rules = message.rules.map(e => e ? SystemParameterRule.toJSON(e) : undefined);
    } else {
      obj.rules = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<SystemParameters>): SystemParameters {
    const message = createBaseSystemParameters();
    message.rules = object.rules?.map(e => SystemParameterRule.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: SystemParametersSDKType): SystemParameters {
    return {
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => SystemParameterRule.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): SystemParametersSDKType {
    return {
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => SystemParameterRule.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: SystemParameters): SystemParametersSDKType {
    const obj: any = {};
    if (message.rules) {
      obj.rules = message.rules.map(e => e ? SystemParameterRule.toSDK(e) : undefined);
    } else {
      obj.rules = [];
    }
    return obj;
  },
  fromAmino(object: SystemParametersAmino): SystemParameters {
    const message = createBaseSystemParameters();
    message.rules = object.rules?.map(e => SystemParameterRule.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SystemParameters): SystemParametersAmino {
    const obj: any = {};
    if (message.rules) {
      obj.rules = message.rules.map(e => e ? SystemParameterRule.toAmino(e) : undefined);
    } else {
      obj.rules = message.rules;
    }
    return obj;
  },
  fromAminoMsg(object: SystemParametersAminoMsg): SystemParameters {
    return SystemParameters.fromAmino(object.value);
  },
  fromProtoMsg(message: SystemParametersProtoMsg): SystemParameters {
    return SystemParameters.decode(message.value);
  },
  toProto(message: SystemParameters): Uint8Array {
    return SystemParameters.encode(message).finish();
  },
  toProtoMsg(message: SystemParameters): SystemParametersProtoMsg {
    return {
      typeUrl: "/google.api.SystemParameters",
      value: SystemParameters.encode(message).finish()
    };
  }
};
function createBaseSystemParameterRule(): SystemParameterRule {
  return {
    selector: "",
    parameters: []
  };
}
export const SystemParameterRule = {
  typeUrl: "/google.api.SystemParameterRule",
  encode(message: SystemParameterRule, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }
    for (const v of message.parameters) {
      SystemParameter.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SystemParameterRule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSystemParameterRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.selector = reader.string();
          break;
        case 2:
          message.parameters.push(SystemParameter.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SystemParameterRule {
    return {
      selector: isSet(object.selector) ? String(object.selector) : "",
      parameters: Array.isArray(object?.parameters) ? object.parameters.map((e: any) => SystemParameter.fromJSON(e)) : []
    };
  },
  toJSON(message: SystemParameterRule): JsonSafe<SystemParameterRule> {
    const obj: any = {};
    message.selector !== undefined && (obj.selector = message.selector);
    if (message.parameters) {
      obj.parameters = message.parameters.map(e => e ? SystemParameter.toJSON(e) : undefined);
    } else {
      obj.parameters = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<SystemParameterRule>): SystemParameterRule {
    const message = createBaseSystemParameterRule();
    message.selector = object.selector ?? "";
    message.parameters = object.parameters?.map(e => SystemParameter.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: SystemParameterRuleSDKType): SystemParameterRule {
    return {
      selector: object?.selector,
      parameters: Array.isArray(object?.parameters) ? object.parameters.map((e: any) => SystemParameter.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): SystemParameterRuleSDKType {
    return {
      selector: isSet(object.selector) ? String(object.selector) : "",
      parameters: Array.isArray(object?.parameters) ? object.parameters.map((e: any) => SystemParameter.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: SystemParameterRule): SystemParameterRuleSDKType {
    const obj: any = {};
    obj.selector = message.selector;
    if (message.parameters) {
      obj.parameters = message.parameters.map(e => e ? SystemParameter.toSDK(e) : undefined);
    } else {
      obj.parameters = [];
    }
    return obj;
  },
  fromAmino(object: SystemParameterRuleAmino): SystemParameterRule {
    const message = createBaseSystemParameterRule();
    if (object.selector !== undefined && object.selector !== null) {
      message.selector = object.selector;
    }
    message.parameters = object.parameters?.map(e => SystemParameter.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SystemParameterRule): SystemParameterRuleAmino {
    const obj: any = {};
    obj.selector = message.selector === "" ? undefined : message.selector;
    if (message.parameters) {
      obj.parameters = message.parameters.map(e => e ? SystemParameter.toAmino(e) : undefined);
    } else {
      obj.parameters = message.parameters;
    }
    return obj;
  },
  fromAminoMsg(object: SystemParameterRuleAminoMsg): SystemParameterRule {
    return SystemParameterRule.fromAmino(object.value);
  },
  fromProtoMsg(message: SystemParameterRuleProtoMsg): SystemParameterRule {
    return SystemParameterRule.decode(message.value);
  },
  toProto(message: SystemParameterRule): Uint8Array {
    return SystemParameterRule.encode(message).finish();
  },
  toProtoMsg(message: SystemParameterRule): SystemParameterRuleProtoMsg {
    return {
      typeUrl: "/google.api.SystemParameterRule",
      value: SystemParameterRule.encode(message).finish()
    };
  }
};
function createBaseSystemParameter(): SystemParameter {
  return {
    name: "",
    httpHeader: "",
    urlQueryParameter: ""
  };
}
export const SystemParameter = {
  typeUrl: "/google.api.SystemParameter",
  encode(message: SystemParameter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.httpHeader !== "") {
      writer.uint32(18).string(message.httpHeader);
    }
    if (message.urlQueryParameter !== "") {
      writer.uint32(26).string(message.urlQueryParameter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SystemParameter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSystemParameter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.httpHeader = reader.string();
          break;
        case 3:
          message.urlQueryParameter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SystemParameter {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      httpHeader: isSet(object.httpHeader) ? String(object.httpHeader) : "",
      urlQueryParameter: isSet(object.urlQueryParameter) ? String(object.urlQueryParameter) : ""
    };
  },
  toJSON(message: SystemParameter): JsonSafe<SystemParameter> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.httpHeader !== undefined && (obj.httpHeader = message.httpHeader);
    message.urlQueryParameter !== undefined && (obj.urlQueryParameter = message.urlQueryParameter);
    return obj;
  },
  fromPartial(object: DeepPartial<SystemParameter>): SystemParameter {
    const message = createBaseSystemParameter();
    message.name = object.name ?? "";
    message.httpHeader = object.httpHeader ?? "";
    message.urlQueryParameter = object.urlQueryParameter ?? "";
    return message;
  },
  fromSDK(object: SystemParameterSDKType): SystemParameter {
    return {
      name: object?.name,
      httpHeader: object?.http_header,
      urlQueryParameter: object?.url_query_parameter
    };
  },
  fromSDKJSON(object: any): SystemParameterSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      http_header: isSet(object.http_header) ? String(object.http_header) : "",
      url_query_parameter: isSet(object.url_query_parameter) ? String(object.url_query_parameter) : ""
    };
  },
  toSDK(message: SystemParameter): SystemParameterSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.http_header = message.httpHeader;
    obj.url_query_parameter = message.urlQueryParameter;
    return obj;
  },
  fromAmino(object: SystemParameterAmino): SystemParameter {
    const message = createBaseSystemParameter();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.http_header !== undefined && object.http_header !== null) {
      message.httpHeader = object.http_header;
    }
    if (object.url_query_parameter !== undefined && object.url_query_parameter !== null) {
      message.urlQueryParameter = object.url_query_parameter;
    }
    return message;
  },
  toAmino(message: SystemParameter): SystemParameterAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.http_header = message.httpHeader === "" ? undefined : message.httpHeader;
    obj.url_query_parameter = message.urlQueryParameter === "" ? undefined : message.urlQueryParameter;
    return obj;
  },
  fromAminoMsg(object: SystemParameterAminoMsg): SystemParameter {
    return SystemParameter.fromAmino(object.value);
  },
  fromProtoMsg(message: SystemParameterProtoMsg): SystemParameter {
    return SystemParameter.decode(message.value);
  },
  toProto(message: SystemParameter): Uint8Array {
    return SystemParameter.encode(message).finish();
  },
  toProtoMsg(message: SystemParameter): SystemParameterProtoMsg {
    return {
      typeUrl: "/google.api.SystemParameter",
      value: SystemParameter.encode(message).finish()
    };
  }
};