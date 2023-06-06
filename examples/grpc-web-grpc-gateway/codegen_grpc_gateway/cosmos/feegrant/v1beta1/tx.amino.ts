import { AminoMsg } from "@cosmjs/amino";
import { MsgGrantAllowance, MsgRevokeAllowance } from "./tx";
export interface MsgGrantAllowanceAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgGrantAllowance";
  value: {
    granter: string;
    grantee: string;
    allowance: {
      type_url: string;
      value: Uint8Array;
    };
  };
}
export interface MsgRevokeAllowanceAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgRevokeAllowance";
  value: {
    granter: string;
    grantee: string;
  };
}
export const AminoConverter = {
  "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
    aminoType: "cosmos-sdk/MsgGrantAllowance",
    toAmino: ({
      granter,
      grantee,
      allowance
    }: MsgGrantAllowance): MsgGrantAllowanceAminoType["value"] => {
      return {
        granter,
        grantee,
        allowance: {
          type_url: allowance.typeUrl,
          value: allowance.value
        }
      };
    },
    fromAmino: ({
      granter,
      grantee,
      allowance
    }: MsgGrantAllowanceAminoType["value"]): MsgGrantAllowance => {
      return {
        granter,
        grantee,
        allowance: {
          typeUrl: allowance.type_url,
          value: allowance.value
        }
      };
    }
  },
  "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
    aminoType: "cosmos-sdk/MsgRevokeAllowance",
    toAmino: ({
      granter,
      grantee
    }: MsgRevokeAllowance): MsgRevokeAllowanceAminoType["value"] => {
      return {
        granter,
        grantee
      };
    },
    fromAmino: ({
      granter,
      grantee
    }: MsgRevokeAllowanceAminoType["value"]): MsgRevokeAllowance => {
      return {
        granter,
        grantee
      };
    }
  }
};