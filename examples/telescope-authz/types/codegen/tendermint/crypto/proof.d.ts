import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
export interface Proof {
    total: bigint;
    index: bigint;
    leafHash: Uint8Array;
    aunts: Uint8Array[];
}
export interface ProofProtoMsg {
    typeUrl: "/tendermint.crypto.Proof";
    value: Uint8Array;
}
export interface ProofAmino {
    total?: string;
    index?: string;
    leaf_hash?: string;
    aunts?: string[];
}
export interface ProofAminoMsg {
    type: "/tendermint.crypto.Proof";
    value: ProofAmino;
}
export interface ProofSDKType {
    total: bigint;
    index: bigint;
    leaf_hash: Uint8Array;
    aunts: Uint8Array[];
}
export interface ValueOp {
    /** Encoded in ProofOp.Key. */
    key: Uint8Array;
    /** To encode in ProofOp.Data */
    proof?: Proof | undefined;
}
export interface ValueOpProtoMsg {
    typeUrl: "/tendermint.crypto.ValueOp";
    value: Uint8Array;
}
export interface ValueOpAmino {
    /** Encoded in ProofOp.Key. */
    key?: string;
    /** To encode in ProofOp.Data */
    proof?: ProofAmino | undefined;
}
export interface ValueOpAminoMsg {
    type: "/tendermint.crypto.ValueOp";
    value: ValueOpAmino;
}
export interface ValueOpSDKType {
    key: Uint8Array;
    proof?: ProofSDKType | undefined;
}
export interface DominoOp {
    key: string;
    input: string;
    output: string;
}
export interface DominoOpProtoMsg {
    typeUrl: "/tendermint.crypto.DominoOp";
    value: Uint8Array;
}
export interface DominoOpAmino {
    key?: string;
    input?: string;
    output?: string;
}
export interface DominoOpAminoMsg {
    type: "/tendermint.crypto.DominoOp";
    value: DominoOpAmino;
}
export interface DominoOpSDKType {
    key: string;
    input: string;
    output: string;
}
/**
 * ProofOp defines an operation used for calculating Merkle root
 * The data could be arbitrary format, providing nessecary data
 * for example neighbouring node hash
 */
export interface ProofOp {
    type: string;
    key: Uint8Array;
    data: Uint8Array;
}
export interface ProofOpProtoMsg {
    typeUrl: "/tendermint.crypto.ProofOp";
    value: Uint8Array;
}
/**
 * ProofOp defines an operation used for calculating Merkle root
 * The data could be arbitrary format, providing nessecary data
 * for example neighbouring node hash
 */
export interface ProofOpAmino {
    type?: string;
    key?: string;
    data?: string;
}
export interface ProofOpAminoMsg {
    type: "/tendermint.crypto.ProofOp";
    value: ProofOpAmino;
}
/**
 * ProofOp defines an operation used for calculating Merkle root
 * The data could be arbitrary format, providing nessecary data
 * for example neighbouring node hash
 */
