import { AminoMsg } from "@cosmjs/amino";
import { MsgRegisterDevFeeInfo, MsgRegisterDevFeeInfoSDKType, MsgCancelDevFeeInfo, MsgCancelDevFeeInfoSDKType, MsgUpdateDevFeeInfo, MsgUpdateDevFeeInfoSDKType } from "./tx";
export interface MsgRegisterDevFeeInfoAminoType extends AminoMsg {
  type: "/evmos.fees.v1.MsgRegisterDevFeeInfo";
  value: {
    contract_address: string;
    deployer_address: string;
    withdraw_address: string;
    nonces: string[];
  };
}
export interface MsgCancelDevFeeInfoAminoType extends AminoMsg {
  type: "/evmos.fees.v1.MsgCancelDevFeeInfo";
  value: {
    contract_address: string;
    deployer_address: string;
  };
}
export interface MsgUpdateDevFeeInfoAminoType extends AminoMsg {
  type: "/evmos.fees.v1.MsgUpdateDevFeeInfo";
  value: {
    contract_address: string;
    deployer_address: string;
    withdraw_address: string;
  };
}
export const AminoConverter = {
  "/evmos.fees.v1.MsgRegisterDevFeeInfo": {
    aminoType: "/evmos.fees.v1.MsgRegisterDevFeeInfo",
    toAmino: ({
      contractAddress,
      deployerAddress,
      withdrawAddress,
      nonces
    }: MsgRegisterDevFeeInfo): MsgRegisterDevFeeInfoAminoType["value"] => {
      return {
        contract_address: contractAddress,
        deployer_address: deployerAddress,
        withdraw_address: withdrawAddress,
        nonces: nonces.map(el0 => el0.toString())
      };
    },
    fromAmino: ({
      contract_address,
      deployer_address,
      withdraw_address,
      nonces
    }: MsgRegisterDevFeeInfoAminoType["value"]): MsgRegisterDevFeeInfo => {
      return {
        contractAddress: contract_address,
        deployerAddress: deployer_address,
        withdrawAddress: withdraw_address,
        nonces: nonces.map(el0 => BigInt(el0))
      };
    }
  },
  "/evmos.fees.v1.MsgCancelDevFeeInfo": {
    aminoType: "/evmos.fees.v1.MsgCancelDevFeeInfo",
    toAmino: ({
      contractAddress,
      deployerAddress
    }: MsgCancelDevFeeInfo): MsgCancelDevFeeInfoAminoType["value"] => {
      return {
        contract_address: contractAddress,
        deployer_address: deployerAddress
      };
    },
    fromAmino: ({
      contract_address,
      deployer_address
    }: MsgCancelDevFeeInfoAminoType["value"]): MsgCancelDevFeeInfo => {
      return {
        contractAddress: contract_address,
        deployerAddress: deployer_address
      };
    }
  },
  "/evmos.fees.v1.MsgUpdateDevFeeInfo": {
    aminoType: "/evmos.fees.v1.MsgUpdateDevFeeInfo",
    toAmino: ({
      contractAddress,
      deployerAddress,
      withdrawAddress
    }: MsgUpdateDevFeeInfo): MsgUpdateDevFeeInfoAminoType["value"] => {
      return {
        contract_address: contractAddress,
        deployer_address: deployerAddress,
        withdraw_address: withdrawAddress
      };
    },
    fromAmino: ({
      contract_address,
      deployer_address,
      withdraw_address
    }: MsgUpdateDevFeeInfoAminoType["value"]): MsgUpdateDevFeeInfo => {
      return {
        contractAddress: contract_address,
        deployerAddress: deployer_address,
        withdrawAddress: withdraw_address
      };
    }
  }
};