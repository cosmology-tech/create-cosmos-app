import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockSDKType, SyntheticLock, SyntheticLockSDKType } from "./lock";
import { Params, ParamsSDKType } from "./params";
import * as fm from "../../grpc-gateway";
import { ModuleBalanceRequest, ModuleBalanceRequestSDKType, ModuleBalanceResponse, ModuleBalanceResponseSDKType, ModuleLockedAmountRequest, ModuleLockedAmountRequestSDKType, ModuleLockedAmountResponse, ModuleLockedAmountResponseSDKType, AccountUnlockableCoinsRequest, AccountUnlockableCoinsRequestSDKType, AccountUnlockableCoinsResponse, AccountUnlockableCoinsResponseSDKType, AccountUnlockingCoinsRequest, AccountUnlockingCoinsRequestSDKType, AccountUnlockingCoinsResponse, AccountUnlockingCoinsResponseSDKType, AccountLockedCoinsRequest, AccountLockedCoinsRequestSDKType, AccountLockedCoinsResponse, AccountLockedCoinsResponseSDKType, AccountLockedPastTimeRequest, AccountLockedPastTimeRequestSDKType, AccountLockedPastTimeResponse, AccountLockedPastTimeResponseSDKType, AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyRequestSDKType, AccountLockedPastTimeNotUnlockingOnlyResponse, AccountLockedPastTimeNotUnlockingOnlyResponseSDKType, AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeRequestSDKType, AccountUnlockedBeforeTimeResponse, AccountUnlockedBeforeTimeResponseSDKType, AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomRequestSDKType, AccountLockedPastTimeDenomResponse, AccountLockedPastTimeDenomResponseSDKType, LockedDenomRequest, LockedDenomRequestSDKType, LockedDenomResponse, LockedDenomResponseSDKType, LockedRequest, LockedRequestSDKType, LockedResponse, LockedResponseSDKType, SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDRequestSDKType, SyntheticLockupsByLockupIDResponse, SyntheticLockupsByLockupIDResponseSDKType, AccountLockedLongerDurationRequest, AccountLockedLongerDurationRequestSDKType, AccountLockedLongerDurationResponse, AccountLockedLongerDurationResponseSDKType, AccountLockedDurationRequest, AccountLockedDurationRequestSDKType, AccountLockedDurationResponse, AccountLockedDurationResponseSDKType, AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyRequestSDKType, AccountLockedLongerDurationNotUnlockingOnlyResponse, AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType, AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomRequestSDKType, AccountLockedLongerDurationDenomResponse, AccountLockedLongerDurationDenomResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
export class Query {
  /** Return full balance of the module */
  static moduleBalance(request: ModuleBalanceRequest, initRequest?: fm.InitReq): Promise<ModuleBalanceResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/module_balance?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Return locked balance of the module */
  static moduleLockedAmount(request: ModuleLockedAmountRequest, initRequest?: fm.InitReq): Promise<ModuleLockedAmountResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/module_locked_amount?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Returns unlockable coins which are not withdrawn yet */
  static accountUnlockableCoins(request: AccountUnlockableCoinsRequest, initRequest?: fm.InitReq): Promise<AccountUnlockableCoinsResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/account_unlockable_coins/${request["owner"]}?${fm.renderURLSearchParams({
      ...request
    }, ["owner"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Returns unlocking coins */
  static accountUnlockingCoins(request: AccountUnlockingCoinsRequest, initRequest?: fm.InitReq): Promise<AccountUnlockingCoinsResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/account_unlocking_coins/${request["owner"]}?${fm.renderURLSearchParams({
      ...request
    }, ["owner"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Return a locked coins that can't be withdrawn */
  static accountLockedCoins(request: AccountLockedCoinsRequest, initRequest?: fm.InitReq): Promise<AccountLockedCoinsResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/account_locked_coins/${request["owner"]}?${fm.renderURLSearchParams({
      ...request
    }, ["owner"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Returns locked records of an account with unlock time beyond timestamp */
  static accountLockedPastTime(request: AccountLockedPastTimeRequest, initRequest?: fm.InitReq): Promise<AccountLockedPastTimeResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/account_locked_pasttime/${request["owner"]}?${fm.renderURLSearchParams({
      ...request
    }, ["owner"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * Returns locked records of an account with unlock time beyond timestamp
   * excluding tokens started unlocking
   */
  static accountLockedPastTimeNotUnlockingOnly(request: AccountLockedPastTimeNotUnlockingOnlyRequest, initRequest?: fm.InitReq): Promise<AccountLockedPastTimeNotUnlockingOnlyResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/account_locked_pasttime_not_unlocking_only/${request["owner"]}?${fm.renderURLSearchParams({
      ...request
    }, ["owner"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Returns unlocked records with unlock time before timestamp */
  static accountUnlockedBeforeTime(request: AccountUnlockedBeforeTimeRequest, initRequest?: fm.InitReq): Promise<AccountUnlockedBeforeTimeResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/account_unlocked_before_time/${request["owner"]}?${fm.renderURLSearchParams({
      ...request
    }, ["owner"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Returns lock records by address, timestamp, denom */
  static accountLockedPastTimeDenom(request: AccountLockedPastTimeDenomRequest, initRequest?: fm.InitReq): Promise<AccountLockedPastTimeDenomResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/account_locked_pasttime_denom/${request["owner"]}?${fm.renderURLSearchParams({
      ...request
    }, ["owner"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Returns total locked per denom with longer past given time */
  static lockedDenom(request: LockedDenomRequest, initRequest?: fm.InitReq): Promise<LockedDenomResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/locked_denom?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Returns lock record by id */
  static lockedByID(request: LockedRequest, initRequest?: fm.InitReq): Promise<LockedResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/locked_by_id/${request["lock_id"]}?${fm.renderURLSearchParams({
      ...request
    }, ["lock_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Returns synthetic lockups by native lockup id */
  static syntheticLockupsByLockupID(request: SyntheticLockupsByLockupIDRequest, initRequest?: fm.InitReq): Promise<SyntheticLockupsByLockupIDResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/synthetic_lockups_by_lock_id/${request["lock_id"]}?${fm.renderURLSearchParams({
      ...request
    }, ["lock_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Returns account locked records with longer duration */
  static accountLockedLongerDuration(request: AccountLockedLongerDurationRequest, initRequest?: fm.InitReq): Promise<AccountLockedLongerDurationResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/account_locked_longer_duration/${request["owner"]}?${fm.renderURLSearchParams({
      ...request
    }, ["owner"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Returns account locked records with a specific duration */
  static accountLockedDuration(request: AccountLockedDurationRequest, initRequest?: fm.InitReq): Promise<AccountLockedDurationResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/account_locked_duration/${request["owner"]}?${fm.renderURLSearchParams({
      ...request
    }, ["owner"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * Returns account locked records with longer duration excluding tokens
   * started unlocking
   */
  static accountLockedLongerDurationNotUnlockingOnly(request: AccountLockedLongerDurationNotUnlockingOnlyRequest, initRequest?: fm.InitReq): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/account_locked_longer_duration_not_unlocking_only/${request["owner"]}?${fm.renderURLSearchParams({
      ...request
    }, ["owner"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Returns account's locked records for a denom with longer duration */
  static accountLockedLongerDurationDenom(request: AccountLockedLongerDurationDenomRequest, initRequest?: fm.InitReq): Promise<AccountLockedLongerDurationDenomResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/account_locked_longer_duration_denom/${request["owner"]}?${fm.renderURLSearchParams({
      ...request
    }, ["owner"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Params returns lockup params. */
  static params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/params?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
}
export class Querier {
  private readonly url: string;
  constructor(url: string) {
    this.url = url;
  }
  /** Return full balance of the module */
  async moduleBalance(req: ModuleBalanceRequest, headers?: HeadersInit): Promise<ModuleBalanceResponse> {
    return Query.moduleBalance(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Return locked balance of the module */
  async moduleLockedAmount(req: ModuleLockedAmountRequest, headers?: HeadersInit): Promise<ModuleLockedAmountResponse> {
    return Query.moduleLockedAmount(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Returns unlockable coins which are not withdrawn yet */
  async accountUnlockableCoins(req: AccountUnlockableCoinsRequest, headers?: HeadersInit): Promise<AccountUnlockableCoinsResponse> {
    return Query.accountUnlockableCoins(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Returns unlocking coins */
  async accountUnlockingCoins(req: AccountUnlockingCoinsRequest, headers?: HeadersInit): Promise<AccountUnlockingCoinsResponse> {
    return Query.accountUnlockingCoins(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Return a locked coins that can't be withdrawn */
  async accountLockedCoins(req: AccountLockedCoinsRequest, headers?: HeadersInit): Promise<AccountLockedCoinsResponse> {
    return Query.accountLockedCoins(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Returns locked records of an account with unlock time beyond timestamp */
  async accountLockedPastTime(req: AccountLockedPastTimeRequest, headers?: HeadersInit): Promise<AccountLockedPastTimeResponse> {
    return Query.accountLockedPastTime(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * Returns locked records of an account with unlock time beyond timestamp
   * excluding tokens started unlocking
   */
  async accountLockedPastTimeNotUnlockingOnly(req: AccountLockedPastTimeNotUnlockingOnlyRequest, headers?: HeadersInit): Promise<AccountLockedPastTimeNotUnlockingOnlyResponse> {
    return Query.accountLockedPastTimeNotUnlockingOnly(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Returns unlocked records with unlock time before timestamp */
  async accountUnlockedBeforeTime(req: AccountUnlockedBeforeTimeRequest, headers?: HeadersInit): Promise<AccountUnlockedBeforeTimeResponse> {
    return Query.accountUnlockedBeforeTime(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Returns lock records by address, timestamp, denom */
  async accountLockedPastTimeDenom(req: AccountLockedPastTimeDenomRequest, headers?: HeadersInit): Promise<AccountLockedPastTimeDenomResponse> {
    return Query.accountLockedPastTimeDenom(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Returns total locked per denom with longer past given time */
  async lockedDenom(req: LockedDenomRequest, headers?: HeadersInit): Promise<LockedDenomResponse> {
    return Query.lockedDenom(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Returns lock record by id */
  async lockedByID(req: LockedRequest, headers?: HeadersInit): Promise<LockedResponse> {
    return Query.lockedByID(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Returns synthetic lockups by native lockup id */
  async syntheticLockupsByLockupID(req: SyntheticLockupsByLockupIDRequest, headers?: HeadersInit): Promise<SyntheticLockupsByLockupIDResponse> {
    return Query.syntheticLockupsByLockupID(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Returns account locked records with longer duration */
  async accountLockedLongerDuration(req: AccountLockedLongerDurationRequest, headers?: HeadersInit): Promise<AccountLockedLongerDurationResponse> {
    return Query.accountLockedLongerDuration(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Returns account locked records with a specific duration */
  async accountLockedDuration(req: AccountLockedDurationRequest, headers?: HeadersInit): Promise<AccountLockedDurationResponse> {
    return Query.accountLockedDuration(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * Returns account locked records with longer duration excluding tokens
   * started unlocking
   */
  async accountLockedLongerDurationNotUnlockingOnly(req: AccountLockedLongerDurationNotUnlockingOnlyRequest, headers?: HeadersInit): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponse> {
    return Query.accountLockedLongerDurationNotUnlockingOnly(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Returns account's locked records for a denom with longer duration */
  async accountLockedLongerDurationDenom(req: AccountLockedLongerDurationDenomRequest, headers?: HeadersInit): Promise<AccountLockedLongerDurationDenomResponse> {
    return Query.accountLockedLongerDurationDenom(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Params returns lockup params. */
  async params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse> {
    return Query.params(req, {
      headers,
      pathPrefix: this.url
    });
  }
}