import { Duration, DurationAmino, DurationSDKType } from "../../../../google/protobuf/duration";
import { Height, HeightAmino, HeightSDKType } from "../../../core/client/v1/client";
import { ProofSpec, ProofSpecAmino, ProofSpecSDKType } from "../../../../confio/proofs";
import { MerkleRoot, MerkleRootAmino, MerkleRootSDKType } from "../../../core/commitment/v1/commitment";
import { SignedHeader, SignedHeaderAmino, SignedHeaderSDKType } from "../../../../tendermint/types/types";
import { ValidatorSet, ValidatorSetAmino, ValidatorSetSDKType } from "../../../../tendermint/types/validator";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * ClientState from Tendermint tracks the current validator set, latest height,
 * and a possible frozen height.
 */
export interface ClientState {
    chainId: string;
    trustLevel: Fraction | undefined;
    /**
     * duration of the period since the LastestTimestamp during which the
     * submitted headers are valid for upgrade
     */
    trustingPeriod: Duration | undefined;
    /** duration of the staking unbonding period */
    unbondingPeriod: Duration | undefined;
    /** defines how much new (untrusted) header's Time can drift into the future. */
    maxClockDrift: Duration | undefined;
    /** Block height when the client was frozen due to a misbehaviour */
    frozenHeight: Height | undefined;
    /** Latest height the client was updated to */
    latestHeight: Height | undefined;
    /** Proof specifications used in verifying counterparty state */
    proofSpecs: ProofSpec[];
    /**
     * Path at which next upgraded client will be committed.
     * Each element corresponds to the key for a single CommitmentProof in the
     * chained proof. NOTE: ClientState must stored under
     * `{upgradePath}/{upgradeHeight}/clientState` ConsensusState must be stored
     * under `{upgradepath}/{upgradeHeight}/consensusState` For SDK chains using
     * the default upgrade module, upgrade_path should be []string{"upgrade",
     * "upgradedIBCState"}`
     */
    upgradePath: string[];
    /**
     * This flag, when set to true, will allow governance to recover a client
     * which has expired
     */
    allowUpdateAfterExpiry: boolean;
    /**
     * This flag, when set to true, will allow governance to unfreeze a client
     * whose chain has experienced a misbehaviour event
     */
    allowUpdateAfterMisbehaviour: boolean;
}
export interface ClientStateProtoMsg {
    typeUrl: "/ibc.lightclients.tendermint.v1.ClientState";
    value: Uint8Array;
}
/**
 * ClientState from Tendermint tracks the current validator set, latest height,
 * and a possible frozen height.
 */
export interface ClientStateAmino {
    chain_id?: string;
    trust_level?: FractionAmino | undefined;
    /**
     * duration of the period since the LastestTimestamp during which the
     * submitted headers are valid for upgrade
     */
    trusting_period?: DurationAmino | undefined;
    /** duration of the staking unbonding period */
    unbonding_period?: DurationAmino | undefined;
    /** defines how much new (untrusted) header's Time can drift into the future. */
    max_clock_drift?: DurationAmino | undefined;
    /** Block height when the client was frozen due to a misbehaviour */
    frozen_height?: HeightAmino | undefined;
    /** Latest height the client was updated to */
    latest_height?: HeightAmino | undefined;
    /** Proof specifications used in verifying counterparty state */
    proof_specs?: ProofSpecAmino[];
    /**
     * Path at which next upgraded client will be committed.
     * Each element corresponds to the key for a single CommitmentProof in the
     * chained proof. NOTE: ClientState must stored under
     * `{upgradePath}/{upgradeHeight}/clientState` ConsensusState must be stored
     * under `{upgradepath}/{upgradeHeight}/consensusState` For SDK chains using
     * the default upgrade module, upgrade_path should be []string{"upgrade",
     * "upgradedIBCState"}`
     */
    upgrade_path?: string[];
    /**
     * This flag, when set to true, will allow governance to recover a client
     * which has expired
     */
    allow_update_after_expiry?: boolean;
    /**
     * This flag, when set to true, will allow governance to unfreeze a client
     * whose chain has experienced a misbehaviour event
     */
    allow_update_after_misbehaviour?: boolean;
}
export interface ClientStateAminoMsg {
    type: "cosmos-sdk/ClientState";
    value: ClientStateAmino;
}
/**
 * ClientState from Tendermint tracks the current validator set, latest height,
 * and a possible frozen height.
 */
