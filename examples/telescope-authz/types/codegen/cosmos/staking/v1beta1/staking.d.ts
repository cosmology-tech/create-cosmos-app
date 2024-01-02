import { Header, HeaderAmino, HeaderSDKType } from "../../../tendermint/types/types";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** BondStatus is the status of a validator. */
export declare enum BondStatus {
    /** BOND_STATUS_UNSPECIFIED - UNSPECIFIED defines an invalid validator status. */
    BOND_STATUS_UNSPECIFIED = 0,
    /** BOND_STATUS_UNBONDED - UNBONDED defines a validator that is not bonded. */
    BOND_STATUS_UNBONDED = 1,
    /** BOND_STATUS_UNBONDING - UNBONDING defines a validator that is unbonding. */
    BOND_STATUS_UNBONDING = 2,
    /** BOND_STATUS_BONDED - BONDED defines a validator that is bonded. */
    BOND_STATUS_BONDED = 3,
    UNRECOGNIZED = -1
}
export declare const BondStatusSDKType: typeof BondStatus;
export declare const BondStatusAmino: typeof BondStatus;
export declare function bondStatusFromJSON(object: any): BondStatus;
export declare function bondStatusToJSON(object: BondStatus): string;
/**
 * HistoricalInfo contains header and validator information for a given block.
 * It is stored as part of staking module's state, which persists the `n` most
 * recent HistoricalInfo
 * (`n` is set by the staking module's `historical_entries` parameter).
 */
export interface HistoricalInfo {
    header: Header | undefined;
    valset: Validator[];
}
export interface HistoricalInfoProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.HistoricalInfo";
    value: Uint8Array;
}
/**
 * HistoricalInfo contains header and validator information for a given block.
 * It is stored as part of staking module's state, which persists the `n` most
 * recent HistoricalInfo
 * (`n` is set by the staking module's `historical_entries` parameter).
 */
export interface HistoricalInfoAmino {
    header?: HeaderAmino | undefined;
    valset?: ValidatorAmino[];
}
export interface HistoricalInfoAminoMsg {
    type: "cosmos-sdk/HistoricalInfo";
    value: HistoricalInfoAmino;
}
/**
 * HistoricalInfo contains header and validator information for a given block.
 * It is stored as part of staking module's state, which persists the `n` most
 * recent HistoricalInfo
 * (`n` is set by the staking module's `historical_entries` parameter).
 */
export interface HistoricalInfoSDKType {
    header: HeaderSDKType | undefined;
    valset: ValidatorSDKType[];
}
/**
 * CommissionRates defines the initial commission rates to be used for creating
 * a validator.
 */
export interface CommissionRates {
    /** rate is the commission rate charged to delegators, as a fraction. */
    rate: string;
    /** max_rate defines the maximum commission rate which validator can ever charge, as a fraction. */
    maxRate: string;
    /** max_change_rate defines the maximum daily increase of the validator commission, as a fraction. */
    maxChangeRate: string;
}
export interface CommissionRatesProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.CommissionRates";
    value: Uint8Array;
}
/**
 * CommissionRates defines the initial commission rates to be used for creating
 * a validator.
 */
export interface CommissionRatesAmino {
    /** rate is the commission rate charged to delegators, as a fraction. */
    rate?: string;
    /** max_rate defines the maximum commission rate which validator can ever charge, as a fraction. */
    max_rate?: string;
    /** max_change_rate defines the maximum daily increase of the validator commission, as a fraction. */
    max_change_rate?: string;
}
export interface CommissionRatesAminoMsg {
    type: "cosmos-sdk/CommissionRates";
    value: CommissionRatesAmino;
}
/**
 * CommissionRates defines the initial commission rates to be used for creating
 * a validator.
 */
export interface CommissionRatesSDKType {
    rate: string;
    max_rate: string;
    max_change_rate: string;
}
/** Commission defines commission parameters for a given validator. */
export interface Commission {
    /** commission_rates defines the initial commission rates to be used for creating a validator. */
    commissionRates: CommissionRates | undefined;
    /** update_time is the last time the commission rate was changed. */
    updateTime: Date | undefined;
}
export interface CommissionProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.Commission";
    value: Uint8Array;
}
/** Commission defines commission parameters for a given validator. */
export interface CommissionAmino {
    /** commission_rates defines the initial commission rates to be used for creating a validator. */
    commission_rates?: CommissionRatesAmino | undefined;
    /** update_time is the last time the commission rate was changed. */
    update_time?: string | undefined;
}
export interface CommissionAminoMsg {
    type: "cosmos-sdk/Commission";
    value: CommissionAmino;
}
/** Commission defines commission parameters for a given validator. */
export interface CommissionSDKType {
    commission_rates: CommissionRatesSDKType | undefined;
    update_time: Date | undefined;
}
/** Description defines a validator description. */
export interface Description {
    /** moniker defines a human-readable name for the validator. */
    moniker: string;
    /** identity defines an optional identity signature (ex. UPort or Keybase). */
    identity: string;
    /** website defines an optional website link. */
    website: string;
    /** security_contact defines an optional email for security contact. */
    securityContact: string;
    /** details define other optional details. */
    details: string;
}
export interface DescriptionProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.Description";
    value: Uint8Array;
}
/** Description defines a validator description. */
export interface DescriptionAmino {
    /** moniker defines a human-readable name for the validator. */
    moniker?: string;
    /** identity defines an optional identity signature (ex. UPort or Keybase). */
    identity?: string;
    /** website defines an optional website link. */
    website?: string;
    /** security_contact defines an optional email for security contact. */
    security_contact?: string;
    /** details define other optional details. */
    details?: string;
}
export interface DescriptionAminoMsg {
    type: "cosmos-sdk/Description";
    value: DescriptionAmino;
}
/** Description defines a validator description. */
export interface DescriptionSDKType {
    moniker: string;
    identity: string;
    website: string;
    security_contact: string;
    details: string;
}
/**
 * Validator defines a validator, together with the total amount of the
 * Validator's bond shares and their exchange rate to coins. Slashing results in
 * a decrease in the exchange rate, allowing correct calculation of future
 * undelegations without iterating over delegators. When coins are delegated to
 * this validator, the validator is credited with a delegation whose number of
 * bond shares is based on the amount of coins delegated divided by the current
 * exchange rate. Voting power can be calculated as total bonded shares
 * multiplied by exchange rate.
 */
