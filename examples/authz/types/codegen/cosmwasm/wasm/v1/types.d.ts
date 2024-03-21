import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { DeepPartial } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** AccessType permission types */
export declare enum AccessType {
    /** ACCESS_TYPE_UNSPECIFIED - AccessTypeUnspecified placeholder for empty value */
    ACCESS_TYPE_UNSPECIFIED = 0,
    /** ACCESS_TYPE_NOBODY - AccessTypeNobody forbidden */
    ACCESS_TYPE_NOBODY = 1,
    /** ACCESS_TYPE_ONLY_ADDRESS - AccessTypeOnlyAddress restricted to an address */
    ACCESS_TYPE_ONLY_ADDRESS = 2,
    /** ACCESS_TYPE_EVERYBODY - AccessTypeEverybody unrestricted */
    ACCESS_TYPE_EVERYBODY = 3,
    UNRECOGNIZED = -1
}
export declare const AccessTypeSDKType: typeof AccessType;
export declare const AccessTypeAmino: typeof AccessType;
export declare function accessTypeFromJSON(object: any): AccessType;
export declare function accessTypeToJSON(object: AccessType): string;
/** ContractCodeHistoryOperationType actions that caused a code change */
export declare enum ContractCodeHistoryOperationType {
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED - ContractCodeHistoryOperationTypeUnspecified placeholder for empty value */
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED = 0,
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT - ContractCodeHistoryOperationTypeInit on chain contract instantiation */
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT = 1,
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE - ContractCodeHistoryOperationTypeMigrate code migration */
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE = 2,
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS - ContractCodeHistoryOperationTypeGenesis based on genesis data */
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS = 3,
    UNRECOGNIZED = -1
}
export declare const ContractCodeHistoryOperationTypeSDKType: typeof ContractCodeHistoryOperationType;
export declare const ContractCodeHistoryOperationTypeAmino: typeof ContractCodeHistoryOperationType;
export declare function contractCodeHistoryOperationTypeFromJSON(object: any): ContractCodeHistoryOperationType;
export declare function contractCodeHistoryOperationTypeToJSON(object: ContractCodeHistoryOperationType): string;
/** AccessTypeParam */
export interface AccessTypeParam {
    value: AccessType;
}
export interface AccessTypeParamProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.AccessTypeParam";
    value: Uint8Array;
}
/** AccessTypeParam */
export interface AccessTypeParamAmino {
    value?: AccessType;
}
export interface AccessTypeParamAminoMsg {
    type: "wasm/AccessTypeParam";
    value: AccessTypeParamAmino;
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
export interface AccessConfigProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.AccessConfig";
    value: Uint8Array;
}
/** AccessConfig access control type. */
export interface AccessConfigAmino {
    permission?: AccessType;
    address?: string;
}
export interface AccessConfigAminoMsg {
    type: "wasm/AccessConfig";
    value: AccessConfigAmino;
}
/** AccessConfig access control type. */
export interface AccessConfigSDKType {
    permission: AccessType;
    address: string;
}
/** Params defines the set of wasm parameters. */
export interface Params {
    codeUploadAccess: AccessConfig | undefined;
    instantiateDefaultPermission: AccessType;
    maxWasmCodeSize: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.Params";
    value: Uint8Array;
}
/** Params defines the set of wasm parameters. */
export interface ParamsAmino {
    code_upload_access?: AccessConfigAmino | undefined;
    instantiate_default_permission?: AccessType;
    max_wasm_code_size?: string;
}
export interface ParamsAminoMsg {
    type: "wasm/Params";
    value: ParamsAmino;
}
/** Params defines the set of wasm parameters. */
export interface ParamsSDKType {
    code_upload_access: AccessConfigSDKType | undefined;
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
    instantiateConfig: AccessConfig | undefined;
}
export interface CodeInfoProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.CodeInfo";
    value: Uint8Array;
}
/** CodeInfo is data for the uploaded contract WASM code */
export interface CodeInfoAmino {
    /** CodeHash is the unique identifier created by wasmvm */
    code_hash?: string;
    /** Creator address who initially stored the code */
    creator?: string;
    /** InstantiateConfig access control to apply on contract creation, optional */
    instantiate_config?: AccessConfigAmino | undefined;
}
export interface CodeInfoAminoMsg {
    type: "wasm/CodeInfo";
    value: CodeInfoAmino;
}
/** CodeInfo is data for the uploaded contract WASM code */
export interface CodeInfoSDKType {
    code_hash: Uint8Array;
    creator: string;
    instantiate_config: AccessConfigSDKType | undefined;
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
    created?: AbsoluteTxPosition | undefined;
    ibcPortId: string;
    /**
     * Extension is an extension point to store custom metadata within the
     * persistence model.
     */
    extension?: Any | undefined;
}
export interface ContractInfoProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.ContractInfo";
    value: Uint8Array;
}
export type ContractInfoEncoded = Omit<ContractInfo, "extension"> & {
    /**
     * Extension is an extension point to store custom metadata within the
     * persistence model.
     */
    extension?: AnyProtoMsg | undefined;
};
/** ContractInfo stores a WASM contract instance */
export interface ContractInfoAmino {
    /** CodeID is the reference to the stored Wasm code */
    code_id?: string;
    /** Creator address who initially instantiated the contract */
    creator?: string;
    /** Admin is an optional address that can execute migrations */
    admin?: string;
    /** Label is optional metadata to be stored with a contract instance. */
    label?: string;
    /**
     * Created Tx position when the contract was instantiated.
     * This data should kept internal and not be exposed via query results. Just
     * use for sorting
     */
    created?: AbsoluteTxPositionAmino | undefined;
    ibc_port_id?: string;
    /**
     * Extension is an extension point to store custom metadata within the
     * persistence model.
     */
    extension?: AnyAmino | undefined;
}
export interface ContractInfoAminoMsg {
    type: "wasm/ContractInfo";
    value: ContractInfoAmino;
}
/** ContractInfo stores a WASM contract instance */
export interface ContractInfoSDKType {
    code_id: bigint;
    creator: string;
    admin: string;
    label: string;
    created?: AbsoluteTxPositionSDKType | undefined;
    ibc_port_id: string;
    extension?: AnySDKType | undefined;
}
/** ContractCodeHistoryEntry metadata to a contract. */
export interface ContractCodeHistoryEntry {
    operation: ContractCodeHistoryOperationType;
    /** CodeID is the reference to the stored WASM code */
    codeId: bigint;
    /** Updated Tx position when the operation was executed. */
    updated?: AbsoluteTxPosition | undefined;
    msg: Uint8Array;
}
export interface ContractCodeHistoryEntryProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.ContractCodeHistoryEntry";
    value: Uint8Array;
}
/** ContractCodeHistoryEntry metadata to a contract. */
export interface ContractCodeHistoryEntryAmino {
    operation?: ContractCodeHistoryOperationType;
    /** CodeID is the reference to the stored WASM code */
    code_id?: string;
    /** Updated Tx position when the operation was executed. */
    updated?: AbsoluteTxPositionAmino | undefined;
    msg?: any;
}
export interface ContractCodeHistoryEntryAminoMsg {
    type: "wasm/ContractCodeHistoryEntry";
    value: ContractCodeHistoryEntryAmino;
}
/** ContractCodeHistoryEntry metadata to a contract. */
export interface ContractCodeHistoryEntrySDKType {
    operation: ContractCodeHistoryOperationType;
    code_id: bigint;
    updated?: AbsoluteTxPositionSDKType | undefined;
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
export interface AbsoluteTxPositionProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.AbsoluteTxPosition";
    value: Uint8Array;
}
/**
 * AbsoluteTxPosition is a unique transaction position that allows for global
 * ordering of transactions.
 */