export interface ClientStateSDKType {
    chain_id: string;
    trust_level: FractionSDKType | undefined;
    trusting_period: DurationSDKType | undefined;
    unbonding_period: DurationSDKType | undefined;
    max_clock_drift: DurationSDKType | undefined;
    frozen_height: HeightSDKType | undefined;
    latest_height: HeightSDKType | undefined;
    proof_specs: ProofSpecSDKType[];
    upgrade_path: string[];
    allow_update_after_expiry: boolean;
    allow_update_after_misbehaviour: boolean;
}
/** ConsensusState defines the consensus state from Tendermint. */
export interface ConsensusState {
    /**
     * timestamp that corresponds to the block height in which the ConsensusState
     * was stored.
     */
    timestamp: Date | undefined;
    /** commitment root (i.e app hash) */
    root: MerkleRoot | undefined;
    nextValidatorsHash: Uint8Array;
}
export interface ConsensusStateProtoMsg {
    typeUrl: "/ibc.lightclients.tendermint.v1.ConsensusState";
    value: Uint8Array;
}
/** ConsensusState defines the consensus state from Tendermint. */
export interface ConsensusStateAmino {
    /**
     * timestamp that corresponds to the block height in which the ConsensusState
     * was stored.
     */
    timestamp?: string | undefined;
    /** commitment root (i.e app hash) */
    root?: MerkleRootAmino | undefined;
    next_validators_hash?: string;
}
export interface ConsensusStateAminoMsg {
    type: "cosmos-sdk/ConsensusState";
    value: ConsensusStateAmino;
}
/** ConsensusState defines the consensus state from Tendermint. */
export interface ConsensusStateSDKType {
    timestamp: Date | undefined;
    root: MerkleRootSDKType | undefined;
    next_validators_hash: Uint8Array;
}
/**
 * Misbehaviour is a wrapper over two conflicting Headers
 * that implements Misbehaviour interface expected by ICS-02
 */
export interface Misbehaviour {
    clientId: string;
    header1?: Header | undefined;
    header2?: Header | undefined;
}
export interface MisbehaviourProtoMsg {
    typeUrl: "/ibc.lightclients.tendermint.v1.Misbehaviour";
    value: Uint8Array;
}
/**
 * Misbehaviour is a wrapper over two conflicting Headers
 * that implements Misbehaviour interface expected by ICS-02
 */
export interface MisbehaviourAmino {
    client_id?: string;
    header_1?: HeaderAmino | undefined;
    header_2?: HeaderAmino | undefined;
}
export interface MisbehaviourAminoMsg {
    type: "cosmos-sdk/Misbehaviour";
    value: MisbehaviourAmino;
}
/**
 * Misbehaviour is a wrapper over two conflicting Headers
 * that implements Misbehaviour interface expected by ICS-02
 */
export interface MisbehaviourSDKType {
    client_id: string;
    header_1?: HeaderSDKType | undefined;
    header_2?: HeaderSDKType | undefined;
}
/**
 * Header defines the Tendermint client consensus Header.
 * It encapsulates all the information necessary to update from a trusted
 * Tendermint ConsensusState. The inclusion of TrustedHeight and
 * TrustedValidators allows this update to process correctly, so long as the
 * ConsensusState for the TrustedHeight exists, this removes race conditions
 * among relayers The SignedHeader and ValidatorSet are the new untrusted update
 * fields for the client. The TrustedHeight is the height of a stored
 * ConsensusState on the client that will be used to verify the new untrusted
 * header. The Trusted ConsensusState must be within the unbonding period of
 * current time in order to correctly verify, and the TrustedValidators must
 * hash to TrustedConsensusState.NextValidatorsHash since that is the last
 * trusted validator set at the TrustedHeight.
 */
