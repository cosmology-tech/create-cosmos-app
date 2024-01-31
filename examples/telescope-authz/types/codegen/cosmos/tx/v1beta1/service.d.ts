import { Tx, TxAmino, TxSDKType } from "./tx";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { TxResponse, TxResponseAmino, TxResponseSDKType, GasInfo, GasInfoAmino, GasInfoSDKType, Result, ResultAmino, ResultSDKType } from "../../base/abci/v1beta1/abci";
import { BlockID, BlockIDAmino, BlockIDSDKType } from "../../../tendermint/types/types";
import { Block, BlockAmino, BlockSDKType } from "../../../tendermint/types/block";
import { DeepPartial } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** OrderBy defines the sorting order */
export declare enum OrderBy {
    /** ORDER_BY_UNSPECIFIED - ORDER_BY_UNSPECIFIED specifies an unknown sorting order. OrderBy defaults to ASC in this case. */
    ORDER_BY_UNSPECIFIED = 0,
    /** ORDER_BY_ASC - ORDER_BY_ASC defines ascending order */
    ORDER_BY_ASC = 1,
    /** ORDER_BY_DESC - ORDER_BY_DESC defines descending order */
    ORDER_BY_DESC = 2,
    UNRECOGNIZED = -1
}
export declare const OrderBySDKType: typeof OrderBy;
export declare const OrderByAmino: typeof OrderBy;
export declare function orderByFromJSON(object: any): OrderBy;
export declare function orderByToJSON(object: OrderBy): string;
/** BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC method. */
export declare enum BroadcastMode {
    /** BROADCAST_MODE_UNSPECIFIED - zero-value for mode ordering */
    BROADCAST_MODE_UNSPECIFIED = 0,
    /**
     * BROADCAST_MODE_BLOCK - BROADCAST_MODE_BLOCK defines a tx broadcasting mode where the client waits for
     * the tx to be committed in a block.
     */
    BROADCAST_MODE_BLOCK = 1,
    /**
     * BROADCAST_MODE_SYNC - BROADCAST_MODE_SYNC defines a tx broadcasting mode where the client waits for
     * a CheckTx execution response only.
     */
    BROADCAST_MODE_SYNC = 2,
    /**
     * BROADCAST_MODE_ASYNC - BROADCAST_MODE_ASYNC defines a tx broadcasting mode where the client returns
     * immediately.
     */
    BROADCAST_MODE_ASYNC = 3,
    UNRECOGNIZED = -1
}
export declare const BroadcastModeSDKType: typeof BroadcastMode;
export declare const BroadcastModeAmino: typeof BroadcastMode;
export declare function broadcastModeFromJSON(object: any): BroadcastMode;
export declare function broadcastModeToJSON(object: BroadcastMode): string;
/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventRequest {
    /** events is the list of transaction event type. */
    events: string[];
    /** pagination defines a pagination for the request. */
    pagination?: PageRequest | undefined;
    orderBy: OrderBy;
}
export interface GetTxsEventRequestProtoMsg {
    typeUrl: "/cosmos.tx.v1beta1.GetTxsEventRequest";
    value: Uint8Array;
}
/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventRequestAmino {
    /** events is the list of transaction event type. */
    events?: string[];
    /** pagination defines a pagination for the request. */
    pagination?: PageRequestAmino | undefined;
    order_by?: OrderBy;
}
export interface GetTxsEventRequestAminoMsg {
    type: "cosmos-sdk/GetTxsEventRequest";
    value: GetTxsEventRequestAmino;
}
/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventRequestSDKType {
    events: string[];
    pagination?: PageRequestSDKType | undefined;
    order_by: OrderBy;
}
/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventResponse {
    /** txs is the list of queried transactions. */
    txs: Tx[];
    /** tx_responses is the list of queried TxResponses. */
    txResponses: TxResponse[];
    /** pagination defines a pagination for the response. */
    pagination?: PageResponse | undefined;
}
export interface GetTxsEventResponseProtoMsg {
    typeUrl: "/cosmos.tx.v1beta1.GetTxsEventResponse";
    value: Uint8Array;
}
/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventResponseAmino {
    /** txs is the list of queried transactions. */
    txs?: TxAmino[];
    /** tx_responses is the list of queried TxResponses. */
    tx_responses?: TxResponseAmino[];
    /** pagination defines a pagination for the response. */
    pagination?: PageResponseAmino | undefined;
}
export interface GetTxsEventResponseAminoMsg {
    type: "cosmos-sdk/GetTxsEventResponse";
    value: GetTxsEventResponseAmino;
}
/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventResponseSDKType {
    txs: TxSDKType[];
    tx_responses: TxResponseSDKType[];
    pagination?: PageResponseSDKType | undefined;
}
/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 */
export interface BroadcastTxRequest {
    /** tx_bytes is the raw transaction. */
    txBytes: Uint8Array;
    mode: BroadcastMode;
}
export interface BroadcastTxRequestProtoMsg {
    typeUrl: "/cosmos.tx.v1beta1.BroadcastTxRequest";
    value: Uint8Array;
}
/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 */
export interface BroadcastTxRequestAmino {
    /** tx_bytes is the raw transaction. */
    tx_bytes?: string;
    mode?: BroadcastMode;
}
export interface BroadcastTxRequestAminoMsg {
    type: "cosmos-sdk/BroadcastTxRequest";
    value: BroadcastTxRequestAmino;
}
/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 */
export interface BroadcastTxRequestSDKType {
    tx_bytes: Uint8Array;
    mode: BroadcastMode;
}
/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 */
export interface BroadcastTxResponse {
    /** tx_response is the queried TxResponses. */
    txResponse?: TxResponse | undefined;
}
export interface BroadcastTxResponseProtoMsg {
    typeUrl: "/cosmos.tx.v1beta1.BroadcastTxResponse";
    value: Uint8Array;
}
/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 */
export interface BroadcastTxResponseAmino {
    /** tx_response is the queried TxResponses. */
    tx_response?: TxResponseAmino | undefined;
}
export interface BroadcastTxResponseAminoMsg {
    type: "cosmos-sdk/BroadcastTxResponse";
    value: BroadcastTxResponseAmino;
}
/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 */
export interface BroadcastTxResponseSDKType {
    tx_response?: TxResponseSDKType | undefined;
}
/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 */
export interface SimulateRequest {
    /**
     * tx is the transaction to simulate.
     * Deprecated. Send raw tx bytes instead.
     */
    /** @deprecated */
    tx?: Tx | undefined;
    /**
     * tx_bytes is the raw transaction.
     *
     * Since: cosmos-sdk 0.43
     */
    txBytes: Uint8Array;
}
export interface SimulateRequestProtoMsg {
    typeUrl: "/cosmos.tx.v1beta1.SimulateRequest";
    value: Uint8Array;
}
/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 */
export interface SimulateRequestAmino {
    /**
     * tx is the transaction to simulate.
     * Deprecated. Send raw tx bytes instead.
     */
    /** @deprecated */
    tx?: TxAmino | undefined;
    /**
     * tx_bytes is the raw transaction.
     *
     * Since: cosmos-sdk 0.43
     */
    tx_bytes?: string;
}
export interface SimulateRequestAminoMsg {
    type: "cosmos-sdk/SimulateRequest";
    value: SimulateRequestAmino;
}
/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 */
export interface SimulateRequestSDKType {
    /** @deprecated */
    tx?: TxSDKType | undefined;
    tx_bytes: Uint8Array;
}
/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 */
export interface SimulateResponse {
    /** gas_info is the information about gas used in the simulation. */
    gasInfo?: GasInfo | undefined;
    /** result is the result of the simulation. */
    result?: Result | undefined;
}
export interface SimulateResponseProtoMsg {
    typeUrl: "/cosmos.tx.v1beta1.SimulateResponse";
    value: Uint8Array;
}
/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 */
export interface SimulateResponseAmino {
    /** gas_info is the information about gas used in the simulation. */
    gas_info?: GasInfoAmino | undefined;
    /** result is the result of the simulation. */
    result?: ResultAmino | undefined;
}
export interface SimulateResponseAminoMsg {
    type: "cosmos-sdk/SimulateResponse";
    value: SimulateResponseAmino;
}
/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 */
export interface SimulateResponseSDKType {
    gas_info?: GasInfoSDKType | undefined;
    result?: ResultSDKType | undefined;
}
/**
 * GetTxRequest is the request type for the Service.GetTx
 * RPC method.
 */
