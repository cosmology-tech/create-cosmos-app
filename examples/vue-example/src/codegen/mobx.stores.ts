import { ProtobufRpcClient } from "@cosmjs/stargate";
import * as _AkashCertV1beta2Queryrpc from "./akash/cert/v1beta2/query.rpc.Query.js";
import * as _CosmosGovV1beta1Queryrpc from "./cosmos/gov/v1beta1/query.rpc.Query.js";
import * as _OsmosisGammV1beta1Queryrpc from "./osmosis/gamm/v1beta1/query.rpc.Query.js";
import * as _OsmosisGammV2Queryrpc from "./osmosis/gamm/v2/query.rpc.Query.js";
export const createRpcQueryMobxStores = ({
  rpc
}: {
  rpc: ProtobufRpcClient | undefined;
}) => {
  return {
    akash: {
      cert: {
        v1beta2: _AkashCertV1beta2Queryrpc.createRpcQueryMobxStores(rpc)
      }
    },
    cosmos: {
      gov: {
        v1beta1: _CosmosGovV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
      }
    },
    osmosis: {
      gamm: {
        v1beta1: _OsmosisGammV1beta1Queryrpc.createRpcQueryMobxStores(rpc),
        v2: _OsmosisGammV2Queryrpc.createRpcQueryMobxStores(rpc)
      }
    }
  };
};