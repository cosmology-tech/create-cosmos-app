import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { DenomAuthorityMetadata, DenomAuthorityMetadataAmino, DenomAuthorityMetadataSDKType } from "./authorityMetadata";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "osmosis/tokenfactory/query-params-request";
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
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino | undefined;
}
export interface QueryParamsResponseAminoMsg {
    type: "osmosis/tokenfactory/query-params-response";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType | undefined;
}
/**
 * QueryDenomAuthorityMetadataRequest defines the request structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataRequest {
    denom: string;
}
export interface QueryDenomAuthorityMetadataRequestProtoMsg {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest";
    value: Uint8Array;
}
/**
 * QueryDenomAuthorityMetadataRequest defines the request structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataRequestAmino {
    denom?: string;
}
export interface QueryDenomAuthorityMetadataRequestAminoMsg {
    type: "osmosis/tokenfactory/query-denom-authority-metadata-request";
    value: QueryDenomAuthorityMetadataRequestAmino;
}
/**
 * QueryDenomAuthorityMetadataRequest defines the request structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataRequestSDKType {
    denom: string;
}
/**
 * QueryDenomAuthorityMetadataResponse defines the response structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataResponse {
    authorityMetadata: DenomAuthorityMetadata | undefined;
}
export interface QueryDenomAuthorityMetadataResponseProtoMsg {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse";
    value: Uint8Array;
}
/**
 * QueryDenomAuthorityMetadataResponse defines the response structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataResponseAmino {
    authority_metadata?: DenomAuthorityMetadataAmino | undefined;
}
export interface QueryDenomAuthorityMetadataResponseAminoMsg {
    type: "osmosis/tokenfactory/query-denom-authority-metadata-response";
    value: QueryDenomAuthorityMetadataResponseAmino;
}
/**
 * QueryDenomAuthorityMetadataResponse defines the response structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataResponseSDKType {
    authority_metadata: DenomAuthorityMetadataSDKType | undefined;
}
/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorRequest {
    creator: string;
}
export interface QueryDenomsFromCreatorRequestProtoMsg {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest";
    value: Uint8Array;
}
/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorRequestAmino {
    creator?: string;
}
export interface QueryDenomsFromCreatorRequestAminoMsg {
    type: "osmosis/tokenfactory/query-denoms-from-creator-request";
    value: QueryDenomsFromCreatorRequestAmino;
}
/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorRequestSDKType {
    creator: string;
}
/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorResponse {
    denoms: string[];
}
export interface QueryDenomsFromCreatorResponseProtoMsg {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse";
    value: Uint8Array;
}
/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorResponseAmino {
    denoms?: string[];
}
export interface QueryDenomsFromCreatorResponseAminoMsg {
    type: "osmosis/tokenfactory/query-denoms-from-creator-response";
    value: QueryDenomsFromCreatorResponseAmino;
}
/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorResponseSDKType {
    denoms: string[];
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
export declare const QueryDenomAuthorityMetadataRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDenomAuthorityMetadataRequest;
    isSDK(o: any): o is QueryDenomAuthorityMetadataRequestSDKType;
    isAmino(o: any): o is QueryDenomAuthorityMetadataRequestAmino;
    encode(message: QueryDenomAuthorityMetadataRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomAuthorityMetadataRequest;
    fromJSON(object: any): QueryDenomAuthorityMetadataRequest;
    toJSON(message: QueryDenomAuthorityMetadataRequest): unknown;
    fromPartial(object: DeepPartial<QueryDenomAuthorityMetadataRequest>): QueryDenomAuthorityMetadataRequest;
    fromSDK(object: QueryDenomAuthorityMetadataRequestSDKType): QueryDenomAuthorityMetadataRequest;
    toSDK(message: QueryDenomAuthorityMetadataRequest): QueryDenomAuthorityMetadataRequestSDKType;
    fromAmino(object: QueryDenomAuthorityMetadataRequestAmino): QueryDenomAuthorityMetadataRequest;
    toAmino(message: QueryDenomAuthorityMetadataRequest): QueryDenomAuthorityMetadataRequestAmino;
    fromAminoMsg(object: QueryDenomAuthorityMetadataRequestAminoMsg): QueryDenomAuthorityMetadataRequest;
    toAminoMsg(message: QueryDenomAuthorityMetadataRequest): QueryDenomAuthorityMetadataRequestAminoMsg;
    fromProtoMsg(message: QueryDenomAuthorityMetadataRequestProtoMsg): QueryDenomAuthorityMetadataRequest;
    toProto(message: QueryDenomAuthorityMetadataRequest): Uint8Array;
    toProtoMsg(message: QueryDenomAuthorityMetadataRequest): QueryDenomAuthorityMetadataRequestProtoMsg;
};
export declare const QueryDenomAuthorityMetadataResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDenomAuthorityMetadataResponse;
    isSDK(o: any): o is QueryDenomAuthorityMetadataResponseSDKType;
    isAmino(o: any): o is QueryDenomAuthorityMetadataResponseAmino;
    encode(message: QueryDenomAuthorityMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomAuthorityMetadataResponse;
    fromJSON(object: any): QueryDenomAuthorityMetadataResponse;
    toJSON(message: QueryDenomAuthorityMetadataResponse): unknown;
    fromPartial(object: DeepPartial<QueryDenomAuthorityMetadataResponse>): QueryDenomAuthorityMetadataResponse;
    fromSDK(object: QueryDenomAuthorityMetadataResponseSDKType): QueryDenomAuthorityMetadataResponse;
    toSDK(message: QueryDenomAuthorityMetadataResponse): QueryDenomAuthorityMetadataResponseSDKType;
    fromAmino(object: QueryDenomAuthorityMetadataResponseAmino): QueryDenomAuthorityMetadataResponse;
    toAmino(message: QueryDenomAuthorityMetadataResponse): QueryDenomAuthorityMetadataResponseAmino;
    fromAminoMsg(object: QueryDenomAuthorityMetadataResponseAminoMsg): QueryDenomAuthorityMetadataResponse;
    toAminoMsg(message: QueryDenomAuthorityMetadataResponse): QueryDenomAuthorityMetadataResponseAminoMsg;
    fromProtoMsg(message: QueryDenomAuthorityMetadataResponseProtoMsg): QueryDenomAuthorityMetadataResponse;
    toProto(message: QueryDenomAuthorityMetadataResponse): Uint8Array;
    toProtoMsg(message: QueryDenomAuthorityMetadataResponse): QueryDenomAuthorityMetadataResponseProtoMsg;
};
export declare const QueryDenomsFromCreatorRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDenomsFromCreatorRequest;
    isSDK(o: any): o is QueryDenomsFromCreatorRequestSDKType;
    isAmino(o: any): o is QueryDenomsFromCreatorRequestAmino;
    encode(message: QueryDenomsFromCreatorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsFromCreatorRequest;
    fromJSON(object: any): QueryDenomsFromCreatorRequest;
    toJSON(message: QueryDenomsFromCreatorRequest): unknown;
    fromPartial(object: DeepPartial<QueryDenomsFromCreatorRequest>): QueryDenomsFromCreatorRequest;
    fromSDK(object: QueryDenomsFromCreatorRequestSDKType): QueryDenomsFromCreatorRequest;
    toSDK(message: QueryDenomsFromCreatorRequest): QueryDenomsFromCreatorRequestSDKType;
    fromAmino(object: QueryDenomsFromCreatorRequestAmino): QueryDenomsFromCreatorRequest;
    toAmino(message: QueryDenomsFromCreatorRequest): QueryDenomsFromCreatorRequestAmino;
    fromAminoMsg(object: QueryDenomsFromCreatorRequestAminoMsg): QueryDenomsFromCreatorRequest;
    toAminoMsg(message: QueryDenomsFromCreatorRequest): QueryDenomsFromCreatorRequestAminoMsg;
    fromProtoMsg(message: QueryDenomsFromCreatorRequestProtoMsg): QueryDenomsFromCreatorRequest;
    toProto(message: QueryDenomsFromCreatorRequest): Uint8Array;
    toProtoMsg(message: QueryDenomsFromCreatorRequest): QueryDenomsFromCreatorRequestProtoMsg;
};
export declare const QueryDenomsFromCreatorResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDenomsFromCreatorResponse;
    isSDK(o: any): o is QueryDenomsFromCreatorResponseSDKType;
    isAmino(o: any): o is QueryDenomsFromCreatorResponseAmino;
    encode(message: QueryDenomsFromCreatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsFromCreatorResponse;
    fromJSON(object: any): QueryDenomsFromCreatorResponse;
    toJSON(message: QueryDenomsFromCreatorResponse): unknown;
    fromPartial(object: DeepPartial<QueryDenomsFromCreatorResponse>): QueryDenomsFromCreatorResponse;
    fromSDK(object: QueryDenomsFromCreatorResponseSDKType): QueryDenomsFromCreatorResponse;
    toSDK(message: QueryDenomsFromCreatorResponse): QueryDenomsFromCreatorResponseSDKType;
    fromAmino(object: QueryDenomsFromCreatorResponseAmino): QueryDenomsFromCreatorResponse;
    toAmino(message: QueryDenomsFromCreatorResponse): QueryDenomsFromCreatorResponseAmino;
    fromAminoMsg(object: QueryDenomsFromCreatorResponseAminoMsg): QueryDenomsFromCreatorResponse;
    toAminoMsg(message: QueryDenomsFromCreatorResponse): QueryDenomsFromCreatorResponseAminoMsg;
    fromProtoMsg(message: QueryDenomsFromCreatorResponseProtoMsg): QueryDenomsFromCreatorResponse;
    toProto(message: QueryDenomsFromCreatorResponse): Uint8Array;
    toProtoMsg(message: QueryDenomsFromCreatorResponse): QueryDenomsFromCreatorResponseProtoMsg;
};
