"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryMobxStores = exports.createRpcQueryHooks = exports.createClientImpl = exports.QueryClientImpl = void 0;
const binary_1 = require("../../../../binary");
const react_query_1 = require("@tanstack/react-query");
const mobx_1 = require("../../../../mobx");
const query_1 = require("./query");
class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
    }
    /* Channel queries an IBC Channel. */
    channel = async (request) => {
        const data = query_1.QueryChannelRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "Channel", data);
        return promise.then(data => query_1.QueryChannelResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Channels queries all the IBC channels of a chain. */
    channels = async (request = {
        pagination: undefined
    }) => {
        const data = query_1.QueryChannelsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "Channels", data);
        return promise.then(data => query_1.QueryChannelsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* ConnectionChannels queries all the channels associated with a connection
     end. */
    connectionChannels = async (request) => {
        const data = query_1.QueryConnectionChannelsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "ConnectionChannels", data);
        return promise.then(data => query_1.QueryConnectionChannelsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* ChannelClientState queries for the client state for the channel associated
     with the provided channel identifiers. */
    channelClientState = async (request) => {
        const data = query_1.QueryChannelClientStateRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "ChannelClientState", data);
        return promise.then(data => query_1.QueryChannelClientStateResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* ChannelConsensusState queries for the consensus state for the channel
     associated with the provided channel identifiers. */
    channelConsensusState = async (request) => {
        const data = query_1.QueryChannelConsensusStateRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "ChannelConsensusState", data);
        return promise.then(data => query_1.QueryChannelConsensusStateResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* PacketCommitment queries a stored packet commitment hash. */
    packetCommitment = async (request) => {
        const data = query_1.QueryPacketCommitmentRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketCommitment", data);
        return promise.then(data => query_1.QueryPacketCommitmentResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* PacketCommitments returns all the packet commitments hashes associated
     with a channel. */
    packetCommitments = async (request) => {
        const data = query_1.QueryPacketCommitmentsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketCommitments", data);
        return promise.then(data => query_1.QueryPacketCommitmentsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* PacketReceipt queries if a given packet sequence has been received on the
     queried chain */
    packetReceipt = async (request) => {
        const data = query_1.QueryPacketReceiptRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketReceipt", data);
        return promise.then(data => query_1.QueryPacketReceiptResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* PacketAcknowledgement queries a stored packet acknowledgement hash. */
    packetAcknowledgement = async (request) => {
        const data = query_1.QueryPacketAcknowledgementRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketAcknowledgement", data);
        return promise.then(data => query_1.QueryPacketAcknowledgementResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* PacketAcknowledgements returns all the packet acknowledgements associated
     with a channel. */
    packetAcknowledgements = async (request) => {
        const data = query_1.QueryPacketAcknowledgementsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketAcknowledgements", data);
        return promise.then(data => query_1.QueryPacketAcknowledgementsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* UnreceivedPackets returns all the unreceived IBC packets associated with a
     channel and sequences. */
    unreceivedPackets = async (request) => {
        const data = query_1.QueryUnreceivedPacketsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "UnreceivedPackets", data);
        return promise.then(data => query_1.QueryUnreceivedPacketsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* UnreceivedAcks returns all the unreceived IBC acknowledgements associated
     with a channel and sequences. */
    unreceivedAcks = async (request) => {
        const data = query_1.QueryUnreceivedAcksRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "UnreceivedAcks", data);
        return promise.then(data => query_1.QueryUnreceivedAcksResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* NextSequenceReceive returns the next receive sequence for a given channel. */
    nextSequenceReceive = async (request) => {
        const data = query_1.QueryNextSequenceReceiveRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "NextSequenceReceive", data);
        return promise.then(data => query_1.QueryNextSequenceReceiveResponse.decode(new binary_1.BinaryReader(data)));
    };
}
exports.QueryClientImpl = QueryClientImpl;
const createClientImpl = (rpc) => {
    return new QueryClientImpl(rpc);
};
exports.createClientImpl = createClientImpl;
const _queryClients = new WeakMap();
const getQueryService = (rpc) => {
    if (!rpc)
        return;
    if (_queryClients.has(rpc)) {
        return _queryClients.get(rpc);
    }
    const queryService = new QueryClientImpl(rpc);
    _queryClients.set(rpc, queryService);
    return queryService;
};
const createRpcQueryHooks = (rpc) => {
    const queryService = getQueryService(rpc);
    const useChannel = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["channelQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.channel(request);
        }, options);
    };
    const useChannels = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["channelsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.channels(request);
        }, options);
    };
    const useConnectionChannels = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["connectionChannelsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.connectionChannels(request);
        }, options);
    };
    const useChannelClientState = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["channelClientStateQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.channelClientState(request);
        }, options);
    };
    const useChannelConsensusState = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["channelConsensusStateQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.channelConsensusState(request);
        }, options);
    };
    const usePacketCommitment = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["packetCommitmentQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.packetCommitment(request);
        }, options);
    };
    const usePacketCommitments = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["packetCommitmentsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.packetCommitments(request);
        }, options);
    };
    const usePacketReceipt = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["packetReceiptQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.packetReceipt(request);
        }, options);
    };
    const usePacketAcknowledgement = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["packetAcknowledgementQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.packetAcknowledgement(request);
        }, options);
    };
    const usePacketAcknowledgements = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["packetAcknowledgementsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.packetAcknowledgements(request);
        }, options);
    };
    const useUnreceivedPackets = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["unreceivedPacketsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.unreceivedPackets(request);
        }, options);
    };
    const useUnreceivedAcks = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["unreceivedAcksQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.unreceivedAcks(request);
        }, options);
    };
    const useNextSequenceReceive = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["nextSequenceReceiveQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.nextSequenceReceive(request);
        }, options);
    };
    return {
        /** Channel queries an IBC Channel. */ useChannel,
        /** Channels queries all the IBC channels of a chain. */ useChannels,
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
        /** PacketCommitment queries a stored packet commitment hash. */ usePacketCommitment,
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
        /** PacketAcknowledgement queries a stored packet acknowledgement hash. */ usePacketAcknowledgement,
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
        /** NextSequenceReceive returns the next receive sequence for a given channel. */ useNextSequenceReceive
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;
const createRpcQueryMobxStores = (rpc) => {
    const queryService = getQueryService(rpc);
    class QueryChannelStore {
        store = new mobx_1.QueryStore(queryService?.channel);
        channel(request) {
            return this.store.getData(request);
        }
    }
    class QueryChannelsStore {
        store = new mobx_1.QueryStore(queryService?.channels);
        channels(request) {
            return this.store.getData(request);
        }
    }
    class QueryConnectionChannelsStore {
        store = new mobx_1.QueryStore(queryService?.connectionChannels);
        connectionChannels(request) {
            return this.store.getData(request);
        }
    }
    class QueryChannelClientStateStore {
        store = new mobx_1.QueryStore(queryService?.channelClientState);
        channelClientState(request) {
            return this.store.getData(request);
        }
    }
    class QueryChannelConsensusStateStore {
        store = new mobx_1.QueryStore(queryService?.channelConsensusState);
        channelConsensusState(request) {
            return this.store.getData(request);
        }
    }
    class QueryPacketCommitmentStore {
        store = new mobx_1.QueryStore(queryService?.packetCommitment);
        packetCommitment(request) {
            return this.store.getData(request);
        }
    }
    class QueryPacketCommitmentsStore {
        store = new mobx_1.QueryStore(queryService?.packetCommitments);
        packetCommitments(request) {
            return this.store.getData(request);
        }
    }
    class QueryPacketReceiptStore {
        store = new mobx_1.QueryStore(queryService?.packetReceipt);
        packetReceipt(request) {
            return this.store.getData(request);
        }
    }
    class QueryPacketAcknowledgementStore {
        store = new mobx_1.QueryStore(queryService?.packetAcknowledgement);
        packetAcknowledgement(request) {
            return this.store.getData(request);
        }
    }
    class QueryPacketAcknowledgementsStore {
        store = new mobx_1.QueryStore(queryService?.packetAcknowledgements);
        packetAcknowledgements(request) {
            return this.store.getData(request);
        }
    }
    class QueryUnreceivedPacketsStore {
        store = new mobx_1.QueryStore(queryService?.unreceivedPackets);
        unreceivedPackets(request) {
            return this.store.getData(request);
        }
    }
    class QueryUnreceivedAcksStore {
        store = new mobx_1.QueryStore(queryService?.unreceivedAcks);
        unreceivedAcks(request) {
            return this.store.getData(request);
        }
    }
    class QueryNextSequenceReceiveStore {
        store = new mobx_1.QueryStore(queryService?.nextSequenceReceive);
        nextSequenceReceive(request) {
            return this.store.getData(request);
        }
    }
    return {
        /** Channel queries an IBC Channel. */ QueryChannelStore,
        /** Channels queries all the IBC channels of a chain. */ QueryChannelsStore,
        /**
         * ConnectionChannels queries all the channels associated with a connection
         * end.
         */
        QueryConnectionChannelsStore,
        /**
         * ChannelClientState queries for the client state for the channel associated
         * with the provided channel identifiers.
         */
        QueryChannelClientStateStore,
        /**
         * ChannelConsensusState queries for the consensus state for the channel
         * associated with the provided channel identifiers.
         */
        QueryChannelConsensusStateStore,
        /** PacketCommitment queries a stored packet commitment hash. */ QueryPacketCommitmentStore,
        /**
         * PacketCommitments returns all the packet commitments hashes associated
         * with a channel.
         */
        QueryPacketCommitmentsStore,
        /**
         * PacketReceipt queries if a given packet sequence has been received on the
         * queried chain
         */
        QueryPacketReceiptStore,
        /** PacketAcknowledgement queries a stored packet acknowledgement hash. */ QueryPacketAcknowledgementStore,
        /**
         * PacketAcknowledgements returns all the packet acknowledgements associated
         * with a channel.
         */
        QueryPacketAcknowledgementsStore,
        /**
         * UnreceivedPackets returns all the unreceived IBC packets associated with a
         * channel and sequences.
         */
        QueryUnreceivedPacketsStore,
        /**
         * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
         * with a channel and sequences.
         */
        QueryUnreceivedAcksStore,
        /** NextSequenceReceive returns the next receive sequence for a given channel. */ QueryNextSequenceReceiveStore
    };
};
exports.createRpcQueryMobxStores = createRpcQueryMobxStores;
