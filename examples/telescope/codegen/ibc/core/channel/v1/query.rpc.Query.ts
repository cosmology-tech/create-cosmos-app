import { Rpc } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryChannelRequest, QueryChannelResponse, QueryChannelsRequest, QueryChannelsResponse, QueryConnectionChannelsRequest, QueryConnectionChannelsResponse, QueryChannelClientStateRequest, QueryChannelClientStateResponse, QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse, QueryPacketCommitmentRequest, QueryPacketCommitmentResponse, QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse, QueryPacketReceiptRequest, QueryPacketReceiptResponse, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse, QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse } from "./query";
/** Query provides defines the gRPC querier service */

export interface Query {
  /** Channel queries an IBC Channel. */
  channel(request: QueryChannelRequest): Promise<QueryChannelResponse>;
  /** Channels queries all the IBC channels of a chain. */

  channels(request?: QueryChannelsRequest): Promise<QueryChannelsResponse>;
  /**
   * ConnectionChannels queries all the channels associated with a connection
   * end.
   */

  connectionChannels(request: QueryConnectionChannelsRequest): Promise<QueryConnectionChannelsResponse>;
  /**
   * ChannelClientState queries for the client state for the channel associated
   * with the provided channel identifiers.
   */

  channelClientState(request: QueryChannelClientStateRequest): Promise<QueryChannelClientStateResponse>;
  /**
   * ChannelConsensusState queries for the consensus state for the channel
   * associated with the provided channel identifiers.
   */

  channelConsensusState(request: QueryChannelConsensusStateRequest): Promise<QueryChannelConsensusStateResponse>;
  /** PacketCommitment queries a stored packet commitment hash. */

