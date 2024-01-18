import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Gauge, GaugeAmino, GaugeSDKType } from "./gauge";
import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
export interface ModuleToDistributeCoinsRequest {
}
export interface ModuleToDistributeCoinsRequestProtoMsg {
    typeUrl: "/osmosis.incentives.ModuleToDistributeCoinsRequest";
    value: Uint8Array;
}
export interface ModuleToDistributeCoinsRequestAmino {
}
export interface ModuleToDistributeCoinsRequestAminoMsg {
    type: "osmosis/incentives/module-to-distribute-coins-request";
    value: ModuleToDistributeCoinsRequestAmino;
}
export interface ModuleToDistributeCoinsRequestSDKType {
}
export interface ModuleToDistributeCoinsResponse {
    /** Coins that have yet to be distributed */
    coins: Coin[];
}
export interface ModuleToDistributeCoinsResponseProtoMsg {
    typeUrl: "/osmosis.incentives.ModuleToDistributeCoinsResponse";
    value: Uint8Array;
}
export interface ModuleToDistributeCoinsResponseAmino {
    /** Coins that have yet to be distributed */
    coins?: CoinAmino[];
}
export interface ModuleToDistributeCoinsResponseAminoMsg {
    type: "osmosis/incentives/module-to-distribute-coins-response";
    value: ModuleToDistributeCoinsResponseAmino;
}
export interface ModuleToDistributeCoinsResponseSDKType {
    coins: CoinSDKType[];
}
export interface GaugeByIDRequest {
    /** Gague ID being queried */
    id: bigint;
}
export interface GaugeByIDRequestProtoMsg {
    typeUrl: "/osmosis.incentives.GaugeByIDRequest";
    value: Uint8Array;
}
export interface GaugeByIDRequestAmino {
    /** Gague ID being queried */
    id?: string;
}
export interface GaugeByIDRequestAminoMsg {
    type: "osmosis/incentives/gauge-by-id-request";
    value: GaugeByIDRequestAmino;
}
export interface GaugeByIDRequestSDKType {
    id: bigint;
}
export interface GaugeByIDResponse {
    /** Gauge that corresponds to provided gague ID */
    gauge?: Gauge | undefined;
}
export interface GaugeByIDResponseProtoMsg {
    typeUrl: "/osmosis.incentives.GaugeByIDResponse";
    value: Uint8Array;
}
export interface GaugeByIDResponseAmino {
    /** Gauge that corresponds to provided gague ID */
    gauge?: GaugeAmino | undefined;
}
export interface GaugeByIDResponseAminoMsg {
    type: "osmosis/incentives/gauge-by-id-response";
    value: GaugeByIDResponseAmino;
}
export interface GaugeByIDResponseSDKType {
    gauge?: GaugeSDKType | undefined;
}
export interface GaugesRequest {
    /** Pagination defines pagination for the request */
    pagination?: PageRequest | undefined;
}
export interface GaugesRequestProtoMsg {
    typeUrl: "/osmosis.incentives.GaugesRequest";
    value: Uint8Array;
}
export interface GaugesRequestAmino {
    /** Pagination defines pagination for the request */
    pagination?: PageRequestAmino | undefined;
}
export interface GaugesRequestAminoMsg {
    type: "osmosis/incentives/gauges-request";
    value: GaugesRequestAmino;
}
export interface GaugesRequestSDKType {
    pagination?: PageRequestSDKType | undefined;
}
export interface GaugesResponse {
    /** Upcoming and active gauges */
    data: Gauge[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponse | undefined;
}
export interface GaugesResponseProtoMsg {
    typeUrl: "/osmosis.incentives.GaugesResponse";
    value: Uint8Array;
}
export interface GaugesResponseAmino {
    /** Upcoming and active gauges */
    data?: GaugeAmino[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponseAmino | undefined;
}
export interface GaugesResponseAminoMsg {
    type: "osmosis/incentives/gauges-response";
    value: GaugesResponseAmino;
}
export interface GaugesResponseSDKType {
    data: GaugeSDKType[];
    pagination?: PageResponseSDKType | undefined;
}
export interface ActiveGaugesRequest {
    /** Pagination defines pagination for the request */
    pagination?: PageRequest | undefined;
}
export interface ActiveGaugesRequestProtoMsg {
    typeUrl: "/osmosis.incentives.ActiveGaugesRequest";
    value: Uint8Array;
}
export interface ActiveGaugesRequestAmino {
    /** Pagination defines pagination for the request */
    pagination?: PageRequestAmino | undefined;
}
export interface ActiveGaugesRequestAminoMsg {
    type: "osmosis/incentives/active-gauges-request";
    value: ActiveGaugesRequestAmino;
}
export interface ActiveGaugesRequestSDKType {
    pagination?: PageRequestSDKType | undefined;
}
export interface ActiveGaugesResponse {
    /** Active gagues only */
    data: Gauge[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponse | undefined;
}
export interface ActiveGaugesResponseProtoMsg {
    typeUrl: "/osmosis.incentives.ActiveGaugesResponse";
    value: Uint8Array;
}
export interface ActiveGaugesResponseAmino {
    /** Active gagues only */
    data?: GaugeAmino[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponseAmino | undefined;
}
export interface ActiveGaugesResponseAminoMsg {
    type: "osmosis/incentives/active-gauges-response";
    value: ActiveGaugesResponseAmino;
}
export interface ActiveGaugesResponseSDKType {
    data: GaugeSDKType[];
    pagination?: PageResponseSDKType | undefined;
}
export interface ActiveGaugesPerDenomRequest {
    /** Desired denom when querying active gagues */
    denom: string;
    /** Pagination defines pagination for the request */
    pagination?: PageRequest | undefined;
}
export interface ActiveGaugesPerDenomRequestProtoMsg {
    typeUrl: "/osmosis.incentives.ActiveGaugesPerDenomRequest";
    value: Uint8Array;
}
export interface ActiveGaugesPerDenomRequestAmino {
    /** Desired denom when querying active gagues */
    denom?: string;
    /** Pagination defines pagination for the request */
    pagination?: PageRequestAmino | undefined;
}
export interface ActiveGaugesPerDenomRequestAminoMsg {
    type: "osmosis/incentives/active-gauges-per-denom-request";
    value: ActiveGaugesPerDenomRequestAmino;
}
export interface ActiveGaugesPerDenomRequestSDKType {
    denom: string;
    pagination?: PageRequestSDKType | undefined;
}
export interface ActiveGaugesPerDenomResponse {
    /** Active gagues that match denom in query */
    data: Gauge[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponse | undefined;
}
export interface ActiveGaugesPerDenomResponseProtoMsg {
    typeUrl: "/osmosis.incentives.ActiveGaugesPerDenomResponse";
    value: Uint8Array;
}
export interface ActiveGaugesPerDenomResponseAmino {
    /** Active gagues that match denom in query */
    data?: GaugeAmino[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponseAmino | undefined;
}
export interface ActiveGaugesPerDenomResponseAminoMsg {
    type: "osmosis/incentives/active-gauges-per-denom-response";
    value: ActiveGaugesPerDenomResponseAmino;
}
export interface ActiveGaugesPerDenomResponseSDKType {
    data: GaugeSDKType[];
    pagination?: PageResponseSDKType | undefined;
}
export interface UpcomingGaugesRequest {
    /** Pagination defines pagination for the request */
    pagination?: PageRequest | undefined;
}
export interface UpcomingGaugesRequestProtoMsg {
    typeUrl: "/osmosis.incentives.UpcomingGaugesRequest";
    value: Uint8Array;
}
export interface UpcomingGaugesRequestAmino {
    /** Pagination defines pagination for the request */
    pagination?: PageRequestAmino | undefined;
}
export interface UpcomingGaugesRequestAminoMsg {
    type: "osmosis/incentives/upcoming-gauges-request";
    value: UpcomingGaugesRequestAmino;
}
export interface UpcomingGaugesRequestSDKType {
    pagination?: PageRequestSDKType | undefined;
}
export interface UpcomingGaugesResponse {
    /** Gauges whose distribution is upcoming */
    data: Gauge[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponse | undefined;
}
export interface UpcomingGaugesResponseProtoMsg {
    typeUrl: "/osmosis.incentives.UpcomingGaugesResponse";
    value: Uint8Array;
}
export interface UpcomingGaugesResponseAmino {
    /** Gauges whose distribution is upcoming */
    data?: GaugeAmino[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponseAmino | undefined;
}
export interface UpcomingGaugesResponseAminoMsg {
    type: "osmosis/incentives/upcoming-gauges-response";
    value: UpcomingGaugesResponseAmino;
}
export interface UpcomingGaugesResponseSDKType {
    data: GaugeSDKType[];
    pagination?: PageResponseSDKType | undefined;
}
export interface UpcomingGaugesPerDenomRequest {
    /** Filter for upcoming gagues that match specific denom */
    denom: string;
    /** Pagination defines pagination for the request */
    pagination?: PageRequest | undefined;
}
export interface UpcomingGaugesPerDenomRequestProtoMsg {
    typeUrl: "/osmosis.incentives.UpcomingGaugesPerDenomRequest";
    value: Uint8Array;
}
export interface UpcomingGaugesPerDenomRequestAmino {
    /** Filter for upcoming gagues that match specific denom */
    denom?: string;
    /** Pagination defines pagination for the request */
    pagination?: PageRequestAmino | undefined;
}
export interface UpcomingGaugesPerDenomRequestAminoMsg {
    type: "osmosis/incentives/upcoming-gauges-per-denom-request";
    value: UpcomingGaugesPerDenomRequestAmino;
}
export interface UpcomingGaugesPerDenomRequestSDKType {
    denom: string;
    pagination?: PageRequestSDKType | undefined;
}
export interface UpcomingGaugesPerDenomResponse {
    /** Upcoming gagues that match denom in query */
    upcomingGauges: Gauge[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponse | undefined;
}
export interface UpcomingGaugesPerDenomResponseProtoMsg {
    typeUrl: "/osmosis.incentives.UpcomingGaugesPerDenomResponse";
    value: Uint8Array;
}
export interface UpcomingGaugesPerDenomResponseAmino {
    /** Upcoming gagues that match denom in query */
    upcoming_gauges?: GaugeAmino[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponseAmino | undefined;
}
export interface UpcomingGaugesPerDenomResponseAminoMsg {
    type: "osmosis/incentives/upcoming-gauges-per-denom-response";
    value: UpcomingGaugesPerDenomResponseAmino;
}
export interface UpcomingGaugesPerDenomResponseSDKType {
    upcoming_gauges: GaugeSDKType[];
    pagination?: PageResponseSDKType | undefined;
}
export interface RewardsEstRequest {
    /** Address that is being queried for future estimated rewards */
    owner: string;
    /** Lock IDs included in future reward estimation */
    lockIds: bigint[];
    /**
     * Upper time limit of reward estimation
     * Lower limit is current epoch
     */
    endEpoch: bigint;
}
export interface RewardsEstRequestProtoMsg {
    typeUrl: "/osmosis.incentives.RewardsEstRequest";
    value: Uint8Array;
}
export interface RewardsEstRequestAmino {
    /** Address that is being queried for future estimated rewards */
    owner?: string;
    /** Lock IDs included in future reward estimation */
    lock_ids?: string[];
    /**
     * Upper time limit of reward estimation
     * Lower limit is current epoch
     */
    end_epoch?: string;
}
export interface RewardsEstRequestAminoMsg {
    type: "osmosis/incentives/rewards-est-request";
    value: RewardsEstRequestAmino;
}
export interface RewardsEstRequestSDKType {
    owner: string;
    lock_ids: bigint[];
    end_epoch: bigint;
}
export interface RewardsEstResponse {
    /**
     * Estimated coin rewards that will be recieved at provided address
     * from specified locks between current time and end epoch
     */
    coins: Coin[];
}
export interface RewardsEstResponseProtoMsg {
    typeUrl: "/osmosis.incentives.RewardsEstResponse";
    value: Uint8Array;
}
export interface RewardsEstResponseAmino {
    /**
     * Estimated coin rewards that will be recieved at provided address
     * from specified locks between current time and end epoch
     */
    coins?: CoinAmino[];
}
export interface RewardsEstResponseAminoMsg {
    type: "osmosis/incentives/rewards-est-response";
    value: RewardsEstResponseAmino;
}
export interface RewardsEstResponseSDKType {
    coins: CoinSDKType[];
}
export interface QueryLockableDurationsRequest {
}
export interface QueryLockableDurationsRequestProtoMsg {
    typeUrl: "/osmosis.incentives.QueryLockableDurationsRequest";
    value: Uint8Array;
}
export interface QueryLockableDurationsRequestAmino {
}
export interface QueryLockableDurationsRequestAminoMsg {
    type: "osmosis/incentives/query-lockable-durations-request";
    value: QueryLockableDurationsRequestAmino;
}
export interface QueryLockableDurationsRequestSDKType {
}
export interface QueryLockableDurationsResponse {
    /** Time durations that users can lock coins for in order to recieve rewards */
    lockableDurations: Duration[];
}
export interface QueryLockableDurationsResponseProtoMsg {
    typeUrl: "/osmosis.incentives.QueryLockableDurationsResponse";
    value: Uint8Array;
}
export interface QueryLockableDurationsResponseAmino {
    /** Time durations that users can lock coins for in order to recieve rewards */
    lockable_durations?: DurationAmino[];
}
export interface QueryLockableDurationsResponseAminoMsg {
    type: "osmosis/incentives/query-lockable-durations-response";
    value: QueryLockableDurationsResponseAmino;
}
export interface QueryLockableDurationsResponseSDKType {
    lockable_durations: DurationSDKType[];
}
export declare const ModuleToDistributeCoinsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ModuleToDistributeCoinsRequest;
    isSDK(o: any): o is ModuleToDistributeCoinsRequestSDKType;
    isAmino(o: any): o is ModuleToDistributeCoinsRequestAmino;
    encode(_: ModuleToDistributeCoinsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ModuleToDistributeCoinsRequest;
    fromJSON(_: any): ModuleToDistributeCoinsRequest;
    toJSON(_: ModuleToDistributeCoinsRequest): unknown;
    fromPartial(_: DeepPartial<ModuleToDistributeCoinsRequest>): ModuleToDistributeCoinsRequest;
    fromSDK(_: ModuleToDistributeCoinsRequestSDKType): ModuleToDistributeCoinsRequest;
    toSDK(_: ModuleToDistributeCoinsRequest): ModuleToDistributeCoinsRequestSDKType;
    fromAmino(_: ModuleToDistributeCoinsRequestAmino): ModuleToDistributeCoinsRequest;
    toAmino(_: ModuleToDistributeCoinsRequest): ModuleToDistributeCoinsRequestAmino;
    fromAminoMsg(object: ModuleToDistributeCoinsRequestAminoMsg): ModuleToDistributeCoinsRequest;
    toAminoMsg(message: ModuleToDistributeCoinsRequest): ModuleToDistributeCoinsRequestAminoMsg;
    fromProtoMsg(message: ModuleToDistributeCoinsRequestProtoMsg): ModuleToDistributeCoinsRequest;
    toProto(message: ModuleToDistributeCoinsRequest): Uint8Array;
    toProtoMsg(message: ModuleToDistributeCoinsRequest): ModuleToDistributeCoinsRequestProtoMsg;
};
export declare const ModuleToDistributeCoinsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ModuleToDistributeCoinsResponse;
    isSDK(o: any): o is ModuleToDistributeCoinsResponseSDKType;
    isAmino(o: any): o is ModuleToDistributeCoinsResponseAmino;
    encode(message: ModuleToDistributeCoinsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ModuleToDistributeCoinsResponse;
    fromJSON(object: any): ModuleToDistributeCoinsResponse;
    toJSON(message: ModuleToDistributeCoinsResponse): unknown;
    fromPartial(object: DeepPartial<ModuleToDistributeCoinsResponse>): ModuleToDistributeCoinsResponse;
    fromSDK(object: ModuleToDistributeCoinsResponseSDKType): ModuleToDistributeCoinsResponse;
    toSDK(message: ModuleToDistributeCoinsResponse): ModuleToDistributeCoinsResponseSDKType;
    fromAmino(object: ModuleToDistributeCoinsResponseAmino): ModuleToDistributeCoinsResponse;
    toAmino(message: ModuleToDistributeCoinsResponse): ModuleToDistributeCoinsResponseAmino;
    fromAminoMsg(object: ModuleToDistributeCoinsResponseAminoMsg): ModuleToDistributeCoinsResponse;
    toAminoMsg(message: ModuleToDistributeCoinsResponse): ModuleToDistributeCoinsResponseAminoMsg;
    fromProtoMsg(message: ModuleToDistributeCoinsResponseProtoMsg): ModuleToDistributeCoinsResponse;
    toProto(message: ModuleToDistributeCoinsResponse): Uint8Array;
    toProtoMsg(message: ModuleToDistributeCoinsResponse): ModuleToDistributeCoinsResponseProtoMsg;
};
export declare const GaugeByIDRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is GaugeByIDRequest;
    isSDK(o: any): o is GaugeByIDRequestSDKType;
    isAmino(o: any): o is GaugeByIDRequestAmino;
    encode(message: GaugeByIDRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GaugeByIDRequest;
    fromJSON(object: any): GaugeByIDRequest;
    toJSON(message: GaugeByIDRequest): unknown;
    fromPartial(object: DeepPartial<GaugeByIDRequest>): GaugeByIDRequest;
    fromSDK(object: GaugeByIDRequestSDKType): GaugeByIDRequest;
    toSDK(message: GaugeByIDRequest): GaugeByIDRequestSDKType;
    fromAmino(object: GaugeByIDRequestAmino): GaugeByIDRequest;
    toAmino(message: GaugeByIDRequest): GaugeByIDRequestAmino;
    fromAminoMsg(object: GaugeByIDRequestAminoMsg): GaugeByIDRequest;
    toAminoMsg(message: GaugeByIDRequest): GaugeByIDRequestAminoMsg;
    fromProtoMsg(message: GaugeByIDRequestProtoMsg): GaugeByIDRequest;
    toProto(message: GaugeByIDRequest): Uint8Array;
    toProtoMsg(message: GaugeByIDRequest): GaugeByIDRequestProtoMsg;
};
export declare const GaugeByIDResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is GaugeByIDResponse;
    isSDK(o: any): o is GaugeByIDResponseSDKType;
    isAmino(o: any): o is GaugeByIDResponseAmino;
    encode(message: GaugeByIDResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GaugeByIDResponse;
    fromJSON(object: any): GaugeByIDResponse;
    toJSON(message: GaugeByIDResponse): unknown;
    fromPartial(object: DeepPartial<GaugeByIDResponse>): GaugeByIDResponse;
    fromSDK(object: GaugeByIDResponseSDKType): GaugeByIDResponse;
    toSDK(message: GaugeByIDResponse): GaugeByIDResponseSDKType;
    fromAmino(object: GaugeByIDResponseAmino): GaugeByIDResponse;
    toAmino(message: GaugeByIDResponse): GaugeByIDResponseAmino;
    fromAminoMsg(object: GaugeByIDResponseAminoMsg): GaugeByIDResponse;
    toAminoMsg(message: GaugeByIDResponse): GaugeByIDResponseAminoMsg;
    fromProtoMsg(message: GaugeByIDResponseProtoMsg): GaugeByIDResponse;
    toProto(message: GaugeByIDResponse): Uint8Array;
    toProtoMsg(message: GaugeByIDResponse): GaugeByIDResponseProtoMsg;
};
export declare const GaugesRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is GaugesRequest;
    isSDK(o: any): o is GaugesRequestSDKType;
    isAmino(o: any): o is GaugesRequestAmino;
    encode(message: GaugesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GaugesRequest;
    fromJSON(object: any): GaugesRequest;
    toJSON(message: GaugesRequest): unknown;
    fromPartial(object: DeepPartial<GaugesRequest>): GaugesRequest;
    fromSDK(object: GaugesRequestSDKType): GaugesRequest;
    toSDK(message: GaugesRequest): GaugesRequestSDKType;
    fromAmino(object: GaugesRequestAmino): GaugesRequest;
    toAmino(message: GaugesRequest): GaugesRequestAmino;
    fromAminoMsg(object: GaugesRequestAminoMsg): GaugesRequest;
    toAminoMsg(message: GaugesRequest): GaugesRequestAminoMsg;
    fromProtoMsg(message: GaugesRequestProtoMsg): GaugesRequest;
    toProto(message: GaugesRequest): Uint8Array;
    toProtoMsg(message: GaugesRequest): GaugesRequestProtoMsg;
};
export declare const GaugesResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is GaugesResponse;
    isSDK(o: any): o is GaugesResponseSDKType;
    isAmino(o: any): o is GaugesResponseAmino;
    encode(message: GaugesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GaugesResponse;
    fromJSON(object: any): GaugesResponse;
    toJSON(message: GaugesResponse): unknown;
    fromPartial(object: DeepPartial<GaugesResponse>): GaugesResponse;
    fromSDK(object: GaugesResponseSDKType): GaugesResponse;
    toSDK(message: GaugesResponse): GaugesResponseSDKType;
    fromAmino(object: GaugesResponseAmino): GaugesResponse;
    toAmino(message: GaugesResponse): GaugesResponseAmino;
    fromAminoMsg(object: GaugesResponseAminoMsg): GaugesResponse;
    toAminoMsg(message: GaugesResponse): GaugesResponseAminoMsg;
    fromProtoMsg(message: GaugesResponseProtoMsg): GaugesResponse;
    toProto(message: GaugesResponse): Uint8Array;
    toProtoMsg(message: GaugesResponse): GaugesResponseProtoMsg;
};
export declare const ActiveGaugesRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ActiveGaugesRequest;
    isSDK(o: any): o is ActiveGaugesRequestSDKType;
    isAmino(o: any): o is ActiveGaugesRequestAmino;
    encode(message: ActiveGaugesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ActiveGaugesRequest;
    fromJSON(object: any): ActiveGaugesRequest;
    toJSON(message: ActiveGaugesRequest): unknown;
    fromPartial(object: DeepPartial<ActiveGaugesRequest>): ActiveGaugesRequest;
    fromSDK(object: ActiveGaugesRequestSDKType): ActiveGaugesRequest;
    toSDK(message: ActiveGaugesRequest): ActiveGaugesRequestSDKType;
    fromAmino(object: ActiveGaugesRequestAmino): ActiveGaugesRequest;
    toAmino(message: ActiveGaugesRequest): ActiveGaugesRequestAmino;
    fromAminoMsg(object: ActiveGaugesRequestAminoMsg): ActiveGaugesRequest;
    toAminoMsg(message: ActiveGaugesRequest): ActiveGaugesRequestAminoMsg;
    fromProtoMsg(message: ActiveGaugesRequestProtoMsg): ActiveGaugesRequest;
    toProto(message: ActiveGaugesRequest): Uint8Array;
    toProtoMsg(message: ActiveGaugesRequest): ActiveGaugesRequestProtoMsg;
};
export declare const ActiveGaugesResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ActiveGaugesResponse;
    isSDK(o: any): o is ActiveGaugesResponseSDKType;
    isAmino(o: any): o is ActiveGaugesResponseAmino;
    encode(message: ActiveGaugesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ActiveGaugesResponse;
    fromJSON(object: any): ActiveGaugesResponse;
    toJSON(message: ActiveGaugesResponse): unknown;
    fromPartial(object: DeepPartial<ActiveGaugesResponse>): ActiveGaugesResponse;
    fromSDK(object: ActiveGaugesResponseSDKType): ActiveGaugesResponse;
    toSDK(message: ActiveGaugesResponse): ActiveGaugesResponseSDKType;
    fromAmino(object: ActiveGaugesResponseAmino): ActiveGaugesResponse;
    toAmino(message: ActiveGaugesResponse): ActiveGaugesResponseAmino;
    fromAminoMsg(object: ActiveGaugesResponseAminoMsg): ActiveGaugesResponse;
    toAminoMsg(message: ActiveGaugesResponse): ActiveGaugesResponseAminoMsg;
    fromProtoMsg(message: ActiveGaugesResponseProtoMsg): ActiveGaugesResponse;
    toProto(message: ActiveGaugesResponse): Uint8Array;
    toProtoMsg(message: ActiveGaugesResponse): ActiveGaugesResponseProtoMsg;
};
export declare const ActiveGaugesPerDenomRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ActiveGaugesPerDenomRequest;
    isSDK(o: any): o is ActiveGaugesPerDenomRequestSDKType;
    isAmino(o: any): o is ActiveGaugesPerDenomRequestAmino;
    encode(message: ActiveGaugesPerDenomRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ActiveGaugesPerDenomRequest;
    fromJSON(object: any): ActiveGaugesPerDenomRequest;
    toJSON(message: ActiveGaugesPerDenomRequest): unknown;
    fromPartial(object: DeepPartial<ActiveGaugesPerDenomRequest>): ActiveGaugesPerDenomRequest;
    fromSDK(object: ActiveGaugesPerDenomRequestSDKType): ActiveGaugesPerDenomRequest;
    toSDK(message: ActiveGaugesPerDenomRequest): ActiveGaugesPerDenomRequestSDKType;
    fromAmino(object: ActiveGaugesPerDenomRequestAmino): ActiveGaugesPerDenomRequest;
    toAmino(message: ActiveGaugesPerDenomRequest): ActiveGaugesPerDenomRequestAmino;
    fromAminoMsg(object: ActiveGaugesPerDenomRequestAminoMsg): ActiveGaugesPerDenomRequest;
    toAminoMsg(message: ActiveGaugesPerDenomRequest): ActiveGaugesPerDenomRequestAminoMsg;
    fromProtoMsg(message: ActiveGaugesPerDenomRequestProtoMsg): ActiveGaugesPerDenomRequest;
    toProto(message: ActiveGaugesPerDenomRequest): Uint8Array;
    toProtoMsg(message: ActiveGaugesPerDenomRequest): ActiveGaugesPerDenomRequestProtoMsg;
};
export declare const ActiveGaugesPerDenomResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ActiveGaugesPerDenomResponse;
    isSDK(o: any): o is ActiveGaugesPerDenomResponseSDKType;
    isAmino(o: any): o is ActiveGaugesPerDenomResponseAmino;
    encode(message: ActiveGaugesPerDenomResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ActiveGaugesPerDenomResponse;
    fromJSON(object: any): ActiveGaugesPerDenomResponse;
    toJSON(message: ActiveGaugesPerDenomResponse): unknown;
    fromPartial(object: DeepPartial<ActiveGaugesPerDenomResponse>): ActiveGaugesPerDenomResponse;
    fromSDK(object: ActiveGaugesPerDenomResponseSDKType): ActiveGaugesPerDenomResponse;
    toSDK(message: ActiveGaugesPerDenomResponse): ActiveGaugesPerDenomResponseSDKType;
    fromAmino(object: ActiveGaugesPerDenomResponseAmino): ActiveGaugesPerDenomResponse;
    toAmino(message: ActiveGaugesPerDenomResponse): ActiveGaugesPerDenomResponseAmino;
    fromAminoMsg(object: ActiveGaugesPerDenomResponseAminoMsg): ActiveGaugesPerDenomResponse;
    toAminoMsg(message: ActiveGaugesPerDenomResponse): ActiveGaugesPerDenomResponseAminoMsg;
    fromProtoMsg(message: ActiveGaugesPerDenomResponseProtoMsg): ActiveGaugesPerDenomResponse;
    toProto(message: ActiveGaugesPerDenomResponse): Uint8Array;
    toProtoMsg(message: ActiveGaugesPerDenomResponse): ActiveGaugesPerDenomResponseProtoMsg;
};
export declare const UpcomingGaugesRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is UpcomingGaugesRequest;
    isSDK(o: any): o is UpcomingGaugesRequestSDKType;
    isAmino(o: any): o is UpcomingGaugesRequestAmino;
    encode(message: UpcomingGaugesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UpcomingGaugesRequest;
    fromJSON(object: any): UpcomingGaugesRequest;
    toJSON(message: UpcomingGaugesRequest): unknown;
    fromPartial(object: DeepPartial<UpcomingGaugesRequest>): UpcomingGaugesRequest;
    fromSDK(object: UpcomingGaugesRequestSDKType): UpcomingGaugesRequest;
    toSDK(message: UpcomingGaugesRequest): UpcomingGaugesRequestSDKType;
    fromAmino(object: UpcomingGaugesRequestAmino): UpcomingGaugesRequest;
    toAmino(message: UpcomingGaugesRequest): UpcomingGaugesRequestAmino;
    fromAminoMsg(object: UpcomingGaugesRequestAminoMsg): UpcomingGaugesRequest;
    toAminoMsg(message: UpcomingGaugesRequest): UpcomingGaugesRequestAminoMsg;
    fromProtoMsg(message: UpcomingGaugesRequestProtoMsg): UpcomingGaugesRequest;
    toProto(message: UpcomingGaugesRequest): Uint8Array;
    toProtoMsg(message: UpcomingGaugesRequest): UpcomingGaugesRequestProtoMsg;
};
export declare const UpcomingGaugesResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is UpcomingGaugesResponse;
    isSDK(o: any): o is UpcomingGaugesResponseSDKType;
    isAmino(o: any): o is UpcomingGaugesResponseAmino;
    encode(message: UpcomingGaugesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UpcomingGaugesResponse;
    fromJSON(object: any): UpcomingGaugesResponse;
    toJSON(message: UpcomingGaugesResponse): unknown;
    fromPartial(object: DeepPartial<UpcomingGaugesResponse>): UpcomingGaugesResponse;
    fromSDK(object: UpcomingGaugesResponseSDKType): UpcomingGaugesResponse;
    toSDK(message: UpcomingGaugesResponse): UpcomingGaugesResponseSDKType;
    fromAmino(object: UpcomingGaugesResponseAmino): UpcomingGaugesResponse;
    toAmino(message: UpcomingGaugesResponse): UpcomingGaugesResponseAmino;
    fromAminoMsg(object: UpcomingGaugesResponseAminoMsg): UpcomingGaugesResponse;
    toAminoMsg(message: UpcomingGaugesResponse): UpcomingGaugesResponseAminoMsg;
    fromProtoMsg(message: UpcomingGaugesResponseProtoMsg): UpcomingGaugesResponse;
    toProto(message: UpcomingGaugesResponse): Uint8Array;
    toProtoMsg(message: UpcomingGaugesResponse): UpcomingGaugesResponseProtoMsg;
};
export declare const UpcomingGaugesPerDenomRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is UpcomingGaugesPerDenomRequest;
    isSDK(o: any): o is UpcomingGaugesPerDenomRequestSDKType;
    isAmino(o: any): o is UpcomingGaugesPerDenomRequestAmino;
    encode(message: UpcomingGaugesPerDenomRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UpcomingGaugesPerDenomRequest;
    fromJSON(object: any): UpcomingGaugesPerDenomRequest;
    toJSON(message: UpcomingGaugesPerDenomRequest): unknown;
    fromPartial(object: DeepPartial<UpcomingGaugesPerDenomRequest>): UpcomingGaugesPerDenomRequest;
    fromSDK(object: UpcomingGaugesPerDenomRequestSDKType): UpcomingGaugesPerDenomRequest;
    toSDK(message: UpcomingGaugesPerDenomRequest): UpcomingGaugesPerDenomRequestSDKType;
    fromAmino(object: UpcomingGaugesPerDenomRequestAmino): UpcomingGaugesPerDenomRequest;
    toAmino(message: UpcomingGaugesPerDenomRequest): UpcomingGaugesPerDenomRequestAmino;
    fromAminoMsg(object: UpcomingGaugesPerDenomRequestAminoMsg): UpcomingGaugesPerDenomRequest;
    toAminoMsg(message: UpcomingGaugesPerDenomRequest): UpcomingGaugesPerDenomRequestAminoMsg;
    fromProtoMsg(message: UpcomingGaugesPerDenomRequestProtoMsg): UpcomingGaugesPerDenomRequest;
    toProto(message: UpcomingGaugesPerDenomRequest): Uint8Array;
    toProtoMsg(message: UpcomingGaugesPerDenomRequest): UpcomingGaugesPerDenomRequestProtoMsg;
};
export declare const UpcomingGaugesPerDenomResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is UpcomingGaugesPerDenomResponse;
    isSDK(o: any): o is UpcomingGaugesPerDenomResponseSDKType;
    isAmino(o: any): o is UpcomingGaugesPerDenomResponseAmino;
    encode(message: UpcomingGaugesPerDenomResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UpcomingGaugesPerDenomResponse;
    fromJSON(object: any): UpcomingGaugesPerDenomResponse;
    toJSON(message: UpcomingGaugesPerDenomResponse): unknown;
    fromPartial(object: DeepPartial<UpcomingGaugesPerDenomResponse>): UpcomingGaugesPerDenomResponse;
    fromSDK(object: UpcomingGaugesPerDenomResponseSDKType): UpcomingGaugesPerDenomResponse;
    toSDK(message: UpcomingGaugesPerDenomResponse): UpcomingGaugesPerDenomResponseSDKType;
    fromAmino(object: UpcomingGaugesPerDenomResponseAmino): UpcomingGaugesPerDenomResponse;
    toAmino(message: UpcomingGaugesPerDenomResponse): UpcomingGaugesPerDenomResponseAmino;
    fromAminoMsg(object: UpcomingGaugesPerDenomResponseAminoMsg): UpcomingGaugesPerDenomResponse;
    toAminoMsg(message: UpcomingGaugesPerDenomResponse): UpcomingGaugesPerDenomResponseAminoMsg;
    fromProtoMsg(message: UpcomingGaugesPerDenomResponseProtoMsg): UpcomingGaugesPerDenomResponse;
    toProto(message: UpcomingGaugesPerDenomResponse): Uint8Array;
    toProtoMsg(message: UpcomingGaugesPerDenomResponse): UpcomingGaugesPerDenomResponseProtoMsg;
};
export declare const RewardsEstRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is RewardsEstRequest;
    isSDK(o: any): o is RewardsEstRequestSDKType;
    isAmino(o: any): o is RewardsEstRequestAmino;
    encode(message: RewardsEstRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RewardsEstRequest;
    fromJSON(object: any): RewardsEstRequest;
    toJSON(message: RewardsEstRequest): unknown;
    fromPartial(object: DeepPartial<RewardsEstRequest>): RewardsEstRequest;
    fromSDK(object: RewardsEstRequestSDKType): RewardsEstRequest;
    toSDK(message: RewardsEstRequest): RewardsEstRequestSDKType;
    fromAmino(object: RewardsEstRequestAmino): RewardsEstRequest;
    toAmino(message: RewardsEstRequest): RewardsEstRequestAmino;
    fromAminoMsg(object: RewardsEstRequestAminoMsg): RewardsEstRequest;
    toAminoMsg(message: RewardsEstRequest): RewardsEstRequestAminoMsg;
    fromProtoMsg(message: RewardsEstRequestProtoMsg): RewardsEstRequest;
    toProto(message: RewardsEstRequest): Uint8Array;
    toProtoMsg(message: RewardsEstRequest): RewardsEstRequestProtoMsg;
};
export declare const RewardsEstResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is RewardsEstResponse;
    isSDK(o: any): o is RewardsEstResponseSDKType;
    isAmino(o: any): o is RewardsEstResponseAmino;
    encode(message: RewardsEstResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RewardsEstResponse;
    fromJSON(object: any): RewardsEstResponse;
    toJSON(message: RewardsEstResponse): unknown;
    fromPartial(object: DeepPartial<RewardsEstResponse>): RewardsEstResponse;
    fromSDK(object: RewardsEstResponseSDKType): RewardsEstResponse;
    toSDK(message: RewardsEstResponse): RewardsEstResponseSDKType;
    fromAmino(object: RewardsEstResponseAmino): RewardsEstResponse;
    toAmino(message: RewardsEstResponse): RewardsEstResponseAmino;
    fromAminoMsg(object: RewardsEstResponseAminoMsg): RewardsEstResponse;
    toAminoMsg(message: RewardsEstResponse): RewardsEstResponseAminoMsg;
    fromProtoMsg(message: RewardsEstResponseProtoMsg): RewardsEstResponse;
    toProto(message: RewardsEstResponse): Uint8Array;
    toProtoMsg(message: RewardsEstResponse): RewardsEstResponseProtoMsg;
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
