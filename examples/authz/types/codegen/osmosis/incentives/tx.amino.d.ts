import { MsgCreateGauge, MsgAddToGauge } from "./tx";
export declare const AminoConverter: {
    "/osmosis.incentives.MsgCreateGauge": {
        aminoType: string;
        toAmino: (message: MsgCreateGauge) => import("./tx").MsgCreateGaugeAmino;
        fromAmino: (object: import("./tx").MsgCreateGaugeAmino) => MsgCreateGauge;
    };
    "/osmosis.incentives.MsgAddToGauge": {
        aminoType: string;
        toAmino: (message: MsgAddToGauge) => import("./tx").MsgAddToGaugeAmino;
        fromAmino: (object: import("./tx").MsgAddToGaugeAmino) => MsgAddToGauge;
    };
};
