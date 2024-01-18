import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request
 * or the response type of an API method. For instance:
 *
 *     service Foo {
 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
 *     }
 *
 * The JSON representation for `Empty` is empty JSON object `{}`.
 */
export interface Empty {
}
export interface EmptyProtoMsg {
    typeUrl: "/google.protobuf.Empty";
    value: Uint8Array;
}
/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request
 * or the response type of an API method. For instance:
 *
 *     service Foo {
 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
 *     }
 *
 * The JSON representation for `Empty` is empty JSON object `{}`.
 */
export interface EmptyAmino {
}
export interface EmptyAminoMsg {
    type: "/google.protobuf.Empty";
    value: EmptyAmino;
}
/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request
 * or the response type of an API method. For instance:
 *
 *     service Foo {
 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
 *     }
 *
 * The JSON representation for `Empty` is empty JSON object `{}`.
 */
export interface EmptySDKType {
}
export declare const Empty: {
    typeUrl: string;
    is(o: any): o is Empty;
    isSDK(o: any): o is EmptySDKType;
    isAmino(o: any): o is EmptyAmino;
    encode(_: Empty, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Empty;
    fromJSON(_: any): Empty;
    toJSON(_: Empty): unknown;
    fromPartial(_: DeepPartial<Empty>): Empty;
    fromSDK(_: EmptySDKType): Empty;
    toSDK(_: Empty): EmptySDKType;
    fromAmino(_: EmptyAmino): Empty;
    toAmino(_: Empty): EmptyAmino;
    fromAminoMsg(object: EmptyAminoMsg): Empty;
    fromProtoMsg(message: EmptyProtoMsg): Empty;
    toProto(message: Empty): Uint8Array;
    toProtoMsg(message: Empty): EmptyProtoMsg;
};
