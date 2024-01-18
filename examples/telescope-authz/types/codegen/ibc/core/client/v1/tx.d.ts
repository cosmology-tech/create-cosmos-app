import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/** MsgCreateClient defines a message to create an IBC client */
export interface MsgCreateClient {
    /** light client state */
    clientState?: Any | undefined;
    /**
     * consensus state associated with the client that corresponds to a given
     * height.
     */
    consensusState?: Any | undefined;
    /** signer address */
    signer: string;
}
export interface MsgCreateClientProtoMsg {
    typeUrl: "/ibc.core.client.v1.MsgCreateClient";
    value: Uint8Array;
}
/** MsgCreateClient defines a message to create an IBC client */
export interface MsgCreateClientAmino {
    /** light client state */
    client_state?: AnyAmino | undefined;
    /**
     * consensus state associated with the client that corresponds to a given
     * height.
     */
    consensus_state?: AnyAmino | undefined;
    /** signer address */
    signer?: string;
}
export interface MsgCreateClientAminoMsg {
    type: "cosmos-sdk/MsgCreateClient";
    value: MsgCreateClientAmino;
}
/** MsgCreateClient defines a message to create an IBC client */
export interface MsgCreateClientSDKType {
    client_state?: AnySDKType | undefined;
    consensus_state?: AnySDKType | undefined;
    signer: string;
}
/** MsgCreateClientResponse defines the Msg/CreateClient response type. */
export interface MsgCreateClientResponse {
}
export interface MsgCreateClientResponseProtoMsg {
    typeUrl: "/ibc.core.client.v1.MsgCreateClientResponse";
    value: Uint8Array;
}
/** MsgCreateClientResponse defines the Msg/CreateClient response type. */
export interface MsgCreateClientResponseAmino {
}
export interface MsgCreateClientResponseAminoMsg {
    type: "cosmos-sdk/MsgCreateClientResponse";
    value: MsgCreateClientResponseAmino;
}
/** MsgCreateClientResponse defines the Msg/CreateClient response type. */
export interface MsgCreateClientResponseSDKType {
}
/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given header.
 */
export interface MsgUpdateClient {
    /** client unique identifier */
    clientId: string;
    /** header to update the light client */
    header?: Any | undefined;
    /** signer address */
    signer: string;
}
export interface MsgUpdateClientProtoMsg {
    typeUrl: "/ibc.core.client.v1.MsgUpdateClient";
    value: Uint8Array;
}
/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given header.
 */
export interface MsgUpdateClientAmino {
    /** client unique identifier */
    client_id?: string;
    /** header to update the light client */
    header?: AnyAmino | undefined;
    /** signer address */
    signer?: string;
}
export interface MsgUpdateClientAminoMsg {
    type: "cosmos-sdk/MsgUpdateClient";
    value: MsgUpdateClientAmino;
}
/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given header.
 */
