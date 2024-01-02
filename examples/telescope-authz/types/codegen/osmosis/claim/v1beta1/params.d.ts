import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** Params defines the claim module's parameters. */
export interface Params {
    airdropStartTime: Date | undefined;
    durationUntilDecay: Duration | undefined;
    durationOfDecay: Duration | undefined;
    /** denom of claimable asset */
    claimDenom: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/osmosis.claim.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the claim module's parameters. */
export interface ParamsAmino {
    airdrop_start_time?: string | undefined;
    duration_until_decay?: DurationAmino | undefined;
    duration_of_decay?: DurationAmino | undefined;
    /** denom of claimable asset */
    claim_denom?: string;
}
export interface ParamsAminoMsg {
    type: "osmosis/claim/params";
    value: ParamsAmino;
}
/** Params defines the claim module's parameters. */
export interface ParamsSDKType {
    airdrop_start_time: Date | undefined;
    duration_until_decay: DurationSDKType | undefined;
    duration_of_decay: DurationSDKType | undefined;
    claim_denom: string;
}
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