export interface Validator {
    /** operator_address defines the address of the validator's operator; bech encoded in JSON. */
    operatorAddress: string;
    /** consensus_pubkey is the consensus public key of the validator, as a Protobuf Any. */
    consensusPubkey?: Any | undefined;
    /** jailed defined whether the validator has been jailed from bonded status or not. */
    jailed: boolean;
    /** status is the validator status (bonded/unbonding/unbonded). */
    status: BondStatus;
    /** tokens define the delegated tokens (incl. self-delegation). */
    tokens: string;
    /** delegator_shares defines total shares issued to a validator's delegators. */
    delegatorShares: string;
    /** description defines the description terms for the validator. */
    description: Description | undefined;
    /** unbonding_height defines, if unbonding, the height at which this validator has begun unbonding. */
    unbondingHeight: bigint;
    /** unbonding_time defines, if unbonding, the min time for the validator to complete unbonding. */
    unbondingTime: Date | undefined;
    /** commission defines the commission parameters. */
    commission: Commission | undefined;
    /** min_self_delegation is the validator's self declared minimum self delegation. */
    minSelfDelegation: string;
}
export interface ValidatorProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.Validator";
    value: Uint8Array;
}
export type ValidatorEncoded = Omit<Validator, "consensusPubkey"> & {
    /** consensus_pubkey is the consensus public key of the validator, as a Protobuf Any. */ consensusPubkey?: AnyProtoMsg | undefined;
};
/**
 * Validator defines a validator, together with the total amount of the
 * Validator's bond shares and their exchange rate to coins. Slashing results in
 * a decrease in the exchange rate, allowing correct calculation of future
 * undelegations without iterating over delegators. When coins are delegated to
 * this validator, the validator is credited with a delegation whose number of
 * bond shares is based on the amount of coins delegated divided by the current
 * exchange rate. Voting power can be calculated as total bonded shares
 * multiplied by exchange rate.
 */
export interface ValidatorAmino {
    /** operator_address defines the address of the validator's operator; bech encoded in JSON. */
    operator_address?: string;
    /** consensus_pubkey is the consensus public key of the validator, as a Protobuf Any. */
    consensus_pubkey?: AnyAmino | undefined;
    /** jailed defined whether the validator has been jailed from bonded status or not. */
    jailed?: boolean;
    /** status is the validator status (bonded/unbonding/unbonded). */
    status?: BondStatus;
    /** tokens define the delegated tokens (incl. self-delegation). */
    tokens?: string;
    /** delegator_shares defines total shares issued to a validator's delegators. */
    delegator_shares?: string;
    /** description defines the description terms for the validator. */
    description?: DescriptionAmino | undefined;
    /** unbonding_height defines, if unbonding, the height at which this validator has begun unbonding. */
    unbonding_height?: string;
    /** unbonding_time defines, if unbonding, the min time for the validator to complete unbonding. */
    unbonding_time?: string | undefined;
    /** commission defines the commission parameters. */
    commission?: CommissionAmino | undefined;
    /** min_self_delegation is the validator's self declared minimum self delegation. */
    min_self_delegation?: string;
}
export interface ValidatorAminoMsg {
    type: "cosmos-sdk/Validator";
    value: ValidatorAmino;
}
/**
 * Validator defines a validator, together with the total amount of the
 * Validator's bond shares and their exchange rate to coins. Slashing results in
 * a decrease in the exchange rate, allowing correct calculation of future
 * undelegations without iterating over delegators. When coins are delegated to
 * this validator, the validator is credited with a delegation whose number of
 * bond shares is based on the amount of coins delegated divided by the current
 * exchange rate. Voting power can be calculated as total bonded shares
 * multiplied by exchange rate.
 */
export interface ValidatorSDKType {
    operator_address: string;
    consensus_pubkey?: AnySDKType | undefined;
    jailed: boolean;
    status: BondStatus;
    tokens: string;
    delegator_shares: string;
    description: DescriptionSDKType | undefined;
    unbonding_height: bigint;
    unbonding_time: Date | undefined;
    commission: CommissionSDKType | undefined;
    min_self_delegation: string;
}
/** ValAddresses defines a repeated set of validator addresses. */
export interface ValAddresses {
    addresses: string[];
}
export interface ValAddressesProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.ValAddresses";
    value: Uint8Array;
}
/** ValAddresses defines a repeated set of validator addresses. */
export interface ValAddressesAmino {
    addresses?: string[];
}
export interface ValAddressesAminoMsg {
    type: "cosmos-sdk/ValAddresses";
    value: ValAddressesAmino;
}
/** ValAddresses defines a repeated set of validator addresses. */
export interface ValAddressesSDKType {
    addresses: string[];
}
/**
 * DVPair is struct that just has a delegator-validator pair with no other data.
 * It is intended to be used as a marshalable pointer. For example, a DVPair can
 * be used to construct the key to getting an UnbondingDelegation from state.
 */
export interface DVPair {
    delegatorAddress: string;
    validatorAddress: string;
}
export interface DVPairProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.DVPair";
    value: Uint8Array;
}
/**
 * DVPair is struct that just has a delegator-validator pair with no other data.
 * It is intended to be used as a marshalable pointer. For example, a DVPair can
 * be used to construct the key to getting an UnbondingDelegation from state.
 */
