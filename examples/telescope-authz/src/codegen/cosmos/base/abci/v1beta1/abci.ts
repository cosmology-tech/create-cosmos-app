import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { Event, EventAmino, EventSDKType } from "../../../../tendermint/abci/types";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
export const protobufPackage = "cosmos.base.abci.v1beta1";
/**
 * TxResponse defines a structure containing relevant tx data and metadata. The
 * tags are stringified and the log is JSON decoded.
 */
export interface TxResponse {
  /** The block height */
  height: bigint;
  /** The transaction hash. */
  txhash: string;
  /** Namespace for the Code */
  codespace: string;
  /** Response code. */
  code: number;
  /** Result bytes, if any. */
  data: string;
  /**
   * The output of the application's logger (raw string). May be
   * non-deterministic.
   */
  rawLog: string;
  /** The output of the application's logger (typed). May be non-deterministic. */
  logs: ABCIMessageLog[];
  /** Additional information. May be non-deterministic. */
  info: string;
  /** Amount of gas requested for transaction. */
  gasWanted: bigint;
  /** Amount of gas consumed by transaction. */
  gasUsed: bigint;
  /** The request transaction bytes. */
  tx?: Any;
  /**
   * Time of the previous block. For heights > 1, it's the weighted median of
   * the timestamps of the valid votes in the block.LastCommit. For height == 1,
   * it's genesis time.
   */
  timestamp: string;
  /**
   * Events defines all the events emitted by processing a transaction. Note,
   * these events include those emitted by processing all the messages and those
   * emitted from the ante handler. Whereas Logs contains the events, with
   * additional metadata, emitted only by processing the messages.
   * 
   * Since: cosmos-sdk 0.42.11, 0.44.5, 0.45
   */
  events: Event[];
}
export interface TxResponseProtoMsg {
  typeUrl: "/cosmos.base.abci.v1beta1.TxResponse";
  value: Uint8Array;
}
/**
 * TxResponse defines a structure containing relevant tx data and metadata. The
 * tags are stringified and the log is JSON decoded.
 */
export interface TxResponseAmino {
  /** The block height */
  height?: string;
  /** The transaction hash. */
  txhash?: string;
  /** Namespace for the Code */
  codespace?: string;
  /** Response code. */
  code?: number;
  /** Result bytes, if any. */
  data?: string;
  /**
   * The output of the application's logger (raw string). May be
   * non-deterministic.
   */
  raw_log?: string;
  /** The output of the application's logger (typed). May be non-deterministic. */
  logs?: ABCIMessageLogAmino[];
  /** Additional information. May be non-deterministic. */
  info?: string;
  /** Amount of gas requested for transaction. */
  gas_wanted?: string;
  /** Amount of gas consumed by transaction. */
  gas_used?: string;
  /** The request transaction bytes. */
  tx?: AnyAmino;
  /**
   * Time of the previous block. For heights > 1, it's the weighted median of
   * the timestamps of the valid votes in the block.LastCommit. For height == 1,
   * it's genesis time.
   */
  timestamp?: string;
  /**
   * Events defines all the events emitted by processing a transaction. Note,
   * these events include those emitted by processing all the messages and those
   * emitted from the ante handler. Whereas Logs contains the events, with
   * additional metadata, emitted only by processing the messages.
   * 
   * Since: cosmos-sdk 0.42.11, 0.44.5, 0.45
   */
  events?: EventAmino[];
}
export interface TxResponseAminoMsg {
  type: "cosmos-sdk/TxResponse";
  value: TxResponseAmino;
}
/**
 * TxResponse defines a structure containing relevant tx data and metadata. The
 * tags are stringified and the log is JSON decoded.
 */
export interface TxResponseSDKType {
  height: bigint;
  txhash: string;
  codespace: string;
  code: number;
  data: string;
  raw_log: string;
  logs: ABCIMessageLogSDKType[];
  info: string;
  gas_wanted: bigint;
  gas_used: bigint;
  tx?: AnySDKType;
  timestamp: string;
  events: EventSDKType[];
}
/** ABCIMessageLog defines a structure containing an indexed tx ABCI message log. */
export interface ABCIMessageLog {
  msgIndex: number;
  log: string;
  /**
   * Events contains a slice of Event objects that were emitted during some
   * execution.
   */
  events: StringEvent[];
}
export interface ABCIMessageLogProtoMsg {
  typeUrl: "/cosmos.base.abci.v1beta1.ABCIMessageLog";
  value: Uint8Array;
}
/** ABCIMessageLog defines a structure containing an indexed tx ABCI message log. */
export interface ABCIMessageLogAmino {
  msg_index?: number;
  log?: string;
  /**
   * Events contains a slice of Event objects that were emitted during some
   * execution.
   */
  events?: StringEventAmino[];
}
export interface ABCIMessageLogAminoMsg {
  type: "cosmos-sdk/ABCIMessageLog";
  value: ABCIMessageLogAmino;
}
/** ABCIMessageLog defines a structure containing an indexed tx ABCI message log. */
export interface ABCIMessageLogSDKType {
  msg_index: number;
  log: string;
  events: StringEventSDKType[];
}
/**
 * StringEvent defines en Event object wrapper where all the attributes
 * contain key/value pairs that are strings instead of raw bytes.
 */
export interface StringEvent {
  type: string;
  attributes: Attribute[];
}
export interface StringEventProtoMsg {
  typeUrl: "/cosmos.base.abci.v1beta1.StringEvent";
  value: Uint8Array;
}
/**
 * StringEvent defines en Event object wrapper where all the attributes
 * contain key/value pairs that are strings instead of raw bytes.
 */
export interface StringEventAmino {
  type?: string;
  attributes?: AttributeAmino[];
}
export interface StringEventAminoMsg {
  type: "cosmos-sdk/StringEvent";
  value: StringEventAmino;
}
/**
 * StringEvent defines en Event object wrapper where all the attributes
 * contain key/value pairs that are strings instead of raw bytes.
 */
export interface StringEventSDKType {
  type: string;
  attributes: AttributeSDKType[];
}
/**
 * Attribute defines an attribute wrapper where the key and value are
 * strings instead of raw bytes.
 */
export interface Attribute {
  key: string;
  value: string;
}
export interface AttributeProtoMsg {
  typeUrl: "/cosmos.base.abci.v1beta1.Attribute";
  value: Uint8Array;
}
/**
 * Attribute defines an attribute wrapper where the key and value are
 * strings instead of raw bytes.
 */
export interface AttributeAmino {
  key?: string;
  value?: string;
}
export interface AttributeAminoMsg {
  type: "cosmos-sdk/Attribute";
  value: AttributeAmino;
}
/**
 * Attribute defines an attribute wrapper where the key and value are
 * strings instead of raw bytes.
 */
