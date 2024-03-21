import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 */
export interface BaseAccount {
    $typeUrl?: "/cosmos.auth.v1beta1.BaseAccount";
    address: string;
    pubKey?: Any | undefined;
    accountNumber: bigint;
    sequence: bigint;
}
export interface BaseAccountProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.BaseAccount";
    value: Uint8Array;
}
/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 */
export interface BaseAccountAmino {
    address?: string;
    pub_key?: AnyAmino | undefined;
    account_number?: string;
    sequence?: string;
}
export interface BaseAccountAminoMsg {
    type: "cosmos-sdk/BaseAccount";
    value: BaseAccountAmino;
}
/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 */
export interface BaseAccountSDKType {
    $typeUrl?: "/cosmos.auth.v1beta1.BaseAccount";
    address: string;
    pub_key?: AnySDKType | undefined;
    account_number: bigint;
    sequence: bigint;
}
/** ModuleAccount defines an account for modules that holds coins on a pool. */
export interface ModuleAccount {
    $typeUrl?: "/cosmos.auth.v1beta1.ModuleAccount";
    baseAccount?: BaseAccount | undefined;
    name: string;
    permissions: string[];
}
export interface ModuleAccountProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.ModuleAccount";
    value: Uint8Array;
}
/** ModuleAccount defines an account for modules that holds coins on a pool. */
export interface ModuleAccountAmino {
    base_account?: BaseAccountAmino | undefined;
    name?: string;
    permissions?: string[];
}
export interface ModuleAccountAminoMsg {
    type: "cosmos-sdk/ModuleAccount";
    value: ModuleAccountAmino;
}
/** ModuleAccount defines an account for modules that holds coins on a pool. */
export interface ModuleAccountSDKType {
    $typeUrl?: "/cosmos.auth.v1beta1.ModuleAccount";
    base_account?: BaseAccountSDKType | undefined;
    name: string;
    permissions: string[];
}
/** Params defines the parameters for the auth module. */
export interface Params {
    maxMemoCharacters: bigint;
    txSigLimit: bigint;
    txSizeCostPerByte: bigint;
    sigVerifyCostEd25519: bigint;
    sigVerifyCostSecp256k1: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the auth module. */
export interface ParamsAmino {
    max_memo_characters?: string;
    tx_sig_limit?: string;
    tx_size_cost_per_byte?: string;
    sig_verify_cost_ed25519?: string;
    sig_verify_cost_secp256k1?: string;
}
export interface ParamsAminoMsg {
    type: "cosmos-sdk/Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the auth module. */
export interface ParamsSDKType {
    max_memo_characters: bigint;
    tx_sig_limit: bigint;
    tx_size_cost_per_byte: bigint;
    sig_verify_cost_ed25519: bigint;
    sig_verify_cost_secp256k1: bigint;
}
export declare const BaseAccount: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is BaseAccount;
    isSDK(o: any): o is BaseAccountSDKType;
    isAmino(o: any): o is BaseAccountAmino;
    encode(message: BaseAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BaseAccount;
    fromJSON(object: any): BaseAccount;
    toJSON(message: BaseAccount): unknown;
    fromPartial(object: DeepPartial<BaseAccount>): BaseAccount;
    fromSDK(object: BaseAccountSDKType): BaseAccount;
    toSDK(message: BaseAccount): BaseAccountSDKType;
    fromAmino(object: BaseAccountAmino): BaseAccount;
    toAmino(message: BaseAccount): BaseAccountAmino;
    fromAminoMsg(object: BaseAccountAminoMsg): BaseAccount;
    toAminoMsg(message: BaseAccount): BaseAccountAminoMsg;
    fromProtoMsg(message: BaseAccountProtoMsg): BaseAccount;
    toProto(message: BaseAccount): Uint8Array;
    toProtoMsg(message: BaseAccount): BaseAccountProtoMsg;
};
export declare const ModuleAccount: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ModuleAccount;
    isSDK(o: any): o is ModuleAccountSDKType;
    isAmino(o: any): o is ModuleAccountAmino;
    encode(message: ModuleAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ModuleAccount;
    fromJSON(object: any): ModuleAccount;
    toJSON(message: ModuleAccount): unknown;
    fromPartial(object: DeepPartial<ModuleAccount>): ModuleAccount;
    fromSDK(object: ModuleAccountSDKType): ModuleAccount;
    toSDK(message: ModuleAccount): ModuleAccountSDKType;
    fromAmino(object: ModuleAccountAmino): ModuleAccount;
    toAmino(message: ModuleAccount): ModuleAccountAmino;
    fromAminoMsg(object: ModuleAccountAminoMsg): ModuleAccount;
    toAminoMsg(message: ModuleAccount): ModuleAccountAminoMsg;
    fromProtoMsg(message: ModuleAccountProtoMsg): ModuleAccount;
    toProto(message: ModuleAccount): Uint8Array;
    toProtoMsg(message: ModuleAccount): ModuleAccountProtoMsg;
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
