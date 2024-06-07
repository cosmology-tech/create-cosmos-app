//@ts-nocheck
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockAmino, PeriodLockSDKType, SyntheticLock, SyntheticLockAmino, SyntheticLockSDKType } from "./lock";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
import { JsonSafe } from "../../json-safe";
import { DeepPartial, isSet, toTimestamp, fromTimestamp } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export const protobufPackage = "osmosis.lockup";
export interface ModuleBalanceRequest {}
export interface ModuleBalanceRequestProtoMsg {
  typeUrl: "/osmosis.lockup.ModuleBalanceRequest";
  value: Uint8Array;
}
export interface ModuleBalanceRequestAmino {}
export interface ModuleBalanceRequestAminoMsg {
  type: "osmosis/lockup/module-balance-request";
  value: ModuleBalanceRequestAmino;
}
export interface ModuleBalanceRequestSDKType {}
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
export interface ModuleLockedAmountRequest {}
export interface ModuleLockedAmountRequestProtoMsg {
  typeUrl: "/osmosis.lockup.ModuleLockedAmountRequest";
  value: Uint8Array;
}
export interface ModuleLockedAmountRequestAmino {}
export interface ModuleLockedAmountRequestAminoMsg {
  type: "osmosis/lockup/module-locked-amount-request";
  value: ModuleLockedAmountRequestAmino;
}
export interface ModuleLockedAmountRequestSDKType {}
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
  timestamp: Date;
}
export interface AccountLockedPastTimeRequestProtoMsg {
  typeUrl: "/osmosis.lockup.AccountLockedPastTimeRequest";
  value: Uint8Array;
}
export interface AccountLockedPastTimeRequestAmino {
  owner?: string;
  timestamp?: string;
}
export interface AccountLockedPastTimeRequestAminoMsg {
  type: "osmosis/lockup/account-locked-past-time-request";
  value: AccountLockedPastTimeRequestAmino;
}
export interface AccountLockedPastTimeRequestSDKType {
  owner: string;
  timestamp: Date;
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
  timestamp: Date;
}
export interface AccountLockedPastTimeNotUnlockingOnlyRequestProtoMsg {
  typeUrl: "/osmosis.lockup.AccountLockedPastTimeNotUnlockingOnlyRequest";
  value: Uint8Array;
}
export interface AccountLockedPastTimeNotUnlockingOnlyRequestAmino {
  owner?: string;
  timestamp?: string;
}
export interface AccountLockedPastTimeNotUnlockingOnlyRequestAminoMsg {
  type: "osmosis/lockup/account-locked-past-time-not-unlocking-only-request";
  value: AccountLockedPastTimeNotUnlockingOnlyRequestAmino;
}
export interface AccountLockedPastTimeNotUnlockingOnlyRequestSDKType {
  owner: string;
  timestamp: Date;
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
  timestamp: Date;
}
export interface AccountUnlockedBeforeTimeRequestProtoMsg {
  typeUrl: "/osmosis.lockup.AccountUnlockedBeforeTimeRequest";
  value: Uint8Array;
}
export interface AccountUnlockedBeforeTimeRequestAmino {
  owner?: string;
  timestamp?: string;
}
export interface AccountUnlockedBeforeTimeRequestAminoMsg {
  type: "osmosis/lockup/account-unlocked-before-time-request";
  value: AccountUnlockedBeforeTimeRequestAmino;
}
export interface AccountUnlockedBeforeTimeRequestSDKType {
  owner: string;
  timestamp: Date;
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
  timestamp: Date;
  denom: string;
}
export interface AccountLockedPastTimeDenomRequestProtoMsg {
  typeUrl: "/osmosis.lockup.AccountLockedPastTimeDenomRequest";
  value: Uint8Array;
}
export interface AccountLockedPastTimeDenomRequestAmino {
  owner?: string;
  timestamp?: string;
  denom?: string;
}
export interface AccountLockedPastTimeDenomRequestAminoMsg {
  type: "osmosis/lockup/account-locked-past-time-denom-request";
  value: AccountLockedPastTimeDenomRequestAmino;
}
export interface AccountLockedPastTimeDenomRequestSDKType {
  owner: string;
  timestamp: Date;
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
  duration: Duration;
}
export interface LockedDenomRequestProtoMsg {
  typeUrl: "/osmosis.lockup.LockedDenomRequest";
  value: Uint8Array;
}
export interface LockedDenomRequestAmino {
  denom?: string;
  duration?: DurationAmino;
}
export interface LockedDenomRequestAminoMsg {
  type: "osmosis/lockup/locked-denom-request";
  value: LockedDenomRequestAmino;
}
export interface LockedDenomRequestSDKType {
  denom: string;
  duration: DurationSDKType;
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
  lock?: PeriodLock;
}
export interface LockedResponseProtoMsg {
  typeUrl: "/osmosis.lockup.LockedResponse";
  value: Uint8Array;
}
export interface LockedResponseAmino {
  lock?: PeriodLockAmino;
}
export interface LockedResponseAminoMsg {
  type: "osmosis/lockup/locked-response";
  value: LockedResponseAmino;
}
export interface LockedResponseSDKType {
  lock?: PeriodLockSDKType;
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
  duration: Duration;
}
export interface AccountLockedLongerDurationRequestProtoMsg {
  typeUrl: "/osmosis.lockup.AccountLockedLongerDurationRequest";
  value: Uint8Array;
}
export interface AccountLockedLongerDurationRequestAmino {
  owner?: string;
  duration?: DurationAmino;
}
export interface AccountLockedLongerDurationRequestAminoMsg {
  type: "osmosis/lockup/account-locked-longer-duration-request";
  value: AccountLockedLongerDurationRequestAmino;
}
export interface AccountLockedLongerDurationRequestSDKType {
  owner: string;
  duration: DurationSDKType;
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
  duration: Duration;
}
export interface AccountLockedDurationRequestProtoMsg {
  typeUrl: "/osmosis.lockup.AccountLockedDurationRequest";
  value: Uint8Array;
}
export interface AccountLockedDurationRequestAmino {
  owner?: string;
  duration?: DurationAmino;
}
export interface AccountLockedDurationRequestAminoMsg {
  type: "osmosis/lockup/account-locked-duration-request";
  value: AccountLockedDurationRequestAmino;
}
export interface AccountLockedDurationRequestSDKType {
  owner: string;
  duration: DurationSDKType;
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
  duration: Duration;
}
export interface AccountLockedLongerDurationNotUnlockingOnlyRequestProtoMsg {
  typeUrl: "/osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnlyRequest";
  value: Uint8Array;
}
export interface AccountLockedLongerDurationNotUnlockingOnlyRequestAmino {
  owner?: string;
  duration?: DurationAmino;
}
export interface AccountLockedLongerDurationNotUnlockingOnlyRequestAminoMsg {
  type: "osmosis/lockup/account-locked-longer-duration-not-unlocking-only-request";
  value: AccountLockedLongerDurationNotUnlockingOnlyRequestAmino;
}
export interface AccountLockedLongerDurationNotUnlockingOnlyRequestSDKType {
  owner: string;
  duration: DurationSDKType;
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
  duration: Duration;
  denom: string;
}
export interface AccountLockedLongerDurationDenomRequestProtoMsg {
  typeUrl: "/osmosis.lockup.AccountLockedLongerDurationDenomRequest";
  value: Uint8Array;
}
export interface AccountLockedLongerDurationDenomRequestAmino {
  owner?: string;
  duration?: DurationAmino;
  denom?: string;
}
export interface AccountLockedLongerDurationDenomRequestAminoMsg {
  type: "osmosis/lockup/account-locked-longer-duration-denom-request";
  value: AccountLockedLongerDurationDenomRequestAmino;
}
export interface AccountLockedLongerDurationDenomRequestSDKType {
  owner: string;
  duration: DurationSDKType;
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
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/osmosis.lockup.QueryParamsRequest";
  value: Uint8Array;
}
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "osmosis/lockup/query-params-request";
  value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/osmosis.lockup.QueryParamsResponse";
  value: Uint8Array;
}
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "osmosis/lockup/query-params-response";
  value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseModuleBalanceRequest(): ModuleBalanceRequest {
  return {};
}
export const ModuleBalanceRequest = {
  typeUrl: "/osmosis.lockup.ModuleBalanceRequest",
  aminoType: "osmosis/lockup/module-balance-request",
  is(o: any): o is ModuleBalanceRequest {
    return o && o.$typeUrl === ModuleBalanceRequest.typeUrl;
  },
  isSDK(o: any): o is ModuleBalanceRequestSDKType {
    return o && o.$typeUrl === ModuleBalanceRequest.typeUrl;
  },
  isAmino(o: any): o is ModuleBalanceRequestAmino {
    return o && o.$typeUrl === ModuleBalanceRequest.typeUrl;
  },
  encode(_: ModuleBalanceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ModuleBalanceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): ModuleBalanceRequest {
    const obj = createBaseModuleBalanceRequest();
    return obj;
  },
  toJSON(_: ModuleBalanceRequest): JsonSafe<ModuleBalanceRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<ModuleBalanceRequest>): ModuleBalanceRequest {
    const message = createBaseModuleBalanceRequest();
    return message;
  },
  fromSDK(_: ModuleBalanceRequestSDKType): ModuleBalanceRequest {
    return {};
  },
  toSDK(_: ModuleBalanceRequest): ModuleBalanceRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: ModuleBalanceRequestAmino): ModuleBalanceRequest {
    const message = createBaseModuleBalanceRequest();
    return message;
  },
  toAmino(_: ModuleBalanceRequest): ModuleBalanceRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ModuleBalanceRequestAminoMsg): ModuleBalanceRequest {
    return ModuleBalanceRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ModuleBalanceRequest): ModuleBalanceRequestAminoMsg {
    return {
      type: "osmosis/lockup/module-balance-request",
      value: ModuleBalanceRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleBalanceRequestProtoMsg): ModuleBalanceRequest {
    return ModuleBalanceRequest.decode(message.value);
  },
  toProto(message: ModuleBalanceRequest): Uint8Array {
    return ModuleBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: ModuleBalanceRequest): ModuleBalanceRequestProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.ModuleBalanceRequest",
      value: ModuleBalanceRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ModuleBalanceRequest.typeUrl, ModuleBalanceRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ModuleBalanceRequest.aminoType, ModuleBalanceRequest.typeUrl);
function createBaseModuleBalanceResponse(): ModuleBalanceResponse {
  return {
    coins: []
  };
}
export const ModuleBalanceResponse = {
  typeUrl: "/osmosis.lockup.ModuleBalanceResponse",
  aminoType: "osmosis/lockup/module-balance-response",
  is(o: any): o is ModuleBalanceResponse {
    return o && (o.$typeUrl === ModuleBalanceResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.is(o.coins[0])));
  },
  isSDK(o: any): o is ModuleBalanceResponseSDKType {
    return o && (o.$typeUrl === ModuleBalanceResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.isSDK(o.coins[0])));
  },
  isAmino(o: any): o is ModuleBalanceResponseAmino {
    return o && (o.$typeUrl === ModuleBalanceResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.isAmino(o.coins[0])));
  },
  encode(message: ModuleBalanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ModuleBalanceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ModuleBalanceResponse {
    const obj = createBaseModuleBalanceResponse();
    if (Array.isArray(object?.coins)) obj.coins = object.coins.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: ModuleBalanceResponse): JsonSafe<ModuleBalanceResponse> {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ModuleBalanceResponse>): ModuleBalanceResponse {
    const message = createBaseModuleBalanceResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ModuleBalanceResponseSDKType): ModuleBalanceResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: ModuleBalanceResponse): ModuleBalanceResponseSDKType {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromAmino(object: ModuleBalanceResponseAmino): ModuleBalanceResponse {
    const message = createBaseModuleBalanceResponse();
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ModuleBalanceResponse): ModuleBalanceResponseAmino {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object: ModuleBalanceResponseAminoMsg): ModuleBalanceResponse {
    return ModuleBalanceResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ModuleBalanceResponse): ModuleBalanceResponseAminoMsg {
    return {
      type: "osmosis/lockup/module-balance-response",
      value: ModuleBalanceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleBalanceResponseProtoMsg): ModuleBalanceResponse {
    return ModuleBalanceResponse.decode(message.value);
  },
  toProto(message: ModuleBalanceResponse): Uint8Array {
    return ModuleBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: ModuleBalanceResponse): ModuleBalanceResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.ModuleBalanceResponse",
      value: ModuleBalanceResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ModuleBalanceResponse.typeUrl, ModuleBalanceResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ModuleBalanceResponse.aminoType, ModuleBalanceResponse.typeUrl);
function createBaseModuleLockedAmountRequest(): ModuleLockedAmountRequest {
  return {};
}
export const ModuleLockedAmountRequest = {
  typeUrl: "/osmosis.lockup.ModuleLockedAmountRequest",
  aminoType: "osmosis/lockup/module-locked-amount-request",
  is(o: any): o is ModuleLockedAmountRequest {
    return o && o.$typeUrl === ModuleLockedAmountRequest.typeUrl;
  },
  isSDK(o: any): o is ModuleLockedAmountRequestSDKType {
    return o && o.$typeUrl === ModuleLockedAmountRequest.typeUrl;
  },
  isAmino(o: any): o is ModuleLockedAmountRequestAmino {
    return o && o.$typeUrl === ModuleLockedAmountRequest.typeUrl;
  },
  encode(_: ModuleLockedAmountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ModuleLockedAmountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleLockedAmountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): ModuleLockedAmountRequest {
    const obj = createBaseModuleLockedAmountRequest();
    return obj;
  },
  toJSON(_: ModuleLockedAmountRequest): JsonSafe<ModuleLockedAmountRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<ModuleLockedAmountRequest>): ModuleLockedAmountRequest {
    const message = createBaseModuleLockedAmountRequest();
    return message;
  },
  fromSDK(_: ModuleLockedAmountRequestSDKType): ModuleLockedAmountRequest {
    return {};
  },
  toSDK(_: ModuleLockedAmountRequest): ModuleLockedAmountRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: ModuleLockedAmountRequestAmino): ModuleLockedAmountRequest {
    const message = createBaseModuleLockedAmountRequest();
    return message;
  },
  toAmino(_: ModuleLockedAmountRequest): ModuleLockedAmountRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ModuleLockedAmountRequestAminoMsg): ModuleLockedAmountRequest {
    return ModuleLockedAmountRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ModuleLockedAmountRequest): ModuleLockedAmountRequestAminoMsg {
    return {
      type: "osmosis/lockup/module-locked-amount-request",
      value: ModuleLockedAmountRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleLockedAmountRequestProtoMsg): ModuleLockedAmountRequest {
    return ModuleLockedAmountRequest.decode(message.value);
  },
  toProto(message: ModuleLockedAmountRequest): Uint8Array {
    return ModuleLockedAmountRequest.encode(message).finish();
  },
  toProtoMsg(message: ModuleLockedAmountRequest): ModuleLockedAmountRequestProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.ModuleLockedAmountRequest",
      value: ModuleLockedAmountRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ModuleLockedAmountRequest.typeUrl, ModuleLockedAmountRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ModuleLockedAmountRequest.aminoType, ModuleLockedAmountRequest.typeUrl);
