import { voteOptionFromJSON } from "./types";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { execFromJSON, MsgCreateGroup, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupPolicy, MsgCreateGroupWithPolicy, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyMetadata, MsgSubmitProposal, MsgWithdrawProposal, MsgVote, MsgExec, MsgLeaveGroup } from "./tx";
export interface MsgCreateGroupAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgCreateGroup";
  value: {
    admin: string;
    members: {
      address: string;
      weight: string;
      metadata: string;
      added_at: {
        seconds: string;
        nanos: number;
      };
    }[];
    metadata: string;
  };
}
export interface MsgUpdateGroupMembersAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupMembers";
  value: {
    admin: string;
    group_id: string;
    member_updates: {
      address: string;
      weight: string;
      metadata: string;
      added_at: {
        seconds: string;
        nanos: number;
      };
    }[];
  };
}
export interface MsgUpdateGroupAdminAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupAdmin";
  value: {
    admin: string;
    group_id: string;
    new_admin: string;
  };
}
export interface MsgUpdateGroupMetadataAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupMetadata";
  value: {
    admin: string;
    group_id: string;
    metadata: string;
  };
}
export interface MsgCreateGroupPolicyAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgCreateGroupPolicy";
  value: {
    admin: string;
    group_id: string;
    metadata: string;
    decision_policy: {
      type_url: string;
      value: Uint8Array;
    };
  };
}
export interface MsgCreateGroupWithPolicyAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgCreateGroupWithPolicy";
  value: {
    admin: string;
    members: {
      address: string;
      weight: string;
      metadata: string;
      added_at: {
        seconds: string;
        nanos: number;
      };
    }[];
    group_metadata: string;
    group_policy_metadata: string;
    group_policy_as_admin: boolean;
    decision_policy: {
      type_url: string;
      value: Uint8Array;
    };
  };
}
export interface MsgUpdateGroupPolicyAdminAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupPolicyAdmin";
  value: {
    admin: string;
    address: string;
    new_admin: string;
  };
}
export interface MsgUpdateGroupPolicyDecisionPolicyAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupPolicyDecisionPolicy";
  value: {
    admin: string;
    address: string;
    decision_policy: {
      type_url: string;
      value: Uint8Array;
    };
  };
}
export interface MsgUpdateGroupPolicyMetadataAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupPolicyMetadata";
  value: {
    admin: string;
    address: string;
    metadata: string;
  };
}
export interface MsgSubmitProposalAminoType extends AminoMsg {
  type: "cosmos-sdk/group/MsgSubmitProposal";
  value: {
    address: string;
    proposers: string[];
    metadata: string;
    messages: {
      type_url: string;
      value: Uint8Array;
    }[];
    exec: number;
  };
}
export interface MsgWithdrawProposalAminoType extends AminoMsg {
  type: "cosmos-sdk/group/MsgWithdrawProposal";
  value: {
    proposal_id: string;
    address: string;
  };
}
export interface MsgVoteAminoType extends AminoMsg {
  type: "cosmos-sdk/group/MsgVote";
  value: {
    proposal_id: string;
    voter: string;
    option: number;
    metadata: string;
    exec: number;
  };
}
export interface MsgExecAminoType extends AminoMsg {
  type: "cosmos-sdk/group/MsgExec";
  value: {
    proposal_id: string;
    signer: string;
  };
}
export interface MsgLeaveGroupAminoType extends AminoMsg {
  type: "cosmos-sdk/group/MsgLeaveGroup";
  value: {
    address: string;
    group_id: string;
  };
}
export const AminoConverter = {
  "/cosmos.group.v1.MsgCreateGroup": {
    aminoType: "cosmos-sdk/MsgCreateGroup",
    toAmino: ({
      admin,
      members,
      metadata
    }: MsgCreateGroup): MsgCreateGroupAminoType["value"] => {
      return {
        admin,
        members: members.map(el0 => ({
          address: el0.address,
          weight: el0.weight,
          metadata: el0.metadata,
          added_at: el0.addedAt
        })),
        metadata
      };
    },
    fromAmino: ({
      admin,
      members,
      metadata
    }: MsgCreateGroupAminoType["value"]): MsgCreateGroup => {
      return {
        admin,
        members: members.map(el0 => ({
          address: el0.address,
          weight: el0.weight,
          metadata: el0.metadata,
          addedAt: el0.added_at
        })),
        metadata
      };
    }
  },
  "/cosmos.group.v1.MsgUpdateGroupMembers": {
    aminoType: "cosmos-sdk/MsgUpdateGroupMembers",
    toAmino: ({
      admin,
      groupId,
      memberUpdates
    }: MsgUpdateGroupMembers): MsgUpdateGroupMembersAminoType["value"] => {
      return {
        admin,
        group_id: groupId.toString(),
        member_updates: memberUpdates.map(el0 => ({
          address: el0.address,
          weight: el0.weight,
          metadata: el0.metadata,
          added_at: el0.addedAt
        }))
      };
    },
    fromAmino: ({
      admin,
      group_id,
      member_updates
    }: MsgUpdateGroupMembersAminoType["value"]): MsgUpdateGroupMembers => {
      return {
        admin,
        groupId: Long.fromString(group_id),
        memberUpdates: member_updates.map(el0 => ({
          address: el0.address,
          weight: el0.weight,
          metadata: el0.metadata,
          addedAt: el0.added_at
        }))
      };
    }
  },
  "/cosmos.group.v1.MsgUpdateGroupAdmin": {
    aminoType: "cosmos-sdk/MsgUpdateGroupAdmin",
    toAmino: ({
      admin,
      groupId,
      newAdmin
    }: MsgUpdateGroupAdmin): MsgUpdateGroupAdminAminoType["value"] => {
      return {
        admin,
        group_id: groupId.toString(),
        new_admin: newAdmin
      };
    },
    fromAmino: ({
      admin,
      group_id,
      new_admin
    }: MsgUpdateGroupAdminAminoType["value"]): MsgUpdateGroupAdmin => {
      return {
        admin,
        groupId: Long.fromString(group_id),
        newAdmin: new_admin
      };
    }
  },
  "/cosmos.group.v1.MsgUpdateGroupMetadata": {
    aminoType: "cosmos-sdk/MsgUpdateGroupMetadata",
    toAmino: ({
      admin,
      groupId,
      metadata
    }: MsgUpdateGroupMetadata): MsgUpdateGroupMetadataAminoType["value"] => {
      return {
        admin,
        group_id: groupId.toString(),
        metadata
      };
    },
    fromAmino: ({
      admin,
      group_id,
      metadata
    }: MsgUpdateGroupMetadataAminoType["value"]): MsgUpdateGroupMetadata => {
      return {
        admin,
        groupId: Long.fromString(group_id),
        metadata
      };
    }
  },
  "/cosmos.group.v1.MsgCreateGroupPolicy": {
    aminoType: "cosmos-sdk/MsgCreateGroupPolicy",
    toAmino: ({
      admin,
      groupId,
      metadata,
      decisionPolicy
    }: MsgCreateGroupPolicy): MsgCreateGroupPolicyAminoType["value"] => {
      return {
        admin,
        group_id: groupId.toString(),
        metadata,
        decision_policy: {
          type_url: decisionPolicy.typeUrl,
          value: decisionPolicy.value
        }
      };
    },
    fromAmino: ({
      admin,
      group_id,
      metadata,
      decision_policy
    }: MsgCreateGroupPolicyAminoType["value"]): MsgCreateGroupPolicy => {
      return {
        admin,
        groupId: Long.fromString(group_id),
        metadata,
        decisionPolicy: {
          typeUrl: decision_policy.type_url,
          value: decision_policy.value
        }
      };
    }
  },
  "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
    aminoType: "cosmos-sdk/MsgCreateGroupWithPolicy",
    toAmino: ({
      admin,
      members,
      groupMetadata,
      groupPolicyMetadata,
      groupPolicyAsAdmin,
      decisionPolicy
    }: MsgCreateGroupWithPolicy): MsgCreateGroupWithPolicyAminoType["value"] => {
      return {
        admin,
        members: members.map(el0 => ({
          address: el0.address,
          weight: el0.weight,
          metadata: el0.metadata,
          added_at: el0.addedAt
        })),
        group_metadata: groupMetadata,
        group_policy_metadata: groupPolicyMetadata,
        group_policy_as_admin: groupPolicyAsAdmin,
        decision_policy: {
          type_url: decisionPolicy.typeUrl,
          value: decisionPolicy.value
        }
      };
    },
    fromAmino: ({
      admin,
      members,
      group_metadata,
      group_policy_metadata,
      group_policy_as_admin,
      decision_policy
    }: MsgCreateGroupWithPolicyAminoType["value"]): MsgCreateGroupWithPolicy => {
      return {
        admin,
        members: members.map(el0 => ({
          address: el0.address,
          weight: el0.weight,
          metadata: el0.metadata,
          addedAt: el0.added_at
        })),
        groupMetadata: group_metadata,
        groupPolicyMetadata: group_policy_metadata,
        groupPolicyAsAdmin: group_policy_as_admin,
        decisionPolicy: {
          typeUrl: decision_policy.type_url,
          value: decision_policy.value
        }
      };
    }
  },
  "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
    aminoType: "cosmos-sdk/MsgUpdateGroupPolicyAdmin",
    toAmino: ({
      admin,
      address,
      newAdmin
    }: MsgUpdateGroupPolicyAdmin): MsgUpdateGroupPolicyAdminAminoType["value"] => {
      return {
        admin,
        address,
        new_admin: newAdmin
      };
    },
    fromAmino: ({
      admin,
      address,
      new_admin
    }: MsgUpdateGroupPolicyAdminAminoType["value"]): MsgUpdateGroupPolicyAdmin => {
      return {
        admin,
        address,
        newAdmin: new_admin
      };
    }
  },
  "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
    aminoType: "cosmos-sdk/MsgUpdateGroupPolicyDecisionPolicy",
    toAmino: ({
      admin,
      address,
      decisionPolicy
    }: MsgUpdateGroupPolicyDecisionPolicy): MsgUpdateGroupPolicyDecisionPolicyAminoType["value"] => {
      return {
        admin,
        address,
        decision_policy: {
          type_url: decisionPolicy.typeUrl,
          value: decisionPolicy.value
        }
      };
    },
    fromAmino: ({
      admin,
      address,
      decision_policy
    }: MsgUpdateGroupPolicyDecisionPolicyAminoType["value"]): MsgUpdateGroupPolicyDecisionPolicy => {
      return {
        admin,
        address,
        decisionPolicy: {
          typeUrl: decision_policy.type_url,
          value: decision_policy.value
        }
      };
    }
  },
  "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
    aminoType: "cosmos-sdk/MsgUpdateGroupPolicyMetadata",
    toAmino: ({
      admin,
      address,
      metadata
    }: MsgUpdateGroupPolicyMetadata): MsgUpdateGroupPolicyMetadataAminoType["value"] => {
      return {
        admin,
        address,
        metadata
      };
    },
    fromAmino: ({
      admin,
      address,
      metadata
    }: MsgUpdateGroupPolicyMetadataAminoType["value"]): MsgUpdateGroupPolicyMetadata => {
      return {
        admin,
        address,
        metadata
      };
    }
  },
  "/cosmos.group.v1.MsgSubmitProposal": {
    aminoType: "cosmos-sdk/group/MsgSubmitProposal",
    toAmino: ({
      address,
      proposers,
      metadata,
      messages,
      exec
    }: MsgSubmitProposal): MsgSubmitProposalAminoType["value"] => {
      return {
        address,
        proposers,
        metadata,
        messages: messages.map(el0 => ({
          type_url: el0.typeUrl,
          value: el0.value
        })),
        exec
      };
    },
    fromAmino: ({
      address,
      proposers,
      metadata,
      messages,
      exec
    }: MsgSubmitProposalAminoType["value"]): MsgSubmitProposal => {
      return {
        address,
        proposers,
        metadata,
        messages: messages.map(el0 => ({
          typeUrl: el0.type_url,
          value: el0.value
        })),
        exec: execFromJSON(exec)
      };
    }
  },
  "/cosmos.group.v1.MsgWithdrawProposal": {
    aminoType: "cosmos-sdk/group/MsgWithdrawProposal",
    toAmino: ({
      proposalId,
      address
    }: MsgWithdrawProposal): MsgWithdrawProposalAminoType["value"] => {
      return {
        proposal_id: proposalId.toString(),
        address
      };
    },
    fromAmino: ({
      proposal_id,
      address
    }: MsgWithdrawProposalAminoType["value"]): MsgWithdrawProposal => {
      return {
        proposalId: Long.fromString(proposal_id),
        address
      };
    }
  },
  "/cosmos.group.v1.MsgVote": {
    aminoType: "cosmos-sdk/group/MsgVote",
    toAmino: ({
      proposalId,
      voter,
      option,
      metadata,
      exec
    }: MsgVote): MsgVoteAminoType["value"] => {
      return {
        proposal_id: proposalId.toString(),
        voter,
        option,
        metadata,
        exec
      };
    },
    fromAmino: ({
      proposal_id,
      voter,
      option,
      metadata,
      exec
    }: MsgVoteAminoType["value"]): MsgVote => {
      return {
        proposalId: Long.fromString(proposal_id),
        voter,
        option: voteOptionFromJSON(option),
        metadata,
        exec: execFromJSON(exec)
      };
    }
  },
  "/cosmos.group.v1.MsgExec": {
    aminoType: "cosmos-sdk/group/MsgExec",
    toAmino: ({
      proposalId,
      signer
    }: MsgExec): MsgExecAminoType["value"] => {
      return {
        proposal_id: proposalId.toString(),
        signer
      };
    },
    fromAmino: ({
      proposal_id,
      signer
    }: MsgExecAminoType["value"]): MsgExec => {
      return {
        proposalId: Long.fromString(proposal_id),
        signer
      };
    }
  },
  "/cosmos.group.v1.MsgLeaveGroup": {
    aminoType: "cosmos-sdk/group/MsgLeaveGroup",
    toAmino: ({
      address,
      groupId
    }: MsgLeaveGroup): MsgLeaveGroupAminoType["value"] => {
      return {
        address,
        group_id: groupId.toString()
      };
    },
    fromAmino: ({
      address,
      group_id
    }: MsgLeaveGroupAminoType["value"]): MsgLeaveGroup => {
      return {
        address,
        groupId: Long.fromString(group_id)
      };
    }
  }
};