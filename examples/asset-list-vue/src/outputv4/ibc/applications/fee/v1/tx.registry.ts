import { Fee, FeeSDKType, PacketFee, PacketFeeSDKType } from "./fee";
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterPayee, MsgRegisterPayeeSDKType, MsgRegisterCounterpartyPayee, MsgRegisterCounterpartyPayeeSDKType, MsgPayPacketFee, MsgPayPacketFeeSDKType, MsgPayPacketFeeAsync, MsgPayPacketFeeAsyncSDKType } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/ibc.applications.fee.v1.MsgRegisterPayee", MsgRegisterPayee], ["/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee", MsgRegisterCounterpartyPayee], ["/ibc.applications.fee.v1.MsgPayPacketFee", MsgPayPacketFee], ["/ibc.applications.fee.v1.MsgPayPacketFeeAsync", MsgPayPacketFeeAsync]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerPayee(value: MsgRegisterPayee) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayee",
        value: MsgRegisterPayee.encode(value).finish()
      };
    },
    registerCounterpartyPayee(value: MsgRegisterCounterpartyPayee) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee",
        value: MsgRegisterCounterpartyPayee.encode(value).finish()
      };
    },
    payPacketFee(value: MsgPayPacketFee) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFee",
        value: MsgPayPacketFee.encode(value).finish()
      };
    },
    payPacketFeeAsync(value: MsgPayPacketFeeAsync) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync",
        value: MsgPayPacketFeeAsync.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerPayee(value: MsgRegisterPayee) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayee",
        value
      };
    },
    registerCounterpartyPayee(value: MsgRegisterCounterpartyPayee) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee",
        value
      };
    },
    payPacketFee(value: MsgPayPacketFee) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFee",
        value
      };
    },
    payPacketFeeAsync(value: MsgPayPacketFeeAsync) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync",
        value
      };
    }
  },
  toJSON: {
    registerPayee(value: MsgRegisterPayee) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayee",
        value: MsgRegisterPayee.toJSON(value)
      };
    },
    registerCounterpartyPayee(value: MsgRegisterCounterpartyPayee) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee",
        value: MsgRegisterCounterpartyPayee.toJSON(value)
      };
    },
    payPacketFee(value: MsgPayPacketFee) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFee",
        value: MsgPayPacketFee.toJSON(value)
      };
    },
    payPacketFeeAsync(value: MsgPayPacketFeeAsync) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync",
        value: MsgPayPacketFeeAsync.toJSON(value)
      };
    }
  },
  fromJSON: {
    registerPayee(value: any) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayee",
        value: MsgRegisterPayee.fromJSON(value)
      };
    },
    registerCounterpartyPayee(value: any) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee",
        value: MsgRegisterCounterpartyPayee.fromJSON(value)
      };
    },
    payPacketFee(value: any) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFee",
        value: MsgPayPacketFee.fromJSON(value)
      };
    },
    payPacketFeeAsync(value: any) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync",
        value: MsgPayPacketFeeAsync.fromJSON(value)
      };
    }
  },
  fromPartial: {
    registerPayee(value: MsgRegisterPayee) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayee",
        value: MsgRegisterPayee.fromPartial(value)
      };
    },
    registerCounterpartyPayee(value: MsgRegisterCounterpartyPayee) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee",
        value: MsgRegisterCounterpartyPayee.fromPartial(value)
      };
    },
    payPacketFee(value: MsgPayPacketFee) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFee",
        value: MsgPayPacketFee.fromPartial(value)
      };
    },
    payPacketFeeAsync(value: MsgPayPacketFeeAsync) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync",
        value: MsgPayPacketFeeAsync.fromPartial(value)
      };
    }
  }
};