export interface AttributeSDKType {
  key: string;
  value: string;
}
/** GasInfo defines tx execution gas context. */
export interface GasInfo {
  /** GasWanted is the maximum units of work we allow this tx to perform. */
  gasWanted: bigint;
  /** GasUsed is the amount of gas actually consumed. */
  gasUsed: bigint;
}
export interface GasInfoProtoMsg {
  typeUrl: "/cosmos.base.abci.v1beta1.GasInfo";
  value: Uint8Array;
}
/** GasInfo defines tx execution gas context. */
export interface GasInfoAmino {
  /** GasWanted is the maximum units of work we allow this tx to perform. */
  gas_wanted?: string;
  /** GasUsed is the amount of gas actually consumed. */
  gas_used?: string;
}
export interface GasInfoAminoMsg {
  type: "cosmos-sdk/GasInfo";
  value: GasInfoAmino;
}
/** GasInfo defines tx execution gas context. */
export interface GasInfoSDKType {
  gas_wanted: bigint;
  gas_used: bigint;
}
/** Result is the union of ResponseFormat and ResponseCheckTx. */
export interface Result {
  /**
   * Data is any data returned from message or handler execution. It MUST be
   * length prefixed in order to separate data from multiple message executions.
   * Deprecated. This field is still populated, but prefer msg_response instead
   * because it also contains the Msg response typeURL.
   */
  /** @deprecated */
  data: Uint8Array;
  /** Log contains the log information from message or handler execution. */
  log: string;
  /**
   * Events contains a slice of Event objects that were emitted during message
   * or handler execution.
   */
  events: Event[];
  /**
   * msg_responses contains the Msg handler responses type packed in Anys.
   * 
   * Since: cosmos-sdk 0.46
   */
  msgResponses: Any[];
}
export interface ResultProtoMsg {
  typeUrl: "/cosmos.base.abci.v1beta1.Result";
  value: Uint8Array;
}
/** Result is the union of ResponseFormat and ResponseCheckTx. */
export interface ResultAmino {
  /**
   * Data is any data returned from message or handler execution. It MUST be
   * length prefixed in order to separate data from multiple message executions.
   * Deprecated. This field is still populated, but prefer msg_response instead
   * because it also contains the Msg response typeURL.
   */
  /** @deprecated */
  data?: string;
  /** Log contains the log information from message or handler execution. */
  log?: string;
  /**
   * Events contains a slice of Event objects that were emitted during message
   * or handler execution.
   */
  events?: EventAmino[];
  /**
   * msg_responses contains the Msg handler responses type packed in Anys.
   * 
   * Since: cosmos-sdk 0.46
   */
  msg_responses?: AnyAmino[];
}
export interface ResultAminoMsg {
  type: "cosmos-sdk/Result";
  value: ResultAmino;
}
/** Result is the union of ResponseFormat and ResponseCheckTx. */
export interface ResultSDKType {
  /** @deprecated */
  data: Uint8Array;
  log: string;
  events: EventSDKType[];
  msg_responses: AnySDKType[];
}
/**
 * SimulationResponse defines the response generated when a transaction is
 * successfully simulated.
 */
export interface SimulationResponse {
  gasInfo: GasInfo;
  result?: Result;
}
export interface SimulationResponseProtoMsg {
  typeUrl: "/cosmos.base.abci.v1beta1.SimulationResponse";
  value: Uint8Array;
}
/**
 * SimulationResponse defines the response generated when a transaction is
 * successfully simulated.
 */
export interface SimulationResponseAmino {
  gas_info?: GasInfoAmino;
  result?: ResultAmino;
}
export interface SimulationResponseAminoMsg {
  type: "cosmos-sdk/SimulationResponse";
  value: SimulationResponseAmino;
}
/**
 * SimulationResponse defines the response generated when a transaction is
 * successfully simulated.
 */
export interface SimulationResponseSDKType {
  gas_info: GasInfoSDKType;
  result?: ResultSDKType;
}
/**
 * MsgData defines the data returned in a Result object during message
 * execution.
 */
/** @deprecated */
export interface MsgData {
  msgType: string;
  data: Uint8Array;
}
export interface MsgDataProtoMsg {
  typeUrl: "/cosmos.base.abci.v1beta1.MsgData";
  value: Uint8Array;
}
/**
 * MsgData defines the data returned in a Result object during message
 * execution.
 */
/** @deprecated */
export interface MsgDataAmino {
  msg_type?: string;
  data?: string;
}
export interface MsgDataAminoMsg {
  type: "cosmos-sdk/MsgData";
  value: MsgDataAmino;
}
/**
 * MsgData defines the data returned in a Result object during message
 * execution.
 */
/** @deprecated */
export interface MsgDataSDKType {
  msg_type: string;
  data: Uint8Array;
}
/**
 * TxMsgData defines a list of MsgData. A transaction will have a MsgData object
 * for each message.
 */
export interface TxMsgData {
  /** data field is deprecated and not populated. */
  /** @deprecated */
  data: MsgData[];
  /**
   * msg_responses contains the Msg handler responses packed into Anys.
   * 
   * Since: cosmos-sdk 0.46
   */
  msgResponses: Any[];
}
export interface TxMsgDataProtoMsg {
  typeUrl: "/cosmos.base.abci.v1beta1.TxMsgData";
  value: Uint8Array;
}
/**
 * TxMsgData defines a list of MsgData. A transaction will have a MsgData object
 * for each message.
 */
export interface TxMsgDataAmino {
  /** data field is deprecated and not populated. */
  /** @deprecated */
  data?: MsgDataAmino[];
  /**
   * msg_responses contains the Msg handler responses packed into Anys.
   * 
   * Since: cosmos-sdk 0.46
   */
  msg_responses?: AnyAmino[];
}
export interface TxMsgDataAminoMsg {
  type: "cosmos-sdk/TxMsgData";
  value: TxMsgDataAmino;
}
/**
 * TxMsgData defines a list of MsgData. A transaction will have a MsgData object
 * for each message.
 */
