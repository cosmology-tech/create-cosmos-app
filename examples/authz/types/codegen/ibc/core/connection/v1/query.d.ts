import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { ConnectionEnd, ConnectionEndAmino, ConnectionEndSDKType, IdentifiedConnection, IdentifiedConnectionAmino, IdentifiedConnectionSDKType } from "./connection";
import { Height, HeightAmino, HeightSDKType, IdentifiedClientState, IdentifiedClientStateAmino, IdentifiedClientStateSDKType } from "../../client/v1/client";
import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * QueryConnectionRequest is the request type for the Query/Connection RPC
 * method
 */
export interface QueryConnectionRequest {
    /** connection unique identifier */
    connectionId: string;
}
export interface QueryConnectionRequestProtoMsg {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionRequest";
    value: Uint8Array;
}
/**
 * QueryConnectionRequest is the request type for the Query/Connection RPC
 * method
 */
export interface QueryConnectionRequestAmino {
    /** connection unique identifier */
    connection_id?: string;
}
export interface QueryConnectionRequestAminoMsg {
    type: "cosmos-sdk/QueryConnectionRequest";
    value: QueryConnectionRequestAmino;
}
/**
 * QueryConnectionRequest is the request type for the Query/Connection RPC
 * method
 */
export interface QueryConnectionRequestSDKType {
    connection_id: string;
}
/**
 * QueryConnectionResponse is the response type for the Query/Connection RPC
 * method. Besides the connection end, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryConnectionResponse {
    /** connection associated with the request identifier */
    connection?: ConnectionEnd | undefined;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight: Height | undefined;
}
export interface QueryConnectionResponseProtoMsg {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionResponse";
    value: Uint8Array;
}
/**
 * QueryConnectionResponse is the response type for the Query/Connection RPC
 * method. Besides the connection end, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryConnectionResponseAmino {
    /** connection associated with the request identifier */
    connection?: ConnectionEndAmino | undefined;
    /** merkle proof of existence */
    proof?: string;
    /** height at which the proof was retrieved */
    proof_height?: HeightAmino | undefined;
}
export interface QueryConnectionResponseAminoMsg {
    type: "cosmos-sdk/QueryConnectionResponse";
    value: QueryConnectionResponseAmino;
}
/**
 * QueryConnectionResponse is the response type for the Query/Connection RPC
 * method. Besides the connection end, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryConnectionResponseSDKType {
    connection?: ConnectionEndSDKType | undefined;
    proof: Uint8Array;
    proof_height: HeightSDKType | undefined;
}
/**
 * QueryConnectionsRequest is the request type for the Query/Connections RPC
 * method
 */
export interface QueryConnectionsRequest {
    pagination?: PageRequest | undefined;
}
export interface QueryConnectionsRequestProtoMsg {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionsRequest";
    value: Uint8Array;
}
/**
 * QueryConnectionsRequest is the request type for the Query/Connections RPC
 * method
 */
export interface QueryConnectionsRequestAmino {
    pagination?: PageRequestAmino | undefined;
}
export interface QueryConnectionsRequestAminoMsg {
    type: "cosmos-sdk/QueryConnectionsRequest";
    value: QueryConnectionsRequestAmino;
}
/**
 * QueryConnectionsRequest is the request type for the Query/Connections RPC
 * method
 */
export interface QueryConnectionsRequestSDKType {
    pagination?: PageRequestSDKType | undefined;
}
/**
 * QueryConnectionsResponse is the response type for the Query/Connections RPC
 * method.
 */
export interface QueryConnectionsResponse {
    /** list of stored connections of the chain. */
    connections: IdentifiedConnection[];
    /** pagination response */
    pagination?: PageResponse | undefined;
    /** query block height */
    height: Height | undefined;
}
export interface QueryConnectionsResponseProtoMsg {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionsResponse";
    value: Uint8Array;
}
/**
 * QueryConnectionsResponse is the response type for the Query/Connections RPC
 * method.
 */
