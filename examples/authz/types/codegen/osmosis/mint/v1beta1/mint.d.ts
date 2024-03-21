import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
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
    distributionProportions: DistributionProportions | undefined;
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
    distribution_proportions?: DistributionProportionsAmino | undefined;
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
    distribution_proportions: DistributionProportionsSDKType | undefined;
    weighted_developer_rewards_receivers: WeightedAddressSDKType[];
    minting_rewards_distribution_start_epoch: bigint;
}
export declare const Minter: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Minter;
    isSDK(o: any): o is MinterSDKType;
    isAmino(o: any): o is MinterAmino;
    encode(message: Minter, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Minter;
    fromJSON(object: any): Minter;
    toJSON(message: Minter): unknown;
    fromPartial(object: DeepPartial<Minter>): Minter;
    fromSDK(object: MinterSDKType): Minter;
    toSDK(message: Minter): MinterSDKType;
    fromAmino(object: MinterAmino): Minter;
    toAmino(message: Minter): MinterAmino;
    fromAminoMsg(object: MinterAminoMsg): Minter;
    toAminoMsg(message: Minter): MinterAminoMsg;
    fromProtoMsg(message: MinterProtoMsg): Minter;
    toProto(message: Minter): Uint8Array;
    toProtoMsg(message: Minter): MinterProtoMsg;
};
export declare const WeightedAddress: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is WeightedAddress;
    isSDK(o: any): o is WeightedAddressSDKType;
    isAmino(o: any): o is WeightedAddressAmino;
    encode(message: WeightedAddress, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): WeightedAddress;
    fromJSON(object: any): WeightedAddress;
    toJSON(message: WeightedAddress): unknown;
    fromPartial(object: DeepPartial<WeightedAddress>): WeightedAddress;
    fromSDK(object: WeightedAddressSDKType): WeightedAddress;
    toSDK(message: WeightedAddress): WeightedAddressSDKType;
    fromAmino(object: WeightedAddressAmino): WeightedAddress;
    toAmino(message: WeightedAddress): WeightedAddressAmino;
    fromAminoMsg(object: WeightedAddressAminoMsg): WeightedAddress;
    toAminoMsg(message: WeightedAddress): WeightedAddressAminoMsg;
    fromProtoMsg(message: WeightedAddressProtoMsg): WeightedAddress;
    toProto(message: WeightedAddress): Uint8Array;
    toProtoMsg(message: WeightedAddress): WeightedAddressProtoMsg;
};
export declare const DistributionProportions: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is DistributionProportions;
    isSDK(o: any): o is DistributionProportionsSDKType;
    isAmino(o: any): o is DistributionProportionsAmino;
    encode(message: DistributionProportions, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DistributionProportions;
    fromJSON(object: any): DistributionProportions;
    toJSON(message: DistributionProportions): unknown;
    fromPartial(object: DeepPartial<DistributionProportions>): DistributionProportions;
    fromSDK(object: DistributionProportionsSDKType): DistributionProportions;
    toSDK(message: DistributionProportions): DistributionProportionsSDKType;
    fromAmino(object: DistributionProportionsAmino): DistributionProportions;
    toAmino(message: DistributionProportions): DistributionProportionsAmino;
    fromAminoMsg(object: DistributionProportionsAminoMsg): DistributionProportions;
    toAminoMsg(message: DistributionProportions): DistributionProportionsAminoMsg;
    fromProtoMsg(message: DistributionProportionsProtoMsg): DistributionProportions;
    toProto(message: DistributionProportions): Uint8Array;
    toProtoMsg(message: DistributionProportions): DistributionProportionsProtoMsg;
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
