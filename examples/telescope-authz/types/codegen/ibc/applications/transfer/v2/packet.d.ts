import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * FungibleTokenPacketData defines a struct for the packet payload
 * See FungibleTokenPacketData spec:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface FungibleTokenPacketData {
    /** the token denomination to be transferred */
    denom: string;
    /** the token amount to be transferred */
    amount: string;
    /** the sender address */
    sender: string;
    /** the recipient address on the destination chain */
    receiver: string;
}
export interface FungibleTokenPacketDataProtoMsg {
    typeUrl: "/ibc.applications.transfer.v2.FungibleTokenPacketData";
    value: Uint8Array;
}
/**
 * FungibleTokenPacketData defines a struct for the packet payload
 * See FungibleTokenPacketData spec:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface FungibleTokenPacketDataAmino {
    /** the token denomination to be transferred */
    denom?: string;
    /** the token amount to be transferred */
    amount?: string;
    /** the sender address */
    sender?: string;
    /** the recipient address on the destination chain */
    receiver?: string;
}
export interface FungibleTokenPacketDataAminoMsg {
    type: "cosmos-sdk/FungibleTokenPacketData";
    value: FungibleTokenPacketDataAmino;
}
/**
 * FungibleTokenPacketData defines a struct for the packet payload
 * See FungibleTokenPacketData spec:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface FungibleTokenPacketDataSDKType {
    denom: string;
    amount: string;
    sender: string;
    receiver: string;
}
export declare const FungibleTokenPacketData: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is FungibleTokenPacketData;
    isSDK(o: any): o is FungibleTokenPacketDataSDKType;
    isAmino(o: any): o is FungibleTokenPacketDataAmino;
    encode(message: FungibleTokenPacketData, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): FungibleTokenPacketData;
    fromJSON(object: any): FungibleTokenPacketData;
    toJSON(message: FungibleTokenPacketData): unknown;
    fromPartial(object: DeepPartial<FungibleTokenPacketData>): FungibleTokenPacketData;
    fromSDK(object: FungibleTokenPacketDataSDKType): FungibleTokenPacketData;
    toSDK(message: FungibleTokenPacketData): FungibleTokenPacketDataSDKType;
    fromAmino(object: FungibleTokenPacketDataAmino): FungibleTokenPacketData;
    toAmino(message: FungibleTokenPacketData): FungibleTokenPacketDataAmino;
    fromAminoMsg(object: FungibleTokenPacketDataAminoMsg): FungibleTokenPacketData;
    toAminoMsg(message: FungibleTokenPacketData): FungibleTokenPacketDataAminoMsg;
    fromProtoMsg(message: FungibleTokenPacketDataProtoMsg): FungibleTokenPacketData;
    toProto(message: FungibleTokenPacketData): Uint8Array;
    toProtoMsg(message: FungibleTokenPacketData): FungibleTokenPacketDataProtoMsg;
};
