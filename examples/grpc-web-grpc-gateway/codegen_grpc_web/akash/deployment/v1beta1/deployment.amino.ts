/* eslint-disable */
import { MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "./group";
import { MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "./deployment";
export const AminoConverter = {
  "/akash.deployment.v1beta1.MsgCreateDeployment": {
    aminoType: "/akash.deployment.v1beta1.MsgCreateDeployment",
    toAmino: MsgCreateDeployment.toAmino,
    fromAmino: MsgCreateDeployment.fromAmino
  },
  "/akash.deployment.v1beta1.MsgDepositDeployment": {
    aminoType: "/akash.deployment.v1beta1.MsgDepositDeployment",
    toAmino: MsgDepositDeployment.toAmino,
    fromAmino: MsgDepositDeployment.fromAmino
  },
  "/akash.deployment.v1beta1.MsgUpdateDeployment": {
    aminoType: "/akash.deployment.v1beta1.MsgUpdateDeployment",
    toAmino: MsgUpdateDeployment.toAmino,
    fromAmino: MsgUpdateDeployment.fromAmino
  },
  "/akash.deployment.v1beta1.MsgCloseDeployment": {
    aminoType: "/akash.deployment.v1beta1.MsgCloseDeployment",
    toAmino: MsgCloseDeployment.toAmino,
    fromAmino: MsgCloseDeployment.fromAmino
  },
  "/akash.deployment.v1beta1.MsgCloseGroup": {
    aminoType: "/akash.deployment.v1beta1.MsgCloseGroup",
    toAmino: MsgCloseGroup.toAmino,
    fromAmino: MsgCloseGroup.fromAmino
  },
  "/akash.deployment.v1beta1.MsgPauseGroup": {
    aminoType: "/akash.deployment.v1beta1.MsgPauseGroup",
    toAmino: MsgPauseGroup.toAmino,
    fromAmino: MsgPauseGroup.fromAmino
  },
  "/akash.deployment.v1beta1.MsgStartGroup": {
    aminoType: "/akash.deployment.v1beta1.MsgStartGroup",
    toAmino: MsgStartGroup.toAmino,
    fromAmino: MsgStartGroup.fromAmino
  }
};