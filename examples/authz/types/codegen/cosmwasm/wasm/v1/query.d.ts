import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { ContractInfo, ContractInfoAmino, ContractInfoSDKType, ContractCodeHistoryEntry, ContractCodeHistoryEntryAmino, ContractCodeHistoryEntrySDKType, Model, ModelAmino, ModelSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * QueryContractInfoRequest is the request type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoRequest {
    /** address is the address of the contract to query */
    address: string;
}
export interface QueryContractInfoRequestProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoRequest";
    value: Uint8Array;
}
/**
 * QueryContractInfoRequest is the request type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoRequestAmino {
    /** address is the address of the contract to query */
    address?: string;
}
export interface QueryContractInfoRequestAminoMsg {
    type: "wasm/QueryContractInfoRequest";
    value: QueryContractInfoRequestAmino;
}
/**
 * QueryContractInfoRequest is the request type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoRequestSDKType {
    address: string;
}
/**
 * QueryContractInfoResponse is the response type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoResponse {
    /** address is the address of the contract */
    address: string;
    contractInfo: ContractInfo | undefined;
}
export interface QueryContractInfoResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoResponse";
    value: Uint8Array;
}
/**
 * QueryContractInfoResponse is the response type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoResponseAmino {
    /** address is the address of the contract */
    address?: string;
    contract_info?: ContractInfoAmino | undefined;
}
export interface QueryContractInfoResponseAminoMsg {
    type: "wasm/QueryContractInfoResponse";
    value: QueryContractInfoResponseAmino;
}
/**
 * QueryContractInfoResponse is the response type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoResponseSDKType {
    address: string;
    contract_info: ContractInfoSDKType | undefined;
}
/**
 * QueryContractHistoryRequest is the request type for the Query/ContractHistory
 * RPC method
 */
export interface QueryContractHistoryRequest {
    /** address is the address of the contract to query */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
export interface QueryContractHistoryRequestProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryRequest";
    value: Uint8Array;
}
/**
 * QueryContractHistoryRequest is the request type for the Query/ContractHistory
 * RPC method
 */
export interface QueryContractHistoryRequestAmino {
    /** address is the address of the contract to query */
    address?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino | undefined;
}
export interface QueryContractHistoryRequestAminoMsg {
    type: "wasm/QueryContractHistoryRequest";
    value: QueryContractHistoryRequestAmino;
}
/**
 * QueryContractHistoryRequest is the request type for the Query/ContractHistory
 * RPC method
 */
export interface QueryContractHistoryRequestSDKType {
    address: string;
    pagination?: PageRequestSDKType | undefined;
}
/**
 * QueryContractHistoryResponse is the response type for the
 * Query/ContractHistory RPC method
 */
export interface QueryContractHistoryResponse {
    entries: ContractCodeHistoryEntry[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
export interface QueryContractHistoryResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryResponse";
    value: Uint8Array;
}
/**
 * QueryContractHistoryResponse is the response type for the
 * Query/ContractHistory RPC method
 */
export interface QueryContractHistoryResponseAmino {
    entries?: ContractCodeHistoryEntryAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino | undefined;
}
export interface QueryContractHistoryResponseAminoMsg {
    type: "wasm/QueryContractHistoryResponse";
    value: QueryContractHistoryResponseAmino;
}
/**
 * QueryContractHistoryResponse is the response type for the
 * Query/ContractHistory RPC method
 */
export interface QueryContractHistoryResponseSDKType {
    entries: ContractCodeHistoryEntrySDKType[];
    pagination?: PageResponseSDKType | undefined;
}
/**
 * QueryContractsByCodeRequest is the request type for the Query/ContractsByCode
 * RPC method
 */
export interface QueryContractsByCodeRequest {
    /**
     * grpc-gateway_out does not support Go style CodID
     * pagination defines an optional pagination for the request.
     */
    codeId: bigint;
    pagination?: PageRequest | undefined;
}
export interface QueryContractsByCodeRequestProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeRequest";
    value: Uint8Array;
}
/**
 * QueryContractsByCodeRequest is the request type for the Query/ContractsByCode
 * RPC method
 */
export interface QueryContractsByCodeRequestAmino {
    /**
     * grpc-gateway_out does not support Go style CodID
     * pagination defines an optional pagination for the request.
     */
    code_id?: string;
    pagination?: PageRequestAmino | undefined;
}
export interface QueryContractsByCodeRequestAminoMsg {
    type: "wasm/QueryContractsByCodeRequest";
    value: QueryContractsByCodeRequestAmino;
}
/**
 * QueryContractsByCodeRequest is the request type for the Query/ContractsByCode
 * RPC method
 */
export interface QueryContractsByCodeRequestSDKType {
    code_id: bigint;
    pagination?: PageRequestSDKType | undefined;
}
/**
 * QueryContractsByCodeResponse is the response type for the
 * Query/ContractsByCode RPC method
 */
