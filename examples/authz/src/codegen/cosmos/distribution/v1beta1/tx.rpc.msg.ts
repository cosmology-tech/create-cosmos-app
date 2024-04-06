//@ts-nocheck
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgSetWithdrawAddress, MsgSetWithdrawAddressSDKType, MsgSetWithdrawAddressResponse, MsgSetWithdrawAddressResponseSDKType, MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardSDKType, MsgWithdrawDelegatorRewardResponse, MsgWithdrawDelegatorRewardResponseSDKType, MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionSDKType, MsgWithdrawValidatorCommissionResponse, MsgWithdrawValidatorCommissionResponseSDKType, MsgFundCommunityPool, MsgFundCommunityPoolSDKType, MsgFundCommunityPoolResponse, MsgFundCommunityPoolResponseSDKType } from "./tx";
/** Msg defines the distribution Msg service. */
export interface Msg {
  /**
   * SetWithdrawAddress defines a method to change the withdraw address
   * for a delegator (or validator self-delegation).
   */
  setWithdrawAddress(signerAddress: string, message: MsgSetWithdrawAddress, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
   * from a single validator.
   */
  withdrawDelegatorReward(signerAddress: string, message: MsgWithdrawDelegatorReward, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * WithdrawValidatorCommission defines a method to withdraw the
   * full commission to the validator address.
   */
  withdrawValidatorCommission(signerAddress: string, message: MsgWithdrawValidatorCommission, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * FundCommunityPool defines a method to allow an account to directly
   * fund the community pool.
   */
  fundCommunityPool(signerAddress: string, message: MsgFundCommunityPool, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* SetWithdrawAddress defines a method to change the withdraw address
   for a delegator (or validator self-delegation). */
  setWithdrawAddress = async (signerAddress: string, message: MsgSetWithdrawAddress, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgSetWithdrawAddress.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* WithdrawDelegatorReward defines a method to withdraw rewards of delegator
   from a single validator. */
  withdrawDelegatorReward = async (signerAddress: string, message: MsgWithdrawDelegatorReward, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgWithdrawDelegatorReward.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* WithdrawValidatorCommission defines a method to withdraw the
   full commission to the validator address. */
  withdrawValidatorCommission = async (signerAddress: string, message: MsgWithdrawValidatorCommission, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgWithdrawValidatorCommission.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* FundCommunityPool defines a method to allow an account to directly
   fund the community pool. */
  fundCommunityPool = async (signerAddress: string, message: MsgFundCommunityPool, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgFundCommunityPool.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};