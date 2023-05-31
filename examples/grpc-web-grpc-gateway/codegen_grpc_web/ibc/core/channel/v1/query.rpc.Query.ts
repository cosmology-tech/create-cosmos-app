import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../../grpc-web";
import { DeepPartial } from "../../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryChannelRequest, QueryChannelResponse, QueryChannelsRequest, QueryChannelsResponse, QueryConnectionChannelsRequest, QueryConnectionChannelsResponse, QueryChannelClientStateRequest, QueryChannelClientStateResponse, QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse, QueryPacketCommitmentRequest, QueryPacketCommitmentResponse, QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse, QueryPacketReceiptRequest, QueryPacketReceiptResponse, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse, QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse } from "./query";
/** Query provides defines the gRPC querier service */
export interface Query {
  /** Channel queries an IBC Channel. */
  channel(request: DeepPartial<QueryChannelRequest>, metadata?: grpc.Metadata): Promise<QueryChannelResponse>;
  /** Channels queries all the IBC channels of a chain. */
  channels(request?: DeepPartial<QueryChannelsRequest>, metadata?: grpc.Metadata): Promise<QueryChannelsResponse>;
  /**
   * ConnectionChannels queries all the channels associated with a connection
   * end.
   */
  connectionChannels(request: DeepPartial<QueryConnectionChannelsRequest>, metadata?: grpc.Metadata): Promise<QueryConnectionChannelsResponse>;
  /**
   * ChannelClientState queries for the client state for the channel associated
   * with the provided channel identifiers.
   */
  channelClientState(request: DeepPartial<QueryChannelClientStateRequest>, metadata?: grpc.Metadata): Promise<QueryChannelClientStateResponse>;
  /**
   * ChannelConsensusState queries for the consensus state for the channel
   * associated with the provided channel identifiers.
   */
  channelConsensusState(request: DeepPartial<QueryChannelConsensusStateRequest>, metadata?: grpc.Metadata): Promise<QueryChannelConsensusStateResponse>;
  /** PacketCommitment queries a stored packet commitment hash. */
  packetCommitment(request: DeepPartial<QueryPacketCommitmentRequest>, metadata?: grpc.Metadata): Promise<QueryPacketCommitmentResponse>;
  /**
   * PacketCommitments returns all the packet commitments hashes associated
   * with a channel.
   */
  packetCommitments(request: DeepPartial<QueryPacketCommitmentsRequest>, metadata?: grpc.Metadata): Promise<QueryPacketCommitmentsResponse>;
  /**
   * PacketReceipt queries if a given packet sequence has been received on the
   * queried chain
   */
  packetReceipt(request: DeepPartial<QueryPacketReceiptRequest>, metadata?: grpc.Metadata): Promise<QueryPacketReceiptResponse>;
  /** PacketAcknowledgement queries a stored packet acknowledgement hash. */
  packetAcknowledgement(request: DeepPartial<QueryPacketAcknowledgementRequest>, metadata?: grpc.Metadata): Promise<QueryPacketAcknowledgementResponse>;
  /**
   * PacketAcknowledgements returns all the packet acknowledgements associated
   * with a channel.
   */
  packetAcknowledgements(request: DeepPartial<QueryPacketAcknowledgementsRequest>, metadata?: grpc.Metadata): Promise<QueryPacketAcknowledgementsResponse>;
  /**
   * UnreceivedPackets returns all the unreceived IBC packets associated with a
   * channel and sequences.
   */
  unreceivedPackets(request: DeepPartial<QueryUnreceivedPacketsRequest>, metadata?: grpc.Metadata): Promise<QueryUnreceivedPacketsResponse>;
  /**
   * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
   * with a channel and sequences.
   */
  unreceivedAcks(request: DeepPartial<QueryUnreceivedAcksRequest>, metadata?: grpc.Metadata): Promise<QueryUnreceivedAcksResponse>;
  /** NextSequenceReceive returns the next receive sequence for a given channel. */
  nextSequenceReceive(request: DeepPartial<QueryNextSequenceReceiveRequest>, metadata?: grpc.Metadata): Promise<QueryNextSequenceReceiveResponse>;
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
  channel(request: DeepPartial<QueryChannelRequest>, metadata?: grpc.Metadata): Promise<QueryChannelResponse> {
    return this.rpc.unary(QueryChannelDesc, QueryChannelRequest.fromPartial(request), metadata);
  }
  channels(request: DeepPartial<QueryChannelsRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryChannelsResponse> {
    return this.rpc.unary(QueryChannelsDesc, QueryChannelsRequest.fromPartial(request), metadata);
  }
  connectionChannels(request: DeepPartial<QueryConnectionChannelsRequest>, metadata?: grpc.Metadata): Promise<QueryConnectionChannelsResponse> {
    return this.rpc.unary(QueryConnectionChannelsDesc, QueryConnectionChannelsRequest.fromPartial(request), metadata);
  }
  channelClientState(request: DeepPartial<QueryChannelClientStateRequest>, metadata?: grpc.Metadata): Promise<QueryChannelClientStateResponse> {
    return this.rpc.unary(QueryChannelClientStateDesc, QueryChannelClientStateRequest.fromPartial(request), metadata);
  }
  channelConsensusState(request: DeepPartial<QueryChannelConsensusStateRequest>, metadata?: grpc.Metadata): Promise<QueryChannelConsensusStateResponse> {
    return this.rpc.unary(QueryChannelConsensusStateDesc, QueryChannelConsensusStateRequest.fromPartial(request), metadata);
  }
  packetCommitment(request: DeepPartial<QueryPacketCommitmentRequest>, metadata?: grpc.Metadata): Promise<QueryPacketCommitmentResponse> {
    return this.rpc.unary(QueryPacketCommitmentDesc, QueryPacketCommitmentRequest.fromPartial(request), metadata);
  }
  packetCommitments(request: DeepPartial<QueryPacketCommitmentsRequest>, metadata?: grpc.Metadata): Promise<QueryPacketCommitmentsResponse> {
    return this.rpc.unary(QueryPacketCommitmentsDesc, QueryPacketCommitmentsRequest.fromPartial(request), metadata);
  }
  packetReceipt(request: DeepPartial<QueryPacketReceiptRequest>, metadata?: grpc.Metadata): Promise<QueryPacketReceiptResponse> {
    return this.rpc.unary(QueryPacketReceiptDesc, QueryPacketReceiptRequest.fromPartial(request), metadata);
  }
  packetAcknowledgement(request: DeepPartial<QueryPacketAcknowledgementRequest>, metadata?: grpc.Metadata): Promise<QueryPacketAcknowledgementResponse> {
    return this.rpc.unary(QueryPacketAcknowledgementDesc, QueryPacketAcknowledgementRequest.fromPartial(request), metadata);
  }
  packetAcknowledgements(request: DeepPartial<QueryPacketAcknowledgementsRequest>, metadata?: grpc.Metadata): Promise<QueryPacketAcknowledgementsResponse> {
    return this.rpc.unary(QueryPacketAcknowledgementsDesc, QueryPacketAcknowledgementsRequest.fromPartial(request), metadata);
  }
  unreceivedPackets(request: DeepPartial<QueryUnreceivedPacketsRequest>, metadata?: grpc.Metadata): Promise<QueryUnreceivedPacketsResponse> {
    return this.rpc.unary(QueryUnreceivedPacketsDesc, QueryUnreceivedPacketsRequest.fromPartial(request), metadata);
  }
  unreceivedAcks(request: DeepPartial<QueryUnreceivedAcksRequest>, metadata?: grpc.Metadata): Promise<QueryUnreceivedAcksResponse> {
    return this.rpc.unary(QueryUnreceivedAcksDesc, QueryUnreceivedAcksRequest.fromPartial(request), metadata);
  }
  nextSequenceReceive(request: DeepPartial<QueryNextSequenceReceiveRequest>, metadata?: grpc.Metadata): Promise<QueryNextSequenceReceiveResponse> {
    return this.rpc.unary(QueryNextSequenceReceiveDesc, QueryNextSequenceReceiveRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "ibc.core.channel.v1.Query"
};
export const QueryChannelDesc: UnaryMethodDefinitionish = {
  methodName: "Channel",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryChannelRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryChannelResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryChannelsDesc: UnaryMethodDefinitionish = {
  methodName: "Channels",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryChannelsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryChannelsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryConnectionChannelsDesc: UnaryMethodDefinitionish = {
  methodName: "ConnectionChannels",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryConnectionChannelsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryConnectionChannelsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryChannelClientStateDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelClientState",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryChannelClientStateRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryChannelClientStateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryChannelConsensusStateDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelConsensusState",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryChannelConsensusStateRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryChannelConsensusStateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryPacketCommitmentDesc: UnaryMethodDefinitionish = {
  methodName: "PacketCommitment",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryPacketCommitmentRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryPacketCommitmentResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryPacketCommitmentsDesc: UnaryMethodDefinitionish = {
  methodName: "PacketCommitments",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryPacketCommitmentsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryPacketCommitmentsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryPacketReceiptDesc: UnaryMethodDefinitionish = {
  methodName: "PacketReceipt",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryPacketReceiptRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryPacketReceiptResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryPacketAcknowledgementDesc: UnaryMethodDefinitionish = {
  methodName: "PacketAcknowledgement",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryPacketAcknowledgementRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryPacketAcknowledgementResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryPacketAcknowledgementsDesc: UnaryMethodDefinitionish = {
  methodName: "PacketAcknowledgements",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryPacketAcknowledgementsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryPacketAcknowledgementsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryUnreceivedPacketsDesc: UnaryMethodDefinitionish = {
  methodName: "UnreceivedPackets",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryUnreceivedPacketsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryUnreceivedPacketsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryUnreceivedAcksDesc: UnaryMethodDefinitionish = {
  methodName: "UnreceivedAcks",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryUnreceivedAcksRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryUnreceivedAcksResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryNextSequenceReceiveDesc: UnaryMethodDefinitionish = {
  methodName: "NextSequenceReceive",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryNextSequenceReceiveRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryNextSequenceReceiveResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
export class GrpcWebImpl {
  host: string;
  options: {
    transport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  };
  constructor(host: string, options: {
    transport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  }) {
    this.host = host;
    this.options = options;
  }
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, _request: any, metadata: grpc.Metadata | undefined) {
    const request = {
      ..._request,
      ...methodDesc.requestType
    };
    const maybeCombinedMetadata = metadata && this.options.metadata ? new BrowserHeaders({
      ...this.options?.metadata.headersMap,
      ...metadata?.headersMap
    }) : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = (new Error(response.statusMessage) as any);
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        }
      });
    });
  }
}