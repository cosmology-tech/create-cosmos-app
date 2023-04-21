// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file cosmos/bank/v1beta1/bank.proto (package cosmos.bank.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../base/v1beta1/coin_pb.js";

/**
 * Params defines the parameters for the bank module.
 *
 * @generated from message cosmos.bank.v1beta1.Params
 */
export class Params extends Message<Params> {
  /**
   * @generated from field: repeated cosmos.bank.v1beta1.SendEnabled send_enabled = 1;
   */
  sendEnabled: SendEnabled[] = [];

  /**
   * @generated from field: bool default_send_enabled = 2;
   */
  defaultSendEnabled = false;

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.bank.v1beta1.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "send_enabled", kind: "message", T: SendEnabled, repeated: true },
    { no: 2, name: "default_send_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params {
    return new Params().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJsonString(jsonString, options);
  }

  static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean {
    return proto3.util.equals(Params, a, b);
  }
}

/**
 * SendEnabled maps coin denom to a send_enabled status (whether a denom is
 * sendable).
 *
 * @generated from message cosmos.bank.v1beta1.SendEnabled
 */
export class SendEnabled extends Message<SendEnabled> {
  /**
   * @generated from field: string denom = 1;
   */
  denom = "";

  /**
   * @generated from field: bool enabled = 2;
   */
  enabled = false;

  constructor(data?: PartialMessage<SendEnabled>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.bank.v1beta1.SendEnabled";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendEnabled {
    return new SendEnabled().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendEnabled {
    return new SendEnabled().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendEnabled {
    return new SendEnabled().fromJsonString(jsonString, options);
  }

  static equals(a: SendEnabled | PlainMessage<SendEnabled> | undefined, b: SendEnabled | PlainMessage<SendEnabled> | undefined): boolean {
    return proto3.util.equals(SendEnabled, a, b);
  }
}

/**
 * Input models transaction input.
 *
 * @generated from message cosmos.bank.v1beta1.Input
 */
export class Input extends Message<Input> {
  /**
   * @generated from field: string address = 1;
   */
  address = "";

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 2;
   */
  coins: Coin[] = [];

  constructor(data?: PartialMessage<Input>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.bank.v1beta1.Input";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "coins", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Input {
    return new Input().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Input {
    return new Input().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Input {
    return new Input().fromJsonString(jsonString, options);
  }

  static equals(a: Input | PlainMessage<Input> | undefined, b: Input | PlainMessage<Input> | undefined): boolean {
    return proto3.util.equals(Input, a, b);
  }
}

/**
 * Output models transaction outputs.
 *
 * @generated from message cosmos.bank.v1beta1.Output
 */
export class Output extends Message<Output> {
  /**
   * @generated from field: string address = 1;
   */
  address = "";

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 2;
   */
  coins: Coin[] = [];

  constructor(data?: PartialMessage<Output>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.bank.v1beta1.Output";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "coins", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Output {
    return new Output().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Output {
    return new Output().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Output {
    return new Output().fromJsonString(jsonString, options);
  }

  static equals(a: Output | PlainMessage<Output> | undefined, b: Output | PlainMessage<Output> | undefined): boolean {
    return proto3.util.equals(Output, a, b);
  }
}

/**
 * Supply represents a struct that passively keeps track of the total supply
 * amounts in the network.
 * This message is deprecated now that supply is indexed by denom.
 *
 * @generated from message cosmos.bank.v1beta1.Supply
 * @deprecated
 */
export class Supply extends Message<Supply> {
  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin total = 1;
   */
  total: Coin[] = [];

  constructor(data?: PartialMessage<Supply>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.bank.v1beta1.Supply";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "total", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Supply {
    return new Supply().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Supply {
    return new Supply().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Supply {
    return new Supply().fromJsonString(jsonString, options);
  }

  static equals(a: Supply | PlainMessage<Supply> | undefined, b: Supply | PlainMessage<Supply> | undefined): boolean {
    return proto3.util.equals(Supply, a, b);
  }
}

/**
 * DenomUnit represents a struct that describes a given
 * denomination unit of the basic token.
 *
 * @generated from message cosmos.bank.v1beta1.DenomUnit
 */
export class DenomUnit extends Message<DenomUnit> {
  /**
   * denom represents the string name of the given denom unit (e.g uatom).
   *
   * @generated from field: string denom = 1;
   */
  denom = "";

  /**
   * exponent represents power of 10 exponent that one must
   * raise the base_denom to in order to equal the given DenomUnit's denom
   * 1 denom = 10^exponent base_denom
   * (e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with
   * exponent = 6, thus: 1 atom = 10^6 uatom).
   *
   * @generated from field: uint32 exponent = 2;
   */
  exponent = 0;

  /**
   * aliases is a list of string aliases for the given denom
   *
   * @generated from field: repeated string aliases = 3;
   */
  aliases: string[] = [];

  constructor(data?: PartialMessage<DenomUnit>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.bank.v1beta1.DenomUnit";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "exponent", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "aliases", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DenomUnit {
    return new DenomUnit().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DenomUnit {
    return new DenomUnit().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DenomUnit {
    return new DenomUnit().fromJsonString(jsonString, options);
  }

  static equals(a: DenomUnit | PlainMessage<DenomUnit> | undefined, b: DenomUnit | PlainMessage<DenomUnit> | undefined): boolean {
    return proto3.util.equals(DenomUnit, a, b);
  }
}

/**
 * Metadata represents a struct that describes
 * a basic token.
 *
 * @generated from message cosmos.bank.v1beta1.Metadata
 */
export class Metadata extends Message<Metadata> {
  /**
   * @generated from field: string description = 1;
   */
  description = "";

  /**
   * denom_units represents the list of DenomUnit's for a given coin
   *
   * @generated from field: repeated cosmos.bank.v1beta1.DenomUnit denom_units = 2;
   */
  denomUnits: DenomUnit[] = [];

  /**
   * base represents the base denom (should be the DenomUnit with exponent = 0).
   *
   * @generated from field: string base = 3;
   */
  base = "";

  /**
   * display indicates the suggested denom that should be
   * displayed in clients.
   *
   * @generated from field: string display = 4;
   */
  display = "";

  /**
   * name defines the name of the token (eg: Cosmos Atom)
   *
   * Since: cosmos-sdk 0.43
   *
   * @generated from field: string name = 5;
   */
  name = "";

  /**
   * symbol is the token symbol usually shown on exchanges (eg: ATOM). This can
   * be the same as the display.
   *
   * Since: cosmos-sdk 0.43
   *
   * @generated from field: string symbol = 6;
   */
  symbol = "";

  /**
   * URI to a document (on or off-chain) that contains additional information. Optional.
   *
   * Since: cosmos-sdk 0.46
   *
   * @generated from field: string uri = 7;
   */
  uri = "";

  /**
   * URIHash is a sha256 hash of a document pointed by URI. It's used to verify that
   * the document didn't change. Optional.
   *
   * Since: cosmos-sdk 0.46
   *
   * @generated from field: string uri_hash = 8;
   */
  uriHash = "";

  constructor(data?: PartialMessage<Metadata>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.bank.v1beta1.Metadata";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "denom_units", kind: "message", T: DenomUnit, repeated: true },
    { no: 3, name: "base", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "display", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "symbol", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "uri_hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Metadata {
    return new Metadata().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Metadata {
    return new Metadata().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Metadata {
    return new Metadata().fromJsonString(jsonString, options);
  }

  static equals(a: Metadata | PlainMessage<Metadata> | undefined, b: Metadata | PlainMessage<Metadata> | undefined): boolean {
    return proto3.util.equals(Metadata, a, b);
  }
}

