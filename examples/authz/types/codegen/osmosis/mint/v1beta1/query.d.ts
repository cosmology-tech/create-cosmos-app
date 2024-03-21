import { Params, ParamsAmino, ParamsSDKType } from "./mint";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/osmosis.mint.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "osmosis/mint/query-params-request";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params | undefined;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/osmosis.mint.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino | undefined;
}
export interface QueryParamsResponseAminoMsg {
    type: "osmosis/mint/query-params-response";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType | undefined;
}
/**
 * QueryEpochProvisionsRequest is the request type for the
 * Query/EpochProvisions RPC method.
 */
export interface QueryEpochProvisionsRequest {
}
export interface QueryEpochProvisionsRequestProtoMsg {
    typeUrl: "/osmosis.mint.v1beta1.QueryEpochProvisionsRequest";
    value: Uint8Array;
}
/**
 * QueryEpochProvisionsRequest is the request type for the
 * Query/EpochProvisions RPC method.
 */
export interface QueryEpochProvisionsRequestAmino {
}
export interface QueryEpochProvisionsRequestAminoMsg {
    type: "osmosis/mint/query-epoch-provisions-request";
    value: QueryEpochProvisionsRequestAmino;
}
/**
 * QueryEpochProvisionsRequest is the request type for the
 * Query/EpochProvisions RPC method.
 */
export interface QueryEpochProvisionsRequestSDKType {
}
/**
 * QueryEpochProvisionsResponse is the response type for the
 * Query/EpochProvisions RPC method.
 */
export interface QueryEpochProvisionsResponse {
    /** epoch_provisions is the current minting per epoch provisions value. */
    epochProvisions: Uint8Array;
}
export interface QueryEpochProvisionsResponseProtoMsg {
    typeUrl: "/osmosis.mint.v1beta1.QueryEpochProvisionsResponse";
    value: Uint8Array;
}
/**
 * QueryEpochProvisionsResponse is the response type for the
 * Query/EpochProvisions RPC method.
 */
export interface QueryEpochProvisionsResponseAmino {
    /** epoch_provisions is the current minting per epoch provisions value. */
    epoch_provisions?: string;
}
export interface QueryEpochProvisionsResponseAminoMsg {
    type: "osmosis/mint/query-epoch-provisions-response";
    value: QueryEpochProvisionsResponseAmino;
}
/**
 * QueryEpochProvisionsResponse is the response type for the
 * Query/EpochProvisions RPC method.
 */
export interface QueryEpochProvisionsResponseSDKType {
    epoch_provisions: Uint8Array;
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryParamsRequest;
    isSDK(o: any): o is QueryParamsRequestSDKType;
    isAmino(o: any): o is QueryParamsRequestAmino;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
    fromSDK(_: QueryParamsRequestSDKType): QueryParamsRequest;
    toSDK(_: QueryParamsRequest): QueryParamsRequestSDKType;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryParamsResponse;
    isSDK(o: any): o is QueryParamsResponseSDKType;
    isAmino(o: any): o is QueryParamsResponseAmino;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
    fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse;
    toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryEpochProvisionsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryEpochProvisionsRequest;
    isSDK(o: any): o is QueryEpochProvisionsRequestSDKType;
    isAmino(o: any): o is QueryEpochProvisionsRequestAmino;
    encode(_: QueryEpochProvisionsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochProvisionsRequest;
    fromJSON(_: any): QueryEpochProvisionsRequest;
    toJSON(_: QueryEpochProvisionsRequest): unknown;
    fromPartial(_: DeepPartial<QueryEpochProvisionsRequest>): QueryEpochProvisionsRequest;
    fromSDK(_: QueryEpochProvisionsRequestSDKType): QueryEpochProvisionsRequest;
    toSDK(_: QueryEpochProvisionsRequest): QueryEpochProvisionsRequestSDKType;
    fromAmino(_: QueryEpochProvisionsRequestAmino): QueryEpochProvisionsRequest;
    toAmino(_: QueryEpochProvisionsRequest): QueryEpochProvisionsRequestAmino;
    fromAminoMsg(object: QueryEpochProvisionsRequestAminoMsg): QueryEpochProvisionsRequest;
    toAminoMsg(message: QueryEpochProvisionsRequest): QueryEpochProvisionsRequestAminoMsg;
    fromProtoMsg(message: QueryEpochProvisionsRequestProtoMsg): QueryEpochProvisionsRequest;
    toProto(message: QueryEpochProvisionsRequest): Uint8Array;
    toProtoMsg(message: QueryEpochProvisionsRequest): QueryEpochProvisionsRequestProtoMsg;
};
export declare const QueryEpochProvisionsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryEpochProvisionsResponse;
    isSDK(o: any): o is QueryEpochProvisionsResponseSDKType;
    isAmino(o: any): o is QueryEpochProvisionsResponseAmino;
    encode(message: QueryEpochProvisionsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochProvisionsResponse;
    fromJSON(object: any): QueryEpochProvisionsResponse;
    toJSON(message: QueryEpochProvisionsResponse): unknown;
    fromPartial(object: DeepPartial<QueryEpochProvisionsResponse>): QueryEpochProvisionsResponse;
    fromSDK(object: QueryEpochProvisionsResponseSDKType): QueryEpochProvisionsResponse;
    toSDK(message: QueryEpochProvisionsResponse): QueryEpochProvisionsResponseSDKType;
    fromAmino(object: QueryEpochProvisionsResponseAmino): QueryEpochProvisionsResponse;
    toAmino(message: QueryEpochProvisionsResponse): QueryEpochProvisionsResponseAmino;
    fromAminoMsg(object: QueryEpochProvisionsResponseAminoMsg): QueryEpochProvisionsResponse;
    toAminoMsg(message: QueryEpochProvisionsResponse): QueryEpochProvisionsResponseAminoMsg;
    fromProtoMsg(message: QueryEpochProvisionsResponseProtoMsg): QueryEpochProvisionsResponse;
    toProto(message: QueryEpochProvisionsResponse): Uint8Array;
    toProtoMsg(message: QueryEpochProvisionsResponse): QueryEpochProvisionsResponseProtoMsg;
};
