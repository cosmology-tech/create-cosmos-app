import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { ComputedRef } from "vue";
export const protobufPackage = "cosmos.staking.v1beta1";
/**
 * AuthorizationType defines the type of staking module authorization type
 * 
 * Since: cosmos-sdk 0.43
 */
export enum AuthorizationType {
  /** AUTHORIZATION_TYPE_UNSPECIFIED - AUTHORIZATION_TYPE_UNSPECIFIED specifies an unknown authorization type */
  AUTHORIZATION_TYPE_UNSPECIFIED = 0,
  /** AUTHORIZATION_TYPE_DELEGATE - AUTHORIZATION_TYPE_DELEGATE defines an authorization type for Msg/Delegate */
  AUTHORIZATION_TYPE_DELEGATE = 1,
  /** AUTHORIZATION_TYPE_UNDELEGATE - AUTHORIZATION_TYPE_UNDELEGATE defines an authorization type for Msg/Undelegate */
  AUTHORIZATION_TYPE_UNDELEGATE = 2,
  /** AUTHORIZATION_TYPE_REDELEGATE - AUTHORIZATION_TYPE_REDELEGATE defines an authorization type for Msg/BeginRedelegate */
  AUTHORIZATION_TYPE_REDELEGATE = 3,
  UNRECOGNIZED = -1,
}
export const AuthorizationTypeSDKType = AuthorizationType;
export function authorizationTypeFromJSON(object: any): AuthorizationType {
  switch (object) {
    case 0:
    case "AUTHORIZATION_TYPE_UNSPECIFIED":
      return AuthorizationType.AUTHORIZATION_TYPE_UNSPECIFIED;
    case 1:
    case "AUTHORIZATION_TYPE_DELEGATE":
      return AuthorizationType.AUTHORIZATION_TYPE_DELEGATE;
    case 2:
    case "AUTHORIZATION_TYPE_UNDELEGATE":
      return AuthorizationType.AUTHORIZATION_TYPE_UNDELEGATE;
    case 3:
    case "AUTHORIZATION_TYPE_REDELEGATE":
      return AuthorizationType.AUTHORIZATION_TYPE_REDELEGATE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AuthorizationType.UNRECOGNIZED;
  }
}
export function authorizationTypeToJSON(object: AuthorizationType): string {
  switch (object) {
    case AuthorizationType.AUTHORIZATION_TYPE_UNSPECIFIED:
      return "AUTHORIZATION_TYPE_UNSPECIFIED";
    case AuthorizationType.AUTHORIZATION_TYPE_DELEGATE:
      return "AUTHORIZATION_TYPE_DELEGATE";
    case AuthorizationType.AUTHORIZATION_TYPE_UNDELEGATE:
      return "AUTHORIZATION_TYPE_UNDELEGATE";
    case AuthorizationType.AUTHORIZATION_TYPE_REDELEGATE:
      return "AUTHORIZATION_TYPE_REDELEGATE";
    case AuthorizationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * StakeAuthorization defines authorization for delegate/undelegate/redelegate.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface StakeAuthorization {
  /**
   * max_tokens specifies the maximum amount of tokens can be delegate to a validator. If it is
   * empty, there is no spend limit and any amount of coins can be delegated.
   */
  maxTokens?: Coin;
  /**
   * allow_list specifies list of validator addresses to whom grantee can delegate tokens on behalf of granter's
   * account.
   */
  allowList?: StakeAuthorization_Validators;
  /** deny_list specifies list of validator addresses to whom grantee can not delegate tokens. */
  denyList?: StakeAuthorization_Validators;
  /** authorization_type defines one of AuthorizationType. */
  authorizationType: AuthorizationType;
}
export interface ReactiveStakeAuthorization {
  maxTokens?: ComputedRef<Coin>;
  allowList?: ComputedRef<StakeAuthorization_Validators>;
  denyList?: ComputedRef<StakeAuthorization_Validators>;
  authorizationType: ComputedRef<AuthorizationType>;
}
export interface StakeAuthorizationProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.StakeAuthorization";
  value: Uint8Array;
}
/**
 * StakeAuthorization defines authorization for delegate/undelegate/redelegate.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface StakeAuthorizationSDKType {
  max_tokens?: CoinSDKType;
  allow_list?: StakeAuthorization_ValidatorsSDKType;
  deny_list?: StakeAuthorization_ValidatorsSDKType;
  authorization_type: AuthorizationType;
}
/** Validators defines list of validator addresses. */
export interface StakeAuthorization_Validators {
  address: string[];
}
export interface ReactiveStakeAuthorization_Validators {
  address: ComputedRef<string[]>;
}
export interface StakeAuthorization_ValidatorsProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.Validators";
  value: Uint8Array;
}
/** Validators defines list of validator addresses. */
export interface StakeAuthorization_ValidatorsSDKType {
  address: string[];
}
function createBaseStakeAuthorization(): StakeAuthorization {
  return {
    maxTokens: undefined,
    allowList: undefined,
    denyList: undefined,
    authorizationType: 0
  };
}
export const StakeAuthorization = {
  typeUrl: "/cosmos.staking.v1beta1.StakeAuthorization",
  encode(message: StakeAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxTokens !== undefined) {
      Coin.encode(message.maxTokens, writer.uint32(10).fork()).ldelim();
    }
    if (message.allowList !== undefined) {
      StakeAuthorization_Validators.encode(message.allowList, writer.uint32(18).fork()).ldelim();
    }
    if (message.denyList !== undefined) {
      StakeAuthorization_Validators.encode(message.denyList, writer.uint32(26).fork()).ldelim();
    }
    if (message.authorizationType !== 0) {
      writer.uint32(32).int32(message.authorizationType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StakeAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxTokens = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.allowList = StakeAuthorization_Validators.decode(reader, reader.uint32());
          break;
        case 3:
          message.denyList = StakeAuthorization_Validators.decode(reader, reader.uint32());
          break;
        case 4:
          message.authorizationType = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StakeAuthorization {
    return {
      maxTokens: isSet(object.maxTokens) ? Coin.fromJSON(object.maxTokens) : undefined,
      allowList: isSet(object.allowList) ? StakeAuthorization_Validators.fromJSON(object.allowList) : undefined,
      denyList: isSet(object.denyList) ? StakeAuthorization_Validators.fromJSON(object.denyList) : undefined,
      authorizationType: isSet(object.authorizationType) ? authorizationTypeFromJSON(object.authorizationType) : -1
    };
  },
  toJSON(message: StakeAuthorization): JsonSafe<StakeAuthorization> {
    const obj: any = {};
    message.maxTokens !== undefined && (obj.maxTokens = message.maxTokens ? Coin.toJSON(message.maxTokens) : undefined);
    message.allowList !== undefined && (obj.allowList = message.allowList ? StakeAuthorization_Validators.toJSON(message.allowList) : undefined);
    message.denyList !== undefined && (obj.denyList = message.denyList ? StakeAuthorization_Validators.toJSON(message.denyList) : undefined);
    message.authorizationType !== undefined && (obj.authorizationType = authorizationTypeToJSON(message.authorizationType));
    return obj;
  },
  fromPartial(object: DeepPartial<StakeAuthorization>): StakeAuthorization {
    const message = createBaseStakeAuthorization();
    message.maxTokens = object.maxTokens !== undefined && object.maxTokens !== null ? Coin.fromPartial(object.maxTokens) : undefined;
    message.allowList = object.allowList !== undefined && object.allowList !== null ? StakeAuthorization_Validators.fromPartial(object.allowList) : undefined;
    message.denyList = object.denyList !== undefined && object.denyList !== null ? StakeAuthorization_Validators.fromPartial(object.denyList) : undefined;
    message.authorizationType = object.authorizationType ?? 0;
    return message;
  },
  fromSDK(object: StakeAuthorizationSDKType): StakeAuthorization {
    return {
      maxTokens: object.max_tokens ? Coin.fromSDK(object.max_tokens) : undefined,
      allowList: object.allow_list ? StakeAuthorization_Validators.fromSDK(object.allow_list) : undefined,
      denyList: object.deny_list ? StakeAuthorization_Validators.fromSDK(object.deny_list) : undefined,
      authorizationType: isSet(object.authorization_type) ? authorizationTypeFromJSON(object.authorization_type) : -1
    };
  },
  fromSDKJSON(object: any): StakeAuthorizationSDKType {
    return {
      max_tokens: isSet(object.max_tokens) ? Coin.fromSDKJSON(object.max_tokens) : undefined,
      allow_list: isSet(object.allow_list) ? StakeAuthorization_Validators.fromSDKJSON(object.allow_list) : undefined,
      deny_list: isSet(object.deny_list) ? StakeAuthorization_Validators.fromSDKJSON(object.deny_list) : undefined,
      authorization_type: isSet(object.authorization_type) ? authorizationTypeFromJSON(object.authorization_type) : -1
    };
  },
  toSDK(message: StakeAuthorization): StakeAuthorizationSDKType {
    const obj: any = {};
    message.maxTokens !== undefined && (obj.max_tokens = message.maxTokens ? Coin.toSDK(message.maxTokens) : undefined);
    message.allowList !== undefined && (obj.allow_list = message.allowList ? StakeAuthorization_Validators.toSDK(message.allowList) : undefined);
    message.denyList !== undefined && (obj.deny_list = message.denyList ? StakeAuthorization_Validators.toSDK(message.denyList) : undefined);
    message.authorizationType !== undefined && (obj.authorization_type = authorizationTypeToJSON(message.authorizationType));
    return obj;
  },
  fromAmino(object: StakeAuthorizationAmino): StakeAuthorization {
    const message = createBaseStakeAuthorization();
    if (object.max_tokens !== undefined && object.max_tokens !== null) {
      message.maxTokens = Coin.fromAmino(object.max_tokens);
    }
    if (object.allow_list !== undefined && object.allow_list !== null) {
      message.allowList = StakeAuthorization_Validators.fromAmino(object.allow_list);
    }
    if (object.deny_list !== undefined && object.deny_list !== null) {
      message.denyList = StakeAuthorization_Validators.fromAmino(object.deny_list);
    }
    if (object.authorization_type !== undefined && object.authorization_type !== null) {
      message.authorizationType = object.authorization_type;
    }
    return message;
  },
  toAmino(message: StakeAuthorization): StakeAuthorizationAmino {
    const obj: any = {};
    obj.max_tokens = message.maxTokens ? Coin.toAmino(message.maxTokens) : undefined;
    obj.allow_list = message.allowList ? StakeAuthorization_Validators.toAmino(message.allowList) : undefined;
    obj.deny_list = message.denyList ? StakeAuthorization_Validators.toAmino(message.denyList) : undefined;
    obj.authorization_type = message.authorizationType === 0 ? undefined : message.authorizationType;
    return obj;
  },
  fromAminoMsg(object: StakeAuthorizationAminoMsg): StakeAuthorization {
    return StakeAuthorization.fromAmino(object.value);
  },
  toAminoMsg(message: StakeAuthorization): StakeAuthorizationAminoMsg {
    return {
      type: "cosmos-sdk/StakeAuthorization",
      value: StakeAuthorization.toAmino(message)
    };
  },
  fromProtoMsg(message: StakeAuthorizationProtoMsg): StakeAuthorization {
    return StakeAuthorization.decode(message.value);
  },
  toProto(message: StakeAuthorization): Uint8Array {
    return StakeAuthorization.encode(message).finish();
  },
  toProtoMsg(message: StakeAuthorization): StakeAuthorizationProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.StakeAuthorization",
      value: StakeAuthorization.encode(message).finish()
    };
  }
};
function createBaseStakeAuthorization_Validators(): StakeAuthorization_Validators {
  return {
    address: []
  };
}
export const StakeAuthorization_Validators = {
  typeUrl: "/cosmos.staking.v1beta1.Validators",
  encode(message: StakeAuthorization_Validators, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.address) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StakeAuthorization_Validators {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeAuthorization_Validators();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StakeAuthorization_Validators {
    return {
      address: Array.isArray(object?.address) ? object.address.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: StakeAuthorization_Validators): JsonSafe<StakeAuthorization_Validators> {
    const obj: any = {};
    if (message.address) {
      obj.address = message.address.map(e => e);
    } else {
      obj.address = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<StakeAuthorization_Validators>): StakeAuthorization_Validators {
    const message = createBaseStakeAuthorization_Validators();
    message.address = object.address?.map(e => e) || [];
    return message;
  },
  fromSDK(object: StakeAuthorization_ValidatorsSDKType): StakeAuthorization_Validators {
    return {
      address: Array.isArray(object?.address) ? object.address.map((e: any) => e) : []
    };
  },
  fromSDKJSON(object: any): StakeAuthorization_ValidatorsSDKType {
    return {
      address: Array.isArray(object?.address) ? object.address.map((e: any) => String(e)) : []
    };
  },
  toSDK(message: StakeAuthorization_Validators): StakeAuthorization_ValidatorsSDKType {
    const obj: any = {};
    if (message.address) {
      obj.address = message.address.map(e => e);
    } else {
      obj.address = [];
    }
    return obj;
  },
  fromAmino(object: StakeAuthorization_ValidatorsAmino): StakeAuthorization_Validators {
    const message = createBaseStakeAuthorization_Validators();
    message.address = object.address?.map(e => e) || [];
    return message;
  },
  toAmino(message: StakeAuthorization_Validators): StakeAuthorization_ValidatorsAmino {
    const obj: any = {};
    if (message.address) {
      obj.address = message.address.map(e => e);
    } else {
      obj.address = message.address;
    }
    return obj;
  },
  fromAminoMsg(object: StakeAuthorization_ValidatorsAminoMsg): StakeAuthorization_Validators {
    return StakeAuthorization_Validators.fromAmino(object.value);
  },
  toAminoMsg(message: StakeAuthorization_Validators): StakeAuthorization_ValidatorsAminoMsg {
    return {
      type: "cosmos-sdk/Validators",
      value: StakeAuthorization_Validators.toAmino(message)
    };
  },
  fromProtoMsg(message: StakeAuthorization_ValidatorsProtoMsg): StakeAuthorization_Validators {
    return StakeAuthorization_Validators.decode(message.value);
  },
  toProto(message: StakeAuthorization_Validators): Uint8Array {
    return StakeAuthorization_Validators.encode(message).finish();
  },
  toProtoMsg(message: StakeAuthorization_Validators): StakeAuthorization_ValidatorsProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.Validators",
      value: StakeAuthorization_Validators.encode(message).finish()
    };
  }
};