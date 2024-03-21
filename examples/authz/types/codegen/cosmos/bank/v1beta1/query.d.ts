import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType, Metadata, MetadataAmino, MetadataSDKType } from "./bank";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequest {
    /** address is the address to query balances for. */
    address: string;
    /** denom is the coin denom to query balances for. */
    denom: string;
}
export interface QueryBalanceRequestProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryBalanceRequest";
    value: Uint8Array;
}
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequestAmino {
    /** address is the address to query balances for. */
    address?: string;
    /** denom is the coin denom to query balances for. */
    denom?: string;
}
export interface QueryBalanceRequestAminoMsg {
    type: "cosmos-sdk/QueryBalanceRequest";
    value: QueryBalanceRequestAmino;
}
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequestSDKType {
    address: string;
    denom: string;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponse {
    /** balance is the balance of the coin. */
    balance?: Coin | undefined;
}
export interface QueryBalanceResponseProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryBalanceResponse";
    value: Uint8Array;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponseAmino {
    /** balance is the balance of the coin. */
    balance?: CoinAmino | undefined;
}
export interface QueryBalanceResponseAminoMsg {
    type: "cosmos-sdk/QueryBalanceResponse";
    value: QueryBalanceResponseAmino;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponseSDKType {
    balance?: CoinSDKType | undefined;
}
/** QueryBalanceRequest is the request type for the Query/AllBalances RPC method. */
export interface QueryAllBalancesRequest {
    /** address is the address to query balances for. */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
export interface QueryAllBalancesRequestProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryAllBalancesRequest";
    value: Uint8Array;
}
/** QueryBalanceRequest is the request type for the Query/AllBalances RPC method. */
export interface QueryAllBalancesRequestAmino {
    /** address is the address to query balances for. */
    address?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino | undefined;
}
export interface QueryAllBalancesRequestAminoMsg {
    type: "cosmos-sdk/QueryAllBalancesRequest";
    value: QueryAllBalancesRequestAmino;
}
/** QueryBalanceRequest is the request type for the Query/AllBalances RPC method. */
export interface QueryAllBalancesRequestSDKType {
    address: string;
    pagination?: PageRequestSDKType | undefined;
}
/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
 * method.
 */
export interface QueryAllBalancesResponse {
    /** balances is the balances of all the coins. */
    balances: Coin[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
export interface QueryAllBalancesResponseProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryAllBalancesResponse";
    value: Uint8Array;
}
/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
 * method.
 */
export interface QueryAllBalancesResponseAmino {
    /** balances is the balances of all the coins. */
    balances?: CoinAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino | undefined;
}
export interface QueryAllBalancesResponseAminoMsg {
    type: "cosmos-sdk/QueryAllBalancesResponse";
    value: QueryAllBalancesResponseAmino;
}
/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
 * method.
 */
export interface QueryAllBalancesResponseSDKType {
    balances: CoinSDKType[];
    pagination?: PageResponseSDKType | undefined;
}
/**
 * QuerySpendableBalancesRequest defines the gRPC request structure for querying
 * an account's spendable balances.
 */
export interface QuerySpendableBalancesRequest {
    /** address is the address to query spendable balances for. */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
export interface QuerySpendableBalancesRequestProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalancesRequest";
    value: Uint8Array;
}
/**
 * QuerySpendableBalancesRequest defines the gRPC request structure for querying
 * an account's spendable balances.
 */
export interface QuerySpendableBalancesRequestAmino {
    /** address is the address to query spendable balances for. */
    address?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino | undefined;
}
export interface QuerySpendableBalancesRequestAminoMsg {
    type: "cosmos-sdk/QuerySpendableBalancesRequest";
    value: QuerySpendableBalancesRequestAmino;
}
/**
 * QuerySpendableBalancesRequest defines the gRPC request structure for querying
 * an account's spendable balances.
 */
export interface QuerySpendableBalancesRequestSDKType {
    address: string;
    pagination?: PageRequestSDKType | undefined;
}
/**
 * QuerySpendableBalancesResponse defines the gRPC response structure for querying
 * an account's spendable balances.
 */
export interface QuerySpendableBalancesResponse {
    /** balances is the spendable balances of all the coins. */
    balances: Coin[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
export interface QuerySpendableBalancesResponseProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalancesResponse";
    value: Uint8Array;
}
/**
 * QuerySpendableBalancesResponse defines the gRPC response structure for querying
 * an account's spendable balances.
 */
export interface QuerySpendableBalancesResponseAmino {
    /** balances is the spendable balances of all the coins. */
    balances?: CoinAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino | undefined;
}
export interface QuerySpendableBalancesResponseAminoMsg {
    type: "cosmos-sdk/QuerySpendableBalancesResponse";
    value: QuerySpendableBalancesResponseAmino;
}
/**
 * QuerySpendableBalancesResponse defines the gRPC response structure for querying
 * an account's spendable balances.
 */
export interface QuerySpendableBalancesResponseSDKType {
    balances: CoinSDKType[];
    pagination?: PageResponseSDKType | undefined;
}
/**
 * QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */
export interface QueryTotalSupplyRequest {
    /**
     * pagination defines an optional pagination for the request.
     *
     * Since: cosmos-sdk 0.43
     */
    pagination?: PageRequest | undefined;
}
export interface QueryTotalSupplyRequestProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryTotalSupplyRequest";
    value: Uint8Array;
}
/**
 * QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */
export interface QueryTotalSupplyRequestAmino {
    /**
     * pagination defines an optional pagination for the request.
     *
     * Since: cosmos-sdk 0.43
     */
    pagination?: PageRequestAmino | undefined;
}
export interface QueryTotalSupplyRequestAminoMsg {
    type: "cosmos-sdk/QueryTotalSupplyRequest";
    value: QueryTotalSupplyRequestAmino;
}
/**
 * QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */
export interface QueryTotalSupplyRequestSDKType {
    pagination?: PageRequestSDKType | undefined;
}
/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 */
export interface QueryTotalSupplyResponse {
    /** supply is the supply of the coins */
    supply: Coin[];
    /**
     * pagination defines the pagination in the response.
     *
     * Since: cosmos-sdk 0.43
     */
    pagination?: PageResponse | undefined;
}
export interface QueryTotalSupplyResponseProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryTotalSupplyResponse";
    value: Uint8Array;
}
/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 */
export interface QueryTotalSupplyResponseAmino {
    /** supply is the supply of the coins */
    supply?: CoinAmino[];
    /**
     * pagination defines the pagination in the response.
     *
     * Since: cosmos-sdk 0.43
     */
    pagination?: PageResponseAmino | undefined;
}
export interface QueryTotalSupplyResponseAminoMsg {
    type: "cosmos-sdk/QueryTotalSupplyResponse";
    value: QueryTotalSupplyResponseAmino;
}
/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 */
export interface QueryTotalSupplyResponseSDKType {
    supply: CoinSDKType[];
    pagination?: PageResponseSDKType | undefined;
}
/** QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfRequest {
    /** denom is the coin denom to query balances for. */
    denom: string;
}
export interface QuerySupplyOfRequestProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QuerySupplyOfRequest";
    value: Uint8Array;
}
/** QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfRequestAmino {
    /** denom is the coin denom to query balances for. */
    denom?: string;
}
export interface QuerySupplyOfRequestAminoMsg {
    type: "cosmos-sdk/QuerySupplyOfRequest";
    value: QuerySupplyOfRequestAmino;
}
/** QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfRequestSDKType {
    denom: string;
}
/** QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfResponse {
    /** amount is the supply of the coin. */
    amount: Coin | undefined;
}
export interface QuerySupplyOfResponseProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QuerySupplyOfResponse";
    value: Uint8Array;
}
/** QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfResponseAmino {
    /** amount is the supply of the coin. */
    amount?: CoinAmino | undefined;
}
export interface QuerySupplyOfResponseAminoMsg {
    type: "cosmos-sdk/QuerySupplyOfResponse";
    value: QuerySupplyOfResponseAmino;
}
/** QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfResponseSDKType {
    amount: CoinSDKType | undefined;
}
/** QueryParamsRequest defines the request type for querying x/bank parameters. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest defines the request type for querying x/bank parameters. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "cosmos-sdk/QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest defines the request type for querying x/bank parameters. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse defines the response type for querying x/bank parameters. */
export interface QueryParamsResponse {
    params: Params | undefined;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse defines the response type for querying x/bank parameters. */
export interface QueryParamsResponseAmino {
    params?: ParamsAmino | undefined;
}
export interface QueryParamsResponseAminoMsg {
    type: "cosmos-sdk/QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse defines the response type for querying x/bank parameters. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType | undefined;
}
/** QueryDenomsMetadataRequest is the request type for the Query/DenomsMetadata RPC method. */
export interface QueryDenomsMetadataRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
export interface QueryDenomsMetadataRequestProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryDenomsMetadataRequest";
    value: Uint8Array;
}
/** QueryDenomsMetadataRequest is the request type for the Query/DenomsMetadata RPC method. */
export interface QueryDenomsMetadataRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino | undefined;
}
export interface QueryDenomsMetadataRequestAminoMsg {
    type: "cosmos-sdk/QueryDenomsMetadataRequest";
    value: QueryDenomsMetadataRequestAmino;
}
/** QueryDenomsMetadataRequest is the request type for the Query/DenomsMetadata RPC method. */
export interface QueryDenomsMetadataRequestSDKType {
    pagination?: PageRequestSDKType | undefined;
}
/**
 * QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
 * method.
 */
