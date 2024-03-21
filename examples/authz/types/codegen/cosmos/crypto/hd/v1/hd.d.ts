import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/** BIP44Params is used as path field in ledger item in Record. */
export interface BIP44Params {
    /** purpose is a constant set to 44' (or 0x8000002C) following the BIP43 recommendation */
    purpose: number;
    /** coin_type is a constant that improves privacy */
    coinType: number;
    /** account splits the key space into independent user identities */
    account: number;
    /**
     * change is a constant used for public derivation. Constant 0 is used for external chain and constant 1 for internal
     * chain.
     */
    change: boolean;
    /** address_index is used as child index in BIP32 derivation */
    addressIndex: number;
}
export interface BIP44ParamsProtoMsg {
    typeUrl: "/cosmos.crypto.hd.v1.BIP44Params";
    value: Uint8Array;
}
/** BIP44Params is used as path field in ledger item in Record. */
export interface BIP44ParamsAmino {
    /** purpose is a constant set to 44' (or 0x8000002C) following the BIP43 recommendation */
    purpose?: number;
    /** coin_type is a constant that improves privacy */
    coin_type?: number;
    /** account splits the key space into independent user identities */
    account?: number;
    /**
     * change is a constant used for public derivation. Constant 0 is used for external chain and constant 1 for internal
     * chain.
     */
    change?: boolean;
    /** address_index is used as child index in BIP32 derivation */
    address_index?: number;
}
export interface BIP44ParamsAminoMsg {
    type: "cosmos-sdk/BIP44Params";
    value: BIP44ParamsAmino;
}
/** BIP44Params is used as path field in ledger item in Record. */
export interface BIP44ParamsSDKType {
    purpose: number;
    coin_type: number;
    account: number;
    change: boolean;
    address_index: number;
}
export declare const BIP44Params: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is BIP44Params;
    isSDK(o: any): o is BIP44ParamsSDKType;
    isAmino(o: any): o is BIP44ParamsAmino;
    encode(message: BIP44Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BIP44Params;
    fromJSON(object: any): BIP44Params;
    toJSON(message: BIP44Params): unknown;
    fromPartial(object: DeepPartial<BIP44Params>): BIP44Params;
    fromSDK(object: BIP44ParamsSDKType): BIP44Params;
    toSDK(message: BIP44Params): BIP44ParamsSDKType;
    fromAmino(object: BIP44ParamsAmino): BIP44Params;
    toAmino(message: BIP44Params): BIP44ParamsAmino;
    fromAminoMsg(object: BIP44ParamsAminoMsg): BIP44Params;
    toAminoMsg(message: BIP44Params): BIP44ParamsAminoMsg;
    fromProtoMsg(message: BIP44ParamsProtoMsg): BIP44Params;
    toProto(message: BIP44Params): Uint8Array;
    toProtoMsg(message: BIP44Params): BIP44ParamsProtoMsg;
};
