import { AccessConfig, AccessConfigAmino, AccessConfigSDKType } from "./types";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { fromBase64, toBase64, toUtf8, fromUtf8 } from "@cosmjs/encoding";
export const protobufPackage = "cosmwasm.wasm.v1";
/** MsgStoreCode submit Wasm code to the system */
export interface MsgStoreCode {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** WASMByteCode can be raw or gzip compressed */
  wasmByteCode: Uint8Array;
  /**
   * InstantiatePermission access control to apply on contract creation,
   * optional
   */
  instantiatePermission: AccessConfig;
}
export interface MsgStoreCodeProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode";
  value: Uint8Array;
}
/** MsgStoreCode submit Wasm code to the system */
export interface MsgStoreCodeAmino {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** WASMByteCode can be raw or gzip compressed */
  wasm_byte_code: string;
  /**
   * InstantiatePermission access control to apply on contract creation,
   * optional
   */
  instantiate_permission?: AccessConfigAmino;
}
export interface MsgStoreCodeAminoMsg {
  type: "wasm/MsgStoreCode";
  value: MsgStoreCodeAmino;
}
/** MsgStoreCode submit Wasm code to the system */
export interface MsgStoreCodeSDKType {
  sender: string;
  wasm_byte_code: Uint8Array;
  instantiate_permission: AccessConfigSDKType;
}
/** MsgStoreCodeResponse returns store result data. */
export interface MsgStoreCodeResponse {
  /** CodeID is the reference to the stored WASM code */
  codeId: Long;
}
export interface MsgStoreCodeResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgStoreCodeResponse";
  value: Uint8Array;
}
/** MsgStoreCodeResponse returns store result data. */
export interface MsgStoreCodeResponseAmino {
  /** CodeID is the reference to the stored WASM code */
  code_id: string;
}
export interface MsgStoreCodeResponseAminoMsg {
  type: "wasm/MsgStoreCodeResponse";
  value: MsgStoreCodeResponseAmino;
}
/** MsgStoreCodeResponse returns store result data. */
export interface MsgStoreCodeResponseSDKType {
  code_id: Long;
}
/**
 * MsgInstantiateContract create a new smart contract instance for the given
 * code id.
 */
export interface MsgInstantiateContract {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Admin is an optional address that can execute migrations */
  admin: string;
  /** CodeID is the reference to the stored WASM code */
  codeId: Long;
  /** Label is optional metadata to be stored with a contract instance. */
  label: string;
  /** Msg json encoded message to be passed to the contract on instantiation */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: Coin[];
}
export interface MsgInstantiateContractProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract";
  value: Uint8Array;
}
/**
 * MsgInstantiateContract create a new smart contract instance for the given
 * code id.
 */
export interface MsgInstantiateContractAmino {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Admin is an optional address that can execute migrations */
  admin: string;
  /** CodeID is the reference to the stored WASM code */
  code_id: string;
  /** Label is optional metadata to be stored with a contract instance. */
  label: string;
  /** Msg json encoded message to be passed to the contract on instantiation */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: CoinAmino[];
}
export interface MsgInstantiateContractAminoMsg {
  type: "wasm/MsgInstantiateContract";
  value: MsgInstantiateContractAmino;
}
/**
 * MsgInstantiateContract create a new smart contract instance for the given
 * code id.
 */