export interface DVPairAmino {
    delegator_address?: string;
    validator_address?: string;
}
export interface DVPairAminoMsg {
    type: "cosmos-sdk/DVPair";
    value: DVPairAmino;
}
/**
 * DVPair is struct that just has a delegator-validator pair with no other data.
 * It is intended to be used as a marshalable pointer. For example, a DVPair can
 * be used to construct the key to getting an UnbondingDelegation from state.
 */
export interface DVPairSDKType {
    delegator_address: string;
    validator_address: string;
}
/** DVPairs defines an array of DVPair objects. */
export interface DVPairs {
    pairs: DVPair[];
}
export interface DVPairsProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.DVPairs";
    value: Uint8Array;
}
/** DVPairs defines an array of DVPair objects. */
export interface DVPairsAmino {
    pairs?: DVPairAmino[];
}
export interface DVPairsAminoMsg {
    type: "cosmos-sdk/DVPairs";
    value: DVPairsAmino;
}
/** DVPairs defines an array of DVPair objects. */
export interface DVPairsSDKType {
    pairs: DVPairSDKType[];
}
/**
 * DVVTriplet is struct that just has a delegator-validator-validator triplet
 * with no other data. It is intended to be used as a marshalable pointer. For
 * example, a DVVTriplet can be used to construct the key to getting a
 * Redelegation from state.
 */
export interface DVVTriplet {
    delegatorAddress: string;
    validatorSrcAddress: string;
    validatorDstAddress: string;
}
export interface DVVTripletProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.DVVTriplet";
    value: Uint8Array;
}
/**
 * DVVTriplet is struct that just has a delegator-validator-validator triplet
 * with no other data. It is intended to be used as a marshalable pointer. For
 * example, a DVVTriplet can be used to construct the key to getting a
 * Redelegation from state.
 */
export interface DVVTripletAmino {
    delegator_address?: string;
    validator_src_address?: string;
    validator_dst_address?: string;
}
export interface DVVTripletAminoMsg {
    type: "cosmos-sdk/DVVTriplet";
    value: DVVTripletAmino;
}
/**
 * DVVTriplet is struct that just has a delegator-validator-validator triplet
 * with no other data. It is intended to be used as a marshalable pointer. For
 * example, a DVVTriplet can be used to construct the key to getting a
 * Redelegation from state.
 */
export interface DVVTripletSDKType {
    delegator_address: string;
    validator_src_address: string;
    validator_dst_address: string;
}
/** DVVTriplets defines an array of DVVTriplet objects. */
export interface DVVTriplets {
    triplets: DVVTriplet[];
}
export interface DVVTripletsProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.DVVTriplets";
    value: Uint8Array;
}
/** DVVTriplets defines an array of DVVTriplet objects. */
export interface DVVTripletsAmino {
    triplets?: DVVTripletAmino[];
}
export interface DVVTripletsAminoMsg {
    type: "cosmos-sdk/DVVTriplets";
    value: DVVTripletsAmino;
}
/** DVVTriplets defines an array of DVVTriplet objects. */
export interface DVVTripletsSDKType {
    triplets: DVVTripletSDKType[];
}
/**
 * Delegation represents the bond with tokens held by an account. It is
 * owned by one delegator, and is associated with the voting power of one
 * validator.
 */
export interface Delegation {
    /** delegator_address is the bech32-encoded address of the delegator. */
    delegatorAddress: string;
    /** validator_address is the bech32-encoded address of the validator. */
    validatorAddress: string;
    /** shares define the delegation shares received. */
    shares: string;
}
export interface DelegationProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.Delegation";
    value: Uint8Array;
}
/**
 * Delegation represents the bond with tokens held by an account. It is
 * owned by one delegator, and is associated with the voting power of one
 * validator.
 */
export interface DelegationAmino {
    /** delegator_address is the bech32-encoded address of the delegator. */
    delegator_address?: string;
    /** validator_address is the bech32-encoded address of the validator. */
    validator_address?: string;
    /** shares define the delegation shares received. */
    shares?: string;
}
export interface DelegationAminoMsg {
    type: "cosmos-sdk/Delegation";
    value: DelegationAmino;
}
/**
 * Delegation represents the bond with tokens held by an account. It is
 * owned by one delegator, and is associated with the voting power of one
 * validator.
 */
export interface DelegationSDKType {
    delegator_address: string;
    validator_address: string;
    shares: string;
}
/**
 * UnbondingDelegation stores all of a single delegator's unbonding bonds
 * for a single validator in an time-ordered list.
 */
export interface UnbondingDelegation {
    /** delegator_address is the bech32-encoded address of the delegator. */
    delegatorAddress: string;
    /** validator_address is the bech32-encoded address of the validator. */
    validatorAddress: string;
    /** entries are the unbonding delegation entries. */
    entries: UnbondingDelegationEntry[];
}
export interface UnbondingDelegationProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegation";
    value: Uint8Array;
}
/**
 * UnbondingDelegation stores all of a single delegator's unbonding bonds
 * for a single validator in an time-ordered list.
 */
export interface UnbondingDelegationAmino {
    /** delegator_address is the bech32-encoded address of the delegator. */
    delegator_address?: string;
    /** validator_address is the bech32-encoded address of the validator. */
    validator_address?: string;
    /** entries are the unbonding delegation entries. */
    entries?: UnbondingDelegationEntryAmino[];
}
export interface UnbondingDelegationAminoMsg {
    type: "cosmos-sdk/UnbondingDelegation";
    value: UnbondingDelegationAmino;
}
/**
 * UnbondingDelegation stores all of a single delegator's unbonding bonds
 * for a single validator in an time-ordered list.
 */
