//@ts-nocheck
import { FeeToken, FeeTokenAmino, FeeTokenSDKType } from "./feetoken";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "osmosis.txfees.v1beta1";
/**
 * UpdateFeeTokenProposal is a gov Content type for adding a new whitelisted fee
 * token. It must specify a denom along with gamm pool ID to use as a spot price
 * calculator. It can be used to add a new denom to the whitelist It can also be
 * used to update the Pool to associate with the denom. If Pool ID is set to 0,
 * it will remove the denom from the whitelisted set.
 */
export interface UpdateFeeTokenProposal {
  $typeUrl?: "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal";
  title: string;
  description: string;
  feetoken: FeeToken;
}
export interface UpdateFeeTokenProposalProtoMsg {
  typeUrl: "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal";
  value: Uint8Array;
}
/**
 * UpdateFeeTokenProposal is a gov Content type for adding a new whitelisted fee
 * token. It must specify a denom along with gamm pool ID to use as a spot price
 * calculator. It can be used to add a new denom to the whitelist It can also be
 * used to update the Pool to associate with the denom. If Pool ID is set to 0,
 * it will remove the denom from the whitelisted set.
 */
export interface UpdateFeeTokenProposalAmino {
  title?: string;
  description?: string;
  feetoken?: FeeTokenAmino;
}
export interface UpdateFeeTokenProposalAminoMsg {
  type: "osmosis/txfees/update-fee-token-proposal";
  value: UpdateFeeTokenProposalAmino;
}
/**
 * UpdateFeeTokenProposal is a gov Content type for adding a new whitelisted fee
 * token. It must specify a denom along with gamm pool ID to use as a spot price
 * calculator. It can be used to add a new denom to the whitelist It can also be
 * used to update the Pool to associate with the denom. If Pool ID is set to 0,
 * it will remove the denom from the whitelisted set.
 */
export interface UpdateFeeTokenProposalSDKType {
  $typeUrl?: "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal";
  title: string;
  description: string;
  feetoken: FeeTokenSDKType;
}
function createBaseUpdateFeeTokenProposal(): UpdateFeeTokenProposal {
  return {
    $typeUrl: "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal",
    title: "",
    description: "",
    feetoken: FeeToken.fromPartial({})
  };
}
export const UpdateFeeTokenProposal = {
  typeUrl: "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal",
  aminoType: "osmosis/txfees/update-fee-token-proposal",
  is(o: any): o is UpdateFeeTokenProposal {
    return o && (o.$typeUrl === UpdateFeeTokenProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && FeeToken.is(o.feetoken));
  },
  isSDK(o: any): o is UpdateFeeTokenProposalSDKType {
    return o && (o.$typeUrl === UpdateFeeTokenProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && FeeToken.isSDK(o.feetoken));
  },
  isAmino(o: any): o is UpdateFeeTokenProposalAmino {
    return o && (o.$typeUrl === UpdateFeeTokenProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && FeeToken.isAmino(o.feetoken));
  },
  encode(message: UpdateFeeTokenProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== undefined) {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }
    if (message.feetoken !== undefined) {
      FeeToken.encode(message.feetoken, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateFeeTokenProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateFeeTokenProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.feetoken = FeeToken.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpdateFeeTokenProposal {
    const obj = createBaseUpdateFeeTokenProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.feetoken)) obj.feetoken = FeeToken.fromJSON(object.feetoken);
    return obj;
  },
  toJSON(message: UpdateFeeTokenProposal): JsonSafe<UpdateFeeTokenProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.feetoken !== undefined && (obj.feetoken = message.feetoken ? FeeToken.toJSON(message.feetoken) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<UpdateFeeTokenProposal>): UpdateFeeTokenProposal {
    const message = createBaseUpdateFeeTokenProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    if (object.feetoken !== undefined && object.feetoken !== null) {
      message.feetoken = FeeToken.fromPartial(object.feetoken);
    }
    return message;
  },
  fromSDK(object: UpdateFeeTokenProposalSDKType): UpdateFeeTokenProposal {
    return {
      title: object?.title,
      description: object?.description,
      feetoken: object.feetoken ? FeeToken.fromSDK(object.feetoken) : undefined
    };
  },
  toSDK(message: UpdateFeeTokenProposal): UpdateFeeTokenProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    message.feetoken !== undefined && (obj.feetoken = message.feetoken ? FeeToken.toSDK(message.feetoken) : undefined);
    return obj;
  },
  fromAmino(object: UpdateFeeTokenProposalAmino): UpdateFeeTokenProposal {
    const message = createBaseUpdateFeeTokenProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.feetoken !== undefined && object.feetoken !== null) {
      message.feetoken = FeeToken.fromAmino(object.feetoken);
    }
    return message;
  },
  toAmino(message: UpdateFeeTokenProposal): UpdateFeeTokenProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.feetoken = message.feetoken ? FeeToken.toAmino(message.feetoken) : undefined;
    return obj;
  },
  fromAminoMsg(object: UpdateFeeTokenProposalAminoMsg): UpdateFeeTokenProposal {
    return UpdateFeeTokenProposal.fromAmino(object.value);
  },
  toAminoMsg(message: UpdateFeeTokenProposal): UpdateFeeTokenProposalAminoMsg {
    return {
      type: "osmosis/txfees/update-fee-token-proposal",
      value: UpdateFeeTokenProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: UpdateFeeTokenProposalProtoMsg): UpdateFeeTokenProposal {
    return UpdateFeeTokenProposal.decode(message.value);
  },
  toProto(message: UpdateFeeTokenProposal): Uint8Array {
    return UpdateFeeTokenProposal.encode(message).finish();
  },
  toProtoMsg(message: UpdateFeeTokenProposal): UpdateFeeTokenProposalProtoMsg {
    return {
      typeUrl: "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal",
      value: UpdateFeeTokenProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UpdateFeeTokenProposal.typeUrl, UpdateFeeTokenProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(UpdateFeeTokenProposal.aminoType, UpdateFeeTokenProposal.typeUrl);