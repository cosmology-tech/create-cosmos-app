import { grpc } from "@improbable-eng/grpc-web";
import { NodeHttpTransport } from "@improbable-eng/grpc-web-node-http-transport";
export const createRPCMsgClient = async ({
  endpoint
}: {
  endpoint: string;
}) => {
  endpoint = endpoint.replace(/\/*$/, "");
  const {
    GrpcWebImpl
  } = await import("../cosmos/app/v1alpha1/query.rpc.Query");
  let grpcWeb;
  if (typeof document !== "undefined") {
    grpcWeb = new GrpcWebImpl(endpoint, {
      transport: grpc.CrossBrowserHttpTransport({
        withCredentials: false
      })
    });
  } else if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {
    grpcWeb = new GrpcWebImpl(endpoint, {
      transport: NodeHttpTransport()
    });
  } else {
    grpcWeb = new GrpcWebImpl(endpoint, {
      transport: NodeHttpTransport()
    });
  }
  return {
    cosmos: {
      authz: {
        v1beta1: new (await import("../cosmos/authz/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
      },
      bank: {
        v1beta1: new (await import("../cosmos/bank/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
      },
      crisis: {
        v1beta1: new (await import("../cosmos/crisis/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
      },
      distribution: {
        v1beta1: new (await import("../cosmos/distribution/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
      },
      evidence: {
        v1beta1: new (await import("../cosmos/evidence/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
      },
      feegrant: {
        v1beta1: new (await import("../cosmos/feegrant/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
      },
      gov: {
        v1: new (await import("../cosmos/gov/v1/tx.rpc.msg")).MsgClientImpl(grpcWeb),
        v1beta1: new (await import("../cosmos/gov/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
      },
      group: {
        v1: new (await import("../cosmos/group/v1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
      },
      nft: {
        v1beta1: new (await import("../cosmos/nft/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
      },
      slashing: {
        v1beta1: new (await import("../cosmos/slashing/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
      },
      staking: {
        v1beta1: new (await import("../cosmos/staking/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
      },
      upgrade: {
        v1beta1: new (await import("../cosmos/upgrade/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
      },
      vesting: {
        v1beta1: new (await import("../cosmos/vesting/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
      }
    },
    evmos: {
      erc20: {
        v1: new (await import("./erc20/v1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
      },
      fees: {
        v1: new (await import("./fees/v1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
      },
      vesting: {
        v1: new (await import("./vesting/v1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
      }
    }
  };
};