import { TxRpc } from "../../types";
import { BinaryReader } from "../../binary";
import { MsgSuperfluidDelegate, MsgSuperfluidDelegateResponse, MsgSuperfluidUndelegate, MsgSuperfluidUndelegateResponse, MsgSuperfluidUnbondLock, MsgSuperfluidUnbondLockResponse, MsgLockAndSuperfluidDelegate, MsgLockAndSuperfluidDelegateResponse, MsgUnPoolWhitelistedPool, MsgUnPoolWhitelistedPoolResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** Execute superfluid delegation for a lockup */
  superfluidDelegate(request: MsgSuperfluidDelegate): Promise<MsgSuperfluidDelegateResponse>;
  /** Execute superfluid undelegation for a lockup */
  superfluidUndelegate(request: MsgSuperfluidUndelegate): Promise<MsgSuperfluidUndelegateResponse>;
  /**
   * For a given lock that is being superfluidly undelegated,
   * also unbond the underlying lock.
   */
  superfluidUnbondLock(request: MsgSuperfluidUnbondLock): Promise<MsgSuperfluidUnbondLockResponse>;
  /** Execute lockup lock and superfluid delegation in a single msg */
  lockAndSuperfluidDelegate(request: MsgLockAndSuperfluidDelegate): Promise<MsgLockAndSuperfluidDelegateResponse>;
  unPoolWhitelistedPool(request: MsgUnPoolWhitelistedPool): Promise<MsgUnPoolWhitelistedPoolResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Execute superfluid delegation for a lockup */
  superfluidDelegate = async (request: MsgSuperfluidDelegate): Promise<MsgSuperfluidDelegateResponse> => {
    const data = MsgSuperfluidDelegate.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Msg", "SuperfluidDelegate", data);
    return promise.then(data => MsgSuperfluidDelegateResponse.decode(new BinaryReader(data)));
  };
  /* Execute superfluid undelegation for a lockup */
  superfluidUndelegate = async (request: MsgSuperfluidUndelegate): Promise<MsgSuperfluidUndelegateResponse> => {
    const data = MsgSuperfluidUndelegate.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Msg", "SuperfluidUndelegate", data);
    return promise.then(data => MsgSuperfluidUndelegateResponse.decode(new BinaryReader(data)));
  };
  /* For a given lock that is being superfluidly undelegated,
   also unbond the underlying lock. */
  superfluidUnbondLock = async (request: MsgSuperfluidUnbondLock): Promise<MsgSuperfluidUnbondLockResponse> => {
    const data = MsgSuperfluidUnbondLock.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Msg", "SuperfluidUnbondLock", data);
    return promise.then(data => MsgSuperfluidUnbondLockResponse.decode(new BinaryReader(data)));
  };
  /* Execute lockup lock and superfluid delegation in a single msg */
  lockAndSuperfluidDelegate = async (request: MsgLockAndSuperfluidDelegate): Promise<MsgLockAndSuperfluidDelegateResponse> => {
    const data = MsgLockAndSuperfluidDelegate.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Msg", "LockAndSuperfluidDelegate", data);
    return promise.then(data => MsgLockAndSuperfluidDelegateResponse.decode(new BinaryReader(data)));
  };
  /* UnPoolWhitelistedPool */
  unPoolWhitelistedPool = async (request: MsgUnPoolWhitelistedPool): Promise<MsgUnPoolWhitelistedPoolResponse> => {
    const data = MsgUnPoolWhitelistedPool.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Msg", "UnPoolWhitelistedPool", data);
    return promise.then(data => MsgUnPoolWhitelistedPoolResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};