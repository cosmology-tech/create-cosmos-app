import { Any, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { toUtf8, fromUtf8 } from "@cosmjs/encoding";
import { ComputedRef } from "vue";
export const protobufPackage = "cosmwasm.wasm.v1";
/** AccessType permission types */
export enum AccessType {
  /** ACCESS_TYPE_UNSPECIFIED - AccessTypeUnspecified placeholder for empty value */
  ACCESS_TYPE_UNSPECIFIED = 0,
  /** ACCESS_TYPE_NOBODY - AccessTypeNobody forbidden */
  ACCESS_TYPE_NOBODY = 1,
  /** ACCESS_TYPE_ONLY_ADDRESS - AccessTypeOnlyAddress restricted to an address */
  ACCESS_TYPE_ONLY_ADDRESS = 2,
  /** ACCESS_TYPE_EVERYBODY - AccessTypeEverybody unrestricted */
  ACCESS_TYPE_EVERYBODY = 3,
  UNRECOGNIZED = -1,
}
export const AccessTypeSDKType = AccessType;
export function accessTypeFromJSON(object: any): AccessType {
  switch (object) {
    case 0:
    case "ACCESS_TYPE_UNSPECIFIED":
      return AccessType.ACCESS_TYPE_UNSPECIFIED;
    case 1:
    case "ACCESS_TYPE_NOBODY":
      return AccessType.ACCESS_TYPE_NOBODY;
    case 2:
    case "ACCESS_TYPE_ONLY_ADDRESS":
      return AccessType.ACCESS_TYPE_ONLY_ADDRESS;
    case 3:
    case "ACCESS_TYPE_EVERYBODY":
      return AccessType.ACCESS_TYPE_EVERYBODY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AccessType.UNRECOGNIZED;
  }
}
export function accessTypeToJSON(object: AccessType): string {
  switch (object) {
    case AccessType.ACCESS_TYPE_UNSPECIFIED:
      return "ACCESS_TYPE_UNSPECIFIED";
    case AccessType.ACCESS_TYPE_NOBODY:
      return "ACCESS_TYPE_NOBODY";
    case AccessType.ACCESS_TYPE_ONLY_ADDRESS:
      return "ACCESS_TYPE_ONLY_ADDRESS";
    case AccessType.ACCESS_TYPE_EVERYBODY:
      return "ACCESS_TYPE_EVERYBODY";
    case AccessType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ContractCodeHistoryOperationType actions that caused a code change */
export enum ContractCodeHistoryOperationType {
  /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED - ContractCodeHistoryOperationTypeUnspecified placeholder for empty value */
  CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED = 0,
  /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT - ContractCodeHistoryOperationTypeInit on chain contract instantiation */
  CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT = 1,
  /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE - ContractCodeHistoryOperationTypeMigrate code migration */
  CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE = 2,
  /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS - ContractCodeHistoryOperationTypeGenesis based on genesis data */
  CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS = 3,
  UNRECOGNIZED = -1,
}
export const ContractCodeHistoryOperationTypeSDKType = ContractCodeHistoryOperationType;
export function contractCodeHistoryOperationTypeFromJSON(object: any): ContractCodeHistoryOperationType {
  switch (object) {
    case 0:
    case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED":
      return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED;
    case 1:
    case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT":
      return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT;
    case 2:
    case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE":
      return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE;
    case 3:
    case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS":
      return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ContractCodeHistoryOperationType.UNRECOGNIZED;
  }
}
export function contractCodeHistoryOperationTypeToJSON(object: ContractCodeHistoryOperationType): string {
  switch (object) {
    case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED:
      return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED";
    case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT:
      return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT";
    case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE:
      return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE";
    case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS:
      return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS";
    case ContractCodeHistoryOperationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** AccessTypeParam */
export interface AccessTypeParam {
  value: AccessType;
}
export interface ReactiveAccessTypeParam {
  value: ComputedRef<AccessType>;
}
export interface AccessTypeParamProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.AccessTypeParam";
  value: Uint8Array;
}
/** AccessTypeParam */
export interface AccessTypeParamSDKType {
  value: AccessType;
}
/** AccessConfig access control type. */
export interface AccessConfig {
  permission: AccessType;
  address: string;
}
export interface ReactiveAccessConfig {
  permission: ComputedRef<AccessType>;
  address: ComputedRef<string>;
}
export interface AccessConfigProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.AccessConfig";
  value: Uint8Array;
}
/** AccessConfig access control type. */
export interface AccessConfigSDKType {
  permission: AccessType;
  address: string;
}
/** Params defines the set of wasm parameters. */
export interface Params {
  codeUploadAccess: AccessConfig;
  instantiateDefaultPermission: AccessType;
  maxWasmCodeSize: bigint;
}
export interface ReactiveParams {
  codeUploadAccess: ComputedRef<AccessConfig>;
  instantiateDefaultPermission: ComputedRef<AccessType>;
  maxWasmCodeSize: ComputedRef<bigint>;
}
export interface ParamsProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.Params";
  value: Uint8Array;
}
/** Params defines the set of wasm parameters. */
export interface ParamsSDKType {
  code_upload_access: AccessConfigSDKType;
  instantiate_default_permission: AccessType;
  max_wasm_code_size: bigint;
}
/** CodeInfo is data for the uploaded contract WASM code */
export interface CodeInfo {
  /** CodeHash is the unique identifier created by wasmvm */
  codeHash: Uint8Array;
  /** Creator address who initially stored the code */
  creator: string;
  /** InstantiateConfig access control to apply on contract creation, optional */
  instantiateConfig: AccessConfig;
}
export interface ReactiveCodeInfo {
  codeHash: ComputedRef<Uint8Array>;
  creator: ComputedRef<string>;
  instantiateConfig: ComputedRef<AccessConfig>;
}
export interface CodeInfoProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.CodeInfo";
  value: Uint8Array;
}
/** CodeInfo is data for the uploaded contract WASM code */
export interface CodeInfoSDKType {
  code_hash: Uint8Array;
  creator: string;
  instantiate_config: AccessConfigSDKType;
}
/** ContractInfo stores a WASM contract instance */
export interface ContractInfo {
  /** CodeID is the reference to the stored Wasm code */
  codeId: bigint;
  /** Creator address who initially instantiated the contract */
  creator: string;
  /** Admin is an optional address that can execute migrations */
  admin: string;
  /** Label is optional metadata to be stored with a contract instance. */
  label: string;
  /**
   * Created Tx position when the contract was instantiated.
   * This data should kept internal and not be exposed via query results. Just
   * use for sorting
   */
  created?: AbsoluteTxPosition;
  ibcPortId: string;
  /**
   * Extension is an extension point to store custom metadata within the
   * persistence model.
   */
  extension?: Any;
}
export interface ReactiveContractInfo {
  codeId: ComputedRef<bigint>;
  creator: ComputedRef<string>;
  admin: ComputedRef<string>;
  label: ComputedRef<string>;
  created?: ComputedRef<AbsoluteTxPosition>;
  ibcPortId: ComputedRef<string>;
  extension?: ComputedRef<Any>;
}
export interface ContractInfoProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.ContractInfo";
  value: Uint8Array;
}
/** ContractInfo stores a WASM contract instance */
export interface ContractInfoSDKType {
  code_id: bigint;
  creator: string;
  admin: string;
  label: string;
  created?: AbsoluteTxPositionSDKType;
  ibc_port_id: string;
  extension?: AnySDKType;
}
/** ContractCodeHistoryEntry metadata to a contract. */
export interface ContractCodeHistoryEntry {
  operation: ContractCodeHistoryOperationType;
  /** CodeID is the reference to the stored WASM code */
  codeId: bigint;
  /** Updated Tx position when the operation was executed. */
  updated?: AbsoluteTxPosition;
  msg: Uint8Array;
}
export interface ReactiveContractCodeHistoryEntry {
  operation: ComputedRef<ContractCodeHistoryOperationType>;
  codeId: ComputedRef<bigint>;
  updated?: ComputedRef<AbsoluteTxPosition>;
  msg: ComputedRef<Uint8Array>;
}
export interface ContractCodeHistoryEntryProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.ContractCodeHistoryEntry";
  value: Uint8Array;
}
/** ContractCodeHistoryEntry metadata to a contract. */
export interface ContractCodeHistoryEntrySDKType {
  operation: ContractCodeHistoryOperationType;
  code_id: bigint;
  updated?: AbsoluteTxPositionSDKType;
  msg: Uint8Array;
}
/**
 * AbsoluteTxPosition is a unique transaction position that allows for global
 * ordering of transactions.
 */