export interface ProofOpSDKType {
    type: string;
    key: Uint8Array;
    data: Uint8Array;
}
/** ProofOps is Merkle proof defined by the list of ProofOps */
export interface ProofOps {
    ops: ProofOp[];
}
export interface ProofOpsProtoMsg {
    typeUrl: "/tendermint.crypto.ProofOps";
    value: Uint8Array;
}
/** ProofOps is Merkle proof defined by the list of ProofOps */
export interface ProofOpsAmino {
    ops?: ProofOpAmino[];
}
export interface ProofOpsAminoMsg {
    type: "/tendermint.crypto.ProofOps";
    value: ProofOpsAmino;
}
/** ProofOps is Merkle proof defined by the list of ProofOps */
export interface ProofOpsSDKType {
    ops: ProofOpSDKType[];
}
export declare const Proof: {
    typeUrl: string;
    is(o: any): o is Proof;
    isSDK(o: any): o is ProofSDKType;
    isAmino(o: any): o is ProofAmino;
    encode(message: Proof, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Proof;
    fromJSON(object: any): Proof;
    toJSON(message: Proof): unknown;
    fromPartial(object: DeepPartial<Proof>): Proof;
    fromSDK(object: ProofSDKType): Proof;
    toSDK(message: Proof): ProofSDKType;
    fromAmino(object: ProofAmino): Proof;
    toAmino(message: Proof): ProofAmino;
    fromAminoMsg(object: ProofAminoMsg): Proof;
    fromProtoMsg(message: ProofProtoMsg): Proof;
    toProto(message: Proof): Uint8Array;
    toProtoMsg(message: Proof): ProofProtoMsg;
};
export declare const ValueOp: {
    typeUrl: string;
    is(o: any): o is ValueOp;
    isSDK(o: any): o is ValueOpSDKType;
    isAmino(o: any): o is ValueOpAmino;
    encode(message: ValueOp, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ValueOp;
    fromJSON(object: any): ValueOp;
    toJSON(message: ValueOp): unknown;
    fromPartial(object: DeepPartial<ValueOp>): ValueOp;
    fromSDK(object: ValueOpSDKType): ValueOp;
    toSDK(message: ValueOp): ValueOpSDKType;
    fromAmino(object: ValueOpAmino): ValueOp;
    toAmino(message: ValueOp): ValueOpAmino;
    fromAminoMsg(object: ValueOpAminoMsg): ValueOp;
    fromProtoMsg(message: ValueOpProtoMsg): ValueOp;
    toProto(message: ValueOp): Uint8Array;
    toProtoMsg(message: ValueOp): ValueOpProtoMsg;
};
export declare const DominoOp: {
    typeUrl: string;
    is(o: any): o is DominoOp;
    isSDK(o: any): o is DominoOpSDKType;
    isAmino(o: any): o is DominoOpAmino;
    encode(message: DominoOp, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DominoOp;
    fromJSON(object: any): DominoOp;
    toJSON(message: DominoOp): unknown;
    fromPartial(object: DeepPartial<DominoOp>): DominoOp;
    fromSDK(object: DominoOpSDKType): DominoOp;
    toSDK(message: DominoOp): DominoOpSDKType;
    fromAmino(object: DominoOpAmino): DominoOp;
    toAmino(message: DominoOp): DominoOpAmino;
    fromAminoMsg(object: DominoOpAminoMsg): DominoOp;
    fromProtoMsg(message: DominoOpProtoMsg): DominoOp;
    toProto(message: DominoOp): Uint8Array;
    toProtoMsg(message: DominoOp): DominoOpProtoMsg;
};
export declare const ProofOp: {
    typeUrl: string;
    is(o: any): o is ProofOp;
    isSDK(o: any): o is ProofOpSDKType;
    isAmino(o: any): o is ProofOpAmino;
    encode(message: ProofOp, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ProofOp;
    fromJSON(object: any): ProofOp;
    toJSON(message: ProofOp): unknown;
    fromPartial(object: DeepPartial<ProofOp>): ProofOp;
    fromSDK(object: ProofOpSDKType): ProofOp;
    toSDK(message: ProofOp): ProofOpSDKType;
    fromAmino(object: ProofOpAmino): ProofOp;
    toAmino(message: ProofOp): ProofOpAmino;
    fromAminoMsg(object: ProofOpAminoMsg): ProofOp;
    fromProtoMsg(message: ProofOpProtoMsg): ProofOp;
    toProto(message: ProofOp): Uint8Array;
    toProtoMsg(message: ProofOp): ProofOpProtoMsg;
};
export declare const ProofOps: {
    typeUrl: string;
    is(o: any): o is ProofOps;
    isSDK(o: any): o is ProofOpsSDKType;
    isAmino(o: any): o is ProofOpsAmino;
    encode(message: ProofOps, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ProofOps;
    fromJSON(object: any): ProofOps;
    toJSON(message: ProofOps): unknown;
    fromPartial(object: DeepPartial<ProofOps>): ProofOps;
    fromSDK(object: ProofOpsSDKType): ProofOps;
    toSDK(message: ProofOps): ProofOpsSDKType;
    fromAmino(object: ProofOpsAmino): ProofOps;
    toAmino(message: ProofOps): ProofOpsAmino;
    fromAminoMsg(object: ProofOpsAminoMsg): ProofOps;
    fromProtoMsg(message: ProofOpsProtoMsg): ProofOps;
    toProto(message: ProofOps): Uint8Array;
    toProtoMsg(message: ProofOps): ProofOpsProtoMsg;
};
