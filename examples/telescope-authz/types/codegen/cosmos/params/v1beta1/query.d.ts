import { ParamChange, ParamChangeAmino, ParamChangeSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
    /** subspace defines the module to query the parameter for. */
    subspace: string;
    /** key defines the key of the parameter in the subspace. */
    key: string;
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/cosmos.params.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
    /** subspace defines the module to query the parameter for. */
    subspace?: string;
    /** key defines the key of the parameter in the subspace. */
    key?: string;
}
export interface QueryParamsRequestAminoMsg {
    type: "cosmos-sdk/QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
    subspace: string;
    key: string;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** param defines the queried parameter. */
    param: ParamChange | undefined;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/cosmos.params.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** param defines the queried parameter. */
    param?: ParamChangeAmino | undefined;
}
export interface QueryParamsResponseAminoMsg {
    type: "cosmos-sdk/QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    param: ParamChangeSDKType | undefined;
}
/**
 * QuerySubspacesRequest defines a request type for querying for all registered
 * subspaces and all keys for a subspace.
 */
export interface QuerySubspacesRequest {
}
export interface QuerySubspacesRequestProtoMsg {
    typeUrl: "/cosmos.params.v1beta1.QuerySubspacesRequest";
    value: Uint8Array;
}
/**
 * QuerySubspacesRequest defines a request type for querying for all registered
 * subspaces and all keys for a subspace.
 */
export interface QuerySubspacesRequestAmino {
}
export interface QuerySubspacesRequestAminoMsg {
    type: "cosmos-sdk/QuerySubspacesRequest";
    value: QuerySubspacesRequestAmino;
}
/**
 * QuerySubspacesRequest defines a request type for querying for all registered
 * subspaces and all keys for a subspace.
 */
export interface QuerySubspacesRequestSDKType {
}
/**
 * QuerySubspacesResponse defines the response types for querying for all
 * registered subspaces and all keys for a subspace.
 */
export interface QuerySubspacesResponse {
    subspaces: Subspace[];
}
export interface QuerySubspacesResponseProtoMsg {
    typeUrl: "/cosmos.params.v1beta1.QuerySubspacesResponse";
    value: Uint8Array;
}
/**
 * QuerySubspacesResponse defines the response types for querying for all
 * registered subspaces and all keys for a subspace.
 */
export interface QuerySubspacesResponseAmino {
    subspaces?: SubspaceAmino[];
}
export interface QuerySubspacesResponseAminoMsg {
    type: "cosmos-sdk/QuerySubspacesResponse";
    value: QuerySubspacesResponseAmino;
}
/**
 * QuerySubspacesResponse defines the response types for querying for all
 * registered subspaces and all keys for a subspace.
 */
export interface QuerySubspacesResponseSDKType {
    subspaces: SubspaceSDKType[];
}
/**
 * Subspace defines a parameter subspace name and all the keys that exist for
 * the subspace.
 */
export interface Subspace {
    subspace: string;
    keys: string[];
}
export interface SubspaceProtoMsg {
    typeUrl: "/cosmos.params.v1beta1.Subspace";
    value: Uint8Array;
}
/**
 * Subspace defines a parameter subspace name and all the keys that exist for
 * the subspace.
 */
export interface SubspaceAmino {
    subspace?: string;
    keys?: string[];
}
export interface SubspaceAminoMsg {
    type: "cosmos-sdk/Subspace";
    value: SubspaceAmino;
}
/**
 * Subspace defines a parameter subspace name and all the keys that exist for
 * the subspace.
 */
