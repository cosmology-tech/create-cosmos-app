import { ValidatorPreference, ValidatorPreferenceSDKType } from "./state";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgSetValidatorSetPreference, MsgSetValidatorSetPreferenceSDKType, MsgSetValidatorSetPreferenceResponse, MsgSetValidatorSetPreferenceResponseSDKType, MsgDelegateToValidatorSet, MsgDelegateToValidatorSetSDKType, MsgDelegateToValidatorSetResponse, MsgDelegateToValidatorSetResponseSDKType, MsgUndelegateFromValidatorSet, MsgUndelegateFromValidatorSetSDKType, MsgUndelegateFromValidatorSetResponse, MsgUndelegateFromValidatorSetResponseSDKType, MsgRedelegateValidatorSet, MsgRedelegateValidatorSetSDKType, MsgRedelegateValidatorSetResponse, MsgRedelegateValidatorSetResponseSDKType, MsgWithdrawDelegationRewards, MsgWithdrawDelegationRewardsSDKType, MsgWithdrawDelegationRewardsResponse, MsgWithdrawDelegationRewardsResponseSDKType, MsgDelegateBondedTokens, MsgDelegateBondedTokensSDKType, MsgDelegateBondedTokensResponse, MsgDelegateBondedTokensResponseSDKType } from "./tx";
/** Msg defines the valset-pref modules's gRPC message service. */
export interface Msg {
  /**
   * SetValidatorSetPreference creates a set of validator preference.
   * This message will process both create + update request.
   */
  setValidatorSetPreference(request: MsgSetValidatorSetPreference): Promise<MsgSetValidatorSetPreferenceResponse>;
  /**
   * DelegateToValidatorSet gets the owner, coins and delegates to a
   * validator-set.
   */
  delegateToValidatorSet(request: MsgDelegateToValidatorSet): Promise<MsgDelegateToValidatorSetResponse>;
  /**
   * UndelegateFromValidatorSet gets the owner and coins and undelegates from
   * validator-set. The unbonding logic will follow the `Undelegate` logic from
   * the sdk.
   */
  undelegateFromValidatorSet(request: MsgUndelegateFromValidatorSet): Promise<MsgUndelegateFromValidatorSetResponse>;
  /**
   * RedelegateValidatorSet takes the existing validator set and redelegates to
   * a new set.
   */
  redelegateValidatorSet(request: MsgRedelegateValidatorSet): Promise<MsgRedelegateValidatorSetResponse>;
  /**
   * WithdrawDelegationRewards allows users to claim rewards from the
   * validator-set.
   */
  withdrawDelegationRewards(request: MsgWithdrawDelegationRewards): Promise<MsgWithdrawDelegationRewardsResponse>;
  /**
   * DelegateBondedTokens allows users to break the lockup bond and delegate
   * osmo tokens to a predefined validator-set.
   */
  delegateBondedTokens(request: MsgDelegateBondedTokens): Promise<MsgDelegateBondedTokensResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.setValidatorSetPreference = this.setValidatorSetPreference.bind(this);
    this.delegateToValidatorSet = this.delegateToValidatorSet.bind(this);
    this.undelegateFromValidatorSet = this.undelegateFromValidatorSet.bind(this);
    this.redelegateValidatorSet = this.redelegateValidatorSet.bind(this);
    this.withdrawDelegationRewards = this.withdrawDelegationRewards.bind(this);
    this.delegateBondedTokens = this.delegateBondedTokens.bind(this);
  }
  setValidatorSetPreference(request: MsgSetValidatorSetPreference): Promise<MsgSetValidatorSetPreferenceResponse> {
    const data = MsgSetValidatorSetPreference.encode(request).finish();
    const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Msg", "SetValidatorSetPreference", data);
    return promise.then(data => MsgSetValidatorSetPreferenceResponse.decode(new BinaryReader(data)));
  }
  delegateToValidatorSet(request: MsgDelegateToValidatorSet): Promise<MsgDelegateToValidatorSetResponse> {
    const data = MsgDelegateToValidatorSet.encode(request).finish();
    const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Msg", "DelegateToValidatorSet", data);
    return promise.then(data => MsgDelegateToValidatorSetResponse.decode(new BinaryReader(data)));
  }
  undelegateFromValidatorSet(request: MsgUndelegateFromValidatorSet): Promise<MsgUndelegateFromValidatorSetResponse> {
    const data = MsgUndelegateFromValidatorSet.encode(request).finish();
    const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Msg", "UndelegateFromValidatorSet", data);
    return promise.then(data => MsgUndelegateFromValidatorSetResponse.decode(new BinaryReader(data)));
  }
  redelegateValidatorSet(request: MsgRedelegateValidatorSet): Promise<MsgRedelegateValidatorSetResponse> {
    const data = MsgRedelegateValidatorSet.encode(request).finish();
    const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Msg", "RedelegateValidatorSet", data);
    return promise.then(data => MsgRedelegateValidatorSetResponse.decode(new BinaryReader(data)));
  }
  withdrawDelegationRewards(request: MsgWithdrawDelegationRewards): Promise<MsgWithdrawDelegationRewardsResponse> {
    const data = MsgWithdrawDelegationRewards.encode(request).finish();
    const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Msg", "WithdrawDelegationRewards", data);
    return promise.then(data => MsgWithdrawDelegationRewardsResponse.decode(new BinaryReader(data)));
  }
  delegateBondedTokens(request: MsgDelegateBondedTokens): Promise<MsgDelegateBondedTokensResponse> {
    const data = MsgDelegateBondedTokens.encode(request).finish();
    const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Msg", "DelegateBondedTokens", data);
    return promise.then(data => MsgDelegateBondedTokensResponse.decode(new BinaryReader(data)));
  }
}
export const createClientImpl = (rpc: Rpc) => {
  return new MsgClientImpl(rpc);
};