export interface GetTxRequest {
    /** hash is the tx hash to query, encoded as a hex string. */
    hash: string;
}
export interface GetTxRequestProtoMsg {
    typeUrl: "/cosmos.tx.v1beta1.GetTxRequest";
    value: Uint8Array;
}
/**
 * GetTxRequest is the request type for the Service.GetTx
 * RPC method.
 */
export interface GetTxRequestAmino {
    /** hash is the tx hash to query, encoded as a hex string. */
    hash?: string;
}
export interface GetTxRequestAminoMsg {
    type: "cosmos-sdk/GetTxRequest";
    value: GetTxRequestAmino;
}
/**
 * GetTxRequest is the request type for the Service.GetTx
 * RPC method.
 */
export interface GetTxRequestSDKType {
    hash: string;
}
/** GetTxResponse is the response type for the Service.GetTx method. */
export interface GetTxResponse {
    /** tx is the queried transaction. */
    tx?: Tx | undefined;
    /** tx_response is the queried TxResponses. */
    txResponse?: TxResponse | undefined;
}
export interface GetTxResponseProtoMsg {
    typeUrl: "/cosmos.tx.v1beta1.GetTxResponse";
    value: Uint8Array;
}
/** GetTxResponse is the response type for the Service.GetTx method. */
export interface GetTxResponseAmino {
    /** tx is the queried transaction. */
    tx?: TxAmino | undefined;
    /** tx_response is the queried TxResponses. */
    tx_response?: TxResponseAmino | undefined;
}
export interface GetTxResponseAminoMsg {
    type: "cosmos-sdk/GetTxResponse";
    value: GetTxResponseAmino;
}
/** GetTxResponse is the response type for the Service.GetTx method. */
export interface GetTxResponseSDKType {
    tx?: TxSDKType | undefined;
    tx_response?: TxResponseSDKType | undefined;
}
/**
 * GetBlockWithTxsRequest is the request type for the Service.GetBlockWithTxs
 * RPC method.
 *
 * Since: cosmos-sdk 0.45.2
 */
