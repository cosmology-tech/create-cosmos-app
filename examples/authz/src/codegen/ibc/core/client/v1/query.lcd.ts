//@ts-nocheck
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { Height, HeightSDKType, IdentifiedClientState, IdentifiedClientStateSDKType, ConsensusStateWithHeight, ConsensusStateWithHeightSDKType, Params, ParamsSDKType } from "./client";
import { setPaginationParams } from "../../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryClientStateRequest, QueryClientStateRequestSDKType, QueryClientStateResponse, QueryClientStateResponseSDKType, QueryClientStatesRequest, QueryClientStatesRequestSDKType, QueryClientStatesResponse, QueryClientStatesResponseSDKType, QueryConsensusStateRequest, QueryConsensusStateRequestSDKType, QueryConsensusStateResponse, QueryConsensusStateResponseSDKType, QueryConsensusStatesRequest, QueryConsensusStatesRequestSDKType, QueryConsensusStatesResponse, QueryConsensusStatesResponseSDKType, QueryClientStatusRequest, QueryClientStatusRequestSDKType, QueryClientStatusResponse, QueryClientStatusResponseSDKType, QueryClientParamsRequest, QueryClientParamsRequestSDKType, QueryClientParamsResponse, QueryClientParamsResponseSDKType, QueryUpgradedClientStateRequest, QueryUpgradedClientStateRequestSDKType, QueryUpgradedClientStateResponse, QueryUpgradedClientStateResponseSDKType, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateRequestSDKType, QueryUpgradedConsensusStateResponse, QueryUpgradedConsensusStateResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* ClientState queries an IBC light client. */
  clientState = async (params: QueryClientStateRequest): Promise<QueryClientStateResponseSDKType> => {
    const endpoint = `ibc/core/client/v1/client_states/${params.clientId}`;
    return await this.req.get<QueryClientStateResponseSDKType>(endpoint);
  };
  /* ClientStates queries all the IBC light clients of a chain. */
  clientStates = async (params: QueryClientStatesRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<QueryClientStatesResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `ibc/core/client/v1/client_states`;
    return await this.req.get<QueryClientStatesResponseSDKType>(endpoint, options);
  };
  /* ConsensusState queries a consensus state associated with a client state at
   a given height. */
  consensusState = async (params: QueryConsensusStateRequest): Promise<QueryConsensusStateResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.latestHeight !== "undefined") {
      options.params.latest_height = params.latestHeight;
    }
    const endpoint = `ibc/core/client/v1/consensus_states/${params.clientId}/revision/${params.revisionNumber}/height/${params.revisionHeight}`;
    return await this.req.get<QueryConsensusStateResponseSDKType>(endpoint, options);
  };
  /* ConsensusStates queries all the consensus state associated with a given
   client. */
  consensusStates = async (params: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `ibc/core/client/v1/consensus_states/${params.clientId}`;
    return await this.req.get<QueryConsensusStatesResponseSDKType>(endpoint, options);
  };
  /* Status queries the status of an IBC client. */
  clientStatus = async (params: QueryClientStatusRequest): Promise<QueryClientStatusResponseSDKType> => {
    const endpoint = `ibc/core/client/v1/client_status/${params.clientId}`;
    return await this.req.get<QueryClientStatusResponseSDKType>(endpoint);
  };
  /* ClientParams queries all parameters of the ibc client. */
  clientParams = async (_params: QueryClientParamsRequest = {}): Promise<QueryClientParamsResponseSDKType> => {
    const endpoint = `ibc/client/v1/params`;
    return await this.req.get<QueryClientParamsResponseSDKType>(endpoint);
  };
  /* UpgradedClientState queries an Upgraded IBC light client. */
  upgradedClientState = async (_params: QueryUpgradedClientStateRequest = {}): Promise<QueryUpgradedClientStateResponseSDKType> => {
    const endpoint = `ibc/core/client/v1/upgraded_client_states`;
    return await this.req.get<QueryUpgradedClientStateResponseSDKType>(endpoint);
  };
  /* UpgradedConsensusState queries an Upgraded IBC consensus state. */
  upgradedConsensusState = async (_params: QueryUpgradedConsensusStateRequest = {}): Promise<QueryUpgradedConsensusStateResponseSDKType> => {
    const endpoint = `ibc/core/client/v1/upgraded_consensus_states`;
    return await this.req.get<QueryUpgradedConsensusStateResponseSDKType>(endpoint);
  };
}