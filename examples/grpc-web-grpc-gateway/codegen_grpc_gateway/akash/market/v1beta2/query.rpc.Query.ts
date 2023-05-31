import { OrderFilters, OrderFiltersSDKType, OrderID, OrderIDSDKType, Order, OrderSDKType } from "./order";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BidFilters, BidFiltersSDKType, BidID, BidIDSDKType, Bid, BidSDKType } from "./bid";
import { LeaseFilters, LeaseFiltersSDKType, LeaseID, LeaseIDSDKType, Lease, LeaseSDKType } from "./lease";
import { Account, AccountSDKType, FractionalPayment, FractionalPaymentSDKType } from "../../escrow/v1beta2/types";
import * as fm from "../../../grpc-gateway";
import { QueryOrdersRequest, QueryOrdersRequestSDKType, QueryOrdersResponse, QueryOrdersResponseSDKType, QueryOrderRequest, QueryOrderRequestSDKType, QueryOrderResponse, QueryOrderResponseSDKType, QueryBidsRequest, QueryBidsRequestSDKType, QueryBidsResponse, QueryBidsResponseSDKType, QueryBidRequest, QueryBidRequestSDKType, QueryBidResponse, QueryBidResponseSDKType, QueryLeasesRequest, QueryLeasesRequestSDKType, QueryLeasesResponse, QueryLeasesResponseSDKType, QueryLeaseRequest, QueryLeaseRequestSDKType, QueryLeaseResponse, QueryLeaseResponseSDKType } from "./query";
export class Query {
  /** Orders queries orders with filters */
  static orders(request: QueryOrdersRequest, initRequest?: fm.InitReq): Promise<QueryOrdersResponse> {
    return fm.fetchReq(`/akash/market/v1beta2/orders/list?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Order queries order details */
  static order(request: QueryOrderRequest, initRequest?: fm.InitReq): Promise<QueryOrderResponse> {
    return fm.fetchReq(`/akash/market/v1beta2/orders/info?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Bids queries bids with filters */
  static bids(request: QueryBidsRequest, initRequest?: fm.InitReq): Promise<QueryBidsResponse> {
    return fm.fetchReq(`/akash/market/v1beta2/bids/list?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Bid queries bid details */
  static bid(request: QueryBidRequest, initRequest?: fm.InitReq): Promise<QueryBidResponse> {
    return fm.fetchReq(`/akash/market/v1beta2/bids/info?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Leases queries leases with filters */
  static leases(request: QueryLeasesRequest, initRequest?: fm.InitReq): Promise<QueryLeasesResponse> {
    return fm.fetchReq(`/akash/market/v1beta2/leases/list?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Lease queries lease details */
  static lease(request: QueryLeaseRequest, initRequest?: fm.InitReq): Promise<QueryLeaseResponse> {
    return fm.fetchReq(`/akash/market/v1beta2/leases/info?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
}
export class Querier {
  private readonly url: string;
  constructor(url: string) {
    this.url = url;
  }
  /** Orders queries orders with filters */
  async orders(req: QueryOrdersRequest, headers?: HeadersInit): Promise<QueryOrdersResponse> {
    return Query.orders(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Order queries order details */
  async order(req: QueryOrderRequest, headers?: HeadersInit): Promise<QueryOrderResponse> {
    return Query.order(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Bids queries bids with filters */
  async bids(req: QueryBidsRequest, headers?: HeadersInit): Promise<QueryBidsResponse> {
    return Query.bids(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Bid queries bid details */
  async bid(req: QueryBidRequest, headers?: HeadersInit): Promise<QueryBidResponse> {
    return Query.bid(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Leases queries leases with filters */
  async leases(req: QueryLeasesRequest, headers?: HeadersInit): Promise<QueryLeasesResponse> {
    return Query.leases(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Lease queries lease details */
  async lease(req: QueryLeaseRequest, headers?: HeadersInit): Promise<QueryLeaseResponse> {
    return Query.lease(req, {
      headers,
      pathPrefix: this.url
    });
  }
}