export const createLCDClient = async ({
  restEndpoint
}: {
  restEndpoint: string;
}) => ({
  cosmos: {
    auth: {
      v1beta1: new (await import("../cosmos/auth/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    authz: {
      v1beta1: new (await import("../cosmos/authz/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    distribution: {
      v1beta1: new (await import("../cosmos/distribution/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    evidence: {
      v1beta1: new (await import("../cosmos/evidence/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    feegrant: {
      v1beta1: new (await import("../cosmos/feegrant/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    gov: {
      v1: new (await import("../cosmos/gov/v1/query.lcd")).LCDQueryClient({
        restEndpoint
      }),
      v1beta1: new (await import("../cosmos/gov/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    group: {
      v1: new (await import("../cosmos/group/v1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    mint: {
      v1beta1: new (await import("../cosmos/mint/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    nft: {
      v1beta1: new (await import("../cosmos/nft/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    params: {
      v1beta1: new (await import("../cosmos/params/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    slashing: {
      v1beta1: new (await import("../cosmos/slashing/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    staking: {
      v1beta1: new (await import("../cosmos/staking/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    upgrade: {
      v1beta1: new (await import("../cosmos/upgrade/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    }
  },
  ibc: {
    applications: {
      transfer: {
        v1: new (await import("./applications/transfer/v1/query.lcd")).LCDQueryClient({
          restEndpoint
        })
      }
    },
    core: {
      channel: {
        v1: new (await import("./core/channel/v1/query.lcd")).LCDQueryClient({
          restEndpoint
        })
      },
      client: {
        v1: new (await import("./core/client/v1/query.lcd")).LCDQueryClient({
          restEndpoint
        })
      },
      connection: {
        v1: new (await import("./core/connection/v1/query.lcd")).LCDQueryClient({
          restEndpoint
        })
      }
    }
  }
});