import { MsgCreateClawbackVestingAccount, MsgClawback } from "./tx";
export const AminoConverter = {
  "/evmos.vesting.v1.MsgCreateClawbackVestingAccount": {
    aminoType: "/evmos.vesting.v1.MsgCreateClawbackVestingAccount",
    toAmino: MsgCreateClawbackVestingAccount.toAmino,
    fromAmino: MsgCreateClawbackVestingAccount.fromAmino
  },
  "/evmos.vesting.v1.MsgClawback": {
    aminoType: "/evmos.vesting.v1.MsgClawback",
    toAmino: MsgClawback.toAmino,
    fromAmino: MsgClawback.fromAmino
  }
};