export interface UnbondingDelegationSDKType {
    delegator_address: string;
    validator_address: string;
    entries: UnbondingDelegationEntrySDKType[];
}
/** UnbondingDelegationEntry defines an unbonding object with relevant metadata. */
export interface UnbondingDelegationEntry {
    /** creation_height is the height which the unbonding took place. */
    creationHeight: bigint;
    /** completion_time is the unix time for unbonding completion. */
    completionTime: Date | undefined;
    /** initial_balance defines the tokens initially scheduled to receive at completion. */
    initialBalance: string;
    /** balance defines the tokens to receive at completion. */
    balance: string;
}
export interface UnbondingDelegationEntryProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegationEntry";
    value: Uint8Array;
}
/** UnbondingDelegationEntry defines an unbonding object with relevant metadata. */
export interface UnbondingDelegationEntryAmino {
    /** creation_height is the height which the unbonding took place. */
    creation_height?: string;
    /** completion_time is the unix time for unbonding completion. */
    completion_time?: string | undefined;
    /** initial_balance defines the tokens initially scheduled to receive at completion. */
    initial_balance?: string;
    /** balance defines the tokens to receive at completion. */
    balance?: string;
}
export interface UnbondingDelegationEntryAminoMsg {
    type: "cosmos-sdk/UnbondingDelegationEntry";
    value: UnbondingDelegationEntryAmino;
}
/** UnbondingDelegationEntry defines an unbonding object with relevant metadata. */
export interface UnbondingDelegationEntrySDKType {
    creation_height: bigint;
    completion_time: Date | undefined;
    initial_balance: string;
    balance: string;
}
/** RedelegationEntry defines a redelegation object with relevant metadata. */
export interface RedelegationEntry {
    /** creation_height  defines the height which the redelegation took place. */
    creationHeight: bigint;
    /** completion_time defines the unix time for redelegation completion. */
    completionTime: Date | undefined;
    /** initial_balance defines the initial balance when redelegation started. */
    initialBalance: string;
    /** shares_dst is the amount of destination-validator shares created by redelegation. */
    sharesDst: string;
}
export interface RedelegationEntryProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.RedelegationEntry";
    value: Uint8Array;
}
/** RedelegationEntry defines a redelegation object with relevant metadata. */
export interface RedelegationEntryAmino {
    /** creation_height  defines the height which the redelegation took place. */
    creation_height?: string;
    /** completion_time defines the unix time for redelegation completion. */
    completion_time?: string | undefined;
    /** initial_balance defines the initial balance when redelegation started. */
    initial_balance?: string;
    /** shares_dst is the amount of destination-validator shares created by redelegation. */
    shares_dst?: string;
}
export interface RedelegationEntryAminoMsg {
    type: "cosmos-sdk/RedelegationEntry";
    value: RedelegationEntryAmino;
}
/** RedelegationEntry defines a redelegation object with relevant metadata. */
export interface RedelegationEntrySDKType {
    creation_height: bigint;
    completion_time: Date | undefined;
    initial_balance: string;
    shares_dst: string;
}
/**
 * Redelegation contains the list of a particular delegator's redelegating bonds
 * from a particular source validator to a particular destination validator.
 */
export interface Redelegation {
    /** delegator_address is the bech32-encoded address of the delegator. */
    delegatorAddress: string;
    /** validator_src_address is the validator redelegation source operator address. */
    validatorSrcAddress: string;
    /** validator_dst_address is the validator redelegation destination operator address. */
    validatorDstAddress: string;
    /** entries are the redelegation entries. */
    entries: RedelegationEntry[];
}
export interface RedelegationProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.Redelegation";
    value: Uint8Array;
}
/**
 * Redelegation contains the list of a particular delegator's redelegating bonds
 * from a particular source validator to a particular destination validator.
 */
export interface RedelegationAmino {
    /** delegator_address is the bech32-encoded address of the delegator. */
    delegator_address?: string;
    /** validator_src_address is the validator redelegation source operator address. */
    validator_src_address?: string;
    /** validator_dst_address is the validator redelegation destination operator address. */
    validator_dst_address?: string;
    /** entries are the redelegation entries. */
    entries?: RedelegationEntryAmino[];
}
export interface RedelegationAminoMsg {
    type: "cosmos-sdk/Redelegation";
    value: RedelegationAmino;
}
/**
 * Redelegation contains the list of a particular delegator's redelegating bonds
 * from a particular source validator to a particular destination validator.
 */
