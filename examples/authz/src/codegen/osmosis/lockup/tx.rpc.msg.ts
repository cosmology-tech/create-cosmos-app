//@ts-nocheck
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockSDKType } from "./lock";
import { DeliverTxResponse, StdFee, TxRpc } from "../../types";
import { BinaryReader } from "../../binary";
import { MsgLockTokens, MsgLockTokensSDKType, MsgLockTokensResponse, MsgLockTokensResponseSDKType, MsgBeginUnlockingAll, MsgBeginUnlockingAllSDKType, MsgBeginUnlockingAllResponse, MsgBeginUnlockingAllResponseSDKType, MsgBeginUnlocking, MsgBeginUnlockingSDKType, MsgBeginUnlockingResponse, MsgBeginUnlockingResponseSDKType, MsgExtendLockup, MsgExtendLockupSDKType, MsgExtendLockupResponse, MsgExtendLockupResponseSDKType, MsgForceUnlock, MsgForceUnlockSDKType, MsgForceUnlockResponse, MsgForceUnlockResponseSDKType } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** LockTokens lock tokens */
  lockTokens(signerAddress: string, message: MsgLockTokens, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** BeginUnlockingAll begin unlocking all tokens */
  beginUnlockingAll(signerAddress: string, message: MsgBeginUnlockingAll, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** MsgBeginUnlocking begins unlocking tokens by lock ID */
  beginUnlocking(signerAddress: string, message: MsgBeginUnlocking, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** MsgEditLockup edits the existing lockups by lock ID */
  extendLockup(signerAddress: string, message: MsgExtendLockup, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  forceUnlock(signerAddress: string, message: MsgForceUnlock, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* LockTokens lock tokens */
  lockTokens = async (signerAddress: string, message: MsgLockTokens, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgLockTokens.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* BeginUnlockingAll begin unlocking all tokens */
  beginUnlockingAll = async (signerAddress: string, message: MsgBeginUnlockingAll, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgBeginUnlockingAll.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* MsgBeginUnlocking begins unlocking tokens by lock ID */
  beginUnlocking = async (signerAddress: string, message: MsgBeginUnlocking, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgBeginUnlocking.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* MsgEditLockup edits the existing lockups by lock ID */
  extendLockup = async (signerAddress: string, message: MsgExtendLockup, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgExtendLockup.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* ForceUnlock */
  forceUnlock = async (signerAddress: string, message: MsgForceUnlock, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgForceUnlock.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};