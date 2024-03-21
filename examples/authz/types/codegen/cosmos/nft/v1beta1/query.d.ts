import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { NFT, NFTAmino, NFTSDKType, Class, ClassAmino, ClassSDKType } from "./nft";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** QueryBalanceRequest is the request type for the Query/Balance RPC method */
export interface QueryBalanceRequest {
    classId: string;
    owner: string;
}
export interface QueryBalanceRequestProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.QueryBalanceRequest";
    value: Uint8Array;
}
/** QueryBalanceRequest is the request type for the Query/Balance RPC method */
export interface QueryBalanceRequestAmino {
    class_id?: string;
    owner?: string;
}
export interface QueryBalanceRequestAminoMsg {
    type: "cosmos-sdk/QueryBalanceRequest";
    value: QueryBalanceRequestAmino;
}
/** QueryBalanceRequest is the request type for the Query/Balance RPC method */
export interface QueryBalanceRequestSDKType {
    class_id: string;
    owner: string;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method */
export interface QueryBalanceResponse {
    amount: bigint;
}
export interface QueryBalanceResponseProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.QueryBalanceResponse";
    value: Uint8Array;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method */
export interface QueryBalanceResponseAmino {
    amount?: string;
}
export interface QueryBalanceResponseAminoMsg {
    type: "cosmos-sdk/QueryBalanceResponse";
    value: QueryBalanceResponseAmino;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method */
export interface QueryBalanceResponseSDKType {
    amount: bigint;
}
/** QueryOwnerRequest is the request type for the Query/Owner RPC method */
export interface QueryOwnerRequest {
    classId: string;
    id: string;
}
export interface QueryOwnerRequestProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.QueryOwnerRequest";
    value: Uint8Array;
}
/** QueryOwnerRequest is the request type for the Query/Owner RPC method */
export interface QueryOwnerRequestAmino {
    class_id?: string;
    id?: string;
}
export interface QueryOwnerRequestAminoMsg {
    type: "cosmos-sdk/QueryOwnerRequest";
    value: QueryOwnerRequestAmino;
}
/** QueryOwnerRequest is the request type for the Query/Owner RPC method */
export interface QueryOwnerRequestSDKType {
    class_id: string;
    id: string;
}
/** QueryOwnerResponse is the response type for the Query/Owner RPC method */
export interface QueryOwnerResponse {
    owner: string;
}
export interface QueryOwnerResponseProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.QueryOwnerResponse";
    value: Uint8Array;
}
/** QueryOwnerResponse is the response type for the Query/Owner RPC method */
export interface QueryOwnerResponseAmino {
    owner?: string;
}
export interface QueryOwnerResponseAminoMsg {
    type: "cosmos-sdk/QueryOwnerResponse";
    value: QueryOwnerResponseAmino;
}
/** QueryOwnerResponse is the response type for the Query/Owner RPC method */
export interface QueryOwnerResponseSDKType {
    owner: string;
}
/** QuerySupplyRequest is the request type for the Query/Supply RPC method */
export interface QuerySupplyRequest {
    classId: string;
}
export interface QuerySupplyRequestProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.QuerySupplyRequest";
    value: Uint8Array;
}
/** QuerySupplyRequest is the request type for the Query/Supply RPC method */
export interface QuerySupplyRequestAmino {
    class_id?: string;
}
export interface QuerySupplyRequestAminoMsg {
    type: "cosmos-sdk/QuerySupplyRequest";
    value: QuerySupplyRequestAmino;
}
/** QuerySupplyRequest is the request type for the Query/Supply RPC method */
export interface QuerySupplyRequestSDKType {
    class_id: string;
}
/** QuerySupplyResponse is the response type for the Query/Supply RPC method */
export interface QuerySupplyResponse {
    amount: bigint;
}
export interface QuerySupplyResponseProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.QuerySupplyResponse";
    value: Uint8Array;
}
/** QuerySupplyResponse is the response type for the Query/Supply RPC method */
export interface QuerySupplyResponseAmino {
    amount?: string;
}
export interface QuerySupplyResponseAminoMsg {
    type: "cosmos-sdk/QuerySupplyResponse";
    value: QuerySupplyResponseAmino;
}
/** QuerySupplyResponse is the response type for the Query/Supply RPC method */
export interface QuerySupplyResponseSDKType {
    amount: bigint;
}
/** QueryNFTstRequest is the request type for the Query/NFTs RPC method */
export interface QueryNFTsRequest {
    classId: string;
    owner: string;
    pagination?: PageRequest | undefined;
}
export interface QueryNFTsRequestProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.QueryNFTsRequest";
    value: Uint8Array;
}
/** QueryNFTstRequest is the request type for the Query/NFTs RPC method */
export interface QueryNFTsRequestAmino {
    class_id?: string;
    owner?: string;
    pagination?: PageRequestAmino | undefined;
}
export interface QueryNFTsRequestAminoMsg {
    type: "cosmos-sdk/QueryNFTsRequest";
    value: QueryNFTsRequestAmino;
}
/** QueryNFTstRequest is the request type for the Query/NFTs RPC method */
export interface QueryNFTsRequestSDKType {
    class_id: string;
    owner: string;
    pagination?: PageRequestSDKType | undefined;
}
/** QueryNFTsResponse is the response type for the Query/NFTs RPC methods */
export interface QueryNFTsResponse {
    nfts: NFT[];
    pagination?: PageResponse | undefined;
}
export interface QueryNFTsResponseProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.QueryNFTsResponse";
    value: Uint8Array;
}
/** QueryNFTsResponse is the response type for the Query/NFTs RPC methods */
export interface QueryNFTsResponseAmino {
    nfts?: NFTAmino[];
    pagination?: PageResponseAmino | undefined;
}
export interface QueryNFTsResponseAminoMsg {
    type: "cosmos-sdk/QueryNFTsResponse";
    value: QueryNFTsResponseAmino;
}
/** QueryNFTsResponse is the response type for the Query/NFTs RPC methods */
export interface QueryNFTsResponseSDKType {
    nfts: NFTSDKType[];
    pagination?: PageResponseSDKType | undefined;
}
/** QueryNFTRequest is the request type for the Query/NFT RPC method */
export interface QueryNFTRequest {
    classId: string;
    id: string;
}
export interface QueryNFTRequestProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.QueryNFTRequest";
    value: Uint8Array;
}
/** QueryNFTRequest is the request type for the Query/NFT RPC method */
export interface QueryNFTRequestAmino {
    class_id?: string;
    id?: string;
}
export interface QueryNFTRequestAminoMsg {
    type: "cosmos-sdk/QueryNFTRequest";
    value: QueryNFTRequestAmino;
}
/** QueryNFTRequest is the request type for the Query/NFT RPC method */
export interface QueryNFTRequestSDKType {
    class_id: string;
    id: string;
}
/** QueryNFTResponse is the response type for the Query/NFT RPC method */
export interface QueryNFTResponse {
    nft?: NFT | undefined;
}
export interface QueryNFTResponseProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.QueryNFTResponse";
    value: Uint8Array;
}
/** QueryNFTResponse is the response type for the Query/NFT RPC method */
export interface QueryNFTResponseAmino {
    nft?: NFTAmino | undefined;
}
export interface QueryNFTResponseAminoMsg {
    type: "cosmos-sdk/QueryNFTResponse";
    value: QueryNFTResponseAmino;
}
/** QueryNFTResponse is the response type for the Query/NFT RPC method */
export interface QueryNFTResponseSDKType {
    nft?: NFTSDKType | undefined;
}
/** QueryClassRequest is the request type for the Query/Class RPC method */
export interface QueryClassRequest {
    classId: string;
}
export interface QueryClassRequestProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.QueryClassRequest";
    value: Uint8Array;
}
/** QueryClassRequest is the request type for the Query/Class RPC method */
export interface QueryClassRequestAmino {
    class_id?: string;
}
export interface QueryClassRequestAminoMsg {
    type: "cosmos-sdk/QueryClassRequest";
    value: QueryClassRequestAmino;
}
/** QueryClassRequest is the request type for the Query/Class RPC method */
export interface QueryClassRequestSDKType {
    class_id: string;
}
/** QueryClassResponse is the response type for the Query/Class RPC method */
export interface QueryClassResponse {
    class?: Class | undefined;
}
export interface QueryClassResponseProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.QueryClassResponse";
    value: Uint8Array;
}
/** QueryClassResponse is the response type for the Query/Class RPC method */
export interface QueryClassResponseAmino {
    class?: ClassAmino | undefined;
}
export interface QueryClassResponseAminoMsg {
    type: "cosmos-sdk/QueryClassResponse";
    value: QueryClassResponseAmino;
}
/** QueryClassResponse is the response type for the Query/Class RPC method */
export interface QueryClassResponseSDKType {
    class?: ClassSDKType | undefined;
}
/** QueryClassesRequest is the request type for the Query/Classes RPC method */
export interface QueryClassesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
export interface QueryClassesRequestProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.QueryClassesRequest";
    value: Uint8Array;
}
/** QueryClassesRequest is the request type for the Query/Classes RPC method */
export interface QueryClassesRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino | undefined;
}
export interface QueryClassesRequestAminoMsg {
    type: "cosmos-sdk/QueryClassesRequest";
    value: QueryClassesRequestAmino;
}
/** QueryClassesRequest is the request type for the Query/Classes RPC method */
export interface QueryClassesRequestSDKType {
    pagination?: PageRequestSDKType | undefined;
}
/** QueryClassesResponse is the response type for the Query/Classes RPC method */
export interface QueryClassesResponse {
    classes: Class[];
    pagination?: PageResponse | undefined;
}
export interface QueryClassesResponseProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.QueryClassesResponse";
    value: Uint8Array;
}
/** QueryClassesResponse is the response type for the Query/Classes RPC method */
export interface QueryClassesResponseAmino {
    classes?: ClassAmino[];
    pagination?: PageResponseAmino | undefined;
}
export interface QueryClassesResponseAminoMsg {
    type: "cosmos-sdk/QueryClassesResponse";
    value: QueryClassesResponseAmino;
}
/** QueryClassesResponse is the response type for the Query/Classes RPC method */
export interface QueryClassesResponseSDKType {
    classes: ClassSDKType[];
    pagination?: PageResponseSDKType | undefined;
}
export declare const QueryBalanceRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryBalanceRequest;
    isSDK(o: any): o is QueryBalanceRequestSDKType;
    isAmino(o: any): o is QueryBalanceRequestAmino;
    encode(message: QueryBalanceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceRequest;
    fromJSON(object: any): QueryBalanceRequest;
    toJSON(message: QueryBalanceRequest): unknown;
    fromPartial(object: DeepPartial<QueryBalanceRequest>): QueryBalanceRequest;
    fromSDK(object: QueryBalanceRequestSDKType): QueryBalanceRequest;
    toSDK(message: QueryBalanceRequest): QueryBalanceRequestSDKType;
    fromAmino(object: QueryBalanceRequestAmino): QueryBalanceRequest;
    toAmino(message: QueryBalanceRequest): QueryBalanceRequestAmino;
    fromAminoMsg(object: QueryBalanceRequestAminoMsg): QueryBalanceRequest;
    toAminoMsg(message: QueryBalanceRequest): QueryBalanceRequestAminoMsg;
    fromProtoMsg(message: QueryBalanceRequestProtoMsg): QueryBalanceRequest;
    toProto(message: QueryBalanceRequest): Uint8Array;
    toProtoMsg(message: QueryBalanceRequest): QueryBalanceRequestProtoMsg;
};
export declare const QueryBalanceResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryBalanceResponse;
    isSDK(o: any): o is QueryBalanceResponseSDKType;
    isAmino(o: any): o is QueryBalanceResponseAmino;
    encode(message: QueryBalanceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceResponse;
    fromJSON(object: any): QueryBalanceResponse;
    toJSON(message: QueryBalanceResponse): unknown;
    fromPartial(object: DeepPartial<QueryBalanceResponse>): QueryBalanceResponse;
    fromSDK(object: QueryBalanceResponseSDKType): QueryBalanceResponse;
    toSDK(message: QueryBalanceResponse): QueryBalanceResponseSDKType;
    fromAmino(object: QueryBalanceResponseAmino): QueryBalanceResponse;
    toAmino(message: QueryBalanceResponse): QueryBalanceResponseAmino;
    fromAminoMsg(object: QueryBalanceResponseAminoMsg): QueryBalanceResponse;
    toAminoMsg(message: QueryBalanceResponse): QueryBalanceResponseAminoMsg;
    fromProtoMsg(message: QueryBalanceResponseProtoMsg): QueryBalanceResponse;
    toProto(message: QueryBalanceResponse): Uint8Array;
    toProtoMsg(message: QueryBalanceResponse): QueryBalanceResponseProtoMsg;
};
export declare const QueryOwnerRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryOwnerRequest;
    isSDK(o: any): o is QueryOwnerRequestSDKType;
    isAmino(o: any): o is QueryOwnerRequestAmino;
    encode(message: QueryOwnerRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryOwnerRequest;
    fromJSON(object: any): QueryOwnerRequest;
    toJSON(message: QueryOwnerRequest): unknown;
    fromPartial(object: DeepPartial<QueryOwnerRequest>): QueryOwnerRequest;
    fromSDK(object: QueryOwnerRequestSDKType): QueryOwnerRequest;
    toSDK(message: QueryOwnerRequest): QueryOwnerRequestSDKType;
    fromAmino(object: QueryOwnerRequestAmino): QueryOwnerRequest;
    toAmino(message: QueryOwnerRequest): QueryOwnerRequestAmino;
    fromAminoMsg(object: QueryOwnerRequestAminoMsg): QueryOwnerRequest;
    toAminoMsg(message: QueryOwnerRequest): QueryOwnerRequestAminoMsg;
    fromProtoMsg(message: QueryOwnerRequestProtoMsg): QueryOwnerRequest;
    toProto(message: QueryOwnerRequest): Uint8Array;
    toProtoMsg(message: QueryOwnerRequest): QueryOwnerRequestProtoMsg;
};
export declare const QueryOwnerResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryOwnerResponse;
    isSDK(o: any): o is QueryOwnerResponseSDKType;
    isAmino(o: any): o is QueryOwnerResponseAmino;
    encode(message: QueryOwnerResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryOwnerResponse;
    fromJSON(object: any): QueryOwnerResponse;
    toJSON(message: QueryOwnerResponse): unknown;
    fromPartial(object: DeepPartial<QueryOwnerResponse>): QueryOwnerResponse;
    fromSDK(object: QueryOwnerResponseSDKType): QueryOwnerResponse;
    toSDK(message: QueryOwnerResponse): QueryOwnerResponseSDKType;
    fromAmino(object: QueryOwnerResponseAmino): QueryOwnerResponse;
    toAmino(message: QueryOwnerResponse): QueryOwnerResponseAmino;
    fromAminoMsg(object: QueryOwnerResponseAminoMsg): QueryOwnerResponse;
    toAminoMsg(message: QueryOwnerResponse): QueryOwnerResponseAminoMsg;
    fromProtoMsg(message: QueryOwnerResponseProtoMsg): QueryOwnerResponse;
    toProto(message: QueryOwnerResponse): Uint8Array;
    toProtoMsg(message: QueryOwnerResponse): QueryOwnerResponseProtoMsg;
};
export declare const QuerySupplyRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QuerySupplyRequest;
    isSDK(o: any): o is QuerySupplyRequestSDKType;
    isAmino(o: any): o is QuerySupplyRequestAmino;
    encode(message: QuerySupplyRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyRequest;
    fromJSON(object: any): QuerySupplyRequest;
    toJSON(message: QuerySupplyRequest): unknown;
    fromPartial(object: DeepPartial<QuerySupplyRequest>): QuerySupplyRequest;
    fromSDK(object: QuerySupplyRequestSDKType): QuerySupplyRequest;
    toSDK(message: QuerySupplyRequest): QuerySupplyRequestSDKType;
    fromAmino(object: QuerySupplyRequestAmino): QuerySupplyRequest;
    toAmino(message: QuerySupplyRequest): QuerySupplyRequestAmino;
    fromAminoMsg(object: QuerySupplyRequestAminoMsg): QuerySupplyRequest;
    toAminoMsg(message: QuerySupplyRequest): QuerySupplyRequestAminoMsg;
    fromProtoMsg(message: QuerySupplyRequestProtoMsg): QuerySupplyRequest;
    toProto(message: QuerySupplyRequest): Uint8Array;
    toProtoMsg(message: QuerySupplyRequest): QuerySupplyRequestProtoMsg;
};
export declare const QuerySupplyResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QuerySupplyResponse;
    isSDK(o: any): o is QuerySupplyResponseSDKType;
    isAmino(o: any): o is QuerySupplyResponseAmino;
    encode(message: QuerySupplyResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyResponse;
    fromJSON(object: any): QuerySupplyResponse;
    toJSON(message: QuerySupplyResponse): unknown;
    fromPartial(object: DeepPartial<QuerySupplyResponse>): QuerySupplyResponse;
    fromSDK(object: QuerySupplyResponseSDKType): QuerySupplyResponse;
    toSDK(message: QuerySupplyResponse): QuerySupplyResponseSDKType;
    fromAmino(object: QuerySupplyResponseAmino): QuerySupplyResponse;
    toAmino(message: QuerySupplyResponse): QuerySupplyResponseAmino;
    fromAminoMsg(object: QuerySupplyResponseAminoMsg): QuerySupplyResponse;
    toAminoMsg(message: QuerySupplyResponse): QuerySupplyResponseAminoMsg;
    fromProtoMsg(message: QuerySupplyResponseProtoMsg): QuerySupplyResponse;
    toProto(message: QuerySupplyResponse): Uint8Array;
    toProtoMsg(message: QuerySupplyResponse): QuerySupplyResponseProtoMsg;
};
export declare const QueryNFTsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryNFTsRequest;
    isSDK(o: any): o is QueryNFTsRequestSDKType;
    isAmino(o: any): o is QueryNFTsRequestAmino;
    encode(message: QueryNFTsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryNFTsRequest;
    fromJSON(object: any): QueryNFTsRequest;
    toJSON(message: QueryNFTsRequest): unknown;
    fromPartial(object: DeepPartial<QueryNFTsRequest>): QueryNFTsRequest;
    fromSDK(object: QueryNFTsRequestSDKType): QueryNFTsRequest;
    toSDK(message: QueryNFTsRequest): QueryNFTsRequestSDKType;
    fromAmino(object: QueryNFTsRequestAmino): QueryNFTsRequest;
    toAmino(message: QueryNFTsRequest): QueryNFTsRequestAmino;
    fromAminoMsg(object: QueryNFTsRequestAminoMsg): QueryNFTsRequest;
    toAminoMsg(message: QueryNFTsRequest): QueryNFTsRequestAminoMsg;
    fromProtoMsg(message: QueryNFTsRequestProtoMsg): QueryNFTsRequest;
    toProto(message: QueryNFTsRequest): Uint8Array;
    toProtoMsg(message: QueryNFTsRequest): QueryNFTsRequestProtoMsg;
};
export declare const QueryNFTsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryNFTsResponse;
    isSDK(o: any): o is QueryNFTsResponseSDKType;
    isAmino(o: any): o is QueryNFTsResponseAmino;
    encode(message: QueryNFTsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryNFTsResponse;
    fromJSON(object: any): QueryNFTsResponse;
    toJSON(message: QueryNFTsResponse): unknown;
    fromPartial(object: DeepPartial<QueryNFTsResponse>): QueryNFTsResponse;
    fromSDK(object: QueryNFTsResponseSDKType): QueryNFTsResponse;
    toSDK(message: QueryNFTsResponse): QueryNFTsResponseSDKType;
    fromAmino(object: QueryNFTsResponseAmino): QueryNFTsResponse;
    toAmino(message: QueryNFTsResponse): QueryNFTsResponseAmino;
    fromAminoMsg(object: QueryNFTsResponseAminoMsg): QueryNFTsResponse;
    toAminoMsg(message: QueryNFTsResponse): QueryNFTsResponseAminoMsg;
    fromProtoMsg(message: QueryNFTsResponseProtoMsg): QueryNFTsResponse;
    toProto(message: QueryNFTsResponse): Uint8Array;
    toProtoMsg(message: QueryNFTsResponse): QueryNFTsResponseProtoMsg;
};
export declare const QueryNFTRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryNFTRequest;
    isSDK(o: any): o is QueryNFTRequestSDKType;
    isAmino(o: any): o is QueryNFTRequestAmino;
    encode(message: QueryNFTRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryNFTRequest;
    fromJSON(object: any): QueryNFTRequest;
    toJSON(message: QueryNFTRequest): unknown;
    fromPartial(object: DeepPartial<QueryNFTRequest>): QueryNFTRequest;
    fromSDK(object: QueryNFTRequestSDKType): QueryNFTRequest;
    toSDK(message: QueryNFTRequest): QueryNFTRequestSDKType;
    fromAmino(object: QueryNFTRequestAmino): QueryNFTRequest;
    toAmino(message: QueryNFTRequest): QueryNFTRequestAmino;
    fromAminoMsg(object: QueryNFTRequestAminoMsg): QueryNFTRequest;
    toAminoMsg(message: QueryNFTRequest): QueryNFTRequestAminoMsg;
    fromProtoMsg(message: QueryNFTRequestProtoMsg): QueryNFTRequest;
    toProto(message: QueryNFTRequest): Uint8Array;
    toProtoMsg(message: QueryNFTRequest): QueryNFTRequestProtoMsg;
};
export declare const QueryNFTResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryNFTResponse;
    isSDK(o: any): o is QueryNFTResponseSDKType;
    isAmino(o: any): o is QueryNFTResponseAmino;
    encode(message: QueryNFTResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryNFTResponse;
    fromJSON(object: any): QueryNFTResponse;
    toJSON(message: QueryNFTResponse): unknown;
    fromPartial(object: DeepPartial<QueryNFTResponse>): QueryNFTResponse;
    fromSDK(object: QueryNFTResponseSDKType): QueryNFTResponse;
    toSDK(message: QueryNFTResponse): QueryNFTResponseSDKType;
    fromAmino(object: QueryNFTResponseAmino): QueryNFTResponse;
    toAmino(message: QueryNFTResponse): QueryNFTResponseAmino;
    fromAminoMsg(object: QueryNFTResponseAminoMsg): QueryNFTResponse;
    toAminoMsg(message: QueryNFTResponse): QueryNFTResponseAminoMsg;
    fromProtoMsg(message: QueryNFTResponseProtoMsg): QueryNFTResponse;
    toProto(message: QueryNFTResponse): Uint8Array;
    toProtoMsg(message: QueryNFTResponse): QueryNFTResponseProtoMsg;
};
export declare const QueryClassRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryClassRequest;
    isSDK(o: any): o is QueryClassRequestSDKType;
    isAmino(o: any): o is QueryClassRequestAmino;
    encode(message: QueryClassRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClassRequest;
    fromJSON(object: any): QueryClassRequest;
    toJSON(message: QueryClassRequest): unknown;
    fromPartial(object: DeepPartial<QueryClassRequest>): QueryClassRequest;
    fromSDK(object: QueryClassRequestSDKType): QueryClassRequest;
    toSDK(message: QueryClassRequest): QueryClassRequestSDKType;
    fromAmino(object: QueryClassRequestAmino): QueryClassRequest;
    toAmino(message: QueryClassRequest): QueryClassRequestAmino;
    fromAminoMsg(object: QueryClassRequestAminoMsg): QueryClassRequest;
    toAminoMsg(message: QueryClassRequest): QueryClassRequestAminoMsg;
    fromProtoMsg(message: QueryClassRequestProtoMsg): QueryClassRequest;
    toProto(message: QueryClassRequest): Uint8Array;
    toProtoMsg(message: QueryClassRequest): QueryClassRequestProtoMsg;
};
export declare const QueryClassResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryClassResponse;
    isSDK(o: any): o is QueryClassResponseSDKType;
    isAmino(o: any): o is QueryClassResponseAmino;
    encode(message: QueryClassResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClassResponse;
    fromJSON(object: any): QueryClassResponse;
    toJSON(message: QueryClassResponse): unknown;
    fromPartial(object: DeepPartial<QueryClassResponse>): QueryClassResponse;
    fromSDK(object: QueryClassResponseSDKType): QueryClassResponse;
    toSDK(message: QueryClassResponse): QueryClassResponseSDKType;
    fromAmino(object: QueryClassResponseAmino): QueryClassResponse;
    toAmino(message: QueryClassResponse): QueryClassResponseAmino;
    fromAminoMsg(object: QueryClassResponseAminoMsg): QueryClassResponse;
    toAminoMsg(message: QueryClassResponse): QueryClassResponseAminoMsg;
    fromProtoMsg(message: QueryClassResponseProtoMsg): QueryClassResponse;
    toProto(message: QueryClassResponse): Uint8Array;
    toProtoMsg(message: QueryClassResponse): QueryClassResponseProtoMsg;
};
export declare const QueryClassesRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryClassesRequest;
    isSDK(o: any): o is QueryClassesRequestSDKType;
    isAmino(o: any): o is QueryClassesRequestAmino;
    encode(message: QueryClassesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClassesRequest;
    fromJSON(object: any): QueryClassesRequest;
    toJSON(message: QueryClassesRequest): unknown;
    fromPartial(object: DeepPartial<QueryClassesRequest>): QueryClassesRequest;
    fromSDK(object: QueryClassesRequestSDKType): QueryClassesRequest;
    toSDK(message: QueryClassesRequest): QueryClassesRequestSDKType;
    fromAmino(object: QueryClassesRequestAmino): QueryClassesRequest;
    toAmino(message: QueryClassesRequest): QueryClassesRequestAmino;
    fromAminoMsg(object: QueryClassesRequestAminoMsg): QueryClassesRequest;
    toAminoMsg(message: QueryClassesRequest): QueryClassesRequestAminoMsg;
    fromProtoMsg(message: QueryClassesRequestProtoMsg): QueryClassesRequest;
    toProto(message: QueryClassesRequest): Uint8Array;
    toProtoMsg(message: QueryClassesRequest): QueryClassesRequestProtoMsg;
};
export declare const QueryClassesResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryClassesResponse;
    isSDK(o: any): o is QueryClassesResponseSDKType;
    isAmino(o: any): o is QueryClassesResponseAmino;
    encode(message: QueryClassesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClassesResponse;
    fromJSON(object: any): QueryClassesResponse;
    toJSON(message: QueryClassesResponse): unknown;
    fromPartial(object: DeepPartial<QueryClassesResponse>): QueryClassesResponse;
    fromSDK(object: QueryClassesResponseSDKType): QueryClassesResponse;
    toSDK(message: QueryClassesResponse): QueryClassesResponseSDKType;
    fromAmino(object: QueryClassesResponseAmino): QueryClassesResponse;
    toAmino(message: QueryClassesResponse): QueryClassesResponseAmino;
    fromAminoMsg(object: QueryClassesResponseAminoMsg): QueryClassesResponse;
    toAminoMsg(message: QueryClassesResponse): QueryClassesResponseAminoMsg;
    fromProtoMsg(message: QueryClassesResponseProtoMsg): QueryClassesResponse;
    toProto(message: QueryClassesResponse): Uint8Array;
    toProtoMsg(message: QueryClassesResponse): QueryClassesResponseProtoMsg;
};
