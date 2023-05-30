import { DeploymentID, DeploymentIDSDKType } from "./deployment";
import { GroupSpec, GroupSpecSDKType } from "./groupspec";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { GroupID, GroupIDSDKType } from "./groupid";
import * as fm from "../../../grpc-gateway";
import { MsgCreateDeployment, MsgCreateDeploymentSDKType, MsgCreateDeploymentResponse, MsgCreateDeploymentResponseSDKType, MsgDepositDeployment, MsgDepositDeploymentSDKType, MsgDepositDeploymentResponse, MsgDepositDeploymentResponseSDKType, MsgUpdateDeployment, MsgUpdateDeploymentSDKType, MsgUpdateDeploymentResponse, MsgUpdateDeploymentResponseSDKType, MsgCloseDeployment, MsgCloseDeploymentSDKType, MsgCloseDeploymentResponse, MsgCloseDeploymentResponseSDKType } from "./deploymentmsg";
import { MsgCloseGroup, MsgCloseGroupSDKType, MsgCloseGroupResponse, MsgCloseGroupResponseSDKType, MsgPauseGroup, MsgPauseGroupSDKType, MsgPauseGroupResponse, MsgPauseGroupResponseSDKType, MsgStartGroup, MsgStartGroupSDKType, MsgStartGroupResponse, MsgStartGroupResponseSDKType } from "./groupmsg";
export class Msg {
  /** CreateDeployment defines a method to create new deployment given proper inputs. */
  static createDeployment(request: MsgCreateDeployment, initRequest?: fm.InitReq): Promise<MsgCreateDeploymentResponse> {
    return fm.fetchReq(`/akash.deployment.v1beta2/createDeployment`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** DepositDeployment deposits more funds into the deployment account */
  static depositDeployment(request: MsgDepositDeployment, initRequest?: fm.InitReq): Promise<MsgDepositDeploymentResponse> {
    return fm.fetchReq(`/akash.deployment.v1beta2/depositDeployment`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** UpdateDeployment defines a method to update a deployment given proper inputs. */
  static updateDeployment(request: MsgUpdateDeployment, initRequest?: fm.InitReq): Promise<MsgUpdateDeploymentResponse> {
    return fm.fetchReq(`/akash.deployment.v1beta2/updateDeployment`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** CloseDeployment defines a method to close a deployment given proper inputs. */
  static closeDeployment(request: MsgCloseDeployment, initRequest?: fm.InitReq): Promise<MsgCloseDeploymentResponse> {
    return fm.fetchReq(`/akash.deployment.v1beta2/closeDeployment`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** CloseGroup defines a method to close a group of a deployment given proper inputs. */
  static closeGroup(request: MsgCloseGroup, initRequest?: fm.InitReq): Promise<MsgCloseGroupResponse> {
    return fm.fetchReq(`/akash.deployment.v1beta2/closeGroup`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** PauseGroup defines a method to close a group of a deployment given proper inputs. */
  static pauseGroup(request: MsgPauseGroup, initRequest?: fm.InitReq): Promise<MsgPauseGroupResponse> {
    return fm.fetchReq(`/akash.deployment.v1beta2/pauseGroup`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** StartGroup defines a method to close a group of a deployment given proper inputs. */
  static startGroup(request: MsgStartGroup, initRequest?: fm.InitReq): Promise<MsgStartGroupResponse> {
    return fm.fetchReq(`/akash.deployment.v1beta2/startGroup`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}