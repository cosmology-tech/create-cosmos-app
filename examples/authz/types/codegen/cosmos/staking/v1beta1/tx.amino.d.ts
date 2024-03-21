import { MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgUndelegate } from "./tx";
export declare const AminoConverter: {
    "/cosmos.staking.v1beta1.MsgCreateValidator": {
        aminoType: string;
        toAmino: (message: MsgCreateValidator) => import("./tx").MsgCreateValidatorAmino;
        fromAmino: (object: import("./tx").MsgCreateValidatorAmino) => MsgCreateValidator;
    };
    "/cosmos.staking.v1beta1.MsgEditValidator": {
        aminoType: string;
        toAmino: (message: MsgEditValidator) => import("./tx").MsgEditValidatorAmino;
        fromAmino: (object: import("./tx").MsgEditValidatorAmino) => MsgEditValidator;
    };
    "/cosmos.staking.v1beta1.MsgDelegate": {
        aminoType: string;
        toAmino: (message: MsgDelegate) => import("./tx").MsgDelegateAmino;
        fromAmino: (object: import("./tx").MsgDelegateAmino) => MsgDelegate;
    };
    "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
        aminoType: string;
        toAmino: (message: MsgBeginRedelegate) => import("./tx").MsgBeginRedelegateAmino;
        fromAmino: (object: import("./tx").MsgBeginRedelegateAmino) => MsgBeginRedelegate;
    };
    "/cosmos.staking.v1beta1.MsgUndelegate": {
        aminoType: string;
        toAmino: (message: MsgUndelegate) => import("./tx").MsgUndelegateAmino;
        fromAmino: (object: import("./tx").MsgUndelegateAmino) => MsgUndelegate;
    };
};
