import { DecCoin, DecCoinSDKType } from "../../base/v1beta1/coin";
import { ValidatorAccumulatedCommission, ValidatorAccumulatedCommissionSDKType, ValidatorHistoricalRewards, ValidatorHistoricalRewardsSDKType, ValidatorCurrentRewards, ValidatorCurrentRewardsSDKType, DelegatorStartingInfo, DelegatorStartingInfoSDKType, ValidatorSlashEvent, ValidatorSlashEventSDKType, Params, ParamsSDKType, FeePool, FeePoolSDKType } from "./distribution";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
import { ComputedRef } from "vue";
export const protobufPackage = "cosmos.distribution.v1beta1";
/**
 * DelegatorWithdrawInfo is the address for where distributions rewards are
 * withdrawn to by default this struct is only used at genesis to feed in
 * default withdraw addresses.
 */
export interface DelegatorWithdrawInfo {
  /** delegator_address is the address of the delegator. */
  delegatorAddress: string;
  /** withdraw_address is the address to withdraw the delegation rewards to. */
  withdrawAddress: string;
}
export interface ReactiveDelegatorWithdrawInfo {
  delegatorAddress: ComputedRef<string>;
  withdrawAddress: ComputedRef<string>;
}
export interface DelegatorWithdrawInfoProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.DelegatorWithdrawInfo";
  value: Uint8Array;
}
/**
 * DelegatorWithdrawInfo is the address for where distributions rewards are
 * withdrawn to by default this struct is only used at genesis to feed in
 * default withdraw addresses.
 */
