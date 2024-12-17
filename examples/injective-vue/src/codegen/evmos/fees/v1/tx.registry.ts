import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterDevFeeInfo, MsgRegisterDevFeeInfoSDKType, MsgCancelDevFeeInfo, MsgCancelDevFeeInfoSDKType, MsgUpdateDevFeeInfo, MsgUpdateDevFeeInfoSDKType } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/evmos.fees.v1.MsgRegisterDevFeeInfo", MsgRegisterDevFeeInfo], ["/evmos.fees.v1.MsgCancelDevFeeInfo", MsgCancelDevFeeInfo], ["/evmos.fees.v1.MsgUpdateDevFeeInfo", MsgUpdateDevFeeInfo]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerDevFeeInfo(value: MsgRegisterDevFeeInfo) {
      return {
        typeUrl: "/evmos.fees.v1.MsgRegisterDevFeeInfo",
        value: MsgRegisterDevFeeInfo.encode(value).finish()
      };
    },
    cancelDevFeeInfo(value: MsgCancelDevFeeInfo) {
      return {
        typeUrl: "/evmos.fees.v1.MsgCancelDevFeeInfo",
        value: MsgCancelDevFeeInfo.encode(value).finish()
      };
    },
    updateDevFeeInfo(value: MsgUpdateDevFeeInfo) {
      return {
        typeUrl: "/evmos.fees.v1.MsgUpdateDevFeeInfo",
        value: MsgUpdateDevFeeInfo.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerDevFeeInfo(value: MsgRegisterDevFeeInfo) {
      return {
        typeUrl: "/evmos.fees.v1.MsgRegisterDevFeeInfo",
        value
      };
    },
    cancelDevFeeInfo(value: MsgCancelDevFeeInfo) {
      return {
        typeUrl: "/evmos.fees.v1.MsgCancelDevFeeInfo",
        value
      };
    },
    updateDevFeeInfo(value: MsgUpdateDevFeeInfo) {
      return {
        typeUrl: "/evmos.fees.v1.MsgUpdateDevFeeInfo",
        value
      };
    }
  },
  toJSON: {
    registerDevFeeInfo(value: MsgRegisterDevFeeInfo) {
      return {
        typeUrl: "/evmos.fees.v1.MsgRegisterDevFeeInfo",
        value: MsgRegisterDevFeeInfo.toJSON(value)
      };
    },
    cancelDevFeeInfo(value: MsgCancelDevFeeInfo) {
      return {
        typeUrl: "/evmos.fees.v1.MsgCancelDevFeeInfo",
        value: MsgCancelDevFeeInfo.toJSON(value)
      };
    },
    updateDevFeeInfo(value: MsgUpdateDevFeeInfo) {
      return {
        typeUrl: "/evmos.fees.v1.MsgUpdateDevFeeInfo",
        value: MsgUpdateDevFeeInfo.toJSON(value)
      };
    }
  },
  fromJSON: {
    registerDevFeeInfo(value: any) {
      return {
        typeUrl: "/evmos.fees.v1.MsgRegisterDevFeeInfo",
        value: MsgRegisterDevFeeInfo.fromJSON(value)
      };
    },
    cancelDevFeeInfo(value: any) {
      return {
        typeUrl: "/evmos.fees.v1.MsgCancelDevFeeInfo",
        value: MsgCancelDevFeeInfo.fromJSON(value)
      };
    },
    updateDevFeeInfo(value: any) {
      return {
        typeUrl: "/evmos.fees.v1.MsgUpdateDevFeeInfo",
        value: MsgUpdateDevFeeInfo.fromJSON(value)
      };
    }
  },
  fromPartial: {
    registerDevFeeInfo(value: MsgRegisterDevFeeInfo) {
      return {
        typeUrl: "/evmos.fees.v1.MsgRegisterDevFeeInfo",
        value: MsgRegisterDevFeeInfo.fromPartial(value)
      };
    },
    cancelDevFeeInfo(value: MsgCancelDevFeeInfo) {
      return {
        typeUrl: "/evmos.fees.v1.MsgCancelDevFeeInfo",
        value: MsgCancelDevFeeInfo.fromPartial(value)
      };
    },
    updateDevFeeInfo(value: MsgUpdateDevFeeInfo) {
      return {
        typeUrl: "/evmos.fees.v1.MsgUpdateDevFeeInfo",
        value: MsgUpdateDevFeeInfo.fromPartial(value)
      };
    }
  }
};