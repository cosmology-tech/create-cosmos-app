import { useChain } from "@cosmos-kit/react";
import { useQueryHooks } from "./useQueryHooks";
import { paginate } from "@/utils";

export function useBalances(chainName: string) {
  const { address } = useChain(chainName);
  const { cosmos, isReady } = useQueryHooks(chainName);

  const balances = cosmos.bank.v1beta1.useAllBalances({
    request: {
      address: address || "",
      pagination: paginate(100n),
    },
    options: {
      enabled: isReady,
    },
  });

  return balances;
}