export interface DelegatorWithdrawInfoSDKType {
  delegator_address: string;
  withdraw_address: string;
}
/** ValidatorOutstandingRewardsRecord is used for import/export via genesis json. */
export interface ValidatorOutstandingRewardsRecord {
  /** validator_address is the address of the validator. */
  validatorAddress: string;
  /** outstanding_rewards represents the oustanding rewards of a validator. */
  outstandingRewards: DecCoin[];
}
export interface ReactiveValidatorOutstandingRewardsRecord {
  validatorAddress: ComputedRef<string>;
  outstandingRewards: ComputedRef<DecCoin[]>;
}
export interface ValidatorOutstandingRewardsRecordProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord";
  value: Uint8Array;
}
/** ValidatorOutstandingRewardsRecord is used for import/export via genesis json. */
export interface ValidatorOutstandingRewardsRecordSDKType {
  validator_address: string;
  outstanding_rewards: DecCoinSDKType[];
}
/**
 * ValidatorAccumulatedCommissionRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorAccumulatedCommissionRecord {
  /** validator_address is the address of the validator. */
  validatorAddress: string;
  /** accumulated is the accumulated commission of a validator. */
  accumulated: ValidatorAccumulatedCommission;
}
export interface ReactiveValidatorAccumulatedCommissionRecord {
  validatorAddress: ComputedRef<string>;
  accumulated: ComputedRef<ValidatorAccumulatedCommission>;
}
export interface ValidatorAccumulatedCommissionRecordProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord";
  value: Uint8Array;
}
/**
 * ValidatorAccumulatedCommissionRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorAccumulatedCommissionRecordSDKType {
  validator_address: string;
  accumulated: ValidatorAccumulatedCommissionSDKType;
}
/**
 * ValidatorHistoricalRewardsRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorHistoricalRewardsRecord {
  /** validator_address is the address of the validator. */
  validatorAddress: string;
  /** period defines the period the historical rewards apply to. */
  period: bigint;
  /** rewards defines the historical rewards of a validator. */
  rewards: ValidatorHistoricalRewards;
}
export interface ReactiveValidatorHistoricalRewardsRecord {
  validatorAddress: ComputedRef<string>;
  period: ComputedRef<bigint>;
  rewards: ComputedRef<ValidatorHistoricalRewards>;
}
export interface ValidatorHistoricalRewardsRecordProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord";
  value: Uint8Array;
}
/**
 * ValidatorHistoricalRewardsRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorHistoricalRewardsRecordSDKType {
  validator_address: string;
  period: bigint;
  rewards: ValidatorHistoricalRewardsSDKType;
}
/** ValidatorCurrentRewardsRecord is used for import / export via genesis json. */
export interface ValidatorCurrentRewardsRecord {
  /** validator_address is the address of the validator. */
  validatorAddress: string;
  /** rewards defines the current rewards of a validator. */
  rewards: ValidatorCurrentRewards;
}
export interface ReactiveValidatorCurrentRewardsRecord {
  validatorAddress: ComputedRef<string>;
  rewards: ComputedRef<ValidatorCurrentRewards>;
}
export interface ValidatorCurrentRewardsRecordProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord";
  value: Uint8Array;
}
/** ValidatorCurrentRewardsRecord is used for import / export via genesis json. */
export interface ValidatorCurrentRewardsRecordSDKType {
  validator_address: string;
  rewards: ValidatorCurrentRewardsSDKType;
}
/** DelegatorStartingInfoRecord used for import / export via genesis json. */
export interface DelegatorStartingInfoRecord {
  /** delegator_address is the address of the delegator. */
  delegatorAddress: string;
  /** validator_address is the address of the validator. */
  validatorAddress: string;
  /** starting_info defines the starting info of a delegator. */
  startingInfo: DelegatorStartingInfo;
}
export interface ReactiveDelegatorStartingInfoRecord {
  delegatorAddress: ComputedRef<string>;
  validatorAddress: ComputedRef<string>;
  startingInfo: ComputedRef<DelegatorStartingInfo>;
}
export interface DelegatorStartingInfoRecordProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord";
  value: Uint8Array;
}
/** DelegatorStartingInfoRecord used for import / export via genesis json. */
export interface DelegatorStartingInfoRecordSDKType {
  delegator_address: string;
  validator_address: string;
  starting_info: DelegatorStartingInfoSDKType;
}
/** ValidatorSlashEventRecord is used for import / export via genesis json. */
export interface ValidatorSlashEventRecord {
  /** validator_address is the address of the validator. */
  validatorAddress: string;
  /** height defines the block height at which the slash event occured. */
  height: bigint;
  /** period is the period of the slash event. */
  period: bigint;
  /** validator_slash_event describes the slash event. */
  validatorSlashEvent: ValidatorSlashEvent;
}
export interface ReactiveValidatorSlashEventRecord {
  validatorAddress: ComputedRef<string>;
  height: ComputedRef<bigint>;
  period: ComputedRef<bigint>;
  validatorSlashEvent: ComputedRef<ValidatorSlashEvent>;
}
export interface ValidatorSlashEventRecordProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEventRecord";
  value: Uint8Array;
}
/** ValidatorSlashEventRecord is used for import / export via genesis json. */
export interface ValidatorSlashEventRecordSDKType {
  validator_address: string;
  height: bigint;
  period: bigint;
  validator_slash_event: ValidatorSlashEventSDKType;
}
/** GenesisState defines the distribution module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params: Params;
  /** fee_pool defines the fee pool at genesis. */
  feePool: FeePool;
  /** fee_pool defines the delegator withdraw infos at genesis. */
  delegatorWithdrawInfos: DelegatorWithdrawInfo[];
  /** fee_pool defines the previous proposer at genesis. */
  previousProposer: string;
  /** fee_pool defines the outstanding rewards of all validators at genesis. */
  outstandingRewards: ValidatorOutstandingRewardsRecord[];
  /** fee_pool defines the accumulated commisions of all validators at genesis. */
  validatorAccumulatedCommissions: ValidatorAccumulatedCommissionRecord[];
  /** fee_pool defines the historical rewards of all validators at genesis. */
  validatorHistoricalRewards: ValidatorHistoricalRewardsRecord[];
  /** fee_pool defines the current rewards of all validators at genesis. */
  validatorCurrentRewards: ValidatorCurrentRewardsRecord[];
  /** fee_pool defines the delegator starting infos at genesis. */
  delegatorStartingInfos: DelegatorStartingInfoRecord[];
  /** fee_pool defines the validator slash events at genesis. */
  validatorSlashEvents: ValidatorSlashEventRecord[];
}
export interface ReactiveGenesisState {
  params: ComputedRef<Params>;
  feePool: ComputedRef<FeePool>;
  delegatorWithdrawInfos: ComputedRef<DelegatorWithdrawInfo[]>;
  previousProposer: ComputedRef<string>;
  outstandingRewards: ComputedRef<ValidatorOutstandingRewardsRecord[]>;
  validatorAccumulatedCommissions: ComputedRef<ValidatorAccumulatedCommissionRecord[]>;
  validatorHistoricalRewards: ComputedRef<ValidatorHistoricalRewardsRecord[]>;
  validatorCurrentRewards: ComputedRef<ValidatorCurrentRewardsRecord[]>;
  delegatorStartingInfos: ComputedRef<DelegatorStartingInfoRecord[]>;
  validatorSlashEvents: ComputedRef<ValidatorSlashEventRecord[]>;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the distribution module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  fee_pool: FeePoolSDKType;
  delegator_withdraw_infos: DelegatorWithdrawInfoSDKType[];
  previous_proposer: string;
  outstanding_rewards: ValidatorOutstandingRewardsRecordSDKType[];
  validator_accumulated_commissions: ValidatorAccumulatedCommissionRecordSDKType[];
  validator_historical_rewards: ValidatorHistoricalRewardsRecordSDKType[];
  validator_current_rewards: ValidatorCurrentRewardsRecordSDKType[];
  delegator_starting_infos: DelegatorStartingInfoRecordSDKType[];
  validator_slash_events: ValidatorSlashEventRecordSDKType[];
}
function createBaseDelegatorWithdrawInfo(): DelegatorWithdrawInfo {
  return {
    delegatorAddress: "",
    withdrawAddress: ""
  };
}
export const DelegatorWithdrawInfo = {
  typeUrl: "/cosmos.distribution.v1beta1.DelegatorWithdrawInfo",
  aminoType: "cosmos-sdk/DelegatorWithdrawInfo",
  is(o: any): o is DelegatorWithdrawInfo {
    return o && (o.$typeUrl === DelegatorWithdrawInfo.typeUrl || typeof o.delegatorAddress === "string" && typeof o.withdrawAddress === "string");
  },
  isSDK(o: any): o is DelegatorWithdrawInfoSDKType {
    return o && (o.$typeUrl === DelegatorWithdrawInfo.typeUrl || typeof o.delegator_address === "string" && typeof o.withdraw_address === "string");
  },
  encode(message: DelegatorWithdrawInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.withdrawAddress !== "") {
      writer.uint32(18).string(message.withdrawAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelegatorWithdrawInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorWithdrawInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.withdrawAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelegatorWithdrawInfo {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      withdrawAddress: isSet(object.withdrawAddress) ? String(object.withdrawAddress) : ""
    };
  },
  toJSON(message: DelegatorWithdrawInfo): JsonSafe<DelegatorWithdrawInfo> {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<DelegatorWithdrawInfo>): DelegatorWithdrawInfo {
    const message = createBaseDelegatorWithdrawInfo();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.withdrawAddress = object.withdrawAddress ?? "";
    return message;
  },
  fromSDK(object: DelegatorWithdrawInfoSDKType): DelegatorWithdrawInfo {
    return {
      delegatorAddress: object?.delegator_address,
      withdrawAddress: object?.withdraw_address
    };
  },
  fromSDKJSON(object: any): DelegatorWithdrawInfoSDKType {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      withdraw_address: isSet(object.withdraw_address) ? String(object.withdraw_address) : ""
    };
  },
  toSDK(message: DelegatorWithdrawInfo): DelegatorWithdrawInfoSDKType {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.withdraw_address = message.withdrawAddress;
    return obj;
  },
  fromAmino(object: DelegatorWithdrawInfoAmino): DelegatorWithdrawInfo {
    const message = createBaseDelegatorWithdrawInfo();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.withdraw_address !== undefined && object.withdraw_address !== null) {
      message.withdrawAddress = object.withdraw_address;
    }
    return message;
  },
  toAmino(message: DelegatorWithdrawInfo): DelegatorWithdrawInfoAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.withdraw_address = message.withdrawAddress === "" ? undefined : message.withdrawAddress;
    return obj;
  },
  fromAminoMsg(object: DelegatorWithdrawInfoAminoMsg): DelegatorWithdrawInfo {
    return DelegatorWithdrawInfo.fromAmino(object.value);
  },
  toAminoMsg(message: DelegatorWithdrawInfo): DelegatorWithdrawInfoAminoMsg {
    return {
      type: "cosmos-sdk/DelegatorWithdrawInfo",
      value: DelegatorWithdrawInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: DelegatorWithdrawInfoProtoMsg): DelegatorWithdrawInfo {
    return DelegatorWithdrawInfo.decode(message.value);
  },
  toProto(message: DelegatorWithdrawInfo): Uint8Array {
    return DelegatorWithdrawInfo.encode(message).finish();
  },
  toProtoMsg(message: DelegatorWithdrawInfo): DelegatorWithdrawInfoProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.DelegatorWithdrawInfo",
      value: DelegatorWithdrawInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DelegatorWithdrawInfo.typeUrl, DelegatorWithdrawInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(DelegatorWithdrawInfo.aminoType, DelegatorWithdrawInfo.typeUrl);
function createBaseValidatorOutstandingRewardsRecord(): ValidatorOutstandingRewardsRecord {
  return {
    validatorAddress: "",
    outstandingRewards: []
  };
}
export const ValidatorOutstandingRewardsRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord",
  aminoType: "cosmos-sdk/ValidatorOutstandingRewardsRecord",
  is(o: any): o is ValidatorOutstandingRewardsRecord {
    return o && (o.$typeUrl === ValidatorOutstandingRewardsRecord.typeUrl || typeof o.validatorAddress === "string" && Array.isArray(o.outstandingRewards) && (!o.outstandingRewards.length || DecCoin.is(o.outstandingRewards[0])));
  },
  isSDK(o: any): o is ValidatorOutstandingRewardsRecordSDKType {
    return o && (o.$typeUrl === ValidatorOutstandingRewardsRecord.typeUrl || typeof o.validator_address === "string" && Array.isArray(o.outstanding_rewards) && (!o.outstanding_rewards.length || DecCoin.isSDK(o.outstanding_rewards[0])));
  },
  encode(message: ValidatorOutstandingRewardsRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    for (const v of message.outstandingRewards) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorOutstandingRewardsRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorOutstandingRewardsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.outstandingRewards.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorOutstandingRewardsRecord {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      outstandingRewards: Array.isArray(object?.outstandingRewards) ? object.outstandingRewards.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  toJSON(message: ValidatorOutstandingRewardsRecord): JsonSafe<ValidatorOutstandingRewardsRecord> {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    if (message.outstandingRewards) {
      obj.outstandingRewards = message.outstandingRewards.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.outstandingRewards = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorOutstandingRewardsRecord>): ValidatorOutstandingRewardsRecord {
    const message = createBaseValidatorOutstandingRewardsRecord();
    message.validatorAddress = object.validatorAddress ?? "";
    message.outstandingRewards = object.outstandingRewards?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ValidatorOutstandingRewardsRecordSDKType): ValidatorOutstandingRewardsRecord {
    return {
      validatorAddress: object?.validator_address,
      outstandingRewards: Array.isArray(object?.outstanding_rewards) ? object.outstanding_rewards.map((e: any) => DecCoin.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): ValidatorOutstandingRewardsRecordSDKType {
    return {
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      outstanding_rewards: Array.isArray(object?.outstanding_rewards) ? object.outstanding_rewards.map((e: any) => DecCoin.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: ValidatorOutstandingRewardsRecord): ValidatorOutstandingRewardsRecordSDKType {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    if (message.outstandingRewards) {
      obj.outstanding_rewards = message.outstandingRewards.map(e => e ? DecCoin.toSDK(e) : undefined);
    } else {
      obj.outstanding_rewards = [];
    }
    return obj;
  },
  fromAmino(object: ValidatorOutstandingRewardsRecordAmino): ValidatorOutstandingRewardsRecord {
    const message = createBaseValidatorOutstandingRewardsRecord();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    message.outstandingRewards = object.outstanding_rewards?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ValidatorOutstandingRewardsRecord): ValidatorOutstandingRewardsRecordAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    if (message.outstandingRewards) {
      obj.outstanding_rewards = message.outstandingRewards.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.outstanding_rewards = message.outstandingRewards;
    }
    return obj;
  },
  fromAminoMsg(object: ValidatorOutstandingRewardsRecordAminoMsg): ValidatorOutstandingRewardsRecord {
    return ValidatorOutstandingRewardsRecord.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorOutstandingRewardsRecord): ValidatorOutstandingRewardsRecordAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorOutstandingRewardsRecord",
      value: ValidatorOutstandingRewardsRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorOutstandingRewardsRecordProtoMsg): ValidatorOutstandingRewardsRecord {
    return ValidatorOutstandingRewardsRecord.decode(message.value);
  },
  toProto(message: ValidatorOutstandingRewardsRecord): Uint8Array {
    return ValidatorOutstandingRewardsRecord.encode(message).finish();
  },
  toProtoMsg(message: ValidatorOutstandingRewardsRecord): ValidatorOutstandingRewardsRecordProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord",
      value: ValidatorOutstandingRewardsRecord.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ValidatorOutstandingRewardsRecord.typeUrl, ValidatorOutstandingRewardsRecord);
GlobalDecoderRegistry.registerAminoProtoMapping(ValidatorOutstandingRewardsRecord.aminoType, ValidatorOutstandingRewardsRecord.typeUrl);
function createBaseValidatorAccumulatedCommissionRecord(): ValidatorAccumulatedCommissionRecord {
  return {
    validatorAddress: "",
    accumulated: ValidatorAccumulatedCommission.fromPartial({})
  };
}
export const ValidatorAccumulatedCommissionRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord",
  aminoType: "cosmos-sdk/ValidatorAccumulatedCommissionRecord",
  is(o: any): o is ValidatorAccumulatedCommissionRecord {
    return o && (o.$typeUrl === ValidatorAccumulatedCommissionRecord.typeUrl || typeof o.validatorAddress === "string" && ValidatorAccumulatedCommission.is(o.accumulated));
  },
  isSDK(o: any): o is ValidatorAccumulatedCommissionRecordSDKType {
    return o && (o.$typeUrl === ValidatorAccumulatedCommissionRecord.typeUrl || typeof o.validator_address === "string" && ValidatorAccumulatedCommission.isSDK(o.accumulated));
  },
  encode(message: ValidatorAccumulatedCommissionRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.accumulated !== undefined) {
      ValidatorAccumulatedCommission.encode(message.accumulated, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorAccumulatedCommissionRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorAccumulatedCommissionRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.accumulated = ValidatorAccumulatedCommission.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorAccumulatedCommissionRecord {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      accumulated: isSet(object.accumulated) ? ValidatorAccumulatedCommission.fromJSON(object.accumulated) : undefined
    };
  },
  toJSON(message: ValidatorAccumulatedCommissionRecord): JsonSafe<ValidatorAccumulatedCommissionRecord> {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.accumulated !== undefined && (obj.accumulated = message.accumulated ? ValidatorAccumulatedCommission.toJSON(message.accumulated) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorAccumulatedCommissionRecord>): ValidatorAccumulatedCommissionRecord {
    const message = createBaseValidatorAccumulatedCommissionRecord();
    message.validatorAddress = object.validatorAddress ?? "";
    message.accumulated = object.accumulated !== undefined && object.accumulated !== null ? ValidatorAccumulatedCommission.fromPartial(object.accumulated) : undefined;
    return message;
  },
  fromSDK(object: ValidatorAccumulatedCommissionRecordSDKType): ValidatorAccumulatedCommissionRecord {
    return {
      validatorAddress: object?.validator_address,
      accumulated: object.accumulated ? ValidatorAccumulatedCommission.fromSDK(object.accumulated) : undefined
    };
  },
  fromSDKJSON(object: any): ValidatorAccumulatedCommissionRecordSDKType {
    return {
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      accumulated: isSet(object.accumulated) ? ValidatorAccumulatedCommission.fromSDKJSON(object.accumulated) : undefined
    };
  },
  toSDK(message: ValidatorAccumulatedCommissionRecord): ValidatorAccumulatedCommissionRecordSDKType {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    message.accumulated !== undefined && (obj.accumulated = message.accumulated ? ValidatorAccumulatedCommission.toSDK(message.accumulated) : undefined);
    return obj;
  },
  fromAmino(object: ValidatorAccumulatedCommissionRecordAmino): ValidatorAccumulatedCommissionRecord {
    const message = createBaseValidatorAccumulatedCommissionRecord();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.accumulated !== undefined && object.accumulated !== null) {
      message.accumulated = ValidatorAccumulatedCommission.fromAmino(object.accumulated);
    }
    return message;
  },
  toAmino(message: ValidatorAccumulatedCommissionRecord): ValidatorAccumulatedCommissionRecordAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.accumulated = message.accumulated ? ValidatorAccumulatedCommission.toAmino(message.accumulated) : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorAccumulatedCommissionRecordAminoMsg): ValidatorAccumulatedCommissionRecord {
    return ValidatorAccumulatedCommissionRecord.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorAccumulatedCommissionRecord): ValidatorAccumulatedCommissionRecordAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorAccumulatedCommissionRecord",
      value: ValidatorAccumulatedCommissionRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorAccumulatedCommissionRecordProtoMsg): ValidatorAccumulatedCommissionRecord {
    return ValidatorAccumulatedCommissionRecord.decode(message.value);
  },
  toProto(message: ValidatorAccumulatedCommissionRecord): Uint8Array {
    return ValidatorAccumulatedCommissionRecord.encode(message).finish();
  },
  toProtoMsg(message: ValidatorAccumulatedCommissionRecord): ValidatorAccumulatedCommissionRecordProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord",
      value: ValidatorAccumulatedCommissionRecord.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ValidatorAccumulatedCommissionRecord.typeUrl, ValidatorAccumulatedCommissionRecord);
GlobalDecoderRegistry.registerAminoProtoMapping(ValidatorAccumulatedCommissionRecord.aminoType, ValidatorAccumulatedCommissionRecord.typeUrl);
function createBaseValidatorHistoricalRewardsRecord(): ValidatorHistoricalRewardsRecord {
  return {
    validatorAddress: "",
    period: BigInt(0),
    rewards: ValidatorHistoricalRewards.fromPartial({})
  };
}
export const ValidatorHistoricalRewardsRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord",
  aminoType: "cosmos-sdk/ValidatorHistoricalRewardsRecord",
  is(o: any): o is ValidatorHistoricalRewardsRecord {
    return o && (o.$typeUrl === ValidatorHistoricalRewardsRecord.typeUrl || typeof o.validatorAddress === "string" && typeof o.period === "bigint" && ValidatorHistoricalRewards.is(o.rewards));
  },
  isSDK(o: any): o is ValidatorHistoricalRewardsRecordSDKType {
    return o && (o.$typeUrl === ValidatorHistoricalRewardsRecord.typeUrl || typeof o.validator_address === "string" && typeof o.period === "bigint" && ValidatorHistoricalRewards.isSDK(o.rewards));
  },
  encode(message: ValidatorHistoricalRewardsRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.period !== BigInt(0)) {
      writer.uint32(16).uint64(message.period);
    }
    if (message.rewards !== undefined) {
      ValidatorHistoricalRewards.encode(message.rewards, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorHistoricalRewardsRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorHistoricalRewardsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.period = reader.uint64();
          break;
        case 3:
          message.rewards = ValidatorHistoricalRewards.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorHistoricalRewardsRecord {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      period: isSet(object.period) ? BigInt(object.period.toString()) : BigInt(0),
      rewards: isSet(object.rewards) ? ValidatorHistoricalRewards.fromJSON(object.rewards) : undefined
    };
  },
  toJSON(message: ValidatorHistoricalRewardsRecord): JsonSafe<ValidatorHistoricalRewardsRecord> {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.period !== undefined && (obj.period = (message.period || BigInt(0)).toString());
    message.rewards !== undefined && (obj.rewards = message.rewards ? ValidatorHistoricalRewards.toJSON(message.rewards) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorHistoricalRewardsRecord>): ValidatorHistoricalRewardsRecord {
    const message = createBaseValidatorHistoricalRewardsRecord();
    message.validatorAddress = object.validatorAddress ?? "";
    message.period = object.period !== undefined && object.period !== null ? BigInt(object.period.toString()) : BigInt(0);
    message.rewards = object.rewards !== undefined && object.rewards !== null ? ValidatorHistoricalRewards.fromPartial(object.rewards) : undefined;
    return message;
  },
  fromSDK(object: ValidatorHistoricalRewardsRecordSDKType): ValidatorHistoricalRewardsRecord {
    return {
      validatorAddress: object?.validator_address,
      period: object?.period,
      rewards: object.rewards ? ValidatorHistoricalRewards.fromSDK(object.rewards) : undefined
    };
  },
  fromSDKJSON(object: any): ValidatorHistoricalRewardsRecordSDKType {
    return {
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      period: isSet(object.period) ? BigInt(object.period.toString()) : BigInt(0),
      rewards: isSet(object.rewards) ? ValidatorHistoricalRewards.fromSDKJSON(object.rewards) : undefined
    };
  },
  toSDK(message: ValidatorHistoricalRewardsRecord): ValidatorHistoricalRewardsRecordSDKType {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    obj.period = message.period;
    message.rewards !== undefined && (obj.rewards = message.rewards ? ValidatorHistoricalRewards.toSDK(message.rewards) : undefined);
    return obj;
  },
  fromAmino(object: ValidatorHistoricalRewardsRecordAmino): ValidatorHistoricalRewardsRecord {
    const message = createBaseValidatorHistoricalRewardsRecord();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.period !== undefined && object.period !== null) {
      message.period = BigInt(object.period);
    }
    if (object.rewards !== undefined && object.rewards !== null) {
      message.rewards = ValidatorHistoricalRewards.fromAmino(object.rewards);
    }
    return message;
  },
  toAmino(message: ValidatorHistoricalRewardsRecord): ValidatorHistoricalRewardsRecordAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.period = message.period !== BigInt(0) ? message.period?.toString() : undefined;
    obj.rewards = message.rewards ? ValidatorHistoricalRewards.toAmino(message.rewards) : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorHistoricalRewardsRecordAminoMsg): ValidatorHistoricalRewardsRecord {
    return ValidatorHistoricalRewardsRecord.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorHistoricalRewardsRecord): ValidatorHistoricalRewardsRecordAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorHistoricalRewardsRecord",
      value: ValidatorHistoricalRewardsRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorHistoricalRewardsRecordProtoMsg): ValidatorHistoricalRewardsRecord {
    return ValidatorHistoricalRewardsRecord.decode(message.value);
  },
  toProto(message: ValidatorHistoricalRewardsRecord): Uint8Array {
    return ValidatorHistoricalRewardsRecord.encode(message).finish();
  },
  toProtoMsg(message: ValidatorHistoricalRewardsRecord): ValidatorHistoricalRewardsRecordProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord",
      value: ValidatorHistoricalRewardsRecord.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ValidatorHistoricalRewardsRecord.typeUrl, ValidatorHistoricalRewardsRecord);
GlobalDecoderRegistry.registerAminoProtoMapping(ValidatorHistoricalRewardsRecord.aminoType, ValidatorHistoricalRewardsRecord.typeUrl);
function createBaseValidatorCurrentRewardsRecord(): ValidatorCurrentRewardsRecord {
  return {
    validatorAddress: "",
    rewards: ValidatorCurrentRewards.fromPartial({})
  };
}
export const ValidatorCurrentRewardsRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord",
  aminoType: "cosmos-sdk/ValidatorCurrentRewardsRecord",
  is(o: any): o is ValidatorCurrentRewardsRecord {
    return o && (o.$typeUrl === ValidatorCurrentRewardsRecord.typeUrl || typeof o.validatorAddress === "string" && ValidatorCurrentRewards.is(o.rewards));
  },
  isSDK(o: any): o is ValidatorCurrentRewardsRecordSDKType {
    return o && (o.$typeUrl === ValidatorCurrentRewardsRecord.typeUrl || typeof o.validator_address === "string" && ValidatorCurrentRewards.isSDK(o.rewards));
  },
  encode(message: ValidatorCurrentRewardsRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.rewards !== undefined) {
      ValidatorCurrentRewards.encode(message.rewards, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorCurrentRewardsRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorCurrentRewardsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.rewards = ValidatorCurrentRewards.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorCurrentRewardsRecord {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      rewards: isSet(object.rewards) ? ValidatorCurrentRewards.fromJSON(object.rewards) : undefined
    };
  },
  toJSON(message: ValidatorCurrentRewardsRecord): JsonSafe<ValidatorCurrentRewardsRecord> {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.rewards !== undefined && (obj.rewards = message.rewards ? ValidatorCurrentRewards.toJSON(message.rewards) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorCurrentRewardsRecord>): ValidatorCurrentRewardsRecord {
    const message = createBaseValidatorCurrentRewardsRecord();
    message.validatorAddress = object.validatorAddress ?? "";
    message.rewards = object.rewards !== undefined && object.rewards !== null ? ValidatorCurrentRewards.fromPartial(object.rewards) : undefined;
    return message;
  },
  fromSDK(object: ValidatorCurrentRewardsRecordSDKType): ValidatorCurrentRewardsRecord {
    return {
      validatorAddress: object?.validator_address,
      rewards: object.rewards ? ValidatorCurrentRewards.fromSDK(object.rewards) : undefined
    };
  },
  fromSDKJSON(object: any): ValidatorCurrentRewardsRecordSDKType {
    return {
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      rewards: isSet(object.rewards) ? ValidatorCurrentRewards.fromSDKJSON(object.rewards) : undefined
    };
  },
  toSDK(message: ValidatorCurrentRewardsRecord): ValidatorCurrentRewardsRecordSDKType {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    message.rewards !== undefined && (obj.rewards = message.rewards ? ValidatorCurrentRewards.toSDK(message.rewards) : undefined);
    return obj;
  },
  fromAmino(object: ValidatorCurrentRewardsRecordAmino): ValidatorCurrentRewardsRecord {
    const message = createBaseValidatorCurrentRewardsRecord();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.rewards !== undefined && object.rewards !== null) {
      message.rewards = ValidatorCurrentRewards.fromAmino(object.rewards);
    }
    return message;
  },
  toAmino(message: ValidatorCurrentRewardsRecord): ValidatorCurrentRewardsRecordAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.rewards = message.rewards ? ValidatorCurrentRewards.toAmino(message.rewards) : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorCurrentRewardsRecordAminoMsg): ValidatorCurrentRewardsRecord {
    return ValidatorCurrentRewardsRecord.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorCurrentRewardsRecord): ValidatorCurrentRewardsRecordAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorCurrentRewardsRecord",
      value: ValidatorCurrentRewardsRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorCurrentRewardsRecordProtoMsg): ValidatorCurrentRewardsRecord {
    return ValidatorCurrentRewardsRecord.decode(message.value);
  },
  toProto(message: ValidatorCurrentRewardsRecord): Uint8Array {
    return ValidatorCurrentRewardsRecord.encode(message).finish();
  },
  toProtoMsg(message: ValidatorCurrentRewardsRecord): ValidatorCurrentRewardsRecordProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord",
      value: ValidatorCurrentRewardsRecord.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ValidatorCurrentRewardsRecord.typeUrl, ValidatorCurrentRewardsRecord);