function createBaseModuleLockedAmountResponse(): ModuleLockedAmountResponse {
  return {
    coins: []
  };
}
export const ModuleLockedAmountResponse = {
  typeUrl: "/osmosis.lockup.ModuleLockedAmountResponse",
  aminoType: "osmosis/lockup/module-locked-amount-response",
  is(o: any): o is ModuleLockedAmountResponse {
    return o && (o.$typeUrl === ModuleLockedAmountResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.is(o.coins[0])));
  },
  isSDK(o: any): o is ModuleLockedAmountResponseSDKType {
    return o && (o.$typeUrl === ModuleLockedAmountResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.isSDK(o.coins[0])));
  },
  isAmino(o: any): o is ModuleLockedAmountResponseAmino {
    return o && (o.$typeUrl === ModuleLockedAmountResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.isAmino(o.coins[0])));
  },
  encode(message: ModuleLockedAmountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ModuleLockedAmountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleLockedAmountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ModuleLockedAmountResponse {
    const obj = createBaseModuleLockedAmountResponse();
    if (Array.isArray(object?.coins)) obj.coins = object.coins.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: ModuleLockedAmountResponse): JsonSafe<ModuleLockedAmountResponse> {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ModuleLockedAmountResponse>): ModuleLockedAmountResponse {
    const message = createBaseModuleLockedAmountResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ModuleLockedAmountResponseSDKType): ModuleLockedAmountResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: ModuleLockedAmountResponse): ModuleLockedAmountResponseSDKType {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromAmino(object: ModuleLockedAmountResponseAmino): ModuleLockedAmountResponse {
    const message = createBaseModuleLockedAmountResponse();
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ModuleLockedAmountResponse): ModuleLockedAmountResponseAmino {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object: ModuleLockedAmountResponseAminoMsg): ModuleLockedAmountResponse {
    return ModuleLockedAmountResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ModuleLockedAmountResponse): ModuleLockedAmountResponseAminoMsg {
    return {
      type: "osmosis/lockup/module-locked-amount-response",
      value: ModuleLockedAmountResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleLockedAmountResponseProtoMsg): ModuleLockedAmountResponse {
    return ModuleLockedAmountResponse.decode(message.value);
  },
  toProto(message: ModuleLockedAmountResponse): Uint8Array {
    return ModuleLockedAmountResponse.encode(message).finish();
  },
  toProtoMsg(message: ModuleLockedAmountResponse): ModuleLockedAmountResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.ModuleLockedAmountResponse",
      value: ModuleLockedAmountResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ModuleLockedAmountResponse.typeUrl, ModuleLockedAmountResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ModuleLockedAmountResponse.aminoType, ModuleLockedAmountResponse.typeUrl);
function createBaseAccountUnlockableCoinsRequest(): AccountUnlockableCoinsRequest {
  return {
    owner: ""
  };
}
export const AccountUnlockableCoinsRequest = {
  typeUrl: "/osmosis.lockup.AccountUnlockableCoinsRequest",
  aminoType: "osmosis/lockup/account-unlockable-coins-request",
  is(o: any): o is AccountUnlockableCoinsRequest {
    return o && (o.$typeUrl === AccountUnlockableCoinsRequest.typeUrl || typeof o.owner === "string");
  },
  isSDK(o: any): o is AccountUnlockableCoinsRequestSDKType {
    return o && (o.$typeUrl === AccountUnlockableCoinsRequest.typeUrl || typeof o.owner === "string");
  },
  isAmino(o: any): o is AccountUnlockableCoinsRequestAmino {
    return o && (o.$typeUrl === AccountUnlockableCoinsRequest.typeUrl || typeof o.owner === "string");
  },
  encode(message: AccountUnlockableCoinsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== undefined) {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountUnlockableCoinsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountUnlockableCoinsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccountUnlockableCoinsRequest {
    const obj = createBaseAccountUnlockableCoinsRequest();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: AccountUnlockableCoinsRequest): JsonSafe<AccountUnlockableCoinsRequest> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial(object: DeepPartial<AccountUnlockableCoinsRequest>): AccountUnlockableCoinsRequest {
    const message = createBaseAccountUnlockableCoinsRequest();
    message.owner = object.owner ?? "";
    return message;
  },
  fromSDK(object: AccountUnlockableCoinsRequestSDKType): AccountUnlockableCoinsRequest {
    return {
      owner: object?.owner
    };
  },
  toSDK(message: AccountUnlockableCoinsRequest): AccountUnlockableCoinsRequestSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    return obj;
  },
  fromAmino(object: AccountUnlockableCoinsRequestAmino): AccountUnlockableCoinsRequest {
    const message = createBaseAccountUnlockableCoinsRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: AccountUnlockableCoinsRequest): AccountUnlockableCoinsRequestAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: AccountUnlockableCoinsRequestAminoMsg): AccountUnlockableCoinsRequest {
    return AccountUnlockableCoinsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: AccountUnlockableCoinsRequest): AccountUnlockableCoinsRequestAminoMsg {
    return {
      type: "osmosis/lockup/account-unlockable-coins-request",
      value: AccountUnlockableCoinsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: AccountUnlockableCoinsRequestProtoMsg): AccountUnlockableCoinsRequest {
    return AccountUnlockableCoinsRequest.decode(message.value);
  },
  toProto(message: AccountUnlockableCoinsRequest): Uint8Array {
    return AccountUnlockableCoinsRequest.encode(message).finish();
  },
  toProtoMsg(message: AccountUnlockableCoinsRequest): AccountUnlockableCoinsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.AccountUnlockableCoinsRequest",
      value: AccountUnlockableCoinsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AccountUnlockableCoinsRequest.typeUrl, AccountUnlockableCoinsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountUnlockableCoinsRequest.aminoType, AccountUnlockableCoinsRequest.typeUrl);
function createBaseAccountUnlockableCoinsResponse(): AccountUnlockableCoinsResponse {
  return {
    coins: []
  };
}
export const AccountUnlockableCoinsResponse = {
  typeUrl: "/osmosis.lockup.AccountUnlockableCoinsResponse",
  aminoType: "osmosis/lockup/account-unlockable-coins-response",
  is(o: any): o is AccountUnlockableCoinsResponse {
    return o && (o.$typeUrl === AccountUnlockableCoinsResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.is(o.coins[0])));
  },
  isSDK(o: any): o is AccountUnlockableCoinsResponseSDKType {
    return o && (o.$typeUrl === AccountUnlockableCoinsResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.isSDK(o.coins[0])));
  },
  isAmino(o: any): o is AccountUnlockableCoinsResponseAmino {
    return o && (o.$typeUrl === AccountUnlockableCoinsResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.isAmino(o.coins[0])));
  },
  encode(message: AccountUnlockableCoinsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountUnlockableCoinsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountUnlockableCoinsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccountUnlockableCoinsResponse {
    const obj = createBaseAccountUnlockableCoinsResponse();
    if (Array.isArray(object?.coins)) obj.coins = object.coins.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: AccountUnlockableCoinsResponse): JsonSafe<AccountUnlockableCoinsResponse> {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<AccountUnlockableCoinsResponse>): AccountUnlockableCoinsResponse {
    const message = createBaseAccountUnlockableCoinsResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: AccountUnlockableCoinsResponseSDKType): AccountUnlockableCoinsResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: AccountUnlockableCoinsResponse): AccountUnlockableCoinsResponseSDKType {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromAmino(object: AccountUnlockableCoinsResponseAmino): AccountUnlockableCoinsResponse {
    const message = createBaseAccountUnlockableCoinsResponse();
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AccountUnlockableCoinsResponse): AccountUnlockableCoinsResponseAmino {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object: AccountUnlockableCoinsResponseAminoMsg): AccountUnlockableCoinsResponse {
    return AccountUnlockableCoinsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: AccountUnlockableCoinsResponse): AccountUnlockableCoinsResponseAminoMsg {
    return {
      type: "osmosis/lockup/account-unlockable-coins-response",
      value: AccountUnlockableCoinsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: AccountUnlockableCoinsResponseProtoMsg): AccountUnlockableCoinsResponse {
    return AccountUnlockableCoinsResponse.decode(message.value);
  },
  toProto(message: AccountUnlockableCoinsResponse): Uint8Array {
    return AccountUnlockableCoinsResponse.encode(message).finish();
  },
  toProtoMsg(message: AccountUnlockableCoinsResponse): AccountUnlockableCoinsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.AccountUnlockableCoinsResponse",
      value: AccountUnlockableCoinsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AccountUnlockableCoinsResponse.typeUrl, AccountUnlockableCoinsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountUnlockableCoinsResponse.aminoType, AccountUnlockableCoinsResponse.typeUrl);
function createBaseAccountUnlockingCoinsRequest(): AccountUnlockingCoinsRequest {
  return {
    owner: ""
  };
}
export const AccountUnlockingCoinsRequest = {
  typeUrl: "/osmosis.lockup.AccountUnlockingCoinsRequest",
  aminoType: "osmosis/lockup/account-unlocking-coins-request",
  is(o: any): o is AccountUnlockingCoinsRequest {
    return o && (o.$typeUrl === AccountUnlockingCoinsRequest.typeUrl || typeof o.owner === "string");
  },
  isSDK(o: any): o is AccountUnlockingCoinsRequestSDKType {
    return o && (o.$typeUrl === AccountUnlockingCoinsRequest.typeUrl || typeof o.owner === "string");
  },
  isAmino(o: any): o is AccountUnlockingCoinsRequestAmino {
    return o && (o.$typeUrl === AccountUnlockingCoinsRequest.typeUrl || typeof o.owner === "string");
  },
  encode(message: AccountUnlockingCoinsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== undefined) {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountUnlockingCoinsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountUnlockingCoinsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccountUnlockingCoinsRequest {
    const obj = createBaseAccountUnlockingCoinsRequest();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: AccountUnlockingCoinsRequest): JsonSafe<AccountUnlockingCoinsRequest> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial(object: DeepPartial<AccountUnlockingCoinsRequest>): AccountUnlockingCoinsRequest {
    const message = createBaseAccountUnlockingCoinsRequest();
    message.owner = object.owner ?? "";
    return message;
  },
  fromSDK(object: AccountUnlockingCoinsRequestSDKType): AccountUnlockingCoinsRequest {
    return {
      owner: object?.owner
    };
  },
  toSDK(message: AccountUnlockingCoinsRequest): AccountUnlockingCoinsRequestSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    return obj;
  },
  fromAmino(object: AccountUnlockingCoinsRequestAmino): AccountUnlockingCoinsRequest {
    const message = createBaseAccountUnlockingCoinsRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: AccountUnlockingCoinsRequest): AccountUnlockingCoinsRequestAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: AccountUnlockingCoinsRequestAminoMsg): AccountUnlockingCoinsRequest {
    return AccountUnlockingCoinsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: AccountUnlockingCoinsRequest): AccountUnlockingCoinsRequestAminoMsg {
    return {
      type: "osmosis/lockup/account-unlocking-coins-request",
      value: AccountUnlockingCoinsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: AccountUnlockingCoinsRequestProtoMsg): AccountUnlockingCoinsRequest {
    return AccountUnlockingCoinsRequest.decode(message.value);
  },
  toProto(message: AccountUnlockingCoinsRequest): Uint8Array {
    return AccountUnlockingCoinsRequest.encode(message).finish();
  },
  toProtoMsg(message: AccountUnlockingCoinsRequest): AccountUnlockingCoinsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.AccountUnlockingCoinsRequest",
      value: AccountUnlockingCoinsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AccountUnlockingCoinsRequest.typeUrl, AccountUnlockingCoinsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountUnlockingCoinsRequest.aminoType, AccountUnlockingCoinsRequest.typeUrl);
function createBaseAccountUnlockingCoinsResponse(): AccountUnlockingCoinsResponse {
  return {
    coins: []
  };
}
export const AccountUnlockingCoinsResponse = {
  typeUrl: "/osmosis.lockup.AccountUnlockingCoinsResponse",
  aminoType: "osmosis/lockup/account-unlocking-coins-response",
  is(o: any): o is AccountUnlockingCoinsResponse {
    return o && (o.$typeUrl === AccountUnlockingCoinsResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.is(o.coins[0])));
  },
  isSDK(o: any): o is AccountUnlockingCoinsResponseSDKType {
    return o && (o.$typeUrl === AccountUnlockingCoinsResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.isSDK(o.coins[0])));
  },
  isAmino(o: any): o is AccountUnlockingCoinsResponseAmino {
    return o && (o.$typeUrl === AccountUnlockingCoinsResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.isAmino(o.coins[0])));
  },
  encode(message: AccountUnlockingCoinsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountUnlockingCoinsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountUnlockingCoinsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccountUnlockingCoinsResponse {
    const obj = createBaseAccountUnlockingCoinsResponse();
    if (Array.isArray(object?.coins)) obj.coins = object.coins.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: AccountUnlockingCoinsResponse): JsonSafe<AccountUnlockingCoinsResponse> {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<AccountUnlockingCoinsResponse>): AccountUnlockingCoinsResponse {
    const message = createBaseAccountUnlockingCoinsResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: AccountUnlockingCoinsResponseSDKType): AccountUnlockingCoinsResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: AccountUnlockingCoinsResponse): AccountUnlockingCoinsResponseSDKType {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromAmino(object: AccountUnlockingCoinsResponseAmino): AccountUnlockingCoinsResponse {
    const message = createBaseAccountUnlockingCoinsResponse();
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AccountUnlockingCoinsResponse): AccountUnlockingCoinsResponseAmino {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object: AccountUnlockingCoinsResponseAminoMsg): AccountUnlockingCoinsResponse {
    return AccountUnlockingCoinsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: AccountUnlockingCoinsResponse): AccountUnlockingCoinsResponseAminoMsg {
    return {
      type: "osmosis/lockup/account-unlocking-coins-response",
      value: AccountUnlockingCoinsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: AccountUnlockingCoinsResponseProtoMsg): AccountUnlockingCoinsResponse {
    return AccountUnlockingCoinsResponse.decode(message.value);
  },
  toProto(message: AccountUnlockingCoinsResponse): Uint8Array {
    return AccountUnlockingCoinsResponse.encode(message).finish();
  },
  toProtoMsg(message: AccountUnlockingCoinsResponse): AccountUnlockingCoinsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.AccountUnlockingCoinsResponse",
      value: AccountUnlockingCoinsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AccountUnlockingCoinsResponse.typeUrl, AccountUnlockingCoinsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountUnlockingCoinsResponse.aminoType, AccountUnlockingCoinsResponse.typeUrl);
function createBaseAccountLockedCoinsRequest(): AccountLockedCoinsRequest {
  return {
    owner: ""
  };
}
export const AccountLockedCoinsRequest = {
  typeUrl: "/osmosis.lockup.AccountLockedCoinsRequest",
  aminoType: "osmosis/lockup/account-locked-coins-request",
  is(o: any): o is AccountLockedCoinsRequest {
    return o && (o.$typeUrl === AccountLockedCoinsRequest.typeUrl || typeof o.owner === "string");
  },
  isSDK(o: any): o is AccountLockedCoinsRequestSDKType {
    return o && (o.$typeUrl === AccountLockedCoinsRequest.typeUrl || typeof o.owner === "string");
  },
  isAmino(o: any): o is AccountLockedCoinsRequestAmino {
    return o && (o.$typeUrl === AccountLockedCoinsRequest.typeUrl || typeof o.owner === "string");
  },
  encode(message: AccountLockedCoinsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== undefined) {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedCoinsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedCoinsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccountLockedCoinsRequest {
    const obj = createBaseAccountLockedCoinsRequest();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: AccountLockedCoinsRequest): JsonSafe<AccountLockedCoinsRequest> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial(object: DeepPartial<AccountLockedCoinsRequest>): AccountLockedCoinsRequest {
    const message = createBaseAccountLockedCoinsRequest();
    message.owner = object.owner ?? "";
    return message;
  },
  fromSDK(object: AccountLockedCoinsRequestSDKType): AccountLockedCoinsRequest {
    return {
      owner: object?.owner
    };
  },
  toSDK(message: AccountLockedCoinsRequest): AccountLockedCoinsRequestSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    return obj;
  },
  fromAmino(object: AccountLockedCoinsRequestAmino): AccountLockedCoinsRequest {
    const message = createBaseAccountLockedCoinsRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: AccountLockedCoinsRequest): AccountLockedCoinsRequestAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: AccountLockedCoinsRequestAminoMsg): AccountLockedCoinsRequest {
    return AccountLockedCoinsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: AccountLockedCoinsRequest): AccountLockedCoinsRequestAminoMsg {
    return {
      type: "osmosis/lockup/account-locked-coins-request",
      value: AccountLockedCoinsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: AccountLockedCoinsRequestProtoMsg): AccountLockedCoinsRequest {
    return AccountLockedCoinsRequest.decode(message.value);
  },
  toProto(message: AccountLockedCoinsRequest): Uint8Array {
    return AccountLockedCoinsRequest.encode(message).finish();
  },
  toProtoMsg(message: AccountLockedCoinsRequest): AccountLockedCoinsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.AccountLockedCoinsRequest",
      value: AccountLockedCoinsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AccountLockedCoinsRequest.typeUrl, AccountLockedCoinsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountLockedCoinsRequest.aminoType, AccountLockedCoinsRequest.typeUrl);
function createBaseAccountLockedCoinsResponse(): AccountLockedCoinsResponse {
  return {
    coins: []
  };
}
export const AccountLockedCoinsResponse = {
  typeUrl: "/osmosis.lockup.AccountLockedCoinsResponse",
  aminoType: "osmosis/lockup/account-locked-coins-response",
  is(o: any): o is AccountLockedCoinsResponse {
    return o && (o.$typeUrl === AccountLockedCoinsResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.is(o.coins[0])));
  },
  isSDK(o: any): o is AccountLockedCoinsResponseSDKType {
    return o && (o.$typeUrl === AccountLockedCoinsResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.isSDK(o.coins[0])));
  },
  isAmino(o: any): o is AccountLockedCoinsResponseAmino {
    return o && (o.$typeUrl === AccountLockedCoinsResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.isAmino(o.coins[0])));
  },
  encode(message: AccountLockedCoinsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedCoinsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedCoinsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccountLockedCoinsResponse {
    const obj = createBaseAccountLockedCoinsResponse();
    if (Array.isArray(object?.coins)) obj.coins = object.coins.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: AccountLockedCoinsResponse): JsonSafe<AccountLockedCoinsResponse> {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<AccountLockedCoinsResponse>): AccountLockedCoinsResponse {
    const message = createBaseAccountLockedCoinsResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: AccountLockedCoinsResponseSDKType): AccountLockedCoinsResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: AccountLockedCoinsResponse): AccountLockedCoinsResponseSDKType {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromAmino(object: AccountLockedCoinsResponseAmino): AccountLockedCoinsResponse {
    const message = createBaseAccountLockedCoinsResponse();
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AccountLockedCoinsResponse): AccountLockedCoinsResponseAmino {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object: AccountLockedCoinsResponseAminoMsg): AccountLockedCoinsResponse {
    return AccountLockedCoinsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: AccountLockedCoinsResponse): AccountLockedCoinsResponseAminoMsg {
    return {
      type: "osmosis/lockup/account-locked-coins-response",
      value: AccountLockedCoinsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: AccountLockedCoinsResponseProtoMsg): AccountLockedCoinsResponse {
    return AccountLockedCoinsResponse.decode(message.value);
  },
  toProto(message: AccountLockedCoinsResponse): Uint8Array {
    return AccountLockedCoinsResponse.encode(message).finish();
  },
  toProtoMsg(message: AccountLockedCoinsResponse): AccountLockedCoinsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.AccountLockedCoinsResponse",
      value: AccountLockedCoinsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AccountLockedCoinsResponse.typeUrl, AccountLockedCoinsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountLockedCoinsResponse.aminoType, AccountLockedCoinsResponse.typeUrl);
function createBaseAccountLockedPastTimeRequest(): AccountLockedPastTimeRequest {
  return {
    owner: "",
    timestamp: new Date()
  };
}
export const AccountLockedPastTimeRequest = {
  typeUrl: "/osmosis.lockup.AccountLockedPastTimeRequest",
  aminoType: "osmosis/lockup/account-locked-past-time-request",
  is(o: any): o is AccountLockedPastTimeRequest {
    return o && (o.$typeUrl === AccountLockedPastTimeRequest.typeUrl || typeof o.owner === "string" && Timestamp.is(o.timestamp));
  },
  isSDK(o: any): o is AccountLockedPastTimeRequestSDKType {
    return o && (o.$typeUrl === AccountLockedPastTimeRequest.typeUrl || typeof o.owner === "string" && Timestamp.isSDK(o.timestamp));
  },
  isAmino(o: any): o is AccountLockedPastTimeRequestAmino {
    return o && (o.$typeUrl === AccountLockedPastTimeRequest.typeUrl || typeof o.owner === "string" && Timestamp.isAmino(o.timestamp));
  },
  encode(message: AccountLockedPastTimeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== undefined) {
      writer.uint32(10).string(message.owner);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedPastTimeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedPastTimeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccountLockedPastTimeRequest {
    const obj = createBaseAccountLockedPastTimeRequest();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.timestamp)) obj.timestamp = new Date(object.timestamp);
    return obj;
  },
  toJSON(message: AccountLockedPastTimeRequest): JsonSafe<AccountLockedPastTimeRequest> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<AccountLockedPastTimeRequest>): AccountLockedPastTimeRequest {
    const message = createBaseAccountLockedPastTimeRequest();
    message.owner = object.owner ?? "";
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
  fromSDK(object: AccountLockedPastTimeRequestSDKType): AccountLockedPastTimeRequest {
    return {
      owner: object?.owner,
      timestamp: object.timestamp ?? undefined
    };
  },
  toSDK(message: AccountLockedPastTimeRequest): AccountLockedPastTimeRequestSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    message.timestamp !== undefined && (obj.timestamp = message.timestamp ?? undefined);
    return obj;
  },
  fromAmino(object: AccountLockedPastTimeRequestAmino): AccountLockedPastTimeRequest {
    const message = createBaseAccountLockedPastTimeRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
    }
    return message;
  },
  toAmino(message: AccountLockedPastTimeRequest): AccountLockedPastTimeRequestAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
    return obj;
  },
  fromAminoMsg(object: AccountLockedPastTimeRequestAminoMsg): AccountLockedPastTimeRequest {
    return AccountLockedPastTimeRequest.fromAmino(object.value);
  },
  toAminoMsg(message: AccountLockedPastTimeRequest): AccountLockedPastTimeRequestAminoMsg {
    return {
      type: "osmosis/lockup/account-locked-past-time-request",
      value: AccountLockedPastTimeRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: AccountLockedPastTimeRequestProtoMsg): AccountLockedPastTimeRequest {
    return AccountLockedPastTimeRequest.decode(message.value);
  },
  toProto(message: AccountLockedPastTimeRequest): Uint8Array {
    return AccountLockedPastTimeRequest.encode(message).finish();
  },
  toProtoMsg(message: AccountLockedPastTimeRequest): AccountLockedPastTimeRequestProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.AccountLockedPastTimeRequest",
      value: AccountLockedPastTimeRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AccountLockedPastTimeRequest.typeUrl, AccountLockedPastTimeRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountLockedPastTimeRequest.aminoType, AccountLockedPastTimeRequest.typeUrl);
