import { AminoMsg } from "@cosmjs/amino";
import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgFundCommunityPool } from "./tx";
export interface MsgSetWithdrawAddressAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgModifyWithdrawAddress";
  value: {
    delegator_address: string;
    withdraw_address: string;
  };
}
export interface MsgWithdrawDelegatorRewardAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgWithdrawDelegationReward";
  value: {
    delegator_address: string;
    validator_address: string;
  };
}
export interface MsgWithdrawValidatorCommissionAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgWithdrawValidatorCommission";
  value: {
    validator_address: string;
  };
}
export interface MsgFundCommunityPoolAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgFundCommunityPool";
  value: {
    amount: {
      denom: string;
      amount: string;
    }[];
    depositor: string;
  };
}
export const AminoConverter = {
  "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
    aminoType: "cosmos-sdk/MsgModifyWithdrawAddress",
    toAmino: ({
      delegatorAddress,
      withdrawAddress
    }: MsgSetWithdrawAddress): MsgSetWithdrawAddressAminoType["value"] => {
      return {
        delegator_address: delegatorAddress,
        withdraw_address: withdrawAddress
      };
    },
    fromAmino: ({
      delegator_address,
      withdraw_address
    }: MsgSetWithdrawAddressAminoType["value"]): MsgSetWithdrawAddress => {
      return {
        delegatorAddress: delegator_address,
        withdrawAddress: withdraw_address
      };
    }
  },
  "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
    aminoType: "cosmos-sdk/MsgWithdrawDelegationReward",
    toAmino: ({
      delegatorAddress,
      validatorAddress
    }: MsgWithdrawDelegatorReward): MsgWithdrawDelegatorRewardAminoType["value"] => {
      return {
        delegator_address: delegatorAddress,
        validator_address: validatorAddress
      };
    },
    fromAmino: ({
      delegator_address,
      validator_address
    }: MsgWithdrawDelegatorRewardAminoType["value"]): MsgWithdrawDelegatorReward => {
      return {
        delegatorAddress: delegator_address,
        validatorAddress: validator_address
      };
    }
  },
  "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
    aminoType: "cosmos-sdk/MsgWithdrawValidatorCommission",
    toAmino: ({
      validatorAddress
    }: MsgWithdrawValidatorCommission): MsgWithdrawValidatorCommissionAminoType["value"] => {
      return {
        validator_address: validatorAddress
      };
    },
    fromAmino: ({
      validator_address
    }: MsgWithdrawValidatorCommissionAminoType["value"]): MsgWithdrawValidatorCommission => {
      return {
        validatorAddress: validator_address
      };
    }
  },
  "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
    aminoType: "cosmos-sdk/MsgFundCommunityPool",
    toAmino: ({
      amount,
      depositor
    }: MsgFundCommunityPool): MsgFundCommunityPoolAminoType["value"] => {
      return {
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        depositor
      };
    },
    fromAmino: ({
      amount,
      depositor
    }: MsgFundCommunityPoolAminoType["value"]): MsgFundCommunityPool => {
      return {
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        depositor
      };
    }
  }
};