import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, DeepPartial } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { ComputedRef } from "vue";
export const protobufPackage = "osmosis.superfluid";
/** Params holds parameters for the superfluid module */
export interface Params {
  /**
   * minimum_risk_factor is to be cut on OSMO equivalent value of lp tokens for
   * superfluid staking, default: 5%. The minimum risk factor works
   * to counter-balance the staked amount on chain's exposure to various asset
   * volatilities, and have base staking be 'resistant' to volatility.
   */
  minimumRiskFactor: string;
}
export interface ReactiveParams {
  minimumRiskFactor: ComputedRef<string>;
}
export interface ParamsProtoMsg {
  typeUrl: "/osmosis.superfluid.Params";
  value: Uint8Array;
}
/** Params holds parameters for the superfluid module */
export interface ParamsSDKType {
  minimum_risk_factor: string;
}
function createBaseParams(): Params {
  return {
    minimumRiskFactor: ""
  };
}
export const Params = {
  typeUrl: "/osmosis.superfluid.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minimumRiskFactor !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.minimumRiskFactor, 18).atomics);
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
          message.minimumRiskFactor = Decimal.fromAtomics(reader.string(), 18).toString();
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
      minimumRiskFactor: isSet(object.minimumRiskFactor) ? String(object.minimumRiskFactor) : ""
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.minimumRiskFactor !== undefined && (obj.minimumRiskFactor = message.minimumRiskFactor);
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.minimumRiskFactor = object.minimumRiskFactor ?? "";
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      minimumRiskFactor: object?.minimum_risk_factor
    };
  },
  fromSDKJSON(object: any): ParamsSDKType {
    return {
      minimum_risk_factor: isSet(object.minimum_risk_factor) ? String(object.minimum_risk_factor) : ""
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.minimum_risk_factor = message.minimumRiskFactor;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.minimum_risk_factor !== undefined && object.minimum_risk_factor !== null) {
      message.minimumRiskFactor = object.minimum_risk_factor;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.minimum_risk_factor = message.minimumRiskFactor === "" ? undefined : message.minimumRiskFactor;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "osmosis/params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.Params",
      value: Params.encode(message).finish()
    };
  }
};