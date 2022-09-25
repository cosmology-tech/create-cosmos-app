import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgSetWithdrawAddress, MsgSetWithdrawAddressResponse, MsgSetWithdrawAddressResponseSDKType, MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardResponse, MsgWithdrawDelegatorRewardResponseSDKType, MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionResponse, MsgWithdrawValidatorCommissionResponseSDKType, MsgFundCommunityPool, MsgFundCommunityPoolResponse, MsgFundCommunityPoolResponseSDKType } from "./tx";
/** Msg defines the RPC service */

export interface Msg {
  setWithdrawAddress(request: MsgSetWithdrawAddress): Promise<MsgSetWithdrawAddressResponseSDKType>;
  /*SetWithdrawAddress defines a method to change the withdraw address
  for a delegator (or validator self-delegation).*/

  withdrawDelegatorReward(request: MsgWithdrawDelegatorReward): Promise<MsgWithdrawDelegatorRewardResponseSDKType>;
  /*WithdrawDelegatorReward defines a method to withdraw rewards of delegator
  from a single validator.*/

  withdrawValidatorCommission(request: MsgWithdrawValidatorCommission): Promise<MsgWithdrawValidatorCommissionResponseSDKType>;
  /*WithdrawValidatorCommission defines a method to withdraw the
  full commission to the validator address.*/

  fundCommunityPool(request: MsgFundCommunityPool): Promise<MsgFundCommunityPoolResponseSDKType>;
  /*FundCommunityPool defines a method to allow an account to directly
  fund the community pool.*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.setWithdrawAddress = this.setWithdrawAddress.bind(this);
    this.withdrawDelegatorReward = this.withdrawDelegatorReward.bind(this);
    this.withdrawValidatorCommission = this.withdrawValidatorCommission.bind(this);
    this.fundCommunityPool = this.fundCommunityPool.bind(this);
  }

  setWithdrawAddress(request: MsgSetWithdrawAddress): Promise<MsgSetWithdrawAddressResponseSDKType> {
    const data = MsgSetWithdrawAddress.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "SetWithdrawAddress", data);
    return promise.then(data => MsgSetWithdrawAddressResponse.decode(new _m0.Reader(data)));
  }

  withdrawDelegatorReward(request: MsgWithdrawDelegatorReward): Promise<MsgWithdrawDelegatorRewardResponseSDKType> {
    const data = MsgWithdrawDelegatorReward.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawDelegatorReward", data);
    return promise.then(data => MsgWithdrawDelegatorRewardResponse.decode(new _m0.Reader(data)));
  }

  withdrawValidatorCommission(request: MsgWithdrawValidatorCommission): Promise<MsgWithdrawValidatorCommissionResponseSDKType> {
    const data = MsgWithdrawValidatorCommission.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawValidatorCommission", data);
    return promise.then(data => MsgWithdrawValidatorCommissionResponse.decode(new _m0.Reader(data)));
  }

  fundCommunityPool(request: MsgFundCommunityPool): Promise<MsgFundCommunityPoolResponseSDKType> {
    const data = MsgFundCommunityPool.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "FundCommunityPool", data);
    return promise.then(data => MsgFundCommunityPoolResponse.decode(new _m0.Reader(data)));
  }

}