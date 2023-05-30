import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgCreateGroup, MsgCreateGroupResponse, MsgUpdateGroupMembers, MsgUpdateGroupMembersResponse, MsgUpdateGroupAdmin, MsgUpdateGroupAdminResponse, MsgUpdateGroupMetadata, MsgUpdateGroupMetadataResponse, MsgCreateGroupPolicy, MsgCreateGroupPolicyResponse, MsgCreateGroupWithPolicy, MsgCreateGroupWithPolicyResponse, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyAdminResponse, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyDecisionPolicyResponse, MsgUpdateGroupPolicyMetadata, MsgUpdateGroupPolicyMetadataResponse, MsgSubmitProposal, MsgSubmitProposalResponse, MsgWithdrawProposal, MsgWithdrawProposalResponse, MsgVote, MsgVoteResponse, MsgExec, MsgExecResponse, MsgLeaveGroup, MsgLeaveGroupResponse } from "./tx";
/** Msg is the cosmos.group.v1 Msg service. */
export interface Msg {
  /** CreateGroup creates a new group with an admin account address, a list of members and some optional metadata. */
  createGroup(request: DeepPartial<MsgCreateGroup>, metadata?: grpc.Metadata): Promise<MsgCreateGroupResponse>;
  /** UpdateGroupMembers updates the group members with given group id and admin address. */
  updateGroupMembers(request: DeepPartial<MsgUpdateGroupMembers>, metadata?: grpc.Metadata): Promise<MsgUpdateGroupMembersResponse>;
  /** UpdateGroupAdmin updates the group admin with given group id and previous admin address. */
  updateGroupAdmin(request: DeepPartial<MsgUpdateGroupAdmin>, metadata?: grpc.Metadata): Promise<MsgUpdateGroupAdminResponse>;
  /** UpdateGroupMetadata updates the group metadata with given group id and admin address. */
  updateGroupMetadata(request: DeepPartial<MsgUpdateGroupMetadata>, metadata?: grpc.Metadata): Promise<MsgUpdateGroupMetadataResponse>;
  /** CreateGroupPolicy creates a new group policy using given DecisionPolicy. */
  createGroupPolicy(request: DeepPartial<MsgCreateGroupPolicy>, metadata?: grpc.Metadata): Promise<MsgCreateGroupPolicyResponse>;
  /** CreateGroupWithPolicy creates a new group with policy. */
  createGroupWithPolicy(request: DeepPartial<MsgCreateGroupWithPolicy>, metadata?: grpc.Metadata): Promise<MsgCreateGroupWithPolicyResponse>;
  /** UpdateGroupPolicyAdmin updates a group policy admin. */
  updateGroupPolicyAdmin(request: DeepPartial<MsgUpdateGroupPolicyAdmin>, metadata?: grpc.Metadata): Promise<MsgUpdateGroupPolicyAdminResponse>;
  /** UpdateGroupPolicyDecisionPolicy allows a group policy's decision policy to be updated. */
  updateGroupPolicyDecisionPolicy(request: DeepPartial<MsgUpdateGroupPolicyDecisionPolicy>, metadata?: grpc.Metadata): Promise<MsgUpdateGroupPolicyDecisionPolicyResponse>;
  /** UpdateGroupPolicyMetadata updates a group policy metadata. */
  updateGroupPolicyMetadata(request: DeepPartial<MsgUpdateGroupPolicyMetadata>, metadata?: grpc.Metadata): Promise<MsgUpdateGroupPolicyMetadataResponse>;
  /** SubmitProposal submits a new proposal. */
  submitProposal(request: DeepPartial<MsgSubmitProposal>, metadata?: grpc.Metadata): Promise<MsgSubmitProposalResponse>;
  /** WithdrawProposal aborts a proposal. */
  withdrawProposal(request: DeepPartial<MsgWithdrawProposal>, metadata?: grpc.Metadata): Promise<MsgWithdrawProposalResponse>;
  /** Vote allows a voter to vote on a proposal. */
  vote(request: DeepPartial<MsgVote>, metadata?: grpc.Metadata): Promise<MsgVoteResponse>;
  /** Exec executes a proposal. */
  exec(request: DeepPartial<MsgExec>, metadata?: grpc.Metadata): Promise<MsgExecResponse>;
  /** LeaveGroup allows a group member to leave the group. */
  leaveGroup(request: DeepPartial<MsgLeaveGroup>, metadata?: grpc.Metadata): Promise<MsgLeaveGroupResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createGroup = this.createGroup.bind(this);
    this.updateGroupMembers = this.updateGroupMembers.bind(this);
    this.updateGroupAdmin = this.updateGroupAdmin.bind(this);
    this.updateGroupMetadata = this.updateGroupMetadata.bind(this);
    this.createGroupPolicy = this.createGroupPolicy.bind(this);
    this.createGroupWithPolicy = this.createGroupWithPolicy.bind(this);
    this.updateGroupPolicyAdmin = this.updateGroupPolicyAdmin.bind(this);
    this.updateGroupPolicyDecisionPolicy = this.updateGroupPolicyDecisionPolicy.bind(this);
    this.updateGroupPolicyMetadata = this.updateGroupPolicyMetadata.bind(this);
    this.submitProposal = this.submitProposal.bind(this);
    this.withdrawProposal = this.withdrawProposal.bind(this);
    this.vote = this.vote.bind(this);
    this.exec = this.exec.bind(this);
    this.leaveGroup = this.leaveGroup.bind(this);
  }
  createGroup(request: DeepPartial<MsgCreateGroup>, metadata?: grpc.Metadata): Promise<MsgCreateGroupResponse> {
    return this.rpc.unary(MsgCreateGroupDesc, MsgCreateGroup.fromPartial(request), metadata);
  }
  updateGroupMembers(request: DeepPartial<MsgUpdateGroupMembers>, metadata?: grpc.Metadata): Promise<MsgUpdateGroupMembersResponse> {
    return this.rpc.unary(MsgUpdateGroupMembersDesc, MsgUpdateGroupMembers.fromPartial(request), metadata);
  }
  updateGroupAdmin(request: DeepPartial<MsgUpdateGroupAdmin>, metadata?: grpc.Metadata): Promise<MsgUpdateGroupAdminResponse> {
    return this.rpc.unary(MsgUpdateGroupAdminDesc, MsgUpdateGroupAdmin.fromPartial(request), metadata);
  }
  updateGroupMetadata(request: DeepPartial<MsgUpdateGroupMetadata>, metadata?: grpc.Metadata): Promise<MsgUpdateGroupMetadataResponse> {
    return this.rpc.unary(MsgUpdateGroupMetadataDesc, MsgUpdateGroupMetadata.fromPartial(request), metadata);
  }
  createGroupPolicy(request: DeepPartial<MsgCreateGroupPolicy>, metadata?: grpc.Metadata): Promise<MsgCreateGroupPolicyResponse> {
    return this.rpc.unary(MsgCreateGroupPolicyDesc, MsgCreateGroupPolicy.fromPartial(request), metadata);
  }
  createGroupWithPolicy(request: DeepPartial<MsgCreateGroupWithPolicy>, metadata?: grpc.Metadata): Promise<MsgCreateGroupWithPolicyResponse> {
    return this.rpc.unary(MsgCreateGroupWithPolicyDesc, MsgCreateGroupWithPolicy.fromPartial(request), metadata);
  }
  updateGroupPolicyAdmin(request: DeepPartial<MsgUpdateGroupPolicyAdmin>, metadata?: grpc.Metadata): Promise<MsgUpdateGroupPolicyAdminResponse> {
    return this.rpc.unary(MsgUpdateGroupPolicyAdminDesc, MsgUpdateGroupPolicyAdmin.fromPartial(request), metadata);
  }
  updateGroupPolicyDecisionPolicy(request: DeepPartial<MsgUpdateGroupPolicyDecisionPolicy>, metadata?: grpc.Metadata): Promise<MsgUpdateGroupPolicyDecisionPolicyResponse> {
    return this.rpc.unary(MsgUpdateGroupPolicyDecisionPolicyDesc, MsgUpdateGroupPolicyDecisionPolicy.fromPartial(request), metadata);
  }
  updateGroupPolicyMetadata(request: DeepPartial<MsgUpdateGroupPolicyMetadata>, metadata?: grpc.Metadata): Promise<MsgUpdateGroupPolicyMetadataResponse> {
    return this.rpc.unary(MsgUpdateGroupPolicyMetadataDesc, MsgUpdateGroupPolicyMetadata.fromPartial(request), metadata);
  }
  submitProposal(request: DeepPartial<MsgSubmitProposal>, metadata?: grpc.Metadata): Promise<MsgSubmitProposalResponse> {
    return this.rpc.unary(MsgSubmitProposalDesc, MsgSubmitProposal.fromPartial(request), metadata);
  }
  withdrawProposal(request: DeepPartial<MsgWithdrawProposal>, metadata?: grpc.Metadata): Promise<MsgWithdrawProposalResponse> {
    return this.rpc.unary(MsgWithdrawProposalDesc, MsgWithdrawProposal.fromPartial(request), metadata);
  }
  vote(request: DeepPartial<MsgVote>, metadata?: grpc.Metadata): Promise<MsgVoteResponse> {
    return this.rpc.unary(MsgVoteDesc, MsgVote.fromPartial(request), metadata);
  }
  exec(request: DeepPartial<MsgExec>, metadata?: grpc.Metadata): Promise<MsgExecResponse> {
    return this.rpc.unary(MsgExecDesc, MsgExec.fromPartial(request), metadata);
  }
  leaveGroup(request: DeepPartial<MsgLeaveGroup>, metadata?: grpc.Metadata): Promise<MsgLeaveGroupResponse> {
    return this.rpc.unary(MsgLeaveGroupDesc, MsgLeaveGroup.fromPartial(request), metadata);
  }
}
export const MsgDesc = {
  serviceName: "cosmos.group.v1.Msg"
};
export const MsgCreateGroupDesc: UnaryMethodDefinitionish = {
  methodName: "CreateGroup",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgCreateGroup.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCreateGroupResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgUpdateGroupMembersDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateGroupMembers",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgUpdateGroupMembers.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpdateGroupMembersResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgUpdateGroupAdminDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateGroupAdmin",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgUpdateGroupAdmin.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpdateGroupAdminResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgUpdateGroupMetadataDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateGroupMetadata",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgUpdateGroupMetadata.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpdateGroupMetadataResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgCreateGroupPolicyDesc: UnaryMethodDefinitionish = {
  methodName: "CreateGroupPolicy",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgCreateGroupPolicy.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCreateGroupPolicyResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgCreateGroupWithPolicyDesc: UnaryMethodDefinitionish = {
  methodName: "CreateGroupWithPolicy",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgCreateGroupWithPolicy.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCreateGroupWithPolicyResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgUpdateGroupPolicyAdminDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateGroupPolicyAdmin",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgUpdateGroupPolicyAdmin.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpdateGroupPolicyAdminResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgUpdateGroupPolicyDecisionPolicyDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateGroupPolicyDecisionPolicy",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgUpdateGroupPolicyDecisionPolicy.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpdateGroupPolicyDecisionPolicyResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgUpdateGroupPolicyMetadataDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateGroupPolicyMetadata",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgUpdateGroupPolicyMetadata.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpdateGroupPolicyMetadataResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgSubmitProposalDesc: UnaryMethodDefinitionish = {
  methodName: "SubmitProposal",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgSubmitProposal.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSubmitProposalResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgWithdrawProposalDesc: UnaryMethodDefinitionish = {
  methodName: "WithdrawProposal",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgWithdrawProposal.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgWithdrawProposalResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgVoteDesc: UnaryMethodDefinitionish = {
  methodName: "Vote",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgVote.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgVoteResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgExecDesc: UnaryMethodDefinitionish = {
  methodName: "Exec",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgExec.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgExecResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgLeaveGroupDesc: UnaryMethodDefinitionish = {
  methodName: "LeaveGroup",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgLeaveGroup.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgLeaveGroupResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
export class GrpcWebImpl {
  host: string;
  options: {
    transport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  };
  constructor(host: string, options: {
    transport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  }) {
    this.host = host;
    this.options = options;
  }
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, _request: any, metadata: grpc.Metadata | undefined) {
    const request = {
      ..._request,
      ...methodDesc.requestType
    };
    const maybeCombinedMetadata = metadata && this.options.metadata ? new BrowserHeaders({
      ...this.options?.metadata.headersMap,
      ...metadata?.headersMap
    }) : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = (new Error(response.statusMessage) as any);
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        }
      });
    });
  }
}