export interface QueryDenomsMetadataResponse {
    /** metadata provides the client information for all the registered tokens. */
    metadatas: Metadata[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
export interface QueryDenomsMetadataResponseProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryDenomsMetadataResponse";
    value: Uint8Array;
}
/**
 * QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
 * method.
 */
export interface QueryDenomsMetadataResponseAmino {
    /** metadata provides the client information for all the registered tokens. */
    metadatas?: MetadataAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino | undefined;
}
export interface QueryDenomsMetadataResponseAminoMsg {
    type: "cosmos-sdk/QueryDenomsMetadataResponse";
    value: QueryDenomsMetadataResponseAmino;
}
/**
 * QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
 * method.
 */
export interface QueryDenomsMetadataResponseSDKType {
    metadatas: MetadataSDKType[];
    pagination?: PageResponseSDKType | undefined;
}
/** QueryDenomMetadataRequest is the request type for the Query/DenomMetadata RPC method. */
export interface QueryDenomMetadataRequest {
    /** denom is the coin denom to query the metadata for. */
    denom: string;
}
export interface QueryDenomMetadataRequestProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataRequest";
    value: Uint8Array;
}
/** QueryDenomMetadataRequest is the request type for the Query/DenomMetadata RPC method. */
export interface QueryDenomMetadataRequestAmino {
    /** denom is the coin denom to query the metadata for. */
    denom?: string;
}
export interface QueryDenomMetadataRequestAminoMsg {
    type: "cosmos-sdk/QueryDenomMetadataRequest";
    value: QueryDenomMetadataRequestAmino;
}
/** QueryDenomMetadataRequest is the request type for the Query/DenomMetadata RPC method. */
export interface QueryDenomMetadataRequestSDKType {
    denom: string;
}
/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
 * method.
 */
