//@ts-nocheck
import { AccessConfig, AccessConfigAmino, AccessConfigSDKType } from "./types";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { fromBase64, toBase64, toUtf8, fromUtf8 } from "@cosmjs/encoding";
import { GlobalDecoderRegistry } from "../../../registry";
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
  instantiatePermission?: AccessConfig;
}
export interface MsgStoreCodeProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode";
  value: Uint8Array;
}
/** MsgStoreCode submit Wasm code to the system */
export interface MsgStoreCodeAmino {
  /** Sender is the that actor that signed the messages */
  sender?: string;
  /** WASMByteCode can be raw or gzip compressed */
  wasm_byte_code?: string;
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
  instantiate_permission?: AccessConfigSDKType;
}
/** MsgStoreCodeResponse returns store result data. */
export interface MsgStoreCodeResponse {
  /** CodeID is the reference to the stored WASM code */
  codeId: bigint;
}
export interface MsgStoreCodeResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgStoreCodeResponse";
  value: Uint8Array;
}
/** MsgStoreCodeResponse returns store result data. */
export interface MsgStoreCodeResponseAmino {
  /** CodeID is the reference to the stored WASM code */
  code_id?: string;
}
export interface MsgStoreCodeResponseAminoMsg {
  type: "wasm/MsgStoreCodeResponse";
  value: MsgStoreCodeResponseAmino;
}
/** MsgStoreCodeResponse returns store result data. */
export interface MsgStoreCodeResponseSDKType {
  code_id: bigint;
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
  codeId: bigint;
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
  sender?: string;
  /** Admin is an optional address that can execute migrations */
  admin?: string;
  /** CodeID is the reference to the stored WASM code */
  code_id?: string;
  /** Label is optional metadata to be stored with a contract instance. */
  label?: string;
  /** Msg json encoded message to be passed to the contract on instantiation */
  msg?: any;
  /** Funds coins that are transferred to the contract on instantiation */
  funds?: CoinAmino[];
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
  code_id: bigint;
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
  address?: string;
  /** Data contains base64-encoded bytes to returned from the contract */
  data?: string;
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
  sender?: string;
  /** Contract is the address of the smart contract */
  contract?: string;
  /** Msg json encoded message to be passed to the contract */
  msg?: any;
  /** Funds coins that are transferred to the contract on execution */
  funds?: CoinAmino[];
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
  data?: string;
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
  codeId: bigint;
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
  sender?: string;
  /** Contract is the address of the smart contract */
  contract?: string;
  /** CodeID references the new WASM code */
  code_id?: string;
  /** Msg json encoded message to be passed to the contract on migration */
  msg?: any;
}
export interface MsgMigrateContractAminoMsg {
  type: "wasm/MsgMigrateContract";
  value: MsgMigrateContractAmino;
}
/** MsgMigrateContract runs a code upgrade/ downgrade for a smart contract */
export interface MsgMigrateContractSDKType {
  sender: string;
  contract: string;
  code_id: bigint;
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
  data?: string;
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
  sender?: string;
  /** NewAdmin address to be set */
  new_admin?: string;
  /** Contract is the address of the smart contract */
  contract?: string;
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
  sender?: string;
  /** Contract is the address of the smart contract */
  contract?: string;
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
    instantiatePermission: undefined
  };
}
export const MsgStoreCode = {
  typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
  aminoType: "wasm/MsgStoreCode",
  is(o: any): o is MsgStoreCode {
    return o && (o.$typeUrl === MsgStoreCode.typeUrl || typeof o.sender === "string" && (o.wasmByteCode instanceof Uint8Array || typeof o.wasmByteCode === "string"));
  },
  isSDK(o: any): o is MsgStoreCodeSDKType {
    return o && (o.$typeUrl === MsgStoreCode.typeUrl || typeof o.sender === "string" && (o.wasm_byte_code instanceof Uint8Array || typeof o.wasm_byte_code === "string"));
  },
  isAmino(o: any): o is MsgStoreCodeAmino {
    return o && (o.$typeUrl === MsgStoreCode.typeUrl || typeof o.sender === "string" && (o.wasm_byte_code instanceof Uint8Array || typeof o.wasm_byte_code === "string"));
  },
  encode(message: MsgStoreCode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== undefined) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStoreCode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseMsgStoreCode();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.wasmByteCode)) obj.wasmByteCode = bytesFromBase64(object.wasmByteCode);
    if (isSet(object.instantiatePermission)) obj.instantiatePermission = AccessConfig.fromJSON(object.instantiatePermission);
    return obj;
  },
  toJSON(message: MsgStoreCode): JsonSafe<MsgStoreCode> {
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
    if (object.instantiatePermission !== undefined && object.instantiatePermission !== null) {
      message.instantiatePermission = AccessConfig.fromPartial(object.instantiatePermission);
    }
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
    const message = createBaseMsgStoreCode();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.wasm_byte_code !== undefined && object.wasm_byte_code !== null) {
      message.wasmByteCode = fromBase64(object.wasm_byte_code);
    }
    if (object.instantiate_permission !== undefined && object.instantiate_permission !== null) {
      message.instantiatePermission = AccessConfig.fromAmino(object.instantiate_permission);
    }
    return message;
  },
  toAmino(message: MsgStoreCode): MsgStoreCodeAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
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
GlobalDecoderRegistry.register(MsgStoreCode.typeUrl, MsgStoreCode);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgStoreCode.aminoType, MsgStoreCode.typeUrl);
function createBaseMsgStoreCodeResponse(): MsgStoreCodeResponse {
  return {
    codeId: BigInt(0)
  };
}
export const MsgStoreCodeResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgStoreCodeResponse",
  aminoType: "wasm/MsgStoreCodeResponse",
  is(o: any): o is MsgStoreCodeResponse {
    return o && (o.$typeUrl === MsgStoreCodeResponse.typeUrl || typeof o.codeId === "bigint");
  },
  isSDK(o: any): o is MsgStoreCodeResponseSDKType {
    return o && (o.$typeUrl === MsgStoreCodeResponse.typeUrl || typeof o.code_id === "bigint");
  },
  isAmino(o: any): o is MsgStoreCodeResponseAmino {
    return o && (o.$typeUrl === MsgStoreCodeResponse.typeUrl || typeof o.code_id === "bigint");
  },
  encode(message: MsgStoreCodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== undefined) {
      writer.uint32(8).uint64(message.codeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStoreCodeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgStoreCodeResponse {
    const obj = createBaseMsgStoreCodeResponse();
    if (isSet(object.codeId)) obj.codeId = BigInt(object.codeId.toString());
    return obj;
  },
  toJSON(message: MsgStoreCodeResponse): JsonSafe<MsgStoreCodeResponse> {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgStoreCodeResponse>): MsgStoreCodeResponse {
    const message = createBaseMsgStoreCodeResponse();
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = BigInt(object.codeId.toString());
    }
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
    const message = createBaseMsgStoreCodeResponse();
    if (object.code_id !== undefined && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    return message;
  },
  toAmino(message: MsgStoreCodeResponse): MsgStoreCodeResponseAmino {
    const obj: any = {};
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId.toString() : undefined;
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
GlobalDecoderRegistry.register(MsgStoreCodeResponse.typeUrl, MsgStoreCodeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgStoreCodeResponse.aminoType, MsgStoreCodeResponse.typeUrl);
function createBaseMsgInstantiateContract(): MsgInstantiateContract {
  return {
    sender: "",
    admin: "",
    codeId: BigInt(0),
    label: "",
    msg: new Uint8Array(),
    funds: []
  };
}
export const MsgInstantiateContract = {
  typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
  aminoType: "wasm/MsgInstantiateContract",
  is(o: any): o is MsgInstantiateContract {
    return o && (o.$typeUrl === MsgInstantiateContract.typeUrl || typeof o.sender === "string" && typeof o.admin === "string" && typeof o.codeId === "bigint" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.is(o.funds[0])));
  },
  isSDK(o: any): o is MsgInstantiateContractSDKType {
    return o && (o.$typeUrl === MsgInstantiateContract.typeUrl || typeof o.sender === "string" && typeof o.admin === "string" && typeof o.code_id === "bigint" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.isSDK(o.funds[0])));
  },
  isAmino(o: any): o is MsgInstantiateContractAmino {
    return o && (o.$typeUrl === MsgInstantiateContract.typeUrl || typeof o.sender === "string" && typeof o.admin === "string" && typeof o.code_id === "bigint" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.isAmino(o.funds[0])));
  },
  encode(message: MsgInstantiateContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== undefined) {
      writer.uint32(10).string(message.sender);
    }
    if (message.admin !== undefined) {
      writer.uint32(18).string(message.admin);
    }
    if (message.codeId !== undefined) {
      writer.uint32(24).uint64(message.codeId);
    }
    if (message.label !== undefined) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgInstantiateContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.codeId = reader.uint64();
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
    const obj = createBaseMsgInstantiateContract();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.admin)) obj.admin = String(object.admin);
    if (isSet(object.codeId)) obj.codeId = BigInt(object.codeId.toString());
    if (isSet(object.label)) obj.label = String(object.label);
    if (isSet(object.msg)) obj.msg = bytesFromBase64(object.msg);
    if (Array.isArray(object?.funds)) obj.funds = object.funds.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgInstantiateContract): JsonSafe<MsgInstantiateContract> {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.admin !== undefined && (obj.admin = message.admin);
    message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
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
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = BigInt(object.codeId.toString());
    }
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
    const message = createBaseMsgInstantiateContract();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.code_id !== undefined && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = object.label;
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = toUtf8(JSON.stringify(object.msg));
    }
    message.funds = object.funds?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgInstantiateContract): MsgInstantiateContractAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId.toString() : undefined;
    obj.label = message.label === "" ? undefined : message.label;
    obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : undefined;
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.funds = message.funds;
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
GlobalDecoderRegistry.register(MsgInstantiateContract.typeUrl, MsgInstantiateContract);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgInstantiateContract.aminoType, MsgInstantiateContract.typeUrl);
function createBaseMsgInstantiateContractResponse(): MsgInstantiateContractResponse {
  return {
    address: "",
    data: new Uint8Array()
  };
}
export const MsgInstantiateContractResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContractResponse",
  aminoType: "wasm/MsgInstantiateContractResponse",
  is(o: any): o is MsgInstantiateContractResponse {
    return o && (o.$typeUrl === MsgInstantiateContractResponse.typeUrl || typeof o.address === "string" && (o.data instanceof Uint8Array || typeof o.data === "string"));
  },
  isSDK(o: any): o is MsgInstantiateContractResponseSDKType {
    return o && (o.$typeUrl === MsgInstantiateContractResponse.typeUrl || typeof o.address === "string" && (o.data instanceof Uint8Array || typeof o.data === "string"));
  },
  isAmino(o: any): o is MsgInstantiateContractResponseAmino {
    return o && (o.$typeUrl === MsgInstantiateContractResponse.typeUrl || typeof o.address === "string" && (o.data instanceof Uint8Array || typeof o.data === "string"));
  },
  encode(message: MsgInstantiateContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== undefined) {
      writer.uint32(10).string(message.address);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgInstantiateContractResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseMsgInstantiateContractResponse();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    return obj;
  },
  toJSON(message: MsgInstantiateContractResponse): JsonSafe<MsgInstantiateContractResponse> {
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
    const message = createBaseMsgInstantiateContractResponse();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: MsgInstantiateContractResponse): MsgInstantiateContractResponseAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
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
GlobalDecoderRegistry.register(MsgInstantiateContractResponse.typeUrl, MsgInstantiateContractResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgInstantiateContractResponse.aminoType, MsgInstantiateContractResponse.typeUrl);
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
  is(o: any): o is MsgExecuteContract {
    return o && (o.$typeUrl === MsgExecuteContract.typeUrl || typeof o.sender === "string" && typeof o.contract === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.is(o.funds[0])));
  },
  isSDK(o: any): o is MsgExecuteContractSDKType {
    return o && (o.$typeUrl === MsgExecuteContract.typeUrl || typeof o.sender === "string" && typeof o.contract === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.isSDK(o.funds[0])));
  },
  isAmino(o: any): o is MsgExecuteContractAmino {
    return o && (o.$typeUrl === MsgExecuteContract.typeUrl || typeof o.sender === "string" && typeof o.contract === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.isAmino(o.funds[0])));
  },
  encode(message: MsgExecuteContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== undefined) {
      writer.uint32(10).string(message.sender);
    }
    if (message.contract !== undefined) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExecuteContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseMsgExecuteContract();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.contract)) obj.contract = String(object.contract);
    if (isSet(object.msg)) obj.msg = bytesFromBase64(object.msg);
    if (Array.isArray(object?.funds)) obj.funds = object.funds.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgExecuteContract): JsonSafe<MsgExecuteContract> {
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
    const message = createBaseMsgExecuteContract();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = toUtf8(JSON.stringify(object.msg));
    }
    message.funds = object.funds?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgExecuteContract): MsgExecuteContractAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.contract = message.contract === "" ? undefined : message.contract;
    obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : undefined;
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.funds = message.funds;
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
GlobalDecoderRegistry.register(MsgExecuteContract.typeUrl, MsgExecuteContract);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgExecuteContract.aminoType, MsgExecuteContract.typeUrl);
function createBaseMsgExecuteContractResponse(): MsgExecuteContractResponse {
  return {
    data: new Uint8Array()
  };
}
export const MsgExecuteContractResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContractResponse",
  aminoType: "wasm/MsgExecuteContractResponse",
  is(o: any): o is MsgExecuteContractResponse {
    return o && (o.$typeUrl === MsgExecuteContractResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  isSDK(o: any): o is MsgExecuteContractResponseSDKType {
    return o && (o.$typeUrl === MsgExecuteContractResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  isAmino(o: any): o is MsgExecuteContractResponseAmino {
    return o && (o.$typeUrl === MsgExecuteContractResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  encode(message: MsgExecuteContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExecuteContractResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseMsgExecuteContractResponse();
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    return obj;
  },
  toJSON(message: MsgExecuteContractResponse): JsonSafe<MsgExecuteContractResponse> {
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
    const message = createBaseMsgExecuteContractResponse();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: MsgExecuteContractResponse): MsgExecuteContractResponseAmino {
    const obj: any = {};
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
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
GlobalDecoderRegistry.register(MsgExecuteContractResponse.typeUrl, MsgExecuteContractResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgExecuteContractResponse.aminoType, MsgExecuteContractResponse.typeUrl);
function createBaseMsgMigrateContract(): MsgMigrateContract {
  return {
    sender: "",
    contract: "",
    codeId: BigInt(0),
    msg: new Uint8Array()
  };
}
export const MsgMigrateContract = {
  typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
  aminoType: "wasm/MsgMigrateContract",
  is(o: any): o is MsgMigrateContract {
    return o && (o.$typeUrl === MsgMigrateContract.typeUrl || typeof o.sender === "string" && typeof o.contract === "string" && typeof o.codeId === "bigint" && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
  },
  isSDK(o: any): o is MsgMigrateContractSDKType {
    return o && (o.$typeUrl === MsgMigrateContract.typeUrl || typeof o.sender === "string" && typeof o.contract === "string" && typeof o.code_id === "bigint" && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
  },
  isAmino(o: any): o is MsgMigrateContractAmino {
    return o && (o.$typeUrl === MsgMigrateContract.typeUrl || typeof o.sender === "string" && typeof o.contract === "string" && typeof o.code_id === "bigint" && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
  },
  encode(message: MsgMigrateContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== undefined) {
      writer.uint32(10).string(message.sender);
    }
    if (message.contract !== undefined) {
      writer.uint32(18).string(message.contract);
    }
    if (message.codeId !== undefined) {
      writer.uint32(24).uint64(message.codeId);
    }
    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMigrateContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.codeId = reader.uint64();
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
    const obj = createBaseMsgMigrateContract();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.contract)) obj.contract = String(object.contract);
    if (isSet(object.codeId)) obj.codeId = BigInt(object.codeId.toString());
    if (isSet(object.msg)) obj.msg = bytesFromBase64(object.msg);
    return obj;
  },
  toJSON(message: MsgMigrateContract): JsonSafe<MsgMigrateContract> {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contract !== undefined && (obj.contract = message.contract);
    message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgMigrateContract>): MsgMigrateContract {
    const message = createBaseMsgMigrateContract();
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = BigInt(object.codeId.toString());
    }
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
    const message = createBaseMsgMigrateContract();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    if (object.code_id !== undefined && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = toUtf8(JSON.stringify(object.msg));
    }
    return message;
  },
  toAmino(message: MsgMigrateContract): MsgMigrateContractAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.contract = message.contract === "" ? undefined : message.contract;
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId.toString() : undefined;
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
GlobalDecoderRegistry.register(MsgMigrateContract.typeUrl, MsgMigrateContract);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgMigrateContract.aminoType, MsgMigrateContract.typeUrl);
function createBaseMsgMigrateContractResponse(): MsgMigrateContractResponse {
  return {
    data: new Uint8Array()
  };
}
export const MsgMigrateContractResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContractResponse",
  aminoType: "wasm/MsgMigrateContractResponse",
  is(o: any): o is MsgMigrateContractResponse {
    return o && (o.$typeUrl === MsgMigrateContractResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  isSDK(o: any): o is MsgMigrateContractResponseSDKType {
    return o && (o.$typeUrl === MsgMigrateContractResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  isAmino(o: any): o is MsgMigrateContractResponseAmino {
    return o && (o.$typeUrl === MsgMigrateContractResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  encode(message: MsgMigrateContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMigrateContractResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseMsgMigrateContractResponse();
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    return obj;
  },
  toJSON(message: MsgMigrateContractResponse): JsonSafe<MsgMigrateContractResponse> {
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
    const message = createBaseMsgMigrateContractResponse();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: MsgMigrateContractResponse): MsgMigrateContractResponseAmino {
    const obj: any = {};
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
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
GlobalDecoderRegistry.register(MsgMigrateContractResponse.typeUrl, MsgMigrateContractResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgMigrateContractResponse.aminoType, MsgMigrateContractResponse.typeUrl);
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
  is(o: any): o is MsgUpdateAdmin {
    return o && (o.$typeUrl === MsgUpdateAdmin.typeUrl || typeof o.sender === "string" && typeof o.newAdmin === "string" && typeof o.contract === "string");
  },
  isSDK(o: any): o is MsgUpdateAdminSDKType {
    return o && (o.$typeUrl === MsgUpdateAdmin.typeUrl || typeof o.sender === "string" && typeof o.new_admin === "string" && typeof o.contract === "string");
  },
  isAmino(o: any): o is MsgUpdateAdminAmino {
    return o && (o.$typeUrl === MsgUpdateAdmin.typeUrl || typeof o.sender === "string" && typeof o.new_admin === "string" && typeof o.contract === "string");
  },
  encode(message: MsgUpdateAdmin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== undefined) {
      writer.uint32(10).string(message.sender);
    }
    if (message.newAdmin !== undefined) {
      writer.uint32(18).string(message.newAdmin);
    }
    if (message.contract !== undefined) {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAdmin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseMsgUpdateAdmin();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.newAdmin)) obj.newAdmin = String(object.newAdmin);
    if (isSet(object.contract)) obj.contract = String(object.contract);
    return obj;
  },
  toJSON(message: MsgUpdateAdmin): JsonSafe<MsgUpdateAdmin> {
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
    const message = createBaseMsgUpdateAdmin();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.new_admin !== undefined && object.new_admin !== null) {
      message.newAdmin = object.new_admin;
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    return message;
  },
  toAmino(message: MsgUpdateAdmin): MsgUpdateAdminAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.new_admin = message.newAdmin === "" ? undefined : message.newAdmin;
    obj.contract = message.contract === "" ? undefined : message.contract;
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
GlobalDecoderRegistry.register(MsgUpdateAdmin.typeUrl, MsgUpdateAdmin);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateAdmin.aminoType, MsgUpdateAdmin.typeUrl);
function createBaseMsgUpdateAdminResponse(): MsgUpdateAdminResponse {
  return {};
}
export const MsgUpdateAdminResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdminResponse",
  aminoType: "wasm/MsgUpdateAdminResponse",
  is(o: any): o is MsgUpdateAdminResponse {
    return o && o.$typeUrl === MsgUpdateAdminResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateAdminResponseSDKType {
    return o && o.$typeUrl === MsgUpdateAdminResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateAdminResponseAmino {
    return o && o.$typeUrl === MsgUpdateAdminResponse.typeUrl;
  },
  encode(_: MsgUpdateAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseMsgUpdateAdminResponse();
    return obj;
  },
  toJSON(_: MsgUpdateAdminResponse): JsonSafe<MsgUpdateAdminResponse> {
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
    const message = createBaseMsgUpdateAdminResponse();
    return message;
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
GlobalDecoderRegistry.register(MsgUpdateAdminResponse.typeUrl, MsgUpdateAdminResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateAdminResponse.aminoType, MsgUpdateAdminResponse.typeUrl);
function createBaseMsgClearAdmin(): MsgClearAdmin {
  return {
    sender: "",
    contract: ""
  };
}
export const MsgClearAdmin = {
  typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
  aminoType: "wasm/MsgClearAdmin",
  is(o: any): o is MsgClearAdmin {
    return o && (o.$typeUrl === MsgClearAdmin.typeUrl || typeof o.sender === "string" && typeof o.contract === "string");
  },
  isSDK(o: any): o is MsgClearAdminSDKType {
    return o && (o.$typeUrl === MsgClearAdmin.typeUrl || typeof o.sender === "string" && typeof o.contract === "string");
  },
  isAmino(o: any): o is MsgClearAdminAmino {
    return o && (o.$typeUrl === MsgClearAdmin.typeUrl || typeof o.sender === "string" && typeof o.contract === "string");
  },
  encode(message: MsgClearAdmin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== undefined) {
      writer.uint32(10).string(message.sender);
    }
    if (message.contract !== undefined) {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClearAdmin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseMsgClearAdmin();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.contract)) obj.contract = String(object.contract);
    return obj;
  },
  toJSON(message: MsgClearAdmin): JsonSafe<MsgClearAdmin> {
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
    const message = createBaseMsgClearAdmin();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    return message;
  },
  toAmino(message: MsgClearAdmin): MsgClearAdminAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.contract = message.contract === "" ? undefined : message.contract;
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
GlobalDecoderRegistry.register(MsgClearAdmin.typeUrl, MsgClearAdmin);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgClearAdmin.aminoType, MsgClearAdmin.typeUrl);
function createBaseMsgClearAdminResponse(): MsgClearAdminResponse {
  return {};
}
export const MsgClearAdminResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgClearAdminResponse",
  aminoType: "wasm/MsgClearAdminResponse",
  is(o: any): o is MsgClearAdminResponse {
    return o && o.$typeUrl === MsgClearAdminResponse.typeUrl;
  },
  isSDK(o: any): o is MsgClearAdminResponseSDKType {
    return o && o.$typeUrl === MsgClearAdminResponse.typeUrl;
  },
  isAmino(o: any): o is MsgClearAdminResponseAmino {
    return o && o.$typeUrl === MsgClearAdminResponse.typeUrl;
  },
  encode(_: MsgClearAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClearAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseMsgClearAdminResponse();
    return obj;
  },
  toJSON(_: MsgClearAdminResponse): JsonSafe<MsgClearAdminResponse> {
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
    const message = createBaseMsgClearAdminResponse();
    return message;
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
GlobalDecoderRegistry.register(MsgClearAdminResponse.typeUrl, MsgClearAdminResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgClearAdminResponse.aminoType, MsgClearAdminResponse.typeUrl);