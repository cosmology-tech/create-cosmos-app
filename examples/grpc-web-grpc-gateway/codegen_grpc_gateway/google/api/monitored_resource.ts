import { LabelDescriptor, LabelDescriptorAmino, LabelDescriptorSDKType } from "./label";
import { LaunchStage, LaunchStageSDKType, launchStageFromJSON, launchStageToJSON } from "./launch_stage";
import { Struct, StructAmino, StructSDKType } from "../protobuf/struct";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, isObject } from "../../helpers";
export const protobufPackage = "google.api";
/**
 * An object that describes the schema of a [MonitoredResource][google.api.MonitoredResource] object using a
 * type name and a set of labels.  For example, the monitored resource
 * descriptor for Google Compute Engine VM instances has a type of
 * `"gce_instance"` and specifies the use of the labels `"instance_id"` and
 * `"zone"` to identify particular VM instances.
 * 
 * Different APIs can support different monitored resource types. APIs generally
 * provide a `list` method that returns the monitored resource descriptors used
 * by the API.
 */
export interface MonitoredResourceDescriptor {
  /**
   * Optional. The resource name of the monitored resource descriptor:
   * `"projects/{project_id}/monitoredResourceDescriptors/{type}"` where
   * {type} is the value of the `type` field in this object and
   * {project_id} is a project ID that provides API-specific context for
   * accessing the type.  APIs that do not use project information can use the
   * resource name format `"monitoredResourceDescriptors/{type}"`.
   */
  name: string;
  /**
   * Required. The monitored resource type. For example, the type
   * `"cloudsql_database"` represents databases in Google Cloud SQL.
   */
  type: string;
  /**
   * Optional. A concise name for the monitored resource type that might be
   * displayed in user interfaces. It should be a Title Cased Noun Phrase,
   * without any article or other determiners. For example,
   * `"Google Cloud SQL Database"`.
   */
  displayName: string;
  /**
   * Optional. A detailed description of the monitored resource type that might
   * be used in documentation.
   */
  description: string;
  /**
   * Required. A set of labels used to describe instances of this monitored
   * resource type. For example, an individual Google Cloud SQL database is
   * identified by values for the labels `"database_id"` and `"zone"`.
   */
  labels: LabelDescriptor[];
  /** Optional. The launch stage of the monitored resource definition. */
  launchStage: LaunchStage;
}
export interface MonitoredResourceDescriptorProtoMsg {
  typeUrl: "/google.api.MonitoredResourceDescriptor";
  value: Uint8Array;
}
/**
 * An object that describes the schema of a [MonitoredResource][google.api.MonitoredResource] object using a
 * type name and a set of labels.  For example, the monitored resource
 * descriptor for Google Compute Engine VM instances has a type of
 * `"gce_instance"` and specifies the use of the labels `"instance_id"` and
 * `"zone"` to identify particular VM instances.
 * 
 * Different APIs can support different monitored resource types. APIs generally
 * provide a `list` method that returns the monitored resource descriptors used
 * by the API.
 */
