"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryMobxStores = exports.createRpcQueryHooks = exports.createClientImpl = exports.QueryClientImpl = void 0;
const binary_1 = require("../../../binary");
const react_query_1 = require("@tanstack/react-query");
const mobx_1 = require("../../../mobx");
const query_1 = require("./query");
class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
    }
    /* Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */
    balance = async (request) => {
        const data = query_1.QueryBalanceRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Balance", data);
        return promise.then(data => query_1.QueryBalanceResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */
    owner = async (request) => {
        const data = query_1.QueryOwnerRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Owner", data);
        return promise.then(data => query_1.QueryOwnerResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */
    supply = async (request) => {
        const data = query_1.QuerySupplyRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Supply", data);
        return promise.then(data => query_1.QuerySupplyResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
     ERC721Enumerable */
    nFTs = async (request) => {
        const data = query_1.QueryNFTsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "NFTs", data);
        return promise.then(data => query_1.QueryNFTsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* NFT queries an NFT based on its class and id. */
    nFT = async (request) => {
        const data = query_1.QueryNFTRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "NFT", data);
        return promise.then(data => query_1.QueryNFTResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Class queries an NFT class based on its id */
    class = async (request) => {
        const data = query_1.QueryClassRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Class", data);
        return promise.then(data => query_1.QueryClassResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Classes queries all NFT classes */
    classes = async (request = {
        pagination: undefined
    }) => {
        const data = query_1.QueryClassesRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Classes", data);
        return promise.then(data => query_1.QueryClassesResponse.decode(new binary_1.BinaryReader(data)));
    };
}
exports.QueryClientImpl = QueryClientImpl;
const createClientImpl = (rpc) => {
    return new QueryClientImpl(rpc);
};
exports.createClientImpl = createClientImpl;
const _queryClients = new WeakMap();
const getQueryService = (rpc) => {
    if (!rpc)
        return;
    if (_queryClients.has(rpc)) {
        return _queryClients.get(rpc);
    }
    const queryService = new QueryClientImpl(rpc);
    _queryClients.set(rpc, queryService);
    return queryService;
};
const createRpcQueryHooks = (rpc) => {
    const queryService = getQueryService(rpc);
    const useBalance = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["balanceQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.balance(request);
        }, options);
    };
    const useOwner = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["ownerQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.owner(request);
        }, options);
    };
    const useSupply = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["supplyQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.supply(request);
        }, options);
    };
    const useNFTs = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["nFTsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.nFTs(request);
        }, options);
    };
    const useNFT = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["nFTQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.nFT(request);
        }, options);
    };
    const useClass = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["classQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.class(request);
        }, options);
    };
    const useClasses = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["classesQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.classes(request);
        }, options);
    };
    return {
        /** Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */ useBalance,
        /** Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */ useOwner,
        /** Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */ useSupply,
        /**
         * NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
         * ERC721Enumerable
         */
        useNFTs,
        /** NFT queries an NFT based on its class and id. */ useNFT,
        /** Class queries an NFT class based on its id */ useClass,
        /** Classes queries all NFT classes */ useClasses
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;
const createRpcQueryMobxStores = (rpc) => {
    const queryService = getQueryService(rpc);
    class QueryBalanceStore {
        store = new mobx_1.QueryStore(queryService?.balance);
        balance(request) {
            return this.store.getData(request);
        }
    }
    class QueryOwnerStore {
        store = new mobx_1.QueryStore(queryService?.owner);
        owner(request) {
            return this.store.getData(request);
        }
    }
    class QuerySupplyStore {
        store = new mobx_1.QueryStore(queryService?.supply);
        supply(request) {
            return this.store.getData(request);
        }
    }
    class QueryNFTsStore {
        store = new mobx_1.QueryStore(queryService?.nFTs);
        nFTs(request) {
            return this.store.getData(request);
        }
    }
    class QueryNFTStore {
        store = new mobx_1.QueryStore(queryService?.nFT);
        nFT(request) {
            return this.store.getData(request);
        }
    }
    class QueryClassStore {
        store = new mobx_1.QueryStore(queryService?.class);
        class(request) {
            return this.store.getData(request);
        }
    }
    class QueryClassesStore {
        store = new mobx_1.QueryStore(queryService?.classes);
        classes(request) {
            return this.store.getData(request);
        }
    }
    return {
        /** Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */ QueryBalanceStore,
        /** Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */ QueryOwnerStore,
        /** Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */ QuerySupplyStore,
        /**
         * NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
         * ERC721Enumerable
         */
        QueryNFTsStore,
        /** NFT queries an NFT based on its class and id. */ QueryNFTStore,
        /** Class queries an NFT class based on its id */ QueryClassStore,
        /** Classes queries all NFT classes */ QueryClassesStore
    };
};
exports.createRpcQueryMobxStores = createRpcQueryMobxStores;
