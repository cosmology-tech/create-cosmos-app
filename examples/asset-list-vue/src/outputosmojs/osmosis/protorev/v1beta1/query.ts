import { Params, ParamsSDKType } from "./params";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { RouteStatistics, RouteStatisticsSDKType, TokenPairArbRoutes, TokenPairArbRoutesSDKType, PoolWeights, PoolWeightsSDKType, BaseDenom, BaseDenomSDKType } from "./protorev";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, isSet } from "../../../helpers";
export const protobufPackage = "osmosis.protorev.v1beta1";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QueryGetProtoRevNumberOfTradesRequest is request type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesRequest {}
export interface QueryGetProtoRevNumberOfTradesRequestProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesRequest";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevNumberOfTradesRequest is request type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesRequestSDKType {}
/**
 * QueryGetProtoRevNumberOfTradesResponse is response type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesResponse {
  /** number_of_trades is the number of trades the module has executed */
  numberOfTrades: string;
}
export interface QueryGetProtoRevNumberOfTradesResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesResponse";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevNumberOfTradesResponse is response type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesResponseSDKType {
  number_of_trades: string;
}
/**
 * QueryGetProtoRevProfitsByDenomRequest is request type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomRequest {
  /** denom is the denom to query profits by */
  denom: string;
}
export interface QueryGetProtoRevProfitsByDenomRequestProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomRequest";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevProfitsByDenomRequest is request type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomRequestSDKType {
  denom: string;
}
/**
 * QueryGetProtoRevProfitsByDenomResponse is response type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomResponse {
  /** profit is the profits of the module by the selected denom */
  profit?: Coin;
}
export interface QueryGetProtoRevProfitsByDenomResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomResponse";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevProfitsByDenomResponse is response type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomResponseSDKType {
  profit?: CoinSDKType;
}
/**
 * QueryGetProtoRevAllProfitsRequest is request type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsRequest {}
export interface QueryGetProtoRevAllProfitsRequestProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsRequest";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevAllProfitsRequest is request type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsRequestSDKType {}
/**
 * QueryGetProtoRevAllProfitsResponse is response type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsResponse {
  /** profits is a list of all of the profits from the module */
  profits: Coin[];
}
export interface QueryGetProtoRevAllProfitsResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsResponse";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevAllProfitsResponse is response type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsResponseSDKType {
  profits: CoinSDKType[];
}
/**
 * QueryGetProtoRevStatisticsByPoolRequest is request type for the
 * Query/GetProtoRevStatisticsByRoute RPC method.
 */
export interface QueryGetProtoRevStatisticsByRouteRequest {
  /** route is the set of pool ids to query statistics by i.e. 1,2,3 */
  route: bigint[];
}
export interface QueryGetProtoRevStatisticsByRouteRequestProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByRouteRequest";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevStatisticsByPoolRequest is request type for the
 * Query/GetProtoRevStatisticsByRoute RPC method.
 */
export interface QueryGetProtoRevStatisticsByRouteRequestSDKType {
  route: bigint[];
}
/**
 * QueryGetProtoRevStatisticsByRouteResponse is response type for the
 * Query/GetProtoRevStatisticsByRoute RPC method.
 */
export interface QueryGetProtoRevStatisticsByRouteResponse {
  /**
   * statistics contains the number of trades the module has executed after a
   * swap on a given pool and the profits from the trades
   */
  statistics: RouteStatistics;
}
export interface QueryGetProtoRevStatisticsByRouteResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByRouteResponse";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevStatisticsByRouteResponse is response type for the
 * Query/GetProtoRevStatisticsByRoute RPC method.
 */
export interface QueryGetProtoRevStatisticsByRouteResponseSDKType {
  statistics: RouteStatisticsSDKType;
}
/**
 * QueryGetProtoRevAllRouteStatisticsRequest is request type for the
 * Query/GetProtoRevAllRouteStatistics RPC method.
 */
export interface QueryGetProtoRevAllRouteStatisticsRequest {}
export interface QueryGetProtoRevAllRouteStatisticsRequestProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllRouteStatisticsRequest";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevAllRouteStatisticsRequest is request type for the
 * Query/GetProtoRevAllRouteStatistics RPC method.
 */
export interface QueryGetProtoRevAllRouteStatisticsRequestSDKType {}
/**
 * QueryGetProtoRevAllRouteStatisticsResponse is response type for the
 * Query/GetProtoRevAllRouteStatistics RPC method.
 */
export interface QueryGetProtoRevAllRouteStatisticsResponse {
  /**
   * statistics contains the number of trades/profits the module has executed on
   * all routes it has successfully executed a trade on
   */
  statistics: RouteStatistics[];
}
export interface QueryGetProtoRevAllRouteStatisticsResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllRouteStatisticsResponse";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevAllRouteStatisticsResponse is response type for the
 * Query/GetProtoRevAllRouteStatistics RPC method.
 */
export interface QueryGetProtoRevAllRouteStatisticsResponseSDKType {
  statistics: RouteStatisticsSDKType[];
}
/**
 * QueryGetProtoRevTokenPairArbRoutesRequest is request type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesRequest {}
export interface QueryGetProtoRevTokenPairArbRoutesRequestProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesRequest";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevTokenPairArbRoutesRequest is request type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesRequestSDKType {}
/**
 * QueryGetProtoRevTokenPairArbRoutesResponse is response type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesResponse {
  /**
   * routes is a list of all of the hot routes that the module is currently
   * arbitraging
   */
  routes: TokenPairArbRoutes[];
}
export interface QueryGetProtoRevTokenPairArbRoutesResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesResponse";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevTokenPairArbRoutesResponse is response type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesResponseSDKType {
  routes: TokenPairArbRoutesSDKType[];
}
/**
 * QueryGetProtoRevAdminAccountRequest is request type for the
 * Query/GetProtoRevAdminAccount RPC method.
 */
export interface QueryGetProtoRevAdminAccountRequest {}
export interface QueryGetProtoRevAdminAccountRequestProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAdminAccountRequest";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevAdminAccountRequest is request type for the
 * Query/GetProtoRevAdminAccount RPC method.
 */
export interface QueryGetProtoRevAdminAccountRequestSDKType {}
/**
 * QueryGetProtoRevAdminAccountResponse is response type for the
 * Query/GetProtoRevAdminAccount RPC method.
 */
export interface QueryGetProtoRevAdminAccountResponse {
  /** admin_account is the admin account of the module */
  adminAccount: string;
}
export interface QueryGetProtoRevAdminAccountResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAdminAccountResponse";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevAdminAccountResponse is response type for the
 * Query/GetProtoRevAdminAccount RPC method.
 */
export interface QueryGetProtoRevAdminAccountResponseSDKType {
  admin_account: string;
}
/**
 * QueryGetProtoRevDeveloperAccountRequest is request type for the
 * Query/GetProtoRevDeveloperAccount RPC method.
 */
export interface QueryGetProtoRevDeveloperAccountRequest {}
export interface QueryGetProtoRevDeveloperAccountRequestProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevDeveloperAccountRequest";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevDeveloperAccountRequest is request type for the
 * Query/GetProtoRevDeveloperAccount RPC method.
 */
export interface QueryGetProtoRevDeveloperAccountRequestSDKType {}
/**
 * QueryGetProtoRevDeveloperAccountResponse is response type for the
 * Query/GetProtoRevDeveloperAccount RPC method.
 */
export interface QueryGetProtoRevDeveloperAccountResponse {
  /** developer_account is the developer account of the module */
  developerAccount: string;
}
export interface QueryGetProtoRevDeveloperAccountResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevDeveloperAccountResponse";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevDeveloperAccountResponse is response type for the
 * Query/GetProtoRevDeveloperAccount RPC method.
 */
export interface QueryGetProtoRevDeveloperAccountResponseSDKType {
  developer_account: string;
}
/**
 * QueryGetProtoRevPoolWeightsRequest is request type for the
 * Query/GetProtoRevPoolWeights RPC method.
 */
export interface QueryGetProtoRevPoolWeightsRequest {}
export interface QueryGetProtoRevPoolWeightsRequestProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevPoolWeightsRequest";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevPoolWeightsRequest is request type for the
 * Query/GetProtoRevPoolWeights RPC method.
 */
export interface QueryGetProtoRevPoolWeightsRequestSDKType {}
/**
 * QueryGetProtoRevPoolWeightsResponse is response type for the
 * Query/GetProtoRevPoolWeights RPC method.
 */
export interface QueryGetProtoRevPoolWeightsResponse {
  /** pool_weights is a list of all of the pool weights */
  poolWeights: PoolWeights;
}
export interface QueryGetProtoRevPoolWeightsResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevPoolWeightsResponse";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevPoolWeightsResponse is response type for the
 * Query/GetProtoRevPoolWeights RPC method.
 */
export interface QueryGetProtoRevPoolWeightsResponseSDKType {
  pool_weights: PoolWeightsSDKType;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerBlockRequest is request type for the
 * Query/GetProtoRevMaxPoolPointsPerBlock RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerBlockRequest {}
export interface QueryGetProtoRevMaxPoolPointsPerBlockRequestProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerBlockRequest";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerBlockRequest is request type for the
 * Query/GetProtoRevMaxPoolPointsPerBlock RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerBlockRequestSDKType {}
/**
 * QueryGetProtoRevMaxPoolPointsPerBlockResponse is response type for the
 * Query/GetProtoRevMaxPoolPointsPerBlock RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerBlockResponse {
  /**
   * max_pool_points_per_block is the maximum number of pool points that can be
   * consumed per block
   */
  maxPoolPointsPerBlock: bigint;
}
export interface QueryGetProtoRevMaxPoolPointsPerBlockResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerBlockResponse";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerBlockResponse is response type for the
 * Query/GetProtoRevMaxPoolPointsPerBlock RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerBlockResponseSDKType {
  max_pool_points_per_block: bigint;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerTxRequest is request type for the
 * Query/GetProtoRevMaxPoolPointsPerTx RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerTxRequest {}
export interface QueryGetProtoRevMaxPoolPointsPerTxRequestProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerTxRequest";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerTxRequest is request type for the
 * Query/GetProtoRevMaxPoolPointsPerTx RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerTxRequestSDKType {}
/**
 * QueryGetProtoRevMaxPoolPointsPerTxResponse is response type for the
 * Query/GetProtoRevMaxPoolPointsPerTx RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerTxResponse {
  /**
   * max_pool_points_per_tx is the maximum number of pool points that can be
   * consumed per transaction
   */
  maxPoolPointsPerTx: bigint;
}
export interface QueryGetProtoRevMaxPoolPointsPerTxResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerTxResponse";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerTxResponse is response type for the
 * Query/GetProtoRevMaxPoolPointsPerTx RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerTxResponseSDKType {
  max_pool_points_per_tx: bigint;
}
/**
 * QueryGetProtoRevBaseDenomsRequest is request type for the
 * Query/GetProtoRevBaseDenoms RPC method.
 */
