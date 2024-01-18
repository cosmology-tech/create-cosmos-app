import { Tx, TxAmino, TxSDKType } from "./tx";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { TxResponse, TxResponseAmino, TxResponseSDKType, GasInfo, GasInfoAmino, GasInfoSDKType, Result, ResultAmino, ResultSDKType } from "../../base/abci/v1beta1/abci";
import { BlockID, BlockIDAmino, BlockIDSDKType } from "../../../tendermint/types/types";
import { Block, BlockAmino, BlockSDKType } from "../../../tendermint/types/block";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.tx.v1beta1";
/** OrderBy defines the sorting order */
export enum OrderBy {
  /** ORDER_BY_UNSPECIFIED - ORDER_BY_UNSPECIFIED specifies an unknown sorting order. OrderBy defaults to ASC in this case. */
  ORDER_BY_UNSPECIFIED = 0,
  /** ORDER_BY_ASC - ORDER_BY_ASC defines ascending order */
  ORDER_BY_ASC = 1,
  /** ORDER_BY_DESC - ORDER_BY_DESC defines descending order */
  ORDER_BY_DESC = 2,
  UNRECOGNIZED = -1,
}
export const OrderBySDKType = OrderBy;
export const OrderByAmino = OrderBy;
export function orderByFromJSON(object: any): OrderBy {
  switch (object) {
    case 0:
    case "ORDER_BY_UNSPECIFIED":
      return OrderBy.ORDER_BY_UNSPECIFIED;
    case 1:
    case "ORDER_BY_ASC":
      return OrderBy.ORDER_BY_ASC;
    case 2:
    case "ORDER_BY_DESC":
      return OrderBy.ORDER_BY_DESC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderBy.UNRECOGNIZED;
  }
}
export function orderByToJSON(object: OrderBy): string {
  switch (object) {
    case OrderBy.ORDER_BY_UNSPECIFIED:
      return "ORDER_BY_UNSPECIFIED";
    case OrderBy.ORDER_BY_ASC:
      return "ORDER_BY_ASC";
    case OrderBy.ORDER_BY_DESC:
      return "ORDER_BY_DESC";
    case OrderBy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC method. */
export enum BroadcastMode {
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
  UNRECOGNIZED = -1,
}
export const BroadcastModeSDKType = BroadcastMode;
export const BroadcastModeAmino = BroadcastMode;
export function broadcastModeFromJSON(object: any): BroadcastMode {
  switch (object) {
    case 0:
    case "BROADCAST_MODE_UNSPECIFIED":
      return BroadcastMode.BROADCAST_MODE_UNSPECIFIED;
    case 1:
    case "BROADCAST_MODE_BLOCK":
      return BroadcastMode.BROADCAST_MODE_BLOCK;
    case 2:
    case "BROADCAST_MODE_SYNC":
      return BroadcastMode.BROADCAST_MODE_SYNC;
    case 3:
    case "BROADCAST_MODE_ASYNC":
      return BroadcastMode.BROADCAST_MODE_ASYNC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BroadcastMode.UNRECOGNIZED;
  }
}
export function broadcastModeToJSON(object: BroadcastMode): string {
  switch (object) {
    case BroadcastMode.BROADCAST_MODE_UNSPECIFIED:
      return "BROADCAST_MODE_UNSPECIFIED";
    case BroadcastMode.BROADCAST_MODE_BLOCK:
      return "BROADCAST_MODE_BLOCK";
    case BroadcastMode.BROADCAST_MODE_SYNC:
      return "BROADCAST_MODE_SYNC";
    case BroadcastMode.BROADCAST_MODE_ASYNC:
      return "BROADCAST_MODE_ASYNC";
    case BroadcastMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventRequest {
  /** events is the list of transaction event type. */
  events: string[];
  /** pagination defines a pagination for the request. */
  pagination?: PageRequest;
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
  pagination?: PageRequestAmino;
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
  pagination?: PageRequestSDKType;
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
  pagination?: PageResponse;
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
  pagination?: PageResponseAmino;
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
  pagination?: PageResponseSDKType;
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
  txResponse?: TxResponse;
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
  tx_response?: TxResponseAmino;
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
  tx_response?: TxResponseSDKType;
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
  tx?: Tx;
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
  tx?: TxAmino;
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
  tx?: TxSDKType;
  tx_bytes: Uint8Array;
}
/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 */
export interface SimulateResponse {
  /** gas_info is the information about gas used in the simulation. */
  gasInfo?: GasInfo;
  /** result is the result of the simulation. */
  result?: Result;
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
  gas_info?: GasInfoAmino;
  /** result is the result of the simulation. */
  result?: ResultAmino;
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
  gas_info?: GasInfoSDKType;
  result?: ResultSDKType;
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
  tx?: Tx;
  /** tx_response is the queried TxResponses. */
  txResponse?: TxResponse;
}
export interface GetTxResponseProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.GetTxResponse";
  value: Uint8Array;
}
/** GetTxResponse is the response type for the Service.GetTx method. */
export interface GetTxResponseAmino {
  /** tx is the queried transaction. */
  tx?: TxAmino;
  /** tx_response is the queried TxResponses. */
  tx_response?: TxResponseAmino;
}
export interface GetTxResponseAminoMsg {
  type: "cosmos-sdk/GetTxResponse";
  value: GetTxResponseAmino;
}
/** GetTxResponse is the response type for the Service.GetTx method. */
export interface GetTxResponseSDKType {
  tx?: TxSDKType;
  tx_response?: TxResponseSDKType;
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
  pagination?: PageRequest;
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
  pagination?: PageRequestAmino;
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
  pagination?: PageRequestSDKType;
}
/**
 * GetBlockWithTxsResponse is the response type for the Service.GetBlockWithTxs method.
 * 
 * Since: cosmos-sdk 0.45.2
 */
export interface GetBlockWithTxsResponse {
  /** txs are the transactions in the block. */
  txs: Tx[];
  blockId?: BlockID;
  block?: Block;
  /** pagination defines a pagination for the response. */
  pagination?: PageResponse;
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
  block_id?: BlockIDAmino;
  block?: BlockAmino;
  /** pagination defines a pagination for the response. */
  pagination?: PageResponseAmino;
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
  block_id?: BlockIDSDKType;
  block?: BlockSDKType;
  pagination?: PageResponseSDKType;
}
function createBaseGetTxsEventRequest(): GetTxsEventRequest {
  return {
    events: [],
    pagination: undefined,
    orderBy: 0
  };
}
export const GetTxsEventRequest = {
  typeUrl: "/cosmos.tx.v1beta1.GetTxsEventRequest",
  aminoType: "cosmos-sdk/GetTxsEventRequest",
  is(o: any): o is GetTxsEventRequest {
    return o && (o.$typeUrl === GetTxsEventRequest.typeUrl || Array.isArray(o.events) && (!o.events.length || typeof o.events[0] === "string") && isSet(o.orderBy));
  },
  isSDK(o: any): o is GetTxsEventRequestSDKType {
    return o && (o.$typeUrl === GetTxsEventRequest.typeUrl || Array.isArray(o.events) && (!o.events.length || typeof o.events[0] === "string") && isSet(o.order_by));
  },
  isAmino(o: any): o is GetTxsEventRequestAmino {
    return o && (o.$typeUrl === GetTxsEventRequest.typeUrl || Array.isArray(o.events) && (!o.events.length || typeof o.events[0] === "string") && isSet(o.order_by));
  },
  encode(message: GetTxsEventRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.events) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.orderBy !== 0) {
      writer.uint32(24).int32(message.orderBy);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetTxsEventRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxsEventRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(reader.string());
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 3:
          message.orderBy = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetTxsEventRequest {
    const obj = createBaseGetTxsEventRequest();
    if (Array.isArray(object?.events)) obj.events = object.events.map((e: any) => String(e));
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    if (isSet(object.orderBy)) obj.orderBy = orderByFromJSON(object.orderBy);
    return obj;
  },
  toJSON(message: GetTxsEventRequest): unknown {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map(e => e);
    } else {
      obj.events = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.orderBy !== undefined && (obj.orderBy = orderByToJSON(message.orderBy));
    return obj;
  },
  fromPartial(object: DeepPartial<GetTxsEventRequest>): GetTxsEventRequest {
    const message = createBaseGetTxsEventRequest();
    message.events = object.events?.map(e => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    message.orderBy = object.orderBy ?? 0;
    return message;
  },
  fromSDK(object: GetTxsEventRequestSDKType): GetTxsEventRequest {
    return {
      events: Array.isArray(object?.events) ? object.events.map((e: any) => e) : [],
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined,
      orderBy: isSet(object.order_by) ? orderByFromJSON(object.order_by) : -1
    };
  },
  toSDK(message: GetTxsEventRequest): GetTxsEventRequestSDKType {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map(e => e);
    } else {
      obj.events = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    message.orderBy !== undefined && (obj.order_by = orderByToJSON(message.orderBy));
    return obj;
  },
  fromAmino(object: GetTxsEventRequestAmino): GetTxsEventRequest {
    const message = createBaseGetTxsEventRequest();
    message.events = object.events?.map(e => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.order_by !== undefined && object.order_by !== null) {
      message.orderBy = orderByFromJSON(object.order_by);
    }
    return message;
  },
  toAmino(message: GetTxsEventRequest): GetTxsEventRequestAmino {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map(e => e);
    } else {
      obj.events = [];
    }
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.order_by = orderByToJSON(message.orderBy);
    return obj;
  },
  fromAminoMsg(object: GetTxsEventRequestAminoMsg): GetTxsEventRequest {
    return GetTxsEventRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetTxsEventRequest): GetTxsEventRequestAminoMsg {
    return {
      type: "cosmos-sdk/GetTxsEventRequest",
      value: GetTxsEventRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GetTxsEventRequestProtoMsg): GetTxsEventRequest {
    return GetTxsEventRequest.decode(message.value);
  },
  toProto(message: GetTxsEventRequest): Uint8Array {
    return GetTxsEventRequest.encode(message).finish();
  },
  toProtoMsg(message: GetTxsEventRequest): GetTxsEventRequestProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.GetTxsEventRequest",
      value: GetTxsEventRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetTxsEventRequest.typeUrl, GetTxsEventRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(GetTxsEventRequest.aminoType, GetTxsEventRequest.typeUrl);
function createBaseGetTxsEventResponse(): GetTxsEventResponse {
  return {
    txs: [],
    txResponses: [],
    pagination: undefined
  };
}
export const GetTxsEventResponse = {
  typeUrl: "/cosmos.tx.v1beta1.GetTxsEventResponse",
  aminoType: "cosmos-sdk/GetTxsEventResponse",
  is(o: any): o is GetTxsEventResponse {
    return o && (o.$typeUrl === GetTxsEventResponse.typeUrl || Array.isArray(o.txs) && (!o.txs.length || Tx.is(o.txs[0])) && Array.isArray(o.txResponses) && (!o.txResponses.length || TxResponse.is(o.txResponses[0])));
  },
  isSDK(o: any): o is GetTxsEventResponseSDKType {
    return o && (o.$typeUrl === GetTxsEventResponse.typeUrl || Array.isArray(o.txs) && (!o.txs.length || Tx.isSDK(o.txs[0])) && Array.isArray(o.tx_responses) && (!o.tx_responses.length || TxResponse.isSDK(o.tx_responses[0])));
  },
  isAmino(o: any): o is GetTxsEventResponseAmino {
    return o && (o.$typeUrl === GetTxsEventResponse.typeUrl || Array.isArray(o.txs) && (!o.txs.length || Tx.isAmino(o.txs[0])) && Array.isArray(o.tx_responses) && (!o.tx_responses.length || TxResponse.isAmino(o.tx_responses[0])));
  },
  encode(message: GetTxsEventResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.txs) {
      Tx.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.txResponses) {
      TxResponse.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetTxsEventResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxsEventResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(Tx.decode(reader, reader.uint32()));
          break;
        case 2:
          message.txResponses.push(TxResponse.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetTxsEventResponse {
    const obj = createBaseGetTxsEventResponse();
    if (Array.isArray(object?.txs)) obj.txs = object.txs.map((e: any) => Tx.fromJSON(e));
    if (Array.isArray(object?.txResponses)) obj.txResponses = object.txResponses.map((e: any) => TxResponse.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: GetTxsEventResponse): unknown {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map(e => e ? Tx.toJSON(e) : undefined);
    } else {
      obj.txs = [];
    }
    if (message.txResponses) {
      obj.txResponses = message.txResponses.map(e => e ? TxResponse.toJSON(e) : undefined);
    } else {
      obj.txResponses = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GetTxsEventResponse>): GetTxsEventResponse {
    const message = createBaseGetTxsEventResponse();
    message.txs = object.txs?.map(e => Tx.fromPartial(e)) || [];
    message.txResponses = object.txResponses?.map(e => TxResponse.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: GetTxsEventResponseSDKType): GetTxsEventResponse {
    return {
      txs: Array.isArray(object?.txs) ? object.txs.map((e: any) => Tx.fromSDK(e)) : [],
      txResponses: Array.isArray(object?.tx_responses) ? object.tx_responses.map((e: any) => TxResponse.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: GetTxsEventResponse): GetTxsEventResponseSDKType {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map(e => e ? Tx.toSDK(e) : undefined);
    } else {
      obj.txs = [];
    }
    if (message.txResponses) {
      obj.tx_responses = message.txResponses.map(e => e ? TxResponse.toSDK(e) : undefined);
    } else {
      obj.tx_responses = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: GetTxsEventResponseAmino): GetTxsEventResponse {
    const message = createBaseGetTxsEventResponse();
    message.txs = object.txs?.map(e => Tx.fromAmino(e)) || [];
    message.txResponses = object.tx_responses?.map(e => TxResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: GetTxsEventResponse): GetTxsEventResponseAmino {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map(e => e ? Tx.toAmino(e) : undefined);
    } else {
      obj.txs = [];
    }
    if (message.txResponses) {
      obj.tx_responses = message.txResponses.map(e => e ? TxResponse.toAmino(e) : undefined);
    } else {
      obj.tx_responses = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetTxsEventResponseAminoMsg): GetTxsEventResponse {
    return GetTxsEventResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetTxsEventResponse): GetTxsEventResponseAminoMsg {
    return {
      type: "cosmos-sdk/GetTxsEventResponse",
      value: GetTxsEventResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GetTxsEventResponseProtoMsg): GetTxsEventResponse {
    return GetTxsEventResponse.decode(message.value);
  },
  toProto(message: GetTxsEventResponse): Uint8Array {
    return GetTxsEventResponse.encode(message).finish();
  },
  toProtoMsg(message: GetTxsEventResponse): GetTxsEventResponseProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.GetTxsEventResponse",
      value: GetTxsEventResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetTxsEventResponse.typeUrl, GetTxsEventResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(GetTxsEventResponse.aminoType, GetTxsEventResponse.typeUrl);
function createBaseBroadcastTxRequest(): BroadcastTxRequest {
  return {
    txBytes: new Uint8Array(),
    mode: 0
  };
}
export const BroadcastTxRequest = {
  typeUrl: "/cosmos.tx.v1beta1.BroadcastTxRequest",
  aminoType: "cosmos-sdk/BroadcastTxRequest",
  is(o: any): o is BroadcastTxRequest {
    return o && (o.$typeUrl === BroadcastTxRequest.typeUrl || (o.txBytes instanceof Uint8Array || typeof o.txBytes === "string") && isSet(o.mode));
  },
  isSDK(o: any): o is BroadcastTxRequestSDKType {
    return o && (o.$typeUrl === BroadcastTxRequest.typeUrl || (o.tx_bytes instanceof Uint8Array || typeof o.tx_bytes === "string") && isSet(o.mode));
  },
  isAmino(o: any): o is BroadcastTxRequestAmino {
    return o && (o.$typeUrl === BroadcastTxRequest.typeUrl || (o.tx_bytes instanceof Uint8Array || typeof o.tx_bytes === "string") && isSet(o.mode));
  },
  encode(message: BroadcastTxRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txBytes.length !== 0) {
      writer.uint32(10).bytes(message.txBytes);
    }
    if (message.mode !== 0) {
      writer.uint32(16).int32(message.mode);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BroadcastTxRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBroadcastTxRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txBytes = reader.bytes();
          break;
        case 2:
          message.mode = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BroadcastTxRequest {
    const obj = createBaseBroadcastTxRequest();
    if (isSet(object.txBytes)) obj.txBytes = bytesFromBase64(object.txBytes);
    if (isSet(object.mode)) obj.mode = broadcastModeFromJSON(object.mode);
    return obj;
  },
  toJSON(message: BroadcastTxRequest): unknown {
    const obj: any = {};
    message.txBytes !== undefined && (obj.txBytes = base64FromBytes(message.txBytes !== undefined ? message.txBytes : new Uint8Array()));
    message.mode !== undefined && (obj.mode = broadcastModeToJSON(message.mode));
    return obj;
  },
  fromPartial(object: DeepPartial<BroadcastTxRequest>): BroadcastTxRequest {
    const message = createBaseBroadcastTxRequest();
    message.txBytes = object.txBytes ?? new Uint8Array();
    message.mode = object.mode ?? 0;
    return message;
  },
  fromSDK(object: BroadcastTxRequestSDKType): BroadcastTxRequest {
    return {
      txBytes: object?.tx_bytes,
      mode: isSet(object.mode) ? broadcastModeFromJSON(object.mode) : -1
    };
  },
  toSDK(message: BroadcastTxRequest): BroadcastTxRequestSDKType {
    const obj: any = {};
    obj.tx_bytes = message.txBytes;
    message.mode !== undefined && (obj.mode = broadcastModeToJSON(message.mode));
    return obj;
  },
  fromAmino(object: BroadcastTxRequestAmino): BroadcastTxRequest {
    const message = createBaseBroadcastTxRequest();
    if (object.tx_bytes !== undefined && object.tx_bytes !== null) {
      message.txBytes = bytesFromBase64(object.tx_bytes);
    }
    if (object.mode !== undefined && object.mode !== null) {
      message.mode = broadcastModeFromJSON(object.mode);
    }
    return message;
  },
  toAmino(message: BroadcastTxRequest): BroadcastTxRequestAmino {
    const obj: any = {};
    obj.tx_bytes = message.txBytes ? base64FromBytes(message.txBytes) : undefined;
    obj.mode = broadcastModeToJSON(message.mode);
    return obj;
  },
  fromAminoMsg(object: BroadcastTxRequestAminoMsg): BroadcastTxRequest {
    return BroadcastTxRequest.fromAmino(object.value);
  },
  toAminoMsg(message: BroadcastTxRequest): BroadcastTxRequestAminoMsg {
    return {
      type: "cosmos-sdk/BroadcastTxRequest",
      value: BroadcastTxRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: BroadcastTxRequestProtoMsg): BroadcastTxRequest {
    return BroadcastTxRequest.decode(message.value);
  },
  toProto(message: BroadcastTxRequest): Uint8Array {
    return BroadcastTxRequest.encode(message).finish();
  },
  toProtoMsg(message: BroadcastTxRequest): BroadcastTxRequestProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.BroadcastTxRequest",
      value: BroadcastTxRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BroadcastTxRequest.typeUrl, BroadcastTxRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(BroadcastTxRequest.aminoType, BroadcastTxRequest.typeUrl);
function createBaseBroadcastTxResponse(): BroadcastTxResponse {
  return {
    txResponse: undefined
  };
}
export const BroadcastTxResponse = {
  typeUrl: "/cosmos.tx.v1beta1.BroadcastTxResponse",
  aminoType: "cosmos-sdk/BroadcastTxResponse",
  is(o: any): o is BroadcastTxResponse {
    return o && o.$typeUrl === BroadcastTxResponse.typeUrl;
  },
  isSDK(o: any): o is BroadcastTxResponseSDKType {
    return o && o.$typeUrl === BroadcastTxResponse.typeUrl;
  },
  isAmino(o: any): o is BroadcastTxResponseAmino {
    return o && o.$typeUrl === BroadcastTxResponse.typeUrl;
  },
  encode(message: BroadcastTxResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txResponse !== undefined) {
      TxResponse.encode(message.txResponse, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BroadcastTxResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBroadcastTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txResponse = TxResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BroadcastTxResponse {
    const obj = createBaseBroadcastTxResponse();
    if (isSet(object.txResponse)) obj.txResponse = TxResponse.fromJSON(object.txResponse);
    return obj;
  },
  toJSON(message: BroadcastTxResponse): unknown {
    const obj: any = {};
    message.txResponse !== undefined && (obj.txResponse = message.txResponse ? TxResponse.toJSON(message.txResponse) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<BroadcastTxResponse>): BroadcastTxResponse {
    const message = createBaseBroadcastTxResponse();
    if (object.txResponse !== undefined && object.txResponse !== null) {
      message.txResponse = TxResponse.fromPartial(object.txResponse);
    }
    return message;
  },
  fromSDK(object: BroadcastTxResponseSDKType): BroadcastTxResponse {
    return {
      txResponse: object.tx_response ? TxResponse.fromSDK(object.tx_response) : undefined
    };
  },
  toSDK(message: BroadcastTxResponse): BroadcastTxResponseSDKType {
    const obj: any = {};
    message.txResponse !== undefined && (obj.tx_response = message.txResponse ? TxResponse.toSDK(message.txResponse) : undefined);
    return obj;
  },
  fromAmino(object: BroadcastTxResponseAmino): BroadcastTxResponse {
    const message = createBaseBroadcastTxResponse();
    if (object.tx_response !== undefined && object.tx_response !== null) {
      message.txResponse = TxResponse.fromAmino(object.tx_response);
    }
    return message;
  },
  toAmino(message: BroadcastTxResponse): BroadcastTxResponseAmino {
    const obj: any = {};
    obj.tx_response = message.txResponse ? TxResponse.toAmino(message.txResponse) : undefined;
    return obj;
  },
  fromAminoMsg(object: BroadcastTxResponseAminoMsg): BroadcastTxResponse {
    return BroadcastTxResponse.fromAmino(object.value);
  },
  toAminoMsg(message: BroadcastTxResponse): BroadcastTxResponseAminoMsg {
    return {
      type: "cosmos-sdk/BroadcastTxResponse",
      value: BroadcastTxResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: BroadcastTxResponseProtoMsg): BroadcastTxResponse {
    return BroadcastTxResponse.decode(message.value);
  },
  toProto(message: BroadcastTxResponse): Uint8Array {
    return BroadcastTxResponse.encode(message).finish();
  },
  toProtoMsg(message: BroadcastTxResponse): BroadcastTxResponseProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.BroadcastTxResponse",
      value: BroadcastTxResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BroadcastTxResponse.typeUrl, BroadcastTxResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(BroadcastTxResponse.aminoType, BroadcastTxResponse.typeUrl);
function createBaseSimulateRequest(): SimulateRequest {
  return {
    tx: undefined,
    txBytes: new Uint8Array()
  };
}
export const SimulateRequest = {
  typeUrl: "/cosmos.tx.v1beta1.SimulateRequest",
  aminoType: "cosmos-sdk/SimulateRequest",
  is(o: any): o is SimulateRequest {
    return o && (o.$typeUrl === SimulateRequest.typeUrl || o.txBytes instanceof Uint8Array || typeof o.txBytes === "string");
  },
  isSDK(o: any): o is SimulateRequestSDKType {
    return o && (o.$typeUrl === SimulateRequest.typeUrl || o.tx_bytes instanceof Uint8Array || typeof o.tx_bytes === "string");
  },
  isAmino(o: any): o is SimulateRequestAmino {
    return o && (o.$typeUrl === SimulateRequest.typeUrl || o.tx_bytes instanceof Uint8Array || typeof o.tx_bytes === "string");
  },
  encode(message: SimulateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.txBytes.length !== 0) {
      writer.uint32(18).bytes(message.txBytes);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SimulateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimulateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;
        case 2:
          message.txBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SimulateRequest {
    const obj = createBaseSimulateRequest();
    if (isSet(object.tx)) obj.tx = Tx.fromJSON(object.tx);
    if (isSet(object.txBytes)) obj.txBytes = bytesFromBase64(object.txBytes);
    return obj;
  },
  toJSON(message: SimulateRequest): unknown {
    const obj: any = {};
    message.tx !== undefined && (obj.tx = message.tx ? Tx.toJSON(message.tx) : undefined);
    message.txBytes !== undefined && (obj.txBytes = base64FromBytes(message.txBytes !== undefined ? message.txBytes : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<SimulateRequest>): SimulateRequest {
    const message = createBaseSimulateRequest();
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = Tx.fromPartial(object.tx);
    }
    message.txBytes = object.txBytes ?? new Uint8Array();
    return message;
  },
  fromSDK(object: SimulateRequestSDKType): SimulateRequest {
    return {
      tx: object.tx ? Tx.fromSDK(object.tx) : undefined,
      txBytes: object?.tx_bytes
    };
  },
  toSDK(message: SimulateRequest): SimulateRequestSDKType {
    const obj: any = {};
    message.tx !== undefined && (obj.tx = message.tx ? Tx.toSDK(message.tx) : undefined);
    obj.tx_bytes = message.txBytes;
    return obj;
  },
  fromAmino(object: SimulateRequestAmino): SimulateRequest {
    const message = createBaseSimulateRequest();
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = Tx.fromAmino(object.tx);
    }
    if (object.tx_bytes !== undefined && object.tx_bytes !== null) {
      message.txBytes = bytesFromBase64(object.tx_bytes);
    }
    return message;
  },
  toAmino(message: SimulateRequest): SimulateRequestAmino {
    const obj: any = {};
    obj.tx = message.tx ? Tx.toAmino(message.tx) : undefined;
    obj.tx_bytes = message.txBytes ? base64FromBytes(message.txBytes) : undefined;
    return obj;
  },
  fromAminoMsg(object: SimulateRequestAminoMsg): SimulateRequest {
    return SimulateRequest.fromAmino(object.value);
  },
  toAminoMsg(message: SimulateRequest): SimulateRequestAminoMsg {
    return {
      type: "cosmos-sdk/SimulateRequest",
      value: SimulateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: SimulateRequestProtoMsg): SimulateRequest {
    return SimulateRequest.decode(message.value);
  },
  toProto(message: SimulateRequest): Uint8Array {
    return SimulateRequest.encode(message).finish();
  },
  toProtoMsg(message: SimulateRequest): SimulateRequestProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.SimulateRequest",
      value: SimulateRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SimulateRequest.typeUrl, SimulateRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(SimulateRequest.aminoType, SimulateRequest.typeUrl);
function createBaseSimulateResponse(): SimulateResponse {
  return {
    gasInfo: undefined,
    result: undefined
  };
}
export const SimulateResponse = {
  typeUrl: "/cosmos.tx.v1beta1.SimulateResponse",
  aminoType: "cosmos-sdk/SimulateResponse",
  is(o: any): o is SimulateResponse {
    return o && o.$typeUrl === SimulateResponse.typeUrl;
  },
  isSDK(o: any): o is SimulateResponseSDKType {
    return o && o.$typeUrl === SimulateResponse.typeUrl;
  },
  isAmino(o: any): o is SimulateResponseAmino {
    return o && o.$typeUrl === SimulateResponse.typeUrl;
  },
  encode(message: SimulateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gasInfo !== undefined) {
      GasInfo.encode(message.gasInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.result !== undefined) {
      Result.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SimulateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimulateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasInfo = GasInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.result = Result.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SimulateResponse {
    const obj = createBaseSimulateResponse();
    if (isSet(object.gasInfo)) obj.gasInfo = GasInfo.fromJSON(object.gasInfo);
    if (isSet(object.result)) obj.result = Result.fromJSON(object.result);
    return obj;
  },
  toJSON(message: SimulateResponse): unknown {
    const obj: any = {};
    message.gasInfo !== undefined && (obj.gasInfo = message.gasInfo ? GasInfo.toJSON(message.gasInfo) : undefined);
    message.result !== undefined && (obj.result = message.result ? Result.toJSON(message.result) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<SimulateResponse>): SimulateResponse {
    const message = createBaseSimulateResponse();
    if (object.gasInfo !== undefined && object.gasInfo !== null) {
      message.gasInfo = GasInfo.fromPartial(object.gasInfo);
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = Result.fromPartial(object.result);
    }
    return message;
  },
  fromSDK(object: SimulateResponseSDKType): SimulateResponse {
    return {
      gasInfo: object.gas_info ? GasInfo.fromSDK(object.gas_info) : undefined,
      result: object.result ? Result.fromSDK(object.result) : undefined
    };
  },
  toSDK(message: SimulateResponse): SimulateResponseSDKType {
    const obj: any = {};
    message.gasInfo !== undefined && (obj.gas_info = message.gasInfo ? GasInfo.toSDK(message.gasInfo) : undefined);
    message.result !== undefined && (obj.result = message.result ? Result.toSDK(message.result) : undefined);
    return obj;
  },
  fromAmino(object: SimulateResponseAmino): SimulateResponse {
    const message = createBaseSimulateResponse();
    if (object.gas_info !== undefined && object.gas_info !== null) {
      message.gasInfo = GasInfo.fromAmino(object.gas_info);
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = Result.fromAmino(object.result);
    }
    return message;
  },
  toAmino(message: SimulateResponse): SimulateResponseAmino {
    const obj: any = {};
    obj.gas_info = message.gasInfo ? GasInfo.toAmino(message.gasInfo) : undefined;
    obj.result = message.result ? Result.toAmino(message.result) : undefined;
    return obj;
  },
  fromAminoMsg(object: SimulateResponseAminoMsg): SimulateResponse {
    return SimulateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: SimulateResponse): SimulateResponseAminoMsg {
    return {
      type: "cosmos-sdk/SimulateResponse",
      value: SimulateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: SimulateResponseProtoMsg): SimulateResponse {
    return SimulateResponse.decode(message.value);
  },
  toProto(message: SimulateResponse): Uint8Array {
    return SimulateResponse.encode(message).finish();
  },
  toProtoMsg(message: SimulateResponse): SimulateResponseProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.SimulateResponse",
      value: SimulateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SimulateResponse.typeUrl, SimulateResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(SimulateResponse.aminoType, SimulateResponse.typeUrl);
function createBaseGetTxRequest(): GetTxRequest {
  return {
    hash: ""
  };
}
export const GetTxRequest = {
  typeUrl: "/cosmos.tx.v1beta1.GetTxRequest",
  aminoType: "cosmos-sdk/GetTxRequest",
  is(o: any): o is GetTxRequest {
    return o && (o.$typeUrl === GetTxRequest.typeUrl || typeof o.hash === "string");
  },
  isSDK(o: any): o is GetTxRequestSDKType {
    return o && (o.$typeUrl === GetTxRequest.typeUrl || typeof o.hash === "string");
  },
  isAmino(o: any): o is GetTxRequestAmino {
    return o && (o.$typeUrl === GetTxRequest.typeUrl || typeof o.hash === "string");
  },
  encode(message: GetTxRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== undefined) {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetTxRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetTxRequest {
    const obj = createBaseGetTxRequest();
    if (isSet(object.hash)) obj.hash = String(object.hash);
    return obj;
  },
  toJSON(message: GetTxRequest): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },
  fromPartial(object: DeepPartial<GetTxRequest>): GetTxRequest {
    const message = createBaseGetTxRequest();
    message.hash = object.hash ?? "";
    return message;
  },
  fromSDK(object: GetTxRequestSDKType): GetTxRequest {
    return {
      hash: object?.hash
    };
  },
  toSDK(message: GetTxRequest): GetTxRequestSDKType {
    const obj: any = {};
    obj.hash = message.hash;
    return obj;
  },
  fromAmino(object: GetTxRequestAmino): GetTxRequest {
    const message = createBaseGetTxRequest();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    return message;
  },
  toAmino(message: GetTxRequest): GetTxRequestAmino {
    const obj: any = {};
    obj.hash = message.hash;
    return obj;
  },
  fromAminoMsg(object: GetTxRequestAminoMsg): GetTxRequest {
    return GetTxRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetTxRequest): GetTxRequestAminoMsg {
    return {
      type: "cosmos-sdk/GetTxRequest",
      value: GetTxRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GetTxRequestProtoMsg): GetTxRequest {
    return GetTxRequest.decode(message.value);
  },
  toProto(message: GetTxRequest): Uint8Array {
    return GetTxRequest.encode(message).finish();
  },
  toProtoMsg(message: GetTxRequest): GetTxRequestProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.GetTxRequest",
      value: GetTxRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetTxRequest.typeUrl, GetTxRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(GetTxRequest.aminoType, GetTxRequest.typeUrl);
function createBaseGetTxResponse(): GetTxResponse {
  return {
    tx: undefined,
    txResponse: undefined
  };
}
export const GetTxResponse = {
  typeUrl: "/cosmos.tx.v1beta1.GetTxResponse",
  aminoType: "cosmos-sdk/GetTxResponse",
  is(o: any): o is GetTxResponse {
    return o && o.$typeUrl === GetTxResponse.typeUrl;
  },
  isSDK(o: any): o is GetTxResponseSDKType {
    return o && o.$typeUrl === GetTxResponse.typeUrl;
  },
  isAmino(o: any): o is GetTxResponseAmino {
    return o && o.$typeUrl === GetTxResponse.typeUrl;
  },
  encode(message: GetTxResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.txResponse !== undefined) {
      TxResponse.encode(message.txResponse, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetTxResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;
        case 2:
          message.txResponse = TxResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetTxResponse {
    const obj = createBaseGetTxResponse();
    if (isSet(object.tx)) obj.tx = Tx.fromJSON(object.tx);
    if (isSet(object.txResponse)) obj.txResponse = TxResponse.fromJSON(object.txResponse);
    return obj;
  },
  toJSON(message: GetTxResponse): unknown {
    const obj: any = {};
    message.tx !== undefined && (obj.tx = message.tx ? Tx.toJSON(message.tx) : undefined);
    message.txResponse !== undefined && (obj.txResponse = message.txResponse ? TxResponse.toJSON(message.txResponse) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GetTxResponse>): GetTxResponse {
    const message = createBaseGetTxResponse();
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = Tx.fromPartial(object.tx);
    }
    if (object.txResponse !== undefined && object.txResponse !== null) {
      message.txResponse = TxResponse.fromPartial(object.txResponse);
    }
    return message;
  },
  fromSDK(object: GetTxResponseSDKType): GetTxResponse {
    return {
      tx: object.tx ? Tx.fromSDK(object.tx) : undefined,
      txResponse: object.tx_response ? TxResponse.fromSDK(object.tx_response) : undefined
    };
  },
  toSDK(message: GetTxResponse): GetTxResponseSDKType {
    const obj: any = {};
    message.tx !== undefined && (obj.tx = message.tx ? Tx.toSDK(message.tx) : undefined);
    message.txResponse !== undefined && (obj.tx_response = message.txResponse ? TxResponse.toSDK(message.txResponse) : undefined);
    return obj;
  },
  fromAmino(object: GetTxResponseAmino): GetTxResponse {
    const message = createBaseGetTxResponse();
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = Tx.fromAmino(object.tx);
    }
    if (object.tx_response !== undefined && object.tx_response !== null) {
      message.txResponse = TxResponse.fromAmino(object.tx_response);
    }
    return message;
  },
  toAmino(message: GetTxResponse): GetTxResponseAmino {
    const obj: any = {};
    obj.tx = message.tx ? Tx.toAmino(message.tx) : undefined;
    obj.tx_response = message.txResponse ? TxResponse.toAmino(message.txResponse) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetTxResponseAminoMsg): GetTxResponse {
    return GetTxResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetTxResponse): GetTxResponseAminoMsg {
    return {
      type: "cosmos-sdk/GetTxResponse",
      value: GetTxResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GetTxResponseProtoMsg): GetTxResponse {
    return GetTxResponse.decode(message.value);
  },
  toProto(message: GetTxResponse): Uint8Array {
    return GetTxResponse.encode(message).finish();
  },
  toProtoMsg(message: GetTxResponse): GetTxResponseProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.GetTxResponse",
      value: GetTxResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetTxResponse.typeUrl, GetTxResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(GetTxResponse.aminoType, GetTxResponse.typeUrl);
function createBaseGetBlockWithTxsRequest(): GetBlockWithTxsRequest {
  return {
    height: BigInt(0),
    pagination: undefined
  };
}
export const GetBlockWithTxsRequest = {
  typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsRequest",
  aminoType: "cosmos-sdk/GetBlockWithTxsRequest",
  is(o: any): o is GetBlockWithTxsRequest {
    return o && (o.$typeUrl === GetBlockWithTxsRequest.typeUrl || typeof o.height === "bigint");
  },
  isSDK(o: any): o is GetBlockWithTxsRequestSDKType {
    return o && (o.$typeUrl === GetBlockWithTxsRequest.typeUrl || typeof o.height === "bigint");
  },
  isAmino(o: any): o is GetBlockWithTxsRequestAmino {
    return o && (o.$typeUrl === GetBlockWithTxsRequest.typeUrl || typeof o.height === "bigint");
  },
  encode(message: GetBlockWithTxsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== undefined) {
      writer.uint32(8).int64(message.height);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetBlockWithTxsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockWithTxsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetBlockWithTxsRequest {
    const obj = createBaseGetBlockWithTxsRequest();
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: GetBlockWithTxsRequest): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GetBlockWithTxsRequest>): GetBlockWithTxsRequest {
    const message = createBaseGetBlockWithTxsRequest();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: GetBlockWithTxsRequestSDKType): GetBlockWithTxsRequest {
    return {
      height: object?.height,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: GetBlockWithTxsRequest): GetBlockWithTxsRequestSDKType {
    const obj: any = {};
    obj.height = message.height;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: GetBlockWithTxsRequestAmino): GetBlockWithTxsRequest {
    const message = createBaseGetBlockWithTxsRequest();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: GetBlockWithTxsRequest): GetBlockWithTxsRequestAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetBlockWithTxsRequestAminoMsg): GetBlockWithTxsRequest {
    return GetBlockWithTxsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetBlockWithTxsRequest): GetBlockWithTxsRequestAminoMsg {
    return {
      type: "cosmos-sdk/GetBlockWithTxsRequest",
      value: GetBlockWithTxsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GetBlockWithTxsRequestProtoMsg): GetBlockWithTxsRequest {
    return GetBlockWithTxsRequest.decode(message.value);
  },
  toProto(message: GetBlockWithTxsRequest): Uint8Array {
    return GetBlockWithTxsRequest.encode(message).finish();
  },
  toProtoMsg(message: GetBlockWithTxsRequest): GetBlockWithTxsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsRequest",
      value: GetBlockWithTxsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetBlockWithTxsRequest.typeUrl, GetBlockWithTxsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(GetBlockWithTxsRequest.aminoType, GetBlockWithTxsRequest.typeUrl);
function createBaseGetBlockWithTxsResponse(): GetBlockWithTxsResponse {
  return {
    txs: [],
    blockId: undefined,
    block: undefined,
    pagination: undefined
  };
}
export const GetBlockWithTxsResponse = {
  typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsResponse",
  aminoType: "cosmos-sdk/GetBlockWithTxsResponse",
  is(o: any): o is GetBlockWithTxsResponse {
    return o && (o.$typeUrl === GetBlockWithTxsResponse.typeUrl || Array.isArray(o.txs) && (!o.txs.length || Tx.is(o.txs[0])));
  },
  isSDK(o: any): o is GetBlockWithTxsResponseSDKType {
    return o && (o.$typeUrl === GetBlockWithTxsResponse.typeUrl || Array.isArray(o.txs) && (!o.txs.length || Tx.isSDK(o.txs[0])));
  },
  isAmino(o: any): o is GetBlockWithTxsResponseAmino {
    return o && (o.$typeUrl === GetBlockWithTxsResponse.typeUrl || Array.isArray(o.txs) && (!o.txs.length || Tx.isAmino(o.txs[0])));
  },
  encode(message: GetBlockWithTxsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.txs) {
      Tx.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(18).fork()).ldelim();
    }
    if (message.block !== undefined) {
      Block.encode(message.block, writer.uint32(26).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetBlockWithTxsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockWithTxsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(Tx.decode(reader, reader.uint32()));
          break;
        case 2:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 3:
          message.block = Block.decode(reader, reader.uint32());
          break;
        case 4:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetBlockWithTxsResponse {
    const obj = createBaseGetBlockWithTxsResponse();
    if (Array.isArray(object?.txs)) obj.txs = object.txs.map((e: any) => Tx.fromJSON(e));
    if (isSet(object.blockId)) obj.blockId = BlockID.fromJSON(object.blockId);
    if (isSet(object.block)) obj.block = Block.fromJSON(object.block);
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: GetBlockWithTxsResponse): unknown {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map(e => e ? Tx.toJSON(e) : undefined);
    } else {
      obj.txs = [];
    }
    message.blockId !== undefined && (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
    message.block !== undefined && (obj.block = message.block ? Block.toJSON(message.block) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GetBlockWithTxsResponse>): GetBlockWithTxsResponse {
    const message = createBaseGetBlockWithTxsResponse();
    message.txs = object.txs?.map(e => Tx.fromPartial(e)) || [];
    if (object.blockId !== undefined && object.blockId !== null) {
      message.blockId = BlockID.fromPartial(object.blockId);
    }
    if (object.block !== undefined && object.block !== null) {
      message.block = Block.fromPartial(object.block);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: GetBlockWithTxsResponseSDKType): GetBlockWithTxsResponse {
    return {
      txs: Array.isArray(object?.txs) ? object.txs.map((e: any) => Tx.fromSDK(e)) : [],
      blockId: object.block_id ? BlockID.fromSDK(object.block_id) : undefined,
      block: object.block ? Block.fromSDK(object.block) : undefined,
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: GetBlockWithTxsResponse): GetBlockWithTxsResponseSDKType {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map(e => e ? Tx.toSDK(e) : undefined);
    } else {
      obj.txs = [];
    }
    message.blockId !== undefined && (obj.block_id = message.blockId ? BlockID.toSDK(message.blockId) : undefined);
    message.block !== undefined && (obj.block = message.block ? Block.toSDK(message.block) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: GetBlockWithTxsResponseAmino): GetBlockWithTxsResponse {
    const message = createBaseGetBlockWithTxsResponse();
    message.txs = object.txs?.map(e => Tx.fromAmino(e)) || [];
    if (object.block_id !== undefined && object.block_id !== null) {
      message.blockId = BlockID.fromAmino(object.block_id);
    }
    if (object.block !== undefined && object.block !== null) {
      message.block = Block.fromAmino(object.block);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: GetBlockWithTxsResponse): GetBlockWithTxsResponseAmino {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map(e => e ? Tx.toAmino(e) : undefined);
    } else {
      obj.txs = [];
    }
    obj.block_id = message.blockId ? BlockID.toAmino(message.blockId) : undefined;
    obj.block = message.block ? Block.toAmino(message.block) : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetBlockWithTxsResponseAminoMsg): GetBlockWithTxsResponse {
    return GetBlockWithTxsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetBlockWithTxsResponse): GetBlockWithTxsResponseAminoMsg {
    return {
      type: "cosmos-sdk/GetBlockWithTxsResponse",
      value: GetBlockWithTxsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GetBlockWithTxsResponseProtoMsg): GetBlockWithTxsResponse {
    return GetBlockWithTxsResponse.decode(message.value);
  },
  toProto(message: GetBlockWithTxsResponse): Uint8Array {
    return GetBlockWithTxsResponse.encode(message).finish();
  },
  toProtoMsg(message: GetBlockWithTxsResponse): GetBlockWithTxsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsResponse",
      value: GetBlockWithTxsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetBlockWithTxsResponse.typeUrl, GetBlockWithTxsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(GetBlockWithTxsResponse.aminoType, GetBlockWithTxsResponse.typeUrl);