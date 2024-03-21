import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** Params defines the parameters for the ibc-rate-limit module. */
export interface Params {
    contractAddress: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/osmosis.ibcratelimit.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the ibc-rate-limit module. */
export interface ParamsAmino {
    contract_address?: string;
}
export interface ParamsAminoMsg {
    type: "osmosis/ibcratelimit/params";
    value: ParamsAmino;
}
/** Params defines the parameters for the ibc-rate-limit module. */
export interface ParamsSDKType {
    contract_address: string;
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
