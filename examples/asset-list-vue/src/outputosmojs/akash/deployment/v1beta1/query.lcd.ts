import { DeploymentFilters, DeploymentFiltersSDKType, DeploymentID, DeploymentIDSDKType, Deployment, DeploymentSDKType } from "./deployment";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { GroupID, GroupIDSDKType, Group, GroupSDKType } from "./group";
import { Account, AccountSDKType } from "../../escrow/v1beta1/types";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryDeploymentsRequest, QueryDeploymentsRequestSDKType, QueryDeploymentsResponse, QueryDeploymentsResponseSDKType, QueryDeploymentRequest, QueryDeploymentRequestSDKType, QueryDeploymentResponse, QueryDeploymentResponseSDKType, QueryGroupRequest, QueryGroupRequestSDKType, QueryGroupResponse, QueryGroupResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Deployments queries deployments */
  deployments = async (params: QueryDeploymentsRequest): Promise<QueryDeploymentsResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.filters !== "undefined") {
      options.params.filters = params.filters;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `akash/deployment/v1beta1/deployments/list`;
    return QueryDeploymentsResponse.fromSDKJSON(await this.req.get<QueryDeploymentsResponseSDKType>(endpoint, options));
  };
  /* Deployment queries deployment details */
  deployment = async (params: QueryDeploymentRequest): Promise<QueryDeploymentResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.id !== "undefined") {
      options.params.id = params.id;
    }
    const endpoint = `akash/deployment/v1beta1/deployments/info`;
    return QueryDeploymentResponse.fromSDKJSON(await this.req.get<QueryDeploymentResponseSDKType>(endpoint, options));
  };
  /* Group queries group details */
  group = async (params: QueryGroupRequest): Promise<QueryGroupResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.id !== "undefined") {
      options.params.id = params.id;
    }
    const endpoint = `akash/deployment/v1beta1/groups/info`;
    return QueryGroupResponse.fromSDKJSON(await this.req.get<QueryGroupResponseSDKType>(endpoint, options));
  };
}