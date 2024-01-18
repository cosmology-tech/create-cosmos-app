import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { Period, PeriodAmino, PeriodSDKType } from "./vesting";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccount {
    fromAddress: string;
    toAddress: string;
    amount: Coin[];
    endTime: bigint;
    delayed: boolean;
}
export interface MsgCreateVestingAccountProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount";
    value: Uint8Array;
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccountAmino {
    from_address?: string;
    to_address?: string;
    amount?: CoinAmino[];
    end_time?: string;
    delayed?: boolean;
}
export interface MsgCreateVestingAccountAminoMsg {
    type: "cosmos-sdk/MsgCreateVestingAccount";
    value: MsgCreateVestingAccountAmino;
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccountSDKType {
    from_address: string;
    to_address: string;
    amount: CoinSDKType[];
    end_time: bigint;
    delayed: boolean;
}
/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponse {
}
export interface MsgCreateVestingAccountResponseProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse";
    value: Uint8Array;
}
/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponseAmino {
}
export interface MsgCreateVestingAccountResponseAminoMsg {
    type: "cosmos-sdk/MsgCreateVestingAccountResponse";
    value: MsgCreateVestingAccountResponseAmino;
}
/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponseSDKType {
}
/**
 * MsgCreatePermanentLockedAccount defines a message that enables creating a permanent
 * locked account.
 */
export interface MsgCreatePermanentLockedAccount {
    fromAddress: string;
    toAddress: string;
    amount: Coin[];
}
export interface MsgCreatePermanentLockedAccountProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount";
    value: Uint8Array;
}
/**
 * MsgCreatePermanentLockedAccount defines a message that enables creating a permanent
 * locked account.
 */
export interface MsgCreatePermanentLockedAccountAmino {
    from_address?: string;
    to_address?: string;
    amount?: CoinAmino[];
}
export interface MsgCreatePermanentLockedAccountAminoMsg {
    type: "cosmos-sdk/MsgCreatePermanentLockedAccount";
    value: MsgCreatePermanentLockedAccountAmino;
}
/**
 * MsgCreatePermanentLockedAccount defines a message that enables creating a permanent
 * locked account.
 */
