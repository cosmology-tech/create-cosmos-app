import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreatePosition, MsgCreatePositionSDKType, MsgWithdrawPosition, MsgWithdrawPositionSDKType, MsgCollectFees, MsgCollectFeesSDKType, MsgCollectIncentives, MsgCollectIncentivesSDKType, MsgFungifyChargedPositions, MsgFungifyChargedPositionsSDKType } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition", MsgCreatePosition], ["/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition", MsgWithdrawPosition], ["/osmosis.concentratedliquidity.v1beta1.MsgCollectFees", MsgCollectFees], ["/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives", MsgCollectIncentives], ["/osmosis.concentratedliquidity.v1beta1.MsgFungifyChargedPositions", MsgFungifyChargedPositions]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createPosition(value: MsgCreatePosition) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition",
        value: MsgCreatePosition.encode(value).finish()
      };
    },
    withdrawPosition(value: MsgWithdrawPosition) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition",
        value: MsgWithdrawPosition.encode(value).finish()
      };
    },
    collectFees(value: MsgCollectFees) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectFees",
        value: MsgCollectFees.encode(value).finish()
      };
    },
    collectIncentives(value: MsgCollectIncentives) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives",
        value: MsgCollectIncentives.encode(value).finish()
      };
    },
    fungifyChargedPositions(value: MsgFungifyChargedPositions) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgFungifyChargedPositions",
        value: MsgFungifyChargedPositions.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createPosition(value: MsgCreatePosition) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition",
        value
      };
    },
    withdrawPosition(value: MsgWithdrawPosition) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition",
        value
      };
    },
    collectFees(value: MsgCollectFees) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectFees",
        value
      };
    },
    collectIncentives(value: MsgCollectIncentives) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives",
        value
      };
    },
    fungifyChargedPositions(value: MsgFungifyChargedPositions) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgFungifyChargedPositions",
        value
      };
    }
  },
  toJSON: {
    createPosition(value: MsgCreatePosition) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition",
        value: MsgCreatePosition.toJSON(value)
      };
    },
    withdrawPosition(value: MsgWithdrawPosition) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition",
        value: MsgWithdrawPosition.toJSON(value)
      };
    },
    collectFees(value: MsgCollectFees) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectFees",
        value: MsgCollectFees.toJSON(value)
      };
    },
    collectIncentives(value: MsgCollectIncentives) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives",
        value: MsgCollectIncentives.toJSON(value)
      };
    },
    fungifyChargedPositions(value: MsgFungifyChargedPositions) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgFungifyChargedPositions",
        value: MsgFungifyChargedPositions.toJSON(value)
      };
    }
  },
  fromJSON: {
    createPosition(value: any) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition",
        value: MsgCreatePosition.fromJSON(value)
      };
    },
    withdrawPosition(value: any) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition",
        value: MsgWithdrawPosition.fromJSON(value)
      };
    },
    collectFees(value: any) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectFees",
        value: MsgCollectFees.fromJSON(value)
      };
    },
    collectIncentives(value: any) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives",
        value: MsgCollectIncentives.fromJSON(value)
      };
    },
    fungifyChargedPositions(value: any) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgFungifyChargedPositions",
        value: MsgFungifyChargedPositions.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createPosition(value: MsgCreatePosition) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition",
        value: MsgCreatePosition.fromPartial(value)
      };
    },
    withdrawPosition(value: MsgWithdrawPosition) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition",
        value: MsgWithdrawPosition.fromPartial(value)
      };
    },
    collectFees(value: MsgCollectFees) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectFees",
        value: MsgCollectFees.fromPartial(value)
      };
    },
    collectIncentives(value: MsgCollectIncentives) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives",
        value: MsgCollectIncentives.fromPartial(value)
      };
    },
    fungifyChargedPositions(value: MsgFungifyChargedPositions) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgFungifyChargedPositions",
        value: MsgFungifyChargedPositions.fromPartial(value)
      };
    }
  }
};