export interface GetBlockWithTxsRequest {
    /** height is the height of the block to query. */
    height: bigint;
    /** pagination defines a pagination for the request. */
    pagination?: PageRequest | undefined;
}
export interface GetBlockWithTxsRequestProtoMsg {
    typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsRequest";
    value: Uint8Array;
}
/**
 * GetBlockWithTxsRequest is the request type for the Service.GetBlockWithTxs
 * RPC method.
 *
 * Since: cosmos-sdk 0.45.2
 */
export interface GetBlockWithTxsRequestAmino {
    /** height is the height of the block to query. */
    height?: string;
    /** pagination defines a pagination for the request. */
    pagination?: PageRequestAmino | undefined;
}
export interface GetBlockWithTxsRequestAminoMsg {
    type: "cosmos-sdk/GetBlockWithTxsRequest";
    value: GetBlockWithTxsRequestAmino;
}
/**
 * GetBlockWithTxsRequest is the request type for the Service.GetBlockWithTxs
 * RPC method.
 *
 * Since: cosmos-sdk 0.45.2
 */
export interface GetBlockWithTxsRequestSDKType {
    height: bigint;
    pagination?: PageRequestSDKType | undefined;
}
/**
 * GetBlockWithTxsResponse is the response type for the Service.GetBlockWithTxs method.
 *
 * Since: cosmos-sdk 0.45.2
 */
export interface GetBlockWithTxsResponse {
    /** txs are the transactions in the block. */
    txs: Tx[];
    blockId?: BlockID | undefined;
    block?: Block | undefined;
    /** pagination defines a pagination for the response. */
    pagination?: PageResponse | undefined;
}
export interface GetBlockWithTxsResponseProtoMsg {
    typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsResponse";
    value: Uint8Array;
}
/**
 * GetBlockWithTxsResponse is the response type for the Service.GetBlockWithTxs method.
 *
 * Since: cosmos-sdk 0.45.2
 */
export interface GetBlockWithTxsResponseAmino {
    /** txs are the transactions in the block. */
    txs?: TxAmino[];
    block_id?: BlockIDAmino | undefined;
    block?: BlockAmino | undefined;
    /** pagination defines a pagination for the response. */
    pagination?: PageResponseAmino | undefined;
}
export interface GetBlockWithTxsResponseAminoMsg {
    type: "cosmos-sdk/GetBlockWithTxsResponse";
    value: GetBlockWithTxsResponseAmino;
}
/**
 * GetBlockWithTxsResponse is the response type for the Service.GetBlockWithTxs method.
 *
 * Since: cosmos-sdk 0.45.2
 */
