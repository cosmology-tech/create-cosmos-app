import { MsgRegisterDevFeeInfo, MsgRegisterDevFeeInfoSDKType, MsgCancelDevFeeInfo, MsgCancelDevFeeInfoSDKType, MsgUpdateDevFeeInfo, MsgUpdateDevFeeInfoSDKType } from "./tx";
export const AminoConverter = {
  "/evmos.fees.v1.MsgRegisterDevFeeInfo": {
    aminoType: "/evmos.fees.v1.MsgRegisterDevFeeInfo",
    toAmino: MsgRegisterDevFeeInfo.toAmino,
    fromAmino: MsgRegisterDevFeeInfo.fromAmino
  },
  "/evmos.fees.v1.MsgCancelDevFeeInfo": {
    aminoType: "/evmos.fees.v1.MsgCancelDevFeeInfo",
    toAmino: MsgCancelDevFeeInfo.toAmino,
    fromAmino: MsgCancelDevFeeInfo.fromAmino
  },
  "/evmos.fees.v1.MsgUpdateDevFeeInfo": {
    aminoType: "/evmos.fees.v1.MsgUpdateDevFeeInfo",
    toAmino: MsgUpdateDevFeeInfo.toAmino,
    fromAmino: MsgUpdateDevFeeInfo.fromAmino
  }
};