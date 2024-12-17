import { TokenPairArbRoutes, TokenPairArbRoutesSDKType, PoolWeights, PoolWeightsSDKType, BaseDenom, BaseDenomSDKType } from "./protorev";
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSetHotRoutes, MsgSetHotRoutesSDKType, MsgSetDeveloperAccount, MsgSetDeveloperAccountSDKType, MsgSetMaxPoolPointsPerTx, MsgSetMaxPoolPointsPerTxSDKType, MsgSetMaxPoolPointsPerBlock, MsgSetMaxPoolPointsPerBlockSDKType, MsgSetPoolWeights, MsgSetPoolWeightsSDKType, MsgSetBaseDenoms, MsgSetBaseDenomsSDKType } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/osmosis.protorev.v1beta1.MsgSetHotRoutes", MsgSetHotRoutes], ["/osmosis.protorev.v1beta1.MsgSetDeveloperAccount", MsgSetDeveloperAccount], ["/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx", MsgSetMaxPoolPointsPerTx], ["/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock", MsgSetMaxPoolPointsPerBlock], ["/osmosis.protorev.v1beta1.MsgSetPoolWeights", MsgSetPoolWeights], ["/osmosis.protorev.v1beta1.MsgSetBaseDenoms", MsgSetBaseDenoms]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    setHotRoutes(value: MsgSetHotRoutes) {
      return {
        typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutes",
        value: MsgSetHotRoutes.encode(value).finish()
      };
    },
    setDeveloperAccount(value: MsgSetDeveloperAccount) {
      return {
        typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount",
        value: MsgSetDeveloperAccount.encode(value).finish()
      };
    },
    setMaxPoolPointsPerTx(value: MsgSetMaxPoolPointsPerTx) {
      return {
        typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx",
        value: MsgSetMaxPoolPointsPerTx.encode(value).finish()
      };
    },
    setMaxPoolPointsPerBlock(value: MsgSetMaxPoolPointsPerBlock) {
      return {
        typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock",
        value: MsgSetMaxPoolPointsPerBlock.encode(value).finish()
      };
    },
    setPoolWeights(value: MsgSetPoolWeights) {
      return {
        typeUrl: "/osmosis.protorev.v1beta1.MsgSetPoolWeights",
        value: MsgSetPoolWeights.encode(value).finish()
      };
    },
    setBaseDenoms(value: MsgSetBaseDenoms) {
      return {
        typeUrl: "/osmosis.protorev.v1beta1.MsgSetBaseDenoms",
        value: MsgSetBaseDenoms.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    setHotRoutes(value: MsgSetHotRoutes) {
      return {
        typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutes",
        value
      };
    },
    setDeveloperAccount(value: MsgSetDeveloperAccount) {
      return {
        typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount",
        value
      };
    },
    setMaxPoolPointsPerTx(value: MsgSetMaxPoolPointsPerTx) {
      return {
        typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx",
        value
      };
    },
    setMaxPoolPointsPerBlock(value: MsgSetMaxPoolPointsPerBlock) {
      return {
        typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock",
        value
      };
    },
    setPoolWeights(value: MsgSetPoolWeights) {
      return {
        typeUrl: "/osmosis.protorev.v1beta1.MsgSetPoolWeights",
        value
      };
    },
    setBaseDenoms(value: MsgSetBaseDenoms) {
      return {
        typeUrl: "/osmosis.protorev.v1beta1.MsgSetBaseDenoms",
        value
      };
    }
  },
  toJSON: {
    setHotRoutes(value: MsgSetHotRoutes) {
      return {
        typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutes",
        value: MsgSetHotRoutes.toJSON(value)
      };
    },
    setDeveloperAccount(value: MsgSetDeveloperAccount) {
      return {
        typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount",
        value: MsgSetDeveloperAccount.toJSON(value)
      };
    },
    setMaxPoolPointsPerTx(value: MsgSetMaxPoolPointsPerTx) {
      return {
        typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx",
        value: MsgSetMaxPoolPointsPerTx.toJSON(value)
      };
    },
    setMaxPoolPointsPerBlock(value: MsgSetMaxPoolPointsPerBlock) {
      return {
        typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock",
        value: MsgSetMaxPoolPointsPerBlock.toJSON(value)
      };
    },
    setPoolWeights(value: MsgSetPoolWeights) {
      return {
        typeUrl: "/osmosis.protorev.v1beta1.MsgSetPoolWeights",
        value: MsgSetPoolWeights.toJSON(value)
      };
    },
    setBaseDenoms(value: MsgSetBaseDenoms) {
      return {
        typeUrl: "/osmosis.protorev.v1beta1.MsgSetBaseDenoms",
        value: MsgSetBaseDenoms.toJSON(value)
      };
    }
  },
  fromJSON: {
    setHotRoutes(value: any) {
      return {
        typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutes",
        value: MsgSetHotRoutes.fromJSON(value)
      };
    },
    setDeveloperAccount(value: any) {
      return {
        typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount",
        value: MsgSetDeveloperAccount.fromJSON(value)
      };
    },
    setMaxPoolPointsPerTx(value: any) {
      return {
        typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx",
        value: MsgSetMaxPoolPointsPerTx.fromJSON(value)
      };
    },
    setMaxPoolPointsPerBlock(value: any) {
      return {
        typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock",
        value: MsgSetMaxPoolPointsPerBlock.fromJSON(value)
      };
    },
    setPoolWeights(value: any) {
      return {
        typeUrl: "/osmosis.protorev.v1beta1.MsgSetPoolWeights",
        value: MsgSetPoolWeights.fromJSON(value)
      };
    },
    setBaseDenoms(value: any) {
      return {
        typeUrl: "/osmosis.protorev.v1beta1.MsgSetBaseDenoms",
        value: MsgSetBaseDenoms.fromJSON(value)
      };
    }
  },
  fromPartial: {
    setHotRoutes(value: MsgSetHotRoutes) {
      return {
        typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutes",
        value: MsgSetHotRoutes.fromPartial(value)
      };
    },
    setDeveloperAccount(value: MsgSetDeveloperAccount) {
      return {
        typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount",
        value: MsgSetDeveloperAccount.fromPartial(value)
      };
    },
    setMaxPoolPointsPerTx(value: MsgSetMaxPoolPointsPerTx) {
      return {
        typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx",
        value: MsgSetMaxPoolPointsPerTx.fromPartial(value)
      };
    },
    setMaxPoolPointsPerBlock(value: MsgSetMaxPoolPointsPerBlock) {
      return {
        typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock",
        value: MsgSetMaxPoolPointsPerBlock.fromPartial(value)
      };
    },
    setPoolWeights(value: MsgSetPoolWeights) {
      return {
        typeUrl: "/osmosis.protorev.v1beta1.MsgSetPoolWeights",
        value: MsgSetPoolWeights.fromPartial(value)
      };
    },
    setBaseDenoms(value: MsgSetBaseDenoms) {
      return {
        typeUrl: "/osmosis.protorev.v1beta1.MsgSetBaseDenoms",
        value: MsgSetBaseDenoms.fromPartial(value)
      };
    }
  }
};