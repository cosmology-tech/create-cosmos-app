export const createGrpcGateWayClient = async ({
  endpoint
}: {
  endpoint: string;
}) => {
  endpoint = endpoint.replace(/\/*$/g, "");
  return {
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
    },
    ibc: {
      applications: {
        transfer: {
          v1: new (await import("./applications/transfer/v1/query.rpc.Query")).Querier(endpoint)
        }
      },
      core: {
        channel: {
          v1: new (await import("./core/channel/v1/query.rpc.Query")).Querier(endpoint)
        },
        client: {
          v1: new (await import("./core/client/v1/query.rpc.Query")).Querier(endpoint)
        },
        connection: {
          v1: new (await import("./core/connection/v1/query.rpc.Query")).Querier(endpoint)
        },
        port: {
          v1: new (await import("./core/port/v1/query.rpc.Query")).Querier(endpoint)
        }
      }
    }
  };
};