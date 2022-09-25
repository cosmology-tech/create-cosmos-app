import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateVestingAccount, MsgCreateVestingAccountResponse, MsgCreateVestingAccountResponseSDKType, MsgCreatePermanentLockedAccount, MsgCreatePermanentLockedAccountResponse, MsgCreatePermanentLockedAccountResponseSDKType, MsgCreatePeriodicVestingAccount, MsgCreatePeriodicVestingAccountResponse, MsgCreatePeriodicVestingAccountResponseSDKType } from "./tx";
/** Msg defines the RPC service */

export interface Msg {
  createVestingAccount(request: MsgCreateVestingAccount): Promise<MsgCreateVestingAccountResponseSDKType>;
  /*CreateVestingAccount defines a method that enables creating a vesting
  account.*/

  createPermanentLockedAccount(request: MsgCreatePermanentLockedAccount): Promise<MsgCreatePermanentLockedAccountResponseSDKType>;
  /*CreatePermanentLockedAccount defines a method that enables creating a permanent
  locked account.*/

  createPeriodicVestingAccount(request: MsgCreatePeriodicVestingAccount): Promise<MsgCreatePeriodicVestingAccountResponseSDKType>;
  /*CreatePeriodicVestingAccount defines a method that enables creating a
  periodic vesting account.*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createVestingAccount = this.createVestingAccount.bind(this);
    this.createPermanentLockedAccount = this.createPermanentLockedAccount.bind(this);
    this.createPeriodicVestingAccount = this.createPeriodicVestingAccount.bind(this);
  }

  createVestingAccount(request: MsgCreateVestingAccount): Promise<MsgCreateVestingAccountResponseSDKType> {
    const data = MsgCreateVestingAccount.encode(request).finish();
    const promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreateVestingAccount", data);
    return promise.then(data => MsgCreateVestingAccountResponse.decode(new _m0.Reader(data)));
  }

  createPermanentLockedAccount(request: MsgCreatePermanentLockedAccount): Promise<MsgCreatePermanentLockedAccountResponseSDKType> {
    const data = MsgCreatePermanentLockedAccount.encode(request).finish();
    const promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreatePermanentLockedAccount", data);
    return promise.then(data => MsgCreatePermanentLockedAccountResponse.decode(new _m0.Reader(data)));
  }

  createPeriodicVestingAccount(request: MsgCreatePeriodicVestingAccount): Promise<MsgCreatePeriodicVestingAccountResponseSDKType> {
    const data = MsgCreatePeriodicVestingAccount.encode(request).finish();
    const promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreatePeriodicVestingAccount", data);
    return promise.then(data => MsgCreatePeriodicVestingAccountResponse.decode(new _m0.Reader(data)));
  }

}