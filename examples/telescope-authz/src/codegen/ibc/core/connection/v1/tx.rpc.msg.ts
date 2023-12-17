import { TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { MsgConnectionOpenInit, MsgConnectionOpenInitResponse, MsgConnectionOpenTry, MsgConnectionOpenTryResponse, MsgConnectionOpenAck, MsgConnectionOpenAckResponse, MsgConnectionOpenConfirm, MsgConnectionOpenConfirmResponse } from "./tx";
/** Msg defines the ibc/connection Msg service. */
export interface Msg {
  /** ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit. */
  connectionOpenInit(request: MsgConnectionOpenInit): Promise<MsgConnectionOpenInitResponse>;
  /** ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry. */
  connectionOpenTry(request: MsgConnectionOpenTry): Promise<MsgConnectionOpenTryResponse>;
  /** ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck. */
  connectionOpenAck(request: MsgConnectionOpenAck): Promise<MsgConnectionOpenAckResponse>;
  /**
   * ConnectionOpenConfirm defines a rpc handler method for
   * MsgConnectionOpenConfirm.
   */
  connectionOpenConfirm(request: MsgConnectionOpenConfirm): Promise<MsgConnectionOpenConfirmResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit. */
  connectionOpenInit = async (request: MsgConnectionOpenInit): Promise<MsgConnectionOpenInitResponse> => {
    const data = MsgConnectionOpenInit.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenInit", data);
    return promise.then(data => MsgConnectionOpenInitResponse.decode(new BinaryReader(data)));
  };
  /* ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry. */
  connectionOpenTry = async (request: MsgConnectionOpenTry): Promise<MsgConnectionOpenTryResponse> => {
    const data = MsgConnectionOpenTry.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenTry", data);
    return promise.then(data => MsgConnectionOpenTryResponse.decode(new BinaryReader(data)));
  };
  /* ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck. */
  connectionOpenAck = async (request: MsgConnectionOpenAck): Promise<MsgConnectionOpenAckResponse> => {
    const data = MsgConnectionOpenAck.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenAck", data);
    return promise.then(data => MsgConnectionOpenAckResponse.decode(new BinaryReader(data)));
  };
  /* ConnectionOpenConfirm defines a rpc handler method for
   MsgConnectionOpenConfirm. */
  connectionOpenConfirm = async (request: MsgConnectionOpenConfirm): Promise<MsgConnectionOpenConfirmResponse> => {
    const data = MsgConnectionOpenConfirm.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenConfirm", data);
    return promise.then(data => MsgConnectionOpenConfirmResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};