import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { TokenPair, TokenPairSDKType } from "./erc20";
import { Params, ParamsSDKType } from "./genesis";
import { LCDClient } from "@cosmology/lcd";
import { useEndpoint } from "../../../pinia-endpoint";
import { QueryTokenPairsRequest, QueryTokenPairsRequestSDKType, QueryTokenPairsResponse, QueryTokenPairsResponseSDKType, QueryTokenPairRequest, QueryTokenPairRequestSDKType, QueryTokenPairResponse, QueryTokenPairResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('evmos/erc20/v1/query.proto', {
  state: () => {
    return {
      tokenPairs: ({} as QueryTokenPairsResponseSDKType),
      tokenPair: ({} as QueryTokenPairResponseSDKType),
      params: ({} as QueryParamsResponseSDKType)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }
  },
  actions: {
    async fetchTokenPairs(param : QueryTokenPairsRequestSDKType) {
      this.tokenPairs = await this.lcdClient.tokenPairs(param);
      return this.tokenPairs;
    },
    async fetchTokenPair(param : QueryTokenPairRequestSDKType) {
      this.tokenPair = await this.lcdClient.tokenPair(param);
      return this.tokenPair;
    },
    async fetchParams(param : QueryParamsRequestSDKType) {
      this.params = await this.lcdClient.params(param);
      return this.params;
    }
  }
});