export interface SubspaceSDKType {
    subspace: string;
    keys: string[];
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryParamsRequest;
    isSDK(o: any): o is QueryParamsRequestSDKType;
    isAmino(o: any): o is QueryParamsRequestAmino;
    encode(message: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(object: any): QueryParamsRequest;
    toJSON(message: QueryParamsRequest): unknown;
    fromPartial(object: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
    fromSDK(object: QueryParamsRequestSDKType): QueryParamsRequest;
    toSDK(message: QueryParamsRequest): QueryParamsRequestSDKType;
    fromAmino(object: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(message: QueryParamsRequest): QueryParamsRequestAmino;
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
export declare const QuerySubspacesRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QuerySubspacesRequest;
    isSDK(o: any): o is QuerySubspacesRequestSDKType;
    isAmino(o: any): o is QuerySubspacesRequestAmino;
    encode(_: QuerySubspacesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySubspacesRequest;
    fromJSON(_: any): QuerySubspacesRequest;
    toJSON(_: QuerySubspacesRequest): unknown;
    fromPartial(_: DeepPartial<QuerySubspacesRequest>): QuerySubspacesRequest;
    fromSDK(_: QuerySubspacesRequestSDKType): QuerySubspacesRequest;
    toSDK(_: QuerySubspacesRequest): QuerySubspacesRequestSDKType;
    fromAmino(_: QuerySubspacesRequestAmino): QuerySubspacesRequest;
    toAmino(_: QuerySubspacesRequest): QuerySubspacesRequestAmino;
    fromAminoMsg(object: QuerySubspacesRequestAminoMsg): QuerySubspacesRequest;
    toAminoMsg(message: QuerySubspacesRequest): QuerySubspacesRequestAminoMsg;
    fromProtoMsg(message: QuerySubspacesRequestProtoMsg): QuerySubspacesRequest;
    toProto(message: QuerySubspacesRequest): Uint8Array;
    toProtoMsg(message: QuerySubspacesRequest): QuerySubspacesRequestProtoMsg;
};
export declare const QuerySubspacesResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QuerySubspacesResponse;
    isSDK(o: any): o is QuerySubspacesResponseSDKType;
    isAmino(o: any): o is QuerySubspacesResponseAmino;
    encode(message: QuerySubspacesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySubspacesResponse;
    fromJSON(object: any): QuerySubspacesResponse;
    toJSON(message: QuerySubspacesResponse): unknown;
    fromPartial(object: DeepPartial<QuerySubspacesResponse>): QuerySubspacesResponse;
    fromSDK(object: QuerySubspacesResponseSDKType): QuerySubspacesResponse;
    toSDK(message: QuerySubspacesResponse): QuerySubspacesResponseSDKType;
    fromAmino(object: QuerySubspacesResponseAmino): QuerySubspacesResponse;
    toAmino(message: QuerySubspacesResponse): QuerySubspacesResponseAmino;
    fromAminoMsg(object: QuerySubspacesResponseAminoMsg): QuerySubspacesResponse;
    toAminoMsg(message: QuerySubspacesResponse): QuerySubspacesResponseAminoMsg;
    fromProtoMsg(message: QuerySubspacesResponseProtoMsg): QuerySubspacesResponse;
    toProto(message: QuerySubspacesResponse): Uint8Array;
    toProtoMsg(message: QuerySubspacesResponse): QuerySubspacesResponseProtoMsg;
};
export declare const Subspace: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Subspace;
    isSDK(o: any): o is SubspaceSDKType;
    isAmino(o: any): o is SubspaceAmino;
    encode(message: Subspace, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Subspace;
    fromJSON(object: any): Subspace;
    toJSON(message: Subspace): unknown;
    fromPartial(object: DeepPartial<Subspace>): Subspace;
    fromSDK(object: SubspaceSDKType): Subspace;
    toSDK(message: Subspace): SubspaceSDKType;
    fromAmino(object: SubspaceAmino): Subspace;
    toAmino(message: Subspace): SubspaceAmino;
    fromAminoMsg(object: SubspaceAminoMsg): Subspace;
    toAminoMsg(message: Subspace): SubspaceAminoMsg;
    fromProtoMsg(message: SubspaceProtoMsg): Subspace;
    toProto(message: Subspace): Uint8Array;
    toProtoMsg(message: Subspace): SubspaceProtoMsg;
};
