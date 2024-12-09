import { Deployment, DeploymentSDKType } from "./deployment";
import { Group, GroupSDKType } from "./group";
import { Params, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { ComputedRef } from "vue";
export const protobufPackage = "akash.deployment.v1beta2";
/** GenesisDeployment defines the basic genesis state used by deployment module */
export interface GenesisDeployment {
  deployment: Deployment;
  groups: Group[];
}
export interface ReactiveGenesisDeployment {
  deployment: ComputedRef<Deployment>;
  groups: ComputedRef<Group[]>;
}
export interface GenesisDeploymentProtoMsg {
  typeUrl: "/akash.deployment.v1beta2.GenesisDeployment";
  value: Uint8Array;
}
/** GenesisDeployment defines the basic genesis state used by deployment module */
export interface GenesisDeploymentSDKType {
  deployment: DeploymentSDKType;
  groups: GroupSDKType[];
}
/** GenesisState stores slice of genesis deployment instance */
export interface GenesisState {
  deployments: GenesisDeployment[];
  params: Params;
}
export interface ReactiveGenesisState {
  deployments: ComputedRef<GenesisDeployment[]>;
  params: ComputedRef<Params>;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/akash.deployment.v1beta2.GenesisState";
  value: Uint8Array;
}
/** GenesisState stores slice of genesis deployment instance */
export interface GenesisStateSDKType {
  deployments: GenesisDeploymentSDKType[];
  params: ParamsSDKType;
}
function createBaseGenesisDeployment(): GenesisDeployment {
  return {
    deployment: Deployment.fromPartial({}),
    groups: []
  };
}
export const GenesisDeployment = {
  typeUrl: "/akash.deployment.v1beta2.GenesisDeployment",
  encode(message: GenesisDeployment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deployment !== undefined) {
      Deployment.encode(message.deployment, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.groups) {
      Group.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisDeployment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisDeployment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deployment = Deployment.decode(reader, reader.uint32());
          break;
        case 2:
          message.groups.push(Group.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisDeployment {
    return {
      deployment: isSet(object.deployment) ? Deployment.fromJSON(object.deployment) : undefined,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => Group.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisDeployment): JsonSafe<GenesisDeployment> {
    const obj: any = {};
    message.deployment !== undefined && (obj.deployment = message.deployment ? Deployment.toJSON(message.deployment) : undefined);
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? Group.toJSON(e) : undefined);
    } else {
      obj.groups = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisDeployment>, I>>(object: I): GenesisDeployment {
    const message = createBaseGenesisDeployment();
    message.deployment = object.deployment !== undefined && object.deployment !== null ? Deployment.fromPartial(object.deployment) : undefined;
    message.groups = object.groups?.map(e => Group.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisDeploymentSDKType): GenesisDeployment {
    return {
      deployment: object.deployment ? Deployment.fromSDK(object.deployment) : undefined,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => Group.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): GenesisDeploymentSDKType {
    return {
      deployment: isSet(object.deployment) ? Deployment.fromSDKJSON(object.deployment) : undefined,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => Group.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: GenesisDeployment): GenesisDeploymentSDKType {
    const obj: any = {};
    message.deployment !== undefined && (obj.deployment = message.deployment ? Deployment.toSDK(message.deployment) : undefined);
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? Group.toSDK(e) : undefined);
    } else {
      obj.groups = [];
    }
    return obj;
  },
  fromAmino(object: GenesisDeploymentAmino): GenesisDeployment {
    const message = createBaseGenesisDeployment();
    if (object.deployment !== undefined && object.deployment !== null) {
      message.deployment = Deployment.fromAmino(object.deployment);
    }
    message.groups = object.groups?.map(e => Group.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisDeployment): GenesisDeploymentAmino {
    const obj: any = {};
    obj.deployment = message.deployment ? Deployment.toAmino(message.deployment) : Deployment.toAmino(Deployment.fromPartial({}));
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? Group.toAmino(e) : undefined);
    } else {
      obj.groups = message.groups;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisDeploymentAminoMsg): GenesisDeployment {
    return GenesisDeployment.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisDeployment): GenesisDeploymentAminoMsg {
    return {
      type: "akash/deployment/v1beta2/genesis-deployment",
      value: GenesisDeployment.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisDeploymentProtoMsg): GenesisDeployment {
    return GenesisDeployment.decode(message.value);
  },
  toProto(message: GenesisDeployment): Uint8Array {
    return GenesisDeployment.encode(message).finish();
  },
  toProtoMsg(message: GenesisDeployment): GenesisDeploymentProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta2.GenesisDeployment",
      value: GenesisDeployment.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    deployments: [],
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/akash.deployment.v1beta2.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.deployments) {
      GenesisDeployment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deployments.push(GenesisDeployment.decode(reader, reader.uint32()));
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      deployments: Array.isArray(object?.deployments) ? object.deployments.map((e: any) => GenesisDeployment.fromJSON(e)) : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    if (message.deployments) {
      obj.deployments = message.deployments.map(e => e ? GenesisDeployment.toJSON(e) : undefined);
    } else {
      obj.deployments = [];
    }
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.deployments = object.deployments?.map(e => GenesisDeployment.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      deployments: Array.isArray(object?.deployments) ? object.deployments.map((e: any) => GenesisDeployment.fromSDK(e)) : [],
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  fromSDKJSON(object: any): GenesisStateSDKType {
    return {
      deployments: Array.isArray(object?.deployments) ? object.deployments.map((e: any) => GenesisDeployment.fromSDKJSON(e)) : [],
      params: isSet(object.params) ? Params.fromSDKJSON(object.params) : undefined
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    if (message.deployments) {
      obj.deployments = message.deployments.map(e => e ? GenesisDeployment.toSDK(e) : undefined);
    } else {
      obj.deployments = [];
    }
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.deployments = object.deployments?.map(e => GenesisDeployment.fromAmino(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.deployments) {
      obj.deployments = message.deployments.map(e => e ? GenesisDeployment.toAmino(e) : undefined);
    } else {
      obj.deployments = message.deployments;
    }
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "akash/deployment/v1beta2/genesis-state",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta2.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};