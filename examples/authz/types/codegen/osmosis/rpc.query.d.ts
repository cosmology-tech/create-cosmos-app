import { Rpc } from "../helpers";
export declare const createRPCQueryClient: ({ rpc }: {
    rpc: Rpc;
}) => Promise<{
    cosmos: {
        app: {
            v1alpha1: import("../cosmos/app/v1alpha1/query.rpc.Query").QueryClientImpl;
        };
        auth: {
            v1beta1: import("../cosmos/auth/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        authz: {
            v1beta1: import("../cosmos/authz/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        bank: {
            v1beta1: import("../cosmos/bank/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        base: {
            tendermint: {
                v1beta1: import("../cosmos/base/tendermint/v1beta1/query.rpc.Service").ServiceClientImpl;
            };
        };
        distribution: {
            v1beta1: import("../cosmos/distribution/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        evidence: {
            v1beta1: import("../cosmos/evidence/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        feegrant: {
            v1beta1: import("../cosmos/feegrant/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        gov: {
            v1: import("../cosmos/gov/v1/query.rpc.Query").QueryClientImpl;
            v1beta1: import("../cosmos/gov/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        group: {
            v1: import("../cosmos/group/v1/query.rpc.Query").QueryClientImpl;
        };
        mint: {
            v1beta1: import("../cosmos/mint/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        nft: {
            v1beta1: import("../cosmos/nft/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        params: {
            v1beta1: import("../cosmos/params/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        slashing: {
            v1beta1: import("../cosmos/slashing/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        staking: {
            v1beta1: import("../cosmos/staking/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        tx: {
            v1beta1: import("../cosmos/tx/v1beta1/service.rpc.Service").ServiceClientImpl;
        };
        upgrade: {
            v1beta1: import("../cosmos/upgrade/v1beta1/query.rpc.Query").QueryClientImpl;
        };
    };
    osmosis: {
        claim: {
            v1beta1: import("./claim/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        epochs: {
            v1beta1: import("./epochs/query.rpc.Query").QueryClientImpl;
        };
        gamm: {
            v2: import("./gamm/v2/query.rpc.Query").QueryClientImpl;
        };
        ibcratelimit: {
            v1beta1: import("./ibc-rate-limit/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        incentives: import("./incentives/query.rpc.Query").QueryClientImpl;
        lockup: import("./lockup/query.rpc.Query").QueryClientImpl;
        mint: {
            v1beta1: import("./mint/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        poolincentives: {
            v1beta1: import("./pool-incentives/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        superfluid: import("./superfluid/query.rpc.Query").QueryClientImpl;
        tokenfactory: {
            v1beta1: import("./tokenfactory/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        twap: {
            v1beta1: import("./twap/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        txfees: {
            v1beta1: import("./txfees/v1beta1/query.rpc.Query").QueryClientImpl;
        };
    };
}>;