export interface QueryGetProtoRevBaseDenomsRequest {}
export interface QueryGetProtoRevBaseDenomsRequestProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevBaseDenomsRequest";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevBaseDenomsRequest is request type for the
 * Query/GetProtoRevBaseDenoms RPC method.
 */
export interface QueryGetProtoRevBaseDenomsRequestSDKType {}
/**
 * QueryGetProtoRevBaseDenomsResponse is response type for the
 * Query/GetProtoRevBaseDenoms RPC method.
 */
export interface QueryGetProtoRevBaseDenomsResponse {
  /** base_denoms is a list of all of the base denoms and step sizes */
  baseDenoms: BaseDenom[];
}
export interface QueryGetProtoRevBaseDenomsResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevBaseDenomsResponse";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevBaseDenomsResponse is response type for the
 * Query/GetProtoRevBaseDenoms RPC method.
 */
export interface QueryGetProtoRevBaseDenomsResponseSDKType {
  base_denoms: BaseDenomSDKType[];
}
/**
 * QueryGetProtoRevEnabledRequest is request type for the
 * Query/GetProtoRevEnabled RPC method.
 */
export interface QueryGetProtoRevEnabledRequest {}
export interface QueryGetProtoRevEnabledRequestProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevEnabledRequest";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevEnabledRequest is request type for the
 * Query/GetProtoRevEnabled RPC method.
 */
export interface QueryGetProtoRevEnabledRequestSDKType {}
/**
 * QueryGetProtoRevEnabledResponse is response type for the
 * Query/GetProtoRevEnabled RPC method.
 */
export interface QueryGetProtoRevEnabledResponse {
  /** enabled is whether the module is enabled */
  enabled: boolean;
}
export interface QueryGetProtoRevEnabledResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevEnabledResponse";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevEnabledResponse is response type for the
 * Query/GetProtoRevEnabled RPC method.
 */
