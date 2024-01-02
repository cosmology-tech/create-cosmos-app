import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockAmino, PeriodLockSDKType, SyntheticLock, SyntheticLockAmino, SyntheticLockSDKType } from "./lock";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
export interface ModuleBalanceRequest {
}
export interface ModuleBalanceRequestProtoMsg {
    typeUrl: "/osmosis.lockup.ModuleBalanceRequest";
    value: Uint8Array;
}
export interface ModuleBalanceRequestAmino {
}
export interface ModuleBalanceRequestAminoMsg {
    type: "osmosis/lockup/module-balance-request";
    value: ModuleBalanceRequestAmino;
}
export interface ModuleBalanceRequestSDKType {
}
export interface ModuleBalanceResponse {
    coins: Coin[];
}
export interface ModuleBalanceResponseProtoMsg {
    typeUrl: "/osmosis.lockup.ModuleBalanceResponse";
    value: Uint8Array;
}
export interface ModuleBalanceResponseAmino {
    coins?: CoinAmino[];
}
export interface ModuleBalanceResponseAminoMsg {
    type: "osmosis/lockup/module-balance-response";
    value: ModuleBalanceResponseAmino;
}
export interface ModuleBalanceResponseSDKType {
    coins: CoinSDKType[];
}
export interface ModuleLockedAmountRequest {
}
export interface ModuleLockedAmountRequestProtoMsg {
    typeUrl: "/osmosis.lockup.ModuleLockedAmountRequest";
    value: Uint8Array;
}
export interface ModuleLockedAmountRequestAmino {
}
export interface ModuleLockedAmountRequestAminoMsg {
    type: "osmosis/lockup/module-locked-amount-request";
    value: ModuleLockedAmountRequestAmino;
}
export interface ModuleLockedAmountRequestSDKType {
}
export interface ModuleLockedAmountResponse {
    coins: Coin[];
}
export interface ModuleLockedAmountResponseProtoMsg {
    typeUrl: "/osmosis.lockup.ModuleLockedAmountResponse";
    value: Uint8Array;
}
export interface ModuleLockedAmountResponseAmino {
    coins?: CoinAmino[];
}
export interface ModuleLockedAmountResponseAminoMsg {
    type: "osmosis/lockup/module-locked-amount-response";
    value: ModuleLockedAmountResponseAmino;
}
export interface ModuleLockedAmountResponseSDKType {
    coins: CoinSDKType[];
}
export interface AccountUnlockableCoinsRequest {
    owner: string;
}
export interface AccountUnlockableCoinsRequestProtoMsg {
    typeUrl: "/osmosis.lockup.AccountUnlockableCoinsRequest";
    value: Uint8Array;
}
export interface AccountUnlockableCoinsRequestAmino {
    owner?: string;
}
export interface AccountUnlockableCoinsRequestAminoMsg {
    type: "osmosis/lockup/account-unlockable-coins-request";
    value: AccountUnlockableCoinsRequestAmino;
}
export interface AccountUnlockableCoinsRequestSDKType {
    owner: string;
}
export interface AccountUnlockableCoinsResponse {
    coins: Coin[];
}
export interface AccountUnlockableCoinsResponseProtoMsg {
    typeUrl: "/osmosis.lockup.AccountUnlockableCoinsResponse";
    value: Uint8Array;
}
export interface AccountUnlockableCoinsResponseAmino {
    coins?: CoinAmino[];
}
export interface AccountUnlockableCoinsResponseAminoMsg {
    type: "osmosis/lockup/account-unlockable-coins-response";
    value: AccountUnlockableCoinsResponseAmino;
}
export interface AccountUnlockableCoinsResponseSDKType {
    coins: CoinSDKType[];
}
export interface AccountUnlockingCoinsRequest {
    owner: string;
}
export interface AccountUnlockingCoinsRequestProtoMsg {
    typeUrl: "/osmosis.lockup.AccountUnlockingCoinsRequest";
    value: Uint8Array;
}
export interface AccountUnlockingCoinsRequestAmino {
    owner?: string;
}
export interface AccountUnlockingCoinsRequestAminoMsg {
    type: "osmosis/lockup/account-unlocking-coins-request";
    value: AccountUnlockingCoinsRequestAmino;
}
export interface AccountUnlockingCoinsRequestSDKType {
    owner: string;
}
export interface AccountUnlockingCoinsResponse {
    coins: Coin[];
}
export interface AccountUnlockingCoinsResponseProtoMsg {
    typeUrl: "/osmosis.lockup.AccountUnlockingCoinsResponse";
    value: Uint8Array;
}
export interface AccountUnlockingCoinsResponseAmino {
    coins?: CoinAmino[];
}
export interface AccountUnlockingCoinsResponseAminoMsg {
    type: "osmosis/lockup/account-unlocking-coins-response";
    value: AccountUnlockingCoinsResponseAmino;
}
export interface AccountUnlockingCoinsResponseSDKType {
    coins: CoinSDKType[];
}
export interface AccountLockedCoinsRequest {
    owner: string;
}
export interface AccountLockedCoinsRequestProtoMsg {
    typeUrl: "/osmosis.lockup.AccountLockedCoinsRequest";
    value: Uint8Array;
}
export interface AccountLockedCoinsRequestAmino {
    owner?: string;
}
export interface AccountLockedCoinsRequestAminoMsg {
    type: "osmosis/lockup/account-locked-coins-request";
    value: AccountLockedCoinsRequestAmino;
}
export interface AccountLockedCoinsRequestSDKType {
    owner: string;
}
export interface AccountLockedCoinsResponse {
    coins: Coin[];
}
export interface AccountLockedCoinsResponseProtoMsg {
    typeUrl: "/osmosis.lockup.AccountLockedCoinsResponse";
    value: Uint8Array;
}
export interface AccountLockedCoinsResponseAmino {
    coins?: CoinAmino[];
}
export interface AccountLockedCoinsResponseAminoMsg {
    type: "osmosis/lockup/account-locked-coins-response";
    value: AccountLockedCoinsResponseAmino;
}
export interface AccountLockedCoinsResponseSDKType {
    coins: CoinSDKType[];
}
export interface AccountLockedPastTimeRequest {
    owner: string;
    timestamp: Date | undefined;
}
export interface AccountLockedPastTimeRequestProtoMsg {
    typeUrl: "/osmosis.lockup.AccountLockedPastTimeRequest";
    value: Uint8Array;
}
export interface AccountLockedPastTimeRequestAmino {
    owner?: string;
    timestamp?: string | undefined;
}
export interface AccountLockedPastTimeRequestAminoMsg {
    type: "osmosis/lockup/account-locked-past-time-request";
    value: AccountLockedPastTimeRequestAmino;
}
export interface AccountLockedPastTimeRequestSDKType {
    owner: string;
    timestamp: Date | undefined;
}
export interface AccountLockedPastTimeResponse {
    locks: PeriodLock[];
}
export interface AccountLockedPastTimeResponseProtoMsg {
    typeUrl: "/osmosis.lockup.AccountLockedPastTimeResponse";
    value: Uint8Array;
}
export interface AccountLockedPastTimeResponseAmino {
    locks?: PeriodLockAmino[];
}
export interface AccountLockedPastTimeResponseAminoMsg {
    type: "osmosis/lockup/account-locked-past-time-response";
    value: AccountLockedPastTimeResponseAmino;
}
export interface AccountLockedPastTimeResponseSDKType {
    locks: PeriodLockSDKType[];
}
export interface AccountLockedPastTimeNotUnlockingOnlyRequest {
    owner: string;
    timestamp: Date | undefined;
}
export interface AccountLockedPastTimeNotUnlockingOnlyRequestProtoMsg {
    typeUrl: "/osmosis.lockup.AccountLockedPastTimeNotUnlockingOnlyRequest";
    value: Uint8Array;
}
export interface AccountLockedPastTimeNotUnlockingOnlyRequestAmino {
    owner?: string;
    timestamp?: string | undefined;
}
export interface AccountLockedPastTimeNotUnlockingOnlyRequestAminoMsg {
    type: "osmosis/lockup/account-locked-past-time-not-unlocking-only-request";
    value: AccountLockedPastTimeNotUnlockingOnlyRequestAmino;
}
export interface AccountLockedPastTimeNotUnlockingOnlyRequestSDKType {
    owner: string;
    timestamp: Date | undefined;
}
export interface AccountLockedPastTimeNotUnlockingOnlyResponse {
    locks: PeriodLock[];
}
export interface AccountLockedPastTimeNotUnlockingOnlyResponseProtoMsg {
    typeUrl: "/osmosis.lockup.AccountLockedPastTimeNotUnlockingOnlyResponse";
    value: Uint8Array;
}
export interface AccountLockedPastTimeNotUnlockingOnlyResponseAmino {
    locks?: PeriodLockAmino[];
}
export interface AccountLockedPastTimeNotUnlockingOnlyResponseAminoMsg {
    type: "osmosis/lockup/account-locked-past-time-not-unlocking-only-response";
    value: AccountLockedPastTimeNotUnlockingOnlyResponseAmino;
}
export interface AccountLockedPastTimeNotUnlockingOnlyResponseSDKType {
    locks: PeriodLockSDKType[];
}
export interface AccountUnlockedBeforeTimeRequest {
    owner: string;
    timestamp: Date | undefined;
}
export interface AccountUnlockedBeforeTimeRequestProtoMsg {
    typeUrl: "/osmosis.lockup.AccountUnlockedBeforeTimeRequest";
    value: Uint8Array;
}
export interface AccountUnlockedBeforeTimeRequestAmino {
    owner?: string;
    timestamp?: string | undefined;
}
export interface AccountUnlockedBeforeTimeRequestAminoMsg {
    type: "osmosis/lockup/account-unlocked-before-time-request";
    value: AccountUnlockedBeforeTimeRequestAmino;
}
export interface AccountUnlockedBeforeTimeRequestSDKType {
    owner: string;
    timestamp: Date | undefined;
}
export interface AccountUnlockedBeforeTimeResponse {
    locks: PeriodLock[];
}
export interface AccountUnlockedBeforeTimeResponseProtoMsg {
    typeUrl: "/osmosis.lockup.AccountUnlockedBeforeTimeResponse";
    value: Uint8Array;
}
export interface AccountUnlockedBeforeTimeResponseAmino {
    locks?: PeriodLockAmino[];
}
export interface AccountUnlockedBeforeTimeResponseAminoMsg {
    type: "osmosis/lockup/account-unlocked-before-time-response";
    value: AccountUnlockedBeforeTimeResponseAmino;
}
export interface AccountUnlockedBeforeTimeResponseSDKType {
    locks: PeriodLockSDKType[];
}
export interface AccountLockedPastTimeDenomRequest {
    owner: string;
    timestamp: Date | undefined;
    denom: string;
}
export interface AccountLockedPastTimeDenomRequestProtoMsg {
    typeUrl: "/osmosis.lockup.AccountLockedPastTimeDenomRequest";
    value: Uint8Array;
}
export interface AccountLockedPastTimeDenomRequestAmino {
    owner?: string;
    timestamp?: string | undefined;
    denom?: string;
}
export interface AccountLockedPastTimeDenomRequestAminoMsg {
    type: "osmosis/lockup/account-locked-past-time-denom-request";
    value: AccountLockedPastTimeDenomRequestAmino;
}
export interface AccountLockedPastTimeDenomRequestSDKType {
    owner: string;
    timestamp: Date | undefined;
    denom: string;
}
export interface AccountLockedPastTimeDenomResponse {
    locks: PeriodLock[];
}
export interface AccountLockedPastTimeDenomResponseProtoMsg {
    typeUrl: "/osmosis.lockup.AccountLockedPastTimeDenomResponse";
    value: Uint8Array;
}
export interface AccountLockedPastTimeDenomResponseAmino {
    locks?: PeriodLockAmino[];
}
export interface AccountLockedPastTimeDenomResponseAminoMsg {
    type: "osmosis/lockup/account-locked-past-time-denom-response";
    value: AccountLockedPastTimeDenomResponseAmino;
}
export interface AccountLockedPastTimeDenomResponseSDKType {
    locks: PeriodLockSDKType[];
}
export interface LockedDenomRequest {
    denom: string;
    duration: Duration | undefined;
}
export interface LockedDenomRequestProtoMsg {
    typeUrl: "/osmosis.lockup.LockedDenomRequest";
    value: Uint8Array;
}
export interface LockedDenomRequestAmino {
    denom?: string;
    duration?: DurationAmino | undefined;
}
export interface LockedDenomRequestAminoMsg {
    type: "osmosis/lockup/locked-denom-request";
    value: LockedDenomRequestAmino;
}
export interface LockedDenomRequestSDKType {
    denom: string;
    duration: DurationSDKType | undefined;
}
export interface LockedDenomResponse {
    amount: string;
}
export interface LockedDenomResponseProtoMsg {
    typeUrl: "/osmosis.lockup.LockedDenomResponse";
    value: Uint8Array;
}
export interface LockedDenomResponseAmino {
    amount?: string;
}
export interface LockedDenomResponseAminoMsg {
    type: "osmosis/lockup/locked-denom-response";
    value: LockedDenomResponseAmino;
}
export interface LockedDenomResponseSDKType {
    amount: string;
}
export interface LockedRequest {
    lockId: bigint;
}
export interface LockedRequestProtoMsg {
    typeUrl: "/osmosis.lockup.LockedRequest";
    value: Uint8Array;
}
export interface LockedRequestAmino {
    lock_id?: string;
}
export interface LockedRequestAminoMsg {
    type: "osmosis/lockup/locked-request";
    value: LockedRequestAmino;
}
export interface LockedRequestSDKType {
    lock_id: bigint;
}
export interface LockedResponse {
    lock?: PeriodLock | undefined;
}
export interface LockedResponseProtoMsg {
    typeUrl: "/osmosis.lockup.LockedResponse";
    value: Uint8Array;
}
export interface LockedResponseAmino {
    lock?: PeriodLockAmino | undefined;
}
export interface LockedResponseAminoMsg {
    type: "osmosis/lockup/locked-response";
    value: LockedResponseAmino;
}
export interface LockedResponseSDKType {
    lock?: PeriodLockSDKType | undefined;
}
export interface SyntheticLockupsByLockupIDRequest {
    lockId: bigint;
}
export interface SyntheticLockupsByLockupIDRequestProtoMsg {
    typeUrl: "/osmosis.lockup.SyntheticLockupsByLockupIDRequest";
    value: Uint8Array;
}
export interface SyntheticLockupsByLockupIDRequestAmino {
    lock_id?: string;
}
export interface SyntheticLockupsByLockupIDRequestAminoMsg {
    type: "osmosis/lockup/synthetic-lockups-by-lockup-id-request";
    value: SyntheticLockupsByLockupIDRequestAmino;
}
export interface SyntheticLockupsByLockupIDRequestSDKType {
    lock_id: bigint;
}
export interface SyntheticLockupsByLockupIDResponse {
    syntheticLocks: SyntheticLock[];
}
export interface SyntheticLockupsByLockupIDResponseProtoMsg {
    typeUrl: "/osmosis.lockup.SyntheticLockupsByLockupIDResponse";
    value: Uint8Array;
}
export interface SyntheticLockupsByLockupIDResponseAmino {
    synthetic_locks?: SyntheticLockAmino[];
}
export interface SyntheticLockupsByLockupIDResponseAminoMsg {
    type: "osmosis/lockup/synthetic-lockups-by-lockup-id-response";
    value: SyntheticLockupsByLockupIDResponseAmino;
}
export interface SyntheticLockupsByLockupIDResponseSDKType {
    synthetic_locks: SyntheticLockSDKType[];
}
export interface AccountLockedLongerDurationRequest {
    owner: string;
    duration: Duration | undefined;
}
export interface AccountLockedLongerDurationRequestProtoMsg {
    typeUrl: "/osmosis.lockup.AccountLockedLongerDurationRequest";
    value: Uint8Array;
}
export interface AccountLockedLongerDurationRequestAmino {
    owner?: string;
    duration?: DurationAmino | undefined;
}
export interface AccountLockedLongerDurationRequestAminoMsg {
    type: "osmosis/lockup/account-locked-longer-duration-request";
    value: AccountLockedLongerDurationRequestAmino;
}
export interface AccountLockedLongerDurationRequestSDKType {
    owner: string;
    duration: DurationSDKType | undefined;
}
export interface AccountLockedLongerDurationResponse {
    locks: PeriodLock[];
}
export interface AccountLockedLongerDurationResponseProtoMsg {
    typeUrl: "/osmosis.lockup.AccountLockedLongerDurationResponse";
    value: Uint8Array;
}
export interface AccountLockedLongerDurationResponseAmino {
    locks?: PeriodLockAmino[];
}
export interface AccountLockedLongerDurationResponseAminoMsg {
    type: "osmosis/lockup/account-locked-longer-duration-response";
    value: AccountLockedLongerDurationResponseAmino;
}
export interface AccountLockedLongerDurationResponseSDKType {
    locks: PeriodLockSDKType[];
}
export interface AccountLockedDurationRequest {
    owner: string;
    duration: Duration | undefined;
}
export interface AccountLockedDurationRequestProtoMsg {
    typeUrl: "/osmosis.lockup.AccountLockedDurationRequest";
    value: Uint8Array;
}
export interface AccountLockedDurationRequestAmino {
    owner?: string;
    duration?: DurationAmino | undefined;
}
export interface AccountLockedDurationRequestAminoMsg {
    type: "osmosis/lockup/account-locked-duration-request";
    value: AccountLockedDurationRequestAmino;
}
export interface AccountLockedDurationRequestSDKType {
    owner: string;
    duration: DurationSDKType | undefined;
}
export interface AccountLockedDurationResponse {
    locks: PeriodLock[];
}
export interface AccountLockedDurationResponseProtoMsg {
    typeUrl: "/osmosis.lockup.AccountLockedDurationResponse";
    value: Uint8Array;
}
export interface AccountLockedDurationResponseAmino {
    locks?: PeriodLockAmino[];
}
export interface AccountLockedDurationResponseAminoMsg {
    type: "osmosis/lockup/account-locked-duration-response";
    value: AccountLockedDurationResponseAmino;
}
export interface AccountLockedDurationResponseSDKType {
    locks: PeriodLockSDKType[];
}
export interface AccountLockedLongerDurationNotUnlockingOnlyRequest {
    owner: string;
    duration: Duration | undefined;
}
export interface AccountLockedLongerDurationNotUnlockingOnlyRequestProtoMsg {
    typeUrl: "/osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnlyRequest";
    value: Uint8Array;
}
export interface AccountLockedLongerDurationNotUnlockingOnlyRequestAmino {
    owner?: string;
    duration?: DurationAmino | undefined;
}
export interface AccountLockedLongerDurationNotUnlockingOnlyRequestAminoMsg {
    type: "osmosis/lockup/account-locked-longer-duration-not-unlocking-only-request";
    value: AccountLockedLongerDurationNotUnlockingOnlyRequestAmino;
}
export interface AccountLockedLongerDurationNotUnlockingOnlyRequestSDKType {
    owner: string;
    duration: DurationSDKType | undefined;
}
export interface AccountLockedLongerDurationNotUnlockingOnlyResponse {
    locks: PeriodLock[];
}
export interface AccountLockedLongerDurationNotUnlockingOnlyResponseProtoMsg {
    typeUrl: "/osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnlyResponse";
    value: Uint8Array;
}
export interface AccountLockedLongerDurationNotUnlockingOnlyResponseAmino {
    locks?: PeriodLockAmino[];
}
export interface AccountLockedLongerDurationNotUnlockingOnlyResponseAminoMsg {
    type: "osmosis/lockup/account-locked-longer-duration-not-unlocking-only-response";
    value: AccountLockedLongerDurationNotUnlockingOnlyResponseAmino;
}
export interface AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType {
    locks: PeriodLockSDKType[];
}
export interface AccountLockedLongerDurationDenomRequest {
    owner: string;
    duration: Duration | undefined;
    denom: string;
}
export interface AccountLockedLongerDurationDenomRequestProtoMsg {
    typeUrl: "/osmosis.lockup.AccountLockedLongerDurationDenomRequest";
    value: Uint8Array;
}
export interface AccountLockedLongerDurationDenomRequestAmino {
    owner?: string;
    duration?: DurationAmino | undefined;
    denom?: string;
}
export interface AccountLockedLongerDurationDenomRequestAminoMsg {
    type: "osmosis/lockup/account-locked-longer-duration-denom-request";
    value: AccountLockedLongerDurationDenomRequestAmino;
}
export interface AccountLockedLongerDurationDenomRequestSDKType {
    owner: string;
    duration: DurationSDKType | undefined;
    denom: string;
}
export interface AccountLockedLongerDurationDenomResponse {
    locks: PeriodLock[];
}
export interface AccountLockedLongerDurationDenomResponseProtoMsg {
    typeUrl: "/osmosis.lockup.AccountLockedLongerDurationDenomResponse";
    value: Uint8Array;
}
export interface AccountLockedLongerDurationDenomResponseAmino {
    locks?: PeriodLockAmino[];
}
export interface AccountLockedLongerDurationDenomResponseAminoMsg {
    type: "osmosis/lockup/account-locked-longer-duration-denom-response";
    value: AccountLockedLongerDurationDenomResponseAmino;
}
export interface AccountLockedLongerDurationDenomResponseSDKType {
    locks: PeriodLockSDKType[];
}
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/osmosis.lockup.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "osmosis/lockup/query-params-request";
    value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    params: Params | undefined;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/osmosis.lockup.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseAmino {
    params?: ParamsAmino | undefined;
}
export interface QueryParamsResponseAminoMsg {
    type: "osmosis/lockup/query-params-response";
    value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType | undefined;
}
export declare const ModuleBalanceRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ModuleBalanceRequest;
    isSDK(o: any): o is ModuleBalanceRequestSDKType;
    isAmino(o: any): o is ModuleBalanceRequestAmino;
    encode(_: ModuleBalanceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ModuleBalanceRequest;
    fromJSON(_: any): ModuleBalanceRequest;
    toJSON(_: ModuleBalanceRequest): unknown;
    fromPartial(_: DeepPartial<ModuleBalanceRequest>): ModuleBalanceRequest;
    fromSDK(_: ModuleBalanceRequestSDKType): ModuleBalanceRequest;
    toSDK(_: ModuleBalanceRequest): ModuleBalanceRequestSDKType;
    fromAmino(_: ModuleBalanceRequestAmino): ModuleBalanceRequest;
    toAmino(_: ModuleBalanceRequest): ModuleBalanceRequestAmino;
    fromAminoMsg(object: ModuleBalanceRequestAminoMsg): ModuleBalanceRequest;
    toAminoMsg(message: ModuleBalanceRequest): ModuleBalanceRequestAminoMsg;
    fromProtoMsg(message: ModuleBalanceRequestProtoMsg): ModuleBalanceRequest;
    toProto(message: ModuleBalanceRequest): Uint8Array;
    toProtoMsg(message: ModuleBalanceRequest): ModuleBalanceRequestProtoMsg;
};
export declare const ModuleBalanceResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ModuleBalanceResponse;
    isSDK(o: any): o is ModuleBalanceResponseSDKType;
    isAmino(o: any): o is ModuleBalanceResponseAmino;
    encode(message: ModuleBalanceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ModuleBalanceResponse;
    fromJSON(object: any): ModuleBalanceResponse;
    toJSON(message: ModuleBalanceResponse): unknown;
    fromPartial(object: DeepPartial<ModuleBalanceResponse>): ModuleBalanceResponse;
    fromSDK(object: ModuleBalanceResponseSDKType): ModuleBalanceResponse;
    toSDK(message: ModuleBalanceResponse): ModuleBalanceResponseSDKType;
    fromAmino(object: ModuleBalanceResponseAmino): ModuleBalanceResponse;
    toAmino(message: ModuleBalanceResponse): ModuleBalanceResponseAmino;
    fromAminoMsg(object: ModuleBalanceResponseAminoMsg): ModuleBalanceResponse;
    toAminoMsg(message: ModuleBalanceResponse): ModuleBalanceResponseAminoMsg;
    fromProtoMsg(message: ModuleBalanceResponseProtoMsg): ModuleBalanceResponse;
    toProto(message: ModuleBalanceResponse): Uint8Array;
    toProtoMsg(message: ModuleBalanceResponse): ModuleBalanceResponseProtoMsg;
};
export declare const ModuleLockedAmountRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ModuleLockedAmountRequest;
    isSDK(o: any): o is ModuleLockedAmountRequestSDKType;
    isAmino(o: any): o is ModuleLockedAmountRequestAmino;
    encode(_: ModuleLockedAmountRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ModuleLockedAmountRequest;
    fromJSON(_: any): ModuleLockedAmountRequest;
    toJSON(_: ModuleLockedAmountRequest): unknown;
    fromPartial(_: DeepPartial<ModuleLockedAmountRequest>): ModuleLockedAmountRequest;
    fromSDK(_: ModuleLockedAmountRequestSDKType): ModuleLockedAmountRequest;
    toSDK(_: ModuleLockedAmountRequest): ModuleLockedAmountRequestSDKType;
    fromAmino(_: ModuleLockedAmountRequestAmino): ModuleLockedAmountRequest;
    toAmino(_: ModuleLockedAmountRequest): ModuleLockedAmountRequestAmino;
    fromAminoMsg(object: ModuleLockedAmountRequestAminoMsg): ModuleLockedAmountRequest;
    toAminoMsg(message: ModuleLockedAmountRequest): ModuleLockedAmountRequestAminoMsg;
    fromProtoMsg(message: ModuleLockedAmountRequestProtoMsg): ModuleLockedAmountRequest;
    toProto(message: ModuleLockedAmountRequest): Uint8Array;
    toProtoMsg(message: ModuleLockedAmountRequest): ModuleLockedAmountRequestProtoMsg;
};
export declare const ModuleLockedAmountResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ModuleLockedAmountResponse;
    isSDK(o: any): o is ModuleLockedAmountResponseSDKType;
    isAmino(o: any): o is ModuleLockedAmountResponseAmino;
    encode(message: ModuleLockedAmountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ModuleLockedAmountResponse;
    fromJSON(object: any): ModuleLockedAmountResponse;
    toJSON(message: ModuleLockedAmountResponse): unknown;
    fromPartial(object: DeepPartial<ModuleLockedAmountResponse>): ModuleLockedAmountResponse;
    fromSDK(object: ModuleLockedAmountResponseSDKType): ModuleLockedAmountResponse;
    toSDK(message: ModuleLockedAmountResponse): ModuleLockedAmountResponseSDKType;
    fromAmino(object: ModuleLockedAmountResponseAmino): ModuleLockedAmountResponse;
    toAmino(message: ModuleLockedAmountResponse): ModuleLockedAmountResponseAmino;
    fromAminoMsg(object: ModuleLockedAmountResponseAminoMsg): ModuleLockedAmountResponse;
    toAminoMsg(message: ModuleLockedAmountResponse): ModuleLockedAmountResponseAminoMsg;
    fromProtoMsg(message: ModuleLockedAmountResponseProtoMsg): ModuleLockedAmountResponse;
    toProto(message: ModuleLockedAmountResponse): Uint8Array;
    toProtoMsg(message: ModuleLockedAmountResponse): ModuleLockedAmountResponseProtoMsg;
};
export declare const AccountUnlockableCoinsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AccountUnlockableCoinsRequest;
    isSDK(o: any): o is AccountUnlockableCoinsRequestSDKType;
    isAmino(o: any): o is AccountUnlockableCoinsRequestAmino;
    encode(message: AccountUnlockableCoinsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountUnlockableCoinsRequest;
    fromJSON(object: any): AccountUnlockableCoinsRequest;
    toJSON(message: AccountUnlockableCoinsRequest): unknown;
    fromPartial(object: DeepPartial<AccountUnlockableCoinsRequest>): AccountUnlockableCoinsRequest;
    fromSDK(object: AccountUnlockableCoinsRequestSDKType): AccountUnlockableCoinsRequest;
    toSDK(message: AccountUnlockableCoinsRequest): AccountUnlockableCoinsRequestSDKType;
    fromAmino(object: AccountUnlockableCoinsRequestAmino): AccountUnlockableCoinsRequest;
    toAmino(message: AccountUnlockableCoinsRequest): AccountUnlockableCoinsRequestAmino;
    fromAminoMsg(object: AccountUnlockableCoinsRequestAminoMsg): AccountUnlockableCoinsRequest;
    toAminoMsg(message: AccountUnlockableCoinsRequest): AccountUnlockableCoinsRequestAminoMsg;
    fromProtoMsg(message: AccountUnlockableCoinsRequestProtoMsg): AccountUnlockableCoinsRequest;
    toProto(message: AccountUnlockableCoinsRequest): Uint8Array;
    toProtoMsg(message: AccountUnlockableCoinsRequest): AccountUnlockableCoinsRequestProtoMsg;
};
export declare const AccountUnlockableCoinsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AccountUnlockableCoinsResponse;
    isSDK(o: any): o is AccountUnlockableCoinsResponseSDKType;
    isAmino(o: any): o is AccountUnlockableCoinsResponseAmino;
    encode(message: AccountUnlockableCoinsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountUnlockableCoinsResponse;
    fromJSON(object: any): AccountUnlockableCoinsResponse;
    toJSON(message: AccountUnlockableCoinsResponse): unknown;
    fromPartial(object: DeepPartial<AccountUnlockableCoinsResponse>): AccountUnlockableCoinsResponse;
    fromSDK(object: AccountUnlockableCoinsResponseSDKType): AccountUnlockableCoinsResponse;
    toSDK(message: AccountUnlockableCoinsResponse): AccountUnlockableCoinsResponseSDKType;
    fromAmino(object: AccountUnlockableCoinsResponseAmino): AccountUnlockableCoinsResponse;
    toAmino(message: AccountUnlockableCoinsResponse): AccountUnlockableCoinsResponseAmino;
    fromAminoMsg(object: AccountUnlockableCoinsResponseAminoMsg): AccountUnlockableCoinsResponse;
    toAminoMsg(message: AccountUnlockableCoinsResponse): AccountUnlockableCoinsResponseAminoMsg;
    fromProtoMsg(message: AccountUnlockableCoinsResponseProtoMsg): AccountUnlockableCoinsResponse;
    toProto(message: AccountUnlockableCoinsResponse): Uint8Array;
    toProtoMsg(message: AccountUnlockableCoinsResponse): AccountUnlockableCoinsResponseProtoMsg;
};
export declare const AccountUnlockingCoinsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AccountUnlockingCoinsRequest;
    isSDK(o: any): o is AccountUnlockingCoinsRequestSDKType;
    isAmino(o: any): o is AccountUnlockingCoinsRequestAmino;
    encode(message: AccountUnlockingCoinsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountUnlockingCoinsRequest;
    fromJSON(object: any): AccountUnlockingCoinsRequest;
    toJSON(message: AccountUnlockingCoinsRequest): unknown;
    fromPartial(object: DeepPartial<AccountUnlockingCoinsRequest>): AccountUnlockingCoinsRequest;
    fromSDK(object: AccountUnlockingCoinsRequestSDKType): AccountUnlockingCoinsRequest;
    toSDK(message: AccountUnlockingCoinsRequest): AccountUnlockingCoinsRequestSDKType;
    fromAmino(object: AccountUnlockingCoinsRequestAmino): AccountUnlockingCoinsRequest;
    toAmino(message: AccountUnlockingCoinsRequest): AccountUnlockingCoinsRequestAmino;
    fromAminoMsg(object: AccountUnlockingCoinsRequestAminoMsg): AccountUnlockingCoinsRequest;
    toAminoMsg(message: AccountUnlockingCoinsRequest): AccountUnlockingCoinsRequestAminoMsg;
    fromProtoMsg(message: AccountUnlockingCoinsRequestProtoMsg): AccountUnlockingCoinsRequest;
    toProto(message: AccountUnlockingCoinsRequest): Uint8Array;
    toProtoMsg(message: AccountUnlockingCoinsRequest): AccountUnlockingCoinsRequestProtoMsg;
};
export declare const AccountUnlockingCoinsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AccountUnlockingCoinsResponse;
    isSDK(o: any): o is AccountUnlockingCoinsResponseSDKType;
    isAmino(o: any): o is AccountUnlockingCoinsResponseAmino;
    encode(message: AccountUnlockingCoinsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountUnlockingCoinsResponse;
    fromJSON(object: any): AccountUnlockingCoinsResponse;
    toJSON(message: AccountUnlockingCoinsResponse): unknown;
    fromPartial(object: DeepPartial<AccountUnlockingCoinsResponse>): AccountUnlockingCoinsResponse;
    fromSDK(object: AccountUnlockingCoinsResponseSDKType): AccountUnlockingCoinsResponse;
    toSDK(message: AccountUnlockingCoinsResponse): AccountUnlockingCoinsResponseSDKType;
    fromAmino(object: AccountUnlockingCoinsResponseAmino): AccountUnlockingCoinsResponse;
    toAmino(message: AccountUnlockingCoinsResponse): AccountUnlockingCoinsResponseAmino;
    fromAminoMsg(object: AccountUnlockingCoinsResponseAminoMsg): AccountUnlockingCoinsResponse;
    toAminoMsg(message: AccountUnlockingCoinsResponse): AccountUnlockingCoinsResponseAminoMsg;
    fromProtoMsg(message: AccountUnlockingCoinsResponseProtoMsg): AccountUnlockingCoinsResponse;
    toProto(message: AccountUnlockingCoinsResponse): Uint8Array;
    toProtoMsg(message: AccountUnlockingCoinsResponse): AccountUnlockingCoinsResponseProtoMsg;
};
export declare const AccountLockedCoinsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AccountLockedCoinsRequest;
    isSDK(o: any): o is AccountLockedCoinsRequestSDKType;
    isAmino(o: any): o is AccountLockedCoinsRequestAmino;
    encode(message: AccountLockedCoinsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedCoinsRequest;
    fromJSON(object: any): AccountLockedCoinsRequest;
    toJSON(message: AccountLockedCoinsRequest): unknown;
    fromPartial(object: DeepPartial<AccountLockedCoinsRequest>): AccountLockedCoinsRequest;
    fromSDK(object: AccountLockedCoinsRequestSDKType): AccountLockedCoinsRequest;
    toSDK(message: AccountLockedCoinsRequest): AccountLockedCoinsRequestSDKType;
    fromAmino(object: AccountLockedCoinsRequestAmino): AccountLockedCoinsRequest;
    toAmino(message: AccountLockedCoinsRequest): AccountLockedCoinsRequestAmino;
    fromAminoMsg(object: AccountLockedCoinsRequestAminoMsg): AccountLockedCoinsRequest;
    toAminoMsg(message: AccountLockedCoinsRequest): AccountLockedCoinsRequestAminoMsg;
    fromProtoMsg(message: AccountLockedCoinsRequestProtoMsg): AccountLockedCoinsRequest;
    toProto(message: AccountLockedCoinsRequest): Uint8Array;
    toProtoMsg(message: AccountLockedCoinsRequest): AccountLockedCoinsRequestProtoMsg;
};
export declare const AccountLockedCoinsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AccountLockedCoinsResponse;
    isSDK(o: any): o is AccountLockedCoinsResponseSDKType;
    isAmino(o: any): o is AccountLockedCoinsResponseAmino;
    encode(message: AccountLockedCoinsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedCoinsResponse;
    fromJSON(object: any): AccountLockedCoinsResponse;
    toJSON(message: AccountLockedCoinsResponse): unknown;
    fromPartial(object: DeepPartial<AccountLockedCoinsResponse>): AccountLockedCoinsResponse;
    fromSDK(object: AccountLockedCoinsResponseSDKType): AccountLockedCoinsResponse;
    toSDK(message: AccountLockedCoinsResponse): AccountLockedCoinsResponseSDKType;
    fromAmino(object: AccountLockedCoinsResponseAmino): AccountLockedCoinsResponse;
    toAmino(message: AccountLockedCoinsResponse): AccountLockedCoinsResponseAmino;
    fromAminoMsg(object: AccountLockedCoinsResponseAminoMsg): AccountLockedCoinsResponse;
    toAminoMsg(message: AccountLockedCoinsResponse): AccountLockedCoinsResponseAminoMsg;
    fromProtoMsg(message: AccountLockedCoinsResponseProtoMsg): AccountLockedCoinsResponse;
    toProto(message: AccountLockedCoinsResponse): Uint8Array;
    toProtoMsg(message: AccountLockedCoinsResponse): AccountLockedCoinsResponseProtoMsg;
};
export declare const AccountLockedPastTimeRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AccountLockedPastTimeRequest;
    isSDK(o: any): o is AccountLockedPastTimeRequestSDKType;
    isAmino(o: any): o is AccountLockedPastTimeRequestAmino;
    encode(message: AccountLockedPastTimeRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedPastTimeRequest;
    fromJSON(object: any): AccountLockedPastTimeRequest;
    toJSON(message: AccountLockedPastTimeRequest): unknown;
    fromPartial(object: DeepPartial<AccountLockedPastTimeRequest>): AccountLockedPastTimeRequest;
    fromSDK(object: AccountLockedPastTimeRequestSDKType): AccountLockedPastTimeRequest;
    toSDK(message: AccountLockedPastTimeRequest): AccountLockedPastTimeRequestSDKType;
    fromAmino(object: AccountLockedPastTimeRequestAmino): AccountLockedPastTimeRequest;
    toAmino(message: AccountLockedPastTimeRequest): AccountLockedPastTimeRequestAmino;
    fromAminoMsg(object: AccountLockedPastTimeRequestAminoMsg): AccountLockedPastTimeRequest;
    toAminoMsg(message: AccountLockedPastTimeRequest): AccountLockedPastTimeRequestAminoMsg;
    fromProtoMsg(message: AccountLockedPastTimeRequestProtoMsg): AccountLockedPastTimeRequest;
    toProto(message: AccountLockedPastTimeRequest): Uint8Array;
    toProtoMsg(message: AccountLockedPastTimeRequest): AccountLockedPastTimeRequestProtoMsg;
};
export declare const AccountLockedPastTimeResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AccountLockedPastTimeResponse;
    isSDK(o: any): o is AccountLockedPastTimeResponseSDKType;
    isAmino(o: any): o is AccountLockedPastTimeResponseAmino;
    encode(message: AccountLockedPastTimeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedPastTimeResponse;
    fromJSON(object: any): AccountLockedPastTimeResponse;
    toJSON(message: AccountLockedPastTimeResponse): unknown;
    fromPartial(object: DeepPartial<AccountLockedPastTimeResponse>): AccountLockedPastTimeResponse;
    fromSDK(object: AccountLockedPastTimeResponseSDKType): AccountLockedPastTimeResponse;
    toSDK(message: AccountLockedPastTimeResponse): AccountLockedPastTimeResponseSDKType;
    fromAmino(object: AccountLockedPastTimeResponseAmino): AccountLockedPastTimeResponse;
    toAmino(message: AccountLockedPastTimeResponse): AccountLockedPastTimeResponseAmino;
    fromAminoMsg(object: AccountLockedPastTimeResponseAminoMsg): AccountLockedPastTimeResponse;
    toAminoMsg(message: AccountLockedPastTimeResponse): AccountLockedPastTimeResponseAminoMsg;
    fromProtoMsg(message: AccountLockedPastTimeResponseProtoMsg): AccountLockedPastTimeResponse;
    toProto(message: AccountLockedPastTimeResponse): Uint8Array;
    toProtoMsg(message: AccountLockedPastTimeResponse): AccountLockedPastTimeResponseProtoMsg;
};
export declare const AccountLockedPastTimeNotUnlockingOnlyRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AccountLockedPastTimeNotUnlockingOnlyRequest;
    isSDK(o: any): o is AccountLockedPastTimeNotUnlockingOnlyRequestSDKType;
    isAmino(o: any): o is AccountLockedPastTimeNotUnlockingOnlyRequestAmino;
    encode(message: AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedPastTimeNotUnlockingOnlyRequest;
    fromJSON(object: any): AccountLockedPastTimeNotUnlockingOnlyRequest;
    toJSON(message: AccountLockedPastTimeNotUnlockingOnlyRequest): unknown;
    fromPartial(object: DeepPartial<AccountLockedPastTimeNotUnlockingOnlyRequest>): AccountLockedPastTimeNotUnlockingOnlyRequest;
    fromSDK(object: AccountLockedPastTimeNotUnlockingOnlyRequestSDKType): AccountLockedPastTimeNotUnlockingOnlyRequest;
    toSDK(message: AccountLockedPastTimeNotUnlockingOnlyRequest): AccountLockedPastTimeNotUnlockingOnlyRequestSDKType;
    fromAmino(object: AccountLockedPastTimeNotUnlockingOnlyRequestAmino): AccountLockedPastTimeNotUnlockingOnlyRequest;
    toAmino(message: AccountLockedPastTimeNotUnlockingOnlyRequest): AccountLockedPastTimeNotUnlockingOnlyRequestAmino;
    fromAminoMsg(object: AccountLockedPastTimeNotUnlockingOnlyRequestAminoMsg): AccountLockedPastTimeNotUnlockingOnlyRequest;
    toAminoMsg(message: AccountLockedPastTimeNotUnlockingOnlyRequest): AccountLockedPastTimeNotUnlockingOnlyRequestAminoMsg;
    fromProtoMsg(message: AccountLockedPastTimeNotUnlockingOnlyRequestProtoMsg): AccountLockedPastTimeNotUnlockingOnlyRequest;
    toProto(message: AccountLockedPastTimeNotUnlockingOnlyRequest): Uint8Array;
    toProtoMsg(message: AccountLockedPastTimeNotUnlockingOnlyRequest): AccountLockedPastTimeNotUnlockingOnlyRequestProtoMsg;
};
export declare const AccountLockedPastTimeNotUnlockingOnlyResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AccountLockedPastTimeNotUnlockingOnlyResponse;
    isSDK(o: any): o is AccountLockedPastTimeNotUnlockingOnlyResponseSDKType;
    isAmino(o: any): o is AccountLockedPastTimeNotUnlockingOnlyResponseAmino;
    encode(message: AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedPastTimeNotUnlockingOnlyResponse;
    fromJSON(object: any): AccountLockedPastTimeNotUnlockingOnlyResponse;
    toJSON(message: AccountLockedPastTimeNotUnlockingOnlyResponse): unknown;
    fromPartial(object: DeepPartial<AccountLockedPastTimeNotUnlockingOnlyResponse>): AccountLockedPastTimeNotUnlockingOnlyResponse;
    fromSDK(object: AccountLockedPastTimeNotUnlockingOnlyResponseSDKType): AccountLockedPastTimeNotUnlockingOnlyResponse;
    toSDK(message: AccountLockedPastTimeNotUnlockingOnlyResponse): AccountLockedPastTimeNotUnlockingOnlyResponseSDKType;
    fromAmino(object: AccountLockedPastTimeNotUnlockingOnlyResponseAmino): AccountLockedPastTimeNotUnlockingOnlyResponse;
    toAmino(message: AccountLockedPastTimeNotUnlockingOnlyResponse): AccountLockedPastTimeNotUnlockingOnlyResponseAmino;
    fromAminoMsg(object: AccountLockedPastTimeNotUnlockingOnlyResponseAminoMsg): AccountLockedPastTimeNotUnlockingOnlyResponse;
    toAminoMsg(message: AccountLockedPastTimeNotUnlockingOnlyResponse): AccountLockedPastTimeNotUnlockingOnlyResponseAminoMsg;
    fromProtoMsg(message: AccountLockedPastTimeNotUnlockingOnlyResponseProtoMsg): AccountLockedPastTimeNotUnlockingOnlyResponse;
    toProto(message: AccountLockedPastTimeNotUnlockingOnlyResponse): Uint8Array;
    toProtoMsg(message: AccountLockedPastTimeNotUnlockingOnlyResponse): AccountLockedPastTimeNotUnlockingOnlyResponseProtoMsg;
};
export declare const AccountUnlockedBeforeTimeRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AccountUnlockedBeforeTimeRequest;
    isSDK(o: any): o is AccountUnlockedBeforeTimeRequestSDKType;
    isAmino(o: any): o is AccountUnlockedBeforeTimeRequestAmino;
    encode(message: AccountUnlockedBeforeTimeRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountUnlockedBeforeTimeRequest;
    fromJSON(object: any): AccountUnlockedBeforeTimeRequest;
    toJSON(message: AccountUnlockedBeforeTimeRequest): unknown;
    fromPartial(object: DeepPartial<AccountUnlockedBeforeTimeRequest>): AccountUnlockedBeforeTimeRequest;
    fromSDK(object: AccountUnlockedBeforeTimeRequestSDKType): AccountUnlockedBeforeTimeRequest;
    toSDK(message: AccountUnlockedBeforeTimeRequest): AccountUnlockedBeforeTimeRequestSDKType;
    fromAmino(object: AccountUnlockedBeforeTimeRequestAmino): AccountUnlockedBeforeTimeRequest;
    toAmino(message: AccountUnlockedBeforeTimeRequest): AccountUnlockedBeforeTimeRequestAmino;
    fromAminoMsg(object: AccountUnlockedBeforeTimeRequestAminoMsg): AccountUnlockedBeforeTimeRequest;
    toAminoMsg(message: AccountUnlockedBeforeTimeRequest): AccountUnlockedBeforeTimeRequestAminoMsg;
    fromProtoMsg(message: AccountUnlockedBeforeTimeRequestProtoMsg): AccountUnlockedBeforeTimeRequest;
    toProto(message: AccountUnlockedBeforeTimeRequest): Uint8Array;
    toProtoMsg(message: AccountUnlockedBeforeTimeRequest): AccountUnlockedBeforeTimeRequestProtoMsg;
};
export declare const AccountUnlockedBeforeTimeResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AccountUnlockedBeforeTimeResponse;
    isSDK(o: any): o is AccountUnlockedBeforeTimeResponseSDKType;
    isAmino(o: any): o is AccountUnlockedBeforeTimeResponseAmino;
    encode(message: AccountUnlockedBeforeTimeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountUnlockedBeforeTimeResponse;
    fromJSON(object: any): AccountUnlockedBeforeTimeResponse;
    toJSON(message: AccountUnlockedBeforeTimeResponse): unknown;
    fromPartial(object: DeepPartial<AccountUnlockedBeforeTimeResponse>): AccountUnlockedBeforeTimeResponse;
    fromSDK(object: AccountUnlockedBeforeTimeResponseSDKType): AccountUnlockedBeforeTimeResponse;
    toSDK(message: AccountUnlockedBeforeTimeResponse): AccountUnlockedBeforeTimeResponseSDKType;
    fromAmino(object: AccountUnlockedBeforeTimeResponseAmino): AccountUnlockedBeforeTimeResponse;
    toAmino(message: AccountUnlockedBeforeTimeResponse): AccountUnlockedBeforeTimeResponseAmino;
    fromAminoMsg(object: AccountUnlockedBeforeTimeResponseAminoMsg): AccountUnlockedBeforeTimeResponse;
    toAminoMsg(message: AccountUnlockedBeforeTimeResponse): AccountUnlockedBeforeTimeResponseAminoMsg;
    fromProtoMsg(message: AccountUnlockedBeforeTimeResponseProtoMsg): AccountUnlockedBeforeTimeResponse;
    toProto(message: AccountUnlockedBeforeTimeResponse): Uint8Array;
    toProtoMsg(message: AccountUnlockedBeforeTimeResponse): AccountUnlockedBeforeTimeResponseProtoMsg;
};
export declare const AccountLockedPastTimeDenomRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AccountLockedPastTimeDenomRequest;
    isSDK(o: any): o is AccountLockedPastTimeDenomRequestSDKType;
    isAmino(o: any): o is AccountLockedPastTimeDenomRequestAmino;
    encode(message: AccountLockedPastTimeDenomRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedPastTimeDenomRequest;
    fromJSON(object: any): AccountLockedPastTimeDenomRequest;
    toJSON(message: AccountLockedPastTimeDenomRequest): unknown;
    fromPartial(object: DeepPartial<AccountLockedPastTimeDenomRequest>): AccountLockedPastTimeDenomRequest;
    fromSDK(object: AccountLockedPastTimeDenomRequestSDKType): AccountLockedPastTimeDenomRequest;
    toSDK(message: AccountLockedPastTimeDenomRequest): AccountLockedPastTimeDenomRequestSDKType;
    fromAmino(object: AccountLockedPastTimeDenomRequestAmino): AccountLockedPastTimeDenomRequest;
    toAmino(message: AccountLockedPastTimeDenomRequest): AccountLockedPastTimeDenomRequestAmino;
    fromAminoMsg(object: AccountLockedPastTimeDenomRequestAminoMsg): AccountLockedPastTimeDenomRequest;
    toAminoMsg(message: AccountLockedPastTimeDenomRequest): AccountLockedPastTimeDenomRequestAminoMsg;
    fromProtoMsg(message: AccountLockedPastTimeDenomRequestProtoMsg): AccountLockedPastTimeDenomRequest;
    toProto(message: AccountLockedPastTimeDenomRequest): Uint8Array;
    toProtoMsg(message: AccountLockedPastTimeDenomRequest): AccountLockedPastTimeDenomRequestProtoMsg;
};
export declare const AccountLockedPastTimeDenomResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AccountLockedPastTimeDenomResponse;
    isSDK(o: any): o is AccountLockedPastTimeDenomResponseSDKType;
    isAmino(o: any): o is AccountLockedPastTimeDenomResponseAmino;
    encode(message: AccountLockedPastTimeDenomResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedPastTimeDenomResponse;
    fromJSON(object: any): AccountLockedPastTimeDenomResponse;
    toJSON(message: AccountLockedPastTimeDenomResponse): unknown;
    fromPartial(object: DeepPartial<AccountLockedPastTimeDenomResponse>): AccountLockedPastTimeDenomResponse;
    fromSDK(object: AccountLockedPastTimeDenomResponseSDKType): AccountLockedPastTimeDenomResponse;
    toSDK(message: AccountLockedPastTimeDenomResponse): AccountLockedPastTimeDenomResponseSDKType;
    fromAmino(object: AccountLockedPastTimeDenomResponseAmino): AccountLockedPastTimeDenomResponse;
    toAmino(message: AccountLockedPastTimeDenomResponse): AccountLockedPastTimeDenomResponseAmino;
    fromAminoMsg(object: AccountLockedPastTimeDenomResponseAminoMsg): AccountLockedPastTimeDenomResponse;
    toAminoMsg(message: AccountLockedPastTimeDenomResponse): AccountLockedPastTimeDenomResponseAminoMsg;
    fromProtoMsg(message: AccountLockedPastTimeDenomResponseProtoMsg): AccountLockedPastTimeDenomResponse;
    toProto(message: AccountLockedPastTimeDenomResponse): Uint8Array;
    toProtoMsg(message: AccountLockedPastTimeDenomResponse): AccountLockedPastTimeDenomResponseProtoMsg;
};
export declare const LockedDenomRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is LockedDenomRequest;
    isSDK(o: any): o is LockedDenomRequestSDKType;
    isAmino(o: any): o is LockedDenomRequestAmino;
    encode(message: LockedDenomRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LockedDenomRequest;
    fromJSON(object: any): LockedDenomRequest;
    toJSON(message: LockedDenomRequest): unknown;
    fromPartial(object: DeepPartial<LockedDenomRequest>): LockedDenomRequest;
    fromSDK(object: LockedDenomRequestSDKType): LockedDenomRequest;
    toSDK(message: LockedDenomRequest): LockedDenomRequestSDKType;
    fromAmino(object: LockedDenomRequestAmino): LockedDenomRequest;
    toAmino(message: LockedDenomRequest): LockedDenomRequestAmino;
    fromAminoMsg(object: LockedDenomRequestAminoMsg): LockedDenomRequest;
    toAminoMsg(message: LockedDenomRequest): LockedDenomRequestAminoMsg;
    fromProtoMsg(message: LockedDenomRequestProtoMsg): LockedDenomRequest;
    toProto(message: LockedDenomRequest): Uint8Array;
    toProtoMsg(message: LockedDenomRequest): LockedDenomRequestProtoMsg;
};
export declare const LockedDenomResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is LockedDenomResponse;
    isSDK(o: any): o is LockedDenomResponseSDKType;
    isAmino(o: any): o is LockedDenomResponseAmino;
    encode(message: LockedDenomResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LockedDenomResponse;
    fromJSON(object: any): LockedDenomResponse;
    toJSON(message: LockedDenomResponse): unknown;
    fromPartial(object: DeepPartial<LockedDenomResponse>): LockedDenomResponse;
    fromSDK(object: LockedDenomResponseSDKType): LockedDenomResponse;
    toSDK(message: LockedDenomResponse): LockedDenomResponseSDKType;
    fromAmino(object: LockedDenomResponseAmino): LockedDenomResponse;
    toAmino(message: LockedDenomResponse): LockedDenomResponseAmino;
    fromAminoMsg(object: LockedDenomResponseAminoMsg): LockedDenomResponse;
    toAminoMsg(message: LockedDenomResponse): LockedDenomResponseAminoMsg;
    fromProtoMsg(message: LockedDenomResponseProtoMsg): LockedDenomResponse;
    toProto(message: LockedDenomResponse): Uint8Array;
    toProtoMsg(message: LockedDenomResponse): LockedDenomResponseProtoMsg;
};
export declare const LockedRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is LockedRequest;
    isSDK(o: any): o is LockedRequestSDKType;
    isAmino(o: any): o is LockedRequestAmino;
    encode(message: LockedRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LockedRequest;
    fromJSON(object: any): LockedRequest;
    toJSON(message: LockedRequest): unknown;
    fromPartial(object: DeepPartial<LockedRequest>): LockedRequest;
    fromSDK(object: LockedRequestSDKType): LockedRequest;
    toSDK(message: LockedRequest): LockedRequestSDKType;
    fromAmino(object: LockedRequestAmino): LockedRequest;
    toAmino(message: LockedRequest): LockedRequestAmino;
    fromAminoMsg(object: LockedRequestAminoMsg): LockedRequest;
    toAminoMsg(message: LockedRequest): LockedRequestAminoMsg;
    fromProtoMsg(message: LockedRequestProtoMsg): LockedRequest;
    toProto(message: LockedRequest): Uint8Array;
    toProtoMsg(message: LockedRequest): LockedRequestProtoMsg;
};
export declare const LockedResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is LockedResponse;
    isSDK(o: any): o is LockedResponseSDKType;
    isAmino(o: any): o is LockedResponseAmino;
    encode(message: LockedResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LockedResponse;
    fromJSON(object: any): LockedResponse;
    toJSON(message: LockedResponse): unknown;
    fromPartial(object: DeepPartial<LockedResponse>): LockedResponse;
    fromSDK(object: LockedResponseSDKType): LockedResponse;
    toSDK(message: LockedResponse): LockedResponseSDKType;
    fromAmino(object: LockedResponseAmino): LockedResponse;
    toAmino(message: LockedResponse): LockedResponseAmino;
    fromAminoMsg(object: LockedResponseAminoMsg): LockedResponse;
    toAminoMsg(message: LockedResponse): LockedResponseAminoMsg;
    fromProtoMsg(message: LockedResponseProtoMsg): LockedResponse;
    toProto(message: LockedResponse): Uint8Array;
    toProtoMsg(message: LockedResponse): LockedResponseProtoMsg;
};
export declare const SyntheticLockupsByLockupIDRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is SyntheticLockupsByLockupIDRequest;
    isSDK(o: any): o is SyntheticLockupsByLockupIDRequestSDKType;
    isAmino(o: any): o is SyntheticLockupsByLockupIDRequestAmino;
    encode(message: SyntheticLockupsByLockupIDRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SyntheticLockupsByLockupIDRequest;
    fromJSON(object: any): SyntheticLockupsByLockupIDRequest;
    toJSON(message: SyntheticLockupsByLockupIDRequest): unknown;
    fromPartial(object: DeepPartial<SyntheticLockupsByLockupIDRequest>): SyntheticLockupsByLockupIDRequest;
    fromSDK(object: SyntheticLockupsByLockupIDRequestSDKType): SyntheticLockupsByLockupIDRequest;
    toSDK(message: SyntheticLockupsByLockupIDRequest): SyntheticLockupsByLockupIDRequestSDKType;
    fromAmino(object: SyntheticLockupsByLockupIDRequestAmino): SyntheticLockupsByLockupIDRequest;
    toAmino(message: SyntheticLockupsByLockupIDRequest): SyntheticLockupsByLockupIDRequestAmino;
    fromAminoMsg(object: SyntheticLockupsByLockupIDRequestAminoMsg): SyntheticLockupsByLockupIDRequest;
    toAminoMsg(message: SyntheticLockupsByLockupIDRequest): SyntheticLockupsByLockupIDRequestAminoMsg;
    fromProtoMsg(message: SyntheticLockupsByLockupIDRequestProtoMsg): SyntheticLockupsByLockupIDRequest;
    toProto(message: SyntheticLockupsByLockupIDRequest): Uint8Array;
    toProtoMsg(message: SyntheticLockupsByLockupIDRequest): SyntheticLockupsByLockupIDRequestProtoMsg;
};
export declare const SyntheticLockupsByLockupIDResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is SyntheticLockupsByLockupIDResponse;
    isSDK(o: any): o is SyntheticLockupsByLockupIDResponseSDKType;
    isAmino(o: any): o is SyntheticLockupsByLockupIDResponseAmino;
    encode(message: SyntheticLockupsByLockupIDResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SyntheticLockupsByLockupIDResponse;
    fromJSON(object: any): SyntheticLockupsByLockupIDResponse;
    toJSON(message: SyntheticLockupsByLockupIDResponse): unknown;
    fromPartial(object: DeepPartial<SyntheticLockupsByLockupIDResponse>): SyntheticLockupsByLockupIDResponse;
    fromSDK(object: SyntheticLockupsByLockupIDResponseSDKType): SyntheticLockupsByLockupIDResponse;
    toSDK(message: SyntheticLockupsByLockupIDResponse): SyntheticLockupsByLockupIDResponseSDKType;
    fromAmino(object: SyntheticLockupsByLockupIDResponseAmino): SyntheticLockupsByLockupIDResponse;
    toAmino(message: SyntheticLockupsByLockupIDResponse): SyntheticLockupsByLockupIDResponseAmino;
    fromAminoMsg(object: SyntheticLockupsByLockupIDResponseAminoMsg): SyntheticLockupsByLockupIDResponse;
    toAminoMsg(message: SyntheticLockupsByLockupIDResponse): SyntheticLockupsByLockupIDResponseAminoMsg;
    fromProtoMsg(message: SyntheticLockupsByLockupIDResponseProtoMsg): SyntheticLockupsByLockupIDResponse;
    toProto(message: SyntheticLockupsByLockupIDResponse): Uint8Array;
    toProtoMsg(message: SyntheticLockupsByLockupIDResponse): SyntheticLockupsByLockupIDResponseProtoMsg;
};
export declare const AccountLockedLongerDurationRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AccountLockedLongerDurationRequest;
    isSDK(o: any): o is AccountLockedLongerDurationRequestSDKType;
    isAmino(o: any): o is AccountLockedLongerDurationRequestAmino;
    encode(message: AccountLockedLongerDurationRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedLongerDurationRequest;
    fromJSON(object: any): AccountLockedLongerDurationRequest;
    toJSON(message: AccountLockedLongerDurationRequest): unknown;
    fromPartial(object: DeepPartial<AccountLockedLongerDurationRequest>): AccountLockedLongerDurationRequest;
    fromSDK(object: AccountLockedLongerDurationRequestSDKType): AccountLockedLongerDurationRequest;
    toSDK(message: AccountLockedLongerDurationRequest): AccountLockedLongerDurationRequestSDKType;
    fromAmino(object: AccountLockedLongerDurationRequestAmino): AccountLockedLongerDurationRequest;
    toAmino(message: AccountLockedLongerDurationRequest): AccountLockedLongerDurationRequestAmino;
    fromAminoMsg(object: AccountLockedLongerDurationRequestAminoMsg): AccountLockedLongerDurationRequest;
    toAminoMsg(message: AccountLockedLongerDurationRequest): AccountLockedLongerDurationRequestAminoMsg;
    fromProtoMsg(message: AccountLockedLongerDurationRequestProtoMsg): AccountLockedLongerDurationRequest;
    toProto(message: AccountLockedLongerDurationRequest): Uint8Array;
    toProtoMsg(message: AccountLockedLongerDurationRequest): AccountLockedLongerDurationRequestProtoMsg;
};
export declare const AccountLockedLongerDurationResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AccountLockedLongerDurationResponse;
    isSDK(o: any): o is AccountLockedLongerDurationResponseSDKType;
    isAmino(o: any): o is AccountLockedLongerDurationResponseAmino;
    encode(message: AccountLockedLongerDurationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedLongerDurationResponse;
    fromJSON(object: any): AccountLockedLongerDurationResponse;
    toJSON(message: AccountLockedLongerDurationResponse): unknown;
    fromPartial(object: DeepPartial<AccountLockedLongerDurationResponse>): AccountLockedLongerDurationResponse;
    fromSDK(object: AccountLockedLongerDurationResponseSDKType): AccountLockedLongerDurationResponse;
    toSDK(message: AccountLockedLongerDurationResponse): AccountLockedLongerDurationResponseSDKType;
    fromAmino(object: AccountLockedLongerDurationResponseAmino): AccountLockedLongerDurationResponse;
    toAmino(message: AccountLockedLongerDurationResponse): AccountLockedLongerDurationResponseAmino;
    fromAminoMsg(object: AccountLockedLongerDurationResponseAminoMsg): AccountLockedLongerDurationResponse;
    toAminoMsg(message: AccountLockedLongerDurationResponse): AccountLockedLongerDurationResponseAminoMsg;
    fromProtoMsg(message: AccountLockedLongerDurationResponseProtoMsg): AccountLockedLongerDurationResponse;
    toProto(message: AccountLockedLongerDurationResponse): Uint8Array;
    toProtoMsg(message: AccountLockedLongerDurationResponse): AccountLockedLongerDurationResponseProtoMsg;
};
export declare const AccountLockedDurationRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AccountLockedDurationRequest;
    isSDK(o: any): o is AccountLockedDurationRequestSDKType;
    isAmino(o: any): o is AccountLockedDurationRequestAmino;
    encode(message: AccountLockedDurationRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedDurationRequest;
    fromJSON(object: any): AccountLockedDurationRequest;
    toJSON(message: AccountLockedDurationRequest): unknown;
    fromPartial(object: DeepPartial<AccountLockedDurationRequest>): AccountLockedDurationRequest;
    fromSDK(object: AccountLockedDurationRequestSDKType): AccountLockedDurationRequest;
    toSDK(message: AccountLockedDurationRequest): AccountLockedDurationRequestSDKType;
    fromAmino(object: AccountLockedDurationRequestAmino): AccountLockedDurationRequest;
    toAmino(message: AccountLockedDurationRequest): AccountLockedDurationRequestAmino;
    fromAminoMsg(object: AccountLockedDurationRequestAminoMsg): AccountLockedDurationRequest;
    toAminoMsg(message: AccountLockedDurationRequest): AccountLockedDurationRequestAminoMsg;
    fromProtoMsg(message: AccountLockedDurationRequestProtoMsg): AccountLockedDurationRequest;
    toProto(message: AccountLockedDurationRequest): Uint8Array;
    toProtoMsg(message: AccountLockedDurationRequest): AccountLockedDurationRequestProtoMsg;
};
export declare const AccountLockedDurationResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AccountLockedDurationResponse;
    isSDK(o: any): o is AccountLockedDurationResponseSDKType;
    isAmino(o: any): o is AccountLockedDurationResponseAmino;
    encode(message: AccountLockedDurationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedDurationResponse;
    fromJSON(object: any): AccountLockedDurationResponse;
    toJSON(message: AccountLockedDurationResponse): unknown;
    fromPartial(object: DeepPartial<AccountLockedDurationResponse>): AccountLockedDurationResponse;
    fromSDK(object: AccountLockedDurationResponseSDKType): AccountLockedDurationResponse;
    toSDK(message: AccountLockedDurationResponse): AccountLockedDurationResponseSDKType;
    fromAmino(object: AccountLockedDurationResponseAmino): AccountLockedDurationResponse;
    toAmino(message: AccountLockedDurationResponse): AccountLockedDurationResponseAmino;
    fromAminoMsg(object: AccountLockedDurationResponseAminoMsg): AccountLockedDurationResponse;
    toAminoMsg(message: AccountLockedDurationResponse): AccountLockedDurationResponseAminoMsg;
    fromProtoMsg(message: AccountLockedDurationResponseProtoMsg): AccountLockedDurationResponse;
    toProto(message: AccountLockedDurationResponse): Uint8Array;
    toProtoMsg(message: AccountLockedDurationResponse): AccountLockedDurationResponseProtoMsg;
};
export declare const AccountLockedLongerDurationNotUnlockingOnlyRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AccountLockedLongerDurationNotUnlockingOnlyRequest;
    isSDK(o: any): o is AccountLockedLongerDurationNotUnlockingOnlyRequestSDKType;
    isAmino(o: any): o is AccountLockedLongerDurationNotUnlockingOnlyRequestAmino;
    encode(message: AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedLongerDurationNotUnlockingOnlyRequest;
    fromJSON(object: any): AccountLockedLongerDurationNotUnlockingOnlyRequest;
    toJSON(message: AccountLockedLongerDurationNotUnlockingOnlyRequest): unknown;
    fromPartial(object: DeepPartial<AccountLockedLongerDurationNotUnlockingOnlyRequest>): AccountLockedLongerDurationNotUnlockingOnlyRequest;
    fromSDK(object: AccountLockedLongerDurationNotUnlockingOnlyRequestSDKType): AccountLockedLongerDurationNotUnlockingOnlyRequest;
    toSDK(message: AccountLockedLongerDurationNotUnlockingOnlyRequest): AccountLockedLongerDurationNotUnlockingOnlyRequestSDKType;
    fromAmino(object: AccountLockedLongerDurationNotUnlockingOnlyRequestAmino): AccountLockedLongerDurationNotUnlockingOnlyRequest;
    toAmino(message: AccountLockedLongerDurationNotUnlockingOnlyRequest): AccountLockedLongerDurationNotUnlockingOnlyRequestAmino;
    fromAminoMsg(object: AccountLockedLongerDurationNotUnlockingOnlyRequestAminoMsg): AccountLockedLongerDurationNotUnlockingOnlyRequest;
    toAminoMsg(message: AccountLockedLongerDurationNotUnlockingOnlyRequest): AccountLockedLongerDurationNotUnlockingOnlyRequestAminoMsg;
    fromProtoMsg(message: AccountLockedLongerDurationNotUnlockingOnlyRequestProtoMsg): AccountLockedLongerDurationNotUnlockingOnlyRequest;
    toProto(message: AccountLockedLongerDurationNotUnlockingOnlyRequest): Uint8Array;
    toProtoMsg(message: AccountLockedLongerDurationNotUnlockingOnlyRequest): AccountLockedLongerDurationNotUnlockingOnlyRequestProtoMsg;
};
export declare const AccountLockedLongerDurationNotUnlockingOnlyResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AccountLockedLongerDurationNotUnlockingOnlyResponse;
    isSDK(o: any): o is AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType;
    isAmino(o: any): o is AccountLockedLongerDurationNotUnlockingOnlyResponseAmino;
    encode(message: AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedLongerDurationNotUnlockingOnlyResponse;
    fromJSON(object: any): AccountLockedLongerDurationNotUnlockingOnlyResponse;
    toJSON(message: AccountLockedLongerDurationNotUnlockingOnlyResponse): unknown;
    fromPartial(object: DeepPartial<AccountLockedLongerDurationNotUnlockingOnlyResponse>): AccountLockedLongerDurationNotUnlockingOnlyResponse;
    fromSDK(object: AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType): AccountLockedLongerDurationNotUnlockingOnlyResponse;
    toSDK(message: AccountLockedLongerDurationNotUnlockingOnlyResponse): AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType;
    fromAmino(object: AccountLockedLongerDurationNotUnlockingOnlyResponseAmino): AccountLockedLongerDurationNotUnlockingOnlyResponse;
    toAmino(message: AccountLockedLongerDurationNotUnlockingOnlyResponse): AccountLockedLongerDurationNotUnlockingOnlyResponseAmino;
    fromAminoMsg(object: AccountLockedLongerDurationNotUnlockingOnlyResponseAminoMsg): AccountLockedLongerDurationNotUnlockingOnlyResponse;
    toAminoMsg(message: AccountLockedLongerDurationNotUnlockingOnlyResponse): AccountLockedLongerDurationNotUnlockingOnlyResponseAminoMsg;
    fromProtoMsg(message: AccountLockedLongerDurationNotUnlockingOnlyResponseProtoMsg): AccountLockedLongerDurationNotUnlockingOnlyResponse;
    toProto(message: AccountLockedLongerDurationNotUnlockingOnlyResponse): Uint8Array;
    toProtoMsg(message: AccountLockedLongerDurationNotUnlockingOnlyResponse): AccountLockedLongerDurationNotUnlockingOnlyResponseProtoMsg;
};
export declare const AccountLockedLongerDurationDenomRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AccountLockedLongerDurationDenomRequest;
    isSDK(o: any): o is AccountLockedLongerDurationDenomRequestSDKType;
    isAmino(o: any): o is AccountLockedLongerDurationDenomRequestAmino;
    encode(message: AccountLockedLongerDurationDenomRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedLongerDurationDenomRequest;
    fromJSON(object: any): AccountLockedLongerDurationDenomRequest;
    toJSON(message: AccountLockedLongerDurationDenomRequest): unknown;
    fromPartial(object: DeepPartial<AccountLockedLongerDurationDenomRequest>): AccountLockedLongerDurationDenomRequest;
    fromSDK(object: AccountLockedLongerDurationDenomRequestSDKType): AccountLockedLongerDurationDenomRequest;
    toSDK(message: AccountLockedLongerDurationDenomRequest): AccountLockedLongerDurationDenomRequestSDKType;
    fromAmino(object: AccountLockedLongerDurationDenomRequestAmino): AccountLockedLongerDurationDenomRequest;
    toAmino(message: AccountLockedLongerDurationDenomRequest): AccountLockedLongerDurationDenomRequestAmino;
    fromAminoMsg(object: AccountLockedLongerDurationDenomRequestAminoMsg): AccountLockedLongerDurationDenomRequest;
    toAminoMsg(message: AccountLockedLongerDurationDenomRequest): AccountLockedLongerDurationDenomRequestAminoMsg;
    fromProtoMsg(message: AccountLockedLongerDurationDenomRequestProtoMsg): AccountLockedLongerDurationDenomRequest;
    toProto(message: AccountLockedLongerDurationDenomRequest): Uint8Array;
    toProtoMsg(message: AccountLockedLongerDurationDenomRequest): AccountLockedLongerDurationDenomRequestProtoMsg;
};
export declare const AccountLockedLongerDurationDenomResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AccountLockedLongerDurationDenomResponse;
    isSDK(o: any): o is AccountLockedLongerDurationDenomResponseSDKType;
    isAmino(o: any): o is AccountLockedLongerDurationDenomResponseAmino;
    encode(message: AccountLockedLongerDurationDenomResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedLongerDurationDenomResponse;
    fromJSON(object: any): AccountLockedLongerDurationDenomResponse;
    toJSON(message: AccountLockedLongerDurationDenomResponse): unknown;
    fromPartial(object: DeepPartial<AccountLockedLongerDurationDenomResponse>): AccountLockedLongerDurationDenomResponse;
    fromSDK(object: AccountLockedLongerDurationDenomResponseSDKType): AccountLockedLongerDurationDenomResponse;
    toSDK(message: AccountLockedLongerDurationDenomResponse): AccountLockedLongerDurationDenomResponseSDKType;
    fromAmino(object: AccountLockedLongerDurationDenomResponseAmino): AccountLockedLongerDurationDenomResponse;
    toAmino(message: AccountLockedLongerDurationDenomResponse): AccountLockedLongerDurationDenomResponseAmino;
    fromAminoMsg(object: AccountLockedLongerDurationDenomResponseAminoMsg): AccountLockedLongerDurationDenomResponse;
    toAminoMsg(message: AccountLockedLongerDurationDenomResponse): AccountLockedLongerDurationDenomResponseAminoMsg;
    fromProtoMsg(message: AccountLockedLongerDurationDenomResponseProtoMsg): AccountLockedLongerDurationDenomResponse;
    toProto(message: AccountLockedLongerDurationDenomResponse): Uint8Array;
    toProtoMsg(message: AccountLockedLongerDurationDenomResponse): AccountLockedLongerDurationDenomResponseProtoMsg;
};
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