export interface MsgInstantiateContractSDKType {
  sender: string;
  admin: string;
  code_id: Long;
  label: string;
  msg: Uint8Array;
  funds: CoinSDKType[];
}
/** MsgInstantiateContractResponse return instantiation result data */
export interface MsgInstantiateContractResponse {
  /** Address is the bech32 address of the new contract instance. */
  address: string;
  /** Data contains base64-encoded bytes to returned from the contract */
  data: Uint8Array;
}
export interface MsgInstantiateContractResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContractResponse";
  value: Uint8Array;
}
/** MsgInstantiateContractResponse return instantiation result data */
export interface MsgInstantiateContractResponseAmino {
  /** Address is the bech32 address of the new contract instance. */
  address: string;
  /** Data contains base64-encoded bytes to returned from the contract */
  data: Uint8Array;
}
export interface MsgInstantiateContractResponseAminoMsg {
  type: "wasm/MsgInstantiateContractResponse";
  value: MsgInstantiateContractResponseAmino;
}
/** MsgInstantiateContractResponse return instantiation result data */
export interface MsgInstantiateContractResponseSDKType {
  address: string;
  data: Uint8Array;
}
/** MsgExecuteContract submits the given message data to a smart contract */
export interface MsgExecuteContract {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** Msg json encoded message to be passed to the contract */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on execution */
  funds: Coin[];
}
export interface MsgExecuteContractProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract";
  value: Uint8Array;
}
/** MsgExecuteContract submits the given message data to a smart contract */
export interface MsgExecuteContractAmino {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** Msg json encoded message to be passed to the contract */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on execution */
  funds: CoinAmino[];
}
export interface MsgExecuteContractAminoMsg {
  type: "wasm/MsgExecuteContract";
  value: MsgExecuteContractAmino;
}
/** MsgExecuteContract submits the given message data to a smart contract */
export interface MsgExecuteContractSDKType {
  sender: string;
  contract: string;
  msg: Uint8Array;
  funds: CoinSDKType[];
}
/** MsgExecuteContractResponse returns execution result data. */
export interface MsgExecuteContractResponse {
  /** Data contains base64-encoded bytes to returned from the contract */
  data: Uint8Array;
}
export interface MsgExecuteContractResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContractResponse";
  value: Uint8Array;
}
/** MsgExecuteContractResponse returns execution result data. */
export interface MsgExecuteContractResponseAmino {
  /** Data contains base64-encoded bytes to returned from the contract */
  data: Uint8Array;
}
export interface MsgExecuteContractResponseAminoMsg {
  type: "wasm/MsgExecuteContractResponse";
  value: MsgExecuteContractResponseAmino;
}
/** MsgExecuteContractResponse returns execution result data. */
export interface MsgExecuteContractResponseSDKType {
  data: Uint8Array;
}
/** MsgMigrateContract runs a code upgrade/ downgrade for a smart contract */
export interface MsgMigrateContract {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** CodeID references the new WASM code */
  codeId: Long;
  /** Msg json encoded message to be passed to the contract on migration */
  msg: Uint8Array;
}
export interface MsgMigrateContractProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract";
  value: Uint8Array;
}
/** MsgMigrateContract runs a code upgrade/ downgrade for a smart contract */
export interface MsgMigrateContractAmino {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** CodeID references the new WASM code */
  code_id: string;
  /** Msg json encoded message to be passed to the contract on migration */
  msg: Uint8Array;
}
export interface MsgMigrateContractAminoMsg {
  type: "wasm/MsgMigrateContract";
  value: MsgMigrateContractAmino;
}
/** MsgMigrateContract runs a code upgrade/ downgrade for a smart contract */
export interface MsgMigrateContractSDKType {
  sender: string;
  contract: string;
  code_id: Long;
  msg: Uint8Array;
}
/** MsgMigrateContractResponse returns contract migration result data. */
export interface MsgMigrateContractResponse {
  /**
   * Data contains same raw bytes returned as data from the wasm contract.
   * (May be empty)
   */
  data: Uint8Array;
}
export interface MsgMigrateContractResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContractResponse";
  value: Uint8Array;
}
/** MsgMigrateContractResponse returns contract migration result data. */
export interface MsgMigrateContractResponseAmino {
  /**
   * Data contains same raw bytes returned as data from the wasm contract.
   * (May be empty)
   */
  data: Uint8Array;
}
export interface MsgMigrateContractResponseAminoMsg {
  type: "wasm/MsgMigrateContractResponse";
  value: MsgMigrateContractResponseAmino;
}
/** MsgMigrateContractResponse returns contract migration result data. */
export interface MsgMigrateContractResponseSDKType {
  data: Uint8Array;
}
/** MsgUpdateAdmin sets a new admin for a smart contract */
export interface MsgUpdateAdmin {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** NewAdmin address to be set */
  newAdmin: string;
  /** Contract is the address of the smart contract */
  contract: string;
}
export interface MsgUpdateAdminProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin";
  value: Uint8Array;
}
/** MsgUpdateAdmin sets a new admin for a smart contract */
export interface MsgUpdateAdminAmino {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** NewAdmin address to be set */
  new_admin: string;
  /** Contract is the address of the smart contract */
  contract: string;
}
export interface MsgUpdateAdminAminoMsg {
  type: "wasm/MsgUpdateAdmin";
  value: MsgUpdateAdminAmino;
}
/** MsgUpdateAdmin sets a new admin for a smart contract */
export interface MsgUpdateAdminSDKType {
  sender: string;
  new_admin: string;
  contract: string;
}
/** MsgUpdateAdminResponse returns empty data */
export interface MsgUpdateAdminResponse {}
export interface MsgUpdateAdminResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdminResponse";
  value: Uint8Array;
}
/** MsgUpdateAdminResponse returns empty data */
export interface MsgUpdateAdminResponseAmino {}
export interface MsgUpdateAdminResponseAminoMsg {
  type: "wasm/MsgUpdateAdminResponse";
  value: MsgUpdateAdminResponseAmino;
}
/** MsgUpdateAdminResponse returns empty data */
export interface MsgUpdateAdminResponseSDKType {}
/** MsgClearAdmin removes any admin stored for a smart contract */
export interface MsgClearAdmin {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Contract is the address of the smart contract */
  contract: string;
}
export interface MsgClearAdminProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin";
  value: Uint8Array;
}
/** MsgClearAdmin removes any admin stored for a smart contract */
export interface MsgClearAdminAmino {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Contract is the address of the smart contract */
  contract: string;
}
export interface MsgClearAdminAminoMsg {
  type: "wasm/MsgClearAdmin";
  value: MsgClearAdminAmino;
}
/** MsgClearAdmin removes any admin stored for a smart contract */
export interface MsgClearAdminSDKType {
  sender: string;
  contract: string;
}
/** MsgClearAdminResponse returns empty data */
export interface MsgClearAdminResponse {}
export interface MsgClearAdminResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgClearAdminResponse";
  value: Uint8Array;
}
/** MsgClearAdminResponse returns empty data */
export interface MsgClearAdminResponseAmino {}
export interface MsgClearAdminResponseAminoMsg {
  type: "wasm/MsgClearAdminResponse";
  value: MsgClearAdminResponseAmino;
}
/** MsgClearAdminResponse returns empty data */
export interface MsgClearAdminResponseSDKType {}
function createBaseMsgStoreCode(): MsgStoreCode {
  return {
    sender: "",
    wasmByteCode: new Uint8Array(),
    instantiatePermission: AccessConfig.fromPartial({})
  };
}
export const MsgStoreCode = {
  typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
  aminoType: "wasm/MsgStoreCode",
  encode(message: MsgStoreCode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.wasmByteCode.length !== 0) {
      writer.uint32(18).bytes(message.wasmByteCode);
    }
    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStoreCode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreCode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.wasmByteCode = reader.bytes();
          break;
        case 5:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgStoreCode {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      wasmByteCode: isSet(object.wasmByteCode) ? bytesFromBase64(object.wasmByteCode) : new Uint8Array(),
      instantiatePermission: isSet(object.instantiatePermission) ? AccessConfig.fromJSON(object.instantiatePermission) : undefined
    };
  },
  toJSON(message: MsgStoreCode): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.wasmByteCode !== undefined && (obj.wasmByteCode = base64FromBytes(message.wasmByteCode !== undefined ? message.wasmByteCode : new Uint8Array()));
    message.instantiatePermission !== undefined && (obj.instantiatePermission = message.instantiatePermission ? AccessConfig.toJSON(message.instantiatePermission) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgStoreCode>): MsgStoreCode {
    const message = createBaseMsgStoreCode();
    message.sender = object.sender ?? "";
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
    message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : undefined;
    return message;
  },
  fromSDK(object: MsgStoreCodeSDKType): MsgStoreCode {
    return {
      sender: object?.sender,
      wasmByteCode: object?.wasm_byte_code,
      instantiatePermission: object.instantiate_permission ? AccessConfig.fromSDK(object.instantiate_permission) : undefined
    };
  },
  toSDK(message: MsgStoreCode): MsgStoreCodeSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.wasm_byte_code = message.wasmByteCode;
    message.instantiatePermission !== undefined && (obj.instantiate_permission = message.instantiatePermission ? AccessConfig.toSDK(message.instantiatePermission) : undefined);
    return obj;
  },
  fromAmino(object: MsgStoreCodeAmino): MsgStoreCode {
    return {
      sender: object.sender,
      wasmByteCode: fromBase64(object.wasm_byte_code),
      instantiatePermission: object?.instantiate_permission ? AccessConfig.fromAmino(object.instantiate_permission) : undefined
    };
  },
  toAmino(message: MsgStoreCode): MsgStoreCodeAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.wasm_byte_code = message.wasmByteCode ? toBase64(message.wasmByteCode) : undefined;
    obj.instantiate_permission = message.instantiatePermission ? AccessConfig.toAmino(message.instantiatePermission) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgStoreCodeAminoMsg): MsgStoreCode {
    return MsgStoreCode.fromAmino(object.value);
  },
  toAminoMsg(message: MsgStoreCode): MsgStoreCodeAminoMsg {
    return {
      type: "wasm/MsgStoreCode",
      value: MsgStoreCode.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgStoreCodeProtoMsg): MsgStoreCode {
    return MsgStoreCode.decode(message.value);
  },
  toProto(message: MsgStoreCode): Uint8Array {
    return MsgStoreCode.encode(message).finish();
  },
  toProtoMsg(message: MsgStoreCode): MsgStoreCodeProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
      value: MsgStoreCode.encode(message).finish()
    };
  }
};
function createBaseMsgStoreCodeResponse(): MsgStoreCodeResponse {
  return {
    codeId: Long.UZERO
  };
}
export const MsgStoreCodeResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgStoreCodeResponse",
  aminoType: "wasm/MsgStoreCodeResponse",
  encode(message: MsgStoreCodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStoreCodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgStoreCodeResponse {
    return {
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO
    };
  },
  toJSON(message: MsgStoreCodeResponse): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgStoreCodeResponse>): MsgStoreCodeResponse {
    const message = createBaseMsgStoreCodeResponse();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    return message;
  },
  fromSDK(object: MsgStoreCodeResponseSDKType): MsgStoreCodeResponse {
    return {
      codeId: object?.code_id
    };
  },
  toSDK(message: MsgStoreCodeResponse): MsgStoreCodeResponseSDKType {
    const obj: any = {};
    obj.code_id = message.codeId;
    return obj;
  },
  fromAmino(object: MsgStoreCodeResponseAmino): MsgStoreCodeResponse {
    return {
      codeId: Long.fromString(object.code_id)
    };
  },
  toAmino(message: MsgStoreCodeResponse): MsgStoreCodeResponseAmino {
    const obj: any = {};
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgStoreCodeResponseAminoMsg): MsgStoreCodeResponse {
    return MsgStoreCodeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgStoreCodeResponse): MsgStoreCodeResponseAminoMsg {
    return {
      type: "wasm/MsgStoreCodeResponse",
      value: MsgStoreCodeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgStoreCodeResponseProtoMsg): MsgStoreCodeResponse {
    return MsgStoreCodeResponse.decode(message.value);
  },
  toProto(message: MsgStoreCodeResponse): Uint8Array {
    return MsgStoreCodeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStoreCodeResponse): MsgStoreCodeResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgStoreCodeResponse",
      value: MsgStoreCodeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgInstantiateContract(): MsgInstantiateContract {
  return {
    sender: "",
    admin: "",
    codeId: Long.UZERO,
    label: "",
    msg: new Uint8Array(),
    funds: []
  };
}
export const MsgInstantiateContract = {
  typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
  aminoType: "wasm/MsgInstantiateContract",
  encode(message: MsgInstantiateContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (!message.codeId.isZero()) {
      writer.uint32(24).uint64(message.codeId);
    }
    if (message.label !== "") {
      writer.uint32(34).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantiateContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.admin = reader.string();
          break;
        case 3:
          message.codeId = (reader.uint64() as Long);
          break;
        case 4:
          message.label = reader.string();
          break;
        case 5:
          message.msg = reader.bytes();
          break;
        case 6:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgInstantiateContract {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      label: isSet(object.label) ? String(object.label) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgInstantiateContract): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.admin !== undefined && (obj.admin = message.admin);
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.label !== undefined && (obj.label = message.label);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.funds = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgInstantiateContract>): MsgInstantiateContract {
    const message = createBaseMsgInstantiateContract();
    message.sender = object.sender ?? "";
    message.admin = object.admin ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.label = object.label ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgInstantiateContractSDKType): MsgInstantiateContract {
    return {
      sender: object?.sender,
      admin: object?.admin,
      codeId: object?.code_id,
      label: object?.label,
      msg: object?.msg,
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgInstantiateContract): MsgInstantiateContractSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.admin = message.admin;
    obj.code_id = message.codeId;
    obj.label = message.label;
    obj.msg = message.msg;
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.funds = [];
    }
    return obj;
  },
  fromAmino(object: MsgInstantiateContractAmino): MsgInstantiateContract {
    return {
      sender: object.sender,
      admin: object.admin,
      codeId: Long.fromString(object.code_id),
      label: object.label,
      msg: toUtf8(JSON.stringify(object.msg)),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgInstantiateContract): MsgInstantiateContractAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.admin = message.admin;
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    obj.label = message.label;
    obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : undefined;
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.funds = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgInstantiateContractAminoMsg): MsgInstantiateContract {
    return MsgInstantiateContract.fromAmino(object.value);
  },
  toAminoMsg(message: MsgInstantiateContract): MsgInstantiateContractAminoMsg {
    return {
      type: "wasm/MsgInstantiateContract",
      value: MsgInstantiateContract.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgInstantiateContractProtoMsg): MsgInstantiateContract {
    return MsgInstantiateContract.decode(message.value);
  },
  toProto(message: MsgInstantiateContract): Uint8Array {
    return MsgInstantiateContract.encode(message).finish();
  },
  toProtoMsg(message: MsgInstantiateContract): MsgInstantiateContractProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
      value: MsgInstantiateContract.encode(message).finish()
    };
  }
};
function createBaseMsgInstantiateContractResponse(): MsgInstantiateContractResponse {
  return {
    address: "",
    data: new Uint8Array()
  };
}
export const MsgInstantiateContractResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContractResponse",
  aminoType: "wasm/MsgInstantiateContractResponse",
  encode(message: MsgInstantiateContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantiateContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgInstantiateContractResponse {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message: MsgInstantiateContractResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgInstantiateContractResponse>): MsgInstantiateContractResponse {
    const message = createBaseMsgInstantiateContractResponse();
    message.address = object.address ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MsgInstantiateContractResponseSDKType): MsgInstantiateContractResponse {
    return {
      address: object?.address,
      data: object?.data
    };
  },
  toSDK(message: MsgInstantiateContractResponse): MsgInstantiateContractResponseSDKType {
    const obj: any = {};
    obj.address = message.address;
    obj.data = message.data;
    return obj;
  },
  fromAmino(object: MsgInstantiateContractResponseAmino): MsgInstantiateContractResponse {
    return {
      address: object.address,
      data: object.data
    };
  },
  toAmino(message: MsgInstantiateContractResponse): MsgInstantiateContractResponseAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.data = message.data;
    return obj;
  },
  fromAminoMsg(object: MsgInstantiateContractResponseAminoMsg): MsgInstantiateContractResponse {
    return MsgInstantiateContractResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgInstantiateContractResponse): MsgInstantiateContractResponseAminoMsg {
    return {
      type: "wasm/MsgInstantiateContractResponse",
      value: MsgInstantiateContractResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgInstantiateContractResponseProtoMsg): MsgInstantiateContractResponse {
    return MsgInstantiateContractResponse.decode(message.value);
  },
  toProto(message: MsgInstantiateContractResponse): Uint8Array {
    return MsgInstantiateContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgInstantiateContractResponse): MsgInstantiateContractResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContractResponse",
      value: MsgInstantiateContractResponse.encode(message).finish()
    };
  }
};
function createBaseMsgExecuteContract(): MsgExecuteContract {
  return {
    sender: "",
    contract: "",
    msg: new Uint8Array(),
    funds: []
  };
}
export const MsgExecuteContract = {
  typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
  aminoType: "wasm/MsgExecuteContract",
  encode(message: MsgExecuteContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(26).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.contract = reader.string();
          break;
        case 3:
          message.msg = reader.bytes();
          break;
        case 5:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExecuteContract {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgExecuteContract): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contract !== undefined && (obj.contract = message.contract);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.funds = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgExecuteContract>): MsgExecuteContract {
    const message = createBaseMsgExecuteContract();
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgExecuteContractSDKType): MsgExecuteContract {
    return {
      sender: object?.sender,
      contract: object?.contract,
      msg: object?.msg,
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgExecuteContract): MsgExecuteContractSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.contract = message.contract;
    obj.msg = message.msg;
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.funds = [];
    }
    return obj;
  },
  fromAmino(object: MsgExecuteContractAmino): MsgExecuteContract {
    return {
      sender: object.sender,
      contract: object.contract,
      msg: toUtf8(JSON.stringify(object.msg)),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgExecuteContract): MsgExecuteContractAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.contract = message.contract;
    obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : undefined;
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.funds = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgExecuteContractAminoMsg): MsgExecuteContract {
    return MsgExecuteContract.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExecuteContract): MsgExecuteContractAminoMsg {
    return {
      type: "wasm/MsgExecuteContract",
      value: MsgExecuteContract.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExecuteContractProtoMsg): MsgExecuteContract {
    return MsgExecuteContract.decode(message.value);
  },
  toProto(message: MsgExecuteContract): Uint8Array {
    return MsgExecuteContract.encode(message).finish();
  },
  toProtoMsg(message: MsgExecuteContract): MsgExecuteContractProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.encode(message).finish()
    };
  }
};
function createBaseMsgExecuteContractResponse(): MsgExecuteContractResponse {
  return {
    data: new Uint8Array()
  };
}
export const MsgExecuteContractResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContractResponse",
  aminoType: "wasm/MsgExecuteContractResponse",
  encode(message: MsgExecuteContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExecuteContractResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message: MsgExecuteContractResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgExecuteContractResponse>): MsgExecuteContractResponse {
    const message = createBaseMsgExecuteContractResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MsgExecuteContractResponseSDKType): MsgExecuteContractResponse {
    return {
      data: object?.data
    };
  },
  toSDK(message: MsgExecuteContractResponse): MsgExecuteContractResponseSDKType {
    const obj: any = {};
    obj.data = message.data;
    return obj;
  },
  fromAmino(object: MsgExecuteContractResponseAmino): MsgExecuteContractResponse {
    return {
      data: object.data
    };
  },
  toAmino(message: MsgExecuteContractResponse): MsgExecuteContractResponseAmino {
    const obj: any = {};
    obj.data = message.data;
    return obj;
  },
  fromAminoMsg(object: MsgExecuteContractResponseAminoMsg): MsgExecuteContractResponse {
    return MsgExecuteContractResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExecuteContractResponse): MsgExecuteContractResponseAminoMsg {
    return {
      type: "wasm/MsgExecuteContractResponse",
      value: MsgExecuteContractResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExecuteContractResponseProtoMsg): MsgExecuteContractResponse {
    return MsgExecuteContractResponse.decode(message.value);
  },
  toProto(message: MsgExecuteContractResponse): Uint8Array {
    return MsgExecuteContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExecuteContractResponse): MsgExecuteContractResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContractResponse",
      value: MsgExecuteContractResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMigrateContract(): MsgMigrateContract {
  return {
    sender: "",
    contract: "",
    codeId: Long.UZERO,
    msg: new Uint8Array()
  };
}
export const MsgMigrateContract = {
  typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
  aminoType: "wasm/MsgMigrateContract",
  encode(message: MsgMigrateContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    if (!message.codeId.isZero()) {
      writer.uint32(24).uint64(message.codeId);
    }
    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMigrateContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.contract = reader.string();
          break;
        case 3:
          message.codeId = (reader.uint64() as Long);
          break;
        case 4:
          message.msg = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgMigrateContract {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array()
    };
  },
  toJSON(message: MsgMigrateContract): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contract !== undefined && (obj.contract = message.contract);
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgMigrateContract>): MsgMigrateContract {
    const message = createBaseMsgMigrateContract();
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.msg = object.msg ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MsgMigrateContractSDKType): MsgMigrateContract {
    return {
      sender: object?.sender,
      contract: object?.contract,
      codeId: object?.code_id,
      msg: object?.msg
    };
  },
  toSDK(message: MsgMigrateContract): MsgMigrateContractSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.contract = message.contract;
    obj.code_id = message.codeId;
    obj.msg = message.msg;
    return obj;
  },
  fromAmino(object: MsgMigrateContractAmino): MsgMigrateContract {
    return {
      sender: object.sender,
      contract: object.contract,
      codeId: Long.fromString(object.code_id),
      msg: toUtf8(JSON.stringify(object.msg))
    };
  },
  toAmino(message: MsgMigrateContract): MsgMigrateContractAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.contract = message.contract;
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgMigrateContractAminoMsg): MsgMigrateContract {
    return MsgMigrateContract.fromAmino(object.value);
  },
  toAminoMsg(message: MsgMigrateContract): MsgMigrateContractAminoMsg {
    return {
      type: "wasm/MsgMigrateContract",
      value: MsgMigrateContract.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgMigrateContractProtoMsg): MsgMigrateContract {
    return MsgMigrateContract.decode(message.value);
  },
  toProto(message: MsgMigrateContract): Uint8Array {
    return MsgMigrateContract.encode(message).finish();
  },
  toProtoMsg(message: MsgMigrateContract): MsgMigrateContractProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
      value: MsgMigrateContract.encode(message).finish()
    };
  }
};
function createBaseMsgMigrateContractResponse(): MsgMigrateContractResponse {
  return {
    data: new Uint8Array()
  };
}
export const MsgMigrateContractResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContractResponse",
  aminoType: "wasm/MsgMigrateContractResponse",
  encode(message: MsgMigrateContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMigrateContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgMigrateContractResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message: MsgMigrateContractResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgMigrateContractResponse>): MsgMigrateContractResponse {
    const message = createBaseMsgMigrateContractResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MsgMigrateContractResponseSDKType): MsgMigrateContractResponse {
    return {
      data: object?.data
    };
  },
  toSDK(message: MsgMigrateContractResponse): MsgMigrateContractResponseSDKType {
    const obj: any = {};
    obj.data = message.data;
    return obj;
  },
  fromAmino(object: MsgMigrateContractResponseAmino): MsgMigrateContractResponse {
    return {
      data: object.data
    };
  },
  toAmino(message: MsgMigrateContractResponse): MsgMigrateContractResponseAmino {
    const obj: any = {};
    obj.data = message.data;
    return obj;
  },
  fromAminoMsg(object: MsgMigrateContractResponseAminoMsg): MsgMigrateContractResponse {
    return MsgMigrateContractResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgMigrateContractResponse): MsgMigrateContractResponseAminoMsg {
    return {
      type: "wasm/MsgMigrateContractResponse",
      value: MsgMigrateContractResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgMigrateContractResponseProtoMsg): MsgMigrateContractResponse {
    return MsgMigrateContractResponse.decode(message.value);
  },
  toProto(message: MsgMigrateContractResponse): Uint8Array {
    return MsgMigrateContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMigrateContractResponse): MsgMigrateContractResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContractResponse",
      value: MsgMigrateContractResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAdmin(): MsgUpdateAdmin {
  return {
    sender: "",
    newAdmin: "",
    contract: ""
  };
}
export const MsgUpdateAdmin = {
  typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
  aminoType: "wasm/MsgUpdateAdmin",
  encode(message: MsgUpdateAdmin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.newAdmin !== "") {
      writer.uint32(18).string(message.newAdmin);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAdmin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.newAdmin = reader.string();
          break;
        case 3:
          message.contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateAdmin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : "",
      contract: isSet(object.contract) ? String(object.contract) : ""
    };
  },
  toJSON(message: MsgUpdateAdmin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUpdateAdmin>): MsgUpdateAdmin {
    const message = createBaseMsgUpdateAdmin();
    message.sender = object.sender ?? "";
    message.newAdmin = object.newAdmin ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
  fromSDK(object: MsgUpdateAdminSDKType): MsgUpdateAdmin {
    return {
      sender: object?.sender,
      newAdmin: object?.new_admin,
      contract: object?.contract
    };
  },
  toSDK(message: MsgUpdateAdmin): MsgUpdateAdminSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.new_admin = message.newAdmin;
    obj.contract = message.contract;
    return obj;
  },
  fromAmino(object: MsgUpdateAdminAmino): MsgUpdateAdmin {
    return {
      sender: object.sender,
      newAdmin: object.new_admin,
      contract: object.contract
    };
  },
  toAmino(message: MsgUpdateAdmin): MsgUpdateAdminAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.new_admin = message.newAdmin;
    obj.contract = message.contract;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAdminAminoMsg): MsgUpdateAdmin {
    return MsgUpdateAdmin.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateAdmin): MsgUpdateAdminAminoMsg {
    return {
      type: "wasm/MsgUpdateAdmin",
      value: MsgUpdateAdmin.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateAdminProtoMsg): MsgUpdateAdmin {
    return MsgUpdateAdmin.decode(message.value);
  },
  toProto(message: MsgUpdateAdmin): Uint8Array {
    return MsgUpdateAdmin.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAdmin): MsgUpdateAdminProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
      value: MsgUpdateAdmin.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAdminResponse(): MsgUpdateAdminResponse {
  return {};
}
export const MsgUpdateAdminResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdminResponse",
  aminoType: "wasm/MsgUpdateAdminResponse",
  encode(_: MsgUpdateAdminResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAdminResponse();
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
  fromJSON(_: any): MsgUpdateAdminResponse {
    return {};
  },
  toJSON(_: MsgUpdateAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUpdateAdminResponse>): MsgUpdateAdminResponse {
    const message = createBaseMsgUpdateAdminResponse();
    return message;
  },
  fromSDK(_: MsgUpdateAdminResponseSDKType): MsgUpdateAdminResponse {
    return {};
  },
  toSDK(_: MsgUpdateAdminResponse): MsgUpdateAdminResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateAdminResponseAmino): MsgUpdateAdminResponse {
    return {};
  },
  toAmino(_: MsgUpdateAdminResponse): MsgUpdateAdminResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAdminResponseAminoMsg): MsgUpdateAdminResponse {
    return MsgUpdateAdminResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateAdminResponse): MsgUpdateAdminResponseAminoMsg {
    return {
      type: "wasm/MsgUpdateAdminResponse",
      value: MsgUpdateAdminResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateAdminResponseProtoMsg): MsgUpdateAdminResponse {
    return MsgUpdateAdminResponse.decode(message.value);
  },
  toProto(message: MsgUpdateAdminResponse): Uint8Array {
    return MsgUpdateAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAdminResponse): MsgUpdateAdminResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdminResponse",
      value: MsgUpdateAdminResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClearAdmin(): MsgClearAdmin {
  return {
    sender: "",
    contract: ""
  };
}
export const MsgClearAdmin = {
  typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
  aminoType: "wasm/MsgClearAdmin",
  encode(message: MsgClearAdmin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClearAdmin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClearAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 3:
          message.contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgClearAdmin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      contract: isSet(object.contract) ? String(object.contract) : ""
    };
  },
  toJSON(message: MsgClearAdmin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgClearAdmin>): MsgClearAdmin {
    const message = createBaseMsgClearAdmin();
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
  fromSDK(object: MsgClearAdminSDKType): MsgClearAdmin {
    return {
      sender: object?.sender,
      contract: object?.contract
    };
  },
  toSDK(message: MsgClearAdmin): MsgClearAdminSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.contract = message.contract;
    return obj;
  },
  fromAmino(object: MsgClearAdminAmino): MsgClearAdmin {
    return {
      sender: object.sender,
      contract: object.contract
    };
  },
  toAmino(message: MsgClearAdmin): MsgClearAdminAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.contract = message.contract;
    return obj;
  },
  fromAminoMsg(object: MsgClearAdminAminoMsg): MsgClearAdmin {
    return MsgClearAdmin.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClearAdmin): MsgClearAdminAminoMsg {
    return {
      type: "wasm/MsgClearAdmin",
      value: MsgClearAdmin.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgClearAdminProtoMsg): MsgClearAdmin {
    return MsgClearAdmin.decode(message.value);
  },
  toProto(message: MsgClearAdmin): Uint8Array {
    return MsgClearAdmin.encode(message).finish();
  },
  toProtoMsg(message: MsgClearAdmin): MsgClearAdminProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
      value: MsgClearAdmin.encode(message).finish()
    };
  }
};
function createBaseMsgClearAdminResponse(): MsgClearAdminResponse {
  return {};
}
export const MsgClearAdminResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgClearAdminResponse",
  aminoType: "wasm/MsgClearAdminResponse",
  encode(_: MsgClearAdminResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClearAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClearAdminResponse();
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
  fromJSON(_: any): MsgClearAdminResponse {
    return {};
  },
  toJSON(_: MsgClearAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgClearAdminResponse>): MsgClearAdminResponse {
    const message = createBaseMsgClearAdminResponse();
    return message;
  },
  fromSDK(_: MsgClearAdminResponseSDKType): MsgClearAdminResponse {
    return {};
  },
  toSDK(_: MsgClearAdminResponse): MsgClearAdminResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgClearAdminResponseAmino): MsgClearAdminResponse {
    return {};
  },
  toAmino(_: MsgClearAdminResponse): MsgClearAdminResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClearAdminResponseAminoMsg): MsgClearAdminResponse {
    return MsgClearAdminResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClearAdminResponse): MsgClearAdminResponseAminoMsg {
    return {
      type: "wasm/MsgClearAdminResponse",
      value: MsgClearAdminResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgClearAdminResponseProtoMsg): MsgClearAdminResponse {
    return MsgClearAdminResponse.decode(message.value);
  },
  toProto(message: MsgClearAdminResponse): Uint8Array {
    return MsgClearAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClearAdminResponse): MsgClearAdminResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgClearAdminResponse",
      value: MsgClearAdminResponse.encode(message).finish()
    };
  }
};