export interface RedelegationSDKType {
    delegator_address: string;
    validator_src_address: string;
    validator_dst_address: string;
    entries: RedelegationEntrySDKType[];
}
/** Params defines the parameters for the staking module. */
export interface Params {
    /** unbonding_time is the time duration of unbonding. */
    unbondingTime: Duration | undefined;
    /** max_validators is the maximum number of validators. */
    maxValidators: number;
    /** max_entries is the max entries for either unbonding delegation or redelegation (per pair/trio). */
    maxEntries: number;
    /** historical_entries is the number of historical entries to persist. */
    historicalEntries: number;
    /** bond_denom defines the bondable coin denomination. */
    bondDenom: string;
    /** min_commission_rate is the chain-wide minimum commission rate that a validator can charge their delegators */
    minCommissionRate: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the staking module. */
export interface ParamsAmino {
    /** unbonding_time is the time duration of unbonding. */
    unbonding_time?: DurationAmino | undefined;
    /** max_validators is the maximum number of validators. */
    max_validators?: number;
    /** max_entries is the max entries for either unbonding delegation or redelegation (per pair/trio). */
    max_entries?: number;
    /** historical_entries is the number of historical entries to persist. */
    historical_entries?: number;
    /** bond_denom defines the bondable coin denomination. */
    bond_denom?: string;
    /** min_commission_rate is the chain-wide minimum commission rate that a validator can charge their delegators */
    min_commission_rate?: string;
}
export interface ParamsAminoMsg {
    type: "cosmos-sdk/Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the staking module. */
export interface ParamsSDKType {
    unbonding_time: DurationSDKType | undefined;
    max_validators: number;
    max_entries: number;
    historical_entries: number;
    bond_denom: string;
    min_commission_rate: string;
}
/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */
export interface DelegationResponse {
    delegation: Delegation | undefined;
    balance: Coin | undefined;
}
export interface DelegationResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.DelegationResponse";
    value: Uint8Array;
}
/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */
export interface DelegationResponseAmino {
    delegation?: DelegationAmino | undefined;
    balance?: CoinAmino | undefined;
}
export interface DelegationResponseAminoMsg {
    type: "cosmos-sdk/DelegationResponse";
    value: DelegationResponseAmino;
}
/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */
export interface DelegationResponseSDKType {
    delegation: DelegationSDKType | undefined;
    balance: CoinSDKType | undefined;
}
/**
 * RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
 * contains a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationEntryResponse {
    redelegationEntry: RedelegationEntry | undefined;
    balance: string;
}
export interface RedelegationEntryResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.RedelegationEntryResponse";
    value: Uint8Array;
}
/**
 * RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
 * contains a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationEntryResponseAmino {
    redelegation_entry?: RedelegationEntryAmino | undefined;
    balance?: string;
}
export interface RedelegationEntryResponseAminoMsg {
    type: "cosmos-sdk/RedelegationEntryResponse";
    value: RedelegationEntryResponseAmino;
}
/**
 * RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
 * contains a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationEntryResponseSDKType {
    redelegation_entry: RedelegationEntrySDKType | undefined;
    balance: string;
}
/**
 * RedelegationResponse is equivalent to a Redelegation except that its entries
 * contain a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationResponse {
    redelegation: Redelegation | undefined;
    entries: RedelegationEntryResponse[];
}
export interface RedelegationResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.RedelegationResponse";
    value: Uint8Array;
}
/**
 * RedelegationResponse is equivalent to a Redelegation except that its entries
 * contain a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationResponseAmino {
    redelegation?: RedelegationAmino | undefined;
    entries?: RedelegationEntryResponseAmino[];
}
export interface RedelegationResponseAminoMsg {
    type: "cosmos-sdk/RedelegationResponse";
    value: RedelegationResponseAmino;
}
/**
 * RedelegationResponse is equivalent to a Redelegation except that its entries
 * contain a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationResponseSDKType {
    redelegation: RedelegationSDKType | undefined;
    entries: RedelegationEntryResponseSDKType[];
}
/**
 * Pool is used for tracking bonded and not-bonded token supply of the bond
 * denomination.
 */
export interface Pool {
    notBondedTokens: string;
    bondedTokens: string;
}
export interface PoolProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.Pool";
    value: Uint8Array;
}
/**
 * Pool is used for tracking bonded and not-bonded token supply of the bond
 * denomination.
 */
export interface PoolAmino {
    not_bonded_tokens?: string;
    bonded_tokens?: string;
}
export interface PoolAminoMsg {
    type: "cosmos-sdk/Pool";
    value: PoolAmino;
}
/**
 * Pool is used for tracking bonded and not-bonded token supply of the bond
 * denomination.
 */
