import { TxRpc } from "../../../types";
import { ReactQueryParams } from "../../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { QueryStore } from "../../../mobx";
import { QueryEvidenceRequest, QueryEvidenceResponse, QueryAllEvidenceRequest, QueryAllEvidenceResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Evidence queries evidence based on evidence hash. */
    evidence(request: QueryEvidenceRequest): Promise<QueryEvidenceResponse>;
    /** AllEvidence queries all evidence. */
    allEvidence(request?: QueryAllEvidenceRequest): Promise<QueryAllEvidenceResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    evidence: (request: QueryEvidenceRequest) => Promise<QueryEvidenceResponse>;
    allEvidence: (request?: QueryAllEvidenceRequest) => Promise<QueryAllEvidenceResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => QueryClientImpl;
export interface UseEvidenceQuery<TData> extends ReactQueryParams<QueryEvidenceResponse, TData> {
    request: QueryEvidenceRequest;
}
export interface UseAllEvidenceQuery<TData> extends ReactQueryParams<QueryAllEvidenceResponse, TData> {
    request?: QueryAllEvidenceRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Evidence queries evidence based on evidence hash. */ useEvidence: <TData = QueryEvidenceResponse>({ request, options }: UseEvidenceQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** AllEvidence queries all evidence. */ useAllEvidence: <TData_1 = QueryAllEvidenceResponse>({ request, options }: UseAllEvidenceQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
};
export declare const createRpcQueryMobxStores: (rpc: ProtobufRpcClient | undefined) => {
    /** Evidence queries evidence based on evidence hash. */ QueryEvidenceStore: {
        new (): {
            store: QueryStore<QueryEvidenceRequest, QueryEvidenceResponse>;
            evidence(request: QueryEvidenceRequest): import("../../../mobx").MobxResponse<QueryEvidenceResponse>;
        };
    };
    /** AllEvidence queries all evidence. */ QueryAllEvidenceStore: {
        new (): {
            store: QueryStore<QueryAllEvidenceRequest, QueryAllEvidenceResponse>;
            allEvidence(request: QueryAllEvidenceRequest): import("../../../mobx").MobxResponse<QueryAllEvidenceResponse>;
        };
    };
};
