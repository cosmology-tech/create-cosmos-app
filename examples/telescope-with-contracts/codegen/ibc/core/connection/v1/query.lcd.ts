import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { ConnectionEnd, IdentifiedConnection } from "./connection";
import { Height, IdentifiedClientState } from "../../client/v1/client";
import { Any } from "../../../../google/protobuf/any";
import { LCDClient } from "@osmonauts/lcd";
import { setPaginationParams } from "@osmonauts/helpers";
import { QueryConnectionRequest, QueryConnectionResponse, QueryConnectionsRequest, QueryConnectionsResponse, QueryClientConnectionsRequest, QueryClientConnectionsResponse, QueryConnectionClientStateRequest, QueryConnectionClientStateResponse, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }: {
    restEndpoint: string;
  }) {
    super({
      restEndpoint
    });
  }

  /* Connection queries an IBC connection end. */
  async connection(params: QueryConnectionRequest): Promise<QueryConnectionResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.connectionId !== "undefined") {
      options.params.connection_id = params.connectionId;
    }

    const endpoint = `ibc/core/connection/v1/connections/${params.connectionId}`;
    return await this.request<QueryConnectionResponse>(endpoint, options);
  }

  /* Connections queries all the IBC connections of a chain. */
  async connections(params: QueryConnectionsRequest = {
    pagination: undefined
  }): Promise<QueryConnectionsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ibc/core/connection/v1/connections`;
    return await this.request<QueryConnectionsResponse>(endpoint, options);
  }

  /* ClientConnections queries the connection paths associated with a client
  state. */
  async clientConnections(params: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.clientId !== "undefined") {
      options.params.client_id = params.clientId;
    }

    const endpoint = `ibc/core/connection/v1/client_connections/${params.clientId}`;
    return await this.request<QueryClientConnectionsResponse>(endpoint, options);
  }

  /* ConnectionClientState queries the client state associated with the
  connection. */
  async connectionClientState(params: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.connectionId !== "undefined") {
      options.params.connection_id = params.connectionId;
    }

    const endpoint = `ibc/core/connection/v1/connections/${params.connectionId}/client_state`;
    return await this.request<QueryConnectionClientStateResponse>(endpoint, options);
  }

  /* ConnectionConsensusState queries the consensus state associated with the
  connection. */
  async connectionConsensusState(params: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.connectionId !== "undefined") {
      options.params.connection_id = params.connectionId;
    }

    if (typeof params?.revisionNumber !== "undefined") {
      options.params.revision_number = params.revisionNumber;
    }

    if (typeof params?.revisionHeight !== "undefined") {
      options.params.revision_height = params.revisionHeight;
    }

    const endpoint = `ibc/core/connection/v1/connections/${params.connectionId}/consensus_state/revision/${params.revisionNumber}height/${params.revisionHeight}`;
    return await this.request<QueryConnectionConsensusStateResponse>(endpoint, options);
  }

}