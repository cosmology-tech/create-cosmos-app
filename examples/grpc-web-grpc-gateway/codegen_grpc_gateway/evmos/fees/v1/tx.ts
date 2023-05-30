import { Long, isSet, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "evmos.fees.v1";
/** MsgRegisterFeesContract defines a message that registers a DevFeeInfo */
export interface MsgRegisterDevFeeInfo {
  /** contract hex address */
  contractAddress: string;
  /**
   * bech32 address of message sender, must be the same as the origin EOA
   * sending the transaction which deploys the contract
   */
  deployerAddress: string;
  /** bech32 address of account receiving the transaction fees */
  withdrawAddress: string;
  /**
   * array of nonces from the address path, where the last nonce is
   * the nonce that determines the contract's address - it can be an EOA nonce
   * or a factory contract nonce
   */
  nonces: Long[];
}
export interface MsgRegisterDevFeeInfoProtoMsg {
  typeUrl: "/evmos.fees.v1.MsgRegisterDevFeeInfo";
  value: Uint8Array;
}
/** MsgRegisterFeesContract defines a message that registers a DevFeeInfo */
export interface MsgRegisterDevFeeInfoAmino {
  /** contract hex address */
  contract_address: string;
  /**
   * bech32 address of message sender, must be the same as the origin EOA
   * sending the transaction which deploys the contract
   */
  deployer_address: string;
  /** bech32 address of account receiving the transaction fees */
  withdraw_address: string;
  /**
   * array of nonces from the address path, where the last nonce is
   * the nonce that determines the contract's address - it can be an EOA nonce
   * or a factory contract nonce
   */
  nonces: string[];
}
export interface MsgRegisterDevFeeInfoAminoMsg {
  type: "/evmos.fees.v1.MsgRegisterDevFeeInfo";
  value: MsgRegisterDevFeeInfoAmino;
}
/** MsgRegisterFeesContract defines a message that registers a DevFeeInfo */
export interface MsgRegisterDevFeeInfoSDKType {
  contract_address: string;
  deployer_address: string;
  withdraw_address: string;
  nonces: Long[];
}
/**
 * MsgRegisterDevFeeInfoResponse defines the MsgRegisterDevFeeInfo response
 * type
 */
export interface MsgRegisterDevFeeInfoResponse {}
export interface MsgRegisterDevFeeInfoResponseProtoMsg {
  typeUrl: "/evmos.fees.v1.MsgRegisterDevFeeInfoResponse";
  value: Uint8Array;
}
/**
 * MsgRegisterDevFeeInfoResponse defines the MsgRegisterDevFeeInfo response
 * type
 */
export interface MsgRegisterDevFeeInfoResponseAmino {}
export interface MsgRegisterDevFeeInfoResponseAminoMsg {
  type: "/evmos.fees.v1.MsgRegisterDevFeeInfoResponse";
  value: MsgRegisterDevFeeInfoResponseAmino;
}
/**
 * MsgRegisterDevFeeInfoResponse defines the MsgRegisterDevFeeInfo response
 * type
 */
export interface MsgRegisterDevFeeInfoResponseSDKType {}
/**
 * MsgCancelDevFeeInfo defines a message that cancels a registered a
 * DevFeeInfo
 */
export interface MsgCancelDevFeeInfo {
  /** contract hex address */
  contractAddress: string;
  /** deployer bech32 address */
  deployerAddress: string;
}
export interface MsgCancelDevFeeInfoProtoMsg {
  typeUrl: "/evmos.fees.v1.MsgCancelDevFeeInfo";
  value: Uint8Array;
}
/**
 * MsgCancelDevFeeInfo defines a message that cancels a registered a
 * DevFeeInfo
 */
export interface MsgCancelDevFeeInfoAmino {
  /** contract hex address */
  contract_address: string;
  /** deployer bech32 address */
  deployer_address: string;
}
export interface MsgCancelDevFeeInfoAminoMsg {
  type: "/evmos.fees.v1.MsgCancelDevFeeInfo";
  value: MsgCancelDevFeeInfoAmino;
}
/**
 * MsgCancelDevFeeInfo defines a message that cancels a registered a
 * DevFeeInfo
 */
export interface MsgCancelDevFeeInfoSDKType {
  contract_address: string;
  deployer_address: string;
}
/** MsgCancelDevFeeInfoResponse defines the MsgCancelDevFeeInfo response type */
export interface MsgCancelDevFeeInfoResponse {}
export interface MsgCancelDevFeeInfoResponseProtoMsg {
  typeUrl: "/evmos.fees.v1.MsgCancelDevFeeInfoResponse";
  value: Uint8Array;
}
/** MsgCancelDevFeeInfoResponse defines the MsgCancelDevFeeInfo response type */
export interface MsgCancelDevFeeInfoResponseAmino {}
export interface MsgCancelDevFeeInfoResponseAminoMsg {
  type: "/evmos.fees.v1.MsgCancelDevFeeInfoResponse";
  value: MsgCancelDevFeeInfoResponseAmino;
}
/** MsgCancelDevFeeInfoResponse defines the MsgCancelDevFeeInfo response type */
export interface MsgCancelDevFeeInfoResponseSDKType {}
/**
 * MsgUpdateDevFeeInfo defines a message that updates the withdraw address for
 * a registered DevFeeInfo
 */
export interface MsgUpdateDevFeeInfo {
  /** contract hex address */
  contractAddress: string;
  /** deployer bech32 address */
  deployerAddress: string;
  /** new withdraw bech32 address for receiving the transaction fees */
  withdrawAddress: string;
}
export interface MsgUpdateDevFeeInfoProtoMsg {
  typeUrl: "/evmos.fees.v1.MsgUpdateDevFeeInfo";
  value: Uint8Array;
}
/**
 * MsgUpdateDevFeeInfo defines a message that updates the withdraw address for
 * a registered DevFeeInfo
 */
export interface MsgUpdateDevFeeInfoAmino {
  /** contract hex address */
  contract_address: string;
  /** deployer bech32 address */
  deployer_address: string;
  /** new withdraw bech32 address for receiving the transaction fees */
  withdraw_address: string;
}
export interface MsgUpdateDevFeeInfoAminoMsg {
  type: "/evmos.fees.v1.MsgUpdateDevFeeInfo";
  value: MsgUpdateDevFeeInfoAmino;
}
/**
 * MsgUpdateDevFeeInfo defines a message that updates the withdraw address for
 * a registered DevFeeInfo
 */
export interface MsgUpdateDevFeeInfoSDKType {
  contract_address: string;
  deployer_address: string;
  withdraw_address: string;
}
/** MsgUpdateDevFeeInfoResponse defines the MsgUpdateDevFeeInfo response type */
export interface MsgUpdateDevFeeInfoResponse {}
export interface MsgUpdateDevFeeInfoResponseProtoMsg {
  typeUrl: "/evmos.fees.v1.MsgUpdateDevFeeInfoResponse";
  value: Uint8Array;
}
/** MsgUpdateDevFeeInfoResponse defines the MsgUpdateDevFeeInfo response type */
export interface MsgUpdateDevFeeInfoResponseAmino {}
export interface MsgUpdateDevFeeInfoResponseAminoMsg {
  type: "/evmos.fees.v1.MsgUpdateDevFeeInfoResponse";
  value: MsgUpdateDevFeeInfoResponseAmino;
}
/** MsgUpdateDevFeeInfoResponse defines the MsgUpdateDevFeeInfo response type */
export interface MsgUpdateDevFeeInfoResponseSDKType {}
function createBaseMsgRegisterDevFeeInfo(): MsgRegisterDevFeeInfo {
  return {
    contractAddress: "",
    deployerAddress: "",
    withdrawAddress: "",
    nonces: []
  };
}
export const MsgRegisterDevFeeInfo = {
  typeUrl: "/evmos.fees.v1.MsgRegisterDevFeeInfo",
  encode(message: MsgRegisterDevFeeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.deployerAddress !== "") {
      writer.uint32(18).string(message.deployerAddress);
    }
    if (message.withdrawAddress !== "") {
      writer.uint32(26).string(message.withdrawAddress);
    }
    writer.uint32(34).fork();
    for (const v of message.nonces) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterDevFeeInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterDevFeeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.deployerAddress = reader.string();
          break;
        case 3:
          message.withdrawAddress = reader.string();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.nonces.push((reader.uint64() as Long));
            }
          } else {
            message.nonces.push((reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterDevFeeInfo {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      deployerAddress: isSet(object.deployerAddress) ? String(object.deployerAddress) : "",
      withdrawAddress: isSet(object.withdrawAddress) ? String(object.withdrawAddress) : "",
      nonces: Array.isArray(object?.nonces) ? object.nonces.map((e: any) => Long.fromValue(e)) : []
    };
  },
  toJSON(message: MsgRegisterDevFeeInfo): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.deployerAddress !== undefined && (obj.deployerAddress = message.deployerAddress);
    message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
    if (message.nonces) {
      obj.nonces = message.nonces.map(e => (e || Long.UZERO).toString());
    } else {
      obj.nonces = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgRegisterDevFeeInfo>): MsgRegisterDevFeeInfo {
    const message = createBaseMsgRegisterDevFeeInfo();
    message.contractAddress = object.contractAddress ?? "";
    message.deployerAddress = object.deployerAddress ?? "";
    message.withdrawAddress = object.withdrawAddress ?? "";
    message.nonces = object.nonces?.map(e => Long.fromValue(e)) || [];
    return message;
  },
  fromSDK(object: MsgRegisterDevFeeInfoSDKType): MsgRegisterDevFeeInfo {
    return {
      contractAddress: object?.contract_address,
      deployerAddress: object?.deployer_address,
      withdrawAddress: object?.withdraw_address,
      nonces: Array.isArray(object?.nonces) ? object.nonces.map((e: any) => e) : []
    };
  },
  toSDK(message: MsgRegisterDevFeeInfo): MsgRegisterDevFeeInfoSDKType {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.deployer_address = message.deployerAddress;
    obj.withdraw_address = message.withdrawAddress;
    if (message.nonces) {
      obj.nonces = message.nonces.map(e => e);
    } else {
      obj.nonces = [];
    }
    return obj;
  },
  fromAmino(object: MsgRegisterDevFeeInfoAmino): MsgRegisterDevFeeInfo {
    return {
      contractAddress: object.contract_address,
      deployerAddress: object.deployer_address,
      withdrawAddress: object.withdraw_address,
      nonces: Array.isArray(object?.nonces) ? object.nonces.map((e: any) => e) : []
    };
  },
  toAmino(message: MsgRegisterDevFeeInfo): MsgRegisterDevFeeInfoAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.deployer_address = message.deployerAddress;
    obj.withdraw_address = message.withdrawAddress;
    if (message.nonces) {
      obj.nonces = message.nonces.map(e => e);
    } else {
      obj.nonces = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgRegisterDevFeeInfoAminoMsg): MsgRegisterDevFeeInfo {
    return MsgRegisterDevFeeInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterDevFeeInfoProtoMsg): MsgRegisterDevFeeInfo {
    return MsgRegisterDevFeeInfo.decode(message.value);
  },
  toProto(message: MsgRegisterDevFeeInfo): Uint8Array {
    return MsgRegisterDevFeeInfo.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterDevFeeInfo): MsgRegisterDevFeeInfoProtoMsg {
    return {
      typeUrl: "/evmos.fees.v1.MsgRegisterDevFeeInfo",
      value: MsgRegisterDevFeeInfo.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterDevFeeInfoResponse(): MsgRegisterDevFeeInfoResponse {
  return {};
}
export const MsgRegisterDevFeeInfoResponse = {
  typeUrl: "/evmos.fees.v1.MsgRegisterDevFeeInfoResponse",
  encode(_: MsgRegisterDevFeeInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterDevFeeInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterDevFeeInfoResponse();
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
  fromJSON(_: any): MsgRegisterDevFeeInfoResponse {
    return {};
  },
  toJSON(_: MsgRegisterDevFeeInfoResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgRegisterDevFeeInfoResponse>): MsgRegisterDevFeeInfoResponse {
    const message = createBaseMsgRegisterDevFeeInfoResponse();
    return message;
  },
  fromSDK(_: MsgRegisterDevFeeInfoResponseSDKType): MsgRegisterDevFeeInfoResponse {
    return {};
  },
  toSDK(_: MsgRegisterDevFeeInfoResponse): MsgRegisterDevFeeInfoResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgRegisterDevFeeInfoResponseAmino): MsgRegisterDevFeeInfoResponse {
    return {};
  },
  toAmino(_: MsgRegisterDevFeeInfoResponse): MsgRegisterDevFeeInfoResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterDevFeeInfoResponseAminoMsg): MsgRegisterDevFeeInfoResponse {
    return MsgRegisterDevFeeInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterDevFeeInfoResponseProtoMsg): MsgRegisterDevFeeInfoResponse {
    return MsgRegisterDevFeeInfoResponse.decode(message.value);
  },
  toProto(message: MsgRegisterDevFeeInfoResponse): Uint8Array {
    return MsgRegisterDevFeeInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterDevFeeInfoResponse): MsgRegisterDevFeeInfoResponseProtoMsg {
    return {
      typeUrl: "/evmos.fees.v1.MsgRegisterDevFeeInfoResponse",
      value: MsgRegisterDevFeeInfoResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelDevFeeInfo(): MsgCancelDevFeeInfo {
  return {
    contractAddress: "",
    deployerAddress: ""
  };
}
export const MsgCancelDevFeeInfo = {
  typeUrl: "/evmos.fees.v1.MsgCancelDevFeeInfo",
  encode(message: MsgCancelDevFeeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.deployerAddress !== "") {
      writer.uint32(18).string(message.deployerAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelDevFeeInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelDevFeeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.deployerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelDevFeeInfo {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      deployerAddress: isSet(object.deployerAddress) ? String(object.deployerAddress) : ""
    };
  },
  toJSON(message: MsgCancelDevFeeInfo): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.deployerAddress !== undefined && (obj.deployerAddress = message.deployerAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCancelDevFeeInfo>): MsgCancelDevFeeInfo {
    const message = createBaseMsgCancelDevFeeInfo();
    message.contractAddress = object.contractAddress ?? "";
    message.deployerAddress = object.deployerAddress ?? "";
    return message;
  },
  fromSDK(object: MsgCancelDevFeeInfoSDKType): MsgCancelDevFeeInfo {
    return {
      contractAddress: object?.contract_address,
      deployerAddress: object?.deployer_address
    };
  },
  toSDK(message: MsgCancelDevFeeInfo): MsgCancelDevFeeInfoSDKType {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.deployer_address = message.deployerAddress;
    return obj;
  },
  fromAmino(object: MsgCancelDevFeeInfoAmino): MsgCancelDevFeeInfo {
    return {
      contractAddress: object.contract_address,
      deployerAddress: object.deployer_address
    };
  },
  toAmino(message: MsgCancelDevFeeInfo): MsgCancelDevFeeInfoAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.deployer_address = message.deployerAddress;
    return obj;
  },
  fromAminoMsg(object: MsgCancelDevFeeInfoAminoMsg): MsgCancelDevFeeInfo {
    return MsgCancelDevFeeInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelDevFeeInfoProtoMsg): MsgCancelDevFeeInfo {
    return MsgCancelDevFeeInfo.decode(message.value);
  },
  toProto(message: MsgCancelDevFeeInfo): Uint8Array {
    return MsgCancelDevFeeInfo.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelDevFeeInfo): MsgCancelDevFeeInfoProtoMsg {
    return {
      typeUrl: "/evmos.fees.v1.MsgCancelDevFeeInfo",
      value: MsgCancelDevFeeInfo.encode(message).finish()
    };
  }
};
function createBaseMsgCancelDevFeeInfoResponse(): MsgCancelDevFeeInfoResponse {
  return {};
}
export const MsgCancelDevFeeInfoResponse = {
  typeUrl: "/evmos.fees.v1.MsgCancelDevFeeInfoResponse",
  encode(_: MsgCancelDevFeeInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelDevFeeInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelDevFeeInfoResponse();
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
  fromJSON(_: any): MsgCancelDevFeeInfoResponse {
    return {};
  },
  toJSON(_: MsgCancelDevFeeInfoResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgCancelDevFeeInfoResponse>): MsgCancelDevFeeInfoResponse {
    const message = createBaseMsgCancelDevFeeInfoResponse();
    return message;
  },
  fromSDK(_: MsgCancelDevFeeInfoResponseSDKType): MsgCancelDevFeeInfoResponse {
    return {};
  },
  toSDK(_: MsgCancelDevFeeInfoResponse): MsgCancelDevFeeInfoResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCancelDevFeeInfoResponseAmino): MsgCancelDevFeeInfoResponse {
    return {};
  },
  toAmino(_: MsgCancelDevFeeInfoResponse): MsgCancelDevFeeInfoResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelDevFeeInfoResponseAminoMsg): MsgCancelDevFeeInfoResponse {
    return MsgCancelDevFeeInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelDevFeeInfoResponseProtoMsg): MsgCancelDevFeeInfoResponse {
    return MsgCancelDevFeeInfoResponse.decode(message.value);
  },
  toProto(message: MsgCancelDevFeeInfoResponse): Uint8Array {
    return MsgCancelDevFeeInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelDevFeeInfoResponse): MsgCancelDevFeeInfoResponseProtoMsg {
    return {
      typeUrl: "/evmos.fees.v1.MsgCancelDevFeeInfoResponse",
      value: MsgCancelDevFeeInfoResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDevFeeInfo(): MsgUpdateDevFeeInfo {
  return {
    contractAddress: "",
    deployerAddress: "",
    withdrawAddress: ""
  };
}
export const MsgUpdateDevFeeInfo = {
  typeUrl: "/evmos.fees.v1.MsgUpdateDevFeeInfo",
  encode(message: MsgUpdateDevFeeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.deployerAddress !== "") {
      writer.uint32(18).string(message.deployerAddress);
    }
    if (message.withdrawAddress !== "") {
      writer.uint32(26).string(message.withdrawAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDevFeeInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDevFeeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.deployerAddress = reader.string();
          break;
        case 3:
          message.withdrawAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateDevFeeInfo {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      deployerAddress: isSet(object.deployerAddress) ? String(object.deployerAddress) : "",
      withdrawAddress: isSet(object.withdrawAddress) ? String(object.withdrawAddress) : ""
    };
  },
  toJSON(message: MsgUpdateDevFeeInfo): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.deployerAddress !== undefined && (obj.deployerAddress = message.deployerAddress);
    message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUpdateDevFeeInfo>): MsgUpdateDevFeeInfo {
    const message = createBaseMsgUpdateDevFeeInfo();
    message.contractAddress = object.contractAddress ?? "";
    message.deployerAddress = object.deployerAddress ?? "";
    message.withdrawAddress = object.withdrawAddress ?? "";
    return message;
  },
  fromSDK(object: MsgUpdateDevFeeInfoSDKType): MsgUpdateDevFeeInfo {
    return {
      contractAddress: object?.contract_address,
      deployerAddress: object?.deployer_address,
      withdrawAddress: object?.withdraw_address
    };
  },
  toSDK(message: MsgUpdateDevFeeInfo): MsgUpdateDevFeeInfoSDKType {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.deployer_address = message.deployerAddress;
    obj.withdraw_address = message.withdrawAddress;
    return obj;
  },
  fromAmino(object: MsgUpdateDevFeeInfoAmino): MsgUpdateDevFeeInfo {
    return {
      contractAddress: object.contract_address,
      deployerAddress: object.deployer_address,
      withdrawAddress: object.withdraw_address
    };
  },
  toAmino(message: MsgUpdateDevFeeInfo): MsgUpdateDevFeeInfoAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.deployer_address = message.deployerAddress;
    obj.withdraw_address = message.withdrawAddress;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDevFeeInfoAminoMsg): MsgUpdateDevFeeInfo {
    return MsgUpdateDevFeeInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDevFeeInfoProtoMsg): MsgUpdateDevFeeInfo {
    return MsgUpdateDevFeeInfo.decode(message.value);
  },
  toProto(message: MsgUpdateDevFeeInfo): Uint8Array {
    return MsgUpdateDevFeeInfo.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDevFeeInfo): MsgUpdateDevFeeInfoProtoMsg {
    return {
      typeUrl: "/evmos.fees.v1.MsgUpdateDevFeeInfo",
      value: MsgUpdateDevFeeInfo.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDevFeeInfoResponse(): MsgUpdateDevFeeInfoResponse {
  return {};
}
export const MsgUpdateDevFeeInfoResponse = {
  typeUrl: "/evmos.fees.v1.MsgUpdateDevFeeInfoResponse",
  encode(_: MsgUpdateDevFeeInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDevFeeInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDevFeeInfoResponse();
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
  fromJSON(_: any): MsgUpdateDevFeeInfoResponse {
    return {};
  },
  toJSON(_: MsgUpdateDevFeeInfoResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUpdateDevFeeInfoResponse>): MsgUpdateDevFeeInfoResponse {
    const message = createBaseMsgUpdateDevFeeInfoResponse();
    return message;
  },
  fromSDK(_: MsgUpdateDevFeeInfoResponseSDKType): MsgUpdateDevFeeInfoResponse {
    return {};
  },
  toSDK(_: MsgUpdateDevFeeInfoResponse): MsgUpdateDevFeeInfoResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateDevFeeInfoResponseAmino): MsgUpdateDevFeeInfoResponse {
    return {};
  },
  toAmino(_: MsgUpdateDevFeeInfoResponse): MsgUpdateDevFeeInfoResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDevFeeInfoResponseAminoMsg): MsgUpdateDevFeeInfoResponse {
    return MsgUpdateDevFeeInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDevFeeInfoResponseProtoMsg): MsgUpdateDevFeeInfoResponse {
    return MsgUpdateDevFeeInfoResponse.decode(message.value);
  },
  toProto(message: MsgUpdateDevFeeInfoResponse): Uint8Array {
    return MsgUpdateDevFeeInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDevFeeInfoResponse): MsgUpdateDevFeeInfoResponseProtoMsg {
    return {
      typeUrl: "/evmos.fees.v1.MsgUpdateDevFeeInfoResponse",
      value: MsgUpdateDevFeeInfoResponse.encode(message).finish()
    };
  }
};