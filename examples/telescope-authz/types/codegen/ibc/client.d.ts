import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const ibcAminoConverters: {
    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
        aminoType: string;
        toAmino: (message: import("./core/connection/v1/tx").MsgConnectionOpenInit) => import("./core/connection/v1/tx").MsgConnectionOpenInitAmino;
        fromAmino: (object: import("./core/connection/v1/tx").MsgConnectionOpenInitAmino) => import("./core/connection/v1/tx").MsgConnectionOpenInit;
    };
    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
        aminoType: string;
        toAmino: (message: import("./core/connection/v1/tx").MsgConnectionOpenTry) => import("./core/connection/v1/tx").MsgConnectionOpenTryAmino;
        fromAmino: (object: import("./core/connection/v1/tx").MsgConnectionOpenTryAmino) => import("./core/connection/v1/tx").MsgConnectionOpenTry;
    };
    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
        aminoType: string;
        toAmino: (message: import("./core/connection/v1/tx").MsgConnectionOpenAck) => import("./core/connection/v1/tx").MsgConnectionOpenAckAmino;
        fromAmino: (object: import("./core/connection/v1/tx").MsgConnectionOpenAckAmino) => import("./core/connection/v1/tx").MsgConnectionOpenAck;
    };
    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
        aminoType: string;
        toAmino: (message: import("./core/connection/v1/tx").MsgConnectionOpenConfirm) => import("./core/connection/v1/tx").MsgConnectionOpenConfirmAmino;
        fromAmino: (object: import("./core/connection/v1/tx").MsgConnectionOpenConfirmAmino) => import("./core/connection/v1/tx").MsgConnectionOpenConfirm;
    };
    "/ibc.core.client.v1.MsgCreateClient": {
        aminoType: string;
        toAmino: (message: import("./core/client/v1/tx").MsgCreateClient) => import("./core/client/v1/tx").MsgCreateClientAmino;
        fromAmino: (object: import("./core/client/v1/tx").MsgCreateClientAmino) => import("./core/client/v1/tx").MsgCreateClient;
    };
    "/ibc.core.client.v1.MsgUpdateClient": {
        aminoType: string;
        toAmino: (message: import("./core/client/v1/tx").MsgUpdateClient) => import("./core/client/v1/tx").MsgUpdateClientAmino;
        fromAmino: (object: import("./core/client/v1/tx").MsgUpdateClientAmino) => import("./core/client/v1/tx").MsgUpdateClient;
    };
    "/ibc.core.client.v1.MsgUpgradeClient": {
        aminoType: string;
        toAmino: (message: import("./core/client/v1/tx").MsgUpgradeClient) => import("./core/client/v1/tx").MsgUpgradeClientAmino;
        fromAmino: (object: import("./core/client/v1/tx").MsgUpgradeClientAmino) => import("./core/client/v1/tx").MsgUpgradeClient;
    };
    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
        aminoType: string;
        toAmino: (message: import("./core/client/v1/tx").MsgSubmitMisbehaviour) => import("./core/client/v1/tx").MsgSubmitMisbehaviourAmino;
        fromAmino: (object: import("./core/client/v1/tx").MsgSubmitMisbehaviourAmino) => import("./core/client/v1/tx").MsgSubmitMisbehaviour;
    };
    "/ibc.core.channel.v1.MsgChannelOpenInit": {
        aminoType: string;
        toAmino: (message: import("./core/channel/v1/tx").MsgChannelOpenInit) => import("./core/channel/v1/tx").MsgChannelOpenInitAmino;
        fromAmino: (object: import("./core/channel/v1/tx").MsgChannelOpenInitAmino) => import("./core/channel/v1/tx").MsgChannelOpenInit;
    };
    "/ibc.core.channel.v1.MsgChannelOpenTry": {
        aminoType: string;
        toAmino: (message: import("./core/channel/v1/tx").MsgChannelOpenTry) => import("./core/channel/v1/tx").MsgChannelOpenTryAmino;
        fromAmino: (object: import("./core/channel/v1/tx").MsgChannelOpenTryAmino) => import("./core/channel/v1/tx").MsgChannelOpenTry;
    };
    "/ibc.core.channel.v1.MsgChannelOpenAck": {
        aminoType: string;
        toAmino: (message: import("./core/channel/v1/tx").MsgChannelOpenAck) => import("./core/channel/v1/tx").MsgChannelOpenAckAmino;
        fromAmino: (object: import("./core/channel/v1/tx").MsgChannelOpenAckAmino) => import("./core/channel/v1/tx").MsgChannelOpenAck;
    };
    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
        aminoType: string;
        toAmino: (message: import("./core/channel/v1/tx").MsgChannelOpenConfirm) => import("./core/channel/v1/tx").MsgChannelOpenConfirmAmino;
        fromAmino: (object: import("./core/channel/v1/tx").MsgChannelOpenConfirmAmino) => import("./core/channel/v1/tx").MsgChannelOpenConfirm;
    };
    "/ibc.core.channel.v1.MsgChannelCloseInit": {
        aminoType: string;
        toAmino: (message: import("./core/channel/v1/tx").MsgChannelCloseInit) => import("./core/channel/v1/tx").MsgChannelCloseInitAmino;
        fromAmino: (object: import("./core/channel/v1/tx").MsgChannelCloseInitAmino) => import("./core/channel/v1/tx").MsgChannelCloseInit;
    };
    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
        aminoType: string;
        toAmino: (message: import("./core/channel/v1/tx").MsgChannelCloseConfirm) => import("./core/channel/v1/tx").MsgChannelCloseConfirmAmino;
        fromAmino: (object: import("./core/channel/v1/tx").MsgChannelCloseConfirmAmino) => import("./core/channel/v1/tx").MsgChannelCloseConfirm;
    };
    "/ibc.core.channel.v1.MsgRecvPacket": {
        aminoType: string;
        toAmino: (message: import("./core/channel/v1/tx").MsgRecvPacket) => import("./core/channel/v1/tx").MsgRecvPacketAmino;
        fromAmino: (object: import("./core/channel/v1/tx").MsgRecvPacketAmino) => import("./core/channel/v1/tx").MsgRecvPacket;
    };
    "/ibc.core.channel.v1.MsgTimeout": {
        aminoType: string;
        toAmino: (message: import("./core/channel/v1/tx").MsgTimeout) => import("./core/channel/v1/tx").MsgTimeoutAmino;
        fromAmino: (object: import("./core/channel/v1/tx").MsgTimeoutAmino) => import("./core/channel/v1/tx").MsgTimeout;
    };
    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
        aminoType: string;
        toAmino: (message: import("./core/channel/v1/tx").MsgTimeoutOnClose) => import("./core/channel/v1/tx").MsgTimeoutOnCloseAmino;
        fromAmino: (object: import("./core/channel/v1/tx").MsgTimeoutOnCloseAmino) => import("./core/channel/v1/tx").MsgTimeoutOnClose;
    };
    "/ibc.core.channel.v1.MsgAcknowledgement": {
        aminoType: string;
        toAmino: (message: import("./core/channel/v1/tx").MsgAcknowledgement) => import("./core/channel/v1/tx").MsgAcknowledgementAmino;
        fromAmino: (object: import("./core/channel/v1/tx").MsgAcknowledgementAmino) => import("./core/channel/v1/tx").MsgAcknowledgement;
    };
    "/ibc.applications.transfer.v1.MsgTransfer": {
        aminoType: string;
        toAmino: (message: import("./applications/transfer/v1/tx").MsgTransfer) => import("./applications/transfer/v1/tx").MsgTransferAmino;
        fromAmino: (object: import("./applications/transfer/v1/tx").MsgTransferAmino) => import("./applications/transfer/v1/tx").MsgTransfer;
    };
};
export declare const ibcProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningIbcClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningIbcClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
