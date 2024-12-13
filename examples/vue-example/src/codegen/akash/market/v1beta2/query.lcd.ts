import { OrderFilters, OrderFiltersSDKType, OrderID, OrderIDSDKType, Order, OrderSDKType } from "./order";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BidFilters, BidFiltersSDKType, BidID, BidIDSDKType, Bid, BidSDKType } from "./bid";
import { LeaseFilters, LeaseFiltersSDKType, LeaseID, LeaseIDSDKType, Lease, LeaseSDKType } from "./lease";
import { Account, AccountSDKType, FractionalPayment, FractionalPaymentSDKType } from "../../escrow/v1beta2/types";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryOrdersRequest, QueryOrdersRequestSDKType, QueryOrdersResponse, QueryOrdersResponseSDKType, QueryOrderRequest, QueryOrderRequestSDKType, QueryOrderResponse, QueryOrderResponseSDKType, QueryBidsRequest, QueryBidsRequestSDKType, QueryBidsResponse, QueryBidsResponseSDKType, QueryBidRequest, QueryBidRequestSDKType, QueryBidResponse, QueryBidResponseSDKType, QueryLeasesRequest, QueryLeasesRequestSDKType, QueryLeasesResponse, QueryLeasesResponseSDKType, QueryLeaseRequest, QueryLeaseRequestSDKType, QueryLeaseResponse, QueryLeaseResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Orders queries orders with filters */
  orders = async (params: QueryOrdersRequest): Promise<QueryOrdersResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.filters !== "undefined") {
      options.params.filters = params.filters;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `akash/market/v1beta2/orders/list`;
    return QueryOrdersResponse.fromSDKJSON(await this.req.get<QueryOrdersResponseSDKType>(endpoint, options));
  };
  /* Order queries order details */
  order = async (params: QueryOrderRequest): Promise<QueryOrderResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.id !== "undefined") {
      options.params.id = params.id;
    }
    const endpoint = `akash/market/v1beta2/orders/info`;
    return QueryOrderResponse.fromSDKJSON(await this.req.get<QueryOrderResponseSDKType>(endpoint, options));
  };
  /* Bids queries bids with filters */
  bids = async (params: QueryBidsRequest): Promise<QueryBidsResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.filters !== "undefined") {
      options.params.filters = params.filters;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `akash/market/v1beta2/bids/list`;
    return QueryBidsResponse.fromSDKJSON(await this.req.get<QueryBidsResponseSDKType>(endpoint, options));
  };
  /* Bid queries bid details */
  bid = async (params: QueryBidRequest): Promise<QueryBidResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.id !== "undefined") {
      options.params.id = params.id;
    }
    const endpoint = `akash/market/v1beta2/bids/info`;
    return QueryBidResponse.fromSDKJSON(await this.req.get<QueryBidResponseSDKType>(endpoint, options));
  };
  /* Leases queries leases with filters */
  leases = async (params: QueryLeasesRequest): Promise<QueryLeasesResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.filters !== "undefined") {
      options.params.filters = params.filters;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `akash/market/v1beta2/leases/list`;
    return QueryLeasesResponse.fromSDKJSON(await this.req.get<QueryLeasesResponseSDKType>(endpoint, options));
  };
  /* Lease queries lease details */
  lease = async (params: QueryLeaseRequest): Promise<QueryLeaseResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.id !== "undefined") {
      options.params.id = params.id;
    }
    const endpoint = `akash/market/v1beta2/leases/info`;
    return QueryLeaseResponse.fromSDKJSON(await this.req.get<QueryLeaseResponseSDKType>(endpoint, options));
  };
}