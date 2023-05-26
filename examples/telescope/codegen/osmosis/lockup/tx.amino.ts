import { AminoMsg } from "@cosmjs/amino";
import { MsgLockTokens, MsgBeginUnlockingAll, MsgBeginUnlocking, MsgExtendLockup, MsgForceUnlock } from "./tx";
export interface MsgLockTokensAminoType extends AminoMsg {
  type: "osmosis/lockup/lock-tokens";
  value: {
    owner: string;
    duration: {
      seconds: string;
      nanos: number;
    };
    coins: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface MsgBeginUnlockingAllAminoType extends AminoMsg {
  type: "osmosis/lockup/begin-unlock-tokens";
  value: {
    owner: string;
  };
}
export interface MsgBeginUnlockingAminoType extends AminoMsg {
  type: "osmosis/lockup/begin-unlock-period-lock";
  value: {
    owner: string;
    ID: string;
    coins: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface MsgExtendLockupAminoType extends AminoMsg {
  type: "osmosis/lockup/extend-lockup";
  value: {
    owner: string;
    ID: string;
    duration: {
      seconds: string;
      nanos: number;
    };
  };
}
export interface MsgForceUnlockAminoType extends AminoMsg {
  type: "osmosis/lockup/force-unlock";
  value: {
    owner: string;
    ID: string;
    coins: {
      denom: string;
      amount: string;
    }[];
  };
}
export const AminoConverter = {
  "/osmosis.lockup.MsgLockTokens": {
    aminoType: "osmosis/lockup/lock-tokens",
    toAmino: ({
      owner,
      duration,
      coins
    }: MsgLockTokens): MsgLockTokensAminoType["value"] => {
      return {
        owner,
        duration: (duration * 1_000_000_000).toString(),
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      owner,
      duration,
      coins
    }: MsgLockTokensAminoType["value"]): MsgLockTokens => {
      return {
        owner,
        duration: {
          seconds: BigInt(Math.floor(parseInt(duration) / 1_000_000_000)),
          nanos: parseInt(duration) % 1_000_000_000
        },
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/osmosis.lockup.MsgBeginUnlockingAll": {
    aminoType: "osmosis/lockup/begin-unlock-tokens",
    toAmino: ({
      owner
    }: MsgBeginUnlockingAll): MsgBeginUnlockingAllAminoType["value"] => {
      return {
        owner
      };
    },
    fromAmino: ({
      owner
    }: MsgBeginUnlockingAllAminoType["value"]): MsgBeginUnlockingAll => {
      return {
        owner
      };
    }
  },
  "/osmosis.lockup.MsgBeginUnlocking": {
    aminoType: "osmosis/lockup/begin-unlock-period-lock",
    toAmino: ({
      owner,
      ID,
      coins
    }: MsgBeginUnlocking): MsgBeginUnlockingAminoType["value"] => {
      return {
        owner,
        ID: ID.toString(),
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      owner,
      ID,
      coins
    }: MsgBeginUnlockingAminoType["value"]): MsgBeginUnlocking => {
      return {
        owner,
        ID: BigInt(ID),
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/osmosis.lockup.MsgExtendLockup": {
    aminoType: "osmosis/lockup/extend-lockup",
    toAmino: ({
      owner,
      ID,
      duration
    }: MsgExtendLockup): MsgExtendLockupAminoType["value"] => {
      return {
        owner,
        ID: ID.toString(),
        duration: (duration * 1_000_000_000).toString()
      };
    },
    fromAmino: ({
      owner,
      ID,
      duration
    }: MsgExtendLockupAminoType["value"]): MsgExtendLockup => {
      return {
        owner,
        ID: BigInt(ID),
        duration: {
          seconds: BigInt(Math.floor(parseInt(duration) / 1_000_000_000)),
          nanos: parseInt(duration) % 1_000_000_000
        }
      };
    }
  },
  "/osmosis.lockup.MsgForceUnlock": {
    aminoType: "osmosis/lockup/force-unlock",
    toAmino: ({
      owner,
      ID,
      coins
    }: MsgForceUnlock): MsgForceUnlockAminoType["value"] => {
      return {
        owner,
        ID: ID.toString(),
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      owner,
      ID,
      coins
    }: MsgForceUnlockAminoType["value"]): MsgForceUnlock => {
      return {
        owner,
        ID: BigInt(ID),
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  }
};