  packetCommitment(request: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponse>;
  /**
   * PacketCommitments returns all the packet commitments hashes associated
   * with a channel.
   */

  packetCommitments(request: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponse>;
  /**
   * PacketReceipt queries if a given packet sequence has been received on the
   * queried chain
   */

  packetReceipt(request: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponse>;
  /** PacketAcknowledgement queries a stored packet acknowledgement hash. */

  packetAcknowledgement(request: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponse>;
  /**
   * PacketAcknowledgements returns all the packet acknowledgements associated
   * with a channel.
   */

  packetAcknowledgements(request: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponse>;
  /**
   * UnreceivedPackets returns all the unreceived IBC packets associated with a
   * channel and sequences.
   */

  unreceivedPackets(request: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponse>;
  /**
   * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
   * with a channel and sequences.
   */

  unreceivedAcks(request: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponse>;
  /** NextSequenceReceive returns the next receive sequence for a given channel. */

  nextSequenceReceive(request: QueryNextSequenceReceiveRequest): Promise<QueryNextSequenceReceiveResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.channel = this.channel.bind(this);
    this.channels = this.channels.bind(this);
    this.connectionChannels = this.connectionChannels.bind(this);
    this.channelClientState = this.channelClientState.bind(this);
    this.channelConsensusState = this.channelConsensusState.bind(this);
    this.packetCommitment = this.packetCommitment.bind(this);
    this.packetCommitments = this.packetCommitments.bind(this);
    this.packetReceipt = this.packetReceipt.bind(this);
    this.packetAcknowledgement = this.packetAcknowledgement.bind(this);
    this.packetAcknowledgements = this.packetAcknowledgements.bind(this);
    this.unreceivedPackets = this.unreceivedPackets.bind(this);
    this.unreceivedAcks = this.unreceivedAcks.bind(this);
    this.nextSequenceReceive = this.nextSequenceReceive.bind(this);
  }

  channel(request: QueryChannelRequest): Promise<QueryChannelResponse> {
    const data = QueryChannelRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "Channel", data);
    return promise.then(data => QueryChannelResponse.decode(new _m0.Reader(data)));
  }

  channels(request: QueryChannelsRequest = {
    pagination: undefined
  }): Promise<QueryChannelsResponse> {
    const data = QueryChannelsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "Channels", data);
    return promise.then(data => QueryChannelsResponse.decode(new _m0.Reader(data)));
  }

  connectionChannels(request: QueryConnectionChannelsRequest): Promise<QueryConnectionChannelsResponse> {
    const data = QueryConnectionChannelsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "ConnectionChannels", data);
    return promise.then(data => QueryConnectionChannelsResponse.decode(new _m0.Reader(data)));
  }

  channelClientState(request: QueryChannelClientStateRequest): Promise<QueryChannelClientStateResponse> {
    const data = QueryChannelClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "ChannelClientState", data);
    return promise.then(data => QueryChannelClientStateResponse.decode(new _m0.Reader(data)));
  }

  channelConsensusState(request: QueryChannelConsensusStateRequest): Promise<QueryChannelConsensusStateResponse> {
    const data = QueryChannelConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "ChannelConsensusState", data);
    return promise.then(data => QueryChannelConsensusStateResponse.decode(new _m0.Reader(data)));
  }

  packetCommitment(request: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponse> {
    const data = QueryPacketCommitmentRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketCommitment", data);
    return promise.then(data => QueryPacketCommitmentResponse.decode(new _m0.Reader(data)));
  }

  packetCommitments(request: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponse> {
    const data = QueryPacketCommitmentsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketCommitments", data);
    return promise.then(data => QueryPacketCommitmentsResponse.decode(new _m0.Reader(data)));
  }

  packetReceipt(request: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponse> {
    const data = QueryPacketReceiptRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketReceipt", data);
    return promise.then(data => QueryPacketReceiptResponse.decode(new _m0.Reader(data)));
  }

  packetAcknowledgement(request: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponse> {
    const data = QueryPacketAcknowledgementRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketAcknowledgement", data);
    return promise.then(data => QueryPacketAcknowledgementResponse.decode(new _m0.Reader(data)));
  }

  packetAcknowledgements(request: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponse> {
    const data = QueryPacketAcknowledgementsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketAcknowledgements", data);
    return promise.then(data => QueryPacketAcknowledgementsResponse.decode(new _m0.Reader(data)));
  }

  unreceivedPackets(request: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponse> {
    const data = QueryUnreceivedPacketsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "UnreceivedPackets", data);
    return promise.then(data => QueryUnreceivedPacketsResponse.decode(new _m0.Reader(data)));
  }

  unreceivedAcks(request: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponse> {
    const data = QueryUnreceivedAcksRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "UnreceivedAcks", data);
    return promise.then(data => QueryUnreceivedAcksResponse.decode(new _m0.Reader(data)));
  }

  nextSequenceReceive(request: QueryNextSequenceReceiveRequest): Promise<QueryNextSequenceReceiveResponse> {
    const data = QueryNextSequenceReceiveRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "NextSequenceReceive", data);
    return promise.then(data => QueryNextSequenceReceiveResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    channel(request: QueryChannelRequest): Promise<QueryChannelResponse> {
      return queryService.channel(request);
    },

    channels(request?: QueryChannelsRequest): Promise<QueryChannelsResponse> {
      return queryService.channels(request);
    },

    connectionChannels(request: QueryConnectionChannelsRequest): Promise<QueryConnectionChannelsResponse> {
      return queryService.connectionChannels(request);
    },

    channelClientState(request: QueryChannelClientStateRequest): Promise<QueryChannelClientStateResponse> {
      return queryService.channelClientState(request);
    },

    channelConsensusState(request: QueryChannelConsensusStateRequest): Promise<QueryChannelConsensusStateResponse> {
      return queryService.channelConsensusState(request);
    },

    packetCommitment(request: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponse> {
      return queryService.packetCommitment(request);
    },

    packetCommitments(request: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponse> {
      return queryService.packetCommitments(request);
    },

    packetReceipt(request: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponse> {
      return queryService.packetReceipt(request);
    },

    packetAcknowledgement(request: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponse> {
      return queryService.packetAcknowledgement(request);
    },

    packetAcknowledgements(request: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponse> {
      return queryService.packetAcknowledgements(request);
    },

    unreceivedPackets(request: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponse> {
      return queryService.unreceivedPackets(request);
    },

    unreceivedAcks(request: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponse> {
      return queryService.unreceivedAcks(request);
    },

    nextSequenceReceive(request: QueryNextSequenceReceiveRequest): Promise<QueryNextSequenceReceiveResponse> {
      return queryService.nextSequenceReceive(request);
    }

  };
};
export interface UseChannelQuery<TData> extends ReactQueryParams<QueryChannelResponse, TData> {
  request: QueryChannelRequest;
}
export interface UseChannelsQuery<TData> extends ReactQueryParams<QueryChannelsResponse, TData> {
  request?: QueryChannelsRequest;
}
export interface UseConnectionChannelsQuery<TData> extends ReactQueryParams<QueryConnectionChannelsResponse, TData> {
  request: QueryConnectionChannelsRequest;
}
export interface UseChannelClientStateQuery<TData> extends ReactQueryParams<QueryChannelClientStateResponse, TData> {
  request: QueryChannelClientStateRequest;
}
export interface UseChannelConsensusStateQuery<TData> extends ReactQueryParams<QueryChannelConsensusStateResponse, TData> {
  request: QueryChannelConsensusStateRequest;
}
export interface UsePacketCommitmentQuery<TData> extends ReactQueryParams<QueryPacketCommitmentResponse, TData> {
  request: QueryPacketCommitmentRequest;
}
export interface UsePacketCommitmentsQuery<TData> extends ReactQueryParams<QueryPacketCommitmentsResponse, TData> {
  request: QueryPacketCommitmentsRequest;
}
export interface UsePacketReceiptQuery<TData> extends ReactQueryParams<QueryPacketReceiptResponse, TData> {
  request: QueryPacketReceiptRequest;
}
export interface UsePacketAcknowledgementQuery<TData> extends ReactQueryParams<QueryPacketAcknowledgementResponse, TData> {
  request: QueryPacketAcknowledgementRequest;
}
export interface UsePacketAcknowledgementsQuery<TData> extends ReactQueryParams<QueryPacketAcknowledgementsResponse, TData> {
  request: QueryPacketAcknowledgementsRequest;
}
export interface UseUnreceivedPacketsQuery<TData> extends ReactQueryParams<QueryUnreceivedPacketsResponse, TData> {
  request: QueryUnreceivedPacketsRequest;
}
export interface UseUnreceivedAcksQuery<TData> extends ReactQueryParams<QueryUnreceivedAcksResponse, TData> {
  request: QueryUnreceivedAcksRequest;
}
export interface UseNextSequenceReceiveQuery<TData> extends ReactQueryParams<QueryNextSequenceReceiveResponse, TData> {
  request: QueryNextSequenceReceiveRequest;
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

  const useChannel = <TData = QueryChannelResponse,>({
    request,
    options
  }: UseChannelQuery<TData>) => {
    return useQuery<QueryChannelResponse, Error, TData>(["channelQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.channel(request);
    }, options);
  };

  const useChannels = <TData = QueryChannelsResponse,>({
    request,
    options
  }: UseChannelsQuery<TData>) => {
    return useQuery<QueryChannelsResponse, Error, TData>(["channelsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.channels(request);
    }, options);
  };

  const useConnectionChannels = <TData = QueryConnectionChannelsResponse,>({
    request,
    options
  }: UseConnectionChannelsQuery<TData>) => {
    return useQuery<QueryConnectionChannelsResponse, Error, TData>(["connectionChannelsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.connectionChannels(request);
    }, options);
  };

  const useChannelClientState = <TData = QueryChannelClientStateResponse,>({
    request,
    options
  }: UseChannelClientStateQuery<TData>) => {
    return useQuery<QueryChannelClientStateResponse, Error, TData>(["channelClientStateQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.channelClientState(request);
    }, options);
  };

  const useChannelConsensusState = <TData = QueryChannelConsensusStateResponse,>({
    request,
    options
  }: UseChannelConsensusStateQuery<TData>) => {
    return useQuery<QueryChannelConsensusStateResponse, Error, TData>(["channelConsensusStateQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.channelConsensusState(request);
    }, options);
  };

  const usePacketCommitment = <TData = QueryPacketCommitmentResponse,>({
    request,
    options
  }: UsePacketCommitmentQuery<TData>) => {
    return useQuery<QueryPacketCommitmentResponse, Error, TData>(["packetCommitmentQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.packetCommitment(request);
    }, options);
  };

  const usePacketCommitments = <TData = QueryPacketCommitmentsResponse,>({
    request,
    options
  }: UsePacketCommitmentsQuery<TData>) => {
    return useQuery<QueryPacketCommitmentsResponse, Error, TData>(["packetCommitmentsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.packetCommitments(request);
    }, options);
  };

  const usePacketReceipt = <TData = QueryPacketReceiptResponse,>({
    request,
    options
  }: UsePacketReceiptQuery<TData>) => {
    return useQuery<QueryPacketReceiptResponse, Error, TData>(["packetReceiptQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.packetReceipt(request);
    }, options);
  };

  const usePacketAcknowledgement = <TData = QueryPacketAcknowledgementResponse,>({
    request,
    options
  }: UsePacketAcknowledgementQuery<TData>) => {
    return useQuery<QueryPacketAcknowledgementResponse, Error, TData>(["packetAcknowledgementQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.packetAcknowledgement(request);
    }, options);
  };

  const usePacketAcknowledgements = <TData = QueryPacketAcknowledgementsResponse,>({
    request,
    options
  }: UsePacketAcknowledgementsQuery<TData>) => {
    return useQuery<QueryPacketAcknowledgementsResponse, Error, TData>(["packetAcknowledgementsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.packetAcknowledgements(request);
    }, options);
  };

  const useUnreceivedPackets = <TData = QueryUnreceivedPacketsResponse,>({
    request,
    options
  }: UseUnreceivedPacketsQuery<TData>) => {
    return useQuery<QueryUnreceivedPacketsResponse, Error, TData>(["unreceivedPacketsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.unreceivedPackets(request);
    }, options);
  };

  const useUnreceivedAcks = <TData = QueryUnreceivedAcksResponse,>({
    request,
    options
  }: UseUnreceivedAcksQuery<TData>) => {
    return useQuery<QueryUnreceivedAcksResponse, Error, TData>(["unreceivedAcksQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.unreceivedAcks(request);
    }, options);
  };

  const useNextSequenceReceive = <TData = QueryNextSequenceReceiveResponse,>({
    request,
    options
  }: UseNextSequenceReceiveQuery<TData>) => {
    return useQuery<QueryNextSequenceReceiveResponse, Error, TData>(["nextSequenceReceiveQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.nextSequenceReceive(request);
    }, options);
  };

  return {
    /** Channel queries an IBC Channel. */
    useChannel,

    /** Channels queries all the IBC channels of a chain. */
    useChannels,

    /**
     * ConnectionChannels queries all the channels associated with a connection
     * end.
     */
    useConnectionChannels,

    /**
     * ChannelClientState queries for the client state for the channel associated
     * with the provided channel identifiers.
     */
    useChannelClientState,

    /**
     * ChannelConsensusState queries for the consensus state for the channel
     * associated with the provided channel identifiers.
     */
    useChannelConsensusState,

    /** PacketCommitment queries a stored packet commitment hash. */
    usePacketCommitment,

    /**
     * PacketCommitments returns all the packet commitments hashes associated
     * with a channel.
     */
    usePacketCommitments,

    /**
     * PacketReceipt queries if a given packet sequence has been received on the
     * queried chain
     */
    usePacketReceipt,

    /** PacketAcknowledgement queries a stored packet acknowledgement hash. */
    usePacketAcknowledgement,

    /**
     * PacketAcknowledgements returns all the packet acknowledgements associated
     * with a channel.
     */
    usePacketAcknowledgements,

    /**
     * UnreceivedPackets returns all the unreceived IBC packets associated with a
     * channel and sequences.
     */
    useUnreceivedPackets,

    /**
     * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
     * with a channel and sequences.
     */
    useUnreceivedAcks,

    /** NextSequenceReceive returns the next receive sequence for a given channel. */
    useNextSequenceReceive
  };
};