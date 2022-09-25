import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { QueryClient } from "@cosmjs/stargate";
export const createRPCQueryClient = async ({
  rpcEndpoint
}: {
  rpcEndpoint: string;
}) => {
  const tmClient = await Tendermint34Client.connect(rpcEndpoint);
  const client = new QueryClient(tmClient);
  return {
    cosmos: {
      app: {
        v1alpha1: (await import("./app/v1alpha1/query.rpc.query")).createRpcQueryExtension(client)
      },
      auth: {
        v1beta1: (await import("./auth/v1beta1/query.rpc.query")).createRpcQueryExtension(client)
      },
      authz: {
        v1beta1: (await import("./authz/v1beta1/query.rpc.query")).createRpcQueryExtension(client)
      },
      bank: {
        v1beta1: (await import("./bank/v1beta1/query.rpc.query")).createRpcQueryExtension(client)
      },
      base: {
        tendermint: {
          v1beta1: (await import("./base/tendermint/v1beta1/query.rpc.svc")).createRpcQueryExtension(client)
        }
      },
      distribution: {
        v1beta1: (await import("./distribution/v1beta1/query.rpc.query")).createRpcQueryExtension(client)
      },
      evidence: {
        v1beta1: (await import("./evidence/v1beta1/query.rpc.query")).createRpcQueryExtension(client)
      },
      feegrant: {
        v1beta1: (await import("./feegrant/v1beta1/query.rpc.query")).createRpcQueryExtension(client)
      },
      gov: {
        v1: (await import("./gov/v1/query.rpc.query")).createRpcQueryExtension(client),
        v1beta1: (await import("./gov/v1beta1/query.rpc.query")).createRpcQueryExtension(client)
      },
      group: {
        v1: (await import("./group/v1/query.rpc.query")).createRpcQueryExtension(client)
      },
      mint: {
        v1beta1: (await import("./mint/v1beta1/query.rpc.query")).createRpcQueryExtension(client)
      },
      nft: {
        v1beta1: (await import("./nft/v1beta1/query.rpc.query")).createRpcQueryExtension(client)
      },
      params: {
        v1beta1: (await import("./params/v1beta1/query.rpc.query")).createRpcQueryExtension(client)
      },
      slashing: {
        v1beta1: (await import("./slashing/v1beta1/query.rpc.query")).createRpcQueryExtension(client)
      },
      staking: {
        v1beta1: (await import("./staking/v1beta1/query.rpc.query")).createRpcQueryExtension(client)
      },
      tx: {
        v1beta1: (await import("./tx/v1beta1/service.rpc.svc")).createRpcQueryExtension(client)
      },
      upgrade: {
        v1beta1: (await import("./upgrade/v1beta1/query.rpc.query")).createRpcQueryExtension(client)
      }
    }
  };
};