export interface MsgCreatePermanentLockedAccountSDKType {
    from_address: string;
    to_address: string;
    amount: CoinSDKType[];
}
/** MsgCreatePermanentLockedAccountResponse defines the Msg/CreatePermanentLockedAccount response type. */
export interface MsgCreatePermanentLockedAccountResponse {
}
export interface MsgCreatePermanentLockedAccountResponseProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse";
    value: Uint8Array;
}
/** MsgCreatePermanentLockedAccountResponse defines the Msg/CreatePermanentLockedAccount response type. */
export interface MsgCreatePermanentLockedAccountResponseAmino {
}
export interface MsgCreatePermanentLockedAccountResponseAminoMsg {
    type: "cosmos-sdk/MsgCreatePermanentLockedAccountResponse";
    value: MsgCreatePermanentLockedAccountResponseAmino;
}
/** MsgCreatePermanentLockedAccountResponse defines the Msg/CreatePermanentLockedAccount response type. */
export interface MsgCreatePermanentLockedAccountResponseSDKType {
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreatePeriodicVestingAccount {
    fromAddress: string;
    toAddress: string;
    startTime: bigint;
    vestingPeriods: Period[];
}
export interface MsgCreatePeriodicVestingAccountProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount";
    value: Uint8Array;
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreatePeriodicVestingAccountAmino {
    from_address?: string;
    to_address?: string;
    start_time?: string;
    vesting_periods?: PeriodAmino[];
}
export interface MsgCreatePeriodicVestingAccountAminoMsg {
    type: "cosmos-sdk/MsgCreatePeriodicVestingAccount";
    value: MsgCreatePeriodicVestingAccountAmino;
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreatePeriodicVestingAccountSDKType {
    from_address: string;
    to_address: string;
    start_time: bigint;
    vesting_periods: PeriodSDKType[];
}
/**
 * MsgCreateVestingAccountResponse defines the Msg/CreatePeriodicVestingAccount
 * response type.
 */
export interface MsgCreatePeriodicVestingAccountResponse {
}
export interface MsgCreatePeriodicVestingAccountResponseProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse";
    value: Uint8Array;
}
/**
 * MsgCreateVestingAccountResponse defines the Msg/CreatePeriodicVestingAccount
 * response type.
 */
export interface MsgCreatePeriodicVestingAccountResponseAmino {
}
export interface MsgCreatePeriodicVestingAccountResponseAminoMsg {
    type: "cosmos-sdk/MsgCreatePeriodicVestingAccountResponse";
    value: MsgCreatePeriodicVestingAccountResponseAmino;
}
/**
 * MsgCreateVestingAccountResponse defines the Msg/CreatePeriodicVestingAccount
 * response type.
 */
export interface MsgCreatePeriodicVestingAccountResponseSDKType {
}
export declare const MsgCreateVestingAccount: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgCreateVestingAccount;
    isSDK(o: any): o is MsgCreateVestingAccountSDKType;
    isAmino(o: any): o is MsgCreateVestingAccountAmino;
    encode(message: MsgCreateVestingAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateVestingAccount;
    fromJSON(object: any): MsgCreateVestingAccount;
    toJSON(message: MsgCreateVestingAccount): unknown;
    fromPartial(object: DeepPartial<MsgCreateVestingAccount>): MsgCreateVestingAccount;
    fromSDK(object: MsgCreateVestingAccountSDKType): MsgCreateVestingAccount;
    toSDK(message: MsgCreateVestingAccount): MsgCreateVestingAccountSDKType;
    fromAmino(object: MsgCreateVestingAccountAmino): MsgCreateVestingAccount;
    toAmino(message: MsgCreateVestingAccount): MsgCreateVestingAccountAmino;
    fromAminoMsg(object: MsgCreateVestingAccountAminoMsg): MsgCreateVestingAccount;
    toAminoMsg(message: MsgCreateVestingAccount): MsgCreateVestingAccountAminoMsg;
    fromProtoMsg(message: MsgCreateVestingAccountProtoMsg): MsgCreateVestingAccount;
    toProto(message: MsgCreateVestingAccount): Uint8Array;
    toProtoMsg(message: MsgCreateVestingAccount): MsgCreateVestingAccountProtoMsg;
};
export declare const MsgCreateVestingAccountResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgCreateVestingAccountResponse;
    isSDK(o: any): o is MsgCreateVestingAccountResponseSDKType;
    isAmino(o: any): o is MsgCreateVestingAccountResponseAmino;
    encode(_: MsgCreateVestingAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateVestingAccountResponse;
    fromJSON(_: any): MsgCreateVestingAccountResponse;
    toJSON(_: MsgCreateVestingAccountResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateVestingAccountResponse>): MsgCreateVestingAccountResponse;
    fromSDK(_: MsgCreateVestingAccountResponseSDKType): MsgCreateVestingAccountResponse;
    toSDK(_: MsgCreateVestingAccountResponse): MsgCreateVestingAccountResponseSDKType;
    fromAmino(_: MsgCreateVestingAccountResponseAmino): MsgCreateVestingAccountResponse;
    toAmino(_: MsgCreateVestingAccountResponse): MsgCreateVestingAccountResponseAmino;
    fromAminoMsg(object: MsgCreateVestingAccountResponseAminoMsg): MsgCreateVestingAccountResponse;
    toAminoMsg(message: MsgCreateVestingAccountResponse): MsgCreateVestingAccountResponseAminoMsg;
    fromProtoMsg(message: MsgCreateVestingAccountResponseProtoMsg): MsgCreateVestingAccountResponse;
    toProto(message: MsgCreateVestingAccountResponse): Uint8Array;
    toProtoMsg(message: MsgCreateVestingAccountResponse): MsgCreateVestingAccountResponseProtoMsg;
};
export declare const MsgCreatePermanentLockedAccount: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgCreatePermanentLockedAccount;
    isSDK(o: any): o is MsgCreatePermanentLockedAccountSDKType;
    isAmino(o: any): o is MsgCreatePermanentLockedAccountAmino;
    encode(message: MsgCreatePermanentLockedAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePermanentLockedAccount;
    fromJSON(object: any): MsgCreatePermanentLockedAccount;
    toJSON(message: MsgCreatePermanentLockedAccount): unknown;
    fromPartial(object: DeepPartial<MsgCreatePermanentLockedAccount>): MsgCreatePermanentLockedAccount;
    fromSDK(object: MsgCreatePermanentLockedAccountSDKType): MsgCreatePermanentLockedAccount;
    toSDK(message: MsgCreatePermanentLockedAccount): MsgCreatePermanentLockedAccountSDKType;
    fromAmino(object: MsgCreatePermanentLockedAccountAmino): MsgCreatePermanentLockedAccount;
    toAmino(message: MsgCreatePermanentLockedAccount): MsgCreatePermanentLockedAccountAmino;
    fromAminoMsg(object: MsgCreatePermanentLockedAccountAminoMsg): MsgCreatePermanentLockedAccount;
    toAminoMsg(message: MsgCreatePermanentLockedAccount): MsgCreatePermanentLockedAccountAminoMsg;
    fromProtoMsg(message: MsgCreatePermanentLockedAccountProtoMsg): MsgCreatePermanentLockedAccount;
    toProto(message: MsgCreatePermanentLockedAccount): Uint8Array;
    toProtoMsg(message: MsgCreatePermanentLockedAccount): MsgCreatePermanentLockedAccountProtoMsg;
};
export declare const MsgCreatePermanentLockedAccountResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgCreatePermanentLockedAccountResponse;
    isSDK(o: any): o is MsgCreatePermanentLockedAccountResponseSDKType;
    isAmino(o: any): o is MsgCreatePermanentLockedAccountResponseAmino;
    encode(_: MsgCreatePermanentLockedAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePermanentLockedAccountResponse;
    fromJSON(_: any): MsgCreatePermanentLockedAccountResponse;
    toJSON(_: MsgCreatePermanentLockedAccountResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreatePermanentLockedAccountResponse>): MsgCreatePermanentLockedAccountResponse;
    fromSDK(_: MsgCreatePermanentLockedAccountResponseSDKType): MsgCreatePermanentLockedAccountResponse;
    toSDK(_: MsgCreatePermanentLockedAccountResponse): MsgCreatePermanentLockedAccountResponseSDKType;
    fromAmino(_: MsgCreatePermanentLockedAccountResponseAmino): MsgCreatePermanentLockedAccountResponse;
    toAmino(_: MsgCreatePermanentLockedAccountResponse): MsgCreatePermanentLockedAccountResponseAmino;
    fromAminoMsg(object: MsgCreatePermanentLockedAccountResponseAminoMsg): MsgCreatePermanentLockedAccountResponse;
    toAminoMsg(message: MsgCreatePermanentLockedAccountResponse): MsgCreatePermanentLockedAccountResponseAminoMsg;
    fromProtoMsg(message: MsgCreatePermanentLockedAccountResponseProtoMsg): MsgCreatePermanentLockedAccountResponse;
    toProto(message: MsgCreatePermanentLockedAccountResponse): Uint8Array;
    toProtoMsg(message: MsgCreatePermanentLockedAccountResponse): MsgCreatePermanentLockedAccountResponseProtoMsg;
};
export declare const MsgCreatePeriodicVestingAccount: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgCreatePeriodicVestingAccount;
    isSDK(o: any): o is MsgCreatePeriodicVestingAccountSDKType;
    isAmino(o: any): o is MsgCreatePeriodicVestingAccountAmino;
    encode(message: MsgCreatePeriodicVestingAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePeriodicVestingAccount;
    fromJSON(object: any): MsgCreatePeriodicVestingAccount;
    toJSON(message: MsgCreatePeriodicVestingAccount): unknown;
    fromPartial(object: DeepPartial<MsgCreatePeriodicVestingAccount>): MsgCreatePeriodicVestingAccount;
    fromSDK(object: MsgCreatePeriodicVestingAccountSDKType): MsgCreatePeriodicVestingAccount;
    toSDK(message: MsgCreatePeriodicVestingAccount): MsgCreatePeriodicVestingAccountSDKType;
    fromAmino(object: MsgCreatePeriodicVestingAccountAmino): MsgCreatePeriodicVestingAccount;
    toAmino(message: MsgCreatePeriodicVestingAccount): MsgCreatePeriodicVestingAccountAmino;
    fromAminoMsg(object: MsgCreatePeriodicVestingAccountAminoMsg): MsgCreatePeriodicVestingAccount;
    toAminoMsg(message: MsgCreatePeriodicVestingAccount): MsgCreatePeriodicVestingAccountAminoMsg;
    fromProtoMsg(message: MsgCreatePeriodicVestingAccountProtoMsg): MsgCreatePeriodicVestingAccount;
    toProto(message: MsgCreatePeriodicVestingAccount): Uint8Array;
    toProtoMsg(message: MsgCreatePeriodicVestingAccount): MsgCreatePeriodicVestingAccountProtoMsg;
};
export declare const MsgCreatePeriodicVestingAccountResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgCreatePeriodicVestingAccountResponse;
    isSDK(o: any): o is MsgCreatePeriodicVestingAccountResponseSDKType;
    isAmino(o: any): o is MsgCreatePeriodicVestingAccountResponseAmino;
    encode(_: MsgCreatePeriodicVestingAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePeriodicVestingAccountResponse;
    fromJSON(_: any): MsgCreatePeriodicVestingAccountResponse;
    toJSON(_: MsgCreatePeriodicVestingAccountResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreatePeriodicVestingAccountResponse>): MsgCreatePeriodicVestingAccountResponse;
    fromSDK(_: MsgCreatePeriodicVestingAccountResponseSDKType): MsgCreatePeriodicVestingAccountResponse;
    toSDK(_: MsgCreatePeriodicVestingAccountResponse): MsgCreatePeriodicVestingAccountResponseSDKType;
    fromAmino(_: MsgCreatePeriodicVestingAccountResponseAmino): MsgCreatePeriodicVestingAccountResponse;
    toAmino(_: MsgCreatePeriodicVestingAccountResponse): MsgCreatePeriodicVestingAccountResponseAmino;
    fromAminoMsg(object: MsgCreatePeriodicVestingAccountResponseAminoMsg): MsgCreatePeriodicVestingAccountResponse;
    toAminoMsg(message: MsgCreatePeriodicVestingAccountResponse): MsgCreatePeriodicVestingAccountResponseAminoMsg;
    fromProtoMsg(message: MsgCreatePeriodicVestingAccountResponseProtoMsg): MsgCreatePeriodicVestingAccountResponse;
    toProto(message: MsgCreatePeriodicVestingAccountResponse): Uint8Array;
    toProtoMsg(message: MsgCreatePeriodicVestingAccountResponse): MsgCreatePeriodicVestingAccountResponseProtoMsg;
};
