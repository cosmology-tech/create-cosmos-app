import { ClaimsRecordAddress, ClaimsRecordAddressAmino, ClaimsRecordAddressSDKType } from "./claims";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, toTimestamp, fromTimestamp } from "../../../helpers";
export const protobufPackage = "evmos.claims.v1";
/** GenesisState define the claims module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params?: Params;
  /** list of claim records with the corresponding airdrop recipient */
  claimsRecords: ClaimsRecordAddress[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/evmos.claims.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState define the claims module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of the module. */
  params?: ParamsAmino;
  /** list of claim records with the corresponding airdrop recipient */
  claims_records: ClaimsRecordAddressAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/evmos.claims.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState define the claims module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  claims_records: ClaimsRecordAddressSDKType[];
}
/** Params defines the claims module's parameters. */
export interface Params {
  /** enable claiming process */
  enableClaims: boolean;
  /** timestamp of the airdrop start */
  airdropStartTime?: Date;
  /** duration until decay of claimable tokens begin */
  durationUntilDecay?: Duration;
  /** duration of the token claim decay period */
  durationOfDecay?: Duration;
  /** denom of claimable coin */
  claimsDenom: string;
  /**
   * list of authorized channel identifiers that can perform address
   * attestations via IBC.
   */
  authorizedChannels: string[];
  /** list of channel identifiers from EVM compatible chains */
  evmChannels: string[];
}
export interface ParamsProtoMsg {
  typeUrl: "/evmos.claims.v1.Params";
  value: Uint8Array;
}
/** Params defines the claims module's parameters. */
export interface ParamsAmino {
  /** enable claiming process */
  enable_claims: boolean;
  /** timestamp of the airdrop start */
  airdrop_start_time?: Date;
  /** duration until decay of claimable tokens begin */
  duration_until_decay?: DurationAmino;
  /** duration of the token claim decay period */
  duration_of_decay?: DurationAmino;
  /** denom of claimable coin */
  claims_denom: string;
  /**
   * list of authorized channel identifiers that can perform address
   * attestations via IBC.
   */
  authorized_channels: string[];
  /** list of channel identifiers from EVM compatible chains */
  evm_channels: string[];
}
export interface ParamsAminoMsg {
  type: "/evmos.claims.v1.Params";
  value: ParamsAmino;
}
/** Params defines the claims module's parameters. */
export interface ParamsSDKType {
  enable_claims: boolean;
  airdrop_start_time?: Date;
  duration_until_decay?: DurationSDKType;
  duration_of_decay?: DurationSDKType;
  claims_denom: string;
  authorized_channels: string[];
  evm_channels: string[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    claimsRecords: []
  };
}
export const GenesisState = {
  typeUrl: "/evmos.claims.v1.GenesisState",
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.claimsRecords) {
      ClaimsRecordAddress.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.claimsRecords.push(ClaimsRecordAddress.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      claimsRecords: Array.isArray(object?.claimsRecords) ? object.claimsRecords.map((e: any) => ClaimsRecordAddress.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.claimsRecords) {
      obj.claimsRecords = message.claimsRecords.map(e => e ? ClaimsRecordAddress.toJSON(e) : undefined);
    } else {
      obj.claimsRecords = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.claimsRecords = object.claimsRecords?.map(e => ClaimsRecordAddress.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined,
      claimsRecords: Array.isArray(object?.claims_records) ? object.claims_records.map((e: any) => ClaimsRecordAddress.fromSDK(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    if (message.claimsRecords) {
      obj.claims_records = message.claimsRecords.map(e => e ? ClaimsRecordAddress.toSDK(e) : undefined);
    } else {
      obj.claims_records = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      claimsRecords: Array.isArray(object?.claims_records) ? object.claims_records.map((e: any) => ClaimsRecordAddress.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.claimsRecords) {
      obj.claims_records = message.claimsRecords.map(e => e ? ClaimsRecordAddress.toAmino(e) : undefined);
    } else {
      obj.claims_records = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/evmos.claims.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    enableClaims: false,
    airdropStartTime: undefined,
    durationUntilDecay: undefined,
    durationOfDecay: undefined,
    claimsDenom: "",
    authorizedChannels: [],
    evmChannels: []
  };
}
export const Params = {
  typeUrl: "/evmos.claims.v1.Params",
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enableClaims === true) {
      writer.uint32(8).bool(message.enableClaims);
    }
    if (message.airdropStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.airdropStartTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.durationUntilDecay !== undefined) {
      Duration.encode(message.durationUntilDecay, writer.uint32(26).fork()).ldelim();
    }
    if (message.durationOfDecay !== undefined) {
      Duration.encode(message.durationOfDecay, writer.uint32(34).fork()).ldelim();
    }
    if (message.claimsDenom !== "") {
      writer.uint32(42).string(message.claimsDenom);
    }
    for (const v of message.authorizedChannels) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.evmChannels) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enableClaims = reader.bool();
          break;
        case 2:
          message.airdropStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.durationUntilDecay = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.durationOfDecay = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.claimsDenom = reader.string();
          break;
        case 6:
          message.authorizedChannels.push(reader.string());
          break;
        case 7:
          message.evmChannels.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      enableClaims: isSet(object.enableClaims) ? Boolean(object.enableClaims) : false,
      airdropStartTime: isSet(object.airdropStartTime) ? new Date(object.airdropStartTime) : undefined,
      durationUntilDecay: isSet(object.durationUntilDecay) ? Duration.fromJSON(object.durationUntilDecay) : undefined,
      durationOfDecay: isSet(object.durationOfDecay) ? Duration.fromJSON(object.durationOfDecay) : undefined,
      claimsDenom: isSet(object.claimsDenom) ? String(object.claimsDenom) : "",
      authorizedChannels: Array.isArray(object?.authorizedChannels) ? object.authorizedChannels.map((e: any) => String(e)) : [],
      evmChannels: Array.isArray(object?.evmChannels) ? object.evmChannels.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.enableClaims !== undefined && (obj.enableClaims = message.enableClaims);
    message.airdropStartTime !== undefined && (obj.airdropStartTime = message.airdropStartTime.toISOString());
    message.durationUntilDecay !== undefined && (obj.durationUntilDecay = message.durationUntilDecay ? Duration.toJSON(message.durationUntilDecay) : undefined);
    message.durationOfDecay !== undefined && (obj.durationOfDecay = message.durationOfDecay ? Duration.toJSON(message.durationOfDecay) : undefined);
    message.claimsDenom !== undefined && (obj.claimsDenom = message.claimsDenom);
    if (message.authorizedChannels) {
      obj.authorizedChannels = message.authorizedChannels.map(e => e);
    } else {
      obj.authorizedChannels = [];
    }
    if (message.evmChannels) {
      obj.evmChannels = message.evmChannels.map(e => e);
    } else {
      obj.evmChannels = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.enableClaims = object.enableClaims ?? false;
    message.airdropStartTime = object.airdropStartTime ?? undefined;
    message.durationUntilDecay = object.durationUntilDecay !== undefined && object.durationUntilDecay !== null ? Duration.fromPartial(object.durationUntilDecay) : undefined;
    message.durationOfDecay = object.durationOfDecay !== undefined && object.durationOfDecay !== null ? Duration.fromPartial(object.durationOfDecay) : undefined;
    message.claimsDenom = object.claimsDenom ?? "";
    message.authorizedChannels = object.authorizedChannels?.map(e => e) || [];
    message.evmChannels = object.evmChannels?.map(e => e) || [];
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      enableClaims: object?.enable_claims,
      airdropStartTime: object.airdrop_start_time ?? undefined,
      durationUntilDecay: object.duration_until_decay ? Duration.fromSDK(object.duration_until_decay) : undefined,
      durationOfDecay: object.duration_of_decay ? Duration.fromSDK(object.duration_of_decay) : undefined,
      claimsDenom: object?.claims_denom,
      authorizedChannels: Array.isArray(object?.authorized_channels) ? object.authorized_channels.map((e: any) => e) : [],
      evmChannels: Array.isArray(object?.evm_channels) ? object.evm_channels.map((e: any) => e) : []
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.enable_claims = message.enableClaims;
    message.airdropStartTime !== undefined && (obj.airdrop_start_time = message.airdropStartTime ?? undefined);
    message.durationUntilDecay !== undefined && (obj.duration_until_decay = message.durationUntilDecay ? Duration.toSDK(message.durationUntilDecay) : undefined);
    message.durationOfDecay !== undefined && (obj.duration_of_decay = message.durationOfDecay ? Duration.toSDK(message.durationOfDecay) : undefined);
    obj.claims_denom = message.claimsDenom;
    if (message.authorizedChannels) {
      obj.authorized_channels = message.authorizedChannels.map(e => e);
    } else {
      obj.authorized_channels = [];
    }
    if (message.evmChannels) {
      obj.evm_channels = message.evmChannels.map(e => e);
    } else {
      obj.evm_channels = [];
    }
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      enableClaims: object.enable_claims,
      airdropStartTime: object?.airdrop_start_time ? Timestamp.fromAmino(object.airdrop_start_time) : undefined,
      durationUntilDecay: object?.duration_until_decay ? Duration.fromAmino(object.duration_until_decay) : undefined,
      durationOfDecay: object?.duration_of_decay ? Duration.fromAmino(object.duration_of_decay) : undefined,
      claimsDenom: object.claims_denom,
      authorizedChannels: Array.isArray(object?.authorized_channels) ? object.authorized_channels.map((e: any) => e) : [],
      evmChannels: Array.isArray(object?.evm_channels) ? object.evm_channels.map((e: any) => e) : []
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.enable_claims = message.enableClaims;
    obj.airdrop_start_time = message.airdropStartTime ? Timestamp.toAmino(message.airdropStartTime) : undefined;
    obj.duration_until_decay = message.durationUntilDecay ? Duration.toAmino(message.durationUntilDecay) : undefined;
    obj.duration_of_decay = message.durationOfDecay ? Duration.toAmino(message.durationOfDecay) : undefined;
    obj.claims_denom = message.claimsDenom;
    if (message.authorizedChannels) {
      obj.authorized_channels = message.authorizedChannels.map(e => e);
    } else {
      obj.authorized_channels = [];
    }
    if (message.evmChannels) {
      obj.evm_channels = message.evmChannels.map(e => e);
    } else {
      obj.evm_channels = [];
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/evmos.claims.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};