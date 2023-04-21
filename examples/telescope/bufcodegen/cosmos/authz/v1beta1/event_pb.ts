// Since: cosmos-sdk 0.43

// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file cosmos/authz/v1beta1/event.proto (package cosmos.authz.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * EventGrant is emitted on Msg/Grant
 *
 * @generated from message cosmos.authz.v1beta1.EventGrant
 */
export class EventGrant extends Message<EventGrant> {
  /**
   * Msg type URL for which an autorization is granted
   *
   * @generated from field: string msg_type_url = 2;
   */
  msgTypeUrl = "";

  /**
   * Granter account address
   *
   * @generated from field: string granter = 3;
   */
  granter = "";

  /**
   * Grantee account address
   *
   * @generated from field: string grantee = 4;
   */
  grantee = "";

  constructor(data?: PartialMessage<EventGrant>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.authz.v1beta1.EventGrant";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "msg_type_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "granter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "grantee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventGrant {
    return new EventGrant().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventGrant {
    return new EventGrant().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventGrant {
    return new EventGrant().fromJsonString(jsonString, options);
  }

  static equals(a: EventGrant | PlainMessage<EventGrant> | undefined, b: EventGrant | PlainMessage<EventGrant> | undefined): boolean {
    return proto3.util.equals(EventGrant, a, b);
  }
}

/**
 * EventRevoke is emitted on Msg/Revoke
 *
 * @generated from message cosmos.authz.v1beta1.EventRevoke
 */
export class EventRevoke extends Message<EventRevoke> {
  /**
   * Msg type URL for which an autorization is revoked
   *
   * @generated from field: string msg_type_url = 2;
   */
  msgTypeUrl = "";

  /**
   * Granter account address
   *
   * @generated from field: string granter = 3;
   */
  granter = "";

  /**
   * Grantee account address
   *
   * @generated from field: string grantee = 4;
   */
  grantee = "";

  constructor(data?: PartialMessage<EventRevoke>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.authz.v1beta1.EventRevoke";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "msg_type_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "granter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "grantee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventRevoke {
    return new EventRevoke().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventRevoke {
    return new EventRevoke().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventRevoke {
    return new EventRevoke().fromJsonString(jsonString, options);
  }

  static equals(a: EventRevoke | PlainMessage<EventRevoke> | undefined, b: EventRevoke | PlainMessage<EventRevoke> | undefined): boolean {
    return proto3.util.equals(EventRevoke, a, b);
  }
}

