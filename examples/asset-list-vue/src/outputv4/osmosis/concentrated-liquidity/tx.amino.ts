//@ts-nocheck
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { AminoMsg } from "@cosmjs/amino";
import { MsgCreatePosition, MsgCreatePositionSDKType, MsgWithdrawPosition, MsgWithdrawPositionSDKType, MsgCollectFees, MsgCollectFeesSDKType, MsgCollectIncentives, MsgCollectIncentivesSDKType, MsgFungifyChargedPositions, MsgFungifyChargedPositionsSDKType } from "./tx";
export interface MsgCreatePositionAminoType extends AminoMsg {
  type: "osmosis/concentratedliquidity/create-position";
  value: {
    pool_id: string;
    sender: string;
    lower_tick: string;
    upper_tick: string;
    token_desired0: {
      denom: string;
      amount: string;
    };
    token_desired1: {
      denom: string;
      amount: string;
    };
    token_min_amount0: string;
    token_min_amount1: string;
  };
}
export interface MsgWithdrawPositionAminoType extends AminoMsg {
  type: "osmosis/concentratedliquidity/withdraw-position";
  value: {
    position_id: string;
    sender: string;
    liquidity_amount: string;
  };
}
export interface MsgCollectFeesAminoType extends AminoMsg {
  type: "osmosis/concentratedliquidity/collect-fees";
  value: {
    position_ids: string[];
    sender: string;
  };
}
export interface MsgCollectIncentivesAminoType extends AminoMsg {
  type: "osmosis/concentratedliquidity/collect-incentives";
  value: {
    position_ids: string[];
    sender: string;
  };
}
export interface MsgFungifyChargedPositionsAminoType extends AminoMsg {
  type: "osmosis/concentratedliquidity/fungify-charged-positions";
  value: {
    position_ids: string[];
    sender: string;
  };
}
export const AminoConverter = {
  "/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition": {
    aminoType: "osmosis/concentratedliquidity/create-position",
    toAmino: ({
      poolId,
      sender,
      lowerTick,
      upperTick,
      tokenDesired0,
      tokenDesired1,
      tokenMinAmount0,
      tokenMinAmount1
    }: MsgCreatePosition): MsgCreatePositionAminoType["value"] => {
      return {
        pool_id: poolId.toString(),
        sender,
        lower_tick: lowerTick.toString(),
        upper_tick: upperTick.toString(),
        token_desired0: {
          denom: tokenDesired0.denom,
          amount: tokenDesired0.amount
        },
        token_desired1: {
          denom: tokenDesired1.denom,
          amount: tokenDesired1.amount
        },
        token_min_amount0: tokenMinAmount0,
        token_min_amount1: tokenMinAmount1
      };
    },
    fromAmino: ({
      pool_id,
      sender,
      lower_tick,
      upper_tick,
      token_desired0,
      token_desired1,
      token_min_amount0,
      token_min_amount1
    }: MsgCreatePositionAminoType["value"]): MsgCreatePosition => {
      return {
        poolId: BigInt(pool_id),
        sender,
        lowerTick: BigInt(lower_tick),
        upperTick: BigInt(upper_tick),
        tokenDesired0: {
          denom: token_desired0.denom,
          amount: token_desired0.amount
        },
        tokenDesired1: {
          denom: token_desired1.denom,
          amount: token_desired1.amount
        },
        tokenMinAmount0: token_min_amount0,
        tokenMinAmount1: token_min_amount1
      };
    }
  },
  "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition": {
    aminoType: "osmosis/concentratedliquidity/withdraw-position",
    toAmino: ({
      positionId,
      sender,
      liquidityAmount
    }: MsgWithdrawPosition): MsgWithdrawPositionAminoType["value"] => {
      return {
        position_id: positionId.toString(),
        sender,
        liquidity_amount: liquidityAmount
      };
    },
    fromAmino: ({
      position_id,
      sender,
      liquidity_amount
    }: MsgWithdrawPositionAminoType["value"]): MsgWithdrawPosition => {
      return {
        positionId: BigInt(position_id),
        sender,
        liquidityAmount: liquidity_amount
      };
    }
  },
  "/osmosis.concentratedliquidity.v1beta1.MsgCollectFees": {
    aminoType: "osmosis/concentratedliquidity/collect-fees",
    toAmino: ({
      positionIds,
      sender
    }: MsgCollectFees): MsgCollectFeesAminoType["value"] => {
      return {
        position_ids: positionIds.map(el0 => el0.toString()),
        sender
      };
    },
    fromAmino: ({
      position_ids,
      sender
    }: MsgCollectFeesAminoType["value"]): MsgCollectFees => {
      return {
        positionIds: position_ids.map(el0 => BigInt(el0)),
        sender
      };
    }
  },
  "/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives": {
    aminoType: "osmosis/concentratedliquidity/collect-incentives",
    toAmino: ({
      positionIds,
      sender
    }: MsgCollectIncentives): MsgCollectIncentivesAminoType["value"] => {
      return {
        position_ids: positionIds.map(el0 => el0.toString()),
        sender
      };
    },
    fromAmino: ({
      position_ids,
      sender
    }: MsgCollectIncentivesAminoType["value"]): MsgCollectIncentives => {
      return {
        positionIds: position_ids.map(el0 => BigInt(el0)),
        sender
      };
    }
  },
  "/osmosis.concentratedliquidity.v1beta1.MsgFungifyChargedPositions": {
    aminoType: "osmosis/concentratedliquidity/fungify-charged-positions",
    toAmino: ({
      positionIds,
      sender
    }: MsgFungifyChargedPositions): MsgFungifyChargedPositionsAminoType["value"] => {
      return {
        position_ids: positionIds.map(el0 => el0.toString()),
        sender
      };
    },
    fromAmino: ({
      position_ids,
      sender
    }: MsgFungifyChargedPositionsAminoType["value"]): MsgFungifyChargedPositions => {
      return {
        positionIds: position_ids.map(el0 => BigInt(el0)),
        sender
      };
    }
  }
};