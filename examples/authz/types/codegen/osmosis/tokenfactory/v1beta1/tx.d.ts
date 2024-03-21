import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Metadata, MetadataAmino, MetadataSDKType } from "../../../cosmos/bank/v1beta1/bank";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgCreateDenom defines the message structure for the CreateDenom gRPC service
 * method. It allows an account to create a new denom. It requires a sender
 * address and a sub denomination. The (sender_address, sub_denomination) tuple
 * must be unique and cannot be re-used.
 *
 * The resulting denom created is defined as
 * <factory/{creatorAddress}/{subdenom}>. The resulting denom's admin is
 * originally set to be the creator, but this can be changed later. The token
 * denom does not indicate the current admin.
 */
export interface MsgCreateDenom {
    sender: string;
    /** subdenom can be up to 44 "alphanumeric" characters long. */
    subdenom: string;
}
export interface MsgCreateDenomProtoMsg {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenom";
    value: Uint8Array;
}
/**
 * MsgCreateDenom defines the message structure for the CreateDenom gRPC service
 * method. It allows an account to create a new denom. It requires a sender
 * address and a sub denomination. The (sender_address, sub_denomination) tuple
 * must be unique and cannot be re-used.
 *
 * The resulting denom created is defined as
 * <factory/{creatorAddress}/{subdenom}>. The resulting denom's admin is
 * originally set to be the creator, but this can be changed later. The token
 * denom does not indicate the current admin.
 */
export interface MsgCreateDenomAmino {
    sender?: string;
    /** subdenom can be up to 44 "alphanumeric" characters long. */
    subdenom?: string;
}
export interface MsgCreateDenomAminoMsg {
    type: "osmosis/tokenfactory/create-denom";
    value: MsgCreateDenomAmino;
}
/**
 * MsgCreateDenom defines the message structure for the CreateDenom gRPC service
 * method. It allows an account to create a new denom. It requires a sender
 * address and a sub denomination. The (sender_address, sub_denomination) tuple
 * must be unique and cannot be re-used.
 *
 * The resulting denom created is defined as
 * <factory/{creatorAddress}/{subdenom}>. The resulting denom's admin is
 * originally set to be the creator, but this can be changed later. The token
 * denom does not indicate the current admin.
 */
