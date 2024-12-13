import { LCDClient } from "@cosmology/lcd";
export const createEvmosLCDClient = async ({
  restEndpoint
}: {
  restEndpoint: string;
}) => {
  const requestClient = new LCDClient({
    restEndpoint
  });
  return {
    cosmos: {
      bank: {
        v1beta1: new (await import("../cosmos/bank/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      gov: {
        v1beta1: new (await import("../cosmos/gov/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      }
    },
    evmos: {
      erc20: {
        v1: new (await import("./erc20/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      }
    }
  };
};