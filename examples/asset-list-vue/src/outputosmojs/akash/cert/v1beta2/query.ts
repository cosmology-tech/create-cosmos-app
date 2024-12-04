import { CertificateFilter, CertificateFilterSDKType, Certificate, CertificateSDKType } from "./cert";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "akash.cert.v1beta2";
/** CertificateResponse contains a single X509 certificate and its serial number */
export interface CertificateResponse {
  certificate: Certificate;
  serial: string;
}
export interface CertificateResponseProtoMsg {
  typeUrl: "/akash.cert.v1beta2.CertificateResponse";
  value: Uint8Array;
}
/** CertificateResponse contains a single X509 certificate and its serial number */
export interface CertificateResponseSDKType {
  certificate: CertificateSDKType;
  serial: string;
}
/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryCertificatesRequest {
  filter: CertificateFilter;
  pagination?: PageRequest;
}
export interface QueryCertificatesRequestProtoMsg {
  typeUrl: "/akash.cert.v1beta2.QueryCertificatesRequest";
  value: Uint8Array;
}
/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryCertificatesRequestSDKType {
  filter: CertificateFilterSDKType;
  pagination?: PageRequestSDKType;
}
/** QueryCertificatesResponse is response type for the Query/Certificates RPC method */
export interface QueryCertificatesResponse {
  certificates: CertificateResponse[];
  pagination?: PageResponse;
}
export interface QueryCertificatesResponseProtoMsg {
  typeUrl: "/akash.cert.v1beta2.QueryCertificatesResponse";
  value: Uint8Array;
}
/** QueryCertificatesResponse is response type for the Query/Certificates RPC method */
export interface QueryCertificatesResponseSDKType {
  certificates: CertificateResponseSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseCertificateResponse(): CertificateResponse {
  return {
    certificate: Certificate.fromPartial({}),
    serial: ""
  };
}
export const CertificateResponse = {
  typeUrl: "/akash.cert.v1beta2.CertificateResponse",
  encode(message: CertificateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.certificate !== undefined) {
      Certificate.encode(message.certificate, writer.uint32(10).fork()).ldelim();
    }
    if (message.serial !== "") {
      writer.uint32(18).string(message.serial);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CertificateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCertificateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.certificate = Certificate.decode(reader, reader.uint32());
          break;
        case 2:
          message.serial = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CertificateResponse {
    return {
      certificate: isSet(object.certificate) ? Certificate.fromJSON(object.certificate) : undefined,
      serial: isSet(object.serial) ? String(object.serial) : ""
    };
  },
  toJSON(message: CertificateResponse): JsonSafe<CertificateResponse> {
    const obj: any = {};
    message.certificate !== undefined && (obj.certificate = message.certificate ? Certificate.toJSON(message.certificate) : undefined);
    message.serial !== undefined && (obj.serial = message.serial);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CertificateResponse>, I>>(object: I): CertificateResponse {
    const message = createBaseCertificateResponse();
    message.certificate = object.certificate !== undefined && object.certificate !== null ? Certificate.fromPartial(object.certificate) : undefined;
    message.serial = object.serial ?? "";
    return message;
  },
  fromSDK(object: CertificateResponseSDKType): CertificateResponse {
    return {
      certificate: object.certificate ? Certificate.fromSDK(object.certificate) : undefined,
      serial: object?.serial
    };
  },
  fromSDKJSON(object: any): CertificateResponseSDKType {
    return {
      certificate: isSet(object.certificate) ? Certificate.fromSDKJSON(object.certificate) : undefined,
      serial: isSet(object.serial) ? String(object.serial) : ""
    };
  },
  toSDK(message: CertificateResponse): CertificateResponseSDKType {
    const obj: any = {};
    message.certificate !== undefined && (obj.certificate = message.certificate ? Certificate.toSDK(message.certificate) : undefined);
    obj.serial = message.serial;
    return obj;
  },
  fromAmino(object: CertificateResponseAmino): CertificateResponse {
    const message = createBaseCertificateResponse();
    if (object.certificate !== undefined && object.certificate !== null) {
      message.certificate = Certificate.fromAmino(object.certificate);
    }
    if (object.serial !== undefined && object.serial !== null) {
      message.serial = object.serial;
    }
    return message;
  },
  toAmino(message: CertificateResponse): CertificateResponseAmino {
    const obj: any = {};
    obj.certificate = message.certificate ? Certificate.toAmino(message.certificate) : Certificate.toAmino(Certificate.fromPartial({}));
    obj.serial = message.serial ?? "";
    return obj;
  },
  fromAminoMsg(object: CertificateResponseAminoMsg): CertificateResponse {
    return CertificateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: CertificateResponse): CertificateResponseAminoMsg {
    return {
      type: "akash/cert/v1beta2/certificate-response",
      value: CertificateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: CertificateResponseProtoMsg): CertificateResponse {
    return CertificateResponse.decode(message.value);
  },
  toProto(message: CertificateResponse): Uint8Array {
    return CertificateResponse.encode(message).finish();
  },
  toProtoMsg(message: CertificateResponse): CertificateResponseProtoMsg {
    return {
      typeUrl: "/akash.cert.v1beta2.CertificateResponse",
      value: CertificateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCertificatesRequest(): QueryCertificatesRequest {
  return {
    filter: CertificateFilter.fromPartial({}),
    pagination: undefined
  };
}
export const QueryCertificatesRequest = {
  typeUrl: "/akash.cert.v1beta2.QueryCertificatesRequest",
  encode(message: QueryCertificatesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.filter !== undefined) {
      CertificateFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCertificatesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCertificatesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filter = CertificateFilter.decode(reader, reader.uint32());
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCertificatesRequest {
    return {
      filter: isSet(object.filter) ? CertificateFilter.fromJSON(object.filter) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryCertificatesRequest): JsonSafe<QueryCertificatesRequest> {
    const obj: any = {};
    message.filter !== undefined && (obj.filter = message.filter ? CertificateFilter.toJSON(message.filter) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCertificatesRequest>, I>>(object: I): QueryCertificatesRequest {
    const message = createBaseQueryCertificatesRequest();
    message.filter = object.filter !== undefined && object.filter !== null ? CertificateFilter.fromPartial(object.filter) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryCertificatesRequestSDKType): QueryCertificatesRequest {
    return {
      filter: object.filter ? CertificateFilter.fromSDK(object.filter) : undefined,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryCertificatesRequestSDKType {
    return {
      filter: isSet(object.filter) ? CertificateFilter.fromSDKJSON(object.filter) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QueryCertificatesRequest): QueryCertificatesRequestSDKType {
    const obj: any = {};
    message.filter !== undefined && (obj.filter = message.filter ? CertificateFilter.toSDK(message.filter) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryCertificatesRequestAmino): QueryCertificatesRequest {
    const message = createBaseQueryCertificatesRequest();
    if (object.filter !== undefined && object.filter !== null) {
      message.filter = CertificateFilter.fromAmino(object.filter);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryCertificatesRequest): QueryCertificatesRequestAmino {
    const obj: any = {};
    obj.filter = message.filter ? CertificateFilter.toAmino(message.filter) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCertificatesRequestAminoMsg): QueryCertificatesRequest {
    return QueryCertificatesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCertificatesRequest): QueryCertificatesRequestAminoMsg {
    return {
      type: "akash/cert/v1beta2/query-certificates-request",
      value: QueryCertificatesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCertificatesRequestProtoMsg): QueryCertificatesRequest {
    return QueryCertificatesRequest.decode(message.value);
  },
  toProto(message: QueryCertificatesRequest): Uint8Array {
    return QueryCertificatesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCertificatesRequest): QueryCertificatesRequestProtoMsg {
    return {
      typeUrl: "/akash.cert.v1beta2.QueryCertificatesRequest",
      value: QueryCertificatesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCertificatesResponse(): QueryCertificatesResponse {
  return {
    certificates: [],
    pagination: undefined
  };
}
export const QueryCertificatesResponse = {
  typeUrl: "/akash.cert.v1beta2.QueryCertificatesResponse",
  encode(message: QueryCertificatesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.certificates) {
      CertificateResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCertificatesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCertificatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.certificates.push(CertificateResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCertificatesResponse {
    return {
      certificates: Array.isArray(object?.certificates) ? object.certificates.map((e: any) => CertificateResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryCertificatesResponse): JsonSafe<QueryCertificatesResponse> {
    const obj: any = {};
    if (message.certificates) {
      obj.certificates = message.certificates.map(e => e ? CertificateResponse.toJSON(e) : undefined);
    } else {
      obj.certificates = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCertificatesResponse>, I>>(object: I): QueryCertificatesResponse {
    const message = createBaseQueryCertificatesResponse();
    message.certificates = object.certificates?.map(e => CertificateResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryCertificatesResponseSDKType): QueryCertificatesResponse {
    return {
      certificates: Array.isArray(object?.certificates) ? object.certificates.map((e: any) => CertificateResponse.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryCertificatesResponseSDKType {
    return {
      certificates: Array.isArray(object?.certificates) ? object.certificates.map((e: any) => CertificateResponse.fromSDKJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QueryCertificatesResponse): QueryCertificatesResponseSDKType {
    const obj: any = {};
    if (message.certificates) {
      obj.certificates = message.certificates.map(e => e ? CertificateResponse.toSDK(e) : undefined);
    } else {
      obj.certificates = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryCertificatesResponseAmino): QueryCertificatesResponse {
    const message = createBaseQueryCertificatesResponse();
    message.certificates = object.certificates?.map(e => CertificateResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryCertificatesResponse): QueryCertificatesResponseAmino {
    const obj: any = {};
    if (message.certificates) {
      obj.certificates = message.certificates.map(e => e ? CertificateResponse.toAmino(e) : undefined);
    } else {
      obj.certificates = message.certificates;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCertificatesResponseAminoMsg): QueryCertificatesResponse {
    return QueryCertificatesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCertificatesResponse): QueryCertificatesResponseAminoMsg {
    return {
      type: "akash/cert/v1beta2/query-certificates-response",
      value: QueryCertificatesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCertificatesResponseProtoMsg): QueryCertificatesResponse {
    return QueryCertificatesResponse.decode(message.value);
  },
  toProto(message: QueryCertificatesResponse): Uint8Array {
    return QueryCertificatesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCertificatesResponse): QueryCertificatesResponseProtoMsg {
    return {
      typeUrl: "/akash.cert.v1beta2.QueryCertificatesResponse",
      value: QueryCertificatesResponse.encode(message).finish()
    };
  }
};