export interface MonitoredResourceDescriptorAmino {
  /**
   * Optional. The resource name of the monitored resource descriptor:
   * `"projects/{project_id}/monitoredResourceDescriptors/{type}"` where
   * {type} is the value of the `type` field in this object and
   * {project_id} is a project ID that provides API-specific context for
   * accessing the type.  APIs that do not use project information can use the
   * resource name format `"monitoredResourceDescriptors/{type}"`.
   */
  name: string;
  /**
   * Required. The monitored resource type. For example, the type
   * `"cloudsql_database"` represents databases in Google Cloud SQL.
   */
  type: string;
  /**
   * Optional. A concise name for the monitored resource type that might be
   * displayed in user interfaces. It should be a Title Cased Noun Phrase,
   * without any article or other determiners. For example,
   * `"Google Cloud SQL Database"`.
   */
  display_name: string;
  /**
   * Optional. A detailed description of the monitored resource type that might
   * be used in documentation.
   */
  description: string;
  /**
   * Required. A set of labels used to describe instances of this monitored
   * resource type. For example, an individual Google Cloud SQL database is
   * identified by values for the labels `"database_id"` and `"zone"`.
   */
  labels: LabelDescriptorAmino[];
  /** Optional. The launch stage of the monitored resource definition. */
  launch_stage: LaunchStage;
}
export interface MonitoredResourceDescriptorAminoMsg {
  type: "/google.api.MonitoredResourceDescriptor";
  value: MonitoredResourceDescriptorAmino;
}
/**
 * An object that describes the schema of a [MonitoredResource][google.api.MonitoredResource] object using a
 * type name and a set of labels.  For example, the monitored resource
 * descriptor for Google Compute Engine VM instances has a type of
 * `"gce_instance"` and specifies the use of the labels `"instance_id"` and
 * `"zone"` to identify particular VM instances.
 * 
 * Different APIs can support different monitored resource types. APIs generally
 * provide a `list` method that returns the monitored resource descriptors used
 * by the API.
 */
export interface MonitoredResourceDescriptorSDKType {
  name: string;
  type: string;
  display_name: string;
  description: string;
  labels: LabelDescriptorSDKType[];
  launch_stage: LaunchStage;
}
export interface MonitoredResource_LabelsEntry {
  key: string;
  value: string;
}
export interface MonitoredResource_LabelsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface MonitoredResource_LabelsEntryAmino {
  key: string;
  value: string;
}
export interface MonitoredResource_LabelsEntryAminoMsg {
  type: string;
  value: MonitoredResource_LabelsEntryAmino;
}
export interface MonitoredResource_LabelsEntrySDKType {
  key: string;
  value: string;
}
/**
 * An object representing a resource that can be used for monitoring, logging,
 * billing, or other purposes. Examples include virtual machine instances,
 * databases, and storage devices such as disks. The `type` field identifies a
 * [MonitoredResourceDescriptor][google.api.MonitoredResourceDescriptor] object that describes the resource's
 * schema. Information in the `labels` field identifies the actual resource and
 * its attributes according to the schema. For example, a particular Compute
 * Engine VM instance could be represented by the following object, because the
 * [MonitoredResourceDescriptor][google.api.MonitoredResourceDescriptor] for `"gce_instance"` has labels
 * `"instance_id"` and `"zone"`:
 * 
 *     { "type": "gce_instance",
 *       "labels": { "instance_id": "12345678901234",
 *                   "zone": "us-central1-a" }}
 */
export interface MonitoredResource {
  /**
   * Required. The monitored resource type. This field must match
   * the `type` field of a [MonitoredResourceDescriptor][google.api.MonitoredResourceDescriptor] object. For
   * example, the type of a Compute Engine VM instance is `gce_instance`.
   */
  type: string;
  /**
   * Required. Values for all of the labels listed in the associated monitored
   * resource descriptor. For example, Compute Engine VM instances use the
   * labels `"project_id"`, `"instance_id"`, and `"zone"`.
   */
  labels: {
    [key: string]: string;
  };
}
export interface MonitoredResourceProtoMsg {
  typeUrl: "/google.api.MonitoredResource";
  value: Uint8Array;
}
/**
 * An object representing a resource that can be used for monitoring, logging,
 * billing, or other purposes. Examples include virtual machine instances,
 * databases, and storage devices such as disks. The `type` field identifies a
 * [MonitoredResourceDescriptor][google.api.MonitoredResourceDescriptor] object that describes the resource's
 * schema. Information in the `labels` field identifies the actual resource and
 * its attributes according to the schema. For example, a particular Compute
 * Engine VM instance could be represented by the following object, because the
 * [MonitoredResourceDescriptor][google.api.MonitoredResourceDescriptor] for `"gce_instance"` has labels
 * `"instance_id"` and `"zone"`:
 * 
 *     { "type": "gce_instance",
 *       "labels": { "instance_id": "12345678901234",
 *                   "zone": "us-central1-a" }}
 */
