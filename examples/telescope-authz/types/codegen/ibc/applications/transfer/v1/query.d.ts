import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { DenomTrace, DenomTraceAmino, DenomTraceSDKType, Params, ParamsAmino, ParamsSDKType } from "./transfer";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * QueryDenomTraceRequest is the request type for the Query/DenomTrace RPC
 * method
 */
export interface QueryDenomTraceRequest {
    /** hash (in hex format) of the denomination trace information. */
    hash: string;
}
export interface QueryDenomTraceRequestProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceRequest";
    value: Uint8Array;
}
/**
 * QueryDenomTraceRequest is the request type for the Query/DenomTrace RPC
 * method
 */
export interface QueryDenomTraceRequestAmino {
    /** hash (in hex format) of the denomination trace information. */
    hash?: string;
}
export interface QueryDenomTraceRequestAminoMsg {
    type: "cosmos-sdk/QueryDenomTraceRequest";
    value: QueryDenomTraceRequestAmino;
}
/**
 * QueryDenomTraceRequest is the request type for the Query/DenomTrace RPC
 * method
 */
export interface QueryDenomTraceRequestSDKType {
    hash: string;
}
/**
 * QueryDenomTraceResponse is the response type for the Query/DenomTrace RPC
 * method.
 */
export interface QueryDenomTraceResponse {
    /** denom_trace returns the requested denomination trace information. */
    denomTrace?: DenomTrace | undefined;
}
export interface QueryDenomTraceResponseProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceResponse";
    value: Uint8Array;
}
/**
 * QueryDenomTraceResponse is the response type for the Query/DenomTrace RPC
 * method.
 */
export interface QueryDenomTraceResponseAmino {
    /** denom_trace returns the requested denomination trace information. */
    denom_trace?: DenomTraceAmino | undefined;
}
export interface QueryDenomTraceResponseAminoMsg {
    type: "cosmos-sdk/QueryDenomTraceResponse";
    value: QueryDenomTraceResponseAmino;
}
/**
 * QueryDenomTraceResponse is the response type for the Query/DenomTrace RPC
 * method.
 */
export interface QueryDenomTraceResponseSDKType {
    denom_trace?: DenomTraceSDKType | undefined;
}
/**
 * QueryConnectionsRequest is the request type for the Query/DenomTraces RPC
 * method
 */
export interface QueryDenomTracesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
export interface QueryDenomTracesRequestProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesRequest";
    value: Uint8Array;
}
/**
 * QueryConnectionsRequest is the request type for the Query/DenomTraces RPC
 * method
 */
export interface QueryDenomTracesRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino | undefined;
}
export interface QueryDenomTracesRequestAminoMsg {
    type: "cosmos-sdk/QueryDenomTracesRequest";
    value: QueryDenomTracesRequestAmino;
}
/**
 * QueryConnectionsRequest is the request type for the Query/DenomTraces RPC
 * method
 */
export interface QueryDenomTracesRequestSDKType {
    pagination?: PageRequestSDKType | undefined;
}
/**
 * QueryConnectionsResponse is the response type for the Query/DenomTraces RPC
 * method.
 */
