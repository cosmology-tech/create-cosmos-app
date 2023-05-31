/* eslint-disable */
import { MsgCreateCertificate, MsgCreateCertificateSDKType, MsgRevokeCertificate, MsgRevokeCertificateSDKType } from "./cert";
export const AminoConverter = {
  "/akash.cert.v1beta2.MsgCreateCertificate": {
    aminoType: "/akash.cert.v1beta2.MsgCreateCertificate",
    toAmino: MsgCreateCertificate.toAmino,
    fromAmino: MsgCreateCertificate.fromAmino
  },
  "/akash.cert.v1beta2.MsgRevokeCertificate": {
    aminoType: "/akash.cert.v1beta2.MsgRevokeCertificate",
    toAmino: MsgRevokeCertificate.toAmino,
    fromAmino: MsgRevokeCertificate.fromAmino
  }
};