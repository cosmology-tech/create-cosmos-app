//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "osmosis.mint.v1beta1";
/** Minter represents the minting state. */
export interface Minter {
  /** epoch_provisions represent rewards for the current epoch. */
  epochProvisions: string;
}
export interface MinterProtoMsg {
  typeUrl: "/osmosis.mint.v1beta1.Minter";
  value: Uint8Array;
}
/** Minter represents the minting state. */
export interface MinterAmino {
  /** epoch_provisions represent rewards for the current epoch. */
  epoch_provisions?: string;
}
export interface MinterAminoMsg {
  type: "osmosis/mint/minter";
  value: MinterAmino;
}
/** Minter represents the minting state. */
export interface MinterSDKType {
  epoch_provisions: string;
}
/**
 * WeightedAddress represents an address with a weight assigned to it.
 * The weight is used to determine the proportion of the total minted
 * tokens to be minted to the address.
 */
export interface WeightedAddress {
  address: string;
  weight: string;
}
export interface WeightedAddressProtoMsg {
  typeUrl: "/osmosis.mint.v1beta1.WeightedAddress";
  value: Uint8Array;
}
/**
 * WeightedAddress represents an address with a weight assigned to it.
 * The weight is used to determine the proportion of the total minted
 * tokens to be minted to the address.
 */
export interface WeightedAddressAmino {
  address?: string;
  weight?: string;
}
export interface WeightedAddressAminoMsg {
  type: "osmosis/mint/weighted-address";
  value: WeightedAddressAmino;
}
/**
 * WeightedAddress represents an address with a weight assigned to it.
 * The weight is used to determine the proportion of the total minted
 * tokens to be minted to the address.
 */
export interface WeightedAddressSDKType {
  address: string;
  weight: string;
}
/**
 * DistributionProportions defines the distribution proportions of the minted
 * denom. In other words, defines which stakeholders will receive the minted
 * denoms and how much.
 */
export interface DistributionProportions {
  /**
   * staking defines the proportion of the minted mint_denom that is to be
   * allocated as staking rewards.
   */
  staking: string;
  /**
   * pool_incentives defines the proportion of the minted mint_denom that is
   * to be allocated as pool incentives.
   */
  poolIncentives: string;
  /**
   * developer_rewards defines the proportion of the minted mint_denom that is
   * to be allocated to developer rewards address.
   */
  developerRewards: string;
  /**
   * community_pool defines the proportion of the minted mint_denom that is
   * to be allocated to the community pool.
   */
  communityPool: string;
}
export interface DistributionProportionsProtoMsg {
  typeUrl: "/osmosis.mint.v1beta1.DistributionProportions";
  value: Uint8Array;
}
/**
 * DistributionProportions defines the distribution proportions of the minted
 * denom. In other words, defines which stakeholders will receive the minted
 * denoms and how much.
 */
export interface DistributionProportionsAmino {
  /**
   * staking defines the proportion of the minted mint_denom that is to be
   * allocated as staking rewards.
   */
  staking?: string;
  /**
   * pool_incentives defines the proportion of the minted mint_denom that is
   * to be allocated as pool incentives.
   */
  pool_incentives?: string;
  /**
   * developer_rewards defines the proportion of the minted mint_denom that is
   * to be allocated to developer rewards address.
   */
  developer_rewards?: string;
  /**
   * community_pool defines the proportion of the minted mint_denom that is
   * to be allocated to the community pool.
   */
  community_pool?: string;
}
export interface DistributionProportionsAminoMsg {
  type: "osmosis/mint/distribution-proportions";
  value: DistributionProportionsAmino;
}
/**
 * DistributionProportions defines the distribution proportions of the minted
 * denom. In other words, defines which stakeholders will receive the minted
 * denoms and how much.
 */
