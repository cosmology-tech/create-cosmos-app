import { MsgStoreCode, MsgStoreCodeAmino, MsgStoreCodeSDKType, MsgInstantiateContract, MsgInstantiateContractAmino, MsgInstantiateContractSDKType, MsgExecuteContract, MsgExecuteContractAmino, MsgExecuteContractSDKType } from "./tx";
import { Params, ParamsAmino, ParamsSDKType, CodeInfo, CodeInfoAmino, CodeInfoSDKType, ContractInfo, ContractInfoAmino, ContractInfoSDKType, Model, ModelAmino, ModelSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** GenesisState - genesis state of x/wasm */
export interface GenesisState {
    params: Params | undefined;
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
    params?: ParamsAmino | undefined;
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
    params: ParamsSDKType | undefined;
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
    storeCode?: MsgStoreCode | undefined;
    instantiateContract?: MsgInstantiateContract | undefined;
    executeContract?: MsgExecuteContract | undefined;
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
    store_code?: MsgStoreCodeAmino | undefined;
    instantiate_contract?: MsgInstantiateContractAmino | undefined;
    execute_contract?: MsgExecuteContractAmino | undefined;
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
    store_code?: MsgStoreCodeSDKType | undefined;
    instantiate_contract?: MsgInstantiateContractSDKType | undefined;
    execute_contract?: MsgExecuteContractSDKType | undefined;
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface Code {
    codeId: bigint;
    codeInfo: CodeInfo | undefined;
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
    code_info?: CodeInfoAmino | undefined;
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
    code_info: CodeInfoSDKType | undefined;
    code_bytes: Uint8Array;
    pinned: boolean;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface Contract {
    contractAddress: string;
    contractInfo: ContractInfo | undefined;
    contractState: Model[];
}
export interface ContractProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.Contract";
    value: Uint8Array;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface ContractAmino {
    contract_address?: string;
    contract_info?: ContractInfoAmino | undefined;
    contract_state?: ModelAmino[];
}
export interface ContractAminoMsg {
    type: "wasm/Contract";
    value: ContractAmino;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface ContractSDKType {
    contract_address: string;
    contract_info: ContractInfoSDKType | undefined;
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
export declare const GenesisState: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is GenesisState;
    isSDK(o: any): o is GenesisStateSDKType;
    isAmino(o: any): o is GenesisStateAmino;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
    fromSDK(object: GenesisStateSDKType): GenesisState;
    toSDK(message: GenesisState): GenesisStateSDKType;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    toAminoMsg(message: GenesisState): GenesisStateAminoMsg;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const GenesisState_GenMsgs: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is GenesisState_GenMsgs;
    isSDK(o: any): o is GenesisState_GenMsgsSDKType;
    isAmino(o: any): o is GenesisState_GenMsgsAmino;
    encode(message: GenesisState_GenMsgs, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState_GenMsgs;
    fromJSON(object: any): GenesisState_GenMsgs;
    toJSON(message: GenesisState_GenMsgs): unknown;
    fromPartial(object: DeepPartial<GenesisState_GenMsgs>): GenesisState_GenMsgs;
    fromSDK(object: GenesisState_GenMsgsSDKType): GenesisState_GenMsgs;
    toSDK(message: GenesisState_GenMsgs): GenesisState_GenMsgsSDKType;
    fromAmino(object: GenesisState_GenMsgsAmino): GenesisState_GenMsgs;
    toAmino(message: GenesisState_GenMsgs): GenesisState_GenMsgsAmino;
    fromAminoMsg(object: GenesisState_GenMsgsAminoMsg): GenesisState_GenMsgs;
    toAminoMsg(message: GenesisState_GenMsgs): GenesisState_GenMsgsAminoMsg;
    fromProtoMsg(message: GenesisState_GenMsgsProtoMsg): GenesisState_GenMsgs;
    toProto(message: GenesisState_GenMsgs): Uint8Array;
    toProtoMsg(message: GenesisState_GenMsgs): GenesisState_GenMsgsProtoMsg;
};
export declare const Code: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Code;
    isSDK(o: any): o is CodeSDKType;
    isAmino(o: any): o is CodeAmino;
    encode(message: Code, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Code;
    fromJSON(object: any): Code;
    toJSON(message: Code): unknown;
    fromPartial(object: DeepPartial<Code>): Code;
    fromSDK(object: CodeSDKType): Code;
    toSDK(message: Code): CodeSDKType;
    fromAmino(object: CodeAmino): Code;
    toAmino(message: Code): CodeAmino;
    fromAminoMsg(object: CodeAminoMsg): Code;
    toAminoMsg(message: Code): CodeAminoMsg;
    fromProtoMsg(message: CodeProtoMsg): Code;
    toProto(message: Code): Uint8Array;
    toProtoMsg(message: Code): CodeProtoMsg;
};
export declare const Contract: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Contract;
    isSDK(o: any): o is ContractSDKType;
    isAmino(o: any): o is ContractAmino;
    encode(message: Contract, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Contract;
    fromJSON(object: any): Contract;
    toJSON(message: Contract): unknown;
    fromPartial(object: DeepPartial<Contract>): Contract;
    fromSDK(object: ContractSDKType): Contract;
    toSDK(message: Contract): ContractSDKType;
    fromAmino(object: ContractAmino): Contract;
    toAmino(message: Contract): ContractAmino;
    fromAminoMsg(object: ContractAminoMsg): Contract;
    toAminoMsg(message: Contract): ContractAminoMsg;
    fromProtoMsg(message: ContractProtoMsg): Contract;
    toProto(message: Contract): Uint8Array;
    toProtoMsg(message: Contract): ContractProtoMsg;
};
export declare const Sequence: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Sequence;
    isSDK(o: any): o is SequenceSDKType;
    isAmino(o: any): o is SequenceAmino;
    encode(message: Sequence, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Sequence;
    fromJSON(object: any): Sequence;
    toJSON(message: Sequence): unknown;
    fromPartial(object: DeepPartial<Sequence>): Sequence;
    fromSDK(object: SequenceSDKType): Sequence;
    toSDK(message: Sequence): SequenceSDKType;
    fromAmino(object: SequenceAmino): Sequence;
    toAmino(message: Sequence): SequenceAmino;
    fromAminoMsg(object: SequenceAminoMsg): Sequence;
    toAminoMsg(message: Sequence): SequenceAminoMsg;
    fromProtoMsg(message: SequenceProtoMsg): Sequence;
    toProto(message: Sequence): Uint8Array;
    toProtoMsg(message: Sequence): SequenceProtoMsg;
};
