import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgConvertCoin, MsgConvertERC20 } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/evmos.erc20.v1.MsgConvertCoin", MsgConvertCoin], ["/evmos.erc20.v1.MsgConvertERC20", MsgConvertERC20]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    convertCoin(value: MsgConvertCoin) {
      return {
        typeUrl: "/evmos.erc20.v1.MsgConvertCoin",
        value: MsgConvertCoin.encode(value).finish()
      };
    },
    convertERC20(value: MsgConvertERC20) {
      return {
        typeUrl: "/evmos.erc20.v1.MsgConvertERC20",
        value: MsgConvertERC20.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    convertCoin(value: MsgConvertCoin) {
      return {
        typeUrl: "/evmos.erc20.v1.MsgConvertCoin",
        value
      };
    },
    convertERC20(value: MsgConvertERC20) {
      return {
        typeUrl: "/evmos.erc20.v1.MsgConvertERC20",
        value
      };
    }
  },
  toJSON: {
    convertCoin(value: MsgConvertCoin) {
      return {
        typeUrl: "/evmos.erc20.v1.MsgConvertCoin",
        value: MsgConvertCoin.toJSON(value)
      };
    },
    convertERC20(value: MsgConvertERC20) {
      return {
        typeUrl: "/evmos.erc20.v1.MsgConvertERC20",
        value: MsgConvertERC20.toJSON(value)
      };
    }
  },
  fromJSON: {
    convertCoin(value: any) {
      return {
        typeUrl: "/evmos.erc20.v1.MsgConvertCoin",
        value: MsgConvertCoin.fromJSON(value)
      };
    },
    convertERC20(value: any) {
      return {
        typeUrl: "/evmos.erc20.v1.MsgConvertERC20",
        value: MsgConvertERC20.fromJSON(value)
      };
    }
  },
  fromPartial: {
    convertCoin(value: MsgConvertCoin) {
      return {
        typeUrl: "/evmos.erc20.v1.MsgConvertCoin",
        value: MsgConvertCoin.fromPartial(value)
      };
    },
    convertERC20(value: MsgConvertERC20) {
      return {
        typeUrl: "/evmos.erc20.v1.MsgConvertERC20",
        value: MsgConvertERC20.fromPartial(value)
      };
    }
  }
};