export interface Header {
    signedHeader?: SignedHeader | undefined;
    validatorSet?: ValidatorSet | undefined;
    trustedHeight: Height | undefined;
    trustedValidators?: ValidatorSet | undefined;
}
export interface HeaderProtoMsg {
    typeUrl: "/ibc.lightclients.tendermint.v1.Header";
    value: Uint8Array;
}
/**
 * Header defines the Tendermint client consensus Header.
 * It encapsulates all the information necessary to update from a trusted
 * Tendermint ConsensusState. The inclusion of TrustedHeight and
 * TrustedValidators allows this update to process correctly, so long as the
 * ConsensusState for the TrustedHeight exists, this removes race conditions
 * among relayers The SignedHeader and ValidatorSet are the new untrusted update
 * fields for the client. The TrustedHeight is the height of a stored
 * ConsensusState on the client that will be used to verify the new untrusted
 * header. The Trusted ConsensusState must be within the unbonding period of
 * current time in order to correctly verify, and the TrustedValidators must
 * hash to TrustedConsensusState.NextValidatorsHash since that is the last
 * trusted validator set at the TrustedHeight.
 */
export interface HeaderAmino {
    signed_header?: SignedHeaderAmino | undefined;
    validator_set?: ValidatorSetAmino | undefined;
    trusted_height?: HeightAmino | undefined;
    trusted_validators?: ValidatorSetAmino | undefined;
}
export interface HeaderAminoMsg {
    type: "cosmos-sdk/Header";
    value: HeaderAmino;
}
/**
 * Header defines the Tendermint client consensus Header.
 * It encapsulates all the information necessary to update from a trusted
 * Tendermint ConsensusState. The inclusion of TrustedHeight and
 * TrustedValidators allows this update to process correctly, so long as the
 * ConsensusState for the TrustedHeight exists, this removes race conditions
 * among relayers The SignedHeader and ValidatorSet are the new untrusted update
 * fields for the client. The TrustedHeight is the height of a stored
 * ConsensusState on the client that will be used to verify the new untrusted
 * header. The Trusted ConsensusState must be within the unbonding period of
 * current time in order to correctly verify, and the TrustedValidators must
 * hash to TrustedConsensusState.NextValidatorsHash since that is the last
 * trusted validator set at the TrustedHeight.
 */
export interface HeaderSDKType {
    signed_header?: SignedHeaderSDKType | undefined;
    validator_set?: ValidatorSetSDKType | undefined;
    trusted_height: HeightSDKType | undefined;
    trusted_validators?: ValidatorSetSDKType | undefined;
}
/**
 * Fraction defines the protobuf message type for tmmath.Fraction that only
 * supports positive values.
 */
export interface Fraction {
    numerator: bigint;
    denominator: bigint;
}
export interface FractionProtoMsg {
    typeUrl: "/ibc.lightclients.tendermint.v1.Fraction";
    value: Uint8Array;
}
/**
 * Fraction defines the protobuf message type for tmmath.Fraction that only
 * supports positive values.
 */
export interface FractionAmino {
    numerator?: string;
    denominator?: string;
}
export interface FractionAminoMsg {
    type: "cosmos-sdk/Fraction";
    value: FractionAmino;
}
/**
 * Fraction defines the protobuf message type for tmmath.Fraction that only
 * supports positive values.
 */
