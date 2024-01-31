import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * SendAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account.
 *
 * Since: cosmos-sdk 0.43
 */
export interface SendAuthorization {
    $typeUrl?: "/cosmos.bank.v1beta1.SendAuthorization";
    spendLimit: Coin[];
}
export interface SendAuthorizationProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.SendAuthorization";
    value: Uint8Array;
}
/**
 * SendAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account.
 *
 * Since: cosmos-sdk 0.43
 */
export interface SendAuthorizationAmino {
    spend_limit?: CoinAmino[];
}
export interface SendAuthorizationAminoMsg {
    type: "cosmos-sdk/SendAuthorization";
    value: SendAuthorizationAmino;
}
/**
 * SendAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account.
 *
 * Since: cosmos-sdk 0.43
 */
export interface SendAuthorizationSDKType {
    $typeUrl?: "/cosmos.bank.v1beta1.SendAuthorization";
    spend_limit: CoinSDKType[];
}
export declare const SendAuthorization: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is SendAuthorization;
    isSDK(o: any): o is SendAuthorizationSDKType;
    isAmino(o: any): o is SendAuthorizationAmino;
    encode(message: SendAuthorization, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SendAuthorization;
    fromJSON(object: any): SendAuthorization;
    toJSON(message: SendAuthorization): unknown;
    fromPartial(object: DeepPartial<SendAuthorization>): SendAuthorization;
    fromSDK(object: SendAuthorizationSDKType): SendAuthorization;
    toSDK(message: SendAuthorization): SendAuthorizationSDKType;
    fromAmino(object: SendAuthorizationAmino): SendAuthorization;
    toAmino(message: SendAuthorization): SendAuthorizationAmino;
    fromAminoMsg(object: SendAuthorizationAminoMsg): SendAuthorization;
    toAminoMsg(message: SendAuthorization): SendAuthorizationAminoMsg;
    fromProtoMsg(message: SendAuthorizationProtoMsg): SendAuthorization;
    toProto(message: SendAuthorization): Uint8Array;
    toProtoMsg(message: SendAuthorization): SendAuthorizationProtoMsg;
};
