import { MsgCreateStableswapPool, MsgStableSwapAdjustScalingFactors } from "./tx";
export declare const AminoConverter: {
    "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
        aminoType: string;
        toAmino: (message: MsgCreateStableswapPool) => import("./tx").MsgCreateStableswapPoolAmino;
        fromAmino: (object: import("./tx").MsgCreateStableswapPoolAmino) => MsgCreateStableswapPool;
    };
    "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
        aminoType: string;
        toAmino: (message: MsgStableSwapAdjustScalingFactors) => import("./tx").MsgStableSwapAdjustScalingFactorsAmino;
        fromAmino: (object: import("./tx").MsgStableSwapAdjustScalingFactorsAmino) => MsgStableSwapAdjustScalingFactors;
    };
};
