//@ts-nocheck
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockSDKType, SyntheticLock, SyntheticLockSDKType } from "./lock";
import { Params, ParamsSDKType } from "./params";
import { TxRpc } from "../../types";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { ModuleBalanceRequest, ModuleBalanceRequestSDKType, ModuleBalanceResponse, ModuleBalanceResponseSDKType, ModuleLockedAmountRequest, ModuleLockedAmountRequestSDKType, ModuleLockedAmountResponse, ModuleLockedAmountResponseSDKType, AccountUnlockableCoinsRequest, AccountUnlockableCoinsRequestSDKType, AccountUnlockableCoinsResponse, AccountUnlockableCoinsResponseSDKType, AccountUnlockingCoinsRequest, AccountUnlockingCoinsRequestSDKType, AccountUnlockingCoinsResponse, AccountUnlockingCoinsResponseSDKType, AccountLockedCoinsRequest, AccountLockedCoinsRequestSDKType, AccountLockedCoinsResponse, AccountLockedCoinsResponseSDKType, AccountLockedPastTimeRequest, AccountLockedPastTimeRequestSDKType, AccountLockedPastTimeResponse, AccountLockedPastTimeResponseSDKType, AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyRequestSDKType, AccountLockedPastTimeNotUnlockingOnlyResponse, AccountLockedPastTimeNotUnlockingOnlyResponseSDKType, AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeRequestSDKType, AccountUnlockedBeforeTimeResponse, AccountUnlockedBeforeTimeResponseSDKType, AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomRequestSDKType, AccountLockedPastTimeDenomResponse, AccountLockedPastTimeDenomResponseSDKType, LockedDenomRequest, LockedDenomRequestSDKType, LockedDenomResponse, LockedDenomResponseSDKType, LockedRequest, LockedRequestSDKType, LockedResponse, LockedResponseSDKType, SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDRequestSDKType, SyntheticLockupsByLockupIDResponse, SyntheticLockupsByLockupIDResponseSDKType, AccountLockedLongerDurationRequest, AccountLockedLongerDurationRequestSDKType, AccountLockedLongerDurationResponse, AccountLockedLongerDurationResponseSDKType, AccountLockedDurationRequest, AccountLockedDurationRequestSDKType, AccountLockedDurationResponse, AccountLockedDurationResponseSDKType, AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyRequestSDKType, AccountLockedLongerDurationNotUnlockingOnlyResponse, AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType, AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomRequestSDKType, AccountLockedLongerDurationDenomResponse, AccountLockedLongerDurationDenomResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Return full balance of the module */
  moduleBalance(request?: ModuleBalanceRequest): Promise<ModuleBalanceResponse>;
  /** Return locked balance of the module */
  moduleLockedAmount(request?: ModuleLockedAmountRequest): Promise<ModuleLockedAmountResponse>;
  /** Returns unlockable coins which are not withdrawn yet */
  accountUnlockableCoins(request: AccountUnlockableCoinsRequest): Promise<AccountUnlockableCoinsResponse>;
  /** Returns unlocking coins */
  accountUnlockingCoins(request: AccountUnlockingCoinsRequest): Promise<AccountUnlockingCoinsResponse>;
  /** Return a locked coins that can't be withdrawn */
  accountLockedCoins(request: AccountLockedCoinsRequest): Promise<AccountLockedCoinsResponse>;
  /** Returns locked records of an account with unlock time beyond timestamp */
  accountLockedPastTime(request: AccountLockedPastTimeRequest): Promise<AccountLockedPastTimeResponse>;
  /**
   * Returns locked records of an account with unlock time beyond timestamp
   * excluding tokens started unlocking
   */
  accountLockedPastTimeNotUnlockingOnly(request: AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<AccountLockedPastTimeNotUnlockingOnlyResponse>;
  /** Returns unlocked records with unlock time before timestamp */
  accountUnlockedBeforeTime(request: AccountUnlockedBeforeTimeRequest): Promise<AccountUnlockedBeforeTimeResponse>;
  /** Returns lock records by address, timestamp, denom */
  accountLockedPastTimeDenom(request: AccountLockedPastTimeDenomRequest): Promise<AccountLockedPastTimeDenomResponse>;
  /** Returns total locked per denom with longer past given time */
  lockedDenom(request: LockedDenomRequest): Promise<LockedDenomResponse>;
  /** Returns lock record by id */
  lockedByID(request: LockedRequest): Promise<LockedResponse>;
  /** Returns synthetic lockups by native lockup id */
  syntheticLockupsByLockupID(request: SyntheticLockupsByLockupIDRequest): Promise<SyntheticLockupsByLockupIDResponse>;
  /** Returns account locked records with longer duration */
  accountLockedLongerDuration(request: AccountLockedLongerDurationRequest): Promise<AccountLockedLongerDurationResponse>;
  /** Returns account locked records with a specific duration */
  accountLockedDuration(request: AccountLockedDurationRequest): Promise<AccountLockedDurationResponse>;
  /**
   * Returns account locked records with longer duration excluding tokens
   * started unlocking
   */
  accountLockedLongerDurationNotUnlockingOnly(request: AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponse>;
  /** Returns account's locked records for a denom with longer duration */
  accountLockedLongerDurationDenom(request: AccountLockedLongerDurationDenomRequest): Promise<AccountLockedLongerDurationDenomResponse>;
  /** Params returns lockup params. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Return full balance of the module */
  moduleBalance = async (request: ModuleBalanceRequest = {}): Promise<ModuleBalanceResponse> => {
    const data = ModuleBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "ModuleBalance", data);
    return promise.then(data => ModuleBalanceResponse.decode(new BinaryReader(data)));
  };
  /* Return locked balance of the module */
  moduleLockedAmount = async (request: ModuleLockedAmountRequest = {}): Promise<ModuleLockedAmountResponse> => {
    const data = ModuleLockedAmountRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "ModuleLockedAmount", data);
    return promise.then(data => ModuleLockedAmountResponse.decode(new BinaryReader(data)));
  };
  /* Returns unlockable coins which are not withdrawn yet */
  accountUnlockableCoins = async (request: AccountUnlockableCoinsRequest): Promise<AccountUnlockableCoinsResponse> => {
    const data = AccountUnlockableCoinsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountUnlockableCoins", data);
    return promise.then(data => AccountUnlockableCoinsResponse.decode(new BinaryReader(data)));
  };
  /* Returns unlocking coins */
  accountUnlockingCoins = async (request: AccountUnlockingCoinsRequest): Promise<AccountUnlockingCoinsResponse> => {
    const data = AccountUnlockingCoinsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountUnlockingCoins", data);
    return promise.then(data => AccountUnlockingCoinsResponse.decode(new BinaryReader(data)));
  };
  /* Return a locked coins that can't be withdrawn */
  accountLockedCoins = async (request: AccountLockedCoinsRequest): Promise<AccountLockedCoinsResponse> => {
    const data = AccountLockedCoinsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedCoins", data);
    return promise.then(data => AccountLockedCoinsResponse.decode(new BinaryReader(data)));
  };
  /* Returns locked records of an account with unlock time beyond timestamp */
  accountLockedPastTime = async (request: AccountLockedPastTimeRequest): Promise<AccountLockedPastTimeResponse> => {
    const data = AccountLockedPastTimeRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedPastTime", data);
    return promise.then(data => AccountLockedPastTimeResponse.decode(new BinaryReader(data)));
  };
  /* Returns locked records of an account with unlock time beyond timestamp
   excluding tokens started unlocking */
  accountLockedPastTimeNotUnlockingOnly = async (request: AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<AccountLockedPastTimeNotUnlockingOnlyResponse> => {
    const data = AccountLockedPastTimeNotUnlockingOnlyRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedPastTimeNotUnlockingOnly", data);
    return promise.then(data => AccountLockedPastTimeNotUnlockingOnlyResponse.decode(new BinaryReader(data)));
  };
  /* Returns unlocked records with unlock time before timestamp */
  accountUnlockedBeforeTime = async (request: AccountUnlockedBeforeTimeRequest): Promise<AccountUnlockedBeforeTimeResponse> => {
    const data = AccountUnlockedBeforeTimeRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountUnlockedBeforeTime", data);
    return promise.then(data => AccountUnlockedBeforeTimeResponse.decode(new BinaryReader(data)));
  };
  /* Returns lock records by address, timestamp, denom */
  accountLockedPastTimeDenom = async (request: AccountLockedPastTimeDenomRequest): Promise<AccountLockedPastTimeDenomResponse> => {
    const data = AccountLockedPastTimeDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedPastTimeDenom", data);
    return promise.then(data => AccountLockedPastTimeDenomResponse.decode(new BinaryReader(data)));
  };
  /* Returns total locked per denom with longer past given time */
  lockedDenom = async (request: LockedDenomRequest): Promise<LockedDenomResponse> => {
    const data = LockedDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "LockedDenom", data);
    return promise.then(data => LockedDenomResponse.decode(new BinaryReader(data)));
  };
  /* Returns lock record by id */
  lockedByID = async (request: LockedRequest): Promise<LockedResponse> => {
    const data = LockedRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "LockedByID", data);
    return promise.then(data => LockedResponse.decode(new BinaryReader(data)));
  };
  /* Returns synthetic lockups by native lockup id */
  syntheticLockupsByLockupID = async (request: SyntheticLockupsByLockupIDRequest): Promise<SyntheticLockupsByLockupIDResponse> => {
    const data = SyntheticLockupsByLockupIDRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "SyntheticLockupsByLockupID", data);
    return promise.then(data => SyntheticLockupsByLockupIDResponse.decode(new BinaryReader(data)));
  };
  /* Returns account locked records with longer duration */
  accountLockedLongerDuration = async (request: AccountLockedLongerDurationRequest): Promise<AccountLockedLongerDurationResponse> => {
    const data = AccountLockedLongerDurationRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedLongerDuration", data);
    return promise.then(data => AccountLockedLongerDurationResponse.decode(new BinaryReader(data)));
  };
  /* Returns account locked records with a specific duration */
  accountLockedDuration = async (request: AccountLockedDurationRequest): Promise<AccountLockedDurationResponse> => {
    const data = AccountLockedDurationRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedDuration", data);
    return promise.then(data => AccountLockedDurationResponse.decode(new BinaryReader(data)));
  };
  /* Returns account locked records with longer duration excluding tokens
   started unlocking */
  accountLockedLongerDurationNotUnlockingOnly = async (request: AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponse> => {
    const data = AccountLockedLongerDurationNotUnlockingOnlyRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedLongerDurationNotUnlockingOnly", data);
    return promise.then(data => AccountLockedLongerDurationNotUnlockingOnlyResponse.decode(new BinaryReader(data)));
  };
  /* Returns account's locked records for a denom with longer duration */
  accountLockedLongerDurationDenom = async (request: AccountLockedLongerDurationDenomRequest): Promise<AccountLockedLongerDurationDenomResponse> => {
    const data = AccountLockedLongerDurationDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedLongerDurationDenom", data);
    return promise.then(data => AccountLockedLongerDurationDenomResponse.decode(new BinaryReader(data)));
  };
  /* Params returns lockup params. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    moduleBalance(request?: ModuleBalanceRequest): Promise<ModuleBalanceResponse> {
      return queryService.moduleBalance(request);
    },
    moduleLockedAmount(request?: ModuleLockedAmountRequest): Promise<ModuleLockedAmountResponse> {
      return queryService.moduleLockedAmount(request);
    },
    accountUnlockableCoins(request: AccountUnlockableCoinsRequest): Promise<AccountUnlockableCoinsResponse> {
      return queryService.accountUnlockableCoins(request);
    },
    accountUnlockingCoins(request: AccountUnlockingCoinsRequest): Promise<AccountUnlockingCoinsResponse> {
      return queryService.accountUnlockingCoins(request);
    },
    accountLockedCoins(request: AccountLockedCoinsRequest): Promise<AccountLockedCoinsResponse> {
      return queryService.accountLockedCoins(request);
    },
    accountLockedPastTime(request: AccountLockedPastTimeRequest): Promise<AccountLockedPastTimeResponse> {
      return queryService.accountLockedPastTime(request);
    },
    accountLockedPastTimeNotUnlockingOnly(request: AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<AccountLockedPastTimeNotUnlockingOnlyResponse> {
      return queryService.accountLockedPastTimeNotUnlockingOnly(request);
    },
    accountUnlockedBeforeTime(request: AccountUnlockedBeforeTimeRequest): Promise<AccountUnlockedBeforeTimeResponse> {
      return queryService.accountUnlockedBeforeTime(request);
    },
    accountLockedPastTimeDenom(request: AccountLockedPastTimeDenomRequest): Promise<AccountLockedPastTimeDenomResponse> {
      return queryService.accountLockedPastTimeDenom(request);
    },
    lockedDenom(request: LockedDenomRequest): Promise<LockedDenomResponse> {
      return queryService.lockedDenom(request);
    },
    lockedByID(request: LockedRequest): Promise<LockedResponse> {
      return queryService.lockedByID(request);
    },
    syntheticLockupsByLockupID(request: SyntheticLockupsByLockupIDRequest): Promise<SyntheticLockupsByLockupIDResponse> {
      return queryService.syntheticLockupsByLockupID(request);
    },
    accountLockedLongerDuration(request: AccountLockedLongerDurationRequest): Promise<AccountLockedLongerDurationResponse> {
      return queryService.accountLockedLongerDuration(request);
    },
    accountLockedDuration(request: AccountLockedDurationRequest): Promise<AccountLockedDurationResponse> {
      return queryService.accountLockedDuration(request);
    },
    accountLockedLongerDurationNotUnlockingOnly(request: AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponse> {
      return queryService.accountLockedLongerDurationNotUnlockingOnly(request);
    },
    accountLockedLongerDurationDenom(request: AccountLockedLongerDurationDenomRequest): Promise<AccountLockedLongerDurationDenomResponse> {
      return queryService.accountLockedLongerDurationDenom(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }
  };
};