export interface QueryContractsByCodeResponse {
    /** contracts are a set of contract addresses */
    contracts: string[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
export interface QueryContractsByCodeResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeResponse";
    value: Uint8Array;
}
/**
 * QueryContractsByCodeResponse is the response type for the
 * Query/ContractsByCode RPC method
 */
export interface QueryContractsByCodeResponseAmino {
    /** contracts are a set of contract addresses */
    contracts?: string[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino | undefined;
}
export interface QueryContractsByCodeResponseAminoMsg {
    type: "wasm/QueryContractsByCodeResponse";
    value: QueryContractsByCodeResponseAmino;
}
/**
 * QueryContractsByCodeResponse is the response type for the
 * Query/ContractsByCode RPC method
 */
export interface QueryContractsByCodeResponseSDKType {
    contracts: string[];
    pagination?: PageResponseSDKType | undefined;
}
/**
 * QueryAllContractStateRequest is the request type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateRequest {
    /** address is the address of the contract */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
export interface QueryAllContractStateRequestProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateRequest";
    value: Uint8Array;
}
/**
 * QueryAllContractStateRequest is the request type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateRequestAmino {
    /** address is the address of the contract */
    address?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino | undefined;
}
export interface QueryAllContractStateRequestAminoMsg {
    type: "wasm/QueryAllContractStateRequest";
    value: QueryAllContractStateRequestAmino;
}
/**
 * QueryAllContractStateRequest is the request type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateRequestSDKType {
    address: string;
    pagination?: PageRequestSDKType | undefined;
}
/**
 * QueryAllContractStateResponse is the response type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateResponse {
    models: Model[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
export interface QueryAllContractStateResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateResponse";
    value: Uint8Array;
}
/**
 * QueryAllContractStateResponse is the response type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateResponseAmino {
    models?: ModelAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino | undefined;
}
export interface QueryAllContractStateResponseAminoMsg {
    type: "wasm/QueryAllContractStateResponse";
    value: QueryAllContractStateResponseAmino;
}
/**
 * QueryAllContractStateResponse is the response type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateResponseSDKType {
    models: ModelSDKType[];
    pagination?: PageResponseSDKType | undefined;
}
/**
 * QueryRawContractStateRequest is the request type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateRequest {
    /** address is the address of the contract */
    address: string;
    queryData: Uint8Array;
}
export interface QueryRawContractStateRequestProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateRequest";
    value: Uint8Array;
}
/**
 * QueryRawContractStateRequest is the request type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateRequestAmino {
    /** address is the address of the contract */
    address?: string;
    query_data?: string;
}
export interface QueryRawContractStateRequestAminoMsg {
    type: "wasm/QueryRawContractStateRequest";
    value: QueryRawContractStateRequestAmino;
}
/**
 * QueryRawContractStateRequest is the request type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateRequestSDKType {
    address: string;
    query_data: Uint8Array;
}
/**
 * QueryRawContractStateResponse is the response type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateResponse {
    /** Data contains the raw store data */
    data: Uint8Array;
}
export interface QueryRawContractStateResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateResponse";
    value: Uint8Array;
}
/**
 * QueryRawContractStateResponse is the response type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateResponseAmino {
    /** Data contains the raw store data */
    data?: string;
}
export interface QueryRawContractStateResponseAminoMsg {
    type: "wasm/QueryRawContractStateResponse";
    value: QueryRawContractStateResponseAmino;
}
/**
 * QueryRawContractStateResponse is the response type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateResponseSDKType {
    data: Uint8Array;
}
/**
 * QuerySmartContractStateRequest is the request type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateRequest {
    /** address is the address of the contract */
    address: string;
    /** QueryData contains the query data passed to the contract */
    queryData: Uint8Array;
}
export interface QuerySmartContractStateRequestProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateRequest";
    value: Uint8Array;
}
/**
 * QuerySmartContractStateRequest is the request type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateRequestAmino {
    /** address is the address of the contract */
    address?: string;
    /** QueryData contains the query data passed to the contract */
    query_data?: any;
}
export interface QuerySmartContractStateRequestAminoMsg {
    type: "wasm/QuerySmartContractStateRequest";
    value: QuerySmartContractStateRequestAmino;
}
/**
 * QuerySmartContractStateRequest is the request type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateRequestSDKType {
    address: string;
    query_data: Uint8Array;
}
/**
 * QuerySmartContractStateResponse is the response type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateResponse {
    /** Data contains the json data returned from the smart contract */
    data: Uint8Array;
}
export interface QuerySmartContractStateResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateResponse";
    value: Uint8Array;
}
/**
 * QuerySmartContractStateResponse is the response type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateResponseAmino {
    /** Data contains the json data returned from the smart contract */
    data?: any;
}
export interface QuerySmartContractStateResponseAminoMsg {
    type: "wasm/QuerySmartContractStateResponse";
    value: QuerySmartContractStateResponseAmino;
}
/**
 * QuerySmartContractStateResponse is the response type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateResponseSDKType {
    data: Uint8Array;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method */
export interface QueryCodeRequest {
    /** grpc-gateway_out does not support Go style CodID */
    codeId: bigint;
}
export interface QueryCodeRequestProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryCodeRequest";
    value: Uint8Array;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method */
