import { Plan, PlanSDKType, ModuleVersion, ModuleVersionSDKType } from "./upgrade";
import { LCDClient } from "@cosmology/lcd";
import { QueryCurrentPlanRequest, QueryCurrentPlanRequestSDKType, QueryCurrentPlanResponse, QueryCurrentPlanResponseSDKType, QueryAppliedPlanRequest, QueryAppliedPlanRequestSDKType, QueryAppliedPlanResponse, QueryAppliedPlanResponseSDKType, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateRequestSDKType, QueryUpgradedConsensusStateResponse, QueryUpgradedConsensusStateResponseSDKType, QueryModuleVersionsRequest, QueryModuleVersionsRequestSDKType, QueryModuleVersionsResponse, QueryModuleVersionsResponseSDKType, QueryAuthorityRequest, QueryAuthorityRequestSDKType, QueryAuthorityResponse, QueryAuthorityResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.currentPlan = this.currentPlan.bind(this);
    this.appliedPlan = this.appliedPlan.bind(this);
    this.upgradedConsensusState = this.upgradedConsensusState.bind(this);
    this.moduleVersions = this.moduleVersions.bind(this);
    this.authority = this.authority.bind(this);
  }
  /* CurrentPlan queries the current upgrade plan. */
  async currentPlan(_params: QueryCurrentPlanRequest = {}): Promise<QueryCurrentPlanResponseSDKType> {
    const endpoint = `cosmos/upgrade/v1beta1/current_plan`;
    return QueryCurrentPlanResponse.fromSDKJSON(await this.req.get<QueryCurrentPlanResponseSDKType>(endpoint));
  }
  /* AppliedPlan queries a previously applied upgrade plan by its name. */
  async appliedPlan(params: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponseSDKType> {
    const endpoint = `cosmos/upgrade/v1beta1/applied_plan/${params.name}`;
    return QueryAppliedPlanResponse.fromSDKJSON(await this.req.get<QueryAppliedPlanResponseSDKType>(endpoint));
  }
  /* UpgradedConsensusState queries the consensus state that will serve
   as a trusted kernel for the next version of this chain. It will only be
   stored at the last height of this chain.
   UpgradedConsensusState RPC not supported with legacy querier
   This rpc is deprecated now that IBC has its own replacement
   (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54) */
  async upgradedConsensusState(params: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponseSDKType> {
    const endpoint = `cosmos/upgrade/v1beta1/upgraded_consensus_state/${params.lastHeight}`;
    return QueryUpgradedConsensusStateResponse.fromSDKJSON(await this.req.get<QueryUpgradedConsensusStateResponseSDKType>(endpoint));
  }
  /* ModuleVersions queries the list of module versions from state.
  
   Since: cosmos-sdk 0.43 */
  async moduleVersions(params: QueryModuleVersionsRequest): Promise<QueryModuleVersionsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.moduleName !== "undefined") {
      options.params.module_name = params.moduleName;
    }
    const endpoint = `cosmos/upgrade/v1beta1/module_versions`;
    return QueryModuleVersionsResponse.fromSDKJSON(await this.req.get<QueryModuleVersionsResponseSDKType>(endpoint, options));
  }
  /* Returns the account with authority to conduct upgrades */
  async authority(_params: QueryAuthorityRequest = {}): Promise<QueryAuthorityResponseSDKType> {
    const endpoint = `cosmos/upgrade/v1beta1/authority`;
    return QueryAuthorityResponse.fromSDKJSON(await this.req.get<QueryAuthorityResponseSDKType>(endpoint));
  }
}