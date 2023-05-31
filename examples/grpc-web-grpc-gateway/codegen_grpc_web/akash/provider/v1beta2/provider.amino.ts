/* eslint-disable */
import { MsgCreateProvider, MsgUpdateProvider, MsgDeleteProvider } from "./provider";
export const AminoConverter = {
  "/akash.provider.v1beta2.MsgCreateProvider": {
    aminoType: "/akash.provider.v1beta2.MsgCreateProvider",
    toAmino: MsgCreateProvider.toAmino,
    fromAmino: MsgCreateProvider.fromAmino
  },
  "/akash.provider.v1beta2.MsgUpdateProvider": {
    aminoType: "/akash.provider.v1beta2.MsgUpdateProvider",
    toAmino: MsgUpdateProvider.toAmino,
    fromAmino: MsgUpdateProvider.fromAmino
  },
  "/akash.provider.v1beta2.MsgDeleteProvider": {
    aminoType: "/akash.provider.v1beta2.MsgDeleteProvider",
    toAmino: MsgDeleteProvider.toAmino,
    fromAmino: MsgDeleteProvider.fromAmino
  }
};