export interface DistributionProportionsSDKType {
  staking: string;
  pool_incentives: string;
  developer_rewards: string;
  community_pool: string;
}
/** Params holds parameters for the x/mint module. */
export interface Params {
  /** mint_denom is the denom of the coin to mint. */
  mintDenom: string;
  /** genesis_epoch_provisions epoch provisions from the first epoch. */
  genesisEpochProvisions: string;
  /** epoch_identifier mint epoch identifier e.g. (day, week). */
  epochIdentifier: string;
  /**
   * reduction_period_in_epochs the number of epochs it takes
   * to reduce the rewards.
   */
  reductionPeriodInEpochs: bigint;
  /**
   * reduction_factor is the reduction multiplier to execute
   * at the end of each period set by reduction_period_in_epochs.
   */
  reductionFactor: string;
  /**
   * distribution_proportions defines the distribution proportions of the minted
   * denom. In other words, defines which stakeholders will receive the minted
   * denoms and how much.
   */
  distributionProportions: DistributionProportions;
  /**
   * weighted_developer_rewards_receivers is the address to receive developer
   * rewards with weights assignedt to each address. The final amount that each
   * address receives is: epoch_provisions *
   * distribution_proportions.developer_rewards * Address's Weight.
   */
  weightedDeveloperRewardsReceivers: WeightedAddress[];
  /**
   * minting_rewards_distribution_start_epoch start epoch to distribute minting
   * rewards
   */
  mintingRewardsDistributionStartEpoch: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/osmosis.mint.v1beta1.Params";
  value: Uint8Array;
}
/** Params holds parameters for the x/mint module. */
export interface ParamsAmino {
  /** mint_denom is the denom of the coin to mint. */
  mint_denom?: string;
  /** genesis_epoch_provisions epoch provisions from the first epoch. */
  genesis_epoch_provisions?: string;
  /** epoch_identifier mint epoch identifier e.g. (day, week). */
  epoch_identifier?: string;
  /**
   * reduction_period_in_epochs the number of epochs it takes
   * to reduce the rewards.
   */
  reduction_period_in_epochs?: string;
  /**
   * reduction_factor is the reduction multiplier to execute
   * at the end of each period set by reduction_period_in_epochs.
   */
  reduction_factor?: string;
  /**
   * distribution_proportions defines the distribution proportions of the minted
   * denom. In other words, defines which stakeholders will receive the minted
   * denoms and how much.
   */
  distribution_proportions?: DistributionProportionsAmino;
  /**
   * weighted_developer_rewards_receivers is the address to receive developer
   * rewards with weights assignedt to each address. The final amount that each
   * address receives is: epoch_provisions *
   * distribution_proportions.developer_rewards * Address's Weight.
   */
  weighted_developer_rewards_receivers?: WeightedAddressAmino[];
  /**
   * minting_rewards_distribution_start_epoch start epoch to distribute minting
   * rewards
   */
  minting_rewards_distribution_start_epoch?: string;
}
export interface ParamsAminoMsg {
  type: "osmosis/mint/params";
  value: ParamsAmino;
}
/** Params holds parameters for the x/mint module. */
export interface ParamsSDKType {
  mint_denom: string;
  genesis_epoch_provisions: string;
  epoch_identifier: string;
  reduction_period_in_epochs: bigint;
  reduction_factor: string;
  distribution_proportions: DistributionProportionsSDKType;
  weighted_developer_rewards_receivers: WeightedAddressSDKType[];
  minting_rewards_distribution_start_epoch: bigint;
}
function createBaseMinter(): Minter {
  return {
    epochProvisions: ""
  };
}
export const Minter = {
  typeUrl: "/osmosis.mint.v1beta1.Minter",
  aminoType: "osmosis/mint/minter",
  is(o: any): o is Minter {
    return o && (o.$typeUrl === Minter.typeUrl || typeof o.epochProvisions === "string");
  },
  isSDK(o: any): o is MinterSDKType {
    return o && (o.$typeUrl === Minter.typeUrl || typeof o.epoch_provisions === "string");
  },
  isAmino(o: any): o is MinterAmino {
    return o && (o.$typeUrl === Minter.typeUrl || typeof o.epoch_provisions === "string");
  },
  encode(message: Minter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochProvisions !== undefined) {
      writer.uint32(10).string(Decimal.fromUserInput(message.epochProvisions, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Minter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochProvisions = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Minter {
    const obj = createBaseMinter();
    if (isSet(object.epochProvisions)) obj.epochProvisions = String(object.epochProvisions);
    return obj;
  },
  toJSON(message: Minter): JsonSafe<Minter> {
    const obj: any = {};
    message.epochProvisions !== undefined && (obj.epochProvisions = message.epochProvisions);
    return obj;
  },
  fromPartial(object: DeepPartial<Minter>): Minter {
    const message = createBaseMinter();
    message.epochProvisions = object.epochProvisions ?? "";
    return message;
  },
  fromSDK(object: MinterSDKType): Minter {
    return {
      epochProvisions: object?.epoch_provisions
    };
  },
  toSDK(message: Minter): MinterSDKType {
    const obj: any = {};
    obj.epoch_provisions = message.epochProvisions;
    return obj;
  },
  fromAmino(object: MinterAmino): Minter {
    const message = createBaseMinter();
    if (object.epoch_provisions !== undefined && object.epoch_provisions !== null) {
      message.epochProvisions = object.epoch_provisions;
    }
    return message;
  },
  toAmino(message: Minter): MinterAmino {
    const obj: any = {};
    obj.epoch_provisions = message.epochProvisions === "" ? undefined : message.epochProvisions;
    return obj;
  },
  fromAminoMsg(object: MinterAminoMsg): Minter {
    return Minter.fromAmino(object.value);
  },
  toAminoMsg(message: Minter): MinterAminoMsg {
    return {
      type: "osmosis/mint/minter",
      value: Minter.toAmino(message)
    };
  },
  fromProtoMsg(message: MinterProtoMsg): Minter {
    return Minter.decode(message.value);
  },
  toProto(message: Minter): Uint8Array {
    return Minter.encode(message).finish();
  },
  toProtoMsg(message: Minter): MinterProtoMsg {
    return {
      typeUrl: "/osmosis.mint.v1beta1.Minter",
      value: Minter.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Minter.typeUrl, Minter);
GlobalDecoderRegistry.registerAminoProtoMapping(Minter.aminoType, Minter.typeUrl);
function createBaseWeightedAddress(): WeightedAddress {
  return {
    address: "",
    weight: ""
  };
}
export const WeightedAddress = {
  typeUrl: "/osmosis.mint.v1beta1.WeightedAddress",
  aminoType: "osmosis/mint/weighted-address",
  is(o: any): o is WeightedAddress {
    return o && (o.$typeUrl === WeightedAddress.typeUrl || typeof o.address === "string" && typeof o.weight === "string");
  },
  isSDK(o: any): o is WeightedAddressSDKType {
    return o && (o.$typeUrl === WeightedAddress.typeUrl || typeof o.address === "string" && typeof o.weight === "string");
  },
  isAmino(o: any): o is WeightedAddressAmino {
    return o && (o.$typeUrl === WeightedAddress.typeUrl || typeof o.address === "string" && typeof o.weight === "string");
  },
  encode(message: WeightedAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== undefined) {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== undefined) {
      writer.uint32(18).string(Decimal.fromUserInput(message.weight, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WeightedAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeightedAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.weight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WeightedAddress {
    const obj = createBaseWeightedAddress();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.weight)) obj.weight = String(object.weight);
    return obj;
  },
  toJSON(message: WeightedAddress): JsonSafe<WeightedAddress> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },
  fromPartial(object: DeepPartial<WeightedAddress>): WeightedAddress {
    const message = createBaseWeightedAddress();
    message.address = object.address ?? "";
    message.weight = object.weight ?? "";
    return message;
  },
  fromSDK(object: WeightedAddressSDKType): WeightedAddress {
    return {
      address: object?.address,
      weight: object?.weight
    };
  },
  toSDK(message: WeightedAddress): WeightedAddressSDKType {
    const obj: any = {};
    obj.address = message.address;
    obj.weight = message.weight;
    return obj;
  },
  fromAmino(object: WeightedAddressAmino): WeightedAddress {
    const message = createBaseWeightedAddress();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    }
    return message;
  },
  toAmino(message: WeightedAddress): WeightedAddressAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.weight = message.weight === "" ? undefined : message.weight;
    return obj;
  },
  fromAminoMsg(object: WeightedAddressAminoMsg): WeightedAddress {
    return WeightedAddress.fromAmino(object.value);
  },
  toAminoMsg(message: WeightedAddress): WeightedAddressAminoMsg {
    return {
      type: "osmosis/mint/weighted-address",
      value: WeightedAddress.toAmino(message)
    };
  },
  fromProtoMsg(message: WeightedAddressProtoMsg): WeightedAddress {
    return WeightedAddress.decode(message.value);
  },
  toProto(message: WeightedAddress): Uint8Array {
    return WeightedAddress.encode(message).finish();
  },
  toProtoMsg(message: WeightedAddress): WeightedAddressProtoMsg {
    return {
      typeUrl: "/osmosis.mint.v1beta1.WeightedAddress",
      value: WeightedAddress.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(WeightedAddress.typeUrl, WeightedAddress);
GlobalDecoderRegistry.registerAminoProtoMapping(WeightedAddress.aminoType, WeightedAddress.typeUrl);
function createBaseDistributionProportions(): DistributionProportions {
  return {
    staking: "",
    poolIncentives: "",
    developerRewards: "",
    communityPool: ""
  };
}
export const DistributionProportions = {
  typeUrl: "/osmosis.mint.v1beta1.DistributionProportions",
  aminoType: "osmosis/mint/distribution-proportions",
  is(o: any): o is DistributionProportions {
    return o && (o.$typeUrl === DistributionProportions.typeUrl || typeof o.staking === "string" && typeof o.poolIncentives === "string" && typeof o.developerRewards === "string" && typeof o.communityPool === "string");
  },
  isSDK(o: any): o is DistributionProportionsSDKType {
    return o && (o.$typeUrl === DistributionProportions.typeUrl || typeof o.staking === "string" && typeof o.pool_incentives === "string" && typeof o.developer_rewards === "string" && typeof o.community_pool === "string");
  },
  isAmino(o: any): o is DistributionProportionsAmino {
    return o && (o.$typeUrl === DistributionProportions.typeUrl || typeof o.staking === "string" && typeof o.pool_incentives === "string" && typeof o.developer_rewards === "string" && typeof o.community_pool === "string");
  },
  encode(message: DistributionProportions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.staking !== undefined) {
      writer.uint32(10).string(Decimal.fromUserInput(message.staking, 18).atomics);
    }
    if (message.poolIncentives !== undefined) {
      writer.uint32(18).string(Decimal.fromUserInput(message.poolIncentives, 18).atomics);
    }
    if (message.developerRewards !== undefined) {
      writer.uint32(26).string(Decimal.fromUserInput(message.developerRewards, 18).atomics);
    }
    if (message.communityPool !== undefined) {
      writer.uint32(34).string(Decimal.fromUserInput(message.communityPool, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DistributionProportions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistributionProportions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staking = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.poolIncentives = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.developerRewards = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.communityPool = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DistributionProportions {
    const obj = createBaseDistributionProportions();
    if (isSet(object.staking)) obj.staking = String(object.staking);
    if (isSet(object.poolIncentives)) obj.poolIncentives = String(object.poolIncentives);
    if (isSet(object.developerRewards)) obj.developerRewards = String(object.developerRewards);
    if (isSet(object.communityPool)) obj.communityPool = String(object.communityPool);
    return obj;
  },
  toJSON(message: DistributionProportions): JsonSafe<DistributionProportions> {
    const obj: any = {};
    message.staking !== undefined && (obj.staking = message.staking);
    message.poolIncentives !== undefined && (obj.poolIncentives = message.poolIncentives);
    message.developerRewards !== undefined && (obj.developerRewards = message.developerRewards);
    message.communityPool !== undefined && (obj.communityPool = message.communityPool);
    return obj;
  },
  fromPartial(object: DeepPartial<DistributionProportions>): DistributionProportions {
    const message = createBaseDistributionProportions();
    message.staking = object.staking ?? "";
    message.poolIncentives = object.poolIncentives ?? "";
    message.developerRewards = object.developerRewards ?? "";
    message.communityPool = object.communityPool ?? "";
    return message;
  },
  fromSDK(object: DistributionProportionsSDKType): DistributionProportions {
    return {
      staking: object?.staking,
      poolIncentives: object?.pool_incentives,
      developerRewards: object?.developer_rewards,
      communityPool: object?.community_pool
    };
  },
  toSDK(message: DistributionProportions): DistributionProportionsSDKType {
    const obj: any = {};
    obj.staking = message.staking;
    obj.pool_incentives = message.poolIncentives;
    obj.developer_rewards = message.developerRewards;
    obj.community_pool = message.communityPool;
    return obj;
  },
  fromAmino(object: DistributionProportionsAmino): DistributionProportions {
    const message = createBaseDistributionProportions();
    if (object.staking !== undefined && object.staking !== null) {
      message.staking = object.staking;
    }
    if (object.pool_incentives !== undefined && object.pool_incentives !== null) {
      message.poolIncentives = object.pool_incentives;
    }
    if (object.developer_rewards !== undefined && object.developer_rewards !== null) {
      message.developerRewards = object.developer_rewards;
    }
    if (object.community_pool !== undefined && object.community_pool !== null) {
      message.communityPool = object.community_pool;
    }
    return message;
  },
  toAmino(message: DistributionProportions): DistributionProportionsAmino {
    const obj: any = {};
    obj.staking = message.staking === "" ? undefined : message.staking;
    obj.pool_incentives = message.poolIncentives === "" ? undefined : message.poolIncentives;
    obj.developer_rewards = message.developerRewards === "" ? undefined : message.developerRewards;
    obj.community_pool = message.communityPool === "" ? undefined : message.communityPool;
    return obj;
  },
  fromAminoMsg(object: DistributionProportionsAminoMsg): DistributionProportions {
    return DistributionProportions.fromAmino(object.value);
  },
  toAminoMsg(message: DistributionProportions): DistributionProportionsAminoMsg {
    return {
      type: "osmosis/mint/distribution-proportions",
      value: DistributionProportions.toAmino(message)
    };
  },
  fromProtoMsg(message: DistributionProportionsProtoMsg): DistributionProportions {
    return DistributionProportions.decode(message.value);
  },
  toProto(message: DistributionProportions): Uint8Array {
    return DistributionProportions.encode(message).finish();
  },
  toProtoMsg(message: DistributionProportions): DistributionProportionsProtoMsg {
    return {
      typeUrl: "/osmosis.mint.v1beta1.DistributionProportions",
      value: DistributionProportions.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DistributionProportions.typeUrl, DistributionProportions);
GlobalDecoderRegistry.registerAminoProtoMapping(DistributionProportions.aminoType, DistributionProportions.typeUrl);
function createBaseParams(): Params {
  return {
    mintDenom: "",
    genesisEpochProvisions: "",
    epochIdentifier: "",
    reductionPeriodInEpochs: BigInt(0),
    reductionFactor: "",
    distributionProportions: DistributionProportions.fromPartial({}),
    weightedDeveloperRewardsReceivers: [],
    mintingRewardsDistributionStartEpoch: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/osmosis.mint.v1beta1.Params",
  aminoType: "osmosis/mint/params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.mintDenom === "string" && typeof o.genesisEpochProvisions === "string" && typeof o.epochIdentifier === "string" && typeof o.reductionPeriodInEpochs === "bigint" && typeof o.reductionFactor === "string" && DistributionProportions.is(o.distributionProportions) && Array.isArray(o.weightedDeveloperRewardsReceivers) && (!o.weightedDeveloperRewardsReceivers.length || WeightedAddress.is(o.weightedDeveloperRewardsReceivers[0])) && typeof o.mintingRewardsDistributionStartEpoch === "bigint");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.mint_denom === "string" && typeof o.genesis_epoch_provisions === "string" && typeof o.epoch_identifier === "string" && typeof o.reduction_period_in_epochs === "bigint" && typeof o.reduction_factor === "string" && DistributionProportions.isSDK(o.distribution_proportions) && Array.isArray(o.weighted_developer_rewards_receivers) && (!o.weighted_developer_rewards_receivers.length || WeightedAddress.isSDK(o.weighted_developer_rewards_receivers[0])) && typeof o.minting_rewards_distribution_start_epoch === "bigint");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.mint_denom === "string" && typeof o.genesis_epoch_provisions === "string" && typeof o.epoch_identifier === "string" && typeof o.reduction_period_in_epochs === "bigint" && typeof o.reduction_factor === "string" && DistributionProportions.isAmino(o.distribution_proportions) && Array.isArray(o.weighted_developer_rewards_receivers) && (!o.weighted_developer_rewards_receivers.length || WeightedAddress.isAmino(o.weighted_developer_rewards_receivers[0])) && typeof o.minting_rewards_distribution_start_epoch === "bigint");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mintDenom !== undefined) {
      writer.uint32(10).string(message.mintDenom);
    }
    if (message.genesisEpochProvisions !== undefined) {
      writer.uint32(18).string(Decimal.fromUserInput(message.genesisEpochProvisions, 18).atomics);
    }
    if (message.epochIdentifier !== undefined) {
      writer.uint32(26).string(message.epochIdentifier);
    }
    if (message.reductionPeriodInEpochs !== undefined) {
      writer.uint32(32).int64(message.reductionPeriodInEpochs);
    }
    if (message.reductionFactor !== undefined) {
      writer.uint32(42).string(Decimal.fromUserInput(message.reductionFactor, 18).atomics);
    }
    if (message.distributionProportions !== undefined) {
      DistributionProportions.encode(message.distributionProportions, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.weightedDeveloperRewardsReceivers) {
      WeightedAddress.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.mintingRewardsDistributionStartEpoch !== undefined) {
      writer.uint32(64).int64(message.mintingRewardsDistributionStartEpoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintDenom = reader.string();
          break;
        case 2:
          message.genesisEpochProvisions = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.epochIdentifier = reader.string();
          break;
        case 4:
          message.reductionPeriodInEpochs = reader.int64();
          break;
        case 5:
          message.reductionFactor = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.distributionProportions = DistributionProportions.decode(reader, reader.uint32());
          break;
        case 7:
          message.weightedDeveloperRewardsReceivers.push(WeightedAddress.decode(reader, reader.uint32()));
          break;
        case 8:
          message.mintingRewardsDistributionStartEpoch = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (isSet(object.mintDenom)) obj.mintDenom = String(object.mintDenom);
    if (isSet(object.genesisEpochProvisions)) obj.genesisEpochProvisions = String(object.genesisEpochProvisions);
    if (isSet(object.epochIdentifier)) obj.epochIdentifier = String(object.epochIdentifier);
    if (isSet(object.reductionPeriodInEpochs)) obj.reductionPeriodInEpochs = BigInt(object.reductionPeriodInEpochs.toString());
    if (isSet(object.reductionFactor)) obj.reductionFactor = String(object.reductionFactor);
    if (isSet(object.distributionProportions)) obj.distributionProportions = DistributionProportions.fromJSON(object.distributionProportions);
    if (Array.isArray(object?.weightedDeveloperRewardsReceivers)) obj.weightedDeveloperRewardsReceivers = object.weightedDeveloperRewardsReceivers.map((e: any) => WeightedAddress.fromJSON(e));
    if (isSet(object.mintingRewardsDistributionStartEpoch)) obj.mintingRewardsDistributionStartEpoch = BigInt(object.mintingRewardsDistributionStartEpoch.toString());
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.mintDenom !== undefined && (obj.mintDenom = message.mintDenom);
    message.genesisEpochProvisions !== undefined && (obj.genesisEpochProvisions = message.genesisEpochProvisions);
    message.epochIdentifier !== undefined && (obj.epochIdentifier = message.epochIdentifier);
    message.reductionPeriodInEpochs !== undefined && (obj.reductionPeriodInEpochs = (message.reductionPeriodInEpochs || BigInt(0)).toString());
    message.reductionFactor !== undefined && (obj.reductionFactor = message.reductionFactor);
    message.distributionProportions !== undefined && (obj.distributionProportions = message.distributionProportions ? DistributionProportions.toJSON(message.distributionProportions) : undefined);
    if (message.weightedDeveloperRewardsReceivers) {
      obj.weightedDeveloperRewardsReceivers = message.weightedDeveloperRewardsReceivers.map(e => e ? WeightedAddress.toJSON(e) : undefined);
    } else {
      obj.weightedDeveloperRewardsReceivers = [];
    }
    message.mintingRewardsDistributionStartEpoch !== undefined && (obj.mintingRewardsDistributionStartEpoch = (message.mintingRewardsDistributionStartEpoch || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.mintDenom = object.mintDenom ?? "";
    message.genesisEpochProvisions = object.genesisEpochProvisions ?? "";
    message.epochIdentifier = object.epochIdentifier ?? "";
    if (object.reductionPeriodInEpochs !== undefined && object.reductionPeriodInEpochs !== null) {
      message.reductionPeriodInEpochs = BigInt(object.reductionPeriodInEpochs.toString());
    }
    message.reductionFactor = object.reductionFactor ?? "";
    if (object.distributionProportions !== undefined && object.distributionProportions !== null) {
      message.distributionProportions = DistributionProportions.fromPartial(object.distributionProportions);
    }
    message.weightedDeveloperRewardsReceivers = object.weightedDeveloperRewardsReceivers?.map(e => WeightedAddress.fromPartial(e)) || [];
    if (object.mintingRewardsDistributionStartEpoch !== undefined && object.mintingRewardsDistributionStartEpoch !== null) {
      message.mintingRewardsDistributionStartEpoch = BigInt(object.mintingRewardsDistributionStartEpoch.toString());
    }
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      mintDenom: object?.mint_denom,
      genesisEpochProvisions: object?.genesis_epoch_provisions,
      epochIdentifier: object?.epoch_identifier,
      reductionPeriodInEpochs: object?.reduction_period_in_epochs,
      reductionFactor: object?.reduction_factor,
      distributionProportions: object.distribution_proportions ? DistributionProportions.fromSDK(object.distribution_proportions) : undefined,
      weightedDeveloperRewardsReceivers: Array.isArray(object?.weighted_developer_rewards_receivers) ? object.weighted_developer_rewards_receivers.map((e: any) => WeightedAddress.fromSDK(e)) : [],
      mintingRewardsDistributionStartEpoch: object?.minting_rewards_distribution_start_epoch
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.mint_denom = message.mintDenom;
    obj.genesis_epoch_provisions = message.genesisEpochProvisions;
    obj.epoch_identifier = message.epochIdentifier;
    obj.reduction_period_in_epochs = message.reductionPeriodInEpochs;
    obj.reduction_factor = message.reductionFactor;
    message.distributionProportions !== undefined && (obj.distribution_proportions = message.distributionProportions ? DistributionProportions.toSDK(message.distributionProportions) : undefined);
    if (message.weightedDeveloperRewardsReceivers) {
      obj.weighted_developer_rewards_receivers = message.weightedDeveloperRewardsReceivers.map(e => e ? WeightedAddress.toSDK(e) : undefined);
    } else {
      obj.weighted_developer_rewards_receivers = [];
    }
    obj.minting_rewards_distribution_start_epoch = message.mintingRewardsDistributionStartEpoch;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.mint_denom !== undefined && object.mint_denom !== null) {
      message.mintDenom = object.mint_denom;
    }
    if (object.genesis_epoch_provisions !== undefined && object.genesis_epoch_provisions !== null) {
      message.genesisEpochProvisions = object.genesis_epoch_provisions;
    }
    if (object.epoch_identifier !== undefined && object.epoch_identifier !== null) {
      message.epochIdentifier = object.epoch_identifier;
    }
    if (object.reduction_period_in_epochs !== undefined && object.reduction_period_in_epochs !== null) {
      message.reductionPeriodInEpochs = BigInt(object.reduction_period_in_epochs);
    }
    if (object.reduction_factor !== undefined && object.reduction_factor !== null) {
      message.reductionFactor = object.reduction_factor;
    }
    if (object.distribution_proportions !== undefined && object.distribution_proportions !== null) {
      message.distributionProportions = DistributionProportions.fromAmino(object.distribution_proportions);
    }
    message.weightedDeveloperRewardsReceivers = object.weighted_developer_rewards_receivers?.map(e => WeightedAddress.fromAmino(e)) || [];
    if (object.minting_rewards_distribution_start_epoch !== undefined && object.minting_rewards_distribution_start_epoch !== null) {
      message.mintingRewardsDistributionStartEpoch = BigInt(object.minting_rewards_distribution_start_epoch);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.mint_denom = message.mintDenom === "" ? undefined : message.mintDenom;
    obj.genesis_epoch_provisions = message.genesisEpochProvisions === "" ? undefined : message.genesisEpochProvisions;
    obj.epoch_identifier = message.epochIdentifier === "" ? undefined : message.epochIdentifier;
    obj.reduction_period_in_epochs = message.reductionPeriodInEpochs !== BigInt(0) ? message.reductionPeriodInEpochs.toString() : undefined;
    obj.reduction_factor = message.reductionFactor === "" ? undefined : message.reductionFactor;
    obj.distribution_proportions = message.distributionProportions ? DistributionProportions.toAmino(message.distributionProportions) : undefined;
    if (message.weightedDeveloperRewardsReceivers) {
      obj.weighted_developer_rewards_receivers = message.weightedDeveloperRewardsReceivers.map(e => e ? WeightedAddress.toAmino(e) : undefined);
    } else {
      obj.weighted_developer_rewards_receivers = message.weightedDeveloperRewardsReceivers;
    }
    obj.minting_rewards_distribution_start_epoch = message.mintingRewardsDistributionStartEpoch !== BigInt(0) ? message.mintingRewardsDistributionStartEpoch.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "osmosis/mint/params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/osmosis.mint.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
GlobalDecoderRegistry.registerAminoProtoMapping(Params.aminoType, Params.typeUrl);