import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { Plan, PlanAmino, PlanSDKType } from "../../../../cosmos/upgrade/v1beta1/upgrade";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * IdentifiedClientState defines a client state with an additional client
 * identifier field.
 */
export interface IdentifiedClientState {
    /** client identifier */
    clientId: string;
    /** client state */
    clientState?: Any | undefined;
}
export interface IdentifiedClientStateProtoMsg {
    typeUrl: "/ibc.core.client.v1.IdentifiedClientState";
    value: Uint8Array;
}
/**
 * IdentifiedClientState defines a client state with an additional client
 * identifier field.
 */
export interface IdentifiedClientStateAmino {
    /** client identifier */
    client_id?: string;
    /** client state */
    client_state?: AnyAmino | undefined;
}
export interface IdentifiedClientStateAminoMsg {
    type: "cosmos-sdk/IdentifiedClientState";
    value: IdentifiedClientStateAmino;
}
/**
 * IdentifiedClientState defines a client state with an additional client
 * identifier field.
 */
export interface IdentifiedClientStateSDKType {
    client_id: string;
    client_state?: AnySDKType | undefined;
}
/**
 * ConsensusStateWithHeight defines a consensus state with an additional height
 * field.
 */
export interface ConsensusStateWithHeight {
    /** consensus state height */
    height: Height | undefined;
    /** consensus state */
    consensusState?: Any | undefined;
}
export interface ConsensusStateWithHeightProtoMsg {
    typeUrl: "/ibc.core.client.v1.ConsensusStateWithHeight";
    value: Uint8Array;
}
/**
 * ConsensusStateWithHeight defines a consensus state with an additional height
 * field.
 */
export interface ConsensusStateWithHeightAmino {
    /** consensus state height */
    height?: HeightAmino | undefined;
    /** consensus state */
    consensus_state?: AnyAmino | undefined;
}
export interface ConsensusStateWithHeightAminoMsg {
    type: "cosmos-sdk/ConsensusStateWithHeight";
    value: ConsensusStateWithHeightAmino;
}
/**
 * ConsensusStateWithHeight defines a consensus state with an additional height
 * field.
 */
export interface ConsensusStateWithHeightSDKType {
    height: HeightSDKType | undefined;
    consensus_state?: AnySDKType | undefined;
}
/**
 * ClientConsensusStates defines all the stored consensus states for a given
 * client.
 */
export interface ClientConsensusStates {
    /** client identifier */
    clientId: string;
    /** consensus states and their heights associated with the client */
    consensusStates: ConsensusStateWithHeight[];
}
export interface ClientConsensusStatesProtoMsg {
    typeUrl: "/ibc.core.client.v1.ClientConsensusStates";
    value: Uint8Array;
}
/**
 * ClientConsensusStates defines all the stored consensus states for a given
 * client.
 */
export interface ClientConsensusStatesAmino {
    /** client identifier */
    client_id?: string;
    /** consensus states and their heights associated with the client */
    consensus_states?: ConsensusStateWithHeightAmino[];
}
export interface ClientConsensusStatesAminoMsg {
    type: "cosmos-sdk/ClientConsensusStates";
    value: ClientConsensusStatesAmino;
}
/**
 * ClientConsensusStates defines all the stored consensus states for a given
 * client.
 */
export interface ClientConsensusStatesSDKType {
    client_id: string;
    consensus_states: ConsensusStateWithHeightSDKType[];
}
/**
 * ClientUpdateProposal is a governance proposal. If it passes, the substitute
 * client's latest consensus state is copied over to the subject client. The proposal
 * handler may fail if the subject and the substitute do not match in client and
 * chain parameters (with exception to latest height, frozen height, and chain-id).
 */
export interface ClientUpdateProposal {
    $typeUrl?: "/ibc.core.client.v1.ClientUpdateProposal";
    /** the title of the update proposal */
    title: string;
    /** the description of the proposal */
    description: string;
    /** the client identifier for the client to be updated if the proposal passes */
    subjectClientId: string;
    /**
     * the substitute client identifier for the client standing in for the subject
     * client
     */
    substituteClientId: string;
}
export interface ClientUpdateProposalProtoMsg {
    typeUrl: "/ibc.core.client.v1.ClientUpdateProposal";
    value: Uint8Array;
}
/**
 * ClientUpdateProposal is a governance proposal. If it passes, the substitute
 * client's latest consensus state is copied over to the subject client. The proposal
 * handler may fail if the subject and the substitute do not match in client and
 * chain parameters (with exception to latest height, frozen height, and chain-id).
 */
