import { DenomTrace, DenomTraceAmino, DenomTraceSDKType, Params, ParamsAmino, ParamsSDKType } from "./transfer";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/** GenesisState defines the ibc-transfer genesis state */
export interface GenesisState {
    portId: string;
    denomTraces: DenomTrace[];
    params: Params | undefined;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the ibc-transfer genesis state */
export interface GenesisStateAmino {
    port_id?: string;
    denom_traces?: DenomTraceAmino[];
    params?: ParamsAmino | undefined;
}
export interface GenesisStateAminoMsg {
    type: "cosmos-sdk/GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the ibc-transfer genesis state */
export interface GenesisStateSDKType {
    port_id: string;
    denom_traces: DenomTraceSDKType[];
    params: ParamsSDKType | undefined;
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
