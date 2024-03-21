import { Params, ParamsAmino, ParamsSDKType } from "./mint";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/cosmos.mint.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "cosmos-sdk/QueryParamsRequest";
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
    typeUrl: "/cosmos.mint.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino | undefined;
}
export interface QueryParamsResponseAminoMsg {
    type: "cosmos-sdk/QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType | undefined;
}
/** QueryInflationRequest is the request type for the Query/Inflation RPC method. */
export interface QueryInflationRequest {
}
export interface QueryInflationRequestProtoMsg {
    typeUrl: "/cosmos.mint.v1beta1.QueryInflationRequest";
    value: Uint8Array;
}
/** QueryInflationRequest is the request type for the Query/Inflation RPC method. */
export interface QueryInflationRequestAmino {
}
export interface QueryInflationRequestAminoMsg {
    type: "cosmos-sdk/QueryInflationRequest";
    value: QueryInflationRequestAmino;
}
/** QueryInflationRequest is the request type for the Query/Inflation RPC method. */
export interface QueryInflationRequestSDKType {
}
/**
 * QueryInflationResponse is the response type for the Query/Inflation RPC
 * method.
 */
export interface QueryInflationResponse {
    /** inflation is the current minting inflation value. */
    inflation: Uint8Array;
}
export interface QueryInflationResponseProtoMsg {
    typeUrl: "/cosmos.mint.v1beta1.QueryInflationResponse";
    value: Uint8Array;
}
/**
 * QueryInflationResponse is the response type for the Query/Inflation RPC
 * method.
 */
export interface QueryInflationResponseAmino {
    /** inflation is the current minting inflation value. */
    inflation?: string;
}
export interface QueryInflationResponseAminoMsg {
    type: "cosmos-sdk/QueryInflationResponse";
    value: QueryInflationResponseAmino;
}
/**
 * QueryInflationResponse is the response type for the Query/Inflation RPC
 * method.
 */
