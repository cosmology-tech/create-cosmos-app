import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockSDKType, SyntheticLock, SyntheticLockSDKType } from "./lock";
import { Params, ParamsSDKType } from "./params";
import { LCDClient } from "@osmonauts/lcd";
import { ModuleBalanceRequest, ModuleBalanceRequestSDKType, ModuleBalanceResponse, ModuleBalanceResponseSDKType, ModuleLockedAmountRequest, ModuleLockedAmountRequestSDKType, ModuleLockedAmountResponse, ModuleLockedAmountResponseSDKType, AccountUnlockableCoinsRequest, AccountUnlockableCoinsRequestSDKType, AccountUnlockableCoinsResponse, AccountUnlockableCoinsResponseSDKType, AccountUnlockingCoinsRequest, AccountUnlockingCoinsRequestSDKType, AccountUnlockingCoinsResponse, AccountUnlockingCoinsResponseSDKType, AccountLockedCoinsRequest, AccountLockedCoinsRequestSDKType, AccountLockedCoinsResponse, AccountLockedCoinsResponseSDKType, AccountLockedPastTimeRequest, AccountLockedPastTimeRequestSDKType, AccountLockedPastTimeResponse, AccountLockedPastTimeResponseSDKType, AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyRequestSDKType, AccountLockedPastTimeNotUnlockingOnlyResponse, AccountLockedPastTimeNotUnlockingOnlyResponseSDKType, AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeRequestSDKType, AccountUnlockedBeforeTimeResponse, AccountUnlockedBeforeTimeResponseSDKType, AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomRequestSDKType, AccountLockedPastTimeDenomResponse, AccountLockedPastTimeDenomResponseSDKType, LockedDenomRequest, LockedDenomRequestSDKType, LockedDenomResponse, LockedDenomResponseSDKType, LockedRequest, LockedRequestSDKType, LockedResponse, LockedResponseSDKType, SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDRequestSDKType, SyntheticLockupsByLockupIDResponse, SyntheticLockupsByLockupIDResponseSDKType, AccountLockedLongerDurationRequest, AccountLockedLongerDurationRequestSDKType, AccountLockedLongerDurationResponse, AccountLockedLongerDurationResponseSDKType, AccountLockedDurationRequest, AccountLockedDurationRequestSDKType, AccountLockedDurationResponse, AccountLockedDurationResponseSDKType, AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyRequestSDKType, AccountLockedLongerDurationNotUnlockingOnlyResponse, AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType, AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomRequestSDKType, AccountLockedLongerDurationDenomResponse, AccountLockedLongerDurationDenomResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.moduleBalance = this.moduleBalance.bind(this);
    this.moduleLockedAmount = this.moduleLockedAmount.bind(this);
    this.accountUnlockableCoins = this.accountUnlockableCoins.bind(this);
    this.accountUnlockingCoins = this.accountUnlockingCoins.bind(this);
    this.accountLockedCoins = this.accountLockedCoins.bind(this);
    this.accountLockedPastTime = this.accountLockedPastTime.bind(this);
    this.accountLockedPastTimeNotUnlockingOnly = this.accountLockedPastTimeNotUnlockingOnly.bind(this);
    this.accountUnlockedBeforeTime = this.accountUnlockedBeforeTime.bind(this);
    this.accountLockedPastTimeDenom = this.accountLockedPastTimeDenom.bind(this);
    this.lockedDenom = this.lockedDenom.bind(this);
    this.lockedByID = this.lockedByID.bind(this);
    this.syntheticLockupsByLockupID = this.syntheticLockupsByLockupID.bind(this);
    this.accountLockedLongerDuration = this.accountLockedLongerDuration.bind(this);
    this.accountLockedDuration = this.accountLockedDuration.bind(this);
    this.accountLockedLongerDurationNotUnlockingOnly = this.accountLockedLongerDurationNotUnlockingOnly.bind(this);
    this.accountLockedLongerDurationDenom = this.accountLockedLongerDurationDenom.bind(this);
    this.params = this.params.bind(this);
  }
  /* Return full balance of the module */
  async moduleBalance(_params: ModuleBalanceRequest = {}): Promise<ModuleBalanceResponseSDKType> {
    const endpoint = `osmosis/lockup/v1beta1/module_balance`;
    return await this.req.get<ModuleBalanceResponseSDKType>(endpoint);
  }
  /* Return locked balance of the module */
  async moduleLockedAmount(_params: ModuleLockedAmountRequest = {}): Promise<ModuleLockedAmountResponseSDKType> {
    const endpoint = `osmosis/lockup/v1beta1/module_locked_amount`;
    return await this.req.get<ModuleLockedAmountResponseSDKType>(endpoint);
  }
  /* Returns unlockable coins which are not withdrawn yet */
  async accountUnlockableCoins(params: AccountUnlockableCoinsRequest): Promise<AccountUnlockableCoinsResponseSDKType> {
    const endpoint = `osmosis/lockup/v1beta1/account_unlockable_coins/${params.owner}`;
    return await this.req.get<AccountUnlockableCoinsResponseSDKType>(endpoint);
  }
  /* Returns unlocking coins */
  async accountUnlockingCoins(params: AccountUnlockingCoinsRequest): Promise<AccountUnlockingCoinsResponseSDKType> {
    const endpoint = `osmosis/lockup/v1beta1/account_unlocking_coins/${params.owner}`;
    return await this.req.get<AccountUnlockingCoinsResponseSDKType>(endpoint);
  }
  /* Return a locked coins that can't be withdrawn */
  async accountLockedCoins(params: AccountLockedCoinsRequest): Promise<AccountLockedCoinsResponseSDKType> {
    const endpoint = `osmosis/lockup/v1beta1/account_locked_coins/${params.owner}`;
    return await this.req.get<AccountLockedCoinsResponseSDKType>(endpoint);
  }
  /* Returns locked records of an account with unlock time beyond timestamp */
  async accountLockedPastTime(params: AccountLockedPastTimeRequest): Promise<AccountLockedPastTimeResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.timestamp !== "undefined") {
      options.params.timestamp = params.timestamp;
    }
    const endpoint = `osmosis/lockup/v1beta1/account_locked_pasttime/${params.owner}`;
    return await this.req.get<AccountLockedPastTimeResponseSDKType>(endpoint, options);
  }
  /* Returns locked records of an account with unlock time beyond timestamp
   excluding tokens started unlocking */
  async accountLockedPastTimeNotUnlockingOnly(params: AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<AccountLockedPastTimeNotUnlockingOnlyResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.timestamp !== "undefined") {
      options.params.timestamp = params.timestamp;
    }
    const endpoint = `osmosis/lockup/v1beta1/account_locked_pasttime_not_unlocking_only/${params.owner}`;
    return await this.req.get<AccountLockedPastTimeNotUnlockingOnlyResponseSDKType>(endpoint, options);
  }
  /* Returns unlocked records with unlock time before timestamp */
  async accountUnlockedBeforeTime(params: AccountUnlockedBeforeTimeRequest): Promise<AccountUnlockedBeforeTimeResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.timestamp !== "undefined") {
      options.params.timestamp = params.timestamp;
    }
    const endpoint = `osmosis/lockup/v1beta1/account_unlocked_before_time/${params.owner}`;
    return await this.req.get<AccountUnlockedBeforeTimeResponseSDKType>(endpoint, options);
  }
  /* Returns lock records by address, timestamp, denom */
  async accountLockedPastTimeDenom(params: AccountLockedPastTimeDenomRequest): Promise<AccountLockedPastTimeDenomResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.timestamp !== "undefined") {
      options.params.timestamp = params.timestamp;
    }
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `osmosis/lockup/v1beta1/account_locked_pasttime_denom/${params.owner}`;
    return await this.req.get<AccountLockedPastTimeDenomResponseSDKType>(endpoint, options);
  }
  /* Returns total locked per denom with longer past given time */
  async lockedDenom(params: LockedDenomRequest): Promise<LockedDenomResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    if (typeof params?.duration !== "undefined") {
      options.params.duration = params.duration;
    }
    const endpoint = `osmosis/lockup/v1beta1/locked_denom`;
    return await this.req.get<LockedDenomResponseSDKType>(endpoint, options);
  }
  /* Returns lock record by id */
  async lockedByID(params: LockedRequest): Promise<LockedResponseSDKType> {
    const endpoint = `osmosis/lockup/v1beta1/locked_by_id/${params.lockId}`;
    return await this.req.get<LockedResponseSDKType>(endpoint);
  }
  /* Returns synthetic lockups by native lockup id */
  async syntheticLockupsByLockupID(params: SyntheticLockupsByLockupIDRequest): Promise<SyntheticLockupsByLockupIDResponseSDKType> {
    const endpoint = `osmosis/lockup/v1beta1/synthetic_lockups_by_lock_id/${params.lockId}`;
    return await this.req.get<SyntheticLockupsByLockupIDResponseSDKType>(endpoint);
  }
  /* Returns account locked records with longer duration */
  async accountLockedLongerDuration(params: AccountLockedLongerDurationRequest): Promise<AccountLockedLongerDurationResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.duration !== "undefined") {
      options.params.duration = params.duration;
    }
    const endpoint = `osmosis/lockup/v1beta1/account_locked_longer_duration/${params.owner}`;
    return await this.req.get<AccountLockedLongerDurationResponseSDKType>(endpoint, options);
  }
  /* Returns account locked records with a specific duration */
  async accountLockedDuration(params: AccountLockedDurationRequest): Promise<AccountLockedDurationResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.duration !== "undefined") {
      options.params.duration = params.duration;
    }
    const endpoint = `osmosis/lockup/v1beta1/account_locked_duration/${params.owner}`;
    return await this.req.get<AccountLockedDurationResponseSDKType>(endpoint, options);
  }
  /* Returns account locked records with longer duration excluding tokens
   started unlocking */
  async accountLockedLongerDurationNotUnlockingOnly(params: AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.duration !== "undefined") {
      options.params.duration = params.duration;
    }
    const endpoint = `osmosis/lockup/v1beta1/account_locked_longer_duration_not_unlocking_only/${params.owner}`;
    return await this.req.get<AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType>(endpoint, options);
  }
  /* Returns account's locked records for a denom with longer duration */
  async accountLockedLongerDurationDenom(params: AccountLockedLongerDurationDenomRequest): Promise<AccountLockedLongerDurationDenomResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.duration !== "undefined") {
      options.params.duration = params.duration;
    }
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `osmosis/lockup/v1beta1/account_locked_longer_duration_denom/${params.owner}`;
    return await this.req.get<AccountLockedLongerDurationDenomResponseSDKType>(endpoint, options);
  }
  /* Params returns lockup params. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `osmosis/lockup/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
}