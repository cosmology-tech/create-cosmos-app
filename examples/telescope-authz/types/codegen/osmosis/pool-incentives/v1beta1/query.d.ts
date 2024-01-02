import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { DistrInfo, DistrInfoAmino, DistrInfoSDKType, Params, ParamsAmino, ParamsSDKType } from "./incentives";
import { Gauge, GaugeAmino, GaugeSDKType } from "../../incentives/gauge";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
export interface QueryGaugeIdsRequest {
    poolId: bigint;
}
export interface QueryGaugeIdsRequestProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryGaugeIdsRequest";
    value: Uint8Array;
}
export interface QueryGaugeIdsRequestAmino {
    pool_id?: string;
}
export interface QueryGaugeIdsRequestAminoMsg {
    type: "osmosis/poolincentives/query-gauge-ids-request";
    value: QueryGaugeIdsRequestAmino;
}
export interface QueryGaugeIdsRequestSDKType {
    pool_id: bigint;
}
export interface QueryGaugeIdsResponse {
    gaugeIdsWithDuration: QueryGaugeIdsResponse_GaugeIdWithDuration[];
}
export interface QueryGaugeIdsResponseProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse";
    value: Uint8Array;
}
export interface QueryGaugeIdsResponseAmino {
    gauge_ids_with_duration?: QueryGaugeIdsResponse_GaugeIdWithDurationAmino[];
}
export interface QueryGaugeIdsResponseAminoMsg {
    type: "osmosis/poolincentives/query-gauge-ids-response";
    value: QueryGaugeIdsResponseAmino;
}
export interface QueryGaugeIdsResponseSDKType {
    gauge_ids_with_duration: QueryGaugeIdsResponse_GaugeIdWithDurationSDKType[];
}
export interface QueryGaugeIdsResponse_GaugeIdWithDuration {
    gaugeId: bigint;
    duration: Duration | undefined;
    gaugeIncentivePercentage: string;
}
export interface QueryGaugeIdsResponse_GaugeIdWithDurationProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.GaugeIdWithDuration";
    value: Uint8Array;
}
export interface QueryGaugeIdsResponse_GaugeIdWithDurationAmino {
    gauge_id?: string;
    duration?: DurationAmino | undefined;
    gauge_incentive_percentage?: string;
}
export interface QueryGaugeIdsResponse_GaugeIdWithDurationAminoMsg {
    type: "osmosis/poolincentives/gauge-id-with-duration";
    value: QueryGaugeIdsResponse_GaugeIdWithDurationAmino;
}
export interface QueryGaugeIdsResponse_GaugeIdWithDurationSDKType {
    gauge_id: bigint;
    duration: DurationSDKType | undefined;
    gauge_incentive_percentage: string;
}
export interface QueryDistrInfoRequest {
}
export interface QueryDistrInfoRequestProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryDistrInfoRequest";
    value: Uint8Array;
}
export interface QueryDistrInfoRequestAmino {
}
export interface QueryDistrInfoRequestAminoMsg {
    type: "osmosis/poolincentives/query-distr-info-request";
    value: QueryDistrInfoRequestAmino;
}
export interface QueryDistrInfoRequestSDKType {
}
export interface QueryDistrInfoResponse {
    distrInfo: DistrInfo | undefined;
}
export interface QueryDistrInfoResponseProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryDistrInfoResponse";
    value: Uint8Array;
}
export interface QueryDistrInfoResponseAmino {
    distr_info?: DistrInfoAmino | undefined;
}
export interface QueryDistrInfoResponseAminoMsg {
    type: "osmosis/poolincentives/query-distr-info-response";
    value: QueryDistrInfoResponseAmino;
}
export interface QueryDistrInfoResponseSDKType {
    distr_info: DistrInfoSDKType | undefined;
}
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "osmosis/poolincentives/query-params-request";
    value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    params: Params | undefined;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseAmino {
    params?: ParamsAmino | undefined;
}
export interface QueryParamsResponseAminoMsg {
    type: "osmosis/poolincentives/query-params-response";
    value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType | undefined;
}
export interface QueryLockableDurationsRequest {
}
export interface QueryLockableDurationsRequestProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryLockableDurationsRequest";
    value: Uint8Array;
}
export interface QueryLockableDurationsRequestAmino {
}
export interface QueryLockableDurationsRequestAminoMsg {
    type: "osmosis/poolincentives/query-lockable-durations-request";
    value: QueryLockableDurationsRequestAmino;
}
export interface QueryLockableDurationsRequestSDKType {
}
export interface QueryLockableDurationsResponse {
    lockableDurations: Duration[];
}
export interface QueryLockableDurationsResponseProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryLockableDurationsResponse";
    value: Uint8Array;
}
export interface QueryLockableDurationsResponseAmino {
    lockable_durations?: DurationAmino[];
}
export interface QueryLockableDurationsResponseAminoMsg {
    type: "osmosis/poolincentives/query-lockable-durations-response";
    value: QueryLockableDurationsResponseAmino;
}
export interface QueryLockableDurationsResponseSDKType {
    lockable_durations: DurationSDKType[];
}
export interface QueryIncentivizedPoolsRequest {
}
export interface QueryIncentivizedPoolsRequestProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsRequest";
    value: Uint8Array;
}
export interface QueryIncentivizedPoolsRequestAmino {
}
export interface QueryIncentivizedPoolsRequestAminoMsg {
    type: "osmosis/poolincentives/query-incentivized-pools-request";
    value: QueryIncentivizedPoolsRequestAmino;
}
export interface QueryIncentivizedPoolsRequestSDKType {
}
export interface IncentivizedPool {
    poolId: bigint;
    lockableDuration: Duration | undefined;
    gaugeId: bigint;
}
export interface IncentivizedPoolProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.IncentivizedPool";
    value: Uint8Array;
}
export interface IncentivizedPoolAmino {
    pool_id?: string;
    lockable_duration?: DurationAmino | undefined;
    gauge_id?: string;
}
export interface IncentivizedPoolAminoMsg {
    type: "osmosis/poolincentives/incentivized-pool";
    value: IncentivizedPoolAmino;
}
export interface IncentivizedPoolSDKType {
    pool_id: bigint;
    lockable_duration: DurationSDKType | undefined;
    gauge_id: bigint;
}
export interface QueryIncentivizedPoolsResponse {
    incentivizedPools: IncentivizedPool[];
}
export interface QueryIncentivizedPoolsResponseProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsResponse";
    value: Uint8Array;
}
export interface QueryIncentivizedPoolsResponseAmino {
    incentivized_pools?: IncentivizedPoolAmino[];
}
export interface QueryIncentivizedPoolsResponseAminoMsg {
    type: "osmosis/poolincentives/query-incentivized-pools-response";
    value: QueryIncentivizedPoolsResponseAmino;
}
export interface QueryIncentivizedPoolsResponseSDKType {
    incentivized_pools: IncentivizedPoolSDKType[];
}
export interface QueryExternalIncentiveGaugesRequest {
}
export interface QueryExternalIncentiveGaugesRequestProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesRequest";
    value: Uint8Array;
}
export interface QueryExternalIncentiveGaugesRequestAmino {
}
export interface QueryExternalIncentiveGaugesRequestAminoMsg {
    type: "osmosis/poolincentives/query-external-incentive-gauges-request";
    value: QueryExternalIncentiveGaugesRequestAmino;
}
export interface QueryExternalIncentiveGaugesRequestSDKType {
}
export interface QueryExternalIncentiveGaugesResponse {
    data: Gauge[];
}
export interface QueryExternalIncentiveGaugesResponseProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesResponse";
    value: Uint8Array;
}
export interface QueryExternalIncentiveGaugesResponseAmino {
    data?: GaugeAmino[];
}
export interface QueryExternalIncentiveGaugesResponseAminoMsg {
    type: "osmosis/poolincentives/query-external-incentive-gauges-response";
    value: QueryExternalIncentiveGaugesResponseAmino;
}
export interface QueryExternalIncentiveGaugesResponseSDKType {
    data: GaugeSDKType[];
}
export declare const QueryGaugeIdsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryGaugeIdsRequest;
    isSDK(o: any): o is QueryGaugeIdsRequestSDKType;
    isAmino(o: any): o is QueryGaugeIdsRequestAmino;
    encode(message: QueryGaugeIdsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGaugeIdsRequest;
    fromJSON(object: any): QueryGaugeIdsRequest;
    toJSON(message: QueryGaugeIdsRequest): unknown;
    fromPartial(object: DeepPartial<QueryGaugeIdsRequest>): QueryGaugeIdsRequest;
    fromSDK(object: QueryGaugeIdsRequestSDKType): QueryGaugeIdsRequest;
    toSDK(message: QueryGaugeIdsRequest): QueryGaugeIdsRequestSDKType;
    fromAmino(object: QueryGaugeIdsRequestAmino): QueryGaugeIdsRequest;
    toAmino(message: QueryGaugeIdsRequest): QueryGaugeIdsRequestAmino;
    fromAminoMsg(object: QueryGaugeIdsRequestAminoMsg): QueryGaugeIdsRequest;
    toAminoMsg(message: QueryGaugeIdsRequest): QueryGaugeIdsRequestAminoMsg;
    fromProtoMsg(message: QueryGaugeIdsRequestProtoMsg): QueryGaugeIdsRequest;
    toProto(message: QueryGaugeIdsRequest): Uint8Array;
    toProtoMsg(message: QueryGaugeIdsRequest): QueryGaugeIdsRequestProtoMsg;
};
export declare const QueryGaugeIdsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryGaugeIdsResponse;
    isSDK(o: any): o is QueryGaugeIdsResponseSDKType;
    isAmino(o: any): o is QueryGaugeIdsResponseAmino;
    encode(message: QueryGaugeIdsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGaugeIdsResponse;
    fromJSON(object: any): QueryGaugeIdsResponse;
    toJSON(message: QueryGaugeIdsResponse): unknown;
    fromPartial(object: DeepPartial<QueryGaugeIdsResponse>): QueryGaugeIdsResponse;
    fromSDK(object: QueryGaugeIdsResponseSDKType): QueryGaugeIdsResponse;
    toSDK(message: QueryGaugeIdsResponse): QueryGaugeIdsResponseSDKType;
    fromAmino(object: QueryGaugeIdsResponseAmino): QueryGaugeIdsResponse;
    toAmino(message: QueryGaugeIdsResponse): QueryGaugeIdsResponseAmino;
    fromAminoMsg(object: QueryGaugeIdsResponseAminoMsg): QueryGaugeIdsResponse;
    toAminoMsg(message: QueryGaugeIdsResponse): QueryGaugeIdsResponseAminoMsg;
    fromProtoMsg(message: QueryGaugeIdsResponseProtoMsg): QueryGaugeIdsResponse;
    toProto(message: QueryGaugeIdsResponse): Uint8Array;
    toProtoMsg(message: QueryGaugeIdsResponse): QueryGaugeIdsResponseProtoMsg;
};
export declare const QueryGaugeIdsResponse_GaugeIdWithDuration: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryGaugeIdsResponse_GaugeIdWithDuration;
    isSDK(o: any): o is QueryGaugeIdsResponse_GaugeIdWithDurationSDKType;
    isAmino(o: any): o is QueryGaugeIdsResponse_GaugeIdWithDurationAmino;
    encode(message: QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGaugeIdsResponse_GaugeIdWithDuration;
    fromJSON(object: any): QueryGaugeIdsResponse_GaugeIdWithDuration;
    toJSON(message: QueryGaugeIdsResponse_GaugeIdWithDuration): unknown;
    fromPartial(object: DeepPartial<QueryGaugeIdsResponse_GaugeIdWithDuration>): QueryGaugeIdsResponse_GaugeIdWithDuration;
    fromSDK(object: QueryGaugeIdsResponse_GaugeIdWithDurationSDKType): QueryGaugeIdsResponse_GaugeIdWithDuration;
    toSDK(message: QueryGaugeIdsResponse_GaugeIdWithDuration): QueryGaugeIdsResponse_GaugeIdWithDurationSDKType;
    fromAmino(object: QueryGaugeIdsResponse_GaugeIdWithDurationAmino): QueryGaugeIdsResponse_GaugeIdWithDuration;
    toAmino(message: QueryGaugeIdsResponse_GaugeIdWithDuration): QueryGaugeIdsResponse_GaugeIdWithDurationAmino;
    fromAminoMsg(object: QueryGaugeIdsResponse_GaugeIdWithDurationAminoMsg): QueryGaugeIdsResponse_GaugeIdWithDuration;
    toAminoMsg(message: QueryGaugeIdsResponse_GaugeIdWithDuration): QueryGaugeIdsResponse_GaugeIdWithDurationAminoMsg;
    fromProtoMsg(message: QueryGaugeIdsResponse_GaugeIdWithDurationProtoMsg): QueryGaugeIdsResponse_GaugeIdWithDuration;
    toProto(message: QueryGaugeIdsResponse_GaugeIdWithDuration): Uint8Array;
    toProtoMsg(message: QueryGaugeIdsResponse_GaugeIdWithDuration): QueryGaugeIdsResponse_GaugeIdWithDurationProtoMsg;
};
export declare const QueryDistrInfoRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDistrInfoRequest;
    isSDK(o: any): o is QueryDistrInfoRequestSDKType;
    isAmino(o: any): o is QueryDistrInfoRequestAmino;
    encode(_: QueryDistrInfoRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDistrInfoRequest;
    fromJSON(_: any): QueryDistrInfoRequest;
    toJSON(_: QueryDistrInfoRequest): unknown;
    fromPartial(_: DeepPartial<QueryDistrInfoRequest>): QueryDistrInfoRequest;
    fromSDK(_: QueryDistrInfoRequestSDKType): QueryDistrInfoRequest;
    toSDK(_: QueryDistrInfoRequest): QueryDistrInfoRequestSDKType;
    fromAmino(_: QueryDistrInfoRequestAmino): QueryDistrInfoRequest;
    toAmino(_: QueryDistrInfoRequest): QueryDistrInfoRequestAmino;
    fromAminoMsg(object: QueryDistrInfoRequestAminoMsg): QueryDistrInfoRequest;
    toAminoMsg(message: QueryDistrInfoRequest): QueryDistrInfoRequestAminoMsg;
    fromProtoMsg(message: QueryDistrInfoRequestProtoMsg): QueryDistrInfoRequest;
    toProto(message: QueryDistrInfoRequest): Uint8Array;
    toProtoMsg(message: QueryDistrInfoRequest): QueryDistrInfoRequestProtoMsg;
};
export declare const QueryDistrInfoResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDistrInfoResponse;
    isSDK(o: any): o is QueryDistrInfoResponseSDKType;
    isAmino(o: any): o is QueryDistrInfoResponseAmino;
    encode(message: QueryDistrInfoResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDistrInfoResponse;
    fromJSON(object: any): QueryDistrInfoResponse;
    toJSON(message: QueryDistrInfoResponse): unknown;
    fromPartial(object: DeepPartial<QueryDistrInfoResponse>): QueryDistrInfoResponse;
    fromSDK(object: QueryDistrInfoResponseSDKType): QueryDistrInfoResponse;
    toSDK(message: QueryDistrInfoResponse): QueryDistrInfoResponseSDKType;
    fromAmino(object: QueryDistrInfoResponseAmino): QueryDistrInfoResponse;
    toAmino(message: QueryDistrInfoResponse): QueryDistrInfoResponseAmino;
    fromAminoMsg(object: QueryDistrInfoResponseAminoMsg): QueryDistrInfoResponse;
    toAminoMsg(message: QueryDistrInfoResponse): QueryDistrInfoResponseAminoMsg;
    fromProtoMsg(message: QueryDistrInfoResponseProtoMsg): QueryDistrInfoResponse;
    toProto(message: QueryDistrInfoResponse): Uint8Array;
    toProtoMsg(message: QueryDistrInfoResponse): QueryDistrInfoResponseProtoMsg;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryParamsRequest;
    isSDK(o: any): o is QueryParamsRequestSDKType;
    isAmino(o: any): o is QueryParamsRequestAmino;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
    fromSDK(_: QueryParamsRequestSDKType): QueryParamsRequest;
    toSDK(_: QueryParamsRequest): QueryParamsRequestSDKType;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryParamsResponse;
    isSDK(o: any): o is QueryParamsResponseSDKType;
    isAmino(o: any): o is QueryParamsResponseAmino;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
    fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse;
    toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryLockableDurationsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryLockableDurationsRequest;
    isSDK(o: any): o is QueryLockableDurationsRequestSDKType;
    isAmino(o: any): o is QueryLockableDurationsRequestAmino;
    encode(_: QueryLockableDurationsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLockableDurationsRequest;
    fromJSON(_: any): QueryLockableDurationsRequest;
    toJSON(_: QueryLockableDurationsRequest): unknown;
    fromPartial(_: DeepPartial<QueryLockableDurationsRequest>): QueryLockableDurationsRequest;
    fromSDK(_: QueryLockableDurationsRequestSDKType): QueryLockableDurationsRequest;
    toSDK(_: QueryLockableDurationsRequest): QueryLockableDurationsRequestSDKType;
    fromAmino(_: QueryLockableDurationsRequestAmino): QueryLockableDurationsRequest;
    toAmino(_: QueryLockableDurationsRequest): QueryLockableDurationsRequestAmino;
    fromAminoMsg(object: QueryLockableDurationsRequestAminoMsg): QueryLockableDurationsRequest;
    toAminoMsg(message: QueryLockableDurationsRequest): QueryLockableDurationsRequestAminoMsg;
    fromProtoMsg(message: QueryLockableDurationsRequestProtoMsg): QueryLockableDurationsRequest;
    toProto(message: QueryLockableDurationsRequest): Uint8Array;
    toProtoMsg(message: QueryLockableDurationsRequest): QueryLockableDurationsRequestProtoMsg;
};
export declare const QueryLockableDurationsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryLockableDurationsResponse;
    isSDK(o: any): o is QueryLockableDurationsResponseSDKType;
    isAmino(o: any): o is QueryLockableDurationsResponseAmino;
    encode(message: QueryLockableDurationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLockableDurationsResponse;
    fromJSON(object: any): QueryLockableDurationsResponse;
    toJSON(message: QueryLockableDurationsResponse): unknown;
    fromPartial(object: DeepPartial<QueryLockableDurationsResponse>): QueryLockableDurationsResponse;
    fromSDK(object: QueryLockableDurationsResponseSDKType): QueryLockableDurationsResponse;
    toSDK(message: QueryLockableDurationsResponse): QueryLockableDurationsResponseSDKType;
    fromAmino(object: QueryLockableDurationsResponseAmino): QueryLockableDurationsResponse;
    toAmino(message: QueryLockableDurationsResponse): QueryLockableDurationsResponseAmino;
    fromAminoMsg(object: QueryLockableDurationsResponseAminoMsg): QueryLockableDurationsResponse;
    toAminoMsg(message: QueryLockableDurationsResponse): QueryLockableDurationsResponseAminoMsg;
    fromProtoMsg(message: QueryLockableDurationsResponseProtoMsg): QueryLockableDurationsResponse;
    toProto(message: QueryLockableDurationsResponse): Uint8Array;
    toProtoMsg(message: QueryLockableDurationsResponse): QueryLockableDurationsResponseProtoMsg;
};
export declare const QueryIncentivizedPoolsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryIncentivizedPoolsRequest;
    isSDK(o: any): o is QueryIncentivizedPoolsRequestSDKType;
    isAmino(o: any): o is QueryIncentivizedPoolsRequestAmino;
    encode(_: QueryIncentivizedPoolsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPoolsRequest;
    fromJSON(_: any): QueryIncentivizedPoolsRequest;
    toJSON(_: QueryIncentivizedPoolsRequest): unknown;
    fromPartial(_: DeepPartial<QueryIncentivizedPoolsRequest>): QueryIncentivizedPoolsRequest;
    fromSDK(_: QueryIncentivizedPoolsRequestSDKType): QueryIncentivizedPoolsRequest;
    toSDK(_: QueryIncentivizedPoolsRequest): QueryIncentivizedPoolsRequestSDKType;
    fromAmino(_: QueryIncentivizedPoolsRequestAmino): QueryIncentivizedPoolsRequest;
    toAmino(_: QueryIncentivizedPoolsRequest): QueryIncentivizedPoolsRequestAmino;
    fromAminoMsg(object: QueryIncentivizedPoolsRequestAminoMsg): QueryIncentivizedPoolsRequest;
    toAminoMsg(message: QueryIncentivizedPoolsRequest): QueryIncentivizedPoolsRequestAminoMsg;
    fromProtoMsg(message: QueryIncentivizedPoolsRequestProtoMsg): QueryIncentivizedPoolsRequest;
    toProto(message: QueryIncentivizedPoolsRequest): Uint8Array;
    toProtoMsg(message: QueryIncentivizedPoolsRequest): QueryIncentivizedPoolsRequestProtoMsg;
};
export declare const IncentivizedPool: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is IncentivizedPool;
    isSDK(o: any): o is IncentivizedPoolSDKType;
    isAmino(o: any): o is IncentivizedPoolAmino;
    encode(message: IncentivizedPool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): IncentivizedPool;
    fromJSON(object: any): IncentivizedPool;
    toJSON(message: IncentivizedPool): unknown;
    fromPartial(object: DeepPartial<IncentivizedPool>): IncentivizedPool;
    fromSDK(object: IncentivizedPoolSDKType): IncentivizedPool;
    toSDK(message: IncentivizedPool): IncentivizedPoolSDKType;
    fromAmino(object: IncentivizedPoolAmino): IncentivizedPool;
    toAmino(message: IncentivizedPool): IncentivizedPoolAmino;
    fromAminoMsg(object: IncentivizedPoolAminoMsg): IncentivizedPool;
    toAminoMsg(message: IncentivizedPool): IncentivizedPoolAminoMsg;
    fromProtoMsg(message: IncentivizedPoolProtoMsg): IncentivizedPool;
    toProto(message: IncentivizedPool): Uint8Array;
    toProtoMsg(message: IncentivizedPool): IncentivizedPoolProtoMsg;
};
export declare const QueryIncentivizedPoolsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryIncentivizedPoolsResponse;
    isSDK(o: any): o is QueryIncentivizedPoolsResponseSDKType;
    isAmino(o: any): o is QueryIncentivizedPoolsResponseAmino;
    encode(message: QueryIncentivizedPoolsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPoolsResponse;
    fromJSON(object: any): QueryIncentivizedPoolsResponse;
    toJSON(message: QueryIncentivizedPoolsResponse): unknown;
    fromPartial(object: DeepPartial<QueryIncentivizedPoolsResponse>): QueryIncentivizedPoolsResponse;
    fromSDK(object: QueryIncentivizedPoolsResponseSDKType): QueryIncentivizedPoolsResponse;
    toSDK(message: QueryIncentivizedPoolsResponse): QueryIncentivizedPoolsResponseSDKType;
    fromAmino(object: QueryIncentivizedPoolsResponseAmino): QueryIncentivizedPoolsResponse;
    toAmino(message: QueryIncentivizedPoolsResponse): QueryIncentivizedPoolsResponseAmino;
    fromAminoMsg(object: QueryIncentivizedPoolsResponseAminoMsg): QueryIncentivizedPoolsResponse;
    toAminoMsg(message: QueryIncentivizedPoolsResponse): QueryIncentivizedPoolsResponseAminoMsg;
    fromProtoMsg(message: QueryIncentivizedPoolsResponseProtoMsg): QueryIncentivizedPoolsResponse;
    toProto(message: QueryIncentivizedPoolsResponse): Uint8Array;
    toProtoMsg(message: QueryIncentivizedPoolsResponse): QueryIncentivizedPoolsResponseProtoMsg;
};
export declare const QueryExternalIncentiveGaugesRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryExternalIncentiveGaugesRequest;
    isSDK(o: any): o is QueryExternalIncentiveGaugesRequestSDKType;
    isAmino(o: any): o is QueryExternalIncentiveGaugesRequestAmino;
    encode(_: QueryExternalIncentiveGaugesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryExternalIncentiveGaugesRequest;
    fromJSON(_: any): QueryExternalIncentiveGaugesRequest;
    toJSON(_: QueryExternalIncentiveGaugesRequest): unknown;
    fromPartial(_: DeepPartial<QueryExternalIncentiveGaugesRequest>): QueryExternalIncentiveGaugesRequest;
    fromSDK(_: QueryExternalIncentiveGaugesRequestSDKType): QueryExternalIncentiveGaugesRequest;
    toSDK(_: QueryExternalIncentiveGaugesRequest): QueryExternalIncentiveGaugesRequestSDKType;
    fromAmino(_: QueryExternalIncentiveGaugesRequestAmino): QueryExternalIncentiveGaugesRequest;
    toAmino(_: QueryExternalIncentiveGaugesRequest): QueryExternalIncentiveGaugesRequestAmino;
    fromAminoMsg(object: QueryExternalIncentiveGaugesRequestAminoMsg): QueryExternalIncentiveGaugesRequest;
    toAminoMsg(message: QueryExternalIncentiveGaugesRequest): QueryExternalIncentiveGaugesRequestAminoMsg;
    fromProtoMsg(message: QueryExternalIncentiveGaugesRequestProtoMsg): QueryExternalIncentiveGaugesRequest;
    toProto(message: QueryExternalIncentiveGaugesRequest): Uint8Array;
    toProtoMsg(message: QueryExternalIncentiveGaugesRequest): QueryExternalIncentiveGaugesRequestProtoMsg;
};
export declare const QueryExternalIncentiveGaugesResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryExternalIncentiveGaugesResponse;
    isSDK(o: any): o is QueryExternalIncentiveGaugesResponseSDKType;
    isAmino(o: any): o is QueryExternalIncentiveGaugesResponseAmino;
    encode(message: QueryExternalIncentiveGaugesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryExternalIncentiveGaugesResponse;
    fromJSON(object: any): QueryExternalIncentiveGaugesResponse;
    toJSON(message: QueryExternalIncentiveGaugesResponse): unknown;
    fromPartial(object: DeepPartial<QueryExternalIncentiveGaugesResponse>): QueryExternalIncentiveGaugesResponse;
    fromSDK(object: QueryExternalIncentiveGaugesResponseSDKType): QueryExternalIncentiveGaugesResponse;
    toSDK(message: QueryExternalIncentiveGaugesResponse): QueryExternalIncentiveGaugesResponseSDKType;
    fromAmino(object: QueryExternalIncentiveGaugesResponseAmino): QueryExternalIncentiveGaugesResponse;
    toAmino(message: QueryExternalIncentiveGaugesResponse): QueryExternalIncentiveGaugesResponseAmino;
    fromAminoMsg(object: QueryExternalIncentiveGaugesResponseAminoMsg): QueryExternalIncentiveGaugesResponse;
    toAminoMsg(message: QueryExternalIncentiveGaugesResponse): QueryExternalIncentiveGaugesResponseAminoMsg;
    fromProtoMsg(message: QueryExternalIncentiveGaugesResponseProtoMsg): QueryExternalIncentiveGaugesResponse;
    toProto(message: QueryExternalIncentiveGaugesResponse): Uint8Array;
    toProtoMsg(message: QueryExternalIncentiveGaugesResponse): QueryExternalIncentiveGaugesResponseProtoMsg;
};
