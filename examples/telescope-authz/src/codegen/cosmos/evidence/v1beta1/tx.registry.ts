import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgSubmitEvidence, MsgSubmitEvidenceSDKType } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/cosmos.evidence.v1beta1.MsgSubmitEvidence", MsgSubmitEvidence]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    submitEvidence(value: MsgSubmitEvidence) {
      return {
        typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
        value: MsgSubmitEvidence.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    submitEvidence(value: MsgSubmitEvidence) {
      return {
        typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
        value
      };
    }
  },
  toJSON: {
    submitEvidence(value: MsgSubmitEvidence) {
      return {
        typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
        value: MsgSubmitEvidence.toJSON(value)
      };
    }
  },
  fromJSON: {
    submitEvidence(value: any) {
      return {
        typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
        value: MsgSubmitEvidence.fromJSON(value)
      };
    }
  },
  fromPartial: {
    submitEvidence(value: MsgSubmitEvidence) {
      return {
        typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
        value: MsgSubmitEvidence.fromPartial(value)
      };
    }
  }
};