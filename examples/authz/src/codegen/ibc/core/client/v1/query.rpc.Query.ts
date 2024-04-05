//@ts-nocheck
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { Height, HeightSDKType, IdentifiedClientState, IdentifiedClientStateSDKType, ConsensusStateWithHeight, ConsensusStateWithHeightSDKType, Params, ParamsSDKType } from "./client";
import { TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryClientStateRequest, QueryClientStateRequestSDKType, QueryClientStateResponse, QueryClientStateResponseSDKType, QueryClientStatesRequest, QueryClientStatesRequestSDKType, QueryClientStatesResponse, QueryClientStatesResponseSDKType, QueryConsensusStateRequest, QueryConsensusStateRequestSDKType, QueryConsensusStateResponse, QueryConsensusStateResponseSDKType, QueryConsensusStatesRequest, QueryConsensusStatesRequestSDKType, QueryConsensusStatesResponse, QueryConsensusStatesResponseSDKType, QueryClientStatusRequest, QueryClientStatusRequestSDKType, QueryClientStatusResponse, QueryClientStatusResponseSDKType, QueryClientParamsRequest, QueryClientParamsRequestSDKType, QueryClientParamsResponse, QueryClientParamsResponseSDKType, QueryUpgradedClientStateRequest, QueryUpgradedClientStateRequestSDKType, QueryUpgradedClientStateResponse, QueryUpgradedClientStateResponseSDKType, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateRequestSDKType, QueryUpgradedConsensusStateResponse, QueryUpgradedConsensusStateResponseSDKType } from "./query";
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
    pagination: PageRequest.fromPartial({})
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