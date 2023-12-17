"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryTallyResultResponse = exports.QueryTallyResultRequest = exports.QueryGroupsByMemberResponse = exports.QueryGroupsByMemberRequest = exports.QueryVotesByVoterResponse = exports.QueryVotesByVoterRequest = exports.QueryVotesByProposalResponse = exports.QueryVotesByProposalRequest = exports.QueryVoteByProposalVoterResponse = exports.QueryVoteByProposalVoterRequest = exports.QueryProposalsByGroupPolicyResponse = exports.QueryProposalsByGroupPolicyRequest = exports.QueryProposalResponse = exports.QueryProposalRequest = exports.QueryGroupPoliciesByAdminResponse = exports.QueryGroupPoliciesByAdminRequest = exports.QueryGroupPoliciesByGroupResponse = exports.QueryGroupPoliciesByGroupRequest = exports.QueryGroupsByAdminResponse = exports.QueryGroupsByAdminRequest = exports.QueryGroupMembersResponse = exports.QueryGroupMembersRequest = exports.QueryGroupPolicyInfoResponse = exports.QueryGroupPolicyInfoRequest = exports.QueryGroupInfoResponse = exports.QueryGroupInfoRequest = void 0;
const pagination_1 = require("../../base/query/v1beta1/pagination");
const types_1 = require("./types");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseQueryGroupInfoRequest() {
    return {
        groupId: BigInt(0)
    };
}
exports.QueryGroupInfoRequest = {
    typeUrl: "/cosmos.group.v1.QueryGroupInfoRequest",
    aminoType: "cosmos-sdk/QueryGroupInfoRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryGroupInfoRequest.typeUrl || typeof o.groupId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryGroupInfoRequest.typeUrl || typeof o.group_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryGroupInfoRequest.typeUrl || typeof o.group_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.groupId !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            groupId: (0, helpers_1.isSet)(object.groupId) ? BigInt(object.groupId.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupInfoRequest();
        message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            groupId: object?.group_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.group_id = message.groupId;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupInfoRequest();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = BigInt(object.group_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.groupId ? message.groupId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupInfoRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupInfoRequest",
            value: exports.QueryGroupInfoRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGroupInfoRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupInfoRequest",
            value: exports.QueryGroupInfoRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGroupInfoRequest.typeUrl, exports.QueryGroupInfoRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGroupInfoRequest.aminoType, exports.QueryGroupInfoRequest.typeUrl);
function createBaseQueryGroupInfoResponse() {
    return {
        info: undefined
    };
}
exports.QueryGroupInfoResponse = {
    typeUrl: "/cosmos.group.v1.QueryGroupInfoResponse",
    aminoType: "cosmos-sdk/QueryGroupInfoResponse",
    is(o) {
        return o && o.$typeUrl === exports.QueryGroupInfoResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryGroupInfoResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryGroupInfoResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.info !== undefined) {
            types_1.GroupInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info = types_1.GroupInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            info: (0, helpers_1.isSet)(object.info) ? types_1.GroupInfo.fromJSON(object.info) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.info !== undefined && (obj.info = message.info ? types_1.GroupInfo.toJSON(message.info) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupInfoResponse();
        message.info = object.info !== undefined && object.info !== null ? types_1.GroupInfo.fromPartial(object.info) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            info: object.info ? types_1.GroupInfo.fromSDK(object.info) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.info !== undefined && (obj.info = message.info ? types_1.GroupInfo.toSDK(message.info) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupInfoResponse();
        if (object.info !== undefined && object.info !== null) {
            message.info = types_1.GroupInfo.fromAmino(object.info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.info = message.info ? types_1.GroupInfo.toAmino(message.info) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupInfoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupInfoResponse",
            value: exports.QueryGroupInfoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGroupInfoResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupInfoResponse",
            value: exports.QueryGroupInfoResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGroupInfoResponse.typeUrl, exports.QueryGroupInfoResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGroupInfoResponse.aminoType, exports.QueryGroupInfoResponse.typeUrl);
function createBaseQueryGroupPolicyInfoRequest() {
    return {
        address: ""
    };
}
exports.QueryGroupPolicyInfoRequest = {
    typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoRequest",
    aminoType: "cosmos-sdk/QueryGroupPolicyInfoRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryGroupPolicyInfoRequest.typeUrl || typeof o.address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryGroupPolicyInfoRequest.typeUrl || typeof o.address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryGroupPolicyInfoRequest.typeUrl || typeof o.address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupPolicyInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupPolicyInfoRequest();
        message.address = object.address ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupPolicyInfoRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupPolicyInfoRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupPolicyInfoRequest",
            value: exports.QueryGroupPolicyInfoRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGroupPolicyInfoRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupPolicyInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoRequest",
            value: exports.QueryGroupPolicyInfoRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGroupPolicyInfoRequest.typeUrl, exports.QueryGroupPolicyInfoRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGroupPolicyInfoRequest.aminoType, exports.QueryGroupPolicyInfoRequest.typeUrl);
function createBaseQueryGroupPolicyInfoResponse() {
    return {
        info: undefined
    };
}
exports.QueryGroupPolicyInfoResponse = {
    typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoResponse",
    aminoType: "cosmos-sdk/QueryGroupPolicyInfoResponse",
    is(o) {
        return o && o.$typeUrl === exports.QueryGroupPolicyInfoResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryGroupPolicyInfoResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryGroupPolicyInfoResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.info !== undefined) {
            types_1.GroupPolicyInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupPolicyInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info = types_1.GroupPolicyInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            info: (0, helpers_1.isSet)(object.info) ? types_1.GroupPolicyInfo.fromJSON(object.info) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.info !== undefined && (obj.info = message.info ? types_1.GroupPolicyInfo.toJSON(message.info) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupPolicyInfoResponse();
        message.info = object.info !== undefined && object.info !== null ? types_1.GroupPolicyInfo.fromPartial(object.info) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            info: object.info ? types_1.GroupPolicyInfo.fromSDK(object.info) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.info !== undefined && (obj.info = message.info ? types_1.GroupPolicyInfo.toSDK(message.info) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupPolicyInfoResponse();
        if (object.info !== undefined && object.info !== null) {
            message.info = types_1.GroupPolicyInfo.fromAmino(object.info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.info = message.info ? types_1.GroupPolicyInfo.toAmino(message.info) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupPolicyInfoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupPolicyInfoResponse",
            value: exports.QueryGroupPolicyInfoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGroupPolicyInfoResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupPolicyInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoResponse",
            value: exports.QueryGroupPolicyInfoResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGroupPolicyInfoResponse.typeUrl, exports.QueryGroupPolicyInfoResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGroupPolicyInfoResponse.aminoType, exports.QueryGroupPolicyInfoResponse.typeUrl);
function createBaseQueryGroupMembersRequest() {
    return {
        groupId: BigInt(0),
        pagination: undefined
    };
}
exports.QueryGroupMembersRequest = {
    typeUrl: "/cosmos.group.v1.QueryGroupMembersRequest",
    aminoType: "cosmos-sdk/QueryGroupMembersRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryGroupMembersRequest.typeUrl || typeof o.groupId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryGroupMembersRequest.typeUrl || typeof o.group_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryGroupMembersRequest.typeUrl || typeof o.group_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.groupId !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupMembersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            groupId: (0, helpers_1.isSet)(object.groupId) ? BigInt(object.groupId.toString()) : BigInt(0),
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupMembersRequest();
        message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            groupId: object?.group_id,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.group_id = message.groupId;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupMembersRequest();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = BigInt(object.group_id);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.groupId ? message.groupId.toString() : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupMembersRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupMembersRequest",
            value: exports.QueryGroupMembersRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGroupMembersRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupMembersRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupMembersRequest",
            value: exports.QueryGroupMembersRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGroupMembersRequest.typeUrl, exports.QueryGroupMembersRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGroupMembersRequest.aminoType, exports.QueryGroupMembersRequest.typeUrl);
function createBaseQueryGroupMembersResponse() {
    return {
        members: [],
        pagination: undefined
    };
}
exports.QueryGroupMembersResponse = {
    typeUrl: "/cosmos.group.v1.QueryGroupMembersResponse",
    aminoType: "cosmos-sdk/QueryGroupMembersResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryGroupMembersResponse.typeUrl || Array.isArray(o.members) && (!o.members.length || types_1.GroupMember.is(o.members[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryGroupMembersResponse.typeUrl || Array.isArray(o.members) && (!o.members.length || types_1.GroupMember.isSDK(o.members[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryGroupMembersResponse.typeUrl || Array.isArray(o.members) && (!o.members.length || types_1.GroupMember.isAmino(o.members[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.members) {
            types_1.GroupMember.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupMembersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.members.push(types_1.GroupMember.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            members: Array.isArray(object?.members) ? object.members.map((e) => types_1.GroupMember.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.members) {
            obj.members = message.members.map(e => e ? types_1.GroupMember.toJSON(e) : undefined);
        }
        else {
            obj.members = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupMembersResponse();
        message.members = object.members?.map(e => types_1.GroupMember.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            members: Array.isArray(object?.members) ? object.members.map((e) => types_1.GroupMember.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.members) {
            obj.members = message.members.map(e => e ? types_1.GroupMember.toSDK(e) : undefined);
        }
        else {
            obj.members = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupMembersResponse();
        message.members = object.members?.map(e => types_1.GroupMember.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.members) {
            obj.members = message.members.map(e => e ? types_1.GroupMember.toAmino(e) : undefined);
        }
        else {
            obj.members = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupMembersResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupMembersResponse",
            value: exports.QueryGroupMembersResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGroupMembersResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupMembersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupMembersResponse",
            value: exports.QueryGroupMembersResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGroupMembersResponse.typeUrl, exports.QueryGroupMembersResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGroupMembersResponse.aminoType, exports.QueryGroupMembersResponse.typeUrl);
function createBaseQueryGroupsByAdminRequest() {
    return {
        admin: "",
        pagination: undefined
    };
}
exports.QueryGroupsByAdminRequest = {
    typeUrl: "/cosmos.group.v1.QueryGroupsByAdminRequest",
    aminoType: "cosmos-sdk/QueryGroupsByAdminRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryGroupsByAdminRequest.typeUrl || typeof o.admin === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryGroupsByAdminRequest.typeUrl || typeof o.admin === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryGroupsByAdminRequest.typeUrl || typeof o.admin === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupsByAdminRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            admin: (0, helpers_1.isSet)(object.admin) ? String(object.admin) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupsByAdminRequest();
        message.admin = object.admin ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            admin: object?.admin,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.admin = message.admin;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupsByAdminRequest();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupsByAdminRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupsByAdminRequest",
            value: exports.QueryGroupsByAdminRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGroupsByAdminRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupsByAdminRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupsByAdminRequest",
            value: exports.QueryGroupsByAdminRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGroupsByAdminRequest.typeUrl, exports.QueryGroupsByAdminRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGroupsByAdminRequest.aminoType, exports.QueryGroupsByAdminRequest.typeUrl);
function createBaseQueryGroupsByAdminResponse() {
    return {
        groups: [],
        pagination: undefined
    };
}
exports.QueryGroupsByAdminResponse = {
    typeUrl: "/cosmos.group.v1.QueryGroupsByAdminResponse",
    aminoType: "cosmos-sdk/QueryGroupsByAdminResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryGroupsByAdminResponse.typeUrl || Array.isArray(o.groups) && (!o.groups.length || types_1.GroupInfo.is(o.groups[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryGroupsByAdminResponse.typeUrl || Array.isArray(o.groups) && (!o.groups.length || types_1.GroupInfo.isSDK(o.groups[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryGroupsByAdminResponse.typeUrl || Array.isArray(o.groups) && (!o.groups.length || types_1.GroupInfo.isAmino(o.groups[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.groups) {
            types_1.GroupInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupsByAdminResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groups.push(types_1.GroupInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            groups: Array.isArray(object?.groups) ? object.groups.map((e) => types_1.GroupInfo.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? types_1.GroupInfo.toJSON(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupsByAdminResponse();
        message.groups = object.groups?.map(e => types_1.GroupInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            groups: Array.isArray(object?.groups) ? object.groups.map((e) => types_1.GroupInfo.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? types_1.GroupInfo.toSDK(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupsByAdminResponse();
        message.groups = object.groups?.map(e => types_1.GroupInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? types_1.GroupInfo.toAmino(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupsByAdminResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupsByAdminResponse",
            value: exports.QueryGroupsByAdminResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGroupsByAdminResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupsByAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupsByAdminResponse",
            value: exports.QueryGroupsByAdminResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGroupsByAdminResponse.typeUrl, exports.QueryGroupsByAdminResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGroupsByAdminResponse.aminoType, exports.QueryGroupsByAdminResponse.typeUrl);
function createBaseQueryGroupPoliciesByGroupRequest() {
    return {
        groupId: BigInt(0),
        pagination: undefined
    };
}
exports.QueryGroupPoliciesByGroupRequest = {
    typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupRequest",
    aminoType: "cosmos-sdk/QueryGroupPoliciesByGroupRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryGroupPoliciesByGroupRequest.typeUrl || typeof o.groupId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryGroupPoliciesByGroupRequest.typeUrl || typeof o.group_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryGroupPoliciesByGroupRequest.typeUrl || typeof o.group_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.groupId !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupPoliciesByGroupRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            groupId: (0, helpers_1.isSet)(object.groupId) ? BigInt(object.groupId.toString()) : BigInt(0),
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupPoliciesByGroupRequest();
        message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            groupId: object?.group_id,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.group_id = message.groupId;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupPoliciesByGroupRequest();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = BigInt(object.group_id);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.groupId ? message.groupId.toString() : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupPoliciesByGroupRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupPoliciesByGroupRequest",
            value: exports.QueryGroupPoliciesByGroupRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGroupPoliciesByGroupRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupPoliciesByGroupRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupRequest",
            value: exports.QueryGroupPoliciesByGroupRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGroupPoliciesByGroupRequest.typeUrl, exports.QueryGroupPoliciesByGroupRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGroupPoliciesByGroupRequest.aminoType, exports.QueryGroupPoliciesByGroupRequest.typeUrl);
function createBaseQueryGroupPoliciesByGroupResponse() {
    return {
        groupPolicies: [],
        pagination: undefined
    };
}
exports.QueryGroupPoliciesByGroupResponse = {
    typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupResponse",
    aminoType: "cosmos-sdk/QueryGroupPoliciesByGroupResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryGroupPoliciesByGroupResponse.typeUrl || Array.isArray(o.groupPolicies) && (!o.groupPolicies.length || types_1.GroupPolicyInfo.is(o.groupPolicies[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryGroupPoliciesByGroupResponse.typeUrl || Array.isArray(o.group_policies) && (!o.group_policies.length || types_1.GroupPolicyInfo.isSDK(o.group_policies[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryGroupPoliciesByGroupResponse.typeUrl || Array.isArray(o.group_policies) && (!o.group_policies.length || types_1.GroupPolicyInfo.isAmino(o.group_policies[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.groupPolicies) {
            types_1.GroupPolicyInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupPoliciesByGroupResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupPolicies.push(types_1.GroupPolicyInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            groupPolicies: Array.isArray(object?.groupPolicies) ? object.groupPolicies.map((e) => types_1.GroupPolicyInfo.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.groupPolicies) {
            obj.groupPolicies = message.groupPolicies.map(e => e ? types_1.GroupPolicyInfo.toJSON(e) : undefined);
        }
        else {
            obj.groupPolicies = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupPoliciesByGroupResponse();
        message.groupPolicies = object.groupPolicies?.map(e => types_1.GroupPolicyInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            groupPolicies: Array.isArray(object?.group_policies) ? object.group_policies.map((e) => types_1.GroupPolicyInfo.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.groupPolicies) {
            obj.group_policies = message.groupPolicies.map(e => e ? types_1.GroupPolicyInfo.toSDK(e) : undefined);
        }
        else {
            obj.group_policies = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupPoliciesByGroupResponse();
        message.groupPolicies = object.group_policies?.map(e => types_1.GroupPolicyInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.groupPolicies) {
            obj.group_policies = message.groupPolicies.map(e => e ? types_1.GroupPolicyInfo.toAmino(e) : undefined);
        }
        else {
            obj.group_policies = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupPoliciesByGroupResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupPoliciesByGroupResponse",
            value: exports.QueryGroupPoliciesByGroupResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGroupPoliciesByGroupResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupPoliciesByGroupResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupResponse",
            value: exports.QueryGroupPoliciesByGroupResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGroupPoliciesByGroupResponse.typeUrl, exports.QueryGroupPoliciesByGroupResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGroupPoliciesByGroupResponse.aminoType, exports.QueryGroupPoliciesByGroupResponse.typeUrl);
function createBaseQueryGroupPoliciesByAdminRequest() {
    return {
        admin: "",
        pagination: undefined
    };
}
exports.QueryGroupPoliciesByAdminRequest = {
    typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminRequest",
    aminoType: "cosmos-sdk/QueryGroupPoliciesByAdminRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryGroupPoliciesByAdminRequest.typeUrl || typeof o.admin === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryGroupPoliciesByAdminRequest.typeUrl || typeof o.admin === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryGroupPoliciesByAdminRequest.typeUrl || typeof o.admin === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupPoliciesByAdminRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            admin: (0, helpers_1.isSet)(object.admin) ? String(object.admin) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupPoliciesByAdminRequest();
        message.admin = object.admin ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            admin: object?.admin,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.admin = message.admin;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupPoliciesByAdminRequest();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupPoliciesByAdminRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupPoliciesByAdminRequest",
            value: exports.QueryGroupPoliciesByAdminRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGroupPoliciesByAdminRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupPoliciesByAdminRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminRequest",
            value: exports.QueryGroupPoliciesByAdminRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGroupPoliciesByAdminRequest.typeUrl, exports.QueryGroupPoliciesByAdminRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGroupPoliciesByAdminRequest.aminoType, exports.QueryGroupPoliciesByAdminRequest.typeUrl);
function createBaseQueryGroupPoliciesByAdminResponse() {
    return {
        groupPolicies: [],
        pagination: undefined
    };
}
exports.QueryGroupPoliciesByAdminResponse = {
    typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminResponse",
    aminoType: "cosmos-sdk/QueryGroupPoliciesByAdminResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryGroupPoliciesByAdminResponse.typeUrl || Array.isArray(o.groupPolicies) && (!o.groupPolicies.length || types_1.GroupPolicyInfo.is(o.groupPolicies[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryGroupPoliciesByAdminResponse.typeUrl || Array.isArray(o.group_policies) && (!o.group_policies.length || types_1.GroupPolicyInfo.isSDK(o.group_policies[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryGroupPoliciesByAdminResponse.typeUrl || Array.isArray(o.group_policies) && (!o.group_policies.length || types_1.GroupPolicyInfo.isAmino(o.group_policies[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.groupPolicies) {
            types_1.GroupPolicyInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupPoliciesByAdminResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupPolicies.push(types_1.GroupPolicyInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            groupPolicies: Array.isArray(object?.groupPolicies) ? object.groupPolicies.map((e) => types_1.GroupPolicyInfo.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.groupPolicies) {
            obj.groupPolicies = message.groupPolicies.map(e => e ? types_1.GroupPolicyInfo.toJSON(e) : undefined);
        }
        else {
            obj.groupPolicies = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupPoliciesByAdminResponse();
        message.groupPolicies = object.groupPolicies?.map(e => types_1.GroupPolicyInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            groupPolicies: Array.isArray(object?.group_policies) ? object.group_policies.map((e) => types_1.GroupPolicyInfo.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.groupPolicies) {
            obj.group_policies = message.groupPolicies.map(e => e ? types_1.GroupPolicyInfo.toSDK(e) : undefined);
        }
        else {
            obj.group_policies = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupPoliciesByAdminResponse();
        message.groupPolicies = object.group_policies?.map(e => types_1.GroupPolicyInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.groupPolicies) {
            obj.group_policies = message.groupPolicies.map(e => e ? types_1.GroupPolicyInfo.toAmino(e) : undefined);
        }
        else {
            obj.group_policies = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupPoliciesByAdminResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupPoliciesByAdminResponse",
            value: exports.QueryGroupPoliciesByAdminResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGroupPoliciesByAdminResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupPoliciesByAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminResponse",
            value: exports.QueryGroupPoliciesByAdminResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGroupPoliciesByAdminResponse.typeUrl, exports.QueryGroupPoliciesByAdminResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGroupPoliciesByAdminResponse.aminoType, exports.QueryGroupPoliciesByAdminResponse.typeUrl);
function createBaseQueryProposalRequest() {
    return {
        proposalId: BigInt(0)
    };
}
exports.QueryProposalRequest = {
    typeUrl: "/cosmos.group.v1.QueryProposalRequest",
    aminoType: "cosmos-sdk/QueryProposalRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryProposalRequest.typeUrl || typeof o.proposalId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryProposalRequest.typeUrl || typeof o.proposal_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryProposalRequest.typeUrl || typeof o.proposal_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            proposalId: (0, helpers_1.isSet)(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryProposalRequest();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            proposalId: object?.proposal_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.proposal_id = message.proposalId;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryProposalRequest();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryProposalRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryProposalRequest",
            value: exports.QueryProposalRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryProposalRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProposalRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryProposalRequest",
            value: exports.QueryProposalRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryProposalRequest.typeUrl, exports.QueryProposalRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryProposalRequest.aminoType, exports.QueryProposalRequest.typeUrl);
function createBaseQueryProposalResponse() {
    return {
        proposal: undefined
    };
}
exports.QueryProposalResponse = {
    typeUrl: "/cosmos.group.v1.QueryProposalResponse",
    aminoType: "cosmos-sdk/QueryProposalResponse",
    is(o) {
        return o && o.$typeUrl === exports.QueryProposalResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryProposalResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryProposalResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposal !== undefined) {
            types_1.Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal = types_1.Proposal.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            proposal: (0, helpers_1.isSet)(object.proposal) ? types_1.Proposal.fromJSON(object.proposal) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal !== undefined && (obj.proposal = message.proposal ? types_1.Proposal.toJSON(message.proposal) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryProposalResponse();
        message.proposal = object.proposal !== undefined && object.proposal !== null ? types_1.Proposal.fromPartial(object.proposal) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            proposal: object.proposal ? types_1.Proposal.fromSDK(object.proposal) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.proposal !== undefined && (obj.proposal = message.proposal ? types_1.Proposal.toSDK(message.proposal) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryProposalResponse();
        if (object.proposal !== undefined && object.proposal !== null) {
            message.proposal = types_1.Proposal.fromAmino(object.proposal);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal = message.proposal ? types_1.Proposal.toAmino(message.proposal) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryProposalResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryProposalResponse",
            value: exports.QueryProposalResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryProposalResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProposalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryProposalResponse",
            value: exports.QueryProposalResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryProposalResponse.typeUrl, exports.QueryProposalResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryProposalResponse.aminoType, exports.QueryProposalResponse.typeUrl);
function createBaseQueryProposalsByGroupPolicyRequest() {
    return {
        address: "",
        pagination: undefined
    };
}
exports.QueryProposalsByGroupPolicyRequest = {
    typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyRequest",
    aminoType: "cosmos-sdk/QueryProposalsByGroupPolicyRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryProposalsByGroupPolicyRequest.typeUrl || typeof o.address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryProposalsByGroupPolicyRequest.typeUrl || typeof o.address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryProposalsByGroupPolicyRequest.typeUrl || typeof o.address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalsByGroupPolicyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryProposalsByGroupPolicyRequest();
        message.address = object.address ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryProposalsByGroupPolicyRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryProposalsByGroupPolicyRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryProposalsByGroupPolicyRequest",
            value: exports.QueryProposalsByGroupPolicyRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryProposalsByGroupPolicyRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProposalsByGroupPolicyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyRequest",
            value: exports.QueryProposalsByGroupPolicyRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryProposalsByGroupPolicyRequest.typeUrl, exports.QueryProposalsByGroupPolicyRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryProposalsByGroupPolicyRequest.aminoType, exports.QueryProposalsByGroupPolicyRequest.typeUrl);
function createBaseQueryProposalsByGroupPolicyResponse() {
    return {
        proposals: [],
        pagination: undefined
    };
}
exports.QueryProposalsByGroupPolicyResponse = {
    typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyResponse",
    aminoType: "cosmos-sdk/QueryProposalsByGroupPolicyResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryProposalsByGroupPolicyResponse.typeUrl || Array.isArray(o.proposals) && (!o.proposals.length || types_1.Proposal.is(o.proposals[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryProposalsByGroupPolicyResponse.typeUrl || Array.isArray(o.proposals) && (!o.proposals.length || types_1.Proposal.isSDK(o.proposals[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryProposalsByGroupPolicyResponse.typeUrl || Array.isArray(o.proposals) && (!o.proposals.length || types_1.Proposal.isAmino(o.proposals[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.proposals) {
            types_1.Proposal.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalsByGroupPolicyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposals.push(types_1.Proposal.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            proposals: Array.isArray(object?.proposals) ? object.proposals.map((e) => types_1.Proposal.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? types_1.Proposal.toJSON(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryProposalsByGroupPolicyResponse();
        message.proposals = object.proposals?.map(e => types_1.Proposal.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            proposals: Array.isArray(object?.proposals) ? object.proposals.map((e) => types_1.Proposal.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? types_1.Proposal.toSDK(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryProposalsByGroupPolicyResponse();
        message.proposals = object.proposals?.map(e => types_1.Proposal.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? types_1.Proposal.toAmino(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryProposalsByGroupPolicyResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryProposalsByGroupPolicyResponse",
            value: exports.QueryProposalsByGroupPolicyResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryProposalsByGroupPolicyResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProposalsByGroupPolicyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyResponse",
            value: exports.QueryProposalsByGroupPolicyResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryProposalsByGroupPolicyResponse.typeUrl, exports.QueryProposalsByGroupPolicyResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryProposalsByGroupPolicyResponse.aminoType, exports.QueryProposalsByGroupPolicyResponse.typeUrl);
function createBaseQueryVoteByProposalVoterRequest() {
    return {
        proposalId: BigInt(0),
        voter: ""
    };
}
exports.QueryVoteByProposalVoterRequest = {
    typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterRequest",
    aminoType: "cosmos-sdk/QueryVoteByProposalVoterRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryVoteByProposalVoterRequest.typeUrl || typeof o.proposalId === "bigint" && typeof o.voter === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryVoteByProposalVoterRequest.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryVoteByProposalVoterRequest.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVoteByProposalVoterRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            proposalId: (0, helpers_1.isSet)(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
            voter: (0, helpers_1.isSet)(object.voter) ? String(object.voter) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
        message.voter !== undefined && (obj.voter = message.voter);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVoteByProposalVoterRequest();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.voter = object.voter ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            proposalId: object?.proposal_id,
            voter: object?.voter
        };
    },
    toSDK(message) {
        const obj = {};
        obj.proposal_id = message.proposalId;
        obj.voter = message.voter;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryVoteByProposalVoterRequest();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = object.voter;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
        obj.voter = message.voter;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryVoteByProposalVoterRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryVoteByProposalVoterRequest",
            value: exports.QueryVoteByProposalVoterRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryVoteByProposalVoterRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryVoteByProposalVoterRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterRequest",
            value: exports.QueryVoteByProposalVoterRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryVoteByProposalVoterRequest.typeUrl, exports.QueryVoteByProposalVoterRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryVoteByProposalVoterRequest.aminoType, exports.QueryVoteByProposalVoterRequest.typeUrl);
function createBaseQueryVoteByProposalVoterResponse() {
    return {
        vote: undefined
    };
}
exports.QueryVoteByProposalVoterResponse = {
    typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterResponse",
    aminoType: "cosmos-sdk/QueryVoteByProposalVoterResponse",
    is(o) {
        return o && o.$typeUrl === exports.QueryVoteByProposalVoterResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryVoteByProposalVoterResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryVoteByProposalVoterResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.vote !== undefined) {
            types_1.Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVoteByProposalVoterResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vote = types_1.Vote.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            vote: (0, helpers_1.isSet)(object.vote) ? types_1.Vote.fromJSON(object.vote) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.vote !== undefined && (obj.vote = message.vote ? types_1.Vote.toJSON(message.vote) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVoteByProposalVoterResponse();
        message.vote = object.vote !== undefined && object.vote !== null ? types_1.Vote.fromPartial(object.vote) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            vote: object.vote ? types_1.Vote.fromSDK(object.vote) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.vote !== undefined && (obj.vote = message.vote ? types_1.Vote.toSDK(message.vote) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryVoteByProposalVoterResponse();
        if (object.vote !== undefined && object.vote !== null) {
            message.vote = types_1.Vote.fromAmino(object.vote);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.vote = message.vote ? types_1.Vote.toAmino(message.vote) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryVoteByProposalVoterResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryVoteByProposalVoterResponse",
            value: exports.QueryVoteByProposalVoterResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryVoteByProposalVoterResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryVoteByProposalVoterResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterResponse",
            value: exports.QueryVoteByProposalVoterResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryVoteByProposalVoterResponse.typeUrl, exports.QueryVoteByProposalVoterResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryVoteByProposalVoterResponse.aminoType, exports.QueryVoteByProposalVoterResponse.typeUrl);
function createBaseQueryVotesByProposalRequest() {
    return {
        proposalId: BigInt(0),
        pagination: undefined
    };
}
exports.QueryVotesByProposalRequest = {
    typeUrl: "/cosmos.group.v1.QueryVotesByProposalRequest",
    aminoType: "cosmos-sdk/QueryVotesByProposalRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryVotesByProposalRequest.typeUrl || typeof o.proposalId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryVotesByProposalRequest.typeUrl || typeof o.proposal_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryVotesByProposalRequest.typeUrl || typeof o.proposal_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVotesByProposalRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            proposalId: (0, helpers_1.isSet)(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVotesByProposalRequest();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            proposalId: object?.proposal_id,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.proposal_id = message.proposalId;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryVotesByProposalRequest();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryVotesByProposalRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryVotesByProposalRequest",
            value: exports.QueryVotesByProposalRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryVotesByProposalRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryVotesByProposalRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryVotesByProposalRequest",
            value: exports.QueryVotesByProposalRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryVotesByProposalRequest.typeUrl, exports.QueryVotesByProposalRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryVotesByProposalRequest.aminoType, exports.QueryVotesByProposalRequest.typeUrl);
function createBaseQueryVotesByProposalResponse() {
    return {
        votes: [],
        pagination: undefined
    };
}
exports.QueryVotesByProposalResponse = {
    typeUrl: "/cosmos.group.v1.QueryVotesByProposalResponse",
    aminoType: "cosmos-sdk/QueryVotesByProposalResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryVotesByProposalResponse.typeUrl || Array.isArray(o.votes) && (!o.votes.length || types_1.Vote.is(o.votes[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryVotesByProposalResponse.typeUrl || Array.isArray(o.votes) && (!o.votes.length || types_1.Vote.isSDK(o.votes[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryVotesByProposalResponse.typeUrl || Array.isArray(o.votes) && (!o.votes.length || types_1.Vote.isAmino(o.votes[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.votes) {
            types_1.Vote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVotesByProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.votes.push(types_1.Vote.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => types_1.Vote.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? types_1.Vote.toJSON(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVotesByProposalResponse();
        message.votes = object.votes?.map(e => types_1.Vote.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => types_1.Vote.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? types_1.Vote.toSDK(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryVotesByProposalResponse();
        message.votes = object.votes?.map(e => types_1.Vote.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? types_1.Vote.toAmino(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryVotesByProposalResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryVotesByProposalResponse",
            value: exports.QueryVotesByProposalResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryVotesByProposalResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryVotesByProposalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryVotesByProposalResponse",
            value: exports.QueryVotesByProposalResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryVotesByProposalResponse.typeUrl, exports.QueryVotesByProposalResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryVotesByProposalResponse.aminoType, exports.QueryVotesByProposalResponse.typeUrl);
function createBaseQueryVotesByVoterRequest() {
    return {
        voter: "",
        pagination: undefined
    };
}
exports.QueryVotesByVoterRequest = {
    typeUrl: "/cosmos.group.v1.QueryVotesByVoterRequest",
    aminoType: "cosmos-sdk/QueryVotesByVoterRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryVotesByVoterRequest.typeUrl || typeof o.voter === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryVotesByVoterRequest.typeUrl || typeof o.voter === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryVotesByVoterRequest.typeUrl || typeof o.voter === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.voter !== "") {
            writer.uint32(10).string(message.voter);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVotesByVoterRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.voter = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            voter: (0, helpers_1.isSet)(object.voter) ? String(object.voter) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.voter !== undefined && (obj.voter = message.voter);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVotesByVoterRequest();
        message.voter = object.voter ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            voter: object?.voter,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.voter = message.voter;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryVotesByVoterRequest();
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = object.voter;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.voter = message.voter;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryVotesByVoterRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryVotesByVoterRequest",
            value: exports.QueryVotesByVoterRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryVotesByVoterRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryVotesByVoterRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryVotesByVoterRequest",
            value: exports.QueryVotesByVoterRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryVotesByVoterRequest.typeUrl, exports.QueryVotesByVoterRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryVotesByVoterRequest.aminoType, exports.QueryVotesByVoterRequest.typeUrl);
function createBaseQueryVotesByVoterResponse() {
    return {
        votes: [],
        pagination: undefined
    };
}
exports.QueryVotesByVoterResponse = {
    typeUrl: "/cosmos.group.v1.QueryVotesByVoterResponse",
    aminoType: "cosmos-sdk/QueryVotesByVoterResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryVotesByVoterResponse.typeUrl || Array.isArray(o.votes) && (!o.votes.length || types_1.Vote.is(o.votes[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryVotesByVoterResponse.typeUrl || Array.isArray(o.votes) && (!o.votes.length || types_1.Vote.isSDK(o.votes[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryVotesByVoterResponse.typeUrl || Array.isArray(o.votes) && (!o.votes.length || types_1.Vote.isAmino(o.votes[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.votes) {
            types_1.Vote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVotesByVoterResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.votes.push(types_1.Vote.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => types_1.Vote.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? types_1.Vote.toJSON(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVotesByVoterResponse();
        message.votes = object.votes?.map(e => types_1.Vote.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => types_1.Vote.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? types_1.Vote.toSDK(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryVotesByVoterResponse();
        message.votes = object.votes?.map(e => types_1.Vote.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? types_1.Vote.toAmino(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryVotesByVoterResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryVotesByVoterResponse",
            value: exports.QueryVotesByVoterResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryVotesByVoterResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryVotesByVoterResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryVotesByVoterResponse",
            value: exports.QueryVotesByVoterResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryVotesByVoterResponse.typeUrl, exports.QueryVotesByVoterResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryVotesByVoterResponse.aminoType, exports.QueryVotesByVoterResponse.typeUrl);
function createBaseQueryGroupsByMemberRequest() {
    return {
        address: "",
        pagination: undefined
    };
}
exports.QueryGroupsByMemberRequest = {
    typeUrl: "/cosmos.group.v1.QueryGroupsByMemberRequest",
    aminoType: "cosmos-sdk/QueryGroupsByMemberRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryGroupsByMemberRequest.typeUrl || typeof o.address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryGroupsByMemberRequest.typeUrl || typeof o.address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryGroupsByMemberRequest.typeUrl || typeof o.address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupsByMemberRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupsByMemberRequest();
        message.address = object.address ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupsByMemberRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupsByMemberRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupsByMemberRequest",
            value: exports.QueryGroupsByMemberRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGroupsByMemberRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupsByMemberRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupsByMemberRequest",
            value: exports.QueryGroupsByMemberRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGroupsByMemberRequest.typeUrl, exports.QueryGroupsByMemberRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGroupsByMemberRequest.aminoType, exports.QueryGroupsByMemberRequest.typeUrl);
function createBaseQueryGroupsByMemberResponse() {
    return {
        groups: [],
        pagination: undefined
    };
}
exports.QueryGroupsByMemberResponse = {
    typeUrl: "/cosmos.group.v1.QueryGroupsByMemberResponse",
    aminoType: "cosmos-sdk/QueryGroupsByMemberResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryGroupsByMemberResponse.typeUrl || Array.isArray(o.groups) && (!o.groups.length || types_1.GroupInfo.is(o.groups[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryGroupsByMemberResponse.typeUrl || Array.isArray(o.groups) && (!o.groups.length || types_1.GroupInfo.isSDK(o.groups[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryGroupsByMemberResponse.typeUrl || Array.isArray(o.groups) && (!o.groups.length || types_1.GroupInfo.isAmino(o.groups[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.groups) {
            types_1.GroupInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupsByMemberResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groups.push(types_1.GroupInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            groups: Array.isArray(object?.groups) ? object.groups.map((e) => types_1.GroupInfo.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? types_1.GroupInfo.toJSON(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupsByMemberResponse();
        message.groups = object.groups?.map(e => types_1.GroupInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            groups: Array.isArray(object?.groups) ? object.groups.map((e) => types_1.GroupInfo.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? types_1.GroupInfo.toSDK(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupsByMemberResponse();
        message.groups = object.groups?.map(e => types_1.GroupInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? types_1.GroupInfo.toAmino(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupsByMemberResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupsByMemberResponse",
            value: exports.QueryGroupsByMemberResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGroupsByMemberResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupsByMemberResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupsByMemberResponse",
            value: exports.QueryGroupsByMemberResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGroupsByMemberResponse.typeUrl, exports.QueryGroupsByMemberResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGroupsByMemberResponse.aminoType, exports.QueryGroupsByMemberResponse.typeUrl);
function createBaseQueryTallyResultRequest() {
    return {
        proposalId: BigInt(0)
    };
}
exports.QueryTallyResultRequest = {
    typeUrl: "/cosmos.group.v1.QueryTallyResultRequest",
    aminoType: "cosmos-sdk/QueryTallyResultRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryTallyResultRequest.typeUrl || typeof o.proposalId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryTallyResultRequest.typeUrl || typeof o.proposal_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryTallyResultRequest.typeUrl || typeof o.proposal_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTallyResultRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            proposalId: (0, helpers_1.isSet)(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTallyResultRequest();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            proposalId: object?.proposal_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.proposal_id = message.proposalId;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryTallyResultRequest();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTallyResultRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTallyResultRequest",
            value: exports.QueryTallyResultRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTallyResultRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTallyResultRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryTallyResultRequest",
            value: exports.QueryTallyResultRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryTallyResultRequest.typeUrl, exports.QueryTallyResultRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryTallyResultRequest.aminoType, exports.QueryTallyResultRequest.typeUrl);
function createBaseQueryTallyResultResponse() {
    return {
        tally: types_1.TallyResult.fromPartial({})
    };
}
exports.QueryTallyResultResponse = {
    typeUrl: "/cosmos.group.v1.QueryTallyResultResponse",
    aminoType: "cosmos-sdk/QueryTallyResultResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryTallyResultResponse.typeUrl || types_1.TallyResult.is(o.tally));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryTallyResultResponse.typeUrl || types_1.TallyResult.isSDK(o.tally));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryTallyResultResponse.typeUrl || types_1.TallyResult.isAmino(o.tally));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tally !== undefined) {
            types_1.TallyResult.encode(message.tally, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTallyResultResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tally = types_1.TallyResult.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            tally: (0, helpers_1.isSet)(object.tally) ? types_1.TallyResult.fromJSON(object.tally) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.tally !== undefined && (obj.tally = message.tally ? types_1.TallyResult.toJSON(message.tally) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTallyResultResponse();
        message.tally = object.tally !== undefined && object.tally !== null ? types_1.TallyResult.fromPartial(object.tally) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            tally: object.tally ? types_1.TallyResult.fromSDK(object.tally) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.tally !== undefined && (obj.tally = message.tally ? types_1.TallyResult.toSDK(message.tally) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryTallyResultResponse();
        if (object.tally !== undefined && object.tally !== null) {
            message.tally = types_1.TallyResult.fromAmino(object.tally);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tally = message.tally ? types_1.TallyResult.toAmino(message.tally) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTallyResultResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTallyResultResponse",
            value: exports.QueryTallyResultResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTallyResultResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTallyResultResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryTallyResultResponse",
            value: exports.QueryTallyResultResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryTallyResultResponse.typeUrl, exports.QueryTallyResultResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryTallyResultResponse.aminoType, exports.QueryTallyResultResponse.typeUrl);
