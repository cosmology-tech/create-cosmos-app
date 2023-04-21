// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file cosmos/bank/v1beta1/tx.proto (package cosmos.bank.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../base/v1beta1/coin_pb.js";
import { Input, Output } from "./bank_pb.js";

/**
 * MsgSend represents a message to send coins from one account to another.
 *
 * @generated from message cosmos.bank.v1beta1.MsgSend
 */
export class MsgSend extends Message<MsgSend> {
  /**
   * @generated from field: string from_address = 1;
   */
  fromAddress = "";

  /**
   * @generated from field: string to_address = 2;
   */
  toAddress = "";

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 3;
   */
  amount: Coin[] = [];

  constructor(data?: PartialMessage<MsgSend>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.bank.v1beta1.MsgSend";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "from_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "to_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSend {
    return new MsgSend().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSend {
    return new MsgSend().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSend {
    return new MsgSend().fromJsonString(jsonString, options);
  }

  static equals(a: MsgSend | PlainMessage<MsgSend> | undefined, b: MsgSend | PlainMessage<MsgSend> | undefined): boolean {
    return proto3.util.equals(MsgSend, a, b);
  }
}

/**
 * MsgSendResponse defines the Msg/Send response type.
 *
 * @generated from message cosmos.bank.v1beta1.MsgSendResponse
 */
export class MsgSendResponse extends Message<MsgSendResponse> {
  constructor(data?: PartialMessage<MsgSendResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.bank.v1beta1.MsgSendResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSendResponse {
    return new MsgSendResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSendResponse {
    return new MsgSendResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSendResponse {
    return new MsgSendResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgSendResponse | PlainMessage<MsgSendResponse> | undefined, b: MsgSendResponse | PlainMessage<MsgSendResponse> | undefined): boolean {
    return proto3.util.equals(MsgSendResponse, a, b);
  }
}

/**
 * MsgMultiSend represents an arbitrary multi-in, multi-out send message.
 *
 * @generated from message cosmos.bank.v1beta1.MsgMultiSend
 */
export class MsgMultiSend extends Message<MsgMultiSend> {
  /**
   * @generated from field: repeated cosmos.bank.v1beta1.Input inputs = 1;
   */
  inputs: Input[] = [];

  /**
   * @generated from field: repeated cosmos.bank.v1beta1.Output outputs = 2;
   */
  outputs: Output[] = [];

  constructor(data?: PartialMessage<MsgMultiSend>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.bank.v1beta1.MsgMultiSend";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "inputs", kind: "message", T: Input, repeated: true },
    { no: 2, name: "outputs", kind: "message", T: Output, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgMultiSend {
    return new MsgMultiSend().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgMultiSend {
    return new MsgMultiSend().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgMultiSend {
    return new MsgMultiSend().fromJsonString(jsonString, options);
  }

  static equals(a: MsgMultiSend | PlainMessage<MsgMultiSend> | undefined, b: MsgMultiSend | PlainMessage<MsgMultiSend> | undefined): boolean {
    return proto3.util.equals(MsgMultiSend, a, b);
  }
}

/**
 * MsgMultiSendResponse defines the Msg/MultiSend response type.
 *
 * @generated from message cosmos.bank.v1beta1.MsgMultiSendResponse
 */
export class MsgMultiSendResponse extends Message<MsgMultiSendResponse> {
  constructor(data?: PartialMessage<MsgMultiSendResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.bank.v1beta1.MsgMultiSendResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgMultiSendResponse {
    return new MsgMultiSendResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgMultiSendResponse {
    return new MsgMultiSendResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgMultiSendResponse {
    return new MsgMultiSendResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgMultiSendResponse | PlainMessage<MsgMultiSendResponse> | undefined, b: MsgMultiSendResponse | PlainMessage<MsgMultiSendResponse> | undefined): boolean {
    return proto3.util.equals(MsgMultiSendResponse, a, b);
  }
}

