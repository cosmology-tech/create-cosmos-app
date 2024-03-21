import { PublicKey, PublicKeyAmino, PublicKeySDKType } from "../crypto/keys";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export const protobufPackage = "tendermint.types";
export interface ValidatorSet {
  validators: Validator[];
  proposer?: Validator;
  totalVotingPower: bigint;
}
export interface ValidatorSetProtoMsg {
  typeUrl: "/tendermint.types.ValidatorSet";
  value: Uint8Array;
}
export interface ValidatorSetAmino {
  validators?: ValidatorAmino[];
  proposer?: ValidatorAmino;
  total_voting_power?: string;
}
export interface ValidatorSetAminoMsg {
  type: "/tendermint.types.ValidatorSet";
  value: ValidatorSetAmino;
}
export interface ValidatorSetSDKType {
  validators: ValidatorSDKType[];
  proposer?: ValidatorSDKType;
  total_voting_power: bigint;
}
export interface Validator {
  address: Uint8Array;
  pubKey: PublicKey;
  votingPower: bigint;
  proposerPriority: bigint;
}
export interface ValidatorProtoMsg {
  typeUrl: "/tendermint.types.Validator";
  value: Uint8Array;
}
export interface ValidatorAmino {
  address?: string;
  pub_key?: PublicKeyAmino;
  voting_power?: string;
  proposer_priority?: string;
}
export interface ValidatorAminoMsg {
  type: "/tendermint.types.Validator";
  value: ValidatorAmino;
}
export interface ValidatorSDKType {
  address: Uint8Array;
  pub_key: PublicKeySDKType;
  voting_power: bigint;
  proposer_priority: bigint;
}
export interface SimpleValidator {
  pubKey?: PublicKey;
  votingPower: bigint;
}
export interface SimpleValidatorProtoMsg {
  typeUrl: "/tendermint.types.SimpleValidator";
  value: Uint8Array;
}
export interface SimpleValidatorAmino {
  pub_key?: PublicKeyAmino;
  voting_power?: string;
}
export interface SimpleValidatorAminoMsg {
  type: "/tendermint.types.SimpleValidator";
  value: SimpleValidatorAmino;
}
export interface SimpleValidatorSDKType {
  pub_key?: PublicKeySDKType;
  voting_power: bigint;
}
function createBaseValidatorSet(): ValidatorSet {
  return {
    validators: [],
    proposer: undefined,
    totalVotingPower: BigInt(0)
  };
}
export const ValidatorSet = {
  typeUrl: "/tendermint.types.ValidatorSet",
  is(o: any): o is ValidatorSet {
    return o && (o.$typeUrl === ValidatorSet.typeUrl || Array.isArray(o.validators) && (!o.validators.length || Validator.is(o.validators[0])) && typeof o.totalVotingPower === "bigint");
  },
  isSDK(o: any): o is ValidatorSetSDKType {
    return o && (o.$typeUrl === ValidatorSet.typeUrl || Array.isArray(o.validators) && (!o.validators.length || Validator.isSDK(o.validators[0])) && typeof o.total_voting_power === "bigint");
  },
  isAmino(o: any): o is ValidatorSetAmino {
    return o && (o.$typeUrl === ValidatorSet.typeUrl || Array.isArray(o.validators) && (!o.validators.length || Validator.isAmino(o.validators[0])) && typeof o.total_voting_power === "bigint");
  },
  encode(message: ValidatorSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.proposer !== undefined) {
      Validator.encode(message.proposer, writer.uint32(18).fork()).ldelim();
    }
    if (message.totalVotingPower !== undefined) {
      writer.uint32(24).int64(message.totalVotingPower);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.proposer = Validator.decode(reader, reader.uint32());
          break;
        case 3:
          message.totalVotingPower = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorSet {
    const obj = createBaseValidatorSet();
    if (Array.isArray(object?.validators)) obj.validators = object.validators.map((e: any) => Validator.fromJSON(e));
    if (isSet(object.proposer)) obj.proposer = Validator.fromJSON(object.proposer);
    if (isSet(object.totalVotingPower)) obj.totalVotingPower = BigInt(object.totalVotingPower.toString());
    return obj;
  },
  toJSON(message: ValidatorSet): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.proposer !== undefined && (obj.proposer = message.proposer ? Validator.toJSON(message.proposer) : undefined);
    message.totalVotingPower !== undefined && (obj.totalVotingPower = (message.totalVotingPower || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorSet>): ValidatorSet {
    const message = createBaseValidatorSet();
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = Validator.fromPartial(object.proposer);
    }
    if (object.totalVotingPower !== undefined && object.totalVotingPower !== null) {
      message.totalVotingPower = BigInt(object.totalVotingPower.toString());
    }
    return message;
  },
  fromSDK(object: ValidatorSetSDKType): ValidatorSet {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromSDK(e)) : [],
      proposer: object.proposer ? Validator.fromSDK(object.proposer) : undefined,
      totalVotingPower: object?.total_voting_power
    };
  },
  toSDK(message: ValidatorSet): ValidatorSetSDKType {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toSDK(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.proposer !== undefined && (obj.proposer = message.proposer ? Validator.toSDK(message.proposer) : undefined);
    obj.total_voting_power = message.totalVotingPower;
    return obj;
  },
  fromAmino(object: ValidatorSetAmino): ValidatorSet {
    const message = createBaseValidatorSet();
    message.validators = object.validators?.map(e => Validator.fromAmino(e)) || [];
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = Validator.fromAmino(object.proposer);
    }
    if (object.total_voting_power !== undefined && object.total_voting_power !== null) {
      message.totalVotingPower = BigInt(object.total_voting_power);
    }
    return message;
  },
  toAmino(message: ValidatorSet): ValidatorSetAmino {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
    } else {
      obj.validators = [];
    }
    obj.proposer = message.proposer ? Validator.toAmino(message.proposer) : undefined;
    obj.total_voting_power = message.totalVotingPower ? message.totalVotingPower.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorSetAminoMsg): ValidatorSet {
    return ValidatorSet.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorSetProtoMsg): ValidatorSet {
    return ValidatorSet.decode(message.value);
  },
  toProto(message: ValidatorSet): Uint8Array {
    return ValidatorSet.encode(message).finish();
  },
  toProtoMsg(message: ValidatorSet): ValidatorSetProtoMsg {
    return {
      typeUrl: "/tendermint.types.ValidatorSet",
      value: ValidatorSet.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ValidatorSet.typeUrl, ValidatorSet);
function createBaseValidator(): Validator {
  return {
    address: new Uint8Array(),
    pubKey: PublicKey.fromPartial({}),
    votingPower: BigInt(0),
    proposerPriority: BigInt(0)
  };
}
export const Validator = {
  typeUrl: "/tendermint.types.Validator",
  is(o: any): o is Validator {
    return o && (o.$typeUrl === Validator.typeUrl || (o.address instanceof Uint8Array || typeof o.address === "string") && PublicKey.is(o.pubKey) && typeof o.votingPower === "bigint" && typeof o.proposerPriority === "bigint");
  },
  isSDK(o: any): o is ValidatorSDKType {
    return o && (o.$typeUrl === Validator.typeUrl || (o.address instanceof Uint8Array || typeof o.address === "string") && PublicKey.isSDK(o.pub_key) && typeof o.voting_power === "bigint" && typeof o.proposer_priority === "bigint");
  },
  isAmino(o: any): o is ValidatorAmino {
    return o && (o.$typeUrl === Validator.typeUrl || (o.address instanceof Uint8Array || typeof o.address === "string") && PublicKey.isAmino(o.pub_key) && typeof o.voting_power === "bigint" && typeof o.proposer_priority === "bigint");
  },
  encode(message: Validator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.pubKey !== undefined) {
      PublicKey.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.votingPower !== undefined) {
      writer.uint32(24).int64(message.votingPower);
    }
    if (message.proposerPriority !== undefined) {
      writer.uint32(32).int64(message.proposerPriority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Validator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        case 2:
          message.pubKey = PublicKey.decode(reader, reader.uint32());
          break;
        case 3:
          message.votingPower = reader.int64();
          break;
        case 4:
          message.proposerPriority = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Validator {
    const obj = createBaseValidator();
    if (isSet(object.address)) obj.address = bytesFromBase64(object.address);
    if (isSet(object.pubKey)) obj.pubKey = PublicKey.fromJSON(object.pubKey);
    if (isSet(object.votingPower)) obj.votingPower = BigInt(object.votingPower.toString());
    if (isSet(object.proposerPriority)) obj.proposerPriority = BigInt(object.proposerPriority.toString());
    return obj;
  },
  toJSON(message: Validator): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? PublicKey.toJSON(message.pubKey) : undefined);
    message.votingPower !== undefined && (obj.votingPower = (message.votingPower || BigInt(0)).toString());
    message.proposerPriority !== undefined && (obj.proposerPriority = (message.proposerPriority || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Validator>): Validator {
    const message = createBaseValidator();
    message.address = object.address ?? new Uint8Array();
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = PublicKey.fromPartial(object.pubKey);
    }
    if (object.votingPower !== undefined && object.votingPower !== null) {
      message.votingPower = BigInt(object.votingPower.toString());
    }
    if (object.proposerPriority !== undefined && object.proposerPriority !== null) {
      message.proposerPriority = BigInt(object.proposerPriority.toString());
    }
    return message;
  },
  fromSDK(object: ValidatorSDKType): Validator {
    return {
      address: object?.address,
      pubKey: object.pub_key ? PublicKey.fromSDK(object.pub_key) : undefined,
      votingPower: object?.voting_power,
      proposerPriority: object?.proposer_priority
    };
  },
  toSDK(message: Validator): ValidatorSDKType {
    const obj: any = {};
    obj.address = message.address;
    message.pubKey !== undefined && (obj.pub_key = message.pubKey ? PublicKey.toSDK(message.pubKey) : undefined);
    obj.voting_power = message.votingPower;
    obj.proposer_priority = message.proposerPriority;
    return obj;
  },
  fromAmino(object: ValidatorAmino): Validator {
    const message = createBaseValidator();
    if (object.address !== undefined && object.address !== null) {
      message.address = bytesFromBase64(object.address);
    }
    if (object.pub_key !== undefined && object.pub_key !== null) {
      message.pubKey = PublicKey.fromAmino(object.pub_key);
    }
    if (object.voting_power !== undefined && object.voting_power !== null) {
      message.votingPower = BigInt(object.voting_power);
    }
    if (object.proposer_priority !== undefined && object.proposer_priority !== null) {
      message.proposerPriority = BigInt(object.proposer_priority);
    }
    return message;
  },
  toAmino(message: Validator): ValidatorAmino {
    const obj: any = {};
    obj.address = message.address ? base64FromBytes(message.address) : undefined;
    obj.pub_key = message.pubKey ? PublicKey.toAmino(message.pubKey) : undefined;
    obj.voting_power = message.votingPower ? message.votingPower.toString() : undefined;
    obj.proposer_priority = message.proposerPriority ? message.proposerPriority.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorAminoMsg): Validator {
    return Validator.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorProtoMsg): Validator {
    return Validator.decode(message.value);
  },
  toProto(message: Validator): Uint8Array {
    return Validator.encode(message).finish();
  },
  toProtoMsg(message: Validator): ValidatorProtoMsg {
    return {
      typeUrl: "/tendermint.types.Validator",
      value: Validator.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Validator.typeUrl, Validator);
function createBaseSimpleValidator(): SimpleValidator {
  return {
    pubKey: undefined,
    votingPower: BigInt(0)
  };
}
export const SimpleValidator = {
  typeUrl: "/tendermint.types.SimpleValidator",
  is(o: any): o is SimpleValidator {
    return o && (o.$typeUrl === SimpleValidator.typeUrl || typeof o.votingPower === "bigint");
  },
  isSDK(o: any): o is SimpleValidatorSDKType {
    return o && (o.$typeUrl === SimpleValidator.typeUrl || typeof o.voting_power === "bigint");
  },
  isAmino(o: any): o is SimpleValidatorAmino {
    return o && (o.$typeUrl === SimpleValidator.typeUrl || typeof o.voting_power === "bigint");
  },
  encode(message: SimpleValidator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pubKey !== undefined) {
      PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.votingPower !== undefined) {
      writer.uint32(16).int64(message.votingPower);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SimpleValidator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimpleValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = PublicKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.votingPower = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SimpleValidator {
    const obj = createBaseSimpleValidator();
    if (isSet(object.pubKey)) obj.pubKey = PublicKey.fromJSON(object.pubKey);
    if (isSet(object.votingPower)) obj.votingPower = BigInt(object.votingPower.toString());
    return obj;
  },
  toJSON(message: SimpleValidator): unknown {
    const obj: any = {};
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? PublicKey.toJSON(message.pubKey) : undefined);
    message.votingPower !== undefined && (obj.votingPower = (message.votingPower || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<SimpleValidator>): SimpleValidator {
    const message = createBaseSimpleValidator();
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = PublicKey.fromPartial(object.pubKey);
    }
    if (object.votingPower !== undefined && object.votingPower !== null) {
      message.votingPower = BigInt(object.votingPower.toString());
    }
    return message;
  },
  fromSDK(object: SimpleValidatorSDKType): SimpleValidator {
    return {
      pubKey: object.pub_key ? PublicKey.fromSDK(object.pub_key) : undefined,
      votingPower: object?.voting_power
    };
  },
  toSDK(message: SimpleValidator): SimpleValidatorSDKType {
    const obj: any = {};
    message.pubKey !== undefined && (obj.pub_key = message.pubKey ? PublicKey.toSDK(message.pubKey) : undefined);
    obj.voting_power = message.votingPower;
    return obj;
  },
  fromAmino(object: SimpleValidatorAmino): SimpleValidator {
    const message = createBaseSimpleValidator();
    if (object.pub_key !== undefined && object.pub_key !== null) {
      message.pubKey = PublicKey.fromAmino(object.pub_key);
    }
    if (object.voting_power !== undefined && object.voting_power !== null) {
      message.votingPower = BigInt(object.voting_power);
    }
    return message;
  },
  toAmino(message: SimpleValidator): SimpleValidatorAmino {
    const obj: any = {};
    obj.pub_key = message.pubKey ? PublicKey.toAmino(message.pubKey) : undefined;
    obj.voting_power = message.votingPower ? message.votingPower.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SimpleValidatorAminoMsg): SimpleValidator {
    return SimpleValidator.fromAmino(object.value);
  },
  fromProtoMsg(message: SimpleValidatorProtoMsg): SimpleValidator {
    return SimpleValidator.decode(message.value);
  },
  toProto(message: SimpleValidator): Uint8Array {
    return SimpleValidator.encode(message).finish();
  },
  toProtoMsg(message: SimpleValidator): SimpleValidatorProtoMsg {
    return {
      typeUrl: "/tendermint.types.SimpleValidator",
      value: SimpleValidator.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SimpleValidator.typeUrl, SimpleValidator);