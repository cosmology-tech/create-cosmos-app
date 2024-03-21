import { TxRpc } from "../../../types";
import { ReactQueryParams } from "../../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { QueryStore } from "../../../mobx";
import { QueryBalanceRequest, QueryBalanceResponse, QueryOwnerRequest, QueryOwnerResponse, QuerySupplyRequest, QuerySupplyResponse, QueryNFTsRequest, QueryNFTsResponse, QueryNFTRequest, QueryNFTResponse, QueryClassRequest, QueryClassResponse, QueryClassesRequest, QueryClassesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    /** Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */
    owner(request: QueryOwnerRequest): Promise<QueryOwnerResponse>;
    /** Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */
    supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
    /**
     * NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
     * ERC721Enumerable
     */
    nFTs(request: QueryNFTsRequest): Promise<QueryNFTsResponse>;
    /** NFT queries an NFT based on its class and id. */
    nFT(request: QueryNFTRequest): Promise<QueryNFTResponse>;
    /** Class queries an NFT class based on its id */
    class(request: QueryClassRequest): Promise<QueryClassResponse>;
    /** Classes queries all NFT classes */
    classes(request?: QueryClassesRequest): Promise<QueryClassesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    balance: (request: QueryBalanceRequest) => Promise<QueryBalanceResponse>;
    owner: (request: QueryOwnerRequest) => Promise<QueryOwnerResponse>;
    supply: (request: QuerySupplyRequest) => Promise<QuerySupplyResponse>;
    nFTs: (request: QueryNFTsRequest) => Promise<QueryNFTsResponse>;
    nFT: (request: QueryNFTRequest) => Promise<QueryNFTResponse>;
    class: (request: QueryClassRequest) => Promise<QueryClassResponse>;
    classes: (request?: QueryClassesRequest) => Promise<QueryClassesResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => QueryClientImpl;
export interface UseBalanceQuery<TData> extends ReactQueryParams<QueryBalanceResponse, TData> {
    request: QueryBalanceRequest;
}
export interface UseOwnerQuery<TData> extends ReactQueryParams<QueryOwnerResponse, TData> {
    request: QueryOwnerRequest;
}
export interface UseSupplyQuery<TData> extends ReactQueryParams<QuerySupplyResponse, TData> {
    request: QuerySupplyRequest;
}
export interface UseNFTsQuery<TData> extends ReactQueryParams<QueryNFTsResponse, TData> {
    request: QueryNFTsRequest;
}
export interface UseNFTQuery<TData> extends ReactQueryParams<QueryNFTResponse, TData> {
    request: QueryNFTRequest;
}
export interface UseClassQuery<TData> extends ReactQueryParams<QueryClassResponse, TData> {
    request: QueryClassRequest;
}
export interface UseClassesQuery<TData> extends ReactQueryParams<QueryClassesResponse, TData> {
    request?: QueryClassesRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */ useBalance: <TData = QueryBalanceResponse>({ request, options }: UseBalanceQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */ useOwner: <TData_1 = QueryOwnerResponse>({ request, options }: UseOwnerQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    /** Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */ useSupply: <TData_2 = QuerySupplyResponse>({ request, options }: UseSupplyQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
    /**
     * NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
     * ERC721Enumerable
     */
    useNFTs: <TData_3 = QueryNFTsResponse>({ request, options }: UseNFTsQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
    /** NFT queries an NFT based on its class and id. */ useNFT: <TData_4 = QueryNFTResponse>({ request, options }: UseNFTQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
    /** Class queries an NFT class based on its id */ useClass: <TData_5 = QueryClassResponse>({ request, options }: UseClassQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
    /** Classes queries all NFT classes */ useClasses: <TData_6 = QueryClassesResponse>({ request, options }: UseClassesQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
};
export declare const createRpcQueryMobxStores: (rpc: ProtobufRpcClient | undefined) => {
    /** Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */ QueryBalanceStore: {
        new (): {
            store: QueryStore<QueryBalanceRequest, QueryBalanceResponse>;
            balance(request: QueryBalanceRequest): import("../../../mobx").MobxResponse<QueryBalanceResponse>;
        };
    };
    /** Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */ QueryOwnerStore: {
        new (): {
            store: QueryStore<QueryOwnerRequest, QueryOwnerResponse>;
            owner(request: QueryOwnerRequest): import("../../../mobx").MobxResponse<QueryOwnerResponse>;
        };
    };
    /** Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */ QuerySupplyStore: {
        new (): {
            store: QueryStore<QuerySupplyRequest, QuerySupplyResponse>;
            supply(request: QuerySupplyRequest): import("../../../mobx").MobxResponse<QuerySupplyResponse>;
        };
    };
    /**
     * NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
     * ERC721Enumerable
     */
    QueryNFTsStore: {
        new (): {
            store: QueryStore<QueryNFTsRequest, QueryNFTsResponse>;
            nFTs(request: QueryNFTsRequest): import("../../../mobx").MobxResponse<QueryNFTsResponse>;
        };
    };
    /** NFT queries an NFT based on its class and id. */ QueryNFTStore: {
        new (): {
            store: QueryStore<QueryNFTRequest, QueryNFTResponse>;
            nFT(request: QueryNFTRequest): import("../../../mobx").MobxResponse<QueryNFTResponse>;
        };
    };
    /** Class queries an NFT class based on its id */ QueryClassStore: {
        new (): {
            store: QueryStore<QueryClassRequest, QueryClassResponse>;
            class(request: QueryClassRequest): import("../../../mobx").MobxResponse<QueryClassResponse>;
        };
    };
    /** Classes queries all NFT classes */ QueryClassesStore: {
        new (): {
            store: QueryStore<QueryClassesRequest, QueryClassesResponse>;
            classes(request: QueryClassesRequest): import("../../../mobx").MobxResponse<QueryClassesResponse>;
        };
    };
};
