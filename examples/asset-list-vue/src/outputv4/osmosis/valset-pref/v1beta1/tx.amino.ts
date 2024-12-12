//@ts-nocheck
import { ValidatorPreference, ValidatorPreferenceSDKType } from "./state";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { AminoMsg } from "@cosmjs/amino";
import { MsgSetValidatorSetPreference, MsgSetValidatorSetPreferenceSDKType, MsgDelegateToValidatorSet, MsgDelegateToValidatorSetSDKType, MsgUndelegateFromValidatorSet, MsgUndelegateFromValidatorSetSDKType, MsgRedelegateValidatorSet, MsgRedelegateValidatorSetSDKType, MsgWithdrawDelegationRewards, MsgWithdrawDelegationRewardsSDKType, MsgDelegateBondedTokens, MsgDelegateBondedTokensSDKType } from "./tx";
export interface MsgSetValidatorSetPreferenceAminoType extends AminoMsg {
  type: "osmosis/valset-pref/MsgSetValidatorSetPreference";
  value: {
    delegator: string;
    preferences: {
      val_oper_address: string;
      weight: string;
    }[];
  };
}
export interface MsgDelegateToValidatorSetAminoType extends AminoMsg {
  type: "osmosis/valset-pref/MsgDelegateToValidatorSet";
  value: {
    delegator: string;
    coin: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgUndelegateFromValidatorSetAminoType extends AminoMsg {
  type: "osmosis/valset-pref/MsgUndelegateFromValidatorSet";
  value: {
    delegator: string;
    coin: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgRedelegateValidatorSetAminoType extends AminoMsg {
  type: "osmosis/valsetpref/redelegate-validator-set";
  value: {
    delegator: string;
    preferences: {
      val_oper_address: string;
      weight: string;
    }[];
  };
}
export interface MsgWithdrawDelegationRewardsAminoType extends AminoMsg {
  type: "osmosis/valset-pref/MsgWithdrawDelegationRewards";
  value: {
    delegator: string;
  };
}
export interface MsgDelegateBondedTokensAminoType extends AminoMsg {
  type: "osmosis/valsetpref/delegate-bonded-tokens";
  value: {
    delegator: string;
    lockID: string;
  };
}
export const AminoConverter = {
  "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference": {
    aminoType: "osmosis/valset-pref/MsgSetValidatorSetPreference",
    toAmino: ({
      delegator,
      preferences
    }: MsgSetValidatorSetPreference): MsgSetValidatorSetPreferenceAminoType["value"] => {
      return {
        delegator,
        preferences: preferences.map(el0 => ({
          val_oper_address: el0.valOperAddress,
          weight: el0.weight
        }))
      };
    },
    fromAmino: ({
      delegator,
      preferences
    }: MsgSetValidatorSetPreferenceAminoType["value"]): MsgSetValidatorSetPreference => {
      return {
        delegator,
        preferences: preferences.map(el0 => ({
          valOperAddress: el0.val_oper_address,
          weight: el0.weight
        }))
      };
    }
  },
  "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet": {
    aminoType: "osmosis/valset-pref/MsgDelegateToValidatorSet",
    toAmino: ({
      delegator,
      coin
    }: MsgDelegateToValidatorSet): MsgDelegateToValidatorSetAminoType["value"] => {
      return {
        delegator,
        coin: {
          denom: coin.denom,
          amount: coin.amount
        }
      };
    },
    fromAmino: ({
      delegator,
      coin
    }: MsgDelegateToValidatorSetAminoType["value"]): MsgDelegateToValidatorSet => {
      return {
        delegator,
        coin: {
          denom: coin.denom,
          amount: coin.amount
        }
      };
    }
  },
  "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet": {
    aminoType: "osmosis/valset-pref/MsgUndelegateFromValidatorSet",
    toAmino: ({
      delegator,
      coin
    }: MsgUndelegateFromValidatorSet): MsgUndelegateFromValidatorSetAminoType["value"] => {
      return {
        delegator,
        coin: {
          denom: coin.denom,
          amount: coin.amount
        }
      };
    },
    fromAmino: ({
      delegator,
      coin
    }: MsgUndelegateFromValidatorSetAminoType["value"]): MsgUndelegateFromValidatorSet => {
      return {
        delegator,
        coin: {
          denom: coin.denom,
          amount: coin.amount
        }
      };
    }
  },
  "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet": {
    aminoType: "osmosis/valsetpref/redelegate-validator-set",
    toAmino: ({
      delegator,
      preferences
    }: MsgRedelegateValidatorSet): MsgRedelegateValidatorSetAminoType["value"] => {
      return {
        delegator,
        preferences: preferences.map(el0 => ({
          val_oper_address: el0.valOperAddress,
          weight: el0.weight
        }))
      };
    },
    fromAmino: ({
      delegator,
      preferences
    }: MsgRedelegateValidatorSetAminoType["value"]): MsgRedelegateValidatorSet => {
      return {
        delegator,
        preferences: preferences.map(el0 => ({
          valOperAddress: el0.val_oper_address,
          weight: el0.weight
        }))
      };
    }
  },
  "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards": {
    aminoType: "osmosis/valset-pref/MsgWithdrawDelegationRewards",
    toAmino: ({
      delegator
    }: MsgWithdrawDelegationRewards): MsgWithdrawDelegationRewardsAminoType["value"] => {
      return {
        delegator
      };
    },
    fromAmino: ({
      delegator
    }: MsgWithdrawDelegationRewardsAminoType["value"]): MsgWithdrawDelegationRewards => {
      return {
        delegator
      };
    }
  },
  "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens": {
    aminoType: "osmosis/valsetpref/delegate-bonded-tokens",
    toAmino: ({
      delegator,
      lockID
    }: MsgDelegateBondedTokens): MsgDelegateBondedTokensAminoType["value"] => {
      return {
        delegator,
        lockID: lockID.toString()
      };
    },
    fromAmino: ({
      delegator,
      lockID
    }: MsgDelegateBondedTokensAminoType["value"]): MsgDelegateBondedTokens => {
      return {
        delegator,
        lockID: BigInt(lockID)
      };
    }
  }
};