export interface QueryDenomMetadataResponse {
    /** metadata describes and provides all the client information for the requested token. */
    metadata: Metadata | undefined;
}
export interface QueryDenomMetadataResponseProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataResponse";
    value: Uint8Array;
}
/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
 * method.
 */
export interface QueryDenomMetadataResponseAmino {
    /** metadata describes and provides all the client information for the requested token. */
    metadata?: MetadataAmino | undefined;
}
export interface QueryDenomMetadataResponseAminoMsg {
    type: "cosmos-sdk/QueryDenomMetadataResponse";
    value: QueryDenomMetadataResponseAmino;
}
/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
 * method.
 */
export interface QueryDenomMetadataResponseSDKType {
    metadata: MetadataSDKType | undefined;
}
/**
 * QueryDenomOwnersRequest defines the request type for the DenomOwners RPC query,
 * which queries for a paginated set of all account holders of a particular
 * denomination.
 */
export interface QueryDenomOwnersRequest {
    /** denom defines the coin denomination to query all account holders for. */
    denom: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
export interface QueryDenomOwnersRequestProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersRequest";
    value: Uint8Array;
}
/**
 * QueryDenomOwnersRequest defines the request type for the DenomOwners RPC query,
 * which queries for a paginated set of all account holders of a particular
 * denomination.
 */
export interface QueryDenomOwnersRequestAmino {
    /** denom defines the coin denomination to query all account holders for. */
    denom?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino | undefined;
}
export interface QueryDenomOwnersRequestAminoMsg {
    type: "cosmos-sdk/QueryDenomOwnersRequest";
    value: QueryDenomOwnersRequestAmino;
}
/**
 * QueryDenomOwnersRequest defines the request type for the DenomOwners RPC query,
 * which queries for a paginated set of all account holders of a particular
 * denomination.
 */
export interface QueryDenomOwnersRequestSDKType {
    denom: string;
    pagination?: PageRequestSDKType | undefined;
}
/**
 * DenomOwner defines structure representing an account that owns or holds a
 * particular denominated token. It contains the account address and account
 * balance of the denominated token.
 */
export interface DenomOwner {
    /** address defines the address that owns a particular denomination. */
    address: string;
    /** balance is the balance of the denominated coin for an account. */
    balance: Coin | undefined;
}
export interface DenomOwnerProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.DenomOwner";
    value: Uint8Array;
}
/**
 * DenomOwner defines structure representing an account that owns or holds a
 * particular denominated token. It contains the account address and account
 * balance of the denominated token.
 */
export interface DenomOwnerAmino {
    /** address defines the address that owns a particular denomination. */
    address?: string;
    /** balance is the balance of the denominated coin for an account. */
    balance?: CoinAmino | undefined;
}
export interface DenomOwnerAminoMsg {
    type: "cosmos-sdk/DenomOwner";
    value: DenomOwnerAmino;
}
/**
 * DenomOwner defines structure representing an account that owns or holds a
 * particular denominated token. It contains the account address and account
 * balance of the denominated token.
 */
