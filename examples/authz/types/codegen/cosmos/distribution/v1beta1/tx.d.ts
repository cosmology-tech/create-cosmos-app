import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */
export interface MsgSetWithdrawAddress {
    delegatorAddress: string;
    withdrawAddress: string;
}
export interface MsgSetWithdrawAddressProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress";
    value: Uint8Array;
}
/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */
export interface MsgSetWithdrawAddressAmino {
    delegator_address?: string;
    withdraw_address?: string;
}
export interface MsgSetWithdrawAddressAminoMsg {
    type: "cosmos-sdk/MsgModifyWithdrawAddress";
    value: MsgSetWithdrawAddressAmino;
}
/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */
export interface MsgSetWithdrawAddressSDKType {
    delegator_address: string;
    withdraw_address: string;
}
/** MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response type. */
export interface MsgSetWithdrawAddressResponse {
}
export interface MsgSetWithdrawAddressResponseProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse";
    value: Uint8Array;
}
/** MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response type. */
export interface MsgSetWithdrawAddressResponseAmino {
}
export interface MsgSetWithdrawAddressResponseAminoMsg {
    type: "cosmos-sdk/MsgSetWithdrawAddressResponse";
    value: MsgSetWithdrawAddressResponseAmino;
}
/** MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response type. */
export interface MsgSetWithdrawAddressResponseSDKType {
}
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
export interface MsgWithdrawDelegatorReward {
    delegatorAddress: string;
    validatorAddress: string;
}
export interface MsgWithdrawDelegatorRewardProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward";
    value: Uint8Array;
}
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
export interface MsgWithdrawDelegatorRewardAmino {
    delegator_address?: string;
    validator_address?: string;
}
export interface MsgWithdrawDelegatorRewardAminoMsg {
    type: "cosmos-sdk/MsgWithdrawDelegationReward";
    value: MsgWithdrawDelegatorRewardAmino;
}
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
export interface MsgWithdrawDelegatorRewardSDKType {
    delegator_address: string;
    validator_address: string;
}
/** MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type. */
export interface MsgWithdrawDelegatorRewardResponse {
    amount: Coin[];
}
export interface MsgWithdrawDelegatorRewardResponseProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse";
    value: Uint8Array;
}
/** MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type. */
export interface MsgWithdrawDelegatorRewardResponseAmino {
    amount?: CoinAmino[];
}
export interface MsgWithdrawDelegatorRewardResponseAminoMsg {
    type: "cosmos-sdk/MsgWithdrawDelegatorRewardResponse";
    value: MsgWithdrawDelegatorRewardResponseAmino;
}
/** MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type. */
export interface MsgWithdrawDelegatorRewardResponseSDKType {
    amount: CoinSDKType[];
}
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */
export interface MsgWithdrawValidatorCommission {
    validatorAddress: string;
}
export interface MsgWithdrawValidatorCommissionProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission";
    value: Uint8Array;
}
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */
export interface MsgWithdrawValidatorCommissionAmino {
    validator_address?: string;
}
export interface MsgWithdrawValidatorCommissionAminoMsg {
    type: "cosmos-sdk/MsgWithdrawValidatorCommission";
    value: MsgWithdrawValidatorCommissionAmino;
}
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */
export interface MsgWithdrawValidatorCommissionSDKType {
    validator_address: string;
}
/** MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type. */
export interface MsgWithdrawValidatorCommissionResponse {
    amount: Coin[];
}
export interface MsgWithdrawValidatorCommissionResponseProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse";
    value: Uint8Array;
}
/** MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type. */
export interface MsgWithdrawValidatorCommissionResponseAmino {
    amount?: CoinAmino[];
}
export interface MsgWithdrawValidatorCommissionResponseAminoMsg {
    type: "cosmos-sdk/MsgWithdrawValidatorCommissionResponse";
    value: MsgWithdrawValidatorCommissionResponseAmino;
}
/** MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type. */
export interface MsgWithdrawValidatorCommissionResponseSDKType {
    amount: CoinSDKType[];
}
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */
export interface MsgFundCommunityPool {
    amount: Coin[];
    depositor: string;
}
export interface MsgFundCommunityPoolProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool";
    value: Uint8Array;
}
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */
export interface MsgFundCommunityPoolAmino {
    amount?: CoinAmino[];
    depositor?: string;
}
export interface MsgFundCommunityPoolAminoMsg {
    type: "cosmos-sdk/MsgFundCommunityPool";
    value: MsgFundCommunityPoolAmino;
}
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */
export interface MsgFundCommunityPoolSDKType {
    amount: CoinSDKType[];
    depositor: string;
}
/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export interface MsgFundCommunityPoolResponse {
}
export interface MsgFundCommunityPoolResponseProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse";
    value: Uint8Array;
}
/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export interface MsgFundCommunityPoolResponseAmino {
}
export interface MsgFundCommunityPoolResponseAminoMsg {
    type: "cosmos-sdk/MsgFundCommunityPoolResponse";
    value: MsgFundCommunityPoolResponseAmino;
}
/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export interface MsgFundCommunityPoolResponseSDKType {
}
export declare const MsgSetWithdrawAddress: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgSetWithdrawAddress;
    isSDK(o: any): o is MsgSetWithdrawAddressSDKType;
    isAmino(o: any): o is MsgSetWithdrawAddressAmino;
    encode(message: MsgSetWithdrawAddress, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetWithdrawAddress;
    fromJSON(object: any): MsgSetWithdrawAddress;
    toJSON(message: MsgSetWithdrawAddress): unknown;
    fromPartial(object: DeepPartial<MsgSetWithdrawAddress>): MsgSetWithdrawAddress;
    fromSDK(object: MsgSetWithdrawAddressSDKType): MsgSetWithdrawAddress;
    toSDK(message: MsgSetWithdrawAddress): MsgSetWithdrawAddressSDKType;
    fromAmino(object: MsgSetWithdrawAddressAmino): MsgSetWithdrawAddress;
    toAmino(message: MsgSetWithdrawAddress): MsgSetWithdrawAddressAmino;
    fromAminoMsg(object: MsgSetWithdrawAddressAminoMsg): MsgSetWithdrawAddress;
    toAminoMsg(message: MsgSetWithdrawAddress): MsgSetWithdrawAddressAminoMsg;
    fromProtoMsg(message: MsgSetWithdrawAddressProtoMsg): MsgSetWithdrawAddress;
    toProto(message: MsgSetWithdrawAddress): Uint8Array;
    toProtoMsg(message: MsgSetWithdrawAddress): MsgSetWithdrawAddressProtoMsg;
};
export declare const MsgSetWithdrawAddressResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgSetWithdrawAddressResponse;
    isSDK(o: any): o is MsgSetWithdrawAddressResponseSDKType;
    isAmino(o: any): o is MsgSetWithdrawAddressResponseAmino;
    encode(_: MsgSetWithdrawAddressResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetWithdrawAddressResponse;
    fromJSON(_: any): MsgSetWithdrawAddressResponse;
    toJSON(_: MsgSetWithdrawAddressResponse): unknown;
    fromPartial(_: DeepPartial<MsgSetWithdrawAddressResponse>): MsgSetWithdrawAddressResponse;
    fromSDK(_: MsgSetWithdrawAddressResponseSDKType): MsgSetWithdrawAddressResponse;
    toSDK(_: MsgSetWithdrawAddressResponse): MsgSetWithdrawAddressResponseSDKType;
    fromAmino(_: MsgSetWithdrawAddressResponseAmino): MsgSetWithdrawAddressResponse;
    toAmino(_: MsgSetWithdrawAddressResponse): MsgSetWithdrawAddressResponseAmino;
    fromAminoMsg(object: MsgSetWithdrawAddressResponseAminoMsg): MsgSetWithdrawAddressResponse;
    toAminoMsg(message: MsgSetWithdrawAddressResponse): MsgSetWithdrawAddressResponseAminoMsg;
    fromProtoMsg(message: MsgSetWithdrawAddressResponseProtoMsg): MsgSetWithdrawAddressResponse;
    toProto(message: MsgSetWithdrawAddressResponse): Uint8Array;
    toProtoMsg(message: MsgSetWithdrawAddressResponse): MsgSetWithdrawAddressResponseProtoMsg;
};
export declare const MsgWithdrawDelegatorReward: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgWithdrawDelegatorReward;
    isSDK(o: any): o is MsgWithdrawDelegatorRewardSDKType;
    isAmino(o: any): o is MsgWithdrawDelegatorRewardAmino;
    encode(message: MsgWithdrawDelegatorReward, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawDelegatorReward;
    fromJSON(object: any): MsgWithdrawDelegatorReward;
    toJSON(message: MsgWithdrawDelegatorReward): unknown;
    fromPartial(object: DeepPartial<MsgWithdrawDelegatorReward>): MsgWithdrawDelegatorReward;
    fromSDK(object: MsgWithdrawDelegatorRewardSDKType): MsgWithdrawDelegatorReward;
    toSDK(message: MsgWithdrawDelegatorReward): MsgWithdrawDelegatorRewardSDKType;
    fromAmino(object: MsgWithdrawDelegatorRewardAmino): MsgWithdrawDelegatorReward;
    toAmino(message: MsgWithdrawDelegatorReward): MsgWithdrawDelegatorRewardAmino;
    fromAminoMsg(object: MsgWithdrawDelegatorRewardAminoMsg): MsgWithdrawDelegatorReward;
    toAminoMsg(message: MsgWithdrawDelegatorReward): MsgWithdrawDelegatorRewardAminoMsg;
    fromProtoMsg(message: MsgWithdrawDelegatorRewardProtoMsg): MsgWithdrawDelegatorReward;
    toProto(message: MsgWithdrawDelegatorReward): Uint8Array;
    toProtoMsg(message: MsgWithdrawDelegatorReward): MsgWithdrawDelegatorRewardProtoMsg;
};
export declare const MsgWithdrawDelegatorRewardResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgWithdrawDelegatorRewardResponse;
    isSDK(o: any): o is MsgWithdrawDelegatorRewardResponseSDKType;
    isAmino(o: any): o is MsgWithdrawDelegatorRewardResponseAmino;
    encode(message: MsgWithdrawDelegatorRewardResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawDelegatorRewardResponse;
    fromJSON(object: any): MsgWithdrawDelegatorRewardResponse;
    toJSON(message: MsgWithdrawDelegatorRewardResponse): unknown;
    fromPartial(object: DeepPartial<MsgWithdrawDelegatorRewardResponse>): MsgWithdrawDelegatorRewardResponse;
    fromSDK(object: MsgWithdrawDelegatorRewardResponseSDKType): MsgWithdrawDelegatorRewardResponse;
    toSDK(message: MsgWithdrawDelegatorRewardResponse): MsgWithdrawDelegatorRewardResponseSDKType;
    fromAmino(object: MsgWithdrawDelegatorRewardResponseAmino): MsgWithdrawDelegatorRewardResponse;
    toAmino(message: MsgWithdrawDelegatorRewardResponse): MsgWithdrawDelegatorRewardResponseAmino;
    fromAminoMsg(object: MsgWithdrawDelegatorRewardResponseAminoMsg): MsgWithdrawDelegatorRewardResponse;
    toAminoMsg(message: MsgWithdrawDelegatorRewardResponse): MsgWithdrawDelegatorRewardResponseAminoMsg;
    fromProtoMsg(message: MsgWithdrawDelegatorRewardResponseProtoMsg): MsgWithdrawDelegatorRewardResponse;
    toProto(message: MsgWithdrawDelegatorRewardResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawDelegatorRewardResponse): MsgWithdrawDelegatorRewardResponseProtoMsg;
};
export declare const MsgWithdrawValidatorCommission: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgWithdrawValidatorCommission;
    isSDK(o: any): o is MsgWithdrawValidatorCommissionSDKType;
    isAmino(o: any): o is MsgWithdrawValidatorCommissionAmino;
    encode(message: MsgWithdrawValidatorCommission, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawValidatorCommission;
    fromJSON(object: any): MsgWithdrawValidatorCommission;
    toJSON(message: MsgWithdrawValidatorCommission): unknown;
    fromPartial(object: DeepPartial<MsgWithdrawValidatorCommission>): MsgWithdrawValidatorCommission;
    fromSDK(object: MsgWithdrawValidatorCommissionSDKType): MsgWithdrawValidatorCommission;
    toSDK(message: MsgWithdrawValidatorCommission): MsgWithdrawValidatorCommissionSDKType;
    fromAmino(object: MsgWithdrawValidatorCommissionAmino): MsgWithdrawValidatorCommission;
    toAmino(message: MsgWithdrawValidatorCommission): MsgWithdrawValidatorCommissionAmino;
    fromAminoMsg(object: MsgWithdrawValidatorCommissionAminoMsg): MsgWithdrawValidatorCommission;
    toAminoMsg(message: MsgWithdrawValidatorCommission): MsgWithdrawValidatorCommissionAminoMsg;
    fromProtoMsg(message: MsgWithdrawValidatorCommissionProtoMsg): MsgWithdrawValidatorCommission;
    toProto(message: MsgWithdrawValidatorCommission): Uint8Array;
    toProtoMsg(message: MsgWithdrawValidatorCommission): MsgWithdrawValidatorCommissionProtoMsg;
};
export declare const MsgWithdrawValidatorCommissionResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgWithdrawValidatorCommissionResponse;
    isSDK(o: any): o is MsgWithdrawValidatorCommissionResponseSDKType;
    isAmino(o: any): o is MsgWithdrawValidatorCommissionResponseAmino;
    encode(message: MsgWithdrawValidatorCommissionResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawValidatorCommissionResponse;
    fromJSON(object: any): MsgWithdrawValidatorCommissionResponse;
    toJSON(message: MsgWithdrawValidatorCommissionResponse): unknown;
    fromPartial(object: DeepPartial<MsgWithdrawValidatorCommissionResponse>): MsgWithdrawValidatorCommissionResponse;
    fromSDK(object: MsgWithdrawValidatorCommissionResponseSDKType): MsgWithdrawValidatorCommissionResponse;
    toSDK(message: MsgWithdrawValidatorCommissionResponse): MsgWithdrawValidatorCommissionResponseSDKType;
    fromAmino(object: MsgWithdrawValidatorCommissionResponseAmino): MsgWithdrawValidatorCommissionResponse;
    toAmino(message: MsgWithdrawValidatorCommissionResponse): MsgWithdrawValidatorCommissionResponseAmino;
    fromAminoMsg(object: MsgWithdrawValidatorCommissionResponseAminoMsg): MsgWithdrawValidatorCommissionResponse;
    toAminoMsg(message: MsgWithdrawValidatorCommissionResponse): MsgWithdrawValidatorCommissionResponseAminoMsg;
    fromProtoMsg(message: MsgWithdrawValidatorCommissionResponseProtoMsg): MsgWithdrawValidatorCommissionResponse;
    toProto(message: MsgWithdrawValidatorCommissionResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawValidatorCommissionResponse): MsgWithdrawValidatorCommissionResponseProtoMsg;
};
export declare const MsgFundCommunityPool: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgFundCommunityPool;
    isSDK(o: any): o is MsgFundCommunityPoolSDKType;
    isAmino(o: any): o is MsgFundCommunityPoolAmino;
    encode(message: MsgFundCommunityPool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgFundCommunityPool;
    fromJSON(object: any): MsgFundCommunityPool;
    toJSON(message: MsgFundCommunityPool): unknown;
    fromPartial(object: DeepPartial<MsgFundCommunityPool>): MsgFundCommunityPool;
    fromSDK(object: MsgFundCommunityPoolSDKType): MsgFundCommunityPool;
    toSDK(message: MsgFundCommunityPool): MsgFundCommunityPoolSDKType;
    fromAmino(object: MsgFundCommunityPoolAmino): MsgFundCommunityPool;
    toAmino(message: MsgFundCommunityPool): MsgFundCommunityPoolAmino;
    fromAminoMsg(object: MsgFundCommunityPoolAminoMsg): MsgFundCommunityPool;
    toAminoMsg(message: MsgFundCommunityPool): MsgFundCommunityPoolAminoMsg;
    fromProtoMsg(message: MsgFundCommunityPoolProtoMsg): MsgFundCommunityPool;
    toProto(message: MsgFundCommunityPool): Uint8Array;
    toProtoMsg(message: MsgFundCommunityPool): MsgFundCommunityPoolProtoMsg;
};
export declare const MsgFundCommunityPoolResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgFundCommunityPoolResponse;
    isSDK(o: any): o is MsgFundCommunityPoolResponseSDKType;
    isAmino(o: any): o is MsgFundCommunityPoolResponseAmino;
    encode(_: MsgFundCommunityPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgFundCommunityPoolResponse;
    fromJSON(_: any): MsgFundCommunityPoolResponse;
    toJSON(_: MsgFundCommunityPoolResponse): unknown;
    fromPartial(_: DeepPartial<MsgFundCommunityPoolResponse>): MsgFundCommunityPoolResponse;
    fromSDK(_: MsgFundCommunityPoolResponseSDKType): MsgFundCommunityPoolResponse;
    toSDK(_: MsgFundCommunityPoolResponse): MsgFundCommunityPoolResponseSDKType;
    fromAmino(_: MsgFundCommunityPoolResponseAmino): MsgFundCommunityPoolResponse;
    toAmino(_: MsgFundCommunityPoolResponse): MsgFundCommunityPoolResponseAmino;
    fromAminoMsg(object: MsgFundCommunityPoolResponseAminoMsg): MsgFundCommunityPoolResponse;
    toAminoMsg(message: MsgFundCommunityPoolResponse): MsgFundCommunityPoolResponseAminoMsg;
    fromProtoMsg(message: MsgFundCommunityPoolResponseProtoMsg): MsgFundCommunityPoolResponse;
    toProto(message: MsgFundCommunityPoolResponse): Uint8Array;
    toProtoMsg(message: MsgFundCommunityPoolResponse): MsgFundCommunityPoolResponseProtoMsg;
};