export interface MonitoredResourceAmino {
  /**
   * Required. The monitored resource type. This field must match
   * the `type` field of a [MonitoredResourceDescriptor][google.api.MonitoredResourceDescriptor] object. For
   * example, the type of a Compute Engine VM instance is `gce_instance`.
   */
  type: string;
  /**
   * Required. Values for all of the labels listed in the associated monitored
   * resource descriptor. For example, Compute Engine VM instances use the
   * labels `"project_id"`, `"instance_id"`, and `"zone"`.
   */
  labels: {
    [key: string]: string;
  };
}
export interface MonitoredResourceAminoMsg {
  type: "/google.api.MonitoredResource";
  value: MonitoredResourceAmino;
}
/**
 * An object representing a resource that can be used for monitoring, logging,
 * billing, or other purposes. Examples include virtual machine instances,
 * databases, and storage devices such as disks. The `type` field identifies a
 * [MonitoredResourceDescriptor][google.api.MonitoredResourceDescriptor] object that describes the resource's
 * schema. Information in the `labels` field identifies the actual resource and
 * its attributes according to the schema. For example, a particular Compute
 * Engine VM instance could be represented by the following object, because the
 * [MonitoredResourceDescriptor][google.api.MonitoredResourceDescriptor] for `"gce_instance"` has labels
 * `"instance_id"` and `"zone"`:
 * 
 *     { "type": "gce_instance",
 *       "labels": { "instance_id": "12345678901234",
 *                   "zone": "us-central1-a" }}
 */
export interface MonitoredResourceSDKType {
  type: string;
  labels: {
    [key: string]: string;
  };
}
export interface MonitoredResourceMetadata_UserLabelsEntry {
  key: string;
  value: string;
}
export interface MonitoredResourceMetadata_UserLabelsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface MonitoredResourceMetadata_UserLabelsEntryAmino {
  key: string;
  value: string;
}
export interface MonitoredResourceMetadata_UserLabelsEntryAminoMsg {
  type: string;
  value: MonitoredResourceMetadata_UserLabelsEntryAmino;
}
export interface MonitoredResourceMetadata_UserLabelsEntrySDKType {
  key: string;
  value: string;
}
/**
 * Auxiliary metadata for a [MonitoredResource][google.api.MonitoredResource] object.
 * [MonitoredResource][google.api.MonitoredResource] objects contain the minimum set of information to
 * uniquely identify a monitored resource instance. There is some other useful
 * auxiliary metadata. Monitoring and Logging use an ingestion
 * pipeline to extract metadata for cloud resources of all types, and store
 * the metadata in this message.
 */
export interface MonitoredResourceMetadata {
  /**
   * Output only. Values for predefined system metadata labels.
   * System labels are a kind of metadata extracted by Google, including
   * "machine_image", "vpc", "subnet_id",
   * "security_group", "name", etc.
   * System label values can be only strings, Boolean values, or a list of
   * strings. For example:
   * 
   *     { "name": "my-test-instance",
   *       "security_group": ["a", "b", "c"],
   *       "spot_instance": false }
   */
  systemLabels?: Struct;
  /** Output only. A map of user-defined metadata labels. */
  userLabels: {
    [key: string]: string;
  };
}
export interface MonitoredResourceMetadataProtoMsg {
  typeUrl: "/google.api.MonitoredResourceMetadata";
  value: Uint8Array;
}
/**
 * Auxiliary metadata for a [MonitoredResource][google.api.MonitoredResource] object.
 * [MonitoredResource][google.api.MonitoredResource] objects contain the minimum set of information to
 * uniquely identify a monitored resource instance. There is some other useful
 * auxiliary metadata. Monitoring and Logging use an ingestion
 * pipeline to extract metadata for cloud resources of all types, and store
 * the metadata in this message.
 */
