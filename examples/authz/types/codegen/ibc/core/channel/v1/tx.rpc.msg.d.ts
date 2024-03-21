import { DeliverTxResponse, StdFee, TxRpc } from "../../../../types";
import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement } from "./tx";
/** Msg defines the ibc/channel Msg service. */
export interface Msg {
    /** ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit. */
    channelOpenInit(signerAddress: string, message: MsgChannelOpenInit, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry. */
    channelOpenTry(signerAddress: string, message: MsgChannelOpenTry, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck. */
    channelOpenAck(signerAddress: string, message: MsgChannelOpenAck, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm. */
    channelOpenConfirm(signerAddress: string, message: MsgChannelOpenConfirm, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit. */
    channelCloseInit(signerAddress: string, message: MsgChannelCloseInit, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /**
     * ChannelCloseConfirm defines a rpc handler method for
     * MsgChannelCloseConfirm.
     */
    channelCloseConfirm(signerAddress: string, message: MsgChannelCloseConfirm, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** RecvPacket defines a rpc handler method for MsgRecvPacket. */
    recvPacket(signerAddress: string, message: MsgRecvPacket, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** Timeout defines a rpc handler method for MsgTimeout. */
    timeout(signerAddress: string, message: MsgTimeout, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose. */
    timeoutOnClose(signerAddress: string, message: MsgTimeoutOnClose, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** Acknowledgement defines a rpc handler method for MsgAcknowledgement. */
    acknowledgement(signerAddress: string, message: MsgAcknowledgement, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    channelOpenInit: (signerAddress: string, message: MsgChannelOpenInit, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    channelOpenTry: (signerAddress: string, message: MsgChannelOpenTry, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    channelOpenAck: (signerAddress: string, message: MsgChannelOpenAck, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    channelOpenConfirm: (signerAddress: string, message: MsgChannelOpenConfirm, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    channelCloseInit: (signerAddress: string, message: MsgChannelCloseInit, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    channelCloseConfirm: (signerAddress: string, message: MsgChannelCloseConfirm, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    recvPacket: (signerAddress: string, message: MsgRecvPacket, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    timeout: (signerAddress: string, message: MsgTimeout, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    timeoutOnClose: (signerAddress: string, message: MsgTimeoutOnClose, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    acknowledgement: (signerAddress: string, message: MsgAcknowledgement, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => MsgClientImpl;
