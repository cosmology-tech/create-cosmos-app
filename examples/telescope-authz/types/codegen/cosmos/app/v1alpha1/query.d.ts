import { Config, ConfigAmino, ConfigSDKType } from "./config";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** QueryConfigRequest is the Query/Config request type. */
export interface QueryConfigRequest {
}
export interface QueryConfigRequestProtoMsg {
    typeUrl: "/cosmos.app.v1alpha1.QueryConfigRequest";
    value: Uint8Array;
}
/** QueryConfigRequest is the Query/Config request type. */
export interface QueryConfigRequestAmino {
}
export interface QueryConfigRequestAminoMsg {
    type: "cosmos-sdk/QueryConfigRequest";
    value: QueryConfigRequestAmino;
}
/** QueryConfigRequest is the Query/Config request type. */
export interface QueryConfigRequestSDKType {
}
/** QueryConfigRequest is the Query/Config response type. */
export interface QueryConfigResponse {
    /** config is the current app config. */
    config?: Config | undefined;
}
export interface QueryConfigResponseProtoMsg {
    typeUrl: "/cosmos.app.v1alpha1.QueryConfigResponse";
    value: Uint8Array;
}
/** QueryConfigRequest is the Query/Config response type. */
export interface QueryConfigResponseAmino {
    /** config is the current app config. */
    config?: ConfigAmino | undefined;
}
export interface QueryConfigResponseAminoMsg {
    type: "cosmos-sdk/QueryConfigResponse";
    value: QueryConfigResponseAmino;
}
/** QueryConfigRequest is the Query/Config response type. */
export interface QueryConfigResponseSDKType {
    config?: ConfigSDKType | undefined;
}
export declare const QueryConfigRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryConfigRequest;
    isSDK(o: any): o is QueryConfigRequestSDKType;
    isAmino(o: any): o is QueryConfigRequestAmino;
    encode(_: QueryConfigRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryConfigRequest;
    fromJSON(_: any): QueryConfigRequest;
    toJSON(_: QueryConfigRequest): unknown;
    fromPartial(_: DeepPartial<QueryConfigRequest>): QueryConfigRequest;
    fromSDK(_: QueryConfigRequestSDKType): QueryConfigRequest;
    toSDK(_: QueryConfigRequest): QueryConfigRequestSDKType;
    fromAmino(_: QueryConfigRequestAmino): QueryConfigRequest;
    toAmino(_: QueryConfigRequest): QueryConfigRequestAmino;
    fromAminoMsg(object: QueryConfigRequestAminoMsg): QueryConfigRequest;
    toAminoMsg(message: QueryConfigRequest): QueryConfigRequestAminoMsg;
    fromProtoMsg(message: QueryConfigRequestProtoMsg): QueryConfigRequest;
    toProto(message: QueryConfigRequest): Uint8Array;
    toProtoMsg(message: QueryConfigRequest): QueryConfigRequestProtoMsg;
};
export declare const QueryConfigResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryConfigResponse;
    isSDK(o: any): o is QueryConfigResponseSDKType;
    isAmino(o: any): o is QueryConfigResponseAmino;
    encode(message: QueryConfigResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryConfigResponse;
    fromJSON(object: any): QueryConfigResponse;
    toJSON(message: QueryConfigResponse): unknown;
    fromPartial(object: DeepPartial<QueryConfigResponse>): QueryConfigResponse;
    fromSDK(object: QueryConfigResponseSDKType): QueryConfigResponse;
    toSDK(message: QueryConfigResponse): QueryConfigResponseSDKType;
    fromAmino(object: QueryConfigResponseAmino): QueryConfigResponse;
    toAmino(message: QueryConfigResponse): QueryConfigResponseAmino;
    fromAminoMsg(object: QueryConfigResponseAminoMsg): QueryConfigResponse;
    toAminoMsg(message: QueryConfigResponse): QueryConfigResponseAminoMsg;
    fromProtoMsg(message: QueryConfigResponseProtoMsg): QueryConfigResponse;
    toProto(message: QueryConfigResponse): Uint8Array;
    toProtoMsg(message: QueryConfigResponse): QueryConfigResponseProtoMsg;
};
