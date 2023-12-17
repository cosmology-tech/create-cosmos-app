import { MsgJoinPool, MsgExitPool, MsgSwapExactAmountIn, MsgSwapExactAmountOut, MsgJoinSwapExternAmountIn, MsgJoinSwapShareAmountOut, MsgExitSwapExternAmountOut, MsgExitSwapShareAmountIn } from "./tx";
export declare const AminoConverter: {
    "/osmosis.gamm.v1beta1.MsgJoinPool": {
        aminoType: string;
        toAmino: (message: MsgJoinPool) => import("./tx").MsgJoinPoolAmino;
        fromAmino: (object: import("./tx").MsgJoinPoolAmino) => MsgJoinPool;
    };
    "/osmosis.gamm.v1beta1.MsgExitPool": {
        aminoType: string;
        toAmino: (message: MsgExitPool) => import("./tx").MsgExitPoolAmino;
        fromAmino: (object: import("./tx").MsgExitPoolAmino) => MsgExitPool;
    };
    "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
        aminoType: string;
        toAmino: (message: MsgSwapExactAmountIn) => import("./tx").MsgSwapExactAmountInAmino;
        fromAmino: (object: import("./tx").MsgSwapExactAmountInAmino) => MsgSwapExactAmountIn;
    };
    "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
        aminoType: string;
        toAmino: (message: MsgSwapExactAmountOut) => import("./tx").MsgSwapExactAmountOutAmino;
        fromAmino: (object: import("./tx").MsgSwapExactAmountOutAmino) => MsgSwapExactAmountOut;
    };
    "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
        aminoType: string;
        toAmino: (message: MsgJoinSwapExternAmountIn) => import("./tx").MsgJoinSwapExternAmountInAmino;
        fromAmino: (object: import("./tx").MsgJoinSwapExternAmountInAmino) => MsgJoinSwapExternAmountIn;
    };
    "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
        aminoType: string;
        toAmino: (message: MsgJoinSwapShareAmountOut) => import("./tx").MsgJoinSwapShareAmountOutAmino;
        fromAmino: (object: import("./tx").MsgJoinSwapShareAmountOutAmino) => MsgJoinSwapShareAmountOut;
    };
    "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
        aminoType: string;
        toAmino: (message: MsgExitSwapExternAmountOut) => import("./tx").MsgExitSwapExternAmountOutAmino;
        fromAmino: (object: import("./tx").MsgExitSwapExternAmountOutAmino) => MsgExitSwapExternAmountOut;
    };
    "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
        aminoType: string;
        toAmino: (message: MsgExitSwapShareAmountIn) => import("./tx").MsgExitSwapShareAmountInAmino;
        fromAmino: (object: import("./tx").MsgExitSwapShareAmountInAmino) => MsgExitSwapShareAmountIn;
    };
};
