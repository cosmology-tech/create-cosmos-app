//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { SuperfluidAsset, SuperfluidAssetAmino, SuperfluidAssetSDKType, OsmoEquivalentMultiplierRecord, OsmoEquivalentMultiplierRecordAmino, OsmoEquivalentMultiplierRecordSDKType, SuperfluidIntermediaryAccount, SuperfluidIntermediaryAccountAmino, SuperfluidIntermediaryAccountSDKType, LockIdIntermediaryAccountConnection, LockIdIntermediaryAccountConnectionAmino, LockIdIntermediaryAccountConnectionSDKType } from "./superfluid";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { GlobalDecoderRegistry } from "../../registry";
export const protobufPackage = "osmosis.superfluid";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
  params: Params;
  /**
   * superfluid_assets defines the registered superfluid assets that have been
   * registered via governance.
   */
  superfluidAssets: SuperfluidAsset[];
  /**
   * osmo_equivalent_multipliers is the records of osmo equivalent amount of
   * each superfluid registered pool, updated every epoch.
   */
  osmoEquivalentMultipliers: OsmoEquivalentMultiplierRecord[];
  /**
   * intermediary_accounts is a secondary account for superfluid staking that
   * plays an intermediary role between validators and the delegators.
   */
  intermediaryAccounts: SuperfluidIntermediaryAccount[];
  intemediaryAccountConnections: LockIdIntermediaryAccountConnection[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.superfluid.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  /**
   * superfluid_assets defines the registered superfluid assets that have been
   * registered via governance.
   */
  superfluid_assets?: SuperfluidAssetAmino[];
  /**
   * osmo_equivalent_multipliers is the records of osmo equivalent amount of
   * each superfluid registered pool, updated every epoch.
   */
  osmo_equivalent_multipliers?: OsmoEquivalentMultiplierRecordAmino[];
  /**
   * intermediary_accounts is a secondary account for superfluid staking that
   * plays an intermediary role between validators and the delegators.
   */
  intermediary_accounts?: SuperfluidIntermediaryAccountAmino[];
  intemediary_account_connections?: LockIdIntermediaryAccountConnectionAmino[];
}
export interface GenesisStateAminoMsg {
  type: "osmosis/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  superfluid_assets: SuperfluidAssetSDKType[];
  osmo_equivalent_multipliers: OsmoEquivalentMultiplierRecordSDKType[];
  intermediary_accounts: SuperfluidIntermediaryAccountSDKType[];
  intemediary_account_connections: LockIdIntermediaryAccountConnectionSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    superfluidAssets: [],
    osmoEquivalentMultipliers: [],
    intermediaryAccounts: [],
    intemediaryAccountConnections: []
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.superfluid.GenesisState",
  aminoType: "osmosis/genesis-state",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.superfluidAssets) && (!o.superfluidAssets.length || SuperfluidAsset.is(o.superfluidAssets[0])) && Array.isArray(o.osmoEquivalentMultipliers) && (!o.osmoEquivalentMultipliers.length || OsmoEquivalentMultiplierRecord.is(o.osmoEquivalentMultipliers[0])) && Array.isArray(o.intermediaryAccounts) && (!o.intermediaryAccounts.length || SuperfluidIntermediaryAccount.is(o.intermediaryAccounts[0])) && Array.isArray(o.intemediaryAccountConnections) && (!o.intemediaryAccountConnections.length || LockIdIntermediaryAccountConnection.is(o.intemediaryAccountConnections[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.superfluid_assets) && (!o.superfluid_assets.length || SuperfluidAsset.isSDK(o.superfluid_assets[0])) && Array.isArray(o.osmo_equivalent_multipliers) && (!o.osmo_equivalent_multipliers.length || OsmoEquivalentMultiplierRecord.isSDK(o.osmo_equivalent_multipliers[0])) && Array.isArray(o.intermediary_accounts) && (!o.intermediary_accounts.length || SuperfluidIntermediaryAccount.isSDK(o.intermediary_accounts[0])) && Array.isArray(o.intemediary_account_connections) && (!o.intemediary_account_connections.length || LockIdIntermediaryAccountConnection.isSDK(o.intemediary_account_connections[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.superfluid_assets) && (!o.superfluid_assets.length || SuperfluidAsset.isAmino(o.superfluid_assets[0])) && Array.isArray(o.osmo_equivalent_multipliers) && (!o.osmo_equivalent_multipliers.length || OsmoEquivalentMultiplierRecord.isAmino(o.osmo_equivalent_multipliers[0])) && Array.isArray(o.intermediary_accounts) && (!o.intermediary_accounts.length || SuperfluidIntermediaryAccount.isAmino(o.intermediary_accounts[0])) && Array.isArray(o.intemediary_account_connections) && (!o.intemediary_account_connections.length || LockIdIntermediaryAccountConnection.isAmino(o.intemediary_account_connections[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.superfluidAssets) {
      SuperfluidAsset.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.osmoEquivalentMultipliers) {
      OsmoEquivalentMultiplierRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.intermediaryAccounts) {
      SuperfluidIntermediaryAccount.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.intemediaryAccountConnections) {
      LockIdIntermediaryAccountConnection.encode(v!, writer.uint32(42).fork()).ldelim();
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
          message.superfluidAssets.push(SuperfluidAsset.decode(reader, reader.uint32()));
          break;
        case 3:
          message.osmoEquivalentMultipliers.push(OsmoEquivalentMultiplierRecord.decode(reader, reader.uint32()));
          break;
        case 4:
          message.intermediaryAccounts.push(SuperfluidIntermediaryAccount.decode(reader, reader.uint32()));
          break;
        case 5:
          message.intemediaryAccountConnections.push(LockIdIntermediaryAccountConnection.decode(reader, reader.uint32()));
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
    if (Array.isArray(object?.superfluidAssets)) obj.superfluidAssets = object.superfluidAssets.map((e: any) => SuperfluidAsset.fromJSON(e));
    if (Array.isArray(object?.osmoEquivalentMultipliers)) obj.osmoEquivalentMultipliers = object.osmoEquivalentMultipliers.map((e: any) => OsmoEquivalentMultiplierRecord.fromJSON(e));
    if (Array.isArray(object?.intermediaryAccounts)) obj.intermediaryAccounts = object.intermediaryAccounts.map((e: any) => SuperfluidIntermediaryAccount.fromJSON(e));
    if (Array.isArray(object?.intemediaryAccountConnections)) obj.intemediaryAccountConnections = object.intemediaryAccountConnections.map((e: any) => LockIdIntermediaryAccountConnection.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.superfluidAssets) {
      obj.superfluidAssets = message.superfluidAssets.map(e => e ? SuperfluidAsset.toJSON(e) : undefined);
    } else {
      obj.superfluidAssets = [];
    }
    if (message.osmoEquivalentMultipliers) {
      obj.osmoEquivalentMultipliers = message.osmoEquivalentMultipliers.map(e => e ? OsmoEquivalentMultiplierRecord.toJSON(e) : undefined);
    } else {
      obj.osmoEquivalentMultipliers = [];
    }
    if (message.intermediaryAccounts) {
      obj.intermediaryAccounts = message.intermediaryAccounts.map(e => e ? SuperfluidIntermediaryAccount.toJSON(e) : undefined);
    } else {
      obj.intermediaryAccounts = [];
    }
    if (message.intemediaryAccountConnections) {
      obj.intemediaryAccountConnections = message.intemediaryAccountConnections.map(e => e ? LockIdIntermediaryAccountConnection.toJSON(e) : undefined);
    } else {
      obj.intemediaryAccountConnections = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.superfluidAssets = object.superfluidAssets?.map(e => SuperfluidAsset.fromPartial(e)) || [];
    message.osmoEquivalentMultipliers = object.osmoEquivalentMultipliers?.map(e => OsmoEquivalentMultiplierRecord.fromPartial(e)) || [];
    message.intermediaryAccounts = object.intermediaryAccounts?.map(e => SuperfluidIntermediaryAccount.fromPartial(e)) || [];
    message.intemediaryAccountConnections = object.intemediaryAccountConnections?.map(e => LockIdIntermediaryAccountConnection.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined,
      superfluidAssets: Array.isArray(object?.superfluid_assets) ? object.superfluid_assets.map((e: any) => SuperfluidAsset.fromSDK(e)) : [],
      osmoEquivalentMultipliers: Array.isArray(object?.osmo_equivalent_multipliers) ? object.osmo_equivalent_multipliers.map((e: any) => OsmoEquivalentMultiplierRecord.fromSDK(e)) : [],
      intermediaryAccounts: Array.isArray(object?.intermediary_accounts) ? object.intermediary_accounts.map((e: any) => SuperfluidIntermediaryAccount.fromSDK(e)) : [],
      intemediaryAccountConnections: Array.isArray(object?.intemediary_account_connections) ? object.intemediary_account_connections.map((e: any) => LockIdIntermediaryAccountConnection.fromSDK(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    if (message.superfluidAssets) {
      obj.superfluid_assets = message.superfluidAssets.map(e => e ? SuperfluidAsset.toSDK(e) : undefined);
    } else {
      obj.superfluid_assets = [];
    }
    if (message.osmoEquivalentMultipliers) {
      obj.osmo_equivalent_multipliers = message.osmoEquivalentMultipliers.map(e => e ? OsmoEquivalentMultiplierRecord.toSDK(e) : undefined);
    } else {
      obj.osmo_equivalent_multipliers = [];
    }
    if (message.intermediaryAccounts) {
      obj.intermediary_accounts = message.intermediaryAccounts.map(e => e ? SuperfluidIntermediaryAccount.toSDK(e) : undefined);
    } else {
      obj.intermediary_accounts = [];
    }
    if (message.intemediaryAccountConnections) {
      obj.intemediary_account_connections = message.intemediaryAccountConnections.map(e => e ? LockIdIntermediaryAccountConnection.toSDK(e) : undefined);
    } else {
      obj.intemediary_account_connections = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.superfluidAssets = object.superfluid_assets?.map(e => SuperfluidAsset.fromAmino(e)) || [];
    message.osmoEquivalentMultipliers = object.osmo_equivalent_multipliers?.map(e => OsmoEquivalentMultiplierRecord.fromAmino(e)) || [];
    message.intermediaryAccounts = object.intermediary_accounts?.map(e => SuperfluidIntermediaryAccount.fromAmino(e)) || [];
    message.intemediaryAccountConnections = object.intemediary_account_connections?.map(e => LockIdIntermediaryAccountConnection.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.superfluidAssets) {
      obj.superfluid_assets = message.superfluidAssets.map(e => e ? SuperfluidAsset.toAmino(e) : undefined);
    } else {
      obj.superfluid_assets = message.superfluidAssets;
    }
    if (message.osmoEquivalentMultipliers) {
      obj.osmo_equivalent_multipliers = message.osmoEquivalentMultipliers.map(e => e ? OsmoEquivalentMultiplierRecord.toAmino(e) : undefined);
    } else {
      obj.osmo_equivalent_multipliers = message.osmoEquivalentMultipliers;
    }
    if (message.intermediaryAccounts) {
      obj.intermediary_accounts = message.intermediaryAccounts.map(e => e ? SuperfluidIntermediaryAccount.toAmino(e) : undefined);
    } else {
      obj.intermediary_accounts = message.intermediaryAccounts;
    }
    if (message.intemediaryAccountConnections) {
      obj.intemediary_account_connections = message.intemediaryAccountConnections.map(e => e ? LockIdIntermediaryAccountConnection.toAmino(e) : undefined);
    } else {
      obj.intemediary_account_connections = message.intemediaryAccountConnections;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "osmosis/genesis-state",
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
      typeUrl: "/osmosis.superfluid.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisState.aminoType, GenesisState.typeUrl);