export interface AbsoluteTxPosition {
  /** BlockHeight is the block the contract was created at */
  blockHeight: bigint;
  /**
   * TxIndex is a monotonic counter within the block (actual transaction index,
   * or gas consumed)
   */
  txIndex: bigint;
}
export interface ReactiveAbsoluteTxPosition {
  blockHeight: ComputedRef<bigint>;
  txIndex: ComputedRef<bigint>;
}
export interface AbsoluteTxPositionProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.AbsoluteTxPosition";
  value: Uint8Array;
}
/**
 * AbsoluteTxPosition is a unique transaction position that allows for global
 * ordering of transactions.
 */
export interface AbsoluteTxPositionSDKType {
  block_height: bigint;
  tx_index: bigint;
}
/** Model is a struct that holds a KV pair */
export interface Model {
  /** hex-encode key to read it better (this is often ascii) */
  key: Uint8Array;
  /** base64-encode raw value */
  value: Uint8Array;
}
export interface ReactiveModel {
  key: ComputedRef<Uint8Array>;
  value: ComputedRef<Uint8Array>;
}
export interface ModelProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.Model";
  value: Uint8Array;
}
/** Model is a struct that holds a KV pair */
export interface ModelSDKType {
  key: Uint8Array;
  value: Uint8Array;
}
function createBaseAccessTypeParam(): AccessTypeParam {
  return {
    value: 0
  };
}
export const AccessTypeParam = {
  typeUrl: "/cosmwasm.wasm.v1.AccessTypeParam",
  encode(message: AccessTypeParam, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.value !== 0) {
      writer.uint32(8).int32(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccessTypeParam {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessTypeParam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccessTypeParam {
    return {
      value: isSet(object.value) ? accessTypeFromJSON(object.value) : -1
    };
  },
  toJSON(message: AccessTypeParam): JsonSafe<AccessTypeParam> {
    const obj: any = {};
    message.value !== undefined && (obj.value = accessTypeToJSON(message.value));
    return obj;
  },
  fromPartial(object: DeepPartial<AccessTypeParam>): AccessTypeParam {
    const message = createBaseAccessTypeParam();
    message.value = object.value ?? 0;
    return message;
  },
  fromSDK(object: AccessTypeParamSDKType): AccessTypeParam {
    return {
      value: isSet(object.value) ? accessTypeFromJSON(object.value) : -1
    };
  },
  fromSDKJSON(object: any): AccessTypeParamSDKType {
    return {
      value: isSet(object.value) ? accessTypeFromJSON(object.value) : -1
    };
  },
  toSDK(message: AccessTypeParam): AccessTypeParamSDKType {
    const obj: any = {};
    message.value !== undefined && (obj.value = accessTypeToJSON(message.value));
    return obj;
  },
  fromAmino(object: AccessTypeParamAmino): AccessTypeParam {
    const message = createBaseAccessTypeParam();
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: AccessTypeParam): AccessTypeParamAmino {
    const obj: any = {};
    obj.value = message.value === 0 ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: AccessTypeParamAminoMsg): AccessTypeParam {
    return AccessTypeParam.fromAmino(object.value);
  },
  toAminoMsg(message: AccessTypeParam): AccessTypeParamAminoMsg {
    return {
      type: "wasm/AccessTypeParam",
      value: AccessTypeParam.toAmino(message)
    };
  },
  fromProtoMsg(message: AccessTypeParamProtoMsg): AccessTypeParam {
    return AccessTypeParam.decode(message.value);
  },
  toProto(message: AccessTypeParam): Uint8Array {
    return AccessTypeParam.encode(message).finish();
  },
  toProtoMsg(message: AccessTypeParam): AccessTypeParamProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.AccessTypeParam",
      value: AccessTypeParam.encode(message).finish()
    };
  }
};
function createBaseAccessConfig(): AccessConfig {
  return {
    permission: 0,
    address: ""
  };
}
export const AccessConfig = {
  typeUrl: "/cosmwasm.wasm.v1.AccessConfig",
  encode(message: AccessConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.permission !== 0) {
      writer.uint32(8).int32(message.permission);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccessConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.permission = (reader.int32() as any);
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccessConfig {
    return {
      permission: isSet(object.permission) ? accessTypeFromJSON(object.permission) : -1,
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: AccessConfig): JsonSafe<AccessConfig> {
    const obj: any = {};
    message.permission !== undefined && (obj.permission = accessTypeToJSON(message.permission));
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: DeepPartial<AccessConfig>): AccessConfig {
    const message = createBaseAccessConfig();
    message.permission = object.permission ?? 0;
    message.address = object.address ?? "";
    return message;
  },
  fromSDK(object: AccessConfigSDKType): AccessConfig {
    return {
      permission: isSet(object.permission) ? accessTypeFromJSON(object.permission) : -1,
      address: object?.address
    };
  },
  fromSDKJSON(object: any): AccessConfigSDKType {
    return {
      permission: isSet(object.permission) ? accessTypeFromJSON(object.permission) : -1,
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toSDK(message: AccessConfig): AccessConfigSDKType {
    const obj: any = {};
    message.permission !== undefined && (obj.permission = accessTypeToJSON(message.permission));
    obj.address = message.address;
    return obj;
  },
  fromAmino(object: AccessConfigAmino): AccessConfig {
    const message = createBaseAccessConfig();
    if (object.permission !== undefined && object.permission !== null) {
      message.permission = object.permission;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: AccessConfig): AccessConfigAmino {
    const obj: any = {};
    obj.permission = message.permission === 0 ? undefined : message.permission;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: AccessConfigAminoMsg): AccessConfig {
    return AccessConfig.fromAmino(object.value);
  },
  toAminoMsg(message: AccessConfig): AccessConfigAminoMsg {
    return {
      type: "wasm/AccessConfig",
      value: AccessConfig.toAmino(message)
    };
  },
  fromProtoMsg(message: AccessConfigProtoMsg): AccessConfig {
    return AccessConfig.decode(message.value);
  },
  toProto(message: AccessConfig): Uint8Array {
    return AccessConfig.encode(message).finish();
  },
  toProtoMsg(message: AccessConfig): AccessConfigProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.AccessConfig",
      value: AccessConfig.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    codeUploadAccess: AccessConfig.fromPartial({}),
    instantiateDefaultPermission: 0,
    maxWasmCodeSize: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/cosmwasm.wasm.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeUploadAccess !== undefined) {
      AccessConfig.encode(message.codeUploadAccess, writer.uint32(10).fork()).ldelim();
    }
    if (message.instantiateDefaultPermission !== 0) {
      writer.uint32(16).int32(message.instantiateDefaultPermission);
    }
    if (message.maxWasmCodeSize !== BigInt(0)) {
      writer.uint32(24).uint64(message.maxWasmCodeSize);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeUploadAccess = AccessConfig.decode(reader, reader.uint32());
          break;
        case 2:
          message.instantiateDefaultPermission = (reader.int32() as any);
          break;
        case 3:
          message.maxWasmCodeSize = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      codeUploadAccess: isSet(object.codeUploadAccess) ? AccessConfig.fromJSON(object.codeUploadAccess) : undefined,
      instantiateDefaultPermission: isSet(object.instantiateDefaultPermission) ? accessTypeFromJSON(object.instantiateDefaultPermission) : -1,
      maxWasmCodeSize: isSet(object.maxWasmCodeSize) ? BigInt(object.maxWasmCodeSize.toString()) : BigInt(0)
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.codeUploadAccess !== undefined && (obj.codeUploadAccess = message.codeUploadAccess ? AccessConfig.toJSON(message.codeUploadAccess) : undefined);
    message.instantiateDefaultPermission !== undefined && (obj.instantiateDefaultPermission = accessTypeToJSON(message.instantiateDefaultPermission));
    message.maxWasmCodeSize !== undefined && (obj.maxWasmCodeSize = (message.maxWasmCodeSize || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.codeUploadAccess = object.codeUploadAccess !== undefined && object.codeUploadAccess !== null ? AccessConfig.fromPartial(object.codeUploadAccess) : undefined;
    message.instantiateDefaultPermission = object.instantiateDefaultPermission ?? 0;
    message.maxWasmCodeSize = object.maxWasmCodeSize !== undefined && object.maxWasmCodeSize !== null ? BigInt(object.maxWasmCodeSize.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      codeUploadAccess: object.code_upload_access ? AccessConfig.fromSDK(object.code_upload_access) : undefined,
      instantiateDefaultPermission: isSet(object.instantiate_default_permission) ? accessTypeFromJSON(object.instantiate_default_permission) : -1,
      maxWasmCodeSize: object?.max_wasm_code_size
    };
  },
  fromSDKJSON(object: any): ParamsSDKType {
    return {
      code_upload_access: isSet(object.code_upload_access) ? AccessConfig.fromSDKJSON(object.code_upload_access) : undefined,
      instantiate_default_permission: isSet(object.instantiate_default_permission) ? accessTypeFromJSON(object.instantiate_default_permission) : -1,
      max_wasm_code_size: isSet(object.max_wasm_code_size) ? BigInt(object.max_wasm_code_size.toString()) : BigInt(0)
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    message.codeUploadAccess !== undefined && (obj.code_upload_access = message.codeUploadAccess ? AccessConfig.toSDK(message.codeUploadAccess) : undefined);
    message.instantiateDefaultPermission !== undefined && (obj.instantiate_default_permission = accessTypeToJSON(message.instantiateDefaultPermission));
    obj.max_wasm_code_size = message.maxWasmCodeSize;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.code_upload_access !== undefined && object.code_upload_access !== null) {
      message.codeUploadAccess = AccessConfig.fromAmino(object.code_upload_access);
    }
    if (object.instantiate_default_permission !== undefined && object.instantiate_default_permission !== null) {
      message.instantiateDefaultPermission = object.instantiate_default_permission;
    }
    if (object.max_wasm_code_size !== undefined && object.max_wasm_code_size !== null) {
      message.maxWasmCodeSize = BigInt(object.max_wasm_code_size);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.code_upload_access = message.codeUploadAccess ? AccessConfig.toAmino(message.codeUploadAccess) : undefined;
    obj.instantiate_default_permission = message.instantiateDefaultPermission === 0 ? undefined : message.instantiateDefaultPermission;
    obj.max_wasm_code_size = message.maxWasmCodeSize !== BigInt(0) ? message.maxWasmCodeSize?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "wasm/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseCodeInfo(): CodeInfo {
  return {
    codeHash: new Uint8Array(),
    creator: "",
    instantiateConfig: AccessConfig.fromPartial({})
  };
}
export const CodeInfo = {
  typeUrl: "/cosmwasm.wasm.v1.CodeInfo",
  encode(message: CodeInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeHash.length !== 0) {
      writer.uint32(10).bytes(message.codeHash);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.instantiateConfig !== undefined) {
      AccessConfig.encode(message.instantiateConfig, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CodeInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeHash = reader.bytes();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 5:
          message.instantiateConfig = AccessConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CodeInfo {
    return {
      codeHash: isSet(object.codeHash) ? bytesFromBase64(object.codeHash) : new Uint8Array(),
      creator: isSet(object.creator) ? String(object.creator) : "",
      instantiateConfig: isSet(object.instantiateConfig) ? AccessConfig.fromJSON(object.instantiateConfig) : undefined
    };
  },
  toJSON(message: CodeInfo): JsonSafe<CodeInfo> {
    const obj: any = {};
    message.codeHash !== undefined && (obj.codeHash = base64FromBytes(message.codeHash !== undefined ? message.codeHash : new Uint8Array()));
    message.creator !== undefined && (obj.creator = message.creator);
    message.instantiateConfig !== undefined && (obj.instantiateConfig = message.instantiateConfig ? AccessConfig.toJSON(message.instantiateConfig) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<CodeInfo>): CodeInfo {
    const message = createBaseCodeInfo();
    message.codeHash = object.codeHash ?? new Uint8Array();
    message.creator = object.creator ?? "";
    message.instantiateConfig = object.instantiateConfig !== undefined && object.instantiateConfig !== null ? AccessConfig.fromPartial(object.instantiateConfig) : undefined;
    return message;
  },
  fromSDK(object: CodeInfoSDKType): CodeInfo {
    return {
      codeHash: object?.code_hash,
      creator: object?.creator,
      instantiateConfig: object.instantiate_config ? AccessConfig.fromSDK(object.instantiate_config) : undefined
    };
  },
  fromSDKJSON(object: any): CodeInfoSDKType {
    return {
      code_hash: isSet(object.code_hash) ? bytesFromBase64(object.code_hash) : new Uint8Array(),
      creator: isSet(object.creator) ? String(object.creator) : "",
      instantiate_config: isSet(object.instantiate_config) ? AccessConfig.fromSDKJSON(object.instantiate_config) : undefined
    };
  },
  toSDK(message: CodeInfo): CodeInfoSDKType {
    const obj: any = {};
    obj.code_hash = message.codeHash;
    obj.creator = message.creator;
    message.instantiateConfig !== undefined && (obj.instantiate_config = message.instantiateConfig ? AccessConfig.toSDK(message.instantiateConfig) : undefined);
    return obj;
  },
  fromAmino(object: CodeInfoAmino): CodeInfo {
    const message = createBaseCodeInfo();
    if (object.code_hash !== undefined && object.code_hash !== null) {
      message.codeHash = bytesFromBase64(object.code_hash);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.instantiate_config !== undefined && object.instantiate_config !== null) {
      message.instantiateConfig = AccessConfig.fromAmino(object.instantiate_config);
    }
    return message;
  },
  toAmino(message: CodeInfo): CodeInfoAmino {
    const obj: any = {};
    obj.code_hash = message.codeHash ? base64FromBytes(message.codeHash) : undefined;
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.instantiate_config = message.instantiateConfig ? AccessConfig.toAmino(message.instantiateConfig) : undefined;
    return obj;
  },
  fromAminoMsg(object: CodeInfoAminoMsg): CodeInfo {
    return CodeInfo.fromAmino(object.value);
  },
  toAminoMsg(message: CodeInfo): CodeInfoAminoMsg {
    return {
      type: "wasm/CodeInfo",
      value: CodeInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: CodeInfoProtoMsg): CodeInfo {
    return CodeInfo.decode(message.value);
  },
  toProto(message: CodeInfo): Uint8Array {
    return CodeInfo.encode(message).finish();
  },
  toProtoMsg(message: CodeInfo): CodeInfoProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.CodeInfo",
      value: CodeInfo.encode(message).finish()
    };
  }
};
function createBaseContractInfo(): ContractInfo {
  return {
    codeId: BigInt(0),
    creator: "",
    admin: "",
    label: "",
    created: undefined,
    ibcPortId: "",
    extension: undefined
  };
}
export const ContractInfo = {
  typeUrl: "/cosmwasm.wasm.v1.ContractInfo",
  encode(message: ContractInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.admin !== "") {
      writer.uint32(26).string(message.admin);
    }
    if (message.label !== "") {
      writer.uint32(34).string(message.label);
    }
    if (message.created !== undefined) {
      AbsoluteTxPosition.encode(message.created, writer.uint32(42).fork()).ldelim();
    }
    if (message.ibcPortId !== "") {
      writer.uint32(50).string(message.ibcPortId);
    }
    if (message.extension !== undefined) {
      Any.encode(message.extension, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ContractInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.admin = reader.string();
          break;
        case 4:
          message.label = reader.string();
          break;
        case 5:
          message.created = AbsoluteTxPosition.decode(reader, reader.uint32());
          break;
        case 6:
          message.ibcPortId = reader.string();
          break;
        case 7:
          message.extension = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ContractInfo {
    return {
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
      creator: isSet(object.creator) ? String(object.creator) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      label: isSet(object.label) ? String(object.label) : "",
      created: isSet(object.created) ? AbsoluteTxPosition.fromJSON(object.created) : undefined,
      ibcPortId: isSet(object.ibcPortId) ? String(object.ibcPortId) : "",
      extension: isSet(object.extension) ? Any.fromJSON(object.extension) : undefined
    };
  },
  toJSON(message: ContractInfo): JsonSafe<ContractInfo> {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
    message.creator !== undefined && (obj.creator = message.creator);
    message.admin !== undefined && (obj.admin = message.admin);
    message.label !== undefined && (obj.label = message.label);
    message.created !== undefined && (obj.created = message.created ? AbsoluteTxPosition.toJSON(message.created) : undefined);
    message.ibcPortId !== undefined && (obj.ibcPortId = message.ibcPortId);
    message.extension !== undefined && (obj.extension = message.extension ? Any.toJSON(message.extension) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ContractInfo>): ContractInfo {
    const message = createBaseContractInfo();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.creator = object.creator ?? "";
    message.admin = object.admin ?? "";
    message.label = object.label ?? "";
    message.created = object.created !== undefined && object.created !== null ? AbsoluteTxPosition.fromPartial(object.created) : undefined;
    message.ibcPortId = object.ibcPortId ?? "";
    message.extension = object.extension !== undefined && object.extension !== null ? Any.fromPartial(object.extension) : undefined;
    return message;
  },
  fromSDK(object: ContractInfoSDKType): ContractInfo {
    return {
      codeId: object?.code_id,
      creator: object?.creator,
      admin: object?.admin,
      label: object?.label,
      created: object.created ? AbsoluteTxPosition.fromSDK(object.created) : undefined,
      ibcPortId: object?.ibc_port_id,
      extension: object.extension ? Any.fromSDK(object.extension) : undefined
    };
  },
  fromSDKJSON(object: any): ContractInfoSDKType {
    return {
      code_id: isSet(object.code_id) ? BigInt(object.code_id.toString()) : BigInt(0),
      creator: isSet(object.creator) ? String(object.creator) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      label: isSet(object.label) ? String(object.label) : "",
      created: isSet(object.created) ? AbsoluteTxPosition.fromSDKJSON(object.created) : undefined,
      ibc_port_id: isSet(object.ibc_port_id) ? String(object.ibc_port_id) : "",
      extension: isSet(object.extension) ? Any.fromSDKJSON(object.extension) : undefined
    };
  },
  toSDK(message: ContractInfo): ContractInfoSDKType {
    const obj: any = {};
    obj.code_id = message.codeId;
    obj.creator = message.creator;
    obj.admin = message.admin;
    obj.label = message.label;
    message.created !== undefined && (obj.created = message.created ? AbsoluteTxPosition.toSDK(message.created) : undefined);
    obj.ibc_port_id = message.ibcPortId;
    message.extension !== undefined && (obj.extension = message.extension ? Any.toSDK(message.extension) : undefined);
    return obj;
  },
  fromAmino(object: ContractInfoAmino): ContractInfo {
    const message = createBaseContractInfo();
    if (object.code_id !== undefined && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = object.label;
    }
    if (object.created !== undefined && object.created !== null) {
      message.created = AbsoluteTxPosition.fromAmino(object.created);
    }
    if (object.ibc_port_id !== undefined && object.ibc_port_id !== null) {
      message.ibcPortId = object.ibc_port_id;
    }
    if (object.extension !== undefined && object.extension !== null) {
      message.extension = Any.fromAmino(object.extension);
    }
    return message;
  },
  toAmino(message: ContractInfo): ContractInfoAmino {
    const obj: any = {};
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId?.toString() : undefined;
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.label = message.label === "" ? undefined : message.label;
    obj.created = message.created ? AbsoluteTxPosition.toAmino(message.created) : undefined;
    obj.ibc_port_id = message.ibcPortId === "" ? undefined : message.ibcPortId;
    obj.extension = message.extension ? Any.toAmino(message.extension) : undefined;
    return obj;
  },
  fromAminoMsg(object: ContractInfoAminoMsg): ContractInfo {
    return ContractInfo.fromAmino(object.value);
  },
  toAminoMsg(message: ContractInfo): ContractInfoAminoMsg {
    return {
      type: "wasm/ContractInfo",
      value: ContractInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: ContractInfoProtoMsg): ContractInfo {
    return ContractInfo.decode(message.value);
  },
  toProto(message: ContractInfo): Uint8Array {
    return ContractInfo.encode(message).finish();
  },
  toProtoMsg(message: ContractInfo): ContractInfoProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.ContractInfo",
      value: ContractInfo.encode(message).finish()
    };
  }
};
function createBaseContractCodeHistoryEntry(): ContractCodeHistoryEntry {
  return {
    operation: 0,
    codeId: BigInt(0),
    updated: undefined,
    msg: new Uint8Array()
  };
}
export const ContractCodeHistoryEntry = {
  typeUrl: "/cosmwasm.wasm.v1.ContractCodeHistoryEntry",
  encode(message: ContractCodeHistoryEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operation !== 0) {
      writer.uint32(8).int32(message.operation);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(16).uint64(message.codeId);
    }
    if (message.updated !== undefined) {
      AbsoluteTxPosition.encode(message.updated, writer.uint32(26).fork()).ldelim();
    }
    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ContractCodeHistoryEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractCodeHistoryEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operation = (reader.int32() as any);
          break;
        case 2:
          message.codeId = reader.uint64();
          break;
        case 3:
          message.updated = AbsoluteTxPosition.decode(reader, reader.uint32());
          break;
        case 4:
          message.msg = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ContractCodeHistoryEntry {
    return {
      operation: isSet(object.operation) ? contractCodeHistoryOperationTypeFromJSON(object.operation) : -1,
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
      updated: isSet(object.updated) ? AbsoluteTxPosition.fromJSON(object.updated) : undefined,
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array()
    };
  },
  toJSON(message: ContractCodeHistoryEntry): JsonSafe<ContractCodeHistoryEntry> {
    const obj: any = {};
    message.operation !== undefined && (obj.operation = contractCodeHistoryOperationTypeToJSON(message.operation));
    message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
    message.updated !== undefined && (obj.updated = message.updated ? AbsoluteTxPosition.toJSON(message.updated) : undefined);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<ContractCodeHistoryEntry>): ContractCodeHistoryEntry {
    const message = createBaseContractCodeHistoryEntry();
    message.operation = object.operation ?? 0;
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.updated = object.updated !== undefined && object.updated !== null ? AbsoluteTxPosition.fromPartial(object.updated) : undefined;
    message.msg = object.msg ?? new Uint8Array();
    return message;
  },
  fromSDK(object: ContractCodeHistoryEntrySDKType): ContractCodeHistoryEntry {
    return {
      operation: isSet(object.operation) ? contractCodeHistoryOperationTypeFromJSON(object.operation) : -1,
      codeId: object?.code_id,
      updated: object.updated ? AbsoluteTxPosition.fromSDK(object.updated) : undefined,
      msg: object?.msg
    };
  },
  fromSDKJSON(object: any): ContractCodeHistoryEntrySDKType {
    return {
      operation: isSet(object.operation) ? contractCodeHistoryOperationTypeFromJSON(object.operation) : -1,
      code_id: isSet(object.code_id) ? BigInt(object.code_id.toString()) : BigInt(0),
      updated: isSet(object.updated) ? AbsoluteTxPosition.fromSDKJSON(object.updated) : undefined,
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array()
    };
  },
  toSDK(message: ContractCodeHistoryEntry): ContractCodeHistoryEntrySDKType {
    const obj: any = {};
    message.operation !== undefined && (obj.operation = contractCodeHistoryOperationTypeToJSON(message.operation));
    obj.code_id = message.codeId;
    message.updated !== undefined && (obj.updated = message.updated ? AbsoluteTxPosition.toSDK(message.updated) : undefined);
    obj.msg = message.msg;
    return obj;
  },
  fromAmino(object: ContractCodeHistoryEntryAmino): ContractCodeHistoryEntry {
    const message = createBaseContractCodeHistoryEntry();
    if (object.operation !== undefined && object.operation !== null) {
      message.operation = object.operation;
    }
    if (object.code_id !== undefined && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.updated !== undefined && object.updated !== null) {
      message.updated = AbsoluteTxPosition.fromAmino(object.updated);
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = toUtf8(JSON.stringify(object.msg));
    }
    return message;
  },
  toAmino(message: ContractCodeHistoryEntry): ContractCodeHistoryEntryAmino {
    const obj: any = {};
    obj.operation = message.operation === 0 ? undefined : message.operation;
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId?.toString() : undefined;
    obj.updated = message.updated ? AbsoluteTxPosition.toAmino(message.updated) : undefined;
    obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : undefined;
    return obj;
  },
  fromAminoMsg(object: ContractCodeHistoryEntryAminoMsg): ContractCodeHistoryEntry {
    return ContractCodeHistoryEntry.fromAmino(object.value);
  },
  toAminoMsg(message: ContractCodeHistoryEntry): ContractCodeHistoryEntryAminoMsg {
    return {
      type: "wasm/ContractCodeHistoryEntry",
      value: ContractCodeHistoryEntry.toAmino(message)
    };
  },
  fromProtoMsg(message: ContractCodeHistoryEntryProtoMsg): ContractCodeHistoryEntry {
    return ContractCodeHistoryEntry.decode(message.value);
  },
  toProto(message: ContractCodeHistoryEntry): Uint8Array {
    return ContractCodeHistoryEntry.encode(message).finish();
  },
  toProtoMsg(message: ContractCodeHistoryEntry): ContractCodeHistoryEntryProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.ContractCodeHistoryEntry",
      value: ContractCodeHistoryEntry.encode(message).finish()
    };
  }
};
function createBaseAbsoluteTxPosition(): AbsoluteTxPosition {
  return {
    blockHeight: BigInt(0),
    txIndex: BigInt(0)
  };
}
export const AbsoluteTxPosition = {
  typeUrl: "/cosmwasm.wasm.v1.AbsoluteTxPosition",
  encode(message: AbsoluteTxPosition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).uint64(message.blockHeight);
    }
    if (message.txIndex !== BigInt(0)) {
      writer.uint32(16).uint64(message.txIndex);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AbsoluteTxPosition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAbsoluteTxPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.uint64();
          break;
        case 2:
          message.txIndex = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AbsoluteTxPosition {
    return {
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      txIndex: isSet(object.txIndex) ? BigInt(object.txIndex.toString()) : BigInt(0)
    };
  },
  toJSON(message: AbsoluteTxPosition): JsonSafe<AbsoluteTxPosition> {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
    message.txIndex !== undefined && (obj.txIndex = (message.txIndex || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<AbsoluteTxPosition>): AbsoluteTxPosition {
    const message = createBaseAbsoluteTxPosition();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.txIndex = object.txIndex !== undefined && object.txIndex !== null ? BigInt(object.txIndex.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: AbsoluteTxPositionSDKType): AbsoluteTxPosition {
    return {
      blockHeight: object?.block_height,
      txIndex: object?.tx_index
    };
  },
  fromSDKJSON(object: any): AbsoluteTxPositionSDKType {
    return {
      block_height: isSet(object.block_height) ? BigInt(object.block_height.toString()) : BigInt(0),
      tx_index: isSet(object.tx_index) ? BigInt(object.tx_index.toString()) : BigInt(0)
    };
  },
  toSDK(message: AbsoluteTxPosition): AbsoluteTxPositionSDKType {
    const obj: any = {};
    obj.block_height = message.blockHeight;
    obj.tx_index = message.txIndex;
    return obj;
  },
  fromAmino(object: AbsoluteTxPositionAmino): AbsoluteTxPosition {
    const message = createBaseAbsoluteTxPosition();
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.tx_index !== undefined && object.tx_index !== null) {
      message.txIndex = BigInt(object.tx_index);
    }
    return message;
  },
  toAmino(message: AbsoluteTxPosition): AbsoluteTxPositionAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight !== BigInt(0) ? message.blockHeight?.toString() : undefined;
    obj.tx_index = message.txIndex !== BigInt(0) ? message.txIndex?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: AbsoluteTxPositionAminoMsg): AbsoluteTxPosition {
    return AbsoluteTxPosition.fromAmino(object.value);
  },
  toAminoMsg(message: AbsoluteTxPosition): AbsoluteTxPositionAminoMsg {
    return {
      type: "wasm/AbsoluteTxPosition",
      value: AbsoluteTxPosition.toAmino(message)
    };
  },
  fromProtoMsg(message: AbsoluteTxPositionProtoMsg): AbsoluteTxPosition {
    return AbsoluteTxPosition.decode(message.value);
  },
  toProto(message: AbsoluteTxPosition): Uint8Array {
    return AbsoluteTxPosition.encode(message).finish();
  },
  toProtoMsg(message: AbsoluteTxPosition): AbsoluteTxPositionProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.AbsoluteTxPosition",
      value: AbsoluteTxPosition.encode(message).finish()
    };
  }
};
function createBaseModel(): Model {
  return {
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}
export const Model = {
  typeUrl: "/cosmwasm.wasm.v1.Model",
  encode(message: Model, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Model {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Model {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },
  toJSON(message: Model): JsonSafe<Model> {
    const obj: any = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<Model>): Model {
    const message = createBaseModel();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  },
  fromSDK(object: ModelSDKType): Model {
    return {
      key: object?.key,
      value: object?.value
    };
  },
  fromSDKJSON(object: any): ModelSDKType {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },
  toSDK(message: Model): ModelSDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: ModelAmino): Model {
    const message = createBaseModel();
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },
  toAmino(message: Model): ModelAmino {
    const obj: any = {};
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: ModelAminoMsg): Model {
    return Model.fromAmino(object.value);
  },
  toAminoMsg(message: Model): ModelAminoMsg {
    return {
      type: "wasm/Model",
      value: Model.toAmino(message)
    };
  },
  fromProtoMsg(message: ModelProtoMsg): Model {
    return Model.decode(message.value);
  },
  toProto(message: Model): Uint8Array {
    return Model.encode(message).finish();
  },
  toProtoMsg(message: Model): ModelProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.Model",
      value: Model.encode(message).finish()
    };
  }
};