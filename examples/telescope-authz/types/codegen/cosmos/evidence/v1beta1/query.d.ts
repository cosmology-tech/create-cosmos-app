import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** QueryEvidenceRequest is the request type for the Query/Evidence RPC method. */
export interface QueryEvidenceRequest {
    /** evidence_hash defines the hash of the requested evidence. */
    evidenceHash: Uint8Array;
}
export interface QueryEvidenceRequestProtoMsg {
    typeUrl: "/cosmos.evidence.v1beta1.QueryEvidenceRequest";
    value: Uint8Array;
}
/** QueryEvidenceRequest is the request type for the Query/Evidence RPC method. */
export interface QueryEvidenceRequestAmino {
    /** evidence_hash defines the hash of the requested evidence. */
    evidence_hash?: string;
}
export interface QueryEvidenceRequestAminoMsg {
    type: "cosmos-sdk/QueryEvidenceRequest";
    value: QueryEvidenceRequestAmino;
}
/** QueryEvidenceRequest is the request type for the Query/Evidence RPC method. */
export interface QueryEvidenceRequestSDKType {
    evidence_hash: Uint8Array;
}
/** QueryEvidenceResponse is the response type for the Query/Evidence RPC method. */
export interface QueryEvidenceResponse {
    /** evidence returns the requested evidence. */
    evidence?: Any | undefined;
}
export interface QueryEvidenceResponseProtoMsg {
    typeUrl: "/cosmos.evidence.v1beta1.QueryEvidenceResponse";
    value: Uint8Array;
}
/** QueryEvidenceResponse is the response type for the Query/Evidence RPC method. */
export interface QueryEvidenceResponseAmino {
    /** evidence returns the requested evidence. */
    evidence?: AnyAmino | undefined;
}
export interface QueryEvidenceResponseAminoMsg {
    type: "cosmos-sdk/QueryEvidenceResponse";
    value: QueryEvidenceResponseAmino;
}
/** QueryEvidenceResponse is the response type for the Query/Evidence RPC method. */
export interface QueryEvidenceResponseSDKType {
    evidence?: AnySDKType | undefined;
}
/**
 * QueryEvidenceRequest is the request type for the Query/AllEvidence RPC
 * method.
 */
export interface QueryAllEvidenceRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
export interface QueryAllEvidenceRequestProtoMsg {
    typeUrl: "/cosmos.evidence.v1beta1.QueryAllEvidenceRequest";
    value: Uint8Array;
}
/**
 * QueryEvidenceRequest is the request type for the Query/AllEvidence RPC
 * method.
 */
export interface QueryAllEvidenceRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino | undefined;
}
export interface QueryAllEvidenceRequestAminoMsg {
    type: "cosmos-sdk/QueryAllEvidenceRequest";
    value: QueryAllEvidenceRequestAmino;
}
/**
 * QueryEvidenceRequest is the request type for the Query/AllEvidence RPC
 * method.
 */
export interface QueryAllEvidenceRequestSDKType {
    pagination?: PageRequestSDKType | undefined;
}
/**
 * QueryAllEvidenceResponse is the response type for the Query/AllEvidence RPC
 * method.
 */
