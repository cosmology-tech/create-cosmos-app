import { Rpc } from "../helpers";
import { Tendermint34Client, HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { QueryClient } from "@cosmjs/stargate";
export const createCosmicRPCQueryClient = async ({
  rpcEndpoint
}: {
  rpcEndpoint: string | HttpEndpoint;
}) => {
  const tmClient = await Tendermint34Client.connect(rpcEndpoint);
  const client = new QueryClient(tmClient);
  return {
    cosmos: {
      bank: {
        v1beta1: (await import("./bank/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      gov: {
        v1beta1: (await import("./gov/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      }
    }
  };
};