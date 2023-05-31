/* eslint-disable */
import { MsgCreateProvider, MsgUpdateProvider, MsgDeleteProvider } from "./provider";
export const AminoConverter = {
  "/akash.provider.v1beta1.MsgCreateProvider": {
    aminoType: "/akash.provider.v1beta1.MsgCreateProvider",
    toAmino: MsgCreateProvider.toAmino,
    fromAmino: MsgCreateProvider.fromAmino
  },
  "/akash.provider.v1beta1.MsgUpdateProvider": {
    aminoType: "/akash.provider.v1beta1.MsgUpdateProvider",
    toAmino: MsgUpdateProvider.toAmino,
    fromAmino: MsgUpdateProvider.fromAmino
  },
  "/akash.provider.v1beta1.MsgDeleteProvider": {
    aminoType: "/akash.provider.v1beta1.MsgDeleteProvider",
    toAmino: MsgDeleteProvider.toAmino,
    fromAmino: MsgDeleteProvider.fromAmino
  }
};