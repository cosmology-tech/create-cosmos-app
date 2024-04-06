//@ts-nocheck
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Channel, ChannelSDKType, IdentifiedChannel, IdentifiedChannelSDKType, PacketState, PacketStateSDKType } from "./channel";
import { Height, HeightSDKType, IdentifiedClientState, IdentifiedClientStateSDKType } from "../../client/v1/client";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { setPaginationParams } from "../../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryChannelRequest, QueryChannelRequestSDKType, QueryChannelResponse, QueryChannelResponseSDKType, QueryChannelsRequest, QueryChannelsRequestSDKType, QueryChannelsResponse, QueryChannelsResponseSDKType, QueryConnectionChannelsRequest, QueryConnectionChannelsRequestSDKType, QueryConnectionChannelsResponse, QueryConnectionChannelsResponseSDKType, QueryChannelClientStateRequest, QueryChannelClientStateRequestSDKType, QueryChannelClientStateResponse, QueryChannelClientStateResponseSDKType, QueryChannelConsensusStateRequest, QueryChannelConsensusStateRequestSDKType, QueryChannelConsensusStateResponse, QueryChannelConsensusStateResponseSDKType, QueryPacketCommitmentRequest, QueryPacketCommitmentRequestSDKType, QueryPacketCommitmentResponse, QueryPacketCommitmentResponseSDKType, QueryPacketCommitmentsRequest, QueryPacketCommitmentsRequestSDKType, QueryPacketCommitmentsResponse, QueryPacketCommitmentsResponseSDKType, QueryPacketReceiptRequest, QueryPacketReceiptRequestSDKType, QueryPacketReceiptResponse, QueryPacketReceiptResponseSDKType, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementRequestSDKType, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementResponseSDKType, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsRequestSDKType, QueryPacketAcknowledgementsResponse, QueryPacketAcknowledgementsResponseSDKType, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsRequestSDKType, QueryUnreceivedPacketsResponse, QueryUnreceivedPacketsResponseSDKType, QueryUnreceivedAcksRequest, QueryUnreceivedAcksRequestSDKType, QueryUnreceivedAcksResponse, QueryUnreceivedAcksResponseSDKType, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveRequestSDKType, QueryNextSequenceReceiveResponse, QueryNextSequenceReceiveResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Channel queries an IBC Channel. */
  channel = async (params: QueryChannelRequest): Promise<QueryChannelResponseSDKType> => {
    const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}`;
    return await this.req.get<QueryChannelResponseSDKType>(endpoint);
  };
  /* Channels queries all the IBC channels of a chain. */
  channels = async (params: QueryChannelsRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<QueryChannelsResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `ibc/core/channel/v1/channels`;
    return await this.req.get<QueryChannelsResponseSDKType>(endpoint, options);
  };
  /* ConnectionChannels queries all the channels associated with a connection
   end. */
  connectionChannels = async (params: QueryConnectionChannelsRequest): Promise<QueryConnectionChannelsResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `ibc/core/channel/v1/connections/${params.connection}/channels`;
    return await this.req.get<QueryConnectionChannelsResponseSDKType>(endpoint, options);
  };
  /* ChannelClientState queries for the client state for the channel associated
   with the provided channel identifiers. */
  channelClientState = async (params: QueryChannelClientStateRequest): Promise<QueryChannelClientStateResponseSDKType> => {
    const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}/client_state`;
    return await this.req.get<QueryChannelClientStateResponseSDKType>(endpoint);
  };
  /* ChannelConsensusState queries for the consensus state for the channel
   associated with the provided channel identifiers. */
  channelConsensusState = async (params: QueryChannelConsensusStateRequest): Promise<QueryChannelConsensusStateResponseSDKType> => {
    const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}/consensus_state/revision/${params.revisionNumber}/height/${params.revisionHeight}`;
    return await this.req.get<QueryChannelConsensusStateResponseSDKType>(endpoint);
  };
  /* PacketCommitment queries a stored packet commitment hash. */
  packetCommitment = async (params: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponseSDKType> => {
    const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}/packet_commitments/${params.sequence}`;
    return await this.req.get<QueryPacketCommitmentResponseSDKType>(endpoint);
  };
  /* PacketCommitments returns all the packet commitments hashes associated
   with a channel. */
  packetCommitments = async (params: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}/packet_commitments`;
    return await this.req.get<QueryPacketCommitmentsResponseSDKType>(endpoint, options);
  };
  /* PacketReceipt queries if a given packet sequence has been received on the
   queried chain */
  packetReceipt = async (params: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponseSDKType> => {
    const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}/packet_receipts/${params.sequence}`;
    return await this.req.get<QueryPacketReceiptResponseSDKType>(endpoint);
  };
  /* PacketAcknowledgement queries a stored packet acknowledgement hash. */
  packetAcknowledgement = async (params: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponseSDKType> => {
    const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}/packet_acks/${params.sequence}`;
    return await this.req.get<QueryPacketAcknowledgementResponseSDKType>(endpoint);
  };
  /* PacketAcknowledgements returns all the packet acknowledgements associated
   with a channel. */
  packetAcknowledgements = async (params: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.packetCommitmentSequences !== "undefined") {
      options.params.packet_commitment_sequences = params.packetCommitmentSequences;
    }
    const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}/packet_acknowledgements`;
    return await this.req.get<QueryPacketAcknowledgementsResponseSDKType>(endpoint, options);
  };
  /* UnreceivedPackets returns all the unreceived IBC packets associated with a
   channel and sequences. */
  unreceivedPackets = async (params: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponseSDKType> => {
    const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}/packet_commitments/${params.packetCommitmentSequences}/unreceived_packets`;
    return await this.req.get<QueryUnreceivedPacketsResponseSDKType>(endpoint);
  };
  /* UnreceivedAcks returns all the unreceived IBC acknowledgements associated
   with a channel and sequences. */
  unreceivedAcks = async (params: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponseSDKType> => {
    const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}/packet_commitments/${params.packetAckSequences}/unreceived_acks`;
    return await this.req.get<QueryUnreceivedAcksResponseSDKType>(endpoint);
  };
  /* NextSequenceReceive returns the next receive sequence for a given channel. */
  nextSequenceReceive = async (params: QueryNextSequenceReceiveRequest): Promise<QueryNextSequenceReceiveResponseSDKType> => {
    const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}/next_sequence`;
    return await this.req.get<QueryNextSequenceReceiveResponseSDKType>(endpoint);
  };
}