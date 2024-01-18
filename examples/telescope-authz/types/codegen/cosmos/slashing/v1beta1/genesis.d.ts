import { Params, ParamsAmino, ParamsSDKType, ValidatorSigningInfo, ValidatorSigningInfoAmino, ValidatorSigningInfoSDKType } from "./slashing";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the slashing module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of related to deposit. */
    params: Params | undefined;
    /**
     * signing_infos represents a map between validator addresses and their
     * signing infos.
     */
    signingInfos: SigningInfo[];
    /**
     * missed_blocks represents a map between validator addresses and their
     * missed blocks.
     */
    missedBlocks: ValidatorMissedBlocks[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/cosmos.slashing.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the slashing module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the paramaters of related to deposit. */
    params?: ParamsAmino | undefined;
    /**
     * signing_infos represents a map between validator addresses and their
     * signing infos.
     */
    signing_infos?: SigningInfoAmino[];
    /**
     * missed_blocks represents a map between validator addresses and their
     * missed blocks.
     */
    missed_blocks?: ValidatorMissedBlocksAmino[];
}
export interface GenesisStateAminoMsg {
    type: "cosmos-sdk/GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the slashing module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType | undefined;
    signing_infos: SigningInfoSDKType[];
    missed_blocks: ValidatorMissedBlocksSDKType[];
}
/** SigningInfo stores validator signing info of corresponding address. */
export interface SigningInfo {
    /** address is the validator address. */
    address: string;
    /** validator_signing_info represents the signing info of this validator. */
    validatorSigningInfo: ValidatorSigningInfo | undefined;
}
export interface SigningInfoProtoMsg {
    typeUrl: "/cosmos.slashing.v1beta1.SigningInfo";
    value: Uint8Array;
}
/** SigningInfo stores validator signing info of corresponding address. */
export interface SigningInfoAmino {
    /** address is the validator address. */
    address?: string;
    /** validator_signing_info represents the signing info of this validator. */
    validator_signing_info?: ValidatorSigningInfoAmino | undefined;
}
export interface SigningInfoAminoMsg {
    type: "cosmos-sdk/SigningInfo";
    value: SigningInfoAmino;
}
/** SigningInfo stores validator signing info of corresponding address. */
export interface SigningInfoSDKType {
    address: string;
    validator_signing_info: ValidatorSigningInfoSDKType | undefined;
}
/**
 * ValidatorMissedBlocks contains array of missed blocks of corresponding
 * address.
 */
export interface ValidatorMissedBlocks {
    /** address is the validator address. */
    address: string;
    /** missed_blocks is an array of missed blocks by the validator. */
    missedBlocks: MissedBlock[];
}
export interface ValidatorMissedBlocksProtoMsg {
    typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlocks";
    value: Uint8Array;
}
/**
 * ValidatorMissedBlocks contains array of missed blocks of corresponding
 * address.
 */
export interface ValidatorMissedBlocksAmino {
    /** address is the validator address. */
    address?: string;
    /** missed_blocks is an array of missed blocks by the validator. */
    missed_blocks?: MissedBlockAmino[];
}
export interface ValidatorMissedBlocksAminoMsg {
    type: "cosmos-sdk/ValidatorMissedBlocks";
    value: ValidatorMissedBlocksAmino;
}
/**
 * ValidatorMissedBlocks contains array of missed blocks of corresponding
 * address.
 */
