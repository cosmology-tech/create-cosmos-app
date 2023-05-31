//@ts-nocheck
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { MsgSuperfluidDelegate, MsgSuperfluidDelegateSDKType, MsgSuperfluidUndelegate, MsgSuperfluidUndelegateSDKType, MsgSuperfluidUnbondLock, MsgSuperfluidUnbondLockSDKType, MsgLockAndSuperfluidDelegate, MsgLockAndSuperfluidDelegateSDKType, MsgUnPoolWhitelistedPool, MsgUnPoolWhitelistedPoolSDKType } from "./tx";
export const AminoConverter = {
  "/osmosis.superfluid.MsgSuperfluidDelegate": {
    aminoType: "osmosis/superfluid-delegate",
    toAmino: MsgSuperfluidDelegate.toAmino,
    fromAmino: MsgSuperfluidDelegate.fromAmino
  },
  "/osmosis.superfluid.MsgSuperfluidUndelegate": {
    aminoType: "osmosis/superfluid-undelegate",
    toAmino: MsgSuperfluidUndelegate.toAmino,
    fromAmino: MsgSuperfluidUndelegate.fromAmino
  },
  "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
    aminoType: "osmosis/superfluid-unbond-lock",
    toAmino: MsgSuperfluidUnbondLock.toAmino,
    fromAmino: MsgSuperfluidUnbondLock.fromAmino
  },
  "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
    aminoType: "osmosis/lock-and-superfluid-delegate",
    toAmino: MsgLockAndSuperfluidDelegate.toAmino,
    fromAmino: MsgLockAndSuperfluidDelegate.fromAmino
  },
  "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
    aminoType: "osmosis/unpool-whitelisted-pool",
    toAmino: MsgUnPoolWhitelistedPool.toAmino,
    fromAmino: MsgUnPoolWhitelistedPool.fromAmino
  }
};