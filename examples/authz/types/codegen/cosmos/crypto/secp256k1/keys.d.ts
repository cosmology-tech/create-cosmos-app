import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * PubKey defines a secp256k1 public key
 * Key is the compressed form of the pubkey. The first byte depends is a 0x02 byte
 * if the y-coordinate is the lexicographically largest of the two associated with
 * the x-coordinate. Otherwise the first byte is a 0x03.
 * This prefix is followed with the x-coordinate.
 */
export interface PubKey {
    key: Uint8Array;
}
export interface PubKeyProtoMsg {
    typeUrl: "/cosmos.crypto.secp256k1.PubKey";
    value: Uint8Array;
}
/**
 * PubKey defines a secp256k1 public key
 * Key is the compressed form of the pubkey. The first byte depends is a 0x02 byte
 * if the y-coordinate is the lexicographically largest of the two associated with
 * the x-coordinate. Otherwise the first byte is a 0x03.
 * This prefix is followed with the x-coordinate.
 */
export interface PubKeyAmino {
    key?: string;
}
export interface PubKeyAminoMsg {
    type: "cosmos-sdk/PubKey";
    value: PubKeyAmino;
}
/**
 * PubKey defines a secp256k1 public key
 * Key is the compressed form of the pubkey. The first byte depends is a 0x02 byte
 * if the y-coordinate is the lexicographically largest of the two associated with
 * the x-coordinate. Otherwise the first byte is a 0x03.
 * This prefix is followed with the x-coordinate.
 */
export interface PubKeySDKType {
    key: Uint8Array;
}
/** PrivKey defines a secp256k1 private key. */
export interface PrivKey {
    key: Uint8Array;
}
export interface PrivKeyProtoMsg {
    typeUrl: "/cosmos.crypto.secp256k1.PrivKey";
    value: Uint8Array;
}
/** PrivKey defines a secp256k1 private key. */
export interface PrivKeyAmino {
    key?: string;
}
export interface PrivKeyAminoMsg {
    type: "cosmos-sdk/PrivKey";
    value: PrivKeyAmino;
}
/** PrivKey defines a secp256k1 private key. */
export interface PrivKeySDKType {
    key: Uint8Array;
}
export declare const PubKey: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is PubKey;
    isSDK(o: any): o is PubKeySDKType;
    isAmino(o: any): o is PubKeyAmino;
    encode(message: PubKey, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PubKey;
    fromJSON(object: any): PubKey;
    toJSON(message: PubKey): unknown;
    fromPartial(object: DeepPartial<PubKey>): PubKey;
    fromSDK(object: PubKeySDKType): PubKey;
    toSDK(message: PubKey): PubKeySDKType;
    fromAmino(object: PubKeyAmino): PubKey;
    toAmino(message: PubKey): PubKeyAmino;
    fromAminoMsg(object: PubKeyAminoMsg): PubKey;
    toAminoMsg(message: PubKey): PubKeyAminoMsg;
    fromProtoMsg(message: PubKeyProtoMsg): PubKey;
    toProto(message: PubKey): Uint8Array;
    toProtoMsg(message: PubKey): PubKeyProtoMsg;
};
export declare const PrivKey: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is PrivKey;
    isSDK(o: any): o is PrivKeySDKType;
    isAmino(o: any): o is PrivKeyAmino;
    encode(message: PrivKey, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PrivKey;
    fromJSON(object: any): PrivKey;
    toJSON(message: PrivKey): unknown;
    fromPartial(object: DeepPartial<PrivKey>): PrivKey;
    fromSDK(object: PrivKeySDKType): PrivKey;
    toSDK(message: PrivKey): PrivKeySDKType;
    fromAmino(object: PrivKeyAmino): PrivKey;
    toAmino(message: PrivKey): PrivKeyAmino;
    fromAminoMsg(object: PrivKeyAminoMsg): PrivKey;
    toAminoMsg(message: PrivKey): PrivKeyAminoMsg;
    fromProtoMsg(message: PrivKeyProtoMsg): PrivKey;
    toProto(message: PrivKey): Uint8Array;
    toProtoMsg(message: PrivKey): PrivKeyProtoMsg;
};
