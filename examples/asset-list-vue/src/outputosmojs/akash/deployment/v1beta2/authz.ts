import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "akash.deployment.v1beta2";
/**
 * DepositDeploymentAuthorization allows the grantee to deposit up to spend_limit coins from
 * the granter's account for a deployment.
 */
export interface DepositDeploymentAuthorization {
  /**
   * SpendLimit is the amount the grantee is authorized to spend from the granter's account for
   * the purpose of deployment.
   */
  spendLimit: Coin;
}
export interface DepositDeploymentAuthorizationProtoMsg {
  typeUrl: "/akash.deployment.v1beta2.DepositDeploymentAuthorization";
  value: Uint8Array;
}
/**
 * DepositDeploymentAuthorization allows the grantee to deposit up to spend_limit coins from
 * the granter's account for a deployment.
 */
export interface DepositDeploymentAuthorizationSDKType {
  spend_limit: CoinSDKType;
}
function createBaseDepositDeploymentAuthorization(): DepositDeploymentAuthorization {
  return {
    spendLimit: Coin.fromPartial({})
  };
}
export const DepositDeploymentAuthorization = {
  typeUrl: "/akash.deployment.v1beta2.DepositDeploymentAuthorization",
  encode(message: DepositDeploymentAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.spendLimit !== undefined) {
      Coin.encode(message.spendLimit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DepositDeploymentAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositDeploymentAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spendLimit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DepositDeploymentAuthorization {
    return {
      spendLimit: isSet(object.spendLimit) ? Coin.fromJSON(object.spendLimit) : undefined
    };
  },
  toJSON(message: DepositDeploymentAuthorization): JsonSafe<DepositDeploymentAuthorization> {
    const obj: any = {};
    message.spendLimit !== undefined && (obj.spendLimit = message.spendLimit ? Coin.toJSON(message.spendLimit) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DepositDeploymentAuthorization>, I>>(object: I): DepositDeploymentAuthorization {
    const message = createBaseDepositDeploymentAuthorization();
    message.spendLimit = object.spendLimit !== undefined && object.spendLimit !== null ? Coin.fromPartial(object.spendLimit) : undefined;
    return message;
  },
  fromSDK(object: DepositDeploymentAuthorizationSDKType): DepositDeploymentAuthorization {
    return {
      spendLimit: object.spend_limit ? Coin.fromSDK(object.spend_limit) : undefined
    };
  },
  fromSDKJSON(object: any): DepositDeploymentAuthorizationSDKType {
    return {
      spend_limit: isSet(object.spend_limit) ? Coin.fromSDKJSON(object.spend_limit) : undefined
    };
  },
  toSDK(message: DepositDeploymentAuthorization): DepositDeploymentAuthorizationSDKType {
    const obj: any = {};
    message.spendLimit !== undefined && (obj.spend_limit = message.spendLimit ? Coin.toSDK(message.spendLimit) : undefined);
    return obj;
  },
  fromAmino(object: DepositDeploymentAuthorizationAmino): DepositDeploymentAuthorization {
    const message = createBaseDepositDeploymentAuthorization();
    if (object.spend_limit !== undefined && object.spend_limit !== null) {
      message.spendLimit = Coin.fromAmino(object.spend_limit);
    }
    return message;
  },
  toAmino(message: DepositDeploymentAuthorization): DepositDeploymentAuthorizationAmino {
    const obj: any = {};
    obj.spend_limit = message.spendLimit ? Coin.toAmino(message.spendLimit) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: DepositDeploymentAuthorizationAminoMsg): DepositDeploymentAuthorization {
    return DepositDeploymentAuthorization.fromAmino(object.value);
  },
  toAminoMsg(message: DepositDeploymentAuthorization): DepositDeploymentAuthorizationAminoMsg {
    return {
      type: "akash/deployment/v1beta2/deposit-deployment-authorization",
      value: DepositDeploymentAuthorization.toAmino(message)
    };
  },
  fromProtoMsg(message: DepositDeploymentAuthorizationProtoMsg): DepositDeploymentAuthorization {
    return DepositDeploymentAuthorization.decode(message.value);
  },
  toProto(message: DepositDeploymentAuthorization): Uint8Array {
    return DepositDeploymentAuthorization.encode(message).finish();
  },
  toProtoMsg(message: DepositDeploymentAuthorization): DepositDeploymentAuthorizationProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta2.DepositDeploymentAuthorization",
      value: DepositDeploymentAuthorization.encode(message).finish()
    };
  }
};