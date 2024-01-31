import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * PageRequest is to be embedded in gRPC request messages for efficient
 * pagination. Ex:
 *
 *  message SomeRequest {
 *          Foo some_parameter = 1;
 *          PageRequest pagination = 2;
 *  }
 */
export interface PageRequest {
    /**
     * key is a value returned in PageResponse.next_key to begin
     * querying the next page most efficiently. Only one of offset or key
     * should be set.
     */
    key: Uint8Array;
    /**
     * offset is a numeric offset that can be used when key is unavailable.
     * It is less efficient than using key. Only one of offset or key should
     * be set.
     */
    offset: bigint;
    /**
     * limit is the total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     */
    limit: bigint;
    /**
     * count_total is set to true  to indicate that the result set should include
     * a count of the total number of items available for pagination in UIs.
     * count_total is only respected when offset is used. It is ignored when key
     * is set.
     */
    countTotal: boolean;
    /**
     * reverse is set to true if results are to be returned in the descending order.
     *
     * Since: cosmos-sdk 0.43
     */
    reverse: boolean;
}
export interface PageRequestProtoMsg {
    typeUrl: "/cosmos.base.query.v1beta1.PageRequest";
    value: Uint8Array;
}
/**
 * PageRequest is to be embedded in gRPC request messages for efficient
 * pagination. Ex:
 *
 *  message SomeRequest {
 *          Foo some_parameter = 1;
 *          PageRequest pagination = 2;
 *  }
 */
export interface PageRequestAmino {
    /**
     * key is a value returned in PageResponse.next_key to begin
     * querying the next page most efficiently. Only one of offset or key
     * should be set.
     */
    key?: string;
    /**
     * offset is a numeric offset that can be used when key is unavailable.
     * It is less efficient than using key. Only one of offset or key should
     * be set.
     */
    offset?: string;
    /**
     * limit is the total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     */
    limit?: string;
    /**
     * count_total is set to true  to indicate that the result set should include
     * a count of the total number of items available for pagination in UIs.
     * count_total is only respected when offset is used. It is ignored when key
     * is set.
     */
    count_total?: boolean;
    /**
     * reverse is set to true if results are to be returned in the descending order.
     *
     * Since: cosmos-sdk 0.43
     */
    reverse?: boolean;
}
export interface PageRequestAminoMsg {
    type: "cosmos-sdk/PageRequest";
    value: PageRequestAmino;
}
/**
 * PageRequest is to be embedded in gRPC request messages for efficient
 * pagination. Ex:
 *
 *  message SomeRequest {
 *          Foo some_parameter = 1;
 *          PageRequest pagination = 2;
 *  }
 */
export interface PageRequestSDKType {
    key: Uint8Array;
    offset: bigint;
    limit: bigint;
    count_total: boolean;
    reverse: boolean;
}
/**
 * PageResponse is to be embedded in gRPC response messages where the
 * corresponding request message has used PageRequest.
 *
 *  message SomeResponse {
 *          repeated Bar results = 1;
 *          PageResponse page = 2;
 *  }
 */
export interface PageResponse {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently. It will be empty if
     * there are no more results.
     */
    nextKey: Uint8Array;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     */
    total: bigint;
}
export interface PageResponseProtoMsg {
    typeUrl: "/cosmos.base.query.v1beta1.PageResponse";
    value: Uint8Array;
}
/**
 * PageResponse is to be embedded in gRPC response messages where the
 * corresponding request message has used PageRequest.
 *
 *  message SomeResponse {
 *          repeated Bar results = 1;
 *          PageResponse page = 2;
 *  }
 */
export interface PageResponseAmino {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently. It will be empty if
     * there are no more results.
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     */
    total?: string;
}
export interface PageResponseAminoMsg {
    type: "cosmos-sdk/PageResponse";
    value: PageResponseAmino;
}
/**
 * PageResponse is to be embedded in gRPC response messages where the
 * corresponding request message has used PageRequest.
 *
 *  message SomeResponse {
 *          repeated Bar results = 1;
 *          PageResponse page = 2;
 *  }
 */
export interface PageResponseSDKType {
    next_key: Uint8Array;
    total: bigint;
}
export declare const PageRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is PageRequest;
    isSDK(o: any): o is PageRequestSDKType;
    isAmino(o: any): o is PageRequestAmino;
    encode(message: PageRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PageRequest;
    fromJSON(object: any): PageRequest;
    toJSON(message: PageRequest): unknown;
    fromPartial(object: DeepPartial<PageRequest>): PageRequest;
    fromSDK(object: PageRequestSDKType): PageRequest;
    toSDK(message: PageRequest): PageRequestSDKType;
    fromAmino(object: PageRequestAmino): PageRequest;
    toAmino(message: PageRequest): PageRequestAmino;
    fromAminoMsg(object: PageRequestAminoMsg): PageRequest;
    toAminoMsg(message: PageRequest): PageRequestAminoMsg;
    fromProtoMsg(message: PageRequestProtoMsg): PageRequest;
    toProto(message: PageRequest): Uint8Array;
    toProtoMsg(message: PageRequest): PageRequestProtoMsg;
};
export declare const PageResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is PageResponse;
    isSDK(o: any): o is PageResponseSDKType;
    isAmino(o: any): o is PageResponseAmino;
    encode(message: PageResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PageResponse;
    fromJSON(object: any): PageResponse;
    toJSON(message: PageResponse): unknown;
    fromPartial(object: DeepPartial<PageResponse>): PageResponse;
    fromSDK(object: PageResponseSDKType): PageResponse;
    toSDK(message: PageResponse): PageResponseSDKType;
    fromAmino(object: PageResponseAmino): PageResponse;
    toAmino(message: PageResponse): PageResponseAmino;
    fromAminoMsg(object: PageResponseAminoMsg): PageResponse;
    toAminoMsg(message: PageResponse): PageResponseAminoMsg;
    fromProtoMsg(message: PageResponseProtoMsg): PageResponse;
    toProto(message: PageResponse): Uint8Array;
    toProtoMsg(message: PageResponse): PageResponseProtoMsg;
};
