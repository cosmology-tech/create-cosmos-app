import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryConnectionRequest, QueryConnectionResponse, QueryConnectionResponseSDKType, QueryConnectionsRequest, QueryConnectionsResponse, QueryConnectionsResponseSDKType, QueryClientConnectionsRequest, QueryClientConnectionsResponse, QueryClientConnectionsResponseSDKType, QueryConnectionClientStateRequest, QueryConnectionClientStateResponse, QueryConnectionClientStateResponseSDKType, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse, QueryConnectionConsensusStateResponseSDKType } from "./query";
/** Query defines the RPC service */

export interface Query {
  connection(request: QueryConnectionRequest): Promise<QueryConnectionResponseSDKType>;
  /*Connection queries an IBC connection end.*/

  connections(request?: QueryConnectionsRequest): Promise<QueryConnectionsResponseSDKType>;
  /*Connections queries all the IBC connections of a chain.*/

  clientConnections(request: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponseSDKType>;
  /*ClientConnections queries the connection paths associated with a client
  state.*/

  connectionClientState(request: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponseSDKType>;
  /*ConnectionClientState queries the client state associated with the
  connection.*/

  connectionConsensusState(request: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponseSDKType>;
  /*ConnectionConsensusState queries the consensus state associated with the
  connection.*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.connection = this.connection.bind(this);
    this.connections = this.connections.bind(this);
    this.clientConnections = this.clientConnections.bind(this);
    this.connectionClientState = this.connectionClientState.bind(this);
    this.connectionConsensusState = this.connectionConsensusState.bind(this);
  }

  connection(request: QueryConnectionRequest): Promise<QueryConnectionResponseSDKType> {
    const data = QueryConnectionRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "Connection", data);
    return promise.then(data => QueryConnectionResponse.decode(new _m0.Reader(data)));
  }

  connections(request: QueryConnectionsRequest = {
    pagination: undefined
  }): Promise<QueryConnectionsResponseSDKType> {
    const data = QueryConnectionsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "Connections", data);
    return promise.then(data => QueryConnectionsResponse.decode(new _m0.Reader(data)));
  }

  clientConnections(request: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponseSDKType> {
    const data = QueryClientConnectionsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "ClientConnections", data);
    return promise.then(data => QueryClientConnectionsResponse.decode(new _m0.Reader(data)));
  }

  connectionClientState(request: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponseSDKType> {
    const data = QueryConnectionClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionClientState", data);
    return promise.then(data => QueryConnectionClientStateResponse.decode(new _m0.Reader(data)));
  }

  connectionConsensusState(request: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponseSDKType> {
    const data = QueryConnectionConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionConsensusState", data);
    return promise.then(data => QueryConnectionConsensusStateResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    connection(request: QueryConnectionRequest): Promise<QueryConnectionResponseSDKType> {
      return queryService.connection(request);
    },

    connections(request?: QueryConnectionsRequest): Promise<QueryConnectionsResponseSDKType> {
      return queryService.connections(request);
    },

    clientConnections(request: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponseSDKType> {
      return queryService.clientConnections(request);
    },

    connectionClientState(request: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponseSDKType> {
      return queryService.connectionClientState(request);
    },

    connectionConsensusState(request: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponseSDKType> {
      return queryService.connectionConsensusState(request);
    }

  };
};