import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
export interface BitArray {
    bits: bigint;
    elems: bigint[];
}
export interface BitArrayProtoMsg {
    typeUrl: "/tendermint.libs.bits.BitArray";
    value: Uint8Array;
}
export interface BitArrayAmino {
    bits?: string;
    elems?: string[];
}
export interface BitArrayAminoMsg {
    type: "/tendermint.libs.bits.BitArray";
    value: BitArrayAmino;
}
export interface BitArraySDKType {
    bits: bigint;
    elems: bigint[];
}
export declare const BitArray: {
    typeUrl: string;
    is(o: any): o is BitArray;
    isSDK(o: any): o is BitArraySDKType;
    isAmino(o: any): o is BitArrayAmino;
    encode(message: BitArray, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BitArray;
    fromJSON(object: any): BitArray;
    toJSON(message: BitArray): unknown;
    fromPartial(object: DeepPartial<BitArray>): BitArray;
    fromSDK(object: BitArraySDKType): BitArray;
    toSDK(message: BitArray): BitArraySDKType;
    fromAmino(object: BitArrayAmino): BitArray;
    toAmino(message: BitArray): BitArrayAmino;
    fromAminoMsg(object: BitArrayAminoMsg): BitArray;
    fromProtoMsg(message: BitArrayProtoMsg): BitArray;
    toProto(message: BitArray): Uint8Array;
    toProtoMsg(message: BitArray): BitArrayProtoMsg;
};