export interface QueryConnectionsResponseAmino {
    /** list of stored connections of the chain. */
    connections?: IdentifiedConnectionAmino[];
    /** pagination response */
    pagination?: PageResponseAmino | undefined;
    /** query block height */
    height?: HeightAmino | undefined;
}
export interface QueryConnectionsResponseAminoMsg {
    type: "cosmos-sdk/QueryConnectionsResponse";
    value: QueryConnectionsResponseAmino;
}
/**
 * QueryConnectionsResponse is the response type for the Query/Connections RPC
 * method.
 */
export interface QueryConnectionsResponseSDKType {
    connections: IdentifiedConnectionSDKType[];
    pagination?: PageResponseSDKType | undefined;
    height: HeightSDKType | undefined;
}
/**
 * QueryClientConnectionsRequest is the request type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsRequest {
    /** client identifier associated with a connection */
    clientId: string;
}
export interface QueryClientConnectionsRequestProtoMsg {
    typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsRequest";
    value: Uint8Array;
}
/**
 * QueryClientConnectionsRequest is the request type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsRequestAmino {
    /** client identifier associated with a connection */
    client_id?: string;
}
export interface QueryClientConnectionsRequestAminoMsg {
    type: "cosmos-sdk/QueryClientConnectionsRequest";
    value: QueryClientConnectionsRequestAmino;
}
/**
 * QueryClientConnectionsRequest is the request type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsRequestSDKType {
    client_id: string;
}
/**
 * QueryClientConnectionsResponse is the response type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsResponse {
    /** slice of all the connection paths associated with a client. */
    connectionPaths: string[];
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was generated */
    proofHeight: Height | undefined;
}
export interface QueryClientConnectionsResponseProtoMsg {
    typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsResponse";
    value: Uint8Array;
}
/**
 * QueryClientConnectionsResponse is the response type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsResponseAmino {
    /** slice of all the connection paths associated with a client. */
    connection_paths?: string[];
    /** merkle proof of existence */
    proof?: string;
    /** height at which the proof was generated */
    proof_height?: HeightAmino | undefined;
}
export interface QueryClientConnectionsResponseAminoMsg {
    type: "cosmos-sdk/QueryClientConnectionsResponse";
    value: QueryClientConnectionsResponseAmino;
}
/**
 * QueryClientConnectionsResponse is the response type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsResponseSDKType {
    connection_paths: string[];
    proof: Uint8Array;
    proof_height: HeightSDKType | undefined;
}
/**
 * QueryConnectionClientStateRequest is the request type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateRequest {
    /** connection identifier */
    connectionId: string;
}
export interface QueryConnectionClientStateRequestProtoMsg {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateRequest";
    value: Uint8Array;
}
/**
 * QueryConnectionClientStateRequest is the request type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateRequestAmino {
    /** connection identifier */
    connection_id?: string;
}
export interface QueryConnectionClientStateRequestAminoMsg {
    type: "cosmos-sdk/QueryConnectionClientStateRequest";
    value: QueryConnectionClientStateRequestAmino;
}
/**
 * QueryConnectionClientStateRequest is the request type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateRequestSDKType {
    connection_id: string;
}
/**
 * QueryConnectionClientStateResponse is the response type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateResponse {
    /** client state associated with the channel */
    identifiedClientState?: IdentifiedClientState | undefined;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight: Height | undefined;
}
export interface QueryConnectionClientStateResponseProtoMsg {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateResponse";
    value: Uint8Array;
}
/**
 * QueryConnectionClientStateResponse is the response type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateResponseAmino {
    /** client state associated with the channel */
    identified_client_state?: IdentifiedClientStateAmino | undefined;
    /** merkle proof of existence */
    proof?: string;
    /** height at which the proof was retrieved */
    proof_height?: HeightAmino | undefined;
}
export interface QueryConnectionClientStateResponseAminoMsg {
    type: "cosmos-sdk/QueryConnectionClientStateResponse";
    value: QueryConnectionClientStateResponseAmino;
}
/**
 * QueryConnectionClientStateResponse is the response type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateResponseSDKType {
    identified_client_state?: IdentifiedClientStateSDKType | undefined;
    proof: Uint8Array;
    proof_height: HeightSDKType | undefined;
}
/**
 * QueryConnectionConsensusStateRequest is the request type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateRequest {
    /** connection identifier */
    connectionId: string;
    revisionNumber: bigint;
    revisionHeight: bigint;
}
export interface QueryConnectionConsensusStateRequestProtoMsg {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateRequest";
    value: Uint8Array;
}
/**
 * QueryConnectionConsensusStateRequest is the request type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateRequestAmino {
    /** connection identifier */
    connection_id?: string;
    revision_number?: string;
    revision_height?: string;
}
export interface QueryConnectionConsensusStateRequestAminoMsg {
    type: "cosmos-sdk/QueryConnectionConsensusStateRequest";
    value: QueryConnectionConsensusStateRequestAmino;
}
/**
 * QueryConnectionConsensusStateRequest is the request type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateRequestSDKType {
    connection_id: string;
    revision_number: bigint;
    revision_height: bigint;
}
/**
 * QueryConnectionConsensusStateResponse is the response type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateResponse {
    /** consensus state associated with the channel */
    consensusState?: Any | undefined;
    /** client ID associated with the consensus state */
    clientId: string;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight: Height | undefined;
}
export interface QueryConnectionConsensusStateResponseProtoMsg {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateResponse";
    value: Uint8Array;
}
/**
 * QueryConnectionConsensusStateResponse is the response type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateResponseAmino {
    /** consensus state associated with the channel */
    consensus_state?: AnyAmino | undefined;
    /** client ID associated with the consensus state */
    client_id?: string;
    /** merkle proof of existence */
    proof?: string;
    /** height at which the proof was retrieved */
    proof_height?: HeightAmino | undefined;
}
export interface QueryConnectionConsensusStateResponseAminoMsg {
    type: "cosmos-sdk/QueryConnectionConsensusStateResponse";
    value: QueryConnectionConsensusStateResponseAmino;
}
/**
 * QueryConnectionConsensusStateResponse is the response type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateResponseSDKType {
    consensus_state?: AnySDKType | undefined;
    client_id: string;
    proof: Uint8Array;
    proof_height: HeightSDKType | undefined;
}
export declare const QueryConnectionRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryConnectionRequest;
    isSDK(o: any): o is QueryConnectionRequestSDKType;
    isAmino(o: any): o is QueryConnectionRequestAmino;
    encode(message: QueryConnectionRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryConnectionRequest;
    fromJSON(object: any): QueryConnectionRequest;
    toJSON(message: QueryConnectionRequest): unknown;
    fromPartial(object: DeepPartial<QueryConnectionRequest>): QueryConnectionRequest;
    fromSDK(object: QueryConnectionRequestSDKType): QueryConnectionRequest;
    toSDK(message: QueryConnectionRequest): QueryConnectionRequestSDKType;
    fromAmino(object: QueryConnectionRequestAmino): QueryConnectionRequest;
    toAmino(message: QueryConnectionRequest): QueryConnectionRequestAmino;
    fromAminoMsg(object: QueryConnectionRequestAminoMsg): QueryConnectionRequest;
    toAminoMsg(message: QueryConnectionRequest): QueryConnectionRequestAminoMsg;
    fromProtoMsg(message: QueryConnectionRequestProtoMsg): QueryConnectionRequest;
    toProto(message: QueryConnectionRequest): Uint8Array;
    toProtoMsg(message: QueryConnectionRequest): QueryConnectionRequestProtoMsg;
};
export declare const QueryConnectionResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryConnectionResponse;
    isSDK(o: any): o is QueryConnectionResponseSDKType;
    isAmino(o: any): o is QueryConnectionResponseAmino;
    encode(message: QueryConnectionResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryConnectionResponse;
    fromJSON(object: any): QueryConnectionResponse;
    toJSON(message: QueryConnectionResponse): unknown;
    fromPartial(object: DeepPartial<QueryConnectionResponse>): QueryConnectionResponse;
    fromSDK(object: QueryConnectionResponseSDKType): QueryConnectionResponse;
    toSDK(message: QueryConnectionResponse): QueryConnectionResponseSDKType;
    fromAmino(object: QueryConnectionResponseAmino): QueryConnectionResponse;
    toAmino(message: QueryConnectionResponse): QueryConnectionResponseAmino;
    fromAminoMsg(object: QueryConnectionResponseAminoMsg): QueryConnectionResponse;
    toAminoMsg(message: QueryConnectionResponse): QueryConnectionResponseAminoMsg;
    fromProtoMsg(message: QueryConnectionResponseProtoMsg): QueryConnectionResponse;
    toProto(message: QueryConnectionResponse): Uint8Array;
    toProtoMsg(message: QueryConnectionResponse): QueryConnectionResponseProtoMsg;
};
export declare const QueryConnectionsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryConnectionsRequest;
    isSDK(o: any): o is QueryConnectionsRequestSDKType;
    isAmino(o: any): o is QueryConnectionsRequestAmino;
    encode(message: QueryConnectionsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryConnectionsRequest;
    fromJSON(object: any): QueryConnectionsRequest;
    toJSON(message: QueryConnectionsRequest): unknown;
    fromPartial(object: DeepPartial<QueryConnectionsRequest>): QueryConnectionsRequest;
    fromSDK(object: QueryConnectionsRequestSDKType): QueryConnectionsRequest;
    toSDK(message: QueryConnectionsRequest): QueryConnectionsRequestSDKType;
    fromAmino(object: QueryConnectionsRequestAmino): QueryConnectionsRequest;
    toAmino(message: QueryConnectionsRequest): QueryConnectionsRequestAmino;
    fromAminoMsg(object: QueryConnectionsRequestAminoMsg): QueryConnectionsRequest;
    toAminoMsg(message: QueryConnectionsRequest): QueryConnectionsRequestAminoMsg;
    fromProtoMsg(message: QueryConnectionsRequestProtoMsg): QueryConnectionsRequest;
    toProto(message: QueryConnectionsRequest): Uint8Array;
    toProtoMsg(message: QueryConnectionsRequest): QueryConnectionsRequestProtoMsg;
};
export declare const QueryConnectionsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryConnectionsResponse;
    isSDK(o: any): o is QueryConnectionsResponseSDKType;
    isAmino(o: any): o is QueryConnectionsResponseAmino;
    encode(message: QueryConnectionsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryConnectionsResponse;
    fromJSON(object: any): QueryConnectionsResponse;
    toJSON(message: QueryConnectionsResponse): unknown;
    fromPartial(object: DeepPartial<QueryConnectionsResponse>): QueryConnectionsResponse;
    fromSDK(object: QueryConnectionsResponseSDKType): QueryConnectionsResponse;
    toSDK(message: QueryConnectionsResponse): QueryConnectionsResponseSDKType;
    fromAmino(object: QueryConnectionsResponseAmino): QueryConnectionsResponse;
    toAmino(message: QueryConnectionsResponse): QueryConnectionsResponseAmino;
    fromAminoMsg(object: QueryConnectionsResponseAminoMsg): QueryConnectionsResponse;
    toAminoMsg(message: QueryConnectionsResponse): QueryConnectionsResponseAminoMsg;
    fromProtoMsg(message: QueryConnectionsResponseProtoMsg): QueryConnectionsResponse;
    toProto(message: QueryConnectionsResponse): Uint8Array;
    toProtoMsg(message: QueryConnectionsResponse): QueryConnectionsResponseProtoMsg;
};
export declare const QueryClientConnectionsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryClientConnectionsRequest;
    isSDK(o: any): o is QueryClientConnectionsRequestSDKType;
    isAmino(o: any): o is QueryClientConnectionsRequestAmino;
    encode(message: QueryClientConnectionsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClientConnectionsRequest;
    fromJSON(object: any): QueryClientConnectionsRequest;
    toJSON(message: QueryClientConnectionsRequest): unknown;
    fromPartial(object: DeepPartial<QueryClientConnectionsRequest>): QueryClientConnectionsRequest;
    fromSDK(object: QueryClientConnectionsRequestSDKType): QueryClientConnectionsRequest;
    toSDK(message: QueryClientConnectionsRequest): QueryClientConnectionsRequestSDKType;
    fromAmino(object: QueryClientConnectionsRequestAmino): QueryClientConnectionsRequest;
    toAmino(message: QueryClientConnectionsRequest): QueryClientConnectionsRequestAmino;
    fromAminoMsg(object: QueryClientConnectionsRequestAminoMsg): QueryClientConnectionsRequest;
    toAminoMsg(message: QueryClientConnectionsRequest): QueryClientConnectionsRequestAminoMsg;
    fromProtoMsg(message: QueryClientConnectionsRequestProtoMsg): QueryClientConnectionsRequest;
    toProto(message: QueryClientConnectionsRequest): Uint8Array;
    toProtoMsg(message: QueryClientConnectionsRequest): QueryClientConnectionsRequestProtoMsg;
};
export declare const QueryClientConnectionsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryClientConnectionsResponse;
    isSDK(o: any): o is QueryClientConnectionsResponseSDKType;
    isAmino(o: any): o is QueryClientConnectionsResponseAmino;
    encode(message: QueryClientConnectionsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClientConnectionsResponse;
    fromJSON(object: any): QueryClientConnectionsResponse;
    toJSON(message: QueryClientConnectionsResponse): unknown;
    fromPartial(object: DeepPartial<QueryClientConnectionsResponse>): QueryClientConnectionsResponse;
    fromSDK(object: QueryClientConnectionsResponseSDKType): QueryClientConnectionsResponse;
    toSDK(message: QueryClientConnectionsResponse): QueryClientConnectionsResponseSDKType;
    fromAmino(object: QueryClientConnectionsResponseAmino): QueryClientConnectionsResponse;
    toAmino(message: QueryClientConnectionsResponse): QueryClientConnectionsResponseAmino;
    fromAminoMsg(object: QueryClientConnectionsResponseAminoMsg): QueryClientConnectionsResponse;
    toAminoMsg(message: QueryClientConnectionsResponse): QueryClientConnectionsResponseAminoMsg;
    fromProtoMsg(message: QueryClientConnectionsResponseProtoMsg): QueryClientConnectionsResponse;
    toProto(message: QueryClientConnectionsResponse): Uint8Array;
    toProtoMsg(message: QueryClientConnectionsResponse): QueryClientConnectionsResponseProtoMsg;
};
export declare const QueryConnectionClientStateRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryConnectionClientStateRequest;
    isSDK(o: any): o is QueryConnectionClientStateRequestSDKType;
    isAmino(o: any): o is QueryConnectionClientStateRequestAmino;
    encode(message: QueryConnectionClientStateRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryConnectionClientStateRequest;
    fromJSON(object: any): QueryConnectionClientStateRequest;
    toJSON(message: QueryConnectionClientStateRequest): unknown;
    fromPartial(object: DeepPartial<QueryConnectionClientStateRequest>): QueryConnectionClientStateRequest;
    fromSDK(object: QueryConnectionClientStateRequestSDKType): QueryConnectionClientStateRequest;
    toSDK(message: QueryConnectionClientStateRequest): QueryConnectionClientStateRequestSDKType;
    fromAmino(object: QueryConnectionClientStateRequestAmino): QueryConnectionClientStateRequest;
    toAmino(message: QueryConnectionClientStateRequest): QueryConnectionClientStateRequestAmino;
    fromAminoMsg(object: QueryConnectionClientStateRequestAminoMsg): QueryConnectionClientStateRequest;
    toAminoMsg(message: QueryConnectionClientStateRequest): QueryConnectionClientStateRequestAminoMsg;
    fromProtoMsg(message: QueryConnectionClientStateRequestProtoMsg): QueryConnectionClientStateRequest;
    toProto(message: QueryConnectionClientStateRequest): Uint8Array;
    toProtoMsg(message: QueryConnectionClientStateRequest): QueryConnectionClientStateRequestProtoMsg;
};
export declare const QueryConnectionClientStateResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryConnectionClientStateResponse;
    isSDK(o: any): o is QueryConnectionClientStateResponseSDKType;
    isAmino(o: any): o is QueryConnectionClientStateResponseAmino;
    encode(message: QueryConnectionClientStateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryConnectionClientStateResponse;
    fromJSON(object: any): QueryConnectionClientStateResponse;
    toJSON(message: QueryConnectionClientStateResponse): unknown;
    fromPartial(object: DeepPartial<QueryConnectionClientStateResponse>): QueryConnectionClientStateResponse;
    fromSDK(object: QueryConnectionClientStateResponseSDKType): QueryConnectionClientStateResponse;
    toSDK(message: QueryConnectionClientStateResponse): QueryConnectionClientStateResponseSDKType;
    fromAmino(object: QueryConnectionClientStateResponseAmino): QueryConnectionClientStateResponse;
    toAmino(message: QueryConnectionClientStateResponse): QueryConnectionClientStateResponseAmino;
    fromAminoMsg(object: QueryConnectionClientStateResponseAminoMsg): QueryConnectionClientStateResponse;
    toAminoMsg(message: QueryConnectionClientStateResponse): QueryConnectionClientStateResponseAminoMsg;
    fromProtoMsg(message: QueryConnectionClientStateResponseProtoMsg): QueryConnectionClientStateResponse;
    toProto(message: QueryConnectionClientStateResponse): Uint8Array;
    toProtoMsg(message: QueryConnectionClientStateResponse): QueryConnectionClientStateResponseProtoMsg;
};
export declare const QueryConnectionConsensusStateRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryConnectionConsensusStateRequest;
    isSDK(o: any): o is QueryConnectionConsensusStateRequestSDKType;
    isAmino(o: any): o is QueryConnectionConsensusStateRequestAmino;
    encode(message: QueryConnectionConsensusStateRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryConnectionConsensusStateRequest;
    fromJSON(object: any): QueryConnectionConsensusStateRequest;
    toJSON(message: QueryConnectionConsensusStateRequest): unknown;
    fromPartial(object: DeepPartial<QueryConnectionConsensusStateRequest>): QueryConnectionConsensusStateRequest;
    fromSDK(object: QueryConnectionConsensusStateRequestSDKType): QueryConnectionConsensusStateRequest;
    toSDK(message: QueryConnectionConsensusStateRequest): QueryConnectionConsensusStateRequestSDKType;
    fromAmino(object: QueryConnectionConsensusStateRequestAmino): QueryConnectionConsensusStateRequest;
    toAmino(message: QueryConnectionConsensusStateRequest): QueryConnectionConsensusStateRequestAmino;
    fromAminoMsg(object: QueryConnectionConsensusStateRequestAminoMsg): QueryConnectionConsensusStateRequest;
    toAminoMsg(message: QueryConnectionConsensusStateRequest): QueryConnectionConsensusStateRequestAminoMsg;
    fromProtoMsg(message: QueryConnectionConsensusStateRequestProtoMsg): QueryConnectionConsensusStateRequest;
    toProto(message: QueryConnectionConsensusStateRequest): Uint8Array;
    toProtoMsg(message: QueryConnectionConsensusStateRequest): QueryConnectionConsensusStateRequestProtoMsg;
};
export declare const QueryConnectionConsensusStateResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryConnectionConsensusStateResponse;
    isSDK(o: any): o is QueryConnectionConsensusStateResponseSDKType;
    isAmino(o: any): o is QueryConnectionConsensusStateResponseAmino;
    encode(message: QueryConnectionConsensusStateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryConnectionConsensusStateResponse;
    fromJSON(object: any): QueryConnectionConsensusStateResponse;
    toJSON(message: QueryConnectionConsensusStateResponse): unknown;
    fromPartial(object: DeepPartial<QueryConnectionConsensusStateResponse>): QueryConnectionConsensusStateResponse;
    fromSDK(object: QueryConnectionConsensusStateResponseSDKType): QueryConnectionConsensusStateResponse;
    toSDK(message: QueryConnectionConsensusStateResponse): QueryConnectionConsensusStateResponseSDKType;
    fromAmino(object: QueryConnectionConsensusStateResponseAmino): QueryConnectionConsensusStateResponse;
    toAmino(message: QueryConnectionConsensusStateResponse): QueryConnectionConsensusStateResponseAmino;
    fromAminoMsg(object: QueryConnectionConsensusStateResponseAminoMsg): QueryConnectionConsensusStateResponse;
    toAminoMsg(message: QueryConnectionConsensusStateResponse): QueryConnectionConsensusStateResponseAminoMsg;
    fromProtoMsg(message: QueryConnectionConsensusStateResponseProtoMsg): QueryConnectionConsensusStateResponse;
    toProto(message: QueryConnectionConsensusStateResponse): Uint8Array;
    toProtoMsg(message: QueryConnectionConsensusStateResponse): QueryConnectionConsensusStateResponseProtoMsg;
};
