import { MsgCreateBalancerPool } from "./tx";
export declare const AminoConverter: {
    "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
        aminoType: string;
        toAmino: (message: MsgCreateBalancerPool) => import("./tx").MsgCreateBalancerPoolAmino;
        fromAmino: (object: import("./tx").MsgCreateBalancerPoolAmino) => MsgCreateBalancerPool;
    };
};
