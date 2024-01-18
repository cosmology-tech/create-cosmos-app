import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */
export interface Equivocation {
    height: bigint;
    time: Date | undefined;
    power: bigint;
    consensusAddress: string;
}
export interface EquivocationProtoMsg {
    typeUrl: "/cosmos.evidence.v1beta1.Equivocation";
    value: Uint8Array;
}
/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */
export interface EquivocationAmino {
    height?: string;
    time?: string | undefined;
    power?: string;
    consensus_address?: string;
}
export interface EquivocationAminoMsg {
    type: "cosmos-sdk/Equivocation";
    value: EquivocationAmino;
}
/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */
export interface EquivocationSDKType {
    height: bigint;
    time: Date | undefined;
    power: bigint;
    consensus_address: string;
}
export declare const Equivocation: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Equivocation;
    isSDK(o: any): o is EquivocationSDKType;
    isAmino(o: any): o is EquivocationAmino;
    encode(message: Equivocation, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Equivocation;
    fromJSON(object: any): Equivocation;
    toJSON(message: Equivocation): unknown;
    fromPartial(object: DeepPartial<Equivocation>): Equivocation;
    fromSDK(object: EquivocationSDKType): Equivocation;
    toSDK(message: Equivocation): EquivocationSDKType;
    fromAmino(object: EquivocationAmino): Equivocation;
    toAmino(message: Equivocation): EquivocationAmino;
    fromAminoMsg(object: EquivocationAminoMsg): Equivocation;
    toAminoMsg(message: Equivocation): EquivocationAminoMsg;
    fromProtoMsg(message: EquivocationProtoMsg): Equivocation;
    toProto(message: Equivocation): Uint8Array;
    toProtoMsg(message: Equivocation): EquivocationProtoMsg;
};
