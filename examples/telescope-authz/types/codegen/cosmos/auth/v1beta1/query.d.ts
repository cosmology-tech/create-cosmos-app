import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Params, ParamsAmino, ParamsSDKType, BaseAccount, BaseAccountProtoMsg, BaseAccountSDKType, ModuleAccount, ModuleAccountProtoMsg, ModuleAccountSDKType } from "./auth";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
export interface QueryAccountsRequestProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountsRequest";
    value: Uint8Array;
}
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino | undefined;
}
export interface QueryAccountsRequestAminoMsg {
    type: "cosmos-sdk/QueryAccountsRequest";
    value: QueryAccountsRequestAmino;
}
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsRequestSDKType {
    pagination?: PageRequestSDKType | undefined;
}
/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsResponse {
    /** accounts are the existing accounts */
    accounts: (BaseAccount | Any)[] | Any[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
export interface QueryAccountsResponseProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountsResponse";
    value: Uint8Array;
}
export type QueryAccountsResponseEncoded = Omit<QueryAccountsResponse, "accounts"> & {
    /** accounts are the existing accounts */ accounts: (BaseAccountProtoMsg | AnyProtoMsg)[];
};
/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsResponseAmino {
    /** accounts are the existing accounts */
    accounts?: AnyAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino | undefined;
}
export interface QueryAccountsResponseAminoMsg {
    type: "cosmos-sdk/QueryAccountsResponse";
    value: QueryAccountsResponseAmino;
}
/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsResponseSDKType {
    accounts: (BaseAccountSDKType | AnySDKType)[];
    pagination?: PageResponseSDKType | undefined;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequest {
    /** address defines the address to query for. */
    address: string;
}
export interface QueryAccountRequestProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountRequest";
    value: Uint8Array;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequestAmino {
    /** address defines the address to query for. */
    address?: string;
}
export interface QueryAccountRequestAminoMsg {
    type: "cosmos-sdk/QueryAccountRequest";
    value: QueryAccountRequestAmino;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequestSDKType {
    address: string;
}
/** QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method. */
export interface QueryModuleAccountsRequest {
}
export interface QueryModuleAccountsRequestProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsRequest";
    value: Uint8Array;
}
/** QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method. */
export interface QueryModuleAccountsRequestAmino {
}
export interface QueryModuleAccountsRequestAminoMsg {
    type: "cosmos-sdk/QueryModuleAccountsRequest";
    value: QueryModuleAccountsRequestAmino;
}
/** QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method. */
export interface QueryModuleAccountsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params | undefined;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryParamsResponse";
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
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponse {
    /** account defines the account of the corresponding address. */
    account?: BaseAccount | Any | undefined;
}
export interface QueryAccountResponseProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountResponse";
    value: Uint8Array;
}
export type QueryAccountResponseEncoded = Omit<QueryAccountResponse, "account"> & {
    /** account defines the account of the corresponding address. */ account?: BaseAccountProtoMsg | AnyProtoMsg | undefined;
};
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponseAmino {
    /** account defines the account of the corresponding address. */
    account?: AnyAmino | undefined;
}
export interface QueryAccountResponseAminoMsg {
    type: "cosmos-sdk/QueryAccountResponse";
    value: QueryAccountResponseAmino;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponseSDKType {
    account?: BaseAccountSDKType | AnySDKType | undefined;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryParamsRequest";
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
/** QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method. */
export interface QueryModuleAccountsResponse {
    accounts: (ModuleAccount | Any)[] | Any[];
}
export interface QueryModuleAccountsResponseProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsResponse";
    value: Uint8Array;
}
export type QueryModuleAccountsResponseEncoded = Omit<QueryModuleAccountsResponse, "accounts"> & {
    accounts: (ModuleAccountProtoMsg | AnyProtoMsg)[];
};
/** QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method. */
export interface QueryModuleAccountsResponseAmino {
    accounts?: AnyAmino[];
}
export interface QueryModuleAccountsResponseAminoMsg {
    type: "cosmos-sdk/QueryModuleAccountsResponse";
    value: QueryModuleAccountsResponseAmino;
}
/** QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method. */
export interface QueryModuleAccountsResponseSDKType {
    accounts: (ModuleAccountSDKType | AnySDKType)[];
}
/** Bech32PrefixRequest is the request type for Bech32Prefix rpc method */
export interface Bech32PrefixRequest {
}
export interface Bech32PrefixRequestProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixRequest";
    value: Uint8Array;
}
/** Bech32PrefixRequest is the request type for Bech32Prefix rpc method */
export interface Bech32PrefixRequestAmino {
}
export interface Bech32PrefixRequestAminoMsg {
    type: "cosmos-sdk/Bech32PrefixRequest";
    value: Bech32PrefixRequestAmino;
}
/** Bech32PrefixRequest is the request type for Bech32Prefix rpc method */
export interface Bech32PrefixRequestSDKType {
}
/** Bech32PrefixResponse is the response type for Bech32Prefix rpc method */
export interface Bech32PrefixResponse {
    bech32Prefix: string;
}
export interface Bech32PrefixResponseProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixResponse";
    value: Uint8Array;
}
/** Bech32PrefixResponse is the response type for Bech32Prefix rpc method */
export interface Bech32PrefixResponseAmino {
    bech32_prefix?: string;
}
export interface Bech32PrefixResponseAminoMsg {
    type: "cosmos-sdk/Bech32PrefixResponse";
    value: Bech32PrefixResponseAmino;
}
/** Bech32PrefixResponse is the response type for Bech32Prefix rpc method */
export interface Bech32PrefixResponseSDKType {
    bech32_prefix: string;
}
/** AddressBytesToStringRequest is the request type for AddressString rpc method */
export interface AddressBytesToStringRequest {
    addressBytes: Uint8Array;
}
export interface AddressBytesToStringRequestProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringRequest";
    value: Uint8Array;
}
/** AddressBytesToStringRequest is the request type for AddressString rpc method */
export interface AddressBytesToStringRequestAmino {
    address_bytes?: string;
}
export interface AddressBytesToStringRequestAminoMsg {
    type: "cosmos-sdk/AddressBytesToStringRequest";
    value: AddressBytesToStringRequestAmino;
}
/** AddressBytesToStringRequest is the request type for AddressString rpc method */
export interface AddressBytesToStringRequestSDKType {
    address_bytes: Uint8Array;
}
/** AddressBytesToStringResponse is the response type for AddressString rpc method */
export interface AddressBytesToStringResponse {
    addressString: string;
}
export interface AddressBytesToStringResponseProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringResponse";
    value: Uint8Array;
}
/** AddressBytesToStringResponse is the response type for AddressString rpc method */
export interface AddressBytesToStringResponseAmino {
    address_string?: string;
}
export interface AddressBytesToStringResponseAminoMsg {
    type: "cosmos-sdk/AddressBytesToStringResponse";
    value: AddressBytesToStringResponseAmino;
}
/** AddressBytesToStringResponse is the response type for AddressString rpc method */
export interface AddressBytesToStringResponseSDKType {
    address_string: string;
}
/** AddressStringToBytesRequest is the request type for AccountBytes rpc method */
export interface AddressStringToBytesRequest {
    addressString: string;
}
export interface AddressStringToBytesRequestProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesRequest";
    value: Uint8Array;
}
/** AddressStringToBytesRequest is the request type for AccountBytes rpc method */
export interface AddressStringToBytesRequestAmino {
    address_string?: string;
}
export interface AddressStringToBytesRequestAminoMsg {
    type: "cosmos-sdk/AddressStringToBytesRequest";
    value: AddressStringToBytesRequestAmino;
}
/** AddressStringToBytesRequest is the request type for AccountBytes rpc method */
export interface AddressStringToBytesRequestSDKType {
    address_string: string;
}
/** AddressStringToBytesResponse is the response type for AddressBytes rpc method */
export interface AddressStringToBytesResponse {
    addressBytes: Uint8Array;
}
export interface AddressStringToBytesResponseProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesResponse";
    value: Uint8Array;
}
/** AddressStringToBytesResponse is the response type for AddressBytes rpc method */
export interface AddressStringToBytesResponseAmino {
    address_bytes?: string;
}
export interface AddressStringToBytesResponseAminoMsg {
    type: "cosmos-sdk/AddressStringToBytesResponse";
    value: AddressStringToBytesResponseAmino;
}
/** AddressStringToBytesResponse is the response type for AddressBytes rpc method */
export interface AddressStringToBytesResponseSDKType {
    address_bytes: Uint8Array;
}
export declare const QueryAccountsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryAccountsRequest;
    isSDK(o: any): o is QueryAccountsRequestSDKType;
    isAmino(o: any): o is QueryAccountsRequestAmino;
    encode(message: QueryAccountsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountsRequest;
    fromJSON(object: any): QueryAccountsRequest;
    toJSON(message: QueryAccountsRequest): unknown;
    fromPartial(object: DeepPartial<QueryAccountsRequest>): QueryAccountsRequest;
    fromSDK(object: QueryAccountsRequestSDKType): QueryAccountsRequest;
    toSDK(message: QueryAccountsRequest): QueryAccountsRequestSDKType;
    fromAmino(object: QueryAccountsRequestAmino): QueryAccountsRequest;
    toAmino(message: QueryAccountsRequest): QueryAccountsRequestAmino;
    fromAminoMsg(object: QueryAccountsRequestAminoMsg): QueryAccountsRequest;
    toAminoMsg(message: QueryAccountsRequest): QueryAccountsRequestAminoMsg;
    fromProtoMsg(message: QueryAccountsRequestProtoMsg): QueryAccountsRequest;
    toProto(message: QueryAccountsRequest): Uint8Array;
    toProtoMsg(message: QueryAccountsRequest): QueryAccountsRequestProtoMsg;
};
export declare const QueryAccountsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryAccountsResponse;
    isSDK(o: any): o is QueryAccountsResponseSDKType;
    isAmino(o: any): o is QueryAccountsResponseAmino;
    encode(message: QueryAccountsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountsResponse;
    fromJSON(object: any): QueryAccountsResponse;
    toJSON(message: QueryAccountsResponse): unknown;
    fromPartial(object: DeepPartial<QueryAccountsResponse>): QueryAccountsResponse;
    fromSDK(object: QueryAccountsResponseSDKType): QueryAccountsResponse;
    toSDK(message: QueryAccountsResponse): QueryAccountsResponseSDKType;
    fromAmino(object: QueryAccountsResponseAmino): QueryAccountsResponse;
    toAmino(message: QueryAccountsResponse): QueryAccountsResponseAmino;
    fromAminoMsg(object: QueryAccountsResponseAminoMsg): QueryAccountsResponse;
    toAminoMsg(message: QueryAccountsResponse): QueryAccountsResponseAminoMsg;
    fromProtoMsg(message: QueryAccountsResponseProtoMsg): QueryAccountsResponse;
    toProto(message: QueryAccountsResponse): Uint8Array;
    toProtoMsg(message: QueryAccountsResponse): QueryAccountsResponseProtoMsg;
};
export declare const QueryAccountRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryAccountRequest;
    isSDK(o: any): o is QueryAccountRequestSDKType;
    isAmino(o: any): o is QueryAccountRequestAmino;
    encode(message: QueryAccountRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountRequest;
    fromJSON(object: any): QueryAccountRequest;
    toJSON(message: QueryAccountRequest): unknown;
    fromPartial(object: DeepPartial<QueryAccountRequest>): QueryAccountRequest;
    fromSDK(object: QueryAccountRequestSDKType): QueryAccountRequest;
    toSDK(message: QueryAccountRequest): QueryAccountRequestSDKType;
    fromAmino(object: QueryAccountRequestAmino): QueryAccountRequest;
    toAmino(message: QueryAccountRequest): QueryAccountRequestAmino;
    fromAminoMsg(object: QueryAccountRequestAminoMsg): QueryAccountRequest;
    toAminoMsg(message: QueryAccountRequest): QueryAccountRequestAminoMsg;
    fromProtoMsg(message: QueryAccountRequestProtoMsg): QueryAccountRequest;
    toProto(message: QueryAccountRequest): Uint8Array;
    toProtoMsg(message: QueryAccountRequest): QueryAccountRequestProtoMsg;
};
export declare const QueryModuleAccountsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryModuleAccountsRequest;
    isSDK(o: any): o is QueryModuleAccountsRequestSDKType;
    isAmino(o: any): o is QueryModuleAccountsRequestAmino;
    encode(_: QueryModuleAccountsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleAccountsRequest;
    fromJSON(_: any): QueryModuleAccountsRequest;
    toJSON(_: QueryModuleAccountsRequest): unknown;
    fromPartial(_: DeepPartial<QueryModuleAccountsRequest>): QueryModuleAccountsRequest;
    fromSDK(_: QueryModuleAccountsRequestSDKType): QueryModuleAccountsRequest;
    toSDK(_: QueryModuleAccountsRequest): QueryModuleAccountsRequestSDKType;
    fromAmino(_: QueryModuleAccountsRequestAmino): QueryModuleAccountsRequest;
    toAmino(_: QueryModuleAccountsRequest): QueryModuleAccountsRequestAmino;
    fromAminoMsg(object: QueryModuleAccountsRequestAminoMsg): QueryModuleAccountsRequest;
    toAminoMsg(message: QueryModuleAccountsRequest): QueryModuleAccountsRequestAminoMsg;
    fromProtoMsg(message: QueryModuleAccountsRequestProtoMsg): QueryModuleAccountsRequest;
    toProto(message: QueryModuleAccountsRequest): Uint8Array;
    toProtoMsg(message: QueryModuleAccountsRequest): QueryModuleAccountsRequestProtoMsg;
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
export declare const QueryAccountResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryAccountResponse;
    isSDK(o: any): o is QueryAccountResponseSDKType;
    isAmino(o: any): o is QueryAccountResponseAmino;
    encode(message: QueryAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountResponse;
    fromJSON(object: any): QueryAccountResponse;
    toJSON(message: QueryAccountResponse): unknown;
    fromPartial(object: DeepPartial<QueryAccountResponse>): QueryAccountResponse;
    fromSDK(object: QueryAccountResponseSDKType): QueryAccountResponse;
    toSDK(message: QueryAccountResponse): QueryAccountResponseSDKType;
    fromAmino(object: QueryAccountResponseAmino): QueryAccountResponse;
    toAmino(message: QueryAccountResponse): QueryAccountResponseAmino;
    fromAminoMsg(object: QueryAccountResponseAminoMsg): QueryAccountResponse;
    toAminoMsg(message: QueryAccountResponse): QueryAccountResponseAminoMsg;
    fromProtoMsg(message: QueryAccountResponseProtoMsg): QueryAccountResponse;
    toProto(message: QueryAccountResponse): Uint8Array;
    toProtoMsg(message: QueryAccountResponse): QueryAccountResponseProtoMsg;
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
export declare const QueryModuleAccountsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryModuleAccountsResponse;
    isSDK(o: any): o is QueryModuleAccountsResponseSDKType;
    isAmino(o: any): o is QueryModuleAccountsResponseAmino;
    encode(message: QueryModuleAccountsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleAccountsResponse;
    fromJSON(object: any): QueryModuleAccountsResponse;
    toJSON(message: QueryModuleAccountsResponse): unknown;
    fromPartial(object: DeepPartial<QueryModuleAccountsResponse>): QueryModuleAccountsResponse;
    fromSDK(object: QueryModuleAccountsResponseSDKType): QueryModuleAccountsResponse;
    toSDK(message: QueryModuleAccountsResponse): QueryModuleAccountsResponseSDKType;
    fromAmino(object: QueryModuleAccountsResponseAmino): QueryModuleAccountsResponse;
    toAmino(message: QueryModuleAccountsResponse): QueryModuleAccountsResponseAmino;
    fromAminoMsg(object: QueryModuleAccountsResponseAminoMsg): QueryModuleAccountsResponse;
    toAminoMsg(message: QueryModuleAccountsResponse): QueryModuleAccountsResponseAminoMsg;
    fromProtoMsg(message: QueryModuleAccountsResponseProtoMsg): QueryModuleAccountsResponse;
    toProto(message: QueryModuleAccountsResponse): Uint8Array;
    toProtoMsg(message: QueryModuleAccountsResponse): QueryModuleAccountsResponseProtoMsg;
};
export declare const Bech32PrefixRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Bech32PrefixRequest;
    isSDK(o: any): o is Bech32PrefixRequestSDKType;
    isAmino(o: any): o is Bech32PrefixRequestAmino;
    encode(_: Bech32PrefixRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Bech32PrefixRequest;
    fromJSON(_: any): Bech32PrefixRequest;
    toJSON(_: Bech32PrefixRequest): unknown;
    fromPartial(_: DeepPartial<Bech32PrefixRequest>): Bech32PrefixRequest;
    fromSDK(_: Bech32PrefixRequestSDKType): Bech32PrefixRequest;
    toSDK(_: Bech32PrefixRequest): Bech32PrefixRequestSDKType;
    fromAmino(_: Bech32PrefixRequestAmino): Bech32PrefixRequest;
    toAmino(_: Bech32PrefixRequest): Bech32PrefixRequestAmino;
    fromAminoMsg(object: Bech32PrefixRequestAminoMsg): Bech32PrefixRequest;
    toAminoMsg(message: Bech32PrefixRequest): Bech32PrefixRequestAminoMsg;
    fromProtoMsg(message: Bech32PrefixRequestProtoMsg): Bech32PrefixRequest;
    toProto(message: Bech32PrefixRequest): Uint8Array;
    toProtoMsg(message: Bech32PrefixRequest): Bech32PrefixRequestProtoMsg;
};
export declare const Bech32PrefixResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Bech32PrefixResponse;
    isSDK(o: any): o is Bech32PrefixResponseSDKType;
    isAmino(o: any): o is Bech32PrefixResponseAmino;
    encode(message: Bech32PrefixResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Bech32PrefixResponse;
    fromJSON(object: any): Bech32PrefixResponse;
    toJSON(message: Bech32PrefixResponse): unknown;
    fromPartial(object: DeepPartial<Bech32PrefixResponse>): Bech32PrefixResponse;
    fromSDK(object: Bech32PrefixResponseSDKType): Bech32PrefixResponse;
    toSDK(message: Bech32PrefixResponse): Bech32PrefixResponseSDKType;
    fromAmino(object: Bech32PrefixResponseAmino): Bech32PrefixResponse;
    toAmino(message: Bech32PrefixResponse): Bech32PrefixResponseAmino;
    fromAminoMsg(object: Bech32PrefixResponseAminoMsg): Bech32PrefixResponse;
    toAminoMsg(message: Bech32PrefixResponse): Bech32PrefixResponseAminoMsg;
    fromProtoMsg(message: Bech32PrefixResponseProtoMsg): Bech32PrefixResponse;
    toProto(message: Bech32PrefixResponse): Uint8Array;
    toProtoMsg(message: Bech32PrefixResponse): Bech32PrefixResponseProtoMsg;
};
export declare const AddressBytesToStringRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AddressBytesToStringRequest;
    isSDK(o: any): o is AddressBytesToStringRequestSDKType;
    isAmino(o: any): o is AddressBytesToStringRequestAmino;
    encode(message: AddressBytesToStringRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AddressBytesToStringRequest;
    fromJSON(object: any): AddressBytesToStringRequest;
    toJSON(message: AddressBytesToStringRequest): unknown;
    fromPartial(object: DeepPartial<AddressBytesToStringRequest>): AddressBytesToStringRequest;
    fromSDK(object: AddressBytesToStringRequestSDKType): AddressBytesToStringRequest;
    toSDK(message: AddressBytesToStringRequest): AddressBytesToStringRequestSDKType;
    fromAmino(object: AddressBytesToStringRequestAmino): AddressBytesToStringRequest;
    toAmino(message: AddressBytesToStringRequest): AddressBytesToStringRequestAmino;
    fromAminoMsg(object: AddressBytesToStringRequestAminoMsg): AddressBytesToStringRequest;
    toAminoMsg(message: AddressBytesToStringRequest): AddressBytesToStringRequestAminoMsg;
    fromProtoMsg(message: AddressBytesToStringRequestProtoMsg): AddressBytesToStringRequest;
    toProto(message: AddressBytesToStringRequest): Uint8Array;
    toProtoMsg(message: AddressBytesToStringRequest): AddressBytesToStringRequestProtoMsg;
};
export declare const AddressBytesToStringResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AddressBytesToStringResponse;
    isSDK(o: any): o is AddressBytesToStringResponseSDKType;
    isAmino(o: any): o is AddressBytesToStringResponseAmino;
    encode(message: AddressBytesToStringResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AddressBytesToStringResponse;
    fromJSON(object: any): AddressBytesToStringResponse;
    toJSON(message: AddressBytesToStringResponse): unknown;
    fromPartial(object: DeepPartial<AddressBytesToStringResponse>): AddressBytesToStringResponse;
    fromSDK(object: AddressBytesToStringResponseSDKType): AddressBytesToStringResponse;
    toSDK(message: AddressBytesToStringResponse): AddressBytesToStringResponseSDKType;
    fromAmino(object: AddressBytesToStringResponseAmino): AddressBytesToStringResponse;
    toAmino(message: AddressBytesToStringResponse): AddressBytesToStringResponseAmino;
    fromAminoMsg(object: AddressBytesToStringResponseAminoMsg): AddressBytesToStringResponse;
    toAminoMsg(message: AddressBytesToStringResponse): AddressBytesToStringResponseAminoMsg;
    fromProtoMsg(message: AddressBytesToStringResponseProtoMsg): AddressBytesToStringResponse;
    toProto(message: AddressBytesToStringResponse): Uint8Array;
    toProtoMsg(message: AddressBytesToStringResponse): AddressBytesToStringResponseProtoMsg;
};
export declare const AddressStringToBytesRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AddressStringToBytesRequest;
    isSDK(o: any): o is AddressStringToBytesRequestSDKType;
    isAmino(o: any): o is AddressStringToBytesRequestAmino;
    encode(message: AddressStringToBytesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AddressStringToBytesRequest;
    fromJSON(object: any): AddressStringToBytesRequest;
    toJSON(message: AddressStringToBytesRequest): unknown;
    fromPartial(object: DeepPartial<AddressStringToBytesRequest>): AddressStringToBytesRequest;
    fromSDK(object: AddressStringToBytesRequestSDKType): AddressStringToBytesRequest;
    toSDK(message: AddressStringToBytesRequest): AddressStringToBytesRequestSDKType;
    fromAmino(object: AddressStringToBytesRequestAmino): AddressStringToBytesRequest;
    toAmino(message: AddressStringToBytesRequest): AddressStringToBytesRequestAmino;
    fromAminoMsg(object: AddressStringToBytesRequestAminoMsg): AddressStringToBytesRequest;
    toAminoMsg(message: AddressStringToBytesRequest): AddressStringToBytesRequestAminoMsg;
    fromProtoMsg(message: AddressStringToBytesRequestProtoMsg): AddressStringToBytesRequest;
    toProto(message: AddressStringToBytesRequest): Uint8Array;
    toProtoMsg(message: AddressStringToBytesRequest): AddressStringToBytesRequestProtoMsg;
};
export declare const AddressStringToBytesResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AddressStringToBytesResponse;
    isSDK(o: any): o is AddressStringToBytesResponseSDKType;
    isAmino(o: any): o is AddressStringToBytesResponseAmino;
    encode(message: AddressStringToBytesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AddressStringToBytesResponse;
    fromJSON(object: any): AddressStringToBytesResponse;
    toJSON(message: AddressStringToBytesResponse): unknown;
    fromPartial(object: DeepPartial<AddressStringToBytesResponse>): AddressStringToBytesResponse;
    fromSDK(object: AddressStringToBytesResponseSDKType): AddressStringToBytesResponse;
    toSDK(message: AddressStringToBytesResponse): AddressStringToBytesResponseSDKType;
    fromAmino(object: AddressStringToBytesResponseAmino): AddressStringToBytesResponse;
    toAmino(message: AddressStringToBytesResponse): AddressStringToBytesResponseAmino;
    fromAminoMsg(object: AddressStringToBytesResponseAminoMsg): AddressStringToBytesResponse;
    toAminoMsg(message: AddressStringToBytesResponse): AddressStringToBytesResponseAminoMsg;
    fromProtoMsg(message: AddressStringToBytesResponseProtoMsg): AddressStringToBytesResponse;
    toProto(message: AddressStringToBytesResponse): Uint8Array;
    toProtoMsg(message: AddressStringToBytesResponse): AddressStringToBytesResponseProtoMsg;
};
