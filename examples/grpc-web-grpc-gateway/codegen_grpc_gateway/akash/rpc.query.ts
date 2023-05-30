export const createGrpcGateWayClient = async ({
  endpoint
}: {
  endpoint: string;
}) => {
  endpoint = endpoint.replace(/\/*$/g, "");
  return {
    akash: {
      audit: {
        v1beta2: new (await import("./audit/v1beta2/query.rpc.Query")).Querier(endpoint)
      },
      cert: {
        v1beta2: new (await import("./cert/v1beta2/query.rpc.Query")).Querier(endpoint)
      },
      deployment: {
        v1beta1: new (await import("./deployment/v1beta1/query.rpc.Query")).Querier(endpoint),
        v1beta2: new (await import("./deployment/v1beta2/query.rpc.Query")).Querier(endpoint)
      },
      escrow: {
        v1beta1: new (await import("./escrow/v1beta1/query.rpc.Query")).Querier(endpoint),
        v1beta2: new (await import("./escrow/v1beta2/query.rpc.Query")).Querier(endpoint)
      },
      market: {
        v1beta2: new (await import("./market/v1beta2/query.rpc.Query")).Querier(endpoint)
      },
      provider: {
        v1beta2: new (await import("./provider/v1beta2/query.rpc.Query")).Querier(endpoint)
      }
    },
    cosmos: {
      app: {
        v1alpha1: new (await import("../cosmos/app/v1alpha1/query.rpc.Query")).Querier(endpoint)
      },
      auth: {
        v1beta1: new (await import("../cosmos/auth/v1beta1/query.rpc.Query")).Querier(endpoint)
      },
      authz: {
        v1beta1: new (await import("../cosmos/authz/v1beta1/query.rpc.Query")).Querier(endpoint)
      },
      bank: {
        v1beta1: new (await import("../cosmos/bank/v1beta1/query.rpc.Query")).Querier(endpoint)
      },
      base: {
        tendermint: {
          v1beta1: new (await import("../cosmos/base/tendermint/v1beta1/query.rpc.Service")).Querier(endpoint)
        }
      },
      distribution: {
        v1beta1: new (await import("../cosmos/distribution/v1beta1/query.rpc.Query")).Querier(endpoint)
      },
      evidence: {
        v1beta1: new (await import("../cosmos/evidence/v1beta1/query.rpc.Query")).Querier(endpoint)
      },
      feegrant: {
        v1beta1: new (await import("../cosmos/feegrant/v1beta1/query.rpc.Query")).Querier(endpoint)
      },
      gov: {
        v1: new (await import("../cosmos/gov/v1/query.rpc.Query")).Querier(endpoint),
        v1beta1: new (await import("../cosmos/gov/v1beta1/query.rpc.Query")).Querier(endpoint)
      },
      group: {
        v1: new (await import("../cosmos/group/v1/query.rpc.Query")).Querier(endpoint)
      },
      mint: {
        v1beta1: new (await import("../cosmos/mint/v1beta1/query.rpc.Query")).Querier(endpoint)
      },
      nft: {
        v1beta1: new (await import("../cosmos/nft/v1beta1/query.rpc.Query")).Querier(endpoint)
      },
      params: {
        v1beta1: new (await import("../cosmos/params/v1beta1/query.rpc.Query")).Querier(endpoint)
      },
      slashing: {
        v1beta1: new (await import("../cosmos/slashing/v1beta1/query.rpc.Query")).Querier(endpoint)
      },
      staking: {
        v1beta1: new (await import("../cosmos/staking/v1beta1/query.rpc.Query")).Querier(endpoint)
      },
      tx: {
        v1beta1: new (await import("../cosmos/tx/v1beta1/service.rpc.Service")).Querier(endpoint)
      },
      upgrade: {
        v1beta1: new (await import("../cosmos/upgrade/v1beta1/query.rpc.Query")).Querier(endpoint)
      }
    }
  };
};