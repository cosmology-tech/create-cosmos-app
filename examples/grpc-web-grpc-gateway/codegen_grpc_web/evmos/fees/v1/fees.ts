import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "evmos.fees.v1";
/**
 * DevFeeInfo defines an instance that organizes fee distribution conditions
 * for the owner of a given smart contract
 */
export interface DevFeeInfo {
  /** hex address of registered contract */
  contractAddress: string;
  /** bech32 address of contract deployer */
  deployerAddress: string;
  /**
   * bech32 address of account receiving the transaction fees
   * it defaults to deployer_address
   */
  withdrawAddress: string;
}
export interface DevFeeInfoProtoMsg {
  typeUrl: "/evmos.fees.v1.DevFeeInfo";
  value: Uint8Array;
}
/**
 * DevFeeInfo defines an instance that organizes fee distribution conditions
 * for the owner of a given smart contract
 */
export interface DevFeeInfoAmino {
  /** hex address of registered contract */
  contract_address: string;
  /** bech32 address of contract deployer */
  deployer_address: string;
  /**
   * bech32 address of account receiving the transaction fees
   * it defaults to deployer_address
   */
  withdraw_address: string;
}
export interface DevFeeInfoAminoMsg {
  type: "/evmos.fees.v1.DevFeeInfo";
  value: DevFeeInfoAmino;
}
/**
 * DevFeeInfo defines an instance that organizes fee distribution conditions
 * for the owner of a given smart contract
 */
export interface DevFeeInfoSDKType {
  contract_address: string;
  deployer_address: string;
  withdraw_address: string;
}
function createBaseDevFeeInfo(): DevFeeInfo {
  return {
    contractAddress: "",
    deployerAddress: "",
    withdrawAddress: ""
  };
}
export const DevFeeInfo = {
  typeUrl: "/evmos.fees.v1.DevFeeInfo",
  encode(message: DevFeeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.deployerAddress !== "") {
      writer.uint32(18).string(message.deployerAddress);
    }
    if (message.withdrawAddress !== "") {
      writer.uint32(26).string(message.withdrawAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DevFeeInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDevFeeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.deployerAddress = reader.string();
          break;
        case 3:
          message.withdrawAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DevFeeInfo {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      deployerAddress: isSet(object.deployerAddress) ? String(object.deployerAddress) : "",
      withdrawAddress: isSet(object.withdrawAddress) ? String(object.withdrawAddress) : ""
    };
  },
  toJSON(message: DevFeeInfo): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.deployerAddress !== undefined && (obj.deployerAddress = message.deployerAddress);
    message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<DevFeeInfo>): DevFeeInfo {
    const message = createBaseDevFeeInfo();
    message.contractAddress = object.contractAddress ?? "";
    message.deployerAddress = object.deployerAddress ?? "";
    message.withdrawAddress = object.withdrawAddress ?? "";
    return message;
  },
  fromSDK(object: DevFeeInfoSDKType): DevFeeInfo {
    return {
      contractAddress: object?.contract_address,
      deployerAddress: object?.deployer_address,
      withdrawAddress: object?.withdraw_address
    };
  },
  toSDK(message: DevFeeInfo): DevFeeInfoSDKType {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.deployer_address = message.deployerAddress;
    obj.withdraw_address = message.withdrawAddress;
    return obj;
  },
  fromAmino(object: DevFeeInfoAmino): DevFeeInfo {
    return {
      contractAddress: object.contract_address,
      deployerAddress: object.deployer_address,
      withdrawAddress: object.withdraw_address
    };
  },
  toAmino(message: DevFeeInfo): DevFeeInfoAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.deployer_address = message.deployerAddress;
    obj.withdraw_address = message.withdrawAddress;
    return obj;
  },
  fromAminoMsg(object: DevFeeInfoAminoMsg): DevFeeInfo {
    return DevFeeInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: DevFeeInfoProtoMsg): DevFeeInfo {
    return DevFeeInfo.decode(message.value);
  },
  toProto(message: DevFeeInfo): Uint8Array {
    return DevFeeInfo.encode(message).finish();
  },
  toProtoMsg(message: DevFeeInfo): DevFeeInfoProtoMsg {
    return {
      typeUrl: "/evmos.fees.v1.DevFeeInfo",
      value: DevFeeInfo.encode(message).finish()
    };
  }
};