import { EncodeObject } from "../../codegen";
import { GenericAuthorization } from "../../codegen/cosmos/authz/v1beta1/authz";
// import { MsgGrant } from "osmojs/cosmos/authz/v1beta1/tx";
import { SendAuthorization } from "../../codegen/cosmos/bank/v1beta1/authz";
import { StakeAuthorization } from "../../codegen/cosmos/staking/v1beta1/authz";
import { Permission } from "../../utils/authz/permissions";
import { Ref } from 'vue'
import { useChain } from "@interchain-kit/vue";
import { useStargateClient } from "../useStargateClient";
import { coins, StdFee } from "@cosmjs/amino";
import { useAssets } from "../useAssets";

export type GrantMsg =
  | {
    grantType: typeof Permission.Send;
    customize?: SendAuthorization;
  }
  | {
    grantType: typeof Permission.Delegate;
    customize?: StakeAuthorization;
  }
  | {
    grantType: typeof Permission.ClaimRewards | typeof Permission.Vote;
    customize?: GenericAuthorization;
  };

type AuthzTxOptions = {
  msgs: EncodeObject[];
  fee?: StdFee | null;
  onSuccess?: () => void;
  onComplete?: () => void;
  execExpiration?: Date | undefined;
};

export const useAuthzTx = (chainName: Ref<string>) => {

  const { address } = useChain(chainName)
  const { allAssets } = useAssets(chainName)
  const stargazeClient = useStargateClient(chainName)
  const authzTx = async (options: AuthzTxOptions) => {
    const {
      msgs,
    } = options;

    const fee: StdFee = {
      amount: coins('1000', allAssets[0].base),
      gas: '100000'
    }
    console.log('stargazeClient.value>', stargazeClient.value)
    console.log('msgs', msgs)
    console.log('fee', fee)
    const res = await stargazeClient.value.signAndBroadcast(
      address.value,
      msgs,
      fee
    )

    return res;
  }

  return {
    authzTx
  }
}