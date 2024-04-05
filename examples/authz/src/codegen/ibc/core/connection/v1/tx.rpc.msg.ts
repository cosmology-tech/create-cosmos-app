//@ts-nocheck
import { Counterparty, CounterpartySDKType, Version, VersionSDKType } from "./connection";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { Height, HeightSDKType } from "../../client/v1/client";
import { DeliverTxResponse, StdFee, TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { MsgConnectionOpenInit, MsgConnectionOpenInitSDKType, MsgConnectionOpenInitResponse, MsgConnectionOpenInitResponseSDKType, MsgConnectionOpenTry, MsgConnectionOpenTrySDKType, MsgConnectionOpenTryResponse, MsgConnectionOpenTryResponseSDKType, MsgConnectionOpenAck, MsgConnectionOpenAckSDKType, MsgConnectionOpenAckResponse, MsgConnectionOpenAckResponseSDKType, MsgConnectionOpenConfirm, MsgConnectionOpenConfirmSDKType, MsgConnectionOpenConfirmResponse, MsgConnectionOpenConfirmResponseSDKType } from "./tx";
/** Msg defines the ibc/connection Msg service. */
export interface Msg {
  /** ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit. */
  connectionOpenInit(signerAddress: string, message: MsgConnectionOpenInit, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry. */
  connectionOpenTry(signerAddress: string, message: MsgConnectionOpenTry, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck. */
  connectionOpenAck(signerAddress: string, message: MsgConnectionOpenAck, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * ConnectionOpenConfirm defines a rpc handler method for
   * MsgConnectionOpenConfirm.
   */
  connectionOpenConfirm(signerAddress: string, message: MsgConnectionOpenConfirm, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit. */
  connectionOpenInit = async (signerAddress: string, message: MsgConnectionOpenInit, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgConnectionOpenInit.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry. */
  connectionOpenTry = async (signerAddress: string, message: MsgConnectionOpenTry, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgConnectionOpenTry.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck. */
  connectionOpenAck = async (signerAddress: string, message: MsgConnectionOpenAck, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgConnectionOpenAck.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* ConnectionOpenConfirm defines a rpc handler method for
   MsgConnectionOpenConfirm. */
  connectionOpenConfirm = async (signerAddress: string, message: MsgConnectionOpenConfirm, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgConnectionOpenConfirm.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};