function createBaseAccountLockedPastTimeResponse(): AccountLockedPastTimeResponse {
  return {
    locks: []
  };
}
export const AccountLockedPastTimeResponse = {
  typeUrl: "/osmosis.lockup.AccountLockedPastTimeResponse",
  aminoType: "osmosis/lockup/account-locked-past-time-response",
  is(o: any): o is AccountLockedPastTimeResponse {
    return o && (o.$typeUrl === AccountLockedPastTimeResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || PeriodLock.is(o.locks[0])));
  },
  isSDK(o: any): o is AccountLockedPastTimeResponseSDKType {
    return o && (o.$typeUrl === AccountLockedPastTimeResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || PeriodLock.isSDK(o.locks[0])));
  },
  isAmino(o: any): o is AccountLockedPastTimeResponseAmino {
    return o && (o.$typeUrl === AccountLockedPastTimeResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || PeriodLock.isAmino(o.locks[0])));
  },
  encode(message: AccountLockedPastTimeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedPastTimeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedPastTimeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccountLockedPastTimeResponse {
    const obj = createBaseAccountLockedPastTimeResponse();
    if (Array.isArray(object?.locks)) obj.locks = object.locks.map((e: any) => PeriodLock.fromJSON(e));
    return obj;
  },
  toJSON(message: AccountLockedPastTimeResponse): JsonSafe<AccountLockedPastTimeResponse> {
    const obj: any = {};
    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toJSON(e) : undefined);
    } else {
      obj.locks = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<AccountLockedPastTimeResponse>): AccountLockedPastTimeResponse {
    const message = createBaseAccountLockedPastTimeResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: AccountLockedPastTimeResponseSDKType): AccountLockedPastTimeResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromSDK(e)) : []
    };
  },
  toSDK(message: AccountLockedPastTimeResponse): AccountLockedPastTimeResponseSDKType {
    const obj: any = {};
    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toSDK(e) : undefined);
    } else {
      obj.locks = [];
    }
    return obj;
  },
  fromAmino(object: AccountLockedPastTimeResponseAmino): AccountLockedPastTimeResponse {
    const message = createBaseAccountLockedPastTimeResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AccountLockedPastTimeResponse): AccountLockedPastTimeResponseAmino {
    const obj: any = {};
    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
    } else {
      obj.locks = message.locks;
    }
    return obj;
  },
  fromAminoMsg(object: AccountLockedPastTimeResponseAminoMsg): AccountLockedPastTimeResponse {
    return AccountLockedPastTimeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: AccountLockedPastTimeResponse): AccountLockedPastTimeResponseAminoMsg {
    return {
      type: "osmosis/lockup/account-locked-past-time-response",
      value: AccountLockedPastTimeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: AccountLockedPastTimeResponseProtoMsg): AccountLockedPastTimeResponse {
    return AccountLockedPastTimeResponse.decode(message.value);
  },
  toProto(message: AccountLockedPastTimeResponse): Uint8Array {
    return AccountLockedPastTimeResponse.encode(message).finish();
  },
  toProtoMsg(message: AccountLockedPastTimeResponse): AccountLockedPastTimeResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.AccountLockedPastTimeResponse",
      value: AccountLockedPastTimeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AccountLockedPastTimeResponse.typeUrl, AccountLockedPastTimeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountLockedPastTimeResponse.aminoType, AccountLockedPastTimeResponse.typeUrl);
function createBaseAccountLockedPastTimeNotUnlockingOnlyRequest(): AccountLockedPastTimeNotUnlockingOnlyRequest {
  return {
    owner: "",
    timestamp: new Date()
  };
}
export const AccountLockedPastTimeNotUnlockingOnlyRequest = {
  typeUrl: "/osmosis.lockup.AccountLockedPastTimeNotUnlockingOnlyRequest",
  aminoType: "osmosis/lockup/account-locked-past-time-not-unlocking-only-request",
  is(o: any): o is AccountLockedPastTimeNotUnlockingOnlyRequest {
    return o && (o.$typeUrl === AccountLockedPastTimeNotUnlockingOnlyRequest.typeUrl || typeof o.owner === "string" && Timestamp.is(o.timestamp));
  },
  isSDK(o: any): o is AccountLockedPastTimeNotUnlockingOnlyRequestSDKType {
    return o && (o.$typeUrl === AccountLockedPastTimeNotUnlockingOnlyRequest.typeUrl || typeof o.owner === "string" && Timestamp.isSDK(o.timestamp));
  },
  isAmino(o: any): o is AccountLockedPastTimeNotUnlockingOnlyRequestAmino {
    return o && (o.$typeUrl === AccountLockedPastTimeNotUnlockingOnlyRequest.typeUrl || typeof o.owner === "string" && Timestamp.isAmino(o.timestamp));
  },
  encode(message: AccountLockedPastTimeNotUnlockingOnlyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== undefined) {
      writer.uint32(10).string(message.owner);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedPastTimeNotUnlockingOnlyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedPastTimeNotUnlockingOnlyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccountLockedPastTimeNotUnlockingOnlyRequest {
    const obj = createBaseAccountLockedPastTimeNotUnlockingOnlyRequest();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.timestamp)) obj.timestamp = new Date(object.timestamp);
    return obj;
  },
  toJSON(message: AccountLockedPastTimeNotUnlockingOnlyRequest): JsonSafe<AccountLockedPastTimeNotUnlockingOnlyRequest> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<AccountLockedPastTimeNotUnlockingOnlyRequest>): AccountLockedPastTimeNotUnlockingOnlyRequest {
    const message = createBaseAccountLockedPastTimeNotUnlockingOnlyRequest();
    message.owner = object.owner ?? "";
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
  fromSDK(object: AccountLockedPastTimeNotUnlockingOnlyRequestSDKType): AccountLockedPastTimeNotUnlockingOnlyRequest {
    return {
      owner: object?.owner,
      timestamp: object.timestamp ?? undefined
    };
  },
  toSDK(message: AccountLockedPastTimeNotUnlockingOnlyRequest): AccountLockedPastTimeNotUnlockingOnlyRequestSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    message.timestamp !== undefined && (obj.timestamp = message.timestamp ?? undefined);
    return obj;
  },
  fromAmino(object: AccountLockedPastTimeNotUnlockingOnlyRequestAmino): AccountLockedPastTimeNotUnlockingOnlyRequest {
    const message = createBaseAccountLockedPastTimeNotUnlockingOnlyRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
    }
    return message;
  },
  toAmino(message: AccountLockedPastTimeNotUnlockingOnlyRequest): AccountLockedPastTimeNotUnlockingOnlyRequestAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
    return obj;
  },
  fromAminoMsg(object: AccountLockedPastTimeNotUnlockingOnlyRequestAminoMsg): AccountLockedPastTimeNotUnlockingOnlyRequest {
    return AccountLockedPastTimeNotUnlockingOnlyRequest.fromAmino(object.value);
  },
  toAminoMsg(message: AccountLockedPastTimeNotUnlockingOnlyRequest): AccountLockedPastTimeNotUnlockingOnlyRequestAminoMsg {
    return {
      type: "osmosis/lockup/account-locked-past-time-not-unlocking-only-request",
      value: AccountLockedPastTimeNotUnlockingOnlyRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: AccountLockedPastTimeNotUnlockingOnlyRequestProtoMsg): AccountLockedPastTimeNotUnlockingOnlyRequest {
    return AccountLockedPastTimeNotUnlockingOnlyRequest.decode(message.value);
  },
  toProto(message: AccountLockedPastTimeNotUnlockingOnlyRequest): Uint8Array {
    return AccountLockedPastTimeNotUnlockingOnlyRequest.encode(message).finish();
  },
  toProtoMsg(message: AccountLockedPastTimeNotUnlockingOnlyRequest): AccountLockedPastTimeNotUnlockingOnlyRequestProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.AccountLockedPastTimeNotUnlockingOnlyRequest",
      value: AccountLockedPastTimeNotUnlockingOnlyRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AccountLockedPastTimeNotUnlockingOnlyRequest.typeUrl, AccountLockedPastTimeNotUnlockingOnlyRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountLockedPastTimeNotUnlockingOnlyRequest.aminoType, AccountLockedPastTimeNotUnlockingOnlyRequest.typeUrl);
