import { ExponentialCalculation, ExponentialCalculationSDKType, InflationDistribution, InflationDistributionSDKType } from "./inflation";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { ComputedRef } from "vue";
export const protobufPackage = "evmos.inflation.v1";
/** GenesisState defines the inflation module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params: Params;
  /** amount of past periods, based on the epochs per period param */
  period: bigint;
  /** inflation epoch identifier */
  epochIdentifier: string;
  /** number of epochs after which inflation is recalculated */
  epochsPerPeriod: bigint;
  /** number of epochs that have passed while inflation is disabled */
  skippedEpochs: bigint;
}
export interface ReactiveGenesisState {
  params: ComputedRef<Params>;
  period: ComputedRef<bigint>;
  epochIdentifier: ComputedRef<string>;
  epochsPerPeriod: ComputedRef<bigint>;
  skippedEpochs: ComputedRef<bigint>;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/evmos.inflation.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the inflation module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  period: bigint;
  epoch_identifier: string;
  epochs_per_period: bigint;
  skipped_epochs: bigint;
}
/** Params holds parameters for the inflation module. */
export interface Params {
  /** type of coin to mint */
  mintDenom: string;
  /** variables to calculate exponential inflation */
  exponentialCalculation: ExponentialCalculation;
  /** inflation distribution of the minted denom */
  inflationDistribution: InflationDistribution;
  /** parameter to enable inflation and halt increasing the skipped_epochs */
  enableInflation: boolean;
}
export interface ReactiveParams {
  mintDenom: ComputedRef<string>;
  exponentialCalculation: ComputedRef<ExponentialCalculation>;
  inflationDistribution: ComputedRef<InflationDistribution>;
  enableInflation: ComputedRef<boolean>;
}
export interface ParamsProtoMsg {
  typeUrl: "/evmos.inflation.v1.Params";
  value: Uint8Array;
}
/** Params holds parameters for the inflation module. */
export interface ParamsSDKType {
  mint_denom: string;
  exponential_calculation: ExponentialCalculationSDKType;
  inflation_distribution: InflationDistributionSDKType;
  enable_inflation: boolean;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    period: BigInt(0),
    epochIdentifier: "",
    epochsPerPeriod: BigInt(0),
    skippedEpochs: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/evmos.inflation.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.period !== BigInt(0)) {
      writer.uint32(16).uint64(message.period);
    }
    if (message.epochIdentifier !== "") {
      writer.uint32(26).string(message.epochIdentifier);
    }
    if (message.epochsPerPeriod !== BigInt(0)) {
      writer.uint32(32).int64(message.epochsPerPeriod);
    }
    if (message.skippedEpochs !== BigInt(0)) {
      writer.uint32(40).uint64(message.skippedEpochs);
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
          message.period = reader.uint64();
          break;
        case 3:
          message.epochIdentifier = reader.string();
          break;
        case 4:
          message.epochsPerPeriod = reader.int64();
          break;
        case 5:
          message.skippedEpochs = reader.uint64();
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
      period: isSet(object.period) ? BigInt(object.period.toString()) : BigInt(0),
      epochIdentifier: isSet(object.epochIdentifier) ? String(object.epochIdentifier) : "",
      epochsPerPeriod: isSet(object.epochsPerPeriod) ? BigInt(object.epochsPerPeriod.toString()) : BigInt(0),
      skippedEpochs: isSet(object.skippedEpochs) ? BigInt(object.skippedEpochs.toString()) : BigInt(0)
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.period !== undefined && (obj.period = (message.period || BigInt(0)).toString());
    message.epochIdentifier !== undefined && (obj.epochIdentifier = message.epochIdentifier);
    message.epochsPerPeriod !== undefined && (obj.epochsPerPeriod = (message.epochsPerPeriod || BigInt(0)).toString());
    message.skippedEpochs !== undefined && (obj.skippedEpochs = (message.skippedEpochs || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.period = object.period !== undefined && object.period !== null ? BigInt(object.period.toString()) : BigInt(0);
    message.epochIdentifier = object.epochIdentifier ?? "";
    message.epochsPerPeriod = object.epochsPerPeriod !== undefined && object.epochsPerPeriod !== null ? BigInt(object.epochsPerPeriod.toString()) : BigInt(0);
    message.skippedEpochs = object.skippedEpochs !== undefined && object.skippedEpochs !== null ? BigInt(object.skippedEpochs.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined,
      period: object?.period,
      epochIdentifier: object?.epoch_identifier,
      epochsPerPeriod: object?.epochs_per_period,
      skippedEpochs: object?.skipped_epochs
    };
  },
  fromSDKJSON(object: any): GenesisStateSDKType {
    return {
      params: isSet(object.params) ? Params.fromSDKJSON(object.params) : undefined,
      period: isSet(object.period) ? BigInt(object.period.toString()) : BigInt(0),
      epoch_identifier: isSet(object.epoch_identifier) ? String(object.epoch_identifier) : "",
      epochs_per_period: isSet(object.epochs_per_period) ? BigInt(object.epochs_per_period.toString()) : BigInt(0),
      skipped_epochs: isSet(object.skipped_epochs) ? BigInt(object.skipped_epochs.toString()) : BigInt(0)
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    obj.period = message.period;
    obj.epoch_identifier = message.epochIdentifier;
    obj.epochs_per_period = message.epochsPerPeriod;
    obj.skipped_epochs = message.skippedEpochs;
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.period !== undefined && object.period !== null) {
      message.period = BigInt(object.period);
    }
    if (object.epoch_identifier !== undefined && object.epoch_identifier !== null) {
      message.epochIdentifier = object.epoch_identifier;
    }
    if (object.epochs_per_period !== undefined && object.epochs_per_period !== null) {
      message.epochsPerPeriod = BigInt(object.epochs_per_period);
    }
    if (object.skipped_epochs !== undefined && object.skipped_epochs !== null) {
      message.skippedEpochs = BigInt(object.skipped_epochs);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.period = message.period !== BigInt(0) ? message.period?.toString() : undefined;
    obj.epoch_identifier = message.epochIdentifier === "" ? undefined : message.epochIdentifier;
    obj.epochs_per_period = message.epochsPerPeriod !== BigInt(0) ? message.epochsPerPeriod?.toString() : undefined;
    obj.skipped_epochs = message.skippedEpochs !== BigInt(0) ? message.skippedEpochs?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    mintDenom: "",
    exponentialCalculation: ExponentialCalculation.fromPartial({}),
    inflationDistribution: InflationDistribution.fromPartial({}),
    enableInflation: false
  };
}
export const Params = {
  typeUrl: "/evmos.inflation.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    if (message.exponentialCalculation !== undefined) {
      ExponentialCalculation.encode(message.exponentialCalculation, writer.uint32(18).fork()).ldelim();
    }
    if (message.inflationDistribution !== undefined) {
      InflationDistribution.encode(message.inflationDistribution, writer.uint32(26).fork()).ldelim();
    }
    if (message.enableInflation === true) {
      writer.uint32(32).bool(message.enableInflation);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintDenom = reader.string();
          break;
        case 2:
          message.exponentialCalculation = ExponentialCalculation.decode(reader, reader.uint32());
          break;
        case 3:
          message.inflationDistribution = InflationDistribution.decode(reader, reader.uint32());
          break;
        case 4:
          message.enableInflation = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      mintDenom: isSet(object.mintDenom) ? String(object.mintDenom) : "",
      exponentialCalculation: isSet(object.exponentialCalculation) ? ExponentialCalculation.fromJSON(object.exponentialCalculation) : undefined,
      inflationDistribution: isSet(object.inflationDistribution) ? InflationDistribution.fromJSON(object.inflationDistribution) : undefined,
      enableInflation: isSet(object.enableInflation) ? Boolean(object.enableInflation) : false
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.mintDenom !== undefined && (obj.mintDenom = message.mintDenom);
    message.exponentialCalculation !== undefined && (obj.exponentialCalculation = message.exponentialCalculation ? ExponentialCalculation.toJSON(message.exponentialCalculation) : undefined);
    message.inflationDistribution !== undefined && (obj.inflationDistribution = message.inflationDistribution ? InflationDistribution.toJSON(message.inflationDistribution) : undefined);
    message.enableInflation !== undefined && (obj.enableInflation = message.enableInflation);
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.mintDenom = object.mintDenom ?? "";
    message.exponentialCalculation = object.exponentialCalculation !== undefined && object.exponentialCalculation !== null ? ExponentialCalculation.fromPartial(object.exponentialCalculation) : undefined;
    message.inflationDistribution = object.inflationDistribution !== undefined && object.inflationDistribution !== null ? InflationDistribution.fromPartial(object.inflationDistribution) : undefined;
    message.enableInflation = object.enableInflation ?? false;
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      mintDenom: object?.mint_denom,
      exponentialCalculation: object.exponential_calculation ? ExponentialCalculation.fromSDK(object.exponential_calculation) : undefined,
      inflationDistribution: object.inflation_distribution ? InflationDistribution.fromSDK(object.inflation_distribution) : undefined,
      enableInflation: object?.enable_inflation
    };
  },
  fromSDKJSON(object: any): ParamsSDKType {
    return {
      mint_denom: isSet(object.mint_denom) ? String(object.mint_denom) : "",
      exponential_calculation: isSet(object.exponential_calculation) ? ExponentialCalculation.fromSDKJSON(object.exponential_calculation) : undefined,
      inflation_distribution: isSet(object.inflation_distribution) ? InflationDistribution.fromSDKJSON(object.inflation_distribution) : undefined,
      enable_inflation: isSet(object.enable_inflation) ? Boolean(object.enable_inflation) : false
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.mint_denom = message.mintDenom;
    message.exponentialCalculation !== undefined && (obj.exponential_calculation = message.exponentialCalculation ? ExponentialCalculation.toSDK(message.exponentialCalculation) : undefined);
    message.inflationDistribution !== undefined && (obj.inflation_distribution = message.inflationDistribution ? InflationDistribution.toSDK(message.inflationDistribution) : undefined);
    obj.enable_inflation = message.enableInflation;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.mint_denom !== undefined && object.mint_denom !== null) {
      message.mintDenom = object.mint_denom;
    }
    if (object.exponential_calculation !== undefined && object.exponential_calculation !== null) {
      message.exponentialCalculation = ExponentialCalculation.fromAmino(object.exponential_calculation);
    }
    if (object.inflation_distribution !== undefined && object.inflation_distribution !== null) {
      message.inflationDistribution = InflationDistribution.fromAmino(object.inflation_distribution);
    }
    if (object.enable_inflation !== undefined && object.enable_inflation !== null) {
      message.enableInflation = object.enable_inflation;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.mint_denom = message.mintDenom === "" ? undefined : message.mintDenom;
    obj.exponential_calculation = message.exponentialCalculation ? ExponentialCalculation.toAmino(message.exponentialCalculation) : undefined;
    obj.inflation_distribution = message.inflationDistribution ? InflationDistribution.toAmino(message.inflationDistribution) : undefined;
    obj.enable_inflation = message.enableInflation === false ? undefined : message.enableInflation;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};