export interface TxMsgDataSDKType {
  /** @deprecated */
  data: MsgDataSDKType[];
  msg_responses: AnySDKType[];
}
/** SearchTxsResult defines a structure for querying txs pageable */
export interface SearchTxsResult {
  /** Count of all txs */
  totalCount: bigint;
  /** Count of txs in current page */
  count: bigint;
  /** Index of current page, start from 1 */
  pageNumber: bigint;
  /** Count of total pages */
  pageTotal: bigint;
  /** Max count txs per page */
  limit: bigint;
  /** List of txs in current page */
  txs: TxResponse[];
}
export interface SearchTxsResultProtoMsg {
  typeUrl: "/cosmos.base.abci.v1beta1.SearchTxsResult";
  value: Uint8Array;
}
/** SearchTxsResult defines a structure for querying txs pageable */
export interface SearchTxsResultAmino {
  /** Count of all txs */
  total_count?: string;
  /** Count of txs in current page */
  count?: string;
  /** Index of current page, start from 1 */
  page_number?: string;
  /** Count of total pages */
  page_total?: string;
  /** Max count txs per page */
  limit?: string;
  /** List of txs in current page */
  txs?: TxResponseAmino[];
}
export interface SearchTxsResultAminoMsg {
  type: "cosmos-sdk/SearchTxsResult";
  value: SearchTxsResultAmino;
}
/** SearchTxsResult defines a structure for querying txs pageable */
export interface SearchTxsResultSDKType {
  total_count: bigint;
  count: bigint;
  page_number: bigint;
  page_total: bigint;
  limit: bigint;
  txs: TxResponseSDKType[];
}
function createBaseTxResponse(): TxResponse {
  return {
    height: BigInt(0),
    txhash: "",
    codespace: "",
    code: 0,
    data: "",
    rawLog: "",
    logs: [],
    info: "",
    gasWanted: BigInt(0),
    gasUsed: BigInt(0),
    tx: undefined,
    timestamp: "",
    events: []
  };
}
export const TxResponse = {
  typeUrl: "/cosmos.base.abci.v1beta1.TxResponse",
  aminoType: "cosmos-sdk/TxResponse",
  is(o: any): o is TxResponse {
    return o && (o.$typeUrl === TxResponse.typeUrl || typeof o.height === "bigint" && typeof o.txhash === "string" && typeof o.codespace === "string" && typeof o.code === "number" && typeof o.data === "string" && typeof o.rawLog === "string" && Array.isArray(o.logs) && (!o.logs.length || ABCIMessageLog.is(o.logs[0])) && typeof o.info === "string" && typeof o.gasWanted === "bigint" && typeof o.gasUsed === "bigint" && typeof o.timestamp === "string" && Array.isArray(o.events) && (!o.events.length || Event.is(o.events[0])));
  },
  isSDK(o: any): o is TxResponseSDKType {
    return o && (o.$typeUrl === TxResponse.typeUrl || typeof o.height === "bigint" && typeof o.txhash === "string" && typeof o.codespace === "string" && typeof o.code === "number" && typeof o.data === "string" && typeof o.raw_log === "string" && Array.isArray(o.logs) && (!o.logs.length || ABCIMessageLog.isSDK(o.logs[0])) && typeof o.info === "string" && typeof o.gas_wanted === "bigint" && typeof o.gas_used === "bigint" && typeof o.timestamp === "string" && Array.isArray(o.events) && (!o.events.length || Event.isSDK(o.events[0])));
  },
  isAmino(o: any): o is TxResponseAmino {
    return o && (o.$typeUrl === TxResponse.typeUrl || typeof o.height === "bigint" && typeof o.txhash === "string" && typeof o.codespace === "string" && typeof o.code === "number" && typeof o.data === "string" && typeof o.raw_log === "string" && Array.isArray(o.logs) && (!o.logs.length || ABCIMessageLog.isAmino(o.logs[0])) && typeof o.info === "string" && typeof o.gas_wanted === "bigint" && typeof o.gas_used === "bigint" && typeof o.timestamp === "string" && Array.isArray(o.events) && (!o.events.length || Event.isAmino(o.events[0])));
  },
  encode(message: TxResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== undefined) {
      writer.uint32(8).int64(message.height);
    }
    if (message.txhash !== undefined) {
      writer.uint32(18).string(message.txhash);
    }
    if (message.codespace !== undefined) {
      writer.uint32(26).string(message.codespace);
    }
    if (message.code !== undefined) {
      writer.uint32(32).uint32(message.code);
    }
    if (message.data !== undefined) {
      writer.uint32(42).string(message.data);
    }
    if (message.rawLog !== undefined) {
      writer.uint32(50).string(message.rawLog);
    }
    for (const v of message.logs) {
      ABCIMessageLog.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.info !== undefined) {
      writer.uint32(66).string(message.info);
    }
    if (message.gasWanted !== undefined) {
      writer.uint32(72).int64(message.gasWanted);
    }
    if (message.gasUsed !== undefined) {
      writer.uint32(80).int64(message.gasUsed);
    }
    if (message.tx !== undefined) {
      Any.encode(message.tx, writer.uint32(90).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      writer.uint32(98).string(message.timestamp);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.txhash = reader.string();
          break;
        case 3:
          message.codespace = reader.string();
          break;
        case 4:
          message.code = reader.uint32();
          break;
        case 5:
          message.data = reader.string();
          break;
        case 6:
          message.rawLog = reader.string();
          break;
        case 7:
          message.logs.push(ABCIMessageLog.decode(reader, reader.uint32()));
          break;
        case 8:
          message.info = reader.string();
          break;
        case 9:
          message.gasWanted = reader.int64();
          break;
        case 10:
          message.gasUsed = reader.int64();
          break;
        case 11:
          message.tx = Any.decode(reader, reader.uint32());
          break;
        case 12:
          message.timestamp = reader.string();
          break;
        case 13:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TxResponse {
    const obj = createBaseTxResponse();
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.txhash)) obj.txhash = String(object.txhash);
    if (isSet(object.codespace)) obj.codespace = String(object.codespace);
    if (isSet(object.code)) obj.code = Number(object.code);
    if (isSet(object.data)) obj.data = String(object.data);
    if (isSet(object.rawLog)) obj.rawLog = String(object.rawLog);
    if (Array.isArray(object?.logs)) obj.logs = object.logs.map((e: any) => ABCIMessageLog.fromJSON(e));
    if (isSet(object.info)) obj.info = String(object.info);
    if (isSet(object.gasWanted)) obj.gasWanted = BigInt(object.gasWanted.toString());
    if (isSet(object.gasUsed)) obj.gasUsed = BigInt(object.gasUsed.toString());
    if (isSet(object.tx)) obj.tx = Any.fromJSON(object.tx);
    if (isSet(object.timestamp)) obj.timestamp = String(object.timestamp);
    if (Array.isArray(object?.events)) obj.events = object.events.map((e: any) => Event.fromJSON(e));
    return obj;
  },
  toJSON(message: TxResponse): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.txhash !== undefined && (obj.txhash = message.txhash);
    message.codespace !== undefined && (obj.codespace = message.codespace);
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.data !== undefined && (obj.data = message.data);
    message.rawLog !== undefined && (obj.rawLog = message.rawLog);
    if (message.logs) {
      obj.logs = message.logs.map(e => e ? ABCIMessageLog.toJSON(e) : undefined);
    } else {
      obj.logs = [];
    }
    message.info !== undefined && (obj.info = message.info);
    message.gasWanted !== undefined && (obj.gasWanted = (message.gasWanted || BigInt(0)).toString());
    message.gasUsed !== undefined && (obj.gasUsed = (message.gasUsed || BigInt(0)).toString());
    message.tx !== undefined && (obj.tx = message.tx ? Any.toJSON(message.tx) : undefined);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<TxResponse>): TxResponse {
    const message = createBaseTxResponse();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    message.txhash = object.txhash ?? "";
    message.codespace = object.codespace ?? "";
    message.code = object.code ?? 0;
    message.data = object.data ?? "";
    message.rawLog = object.rawLog ?? "";
    message.logs = object.logs?.map(e => ABCIMessageLog.fromPartial(e)) || [];
    message.info = object.info ?? "";
    if (object.gasWanted !== undefined && object.gasWanted !== null) {
      message.gasWanted = BigInt(object.gasWanted.toString());
    }
    if (object.gasUsed !== undefined && object.gasUsed !== null) {
      message.gasUsed = BigInt(object.gasUsed.toString());
    }
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = Any.fromPartial(object.tx);
    }
    message.timestamp = object.timestamp ?? "";
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: TxResponseSDKType): TxResponse {
    return {
      height: object?.height,
      txhash: object?.txhash,
      codespace: object?.codespace,
      code: object?.code,
      data: object?.data,
      rawLog: object?.raw_log,
      logs: Array.isArray(object?.logs) ? object.logs.map((e: any) => ABCIMessageLog.fromSDK(e)) : [],
      info: object?.info,
      gasWanted: object?.gas_wanted,
      gasUsed: object?.gas_used,
      tx: object.tx ? Any.fromSDK(object.tx) : undefined,
      timestamp: object?.timestamp,
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromSDK(e)) : []
    };
  },
  toSDK(message: TxResponse): TxResponseSDKType {
    const obj: any = {};
    obj.height = message.height;
    obj.txhash = message.txhash;
    obj.codespace = message.codespace;
    obj.code = message.code;
    obj.data = message.data;
    obj.raw_log = message.rawLog;
    if (message.logs) {
      obj.logs = message.logs.map(e => e ? ABCIMessageLog.toSDK(e) : undefined);
    } else {
      obj.logs = [];
    }
    obj.info = message.info;
    obj.gas_wanted = message.gasWanted;
    obj.gas_used = message.gasUsed;
    message.tx !== undefined && (obj.tx = message.tx ? Any.toSDK(message.tx) : undefined);
    obj.timestamp = message.timestamp;
    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toSDK(e) : undefined);
    } else {
      obj.events = [];
    }
    return obj;
  },
  fromAmino(object: TxResponseAmino): TxResponse {
    const message = createBaseTxResponse();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.txhash !== undefined && object.txhash !== null) {
      message.txhash = object.txhash;
    }
    if (object.codespace !== undefined && object.codespace !== null) {
      message.codespace = object.codespace;
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    }
    if (object.raw_log !== undefined && object.raw_log !== null) {
      message.rawLog = object.raw_log;
    }
    message.logs = object.logs?.map(e => ABCIMessageLog.fromAmino(e)) || [];
    if (object.info !== undefined && object.info !== null) {
      message.info = object.info;
    }
    if (object.gas_wanted !== undefined && object.gas_wanted !== null) {
      message.gasWanted = BigInt(object.gas_wanted);
    }
    if (object.gas_used !== undefined && object.gas_used !== null) {
      message.gasUsed = BigInt(object.gas_used);
    }
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = Any.fromAmino(object.tx);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    }
    message.events = object.events?.map(e => Event.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TxResponse): TxResponseAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    obj.txhash = message.txhash;
    obj.codespace = message.codespace;
    obj.code = message.code;
    obj.data = message.data;
    obj.raw_log = message.rawLog;
    if (message.logs) {
      obj.logs = message.logs.map(e => e ? ABCIMessageLog.toAmino(e) : undefined);
    } else {
      obj.logs = [];
    }
    obj.info = message.info;
    obj.gas_wanted = message.gasWanted ? message.gasWanted.toString() : undefined;
    obj.gas_used = message.gasUsed ? message.gasUsed.toString() : undefined;
    obj.tx = message.tx ? Any.toAmino(message.tx) : undefined;
    obj.timestamp = message.timestamp;
    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toAmino(e) : undefined);
    } else {
      obj.events = [];
    }
    return obj;
  },
  fromAminoMsg(object: TxResponseAminoMsg): TxResponse {
    return TxResponse.fromAmino(object.value);
  },
  toAminoMsg(message: TxResponse): TxResponseAminoMsg {
    return {
      type: "cosmos-sdk/TxResponse",
      value: TxResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: TxResponseProtoMsg): TxResponse {
    return TxResponse.decode(message.value);
  },
  toProto(message: TxResponse): Uint8Array {
    return TxResponse.encode(message).finish();
  },
  toProtoMsg(message: TxResponse): TxResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.TxResponse",
      value: TxResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TxResponse.typeUrl, TxResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(TxResponse.aminoType, TxResponse.typeUrl);
function createBaseABCIMessageLog(): ABCIMessageLog {
  return {
    msgIndex: 0,
    log: "",
    events: []
  };
}
export const ABCIMessageLog = {
  typeUrl: "/cosmos.base.abci.v1beta1.ABCIMessageLog",
  aminoType: "cosmos-sdk/ABCIMessageLog",
  is(o: any): o is ABCIMessageLog {
    return o && (o.$typeUrl === ABCIMessageLog.typeUrl || typeof o.msgIndex === "number" && typeof o.log === "string" && Array.isArray(o.events) && (!o.events.length || StringEvent.is(o.events[0])));
  },
  isSDK(o: any): o is ABCIMessageLogSDKType {
    return o && (o.$typeUrl === ABCIMessageLog.typeUrl || typeof o.msg_index === "number" && typeof o.log === "string" && Array.isArray(o.events) && (!o.events.length || StringEvent.isSDK(o.events[0])));
  },
  isAmino(o: any): o is ABCIMessageLogAmino {
    return o && (o.$typeUrl === ABCIMessageLog.typeUrl || typeof o.msg_index === "number" && typeof o.log === "string" && Array.isArray(o.events) && (!o.events.length || StringEvent.isAmino(o.events[0])));
  },
  encode(message: ABCIMessageLog, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msgIndex !== undefined) {
      writer.uint32(8).uint32(message.msgIndex);
    }
    if (message.log !== undefined) {
      writer.uint32(18).string(message.log);
    }
    for (const v of message.events) {
      StringEvent.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ABCIMessageLog {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseABCIMessageLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgIndex = reader.uint32();
          break;
        case 2:
          message.log = reader.string();
          break;
        case 3:
          message.events.push(StringEvent.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ABCIMessageLog {
    const obj = createBaseABCIMessageLog();
    if (isSet(object.msgIndex)) obj.msgIndex = Number(object.msgIndex);
    if (isSet(object.log)) obj.log = String(object.log);
    if (Array.isArray(object?.events)) obj.events = object.events.map((e: any) => StringEvent.fromJSON(e));
    return obj;
  },
  toJSON(message: ABCIMessageLog): unknown {
    const obj: any = {};
    message.msgIndex !== undefined && (obj.msgIndex = Math.round(message.msgIndex));
    message.log !== undefined && (obj.log = message.log);
    if (message.events) {
      obj.events = message.events.map(e => e ? StringEvent.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ABCIMessageLog>): ABCIMessageLog {
    const message = createBaseABCIMessageLog();
    message.msgIndex = object.msgIndex ?? 0;
    message.log = object.log ?? "";
    message.events = object.events?.map(e => StringEvent.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ABCIMessageLogSDKType): ABCIMessageLog {
    return {
      msgIndex: object?.msg_index,
      log: object?.log,
      events: Array.isArray(object?.events) ? object.events.map((e: any) => StringEvent.fromSDK(e)) : []
    };
  },
  toSDK(message: ABCIMessageLog): ABCIMessageLogSDKType {
    const obj: any = {};
    obj.msg_index = message.msgIndex;
    obj.log = message.log;
    if (message.events) {
      obj.events = message.events.map(e => e ? StringEvent.toSDK(e) : undefined);
    } else {
      obj.events = [];
    }
    return obj;
  },
  fromAmino(object: ABCIMessageLogAmino): ABCIMessageLog {
    const message = createBaseABCIMessageLog();
    if (object.msg_index !== undefined && object.msg_index !== null) {
      message.msgIndex = object.msg_index;
    }
    if (object.log !== undefined && object.log !== null) {
      message.log = object.log;
    }
    message.events = object.events?.map(e => StringEvent.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ABCIMessageLog): ABCIMessageLogAmino {
    const obj: any = {};
    obj.msg_index = message.msgIndex;
    obj.log = message.log;
    if (message.events) {
      obj.events = message.events.map(e => e ? StringEvent.toAmino(e) : undefined);
    } else {
      obj.events = [];
    }
    return obj;
  },
  fromAminoMsg(object: ABCIMessageLogAminoMsg): ABCIMessageLog {
    return ABCIMessageLog.fromAmino(object.value);
  },
  toAminoMsg(message: ABCIMessageLog): ABCIMessageLogAminoMsg {
    return {
      type: "cosmos-sdk/ABCIMessageLog",
      value: ABCIMessageLog.toAmino(message)
    };
  },
  fromProtoMsg(message: ABCIMessageLogProtoMsg): ABCIMessageLog {
    return ABCIMessageLog.decode(message.value);
  },
  toProto(message: ABCIMessageLog): Uint8Array {
    return ABCIMessageLog.encode(message).finish();
  },
  toProtoMsg(message: ABCIMessageLog): ABCIMessageLogProtoMsg {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.ABCIMessageLog",
      value: ABCIMessageLog.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ABCIMessageLog.typeUrl, ABCIMessageLog);
GlobalDecoderRegistry.registerAminoProtoMapping(ABCIMessageLog.aminoType, ABCIMessageLog.typeUrl);
function createBaseStringEvent(): StringEvent {
  return {
    type: "",
    attributes: []
  };
}
export const StringEvent = {
  typeUrl: "/cosmos.base.abci.v1beta1.StringEvent",
  aminoType: "cosmos-sdk/StringEvent",
  is(o: any): o is StringEvent {
    return o && (o.$typeUrl === StringEvent.typeUrl || typeof o.type === "string" && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.is(o.attributes[0])));
  },
  isSDK(o: any): o is StringEventSDKType {
    return o && (o.$typeUrl === StringEvent.typeUrl || typeof o.type === "string" && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.isSDK(o.attributes[0])));
  },
  isAmino(o: any): o is StringEventAmino {
    return o && (o.$typeUrl === StringEvent.typeUrl || typeof o.type === "string" && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.isAmino(o.attributes[0])));
  },
  encode(message: StringEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== undefined) {
      writer.uint32(10).string(message.type);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StringEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StringEvent {
    const obj = createBaseStringEvent();
    if (isSet(object.type)) obj.type = String(object.type);
    if (Array.isArray(object?.attributes)) obj.attributes = object.attributes.map((e: any) => Attribute.fromJSON(e));
    return obj;
  },
  toJSON(message: StringEvent): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<StringEvent>): StringEvent {
    const message = createBaseStringEvent();
    message.type = object.type ?? "";
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: StringEventSDKType): StringEvent {
    return {
      type: object?.type,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDK(e)) : []
    };
  },
  toSDK(message: StringEvent): StringEventSDKType {
    const obj: any = {};
    obj.type = message.type;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toSDK(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromAmino(object: StringEventAmino): StringEvent {
    const message = createBaseStringEvent();
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: StringEvent): StringEventAmino {
    const obj: any = {};
    obj.type = message.type;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromAminoMsg(object: StringEventAminoMsg): StringEvent {
    return StringEvent.fromAmino(object.value);
  },
  toAminoMsg(message: StringEvent): StringEventAminoMsg {
    return {
      type: "cosmos-sdk/StringEvent",
      value: StringEvent.toAmino(message)
    };
  },
  fromProtoMsg(message: StringEventProtoMsg): StringEvent {
    return StringEvent.decode(message.value);
  },
  toProto(message: StringEvent): Uint8Array {
    return StringEvent.encode(message).finish();
  },
  toProtoMsg(message: StringEvent): StringEventProtoMsg {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.StringEvent",
      value: StringEvent.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(StringEvent.typeUrl, StringEvent);
GlobalDecoderRegistry.registerAminoProtoMapping(StringEvent.aminoType, StringEvent.typeUrl);
function createBaseAttribute(): Attribute {
  return {
    key: "",
    value: ""
  };
}
export const Attribute = {
  typeUrl: "/cosmos.base.abci.v1beta1.Attribute",
  aminoType: "cosmos-sdk/Attribute",
  is(o: any): o is Attribute {
    return o && (o.$typeUrl === Attribute.typeUrl || typeof o.key === "string" && typeof o.value === "string");
  },
  isSDK(o: any): o is AttributeSDKType {
    return o && (o.$typeUrl === Attribute.typeUrl || typeof o.key === "string" && typeof o.value === "string");
  },
  isAmino(o: any): o is AttributeAmino {
    return o && (o.$typeUrl === Attribute.typeUrl || typeof o.key === "string" && typeof o.value === "string");
  },
  encode(message: Attribute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== undefined) {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Attribute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Attribute {
    const obj = createBaseAttribute();
    if (isSet(object.key)) obj.key = String(object.key);
    if (isSet(object.value)) obj.value = String(object.value);
    return obj;
  },
  toJSON(message: Attribute): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: DeepPartial<Attribute>): Attribute {
    const message = createBaseAttribute();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromSDK(object: AttributeSDKType): Attribute {
    return {
      key: object?.key,
      value: object?.value
    };
  },
  toSDK(message: Attribute): AttributeSDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: AttributeAmino): Attribute {
    const message = createBaseAttribute();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: Attribute): AttributeAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: AttributeAminoMsg): Attribute {
    return Attribute.fromAmino(object.value);
  },
  toAminoMsg(message: Attribute): AttributeAminoMsg {
    return {
      type: "cosmos-sdk/Attribute",
      value: Attribute.toAmino(message)
    };
  },
  fromProtoMsg(message: AttributeProtoMsg): Attribute {
    return Attribute.decode(message.value);
  },
  toProto(message: Attribute): Uint8Array {
    return Attribute.encode(message).finish();
  },
  toProtoMsg(message: Attribute): AttributeProtoMsg {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.Attribute",
      value: Attribute.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Attribute.typeUrl, Attribute);
GlobalDecoderRegistry.registerAminoProtoMapping(Attribute.aminoType, Attribute.typeUrl);
function createBaseGasInfo(): GasInfo {
  return {
    gasWanted: BigInt(0),
    gasUsed: BigInt(0)
  };
}
export const GasInfo = {
  typeUrl: "/cosmos.base.abci.v1beta1.GasInfo",
  aminoType: "cosmos-sdk/GasInfo",
  is(o: any): o is GasInfo {
    return o && (o.$typeUrl === GasInfo.typeUrl || typeof o.gasWanted === "bigint" && typeof o.gasUsed === "bigint");
  },
  isSDK(o: any): o is GasInfoSDKType {
    return o && (o.$typeUrl === GasInfo.typeUrl || typeof o.gas_wanted === "bigint" && typeof o.gas_used === "bigint");
  },
  isAmino(o: any): o is GasInfoAmino {
    return o && (o.$typeUrl === GasInfo.typeUrl || typeof o.gas_wanted === "bigint" && typeof o.gas_used === "bigint");
  },
  encode(message: GasInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gasWanted !== undefined) {
      writer.uint32(8).uint64(message.gasWanted);
    }
    if (message.gasUsed !== undefined) {
      writer.uint32(16).uint64(message.gasUsed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GasInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasWanted = reader.uint64();
          break;
        case 2:
          message.gasUsed = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GasInfo {
    const obj = createBaseGasInfo();
    if (isSet(object.gasWanted)) obj.gasWanted = BigInt(object.gasWanted.toString());
    if (isSet(object.gasUsed)) obj.gasUsed = BigInt(object.gasUsed.toString());
    return obj;
  },
  toJSON(message: GasInfo): unknown {
    const obj: any = {};
    message.gasWanted !== undefined && (obj.gasWanted = (message.gasWanted || BigInt(0)).toString());
    message.gasUsed !== undefined && (obj.gasUsed = (message.gasUsed || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<GasInfo>): GasInfo {
    const message = createBaseGasInfo();
    if (object.gasWanted !== undefined && object.gasWanted !== null) {
      message.gasWanted = BigInt(object.gasWanted.toString());
    }
    if (object.gasUsed !== undefined && object.gasUsed !== null) {
      message.gasUsed = BigInt(object.gasUsed.toString());
    }
    return message;
  },
  fromSDK(object: GasInfoSDKType): GasInfo {
    return {
      gasWanted: object?.gas_wanted,
      gasUsed: object?.gas_used
    };
  },
  toSDK(message: GasInfo): GasInfoSDKType {
    const obj: any = {};
    obj.gas_wanted = message.gasWanted;
    obj.gas_used = message.gasUsed;
    return obj;
  },
  fromAmino(object: GasInfoAmino): GasInfo {
    const message = createBaseGasInfo();
    if (object.gas_wanted !== undefined && object.gas_wanted !== null) {
      message.gasWanted = BigInt(object.gas_wanted);
    }
    if (object.gas_used !== undefined && object.gas_used !== null) {
      message.gasUsed = BigInt(object.gas_used);
    }
    return message;
  },
  toAmino(message: GasInfo): GasInfoAmino {
    const obj: any = {};
    obj.gas_wanted = message.gasWanted ? message.gasWanted.toString() : undefined;
    obj.gas_used = message.gasUsed ? message.gasUsed.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GasInfoAminoMsg): GasInfo {
    return GasInfo.fromAmino(object.value);
  },
  toAminoMsg(message: GasInfo): GasInfoAminoMsg {
    return {
      type: "cosmos-sdk/GasInfo",
      value: GasInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: GasInfoProtoMsg): GasInfo {
    return GasInfo.decode(message.value);
  },
  toProto(message: GasInfo): Uint8Array {
    return GasInfo.encode(message).finish();
  },
  toProtoMsg(message: GasInfo): GasInfoProtoMsg {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.GasInfo",
      value: GasInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GasInfo.typeUrl, GasInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(GasInfo.aminoType, GasInfo.typeUrl);
function createBaseResult(): Result {
  return {
    data: new Uint8Array(),
    log: "",
    events: [],
    msgResponses: []
  };
}
export const Result = {
  typeUrl: "/cosmos.base.abci.v1beta1.Result",
  aminoType: "cosmos-sdk/Result",
  is(o: any): o is Result {
    return o && (o.$typeUrl === Result.typeUrl || (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.log === "string" && Array.isArray(o.events) && (!o.events.length || Event.is(o.events[0])) && Array.isArray(o.msgResponses) && (!o.msgResponses.length || Any.is(o.msgResponses[0])));
  },
  isSDK(o: any): o is ResultSDKType {
    return o && (o.$typeUrl === Result.typeUrl || (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.log === "string" && Array.isArray(o.events) && (!o.events.length || Event.isSDK(o.events[0])) && Array.isArray(o.msg_responses) && (!o.msg_responses.length || Any.isSDK(o.msg_responses[0])));
  },
  isAmino(o: any): o is ResultAmino {
    return o && (o.$typeUrl === Result.typeUrl || (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.log === "string" && Array.isArray(o.events) && (!o.events.length || Event.isAmino(o.events[0])) && Array.isArray(o.msg_responses) && (!o.msg_responses.length || Any.isAmino(o.msg_responses[0])));
  },
  encode(message: Result, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.log !== undefined) {
      writer.uint32(18).string(message.log);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.msgResponses) {
      Any.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Result {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.log = reader.string();
          break;
        case 3:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 4:
          message.msgResponses.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Result {
    const obj = createBaseResult();
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    if (isSet(object.log)) obj.log = String(object.log);
    if (Array.isArray(object?.events)) obj.events = object.events.map((e: any) => Event.fromJSON(e));
    if (Array.isArray(object?.msgResponses)) obj.msgResponses = object.msgResponses.map((e: any) => Any.fromJSON(e));
    return obj;
  },
  toJSON(message: Result): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.log !== undefined && (obj.log = message.log);
    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    if (message.msgResponses) {
      obj.msgResponses = message.msgResponses.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.msgResponses = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Result>): Result {
    const message = createBaseResult();
    message.data = object.data ?? new Uint8Array();
    message.log = object.log ?? "";
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    message.msgResponses = object.msgResponses?.map(e => Any.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ResultSDKType): Result {
    return {
      data: object?.data,
      log: object?.log,
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromSDK(e)) : [],
      msgResponses: Array.isArray(object?.msg_responses) ? object.msg_responses.map((e: any) => Any.fromSDK(e)) : []
    };
  },
  toSDK(message: Result): ResultSDKType {
    const obj: any = {};
    obj.data = message.data;
    obj.log = message.log;
    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toSDK(e) : undefined);
    } else {
      obj.events = [];
    }
    if (message.msgResponses) {
      obj.msg_responses = message.msgResponses.map(e => e ? Any.toSDK(e) : undefined);
    } else {
      obj.msg_responses = [];
    }
    return obj;
  },
  fromAmino(object: ResultAmino): Result {
    const message = createBaseResult();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.log !== undefined && object.log !== null) {
      message.log = object.log;
    }
    message.events = object.events?.map(e => Event.fromAmino(e)) || [];
    message.msgResponses = object.msg_responses?.map(e => Any.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Result): ResultAmino {
    const obj: any = {};
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    obj.log = message.log;
    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toAmino(e) : undefined);
    } else {
      obj.events = [];
    }
    if (message.msgResponses) {
      obj.msg_responses = message.msgResponses.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.msg_responses = [];
    }
    return obj;
  },
  fromAminoMsg(object: ResultAminoMsg): Result {
    return Result.fromAmino(object.value);
  },
  toAminoMsg(message: Result): ResultAminoMsg {
    return {
      type: "cosmos-sdk/Result",
      value: Result.toAmino(message)
    };
  },
  fromProtoMsg(message: ResultProtoMsg): Result {
    return Result.decode(message.value);
  },
  toProto(message: Result): Uint8Array {
    return Result.encode(message).finish();
  },
  toProtoMsg(message: Result): ResultProtoMsg {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.Result",
      value: Result.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Result.typeUrl, Result);
GlobalDecoderRegistry.registerAminoProtoMapping(Result.aminoType, Result.typeUrl);
function createBaseSimulationResponse(): SimulationResponse {
  return {
    gasInfo: GasInfo.fromPartial({}),
    result: undefined
  };
}
export const SimulationResponse = {
  typeUrl: "/cosmos.base.abci.v1beta1.SimulationResponse",
  aminoType: "cosmos-sdk/SimulationResponse",
  is(o: any): o is SimulationResponse {
    return o && (o.$typeUrl === SimulationResponse.typeUrl || GasInfo.is(o.gasInfo));
  },
  isSDK(o: any): o is SimulationResponseSDKType {
    return o && (o.$typeUrl === SimulationResponse.typeUrl || GasInfo.isSDK(o.gas_info));
  },
  isAmino(o: any): o is SimulationResponseAmino {
    return o && (o.$typeUrl === SimulationResponse.typeUrl || GasInfo.isAmino(o.gas_info));
  },
  encode(message: SimulationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gasInfo !== undefined) {
      GasInfo.encode(message.gasInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.result !== undefined) {
      Result.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SimulationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimulationResponse();
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
  fromJSON(object: any): SimulationResponse {
    const obj = createBaseSimulationResponse();
    if (isSet(object.gasInfo)) obj.gasInfo = GasInfo.fromJSON(object.gasInfo);
    if (isSet(object.result)) obj.result = Result.fromJSON(object.result);
    return obj;
  },
  toJSON(message: SimulationResponse): unknown {
    const obj: any = {};
    message.gasInfo !== undefined && (obj.gasInfo = message.gasInfo ? GasInfo.toJSON(message.gasInfo) : undefined);
    message.result !== undefined && (obj.result = message.result ? Result.toJSON(message.result) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<SimulationResponse>): SimulationResponse {
    const message = createBaseSimulationResponse();
    if (object.gasInfo !== undefined && object.gasInfo !== null) {
      message.gasInfo = GasInfo.fromPartial(object.gasInfo);
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = Result.fromPartial(object.result);
    }
    return message;
  },
  fromSDK(object: SimulationResponseSDKType): SimulationResponse {
    return {
      gasInfo: object.gas_info ? GasInfo.fromSDK(object.gas_info) : undefined,
      result: object.result ? Result.fromSDK(object.result) : undefined
    };
  },
  toSDK(message: SimulationResponse): SimulationResponseSDKType {
    const obj: any = {};
    message.gasInfo !== undefined && (obj.gas_info = message.gasInfo ? GasInfo.toSDK(message.gasInfo) : undefined);
    message.result !== undefined && (obj.result = message.result ? Result.toSDK(message.result) : undefined);
    return obj;
  },
  fromAmino(object: SimulationResponseAmino): SimulationResponse {
    const message = createBaseSimulationResponse();
    if (object.gas_info !== undefined && object.gas_info !== null) {
      message.gasInfo = GasInfo.fromAmino(object.gas_info);
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = Result.fromAmino(object.result);
    }
    return message;
  },
  toAmino(message: SimulationResponse): SimulationResponseAmino {
    const obj: any = {};
    obj.gas_info = message.gasInfo ? GasInfo.toAmino(message.gasInfo) : undefined;
    obj.result = message.result ? Result.toAmino(message.result) : undefined;
    return obj;
  },
  fromAminoMsg(object: SimulationResponseAminoMsg): SimulationResponse {
    return SimulationResponse.fromAmino(object.value);
  },
  toAminoMsg(message: SimulationResponse): SimulationResponseAminoMsg {
    return {
      type: "cosmos-sdk/SimulationResponse",
      value: SimulationResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: SimulationResponseProtoMsg): SimulationResponse {
    return SimulationResponse.decode(message.value);
  },
  toProto(message: SimulationResponse): Uint8Array {
    return SimulationResponse.encode(message).finish();
  },
  toProtoMsg(message: SimulationResponse): SimulationResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.SimulationResponse",
      value: SimulationResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SimulationResponse.typeUrl, SimulationResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(SimulationResponse.aminoType, SimulationResponse.typeUrl);
function createBaseMsgData(): MsgData {
  return {
    msgType: "",
    data: new Uint8Array()
  };
}
export const MsgData = {
  typeUrl: "/cosmos.base.abci.v1beta1.MsgData",
  aminoType: "cosmos-sdk/MsgData",
  is(o: any): o is MsgData {
    return o && (o.$typeUrl === MsgData.typeUrl || typeof o.msgType === "string" && (o.data instanceof Uint8Array || typeof o.data === "string"));
  },
  isSDK(o: any): o is MsgDataSDKType {
    return o && (o.$typeUrl === MsgData.typeUrl || typeof o.msg_type === "string" && (o.data instanceof Uint8Array || typeof o.data === "string"));
  },
  isAmino(o: any): o is MsgDataAmino {
    return o && (o.$typeUrl === MsgData.typeUrl || typeof o.msg_type === "string" && (o.data instanceof Uint8Array || typeof o.data === "string"));
  },
  encode(message: MsgData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msgType !== undefined) {
      writer.uint32(10).string(message.msgType);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgType = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgData {
    const obj = createBaseMsgData();
    if (isSet(object.msgType)) obj.msgType = String(object.msgType);
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    return obj;
  },
  toJSON(message: MsgData): unknown {
    const obj: any = {};
    message.msgType !== undefined && (obj.msgType = message.msgType);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgData>): MsgData {
    const message = createBaseMsgData();
    message.msgType = object.msgType ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MsgDataSDKType): MsgData {
    return {
      msgType: object?.msg_type,
      data: object?.data
    };
  },
  toSDK(message: MsgData): MsgDataSDKType {
    const obj: any = {};
    obj.msg_type = message.msgType;
    obj.data = message.data;
    return obj;
  },
  fromAmino(object: MsgDataAmino): MsgData {
    const message = createBaseMsgData();
    if (object.msg_type !== undefined && object.msg_type !== null) {
      message.msgType = object.msg_type;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: MsgData): MsgDataAmino {
    const obj: any = {};
    obj.msg_type = message.msgType;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDataAminoMsg): MsgData {
    return MsgData.fromAmino(object.value);
  },
  toAminoMsg(message: MsgData): MsgDataAminoMsg {
    return {
      type: "cosmos-sdk/MsgData",
      value: MsgData.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDataProtoMsg): MsgData {
    return MsgData.decode(message.value);
  },
  toProto(message: MsgData): Uint8Array {
    return MsgData.encode(message).finish();
  },
  toProtoMsg(message: MsgData): MsgDataProtoMsg {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.MsgData",
      value: MsgData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgData.typeUrl, MsgData);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgData.aminoType, MsgData.typeUrl);
function createBaseTxMsgData(): TxMsgData {
  return {
    data: [],
    msgResponses: []
  };
}
export const TxMsgData = {
  typeUrl: "/cosmos.base.abci.v1beta1.TxMsgData",
  aminoType: "cosmos-sdk/TxMsgData",
  is(o: any): o is TxMsgData {
    return o && (o.$typeUrl === TxMsgData.typeUrl || Array.isArray(o.data) && (!o.data.length || MsgData.is(o.data[0])) && Array.isArray(o.msgResponses) && (!o.msgResponses.length || Any.is(o.msgResponses[0])));
  },
  isSDK(o: any): o is TxMsgDataSDKType {
    return o && (o.$typeUrl === TxMsgData.typeUrl || Array.isArray(o.data) && (!o.data.length || MsgData.isSDK(o.data[0])) && Array.isArray(o.msg_responses) && (!o.msg_responses.length || Any.isSDK(o.msg_responses[0])));
  },
  isAmino(o: any): o is TxMsgDataAmino {
    return o && (o.$typeUrl === TxMsgData.typeUrl || Array.isArray(o.data) && (!o.data.length || MsgData.isAmino(o.data[0])) && Array.isArray(o.msg_responses) && (!o.msg_responses.length || Any.isAmino(o.msg_responses[0])));
  },
  encode(message: TxMsgData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.data) {
      MsgData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.msgResponses) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxMsgData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxMsgData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(MsgData.decode(reader, reader.uint32()));
          break;
        case 2:
          message.msgResponses.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TxMsgData {
    const obj = createBaseTxMsgData();
    if (Array.isArray(object?.data)) obj.data = object.data.map((e: any) => MsgData.fromJSON(e));
    if (Array.isArray(object?.msgResponses)) obj.msgResponses = object.msgResponses.map((e: any) => Any.fromJSON(e));
    return obj;
  },
  toJSON(message: TxMsgData): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? MsgData.toJSON(e) : undefined);
    } else {
      obj.data = [];
    }
    if (message.msgResponses) {
      obj.msgResponses = message.msgResponses.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.msgResponses = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<TxMsgData>): TxMsgData {
    const message = createBaseTxMsgData();
    message.data = object.data?.map(e => MsgData.fromPartial(e)) || [];
    message.msgResponses = object.msgResponses?.map(e => Any.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: TxMsgDataSDKType): TxMsgData {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => MsgData.fromSDK(e)) : [],
      msgResponses: Array.isArray(object?.msg_responses) ? object.msg_responses.map((e: any) => Any.fromSDK(e)) : []
    };
  },
  toSDK(message: TxMsgData): TxMsgDataSDKType {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? MsgData.toSDK(e) : undefined);
    } else {
      obj.data = [];
    }
    if (message.msgResponses) {
      obj.msg_responses = message.msgResponses.map(e => e ? Any.toSDK(e) : undefined);
    } else {
      obj.msg_responses = [];
    }
    return obj;
  },
  fromAmino(object: TxMsgDataAmino): TxMsgData {
    const message = createBaseTxMsgData();
    message.data = object.data?.map(e => MsgData.fromAmino(e)) || [];
    message.msgResponses = object.msg_responses?.map(e => Any.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TxMsgData): TxMsgDataAmino {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? MsgData.toAmino(e) : undefined);
    } else {
      obj.data = [];
    }
    if (message.msgResponses) {
      obj.msg_responses = message.msgResponses.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.msg_responses = [];
    }
    return obj;
  },
  fromAminoMsg(object: TxMsgDataAminoMsg): TxMsgData {
    return TxMsgData.fromAmino(object.value);
  },
  toAminoMsg(message: TxMsgData): TxMsgDataAminoMsg {
    return {
      type: "cosmos-sdk/TxMsgData",
      value: TxMsgData.toAmino(message)
    };
  },
  fromProtoMsg(message: TxMsgDataProtoMsg): TxMsgData {
    return TxMsgData.decode(message.value);
  },
  toProto(message: TxMsgData): Uint8Array {
    return TxMsgData.encode(message).finish();
  },
  toProtoMsg(message: TxMsgData): TxMsgDataProtoMsg {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.TxMsgData",
      value: TxMsgData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TxMsgData.typeUrl, TxMsgData);
GlobalDecoderRegistry.registerAminoProtoMapping(TxMsgData.aminoType, TxMsgData.typeUrl);
function createBaseSearchTxsResult(): SearchTxsResult {
  return {
    totalCount: BigInt(0),
    count: BigInt(0),
    pageNumber: BigInt(0),
    pageTotal: BigInt(0),
    limit: BigInt(0),
    txs: []
  };
}
export const SearchTxsResult = {
  typeUrl: "/cosmos.base.abci.v1beta1.SearchTxsResult",
  aminoType: "cosmos-sdk/SearchTxsResult",
  is(o: any): o is SearchTxsResult {
    return o && (o.$typeUrl === SearchTxsResult.typeUrl || typeof o.totalCount === "bigint" && typeof o.count === "bigint" && typeof o.pageNumber === "bigint" && typeof o.pageTotal === "bigint" && typeof o.limit === "bigint" && Array.isArray(o.txs) && (!o.txs.length || TxResponse.is(o.txs[0])));
  },
  isSDK(o: any): o is SearchTxsResultSDKType {
    return o && (o.$typeUrl === SearchTxsResult.typeUrl || typeof o.total_count === "bigint" && typeof o.count === "bigint" && typeof o.page_number === "bigint" && typeof o.page_total === "bigint" && typeof o.limit === "bigint" && Array.isArray(o.txs) && (!o.txs.length || TxResponse.isSDK(o.txs[0])));
  },
  isAmino(o: any): o is SearchTxsResultAmino {
    return o && (o.$typeUrl === SearchTxsResult.typeUrl || typeof o.total_count === "bigint" && typeof o.count === "bigint" && typeof o.page_number === "bigint" && typeof o.page_total === "bigint" && typeof o.limit === "bigint" && Array.isArray(o.txs) && (!o.txs.length || TxResponse.isAmino(o.txs[0])));
  },
  encode(message: SearchTxsResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalCount !== undefined) {
      writer.uint32(8).uint64(message.totalCount);
    }
    if (message.count !== undefined) {
      writer.uint32(16).uint64(message.count);
    }
    if (message.pageNumber !== undefined) {
      writer.uint32(24).uint64(message.pageNumber);
    }
    if (message.pageTotal !== undefined) {
      writer.uint32(32).uint64(message.pageTotal);
    }
    if (message.limit !== undefined) {
      writer.uint32(40).uint64(message.limit);
    }
    for (const v of message.txs) {
      TxResponse.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SearchTxsResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchTxsResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalCount = reader.uint64();
          break;
        case 2:
          message.count = reader.uint64();
          break;
        case 3:
          message.pageNumber = reader.uint64();
          break;
        case 4:
          message.pageTotal = reader.uint64();
          break;
        case 5:
          message.limit = reader.uint64();
          break;
        case 6:
          message.txs.push(TxResponse.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SearchTxsResult {
    const obj = createBaseSearchTxsResult();
    if (isSet(object.totalCount)) obj.totalCount = BigInt(object.totalCount.toString());
    if (isSet(object.count)) obj.count = BigInt(object.count.toString());
    if (isSet(object.pageNumber)) obj.pageNumber = BigInt(object.pageNumber.toString());
    if (isSet(object.pageTotal)) obj.pageTotal = BigInt(object.pageTotal.toString());
    if (isSet(object.limit)) obj.limit = BigInt(object.limit.toString());
    if (Array.isArray(object?.txs)) obj.txs = object.txs.map((e: any) => TxResponse.fromJSON(e));
    return obj;
  },
  toJSON(message: SearchTxsResult): unknown {
    const obj: any = {};
    message.totalCount !== undefined && (obj.totalCount = (message.totalCount || BigInt(0)).toString());
    message.count !== undefined && (obj.count = (message.count || BigInt(0)).toString());
    message.pageNumber !== undefined && (obj.pageNumber = (message.pageNumber || BigInt(0)).toString());
    message.pageTotal !== undefined && (obj.pageTotal = (message.pageTotal || BigInt(0)).toString());
    message.limit !== undefined && (obj.limit = (message.limit || BigInt(0)).toString());
    if (message.txs) {
      obj.txs = message.txs.map(e => e ? TxResponse.toJSON(e) : undefined);
    } else {
      obj.txs = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<SearchTxsResult>): SearchTxsResult {
    const message = createBaseSearchTxsResult();
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = BigInt(object.totalCount.toString());
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = BigInt(object.count.toString());
    }
    if (object.pageNumber !== undefined && object.pageNumber !== null) {
      message.pageNumber = BigInt(object.pageNumber.toString());
    }
    if (object.pageTotal !== undefined && object.pageTotal !== null) {
      message.pageTotal = BigInt(object.pageTotal.toString());
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = BigInt(object.limit.toString());
    }
    message.txs = object.txs?.map(e => TxResponse.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: SearchTxsResultSDKType): SearchTxsResult {
    return {
      totalCount: object?.total_count,
      count: object?.count,
      pageNumber: object?.page_number,
      pageTotal: object?.page_total,
      limit: object?.limit,
      txs: Array.isArray(object?.txs) ? object.txs.map((e: any) => TxResponse.fromSDK(e)) : []
    };
  },
  toSDK(message: SearchTxsResult): SearchTxsResultSDKType {
    const obj: any = {};
    obj.total_count = message.totalCount;
    obj.count = message.count;
    obj.page_number = message.pageNumber;
    obj.page_total = message.pageTotal;
    obj.limit = message.limit;
    if (message.txs) {
      obj.txs = message.txs.map(e => e ? TxResponse.toSDK(e) : undefined);
    } else {
      obj.txs = [];
    }
    return obj;
  },
  fromAmino(object: SearchTxsResultAmino): SearchTxsResult {
    const message = createBaseSearchTxsResult();
    if (object.total_count !== undefined && object.total_count !== null) {
      message.totalCount = BigInt(object.total_count);
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = BigInt(object.count);
    }
    if (object.page_number !== undefined && object.page_number !== null) {
      message.pageNumber = BigInt(object.page_number);
    }
    if (object.page_total !== undefined && object.page_total !== null) {
      message.pageTotal = BigInt(object.page_total);
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = BigInt(object.limit);
    }
    message.txs = object.txs?.map(e => TxResponse.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SearchTxsResult): SearchTxsResultAmino {
    const obj: any = {};
    obj.total_count = message.totalCount ? message.totalCount.toString() : undefined;
    obj.count = message.count ? message.count.toString() : undefined;
    obj.page_number = message.pageNumber ? message.pageNumber.toString() : undefined;
    obj.page_total = message.pageTotal ? message.pageTotal.toString() : undefined;
    obj.limit = message.limit ? message.limit.toString() : undefined;
    if (message.txs) {
      obj.txs = message.txs.map(e => e ? TxResponse.toAmino(e) : undefined);
    } else {
      obj.txs = [];
    }
    return obj;
  },
  fromAminoMsg(object: SearchTxsResultAminoMsg): SearchTxsResult {
    return SearchTxsResult.fromAmino(object.value);
  },
  toAminoMsg(message: SearchTxsResult): SearchTxsResultAminoMsg {
    return {
      type: "cosmos-sdk/SearchTxsResult",
      value: SearchTxsResult.toAmino(message)
    };
  },
  fromProtoMsg(message: SearchTxsResultProtoMsg): SearchTxsResult {
    return SearchTxsResult.decode(message.value);
  },
  toProto(message: SearchTxsResult): Uint8Array {
    return SearchTxsResult.encode(message).finish();
  },
  toProtoMsg(message: SearchTxsResult): SearchTxsResultProtoMsg {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.SearchTxsResult",
      value: SearchTxsResult.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SearchTxsResult.typeUrl, SearchTxsResult);
GlobalDecoderRegistry.registerAminoProtoMapping(SearchTxsResult.aminoType, SearchTxsResult.typeUrl);