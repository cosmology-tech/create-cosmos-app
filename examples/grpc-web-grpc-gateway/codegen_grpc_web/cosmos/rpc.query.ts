import { grpc } from "@improbable-eng/grpc-web";
import { NodeHttpTransport } from "@improbable-eng/grpc-web-node-http-transport";
export const createGrpcWebClient = async ({
  endpoint
}: {
  endpoint: string;
}) => {
  endpoint = endpoint.replace(/\/*$/, "");
  console.log(endpoint);
  
  const {
    GrpcWebImpl
  } = await import("./app/v1alpha1/query.rpc.Query");
  let grpcWeb;
  console.log('creating');
  
  if (typeof document !== "undefined") {
    console.log('browser');
    grpcWeb = new GrpcWebImpl(endpoint, {
      transport: grpc.CrossBrowserHttpTransport({
        withCredentials: false
      })
      // transport: NodeHttpTransport()
    });
  } else if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {
    console.log('react-native');
    grpcWeb = new GrpcWebImpl(endpoint, {
      transport: NodeHttpTransport()
    });
  } else {
    console.log('node.js');
    grpcWeb = new GrpcWebImpl(endpoint, {
      transport: NodeHttpTransport()
    });
  }
  return {
    cosmos: {
      app: {
        v1alpha1: new (await import("./app/v1alpha1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      auth: {
        v1beta1: new (await import("./auth/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      authz: {
        v1beta1: new (await import("./authz/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      bank: {
        v1beta1: new (await import("./bank/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      base: {
        tendermint: {
          v1beta1: new (await import("./base/tendermint/v1beta1/query.rpc.Service")).ServiceClientImpl(grpcWeb)
        }
      },
      distribution: {
        v1beta1: new (await import("./distribution/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      evidence: {
        v1beta1: new (await import("./evidence/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      feegrant: {
        v1beta1: new (await import("./feegrant/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      gov: {
        v1: new (await import("./gov/v1/query.rpc.Query")).QueryClientImpl(grpcWeb),
        v1beta1: new (await import("./gov/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      group: {
        v1: new (await import("./group/v1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      mint: {
        v1beta1: new (await import("./mint/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      nft: {
        v1beta1: new (await import("./nft/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      params: {
        v1beta1: new (await import("./params/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      slashing: {
        v1beta1: new (await import("./slashing/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      staking: {
        v1beta1: new (await import("./staking/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      tx: {
        v1beta1: new (await import("./tx/v1beta1/service.rpc.Service")).ServiceClientImpl(grpcWeb)
      },
      upgrade: {
        v1beta1: new (await import("./upgrade/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      }
    }
  };
};