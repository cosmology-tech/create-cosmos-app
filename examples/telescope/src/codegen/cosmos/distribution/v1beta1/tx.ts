import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */
export interface MsgSetWithdrawAddress {
  delegatorAddress: string;
  withdrawAddress: string;
}
/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */
export interface MsgSetWithdrawAddressSDKType {
  delegator_address: string;
  withdraw_address: string;
}
/** MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response type. */
export interface MsgSetWithdrawAddressResponse {}
/** MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response type. */
export interface MsgSetWithdrawAddressResponseSDKType {}
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
export interface MsgWithdrawDelegatorReward {
  delegatorAddress: string;
  validatorAddress: string;
}
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
export interface MsgWithdrawDelegatorRewardSDKType {
  delegator_address: string;
  validator_address: string;
}
/** MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type. */
export interface MsgWithdrawDelegatorRewardResponse {
  amount: Coin[];
}
/** MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type. */
export interface MsgWithdrawDelegatorRewardResponseSDKType {
  amount: CoinSDKType[];
}
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */
export interface MsgWithdrawValidatorCommission {
  validatorAddress: string;
}
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */
export interface MsgWithdrawValidatorCommissionSDKType {
  validator_address: string;
}
/** MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type. */
export interface MsgWithdrawValidatorCommissionResponse {
  amount: Coin[];
}
/** MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type. */
export interface MsgWithdrawValidatorCommissionResponseSDKType {
  amount: CoinSDKType[];
}
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */
export interface MsgFundCommunityPool {
  amount: Coin[];
  depositor: string;
}
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */
export interface MsgFundCommunityPoolSDKType {
  amount: CoinSDKType[];
  depositor: string;
}
/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export interface MsgFundCommunityPoolResponse {}
/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export interface MsgFundCommunityPoolResponseSDKType {}
function createBaseMsgSetWithdrawAddress(): MsgSetWithdrawAddress {
  return {
    delegatorAddress: "",
    withdrawAddress: ""
  };
}
export const MsgSetWithdrawAddress = {
  encode(message: MsgSetWithdrawAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.withdrawAddress !== "") {
      writer.uint32(18).string(message.withdrawAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetWithdrawAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetWithdrawAddress();
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
  fromJSON(object: any): MsgSetWithdrawAddress {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      withdrawAddress: isSet(object.withdrawAddress) ? String(object.withdrawAddress) : ""
    };
  },
  toJSON(message: MsgSetWithdrawAddress): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgSetWithdrawAddress>): MsgSetWithdrawAddress {
    const message = createBaseMsgSetWithdrawAddress();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.withdrawAddress = object.withdrawAddress ?? "";
    return message;
  }
};
function createBaseMsgSetWithdrawAddressResponse(): MsgSetWithdrawAddressResponse {
  return {};
}
export const MsgSetWithdrawAddressResponse = {
  encode(_: MsgSetWithdrawAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetWithdrawAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetWithdrawAddressResponse();
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
  fromJSON(_: any): MsgSetWithdrawAddressResponse {
    return {};
  },
  toJSON(_: MsgSetWithdrawAddressResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetWithdrawAddressResponse>): MsgSetWithdrawAddressResponse {
    const message = createBaseMsgSetWithdrawAddressResponse();
    return message;
  }
};
function createBaseMsgWithdrawDelegatorReward(): MsgWithdrawDelegatorReward {
  return {
    delegatorAddress: "",
    validatorAddress: ""
  };
}
export const MsgWithdrawDelegatorReward = {
  encode(message: MsgWithdrawDelegatorReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawDelegatorReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawDelegatorReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawDelegatorReward {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : ""
    };
  },
  toJSON(message: MsgWithdrawDelegatorReward): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgWithdrawDelegatorReward>): MsgWithdrawDelegatorReward {
    const message = createBaseMsgWithdrawDelegatorReward();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  }
};
function createBaseMsgWithdrawDelegatorRewardResponse(): MsgWithdrawDelegatorRewardResponse {
  return {
    amount: []
  };
}
export const MsgWithdrawDelegatorRewardResponse = {
  encode(message: MsgWithdrawDelegatorRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawDelegatorRewardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawDelegatorRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawDelegatorRewardResponse {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgWithdrawDelegatorRewardResponse): unknown {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgWithdrawDelegatorRewardResponse>): MsgWithdrawDelegatorRewardResponse {
    const message = createBaseMsgWithdrawDelegatorRewardResponse();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgWithdrawValidatorCommission(): MsgWithdrawValidatorCommission {
  return {
    validatorAddress: ""
  };
}
export const MsgWithdrawValidatorCommission = {
  encode(message: MsgWithdrawValidatorCommission, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawValidatorCommission {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawValidatorCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawValidatorCommission {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : ""
    };
  },
  toJSON(message: MsgWithdrawValidatorCommission): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgWithdrawValidatorCommission>): MsgWithdrawValidatorCommission {
    const message = createBaseMsgWithdrawValidatorCommission();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  }
};
function createBaseMsgWithdrawValidatorCommissionResponse(): MsgWithdrawValidatorCommissionResponse {
  return {
    amount: []
  };
}
export const MsgWithdrawValidatorCommissionResponse = {
  encode(message: MsgWithdrawValidatorCommissionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawValidatorCommissionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawValidatorCommissionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawValidatorCommissionResponse {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgWithdrawValidatorCommissionResponse): unknown {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgWithdrawValidatorCommissionResponse>): MsgWithdrawValidatorCommissionResponse {
    const message = createBaseMsgWithdrawValidatorCommissionResponse();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgFundCommunityPool(): MsgFundCommunityPool {
  return {
    amount: [],
    depositor: ""
  };
}
export const MsgFundCommunityPool = {
  encode(message: MsgFundCommunityPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFundCommunityPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundCommunityPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.depositor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgFundCommunityPool {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      depositor: isSet(object.depositor) ? String(object.depositor) : ""
    };
  },
  toJSON(message: MsgFundCommunityPool): unknown {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    message.depositor !== undefined && (obj.depositor = message.depositor);
    return obj;
  },
  fromPartial(object: Partial<MsgFundCommunityPool>): MsgFundCommunityPool {
    const message = createBaseMsgFundCommunityPool();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.depositor = object.depositor ?? "";
    return message;
  }
};
function createBaseMsgFundCommunityPoolResponse(): MsgFundCommunityPoolResponse {
  return {};
}
export const MsgFundCommunityPoolResponse = {
  encode(_: MsgFundCommunityPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFundCommunityPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundCommunityPoolResponse();
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
  fromJSON(_: any): MsgFundCommunityPoolResponse {
    return {};
  },
  toJSON(_: MsgFundCommunityPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgFundCommunityPoolResponse>): MsgFundCommunityPoolResponse {
    const message = createBaseMsgFundCommunityPoolResponse();
    return message;
  }
};