import { Params, ParamsAmino, ParamsSDKType, ValidatorSigningInfo, ValidatorSigningInfoAmino, ValidatorSigningInfoSDKType } from "./slashing";
import { Long, isSet, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.slashing.v1beta1";
/** GenesisState defines the slashing module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of related to deposit. */
  params?: Params;
  /**
   * signing_infos represents a map between validator addresses and their
   * signing infos.
   */
  signingInfos: SigningInfo[];
  /**
   * missed_blocks represents a map between validator addresses and their
   * missed blocks.
   */
  missedBlocks: ValidatorMissedBlocks[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the slashing module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the paramaters of related to deposit. */
  params?: ParamsAmino;
  /**
   * signing_infos represents a map between validator addresses and their
   * signing infos.
   */
  signing_infos: SigningInfoAmino[];
  /**
   * missed_blocks represents a map between validator addresses and their
   * missed blocks.
   */
  missed_blocks: ValidatorMissedBlocksAmino[];
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the slashing module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  signing_infos: SigningInfoSDKType[];
  missed_blocks: ValidatorMissedBlocksSDKType[];
}
/** SigningInfo stores validator signing info of corresponding address. */
export interface SigningInfo {
  /** address is the validator address. */
  address: string;
  /** validator_signing_info represents the signing info of this validator. */
  validatorSigningInfo?: ValidatorSigningInfo;
}
export interface SigningInfoProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.SigningInfo";
  value: Uint8Array;
}
/** SigningInfo stores validator signing info of corresponding address. */
export interface SigningInfoAmino {
  /** address is the validator address. */
  address: string;
  /** validator_signing_info represents the signing info of this validator. */
  validator_signing_info?: ValidatorSigningInfoAmino;
}
export interface SigningInfoAminoMsg {
  type: "cosmos-sdk/SigningInfo";
  value: SigningInfoAmino;
}
/** SigningInfo stores validator signing info of corresponding address. */
export interface SigningInfoSDKType {
  address: string;
  validator_signing_info?: ValidatorSigningInfoSDKType;
}
/**
 * ValidatorMissedBlocks contains array of missed blocks of corresponding
 * address.
 */
export interface ValidatorMissedBlocks {
  /** address is the validator address. */
  address: string;
  /** missed_blocks is an array of missed blocks by the validator. */
  missedBlocks: MissedBlock[];
}
export interface ValidatorMissedBlocksProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlocks";
  value: Uint8Array;
}
/**
 * ValidatorMissedBlocks contains array of missed blocks of corresponding
 * address.
 */
export interface ValidatorMissedBlocksAmino {
  /** address is the validator address. */
  address: string;
  /** missed_blocks is an array of missed blocks by the validator. */
  missed_blocks: MissedBlockAmino[];
}
export interface ValidatorMissedBlocksAminoMsg {
  type: "cosmos-sdk/ValidatorMissedBlocks";
  value: ValidatorMissedBlocksAmino;
}
/**
 * ValidatorMissedBlocks contains array of missed blocks of corresponding
 * address.
 */
