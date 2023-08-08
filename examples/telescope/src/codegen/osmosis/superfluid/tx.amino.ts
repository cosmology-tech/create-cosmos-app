import { AminoMsg } from "@cosmjs/amino";
import { MsgSuperfluidDelegate, MsgSuperfluidUndelegate, MsgSuperfluidUnbondLock, MsgLockAndSuperfluidDelegate, MsgUnPoolWhitelistedPool } from "./tx";
export interface MsgSuperfluidDelegateAminoType extends AminoMsg {
  type: "osmosis/superfluid-delegate";
  value: {
    sender: string;
    lock_id: string;
    val_addr: string;
  };
}
export interface MsgSuperfluidUndelegateAminoType extends AminoMsg {
  type: "osmosis/superfluid-undelegate";
  value: {
    sender: string;
    lock_id: string;
  };
}
export interface MsgSuperfluidUnbondLockAminoType extends AminoMsg {
  type: "osmosis/superfluid-unbond-lock";
  value: {
    sender: string;
    lock_id: string;
  };
}
export interface MsgLockAndSuperfluidDelegateAminoType extends AminoMsg {
  type: "osmosis/lock-and-superfluid-delegate";
  value: {
    sender: string;
    coins: {
      denom: string;
      amount: string;
    }[];
    val_addr: string;
  };
}
export interface MsgUnPoolWhitelistedPoolAminoType extends AminoMsg {
  type: "osmosis/unpool-whitelisted-pool";
  value: {
    sender: string;
    pool_id: string;
  };
}
export const AminoConverter = {
  "/osmosis.superfluid.MsgSuperfluidDelegate": {
    aminoType: "osmosis/superfluid-delegate",
    toAmino: ({
      sender,
      lockId,
      valAddr
    }: MsgSuperfluidDelegate): MsgSuperfluidDelegateAminoType["value"] => {
      return {
        sender,
        lock_id: lockId.toString(),
        val_addr: valAddr
      };
    },
    fromAmino: ({
      sender,
      lock_id,
      val_addr
    }: MsgSuperfluidDelegateAminoType["value"]): MsgSuperfluidDelegate => {
      return {
        sender,
        lockId: BigInt(lock_id),
        valAddr: val_addr
      };
    }
  },
  "/osmosis.superfluid.MsgSuperfluidUndelegate": {
    aminoType: "osmosis/superfluid-undelegate",
    toAmino: ({
      sender,
      lockId
    }: MsgSuperfluidUndelegate): MsgSuperfluidUndelegateAminoType["value"] => {
      return {
        sender,
        lock_id: lockId.toString()
      };
    },
    fromAmino: ({
      sender,
      lock_id
    }: MsgSuperfluidUndelegateAminoType["value"]): MsgSuperfluidUndelegate => {
      return {
        sender,
        lockId: BigInt(lock_id)
      };
    }
  },
  "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
    aminoType: "osmosis/superfluid-unbond-lock",
    toAmino: ({
      sender,
      lockId
    }: MsgSuperfluidUnbondLock): MsgSuperfluidUnbondLockAminoType["value"] => {
      return {
        sender,
        lock_id: lockId.toString()
      };
    },
    fromAmino: ({
      sender,
      lock_id
    }: MsgSuperfluidUnbondLockAminoType["value"]): MsgSuperfluidUnbondLock => {
      return {
        sender,
        lockId: BigInt(lock_id)
      };
    }
  },
  "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
    aminoType: "osmosis/lock-and-superfluid-delegate",
    toAmino: ({
      sender,
      coins,
      valAddr
    }: MsgLockAndSuperfluidDelegate): MsgLockAndSuperfluidDelegateAminoType["value"] => {
      return {
        sender,
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        val_addr: valAddr
      };
    },
    fromAmino: ({
      sender,
      coins,
      val_addr
    }: MsgLockAndSuperfluidDelegateAminoType["value"]): MsgLockAndSuperfluidDelegate => {
      return {
        sender,
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        valAddr: val_addr
      };
    }
  },
  "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
    aminoType: "osmosis/unpool-whitelisted-pool",
    toAmino: ({
      sender,
      poolId
    }: MsgUnPoolWhitelistedPool): MsgUnPoolWhitelistedPoolAminoType["value"] => {
      return {
        sender,
        pool_id: poolId.toString()
      };
    },
    fromAmino: ({
      sender,
      pool_id
    }: MsgUnPoolWhitelistedPoolAminoType["value"]): MsgUnPoolWhitelistedPool => {
      return {
        sender,
        poolId: BigInt(pool_id)
      };
    }
  }
};