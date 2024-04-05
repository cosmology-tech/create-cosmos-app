//@ts-nocheck
import { Rpc } from "../helpers";
export const createCosmicRPCTxClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  cosmos: {
    bank: {
      v1beta1: new (await import("./bank/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    gov: {
      v1beta1: new (await import("./gov/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  }
});