export interface ValidatorMissedBlocksSDKType {
  address: string;
  missed_blocks: MissedBlockSDKType[];
}
/** MissedBlock contains height and missed status as boolean. */
export interface MissedBlock {
  /** index is the height at which the block was missed. */
  index: Long;
  /** missed is the missed status. */
  missed: boolean;
}
export interface MissedBlockProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.MissedBlock";
  value: Uint8Array;
}
/** MissedBlock contains height and missed status as boolean. */
export interface MissedBlockAmino {
  /** index is the height at which the block was missed. */
  index: string;
  /** missed is the missed status. */
  missed: boolean;
}
export interface MissedBlockAminoMsg {
  type: "cosmos-sdk/MissedBlock";
  value: MissedBlockAmino;
}
/** MissedBlock contains height and missed status as boolean. */
export interface MissedBlockSDKType {
  index: Long;
  missed: boolean;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    signingInfos: [],
    missedBlocks: []
  };
}
export const GenesisState = {
  typeUrl: "/cosmos.slashing.v1beta1.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.signingInfos) {
      SigningInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.missedBlocks) {
      ValidatorMissedBlocks.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.signingInfos.push(SigningInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.missedBlocks.push(ValidatorMissedBlocks.decode(reader, reader.uint32()));
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
      signingInfos: Array.isArray(object?.signingInfos) ? object.signingInfos.map((e: any) => SigningInfo.fromJSON(e)) : [],
      missedBlocks: Array.isArray(object?.missedBlocks) ? object.missedBlocks.map((e: any) => ValidatorMissedBlocks.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.signingInfos) {
      obj.signingInfos = message.signingInfos.map(e => e ? SigningInfo.toJSON(e) : undefined);
    } else {
      obj.signingInfos = [];
    }
    if (message.missedBlocks) {
      obj.missedBlocks = message.missedBlocks.map(e => e ? ValidatorMissedBlocks.toJSON(e) : undefined);
    } else {
      obj.missedBlocks = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.signingInfos = object.signingInfos?.map(e => SigningInfo.fromPartial(e)) || [];
    message.missedBlocks = object.missedBlocks?.map(e => ValidatorMissedBlocks.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined,
      signingInfos: Array.isArray(object?.signing_infos) ? object.signing_infos.map((e: any) => SigningInfo.fromSDK(e)) : [],
      missedBlocks: Array.isArray(object?.missed_blocks) ? object.missed_blocks.map((e: any) => ValidatorMissedBlocks.fromSDK(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    if (message.signingInfos) {
      obj.signing_infos = message.signingInfos.map(e => e ? SigningInfo.toSDK(e) : undefined);
    } else {
      obj.signing_infos = [];
    }
    if (message.missedBlocks) {
      obj.missed_blocks = message.missedBlocks.map(e => e ? ValidatorMissedBlocks.toSDK(e) : undefined);
    } else {
      obj.missed_blocks = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      signingInfos: Array.isArray(object?.signing_infos) ? object.signing_infos.map((e: any) => SigningInfo.fromAmino(e)) : [],
      missedBlocks: Array.isArray(object?.missed_blocks) ? object.missed_blocks.map((e: any) => ValidatorMissedBlocks.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.signingInfos) {
      obj.signing_infos = message.signingInfos.map(e => e ? SigningInfo.toAmino(e) : undefined);
    } else {
      obj.signing_infos = [];
    }
    if (message.missedBlocks) {
      obj.missed_blocks = message.missedBlocks.map(e => e ? ValidatorMissedBlocks.toAmino(e) : undefined);
    } else {
      obj.missed_blocks = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseSigningInfo(): SigningInfo {
  return {
    address: "",
    validatorSigningInfo: undefined
  };
}
export const SigningInfo = {
  typeUrl: "/cosmos.slashing.v1beta1.SigningInfo",
  aminoType: "cosmos-sdk/SigningInfo",
  encode(message: SigningInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.validatorSigningInfo !== undefined) {
      ValidatorSigningInfo.encode(message.validatorSigningInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SigningInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigningInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.validatorSigningInfo = ValidatorSigningInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SigningInfo {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      validatorSigningInfo: isSet(object.validatorSigningInfo) ? ValidatorSigningInfo.fromJSON(object.validatorSigningInfo) : undefined
    };
  },
  toJSON(message: SigningInfo): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.validatorSigningInfo !== undefined && (obj.validatorSigningInfo = message.validatorSigningInfo ? ValidatorSigningInfo.toJSON(message.validatorSigningInfo) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<SigningInfo>): SigningInfo {
    const message = createBaseSigningInfo();
    message.address = object.address ?? "";
    message.validatorSigningInfo = object.validatorSigningInfo !== undefined && object.validatorSigningInfo !== null ? ValidatorSigningInfo.fromPartial(object.validatorSigningInfo) : undefined;
    return message;
  },
  fromSDK(object: SigningInfoSDKType): SigningInfo {
    return {
      address: object?.address,
      validatorSigningInfo: object.validator_signing_info ? ValidatorSigningInfo.fromSDK(object.validator_signing_info) : undefined
    };
  },
  toSDK(message: SigningInfo): SigningInfoSDKType {
    const obj: any = {};
    obj.address = message.address;
    message.validatorSigningInfo !== undefined && (obj.validator_signing_info = message.validatorSigningInfo ? ValidatorSigningInfo.toSDK(message.validatorSigningInfo) : undefined);
    return obj;
  },
  fromAmino(object: SigningInfoAmino): SigningInfo {
    return {
      address: object.address,
      validatorSigningInfo: object?.validator_signing_info ? ValidatorSigningInfo.fromAmino(object.validator_signing_info) : undefined
    };
  },
  toAmino(message: SigningInfo): SigningInfoAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.validator_signing_info = message.validatorSigningInfo ? ValidatorSigningInfo.toAmino(message.validatorSigningInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: SigningInfoAminoMsg): SigningInfo {
    return SigningInfo.fromAmino(object.value);
  },
  toAminoMsg(message: SigningInfo): SigningInfoAminoMsg {
    return {
      type: "cosmos-sdk/SigningInfo",
      value: SigningInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: SigningInfoProtoMsg): SigningInfo {
    return SigningInfo.decode(message.value);
  },
  toProto(message: SigningInfo): Uint8Array {
    return SigningInfo.encode(message).finish();
  },
  toProtoMsg(message: SigningInfo): SigningInfoProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.SigningInfo",
      value: SigningInfo.encode(message).finish()
    };
  }
};
function createBaseValidatorMissedBlocks(): ValidatorMissedBlocks {
  return {
    address: "",
    missedBlocks: []
  };
}
export const ValidatorMissedBlocks = {
  typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlocks",
  aminoType: "cosmos-sdk/ValidatorMissedBlocks",
  encode(message: ValidatorMissedBlocks, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.missedBlocks) {
      MissedBlock.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorMissedBlocks {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorMissedBlocks();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.missedBlocks.push(MissedBlock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorMissedBlocks {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      missedBlocks: Array.isArray(object?.missedBlocks) ? object.missedBlocks.map((e: any) => MissedBlock.fromJSON(e)) : []
    };
  },
  toJSON(message: ValidatorMissedBlocks): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.missedBlocks) {
      obj.missedBlocks = message.missedBlocks.map(e => e ? MissedBlock.toJSON(e) : undefined);
    } else {
      obj.missedBlocks = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorMissedBlocks>): ValidatorMissedBlocks {
    const message = createBaseValidatorMissedBlocks();
    message.address = object.address ?? "";
    message.missedBlocks = object.missedBlocks?.map(e => MissedBlock.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ValidatorMissedBlocksSDKType): ValidatorMissedBlocks {
    return {
      address: object?.address,
      missedBlocks: Array.isArray(object?.missed_blocks) ? object.missed_blocks.map((e: any) => MissedBlock.fromSDK(e)) : []
    };
  },
  toSDK(message: ValidatorMissedBlocks): ValidatorMissedBlocksSDKType {
    const obj: any = {};
    obj.address = message.address;
    if (message.missedBlocks) {
      obj.missed_blocks = message.missedBlocks.map(e => e ? MissedBlock.toSDK(e) : undefined);
    } else {
      obj.missed_blocks = [];
    }
    return obj;
  },
  fromAmino(object: ValidatorMissedBlocksAmino): ValidatorMissedBlocks {
    return {
      address: object.address,
      missedBlocks: Array.isArray(object?.missed_blocks) ? object.missed_blocks.map((e: any) => MissedBlock.fromAmino(e)) : []
    };
  },
  toAmino(message: ValidatorMissedBlocks): ValidatorMissedBlocksAmino {
    const obj: any = {};
    obj.address = message.address;
    if (message.missedBlocks) {
      obj.missed_blocks = message.missedBlocks.map(e => e ? MissedBlock.toAmino(e) : undefined);
    } else {
      obj.missed_blocks = [];
    }
    return obj;
  },
  fromAminoMsg(object: ValidatorMissedBlocksAminoMsg): ValidatorMissedBlocks {
    return ValidatorMissedBlocks.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorMissedBlocks): ValidatorMissedBlocksAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorMissedBlocks",
      value: ValidatorMissedBlocks.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorMissedBlocksProtoMsg): ValidatorMissedBlocks {
    return ValidatorMissedBlocks.decode(message.value);
  },
  toProto(message: ValidatorMissedBlocks): Uint8Array {
    return ValidatorMissedBlocks.encode(message).finish();
  },
  toProtoMsg(message: ValidatorMissedBlocks): ValidatorMissedBlocksProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlocks",
      value: ValidatorMissedBlocks.encode(message).finish()
    };
  }
};
function createBaseMissedBlock(): MissedBlock {
  return {
    index: Long.ZERO,
    missed: false
  };
}
export const MissedBlock = {
  typeUrl: "/cosmos.slashing.v1beta1.MissedBlock",
  aminoType: "cosmos-sdk/MissedBlock",
  encode(message: MissedBlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.index.isZero()) {
      writer.uint32(8).int64(message.index);
    }
    if (message.missed === true) {
      writer.uint32(16).bool(message.missed);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MissedBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMissedBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = (reader.int64() as Long);
          break;
        case 2:
          message.missed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MissedBlock {
    return {
      index: isSet(object.index) ? Long.fromValue(object.index) : Long.ZERO,
      missed: isSet(object.missed) ? Boolean(object.missed) : false
    };
  },
  toJSON(message: MissedBlock): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = (message.index || Long.ZERO).toString());
    message.missed !== undefined && (obj.missed = message.missed);
    return obj;
  },
  fromPartial(object: DeepPartial<MissedBlock>): MissedBlock {
    const message = createBaseMissedBlock();
    message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.ZERO;
    message.missed = object.missed ?? false;
    return message;
  },
  fromSDK(object: MissedBlockSDKType): MissedBlock {
    return {
      index: object?.index,
      missed: object?.missed
    };
  },
  toSDK(message: MissedBlock): MissedBlockSDKType {
    const obj: any = {};
    obj.index = message.index;
    obj.missed = message.missed;
    return obj;
  },
  fromAmino(object: MissedBlockAmino): MissedBlock {
    return {
      index: Long.fromString(object.index),
      missed: object.missed
    };
  },
  toAmino(message: MissedBlock): MissedBlockAmino {
    const obj: any = {};
    obj.index = message.index ? message.index.toString() : undefined;
    obj.missed = message.missed;
    return obj;
  },
  fromAminoMsg(object: MissedBlockAminoMsg): MissedBlock {
    return MissedBlock.fromAmino(object.value);
  },
  toAminoMsg(message: MissedBlock): MissedBlockAminoMsg {
    return {
      type: "cosmos-sdk/MissedBlock",
      value: MissedBlock.toAmino(message)
    };
  },
  fromProtoMsg(message: MissedBlockProtoMsg): MissedBlock {
    return MissedBlock.decode(message.value);
  },
  toProto(message: MissedBlock): Uint8Array {
    return MissedBlock.encode(message).finish();
  },
  toProtoMsg(message: MissedBlock): MissedBlockProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.MissedBlock",
      value: MissedBlock.encode(message).finish()
    };
  }
};