function createBaseAccountLockedPastTimeNotUnlockingOnlyResponse(): AccountLockedPastTimeNotUnlockingOnlyResponse {
  return {
    locks: []
  };
}
export const AccountLockedPastTimeNotUnlockingOnlyResponse = {
  typeUrl: "/osmosis.lockup.AccountLockedPastTimeNotUnlockingOnlyResponse",
  aminoType: "osmosis/lockup/account-locked-past-time-not-unlocking-only-response",
  is(o: any): o is AccountLockedPastTimeNotUnlockingOnlyResponse {
    return o && (o.$typeUrl === AccountLockedPastTimeNotUnlockingOnlyResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || PeriodLock.is(o.locks[0])));
  },
  isSDK(o: any): o is AccountLockedPastTimeNotUnlockingOnlyResponseSDKType {
    return o && (o.$typeUrl === AccountLockedPastTimeNotUnlockingOnlyResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || PeriodLock.isSDK(o.locks[0])));
  },
  isAmino(o: any): o is AccountLockedPastTimeNotUnlockingOnlyResponseAmino {
    return o && (o.$typeUrl === AccountLockedPastTimeNotUnlockingOnlyResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || PeriodLock.isAmino(o.locks[0])));
  },
  encode(message: AccountLockedPastTimeNotUnlockingOnlyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedPastTimeNotUnlockingOnlyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedPastTimeNotUnlockingOnlyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccountLockedPastTimeNotUnlockingOnlyResponse {
    const obj = createBaseAccountLockedPastTimeNotUnlockingOnlyResponse();
    if (Array.isArray(object?.locks)) obj.locks = object.locks.map((e: any) => PeriodLock.fromJSON(e));
    return obj;
  },
  toJSON(message: AccountLockedPastTimeNotUnlockingOnlyResponse): JsonSafe<AccountLockedPastTimeNotUnlockingOnlyResponse> {
    const obj: any = {};
    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toJSON(e) : undefined);
    } else {
      obj.locks = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<AccountLockedPastTimeNotUnlockingOnlyResponse>): AccountLockedPastTimeNotUnlockingOnlyResponse {
    const message = createBaseAccountLockedPastTimeNotUnlockingOnlyResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: AccountLockedPastTimeNotUnlockingOnlyResponseSDKType): AccountLockedPastTimeNotUnlockingOnlyResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromSDK(e)) : []
    };
  },
  toSDK(message: AccountLockedPastTimeNotUnlockingOnlyResponse): AccountLockedPastTimeNotUnlockingOnlyResponseSDKType {
    const obj: any = {};
    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toSDK(e) : undefined);
    } else {
      obj.locks = [];
    }
    return obj;
  },
  fromAmino(object: AccountLockedPastTimeNotUnlockingOnlyResponseAmino): AccountLockedPastTimeNotUnlockingOnlyResponse {
    const message = createBaseAccountLockedPastTimeNotUnlockingOnlyResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AccountLockedPastTimeNotUnlockingOnlyResponse): AccountLockedPastTimeNotUnlockingOnlyResponseAmino {
    const obj: any = {};
    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
    } else {
      obj.locks = message.locks;
    }
    return obj;
  },
  fromAminoMsg(object: AccountLockedPastTimeNotUnlockingOnlyResponseAminoMsg): AccountLockedPastTimeNotUnlockingOnlyResponse {
    return AccountLockedPastTimeNotUnlockingOnlyResponse.fromAmino(object.value);
  },
  toAminoMsg(message: AccountLockedPastTimeNotUnlockingOnlyResponse): AccountLockedPastTimeNotUnlockingOnlyResponseAminoMsg {
    return {
      type: "osmosis/lockup/account-locked-past-time-not-unlocking-only-response",
      value: AccountLockedPastTimeNotUnlockingOnlyResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: AccountLockedPastTimeNotUnlockingOnlyResponseProtoMsg): AccountLockedPastTimeNotUnlockingOnlyResponse {
    return AccountLockedPastTimeNotUnlockingOnlyResponse.decode(message.value);
  },
  toProto(message: AccountLockedPastTimeNotUnlockingOnlyResponse): Uint8Array {
    return AccountLockedPastTimeNotUnlockingOnlyResponse.encode(message).finish();
  },
  toProtoMsg(message: AccountLockedPastTimeNotUnlockingOnlyResponse): AccountLockedPastTimeNotUnlockingOnlyResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.AccountLockedPastTimeNotUnlockingOnlyResponse",
      value: AccountLockedPastTimeNotUnlockingOnlyResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AccountLockedPastTimeNotUnlockingOnlyResponse.typeUrl, AccountLockedPastTimeNotUnlockingOnlyResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountLockedPastTimeNotUnlockingOnlyResponse.aminoType, AccountLockedPastTimeNotUnlockingOnlyResponse.typeUrl);
function createBaseAccountUnlockedBeforeTimeRequest(): AccountUnlockedBeforeTimeRequest {
  return {
    owner: "",
    timestamp: new Date()
  };
}
export const AccountUnlockedBeforeTimeRequest = {
  typeUrl: "/osmosis.lockup.AccountUnlockedBeforeTimeRequest",
  aminoType: "osmosis/lockup/account-unlocked-before-time-request",
  is(o: any): o is AccountUnlockedBeforeTimeRequest {
    return o && (o.$typeUrl === AccountUnlockedBeforeTimeRequest.typeUrl || typeof o.owner === "string" && Timestamp.is(o.timestamp));
  },
  isSDK(o: any): o is AccountUnlockedBeforeTimeRequestSDKType {
    return o && (o.$typeUrl === AccountUnlockedBeforeTimeRequest.typeUrl || typeof o.owner === "string" && Timestamp.isSDK(o.timestamp));
  },
  isAmino(o: any): o is AccountUnlockedBeforeTimeRequestAmino {
    return o && (o.$typeUrl === AccountUnlockedBeforeTimeRequest.typeUrl || typeof o.owner === "string" && Timestamp.isAmino(o.timestamp));
  },
  encode(message: AccountUnlockedBeforeTimeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== undefined) {
      writer.uint32(10).string(message.owner);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountUnlockedBeforeTimeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountUnlockedBeforeTimeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccountUnlockedBeforeTimeRequest {
    const obj = createBaseAccountUnlockedBeforeTimeRequest();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.timestamp)) obj.timestamp = new Date(object.timestamp);
    return obj;
  },
  toJSON(message: AccountUnlockedBeforeTimeRequest): JsonSafe<AccountUnlockedBeforeTimeRequest> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<AccountUnlockedBeforeTimeRequest>): AccountUnlockedBeforeTimeRequest {
    const message = createBaseAccountUnlockedBeforeTimeRequest();
    message.owner = object.owner ?? "";
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
  fromSDK(object: AccountUnlockedBeforeTimeRequestSDKType): AccountUnlockedBeforeTimeRequest {
    return {
      owner: object?.owner,
      timestamp: object.timestamp ?? undefined
    };
  },
  toSDK(message: AccountUnlockedBeforeTimeRequest): AccountUnlockedBeforeTimeRequestSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    message.timestamp !== undefined && (obj.timestamp = message.timestamp ?? undefined);
    return obj;
  },
  fromAmino(object: AccountUnlockedBeforeTimeRequestAmino): AccountUnlockedBeforeTimeRequest {
    const message = createBaseAccountUnlockedBeforeTimeRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
    }
    return message;
  },
  toAmino(message: AccountUnlockedBeforeTimeRequest): AccountUnlockedBeforeTimeRequestAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
    return obj;
  },
  fromAminoMsg(object: AccountUnlockedBeforeTimeRequestAminoMsg): AccountUnlockedBeforeTimeRequest {
    return AccountUnlockedBeforeTimeRequest.fromAmino(object.value);
  },
  toAminoMsg(message: AccountUnlockedBeforeTimeRequest): AccountUnlockedBeforeTimeRequestAminoMsg {
    return {
      type: "osmosis/lockup/account-unlocked-before-time-request",
      value: AccountUnlockedBeforeTimeRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: AccountUnlockedBeforeTimeRequestProtoMsg): AccountUnlockedBeforeTimeRequest {
    return AccountUnlockedBeforeTimeRequest.decode(message.value);
  },
  toProto(message: AccountUnlockedBeforeTimeRequest): Uint8Array {
    return AccountUnlockedBeforeTimeRequest.encode(message).finish();
  },
  toProtoMsg(message: AccountUnlockedBeforeTimeRequest): AccountUnlockedBeforeTimeRequestProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.AccountUnlockedBeforeTimeRequest",
      value: AccountUnlockedBeforeTimeRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AccountUnlockedBeforeTimeRequest.typeUrl, AccountUnlockedBeforeTimeRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountUnlockedBeforeTimeRequest.aminoType, AccountUnlockedBeforeTimeRequest.typeUrl);
function createBaseAccountUnlockedBeforeTimeResponse(): AccountUnlockedBeforeTimeResponse {
  return {
    locks: []
  };
}
export const AccountUnlockedBeforeTimeResponse = {
  typeUrl: "/osmosis.lockup.AccountUnlockedBeforeTimeResponse",
  aminoType: "osmosis/lockup/account-unlocked-before-time-response",
  is(o: any): o is AccountUnlockedBeforeTimeResponse {
    return o && (o.$typeUrl === AccountUnlockedBeforeTimeResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || PeriodLock.is(o.locks[0])));
  },
  isSDK(o: any): o is AccountUnlockedBeforeTimeResponseSDKType {
    return o && (o.$typeUrl === AccountUnlockedBeforeTimeResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || PeriodLock.isSDK(o.locks[0])));
  },
  isAmino(o: any): o is AccountUnlockedBeforeTimeResponseAmino {
    return o && (o.$typeUrl === AccountUnlockedBeforeTimeResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || PeriodLock.isAmino(o.locks[0])));
  },
  encode(message: AccountUnlockedBeforeTimeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountUnlockedBeforeTimeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountUnlockedBeforeTimeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccountUnlockedBeforeTimeResponse {
    const obj = createBaseAccountUnlockedBeforeTimeResponse();
    if (Array.isArray(object?.locks)) obj.locks = object.locks.map((e: any) => PeriodLock.fromJSON(e));
    return obj;
  },
  toJSON(message: AccountUnlockedBeforeTimeResponse): JsonSafe<AccountUnlockedBeforeTimeResponse> {
    const obj: any = {};
    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toJSON(e) : undefined);
    } else {
      obj.locks = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<AccountUnlockedBeforeTimeResponse>): AccountUnlockedBeforeTimeResponse {
    const message = createBaseAccountUnlockedBeforeTimeResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: AccountUnlockedBeforeTimeResponseSDKType): AccountUnlockedBeforeTimeResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromSDK(e)) : []
    };
  },
  toSDK(message: AccountUnlockedBeforeTimeResponse): AccountUnlockedBeforeTimeResponseSDKType {
    const obj: any = {};
    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toSDK(e) : undefined);
    } else {
      obj.locks = [];
    }
    return obj;
  },
  fromAmino(object: AccountUnlockedBeforeTimeResponseAmino): AccountUnlockedBeforeTimeResponse {
    const message = createBaseAccountUnlockedBeforeTimeResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AccountUnlockedBeforeTimeResponse): AccountUnlockedBeforeTimeResponseAmino {
    const obj: any = {};
    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
    } else {
      obj.locks = message.locks;
    }
    return obj;
  },
  fromAminoMsg(object: AccountUnlockedBeforeTimeResponseAminoMsg): AccountUnlockedBeforeTimeResponse {
    return AccountUnlockedBeforeTimeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: AccountUnlockedBeforeTimeResponse): AccountUnlockedBeforeTimeResponseAminoMsg {
    return {
      type: "osmosis/lockup/account-unlocked-before-time-response",
      value: AccountUnlockedBeforeTimeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: AccountUnlockedBeforeTimeResponseProtoMsg): AccountUnlockedBeforeTimeResponse {
    return AccountUnlockedBeforeTimeResponse.decode(message.value);
  },
  toProto(message: AccountUnlockedBeforeTimeResponse): Uint8Array {
    return AccountUnlockedBeforeTimeResponse.encode(message).finish();
  },
  toProtoMsg(message: AccountUnlockedBeforeTimeResponse): AccountUnlockedBeforeTimeResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.AccountUnlockedBeforeTimeResponse",
      value: AccountUnlockedBeforeTimeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AccountUnlockedBeforeTimeResponse.typeUrl, AccountUnlockedBeforeTimeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountUnlockedBeforeTimeResponse.aminoType, AccountUnlockedBeforeTimeResponse.typeUrl);
