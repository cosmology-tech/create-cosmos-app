import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Grant, GrantAmino, GrantSDKType, GrantAuthorization, GrantAuthorizationAmino, GrantAuthorizationSDKType } from "./authz";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** QueryGrantsRequest is the request type for the Query/Grants RPC method. */
export interface QueryGrantsRequest {
    granter: string;
    grantee: string;
    /** Optional, msg_type_url, when set, will query only grants matching given msg type. */
    msgTypeUrl: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest | undefined;
}
export interface QueryGrantsRequestProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.QueryGrantsRequest";
    value: Uint8Array;
}
/** QueryGrantsRequest is the request type for the Query/Grants RPC method. */
export interface QueryGrantsRequestAmino {
    granter?: string;
    grantee?: string;
    /** Optional, msg_type_url, when set, will query only grants matching given msg type. */
    msg_type_url?: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequestAmino | undefined;
}
export interface QueryGrantsRequestAminoMsg {
    type: "cosmos-sdk/QueryGrantsRequest";
    value: QueryGrantsRequestAmino;
}
/** QueryGrantsRequest is the request type for the Query/Grants RPC method. */
export interface QueryGrantsRequestSDKType {
    granter: string;
    grantee: string;
    msg_type_url: string;
    pagination?: PageRequestSDKType | undefined;
}
/** QueryGrantsResponse is the response type for the Query/Authorizations RPC method. */
export interface QueryGrantsResponse {
    /** authorizations is a list of grants granted for grantee by granter. */
    grants: Grant[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse | undefined;
}
export interface QueryGrantsResponseProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.QueryGrantsResponse";
    value: Uint8Array;
}
/** QueryGrantsResponse is the response type for the Query/Authorizations RPC method. */
export interface QueryGrantsResponseAmino {
    /** authorizations is a list of grants granted for grantee by granter. */
    grants?: GrantAmino[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponseAmino | undefined;
}
export interface QueryGrantsResponseAminoMsg {
    type: "cosmos-sdk/QueryGrantsResponse";
    value: QueryGrantsResponseAmino;
}
/** QueryGrantsResponse is the response type for the Query/Authorizations RPC method. */
export interface QueryGrantsResponseSDKType {
    grants: GrantSDKType[];
    pagination?: PageResponseSDKType | undefined;
}
/** QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC method. */
export interface QueryGranterGrantsRequest {
    granter: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest | undefined;
}
export interface QueryGranterGrantsRequestProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsRequest";
    value: Uint8Array;
}
/** QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC method. */
export interface QueryGranterGrantsRequestAmino {
    granter?: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequestAmino | undefined;
}
export interface QueryGranterGrantsRequestAminoMsg {
    type: "cosmos-sdk/QueryGranterGrantsRequest";
    value: QueryGranterGrantsRequestAmino;
}
/** QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC method. */
export interface QueryGranterGrantsRequestSDKType {
    granter: string;
    pagination?: PageRequestSDKType | undefined;
}
/** QueryGranterGrantsResponse is the response type for the Query/GranterGrants RPC method. */
export interface QueryGranterGrantsResponse {
    /** grants is a list of grants granted by the granter. */
    grants: GrantAuthorization[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse | undefined;
}
export interface QueryGranterGrantsResponseProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsResponse";
    value: Uint8Array;
}
/** QueryGranterGrantsResponse is the response type for the Query/GranterGrants RPC method. */
export interface QueryGranterGrantsResponseAmino {
    /** grants is a list of grants granted by the granter. */
    grants?: GrantAuthorizationAmino[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponseAmino | undefined;
}
export interface QueryGranterGrantsResponseAminoMsg {
    type: "cosmos-sdk/QueryGranterGrantsResponse";
    value: QueryGranterGrantsResponseAmino;
}
/** QueryGranterGrantsResponse is the response type for the Query/GranterGrants RPC method. */
export interface QueryGranterGrantsResponseSDKType {
    grants: GrantAuthorizationSDKType[];
    pagination?: PageResponseSDKType | undefined;
}
/** QueryGranteeGrantsRequest is the request type for the Query/IssuedGrants RPC method. */
export interface QueryGranteeGrantsRequest {
    grantee: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest | undefined;
}
export interface QueryGranteeGrantsRequestProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsRequest";
    value: Uint8Array;
}
/** QueryGranteeGrantsRequest is the request type for the Query/IssuedGrants RPC method. */
export interface QueryGranteeGrantsRequestAmino {
    grantee?: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequestAmino | undefined;
}
export interface QueryGranteeGrantsRequestAminoMsg {
    type: "cosmos-sdk/QueryGranteeGrantsRequest";
    value: QueryGranteeGrantsRequestAmino;
}
/** QueryGranteeGrantsRequest is the request type for the Query/IssuedGrants RPC method. */
export interface QueryGranteeGrantsRequestSDKType {
    grantee: string;
    pagination?: PageRequestSDKType | undefined;
}
/** QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants RPC method. */
export interface QueryGranteeGrantsResponse {
    /** grants is a list of grants granted to the grantee. */
    grants: GrantAuthorization[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse | undefined;
}
export interface QueryGranteeGrantsResponseProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsResponse";
    value: Uint8Array;
}
/** QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants RPC method. */
export interface QueryGranteeGrantsResponseAmino {
    /** grants is a list of grants granted to the grantee. */
    grants?: GrantAuthorizationAmino[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponseAmino | undefined;
}
export interface QueryGranteeGrantsResponseAminoMsg {
    type: "cosmos-sdk/QueryGranteeGrantsResponse";
    value: QueryGranteeGrantsResponseAmino;
}
/** QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants RPC method. */
export interface QueryGranteeGrantsResponseSDKType {
    grants: GrantAuthorizationSDKType[];
    pagination?: PageResponseSDKType | undefined;
}
export declare const QueryGrantsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryGrantsRequest;
    isSDK(o: any): o is QueryGrantsRequestSDKType;
    isAmino(o: any): o is QueryGrantsRequestAmino;
    encode(message: QueryGrantsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGrantsRequest;
    fromJSON(object: any): QueryGrantsRequest;
    toJSON(message: QueryGrantsRequest): unknown;
    fromPartial(object: DeepPartial<QueryGrantsRequest>): QueryGrantsRequest;
    fromSDK(object: QueryGrantsRequestSDKType): QueryGrantsRequest;
    toSDK(message: QueryGrantsRequest): QueryGrantsRequestSDKType;
    fromAmino(object: QueryGrantsRequestAmino): QueryGrantsRequest;
    toAmino(message: QueryGrantsRequest): QueryGrantsRequestAmino;
    fromAminoMsg(object: QueryGrantsRequestAminoMsg): QueryGrantsRequest;
    toAminoMsg(message: QueryGrantsRequest): QueryGrantsRequestAminoMsg;
    fromProtoMsg(message: QueryGrantsRequestProtoMsg): QueryGrantsRequest;
    toProto(message: QueryGrantsRequest): Uint8Array;
    toProtoMsg(message: QueryGrantsRequest): QueryGrantsRequestProtoMsg;
};
export declare const QueryGrantsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryGrantsResponse;
    isSDK(o: any): o is QueryGrantsResponseSDKType;
    isAmino(o: any): o is QueryGrantsResponseAmino;
    encode(message: QueryGrantsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGrantsResponse;
    fromJSON(object: any): QueryGrantsResponse;
    toJSON(message: QueryGrantsResponse): unknown;
    fromPartial(object: DeepPartial<QueryGrantsResponse>): QueryGrantsResponse;
    fromSDK(object: QueryGrantsResponseSDKType): QueryGrantsResponse;
    toSDK(message: QueryGrantsResponse): QueryGrantsResponseSDKType;
    fromAmino(object: QueryGrantsResponseAmino): QueryGrantsResponse;
    toAmino(message: QueryGrantsResponse): QueryGrantsResponseAmino;
    fromAminoMsg(object: QueryGrantsResponseAminoMsg): QueryGrantsResponse;
    toAminoMsg(message: QueryGrantsResponse): QueryGrantsResponseAminoMsg;
    fromProtoMsg(message: QueryGrantsResponseProtoMsg): QueryGrantsResponse;
    toProto(message: QueryGrantsResponse): Uint8Array;
    toProtoMsg(message: QueryGrantsResponse): QueryGrantsResponseProtoMsg;
};
export declare const QueryGranterGrantsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryGranterGrantsRequest;
    isSDK(o: any): o is QueryGranterGrantsRequestSDKType;
    isAmino(o: any): o is QueryGranterGrantsRequestAmino;
    encode(message: QueryGranterGrantsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGranterGrantsRequest;
    fromJSON(object: any): QueryGranterGrantsRequest;
    toJSON(message: QueryGranterGrantsRequest): unknown;
    fromPartial(object: DeepPartial<QueryGranterGrantsRequest>): QueryGranterGrantsRequest;
    fromSDK(object: QueryGranterGrantsRequestSDKType): QueryGranterGrantsRequest;
    toSDK(message: QueryGranterGrantsRequest): QueryGranterGrantsRequestSDKType;
    fromAmino(object: QueryGranterGrantsRequestAmino): QueryGranterGrantsRequest;
    toAmino(message: QueryGranterGrantsRequest): QueryGranterGrantsRequestAmino;
    fromAminoMsg(object: QueryGranterGrantsRequestAminoMsg): QueryGranterGrantsRequest;
    toAminoMsg(message: QueryGranterGrantsRequest): QueryGranterGrantsRequestAminoMsg;
    fromProtoMsg(message: QueryGranterGrantsRequestProtoMsg): QueryGranterGrantsRequest;
    toProto(message: QueryGranterGrantsRequest): Uint8Array;
    toProtoMsg(message: QueryGranterGrantsRequest): QueryGranterGrantsRequestProtoMsg;
};
export declare const QueryGranterGrantsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryGranterGrantsResponse;
    isSDK(o: any): o is QueryGranterGrantsResponseSDKType;
    isAmino(o: any): o is QueryGranterGrantsResponseAmino;
    encode(message: QueryGranterGrantsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGranterGrantsResponse;
    fromJSON(object: any): QueryGranterGrantsResponse;
    toJSON(message: QueryGranterGrantsResponse): unknown;
    fromPartial(object: DeepPartial<QueryGranterGrantsResponse>): QueryGranterGrantsResponse;
    fromSDK(object: QueryGranterGrantsResponseSDKType): QueryGranterGrantsResponse;
    toSDK(message: QueryGranterGrantsResponse): QueryGranterGrantsResponseSDKType;
    fromAmino(object: QueryGranterGrantsResponseAmino): QueryGranterGrantsResponse;
    toAmino(message: QueryGranterGrantsResponse): QueryGranterGrantsResponseAmino;
    fromAminoMsg(object: QueryGranterGrantsResponseAminoMsg): QueryGranterGrantsResponse;
    toAminoMsg(message: QueryGranterGrantsResponse): QueryGranterGrantsResponseAminoMsg;
    fromProtoMsg(message: QueryGranterGrantsResponseProtoMsg): QueryGranterGrantsResponse;
    toProto(message: QueryGranterGrantsResponse): Uint8Array;
    toProtoMsg(message: QueryGranterGrantsResponse): QueryGranterGrantsResponseProtoMsg;
};
export declare const QueryGranteeGrantsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryGranteeGrantsRequest;
    isSDK(o: any): o is QueryGranteeGrantsRequestSDKType;
    isAmino(o: any): o is QueryGranteeGrantsRequestAmino;
    encode(message: QueryGranteeGrantsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGranteeGrantsRequest;
    fromJSON(object: any): QueryGranteeGrantsRequest;
    toJSON(message: QueryGranteeGrantsRequest): unknown;
    fromPartial(object: DeepPartial<QueryGranteeGrantsRequest>): QueryGranteeGrantsRequest;
    fromSDK(object: QueryGranteeGrantsRequestSDKType): QueryGranteeGrantsRequest;
    toSDK(message: QueryGranteeGrantsRequest): QueryGranteeGrantsRequestSDKType;
    fromAmino(object: QueryGranteeGrantsRequestAmino): QueryGranteeGrantsRequest;
    toAmino(message: QueryGranteeGrantsRequest): QueryGranteeGrantsRequestAmino;
    fromAminoMsg(object: QueryGranteeGrantsRequestAminoMsg): QueryGranteeGrantsRequest;
    toAminoMsg(message: QueryGranteeGrantsRequest): QueryGranteeGrantsRequestAminoMsg;
    fromProtoMsg(message: QueryGranteeGrantsRequestProtoMsg): QueryGranteeGrantsRequest;
    toProto(message: QueryGranteeGrantsRequest): Uint8Array;
    toProtoMsg(message: QueryGranteeGrantsRequest): QueryGranteeGrantsRequestProtoMsg;
};
export declare const QueryGranteeGrantsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryGranteeGrantsResponse;
    isSDK(o: any): o is QueryGranteeGrantsResponseSDKType;
    isAmino(o: any): o is QueryGranteeGrantsResponseAmino;
    encode(message: QueryGranteeGrantsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGranteeGrantsResponse;
    fromJSON(object: any): QueryGranteeGrantsResponse;
    toJSON(message: QueryGranteeGrantsResponse): unknown;
    fromPartial(object: DeepPartial<QueryGranteeGrantsResponse>): QueryGranteeGrantsResponse;
    fromSDK(object: QueryGranteeGrantsResponseSDKType): QueryGranteeGrantsResponse;
    toSDK(message: QueryGranteeGrantsResponse): QueryGranteeGrantsResponseSDKType;
    fromAmino(object: QueryGranteeGrantsResponseAmino): QueryGranteeGrantsResponse;
    toAmino(message: QueryGranteeGrantsResponse): QueryGranteeGrantsResponseAmino;
    fromAminoMsg(object: QueryGranteeGrantsResponseAminoMsg): QueryGranteeGrantsResponse;
    toAminoMsg(message: QueryGranteeGrantsResponse): QueryGranteeGrantsResponseAminoMsg;
    fromProtoMsg(message: QueryGranteeGrantsResponseProtoMsg): QueryGranteeGrantsResponse;
    toProto(message: QueryGranteeGrantsResponse): Uint8Array;
    toProtoMsg(message: QueryGranteeGrantsResponse): QueryGranteeGrantsResponseProtoMsg;
};
