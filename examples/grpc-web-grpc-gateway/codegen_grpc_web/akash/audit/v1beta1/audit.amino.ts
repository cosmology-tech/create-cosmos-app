/* eslint-disable */
import { MsgSignProviderAttributes, MsgDeleteProviderAttributes } from "./audit";
export const AminoConverter = {
  "/akash.audit.v1beta1.MsgSignProviderAttributes": {
    aminoType: "/akash.audit.v1beta1.MsgSignProviderAttributes",
    toAmino: MsgSignProviderAttributes.toAmino,
    fromAmino: MsgSignProviderAttributes.fromAmino
  },
  "/akash.audit.v1beta1.MsgDeleteProviderAttributes": {
    aminoType: "/akash.audit.v1beta1.MsgDeleteProviderAttributes",
    toAmino: MsgDeleteProviderAttributes.toAmino,
    fromAmino: MsgDeleteProviderAttributes.fromAmino
  }
};