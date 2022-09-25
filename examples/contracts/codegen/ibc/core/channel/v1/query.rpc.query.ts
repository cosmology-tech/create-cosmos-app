import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryChannelRequest, QueryChannelResponse, QueryChannelResponseSDKType, QueryChannelsRequest, QueryChannelsResponse, QueryChannelsResponseSDKType, QueryConnectionChannelsRequest, QueryConnectionChannelsResponse, QueryConnectionChannelsResponseSDKType, QueryChannelClientStateRequest, QueryChannelClientStateResponse, QueryChannelClientStateResponseSDKType, QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse, QueryChannelConsensusStateResponseSDKType, QueryPacketCommitmentRequest, QueryPacketCommitmentResponse, QueryPacketCommitmentResponseSDKType, QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse, QueryPacketCommitmentsResponseSDKType, QueryPacketReceiptRequest, QueryPacketReceiptResponse, QueryPacketReceiptResponseSDKType, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementResponseSDKType, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, QueryPacketAcknowledgementsResponseSDKType, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse, QueryUnreceivedPacketsResponseSDKType, QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse, QueryUnreceivedAcksResponseSDKType, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse, QueryNextSequenceReceiveResponseSDKType } from "./query";
/** Query defines the RPC service */

export interface Query {
  channel(request: QueryChannelRequest): Promise<QueryChannelResponseSDKType>;
  /*Channel queries an IBC Channel.*/

  channels(request?: QueryChannelsRequest): Promise<QueryChannelsResponseSDKType>;
  /*Channels queries all the IBC channels of a chain.*/

  connectionChannels(request: QueryConnectionChannelsRequest): Promise<QueryConnectionChannelsResponseSDKType>;
  /*ConnectionChannels queries all the channels associated with a connection
  end.*/

  channelClientState(request: QueryChannelClientStateRequest): Promise<QueryChannelClientStateResponseSDKType>;
  /*ChannelClientState queries for the client state for the channel associated
  with the provided channel identifiers.*/

  channelConsensusState(request: QueryChannelConsensusStateRequest): Promise<QueryChannelConsensusStateResponseSDKType>;
  /*ChannelConsensusState queries for the consensus state for the channel
  associated with the provided channel identifiers.*/

