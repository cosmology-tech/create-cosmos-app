import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
export const protobufPackage = "cosmos.evidence.v1beta1";
/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 */
export interface MsgSubmitEvidence {
  submitter: string;
  evidence?: (Any) | undefined;
}
export interface MsgSubmitEvidenceProtoMsg {
  typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence";
  value: Uint8Array;
}
export type MsgSubmitEvidenceEncoded = Omit<MsgSubmitEvidence, "evidence"> & {
  evidence?: AnyProtoMsg | undefined;
};
/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 */
export interface MsgSubmitEvidenceAmino {
  submitter: string;
  evidence?: AnyAmino;
}
export interface MsgSubmitEvidenceAminoMsg {
  type: "cosmos-sdk/MsgSubmitEvidence";
  value: MsgSubmitEvidenceAmino;
}
/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 */
export interface MsgSubmitEvidenceSDKType {
  submitter: string;
  evidence?: AnySDKType | undefined;
}
/** MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type. */
export interface MsgSubmitEvidenceResponse {
  /** hash defines the hash of the evidence. */
  hash: Uint8Array;
}
export interface MsgSubmitEvidenceResponseProtoMsg {
  typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse";
  value: Uint8Array;
}
/** MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type. */
export interface MsgSubmitEvidenceResponseAmino {
  /** hash defines the hash of the evidence. */
  hash: Uint8Array;
}
export interface MsgSubmitEvidenceResponseAminoMsg {
  type: "cosmos-sdk/MsgSubmitEvidenceResponse";
  value: MsgSubmitEvidenceResponseAmino;
}
/** MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type. */
export interface MsgSubmitEvidenceResponseSDKType {
  hash: Uint8Array;
}
function createBaseMsgSubmitEvidence(): MsgSubmitEvidence {
  return {
    submitter: "",
    evidence: undefined
  };
}
export const MsgSubmitEvidence = {
  typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
  aminoType: "cosmos-sdk/MsgSubmitEvidence",
  encode(message: MsgSubmitEvidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.submitter !== "") {
      writer.uint32(10).string(message.submitter);
    }
    if (message.evidence !== undefined) {
      Any.encode((message.evidence as Any), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitEvidence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submitter = reader.string();
          break;
        case 2:
          message.evidence = (Evidence_InterfaceDecoder(reader) as Any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitEvidence {
    return {
      submitter: isSet(object.submitter) ? String(object.submitter) : "",
      evidence: isSet(object.evidence) ? Any.fromJSON(object.evidence) : undefined
    };
  },
  toJSON(message: MsgSubmitEvidence): unknown {
    const obj: any = {};
    message.submitter !== undefined && (obj.submitter = message.submitter);
    message.evidence !== undefined && (obj.evidence = message.evidence ? Any.toJSON(message.evidence) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSubmitEvidence>): MsgSubmitEvidence {
    const message = createBaseMsgSubmitEvidence();
    message.submitter = object.submitter ?? "";
    message.evidence = object.evidence !== undefined && object.evidence !== null ? Any.fromPartial(object.evidence) : undefined;
    return message;
  },
  fromSDK(object: MsgSubmitEvidenceSDKType): MsgSubmitEvidence {
    return {
      submitter: object?.submitter,
      evidence: object.evidence ? Any.fromSDK(object.evidence) : undefined
    };
  },
  toSDK(message: MsgSubmitEvidence): MsgSubmitEvidenceSDKType {
    const obj: any = {};
    obj.submitter = message.submitter;
    message.evidence !== undefined && (obj.evidence = message.evidence ? Any.toSDK(message.evidence) : undefined);
    return obj;
  },
  fromAmino(object: MsgSubmitEvidenceAmino): MsgSubmitEvidence {
    return {
      submitter: object.submitter,
      evidence: object?.evidence ? Evidence_FromAmino(object.evidence) : undefined
    };
  },
  toAmino(message: MsgSubmitEvidence): MsgSubmitEvidenceAmino {
    const obj: any = {};
    obj.submitter = message.submitter;
    obj.evidence = message.evidence ? Evidence_ToAmino((message.evidence as Any)) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitEvidenceAminoMsg): MsgSubmitEvidence {
    return MsgSubmitEvidence.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitEvidence): MsgSubmitEvidenceAminoMsg {
    return {
      type: "cosmos-sdk/MsgSubmitEvidence",
      value: MsgSubmitEvidence.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitEvidenceProtoMsg): MsgSubmitEvidence {
    return MsgSubmitEvidence.decode(message.value);
  },
  toProto(message: MsgSubmitEvidence): Uint8Array {
    return MsgSubmitEvidence.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitEvidence): MsgSubmitEvidenceProtoMsg {
    return {
      typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
      value: MsgSubmitEvidence.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitEvidenceResponse(): MsgSubmitEvidenceResponse {
  return {
    hash: new Uint8Array()
  };
}
export const MsgSubmitEvidenceResponse = {
  typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse",
  aminoType: "cosmos-sdk/MsgSubmitEvidenceResponse",
  encode(message: MsgSubmitEvidenceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitEvidenceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitEvidenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitEvidenceResponse {
    return {
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array()
    };
  },
  toJSON(message: MsgSubmitEvidenceResponse): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSubmitEvidenceResponse>): MsgSubmitEvidenceResponse {
    const message = createBaseMsgSubmitEvidenceResponse();
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MsgSubmitEvidenceResponseSDKType): MsgSubmitEvidenceResponse {
    return {
      hash: object?.hash
    };
  },
  toSDK(message: MsgSubmitEvidenceResponse): MsgSubmitEvidenceResponseSDKType {
    const obj: any = {};
    obj.hash = message.hash;
    return obj;
  },
  fromAmino(object: MsgSubmitEvidenceResponseAmino): MsgSubmitEvidenceResponse {
    return {
      hash: object.hash
    };
  },
  toAmino(message: MsgSubmitEvidenceResponse): MsgSubmitEvidenceResponseAmino {
    const obj: any = {};
    obj.hash = message.hash;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitEvidenceResponseAminoMsg): MsgSubmitEvidenceResponse {
    return MsgSubmitEvidenceResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitEvidenceResponse): MsgSubmitEvidenceResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgSubmitEvidenceResponse",
      value: MsgSubmitEvidenceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitEvidenceResponseProtoMsg): MsgSubmitEvidenceResponse {
    return MsgSubmitEvidenceResponse.decode(message.value);
  },
  toProto(message: MsgSubmitEvidenceResponse): Uint8Array {
    return MsgSubmitEvidenceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitEvidenceResponse): MsgSubmitEvidenceResponseProtoMsg {
    return {
      typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse",
      value: MsgSubmitEvidenceResponse.encode(message).finish()
    };
  }
};
export const Evidence_InterfaceDecoder = (input: _m0.Reader | Uint8Array): Any => {
  const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
export const Evidence_FromAmino = (content: AnyAmino) => {
  return Any.fromAmino(content);
};
export const Evidence_ToAmino = (content: Any) => {
  return Any.toAmino(content);
};