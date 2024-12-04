import { Duration, DurationSDKType } from "../../../../google/protobuf/duration";
import { Height, HeightSDKType } from "../../../core/client/v1/client";
import { ProofSpec, ProofSpecSDKType } from "../../../../confio/proofs";
import { Timestamp, TimestampSDKType } from "../../../../google/protobuf/timestamp";
import { MerkleRoot, MerkleRootSDKType } from "../../../core/commitment/v1/commitment";
import { SignedHeader, SignedHeaderSDKType } from "../../../../tendermint/types/types";
import { ValidatorSet, ValidatorSetSDKType } from "../../../../tendermint/types/validator";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, toTimestamp, fromTimestamp, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
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
  encode(message: ClientState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
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
    if (message.allowUpdateAfterExpiry === true) {
      writer.uint32(80).bool(message.allowUpdateAfterExpiry);
    }
    if (message.allowUpdateAfterMisbehaviour === true) {
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
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      trustLevel: isSet(object.trustLevel) ? Fraction.fromJSON(object.trustLevel) : undefined,
      trustingPeriod: isSet(object.trustingPeriod) ? Duration.fromJSON(object.trustingPeriod) : undefined,
      unbondingPeriod: isSet(object.unbondingPeriod) ? Duration.fromJSON(object.unbondingPeriod) : undefined,
      maxClockDrift: isSet(object.maxClockDrift) ? Duration.fromJSON(object.maxClockDrift) : undefined,
      frozenHeight: isSet(object.frozenHeight) ? Height.fromJSON(object.frozenHeight) : undefined,
      latestHeight: isSet(object.latestHeight) ? Height.fromJSON(object.latestHeight) : undefined,
      proofSpecs: Array.isArray(object?.proofSpecs) ? object.proofSpecs.map((e: any) => ProofSpec.fromJSON(e)) : [],
      upgradePath: Array.isArray(object?.upgradePath) ? object.upgradePath.map((e: any) => String(e)) : [],
      allowUpdateAfterExpiry: isSet(object.allowUpdateAfterExpiry) ? Boolean(object.allowUpdateAfterExpiry) : false,
      allowUpdateAfterMisbehaviour: isSet(object.allowUpdateAfterMisbehaviour) ? Boolean(object.allowUpdateAfterMisbehaviour) : false
    };
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
    message.trustLevel = object.trustLevel !== undefined && object.trustLevel !== null ? Fraction.fromPartial(object.trustLevel) : undefined;
    message.trustingPeriod = object.trustingPeriod !== undefined && object.trustingPeriod !== null ? Duration.fromPartial(object.trustingPeriod) : undefined;
    message.unbondingPeriod = object.unbondingPeriod !== undefined && object.unbondingPeriod !== null ? Duration.fromPartial(object.unbondingPeriod) : undefined;
    message.maxClockDrift = object.maxClockDrift !== undefined && object.maxClockDrift !== null ? Duration.fromPartial(object.maxClockDrift) : undefined;
    message.frozenHeight = object.frozenHeight !== undefined && object.frozenHeight !== null ? Height.fromPartial(object.frozenHeight) : undefined;
    message.latestHeight = object.latestHeight !== undefined && object.latestHeight !== null ? Height.fromPartial(object.latestHeight) : undefined;
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
  fromSDKJSON(object: any): ClientStateSDKType {
    return {
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
      trust_level: isSet(object.trust_level) ? Fraction.fromSDKJSON(object.trust_level) : undefined,
      trusting_period: isSet(object.trusting_period) ? Duration.fromSDKJSON(object.trusting_period) : undefined,
      unbonding_period: isSet(object.unbonding_period) ? Duration.fromSDKJSON(object.unbonding_period) : undefined,
      max_clock_drift: isSet(object.max_clock_drift) ? Duration.fromSDKJSON(object.max_clock_drift) : undefined,
      frozen_height: isSet(object.frozen_height) ? Height.fromSDKJSON(object.frozen_height) : undefined,
      latest_height: isSet(object.latest_height) ? Height.fromSDKJSON(object.latest_height) : undefined,
      proof_specs: Array.isArray(object?.proof_specs) ? object.proof_specs.map((e: any) => ProofSpec.fromSDKJSON(e)) : [],
      upgrade_path: Array.isArray(object?.upgrade_path) ? object.upgrade_path.map((e: any) => String(e)) : [],
      allow_update_after_expiry: isSet(object.allow_update_after_expiry) ? Boolean(object.allow_update_after_expiry) : false,
      allow_update_after_misbehaviour: isSet(object.allow_update_after_misbehaviour) ? Boolean(object.allow_update_after_misbehaviour) : false
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
function createBaseConsensusState(): ConsensusState {
  return {
    timestamp: new Date(),
    root: MerkleRoot.fromPartial({}),
    nextValidatorsHash: new Uint8Array()
  };
}
export const ConsensusState = {
  typeUrl: "/ibc.lightclients.tendermint.v1.ConsensusState",
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
    return {
      timestamp: isSet(object.timestamp) ? new Date(object.timestamp) : undefined,
      root: isSet(object.root) ? MerkleRoot.fromJSON(object.root) : undefined,
      nextValidatorsHash: isSet(object.nextValidatorsHash) ? bytesFromBase64(object.nextValidatorsHash) : new Uint8Array()
    };
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
    message.root = object.root !== undefined && object.root !== null ? MerkleRoot.fromPartial(object.root) : undefined;
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
  fromSDKJSON(object: any): ConsensusStateSDKType {
    return {
      timestamp: isSet(object.timestamp) ? new Date(object.timestamp) : undefined,
      root: isSet(object.root) ? MerkleRoot.fromSDKJSON(object.root) : undefined,
      next_validators_hash: isSet(object.next_validators_hash) ? bytesFromBase64(object.next_validators_hash) : new Uint8Array()
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
function createBaseMisbehaviour(): Misbehaviour {
  return {
    clientId: "",
    header1: undefined,
    header2: undefined
  };
}
export const Misbehaviour = {
  typeUrl: "/ibc.lightclients.tendermint.v1.Misbehaviour",
  encode(message: Misbehaviour, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
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
    return {
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      header1: isSet(object.header1) ? Header.fromJSON(object.header1) : undefined,
      header2: isSet(object.header2) ? Header.fromJSON(object.header2) : undefined
    };
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
    message.header1 = object.header1 !== undefined && object.header1 !== null ? Header.fromPartial(object.header1) : undefined;
    message.header2 = object.header2 !== undefined && object.header2 !== null ? Header.fromPartial(object.header2) : undefined;
    return message;
  },
  fromSDK(object: MisbehaviourSDKType): Misbehaviour {
    return {
      clientId: object?.client_id,
      header1: object.header_1 ? Header.fromSDK(object.header_1) : undefined,
      header2: object.header_2 ? Header.fromSDK(object.header_2) : undefined
    };
  },
  fromSDKJSON(object: any): MisbehaviourSDKType {
    return {
      client_id: isSet(object.client_id) ? String(object.client_id) : "",
      header_1: isSet(object.header_1) ? Header.fromSDKJSON(object.header_1) : undefined,
      header_2: isSet(object.header_2) ? Header.fromSDKJSON(object.header_2) : undefined
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
    return {
      signedHeader: isSet(object.signedHeader) ? SignedHeader.fromJSON(object.signedHeader) : undefined,
      validatorSet: isSet(object.validatorSet) ? ValidatorSet.fromJSON(object.validatorSet) : undefined,
      trustedHeight: isSet(object.trustedHeight) ? Height.fromJSON(object.trustedHeight) : undefined,
      trustedValidators: isSet(object.trustedValidators) ? ValidatorSet.fromJSON(object.trustedValidators) : undefined
    };
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
    message.signedHeader = object.signedHeader !== undefined && object.signedHeader !== null ? SignedHeader.fromPartial(object.signedHeader) : undefined;
    message.validatorSet = object.validatorSet !== undefined && object.validatorSet !== null ? ValidatorSet.fromPartial(object.validatorSet) : undefined;
    message.trustedHeight = object.trustedHeight !== undefined && object.trustedHeight !== null ? Height.fromPartial(object.trustedHeight) : undefined;
    message.trustedValidators = object.trustedValidators !== undefined && object.trustedValidators !== null ? ValidatorSet.fromPartial(object.trustedValidators) : undefined;
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
  fromSDKJSON(object: any): HeaderSDKType {
    return {
      signed_header: isSet(object.signed_header) ? SignedHeader.fromSDKJSON(object.signed_header) : undefined,
      validator_set: isSet(object.validator_set) ? ValidatorSet.fromSDKJSON(object.validator_set) : undefined,
      trusted_height: isSet(object.trusted_height) ? Height.fromSDKJSON(object.trusted_height) : undefined,
      trusted_validators: isSet(object.trusted_validators) ? ValidatorSet.fromSDKJSON(object.trusted_validators) : undefined
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
function createBaseFraction(): Fraction {
  return {
    numerator: BigInt(0),
    denominator: BigInt(0)
  };
}
export const Fraction = {
  typeUrl: "/ibc.lightclients.tendermint.v1.Fraction",
  encode(message: Fraction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.numerator !== BigInt(0)) {
      writer.uint32(8).uint64(message.numerator);
    }
    if (message.denominator !== BigInt(0)) {
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
    return {
      numerator: isSet(object.numerator) ? BigInt(object.numerator.toString()) : BigInt(0),
      denominator: isSet(object.denominator) ? BigInt(object.denominator.toString()) : BigInt(0)
    };
  },
  toJSON(message: Fraction): JsonSafe<Fraction> {
    const obj: any = {};
    message.numerator !== undefined && (obj.numerator = (message.numerator || BigInt(0)).toString());
    message.denominator !== undefined && (obj.denominator = (message.denominator || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Fraction>): Fraction {
    const message = createBaseFraction();
    message.numerator = object.numerator !== undefined && object.numerator !== null ? BigInt(object.numerator.toString()) : BigInt(0);
    message.denominator = object.denominator !== undefined && object.denominator !== null ? BigInt(object.denominator.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: FractionSDKType): Fraction {
    return {
      numerator: object?.numerator,
      denominator: object?.denominator
    };
  },
  fromSDKJSON(object: any): FractionSDKType {
    return {
      numerator: isSet(object.numerator) ? BigInt(object.numerator.toString()) : BigInt(0),
      denominator: isSet(object.denominator) ? BigInt(object.denominator.toString()) : BigInt(0)
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
    obj.numerator = message.numerator !== BigInt(0) ? message.numerator?.toString() : undefined;
    obj.denominator = message.denominator !== BigInt(0) ? message.denominator?.toString() : undefined;
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