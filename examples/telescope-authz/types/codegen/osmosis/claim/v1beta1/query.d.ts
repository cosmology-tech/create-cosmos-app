import { Action, ClaimRecord, ClaimRecordAmino, ClaimRecordSDKType } from "./claim";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceRequest {
}
export interface QueryModuleAccountBalanceRequestProtoMsg {
    typeUrl: "/osmosis.claim.v1beta1.QueryModuleAccountBalanceRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceRequestAmino {
}
export interface QueryModuleAccountBalanceRequestAminoMsg {
    type: "osmosis/claim/query-module-account-balance-request";
    value: QueryModuleAccountBalanceRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceResponse {
    /** params defines the parameters of the module. */
    moduleAccountBalance: Coin[];
}
export interface QueryModuleAccountBalanceResponseProtoMsg {
    typeUrl: "/osmosis.claim.v1beta1.QueryModuleAccountBalanceResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceResponseAmino {
    /** params defines the parameters of the module. */
    moduleAccountBalance?: CoinAmino[];
}
export interface QueryModuleAccountBalanceResponseAminoMsg {
    type: "osmosis/claim/query-module-account-balance-response";
    value: QueryModuleAccountBalanceResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceResponseSDKType {
    moduleAccountBalance: CoinSDKType[];
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/osmosis.claim.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "osmosis/claim/query-params-request";
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
    typeUrl: "/osmosis.claim.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino | undefined;
}
export interface QueryParamsResponseAminoMsg {
    type: "osmosis/claim/query-params-response";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType | undefined;
}
export interface QueryClaimRecordRequest {
    address: string;
}
export interface QueryClaimRecordRequestProtoMsg {
    typeUrl: "/osmosis.claim.v1beta1.QueryClaimRecordRequest";
    value: Uint8Array;
}
export interface QueryClaimRecordRequestAmino {
    address?: string;
}
export interface QueryClaimRecordRequestAminoMsg {
    type: "osmosis/claim/query-claim-record-request";
    value: QueryClaimRecordRequestAmino;
}
export interface QueryClaimRecordRequestSDKType {
    address: string;
}
export interface QueryClaimRecordResponse {
    claimRecord: ClaimRecord | undefined;
}
export interface QueryClaimRecordResponseProtoMsg {
    typeUrl: "/osmosis.claim.v1beta1.QueryClaimRecordResponse";
    value: Uint8Array;
}
export interface QueryClaimRecordResponseAmino {
    claim_record?: ClaimRecordAmino | undefined;
}
export interface QueryClaimRecordResponseAminoMsg {
    type: "osmosis/claim/query-claim-record-response";
    value: QueryClaimRecordResponseAmino;
}
export interface QueryClaimRecordResponseSDKType {
    claim_record: ClaimRecordSDKType | undefined;
}
export interface QueryClaimableForActionRequest {
    address: string;
    action: Action;
}
export interface QueryClaimableForActionRequestProtoMsg {
    typeUrl: "/osmosis.claim.v1beta1.QueryClaimableForActionRequest";
    value: Uint8Array;
}
export interface QueryClaimableForActionRequestAmino {
    address?: string;
    action?: Action;
}
export interface QueryClaimableForActionRequestAminoMsg {
    type: "osmosis/claim/query-claimable-for-action-request";
    value: QueryClaimableForActionRequestAmino;
}
export interface QueryClaimableForActionRequestSDKType {
    address: string;
    action: Action;
}
export interface QueryClaimableForActionResponse {
    coins: Coin[];
}
export interface QueryClaimableForActionResponseProtoMsg {
    typeUrl: "/osmosis.claim.v1beta1.QueryClaimableForActionResponse";
    value: Uint8Array;
}
export interface QueryClaimableForActionResponseAmino {
    coins?: CoinAmino[];
}
export interface QueryClaimableForActionResponseAminoMsg {
    type: "osmosis/claim/query-claimable-for-action-response";
    value: QueryClaimableForActionResponseAmino;
}
export interface QueryClaimableForActionResponseSDKType {
    coins: CoinSDKType[];
}
export interface QueryTotalClaimableRequest {
    address: string;
}
export interface QueryTotalClaimableRequestProtoMsg {
    typeUrl: "/osmosis.claim.v1beta1.QueryTotalClaimableRequest";
    value: Uint8Array;
}
export interface QueryTotalClaimableRequestAmino {
    address?: string;
}
export interface QueryTotalClaimableRequestAminoMsg {
    type: "osmosis/claim/query-total-claimable-request";
    value: QueryTotalClaimableRequestAmino;
}
export interface QueryTotalClaimableRequestSDKType {
    address: string;
}
export interface QueryTotalClaimableResponse {
    coins: Coin[];
}
export interface QueryTotalClaimableResponseProtoMsg {
    typeUrl: "/osmosis.claim.v1beta1.QueryTotalClaimableResponse";
    value: Uint8Array;
}
export interface QueryTotalClaimableResponseAmino {
    coins?: CoinAmino[];
}
export interface QueryTotalClaimableResponseAminoMsg {
    type: "osmosis/claim/query-total-claimable-response";
    value: QueryTotalClaimableResponseAmino;
}
export interface QueryTotalClaimableResponseSDKType {
    coins: CoinSDKType[];
}
export declare const QueryModuleAccountBalanceRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryModuleAccountBalanceRequest;
    isSDK(o: any): o is QueryModuleAccountBalanceRequestSDKType;
    isAmino(o: any): o is QueryModuleAccountBalanceRequestAmino;
    encode(_: QueryModuleAccountBalanceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleAccountBalanceRequest;
    fromJSON(_: any): QueryModuleAccountBalanceRequest;
    toJSON(_: QueryModuleAccountBalanceRequest): unknown;
    fromPartial(_: DeepPartial<QueryModuleAccountBalanceRequest>): QueryModuleAccountBalanceRequest;
    fromSDK(_: QueryModuleAccountBalanceRequestSDKType): QueryModuleAccountBalanceRequest;
    toSDK(_: QueryModuleAccountBalanceRequest): QueryModuleAccountBalanceRequestSDKType;
    fromAmino(_: QueryModuleAccountBalanceRequestAmino): QueryModuleAccountBalanceRequest;
    toAmino(_: QueryModuleAccountBalanceRequest): QueryModuleAccountBalanceRequestAmino;
    fromAminoMsg(object: QueryModuleAccountBalanceRequestAminoMsg): QueryModuleAccountBalanceRequest;
    toAminoMsg(message: QueryModuleAccountBalanceRequest): QueryModuleAccountBalanceRequestAminoMsg;
    fromProtoMsg(message: QueryModuleAccountBalanceRequestProtoMsg): QueryModuleAccountBalanceRequest;
    toProto(message: QueryModuleAccountBalanceRequest): Uint8Array;
    toProtoMsg(message: QueryModuleAccountBalanceRequest): QueryModuleAccountBalanceRequestProtoMsg;
};
export declare const QueryModuleAccountBalanceResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryModuleAccountBalanceResponse;
    isSDK(o: any): o is QueryModuleAccountBalanceResponseSDKType;
    isAmino(o: any): o is QueryModuleAccountBalanceResponseAmino;
    encode(message: QueryModuleAccountBalanceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleAccountBalanceResponse;
    fromJSON(object: any): QueryModuleAccountBalanceResponse;
    toJSON(message: QueryModuleAccountBalanceResponse): unknown;
    fromPartial(object: DeepPartial<QueryModuleAccountBalanceResponse>): QueryModuleAccountBalanceResponse;
    fromSDK(object: QueryModuleAccountBalanceResponseSDKType): QueryModuleAccountBalanceResponse;
    toSDK(message: QueryModuleAccountBalanceResponse): QueryModuleAccountBalanceResponseSDKType;
    fromAmino(object: QueryModuleAccountBalanceResponseAmino): QueryModuleAccountBalanceResponse;
    toAmino(message: QueryModuleAccountBalanceResponse): QueryModuleAccountBalanceResponseAmino;
    fromAminoMsg(object: QueryModuleAccountBalanceResponseAminoMsg): QueryModuleAccountBalanceResponse;
    toAminoMsg(message: QueryModuleAccountBalanceResponse): QueryModuleAccountBalanceResponseAminoMsg;
    fromProtoMsg(message: QueryModuleAccountBalanceResponseProtoMsg): QueryModuleAccountBalanceResponse;
    toProto(message: QueryModuleAccountBalanceResponse): Uint8Array;
    toProtoMsg(message: QueryModuleAccountBalanceResponse): QueryModuleAccountBalanceResponseProtoMsg;
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
export declare const QueryClaimRecordRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryClaimRecordRequest;
    isSDK(o: any): o is QueryClaimRecordRequestSDKType;
    isAmino(o: any): o is QueryClaimRecordRequestAmino;
    encode(message: QueryClaimRecordRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimRecordRequest;
    fromJSON(object: any): QueryClaimRecordRequest;
    toJSON(message: QueryClaimRecordRequest): unknown;
    fromPartial(object: DeepPartial<QueryClaimRecordRequest>): QueryClaimRecordRequest;
    fromSDK(object: QueryClaimRecordRequestSDKType): QueryClaimRecordRequest;
    toSDK(message: QueryClaimRecordRequest): QueryClaimRecordRequestSDKType;
    fromAmino(object: QueryClaimRecordRequestAmino): QueryClaimRecordRequest;
    toAmino(message: QueryClaimRecordRequest): QueryClaimRecordRequestAmino;
    fromAminoMsg(object: QueryClaimRecordRequestAminoMsg): QueryClaimRecordRequest;
    toAminoMsg(message: QueryClaimRecordRequest): QueryClaimRecordRequestAminoMsg;
    fromProtoMsg(message: QueryClaimRecordRequestProtoMsg): QueryClaimRecordRequest;
    toProto(message: QueryClaimRecordRequest): Uint8Array;
    toProtoMsg(message: QueryClaimRecordRequest): QueryClaimRecordRequestProtoMsg;
};
export declare const QueryClaimRecordResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryClaimRecordResponse;
    isSDK(o: any): o is QueryClaimRecordResponseSDKType;
    isAmino(o: any): o is QueryClaimRecordResponseAmino;
    encode(message: QueryClaimRecordResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimRecordResponse;
    fromJSON(object: any): QueryClaimRecordResponse;
    toJSON(message: QueryClaimRecordResponse): unknown;
    fromPartial(object: DeepPartial<QueryClaimRecordResponse>): QueryClaimRecordResponse;
    fromSDK(object: QueryClaimRecordResponseSDKType): QueryClaimRecordResponse;
    toSDK(message: QueryClaimRecordResponse): QueryClaimRecordResponseSDKType;
    fromAmino(object: QueryClaimRecordResponseAmino): QueryClaimRecordResponse;
    toAmino(message: QueryClaimRecordResponse): QueryClaimRecordResponseAmino;
    fromAminoMsg(object: QueryClaimRecordResponseAminoMsg): QueryClaimRecordResponse;
    toAminoMsg(message: QueryClaimRecordResponse): QueryClaimRecordResponseAminoMsg;
    fromProtoMsg(message: QueryClaimRecordResponseProtoMsg): QueryClaimRecordResponse;
    toProto(message: QueryClaimRecordResponse): Uint8Array;
    toProtoMsg(message: QueryClaimRecordResponse): QueryClaimRecordResponseProtoMsg;
};
export declare const QueryClaimableForActionRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryClaimableForActionRequest;
    isSDK(o: any): o is QueryClaimableForActionRequestSDKType;
    isAmino(o: any): o is QueryClaimableForActionRequestAmino;
    encode(message: QueryClaimableForActionRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimableForActionRequest;
    fromJSON(object: any): QueryClaimableForActionRequest;
    toJSON(message: QueryClaimableForActionRequest): unknown;
    fromPartial(object: DeepPartial<QueryClaimableForActionRequest>): QueryClaimableForActionRequest;
    fromSDK(object: QueryClaimableForActionRequestSDKType): QueryClaimableForActionRequest;
    toSDK(message: QueryClaimableForActionRequest): QueryClaimableForActionRequestSDKType;
    fromAmino(object: QueryClaimableForActionRequestAmino): QueryClaimableForActionRequest;
    toAmino(message: QueryClaimableForActionRequest): QueryClaimableForActionRequestAmino;
    fromAminoMsg(object: QueryClaimableForActionRequestAminoMsg): QueryClaimableForActionRequest;
    toAminoMsg(message: QueryClaimableForActionRequest): QueryClaimableForActionRequestAminoMsg;
    fromProtoMsg(message: QueryClaimableForActionRequestProtoMsg): QueryClaimableForActionRequest;
    toProto(message: QueryClaimableForActionRequest): Uint8Array;
    toProtoMsg(message: QueryClaimableForActionRequest): QueryClaimableForActionRequestProtoMsg;
};
export declare const QueryClaimableForActionResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryClaimableForActionResponse;
    isSDK(o: any): o is QueryClaimableForActionResponseSDKType;
    isAmino(o: any): o is QueryClaimableForActionResponseAmino;
    encode(message: QueryClaimableForActionResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimableForActionResponse;
    fromJSON(object: any): QueryClaimableForActionResponse;
    toJSON(message: QueryClaimableForActionResponse): unknown;
    fromPartial(object: DeepPartial<QueryClaimableForActionResponse>): QueryClaimableForActionResponse;
    fromSDK(object: QueryClaimableForActionResponseSDKType): QueryClaimableForActionResponse;
    toSDK(message: QueryClaimableForActionResponse): QueryClaimableForActionResponseSDKType;
    fromAmino(object: QueryClaimableForActionResponseAmino): QueryClaimableForActionResponse;
    toAmino(message: QueryClaimableForActionResponse): QueryClaimableForActionResponseAmino;
    fromAminoMsg(object: QueryClaimableForActionResponseAminoMsg): QueryClaimableForActionResponse;
    toAminoMsg(message: QueryClaimableForActionResponse): QueryClaimableForActionResponseAminoMsg;
    fromProtoMsg(message: QueryClaimableForActionResponseProtoMsg): QueryClaimableForActionResponse;
    toProto(message: QueryClaimableForActionResponse): Uint8Array;
    toProtoMsg(message: QueryClaimableForActionResponse): QueryClaimableForActionResponseProtoMsg;
};
export declare const QueryTotalClaimableRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryTotalClaimableRequest;
    isSDK(o: any): o is QueryTotalClaimableRequestSDKType;
    isAmino(o: any): o is QueryTotalClaimableRequestAmino;
    encode(message: QueryTotalClaimableRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalClaimableRequest;
    fromJSON(object: any): QueryTotalClaimableRequest;
    toJSON(message: QueryTotalClaimableRequest): unknown;
    fromPartial(object: DeepPartial<QueryTotalClaimableRequest>): QueryTotalClaimableRequest;
    fromSDK(object: QueryTotalClaimableRequestSDKType): QueryTotalClaimableRequest;
    toSDK(message: QueryTotalClaimableRequest): QueryTotalClaimableRequestSDKType;
    fromAmino(object: QueryTotalClaimableRequestAmino): QueryTotalClaimableRequest;
    toAmino(message: QueryTotalClaimableRequest): QueryTotalClaimableRequestAmino;
    fromAminoMsg(object: QueryTotalClaimableRequestAminoMsg): QueryTotalClaimableRequest;
    toAminoMsg(message: QueryTotalClaimableRequest): QueryTotalClaimableRequestAminoMsg;
    fromProtoMsg(message: QueryTotalClaimableRequestProtoMsg): QueryTotalClaimableRequest;
    toProto(message: QueryTotalClaimableRequest): Uint8Array;
    toProtoMsg(message: QueryTotalClaimableRequest): QueryTotalClaimableRequestProtoMsg;
};
export declare const QueryTotalClaimableResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryTotalClaimableResponse;
    isSDK(o: any): o is QueryTotalClaimableResponseSDKType;
    isAmino(o: any): o is QueryTotalClaimableResponseAmino;
    encode(message: QueryTotalClaimableResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalClaimableResponse;
    fromJSON(object: any): QueryTotalClaimableResponse;
    toJSON(message: QueryTotalClaimableResponse): unknown;
    fromPartial(object: DeepPartial<QueryTotalClaimableResponse>): QueryTotalClaimableResponse;
    fromSDK(object: QueryTotalClaimableResponseSDKType): QueryTotalClaimableResponse;
    toSDK(message: QueryTotalClaimableResponse): QueryTotalClaimableResponseSDKType;
    fromAmino(object: QueryTotalClaimableResponseAmino): QueryTotalClaimableResponse;
    toAmino(message: QueryTotalClaimableResponse): QueryTotalClaimableResponseAmino;
    fromAminoMsg(object: QueryTotalClaimableResponseAminoMsg): QueryTotalClaimableResponse;
    toAminoMsg(message: QueryTotalClaimableResponse): QueryTotalClaimableResponseAminoMsg;
    fromProtoMsg(message: QueryTotalClaimableResponseProtoMsg): QueryTotalClaimableResponse;
    toProto(message: QueryTotalClaimableResponse): Uint8Array;
    toProtoMsg(message: QueryTotalClaimableResponse): QueryTotalClaimableResponseProtoMsg;
};