export interface ClientUpdateProposalAmino {
    /** the title of the update proposal */
    title?: string;
    /** the description of the proposal */
    description?: string;
    /** the client identifier for the client to be updated if the proposal passes */
    subject_client_id?: string;
    /**
     * the substitute client identifier for the client standing in for the subject
     * client
     */
    substitute_client_id?: string;
}
export interface ClientUpdateProposalAminoMsg {
    type: "cosmos-sdk/ClientUpdateProposal";
    value: ClientUpdateProposalAmino;
}
/**
 * ClientUpdateProposal is a governance proposal. If it passes, the substitute
 * client's latest consensus state is copied over to the subject client. The proposal
 * handler may fail if the subject and the substitute do not match in client and
 * chain parameters (with exception to latest height, frozen height, and chain-id).
 */
export interface ClientUpdateProposalSDKType {
    $typeUrl?: "/ibc.core.client.v1.ClientUpdateProposal";
    title: string;
    description: string;
    subject_client_id: string;
    substitute_client_id: string;
}
/**
 * UpgradeProposal is a gov Content type for initiating an IBC breaking
 * upgrade.
 */
export interface UpgradeProposal {
    $typeUrl?: "/ibc.core.client.v1.UpgradeProposal";
    title: string;
    description: string;
    plan: Plan | undefined;
    /**
     * An UpgradedClientState must be provided to perform an IBC breaking upgrade.
     * This will make the chain commit to the correct upgraded (self) client state
     * before the upgrade occurs, so that connecting chains can verify that the
     * new upgraded client is valid by verifying a proof on the previous version
     * of the chain. This will allow IBC connections to persist smoothly across
     * planned chain upgrades
     */
    upgradedClientState?: Any | undefined;
}
export interface UpgradeProposalProtoMsg {
    typeUrl: "/ibc.core.client.v1.UpgradeProposal";
    value: Uint8Array;
}
/**
 * UpgradeProposal is a gov Content type for initiating an IBC breaking
 * upgrade.
 */
export interface UpgradeProposalAmino {
    title?: string;
    description?: string;
    plan?: PlanAmino | undefined;
    /**
     * An UpgradedClientState must be provided to perform an IBC breaking upgrade.
     * This will make the chain commit to the correct upgraded (self) client state
     * before the upgrade occurs, so that connecting chains can verify that the
     * new upgraded client is valid by verifying a proof on the previous version
     * of the chain. This will allow IBC connections to persist smoothly across
     * planned chain upgrades
     */
    upgraded_client_state?: AnyAmino | undefined;
}
export interface UpgradeProposalAminoMsg {
    type: "cosmos-sdk/UpgradeProposal";
    value: UpgradeProposalAmino;
}
/**
 * UpgradeProposal is a gov Content type for initiating an IBC breaking
 * upgrade.
 */
export interface UpgradeProposalSDKType {
    $typeUrl?: "/ibc.core.client.v1.UpgradeProposal";
    title: string;
    description: string;
    plan: PlanSDKType | undefined;
    upgraded_client_state?: AnySDKType | undefined;
}
/**
 * Height is a monotonically increasing data type
 * that can be compared against another Height for the purposes of updating and
 * freezing clients
 *
 * Normally the RevisionHeight is incremented at each height while keeping
 * RevisionNumber the same. However some consensus algorithms may choose to
 * reset the height in certain conditions e.g. hard forks, state-machine
 * breaking changes In these cases, the RevisionNumber is incremented so that
 * height continues to be monitonically increasing even as the RevisionHeight
 * gets reset
 */
export interface Height {
    /** the revision that the client is currently on */
    revisionNumber: bigint;
    /** the height within the given revision */
    revisionHeight: bigint;
}
export interface HeightProtoMsg {
    typeUrl: "/ibc.core.client.v1.Height";
    value: Uint8Array;
}
/**
 * Height is a monotonically increasing data type
 * that can be compared against another Height for the purposes of updating and
 * freezing clients
 *
 * Normally the RevisionHeight is incremented at each height while keeping
 * RevisionNumber the same. However some consensus algorithms may choose to
 * reset the height in certain conditions e.g. hard forks, state-machine
 * breaking changes In these cases, the RevisionNumber is incremented so that
 * height continues to be monitonically increasing even as the RevisionHeight
 * gets reset
 */