export interface QueryCodeRequestAmino {
    /** grpc-gateway_out does not support Go style CodID */
    code_id?: string;
}
export interface QueryCodeRequestAminoMsg {
    type: "wasm/QueryCodeRequest";
    value: QueryCodeRequestAmino;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method */
export interface QueryCodeRequestSDKType {
    code_id: bigint;
}
/** CodeInfoResponse contains code meta data from CodeInfo */
export interface CodeInfoResponse {
    codeId: bigint;
    creator: string;
    dataHash: Uint8Array;
}
export interface CodeInfoResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.CodeInfoResponse";
    value: Uint8Array;
}
/** CodeInfoResponse contains code meta data from CodeInfo */
export interface CodeInfoResponseAmino {
    code_id?: string;
    creator?: string;
    data_hash?: string;
}
export interface CodeInfoResponseAminoMsg {
    type: "wasm/CodeInfoResponse";
    value: CodeInfoResponseAmino;
}
/** CodeInfoResponse contains code meta data from CodeInfo */
export interface CodeInfoResponseSDKType {
    code_id: bigint;
    creator: string;
    data_hash: Uint8Array;
}
/** QueryCodeResponse is the response type for the Query/Code RPC method */
export interface QueryCodeResponse {
    codeInfo?: CodeInfoResponse | undefined;
    data: Uint8Array;
}
export interface QueryCodeResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryCodeResponse";
    value: Uint8Array;
}
/** QueryCodeResponse is the response type for the Query/Code RPC method */
export interface QueryCodeResponseAmino {
    code_info?: CodeInfoResponseAmino | undefined;
    data?: string;
}
export interface QueryCodeResponseAminoMsg {
    type: "wasm/QueryCodeResponse";
    value: QueryCodeResponseAmino;
}
/** QueryCodeResponse is the response type for the Query/Code RPC method */
export interface QueryCodeResponseSDKType {
    code_info?: CodeInfoResponseSDKType | undefined;
    data: Uint8Array;
}
/** QueryCodesRequest is the request type for the Query/Codes RPC method */
export interface QueryCodesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
export interface QueryCodesRequestProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryCodesRequest";
    value: Uint8Array;
}
/** QueryCodesRequest is the request type for the Query/Codes RPC method */
export interface QueryCodesRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino | undefined;
}
export interface QueryCodesRequestAminoMsg {
    type: "wasm/QueryCodesRequest";
    value: QueryCodesRequestAmino;
}
/** QueryCodesRequest is the request type for the Query/Codes RPC method */
export interface QueryCodesRequestSDKType {
    pagination?: PageRequestSDKType | undefined;
}
/** QueryCodesResponse is the response type for the Query/Codes RPC method */
export interface QueryCodesResponse {
    codeInfos: CodeInfoResponse[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
export interface QueryCodesResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryCodesResponse";
    value: Uint8Array;
}
/** QueryCodesResponse is the response type for the Query/Codes RPC method */
export interface QueryCodesResponseAmino {
    code_infos?: CodeInfoResponseAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino | undefined;
}
export interface QueryCodesResponseAminoMsg {
    type: "wasm/QueryCodesResponse";
    value: QueryCodesResponseAmino;
}
/** QueryCodesResponse is the response type for the Query/Codes RPC method */
export interface QueryCodesResponseSDKType {
    code_infos: CodeInfoResponseSDKType[];
    pagination?: PageResponseSDKType | undefined;
}
/**
 * QueryPinnedCodesRequest is the request type for the Query/PinnedCodes
 * RPC method
 */
export interface QueryPinnedCodesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
export interface QueryPinnedCodesRequestProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesRequest";
    value: Uint8Array;
}
/**
 * QueryPinnedCodesRequest is the request type for the Query/PinnedCodes
 * RPC method
 */
export interface QueryPinnedCodesRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino | undefined;
}
export interface QueryPinnedCodesRequestAminoMsg {
    type: "wasm/QueryPinnedCodesRequest";
    value: QueryPinnedCodesRequestAmino;
}
/**
 * QueryPinnedCodesRequest is the request type for the Query/PinnedCodes
 * RPC method
 */
export interface QueryPinnedCodesRequestSDKType {
    pagination?: PageRequestSDKType | undefined;
}
/**
 * QueryPinnedCodesResponse is the response type for the
 * Query/PinnedCodes RPC method
 */