export interface QueryGetProtoRevEnabledResponseSDKType {
  enabled: boolean;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): JsonSafe<QueryParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromSDK(_: QueryParamsRequestSDKType): QueryParamsRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryParamsRequestSDKType {
    return {};
  },
  toSDK(_: QueryParamsRequest): QueryParamsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg {
    return {
      type: "osmosis/protorev/query-params-request",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  fromSDKJSON(object: any): QueryParamsResponseSDKType {
    return {
      params: isSet(object.params) ? Params.fromSDKJSON(object.params) : undefined
    };
  },
  toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg {
    return {
      type: "osmosis/protorev/query-params-response",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetProtoRevNumberOfTradesRequest(): QueryGetProtoRevNumberOfTradesRequest {
  return {};
}
export const QueryGetProtoRevNumberOfTradesRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesRequest",
  encode(_: QueryGetProtoRevNumberOfTradesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevNumberOfTradesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevNumberOfTradesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryGetProtoRevNumberOfTradesRequest {
    return {};
  },
  toJSON(_: QueryGetProtoRevNumberOfTradesRequest): JsonSafe<QueryGetProtoRevNumberOfTradesRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryGetProtoRevNumberOfTradesRequest>): QueryGetProtoRevNumberOfTradesRequest {
    const message = createBaseQueryGetProtoRevNumberOfTradesRequest();
    return message;
  },
  fromSDK(_: QueryGetProtoRevNumberOfTradesRequestSDKType): QueryGetProtoRevNumberOfTradesRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryGetProtoRevNumberOfTradesRequestSDKType {
    return {};
  },
  toSDK(_: QueryGetProtoRevNumberOfTradesRequest): QueryGetProtoRevNumberOfTradesRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryGetProtoRevNumberOfTradesRequestAmino): QueryGetProtoRevNumberOfTradesRequest {
    const message = createBaseQueryGetProtoRevNumberOfTradesRequest();
    return message;
  },
  toAmino(_: QueryGetProtoRevNumberOfTradesRequest): QueryGetProtoRevNumberOfTradesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevNumberOfTradesRequestAminoMsg): QueryGetProtoRevNumberOfTradesRequest {
    return QueryGetProtoRevNumberOfTradesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevNumberOfTradesRequest): QueryGetProtoRevNumberOfTradesRequestAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-number-of-trades-request",
      value: QueryGetProtoRevNumberOfTradesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevNumberOfTradesRequestProtoMsg): QueryGetProtoRevNumberOfTradesRequest {
    return QueryGetProtoRevNumberOfTradesRequest.decode(message.value);
  },
  toProto(message: QueryGetProtoRevNumberOfTradesRequest): Uint8Array {
    return QueryGetProtoRevNumberOfTradesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevNumberOfTradesRequest): QueryGetProtoRevNumberOfTradesRequestProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesRequest",
      value: QueryGetProtoRevNumberOfTradesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetProtoRevNumberOfTradesResponse(): QueryGetProtoRevNumberOfTradesResponse {
  return {
    numberOfTrades: ""
  };
}
export const QueryGetProtoRevNumberOfTradesResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesResponse",
  encode(message: QueryGetProtoRevNumberOfTradesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.numberOfTrades !== "") {
      writer.uint32(10).string(message.numberOfTrades);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevNumberOfTradesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevNumberOfTradesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numberOfTrades = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevNumberOfTradesResponse {
    return {
      numberOfTrades: isSet(object.numberOfTrades) ? String(object.numberOfTrades) : ""
    };
  },
  toJSON(message: QueryGetProtoRevNumberOfTradesResponse): JsonSafe<QueryGetProtoRevNumberOfTradesResponse> {
    const obj: any = {};
    message.numberOfTrades !== undefined && (obj.numberOfTrades = message.numberOfTrades);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGetProtoRevNumberOfTradesResponse>): QueryGetProtoRevNumberOfTradesResponse {
    const message = createBaseQueryGetProtoRevNumberOfTradesResponse();
    message.numberOfTrades = object.numberOfTrades ?? "";
    return message;
  },
  fromSDK(object: QueryGetProtoRevNumberOfTradesResponseSDKType): QueryGetProtoRevNumberOfTradesResponse {
    return {
      numberOfTrades: object?.number_of_trades
    };
  },
  fromSDKJSON(object: any): QueryGetProtoRevNumberOfTradesResponseSDKType {
    return {
      number_of_trades: isSet(object.number_of_trades) ? String(object.number_of_trades) : ""
    };
  },
  toSDK(message: QueryGetProtoRevNumberOfTradesResponse): QueryGetProtoRevNumberOfTradesResponseSDKType {
    const obj: any = {};
    obj.number_of_trades = message.numberOfTrades;
    return obj;
  },
  fromAmino(object: QueryGetProtoRevNumberOfTradesResponseAmino): QueryGetProtoRevNumberOfTradesResponse {
    const message = createBaseQueryGetProtoRevNumberOfTradesResponse();
    if (object.number_of_trades !== undefined && object.number_of_trades !== null) {
      message.numberOfTrades = object.number_of_trades;
    }
    return message;
  },
  toAmino(message: QueryGetProtoRevNumberOfTradesResponse): QueryGetProtoRevNumberOfTradesResponseAmino {
    const obj: any = {};
    obj.number_of_trades = message.numberOfTrades === "" ? undefined : message.numberOfTrades;
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevNumberOfTradesResponseAminoMsg): QueryGetProtoRevNumberOfTradesResponse {
    return QueryGetProtoRevNumberOfTradesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevNumberOfTradesResponse): QueryGetProtoRevNumberOfTradesResponseAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-number-of-trades-response",
      value: QueryGetProtoRevNumberOfTradesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevNumberOfTradesResponseProtoMsg): QueryGetProtoRevNumberOfTradesResponse {
    return QueryGetProtoRevNumberOfTradesResponse.decode(message.value);
  },
  toProto(message: QueryGetProtoRevNumberOfTradesResponse): Uint8Array {
    return QueryGetProtoRevNumberOfTradesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevNumberOfTradesResponse): QueryGetProtoRevNumberOfTradesResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesResponse",
      value: QueryGetProtoRevNumberOfTradesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetProtoRevProfitsByDenomRequest(): QueryGetProtoRevProfitsByDenomRequest {
  return {
    denom: ""
  };
}
export const QueryGetProtoRevProfitsByDenomRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomRequest",
  encode(message: QueryGetProtoRevProfitsByDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevProfitsByDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevProfitsByDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevProfitsByDenomRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: QueryGetProtoRevProfitsByDenomRequest): JsonSafe<QueryGetProtoRevProfitsByDenomRequest> {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGetProtoRevProfitsByDenomRequest>): QueryGetProtoRevProfitsByDenomRequest {
    const message = createBaseQueryGetProtoRevProfitsByDenomRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromSDK(object: QueryGetProtoRevProfitsByDenomRequestSDKType): QueryGetProtoRevProfitsByDenomRequest {
    return {
      denom: object?.denom
    };
  },
  fromSDKJSON(object: any): QueryGetProtoRevProfitsByDenomRequestSDKType {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toSDK(message: QueryGetProtoRevProfitsByDenomRequest): QueryGetProtoRevProfitsByDenomRequestSDKType {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAmino(object: QueryGetProtoRevProfitsByDenomRequestAmino): QueryGetProtoRevProfitsByDenomRequest {
    const message = createBaseQueryGetProtoRevProfitsByDenomRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryGetProtoRevProfitsByDenomRequest): QueryGetProtoRevProfitsByDenomRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevProfitsByDenomRequestAminoMsg): QueryGetProtoRevProfitsByDenomRequest {
    return QueryGetProtoRevProfitsByDenomRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevProfitsByDenomRequest): QueryGetProtoRevProfitsByDenomRequestAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-profits-by-denom-request",
      value: QueryGetProtoRevProfitsByDenomRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevProfitsByDenomRequestProtoMsg): QueryGetProtoRevProfitsByDenomRequest {
    return QueryGetProtoRevProfitsByDenomRequest.decode(message.value);
  },
  toProto(message: QueryGetProtoRevProfitsByDenomRequest): Uint8Array {
    return QueryGetProtoRevProfitsByDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevProfitsByDenomRequest): QueryGetProtoRevProfitsByDenomRequestProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomRequest",
      value: QueryGetProtoRevProfitsByDenomRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetProtoRevProfitsByDenomResponse(): QueryGetProtoRevProfitsByDenomResponse {
  return {
    profit: undefined
  };
}
export const QueryGetProtoRevProfitsByDenomResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomResponse",
  encode(message: QueryGetProtoRevProfitsByDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.profit !== undefined) {
      Coin.encode(message.profit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevProfitsByDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevProfitsByDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevProfitsByDenomResponse {
    return {
      profit: isSet(object.profit) ? Coin.fromJSON(object.profit) : undefined
    };
  },
  toJSON(message: QueryGetProtoRevProfitsByDenomResponse): JsonSafe<QueryGetProtoRevProfitsByDenomResponse> {
    const obj: any = {};
    message.profit !== undefined && (obj.profit = message.profit ? Coin.toJSON(message.profit) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGetProtoRevProfitsByDenomResponse>): QueryGetProtoRevProfitsByDenomResponse {
    const message = createBaseQueryGetProtoRevProfitsByDenomResponse();
    message.profit = object.profit !== undefined && object.profit !== null ? Coin.fromPartial(object.profit) : undefined;
    return message;
  },
  fromSDK(object: QueryGetProtoRevProfitsByDenomResponseSDKType): QueryGetProtoRevProfitsByDenomResponse {
    return {
      profit: object.profit ? Coin.fromSDK(object.profit) : undefined
    };
  },
  fromSDKJSON(object: any): QueryGetProtoRevProfitsByDenomResponseSDKType {
    return {
      profit: isSet(object.profit) ? Coin.fromSDKJSON(object.profit) : undefined
    };
  },
  toSDK(message: QueryGetProtoRevProfitsByDenomResponse): QueryGetProtoRevProfitsByDenomResponseSDKType {
    const obj: any = {};
    message.profit !== undefined && (obj.profit = message.profit ? Coin.toSDK(message.profit) : undefined);
    return obj;
  },
  fromAmino(object: QueryGetProtoRevProfitsByDenomResponseAmino): QueryGetProtoRevProfitsByDenomResponse {
    const message = createBaseQueryGetProtoRevProfitsByDenomResponse();
    if (object.profit !== undefined && object.profit !== null) {
      message.profit = Coin.fromAmino(object.profit);
    }
    return message;
  },
  toAmino(message: QueryGetProtoRevProfitsByDenomResponse): QueryGetProtoRevProfitsByDenomResponseAmino {
    const obj: any = {};
    obj.profit = message.profit ? Coin.toAmino(message.profit) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevProfitsByDenomResponseAminoMsg): QueryGetProtoRevProfitsByDenomResponse {
    return QueryGetProtoRevProfitsByDenomResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevProfitsByDenomResponse): QueryGetProtoRevProfitsByDenomResponseAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-profits-by-denom-response",
      value: QueryGetProtoRevProfitsByDenomResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevProfitsByDenomResponseProtoMsg): QueryGetProtoRevProfitsByDenomResponse {
    return QueryGetProtoRevProfitsByDenomResponse.decode(message.value);
  },
  toProto(message: QueryGetProtoRevProfitsByDenomResponse): Uint8Array {
    return QueryGetProtoRevProfitsByDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevProfitsByDenomResponse): QueryGetProtoRevProfitsByDenomResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomResponse",
      value: QueryGetProtoRevProfitsByDenomResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetProtoRevAllProfitsRequest(): QueryGetProtoRevAllProfitsRequest {
  return {};
}
export const QueryGetProtoRevAllProfitsRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsRequest",
  encode(_: QueryGetProtoRevAllProfitsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevAllProfitsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevAllProfitsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryGetProtoRevAllProfitsRequest {
    return {};
  },
  toJSON(_: QueryGetProtoRevAllProfitsRequest): JsonSafe<QueryGetProtoRevAllProfitsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryGetProtoRevAllProfitsRequest>): QueryGetProtoRevAllProfitsRequest {
    const message = createBaseQueryGetProtoRevAllProfitsRequest();
    return message;
  },
  fromSDK(_: QueryGetProtoRevAllProfitsRequestSDKType): QueryGetProtoRevAllProfitsRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryGetProtoRevAllProfitsRequestSDKType {
    return {};
  },
  toSDK(_: QueryGetProtoRevAllProfitsRequest): QueryGetProtoRevAllProfitsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryGetProtoRevAllProfitsRequestAmino): QueryGetProtoRevAllProfitsRequest {
    const message = createBaseQueryGetProtoRevAllProfitsRequest();
    return message;
  },
  toAmino(_: QueryGetProtoRevAllProfitsRequest): QueryGetProtoRevAllProfitsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevAllProfitsRequestAminoMsg): QueryGetProtoRevAllProfitsRequest {
    return QueryGetProtoRevAllProfitsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevAllProfitsRequest): QueryGetProtoRevAllProfitsRequestAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-all-profits-request",
      value: QueryGetProtoRevAllProfitsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevAllProfitsRequestProtoMsg): QueryGetProtoRevAllProfitsRequest {
    return QueryGetProtoRevAllProfitsRequest.decode(message.value);
  },
  toProto(message: QueryGetProtoRevAllProfitsRequest): Uint8Array {
    return QueryGetProtoRevAllProfitsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevAllProfitsRequest): QueryGetProtoRevAllProfitsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsRequest",
      value: QueryGetProtoRevAllProfitsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetProtoRevAllProfitsResponse(): QueryGetProtoRevAllProfitsResponse {
  return {
    profits: []
  };
}
export const QueryGetProtoRevAllProfitsResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsResponse",
  encode(message: QueryGetProtoRevAllProfitsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.profits) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevAllProfitsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevAllProfitsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profits.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevAllProfitsResponse {
    return {
      profits: Array.isArray(object?.profits) ? object.profits.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryGetProtoRevAllProfitsResponse): JsonSafe<QueryGetProtoRevAllProfitsResponse> {
    const obj: any = {};
    if (message.profits) {
      obj.profits = message.profits.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.profits = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGetProtoRevAllProfitsResponse>): QueryGetProtoRevAllProfitsResponse {
    const message = createBaseQueryGetProtoRevAllProfitsResponse();
    message.profits = object.profits?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryGetProtoRevAllProfitsResponseSDKType): QueryGetProtoRevAllProfitsResponse {
    return {
      profits: Array.isArray(object?.profits) ? object.profits.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): QueryGetProtoRevAllProfitsResponseSDKType {
    return {
      profits: Array.isArray(object?.profits) ? object.profits.map((e: any) => Coin.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: QueryGetProtoRevAllProfitsResponse): QueryGetProtoRevAllProfitsResponseSDKType {
    const obj: any = {};
    if (message.profits) {
      obj.profits = message.profits.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.profits = [];
    }
    return obj;
  },
  fromAmino(object: QueryGetProtoRevAllProfitsResponseAmino): QueryGetProtoRevAllProfitsResponse {
    const message = createBaseQueryGetProtoRevAllProfitsResponse();
    message.profits = object.profits?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryGetProtoRevAllProfitsResponse): QueryGetProtoRevAllProfitsResponseAmino {
    const obj: any = {};
    if (message.profits) {
      obj.profits = message.profits.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.profits = message.profits;
    }
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevAllProfitsResponseAminoMsg): QueryGetProtoRevAllProfitsResponse {
    return QueryGetProtoRevAllProfitsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevAllProfitsResponse): QueryGetProtoRevAllProfitsResponseAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-all-profits-response",
      value: QueryGetProtoRevAllProfitsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevAllProfitsResponseProtoMsg): QueryGetProtoRevAllProfitsResponse {
    return QueryGetProtoRevAllProfitsResponse.decode(message.value);
  },
  toProto(message: QueryGetProtoRevAllProfitsResponse): Uint8Array {
    return QueryGetProtoRevAllProfitsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevAllProfitsResponse): QueryGetProtoRevAllProfitsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsResponse",
      value: QueryGetProtoRevAllProfitsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetProtoRevStatisticsByRouteRequest(): QueryGetProtoRevStatisticsByRouteRequest {
  return {
    route: []
  };
}
export const QueryGetProtoRevStatisticsByRouteRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByRouteRequest",
  encode(message: QueryGetProtoRevStatisticsByRouteRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.route) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevStatisticsByRouteRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevStatisticsByRouteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.route.push(reader.uint64());
            }
          } else {
            message.route.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevStatisticsByRouteRequest {
    return {
      route: Array.isArray(object?.route) ? object.route.map((e: any) => BigInt(e.toString())) : []
    };
  },
  toJSON(message: QueryGetProtoRevStatisticsByRouteRequest): JsonSafe<QueryGetProtoRevStatisticsByRouteRequest> {
    const obj: any = {};
    if (message.route) {
      obj.route = message.route.map(e => (e || BigInt(0)).toString());
    } else {
      obj.route = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGetProtoRevStatisticsByRouteRequest>): QueryGetProtoRevStatisticsByRouteRequest {
    const message = createBaseQueryGetProtoRevStatisticsByRouteRequest();
    message.route = object.route?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromSDK(object: QueryGetProtoRevStatisticsByRouteRequestSDKType): QueryGetProtoRevStatisticsByRouteRequest {
    return {
      route: Array.isArray(object?.route) ? object.route.map((e: any) => e) : []
    };
  },
  fromSDKJSON(object: any): QueryGetProtoRevStatisticsByRouteRequestSDKType {
    return {
      route: Array.isArray(object?.route) ? object.route.map((e: any) => BigInt(e.toString())) : []
    };
  },
  toSDK(message: QueryGetProtoRevStatisticsByRouteRequest): QueryGetProtoRevStatisticsByRouteRequestSDKType {
    const obj: any = {};
    if (message.route) {
      obj.route = message.route.map(e => e);
    } else {
      obj.route = [];
    }
    return obj;
  },
  fromAmino(object: QueryGetProtoRevStatisticsByRouteRequestAmino): QueryGetProtoRevStatisticsByRouteRequest {
    const message = createBaseQueryGetProtoRevStatisticsByRouteRequest();
    message.route = object.route?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: QueryGetProtoRevStatisticsByRouteRequest): QueryGetProtoRevStatisticsByRouteRequestAmino {
    const obj: any = {};
    if (message.route) {
      obj.route = message.route.map(e => e.toString());
    } else {
      obj.route = message.route;
    }
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevStatisticsByRouteRequestAminoMsg): QueryGetProtoRevStatisticsByRouteRequest {
    return QueryGetProtoRevStatisticsByRouteRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevStatisticsByRouteRequest): QueryGetProtoRevStatisticsByRouteRequestAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-statistics-by-route-request",
      value: QueryGetProtoRevStatisticsByRouteRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevStatisticsByRouteRequestProtoMsg): QueryGetProtoRevStatisticsByRouteRequest {
    return QueryGetProtoRevStatisticsByRouteRequest.decode(message.value);
  },
  toProto(message: QueryGetProtoRevStatisticsByRouteRequest): Uint8Array {
    return QueryGetProtoRevStatisticsByRouteRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevStatisticsByRouteRequest): QueryGetProtoRevStatisticsByRouteRequestProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByRouteRequest",
      value: QueryGetProtoRevStatisticsByRouteRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetProtoRevStatisticsByRouteResponse(): QueryGetProtoRevStatisticsByRouteResponse {
  return {
    statistics: RouteStatistics.fromPartial({})
  };
}
export const QueryGetProtoRevStatisticsByRouteResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByRouteResponse",
  encode(message: QueryGetProtoRevStatisticsByRouteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.statistics !== undefined) {
      RouteStatistics.encode(message.statistics, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevStatisticsByRouteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevStatisticsByRouteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statistics = RouteStatistics.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevStatisticsByRouteResponse {
    return {
      statistics: isSet(object.statistics) ? RouteStatistics.fromJSON(object.statistics) : undefined
    };
  },
  toJSON(message: QueryGetProtoRevStatisticsByRouteResponse): JsonSafe<QueryGetProtoRevStatisticsByRouteResponse> {
    const obj: any = {};
    message.statistics !== undefined && (obj.statistics = message.statistics ? RouteStatistics.toJSON(message.statistics) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGetProtoRevStatisticsByRouteResponse>): QueryGetProtoRevStatisticsByRouteResponse {
    const message = createBaseQueryGetProtoRevStatisticsByRouteResponse();
    message.statistics = object.statistics !== undefined && object.statistics !== null ? RouteStatistics.fromPartial(object.statistics) : undefined;
    return message;
  },
  fromSDK(object: QueryGetProtoRevStatisticsByRouteResponseSDKType): QueryGetProtoRevStatisticsByRouteResponse {
    return {
      statistics: object.statistics ? RouteStatistics.fromSDK(object.statistics) : undefined
    };
  },
  fromSDKJSON(object: any): QueryGetProtoRevStatisticsByRouteResponseSDKType {
    return {
      statistics: isSet(object.statistics) ? RouteStatistics.fromSDKJSON(object.statistics) : undefined
    };
  },
  toSDK(message: QueryGetProtoRevStatisticsByRouteResponse): QueryGetProtoRevStatisticsByRouteResponseSDKType {
    const obj: any = {};
    message.statistics !== undefined && (obj.statistics = message.statistics ? RouteStatistics.toSDK(message.statistics) : undefined);
    return obj;
  },
  fromAmino(object: QueryGetProtoRevStatisticsByRouteResponseAmino): QueryGetProtoRevStatisticsByRouteResponse {
    const message = createBaseQueryGetProtoRevStatisticsByRouteResponse();
    if (object.statistics !== undefined && object.statistics !== null) {
      message.statistics = RouteStatistics.fromAmino(object.statistics);
    }
    return message;
  },
  toAmino(message: QueryGetProtoRevStatisticsByRouteResponse): QueryGetProtoRevStatisticsByRouteResponseAmino {
    const obj: any = {};
    obj.statistics = message.statistics ? RouteStatistics.toAmino(message.statistics) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevStatisticsByRouteResponseAminoMsg): QueryGetProtoRevStatisticsByRouteResponse {
    return QueryGetProtoRevStatisticsByRouteResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevStatisticsByRouteResponse): QueryGetProtoRevStatisticsByRouteResponseAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-statistics-by-route-response",
      value: QueryGetProtoRevStatisticsByRouteResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevStatisticsByRouteResponseProtoMsg): QueryGetProtoRevStatisticsByRouteResponse {
    return QueryGetProtoRevStatisticsByRouteResponse.decode(message.value);
  },
  toProto(message: QueryGetProtoRevStatisticsByRouteResponse): Uint8Array {
    return QueryGetProtoRevStatisticsByRouteResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevStatisticsByRouteResponse): QueryGetProtoRevStatisticsByRouteResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByRouteResponse",
      value: QueryGetProtoRevStatisticsByRouteResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetProtoRevAllRouteStatisticsRequest(): QueryGetProtoRevAllRouteStatisticsRequest {
  return {};
}
export const QueryGetProtoRevAllRouteStatisticsRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllRouteStatisticsRequest",
  encode(_: QueryGetProtoRevAllRouteStatisticsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevAllRouteStatisticsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevAllRouteStatisticsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryGetProtoRevAllRouteStatisticsRequest {
    return {};
  },
  toJSON(_: QueryGetProtoRevAllRouteStatisticsRequest): JsonSafe<QueryGetProtoRevAllRouteStatisticsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryGetProtoRevAllRouteStatisticsRequest>): QueryGetProtoRevAllRouteStatisticsRequest {
    const message = createBaseQueryGetProtoRevAllRouteStatisticsRequest();
    return message;
  },
  fromSDK(_: QueryGetProtoRevAllRouteStatisticsRequestSDKType): QueryGetProtoRevAllRouteStatisticsRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryGetProtoRevAllRouteStatisticsRequestSDKType {
    return {};
  },
  toSDK(_: QueryGetProtoRevAllRouteStatisticsRequest): QueryGetProtoRevAllRouteStatisticsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryGetProtoRevAllRouteStatisticsRequestAmino): QueryGetProtoRevAllRouteStatisticsRequest {
    const message = createBaseQueryGetProtoRevAllRouteStatisticsRequest();
    return message;
  },
  toAmino(_: QueryGetProtoRevAllRouteStatisticsRequest): QueryGetProtoRevAllRouteStatisticsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevAllRouteStatisticsRequestAminoMsg): QueryGetProtoRevAllRouteStatisticsRequest {
    return QueryGetProtoRevAllRouteStatisticsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevAllRouteStatisticsRequest): QueryGetProtoRevAllRouteStatisticsRequestAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-all-route-statistics-request",
      value: QueryGetProtoRevAllRouteStatisticsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevAllRouteStatisticsRequestProtoMsg): QueryGetProtoRevAllRouteStatisticsRequest {
    return QueryGetProtoRevAllRouteStatisticsRequest.decode(message.value);
  },
  toProto(message: QueryGetProtoRevAllRouteStatisticsRequest): Uint8Array {
    return QueryGetProtoRevAllRouteStatisticsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevAllRouteStatisticsRequest): QueryGetProtoRevAllRouteStatisticsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllRouteStatisticsRequest",
      value: QueryGetProtoRevAllRouteStatisticsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetProtoRevAllRouteStatisticsResponse(): QueryGetProtoRevAllRouteStatisticsResponse {
  return {
    statistics: []
  };
}
export const QueryGetProtoRevAllRouteStatisticsResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllRouteStatisticsResponse",
  encode(message: QueryGetProtoRevAllRouteStatisticsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.statistics) {
      RouteStatistics.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevAllRouteStatisticsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevAllRouteStatisticsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statistics.push(RouteStatistics.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevAllRouteStatisticsResponse {
    return {
      statistics: Array.isArray(object?.statistics) ? object.statistics.map((e: any) => RouteStatistics.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryGetProtoRevAllRouteStatisticsResponse): JsonSafe<QueryGetProtoRevAllRouteStatisticsResponse> {
    const obj: any = {};
    if (message.statistics) {
      obj.statistics = message.statistics.map(e => e ? RouteStatistics.toJSON(e) : undefined);
    } else {
      obj.statistics = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGetProtoRevAllRouteStatisticsResponse>): QueryGetProtoRevAllRouteStatisticsResponse {
    const message = createBaseQueryGetProtoRevAllRouteStatisticsResponse();
    message.statistics = object.statistics?.map(e => RouteStatistics.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryGetProtoRevAllRouteStatisticsResponseSDKType): QueryGetProtoRevAllRouteStatisticsResponse {
    return {
      statistics: Array.isArray(object?.statistics) ? object.statistics.map((e: any) => RouteStatistics.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): QueryGetProtoRevAllRouteStatisticsResponseSDKType {
    return {
      statistics: Array.isArray(object?.statistics) ? object.statistics.map((e: any) => RouteStatistics.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: QueryGetProtoRevAllRouteStatisticsResponse): QueryGetProtoRevAllRouteStatisticsResponseSDKType {
    const obj: any = {};
    if (message.statistics) {
      obj.statistics = message.statistics.map(e => e ? RouteStatistics.toSDK(e) : undefined);
    } else {
      obj.statistics = [];
    }
    return obj;
  },
  fromAmino(object: QueryGetProtoRevAllRouteStatisticsResponseAmino): QueryGetProtoRevAllRouteStatisticsResponse {
    const message = createBaseQueryGetProtoRevAllRouteStatisticsResponse();
    message.statistics = object.statistics?.map(e => RouteStatistics.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryGetProtoRevAllRouteStatisticsResponse): QueryGetProtoRevAllRouteStatisticsResponseAmino {
    const obj: any = {};
    if (message.statistics) {
      obj.statistics = message.statistics.map(e => e ? RouteStatistics.toAmino(e) : undefined);
    } else {
      obj.statistics = message.statistics;
    }
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevAllRouteStatisticsResponseAminoMsg): QueryGetProtoRevAllRouteStatisticsResponse {
    return QueryGetProtoRevAllRouteStatisticsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevAllRouteStatisticsResponse): QueryGetProtoRevAllRouteStatisticsResponseAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-all-route-statistics-response",
      value: QueryGetProtoRevAllRouteStatisticsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevAllRouteStatisticsResponseProtoMsg): QueryGetProtoRevAllRouteStatisticsResponse {
    return QueryGetProtoRevAllRouteStatisticsResponse.decode(message.value);
  },
  toProto(message: QueryGetProtoRevAllRouteStatisticsResponse): Uint8Array {
    return QueryGetProtoRevAllRouteStatisticsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevAllRouteStatisticsResponse): QueryGetProtoRevAllRouteStatisticsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllRouteStatisticsResponse",
      value: QueryGetProtoRevAllRouteStatisticsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetProtoRevTokenPairArbRoutesRequest(): QueryGetProtoRevTokenPairArbRoutesRequest {
  return {};
}
export const QueryGetProtoRevTokenPairArbRoutesRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesRequest",
  encode(_: QueryGetProtoRevTokenPairArbRoutesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevTokenPairArbRoutesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevTokenPairArbRoutesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryGetProtoRevTokenPairArbRoutesRequest {
    return {};
  },
  toJSON(_: QueryGetProtoRevTokenPairArbRoutesRequest): JsonSafe<QueryGetProtoRevTokenPairArbRoutesRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryGetProtoRevTokenPairArbRoutesRequest>): QueryGetProtoRevTokenPairArbRoutesRequest {
    const message = createBaseQueryGetProtoRevTokenPairArbRoutesRequest();
    return message;
  },
  fromSDK(_: QueryGetProtoRevTokenPairArbRoutesRequestSDKType): QueryGetProtoRevTokenPairArbRoutesRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryGetProtoRevTokenPairArbRoutesRequestSDKType {
    return {};
  },
  toSDK(_: QueryGetProtoRevTokenPairArbRoutesRequest): QueryGetProtoRevTokenPairArbRoutesRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryGetProtoRevTokenPairArbRoutesRequestAmino): QueryGetProtoRevTokenPairArbRoutesRequest {
    const message = createBaseQueryGetProtoRevTokenPairArbRoutesRequest();
    return message;
  },
  toAmino(_: QueryGetProtoRevTokenPairArbRoutesRequest): QueryGetProtoRevTokenPairArbRoutesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevTokenPairArbRoutesRequestAminoMsg): QueryGetProtoRevTokenPairArbRoutesRequest {
    return QueryGetProtoRevTokenPairArbRoutesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevTokenPairArbRoutesRequest): QueryGetProtoRevTokenPairArbRoutesRequestAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-token-pair-arb-routes-request",
      value: QueryGetProtoRevTokenPairArbRoutesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevTokenPairArbRoutesRequestProtoMsg): QueryGetProtoRevTokenPairArbRoutesRequest {
    return QueryGetProtoRevTokenPairArbRoutesRequest.decode(message.value);
  },
  toProto(message: QueryGetProtoRevTokenPairArbRoutesRequest): Uint8Array {
    return QueryGetProtoRevTokenPairArbRoutesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevTokenPairArbRoutesRequest): QueryGetProtoRevTokenPairArbRoutesRequestProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesRequest",
      value: QueryGetProtoRevTokenPairArbRoutesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetProtoRevTokenPairArbRoutesResponse(): QueryGetProtoRevTokenPairArbRoutesResponse {
  return {
    routes: []
  };
}
export const QueryGetProtoRevTokenPairArbRoutesResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesResponse",
  encode(message: QueryGetProtoRevTokenPairArbRoutesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.routes) {
      TokenPairArbRoutes.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevTokenPairArbRoutesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevTokenPairArbRoutesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.routes.push(TokenPairArbRoutes.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevTokenPairArbRoutesResponse {
    return {
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => TokenPairArbRoutes.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryGetProtoRevTokenPairArbRoutesResponse): JsonSafe<QueryGetProtoRevTokenPairArbRoutesResponse> {
    const obj: any = {};
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? TokenPairArbRoutes.toJSON(e) : undefined);
    } else {
      obj.routes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGetProtoRevTokenPairArbRoutesResponse>): QueryGetProtoRevTokenPairArbRoutesResponse {
    const message = createBaseQueryGetProtoRevTokenPairArbRoutesResponse();
    message.routes = object.routes?.map(e => TokenPairArbRoutes.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryGetProtoRevTokenPairArbRoutesResponseSDKType): QueryGetProtoRevTokenPairArbRoutesResponse {
    return {
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => TokenPairArbRoutes.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): QueryGetProtoRevTokenPairArbRoutesResponseSDKType {
    return {
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => TokenPairArbRoutes.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: QueryGetProtoRevTokenPairArbRoutesResponse): QueryGetProtoRevTokenPairArbRoutesResponseSDKType {
    const obj: any = {};
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? TokenPairArbRoutes.toSDK(e) : undefined);
    } else {
      obj.routes = [];
    }
    return obj;
  },
  fromAmino(object: QueryGetProtoRevTokenPairArbRoutesResponseAmino): QueryGetProtoRevTokenPairArbRoutesResponse {
    const message = createBaseQueryGetProtoRevTokenPairArbRoutesResponse();
    message.routes = object.routes?.map(e => TokenPairArbRoutes.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryGetProtoRevTokenPairArbRoutesResponse): QueryGetProtoRevTokenPairArbRoutesResponseAmino {
    const obj: any = {};
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? TokenPairArbRoutes.toAmino(e) : undefined);
    } else {
      obj.routes = message.routes;
    }
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevTokenPairArbRoutesResponseAminoMsg): QueryGetProtoRevTokenPairArbRoutesResponse {
    return QueryGetProtoRevTokenPairArbRoutesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevTokenPairArbRoutesResponse): QueryGetProtoRevTokenPairArbRoutesResponseAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-token-pair-arb-routes-response",
      value: QueryGetProtoRevTokenPairArbRoutesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevTokenPairArbRoutesResponseProtoMsg): QueryGetProtoRevTokenPairArbRoutesResponse {
    return QueryGetProtoRevTokenPairArbRoutesResponse.decode(message.value);
  },
  toProto(message: QueryGetProtoRevTokenPairArbRoutesResponse): Uint8Array {
    return QueryGetProtoRevTokenPairArbRoutesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevTokenPairArbRoutesResponse): QueryGetProtoRevTokenPairArbRoutesResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesResponse",
      value: QueryGetProtoRevTokenPairArbRoutesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetProtoRevAdminAccountRequest(): QueryGetProtoRevAdminAccountRequest {
  return {};
}
export const QueryGetProtoRevAdminAccountRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAdminAccountRequest",
  encode(_: QueryGetProtoRevAdminAccountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevAdminAccountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevAdminAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryGetProtoRevAdminAccountRequest {
    return {};
  },
  toJSON(_: QueryGetProtoRevAdminAccountRequest): JsonSafe<QueryGetProtoRevAdminAccountRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryGetProtoRevAdminAccountRequest>): QueryGetProtoRevAdminAccountRequest {
    const message = createBaseQueryGetProtoRevAdminAccountRequest();
    return message;
  },
  fromSDK(_: QueryGetProtoRevAdminAccountRequestSDKType): QueryGetProtoRevAdminAccountRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryGetProtoRevAdminAccountRequestSDKType {
    return {};
  },
  toSDK(_: QueryGetProtoRevAdminAccountRequest): QueryGetProtoRevAdminAccountRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryGetProtoRevAdminAccountRequestAmino): QueryGetProtoRevAdminAccountRequest {
    const message = createBaseQueryGetProtoRevAdminAccountRequest();
    return message;
  },
  toAmino(_: QueryGetProtoRevAdminAccountRequest): QueryGetProtoRevAdminAccountRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevAdminAccountRequestAminoMsg): QueryGetProtoRevAdminAccountRequest {
    return QueryGetProtoRevAdminAccountRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevAdminAccountRequest): QueryGetProtoRevAdminAccountRequestAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-admin-account-request",
      value: QueryGetProtoRevAdminAccountRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevAdminAccountRequestProtoMsg): QueryGetProtoRevAdminAccountRequest {
    return QueryGetProtoRevAdminAccountRequest.decode(message.value);
  },
  toProto(message: QueryGetProtoRevAdminAccountRequest): Uint8Array {
    return QueryGetProtoRevAdminAccountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevAdminAccountRequest): QueryGetProtoRevAdminAccountRequestProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAdminAccountRequest",
      value: QueryGetProtoRevAdminAccountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetProtoRevAdminAccountResponse(): QueryGetProtoRevAdminAccountResponse {
  return {
    adminAccount: ""
  };
}
export const QueryGetProtoRevAdminAccountResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAdminAccountResponse",
  encode(message: QueryGetProtoRevAdminAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.adminAccount !== "") {
      writer.uint32(10).string(message.adminAccount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevAdminAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevAdminAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.adminAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevAdminAccountResponse {
    return {
      adminAccount: isSet(object.adminAccount) ? String(object.adminAccount) : ""
    };
  },
  toJSON(message: QueryGetProtoRevAdminAccountResponse): JsonSafe<QueryGetProtoRevAdminAccountResponse> {
    const obj: any = {};
    message.adminAccount !== undefined && (obj.adminAccount = message.adminAccount);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGetProtoRevAdminAccountResponse>): QueryGetProtoRevAdminAccountResponse {
    const message = createBaseQueryGetProtoRevAdminAccountResponse();
    message.adminAccount = object.adminAccount ?? "";
    return message;
  },
  fromSDK(object: QueryGetProtoRevAdminAccountResponseSDKType): QueryGetProtoRevAdminAccountResponse {
    return {
      adminAccount: object?.admin_account
    };
  },
  fromSDKJSON(object: any): QueryGetProtoRevAdminAccountResponseSDKType {
    return {
      admin_account: isSet(object.admin_account) ? String(object.admin_account) : ""
    };
  },
  toSDK(message: QueryGetProtoRevAdminAccountResponse): QueryGetProtoRevAdminAccountResponseSDKType {
    const obj: any = {};
    obj.admin_account = message.adminAccount;
    return obj;
  },
  fromAmino(object: QueryGetProtoRevAdminAccountResponseAmino): QueryGetProtoRevAdminAccountResponse {
    const message = createBaseQueryGetProtoRevAdminAccountResponse();
    if (object.admin_account !== undefined && object.admin_account !== null) {
      message.adminAccount = object.admin_account;
    }
    return message;
  },
  toAmino(message: QueryGetProtoRevAdminAccountResponse): QueryGetProtoRevAdminAccountResponseAmino {
    const obj: any = {};
    obj.admin_account = message.adminAccount === "" ? undefined : message.adminAccount;
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevAdminAccountResponseAminoMsg): QueryGetProtoRevAdminAccountResponse {
    return QueryGetProtoRevAdminAccountResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevAdminAccountResponse): QueryGetProtoRevAdminAccountResponseAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-admin-account-response",
      value: QueryGetProtoRevAdminAccountResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevAdminAccountResponseProtoMsg): QueryGetProtoRevAdminAccountResponse {
    return QueryGetProtoRevAdminAccountResponse.decode(message.value);
  },
  toProto(message: QueryGetProtoRevAdminAccountResponse): Uint8Array {
    return QueryGetProtoRevAdminAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevAdminAccountResponse): QueryGetProtoRevAdminAccountResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAdminAccountResponse",
      value: QueryGetProtoRevAdminAccountResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetProtoRevDeveloperAccountRequest(): QueryGetProtoRevDeveloperAccountRequest {
  return {};
}
export const QueryGetProtoRevDeveloperAccountRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevDeveloperAccountRequest",
  encode(_: QueryGetProtoRevDeveloperAccountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevDeveloperAccountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevDeveloperAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryGetProtoRevDeveloperAccountRequest {
    return {};
  },
  toJSON(_: QueryGetProtoRevDeveloperAccountRequest): JsonSafe<QueryGetProtoRevDeveloperAccountRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryGetProtoRevDeveloperAccountRequest>): QueryGetProtoRevDeveloperAccountRequest {
    const message = createBaseQueryGetProtoRevDeveloperAccountRequest();
    return message;
  },
  fromSDK(_: QueryGetProtoRevDeveloperAccountRequestSDKType): QueryGetProtoRevDeveloperAccountRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryGetProtoRevDeveloperAccountRequestSDKType {
    return {};
  },
  toSDK(_: QueryGetProtoRevDeveloperAccountRequest): QueryGetProtoRevDeveloperAccountRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryGetProtoRevDeveloperAccountRequestAmino): QueryGetProtoRevDeveloperAccountRequest {
    const message = createBaseQueryGetProtoRevDeveloperAccountRequest();
    return message;
  },
  toAmino(_: QueryGetProtoRevDeveloperAccountRequest): QueryGetProtoRevDeveloperAccountRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevDeveloperAccountRequestAminoMsg): QueryGetProtoRevDeveloperAccountRequest {
    return QueryGetProtoRevDeveloperAccountRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevDeveloperAccountRequest): QueryGetProtoRevDeveloperAccountRequestAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-developer-account-request",
      value: QueryGetProtoRevDeveloperAccountRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevDeveloperAccountRequestProtoMsg): QueryGetProtoRevDeveloperAccountRequest {
    return QueryGetProtoRevDeveloperAccountRequest.decode(message.value);
  },
  toProto(message: QueryGetProtoRevDeveloperAccountRequest): Uint8Array {
    return QueryGetProtoRevDeveloperAccountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevDeveloperAccountRequest): QueryGetProtoRevDeveloperAccountRequestProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevDeveloperAccountRequest",
      value: QueryGetProtoRevDeveloperAccountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetProtoRevDeveloperAccountResponse(): QueryGetProtoRevDeveloperAccountResponse {
  return {
    developerAccount: ""
  };
}
export const QueryGetProtoRevDeveloperAccountResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevDeveloperAccountResponse",
  encode(message: QueryGetProtoRevDeveloperAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.developerAccount !== "") {
      writer.uint32(10).string(message.developerAccount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevDeveloperAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevDeveloperAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.developerAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevDeveloperAccountResponse {
    return {
      developerAccount: isSet(object.developerAccount) ? String(object.developerAccount) : ""
    };
  },
  toJSON(message: QueryGetProtoRevDeveloperAccountResponse): JsonSafe<QueryGetProtoRevDeveloperAccountResponse> {
    const obj: any = {};
    message.developerAccount !== undefined && (obj.developerAccount = message.developerAccount);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGetProtoRevDeveloperAccountResponse>): QueryGetProtoRevDeveloperAccountResponse {
    const message = createBaseQueryGetProtoRevDeveloperAccountResponse();
    message.developerAccount = object.developerAccount ?? "";
    return message;
  },
  fromSDK(object: QueryGetProtoRevDeveloperAccountResponseSDKType): QueryGetProtoRevDeveloperAccountResponse {
    return {
      developerAccount: object?.developer_account
    };
  },
  fromSDKJSON(object: any): QueryGetProtoRevDeveloperAccountResponseSDKType {
    return {
      developer_account: isSet(object.developer_account) ? String(object.developer_account) : ""
    };
  },
  toSDK(message: QueryGetProtoRevDeveloperAccountResponse): QueryGetProtoRevDeveloperAccountResponseSDKType {
    const obj: any = {};
    obj.developer_account = message.developerAccount;
    return obj;
  },
  fromAmino(object: QueryGetProtoRevDeveloperAccountResponseAmino): QueryGetProtoRevDeveloperAccountResponse {
    const message = createBaseQueryGetProtoRevDeveloperAccountResponse();
    if (object.developer_account !== undefined && object.developer_account !== null) {
      message.developerAccount = object.developer_account;
    }
    return message;
  },
  toAmino(message: QueryGetProtoRevDeveloperAccountResponse): QueryGetProtoRevDeveloperAccountResponseAmino {
    const obj: any = {};
    obj.developer_account = message.developerAccount === "" ? undefined : message.developerAccount;
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevDeveloperAccountResponseAminoMsg): QueryGetProtoRevDeveloperAccountResponse {
    return QueryGetProtoRevDeveloperAccountResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevDeveloperAccountResponse): QueryGetProtoRevDeveloperAccountResponseAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-developer-account-response",
      value: QueryGetProtoRevDeveloperAccountResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevDeveloperAccountResponseProtoMsg): QueryGetProtoRevDeveloperAccountResponse {
    return QueryGetProtoRevDeveloperAccountResponse.decode(message.value);
  },
  toProto(message: QueryGetProtoRevDeveloperAccountResponse): Uint8Array {
    return QueryGetProtoRevDeveloperAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevDeveloperAccountResponse): QueryGetProtoRevDeveloperAccountResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevDeveloperAccountResponse",
      value: QueryGetProtoRevDeveloperAccountResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetProtoRevPoolWeightsRequest(): QueryGetProtoRevPoolWeightsRequest {
  return {};
}
export const QueryGetProtoRevPoolWeightsRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevPoolWeightsRequest",
  encode(_: QueryGetProtoRevPoolWeightsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevPoolWeightsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevPoolWeightsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryGetProtoRevPoolWeightsRequest {
    return {};
  },
  toJSON(_: QueryGetProtoRevPoolWeightsRequest): JsonSafe<QueryGetProtoRevPoolWeightsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryGetProtoRevPoolWeightsRequest>): QueryGetProtoRevPoolWeightsRequest {
    const message = createBaseQueryGetProtoRevPoolWeightsRequest();
    return message;
  },
  fromSDK(_: QueryGetProtoRevPoolWeightsRequestSDKType): QueryGetProtoRevPoolWeightsRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryGetProtoRevPoolWeightsRequestSDKType {
    return {};
  },
  toSDK(_: QueryGetProtoRevPoolWeightsRequest): QueryGetProtoRevPoolWeightsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryGetProtoRevPoolWeightsRequestAmino): QueryGetProtoRevPoolWeightsRequest {
    const message = createBaseQueryGetProtoRevPoolWeightsRequest();
    return message;
  },
  toAmino(_: QueryGetProtoRevPoolWeightsRequest): QueryGetProtoRevPoolWeightsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevPoolWeightsRequestAminoMsg): QueryGetProtoRevPoolWeightsRequest {
    return QueryGetProtoRevPoolWeightsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevPoolWeightsRequest): QueryGetProtoRevPoolWeightsRequestAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-pool-weights-request",
      value: QueryGetProtoRevPoolWeightsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevPoolWeightsRequestProtoMsg): QueryGetProtoRevPoolWeightsRequest {
    return QueryGetProtoRevPoolWeightsRequest.decode(message.value);
  },
  toProto(message: QueryGetProtoRevPoolWeightsRequest): Uint8Array {
    return QueryGetProtoRevPoolWeightsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevPoolWeightsRequest): QueryGetProtoRevPoolWeightsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevPoolWeightsRequest",
      value: QueryGetProtoRevPoolWeightsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetProtoRevPoolWeightsResponse(): QueryGetProtoRevPoolWeightsResponse {
  return {
    poolWeights: PoolWeights.fromPartial({})
  };
}
export const QueryGetProtoRevPoolWeightsResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevPoolWeightsResponse",
  encode(message: QueryGetProtoRevPoolWeightsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolWeights !== undefined) {
      PoolWeights.encode(message.poolWeights, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevPoolWeightsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevPoolWeightsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolWeights = PoolWeights.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevPoolWeightsResponse {
    return {
      poolWeights: isSet(object.poolWeights) ? PoolWeights.fromJSON(object.poolWeights) : undefined
    };
  },
  toJSON(message: QueryGetProtoRevPoolWeightsResponse): JsonSafe<QueryGetProtoRevPoolWeightsResponse> {
    const obj: any = {};
    message.poolWeights !== undefined && (obj.poolWeights = message.poolWeights ? PoolWeights.toJSON(message.poolWeights) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGetProtoRevPoolWeightsResponse>): QueryGetProtoRevPoolWeightsResponse {
    const message = createBaseQueryGetProtoRevPoolWeightsResponse();
    message.poolWeights = object.poolWeights !== undefined && object.poolWeights !== null ? PoolWeights.fromPartial(object.poolWeights) : undefined;
    return message;
  },
  fromSDK(object: QueryGetProtoRevPoolWeightsResponseSDKType): QueryGetProtoRevPoolWeightsResponse {
    return {
      poolWeights: object.pool_weights ? PoolWeights.fromSDK(object.pool_weights) : undefined
    };
  },
  fromSDKJSON(object: any): QueryGetProtoRevPoolWeightsResponseSDKType {
    return {
      pool_weights: isSet(object.pool_weights) ? PoolWeights.fromSDKJSON(object.pool_weights) : undefined
    };
  },
  toSDK(message: QueryGetProtoRevPoolWeightsResponse): QueryGetProtoRevPoolWeightsResponseSDKType {
    const obj: any = {};
    message.poolWeights !== undefined && (obj.pool_weights = message.poolWeights ? PoolWeights.toSDK(message.poolWeights) : undefined);
    return obj;
  },
  fromAmino(object: QueryGetProtoRevPoolWeightsResponseAmino): QueryGetProtoRevPoolWeightsResponse {
    const message = createBaseQueryGetProtoRevPoolWeightsResponse();
    if (object.pool_weights !== undefined && object.pool_weights !== null) {
      message.poolWeights = PoolWeights.fromAmino(object.pool_weights);
    }
    return message;
  },
  toAmino(message: QueryGetProtoRevPoolWeightsResponse): QueryGetProtoRevPoolWeightsResponseAmino {
    const obj: any = {};
    obj.pool_weights = message.poolWeights ? PoolWeights.toAmino(message.poolWeights) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevPoolWeightsResponseAminoMsg): QueryGetProtoRevPoolWeightsResponse {
    return QueryGetProtoRevPoolWeightsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevPoolWeightsResponse): QueryGetProtoRevPoolWeightsResponseAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-pool-weights-response",
      value: QueryGetProtoRevPoolWeightsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevPoolWeightsResponseProtoMsg): QueryGetProtoRevPoolWeightsResponse {
    return QueryGetProtoRevPoolWeightsResponse.decode(message.value);
  },
  toProto(message: QueryGetProtoRevPoolWeightsResponse): Uint8Array {
    return QueryGetProtoRevPoolWeightsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevPoolWeightsResponse): QueryGetProtoRevPoolWeightsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevPoolWeightsResponse",
      value: QueryGetProtoRevPoolWeightsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetProtoRevMaxPoolPointsPerBlockRequest(): QueryGetProtoRevMaxPoolPointsPerBlockRequest {
  return {};
}
export const QueryGetProtoRevMaxPoolPointsPerBlockRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerBlockRequest",
  encode(_: QueryGetProtoRevMaxPoolPointsPerBlockRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevMaxPoolPointsPerBlockRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerBlockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryGetProtoRevMaxPoolPointsPerBlockRequest {
    return {};
  },
  toJSON(_: QueryGetProtoRevMaxPoolPointsPerBlockRequest): JsonSafe<QueryGetProtoRevMaxPoolPointsPerBlockRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryGetProtoRevMaxPoolPointsPerBlockRequest>): QueryGetProtoRevMaxPoolPointsPerBlockRequest {
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerBlockRequest();
    return message;
  },
  fromSDK(_: QueryGetProtoRevMaxPoolPointsPerBlockRequestSDKType): QueryGetProtoRevMaxPoolPointsPerBlockRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryGetProtoRevMaxPoolPointsPerBlockRequestSDKType {
    return {};
  },
  toSDK(_: QueryGetProtoRevMaxPoolPointsPerBlockRequest): QueryGetProtoRevMaxPoolPointsPerBlockRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryGetProtoRevMaxPoolPointsPerBlockRequestAmino): QueryGetProtoRevMaxPoolPointsPerBlockRequest {
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerBlockRequest();
    return message;
  },
  toAmino(_: QueryGetProtoRevMaxPoolPointsPerBlockRequest): QueryGetProtoRevMaxPoolPointsPerBlockRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevMaxPoolPointsPerBlockRequestAminoMsg): QueryGetProtoRevMaxPoolPointsPerBlockRequest {
    return QueryGetProtoRevMaxPoolPointsPerBlockRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevMaxPoolPointsPerBlockRequest): QueryGetProtoRevMaxPoolPointsPerBlockRequestAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-max-pool-points-per-block-request",
      value: QueryGetProtoRevMaxPoolPointsPerBlockRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevMaxPoolPointsPerBlockRequestProtoMsg): QueryGetProtoRevMaxPoolPointsPerBlockRequest {
    return QueryGetProtoRevMaxPoolPointsPerBlockRequest.decode(message.value);
  },
  toProto(message: QueryGetProtoRevMaxPoolPointsPerBlockRequest): Uint8Array {
    return QueryGetProtoRevMaxPoolPointsPerBlockRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevMaxPoolPointsPerBlockRequest): QueryGetProtoRevMaxPoolPointsPerBlockRequestProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerBlockRequest",
      value: QueryGetProtoRevMaxPoolPointsPerBlockRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetProtoRevMaxPoolPointsPerBlockResponse(): QueryGetProtoRevMaxPoolPointsPerBlockResponse {
  return {
    maxPoolPointsPerBlock: BigInt(0)
  };
}
export const QueryGetProtoRevMaxPoolPointsPerBlockResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerBlockResponse",
  encode(message: QueryGetProtoRevMaxPoolPointsPerBlockResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxPoolPointsPerBlock !== BigInt(0)) {
      writer.uint32(8).uint64(message.maxPoolPointsPerBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevMaxPoolPointsPerBlockResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxPoolPointsPerBlock = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevMaxPoolPointsPerBlockResponse {
    return {
      maxPoolPointsPerBlock: isSet(object.maxPoolPointsPerBlock) ? BigInt(object.maxPoolPointsPerBlock.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryGetProtoRevMaxPoolPointsPerBlockResponse): JsonSafe<QueryGetProtoRevMaxPoolPointsPerBlockResponse> {
    const obj: any = {};
    message.maxPoolPointsPerBlock !== undefined && (obj.maxPoolPointsPerBlock = (message.maxPoolPointsPerBlock || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGetProtoRevMaxPoolPointsPerBlockResponse>): QueryGetProtoRevMaxPoolPointsPerBlockResponse {
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerBlockResponse();
    message.maxPoolPointsPerBlock = object.maxPoolPointsPerBlock !== undefined && object.maxPoolPointsPerBlock !== null ? BigInt(object.maxPoolPointsPerBlock.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryGetProtoRevMaxPoolPointsPerBlockResponseSDKType): QueryGetProtoRevMaxPoolPointsPerBlockResponse {
    return {
      maxPoolPointsPerBlock: object?.max_pool_points_per_block
    };
  },
  fromSDKJSON(object: any): QueryGetProtoRevMaxPoolPointsPerBlockResponseSDKType {
    return {
      max_pool_points_per_block: isSet(object.max_pool_points_per_block) ? BigInt(object.max_pool_points_per_block.toString()) : BigInt(0)
    };
  },
  toSDK(message: QueryGetProtoRevMaxPoolPointsPerBlockResponse): QueryGetProtoRevMaxPoolPointsPerBlockResponseSDKType {
    const obj: any = {};
    obj.max_pool_points_per_block = message.maxPoolPointsPerBlock;
    return obj;
  },
  fromAmino(object: QueryGetProtoRevMaxPoolPointsPerBlockResponseAmino): QueryGetProtoRevMaxPoolPointsPerBlockResponse {
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerBlockResponse();
    if (object.max_pool_points_per_block !== undefined && object.max_pool_points_per_block !== null) {
      message.maxPoolPointsPerBlock = BigInt(object.max_pool_points_per_block);
    }
    return message;
  },
  toAmino(message: QueryGetProtoRevMaxPoolPointsPerBlockResponse): QueryGetProtoRevMaxPoolPointsPerBlockResponseAmino {
    const obj: any = {};
    obj.max_pool_points_per_block = message.maxPoolPointsPerBlock !== BigInt(0) ? message.maxPoolPointsPerBlock?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevMaxPoolPointsPerBlockResponseAminoMsg): QueryGetProtoRevMaxPoolPointsPerBlockResponse {
    return QueryGetProtoRevMaxPoolPointsPerBlockResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevMaxPoolPointsPerBlockResponse): QueryGetProtoRevMaxPoolPointsPerBlockResponseAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-max-pool-points-per-block-response",
      value: QueryGetProtoRevMaxPoolPointsPerBlockResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevMaxPoolPointsPerBlockResponseProtoMsg): QueryGetProtoRevMaxPoolPointsPerBlockResponse {
    return QueryGetProtoRevMaxPoolPointsPerBlockResponse.decode(message.value);
  },
  toProto(message: QueryGetProtoRevMaxPoolPointsPerBlockResponse): Uint8Array {
    return QueryGetProtoRevMaxPoolPointsPerBlockResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevMaxPoolPointsPerBlockResponse): QueryGetProtoRevMaxPoolPointsPerBlockResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerBlockResponse",
      value: QueryGetProtoRevMaxPoolPointsPerBlockResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetProtoRevMaxPoolPointsPerTxRequest(): QueryGetProtoRevMaxPoolPointsPerTxRequest {
  return {};
}
export const QueryGetProtoRevMaxPoolPointsPerTxRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerTxRequest",
  encode(_: QueryGetProtoRevMaxPoolPointsPerTxRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevMaxPoolPointsPerTxRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerTxRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryGetProtoRevMaxPoolPointsPerTxRequest {
    return {};
  },
  toJSON(_: QueryGetProtoRevMaxPoolPointsPerTxRequest): JsonSafe<QueryGetProtoRevMaxPoolPointsPerTxRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryGetProtoRevMaxPoolPointsPerTxRequest>): QueryGetProtoRevMaxPoolPointsPerTxRequest {
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerTxRequest();
    return message;
  },
  fromSDK(_: QueryGetProtoRevMaxPoolPointsPerTxRequestSDKType): QueryGetProtoRevMaxPoolPointsPerTxRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryGetProtoRevMaxPoolPointsPerTxRequestSDKType {
    return {};
  },
  toSDK(_: QueryGetProtoRevMaxPoolPointsPerTxRequest): QueryGetProtoRevMaxPoolPointsPerTxRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryGetProtoRevMaxPoolPointsPerTxRequestAmino): QueryGetProtoRevMaxPoolPointsPerTxRequest {
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerTxRequest();
    return message;
  },
  toAmino(_: QueryGetProtoRevMaxPoolPointsPerTxRequest): QueryGetProtoRevMaxPoolPointsPerTxRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevMaxPoolPointsPerTxRequestAminoMsg): QueryGetProtoRevMaxPoolPointsPerTxRequest {
    return QueryGetProtoRevMaxPoolPointsPerTxRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevMaxPoolPointsPerTxRequest): QueryGetProtoRevMaxPoolPointsPerTxRequestAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-max-pool-points-per-tx-request",
      value: QueryGetProtoRevMaxPoolPointsPerTxRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevMaxPoolPointsPerTxRequestProtoMsg): QueryGetProtoRevMaxPoolPointsPerTxRequest {
    return QueryGetProtoRevMaxPoolPointsPerTxRequest.decode(message.value);
  },
  toProto(message: QueryGetProtoRevMaxPoolPointsPerTxRequest): Uint8Array {
    return QueryGetProtoRevMaxPoolPointsPerTxRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevMaxPoolPointsPerTxRequest): QueryGetProtoRevMaxPoolPointsPerTxRequestProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerTxRequest",
      value: QueryGetProtoRevMaxPoolPointsPerTxRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetProtoRevMaxPoolPointsPerTxResponse(): QueryGetProtoRevMaxPoolPointsPerTxResponse {
  return {
    maxPoolPointsPerTx: BigInt(0)
  };
}
export const QueryGetProtoRevMaxPoolPointsPerTxResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerTxResponse",
  encode(message: QueryGetProtoRevMaxPoolPointsPerTxResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxPoolPointsPerTx !== BigInt(0)) {
      writer.uint32(8).uint64(message.maxPoolPointsPerTx);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevMaxPoolPointsPerTxResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxPoolPointsPerTx = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevMaxPoolPointsPerTxResponse {
    return {
      maxPoolPointsPerTx: isSet(object.maxPoolPointsPerTx) ? BigInt(object.maxPoolPointsPerTx.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryGetProtoRevMaxPoolPointsPerTxResponse): JsonSafe<QueryGetProtoRevMaxPoolPointsPerTxResponse> {
    const obj: any = {};
    message.maxPoolPointsPerTx !== undefined && (obj.maxPoolPointsPerTx = (message.maxPoolPointsPerTx || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGetProtoRevMaxPoolPointsPerTxResponse>): QueryGetProtoRevMaxPoolPointsPerTxResponse {
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerTxResponse();
    message.maxPoolPointsPerTx = object.maxPoolPointsPerTx !== undefined && object.maxPoolPointsPerTx !== null ? BigInt(object.maxPoolPointsPerTx.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryGetProtoRevMaxPoolPointsPerTxResponseSDKType): QueryGetProtoRevMaxPoolPointsPerTxResponse {
    return {
      maxPoolPointsPerTx: object?.max_pool_points_per_tx
    };
  },
  fromSDKJSON(object: any): QueryGetProtoRevMaxPoolPointsPerTxResponseSDKType {
    return {
      max_pool_points_per_tx: isSet(object.max_pool_points_per_tx) ? BigInt(object.max_pool_points_per_tx.toString()) : BigInt(0)
    };
  },
  toSDK(message: QueryGetProtoRevMaxPoolPointsPerTxResponse): QueryGetProtoRevMaxPoolPointsPerTxResponseSDKType {
    const obj: any = {};
    obj.max_pool_points_per_tx = message.maxPoolPointsPerTx;
    return obj;
  },
  fromAmino(object: QueryGetProtoRevMaxPoolPointsPerTxResponseAmino): QueryGetProtoRevMaxPoolPointsPerTxResponse {
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerTxResponse();
    if (object.max_pool_points_per_tx !== undefined && object.max_pool_points_per_tx !== null) {
      message.maxPoolPointsPerTx = BigInt(object.max_pool_points_per_tx);
    }
    return message;
  },
  toAmino(message: QueryGetProtoRevMaxPoolPointsPerTxResponse): QueryGetProtoRevMaxPoolPointsPerTxResponseAmino {
    const obj: any = {};
    obj.max_pool_points_per_tx = message.maxPoolPointsPerTx !== BigInt(0) ? message.maxPoolPointsPerTx?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevMaxPoolPointsPerTxResponseAminoMsg): QueryGetProtoRevMaxPoolPointsPerTxResponse {
    return QueryGetProtoRevMaxPoolPointsPerTxResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevMaxPoolPointsPerTxResponse): QueryGetProtoRevMaxPoolPointsPerTxResponseAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-max-pool-points-per-tx-response",
      value: QueryGetProtoRevMaxPoolPointsPerTxResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevMaxPoolPointsPerTxResponseProtoMsg): QueryGetProtoRevMaxPoolPointsPerTxResponse {
    return QueryGetProtoRevMaxPoolPointsPerTxResponse.decode(message.value);
  },
  toProto(message: QueryGetProtoRevMaxPoolPointsPerTxResponse): Uint8Array {
    return QueryGetProtoRevMaxPoolPointsPerTxResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevMaxPoolPointsPerTxResponse): QueryGetProtoRevMaxPoolPointsPerTxResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerTxResponse",
      value: QueryGetProtoRevMaxPoolPointsPerTxResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetProtoRevBaseDenomsRequest(): QueryGetProtoRevBaseDenomsRequest {
  return {};
}
export const QueryGetProtoRevBaseDenomsRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevBaseDenomsRequest",
  encode(_: QueryGetProtoRevBaseDenomsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevBaseDenomsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevBaseDenomsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryGetProtoRevBaseDenomsRequest {
    return {};
  },
  toJSON(_: QueryGetProtoRevBaseDenomsRequest): JsonSafe<QueryGetProtoRevBaseDenomsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryGetProtoRevBaseDenomsRequest>): QueryGetProtoRevBaseDenomsRequest {
    const message = createBaseQueryGetProtoRevBaseDenomsRequest();
    return message;
  },
  fromSDK(_: QueryGetProtoRevBaseDenomsRequestSDKType): QueryGetProtoRevBaseDenomsRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryGetProtoRevBaseDenomsRequestSDKType {
    return {};
  },
  toSDK(_: QueryGetProtoRevBaseDenomsRequest): QueryGetProtoRevBaseDenomsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryGetProtoRevBaseDenomsRequestAmino): QueryGetProtoRevBaseDenomsRequest {
    const message = createBaseQueryGetProtoRevBaseDenomsRequest();
    return message;
  },
  toAmino(_: QueryGetProtoRevBaseDenomsRequest): QueryGetProtoRevBaseDenomsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevBaseDenomsRequestAminoMsg): QueryGetProtoRevBaseDenomsRequest {
    return QueryGetProtoRevBaseDenomsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevBaseDenomsRequest): QueryGetProtoRevBaseDenomsRequestAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-base-denoms-request",
      value: QueryGetProtoRevBaseDenomsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevBaseDenomsRequestProtoMsg): QueryGetProtoRevBaseDenomsRequest {
    return QueryGetProtoRevBaseDenomsRequest.decode(message.value);
  },
  toProto(message: QueryGetProtoRevBaseDenomsRequest): Uint8Array {
    return QueryGetProtoRevBaseDenomsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevBaseDenomsRequest): QueryGetProtoRevBaseDenomsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevBaseDenomsRequest",
      value: QueryGetProtoRevBaseDenomsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetProtoRevBaseDenomsResponse(): QueryGetProtoRevBaseDenomsResponse {
  return {
    baseDenoms: []
  };
}
export const QueryGetProtoRevBaseDenomsResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevBaseDenomsResponse",
  encode(message: QueryGetProtoRevBaseDenomsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.baseDenoms) {
      BaseDenom.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevBaseDenomsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevBaseDenomsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseDenoms.push(BaseDenom.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevBaseDenomsResponse {
    return {
      baseDenoms: Array.isArray(object?.baseDenoms) ? object.baseDenoms.map((e: any) => BaseDenom.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryGetProtoRevBaseDenomsResponse): JsonSafe<QueryGetProtoRevBaseDenomsResponse> {
    const obj: any = {};
    if (message.baseDenoms) {
      obj.baseDenoms = message.baseDenoms.map(e => e ? BaseDenom.toJSON(e) : undefined);
    } else {
      obj.baseDenoms = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGetProtoRevBaseDenomsResponse>): QueryGetProtoRevBaseDenomsResponse {
    const message = createBaseQueryGetProtoRevBaseDenomsResponse();
    message.baseDenoms = object.baseDenoms?.map(e => BaseDenom.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryGetProtoRevBaseDenomsResponseSDKType): QueryGetProtoRevBaseDenomsResponse {
    return {
      baseDenoms: Array.isArray(object?.base_denoms) ? object.base_denoms.map((e: any) => BaseDenom.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): QueryGetProtoRevBaseDenomsResponseSDKType {
    return {
      base_denoms: Array.isArray(object?.base_denoms) ? object.base_denoms.map((e: any) => BaseDenom.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: QueryGetProtoRevBaseDenomsResponse): QueryGetProtoRevBaseDenomsResponseSDKType {
    const obj: any = {};
    if (message.baseDenoms) {
      obj.base_denoms = message.baseDenoms.map(e => e ? BaseDenom.toSDK(e) : undefined);
    } else {
      obj.base_denoms = [];
    }
    return obj;
  },
  fromAmino(object: QueryGetProtoRevBaseDenomsResponseAmino): QueryGetProtoRevBaseDenomsResponse {
    const message = createBaseQueryGetProtoRevBaseDenomsResponse();
    message.baseDenoms = object.base_denoms?.map(e => BaseDenom.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryGetProtoRevBaseDenomsResponse): QueryGetProtoRevBaseDenomsResponseAmino {
    const obj: any = {};
    if (message.baseDenoms) {
      obj.base_denoms = message.baseDenoms.map(e => e ? BaseDenom.toAmino(e) : undefined);
    } else {
      obj.base_denoms = message.baseDenoms;
    }
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevBaseDenomsResponseAminoMsg): QueryGetProtoRevBaseDenomsResponse {
    return QueryGetProtoRevBaseDenomsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevBaseDenomsResponse): QueryGetProtoRevBaseDenomsResponseAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-base-denoms-response",
      value: QueryGetProtoRevBaseDenomsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevBaseDenomsResponseProtoMsg): QueryGetProtoRevBaseDenomsResponse {
    return QueryGetProtoRevBaseDenomsResponse.decode(message.value);
  },
  toProto(message: QueryGetProtoRevBaseDenomsResponse): Uint8Array {
    return QueryGetProtoRevBaseDenomsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevBaseDenomsResponse): QueryGetProtoRevBaseDenomsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevBaseDenomsResponse",
      value: QueryGetProtoRevBaseDenomsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetProtoRevEnabledRequest(): QueryGetProtoRevEnabledRequest {
  return {};
}
export const QueryGetProtoRevEnabledRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevEnabledRequest",
  encode(_: QueryGetProtoRevEnabledRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevEnabledRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevEnabledRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryGetProtoRevEnabledRequest {
    return {};
  },
  toJSON(_: QueryGetProtoRevEnabledRequest): JsonSafe<QueryGetProtoRevEnabledRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryGetProtoRevEnabledRequest>): QueryGetProtoRevEnabledRequest {
    const message = createBaseQueryGetProtoRevEnabledRequest();
    return message;
  },
  fromSDK(_: QueryGetProtoRevEnabledRequestSDKType): QueryGetProtoRevEnabledRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryGetProtoRevEnabledRequestSDKType {
    return {};
  },
  toSDK(_: QueryGetProtoRevEnabledRequest): QueryGetProtoRevEnabledRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryGetProtoRevEnabledRequestAmino): QueryGetProtoRevEnabledRequest {
    const message = createBaseQueryGetProtoRevEnabledRequest();
    return message;
  },
  toAmino(_: QueryGetProtoRevEnabledRequest): QueryGetProtoRevEnabledRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevEnabledRequestAminoMsg): QueryGetProtoRevEnabledRequest {
    return QueryGetProtoRevEnabledRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevEnabledRequest): QueryGetProtoRevEnabledRequestAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-enabled-request",
      value: QueryGetProtoRevEnabledRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevEnabledRequestProtoMsg): QueryGetProtoRevEnabledRequest {
    return QueryGetProtoRevEnabledRequest.decode(message.value);
  },
  toProto(message: QueryGetProtoRevEnabledRequest): Uint8Array {
    return QueryGetProtoRevEnabledRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevEnabledRequest): QueryGetProtoRevEnabledRequestProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevEnabledRequest",
      value: QueryGetProtoRevEnabledRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetProtoRevEnabledResponse(): QueryGetProtoRevEnabledResponse {
  return {
    enabled: false
  };
}
export const QueryGetProtoRevEnabledResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevEnabledResponse",
  encode(message: QueryGetProtoRevEnabledResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevEnabledResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevEnabledResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevEnabledResponse {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false
    };
  },
  toJSON(message: QueryGetProtoRevEnabledResponse): JsonSafe<QueryGetProtoRevEnabledResponse> {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGetProtoRevEnabledResponse>): QueryGetProtoRevEnabledResponse {
    const message = createBaseQueryGetProtoRevEnabledResponse();
    message.enabled = object.enabled ?? false;
    return message;
  },
  fromSDK(object: QueryGetProtoRevEnabledResponseSDKType): QueryGetProtoRevEnabledResponse {
    return {
      enabled: object?.enabled
    };
  },
  fromSDKJSON(object: any): QueryGetProtoRevEnabledResponseSDKType {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false
    };
  },
  toSDK(message: QueryGetProtoRevEnabledResponse): QueryGetProtoRevEnabledResponseSDKType {
    const obj: any = {};
    obj.enabled = message.enabled;
    return obj;
  },
  fromAmino(object: QueryGetProtoRevEnabledResponseAmino): QueryGetProtoRevEnabledResponse {
    const message = createBaseQueryGetProtoRevEnabledResponse();
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    }
    return message;
  },
  toAmino(message: QueryGetProtoRevEnabledResponse): QueryGetProtoRevEnabledResponseAmino {
    const obj: any = {};
    obj.enabled = message.enabled === false ? undefined : message.enabled;
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevEnabledResponseAminoMsg): QueryGetProtoRevEnabledResponse {
    return QueryGetProtoRevEnabledResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevEnabledResponse): QueryGetProtoRevEnabledResponseAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-enabled-response",
      value: QueryGetProtoRevEnabledResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevEnabledResponseProtoMsg): QueryGetProtoRevEnabledResponse {
    return QueryGetProtoRevEnabledResponse.decode(message.value);
  },
  toProto(message: QueryGetProtoRevEnabledResponse): Uint8Array {
    return QueryGetProtoRevEnabledResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevEnabledResponse): QueryGetProtoRevEnabledResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevEnabledResponse",
      value: QueryGetProtoRevEnabledResponse.encode(message).finish()
    };
  }
};