import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryCurrentPlanRequest, QueryCurrentPlanResponse, QueryCurrentPlanResponseSDKType, QueryAppliedPlanRequest, QueryAppliedPlanResponse, QueryAppliedPlanResponseSDKType, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse, QueryUpgradedConsensusStateResponseSDKType, QueryModuleVersionsRequest, QueryModuleVersionsResponse, QueryModuleVersionsResponseSDKType, QueryAuthorityRequest, QueryAuthorityResponse, QueryAuthorityResponseSDKType } from "./query";
/** Query defines the RPC service */

export interface Query {
  currentPlan(request?: QueryCurrentPlanRequest): Promise<QueryCurrentPlanResponseSDKType>;
  /*CurrentPlan queries the current upgrade plan.*/

  appliedPlan(request: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponseSDKType>;
  /*AppliedPlan queries a previously applied upgrade plan by its name.*/

  upgradedConsensusState(request: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponseSDKType>;
  /*UpgradedConsensusState queries the consensus state that will serve
  as a trusted kernel for the next version of this chain. It will only be
  stored at the last height of this chain.
  UpgradedConsensusState RPC not supported with legacy querier
  This rpc is deprecated now that IBC has its own replacement
  (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)*/

  moduleVersions(request: QueryModuleVersionsRequest): Promise<QueryModuleVersionsResponseSDKType>;
  /*ModuleVersions queries the list of module versions from state.
  
  Since: cosmos-sdk 0.43*/

  authority(request?: QueryAuthorityRequest): Promise<QueryAuthorityResponseSDKType>;
  /*Returns the account with authority to conduct upgrades*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.currentPlan = this.currentPlan.bind(this);
    this.appliedPlan = this.appliedPlan.bind(this);
    this.upgradedConsensusState = this.upgradedConsensusState.bind(this);
    this.moduleVersions = this.moduleVersions.bind(this);
    this.authority = this.authority.bind(this);
  }

  currentPlan(request: QueryCurrentPlanRequest = {}): Promise<QueryCurrentPlanResponseSDKType> {
    const data = QueryCurrentPlanRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "CurrentPlan", data);
    return promise.then(data => QueryCurrentPlanResponse.decode(new _m0.Reader(data)));
  }

  appliedPlan(request: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponseSDKType> {
    const data = QueryAppliedPlanRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "AppliedPlan", data);
    return promise.then(data => QueryAppliedPlanResponse.decode(new _m0.Reader(data)));
  }

  upgradedConsensusState(request: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponseSDKType> {
    const data = QueryUpgradedConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "UpgradedConsensusState", data);
    return promise.then(data => QueryUpgradedConsensusStateResponse.decode(new _m0.Reader(data)));
  }

  moduleVersions(request: QueryModuleVersionsRequest): Promise<QueryModuleVersionsResponseSDKType> {
    const data = QueryModuleVersionsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "ModuleVersions", data);
    return promise.then(data => QueryModuleVersionsResponse.decode(new _m0.Reader(data)));
  }

  authority(request: QueryAuthorityRequest = {}): Promise<QueryAuthorityResponseSDKType> {
    const data = QueryAuthorityRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "Authority", data);
    return promise.then(data => QueryAuthorityResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    currentPlan(request?: QueryCurrentPlanRequest): Promise<QueryCurrentPlanResponseSDKType> {
      return queryService.currentPlan(request);
    },

    appliedPlan(request: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponseSDKType> {
      return queryService.appliedPlan(request);
    },

    upgradedConsensusState(request: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponseSDKType> {
      return queryService.upgradedConsensusState(request);
    },

    moduleVersions(request: QueryModuleVersionsRequest): Promise<QueryModuleVersionsResponseSDKType> {
      return queryService.moduleVersions(request);
    },

    authority(request?: QueryAuthorityRequest): Promise<QueryAuthorityResponseSDKType> {
      return queryService.authority(request);
    }

  };
};