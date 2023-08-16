import { lockQueryTypeFromJSON } from "../lockup/lock";
import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateGauge, MsgAddToGauge } from "./tx";
export interface MsgCreateGaugeAminoType extends AminoMsg {
  type: "osmosis/incentives/create-gauge";
  value: {
    is_perpetual: boolean;
    owner: string;
    distribute_to: {
      lock_query_type: number;
      denom: string;
      duration: {
        seconds: string;
        nanos: number;
      };
      timestamp: {
        seconds: string;
        nanos: number;
      };
    };
    coins: {
      denom: string;
      amount: string;
    }[];
    start_time: {
      seconds: string;
      nanos: number;
    };
    num_epochs_paid_over: string;
  };
}
export interface MsgAddToGaugeAminoType extends AminoMsg {
  type: "osmosis/incentives/add-to-gauge";
  value: {
    owner: string;
    gauge_id: string;
    rewards: {
      denom: string;
      amount: string;
    }[];
  };
}
export const AminoConverter = {
  "/osmosis.incentives.MsgCreateGauge": {
    aminoType: "osmosis/incentives/create-gauge",
    toAmino: ({
      isPerpetual,
      owner,
      distributeTo,
      coins,
      startTime,
      numEpochsPaidOver
    }: MsgCreateGauge): MsgCreateGaugeAminoType["value"] => {
      return {
        is_perpetual: isPerpetual,
        owner,
        distribute_to: {
          lock_query_type: distributeTo.lockQueryType,
          denom: distributeTo.denom,
          duration: (distributeTo.duration * 1_000_000_000).toString(),
          timestamp: distributeTo.timestamp
        },
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        start_time: startTime,
        num_epochs_paid_over: numEpochsPaidOver.toString()
      };
    },
    fromAmino: ({
      is_perpetual,
      owner,
      distribute_to,
      coins,
      start_time,
      num_epochs_paid_over
    }: MsgCreateGaugeAminoType["value"]): MsgCreateGauge => {
      return {
        isPerpetual: is_perpetual,
        owner,
        distributeTo: {
          lockQueryType: lockQueryTypeFromJSON(distribute_to.lock_query_type),
          denom: distribute_to.denom,
          duration: {
            seconds: BigInt(Math.floor(parseInt(distribute_to.duration) / 1_000_000_000)),
            nanos: parseInt(distribute_to.duration) % 1_000_000_000
          },
          timestamp: distribute_to.timestamp
        },
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        startTime: start_time,
        numEpochsPaidOver: BigInt(num_epochs_paid_over)
      };
    }
  },
  "/osmosis.incentives.MsgAddToGauge": {
    aminoType: "osmosis/incentives/add-to-gauge",
    toAmino: ({
      owner,
      gaugeId,
      rewards
    }: MsgAddToGauge): MsgAddToGaugeAminoType["value"] => {
      return {
        owner,
        gauge_id: gaugeId.toString(),
        rewards: rewards.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      owner,
      gauge_id,
      rewards
    }: MsgAddToGaugeAminoType["value"]): MsgAddToGauge => {
      return {
        owner,
        gaugeId: BigInt(gauge_id),
        rewards: rewards.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  }
};