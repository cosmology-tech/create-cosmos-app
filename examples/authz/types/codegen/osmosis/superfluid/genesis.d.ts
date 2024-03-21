import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { SuperfluidAsset, SuperfluidAssetAmino, SuperfluidAssetSDKType, OsmoEquivalentMultiplierRecord, OsmoEquivalentMultiplierRecordAmino, OsmoEquivalentMultiplierRecordSDKType, SuperfluidIntermediaryAccount, SuperfluidIntermediaryAccountAmino, SuperfluidIntermediaryAccountSDKType, LockIdIntermediaryAccountConnection, LockIdIntermediaryAccountConnectionAmino, LockIdIntermediaryAccountConnectionSDKType } from "./superfluid";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
    params: Params | undefined;
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
    params?: ParamsAmino | undefined;
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
    params: ParamsSDKType | undefined;
    superfluid_assets: SuperfluidAssetSDKType[];
    osmo_equivalent_multipliers: OsmoEquivalentMultiplierRecordSDKType[];
    intermediary_accounts: SuperfluidIntermediaryAccountSDKType[];
    intemediary_account_connections: LockIdIntermediaryAccountConnectionSDKType[];
}
export declare const GenesisState: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is GenesisState;
    isSDK(o: any): o is GenesisStateSDKType;
    isAmino(o: any): o is GenesisStateAmino;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
    fromSDK(object: GenesisStateSDKType): GenesisState;
    toSDK(message: GenesisState): GenesisStateSDKType;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    toAminoMsg(message: GenesisState): GenesisStateAminoMsg;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
