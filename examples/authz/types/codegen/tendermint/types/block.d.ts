import { Header, HeaderAmino, HeaderSDKType, Data, DataAmino, DataSDKType, Commit, CommitAmino, CommitSDKType } from "./types";
import { EvidenceList, EvidenceListAmino, EvidenceListSDKType } from "./evidence";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
export interface Block {
    header: Header | undefined;
    data: Data | undefined;
    evidence: EvidenceList | undefined;
    lastCommit?: Commit | undefined;
}
export interface BlockProtoMsg {
    typeUrl: "/tendermint.types.Block";
    value: Uint8Array;
}
export interface BlockAmino {
    header?: HeaderAmino | undefined;
    data?: DataAmino | undefined;
    evidence?: EvidenceListAmino | undefined;
    last_commit?: CommitAmino | undefined;
}
export interface BlockAminoMsg {
    type: "/tendermint.types.Block";
    value: BlockAmino;
}
export interface BlockSDKType {
    header: HeaderSDKType | undefined;
    data: DataSDKType | undefined;
    evidence: EvidenceListSDKType | undefined;
    last_commit?: CommitSDKType | undefined;
}
export declare const Block: {
    typeUrl: string;
    is(o: any): o is Block;
    isSDK(o: any): o is BlockSDKType;
    isAmino(o: any): o is BlockAmino;
    encode(message: Block, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Block;
    fromJSON(object: any): Block;
    toJSON(message: Block): unknown;
    fromPartial(object: DeepPartial<Block>): Block;
    fromSDK(object: BlockSDKType): Block;
    toSDK(message: Block): BlockSDKType;
    fromAmino(object: BlockAmino): Block;
    toAmino(message: Block): BlockAmino;
    fromAminoMsg(object: BlockAminoMsg): Block;
    fromProtoMsg(message: BlockProtoMsg): Block;
    toProto(message: Block): Uint8Array;
    toProtoMsg(message: Block): BlockProtoMsg;
};
