//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { ClaimRecord, ClaimRecordAmino, ClaimRecordSDKType } from "./claim";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "osmosis.claim.v1beta1";
/** GenesisState defines the claim module's genesis state. */
export interface GenesisState {
  /** balance of the claim module's account */
  moduleAccountBalance: Coin;
  /** params defines all the parameters of the module. */
  params: Params;
  /** list of claim records, one for every airdrop recipient */
  claimRecords: ClaimRecord[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.claim.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the claim module's genesis state. */
export interface GenesisStateAmino {
  /** balance of the claim module's account */
  module_account_balance?: CoinAmino;
  /** params defines all the parameters of the module. */
  params?: ParamsAmino;
  /** list of claim records, one for every airdrop recipient */
  claim_records?: ClaimRecordAmino[];
}
export interface GenesisStateAminoMsg {
  type: "osmosis/claim/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the claim module's genesis state. */
export interface GenesisStateSDKType {
  module_account_balance: CoinSDKType;
  params: ParamsSDKType;
  claim_records: ClaimRecordSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    moduleAccountBalance: Coin.fromPartial({}),
    params: Params.fromPartial({}),
    claimRecords: []
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.claim.v1beta1.GenesisState",
  aminoType: "osmosis/claim/genesis-state",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Coin.is(o.moduleAccountBalance) && Params.is(o.params) && Array.isArray(o.claimRecords) && (!o.claimRecords.length || ClaimRecord.is(o.claimRecords[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Coin.isSDK(o.module_account_balance) && Params.isSDK(o.params) && Array.isArray(o.claim_records) && (!o.claim_records.length || ClaimRecord.isSDK(o.claim_records[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Coin.isAmino(o.module_account_balance) && Params.isAmino(o.params) && Array.isArray(o.claim_records) && (!o.claim_records.length || ClaimRecord.isAmino(o.claim_records[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.moduleAccountBalance !== undefined) {
      Coin.encode(message.moduleAccountBalance, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.claimRecords) {
      ClaimRecord.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.moduleAccountBalance = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 3:
          message.claimRecords.push(ClaimRecord.decode(reader, reader.uint32()));
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
    if (isSet(object.moduleAccountBalance)) obj.moduleAccountBalance = Coin.fromJSON(object.moduleAccountBalance);
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (Array.isArray(object?.claimRecords)) obj.claimRecords = object.claimRecords.map((e: any) => ClaimRecord.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.moduleAccountBalance !== undefined && (obj.moduleAccountBalance = message.moduleAccountBalance ? Coin.toJSON(message.moduleAccountBalance) : undefined);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.claimRecords) {
      obj.claimRecords = message.claimRecords.map(e => e ? ClaimRecord.toJSON(e) : undefined);
    } else {
      obj.claimRecords = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    if (object.moduleAccountBalance !== undefined && object.moduleAccountBalance !== null) {
      message.moduleAccountBalance = Coin.fromPartial(object.moduleAccountBalance);
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.claimRecords = object.claimRecords?.map(e => ClaimRecord.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      moduleAccountBalance: object.module_account_balance ? Coin.fromSDK(object.module_account_balance) : undefined,
      params: object.params ? Params.fromSDK(object.params) : undefined,
      claimRecords: Array.isArray(object?.claim_records) ? object.claim_records.map((e: any) => ClaimRecord.fromSDK(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.moduleAccountBalance !== undefined && (obj.module_account_balance = message.moduleAccountBalance ? Coin.toSDK(message.moduleAccountBalance) : undefined);
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    if (message.claimRecords) {
      obj.claim_records = message.claimRecords.map(e => e ? ClaimRecord.toSDK(e) : undefined);
    } else {
      obj.claim_records = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.module_account_balance !== undefined && object.module_account_balance !== null) {
      message.moduleAccountBalance = Coin.fromAmino(object.module_account_balance);
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.claimRecords = object.claim_records?.map(e => ClaimRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.module_account_balance = message.moduleAccountBalance ? Coin.toAmino(message.moduleAccountBalance) : undefined;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.claimRecords) {
      obj.claim_records = message.claimRecords.map(e => e ? ClaimRecord.toAmino(e) : undefined);
    } else {
      obj.claim_records = message.claimRecords;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "osmosis/claim/genesis-state",
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
      typeUrl: "/osmosis.claim.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisState.aminoType, GenesisState.typeUrl);