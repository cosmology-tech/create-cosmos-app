import { Rpc } from "../helpers";
export const createRPCQueryClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => {
  return {
    cosmos: {
      app: {
        v1alpha1: (await import("../cosmos/app/v1alpha1/query.rpc.Query")).createClientImpl(rpc)
      },
      auth: {
        v1beta1: (await import("../cosmos/auth/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      authz: {
        v1beta1: (await import("../cosmos/authz/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      bank: {
        v1beta1: (await import("../cosmos/bank/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      base: {
        tendermint: {
          v1beta1: (await import("../cosmos/base/tendermint/v1beta1/query.rpc.Service")).createClientImpl(rpc)
        }
      },
      distribution: {
        v1beta1: (await import("../cosmos/distribution/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      evidence: {
        v1beta1: (await import("../cosmos/evidence/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      feegrant: {
        v1beta1: (await import("../cosmos/feegrant/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      gov: {
        v1: (await import("../cosmos/gov/v1/query.rpc.Query")).createClientImpl(rpc),
        v1beta1: (await import("../cosmos/gov/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      group: {
        v1: (await import("../cosmos/group/v1/query.rpc.Query")).createClientImpl(rpc)
      },
      mint: {
        v1beta1: (await import("../cosmos/mint/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      nft: {
        v1beta1: (await import("../cosmos/nft/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      params: {
        v1beta1: (await import("../cosmos/params/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      slashing: {
        v1beta1: (await import("../cosmos/slashing/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      staking: {
        v1beta1: (await import("../cosmos/staking/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      tx: {
        v1beta1: (await import("../cosmos/tx/v1beta1/service.rpc.Service")).createClientImpl(rpc)
      },
      upgrade: {
        v1beta1: (await import("../cosmos/upgrade/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      }
    },
    osmosis: {
      claim: {
        v1beta1: (await import("./claim/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      epochs: {
        v1beta1: (await import("./epochs/query.rpc.Query")).createClientImpl(rpc)
      },
      gamm: {
        v2: (await import("./gamm/v2/query.rpc.Query")).createClientImpl(rpc)
      },
      ibcratelimit: {
        v1beta1: (await import("./ibc-rate-limit/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      incentives: (await import("./incentives/query.rpc.Query")).createClientImpl(rpc),
      lockup: (await import("./lockup/query.rpc.Query")).createClientImpl(rpc),
      mint: {
        v1beta1: (await import("./mint/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      poolincentives: {
        v1beta1: (await import("./pool-incentives/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      superfluid: (await import("./superfluid/query.rpc.Query")).createClientImpl(rpc),
      tokenfactory: {
        v1beta1: (await import("./tokenfactory/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      twap: {
        v1beta1: (await import("./twap/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      txfees: {
        v1beta1: (await import("./txfees/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      }
    }
  };
};