export interface AbsoluteTxPositionAmino {
    /** BlockHeight is the block the contract was created at */
    block_height?: string;
    /**
     * TxIndex is a monotonic counter within the block (actual transaction index,
     * or gas consumed)
     */
    tx_index?: string;
}
export interface AbsoluteTxPositionAminoMsg {
    type: "wasm/AbsoluteTxPosition";
    value: AbsoluteTxPositionAmino;
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
export interface ModelProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.Model";
    value: Uint8Array;
}
/** Model is a struct that holds a KV pair */
export interface ModelAmino {
    /** hex-encode key to read it better (this is often ascii) */
    key?: string;
    /** base64-encode raw value */
    value?: string;
}
export interface ModelAminoMsg {
    type: "wasm/Model";
    value: ModelAmino;
}
/** Model is a struct that holds a KV pair */
export interface ModelSDKType {
    key: Uint8Array;
    value: Uint8Array;
}
export declare const AccessTypeParam: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AccessTypeParam;
    isSDK(o: any): o is AccessTypeParamSDKType;
    isAmino(o: any): o is AccessTypeParamAmino;
    encode(message: AccessTypeParam, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccessTypeParam;
    fromJSON(object: any): AccessTypeParam;
    toJSON(message: AccessTypeParam): unknown;
    fromPartial(object: DeepPartial<AccessTypeParam>): AccessTypeParam;
    fromSDK(object: AccessTypeParamSDKType): AccessTypeParam;
    toSDK(message: AccessTypeParam): AccessTypeParamSDKType;
    fromAmino(object: AccessTypeParamAmino): AccessTypeParam;
    toAmino(message: AccessTypeParam): AccessTypeParamAmino;
    fromAminoMsg(object: AccessTypeParamAminoMsg): AccessTypeParam;
    toAminoMsg(message: AccessTypeParam): AccessTypeParamAminoMsg;
    fromProtoMsg(message: AccessTypeParamProtoMsg): AccessTypeParam;
    toProto(message: AccessTypeParam): Uint8Array;
    toProtoMsg(message: AccessTypeParam): AccessTypeParamProtoMsg;
};
export declare const AccessConfig: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AccessConfig;
    isSDK(o: any): o is AccessConfigSDKType;
    isAmino(o: any): o is AccessConfigAmino;
    encode(message: AccessConfig, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccessConfig;
    fromJSON(object: any): AccessConfig;
    toJSON(message: AccessConfig): unknown;
    fromPartial(object: DeepPartial<AccessConfig>): AccessConfig;
    fromSDK(object: AccessConfigSDKType): AccessConfig;
    toSDK(message: AccessConfig): AccessConfigSDKType;
    fromAmino(object: AccessConfigAmino): AccessConfig;
    toAmino(message: AccessConfig): AccessConfigAmino;
    fromAminoMsg(object: AccessConfigAminoMsg): AccessConfig;
    toAminoMsg(message: AccessConfig): AccessConfigAminoMsg;
    fromProtoMsg(message: AccessConfigProtoMsg): AccessConfig;
    toProto(message: AccessConfig): Uint8Array;
    toProtoMsg(message: AccessConfig): AccessConfigProtoMsg;
};
export declare const Params: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Params;
    isSDK(o: any): o is ParamsSDKType;
    isAmino(o: any): o is ParamsAmino;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
    fromSDK(object: ParamsSDKType): Params;
    toSDK(message: Params): ParamsSDKType;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    toAminoMsg(message: Params): ParamsAminoMsg;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const CodeInfo: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is CodeInfo;
    isSDK(o: any): o is CodeInfoSDKType;
    isAmino(o: any): o is CodeInfoAmino;
    encode(message: CodeInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CodeInfo;
    fromJSON(object: any): CodeInfo;
    toJSON(message: CodeInfo): unknown;
    fromPartial(object: DeepPartial<CodeInfo>): CodeInfo;
    fromSDK(object: CodeInfoSDKType): CodeInfo;
    toSDK(message: CodeInfo): CodeInfoSDKType;
    fromAmino(object: CodeInfoAmino): CodeInfo;
    toAmino(message: CodeInfo): CodeInfoAmino;
    fromAminoMsg(object: CodeInfoAminoMsg): CodeInfo;
    toAminoMsg(message: CodeInfo): CodeInfoAminoMsg;
    fromProtoMsg(message: CodeInfoProtoMsg): CodeInfo;
    toProto(message: CodeInfo): Uint8Array;
    toProtoMsg(message: CodeInfo): CodeInfoProtoMsg;
};
export declare const ContractInfo: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ContractInfo;
    isSDK(o: any): o is ContractInfoSDKType;
    isAmino(o: any): o is ContractInfoAmino;
    encode(message: ContractInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ContractInfo;
    fromJSON(object: any): ContractInfo;
    toJSON(message: ContractInfo): unknown;
    fromPartial(object: DeepPartial<ContractInfo>): ContractInfo;
    fromSDK(object: ContractInfoSDKType): ContractInfo;
    toSDK(message: ContractInfo): ContractInfoSDKType;
    fromAmino(object: ContractInfoAmino): ContractInfo;
    toAmino(message: ContractInfo): ContractInfoAmino;
    fromAminoMsg(object: ContractInfoAminoMsg): ContractInfo;
    toAminoMsg(message: ContractInfo): ContractInfoAminoMsg;
    fromProtoMsg(message: ContractInfoProtoMsg): ContractInfo;
    toProto(message: ContractInfo): Uint8Array;
    toProtoMsg(message: ContractInfo): ContractInfoProtoMsg;
};
export declare const ContractCodeHistoryEntry: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ContractCodeHistoryEntry;
    isSDK(o: any): o is ContractCodeHistoryEntrySDKType;
    isAmino(o: any): o is ContractCodeHistoryEntryAmino;
    encode(message: ContractCodeHistoryEntry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ContractCodeHistoryEntry;
    fromJSON(object: any): ContractCodeHistoryEntry;
    toJSON(message: ContractCodeHistoryEntry): unknown;
    fromPartial(object: DeepPartial<ContractCodeHistoryEntry>): ContractCodeHistoryEntry;
    fromSDK(object: ContractCodeHistoryEntrySDKType): ContractCodeHistoryEntry;
    toSDK(message: ContractCodeHistoryEntry): ContractCodeHistoryEntrySDKType;
    fromAmino(object: ContractCodeHistoryEntryAmino): ContractCodeHistoryEntry;
    toAmino(message: ContractCodeHistoryEntry): ContractCodeHistoryEntryAmino;
    fromAminoMsg(object: ContractCodeHistoryEntryAminoMsg): ContractCodeHistoryEntry;
    toAminoMsg(message: ContractCodeHistoryEntry): ContractCodeHistoryEntryAminoMsg;
    fromProtoMsg(message: ContractCodeHistoryEntryProtoMsg): ContractCodeHistoryEntry;
    toProto(message: ContractCodeHistoryEntry): Uint8Array;
    toProtoMsg(message: ContractCodeHistoryEntry): ContractCodeHistoryEntryProtoMsg;
};
export declare const AbsoluteTxPosition: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AbsoluteTxPosition;
    isSDK(o: any): o is AbsoluteTxPositionSDKType;
    isAmino(o: any): o is AbsoluteTxPositionAmino;
    encode(message: AbsoluteTxPosition, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AbsoluteTxPosition;
    fromJSON(object: any): AbsoluteTxPosition;
    toJSON(message: AbsoluteTxPosition): unknown;
    fromPartial(object: DeepPartial<AbsoluteTxPosition>): AbsoluteTxPosition;
    fromSDK(object: AbsoluteTxPositionSDKType): AbsoluteTxPosition;
    toSDK(message: AbsoluteTxPosition): AbsoluteTxPositionSDKType;
    fromAmino(object: AbsoluteTxPositionAmino): AbsoluteTxPosition;
    toAmino(message: AbsoluteTxPosition): AbsoluteTxPositionAmino;
    fromAminoMsg(object: AbsoluteTxPositionAminoMsg): AbsoluteTxPosition;
    toAminoMsg(message: AbsoluteTxPosition): AbsoluteTxPositionAminoMsg;
    fromProtoMsg(message: AbsoluteTxPositionProtoMsg): AbsoluteTxPosition;
    toProto(message: AbsoluteTxPosition): Uint8Array;
    toProtoMsg(message: AbsoluteTxPosition): AbsoluteTxPositionProtoMsg;
};
export declare const Model: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Model;
    isSDK(o: any): o is ModelSDKType;
    isAmino(o: any): o is ModelAmino;
    encode(message: Model, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Model;
    fromJSON(object: any): Model;
    toJSON(message: Model): unknown;
    fromPartial(object: DeepPartial<Model>): Model;
    fromSDK(object: ModelSDKType): Model;
    toSDK(message: Model): ModelSDKType;
    fromAmino(object: ModelAmino): Model;
    toAmino(message: Model): ModelAmino;
    fromAminoMsg(object: ModelAminoMsg): Model;
    toAminoMsg(message: Model): ModelAminoMsg;
    fromProtoMsg(message: ModelProtoMsg): Model;
    toProto(message: Model): Uint8Array;
    toProtoMsg(message: Model): ModelProtoMsg;
};
