//@ts-nocheck
import { QueryCondition, QueryConditionSDKType } from "../lockup/lock";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { MsgCreateGauge, MsgCreateGaugeSDKType, MsgAddToGauge, MsgAddToGaugeSDKType } from "./tx";
export const AminoConverter = {
  "/osmosis.incentives.MsgCreateGauge": {
    aminoType: "osmosis/incentives/create-gauge",
    toAmino: MsgCreateGauge.toAmino,
    fromAmino: MsgCreateGauge.fromAmino
  },
  "/osmosis.incentives.MsgAddToGauge": {
    aminoType: "osmosis/incentives/add-to-gauge",
    toAmino: MsgAddToGauge.toAmino,
    fromAmino: MsgAddToGauge.fromAmino
  }
};