GlobalDecoderRegistry.registerAminoProtoMapping(ValidatorCurrentRewardsRecord.aminoType, ValidatorCurrentRewardsRecord.typeUrl);
function createBaseDelegatorStartingInfoRecord(): DelegatorStartingInfoRecord {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    startingInfo: DelegatorStartingInfo.fromPartial({})
  };
}
export const DelegatorStartingInfoRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord",
  aminoType: "cosmos-sdk/DelegatorStartingInfoRecord",
  is(o: any): o is DelegatorStartingInfoRecord {
    return o && (o.$typeUrl === DelegatorStartingInfoRecord.typeUrl || typeof o.delegatorAddress === "string" && typeof o.validatorAddress === "string" && DelegatorStartingInfo.is(o.startingInfo));
  },
  isSDK(o: any): o is DelegatorStartingInfoRecordSDKType {
    return o && (o.$typeUrl === DelegatorStartingInfoRecord.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && DelegatorStartingInfo.isSDK(o.starting_info));
  },
  encode(message: DelegatorStartingInfoRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.startingInfo !== undefined) {
      DelegatorStartingInfo.encode(message.startingInfo, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelegatorStartingInfoRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorStartingInfoRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.startingInfo = DelegatorStartingInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelegatorStartingInfoRecord {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      startingInfo: isSet(object.startingInfo) ? DelegatorStartingInfo.fromJSON(object.startingInfo) : undefined
    };
  },
  toJSON(message: DelegatorStartingInfoRecord): JsonSafe<DelegatorStartingInfoRecord> {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.startingInfo !== undefined && (obj.startingInfo = message.startingInfo ? DelegatorStartingInfo.toJSON(message.startingInfo) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<DelegatorStartingInfoRecord>): DelegatorStartingInfoRecord {
    const message = createBaseDelegatorStartingInfoRecord();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.startingInfo = object.startingInfo !== undefined && object.startingInfo !== null ? DelegatorStartingInfo.fromPartial(object.startingInfo) : undefined;
    return message;
  },
  fromSDK(object: DelegatorStartingInfoRecordSDKType): DelegatorStartingInfoRecord {
    return {
      delegatorAddress: object?.delegator_address,
      validatorAddress: object?.validator_address,
      startingInfo: object.starting_info ? DelegatorStartingInfo.fromSDK(object.starting_info) : undefined
    };
  },
  fromSDKJSON(object: any): DelegatorStartingInfoRecordSDKType {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      starting_info: isSet(object.starting_info) ? DelegatorStartingInfo.fromSDKJSON(object.starting_info) : undefined
    };
  },
  toSDK(message: DelegatorStartingInfoRecord): DelegatorStartingInfoRecordSDKType {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    message.startingInfo !== undefined && (obj.starting_info = message.startingInfo ? DelegatorStartingInfo.toSDK(message.startingInfo) : undefined);
    return obj;
  },
  fromAmino(object: DelegatorStartingInfoRecordAmino): DelegatorStartingInfoRecord {
    const message = createBaseDelegatorStartingInfoRecord();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.starting_info !== undefined && object.starting_info !== null) {
      message.startingInfo = DelegatorStartingInfo.fromAmino(object.starting_info);
    }
    return message;
  },
  toAmino(message: DelegatorStartingInfoRecord): DelegatorStartingInfoRecordAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.starting_info = message.startingInfo ? DelegatorStartingInfo.toAmino(message.startingInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: DelegatorStartingInfoRecordAminoMsg): DelegatorStartingInfoRecord {
    return DelegatorStartingInfoRecord.fromAmino(object.value);
  },
  toAminoMsg(message: DelegatorStartingInfoRecord): DelegatorStartingInfoRecordAminoMsg {
    return {
      type: "cosmos-sdk/DelegatorStartingInfoRecord",
      value: DelegatorStartingInfoRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: DelegatorStartingInfoRecordProtoMsg): DelegatorStartingInfoRecord {
    return DelegatorStartingInfoRecord.decode(message.value);
  },
  toProto(message: DelegatorStartingInfoRecord): Uint8Array {
    return DelegatorStartingInfoRecord.encode(message).finish();
  },
  toProtoMsg(message: DelegatorStartingInfoRecord): DelegatorStartingInfoRecordProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord",
      value: DelegatorStartingInfoRecord.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DelegatorStartingInfoRecord.typeUrl, DelegatorStartingInfoRecord);
