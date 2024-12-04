import { TokenPairArbRoutes, TokenPairArbRoutesSDKType, PoolWeights, PoolWeightsSDKType, BaseDenom, BaseDenomSDKType } from "./protorev";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "osmosis.protorev.v1beta1";
/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */
export interface MsgSetHotRoutes {
  /** admin is the account that is authorized to set the hot routes. */
  admin: string;
  /** hot_routes is the list of hot routes to set. */
  hotRoutes: TokenPairArbRoutes[];
}
export interface MsgSetHotRoutesProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutes";
  value: Uint8Array;
}
/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */
export interface MsgSetHotRoutesSDKType {
  admin: string;
  hot_routes: TokenPairArbRoutesSDKType[];
}
/** MsgSetHotRoutesResponse defines the Msg/SetHotRoutes response type. */
export interface MsgSetHotRoutesResponse {}
export interface MsgSetHotRoutesResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutesResponse";
  value: Uint8Array;
}
/** MsgSetHotRoutesResponse defines the Msg/SetHotRoutes response type. */
export interface MsgSetHotRoutesResponseSDKType {}
/** MsgSetDeveloperAccount defines the Msg/SetDeveloperAccount request type. */
export interface MsgSetDeveloperAccount {
  /** admin is the account that is authorized to set the developer account. */
  admin: string;
  /**
   * developer_account is the account that will receive a portion of the profits
   * from the protorev module.
   */
  developerAccount: string;
}
export interface MsgSetDeveloperAccountProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount";
  value: Uint8Array;
}
/** MsgSetDeveloperAccount defines the Msg/SetDeveloperAccount request type. */
export interface MsgSetDeveloperAccountSDKType {
  admin: string;
  developer_account: string;
}
/**
 * MsgSetDeveloperAccountResponse defines the Msg/SetDeveloperAccount response
 * type.
 */
export interface MsgSetDeveloperAccountResponse {}
export interface MsgSetDeveloperAccountResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccountResponse";
  value: Uint8Array;
}
/**
 * MsgSetDeveloperAccountResponse defines the Msg/SetDeveloperAccount response
 * type.
 */
export interface MsgSetDeveloperAccountResponseSDKType {}
/** MsgSetPoolWeights defines the Msg/SetPoolWeights request type. */
export interface MsgSetPoolWeights {
  /** admin is the account that is authorized to set the pool weights. */
  admin: string;
  /** pool_weights is the list of pool weights to set. */
  poolWeights: PoolWeights;
}
export interface MsgSetPoolWeightsProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetPoolWeights";
  value: Uint8Array;
}
/** MsgSetPoolWeights defines the Msg/SetPoolWeights request type. */
export interface MsgSetPoolWeightsSDKType {
  admin: string;
  pool_weights: PoolWeightsSDKType;
}
/** MsgSetPoolWeightsResponse defines the Msg/SetPoolWeights response type. */
export interface MsgSetPoolWeightsResponse {}
export interface MsgSetPoolWeightsResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetPoolWeightsResponse";
  value: Uint8Array;
}
/** MsgSetPoolWeightsResponse defines the Msg/SetPoolWeights response type. */
export interface MsgSetPoolWeightsResponseSDKType {}
/** MsgSetMaxPoolPointsPerTx defines the Msg/SetMaxPoolPointsPerTx request type. */
export interface MsgSetMaxPoolPointsPerTx {
  /** admin is the account that is authorized to set the max pool points per tx. */
  admin: string;
  /**
   * max_pool_points_per_tx is the maximum number of pool points that can be
   * consumed per transaction.
   */
  maxPoolPointsPerTx: bigint;
}
export interface MsgSetMaxPoolPointsPerTxProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx";
  value: Uint8Array;
}
/** MsgSetMaxPoolPointsPerTx defines the Msg/SetMaxPoolPointsPerTx request type. */
export interface MsgSetMaxPoolPointsPerTxSDKType {
  admin: string;
  max_pool_points_per_tx: bigint;
}
/**
 * MsgSetMaxPoolPointsPerTxResponse defines the Msg/SetMaxPoolPointsPerTx
 * response type.
 */
export interface MsgSetMaxPoolPointsPerTxResponse {}
export interface MsgSetMaxPoolPointsPerTxResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTxResponse";
  value: Uint8Array;
}
/**
 * MsgSetMaxPoolPointsPerTxResponse defines the Msg/SetMaxPoolPointsPerTx
 * response type.
 */
export interface MsgSetMaxPoolPointsPerTxResponseSDKType {}
/**
 * MsgSetMaxPoolPointsPerBlock defines the Msg/SetMaxPoolPointsPerBlock request
 * type.
 */
