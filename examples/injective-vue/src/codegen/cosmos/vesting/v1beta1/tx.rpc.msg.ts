import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Period, PeriodSDKType } from "./vesting";
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgCreateVestingAccount, MsgCreateVestingAccountSDKType, MsgCreateVestingAccountResponse, MsgCreateVestingAccountResponseSDKType, MsgCreatePermanentLockedAccount, MsgCreatePermanentLockedAccountSDKType, MsgCreatePermanentLockedAccountResponse, MsgCreatePermanentLockedAccountResponseSDKType, MsgCreatePeriodicVestingAccount, MsgCreatePeriodicVestingAccountSDKType, MsgCreatePeriodicVestingAccountResponse, MsgCreatePeriodicVestingAccountResponseSDKType } from "./tx";
/** Msg defines the bank Msg service. */
export interface Msg {
  /**
   * CreateVestingAccount defines a method that enables creating a vesting
   * account.
   */
  createVestingAccount(request: MsgCreateVestingAccount): Promise<MsgCreateVestingAccountResponse>;
  /**
   * CreatePermanentLockedAccount defines a method that enables creating a permanent
   * locked account.
   */
  createPermanentLockedAccount(request: MsgCreatePermanentLockedAccount): Promise<MsgCreatePermanentLockedAccountResponse>;
  /**
   * CreatePeriodicVestingAccount defines a method that enables creating a
   * periodic vesting account.
   */
  createPeriodicVestingAccount(request: MsgCreatePeriodicVestingAccount): Promise<MsgCreatePeriodicVestingAccountResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createVestingAccount = this.createVestingAccount.bind(this);
    this.createPermanentLockedAccount = this.createPermanentLockedAccount.bind(this);
    this.createPeriodicVestingAccount = this.createPeriodicVestingAccount.bind(this);
  }
  createVestingAccount(request: MsgCreateVestingAccount): Promise<MsgCreateVestingAccountResponse> {
    const data = MsgCreateVestingAccount.encode(request).finish();
    const promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreateVestingAccount", data);
    return promise.then(data => MsgCreateVestingAccountResponse.decode(new BinaryReader(data)));
  }
  createPermanentLockedAccount(request: MsgCreatePermanentLockedAccount): Promise<MsgCreatePermanentLockedAccountResponse> {
    const data = MsgCreatePermanentLockedAccount.encode(request).finish();
    const promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreatePermanentLockedAccount", data);
    return promise.then(data => MsgCreatePermanentLockedAccountResponse.decode(new BinaryReader(data)));
  }
  createPeriodicVestingAccount(request: MsgCreatePeriodicVestingAccount): Promise<MsgCreatePeriodicVestingAccountResponse> {
    const data = MsgCreatePeriodicVestingAccount.encode(request).finish();
    const promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreatePeriodicVestingAccount", data);
    return promise.then(data => MsgCreatePeriodicVestingAccountResponse.decode(new BinaryReader(data)));
  }
}
export const createClientImpl = (rpc: Rpc) => {
  return new MsgClientImpl(rpc);
};