import { LCDClient } from "@osmonauts/lcd";
export const createLCDClient = async ({
  restEndpoint
}: {
  restEndpoint: string;
}) => {
  const requestClient = new LCDClient({
    restEndpoint
  });
  return {
    cosmos: {
      authz: {
        v1beta1: new (await import("../cosmos/authz/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      bank: {
        v1beta1: new (await import("../cosmos/bank/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      distribution: {
        v1beta1: new (await import("../cosmos/distribution/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      gov: {
        v1: new (await import("../cosmos/gov/v1/query.lcd")).LCDQueryClient({
          requestClient
        }),
        v1beta1: new (await import("../cosmos/gov/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      staking: {
        v1beta1: new (await import("../cosmos/staking/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      tx: {
        v1beta1: new (await import("../cosmos/tx/v1beta1/service.lcd")).LCDQueryClient({
          requestClient
        })
      },
      upgrade: {
        v1beta1: new (await import("../cosmos/upgrade/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      }
    },
    ibc: {
      applications: {
        transfer: {
          v1: new (await import("./applications/transfer/v1/query.lcd")).LCDQueryClient({
            requestClient
          })
        }
      },
      core: {
        channel: {
          v1: new (await import("./core/channel/v1/query.lcd")).LCDQueryClient({
            requestClient
          })
        },
        client: {
          v1: new (await import("./core/client/v1/query.lcd")).LCDQueryClient({
            requestClient
          })
        },
        connection: {
          v1: new (await import("./core/connection/v1/query.lcd")).LCDQueryClient({
            requestClient
          })
        }
      }
    }
  };
};