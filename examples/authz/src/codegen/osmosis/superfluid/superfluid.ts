//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { isSet, DeepPartial } from "../../helpers";
import { BinaryReader, BinaryWriter } from "../../binary";
import { JsonSafe } from "../../json-safe";
import { GlobalDecoderRegistry } from "../../registry";
import { Decimal } from "@cosmjs/math";
export const protobufPackage = "osmosis.superfluid";
/**
 * SuperfluidAssetType indicates whether the superfluid asset is
 * a native token itself or the lp share of a pool.
 */
export enum SuperfluidAssetType {
  SuperfluidAssetTypeNative = 0,
  SuperfluidAssetTypeLPShare = 1,
  UNRECOGNIZED = -1,
}
export const SuperfluidAssetTypeSDKType = SuperfluidAssetType;
export const SuperfluidAssetTypeAmino = SuperfluidAssetType;
export function superfluidAssetTypeFromJSON(object: any): SuperfluidAssetType {
  switch (object) {
    case 0:
    case "SuperfluidAssetTypeNative":
      return SuperfluidAssetType.SuperfluidAssetTypeNative;
    case 1:
    case "SuperfluidAssetTypeLPShare":
      return SuperfluidAssetType.SuperfluidAssetTypeLPShare;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SuperfluidAssetType.UNRECOGNIZED;
  }
}
export function superfluidAssetTypeToJSON(object: SuperfluidAssetType): string {
  switch (object) {
    case SuperfluidAssetType.SuperfluidAssetTypeNative:
      return "SuperfluidAssetTypeNative";
    case SuperfluidAssetType.SuperfluidAssetTypeLPShare:
      return "SuperfluidAssetTypeLPShare";
    case SuperfluidAssetType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** SuperfluidAsset stores the pair of superfluid asset type and denom pair */
export interface SuperfluidAsset {
  denom: string;
  /**
   * AssetType indicates whether the superfluid asset is a native token or an lp
   * share
   */
  assetType: SuperfluidAssetType;
}
export interface SuperfluidAssetProtoMsg {
  typeUrl: "/osmosis.superfluid.SuperfluidAsset";
  value: Uint8Array;
}
/** SuperfluidAsset stores the pair of superfluid asset type and denom pair */
export interface SuperfluidAssetAmino {
  denom?: string;
  /**
   * AssetType indicates whether the superfluid asset is a native token or an lp
   * share
   */
  asset_type?: SuperfluidAssetType;
}
export interface SuperfluidAssetAminoMsg {
  type: "osmosis/superfluid-asset";
  value: SuperfluidAssetAmino;
}
/** SuperfluidAsset stores the pair of superfluid asset type and denom pair */
export interface SuperfluidAssetSDKType {
  denom: string;
  asset_type: SuperfluidAssetType;
}
/**
 * SuperfluidIntermediaryAccount takes the role of intermediary between LP token
 * and OSMO tokens for superfluid staking. The intermediary account is the
 * actual account responsible for delegation, not the validator account itself.
 */
export interface SuperfluidIntermediaryAccount {
  /** Denom indicates the denom of the superfluid asset. */
  denom: string;
  valAddr: string;
  /** perpetual gauge for rewards distribution */
  gaugeId: bigint;
}
export interface SuperfluidIntermediaryAccountProtoMsg {
  typeUrl: "/osmosis.superfluid.SuperfluidIntermediaryAccount";
  value: Uint8Array;
}
/**
 * SuperfluidIntermediaryAccount takes the role of intermediary between LP token
 * and OSMO tokens for superfluid staking. The intermediary account is the
 * actual account responsible for delegation, not the validator account itself.
 */
export interface SuperfluidIntermediaryAccountAmino {
  /** Denom indicates the denom of the superfluid asset. */
  denom?: string;
  val_addr?: string;
  /** perpetual gauge for rewards distribution */
  gauge_id?: string;
}
export interface SuperfluidIntermediaryAccountAminoMsg {
  type: "osmosis/superfluid-intermediary-account";
  value: SuperfluidIntermediaryAccountAmino;
}
/**
 * SuperfluidIntermediaryAccount takes the role of intermediary between LP token
 * and OSMO tokens for superfluid staking. The intermediary account is the
 * actual account responsible for delegation, not the validator account itself.
 */
export interface SuperfluidIntermediaryAccountSDKType {
  denom: string;
  val_addr: string;
  gauge_id: bigint;
}
/**
 * The Osmo-Equivalent-Multiplier Record for epoch N refers to the osmo worth we
 * treat an LP share as having, for all of epoch N. Eventually this is intended
 * to be set as the Time-weighted-average-osmo-backing for the entire duration
 * of epoch N-1. (Thereby locking whats in use for epoch N as based on the prior
 * epochs rewards) However for now, this is not the TWAP but instead the spot
 * price at the boundary. For different types of assets in the future, it could
 * change.
 */
export interface OsmoEquivalentMultiplierRecord {
  epochNumber: bigint;
  /** superfluid asset denom, can be LP token or native token */
  denom: string;
  multiplier: string;
}
export interface OsmoEquivalentMultiplierRecordProtoMsg {
  typeUrl: "/osmosis.superfluid.OsmoEquivalentMultiplierRecord";
  value: Uint8Array;
}
/**
 * The Osmo-Equivalent-Multiplier Record for epoch N refers to the osmo worth we
 * treat an LP share as having, for all of epoch N. Eventually this is intended
 * to be set as the Time-weighted-average-osmo-backing for the entire duration
 * of epoch N-1. (Thereby locking whats in use for epoch N as based on the prior
 * epochs rewards) However for now, this is not the TWAP but instead the spot
 * price at the boundary. For different types of assets in the future, it could
 * change.
 */
export interface OsmoEquivalentMultiplierRecordAmino {
  epoch_number?: string;
  /** superfluid asset denom, can be LP token or native token */
  denom?: string;
  multiplier?: string;
}
export interface OsmoEquivalentMultiplierRecordAminoMsg {
  type: "osmosis/osmo-equivalent-multiplier-record";
  value: OsmoEquivalentMultiplierRecordAmino;
}
/**
 * The Osmo-Equivalent-Multiplier Record for epoch N refers to the osmo worth we
 * treat an LP share as having, for all of epoch N. Eventually this is intended
 * to be set as the Time-weighted-average-osmo-backing for the entire duration
 * of epoch N-1. (Thereby locking whats in use for epoch N as based on the prior
 * epochs rewards) However for now, this is not the TWAP but instead the spot
 * price at the boundary. For different types of assets in the future, it could
 * change.
 */
export interface OsmoEquivalentMultiplierRecordSDKType {
  epoch_number: bigint;
  denom: string;
  multiplier: string;
}
/**
 * SuperfluidDelegationRecord is a struct used to indicate superfluid
 * delegations of an account in the state machine in a user friendly form.
 */
export interface SuperfluidDelegationRecord {
  delegatorAddress: string;
  validatorAddress: string;
  delegationAmount: Coin;
  equivalentStakedAmount?: Coin;
}
export interface SuperfluidDelegationRecordProtoMsg {
  typeUrl: "/osmosis.superfluid.SuperfluidDelegationRecord";
  value: Uint8Array;
}
/**
 * SuperfluidDelegationRecord is a struct used to indicate superfluid
 * delegations of an account in the state machine in a user friendly form.
 */
export interface SuperfluidDelegationRecordAmino {
  delegator_address?: string;
  validator_address?: string;
  delegation_amount?: CoinAmino;
  equivalent_staked_amount?: CoinAmino;
}
export interface SuperfluidDelegationRecordAminoMsg {
  type: "osmosis/superfluid-delegation-record";
  value: SuperfluidDelegationRecordAmino;
}
/**
 * SuperfluidDelegationRecord is a struct used to indicate superfluid
 * delegations of an account in the state machine in a user friendly form.
 */
export interface SuperfluidDelegationRecordSDKType {
  delegator_address: string;
  validator_address: string;
  delegation_amount: CoinSDKType;
  equivalent_staked_amount?: CoinSDKType;
}
/**
 * LockIdIntermediaryAccountConnection is a struct used to indicate the
 * relationship between the underlying lock id and superfluid delegation done
 * via lp shares.
 */
export interface LockIdIntermediaryAccountConnection {
  lockId: bigint;
  intermediaryAccount: string;
}
export interface LockIdIntermediaryAccountConnectionProtoMsg {
  typeUrl: "/osmosis.superfluid.LockIdIntermediaryAccountConnection";
  value: Uint8Array;
}
/**
 * LockIdIntermediaryAccountConnection is a struct used to indicate the
 * relationship between the underlying lock id and superfluid delegation done
 * via lp shares.
 */
export interface LockIdIntermediaryAccountConnectionAmino {
  lock_id?: string;
  intermediary_account?: string;
}
export interface LockIdIntermediaryAccountConnectionAminoMsg {
  type: "osmosis/lock-id-intermediary-account-connection";
  value: LockIdIntermediaryAccountConnectionAmino;
}
/**
 * LockIdIntermediaryAccountConnection is a struct used to indicate the
 * relationship between the underlying lock id and superfluid delegation done
 * via lp shares.
 */
export interface LockIdIntermediaryAccountConnectionSDKType {
  lock_id: bigint;
  intermediary_account: string;
}
export interface UnpoolWhitelistedPools {
  ids: bigint[];
}
export interface UnpoolWhitelistedPoolsProtoMsg {
  typeUrl: "/osmosis.superfluid.UnpoolWhitelistedPools";
  value: Uint8Array;
}
export interface UnpoolWhitelistedPoolsAmino {
  ids?: string[];
}
export interface UnpoolWhitelistedPoolsAminoMsg {
  type: "osmosis/unpool-whitelisted-pools";
  value: UnpoolWhitelistedPoolsAmino;
}
export interface UnpoolWhitelistedPoolsSDKType {
  ids: bigint[];
}
function createBaseSuperfluidAsset(): SuperfluidAsset {
  return {
    denom: "",
    assetType: 0
  };
}
export const SuperfluidAsset = {
  typeUrl: "/osmosis.superfluid.SuperfluidAsset",
  aminoType: "osmosis/superfluid-asset",
  is(o: any): o is SuperfluidAsset {
    return o && (o.$typeUrl === SuperfluidAsset.typeUrl || typeof o.denom === "string" && isSet(o.assetType));
  },
  isSDK(o: any): o is SuperfluidAssetSDKType {
    return o && (o.$typeUrl === SuperfluidAsset.typeUrl || typeof o.denom === "string" && isSet(o.asset_type));
  },
  isAmino(o: any): o is SuperfluidAssetAmino {
    return o && (o.$typeUrl === SuperfluidAsset.typeUrl || typeof o.denom === "string" && isSet(o.asset_type));
  },
  encode(message: SuperfluidAsset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== undefined) {
      writer.uint32(10).string(message.denom);
    }
    if (message.assetType !== 0) {
      writer.uint32(16).int32(message.assetType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidAsset {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.assetType = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SuperfluidAsset {
    const obj = createBaseSuperfluidAsset();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    if (isSet(object.assetType)) obj.assetType = superfluidAssetTypeFromJSON(object.assetType);
    return obj;
  },
  toJSON(message: SuperfluidAsset): JsonSafe<SuperfluidAsset> {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.assetType !== undefined && (obj.assetType = superfluidAssetTypeToJSON(message.assetType));
    return obj;
  },
  fromPartial(object: DeepPartial<SuperfluidAsset>): SuperfluidAsset {
    const message = createBaseSuperfluidAsset();
    message.denom = object.denom ?? "";
    message.assetType = object.assetType ?? 0;
    return message;
  },
  fromSDK(object: SuperfluidAssetSDKType): SuperfluidAsset {
    return {
      denom: object?.denom,
      assetType: isSet(object.asset_type) ? superfluidAssetTypeFromJSON(object.asset_type) : -1
    };
  },
  toSDK(message: SuperfluidAsset): SuperfluidAssetSDKType {
    const obj: any = {};
    obj.denom = message.denom;
    message.assetType !== undefined && (obj.asset_type = superfluidAssetTypeToJSON(message.assetType));
    return obj;
  },
  fromAmino(object: SuperfluidAssetAmino): SuperfluidAsset {
    const message = createBaseSuperfluidAsset();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.asset_type !== undefined && object.asset_type !== null) {
      message.assetType = object.asset_type;
    }
    return message;
  },
  toAmino(message: SuperfluidAsset): SuperfluidAssetAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.asset_type = message.assetType === 0 ? undefined : message.assetType;
    return obj;
  },
  fromAminoMsg(object: SuperfluidAssetAminoMsg): SuperfluidAsset {
    return SuperfluidAsset.fromAmino(object.value);
  },
  toAminoMsg(message: SuperfluidAsset): SuperfluidAssetAminoMsg {
    return {
      type: "osmosis/superfluid-asset",
      value: SuperfluidAsset.toAmino(message)
    };
  },
  fromProtoMsg(message: SuperfluidAssetProtoMsg): SuperfluidAsset {
    return SuperfluidAsset.decode(message.value);
  },
  toProto(message: SuperfluidAsset): Uint8Array {
    return SuperfluidAsset.encode(message).finish();
  },
  toProtoMsg(message: SuperfluidAsset): SuperfluidAssetProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.SuperfluidAsset",
      value: SuperfluidAsset.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SuperfluidAsset.typeUrl, SuperfluidAsset);
GlobalDecoderRegistry.registerAminoProtoMapping(SuperfluidAsset.aminoType, SuperfluidAsset.typeUrl);
function createBaseSuperfluidIntermediaryAccount(): SuperfluidIntermediaryAccount {
  return {
    denom: "",
    valAddr: "",
    gaugeId: BigInt(0)
  };
}
export const SuperfluidIntermediaryAccount = {
  typeUrl: "/osmosis.superfluid.SuperfluidIntermediaryAccount",
  aminoType: "osmosis/superfluid-intermediary-account",
  is(o: any): o is SuperfluidIntermediaryAccount {
    return o && (o.$typeUrl === SuperfluidIntermediaryAccount.typeUrl || typeof o.denom === "string" && typeof o.valAddr === "string" && typeof o.gaugeId === "bigint");
  },
  isSDK(o: any): o is SuperfluidIntermediaryAccountSDKType {
    return o && (o.$typeUrl === SuperfluidIntermediaryAccount.typeUrl || typeof o.denom === "string" && typeof o.val_addr === "string" && typeof o.gauge_id === "bigint");
  },
  isAmino(o: any): o is SuperfluidIntermediaryAccountAmino {
    return o && (o.$typeUrl === SuperfluidIntermediaryAccount.typeUrl || typeof o.denom === "string" && typeof o.val_addr === "string" && typeof o.gauge_id === "bigint");
  },
  encode(message: SuperfluidIntermediaryAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== undefined) {
      writer.uint32(10).string(message.denom);
    }
    if (message.valAddr !== undefined) {
      writer.uint32(18).string(message.valAddr);
    }
    if (message.gaugeId !== undefined) {
      writer.uint32(24).uint64(message.gaugeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidIntermediaryAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidIntermediaryAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.valAddr = reader.string();
          break;
        case 3:
          message.gaugeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SuperfluidIntermediaryAccount {
    const obj = createBaseSuperfluidIntermediaryAccount();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    if (isSet(object.valAddr)) obj.valAddr = String(object.valAddr);
    if (isSet(object.gaugeId)) obj.gaugeId = BigInt(object.gaugeId.toString());
    return obj;
  },
  toJSON(message: SuperfluidIntermediaryAccount): JsonSafe<SuperfluidIntermediaryAccount> {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.valAddr !== undefined && (obj.valAddr = message.valAddr);
    message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<SuperfluidIntermediaryAccount>): SuperfluidIntermediaryAccount {
    const message = createBaseSuperfluidIntermediaryAccount();
    message.denom = object.denom ?? "";
    message.valAddr = object.valAddr ?? "";
    if (object.gaugeId !== undefined && object.gaugeId !== null) {
      message.gaugeId = BigInt(object.gaugeId.toString());
    }
    return message;
  },
  fromSDK(object: SuperfluidIntermediaryAccountSDKType): SuperfluidIntermediaryAccount {
    return {
      denom: object?.denom,
      valAddr: object?.val_addr,
      gaugeId: object?.gauge_id
    };
  },
  toSDK(message: SuperfluidIntermediaryAccount): SuperfluidIntermediaryAccountSDKType {
    const obj: any = {};
    obj.denom = message.denom;
    obj.val_addr = message.valAddr;
    obj.gauge_id = message.gaugeId;
    return obj;
  },
  fromAmino(object: SuperfluidIntermediaryAccountAmino): SuperfluidIntermediaryAccount {
    const message = createBaseSuperfluidIntermediaryAccount();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.val_addr !== undefined && object.val_addr !== null) {
      message.valAddr = object.val_addr;
    }
    if (object.gauge_id !== undefined && object.gauge_id !== null) {
      message.gaugeId = BigInt(object.gauge_id);
    }
    return message;
  },
  toAmino(message: SuperfluidIntermediaryAccount): SuperfluidIntermediaryAccountAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.val_addr = message.valAddr === "" ? undefined : message.valAddr;
    obj.gauge_id = message.gaugeId !== BigInt(0) ? message.gaugeId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SuperfluidIntermediaryAccountAminoMsg): SuperfluidIntermediaryAccount {
    return SuperfluidIntermediaryAccount.fromAmino(object.value);
  },
  toAminoMsg(message: SuperfluidIntermediaryAccount): SuperfluidIntermediaryAccountAminoMsg {
    return {
      type: "osmosis/superfluid-intermediary-account",
      value: SuperfluidIntermediaryAccount.toAmino(message)
    };
  },
  fromProtoMsg(message: SuperfluidIntermediaryAccountProtoMsg): SuperfluidIntermediaryAccount {
    return SuperfluidIntermediaryAccount.decode(message.value);
  },
  toProto(message: SuperfluidIntermediaryAccount): Uint8Array {
    return SuperfluidIntermediaryAccount.encode(message).finish();
  },
  toProtoMsg(message: SuperfluidIntermediaryAccount): SuperfluidIntermediaryAccountProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.SuperfluidIntermediaryAccount",
      value: SuperfluidIntermediaryAccount.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SuperfluidIntermediaryAccount.typeUrl, SuperfluidIntermediaryAccount);
GlobalDecoderRegistry.registerAminoProtoMapping(SuperfluidIntermediaryAccount.aminoType, SuperfluidIntermediaryAccount.typeUrl);
function createBaseOsmoEquivalentMultiplierRecord(): OsmoEquivalentMultiplierRecord {
  return {
    epochNumber: BigInt(0),
    denom: "",
    multiplier: ""
  };
}
export const OsmoEquivalentMultiplierRecord = {
  typeUrl: "/osmosis.superfluid.OsmoEquivalentMultiplierRecord",
  aminoType: "osmosis/osmo-equivalent-multiplier-record",
  is(o: any): o is OsmoEquivalentMultiplierRecord {
    return o && (o.$typeUrl === OsmoEquivalentMultiplierRecord.typeUrl || typeof o.epochNumber === "bigint" && typeof o.denom === "string" && typeof o.multiplier === "string");
  },
  isSDK(o: any): o is OsmoEquivalentMultiplierRecordSDKType {
    return o && (o.$typeUrl === OsmoEquivalentMultiplierRecord.typeUrl || typeof o.epoch_number === "bigint" && typeof o.denom === "string" && typeof o.multiplier === "string");
  },
  isAmino(o: any): o is OsmoEquivalentMultiplierRecordAmino {
    return o && (o.$typeUrl === OsmoEquivalentMultiplierRecord.typeUrl || typeof o.epoch_number === "bigint" && typeof o.denom === "string" && typeof o.multiplier === "string");
  },
  encode(message: OsmoEquivalentMultiplierRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochNumber !== undefined) {
      writer.uint32(8).int64(message.epochNumber);
    }
    if (message.denom !== undefined) {
      writer.uint32(18).string(message.denom);
    }
    if (message.multiplier !== undefined) {
      writer.uint32(26).string(Decimal.fromUserInput(message.multiplier, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OsmoEquivalentMultiplierRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOsmoEquivalentMultiplierRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = reader.int64();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.multiplier = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OsmoEquivalentMultiplierRecord {
    const obj = createBaseOsmoEquivalentMultiplierRecord();
    if (isSet(object.epochNumber)) obj.epochNumber = BigInt(object.epochNumber.toString());
    if (isSet(object.denom)) obj.denom = String(object.denom);
    if (isSet(object.multiplier)) obj.multiplier = String(object.multiplier);
    return obj;
  },
  toJSON(message: OsmoEquivalentMultiplierRecord): JsonSafe<OsmoEquivalentMultiplierRecord> {
    const obj: any = {};
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || BigInt(0)).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.multiplier !== undefined && (obj.multiplier = message.multiplier);
    return obj;
  },
  fromPartial(object: DeepPartial<OsmoEquivalentMultiplierRecord>): OsmoEquivalentMultiplierRecord {
    const message = createBaseOsmoEquivalentMultiplierRecord();
    if (object.epochNumber !== undefined && object.epochNumber !== null) {
      message.epochNumber = BigInt(object.epochNumber.toString());
    }
    message.denom = object.denom ?? "";
    message.multiplier = object.multiplier ?? "";
    return message;
  },
  fromSDK(object: OsmoEquivalentMultiplierRecordSDKType): OsmoEquivalentMultiplierRecord {
    return {
      epochNumber: object?.epoch_number,
      denom: object?.denom,
      multiplier: object?.multiplier
    };
  },
  toSDK(message: OsmoEquivalentMultiplierRecord): OsmoEquivalentMultiplierRecordSDKType {
    const obj: any = {};
    obj.epoch_number = message.epochNumber;
    obj.denom = message.denom;
    obj.multiplier = message.multiplier;
    return obj;
  },
  fromAmino(object: OsmoEquivalentMultiplierRecordAmino): OsmoEquivalentMultiplierRecord {
    const message = createBaseOsmoEquivalentMultiplierRecord();
    if (object.epoch_number !== undefined && object.epoch_number !== null) {
      message.epochNumber = BigInt(object.epoch_number);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.multiplier !== undefined && object.multiplier !== null) {
      message.multiplier = object.multiplier;
    }
    return message;
  },
  toAmino(message: OsmoEquivalentMultiplierRecord): OsmoEquivalentMultiplierRecordAmino {
    const obj: any = {};
    obj.epoch_number = message.epochNumber !== BigInt(0) ? message.epochNumber.toString() : undefined;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.multiplier = message.multiplier === "" ? undefined : message.multiplier;
    return obj;
  },
  fromAminoMsg(object: OsmoEquivalentMultiplierRecordAminoMsg): OsmoEquivalentMultiplierRecord {
    return OsmoEquivalentMultiplierRecord.fromAmino(object.value);
  },
  toAminoMsg(message: OsmoEquivalentMultiplierRecord): OsmoEquivalentMultiplierRecordAminoMsg {
    return {
      type: "osmosis/osmo-equivalent-multiplier-record",
      value: OsmoEquivalentMultiplierRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: OsmoEquivalentMultiplierRecordProtoMsg): OsmoEquivalentMultiplierRecord {
    return OsmoEquivalentMultiplierRecord.decode(message.value);
  },
  toProto(message: OsmoEquivalentMultiplierRecord): Uint8Array {
    return OsmoEquivalentMultiplierRecord.encode(message).finish();
  },
  toProtoMsg(message: OsmoEquivalentMultiplierRecord): OsmoEquivalentMultiplierRecordProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.OsmoEquivalentMultiplierRecord",
      value: OsmoEquivalentMultiplierRecord.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(OsmoEquivalentMultiplierRecord.typeUrl, OsmoEquivalentMultiplierRecord);
GlobalDecoderRegistry.registerAminoProtoMapping(OsmoEquivalentMultiplierRecord.aminoType, OsmoEquivalentMultiplierRecord.typeUrl);
function createBaseSuperfluidDelegationRecord(): SuperfluidDelegationRecord {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    delegationAmount: Coin.fromPartial({}),
    equivalentStakedAmount: undefined
  };
}
export const SuperfluidDelegationRecord = {
  typeUrl: "/osmosis.superfluid.SuperfluidDelegationRecord",
  aminoType: "osmosis/superfluid-delegation-record",
  is(o: any): o is SuperfluidDelegationRecord {
    return o && (o.$typeUrl === SuperfluidDelegationRecord.typeUrl || typeof o.delegatorAddress === "string" && typeof o.validatorAddress === "string" && Coin.is(o.delegationAmount));
  },
  isSDK(o: any): o is SuperfluidDelegationRecordSDKType {
    return o && (o.$typeUrl === SuperfluidDelegationRecord.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && Coin.isSDK(o.delegation_amount));
  },
  isAmino(o: any): o is SuperfluidDelegationRecordAmino {
    return o && (o.$typeUrl === SuperfluidDelegationRecord.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && Coin.isAmino(o.delegation_amount));
  },
  encode(message: SuperfluidDelegationRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== undefined) {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== undefined) {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.delegationAmount !== undefined) {
      Coin.encode(message.delegationAmount, writer.uint32(26).fork()).ldelim();
    }
    if (message.equivalentStakedAmount !== undefined) {
      Coin.encode(message.equivalentStakedAmount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidDelegationRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.delegationAmount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.equivalentStakedAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SuperfluidDelegationRecord {
    const obj = createBaseSuperfluidDelegationRecord();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    if (isSet(object.delegationAmount)) obj.delegationAmount = Coin.fromJSON(object.delegationAmount);
    if (isSet(object.equivalentStakedAmount)) obj.equivalentStakedAmount = Coin.fromJSON(object.equivalentStakedAmount);
    return obj;
  },
  toJSON(message: SuperfluidDelegationRecord): JsonSafe<SuperfluidDelegationRecord> {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.delegationAmount !== undefined && (obj.delegationAmount = message.delegationAmount ? Coin.toJSON(message.delegationAmount) : undefined);
    message.equivalentStakedAmount !== undefined && (obj.equivalentStakedAmount = message.equivalentStakedAmount ? Coin.toJSON(message.equivalentStakedAmount) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<SuperfluidDelegationRecord>): SuperfluidDelegationRecord {
    const message = createBaseSuperfluidDelegationRecord();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    if (object.delegationAmount !== undefined && object.delegationAmount !== null) {
      message.delegationAmount = Coin.fromPartial(object.delegationAmount);
    }
    if (object.equivalentStakedAmount !== undefined && object.equivalentStakedAmount !== null) {
      message.equivalentStakedAmount = Coin.fromPartial(object.equivalentStakedAmount);
    }
    return message;
  },
  fromSDK(object: SuperfluidDelegationRecordSDKType): SuperfluidDelegationRecord {
    return {
      delegatorAddress: object?.delegator_address,
      validatorAddress: object?.validator_address,
      delegationAmount: object.delegation_amount ? Coin.fromSDK(object.delegation_amount) : undefined,
      equivalentStakedAmount: object.equivalent_staked_amount ? Coin.fromSDK(object.equivalent_staked_amount) : undefined
    };
  },
  toSDK(message: SuperfluidDelegationRecord): SuperfluidDelegationRecordSDKType {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    message.delegationAmount !== undefined && (obj.delegation_amount = message.delegationAmount ? Coin.toSDK(message.delegationAmount) : undefined);
    message.equivalentStakedAmount !== undefined && (obj.equivalent_staked_amount = message.equivalentStakedAmount ? Coin.toSDK(message.equivalentStakedAmount) : undefined);
    return obj;
  },
  fromAmino(object: SuperfluidDelegationRecordAmino): SuperfluidDelegationRecord {
    const message = createBaseSuperfluidDelegationRecord();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.delegation_amount !== undefined && object.delegation_amount !== null) {
      message.delegationAmount = Coin.fromAmino(object.delegation_amount);
    }
    if (object.equivalent_staked_amount !== undefined && object.equivalent_staked_amount !== null) {
      message.equivalentStakedAmount = Coin.fromAmino(object.equivalent_staked_amount);
    }
    return message;
  },
  toAmino(message: SuperfluidDelegationRecord): SuperfluidDelegationRecordAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.delegation_amount = message.delegationAmount ? Coin.toAmino(message.delegationAmount) : undefined;
    obj.equivalent_staked_amount = message.equivalentStakedAmount ? Coin.toAmino(message.equivalentStakedAmount) : undefined;
    return obj;
  },
  fromAminoMsg(object: SuperfluidDelegationRecordAminoMsg): SuperfluidDelegationRecord {
    return SuperfluidDelegationRecord.fromAmino(object.value);
  },
  toAminoMsg(message: SuperfluidDelegationRecord): SuperfluidDelegationRecordAminoMsg {
    return {
      type: "osmosis/superfluid-delegation-record",
      value: SuperfluidDelegationRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: SuperfluidDelegationRecordProtoMsg): SuperfluidDelegationRecord {
    return SuperfluidDelegationRecord.decode(message.value);
  },
  toProto(message: SuperfluidDelegationRecord): Uint8Array {
    return SuperfluidDelegationRecord.encode(message).finish();
  },
  toProtoMsg(message: SuperfluidDelegationRecord): SuperfluidDelegationRecordProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.SuperfluidDelegationRecord",
      value: SuperfluidDelegationRecord.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SuperfluidDelegationRecord.typeUrl, SuperfluidDelegationRecord);
GlobalDecoderRegistry.registerAminoProtoMapping(SuperfluidDelegationRecord.aminoType, SuperfluidDelegationRecord.typeUrl);
function createBaseLockIdIntermediaryAccountConnection(): LockIdIntermediaryAccountConnection {
  return {
    lockId: BigInt(0),
    intermediaryAccount: ""
  };
}
export const LockIdIntermediaryAccountConnection = {
  typeUrl: "/osmosis.superfluid.LockIdIntermediaryAccountConnection",
  aminoType: "osmosis/lock-id-intermediary-account-connection",
  is(o: any): o is LockIdIntermediaryAccountConnection {
    return o && (o.$typeUrl === LockIdIntermediaryAccountConnection.typeUrl || typeof o.lockId === "bigint" && typeof o.intermediaryAccount === "string");
  },
  isSDK(o: any): o is LockIdIntermediaryAccountConnectionSDKType {
    return o && (o.$typeUrl === LockIdIntermediaryAccountConnection.typeUrl || typeof o.lock_id === "bigint" && typeof o.intermediary_account === "string");
  },
  isAmino(o: any): o is LockIdIntermediaryAccountConnectionAmino {
    return o && (o.$typeUrl === LockIdIntermediaryAccountConnection.typeUrl || typeof o.lock_id === "bigint" && typeof o.intermediary_account === "string");
  },
  encode(message: LockIdIntermediaryAccountConnection, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lockId !== undefined) {
      writer.uint32(8).uint64(message.lockId);
    }
    if (message.intermediaryAccount !== undefined) {
      writer.uint32(18).string(message.intermediaryAccount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LockIdIntermediaryAccountConnection {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockIdIntermediaryAccountConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockId = reader.uint64();
          break;
        case 2:
          message.intermediaryAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LockIdIntermediaryAccountConnection {
    const obj = createBaseLockIdIntermediaryAccountConnection();
    if (isSet(object.lockId)) obj.lockId = BigInt(object.lockId.toString());
    if (isSet(object.intermediaryAccount)) obj.intermediaryAccount = String(object.intermediaryAccount);
    return obj;
  },
  toJSON(message: LockIdIntermediaryAccountConnection): JsonSafe<LockIdIntermediaryAccountConnection> {
    const obj: any = {};
    message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
    message.intermediaryAccount !== undefined && (obj.intermediaryAccount = message.intermediaryAccount);
    return obj;
  },
  fromPartial(object: DeepPartial<LockIdIntermediaryAccountConnection>): LockIdIntermediaryAccountConnection {
    const message = createBaseLockIdIntermediaryAccountConnection();
    if (object.lockId !== undefined && object.lockId !== null) {
      message.lockId = BigInt(object.lockId.toString());
    }
    message.intermediaryAccount = object.intermediaryAccount ?? "";
    return message;
  },
  fromSDK(object: LockIdIntermediaryAccountConnectionSDKType): LockIdIntermediaryAccountConnection {
    return {
      lockId: object?.lock_id,
      intermediaryAccount: object?.intermediary_account
    };
  },
  toSDK(message: LockIdIntermediaryAccountConnection): LockIdIntermediaryAccountConnectionSDKType {
    const obj: any = {};
    obj.lock_id = message.lockId;
    obj.intermediary_account = message.intermediaryAccount;
    return obj;
  },
  fromAmino(object: LockIdIntermediaryAccountConnectionAmino): LockIdIntermediaryAccountConnection {
    const message = createBaseLockIdIntermediaryAccountConnection();
    if (object.lock_id !== undefined && object.lock_id !== null) {
      message.lockId = BigInt(object.lock_id);
    }
    if (object.intermediary_account !== undefined && object.intermediary_account !== null) {
      message.intermediaryAccount = object.intermediary_account;
    }
    return message;
  },
  toAmino(message: LockIdIntermediaryAccountConnection): LockIdIntermediaryAccountConnectionAmino {
    const obj: any = {};
    obj.lock_id = message.lockId !== BigInt(0) ? message.lockId.toString() : undefined;
    obj.intermediary_account = message.intermediaryAccount === "" ? undefined : message.intermediaryAccount;
    return obj;
  },
  fromAminoMsg(object: LockIdIntermediaryAccountConnectionAminoMsg): LockIdIntermediaryAccountConnection {
    return LockIdIntermediaryAccountConnection.fromAmino(object.value);
  },
  toAminoMsg(message: LockIdIntermediaryAccountConnection): LockIdIntermediaryAccountConnectionAminoMsg {
    return {
      type: "osmosis/lock-id-intermediary-account-connection",
      value: LockIdIntermediaryAccountConnection.toAmino(message)
    };
  },
  fromProtoMsg(message: LockIdIntermediaryAccountConnectionProtoMsg): LockIdIntermediaryAccountConnection {
    return LockIdIntermediaryAccountConnection.decode(message.value);
  },
  toProto(message: LockIdIntermediaryAccountConnection): Uint8Array {
    return LockIdIntermediaryAccountConnection.encode(message).finish();
  },
  toProtoMsg(message: LockIdIntermediaryAccountConnection): LockIdIntermediaryAccountConnectionProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.LockIdIntermediaryAccountConnection",
      value: LockIdIntermediaryAccountConnection.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LockIdIntermediaryAccountConnection.typeUrl, LockIdIntermediaryAccountConnection);
GlobalDecoderRegistry.registerAminoProtoMapping(LockIdIntermediaryAccountConnection.aminoType, LockIdIntermediaryAccountConnection.typeUrl);
function createBaseUnpoolWhitelistedPools(): UnpoolWhitelistedPools {
  return {
    ids: []
  };
}
export const UnpoolWhitelistedPools = {
  typeUrl: "/osmosis.superfluid.UnpoolWhitelistedPools",
  aminoType: "osmosis/unpool-whitelisted-pools",
  is(o: any): o is UnpoolWhitelistedPools {
    return o && (o.$typeUrl === UnpoolWhitelistedPools.typeUrl || Array.isArray(o.ids) && (!o.ids.length || typeof o.ids[0] === "bigint"));
  },
  isSDK(o: any): o is UnpoolWhitelistedPoolsSDKType {
    return o && (o.$typeUrl === UnpoolWhitelistedPools.typeUrl || Array.isArray(o.ids) && (!o.ids.length || typeof o.ids[0] === "bigint"));
  },
  isAmino(o: any): o is UnpoolWhitelistedPoolsAmino {
    return o && (o.$typeUrl === UnpoolWhitelistedPools.typeUrl || Array.isArray(o.ids) && (!o.ids.length || typeof o.ids[0] === "bigint"));
  },
  encode(message: UnpoolWhitelistedPools, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UnpoolWhitelistedPools {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnpoolWhitelistedPools();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ids.push(reader.uint64());
            }
          } else {
            message.ids.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UnpoolWhitelistedPools {
    const obj = createBaseUnpoolWhitelistedPools();
    if (Array.isArray(object?.ids)) obj.ids = object.ids.map((e: any) => BigInt(e.toString()));
    return obj;
  },
  toJSON(message: UnpoolWhitelistedPools): JsonSafe<UnpoolWhitelistedPools> {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map(e => (e || BigInt(0)).toString());
    } else {
      obj.ids = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<UnpoolWhitelistedPools>): UnpoolWhitelistedPools {
    const message = createBaseUnpoolWhitelistedPools();
    message.ids = object.ids?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromSDK(object: UnpoolWhitelistedPoolsSDKType): UnpoolWhitelistedPools {
    return {
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => e) : []
    };
  },
  toSDK(message: UnpoolWhitelistedPools): UnpoolWhitelistedPoolsSDKType {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map(e => e);
    } else {
      obj.ids = [];
    }
    return obj;
  },
  fromAmino(object: UnpoolWhitelistedPoolsAmino): UnpoolWhitelistedPools {
    const message = createBaseUnpoolWhitelistedPools();
    message.ids = object.ids?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: UnpoolWhitelistedPools): UnpoolWhitelistedPoolsAmino {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map(e => e.toString());
    } else {
      obj.ids = message.ids;
    }
    return obj;
  },
  fromAminoMsg(object: UnpoolWhitelistedPoolsAminoMsg): UnpoolWhitelistedPools {
    return UnpoolWhitelistedPools.fromAmino(object.value);
  },
  toAminoMsg(message: UnpoolWhitelistedPools): UnpoolWhitelistedPoolsAminoMsg {
    return {
      type: "osmosis/unpool-whitelisted-pools",
      value: UnpoolWhitelistedPools.toAmino(message)
    };
  },
  fromProtoMsg(message: UnpoolWhitelistedPoolsProtoMsg): UnpoolWhitelistedPools {
    return UnpoolWhitelistedPools.decode(message.value);
  },
  toProto(message: UnpoolWhitelistedPools): Uint8Array {
    return UnpoolWhitelistedPools.encode(message).finish();
  },
  toProtoMsg(message: UnpoolWhitelistedPools): UnpoolWhitelistedPoolsProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.UnpoolWhitelistedPools",
      value: UnpoolWhitelistedPools.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UnpoolWhitelistedPools.typeUrl, UnpoolWhitelistedPools);
GlobalDecoderRegistry.registerAminoProtoMapping(UnpoolWhitelistedPools.aminoType, UnpoolWhitelistedPools.typeUrl);