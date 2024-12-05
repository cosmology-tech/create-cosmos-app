
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { ComputedRef } from 'vue'

export interface QueryAllBalancesRequest {
  /** address is the address to query balances for. */
  address: ComputedRef<string>;
  /** pagination defines an optional pagination for the request. */
  pagination?: ComputedRef<PageRequest>;
}