import { Coin } from "../../base/v1beta1/coin";
import { Period } from "./vesting";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateVestingAccount, MsgCreateVestingAccountResponse, MsgCreatePermanentLockedAccount, MsgCreatePermanentLockedAccountResponse, MsgCreatePeriodicVestingAccount, MsgCreatePeriodicVestingAccountResponse } from "./tx";

/** Msg defines the RPC service */
export interface Msg {
  createVestingAccount(request: MsgCreateVestingAccount): Promise<MsgCreateVestingAccountResponse>;
  /*CreateVestingAccount defines a method that enables creating a vesting
  account.*/

  createPermanentLockedAccount(request: MsgCreatePermanentLockedAccount): Promise<MsgCreatePermanentLockedAccountResponse>;
  /*CreatePermanentLockedAccount defines a method that enables creating a permanent
  locked account.*/

  createPeriodicVestingAccount(request: MsgCreatePeriodicVestingAccount): Promise<MsgCreatePeriodicVestingAccountResponse>;
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

  createVestingAccount(request: MsgCreateVestingAccount): Promise<MsgCreateVestingAccountResponse> {
    const data = MsgCreateVestingAccount.encode(request).finish();
    const promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreateVestingAccount", data);
    return promise.then(data => MsgCreateVestingAccountResponse.decode(new _m0.Reader(data)));
  }

  createPermanentLockedAccount(request: MsgCreatePermanentLockedAccount): Promise<MsgCreatePermanentLockedAccountResponse> {
    const data = MsgCreatePermanentLockedAccount.encode(request).finish();
    const promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreatePermanentLockedAccount", data);
    return promise.then(data => MsgCreatePermanentLockedAccountResponse.decode(new _m0.Reader(data)));
  }

  createPeriodicVestingAccount(request: MsgCreatePeriodicVestingAccount): Promise<MsgCreatePeriodicVestingAccountResponse> {
    const data = MsgCreatePeriodicVestingAccount.encode(request).finish();
    const promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreatePeriodicVestingAccount", data);
    return promise.then(data => MsgCreatePeriodicVestingAccountResponse.decode(new _m0.Reader(data)));
  }

}