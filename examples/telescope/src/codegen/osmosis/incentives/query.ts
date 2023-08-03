import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Gauge, GaugeSDKType } from "./gauge";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface ModuleToDistributeCoinsRequest {}
export interface ModuleToDistributeCoinsRequestSDKType {}
export interface ModuleToDistributeCoinsResponse {
  /** Coins that have yet to be distributed */
  coins: Coin[];
}
export interface ModuleToDistributeCoinsResponseSDKType {
  coins: CoinSDKType[];
}
export interface GaugeByIDRequest {
  /** Gague ID being queried */
  id: bigint;
}
export interface GaugeByIDRequestSDKType {
  id: bigint;
}
export interface GaugeByIDResponse {
  /** Gauge that corresponds to provided gague ID */
  gauge: Gauge;
}
export interface GaugeByIDResponseSDKType {
  gauge: GaugeSDKType;
}
export interface GaugesRequest {
  /** Pagination defines pagination for the request */
  pagination: PageRequest;
}
export interface GaugesRequestSDKType {
  pagination: PageRequestSDKType;
}
export interface GaugesResponse {
  /** Upcoming and active gauges */
  data: Gauge[];
  /** Pagination defines pagination for the response */
  pagination: PageResponse;
}
export interface GaugesResponseSDKType {
  data: GaugeSDKType[];
  pagination: PageResponseSDKType;
}
export interface ActiveGaugesRequest {
  /** Pagination defines pagination for the request */
  pagination: PageRequest;
}
export interface ActiveGaugesRequestSDKType {
  pagination: PageRequestSDKType;
}
export interface ActiveGaugesResponse {
  /** Active gagues only */
  data: Gauge[];
  /** Pagination defines pagination for the response */
  pagination: PageResponse;
}
export interface ActiveGaugesResponseSDKType {
  data: GaugeSDKType[];
  pagination: PageResponseSDKType;
}
export interface ActiveGaugesPerDenomRequest {
  /** Desired denom when querying active gagues */
  denom: string;
  /** Pagination defines pagination for the request */
  pagination: PageRequest;
}
export interface ActiveGaugesPerDenomRequestSDKType {
  denom: string;
  pagination: PageRequestSDKType;
}
export interface ActiveGaugesPerDenomResponse {
  /** Active gagues that match denom in query */
  data: Gauge[];
  /** Pagination defines pagination for the response */
  pagination: PageResponse;
}
export interface ActiveGaugesPerDenomResponseSDKType {
  data: GaugeSDKType[];
  pagination: PageResponseSDKType;
}
export interface UpcomingGaugesRequest {
  /** Pagination defines pagination for the request */
  pagination: PageRequest;
}
export interface UpcomingGaugesRequestSDKType {
  pagination: PageRequestSDKType;
}
export interface UpcomingGaugesResponse {
  /** Gauges whose distribution is upcoming */
  data: Gauge[];
  /** Pagination defines pagination for the response */
  pagination: PageResponse;
}
export interface UpcomingGaugesResponseSDKType {
  data: GaugeSDKType[];
  pagination: PageResponseSDKType;
}
export interface UpcomingGaugesPerDenomRequest {
  /** Filter for upcoming gagues that match specific denom */
  denom: string;
  /** Pagination defines pagination for the request */
  pagination: PageRequest;
}
export interface UpcomingGaugesPerDenomRequestSDKType {
  denom: string;
  pagination: PageRequestSDKType;
}
export interface UpcomingGaugesPerDenomResponse {
  /** Upcoming gagues that match denom in query */
  upcomingGauges: Gauge[];
  /** Pagination defines pagination for the response */
  pagination: PageResponse;
}
export interface UpcomingGaugesPerDenomResponseSDKType {
  upcoming_gauges: GaugeSDKType[];
  pagination: PageResponseSDKType;
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
export interface RewardsEstResponseSDKType {
  coins: CoinSDKType[];
}
export interface QueryLockableDurationsRequest {}
export interface QueryLockableDurationsRequestSDKType {}
export interface QueryLockableDurationsResponse {
  /** Time durations that users can lock coins for in order to recieve rewards */
  lockableDurations: Duration[];
}
export interface QueryLockableDurationsResponseSDKType {
  lockable_durations: DurationSDKType[];
}
function createBaseModuleToDistributeCoinsRequest(): ModuleToDistributeCoinsRequest {
  return {};
}
export const ModuleToDistributeCoinsRequest = {
  encode(_: ModuleToDistributeCoinsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ModuleToDistributeCoinsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleToDistributeCoinsRequest();
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
  fromJSON(_: any): ModuleToDistributeCoinsRequest {
    return {};
  },
  toJSON(_: ModuleToDistributeCoinsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<ModuleToDistributeCoinsRequest>): ModuleToDistributeCoinsRequest {
    const message = createBaseModuleToDistributeCoinsRequest();
    return message;
  }
};
function createBaseModuleToDistributeCoinsResponse(): ModuleToDistributeCoinsResponse {
  return {
    coins: []
  };
}
export const ModuleToDistributeCoinsResponse = {
  encode(message: ModuleToDistributeCoinsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ModuleToDistributeCoinsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleToDistributeCoinsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ModuleToDistributeCoinsResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: ModuleToDistributeCoinsResponse): unknown {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ModuleToDistributeCoinsResponse>): ModuleToDistributeCoinsResponse {
    const message = createBaseModuleToDistributeCoinsResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseGaugeByIDRequest(): GaugeByIDRequest {
  return {
    id: BigInt(0)
  };
}
export const GaugeByIDRequest = {
  encode(message: GaugeByIDRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GaugeByIDRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGaugeByIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GaugeByIDRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  toJSON(message: GaugeByIDRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<GaugeByIDRequest>): GaugeByIDRequest {
    const message = createBaseGaugeByIDRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  }
};
function createBaseGaugeByIDResponse(): GaugeByIDResponse {
  return {
    gauge: Gauge.fromPartial({})
  };
}
export const GaugeByIDResponse = {
  encode(message: GaugeByIDResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gauge !== undefined) {
      Gauge.encode(message.gauge, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GaugeByIDResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGaugeByIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gauge = Gauge.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GaugeByIDResponse {
    return {
      gauge: isSet(object.gauge) ? Gauge.fromJSON(object.gauge) : undefined
    };
  },
  toJSON(message: GaugeByIDResponse): unknown {
    const obj: any = {};
    message.gauge !== undefined && (obj.gauge = message.gauge ? Gauge.toJSON(message.gauge) : undefined);
    return obj;
  },
  fromPartial(object: Partial<GaugeByIDResponse>): GaugeByIDResponse {
    const message = createBaseGaugeByIDResponse();
    message.gauge = object.gauge !== undefined && object.gauge !== null ? Gauge.fromPartial(object.gauge) : undefined;
    return message;
  }
};
function createBaseGaugesRequest(): GaugesRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const GaugesRequest = {
  encode(message: GaugesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GaugesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGaugesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GaugesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: GaugesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<GaugesRequest>): GaugesRequest {
    const message = createBaseGaugesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseGaugesResponse(): GaugesResponse {
  return {
    data: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const GaugesResponse = {
  encode(message: GaugesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.data) {
      Gauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GaugesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGaugesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(Gauge.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GaugesResponse {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => Gauge.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: GaugesResponse): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? Gauge.toJSON(e) : undefined);
    } else {
      obj.data = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<GaugesResponse>): GaugesResponse {
    const message = createBaseGaugesResponse();
    message.data = object.data?.map(e => Gauge.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseActiveGaugesRequest(): ActiveGaugesRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const ActiveGaugesRequest = {
  encode(message: ActiveGaugesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ActiveGaugesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveGaugesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ActiveGaugesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: ActiveGaugesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ActiveGaugesRequest>): ActiveGaugesRequest {
    const message = createBaseActiveGaugesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseActiveGaugesResponse(): ActiveGaugesResponse {
  return {
    data: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const ActiveGaugesResponse = {
  encode(message: ActiveGaugesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.data) {
      Gauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ActiveGaugesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveGaugesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(Gauge.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ActiveGaugesResponse {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => Gauge.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: ActiveGaugesResponse): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? Gauge.toJSON(e) : undefined);
    } else {
      obj.data = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ActiveGaugesResponse>): ActiveGaugesResponse {
    const message = createBaseActiveGaugesResponse();
    message.data = object.data?.map(e => Gauge.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseActiveGaugesPerDenomRequest(): ActiveGaugesPerDenomRequest {
  return {
    denom: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const ActiveGaugesPerDenomRequest = {
  encode(message: ActiveGaugesPerDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ActiveGaugesPerDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveGaugesPerDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ActiveGaugesPerDenomRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: ActiveGaugesPerDenomRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ActiveGaugesPerDenomRequest>): ActiveGaugesPerDenomRequest {
    const message = createBaseActiveGaugesPerDenomRequest();
    message.denom = object.denom ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseActiveGaugesPerDenomResponse(): ActiveGaugesPerDenomResponse {
  return {
    data: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const ActiveGaugesPerDenomResponse = {
  encode(message: ActiveGaugesPerDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.data) {
      Gauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ActiveGaugesPerDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveGaugesPerDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(Gauge.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ActiveGaugesPerDenomResponse {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => Gauge.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: ActiveGaugesPerDenomResponse): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? Gauge.toJSON(e) : undefined);
    } else {
      obj.data = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ActiveGaugesPerDenomResponse>): ActiveGaugesPerDenomResponse {
    const message = createBaseActiveGaugesPerDenomResponse();
    message.data = object.data?.map(e => Gauge.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseUpcomingGaugesRequest(): UpcomingGaugesRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const UpcomingGaugesRequest = {
  encode(message: UpcomingGaugesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpcomingGaugesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpcomingGaugesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpcomingGaugesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: UpcomingGaugesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<UpcomingGaugesRequest>): UpcomingGaugesRequest {
    const message = createBaseUpcomingGaugesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseUpcomingGaugesResponse(): UpcomingGaugesResponse {
  return {
    data: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const UpcomingGaugesResponse = {
  encode(message: UpcomingGaugesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.data) {
      Gauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpcomingGaugesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpcomingGaugesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(Gauge.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpcomingGaugesResponse {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => Gauge.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: UpcomingGaugesResponse): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? Gauge.toJSON(e) : undefined);
    } else {
      obj.data = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<UpcomingGaugesResponse>): UpcomingGaugesResponse {
    const message = createBaseUpcomingGaugesResponse();
    message.data = object.data?.map(e => Gauge.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseUpcomingGaugesPerDenomRequest(): UpcomingGaugesPerDenomRequest {
  return {
    denom: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const UpcomingGaugesPerDenomRequest = {
  encode(message: UpcomingGaugesPerDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpcomingGaugesPerDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpcomingGaugesPerDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpcomingGaugesPerDenomRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: UpcomingGaugesPerDenomRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<UpcomingGaugesPerDenomRequest>): UpcomingGaugesPerDenomRequest {
    const message = createBaseUpcomingGaugesPerDenomRequest();
    message.denom = object.denom ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseUpcomingGaugesPerDenomResponse(): UpcomingGaugesPerDenomResponse {
  return {
    upcomingGauges: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const UpcomingGaugesPerDenomResponse = {
  encode(message: UpcomingGaugesPerDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.upcomingGauges) {
      Gauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpcomingGaugesPerDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpcomingGaugesPerDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upcomingGauges.push(Gauge.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpcomingGaugesPerDenomResponse {
    return {
      upcomingGauges: Array.isArray(object?.upcomingGauges) ? object.upcomingGauges.map((e: any) => Gauge.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: UpcomingGaugesPerDenomResponse): unknown {
    const obj: any = {};
    if (message.upcomingGauges) {
      obj.upcomingGauges = message.upcomingGauges.map(e => e ? Gauge.toJSON(e) : undefined);
    } else {
      obj.upcomingGauges = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<UpcomingGaugesPerDenomResponse>): UpcomingGaugesPerDenomResponse {
    const message = createBaseUpcomingGaugesPerDenomResponse();
    message.upcomingGauges = object.upcomingGauges?.map(e => Gauge.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseRewardsEstRequest(): RewardsEstRequest {
  return {
    owner: "",
    lockIds: [],
    endEpoch: BigInt(0)
  };
}
export const RewardsEstRequest = {
  encode(message: RewardsEstRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    writer.uint32(18).fork();
    for (const v of message.lockIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.endEpoch !== BigInt(0)) {
      writer.uint32(24).int64(message.endEpoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RewardsEstRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardsEstRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.lockIds.push(reader.uint64());
            }
          } else {
            message.lockIds.push(reader.uint64());
          }
          break;
        case 3:
          message.endEpoch = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RewardsEstRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      lockIds: Array.isArray(object?.lockIds) ? object.lockIds.map((e: any) => BigInt(e.toString())) : [],
      endEpoch: isSet(object.endEpoch) ? BigInt(object.endEpoch.toString()) : BigInt(0)
    };
  },
  toJSON(message: RewardsEstRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    if (message.lockIds) {
      obj.lockIds = message.lockIds.map(e => (e || BigInt(0)).toString());
    } else {
      obj.lockIds = [];
    }
    message.endEpoch !== undefined && (obj.endEpoch = (message.endEpoch || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<RewardsEstRequest>): RewardsEstRequest {
    const message = createBaseRewardsEstRequest();
    message.owner = object.owner ?? "";
    message.lockIds = object.lockIds?.map(e => BigInt(e.toString())) || [];
    message.endEpoch = object.endEpoch !== undefined && object.endEpoch !== null ? BigInt(object.endEpoch.toString()) : BigInt(0);
    return message;
  }
};
function createBaseRewardsEstResponse(): RewardsEstResponse {
  return {
    coins: []
  };
}
export const RewardsEstResponse = {
  encode(message: RewardsEstResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RewardsEstResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardsEstResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RewardsEstResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: RewardsEstResponse): unknown {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromPartial(object: Partial<RewardsEstResponse>): RewardsEstResponse {
    const message = createBaseRewardsEstResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryLockableDurationsRequest(): QueryLockableDurationsRequest {
  return {};
}
export const QueryLockableDurationsRequest = {
  encode(_: QueryLockableDurationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLockableDurationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockableDurationsRequest();
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
  fromJSON(_: any): QueryLockableDurationsRequest {
    return {};
  },
  toJSON(_: QueryLockableDurationsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryLockableDurationsRequest>): QueryLockableDurationsRequest {
    const message = createBaseQueryLockableDurationsRequest();
    return message;
  }
};
function createBaseQueryLockableDurationsResponse(): QueryLockableDurationsResponse {
  return {
    lockableDurations: []
  };
}
export const QueryLockableDurationsResponse = {
  encode(message: QueryLockableDurationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.lockableDurations) {
      Duration.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLockableDurationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockableDurationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockableDurations.push(Duration.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLockableDurationsResponse {
    return {
      lockableDurations: Array.isArray(object?.lockableDurations) ? object.lockableDurations.map((e: any) => Duration.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryLockableDurationsResponse): unknown {
    const obj: any = {};
    if (message.lockableDurations) {
      obj.lockableDurations = message.lockableDurations.map(e => e ? Duration.toJSON(e) : undefined);
    } else {
      obj.lockableDurations = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryLockableDurationsResponse>): QueryLockableDurationsResponse {
    const message = createBaseQueryLockableDurationsResponse();
    message.lockableDurations = object.lockableDurations?.map(e => Duration.fromPartial(e)) || [];
    return message;
  }
};