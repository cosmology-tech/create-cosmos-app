import { EpochInfo, EpochInfoAmino, EpochInfoSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
export interface QueryEpochsInfoRequest {
}
export interface QueryEpochsInfoRequestProtoMsg {
    typeUrl: "/osmosis.epochs.v1beta1.QueryEpochsInfoRequest";
    value: Uint8Array;
}
export interface QueryEpochsInfoRequestAmino {
}
export interface QueryEpochsInfoRequestAminoMsg {
    type: "osmosis/epochs/query-epochs-info-request";
    value: QueryEpochsInfoRequestAmino;
}
export interface QueryEpochsInfoRequestSDKType {
}
export interface QueryEpochsInfoResponse {
    epochs: EpochInfo[];
}
export interface QueryEpochsInfoResponseProtoMsg {
    typeUrl: "/osmosis.epochs.v1beta1.QueryEpochsInfoResponse";
    value: Uint8Array;
}
export interface QueryEpochsInfoResponseAmino {
    epochs?: EpochInfoAmino[];
}
export interface QueryEpochsInfoResponseAminoMsg {
    type: "osmosis/epochs/query-epochs-info-response";
    value: QueryEpochsInfoResponseAmino;
}
export interface QueryEpochsInfoResponseSDKType {
    epochs: EpochInfoSDKType[];
}
export interface QueryCurrentEpochRequest {
    identifier: string;
}
export interface QueryCurrentEpochRequestProtoMsg {
    typeUrl: "/osmosis.epochs.v1beta1.QueryCurrentEpochRequest";
    value: Uint8Array;
}
export interface QueryCurrentEpochRequestAmino {
    identifier?: string;
}
export interface QueryCurrentEpochRequestAminoMsg {
    type: "osmosis/epochs/query-current-epoch-request";
    value: QueryCurrentEpochRequestAmino;
}
export interface QueryCurrentEpochRequestSDKType {
    identifier: string;
}
export interface QueryCurrentEpochResponse {
    currentEpoch: bigint;
}
export interface QueryCurrentEpochResponseProtoMsg {
    typeUrl: "/osmosis.epochs.v1beta1.QueryCurrentEpochResponse";
    value: Uint8Array;
}
export interface QueryCurrentEpochResponseAmino {
    current_epoch?: string;
}
export interface QueryCurrentEpochResponseAminoMsg {
    type: "osmosis/epochs/query-current-epoch-response";
    value: QueryCurrentEpochResponseAmino;
}
export interface QueryCurrentEpochResponseSDKType {
    current_epoch: bigint;
}
export declare const QueryEpochsInfoRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryEpochsInfoRequest;
    isSDK(o: any): o is QueryEpochsInfoRequestSDKType;
    isAmino(o: any): o is QueryEpochsInfoRequestAmino;
    encode(_: QueryEpochsInfoRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochsInfoRequest;
    fromJSON(_: any): QueryEpochsInfoRequest;
    toJSON(_: QueryEpochsInfoRequest): unknown;
    fromPartial(_: DeepPartial<QueryEpochsInfoRequest>): QueryEpochsInfoRequest;
    fromSDK(_: QueryEpochsInfoRequestSDKType): QueryEpochsInfoRequest;
    toSDK(_: QueryEpochsInfoRequest): QueryEpochsInfoRequestSDKType;
    fromAmino(_: QueryEpochsInfoRequestAmino): QueryEpochsInfoRequest;
    toAmino(_: QueryEpochsInfoRequest): QueryEpochsInfoRequestAmino;
    fromAminoMsg(object: QueryEpochsInfoRequestAminoMsg): QueryEpochsInfoRequest;
    toAminoMsg(message: QueryEpochsInfoRequest): QueryEpochsInfoRequestAminoMsg;
    fromProtoMsg(message: QueryEpochsInfoRequestProtoMsg): QueryEpochsInfoRequest;
    toProto(message: QueryEpochsInfoRequest): Uint8Array;
    toProtoMsg(message: QueryEpochsInfoRequest): QueryEpochsInfoRequestProtoMsg;
};
export declare const QueryEpochsInfoResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryEpochsInfoResponse;
    isSDK(o: any): o is QueryEpochsInfoResponseSDKType;
    isAmino(o: any): o is QueryEpochsInfoResponseAmino;
    encode(message: QueryEpochsInfoResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochsInfoResponse;
    fromJSON(object: any): QueryEpochsInfoResponse;
    toJSON(message: QueryEpochsInfoResponse): unknown;
    fromPartial(object: DeepPartial<QueryEpochsInfoResponse>): QueryEpochsInfoResponse;
    fromSDK(object: QueryEpochsInfoResponseSDKType): QueryEpochsInfoResponse;
    toSDK(message: QueryEpochsInfoResponse): QueryEpochsInfoResponseSDKType;
    fromAmino(object: QueryEpochsInfoResponseAmino): QueryEpochsInfoResponse;
    toAmino(message: QueryEpochsInfoResponse): QueryEpochsInfoResponseAmino;
    fromAminoMsg(object: QueryEpochsInfoResponseAminoMsg): QueryEpochsInfoResponse;
    toAminoMsg(message: QueryEpochsInfoResponse): QueryEpochsInfoResponseAminoMsg;
    fromProtoMsg(message: QueryEpochsInfoResponseProtoMsg): QueryEpochsInfoResponse;
    toProto(message: QueryEpochsInfoResponse): Uint8Array;
    toProtoMsg(message: QueryEpochsInfoResponse): QueryEpochsInfoResponseProtoMsg;
};
export declare const QueryCurrentEpochRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryCurrentEpochRequest;
    isSDK(o: any): o is QueryCurrentEpochRequestSDKType;
    isAmino(o: any): o is QueryCurrentEpochRequestAmino;
    encode(message: QueryCurrentEpochRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentEpochRequest;
    fromJSON(object: any): QueryCurrentEpochRequest;
    toJSON(message: QueryCurrentEpochRequest): unknown;
    fromPartial(object: DeepPartial<QueryCurrentEpochRequest>): QueryCurrentEpochRequest;
    fromSDK(object: QueryCurrentEpochRequestSDKType): QueryCurrentEpochRequest;
    toSDK(message: QueryCurrentEpochRequest): QueryCurrentEpochRequestSDKType;
    fromAmino(object: QueryCurrentEpochRequestAmino): QueryCurrentEpochRequest;
    toAmino(message: QueryCurrentEpochRequest): QueryCurrentEpochRequestAmino;
    fromAminoMsg(object: QueryCurrentEpochRequestAminoMsg): QueryCurrentEpochRequest;
    toAminoMsg(message: QueryCurrentEpochRequest): QueryCurrentEpochRequestAminoMsg;
    fromProtoMsg(message: QueryCurrentEpochRequestProtoMsg): QueryCurrentEpochRequest;
    toProto(message: QueryCurrentEpochRequest): Uint8Array;
    toProtoMsg(message: QueryCurrentEpochRequest): QueryCurrentEpochRequestProtoMsg;
};
export declare const QueryCurrentEpochResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryCurrentEpochResponse;
    isSDK(o: any): o is QueryCurrentEpochResponseSDKType;
    isAmino(o: any): o is QueryCurrentEpochResponseAmino;
    encode(message: QueryCurrentEpochResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentEpochResponse;
    fromJSON(object: any): QueryCurrentEpochResponse;
    toJSON(message: QueryCurrentEpochResponse): unknown;
    fromPartial(object: DeepPartial<QueryCurrentEpochResponse>): QueryCurrentEpochResponse;
    fromSDK(object: QueryCurrentEpochResponseSDKType): QueryCurrentEpochResponse;
    toSDK(message: QueryCurrentEpochResponse): QueryCurrentEpochResponseSDKType;
    fromAmino(object: QueryCurrentEpochResponseAmino): QueryCurrentEpochResponse;
    toAmino(message: QueryCurrentEpochResponse): QueryCurrentEpochResponseAmino;
    fromAminoMsg(object: QueryCurrentEpochResponseAminoMsg): QueryCurrentEpochResponse;
    toAminoMsg(message: QueryCurrentEpochResponse): QueryCurrentEpochResponseAminoMsg;
    fromProtoMsg(message: QueryCurrentEpochResponseProtoMsg): QueryCurrentEpochResponse;
    toProto(message: QueryCurrentEpochResponse): Uint8Array;
    toProtoMsg(message: QueryCurrentEpochResponse): QueryCurrentEpochResponseProtoMsg;
};