export interface ValidatorMissedBlocksSDKType {
    address: string;
    missed_blocks: MissedBlockSDKType[];
}
/** MissedBlock contains height and missed status as boolean. */
export interface MissedBlock {
    /** index is the height at which the block was missed. */
    index: bigint;
    /** missed is the missed status. */
    missed: boolean;
}
export interface MissedBlockProtoMsg {
    typeUrl: "/cosmos.slashing.v1beta1.MissedBlock";
    value: Uint8Array;
}
/** MissedBlock contains height and missed status as boolean. */
export interface MissedBlockAmino {
    /** index is the height at which the block was missed. */
    index?: string;
    /** missed is the missed status. */
    missed?: boolean;
}
export interface MissedBlockAminoMsg {
    type: "cosmos-sdk/MissedBlock";
    value: MissedBlockAmino;
}
/** MissedBlock contains height and missed status as boolean. */
export interface MissedBlockSDKType {
    index: bigint;
    missed: boolean;
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
export declare const SigningInfo: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is SigningInfo;
    isSDK(o: any): o is SigningInfoSDKType;
    isAmino(o: any): o is SigningInfoAmino;
    encode(message: SigningInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SigningInfo;
    fromJSON(object: any): SigningInfo;
    toJSON(message: SigningInfo): unknown;
    fromPartial(object: DeepPartial<SigningInfo>): SigningInfo;
    fromSDK(object: SigningInfoSDKType): SigningInfo;
    toSDK(message: SigningInfo): SigningInfoSDKType;
    fromAmino(object: SigningInfoAmino): SigningInfo;
    toAmino(message: SigningInfo): SigningInfoAmino;
    fromAminoMsg(object: SigningInfoAminoMsg): SigningInfo;
    toAminoMsg(message: SigningInfo): SigningInfoAminoMsg;
    fromProtoMsg(message: SigningInfoProtoMsg): SigningInfo;
    toProto(message: SigningInfo): Uint8Array;
    toProtoMsg(message: SigningInfo): SigningInfoProtoMsg;
};
export declare const ValidatorMissedBlocks: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ValidatorMissedBlocks;
    isSDK(o: any): o is ValidatorMissedBlocksSDKType;
    isAmino(o: any): o is ValidatorMissedBlocksAmino;
    encode(message: ValidatorMissedBlocks, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ValidatorMissedBlocks;
    fromJSON(object: any): ValidatorMissedBlocks;
    toJSON(message: ValidatorMissedBlocks): unknown;
    fromPartial(object: DeepPartial<ValidatorMissedBlocks>): ValidatorMissedBlocks;
    fromSDK(object: ValidatorMissedBlocksSDKType): ValidatorMissedBlocks;
    toSDK(message: ValidatorMissedBlocks): ValidatorMissedBlocksSDKType;
    fromAmino(object: ValidatorMissedBlocksAmino): ValidatorMissedBlocks;
    toAmino(message: ValidatorMissedBlocks): ValidatorMissedBlocksAmino;
    fromAminoMsg(object: ValidatorMissedBlocksAminoMsg): ValidatorMissedBlocks;
    toAminoMsg(message: ValidatorMissedBlocks): ValidatorMissedBlocksAminoMsg;
    fromProtoMsg(message: ValidatorMissedBlocksProtoMsg): ValidatorMissedBlocks;
    toProto(message: ValidatorMissedBlocks): Uint8Array;
    toProtoMsg(message: ValidatorMissedBlocks): ValidatorMissedBlocksProtoMsg;
};
export declare const MissedBlock: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MissedBlock;
    isSDK(o: any): o is MissedBlockSDKType;
    isAmino(o: any): o is MissedBlockAmino;
    encode(message: MissedBlock, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MissedBlock;
    fromJSON(object: any): MissedBlock;
    toJSON(message: MissedBlock): unknown;
    fromPartial(object: DeepPartial<MissedBlock>): MissedBlock;
    fromSDK(object: MissedBlockSDKType): MissedBlock;
    toSDK(message: MissedBlock): MissedBlockSDKType;
    fromAmino(object: MissedBlockAmino): MissedBlock;
    toAmino(message: MissedBlock): MissedBlockAmino;
    fromAminoMsg(object: MissedBlockAminoMsg): MissedBlock;
    toAminoMsg(message: MissedBlock): MissedBlockAminoMsg;
    fromProtoMsg(message: MissedBlockProtoMsg): MissedBlock;
    toProto(message: MissedBlock): Uint8Array;
    toProtoMsg(message: MissedBlock): MissedBlockProtoMsg;
};