export interface QueryAllEvidenceResponse {
    /** evidence returns all evidences. */
    evidence: Any[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
export interface QueryAllEvidenceResponseProtoMsg {
    typeUrl: "/cosmos.evidence.v1beta1.QueryAllEvidenceResponse";
    value: Uint8Array;
}
/**
 * QueryAllEvidenceResponse is the response type for the Query/AllEvidence RPC
 * method.
 */
export interface QueryAllEvidenceResponseAmino {
    /** evidence returns all evidences. */
    evidence?: AnyAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino | undefined;
}
export interface QueryAllEvidenceResponseAminoMsg {
    type: "cosmos-sdk/QueryAllEvidenceResponse";
    value: QueryAllEvidenceResponseAmino;
}
/**
 * QueryAllEvidenceResponse is the response type for the Query/AllEvidence RPC
 * method.
 */
export interface QueryAllEvidenceResponseSDKType {
    evidence: AnySDKType[];
    pagination?: PageResponseSDKType | undefined;
}
export declare const QueryEvidenceRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryEvidenceRequest;
    isSDK(o: any): o is QueryEvidenceRequestSDKType;
    isAmino(o: any): o is QueryEvidenceRequestAmino;
    encode(message: QueryEvidenceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryEvidenceRequest;
    fromJSON(object: any): QueryEvidenceRequest;
    toJSON(message: QueryEvidenceRequest): unknown;
    fromPartial(object: DeepPartial<QueryEvidenceRequest>): QueryEvidenceRequest;
    fromSDK(object: QueryEvidenceRequestSDKType): QueryEvidenceRequest;
    toSDK(message: QueryEvidenceRequest): QueryEvidenceRequestSDKType;
    fromAmino(object: QueryEvidenceRequestAmino): QueryEvidenceRequest;
    toAmino(message: QueryEvidenceRequest): QueryEvidenceRequestAmino;
    fromAminoMsg(object: QueryEvidenceRequestAminoMsg): QueryEvidenceRequest;
    toAminoMsg(message: QueryEvidenceRequest): QueryEvidenceRequestAminoMsg;
    fromProtoMsg(message: QueryEvidenceRequestProtoMsg): QueryEvidenceRequest;
    toProto(message: QueryEvidenceRequest): Uint8Array;
    toProtoMsg(message: QueryEvidenceRequest): QueryEvidenceRequestProtoMsg;
};
export declare const QueryEvidenceResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryEvidenceResponse;
    isSDK(o: any): o is QueryEvidenceResponseSDKType;
    isAmino(o: any): o is QueryEvidenceResponseAmino;
    encode(message: QueryEvidenceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryEvidenceResponse;
    fromJSON(object: any): QueryEvidenceResponse;
    toJSON(message: QueryEvidenceResponse): unknown;
    fromPartial(object: DeepPartial<QueryEvidenceResponse>): QueryEvidenceResponse;
    fromSDK(object: QueryEvidenceResponseSDKType): QueryEvidenceResponse;
    toSDK(message: QueryEvidenceResponse): QueryEvidenceResponseSDKType;
    fromAmino(object: QueryEvidenceResponseAmino): QueryEvidenceResponse;
    toAmino(message: QueryEvidenceResponse): QueryEvidenceResponseAmino;
    fromAminoMsg(object: QueryEvidenceResponseAminoMsg): QueryEvidenceResponse;
    toAminoMsg(message: QueryEvidenceResponse): QueryEvidenceResponseAminoMsg;
    fromProtoMsg(message: QueryEvidenceResponseProtoMsg): QueryEvidenceResponse;
    toProto(message: QueryEvidenceResponse): Uint8Array;
    toProtoMsg(message: QueryEvidenceResponse): QueryEvidenceResponseProtoMsg;
};
export declare const QueryAllEvidenceRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryAllEvidenceRequest;
    isSDK(o: any): o is QueryAllEvidenceRequestSDKType;
    isAmino(o: any): o is QueryAllEvidenceRequestAmino;
    encode(message: QueryAllEvidenceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllEvidenceRequest;
    fromJSON(object: any): QueryAllEvidenceRequest;
    toJSON(message: QueryAllEvidenceRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllEvidenceRequest>): QueryAllEvidenceRequest;
    fromSDK(object: QueryAllEvidenceRequestSDKType): QueryAllEvidenceRequest;
    toSDK(message: QueryAllEvidenceRequest): QueryAllEvidenceRequestSDKType;
    fromAmino(object: QueryAllEvidenceRequestAmino): QueryAllEvidenceRequest;
    toAmino(message: QueryAllEvidenceRequest): QueryAllEvidenceRequestAmino;
    fromAminoMsg(object: QueryAllEvidenceRequestAminoMsg): QueryAllEvidenceRequest;
    toAminoMsg(message: QueryAllEvidenceRequest): QueryAllEvidenceRequestAminoMsg;
    fromProtoMsg(message: QueryAllEvidenceRequestProtoMsg): QueryAllEvidenceRequest;
    toProto(message: QueryAllEvidenceRequest): Uint8Array;
    toProtoMsg(message: QueryAllEvidenceRequest): QueryAllEvidenceRequestProtoMsg;
};
export declare const QueryAllEvidenceResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryAllEvidenceResponse;
    isSDK(o: any): o is QueryAllEvidenceResponseSDKType;
    isAmino(o: any): o is QueryAllEvidenceResponseAmino;
    encode(message: QueryAllEvidenceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllEvidenceResponse;
    fromJSON(object: any): QueryAllEvidenceResponse;
    toJSON(message: QueryAllEvidenceResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllEvidenceResponse>): QueryAllEvidenceResponse;
    fromSDK(object: QueryAllEvidenceResponseSDKType): QueryAllEvidenceResponse;
    toSDK(message: QueryAllEvidenceResponse): QueryAllEvidenceResponseSDKType;
    fromAmino(object: QueryAllEvidenceResponseAmino): QueryAllEvidenceResponse;
    toAmino(message: QueryAllEvidenceResponse): QueryAllEvidenceResponseAmino;
    fromAminoMsg(object: QueryAllEvidenceResponseAminoMsg): QueryAllEvidenceResponse;
    toAminoMsg(message: QueryAllEvidenceResponse): QueryAllEvidenceResponseAminoMsg;
    fromProtoMsg(message: QueryAllEvidenceResponseProtoMsg): QueryAllEvidenceResponse;
    toProto(message: QueryAllEvidenceResponse): Uint8Array;
    toProtoMsg(message: QueryAllEvidenceResponse): QueryAllEvidenceResponseProtoMsg;
};
