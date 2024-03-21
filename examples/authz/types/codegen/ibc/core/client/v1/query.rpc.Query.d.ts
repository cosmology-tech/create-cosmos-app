import { TxRpc } from "../../../../types";
import { ReactQueryParams } from "../../../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { QueryStore } from "../../../../mobx";
import { QueryClientStateRequest, QueryClientStateResponse, QueryClientStatesRequest, QueryClientStatesResponse, QueryConsensusStateRequest, QueryConsensusStateResponse, QueryConsensusStatesRequest, QueryConsensusStatesResponse, QueryClientStatusRequest, QueryClientStatusResponse, QueryClientParamsRequest, QueryClientParamsResponse, QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse } from "./query";
/** Query provides defines the gRPC querier service */
export interface Query {
    /** ClientState queries an IBC light client. */
    clientState(request: QueryClientStateRequest): Promise<QueryClientStateResponse>;
    /** ClientStates queries all the IBC light clients of a chain. */
    clientStates(request?: QueryClientStatesRequest): Promise<QueryClientStatesResponse>;
    /**
     * ConsensusState queries a consensus state associated with a client state at
     * a given height.
     */
    consensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse>;
    /**
     * ConsensusStates queries all the consensus state associated with a given
     * client.
     */
    consensusStates(request: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponse>;
    /** Status queries the status of an IBC client. */
    clientStatus(request: QueryClientStatusRequest): Promise<QueryClientStatusResponse>;
    /** ClientParams queries all parameters of the ibc client. */
    clientParams(request?: QueryClientParamsRequest): Promise<QueryClientParamsResponse>;
    /** UpgradedClientState queries an Upgraded IBC light client. */
    upgradedClientState(request?: QueryUpgradedClientStateRequest): Promise<QueryUpgradedClientStateResponse>;
    /** UpgradedConsensusState queries an Upgraded IBC consensus state. */
    upgradedConsensusState(request?: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    clientState: (request: QueryClientStateRequest) => Promise<QueryClientStateResponse>;
    clientStates: (request?: QueryClientStatesRequest) => Promise<QueryClientStatesResponse>;
    consensusState: (request: QueryConsensusStateRequest) => Promise<QueryConsensusStateResponse>;
    consensusStates: (request: QueryConsensusStatesRequest) => Promise<QueryConsensusStatesResponse>;
    clientStatus: (request: QueryClientStatusRequest) => Promise<QueryClientStatusResponse>;
    clientParams: (request?: QueryClientParamsRequest) => Promise<QueryClientParamsResponse>;
    upgradedClientState: (request?: QueryUpgradedClientStateRequest) => Promise<QueryUpgradedClientStateResponse>;
    upgradedConsensusState: (request?: QueryUpgradedConsensusStateRequest) => Promise<QueryUpgradedConsensusStateResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => QueryClientImpl;
export interface UseClientStateQuery<TData> extends ReactQueryParams<QueryClientStateResponse, TData> {
    request: QueryClientStateRequest;
}
export interface UseClientStatesQuery<TData> extends ReactQueryParams<QueryClientStatesResponse, TData> {
    request?: QueryClientStatesRequest;
}
export interface UseConsensusStateQuery<TData> extends ReactQueryParams<QueryConsensusStateResponse, TData> {
    request: QueryConsensusStateRequest;
}
export interface UseConsensusStatesQuery<TData> extends ReactQueryParams<QueryConsensusStatesResponse, TData> {
    request: QueryConsensusStatesRequest;
}
export interface UseClientStatusQuery<TData> extends ReactQueryParams<QueryClientStatusResponse, TData> {
    request: QueryClientStatusRequest;
}
export interface UseClientParamsQuery<TData> extends ReactQueryParams<QueryClientParamsResponse, TData> {
    request?: QueryClientParamsRequest;
}
export interface UseUpgradedClientStateQuery<TData> extends ReactQueryParams<QueryUpgradedClientStateResponse, TData> {
    request?: QueryUpgradedClientStateRequest;
}
export interface UseUpgradedConsensusStateQuery<TData> extends ReactQueryParams<QueryUpgradedConsensusStateResponse, TData> {
    request?: QueryUpgradedConsensusStateRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** ClientState queries an IBC light client. */ useClientState: <TData = QueryClientStateResponse>({ request, options }: UseClientStateQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** ClientStates queries all the IBC light clients of a chain. */ useClientStates: <TData_1 = QueryClientStatesResponse>({ request, options }: UseClientStatesQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    /**
     * ConsensusState queries a consensus state associated with a client state at
     * a given height.
     */
    useConsensusState: <TData_2 = QueryConsensusStateResponse>({ request, options }: UseConsensusStateQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
    /**
     * ConsensusStates queries all the consensus state associated with a given
     * client.
     */
    useConsensusStates: <TData_3 = QueryConsensusStatesResponse>({ request, options }: UseConsensusStatesQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
    /** Status queries the status of an IBC client. */ useClientStatus: <TData_4 = QueryClientStatusResponse>({ request, options }: UseClientStatusQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
    /** ClientParams queries all parameters of the ibc client. */ useClientParams: <TData_5 = QueryClientParamsResponse>({ request, options }: UseClientParamsQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
    /** UpgradedClientState queries an Upgraded IBC light client. */ useUpgradedClientState: <TData_6 = QueryUpgradedClientStateResponse>({ request, options }: UseUpgradedClientStateQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
    /** UpgradedConsensusState queries an Upgraded IBC consensus state. */ useUpgradedConsensusState: <TData_7 = QueryUpgradedConsensusStateResponse>({ request, options }: UseUpgradedConsensusStateQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
};
export declare const createRpcQueryMobxStores: (rpc: ProtobufRpcClient | undefined) => {
    /** ClientState queries an IBC light client. */ QueryClientStateStore: {
        new (): {
            store: QueryStore<QueryClientStateRequest, QueryClientStateResponse>;
            clientState(request: QueryClientStateRequest): import("../../../../mobx").MobxResponse<QueryClientStateResponse>;
        };
    };
    /** ClientStates queries all the IBC light clients of a chain. */ QueryClientStatesStore: {
        new (): {
            store: QueryStore<QueryClientStatesRequest, QueryClientStatesResponse>;
            clientStates(request: QueryClientStatesRequest): import("../../../../mobx").MobxResponse<QueryClientStatesResponse>;
        };
    };
    /**
     * ConsensusState queries a consensus state associated with a client state at
     * a given height.
     */
    QueryConsensusStateStore: {
        new (): {
            store: QueryStore<QueryConsensusStateRequest, QueryConsensusStateResponse>;
            consensusState(request: QueryConsensusStateRequest): import("../../../../mobx").MobxResponse<QueryConsensusStateResponse>;
        };
    };
    /**
     * ConsensusStates queries all the consensus state associated with a given
     * client.
     */
    QueryConsensusStatesStore: {
        new (): {
            store: QueryStore<QueryConsensusStatesRequest, QueryConsensusStatesResponse>;
            consensusStates(request: QueryConsensusStatesRequest): import("../../../../mobx").MobxResponse<QueryConsensusStatesResponse>;
        };
    };
    /** Status queries the status of an IBC client. */ QueryClientStatusStore: {
        new (): {
            store: QueryStore<QueryClientStatusRequest, QueryClientStatusResponse>;
            clientStatus(request: QueryClientStatusRequest): import("../../../../mobx").MobxResponse<QueryClientStatusResponse>;
        };
    };
    /** ClientParams queries all parameters of the ibc client. */ QueryClientParamsStore: {
        new (): {
            store: QueryStore<QueryClientParamsRequest, QueryClientParamsResponse>;
            clientParams(request: QueryClientParamsRequest): import("../../../../mobx").MobxResponse<QueryClientParamsResponse>;
        };
    };
    /** UpgradedClientState queries an Upgraded IBC light client. */ QueryUpgradedClientStateStore: {
        new (): {
            store: QueryStore<QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse>;
            upgradedClientState(request: QueryUpgradedClientStateRequest): import("../../../../mobx").MobxResponse<QueryUpgradedClientStateResponse>;
        };
    };
    /** UpgradedConsensusState queries an Upgraded IBC consensus state. */ QueryUpgradedConsensusStateStore: {
        new (): {
            store: QueryStore<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>;
            upgradedConsensusState(request: QueryUpgradedConsensusStateRequest): import("../../../../mobx").MobxResponse<QueryUpgradedConsensusStateResponse>;
        };
    };
};
