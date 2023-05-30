import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  akash: {
    audit: {
      v1beta1: new (await import("./audit/v1beta1/audit.rpc.msg")).MsgClientImpl(rpc),
      v1beta2: new (await import("./audit/v1beta2/audit.rpc.msg")).MsgClientImpl(rpc)
    },
    cert: {
      v1beta2: new (await import("./cert/v1beta2/cert.rpc.msg")).MsgClientImpl(rpc)
    },
    deployment: {
      v1beta1: new (await import("./deployment/v1beta1/deployment.rpc.msg")).MsgClientImpl(rpc),
      v1beta2: new (await import("./deployment/v1beta2/service.rpc.msg")).MsgClientImpl(rpc)
    },
    market: {
      v1beta2: new (await import("./market/v1beta2/service.rpc.msg")).MsgClientImpl(rpc)
    },
    provider: {
      v1beta1: new (await import("./provider/v1beta1/provider.rpc.msg")).MsgClientImpl(rpc),
      v1beta2: new (await import("./provider/v1beta2/provider.rpc.msg")).MsgClientImpl(rpc)
    }
  },
  cosmos: {
    authz: {
      v1beta1: new (await import("../cosmos/authz/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    crisis: {
      v1beta1: new (await import("../cosmos/crisis/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    distribution: {
      v1beta1: new (await import("../cosmos/distribution/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    evidence: {
      v1beta1: new (await import("../cosmos/evidence/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    feegrant: {
      v1beta1: new (await import("../cosmos/feegrant/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    gov: {
      v1: new (await import("../cosmos/gov/v1/tx.rpc.msg")).MsgClientImpl(rpc),
      v1beta1: new (await import("../cosmos/gov/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    group: {
      v1: new (await import("../cosmos/group/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    nft: {
      v1beta1: new (await import("../cosmos/nft/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    slashing: {
      v1beta1: new (await import("../cosmos/slashing/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    staking: {
      v1beta1: new (await import("../cosmos/staking/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    upgrade: {
      v1beta1: new (await import("../cosmos/upgrade/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    vesting: {
      v1beta1: new (await import("../cosmos/vesting/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  }
});