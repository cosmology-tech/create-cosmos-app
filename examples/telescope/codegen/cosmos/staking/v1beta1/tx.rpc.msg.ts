import { Description, CommissionRates } from "./staking";
import { Any } from "../../../google/protobuf/any";
import { Coin } from "../../base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateValidator, MsgCreateValidatorResponse, MsgEditValidator, MsgEditValidatorResponse, MsgDelegate, MsgDelegateResponse, MsgBeginRedelegate, MsgBeginRedelegateResponse, MsgUndelegate, MsgUndelegateResponse } from "./tx";

/** Msg defines the RPC service */
export interface Msg {
  createValidator(request: MsgCreateValidator): Promise<MsgCreateValidatorResponse>;
  /*CreateValidator defines a method for creating a new validator.*/

  editValidator(request: MsgEditValidator): Promise<MsgEditValidatorResponse>;
  /*EditValidator defines a method for editing an existing validator.*/

  delegate(request: MsgDelegate): Promise<MsgDelegateResponse>;
  /*Delegate defines a method for performing a delegation of coins
  from a delegator to a validator.*/

  beginRedelegate(request: MsgBeginRedelegate): Promise<MsgBeginRedelegateResponse>;
  /*BeginRedelegate defines a method for performing a redelegation
  of coins from a delegator and source validator to a destination validator.*/

  undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse>;
  /*Undelegate defines a method for performing an undelegation from a
  delegate and a validator.*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createValidator = this.createValidator.bind(this);
    this.editValidator = this.editValidator.bind(this);
    this.delegate = this.delegate.bind(this);
    this.beginRedelegate = this.beginRedelegate.bind(this);
    this.undelegate = this.undelegate.bind(this);
  }

  createValidator(request: MsgCreateValidator): Promise<MsgCreateValidatorResponse> {
    const data = MsgCreateValidator.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "CreateValidator", data);
    return promise.then(data => MsgCreateValidatorResponse.decode(new _m0.Reader(data)));
  }

  editValidator(request: MsgEditValidator): Promise<MsgEditValidatorResponse> {
    const data = MsgEditValidator.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "EditValidator", data);
    return promise.then(data => MsgEditValidatorResponse.decode(new _m0.Reader(data)));
  }

  delegate(request: MsgDelegate): Promise<MsgDelegateResponse> {
    const data = MsgDelegate.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Delegate", data);
    return promise.then(data => MsgDelegateResponse.decode(new _m0.Reader(data)));
  }

  beginRedelegate(request: MsgBeginRedelegate): Promise<MsgBeginRedelegateResponse> {
    const data = MsgBeginRedelegate.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "BeginRedelegate", data);
    return promise.then(data => MsgBeginRedelegateResponse.decode(new _m0.Reader(data)));
  }

  undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse> {
    const data = MsgUndelegate.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Undelegate", data);
    return promise.then(data => MsgUndelegateResponse.decode(new _m0.Reader(data)));
  }

}