GlobalDecoderRegistry.registerAminoProtoMapping(DelegatorStartingInfoRecord.aminoType, DelegatorStartingInfoRecord.typeUrl);
function createBaseValidatorSlashEventRecord(): ValidatorSlashEventRecord {
  return {
    validatorAddress: "",
    height: BigInt(0),
    period: BigInt(0),
    validatorSlashEvent: ValidatorSlashEvent.fromPartial({})
  };
}
export const ValidatorSlashEventRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEventRecord",
  aminoType: "cosmos-sdk/ValidatorSlashEventRecord",
  is(o: any): o is ValidatorSlashEventRecord {
    return o && (o.$typeUrl === ValidatorSlashEventRecord.typeUrl || typeof o.validatorAddress === "string" && typeof o.height === "bigint" && typeof o.period === "bigint" && ValidatorSlashEvent.is(o.validatorSlashEvent));
  },
  isSDK(o: any): o is ValidatorSlashEventRecordSDKType {
    return o && (o.$typeUrl === ValidatorSlashEventRecord.typeUrl || typeof o.validator_address === "string" && typeof o.height === "bigint" && typeof o.period === "bigint" && ValidatorSlashEvent.isSDK(o.validator_slash_event));
  },
  encode(message: ValidatorSlashEventRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).uint64(message.height);
    }
    if (message.period !== BigInt(0)) {
      writer.uint32(24).uint64(message.period);
    }
    if (message.validatorSlashEvent !== undefined) {
      ValidatorSlashEvent.encode(message.validatorSlashEvent, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorSlashEventRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashEventRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.height = reader.uint64();
          break;
        case 3:
          message.period = reader.uint64();
          break;
        case 4:
          message.validatorSlashEvent = ValidatorSlashEvent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorSlashEventRecord {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      period: isSet(object.period) ? BigInt(object.period.toString()) : BigInt(0),
      validatorSlashEvent: isSet(object.validatorSlashEvent) ? ValidatorSlashEvent.fromJSON(object.validatorSlashEvent) : undefined
    };
  },
  toJSON(message: ValidatorSlashEventRecord): JsonSafe<ValidatorSlashEventRecord> {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.period !== undefined && (obj.period = (message.period || BigInt(0)).toString());
    message.validatorSlashEvent !== undefined && (obj.validatorSlashEvent = message.validatorSlashEvent ? ValidatorSlashEvent.toJSON(message.validatorSlashEvent) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorSlashEventRecord>): ValidatorSlashEventRecord {
    const message = createBaseValidatorSlashEventRecord();
    message.validatorAddress = object.validatorAddress ?? "";
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.period = object.period !== undefined && object.period !== null ? BigInt(object.period.toString()) : BigInt(0);
    message.validatorSlashEvent = object.validatorSlashEvent !== undefined && object.validatorSlashEvent !== null ? ValidatorSlashEvent.fromPartial(object.validatorSlashEvent) : undefined;
    return message;
  },
  fromSDK(object: ValidatorSlashEventRecordSDKType): ValidatorSlashEventRecord {
    return {
      validatorAddress: object?.validator_address,
      height: object?.height,
      period: object?.period,
      validatorSlashEvent: object.validator_slash_event ? ValidatorSlashEvent.fromSDK(object.validator_slash_event) : undefined
    };
  },
  fromSDKJSON(object: any): ValidatorSlashEventRecordSDKType {
    return {
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      period: isSet(object.period) ? BigInt(object.period.toString()) : BigInt(0),
      validator_slash_event: isSet(object.validator_slash_event) ? ValidatorSlashEvent.fromSDKJSON(object.validator_slash_event) : undefined
    };
  },
  toSDK(message: ValidatorSlashEventRecord): ValidatorSlashEventRecordSDKType {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    obj.height = message.height;
    obj.period = message.period;
    message.validatorSlashEvent !== undefined && (obj.validator_slash_event = message.validatorSlashEvent ? ValidatorSlashEvent.toSDK(message.validatorSlashEvent) : undefined);
    return obj;
  },
  fromAmino(object: ValidatorSlashEventRecordAmino): ValidatorSlashEventRecord {
    const message = createBaseValidatorSlashEventRecord();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.period !== undefined && object.period !== null) {
      message.period = BigInt(object.period);
    }
    if (object.validator_slash_event !== undefined && object.validator_slash_event !== null) {
      message.validatorSlashEvent = ValidatorSlashEvent.fromAmino(object.validator_slash_event);
    }
    return message;
  },
  toAmino(message: ValidatorSlashEventRecord): ValidatorSlashEventRecordAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.period = message.period !== BigInt(0) ? message.period?.toString() : undefined;
    obj.validator_slash_event = message.validatorSlashEvent ? ValidatorSlashEvent.toAmino(message.validatorSlashEvent) : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorSlashEventRecordAminoMsg): ValidatorSlashEventRecord {
    return ValidatorSlashEventRecord.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorSlashEventRecord): ValidatorSlashEventRecordAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorSlashEventRecord",
      value: ValidatorSlashEventRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorSlashEventRecordProtoMsg): ValidatorSlashEventRecord {
    return ValidatorSlashEventRecord.decode(message.value);
  },
  toProto(message: ValidatorSlashEventRecord): Uint8Array {
    return ValidatorSlashEventRecord.encode(message).finish();
  },
  toProtoMsg(message: ValidatorSlashEventRecord): ValidatorSlashEventRecordProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEventRecord",
      value: ValidatorSlashEventRecord.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ValidatorSlashEventRecord.typeUrl, ValidatorSlashEventRecord);
