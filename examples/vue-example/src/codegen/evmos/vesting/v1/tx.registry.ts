import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Period, PeriodSDKType } from "../../../cosmos/vesting/v1beta1/vesting";
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateClawbackVestingAccount, MsgCreateClawbackVestingAccountSDKType, MsgClawback, MsgClawbackSDKType } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/evmos.vesting.v1.MsgCreateClawbackVestingAccount", MsgCreateClawbackVestingAccount], ["/evmos.vesting.v1.MsgClawback", MsgClawback]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createClawbackVestingAccount(value: MsgCreateClawbackVestingAccount) {
      return {
        typeUrl: "/evmos.vesting.v1.MsgCreateClawbackVestingAccount",
        value: MsgCreateClawbackVestingAccount.encode(value).finish()
      };
    },
    clawback(value: MsgClawback) {
      return {
        typeUrl: "/evmos.vesting.v1.MsgClawback",
        value: MsgClawback.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createClawbackVestingAccount(value: MsgCreateClawbackVestingAccount) {
      return {
        typeUrl: "/evmos.vesting.v1.MsgCreateClawbackVestingAccount",
        value
      };
    },
    clawback(value: MsgClawback) {
      return {
        typeUrl: "/evmos.vesting.v1.MsgClawback",
        value
      };
    }
  },
  toJSON: {
    createClawbackVestingAccount(value: MsgCreateClawbackVestingAccount) {
      return {
        typeUrl: "/evmos.vesting.v1.MsgCreateClawbackVestingAccount",
        value: MsgCreateClawbackVestingAccount.toJSON(value)
      };
    },
    clawback(value: MsgClawback) {
      return {
        typeUrl: "/evmos.vesting.v1.MsgClawback",
        value: MsgClawback.toJSON(value)
      };
    }
  },
  fromJSON: {
    createClawbackVestingAccount(value: any) {
      return {
        typeUrl: "/evmos.vesting.v1.MsgCreateClawbackVestingAccount",
        value: MsgCreateClawbackVestingAccount.fromJSON(value)
      };
    },
    clawback(value: any) {
      return {
        typeUrl: "/evmos.vesting.v1.MsgClawback",
        value: MsgClawback.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createClawbackVestingAccount(value: MsgCreateClawbackVestingAccount) {
      return {
        typeUrl: "/evmos.vesting.v1.MsgCreateClawbackVestingAccount",
        value: MsgCreateClawbackVestingAccount.fromPartial(value)
      };
    },
    clawback(value: MsgClawback) {
      return {
        typeUrl: "/evmos.vesting.v1.MsgClawback",
        value: MsgClawback.fromPartial(value)
      };
    }
  }
};