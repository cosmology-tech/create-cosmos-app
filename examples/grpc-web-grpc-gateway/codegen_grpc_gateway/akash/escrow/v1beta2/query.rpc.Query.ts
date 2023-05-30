import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Account, AccountSDKType, FractionalPayment, FractionalPaymentSDKType } from "./types";
import * as fm from "../../../grpc-gateway";
import { QueryAccountsRequest, QueryAccountsRequestSDKType, QueryAccountsResponse, QueryAccountsResponseSDKType, QueryPaymentsRequest, QueryPaymentsRequestSDKType, QueryPaymentsResponse, QueryPaymentsResponseSDKType } from "./query";
export class Query {
  /**
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   * Accounts queries all accounts
   */
  static accounts(request: QueryAccountsRequest, initRequest?: fm.InitReq): Promise<QueryAccountsResponse> {
    return fm.fetchReq(`/akash/escrow/v1beta2/types/accounts/list?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   * Payments queries all payments
   */
  static payments(request: QueryPaymentsRequest, initRequest?: fm.InitReq): Promise<QueryPaymentsResponse> {
    return fm.fetchReq(`/akash/escrow/v1beta2/types/payments/list?${fm.renderURLSearchParams({
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
  /**
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   * Accounts queries all accounts
   */
  async accounts(req: QueryAccountsRequest, headers?: HeadersInit): Promise<QueryAccountsResponse> {
    return Query.accounts(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   * Payments queries all payments
   */
  async payments(req: QueryPaymentsRequest, headers?: HeadersInit): Promise<QueryPaymentsResponse> {
    return Query.payments(req, {
      headers,
      pathPrefix: this.url
    });
  }
}