export interface QueryPinnedCodesResponse {
    codeIds: bigint[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
export interface QueryPinnedCodesResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesResponse";
    value: Uint8Array;
}
/**
 * QueryPinnedCodesResponse is the response type for the
 * Query/PinnedCodes RPC method
 */
export interface QueryPinnedCodesResponseAmino {
    code_ids?: string[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino | undefined;
}
export interface QueryPinnedCodesResponseAminoMsg {
    type: "wasm/QueryPinnedCodesResponse";
    value: QueryPinnedCodesResponseAmino;
}
/**
 * QueryPinnedCodesResponse is the response type for the
 * Query/PinnedCodes RPC method
 */
export interface QueryPinnedCodesResponseSDKType {
    code_ids: bigint[];
    pagination?: PageResponseSDKType | undefined;
}
export declare const QueryContractInfoRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryContractInfoRequest;
    isSDK(o: any): o is QueryContractInfoRequestSDKType;
    isAmino(o: any): o is QueryContractInfoRequestAmino;
    encode(message: QueryContractInfoRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryContractInfoRequest;
    fromJSON(object: any): QueryContractInfoRequest;
    toJSON(message: QueryContractInfoRequest): unknown;
    fromPartial(object: DeepPartial<QueryContractInfoRequest>): QueryContractInfoRequest;
    fromSDK(object: QueryContractInfoRequestSDKType): QueryContractInfoRequest;
    toSDK(message: QueryContractInfoRequest): QueryContractInfoRequestSDKType;
    fromAmino(object: QueryContractInfoRequestAmino): QueryContractInfoRequest;
    toAmino(message: QueryContractInfoRequest): QueryContractInfoRequestAmino;
    fromAminoMsg(object: QueryContractInfoRequestAminoMsg): QueryContractInfoRequest;
    toAminoMsg(message: QueryContractInfoRequest): QueryContractInfoRequestAminoMsg;
    fromProtoMsg(message: QueryContractInfoRequestProtoMsg): QueryContractInfoRequest;
    toProto(message: QueryContractInfoRequest): Uint8Array;
    toProtoMsg(message: QueryContractInfoRequest): QueryContractInfoRequestProtoMsg;
};
export declare const QueryContractInfoResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryContractInfoResponse;
    isSDK(o: any): o is QueryContractInfoResponseSDKType;
    isAmino(o: any): o is QueryContractInfoResponseAmino;
    encode(message: QueryContractInfoResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryContractInfoResponse;
    fromJSON(object: any): QueryContractInfoResponse;
    toJSON(message: QueryContractInfoResponse): unknown;
    fromPartial(object: DeepPartial<QueryContractInfoResponse>): QueryContractInfoResponse;
    fromSDK(object: QueryContractInfoResponseSDKType): QueryContractInfoResponse;
    toSDK(message: QueryContractInfoResponse): QueryContractInfoResponseSDKType;
    fromAmino(object: QueryContractInfoResponseAmino): QueryContractInfoResponse;
    toAmino(message: QueryContractInfoResponse): QueryContractInfoResponseAmino;
    fromAminoMsg(object: QueryContractInfoResponseAminoMsg): QueryContractInfoResponse;
    toAminoMsg(message: QueryContractInfoResponse): QueryContractInfoResponseAminoMsg;
    fromProtoMsg(message: QueryContractInfoResponseProtoMsg): QueryContractInfoResponse;
    toProto(message: QueryContractInfoResponse): Uint8Array;
    toProtoMsg(message: QueryContractInfoResponse): QueryContractInfoResponseProtoMsg;
};
export declare const QueryContractHistoryRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryContractHistoryRequest;
    isSDK(o: any): o is QueryContractHistoryRequestSDKType;
    isAmino(o: any): o is QueryContractHistoryRequestAmino;
    encode(message: QueryContractHistoryRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryContractHistoryRequest;
    fromJSON(object: any): QueryContractHistoryRequest;
    toJSON(message: QueryContractHistoryRequest): unknown;
    fromPartial(object: DeepPartial<QueryContractHistoryRequest>): QueryContractHistoryRequest;
    fromSDK(object: QueryContractHistoryRequestSDKType): QueryContractHistoryRequest;
    toSDK(message: QueryContractHistoryRequest): QueryContractHistoryRequestSDKType;
    fromAmino(object: QueryContractHistoryRequestAmino): QueryContractHistoryRequest;
    toAmino(message: QueryContractHistoryRequest): QueryContractHistoryRequestAmino;
    fromAminoMsg(object: QueryContractHistoryRequestAminoMsg): QueryContractHistoryRequest;
    toAminoMsg(message: QueryContractHistoryRequest): QueryContractHistoryRequestAminoMsg;
    fromProtoMsg(message: QueryContractHistoryRequestProtoMsg): QueryContractHistoryRequest;
    toProto(message: QueryContractHistoryRequest): Uint8Array;
    toProtoMsg(message: QueryContractHistoryRequest): QueryContractHistoryRequestProtoMsg;
};
export declare const QueryContractHistoryResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryContractHistoryResponse;
    isSDK(o: any): o is QueryContractHistoryResponseSDKType;
    isAmino(o: any): o is QueryContractHistoryResponseAmino;
    encode(message: QueryContractHistoryResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryContractHistoryResponse;
    fromJSON(object: any): QueryContractHistoryResponse;
    toJSON(message: QueryContractHistoryResponse): unknown;
    fromPartial(object: DeepPartial<QueryContractHistoryResponse>): QueryContractHistoryResponse;
    fromSDK(object: QueryContractHistoryResponseSDKType): QueryContractHistoryResponse;
    toSDK(message: QueryContractHistoryResponse): QueryContractHistoryResponseSDKType;
    fromAmino(object: QueryContractHistoryResponseAmino): QueryContractHistoryResponse;
    toAmino(message: QueryContractHistoryResponse): QueryContractHistoryResponseAmino;
    fromAminoMsg(object: QueryContractHistoryResponseAminoMsg): QueryContractHistoryResponse;
    toAminoMsg(message: QueryContractHistoryResponse): QueryContractHistoryResponseAminoMsg;
    fromProtoMsg(message: QueryContractHistoryResponseProtoMsg): QueryContractHistoryResponse;
    toProto(message: QueryContractHistoryResponse): Uint8Array;
    toProtoMsg(message: QueryContractHistoryResponse): QueryContractHistoryResponseProtoMsg;
};
export declare const QueryContractsByCodeRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryContractsByCodeRequest;
    isSDK(o: any): o is QueryContractsByCodeRequestSDKType;
    isAmino(o: any): o is QueryContractsByCodeRequestAmino;
    encode(message: QueryContractsByCodeRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryContractsByCodeRequest;
    fromJSON(object: any): QueryContractsByCodeRequest;
    toJSON(message: QueryContractsByCodeRequest): unknown;
    fromPartial(object: DeepPartial<QueryContractsByCodeRequest>): QueryContractsByCodeRequest;
    fromSDK(object: QueryContractsByCodeRequestSDKType): QueryContractsByCodeRequest;
    toSDK(message: QueryContractsByCodeRequest): QueryContractsByCodeRequestSDKType;
    fromAmino(object: QueryContractsByCodeRequestAmino): QueryContractsByCodeRequest;
    toAmino(message: QueryContractsByCodeRequest): QueryContractsByCodeRequestAmino;
    fromAminoMsg(object: QueryContractsByCodeRequestAminoMsg): QueryContractsByCodeRequest;
    toAminoMsg(message: QueryContractsByCodeRequest): QueryContractsByCodeRequestAminoMsg;
    fromProtoMsg(message: QueryContractsByCodeRequestProtoMsg): QueryContractsByCodeRequest;
    toProto(message: QueryContractsByCodeRequest): Uint8Array;
    toProtoMsg(message: QueryContractsByCodeRequest): QueryContractsByCodeRequestProtoMsg;
};
export declare const QueryContractsByCodeResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryContractsByCodeResponse;
    isSDK(o: any): o is QueryContractsByCodeResponseSDKType;
    isAmino(o: any): o is QueryContractsByCodeResponseAmino;
    encode(message: QueryContractsByCodeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryContractsByCodeResponse;
    fromJSON(object: any): QueryContractsByCodeResponse;
    toJSON(message: QueryContractsByCodeResponse): unknown;
    fromPartial(object: DeepPartial<QueryContractsByCodeResponse>): QueryContractsByCodeResponse;
    fromSDK(object: QueryContractsByCodeResponseSDKType): QueryContractsByCodeResponse;
    toSDK(message: QueryContractsByCodeResponse): QueryContractsByCodeResponseSDKType;
    fromAmino(object: QueryContractsByCodeResponseAmino): QueryContractsByCodeResponse;
    toAmino(message: QueryContractsByCodeResponse): QueryContractsByCodeResponseAmino;
    fromAminoMsg(object: QueryContractsByCodeResponseAminoMsg): QueryContractsByCodeResponse;
    toAminoMsg(message: QueryContractsByCodeResponse): QueryContractsByCodeResponseAminoMsg;
    fromProtoMsg(message: QueryContractsByCodeResponseProtoMsg): QueryContractsByCodeResponse;
    toProto(message: QueryContractsByCodeResponse): Uint8Array;
    toProtoMsg(message: QueryContractsByCodeResponse): QueryContractsByCodeResponseProtoMsg;
};
export declare const QueryAllContractStateRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryAllContractStateRequest;
    isSDK(o: any): o is QueryAllContractStateRequestSDKType;
    isAmino(o: any): o is QueryAllContractStateRequestAmino;
    encode(message: QueryAllContractStateRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllContractStateRequest;
    fromJSON(object: any): QueryAllContractStateRequest;
    toJSON(message: QueryAllContractStateRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllContractStateRequest>): QueryAllContractStateRequest;
    fromSDK(object: QueryAllContractStateRequestSDKType): QueryAllContractStateRequest;
    toSDK(message: QueryAllContractStateRequest): QueryAllContractStateRequestSDKType;
    fromAmino(object: QueryAllContractStateRequestAmino): QueryAllContractStateRequest;
    toAmino(message: QueryAllContractStateRequest): QueryAllContractStateRequestAmino;
    fromAminoMsg(object: QueryAllContractStateRequestAminoMsg): QueryAllContractStateRequest;
    toAminoMsg(message: QueryAllContractStateRequest): QueryAllContractStateRequestAminoMsg;
    fromProtoMsg(message: QueryAllContractStateRequestProtoMsg): QueryAllContractStateRequest;
    toProto(message: QueryAllContractStateRequest): Uint8Array;
    toProtoMsg(message: QueryAllContractStateRequest): QueryAllContractStateRequestProtoMsg;
};
export declare const QueryAllContractStateResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryAllContractStateResponse;
    isSDK(o: any): o is QueryAllContractStateResponseSDKType;
    isAmino(o: any): o is QueryAllContractStateResponseAmino;
    encode(message: QueryAllContractStateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllContractStateResponse;
    fromJSON(object: any): QueryAllContractStateResponse;
    toJSON(message: QueryAllContractStateResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllContractStateResponse>): QueryAllContractStateResponse;
    fromSDK(object: QueryAllContractStateResponseSDKType): QueryAllContractStateResponse;
    toSDK(message: QueryAllContractStateResponse): QueryAllContractStateResponseSDKType;
    fromAmino(object: QueryAllContractStateResponseAmino): QueryAllContractStateResponse;
    toAmino(message: QueryAllContractStateResponse): QueryAllContractStateResponseAmino;
    fromAminoMsg(object: QueryAllContractStateResponseAminoMsg): QueryAllContractStateResponse;
    toAminoMsg(message: QueryAllContractStateResponse): QueryAllContractStateResponseAminoMsg;
    fromProtoMsg(message: QueryAllContractStateResponseProtoMsg): QueryAllContractStateResponse;
    toProto(message: QueryAllContractStateResponse): Uint8Array;
    toProtoMsg(message: QueryAllContractStateResponse): QueryAllContractStateResponseProtoMsg;
};
export declare const QueryRawContractStateRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryRawContractStateRequest;
    isSDK(o: any): o is QueryRawContractStateRequestSDKType;
    isAmino(o: any): o is QueryRawContractStateRequestAmino;
    encode(message: QueryRawContractStateRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryRawContractStateRequest;
    fromJSON(object: any): QueryRawContractStateRequest;
    toJSON(message: QueryRawContractStateRequest): unknown;
    fromPartial(object: DeepPartial<QueryRawContractStateRequest>): QueryRawContractStateRequest;
    fromSDK(object: QueryRawContractStateRequestSDKType): QueryRawContractStateRequest;
    toSDK(message: QueryRawContractStateRequest): QueryRawContractStateRequestSDKType;
    fromAmino(object: QueryRawContractStateRequestAmino): QueryRawContractStateRequest;
    toAmino(message: QueryRawContractStateRequest): QueryRawContractStateRequestAmino;
    fromAminoMsg(object: QueryRawContractStateRequestAminoMsg): QueryRawContractStateRequest;
    toAminoMsg(message: QueryRawContractStateRequest): QueryRawContractStateRequestAminoMsg;
    fromProtoMsg(message: QueryRawContractStateRequestProtoMsg): QueryRawContractStateRequest;
    toProto(message: QueryRawContractStateRequest): Uint8Array;
    toProtoMsg(message: QueryRawContractStateRequest): QueryRawContractStateRequestProtoMsg;
};
export declare const QueryRawContractStateResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryRawContractStateResponse;
    isSDK(o: any): o is QueryRawContractStateResponseSDKType;
    isAmino(o: any): o is QueryRawContractStateResponseAmino;
    encode(message: QueryRawContractStateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryRawContractStateResponse;
    fromJSON(object: any): QueryRawContractStateResponse;
    toJSON(message: QueryRawContractStateResponse): unknown;
    fromPartial(object: DeepPartial<QueryRawContractStateResponse>): QueryRawContractStateResponse;
    fromSDK(object: QueryRawContractStateResponseSDKType): QueryRawContractStateResponse;
    toSDK(message: QueryRawContractStateResponse): QueryRawContractStateResponseSDKType;
    fromAmino(object: QueryRawContractStateResponseAmino): QueryRawContractStateResponse;
    toAmino(message: QueryRawContractStateResponse): QueryRawContractStateResponseAmino;
    fromAminoMsg(object: QueryRawContractStateResponseAminoMsg): QueryRawContractStateResponse;
    toAminoMsg(message: QueryRawContractStateResponse): QueryRawContractStateResponseAminoMsg;
    fromProtoMsg(message: QueryRawContractStateResponseProtoMsg): QueryRawContractStateResponse;
    toProto(message: QueryRawContractStateResponse): Uint8Array;
    toProtoMsg(message: QueryRawContractStateResponse): QueryRawContractStateResponseProtoMsg;
};
export declare const QuerySmartContractStateRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QuerySmartContractStateRequest;
    isSDK(o: any): o is QuerySmartContractStateRequestSDKType;
    isAmino(o: any): o is QuerySmartContractStateRequestAmino;
    encode(message: QuerySmartContractStateRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySmartContractStateRequest;
    fromJSON(object: any): QuerySmartContractStateRequest;
    toJSON(message: QuerySmartContractStateRequest): unknown;
    fromPartial(object: DeepPartial<QuerySmartContractStateRequest>): QuerySmartContractStateRequest;
    fromSDK(object: QuerySmartContractStateRequestSDKType): QuerySmartContractStateRequest;
    toSDK(message: QuerySmartContractStateRequest): QuerySmartContractStateRequestSDKType;
    fromAmino(object: QuerySmartContractStateRequestAmino): QuerySmartContractStateRequest;
    toAmino(message: QuerySmartContractStateRequest): QuerySmartContractStateRequestAmino;
    fromAminoMsg(object: QuerySmartContractStateRequestAminoMsg): QuerySmartContractStateRequest;
    toAminoMsg(message: QuerySmartContractStateRequest): QuerySmartContractStateRequestAminoMsg;
    fromProtoMsg(message: QuerySmartContractStateRequestProtoMsg): QuerySmartContractStateRequest;
    toProto(message: QuerySmartContractStateRequest): Uint8Array;
    toProtoMsg(message: QuerySmartContractStateRequest): QuerySmartContractStateRequestProtoMsg;
};
export declare const QuerySmartContractStateResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QuerySmartContractStateResponse;
    isSDK(o: any): o is QuerySmartContractStateResponseSDKType;
    isAmino(o: any): o is QuerySmartContractStateResponseAmino;
    encode(message: QuerySmartContractStateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySmartContractStateResponse;
    fromJSON(object: any): QuerySmartContractStateResponse;
    toJSON(message: QuerySmartContractStateResponse): unknown;
    fromPartial(object: DeepPartial<QuerySmartContractStateResponse>): QuerySmartContractStateResponse;
    fromSDK(object: QuerySmartContractStateResponseSDKType): QuerySmartContractStateResponse;
    toSDK(message: QuerySmartContractStateResponse): QuerySmartContractStateResponseSDKType;
    fromAmino(object: QuerySmartContractStateResponseAmino): QuerySmartContractStateResponse;
    toAmino(message: QuerySmartContractStateResponse): QuerySmartContractStateResponseAmino;
    fromAminoMsg(object: QuerySmartContractStateResponseAminoMsg): QuerySmartContractStateResponse;
    toAminoMsg(message: QuerySmartContractStateResponse): QuerySmartContractStateResponseAminoMsg;
    fromProtoMsg(message: QuerySmartContractStateResponseProtoMsg): QuerySmartContractStateResponse;
    toProto(message: QuerySmartContractStateResponse): Uint8Array;
    toProtoMsg(message: QuerySmartContractStateResponse): QuerySmartContractStateResponseProtoMsg;
};
export declare const QueryCodeRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryCodeRequest;
    isSDK(o: any): o is QueryCodeRequestSDKType;
    isAmino(o: any): o is QueryCodeRequestAmino;
    encode(message: QueryCodeRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCodeRequest;
    fromJSON(object: any): QueryCodeRequest;
    toJSON(message: QueryCodeRequest): unknown;
    fromPartial(object: DeepPartial<QueryCodeRequest>): QueryCodeRequest;
    fromSDK(object: QueryCodeRequestSDKType): QueryCodeRequest;
    toSDK(message: QueryCodeRequest): QueryCodeRequestSDKType;
    fromAmino(object: QueryCodeRequestAmino): QueryCodeRequest;
    toAmino(message: QueryCodeRequest): QueryCodeRequestAmino;
    fromAminoMsg(object: QueryCodeRequestAminoMsg): QueryCodeRequest;
    toAminoMsg(message: QueryCodeRequest): QueryCodeRequestAminoMsg;
    fromProtoMsg(message: QueryCodeRequestProtoMsg): QueryCodeRequest;
    toProto(message: QueryCodeRequest): Uint8Array;
    toProtoMsg(message: QueryCodeRequest): QueryCodeRequestProtoMsg;
};
export declare const CodeInfoResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is CodeInfoResponse;
    isSDK(o: any): o is CodeInfoResponseSDKType;
    isAmino(o: any): o is CodeInfoResponseAmino;
    encode(message: CodeInfoResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CodeInfoResponse;
    fromJSON(object: any): CodeInfoResponse;
    toJSON(message: CodeInfoResponse): unknown;
    fromPartial(object: DeepPartial<CodeInfoResponse>): CodeInfoResponse;
    fromSDK(object: CodeInfoResponseSDKType): CodeInfoResponse;
    toSDK(message: CodeInfoResponse): CodeInfoResponseSDKType;
    fromAmino(object: CodeInfoResponseAmino): CodeInfoResponse;
    toAmino(message: CodeInfoResponse): CodeInfoResponseAmino;
    fromAminoMsg(object: CodeInfoResponseAminoMsg): CodeInfoResponse;
    toAminoMsg(message: CodeInfoResponse): CodeInfoResponseAminoMsg;
    fromProtoMsg(message: CodeInfoResponseProtoMsg): CodeInfoResponse;
    toProto(message: CodeInfoResponse): Uint8Array;
    toProtoMsg(message: CodeInfoResponse): CodeInfoResponseProtoMsg;
};
export declare const QueryCodeResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryCodeResponse;
    isSDK(o: any): o is QueryCodeResponseSDKType;
    isAmino(o: any): o is QueryCodeResponseAmino;
    encode(message: QueryCodeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCodeResponse;
    fromJSON(object: any): QueryCodeResponse;
    toJSON(message: QueryCodeResponse): unknown;
    fromPartial(object: DeepPartial<QueryCodeResponse>): QueryCodeResponse;
    fromSDK(object: QueryCodeResponseSDKType): QueryCodeResponse;
    toSDK(message: QueryCodeResponse): QueryCodeResponseSDKType;
    fromAmino(object: QueryCodeResponseAmino): QueryCodeResponse;
    toAmino(message: QueryCodeResponse): QueryCodeResponseAmino;
    fromAminoMsg(object: QueryCodeResponseAminoMsg): QueryCodeResponse;
    toAminoMsg(message: QueryCodeResponse): QueryCodeResponseAminoMsg;
    fromProtoMsg(message: QueryCodeResponseProtoMsg): QueryCodeResponse;
    toProto(message: QueryCodeResponse): Uint8Array;
    toProtoMsg(message: QueryCodeResponse): QueryCodeResponseProtoMsg;
};
export declare const QueryCodesRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryCodesRequest;
    isSDK(o: any): o is QueryCodesRequestSDKType;
    isAmino(o: any): o is QueryCodesRequestAmino;
    encode(message: QueryCodesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCodesRequest;
    fromJSON(object: any): QueryCodesRequest;
    toJSON(message: QueryCodesRequest): unknown;
    fromPartial(object: DeepPartial<QueryCodesRequest>): QueryCodesRequest;
    fromSDK(object: QueryCodesRequestSDKType): QueryCodesRequest;
    toSDK(message: QueryCodesRequest): QueryCodesRequestSDKType;
    fromAmino(object: QueryCodesRequestAmino): QueryCodesRequest;
    toAmino(message: QueryCodesRequest): QueryCodesRequestAmino;
    fromAminoMsg(object: QueryCodesRequestAminoMsg): QueryCodesRequest;
    toAminoMsg(message: QueryCodesRequest): QueryCodesRequestAminoMsg;
    fromProtoMsg(message: QueryCodesRequestProtoMsg): QueryCodesRequest;
    toProto(message: QueryCodesRequest): Uint8Array;
    toProtoMsg(message: QueryCodesRequest): QueryCodesRequestProtoMsg;
};
export declare const QueryCodesResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryCodesResponse;
    isSDK(o: any): o is QueryCodesResponseSDKType;
    isAmino(o: any): o is QueryCodesResponseAmino;
    encode(message: QueryCodesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCodesResponse;
    fromJSON(object: any): QueryCodesResponse;
    toJSON(message: QueryCodesResponse): unknown;
    fromPartial(object: DeepPartial<QueryCodesResponse>): QueryCodesResponse;
    fromSDK(object: QueryCodesResponseSDKType): QueryCodesResponse;
    toSDK(message: QueryCodesResponse): QueryCodesResponseSDKType;
    fromAmino(object: QueryCodesResponseAmino): QueryCodesResponse;
    toAmino(message: QueryCodesResponse): QueryCodesResponseAmino;
    fromAminoMsg(object: QueryCodesResponseAminoMsg): QueryCodesResponse;
    toAminoMsg(message: QueryCodesResponse): QueryCodesResponseAminoMsg;
    fromProtoMsg(message: QueryCodesResponseProtoMsg): QueryCodesResponse;
    toProto(message: QueryCodesResponse): Uint8Array;
    toProtoMsg(message: QueryCodesResponse): QueryCodesResponseProtoMsg;
};
export declare const QueryPinnedCodesRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryPinnedCodesRequest;
    isSDK(o: any): o is QueryPinnedCodesRequestSDKType;
    isAmino(o: any): o is QueryPinnedCodesRequestAmino;
    encode(message: QueryPinnedCodesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPinnedCodesRequest;
    fromJSON(object: any): QueryPinnedCodesRequest;
    toJSON(message: QueryPinnedCodesRequest): unknown;
    fromPartial(object: DeepPartial<QueryPinnedCodesRequest>): QueryPinnedCodesRequest;
    fromSDK(object: QueryPinnedCodesRequestSDKType): QueryPinnedCodesRequest;
    toSDK(message: QueryPinnedCodesRequest): QueryPinnedCodesRequestSDKType;
    fromAmino(object: QueryPinnedCodesRequestAmino): QueryPinnedCodesRequest;
    toAmino(message: QueryPinnedCodesRequest): QueryPinnedCodesRequestAmino;
    fromAminoMsg(object: QueryPinnedCodesRequestAminoMsg): QueryPinnedCodesRequest;
    toAminoMsg(message: QueryPinnedCodesRequest): QueryPinnedCodesRequestAminoMsg;
    fromProtoMsg(message: QueryPinnedCodesRequestProtoMsg): QueryPinnedCodesRequest;
    toProto(message: QueryPinnedCodesRequest): Uint8Array;
    toProtoMsg(message: QueryPinnedCodesRequest): QueryPinnedCodesRequestProtoMsg;
};
export declare const QueryPinnedCodesResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryPinnedCodesResponse;
    isSDK(o: any): o is QueryPinnedCodesResponseSDKType;
    isAmino(o: any): o is QueryPinnedCodesResponseAmino;
    encode(message: QueryPinnedCodesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPinnedCodesResponse;
    fromJSON(object: any): QueryPinnedCodesResponse;
    toJSON(message: QueryPinnedCodesResponse): unknown;
    fromPartial(object: DeepPartial<QueryPinnedCodesResponse>): QueryPinnedCodesResponse;
    fromSDK(object: QueryPinnedCodesResponseSDKType): QueryPinnedCodesResponse;
    toSDK(message: QueryPinnedCodesResponse): QueryPinnedCodesResponseSDKType;
    fromAmino(object: QueryPinnedCodesResponseAmino): QueryPinnedCodesResponse;
    toAmino(message: QueryPinnedCodesResponse): QueryPinnedCodesResponseAmino;
    fromAminoMsg(object: QueryPinnedCodesResponseAminoMsg): QueryPinnedCodesResponse;
    toAminoMsg(message: QueryPinnedCodesResponse): QueryPinnedCodesResponseAminoMsg;
    fromProtoMsg(message: QueryPinnedCodesResponseProtoMsg): QueryPinnedCodesResponse;
    toProto(message: QueryPinnedCodesResponse): Uint8Array;
    toProtoMsg(message: QueryPinnedCodesResponse): QueryPinnedCodesResponseProtoMsg;
};