export interface HeightAmino {
    /** the revision that the client is currently on */
    revision_number?: string;
    /** the height within the given revision */
    revision_height?: string;
}
export interface HeightAminoMsg {
    type: "cosmos-sdk/Height";
    value: HeightAmino;
}
/**
 * Height is a monotonically increasing data type
 * that can be compared against another Height for the purposes of updating and
 * freezing clients
 *
 * Normally the RevisionHeight is incremented at each height while keeping
 * RevisionNumber the same. However some consensus algorithms may choose to
 * reset the height in certain conditions e.g. hard forks, state-machine
 * breaking changes In these cases, the RevisionNumber is incremented so that
 * height continues to be monitonically increasing even as the RevisionHeight
 * gets reset
 */
export interface HeightSDKType {
    revision_number: bigint;
    revision_height: bigint;
}
/** Params defines the set of IBC light client parameters. */
export interface Params {
    /** allowed_clients defines the list of allowed client state types. */
    allowedClients: string[];
}
export interface ParamsProtoMsg {
    typeUrl: "/ibc.core.client.v1.Params";
    value: Uint8Array;
}
/** Params defines the set of IBC light client parameters. */
export interface ParamsAmino {
    /** allowed_clients defines the list of allowed client state types. */
    allowed_clients?: string[];
}
export interface ParamsAminoMsg {
    type: "cosmos-sdk/Params";
    value: ParamsAmino;
}
/** Params defines the set of IBC light client parameters. */
export interface ParamsSDKType {
    allowed_clients: string[];
}
export declare const IdentifiedClientState: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is IdentifiedClientState;
    isSDK(o: any): o is IdentifiedClientStateSDKType;
    isAmino(o: any): o is IdentifiedClientStateAmino;
    encode(message: IdentifiedClientState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): IdentifiedClientState;
    fromJSON(object: any): IdentifiedClientState;
    toJSON(message: IdentifiedClientState): unknown;
    fromPartial(object: DeepPartial<IdentifiedClientState>): IdentifiedClientState;
    fromSDK(object: IdentifiedClientStateSDKType): IdentifiedClientState;
    toSDK(message: IdentifiedClientState): IdentifiedClientStateSDKType;
    fromAmino(object: IdentifiedClientStateAmino): IdentifiedClientState;
    toAmino(message: IdentifiedClientState): IdentifiedClientStateAmino;
    fromAminoMsg(object: IdentifiedClientStateAminoMsg): IdentifiedClientState;
    toAminoMsg(message: IdentifiedClientState): IdentifiedClientStateAminoMsg;
    fromProtoMsg(message: IdentifiedClientStateProtoMsg): IdentifiedClientState;
    toProto(message: IdentifiedClientState): Uint8Array;
    toProtoMsg(message: IdentifiedClientState): IdentifiedClientStateProtoMsg;
};
export declare const ConsensusStateWithHeight: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ConsensusStateWithHeight;
    isSDK(o: any): o is ConsensusStateWithHeightSDKType;
    isAmino(o: any): o is ConsensusStateWithHeightAmino;
    encode(message: ConsensusStateWithHeight, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ConsensusStateWithHeight;
    fromJSON(object: any): ConsensusStateWithHeight;
    toJSON(message: ConsensusStateWithHeight): unknown;
    fromPartial(object: DeepPartial<ConsensusStateWithHeight>): ConsensusStateWithHeight;
    fromSDK(object: ConsensusStateWithHeightSDKType): ConsensusStateWithHeight;
    toSDK(message: ConsensusStateWithHeight): ConsensusStateWithHeightSDKType;
    fromAmino(object: ConsensusStateWithHeightAmino): ConsensusStateWithHeight;
    toAmino(message: ConsensusStateWithHeight): ConsensusStateWithHeightAmino;
    fromAminoMsg(object: ConsensusStateWithHeightAminoMsg): ConsensusStateWithHeight;
    toAminoMsg(message: ConsensusStateWithHeight): ConsensusStateWithHeightAminoMsg;
    fromProtoMsg(message: ConsensusStateWithHeightProtoMsg): ConsensusStateWithHeight;
    toProto(message: ConsensusStateWithHeight): Uint8Array;
    toProtoMsg(message: ConsensusStateWithHeight): ConsensusStateWithHeightProtoMsg;
};
export declare const ClientConsensusStates: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ClientConsensusStates;
    isSDK(o: any): o is ClientConsensusStatesSDKType;
    isAmino(o: any): o is ClientConsensusStatesAmino;
    encode(message: ClientConsensusStates, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ClientConsensusStates;
    fromJSON(object: any): ClientConsensusStates;
    toJSON(message: ClientConsensusStates): unknown;
    fromPartial(object: DeepPartial<ClientConsensusStates>): ClientConsensusStates;
    fromSDK(object: ClientConsensusStatesSDKType): ClientConsensusStates;
    toSDK(message: ClientConsensusStates): ClientConsensusStatesSDKType;
    fromAmino(object: ClientConsensusStatesAmino): ClientConsensusStates;
    toAmino(message: ClientConsensusStates): ClientConsensusStatesAmino;
    fromAminoMsg(object: ClientConsensusStatesAminoMsg): ClientConsensusStates;
    toAminoMsg(message: ClientConsensusStates): ClientConsensusStatesAminoMsg;
    fromProtoMsg(message: ClientConsensusStatesProtoMsg): ClientConsensusStates;
    toProto(message: ClientConsensusStates): Uint8Array;
    toProtoMsg(message: ClientConsensusStates): ClientConsensusStatesProtoMsg;
};
export declare const ClientUpdateProposal: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ClientUpdateProposal;
    isSDK(o: any): o is ClientUpdateProposalSDKType;
    isAmino(o: any): o is ClientUpdateProposalAmino;
    encode(message: ClientUpdateProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ClientUpdateProposal;
    fromJSON(object: any): ClientUpdateProposal;
    toJSON(message: ClientUpdateProposal): unknown;
    fromPartial(object: DeepPartial<ClientUpdateProposal>): ClientUpdateProposal;
    fromSDK(object: ClientUpdateProposalSDKType): ClientUpdateProposal;
    toSDK(message: ClientUpdateProposal): ClientUpdateProposalSDKType;
    fromAmino(object: ClientUpdateProposalAmino): ClientUpdateProposal;
    toAmino(message: ClientUpdateProposal): ClientUpdateProposalAmino;
    fromAminoMsg(object: ClientUpdateProposalAminoMsg): ClientUpdateProposal;
    toAminoMsg(message: ClientUpdateProposal): ClientUpdateProposalAminoMsg;
    fromProtoMsg(message: ClientUpdateProposalProtoMsg): ClientUpdateProposal;
    toProto(message: ClientUpdateProposal): Uint8Array;
    toProtoMsg(message: ClientUpdateProposal): ClientUpdateProposalProtoMsg;
};
export declare const UpgradeProposal: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is UpgradeProposal;
    isSDK(o: any): o is UpgradeProposalSDKType;
    isAmino(o: any): o is UpgradeProposalAmino;
    encode(message: UpgradeProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UpgradeProposal;
    fromJSON(object: any): UpgradeProposal;
    toJSON(message: UpgradeProposal): unknown;
    fromPartial(object: DeepPartial<UpgradeProposal>): UpgradeProposal;
    fromSDK(object: UpgradeProposalSDKType): UpgradeProposal;
    toSDK(message: UpgradeProposal): UpgradeProposalSDKType;
    fromAmino(object: UpgradeProposalAmino): UpgradeProposal;
    toAmino(message: UpgradeProposal): UpgradeProposalAmino;
    fromAminoMsg(object: UpgradeProposalAminoMsg): UpgradeProposal;
    toAminoMsg(message: UpgradeProposal): UpgradeProposalAminoMsg;
    fromProtoMsg(message: UpgradeProposalProtoMsg): UpgradeProposal;
    toProto(message: UpgradeProposal): Uint8Array;
    toProtoMsg(message: UpgradeProposal): UpgradeProposalProtoMsg;
};
export declare const Height: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Height;
    isSDK(o: any): o is HeightSDKType;
    isAmino(o: any): o is HeightAmino;
    encode(message: Height, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Height;
    fromJSON(object: any): Height;
    toJSON(message: Height): unknown;
    fromPartial(object: DeepPartial<Height>): Height;
    fromSDK(object: HeightSDKType): Height;
    toSDK(message: Height): HeightSDKType;
    fromAmino(object: HeightAmino): Height;
    toAmino(message: Height): HeightAmino;
    fromAminoMsg(object: HeightAminoMsg): Height;
    toAminoMsg(message: Height): HeightAminoMsg;
    fromProtoMsg(message: HeightProtoMsg): Height;
    toProto(message: Height): Uint8Array;
    toProtoMsg(message: Height): HeightProtoMsg;
};
export declare const Params: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Params;
    isSDK(o: any): o is ParamsSDKType;
    isAmino(o: any): o is ParamsAmino;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
    fromSDK(object: ParamsSDKType): Params;
    toSDK(message: Params): ParamsSDKType;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    toAminoMsg(message: Params): ParamsAminoMsg;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
