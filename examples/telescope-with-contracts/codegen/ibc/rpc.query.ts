import { Rpc } from "@osmonauts/helpers";
export const createRPCQueryClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  cosmos: {
    app: {
      v1alpha1: new (await import("../cosmos/app/v1alpha1/query.rpc.query")).QueryClientImpl(rpc)
    },
    auth: {
      v1beta1: new (await import("../cosmos/auth/v1beta1/query.rpc.query")).QueryClientImpl(rpc)
    },
    authz: {
      v1beta1: new (await import("../cosmos/authz/v1beta1/query.rpc.query")).QueryClientImpl(rpc)
    },
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/query.rpc.query")).QueryClientImpl(rpc)
    },
    distribution: {
      v1beta1: new (await import("../cosmos/distribution/v1beta1/query.rpc.query")).QueryClientImpl(rpc)
    },
    evidence: {
      v1beta1: new (await import("../cosmos/evidence/v1beta1/query.rpc.query")).QueryClientImpl(rpc)
    },
    feegrant: {
      v1beta1: new (await import("../cosmos/feegrant/v1beta1/query.rpc.query")).QueryClientImpl(rpc)
    },
    gov: {
      v1: new (await import("../cosmos/gov/v1/query.rpc.query")).QueryClientImpl(rpc),
      v1beta1: new (await import("../cosmos/gov/v1beta1/query.rpc.query")).QueryClientImpl(rpc)
    },
    group: {
      v1: new (await import("../cosmos/group/v1/query.rpc.query")).QueryClientImpl(rpc)
    },
    mint: {
      v1beta1: new (await import("../cosmos/mint/v1beta1/query.rpc.query")).QueryClientImpl(rpc)
    },
    nft: {
      v1beta1: new (await import("../cosmos/nft/v1beta1/query.rpc.query")).QueryClientImpl(rpc)
    },
    params: {
      v1beta1: new (await import("../cosmos/params/v1beta1/query.rpc.query")).QueryClientImpl(rpc)
    },
    slashing: {
      v1beta1: new (await import("../cosmos/slashing/v1beta1/query.rpc.query")).QueryClientImpl(rpc)
    },
    staking: {
      v1beta1: new (await import("../cosmos/staking/v1beta1/query.rpc.query")).QueryClientImpl(rpc)
    },
    upgrade: {
      v1beta1: new (await import("../cosmos/upgrade/v1beta1/query.rpc.query")).QueryClientImpl(rpc)
    }
  },
  ibc: {
    applications: {
      transfer: {
        v1: new (await import("./applications/transfer/v1/query.rpc.query")).QueryClientImpl(rpc)
      }
    },
    core: {
      channel: {
        v1: new (await import("./core/channel/v1/query.rpc.query")).QueryClientImpl(rpc)
      },
      client: {
        v1: new (await import("./core/client/v1/query.rpc.query")).QueryClientImpl(rpc)
      },
      connection: {
        v1: new (await import("./core/connection/v1/query.rpc.query")).QueryClientImpl(rpc)
      },
      port: {
        v1: new (await import("./core/port/v1/query.rpc.query")).QueryClientImpl(rpc)
      }
    }
  }
});