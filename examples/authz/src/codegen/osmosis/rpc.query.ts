//@ts-nocheck
import { Rpc } from "../helpers";
import { connectComet, HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { QueryClient } from "@cosmjs/stargate";
export const createRPCQueryClient = async ({
  rpcEndpoint
}: {
  rpcEndpoint: string | HttpEndpoint;
}) => {
  const tmClient = await connectComet(rpcEndpoint);
  const client = new QueryClient(tmClient);
  return {
    cosmos: {
      app: {
        v1alpha1: (await import("../cosmos/app/v1alpha1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      auth: {
        v1beta1: (await import("../cosmos/auth/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      authz: {
        v1beta1: (await import("../cosmos/authz/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      bank: {
        v1beta1: (await import("../cosmos/bank/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      base: {
        reflection: {
          v1beta1: (await import("../cosmos/base/reflection/v1beta1/reflection.rpc.ReflectionService")).createRpcQueryExtension(client),
          v2alpha1: (await import("../cosmos/base/reflection/v2alpha1/reflection.rpc.ReflectionService")).createRpcQueryExtension(client)
        },
        tendermint: {
          v1beta1: (await import("../cosmos/base/tendermint/v1beta1/query.rpc.Service")).createRpcQueryExtension(client)
        }
      },
      distribution: {
        v1beta1: (await import("../cosmos/distribution/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      evidence: {
        v1beta1: (await import("../cosmos/evidence/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      feegrant: {
        v1beta1: (await import("../cosmos/feegrant/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      gov: {
        v1: (await import("../cosmos/gov/v1/query.rpc.Query")).createRpcQueryExtension(client),
        v1beta1: (await import("../cosmos/gov/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      group: {
        v1: (await import("../cosmos/group/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      mint: {
        v1beta1: (await import("../cosmos/mint/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      nft: {
        v1beta1: (await import("../cosmos/nft/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      params: {
        v1beta1: (await import("../cosmos/params/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      slashing: {
        v1beta1: (await import("../cosmos/slashing/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      staking: {
        v1beta1: (await import("../cosmos/staking/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      tx: {
        v1beta1: (await import("../cosmos/tx/v1beta1/service.rpc.Service")).createRpcQueryExtension(client)
      },
      upgrade: {
        v1beta1: (await import("../cosmos/upgrade/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      }
    },
    osmosis: {
      claim: {
        v1beta1: (await import("./claim/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      epochs: {
        v1beta1: (await import("./epochs/query.rpc.Query")).createRpcQueryExtension(client)
      },
      gamm: {
        v1beta1: (await import("./gamm/v1beta1/query.rpc.Query")).createRpcQueryExtension(client),
        v2: (await import("./gamm/v2/query.rpc.Query")).createRpcQueryExtension(client)
      },
      ibcratelimit: {
        v1beta1: (await import("./ibc-rate-limit/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      incentives: (await import("./incentives/query.rpc.Query")).createRpcQueryExtension(client),
      lockup: (await import("./lockup/query.rpc.Query")).createRpcQueryExtension(client),
      mint: {
        v1beta1: (await import("./mint/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      poolincentives: {
        v1beta1: (await import("./pool-incentives/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      superfluid: (await import("./superfluid/query.rpc.Query")).createRpcQueryExtension(client),
      tokenfactory: {
        v1beta1: (await import("./tokenfactory/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      twap: {
        v1beta1: (await import("./twap/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      txfees: {
        v1beta1: (await import("./txfees/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      }
    }
  };
};