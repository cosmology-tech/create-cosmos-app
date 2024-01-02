import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement } from "./tx";
export declare const AminoConverter: {
    "/ibc.core.channel.v1.MsgChannelOpenInit": {
        aminoType: string;
        toAmino: (message: MsgChannelOpenInit) => import("./tx").MsgChannelOpenInitAmino;
        fromAmino: (object: import("./tx").MsgChannelOpenInitAmino) => MsgChannelOpenInit;
    };
    "/ibc.core.channel.v1.MsgChannelOpenTry": {
        aminoType: string;
        toAmino: (message: MsgChannelOpenTry) => import("./tx").MsgChannelOpenTryAmino;
        fromAmino: (object: import("./tx").MsgChannelOpenTryAmino) => MsgChannelOpenTry;
    };
    "/ibc.core.channel.v1.MsgChannelOpenAck": {
        aminoType: string;
        toAmino: (message: MsgChannelOpenAck) => import("./tx").MsgChannelOpenAckAmino;
        fromAmino: (object: import("./tx").MsgChannelOpenAckAmino) => MsgChannelOpenAck;
    };
    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
        aminoType: string;
        toAmino: (message: MsgChannelOpenConfirm) => import("./tx").MsgChannelOpenConfirmAmino;
        fromAmino: (object: import("./tx").MsgChannelOpenConfirmAmino) => MsgChannelOpenConfirm;
    };
    "/ibc.core.channel.v1.MsgChannelCloseInit": {
        aminoType: string;
        toAmino: (message: MsgChannelCloseInit) => import("./tx").MsgChannelCloseInitAmino;
        fromAmino: (object: import("./tx").MsgChannelCloseInitAmino) => MsgChannelCloseInit;
    };
    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
        aminoType: string;
        toAmino: (message: MsgChannelCloseConfirm) => import("./tx").MsgChannelCloseConfirmAmino;
        fromAmino: (object: import("./tx").MsgChannelCloseConfirmAmino) => MsgChannelCloseConfirm;
    };
    "/ibc.core.channel.v1.MsgRecvPacket": {
        aminoType: string;
        toAmino: (message: MsgRecvPacket) => import("./tx").MsgRecvPacketAmino;
        fromAmino: (object: import("./tx").MsgRecvPacketAmino) => MsgRecvPacket;
    };
    "/ibc.core.channel.v1.MsgTimeout": {
        aminoType: string;
        toAmino: (message: MsgTimeout) => import("./tx").MsgTimeoutAmino;
        fromAmino: (object: import("./tx").MsgTimeoutAmino) => MsgTimeout;
    };
    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
        aminoType: string;
        toAmino: (message: MsgTimeoutOnClose) => import("./tx").MsgTimeoutOnCloseAmino;
        fromAmino: (object: import("./tx").MsgTimeoutOnCloseAmino) => MsgTimeoutOnClose;
    };
    "/ibc.core.channel.v1.MsgAcknowledgement": {
        aminoType: string;
        toAmino: (message: MsgAcknowledgement) => import("./tx").MsgAcknowledgementAmino;
        fromAmino: (object: import("./tx").MsgAcknowledgementAmino) => MsgAcknowledgement;
    };
};