GlobalDecoderRegistry.registerAminoProtoMapping(ValidatorSlashEventRecord.aminoType, ValidatorSlashEventRecord.typeUrl);
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    feePool: FeePool.fromPartial({}),
    delegatorWithdrawInfos: [],
    previousProposer: "",
    outstandingRewards: [],
    validatorAccumulatedCommissions: [],
    validatorHistoricalRewards: [],
    validatorCurrentRewards: [],
    delegatorStartingInfos: [],
    validatorSlashEvents: []
  };
}
export const GenesisState = {
  typeUrl: "/cosmos.distribution.v1beta1.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && FeePool.is(o.feePool) && Array.isArray(o.delegatorWithdrawInfos) && (!o.delegatorWithdrawInfos.length || DelegatorWithdrawInfo.is(o.delegatorWithdrawInfos[0])) && typeof o.previousProposer === "string" && Array.isArray(o.outstandingRewards) && (!o.outstandingRewards.length || ValidatorOutstandingRewardsRecord.is(o.outstandingRewards[0])) && Array.isArray(o.validatorAccumulatedCommissions) && (!o.validatorAccumulatedCommissions.length || ValidatorAccumulatedCommissionRecord.is(o.validatorAccumulatedCommissions[0])) && Array.isArray(o.validatorHistoricalRewards) && (!o.validatorHistoricalRewards.length || ValidatorHistoricalRewardsRecord.is(o.validatorHistoricalRewards[0])) && Array.isArray(o.validatorCurrentRewards) && (!o.validatorCurrentRewards.length || ValidatorCurrentRewardsRecord.is(o.validatorCurrentRewards[0])) && Array.isArray(o.delegatorStartingInfos) && (!o.delegatorStartingInfos.length || DelegatorStartingInfoRecord.is(o.delegatorStartingInfos[0])) && Array.isArray(o.validatorSlashEvents) && (!o.validatorSlashEvents.length || ValidatorSlashEventRecord.is(o.validatorSlashEvents[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && FeePool.isSDK(o.fee_pool) && Array.isArray(o.delegator_withdraw_infos) && (!o.delegator_withdraw_infos.length || DelegatorWithdrawInfo.isSDK(o.delegator_withdraw_infos[0])) && typeof o.previous_proposer === "string" && Array.isArray(o.outstanding_rewards) && (!o.outstanding_rewards.length || ValidatorOutstandingRewardsRecord.isSDK(o.outstanding_rewards[0])) && Array.isArray(o.validator_accumulated_commissions) && (!o.validator_accumulated_commissions.length || ValidatorAccumulatedCommissionRecord.isSDK(o.validator_accumulated_commissions[0])) && Array.isArray(o.validator_historical_rewards) && (!o.validator_historical_rewards.length || ValidatorHistoricalRewardsRecord.isSDK(o.validator_historical_rewards[0])) && Array.isArray(o.validator_current_rewards) && (!o.validator_current_rewards.length || ValidatorCurrentRewardsRecord.isSDK(o.validator_current_rewards[0])) && Array.isArray(o.delegator_starting_infos) && (!o.delegator_starting_infos.length || DelegatorStartingInfoRecord.isSDK(o.delegator_starting_infos[0])) && Array.isArray(o.validator_slash_events) && (!o.validator_slash_events.length || ValidatorSlashEventRecord.isSDK(o.validator_slash_events[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.feePool !== undefined) {
      FeePool.encode(message.feePool, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.delegatorWithdrawInfos) {
      DelegatorWithdrawInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.previousProposer !== "") {
      writer.uint32(34).string(message.previousProposer);
    }
    for (const v of message.outstandingRewards) {
      ValidatorOutstandingRewardsRecord.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.validatorAccumulatedCommissions) {
      ValidatorAccumulatedCommissionRecord.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.validatorHistoricalRewards) {
      ValidatorHistoricalRewardsRecord.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.validatorCurrentRewards) {
      ValidatorCurrentRewardsRecord.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.delegatorStartingInfos) {
      DelegatorStartingInfoRecord.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.validatorSlashEvents) {
      ValidatorSlashEventRecord.encode(v!, writer.uint32(82).fork()).ldelim();
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
          message.feePool = FeePool.decode(reader, reader.uint32());
          break;
        case 3:
          message.delegatorWithdrawInfos.push(DelegatorWithdrawInfo.decode(reader, reader.uint32()));
          break;
        case 4:
          message.previousProposer = reader.string();
          break;
        case 5:
          message.outstandingRewards.push(ValidatorOutstandingRewardsRecord.decode(reader, reader.uint32()));
          break;
        case 6:
          message.validatorAccumulatedCommissions.push(ValidatorAccumulatedCommissionRecord.decode(reader, reader.uint32()));
          break;
        case 7:
          message.validatorHistoricalRewards.push(ValidatorHistoricalRewardsRecord.decode(reader, reader.uint32()));
          break;
        case 8:
          message.validatorCurrentRewards.push(ValidatorCurrentRewardsRecord.decode(reader, reader.uint32()));
          break;
        case 9:
          message.delegatorStartingInfos.push(DelegatorStartingInfoRecord.decode(reader, reader.uint32()));
          break;
        case 10:
          message.validatorSlashEvents.push(ValidatorSlashEventRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      feePool: isSet(object.feePool) ? FeePool.fromJSON(object.feePool) : undefined,
      delegatorWithdrawInfos: Array.isArray(object?.delegatorWithdrawInfos) ? object.delegatorWithdrawInfos.map((e: any) => DelegatorWithdrawInfo.fromJSON(e)) : [],
      previousProposer: isSet(object.previousProposer) ? String(object.previousProposer) : "",
      outstandingRewards: Array.isArray(object?.outstandingRewards) ? object.outstandingRewards.map((e: any) => ValidatorOutstandingRewardsRecord.fromJSON(e)) : [],
      validatorAccumulatedCommissions: Array.isArray(object?.validatorAccumulatedCommissions) ? object.validatorAccumulatedCommissions.map((e: any) => ValidatorAccumulatedCommissionRecord.fromJSON(e)) : [],
      validatorHistoricalRewards: Array.isArray(object?.validatorHistoricalRewards) ? object.validatorHistoricalRewards.map((e: any) => ValidatorHistoricalRewardsRecord.fromJSON(e)) : [],
      validatorCurrentRewards: Array.isArray(object?.validatorCurrentRewards) ? object.validatorCurrentRewards.map((e: any) => ValidatorCurrentRewardsRecord.fromJSON(e)) : [],
      delegatorStartingInfos: Array.isArray(object?.delegatorStartingInfos) ? object.delegatorStartingInfos.map((e: any) => DelegatorStartingInfoRecord.fromJSON(e)) : [],
      validatorSlashEvents: Array.isArray(object?.validatorSlashEvents) ? object.validatorSlashEvents.map((e: any) => ValidatorSlashEventRecord.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.feePool !== undefined && (obj.feePool = message.feePool ? FeePool.toJSON(message.feePool) : undefined);
    if (message.delegatorWithdrawInfos) {
      obj.delegatorWithdrawInfos = message.delegatorWithdrawInfos.map(e => e ? DelegatorWithdrawInfo.toJSON(e) : undefined);
    } else {
      obj.delegatorWithdrawInfos = [];
    }
    message.previousProposer !== undefined && (obj.previousProposer = message.previousProposer);
    if (message.outstandingRewards) {
      obj.outstandingRewards = message.outstandingRewards.map(e => e ? ValidatorOutstandingRewardsRecord.toJSON(e) : undefined);
    } else {
      obj.outstandingRewards = [];
    }
    if (message.validatorAccumulatedCommissions) {
      obj.validatorAccumulatedCommissions = message.validatorAccumulatedCommissions.map(e => e ? ValidatorAccumulatedCommissionRecord.toJSON(e) : undefined);
    } else {
      obj.validatorAccumulatedCommissions = [];
    }
    if (message.validatorHistoricalRewards) {
      obj.validatorHistoricalRewards = message.validatorHistoricalRewards.map(e => e ? ValidatorHistoricalRewardsRecord.toJSON(e) : undefined);
    } else {
      obj.validatorHistoricalRewards = [];
    }
    if (message.validatorCurrentRewards) {
      obj.validatorCurrentRewards = message.validatorCurrentRewards.map(e => e ? ValidatorCurrentRewardsRecord.toJSON(e) : undefined);
    } else {
      obj.validatorCurrentRewards = [];
    }
    if (message.delegatorStartingInfos) {
      obj.delegatorStartingInfos = message.delegatorStartingInfos.map(e => e ? DelegatorStartingInfoRecord.toJSON(e) : undefined);
    } else {
      obj.delegatorStartingInfos = [];
    }
    if (message.validatorSlashEvents) {
      obj.validatorSlashEvents = message.validatorSlashEvents.map(e => e ? ValidatorSlashEventRecord.toJSON(e) : undefined);
    } else {
      obj.validatorSlashEvents = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.feePool = object.feePool !== undefined && object.feePool !== null ? FeePool.fromPartial(object.feePool) : undefined;
    message.delegatorWithdrawInfos = object.delegatorWithdrawInfos?.map(e => DelegatorWithdrawInfo.fromPartial(e)) || [];
    message.previousProposer = object.previousProposer ?? "";
    message.outstandingRewards = object.outstandingRewards?.map(e => ValidatorOutstandingRewardsRecord.fromPartial(e)) || [];
    message.validatorAccumulatedCommissions = object.validatorAccumulatedCommissions?.map(e => ValidatorAccumulatedCommissionRecord.fromPartial(e)) || [];
    message.validatorHistoricalRewards = object.validatorHistoricalRewards?.map(e => ValidatorHistoricalRewardsRecord.fromPartial(e)) || [];
    message.validatorCurrentRewards = object.validatorCurrentRewards?.map(e => ValidatorCurrentRewardsRecord.fromPartial(e)) || [];
    message.delegatorStartingInfos = object.delegatorStartingInfos?.map(e => DelegatorStartingInfoRecord.fromPartial(e)) || [];
    message.validatorSlashEvents = object.validatorSlashEvents?.map(e => ValidatorSlashEventRecord.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined,
      feePool: object.fee_pool ? FeePool.fromSDK(object.fee_pool) : undefined,
      delegatorWithdrawInfos: Array.isArray(object?.delegator_withdraw_infos) ? object.delegator_withdraw_infos.map((e: any) => DelegatorWithdrawInfo.fromSDK(e)) : [],
      previousProposer: object?.previous_proposer,
      outstandingRewards: Array.isArray(object?.outstanding_rewards) ? object.outstanding_rewards.map((e: any) => ValidatorOutstandingRewardsRecord.fromSDK(e)) : [],
      validatorAccumulatedCommissions: Array.isArray(object?.validator_accumulated_commissions) ? object.validator_accumulated_commissions.map((e: any) => ValidatorAccumulatedCommissionRecord.fromSDK(e)) : [],
      validatorHistoricalRewards: Array.isArray(object?.validator_historical_rewards) ? object.validator_historical_rewards.map((e: any) => ValidatorHistoricalRewardsRecord.fromSDK(e)) : [],
      validatorCurrentRewards: Array.isArray(object?.validator_current_rewards) ? object.validator_current_rewards.map((e: any) => ValidatorCurrentRewardsRecord.fromSDK(e)) : [],
      delegatorStartingInfos: Array.isArray(object?.delegator_starting_infos) ? object.delegator_starting_infos.map((e: any) => DelegatorStartingInfoRecord.fromSDK(e)) : [],
      validatorSlashEvents: Array.isArray(object?.validator_slash_events) ? object.validator_slash_events.map((e: any) => ValidatorSlashEventRecord.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): GenesisStateSDKType {
    return {
      params: isSet(object.params) ? Params.fromSDKJSON(object.params) : undefined,
      fee_pool: isSet(object.fee_pool) ? FeePool.fromSDKJSON(object.fee_pool) : undefined,
      delegator_withdraw_infos: Array.isArray(object?.delegator_withdraw_infos) ? object.delegator_withdraw_infos.map((e: any) => DelegatorWithdrawInfo.fromSDKJSON(e)) : [],
      previous_proposer: isSet(object.previous_proposer) ? String(object.previous_proposer) : "",
      outstanding_rewards: Array.isArray(object?.outstanding_rewards) ? object.outstanding_rewards.map((e: any) => ValidatorOutstandingRewardsRecord.fromSDKJSON(e)) : [],
      validator_accumulated_commissions: Array.isArray(object?.validator_accumulated_commissions) ? object.validator_accumulated_commissions.map((e: any) => ValidatorAccumulatedCommissionRecord.fromSDKJSON(e)) : [],
      validator_historical_rewards: Array.isArray(object?.validator_historical_rewards) ? object.validator_historical_rewards.map((e: any) => ValidatorHistoricalRewardsRecord.fromSDKJSON(e)) : [],
      validator_current_rewards: Array.isArray(object?.validator_current_rewards) ? object.validator_current_rewards.map((e: any) => ValidatorCurrentRewardsRecord.fromSDKJSON(e)) : [],
      delegator_starting_infos: Array.isArray(object?.delegator_starting_infos) ? object.delegator_starting_infos.map((e: any) => DelegatorStartingInfoRecord.fromSDKJSON(e)) : [],
      validator_slash_events: Array.isArray(object?.validator_slash_events) ? object.validator_slash_events.map((e: any) => ValidatorSlashEventRecord.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    message.feePool !== undefined && (obj.fee_pool = message.feePool ? FeePool.toSDK(message.feePool) : undefined);
    if (message.delegatorWithdrawInfos) {
      obj.delegator_withdraw_infos = message.delegatorWithdrawInfos.map(e => e ? DelegatorWithdrawInfo.toSDK(e) : undefined);
    } else {
      obj.delegator_withdraw_infos = [];
    }
    obj.previous_proposer = message.previousProposer;
    if (message.outstandingRewards) {
      obj.outstanding_rewards = message.outstandingRewards.map(e => e ? ValidatorOutstandingRewardsRecord.toSDK(e) : undefined);
    } else {
      obj.outstanding_rewards = [];
    }
    if (message.validatorAccumulatedCommissions) {
      obj.validator_accumulated_commissions = message.validatorAccumulatedCommissions.map(e => e ? ValidatorAccumulatedCommissionRecord.toSDK(e) : undefined);
    } else {
      obj.validator_accumulated_commissions = [];
    }
    if (message.validatorHistoricalRewards) {
      obj.validator_historical_rewards = message.validatorHistoricalRewards.map(e => e ? ValidatorHistoricalRewardsRecord.toSDK(e) : undefined);
    } else {
      obj.validator_historical_rewards = [];
    }
    if (message.validatorCurrentRewards) {
      obj.validator_current_rewards = message.validatorCurrentRewards.map(e => e ? ValidatorCurrentRewardsRecord.toSDK(e) : undefined);
    } else {
      obj.validator_current_rewards = [];
    }
    if (message.delegatorStartingInfos) {
      obj.delegator_starting_infos = message.delegatorStartingInfos.map(e => e ? DelegatorStartingInfoRecord.toSDK(e) : undefined);
    } else {
      obj.delegator_starting_infos = [];
    }
    if (message.validatorSlashEvents) {
      obj.validator_slash_events = message.validatorSlashEvents.map(e => e ? ValidatorSlashEventRecord.toSDK(e) : undefined);
    } else {
      obj.validator_slash_events = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.fee_pool !== undefined && object.fee_pool !== null) {
      message.feePool = FeePool.fromAmino(object.fee_pool);
    }
    message.delegatorWithdrawInfos = object.delegator_withdraw_infos?.map(e => DelegatorWithdrawInfo.fromAmino(e)) || [];
    if (object.previous_proposer !== undefined && object.previous_proposer !== null) {
      message.previousProposer = object.previous_proposer;
    }
    message.outstandingRewards = object.outstanding_rewards?.map(e => ValidatorOutstandingRewardsRecord.fromAmino(e)) || [];
    message.validatorAccumulatedCommissions = object.validator_accumulated_commissions?.map(e => ValidatorAccumulatedCommissionRecord.fromAmino(e)) || [];
    message.validatorHistoricalRewards = object.validator_historical_rewards?.map(e => ValidatorHistoricalRewardsRecord.fromAmino(e)) || [];
    message.validatorCurrentRewards = object.validator_current_rewards?.map(e => ValidatorCurrentRewardsRecord.fromAmino(e)) || [];
    message.delegatorStartingInfos = object.delegator_starting_infos?.map(e => DelegatorStartingInfoRecord.fromAmino(e)) || [];
    message.validatorSlashEvents = object.validator_slash_events?.map(e => ValidatorSlashEventRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.fee_pool = message.feePool ? FeePool.toAmino(message.feePool) : undefined;
    if (message.delegatorWithdrawInfos) {
      obj.delegator_withdraw_infos = message.delegatorWithdrawInfos.map(e => e ? DelegatorWithdrawInfo.toAmino(e) : undefined);
    } else {
      obj.delegator_withdraw_infos = message.delegatorWithdrawInfos;
    }
    obj.previous_proposer = message.previousProposer === "" ? undefined : message.previousProposer;
    if (message.outstandingRewards) {
      obj.outstanding_rewards = message.outstandingRewards.map(e => e ? ValidatorOutstandingRewardsRecord.toAmino(e) : undefined);
    } else {
      obj.outstanding_rewards = message.outstandingRewards;
    }
    if (message.validatorAccumulatedCommissions) {
      obj.validator_accumulated_commissions = message.validatorAccumulatedCommissions.map(e => e ? ValidatorAccumulatedCommissionRecord.toAmino(e) : undefined);
    } else {
      obj.validator_accumulated_commissions = message.validatorAccumulatedCommissions;
    }
    if (message.validatorHistoricalRewards) {
      obj.validator_historical_rewards = message.validatorHistoricalRewards.map(e => e ? ValidatorHistoricalRewardsRecord.toAmino(e) : undefined);
    } else {
      obj.validator_historical_rewards = message.validatorHistoricalRewards;
    }
    if (message.validatorCurrentRewards) {
      obj.validator_current_rewards = message.validatorCurrentRewards.map(e => e ? ValidatorCurrentRewardsRecord.toAmino(e) : undefined);
    } else {
      obj.validator_current_rewards = message.validatorCurrentRewards;
    }
    if (message.delegatorStartingInfos) {
      obj.delegator_starting_infos = message.delegatorStartingInfos.map(e => e ? DelegatorStartingInfoRecord.toAmino(e) : undefined);
    } else {
      obj.delegator_starting_infos = message.delegatorStartingInfos;
    }
    if (message.validatorSlashEvents) {
      obj.validator_slash_events = message.validatorSlashEvents.map(e => e ? ValidatorSlashEventRecord.toAmino(e) : undefined);
    } else {
      obj.validator_slash_events = message.validatorSlashEvents;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
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
      typeUrl: "/cosmos.distribution.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisState.aminoType, GenesisState.typeUrl);