export interface QueryDenomTracesResponse {
    /** denom_traces returns all denominations trace information. */
    denomTraces: DenomTrace[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
export interface QueryDenomTracesResponseProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesResponse";
    value: Uint8Array;
}
/**
 * QueryConnectionsResponse is the response type for the Query/DenomTraces RPC
 * method.
 */
export interface QueryDenomTracesResponseAmino {
    /** denom_traces returns all denominations trace information. */
    denom_traces?: DenomTraceAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino | undefined;
}
export interface QueryDenomTracesResponseAminoMsg {
    type: "cosmos-sdk/QueryDenomTracesResponse";
    value: QueryDenomTracesResponseAmino;
}
/**
 * QueryConnectionsResponse is the response type for the Query/DenomTraces RPC
 * method.
 */
export interface QueryDenomTracesResponseSDKType {
    denom_traces: DenomTraceSDKType[];
    pagination?: PageResponseSDKType | undefined;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.QueryParamsRequest";
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
    params?: Params | undefined;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.QueryParamsResponse";
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
    params?: ParamsSDKType | undefined;
}
export declare const QueryDenomTraceRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDenomTraceRequest;
    isSDK(o: any): o is QueryDenomTraceRequestSDKType;
    isAmino(o: any): o is QueryDenomTraceRequestAmino;
    encode(message: QueryDenomTraceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomTraceRequest;
    fromJSON(object: any): QueryDenomTraceRequest;
    toJSON(message: QueryDenomTraceRequest): unknown;
    fromPartial(object: DeepPartial<QueryDenomTraceRequest>): QueryDenomTraceRequest;
    fromSDK(object: QueryDenomTraceRequestSDKType): QueryDenomTraceRequest;
    toSDK(message: QueryDenomTraceRequest): QueryDenomTraceRequestSDKType;
    fromAmino(object: QueryDenomTraceRequestAmino): QueryDenomTraceRequest;
    toAmino(message: QueryDenomTraceRequest): QueryDenomTraceRequestAmino;
    fromAminoMsg(object: QueryDenomTraceRequestAminoMsg): QueryDenomTraceRequest;
    toAminoMsg(message: QueryDenomTraceRequest): QueryDenomTraceRequestAminoMsg;
    fromProtoMsg(message: QueryDenomTraceRequestProtoMsg): QueryDenomTraceRequest;
    toProto(message: QueryDenomTraceRequest): Uint8Array;
    toProtoMsg(message: QueryDenomTraceRequest): QueryDenomTraceRequestProtoMsg;
};
export declare const QueryDenomTraceResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDenomTraceResponse;
    isSDK(o: any): o is QueryDenomTraceResponseSDKType;
    isAmino(o: any): o is QueryDenomTraceResponseAmino;
    encode(message: QueryDenomTraceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomTraceResponse;
    fromJSON(object: any): QueryDenomTraceResponse;
    toJSON(message: QueryDenomTraceResponse): unknown;
    fromPartial(object: DeepPartial<QueryDenomTraceResponse>): QueryDenomTraceResponse;
    fromSDK(object: QueryDenomTraceResponseSDKType): QueryDenomTraceResponse;
    toSDK(message: QueryDenomTraceResponse): QueryDenomTraceResponseSDKType;
    fromAmino(object: QueryDenomTraceResponseAmino): QueryDenomTraceResponse;
    toAmino(message: QueryDenomTraceResponse): QueryDenomTraceResponseAmino;
    fromAminoMsg(object: QueryDenomTraceResponseAminoMsg): QueryDenomTraceResponse;
    toAminoMsg(message: QueryDenomTraceResponse): QueryDenomTraceResponseAminoMsg;
    fromProtoMsg(message: QueryDenomTraceResponseProtoMsg): QueryDenomTraceResponse;
    toProto(message: QueryDenomTraceResponse): Uint8Array;
    toProtoMsg(message: QueryDenomTraceResponse): QueryDenomTraceResponseProtoMsg;
};
export declare const QueryDenomTracesRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDenomTracesRequest;
    isSDK(o: any): o is QueryDenomTracesRequestSDKType;
    isAmino(o: any): o is QueryDenomTracesRequestAmino;
    encode(message: QueryDenomTracesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomTracesRequest;
    fromJSON(object: any): QueryDenomTracesRequest;
    toJSON(message: QueryDenomTracesRequest): unknown;
    fromPartial(object: DeepPartial<QueryDenomTracesRequest>): QueryDenomTracesRequest;
    fromSDK(object: QueryDenomTracesRequestSDKType): QueryDenomTracesRequest;
    toSDK(message: QueryDenomTracesRequest): QueryDenomTracesRequestSDKType;
    fromAmino(object: QueryDenomTracesRequestAmino): QueryDenomTracesRequest;
    toAmino(message: QueryDenomTracesRequest): QueryDenomTracesRequestAmino;
    fromAminoMsg(object: QueryDenomTracesRequestAminoMsg): QueryDenomTracesRequest;
    toAminoMsg(message: QueryDenomTracesRequest): QueryDenomTracesRequestAminoMsg;
    fromProtoMsg(message: QueryDenomTracesRequestProtoMsg): QueryDenomTracesRequest;
    toProto(message: QueryDenomTracesRequest): Uint8Array;
    toProtoMsg(message: QueryDenomTracesRequest): QueryDenomTracesRequestProtoMsg;
};
export declare const QueryDenomTracesResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDenomTracesResponse;
    isSDK(o: any): o is QueryDenomTracesResponseSDKType;
    isAmino(o: any): o is QueryDenomTracesResponseAmino;
    encode(message: QueryDenomTracesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomTracesResponse;
    fromJSON(object: any): QueryDenomTracesResponse;
    toJSON(message: QueryDenomTracesResponse): unknown;
    fromPartial(object: DeepPartial<QueryDenomTracesResponse>): QueryDenomTracesResponse;
    fromSDK(object: QueryDenomTracesResponseSDKType): QueryDenomTracesResponse;
    toSDK(message: QueryDenomTracesResponse): QueryDenomTracesResponseSDKType;
    fromAmino(object: QueryDenomTracesResponseAmino): QueryDenomTracesResponse;
    toAmino(message: QueryDenomTracesResponse): QueryDenomTracesResponseAmino;
    fromAminoMsg(object: QueryDenomTracesResponseAminoMsg): QueryDenomTracesResponse;
    toAminoMsg(message: QueryDenomTracesResponse): QueryDenomTracesResponseAminoMsg;
    fromProtoMsg(message: QueryDenomTracesResponseProtoMsg): QueryDenomTracesResponse;
    toProto(message: QueryDenomTracesResponse): Uint8Array;
    toProtoMsg(message: QueryDenomTracesResponse): QueryDenomTracesResponseProtoMsg;
};
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
