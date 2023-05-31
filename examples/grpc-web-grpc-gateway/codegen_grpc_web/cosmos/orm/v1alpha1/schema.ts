import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "../../../helpers";
export const protobufPackage = "cosmos.orm.v1alpha1";
/** StorageType */
export enum StorageType {
  /**
   * STORAGE_TYPE_DEFAULT_UNSPECIFIED - STORAGE_TYPE_DEFAULT_UNSPECIFIED indicates the persistent
   * KV-storage where primary key entries are stored in merkle-tree
   * backed commitment storage and indexes and seqs are stored in
   * fast index storage. Note that the Cosmos SDK before store/v2alpha1
   * does not support this.
   */
  STORAGE_TYPE_DEFAULT_UNSPECIFIED = 0,
  /**
   * STORAGE_TYPE_MEMORY - STORAGE_TYPE_MEMORY indicates in-memory storage that will be
   * reloaded every time an app restarts. Tables with this type of storage
   * will by default be ignored when importing and exporting a module's
   * state from JSON.
   */
  STORAGE_TYPE_MEMORY = 1,
  /**
   * STORAGE_TYPE_TRANSIENT - STORAGE_TYPE_TRANSIENT indicates transient storage that is reset
   * at the end of every block. Tables with this type of storage
   * will by default be ignored when importing and exporting a module's
   * state from JSON.
   */
  STORAGE_TYPE_TRANSIENT = 2,
  /**
   * STORAGE_TYPE_INDEX - STORAGE_TYPE_INDEX indicates persistent storage which is not backed
   * by a merkle-tree and won't affect the app hash. Note that the Cosmos SDK
   * before store/v2alpha1 does not support this.
   */
  STORAGE_TYPE_INDEX = 3,
  /**
   * STORAGE_TYPE_COMMITMENT - STORAGE_TYPE_INDEX indicates persistent storage which is backed by
   * a merkle-tree. With this type of storage, both primary and index keys
   * will affect the app hash and this is generally less efficient
   * than using STORAGE_TYPE_DEFAULT_UNSPECIFIED which separates index
   * keys into index storage. Note that modules built with the
   * Cosmos SDK before store/v2alpha1 must specify STORAGE_TYPE_COMMITMENT
   * instead of STORAGE_TYPE_DEFAULT_UNSPECIFIED or STORAGE_TYPE_INDEX
   * because this is the only type of persistent storage available.
   */
  STORAGE_TYPE_COMMITMENT = 4,
  UNRECOGNIZED = -1,
}
export const StorageTypeSDKType = StorageType;
export const StorageTypeAmino = StorageType;
export function storageTypeFromJSON(object: any): StorageType {
  switch (object) {
    case 0:
    case "STORAGE_TYPE_DEFAULT_UNSPECIFIED":
      return StorageType.STORAGE_TYPE_DEFAULT_UNSPECIFIED;
    case 1:
    case "STORAGE_TYPE_MEMORY":
      return StorageType.STORAGE_TYPE_MEMORY;
    case 2:
    case "STORAGE_TYPE_TRANSIENT":
      return StorageType.STORAGE_TYPE_TRANSIENT;
    case 3:
    case "STORAGE_TYPE_INDEX":
      return StorageType.STORAGE_TYPE_INDEX;
    case 4:
    case "STORAGE_TYPE_COMMITMENT":
      return StorageType.STORAGE_TYPE_COMMITMENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StorageType.UNRECOGNIZED;
  }
}
export function storageTypeToJSON(object: StorageType): string {
  switch (object) {
    case StorageType.STORAGE_TYPE_DEFAULT_UNSPECIFIED:
      return "STORAGE_TYPE_DEFAULT_UNSPECIFIED";
    case StorageType.STORAGE_TYPE_MEMORY:
      return "STORAGE_TYPE_MEMORY";
    case StorageType.STORAGE_TYPE_TRANSIENT:
      return "STORAGE_TYPE_TRANSIENT";
    case StorageType.STORAGE_TYPE_INDEX:
      return "STORAGE_TYPE_INDEX";
    case StorageType.STORAGE_TYPE_COMMITMENT:
      return "STORAGE_TYPE_COMMITMENT";
    case StorageType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ModuleSchemaDescriptor describe's a module's ORM schema. */
export interface ModuleSchemaDescriptor {
  schemaFile: ModuleSchemaDescriptor_FileEntry[];
  /**
   * prefix is an optional prefix that precedes all keys in this module's
   * store.
   */
  prefix: Uint8Array;
}
export interface ModuleSchemaDescriptorProtoMsg {
  typeUrl: "/cosmos.orm.v1alpha1.ModuleSchemaDescriptor";
  value: Uint8Array;
}
/** ModuleSchemaDescriptor describe's a module's ORM schema. */
export interface ModuleSchemaDescriptorAmino {
  schema_file: ModuleSchemaDescriptor_FileEntryAmino[];
  /**
   * prefix is an optional prefix that precedes all keys in this module's
   * store.
   */
  prefix: Uint8Array;
}
export interface ModuleSchemaDescriptorAminoMsg {
  type: "cosmos-sdk/ModuleSchemaDescriptor";
  value: ModuleSchemaDescriptorAmino;
}
/** ModuleSchemaDescriptor describe's a module's ORM schema. */
export interface ModuleSchemaDescriptorSDKType {
  schema_file: ModuleSchemaDescriptor_FileEntrySDKType[];
  prefix: Uint8Array;
}
/** FileEntry describes an ORM file used in a module. */
export interface ModuleSchemaDescriptor_FileEntry {
  /**
   * id is a prefix that will be varint encoded and prepended to all the
   * table keys specified in the file's tables.
   */
  id: number;
  /**
   * proto_file_name is the name of a file .proto in that contains
   * table definitions. The .proto file must be in a package that the
   * module has referenced using cosmos.app.v1.ModuleDescriptor.use_package.
   */
  protoFileName: string;
  /**
   * storage_type optionally indicates the type of storage this file's
   * tables should used. If it is left unspecified, the default KV-storage
   * of the app will be used.
   */
  storageType: StorageType;
}
export interface ModuleSchemaDescriptor_FileEntryProtoMsg {
  typeUrl: "/cosmos.orm.v1alpha1.FileEntry";
  value: Uint8Array;
}
/** FileEntry describes an ORM file used in a module. */
export interface ModuleSchemaDescriptor_FileEntryAmino {
  /**
   * id is a prefix that will be varint encoded and prepended to all the
   * table keys specified in the file's tables.
   */
  id: number;
  /**
   * proto_file_name is the name of a file .proto in that contains
   * table definitions. The .proto file must be in a package that the
   * module has referenced using cosmos.app.v1.ModuleDescriptor.use_package.
   */
  proto_file_name: string;
  /**
   * storage_type optionally indicates the type of storage this file's
   * tables should used. If it is left unspecified, the default KV-storage
   * of the app will be used.
   */
  storage_type: StorageType;
}
export interface ModuleSchemaDescriptor_FileEntryAminoMsg {
  type: "cosmos-sdk/FileEntry";
  value: ModuleSchemaDescriptor_FileEntryAmino;
}
/** FileEntry describes an ORM file used in a module. */
export interface ModuleSchemaDescriptor_FileEntrySDKType {
  id: number;
  proto_file_name: string;
  storage_type: StorageType;
}
function createBaseModuleSchemaDescriptor(): ModuleSchemaDescriptor {
  return {
    schemaFile: [],
    prefix: new Uint8Array()
  };
}
export const ModuleSchemaDescriptor = {
  typeUrl: "/cosmos.orm.v1alpha1.ModuleSchemaDescriptor",
  aminoType: "cosmos-sdk/ModuleSchemaDescriptor",
  encode(message: ModuleSchemaDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.schemaFile) {
      ModuleSchemaDescriptor_FileEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.prefix.length !== 0) {
      writer.uint32(18).bytes(message.prefix);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleSchemaDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleSchemaDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schemaFile.push(ModuleSchemaDescriptor_FileEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.prefix = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ModuleSchemaDescriptor {
    return {
      schemaFile: Array.isArray(object?.schemaFile) ? object.schemaFile.map((e: any) => ModuleSchemaDescriptor_FileEntry.fromJSON(e)) : [],
      prefix: isSet(object.prefix) ? bytesFromBase64(object.prefix) : new Uint8Array()
    };
  },
  toJSON(message: ModuleSchemaDescriptor): unknown {
    const obj: any = {};
    if (message.schemaFile) {
      obj.schemaFile = message.schemaFile.map(e => e ? ModuleSchemaDescriptor_FileEntry.toJSON(e) : undefined);
    } else {
      obj.schemaFile = [];
    }
    message.prefix !== undefined && (obj.prefix = base64FromBytes(message.prefix !== undefined ? message.prefix : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<ModuleSchemaDescriptor>): ModuleSchemaDescriptor {
    const message = createBaseModuleSchemaDescriptor();
    message.schemaFile = object.schemaFile?.map(e => ModuleSchemaDescriptor_FileEntry.fromPartial(e)) || [];
    message.prefix = object.prefix ?? new Uint8Array();
    return message;
  },
  fromSDK(object: ModuleSchemaDescriptorSDKType): ModuleSchemaDescriptor {
    return {
      schemaFile: Array.isArray(object?.schema_file) ? object.schema_file.map((e: any) => ModuleSchemaDescriptor_FileEntry.fromSDK(e)) : [],
      prefix: object?.prefix
    };
  },
  toSDK(message: ModuleSchemaDescriptor): ModuleSchemaDescriptorSDKType {
    const obj: any = {};
    if (message.schemaFile) {
      obj.schema_file = message.schemaFile.map(e => e ? ModuleSchemaDescriptor_FileEntry.toSDK(e) : undefined);
    } else {
      obj.schema_file = [];
    }
    obj.prefix = message.prefix;
    return obj;
  },
  fromAmino(object: ModuleSchemaDescriptorAmino): ModuleSchemaDescriptor {
    return {
      schemaFile: Array.isArray(object?.schema_file) ? object.schema_file.map((e: any) => ModuleSchemaDescriptor_FileEntry.fromAmino(e)) : [],
      prefix: object.prefix
    };
  },
  toAmino(message: ModuleSchemaDescriptor): ModuleSchemaDescriptorAmino {
    const obj: any = {};
    if (message.schemaFile) {
      obj.schema_file = message.schemaFile.map(e => e ? ModuleSchemaDescriptor_FileEntry.toAmino(e) : undefined);
    } else {
      obj.schema_file = [];
    }
    obj.prefix = message.prefix;
    return obj;
  },
  fromAminoMsg(object: ModuleSchemaDescriptorAminoMsg): ModuleSchemaDescriptor {
    return ModuleSchemaDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message: ModuleSchemaDescriptor): ModuleSchemaDescriptorAminoMsg {
    return {
      type: "cosmos-sdk/ModuleSchemaDescriptor",
      value: ModuleSchemaDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleSchemaDescriptorProtoMsg): ModuleSchemaDescriptor {
    return ModuleSchemaDescriptor.decode(message.value);
  },
  toProto(message: ModuleSchemaDescriptor): Uint8Array {
    return ModuleSchemaDescriptor.encode(message).finish();
  },
  toProtoMsg(message: ModuleSchemaDescriptor): ModuleSchemaDescriptorProtoMsg {
    return {
      typeUrl: "/cosmos.orm.v1alpha1.ModuleSchemaDescriptor",
      value: ModuleSchemaDescriptor.encode(message).finish()
    };
  }
};
function createBaseModuleSchemaDescriptor_FileEntry(): ModuleSchemaDescriptor_FileEntry {
  return {
    id: 0,
    protoFileName: "",
    storageType: 0
  };
}
export const ModuleSchemaDescriptor_FileEntry = {
  typeUrl: "/cosmos.orm.v1alpha1.FileEntry",
  aminoType: "cosmos-sdk/FileEntry",
  encode(message: ModuleSchemaDescriptor_FileEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.protoFileName !== "") {
      writer.uint32(18).string(message.protoFileName);
    }
    if (message.storageType !== 0) {
      writer.uint32(24).int32(message.storageType);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleSchemaDescriptor_FileEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleSchemaDescriptor_FileEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.protoFileName = reader.string();
          break;
        case 3:
          message.storageType = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ModuleSchemaDescriptor_FileEntry {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      protoFileName: isSet(object.protoFileName) ? String(object.protoFileName) : "",
      storageType: isSet(object.storageType) ? storageTypeFromJSON(object.storageType) : 0
    };
  },
  toJSON(message: ModuleSchemaDescriptor_FileEntry): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.protoFileName !== undefined && (obj.protoFileName = message.protoFileName);
    message.storageType !== undefined && (obj.storageType = storageTypeToJSON(message.storageType));
    return obj;
  },
  fromPartial(object: DeepPartial<ModuleSchemaDescriptor_FileEntry>): ModuleSchemaDescriptor_FileEntry {
    const message = createBaseModuleSchemaDescriptor_FileEntry();
    message.id = object.id ?? 0;
    message.protoFileName = object.protoFileName ?? "";
    message.storageType = object.storageType ?? 0;
    return message;
  },
  fromSDK(object: ModuleSchemaDescriptor_FileEntrySDKType): ModuleSchemaDescriptor_FileEntry {
    return {
      id: object?.id,
      protoFileName: object?.proto_file_name,
      storageType: isSet(object.storage_type) ? storageTypeFromJSON(object.storage_type) : 0
    };
  },
  toSDK(message: ModuleSchemaDescriptor_FileEntry): ModuleSchemaDescriptor_FileEntrySDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.proto_file_name = message.protoFileName;
    message.storageType !== undefined && (obj.storage_type = storageTypeToJSON(message.storageType));
    return obj;
  },
  fromAmino(object: ModuleSchemaDescriptor_FileEntryAmino): ModuleSchemaDescriptor_FileEntry {
    return {
      id: object.id,
      protoFileName: object.proto_file_name,
      storageType: isSet(object.storage_type) ? storageTypeFromJSON(object.storage_type) : 0
    };
  },
  toAmino(message: ModuleSchemaDescriptor_FileEntry): ModuleSchemaDescriptor_FileEntryAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.proto_file_name = message.protoFileName;
    obj.storage_type = message.storageType;
    return obj;
  },
  fromAminoMsg(object: ModuleSchemaDescriptor_FileEntryAminoMsg): ModuleSchemaDescriptor_FileEntry {
    return ModuleSchemaDescriptor_FileEntry.fromAmino(object.value);
  },
  toAminoMsg(message: ModuleSchemaDescriptor_FileEntry): ModuleSchemaDescriptor_FileEntryAminoMsg {
    return {
      type: "cosmos-sdk/FileEntry",
      value: ModuleSchemaDescriptor_FileEntry.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleSchemaDescriptor_FileEntryProtoMsg): ModuleSchemaDescriptor_FileEntry {
    return ModuleSchemaDescriptor_FileEntry.decode(message.value);
  },
  toProto(message: ModuleSchemaDescriptor_FileEntry): Uint8Array {
    return ModuleSchemaDescriptor_FileEntry.encode(message).finish();
  },
  toProtoMsg(message: ModuleSchemaDescriptor_FileEntry): ModuleSchemaDescriptor_FileEntryProtoMsg {
    return {
      typeUrl: "/cosmos.orm.v1alpha1.FileEntry",
      value: ModuleSchemaDescriptor_FileEntry.encode(message).finish()
    };
  }
};