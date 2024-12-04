import { ProtobufRpcClient } from "@cosmjs/stargate";
import * as _AkashCertV1beta2Querypinia from "./akash/cert/v1beta2/query.pinia.store";
import * as _EvmosErc20V1Querypinia from "./evmos/erc20/v1/query.pinia.store";
import * as _OsmosisGammV1beta1Querypinia from "./osmosis/gamm/v1beta1/query.pinia.store";
import * as _OsmosisGammV2Querypinia from "./osmosis/gamm/v2/query.pinia.store";
export const createPiniaStores = ({
  rpc
}: {
  rpc: ProtobufRpcClient | undefined;
}) => {
  return {
    akash: {
      cert: {
        v1beta2: _AkashCertV1beta2Querypinia.usePiniaStore(rpc)
      }
    },
    evmos: {
      erc20: {
        v1: _EvmosErc20V1Querypinia.usePiniaStore(rpc)
      }
    },
    osmosis: {
      gamm: {
        v1beta1: _OsmosisGammV1beta1Querypinia.usePiniaStore(rpc),
        v2: _OsmosisGammV2Querypinia.usePiniaStore(rpc)
      }
    }
  };
};