export interface MsgUpdateClientSDKType {
    client_id: string;
    header?: AnySDKType | undefined;
    signer: string;
}
/** MsgUpdateClientResponse defines the Msg/UpdateClient response type. */
export interface MsgUpdateClientResponse {
}
export interface MsgUpdateClientResponseProtoMsg {
    typeUrl: "/ibc.core.client.v1.MsgUpdateClientResponse";
    value: Uint8Array;
}
/** MsgUpdateClientResponse defines the Msg/UpdateClient response type. */
export interface MsgUpdateClientResponseAmino {
}
export interface MsgUpdateClientResponseAminoMsg {
    type: "cosmos-sdk/MsgUpdateClientResponse";
    value: MsgUpdateClientResponseAmino;
}
/** MsgUpdateClientResponse defines the Msg/UpdateClient response type. */
export interface MsgUpdateClientResponseSDKType {
}
/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 */
export interface MsgUpgradeClient {
    /** client unique identifier */
    clientId: string;
    /** upgraded client state */
    clientState?: Any | undefined;
    /**
     * upgraded consensus state, only contains enough information to serve as a
     * basis of trust in update logic
     */
    consensusState?: Any | undefined;
    /** proof that old chain committed to new client */
    proofUpgradeClient: Uint8Array;
    /** proof that old chain committed to new consensus state */
    proofUpgradeConsensusState: Uint8Array;
    /** signer address */
    signer: string;
}
export interface MsgUpgradeClientProtoMsg {
    typeUrl: "/ibc.core.client.v1.MsgUpgradeClient";
    value: Uint8Array;
}
/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 */
export interface MsgUpgradeClientAmino {
    /** client unique identifier */
    client_id?: string;
    /** upgraded client state */
    client_state?: AnyAmino | undefined;
    /**
     * upgraded consensus state, only contains enough information to serve as a
     * basis of trust in update logic
     */
    consensus_state?: AnyAmino | undefined;
    /** proof that old chain committed to new client */
    proof_upgrade_client?: string;
    /** proof that old chain committed to new consensus state */
    proof_upgrade_consensus_state?: string;
    /** signer address */
    signer?: string;
}
export interface MsgUpgradeClientAminoMsg {
    type: "cosmos-sdk/MsgUpgradeClient";
    value: MsgUpgradeClientAmino;
}
/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 */
export interface MsgUpgradeClientSDKType {
    client_id: string;
    client_state?: AnySDKType | undefined;
    consensus_state?: AnySDKType | undefined;
    proof_upgrade_client: Uint8Array;
    proof_upgrade_consensus_state: Uint8Array;
    signer: string;
}
/** MsgUpgradeClientResponse defines the Msg/UpgradeClient response type. */
export interface MsgUpgradeClientResponse {
}
export interface MsgUpgradeClientResponseProtoMsg {
    typeUrl: "/ibc.core.client.v1.MsgUpgradeClientResponse";
    value: Uint8Array;
}
/** MsgUpgradeClientResponse defines the Msg/UpgradeClient response type. */
export interface MsgUpgradeClientResponseAmino {
}
export interface MsgUpgradeClientResponseAminoMsg {
    type: "cosmos-sdk/MsgUpgradeClientResponse";
    value: MsgUpgradeClientResponseAmino;
}
/** MsgUpgradeClientResponse defines the Msg/UpgradeClient response type. */
export interface MsgUpgradeClientResponseSDKType {
}
/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 */
export interface MsgSubmitMisbehaviour {
    /** client unique identifier */
    clientId: string;
    /** misbehaviour used for freezing the light client */
    misbehaviour?: Any | undefined;
    /** signer address */
    signer: string;
}
export interface MsgSubmitMisbehaviourProtoMsg {
    typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour";
    value: Uint8Array;
}
/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 */
export interface MsgSubmitMisbehaviourAmino {
    /** client unique identifier */
    client_id?: string;
    /** misbehaviour used for freezing the light client */
    misbehaviour?: AnyAmino | undefined;
    /** signer address */
    signer?: string;
}
export interface MsgSubmitMisbehaviourAminoMsg {
    type: "cosmos-sdk/MsgSubmitMisbehaviour";
    value: MsgSubmitMisbehaviourAmino;
}
/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 */
export interface MsgSubmitMisbehaviourSDKType {
    client_id: string;
    misbehaviour?: AnySDKType | undefined;
    signer: string;
}
/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 */
export interface MsgSubmitMisbehaviourResponse {
}
export interface MsgSubmitMisbehaviourResponseProtoMsg {
    typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviourResponse";
    value: Uint8Array;
}
/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 */
export interface MsgSubmitMisbehaviourResponseAmino {
}
export interface MsgSubmitMisbehaviourResponseAminoMsg {
    type: "cosmos-sdk/MsgSubmitMisbehaviourResponse";
    value: MsgSubmitMisbehaviourResponseAmino;
}
/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 */
export interface MsgSubmitMisbehaviourResponseSDKType {
}
export declare const MsgCreateClient: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgCreateClient;
    isSDK(o: any): o is MsgCreateClientSDKType;
    isAmino(o: any): o is MsgCreateClientAmino;
    encode(message: MsgCreateClient, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateClient;
    fromJSON(object: any): MsgCreateClient;
    toJSON(message: MsgCreateClient): unknown;
    fromPartial(object: DeepPartial<MsgCreateClient>): MsgCreateClient;
    fromSDK(object: MsgCreateClientSDKType): MsgCreateClient;
    toSDK(message: MsgCreateClient): MsgCreateClientSDKType;
    fromAmino(object: MsgCreateClientAmino): MsgCreateClient;
    toAmino(message: MsgCreateClient): MsgCreateClientAmino;
    fromAminoMsg(object: MsgCreateClientAminoMsg): MsgCreateClient;
    toAminoMsg(message: MsgCreateClient): MsgCreateClientAminoMsg;
    fromProtoMsg(message: MsgCreateClientProtoMsg): MsgCreateClient;
    toProto(message: MsgCreateClient): Uint8Array;
    toProtoMsg(message: MsgCreateClient): MsgCreateClientProtoMsg;
};
export declare const MsgCreateClientResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgCreateClientResponse;
    isSDK(o: any): o is MsgCreateClientResponseSDKType;
    isAmino(o: any): o is MsgCreateClientResponseAmino;
    encode(_: MsgCreateClientResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateClientResponse;
    fromJSON(_: any): MsgCreateClientResponse;
    toJSON(_: MsgCreateClientResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateClientResponse>): MsgCreateClientResponse;
    fromSDK(_: MsgCreateClientResponseSDKType): MsgCreateClientResponse;
    toSDK(_: MsgCreateClientResponse): MsgCreateClientResponseSDKType;
    fromAmino(_: MsgCreateClientResponseAmino): MsgCreateClientResponse;
    toAmino(_: MsgCreateClientResponse): MsgCreateClientResponseAmino;
    fromAminoMsg(object: MsgCreateClientResponseAminoMsg): MsgCreateClientResponse;
    toAminoMsg(message: MsgCreateClientResponse): MsgCreateClientResponseAminoMsg;
    fromProtoMsg(message: MsgCreateClientResponseProtoMsg): MsgCreateClientResponse;
    toProto(message: MsgCreateClientResponse): Uint8Array;
    toProtoMsg(message: MsgCreateClientResponse): MsgCreateClientResponseProtoMsg;
};
export declare const MsgUpdateClient: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUpdateClient;
    isSDK(o: any): o is MsgUpdateClientSDKType;
    isAmino(o: any): o is MsgUpdateClientAmino;
    encode(message: MsgUpdateClient, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClient;
    fromJSON(object: any): MsgUpdateClient;
    toJSON(message: MsgUpdateClient): unknown;
    fromPartial(object: DeepPartial<MsgUpdateClient>): MsgUpdateClient;
    fromSDK(object: MsgUpdateClientSDKType): MsgUpdateClient;
    toSDK(message: MsgUpdateClient): MsgUpdateClientSDKType;
    fromAmino(object: MsgUpdateClientAmino): MsgUpdateClient;
    toAmino(message: MsgUpdateClient): MsgUpdateClientAmino;
    fromAminoMsg(object: MsgUpdateClientAminoMsg): MsgUpdateClient;
    toAminoMsg(message: MsgUpdateClient): MsgUpdateClientAminoMsg;
    fromProtoMsg(message: MsgUpdateClientProtoMsg): MsgUpdateClient;
    toProto(message: MsgUpdateClient): Uint8Array;
    toProtoMsg(message: MsgUpdateClient): MsgUpdateClientProtoMsg;
};
export declare const MsgUpdateClientResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUpdateClientResponse;
    isSDK(o: any): o is MsgUpdateClientResponseSDKType;
    isAmino(o: any): o is MsgUpdateClientResponseAmino;
    encode(_: MsgUpdateClientResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClientResponse;
    fromJSON(_: any): MsgUpdateClientResponse;
    toJSON(_: MsgUpdateClientResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateClientResponse>): MsgUpdateClientResponse;
    fromSDK(_: MsgUpdateClientResponseSDKType): MsgUpdateClientResponse;
    toSDK(_: MsgUpdateClientResponse): MsgUpdateClientResponseSDKType;
    fromAmino(_: MsgUpdateClientResponseAmino): MsgUpdateClientResponse;
    toAmino(_: MsgUpdateClientResponse): MsgUpdateClientResponseAmino;
    fromAminoMsg(object: MsgUpdateClientResponseAminoMsg): MsgUpdateClientResponse;
    toAminoMsg(message: MsgUpdateClientResponse): MsgUpdateClientResponseAminoMsg;
    fromProtoMsg(message: MsgUpdateClientResponseProtoMsg): MsgUpdateClientResponse;
    toProto(message: MsgUpdateClientResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateClientResponse): MsgUpdateClientResponseProtoMsg;
};
export declare const MsgUpgradeClient: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUpgradeClient;
    isSDK(o: any): o is MsgUpgradeClientSDKType;
    isAmino(o: any): o is MsgUpgradeClientAmino;
    encode(message: MsgUpgradeClient, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpgradeClient;
    fromJSON(object: any): MsgUpgradeClient;
    toJSON(message: MsgUpgradeClient): unknown;
    fromPartial(object: DeepPartial<MsgUpgradeClient>): MsgUpgradeClient;
    fromSDK(object: MsgUpgradeClientSDKType): MsgUpgradeClient;
    toSDK(message: MsgUpgradeClient): MsgUpgradeClientSDKType;
    fromAmino(object: MsgUpgradeClientAmino): MsgUpgradeClient;
    toAmino(message: MsgUpgradeClient): MsgUpgradeClientAmino;
    fromAminoMsg(object: MsgUpgradeClientAminoMsg): MsgUpgradeClient;
    toAminoMsg(message: MsgUpgradeClient): MsgUpgradeClientAminoMsg;
    fromProtoMsg(message: MsgUpgradeClientProtoMsg): MsgUpgradeClient;
    toProto(message: MsgUpgradeClient): Uint8Array;
    toProtoMsg(message: MsgUpgradeClient): MsgUpgradeClientProtoMsg;
};
export declare const MsgUpgradeClientResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUpgradeClientResponse;
    isSDK(o: any): o is MsgUpgradeClientResponseSDKType;
    isAmino(o: any): o is MsgUpgradeClientResponseAmino;
    encode(_: MsgUpgradeClientResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpgradeClientResponse;
    fromJSON(_: any): MsgUpgradeClientResponse;
    toJSON(_: MsgUpgradeClientResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpgradeClientResponse>): MsgUpgradeClientResponse;
    fromSDK(_: MsgUpgradeClientResponseSDKType): MsgUpgradeClientResponse;
    toSDK(_: MsgUpgradeClientResponse): MsgUpgradeClientResponseSDKType;
    fromAmino(_: MsgUpgradeClientResponseAmino): MsgUpgradeClientResponse;
    toAmino(_: MsgUpgradeClientResponse): MsgUpgradeClientResponseAmino;
    fromAminoMsg(object: MsgUpgradeClientResponseAminoMsg): MsgUpgradeClientResponse;
    toAminoMsg(message: MsgUpgradeClientResponse): MsgUpgradeClientResponseAminoMsg;
    fromProtoMsg(message: MsgUpgradeClientResponseProtoMsg): MsgUpgradeClientResponse;
    toProto(message: MsgUpgradeClientResponse): Uint8Array;
    toProtoMsg(message: MsgUpgradeClientResponse): MsgUpgradeClientResponseProtoMsg;
};
export declare const MsgSubmitMisbehaviour: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgSubmitMisbehaviour;
    isSDK(o: any): o is MsgSubmitMisbehaviourSDKType;
    isAmino(o: any): o is MsgSubmitMisbehaviourAmino;
    encode(message: MsgSubmitMisbehaviour, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitMisbehaviour;
    fromJSON(object: any): MsgSubmitMisbehaviour;
    toJSON(message: MsgSubmitMisbehaviour): unknown;
    fromPartial(object: DeepPartial<MsgSubmitMisbehaviour>): MsgSubmitMisbehaviour;
    fromSDK(object: MsgSubmitMisbehaviourSDKType): MsgSubmitMisbehaviour;
    toSDK(message: MsgSubmitMisbehaviour): MsgSubmitMisbehaviourSDKType;
    fromAmino(object: MsgSubmitMisbehaviourAmino): MsgSubmitMisbehaviour;
    toAmino(message: MsgSubmitMisbehaviour): MsgSubmitMisbehaviourAmino;
    fromAminoMsg(object: MsgSubmitMisbehaviourAminoMsg): MsgSubmitMisbehaviour;
    toAminoMsg(message: MsgSubmitMisbehaviour): MsgSubmitMisbehaviourAminoMsg;
    fromProtoMsg(message: MsgSubmitMisbehaviourProtoMsg): MsgSubmitMisbehaviour;
    toProto(message: MsgSubmitMisbehaviour): Uint8Array;
    toProtoMsg(message: MsgSubmitMisbehaviour): MsgSubmitMisbehaviourProtoMsg;
};
export declare const MsgSubmitMisbehaviourResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgSubmitMisbehaviourResponse;
    isSDK(o: any): o is MsgSubmitMisbehaviourResponseSDKType;
    isAmino(o: any): o is MsgSubmitMisbehaviourResponseAmino;
    encode(_: MsgSubmitMisbehaviourResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitMisbehaviourResponse;
    fromJSON(_: any): MsgSubmitMisbehaviourResponse;
    toJSON(_: MsgSubmitMisbehaviourResponse): unknown;
    fromPartial(_: DeepPartial<MsgSubmitMisbehaviourResponse>): MsgSubmitMisbehaviourResponse;
    fromSDK(_: MsgSubmitMisbehaviourResponseSDKType): MsgSubmitMisbehaviourResponse;
    toSDK(_: MsgSubmitMisbehaviourResponse): MsgSubmitMisbehaviourResponseSDKType;
    fromAmino(_: MsgSubmitMisbehaviourResponseAmino): MsgSubmitMisbehaviourResponse;
    toAmino(_: MsgSubmitMisbehaviourResponse): MsgSubmitMisbehaviourResponseAmino;
    fromAminoMsg(object: MsgSubmitMisbehaviourResponseAminoMsg): MsgSubmitMisbehaviourResponse;
    toAminoMsg(message: MsgSubmitMisbehaviourResponse): MsgSubmitMisbehaviourResponseAminoMsg;
    fromProtoMsg(message: MsgSubmitMisbehaviourResponseProtoMsg): MsgSubmitMisbehaviourResponse;
    toProto(message: MsgSubmitMisbehaviourResponse): Uint8Array;
    toProtoMsg(message: MsgSubmitMisbehaviourResponse): MsgSubmitMisbehaviourResponseProtoMsg;
};
