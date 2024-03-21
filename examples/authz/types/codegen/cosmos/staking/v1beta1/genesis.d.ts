import { Params, ParamsAmino, ParamsSDKType, Validator, ValidatorAmino, ValidatorSDKType, Delegation, DelegationAmino, DelegationSDKType, UnbondingDelegation, UnbondingDelegationAmino, UnbondingDelegationSDKType, Redelegation, RedelegationAmino, RedelegationSDKType } from "./staking";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the staking module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of related to deposit. */
    params: Params | undefined;
    /**
     * last_total_power tracks the total amounts of bonded tokens recorded during
     * the previous end block.
     */
    lastTotalPower: Uint8Array;
    /**
     * last_validator_powers is a special index that provides a historical list
     * of the last-block's bonded validators.
     */
    lastValidatorPowers: LastValidatorPower[];
    /** delegations defines the validator set at genesis. */
    validators: Validator[];
    /** delegations defines the delegations active at genesis. */
    delegations: Delegation[];
    /** unbonding_delegations defines the unbonding delegations active at genesis. */
    unbondingDelegations: UnbondingDelegation[];
    /** redelegations defines the redelegations active at genesis. */
    redelegations: Redelegation[];
    exported: boolean;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the staking module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the paramaters of related to deposit. */
    params?: ParamsAmino | undefined;
    /**
     * last_total_power tracks the total amounts of bonded tokens recorded during
     * the previous end block.
     */
    last_total_power?: string;
    /**
     * last_validator_powers is a special index that provides a historical list
     * of the last-block's bonded validators.
     */
    last_validator_powers?: LastValidatorPowerAmino[];
    /** delegations defines the validator set at genesis. */
    validators?: ValidatorAmino[];
    /** delegations defines the delegations active at genesis. */
    delegations?: DelegationAmino[];
    /** unbonding_delegations defines the unbonding delegations active at genesis. */
    unbonding_delegations?: UnbondingDelegationAmino[];
    /** redelegations defines the redelegations active at genesis. */
    redelegations?: RedelegationAmino[];
    exported?: boolean;
}
export interface GenesisStateAminoMsg {
    type: "cosmos-sdk/GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the staking module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType | undefined;
    last_total_power: Uint8Array;
    last_validator_powers: LastValidatorPowerSDKType[];
    validators: ValidatorSDKType[];
    delegations: DelegationSDKType[];
    unbonding_delegations: UnbondingDelegationSDKType[];
    redelegations: RedelegationSDKType[];
    exported: boolean;
}
/** LastValidatorPower required for validator set update logic. */
export interface LastValidatorPower {
    /** address is the address of the validator. */
    address: string;
    /** power defines the power of the validator. */
    power: bigint;
}
export interface LastValidatorPowerProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.LastValidatorPower";
    value: Uint8Array;
}
/** LastValidatorPower required for validator set update logic. */
export interface LastValidatorPowerAmino {
    /** address is the address of the validator. */
    address?: string;
    /** power defines the power of the validator. */
    power?: string;
}
export interface LastValidatorPowerAminoMsg {
    type: "cosmos-sdk/LastValidatorPower";
    value: LastValidatorPowerAmino;
}
/** LastValidatorPower required for validator set update logic. */
export interface LastValidatorPowerSDKType {
    address: string;
    power: bigint;
}
export declare const GenesisState: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is GenesisState;
    isSDK(o: any): o is GenesisStateSDKType;
    isAmino(o: any): o is GenesisStateAmino;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
    fromSDK(object: GenesisStateSDKType): GenesisState;
    toSDK(message: GenesisState): GenesisStateSDKType;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    toAminoMsg(message: GenesisState): GenesisStateAminoMsg;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const LastValidatorPower: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is LastValidatorPower;
    isSDK(o: any): o is LastValidatorPowerSDKType;
    isAmino(o: any): o is LastValidatorPowerAmino;
    encode(message: LastValidatorPower, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LastValidatorPower;
    fromJSON(object: any): LastValidatorPower;
    toJSON(message: LastValidatorPower): unknown;
    fromPartial(object: DeepPartial<LastValidatorPower>): LastValidatorPower;
    fromSDK(object: LastValidatorPowerSDKType): LastValidatorPower;
    toSDK(message: LastValidatorPower): LastValidatorPowerSDKType;
    fromAmino(object: LastValidatorPowerAmino): LastValidatorPower;
    toAmino(message: LastValidatorPower): LastValidatorPowerAmino;
    fromAminoMsg(object: LastValidatorPowerAminoMsg): LastValidatorPower;
    toAminoMsg(message: LastValidatorPower): LastValidatorPowerAminoMsg;
    fromProtoMsg(message: LastValidatorPowerProtoMsg): LastValidatorPower;
    toProto(message: LastValidatorPower): Uint8Array;
    toProtoMsg(message: LastValidatorPower): LastValidatorPowerProtoMsg;
};
