import { TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../../react-query";
import { useQuery } from "@tanstack/react-query";
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
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* ClientState queries an IBC light client. */
  clientState = async (request: QueryClientStateRequest): Promise<QueryClientStateResponse> => {
    const data = QueryClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientState", data);
    return promise.then(data => QueryClientStateResponse.decode(new BinaryReader(data)));
  };
  /* ClientStates queries all the IBC light clients of a chain. */
  clientStates = async (request: QueryClientStatesRequest = {
    pagination: undefined
  }): Promise<QueryClientStatesResponse> => {
    const data = QueryClientStatesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStates", data);
    return promise.then(data => QueryClientStatesResponse.decode(new BinaryReader(data)));
  };
  /* ConsensusState queries a consensus state associated with a client state at
   a given height. */
  consensusState = async (request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse> => {
    const data = QueryConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusState", data);
    return promise.then(data => QueryConsensusStateResponse.decode(new BinaryReader(data)));
  };
  /* ConsensusStates queries all the consensus state associated with a given
   client. */
  consensusStates = async (request: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponse> => {
    const data = QueryConsensusStatesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusStates", data);
    return promise.then(data => QueryConsensusStatesResponse.decode(new BinaryReader(data)));
  };
  /* Status queries the status of an IBC client. */
  clientStatus = async (request: QueryClientStatusRequest): Promise<QueryClientStatusResponse> => {
    const data = QueryClientStatusRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStatus", data);
    return promise.then(data => QueryClientStatusResponse.decode(new BinaryReader(data)));
  };
  /* ClientParams queries all parameters of the ibc client. */
  clientParams = async (request: QueryClientParamsRequest = {}): Promise<QueryClientParamsResponse> => {
    const data = QueryClientParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientParams", data);
    return promise.then(data => QueryClientParamsResponse.decode(new BinaryReader(data)));
  };
  /* UpgradedClientState queries an Upgraded IBC light client. */
  upgradedClientState = async (request: QueryUpgradedClientStateRequest = {}): Promise<QueryUpgradedClientStateResponse> => {
    const data = QueryUpgradedClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedClientState", data);
    return promise.then(data => QueryUpgradedClientStateResponse.decode(new BinaryReader(data)));
  };
  /* UpgradedConsensusState queries an Upgraded IBC consensus state. */
  upgradedConsensusState = async (request: QueryUpgradedConsensusStateRequest = {}): Promise<QueryUpgradedConsensusStateResponse> => {
    const data = QueryUpgradedConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedConsensusState", data);
    return promise.then(data => QueryUpgradedConsensusStateResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    clientState(request: QueryClientStateRequest): Promise<QueryClientStateResponse> {
      return queryService.clientState(request);
    },
    clientStates(request?: QueryClientStatesRequest): Promise<QueryClientStatesResponse> {
      return queryService.clientStates(request);
    },
    consensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse> {
      return queryService.consensusState(request);
    },
    consensusStates(request: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponse> {
      return queryService.consensusStates(request);
    },
    clientStatus(request: QueryClientStatusRequest): Promise<QueryClientStatusResponse> {
      return queryService.clientStatus(request);
    },
    clientParams(request?: QueryClientParamsRequest): Promise<QueryClientParamsResponse> {
      return queryService.clientParams(request);
    },
    upgradedClientState(request?: QueryUpgradedClientStateRequest): Promise<QueryUpgradedClientStateResponse> {
      return queryService.upgradedClientState(request);
    },
    upgradedConsensusState(request?: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse> {
      return queryService.upgradedConsensusState(request);
    }
  };
};
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
const _queryClients: WeakMap<ProtobufRpcClient, QueryClientImpl> = new WeakMap();
const getQueryService = (rpc: ProtobufRpcClient | undefined): QueryClientImpl | undefined => {
  if (!rpc) return;
  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }
  const queryService = new QueryClientImpl(rpc);
  _queryClients.set(rpc, queryService);
  return queryService;
};
export const createRpcQueryHooks = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  const useClientState = <TData = QueryClientStateResponse,>({
    request,
    options
  }: UseClientStateQuery<TData>) => {
    return useQuery<QueryClientStateResponse, Error, TData>(["clientStateQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.clientState(request);
    }, options);
  };
  const useClientStates = <TData = QueryClientStatesResponse,>({
    request,
    options
  }: UseClientStatesQuery<TData>) => {
    return useQuery<QueryClientStatesResponse, Error, TData>(["clientStatesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.clientStates(request);
    }, options);
  };
  const useConsensusState = <TData = QueryConsensusStateResponse,>({
    request,
    options
  }: UseConsensusStateQuery<TData>) => {
    return useQuery<QueryConsensusStateResponse, Error, TData>(["consensusStateQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.consensusState(request);
    }, options);
  };
  const useConsensusStates = <TData = QueryConsensusStatesResponse,>({
    request,
    options
  }: UseConsensusStatesQuery<TData>) => {
    return useQuery<QueryConsensusStatesResponse, Error, TData>(["consensusStatesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.consensusStates(request);
    }, options);
  };
  const useClientStatus = <TData = QueryClientStatusResponse,>({
    request,
    options
  }: UseClientStatusQuery<TData>) => {
    return useQuery<QueryClientStatusResponse, Error, TData>(["clientStatusQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.clientStatus(request);
    }, options);
  };
  const useClientParams = <TData = QueryClientParamsResponse,>({
    request,
    options
  }: UseClientParamsQuery<TData>) => {
    return useQuery<QueryClientParamsResponse, Error, TData>(["clientParamsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.clientParams(request);
    }, options);
  };
  const useUpgradedClientState = <TData = QueryUpgradedClientStateResponse,>({
    request,
    options
  }: UseUpgradedClientStateQuery<TData>) => {
    return useQuery<QueryUpgradedClientStateResponse, Error, TData>(["upgradedClientStateQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.upgradedClientState(request);
    }, options);
  };
  const useUpgradedConsensusState = <TData = QueryUpgradedConsensusStateResponse,>({
    request,
    options
  }: UseUpgradedConsensusStateQuery<TData>) => {
    return useQuery<QueryUpgradedConsensusStateResponse, Error, TData>(["upgradedConsensusStateQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.upgradedConsensusState(request);
    }, options);
  };
  return {
    /** ClientState queries an IBC light client. */useClientState,
    /** ClientStates queries all the IBC light clients of a chain. */useClientStates,
    /**
     * ConsensusState queries a consensus state associated with a client state at
     * a given height.
     */
    useConsensusState,
    /**
     * ConsensusStates queries all the consensus state associated with a given
     * client.
     */
    useConsensusStates,
    /** Status queries the status of an IBC client. */useClientStatus,
    /** ClientParams queries all parameters of the ibc client. */useClientParams,
    /** UpgradedClientState queries an Upgraded IBC light client. */useUpgradedClientState,
    /** UpgradedConsensusState queries an Upgraded IBC consensus state. */useUpgradedConsensusState
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryClientStateStore {
    store = new QueryStore<QueryClientStateRequest, QueryClientStateResponse>(queryService?.clientState);
    clientState(request: QueryClientStateRequest) {
      return this.store.getData(request);
    }
  }
  class QueryClientStatesStore {
    store = new QueryStore<QueryClientStatesRequest, QueryClientStatesResponse>(queryService?.clientStates);
    clientStates(request: QueryClientStatesRequest) {
      return this.store.getData(request);
    }
  }
  class QueryConsensusStateStore {
    store = new QueryStore<QueryConsensusStateRequest, QueryConsensusStateResponse>(queryService?.consensusState);
    consensusState(request: QueryConsensusStateRequest) {
      return this.store.getData(request);
    }
  }
  class QueryConsensusStatesStore {
    store = new QueryStore<QueryConsensusStatesRequest, QueryConsensusStatesResponse>(queryService?.consensusStates);
    consensusStates(request: QueryConsensusStatesRequest) {
      return this.store.getData(request);
    }
  }
  class QueryClientStatusStore {
    store = new QueryStore<QueryClientStatusRequest, QueryClientStatusResponse>(queryService?.clientStatus);
    clientStatus(request: QueryClientStatusRequest) {
      return this.store.getData(request);
    }
  }
  class QueryClientParamsStore {
    store = new QueryStore<QueryClientParamsRequest, QueryClientParamsResponse>(queryService?.clientParams);
    clientParams(request: QueryClientParamsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryUpgradedClientStateStore {
    store = new QueryStore<QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse>(queryService?.upgradedClientState);
    upgradedClientState(request: QueryUpgradedClientStateRequest) {
      return this.store.getData(request);
    }
  }
  class QueryUpgradedConsensusStateStore {
    store = new QueryStore<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>(queryService?.upgradedConsensusState);
    upgradedConsensusState(request: QueryUpgradedConsensusStateRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** ClientState queries an IBC light client. */QueryClientStateStore,
    /** ClientStates queries all the IBC light clients of a chain. */QueryClientStatesStore,
    /**
     * ConsensusState queries a consensus state associated with a client state at
     * a given height.
     */
    QueryConsensusStateStore,
    /**
     * ConsensusStates queries all the consensus state associated with a given
     * client.
     */
    QueryConsensusStatesStore,
    /** Status queries the status of an IBC client. */QueryClientStatusStore,
    /** ClientParams queries all parameters of the ibc client. */QueryClientParamsStore,
    /** UpgradedClientState queries an Upgraded IBC light client. */QueryUpgradedClientStateStore,
    /** UpgradedConsensusState queries an Upgraded IBC consensus state. */QueryUpgradedConsensusStateStore
  };
};