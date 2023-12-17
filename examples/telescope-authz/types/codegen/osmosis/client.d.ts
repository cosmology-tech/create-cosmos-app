import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const osmosisAminoConverters: {
    "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
        aminoType: string;
        toAmino: (message: import("./tokenfactory/v1beta1/tx").MsgCreateDenom) => import("./tokenfactory/v1beta1/tx").MsgCreateDenomAmino;
        fromAmino: (object: import("./tokenfactory/v1beta1/tx").MsgCreateDenomAmino) => import("./tokenfactory/v1beta1/tx").MsgCreateDenom;
    };
    "/osmosis.tokenfactory.v1beta1.MsgMint": {
        aminoType: string;
        toAmino: (message: import("./tokenfactory/v1beta1/tx").MsgMint) => import("./tokenfactory/v1beta1/tx").MsgMintAmino;
        fromAmino: (object: import("./tokenfactory/v1beta1/tx").MsgMintAmino) => import("./tokenfactory/v1beta1/tx").MsgMint;
    };
    "/osmosis.tokenfactory.v1beta1.MsgBurn": {
        aminoType: string;
        toAmino: (message: import("./tokenfactory/v1beta1/tx").MsgBurn) => import("./tokenfactory/v1beta1/tx").MsgBurnAmino;
        fromAmino: (object: import("./tokenfactory/v1beta1/tx").MsgBurnAmino) => import("./tokenfactory/v1beta1/tx").MsgBurn;
    };
    "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
        aminoType: string;
        toAmino: (message: import("./tokenfactory/v1beta1/tx").MsgChangeAdmin) => import("./tokenfactory/v1beta1/tx").MsgChangeAdminAmino;
        fromAmino: (object: import("./tokenfactory/v1beta1/tx").MsgChangeAdminAmino) => import("./tokenfactory/v1beta1/tx").MsgChangeAdmin;
    };
    "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
        aminoType: string;
        toAmino: (message: import("./tokenfactory/v1beta1/tx").MsgSetDenomMetadata) => import("./tokenfactory/v1beta1/tx").MsgSetDenomMetadataAmino;
        fromAmino: (object: import("./tokenfactory/v1beta1/tx").MsgSetDenomMetadataAmino) => import("./tokenfactory/v1beta1/tx").MsgSetDenomMetadata;
    };
    "/osmosis.superfluid.MsgSuperfluidDelegate": {
        aminoType: string;
        toAmino: (message: import("./superfluid/tx").MsgSuperfluidDelegate) => import("./superfluid/tx").MsgSuperfluidDelegateAmino;
        fromAmino: (object: import("./superfluid/tx").MsgSuperfluidDelegateAmino) => import("./superfluid/tx").MsgSuperfluidDelegate;
    };
    "/osmosis.superfluid.MsgSuperfluidUndelegate": {
        aminoType: string;
        toAmino: (message: import("./superfluid/tx").MsgSuperfluidUndelegate) => import("./superfluid/tx").MsgSuperfluidUndelegateAmino;
        fromAmino: (object: import("./superfluid/tx").MsgSuperfluidUndelegateAmino) => import("./superfluid/tx").MsgSuperfluidUndelegate;
    };
    "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
        aminoType: string;
        toAmino: (message: import("./superfluid/tx").MsgSuperfluidUnbondLock) => import("./superfluid/tx").MsgSuperfluidUnbondLockAmino;
        fromAmino: (object: import("./superfluid/tx").MsgSuperfluidUnbondLockAmino) => import("./superfluid/tx").MsgSuperfluidUnbondLock;
    };
    "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
        aminoType: string;
        toAmino: (message: import("./superfluid/tx").MsgLockAndSuperfluidDelegate) => import("./superfluid/tx").MsgLockAndSuperfluidDelegateAmino;
        fromAmino: (object: import("./superfluid/tx").MsgLockAndSuperfluidDelegateAmino) => import("./superfluid/tx").MsgLockAndSuperfluidDelegate;
    };
    "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
        aminoType: string;
        toAmino: (message: import("./superfluid/tx").MsgUnPoolWhitelistedPool) => import("./superfluid/tx").MsgUnPoolWhitelistedPoolAmino;
        fromAmino: (object: import("./superfluid/tx").MsgUnPoolWhitelistedPoolAmino) => import("./superfluid/tx").MsgUnPoolWhitelistedPool;
    };
    "/osmosis.lockup.MsgLockTokens": {
        aminoType: string;
        toAmino: (message: import("./lockup/tx").MsgLockTokens) => import("./lockup/tx").MsgLockTokensAmino;
        fromAmino: (object: import("./lockup/tx").MsgLockTokensAmino) => import("./lockup/tx").MsgLockTokens;
    };
    "/osmosis.lockup.MsgBeginUnlockingAll": {
        aminoType: string;
        toAmino: (message: import("./lockup/tx").MsgBeginUnlockingAll) => import("./lockup/tx").MsgBeginUnlockingAllAmino;
        fromAmino: (object: import("./lockup/tx").MsgBeginUnlockingAllAmino) => import("./lockup/tx").MsgBeginUnlockingAll;
    };
    "/osmosis.lockup.MsgBeginUnlocking": {
        aminoType: string;
        toAmino: (message: import("./lockup/tx").MsgBeginUnlocking) => import("./lockup/tx").MsgBeginUnlockingAmino;
        fromAmino: (object: import("./lockup/tx").MsgBeginUnlockingAmino) => import("./lockup/tx").MsgBeginUnlocking;
    };
    "/osmosis.lockup.MsgExtendLockup": {
        aminoType: string;
        toAmino: (message: import("./lockup/tx").MsgExtendLockup) => import("./lockup/tx").MsgExtendLockupAmino;
        fromAmino: (object: import("./lockup/tx").MsgExtendLockupAmino) => import("./lockup/tx").MsgExtendLockup;
    };
    "/osmosis.lockup.MsgForceUnlock": {
        aminoType: string;
        toAmino: (message: import("./lockup/tx").MsgForceUnlock) => import("./lockup/tx").MsgForceUnlockAmino;
        fromAmino: (object: import("./lockup/tx").MsgForceUnlockAmino) => import("./lockup/tx").MsgForceUnlock;
    };
    "/osmosis.incentives.MsgCreateGauge": {
        aminoType: string;
        toAmino: (message: import("./incentives/tx").MsgCreateGauge) => import("./incentives/tx").MsgCreateGaugeAmino;
        fromAmino: (object: import("./incentives/tx").MsgCreateGaugeAmino) => import("./incentives/tx").MsgCreateGauge;
    };
    "/osmosis.incentives.MsgAddToGauge": {
        aminoType: string;
        toAmino: (message: import("./incentives/tx").MsgAddToGauge) => import("./incentives/tx").MsgAddToGaugeAmino;
        fromAmino: (object: import("./incentives/tx").MsgAddToGaugeAmino) => import("./incentives/tx").MsgAddToGauge;
    };
    "/osmosis.gamm.v1beta1.MsgJoinPool": {
        aminoType: string;
        toAmino: (message: import("./gamm/v1beta1/tx").MsgJoinPool) => import("./gamm/v1beta1/tx").MsgJoinPoolAmino;
        fromAmino: (object: import("./gamm/v1beta1/tx").MsgJoinPoolAmino) => import("./gamm/v1beta1/tx").MsgJoinPool;
    };
    "/osmosis.gamm.v1beta1.MsgExitPool": {
        aminoType: string;
        toAmino: (message: import("./gamm/v1beta1/tx").MsgExitPool) => import("./gamm/v1beta1/tx").MsgExitPoolAmino;
        fromAmino: (object: import("./gamm/v1beta1/tx").MsgExitPoolAmino) => import("./gamm/v1beta1/tx").MsgExitPool;
    };
    "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
        aminoType: string;
        toAmino: (message: import("./gamm/v1beta1/tx").MsgSwapExactAmountIn) => import("./gamm/v1beta1/tx").MsgSwapExactAmountInAmino;
        fromAmino: (object: import("./gamm/v1beta1/tx").MsgSwapExactAmountInAmino) => import("./gamm/v1beta1/tx").MsgSwapExactAmountIn;
    };
    "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
        aminoType: string;
        toAmino: (message: import("./gamm/v1beta1/tx").MsgSwapExactAmountOut) => import("./gamm/v1beta1/tx").MsgSwapExactAmountOutAmino;
        fromAmino: (object: import("./gamm/v1beta1/tx").MsgSwapExactAmountOutAmino) => import("./gamm/v1beta1/tx").MsgSwapExactAmountOut;
    };
    "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
        aminoType: string;
        toAmino: (message: import("./gamm/v1beta1/tx").MsgJoinSwapExternAmountIn) => import("./gamm/v1beta1/tx").MsgJoinSwapExternAmountInAmino;
        fromAmino: (object: import("./gamm/v1beta1/tx").MsgJoinSwapExternAmountInAmino) => import("./gamm/v1beta1/tx").MsgJoinSwapExternAmountIn;
    };
    "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
        aminoType: string;
        toAmino: (message: import("./gamm/v1beta1/tx").MsgJoinSwapShareAmountOut) => import("./gamm/v1beta1/tx").MsgJoinSwapShareAmountOutAmino;
        fromAmino: (object: import("./gamm/v1beta1/tx").MsgJoinSwapShareAmountOutAmino) => import("./gamm/v1beta1/tx").MsgJoinSwapShareAmountOut;
    };
    "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
        aminoType: string;
        toAmino: (message: import("./gamm/v1beta1/tx").MsgExitSwapExternAmountOut) => import("./gamm/v1beta1/tx").MsgExitSwapExternAmountOutAmino;
        fromAmino: (object: import("./gamm/v1beta1/tx").MsgExitSwapExternAmountOutAmino) => import("./gamm/v1beta1/tx").MsgExitSwapExternAmountOut;
    };
    "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
        aminoType: string;
        toAmino: (message: import("./gamm/v1beta1/tx").MsgExitSwapShareAmountIn) => import("./gamm/v1beta1/tx").MsgExitSwapShareAmountInAmino;
        fromAmino: (object: import("./gamm/v1beta1/tx").MsgExitSwapShareAmountInAmino) => import("./gamm/v1beta1/tx").MsgExitSwapShareAmountIn;
    };
    "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
        aminoType: string;
        toAmino: (message: import("./gamm/pool-models/stableswap/tx").MsgCreateStableswapPool) => import("./gamm/pool-models/stableswap/tx").MsgCreateStableswapPoolAmino;
        fromAmino: (object: import("./gamm/pool-models/stableswap/tx").MsgCreateStableswapPoolAmino) => import("./gamm/pool-models/stableswap/tx").MsgCreateStableswapPool;
    };
    "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
        aminoType: string;
        toAmino: (message: import("./gamm/pool-models/stableswap/tx").MsgStableSwapAdjustScalingFactors) => import("./gamm/pool-models/stableswap/tx").MsgStableSwapAdjustScalingFactorsAmino;
        fromAmino: (object: import("./gamm/pool-models/stableswap/tx").MsgStableSwapAdjustScalingFactorsAmino) => import("./gamm/pool-models/stableswap/tx").MsgStableSwapAdjustScalingFactors;
    };
    "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
        aminoType: string;
        toAmino: (message: import("./gamm/pool-models/balancer/tx/tx").MsgCreateBalancerPool) => import("./gamm/pool-models/balancer/tx/tx").MsgCreateBalancerPoolAmino;
        fromAmino: (object: import("./gamm/pool-models/balancer/tx/tx").MsgCreateBalancerPoolAmino) => import("./gamm/pool-models/balancer/tx/tx").MsgCreateBalancerPool;
    };
};
export declare const osmosisProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningOsmosisClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningOsmosisClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
