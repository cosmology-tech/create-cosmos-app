import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { IdentifiedPacketFees, IdentifiedPacketFeesSDKType } from "./fee";
import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { FeeEnabledChannel, FeeEnabledChannelSDKType } from "./genesis";
import { setPaginationParams } from "../../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryIncentivizedPacketsRequest, QueryIncentivizedPacketsRequestSDKType, QueryIncentivizedPacketsResponse, QueryIncentivizedPacketsResponseSDKType, QueryIncentivizedPacketRequest, QueryIncentivizedPacketRequestSDKType, QueryIncentivizedPacketResponse, QueryIncentivizedPacketResponseSDKType, QueryIncentivizedPacketsForChannelRequest, QueryIncentivizedPacketsForChannelRequestSDKType, QueryIncentivizedPacketsForChannelResponse, QueryIncentivizedPacketsForChannelResponseSDKType, QueryTotalRecvFeesRequest, QueryTotalRecvFeesRequestSDKType, QueryTotalRecvFeesResponse, QueryTotalRecvFeesResponseSDKType, QueryTotalAckFeesRequest, QueryTotalAckFeesRequestSDKType, QueryTotalAckFeesResponse, QueryTotalAckFeesResponseSDKType, QueryTotalTimeoutFeesRequest, QueryTotalTimeoutFeesRequestSDKType, QueryTotalTimeoutFeesResponse, QueryTotalTimeoutFeesResponseSDKType, QueryPayeeRequest, QueryPayeeRequestSDKType, QueryPayeeResponse, QueryPayeeResponseSDKType, QueryCounterpartyPayeeRequest, QueryCounterpartyPayeeRequestSDKType, QueryCounterpartyPayeeResponse, QueryCounterpartyPayeeResponseSDKType, QueryFeeEnabledChannelsRequest, QueryFeeEnabledChannelsRequestSDKType, QueryFeeEnabledChannelsResponse, QueryFeeEnabledChannelsResponseSDKType, QueryFeeEnabledChannelRequest, QueryFeeEnabledChannelRequestSDKType, QueryFeeEnabledChannelResponse, QueryFeeEnabledChannelResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.incentivizedPackets = this.incentivizedPackets.bind(this);
    this.incentivizedPacket = this.incentivizedPacket.bind(this);
    this.incentivizedPacketsForChannel = this.incentivizedPacketsForChannel.bind(this);
    this.totalRecvFees = this.totalRecvFees.bind(this);
    this.totalAckFees = this.totalAckFees.bind(this);
    this.totalTimeoutFees = this.totalTimeoutFees.bind(this);
    this.payee = this.payee.bind(this);
    this.counterpartyPayee = this.counterpartyPayee.bind(this);
    this.feeEnabledChannels = this.feeEnabledChannels.bind(this);
    this.feeEnabledChannel = this.feeEnabledChannel.bind(this);
  }
  /* IncentivizedPackets returns all incentivized packets and their associated fees */
  async incentivizedPackets(params: QueryIncentivizedPacketsRequest): Promise<QueryIncentivizedPacketsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.queryHeight !== "undefined") {
      options.params.query_height = params.queryHeight;
    }
    const endpoint = `ibc/apps/fee/v1/incentivized_packets`;
    return QueryIncentivizedPacketsResponse.fromSDKJSON(await this.req.get<QueryIncentivizedPacketsResponseSDKType>(endpoint, options));
  }
  /* IncentivizedPacket returns all packet fees for a packet given its identifier */
  async incentivizedPacket(params: QueryIncentivizedPacketRequest): Promise<QueryIncentivizedPacketResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.queryHeight !== "undefined") {
      options.params.query_height = params.queryHeight;
    }
    const endpoint = `ibc/apps/fee/v1/channels/${params.packet_id.channel_id}/ports/${params.packet_id.port_id}/sequences/${params.packet_id.sequence}/incentivized_packet`;
    return QueryIncentivizedPacketResponse.fromSDKJSON(await this.req.get<QueryIncentivizedPacketResponseSDKType>(endpoint, options));
  }
  /* Gets all incentivized packets for a specific channel */
  async incentivizedPacketsForChannel(params: QueryIncentivizedPacketsForChannelRequest): Promise<QueryIncentivizedPacketsForChannelResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.queryHeight !== "undefined") {
      options.params.query_height = params.queryHeight;
    }
    const endpoint = `ibc/apps/fee/v1/channels/${params.channelId}/ports/${params.portId}/incentivized_packets`;
    return QueryIncentivizedPacketsForChannelResponse.fromSDKJSON(await this.req.get<QueryIncentivizedPacketsForChannelResponseSDKType>(endpoint, options));
  }
  /* TotalRecvFees returns the total receive fees for a packet given its identifier */
  async totalRecvFees(_params: QueryTotalRecvFeesRequest = {}): Promise<QueryTotalRecvFeesResponseSDKType> {
    const endpoint = `ibc/apps/fee/v1/channels/${params.packet_id.channel_id}/ports/${params.packet_id.port_id}/sequences/${params.packet_id.sequence}/total_recv_fees`;
    return QueryTotalRecvFeesResponse.fromSDKJSON(await this.req.get<QueryTotalRecvFeesResponseSDKType>(endpoint));
  }
  /* TotalAckFees returns the total acknowledgement fees for a packet given its identifier */
  async totalAckFees(_params: QueryTotalAckFeesRequest = {}): Promise<QueryTotalAckFeesResponseSDKType> {
    const endpoint = `ibc/apps/fee/v1/channels/${params.packet_id.channel_id}/ports/${params.packet_id.port_id}/sequences/${params.packet_id.sequence}/total_ack_fees`;
    return QueryTotalAckFeesResponse.fromSDKJSON(await this.req.get<QueryTotalAckFeesResponseSDKType>(endpoint));
  }
  /* TotalTimeoutFees returns the total timeout fees for a packet given its identifier */
  async totalTimeoutFees(_params: QueryTotalTimeoutFeesRequest = {}): Promise<QueryTotalTimeoutFeesResponseSDKType> {
    const endpoint = `ibc/apps/fee/v1/channels/${params.packet_id.channel_id}/ports/${params.packet_id.port_id}/sequences/${params.packet_id.sequence}/total_timeout_fees`;
    return QueryTotalTimeoutFeesResponse.fromSDKJSON(await this.req.get<QueryTotalTimeoutFeesResponseSDKType>(endpoint));
  }
  /* Payee returns the registered payee address for a specific channel given the relayer address */
  async payee(params: QueryPayeeRequest): Promise<QueryPayeeResponseSDKType> {
    const endpoint = `ibc/apps/fee/v1/channels/${params.channelId}/relayers/${params.relayer}/payee`;
    return QueryPayeeResponse.fromSDKJSON(await this.req.get<QueryPayeeResponseSDKType>(endpoint));
  }
  /* CounterpartyPayee returns the registered counterparty payee for forward relaying */
  async counterpartyPayee(params: QueryCounterpartyPayeeRequest): Promise<QueryCounterpartyPayeeResponseSDKType> {
    const endpoint = `ibc/apps/fee/v1/channels/${params.channelId}/relayers/${params.relayer}/counterparty_payee`;
    return QueryCounterpartyPayeeResponse.fromSDKJSON(await this.req.get<QueryCounterpartyPayeeResponseSDKType>(endpoint));
  }
  /* FeeEnabledChannels returns a list of all fee enabled channels */
  async feeEnabledChannels(params: QueryFeeEnabledChannelsRequest): Promise<QueryFeeEnabledChannelsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.queryHeight !== "undefined") {
      options.params.query_height = params.queryHeight;
    }
    const endpoint = `ibc/apps/fee/v1/fee_enabled`;
    return QueryFeeEnabledChannelsResponse.fromSDKJSON(await this.req.get<QueryFeeEnabledChannelsResponseSDKType>(endpoint, options));
  }
  /* FeeEnabledChannel returns true if the provided port and channel identifiers belong to a fee enabled channel */
  async feeEnabledChannel(params: QueryFeeEnabledChannelRequest): Promise<QueryFeeEnabledChannelResponseSDKType> {
    const endpoint = `ibc/apps/fee/v1/channels/${params.channelId}/ports/${params.portId}/fee_enabled`;
    return QueryFeeEnabledChannelResponse.fromSDKJSON(await this.req.get<QueryFeeEnabledChannelResponseSDKType>(endpoint));
  }
}