export interface MonitoredResourceMetadataAmino {
  /**
   * Output only. Values for predefined system metadata labels.
   * System labels are a kind of metadata extracted by Google, including
   * "machine_image", "vpc", "subnet_id",
   * "security_group", "name", etc.
   * System label values can be only strings, Boolean values, or a list of
   * strings. For example:
   * 
   *     { "name": "my-test-instance",
   *       "security_group": ["a", "b", "c"],
   *       "spot_instance": false }
   */
  system_labels?: StructAmino;
  /** Output only. A map of user-defined metadata labels. */
  user_labels: {
    [key: string]: string;
  };
}
export interface MonitoredResourceMetadataAminoMsg {
  type: "/google.api.MonitoredResourceMetadata";
  value: MonitoredResourceMetadataAmino;
}
/**
 * Auxiliary metadata for a [MonitoredResource][google.api.MonitoredResource] object.
 * [MonitoredResource][google.api.MonitoredResource] objects contain the minimum set of information to
 * uniquely identify a monitored resource instance. There is some other useful
 * auxiliary metadata. Monitoring and Logging use an ingestion
 * pipeline to extract metadata for cloud resources of all types, and store
 * the metadata in this message.
 */
export interface MonitoredResourceMetadataSDKType {
  system_labels?: StructSDKType;
  user_labels: {
    [key: string]: string;
  };
}
function createBaseMonitoredResourceDescriptor(): MonitoredResourceDescriptor {
  return {
    name: "",
    type: "",
    displayName: "",
    description: "",
    labels: [],
    launchStage: 0
  };
}
export const MonitoredResourceDescriptor = {
  typeUrl: "/google.api.MonitoredResourceDescriptor",
  encode(message: MonitoredResourceDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    for (const v of message.labels) {
      LabelDescriptor.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.launchStage !== 0) {
      writer.uint32(56).int32(message.launchStage);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MonitoredResourceDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonitoredResourceDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          message.name = reader.string();
          break;
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.displayName = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.labels.push(LabelDescriptor.decode(reader, reader.uint32()));
          break;
        case 7:
          message.launchStage = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MonitoredResourceDescriptor {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      type: isSet(object.type) ? String(object.type) : "",
      displayName: isSet(object.displayName) ? String(object.displayName) : "",
      description: isSet(object.description) ? String(object.description) : "",
      labels: Array.isArray(object?.labels) ? object.labels.map((e: any) => LabelDescriptor.fromJSON(e)) : [],
      launchStage: isSet(object.launchStage) ? launchStageFromJSON(object.launchStage) : 0
    };
  },
  toJSON(message: MonitoredResourceDescriptor): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined && (obj.type = message.type);
    message.displayName !== undefined && (obj.displayName = message.displayName);
    message.description !== undefined && (obj.description = message.description);
    if (message.labels) {
      obj.labels = message.labels.map(e => e ? LabelDescriptor.toJSON(e) : undefined);
    } else {
      obj.labels = [];
    }
    message.launchStage !== undefined && (obj.launchStage = launchStageToJSON(message.launchStage));
    return obj;
  },
  fromPartial(object: DeepPartial<MonitoredResourceDescriptor>): MonitoredResourceDescriptor {
    const message = createBaseMonitoredResourceDescriptor();
    message.name = object.name ?? "";
    message.type = object.type ?? "";
    message.displayName = object.displayName ?? "";
    message.description = object.description ?? "";
    message.labels = object.labels?.map(e => LabelDescriptor.fromPartial(e)) || [];
    message.launchStage = object.launchStage ?? 0;
    return message;
  },
  fromSDK(object: MonitoredResourceDescriptorSDKType): MonitoredResourceDescriptor {
    return {
      name: object?.name,
      type: object?.type,
      displayName: object?.display_name,
      description: object?.description,
      labels: Array.isArray(object?.labels) ? object.labels.map((e: any) => LabelDescriptor.fromSDK(e)) : [],
      launchStage: isSet(object.launch_stage) ? launchStageFromJSON(object.launch_stage) : 0
    };
  },
  toSDK(message: MonitoredResourceDescriptor): MonitoredResourceDescriptorSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.type = message.type;
    obj.display_name = message.displayName;
    obj.description = message.description;
    if (message.labels) {
      obj.labels = message.labels.map(e => e ? LabelDescriptor.toSDK(e) : undefined);
    } else {
      obj.labels = [];
    }
    message.launchStage !== undefined && (obj.launch_stage = launchStageToJSON(message.launchStage));
    return obj;
  },
  fromAmino(object: MonitoredResourceDescriptorAmino): MonitoredResourceDescriptor {
    return {
      name: object.name,
      type: object.type,
      displayName: object.display_name,
      description: object.description,
      labels: Array.isArray(object?.labels) ? object.labels.map((e: any) => LabelDescriptor.fromAmino(e)) : [],
      launchStage: isSet(object.launch_stage) ? launchStageFromJSON(object.launch_stage) : 0
    };
  },
  toAmino(message: MonitoredResourceDescriptor): MonitoredResourceDescriptorAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.type = message.type;
    obj.display_name = message.displayName;
    obj.description = message.description;
    if (message.labels) {
      obj.labels = message.labels.map(e => e ? LabelDescriptor.toAmino(e) : undefined);
    } else {
      obj.labels = [];
    }
    obj.launch_stage = message.launchStage;
    return obj;
  },
  fromAminoMsg(object: MonitoredResourceDescriptorAminoMsg): MonitoredResourceDescriptor {
    return MonitoredResourceDescriptor.fromAmino(object.value);
  },
  fromProtoMsg(message: MonitoredResourceDescriptorProtoMsg): MonitoredResourceDescriptor {
    return MonitoredResourceDescriptor.decode(message.value);
  },
  toProto(message: MonitoredResourceDescriptor): Uint8Array {
    return MonitoredResourceDescriptor.encode(message).finish();
  },
  toProtoMsg(message: MonitoredResourceDescriptor): MonitoredResourceDescriptorProtoMsg {
    return {
      typeUrl: "/google.api.MonitoredResourceDescriptor",
      value: MonitoredResourceDescriptor.encode(message).finish()
    };
  }
};
function createBaseMonitoredResource_LabelsEntry(): MonitoredResource_LabelsEntry {
  return {
    key: "",
    value: ""
  };
}
export const MonitoredResource_LabelsEntry = {
  encode(message: MonitoredResource_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MonitoredResource_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonitoredResource_LabelsEntry();
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
  fromJSON(object: any): MonitoredResource_LabelsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: MonitoredResource_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: DeepPartial<MonitoredResource_LabelsEntry>): MonitoredResource_LabelsEntry {
    const message = createBaseMonitoredResource_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromSDK(object: MonitoredResource_LabelsEntrySDKType): MonitoredResource_LabelsEntry {
    return {
      key: object?.key,
      value: object?.value
    };
  },
  toSDK(message: MonitoredResource_LabelsEntry): MonitoredResource_LabelsEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: MonitoredResource_LabelsEntryAmino): MonitoredResource_LabelsEntry {
    return {
      key: object.key,
      value: object.value
    };
  },
  toAmino(message: MonitoredResource_LabelsEntry): MonitoredResource_LabelsEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: MonitoredResource_LabelsEntryAminoMsg): MonitoredResource_LabelsEntry {
    return MonitoredResource_LabelsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: MonitoredResource_LabelsEntryProtoMsg): MonitoredResource_LabelsEntry {
    return MonitoredResource_LabelsEntry.decode(message.value);
  },
  toProto(message: MonitoredResource_LabelsEntry): Uint8Array {
    return MonitoredResource_LabelsEntry.encode(message).finish();
  }
};
function createBaseMonitoredResource(): MonitoredResource {
  return {
    type: "",
    labels: {}
  };
}
export const MonitoredResource = {
  typeUrl: "/google.api.MonitoredResource",
  encode(message: MonitoredResource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      MonitoredResource_LabelsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MonitoredResource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonitoredResource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          const entry2 = MonitoredResource_LabelsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.labels[entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MonitoredResource {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {}
    };
  },
  toJSON(message: MonitoredResource): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MonitoredResource>): MonitoredResource {
    const message = createBaseMonitoredResource();
    message.type = object.type ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromSDK(object: MonitoredResourceSDKType): MonitoredResource {
    return {
      type: object?.type,
      labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {}
    };
  },
  toSDK(message: MonitoredResource): MonitoredResourceSDKType {
    const obj: any = {};
    obj.type = message.type;
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    return obj;
  },
  fromAmino(object: MonitoredResourceAmino): MonitoredResource {
    return {
      type: object.type,
      labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {}
    };
  },
  toAmino(message: MonitoredResource): MonitoredResourceAmino {
    const obj: any = {};
    obj.type = message.type;
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    return obj;
  },
  fromAminoMsg(object: MonitoredResourceAminoMsg): MonitoredResource {
    return MonitoredResource.fromAmino(object.value);
  },
  fromProtoMsg(message: MonitoredResourceProtoMsg): MonitoredResource {
    return MonitoredResource.decode(message.value);
  },
  toProto(message: MonitoredResource): Uint8Array {
    return MonitoredResource.encode(message).finish();
  },
  toProtoMsg(message: MonitoredResource): MonitoredResourceProtoMsg {
    return {
      typeUrl: "/google.api.MonitoredResource",
      value: MonitoredResource.encode(message).finish()
    };
  }
};
function createBaseMonitoredResourceMetadata_UserLabelsEntry(): MonitoredResourceMetadata_UserLabelsEntry {
  return {
    key: "",
    value: ""
  };
}
export const MonitoredResourceMetadata_UserLabelsEntry = {
  encode(message: MonitoredResourceMetadata_UserLabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MonitoredResourceMetadata_UserLabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonitoredResourceMetadata_UserLabelsEntry();
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
  fromJSON(object: any): MonitoredResourceMetadata_UserLabelsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: MonitoredResourceMetadata_UserLabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: DeepPartial<MonitoredResourceMetadata_UserLabelsEntry>): MonitoredResourceMetadata_UserLabelsEntry {
    const message = createBaseMonitoredResourceMetadata_UserLabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromSDK(object: MonitoredResourceMetadata_UserLabelsEntrySDKType): MonitoredResourceMetadata_UserLabelsEntry {
    return {
      key: object?.key,
      value: object?.value
    };
  },
  toSDK(message: MonitoredResourceMetadata_UserLabelsEntry): MonitoredResourceMetadata_UserLabelsEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: MonitoredResourceMetadata_UserLabelsEntryAmino): MonitoredResourceMetadata_UserLabelsEntry {
    return {
      key: object.key,
      value: object.value
    };
  },
  toAmino(message: MonitoredResourceMetadata_UserLabelsEntry): MonitoredResourceMetadata_UserLabelsEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: MonitoredResourceMetadata_UserLabelsEntryAminoMsg): MonitoredResourceMetadata_UserLabelsEntry {
    return MonitoredResourceMetadata_UserLabelsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: MonitoredResourceMetadata_UserLabelsEntryProtoMsg): MonitoredResourceMetadata_UserLabelsEntry {
    return MonitoredResourceMetadata_UserLabelsEntry.decode(message.value);
  },
  toProto(message: MonitoredResourceMetadata_UserLabelsEntry): Uint8Array {
    return MonitoredResourceMetadata_UserLabelsEntry.encode(message).finish();
  }
};
function createBaseMonitoredResourceMetadata(): MonitoredResourceMetadata {
  return {
    systemLabels: undefined,
    userLabels: {}
  };
}
export const MonitoredResourceMetadata = {
  typeUrl: "/google.api.MonitoredResourceMetadata",
  encode(message: MonitoredResourceMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.systemLabels !== undefined) {
      Struct.encode(message.systemLabels, writer.uint32(10).fork()).ldelim();
    }
    Object.entries(message.userLabels).forEach(([key, value]) => {
      MonitoredResourceMetadata_UserLabelsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MonitoredResourceMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonitoredResourceMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.systemLabels = Struct.decode(reader, reader.uint32());
          break;
        case 2:
          const entry2 = MonitoredResourceMetadata_UserLabelsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.userLabels[entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MonitoredResourceMetadata {
    return {
      systemLabels: isSet(object.systemLabels) ? Struct.fromJSON(object.systemLabels) : undefined,
      userLabels: isObject(object.userLabels) ? Object.entries(object.userLabels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {}
    };
  },
  toJSON(message: MonitoredResourceMetadata): unknown {
    const obj: any = {};
    message.systemLabels !== undefined && (obj.systemLabels = message.systemLabels ? Struct.toJSON(message.systemLabels) : undefined);
    obj.userLabels = {};
    if (message.userLabels) {
      Object.entries(message.userLabels).forEach(([k, v]) => {
        obj.userLabels[k] = v;
      });
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MonitoredResourceMetadata>): MonitoredResourceMetadata {
    const message = createBaseMonitoredResourceMetadata();
    message.systemLabels = object.systemLabels !== undefined && object.systemLabels !== null ? Struct.fromPartial(object.systemLabels) : undefined;
    message.userLabels = Object.entries(object.userLabels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromSDK(object: MonitoredResourceMetadataSDKType): MonitoredResourceMetadata {
    return {
      systemLabels: object.system_labels ? Struct.fromSDK(object.system_labels) : undefined,
      userLabels: isObject(object.user_labels) ? Object.entries(object.user_labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {}
    };
  },
  toSDK(message: MonitoredResourceMetadata): MonitoredResourceMetadataSDKType {
    const obj: any = {};
    message.systemLabels !== undefined && (obj.system_labels = message.systemLabels ? Struct.toSDK(message.systemLabels) : undefined);
    obj.user_labels = {};
    if (message.userLabels) {
      Object.entries(message.userLabels).forEach(([k, v]) => {
        obj.user_labels[k] = v;
      });
    }
    return obj;
  },
  fromAmino(object: MonitoredResourceMetadataAmino): MonitoredResourceMetadata {
    return {
      systemLabels: object?.system_labels ? Struct.fromAmino(object.system_labels) : undefined,
      userLabels: isObject(object.user_labels) ? Object.entries(object.user_labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {}
    };
  },
  toAmino(message: MonitoredResourceMetadata): MonitoredResourceMetadataAmino {
    const obj: any = {};
    obj.system_labels = message.systemLabels ? Struct.toAmino(message.systemLabels) : undefined;
    obj.user_labels = {};
    if (message.userLabels) {
      Object.entries(message.userLabels).forEach(([k, v]) => {
        obj.user_labels[k] = v;
      });
    }
    return obj;
  },
  fromAminoMsg(object: MonitoredResourceMetadataAminoMsg): MonitoredResourceMetadata {
    return MonitoredResourceMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: MonitoredResourceMetadataProtoMsg): MonitoredResourceMetadata {
    return MonitoredResourceMetadata.decode(message.value);
  },
  toProto(message: MonitoredResourceMetadata): Uint8Array {
    return MonitoredResourceMetadata.encode(message).finish();
  },
  toProtoMsg(message: MonitoredResourceMetadata): MonitoredResourceMetadataProtoMsg {
    return {
      typeUrl: "/google.api.MonitoredResourceMetadata",
      value: MonitoredResourceMetadata.encode(message).finish()
    };
  }
};