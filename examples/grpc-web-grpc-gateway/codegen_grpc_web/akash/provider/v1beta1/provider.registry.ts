import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateProvider, MsgUpdateProvider, MsgDeleteProvider } from "./provider";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/akash.provider.v1beta1.MsgCreateProvider", MsgCreateProvider], ["/akash.provider.v1beta1.MsgUpdateProvider", MsgUpdateProvider], ["/akash.provider.v1beta1.MsgDeleteProvider", MsgDeleteProvider]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createProvider(value: MsgCreateProvider) {
      return {
        typeUrl: "/akash.provider.v1beta1.MsgCreateProvider",
        value: MsgCreateProvider.encode(value).finish()
      };
    },
    updateProvider(value: MsgUpdateProvider) {
      return {
        typeUrl: "/akash.provider.v1beta1.MsgUpdateProvider",
        value: MsgUpdateProvider.encode(value).finish()
      };
    },
    deleteProvider(value: MsgDeleteProvider) {
      return {
        typeUrl: "/akash.provider.v1beta1.MsgDeleteProvider",
        value: MsgDeleteProvider.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createProvider(value: MsgCreateProvider) {
      return {
        typeUrl: "/akash.provider.v1beta1.MsgCreateProvider",
        value
      };
    },
    updateProvider(value: MsgUpdateProvider) {
      return {
        typeUrl: "/akash.provider.v1beta1.MsgUpdateProvider",
        value
      };
    },
    deleteProvider(value: MsgDeleteProvider) {
      return {
        typeUrl: "/akash.provider.v1beta1.MsgDeleteProvider",
        value
      };
    }
  },
  toJSON: {
    createProvider(value: MsgCreateProvider) {
      return {
        typeUrl: "/akash.provider.v1beta1.MsgCreateProvider",
        value: MsgCreateProvider.toJSON(value)
      };
    },
    updateProvider(value: MsgUpdateProvider) {
      return {
        typeUrl: "/akash.provider.v1beta1.MsgUpdateProvider",
        value: MsgUpdateProvider.toJSON(value)
      };
    },
    deleteProvider(value: MsgDeleteProvider) {
      return {
        typeUrl: "/akash.provider.v1beta1.MsgDeleteProvider",
        value: MsgDeleteProvider.toJSON(value)
      };
    }
  },
  fromJSON: {
    createProvider(value: any) {
      return {
        typeUrl: "/akash.provider.v1beta1.MsgCreateProvider",
        value: MsgCreateProvider.fromJSON(value)
      };
    },
    updateProvider(value: any) {
      return {
        typeUrl: "/akash.provider.v1beta1.MsgUpdateProvider",
        value: MsgUpdateProvider.fromJSON(value)
      };
    },
    deleteProvider(value: any) {
      return {
        typeUrl: "/akash.provider.v1beta1.MsgDeleteProvider",
        value: MsgDeleteProvider.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createProvider(value: MsgCreateProvider) {
      return {
        typeUrl: "/akash.provider.v1beta1.MsgCreateProvider",
        value: MsgCreateProvider.fromPartial(value)
      };
    },
    updateProvider(value: MsgUpdateProvider) {
      return {
        typeUrl: "/akash.provider.v1beta1.MsgUpdateProvider",
        value: MsgUpdateProvider.fromPartial(value)
      };
    },
    deleteProvider(value: MsgDeleteProvider) {
      return {
        typeUrl: "/akash.provider.v1beta1.MsgDeleteProvider",
        value: MsgDeleteProvider.fromPartial(value)
      };
    }
  }
};