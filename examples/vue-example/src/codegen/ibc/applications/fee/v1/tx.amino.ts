import { Fee, FeeSDKType, PacketFee, PacketFeeSDKType } from "./fee";
import { AminoMsg } from "@cosmjs/amino";
import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { MsgRegisterPayee, MsgRegisterPayeeSDKType, MsgRegisterCounterpartyPayee, MsgRegisterCounterpartyPayeeSDKType, MsgPayPacketFee, MsgPayPacketFeeSDKType, MsgPayPacketFeeAsync, MsgPayPacketFeeAsyncSDKType } from "./tx";
export interface MsgRegisterPayeeAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgRegisterPayee";
  value: {
    port_id: string;
    channel_id: string;
    relayer: string;
    payee: string;
  };
}
export interface MsgRegisterCounterpartyPayeeAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgRegisterCounterpartyPayee";
  value: {
    port_id: string;
    channel_id: string;
    relayer: string;
    counterparty_payee: string;
  };
}
export interface MsgPayPacketFeeAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgPayPacketFee";
  value: {
    fee: {
      recv_fee: {
        denom: string;
        amount: string;
      }[];
      ack_fee: {
        denom: string;
        amount: string;
      }[];
      timeout_fee: {
        denom: string;
        amount: string;
      }[];
    };
    source_port_id: string;
    source_channel_id: string;
    signer: string;
    relayers: string[];
  };
}
export interface MsgPayPacketFeeAsyncAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgPayPacketFeeAsync";
  value: {
    packet_fee: {
      fee: {
        recv_fee: {
          denom: string;
          amount: string;
        }[];
        ack_fee: {
          denom: string;
          amount: string;
        }[];
        timeout_fee: {
          denom: string;
          amount: string;
        }[];
      };
      refund_address: string;
      relayers: string[];
    };
  };
}
export const AminoConverter = {
  "/ibc.applications.fee.v1.MsgRegisterPayee": {
    aminoType: "cosmos-sdk/MsgRegisterPayee",
    toAmino: ({
      portId,
      channelId,
      relayer,
      payee
    }: MsgRegisterPayee): MsgRegisterPayeeAminoType["value"] => {
      return {
        port_id: portId,
        channel_id: channelId,
        relayer,
        payee
      };
    },
    fromAmino: ({
      port_id,
      channel_id,
      relayer,
      payee
    }: MsgRegisterPayeeAminoType["value"]): MsgRegisterPayee => {
      return {
        portId: port_id,
        channelId: channel_id,
        relayer,
        payee
      };
    }
  },
  "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee": {
    aminoType: "cosmos-sdk/MsgRegisterCounterpartyPayee",
    toAmino: ({
      portId,
      channelId,
      relayer,
      counterpartyPayee
    }: MsgRegisterCounterpartyPayee): MsgRegisterCounterpartyPayeeAminoType["value"] => {
      return {
        port_id: portId,
        channel_id: channelId,
        relayer,
        counterparty_payee: counterpartyPayee
      };
    },
    fromAmino: ({
      port_id,
      channel_id,
      relayer,
      counterparty_payee
    }: MsgRegisterCounterpartyPayeeAminoType["value"]): MsgRegisterCounterpartyPayee => {
      return {
        portId: port_id,
        channelId: channel_id,
        relayer,
        counterpartyPayee: counterparty_payee
      };
    }
  },
  "/ibc.applications.fee.v1.MsgPayPacketFee": {
    aminoType: "cosmos-sdk/MsgPayPacketFee",
    toAmino: ({
      fee,
      sourcePortId,
      sourceChannelId,
      signer,
      relayers
    }: MsgPayPacketFee): MsgPayPacketFeeAminoType["value"] => {
      return {
        fee: {
          recv_fee: fee.recvFee.map(el0 => ({
            denom: el0.denom,
            amount: el0.amount
          })),
          ack_fee: fee.ackFee.map(el0 => ({
            denom: el0.denom,
            amount: el0.amount
          })),
          timeout_fee: fee.timeoutFee.map(el0 => ({
            denom: el0.denom,
            amount: el0.amount
          }))
        },
        source_port_id: sourcePortId,
        source_channel_id: sourceChannelId,
        signer,
        relayers
      };
    },
    fromAmino: ({
      fee,
      source_port_id,
      source_channel_id,
      signer,
      relayers
    }: MsgPayPacketFeeAminoType["value"]): MsgPayPacketFee => {
      return {
        fee: {
          recvFee: fee.recv_fee.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          })),
          ackFee: fee.ack_fee.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          })),
          timeoutFee: fee.timeout_fee.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        },
        sourcePortId: source_port_id,
        sourceChannelId: source_channel_id,
        signer,
        relayers
      };
    }
  },
  "/ibc.applications.fee.v1.MsgPayPacketFeeAsync": {
    aminoType: "cosmos-sdk/MsgPayPacketFeeAsync",
    toAmino: ({
      packetFee
    }: MsgPayPacketFeeAsync): MsgPayPacketFeeAsyncAminoType["value"] => {
      return {
        packet_fee: {
          fee: {
            recv_fee: packetFee.fee.recvFee.map(el0 => ({
              denom: el0.denom,
              amount: el0.amount
            })),
            ack_fee: packetFee.fee.ackFee.map(el0 => ({
              denom: el0.denom,
              amount: el0.amount
            })),
            timeout_fee: packetFee.fee.timeoutFee.map(el0 => ({
              denom: el0.denom,
              amount: el0.amount
            }))
          },
          refund_address: packetFee.refundAddress,
          relayers: packetFee.relayers
        }
      };
    },
    fromAmino: ({
      packet_fee
    }: MsgPayPacketFeeAsyncAminoType["value"]): MsgPayPacketFeeAsync => {
      return {
        packetFee: {
          fee: {
            recvFee: packet_fee.fee.recv_fee.map(el2 => ({
              denom: el2.denom,
              amount: el2.amount
            })),
            ackFee: packet_fee.fee.ack_fee.map(el2 => ({
              denom: el2.denom,
              amount: el2.amount
            })),
            timeoutFee: packet_fee.fee.timeout_fee.map(el2 => ({
              denom: el2.denom,
              amount: el2.amount
            }))
          },
          refundAddress: packet_fee.refund_address,
          relayers: packet_fee.relayers
        }
      };
    }
  }
};