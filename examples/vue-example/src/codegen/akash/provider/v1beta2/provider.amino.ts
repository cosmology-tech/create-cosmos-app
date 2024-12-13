/* eslint-disable */
import { Attribute, AttributeSDKType } from "../../base/v1beta2/attribute";
import { AminoMsg } from "@cosmjs/amino";
import { ProviderInfo, ProviderInfoSDKType, MsgCreateProvider, MsgCreateProviderSDKType, MsgUpdateProvider, MsgUpdateProviderSDKType, MsgDeleteProvider, MsgDeleteProviderSDKType } from "./provider";
export interface MsgCreateProviderAminoType extends AminoMsg {
  type: "akash/provider/v1beta2/testonly-create-provider";
  value: {
    owner: string;
    host_uri: string;
    attributes: {
      key: string;
      value: string;
    }[];
    info: {
      email: string;
      website: string;
    };
  };
}
export interface MsgUpdateProviderAminoType extends AminoMsg {
  type: "akash/provider/v1beta2/testonly-update-provider";
  value: {
    owner: string;
    host_uri: string;
    attributes: {
      key: string;
      value: string;
    }[];
    info: {
      email: string;
      website: string;
    };
  };
}
export interface MsgDeleteProviderAminoType extends AminoMsg {
  type: "akash/provider/v1beta2/testonly-delete-provider";
  value: {
    owner: string;
  };
}
export const AminoConverter = {
  "/akash.provider.v1beta2.MsgCreateProvider": {
    aminoType: "akash/provider/v1beta2/testonly-create-provider",
    toAmino: ({
      owner,
      hostUri,
      attributes,
      info
    }: MsgCreateProvider): MsgCreateProviderAminoType["value"] => {
      return {
        owner,
        host_uri: hostUri,
        attributes: attributes.map(el0 => ({
          key: el0.key,
          value: el0.value
        })),
        info: {
          email: info.email,
          website: info.website
        }
      };
    },
    fromAmino: ({
      owner,
      host_uri,
      attributes,
      info
    }: MsgCreateProviderAminoType["value"]): MsgCreateProvider => {
      return {
        owner,
        hostUri: host_uri,
        attributes: attributes.map(el0 => ({
          key: el0.key,
          value: el0.value
        })),
        info: {
          email: info.email,
          website: info.website
        }
      };
    }
  },
  "/akash.provider.v1beta2.MsgUpdateProvider": {
    aminoType: "akash/provider/v1beta2/testonly-update-provider",
    toAmino: ({
      owner,
      hostUri,
      attributes,
      info
    }: MsgUpdateProvider): MsgUpdateProviderAminoType["value"] => {
      return {
        owner,
        host_uri: hostUri,
        attributes: attributes.map(el0 => ({
          key: el0.key,
          value: el0.value
        })),
        info: {
          email: info.email,
          website: info.website
        }
      };
    },
    fromAmino: ({
      owner,
      host_uri,
      attributes,
      info
    }: MsgUpdateProviderAminoType["value"]): MsgUpdateProvider => {
      return {
        owner,
        hostUri: host_uri,
        attributes: attributes.map(el0 => ({
          key: el0.key,
          value: el0.value
        })),
        info: {
          email: info.email,
          website: info.website
        }
      };
    }
  },
  "/akash.provider.v1beta2.MsgDeleteProvider": {
    aminoType: "akash/provider/v1beta2/testonly-delete-provider",
    toAmino: ({
      owner
    }: MsgDeleteProvider): MsgDeleteProviderAminoType["value"] => {
      return {
        owner
      };
    },
    fromAmino: ({
      owner
    }: MsgDeleteProviderAminoType["value"]): MsgDeleteProvider => {
      return {
        owner
      };
    }
  }
};