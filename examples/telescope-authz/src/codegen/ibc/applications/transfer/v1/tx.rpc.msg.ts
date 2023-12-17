import { DeliverTxResponse, StdFee, TxRpc } from "../../../../types";
import { MsgTransfer } from "./tx";
/** Msg defines the ibc/transfer Msg service. */
export interface Msg {
  /** Transfer defines a rpc handler method for MsgTransfer. */
  transfer(signerAddress: string, message: MsgTransfer, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Transfer defines a rpc handler method for MsgTransfer. */
  transfer = async (signerAddress: string, message: MsgTransfer, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgTransfer.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};