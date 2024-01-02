import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
export declare enum Action {
    ActionAddLiquidity = 0,
    ActionSwap = 1,
    ActionVote = 2,
    ActionDelegateStake = 3,
    UNRECOGNIZED = -1
}
export declare const ActionSDKType: typeof Action;
export declare const ActionAmino: typeof Action;
export declare function actionFromJSON(object: any): Action;
export declare function actionToJSON(object: Action): string;
/** A Claim Records is the metadata of claim data per address */
export interface ClaimRecord {
    /** address of claim user */
    address: string;
    /** total initial claimable amount for the user */
    initialClaimableAmount: Coin[];
    /**
     * true if action is completed
     * index of bool in array refers to action enum #
     */
    actionCompleted: boolean[];
}
export interface ClaimRecordProtoMsg {
    typeUrl: "/osmosis.claim.v1beta1.ClaimRecord";
    value: Uint8Array;
}
/** A Claim Records is the metadata of claim data per address */
export interface ClaimRecordAmino {
    /** address of claim user */
    address?: string;
    /** total initial claimable amount for the user */
    initial_claimable_amount?: CoinAmino[];
    /**
     * true if action is completed
     * index of bool in array refers to action enum #
     */
    action_completed?: boolean[];
}
export interface ClaimRecordAminoMsg {
    type: "osmosis/claim/claim-record";
    value: ClaimRecordAmino;
}
/** A Claim Records is the metadata of claim data per address */
export interface ClaimRecordSDKType {
    address: string;
    initial_claimable_amount: CoinSDKType[];
    action_completed: boolean[];
}
export declare const ClaimRecord: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ClaimRecord;
    isSDK(o: any): o is ClaimRecordSDKType;
    isAmino(o: any): o is ClaimRecordAmino;
    encode(message: ClaimRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ClaimRecord;
    fromJSON(object: any): ClaimRecord;
    toJSON(message: ClaimRecord): unknown;
    fromPartial(object: DeepPartial<ClaimRecord>): ClaimRecord;
    fromSDK(object: ClaimRecordSDKType): ClaimRecord;
    toSDK(message: ClaimRecord): ClaimRecordSDKType;
    fromAmino(object: ClaimRecordAmino): ClaimRecord;
    toAmino(message: ClaimRecord): ClaimRecordAmino;
    fromAminoMsg(object: ClaimRecordAminoMsg): ClaimRecord;
    toAminoMsg(message: ClaimRecord): ClaimRecordAminoMsg;
    fromProtoMsg(message: ClaimRecordProtoMsg): ClaimRecord;
    toProto(message: ClaimRecord): Uint8Array;
    toProtoMsg(message: ClaimRecord): ClaimRecordProtoMsg;
};