export interface MsgCreateDenomSDKType {
    sender: string;
    subdenom: string;
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 */
export interface MsgCreateDenomResponse {
    newTokenDenom: string;
}
export interface MsgCreateDenomResponseProtoMsg {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenomResponse";
    value: Uint8Array;
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 */
export interface MsgCreateDenomResponseAmino {
    new_token_denom?: string;
}
export interface MsgCreateDenomResponseAminoMsg {
    type: "osmosis/tokenfactory/create-denom-response";
    value: MsgCreateDenomResponseAmino;
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 */
export interface MsgCreateDenomResponseSDKType {
    new_token_denom: string;
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 * more of a token.  For now, we only support minting to the sender account
 */
export interface MsgMint {
    sender: string;
    amount: Coin | undefined;
}
export interface MsgMintProtoMsg {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMint";
    value: Uint8Array;
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 * more of a token.  For now, we only support minting to the sender account
 */
export interface MsgMintAmino {
    sender?: string;
    amount?: CoinAmino | undefined;
}
export interface MsgMintAminoMsg {
    type: "osmosis/tokenfactory/mint";
    value: MsgMintAmino;
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 * more of a token.  For now, we only support minting to the sender account
 */
export interface MsgMintSDKType {
    sender: string;
    amount: CoinSDKType | undefined;
}
export interface MsgMintResponse {
}
export interface MsgMintResponseProtoMsg {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMintResponse";
    value: Uint8Array;
}
export interface MsgMintResponseAmino {
}
export interface MsgMintResponseAminoMsg {
    type: "osmosis/tokenfactory/mint-response";
    value: MsgMintResponseAmino;
}
export interface MsgMintResponseSDKType {
}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.  For now, we only support burning from the sender account.
 */
export interface MsgBurn {
    sender: string;
    amount: Coin | undefined;
}
export interface MsgBurnProtoMsg {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurn";
    value: Uint8Array;
}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.  For now, we only support burning from the sender account.
 */
export interface MsgBurnAmino {
    sender?: string;
    amount?: CoinAmino | undefined;
}
export interface MsgBurnAminoMsg {
    type: "osmosis/tokenfactory/burn";
    value: MsgBurnAmino;
}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.  For now, we only support burning from the sender account.
 */
export interface MsgBurnSDKType {
    sender: string;
    amount: CoinSDKType | undefined;
}
export interface MsgBurnResponse {
}
export interface MsgBurnResponseProtoMsg {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurnResponse";
    value: Uint8Array;
}
export interface MsgBurnResponseAmino {
}
export interface MsgBurnResponseAminoMsg {
    type: "osmosis/tokenfactory/burn-response";
    value: MsgBurnResponseAmino;
}
export interface MsgBurnResponseSDKType {
}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 */
export interface MsgChangeAdmin {
    sender: string;
    denom: string;
    newAdmin: string;
}
export interface MsgChangeAdminProtoMsg {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin";
    value: Uint8Array;
}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 */
export interface MsgChangeAdminAmino {
    sender?: string;
    denom?: string;
    new_admin?: string;
}
export interface MsgChangeAdminAminoMsg {
    type: "osmosis/tokenfactory/change-admin";
    value: MsgChangeAdminAmino;
}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 */
export interface MsgChangeAdminSDKType {
    sender: string;
    denom: string;
    new_admin: string;
}
/**
 * MsgChangeAdminResponse defines the response structure for an executed
 * MsgChangeAdmin message.
 */
export interface MsgChangeAdminResponse {
}
export interface MsgChangeAdminResponseProtoMsg {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdminResponse";
    value: Uint8Array;
}
/**
 * MsgChangeAdminResponse defines the response structure for an executed
 * MsgChangeAdmin message.
 */
export interface MsgChangeAdminResponseAmino {
}
export interface MsgChangeAdminResponseAminoMsg {
    type: "osmosis/tokenfactory/change-admin-response";
    value: MsgChangeAdminResponseAmino;
}
/**
 * MsgChangeAdminResponse defines the response structure for an executed
 * MsgChangeAdmin message.
 */
export interface MsgChangeAdminResponseSDKType {
}
/**
 * MsgSetDenomMetadata is the sdk.Msg type for allowing an admin account to set
 * the denom's bank metadata
 */
export interface MsgSetDenomMetadata {
    sender: string;
    metadata: Metadata | undefined;
}
export interface MsgSetDenomMetadataProtoMsg {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata";
    value: Uint8Array;
}
/**
 * MsgSetDenomMetadata is the sdk.Msg type for allowing an admin account to set
 * the denom's bank metadata
 */
export interface MsgSetDenomMetadataAmino {
    sender?: string;
    metadata?: MetadataAmino | undefined;
}
export interface MsgSetDenomMetadataAminoMsg {
    type: "osmosis/tokenfactory/set-denom-metadata";
    value: MsgSetDenomMetadataAmino;
}
/**
 * MsgSetDenomMetadata is the sdk.Msg type for allowing an admin account to set
 * the denom's bank metadata
 */
export interface MsgSetDenomMetadataSDKType {
    sender: string;
    metadata: MetadataSDKType | undefined;
}
/**
 * MsgSetDenomMetadataResponse defines the response structure for an executed
 * MsgSetDenomMetadata message.
 */
export interface MsgSetDenomMetadataResponse {
}
export interface MsgSetDenomMetadataResponseProtoMsg {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadataResponse";
    value: Uint8Array;
}
/**
 * MsgSetDenomMetadataResponse defines the response structure for an executed
 * MsgSetDenomMetadata message.
 */
export interface MsgSetDenomMetadataResponseAmino {
}
export interface MsgSetDenomMetadataResponseAminoMsg {
    type: "osmosis/tokenfactory/set-denom-metadata-response";
    value: MsgSetDenomMetadataResponseAmino;
}
/**
 * MsgSetDenomMetadataResponse defines the response structure for an executed
 * MsgSetDenomMetadata message.
 */
export interface MsgSetDenomMetadataResponseSDKType {
}
export declare const MsgCreateDenom: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgCreateDenom;
    isSDK(o: any): o is MsgCreateDenomSDKType;
    isAmino(o: any): o is MsgCreateDenomAmino;
    encode(message: MsgCreateDenom, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDenom;
    fromJSON(object: any): MsgCreateDenom;
    toJSON(message: MsgCreateDenom): unknown;
    fromPartial(object: DeepPartial<MsgCreateDenom>): MsgCreateDenom;
    fromSDK(object: MsgCreateDenomSDKType): MsgCreateDenom;
    toSDK(message: MsgCreateDenom): MsgCreateDenomSDKType;
    fromAmino(object: MsgCreateDenomAmino): MsgCreateDenom;
    toAmino(message: MsgCreateDenom): MsgCreateDenomAmino;
    fromAminoMsg(object: MsgCreateDenomAminoMsg): MsgCreateDenom;
    toAminoMsg(message: MsgCreateDenom): MsgCreateDenomAminoMsg;
    fromProtoMsg(message: MsgCreateDenomProtoMsg): MsgCreateDenom;
    toProto(message: MsgCreateDenom): Uint8Array;
    toProtoMsg(message: MsgCreateDenom): MsgCreateDenomProtoMsg;
};
export declare const MsgCreateDenomResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgCreateDenomResponse;
    isSDK(o: any): o is MsgCreateDenomResponseSDKType;
    isAmino(o: any): o is MsgCreateDenomResponseAmino;
    encode(message: MsgCreateDenomResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDenomResponse;
    fromJSON(object: any): MsgCreateDenomResponse;
    toJSON(message: MsgCreateDenomResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateDenomResponse>): MsgCreateDenomResponse;
    fromSDK(object: MsgCreateDenomResponseSDKType): MsgCreateDenomResponse;
    toSDK(message: MsgCreateDenomResponse): MsgCreateDenomResponseSDKType;
    fromAmino(object: MsgCreateDenomResponseAmino): MsgCreateDenomResponse;
    toAmino(message: MsgCreateDenomResponse): MsgCreateDenomResponseAmino;
    fromAminoMsg(object: MsgCreateDenomResponseAminoMsg): MsgCreateDenomResponse;
    toAminoMsg(message: MsgCreateDenomResponse): MsgCreateDenomResponseAminoMsg;
    fromProtoMsg(message: MsgCreateDenomResponseProtoMsg): MsgCreateDenomResponse;
    toProto(message: MsgCreateDenomResponse): Uint8Array;
    toProtoMsg(message: MsgCreateDenomResponse): MsgCreateDenomResponseProtoMsg;
};
export declare const MsgMint: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgMint;
    isSDK(o: any): o is MsgMintSDKType;
    isAmino(o: any): o is MsgMintAmino;
    encode(message: MsgMint, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgMint;
    fromJSON(object: any): MsgMint;
    toJSON(message: MsgMint): unknown;
    fromPartial(object: DeepPartial<MsgMint>): MsgMint;
    fromSDK(object: MsgMintSDKType): MsgMint;
    toSDK(message: MsgMint): MsgMintSDKType;
    fromAmino(object: MsgMintAmino): MsgMint;
    toAmino(message: MsgMint): MsgMintAmino;
    fromAminoMsg(object: MsgMintAminoMsg): MsgMint;
    toAminoMsg(message: MsgMint): MsgMintAminoMsg;
    fromProtoMsg(message: MsgMintProtoMsg): MsgMint;
    toProto(message: MsgMint): Uint8Array;
    toProtoMsg(message: MsgMint): MsgMintProtoMsg;
};
export declare const MsgMintResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgMintResponse;
    isSDK(o: any): o is MsgMintResponseSDKType;
    isAmino(o: any): o is MsgMintResponseAmino;
    encode(_: MsgMintResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgMintResponse;
    fromJSON(_: any): MsgMintResponse;
    toJSON(_: MsgMintResponse): unknown;
    fromPartial(_: DeepPartial<MsgMintResponse>): MsgMintResponse;
    fromSDK(_: MsgMintResponseSDKType): MsgMintResponse;
    toSDK(_: MsgMintResponse): MsgMintResponseSDKType;
    fromAmino(_: MsgMintResponseAmino): MsgMintResponse;
    toAmino(_: MsgMintResponse): MsgMintResponseAmino;
    fromAminoMsg(object: MsgMintResponseAminoMsg): MsgMintResponse;
    toAminoMsg(message: MsgMintResponse): MsgMintResponseAminoMsg;
    fromProtoMsg(message: MsgMintResponseProtoMsg): MsgMintResponse;
    toProto(message: MsgMintResponse): Uint8Array;
    toProtoMsg(message: MsgMintResponse): MsgMintResponseProtoMsg;
};
export declare const MsgBurn: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgBurn;
    isSDK(o: any): o is MsgBurnSDKType;
    isAmino(o: any): o is MsgBurnAmino;
    encode(message: MsgBurn, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBurn;
    fromJSON(object: any): MsgBurn;
    toJSON(message: MsgBurn): unknown;
    fromPartial(object: DeepPartial<MsgBurn>): MsgBurn;
    fromSDK(object: MsgBurnSDKType): MsgBurn;
    toSDK(message: MsgBurn): MsgBurnSDKType;
    fromAmino(object: MsgBurnAmino): MsgBurn;
    toAmino(message: MsgBurn): MsgBurnAmino;
    fromAminoMsg(object: MsgBurnAminoMsg): MsgBurn;
    toAminoMsg(message: MsgBurn): MsgBurnAminoMsg;
    fromProtoMsg(message: MsgBurnProtoMsg): MsgBurn;
    toProto(message: MsgBurn): Uint8Array;
    toProtoMsg(message: MsgBurn): MsgBurnProtoMsg;
};
export declare const MsgBurnResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgBurnResponse;
    isSDK(o: any): o is MsgBurnResponseSDKType;
    isAmino(o: any): o is MsgBurnResponseAmino;
    encode(_: MsgBurnResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnResponse;
    fromJSON(_: any): MsgBurnResponse;
    toJSON(_: MsgBurnResponse): unknown;
    fromPartial(_: DeepPartial<MsgBurnResponse>): MsgBurnResponse;
    fromSDK(_: MsgBurnResponseSDKType): MsgBurnResponse;
    toSDK(_: MsgBurnResponse): MsgBurnResponseSDKType;
    fromAmino(_: MsgBurnResponseAmino): MsgBurnResponse;
    toAmino(_: MsgBurnResponse): MsgBurnResponseAmino;
    fromAminoMsg(object: MsgBurnResponseAminoMsg): MsgBurnResponse;
    toAminoMsg(message: MsgBurnResponse): MsgBurnResponseAminoMsg;
    fromProtoMsg(message: MsgBurnResponseProtoMsg): MsgBurnResponse;
    toProto(message: MsgBurnResponse): Uint8Array;
    toProtoMsg(message: MsgBurnResponse): MsgBurnResponseProtoMsg;
};
export declare const MsgChangeAdmin: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChangeAdmin;
    isSDK(o: any): o is MsgChangeAdminSDKType;
    isAmino(o: any): o is MsgChangeAdminAmino;
    encode(message: MsgChangeAdmin, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChangeAdmin;
    fromJSON(object: any): MsgChangeAdmin;
    toJSON(message: MsgChangeAdmin): unknown;
    fromPartial(object: DeepPartial<MsgChangeAdmin>): MsgChangeAdmin;
    fromSDK(object: MsgChangeAdminSDKType): MsgChangeAdmin;
    toSDK(message: MsgChangeAdmin): MsgChangeAdminSDKType;
    fromAmino(object: MsgChangeAdminAmino): MsgChangeAdmin;
    toAmino(message: MsgChangeAdmin): MsgChangeAdminAmino;
    fromAminoMsg(object: MsgChangeAdminAminoMsg): MsgChangeAdmin;
    toAminoMsg(message: MsgChangeAdmin): MsgChangeAdminAminoMsg;
    fromProtoMsg(message: MsgChangeAdminProtoMsg): MsgChangeAdmin;
    toProto(message: MsgChangeAdmin): Uint8Array;
    toProtoMsg(message: MsgChangeAdmin): MsgChangeAdminProtoMsg;
};
export declare const MsgChangeAdminResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChangeAdminResponse;
    isSDK(o: any): o is MsgChangeAdminResponseSDKType;
    isAmino(o: any): o is MsgChangeAdminResponseAmino;
    encode(_: MsgChangeAdminResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChangeAdminResponse;
    fromJSON(_: any): MsgChangeAdminResponse;
    toJSON(_: MsgChangeAdminResponse): unknown;
    fromPartial(_: DeepPartial<MsgChangeAdminResponse>): MsgChangeAdminResponse;
    fromSDK(_: MsgChangeAdminResponseSDKType): MsgChangeAdminResponse;
    toSDK(_: MsgChangeAdminResponse): MsgChangeAdminResponseSDKType;
    fromAmino(_: MsgChangeAdminResponseAmino): MsgChangeAdminResponse;
    toAmino(_: MsgChangeAdminResponse): MsgChangeAdminResponseAmino;
    fromAminoMsg(object: MsgChangeAdminResponseAminoMsg): MsgChangeAdminResponse;
    toAminoMsg(message: MsgChangeAdminResponse): MsgChangeAdminResponseAminoMsg;
    fromProtoMsg(message: MsgChangeAdminResponseProtoMsg): MsgChangeAdminResponse;
    toProto(message: MsgChangeAdminResponse): Uint8Array;
    toProtoMsg(message: MsgChangeAdminResponse): MsgChangeAdminResponseProtoMsg;
};
export declare const MsgSetDenomMetadata: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgSetDenomMetadata;
    isSDK(o: any): o is MsgSetDenomMetadataSDKType;
    isAmino(o: any): o is MsgSetDenomMetadataAmino;
    encode(message: MsgSetDenomMetadata, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDenomMetadata;
    fromJSON(object: any): MsgSetDenomMetadata;
    toJSON(message: MsgSetDenomMetadata): unknown;
    fromPartial(object: DeepPartial<MsgSetDenomMetadata>): MsgSetDenomMetadata;
    fromSDK(object: MsgSetDenomMetadataSDKType): MsgSetDenomMetadata;
    toSDK(message: MsgSetDenomMetadata): MsgSetDenomMetadataSDKType;
    fromAmino(object: MsgSetDenomMetadataAmino): MsgSetDenomMetadata;
    toAmino(message: MsgSetDenomMetadata): MsgSetDenomMetadataAmino;
    fromAminoMsg(object: MsgSetDenomMetadataAminoMsg): MsgSetDenomMetadata;
    toAminoMsg(message: MsgSetDenomMetadata): MsgSetDenomMetadataAminoMsg;
    fromProtoMsg(message: MsgSetDenomMetadataProtoMsg): MsgSetDenomMetadata;
    toProto(message: MsgSetDenomMetadata): Uint8Array;
    toProtoMsg(message: MsgSetDenomMetadata): MsgSetDenomMetadataProtoMsg;
};
export declare const MsgSetDenomMetadataResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgSetDenomMetadataResponse;
    isSDK(o: any): o is MsgSetDenomMetadataResponseSDKType;
    isAmino(o: any): o is MsgSetDenomMetadataResponseAmino;
    encode(_: MsgSetDenomMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDenomMetadataResponse;
    fromJSON(_: any): MsgSetDenomMetadataResponse;
    toJSON(_: MsgSetDenomMetadataResponse): unknown;
    fromPartial(_: DeepPartial<MsgSetDenomMetadataResponse>): MsgSetDenomMetadataResponse;
    fromSDK(_: MsgSetDenomMetadataResponseSDKType): MsgSetDenomMetadataResponse;
    toSDK(_: MsgSetDenomMetadataResponse): MsgSetDenomMetadataResponseSDKType;
    fromAmino(_: MsgSetDenomMetadataResponseAmino): MsgSetDenomMetadataResponse;
    toAmino(_: MsgSetDenomMetadataResponse): MsgSetDenomMetadataResponseAmino;
    fromAminoMsg(object: MsgSetDenomMetadataResponseAminoMsg): MsgSetDenomMetadataResponse;
    toAminoMsg(message: MsgSetDenomMetadataResponse): MsgSetDenomMetadataResponseAminoMsg;
    fromProtoMsg(message: MsgSetDenomMetadataResponseProtoMsg): MsgSetDenomMetadataResponse;
    toProto(message: MsgSetDenomMetadataResponse): Uint8Array;
    toProtoMsg(message: MsgSetDenomMetadataResponse): MsgSetDenomMetadataResponseProtoMsg;
};
