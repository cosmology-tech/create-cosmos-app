import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as fm from "../../grpc-gateway";
import { MsgSuperfluidDelegate, MsgSuperfluidDelegateSDKType, MsgSuperfluidDelegateResponse, MsgSuperfluidDelegateResponseSDKType, MsgSuperfluidUndelegate, MsgSuperfluidUndelegateSDKType, MsgSuperfluidUndelegateResponse, MsgSuperfluidUndelegateResponseSDKType, MsgSuperfluidUnbondLock, MsgSuperfluidUnbondLockSDKType, MsgSuperfluidUnbondLockResponse, MsgSuperfluidUnbondLockResponseSDKType, MsgLockAndSuperfluidDelegate, MsgLockAndSuperfluidDelegateSDKType, MsgLockAndSuperfluidDelegateResponse, MsgLockAndSuperfluidDelegateResponseSDKType, MsgUnPoolWhitelistedPool, MsgUnPoolWhitelistedPoolSDKType, MsgUnPoolWhitelistedPoolResponse, MsgUnPoolWhitelistedPoolResponseSDKType } from "./tx";
export class Msg {
  /** Execute superfluid delegation for a lockup */
  static superfluidDelegate(request: MsgSuperfluidDelegate, initRequest?: fm.InitReq): Promise<MsgSuperfluidDelegateResponse> {
    return fm.fetchReq(`/osmosis.superfluid/superfluidDelegate`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** Execute superfluid undelegation for a lockup */
  static superfluidUndelegate(request: MsgSuperfluidUndelegate, initRequest?: fm.InitReq): Promise<MsgSuperfluidUndelegateResponse> {
    return fm.fetchReq(`/osmosis.superfluid/superfluidUndelegate`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /**
   * For a given lock that is being superfluidly undelegated,
   * also unbond the underlying lock.
   */
  static superfluidUnbondLock(request: MsgSuperfluidUnbondLock, initRequest?: fm.InitReq): Promise<MsgSuperfluidUnbondLockResponse> {
    return fm.fetchReq(`/osmosis.superfluid/superfluidUnbondLock`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** Execute lockup lock and superfluid delegation in a single msg */
  static lockAndSuperfluidDelegate(request: MsgLockAndSuperfluidDelegate, initRequest?: fm.InitReq): Promise<MsgLockAndSuperfluidDelegateResponse> {
    return fm.fetchReq(`/osmosis.superfluid/lockAndSuperfluidDelegate`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static unPoolWhitelistedPool(request: MsgUnPoolWhitelistedPool, initRequest?: fm.InitReq): Promise<MsgUnPoolWhitelistedPoolResponse> {
    return fm.fetchReq(`/osmosis.superfluid/unPoolWhitelistedPool`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}