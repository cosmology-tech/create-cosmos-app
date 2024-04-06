//@ts-nocheck
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { DeliverTxResponse, StdFee, TxRpc } from "../../types";
import { BinaryReader } from "../../binary";
import { MsgSuperfluidDelegate, MsgSuperfluidDelegateSDKType, MsgSuperfluidDelegateResponse, MsgSuperfluidDelegateResponseSDKType, MsgSuperfluidUndelegate, MsgSuperfluidUndelegateSDKType, MsgSuperfluidUndelegateResponse, MsgSuperfluidUndelegateResponseSDKType, MsgSuperfluidUnbondLock, MsgSuperfluidUnbondLockSDKType, MsgSuperfluidUnbondLockResponse, MsgSuperfluidUnbondLockResponseSDKType, MsgLockAndSuperfluidDelegate, MsgLockAndSuperfluidDelegateSDKType, MsgLockAndSuperfluidDelegateResponse, MsgLockAndSuperfluidDelegateResponseSDKType, MsgUnPoolWhitelistedPool, MsgUnPoolWhitelistedPoolSDKType, MsgUnPoolWhitelistedPoolResponse, MsgUnPoolWhitelistedPoolResponseSDKType } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** Execute superfluid delegation for a lockup */
  superfluidDelegate(signerAddress: string, message: MsgSuperfluidDelegate, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** Execute superfluid undelegation for a lockup */
  superfluidUndelegate(signerAddress: string, message: MsgSuperfluidUndelegate, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * For a given lock that is being superfluidly undelegated,
   * also unbond the underlying lock.
   */
  superfluidUnbondLock(signerAddress: string, message: MsgSuperfluidUnbondLock, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** Execute lockup lock and superfluid delegation in a single msg */
  lockAndSuperfluidDelegate(signerAddress: string, message: MsgLockAndSuperfluidDelegate, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  unPoolWhitelistedPool(signerAddress: string, message: MsgUnPoolWhitelistedPool, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Execute superfluid delegation for a lockup */
  superfluidDelegate = async (signerAddress: string, message: MsgSuperfluidDelegate, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgSuperfluidDelegate.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* Execute superfluid undelegation for a lockup */
  superfluidUndelegate = async (signerAddress: string, message: MsgSuperfluidUndelegate, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgSuperfluidUndelegate.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* For a given lock that is being superfluidly undelegated,
   also unbond the underlying lock. */
  superfluidUnbondLock = async (signerAddress: string, message: MsgSuperfluidUnbondLock, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgSuperfluidUnbondLock.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* Execute lockup lock and superfluid delegation in a single msg */
  lockAndSuperfluidDelegate = async (signerAddress: string, message: MsgLockAndSuperfluidDelegate, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgLockAndSuperfluidDelegate.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* UnPoolWhitelistedPool */
  unPoolWhitelistedPool = async (signerAddress: string, message: MsgUnPoolWhitelistedPool, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUnPoolWhitelistedPool.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};