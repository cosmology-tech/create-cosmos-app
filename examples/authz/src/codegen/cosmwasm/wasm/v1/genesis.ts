//@ts-nocheck
import { MsgStoreCode, MsgStoreCodeAmino, MsgStoreCodeSDKType, MsgInstantiateContract, MsgInstantiateContractAmino, MsgInstantiateContractSDKType, MsgExecuteContract, MsgExecuteContractAmino, MsgExecuteContractSDKType } from "./tx";
import { Params, ParamsAmino, ParamsSDKType, CodeInfo, CodeInfoAmino, CodeInfoSDKType, ContractInfo, ContractInfoAmino, ContractInfoSDKType, Model, ModelAmino, ModelSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmwasm.wasm.v1";
/** GenesisState - genesis state of x/wasm */
export interface GenesisState {
  params: Params;
  codes: Code[];
  contracts: Contract[];
  sequences: Sequence[];
  genMsgs: GenesisState_GenMsgs[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState - genesis state of x/wasm */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  codes?: CodeAmino[];
  contracts?: ContractAmino[];
  sequences?: SequenceAmino[];
  gen_msgs?: GenesisState_GenMsgsAmino[];
}
export interface GenesisStateAminoMsg {
  type: "wasm/GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState - genesis state of x/wasm */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  codes: CodeSDKType[];
  contracts: ContractSDKType[];
  sequences: SequenceSDKType[];
  gen_msgs: GenesisState_GenMsgsSDKType[];
}
/**
 * GenMsgs define the messages that can be executed during genesis phase in
 * order. The intention is to have more human readable data that is auditable.
 */
export interface GenesisState_GenMsgs {
  storeCode?: MsgStoreCode;
  instantiateContract?: MsgInstantiateContract;
  executeContract?: MsgExecuteContract;
}
export interface GenesisState_GenMsgsProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.GenMsgs";
  value: Uint8Array;
}
/**
 * GenMsgs define the messages that can be executed during genesis phase in
 * order. The intention is to have more human readable data that is auditable.
 */
export interface GenesisState_GenMsgsAmino {
  store_code?: MsgStoreCodeAmino;
  instantiate_contract?: MsgInstantiateContractAmino;
  execute_contract?: MsgExecuteContractAmino;
}
export interface GenesisState_GenMsgsAminoMsg {
  type: "wasm/GenMsgs";
  value: GenesisState_GenMsgsAmino;
}
/**
 * GenMsgs define the messages that can be executed during genesis phase in
 * order. The intention is to have more human readable data that is auditable.
 */
export interface GenesisState_GenMsgsSDKType {
  store_code?: MsgStoreCodeSDKType;
  instantiate_contract?: MsgInstantiateContractSDKType;
  execute_contract?: MsgExecuteContractSDKType;
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface Code {
  codeId: bigint;
  codeInfo: CodeInfo;
  codeBytes: Uint8Array;
  /** Pinned to wasmvm cache */
  pinned: boolean;
}
export interface CodeProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.Code";
  value: Uint8Array;
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface CodeAmino {
  code_id?: string;
  code_info?: CodeInfoAmino;
  code_bytes?: string;
  /** Pinned to wasmvm cache */
  pinned?: boolean;
}
export interface CodeAminoMsg {
  type: "wasm/Code";
  value: CodeAmino;
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface CodeSDKType {
  code_id: bigint;
  code_info: CodeInfoSDKType;
  code_bytes: Uint8Array;
  pinned: boolean;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface Contract {
  contractAddress: string;
  contractInfo: ContractInfo;
  contractState: Model[];
}
export interface ContractProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.Contract";
  value: Uint8Array;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface ContractAmino {
  contract_address?: string;
  contract_info?: ContractInfoAmino;
  contract_state?: ModelAmino[];
}
export interface ContractAminoMsg {
  type: "wasm/Contract";
  value: ContractAmino;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface ContractSDKType {
  contract_address: string;
  contract_info: ContractInfoSDKType;
  contract_state: ModelSDKType[];
}
/** Sequence key and value of an id generation counter */
export interface Sequence {
  idKey: Uint8Array;
  value: bigint;
}
export interface SequenceProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.Sequence";
  value: Uint8Array;
}
/** Sequence key and value of an id generation counter */
export interface SequenceAmino {
  id_key?: string;
  value?: string;
}
export interface SequenceAminoMsg {
  type: "wasm/Sequence";
  value: SequenceAmino;
}
/** Sequence key and value of an id generation counter */
export interface SequenceSDKType {
  id_key: Uint8Array;
  value: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    codes: [],
    contracts: [],
    sequences: [],
    genMsgs: []
  };
}
export const GenesisState = {
  typeUrl: "/cosmwasm.wasm.v1.GenesisState",
  aminoType: "wasm/GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.codes) && (!o.codes.length || Code.is(o.codes[0])) && Array.isArray(o.contracts) && (!o.contracts.length || Contract.is(o.contracts[0])) && Array.isArray(o.sequences) && (!o.sequences.length || Sequence.is(o.sequences[0])) && Array.isArray(o.genMsgs) && (!o.genMsgs.length || GenesisState_GenMsgs.is(o.genMsgs[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.codes) && (!o.codes.length || Code.isSDK(o.codes[0])) && Array.isArray(o.contracts) && (!o.contracts.length || Contract.isSDK(o.contracts[0])) && Array.isArray(o.sequences) && (!o.sequences.length || Sequence.isSDK(o.sequences[0])) && Array.isArray(o.gen_msgs) && (!o.gen_msgs.length || GenesisState_GenMsgs.isSDK(o.gen_msgs[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.codes) && (!o.codes.length || Code.isAmino(o.codes[0])) && Array.isArray(o.contracts) && (!o.contracts.length || Contract.isAmino(o.contracts[0])) && Array.isArray(o.sequences) && (!o.sequences.length || Sequence.isAmino(o.sequences[0])) && Array.isArray(o.gen_msgs) && (!o.gen_msgs.length || GenesisState_GenMsgs.isAmino(o.gen_msgs[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.codes) {
      Code.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.contracts) {
      Contract.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.sequences) {
      Sequence.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.genMsgs) {
      GenesisState_GenMsgs.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.codes.push(Code.decode(reader, reader.uint32()));
          break;
        case 3:
          message.contracts.push(Contract.decode(reader, reader.uint32()));
          break;
        case 4:
          message.sequences.push(Sequence.decode(reader, reader.uint32()));
          break;
        case 5:
          message.genMsgs.push(GenesisState_GenMsgs.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (Array.isArray(object?.codes)) obj.codes = object.codes.map((e: any) => Code.fromJSON(e));
    if (Array.isArray(object?.contracts)) obj.contracts = object.contracts.map((e: any) => Contract.fromJSON(e));
    if (Array.isArray(object?.sequences)) obj.sequences = object.sequences.map((e: any) => Sequence.fromJSON(e));
    if (Array.isArray(object?.genMsgs)) obj.genMsgs = object.genMsgs.map((e: any) => GenesisState_GenMsgs.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.codes) {
      obj.codes = message.codes.map(e => e ? Code.toJSON(e) : undefined);
    } else {
      obj.codes = [];
    }
    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e ? Contract.toJSON(e) : undefined);
    } else {
      obj.contracts = [];
    }
    if (message.sequences) {
      obj.sequences = message.sequences.map(e => e ? Sequence.toJSON(e) : undefined);
    } else {
      obj.sequences = [];
    }
    if (message.genMsgs) {
      obj.genMsgs = message.genMsgs.map(e => e ? GenesisState_GenMsgs.toJSON(e) : undefined);
    } else {
      obj.genMsgs = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.codes = object.codes?.map(e => Code.fromPartial(e)) || [];
    message.contracts = object.contracts?.map(e => Contract.fromPartial(e)) || [];
    message.sequences = object.sequences?.map(e => Sequence.fromPartial(e)) || [];
    message.genMsgs = object.genMsgs?.map(e => GenesisState_GenMsgs.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined,
      codes: Array.isArray(object?.codes) ? object.codes.map((e: any) => Code.fromSDK(e)) : [],
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => Contract.fromSDK(e)) : [],
      sequences: Array.isArray(object?.sequences) ? object.sequences.map((e: any) => Sequence.fromSDK(e)) : [],
      genMsgs: Array.isArray(object?.gen_msgs) ? object.gen_msgs.map((e: any) => GenesisState_GenMsgs.fromSDK(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    if (message.codes) {
      obj.codes = message.codes.map(e => e ? Code.toSDK(e) : undefined);
    } else {
      obj.codes = [];
    }
    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e ? Contract.toSDK(e) : undefined);
    } else {
      obj.contracts = [];
    }
    if (message.sequences) {
      obj.sequences = message.sequences.map(e => e ? Sequence.toSDK(e) : undefined);
    } else {
      obj.sequences = [];
    }
    if (message.genMsgs) {
      obj.gen_msgs = message.genMsgs.map(e => e ? GenesisState_GenMsgs.toSDK(e) : undefined);
    } else {
      obj.gen_msgs = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.codes = object.codes?.map(e => Code.fromAmino(e)) || [];
    message.contracts = object.contracts?.map(e => Contract.fromAmino(e)) || [];
    message.sequences = object.sequences?.map(e => Sequence.fromAmino(e)) || [];
    message.genMsgs = object.gen_msgs?.map(e => GenesisState_GenMsgs.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.codes) {
      obj.codes = message.codes.map(e => e ? Code.toAmino(e) : undefined);
    } else {
      obj.codes = message.codes;
    }
    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e ? Contract.toAmino(e) : undefined);
    } else {
      obj.contracts = message.contracts;
    }
    if (message.sequences) {
      obj.sequences = message.sequences.map(e => e ? Sequence.toAmino(e) : undefined);
    } else {
      obj.sequences = message.sequences;
    }
    if (message.genMsgs) {
      obj.gen_msgs = message.genMsgs.map(e => e ? GenesisState_GenMsgs.toAmino(e) : undefined);
    } else {
      obj.gen_msgs = message.genMsgs;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "wasm/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisState.aminoType, GenesisState.typeUrl);
function createBaseGenesisState_GenMsgs(): GenesisState_GenMsgs {
  return {
    storeCode: undefined,
    instantiateContract: undefined,
    executeContract: undefined
  };
}
export const GenesisState_GenMsgs = {
  typeUrl: "/cosmwasm.wasm.v1.GenMsgs",
  aminoType: "wasm/GenMsgs",
  is(o: any): o is GenesisState_GenMsgs {
    return o && o.$typeUrl === GenesisState_GenMsgs.typeUrl;
  },
  isSDK(o: any): o is GenesisState_GenMsgsSDKType {
    return o && o.$typeUrl === GenesisState_GenMsgs.typeUrl;
  },
  isAmino(o: any): o is GenesisState_GenMsgsAmino {
    return o && o.$typeUrl === GenesisState_GenMsgs.typeUrl;
  },
  encode(message: GenesisState_GenMsgs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.storeCode !== undefined) {
      MsgStoreCode.encode(message.storeCode, writer.uint32(10).fork()).ldelim();
    }
    if (message.instantiateContract !== undefined) {
      MsgInstantiateContract.encode(message.instantiateContract, writer.uint32(18).fork()).ldelim();
    }
    if (message.executeContract !== undefined) {
      MsgExecuteContract.encode(message.executeContract, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState_GenMsgs {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_GenMsgs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storeCode = MsgStoreCode.decode(reader, reader.uint32());
          break;
        case 2:
          message.instantiateContract = MsgInstantiateContract.decode(reader, reader.uint32());
          break;
        case 3:
          message.executeContract = MsgExecuteContract.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState_GenMsgs {
    const obj = createBaseGenesisState_GenMsgs();
    if (isSet(object.storeCode)) obj.storeCode = MsgStoreCode.fromJSON(object.storeCode);
    if (isSet(object.instantiateContract)) obj.instantiateContract = MsgInstantiateContract.fromJSON(object.instantiateContract);
    if (isSet(object.executeContract)) obj.executeContract = MsgExecuteContract.fromJSON(object.executeContract);
    return obj;
  },
  toJSON(message: GenesisState_GenMsgs): JsonSafe<GenesisState_GenMsgs> {
    const obj: any = {};
    message.storeCode !== undefined && (obj.storeCode = message.storeCode ? MsgStoreCode.toJSON(message.storeCode) : undefined);
    message.instantiateContract !== undefined && (obj.instantiateContract = message.instantiateContract ? MsgInstantiateContract.toJSON(message.instantiateContract) : undefined);
    message.executeContract !== undefined && (obj.executeContract = message.executeContract ? MsgExecuteContract.toJSON(message.executeContract) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState_GenMsgs>): GenesisState_GenMsgs {
    const message = createBaseGenesisState_GenMsgs();
    if (object.storeCode !== undefined && object.storeCode !== null) {
      message.storeCode = MsgStoreCode.fromPartial(object.storeCode);
    }
    if (object.instantiateContract !== undefined && object.instantiateContract !== null) {
      message.instantiateContract = MsgInstantiateContract.fromPartial(object.instantiateContract);
    }
    if (object.executeContract !== undefined && object.executeContract !== null) {
      message.executeContract = MsgExecuteContract.fromPartial(object.executeContract);
    }
    return message;
  },
  fromSDK(object: GenesisState_GenMsgsSDKType): GenesisState_GenMsgs {
    return {
      storeCode: object.store_code ? MsgStoreCode.fromSDK(object.store_code) : undefined,
      instantiateContract: object.instantiate_contract ? MsgInstantiateContract.fromSDK(object.instantiate_contract) : undefined,
      executeContract: object.execute_contract ? MsgExecuteContract.fromSDK(object.execute_contract) : undefined
    };
  },
  toSDK(message: GenesisState_GenMsgs): GenesisState_GenMsgsSDKType {
    const obj: any = {};
    message.storeCode !== undefined && (obj.store_code = message.storeCode ? MsgStoreCode.toSDK(message.storeCode) : undefined);
    message.instantiateContract !== undefined && (obj.instantiate_contract = message.instantiateContract ? MsgInstantiateContract.toSDK(message.instantiateContract) : undefined);
    message.executeContract !== undefined && (obj.execute_contract = message.executeContract ? MsgExecuteContract.toSDK(message.executeContract) : undefined);
    return obj;
  },
  fromAmino(object: GenesisState_GenMsgsAmino): GenesisState_GenMsgs {
    const message = createBaseGenesisState_GenMsgs();
    if (object.store_code !== undefined && object.store_code !== null) {
      message.storeCode = MsgStoreCode.fromAmino(object.store_code);
    }
    if (object.instantiate_contract !== undefined && object.instantiate_contract !== null) {
      message.instantiateContract = MsgInstantiateContract.fromAmino(object.instantiate_contract);
    }
    if (object.execute_contract !== undefined && object.execute_contract !== null) {
      message.executeContract = MsgExecuteContract.fromAmino(object.execute_contract);
    }
    return message;
  },
  toAmino(message: GenesisState_GenMsgs): GenesisState_GenMsgsAmino {
    const obj: any = {};
    obj.store_code = message.storeCode ? MsgStoreCode.toAmino(message.storeCode) : undefined;
    obj.instantiate_contract = message.instantiateContract ? MsgInstantiateContract.toAmino(message.instantiateContract) : undefined;
    obj.execute_contract = message.executeContract ? MsgExecuteContract.toAmino(message.executeContract) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisState_GenMsgsAminoMsg): GenesisState_GenMsgs {
    return GenesisState_GenMsgs.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState_GenMsgs): GenesisState_GenMsgsAminoMsg {
    return {
      type: "wasm/GenMsgs",
      value: GenesisState_GenMsgs.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisState_GenMsgsProtoMsg): GenesisState_GenMsgs {
    return GenesisState_GenMsgs.decode(message.value);
  },
  toProto(message: GenesisState_GenMsgs): Uint8Array {
    return GenesisState_GenMsgs.encode(message).finish();
  },
  toProtoMsg(message: GenesisState_GenMsgs): GenesisState_GenMsgsProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.GenMsgs",
      value: GenesisState_GenMsgs.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState_GenMsgs.typeUrl, GenesisState_GenMsgs);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisState_GenMsgs.aminoType, GenesisState_GenMsgs.typeUrl);
function createBaseCode(): Code {
  return {
    codeId: BigInt(0),
    codeInfo: CodeInfo.fromPartial({}),
    codeBytes: new Uint8Array(),
    pinned: false
  };
}
export const Code = {
  typeUrl: "/cosmwasm.wasm.v1.Code",
  aminoType: "wasm/Code",
  is(o: any): o is Code {
    return o && (o.$typeUrl === Code.typeUrl || typeof o.codeId === "bigint" && CodeInfo.is(o.codeInfo) && (o.codeBytes instanceof Uint8Array || typeof o.codeBytes === "string") && typeof o.pinned === "boolean");
  },
  isSDK(o: any): o is CodeSDKType {
    return o && (o.$typeUrl === Code.typeUrl || typeof o.code_id === "bigint" && CodeInfo.isSDK(o.code_info) && (o.code_bytes instanceof Uint8Array || typeof o.code_bytes === "string") && typeof o.pinned === "boolean");
  },
  isAmino(o: any): o is CodeAmino {
    return o && (o.$typeUrl === Code.typeUrl || typeof o.code_id === "bigint" && CodeInfo.isAmino(o.code_info) && (o.code_bytes instanceof Uint8Array || typeof o.code_bytes === "string") && typeof o.pinned === "boolean");
  },
  encode(message: Code, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== undefined) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.codeInfo !== undefined) {
      CodeInfo.encode(message.codeInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.codeBytes.length !== 0) {
      writer.uint32(26).bytes(message.codeBytes);
    }
    if (message.pinned !== undefined) {
      writer.uint32(32).bool(message.pinned);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Code {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        case 2:
          message.codeInfo = CodeInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.codeBytes = reader.bytes();
          break;
        case 4:
          message.pinned = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Code {
    const obj = createBaseCode();
    if (isSet(object.codeId)) obj.codeId = BigInt(object.codeId.toString());
    if (isSet(object.codeInfo)) obj.codeInfo = CodeInfo.fromJSON(object.codeInfo);
    if (isSet(object.codeBytes)) obj.codeBytes = bytesFromBase64(object.codeBytes);
    if (isSet(object.pinned)) obj.pinned = Boolean(object.pinned);
    return obj;
  },
  toJSON(message: Code): JsonSafe<Code> {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
    message.codeInfo !== undefined && (obj.codeInfo = message.codeInfo ? CodeInfo.toJSON(message.codeInfo) : undefined);
    message.codeBytes !== undefined && (obj.codeBytes = base64FromBytes(message.codeBytes !== undefined ? message.codeBytes : new Uint8Array()));
    message.pinned !== undefined && (obj.pinned = message.pinned);
    return obj;
  },
  fromPartial(object: DeepPartial<Code>): Code {
    const message = createBaseCode();
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = BigInt(object.codeId.toString());
    }
    if (object.codeInfo !== undefined && object.codeInfo !== null) {
      message.codeInfo = CodeInfo.fromPartial(object.codeInfo);
    }
    message.codeBytes = object.codeBytes ?? new Uint8Array();
    message.pinned = object.pinned ?? false;
    return message;
  },
  fromSDK(object: CodeSDKType): Code {
    return {
      codeId: object?.code_id,
      codeInfo: object.code_info ? CodeInfo.fromSDK(object.code_info) : undefined,
      codeBytes: object?.code_bytes,
      pinned: object?.pinned
    };
  },
  toSDK(message: Code): CodeSDKType {
    const obj: any = {};
    obj.code_id = message.codeId;
    message.codeInfo !== undefined && (obj.code_info = message.codeInfo ? CodeInfo.toSDK(message.codeInfo) : undefined);
    obj.code_bytes = message.codeBytes;
    obj.pinned = message.pinned;
    return obj;
  },
  fromAmino(object: CodeAmino): Code {
    const message = createBaseCode();
    if (object.code_id !== undefined && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.code_info !== undefined && object.code_info !== null) {
      message.codeInfo = CodeInfo.fromAmino(object.code_info);
    }
    if (object.code_bytes !== undefined && object.code_bytes !== null) {
      message.codeBytes = bytesFromBase64(object.code_bytes);
    }
    if (object.pinned !== undefined && object.pinned !== null) {
      message.pinned = object.pinned;
    }
    return message;
  },
  toAmino(message: Code): CodeAmino {
    const obj: any = {};
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId.toString() : undefined;
    obj.code_info = message.codeInfo ? CodeInfo.toAmino(message.codeInfo) : undefined;
    obj.code_bytes = message.codeBytes ? base64FromBytes(message.codeBytes) : undefined;
    obj.pinned = message.pinned === false ? undefined : message.pinned;
    return obj;
  },
  fromAminoMsg(object: CodeAminoMsg): Code {
    return Code.fromAmino(object.value);
  },
  toAminoMsg(message: Code): CodeAminoMsg {
    return {
      type: "wasm/Code",
      value: Code.toAmino(message)
    };
  },
  fromProtoMsg(message: CodeProtoMsg): Code {
    return Code.decode(message.value);
  },
  toProto(message: Code): Uint8Array {
    return Code.encode(message).finish();
  },
  toProtoMsg(message: Code): CodeProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.Code",
      value: Code.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Code.typeUrl, Code);
GlobalDecoderRegistry.registerAminoProtoMapping(Code.aminoType, Code.typeUrl);
function createBaseContract(): Contract {
  return {
    contractAddress: "",
    contractInfo: ContractInfo.fromPartial({}),
    contractState: []
  };
}
export const Contract = {
  typeUrl: "/cosmwasm.wasm.v1.Contract",
  aminoType: "wasm/Contract",
  is(o: any): o is Contract {
    return o && (o.$typeUrl === Contract.typeUrl || typeof o.contractAddress === "string" && ContractInfo.is(o.contractInfo) && Array.isArray(o.contractState) && (!o.contractState.length || Model.is(o.contractState[0])));
  },
  isSDK(o: any): o is ContractSDKType {
    return o && (o.$typeUrl === Contract.typeUrl || typeof o.contract_address === "string" && ContractInfo.isSDK(o.contract_info) && Array.isArray(o.contract_state) && (!o.contract_state.length || Model.isSDK(o.contract_state[0])));
  },
  isAmino(o: any): o is ContractAmino {
    return o && (o.$typeUrl === Contract.typeUrl || typeof o.contract_address === "string" && ContractInfo.isAmino(o.contract_info) && Array.isArray(o.contract_state) && (!o.contract_state.length || Model.isAmino(o.contract_state[0])));
  },
  encode(message: Contract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== undefined) {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.contractInfo !== undefined) {
      ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.contractState) {
      Model.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Contract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.contractInfo = ContractInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.contractState.push(Model.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Contract {
    const obj = createBaseContract();
    if (isSet(object.contractAddress)) obj.contractAddress = String(object.contractAddress);
    if (isSet(object.contractInfo)) obj.contractInfo = ContractInfo.fromJSON(object.contractInfo);
    if (Array.isArray(object?.contractState)) obj.contractState = object.contractState.map((e: any) => Model.fromJSON(e));
    return obj;
  },
  toJSON(message: Contract): JsonSafe<Contract> {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.contractInfo !== undefined && (obj.contractInfo = message.contractInfo ? ContractInfo.toJSON(message.contractInfo) : undefined);
    if (message.contractState) {
      obj.contractState = message.contractState.map(e => e ? Model.toJSON(e) : undefined);
    } else {
      obj.contractState = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Contract>): Contract {
    const message = createBaseContract();
    message.contractAddress = object.contractAddress ?? "";
    if (object.contractInfo !== undefined && object.contractInfo !== null) {
      message.contractInfo = ContractInfo.fromPartial(object.contractInfo);
    }
    message.contractState = object.contractState?.map(e => Model.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ContractSDKType): Contract {
    return {
      contractAddress: object?.contract_address,
      contractInfo: object.contract_info ? ContractInfo.fromSDK(object.contract_info) : undefined,
      contractState: Array.isArray(object?.contract_state) ? object.contract_state.map((e: any) => Model.fromSDK(e)) : []
    };
  },
  toSDK(message: Contract): ContractSDKType {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    message.contractInfo !== undefined && (obj.contract_info = message.contractInfo ? ContractInfo.toSDK(message.contractInfo) : undefined);
    if (message.contractState) {
      obj.contract_state = message.contractState.map(e => e ? Model.toSDK(e) : undefined);
    } else {
      obj.contract_state = [];
    }
    return obj;
  },
  fromAmino(object: ContractAmino): Contract {
    const message = createBaseContract();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.contract_info !== undefined && object.contract_info !== null) {
      message.contractInfo = ContractInfo.fromAmino(object.contract_info);
    }
    message.contractState = object.contract_state?.map(e => Model.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Contract): ContractAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.contract_info = message.contractInfo ? ContractInfo.toAmino(message.contractInfo) : undefined;
    if (message.contractState) {
      obj.contract_state = message.contractState.map(e => e ? Model.toAmino(e) : undefined);
    } else {
      obj.contract_state = message.contractState;
    }
    return obj;
  },
  fromAminoMsg(object: ContractAminoMsg): Contract {
    return Contract.fromAmino(object.value);
  },
  toAminoMsg(message: Contract): ContractAminoMsg {
    return {
      type: "wasm/Contract",
      value: Contract.toAmino(message)
    };
  },
  fromProtoMsg(message: ContractProtoMsg): Contract {
    return Contract.decode(message.value);
  },
  toProto(message: Contract): Uint8Array {
    return Contract.encode(message).finish();
  },
  toProtoMsg(message: Contract): ContractProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.Contract",
      value: Contract.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Contract.typeUrl, Contract);
GlobalDecoderRegistry.registerAminoProtoMapping(Contract.aminoType, Contract.typeUrl);
function createBaseSequence(): Sequence {
  return {
    idKey: new Uint8Array(),
    value: BigInt(0)
  };
}
export const Sequence = {
  typeUrl: "/cosmwasm.wasm.v1.Sequence",
  aminoType: "wasm/Sequence",
  is(o: any): o is Sequence {
    return o && (o.$typeUrl === Sequence.typeUrl || (o.idKey instanceof Uint8Array || typeof o.idKey === "string") && typeof o.value === "bigint");
  },
  isSDK(o: any): o is SequenceSDKType {
    return o && (o.$typeUrl === Sequence.typeUrl || (o.id_key instanceof Uint8Array || typeof o.id_key === "string") && typeof o.value === "bigint");
  },
  isAmino(o: any): o is SequenceAmino {
    return o && (o.$typeUrl === Sequence.typeUrl || (o.id_key instanceof Uint8Array || typeof o.id_key === "string") && typeof o.value === "bigint");
  },
  encode(message: Sequence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.idKey.length !== 0) {
      writer.uint32(10).bytes(message.idKey);
    }
    if (message.value !== undefined) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Sequence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSequence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.idKey = reader.bytes();
          break;
        case 2:
          message.value = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Sequence {
    const obj = createBaseSequence();
    if (isSet(object.idKey)) obj.idKey = bytesFromBase64(object.idKey);
    if (isSet(object.value)) obj.value = BigInt(object.value.toString());
    return obj;
  },
  toJSON(message: Sequence): JsonSafe<Sequence> {
    const obj: any = {};
    message.idKey !== undefined && (obj.idKey = base64FromBytes(message.idKey !== undefined ? message.idKey : new Uint8Array()));
    message.value !== undefined && (obj.value = (message.value || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Sequence>): Sequence {
    const message = createBaseSequence();
    message.idKey = object.idKey ?? new Uint8Array();
    if (object.value !== undefined && object.value !== null) {
      message.value = BigInt(object.value.toString());
    }
    return message;
  },
  fromSDK(object: SequenceSDKType): Sequence {
    return {
      idKey: object?.id_key,
      value: object?.value
    };
  },
  toSDK(message: Sequence): SequenceSDKType {
    const obj: any = {};
    obj.id_key = message.idKey;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: SequenceAmino): Sequence {
    const message = createBaseSequence();
    if (object.id_key !== undefined && object.id_key !== null) {
      message.idKey = bytesFromBase64(object.id_key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = BigInt(object.value);
    }
    return message;
  },
  toAmino(message: Sequence): SequenceAmino {
    const obj: any = {};
    obj.id_key = message.idKey ? base64FromBytes(message.idKey) : undefined;
    obj.value = message.value !== BigInt(0) ? message.value.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SequenceAminoMsg): Sequence {
    return Sequence.fromAmino(object.value);
  },
  toAminoMsg(message: Sequence): SequenceAminoMsg {
    return {
      type: "wasm/Sequence",
      value: Sequence.toAmino(message)
    };
  },
  fromProtoMsg(message: SequenceProtoMsg): Sequence {
    return Sequence.decode(message.value);
  },
  toProto(message: Sequence): Uint8Array {
    return Sequence.encode(message).finish();
  },
  toProtoMsg(message: Sequence): SequenceProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.Sequence",
      value: Sequence.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Sequence.typeUrl, Sequence);
GlobalDecoderRegistry.registerAminoProtoMapping(Sequence.aminoType, Sequence.typeUrl);