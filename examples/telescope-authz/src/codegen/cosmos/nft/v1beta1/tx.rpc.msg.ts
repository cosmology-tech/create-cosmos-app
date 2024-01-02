import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgSend, MsgSendSDKType, MsgSendResponse, MsgSendResponseSDKType } from "./tx";
/** Msg defines the nft Msg service. */
export interface Msg {
  /** Send defines a method to send a nft from one account to another account. */
  send(signerAddress: string, message: MsgSend, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Send defines a method to send a nft from one account to another account. */
  send = async (signerAddress: string, message: MsgSend, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgSend.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};