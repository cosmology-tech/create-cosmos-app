import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./genesis";
import { LCDClient } from "@osmonauts/lcd";
import { QueryPeriodRequest, QueryPeriodRequestSDKType, QueryPeriodResponse, QueryPeriodResponseSDKType, QueryEpochMintProvisionRequest, QueryEpochMintProvisionRequestSDKType, QueryEpochMintProvisionResponse, QueryEpochMintProvisionResponseSDKType, QuerySkippedEpochsRequest, QuerySkippedEpochsRequestSDKType, QuerySkippedEpochsResponse, QuerySkippedEpochsResponseSDKType, QueryCirculatingSupplyRequest, QueryCirculatingSupplyRequestSDKType, QueryCirculatingSupplyResponse, QueryCirculatingSupplyResponseSDKType, QueryInflationRateRequest, QueryInflationRateRequestSDKType, QueryInflationRateResponse, QueryInflationRateResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.period = this.period.bind(this);
    this.epochMintProvision = this.epochMintProvision.bind(this);
    this.skippedEpochs = this.skippedEpochs.bind(this);
    this.circulatingSupply = this.circulatingSupply.bind(this);
    this.inflationRate = this.inflationRate.bind(this);
    this.params = this.params.bind(this);
  }
  /* Period retrieves current period. */
  async period(_params: QueryPeriodRequest = {}): Promise<QueryPeriodResponseSDKType> {
    const endpoint = `evmos/inflation/v1/period`;
    return await this.req.get<QueryPeriodResponseSDKType>(endpoint);
  }
  /* EpochMintProvision retrieves current minting epoch provision value. */
  async epochMintProvision(_params: QueryEpochMintProvisionRequest = {}): Promise<QueryEpochMintProvisionResponseSDKType> {
    const endpoint = `evmos/inflation/v1/epoch_mint_provision`;
    return await this.req.get<QueryEpochMintProvisionResponseSDKType>(endpoint);
  }
  /* SkippedEpochs retrieves the total number of skipped epochs. */
  async skippedEpochs(_params: QuerySkippedEpochsRequest = {}): Promise<QuerySkippedEpochsResponseSDKType> {
    const endpoint = `evmos/inflation/v1/skipped_epochs`;
    return await this.req.get<QuerySkippedEpochsResponseSDKType>(endpoint);
  }
  /* CirculatingSupply retrieves the total number of tokens that are in
   circulation (i.e. excluding unvested tokens). */
  async circulatingSupply(_params: QueryCirculatingSupplyRequest = {}): Promise<QueryCirculatingSupplyResponseSDKType> {
    const endpoint = `evmos/inflation/v1/circulating_supply`;
    return await this.req.get<QueryCirculatingSupplyResponseSDKType>(endpoint);
  }
  /* InflationRate retrieves the inflation rate of the current period. */
  async inflationRate(_params: QueryInflationRateRequest = {}): Promise<QueryInflationRateResponseSDKType> {
    const endpoint = `evmos/inflation/v1/inflation_rate`;
    return await this.req.get<QueryInflationRateResponseSDKType>(endpoint);
  }
  /* Params retrieves the total set of minting parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `evmos/inflation/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
}