export interface PoolSDKType {
    not_bonded_tokens: string;
    bonded_tokens: string;
}
export declare const HistoricalInfo: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is HistoricalInfo;
    isSDK(o: any): o is HistoricalInfoSDKType;
    isAmino(o: any): o is HistoricalInfoAmino;
    encode(message: HistoricalInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): HistoricalInfo;
    fromJSON(object: any): HistoricalInfo;
    toJSON(message: HistoricalInfo): unknown;
    fromPartial(object: DeepPartial<HistoricalInfo>): HistoricalInfo;
    fromSDK(object: HistoricalInfoSDKType): HistoricalInfo;
    toSDK(message: HistoricalInfo): HistoricalInfoSDKType;
    fromAmino(object: HistoricalInfoAmino): HistoricalInfo;
    toAmino(message: HistoricalInfo): HistoricalInfoAmino;
    fromAminoMsg(object: HistoricalInfoAminoMsg): HistoricalInfo;
    toAminoMsg(message: HistoricalInfo): HistoricalInfoAminoMsg;
    fromProtoMsg(message: HistoricalInfoProtoMsg): HistoricalInfo;
    toProto(message: HistoricalInfo): Uint8Array;
    toProtoMsg(message: HistoricalInfo): HistoricalInfoProtoMsg;
};
export declare const CommissionRates: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is CommissionRates;
    isSDK(o: any): o is CommissionRatesSDKType;
    isAmino(o: any): o is CommissionRatesAmino;
    encode(message: CommissionRates, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CommissionRates;
    fromJSON(object: any): CommissionRates;
    toJSON(message: CommissionRates): unknown;
    fromPartial(object: DeepPartial<CommissionRates>): CommissionRates;
    fromSDK(object: CommissionRatesSDKType): CommissionRates;
    toSDK(message: CommissionRates): CommissionRatesSDKType;
    fromAmino(object: CommissionRatesAmino): CommissionRates;
    toAmino(message: CommissionRates): CommissionRatesAmino;
    fromAminoMsg(object: CommissionRatesAminoMsg): CommissionRates;
    toAminoMsg(message: CommissionRates): CommissionRatesAminoMsg;
    fromProtoMsg(message: CommissionRatesProtoMsg): CommissionRates;
    toProto(message: CommissionRates): Uint8Array;
    toProtoMsg(message: CommissionRates): CommissionRatesProtoMsg;
};
export declare const Commission: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Commission;
    isSDK(o: any): o is CommissionSDKType;
    isAmino(o: any): o is CommissionAmino;
    encode(message: Commission, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Commission;
    fromJSON(object: any): Commission;
    toJSON(message: Commission): unknown;
    fromPartial(object: DeepPartial<Commission>): Commission;
    fromSDK(object: CommissionSDKType): Commission;
    toSDK(message: Commission): CommissionSDKType;
    fromAmino(object: CommissionAmino): Commission;
    toAmino(message: Commission): CommissionAmino;
    fromAminoMsg(object: CommissionAminoMsg): Commission;
    toAminoMsg(message: Commission): CommissionAminoMsg;
    fromProtoMsg(message: CommissionProtoMsg): Commission;
    toProto(message: Commission): Uint8Array;
    toProtoMsg(message: Commission): CommissionProtoMsg;
};
export declare const Description: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Description;
    isSDK(o: any): o is DescriptionSDKType;
    isAmino(o: any): o is DescriptionAmino;
    encode(message: Description, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Description;
    fromJSON(object: any): Description;
    toJSON(message: Description): unknown;
    fromPartial(object: DeepPartial<Description>): Description;
    fromSDK(object: DescriptionSDKType): Description;
    toSDK(message: Description): DescriptionSDKType;
    fromAmino(object: DescriptionAmino): Description;
    toAmino(message: Description): DescriptionAmino;
    fromAminoMsg(object: DescriptionAminoMsg): Description;
    toAminoMsg(message: Description): DescriptionAminoMsg;
    fromProtoMsg(message: DescriptionProtoMsg): Description;
    toProto(message: Description): Uint8Array;
    toProtoMsg(message: Description): DescriptionProtoMsg;
};
export declare const Validator: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Validator;
    isSDK(o: any): o is ValidatorSDKType;
    isAmino(o: any): o is ValidatorAmino;
    encode(message: Validator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Validator;
    fromJSON(object: any): Validator;
    toJSON(message: Validator): unknown;
    fromPartial(object: DeepPartial<Validator>): Validator;
    fromSDK(object: ValidatorSDKType): Validator;
    toSDK(message: Validator): ValidatorSDKType;
    fromAmino(object: ValidatorAmino): Validator;
    toAmino(message: Validator): ValidatorAmino;
    fromAminoMsg(object: ValidatorAminoMsg): Validator;
    toAminoMsg(message: Validator): ValidatorAminoMsg;
    fromProtoMsg(message: ValidatorProtoMsg): Validator;
    toProto(message: Validator): Uint8Array;
    toProtoMsg(message: Validator): ValidatorProtoMsg;
};
export declare const ValAddresses: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ValAddresses;
    isSDK(o: any): o is ValAddressesSDKType;
    isAmino(o: any): o is ValAddressesAmino;
    encode(message: ValAddresses, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ValAddresses;
    fromJSON(object: any): ValAddresses;
    toJSON(message: ValAddresses): unknown;
    fromPartial(object: DeepPartial<ValAddresses>): ValAddresses;
    fromSDK(object: ValAddressesSDKType): ValAddresses;
    toSDK(message: ValAddresses): ValAddressesSDKType;
    fromAmino(object: ValAddressesAmino): ValAddresses;
    toAmino(message: ValAddresses): ValAddressesAmino;
    fromAminoMsg(object: ValAddressesAminoMsg): ValAddresses;
    toAminoMsg(message: ValAddresses): ValAddressesAminoMsg;
    fromProtoMsg(message: ValAddressesProtoMsg): ValAddresses;
    toProto(message: ValAddresses): Uint8Array;
    toProtoMsg(message: ValAddresses): ValAddressesProtoMsg;
};
export declare const DVPair: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is DVPair;
    isSDK(o: any): o is DVPairSDKType;
    isAmino(o: any): o is DVPairAmino;
    encode(message: DVPair, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DVPair;
    fromJSON(object: any): DVPair;
    toJSON(message: DVPair): unknown;
    fromPartial(object: DeepPartial<DVPair>): DVPair;
    fromSDK(object: DVPairSDKType): DVPair;
    toSDK(message: DVPair): DVPairSDKType;
    fromAmino(object: DVPairAmino): DVPair;
    toAmino(message: DVPair): DVPairAmino;
    fromAminoMsg(object: DVPairAminoMsg): DVPair;
    toAminoMsg(message: DVPair): DVPairAminoMsg;
    fromProtoMsg(message: DVPairProtoMsg): DVPair;
    toProto(message: DVPair): Uint8Array;
    toProtoMsg(message: DVPair): DVPairProtoMsg;
};
export declare const DVPairs: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is DVPairs;
    isSDK(o: any): o is DVPairsSDKType;
    isAmino(o: any): o is DVPairsAmino;
    encode(message: DVPairs, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DVPairs;
    fromJSON(object: any): DVPairs;
    toJSON(message: DVPairs): unknown;
    fromPartial(object: DeepPartial<DVPairs>): DVPairs;
    fromSDK(object: DVPairsSDKType): DVPairs;
    toSDK(message: DVPairs): DVPairsSDKType;
    fromAmino(object: DVPairsAmino): DVPairs;
    toAmino(message: DVPairs): DVPairsAmino;
    fromAminoMsg(object: DVPairsAminoMsg): DVPairs;
    toAminoMsg(message: DVPairs): DVPairsAminoMsg;
    fromProtoMsg(message: DVPairsProtoMsg): DVPairs;
    toProto(message: DVPairs): Uint8Array;
    toProtoMsg(message: DVPairs): DVPairsProtoMsg;
};
export declare const DVVTriplet: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is DVVTriplet;
    isSDK(o: any): o is DVVTripletSDKType;
    isAmino(o: any): o is DVVTripletAmino;
    encode(message: DVVTriplet, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DVVTriplet;
    fromJSON(object: any): DVVTriplet;
    toJSON(message: DVVTriplet): unknown;
    fromPartial(object: DeepPartial<DVVTriplet>): DVVTriplet;
    fromSDK(object: DVVTripletSDKType): DVVTriplet;
    toSDK(message: DVVTriplet): DVVTripletSDKType;
    fromAmino(object: DVVTripletAmino): DVVTriplet;
    toAmino(message: DVVTriplet): DVVTripletAmino;
    fromAminoMsg(object: DVVTripletAminoMsg): DVVTriplet;
    toAminoMsg(message: DVVTriplet): DVVTripletAminoMsg;
    fromProtoMsg(message: DVVTripletProtoMsg): DVVTriplet;
    toProto(message: DVVTriplet): Uint8Array;
    toProtoMsg(message: DVVTriplet): DVVTripletProtoMsg;
};
export declare const DVVTriplets: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is DVVTriplets;
    isSDK(o: any): o is DVVTripletsSDKType;
    isAmino(o: any): o is DVVTripletsAmino;
    encode(message: DVVTriplets, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DVVTriplets;
    fromJSON(object: any): DVVTriplets;
    toJSON(message: DVVTriplets): unknown;
    fromPartial(object: DeepPartial<DVVTriplets>): DVVTriplets;
    fromSDK(object: DVVTripletsSDKType): DVVTriplets;
    toSDK(message: DVVTriplets): DVVTripletsSDKType;
    fromAmino(object: DVVTripletsAmino): DVVTriplets;
    toAmino(message: DVVTriplets): DVVTripletsAmino;
    fromAminoMsg(object: DVVTripletsAminoMsg): DVVTriplets;
    toAminoMsg(message: DVVTriplets): DVVTripletsAminoMsg;
    fromProtoMsg(message: DVVTripletsProtoMsg): DVVTriplets;
    toProto(message: DVVTriplets): Uint8Array;
    toProtoMsg(message: DVVTriplets): DVVTripletsProtoMsg;
};
export declare const Delegation: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Delegation;
    isSDK(o: any): o is DelegationSDKType;
    isAmino(o: any): o is DelegationAmino;
    encode(message: Delegation, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Delegation;
    fromJSON(object: any): Delegation;
    toJSON(message: Delegation): unknown;
    fromPartial(object: DeepPartial<Delegation>): Delegation;
    fromSDK(object: DelegationSDKType): Delegation;
    toSDK(message: Delegation): DelegationSDKType;
    fromAmino(object: DelegationAmino): Delegation;
    toAmino(message: Delegation): DelegationAmino;
    fromAminoMsg(object: DelegationAminoMsg): Delegation;
    toAminoMsg(message: Delegation): DelegationAminoMsg;
    fromProtoMsg(message: DelegationProtoMsg): Delegation;
    toProto(message: Delegation): Uint8Array;
    toProtoMsg(message: Delegation): DelegationProtoMsg;
};
export declare const UnbondingDelegation: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is UnbondingDelegation;
    isSDK(o: any): o is UnbondingDelegationSDKType;
    isAmino(o: any): o is UnbondingDelegationAmino;
    encode(message: UnbondingDelegation, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UnbondingDelegation;
    fromJSON(object: any): UnbondingDelegation;
    toJSON(message: UnbondingDelegation): unknown;
    fromPartial(object: DeepPartial<UnbondingDelegation>): UnbondingDelegation;
    fromSDK(object: UnbondingDelegationSDKType): UnbondingDelegation;
    toSDK(message: UnbondingDelegation): UnbondingDelegationSDKType;
    fromAmino(object: UnbondingDelegationAmino): UnbondingDelegation;
    toAmino(message: UnbondingDelegation): UnbondingDelegationAmino;
    fromAminoMsg(object: UnbondingDelegationAminoMsg): UnbondingDelegation;
    toAminoMsg(message: UnbondingDelegation): UnbondingDelegationAminoMsg;
    fromProtoMsg(message: UnbondingDelegationProtoMsg): UnbondingDelegation;
    toProto(message: UnbondingDelegation): Uint8Array;
    toProtoMsg(message: UnbondingDelegation): UnbondingDelegationProtoMsg;
};
export declare const UnbondingDelegationEntry: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is UnbondingDelegationEntry;
    isSDK(o: any): o is UnbondingDelegationEntrySDKType;
    isAmino(o: any): o is UnbondingDelegationEntryAmino;
    encode(message: UnbondingDelegationEntry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UnbondingDelegationEntry;
    fromJSON(object: any): UnbondingDelegationEntry;
    toJSON(message: UnbondingDelegationEntry): unknown;
    fromPartial(object: DeepPartial<UnbondingDelegationEntry>): UnbondingDelegationEntry;
    fromSDK(object: UnbondingDelegationEntrySDKType): UnbondingDelegationEntry;
    toSDK(message: UnbondingDelegationEntry): UnbondingDelegationEntrySDKType;
    fromAmino(object: UnbondingDelegationEntryAmino): UnbondingDelegationEntry;
    toAmino(message: UnbondingDelegationEntry): UnbondingDelegationEntryAmino;
    fromAminoMsg(object: UnbondingDelegationEntryAminoMsg): UnbondingDelegationEntry;
    toAminoMsg(message: UnbondingDelegationEntry): UnbondingDelegationEntryAminoMsg;
    fromProtoMsg(message: UnbondingDelegationEntryProtoMsg): UnbondingDelegationEntry;
    toProto(message: UnbondingDelegationEntry): Uint8Array;
    toProtoMsg(message: UnbondingDelegationEntry): UnbondingDelegationEntryProtoMsg;
};
export declare const RedelegationEntry: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is RedelegationEntry;
    isSDK(o: any): o is RedelegationEntrySDKType;
    isAmino(o: any): o is RedelegationEntryAmino;
    encode(message: RedelegationEntry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RedelegationEntry;
    fromJSON(object: any): RedelegationEntry;
    toJSON(message: RedelegationEntry): unknown;
    fromPartial(object: DeepPartial<RedelegationEntry>): RedelegationEntry;
    fromSDK(object: RedelegationEntrySDKType): RedelegationEntry;
    toSDK(message: RedelegationEntry): RedelegationEntrySDKType;
    fromAmino(object: RedelegationEntryAmino): RedelegationEntry;
    toAmino(message: RedelegationEntry): RedelegationEntryAmino;
    fromAminoMsg(object: RedelegationEntryAminoMsg): RedelegationEntry;
    toAminoMsg(message: RedelegationEntry): RedelegationEntryAminoMsg;
    fromProtoMsg(message: RedelegationEntryProtoMsg): RedelegationEntry;
    toProto(message: RedelegationEntry): Uint8Array;
    toProtoMsg(message: RedelegationEntry): RedelegationEntryProtoMsg;
};
export declare const Redelegation: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Redelegation;
    isSDK(o: any): o is RedelegationSDKType;
    isAmino(o: any): o is RedelegationAmino;
    encode(message: Redelegation, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Redelegation;
    fromJSON(object: any): Redelegation;
    toJSON(message: Redelegation): unknown;
    fromPartial(object: DeepPartial<Redelegation>): Redelegation;
    fromSDK(object: RedelegationSDKType): Redelegation;
    toSDK(message: Redelegation): RedelegationSDKType;
    fromAmino(object: RedelegationAmino): Redelegation;
    toAmino(message: Redelegation): RedelegationAmino;
    fromAminoMsg(object: RedelegationAminoMsg): Redelegation;
    toAminoMsg(message: Redelegation): RedelegationAminoMsg;
    fromProtoMsg(message: RedelegationProtoMsg): Redelegation;
    toProto(message: Redelegation): Uint8Array;
    toProtoMsg(message: Redelegation): RedelegationProtoMsg;
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
export declare const DelegationResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is DelegationResponse;
    isSDK(o: any): o is DelegationResponseSDKType;
    isAmino(o: any): o is DelegationResponseAmino;
    encode(message: DelegationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DelegationResponse;
    fromJSON(object: any): DelegationResponse;
    toJSON(message: DelegationResponse): unknown;
    fromPartial(object: DeepPartial<DelegationResponse>): DelegationResponse;
    fromSDK(object: DelegationResponseSDKType): DelegationResponse;
    toSDK(message: DelegationResponse): DelegationResponseSDKType;
    fromAmino(object: DelegationResponseAmino): DelegationResponse;
    toAmino(message: DelegationResponse): DelegationResponseAmino;
    fromAminoMsg(object: DelegationResponseAminoMsg): DelegationResponse;
    toAminoMsg(message: DelegationResponse): DelegationResponseAminoMsg;
    fromProtoMsg(message: DelegationResponseProtoMsg): DelegationResponse;
    toProto(message: DelegationResponse): Uint8Array;
    toProtoMsg(message: DelegationResponse): DelegationResponseProtoMsg;
};
export declare const RedelegationEntryResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is RedelegationEntryResponse;
    isSDK(o: any): o is RedelegationEntryResponseSDKType;
    isAmino(o: any): o is RedelegationEntryResponseAmino;
    encode(message: RedelegationEntryResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RedelegationEntryResponse;
    fromJSON(object: any): RedelegationEntryResponse;
    toJSON(message: RedelegationEntryResponse): unknown;
    fromPartial(object: DeepPartial<RedelegationEntryResponse>): RedelegationEntryResponse;
    fromSDK(object: RedelegationEntryResponseSDKType): RedelegationEntryResponse;
    toSDK(message: RedelegationEntryResponse): RedelegationEntryResponseSDKType;
    fromAmino(object: RedelegationEntryResponseAmino): RedelegationEntryResponse;
    toAmino(message: RedelegationEntryResponse): RedelegationEntryResponseAmino;
    fromAminoMsg(object: RedelegationEntryResponseAminoMsg): RedelegationEntryResponse;
    toAminoMsg(message: RedelegationEntryResponse): RedelegationEntryResponseAminoMsg;
    fromProtoMsg(message: RedelegationEntryResponseProtoMsg): RedelegationEntryResponse;
    toProto(message: RedelegationEntryResponse): Uint8Array;
    toProtoMsg(message: RedelegationEntryResponse): RedelegationEntryResponseProtoMsg;
};
export declare const RedelegationResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is RedelegationResponse;
    isSDK(o: any): o is RedelegationResponseSDKType;
    isAmino(o: any): o is RedelegationResponseAmino;
    encode(message: RedelegationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RedelegationResponse;
    fromJSON(object: any): RedelegationResponse;
    toJSON(message: RedelegationResponse): unknown;
    fromPartial(object: DeepPartial<RedelegationResponse>): RedelegationResponse;
    fromSDK(object: RedelegationResponseSDKType): RedelegationResponse;
    toSDK(message: RedelegationResponse): RedelegationResponseSDKType;
    fromAmino(object: RedelegationResponseAmino): RedelegationResponse;
    toAmino(message: RedelegationResponse): RedelegationResponseAmino;
    fromAminoMsg(object: RedelegationResponseAminoMsg): RedelegationResponse;
    toAminoMsg(message: RedelegationResponse): RedelegationResponseAminoMsg;
    fromProtoMsg(message: RedelegationResponseProtoMsg): RedelegationResponse;
    toProto(message: RedelegationResponse): Uint8Array;
    toProtoMsg(message: RedelegationResponse): RedelegationResponseProtoMsg;
};
export declare const Pool: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Pool;
    isSDK(o: any): o is PoolSDKType;
    isAmino(o: any): o is PoolAmino;
    encode(message: Pool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Pool;
    fromJSON(object: any): Pool;
    toJSON(message: Pool): unknown;
    fromPartial(object: DeepPartial<Pool>): Pool;
    fromSDK(object: PoolSDKType): Pool;
    toSDK(message: Pool): PoolSDKType;
    fromAmino(object: PoolAmino): Pool;
    toAmino(message: Pool): PoolAmino;
    fromAminoMsg(object: PoolAminoMsg): Pool;
    toAminoMsg(message: Pool): PoolAminoMsg;
    fromProtoMsg(message: PoolProtoMsg): Pool;
    toProto(message: Pool): Uint8Array;
    toProtoMsg(message: Pool): PoolProtoMsg;
};
