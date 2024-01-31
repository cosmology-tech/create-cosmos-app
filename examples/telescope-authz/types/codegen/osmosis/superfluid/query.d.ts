import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { SuperfluidAssetType, SuperfluidAsset, SuperfluidAssetAmino, SuperfluidAssetSDKType, OsmoEquivalentMultiplierRecord, OsmoEquivalentMultiplierRecordAmino, OsmoEquivalentMultiplierRecordSDKType, SuperfluidDelegationRecord, SuperfluidDelegationRecordAmino, SuperfluidDelegationRecordSDKType } from "./superfluid";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { SyntheticLock, SyntheticLockAmino, SyntheticLockSDKType } from "../lockup/lock";
import { DelegationResponse, DelegationResponseAmino, DelegationResponseSDKType } from "../../cosmos/staking/v1beta1/staking";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/osmosis.superfluid.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "osmosis/query-params-request";
    value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params | undefined;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/osmosis.superfluid.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino | undefined;
}
export interface QueryParamsResponseAminoMsg {
    type: "osmosis/query-params-response";
    value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType | undefined;
}
export interface AssetTypeRequest {
    denom: string;
}
export interface AssetTypeRequestProtoMsg {
    typeUrl: "/osmosis.superfluid.AssetTypeRequest";
    value: Uint8Array;
}
export interface AssetTypeRequestAmino {
    denom?: string;
}
export interface AssetTypeRequestAminoMsg {
    type: "osmosis/asset-type-request";
    value: AssetTypeRequestAmino;
}
export interface AssetTypeRequestSDKType {
    denom: string;
}
export interface AssetTypeResponse {
    assetType: SuperfluidAssetType;
}
export interface AssetTypeResponseProtoMsg {
    typeUrl: "/osmosis.superfluid.AssetTypeResponse";
    value: Uint8Array;
}
export interface AssetTypeResponseAmino {
    asset_type?: SuperfluidAssetType;
}
export interface AssetTypeResponseAminoMsg {
    type: "osmosis/asset-type-response";
    value: AssetTypeResponseAmino;
}
export interface AssetTypeResponseSDKType {
    asset_type: SuperfluidAssetType;
}
export interface AllAssetsRequest {
}
export interface AllAssetsRequestProtoMsg {
    typeUrl: "/osmosis.superfluid.AllAssetsRequest";
    value: Uint8Array;
}
export interface AllAssetsRequestAmino {
}
export interface AllAssetsRequestAminoMsg {
    type: "osmosis/all-assets-request";
    value: AllAssetsRequestAmino;
}
export interface AllAssetsRequestSDKType {
}
export interface AllAssetsResponse {
    assets: SuperfluidAsset[];
}
export interface AllAssetsResponseProtoMsg {
    typeUrl: "/osmosis.superfluid.AllAssetsResponse";
    value: Uint8Array;
}
export interface AllAssetsResponseAmino {
    assets?: SuperfluidAssetAmino[];
}
export interface AllAssetsResponseAminoMsg {
    type: "osmosis/all-assets-response";
    value: AllAssetsResponseAmino;
}
export interface AllAssetsResponseSDKType {
    assets: SuperfluidAssetSDKType[];
}
export interface AssetMultiplierRequest {
    denom: string;
}
export interface AssetMultiplierRequestProtoMsg {
    typeUrl: "/osmosis.superfluid.AssetMultiplierRequest";
    value: Uint8Array;
}
export interface AssetMultiplierRequestAmino {
    denom?: string;
}
export interface AssetMultiplierRequestAminoMsg {
    type: "osmosis/asset-multiplier-request";
    value: AssetMultiplierRequestAmino;
}
export interface AssetMultiplierRequestSDKType {
    denom: string;
}
export interface AssetMultiplierResponse {
    osmoEquivalentMultiplier?: OsmoEquivalentMultiplierRecord | undefined;
}
export interface AssetMultiplierResponseProtoMsg {
    typeUrl: "/osmosis.superfluid.AssetMultiplierResponse";
    value: Uint8Array;
}
export interface AssetMultiplierResponseAmino {
    osmo_equivalent_multiplier?: OsmoEquivalentMultiplierRecordAmino | undefined;
}
export interface AssetMultiplierResponseAminoMsg {
    type: "osmosis/asset-multiplier-response";
    value: AssetMultiplierResponseAmino;
}
export interface AssetMultiplierResponseSDKType {
    osmo_equivalent_multiplier?: OsmoEquivalentMultiplierRecordSDKType | undefined;
}
export interface SuperfluidIntermediaryAccountInfo {
    denom: string;
    valAddr: string;
    gaugeId: bigint;
    address: string;
}
export interface SuperfluidIntermediaryAccountInfoProtoMsg {
    typeUrl: "/osmosis.superfluid.SuperfluidIntermediaryAccountInfo";
    value: Uint8Array;
}
export interface SuperfluidIntermediaryAccountInfoAmino {
    denom?: string;
    val_addr?: string;
    gauge_id?: string;
    address?: string;
}
export interface SuperfluidIntermediaryAccountInfoAminoMsg {
    type: "osmosis/superfluid-intermediary-account-info";
    value: SuperfluidIntermediaryAccountInfoAmino;
}
export interface SuperfluidIntermediaryAccountInfoSDKType {
    denom: string;
    val_addr: string;
    gauge_id: bigint;
    address: string;
}
export interface AllIntermediaryAccountsRequest {
    pagination?: PageRequest | undefined;
}
export interface AllIntermediaryAccountsRequestProtoMsg {
    typeUrl: "/osmosis.superfluid.AllIntermediaryAccountsRequest";
    value: Uint8Array;
}
export interface AllIntermediaryAccountsRequestAmino {
    pagination?: PageRequestAmino | undefined;
}
export interface AllIntermediaryAccountsRequestAminoMsg {
    type: "osmosis/all-intermediary-accounts-request";
    value: AllIntermediaryAccountsRequestAmino;
}
export interface AllIntermediaryAccountsRequestSDKType {
    pagination?: PageRequestSDKType | undefined;
}
export interface AllIntermediaryAccountsResponse {
    accounts: SuperfluidIntermediaryAccountInfo[];
    pagination?: PageResponse | undefined;
}
export interface AllIntermediaryAccountsResponseProtoMsg {
    typeUrl: "/osmosis.superfluid.AllIntermediaryAccountsResponse";
    value: Uint8Array;
}
export interface AllIntermediaryAccountsResponseAmino {
    accounts?: SuperfluidIntermediaryAccountInfoAmino[];
    pagination?: PageResponseAmino | undefined;
}
export interface AllIntermediaryAccountsResponseAminoMsg {
    type: "osmosis/all-intermediary-accounts-response";
    value: AllIntermediaryAccountsResponseAmino;
}
export interface AllIntermediaryAccountsResponseSDKType {
    accounts: SuperfluidIntermediaryAccountInfoSDKType[];
    pagination?: PageResponseSDKType | undefined;
}
export interface ConnectedIntermediaryAccountRequest {
    lockId: bigint;
}
export interface ConnectedIntermediaryAccountRequestProtoMsg {
    typeUrl: "/osmosis.superfluid.ConnectedIntermediaryAccountRequest";
    value: Uint8Array;
}
export interface ConnectedIntermediaryAccountRequestAmino {
    lock_id?: string;
}
export interface ConnectedIntermediaryAccountRequestAminoMsg {
    type: "osmosis/connected-intermediary-account-request";
    value: ConnectedIntermediaryAccountRequestAmino;
}
export interface ConnectedIntermediaryAccountRequestSDKType {
    lock_id: bigint;
}
export interface ConnectedIntermediaryAccountResponse {
    account?: SuperfluidIntermediaryAccountInfo | undefined;
}
export interface ConnectedIntermediaryAccountResponseProtoMsg {
    typeUrl: "/osmosis.superfluid.ConnectedIntermediaryAccountResponse";
    value: Uint8Array;
}
export interface ConnectedIntermediaryAccountResponseAmino {
    account?: SuperfluidIntermediaryAccountInfoAmino | undefined;
}
export interface ConnectedIntermediaryAccountResponseAminoMsg {
    type: "osmosis/connected-intermediary-account-response";
    value: ConnectedIntermediaryAccountResponseAmino;
}
export interface ConnectedIntermediaryAccountResponseSDKType {
    account?: SuperfluidIntermediaryAccountInfoSDKType | undefined;
}
export interface QueryTotalDelegationByValidatorForDenomRequest {
    denom: string;
}
export interface QueryTotalDelegationByValidatorForDenomRequestProtoMsg {
    typeUrl: "/osmosis.superfluid.QueryTotalDelegationByValidatorForDenomRequest";
    value: Uint8Array;
}
export interface QueryTotalDelegationByValidatorForDenomRequestAmino {
    denom?: string;
}
export interface QueryTotalDelegationByValidatorForDenomRequestAminoMsg {
    type: "osmosis/query-total-delegation-by-validator-for-denom-request";
    value: QueryTotalDelegationByValidatorForDenomRequestAmino;
}
export interface QueryTotalDelegationByValidatorForDenomRequestSDKType {
    denom: string;
}
export interface QueryTotalDelegationByValidatorForDenomResponse {
    assets: Delegations[];
}
export interface QueryTotalDelegationByValidatorForDenomResponseProtoMsg {
    typeUrl: "/osmosis.superfluid.QueryTotalDelegationByValidatorForDenomResponse";
    value: Uint8Array;
}
export interface QueryTotalDelegationByValidatorForDenomResponseAmino {
    assets?: DelegationsAmino[];
}
export interface QueryTotalDelegationByValidatorForDenomResponseAminoMsg {
    type: "osmosis/query-total-delegation-by-validator-for-denom-response";
    value: QueryTotalDelegationByValidatorForDenomResponseAmino;
}
export interface QueryTotalDelegationByValidatorForDenomResponseSDKType {
    assets: DelegationsSDKType[];
}
export interface Delegations {
    valAddr: string;
    amountSfsd: string;
    osmoEquivalent: string;
}
export interface DelegationsProtoMsg {
    typeUrl: "/osmosis.superfluid.Delegations";
    value: Uint8Array;
}
export interface DelegationsAmino {
    val_addr?: string;
    amount_sfsd?: string;
    osmo_equivalent?: string;
}
export interface DelegationsAminoMsg {
    type: "osmosis/delegations";
    value: DelegationsAmino;
}
export interface DelegationsSDKType {
    val_addr: string;
    amount_sfsd: string;
    osmo_equivalent: string;
}
export interface TotalSuperfluidDelegationsRequest {
}
export interface TotalSuperfluidDelegationsRequestProtoMsg {
    typeUrl: "/osmosis.superfluid.TotalSuperfluidDelegationsRequest";
    value: Uint8Array;
}
export interface TotalSuperfluidDelegationsRequestAmino {
}
export interface TotalSuperfluidDelegationsRequestAminoMsg {
    type: "osmosis/total-superfluid-delegations-request";
    value: TotalSuperfluidDelegationsRequestAmino;
}
export interface TotalSuperfluidDelegationsRequestSDKType {
}
export interface TotalSuperfluidDelegationsResponse {
    totalDelegations: string;
}
export interface TotalSuperfluidDelegationsResponseProtoMsg {
    typeUrl: "/osmosis.superfluid.TotalSuperfluidDelegationsResponse";
    value: Uint8Array;
}
export interface TotalSuperfluidDelegationsResponseAmino {
    total_delegations?: string;
}
export interface TotalSuperfluidDelegationsResponseAminoMsg {
    type: "osmosis/total-superfluid-delegations-response";
    value: TotalSuperfluidDelegationsResponseAmino;
}
export interface TotalSuperfluidDelegationsResponseSDKType {
    total_delegations: string;
}
export interface SuperfluidDelegationAmountRequest {
    delegatorAddress: string;
    validatorAddress: string;
    denom: string;
}
export interface SuperfluidDelegationAmountRequestProtoMsg {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationAmountRequest";
    value: Uint8Array;
}
export interface SuperfluidDelegationAmountRequestAmino {
    delegator_address?: string;
    validator_address?: string;
    denom?: string;
}
export interface SuperfluidDelegationAmountRequestAminoMsg {
    type: "osmosis/superfluid-delegation-amount-request";
    value: SuperfluidDelegationAmountRequestAmino;
}
export interface SuperfluidDelegationAmountRequestSDKType {
    delegator_address: string;
    validator_address: string;
    denom: string;
}
export interface SuperfluidDelegationAmountResponse {
    amount: Coin[];
}
export interface SuperfluidDelegationAmountResponseProtoMsg {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationAmountResponse";
    value: Uint8Array;
}
export interface SuperfluidDelegationAmountResponseAmino {
    amount?: CoinAmino[];
}
export interface SuperfluidDelegationAmountResponseAminoMsg {
    type: "osmosis/superfluid-delegation-amount-response";
    value: SuperfluidDelegationAmountResponseAmino;
}
export interface SuperfluidDelegationAmountResponseSDKType {
    amount: CoinSDKType[];
}
export interface SuperfluidDelegationsByDelegatorRequest {
    delegatorAddress: string;
}
export interface SuperfluidDelegationsByDelegatorRequestProtoMsg {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByDelegatorRequest";
    value: Uint8Array;
}
export interface SuperfluidDelegationsByDelegatorRequestAmino {
    delegator_address?: string;
}
export interface SuperfluidDelegationsByDelegatorRequestAminoMsg {
    type: "osmosis/superfluid-delegations-by-delegator-request";
    value: SuperfluidDelegationsByDelegatorRequestAmino;
}
export interface SuperfluidDelegationsByDelegatorRequestSDKType {
    delegator_address: string;
}
export interface SuperfluidDelegationsByDelegatorResponse {
    superfluidDelegationRecords: SuperfluidDelegationRecord[];
    totalDelegatedCoins: Coin[];
    totalEquivalentStakedAmount: Coin | undefined;
}
export interface SuperfluidDelegationsByDelegatorResponseProtoMsg {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByDelegatorResponse";
    value: Uint8Array;
}
export interface SuperfluidDelegationsByDelegatorResponseAmino {
    superfluid_delegation_records?: SuperfluidDelegationRecordAmino[];
    total_delegated_coins?: CoinAmino[];
    total_equivalent_staked_amount?: CoinAmino | undefined;
}
export interface SuperfluidDelegationsByDelegatorResponseAminoMsg {
    type: "osmosis/superfluid-delegations-by-delegator-response";
    value: SuperfluidDelegationsByDelegatorResponseAmino;
}
export interface SuperfluidDelegationsByDelegatorResponseSDKType {
    superfluid_delegation_records: SuperfluidDelegationRecordSDKType[];
    total_delegated_coins: CoinSDKType[];
    total_equivalent_staked_amount: CoinSDKType | undefined;
}
export interface SuperfluidUndelegationsByDelegatorRequest {
    delegatorAddress: string;
    denom: string;
}
export interface SuperfluidUndelegationsByDelegatorRequestProtoMsg {
    typeUrl: "/osmosis.superfluid.SuperfluidUndelegationsByDelegatorRequest";
    value: Uint8Array;
}
export interface SuperfluidUndelegationsByDelegatorRequestAmino {
    delegator_address?: string;
    denom?: string;
}
export interface SuperfluidUndelegationsByDelegatorRequestAminoMsg {
    type: "osmosis/superfluid-undelegations-by-delegator-request";
    value: SuperfluidUndelegationsByDelegatorRequestAmino;
}
export interface SuperfluidUndelegationsByDelegatorRequestSDKType {
    delegator_address: string;
    denom: string;
}
export interface SuperfluidUndelegationsByDelegatorResponse {
    superfluidDelegationRecords: SuperfluidDelegationRecord[];
    totalUndelegatedCoins: Coin[];
    syntheticLocks: SyntheticLock[];
}
export interface SuperfluidUndelegationsByDelegatorResponseProtoMsg {
    typeUrl: "/osmosis.superfluid.SuperfluidUndelegationsByDelegatorResponse";
    value: Uint8Array;
}
export interface SuperfluidUndelegationsByDelegatorResponseAmino {
    superfluid_delegation_records?: SuperfluidDelegationRecordAmino[];
    total_undelegated_coins?: CoinAmino[];
    synthetic_locks?: SyntheticLockAmino[];
}
export interface SuperfluidUndelegationsByDelegatorResponseAminoMsg {
    type: "osmosis/superfluid-undelegations-by-delegator-response";
    value: SuperfluidUndelegationsByDelegatorResponseAmino;
}
export interface SuperfluidUndelegationsByDelegatorResponseSDKType {
    superfluid_delegation_records: SuperfluidDelegationRecordSDKType[];
    total_undelegated_coins: CoinSDKType[];
    synthetic_locks: SyntheticLockSDKType[];
}
export interface SuperfluidDelegationsByValidatorDenomRequest {
    validatorAddress: string;
    denom: string;
}
export interface SuperfluidDelegationsByValidatorDenomRequestProtoMsg {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByValidatorDenomRequest";
    value: Uint8Array;
}
export interface SuperfluidDelegationsByValidatorDenomRequestAmino {
    validator_address?: string;
    denom?: string;
}
export interface SuperfluidDelegationsByValidatorDenomRequestAminoMsg {
    type: "osmosis/superfluid-delegations-by-validator-denom-request";
    value: SuperfluidDelegationsByValidatorDenomRequestAmino;
}
export interface SuperfluidDelegationsByValidatorDenomRequestSDKType {
    validator_address: string;
    denom: string;
}
export interface SuperfluidDelegationsByValidatorDenomResponse {
    superfluidDelegationRecords: SuperfluidDelegationRecord[];
}
export interface SuperfluidDelegationsByValidatorDenomResponseProtoMsg {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByValidatorDenomResponse";
    value: Uint8Array;
}
export interface SuperfluidDelegationsByValidatorDenomResponseAmino {
    superfluid_delegation_records?: SuperfluidDelegationRecordAmino[];
}
export interface SuperfluidDelegationsByValidatorDenomResponseAminoMsg {
    type: "osmosis/superfluid-delegations-by-validator-denom-response";
    value: SuperfluidDelegationsByValidatorDenomResponseAmino;
}
export interface SuperfluidDelegationsByValidatorDenomResponseSDKType {
    superfluid_delegation_records: SuperfluidDelegationRecordSDKType[];
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
    validatorAddress: string;
    denom: string;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequestProtoMsg {
    typeUrl: "/osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest";
    value: Uint8Array;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino {
    validator_address?: string;
    denom?: string;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAminoMsg {
    type: "osmosis/estimate-superfluid-delegated-amount-by-validator-denom-request";
    value: EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType {
    validator_address: string;
    denom: string;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
    totalDelegatedCoins: Coin[];
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponseProtoMsg {
    typeUrl: "/osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse";
    value: Uint8Array;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino {
    total_delegated_coins?: CoinAmino[];
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAminoMsg {
    type: "osmosis/estimate-superfluid-delegated-amount-by-validator-denom-response";
    value: EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType {
    total_delegated_coins: CoinSDKType[];
}
export interface QueryTotalDelegationByDelegatorRequest {
    delegatorAddress: string;
}
export interface QueryTotalDelegationByDelegatorRequestProtoMsg {
    typeUrl: "/osmosis.superfluid.QueryTotalDelegationByDelegatorRequest";
    value: Uint8Array;
}
export interface QueryTotalDelegationByDelegatorRequestAmino {
    delegator_address?: string;
}
export interface QueryTotalDelegationByDelegatorRequestAminoMsg {
    type: "osmosis/query-total-delegation-by-delegator-request";
    value: QueryTotalDelegationByDelegatorRequestAmino;
}
export interface QueryTotalDelegationByDelegatorRequestSDKType {
    delegator_address: string;
}
export interface QueryTotalDelegationByDelegatorResponse {
    superfluidDelegationRecords: SuperfluidDelegationRecord[];
    delegationResponse: DelegationResponse[];
    totalDelegatedCoins: Coin[];
    totalEquivalentStakedAmount: Coin | undefined;
}
export interface QueryTotalDelegationByDelegatorResponseProtoMsg {
    typeUrl: "/osmosis.superfluid.QueryTotalDelegationByDelegatorResponse";
    value: Uint8Array;
}
export interface QueryTotalDelegationByDelegatorResponseAmino {
    superfluid_delegation_records?: SuperfluidDelegationRecordAmino[];
    delegation_response?: DelegationResponseAmino[];
    total_delegated_coins?: CoinAmino[];
    total_equivalent_staked_amount?: CoinAmino | undefined;
}
export interface QueryTotalDelegationByDelegatorResponseAminoMsg {
    type: "osmosis/query-total-delegation-by-delegator-response";
    value: QueryTotalDelegationByDelegatorResponseAmino;
}
export interface QueryTotalDelegationByDelegatorResponseSDKType {
    superfluid_delegation_records: SuperfluidDelegationRecordSDKType[];
    delegation_response: DelegationResponseSDKType[];
    total_delegated_coins: CoinSDKType[];
    total_equivalent_staked_amount: CoinSDKType | undefined;
}
export interface QueryUnpoolWhitelistRequest {
}
export interface QueryUnpoolWhitelistRequestProtoMsg {
    typeUrl: "/osmosis.superfluid.QueryUnpoolWhitelistRequest";
    value: Uint8Array;
}
export interface QueryUnpoolWhitelistRequestAmino {
}
export interface QueryUnpoolWhitelistRequestAminoMsg {
    type: "osmosis/query-unpool-whitelist-request";
    value: QueryUnpoolWhitelistRequestAmino;
}
export interface QueryUnpoolWhitelistRequestSDKType {
}
export interface QueryUnpoolWhitelistResponse {
    poolIds: bigint[];
}
export interface QueryUnpoolWhitelistResponseProtoMsg {
    typeUrl: "/osmosis.superfluid.QueryUnpoolWhitelistResponse";
    value: Uint8Array;
}
export interface QueryUnpoolWhitelistResponseAmino {
    pool_ids?: string[];
}
export interface QueryUnpoolWhitelistResponseAminoMsg {
    type: "osmosis/query-unpool-whitelist-response";
    value: QueryUnpoolWhitelistResponseAmino;
}
export interface QueryUnpoolWhitelistResponseSDKType {
    pool_ids: bigint[];
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryParamsRequest;
    isSDK(o: any): o is QueryParamsRequestSDKType;
    isAmino(o: any): o is QueryParamsRequestAmino;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
    fromSDK(_: QueryParamsRequestSDKType): QueryParamsRequest;
    toSDK(_: QueryParamsRequest): QueryParamsRequestSDKType;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryParamsResponse;
    isSDK(o: any): o is QueryParamsResponseSDKType;
    isAmino(o: any): o is QueryParamsResponseAmino;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
    fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse;
    toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const AssetTypeRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AssetTypeRequest;
    isSDK(o: any): o is AssetTypeRequestSDKType;
    isAmino(o: any): o is AssetTypeRequestAmino;
    encode(message: AssetTypeRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AssetTypeRequest;
    fromJSON(object: any): AssetTypeRequest;
    toJSON(message: AssetTypeRequest): unknown;
    fromPartial(object: DeepPartial<AssetTypeRequest>): AssetTypeRequest;
    fromSDK(object: AssetTypeRequestSDKType): AssetTypeRequest;
    toSDK(message: AssetTypeRequest): AssetTypeRequestSDKType;
    fromAmino(object: AssetTypeRequestAmino): AssetTypeRequest;
    toAmino(message: AssetTypeRequest): AssetTypeRequestAmino;
    fromAminoMsg(object: AssetTypeRequestAminoMsg): AssetTypeRequest;
    toAminoMsg(message: AssetTypeRequest): AssetTypeRequestAminoMsg;
    fromProtoMsg(message: AssetTypeRequestProtoMsg): AssetTypeRequest;
    toProto(message: AssetTypeRequest): Uint8Array;
    toProtoMsg(message: AssetTypeRequest): AssetTypeRequestProtoMsg;
};
export declare const AssetTypeResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AssetTypeResponse;
    isSDK(o: any): o is AssetTypeResponseSDKType;
    isAmino(o: any): o is AssetTypeResponseAmino;
    encode(message: AssetTypeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AssetTypeResponse;
    fromJSON(object: any): AssetTypeResponse;
    toJSON(message: AssetTypeResponse): unknown;
    fromPartial(object: DeepPartial<AssetTypeResponse>): AssetTypeResponse;
    fromSDK(object: AssetTypeResponseSDKType): AssetTypeResponse;
    toSDK(message: AssetTypeResponse): AssetTypeResponseSDKType;
    fromAmino(object: AssetTypeResponseAmino): AssetTypeResponse;
    toAmino(message: AssetTypeResponse): AssetTypeResponseAmino;
    fromAminoMsg(object: AssetTypeResponseAminoMsg): AssetTypeResponse;
    toAminoMsg(message: AssetTypeResponse): AssetTypeResponseAminoMsg;
    fromProtoMsg(message: AssetTypeResponseProtoMsg): AssetTypeResponse;
    toProto(message: AssetTypeResponse): Uint8Array;
    toProtoMsg(message: AssetTypeResponse): AssetTypeResponseProtoMsg;
};
export declare const AllAssetsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AllAssetsRequest;
    isSDK(o: any): o is AllAssetsRequestSDKType;
    isAmino(o: any): o is AllAssetsRequestAmino;
    encode(_: AllAssetsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AllAssetsRequest;
    fromJSON(_: any): AllAssetsRequest;
    toJSON(_: AllAssetsRequest): unknown;
    fromPartial(_: DeepPartial<AllAssetsRequest>): AllAssetsRequest;
    fromSDK(_: AllAssetsRequestSDKType): AllAssetsRequest;
    toSDK(_: AllAssetsRequest): AllAssetsRequestSDKType;
    fromAmino(_: AllAssetsRequestAmino): AllAssetsRequest;
    toAmino(_: AllAssetsRequest): AllAssetsRequestAmino;
    fromAminoMsg(object: AllAssetsRequestAminoMsg): AllAssetsRequest;
    toAminoMsg(message: AllAssetsRequest): AllAssetsRequestAminoMsg;
    fromProtoMsg(message: AllAssetsRequestProtoMsg): AllAssetsRequest;
    toProto(message: AllAssetsRequest): Uint8Array;
    toProtoMsg(message: AllAssetsRequest): AllAssetsRequestProtoMsg;
};
export declare const AllAssetsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AllAssetsResponse;
    isSDK(o: any): o is AllAssetsResponseSDKType;
    isAmino(o: any): o is AllAssetsResponseAmino;
    encode(message: AllAssetsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AllAssetsResponse;
    fromJSON(object: any): AllAssetsResponse;
    toJSON(message: AllAssetsResponse): unknown;
    fromPartial(object: DeepPartial<AllAssetsResponse>): AllAssetsResponse;
    fromSDK(object: AllAssetsResponseSDKType): AllAssetsResponse;
    toSDK(message: AllAssetsResponse): AllAssetsResponseSDKType;
    fromAmino(object: AllAssetsResponseAmino): AllAssetsResponse;
    toAmino(message: AllAssetsResponse): AllAssetsResponseAmino;
    fromAminoMsg(object: AllAssetsResponseAminoMsg): AllAssetsResponse;
    toAminoMsg(message: AllAssetsResponse): AllAssetsResponseAminoMsg;
    fromProtoMsg(message: AllAssetsResponseProtoMsg): AllAssetsResponse;
    toProto(message: AllAssetsResponse): Uint8Array;
    toProtoMsg(message: AllAssetsResponse): AllAssetsResponseProtoMsg;
};
export declare const AssetMultiplierRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AssetMultiplierRequest;
    isSDK(o: any): o is AssetMultiplierRequestSDKType;
    isAmino(o: any): o is AssetMultiplierRequestAmino;
    encode(message: AssetMultiplierRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AssetMultiplierRequest;
    fromJSON(object: any): AssetMultiplierRequest;
    toJSON(message: AssetMultiplierRequest): unknown;
    fromPartial(object: DeepPartial<AssetMultiplierRequest>): AssetMultiplierRequest;
    fromSDK(object: AssetMultiplierRequestSDKType): AssetMultiplierRequest;
    toSDK(message: AssetMultiplierRequest): AssetMultiplierRequestSDKType;
    fromAmino(object: AssetMultiplierRequestAmino): AssetMultiplierRequest;
    toAmino(message: AssetMultiplierRequest): AssetMultiplierRequestAmino;
    fromAminoMsg(object: AssetMultiplierRequestAminoMsg): AssetMultiplierRequest;
    toAminoMsg(message: AssetMultiplierRequest): AssetMultiplierRequestAminoMsg;
    fromProtoMsg(message: AssetMultiplierRequestProtoMsg): AssetMultiplierRequest;
    toProto(message: AssetMultiplierRequest): Uint8Array;
    toProtoMsg(message: AssetMultiplierRequest): AssetMultiplierRequestProtoMsg;
};
export declare const AssetMultiplierResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AssetMultiplierResponse;
    isSDK(o: any): o is AssetMultiplierResponseSDKType;
    isAmino(o: any): o is AssetMultiplierResponseAmino;
    encode(message: AssetMultiplierResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AssetMultiplierResponse;
    fromJSON(object: any): AssetMultiplierResponse;
    toJSON(message: AssetMultiplierResponse): unknown;
    fromPartial(object: DeepPartial<AssetMultiplierResponse>): AssetMultiplierResponse;
    fromSDK(object: AssetMultiplierResponseSDKType): AssetMultiplierResponse;
    toSDK(message: AssetMultiplierResponse): AssetMultiplierResponseSDKType;
    fromAmino(object: AssetMultiplierResponseAmino): AssetMultiplierResponse;
    toAmino(message: AssetMultiplierResponse): AssetMultiplierResponseAmino;
    fromAminoMsg(object: AssetMultiplierResponseAminoMsg): AssetMultiplierResponse;
    toAminoMsg(message: AssetMultiplierResponse): AssetMultiplierResponseAminoMsg;
    fromProtoMsg(message: AssetMultiplierResponseProtoMsg): AssetMultiplierResponse;
    toProto(message: AssetMultiplierResponse): Uint8Array;
    toProtoMsg(message: AssetMultiplierResponse): AssetMultiplierResponseProtoMsg;
};
export declare const SuperfluidIntermediaryAccountInfo: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is SuperfluidIntermediaryAccountInfo;
    isSDK(o: any): o is SuperfluidIntermediaryAccountInfoSDKType;
    isAmino(o: any): o is SuperfluidIntermediaryAccountInfoAmino;
    encode(message: SuperfluidIntermediaryAccountInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidIntermediaryAccountInfo;
    fromJSON(object: any): SuperfluidIntermediaryAccountInfo;
    toJSON(message: SuperfluidIntermediaryAccountInfo): unknown;
    fromPartial(object: DeepPartial<SuperfluidIntermediaryAccountInfo>): SuperfluidIntermediaryAccountInfo;
    fromSDK(object: SuperfluidIntermediaryAccountInfoSDKType): SuperfluidIntermediaryAccountInfo;
    toSDK(message: SuperfluidIntermediaryAccountInfo): SuperfluidIntermediaryAccountInfoSDKType;
    fromAmino(object: SuperfluidIntermediaryAccountInfoAmino): SuperfluidIntermediaryAccountInfo;
    toAmino(message: SuperfluidIntermediaryAccountInfo): SuperfluidIntermediaryAccountInfoAmino;
    fromAminoMsg(object: SuperfluidIntermediaryAccountInfoAminoMsg): SuperfluidIntermediaryAccountInfo;
    toAminoMsg(message: SuperfluidIntermediaryAccountInfo): SuperfluidIntermediaryAccountInfoAminoMsg;
    fromProtoMsg(message: SuperfluidIntermediaryAccountInfoProtoMsg): SuperfluidIntermediaryAccountInfo;
    toProto(message: SuperfluidIntermediaryAccountInfo): Uint8Array;
    toProtoMsg(message: SuperfluidIntermediaryAccountInfo): SuperfluidIntermediaryAccountInfoProtoMsg;
};
export declare const AllIntermediaryAccountsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AllIntermediaryAccountsRequest;
    isSDK(o: any): o is AllIntermediaryAccountsRequestSDKType;
    isAmino(o: any): o is AllIntermediaryAccountsRequestAmino;
    encode(message: AllIntermediaryAccountsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AllIntermediaryAccountsRequest;
    fromJSON(object: any): AllIntermediaryAccountsRequest;
    toJSON(message: AllIntermediaryAccountsRequest): unknown;
    fromPartial(object: DeepPartial<AllIntermediaryAccountsRequest>): AllIntermediaryAccountsRequest;
    fromSDK(object: AllIntermediaryAccountsRequestSDKType): AllIntermediaryAccountsRequest;
    toSDK(message: AllIntermediaryAccountsRequest): AllIntermediaryAccountsRequestSDKType;
    fromAmino(object: AllIntermediaryAccountsRequestAmino): AllIntermediaryAccountsRequest;
    toAmino(message: AllIntermediaryAccountsRequest): AllIntermediaryAccountsRequestAmino;
    fromAminoMsg(object: AllIntermediaryAccountsRequestAminoMsg): AllIntermediaryAccountsRequest;
    toAminoMsg(message: AllIntermediaryAccountsRequest): AllIntermediaryAccountsRequestAminoMsg;
    fromProtoMsg(message: AllIntermediaryAccountsRequestProtoMsg): AllIntermediaryAccountsRequest;
    toProto(message: AllIntermediaryAccountsRequest): Uint8Array;
    toProtoMsg(message: AllIntermediaryAccountsRequest): AllIntermediaryAccountsRequestProtoMsg;
};
export declare const AllIntermediaryAccountsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AllIntermediaryAccountsResponse;
    isSDK(o: any): o is AllIntermediaryAccountsResponseSDKType;
    isAmino(o: any): o is AllIntermediaryAccountsResponseAmino;
    encode(message: AllIntermediaryAccountsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AllIntermediaryAccountsResponse;
    fromJSON(object: any): AllIntermediaryAccountsResponse;
    toJSON(message: AllIntermediaryAccountsResponse): unknown;
    fromPartial(object: DeepPartial<AllIntermediaryAccountsResponse>): AllIntermediaryAccountsResponse;
    fromSDK(object: AllIntermediaryAccountsResponseSDKType): AllIntermediaryAccountsResponse;
    toSDK(message: AllIntermediaryAccountsResponse): AllIntermediaryAccountsResponseSDKType;
    fromAmino(object: AllIntermediaryAccountsResponseAmino): AllIntermediaryAccountsResponse;
    toAmino(message: AllIntermediaryAccountsResponse): AllIntermediaryAccountsResponseAmino;
    fromAminoMsg(object: AllIntermediaryAccountsResponseAminoMsg): AllIntermediaryAccountsResponse;
    toAminoMsg(message: AllIntermediaryAccountsResponse): AllIntermediaryAccountsResponseAminoMsg;
    fromProtoMsg(message: AllIntermediaryAccountsResponseProtoMsg): AllIntermediaryAccountsResponse;
    toProto(message: AllIntermediaryAccountsResponse): Uint8Array;
    toProtoMsg(message: AllIntermediaryAccountsResponse): AllIntermediaryAccountsResponseProtoMsg;
};
export declare const ConnectedIntermediaryAccountRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ConnectedIntermediaryAccountRequest;
    isSDK(o: any): o is ConnectedIntermediaryAccountRequestSDKType;
    isAmino(o: any): o is ConnectedIntermediaryAccountRequestAmino;
    encode(message: ConnectedIntermediaryAccountRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ConnectedIntermediaryAccountRequest;
    fromJSON(object: any): ConnectedIntermediaryAccountRequest;
    toJSON(message: ConnectedIntermediaryAccountRequest): unknown;
    fromPartial(object: DeepPartial<ConnectedIntermediaryAccountRequest>): ConnectedIntermediaryAccountRequest;
    fromSDK(object: ConnectedIntermediaryAccountRequestSDKType): ConnectedIntermediaryAccountRequest;
    toSDK(message: ConnectedIntermediaryAccountRequest): ConnectedIntermediaryAccountRequestSDKType;
    fromAmino(object: ConnectedIntermediaryAccountRequestAmino): ConnectedIntermediaryAccountRequest;
    toAmino(message: ConnectedIntermediaryAccountRequest): ConnectedIntermediaryAccountRequestAmino;
    fromAminoMsg(object: ConnectedIntermediaryAccountRequestAminoMsg): ConnectedIntermediaryAccountRequest;
    toAminoMsg(message: ConnectedIntermediaryAccountRequest): ConnectedIntermediaryAccountRequestAminoMsg;
    fromProtoMsg(message: ConnectedIntermediaryAccountRequestProtoMsg): ConnectedIntermediaryAccountRequest;
    toProto(message: ConnectedIntermediaryAccountRequest): Uint8Array;
    toProtoMsg(message: ConnectedIntermediaryAccountRequest): ConnectedIntermediaryAccountRequestProtoMsg;
};
export declare const ConnectedIntermediaryAccountResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ConnectedIntermediaryAccountResponse;
    isSDK(o: any): o is ConnectedIntermediaryAccountResponseSDKType;
    isAmino(o: any): o is ConnectedIntermediaryAccountResponseAmino;
    encode(message: ConnectedIntermediaryAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ConnectedIntermediaryAccountResponse;
    fromJSON(object: any): ConnectedIntermediaryAccountResponse;
    toJSON(message: ConnectedIntermediaryAccountResponse): unknown;
    fromPartial(object: DeepPartial<ConnectedIntermediaryAccountResponse>): ConnectedIntermediaryAccountResponse;
    fromSDK(object: ConnectedIntermediaryAccountResponseSDKType): ConnectedIntermediaryAccountResponse;
    toSDK(message: ConnectedIntermediaryAccountResponse): ConnectedIntermediaryAccountResponseSDKType;
    fromAmino(object: ConnectedIntermediaryAccountResponseAmino): ConnectedIntermediaryAccountResponse;
    toAmino(message: ConnectedIntermediaryAccountResponse): ConnectedIntermediaryAccountResponseAmino;
    fromAminoMsg(object: ConnectedIntermediaryAccountResponseAminoMsg): ConnectedIntermediaryAccountResponse;
    toAminoMsg(message: ConnectedIntermediaryAccountResponse): ConnectedIntermediaryAccountResponseAminoMsg;
    fromProtoMsg(message: ConnectedIntermediaryAccountResponseProtoMsg): ConnectedIntermediaryAccountResponse;
    toProto(message: ConnectedIntermediaryAccountResponse): Uint8Array;
    toProtoMsg(message: ConnectedIntermediaryAccountResponse): ConnectedIntermediaryAccountResponseProtoMsg;
};
export declare const QueryTotalDelegationByValidatorForDenomRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryTotalDelegationByValidatorForDenomRequest;
    isSDK(o: any): o is QueryTotalDelegationByValidatorForDenomRequestSDKType;
    isAmino(o: any): o is QueryTotalDelegationByValidatorForDenomRequestAmino;
    encode(message: QueryTotalDelegationByValidatorForDenomRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalDelegationByValidatorForDenomRequest;
    fromJSON(object: any): QueryTotalDelegationByValidatorForDenomRequest;
    toJSON(message: QueryTotalDelegationByValidatorForDenomRequest): unknown;
    fromPartial(object: DeepPartial<QueryTotalDelegationByValidatorForDenomRequest>): QueryTotalDelegationByValidatorForDenomRequest;
    fromSDK(object: QueryTotalDelegationByValidatorForDenomRequestSDKType): QueryTotalDelegationByValidatorForDenomRequest;
    toSDK(message: QueryTotalDelegationByValidatorForDenomRequest): QueryTotalDelegationByValidatorForDenomRequestSDKType;
    fromAmino(object: QueryTotalDelegationByValidatorForDenomRequestAmino): QueryTotalDelegationByValidatorForDenomRequest;
    toAmino(message: QueryTotalDelegationByValidatorForDenomRequest): QueryTotalDelegationByValidatorForDenomRequestAmino;
    fromAminoMsg(object: QueryTotalDelegationByValidatorForDenomRequestAminoMsg): QueryTotalDelegationByValidatorForDenomRequest;
    toAminoMsg(message: QueryTotalDelegationByValidatorForDenomRequest): QueryTotalDelegationByValidatorForDenomRequestAminoMsg;
    fromProtoMsg(message: QueryTotalDelegationByValidatorForDenomRequestProtoMsg): QueryTotalDelegationByValidatorForDenomRequest;
    toProto(message: QueryTotalDelegationByValidatorForDenomRequest): Uint8Array;
    toProtoMsg(message: QueryTotalDelegationByValidatorForDenomRequest): QueryTotalDelegationByValidatorForDenomRequestProtoMsg;
};
export declare const QueryTotalDelegationByValidatorForDenomResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryTotalDelegationByValidatorForDenomResponse;
    isSDK(o: any): o is QueryTotalDelegationByValidatorForDenomResponseSDKType;
    isAmino(o: any): o is QueryTotalDelegationByValidatorForDenomResponseAmino;
    encode(message: QueryTotalDelegationByValidatorForDenomResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalDelegationByValidatorForDenomResponse;
    fromJSON(object: any): QueryTotalDelegationByValidatorForDenomResponse;
    toJSON(message: QueryTotalDelegationByValidatorForDenomResponse): unknown;
    fromPartial(object: DeepPartial<QueryTotalDelegationByValidatorForDenomResponse>): QueryTotalDelegationByValidatorForDenomResponse;
    fromSDK(object: QueryTotalDelegationByValidatorForDenomResponseSDKType): QueryTotalDelegationByValidatorForDenomResponse;
    toSDK(message: QueryTotalDelegationByValidatorForDenomResponse): QueryTotalDelegationByValidatorForDenomResponseSDKType;
    fromAmino(object: QueryTotalDelegationByValidatorForDenomResponseAmino): QueryTotalDelegationByValidatorForDenomResponse;
    toAmino(message: QueryTotalDelegationByValidatorForDenomResponse): QueryTotalDelegationByValidatorForDenomResponseAmino;
    fromAminoMsg(object: QueryTotalDelegationByValidatorForDenomResponseAminoMsg): QueryTotalDelegationByValidatorForDenomResponse;
    toAminoMsg(message: QueryTotalDelegationByValidatorForDenomResponse): QueryTotalDelegationByValidatorForDenomResponseAminoMsg;
    fromProtoMsg(message: QueryTotalDelegationByValidatorForDenomResponseProtoMsg): QueryTotalDelegationByValidatorForDenomResponse;
    toProto(message: QueryTotalDelegationByValidatorForDenomResponse): Uint8Array;
    toProtoMsg(message: QueryTotalDelegationByValidatorForDenomResponse): QueryTotalDelegationByValidatorForDenomResponseProtoMsg;
};
export declare const Delegations: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Delegations;
    isSDK(o: any): o is DelegationsSDKType;
    isAmino(o: any): o is DelegationsAmino;
    encode(message: Delegations, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Delegations;
    fromJSON(object: any): Delegations;
    toJSON(message: Delegations): unknown;
    fromPartial(object: DeepPartial<Delegations>): Delegations;
    fromSDK(object: DelegationsSDKType): Delegations;
    toSDK(message: Delegations): DelegationsSDKType;
    fromAmino(object: DelegationsAmino): Delegations;
    toAmino(message: Delegations): DelegationsAmino;
    fromAminoMsg(object: DelegationsAminoMsg): Delegations;
    toAminoMsg(message: Delegations): DelegationsAminoMsg;
    fromProtoMsg(message: DelegationsProtoMsg): Delegations;
    toProto(message: Delegations): Uint8Array;
    toProtoMsg(message: Delegations): DelegationsProtoMsg;
};
export declare const TotalSuperfluidDelegationsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is TotalSuperfluidDelegationsRequest;
    isSDK(o: any): o is TotalSuperfluidDelegationsRequestSDKType;
    isAmino(o: any): o is TotalSuperfluidDelegationsRequestAmino;
    encode(_: TotalSuperfluidDelegationsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TotalSuperfluidDelegationsRequest;
    fromJSON(_: any): TotalSuperfluidDelegationsRequest;
    toJSON(_: TotalSuperfluidDelegationsRequest): unknown;
    fromPartial(_: DeepPartial<TotalSuperfluidDelegationsRequest>): TotalSuperfluidDelegationsRequest;
    fromSDK(_: TotalSuperfluidDelegationsRequestSDKType): TotalSuperfluidDelegationsRequest;
    toSDK(_: TotalSuperfluidDelegationsRequest): TotalSuperfluidDelegationsRequestSDKType;
    fromAmino(_: TotalSuperfluidDelegationsRequestAmino): TotalSuperfluidDelegationsRequest;
    toAmino(_: TotalSuperfluidDelegationsRequest): TotalSuperfluidDelegationsRequestAmino;
    fromAminoMsg(object: TotalSuperfluidDelegationsRequestAminoMsg): TotalSuperfluidDelegationsRequest;
    toAminoMsg(message: TotalSuperfluidDelegationsRequest): TotalSuperfluidDelegationsRequestAminoMsg;
    fromProtoMsg(message: TotalSuperfluidDelegationsRequestProtoMsg): TotalSuperfluidDelegationsRequest;
    toProto(message: TotalSuperfluidDelegationsRequest): Uint8Array;
    toProtoMsg(message: TotalSuperfluidDelegationsRequest): TotalSuperfluidDelegationsRequestProtoMsg;
};
export declare const TotalSuperfluidDelegationsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is TotalSuperfluidDelegationsResponse;
    isSDK(o: any): o is TotalSuperfluidDelegationsResponseSDKType;
    isAmino(o: any): o is TotalSuperfluidDelegationsResponseAmino;
    encode(message: TotalSuperfluidDelegationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TotalSuperfluidDelegationsResponse;
    fromJSON(object: any): TotalSuperfluidDelegationsResponse;
    toJSON(message: TotalSuperfluidDelegationsResponse): unknown;
    fromPartial(object: DeepPartial<TotalSuperfluidDelegationsResponse>): TotalSuperfluidDelegationsResponse;
    fromSDK(object: TotalSuperfluidDelegationsResponseSDKType): TotalSuperfluidDelegationsResponse;
    toSDK(message: TotalSuperfluidDelegationsResponse): TotalSuperfluidDelegationsResponseSDKType;
    fromAmino(object: TotalSuperfluidDelegationsResponseAmino): TotalSuperfluidDelegationsResponse;
    toAmino(message: TotalSuperfluidDelegationsResponse): TotalSuperfluidDelegationsResponseAmino;
    fromAminoMsg(object: TotalSuperfluidDelegationsResponseAminoMsg): TotalSuperfluidDelegationsResponse;
    toAminoMsg(message: TotalSuperfluidDelegationsResponse): TotalSuperfluidDelegationsResponseAminoMsg;
    fromProtoMsg(message: TotalSuperfluidDelegationsResponseProtoMsg): TotalSuperfluidDelegationsResponse;
    toProto(message: TotalSuperfluidDelegationsResponse): Uint8Array;
    toProtoMsg(message: TotalSuperfluidDelegationsResponse): TotalSuperfluidDelegationsResponseProtoMsg;
};
export declare const SuperfluidDelegationAmountRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is SuperfluidDelegationAmountRequest;
    isSDK(o: any): o is SuperfluidDelegationAmountRequestSDKType;
    isAmino(o: any): o is SuperfluidDelegationAmountRequestAmino;
    encode(message: SuperfluidDelegationAmountRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidDelegationAmountRequest;
    fromJSON(object: any): SuperfluidDelegationAmountRequest;
    toJSON(message: SuperfluidDelegationAmountRequest): unknown;
    fromPartial(object: DeepPartial<SuperfluidDelegationAmountRequest>): SuperfluidDelegationAmountRequest;
    fromSDK(object: SuperfluidDelegationAmountRequestSDKType): SuperfluidDelegationAmountRequest;
    toSDK(message: SuperfluidDelegationAmountRequest): SuperfluidDelegationAmountRequestSDKType;
    fromAmino(object: SuperfluidDelegationAmountRequestAmino): SuperfluidDelegationAmountRequest;
    toAmino(message: SuperfluidDelegationAmountRequest): SuperfluidDelegationAmountRequestAmino;
    fromAminoMsg(object: SuperfluidDelegationAmountRequestAminoMsg): SuperfluidDelegationAmountRequest;
    toAminoMsg(message: SuperfluidDelegationAmountRequest): SuperfluidDelegationAmountRequestAminoMsg;
    fromProtoMsg(message: SuperfluidDelegationAmountRequestProtoMsg): SuperfluidDelegationAmountRequest;
    toProto(message: SuperfluidDelegationAmountRequest): Uint8Array;
    toProtoMsg(message: SuperfluidDelegationAmountRequest): SuperfluidDelegationAmountRequestProtoMsg;
};
export declare const SuperfluidDelegationAmountResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is SuperfluidDelegationAmountResponse;
    isSDK(o: any): o is SuperfluidDelegationAmountResponseSDKType;
    isAmino(o: any): o is SuperfluidDelegationAmountResponseAmino;
    encode(message: SuperfluidDelegationAmountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidDelegationAmountResponse;
    fromJSON(object: any): SuperfluidDelegationAmountResponse;
    toJSON(message: SuperfluidDelegationAmountResponse): unknown;
    fromPartial(object: DeepPartial<SuperfluidDelegationAmountResponse>): SuperfluidDelegationAmountResponse;
    fromSDK(object: SuperfluidDelegationAmountResponseSDKType): SuperfluidDelegationAmountResponse;
    toSDK(message: SuperfluidDelegationAmountResponse): SuperfluidDelegationAmountResponseSDKType;
    fromAmino(object: SuperfluidDelegationAmountResponseAmino): SuperfluidDelegationAmountResponse;
    toAmino(message: SuperfluidDelegationAmountResponse): SuperfluidDelegationAmountResponseAmino;
    fromAminoMsg(object: SuperfluidDelegationAmountResponseAminoMsg): SuperfluidDelegationAmountResponse;
    toAminoMsg(message: SuperfluidDelegationAmountResponse): SuperfluidDelegationAmountResponseAminoMsg;
    fromProtoMsg(message: SuperfluidDelegationAmountResponseProtoMsg): SuperfluidDelegationAmountResponse;
    toProto(message: SuperfluidDelegationAmountResponse): Uint8Array;
    toProtoMsg(message: SuperfluidDelegationAmountResponse): SuperfluidDelegationAmountResponseProtoMsg;
};
export declare const SuperfluidDelegationsByDelegatorRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is SuperfluidDelegationsByDelegatorRequest;
    isSDK(o: any): o is SuperfluidDelegationsByDelegatorRequestSDKType;
    isAmino(o: any): o is SuperfluidDelegationsByDelegatorRequestAmino;
    encode(message: SuperfluidDelegationsByDelegatorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidDelegationsByDelegatorRequest;
    fromJSON(object: any): SuperfluidDelegationsByDelegatorRequest;
    toJSON(message: SuperfluidDelegationsByDelegatorRequest): unknown;
    fromPartial(object: DeepPartial<SuperfluidDelegationsByDelegatorRequest>): SuperfluidDelegationsByDelegatorRequest;
    fromSDK(object: SuperfluidDelegationsByDelegatorRequestSDKType): SuperfluidDelegationsByDelegatorRequest;
    toSDK(message: SuperfluidDelegationsByDelegatorRequest): SuperfluidDelegationsByDelegatorRequestSDKType;
    fromAmino(object: SuperfluidDelegationsByDelegatorRequestAmino): SuperfluidDelegationsByDelegatorRequest;
    toAmino(message: SuperfluidDelegationsByDelegatorRequest): SuperfluidDelegationsByDelegatorRequestAmino;
    fromAminoMsg(object: SuperfluidDelegationsByDelegatorRequestAminoMsg): SuperfluidDelegationsByDelegatorRequest;
    toAminoMsg(message: SuperfluidDelegationsByDelegatorRequest): SuperfluidDelegationsByDelegatorRequestAminoMsg;
    fromProtoMsg(message: SuperfluidDelegationsByDelegatorRequestProtoMsg): SuperfluidDelegationsByDelegatorRequest;
    toProto(message: SuperfluidDelegationsByDelegatorRequest): Uint8Array;
    toProtoMsg(message: SuperfluidDelegationsByDelegatorRequest): SuperfluidDelegationsByDelegatorRequestProtoMsg;
};
export declare const SuperfluidDelegationsByDelegatorResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is SuperfluidDelegationsByDelegatorResponse;
    isSDK(o: any): o is SuperfluidDelegationsByDelegatorResponseSDKType;
    isAmino(o: any): o is SuperfluidDelegationsByDelegatorResponseAmino;
    encode(message: SuperfluidDelegationsByDelegatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidDelegationsByDelegatorResponse;
    fromJSON(object: any): SuperfluidDelegationsByDelegatorResponse;
    toJSON(message: SuperfluidDelegationsByDelegatorResponse): unknown;
    fromPartial(object: DeepPartial<SuperfluidDelegationsByDelegatorResponse>): SuperfluidDelegationsByDelegatorResponse;
    fromSDK(object: SuperfluidDelegationsByDelegatorResponseSDKType): SuperfluidDelegationsByDelegatorResponse;
    toSDK(message: SuperfluidDelegationsByDelegatorResponse): SuperfluidDelegationsByDelegatorResponseSDKType;
    fromAmino(object: SuperfluidDelegationsByDelegatorResponseAmino): SuperfluidDelegationsByDelegatorResponse;
    toAmino(message: SuperfluidDelegationsByDelegatorResponse): SuperfluidDelegationsByDelegatorResponseAmino;
    fromAminoMsg(object: SuperfluidDelegationsByDelegatorResponseAminoMsg): SuperfluidDelegationsByDelegatorResponse;
    toAminoMsg(message: SuperfluidDelegationsByDelegatorResponse): SuperfluidDelegationsByDelegatorResponseAminoMsg;
    fromProtoMsg(message: SuperfluidDelegationsByDelegatorResponseProtoMsg): SuperfluidDelegationsByDelegatorResponse;
    toProto(message: SuperfluidDelegationsByDelegatorResponse): Uint8Array;
    toProtoMsg(message: SuperfluidDelegationsByDelegatorResponse): SuperfluidDelegationsByDelegatorResponseProtoMsg;
};
export declare const SuperfluidUndelegationsByDelegatorRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is SuperfluidUndelegationsByDelegatorRequest;
    isSDK(o: any): o is SuperfluidUndelegationsByDelegatorRequestSDKType;
    isAmino(o: any): o is SuperfluidUndelegationsByDelegatorRequestAmino;
    encode(message: SuperfluidUndelegationsByDelegatorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidUndelegationsByDelegatorRequest;
    fromJSON(object: any): SuperfluidUndelegationsByDelegatorRequest;
    toJSON(message: SuperfluidUndelegationsByDelegatorRequest): unknown;
    fromPartial(object: DeepPartial<SuperfluidUndelegationsByDelegatorRequest>): SuperfluidUndelegationsByDelegatorRequest;
    fromSDK(object: SuperfluidUndelegationsByDelegatorRequestSDKType): SuperfluidUndelegationsByDelegatorRequest;
    toSDK(message: SuperfluidUndelegationsByDelegatorRequest): SuperfluidUndelegationsByDelegatorRequestSDKType;
    fromAmino(object: SuperfluidUndelegationsByDelegatorRequestAmino): SuperfluidUndelegationsByDelegatorRequest;
    toAmino(message: SuperfluidUndelegationsByDelegatorRequest): SuperfluidUndelegationsByDelegatorRequestAmino;
    fromAminoMsg(object: SuperfluidUndelegationsByDelegatorRequestAminoMsg): SuperfluidUndelegationsByDelegatorRequest;
    toAminoMsg(message: SuperfluidUndelegationsByDelegatorRequest): SuperfluidUndelegationsByDelegatorRequestAminoMsg;
    fromProtoMsg(message: SuperfluidUndelegationsByDelegatorRequestProtoMsg): SuperfluidUndelegationsByDelegatorRequest;
    toProto(message: SuperfluidUndelegationsByDelegatorRequest): Uint8Array;
    toProtoMsg(message: SuperfluidUndelegationsByDelegatorRequest): SuperfluidUndelegationsByDelegatorRequestProtoMsg;
};
export declare const SuperfluidUndelegationsByDelegatorResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is SuperfluidUndelegationsByDelegatorResponse;
    isSDK(o: any): o is SuperfluidUndelegationsByDelegatorResponseSDKType;
    isAmino(o: any): o is SuperfluidUndelegationsByDelegatorResponseAmino;
    encode(message: SuperfluidUndelegationsByDelegatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidUndelegationsByDelegatorResponse;
    fromJSON(object: any): SuperfluidUndelegationsByDelegatorResponse;
    toJSON(message: SuperfluidUndelegationsByDelegatorResponse): unknown;
    fromPartial(object: DeepPartial<SuperfluidUndelegationsByDelegatorResponse>): SuperfluidUndelegationsByDelegatorResponse;
    fromSDK(object: SuperfluidUndelegationsByDelegatorResponseSDKType): SuperfluidUndelegationsByDelegatorResponse;
    toSDK(message: SuperfluidUndelegationsByDelegatorResponse): SuperfluidUndelegationsByDelegatorResponseSDKType;
    fromAmino(object: SuperfluidUndelegationsByDelegatorResponseAmino): SuperfluidUndelegationsByDelegatorResponse;
    toAmino(message: SuperfluidUndelegationsByDelegatorResponse): SuperfluidUndelegationsByDelegatorResponseAmino;
    fromAminoMsg(object: SuperfluidUndelegationsByDelegatorResponseAminoMsg): SuperfluidUndelegationsByDelegatorResponse;
    toAminoMsg(message: SuperfluidUndelegationsByDelegatorResponse): SuperfluidUndelegationsByDelegatorResponseAminoMsg;
    fromProtoMsg(message: SuperfluidUndelegationsByDelegatorResponseProtoMsg): SuperfluidUndelegationsByDelegatorResponse;
    toProto(message: SuperfluidUndelegationsByDelegatorResponse): Uint8Array;
    toProtoMsg(message: SuperfluidUndelegationsByDelegatorResponse): SuperfluidUndelegationsByDelegatorResponseProtoMsg;
};
export declare const SuperfluidDelegationsByValidatorDenomRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is SuperfluidDelegationsByValidatorDenomRequest;
    isSDK(o: any): o is SuperfluidDelegationsByValidatorDenomRequestSDKType;
    isAmino(o: any): o is SuperfluidDelegationsByValidatorDenomRequestAmino;
    encode(message: SuperfluidDelegationsByValidatorDenomRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidDelegationsByValidatorDenomRequest;
    fromJSON(object: any): SuperfluidDelegationsByValidatorDenomRequest;
    toJSON(message: SuperfluidDelegationsByValidatorDenomRequest): unknown;
    fromPartial(object: DeepPartial<SuperfluidDelegationsByValidatorDenomRequest>): SuperfluidDelegationsByValidatorDenomRequest;
    fromSDK(object: SuperfluidDelegationsByValidatorDenomRequestSDKType): SuperfluidDelegationsByValidatorDenomRequest;
    toSDK(message: SuperfluidDelegationsByValidatorDenomRequest): SuperfluidDelegationsByValidatorDenomRequestSDKType;
    fromAmino(object: SuperfluidDelegationsByValidatorDenomRequestAmino): SuperfluidDelegationsByValidatorDenomRequest;
    toAmino(message: SuperfluidDelegationsByValidatorDenomRequest): SuperfluidDelegationsByValidatorDenomRequestAmino;
    fromAminoMsg(object: SuperfluidDelegationsByValidatorDenomRequestAminoMsg): SuperfluidDelegationsByValidatorDenomRequest;
    toAminoMsg(message: SuperfluidDelegationsByValidatorDenomRequest): SuperfluidDelegationsByValidatorDenomRequestAminoMsg;
    fromProtoMsg(message: SuperfluidDelegationsByValidatorDenomRequestProtoMsg): SuperfluidDelegationsByValidatorDenomRequest;
    toProto(message: SuperfluidDelegationsByValidatorDenomRequest): Uint8Array;
    toProtoMsg(message: SuperfluidDelegationsByValidatorDenomRequest): SuperfluidDelegationsByValidatorDenomRequestProtoMsg;
};
export declare const SuperfluidDelegationsByValidatorDenomResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is SuperfluidDelegationsByValidatorDenomResponse;
    isSDK(o: any): o is SuperfluidDelegationsByValidatorDenomResponseSDKType;
    isAmino(o: any): o is SuperfluidDelegationsByValidatorDenomResponseAmino;
    encode(message: SuperfluidDelegationsByValidatorDenomResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidDelegationsByValidatorDenomResponse;
    fromJSON(object: any): SuperfluidDelegationsByValidatorDenomResponse;
    toJSON(message: SuperfluidDelegationsByValidatorDenomResponse): unknown;
    fromPartial(object: DeepPartial<SuperfluidDelegationsByValidatorDenomResponse>): SuperfluidDelegationsByValidatorDenomResponse;
    fromSDK(object: SuperfluidDelegationsByValidatorDenomResponseSDKType): SuperfluidDelegationsByValidatorDenomResponse;
    toSDK(message: SuperfluidDelegationsByValidatorDenomResponse): SuperfluidDelegationsByValidatorDenomResponseSDKType;
    fromAmino(object: SuperfluidDelegationsByValidatorDenomResponseAmino): SuperfluidDelegationsByValidatorDenomResponse;
    toAmino(message: SuperfluidDelegationsByValidatorDenomResponse): SuperfluidDelegationsByValidatorDenomResponseAmino;
    fromAminoMsg(object: SuperfluidDelegationsByValidatorDenomResponseAminoMsg): SuperfluidDelegationsByValidatorDenomResponse;
    toAminoMsg(message: SuperfluidDelegationsByValidatorDenomResponse): SuperfluidDelegationsByValidatorDenomResponseAminoMsg;
    fromProtoMsg(message: SuperfluidDelegationsByValidatorDenomResponseProtoMsg): SuperfluidDelegationsByValidatorDenomResponse;
    toProto(message: SuperfluidDelegationsByValidatorDenomResponse): Uint8Array;
    toProtoMsg(message: SuperfluidDelegationsByValidatorDenomResponse): SuperfluidDelegationsByValidatorDenomResponseProtoMsg;
};
export declare const EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
    isSDK(o: any): o is EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType;
    isAmino(o: any): o is EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino;
    encode(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
    fromJSON(object: any): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
    toJSON(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): unknown;
    fromPartial(object: DeepPartial<EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
    fromSDK(object: EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
    toSDK(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType;
    fromAmino(object: EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
    toAmino(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino;
    fromAminoMsg(object: EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAminoMsg): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
    toAminoMsg(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAminoMsg;
    fromProtoMsg(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequestProtoMsg): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
    toProto(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Uint8Array;
    toProtoMsg(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): EstimateSuperfluidDelegatedAmountByValidatorDenomRequestProtoMsg;
};
export declare const EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
    isSDK(o: any): o is EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType;
    isAmino(o: any): o is EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino;
    encode(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
    fromJSON(object: any): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
    toJSON(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): unknown;
    fromPartial(object: DeepPartial<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
    fromSDK(object: EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
    toSDK(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType;
    fromAmino(object: EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
    toAmino(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino;
    fromAminoMsg(object: EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAminoMsg): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
    toAminoMsg(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAminoMsg;
    fromProtoMsg(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponseProtoMsg): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
    toProto(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): Uint8Array;
    toProtoMsg(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): EstimateSuperfluidDelegatedAmountByValidatorDenomResponseProtoMsg;
};
export declare const QueryTotalDelegationByDelegatorRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryTotalDelegationByDelegatorRequest;
    isSDK(o: any): o is QueryTotalDelegationByDelegatorRequestSDKType;
    isAmino(o: any): o is QueryTotalDelegationByDelegatorRequestAmino;
    encode(message: QueryTotalDelegationByDelegatorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalDelegationByDelegatorRequest;
    fromJSON(object: any): QueryTotalDelegationByDelegatorRequest;
    toJSON(message: QueryTotalDelegationByDelegatorRequest): unknown;
    fromPartial(object: DeepPartial<QueryTotalDelegationByDelegatorRequest>): QueryTotalDelegationByDelegatorRequest;
    fromSDK(object: QueryTotalDelegationByDelegatorRequestSDKType): QueryTotalDelegationByDelegatorRequest;
    toSDK(message: QueryTotalDelegationByDelegatorRequest): QueryTotalDelegationByDelegatorRequestSDKType;
    fromAmino(object: QueryTotalDelegationByDelegatorRequestAmino): QueryTotalDelegationByDelegatorRequest;
    toAmino(message: QueryTotalDelegationByDelegatorRequest): QueryTotalDelegationByDelegatorRequestAmino;
    fromAminoMsg(object: QueryTotalDelegationByDelegatorRequestAminoMsg): QueryTotalDelegationByDelegatorRequest;
    toAminoMsg(message: QueryTotalDelegationByDelegatorRequest): QueryTotalDelegationByDelegatorRequestAminoMsg;
    fromProtoMsg(message: QueryTotalDelegationByDelegatorRequestProtoMsg): QueryTotalDelegationByDelegatorRequest;
    toProto(message: QueryTotalDelegationByDelegatorRequest): Uint8Array;
    toProtoMsg(message: QueryTotalDelegationByDelegatorRequest): QueryTotalDelegationByDelegatorRequestProtoMsg;
};
export declare const QueryTotalDelegationByDelegatorResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryTotalDelegationByDelegatorResponse;
    isSDK(o: any): o is QueryTotalDelegationByDelegatorResponseSDKType;
    isAmino(o: any): o is QueryTotalDelegationByDelegatorResponseAmino;
    encode(message: QueryTotalDelegationByDelegatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalDelegationByDelegatorResponse;
    fromJSON(object: any): QueryTotalDelegationByDelegatorResponse;
    toJSON(message: QueryTotalDelegationByDelegatorResponse): unknown;
    fromPartial(object: DeepPartial<QueryTotalDelegationByDelegatorResponse>): QueryTotalDelegationByDelegatorResponse;
    fromSDK(object: QueryTotalDelegationByDelegatorResponseSDKType): QueryTotalDelegationByDelegatorResponse;
    toSDK(message: QueryTotalDelegationByDelegatorResponse): QueryTotalDelegationByDelegatorResponseSDKType;
    fromAmino(object: QueryTotalDelegationByDelegatorResponseAmino): QueryTotalDelegationByDelegatorResponse;
    toAmino(message: QueryTotalDelegationByDelegatorResponse): QueryTotalDelegationByDelegatorResponseAmino;
    fromAminoMsg(object: QueryTotalDelegationByDelegatorResponseAminoMsg): QueryTotalDelegationByDelegatorResponse;
    toAminoMsg(message: QueryTotalDelegationByDelegatorResponse): QueryTotalDelegationByDelegatorResponseAminoMsg;
    fromProtoMsg(message: QueryTotalDelegationByDelegatorResponseProtoMsg): QueryTotalDelegationByDelegatorResponse;
    toProto(message: QueryTotalDelegationByDelegatorResponse): Uint8Array;
    toProtoMsg(message: QueryTotalDelegationByDelegatorResponse): QueryTotalDelegationByDelegatorResponseProtoMsg;
};
export declare const QueryUnpoolWhitelistRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryUnpoolWhitelistRequest;
    isSDK(o: any): o is QueryUnpoolWhitelistRequestSDKType;
    isAmino(o: any): o is QueryUnpoolWhitelistRequestAmino;
    encode(_: QueryUnpoolWhitelistRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUnpoolWhitelistRequest;
    fromJSON(_: any): QueryUnpoolWhitelistRequest;
    toJSON(_: QueryUnpoolWhitelistRequest): unknown;
    fromPartial(_: DeepPartial<QueryUnpoolWhitelistRequest>): QueryUnpoolWhitelistRequest;
    fromSDK(_: QueryUnpoolWhitelistRequestSDKType): QueryUnpoolWhitelistRequest;
    toSDK(_: QueryUnpoolWhitelistRequest): QueryUnpoolWhitelistRequestSDKType;
    fromAmino(_: QueryUnpoolWhitelistRequestAmino): QueryUnpoolWhitelistRequest;
    toAmino(_: QueryUnpoolWhitelistRequest): QueryUnpoolWhitelistRequestAmino;
    fromAminoMsg(object: QueryUnpoolWhitelistRequestAminoMsg): QueryUnpoolWhitelistRequest;
    toAminoMsg(message: QueryUnpoolWhitelistRequest): QueryUnpoolWhitelistRequestAminoMsg;
    fromProtoMsg(message: QueryUnpoolWhitelistRequestProtoMsg): QueryUnpoolWhitelistRequest;
    toProto(message: QueryUnpoolWhitelistRequest): Uint8Array;
    toProtoMsg(message: QueryUnpoolWhitelistRequest): QueryUnpoolWhitelistRequestProtoMsg;
};
export declare const QueryUnpoolWhitelistResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryUnpoolWhitelistResponse;
    isSDK(o: any): o is QueryUnpoolWhitelistResponseSDKType;
    isAmino(o: any): o is QueryUnpoolWhitelistResponseAmino;
    encode(message: QueryUnpoolWhitelistResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUnpoolWhitelistResponse;
    fromJSON(object: any): QueryUnpoolWhitelistResponse;
    toJSON(message: QueryUnpoolWhitelistResponse): unknown;
    fromPartial(object: DeepPartial<QueryUnpoolWhitelistResponse>): QueryUnpoolWhitelistResponse;
    fromSDK(object: QueryUnpoolWhitelistResponseSDKType): QueryUnpoolWhitelistResponse;
    toSDK(message: QueryUnpoolWhitelistResponse): QueryUnpoolWhitelistResponseSDKType;
    fromAmino(object: QueryUnpoolWhitelistResponseAmino): QueryUnpoolWhitelistResponse;
    toAmino(message: QueryUnpoolWhitelistResponse): QueryUnpoolWhitelistResponseAmino;
    fromAminoMsg(object: QueryUnpoolWhitelistResponseAminoMsg): QueryUnpoolWhitelistResponse;
    toAminoMsg(message: QueryUnpoolWhitelistResponse): QueryUnpoolWhitelistResponseAminoMsg;
    fromProtoMsg(message: QueryUnpoolWhitelistResponseProtoMsg): QueryUnpoolWhitelistResponse;
    toProto(message: QueryUnpoolWhitelistResponse): Uint8Array;
    toProtoMsg(message: QueryUnpoolWhitelistResponse): QueryUnpoolWhitelistResponseProtoMsg;
};
