import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { ConnectionEnd, ConnectionEndSDKType, IdentifiedConnection, IdentifiedConnectionSDKType } from "./connection";
import { Height, HeightSDKType, IdentifiedClientState, IdentifiedClientStateSDKType } from "../../client/v1/client";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import * as fm from "../../../../grpc-gateway";
import { QueryConnectionRequest, QueryConnectionRequestSDKType, QueryConnectionResponse, QueryConnectionResponseSDKType, QueryConnectionsRequest, QueryConnectionsRequestSDKType, QueryConnectionsResponse, QueryConnectionsResponseSDKType, QueryClientConnectionsRequest, QueryClientConnectionsRequestSDKType, QueryClientConnectionsResponse, QueryClientConnectionsResponseSDKType, QueryConnectionClientStateRequest, QueryConnectionClientStateRequestSDKType, QueryConnectionClientStateResponse, QueryConnectionClientStateResponseSDKType, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateRequestSDKType, QueryConnectionConsensusStateResponse, QueryConnectionConsensusStateResponseSDKType } from "./query";
export class Query {
  /** Connection queries an IBC connection end. */
  static connection(request: QueryConnectionRequest, initRequest?: fm.InitReq): Promise<QueryConnectionResponse> {
    return fm.fetchReq(`/ibc/core/connection/v1/connections/${request["connection_id"]}?${fm.renderURLSearchParams({
      ...request
    }, ["connection_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Connections queries all the IBC connections of a chain. */
  static connections(request: QueryConnectionsRequest, initRequest?: fm.InitReq): Promise<QueryConnectionsResponse> {
    return fm.fetchReq(`/ibc/core/connection/v1/connections?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * ClientConnections queries the connection paths associated with a client
   * state.
   */
  static clientConnections(request: QueryClientConnectionsRequest, initRequest?: fm.InitReq): Promise<QueryClientConnectionsResponse> {
    return fm.fetchReq(`/ibc/core/connection/v1/client_connections/${request["client_id"]}?${fm.renderURLSearchParams({
      ...request
    }, ["client_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * ConnectionClientState queries the client state associated with the
   * connection.
   */
  static connectionClientState(request: QueryConnectionClientStateRequest, initRequest?: fm.InitReq): Promise<QueryConnectionClientStateResponse> {
    return fm.fetchReq(`/ibc/core/connection/v1/connections/${request["connection_id"]}/client_state?${fm.renderURLSearchParams({
      ...request
    }, ["connection_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * ConnectionConsensusState queries the consensus state associated with the
   * connection.
   */
  static connectionConsensusState(request: QueryConnectionConsensusStateRequest, initRequest?: fm.InitReq): Promise<QueryConnectionConsensusStateResponse> {
    return fm.fetchReq(`/ibc/core/connection/v1/connections/${request["connection_id"]}/consensus_state/revision/{revision_number}/height/{revision_height}?${fm.renderURLSearchParams({
      ...request
    }, ["connection_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
}
export class Querier {
  private readonly url: string;
  constructor(url: string) {
    this.url = url;
  }
  /** Connection queries an IBC connection end. */
  async connection(req: QueryConnectionRequest, headers?: HeadersInit): Promise<QueryConnectionResponse> {
    return Query.connection(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Connections queries all the IBC connections of a chain. */
  async connections(req: QueryConnectionsRequest, headers?: HeadersInit): Promise<QueryConnectionsResponse> {
    return Query.connections(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * ClientConnections queries the connection paths associated with a client
   * state.
   */
  async clientConnections(req: QueryClientConnectionsRequest, headers?: HeadersInit): Promise<QueryClientConnectionsResponse> {
    return Query.clientConnections(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * ConnectionClientState queries the client state associated with the
   * connection.
   */
  async connectionClientState(req: QueryConnectionClientStateRequest, headers?: HeadersInit): Promise<QueryConnectionClientStateResponse> {
    return Query.connectionClientState(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * ConnectionConsensusState queries the consensus state associated with the
   * connection.
   */
  async connectionConsensusState(req: QueryConnectionConsensusStateRequest, headers?: HeadersInit): Promise<QueryConnectionConsensusStateResponse> {
    return Query.connectionConsensusState(req, {
      headers,
      pathPrefix: this.url
    });
  }
}