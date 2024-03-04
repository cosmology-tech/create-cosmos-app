import { useChain } from "@cosmos-kit/react";
import { createRpcQueryHooks, useRpcClient } from "osmo-query";

export function useQueryHooks(chainName: string) {
  const { address } = useChain(chainName);

  const rpcClientQuery = useRpcClient({
    rpcEndpoint: address ? `https://rpc.cosmos.directory/${chainName}` : "",
    options: {
      enabled: Boolean(address),
      staleTime: Infinity,
      queryKey: ["rpcClient", chainName],
    },
  });

  const hooks = createRpcQueryHooks({ rpc: rpcClientQuery.data });

  const isReady = Boolean(address) && Boolean(rpcClientQuery.data);

  return { ...hooks, isReady };
}
