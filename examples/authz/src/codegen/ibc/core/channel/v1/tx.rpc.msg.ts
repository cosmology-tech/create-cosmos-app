//@ts-nocheck
import { Channel, ChannelSDKType, Packet, PacketSDKType } from "./channel";
import { Height, HeightSDKType } from "../../client/v1/client";
import { DeliverTxResponse, StdFee, TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { MsgChannelOpenInit, MsgChannelOpenInitSDKType, MsgChannelOpenInitResponse, MsgChannelOpenInitResponseSDKType, MsgChannelOpenTry, MsgChannelOpenTrySDKType, MsgChannelOpenTryResponse, MsgChannelOpenTryResponseSDKType, MsgChannelOpenAck, MsgChannelOpenAckSDKType, MsgChannelOpenAckResponse, MsgChannelOpenAckResponseSDKType, MsgChannelOpenConfirm, MsgChannelOpenConfirmSDKType, MsgChannelOpenConfirmResponse, MsgChannelOpenConfirmResponseSDKType, MsgChannelCloseInit, MsgChannelCloseInitSDKType, MsgChannelCloseInitResponse, MsgChannelCloseInitResponseSDKType, MsgChannelCloseConfirm, MsgChannelCloseConfirmSDKType, MsgChannelCloseConfirmResponse, MsgChannelCloseConfirmResponseSDKType, MsgRecvPacket, MsgRecvPacketSDKType, MsgRecvPacketResponse, MsgRecvPacketResponseSDKType, MsgTimeout, MsgTimeoutSDKType, MsgTimeoutResponse, MsgTimeoutResponseSDKType, MsgTimeoutOnClose, MsgTimeoutOnCloseSDKType, MsgTimeoutOnCloseResponse, MsgTimeoutOnCloseResponseSDKType, MsgAcknowledgement, MsgAcknowledgementSDKType, MsgAcknowledgementResponse, MsgAcknowledgementResponseSDKType } from "./tx";
/** Msg defines the ibc/channel Msg service. */
export interface Msg {
  /** ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit. */
  channelOpenInit(signerAddress: string, message: MsgChannelOpenInit, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry. */
  channelOpenTry(signerAddress: string, message: MsgChannelOpenTry, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck. */
  channelOpenAck(signerAddress: string, message: MsgChannelOpenAck, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm. */
  channelOpenConfirm(signerAddress: string, message: MsgChannelOpenConfirm, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit. */
  channelCloseInit(signerAddress: string, message: MsgChannelCloseInit, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * ChannelCloseConfirm defines a rpc handler method for
   * MsgChannelCloseConfirm.
   */
  channelCloseConfirm(signerAddress: string, message: MsgChannelCloseConfirm, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** RecvPacket defines a rpc handler method for MsgRecvPacket. */
  recvPacket(signerAddress: string, message: MsgRecvPacket, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** Timeout defines a rpc handler method for MsgTimeout. */
  timeout(signerAddress: string, message: MsgTimeout, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose. */
  timeoutOnClose(signerAddress: string, message: MsgTimeoutOnClose, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** Acknowledgement defines a rpc handler method for MsgAcknowledgement. */
  acknowledgement(signerAddress: string, message: MsgAcknowledgement, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit. */
  channelOpenInit = async (signerAddress: string, message: MsgChannelOpenInit, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgChannelOpenInit.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry. */
  channelOpenTry = async (signerAddress: string, message: MsgChannelOpenTry, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgChannelOpenTry.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck. */
  channelOpenAck = async (signerAddress: string, message: MsgChannelOpenAck, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgChannelOpenAck.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm. */
  channelOpenConfirm = async (signerAddress: string, message: MsgChannelOpenConfirm, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgChannelOpenConfirm.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit. */
  channelCloseInit = async (signerAddress: string, message: MsgChannelCloseInit, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgChannelCloseInit.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* ChannelCloseConfirm defines a rpc handler method for
   MsgChannelCloseConfirm. */
  channelCloseConfirm = async (signerAddress: string, message: MsgChannelCloseConfirm, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgChannelCloseConfirm.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* RecvPacket defines a rpc handler method for MsgRecvPacket. */
  recvPacket = async (signerAddress: string, message: MsgRecvPacket, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgRecvPacket.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* Timeout defines a rpc handler method for MsgTimeout. */
  timeout = async (signerAddress: string, message: MsgTimeout, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgTimeout.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose. */
  timeoutOnClose = async (signerAddress: string, message: MsgTimeoutOnClose, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgTimeoutOnClose.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* Acknowledgement defines a rpc handler method for MsgAcknowledgement. */
  acknowledgement = async (signerAddress: string, message: MsgAcknowledgement, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgAcknowledgement.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};