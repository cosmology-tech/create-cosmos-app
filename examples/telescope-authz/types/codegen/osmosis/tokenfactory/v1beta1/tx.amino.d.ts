import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata } from "./tx";
export declare const AminoConverter: {
    "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
        aminoType: string;
        toAmino: (message: MsgCreateDenom) => import("./tx").MsgCreateDenomAmino;
        fromAmino: (object: import("./tx").MsgCreateDenomAmino) => MsgCreateDenom;
    };
    "/osmosis.tokenfactory.v1beta1.MsgMint": {
        aminoType: string;
        toAmino: (message: MsgMint) => import("./tx").MsgMintAmino;
        fromAmino: (object: import("./tx").MsgMintAmino) => MsgMint;
    };
    "/osmosis.tokenfactory.v1beta1.MsgBurn": {
        aminoType: string;
        toAmino: (message: MsgBurn) => import("./tx").MsgBurnAmino;
        fromAmino: (object: import("./tx").MsgBurnAmino) => MsgBurn;
    };
    "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
        aminoType: string;
        toAmino: (message: MsgChangeAdmin) => import("./tx").MsgChangeAdminAmino;
        fromAmino: (object: import("./tx").MsgChangeAdminAmino) => MsgChangeAdmin;
    };
    "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
        aminoType: string;
        toAmino: (message: MsgSetDenomMetadata) => import("./tx").MsgSetDenomMetadataAmino;
        fromAmino: (object: import("./tx").MsgSetDenomMetadataAmino) => MsgSetDenomMetadata;
    };
};
