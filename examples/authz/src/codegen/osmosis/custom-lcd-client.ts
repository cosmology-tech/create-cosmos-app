//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
export const createCustomLCDClient = async ({
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
    osmosis: {
      gamm: {
        v1beta1: new (await import("./gamm/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      }
    }
  };
};