export interface QueryInflationResponseSDKType {
    inflation: Uint8Array;
}
/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsRequest {
}
export interface QueryAnnualProvisionsRequestProtoMsg {
    typeUrl: "/cosmos.mint.v1beta1.QueryAnnualProvisionsRequest";
    value: Uint8Array;
}
/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsRequestAmino {
}
export interface QueryAnnualProvisionsRequestAminoMsg {
    type: "cosmos-sdk/QueryAnnualProvisionsRequest";
    value: QueryAnnualProvisionsRequestAmino;
}
/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsRequestSDKType {
}
/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsResponse {
    /** annual_provisions is the current minting annual provisions value. */
    annualProvisions: Uint8Array;
}
export interface QueryAnnualProvisionsResponseProtoMsg {
    typeUrl: "/cosmos.mint.v1beta1.QueryAnnualProvisionsResponse";
    value: Uint8Array;
}
/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsResponseAmino {
    /** annual_provisions is the current minting annual provisions value. */
    annual_provisions?: string;
}
export interface QueryAnnualProvisionsResponseAminoMsg {
    type: "cosmos-sdk/QueryAnnualProvisionsResponse";
    value: QueryAnnualProvisionsResponseAmino;
}
/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsResponseSDKType {
    annual_provisions: Uint8Array;
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
export declare const QueryInflationRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryInflationRequest;
    isSDK(o: any): o is QueryInflationRequestSDKType;
    isAmino(o: any): o is QueryInflationRequestAmino;
    encode(_: QueryInflationRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryInflationRequest;
    fromJSON(_: any): QueryInflationRequest;
    toJSON(_: QueryInflationRequest): unknown;
    fromPartial(_: DeepPartial<QueryInflationRequest>): QueryInflationRequest;
    fromSDK(_: QueryInflationRequestSDKType): QueryInflationRequest;
    toSDK(_: QueryInflationRequest): QueryInflationRequestSDKType;
    fromAmino(_: QueryInflationRequestAmino): QueryInflationRequest;
    toAmino(_: QueryInflationRequest): QueryInflationRequestAmino;
    fromAminoMsg(object: QueryInflationRequestAminoMsg): QueryInflationRequest;
    toAminoMsg(message: QueryInflationRequest): QueryInflationRequestAminoMsg;
    fromProtoMsg(message: QueryInflationRequestProtoMsg): QueryInflationRequest;
    toProto(message: QueryInflationRequest): Uint8Array;
    toProtoMsg(message: QueryInflationRequest): QueryInflationRequestProtoMsg;
};
export declare const QueryInflationResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryInflationResponse;
    isSDK(o: any): o is QueryInflationResponseSDKType;
    isAmino(o: any): o is QueryInflationResponseAmino;
    encode(message: QueryInflationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryInflationResponse;
    fromJSON(object: any): QueryInflationResponse;
    toJSON(message: QueryInflationResponse): unknown;
    fromPartial(object: DeepPartial<QueryInflationResponse>): QueryInflationResponse;
    fromSDK(object: QueryInflationResponseSDKType): QueryInflationResponse;
    toSDK(message: QueryInflationResponse): QueryInflationResponseSDKType;
    fromAmino(object: QueryInflationResponseAmino): QueryInflationResponse;
    toAmino(message: QueryInflationResponse): QueryInflationResponseAmino;
    fromAminoMsg(object: QueryInflationResponseAminoMsg): QueryInflationResponse;
    toAminoMsg(message: QueryInflationResponse): QueryInflationResponseAminoMsg;
    fromProtoMsg(message: QueryInflationResponseProtoMsg): QueryInflationResponse;
    toProto(message: QueryInflationResponse): Uint8Array;
    toProtoMsg(message: QueryInflationResponse): QueryInflationResponseProtoMsg;
};
export declare const QueryAnnualProvisionsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryAnnualProvisionsRequest;
    isSDK(o: any): o is QueryAnnualProvisionsRequestSDKType;
    isAmino(o: any): o is QueryAnnualProvisionsRequestAmino;
    encode(_: QueryAnnualProvisionsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAnnualProvisionsRequest;
    fromJSON(_: any): QueryAnnualProvisionsRequest;
    toJSON(_: QueryAnnualProvisionsRequest): unknown;
    fromPartial(_: DeepPartial<QueryAnnualProvisionsRequest>): QueryAnnualProvisionsRequest;
    fromSDK(_: QueryAnnualProvisionsRequestSDKType): QueryAnnualProvisionsRequest;
    toSDK(_: QueryAnnualProvisionsRequest): QueryAnnualProvisionsRequestSDKType;
    fromAmino(_: QueryAnnualProvisionsRequestAmino): QueryAnnualProvisionsRequest;
    toAmino(_: QueryAnnualProvisionsRequest): QueryAnnualProvisionsRequestAmino;
    fromAminoMsg(object: QueryAnnualProvisionsRequestAminoMsg): QueryAnnualProvisionsRequest;
    toAminoMsg(message: QueryAnnualProvisionsRequest): QueryAnnualProvisionsRequestAminoMsg;
    fromProtoMsg(message: QueryAnnualProvisionsRequestProtoMsg): QueryAnnualProvisionsRequest;
    toProto(message: QueryAnnualProvisionsRequest): Uint8Array;
    toProtoMsg(message: QueryAnnualProvisionsRequest): QueryAnnualProvisionsRequestProtoMsg;
};
export declare const QueryAnnualProvisionsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryAnnualProvisionsResponse;
    isSDK(o: any): o is QueryAnnualProvisionsResponseSDKType;
    isAmino(o: any): o is QueryAnnualProvisionsResponseAmino;
    encode(message: QueryAnnualProvisionsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAnnualProvisionsResponse;
    fromJSON(object: any): QueryAnnualProvisionsResponse;
    toJSON(message: QueryAnnualProvisionsResponse): unknown;
    fromPartial(object: DeepPartial<QueryAnnualProvisionsResponse>): QueryAnnualProvisionsResponse;
    fromSDK(object: QueryAnnualProvisionsResponseSDKType): QueryAnnualProvisionsResponse;
    toSDK(message: QueryAnnualProvisionsResponse): QueryAnnualProvisionsResponseSDKType;
    fromAmino(object: QueryAnnualProvisionsResponseAmino): QueryAnnualProvisionsResponse;
    toAmino(message: QueryAnnualProvisionsResponse): QueryAnnualProvisionsResponseAmino;
    fromAminoMsg(object: QueryAnnualProvisionsResponseAminoMsg): QueryAnnualProvisionsResponse;
    toAminoMsg(message: QueryAnnualProvisionsResponse): QueryAnnualProvisionsResponseAminoMsg;
    fromProtoMsg(message: QueryAnnualProvisionsResponseProtoMsg): QueryAnnualProvisionsResponse;
    toProto(message: QueryAnnualProvisionsResponse): Uint8Array;
    toProtoMsg(message: QueryAnnualProvisionsResponse): QueryAnnualProvisionsResponseProtoMsg;
};