function createBaseAccountLockedPastTimeDenomRequest(): AccountLockedPastTimeDenomRequest {
  return {
    owner: "",
    timestamp: new Date(),
    denom: ""
  };
}
export const AccountLockedPastTimeDenomRequest = {
  typeUrl: "/osmosis.lockup.AccountLockedPastTimeDenomRequest",
  aminoType: "osmosis/lockup/account-locked-past-time-denom-request",
  is(o: any): o is AccountLockedPastTimeDenomRequest {
    return o && (o.$typeUrl === AccountLockedPastTimeDenomRequest.typeUrl || typeof o.owner === "string" && Timestamp.is(o.timestamp) && typeof o.denom === "string");
  },
  isSDK(o: any): o is AccountLockedPastTimeDenomRequestSDKType {
    return o && (o.$typeUrl === AccountLockedPastTimeDenomRequest.typeUrl || typeof o.owner === "string" && Timestamp.isSDK(o.timestamp) && typeof o.denom === "string");
  },
  isAmino(o: any): o is AccountLockedPastTimeDenomRequestAmino {
    return o && (o.$typeUrl === AccountLockedPastTimeDenomRequest.typeUrl || typeof o.owner === "string" && Timestamp.isAmino(o.timestamp) && typeof o.denom === "string");
  },
  encode(message: AccountLockedPastTimeDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== undefined) {
      writer.uint32(10).string(message.owner);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(18).fork()).ldelim();
    }
    if (message.denom !== undefined) {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedPastTimeDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedPastTimeDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccountLockedPastTimeDenomRequest {
    const obj = createBaseAccountLockedPastTimeDenomRequest();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.timestamp)) obj.timestamp = new Date(object.timestamp);
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
  },
  toJSON(message: AccountLockedPastTimeDenomRequest): JsonSafe<AccountLockedPastTimeDenomRequest> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: DeepPartial<AccountLockedPastTimeDenomRequest>): AccountLockedPastTimeDenomRequest {
    const message = createBaseAccountLockedPastTimeDenomRequest();
    message.owner = object.owner ?? "";
    message.timestamp = object.timestamp ?? undefined;
    message.denom = object.denom ?? "";
    return message;
  },
  fromSDK(object: AccountLockedPastTimeDenomRequestSDKType): AccountLockedPastTimeDenomRequest {
    return {
      owner: object?.owner,
      timestamp: object.timestamp ?? undefined,
      denom: object?.denom
    };
  },
  toSDK(message: AccountLockedPastTimeDenomRequest): AccountLockedPastTimeDenomRequestSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    message.timestamp !== undefined && (obj.timestamp = message.timestamp ?? undefined);
    obj.denom = message.denom;
    return obj;
  },
  fromAmino(object: AccountLockedPastTimeDenomRequestAmino): AccountLockedPastTimeDenomRequest {
    const message = createBaseAccountLockedPastTimeDenomRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: AccountLockedPastTimeDenomRequest): AccountLockedPastTimeDenomRequestAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: AccountLockedPastTimeDenomRequestAminoMsg): AccountLockedPastTimeDenomRequest {
    return AccountLockedPastTimeDenomRequest.fromAmino(object.value);
  },
  toAminoMsg(message: AccountLockedPastTimeDenomRequest): AccountLockedPastTimeDenomRequestAminoMsg {
    return {
      type: "osmosis/lockup/account-locked-past-time-denom-request",
      value: AccountLockedPastTimeDenomRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: AccountLockedPastTimeDenomRequestProtoMsg): AccountLockedPastTimeDenomRequest {
    return AccountLockedPastTimeDenomRequest.decode(message.value);
  },
  toProto(message: AccountLockedPastTimeDenomRequest): Uint8Array {
    return AccountLockedPastTimeDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: AccountLockedPastTimeDenomRequest): AccountLockedPastTimeDenomRequestProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.AccountLockedPastTimeDenomRequest",
      value: AccountLockedPastTimeDenomRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AccountLockedPastTimeDenomRequest.typeUrl, AccountLockedPastTimeDenomRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountLockedPastTimeDenomRequest.aminoType, AccountLockedPastTimeDenomRequest.typeUrl);
function createBaseAccountLockedPastTimeDenomResponse(): AccountLockedPastTimeDenomResponse {
  return {
    locks: []
  };
}
export const AccountLockedPastTimeDenomResponse = {
  typeUrl: "/osmosis.lockup.AccountLockedPastTimeDenomResponse",
  aminoType: "osmosis/lockup/account-locked-past-time-denom-response",
  is(o: any): o is AccountLockedPastTimeDenomResponse {
    return o && (o.$typeUrl === AccountLockedPastTimeDenomResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || PeriodLock.is(o.locks[0])));
  },
  isSDK(o: any): o is AccountLockedPastTimeDenomResponseSDKType {
    return o && (o.$typeUrl === AccountLockedPastTimeDenomResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || PeriodLock.isSDK(o.locks[0])));
  },
  isAmino(o: any): o is AccountLockedPastTimeDenomResponseAmino {
    return o && (o.$typeUrl === AccountLockedPastTimeDenomResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || PeriodLock.isAmino(o.locks[0])));
  },
  encode(message: AccountLockedPastTimeDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedPastTimeDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedPastTimeDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccountLockedPastTimeDenomResponse {
    const obj = createBaseAccountLockedPastTimeDenomResponse();
    if (Array.isArray(object?.locks)) obj.locks = object.locks.map((e: any) => PeriodLock.fromJSON(e));
    return obj;
  },
  toJSON(message: AccountLockedPastTimeDenomResponse): JsonSafe<AccountLockedPastTimeDenomResponse> {
    const obj: any = {};
    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toJSON(e) : undefined);
    } else {
      obj.locks = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<AccountLockedPastTimeDenomResponse>): AccountLockedPastTimeDenomResponse {
    const message = createBaseAccountLockedPastTimeDenomResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: AccountLockedPastTimeDenomResponseSDKType): AccountLockedPastTimeDenomResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromSDK(e)) : []
    };
  },
  toSDK(message: AccountLockedPastTimeDenomResponse): AccountLockedPastTimeDenomResponseSDKType {
    const obj: any = {};
    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toSDK(e) : undefined);
    } else {
      obj.locks = [];
    }
    return obj;
  },
  fromAmino(object: AccountLockedPastTimeDenomResponseAmino): AccountLockedPastTimeDenomResponse {
    const message = createBaseAccountLockedPastTimeDenomResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AccountLockedPastTimeDenomResponse): AccountLockedPastTimeDenomResponseAmino {
    const obj: any = {};
    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
    } else {
      obj.locks = message.locks;
    }
    return obj;
  },
  fromAminoMsg(object: AccountLockedPastTimeDenomResponseAminoMsg): AccountLockedPastTimeDenomResponse {
    return AccountLockedPastTimeDenomResponse.fromAmino(object.value);
  },
  toAminoMsg(message: AccountLockedPastTimeDenomResponse): AccountLockedPastTimeDenomResponseAminoMsg {
    return {
      type: "osmosis/lockup/account-locked-past-time-denom-response",
      value: AccountLockedPastTimeDenomResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: AccountLockedPastTimeDenomResponseProtoMsg): AccountLockedPastTimeDenomResponse {
    return AccountLockedPastTimeDenomResponse.decode(message.value);
  },
  toProto(message: AccountLockedPastTimeDenomResponse): Uint8Array {
    return AccountLockedPastTimeDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: AccountLockedPastTimeDenomResponse): AccountLockedPastTimeDenomResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.AccountLockedPastTimeDenomResponse",
      value: AccountLockedPastTimeDenomResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AccountLockedPastTimeDenomResponse.typeUrl, AccountLockedPastTimeDenomResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountLockedPastTimeDenomResponse.aminoType, AccountLockedPastTimeDenomResponse.typeUrl);
