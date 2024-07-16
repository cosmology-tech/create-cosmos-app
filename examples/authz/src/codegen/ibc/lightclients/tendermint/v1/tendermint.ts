//@ts-nocheck
import { Duration, DurationAmino, DurationSDKType } from "../../../../google/protobuf/duration";
import { Height, HeightAmino, HeightSDKType } from "../../../core/client/v1/client";
import { ProofSpec, ProofSpecAmino, ProofSpecSDKType } from "../../../../confio/proofs";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../../google/protobuf/timestamp";
import { MerkleRoot, MerkleRootAmino, MerkleRootSDKType } from "../../../core/commitment/v1/commitment";
import { SignedHeader, SignedHeaderAmino, SignedHeaderSDKType } from "../../../../tendermint/types/types";
import { ValidatorSet, ValidatorSetAmino, ValidatorSetSDKType } from "../../../../tendermint/types/validator";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, toTimestamp, fromTimestamp, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
import { GlobalDecoderRegistry } from "../../../../registry";
export const protobufPackage = "ibc.lightclients.tendermint.v1";
/**
 * ClientState from Tendermint tracks the current validator set, latest height,
 * and a possible frozen height.
 */
export interface ClientState {
  chainId: string;
  trustLevel: Fraction;
  /**
   * duration of the period since the LastestTimestamp during which the
   * submitted headers are valid for upgrade
   */
  trustingPeriod: Duration;
  /** duration of the staking unbonding period */
  unbondingPeriod: Duration;
  /** defines how much new (untrusted) header's Time can drift into the future. */
  maxClockDrift: Duration;
  /** Block height when the client was frozen due to a misbehaviour */
  frozenHeight: Height;
  /** Latest height the client was updated to */
  latestHeight: Height;
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
  trust_level?: FractionAmino;
  /**
   * duration of the period since the LastestTimestamp during which the
   * submitted headers are valid for upgrade
   */
  trusting_period?: DurationAmino;
  /** duration of the staking unbonding period */
  unbonding_period?: DurationAmino;
  /** defines how much new (untrusted) header's Time can drift into the future. */
  max_clock_drift?: DurationAmino;
  /** Block height when the client was frozen due to a misbehaviour */
  frozen_height?: HeightAmino;
  /** Latest height the client was updated to */
  latest_height?: HeightAmino;
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
  trust_level: FractionSDKType;
  trusting_period: DurationSDKType;
  unbonding_period: DurationSDKType;
  max_clock_drift: DurationSDKType;
  frozen_height: HeightSDKType;
  latest_height: HeightSDKType;
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
  timestamp: Date;
  /** commitment root (i.e app hash) */
  root: MerkleRoot;
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
  timestamp?: string;
  /** commitment root (i.e app hash) */
  root?: MerkleRootAmino;
  next_validators_hash?: string;
}
export interface ConsensusStateAminoMsg {
  type: "cosmos-sdk/ConsensusState";
  value: ConsensusStateAmino;
}
/** ConsensusState defines the consensus state from Tendermint. */
export interface ConsensusStateSDKType {
  timestamp: Date;
  root: MerkleRootSDKType;
  next_validators_hash: Uint8Array;
}
/**
 * Misbehaviour is a wrapper over two conflicting Headers
 * that implements Misbehaviour interface expected by ICS-02
 */
