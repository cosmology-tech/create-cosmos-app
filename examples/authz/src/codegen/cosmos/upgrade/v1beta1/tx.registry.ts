import { Plan, PlanSDKType } from "./upgrade";
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgSoftwareUpgrade, MsgSoftwareUpgradeSDKType, MsgCancelUpgrade, MsgCancelUpgradeSDKType } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade", MsgSoftwareUpgrade], ["/cosmos.upgrade.v1beta1.MsgCancelUpgrade", MsgCancelUpgrade]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    softwareUpgrade(value: MsgSoftwareUpgrade) {
      return {
        typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
        value: MsgSoftwareUpgrade.encode(value).finish()
      };
    },
    cancelUpgrade(value: MsgCancelUpgrade) {
      return {
        typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
        value: MsgCancelUpgrade.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    softwareUpgrade(value: MsgSoftwareUpgrade) {
      return {
        typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
        value
      };
    },
    cancelUpgrade(value: MsgCancelUpgrade) {
      return {
        typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
        value
      };
    }
  },
  toJSON: {
    softwareUpgrade(value: MsgSoftwareUpgrade) {
      return {
        typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
        value: MsgSoftwareUpgrade.toJSON(value)
      };
    },
    cancelUpgrade(value: MsgCancelUpgrade) {
      return {
        typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
        value: MsgCancelUpgrade.toJSON(value)
      };
    }
  },
  fromJSON: {
    softwareUpgrade(value: any) {
      return {
        typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
        value: MsgSoftwareUpgrade.fromJSON(value)
      };
    },
    cancelUpgrade(value: any) {
      return {
        typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
        value: MsgCancelUpgrade.fromJSON(value)
      };
    }
  },
  fromPartial: {
    softwareUpgrade(value: MsgSoftwareUpgrade) {
      return {
        typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
        value: MsgSoftwareUpgrade.fromPartial(value)
      };
    },
    cancelUpgrade(value: MsgCancelUpgrade) {
      return {
        typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
        value: MsgCancelUpgrade.fromPartial(value)
      };
    }
  }
};