function createBaseLockedDenomRequest(): LockedDenomRequest {
  return {
    denom: "",
    duration: Duration.fromPartial({})
  };
}
export const LockedDenomRequest = {
  typeUrl: "/osmosis.lockup.LockedDenomRequest",
  aminoType: "osmosis/lockup/locked-denom-request",
  is(o: any): o is LockedDenomRequest {
    return o && (o.$typeUrl === LockedDenomRequest.typeUrl || typeof o.denom === "string" && Duration.is(o.duration));
  },
  isSDK(o: any): o is LockedDenomRequestSDKType {
    return o && (o.$typeUrl === LockedDenomRequest.typeUrl || typeof o.denom === "string" && Duration.isSDK(o.duration));
  },
  isAmino(o: any): o is LockedDenomRequestAmino {
    return o && (o.$typeUrl === LockedDenomRequest.typeUrl || typeof o.denom === "string" && Duration.isAmino(o.duration));
  },
  encode(message: LockedDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== undefined) {
      writer.uint32(10).string(message.denom);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LockedDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockedDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LockedDenomRequest {
    const obj = createBaseLockedDenomRequest();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    if (isSet(object.duration)) obj.duration = Duration.fromJSON(object.duration);
    return obj;
  },
  toJSON(message: LockedDenomRequest): JsonSafe<LockedDenomRequest> {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<LockedDenomRequest>): LockedDenomRequest {
    const message = createBaseLockedDenomRequest();
    message.denom = object.denom ?? "";
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromPartial(object.duration);
    }
    return message;
  },
  fromSDK(object: LockedDenomRequestSDKType): LockedDenomRequest {
    return {
      denom: object?.denom,
      duration: object.duration ? Duration.fromSDK(object.duration) : undefined
    };
  },
  toSDK(message: LockedDenomRequest): LockedDenomRequestSDKType {
    const obj: any = {};
    obj.denom = message.denom;
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toSDK(message.duration) : undefined);
    return obj;
  },
  fromAmino(object: LockedDenomRequestAmino): LockedDenomRequest {
    const message = createBaseLockedDenomRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration);
    }
    return message;
  },
  toAmino(message: LockedDenomRequest): LockedDenomRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    return obj;
  },
  fromAminoMsg(object: LockedDenomRequestAminoMsg): LockedDenomRequest {
    return LockedDenomRequest.fromAmino(object.value);
  },
  toAminoMsg(message: LockedDenomRequest): LockedDenomRequestAminoMsg {
    return {
      type: "osmosis/lockup/locked-denom-request",
      value: LockedDenomRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: LockedDenomRequestProtoMsg): LockedDenomRequest {
    return LockedDenomRequest.decode(message.value);
  },
  toProto(message: LockedDenomRequest): Uint8Array {
    return LockedDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: LockedDenomRequest): LockedDenomRequestProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.LockedDenomRequest",
      value: LockedDenomRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LockedDenomRequest.typeUrl, LockedDenomRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(LockedDenomRequest.aminoType, LockedDenomRequest.typeUrl);
function createBaseLockedDenomResponse(): LockedDenomResponse {
  return {
    amount: ""
  };
}
export const LockedDenomResponse = {
  typeUrl: "/osmosis.lockup.LockedDenomResponse",
  aminoType: "osmosis/lockup/locked-denom-response",
  is(o: any): o is LockedDenomResponse {
    return o && (o.$typeUrl === LockedDenomResponse.typeUrl || typeof o.amount === "string");
  },
  isSDK(o: any): o is LockedDenomResponseSDKType {
    return o && (o.$typeUrl === LockedDenomResponse.typeUrl || typeof o.amount === "string");
  },
  isAmino(o: any): o is LockedDenomResponseAmino {
    return o && (o.$typeUrl === LockedDenomResponse.typeUrl || typeof o.amount === "string");
  },
  encode(message: LockedDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      writer.uint32(10).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LockedDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockedDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LockedDenomResponse {
    const obj = createBaseLockedDenomResponse();
    if (isSet(object.amount)) obj.amount = String(object.amount);
    return obj;
  },
  toJSON(message: LockedDenomResponse): JsonSafe<LockedDenomResponse> {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: DeepPartial<LockedDenomResponse>): LockedDenomResponse {
    const message = createBaseLockedDenomResponse();
    message.amount = object.amount ?? "";
    return message;
  },
  fromSDK(object: LockedDenomResponseSDKType): LockedDenomResponse {
    return {
      amount: object?.amount
    };
  },
  toSDK(message: LockedDenomResponse): LockedDenomResponseSDKType {
    const obj: any = {};
    obj.amount = message.amount;
    return obj;
  },
  fromAmino(object: LockedDenomResponseAmino): LockedDenomResponse {
    const message = createBaseLockedDenomResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: LockedDenomResponse): LockedDenomResponseAmino {
    const obj: any = {};
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: LockedDenomResponseAminoMsg): LockedDenomResponse {
    return LockedDenomResponse.fromAmino(object.value);
  },
  toAminoMsg(message: LockedDenomResponse): LockedDenomResponseAminoMsg {
    return {
      type: "osmosis/lockup/locked-denom-response",
      value: LockedDenomResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: LockedDenomResponseProtoMsg): LockedDenomResponse {
    return LockedDenomResponse.decode(message.value);
  },
  toProto(message: LockedDenomResponse): Uint8Array {
    return LockedDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: LockedDenomResponse): LockedDenomResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.LockedDenomResponse",
      value: LockedDenomResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LockedDenomResponse.typeUrl, LockedDenomResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(LockedDenomResponse.aminoType, LockedDenomResponse.typeUrl);
function createBaseLockedRequest(): LockedRequest {
  return {
    lockId: BigInt(0)
  };
}
export const LockedRequest = {
  typeUrl: "/osmosis.lockup.LockedRequest",
  aminoType: "osmosis/lockup/locked-request",
  is(o: any): o is LockedRequest {
    return o && (o.$typeUrl === LockedRequest.typeUrl || typeof o.lockId === "bigint");
  },
  isSDK(o: any): o is LockedRequestSDKType {
    return o && (o.$typeUrl === LockedRequest.typeUrl || typeof o.lock_id === "bigint");
  },
  isAmino(o: any): o is LockedRequestAmino {
    return o && (o.$typeUrl === LockedRequest.typeUrl || typeof o.lock_id === "bigint");
  },
  encode(message: LockedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lockId !== undefined) {
      writer.uint32(8).uint64(message.lockId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LockedRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LockedRequest {
    const obj = createBaseLockedRequest();
    if (isSet(object.lockId)) obj.lockId = BigInt(object.lockId.toString());
    return obj;
  },
  toJSON(message: LockedRequest): JsonSafe<LockedRequest> {
    const obj: any = {};
    message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<LockedRequest>): LockedRequest {
    const message = createBaseLockedRequest();
    if (object.lockId !== undefined && object.lockId !== null) {
      message.lockId = BigInt(object.lockId.toString());
    }
    return message;
  },
  fromSDK(object: LockedRequestSDKType): LockedRequest {
    return {
      lockId: object?.lock_id
    };
  },
  toSDK(message: LockedRequest): LockedRequestSDKType {
    const obj: any = {};
    obj.lock_id = message.lockId;
    return obj;
  },
  fromAmino(object: LockedRequestAmino): LockedRequest {
    const message = createBaseLockedRequest();
    if (object.lock_id !== undefined && object.lock_id !== null) {
      message.lockId = BigInt(object.lock_id);
    }
    return message;
  },
  toAmino(message: LockedRequest): LockedRequestAmino {
    const obj: any = {};
    obj.lock_id = message.lockId !== BigInt(0) ? message.lockId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: LockedRequestAminoMsg): LockedRequest {
    return LockedRequest.fromAmino(object.value);
  },
  toAminoMsg(message: LockedRequest): LockedRequestAminoMsg {
    return {
      type: "osmosis/lockup/locked-request",
      value: LockedRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: LockedRequestProtoMsg): LockedRequest {
    return LockedRequest.decode(message.value);
  },
  toProto(message: LockedRequest): Uint8Array {
    return LockedRequest.encode(message).finish();
  },
  toProtoMsg(message: LockedRequest): LockedRequestProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.LockedRequest",
      value: LockedRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LockedRequest.typeUrl, LockedRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(LockedRequest.aminoType, LockedRequest.typeUrl);
function createBaseLockedResponse(): LockedResponse {
  return {
    lock: undefined
  };
}
export const LockedResponse = {
  typeUrl: "/osmosis.lockup.LockedResponse",
  aminoType: "osmosis/lockup/locked-response",
  is(o: any): o is LockedResponse {
    return o && o.$typeUrl === LockedResponse.typeUrl;
  },
  isSDK(o: any): o is LockedResponseSDKType {
    return o && o.$typeUrl === LockedResponse.typeUrl;
  },
  isAmino(o: any): o is LockedResponseAmino {
    return o && o.$typeUrl === LockedResponse.typeUrl;
  },
  encode(message: LockedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lock !== undefined) {
      PeriodLock.encode(message.lock, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LockedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lock = PeriodLock.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LockedResponse {
    const obj = createBaseLockedResponse();
    if (isSet(object.lock)) obj.lock = PeriodLock.fromJSON(object.lock);
    return obj;
  },
  toJSON(message: LockedResponse): JsonSafe<LockedResponse> {
    const obj: any = {};
    message.lock !== undefined && (obj.lock = message.lock ? PeriodLock.toJSON(message.lock) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<LockedResponse>): LockedResponse {
    const message = createBaseLockedResponse();
    if (object.lock !== undefined && object.lock !== null) {
      message.lock = PeriodLock.fromPartial(object.lock);
    }
    return message;
  },
  fromSDK(object: LockedResponseSDKType): LockedResponse {
    return {
      lock: object.lock ? PeriodLock.fromSDK(object.lock) : undefined
    };
  },
  toSDK(message: LockedResponse): LockedResponseSDKType {
    const obj: any = {};
    message.lock !== undefined && (obj.lock = message.lock ? PeriodLock.toSDK(message.lock) : undefined);
    return obj;
  },
  fromAmino(object: LockedResponseAmino): LockedResponse {
    const message = createBaseLockedResponse();
    if (object.lock !== undefined && object.lock !== null) {
      message.lock = PeriodLock.fromAmino(object.lock);
    }
    return message;
  },
  toAmino(message: LockedResponse): LockedResponseAmino {
    const obj: any = {};
    obj.lock = message.lock ? PeriodLock.toAmino(message.lock) : undefined;
    return obj;
  },
  fromAminoMsg(object: LockedResponseAminoMsg): LockedResponse {
    return LockedResponse.fromAmino(object.value);
  },
  toAminoMsg(message: LockedResponse): LockedResponseAminoMsg {
    return {
      type: "osmosis/lockup/locked-response",
      value: LockedResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: LockedResponseProtoMsg): LockedResponse {
    return LockedResponse.decode(message.value);
  },
  toProto(message: LockedResponse): Uint8Array {
    return LockedResponse.encode(message).finish();
  },
  toProtoMsg(message: LockedResponse): LockedResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.LockedResponse",
      value: LockedResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LockedResponse.typeUrl, LockedResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(LockedResponse.aminoType, LockedResponse.typeUrl);
function createBaseSyntheticLockupsByLockupIDRequest(): SyntheticLockupsByLockupIDRequest {
  return {
    lockId: BigInt(0)
  };
}
export const SyntheticLockupsByLockupIDRequest = {
  typeUrl: "/osmosis.lockup.SyntheticLockupsByLockupIDRequest",
  aminoType: "osmosis/lockup/synthetic-lockups-by-lockup-id-request",
  is(o: any): o is SyntheticLockupsByLockupIDRequest {
    return o && (o.$typeUrl === SyntheticLockupsByLockupIDRequest.typeUrl || typeof o.lockId === "bigint");
  },
  isSDK(o: any): o is SyntheticLockupsByLockupIDRequestSDKType {
    return o && (o.$typeUrl === SyntheticLockupsByLockupIDRequest.typeUrl || typeof o.lock_id === "bigint");
  },
  isAmino(o: any): o is SyntheticLockupsByLockupIDRequestAmino {
    return o && (o.$typeUrl === SyntheticLockupsByLockupIDRequest.typeUrl || typeof o.lock_id === "bigint");
  },
  encode(message: SyntheticLockupsByLockupIDRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lockId !== undefined) {
      writer.uint32(8).uint64(message.lockId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SyntheticLockupsByLockupIDRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyntheticLockupsByLockupIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SyntheticLockupsByLockupIDRequest {
    const obj = createBaseSyntheticLockupsByLockupIDRequest();
    if (isSet(object.lockId)) obj.lockId = BigInt(object.lockId.toString());
    return obj;
  },
  toJSON(message: SyntheticLockupsByLockupIDRequest): JsonSafe<SyntheticLockupsByLockupIDRequest> {
    const obj: any = {};
    message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<SyntheticLockupsByLockupIDRequest>): SyntheticLockupsByLockupIDRequest {
    const message = createBaseSyntheticLockupsByLockupIDRequest();
    if (object.lockId !== undefined && object.lockId !== null) {
      message.lockId = BigInt(object.lockId.toString());
    }
    return message;
  },
  fromSDK(object: SyntheticLockupsByLockupIDRequestSDKType): SyntheticLockupsByLockupIDRequest {
    return {
      lockId: object?.lock_id
    };
  },
  toSDK(message: SyntheticLockupsByLockupIDRequest): SyntheticLockupsByLockupIDRequestSDKType {
    const obj: any = {};
    obj.lock_id = message.lockId;
    return obj;
  },
  fromAmino(object: SyntheticLockupsByLockupIDRequestAmino): SyntheticLockupsByLockupIDRequest {
    const message = createBaseSyntheticLockupsByLockupIDRequest();
    if (object.lock_id !== undefined && object.lock_id !== null) {
      message.lockId = BigInt(object.lock_id);
    }
    return message;
  },
  toAmino(message: SyntheticLockupsByLockupIDRequest): SyntheticLockupsByLockupIDRequestAmino {
    const obj: any = {};
    obj.lock_id = message.lockId !== BigInt(0) ? message.lockId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SyntheticLockupsByLockupIDRequestAminoMsg): SyntheticLockupsByLockupIDRequest {
    return SyntheticLockupsByLockupIDRequest.fromAmino(object.value);
  },
  toAminoMsg(message: SyntheticLockupsByLockupIDRequest): SyntheticLockupsByLockupIDRequestAminoMsg {
    return {
      type: "osmosis/lockup/synthetic-lockups-by-lockup-id-request",
      value: SyntheticLockupsByLockupIDRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: SyntheticLockupsByLockupIDRequestProtoMsg): SyntheticLockupsByLockupIDRequest {
    return SyntheticLockupsByLockupIDRequest.decode(message.value);
  },
  toProto(message: SyntheticLockupsByLockupIDRequest): Uint8Array {
    return SyntheticLockupsByLockupIDRequest.encode(message).finish();
  },
  toProtoMsg(message: SyntheticLockupsByLockupIDRequest): SyntheticLockupsByLockupIDRequestProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.SyntheticLockupsByLockupIDRequest",
      value: SyntheticLockupsByLockupIDRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SyntheticLockupsByLockupIDRequest.typeUrl, SyntheticLockupsByLockupIDRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(SyntheticLockupsByLockupIDRequest.aminoType, SyntheticLockupsByLockupIDRequest.typeUrl);
function createBaseSyntheticLockupsByLockupIDResponse(): SyntheticLockupsByLockupIDResponse {
  return {
    syntheticLocks: []
  };
}
export const SyntheticLockupsByLockupIDResponse = {
  typeUrl: "/osmosis.lockup.SyntheticLockupsByLockupIDResponse",
  aminoType: "osmosis/lockup/synthetic-lockups-by-lockup-id-response",
  is(o: any): o is SyntheticLockupsByLockupIDResponse {
    return o && (o.$typeUrl === SyntheticLockupsByLockupIDResponse.typeUrl || Array.isArray(o.syntheticLocks) && (!o.syntheticLocks.length || SyntheticLock.is(o.syntheticLocks[0])));
  },
  isSDK(o: any): o is SyntheticLockupsByLockupIDResponseSDKType {
    return o && (o.$typeUrl === SyntheticLockupsByLockupIDResponse.typeUrl || Array.isArray(o.synthetic_locks) && (!o.synthetic_locks.length || SyntheticLock.isSDK(o.synthetic_locks[0])));
  },
  isAmino(o: any): o is SyntheticLockupsByLockupIDResponseAmino {
    return o && (o.$typeUrl === SyntheticLockupsByLockupIDResponse.typeUrl || Array.isArray(o.synthetic_locks) && (!o.synthetic_locks.length || SyntheticLock.isAmino(o.synthetic_locks[0])));
  },
  encode(message: SyntheticLockupsByLockupIDResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.syntheticLocks) {
      SyntheticLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SyntheticLockupsByLockupIDResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyntheticLockupsByLockupIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.syntheticLocks.push(SyntheticLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SyntheticLockupsByLockupIDResponse {
    const obj = createBaseSyntheticLockupsByLockupIDResponse();
    if (Array.isArray(object?.syntheticLocks)) obj.syntheticLocks = object.syntheticLocks.map((e: any) => SyntheticLock.fromJSON(e));
    return obj;
  },
  toJSON(message: SyntheticLockupsByLockupIDResponse): JsonSafe<SyntheticLockupsByLockupIDResponse> {
    const obj: any = {};
    if (message.syntheticLocks) {
      obj.syntheticLocks = message.syntheticLocks.map(e => e ? SyntheticLock.toJSON(e) : undefined);
    } else {
      obj.syntheticLocks = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<SyntheticLockupsByLockupIDResponse>): SyntheticLockupsByLockupIDResponse {
    const message = createBaseSyntheticLockupsByLockupIDResponse();
    message.syntheticLocks = object.syntheticLocks?.map(e => SyntheticLock.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: SyntheticLockupsByLockupIDResponseSDKType): SyntheticLockupsByLockupIDResponse {
    return {
      syntheticLocks: Array.isArray(object?.synthetic_locks) ? object.synthetic_locks.map((e: any) => SyntheticLock.fromSDK(e)) : []
    };
  },
  toSDK(message: SyntheticLockupsByLockupIDResponse): SyntheticLockupsByLockupIDResponseSDKType {
    const obj: any = {};
    if (message.syntheticLocks) {
      obj.synthetic_locks = message.syntheticLocks.map(e => e ? SyntheticLock.toSDK(e) : undefined);
    } else {
      obj.synthetic_locks = [];
    }
    return obj;
  },
  fromAmino(object: SyntheticLockupsByLockupIDResponseAmino): SyntheticLockupsByLockupIDResponse {
    const message = createBaseSyntheticLockupsByLockupIDResponse();
    message.syntheticLocks = object.synthetic_locks?.map(e => SyntheticLock.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SyntheticLockupsByLockupIDResponse): SyntheticLockupsByLockupIDResponseAmino {
    const obj: any = {};
    if (message.syntheticLocks) {
      obj.synthetic_locks = message.syntheticLocks.map(e => e ? SyntheticLock.toAmino(e) : undefined);
    } else {
      obj.synthetic_locks = message.syntheticLocks;
    }
    return obj;
  },
  fromAminoMsg(object: SyntheticLockupsByLockupIDResponseAminoMsg): SyntheticLockupsByLockupIDResponse {
    return SyntheticLockupsByLockupIDResponse.fromAmino(object.value);
  },
  toAminoMsg(message: SyntheticLockupsByLockupIDResponse): SyntheticLockupsByLockupIDResponseAminoMsg {
    return {
      type: "osmosis/lockup/synthetic-lockups-by-lockup-id-response",
      value: SyntheticLockupsByLockupIDResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: SyntheticLockupsByLockupIDResponseProtoMsg): SyntheticLockupsByLockupIDResponse {
    return SyntheticLockupsByLockupIDResponse.decode(message.value);
  },
  toProto(message: SyntheticLockupsByLockupIDResponse): Uint8Array {
    return SyntheticLockupsByLockupIDResponse.encode(message).finish();
  },
  toProtoMsg(message: SyntheticLockupsByLockupIDResponse): SyntheticLockupsByLockupIDResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.SyntheticLockupsByLockupIDResponse",
      value: SyntheticLockupsByLockupIDResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SyntheticLockupsByLockupIDResponse.typeUrl, SyntheticLockupsByLockupIDResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(SyntheticLockupsByLockupIDResponse.aminoType, SyntheticLockupsByLockupIDResponse.typeUrl);
function createBaseAccountLockedLongerDurationRequest(): AccountLockedLongerDurationRequest {
  return {
    owner: "",
    duration: Duration.fromPartial({})
  };
}
export const AccountLockedLongerDurationRequest = {
  typeUrl: "/osmosis.lockup.AccountLockedLongerDurationRequest",
  aminoType: "osmosis/lockup/account-locked-longer-duration-request",
  is(o: any): o is AccountLockedLongerDurationRequest {
    return o && (o.$typeUrl === AccountLockedLongerDurationRequest.typeUrl || typeof o.owner === "string" && Duration.is(o.duration));
  },
  isSDK(o: any): o is AccountLockedLongerDurationRequestSDKType {
    return o && (o.$typeUrl === AccountLockedLongerDurationRequest.typeUrl || typeof o.owner === "string" && Duration.isSDK(o.duration));
  },
  isAmino(o: any): o is AccountLockedLongerDurationRequestAmino {
    return o && (o.$typeUrl === AccountLockedLongerDurationRequest.typeUrl || typeof o.owner === "string" && Duration.isAmino(o.duration));
  },
  encode(message: AccountLockedLongerDurationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== undefined) {
      writer.uint32(10).string(message.owner);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedLongerDurationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedLongerDurationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccountLockedLongerDurationRequest {
    const obj = createBaseAccountLockedLongerDurationRequest();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.duration)) obj.duration = Duration.fromJSON(object.duration);
    return obj;
  },
  toJSON(message: AccountLockedLongerDurationRequest): JsonSafe<AccountLockedLongerDurationRequest> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<AccountLockedLongerDurationRequest>): AccountLockedLongerDurationRequest {
    const message = createBaseAccountLockedLongerDurationRequest();
    message.owner = object.owner ?? "";
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromPartial(object.duration);
    }
    return message;
  },
  fromSDK(object: AccountLockedLongerDurationRequestSDKType): AccountLockedLongerDurationRequest {
    return {
      owner: object?.owner,
      duration: object.duration ? Duration.fromSDK(object.duration) : undefined
    };
  },
  toSDK(message: AccountLockedLongerDurationRequest): AccountLockedLongerDurationRequestSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toSDK(message.duration) : undefined);
    return obj;
  },
  fromAmino(object: AccountLockedLongerDurationRequestAmino): AccountLockedLongerDurationRequest {
    const message = createBaseAccountLockedLongerDurationRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration);
    }
    return message;
  },
  toAmino(message: AccountLockedLongerDurationRequest): AccountLockedLongerDurationRequestAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    return obj;
  },
  fromAminoMsg(object: AccountLockedLongerDurationRequestAminoMsg): AccountLockedLongerDurationRequest {
    return AccountLockedLongerDurationRequest.fromAmino(object.value);
  },
  toAminoMsg(message: AccountLockedLongerDurationRequest): AccountLockedLongerDurationRequestAminoMsg {
    return {
      type: "osmosis/lockup/account-locked-longer-duration-request",
      value: AccountLockedLongerDurationRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: AccountLockedLongerDurationRequestProtoMsg): AccountLockedLongerDurationRequest {
    return AccountLockedLongerDurationRequest.decode(message.value);
  },
  toProto(message: AccountLockedLongerDurationRequest): Uint8Array {
    return AccountLockedLongerDurationRequest.encode(message).finish();
  },
  toProtoMsg(message: AccountLockedLongerDurationRequest): AccountLockedLongerDurationRequestProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.AccountLockedLongerDurationRequest",
      value: AccountLockedLongerDurationRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AccountLockedLongerDurationRequest.typeUrl, AccountLockedLongerDurationRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountLockedLongerDurationRequest.aminoType, AccountLockedLongerDurationRequest.typeUrl);
function createBaseAccountLockedLongerDurationResponse(): AccountLockedLongerDurationResponse {
  return {
    locks: []
  };
}
export const AccountLockedLongerDurationResponse = {
  typeUrl: "/osmosis.lockup.AccountLockedLongerDurationResponse",
  aminoType: "osmosis/lockup/account-locked-longer-duration-response",
  is(o: any): o is AccountLockedLongerDurationResponse {
    return o && (o.$typeUrl === AccountLockedLongerDurationResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || PeriodLock.is(o.locks[0])));
  },
  isSDK(o: any): o is AccountLockedLongerDurationResponseSDKType {
    return o && (o.$typeUrl === AccountLockedLongerDurationResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || PeriodLock.isSDK(o.locks[0])));
  },
  isAmino(o: any): o is AccountLockedLongerDurationResponseAmino {
    return o && (o.$typeUrl === AccountLockedLongerDurationResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || PeriodLock.isAmino(o.locks[0])));
  },
  encode(message: AccountLockedLongerDurationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedLongerDurationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedLongerDurationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccountLockedLongerDurationResponse {
    const obj = createBaseAccountLockedLongerDurationResponse();
    if (Array.isArray(object?.locks)) obj.locks = object.locks.map((e: any) => PeriodLock.fromJSON(e));
    return obj;
  },
  toJSON(message: AccountLockedLongerDurationResponse): JsonSafe<AccountLockedLongerDurationResponse> {
    const obj: any = {};
    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toJSON(e) : undefined);
    } else {
      obj.locks = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<AccountLockedLongerDurationResponse>): AccountLockedLongerDurationResponse {
    const message = createBaseAccountLockedLongerDurationResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: AccountLockedLongerDurationResponseSDKType): AccountLockedLongerDurationResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromSDK(e)) : []
    };
  },
  toSDK(message: AccountLockedLongerDurationResponse): AccountLockedLongerDurationResponseSDKType {
    const obj: any = {};
    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toSDK(e) : undefined);
    } else {
      obj.locks = [];
    }
    return obj;
  },
  fromAmino(object: AccountLockedLongerDurationResponseAmino): AccountLockedLongerDurationResponse {
    const message = createBaseAccountLockedLongerDurationResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AccountLockedLongerDurationResponse): AccountLockedLongerDurationResponseAmino {
    const obj: any = {};
    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
    } else {
      obj.locks = message.locks;
    }
    return obj;
  },
  fromAminoMsg(object: AccountLockedLongerDurationResponseAminoMsg): AccountLockedLongerDurationResponse {
    return AccountLockedLongerDurationResponse.fromAmino(object.value);
  },
  toAminoMsg(message: AccountLockedLongerDurationResponse): AccountLockedLongerDurationResponseAminoMsg {
    return {
      type: "osmosis/lockup/account-locked-longer-duration-response",
      value: AccountLockedLongerDurationResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: AccountLockedLongerDurationResponseProtoMsg): AccountLockedLongerDurationResponse {
    return AccountLockedLongerDurationResponse.decode(message.value);
  },
  toProto(message: AccountLockedLongerDurationResponse): Uint8Array {
    return AccountLockedLongerDurationResponse.encode(message).finish();
  },
  toProtoMsg(message: AccountLockedLongerDurationResponse): AccountLockedLongerDurationResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.AccountLockedLongerDurationResponse",
      value: AccountLockedLongerDurationResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AccountLockedLongerDurationResponse.typeUrl, AccountLockedLongerDurationResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountLockedLongerDurationResponse.aminoType, AccountLockedLongerDurationResponse.typeUrl);
function createBaseAccountLockedDurationRequest(): AccountLockedDurationRequest {
  return {
    owner: "",
    duration: Duration.fromPartial({})
  };
}
export const AccountLockedDurationRequest = {
  typeUrl: "/osmosis.lockup.AccountLockedDurationRequest",
  aminoType: "osmosis/lockup/account-locked-duration-request",
  is(o: any): o is AccountLockedDurationRequest {
    return o && (o.$typeUrl === AccountLockedDurationRequest.typeUrl || typeof o.owner === "string" && Duration.is(o.duration));
  },
  isSDK(o: any): o is AccountLockedDurationRequestSDKType {
    return o && (o.$typeUrl === AccountLockedDurationRequest.typeUrl || typeof o.owner === "string" && Duration.isSDK(o.duration));
  },
  isAmino(o: any): o is AccountLockedDurationRequestAmino {
    return o && (o.$typeUrl === AccountLockedDurationRequest.typeUrl || typeof o.owner === "string" && Duration.isAmino(o.duration));
  },
  encode(message: AccountLockedDurationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== undefined) {
      writer.uint32(10).string(message.owner);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedDurationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedDurationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccountLockedDurationRequest {
    const obj = createBaseAccountLockedDurationRequest();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.duration)) obj.duration = Duration.fromJSON(object.duration);
    return obj;
  },
  toJSON(message: AccountLockedDurationRequest): JsonSafe<AccountLockedDurationRequest> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<AccountLockedDurationRequest>): AccountLockedDurationRequest {
    const message = createBaseAccountLockedDurationRequest();
    message.owner = object.owner ?? "";
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromPartial(object.duration);
    }
    return message;
  },
  fromSDK(object: AccountLockedDurationRequestSDKType): AccountLockedDurationRequest {
    return {
      owner: object?.owner,
      duration: object.duration ? Duration.fromSDK(object.duration) : undefined
    };
  },
  toSDK(message: AccountLockedDurationRequest): AccountLockedDurationRequestSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toSDK(message.duration) : undefined);
    return obj;
  },
  fromAmino(object: AccountLockedDurationRequestAmino): AccountLockedDurationRequest {
    const message = createBaseAccountLockedDurationRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration);
    }
    return message;
  },
  toAmino(message: AccountLockedDurationRequest): AccountLockedDurationRequestAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    return obj;
  },
  fromAminoMsg(object: AccountLockedDurationRequestAminoMsg): AccountLockedDurationRequest {
    return AccountLockedDurationRequest.fromAmino(object.value);
  },
  toAminoMsg(message: AccountLockedDurationRequest): AccountLockedDurationRequestAminoMsg {
    return {
      type: "osmosis/lockup/account-locked-duration-request",
      value: AccountLockedDurationRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: AccountLockedDurationRequestProtoMsg): AccountLockedDurationRequest {
    return AccountLockedDurationRequest.decode(message.value);
  },
  toProto(message: AccountLockedDurationRequest): Uint8Array {
    return AccountLockedDurationRequest.encode(message).finish();
  },
  toProtoMsg(message: AccountLockedDurationRequest): AccountLockedDurationRequestProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.AccountLockedDurationRequest",
      value: AccountLockedDurationRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AccountLockedDurationRequest.typeUrl, AccountLockedDurationRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountLockedDurationRequest.aminoType, AccountLockedDurationRequest.typeUrl);
function createBaseAccountLockedDurationResponse(): AccountLockedDurationResponse {
  return {
    locks: []
  };
}
export const AccountLockedDurationResponse = {
  typeUrl: "/osmosis.lockup.AccountLockedDurationResponse",
  aminoType: "osmosis/lockup/account-locked-duration-response",
  is(o: any): o is AccountLockedDurationResponse {
    return o && (o.$typeUrl === AccountLockedDurationResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || PeriodLock.is(o.locks[0])));
  },
  isSDK(o: any): o is AccountLockedDurationResponseSDKType {
    return o && (o.$typeUrl === AccountLockedDurationResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || PeriodLock.isSDK(o.locks[0])));
  },
  isAmino(o: any): o is AccountLockedDurationResponseAmino {
    return o && (o.$typeUrl === AccountLockedDurationResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || PeriodLock.isAmino(o.locks[0])));
  },
  encode(message: AccountLockedDurationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedDurationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedDurationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccountLockedDurationResponse {
    const obj = createBaseAccountLockedDurationResponse();
    if (Array.isArray(object?.locks)) obj.locks = object.locks.map((e: any) => PeriodLock.fromJSON(e));
    return obj;
  },
  toJSON(message: AccountLockedDurationResponse): JsonSafe<AccountLockedDurationResponse> {
    const obj: any = {};
    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toJSON(e) : undefined);
    } else {
      obj.locks = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<AccountLockedDurationResponse>): AccountLockedDurationResponse {
    const message = createBaseAccountLockedDurationResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: AccountLockedDurationResponseSDKType): AccountLockedDurationResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromSDK(e)) : []
    };
  },
  toSDK(message: AccountLockedDurationResponse): AccountLockedDurationResponseSDKType {
    const obj: any = {};
    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toSDK(e) : undefined);
    } else {
      obj.locks = [];
    }
    return obj;
  },
  fromAmino(object: AccountLockedDurationResponseAmino): AccountLockedDurationResponse {
    const message = createBaseAccountLockedDurationResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AccountLockedDurationResponse): AccountLockedDurationResponseAmino {
    const obj: any = {};
    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
    } else {
      obj.locks = message.locks;
    }
    return obj;
  },
  fromAminoMsg(object: AccountLockedDurationResponseAminoMsg): AccountLockedDurationResponse {
    return AccountLockedDurationResponse.fromAmino(object.value);
  },
  toAminoMsg(message: AccountLockedDurationResponse): AccountLockedDurationResponseAminoMsg {
    return {
      type: "osmosis/lockup/account-locked-duration-response",
      value: AccountLockedDurationResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: AccountLockedDurationResponseProtoMsg): AccountLockedDurationResponse {
    return AccountLockedDurationResponse.decode(message.value);
  },
  toProto(message: AccountLockedDurationResponse): Uint8Array {
    return AccountLockedDurationResponse.encode(message).finish();
  },
  toProtoMsg(message: AccountLockedDurationResponse): AccountLockedDurationResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.AccountLockedDurationResponse",
      value: AccountLockedDurationResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AccountLockedDurationResponse.typeUrl, AccountLockedDurationResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountLockedDurationResponse.aminoType, AccountLockedDurationResponse.typeUrl);
function createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest(): AccountLockedLongerDurationNotUnlockingOnlyRequest {
  return {
    owner: "",
    duration: Duration.fromPartial({})
  };
}
export const AccountLockedLongerDurationNotUnlockingOnlyRequest = {
  typeUrl: "/osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnlyRequest",
  aminoType: "osmosis/lockup/account-locked-longer-duration-not-unlocking-only-request",
  is(o: any): o is AccountLockedLongerDurationNotUnlockingOnlyRequest {
    return o && (o.$typeUrl === AccountLockedLongerDurationNotUnlockingOnlyRequest.typeUrl || typeof o.owner === "string" && Duration.is(o.duration));
  },
  isSDK(o: any): o is AccountLockedLongerDurationNotUnlockingOnlyRequestSDKType {
    return o && (o.$typeUrl === AccountLockedLongerDurationNotUnlockingOnlyRequest.typeUrl || typeof o.owner === "string" && Duration.isSDK(o.duration));
  },
  isAmino(o: any): o is AccountLockedLongerDurationNotUnlockingOnlyRequestAmino {
    return o && (o.$typeUrl === AccountLockedLongerDurationNotUnlockingOnlyRequest.typeUrl || typeof o.owner === "string" && Duration.isAmino(o.duration));
  },
  encode(message: AccountLockedLongerDurationNotUnlockingOnlyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== undefined) {
      writer.uint32(10).string(message.owner);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedLongerDurationNotUnlockingOnlyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccountLockedLongerDurationNotUnlockingOnlyRequest {
    const obj = createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.duration)) obj.duration = Duration.fromJSON(object.duration);
    return obj;
  },
  toJSON(message: AccountLockedLongerDurationNotUnlockingOnlyRequest): JsonSafe<AccountLockedLongerDurationNotUnlockingOnlyRequest> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<AccountLockedLongerDurationNotUnlockingOnlyRequest>): AccountLockedLongerDurationNotUnlockingOnlyRequest {
    const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest();
    message.owner = object.owner ?? "";
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromPartial(object.duration);
    }
    return message;
  },
  fromSDK(object: AccountLockedLongerDurationNotUnlockingOnlyRequestSDKType): AccountLockedLongerDurationNotUnlockingOnlyRequest {
    return {
      owner: object?.owner,
      duration: object.duration ? Duration.fromSDK(object.duration) : undefined
    };
  },
  toSDK(message: AccountLockedLongerDurationNotUnlockingOnlyRequest): AccountLockedLongerDurationNotUnlockingOnlyRequestSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toSDK(message.duration) : undefined);
    return obj;
  },
  fromAmino(object: AccountLockedLongerDurationNotUnlockingOnlyRequestAmino): AccountLockedLongerDurationNotUnlockingOnlyRequest {
    const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration);
    }
    return message;
  },
  toAmino(message: AccountLockedLongerDurationNotUnlockingOnlyRequest): AccountLockedLongerDurationNotUnlockingOnlyRequestAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    return obj;
  },
  fromAminoMsg(object: AccountLockedLongerDurationNotUnlockingOnlyRequestAminoMsg): AccountLockedLongerDurationNotUnlockingOnlyRequest {
    return AccountLockedLongerDurationNotUnlockingOnlyRequest.fromAmino(object.value);
  },
  toAminoMsg(message: AccountLockedLongerDurationNotUnlockingOnlyRequest): AccountLockedLongerDurationNotUnlockingOnlyRequestAminoMsg {
    return {
      type: "osmosis/lockup/account-locked-longer-duration-not-unlocking-only-request",
      value: AccountLockedLongerDurationNotUnlockingOnlyRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: AccountLockedLongerDurationNotUnlockingOnlyRequestProtoMsg): AccountLockedLongerDurationNotUnlockingOnlyRequest {
    return AccountLockedLongerDurationNotUnlockingOnlyRequest.decode(message.value);
  },
  toProto(message: AccountLockedLongerDurationNotUnlockingOnlyRequest): Uint8Array {
    return AccountLockedLongerDurationNotUnlockingOnlyRequest.encode(message).finish();
  },
  toProtoMsg(message: AccountLockedLongerDurationNotUnlockingOnlyRequest): AccountLockedLongerDurationNotUnlockingOnlyRequestProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnlyRequest",
      value: AccountLockedLongerDurationNotUnlockingOnlyRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AccountLockedLongerDurationNotUnlockingOnlyRequest.typeUrl, AccountLockedLongerDurationNotUnlockingOnlyRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountLockedLongerDurationNotUnlockingOnlyRequest.aminoType, AccountLockedLongerDurationNotUnlockingOnlyRequest.typeUrl);
function createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse(): AccountLockedLongerDurationNotUnlockingOnlyResponse {
  return {
    locks: []
  };
}
export const AccountLockedLongerDurationNotUnlockingOnlyResponse = {
  typeUrl: "/osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnlyResponse",
  aminoType: "osmosis/lockup/account-locked-longer-duration-not-unlocking-only-response",
  is(o: any): o is AccountLockedLongerDurationNotUnlockingOnlyResponse {
    return o && (o.$typeUrl === AccountLockedLongerDurationNotUnlockingOnlyResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || PeriodLock.is(o.locks[0])));
  },
  isSDK(o: any): o is AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType {
    return o && (o.$typeUrl === AccountLockedLongerDurationNotUnlockingOnlyResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || PeriodLock.isSDK(o.locks[0])));
  },
  isAmino(o: any): o is AccountLockedLongerDurationNotUnlockingOnlyResponseAmino {
    return o && (o.$typeUrl === AccountLockedLongerDurationNotUnlockingOnlyResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || PeriodLock.isAmino(o.locks[0])));
  },
  encode(message: AccountLockedLongerDurationNotUnlockingOnlyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedLongerDurationNotUnlockingOnlyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccountLockedLongerDurationNotUnlockingOnlyResponse {
    const obj = createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse();
    if (Array.isArray(object?.locks)) obj.locks = object.locks.map((e: any) => PeriodLock.fromJSON(e));
    return obj;
  },
  toJSON(message: AccountLockedLongerDurationNotUnlockingOnlyResponse): JsonSafe<AccountLockedLongerDurationNotUnlockingOnlyResponse> {
    const obj: any = {};
    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toJSON(e) : undefined);
    } else {
      obj.locks = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<AccountLockedLongerDurationNotUnlockingOnlyResponse>): AccountLockedLongerDurationNotUnlockingOnlyResponse {
    const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType): AccountLockedLongerDurationNotUnlockingOnlyResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromSDK(e)) : []
    };
  },
  toSDK(message: AccountLockedLongerDurationNotUnlockingOnlyResponse): AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType {
    const obj: any = {};
    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toSDK(e) : undefined);
    } else {
      obj.locks = [];
    }
    return obj;
  },
  fromAmino(object: AccountLockedLongerDurationNotUnlockingOnlyResponseAmino): AccountLockedLongerDurationNotUnlockingOnlyResponse {
    const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AccountLockedLongerDurationNotUnlockingOnlyResponse): AccountLockedLongerDurationNotUnlockingOnlyResponseAmino {
    const obj: any = {};
    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
    } else {
      obj.locks = message.locks;
    }
    return obj;
  },
  fromAminoMsg(object: AccountLockedLongerDurationNotUnlockingOnlyResponseAminoMsg): AccountLockedLongerDurationNotUnlockingOnlyResponse {
    return AccountLockedLongerDurationNotUnlockingOnlyResponse.fromAmino(object.value);
  },
  toAminoMsg(message: AccountLockedLongerDurationNotUnlockingOnlyResponse): AccountLockedLongerDurationNotUnlockingOnlyResponseAminoMsg {
    return {
      type: "osmosis/lockup/account-locked-longer-duration-not-unlocking-only-response",
      value: AccountLockedLongerDurationNotUnlockingOnlyResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: AccountLockedLongerDurationNotUnlockingOnlyResponseProtoMsg): AccountLockedLongerDurationNotUnlockingOnlyResponse {
    return AccountLockedLongerDurationNotUnlockingOnlyResponse.decode(message.value);
  },
  toProto(message: AccountLockedLongerDurationNotUnlockingOnlyResponse): Uint8Array {
    return AccountLockedLongerDurationNotUnlockingOnlyResponse.encode(message).finish();
  },
  toProtoMsg(message: AccountLockedLongerDurationNotUnlockingOnlyResponse): AccountLockedLongerDurationNotUnlockingOnlyResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnlyResponse",
      value: AccountLockedLongerDurationNotUnlockingOnlyResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AccountLockedLongerDurationNotUnlockingOnlyResponse.typeUrl, AccountLockedLongerDurationNotUnlockingOnlyResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountLockedLongerDurationNotUnlockingOnlyResponse.aminoType, AccountLockedLongerDurationNotUnlockingOnlyResponse.typeUrl);
function createBaseAccountLockedLongerDurationDenomRequest(): AccountLockedLongerDurationDenomRequest {
  return {
    owner: "",
    duration: Duration.fromPartial({}),
    denom: ""
  };
}
export const AccountLockedLongerDurationDenomRequest = {
  typeUrl: "/osmosis.lockup.AccountLockedLongerDurationDenomRequest",
  aminoType: "osmosis/lockup/account-locked-longer-duration-denom-request",
  is(o: any): o is AccountLockedLongerDurationDenomRequest {
    return o && (o.$typeUrl === AccountLockedLongerDurationDenomRequest.typeUrl || typeof o.owner === "string" && Duration.is(o.duration) && typeof o.denom === "string");
  },
  isSDK(o: any): o is AccountLockedLongerDurationDenomRequestSDKType {
    return o && (o.$typeUrl === AccountLockedLongerDurationDenomRequest.typeUrl || typeof o.owner === "string" && Duration.isSDK(o.duration) && typeof o.denom === "string");
  },
  isAmino(o: any): o is AccountLockedLongerDurationDenomRequestAmino {
    return o && (o.$typeUrl === AccountLockedLongerDurationDenomRequest.typeUrl || typeof o.owner === "string" && Duration.isAmino(o.duration) && typeof o.denom === "string");
  },
  encode(message: AccountLockedLongerDurationDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== undefined) {
      writer.uint32(10).string(message.owner);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    if (message.denom !== undefined) {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedLongerDurationDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedLongerDurationDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccountLockedLongerDurationDenomRequest {
    const obj = createBaseAccountLockedLongerDurationDenomRequest();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.duration)) obj.duration = Duration.fromJSON(object.duration);
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
  },
  toJSON(message: AccountLockedLongerDurationDenomRequest): JsonSafe<AccountLockedLongerDurationDenomRequest> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: DeepPartial<AccountLockedLongerDurationDenomRequest>): AccountLockedLongerDurationDenomRequest {
    const message = createBaseAccountLockedLongerDurationDenomRequest();
    message.owner = object.owner ?? "";
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromPartial(object.duration);
    }
    message.denom = object.denom ?? "";
    return message;
  },
  fromSDK(object: AccountLockedLongerDurationDenomRequestSDKType): AccountLockedLongerDurationDenomRequest {
    return {
      owner: object?.owner,
      duration: object.duration ? Duration.fromSDK(object.duration) : undefined,
      denom: object?.denom
    };
  },
  toSDK(message: AccountLockedLongerDurationDenomRequest): AccountLockedLongerDurationDenomRequestSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toSDK(message.duration) : undefined);
    obj.denom = message.denom;
    return obj;
  },
  fromAmino(object: AccountLockedLongerDurationDenomRequestAmino): AccountLockedLongerDurationDenomRequest {
    const message = createBaseAccountLockedLongerDurationDenomRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: AccountLockedLongerDurationDenomRequest): AccountLockedLongerDurationDenomRequestAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: AccountLockedLongerDurationDenomRequestAminoMsg): AccountLockedLongerDurationDenomRequest {
    return AccountLockedLongerDurationDenomRequest.fromAmino(object.value);
  },
  toAminoMsg(message: AccountLockedLongerDurationDenomRequest): AccountLockedLongerDurationDenomRequestAminoMsg {
    return {
      type: "osmosis/lockup/account-locked-longer-duration-denom-request",
      value: AccountLockedLongerDurationDenomRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: AccountLockedLongerDurationDenomRequestProtoMsg): AccountLockedLongerDurationDenomRequest {
    return AccountLockedLongerDurationDenomRequest.decode(message.value);
  },
  toProto(message: AccountLockedLongerDurationDenomRequest): Uint8Array {
    return AccountLockedLongerDurationDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: AccountLockedLongerDurationDenomRequest): AccountLockedLongerDurationDenomRequestProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.AccountLockedLongerDurationDenomRequest",
      value: AccountLockedLongerDurationDenomRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AccountLockedLongerDurationDenomRequest.typeUrl, AccountLockedLongerDurationDenomRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountLockedLongerDurationDenomRequest.aminoType, AccountLockedLongerDurationDenomRequest.typeUrl);
function createBaseAccountLockedLongerDurationDenomResponse(): AccountLockedLongerDurationDenomResponse {
  return {
    locks: []
  };
}
export const AccountLockedLongerDurationDenomResponse = {
  typeUrl: "/osmosis.lockup.AccountLockedLongerDurationDenomResponse",
  aminoType: "osmosis/lockup/account-locked-longer-duration-denom-response",
  is(o: any): o is AccountLockedLongerDurationDenomResponse {
    return o && (o.$typeUrl === AccountLockedLongerDurationDenomResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || PeriodLock.is(o.locks[0])));
  },
  isSDK(o: any): o is AccountLockedLongerDurationDenomResponseSDKType {
    return o && (o.$typeUrl === AccountLockedLongerDurationDenomResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || PeriodLock.isSDK(o.locks[0])));
  },
  isAmino(o: any): o is AccountLockedLongerDurationDenomResponseAmino {
    return o && (o.$typeUrl === AccountLockedLongerDurationDenomResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || PeriodLock.isAmino(o.locks[0])));
  },
  encode(message: AccountLockedLongerDurationDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedLongerDurationDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedLongerDurationDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccountLockedLongerDurationDenomResponse {
    const obj = createBaseAccountLockedLongerDurationDenomResponse();
    if (Array.isArray(object?.locks)) obj.locks = object.locks.map((e: any) => PeriodLock.fromJSON(e));
    return obj;
  },
  toJSON(message: AccountLockedLongerDurationDenomResponse): JsonSafe<AccountLockedLongerDurationDenomResponse> {
    const obj: any = {};
    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toJSON(e) : undefined);
    } else {
      obj.locks = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<AccountLockedLongerDurationDenomResponse>): AccountLockedLongerDurationDenomResponse {
    const message = createBaseAccountLockedLongerDurationDenomResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: AccountLockedLongerDurationDenomResponseSDKType): AccountLockedLongerDurationDenomResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromSDK(e)) : []
    };
  },
  toSDK(message: AccountLockedLongerDurationDenomResponse): AccountLockedLongerDurationDenomResponseSDKType {
    const obj: any = {};
    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toSDK(e) : undefined);
    } else {
      obj.locks = [];
    }
    return obj;
  },
  fromAmino(object: AccountLockedLongerDurationDenomResponseAmino): AccountLockedLongerDurationDenomResponse {
    const message = createBaseAccountLockedLongerDurationDenomResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AccountLockedLongerDurationDenomResponse): AccountLockedLongerDurationDenomResponseAmino {
    const obj: any = {};
    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
    } else {
      obj.locks = message.locks;
    }
    return obj;
  },
  fromAminoMsg(object: AccountLockedLongerDurationDenomResponseAminoMsg): AccountLockedLongerDurationDenomResponse {
    return AccountLockedLongerDurationDenomResponse.fromAmino(object.value);
  },
  toAminoMsg(message: AccountLockedLongerDurationDenomResponse): AccountLockedLongerDurationDenomResponseAminoMsg {
    return {
      type: "osmosis/lockup/account-locked-longer-duration-denom-response",
      value: AccountLockedLongerDurationDenomResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: AccountLockedLongerDurationDenomResponseProtoMsg): AccountLockedLongerDurationDenomResponse {
    return AccountLockedLongerDurationDenomResponse.decode(message.value);
  },
  toProto(message: AccountLockedLongerDurationDenomResponse): Uint8Array {
    return AccountLockedLongerDurationDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: AccountLockedLongerDurationDenomResponse): AccountLockedLongerDurationDenomResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.AccountLockedLongerDurationDenomResponse",
      value: AccountLockedLongerDurationDenomResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AccountLockedLongerDurationDenomResponse.typeUrl, AccountLockedLongerDurationDenomResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountLockedLongerDurationDenomResponse.aminoType, AccountLockedLongerDurationDenomResponse.typeUrl);
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/osmosis.lockup.QueryParamsRequest",
  aminoType: "osmosis/lockup/query-params-request",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    return obj;
  },
  toJSON(_: QueryParamsRequest): JsonSafe<QueryParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromSDK(_: QueryParamsRequestSDKType): QueryParamsRequest {
    return {};
  },
  toSDK(_: QueryParamsRequest): QueryParamsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg {
    return {
      type: "osmosis/lockup/query-params-request",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsRequest.aminoType, QueryParamsRequest.typeUrl);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/osmosis.lockup.QueryParamsResponse",
  aminoType: "osmosis/lockup/query-params-response",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    const obj = createBaseQueryParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg {
    return {
      type: "osmosis/lockup/query-params-response",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsResponse.aminoType, QueryParamsResponse.typeUrl);