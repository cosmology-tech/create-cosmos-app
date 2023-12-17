import { TxRpc } from "../../types";
import { BinaryReader } from "../../binary";
import { MsgLockTokens, MsgLockTokensResponse, MsgBeginUnlockingAll, MsgBeginUnlockingAllResponse, MsgBeginUnlocking, MsgBeginUnlockingResponse, MsgExtendLockup, MsgExtendLockupResponse, MsgForceUnlock, MsgForceUnlockResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** LockTokens lock tokens */
  lockTokens(request: MsgLockTokens): Promise<MsgLockTokensResponse>;
  /** BeginUnlockingAll begin unlocking all tokens */
  beginUnlockingAll(request: MsgBeginUnlockingAll): Promise<MsgBeginUnlockingAllResponse>;
  /** MsgBeginUnlocking begins unlocking tokens by lock ID */
  beginUnlocking(request: MsgBeginUnlocking): Promise<MsgBeginUnlockingResponse>;
  /** MsgEditLockup edits the existing lockups by lock ID */
  extendLockup(request: MsgExtendLockup): Promise<MsgExtendLockupResponse>;
  forceUnlock(request: MsgForceUnlock): Promise<MsgForceUnlockResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* LockTokens lock tokens */
  lockTokens = async (request: MsgLockTokens): Promise<MsgLockTokensResponse> => {
    const data = MsgLockTokens.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Msg", "LockTokens", data);
    return promise.then(data => MsgLockTokensResponse.decode(new BinaryReader(data)));
  };
  /* BeginUnlockingAll begin unlocking all tokens */
  beginUnlockingAll = async (request: MsgBeginUnlockingAll): Promise<MsgBeginUnlockingAllResponse> => {
    const data = MsgBeginUnlockingAll.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Msg", "BeginUnlockingAll", data);
    return promise.then(data => MsgBeginUnlockingAllResponse.decode(new BinaryReader(data)));
  };
  /* MsgBeginUnlocking begins unlocking tokens by lock ID */
  beginUnlocking = async (request: MsgBeginUnlocking): Promise<MsgBeginUnlockingResponse> => {
    const data = MsgBeginUnlocking.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Msg", "BeginUnlocking", data);
    return promise.then(data => MsgBeginUnlockingResponse.decode(new BinaryReader(data)));
  };
  /* MsgEditLockup edits the existing lockups by lock ID */
  extendLockup = async (request: MsgExtendLockup): Promise<MsgExtendLockupResponse> => {
    const data = MsgExtendLockup.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Msg", "ExtendLockup", data);
    return promise.then(data => MsgExtendLockupResponse.decode(new BinaryReader(data)));
  };
  /* ForceUnlock */
  forceUnlock = async (request: MsgForceUnlock): Promise<MsgForceUnlockResponse> => {
    const data = MsgForceUnlock.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Msg", "ForceUnlock", data);
    return promise.then(data => MsgForceUnlockResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};