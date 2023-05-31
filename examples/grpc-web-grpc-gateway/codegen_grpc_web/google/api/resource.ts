import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../helpers";
export const protobufPackage = "google.api";
/**
 * A description of the historical or future-looking state of the
 * resource pattern.
 */
export enum ResourceDescriptor_History {
  /** HISTORY_UNSPECIFIED - The "unset" value. */
  HISTORY_UNSPECIFIED = 0,
  /**
   * ORIGINALLY_SINGLE_PATTERN - The resource originally had one pattern and launched as such, and
   * additional patterns were added later.
   */
  ORIGINALLY_SINGLE_PATTERN = 1,
  /**
   * FUTURE_MULTI_PATTERN - The resource has one pattern, but the API owner expects to add more
   * later. (This is the inverse of ORIGINALLY_SINGLE_PATTERN, and prevents
   * that from being necessary once there are multiple patterns.)
   */
  FUTURE_MULTI_PATTERN = 2,
  UNRECOGNIZED = -1,
}
export const ResourceDescriptor_HistorySDKType = ResourceDescriptor_History;
export const ResourceDescriptor_HistoryAmino = ResourceDescriptor_History;
export function resourceDescriptor_HistoryFromJSON(object: any): ResourceDescriptor_History {
  switch (object) {
    case 0:
    case "HISTORY_UNSPECIFIED":
      return ResourceDescriptor_History.HISTORY_UNSPECIFIED;
    case 1:
    case "ORIGINALLY_SINGLE_PATTERN":
      return ResourceDescriptor_History.ORIGINALLY_SINGLE_PATTERN;
    case 2:
    case "FUTURE_MULTI_PATTERN":
      return ResourceDescriptor_History.FUTURE_MULTI_PATTERN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResourceDescriptor_History.UNRECOGNIZED;
  }
}
export function resourceDescriptor_HistoryToJSON(object: ResourceDescriptor_History): string {
  switch (object) {
    case ResourceDescriptor_History.HISTORY_UNSPECIFIED:
      return "HISTORY_UNSPECIFIED";
    case ResourceDescriptor_History.ORIGINALLY_SINGLE_PATTERN:
      return "ORIGINALLY_SINGLE_PATTERN";
    case ResourceDescriptor_History.FUTURE_MULTI_PATTERN:
      return "FUTURE_MULTI_PATTERN";
    case ResourceDescriptor_History.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** A flag representing a specific style that a resource claims to conform to. */
export enum ResourceDescriptor_Style {
  /** STYLE_UNSPECIFIED - The unspecified value. Do not use. */
  STYLE_UNSPECIFIED = 0,
  /**
   * DECLARATIVE_FRIENDLY - This resource is intended to be "declarative-friendly".
   * 
   * Declarative-friendly resources must be more strictly consistent, and
   * setting this to true communicates to tools that this resource should
   * adhere to declarative-friendly expectations.
   * 
   * Note: This is used by the API linter (linter.aip.dev) to enable
   * additional checks.
   */
  DECLARATIVE_FRIENDLY = 1,
  UNRECOGNIZED = -1,
}
export const ResourceDescriptor_StyleSDKType = ResourceDescriptor_Style;
export const ResourceDescriptor_StyleAmino = ResourceDescriptor_Style;
export function resourceDescriptor_StyleFromJSON(object: any): ResourceDescriptor_Style {
  switch (object) {
    case 0:
    case "STYLE_UNSPECIFIED":
      return ResourceDescriptor_Style.STYLE_UNSPECIFIED;
    case 1:
    case "DECLARATIVE_FRIENDLY":
      return ResourceDescriptor_Style.DECLARATIVE_FRIENDLY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResourceDescriptor_Style.UNRECOGNIZED;
  }
}
export function resourceDescriptor_StyleToJSON(object: ResourceDescriptor_Style): string {
  switch (object) {
    case ResourceDescriptor_Style.STYLE_UNSPECIFIED:
      return "STYLE_UNSPECIFIED";
    case ResourceDescriptor_Style.DECLARATIVE_FRIENDLY:
      return "DECLARATIVE_FRIENDLY";
    case ResourceDescriptor_Style.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * A simple descriptor of a resource type.
 * 
 * ResourceDescriptor annotates a resource message (either by means of a
 * protobuf annotation or use in the service config), and associates the
 * resource's schema, the resource type, and the pattern of the resource name.
 * 
 * Example:
 * 
 *     message Topic {
 *       // Indicates this message defines a resource schema.
 *       // Declares the resource type in the format of {service}/{kind}.
 *       // For Kubernetes resources, the format is {api group}/{kind}.
 *       option (google.api.resource) = {
 *         type: "pubsub.googleapis.com/Topic"
 *         pattern: "projects/{project}/topics/{topic}"
 *       };
 *     }
 * 
 * The ResourceDescriptor Yaml config will look like:
 * 
 *     resources:
 *     - type: "pubsub.googleapis.com/Topic"
 *       pattern: "projects/{project}/topics/{topic}"
 * 
 * Sometimes, resources have multiple patterns, typically because they can
 * live under multiple parents.
 * 
 * Example:
 * 
 *     message LogEntry {
 *       option (google.api.resource) = {
 *         type: "logging.googleapis.com/LogEntry"
 *         pattern: "projects/{project}/logs/{log}"
 *         pattern: "folders/{folder}/logs/{log}"
 *         pattern: "organizations/{organization}/logs/{log}"
 *         pattern: "billingAccounts/{billing_account}/logs/{log}"
 *       };
 *     }
 * 
 * The ResourceDescriptor Yaml config will look like:
 * 
 *     resources:
 *     - type: 'logging.googleapis.com/LogEntry'
 *       pattern: "projects/{project}/logs/{log}"
 *       pattern: "folders/{folder}/logs/{log}"
 *       pattern: "organizations/{organization}/logs/{log}"
 *       pattern: "billingAccounts/{billing_account}/logs/{log}"
 */
export interface ResourceDescriptor {
  /**
   * The resource type. It must be in the format of
   * {service_name}/{resource_type_kind}. The `resource_type_kind` must be
   * singular and must not include version numbers.
   * 
   * Example: `storage.googleapis.com/Bucket`
   * 
   * The value of the resource_type_kind must follow the regular expression
   * /[A-Za-z][a-zA-Z0-9]+/. It should start with an upper case character and
   * should use PascalCase (UpperCamelCase). The maximum number of
   * characters allowed for the `resource_type_kind` is 100.
   */
  type: string;
  /**
   * Optional. The relative resource name pattern associated with this resource
   * type. The DNS prefix of the full resource name shouldn't be specified here.
   * 
   * The path pattern must follow the syntax, which aligns with HTTP binding
   * syntax:
   * 
   *     Template = Segment { "/" Segment } ;
   *     Segment = LITERAL | Variable ;
   *     Variable = "{" LITERAL "}" ;
   * 
   * Examples:
   * 
   *     - "projects/{project}/topics/{topic}"
   *     - "projects/{project}/knowledgeBases/{knowledge_base}"
   * 
   * The components in braces correspond to the IDs for each resource in the
   * hierarchy. It is expected that, if multiple patterns are provided,
   * the same component name (e.g. "project") refers to IDs of the same
   * type of resource.
   */
  pattern: string[];
  /**
   * Optional. The field on the resource that designates the resource name
   * field. If omitted, this is assumed to be "name".
   */
  nameField: string;
  /**
   * Optional. The historical or future-looking state of the resource pattern.
   * 
   * Example:
   * 
   *     // The InspectTemplate message originally only supported resource
   *     // names with organization, and project was added later.
   *     message InspectTemplate {
   *       option (google.api.resource) = {
   *         type: "dlp.googleapis.com/InspectTemplate"
   *         pattern:
   *         "organizations/{organization}/inspectTemplates/{inspect_template}"
   *         pattern: "projects/{project}/inspectTemplates/{inspect_template}"
   *         history: ORIGINALLY_SINGLE_PATTERN
   *       };
   *     }
   */
  history: ResourceDescriptor_History;
  /**
   * The plural name used in the resource name and permission names, such as
   * 'projects' for the resource name of 'projects/{project}' and the permission
   * name of 'cloudresourcemanager.googleapis.com/projects.get'. It is the same
   * concept of the `plural` field in k8s CRD spec
   * https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions/
   * 
   * Note: The plural form is required even for singleton resources. See
   * https://aip.dev/156
   */
  plural: string;
  /**
   * The same concept of the `singular` field in k8s CRD spec
   * https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions/
   * Such as "project" for the `resourcemanager.googleapis.com/Project` type.
   */
  singular: string;
  /**
   * Style flag(s) for this resource.
   * These indicate that a resource is expected to conform to a given
   * style. See the specific style flags for additional information.
   */
  style: ResourceDescriptor_Style[];
}
export interface ResourceDescriptorProtoMsg {
  typeUrl: "/google.api.ResourceDescriptor";
  value: Uint8Array;
}
/**
 * A simple descriptor of a resource type.
 * 
 * ResourceDescriptor annotates a resource message (either by means of a
 * protobuf annotation or use in the service config), and associates the
 * resource's schema, the resource type, and the pattern of the resource name.
 * 
 * Example:
 * 
 *     message Topic {
 *       // Indicates this message defines a resource schema.
 *       // Declares the resource type in the format of {service}/{kind}.
 *       // For Kubernetes resources, the format is {api group}/{kind}.
 *       option (google.api.resource) = {
 *         type: "pubsub.googleapis.com/Topic"
 *         pattern: "projects/{project}/topics/{topic}"
 *       };
 *     }
 * 
 * The ResourceDescriptor Yaml config will look like:
 * 
 *     resources:
 *     - type: "pubsub.googleapis.com/Topic"
 *       pattern: "projects/{project}/topics/{topic}"
 * 
 * Sometimes, resources have multiple patterns, typically because they can
 * live under multiple parents.
 * 
 * Example:
 * 
 *     message LogEntry {
 *       option (google.api.resource) = {
 *         type: "logging.googleapis.com/LogEntry"
 *         pattern: "projects/{project}/logs/{log}"
 *         pattern: "folders/{folder}/logs/{log}"
 *         pattern: "organizations/{organization}/logs/{log}"
 *         pattern: "billingAccounts/{billing_account}/logs/{log}"
 *       };
 *     }
 * 
 * The ResourceDescriptor Yaml config will look like:
 * 
 *     resources:
 *     - type: 'logging.googleapis.com/LogEntry'
 *       pattern: "projects/{project}/logs/{log}"
 *       pattern: "folders/{folder}/logs/{log}"
 *       pattern: "organizations/{organization}/logs/{log}"
 *       pattern: "billingAccounts/{billing_account}/logs/{log}"
 */
export interface ResourceDescriptorAmino {
  /**
   * The resource type. It must be in the format of
   * {service_name}/{resource_type_kind}. The `resource_type_kind` must be
   * singular and must not include version numbers.
   * 
   * Example: `storage.googleapis.com/Bucket`
   * 
   * The value of the resource_type_kind must follow the regular expression
   * /[A-Za-z][a-zA-Z0-9]+/. It should start with an upper case character and
   * should use PascalCase (UpperCamelCase). The maximum number of
   * characters allowed for the `resource_type_kind` is 100.
   */
  type: string;
  /**
   * Optional. The relative resource name pattern associated with this resource
   * type. The DNS prefix of the full resource name shouldn't be specified here.
   * 
   * The path pattern must follow the syntax, which aligns with HTTP binding
   * syntax:
   * 
   *     Template = Segment { "/" Segment } ;
   *     Segment = LITERAL | Variable ;
   *     Variable = "{" LITERAL "}" ;
   * 
   * Examples:
   * 
   *     - "projects/{project}/topics/{topic}"
   *     - "projects/{project}/knowledgeBases/{knowledge_base}"
   * 
   * The components in braces correspond to the IDs for each resource in the
   * hierarchy. It is expected that, if multiple patterns are provided,
   * the same component name (e.g. "project") refers to IDs of the same
   * type of resource.
   */
  pattern: string[];
  /**
   * Optional. The field on the resource that designates the resource name
   * field. If omitted, this is assumed to be "name".
   */
  name_field: string;
  /**
   * Optional. The historical or future-looking state of the resource pattern.
   * 
   * Example:
   * 
   *     // The InspectTemplate message originally only supported resource
   *     // names with organization, and project was added later.
   *     message InspectTemplate {
   *       option (google.api.resource) = {
   *         type: "dlp.googleapis.com/InspectTemplate"
   *         pattern:
   *         "organizations/{organization}/inspectTemplates/{inspect_template}"
   *         pattern: "projects/{project}/inspectTemplates/{inspect_template}"
   *         history: ORIGINALLY_SINGLE_PATTERN
   *       };
   *     }
   */
  history: ResourceDescriptor_History;
  /**
   * The plural name used in the resource name and permission names, such as
   * 'projects' for the resource name of 'projects/{project}' and the permission
   * name of 'cloudresourcemanager.googleapis.com/projects.get'. It is the same
   * concept of the `plural` field in k8s CRD spec
   * https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions/
   * 
   * Note: The plural form is required even for singleton resources. See
   * https://aip.dev/156
   */
  plural: string;
  /**
   * The same concept of the `singular` field in k8s CRD spec
   * https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions/
   * Such as "project" for the `resourcemanager.googleapis.com/Project` type.
   */
  singular: string;
  /**
   * Style flag(s) for this resource.
   * These indicate that a resource is expected to conform to a given
   * style. See the specific style flags for additional information.
   */
  style: ResourceDescriptor_Style[];
}
export interface ResourceDescriptorAminoMsg {
  type: "/google.api.ResourceDescriptor";
  value: ResourceDescriptorAmino;
}
/**
 * A simple descriptor of a resource type.
 * 
 * ResourceDescriptor annotates a resource message (either by means of a
 * protobuf annotation or use in the service config), and associates the
 * resource's schema, the resource type, and the pattern of the resource name.
 * 
 * Example:
 * 
 *     message Topic {
 *       // Indicates this message defines a resource schema.
 *       // Declares the resource type in the format of {service}/{kind}.
 *       // For Kubernetes resources, the format is {api group}/{kind}.
 *       option (google.api.resource) = {
 *         type: "pubsub.googleapis.com/Topic"
 *         pattern: "projects/{project}/topics/{topic}"
 *       };
 *     }
 * 
 * The ResourceDescriptor Yaml config will look like:
 * 
 *     resources:
 *     - type: "pubsub.googleapis.com/Topic"
 *       pattern: "projects/{project}/topics/{topic}"
 * 
 * Sometimes, resources have multiple patterns, typically because they can
 * live under multiple parents.
 * 
 * Example:
 * 
 *     message LogEntry {
 *       option (google.api.resource) = {
 *         type: "logging.googleapis.com/LogEntry"
 *         pattern: "projects/{project}/logs/{log}"
 *         pattern: "folders/{folder}/logs/{log}"
 *         pattern: "organizations/{organization}/logs/{log}"
 *         pattern: "billingAccounts/{billing_account}/logs/{log}"
 *       };
 *     }
 * 
 * The ResourceDescriptor Yaml config will look like:
 * 
 *     resources:
 *     - type: 'logging.googleapis.com/LogEntry'
 *       pattern: "projects/{project}/logs/{log}"
 *       pattern: "folders/{folder}/logs/{log}"
 *       pattern: "organizations/{organization}/logs/{log}"
 *       pattern: "billingAccounts/{billing_account}/logs/{log}"
 */
export interface ResourceDescriptorSDKType {
  type: string;
  pattern: string[];
  name_field: string;
  history: ResourceDescriptor_History;
  plural: string;
  singular: string;
  style: ResourceDescriptor_Style[];
}
/**
 * Defines a proto annotation that describes a string field that refers to
 * an API resource.
 */
export interface ResourceReference {
  /**
   * The resource type that the annotated field references.
   * 
   * Example:
   * 
   *     message Subscription {
   *       string topic = 2 [(google.api.resource_reference) = {
   *         type: "pubsub.googleapis.com/Topic"
   *       }];
   *     }
   * 
   * Occasionally, a field may reference an arbitrary resource. In this case,
   * APIs use the special value * in their resource reference.
   * 
   * Example:
   * 
   *     message GetIamPolicyRequest {
   *       string resource = 2 [(google.api.resource_reference) = {
   *         type: "*"
   *       }];
   *     }
   */
  type: string;
  /**
   * The resource type of a child collection that the annotated field
   * references. This is useful for annotating the `parent` field that
   * doesn't have a fixed resource type.
   * 
   * Example:
   * 
   *     message ListLogEntriesRequest {
   *       string parent = 1 [(google.api.resource_reference) = {
   *         child_type: "logging.googleapis.com/LogEntry"
   *       };
   *     }
   */
  childType: string;
}
export interface ResourceReferenceProtoMsg {
  typeUrl: "/google.api.ResourceReference";
  value: Uint8Array;
}
/**
 * Defines a proto annotation that describes a string field that refers to
 * an API resource.
 */
export interface ResourceReferenceAmino {
  /**
   * The resource type that the annotated field references.
   * 
   * Example:
   * 
   *     message Subscription {
   *       string topic = 2 [(google.api.resource_reference) = {
   *         type: "pubsub.googleapis.com/Topic"
   *       }];
   *     }
   * 
   * Occasionally, a field may reference an arbitrary resource. In this case,
   * APIs use the special value * in their resource reference.
   * 
   * Example:
   * 
   *     message GetIamPolicyRequest {
   *       string resource = 2 [(google.api.resource_reference) = {
   *         type: "*"
   *       }];
   *     }
   */
  type: string;
  /**
   * The resource type of a child collection that the annotated field
   * references. This is useful for annotating the `parent` field that
   * doesn't have a fixed resource type.
   * 
   * Example:
   * 
   *     message ListLogEntriesRequest {
   *       string parent = 1 [(google.api.resource_reference) = {
   *         child_type: "logging.googleapis.com/LogEntry"
   *       };
   *     }
   */
  child_type: string;
}
export interface ResourceReferenceAminoMsg {
  type: "/google.api.ResourceReference";
  value: ResourceReferenceAmino;
}
/**
 * Defines a proto annotation that describes a string field that refers to
 * an API resource.
 */
export interface ResourceReferenceSDKType {
  type: string;
  child_type: string;
}
function createBaseResourceDescriptor(): ResourceDescriptor {
  return {
    type: "",
    pattern: [],
    nameField: "",
    history: 0,
    plural: "",
    singular: "",
    style: []
  };
}
export const ResourceDescriptor = {
  typeUrl: "/google.api.ResourceDescriptor",
  encode(message: ResourceDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    for (const v of message.pattern) {
      writer.uint32(18).string(v!);
    }
    if (message.nameField !== "") {
      writer.uint32(26).string(message.nameField);
    }
    if (message.history !== 0) {
      writer.uint32(32).int32(message.history);
    }
    if (message.plural !== "") {
      writer.uint32(42).string(message.plural);
    }
    if (message.singular !== "") {
      writer.uint32(50).string(message.singular);
    }
    writer.uint32(82).fork();
    for (const v of message.style) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.pattern.push(reader.string());
          break;
        case 3:
          message.nameField = reader.string();
          break;
        case 4:
          message.history = (reader.int32() as any);
          break;
        case 5:
          message.plural = reader.string();
          break;
        case 6:
          message.singular = reader.string();
          break;
        case 10:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.style.push((reader.int32() as any));
            }
          } else {
            message.style.push((reader.int32() as any));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResourceDescriptor {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      pattern: Array.isArray(object?.pattern) ? object.pattern.map((e: any) => String(e)) : [],
      nameField: isSet(object.nameField) ? String(object.nameField) : "",
      history: isSet(object.history) ? resourceDescriptor_HistoryFromJSON(object.history) : 0,
      plural: isSet(object.plural) ? String(object.plural) : "",
      singular: isSet(object.singular) ? String(object.singular) : "",
      style: Array.isArray(object?.style) ? object.style.map((e: any) => resourceDescriptor_StyleFromJSON(e)) : []
    };
  },
  toJSON(message: ResourceDescriptor): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    if (message.pattern) {
      obj.pattern = message.pattern.map(e => e);
    } else {
      obj.pattern = [];
    }
    message.nameField !== undefined && (obj.nameField = message.nameField);
    message.history !== undefined && (obj.history = resourceDescriptor_HistoryToJSON(message.history));
    message.plural !== undefined && (obj.plural = message.plural);
    message.singular !== undefined && (obj.singular = message.singular);
    if (message.style) {
      obj.style = message.style.map(e => resourceDescriptor_StyleToJSON(e));
    } else {
      obj.style = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ResourceDescriptor>): ResourceDescriptor {
    const message = createBaseResourceDescriptor();
    message.type = object.type ?? "";
    message.pattern = object.pattern?.map(e => e) || [];
    message.nameField = object.nameField ?? "";
    message.history = object.history ?? 0;
    message.plural = object.plural ?? "";
    message.singular = object.singular ?? "";
    message.style = object.style?.map(e => e) || [];
    return message;
  },
  fromSDK(object: ResourceDescriptorSDKType): ResourceDescriptor {
    return {
      type: object?.type,
      pattern: Array.isArray(object?.pattern) ? object.pattern.map((e: any) => e) : [],
      nameField: object?.name_field,
      history: isSet(object.history) ? resourceDescriptor_HistoryFromJSON(object.history) : 0,
      plural: object?.plural,
      singular: object?.singular,
      style: Array.isArray(object?.style) ? object.style.map((e: any) => resourceDescriptor_StyleFromJSON(e)) : []
    };
  },
  toSDK(message: ResourceDescriptor): ResourceDescriptorSDKType {
    const obj: any = {};
    obj.type = message.type;
    if (message.pattern) {
      obj.pattern = message.pattern.map(e => e);
    } else {
      obj.pattern = [];
    }
    obj.name_field = message.nameField;
    message.history !== undefined && (obj.history = resourceDescriptor_HistoryToJSON(message.history));
    obj.plural = message.plural;
    obj.singular = message.singular;
    if (message.style) {
      obj.style = message.style.map(e => resourceDescriptor_StyleToJSON(e));
    } else {
      obj.style = [];
    }
    return obj;
  },
  fromAmino(object: ResourceDescriptorAmino): ResourceDescriptor {
    return {
      type: object.type,
      pattern: Array.isArray(object?.pattern) ? object.pattern.map((e: any) => e) : [],
      nameField: object.name_field,
      history: isSet(object.history) ? resourceDescriptor_HistoryFromJSON(object.history) : 0,
      plural: object.plural,
      singular: object.singular,
      style: Array.isArray(object?.style) ? object.style.map((e: any) => resourceDescriptor_StyleFromJSON(e)) : []
    };
  },
  toAmino(message: ResourceDescriptor): ResourceDescriptorAmino {
    const obj: any = {};
    obj.type = message.type;
    if (message.pattern) {
      obj.pattern = message.pattern.map(e => e);
    } else {
      obj.pattern = [];
    }
    obj.name_field = message.nameField;
    obj.history = message.history;
    obj.plural = message.plural;
    obj.singular = message.singular;
    if (message.style) {
      obj.style = message.style.map(e => resourceDescriptor_StyleToJSON(e));
    } else {
      obj.style = [];
    }
    return obj;
  },
  fromAminoMsg(object: ResourceDescriptorAminoMsg): ResourceDescriptor {
    return ResourceDescriptor.fromAmino(object.value);
  },
  fromProtoMsg(message: ResourceDescriptorProtoMsg): ResourceDescriptor {
    return ResourceDescriptor.decode(message.value);
  },
  toProto(message: ResourceDescriptor): Uint8Array {
    return ResourceDescriptor.encode(message).finish();
  },
  toProtoMsg(message: ResourceDescriptor): ResourceDescriptorProtoMsg {
    return {
      typeUrl: "/google.api.ResourceDescriptor",
      value: ResourceDescriptor.encode(message).finish()
    };
  }
};
function createBaseResourceReference(): ResourceReference {
  return {
    type: "",
    childType: ""
  };
}
export const ResourceReference = {
  typeUrl: "/google.api.ResourceReference",
  encode(message: ResourceReference, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.childType !== "") {
      writer.uint32(18).string(message.childType);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceReference {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceReference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.childType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResourceReference {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      childType: isSet(object.childType) ? String(object.childType) : ""
    };
  },
  toJSON(message: ResourceReference): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.childType !== undefined && (obj.childType = message.childType);
    return obj;
  },
  fromPartial(object: DeepPartial<ResourceReference>): ResourceReference {
    const message = createBaseResourceReference();
    message.type = object.type ?? "";
    message.childType = object.childType ?? "";
    return message;
  },
  fromSDK(object: ResourceReferenceSDKType): ResourceReference {
    return {
      type: object?.type,
      childType: object?.child_type
    };
  },
  toSDK(message: ResourceReference): ResourceReferenceSDKType {
    const obj: any = {};
    obj.type = message.type;
    obj.child_type = message.childType;
    return obj;
  },
  fromAmino(object: ResourceReferenceAmino): ResourceReference {
    return {
      type: object.type,
      childType: object.child_type
    };
  },
  toAmino(message: ResourceReference): ResourceReferenceAmino {
    const obj: any = {};
    obj.type = message.type;
    obj.child_type = message.childType;
    return obj;
  },
  fromAminoMsg(object: ResourceReferenceAminoMsg): ResourceReference {
    return ResourceReference.fromAmino(object.value);
  },
  fromProtoMsg(message: ResourceReferenceProtoMsg): ResourceReference {
    return ResourceReference.decode(message.value);
  },
  toProto(message: ResourceReference): Uint8Array {
    return ResourceReference.encode(message).finish();
  },
  toProtoMsg(message: ResourceReference): ResourceReferenceProtoMsg {
    return {
      typeUrl: "/google.api.ResourceReference",
      value: ResourceReference.encode(message).finish()
    };
  }
};