import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Channel, IdentifiedChannel, PacketState } from "./channel";
import { Height, IdentifiedClientState } from "../../client/v1/client";
import { Any } from "../../../../google/protobuf/any";
import { LCDClient } from "@osmonauts/lcd";
import { setPaginationParams } from "@osmonauts/helpers";
import { QueryChannelRequest, QueryChannelResponse, QueryChannelsRequest, QueryChannelsResponse, QueryConnectionChannelsRequest, QueryConnectionChannelsResponse, QueryChannelClientStateRequest, QueryChannelClientStateResponse, QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse, QueryPacketCommitmentRequest, QueryPacketCommitmentResponse, QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse, QueryPacketReceiptRequest, QueryPacketReceiptResponse, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse, QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse } from "./query";
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

  /* Channel queries an IBC Channel. */
  async channel(params: QueryChannelRequest): Promise<QueryChannelResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.portId !== "undefined") {
      options.params.port_id = params.portId;
    }

    if (typeof params?.channelId !== "undefined") {
      options.params.channel_id = params.channelId;
    }

    const endpoint = `ibc/core/channel/v1/channels/${params.channelId}ports/${params.portId}`;
    return await this.request<QueryChannelResponse>(endpoint, options);
  }

  /* Channels queries all the IBC channels of a chain. */
  async channels(params: QueryChannelsRequest = {
    pagination: undefined
  }): Promise<QueryChannelsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ibc/core/channel/v1/channels`;
    return await this.request<QueryChannelsResponse>(endpoint, options);
  }

  /* ConnectionChannels queries all the channels associated with a connection
  end. */
  async connectionChannels(params: QueryConnectionChannelsRequest): Promise<QueryConnectionChannelsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ibc/core/channel/v1/connections/${params.connection}/channels`;
    return await this.request<QueryConnectionChannelsResponse>(endpoint, options);
  }

  /* ChannelClientState queries for the client state for the channel associated
  with the provided channel identifiers. */
  async channelClientState(params: QueryChannelClientStateRequest): Promise<QueryChannelClientStateResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.portId !== "undefined") {
      options.params.port_id = params.portId;
    }

    if (typeof params?.channelId !== "undefined") {
      options.params.channel_id = params.channelId;
    }

    const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}/client_state`;
    return await this.request<QueryChannelClientStateResponse>(endpoint, options);
  }

  /* ChannelConsensusState queries for the consensus state for the channel
  associated with the provided channel identifiers. */
  async channelConsensusState(params: QueryChannelConsensusStateRequest): Promise<QueryChannelConsensusStateResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.portId !== "undefined") {
      options.params.port_id = params.portId;
    }

    if (typeof params?.channelId !== "undefined") {
      options.params.channel_id = params.channelId;
    }

    if (typeof params?.revisionNumber !== "undefined") {
      options.params.revision_number = params.revisionNumber;
    }

    if (typeof params?.revisionHeight !== "undefined") {
      options.params.revision_height = params.revisionHeight;
    }

    const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}/consensus_state/revision/${params.revisionNumber}height/${params.revisionHeight}`;
    return await this.request<QueryChannelConsensusStateResponse>(endpoint, options);
  }

  /* PacketCommitment queries a stored packet commitment hash. */
  async packetCommitment(params: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.portId !== "undefined") {
      options.params.port_id = params.portId;
    }

    if (typeof params?.channelId !== "undefined") {
      options.params.channel_id = params.channelId;
    }

    const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}packet_commitments/${params.sequence}`;
    return await this.request<QueryPacketCommitmentResponse>(endpoint, options);
  }

  /* PacketCommitments returns all the packet commitments hashes associated
  with a channel. */
  async packetCommitments(params: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.portId !== "undefined") {
      options.params.port_id = params.portId;
    }

    if (typeof params?.channelId !== "undefined") {
      options.params.channel_id = params.channelId;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}/packet_commitments`;
    return await this.request<QueryPacketCommitmentsResponse>(endpoint, options);
  }

  /* PacketReceipt queries if a given packet sequence has been received on the
  queried chain */
  async packetReceipt(params: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.portId !== "undefined") {
      options.params.port_id = params.portId;
    }

    if (typeof params?.channelId !== "undefined") {
      options.params.channel_id = params.channelId;
    }

    const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}packet_receipts/${params.sequence}`;
    return await this.request<QueryPacketReceiptResponse>(endpoint, options);
  }

  /* PacketAcknowledgement queries a stored packet acknowledgement hash. */
  async packetAcknowledgement(params: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.portId !== "undefined") {
      options.params.port_id = params.portId;
    }

    if (typeof params?.channelId !== "undefined") {
      options.params.channel_id = params.channelId;
    }

    const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}packet_acks/${params.sequence}`;
    return await this.request<QueryPacketAcknowledgementResponse>(endpoint, options);
  }

  /* PacketAcknowledgements returns all the packet acknowledgements associated
  with a channel. */
  async packetAcknowledgements(params: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.portId !== "undefined") {
      options.params.port_id = params.portId;
    }

    if (typeof params?.channelId !== "undefined") {
      options.params.channel_id = params.channelId;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    if (typeof params?.packetCommitmentSequences !== "undefined") {
      options.params.packet_commitment_sequences = params.packetCommitmentSequences;
    }

    const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}/packet_acknowledgements`;
    return await this.request<QueryPacketAcknowledgementsResponse>(endpoint, options);
  }

  /* UnreceivedPackets returns all the unreceived IBC packets associated with a
  channel and sequences. */
  async unreceivedPackets(params: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.portId !== "undefined") {
      options.params.port_id = params.portId;
    }

    if (typeof params?.channelId !== "undefined") {
      options.params.channel_id = params.channelId;
    }

    if (typeof params?.packetCommitmentSequences !== "undefined") {
      options.params.packet_commitment_sequences = params.packetCommitmentSequences;
    }

    const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}/packet_commitments/${params.packetCommitmentSequences}/unreceived_packets`;
    return await this.request<QueryUnreceivedPacketsResponse>(endpoint, options);
  }

  /* UnreceivedAcks returns all the unreceived IBC acknowledgements associated
  with a channel and sequences. */
  async unreceivedAcks(params: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.portId !== "undefined") {
      options.params.port_id = params.portId;
    }

    if (typeof params?.channelId !== "undefined") {
      options.params.channel_id = params.channelId;
    }

    if (typeof params?.packetAckSequences !== "undefined") {
      options.params.packet_ack_sequences = params.packetAckSequences;
    }

    const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}/packet_commitments/${params.packetAckSequences}/unreceived_acks`;
    return await this.request<QueryUnreceivedAcksResponse>(endpoint, options);
  }

  /* NextSequenceReceive returns the next receive sequence for a given channel. */
  async nextSequenceReceive(params: QueryNextSequenceReceiveRequest): Promise<QueryNextSequenceReceiveResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.portId !== "undefined") {
      options.params.port_id = params.portId;
    }

    if (typeof params?.channelId !== "undefined") {
      options.params.channel_id = params.channelId;
    }

    const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}/next_sequence`;
    return await this.request<QueryNextSequenceReceiveResponse>(endpoint, options);
  }

}