export interface FractionSDKType {
    numerator: bigint;
    denominator: bigint;
}
export declare const ClientState: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ClientState;
    isSDK(o: any): o is ClientStateSDKType;
    isAmino(o: any): o is ClientStateAmino;
    encode(message: ClientState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ClientState;
    fromJSON(object: any): ClientState;
    toJSON(message: ClientState): unknown;
    fromPartial(object: DeepPartial<ClientState>): ClientState;
    fromSDK(object: ClientStateSDKType): ClientState;
    toSDK(message: ClientState): ClientStateSDKType;
    fromAmino(object: ClientStateAmino): ClientState;
    toAmino(message: ClientState): ClientStateAmino;
    fromAminoMsg(object: ClientStateAminoMsg): ClientState;
    toAminoMsg(message: ClientState): ClientStateAminoMsg;
    fromProtoMsg(message: ClientStateProtoMsg): ClientState;
    toProto(message: ClientState): Uint8Array;
    toProtoMsg(message: ClientState): ClientStateProtoMsg;
};
export declare const ConsensusState: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ConsensusState;
    isSDK(o: any): o is ConsensusStateSDKType;
    isAmino(o: any): o is ConsensusStateAmino;
    encode(message: ConsensusState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ConsensusState;
    fromJSON(object: any): ConsensusState;
    toJSON(message: ConsensusState): unknown;
    fromPartial(object: DeepPartial<ConsensusState>): ConsensusState;
    fromSDK(object: ConsensusStateSDKType): ConsensusState;
    toSDK(message: ConsensusState): ConsensusStateSDKType;
    fromAmino(object: ConsensusStateAmino): ConsensusState;
    toAmino(message: ConsensusState): ConsensusStateAmino;
    fromAminoMsg(object: ConsensusStateAminoMsg): ConsensusState;
    toAminoMsg(message: ConsensusState): ConsensusStateAminoMsg;
    fromProtoMsg(message: ConsensusStateProtoMsg): ConsensusState;
    toProto(message: ConsensusState): Uint8Array;
    toProtoMsg(message: ConsensusState): ConsensusStateProtoMsg;
};
export declare const Misbehaviour: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Misbehaviour;
    isSDK(o: any): o is MisbehaviourSDKType;
    isAmino(o: any): o is MisbehaviourAmino;
    encode(message: Misbehaviour, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Misbehaviour;
    fromJSON(object: any): Misbehaviour;
    toJSON(message: Misbehaviour): unknown;
    fromPartial(object: DeepPartial<Misbehaviour>): Misbehaviour;
    fromSDK(object: MisbehaviourSDKType): Misbehaviour;
    toSDK(message: Misbehaviour): MisbehaviourSDKType;
    fromAmino(object: MisbehaviourAmino): Misbehaviour;
    toAmino(message: Misbehaviour): MisbehaviourAmino;
    fromAminoMsg(object: MisbehaviourAminoMsg): Misbehaviour;
    toAminoMsg(message: Misbehaviour): MisbehaviourAminoMsg;
    fromProtoMsg(message: MisbehaviourProtoMsg): Misbehaviour;
    toProto(message: Misbehaviour): Uint8Array;
    toProtoMsg(message: Misbehaviour): MisbehaviourProtoMsg;
};
export declare const Header: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Header;
    isSDK(o: any): o is HeaderSDKType;
    isAmino(o: any): o is HeaderAmino;
    encode(message: Header, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Header;
    fromJSON(object: any): Header;
    toJSON(message: Header): unknown;
    fromPartial(object: DeepPartial<Header>): Header;
    fromSDK(object: HeaderSDKType): Header;
    toSDK(message: Header): HeaderSDKType;
    fromAmino(object: HeaderAmino): Header;
    toAmino(message: Header): HeaderAmino;
    fromAminoMsg(object: HeaderAminoMsg): Header;
    toAminoMsg(message: Header): HeaderAminoMsg;
    fromProtoMsg(message: HeaderProtoMsg): Header;
    toProto(message: Header): Uint8Array;
    toProtoMsg(message: Header): HeaderProtoMsg;
};
export declare const Fraction: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Fraction;
    isSDK(o: any): o is FractionSDKType;
    isAmino(o: any): o is FractionAmino;
    encode(message: Fraction, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Fraction;
    fromJSON(object: any): Fraction;
    toJSON(message: Fraction): unknown;
    fromPartial(object: DeepPartial<Fraction>): Fraction;
    fromSDK(object: FractionSDKType): Fraction;
    toSDK(message: Fraction): FractionSDKType;
    fromAmino(object: FractionAmino): Fraction;
    toAmino(message: Fraction): FractionAmino;
    fromAminoMsg(object: FractionAminoMsg): Fraction;
    toAminoMsg(message: Fraction): FractionAminoMsg;
    fromProtoMsg(message: FractionProtoMsg): Fraction;
    toProto(message: Fraction): Uint8Array;
    toProtoMsg(message: Fraction): FractionProtoMsg;
};
