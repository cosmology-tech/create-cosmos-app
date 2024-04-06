import { FeeToken, FeeTokenAmino, FeeTokenSDKType } from "./feetoken";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
export interface QueryFeeTokensRequest {
}
export interface QueryFeeTokensRequestProtoMsg {
    typeUrl: "/osmosis.txfees.v1beta1.QueryFeeTokensRequest";
    value: Uint8Array;
}
export interface QueryFeeTokensRequestAmino {
}
export interface QueryFeeTokensRequestAminoMsg {
    type: "osmosis/txfees/query-fee-tokens-request";
    value: QueryFeeTokensRequestAmino;
}
export interface QueryFeeTokensRequestSDKType {
}
export interface QueryFeeTokensResponse {
    feeTokens: FeeToken[];
}
export interface QueryFeeTokensResponseProtoMsg {
    typeUrl: "/osmosis.txfees.v1beta1.QueryFeeTokensResponse";
    value: Uint8Array;
}
export interface QueryFeeTokensResponseAmino {
    fee_tokens?: FeeTokenAmino[];
}
export interface QueryFeeTokensResponseAminoMsg {
    type: "osmosis/txfees/query-fee-tokens-response";
    value: QueryFeeTokensResponseAmino;
}
export interface QueryFeeTokensResponseSDKType {
    fee_tokens: FeeTokenSDKType[];
}
/**
 * QueryDenomSpotPriceRequest defines grpc request structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceRequest {
    denom: string;
}
export interface QueryDenomSpotPriceRequestProtoMsg {
    typeUrl: "/osmosis.txfees.v1beta1.QueryDenomSpotPriceRequest";
    value: Uint8Array;
}
/**
 * QueryDenomSpotPriceRequest defines grpc request structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceRequestAmino {
    denom?: string;
}
export interface QueryDenomSpotPriceRequestAminoMsg {
    type: "osmosis/txfees/query-denom-spot-price-request";
    value: QueryDenomSpotPriceRequestAmino;
}
/**
 * QueryDenomSpotPriceRequest defines grpc request structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceRequestSDKType {
    denom: string;
}
/**
 * QueryDenomSpotPriceRequest defines grpc response structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceResponse {
    poolID: bigint;
    spotPrice: string;
}
export interface QueryDenomSpotPriceResponseProtoMsg {
    typeUrl: "/osmosis.txfees.v1beta1.QueryDenomSpotPriceResponse";
    value: Uint8Array;
}
/**
 * QueryDenomSpotPriceRequest defines grpc response structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceResponseAmino {
    poolID?: string;
    spot_price?: string;
}
export interface QueryDenomSpotPriceResponseAminoMsg {
    type: "osmosis/txfees/query-denom-spot-price-response";
    value: QueryDenomSpotPriceResponseAmino;
}
/**
 * QueryDenomSpotPriceRequest defines grpc response structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceResponseSDKType {
    poolID: bigint;
    spot_price: string;
}
export interface QueryDenomPoolIdRequest {
    denom: string;
}
export interface QueryDenomPoolIdRequestProtoMsg {
    typeUrl: "/osmosis.txfees.v1beta1.QueryDenomPoolIdRequest";
    value: Uint8Array;
}
export interface QueryDenomPoolIdRequestAmino {
    denom?: string;
}
export interface QueryDenomPoolIdRequestAminoMsg {
    type: "osmosis/txfees/query-denom-pool-id-request";
    value: QueryDenomPoolIdRequestAmino;
}
export interface QueryDenomPoolIdRequestSDKType {
    denom: string;
}
export interface QueryDenomPoolIdResponse {
    poolID: bigint;
}
export interface QueryDenomPoolIdResponseProtoMsg {
    typeUrl: "/osmosis.txfees.v1beta1.QueryDenomPoolIdResponse";
    value: Uint8Array;
}
export interface QueryDenomPoolIdResponseAmino {
    poolID?: string;
}
export interface QueryDenomPoolIdResponseAminoMsg {
    type: "osmosis/txfees/query-denom-pool-id-response";
    value: QueryDenomPoolIdResponseAmino;
}
export interface QueryDenomPoolIdResponseSDKType {
    poolID: bigint;
}
export interface QueryBaseDenomRequest {
}
export interface QueryBaseDenomRequestProtoMsg {
    typeUrl: "/osmosis.txfees.v1beta1.QueryBaseDenomRequest";
    value: Uint8Array;
}
export interface QueryBaseDenomRequestAmino {
}
export interface QueryBaseDenomRequestAminoMsg {
    type: "osmosis/txfees/query-base-denom-request";
    value: QueryBaseDenomRequestAmino;
}
export interface QueryBaseDenomRequestSDKType {
}
export interface QueryBaseDenomResponse {
    baseDenom: string;
}
export interface QueryBaseDenomResponseProtoMsg {
    typeUrl: "/osmosis.txfees.v1beta1.QueryBaseDenomResponse";
    value: Uint8Array;
}
export interface QueryBaseDenomResponseAmino {
    base_denom?: string;
}
export interface QueryBaseDenomResponseAminoMsg {
    type: "osmosis/txfees/query-base-denom-response";
    value: QueryBaseDenomResponseAmino;
}
export interface QueryBaseDenomResponseSDKType {
    base_denom: string;
}
export declare const QueryFeeTokensRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryFeeTokensRequest;
    isSDK(o: any): o is QueryFeeTokensRequestSDKType;
    isAmino(o: any): o is QueryFeeTokensRequestAmino;
    encode(_: QueryFeeTokensRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeTokensRequest;
    fromJSON(_: any): QueryFeeTokensRequest;
    toJSON(_: QueryFeeTokensRequest): unknown;
    fromPartial(_: DeepPartial<QueryFeeTokensRequest>): QueryFeeTokensRequest;
    fromSDK(_: QueryFeeTokensRequestSDKType): QueryFeeTokensRequest;
    toSDK(_: QueryFeeTokensRequest): QueryFeeTokensRequestSDKType;
    fromAmino(_: QueryFeeTokensRequestAmino): QueryFeeTokensRequest;
    toAmino(_: QueryFeeTokensRequest): QueryFeeTokensRequestAmino;
    fromAminoMsg(object: QueryFeeTokensRequestAminoMsg): QueryFeeTokensRequest;
    toAminoMsg(message: QueryFeeTokensRequest): QueryFeeTokensRequestAminoMsg;
    fromProtoMsg(message: QueryFeeTokensRequestProtoMsg): QueryFeeTokensRequest;
    toProto(message: QueryFeeTokensRequest): Uint8Array;
    toProtoMsg(message: QueryFeeTokensRequest): QueryFeeTokensRequestProtoMsg;
};
export declare const QueryFeeTokensResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryFeeTokensResponse;
    isSDK(o: any): o is QueryFeeTokensResponseSDKType;
    isAmino(o: any): o is QueryFeeTokensResponseAmino;
    encode(message: QueryFeeTokensResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeTokensResponse;
    fromJSON(object: any): QueryFeeTokensResponse;
    toJSON(message: QueryFeeTokensResponse): unknown;
    fromPartial(object: DeepPartial<QueryFeeTokensResponse>): QueryFeeTokensResponse;
    fromSDK(object: QueryFeeTokensResponseSDKType): QueryFeeTokensResponse;
    toSDK(message: QueryFeeTokensResponse): QueryFeeTokensResponseSDKType;
    fromAmino(object: QueryFeeTokensResponseAmino): QueryFeeTokensResponse;
    toAmino(message: QueryFeeTokensResponse): QueryFeeTokensResponseAmino;
    fromAminoMsg(object: QueryFeeTokensResponseAminoMsg): QueryFeeTokensResponse;
    toAminoMsg(message: QueryFeeTokensResponse): QueryFeeTokensResponseAminoMsg;
    fromProtoMsg(message: QueryFeeTokensResponseProtoMsg): QueryFeeTokensResponse;
    toProto(message: QueryFeeTokensResponse): Uint8Array;
    toProtoMsg(message: QueryFeeTokensResponse): QueryFeeTokensResponseProtoMsg;
};
export declare const QueryDenomSpotPriceRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDenomSpotPriceRequest;
    isSDK(o: any): o is QueryDenomSpotPriceRequestSDKType;
    isAmino(o: any): o is QueryDenomSpotPriceRequestAmino;
    encode(message: QueryDenomSpotPriceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomSpotPriceRequest;
    fromJSON(object: any): QueryDenomSpotPriceRequest;
    toJSON(message: QueryDenomSpotPriceRequest): unknown;
    fromPartial(object: DeepPartial<QueryDenomSpotPriceRequest>): QueryDenomSpotPriceRequest;
    fromSDK(object: QueryDenomSpotPriceRequestSDKType): QueryDenomSpotPriceRequest;
    toSDK(message: QueryDenomSpotPriceRequest): QueryDenomSpotPriceRequestSDKType;
    fromAmino(object: QueryDenomSpotPriceRequestAmino): QueryDenomSpotPriceRequest;
    toAmino(message: QueryDenomSpotPriceRequest): QueryDenomSpotPriceRequestAmino;
    fromAminoMsg(object: QueryDenomSpotPriceRequestAminoMsg): QueryDenomSpotPriceRequest;
    toAminoMsg(message: QueryDenomSpotPriceRequest): QueryDenomSpotPriceRequestAminoMsg;
    fromProtoMsg(message: QueryDenomSpotPriceRequestProtoMsg): QueryDenomSpotPriceRequest;
    toProto(message: QueryDenomSpotPriceRequest): Uint8Array;
    toProtoMsg(message: QueryDenomSpotPriceRequest): QueryDenomSpotPriceRequestProtoMsg;
};
export declare const QueryDenomSpotPriceResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDenomSpotPriceResponse;
    isSDK(o: any): o is QueryDenomSpotPriceResponseSDKType;
    isAmino(o: any): o is QueryDenomSpotPriceResponseAmino;
    encode(message: QueryDenomSpotPriceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomSpotPriceResponse;
    fromJSON(object: any): QueryDenomSpotPriceResponse;
    toJSON(message: QueryDenomSpotPriceResponse): unknown;
    fromPartial(object: DeepPartial<QueryDenomSpotPriceResponse>): QueryDenomSpotPriceResponse;
    fromSDK(object: QueryDenomSpotPriceResponseSDKType): QueryDenomSpotPriceResponse;
    toSDK(message: QueryDenomSpotPriceResponse): QueryDenomSpotPriceResponseSDKType;
    fromAmino(object: QueryDenomSpotPriceResponseAmino): QueryDenomSpotPriceResponse;
    toAmino(message: QueryDenomSpotPriceResponse): QueryDenomSpotPriceResponseAmino;
    fromAminoMsg(object: QueryDenomSpotPriceResponseAminoMsg): QueryDenomSpotPriceResponse;
    toAminoMsg(message: QueryDenomSpotPriceResponse): QueryDenomSpotPriceResponseAminoMsg;
    fromProtoMsg(message: QueryDenomSpotPriceResponseProtoMsg): QueryDenomSpotPriceResponse;
    toProto(message: QueryDenomSpotPriceResponse): Uint8Array;
    toProtoMsg(message: QueryDenomSpotPriceResponse): QueryDenomSpotPriceResponseProtoMsg;
};
export declare const QueryDenomPoolIdRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDenomPoolIdRequest;
    isSDK(o: any): o is QueryDenomPoolIdRequestSDKType;
    isAmino(o: any): o is QueryDenomPoolIdRequestAmino;
    encode(message: QueryDenomPoolIdRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomPoolIdRequest;
    fromJSON(object: any): QueryDenomPoolIdRequest;
    toJSON(message: QueryDenomPoolIdRequest): unknown;
    fromPartial(object: DeepPartial<QueryDenomPoolIdRequest>): QueryDenomPoolIdRequest;
    fromSDK(object: QueryDenomPoolIdRequestSDKType): QueryDenomPoolIdRequest;
    toSDK(message: QueryDenomPoolIdRequest): QueryDenomPoolIdRequestSDKType;
    fromAmino(object: QueryDenomPoolIdRequestAmino): QueryDenomPoolIdRequest;
    toAmino(message: QueryDenomPoolIdRequest): QueryDenomPoolIdRequestAmino;
    fromAminoMsg(object: QueryDenomPoolIdRequestAminoMsg): QueryDenomPoolIdRequest;
    toAminoMsg(message: QueryDenomPoolIdRequest): QueryDenomPoolIdRequestAminoMsg;
    fromProtoMsg(message: QueryDenomPoolIdRequestProtoMsg): QueryDenomPoolIdRequest;
    toProto(message: QueryDenomPoolIdRequest): Uint8Array;
    toProtoMsg(message: QueryDenomPoolIdRequest): QueryDenomPoolIdRequestProtoMsg;
};
export declare const QueryDenomPoolIdResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDenomPoolIdResponse;
    isSDK(o: any): o is QueryDenomPoolIdResponseSDKType;
    isAmino(o: any): o is QueryDenomPoolIdResponseAmino;
    encode(message: QueryDenomPoolIdResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomPoolIdResponse;
    fromJSON(object: any): QueryDenomPoolIdResponse;
    toJSON(message: QueryDenomPoolIdResponse): unknown;
    fromPartial(object: DeepPartial<QueryDenomPoolIdResponse>): QueryDenomPoolIdResponse;
    fromSDK(object: QueryDenomPoolIdResponseSDKType): QueryDenomPoolIdResponse;
    toSDK(message: QueryDenomPoolIdResponse): QueryDenomPoolIdResponseSDKType;
    fromAmino(object: QueryDenomPoolIdResponseAmino): QueryDenomPoolIdResponse;
    toAmino(message: QueryDenomPoolIdResponse): QueryDenomPoolIdResponseAmino;
    fromAminoMsg(object: QueryDenomPoolIdResponseAminoMsg): QueryDenomPoolIdResponse;
    toAminoMsg(message: QueryDenomPoolIdResponse): QueryDenomPoolIdResponseAminoMsg;
    fromProtoMsg(message: QueryDenomPoolIdResponseProtoMsg): QueryDenomPoolIdResponse;
    toProto(message: QueryDenomPoolIdResponse): Uint8Array;
    toProtoMsg(message: QueryDenomPoolIdResponse): QueryDenomPoolIdResponseProtoMsg;
};
export declare const QueryBaseDenomRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryBaseDenomRequest;
    isSDK(o: any): o is QueryBaseDenomRequestSDKType;
    isAmino(o: any): o is QueryBaseDenomRequestAmino;
    encode(_: QueryBaseDenomRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBaseDenomRequest;
    fromJSON(_: any): QueryBaseDenomRequest;
    toJSON(_: QueryBaseDenomRequest): unknown;
    fromPartial(_: DeepPartial<QueryBaseDenomRequest>): QueryBaseDenomRequest;
    fromSDK(_: QueryBaseDenomRequestSDKType): QueryBaseDenomRequest;
    toSDK(_: QueryBaseDenomRequest): QueryBaseDenomRequestSDKType;
    fromAmino(_: QueryBaseDenomRequestAmino): QueryBaseDenomRequest;
    toAmino(_: QueryBaseDenomRequest): QueryBaseDenomRequestAmino;
    fromAminoMsg(object: QueryBaseDenomRequestAminoMsg): QueryBaseDenomRequest;
    toAminoMsg(message: QueryBaseDenomRequest): QueryBaseDenomRequestAminoMsg;
    fromProtoMsg(message: QueryBaseDenomRequestProtoMsg): QueryBaseDenomRequest;
    toProto(message: QueryBaseDenomRequest): Uint8Array;
    toProtoMsg(message: QueryBaseDenomRequest): QueryBaseDenomRequestProtoMsg;
};
export declare const QueryBaseDenomResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryBaseDenomResponse;
    isSDK(o: any): o is QueryBaseDenomResponseSDKType;
    isAmino(o: any): o is QueryBaseDenomResponseAmino;
    encode(message: QueryBaseDenomResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBaseDenomResponse;
    fromJSON(object: any): QueryBaseDenomResponse;
    toJSON(message: QueryBaseDenomResponse): unknown;
    fromPartial(object: DeepPartial<QueryBaseDenomResponse>): QueryBaseDenomResponse;
    fromSDK(object: QueryBaseDenomResponseSDKType): QueryBaseDenomResponse;
    toSDK(message: QueryBaseDenomResponse): QueryBaseDenomResponseSDKType;
    fromAmino(object: QueryBaseDenomResponseAmino): QueryBaseDenomResponse;
    toAmino(message: QueryBaseDenomResponse): QueryBaseDenomResponseAmino;
    fromAminoMsg(object: QueryBaseDenomResponseAminoMsg): QueryBaseDenomResponse;
    toAminoMsg(message: QueryBaseDenomResponse): QueryBaseDenomResponseAminoMsg;
    fromProtoMsg(message: QueryBaseDenomResponseProtoMsg): QueryBaseDenomResponse;
    toProto(message: QueryBaseDenomResponse): Uint8Array;
    toProtoMsg(message: QueryBaseDenomResponse): QueryBaseDenomResponseProtoMsg;
};