export interface GetBlockWithTxsResponseSDKType {
    txs: TxSDKType[];
    block_id?: BlockIDSDKType | undefined;
    block?: BlockSDKType | undefined;
    pagination?: PageResponseSDKType | undefined;
}
export declare const GetTxsEventRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is GetTxsEventRequest;
    isSDK(o: any): o is GetTxsEventRequestSDKType;
    isAmino(o: any): o is GetTxsEventRequestAmino;
    encode(message: GetTxsEventRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetTxsEventRequest;
    fromJSON(object: any): GetTxsEventRequest;
    toJSON(message: GetTxsEventRequest): unknown;
    fromPartial(object: DeepPartial<GetTxsEventRequest>): GetTxsEventRequest;
    fromSDK(object: GetTxsEventRequestSDKType): GetTxsEventRequest;
    toSDK(message: GetTxsEventRequest): GetTxsEventRequestSDKType;
    fromAmino(object: GetTxsEventRequestAmino): GetTxsEventRequest;
    toAmino(message: GetTxsEventRequest): GetTxsEventRequestAmino;
    fromAminoMsg(object: GetTxsEventRequestAminoMsg): GetTxsEventRequest;
    toAminoMsg(message: GetTxsEventRequest): GetTxsEventRequestAminoMsg;
    fromProtoMsg(message: GetTxsEventRequestProtoMsg): GetTxsEventRequest;
    toProto(message: GetTxsEventRequest): Uint8Array;
    toProtoMsg(message: GetTxsEventRequest): GetTxsEventRequestProtoMsg;
};
export declare const GetTxsEventResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is GetTxsEventResponse;
    isSDK(o: any): o is GetTxsEventResponseSDKType;
    isAmino(o: any): o is GetTxsEventResponseAmino;
    encode(message: GetTxsEventResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetTxsEventResponse;
    fromJSON(object: any): GetTxsEventResponse;
    toJSON(message: GetTxsEventResponse): unknown;
    fromPartial(object: DeepPartial<GetTxsEventResponse>): GetTxsEventResponse;
    fromSDK(object: GetTxsEventResponseSDKType): GetTxsEventResponse;
    toSDK(message: GetTxsEventResponse): GetTxsEventResponseSDKType;
    fromAmino(object: GetTxsEventResponseAmino): GetTxsEventResponse;
    toAmino(message: GetTxsEventResponse): GetTxsEventResponseAmino;
    fromAminoMsg(object: GetTxsEventResponseAminoMsg): GetTxsEventResponse;
    toAminoMsg(message: GetTxsEventResponse): GetTxsEventResponseAminoMsg;
    fromProtoMsg(message: GetTxsEventResponseProtoMsg): GetTxsEventResponse;
    toProto(message: GetTxsEventResponse): Uint8Array;
    toProtoMsg(message: GetTxsEventResponse): GetTxsEventResponseProtoMsg;
};
export declare const BroadcastTxRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is BroadcastTxRequest;
    isSDK(o: any): o is BroadcastTxRequestSDKType;
    isAmino(o: any): o is BroadcastTxRequestAmino;
    encode(message: BroadcastTxRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BroadcastTxRequest;
    fromJSON(object: any): BroadcastTxRequest;
    toJSON(message: BroadcastTxRequest): unknown;
    fromPartial(object: DeepPartial<BroadcastTxRequest>): BroadcastTxRequest;
    fromSDK(object: BroadcastTxRequestSDKType): BroadcastTxRequest;
    toSDK(message: BroadcastTxRequest): BroadcastTxRequestSDKType;
    fromAmino(object: BroadcastTxRequestAmino): BroadcastTxRequest;
    toAmino(message: BroadcastTxRequest): BroadcastTxRequestAmino;
    fromAminoMsg(object: BroadcastTxRequestAminoMsg): BroadcastTxRequest;
    toAminoMsg(message: BroadcastTxRequest): BroadcastTxRequestAminoMsg;
    fromProtoMsg(message: BroadcastTxRequestProtoMsg): BroadcastTxRequest;
    toProto(message: BroadcastTxRequest): Uint8Array;
    toProtoMsg(message: BroadcastTxRequest): BroadcastTxRequestProtoMsg;
};
export declare const BroadcastTxResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is BroadcastTxResponse;
    isSDK(o: any): o is BroadcastTxResponseSDKType;
    isAmino(o: any): o is BroadcastTxResponseAmino;
    encode(message: BroadcastTxResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BroadcastTxResponse;
    fromJSON(object: any): BroadcastTxResponse;
    toJSON(message: BroadcastTxResponse): unknown;
    fromPartial(object: DeepPartial<BroadcastTxResponse>): BroadcastTxResponse;
    fromSDK(object: BroadcastTxResponseSDKType): BroadcastTxResponse;
    toSDK(message: BroadcastTxResponse): BroadcastTxResponseSDKType;
    fromAmino(object: BroadcastTxResponseAmino): BroadcastTxResponse;
    toAmino(message: BroadcastTxResponse): BroadcastTxResponseAmino;
    fromAminoMsg(object: BroadcastTxResponseAminoMsg): BroadcastTxResponse;
    toAminoMsg(message: BroadcastTxResponse): BroadcastTxResponseAminoMsg;
    fromProtoMsg(message: BroadcastTxResponseProtoMsg): BroadcastTxResponse;
    toProto(message: BroadcastTxResponse): Uint8Array;
    toProtoMsg(message: BroadcastTxResponse): BroadcastTxResponseProtoMsg;
};
export declare const SimulateRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is SimulateRequest;
    isSDK(o: any): o is SimulateRequestSDKType;
    isAmino(o: any): o is SimulateRequestAmino;
    encode(message: SimulateRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SimulateRequest;
    fromJSON(object: any): SimulateRequest;
    toJSON(message: SimulateRequest): unknown;
    fromPartial(object: DeepPartial<SimulateRequest>): SimulateRequest;
    fromSDK(object: SimulateRequestSDKType): SimulateRequest;
    toSDK(message: SimulateRequest): SimulateRequestSDKType;
    fromAmino(object: SimulateRequestAmino): SimulateRequest;
    toAmino(message: SimulateRequest): SimulateRequestAmino;
    fromAminoMsg(object: SimulateRequestAminoMsg): SimulateRequest;
    toAminoMsg(message: SimulateRequest): SimulateRequestAminoMsg;
    fromProtoMsg(message: SimulateRequestProtoMsg): SimulateRequest;
    toProto(message: SimulateRequest): Uint8Array;
    toProtoMsg(message: SimulateRequest): SimulateRequestProtoMsg;
};
export declare const SimulateResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is SimulateResponse;
    isSDK(o: any): o is SimulateResponseSDKType;
    isAmino(o: any): o is SimulateResponseAmino;
    encode(message: SimulateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SimulateResponse;
    fromJSON(object: any): SimulateResponse;
    toJSON(message: SimulateResponse): unknown;
    fromPartial(object: DeepPartial<SimulateResponse>): SimulateResponse;
    fromSDK(object: SimulateResponseSDKType): SimulateResponse;
    toSDK(message: SimulateResponse): SimulateResponseSDKType;
    fromAmino(object: SimulateResponseAmino): SimulateResponse;
    toAmino(message: SimulateResponse): SimulateResponseAmino;
    fromAminoMsg(object: SimulateResponseAminoMsg): SimulateResponse;
    toAminoMsg(message: SimulateResponse): SimulateResponseAminoMsg;
    fromProtoMsg(message: SimulateResponseProtoMsg): SimulateResponse;
    toProto(message: SimulateResponse): Uint8Array;
    toProtoMsg(message: SimulateResponse): SimulateResponseProtoMsg;
};
export declare const GetTxRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is GetTxRequest;
    isSDK(o: any): o is GetTxRequestSDKType;
    isAmino(o: any): o is GetTxRequestAmino;
    encode(message: GetTxRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetTxRequest;
    fromJSON(object: any): GetTxRequest;
    toJSON(message: GetTxRequest): unknown;
    fromPartial(object: DeepPartial<GetTxRequest>): GetTxRequest;
    fromSDK(object: GetTxRequestSDKType): GetTxRequest;
    toSDK(message: GetTxRequest): GetTxRequestSDKType;
    fromAmino(object: GetTxRequestAmino): GetTxRequest;
    toAmino(message: GetTxRequest): GetTxRequestAmino;
    fromAminoMsg(object: GetTxRequestAminoMsg): GetTxRequest;
    toAminoMsg(message: GetTxRequest): GetTxRequestAminoMsg;
    fromProtoMsg(message: GetTxRequestProtoMsg): GetTxRequest;
    toProto(message: GetTxRequest): Uint8Array;
    toProtoMsg(message: GetTxRequest): GetTxRequestProtoMsg;
};
export declare const GetTxResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is GetTxResponse;
    isSDK(o: any): o is GetTxResponseSDKType;
    isAmino(o: any): o is GetTxResponseAmino;
    encode(message: GetTxResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetTxResponse;
    fromJSON(object: any): GetTxResponse;
    toJSON(message: GetTxResponse): unknown;
    fromPartial(object: DeepPartial<GetTxResponse>): GetTxResponse;
    fromSDK(object: GetTxResponseSDKType): GetTxResponse;
    toSDK(message: GetTxResponse): GetTxResponseSDKType;
    fromAmino(object: GetTxResponseAmino): GetTxResponse;
    toAmino(message: GetTxResponse): GetTxResponseAmino;
    fromAminoMsg(object: GetTxResponseAminoMsg): GetTxResponse;
    toAminoMsg(message: GetTxResponse): GetTxResponseAminoMsg;
    fromProtoMsg(message: GetTxResponseProtoMsg): GetTxResponse;
    toProto(message: GetTxResponse): Uint8Array;
    toProtoMsg(message: GetTxResponse): GetTxResponseProtoMsg;
};
export declare const GetBlockWithTxsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is GetBlockWithTxsRequest;
    isSDK(o: any): o is GetBlockWithTxsRequestSDKType;
    isAmino(o: any): o is GetBlockWithTxsRequestAmino;
    encode(message: GetBlockWithTxsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetBlockWithTxsRequest;
    fromJSON(object: any): GetBlockWithTxsRequest;
    toJSON(message: GetBlockWithTxsRequest): unknown;
    fromPartial(object: DeepPartial<GetBlockWithTxsRequest>): GetBlockWithTxsRequest;
    fromSDK(object: GetBlockWithTxsRequestSDKType): GetBlockWithTxsRequest;
    toSDK(message: GetBlockWithTxsRequest): GetBlockWithTxsRequestSDKType;
    fromAmino(object: GetBlockWithTxsRequestAmino): GetBlockWithTxsRequest;
    toAmino(message: GetBlockWithTxsRequest): GetBlockWithTxsRequestAmino;
    fromAminoMsg(object: GetBlockWithTxsRequestAminoMsg): GetBlockWithTxsRequest;
    toAminoMsg(message: GetBlockWithTxsRequest): GetBlockWithTxsRequestAminoMsg;
    fromProtoMsg(message: GetBlockWithTxsRequestProtoMsg): GetBlockWithTxsRequest;
    toProto(message: GetBlockWithTxsRequest): Uint8Array;
    toProtoMsg(message: GetBlockWithTxsRequest): GetBlockWithTxsRequestProtoMsg;
};
export declare const GetBlockWithTxsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is GetBlockWithTxsResponse;
    isSDK(o: any): o is GetBlockWithTxsResponseSDKType;
    isAmino(o: any): o is GetBlockWithTxsResponseAmino;
    encode(message: GetBlockWithTxsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetBlockWithTxsResponse;
    fromJSON(object: any): GetBlockWithTxsResponse;
    toJSON(message: GetBlockWithTxsResponse): unknown;
    fromPartial(object: DeepPartial<GetBlockWithTxsResponse>): GetBlockWithTxsResponse;
    fromSDK(object: GetBlockWithTxsResponseSDKType): GetBlockWithTxsResponse;
    toSDK(message: GetBlockWithTxsResponse): GetBlockWithTxsResponseSDKType;
    fromAmino(object: GetBlockWithTxsResponseAmino): GetBlockWithTxsResponse;
    toAmino(message: GetBlockWithTxsResponse): GetBlockWithTxsResponseAmino;
    fromAminoMsg(object: GetBlockWithTxsResponseAminoMsg): GetBlockWithTxsResponse;
    toAminoMsg(message: GetBlockWithTxsResponse): GetBlockWithTxsResponseAminoMsg;
    fromProtoMsg(message: GetBlockWithTxsResponseProtoMsg): GetBlockWithTxsResponse;
    toProto(message: GetBlockWithTxsResponse): Uint8Array;
    toProtoMsg(message: GetBlockWithTxsResponse): GetBlockWithTxsResponseProtoMsg;
};
