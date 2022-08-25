import { Rpc } from "@osmonauts/helpers";
export const createRPCQueryClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  cosmos: {
    app: {
      v1alpha1: new (await import("./app/v1alpha1/query.rpc.query")).QueryClientImpl(rpc)
    },
    auth: {
      v1beta1: new (await import("./auth/v1beta1/query.rpc.query")).QueryClientImpl(rpc)
    },
    authz: {
      v1beta1: new (await import("./authz/v1beta1/query.rpc.query")).QueryClientImpl(rpc)
    },
    bank: {
      v1beta1: new (await import("./bank/v1beta1/query.rpc.query")).QueryClientImpl(rpc)
    },
    distribution: {
      v1beta1: new (await import("./distribution/v1beta1/query.rpc.query")).QueryClientImpl(rpc)
    },
    evidence: {
      v1beta1: new (await import("./evidence/v1beta1/query.rpc.query")).QueryClientImpl(rpc)
    },
    feegrant: {
      v1beta1: new (await import("./feegrant/v1beta1/query.rpc.query")).QueryClientImpl(rpc)
    },
    gov: {
      v1: new (await import("./gov/v1/query.rpc.query")).QueryClientImpl(rpc),
      v1beta1: new (await import("./gov/v1beta1/query.rpc.query")).QueryClientImpl(rpc)
    },
    group: {
      v1: new (await import("./group/v1/query.rpc.query")).QueryClientImpl(rpc)
    },
    mint: {
      v1beta1: new (await import("./mint/v1beta1/query.rpc.query")).QueryClientImpl(rpc)
    },
    nft: {
      v1beta1: new (await import("./nft/v1beta1/query.rpc.query")).QueryClientImpl(rpc)
    },
    params: {
      v1beta1: new (await import("./params/v1beta1/query.rpc.query")).QueryClientImpl(rpc)
    },
    slashing: {
      v1beta1: new (await import("./slashing/v1beta1/query.rpc.query")).QueryClientImpl(rpc)
    },
    staking: {
      v1beta1: new (await import("./staking/v1beta1/query.rpc.query")).QueryClientImpl(rpc)
    },
    upgrade: {
      v1beta1: new (await import("./upgrade/v1beta1/query.rpc.query")).QueryClientImpl(rpc)
    }
  }
});