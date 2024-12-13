import { InterchainAccountPacketData, InterchainAccountPacketDataSDKType, typeFromJSON } from "../../v1/packet";
import { AminoMsg } from "@cosmjs/amino";
import { MsgRegisterInterchainAccount, MsgRegisterInterchainAccountSDKType, MsgSendTx, MsgSendTxSDKType } from "./tx";
export interface MsgRegisterInterchainAccountAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgRegisterInterchainAccount";
  value: {
    owner: string;
    connection_id: string;
    version: string;
  };
}
export interface MsgSendTxAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgSendTx";
  value: {
    owner: string;
    connection_id: string;
    packet_data: {
      type: number;
      data: Uint8Array;
      memo: string;
    };
    relative_timeout: string;
  };
}
export const AminoConverter = {
  "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount": {
    aminoType: "cosmos-sdk/MsgRegisterInterchainAccount",
    toAmino: ({
      owner,
      connectionId,
      version
    }: MsgRegisterInterchainAccount): MsgRegisterInterchainAccountAminoType["value"] => {
      return {
        owner,
        connection_id: connectionId,
        version
      };
    },
    fromAmino: ({
      owner,
      connection_id,
      version
    }: MsgRegisterInterchainAccountAminoType["value"]): MsgRegisterInterchainAccount => {
      return {
        owner,
        connectionId: connection_id,
        version
      };
    }
  },
  "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx": {
    aminoType: "cosmos-sdk/MsgSendTx",
    toAmino: ({
      owner,
      connectionId,
      packetData,
      relativeTimeout
    }: MsgSendTx): MsgSendTxAminoType["value"] => {
      return {
        owner,
        connection_id: connectionId,
        packet_data: {
          type: packetData.type,
          data: packetData.data,
          memo: packetData.memo
        },
        relative_timeout: relativeTimeout.toString()
      };
    },
    fromAmino: ({
      owner,
      connection_id,
      packet_data,
      relative_timeout
    }: MsgSendTxAminoType["value"]): MsgSendTx => {
      return {
        owner,
        connectionId: connection_id,
        packetData: {
          type: typeFromJSON(packet_data.type),
          data: packet_data.data,
          memo: packet_data.memo
        },
        relativeTimeout: BigInt(relative_timeout)
      };
    }
  }
};