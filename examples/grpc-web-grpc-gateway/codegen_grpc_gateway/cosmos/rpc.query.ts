export const createGrpcGateWayClient = async ({
  endpoint
}: {
  endpoint: string;
}) => {
  endpoint = endpoint.replace(/\/*$/g, "");
  return {
    cosmos: {
      app: {
        v1alpha1: new (await import("./app/v1alpha1/query.rpc.Query")).Querier(endpoint)
      },
      auth: {
        v1beta1: new (await import("./auth/v1beta1/query.rpc.Query")).Querier(endpoint)
      },
      authz: {
        v1beta1: new (await import("./authz/v1beta1/query.rpc.Query")).Querier(endpoint)
      },
      bank: {
        v1beta1: new (await import("./bank/v1beta1/query.rpc.Query")).Querier(endpoint)
      },
      base: {
        tendermint: {
          v1beta1: new (await import("./base/tendermint/v1beta1/query.rpc.Service")).Querier(endpoint)
        }
      },
      distribution: {
        v1beta1: new (await import("./distribution/v1beta1/query.rpc.Query")).Querier(endpoint)
      },
      evidence: {
        v1beta1: new (await import("./evidence/v1beta1/query.rpc.Query")).Querier(endpoint)
      },
      feegrant: {
        v1beta1: new (await import("./feegrant/v1beta1/query.rpc.Query")).Querier(endpoint)
      },
      gov: {
        v1: new (await import("./gov/v1/query.rpc.Query")).Querier(endpoint),
        v1beta1: new (await import("./gov/v1beta1/query.rpc.Query")).Querier(endpoint)
      },
      group: {
        v1: new (await import("./group/v1/query.rpc.Query")).Querier(endpoint)
      },
      mint: {
        v1beta1: new (await import("./mint/v1beta1/query.rpc.Query")).Querier(endpoint)
      },
      nft: {
        v1beta1: new (await import("./nft/v1beta1/query.rpc.Query")).Querier(endpoint)
      },
      params: {
        v1beta1: new (await import("./params/v1beta1/query.rpc.Query")).Querier(endpoint)
      },
      slashing: {
        v1beta1: new (await import("./slashing/v1beta1/query.rpc.Query")).Querier(endpoint)
      },
      staking: {
        v1beta1: new (await import("./staking/v1beta1/query.rpc.Query")).Querier(endpoint)
      },
      tx: {
        v1beta1: new (await import("./tx/v1beta1/service.rpc.Service")).Querier(endpoint)
      },
      upgrade: {
        v1beta1: new (await import("./upgrade/v1beta1/query.rpc.Query")).Querier(endpoint)
      }
    }
  };
};