export interface DenomOwnerSDKType {
    address: string;
    balance: CoinSDKType | undefined;
}
/** QueryDenomOwnersResponse defines the RPC response of a DenomOwners RPC query. */
export interface QueryDenomOwnersResponse {
    denomOwners: DenomOwner[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
export interface QueryDenomOwnersResponseProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersResponse";
    value: Uint8Array;
}
/** QueryDenomOwnersResponse defines the RPC response of a DenomOwners RPC query. */
export interface QueryDenomOwnersResponseAmino {
    denom_owners?: DenomOwnerAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino | undefined;
}
export interface QueryDenomOwnersResponseAminoMsg {
    type: "cosmos-sdk/QueryDenomOwnersResponse";
    value: QueryDenomOwnersResponseAmino;
}
/** QueryDenomOwnersResponse defines the RPC response of a DenomOwners RPC query. */
export interface QueryDenomOwnersResponseSDKType {
    denom_owners: DenomOwnerSDKType[];
    pagination?: PageResponseSDKType | undefined;
}
export declare const QueryBalanceRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryBalanceRequest;
    isSDK(o: any): o is QueryBalanceRequestSDKType;
    isAmino(o: any): o is QueryBalanceRequestAmino;
    encode(message: QueryBalanceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceRequest;
    fromJSON(object: any): QueryBalanceRequest;
    toJSON(message: QueryBalanceRequest): unknown;
    fromPartial(object: DeepPartial<QueryBalanceRequest>): QueryBalanceRequest;
    fromSDK(object: QueryBalanceRequestSDKType): QueryBalanceRequest;
    toSDK(message: QueryBalanceRequest): QueryBalanceRequestSDKType;
    fromAmino(object: QueryBalanceRequestAmino): QueryBalanceRequest;
    toAmino(message: QueryBalanceRequest): QueryBalanceRequestAmino;
    fromAminoMsg(object: QueryBalanceRequestAminoMsg): QueryBalanceRequest;
    toAminoMsg(message: QueryBalanceRequest): QueryBalanceRequestAminoMsg;
    fromProtoMsg(message: QueryBalanceRequestProtoMsg): QueryBalanceRequest;
    toProto(message: QueryBalanceRequest): Uint8Array;
    toProtoMsg(message: QueryBalanceRequest): QueryBalanceRequestProtoMsg;
};
export declare const QueryBalanceResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryBalanceResponse;
    isSDK(o: any): o is QueryBalanceResponseSDKType;
    isAmino(o: any): o is QueryBalanceResponseAmino;
    encode(message: QueryBalanceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceResponse;
    fromJSON(object: any): QueryBalanceResponse;
    toJSON(message: QueryBalanceResponse): unknown;
    fromPartial(object: DeepPartial<QueryBalanceResponse>): QueryBalanceResponse;
    fromSDK(object: QueryBalanceResponseSDKType): QueryBalanceResponse;
    toSDK(message: QueryBalanceResponse): QueryBalanceResponseSDKType;
    fromAmino(object: QueryBalanceResponseAmino): QueryBalanceResponse;
    toAmino(message: QueryBalanceResponse): QueryBalanceResponseAmino;
    fromAminoMsg(object: QueryBalanceResponseAminoMsg): QueryBalanceResponse;
    toAminoMsg(message: QueryBalanceResponse): QueryBalanceResponseAminoMsg;
    fromProtoMsg(message: QueryBalanceResponseProtoMsg): QueryBalanceResponse;
    toProto(message: QueryBalanceResponse): Uint8Array;
    toProtoMsg(message: QueryBalanceResponse): QueryBalanceResponseProtoMsg;
};
export declare const QueryAllBalancesRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryAllBalancesRequest;
    isSDK(o: any): o is QueryAllBalancesRequestSDKType;
    isAmino(o: any): o is QueryAllBalancesRequestAmino;
    encode(message: QueryAllBalancesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBalancesRequest;
    fromJSON(object: any): QueryAllBalancesRequest;
    toJSON(message: QueryAllBalancesRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllBalancesRequest>): QueryAllBalancesRequest;
    fromSDK(object: QueryAllBalancesRequestSDKType): QueryAllBalancesRequest;
    toSDK(message: QueryAllBalancesRequest): QueryAllBalancesRequestSDKType;
    fromAmino(object: QueryAllBalancesRequestAmino): QueryAllBalancesRequest;
    toAmino(message: QueryAllBalancesRequest): QueryAllBalancesRequestAmino;
    fromAminoMsg(object: QueryAllBalancesRequestAminoMsg): QueryAllBalancesRequest;
    toAminoMsg(message: QueryAllBalancesRequest): QueryAllBalancesRequestAminoMsg;
    fromProtoMsg(message: QueryAllBalancesRequestProtoMsg): QueryAllBalancesRequest;
    toProto(message: QueryAllBalancesRequest): Uint8Array;
    toProtoMsg(message: QueryAllBalancesRequest): QueryAllBalancesRequestProtoMsg;
};
export declare const QueryAllBalancesResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryAllBalancesResponse;
    isSDK(o: any): o is QueryAllBalancesResponseSDKType;
    isAmino(o: any): o is QueryAllBalancesResponseAmino;
    encode(message: QueryAllBalancesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBalancesResponse;
    fromJSON(object: any): QueryAllBalancesResponse;
    toJSON(message: QueryAllBalancesResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllBalancesResponse>): QueryAllBalancesResponse;
    fromSDK(object: QueryAllBalancesResponseSDKType): QueryAllBalancesResponse;
    toSDK(message: QueryAllBalancesResponse): QueryAllBalancesResponseSDKType;
    fromAmino(object: QueryAllBalancesResponseAmino): QueryAllBalancesResponse;
    toAmino(message: QueryAllBalancesResponse): QueryAllBalancesResponseAmino;
    fromAminoMsg(object: QueryAllBalancesResponseAminoMsg): QueryAllBalancesResponse;
    toAminoMsg(message: QueryAllBalancesResponse): QueryAllBalancesResponseAminoMsg;
    fromProtoMsg(message: QueryAllBalancesResponseProtoMsg): QueryAllBalancesResponse;
    toProto(message: QueryAllBalancesResponse): Uint8Array;
    toProtoMsg(message: QueryAllBalancesResponse): QueryAllBalancesResponseProtoMsg;
};
export declare const QuerySpendableBalancesRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QuerySpendableBalancesRequest;
    isSDK(o: any): o is QuerySpendableBalancesRequestSDKType;
    isAmino(o: any): o is QuerySpendableBalancesRequestAmino;
    encode(message: QuerySpendableBalancesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySpendableBalancesRequest;
    fromJSON(object: any): QuerySpendableBalancesRequest;
    toJSON(message: QuerySpendableBalancesRequest): unknown;
    fromPartial(object: DeepPartial<QuerySpendableBalancesRequest>): QuerySpendableBalancesRequest;
    fromSDK(object: QuerySpendableBalancesRequestSDKType): QuerySpendableBalancesRequest;
    toSDK(message: QuerySpendableBalancesRequest): QuerySpendableBalancesRequestSDKType;
    fromAmino(object: QuerySpendableBalancesRequestAmino): QuerySpendableBalancesRequest;
    toAmino(message: QuerySpendableBalancesRequest): QuerySpendableBalancesRequestAmino;
    fromAminoMsg(object: QuerySpendableBalancesRequestAminoMsg): QuerySpendableBalancesRequest;
    toAminoMsg(message: QuerySpendableBalancesRequest): QuerySpendableBalancesRequestAminoMsg;
    fromProtoMsg(message: QuerySpendableBalancesRequestProtoMsg): QuerySpendableBalancesRequest;
    toProto(message: QuerySpendableBalancesRequest): Uint8Array;
    toProtoMsg(message: QuerySpendableBalancesRequest): QuerySpendableBalancesRequestProtoMsg;
};
export declare const QuerySpendableBalancesResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QuerySpendableBalancesResponse;
    isSDK(o: any): o is QuerySpendableBalancesResponseSDKType;
    isAmino(o: any): o is QuerySpendableBalancesResponseAmino;
    encode(message: QuerySpendableBalancesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySpendableBalancesResponse;
    fromJSON(object: any): QuerySpendableBalancesResponse;
    toJSON(message: QuerySpendableBalancesResponse): unknown;
    fromPartial(object: DeepPartial<QuerySpendableBalancesResponse>): QuerySpendableBalancesResponse;
    fromSDK(object: QuerySpendableBalancesResponseSDKType): QuerySpendableBalancesResponse;
    toSDK(message: QuerySpendableBalancesResponse): QuerySpendableBalancesResponseSDKType;
    fromAmino(object: QuerySpendableBalancesResponseAmino): QuerySpendableBalancesResponse;
    toAmino(message: QuerySpendableBalancesResponse): QuerySpendableBalancesResponseAmino;
    fromAminoMsg(object: QuerySpendableBalancesResponseAminoMsg): QuerySpendableBalancesResponse;
    toAminoMsg(message: QuerySpendableBalancesResponse): QuerySpendableBalancesResponseAminoMsg;
    fromProtoMsg(message: QuerySpendableBalancesResponseProtoMsg): QuerySpendableBalancesResponse;
    toProto(message: QuerySpendableBalancesResponse): Uint8Array;
    toProtoMsg(message: QuerySpendableBalancesResponse): QuerySpendableBalancesResponseProtoMsg;
};
export declare const QueryTotalSupplyRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryTotalSupplyRequest;
    isSDK(o: any): o is QueryTotalSupplyRequestSDKType;
    isAmino(o: any): o is QueryTotalSupplyRequestAmino;
    encode(message: QueryTotalSupplyRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSupplyRequest;
    fromJSON(object: any): QueryTotalSupplyRequest;
    toJSON(message: QueryTotalSupplyRequest): unknown;
    fromPartial(object: DeepPartial<QueryTotalSupplyRequest>): QueryTotalSupplyRequest;
    fromSDK(object: QueryTotalSupplyRequestSDKType): QueryTotalSupplyRequest;
    toSDK(message: QueryTotalSupplyRequest): QueryTotalSupplyRequestSDKType;
    fromAmino(object: QueryTotalSupplyRequestAmino): QueryTotalSupplyRequest;
    toAmino(message: QueryTotalSupplyRequest): QueryTotalSupplyRequestAmino;
    fromAminoMsg(object: QueryTotalSupplyRequestAminoMsg): QueryTotalSupplyRequest;
    toAminoMsg(message: QueryTotalSupplyRequest): QueryTotalSupplyRequestAminoMsg;
    fromProtoMsg(message: QueryTotalSupplyRequestProtoMsg): QueryTotalSupplyRequest;
    toProto(message: QueryTotalSupplyRequest): Uint8Array;
    toProtoMsg(message: QueryTotalSupplyRequest): QueryTotalSupplyRequestProtoMsg;
};
export declare const QueryTotalSupplyResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryTotalSupplyResponse;
    isSDK(o: any): o is QueryTotalSupplyResponseSDKType;
    isAmino(o: any): o is QueryTotalSupplyResponseAmino;
    encode(message: QueryTotalSupplyResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSupplyResponse;
    fromJSON(object: any): QueryTotalSupplyResponse;
    toJSON(message: QueryTotalSupplyResponse): unknown;
    fromPartial(object: DeepPartial<QueryTotalSupplyResponse>): QueryTotalSupplyResponse;
    fromSDK(object: QueryTotalSupplyResponseSDKType): QueryTotalSupplyResponse;
    toSDK(message: QueryTotalSupplyResponse): QueryTotalSupplyResponseSDKType;
    fromAmino(object: QueryTotalSupplyResponseAmino): QueryTotalSupplyResponse;
    toAmino(message: QueryTotalSupplyResponse): QueryTotalSupplyResponseAmino;
    fromAminoMsg(object: QueryTotalSupplyResponseAminoMsg): QueryTotalSupplyResponse;
    toAminoMsg(message: QueryTotalSupplyResponse): QueryTotalSupplyResponseAminoMsg;
    fromProtoMsg(message: QueryTotalSupplyResponseProtoMsg): QueryTotalSupplyResponse;
    toProto(message: QueryTotalSupplyResponse): Uint8Array;
    toProtoMsg(message: QueryTotalSupplyResponse): QueryTotalSupplyResponseProtoMsg;
};
export declare const QuerySupplyOfRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QuerySupplyOfRequest;
    isSDK(o: any): o is QuerySupplyOfRequestSDKType;
    isAmino(o: any): o is QuerySupplyOfRequestAmino;
    encode(message: QuerySupplyOfRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyOfRequest;
    fromJSON(object: any): QuerySupplyOfRequest;
    toJSON(message: QuerySupplyOfRequest): unknown;
    fromPartial(object: DeepPartial<QuerySupplyOfRequest>): QuerySupplyOfRequest;
    fromSDK(object: QuerySupplyOfRequestSDKType): QuerySupplyOfRequest;
    toSDK(message: QuerySupplyOfRequest): QuerySupplyOfRequestSDKType;
    fromAmino(object: QuerySupplyOfRequestAmino): QuerySupplyOfRequest;
    toAmino(message: QuerySupplyOfRequest): QuerySupplyOfRequestAmino;
    fromAminoMsg(object: QuerySupplyOfRequestAminoMsg): QuerySupplyOfRequest;
    toAminoMsg(message: QuerySupplyOfRequest): QuerySupplyOfRequestAminoMsg;
    fromProtoMsg(message: QuerySupplyOfRequestProtoMsg): QuerySupplyOfRequest;
    toProto(message: QuerySupplyOfRequest): Uint8Array;
    toProtoMsg(message: QuerySupplyOfRequest): QuerySupplyOfRequestProtoMsg;
};
export declare const QuerySupplyOfResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QuerySupplyOfResponse;
    isSDK(o: any): o is QuerySupplyOfResponseSDKType;
    isAmino(o: any): o is QuerySupplyOfResponseAmino;
    encode(message: QuerySupplyOfResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyOfResponse;
    fromJSON(object: any): QuerySupplyOfResponse;
    toJSON(message: QuerySupplyOfResponse): unknown;
    fromPartial(object: DeepPartial<QuerySupplyOfResponse>): QuerySupplyOfResponse;
    fromSDK(object: QuerySupplyOfResponseSDKType): QuerySupplyOfResponse;
    toSDK(message: QuerySupplyOfResponse): QuerySupplyOfResponseSDKType;
    fromAmino(object: QuerySupplyOfResponseAmino): QuerySupplyOfResponse;
    toAmino(message: QuerySupplyOfResponse): QuerySupplyOfResponseAmino;
    fromAminoMsg(object: QuerySupplyOfResponseAminoMsg): QuerySupplyOfResponse;
    toAminoMsg(message: QuerySupplyOfResponse): QuerySupplyOfResponseAminoMsg;
    fromProtoMsg(message: QuerySupplyOfResponseProtoMsg): QuerySupplyOfResponse;
    toProto(message: QuerySupplyOfResponse): Uint8Array;
    toProtoMsg(message: QuerySupplyOfResponse): QuerySupplyOfResponseProtoMsg;
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
export declare const QueryDenomsMetadataRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDenomsMetadataRequest;
    isSDK(o: any): o is QueryDenomsMetadataRequestSDKType;
    isAmino(o: any): o is QueryDenomsMetadataRequestAmino;
    encode(message: QueryDenomsMetadataRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsMetadataRequest;
    fromJSON(object: any): QueryDenomsMetadataRequest;
    toJSON(message: QueryDenomsMetadataRequest): unknown;
    fromPartial(object: DeepPartial<QueryDenomsMetadataRequest>): QueryDenomsMetadataRequest;
    fromSDK(object: QueryDenomsMetadataRequestSDKType): QueryDenomsMetadataRequest;
    toSDK(message: QueryDenomsMetadataRequest): QueryDenomsMetadataRequestSDKType;
    fromAmino(object: QueryDenomsMetadataRequestAmino): QueryDenomsMetadataRequest;
    toAmino(message: QueryDenomsMetadataRequest): QueryDenomsMetadataRequestAmino;
    fromAminoMsg(object: QueryDenomsMetadataRequestAminoMsg): QueryDenomsMetadataRequest;
    toAminoMsg(message: QueryDenomsMetadataRequest): QueryDenomsMetadataRequestAminoMsg;
    fromProtoMsg(message: QueryDenomsMetadataRequestProtoMsg): QueryDenomsMetadataRequest;
    toProto(message: QueryDenomsMetadataRequest): Uint8Array;
    toProtoMsg(message: QueryDenomsMetadataRequest): QueryDenomsMetadataRequestProtoMsg;
};
export declare const QueryDenomsMetadataResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDenomsMetadataResponse;
    isSDK(o: any): o is QueryDenomsMetadataResponseSDKType;
    isAmino(o: any): o is QueryDenomsMetadataResponseAmino;
    encode(message: QueryDenomsMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsMetadataResponse;
    fromJSON(object: any): QueryDenomsMetadataResponse;
    toJSON(message: QueryDenomsMetadataResponse): unknown;
    fromPartial(object: DeepPartial<QueryDenomsMetadataResponse>): QueryDenomsMetadataResponse;
    fromSDK(object: QueryDenomsMetadataResponseSDKType): QueryDenomsMetadataResponse;
    toSDK(message: QueryDenomsMetadataResponse): QueryDenomsMetadataResponseSDKType;
    fromAmino(object: QueryDenomsMetadataResponseAmino): QueryDenomsMetadataResponse;
    toAmino(message: QueryDenomsMetadataResponse): QueryDenomsMetadataResponseAmino;
    fromAminoMsg(object: QueryDenomsMetadataResponseAminoMsg): QueryDenomsMetadataResponse;
    toAminoMsg(message: QueryDenomsMetadataResponse): QueryDenomsMetadataResponseAminoMsg;
    fromProtoMsg(message: QueryDenomsMetadataResponseProtoMsg): QueryDenomsMetadataResponse;
    toProto(message: QueryDenomsMetadataResponse): Uint8Array;
    toProtoMsg(message: QueryDenomsMetadataResponse): QueryDenomsMetadataResponseProtoMsg;
};
export declare const QueryDenomMetadataRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDenomMetadataRequest;
    isSDK(o: any): o is QueryDenomMetadataRequestSDKType;
    isAmino(o: any): o is QueryDenomMetadataRequestAmino;
    encode(message: QueryDenomMetadataRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomMetadataRequest;
    fromJSON(object: any): QueryDenomMetadataRequest;
    toJSON(message: QueryDenomMetadataRequest): unknown;
    fromPartial(object: DeepPartial<QueryDenomMetadataRequest>): QueryDenomMetadataRequest;
    fromSDK(object: QueryDenomMetadataRequestSDKType): QueryDenomMetadataRequest;
    toSDK(message: QueryDenomMetadataRequest): QueryDenomMetadataRequestSDKType;
    fromAmino(object: QueryDenomMetadataRequestAmino): QueryDenomMetadataRequest;
    toAmino(message: QueryDenomMetadataRequest): QueryDenomMetadataRequestAmino;
    fromAminoMsg(object: QueryDenomMetadataRequestAminoMsg): QueryDenomMetadataRequest;
    toAminoMsg(message: QueryDenomMetadataRequest): QueryDenomMetadataRequestAminoMsg;
    fromProtoMsg(message: QueryDenomMetadataRequestProtoMsg): QueryDenomMetadataRequest;
    toProto(message: QueryDenomMetadataRequest): Uint8Array;
    toProtoMsg(message: QueryDenomMetadataRequest): QueryDenomMetadataRequestProtoMsg;
};
export declare const QueryDenomMetadataResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDenomMetadataResponse;
    isSDK(o: any): o is QueryDenomMetadataResponseSDKType;
    isAmino(o: any): o is QueryDenomMetadataResponseAmino;
    encode(message: QueryDenomMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomMetadataResponse;
    fromJSON(object: any): QueryDenomMetadataResponse;
    toJSON(message: QueryDenomMetadataResponse): unknown;
    fromPartial(object: DeepPartial<QueryDenomMetadataResponse>): QueryDenomMetadataResponse;
    fromSDK(object: QueryDenomMetadataResponseSDKType): QueryDenomMetadataResponse;
    toSDK(message: QueryDenomMetadataResponse): QueryDenomMetadataResponseSDKType;
    fromAmino(object: QueryDenomMetadataResponseAmino): QueryDenomMetadataResponse;
    toAmino(message: QueryDenomMetadataResponse): QueryDenomMetadataResponseAmino;
    fromAminoMsg(object: QueryDenomMetadataResponseAminoMsg): QueryDenomMetadataResponse;
    toAminoMsg(message: QueryDenomMetadataResponse): QueryDenomMetadataResponseAminoMsg;
    fromProtoMsg(message: QueryDenomMetadataResponseProtoMsg): QueryDenomMetadataResponse;
    toProto(message: QueryDenomMetadataResponse): Uint8Array;
    toProtoMsg(message: QueryDenomMetadataResponse): QueryDenomMetadataResponseProtoMsg;
};
export declare const QueryDenomOwnersRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDenomOwnersRequest;
    isSDK(o: any): o is QueryDenomOwnersRequestSDKType;
    isAmino(o: any): o is QueryDenomOwnersRequestAmino;
    encode(message: QueryDenomOwnersRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomOwnersRequest;
    fromJSON(object: any): QueryDenomOwnersRequest;
    toJSON(message: QueryDenomOwnersRequest): unknown;
    fromPartial(object: DeepPartial<QueryDenomOwnersRequest>): QueryDenomOwnersRequest;
    fromSDK(object: QueryDenomOwnersRequestSDKType): QueryDenomOwnersRequest;
    toSDK(message: QueryDenomOwnersRequest): QueryDenomOwnersRequestSDKType;
    fromAmino(object: QueryDenomOwnersRequestAmino): QueryDenomOwnersRequest;
    toAmino(message: QueryDenomOwnersRequest): QueryDenomOwnersRequestAmino;
    fromAminoMsg(object: QueryDenomOwnersRequestAminoMsg): QueryDenomOwnersRequest;
    toAminoMsg(message: QueryDenomOwnersRequest): QueryDenomOwnersRequestAminoMsg;
    fromProtoMsg(message: QueryDenomOwnersRequestProtoMsg): QueryDenomOwnersRequest;
    toProto(message: QueryDenomOwnersRequest): Uint8Array;
    toProtoMsg(message: QueryDenomOwnersRequest): QueryDenomOwnersRequestProtoMsg;
};
export declare const DenomOwner: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is DenomOwner;
    isSDK(o: any): o is DenomOwnerSDKType;
    isAmino(o: any): o is DenomOwnerAmino;
    encode(message: DenomOwner, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DenomOwner;
    fromJSON(object: any): DenomOwner;
    toJSON(message: DenomOwner): unknown;
    fromPartial(object: DeepPartial<DenomOwner>): DenomOwner;
    fromSDK(object: DenomOwnerSDKType): DenomOwner;
    toSDK(message: DenomOwner): DenomOwnerSDKType;
    fromAmino(object: DenomOwnerAmino): DenomOwner;
    toAmino(message: DenomOwner): DenomOwnerAmino;
    fromAminoMsg(object: DenomOwnerAminoMsg): DenomOwner;
    toAminoMsg(message: DenomOwner): DenomOwnerAminoMsg;
    fromProtoMsg(message: DenomOwnerProtoMsg): DenomOwner;
    toProto(message: DenomOwner): Uint8Array;
    toProtoMsg(message: DenomOwner): DenomOwnerProtoMsg;
};
export declare const QueryDenomOwnersResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDenomOwnersResponse;
    isSDK(o: any): o is QueryDenomOwnersResponseSDKType;
    isAmino(o: any): o is QueryDenomOwnersResponseAmino;
    encode(message: QueryDenomOwnersResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomOwnersResponse;
    fromJSON(object: any): QueryDenomOwnersResponse;
    toJSON(message: QueryDenomOwnersResponse): unknown;
    fromPartial(object: DeepPartial<QueryDenomOwnersResponse>): QueryDenomOwnersResponse;
    fromSDK(object: QueryDenomOwnersResponseSDKType): QueryDenomOwnersResponse;
    toSDK(message: QueryDenomOwnersResponse): QueryDenomOwnersResponseSDKType;
    fromAmino(object: QueryDenomOwnersResponseAmino): QueryDenomOwnersResponse;
    toAmino(message: QueryDenomOwnersResponse): QueryDenomOwnersResponseAmino;
    fromAminoMsg(object: QueryDenomOwnersResponseAminoMsg): QueryDenomOwnersResponse;
    toAminoMsg(message: QueryDenomOwnersResponse): QueryDenomOwnersResponseAminoMsg;
    fromProtoMsg(message: QueryDenomOwnersResponseProtoMsg): QueryDenomOwnersResponse;
    toProto(message: QueryDenomOwnersResponse): Uint8Array;
    toProtoMsg(message: QueryDenomOwnersResponse): QueryDenomOwnersResponseProtoMsg;
};
