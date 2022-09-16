import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { Height, IdentifiedClientState, ConsensusStateWithHeight, Params } from "./client";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClientStateRequest, QueryClientStateResponse, QueryClientStatesRequest, QueryClientStatesResponse, QueryConsensusStateRequest, QueryConsensusStateResponse, QueryConsensusStatesRequest, QueryConsensusStatesResponse, QueryClientStatusRequest, QueryClientStatusResponse, QueryClientParamsRequest, QueryClientParamsResponse, QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse } from "./query";

/** Query defines the RPC service */
export interface Query {
  clientState(request: QueryClientStateRequest): Promise<QueryClientStateResponse>;
  /*ClientState queries an IBC light client.*/

  clientStates(request: QueryClientStatesRequest): Promise<QueryClientStatesResponse>;
  /*ClientStates queries all the IBC light clients of a chain.*/

  consensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse>;
  /*ConsensusState queries a consensus state associated with a client state at
  a given height.*/

  consensusStates(request: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponse>;
  /*ConsensusStates queries all the consensus state associated with a given
  client.*/

  clientStatus(request: QueryClientStatusRequest): Promise<QueryClientStatusResponse>;
  /*Status queries the status of an IBC client.*/

  clientParams(request: QueryClientParamsRequest): Promise<QueryClientParamsResponse>;
  /*ClientParams queries all parameters of the ibc client.*/

  upgradedClientState(request: QueryUpgradedClientStateRequest): Promise<QueryUpgradedClientStateResponse>;
  /*UpgradedClientState queries an Upgraded IBC light client.*/

  upgradedConsensusState(request: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse>;
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

  clientState(request: QueryClientStateRequest): Promise<QueryClientStateResponse> {
    const data = QueryClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientState", data);
    return promise.then(data => QueryClientStateResponse.decode(new _m0.Reader(data)));
  }

  clientStates(request: QueryClientStatesRequest): Promise<QueryClientStatesResponse> {
    const data = QueryClientStatesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStates", data);
    return promise.then(data => QueryClientStatesResponse.decode(new _m0.Reader(data)));
  }

  consensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse> {
    const data = QueryConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusState", data);
    return promise.then(data => QueryConsensusStateResponse.decode(new _m0.Reader(data)));
  }

  consensusStates(request: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponse> {
    const data = QueryConsensusStatesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusStates", data);
    return promise.then(data => QueryConsensusStatesResponse.decode(new _m0.Reader(data)));
  }

  clientStatus(request: QueryClientStatusRequest): Promise<QueryClientStatusResponse> {
    const data = QueryClientStatusRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStatus", data);
    return promise.then(data => QueryClientStatusResponse.decode(new _m0.Reader(data)));
  }

  clientParams(request: QueryClientParamsRequest): Promise<QueryClientParamsResponse> {
    const data = QueryClientParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientParams", data);
    return promise.then(data => QueryClientParamsResponse.decode(new _m0.Reader(data)));
  }

  upgradedClientState(request: QueryUpgradedClientStateRequest): Promise<QueryUpgradedClientStateResponse> {
    const data = QueryUpgradedClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedClientState", data);
    return promise.then(data => QueryUpgradedClientStateResponse.decode(new _m0.Reader(data)));
  }

  upgradedConsensusState(request: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse> {
    const data = QueryUpgradedConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedConsensusState", data);
    return promise.then(data => QueryUpgradedConsensusStateResponse.decode(new _m0.Reader(data)));
  }

}