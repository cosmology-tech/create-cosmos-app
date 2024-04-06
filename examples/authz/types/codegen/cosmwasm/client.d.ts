import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const cosmwasmAminoConverters: {
    "/cosmwasm.wasm.v1.MsgStoreCode": {
        aminoType: string;
        toAmino: (message: import("./wasm/v1/tx").MsgStoreCode) => import("./wasm/v1/tx").MsgStoreCodeAmino;
        fromAmino: (object: import("./wasm/v1/tx").MsgStoreCodeAmino) => import("./wasm/v1/tx").MsgStoreCode;
    };
    "/cosmwasm.wasm.v1.MsgInstantiateContract": {
        aminoType: string;
        toAmino: (message: import("./wasm/v1/tx").MsgInstantiateContract) => import("./wasm/v1/tx").MsgInstantiateContractAmino;
        fromAmino: (object: import("./wasm/v1/tx").MsgInstantiateContractAmino) => import("./wasm/v1/tx").MsgInstantiateContract;
    };
    "/cosmwasm.wasm.v1.MsgExecuteContract": {
        aminoType: string;
        toAmino: (message: import("./wasm/v1/tx").MsgExecuteContract) => import("./wasm/v1/tx").MsgExecuteContractAmino;
        fromAmino: (object: import("./wasm/v1/tx").MsgExecuteContractAmino) => import("./wasm/v1/tx").MsgExecuteContract;
    };
    "/cosmwasm.wasm.v1.MsgMigrateContract": {
        aminoType: string;
        toAmino: (message: import("./wasm/v1/tx").MsgMigrateContract) => import("./wasm/v1/tx").MsgMigrateContractAmino;
        fromAmino: (object: import("./wasm/v1/tx").MsgMigrateContractAmino) => import("./wasm/v1/tx").MsgMigrateContract;
    };
    "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
        aminoType: string;
        toAmino: (message: import("./wasm/v1/tx").MsgUpdateAdmin) => import("./wasm/v1/tx").MsgUpdateAdminAmino;
        fromAmino: (object: import("./wasm/v1/tx").MsgUpdateAdminAmino) => import("./wasm/v1/tx").MsgUpdateAdmin;
    };
    "/cosmwasm.wasm.v1.MsgClearAdmin": {
        aminoType: string;
        toAmino: (message: import("./wasm/v1/tx").MsgClearAdmin) => import("./wasm/v1/tx").MsgClearAdminAmino;
        fromAmino: (object: import("./wasm/v1/tx").MsgClearAdminAmino) => import("./wasm/v1/tx").MsgClearAdmin;
    };
};
export declare const cosmwasmProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningCosmwasmClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningCosmwasmClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