export interface MsgSetMaxPoolPointsPerBlock {
  /**
   * admin is the account that is authorized to set the max pool points per
   * block.
   */
  admin: string;
  /**
   * max_pool_points_per_block is the maximum number of pool points that can be
   * consumed per block.
   */
  maxPoolPointsPerBlock: bigint;
}
export interface MsgSetMaxPoolPointsPerBlockProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock";
  value: Uint8Array;
}
/**
 * MsgSetMaxPoolPointsPerBlock defines the Msg/SetMaxPoolPointsPerBlock request
 * type.
 */
export interface MsgSetMaxPoolPointsPerBlockSDKType {
  admin: string;
  max_pool_points_per_block: bigint;
}
/**
 * MsgSetMaxPoolPointsPerBlockResponse defines the
 * Msg/SetMaxPoolPointsPerBlock response type.
 */
export interface MsgSetMaxPoolPointsPerBlockResponse {}
export interface MsgSetMaxPoolPointsPerBlockResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlockResponse";
  value: Uint8Array;
}
/**
 * MsgSetMaxPoolPointsPerBlockResponse defines the
 * Msg/SetMaxPoolPointsPerBlock response type.
 */
export interface MsgSetMaxPoolPointsPerBlockResponseSDKType {}
/** MsgSetBaseDenoms defines the Msg/SetBaseDenoms request type. */
export interface MsgSetBaseDenoms {
  /** admin is the account that is authorized to set the base denoms. */
  admin: string;
  /** base_denoms is the list of base denoms to set. */
  baseDenoms: BaseDenom[];
}
export interface MsgSetBaseDenomsProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetBaseDenoms";
  value: Uint8Array;
}
/** MsgSetBaseDenoms defines the Msg/SetBaseDenoms request type. */
export interface MsgSetBaseDenomsSDKType {
  admin: string;
  base_denoms: BaseDenomSDKType[];
}
/** MsgSetBaseDenomsResponse defines the Msg/SetBaseDenoms response type. */
export interface MsgSetBaseDenomsResponse {}
export interface MsgSetBaseDenomsResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetBaseDenomsResponse";
  value: Uint8Array;
}
/** MsgSetBaseDenomsResponse defines the Msg/SetBaseDenoms response type. */
export interface MsgSetBaseDenomsResponseSDKType {}
function createBaseMsgSetHotRoutes(): MsgSetHotRoutes {
  return {
    admin: "",
    hotRoutes: []
  };
}
export const MsgSetHotRoutes = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutes",
  encode(message: MsgSetHotRoutes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.hotRoutes) {
      TokenPairArbRoutes.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetHotRoutes {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetHotRoutes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.hotRoutes.push(TokenPairArbRoutes.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetHotRoutes {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      hotRoutes: Array.isArray(object?.hotRoutes) ? object.hotRoutes.map((e: any) => TokenPairArbRoutes.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgSetHotRoutes): JsonSafe<MsgSetHotRoutes> {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    if (message.hotRoutes) {
      obj.hotRoutes = message.hotRoutes.map(e => e ? TokenPairArbRoutes.toJSON(e) : undefined);
    } else {
      obj.hotRoutes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSetHotRoutes>): MsgSetHotRoutes {
    const message = createBaseMsgSetHotRoutes();
    message.admin = object.admin ?? "";
    message.hotRoutes = object.hotRoutes?.map(e => TokenPairArbRoutes.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgSetHotRoutesSDKType): MsgSetHotRoutes {
    return {
      admin: object?.admin,
      hotRoutes: Array.isArray(object?.hot_routes) ? object.hot_routes.map((e: any) => TokenPairArbRoutes.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): MsgSetHotRoutesSDKType {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      hot_routes: Array.isArray(object?.hot_routes) ? object.hot_routes.map((e: any) => TokenPairArbRoutes.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: MsgSetHotRoutes): MsgSetHotRoutesSDKType {
    const obj: any = {};
    obj.admin = message.admin;
    if (message.hotRoutes) {
      obj.hot_routes = message.hotRoutes.map(e => e ? TokenPairArbRoutes.toSDK(e) : undefined);
    } else {
      obj.hot_routes = [];
    }
    return obj;
  },
  fromAmino(object: MsgSetHotRoutesAmino): MsgSetHotRoutes {
    const message = createBaseMsgSetHotRoutes();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    message.hotRoutes = object.hot_routes?.map(e => TokenPairArbRoutes.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgSetHotRoutes): MsgSetHotRoutesAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    if (message.hotRoutes) {
      obj.hot_routes = message.hotRoutes.map(e => e ? TokenPairArbRoutes.toAmino(e) : undefined);
    } else {
      obj.hot_routes = message.hotRoutes;
    }
    return obj;
  },
  fromAminoMsg(object: MsgSetHotRoutesAminoMsg): MsgSetHotRoutes {
    return MsgSetHotRoutes.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetHotRoutes): MsgSetHotRoutesAminoMsg {
    return {
      type: "osmosis/MsgSetHotRoutes",
      value: MsgSetHotRoutes.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetHotRoutesProtoMsg): MsgSetHotRoutes {
    return MsgSetHotRoutes.decode(message.value);
  },
  toProto(message: MsgSetHotRoutes): Uint8Array {
    return MsgSetHotRoutes.encode(message).finish();
  },
  toProtoMsg(message: MsgSetHotRoutes): MsgSetHotRoutesProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutes",
      value: MsgSetHotRoutes.encode(message).finish()
    };
  }
};
function createBaseMsgSetHotRoutesResponse(): MsgSetHotRoutesResponse {
  return {};
}
export const MsgSetHotRoutesResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutesResponse",
  encode(_: MsgSetHotRoutesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetHotRoutesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetHotRoutesResponse();
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
  fromJSON(_: any): MsgSetHotRoutesResponse {
    return {};
  },
  toJSON(_: MsgSetHotRoutesResponse): JsonSafe<MsgSetHotRoutesResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgSetHotRoutesResponse>): MsgSetHotRoutesResponse {
    const message = createBaseMsgSetHotRoutesResponse();
    return message;
  },
  fromSDK(_: MsgSetHotRoutesResponseSDKType): MsgSetHotRoutesResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgSetHotRoutesResponseSDKType {
    return {};
  },
  toSDK(_: MsgSetHotRoutesResponse): MsgSetHotRoutesResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgSetHotRoutesResponseAmino): MsgSetHotRoutesResponse {
    const message = createBaseMsgSetHotRoutesResponse();
    return message;
  },
  toAmino(_: MsgSetHotRoutesResponse): MsgSetHotRoutesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetHotRoutesResponseAminoMsg): MsgSetHotRoutesResponse {
    return MsgSetHotRoutesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetHotRoutesResponse): MsgSetHotRoutesResponseAminoMsg {
    return {
      type: "osmosis/protorev/set-hot-routes-response",
      value: MsgSetHotRoutesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetHotRoutesResponseProtoMsg): MsgSetHotRoutesResponse {
    return MsgSetHotRoutesResponse.decode(message.value);
  },
  toProto(message: MsgSetHotRoutesResponse): Uint8Array {
    return MsgSetHotRoutesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetHotRoutesResponse): MsgSetHotRoutesResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutesResponse",
      value: MsgSetHotRoutesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetDeveloperAccount(): MsgSetDeveloperAccount {
  return {
    admin: "",
    developerAccount: ""
  };
}
export const MsgSetDeveloperAccount = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount",
  encode(message: MsgSetDeveloperAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.developerAccount !== "") {
      writer.uint32(18).string(message.developerAccount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDeveloperAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDeveloperAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.developerAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetDeveloperAccount {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      developerAccount: isSet(object.developerAccount) ? String(object.developerAccount) : ""
    };
  },
  toJSON(message: MsgSetDeveloperAccount): JsonSafe<MsgSetDeveloperAccount> {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.developerAccount !== undefined && (obj.developerAccount = message.developerAccount);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSetDeveloperAccount>): MsgSetDeveloperAccount {
    const message = createBaseMsgSetDeveloperAccount();
    message.admin = object.admin ?? "";
    message.developerAccount = object.developerAccount ?? "";
    return message;
  },
  fromSDK(object: MsgSetDeveloperAccountSDKType): MsgSetDeveloperAccount {
    return {
      admin: object?.admin,
      developerAccount: object?.developer_account
    };
  },
  fromSDKJSON(object: any): MsgSetDeveloperAccountSDKType {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      developer_account: isSet(object.developer_account) ? String(object.developer_account) : ""
    };
  },
  toSDK(message: MsgSetDeveloperAccount): MsgSetDeveloperAccountSDKType {
    const obj: any = {};
    obj.admin = message.admin;
    obj.developer_account = message.developerAccount;
    return obj;
  },
  fromAmino(object: MsgSetDeveloperAccountAmino): MsgSetDeveloperAccount {
    const message = createBaseMsgSetDeveloperAccount();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.developer_account !== undefined && object.developer_account !== null) {
      message.developerAccount = object.developer_account;
    }
    return message;
  },
  toAmino(message: MsgSetDeveloperAccount): MsgSetDeveloperAccountAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.developer_account = message.developerAccount === "" ? undefined : message.developerAccount;
    return obj;
  },
  fromAminoMsg(object: MsgSetDeveloperAccountAminoMsg): MsgSetDeveloperAccount {
    return MsgSetDeveloperAccount.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetDeveloperAccount): MsgSetDeveloperAccountAminoMsg {
    return {
      type: "osmosis/MsgSetDeveloperAccount",
      value: MsgSetDeveloperAccount.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetDeveloperAccountProtoMsg): MsgSetDeveloperAccount {
    return MsgSetDeveloperAccount.decode(message.value);
  },
  toProto(message: MsgSetDeveloperAccount): Uint8Array {
    return MsgSetDeveloperAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDeveloperAccount): MsgSetDeveloperAccountProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount",
      value: MsgSetDeveloperAccount.encode(message).finish()
    };
  }
};
function createBaseMsgSetDeveloperAccountResponse(): MsgSetDeveloperAccountResponse {
  return {};
}
export const MsgSetDeveloperAccountResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccountResponse",
  encode(_: MsgSetDeveloperAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDeveloperAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDeveloperAccountResponse();
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
  fromJSON(_: any): MsgSetDeveloperAccountResponse {
    return {};
  },
  toJSON(_: MsgSetDeveloperAccountResponse): JsonSafe<MsgSetDeveloperAccountResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgSetDeveloperAccountResponse>): MsgSetDeveloperAccountResponse {
    const message = createBaseMsgSetDeveloperAccountResponse();
    return message;
  },
  fromSDK(_: MsgSetDeveloperAccountResponseSDKType): MsgSetDeveloperAccountResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgSetDeveloperAccountResponseSDKType {
    return {};
  },
  toSDK(_: MsgSetDeveloperAccountResponse): MsgSetDeveloperAccountResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgSetDeveloperAccountResponseAmino): MsgSetDeveloperAccountResponse {
    const message = createBaseMsgSetDeveloperAccountResponse();
    return message;
  },
  toAmino(_: MsgSetDeveloperAccountResponse): MsgSetDeveloperAccountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetDeveloperAccountResponseAminoMsg): MsgSetDeveloperAccountResponse {
    return MsgSetDeveloperAccountResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetDeveloperAccountResponse): MsgSetDeveloperAccountResponseAminoMsg {
    return {
      type: "osmosis/protorev/set-developer-account-response",
      value: MsgSetDeveloperAccountResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetDeveloperAccountResponseProtoMsg): MsgSetDeveloperAccountResponse {
    return MsgSetDeveloperAccountResponse.decode(message.value);
  },
  toProto(message: MsgSetDeveloperAccountResponse): Uint8Array {
    return MsgSetDeveloperAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDeveloperAccountResponse): MsgSetDeveloperAccountResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccountResponse",
      value: MsgSetDeveloperAccountResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetPoolWeights(): MsgSetPoolWeights {
  return {
    admin: "",
    poolWeights: PoolWeights.fromPartial({})
  };
}
export const MsgSetPoolWeights = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetPoolWeights",
  encode(message: MsgSetPoolWeights, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.poolWeights !== undefined) {
      PoolWeights.encode(message.poolWeights, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetPoolWeights {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPoolWeights();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.poolWeights = PoolWeights.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetPoolWeights {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      poolWeights: isSet(object.poolWeights) ? PoolWeights.fromJSON(object.poolWeights) : undefined
    };
  },
  toJSON(message: MsgSetPoolWeights): JsonSafe<MsgSetPoolWeights> {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.poolWeights !== undefined && (obj.poolWeights = message.poolWeights ? PoolWeights.toJSON(message.poolWeights) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSetPoolWeights>): MsgSetPoolWeights {
    const message = createBaseMsgSetPoolWeights();
    message.admin = object.admin ?? "";
    message.poolWeights = object.poolWeights !== undefined && object.poolWeights !== null ? PoolWeights.fromPartial(object.poolWeights) : undefined;
    return message;
  },
  fromSDK(object: MsgSetPoolWeightsSDKType): MsgSetPoolWeights {
    return {
      admin: object?.admin,
      poolWeights: object.pool_weights ? PoolWeights.fromSDK(object.pool_weights) : undefined
    };
  },
  fromSDKJSON(object: any): MsgSetPoolWeightsSDKType {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      pool_weights: isSet(object.pool_weights) ? PoolWeights.fromSDKJSON(object.pool_weights) : undefined
    };
  },
  toSDK(message: MsgSetPoolWeights): MsgSetPoolWeightsSDKType {
    const obj: any = {};
    obj.admin = message.admin;
    message.poolWeights !== undefined && (obj.pool_weights = message.poolWeights ? PoolWeights.toSDK(message.poolWeights) : undefined);
    return obj;
  },
  fromAmino(object: MsgSetPoolWeightsAmino): MsgSetPoolWeights {
    const message = createBaseMsgSetPoolWeights();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.pool_weights !== undefined && object.pool_weights !== null) {
      message.poolWeights = PoolWeights.fromAmino(object.pool_weights);
    }
    return message;
  },
  toAmino(message: MsgSetPoolWeights): MsgSetPoolWeightsAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.pool_weights = message.poolWeights ? PoolWeights.toAmino(message.poolWeights) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetPoolWeightsAminoMsg): MsgSetPoolWeights {
    return MsgSetPoolWeights.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetPoolWeights): MsgSetPoolWeightsAminoMsg {
    return {
      type: "osmosis/protorev/set-pool-weights",
      value: MsgSetPoolWeights.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetPoolWeightsProtoMsg): MsgSetPoolWeights {
    return MsgSetPoolWeights.decode(message.value);
  },
  toProto(message: MsgSetPoolWeights): Uint8Array {
    return MsgSetPoolWeights.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPoolWeights): MsgSetPoolWeightsProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.MsgSetPoolWeights",
      value: MsgSetPoolWeights.encode(message).finish()
    };
  }
};
function createBaseMsgSetPoolWeightsResponse(): MsgSetPoolWeightsResponse {
  return {};
}
export const MsgSetPoolWeightsResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetPoolWeightsResponse",
  encode(_: MsgSetPoolWeightsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetPoolWeightsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPoolWeightsResponse();
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
  fromJSON(_: any): MsgSetPoolWeightsResponse {
    return {};
  },
  toJSON(_: MsgSetPoolWeightsResponse): JsonSafe<MsgSetPoolWeightsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgSetPoolWeightsResponse>): MsgSetPoolWeightsResponse {
    const message = createBaseMsgSetPoolWeightsResponse();
    return message;
  },
  fromSDK(_: MsgSetPoolWeightsResponseSDKType): MsgSetPoolWeightsResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgSetPoolWeightsResponseSDKType {
    return {};
  },
  toSDK(_: MsgSetPoolWeightsResponse): MsgSetPoolWeightsResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgSetPoolWeightsResponseAmino): MsgSetPoolWeightsResponse {
    const message = createBaseMsgSetPoolWeightsResponse();
    return message;
  },
  toAmino(_: MsgSetPoolWeightsResponse): MsgSetPoolWeightsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetPoolWeightsResponseAminoMsg): MsgSetPoolWeightsResponse {
    return MsgSetPoolWeightsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetPoolWeightsResponse): MsgSetPoolWeightsResponseAminoMsg {
    return {
      type: "osmosis/protorev/set-pool-weights-response",
      value: MsgSetPoolWeightsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetPoolWeightsResponseProtoMsg): MsgSetPoolWeightsResponse {
    return MsgSetPoolWeightsResponse.decode(message.value);
  },
  toProto(message: MsgSetPoolWeightsResponse): Uint8Array {
    return MsgSetPoolWeightsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPoolWeightsResponse): MsgSetPoolWeightsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.MsgSetPoolWeightsResponse",
      value: MsgSetPoolWeightsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetMaxPoolPointsPerTx(): MsgSetMaxPoolPointsPerTx {
  return {
    admin: "",
    maxPoolPointsPerTx: BigInt(0)
  };
}
export const MsgSetMaxPoolPointsPerTx = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx",
  encode(message: MsgSetMaxPoolPointsPerTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.maxPoolPointsPerTx !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxPoolPointsPerTx);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMaxPoolPointsPerTx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMaxPoolPointsPerTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.maxPoolPointsPerTx = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetMaxPoolPointsPerTx {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      maxPoolPointsPerTx: isSet(object.maxPoolPointsPerTx) ? BigInt(object.maxPoolPointsPerTx.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgSetMaxPoolPointsPerTx): JsonSafe<MsgSetMaxPoolPointsPerTx> {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.maxPoolPointsPerTx !== undefined && (obj.maxPoolPointsPerTx = (message.maxPoolPointsPerTx || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSetMaxPoolPointsPerTx>): MsgSetMaxPoolPointsPerTx {
    const message = createBaseMsgSetMaxPoolPointsPerTx();
    message.admin = object.admin ?? "";
    message.maxPoolPointsPerTx = object.maxPoolPointsPerTx !== undefined && object.maxPoolPointsPerTx !== null ? BigInt(object.maxPoolPointsPerTx.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: MsgSetMaxPoolPointsPerTxSDKType): MsgSetMaxPoolPointsPerTx {
    return {
      admin: object?.admin,
      maxPoolPointsPerTx: object?.max_pool_points_per_tx
    };
  },
  fromSDKJSON(object: any): MsgSetMaxPoolPointsPerTxSDKType {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      max_pool_points_per_tx: isSet(object.max_pool_points_per_tx) ? BigInt(object.max_pool_points_per_tx.toString()) : BigInt(0)
    };
  },
  toSDK(message: MsgSetMaxPoolPointsPerTx): MsgSetMaxPoolPointsPerTxSDKType {
    const obj: any = {};
    obj.admin = message.admin;
    obj.max_pool_points_per_tx = message.maxPoolPointsPerTx;
    return obj;
  },
  fromAmino(object: MsgSetMaxPoolPointsPerTxAmino): MsgSetMaxPoolPointsPerTx {
    const message = createBaseMsgSetMaxPoolPointsPerTx();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.max_pool_points_per_tx !== undefined && object.max_pool_points_per_tx !== null) {
      message.maxPoolPointsPerTx = BigInt(object.max_pool_points_per_tx);
    }
    return message;
  },
  toAmino(message: MsgSetMaxPoolPointsPerTx): MsgSetMaxPoolPointsPerTxAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.max_pool_points_per_tx = message.maxPoolPointsPerTx !== BigInt(0) ? message.maxPoolPointsPerTx?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetMaxPoolPointsPerTxAminoMsg): MsgSetMaxPoolPointsPerTx {
    return MsgSetMaxPoolPointsPerTx.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetMaxPoolPointsPerTx): MsgSetMaxPoolPointsPerTxAminoMsg {
    return {
      type: "osmosis/protorev/set-max-pool-points-per-tx",
      value: MsgSetMaxPoolPointsPerTx.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetMaxPoolPointsPerTxProtoMsg): MsgSetMaxPoolPointsPerTx {
    return MsgSetMaxPoolPointsPerTx.decode(message.value);
  },
  toProto(message: MsgSetMaxPoolPointsPerTx): Uint8Array {
    return MsgSetMaxPoolPointsPerTx.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMaxPoolPointsPerTx): MsgSetMaxPoolPointsPerTxProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx",
      value: MsgSetMaxPoolPointsPerTx.encode(message).finish()
    };
  }
};
function createBaseMsgSetMaxPoolPointsPerTxResponse(): MsgSetMaxPoolPointsPerTxResponse {
  return {};
}
export const MsgSetMaxPoolPointsPerTxResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTxResponse",
  encode(_: MsgSetMaxPoolPointsPerTxResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMaxPoolPointsPerTxResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMaxPoolPointsPerTxResponse();
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
  fromJSON(_: any): MsgSetMaxPoolPointsPerTxResponse {
    return {};
  },
  toJSON(_: MsgSetMaxPoolPointsPerTxResponse): JsonSafe<MsgSetMaxPoolPointsPerTxResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgSetMaxPoolPointsPerTxResponse>): MsgSetMaxPoolPointsPerTxResponse {
    const message = createBaseMsgSetMaxPoolPointsPerTxResponse();
    return message;
  },
  fromSDK(_: MsgSetMaxPoolPointsPerTxResponseSDKType): MsgSetMaxPoolPointsPerTxResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgSetMaxPoolPointsPerTxResponseSDKType {
    return {};
  },
  toSDK(_: MsgSetMaxPoolPointsPerTxResponse): MsgSetMaxPoolPointsPerTxResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgSetMaxPoolPointsPerTxResponseAmino): MsgSetMaxPoolPointsPerTxResponse {
    const message = createBaseMsgSetMaxPoolPointsPerTxResponse();
    return message;
  },
  toAmino(_: MsgSetMaxPoolPointsPerTxResponse): MsgSetMaxPoolPointsPerTxResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetMaxPoolPointsPerTxResponseAminoMsg): MsgSetMaxPoolPointsPerTxResponse {
    return MsgSetMaxPoolPointsPerTxResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetMaxPoolPointsPerTxResponse): MsgSetMaxPoolPointsPerTxResponseAminoMsg {
    return {
      type: "osmosis/protorev/set-max-pool-points-per-tx-response",
      value: MsgSetMaxPoolPointsPerTxResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetMaxPoolPointsPerTxResponseProtoMsg): MsgSetMaxPoolPointsPerTxResponse {
    return MsgSetMaxPoolPointsPerTxResponse.decode(message.value);
  },
  toProto(message: MsgSetMaxPoolPointsPerTxResponse): Uint8Array {
    return MsgSetMaxPoolPointsPerTxResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMaxPoolPointsPerTxResponse): MsgSetMaxPoolPointsPerTxResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTxResponse",
      value: MsgSetMaxPoolPointsPerTxResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetMaxPoolPointsPerBlock(): MsgSetMaxPoolPointsPerBlock {
  return {
    admin: "",
    maxPoolPointsPerBlock: BigInt(0)
  };
}
export const MsgSetMaxPoolPointsPerBlock = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock",
  encode(message: MsgSetMaxPoolPointsPerBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.maxPoolPointsPerBlock !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxPoolPointsPerBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMaxPoolPointsPerBlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMaxPoolPointsPerBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.maxPoolPointsPerBlock = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetMaxPoolPointsPerBlock {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      maxPoolPointsPerBlock: isSet(object.maxPoolPointsPerBlock) ? BigInt(object.maxPoolPointsPerBlock.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgSetMaxPoolPointsPerBlock): JsonSafe<MsgSetMaxPoolPointsPerBlock> {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.maxPoolPointsPerBlock !== undefined && (obj.maxPoolPointsPerBlock = (message.maxPoolPointsPerBlock || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSetMaxPoolPointsPerBlock>): MsgSetMaxPoolPointsPerBlock {
    const message = createBaseMsgSetMaxPoolPointsPerBlock();
    message.admin = object.admin ?? "";
    message.maxPoolPointsPerBlock = object.maxPoolPointsPerBlock !== undefined && object.maxPoolPointsPerBlock !== null ? BigInt(object.maxPoolPointsPerBlock.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: MsgSetMaxPoolPointsPerBlockSDKType): MsgSetMaxPoolPointsPerBlock {
    return {
      admin: object?.admin,
      maxPoolPointsPerBlock: object?.max_pool_points_per_block
    };
  },
  fromSDKJSON(object: any): MsgSetMaxPoolPointsPerBlockSDKType {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      max_pool_points_per_block: isSet(object.max_pool_points_per_block) ? BigInt(object.max_pool_points_per_block.toString()) : BigInt(0)
    };
  },
  toSDK(message: MsgSetMaxPoolPointsPerBlock): MsgSetMaxPoolPointsPerBlockSDKType {
    const obj: any = {};
    obj.admin = message.admin;
    obj.max_pool_points_per_block = message.maxPoolPointsPerBlock;
    return obj;
  },
  fromAmino(object: MsgSetMaxPoolPointsPerBlockAmino): MsgSetMaxPoolPointsPerBlock {
    const message = createBaseMsgSetMaxPoolPointsPerBlock();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.max_pool_points_per_block !== undefined && object.max_pool_points_per_block !== null) {
      message.maxPoolPointsPerBlock = BigInt(object.max_pool_points_per_block);
    }
    return message;
  },
  toAmino(message: MsgSetMaxPoolPointsPerBlock): MsgSetMaxPoolPointsPerBlockAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.max_pool_points_per_block = message.maxPoolPointsPerBlock !== BigInt(0) ? message.maxPoolPointsPerBlock?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetMaxPoolPointsPerBlockAminoMsg): MsgSetMaxPoolPointsPerBlock {
    return MsgSetMaxPoolPointsPerBlock.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetMaxPoolPointsPerBlock): MsgSetMaxPoolPointsPerBlockAminoMsg {
    return {
      type: "osmosis/protorev/set-max-pool-points-per-block",
      value: MsgSetMaxPoolPointsPerBlock.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetMaxPoolPointsPerBlockProtoMsg): MsgSetMaxPoolPointsPerBlock {
    return MsgSetMaxPoolPointsPerBlock.decode(message.value);
  },
  toProto(message: MsgSetMaxPoolPointsPerBlock): Uint8Array {
    return MsgSetMaxPoolPointsPerBlock.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMaxPoolPointsPerBlock): MsgSetMaxPoolPointsPerBlockProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock",
      value: MsgSetMaxPoolPointsPerBlock.encode(message).finish()
    };
  }
};
function createBaseMsgSetMaxPoolPointsPerBlockResponse(): MsgSetMaxPoolPointsPerBlockResponse {
  return {};
}
export const MsgSetMaxPoolPointsPerBlockResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlockResponse",
  encode(_: MsgSetMaxPoolPointsPerBlockResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMaxPoolPointsPerBlockResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMaxPoolPointsPerBlockResponse();
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
  fromJSON(_: any): MsgSetMaxPoolPointsPerBlockResponse {
    return {};
  },
  toJSON(_: MsgSetMaxPoolPointsPerBlockResponse): JsonSafe<MsgSetMaxPoolPointsPerBlockResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgSetMaxPoolPointsPerBlockResponse>): MsgSetMaxPoolPointsPerBlockResponse {
    const message = createBaseMsgSetMaxPoolPointsPerBlockResponse();
    return message;
  },
  fromSDK(_: MsgSetMaxPoolPointsPerBlockResponseSDKType): MsgSetMaxPoolPointsPerBlockResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgSetMaxPoolPointsPerBlockResponseSDKType {
    return {};
  },
  toSDK(_: MsgSetMaxPoolPointsPerBlockResponse): MsgSetMaxPoolPointsPerBlockResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgSetMaxPoolPointsPerBlockResponseAmino): MsgSetMaxPoolPointsPerBlockResponse {
    const message = createBaseMsgSetMaxPoolPointsPerBlockResponse();
    return message;
  },
  toAmino(_: MsgSetMaxPoolPointsPerBlockResponse): MsgSetMaxPoolPointsPerBlockResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetMaxPoolPointsPerBlockResponseAminoMsg): MsgSetMaxPoolPointsPerBlockResponse {
    return MsgSetMaxPoolPointsPerBlockResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetMaxPoolPointsPerBlockResponse): MsgSetMaxPoolPointsPerBlockResponseAminoMsg {
    return {
      type: "osmosis/protorev/set-max-pool-points-per-block-response",
      value: MsgSetMaxPoolPointsPerBlockResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetMaxPoolPointsPerBlockResponseProtoMsg): MsgSetMaxPoolPointsPerBlockResponse {
    return MsgSetMaxPoolPointsPerBlockResponse.decode(message.value);
  },
  toProto(message: MsgSetMaxPoolPointsPerBlockResponse): Uint8Array {
    return MsgSetMaxPoolPointsPerBlockResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMaxPoolPointsPerBlockResponse): MsgSetMaxPoolPointsPerBlockResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlockResponse",
      value: MsgSetMaxPoolPointsPerBlockResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetBaseDenoms(): MsgSetBaseDenoms {
  return {
    admin: "",
    baseDenoms: []
  };
}
export const MsgSetBaseDenoms = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetBaseDenoms",
  encode(message: MsgSetBaseDenoms, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.baseDenoms) {
      BaseDenom.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetBaseDenoms {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetBaseDenoms();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.baseDenoms.push(BaseDenom.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetBaseDenoms {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      baseDenoms: Array.isArray(object?.baseDenoms) ? object.baseDenoms.map((e: any) => BaseDenom.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgSetBaseDenoms): JsonSafe<MsgSetBaseDenoms> {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    if (message.baseDenoms) {
      obj.baseDenoms = message.baseDenoms.map(e => e ? BaseDenom.toJSON(e) : undefined);
    } else {
      obj.baseDenoms = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSetBaseDenoms>): MsgSetBaseDenoms {
    const message = createBaseMsgSetBaseDenoms();
    message.admin = object.admin ?? "";
    message.baseDenoms = object.baseDenoms?.map(e => BaseDenom.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgSetBaseDenomsSDKType): MsgSetBaseDenoms {
    return {
      admin: object?.admin,
      baseDenoms: Array.isArray(object?.base_denoms) ? object.base_denoms.map((e: any) => BaseDenom.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): MsgSetBaseDenomsSDKType {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      base_denoms: Array.isArray(object?.base_denoms) ? object.base_denoms.map((e: any) => BaseDenom.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: MsgSetBaseDenoms): MsgSetBaseDenomsSDKType {
    const obj: any = {};
    obj.admin = message.admin;
    if (message.baseDenoms) {
      obj.base_denoms = message.baseDenoms.map(e => e ? BaseDenom.toSDK(e) : undefined);
    } else {
      obj.base_denoms = [];
    }
    return obj;
  },
  fromAmino(object: MsgSetBaseDenomsAmino): MsgSetBaseDenoms {
    const message = createBaseMsgSetBaseDenoms();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    message.baseDenoms = object.base_denoms?.map(e => BaseDenom.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgSetBaseDenoms): MsgSetBaseDenomsAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    if (message.baseDenoms) {
      obj.base_denoms = message.baseDenoms.map(e => e ? BaseDenom.toAmino(e) : undefined);
    } else {
      obj.base_denoms = message.baseDenoms;
    }
    return obj;
  },
  fromAminoMsg(object: MsgSetBaseDenomsAminoMsg): MsgSetBaseDenoms {
    return MsgSetBaseDenoms.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetBaseDenoms): MsgSetBaseDenomsAminoMsg {
    return {
      type: "osmosis/protorev/set-base-denoms",
      value: MsgSetBaseDenoms.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetBaseDenomsProtoMsg): MsgSetBaseDenoms {
    return MsgSetBaseDenoms.decode(message.value);
  },
  toProto(message: MsgSetBaseDenoms): Uint8Array {
    return MsgSetBaseDenoms.encode(message).finish();
  },
  toProtoMsg(message: MsgSetBaseDenoms): MsgSetBaseDenomsProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.MsgSetBaseDenoms",
      value: MsgSetBaseDenoms.encode(message).finish()
    };
  }
};
function createBaseMsgSetBaseDenomsResponse(): MsgSetBaseDenomsResponse {
  return {};
}
export const MsgSetBaseDenomsResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetBaseDenomsResponse",
  encode(_: MsgSetBaseDenomsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetBaseDenomsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetBaseDenomsResponse();
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
  fromJSON(_: any): MsgSetBaseDenomsResponse {
    return {};
  },
  toJSON(_: MsgSetBaseDenomsResponse): JsonSafe<MsgSetBaseDenomsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgSetBaseDenomsResponse>): MsgSetBaseDenomsResponse {
    const message = createBaseMsgSetBaseDenomsResponse();
    return message;
  },
  fromSDK(_: MsgSetBaseDenomsResponseSDKType): MsgSetBaseDenomsResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgSetBaseDenomsResponseSDKType {
    return {};
  },
  toSDK(_: MsgSetBaseDenomsResponse): MsgSetBaseDenomsResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgSetBaseDenomsResponseAmino): MsgSetBaseDenomsResponse {
    const message = createBaseMsgSetBaseDenomsResponse();
    return message;
  },
  toAmino(_: MsgSetBaseDenomsResponse): MsgSetBaseDenomsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetBaseDenomsResponseAminoMsg): MsgSetBaseDenomsResponse {
    return MsgSetBaseDenomsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetBaseDenomsResponse): MsgSetBaseDenomsResponseAminoMsg {
    return {
      type: "osmosis/protorev/set-base-denoms-response",
      value: MsgSetBaseDenomsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetBaseDenomsResponseProtoMsg): MsgSetBaseDenomsResponse {
    return MsgSetBaseDenomsResponse.decode(message.value);
  },
  toProto(message: MsgSetBaseDenomsResponse): Uint8Array {
    return MsgSetBaseDenomsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetBaseDenomsResponse): MsgSetBaseDenomsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.MsgSetBaseDenomsResponse",
      value: MsgSetBaseDenomsResponse.encode(message).finish()
    };
  }
};