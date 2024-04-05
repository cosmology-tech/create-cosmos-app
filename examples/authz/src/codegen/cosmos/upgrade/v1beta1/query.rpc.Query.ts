//@ts-nocheck
import { Plan, PlanSDKType, ModuleVersion, ModuleVersionSDKType } from "./upgrade";
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryCurrentPlanRequest, QueryCurrentPlanRequestSDKType, QueryCurrentPlanResponse, QueryCurrentPlanResponseSDKType, QueryAppliedPlanRequest, QueryAppliedPlanRequestSDKType, QueryAppliedPlanResponse, QueryAppliedPlanResponseSDKType, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateRequestSDKType, QueryUpgradedConsensusStateResponse, QueryUpgradedConsensusStateResponseSDKType, QueryModuleVersionsRequest, QueryModuleVersionsRequestSDKType, QueryModuleVersionsResponse, QueryModuleVersionsResponseSDKType, QueryAuthorityRequest, QueryAuthorityRequestSDKType, QueryAuthorityResponse, QueryAuthorityResponseSDKType } from "./query";
/** Query defines the gRPC upgrade querier service. */
export interface Query {
  /** CurrentPlan queries the current upgrade plan. */
  currentPlan(request?: QueryCurrentPlanRequest): Promise<QueryCurrentPlanResponse>;
  /** AppliedPlan queries a previously applied upgrade plan by its name. */
  appliedPlan(request: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponse>;
  /**
   * UpgradedConsensusState queries the consensus state that will serve
   * as a trusted kernel for the next version of this chain. It will only be
   * stored at the last height of this chain.
   * UpgradedConsensusState RPC not supported with legacy querier
   * This rpc is deprecated now that IBC has its own replacement
   * (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)
   */
  upgradedConsensusState(request: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse>;
  /**
   * ModuleVersions queries the list of module versions from state.
   * 
   * Since: cosmos-sdk 0.43
   */
  moduleVersions(request: QueryModuleVersionsRequest): Promise<QueryModuleVersionsResponse>;
  /** Returns the account with authority to conduct upgrades */
  authority(request?: QueryAuthorityRequest): Promise<QueryAuthorityResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CurrentPlan queries the current upgrade plan. */
  currentPlan = async (request: QueryCurrentPlanRequest = {}): Promise<QueryCurrentPlanResponse> => {
    const data = QueryCurrentPlanRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "CurrentPlan", data);
    return promise.then(data => QueryCurrentPlanResponse.decode(new BinaryReader(data)));
  };
  /* AppliedPlan queries a previously applied upgrade plan by its name. */
  appliedPlan = async (request: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponse> => {
    const data = QueryAppliedPlanRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "AppliedPlan", data);
    return promise.then(data => QueryAppliedPlanResponse.decode(new BinaryReader(data)));
  };
  /* UpgradedConsensusState queries the consensus state that will serve
   as a trusted kernel for the next version of this chain. It will only be
   stored at the last height of this chain.
   UpgradedConsensusState RPC not supported with legacy querier
   This rpc is deprecated now that IBC has its own replacement
   (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54) */
  upgradedConsensusState = async (request: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse> => {
    const data = QueryUpgradedConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "UpgradedConsensusState", data);
    return promise.then(data => QueryUpgradedConsensusStateResponse.decode(new BinaryReader(data)));
  };
  /* ModuleVersions queries the list of module versions from state.
  
   Since: cosmos-sdk 0.43 */
  moduleVersions = async (request: QueryModuleVersionsRequest): Promise<QueryModuleVersionsResponse> => {
    const data = QueryModuleVersionsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "ModuleVersions", data);
    return promise.then(data => QueryModuleVersionsResponse.decode(new BinaryReader(data)));
  };
  /* Returns the account with authority to conduct upgrades */
  authority = async (request: QueryAuthorityRequest = {}): Promise<QueryAuthorityResponse> => {
    const data = QueryAuthorityRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "Authority", data);
    return promise.then(data => QueryAuthorityResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    currentPlan(request?: QueryCurrentPlanRequest): Promise<QueryCurrentPlanResponse> {
      return queryService.currentPlan(request);
    },
    appliedPlan(request: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponse> {
      return queryService.appliedPlan(request);
    },
    upgradedConsensusState(request: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse> {
      return queryService.upgradedConsensusState(request);
    },
    moduleVersions(request: QueryModuleVersionsRequest): Promise<QueryModuleVersionsResponse> {
      return queryService.moduleVersions(request);
    },
    authority(request?: QueryAuthorityRequest): Promise<QueryAuthorityResponse> {
      return queryService.authority(request);
    }
  };
};