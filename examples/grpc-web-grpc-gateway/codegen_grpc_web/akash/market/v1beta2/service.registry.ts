import { MsgCreateBid, MsgCloseBid } from "./bid";
import { MsgWithdrawLease, MsgCreateLease, MsgCloseLease } from "./lease";
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/akash.market.v1beta2.MsgCreateBid", MsgCreateBid], ["/akash.market.v1beta2.MsgCloseBid", MsgCloseBid], ["/akash.market.v1beta2.MsgWithdrawLease", MsgWithdrawLease], ["/akash.market.v1beta2.MsgCreateLease", MsgCreateLease], ["/akash.market.v1beta2.MsgCloseLease", MsgCloseLease]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createBid(value: MsgCreateBid) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgCreateBid",
        value: MsgCreateBid.encode(value).finish()
      };
    },
    closeBid(value: MsgCloseBid) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgCloseBid",
        value: MsgCloseBid.encode(value).finish()
      };
    },
    withdrawLease(value: MsgWithdrawLease) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgWithdrawLease",
        value: MsgWithdrawLease.encode(value).finish()
      };
    },
    createLease(value: MsgCreateLease) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgCreateLease",
        value: MsgCreateLease.encode(value).finish()
      };
    },
    closeLease(value: MsgCloseLease) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgCloseLease",
        value: MsgCloseLease.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createBid(value: MsgCreateBid) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgCreateBid",
        value
      };
    },
    closeBid(value: MsgCloseBid) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgCloseBid",
        value
      };
    },
    withdrawLease(value: MsgWithdrawLease) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgWithdrawLease",
        value
      };
    },
    createLease(value: MsgCreateLease) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgCreateLease",
        value
      };
    },
    closeLease(value: MsgCloseLease) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgCloseLease",
        value
      };
    }
  },
  toJSON: {
    createBid(value: MsgCreateBid) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgCreateBid",
        value: MsgCreateBid.toJSON(value)
      };
    },
    closeBid(value: MsgCloseBid) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgCloseBid",
        value: MsgCloseBid.toJSON(value)
      };
    },
    withdrawLease(value: MsgWithdrawLease) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgWithdrawLease",
        value: MsgWithdrawLease.toJSON(value)
      };
    },
    createLease(value: MsgCreateLease) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgCreateLease",
        value: MsgCreateLease.toJSON(value)
      };
    },
    closeLease(value: MsgCloseLease) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgCloseLease",
        value: MsgCloseLease.toJSON(value)
      };
    }
  },
  fromJSON: {
    createBid(value: any) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgCreateBid",
        value: MsgCreateBid.fromJSON(value)
      };
    },
    closeBid(value: any) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgCloseBid",
        value: MsgCloseBid.fromJSON(value)
      };
    },
    withdrawLease(value: any) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgWithdrawLease",
        value: MsgWithdrawLease.fromJSON(value)
      };
    },
    createLease(value: any) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgCreateLease",
        value: MsgCreateLease.fromJSON(value)
      };
    },
    closeLease(value: any) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgCloseLease",
        value: MsgCloseLease.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createBid(value: MsgCreateBid) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgCreateBid",
        value: MsgCreateBid.fromPartial(value)
      };
    },
    closeBid(value: MsgCloseBid) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgCloseBid",
        value: MsgCloseBid.fromPartial(value)
      };
    },
    withdrawLease(value: MsgWithdrawLease) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgWithdrawLease",
        value: MsgWithdrawLease.fromPartial(value)
      };
    },
    createLease(value: MsgCreateLease) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgCreateLease",
        value: MsgCreateLease.fromPartial(value)
      };
    },
    closeLease(value: MsgCloseLease) {
      return {
        typeUrl: "/akash.market.v1beta2.MsgCloseLease",
        value: MsgCloseLease.fromPartial(value)
      };
    }
  }
};