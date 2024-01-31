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
    /* ContractInfo gets the contract meta data */
    contractInfo = async (request) => {
        const data = query_1.QueryContractInfoRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractInfo", data);
        return promise.then(data => query_1.QueryContractInfoResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* ContractHistory gets the contract code history */
    contractHistory = async (request) => {
        const data = query_1.QueryContractHistoryRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractHistory", data);
        return promise.then(data => query_1.QueryContractHistoryResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* ContractsByCode lists all smart contracts for a code id */
    contractsByCode = async (request) => {
        const data = query_1.QueryContractsByCodeRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractsByCode", data);
        return promise.then(data => query_1.QueryContractsByCodeResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* AllContractState gets all raw store data for a single contract */
    allContractState = async (request) => {
        const data = query_1.QueryAllContractStateRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "AllContractState", data);
        return promise.then(data => query_1.QueryAllContractStateResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* RawContractState gets single key from the raw store data of a contract */
    rawContractState = async (request) => {
        const data = query_1.QueryRawContractStateRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "RawContractState", data);
        return promise.then(data => query_1.QueryRawContractStateResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* SmartContractState get smart query result from the contract */
    smartContractState = async (request) => {
        const data = query_1.QuerySmartContractStateRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "SmartContractState", data);
        return promise.then(data => query_1.QuerySmartContractStateResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Code gets the binary code and metadata for a singe wasm code */
    code = async (request) => {
        const data = query_1.QueryCodeRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Code", data);
        return promise.then(data => query_1.QueryCodeResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Codes gets the metadata for all stored wasm codes */
    codes = async (request = {
        pagination: undefined
    }) => {
        const data = query_1.QueryCodesRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Codes", data);
        return promise.then(data => query_1.QueryCodesResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* PinnedCodes gets the pinned code ids */
    pinnedCodes = async (request = {
        pagination: undefined
    }) => {
        const data = query_1.QueryPinnedCodesRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "PinnedCodes", data);
        return promise.then(data => query_1.QueryPinnedCodesResponse.decode(new binary_1.BinaryReader(data)));
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
    const useContractInfo = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["contractInfoQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.contractInfo(request);
        }, options);
    };
    const useContractHistory = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["contractHistoryQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.contractHistory(request);
        }, options);
    };
    const useContractsByCode = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["contractsByCodeQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.contractsByCode(request);
        }, options);
    };
    const useAllContractState = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["allContractStateQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.allContractState(request);
        }, options);
    };
    const useRawContractState = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["rawContractStateQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.rawContractState(request);
        }, options);
    };
    const useSmartContractState = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["smartContractStateQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.smartContractState(request);
        }, options);
    };
    const useCode = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["codeQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.code(request);
        }, options);
    };
    const useCodes = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["codesQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.codes(request);
        }, options);
    };
    const usePinnedCodes = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["pinnedCodesQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.pinnedCodes(request);
        }, options);
    };
    return {
        /** ContractInfo gets the contract meta data */ useContractInfo,
        /** ContractHistory gets the contract code history */ useContractHistory,
        /** ContractsByCode lists all smart contracts for a code id */ useContractsByCode,
        /** AllContractState gets all raw store data for a single contract */ useAllContractState,
        /** RawContractState gets single key from the raw store data of a contract */ useRawContractState,
        /** SmartContractState get smart query result from the contract */ useSmartContractState,
        /** Code gets the binary code and metadata for a singe wasm code */ useCode,
        /** Codes gets the metadata for all stored wasm codes */ useCodes,
        /** PinnedCodes gets the pinned code ids */ usePinnedCodes
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;
const createRpcQueryMobxStores = (rpc) => {
    const queryService = getQueryService(rpc);
    class QueryContractInfoStore {
        store = new mobx_1.QueryStore(queryService?.contractInfo);
        contractInfo(request) {
            return this.store.getData(request);
        }
    }
    class QueryContractHistoryStore {
        store = new mobx_1.QueryStore(queryService?.contractHistory);
        contractHistory(request) {
            return this.store.getData(request);
        }
    }
    class QueryContractsByCodeStore {
        store = new mobx_1.QueryStore(queryService?.contractsByCode);
        contractsByCode(request) {
            return this.store.getData(request);
        }
    }
    class QueryAllContractStateStore {
        store = new mobx_1.QueryStore(queryService?.allContractState);
        allContractState(request) {
            return this.store.getData(request);
        }
    }
    class QueryRawContractStateStore {
        store = new mobx_1.QueryStore(queryService?.rawContractState);
        rawContractState(request) {
            return this.store.getData(request);
        }
    }
    class QuerySmartContractStateStore {
        store = new mobx_1.QueryStore(queryService?.smartContractState);
        smartContractState(request) {
            return this.store.getData(request);
        }
    }
    class QueryCodeStore {
        store = new mobx_1.QueryStore(queryService?.code);
        code(request) {
            return this.store.getData(request);
        }
    }
    class QueryCodesStore {
        store = new mobx_1.QueryStore(queryService?.codes);
        codes(request) {
            return this.store.getData(request);
        }
    }
    class QueryPinnedCodesStore {
        store = new mobx_1.QueryStore(queryService?.pinnedCodes);
        pinnedCodes(request) {
            return this.store.getData(request);
        }
    }
    return {
        /** ContractInfo gets the contract meta data */ QueryContractInfoStore,
        /** ContractHistory gets the contract code history */ QueryContractHistoryStore,
        /** ContractsByCode lists all smart contracts for a code id */ QueryContractsByCodeStore,
        /** AllContractState gets all raw store data for a single contract */ QueryAllContractStateStore,
        /** RawContractState gets single key from the raw store data of a contract */ QueryRawContractStateStore,
        /** SmartContractState get smart query result from the contract */ QuerySmartContractStateStore,
        /** Code gets the binary code and metadata for a singe wasm code */ QueryCodeStore,
        /** Codes gets the metadata for all stored wasm codes */ QueryCodesStore,
        /** PinnedCodes gets the pinned code ids */ QueryPinnedCodesStore
    };
};
exports.createRpcQueryMobxStores = createRpcQueryMobxStores;
