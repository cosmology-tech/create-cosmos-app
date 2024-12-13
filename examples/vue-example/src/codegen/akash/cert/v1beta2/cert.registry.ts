import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateCertificate, MsgCreateCertificateSDKType, MsgRevokeCertificate, MsgRevokeCertificateSDKType } from "./cert";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/akash.cert.v1beta2.MsgCreateCertificate", MsgCreateCertificate], ["/akash.cert.v1beta2.MsgRevokeCertificate", MsgRevokeCertificate]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createCertificate(value: MsgCreateCertificate) {
      return {
        typeUrl: "/akash.cert.v1beta2.MsgCreateCertificate",
        value: MsgCreateCertificate.encode(value).finish()
      };
    },
    revokeCertificate(value: MsgRevokeCertificate) {
      return {
        typeUrl: "/akash.cert.v1beta2.MsgRevokeCertificate",
        value: MsgRevokeCertificate.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createCertificate(value: MsgCreateCertificate) {
      return {
        typeUrl: "/akash.cert.v1beta2.MsgCreateCertificate",
        value
      };
    },
    revokeCertificate(value: MsgRevokeCertificate) {
      return {
        typeUrl: "/akash.cert.v1beta2.MsgRevokeCertificate",
        value
      };
    }
  },
  toJSON: {
    createCertificate(value: MsgCreateCertificate) {
      return {
        typeUrl: "/akash.cert.v1beta2.MsgCreateCertificate",
        value: MsgCreateCertificate.toJSON(value)
      };
    },
    revokeCertificate(value: MsgRevokeCertificate) {
      return {
        typeUrl: "/akash.cert.v1beta2.MsgRevokeCertificate",
        value: MsgRevokeCertificate.toJSON(value)
      };
    }
  },
  fromJSON: {
    createCertificate(value: any) {
      return {
        typeUrl: "/akash.cert.v1beta2.MsgCreateCertificate",
        value: MsgCreateCertificate.fromJSON(value)
      };
    },
    revokeCertificate(value: any) {
      return {
        typeUrl: "/akash.cert.v1beta2.MsgRevokeCertificate",
        value: MsgRevokeCertificate.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createCertificate(value: MsgCreateCertificate) {
      return {
        typeUrl: "/akash.cert.v1beta2.MsgCreateCertificate",
        value: MsgCreateCertificate.fromPartial(value)
      };
    },
    revokeCertificate(value: MsgRevokeCertificate) {
      return {
        typeUrl: "/akash.cert.v1beta2.MsgRevokeCertificate",
        value: MsgRevokeCertificate.fromPartial(value)
      };
    }
  }
};