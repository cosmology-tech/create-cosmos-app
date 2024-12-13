import { DeploymentID, DeploymentIDSDKType } from "./deployment";
import { GroupSpec, GroupSpecSDKType } from "./groupspec";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { GroupID, GroupIDSDKType } from "./groupid";
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgCreateDeployment, MsgCreateDeploymentSDKType, MsgCreateDeploymentResponse, MsgCreateDeploymentResponseSDKType, MsgDepositDeployment, MsgDepositDeploymentSDKType, MsgDepositDeploymentResponse, MsgDepositDeploymentResponseSDKType, MsgUpdateDeployment, MsgUpdateDeploymentSDKType, MsgUpdateDeploymentResponse, MsgUpdateDeploymentResponseSDKType, MsgCloseDeployment, MsgCloseDeploymentSDKType, MsgCloseDeploymentResponse, MsgCloseDeploymentResponseSDKType } from "./deploymentmsg";
import { MsgCloseGroup, MsgCloseGroupSDKType, MsgCloseGroupResponse, MsgCloseGroupResponseSDKType, MsgPauseGroup, MsgPauseGroupSDKType, MsgPauseGroupResponse, MsgPauseGroupResponseSDKType, MsgStartGroup, MsgStartGroupSDKType, MsgStartGroupResponse, MsgStartGroupResponseSDKType } from "./groupmsg";
/** Msg defines the deployment Msg service. */
export interface Msg {
  /** CreateDeployment defines a method to create new deployment given proper inputs. */
  createDeployment(request: MsgCreateDeployment): Promise<MsgCreateDeploymentResponse>;
  /** DepositDeployment deposits more funds into the deployment account */
  depositDeployment(request: MsgDepositDeployment): Promise<MsgDepositDeploymentResponse>;
  /** UpdateDeployment defines a method to update a deployment given proper inputs. */
  updateDeployment(request: MsgUpdateDeployment): Promise<MsgUpdateDeploymentResponse>;
  /** CloseDeployment defines a method to close a deployment given proper inputs. */
  closeDeployment(request: MsgCloseDeployment): Promise<MsgCloseDeploymentResponse>;
  /** CloseGroup defines a method to close a group of a deployment given proper inputs. */
  closeGroup(request: MsgCloseGroup): Promise<MsgCloseGroupResponse>;
  /** PauseGroup defines a method to close a group of a deployment given proper inputs. */
  pauseGroup(request: MsgPauseGroup): Promise<MsgPauseGroupResponse>;
  /** StartGroup defines a method to close a group of a deployment given proper inputs. */
  startGroup(request: MsgStartGroup): Promise<MsgStartGroupResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  /* CreateDeployment defines a method to create new deployment given proper inputs. */
  createDeployment = async (request: MsgCreateDeployment): Promise<MsgCreateDeploymentResponse> => {
    const data = MsgCreateDeployment.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta2.Msg", "CreateDeployment", data);
    return promise.then(data => MsgCreateDeploymentResponse.decode(new BinaryReader(data)));
  };
  /* DepositDeployment deposits more funds into the deployment account */
  depositDeployment = async (request: MsgDepositDeployment): Promise<MsgDepositDeploymentResponse> => {
    const data = MsgDepositDeployment.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta2.Msg", "DepositDeployment", data);
    return promise.then(data => MsgDepositDeploymentResponse.decode(new BinaryReader(data)));
  };
  /* UpdateDeployment defines a method to update a deployment given proper inputs. */
  updateDeployment = async (request: MsgUpdateDeployment): Promise<MsgUpdateDeploymentResponse> => {
    const data = MsgUpdateDeployment.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta2.Msg", "UpdateDeployment", data);
    return promise.then(data => MsgUpdateDeploymentResponse.decode(new BinaryReader(data)));
  };
  /* CloseDeployment defines a method to close a deployment given proper inputs. */
  closeDeployment = async (request: MsgCloseDeployment): Promise<MsgCloseDeploymentResponse> => {
    const data = MsgCloseDeployment.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta2.Msg", "CloseDeployment", data);
    return promise.then(data => MsgCloseDeploymentResponse.decode(new BinaryReader(data)));
  };
  /* CloseGroup defines a method to close a group of a deployment given proper inputs. */
  closeGroup = async (request: MsgCloseGroup): Promise<MsgCloseGroupResponse> => {
    const data = MsgCloseGroup.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta2.Msg", "CloseGroup", data);
    return promise.then(data => MsgCloseGroupResponse.decode(new BinaryReader(data)));
  };
  /* PauseGroup defines a method to close a group of a deployment given proper inputs. */
  pauseGroup = async (request: MsgPauseGroup): Promise<MsgPauseGroupResponse> => {
    const data = MsgPauseGroup.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta2.Msg", "PauseGroup", data);
    return promise.then(data => MsgPauseGroupResponse.decode(new BinaryReader(data)));
  };
  /* StartGroup defines a method to close a group of a deployment given proper inputs. */
  startGroup = async (request: MsgStartGroup): Promise<MsgStartGroupResponse> => {
    const data = MsgStartGroup.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta2.Msg", "StartGroup", data);
    return promise.then(data => MsgStartGroupResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: Rpc) => {
  return new MsgClientImpl(rpc);
};