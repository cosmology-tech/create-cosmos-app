import { MsgSuperfluidDelegate, MsgSuperfluidUndelegate, MsgSuperfluidUnbondLock, MsgLockAndSuperfluidDelegate, MsgUnPoolWhitelistedPool } from "./tx";
export declare const AminoConverter: {
    "/osmosis.superfluid.MsgSuperfluidDelegate": {
        aminoType: string;
        toAmino: (message: MsgSuperfluidDelegate) => import("./tx").MsgSuperfluidDelegateAmino;
        fromAmino: (object: import("./tx").MsgSuperfluidDelegateAmino) => MsgSuperfluidDelegate;
    };
    "/osmosis.superfluid.MsgSuperfluidUndelegate": {
        aminoType: string;
        toAmino: (message: MsgSuperfluidUndelegate) => import("./tx").MsgSuperfluidUndelegateAmino;
        fromAmino: (object: import("./tx").MsgSuperfluidUndelegateAmino) => MsgSuperfluidUndelegate;
    };
    "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
        aminoType: string;
        toAmino: (message: MsgSuperfluidUnbondLock) => import("./tx").MsgSuperfluidUnbondLockAmino;
        fromAmino: (object: import("./tx").MsgSuperfluidUnbondLockAmino) => MsgSuperfluidUnbondLock;
    };
    "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
        aminoType: string;
        toAmino: (message: MsgLockAndSuperfluidDelegate) => import("./tx").MsgLockAndSuperfluidDelegateAmino;
        fromAmino: (object: import("./tx").MsgLockAndSuperfluidDelegateAmino) => MsgLockAndSuperfluidDelegate;
    };
    "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
        aminoType: string;
        toAmino: (message: MsgUnPoolWhitelistedPool) => import("./tx").MsgUnPoolWhitelistedPoolAmino;
        fromAmino: (object: import("./tx").MsgUnPoolWhitelistedPoolAmino) => MsgUnPoolWhitelistedPool;
    };
};