export interface Misbehaviour {
  clientId: string;
  header1?: Header;
  header2?: Header;
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
  header_1?: HeaderAmino;
  header_2?: HeaderAmino;
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
  header_1?: HeaderSDKType;
  header_2?: HeaderSDKType;
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
  signedHeader?: SignedHeader;
  validatorSet?: ValidatorSet;
  trustedHeight: Height;
  trustedValidators?: ValidatorSet;
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
  signed_header?: SignedHeaderAmino;
  validator_set?: ValidatorSetAmino;
  trusted_height?: HeightAmino;
  trusted_validators?: ValidatorSetAmino;
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
  signed_header?: SignedHeaderSDKType;
  validator_set?: ValidatorSetSDKType;
  trusted_height: HeightSDKType;
  trusted_validators?: ValidatorSetSDKType;
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
function createBaseClientState(): ClientState {
  return {
    chainId: "",
    trustLevel: Fraction.fromPartial({}),
    trustingPeriod: Duration.fromPartial({}),
    unbondingPeriod: Duration.fromPartial({}),
    maxClockDrift: Duration.fromPartial({}),
    frozenHeight: Height.fromPartial({}),
    latestHeight: Height.fromPartial({}),
    proofSpecs: [],
    upgradePath: [],
    allowUpdateAfterExpiry: false,
    allowUpdateAfterMisbehaviour: false
  };
}
export const ClientState = {
  typeUrl: "/ibc.lightclients.tendermint.v1.ClientState",
  aminoType: "cosmos-sdk/ClientState",
  is(o: any): o is ClientState {
    return o && (o.$typeUrl === ClientState.typeUrl || typeof o.chainId === "string" && Fraction.is(o.trustLevel) && Duration.is(o.trustingPeriod) && Duration.is(o.unbondingPeriod) && Duration.is(o.maxClockDrift) && Height.is(o.frozenHeight) && Height.is(o.latestHeight) && Array.isArray(o.proofSpecs) && (!o.proofSpecs.length || ProofSpec.is(o.proofSpecs[0])) && Array.isArray(o.upgradePath) && (!o.upgradePath.length || typeof o.upgradePath[0] === "string") && typeof o.allowUpdateAfterExpiry === "boolean" && typeof o.allowUpdateAfterMisbehaviour === "boolean");
  },
  isSDK(o: any): o is ClientStateSDKType {
    return o && (o.$typeUrl === ClientState.typeUrl || typeof o.chain_id === "string" && Fraction.isSDK(o.trust_level) && Duration.isSDK(o.trusting_period) && Duration.isSDK(o.unbonding_period) && Duration.isSDK(o.max_clock_drift) && Height.isSDK(o.frozen_height) && Height.isSDK(o.latest_height) && Array.isArray(o.proof_specs) && (!o.proof_specs.length || ProofSpec.isSDK(o.proof_specs[0])) && Array.isArray(o.upgrade_path) && (!o.upgrade_path.length || typeof o.upgrade_path[0] === "string") && typeof o.allow_update_after_expiry === "boolean" && typeof o.allow_update_after_misbehaviour === "boolean");
  },
  isAmino(o: any): o is ClientStateAmino {
    return o && (o.$typeUrl === ClientState.typeUrl || typeof o.chain_id === "string" && Fraction.isAmino(o.trust_level) && Duration.isAmino(o.trusting_period) && Duration.isAmino(o.unbonding_period) && Duration.isAmino(o.max_clock_drift) && Height.isAmino(o.frozen_height) && Height.isAmino(o.latest_height) && Array.isArray(o.proof_specs) && (!o.proof_specs.length || ProofSpec.isAmino(o.proof_specs[0])) && Array.isArray(o.upgrade_path) && (!o.upgrade_path.length || typeof o.upgrade_path[0] === "string") && typeof o.allow_update_after_expiry === "boolean" && typeof o.allow_update_after_misbehaviour === "boolean");
  },
  encode(message: ClientState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== undefined) {
      writer.uint32(10).string(message.chainId);
    }
    if (message.trustLevel !== undefined) {
      Fraction.encode(message.trustLevel, writer.uint32(18).fork()).ldelim();
    }
    if (message.trustingPeriod !== undefined) {
      Duration.encode(message.trustingPeriod, writer.uint32(26).fork()).ldelim();
    }
    if (message.unbondingPeriod !== undefined) {
      Duration.encode(message.unbondingPeriod, writer.uint32(34).fork()).ldelim();
    }
    if (message.maxClockDrift !== undefined) {
      Duration.encode(message.maxClockDrift, writer.uint32(42).fork()).ldelim();
    }
    if (message.frozenHeight !== undefined) {
      Height.encode(message.frozenHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.latestHeight !== undefined) {
      Height.encode(message.latestHeight, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.proofSpecs) {
      ProofSpec.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.upgradePath) {
      writer.uint32(74).string(v!);
    }
    if (message.allowUpdateAfterExpiry !== undefined) {
      writer.uint32(80).bool(message.allowUpdateAfterExpiry);
    }
    if (message.allowUpdateAfterMisbehaviour !== undefined) {
      writer.uint32(88).bool(message.allowUpdateAfterMisbehaviour);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClientState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.trustLevel = Fraction.decode(reader, reader.uint32());
          break;
        case 3:
          message.trustingPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.unbondingPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.maxClockDrift = Duration.decode(reader, reader.uint32());
          break;
        case 6:
          message.frozenHeight = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.latestHeight = Height.decode(reader, reader.uint32());
          break;
        case 8:
          message.proofSpecs.push(ProofSpec.decode(reader, reader.uint32()));
          break;
        case 9:
          message.upgradePath.push(reader.string());
          break;
        case 10:
          message.allowUpdateAfterExpiry = reader.bool();
          break;
        case 11:
          message.allowUpdateAfterMisbehaviour = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClientState {
    const obj = createBaseClientState();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (isSet(object.trustLevel)) obj.trustLevel = Fraction.fromJSON(object.trustLevel);
    if (isSet(object.trustingPeriod)) obj.trustingPeriod = Duration.fromJSON(object.trustingPeriod);
    if (isSet(object.unbondingPeriod)) obj.unbondingPeriod = Duration.fromJSON(object.unbondingPeriod);
    if (isSet(object.maxClockDrift)) obj.maxClockDrift = Duration.fromJSON(object.maxClockDrift);
    if (isSet(object.frozenHeight)) obj.frozenHeight = Height.fromJSON(object.frozenHeight);
    if (isSet(object.latestHeight)) obj.latestHeight = Height.fromJSON(object.latestHeight);
    if (Array.isArray(object?.proofSpecs)) obj.proofSpecs = object.proofSpecs.map((e: any) => ProofSpec.fromJSON(e));
    if (Array.isArray(object?.upgradePath)) obj.upgradePath = object.upgradePath.map((e: any) => String(e));
    if (isSet(object.allowUpdateAfterExpiry)) obj.allowUpdateAfterExpiry = Boolean(object.allowUpdateAfterExpiry);
    if (isSet(object.allowUpdateAfterMisbehaviour)) obj.allowUpdateAfterMisbehaviour = Boolean(object.allowUpdateAfterMisbehaviour);
    return obj;
  },
  toJSON(message: ClientState): JsonSafe<ClientState> {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.trustLevel !== undefined && (obj.trustLevel = message.trustLevel ? Fraction.toJSON(message.trustLevel) : undefined);
    message.trustingPeriod !== undefined && (obj.trustingPeriod = message.trustingPeriod ? Duration.toJSON(message.trustingPeriod) : undefined);
    message.unbondingPeriod !== undefined && (obj.unbondingPeriod = message.unbondingPeriod ? Duration.toJSON(message.unbondingPeriod) : undefined);
    message.maxClockDrift !== undefined && (obj.maxClockDrift = message.maxClockDrift ? Duration.toJSON(message.maxClockDrift) : undefined);
    message.frozenHeight !== undefined && (obj.frozenHeight = message.frozenHeight ? Height.toJSON(message.frozenHeight) : undefined);
    message.latestHeight !== undefined && (obj.latestHeight = message.latestHeight ? Height.toJSON(message.latestHeight) : undefined);
    if (message.proofSpecs) {
      obj.proofSpecs = message.proofSpecs.map(e => e ? ProofSpec.toJSON(e) : undefined);
    } else {
      obj.proofSpecs = [];
    }
    if (message.upgradePath) {
      obj.upgradePath = message.upgradePath.map(e => e);
    } else {
      obj.upgradePath = [];
    }
    message.allowUpdateAfterExpiry !== undefined && (obj.allowUpdateAfterExpiry = message.allowUpdateAfterExpiry);
    message.allowUpdateAfterMisbehaviour !== undefined && (obj.allowUpdateAfterMisbehaviour = message.allowUpdateAfterMisbehaviour);
    return obj;
  },
  fromPartial(object: DeepPartial<ClientState>): ClientState {
    const message = createBaseClientState();
    message.chainId = object.chainId ?? "";
    if (object.trustLevel !== undefined && object.trustLevel !== null) {
      message.trustLevel = Fraction.fromPartial(object.trustLevel);
    }
    if (object.trustingPeriod !== undefined && object.trustingPeriod !== null) {
      message.trustingPeriod = Duration.fromPartial(object.trustingPeriod);
    }
    if (object.unbondingPeriod !== undefined && object.unbondingPeriod !== null) {
      message.unbondingPeriod = Duration.fromPartial(object.unbondingPeriod);
    }
    if (object.maxClockDrift !== undefined && object.maxClockDrift !== null) {
      message.maxClockDrift = Duration.fromPartial(object.maxClockDrift);
    }
    if (object.frozenHeight !== undefined && object.frozenHeight !== null) {
      message.frozenHeight = Height.fromPartial(object.frozenHeight);
    }
    if (object.latestHeight !== undefined && object.latestHeight !== null) {
      message.latestHeight = Height.fromPartial(object.latestHeight);
    }
    message.proofSpecs = object.proofSpecs?.map(e => ProofSpec.fromPartial(e)) || [];
    message.upgradePath = object.upgradePath?.map(e => e) || [];
    message.allowUpdateAfterExpiry = object.allowUpdateAfterExpiry ?? false;
    message.allowUpdateAfterMisbehaviour = object.allowUpdateAfterMisbehaviour ?? false;
    return message;
  },
  fromSDK(object: ClientStateSDKType): ClientState {
    return {
      chainId: object?.chain_id,
      trustLevel: object.trust_level ? Fraction.fromSDK(object.trust_level) : undefined,
      trustingPeriod: object.trusting_period ? Duration.fromSDK(object.trusting_period) : undefined,
      unbondingPeriod: object.unbonding_period ? Duration.fromSDK(object.unbonding_period) : undefined,
      maxClockDrift: object.max_clock_drift ? Duration.fromSDK(object.max_clock_drift) : undefined,
      frozenHeight: object.frozen_height ? Height.fromSDK(object.frozen_height) : undefined,
      latestHeight: object.latest_height ? Height.fromSDK(object.latest_height) : undefined,
      proofSpecs: Array.isArray(object?.proof_specs) ? object.proof_specs.map((e: any) => ProofSpec.fromSDK(e)) : [],
      upgradePath: Array.isArray(object?.upgrade_path) ? object.upgrade_path.map((e: any) => e) : [],
      allowUpdateAfterExpiry: object?.allow_update_after_expiry,
      allowUpdateAfterMisbehaviour: object?.allow_update_after_misbehaviour
    };
  },
  toSDK(message: ClientState): ClientStateSDKType {
    const obj: any = {};
    obj.chain_id = message.chainId;
    message.trustLevel !== undefined && (obj.trust_level = message.trustLevel ? Fraction.toSDK(message.trustLevel) : undefined);
    message.trustingPeriod !== undefined && (obj.trusting_period = message.trustingPeriod ? Duration.toSDK(message.trustingPeriod) : undefined);
    message.unbondingPeriod !== undefined && (obj.unbonding_period = message.unbondingPeriod ? Duration.toSDK(message.unbondingPeriod) : undefined);
    message.maxClockDrift !== undefined && (obj.max_clock_drift = message.maxClockDrift ? Duration.toSDK(message.maxClockDrift) : undefined);
    message.frozenHeight !== undefined && (obj.frozen_height = message.frozenHeight ? Height.toSDK(message.frozenHeight) : undefined);
    message.latestHeight !== undefined && (obj.latest_height = message.latestHeight ? Height.toSDK(message.latestHeight) : undefined);
    if (message.proofSpecs) {
      obj.proof_specs = message.proofSpecs.map(e => e ? ProofSpec.toSDK(e) : undefined);
    } else {
      obj.proof_specs = [];
    }
    if (message.upgradePath) {
      obj.upgrade_path = message.upgradePath.map(e => e);
    } else {
      obj.upgrade_path = [];
    }
    obj.allow_update_after_expiry = message.allowUpdateAfterExpiry;
    obj.allow_update_after_misbehaviour = message.allowUpdateAfterMisbehaviour;
    return obj;
  },
  fromAmino(object: ClientStateAmino): ClientState {
    const message = createBaseClientState();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.trust_level !== undefined && object.trust_level !== null) {
      message.trustLevel = Fraction.fromAmino(object.trust_level);
    }
    if (object.trusting_period !== undefined && object.trusting_period !== null) {
      message.trustingPeriod = Duration.fromAmino(object.trusting_period);
    }
    if (object.unbonding_period !== undefined && object.unbonding_period !== null) {
      message.unbondingPeriod = Duration.fromAmino(object.unbonding_period);
    }
    if (object.max_clock_drift !== undefined && object.max_clock_drift !== null) {
      message.maxClockDrift = Duration.fromAmino(object.max_clock_drift);
    }
    if (object.frozen_height !== undefined && object.frozen_height !== null) {
      message.frozenHeight = Height.fromAmino(object.frozen_height);
    }
    if (object.latest_height !== undefined && object.latest_height !== null) {
      message.latestHeight = Height.fromAmino(object.latest_height);
    }
    message.proofSpecs = object.proof_specs?.map(e => ProofSpec.fromAmino(e)) || [];
    message.upgradePath = object.upgrade_path?.map(e => e) || [];
    if (object.allow_update_after_expiry !== undefined && object.allow_update_after_expiry !== null) {
      message.allowUpdateAfterExpiry = object.allow_update_after_expiry;
    }
    if (object.allow_update_after_misbehaviour !== undefined && object.allow_update_after_misbehaviour !== null) {
      message.allowUpdateAfterMisbehaviour = object.allow_update_after_misbehaviour;
    }
    return message;
  },
  toAmino(message: ClientState): ClientStateAmino {
    const obj: any = {};
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    obj.trust_level = message.trustLevel ? Fraction.toAmino(message.trustLevel) : undefined;
    obj.trusting_period = message.trustingPeriod ? Duration.toAmino(message.trustingPeriod) : undefined;
    obj.unbonding_period = message.unbondingPeriod ? Duration.toAmino(message.unbondingPeriod) : undefined;
    obj.max_clock_drift = message.maxClockDrift ? Duration.toAmino(message.maxClockDrift) : undefined;
    obj.frozen_height = message.frozenHeight ? Height.toAmino(message.frozenHeight) : {};
    obj.latest_height = message.latestHeight ? Height.toAmino(message.latestHeight) : {};
    if (message.proofSpecs) {
      obj.proof_specs = message.proofSpecs.map(e => e ? ProofSpec.toAmino(e) : undefined);
    } else {
      obj.proof_specs = message.proofSpecs;
    }
    if (message.upgradePath) {
      obj.upgrade_path = message.upgradePath.map(e => e);
    } else {
      obj.upgrade_path = message.upgradePath;
    }
    obj.allow_update_after_expiry = message.allowUpdateAfterExpiry === false ? undefined : message.allowUpdateAfterExpiry;
    obj.allow_update_after_misbehaviour = message.allowUpdateAfterMisbehaviour === false ? undefined : message.allowUpdateAfterMisbehaviour;
    return obj;
  },
  fromAminoMsg(object: ClientStateAminoMsg): ClientState {
    return ClientState.fromAmino(object.value);
  },
  toAminoMsg(message: ClientState): ClientStateAminoMsg {
    return {
      type: "cosmos-sdk/ClientState",
      value: ClientState.toAmino(message)
    };
  },
  fromProtoMsg(message: ClientStateProtoMsg): ClientState {
    return ClientState.decode(message.value);
  },
  toProto(message: ClientState): Uint8Array {
    return ClientState.encode(message).finish();
  },
  toProtoMsg(message: ClientState): ClientStateProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.tendermint.v1.ClientState",
      value: ClientState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ClientState.typeUrl, ClientState);
GlobalDecoderRegistry.registerAminoProtoMapping(ClientState.aminoType, ClientState.typeUrl);
function createBaseConsensusState(): ConsensusState {
  return {
    timestamp: new Date(),
    root: MerkleRoot.fromPartial({}),
    nextValidatorsHash: new Uint8Array()
  };
}
export const ConsensusState = {
  typeUrl: "/ibc.lightclients.tendermint.v1.ConsensusState",
  aminoType: "cosmos-sdk/ConsensusState",
  is(o: any): o is ConsensusState {
    return o && (o.$typeUrl === ConsensusState.typeUrl || Timestamp.is(o.timestamp) && MerkleRoot.is(o.root) && (o.nextValidatorsHash instanceof Uint8Array || typeof o.nextValidatorsHash === "string"));
  },
  isSDK(o: any): o is ConsensusStateSDKType {
    return o && (o.$typeUrl === ConsensusState.typeUrl || Timestamp.isSDK(o.timestamp) && MerkleRoot.isSDK(o.root) && (o.next_validators_hash instanceof Uint8Array || typeof o.next_validators_hash === "string"));
  },
  isAmino(o: any): o is ConsensusStateAmino {
    return o && (o.$typeUrl === ConsensusState.typeUrl || Timestamp.isAmino(o.timestamp) && MerkleRoot.isAmino(o.root) && (o.next_validators_hash instanceof Uint8Array || typeof o.next_validators_hash === "string"));
  },
  encode(message: ConsensusState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
    }
    if (message.root !== undefined) {
      MerkleRoot.encode(message.root, writer.uint32(18).fork()).ldelim();
    }
    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(26).bytes(message.nextValidatorsHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsensusState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.root = MerkleRoot.decode(reader, reader.uint32());
          break;
        case 3:
          message.nextValidatorsHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsensusState {
    const obj = createBaseConsensusState();
    if (isSet(object.timestamp)) obj.timestamp = new Date(object.timestamp);
    if (isSet(object.root)) obj.root = MerkleRoot.fromJSON(object.root);
    if (isSet(object.nextValidatorsHash)) obj.nextValidatorsHash = bytesFromBase64(object.nextValidatorsHash);
    return obj;
  },
  toJSON(message: ConsensusState): JsonSafe<ConsensusState> {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    message.root !== undefined && (obj.root = message.root ? MerkleRoot.toJSON(message.root) : undefined);
    message.nextValidatorsHash !== undefined && (obj.nextValidatorsHash = base64FromBytes(message.nextValidatorsHash !== undefined ? message.nextValidatorsHash : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<ConsensusState>): ConsensusState {
    const message = createBaseConsensusState();
    message.timestamp = object.timestamp ?? undefined;
    if (object.root !== undefined && object.root !== null) {
      message.root = MerkleRoot.fromPartial(object.root);
    }
    message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
    return message;
  },
  fromSDK(object: ConsensusStateSDKType): ConsensusState {
    return {
      timestamp: object.timestamp ?? undefined,
      root: object.root ? MerkleRoot.fromSDK(object.root) : undefined,
      nextValidatorsHash: object?.next_validators_hash
    };
  },
  toSDK(message: ConsensusState): ConsensusStateSDKType {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = message.timestamp ?? undefined);
    message.root !== undefined && (obj.root = message.root ? MerkleRoot.toSDK(message.root) : undefined);
    obj.next_validators_hash = message.nextValidatorsHash;
    return obj;
  },
  fromAmino(object: ConsensusStateAmino): ConsensusState {
    const message = createBaseConsensusState();
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
    }
    if (object.root !== undefined && object.root !== null) {
      message.root = MerkleRoot.fromAmino(object.root);
    }
    if (object.next_validators_hash !== undefined && object.next_validators_hash !== null) {
      message.nextValidatorsHash = bytesFromBase64(object.next_validators_hash);
    }
    return message;
  },
  toAmino(message: ConsensusState): ConsensusStateAmino {
    const obj: any = {};
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
    obj.root = message.root ? MerkleRoot.toAmino(message.root) : undefined;
    obj.next_validators_hash = message.nextValidatorsHash ? base64FromBytes(message.nextValidatorsHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: ConsensusStateAminoMsg): ConsensusState {
    return ConsensusState.fromAmino(object.value);
  },
  toAminoMsg(message: ConsensusState): ConsensusStateAminoMsg {
    return {
      type: "cosmos-sdk/ConsensusState",
      value: ConsensusState.toAmino(message)
    };
  },
  fromProtoMsg(message: ConsensusStateProtoMsg): ConsensusState {
    return ConsensusState.decode(message.value);
  },
  toProto(message: ConsensusState): Uint8Array {
    return ConsensusState.encode(message).finish();
  },
  toProtoMsg(message: ConsensusState): ConsensusStateProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.tendermint.v1.ConsensusState",
      value: ConsensusState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ConsensusState.typeUrl, ConsensusState);
GlobalDecoderRegistry.registerAminoProtoMapping(ConsensusState.aminoType, ConsensusState.typeUrl);
function createBaseMisbehaviour(): Misbehaviour {
  return {
    clientId: "",
    header1: undefined,
    header2: undefined
  };
}
export const Misbehaviour = {
  typeUrl: "/ibc.lightclients.tendermint.v1.Misbehaviour",
  aminoType: "cosmos-sdk/Misbehaviour",
  is(o: any): o is Misbehaviour {
    return o && (o.$typeUrl === Misbehaviour.typeUrl || typeof o.clientId === "string");
  },
  isSDK(o: any): o is MisbehaviourSDKType {
    return o && (o.$typeUrl === Misbehaviour.typeUrl || typeof o.client_id === "string");
  },
  isAmino(o: any): o is MisbehaviourAmino {
    return o && (o.$typeUrl === Misbehaviour.typeUrl || typeof o.client_id === "string");
  },
  encode(message: Misbehaviour, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== undefined) {
      writer.uint32(10).string(message.clientId);
    }
    if (message.header1 !== undefined) {
      Header.encode(message.header1, writer.uint32(18).fork()).ldelim();
    }
    if (message.header2 !== undefined) {
      Header.encode(message.header2, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Misbehaviour {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMisbehaviour();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.header1 = Header.decode(reader, reader.uint32());
          break;
        case 3:
          message.header2 = Header.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Misbehaviour {
    const obj = createBaseMisbehaviour();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (isSet(object.header1)) obj.header1 = Header.fromJSON(object.header1);
    if (isSet(object.header2)) obj.header2 = Header.fromJSON(object.header2);
    return obj;
  },
  toJSON(message: Misbehaviour): JsonSafe<Misbehaviour> {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.header1 !== undefined && (obj.header1 = message.header1 ? Header.toJSON(message.header1) : undefined);
    message.header2 !== undefined && (obj.header2 = message.header2 ? Header.toJSON(message.header2) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Misbehaviour>): Misbehaviour {
    const message = createBaseMisbehaviour();
    message.clientId = object.clientId ?? "";
    if (object.header1 !== undefined && object.header1 !== null) {
      message.header1 = Header.fromPartial(object.header1);
    }
    if (object.header2 !== undefined && object.header2 !== null) {
      message.header2 = Header.fromPartial(object.header2);
    }
    return message;
  },
  fromSDK(object: MisbehaviourSDKType): Misbehaviour {
    return {
      clientId: object?.client_id,
      header1: object.header_1 ? Header.fromSDK(object.header_1) : undefined,
      header2: object.header_2 ? Header.fromSDK(object.header_2) : undefined
    };
  },
  toSDK(message: Misbehaviour): MisbehaviourSDKType {
    const obj: any = {};
    obj.client_id = message.clientId;
    message.header1 !== undefined && (obj.header_1 = message.header1 ? Header.toSDK(message.header1) : undefined);
    message.header2 !== undefined && (obj.header_2 = message.header2 ? Header.toSDK(message.header2) : undefined);
    return obj;
  },
  fromAmino(object: MisbehaviourAmino): Misbehaviour {
    const message = createBaseMisbehaviour();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.header_1 !== undefined && object.header_1 !== null) {
      message.header1 = Header.fromAmino(object.header_1);
    }
    if (object.header_2 !== undefined && object.header_2 !== null) {
      message.header2 = Header.fromAmino(object.header_2);
    }
    return message;
  },
  toAmino(message: Misbehaviour): MisbehaviourAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.header_1 = message.header1 ? Header.toAmino(message.header1) : undefined;
    obj.header_2 = message.header2 ? Header.toAmino(message.header2) : undefined;
    return obj;
  },
  fromAminoMsg(object: MisbehaviourAminoMsg): Misbehaviour {
    return Misbehaviour.fromAmino(object.value);
  },
  toAminoMsg(message: Misbehaviour): MisbehaviourAminoMsg {
    return {
      type: "cosmos-sdk/Misbehaviour",
      value: Misbehaviour.toAmino(message)
    };
  },
  fromProtoMsg(message: MisbehaviourProtoMsg): Misbehaviour {
    return Misbehaviour.decode(message.value);
  },
  toProto(message: Misbehaviour): Uint8Array {
    return Misbehaviour.encode(message).finish();
  },
  toProtoMsg(message: Misbehaviour): MisbehaviourProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.tendermint.v1.Misbehaviour",
      value: Misbehaviour.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Misbehaviour.typeUrl, Misbehaviour);
GlobalDecoderRegistry.registerAminoProtoMapping(Misbehaviour.aminoType, Misbehaviour.typeUrl);
function createBaseHeader(): Header {
  return {
    signedHeader: undefined,
    validatorSet: undefined,
    trustedHeight: Height.fromPartial({}),
    trustedValidators: undefined
  };
}
export const Header = {
  typeUrl: "/ibc.lightclients.tendermint.v1.Header",
  aminoType: "cosmos-sdk/Header",
  is(o: any): o is Header {
    return o && (o.$typeUrl === Header.typeUrl || Height.is(o.trustedHeight));
  },
  isSDK(o: any): o is HeaderSDKType {
    return o && (o.$typeUrl === Header.typeUrl || Height.isSDK(o.trusted_height));
  },
  isAmino(o: any): o is HeaderAmino {
    return o && (o.$typeUrl === Header.typeUrl || Height.isAmino(o.trusted_height));
  },
  encode(message: Header, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signedHeader !== undefined) {
      SignedHeader.encode(message.signedHeader, writer.uint32(10).fork()).ldelim();
    }
    if (message.validatorSet !== undefined) {
      ValidatorSet.encode(message.validatorSet, writer.uint32(18).fork()).ldelim();
    }
    if (message.trustedHeight !== undefined) {
      Height.encode(message.trustedHeight, writer.uint32(26).fork()).ldelim();
    }
    if (message.trustedValidators !== undefined) {
      ValidatorSet.encode(message.trustedValidators, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Header {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signedHeader = SignedHeader.decode(reader, reader.uint32());
          break;
        case 2:
          message.validatorSet = ValidatorSet.decode(reader, reader.uint32());
          break;
        case 3:
          message.trustedHeight = Height.decode(reader, reader.uint32());
          break;
        case 4:
          message.trustedValidators = ValidatorSet.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Header {
    const obj = createBaseHeader();
    if (isSet(object.signedHeader)) obj.signedHeader = SignedHeader.fromJSON(object.signedHeader);
    if (isSet(object.validatorSet)) obj.validatorSet = ValidatorSet.fromJSON(object.validatorSet);
    if (isSet(object.trustedHeight)) obj.trustedHeight = Height.fromJSON(object.trustedHeight);
    if (isSet(object.trustedValidators)) obj.trustedValidators = ValidatorSet.fromJSON(object.trustedValidators);
    return obj;
  },
  toJSON(message: Header): JsonSafe<Header> {
    const obj: any = {};
    message.signedHeader !== undefined && (obj.signedHeader = message.signedHeader ? SignedHeader.toJSON(message.signedHeader) : undefined);
    message.validatorSet !== undefined && (obj.validatorSet = message.validatorSet ? ValidatorSet.toJSON(message.validatorSet) : undefined);
    message.trustedHeight !== undefined && (obj.trustedHeight = message.trustedHeight ? Height.toJSON(message.trustedHeight) : undefined);
    message.trustedValidators !== undefined && (obj.trustedValidators = message.trustedValidators ? ValidatorSet.toJSON(message.trustedValidators) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Header>): Header {
    const message = createBaseHeader();
    if (object.signedHeader !== undefined && object.signedHeader !== null) {
      message.signedHeader = SignedHeader.fromPartial(object.signedHeader);
    }
    if (object.validatorSet !== undefined && object.validatorSet !== null) {
      message.validatorSet = ValidatorSet.fromPartial(object.validatorSet);
    }
    if (object.trustedHeight !== undefined && object.trustedHeight !== null) {
      message.trustedHeight = Height.fromPartial(object.trustedHeight);
    }
    if (object.trustedValidators !== undefined && object.trustedValidators !== null) {
      message.trustedValidators = ValidatorSet.fromPartial(object.trustedValidators);
    }
    return message;
  },
  fromSDK(object: HeaderSDKType): Header {
    return {
      signedHeader: object.signed_header ? SignedHeader.fromSDK(object.signed_header) : undefined,
      validatorSet: object.validator_set ? ValidatorSet.fromSDK(object.validator_set) : undefined,
      trustedHeight: object.trusted_height ? Height.fromSDK(object.trusted_height) : undefined,
      trustedValidators: object.trusted_validators ? ValidatorSet.fromSDK(object.trusted_validators) : undefined
    };
  },
  toSDK(message: Header): HeaderSDKType {
    const obj: any = {};
    message.signedHeader !== undefined && (obj.signed_header = message.signedHeader ? SignedHeader.toSDK(message.signedHeader) : undefined);
    message.validatorSet !== undefined && (obj.validator_set = message.validatorSet ? ValidatorSet.toSDK(message.validatorSet) : undefined);
    message.trustedHeight !== undefined && (obj.trusted_height = message.trustedHeight ? Height.toSDK(message.trustedHeight) : undefined);
    message.trustedValidators !== undefined && (obj.trusted_validators = message.trustedValidators ? ValidatorSet.toSDK(message.trustedValidators) : undefined);
    return obj;
  },
  fromAmino(object: HeaderAmino): Header {
    const message = createBaseHeader();
    if (object.signed_header !== undefined && object.signed_header !== null) {
      message.signedHeader = SignedHeader.fromAmino(object.signed_header);
    }
    if (object.validator_set !== undefined && object.validator_set !== null) {
      message.validatorSet = ValidatorSet.fromAmino(object.validator_set);
    }
    if (object.trusted_height !== undefined && object.trusted_height !== null) {
      message.trustedHeight = Height.fromAmino(object.trusted_height);
    }
    if (object.trusted_validators !== undefined && object.trusted_validators !== null) {
      message.trustedValidators = ValidatorSet.fromAmino(object.trusted_validators);
    }
    return message;
  },
  toAmino(message: Header): HeaderAmino {
    const obj: any = {};
    obj.signed_header = message.signedHeader ? SignedHeader.toAmino(message.signedHeader) : undefined;
    obj.validator_set = message.validatorSet ? ValidatorSet.toAmino(message.validatorSet) : undefined;
    obj.trusted_height = message.trustedHeight ? Height.toAmino(message.trustedHeight) : {};
    obj.trusted_validators = message.trustedValidators ? ValidatorSet.toAmino(message.trustedValidators) : undefined;
    return obj;
  },
  fromAminoMsg(object: HeaderAminoMsg): Header {
    return Header.fromAmino(object.value);
  },
  toAminoMsg(message: Header): HeaderAminoMsg {
    return {
      type: "cosmos-sdk/Header",
      value: Header.toAmino(message)
    };
  },
  fromProtoMsg(message: HeaderProtoMsg): Header {
    return Header.decode(message.value);
  },
  toProto(message: Header): Uint8Array {
    return Header.encode(message).finish();
  },
  toProtoMsg(message: Header): HeaderProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.tendermint.v1.Header",
      value: Header.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Header.typeUrl, Header);
GlobalDecoderRegistry.registerAminoProtoMapping(Header.aminoType, Header.typeUrl);
function createBaseFraction(): Fraction {
  return {
    numerator: BigInt(0),
    denominator: BigInt(0)
  };
}
export const Fraction = {
  typeUrl: "/ibc.lightclients.tendermint.v1.Fraction",
  aminoType: "cosmos-sdk/Fraction",
  is(o: any): o is Fraction {
    return o && (o.$typeUrl === Fraction.typeUrl || typeof o.numerator === "bigint" && typeof o.denominator === "bigint");
  },
  isSDK(o: any): o is FractionSDKType {
    return o && (o.$typeUrl === Fraction.typeUrl || typeof o.numerator === "bigint" && typeof o.denominator === "bigint");
  },
  isAmino(o: any): o is FractionAmino {
    return o && (o.$typeUrl === Fraction.typeUrl || typeof o.numerator === "bigint" && typeof o.denominator === "bigint");
  },
  encode(message: Fraction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.numerator !== undefined) {
      writer.uint32(8).uint64(message.numerator);
    }
    if (message.denominator !== undefined) {
      writer.uint32(16).uint64(message.denominator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Fraction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFraction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numerator = reader.uint64();
          break;
        case 2:
          message.denominator = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Fraction {
    const obj = createBaseFraction();
    if (isSet(object.numerator)) obj.numerator = BigInt(object.numerator.toString());
    if (isSet(object.denominator)) obj.denominator = BigInt(object.denominator.toString());
    return obj;
  },
  toJSON(message: Fraction): JsonSafe<Fraction> {
    const obj: any = {};
    message.numerator !== undefined && (obj.numerator = (message.numerator || BigInt(0)).toString());
    message.denominator !== undefined && (obj.denominator = (message.denominator || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Fraction>): Fraction {
    const message = createBaseFraction();
    if (object.numerator !== undefined && object.numerator !== null) {
      message.numerator = BigInt(object.numerator.toString());
    }
    if (object.denominator !== undefined && object.denominator !== null) {
      message.denominator = BigInt(object.denominator.toString());
    }
    return message;
  },
  fromSDK(object: FractionSDKType): Fraction {
    return {
      numerator: object?.numerator,
      denominator: object?.denominator
    };
  },
  toSDK(message: Fraction): FractionSDKType {
    const obj: any = {};
    obj.numerator = message.numerator;
    obj.denominator = message.denominator;
    return obj;
  },
  fromAmino(object: FractionAmino): Fraction {
    const message = createBaseFraction();
    if (object.numerator !== undefined && object.numerator !== null) {
      message.numerator = BigInt(object.numerator);
    }
    if (object.denominator !== undefined && object.denominator !== null) {
      message.denominator = BigInt(object.denominator);
    }
    return message;
  },
  toAmino(message: Fraction): FractionAmino {
    const obj: any = {};
    obj.numerator = message.numerator !== BigInt(0) ? message.numerator.toString() : undefined;
    obj.denominator = message.denominator !== BigInt(0) ? message.denominator.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: FractionAminoMsg): Fraction {
    return Fraction.fromAmino(object.value);
  },
  toAminoMsg(message: Fraction): FractionAminoMsg {
    return {
      type: "cosmos-sdk/Fraction",
      value: Fraction.toAmino(message)
    };
  },
  fromProtoMsg(message: FractionProtoMsg): Fraction {
    return Fraction.decode(message.value);
  },
  toProto(message: Fraction): Uint8Array {
    return Fraction.encode(message).finish();
  },
  toProtoMsg(message: Fraction): FractionProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.tendermint.v1.Fraction",
      value: Fraction.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Fraction.typeUrl, Fraction);
GlobalDecoderRegistry.registerAminoProtoMapping(Fraction.aminoType, Fraction.typeUrl);