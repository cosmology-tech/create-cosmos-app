import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryClientStateRequest, QueryClientStateResponse, QueryClientStateResponseSDKType, QueryClientStatesRequest, QueryClientStatesResponse, QueryClientStatesResponseSDKType, QueryConsensusStateRequest, QueryConsensusStateResponse, QueryConsensusStateResponseSDKType, QueryConsensusStatesRequest, QueryConsensusStatesResponse, QueryConsensusStatesResponseSDKType, QueryClientStatusRequest, QueryClientStatusResponse, QueryClientStatusResponseSDKType, QueryClientParamsRequest, QueryClientParamsResponse, QueryClientParamsResponseSDKType, QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse, QueryUpgradedClientStateResponseSDKType, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse, QueryUpgradedConsensusStateResponseSDKType } from "./query";
/** Query defines the RPC service */

export interface Query {
  clientState(request: QueryClientStateRequest): Promise<QueryClientStateResponseSDKType>;
  /*ClientState queries an IBC light client.*/

  clientStates(request?: QueryClientStatesRequest): Promise<QueryClientStatesResponseSDKType>;
  /*ClientStates queries all the IBC light clients of a chain.*/

  consensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponseSDKType>;
  /*ConsensusState queries a consensus state associated with a client state at
  a given height.*/

  consensusStates(request: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponseSDKType>;
  /*ConsensusStates queries all the consensus state associated with a given
  client.*/

  clientStatus(request: QueryClientStatusRequest): Promise<QueryClientStatusResponseSDKType>;
  /*Status queries the status of an IBC client.*/

  clientParams(request?: QueryClientParamsRequest): Promise<QueryClientParamsResponseSDKType>;
  /*ClientParams queries all parameters of the ibc client.*/

  upgradedClientState(request?: QueryUpgradedClientStateRequest): Promise<QueryUpgradedClientStateResponseSDKType>;
  /*UpgradedClientState queries an Upgraded IBC light client.*/

  upgradedConsensusState(request?: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponseSDKType>;
  /*UpgradedConsensusState queries an Upgraded IBC consensus state.*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.clientState = this.clientState.bind(this);
    this.clientStates = this.clientStates.bind(this);
    this.consensusState = this.consensusState.bind(this);
    this.consensusStates = this.consensusStates.bind(this);
    this.clientStatus = this.clientStatus.bind(this);
    this.clientParams = this.clientParams.bind(this);
    this.upgradedClientState = this.upgradedClientState.bind(this);
    this.upgradedConsensusState = this.upgradedConsensusState.bind(this);
  }

  clientState(request: QueryClientStateRequest): Promise<QueryClientStateResponseSDKType> {
    const data = QueryClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientState", data);
    return promise.then(data => QueryClientStateResponse.decode(new _m0.Reader(data)));
  }

  clientStates(request: QueryClientStatesRequest = {
    pagination: undefined
  }): Promise<QueryClientStatesResponseSDKType> {
    const data = QueryClientStatesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStates", data);
    return promise.then(data => QueryClientStatesResponse.decode(new _m0.Reader(data)));
  }

  consensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponseSDKType> {
    const data = QueryConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusState", data);
    return promise.then(data => QueryConsensusStateResponse.decode(new _m0.Reader(data)));
  }

  consensusStates(request: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponseSDKType> {
    const data = QueryConsensusStatesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusStates", data);
    return promise.then(data => QueryConsensusStatesResponse.decode(new _m0.Reader(data)));
  }

  clientStatus(request: QueryClientStatusRequest): Promise<QueryClientStatusResponseSDKType> {
    const data = QueryClientStatusRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStatus", data);
    return promise.then(data => QueryClientStatusResponse.decode(new _m0.Reader(data)));
  }

  clientParams(request: QueryClientParamsRequest = {}): Promise<QueryClientParamsResponseSDKType> {
    const data = QueryClientParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientParams", data);
    return promise.then(data => QueryClientParamsResponse.decode(new _m0.Reader(data)));
  }

  upgradedClientState(request: QueryUpgradedClientStateRequest = {}): Promise<QueryUpgradedClientStateResponseSDKType> {
    const data = QueryUpgradedClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedClientState", data);
    return promise.then(data => QueryUpgradedClientStateResponse.decode(new _m0.Reader(data)));
  }

  upgradedConsensusState(request: QueryUpgradedConsensusStateRequest = {}): Promise<QueryUpgradedConsensusStateResponseSDKType> {
    const data = QueryUpgradedConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedConsensusState", data);
    return promise.then(data => QueryUpgradedConsensusStateResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    clientState(request: QueryClientStateRequest): Promise<QueryClientStateResponseSDKType> {
      return queryService.clientState(request);
    },

    clientStates(request?: QueryClientStatesRequest): Promise<QueryClientStatesResponseSDKType> {
      return queryService.clientStates(request);
    },

    consensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponseSDKType> {
      return queryService.consensusState(request);
    },

    consensusStates(request: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponseSDKType> {
      return queryService.consensusStates(request);
    },

    clientStatus(request: QueryClientStatusRequest): Promise<QueryClientStatusResponseSDKType> {
      return queryService.clientStatus(request);
    },

    clientParams(request?: QueryClientParamsRequest): Promise<QueryClientParamsResponseSDKType> {
      return queryService.clientParams(request);
    },

    upgradedClientState(request?: QueryUpgradedClientStateRequest): Promise<QueryUpgradedClientStateResponseSDKType> {
      return queryService.upgradedClientState(request);
    },

    upgradedConsensusState(request?: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponseSDKType> {
      return queryService.upgradedConsensusState(request);
    }

  };
};