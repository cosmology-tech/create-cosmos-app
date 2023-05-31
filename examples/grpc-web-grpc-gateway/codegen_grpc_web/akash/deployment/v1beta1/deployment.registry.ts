import { MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "./group";
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "./deployment";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/akash.deployment.v1beta1.MsgCreateDeployment", MsgCreateDeployment], ["/akash.deployment.v1beta1.MsgDepositDeployment", MsgDepositDeployment], ["/akash.deployment.v1beta1.MsgUpdateDeployment", MsgUpdateDeployment], ["/akash.deployment.v1beta1.MsgCloseDeployment", MsgCloseDeployment], ["/akash.deployment.v1beta1.MsgCloseGroup", MsgCloseGroup], ["/akash.deployment.v1beta1.MsgPauseGroup", MsgPauseGroup], ["/akash.deployment.v1beta1.MsgStartGroup", MsgStartGroup]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createDeployment(value: MsgCreateDeployment) {
      return {
        typeUrl: "/akash.deployment.v1beta1.MsgCreateDeployment",
        value: MsgCreateDeployment.encode(value).finish()
      };
    },
    depositDeployment(value: MsgDepositDeployment) {
      return {
        typeUrl: "/akash.deployment.v1beta1.MsgDepositDeployment",
        value: MsgDepositDeployment.encode(value).finish()
      };
    },
    updateDeployment(value: MsgUpdateDeployment) {
      return {
        typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeployment",
        value: MsgUpdateDeployment.encode(value).finish()
      };
    },
    closeDeployment(value: MsgCloseDeployment) {
      return {
        typeUrl: "/akash.deployment.v1beta1.MsgCloseDeployment",
        value: MsgCloseDeployment.encode(value).finish()
      };
    },
    closeGroup(value: MsgCloseGroup) {
      return {
        typeUrl: "/akash.deployment.v1beta1.MsgCloseGroup",
        value: MsgCloseGroup.encode(value).finish()
      };
    },
    pauseGroup(value: MsgPauseGroup) {
      return {
        typeUrl: "/akash.deployment.v1beta1.MsgPauseGroup",
        value: MsgPauseGroup.encode(value).finish()
      };
    },
    startGroup(value: MsgStartGroup) {
      return {
        typeUrl: "/akash.deployment.v1beta1.MsgStartGroup",
        value: MsgStartGroup.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createDeployment(value: MsgCreateDeployment) {
      return {
        typeUrl: "/akash.deployment.v1beta1.MsgCreateDeployment",
        value
      };
    },
    depositDeployment(value: MsgDepositDeployment) {
      return {
        typeUrl: "/akash.deployment.v1beta1.MsgDepositDeployment",
        value
      };
    },
    updateDeployment(value: MsgUpdateDeployment) {
      return {
        typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeployment",
        value
      };
    },
    closeDeployment(value: MsgCloseDeployment) {
      return {
        typeUrl: "/akash.deployment.v1beta1.MsgCloseDeployment",
        value
      };
    },
    closeGroup(value: MsgCloseGroup) {
      return {
        typeUrl: "/akash.deployment.v1beta1.MsgCloseGroup",
        value
      };
    },
    pauseGroup(value: MsgPauseGroup) {
      return {
        typeUrl: "/akash.deployment.v1beta1.MsgPauseGroup",
        value
      };
    },
    startGroup(value: MsgStartGroup) {
      return {
        typeUrl: "/akash.deployment.v1beta1.MsgStartGroup",
        value
      };
    }
  },
  toJSON: {
    createDeployment(value: MsgCreateDeployment) {
      return {
        typeUrl: "/akash.deployment.v1beta1.MsgCreateDeployment",
        value: MsgCreateDeployment.toJSON(value)
      };
    },
    depositDeployment(value: MsgDepositDeployment) {
      return {
        typeUrl: "/akash.deployment.v1beta1.MsgDepositDeployment",
        value: MsgDepositDeployment.toJSON(value)
      };
    },
    updateDeployment(value: MsgUpdateDeployment) {
      return {
        typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeployment",
        value: MsgUpdateDeployment.toJSON(value)
      };
    },
    closeDeployment(value: MsgCloseDeployment) {
      return {
        typeUrl: "/akash.deployment.v1beta1.MsgCloseDeployment",
        value: MsgCloseDeployment.toJSON(value)
      };
    },
    closeGroup(value: MsgCloseGroup) {
      return {
        typeUrl: "/akash.deployment.v1beta1.MsgCloseGroup",
        value: MsgCloseGroup.toJSON(value)
      };
    },
    pauseGroup(value: MsgPauseGroup) {
      return {
        typeUrl: "/akash.deployment.v1beta1.MsgPauseGroup",
        value: MsgPauseGroup.toJSON(value)
      };
    },
    startGroup(value: MsgStartGroup) {
      return {
        typeUrl: "/akash.deployment.v1beta1.MsgStartGroup",
        value: MsgStartGroup.toJSON(value)
      };
    }
  },
  fromJSON: {
    createDeployment(value: any) {
      return {
        typeUrl: "/akash.deployment.v1beta1.MsgCreateDeployment",
        value: MsgCreateDeployment.fromJSON(value)
      };
    },
    depositDeployment(value: any) {
      return {
        typeUrl: "/akash.deployment.v1beta1.MsgDepositDeployment",
        value: MsgDepositDeployment.fromJSON(value)
      };
    },
    updateDeployment(value: any) {
      return {
        typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeployment",
        value: MsgUpdateDeployment.fromJSON(value)
      };
    },
    closeDeployment(value: any) {
      return {
        typeUrl: "/akash.deployment.v1beta1.MsgCloseDeployment",
        value: MsgCloseDeployment.fromJSON(value)
      };
    },
    closeGroup(value: any) {
      return {
        typeUrl: "/akash.deployment.v1beta1.MsgCloseGroup",
        value: MsgCloseGroup.fromJSON(value)
      };
    },
    pauseGroup(value: any) {
      return {
        typeUrl: "/akash.deployment.v1beta1.MsgPauseGroup",
        value: MsgPauseGroup.fromJSON(value)
      };
    },
    startGroup(value: any) {
      return {
        typeUrl: "/akash.deployment.v1beta1.MsgStartGroup",
        value: MsgStartGroup.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createDeployment(value: MsgCreateDeployment) {
      return {
        typeUrl: "/akash.deployment.v1beta1.MsgCreateDeployment",
        value: MsgCreateDeployment.fromPartial(value)
      };
    },
    depositDeployment(value: MsgDepositDeployment) {
      return {
        typeUrl: "/akash.deployment.v1beta1.MsgDepositDeployment",
        value: MsgDepositDeployment.fromPartial(value)
      };
    },
    updateDeployment(value: MsgUpdateDeployment) {
      return {
        typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeployment",
        value: MsgUpdateDeployment.fromPartial(value)
      };
    },
    closeDeployment(value: MsgCloseDeployment) {
      return {
        typeUrl: "/akash.deployment.v1beta1.MsgCloseDeployment",
        value: MsgCloseDeployment.fromPartial(value)
      };
    },
    closeGroup(value: MsgCloseGroup) {
      return {
        typeUrl: "/akash.deployment.v1beta1.MsgCloseGroup",
        value: MsgCloseGroup.fromPartial(value)
      };
    },
    pauseGroup(value: MsgPauseGroup) {
      return {
        typeUrl: "/akash.deployment.v1beta1.MsgPauseGroup",
        value: MsgPauseGroup.fromPartial(value)
      };
    },
    startGroup(value: MsgStartGroup) {
      return {
        typeUrl: "/akash.deployment.v1beta1.MsgStartGroup",
        value: MsgStartGroup.fromPartial(value)
      };
    }
  }
};