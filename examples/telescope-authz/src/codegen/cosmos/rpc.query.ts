import { Rpc } from "../helpers";
export const createRPCQueryClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => {
  return {
    cosmos: {
      app: {
        v1alpha1: (await import("./app/v1alpha1/query.rpc.Query")).createClientImpl(rpc)
      },
      auth: {
        v1beta1: (await import("./auth/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      authz: {
        v1beta1: (await import("./authz/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      bank: {
        v1beta1: (await import("./bank/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      base: {
        tendermint: {
          v1beta1: (await import("./base/tendermint/v1beta1/query.rpc.Service")).createClientImpl(rpc)
        }
      },
      distribution: {
        v1beta1: (await import("./distribution/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      evidence: {
        v1beta1: (await import("./evidence/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      feegrant: {
        v1beta1: (await import("./feegrant/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      gov: {
        v1: (await import("./gov/v1/query.rpc.Query")).createClientImpl(rpc),
        v1beta1: (await import("./gov/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      group: {
        v1: (await import("./group/v1/query.rpc.Query")).createClientImpl(rpc)
      },
      mint: {
        v1beta1: (await import("./mint/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      nft: {
        v1beta1: (await import("./nft/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      params: {
        v1beta1: (await import("./params/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      slashing: {
        v1beta1: (await import("./slashing/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      staking: {
        v1beta1: (await import("./staking/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      tx: {
        v1beta1: (await import("./tx/v1beta1/service.rpc.Service")).createClientImpl(rpc)
      },
      upgrade: {
        v1beta1: (await import("./upgrade/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      }
    }
  };
};