  packetCommitment(request: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponseSDKType>;
  /*PacketCommitment queries a stored packet commitment hash.*/

  packetCommitments(request: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponseSDKType>;
  /*PacketCommitments returns all the packet commitments hashes associated
  with a channel.*/

  packetReceipt(request: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponseSDKType>;
  /*PacketReceipt queries if a given packet sequence has been received on the
  queried chain*/

  packetAcknowledgement(request: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponseSDKType>;
  /*PacketAcknowledgement queries a stored packet acknowledgement hash.*/

  packetAcknowledgements(request: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponseSDKType>;
  /*PacketAcknowledgements returns all the packet acknowledgements associated
  with a channel.*/

  unreceivedPackets(request: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponseSDKType>;
  /*UnreceivedPackets returns all the unreceived IBC packets associated with a
  channel and sequences.*/

  unreceivedAcks(request: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponseSDKType>;
  /*UnreceivedAcks returns all the unreceived IBC acknowledgements associated
  with a channel and sequences.*/

  nextSequenceReceive(request: QueryNextSequenceReceiveRequest): Promise<QueryNextSequenceReceiveResponseSDKType>;
  /*NextSequenceReceive returns the next receive sequence for a given channel.*/

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

  channel(request: QueryChannelRequest): Promise<QueryChannelResponseSDKType> {
    const data = QueryChannelRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "Channel", data);
    return promise.then(data => QueryChannelResponse.decode(new _m0.Reader(data)));
  }

  channels(request: QueryChannelsRequest = {
    pagination: undefined
  }): Promise<QueryChannelsResponseSDKType> {
    const data = QueryChannelsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "Channels", data);
    return promise.then(data => QueryChannelsResponse.decode(new _m0.Reader(data)));
  }

  connectionChannels(request: QueryConnectionChannelsRequest): Promise<QueryConnectionChannelsResponseSDKType> {
    const data = QueryConnectionChannelsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "ConnectionChannels", data);
    return promise.then(data => QueryConnectionChannelsResponse.decode(new _m0.Reader(data)));
  }

  channelClientState(request: QueryChannelClientStateRequest): Promise<QueryChannelClientStateResponseSDKType> {
    const data = QueryChannelClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "ChannelClientState", data);
    return promise.then(data => QueryChannelClientStateResponse.decode(new _m0.Reader(data)));
  }

  channelConsensusState(request: QueryChannelConsensusStateRequest): Promise<QueryChannelConsensusStateResponseSDKType> {
    const data = QueryChannelConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "ChannelConsensusState", data);
    return promise.then(data => QueryChannelConsensusStateResponse.decode(new _m0.Reader(data)));
  }

  packetCommitment(request: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponseSDKType> {
    const data = QueryPacketCommitmentRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketCommitment", data);
    return promise.then(data => QueryPacketCommitmentResponse.decode(new _m0.Reader(data)));
  }

  packetCommitments(request: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponseSDKType> {
    const data = QueryPacketCommitmentsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketCommitments", data);
    return promise.then(data => QueryPacketCommitmentsResponse.decode(new _m0.Reader(data)));
  }

  packetReceipt(request: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponseSDKType> {
    const data = QueryPacketReceiptRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketReceipt", data);
    return promise.then(data => QueryPacketReceiptResponse.decode(new _m0.Reader(data)));
  }

  packetAcknowledgement(request: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponseSDKType> {
    const data = QueryPacketAcknowledgementRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketAcknowledgement", data);
    return promise.then(data => QueryPacketAcknowledgementResponse.decode(new _m0.Reader(data)));
  }

  packetAcknowledgements(request: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponseSDKType> {
    const data = QueryPacketAcknowledgementsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketAcknowledgements", data);
    return promise.then(data => QueryPacketAcknowledgementsResponse.decode(new _m0.Reader(data)));
  }

  unreceivedPackets(request: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponseSDKType> {
    const data = QueryUnreceivedPacketsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "UnreceivedPackets", data);
    return promise.then(data => QueryUnreceivedPacketsResponse.decode(new _m0.Reader(data)));
  }

  unreceivedAcks(request: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponseSDKType> {
    const data = QueryUnreceivedAcksRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "UnreceivedAcks", data);
    return promise.then(data => QueryUnreceivedAcksResponse.decode(new _m0.Reader(data)));
  }

  nextSequenceReceive(request: QueryNextSequenceReceiveRequest): Promise<QueryNextSequenceReceiveResponseSDKType> {
    const data = QueryNextSequenceReceiveRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "NextSequenceReceive", data);
    return promise.then(data => QueryNextSequenceReceiveResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    channel(request: QueryChannelRequest): Promise<QueryChannelResponseSDKType> {
      return queryService.channel(request);
    },

    channels(request?: QueryChannelsRequest): Promise<QueryChannelsResponseSDKType> {
      return queryService.channels(request);
    },

    connectionChannels(request: QueryConnectionChannelsRequest): Promise<QueryConnectionChannelsResponseSDKType> {
      return queryService.connectionChannels(request);
    },

    channelClientState(request: QueryChannelClientStateRequest): Promise<QueryChannelClientStateResponseSDKType> {
      return queryService.channelClientState(request);
    },

    channelConsensusState(request: QueryChannelConsensusStateRequest): Promise<QueryChannelConsensusStateResponseSDKType> {
      return queryService.channelConsensusState(request);
    },

    packetCommitment(request: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponseSDKType> {
      return queryService.packetCommitment(request);
    },

    packetCommitments(request: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponseSDKType> {
      return queryService.packetCommitments(request);
    },

    packetReceipt(request: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponseSDKType> {
      return queryService.packetReceipt(request);
    },

    packetAcknowledgement(request: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponseSDKType> {
      return queryService.packetAcknowledgement(request);
    },

    packetAcknowledgements(request: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponseSDKType> {
      return queryService.packetAcknowledgements(request);
    },

    unreceivedPackets(request: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponseSDKType> {
      return queryService.unreceivedPackets(request);
    },

    unreceivedAcks(request: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponseSDKType> {
      return queryService.unreceivedAcks(request);
    },

    nextSequenceReceive(request: QueryNextSequenceReceiveRequest): Promise<QueryNextSequenceReceiveResponseSDKType> {
      return queryService.nextSequenceReceive(request);
    }

  };
};