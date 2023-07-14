import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  cosmos: {
    authz: {
      v1beta1: new (await import("../cosmos/authz/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    distribution: {
      v1beta1: new (await import("../cosmos/distribution/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    gov: {
      v1: new (await import("../cosmos/gov/v1/tx.rpc.msg")).MsgClientImpl(rpc),
      v1beta1: new (await import("../cosmos/gov/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    staking: {
      v1beta1: new (await import("../cosmos/staking/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    upgrade: {
      v1beta1: new (await import("../cosmos/upgrade/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  },
  ibc: {
    applications: {
      transfer: {
        v1: new (await import("./applications/transfer/v1/tx.rpc.msg")).MsgClientImpl(rpc)
      }
    },
    core: {
      channel: {
        v1: new (await import("./core/channel/v1/tx.rpc.msg")).MsgClientImpl(rpc)
      },
      client: {
        v1: new (await import("./core/client/v1/tx.rpc.msg")).MsgClientImpl(rpc)
      },
      connection: {
        v1: new (await import("./core/connection/v1/tx.rpc.msg")).MsgClientImpl(rpc)
      }
    }
  }
});