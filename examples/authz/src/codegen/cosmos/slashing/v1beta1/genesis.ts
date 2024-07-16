//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType, ValidatorSigningInfo, ValidatorSigningInfoAmino, ValidatorSigningInfoSDKType } from "./slashing";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.slashing.v1beta1";
/** GenesisState defines the slashing module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of related to deposit. */
  params: Params;
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
  signing_infos?: SigningInfoAmino[];
  /**
   * missed_blocks represents a map between validator addresses and their
   * missed blocks.
   */
  missed_blocks?: ValidatorMissedBlocksAmino[];
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the slashing module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  signing_infos: SigningInfoSDKType[];
  missed_blocks: ValidatorMissedBlocksSDKType[];
}
/** SigningInfo stores validator signing info of corresponding address. */
export interface SigningInfo {
  /** address is the validator address. */
  address: string;
  /** validator_signing_info represents the signing info of this validator. */
  validatorSigningInfo: ValidatorSigningInfo;
}
export interface SigningInfoProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.SigningInfo";
  value: Uint8Array;
}
/** SigningInfo stores validator signing info of corresponding address. */
export interface SigningInfoAmino {
  /** address is the validator address. */
  address?: string;
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
  validator_signing_info: ValidatorSigningInfoSDKType;
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
  address?: string;
  /** missed_blocks is an array of missed blocks by the validator. */
  missed_blocks?: MissedBlockAmino[];
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
  index: bigint;
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
  index?: string;
  /** missed is the missed status. */
  missed?: boolean;
}
export interface MissedBlockAminoMsg {
  type: "cosmos-sdk/MissedBlock";
  value: MissedBlockAmino;
}
/** MissedBlock contains height and missed status as boolean. */
export interface MissedBlockSDKType {
  index: bigint;
  missed: boolean;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    signingInfos: [],
    missedBlocks: []
  };
}
export const GenesisState = {
  typeUrl: "/cosmos.slashing.v1beta1.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.signingInfos) && (!o.signingInfos.length || SigningInfo.is(o.signingInfos[0])) && Array.isArray(o.missedBlocks) && (!o.missedBlocks.length || ValidatorMissedBlocks.is(o.missedBlocks[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.signing_infos) && (!o.signing_infos.length || SigningInfo.isSDK(o.signing_infos[0])) && Array.isArray(o.missed_blocks) && (!o.missed_blocks.length || ValidatorMissedBlocks.isSDK(o.missed_blocks[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.signing_infos) && (!o.signing_infos.length || SigningInfo.isAmino(o.signing_infos[0])) && Array.isArray(o.missed_blocks) && (!o.missed_blocks.length || ValidatorMissedBlocks.isAmino(o.missed_blocks[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseGenesisState();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (Array.isArray(object?.signingInfos)) obj.signingInfos = object.signingInfos.map((e: any) => SigningInfo.fromJSON(e));
    if (Array.isArray(object?.missedBlocks)) obj.missedBlocks = object.missedBlocks.map((e: any) => ValidatorMissedBlocks.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
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
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
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
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.signingInfos = object.signing_infos?.map(e => SigningInfo.fromAmino(e)) || [];
    message.missedBlocks = object.missed_blocks?.map(e => ValidatorMissedBlocks.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.signingInfos) {
      obj.signing_infos = message.signingInfos.map(e => e ? SigningInfo.toAmino(e) : undefined);
    } else {
      obj.signing_infos = message.signingInfos;
    }
    if (message.missedBlocks) {
      obj.missed_blocks = message.missedBlocks.map(e => e ? ValidatorMissedBlocks.toAmino(e) : undefined);
    } else {
      obj.missed_blocks = message.missedBlocks;
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
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisState.aminoType, GenesisState.typeUrl);
function createBaseSigningInfo(): SigningInfo {
  return {
    address: "",
    validatorSigningInfo: ValidatorSigningInfo.fromPartial({})
  };
}
export const SigningInfo = {
  typeUrl: "/cosmos.slashing.v1beta1.SigningInfo",
  aminoType: "cosmos-sdk/SigningInfo",
  is(o: any): o is SigningInfo {
    return o && (o.$typeUrl === SigningInfo.typeUrl || typeof o.address === "string" && ValidatorSigningInfo.is(o.validatorSigningInfo));
  },
  isSDK(o: any): o is SigningInfoSDKType {
    return o && (o.$typeUrl === SigningInfo.typeUrl || typeof o.address === "string" && ValidatorSigningInfo.isSDK(o.validator_signing_info));
  },
  isAmino(o: any): o is SigningInfoAmino {
    return o && (o.$typeUrl === SigningInfo.typeUrl || typeof o.address === "string" && ValidatorSigningInfo.isAmino(o.validator_signing_info));
  },
  encode(message: SigningInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== undefined) {
      writer.uint32(10).string(message.address);
    }
    if (message.validatorSigningInfo !== undefined) {
      ValidatorSigningInfo.encode(message.validatorSigningInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SigningInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseSigningInfo();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.validatorSigningInfo)) obj.validatorSigningInfo = ValidatorSigningInfo.fromJSON(object.validatorSigningInfo);
    return obj;
  },
  toJSON(message: SigningInfo): JsonSafe<SigningInfo> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.validatorSigningInfo !== undefined && (obj.validatorSigningInfo = message.validatorSigningInfo ? ValidatorSigningInfo.toJSON(message.validatorSigningInfo) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<SigningInfo>): SigningInfo {
    const message = createBaseSigningInfo();
    message.address = object.address ?? "";
    if (object.validatorSigningInfo !== undefined && object.validatorSigningInfo !== null) {
      message.validatorSigningInfo = ValidatorSigningInfo.fromPartial(object.validatorSigningInfo);
    }
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
    const message = createBaseSigningInfo();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.validator_signing_info !== undefined && object.validator_signing_info !== null) {
      message.validatorSigningInfo = ValidatorSigningInfo.fromAmino(object.validator_signing_info);
    }
    return message;
  },
  toAmino(message: SigningInfo): SigningInfoAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
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
GlobalDecoderRegistry.register(SigningInfo.typeUrl, SigningInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(SigningInfo.aminoType, SigningInfo.typeUrl);
function createBaseValidatorMissedBlocks(): ValidatorMissedBlocks {
  return {
    address: "",
    missedBlocks: []
  };
}
export const ValidatorMissedBlocks = {
  typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlocks",
  aminoType: "cosmos-sdk/ValidatorMissedBlocks",
  is(o: any): o is ValidatorMissedBlocks {
    return o && (o.$typeUrl === ValidatorMissedBlocks.typeUrl || typeof o.address === "string" && Array.isArray(o.missedBlocks) && (!o.missedBlocks.length || MissedBlock.is(o.missedBlocks[0])));
  },
  isSDK(o: any): o is ValidatorMissedBlocksSDKType {
    return o && (o.$typeUrl === ValidatorMissedBlocks.typeUrl || typeof o.address === "string" && Array.isArray(o.missed_blocks) && (!o.missed_blocks.length || MissedBlock.isSDK(o.missed_blocks[0])));
  },
  isAmino(o: any): o is ValidatorMissedBlocksAmino {
    return o && (o.$typeUrl === ValidatorMissedBlocks.typeUrl || typeof o.address === "string" && Array.isArray(o.missed_blocks) && (!o.missed_blocks.length || MissedBlock.isAmino(o.missed_blocks[0])));
  },
  encode(message: ValidatorMissedBlocks, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== undefined) {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.missedBlocks) {
      MissedBlock.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorMissedBlocks {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseValidatorMissedBlocks();
    if (isSet(object.address)) obj.address = String(object.address);
    if (Array.isArray(object?.missedBlocks)) obj.missedBlocks = object.missedBlocks.map((e: any) => MissedBlock.fromJSON(e));
    return obj;
  },
  toJSON(message: ValidatorMissedBlocks): JsonSafe<ValidatorMissedBlocks> {
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
    const message = createBaseValidatorMissedBlocks();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.missedBlocks = object.missed_blocks?.map(e => MissedBlock.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ValidatorMissedBlocks): ValidatorMissedBlocksAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    if (message.missedBlocks) {
      obj.missed_blocks = message.missedBlocks.map(e => e ? MissedBlock.toAmino(e) : undefined);
    } else {
      obj.missed_blocks = message.missedBlocks;
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
GlobalDecoderRegistry.register(ValidatorMissedBlocks.typeUrl, ValidatorMissedBlocks);
GlobalDecoderRegistry.registerAminoProtoMapping(ValidatorMissedBlocks.aminoType, ValidatorMissedBlocks.typeUrl);
function createBaseMissedBlock(): MissedBlock {
  return {
    index: BigInt(0),
    missed: false
  };
}
export const MissedBlock = {
  typeUrl: "/cosmos.slashing.v1beta1.MissedBlock",
  aminoType: "cosmos-sdk/MissedBlock",
  is(o: any): o is MissedBlock {
    return o && (o.$typeUrl === MissedBlock.typeUrl || typeof o.index === "bigint" && typeof o.missed === "boolean");
  },
  isSDK(o: any): o is MissedBlockSDKType {
    return o && (o.$typeUrl === MissedBlock.typeUrl || typeof o.index === "bigint" && typeof o.missed === "boolean");
  },
  isAmino(o: any): o is MissedBlockAmino {
    return o && (o.$typeUrl === MissedBlock.typeUrl || typeof o.index === "bigint" && typeof o.missed === "boolean");
  },
  encode(message: MissedBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== undefined) {
      writer.uint32(8).int64(message.index);
    }
    if (message.missed !== undefined) {
      writer.uint32(16).bool(message.missed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MissedBlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMissedBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.int64();
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
    const obj = createBaseMissedBlock();
    if (isSet(object.index)) obj.index = BigInt(object.index.toString());
    if (isSet(object.missed)) obj.missed = Boolean(object.missed);
    return obj;
  },
  toJSON(message: MissedBlock): JsonSafe<MissedBlock> {
    const obj: any = {};
    message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
    message.missed !== undefined && (obj.missed = message.missed);
    return obj;
  },
  fromPartial(object: DeepPartial<MissedBlock>): MissedBlock {
    const message = createBaseMissedBlock();
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index.toString());
    }
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
    const message = createBaseMissedBlock();
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index);
    }
    if (object.missed !== undefined && object.missed !== null) {
      message.missed = object.missed;
    }
    return message;
  },
  toAmino(message: MissedBlock): MissedBlockAmino {
    const obj: any = {};
    obj.index = message.index !== BigInt(0) ? message.index.toString() : undefined;
    obj.missed = message.missed === false ? undefined : message.missed;
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
GlobalDecoderRegistry.register(MissedBlock.typeUrl, MissedBlock);
GlobalDecoderRegistry.registerAminoProtoMapping(MissedBlock.aminoType, MissedBlock.typeUrl);