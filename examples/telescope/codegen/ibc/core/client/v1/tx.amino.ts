import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour } from "./tx";
export interface MsgCreateClientAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgCreateClient";
  value: {
    client_state: {
      type_url: string;
      value: Uint8Array;
    };
    consensus_state: {
      type_url: string;
      value: Uint8Array;
    };
    signer: string;
  };
}
export interface MsgUpdateClientAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateClient";
  value: {
    client_id: string;
    header: {
      type_url: string;
      value: Uint8Array;
    };
    signer: string;
  };
}
export interface MsgUpgradeClientAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgUpgradeClient";
  value: {
    client_id: string;
    client_state: {
      type_url: string;
      value: Uint8Array;
    };
    consensus_state: {
      type_url: string;
      value: Uint8Array;
    };
    proof_upgrade_client: Uint8Array;
    proof_upgrade_consensus_state: Uint8Array;
    signer: string;
  };
}
export interface MsgSubmitMisbehaviourAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgSubmitMisbehaviour";
  value: {
    client_id: string;
    misbehaviour: {
      type_url: string;
      value: Uint8Array;
    };
    signer: string;
  };
}
export const AminoConverter = {
  "/ibc.core.client.v1.MsgCreateClient": {
    aminoType: "cosmos-sdk/MsgCreateClient",
    toAmino: ({
      clientState,
      consensusState,
      signer
    }: MsgCreateClient): MsgCreateClientAminoType["value"] => {
      return {
        client_state: {
          type_url: clientState.typeUrl,
          value: clientState.value
        },
        consensus_state: {
          type_url: consensusState.typeUrl,
          value: consensusState.value
        },
        signer
      };
    },
    fromAmino: ({
      client_state,
      consensus_state,
      signer
    }: MsgCreateClientAminoType["value"]): MsgCreateClient => {
      return {
        clientState: {
          typeUrl: client_state.type_url,
          value: client_state.value
        },
        consensusState: {
          typeUrl: consensus_state.type_url,
          value: consensus_state.value
        },
        signer
      };
    }
  },
  "/ibc.core.client.v1.MsgUpdateClient": {
    aminoType: "cosmos-sdk/MsgUpdateClient",
    toAmino: ({
      clientId,
      header,
      signer
    }: MsgUpdateClient): MsgUpdateClientAminoType["value"] => {
      return {
        client_id: clientId,
        header: {
          type_url: header.typeUrl,
          value: header.value
        },
        signer
      };
    },
    fromAmino: ({
      client_id,
      header,
      signer
    }: MsgUpdateClientAminoType["value"]): MsgUpdateClient => {
      return {
        clientId: client_id,
        header: {
          typeUrl: header.type_url,
          value: header.value
        },
        signer
      };
    }
  },
  "/ibc.core.client.v1.MsgUpgradeClient": {
    aminoType: "cosmos-sdk/MsgUpgradeClient",
    toAmino: ({
      clientId,
      clientState,
      consensusState,
      proofUpgradeClient,
      proofUpgradeConsensusState,
      signer
    }: MsgUpgradeClient): MsgUpgradeClientAminoType["value"] => {
      return {
        client_id: clientId,
        client_state: {
          type_url: clientState.typeUrl,
          value: clientState.value
        },
        consensus_state: {
          type_url: consensusState.typeUrl,
          value: consensusState.value
        },
        proof_upgrade_client: proofUpgradeClient,
        proof_upgrade_consensus_state: proofUpgradeConsensusState,
        signer
      };
    },
    fromAmino: ({
      client_id,
      client_state,
      consensus_state,
      proof_upgrade_client,
      proof_upgrade_consensus_state,
      signer
    }: MsgUpgradeClientAminoType["value"]): MsgUpgradeClient => {
      return {
        clientId: client_id,
        clientState: {
          typeUrl: client_state.type_url,
          value: client_state.value
        },
        consensusState: {
          typeUrl: consensus_state.type_url,
          value: consensus_state.value
        },
        proofUpgradeClient: proof_upgrade_client,
        proofUpgradeConsensusState: proof_upgrade_consensus_state,
        signer
      };
    }
  },
  "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
    aminoType: "cosmos-sdk/MsgSubmitMisbehaviour",
    toAmino: ({
      clientId,
      misbehaviour,
      signer
    }: MsgSubmitMisbehaviour): MsgSubmitMisbehaviourAminoType["value"] => {
      return {
        client_id: clientId,
        misbehaviour: {
          type_url: misbehaviour.typeUrl,
          value: misbehaviour.value
        },
        signer
      };
    },
    fromAmino: ({
      client_id,
      misbehaviour,
      signer
    }: MsgSubmitMisbehaviourAminoType["value"]): MsgSubmitMisbehaviour => {
      return {
        clientId: client_id,
        misbehaviour: {
          typeUrl: misbehaviour.type_url,
          value: misbehaviour.value
        },
        signer
      };
    }
  }
};