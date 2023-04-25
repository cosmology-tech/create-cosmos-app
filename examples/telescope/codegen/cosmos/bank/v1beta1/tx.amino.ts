import { AminoMsg } from "@cosmjs/amino";
import { MsgSend, MsgMultiSend } from "./tx";
export interface MsgSendAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgSend";
  value: {
    from_address: string;
    to_address: string;
    amount: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface MsgMultiSendAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgMultiSend";
  value: {
    inputs: {
      address: string;
      coins: {
        denom: string;
        amount: string;
      }[];
    }[];
    outputs: {
      address: string;
      coins: {
        denom: string;
        amount: string;
      }[];
    }[];
  };
}
export const AminoConverter = {
  "/cosmos.bank.v1beta1.MsgSend": {
    aminoType: "cosmos-sdk/MsgSend",
    toAmino: ({
      fromAddress,
      toAddress,
      amount
    }: MsgSend): MsgSendAminoType["value"] => {
      return {
        from_address: fromAddress,
        to_address: toAddress,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      from_address,
      to_address,
      amount
    }: MsgSendAminoType["value"]): MsgSend => {
      return {
        fromAddress: from_address,
        toAddress: to_address,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/cosmos.bank.v1beta1.MsgMultiSend": {
    aminoType: "cosmos-sdk/MsgMultiSend",
    toAmino: ({
      inputs,
      outputs
    }: MsgMultiSend): MsgMultiSendAminoType["value"] => {
      return {
        inputs: inputs.map(el0 => ({
          address: el0.address,
          coins: el0.coins.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        })),
        outputs: outputs.map(el0 => ({
          address: el0.address,
          coins: el0.coins.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        }))
      };
    },
    fromAmino: ({
      inputs,
      outputs
    }: MsgMultiSendAminoType["value"]): MsgMultiSend => {
      return {
        inputs: inputs.map(el0 => ({
          address: el0.address,
          coins: el0.coins.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        })),
        outputs: outputs.map(el0 => ({
          address: el0.address,
          coins: el0.coins.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        }))
      };
    }
  }
};