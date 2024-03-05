import { useChain } from "@cosmos-kit/react";
import { useQueryHooks } from "./useQueryHooks";
import { paginate } from "@/utils";

export function useBalances(chainName: string) {
  const { address } = useChain(chainName);
  const { cosmos, isReady } = useQueryHooks(chainName);

  const query = cosmos.bank.v1beta1.useAllBalances({
    request: {
      address: address || "",
      pagination: paginate(100n),
    },
    options: {
      enabled: isReady,
    },
  });

  const data = query.data?.balances || [];
  const gamm = data.filter((balance) => balance.denom.startsWith("gamm/"));
  const nonGamm = data.filter((balance) => !balance.denom.startsWith("gamm/"));

  return { data, gamm, nonGamm, query };
}
