//@ts-nocheck
import { PoolParams, PoolParamsSDKType, PoolAsset, PoolAssetSDKType } from "../balancerPool";
import { TelescopeGeneratedType } from "../../../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgCreateBalancerPool, MsgCreateBalancerPoolSDKType } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool", MsgCreateBalancerPool]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createBalancerPool(value: MsgCreateBalancerPool) {
      return {
        typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool",
        value: MsgCreateBalancerPool.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createBalancerPool(value: MsgCreateBalancerPool) {
      return {
        typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool",
        value
      };
    }
  },
  toJSON: {
    createBalancerPool(value: MsgCreateBalancerPool) {
      return {
        typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool",
        value: MsgCreateBalancerPool.toJSON(value)
      };
    }
  },
  fromJSON: {
    createBalancerPool(value: any) {
      return {
        typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool",
        value: MsgCreateBalancerPool.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createBalancerPool(value: MsgCreateBalancerPool) {
      return {
        typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool",
        value: MsgCreateBalancerPool.fromPartial(value)
      };
    }
  }
};