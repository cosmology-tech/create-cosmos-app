"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseListSnapshots = exports.ResponseCommit = exports.ResponseEndBlock = exports.ResponseDeliverTx = exports.ResponseCheckTx = exports.ResponseBeginBlock = exports.ResponseQuery = exports.ResponseInitChain = exports.ResponseSetOption = exports.ResponseInfo = exports.ResponseFlush = exports.ResponseEcho = exports.ResponseException = exports.Response = exports.RequestApplySnapshotChunk = exports.RequestLoadSnapshotChunk = exports.RequestOfferSnapshot = exports.RequestListSnapshots = exports.RequestCommit = exports.RequestEndBlock = exports.RequestDeliverTx = exports.RequestCheckTx = exports.RequestBeginBlock = exports.RequestQuery = exports.RequestInitChain = exports.RequestSetOption = exports.RequestInfo = exports.RequestFlush = exports.RequestEcho = exports.Request = exports.evidenceTypeToJSON = exports.evidenceTypeFromJSON = exports.EvidenceTypeAmino = exports.EvidenceTypeSDKType = exports.EvidenceType = exports.responseApplySnapshotChunk_ResultToJSON = exports.responseApplySnapshotChunk_ResultFromJSON = exports.ResponseApplySnapshotChunk_ResultAmino = exports.ResponseApplySnapshotChunk_ResultSDKType = exports.ResponseApplySnapshotChunk_Result = exports.responseOfferSnapshot_ResultToJSON = exports.responseOfferSnapshot_ResultFromJSON = exports.ResponseOfferSnapshot_ResultAmino = exports.ResponseOfferSnapshot_ResultSDKType = exports.ResponseOfferSnapshot_Result = exports.checkTxTypeToJSON = exports.checkTxTypeFromJSON = exports.CheckTxTypeAmino = exports.CheckTxTypeSDKType = exports.CheckTxType = void 0;
exports.Snapshot = exports.Evidence = exports.VoteInfo = exports.ValidatorUpdate = exports.Validator = exports.TxResult = exports.EventAttribute = exports.Event = exports.LastCommitInfo = exports.BlockParams = exports.ConsensusParams = exports.ResponseApplySnapshotChunk = exports.ResponseLoadSnapshotChunk = exports.ResponseOfferSnapshot = void 0;
const timestamp_1 = require("../../google/protobuf/timestamp");
const types_1 = require("../types/types");
const proof_1 = require("../crypto/proof");
const params_1 = require("../types/params");
const keys_1 = require("../crypto/keys");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
const registry_1 = require("../../registry");
var CheckTxType;
(function (CheckTxType) {
    CheckTxType[CheckTxType["NEW"] = 0] = "NEW";
    CheckTxType[CheckTxType["RECHECK"] = 1] = "RECHECK";
    CheckTxType[CheckTxType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CheckTxType || (exports.CheckTxType = CheckTxType = {}));
exports.CheckTxTypeSDKType = CheckTxType;
exports.CheckTxTypeAmino = CheckTxType;
function checkTxTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "NEW":
            return CheckTxType.NEW;
        case 1:
        case "RECHECK":
            return CheckTxType.RECHECK;
        case -1:
        case "UNRECOGNIZED":
        default:
            return CheckTxType.UNRECOGNIZED;
    }
}
exports.checkTxTypeFromJSON = checkTxTypeFromJSON;
function checkTxTypeToJSON(object) {
    switch (object) {
        case CheckTxType.NEW:
            return "NEW";
        case CheckTxType.RECHECK:
            return "RECHECK";
        case CheckTxType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.checkTxTypeToJSON = checkTxTypeToJSON;
var ResponseOfferSnapshot_Result;
(function (ResponseOfferSnapshot_Result) {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["UNKNOWN"] = 0] = "UNKNOWN";
    /** ACCEPT - Snapshot accepted, apply chunks */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["ACCEPT"] = 1] = "ACCEPT";
    /** ABORT - Abort all snapshot restoration */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["ABORT"] = 2] = "ABORT";
    /** REJECT - Reject this specific snapshot, try others */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT"] = 3] = "REJECT";
    /** REJECT_FORMAT - Reject all snapshots of this format, try others */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT_FORMAT"] = 4] = "REJECT_FORMAT";
    /** REJECT_SENDER - Reject all snapshots from the sender(s), try others */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT_SENDER"] = 5] = "REJECT_SENDER";
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseOfferSnapshot_Result || (exports.ResponseOfferSnapshot_Result = ResponseOfferSnapshot_Result = {}));
exports.ResponseOfferSnapshot_ResultSDKType = ResponseOfferSnapshot_Result;
exports.ResponseOfferSnapshot_ResultAmino = ResponseOfferSnapshot_Result;
function responseOfferSnapshot_ResultFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return ResponseOfferSnapshot_Result.UNKNOWN;
        case 1:
        case "ACCEPT":
            return ResponseOfferSnapshot_Result.ACCEPT;
        case 2:
        case "ABORT":
            return ResponseOfferSnapshot_Result.ABORT;
        case 3:
        case "REJECT":
            return ResponseOfferSnapshot_Result.REJECT;
        case 4:
        case "REJECT_FORMAT":
            return ResponseOfferSnapshot_Result.REJECT_FORMAT;
        case 5:
        case "REJECT_SENDER":
            return ResponseOfferSnapshot_Result.REJECT_SENDER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResponseOfferSnapshot_Result.UNRECOGNIZED;
    }
}
exports.responseOfferSnapshot_ResultFromJSON = responseOfferSnapshot_ResultFromJSON;
function responseOfferSnapshot_ResultToJSON(object) {
    switch (object) {
        case ResponseOfferSnapshot_Result.UNKNOWN:
            return "UNKNOWN";
        case ResponseOfferSnapshot_Result.ACCEPT:
            return "ACCEPT";
        case ResponseOfferSnapshot_Result.ABORT:
            return "ABORT";
        case ResponseOfferSnapshot_Result.REJECT:
            return "REJECT";
        case ResponseOfferSnapshot_Result.REJECT_FORMAT:
            return "REJECT_FORMAT";
        case ResponseOfferSnapshot_Result.REJECT_SENDER:
            return "REJECT_SENDER";
        case ResponseOfferSnapshot_Result.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.responseOfferSnapshot_ResultToJSON = responseOfferSnapshot_ResultToJSON;
var ResponseApplySnapshotChunk_Result;
(function (ResponseApplySnapshotChunk_Result) {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["UNKNOWN"] = 0] = "UNKNOWN";
    /** ACCEPT - Chunk successfully accepted */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["ACCEPT"] = 1] = "ACCEPT";
    /** ABORT - Abort all snapshot restoration */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["ABORT"] = 2] = "ABORT";
    /** RETRY - Retry chunk (combine with refetch and reject) */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["RETRY"] = 3] = "RETRY";
    /** RETRY_SNAPSHOT - Retry snapshot (combine with refetch and reject) */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["RETRY_SNAPSHOT"] = 4] = "RETRY_SNAPSHOT";
    /** REJECT_SNAPSHOT - Reject this snapshot, try others */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["REJECT_SNAPSHOT"] = 5] = "REJECT_SNAPSHOT";
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseApplySnapshotChunk_Result || (exports.ResponseApplySnapshotChunk_Result = ResponseApplySnapshotChunk_Result = {}));
exports.ResponseApplySnapshotChunk_ResultSDKType = ResponseApplySnapshotChunk_Result;
exports.ResponseApplySnapshotChunk_ResultAmino = ResponseApplySnapshotChunk_Result;
function responseApplySnapshotChunk_ResultFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return ResponseApplySnapshotChunk_Result.UNKNOWN;
        case 1:
        case "ACCEPT":
            return ResponseApplySnapshotChunk_Result.ACCEPT;
        case 2:
        case "ABORT":
            return ResponseApplySnapshotChunk_Result.ABORT;
        case 3:
        case "RETRY":
            return ResponseApplySnapshotChunk_Result.RETRY;
        case 4:
        case "RETRY_SNAPSHOT":
            return ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT;
        case 5:
        case "REJECT_SNAPSHOT":
            return ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResponseApplySnapshotChunk_Result.UNRECOGNIZED;
    }
}
exports.responseApplySnapshotChunk_ResultFromJSON = responseApplySnapshotChunk_ResultFromJSON;
function responseApplySnapshotChunk_ResultToJSON(object) {
    switch (object) {
        case ResponseApplySnapshotChunk_Result.UNKNOWN:
            return "UNKNOWN";
        case ResponseApplySnapshotChunk_Result.ACCEPT:
            return "ACCEPT";
        case ResponseApplySnapshotChunk_Result.ABORT:
            return "ABORT";
        case ResponseApplySnapshotChunk_Result.RETRY:
            return "RETRY";
        case ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT:
            return "RETRY_SNAPSHOT";
        case ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT:
            return "REJECT_SNAPSHOT";
        case ResponseApplySnapshotChunk_Result.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.responseApplySnapshotChunk_ResultToJSON = responseApplySnapshotChunk_ResultToJSON;
var EvidenceType;
(function (EvidenceType) {
    EvidenceType[EvidenceType["UNKNOWN"] = 0] = "UNKNOWN";
    EvidenceType[EvidenceType["DUPLICATE_VOTE"] = 1] = "DUPLICATE_VOTE";
    EvidenceType[EvidenceType["LIGHT_CLIENT_ATTACK"] = 2] = "LIGHT_CLIENT_ATTACK";
    EvidenceType[EvidenceType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(EvidenceType || (exports.EvidenceType = EvidenceType = {}));
exports.EvidenceTypeSDKType = EvidenceType;
exports.EvidenceTypeAmino = EvidenceType;
function evidenceTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return EvidenceType.UNKNOWN;
        case 1:
        case "DUPLICATE_VOTE":
            return EvidenceType.DUPLICATE_VOTE;
        case 2:
        case "LIGHT_CLIENT_ATTACK":
            return EvidenceType.LIGHT_CLIENT_ATTACK;
        case -1:
        case "UNRECOGNIZED":
        default:
            return EvidenceType.UNRECOGNIZED;
    }
}
exports.evidenceTypeFromJSON = evidenceTypeFromJSON;
function evidenceTypeToJSON(object) {
    switch (object) {
        case EvidenceType.UNKNOWN:
            return "UNKNOWN";
        case EvidenceType.DUPLICATE_VOTE:
            return "DUPLICATE_VOTE";
        case EvidenceType.LIGHT_CLIENT_ATTACK:
            return "LIGHT_CLIENT_ATTACK";
        case EvidenceType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.evidenceTypeToJSON = evidenceTypeToJSON;
function createBaseRequest() {
    return {
        echo: undefined,
        flush: undefined,
        info: undefined,
        setOption: undefined,
        initChain: undefined,
        query: undefined,
        beginBlock: undefined,
        checkTx: undefined,
        deliverTx: undefined,
        endBlock: undefined,
        commit: undefined,
        listSnapshots: undefined,
        offerSnapshot: undefined,
        loadSnapshotChunk: undefined,
        applySnapshotChunk: undefined
    };
}
exports.Request = {
    typeUrl: "/tendermint.abci.Request",
    is(o) {
        return o && o.$typeUrl === exports.Request.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.Request.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.Request.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.echo !== undefined) {
            exports.RequestEcho.encode(message.echo, writer.uint32(10).fork()).ldelim();
        }
        if (message.flush !== undefined) {
            exports.RequestFlush.encode(message.flush, writer.uint32(18).fork()).ldelim();
        }
        if (message.info !== undefined) {
            exports.RequestInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
        }
        if (message.setOption !== undefined) {
            exports.RequestSetOption.encode(message.setOption, writer.uint32(34).fork()).ldelim();
        }
        if (message.initChain !== undefined) {
            exports.RequestInitChain.encode(message.initChain, writer.uint32(42).fork()).ldelim();
        }
        if (message.query !== undefined) {
            exports.RequestQuery.encode(message.query, writer.uint32(50).fork()).ldelim();
        }
        if (message.beginBlock !== undefined) {
            exports.RequestBeginBlock.encode(message.beginBlock, writer.uint32(58).fork()).ldelim();
        }
        if (message.checkTx !== undefined) {
            exports.RequestCheckTx.encode(message.checkTx, writer.uint32(66).fork()).ldelim();
        }
        if (message.deliverTx !== undefined) {
            exports.RequestDeliverTx.encode(message.deliverTx, writer.uint32(74).fork()).ldelim();
        }
        if (message.endBlock !== undefined) {
            exports.RequestEndBlock.encode(message.endBlock, writer.uint32(82).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            exports.RequestCommit.encode(message.commit, writer.uint32(90).fork()).ldelim();
        }
        if (message.listSnapshots !== undefined) {
            exports.RequestListSnapshots.encode(message.listSnapshots, writer.uint32(98).fork()).ldelim();
        }
        if (message.offerSnapshot !== undefined) {
            exports.RequestOfferSnapshot.encode(message.offerSnapshot, writer.uint32(106).fork()).ldelim();
        }
        if (message.loadSnapshotChunk !== undefined) {
            exports.RequestLoadSnapshotChunk.encode(message.loadSnapshotChunk, writer.uint32(114).fork()).ldelim();
        }
        if (message.applySnapshotChunk !== undefined) {
            exports.RequestApplySnapshotChunk.encode(message.applySnapshotChunk, writer.uint32(122).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.echo = exports.RequestEcho.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.flush = exports.RequestFlush.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.info = exports.RequestInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.setOption = exports.RequestSetOption.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.initChain = exports.RequestInitChain.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.query = exports.RequestQuery.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.beginBlock = exports.RequestBeginBlock.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.checkTx = exports.RequestCheckTx.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.deliverTx = exports.RequestDeliverTx.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.endBlock = exports.RequestEndBlock.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.commit = exports.RequestCommit.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.listSnapshots = exports.RequestListSnapshots.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.offerSnapshot = exports.RequestOfferSnapshot.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.loadSnapshotChunk = exports.RequestLoadSnapshotChunk.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.applySnapshotChunk = exports.RequestApplySnapshotChunk.decode(reader, reader.uint32());
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
            echo: (0, helpers_1.isSet)(object.echo) ? exports.RequestEcho.fromJSON(object.echo) : undefined,
            flush: (0, helpers_1.isSet)(object.flush) ? exports.RequestFlush.fromJSON(object.flush) : undefined,
            info: (0, helpers_1.isSet)(object.info) ? exports.RequestInfo.fromJSON(object.info) : undefined,
            setOption: (0, helpers_1.isSet)(object.setOption) ? exports.RequestSetOption.fromJSON(object.setOption) : undefined,
            initChain: (0, helpers_1.isSet)(object.initChain) ? exports.RequestInitChain.fromJSON(object.initChain) : undefined,
            query: (0, helpers_1.isSet)(object.query) ? exports.RequestQuery.fromJSON(object.query) : undefined,
            beginBlock: (0, helpers_1.isSet)(object.beginBlock) ? exports.RequestBeginBlock.fromJSON(object.beginBlock) : undefined,
            checkTx: (0, helpers_1.isSet)(object.checkTx) ? exports.RequestCheckTx.fromJSON(object.checkTx) : undefined,
            deliverTx: (0, helpers_1.isSet)(object.deliverTx) ? exports.RequestDeliverTx.fromJSON(object.deliverTx) : undefined,
            endBlock: (0, helpers_1.isSet)(object.endBlock) ? exports.RequestEndBlock.fromJSON(object.endBlock) : undefined,
            commit: (0, helpers_1.isSet)(object.commit) ? exports.RequestCommit.fromJSON(object.commit) : undefined,
            listSnapshots: (0, helpers_1.isSet)(object.listSnapshots) ? exports.RequestListSnapshots.fromJSON(object.listSnapshots) : undefined,
            offerSnapshot: (0, helpers_1.isSet)(object.offerSnapshot) ? exports.RequestOfferSnapshot.fromJSON(object.offerSnapshot) : undefined,
            loadSnapshotChunk: (0, helpers_1.isSet)(object.loadSnapshotChunk) ? exports.RequestLoadSnapshotChunk.fromJSON(object.loadSnapshotChunk) : undefined,
            applySnapshotChunk: (0, helpers_1.isSet)(object.applySnapshotChunk) ? exports.RequestApplySnapshotChunk.fromJSON(object.applySnapshotChunk) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.echo !== undefined && (obj.echo = message.echo ? exports.RequestEcho.toJSON(message.echo) : undefined);
        message.flush !== undefined && (obj.flush = message.flush ? exports.RequestFlush.toJSON(message.flush) : undefined);
        message.info !== undefined && (obj.info = message.info ? exports.RequestInfo.toJSON(message.info) : undefined);
        message.setOption !== undefined && (obj.setOption = message.setOption ? exports.RequestSetOption.toJSON(message.setOption) : undefined);
        message.initChain !== undefined && (obj.initChain = message.initChain ? exports.RequestInitChain.toJSON(message.initChain) : undefined);
        message.query !== undefined && (obj.query = message.query ? exports.RequestQuery.toJSON(message.query) : undefined);
        message.beginBlock !== undefined && (obj.beginBlock = message.beginBlock ? exports.RequestBeginBlock.toJSON(message.beginBlock) : undefined);
        message.checkTx !== undefined && (obj.checkTx = message.checkTx ? exports.RequestCheckTx.toJSON(message.checkTx) : undefined);
        message.deliverTx !== undefined && (obj.deliverTx = message.deliverTx ? exports.RequestDeliverTx.toJSON(message.deliverTx) : undefined);
        message.endBlock !== undefined && (obj.endBlock = message.endBlock ? exports.RequestEndBlock.toJSON(message.endBlock) : undefined);
        message.commit !== undefined && (obj.commit = message.commit ? exports.RequestCommit.toJSON(message.commit) : undefined);
        message.listSnapshots !== undefined && (obj.listSnapshots = message.listSnapshots ? exports.RequestListSnapshots.toJSON(message.listSnapshots) : undefined);
        message.offerSnapshot !== undefined && (obj.offerSnapshot = message.offerSnapshot ? exports.RequestOfferSnapshot.toJSON(message.offerSnapshot) : undefined);
        message.loadSnapshotChunk !== undefined && (obj.loadSnapshotChunk = message.loadSnapshotChunk ? exports.RequestLoadSnapshotChunk.toJSON(message.loadSnapshotChunk) : undefined);
        message.applySnapshotChunk !== undefined && (obj.applySnapshotChunk = message.applySnapshotChunk ? exports.RequestApplySnapshotChunk.toJSON(message.applySnapshotChunk) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequest();
        message.echo = object.echo !== undefined && object.echo !== null ? exports.RequestEcho.fromPartial(object.echo) : undefined;
        message.flush = object.flush !== undefined && object.flush !== null ? exports.RequestFlush.fromPartial(object.flush) : undefined;
        message.info = object.info !== undefined && object.info !== null ? exports.RequestInfo.fromPartial(object.info) : undefined;
        message.setOption = object.setOption !== undefined && object.setOption !== null ? exports.RequestSetOption.fromPartial(object.setOption) : undefined;
        message.initChain = object.initChain !== undefined && object.initChain !== null ? exports.RequestInitChain.fromPartial(object.initChain) : undefined;
        message.query = object.query !== undefined && object.query !== null ? exports.RequestQuery.fromPartial(object.query) : undefined;
        message.beginBlock = object.beginBlock !== undefined && object.beginBlock !== null ? exports.RequestBeginBlock.fromPartial(object.beginBlock) : undefined;
        message.checkTx = object.checkTx !== undefined && object.checkTx !== null ? exports.RequestCheckTx.fromPartial(object.checkTx) : undefined;
        message.deliverTx = object.deliverTx !== undefined && object.deliverTx !== null ? exports.RequestDeliverTx.fromPartial(object.deliverTx) : undefined;
        message.endBlock = object.endBlock !== undefined && object.endBlock !== null ? exports.RequestEndBlock.fromPartial(object.endBlock) : undefined;
        message.commit = object.commit !== undefined && object.commit !== null ? exports.RequestCommit.fromPartial(object.commit) : undefined;
        message.listSnapshots = object.listSnapshots !== undefined && object.listSnapshots !== null ? exports.RequestListSnapshots.fromPartial(object.listSnapshots) : undefined;
        message.offerSnapshot = object.offerSnapshot !== undefined && object.offerSnapshot !== null ? exports.RequestOfferSnapshot.fromPartial(object.offerSnapshot) : undefined;
        message.loadSnapshotChunk = object.loadSnapshotChunk !== undefined && object.loadSnapshotChunk !== null ? exports.RequestLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk) : undefined;
        message.applySnapshotChunk = object.applySnapshotChunk !== undefined && object.applySnapshotChunk !== null ? exports.RequestApplySnapshotChunk.fromPartial(object.applySnapshotChunk) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            echo: object.echo ? exports.RequestEcho.fromSDK(object.echo) : undefined,
            flush: object.flush ? exports.RequestFlush.fromSDK(object.flush) : undefined,
            info: object.info ? exports.RequestInfo.fromSDK(object.info) : undefined,
            setOption: object.set_option ? exports.RequestSetOption.fromSDK(object.set_option) : undefined,
            initChain: object.init_chain ? exports.RequestInitChain.fromSDK(object.init_chain) : undefined,
            query: object.query ? exports.RequestQuery.fromSDK(object.query) : undefined,
            beginBlock: object.begin_block ? exports.RequestBeginBlock.fromSDK(object.begin_block) : undefined,
            checkTx: object.check_tx ? exports.RequestCheckTx.fromSDK(object.check_tx) : undefined,
            deliverTx: object.deliver_tx ? exports.RequestDeliverTx.fromSDK(object.deliver_tx) : undefined,
            endBlock: object.end_block ? exports.RequestEndBlock.fromSDK(object.end_block) : undefined,
            commit: object.commit ? exports.RequestCommit.fromSDK(object.commit) : undefined,
            listSnapshots: object.list_snapshots ? exports.RequestListSnapshots.fromSDK(object.list_snapshots) : undefined,
            offerSnapshot: object.offer_snapshot ? exports.RequestOfferSnapshot.fromSDK(object.offer_snapshot) : undefined,
            loadSnapshotChunk: object.load_snapshot_chunk ? exports.RequestLoadSnapshotChunk.fromSDK(object.load_snapshot_chunk) : undefined,
            applySnapshotChunk: object.apply_snapshot_chunk ? exports.RequestApplySnapshotChunk.fromSDK(object.apply_snapshot_chunk) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.echo !== undefined && (obj.echo = message.echo ? exports.RequestEcho.toSDK(message.echo) : undefined);
        message.flush !== undefined && (obj.flush = message.flush ? exports.RequestFlush.toSDK(message.flush) : undefined);
        message.info !== undefined && (obj.info = message.info ? exports.RequestInfo.toSDK(message.info) : undefined);
        message.setOption !== undefined && (obj.set_option = message.setOption ? exports.RequestSetOption.toSDK(message.setOption) : undefined);
        message.initChain !== undefined && (obj.init_chain = message.initChain ? exports.RequestInitChain.toSDK(message.initChain) : undefined);
        message.query !== undefined && (obj.query = message.query ? exports.RequestQuery.toSDK(message.query) : undefined);
        message.beginBlock !== undefined && (obj.begin_block = message.beginBlock ? exports.RequestBeginBlock.toSDK(message.beginBlock) : undefined);
        message.checkTx !== undefined && (obj.check_tx = message.checkTx ? exports.RequestCheckTx.toSDK(message.checkTx) : undefined);
        message.deliverTx !== undefined && (obj.deliver_tx = message.deliverTx ? exports.RequestDeliverTx.toSDK(message.deliverTx) : undefined);
        message.endBlock !== undefined && (obj.end_block = message.endBlock ? exports.RequestEndBlock.toSDK(message.endBlock) : undefined);
        message.commit !== undefined && (obj.commit = message.commit ? exports.RequestCommit.toSDK(message.commit) : undefined);
        message.listSnapshots !== undefined && (obj.list_snapshots = message.listSnapshots ? exports.RequestListSnapshots.toSDK(message.listSnapshots) : undefined);
        message.offerSnapshot !== undefined && (obj.offer_snapshot = message.offerSnapshot ? exports.RequestOfferSnapshot.toSDK(message.offerSnapshot) : undefined);
        message.loadSnapshotChunk !== undefined && (obj.load_snapshot_chunk = message.loadSnapshotChunk ? exports.RequestLoadSnapshotChunk.toSDK(message.loadSnapshotChunk) : undefined);
        message.applySnapshotChunk !== undefined && (obj.apply_snapshot_chunk = message.applySnapshotChunk ? exports.RequestApplySnapshotChunk.toSDK(message.applySnapshotChunk) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseRequest();
        if (object.echo !== undefined && object.echo !== null) {
            message.echo = exports.RequestEcho.fromAmino(object.echo);
        }
        if (object.flush !== undefined && object.flush !== null) {
            message.flush = exports.RequestFlush.fromAmino(object.flush);
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = exports.RequestInfo.fromAmino(object.info);
        }
        if (object.set_option !== undefined && object.set_option !== null) {
            message.setOption = exports.RequestSetOption.fromAmino(object.set_option);
        }
        if (object.init_chain !== undefined && object.init_chain !== null) {
            message.initChain = exports.RequestInitChain.fromAmino(object.init_chain);
        }
        if (object.query !== undefined && object.query !== null) {
            message.query = exports.RequestQuery.fromAmino(object.query);
        }
        if (object.begin_block !== undefined && object.begin_block !== null) {
            message.beginBlock = exports.RequestBeginBlock.fromAmino(object.begin_block);
        }
        if (object.check_tx !== undefined && object.check_tx !== null) {
            message.checkTx = exports.RequestCheckTx.fromAmino(object.check_tx);
        }
        if (object.deliver_tx !== undefined && object.deliver_tx !== null) {
            message.deliverTx = exports.RequestDeliverTx.fromAmino(object.deliver_tx);
        }
        if (object.end_block !== undefined && object.end_block !== null) {
            message.endBlock = exports.RequestEndBlock.fromAmino(object.end_block);
        }
        if (object.commit !== undefined && object.commit !== null) {
            message.commit = exports.RequestCommit.fromAmino(object.commit);
        }
        if (object.list_snapshots !== undefined && object.list_snapshots !== null) {
            message.listSnapshots = exports.RequestListSnapshots.fromAmino(object.list_snapshots);
        }
        if (object.offer_snapshot !== undefined && object.offer_snapshot !== null) {
            message.offerSnapshot = exports.RequestOfferSnapshot.fromAmino(object.offer_snapshot);
        }
        if (object.load_snapshot_chunk !== undefined && object.load_snapshot_chunk !== null) {
            message.loadSnapshotChunk = exports.RequestLoadSnapshotChunk.fromAmino(object.load_snapshot_chunk);
        }
        if (object.apply_snapshot_chunk !== undefined && object.apply_snapshot_chunk !== null) {
            message.applySnapshotChunk = exports.RequestApplySnapshotChunk.fromAmino(object.apply_snapshot_chunk);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.echo = message.echo ? exports.RequestEcho.toAmino(message.echo) : undefined;
        obj.flush = message.flush ? exports.RequestFlush.toAmino(message.flush) : undefined;
        obj.info = message.info ? exports.RequestInfo.toAmino(message.info) : undefined;
        obj.set_option = message.setOption ? exports.RequestSetOption.toAmino(message.setOption) : undefined;
        obj.init_chain = message.initChain ? exports.RequestInitChain.toAmino(message.initChain) : undefined;
        obj.query = message.query ? exports.RequestQuery.toAmino(message.query) : undefined;
        obj.begin_block = message.beginBlock ? exports.RequestBeginBlock.toAmino(message.beginBlock) : undefined;
        obj.check_tx = message.checkTx ? exports.RequestCheckTx.toAmino(message.checkTx) : undefined;
        obj.deliver_tx = message.deliverTx ? exports.RequestDeliverTx.toAmino(message.deliverTx) : undefined;
        obj.end_block = message.endBlock ? exports.RequestEndBlock.toAmino(message.endBlock) : undefined;
        obj.commit = message.commit ? exports.RequestCommit.toAmino(message.commit) : undefined;
        obj.list_snapshots = message.listSnapshots ? exports.RequestListSnapshots.toAmino(message.listSnapshots) : undefined;
        obj.offer_snapshot = message.offerSnapshot ? exports.RequestOfferSnapshot.toAmino(message.offerSnapshot) : undefined;
        obj.load_snapshot_chunk = message.loadSnapshotChunk ? exports.RequestLoadSnapshotChunk.toAmino(message.loadSnapshotChunk) : undefined;
        obj.apply_snapshot_chunk = message.applySnapshotChunk ? exports.RequestApplySnapshotChunk.toAmino(message.applySnapshotChunk) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Request.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Request.decode(message.value);
    },
    toProto(message) {
        return exports.Request.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.Request",
            value: exports.Request.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Request.typeUrl, exports.Request);
function createBaseRequestEcho() {
    return {
        message: ""
    };
}
exports.RequestEcho = {
    typeUrl: "/tendermint.abci.RequestEcho",
    is(o) {
        return o && (o.$typeUrl === exports.RequestEcho.typeUrl || typeof o.message === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.RequestEcho.typeUrl || typeof o.message === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.RequestEcho.typeUrl || typeof o.message === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestEcho();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
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
            message: (0, helpers_1.isSet)(object.message) ? String(object.message) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestEcho();
        message.message = object.message ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            message: object?.message
        };
    },
    toSDK(message) {
        const obj = {};
        obj.message = message.message;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseRequestEcho();
        if (object.message !== undefined && object.message !== null) {
            message.message = object.message;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.message = message.message;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestEcho.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestEcho.decode(message.value);
    },
    toProto(message) {
        return exports.RequestEcho.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestEcho",
            value: exports.RequestEcho.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.RequestEcho.typeUrl, exports.RequestEcho);
function createBaseRequestFlush() {
    return {};
}
exports.RequestFlush = {
    typeUrl: "/tendermint.abci.RequestFlush",
    is(o) {
        return o && o.$typeUrl === exports.RequestFlush.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.RequestFlush.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.RequestFlush.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestFlush();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseRequestFlush();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        const message = createBaseRequestFlush();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestFlush.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestFlush.decode(message.value);
    },
    toProto(message) {
        return exports.RequestFlush.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestFlush",
            value: exports.RequestFlush.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.RequestFlush.typeUrl, exports.RequestFlush);
function createBaseRequestInfo() {
    return {
        version: "",
        blockVersion: BigInt(0),
        p2pVersion: BigInt(0)
    };
}
exports.RequestInfo = {
    typeUrl: "/tendermint.abci.RequestInfo",
    is(o) {
        return o && (o.$typeUrl === exports.RequestInfo.typeUrl || typeof o.version === "string" && typeof o.blockVersion === "bigint" && typeof o.p2pVersion === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.RequestInfo.typeUrl || typeof o.version === "string" && typeof o.block_version === "bigint" && typeof o.p2p_version === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.RequestInfo.typeUrl || typeof o.version === "string" && typeof o.block_version === "bigint" && typeof o.p2p_version === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.blockVersion !== BigInt(0)) {
            writer.uint32(16).uint64(message.blockVersion);
        }
        if (message.p2pVersion !== BigInt(0)) {
            writer.uint32(24).uint64(message.p2pVersion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.blockVersion = reader.uint64();
                    break;
                case 3:
                    message.p2pVersion = reader.uint64();
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
            version: (0, helpers_1.isSet)(object.version) ? String(object.version) : "",
            blockVersion: (0, helpers_1.isSet)(object.blockVersion) ? BigInt(object.blockVersion.toString()) : BigInt(0),
            p2pVersion: (0, helpers_1.isSet)(object.p2pVersion) ? BigInt(object.p2pVersion.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.blockVersion !== undefined && (obj.blockVersion = (message.blockVersion || BigInt(0)).toString());
        message.p2pVersion !== undefined && (obj.p2pVersion = (message.p2pVersion || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestInfo();
        message.version = object.version ?? "";
        message.blockVersion = object.blockVersion !== undefined && object.blockVersion !== null ? BigInt(object.blockVersion.toString()) : BigInt(0);
        message.p2pVersion = object.p2pVersion !== undefined && object.p2pVersion !== null ? BigInt(object.p2pVersion.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            version: object?.version,
            blockVersion: object?.block_version,
            p2pVersion: object?.p2p_version
        };
    },
    toSDK(message) {
        const obj = {};
        obj.version = message.version;
        obj.block_version = message.blockVersion;
        obj.p2p_version = message.p2pVersion;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseRequestInfo();
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        if (object.block_version !== undefined && object.block_version !== null) {
            message.blockVersion = BigInt(object.block_version);
        }
        if (object.p2p_version !== undefined && object.p2p_version !== null) {
            message.p2pVersion = BigInt(object.p2p_version);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.version = message.version;
        obj.block_version = message.blockVersion ? message.blockVersion.toString() : undefined;
        obj.p2p_version = message.p2pVersion ? message.p2pVersion.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestInfo.decode(message.value);
    },
    toProto(message) {
        return exports.RequestInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestInfo",
            value: exports.RequestInfo.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.RequestInfo.typeUrl, exports.RequestInfo);
function createBaseRequestSetOption() {
    return {
        key: "",
        value: ""
    };
}
exports.RequestSetOption = {
    typeUrl: "/tendermint.abci.RequestSetOption",
    is(o) {
        return o && (o.$typeUrl === exports.RequestSetOption.typeUrl || typeof o.key === "string" && typeof o.value === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.RequestSetOption.typeUrl || typeof o.key === "string" && typeof o.value === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.RequestSetOption.typeUrl || typeof o.key === "string" && typeof o.value === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestSetOption();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
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
            key: (0, helpers_1.isSet)(object.key) ? String(object.key) : "",
            value: (0, helpers_1.isSet)(object.value) ? String(object.value) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestSetOption();
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            key: object?.key,
            value: object?.value
        };
    },
    toSDK(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseRequestSetOption();
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestSetOption.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestSetOption.decode(message.value);
    },
    toProto(message) {
        return exports.RequestSetOption.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestSetOption",
            value: exports.RequestSetOption.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.RequestSetOption.typeUrl, exports.RequestSetOption);
function createBaseRequestInitChain() {
    return {
        time: new Date(),
        chainId: "",
        consensusParams: undefined,
        validators: [],
        appStateBytes: new Uint8Array(),
        initialHeight: BigInt(0)
    };
}
exports.RequestInitChain = {
    typeUrl: "/tendermint.abci.RequestInitChain",
    is(o) {
        return o && (o.$typeUrl === exports.RequestInitChain.typeUrl || timestamp_1.Timestamp.is(o.time) && typeof o.chainId === "string" && Array.isArray(o.validators) && (!o.validators.length || exports.ValidatorUpdate.is(o.validators[0])) && (o.appStateBytes instanceof Uint8Array || typeof o.appStateBytes === "string") && typeof o.initialHeight === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.RequestInitChain.typeUrl || timestamp_1.Timestamp.isSDK(o.time) && typeof o.chain_id === "string" && Array.isArray(o.validators) && (!o.validators.length || exports.ValidatorUpdate.isSDK(o.validators[0])) && (o.app_state_bytes instanceof Uint8Array || typeof o.app_state_bytes === "string") && typeof o.initial_height === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.RequestInitChain.typeUrl || timestamp_1.Timestamp.isAmino(o.time) && typeof o.chain_id === "string" && Array.isArray(o.validators) && (!o.validators.length || exports.ValidatorUpdate.isAmino(o.validators[0])) && (o.app_state_bytes instanceof Uint8Array || typeof o.app_state_bytes === "string") && typeof o.initial_height === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.time), writer.uint32(10).fork()).ldelim();
        }
        if (message.chainId !== "") {
            writer.uint32(18).string(message.chainId);
        }
        if (message.consensusParams !== undefined) {
            exports.ConsensusParams.encode(message.consensusParams, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.validators) {
            exports.ValidatorUpdate.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.appStateBytes.length !== 0) {
            writer.uint32(42).bytes(message.appStateBytes);
        }
        if (message.initialHeight !== BigInt(0)) {
            writer.uint32(48).int64(message.initialHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestInitChain();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.chainId = reader.string();
                    break;
                case 3:
                    message.consensusParams = exports.ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.validators.push(exports.ValidatorUpdate.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.appStateBytes = reader.bytes();
                    break;
                case 6:
                    message.initialHeight = reader.int64();
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
            time: (0, helpers_1.isSet)(object.time) ? new Date(object.time) : undefined,
            chainId: (0, helpers_1.isSet)(object.chainId) ? String(object.chainId) : "",
            consensusParams: (0, helpers_1.isSet)(object.consensusParams) ? exports.ConsensusParams.fromJSON(object.consensusParams) : undefined,
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => exports.ValidatorUpdate.fromJSON(e)) : [],
            appStateBytes: (0, helpers_1.isSet)(object.appStateBytes) ? (0, helpers_1.bytesFromBase64)(object.appStateBytes) : new Uint8Array(),
            initialHeight: (0, helpers_1.isSet)(object.initialHeight) ? BigInt(object.initialHeight.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.consensusParams !== undefined && (obj.consensusParams = message.consensusParams ? exports.ConsensusParams.toJSON(message.consensusParams) : undefined);
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.ValidatorUpdate.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.appStateBytes !== undefined && (obj.appStateBytes = (0, helpers_1.base64FromBytes)(message.appStateBytes !== undefined ? message.appStateBytes : new Uint8Array()));
        message.initialHeight !== undefined && (obj.initialHeight = (message.initialHeight || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestInitChain();
        message.time = object.time ?? undefined;
        message.chainId = object.chainId ?? "";
        message.consensusParams = object.consensusParams !== undefined && object.consensusParams !== null ? exports.ConsensusParams.fromPartial(object.consensusParams) : undefined;
        message.validators = object.validators?.map(e => exports.ValidatorUpdate.fromPartial(e)) || [];
        message.appStateBytes = object.appStateBytes ?? new Uint8Array();
        message.initialHeight = object.initialHeight !== undefined && object.initialHeight !== null ? BigInt(object.initialHeight.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            time: object.time ?? undefined,
            chainId: object?.chain_id,
            consensusParams: object.consensus_params ? exports.ConsensusParams.fromSDK(object.consensus_params) : undefined,
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => exports.ValidatorUpdate.fromSDK(e)) : [],
            appStateBytes: object?.app_state_bytes,
            initialHeight: object?.initial_height
        };
    },
    toSDK(message) {
        const obj = {};
        message.time !== undefined && (obj.time = message.time ?? undefined);
        obj.chain_id = message.chainId;
        message.consensusParams !== undefined && (obj.consensus_params = message.consensusParams ? exports.ConsensusParams.toSDK(message.consensusParams) : undefined);
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.ValidatorUpdate.toSDK(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.app_state_bytes = message.appStateBytes;
        obj.initial_height = message.initialHeight;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseRequestInitChain();
        if (object.time !== undefined && object.time !== null) {
            message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.time));
        }
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chainId = object.chain_id;
        }
        if (object.consensus_params !== undefined && object.consensus_params !== null) {
            message.consensusParams = exports.ConsensusParams.fromAmino(object.consensus_params);
        }
        message.validators = object.validators?.map(e => exports.ValidatorUpdate.fromAmino(e)) || [];
        if (object.app_state_bytes !== undefined && object.app_state_bytes !== null) {
            message.appStateBytes = (0, helpers_1.bytesFromBase64)(object.app_state_bytes);
        }
        if (object.initial_height !== undefined && object.initial_height !== null) {
            message.initialHeight = BigInt(object.initial_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.time = message.time ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.time)) : undefined;
        obj.chain_id = message.chainId;
        obj.consensus_params = message.consensusParams ? exports.ConsensusParams.toAmino(message.consensusParams) : undefined;
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.ValidatorUpdate.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.app_state_bytes = message.appStateBytes ? (0, helpers_1.base64FromBytes)(message.appStateBytes) : undefined;
        obj.initial_height = message.initialHeight ? message.initialHeight.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestInitChain.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestInitChain.decode(message.value);
    },
    toProto(message) {
        return exports.RequestInitChain.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestInitChain",
            value: exports.RequestInitChain.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.RequestInitChain.typeUrl, exports.RequestInitChain);
function createBaseRequestQuery() {
    return {
        data: new Uint8Array(),
        path: "",
        height: BigInt(0),
        prove: false
    };
}
exports.RequestQuery = {
    typeUrl: "/tendermint.abci.RequestQuery",
    is(o) {
        return o && (o.$typeUrl === exports.RequestQuery.typeUrl || (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.path === "string" && typeof o.height === "bigint" && typeof o.prove === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.RequestQuery.typeUrl || (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.path === "string" && typeof o.height === "bigint" && typeof o.prove === "boolean");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.RequestQuery.typeUrl || (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.path === "string" && typeof o.height === "bigint" && typeof o.prove === "boolean");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        if (message.path !== "") {
            writer.uint32(18).string(message.path);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(24).int64(message.height);
        }
        if (message.prove === true) {
            writer.uint32(32).bool(message.prove);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.prove = reader.bool();
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
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array(),
            path: (0, helpers_1.isSet)(object.path) ? String(object.path) : "",
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            prove: (0, helpers_1.isSet)(object.prove) ? Boolean(object.prove) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        message.path !== undefined && (obj.path = message.path);
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.prove !== undefined && (obj.prove = message.prove);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestQuery();
        message.data = object.data ?? new Uint8Array();
        message.path = object.path ?? "";
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.prove = object.prove ?? false;
        return message;
    },
    fromSDK(object) {
        return {
            data: object?.data,
            path: object?.path,
            height: object?.height,
            prove: object?.prove
        };
    },
    toSDK(message) {
        const obj = {};
        obj.data = message.data;
        obj.path = message.path;
        obj.height = message.height;
        obj.prove = message.prove;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseRequestQuery();
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        if (object.path !== undefined && object.path !== null) {
            message.path = object.path;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.prove !== undefined && object.prove !== null) {
            message.prove = object.prove;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
        obj.path = message.path;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.prove = message.prove;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestQuery.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestQuery.decode(message.value);
    },
    toProto(message) {
        return exports.RequestQuery.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestQuery",
            value: exports.RequestQuery.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.RequestQuery.typeUrl, exports.RequestQuery);
function createBaseRequestBeginBlock() {
    return {
        hash: new Uint8Array(),
        header: types_1.Header.fromPartial({}),
        lastCommitInfo: exports.LastCommitInfo.fromPartial({}),
        byzantineValidators: []
    };
}
exports.RequestBeginBlock = {
    typeUrl: "/tendermint.abci.RequestBeginBlock",
    is(o) {
        return o && (o.$typeUrl === exports.RequestBeginBlock.typeUrl || (o.hash instanceof Uint8Array || typeof o.hash === "string") && types_1.Header.is(o.header) && exports.LastCommitInfo.is(o.lastCommitInfo) && Array.isArray(o.byzantineValidators) && (!o.byzantineValidators.length || exports.Evidence.is(o.byzantineValidators[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.RequestBeginBlock.typeUrl || (o.hash instanceof Uint8Array || typeof o.hash === "string") && types_1.Header.isSDK(o.header) && exports.LastCommitInfo.isSDK(o.last_commit_info) && Array.isArray(o.byzantine_validators) && (!o.byzantine_validators.length || exports.Evidence.isSDK(o.byzantine_validators[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.RequestBeginBlock.typeUrl || (o.hash instanceof Uint8Array || typeof o.hash === "string") && types_1.Header.isAmino(o.header) && exports.LastCommitInfo.isAmino(o.last_commit_info) && Array.isArray(o.byzantine_validators) && (!o.byzantine_validators.length || exports.Evidence.isAmino(o.byzantine_validators[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        if (message.header !== undefined) {
            types_1.Header.encode(message.header, writer.uint32(18).fork()).ldelim();
        }
        if (message.lastCommitInfo !== undefined) {
            exports.LastCommitInfo.encode(message.lastCommitInfo, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.byzantineValidators) {
            exports.Evidence.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestBeginBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
                    break;
                case 2:
                    message.header = types_1.Header.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.lastCommitInfo = exports.LastCommitInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.byzantineValidators.push(exports.Evidence.decode(reader, reader.uint32()));
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
            hash: (0, helpers_1.isSet)(object.hash) ? (0, helpers_1.bytesFromBase64)(object.hash) : new Uint8Array(),
            header: (0, helpers_1.isSet)(object.header) ? types_1.Header.fromJSON(object.header) : undefined,
            lastCommitInfo: (0, helpers_1.isSet)(object.lastCommitInfo) ? exports.LastCommitInfo.fromJSON(object.lastCommitInfo) : undefined,
            byzantineValidators: Array.isArray(object?.byzantineValidators) ? object.byzantineValidators.map((e) => exports.Evidence.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = (0, helpers_1.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.header !== undefined && (obj.header = message.header ? types_1.Header.toJSON(message.header) : undefined);
        message.lastCommitInfo !== undefined && (obj.lastCommitInfo = message.lastCommitInfo ? exports.LastCommitInfo.toJSON(message.lastCommitInfo) : undefined);
        if (message.byzantineValidators) {
            obj.byzantineValidators = message.byzantineValidators.map(e => e ? exports.Evidence.toJSON(e) : undefined);
        }
        else {
            obj.byzantineValidators = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestBeginBlock();
        message.hash = object.hash ?? new Uint8Array();
        message.header = object.header !== undefined && object.header !== null ? types_1.Header.fromPartial(object.header) : undefined;
        message.lastCommitInfo = object.lastCommitInfo !== undefined && object.lastCommitInfo !== null ? exports.LastCommitInfo.fromPartial(object.lastCommitInfo) : undefined;
        message.byzantineValidators = object.byzantineValidators?.map(e => exports.Evidence.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            hash: object?.hash,
            header: object.header ? types_1.Header.fromSDK(object.header) : undefined,
            lastCommitInfo: object.last_commit_info ? exports.LastCommitInfo.fromSDK(object.last_commit_info) : undefined,
            byzantineValidators: Array.isArray(object?.byzantine_validators) ? object.byzantine_validators.map((e) => exports.Evidence.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.hash = message.hash;
        message.header !== undefined && (obj.header = message.header ? types_1.Header.toSDK(message.header) : undefined);
        message.lastCommitInfo !== undefined && (obj.last_commit_info = message.lastCommitInfo ? exports.LastCommitInfo.toSDK(message.lastCommitInfo) : undefined);
        if (message.byzantineValidators) {
            obj.byzantine_validators = message.byzantineValidators.map(e => e ? exports.Evidence.toSDK(e) : undefined);
        }
        else {
            obj.byzantine_validators = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseRequestBeginBlock();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = (0, helpers_1.bytesFromBase64)(object.hash);
        }
        if (object.header !== undefined && object.header !== null) {
            message.header = types_1.Header.fromAmino(object.header);
        }
        if (object.last_commit_info !== undefined && object.last_commit_info !== null) {
            message.lastCommitInfo = exports.LastCommitInfo.fromAmino(object.last_commit_info);
        }
        message.byzantineValidators = object.byzantine_validators?.map(e => exports.Evidence.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash ? (0, helpers_1.base64FromBytes)(message.hash) : undefined;
        obj.header = message.header ? types_1.Header.toAmino(message.header) : undefined;
        obj.last_commit_info = message.lastCommitInfo ? exports.LastCommitInfo.toAmino(message.lastCommitInfo) : undefined;
        if (message.byzantineValidators) {
            obj.byzantine_validators = message.byzantineValidators.map(e => e ? exports.Evidence.toAmino(e) : undefined);
        }
        else {
            obj.byzantine_validators = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestBeginBlock.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestBeginBlock.decode(message.value);
    },
    toProto(message) {
        return exports.RequestBeginBlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestBeginBlock",
            value: exports.RequestBeginBlock.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.RequestBeginBlock.typeUrl, exports.RequestBeginBlock);
function createBaseRequestCheckTx() {
    return {
        tx: new Uint8Array(),
        type: 0
    };
}
exports.RequestCheckTx = {
    typeUrl: "/tendermint.abci.RequestCheckTx",
    is(o) {
        return o && (o.$typeUrl === exports.RequestCheckTx.typeUrl || (o.tx instanceof Uint8Array || typeof o.tx === "string") && (0, helpers_1.isSet)(o.type));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.RequestCheckTx.typeUrl || (o.tx instanceof Uint8Array || typeof o.tx === "string") && (0, helpers_1.isSet)(o.type));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.RequestCheckTx.typeUrl || (o.tx instanceof Uint8Array || typeof o.tx === "string") && (0, helpers_1.isSet)(o.type));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tx.length !== 0) {
            writer.uint32(10).bytes(message.tx);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestCheckTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = reader.bytes();
                    break;
                case 2:
                    message.type = reader.int32();
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
            tx: (0, helpers_1.isSet)(object.tx) ? (0, helpers_1.bytesFromBase64)(object.tx) : new Uint8Array(),
            type: (0, helpers_1.isSet)(object.type) ? checkTxTypeFromJSON(object.type) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined && (obj.tx = (0, helpers_1.base64FromBytes)(message.tx !== undefined ? message.tx : new Uint8Array()));
        message.type !== undefined && (obj.type = checkTxTypeToJSON(message.type));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestCheckTx();
        message.tx = object.tx ?? new Uint8Array();
        message.type = object.type ?? 0;
        return message;
    },
    fromSDK(object) {
        return {
            tx: object?.tx,
            type: (0, helpers_1.isSet)(object.type) ? checkTxTypeFromJSON(object.type) : -1
        };
    },
    toSDK(message) {
        const obj = {};
        obj.tx = message.tx;
        message.type !== undefined && (obj.type = checkTxTypeToJSON(message.type));
        return obj;
    },
    fromAmino(object) {
        const message = createBaseRequestCheckTx();
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = (0, helpers_1.bytesFromBase64)(object.tx);
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = checkTxTypeFromJSON(object.type);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tx = message.tx ? (0, helpers_1.base64FromBytes)(message.tx) : undefined;
        obj.type = checkTxTypeToJSON(message.type);
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestCheckTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestCheckTx.decode(message.value);
    },
    toProto(message) {
        return exports.RequestCheckTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestCheckTx",
            value: exports.RequestCheckTx.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.RequestCheckTx.typeUrl, exports.RequestCheckTx);
function createBaseRequestDeliverTx() {
    return {
        tx: new Uint8Array()
    };
}
exports.RequestDeliverTx = {
    typeUrl: "/tendermint.abci.RequestDeliverTx",
    is(o) {
        return o && (o.$typeUrl === exports.RequestDeliverTx.typeUrl || o.tx instanceof Uint8Array || typeof o.tx === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.RequestDeliverTx.typeUrl || o.tx instanceof Uint8Array || typeof o.tx === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.RequestDeliverTx.typeUrl || o.tx instanceof Uint8Array || typeof o.tx === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tx.length !== 0) {
            writer.uint32(10).bytes(message.tx);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestDeliverTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = reader.bytes();
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
            tx: (0, helpers_1.isSet)(object.tx) ? (0, helpers_1.bytesFromBase64)(object.tx) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined && (obj.tx = (0, helpers_1.base64FromBytes)(message.tx !== undefined ? message.tx : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestDeliverTx();
        message.tx = object.tx ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            tx: object?.tx
        };
    },
    toSDK(message) {
        const obj = {};
        obj.tx = message.tx;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseRequestDeliverTx();
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = (0, helpers_1.bytesFromBase64)(object.tx);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tx = message.tx ? (0, helpers_1.base64FromBytes)(message.tx) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestDeliverTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestDeliverTx.decode(message.value);
    },
    toProto(message) {
        return exports.RequestDeliverTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestDeliverTx",
            value: exports.RequestDeliverTx.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.RequestDeliverTx.typeUrl, exports.RequestDeliverTx);
function createBaseRequestEndBlock() {
    return {
        height: BigInt(0)
    };
}
exports.RequestEndBlock = {
    typeUrl: "/tendermint.abci.RequestEndBlock",
    is(o) {
        return o && (o.$typeUrl === exports.RequestEndBlock.typeUrl || typeof o.height === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.RequestEndBlock.typeUrl || typeof o.height === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.RequestEndBlock.typeUrl || typeof o.height === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestEndBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
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
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestEndBlock();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            height: object?.height
        };
    },
    toSDK(message) {
        const obj = {};
        obj.height = message.height;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseRequestEndBlock();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestEndBlock.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestEndBlock.decode(message.value);
    },
    toProto(message) {
        return exports.RequestEndBlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestEndBlock",
            value: exports.RequestEndBlock.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.RequestEndBlock.typeUrl, exports.RequestEndBlock);
function createBaseRequestCommit() {
    return {};
}
exports.RequestCommit = {
    typeUrl: "/tendermint.abci.RequestCommit",
    is(o) {
        return o && o.$typeUrl === exports.RequestCommit.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.RequestCommit.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.RequestCommit.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestCommit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseRequestCommit();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        const message = createBaseRequestCommit();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestCommit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestCommit.decode(message.value);
    },
    toProto(message) {
        return exports.RequestCommit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestCommit",
            value: exports.RequestCommit.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.RequestCommit.typeUrl, exports.RequestCommit);
function createBaseRequestListSnapshots() {
    return {};
}
exports.RequestListSnapshots = {
    typeUrl: "/tendermint.abci.RequestListSnapshots",
    is(o) {
        return o && o.$typeUrl === exports.RequestListSnapshots.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.RequestListSnapshots.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.RequestListSnapshots.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestListSnapshots();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseRequestListSnapshots();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        const message = createBaseRequestListSnapshots();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestListSnapshots.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestListSnapshots.decode(message.value);
    },
    toProto(message) {
        return exports.RequestListSnapshots.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestListSnapshots",
            value: exports.RequestListSnapshots.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.RequestListSnapshots.typeUrl, exports.RequestListSnapshots);
function createBaseRequestOfferSnapshot() {
    return {
        snapshot: undefined,
        appHash: new Uint8Array()
    };
}
exports.RequestOfferSnapshot = {
    typeUrl: "/tendermint.abci.RequestOfferSnapshot",
    is(o) {
        return o && (o.$typeUrl === exports.RequestOfferSnapshot.typeUrl || o.appHash instanceof Uint8Array || typeof o.appHash === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.RequestOfferSnapshot.typeUrl || o.app_hash instanceof Uint8Array || typeof o.app_hash === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.RequestOfferSnapshot.typeUrl || o.app_hash instanceof Uint8Array || typeof o.app_hash === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.snapshot !== undefined) {
            exports.Snapshot.encode(message.snapshot, writer.uint32(10).fork()).ldelim();
        }
        if (message.appHash.length !== 0) {
            writer.uint32(18).bytes(message.appHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestOfferSnapshot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshot = exports.Snapshot.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.appHash = reader.bytes();
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
            snapshot: (0, helpers_1.isSet)(object.snapshot) ? exports.Snapshot.fromJSON(object.snapshot) : undefined,
            appHash: (0, helpers_1.isSet)(object.appHash) ? (0, helpers_1.bytesFromBase64)(object.appHash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.snapshot !== undefined && (obj.snapshot = message.snapshot ? exports.Snapshot.toJSON(message.snapshot) : undefined);
        message.appHash !== undefined && (obj.appHash = (0, helpers_1.base64FromBytes)(message.appHash !== undefined ? message.appHash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestOfferSnapshot();
        message.snapshot = object.snapshot !== undefined && object.snapshot !== null ? exports.Snapshot.fromPartial(object.snapshot) : undefined;
        message.appHash = object.appHash ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            snapshot: object.snapshot ? exports.Snapshot.fromSDK(object.snapshot) : undefined,
            appHash: object?.app_hash
        };
    },
    toSDK(message) {
        const obj = {};
        message.snapshot !== undefined && (obj.snapshot = message.snapshot ? exports.Snapshot.toSDK(message.snapshot) : undefined);
        obj.app_hash = message.appHash;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseRequestOfferSnapshot();
        if (object.snapshot !== undefined && object.snapshot !== null) {
            message.snapshot = exports.Snapshot.fromAmino(object.snapshot);
        }
        if (object.app_hash !== undefined && object.app_hash !== null) {
            message.appHash = (0, helpers_1.bytesFromBase64)(object.app_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.snapshot = message.snapshot ? exports.Snapshot.toAmino(message.snapshot) : undefined;
        obj.app_hash = message.appHash ? (0, helpers_1.base64FromBytes)(message.appHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestOfferSnapshot.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestOfferSnapshot.decode(message.value);
    },
    toProto(message) {
        return exports.RequestOfferSnapshot.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestOfferSnapshot",
            value: exports.RequestOfferSnapshot.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.RequestOfferSnapshot.typeUrl, exports.RequestOfferSnapshot);
function createBaseRequestLoadSnapshotChunk() {
    return {
        height: BigInt(0),
        format: 0,
        chunk: 0
    };
}
exports.RequestLoadSnapshotChunk = {
    typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk",
    is(o) {
        return o && (o.$typeUrl === exports.RequestLoadSnapshotChunk.typeUrl || typeof o.height === "bigint" && typeof o.format === "number" && typeof o.chunk === "number");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.RequestLoadSnapshotChunk.typeUrl || typeof o.height === "bigint" && typeof o.format === "number" && typeof o.chunk === "number");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.RequestLoadSnapshotChunk.typeUrl || typeof o.height === "bigint" && typeof o.format === "number" && typeof o.chunk === "number");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.chunk !== 0) {
            writer.uint32(24).uint32(message.chunk);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestLoadSnapshotChunk();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.uint64();
                    break;
                case 2:
                    message.format = reader.uint32();
                    break;
                case 3:
                    message.chunk = reader.uint32();
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
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            format: (0, helpers_1.isSet)(object.format) ? Number(object.format) : 0,
            chunk: (0, helpers_1.isSet)(object.chunk) ? Number(object.chunk) : 0
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.format !== undefined && (obj.format = Math.round(message.format));
        message.chunk !== undefined && (obj.chunk = Math.round(message.chunk));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestLoadSnapshotChunk();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.format = object.format ?? 0;
        message.chunk = object.chunk ?? 0;
        return message;
    },
    fromSDK(object) {
        return {
            height: object?.height,
            format: object?.format,
            chunk: object?.chunk
        };
    },
    toSDK(message) {
        const obj = {};
        obj.height = message.height;
        obj.format = message.format;
        obj.chunk = message.chunk;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseRequestLoadSnapshotChunk();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = object.format;
        }
        if (object.chunk !== undefined && object.chunk !== null) {
            message.chunk = object.chunk;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.format = message.format;
        obj.chunk = message.chunk;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestLoadSnapshotChunk.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestLoadSnapshotChunk.decode(message.value);
    },
    toProto(message) {
        return exports.RequestLoadSnapshotChunk.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk",
            value: exports.RequestLoadSnapshotChunk.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.RequestLoadSnapshotChunk.typeUrl, exports.RequestLoadSnapshotChunk);
function createBaseRequestApplySnapshotChunk() {
    return {
        index: 0,
        chunk: new Uint8Array(),
        sender: ""
    };
}
exports.RequestApplySnapshotChunk = {
    typeUrl: "/tendermint.abci.RequestApplySnapshotChunk",
    is(o) {
        return o && (o.$typeUrl === exports.RequestApplySnapshotChunk.typeUrl || typeof o.index === "number" && (o.chunk instanceof Uint8Array || typeof o.chunk === "string") && typeof o.sender === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.RequestApplySnapshotChunk.typeUrl || typeof o.index === "number" && (o.chunk instanceof Uint8Array || typeof o.chunk === "string") && typeof o.sender === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.RequestApplySnapshotChunk.typeUrl || typeof o.index === "number" && (o.chunk instanceof Uint8Array || typeof o.chunk === "string") && typeof o.sender === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.index !== 0) {
            writer.uint32(8).uint32(message.index);
        }
        if (message.chunk.length !== 0) {
            writer.uint32(18).bytes(message.chunk);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestApplySnapshotChunk();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.uint32();
                    break;
                case 2:
                    message.chunk = reader.bytes();
                    break;
                case 3:
                    message.sender = reader.string();
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
            index: (0, helpers_1.isSet)(object.index) ? Number(object.index) : 0,
            chunk: (0, helpers_1.isSet)(object.chunk) ? (0, helpers_1.bytesFromBase64)(object.chunk) : new Uint8Array(),
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = Math.round(message.index));
        message.chunk !== undefined && (obj.chunk = (0, helpers_1.base64FromBytes)(message.chunk !== undefined ? message.chunk : new Uint8Array()));
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestApplySnapshotChunk();
        message.index = object.index ?? 0;
        message.chunk = object.chunk ?? new Uint8Array();
        message.sender = object.sender ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            index: object?.index,
            chunk: object?.chunk,
            sender: object?.sender
        };
    },
    toSDK(message) {
        const obj = {};
        obj.index = message.index;
        obj.chunk = message.chunk;
        obj.sender = message.sender;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseRequestApplySnapshotChunk();
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        if (object.chunk !== undefined && object.chunk !== null) {
            message.chunk = (0, helpers_1.bytesFromBase64)(object.chunk);
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index;
        obj.chunk = message.chunk ? (0, helpers_1.base64FromBytes)(message.chunk) : undefined;
        obj.sender = message.sender;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestApplySnapshotChunk.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestApplySnapshotChunk.decode(message.value);
    },
    toProto(message) {
        return exports.RequestApplySnapshotChunk.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestApplySnapshotChunk",
            value: exports.RequestApplySnapshotChunk.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.RequestApplySnapshotChunk.typeUrl, exports.RequestApplySnapshotChunk);
function createBaseResponse() {
    return {
        exception: undefined,
        echo: undefined,
        flush: undefined,
        info: undefined,
        setOption: undefined,
        initChain: undefined,
        query: undefined,
        beginBlock: undefined,
        checkTx: undefined,
        deliverTx: undefined,
        endBlock: undefined,
        commit: undefined,
        listSnapshots: undefined,
        offerSnapshot: undefined,
        loadSnapshotChunk: undefined,
        applySnapshotChunk: undefined
    };
}
exports.Response = {
    typeUrl: "/tendermint.abci.Response",
    is(o) {
        return o && o.$typeUrl === exports.Response.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.Response.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.Response.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.exception !== undefined) {
            exports.ResponseException.encode(message.exception, writer.uint32(10).fork()).ldelim();
        }
        if (message.echo !== undefined) {
            exports.ResponseEcho.encode(message.echo, writer.uint32(18).fork()).ldelim();
        }
        if (message.flush !== undefined) {
            exports.ResponseFlush.encode(message.flush, writer.uint32(26).fork()).ldelim();
        }
        if (message.info !== undefined) {
            exports.ResponseInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
        }
        if (message.setOption !== undefined) {
            exports.ResponseSetOption.encode(message.setOption, writer.uint32(42).fork()).ldelim();
        }
        if (message.initChain !== undefined) {
            exports.ResponseInitChain.encode(message.initChain, writer.uint32(50).fork()).ldelim();
        }
        if (message.query !== undefined) {
            exports.ResponseQuery.encode(message.query, writer.uint32(58).fork()).ldelim();
        }
        if (message.beginBlock !== undefined) {
            exports.ResponseBeginBlock.encode(message.beginBlock, writer.uint32(66).fork()).ldelim();
        }
        if (message.checkTx !== undefined) {
            exports.ResponseCheckTx.encode(message.checkTx, writer.uint32(74).fork()).ldelim();
        }
        if (message.deliverTx !== undefined) {
            exports.ResponseDeliverTx.encode(message.deliverTx, writer.uint32(82).fork()).ldelim();
        }
        if (message.endBlock !== undefined) {
            exports.ResponseEndBlock.encode(message.endBlock, writer.uint32(90).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            exports.ResponseCommit.encode(message.commit, writer.uint32(98).fork()).ldelim();
        }
        if (message.listSnapshots !== undefined) {
            exports.ResponseListSnapshots.encode(message.listSnapshots, writer.uint32(106).fork()).ldelim();
        }
        if (message.offerSnapshot !== undefined) {
            exports.ResponseOfferSnapshot.encode(message.offerSnapshot, writer.uint32(114).fork()).ldelim();
        }
        if (message.loadSnapshotChunk !== undefined) {
            exports.ResponseLoadSnapshotChunk.encode(message.loadSnapshotChunk, writer.uint32(122).fork()).ldelim();
        }
        if (message.applySnapshotChunk !== undefined) {
            exports.ResponseApplySnapshotChunk.encode(message.applySnapshotChunk, writer.uint32(130).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exception = exports.ResponseException.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.echo = exports.ResponseEcho.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.flush = exports.ResponseFlush.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.info = exports.ResponseInfo.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.setOption = exports.ResponseSetOption.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.initChain = exports.ResponseInitChain.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.query = exports.ResponseQuery.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.beginBlock = exports.ResponseBeginBlock.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.checkTx = exports.ResponseCheckTx.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.deliverTx = exports.ResponseDeliverTx.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.endBlock = exports.ResponseEndBlock.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.commit = exports.ResponseCommit.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.listSnapshots = exports.ResponseListSnapshots.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.offerSnapshot = exports.ResponseOfferSnapshot.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.loadSnapshotChunk = exports.ResponseLoadSnapshotChunk.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.applySnapshotChunk = exports.ResponseApplySnapshotChunk.decode(reader, reader.uint32());
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
            exception: (0, helpers_1.isSet)(object.exception) ? exports.ResponseException.fromJSON(object.exception) : undefined,
            echo: (0, helpers_1.isSet)(object.echo) ? exports.ResponseEcho.fromJSON(object.echo) : undefined,
            flush: (0, helpers_1.isSet)(object.flush) ? exports.ResponseFlush.fromJSON(object.flush) : undefined,
            info: (0, helpers_1.isSet)(object.info) ? exports.ResponseInfo.fromJSON(object.info) : undefined,
            setOption: (0, helpers_1.isSet)(object.setOption) ? exports.ResponseSetOption.fromJSON(object.setOption) : undefined,
            initChain: (0, helpers_1.isSet)(object.initChain) ? exports.ResponseInitChain.fromJSON(object.initChain) : undefined,
            query: (0, helpers_1.isSet)(object.query) ? exports.ResponseQuery.fromJSON(object.query) : undefined,
            beginBlock: (0, helpers_1.isSet)(object.beginBlock) ? exports.ResponseBeginBlock.fromJSON(object.beginBlock) : undefined,
            checkTx: (0, helpers_1.isSet)(object.checkTx) ? exports.ResponseCheckTx.fromJSON(object.checkTx) : undefined,
            deliverTx: (0, helpers_1.isSet)(object.deliverTx) ? exports.ResponseDeliverTx.fromJSON(object.deliverTx) : undefined,
            endBlock: (0, helpers_1.isSet)(object.endBlock) ? exports.ResponseEndBlock.fromJSON(object.endBlock) : undefined,
            commit: (0, helpers_1.isSet)(object.commit) ? exports.ResponseCommit.fromJSON(object.commit) : undefined,
            listSnapshots: (0, helpers_1.isSet)(object.listSnapshots) ? exports.ResponseListSnapshots.fromJSON(object.listSnapshots) : undefined,
            offerSnapshot: (0, helpers_1.isSet)(object.offerSnapshot) ? exports.ResponseOfferSnapshot.fromJSON(object.offerSnapshot) : undefined,
            loadSnapshotChunk: (0, helpers_1.isSet)(object.loadSnapshotChunk) ? exports.ResponseLoadSnapshotChunk.fromJSON(object.loadSnapshotChunk) : undefined,
            applySnapshotChunk: (0, helpers_1.isSet)(object.applySnapshotChunk) ? exports.ResponseApplySnapshotChunk.fromJSON(object.applySnapshotChunk) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.exception !== undefined && (obj.exception = message.exception ? exports.ResponseException.toJSON(message.exception) : undefined);
        message.echo !== undefined && (obj.echo = message.echo ? exports.ResponseEcho.toJSON(message.echo) : undefined);
        message.flush !== undefined && (obj.flush = message.flush ? exports.ResponseFlush.toJSON(message.flush) : undefined);
        message.info !== undefined && (obj.info = message.info ? exports.ResponseInfo.toJSON(message.info) : undefined);
        message.setOption !== undefined && (obj.setOption = message.setOption ? exports.ResponseSetOption.toJSON(message.setOption) : undefined);
        message.initChain !== undefined && (obj.initChain = message.initChain ? exports.ResponseInitChain.toJSON(message.initChain) : undefined);
        message.query !== undefined && (obj.query = message.query ? exports.ResponseQuery.toJSON(message.query) : undefined);
        message.beginBlock !== undefined && (obj.beginBlock = message.beginBlock ? exports.ResponseBeginBlock.toJSON(message.beginBlock) : undefined);
        message.checkTx !== undefined && (obj.checkTx = message.checkTx ? exports.ResponseCheckTx.toJSON(message.checkTx) : undefined);
        message.deliverTx !== undefined && (obj.deliverTx = message.deliverTx ? exports.ResponseDeliverTx.toJSON(message.deliverTx) : undefined);
        message.endBlock !== undefined && (obj.endBlock = message.endBlock ? exports.ResponseEndBlock.toJSON(message.endBlock) : undefined);
        message.commit !== undefined && (obj.commit = message.commit ? exports.ResponseCommit.toJSON(message.commit) : undefined);
        message.listSnapshots !== undefined && (obj.listSnapshots = message.listSnapshots ? exports.ResponseListSnapshots.toJSON(message.listSnapshots) : undefined);
        message.offerSnapshot !== undefined && (obj.offerSnapshot = message.offerSnapshot ? exports.ResponseOfferSnapshot.toJSON(message.offerSnapshot) : undefined);
        message.loadSnapshotChunk !== undefined && (obj.loadSnapshotChunk = message.loadSnapshotChunk ? exports.ResponseLoadSnapshotChunk.toJSON(message.loadSnapshotChunk) : undefined);
        message.applySnapshotChunk !== undefined && (obj.applySnapshotChunk = message.applySnapshotChunk ? exports.ResponseApplySnapshotChunk.toJSON(message.applySnapshotChunk) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponse();
        message.exception = object.exception !== undefined && object.exception !== null ? exports.ResponseException.fromPartial(object.exception) : undefined;
        message.echo = object.echo !== undefined && object.echo !== null ? exports.ResponseEcho.fromPartial(object.echo) : undefined;
        message.flush = object.flush !== undefined && object.flush !== null ? exports.ResponseFlush.fromPartial(object.flush) : undefined;
        message.info = object.info !== undefined && object.info !== null ? exports.ResponseInfo.fromPartial(object.info) : undefined;
        message.setOption = object.setOption !== undefined && object.setOption !== null ? exports.ResponseSetOption.fromPartial(object.setOption) : undefined;
        message.initChain = object.initChain !== undefined && object.initChain !== null ? exports.ResponseInitChain.fromPartial(object.initChain) : undefined;
        message.query = object.query !== undefined && object.query !== null ? exports.ResponseQuery.fromPartial(object.query) : undefined;
        message.beginBlock = object.beginBlock !== undefined && object.beginBlock !== null ? exports.ResponseBeginBlock.fromPartial(object.beginBlock) : undefined;
        message.checkTx = object.checkTx !== undefined && object.checkTx !== null ? exports.ResponseCheckTx.fromPartial(object.checkTx) : undefined;
        message.deliverTx = object.deliverTx !== undefined && object.deliverTx !== null ? exports.ResponseDeliverTx.fromPartial(object.deliverTx) : undefined;
        message.endBlock = object.endBlock !== undefined && object.endBlock !== null ? exports.ResponseEndBlock.fromPartial(object.endBlock) : undefined;
        message.commit = object.commit !== undefined && object.commit !== null ? exports.ResponseCommit.fromPartial(object.commit) : undefined;
        message.listSnapshots = object.listSnapshots !== undefined && object.listSnapshots !== null ? exports.ResponseListSnapshots.fromPartial(object.listSnapshots) : undefined;
        message.offerSnapshot = object.offerSnapshot !== undefined && object.offerSnapshot !== null ? exports.ResponseOfferSnapshot.fromPartial(object.offerSnapshot) : undefined;
        message.loadSnapshotChunk = object.loadSnapshotChunk !== undefined && object.loadSnapshotChunk !== null ? exports.ResponseLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk) : undefined;
        message.applySnapshotChunk = object.applySnapshotChunk !== undefined && object.applySnapshotChunk !== null ? exports.ResponseApplySnapshotChunk.fromPartial(object.applySnapshotChunk) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            exception: object.exception ? exports.ResponseException.fromSDK(object.exception) : undefined,
            echo: object.echo ? exports.ResponseEcho.fromSDK(object.echo) : undefined,
            flush: object.flush ? exports.ResponseFlush.fromSDK(object.flush) : undefined,
            info: object.info ? exports.ResponseInfo.fromSDK(object.info) : undefined,
            setOption: object.set_option ? exports.ResponseSetOption.fromSDK(object.set_option) : undefined,
            initChain: object.init_chain ? exports.ResponseInitChain.fromSDK(object.init_chain) : undefined,
            query: object.query ? exports.ResponseQuery.fromSDK(object.query) : undefined,
            beginBlock: object.begin_block ? exports.ResponseBeginBlock.fromSDK(object.begin_block) : undefined,
            checkTx: object.check_tx ? exports.ResponseCheckTx.fromSDK(object.check_tx) : undefined,
            deliverTx: object.deliver_tx ? exports.ResponseDeliverTx.fromSDK(object.deliver_tx) : undefined,
            endBlock: object.end_block ? exports.ResponseEndBlock.fromSDK(object.end_block) : undefined,
            commit: object.commit ? exports.ResponseCommit.fromSDK(object.commit) : undefined,
            listSnapshots: object.list_snapshots ? exports.ResponseListSnapshots.fromSDK(object.list_snapshots) : undefined,
            offerSnapshot: object.offer_snapshot ? exports.ResponseOfferSnapshot.fromSDK(object.offer_snapshot) : undefined,
            loadSnapshotChunk: object.load_snapshot_chunk ? exports.ResponseLoadSnapshotChunk.fromSDK(object.load_snapshot_chunk) : undefined,
            applySnapshotChunk: object.apply_snapshot_chunk ? exports.ResponseApplySnapshotChunk.fromSDK(object.apply_snapshot_chunk) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.exception !== undefined && (obj.exception = message.exception ? exports.ResponseException.toSDK(message.exception) : undefined);
        message.echo !== undefined && (obj.echo = message.echo ? exports.ResponseEcho.toSDK(message.echo) : undefined);
        message.flush !== undefined && (obj.flush = message.flush ? exports.ResponseFlush.toSDK(message.flush) : undefined);
        message.info !== undefined && (obj.info = message.info ? exports.ResponseInfo.toSDK(message.info) : undefined);
        message.setOption !== undefined && (obj.set_option = message.setOption ? exports.ResponseSetOption.toSDK(message.setOption) : undefined);
        message.initChain !== undefined && (obj.init_chain = message.initChain ? exports.ResponseInitChain.toSDK(message.initChain) : undefined);
        message.query !== undefined && (obj.query = message.query ? exports.ResponseQuery.toSDK(message.query) : undefined);
        message.beginBlock !== undefined && (obj.begin_block = message.beginBlock ? exports.ResponseBeginBlock.toSDK(message.beginBlock) : undefined);
        message.checkTx !== undefined && (obj.check_tx = message.checkTx ? exports.ResponseCheckTx.toSDK(message.checkTx) : undefined);
        message.deliverTx !== undefined && (obj.deliver_tx = message.deliverTx ? exports.ResponseDeliverTx.toSDK(message.deliverTx) : undefined);
        message.endBlock !== undefined && (obj.end_block = message.endBlock ? exports.ResponseEndBlock.toSDK(message.endBlock) : undefined);
        message.commit !== undefined && (obj.commit = message.commit ? exports.ResponseCommit.toSDK(message.commit) : undefined);
        message.listSnapshots !== undefined && (obj.list_snapshots = message.listSnapshots ? exports.ResponseListSnapshots.toSDK(message.listSnapshots) : undefined);
        message.offerSnapshot !== undefined && (obj.offer_snapshot = message.offerSnapshot ? exports.ResponseOfferSnapshot.toSDK(message.offerSnapshot) : undefined);
        message.loadSnapshotChunk !== undefined && (obj.load_snapshot_chunk = message.loadSnapshotChunk ? exports.ResponseLoadSnapshotChunk.toSDK(message.loadSnapshotChunk) : undefined);
        message.applySnapshotChunk !== undefined && (obj.apply_snapshot_chunk = message.applySnapshotChunk ? exports.ResponseApplySnapshotChunk.toSDK(message.applySnapshotChunk) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseResponse();
        if (object.exception !== undefined && object.exception !== null) {
            message.exception = exports.ResponseException.fromAmino(object.exception);
        }
        if (object.echo !== undefined && object.echo !== null) {
            message.echo = exports.ResponseEcho.fromAmino(object.echo);
        }
        if (object.flush !== undefined && object.flush !== null) {
            message.flush = exports.ResponseFlush.fromAmino(object.flush);
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = exports.ResponseInfo.fromAmino(object.info);
        }
        if (object.set_option !== undefined && object.set_option !== null) {
            message.setOption = exports.ResponseSetOption.fromAmino(object.set_option);
        }
        if (object.init_chain !== undefined && object.init_chain !== null) {
            message.initChain = exports.ResponseInitChain.fromAmino(object.init_chain);
        }
        if (object.query !== undefined && object.query !== null) {
            message.query = exports.ResponseQuery.fromAmino(object.query);
        }
        if (object.begin_block !== undefined && object.begin_block !== null) {
            message.beginBlock = exports.ResponseBeginBlock.fromAmino(object.begin_block);
        }
        if (object.check_tx !== undefined && object.check_tx !== null) {
            message.checkTx = exports.ResponseCheckTx.fromAmino(object.check_tx);
        }
        if (object.deliver_tx !== undefined && object.deliver_tx !== null) {
            message.deliverTx = exports.ResponseDeliverTx.fromAmino(object.deliver_tx);
        }
        if (object.end_block !== undefined && object.end_block !== null) {
            message.endBlock = exports.ResponseEndBlock.fromAmino(object.end_block);
        }
        if (object.commit !== undefined && object.commit !== null) {
            message.commit = exports.ResponseCommit.fromAmino(object.commit);
        }
        if (object.list_snapshots !== undefined && object.list_snapshots !== null) {
            message.listSnapshots = exports.ResponseListSnapshots.fromAmino(object.list_snapshots);
        }
        if (object.offer_snapshot !== undefined && object.offer_snapshot !== null) {
            message.offerSnapshot = exports.ResponseOfferSnapshot.fromAmino(object.offer_snapshot);
        }
        if (object.load_snapshot_chunk !== undefined && object.load_snapshot_chunk !== null) {
            message.loadSnapshotChunk = exports.ResponseLoadSnapshotChunk.fromAmino(object.load_snapshot_chunk);
        }
        if (object.apply_snapshot_chunk !== undefined && object.apply_snapshot_chunk !== null) {
            message.applySnapshotChunk = exports.ResponseApplySnapshotChunk.fromAmino(object.apply_snapshot_chunk);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.exception = message.exception ? exports.ResponseException.toAmino(message.exception) : undefined;
        obj.echo = message.echo ? exports.ResponseEcho.toAmino(message.echo) : undefined;
        obj.flush = message.flush ? exports.ResponseFlush.toAmino(message.flush) : undefined;
        obj.info = message.info ? exports.ResponseInfo.toAmino(message.info) : undefined;
        obj.set_option = message.setOption ? exports.ResponseSetOption.toAmino(message.setOption) : undefined;
        obj.init_chain = message.initChain ? exports.ResponseInitChain.toAmino(message.initChain) : undefined;
        obj.query = message.query ? exports.ResponseQuery.toAmino(message.query) : undefined;
        obj.begin_block = message.beginBlock ? exports.ResponseBeginBlock.toAmino(message.beginBlock) : undefined;
        obj.check_tx = message.checkTx ? exports.ResponseCheckTx.toAmino(message.checkTx) : undefined;
        obj.deliver_tx = message.deliverTx ? exports.ResponseDeliverTx.toAmino(message.deliverTx) : undefined;
        obj.end_block = message.endBlock ? exports.ResponseEndBlock.toAmino(message.endBlock) : undefined;
        obj.commit = message.commit ? exports.ResponseCommit.toAmino(message.commit) : undefined;
        obj.list_snapshots = message.listSnapshots ? exports.ResponseListSnapshots.toAmino(message.listSnapshots) : undefined;
        obj.offer_snapshot = message.offerSnapshot ? exports.ResponseOfferSnapshot.toAmino(message.offerSnapshot) : undefined;
        obj.load_snapshot_chunk = message.loadSnapshotChunk ? exports.ResponseLoadSnapshotChunk.toAmino(message.loadSnapshotChunk) : undefined;
        obj.apply_snapshot_chunk = message.applySnapshotChunk ? exports.ResponseApplySnapshotChunk.toAmino(message.applySnapshotChunk) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Response.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Response.decode(message.value);
    },
    toProto(message) {
        return exports.Response.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.Response",
            value: exports.Response.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Response.typeUrl, exports.Response);
function createBaseResponseException() {
    return {
        error: ""
    };
}
exports.ResponseException = {
    typeUrl: "/tendermint.abci.ResponseException",
    is(o) {
        return o && (o.$typeUrl === exports.ResponseException.typeUrl || typeof o.error === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ResponseException.typeUrl || typeof o.error === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ResponseException.typeUrl || typeof o.error === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.error !== "") {
            writer.uint32(10).string(message.error);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseException();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.error = reader.string();
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
            error: (0, helpers_1.isSet)(object.error) ? String(object.error) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.error !== undefined && (obj.error = message.error);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseException();
        message.error = object.error ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            error: object?.error
        };
    },
    toSDK(message) {
        const obj = {};
        obj.error = message.error;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseResponseException();
        if (object.error !== undefined && object.error !== null) {
            message.error = object.error;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.error = message.error;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseException.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseException.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseException.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseException",
            value: exports.ResponseException.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ResponseException.typeUrl, exports.ResponseException);
function createBaseResponseEcho() {
    return {
        message: ""
    };
}
exports.ResponseEcho = {
    typeUrl: "/tendermint.abci.ResponseEcho",
    is(o) {
        return o && (o.$typeUrl === exports.ResponseEcho.typeUrl || typeof o.message === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ResponseEcho.typeUrl || typeof o.message === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ResponseEcho.typeUrl || typeof o.message === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseEcho();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
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
            message: (0, helpers_1.isSet)(object.message) ? String(object.message) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseEcho();
        message.message = object.message ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            message: object?.message
        };
    },
    toSDK(message) {
        const obj = {};
        obj.message = message.message;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseResponseEcho();
        if (object.message !== undefined && object.message !== null) {
            message.message = object.message;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.message = message.message;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseEcho.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseEcho.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseEcho.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseEcho",
            value: exports.ResponseEcho.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ResponseEcho.typeUrl, exports.ResponseEcho);
function createBaseResponseFlush() {
    return {};
}
exports.ResponseFlush = {
    typeUrl: "/tendermint.abci.ResponseFlush",
    is(o) {
        return o && o.$typeUrl === exports.ResponseFlush.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.ResponseFlush.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.ResponseFlush.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseFlush();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseResponseFlush();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        const message = createBaseResponseFlush();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseFlush.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseFlush.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseFlush.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseFlush",
            value: exports.ResponseFlush.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ResponseFlush.typeUrl, exports.ResponseFlush);
function createBaseResponseInfo() {
    return {
        data: "",
        version: "",
        appVersion: BigInt(0),
        lastBlockHeight: BigInt(0),
        lastBlockAppHash: new Uint8Array()
    };
}
exports.ResponseInfo = {
    typeUrl: "/tendermint.abci.ResponseInfo",
    is(o) {
        return o && (o.$typeUrl === exports.ResponseInfo.typeUrl || typeof o.data === "string" && typeof o.version === "string" && typeof o.appVersion === "bigint" && typeof o.lastBlockHeight === "bigint" && (o.lastBlockAppHash instanceof Uint8Array || typeof o.lastBlockAppHash === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ResponseInfo.typeUrl || typeof o.data === "string" && typeof o.version === "string" && typeof o.app_version === "bigint" && typeof o.last_block_height === "bigint" && (o.last_block_app_hash instanceof Uint8Array || typeof o.last_block_app_hash === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ResponseInfo.typeUrl || typeof o.data === "string" && typeof o.version === "string" && typeof o.app_version === "bigint" && typeof o.last_block_height === "bigint" && (o.last_block_app_hash instanceof Uint8Array || typeof o.last_block_app_hash === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.data !== "") {
            writer.uint32(10).string(message.data);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        if (message.appVersion !== BigInt(0)) {
            writer.uint32(24).uint64(message.appVersion);
        }
        if (message.lastBlockHeight !== BigInt(0)) {
            writer.uint32(32).int64(message.lastBlockHeight);
        }
        if (message.lastBlockAppHash.length !== 0) {
            writer.uint32(42).bytes(message.lastBlockAppHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                case 3:
                    message.appVersion = reader.uint64();
                    break;
                case 4:
                    message.lastBlockHeight = reader.int64();
                    break;
                case 5:
                    message.lastBlockAppHash = reader.bytes();
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
            data: (0, helpers_1.isSet)(object.data) ? String(object.data) : "",
            version: (0, helpers_1.isSet)(object.version) ? String(object.version) : "",
            appVersion: (0, helpers_1.isSet)(object.appVersion) ? BigInt(object.appVersion.toString()) : BigInt(0),
            lastBlockHeight: (0, helpers_1.isSet)(object.lastBlockHeight) ? BigInt(object.lastBlockHeight.toString()) : BigInt(0),
            lastBlockAppHash: (0, helpers_1.isSet)(object.lastBlockAppHash) ? (0, helpers_1.bytesFromBase64)(object.lastBlockAppHash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = message.data);
        message.version !== undefined && (obj.version = message.version);
        message.appVersion !== undefined && (obj.appVersion = (message.appVersion || BigInt(0)).toString());
        message.lastBlockHeight !== undefined && (obj.lastBlockHeight = (message.lastBlockHeight || BigInt(0)).toString());
        message.lastBlockAppHash !== undefined && (obj.lastBlockAppHash = (0, helpers_1.base64FromBytes)(message.lastBlockAppHash !== undefined ? message.lastBlockAppHash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseInfo();
        message.data = object.data ?? "";
        message.version = object.version ?? "";
        message.appVersion = object.appVersion !== undefined && object.appVersion !== null ? BigInt(object.appVersion.toString()) : BigInt(0);
        message.lastBlockHeight = object.lastBlockHeight !== undefined && object.lastBlockHeight !== null ? BigInt(object.lastBlockHeight.toString()) : BigInt(0);
        message.lastBlockAppHash = object.lastBlockAppHash ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            data: object?.data,
            version: object?.version,
            appVersion: object?.app_version,
            lastBlockHeight: object?.last_block_height,
            lastBlockAppHash: object?.last_block_app_hash
        };
    },
    toSDK(message) {
        const obj = {};
        obj.data = message.data;
        obj.version = message.version;
        obj.app_version = message.appVersion;
        obj.last_block_height = message.lastBlockHeight;
        obj.last_block_app_hash = message.lastBlockAppHash;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseResponseInfo();
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        if (object.app_version !== undefined && object.app_version !== null) {
            message.appVersion = BigInt(object.app_version);
        }
        if (object.last_block_height !== undefined && object.last_block_height !== null) {
            message.lastBlockHeight = BigInt(object.last_block_height);
        }
        if (object.last_block_app_hash !== undefined && object.last_block_app_hash !== null) {
            message.lastBlockAppHash = (0, helpers_1.bytesFromBase64)(object.last_block_app_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data;
        obj.version = message.version;
        obj.app_version = message.appVersion ? message.appVersion.toString() : undefined;
        obj.last_block_height = message.lastBlockHeight ? message.lastBlockHeight.toString() : undefined;
        obj.last_block_app_hash = message.lastBlockAppHash ? (0, helpers_1.base64FromBytes)(message.lastBlockAppHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseInfo.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseInfo",
            value: exports.ResponseInfo.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ResponseInfo.typeUrl, exports.ResponseInfo);
function createBaseResponseSetOption() {
    return {
        code: 0,
        log: "",
        info: ""
    };
}
exports.ResponseSetOption = {
    typeUrl: "/tendermint.abci.ResponseSetOption",
    is(o) {
        return o && (o.$typeUrl === exports.ResponseSetOption.typeUrl || typeof o.code === "number" && typeof o.log === "string" && typeof o.info === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ResponseSetOption.typeUrl || typeof o.code === "number" && typeof o.log === "string" && typeof o.info === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ResponseSetOption.typeUrl || typeof o.code === "number" && typeof o.log === "string" && typeof o.info === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseSetOption();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
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
            code: (0, helpers_1.isSet)(object.code) ? Number(object.code) : 0,
            log: (0, helpers_1.isSet)(object.log) ? String(object.log) : "",
            info: (0, helpers_1.isSet)(object.info) ? String(object.info) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.log !== undefined && (obj.log = message.log);
        message.info !== undefined && (obj.info = message.info);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseSetOption();
        message.code = object.code ?? 0;
        message.log = object.log ?? "";
        message.info = object.info ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            code: object?.code,
            log: object?.log,
            info: object?.info
        };
    },
    toSDK(message) {
        const obj = {};
        obj.code = message.code;
        obj.log = message.log;
        obj.info = message.info;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseResponseSetOption();
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = object.log;
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = object.info;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code = message.code;
        obj.log = message.log;
        obj.info = message.info;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseSetOption.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseSetOption.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseSetOption.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseSetOption",
            value: exports.ResponseSetOption.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ResponseSetOption.typeUrl, exports.ResponseSetOption);
function createBaseResponseInitChain() {
    return {
        consensusParams: undefined,
        validators: [],
        appHash: new Uint8Array()
    };
}
exports.ResponseInitChain = {
    typeUrl: "/tendermint.abci.ResponseInitChain",
    is(o) {
        return o && (o.$typeUrl === exports.ResponseInitChain.typeUrl || Array.isArray(o.validators) && (!o.validators.length || exports.ValidatorUpdate.is(o.validators[0])) && (o.appHash instanceof Uint8Array || typeof o.appHash === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ResponseInitChain.typeUrl || Array.isArray(o.validators) && (!o.validators.length || exports.ValidatorUpdate.isSDK(o.validators[0])) && (o.app_hash instanceof Uint8Array || typeof o.app_hash === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ResponseInitChain.typeUrl || Array.isArray(o.validators) && (!o.validators.length || exports.ValidatorUpdate.isAmino(o.validators[0])) && (o.app_hash instanceof Uint8Array || typeof o.app_hash === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.consensusParams !== undefined) {
            exports.ConsensusParams.encode(message.consensusParams, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.validators) {
            exports.ValidatorUpdate.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.appHash.length !== 0) {
            writer.uint32(26).bytes(message.appHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseInitChain();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensusParams = exports.ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validators.push(exports.ValidatorUpdate.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.appHash = reader.bytes();
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
            consensusParams: (0, helpers_1.isSet)(object.consensusParams) ? exports.ConsensusParams.fromJSON(object.consensusParams) : undefined,
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => exports.ValidatorUpdate.fromJSON(e)) : [],
            appHash: (0, helpers_1.isSet)(object.appHash) ? (0, helpers_1.bytesFromBase64)(object.appHash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.consensusParams !== undefined && (obj.consensusParams = message.consensusParams ? exports.ConsensusParams.toJSON(message.consensusParams) : undefined);
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.ValidatorUpdate.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.appHash !== undefined && (obj.appHash = (0, helpers_1.base64FromBytes)(message.appHash !== undefined ? message.appHash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseInitChain();
        message.consensusParams = object.consensusParams !== undefined && object.consensusParams !== null ? exports.ConsensusParams.fromPartial(object.consensusParams) : undefined;
        message.validators = object.validators?.map(e => exports.ValidatorUpdate.fromPartial(e)) || [];
        message.appHash = object.appHash ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            consensusParams: object.consensus_params ? exports.ConsensusParams.fromSDK(object.consensus_params) : undefined,
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => exports.ValidatorUpdate.fromSDK(e)) : [],
            appHash: object?.app_hash
        };
    },
    toSDK(message) {
        const obj = {};
        message.consensusParams !== undefined && (obj.consensus_params = message.consensusParams ? exports.ConsensusParams.toSDK(message.consensusParams) : undefined);
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.ValidatorUpdate.toSDK(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.app_hash = message.appHash;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseResponseInitChain();
        if (object.consensus_params !== undefined && object.consensus_params !== null) {
            message.consensusParams = exports.ConsensusParams.fromAmino(object.consensus_params);
        }
        message.validators = object.validators?.map(e => exports.ValidatorUpdate.fromAmino(e)) || [];
        if (object.app_hash !== undefined && object.app_hash !== null) {
            message.appHash = (0, helpers_1.bytesFromBase64)(object.app_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.consensus_params = message.consensusParams ? exports.ConsensusParams.toAmino(message.consensusParams) : undefined;
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.ValidatorUpdate.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.app_hash = message.appHash ? (0, helpers_1.base64FromBytes)(message.appHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseInitChain.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseInitChain.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseInitChain.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseInitChain",
            value: exports.ResponseInitChain.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ResponseInitChain.typeUrl, exports.ResponseInitChain);
function createBaseResponseQuery() {
    return {
        code: 0,
        log: "",
        info: "",
        index: BigInt(0),
        key: new Uint8Array(),
        value: new Uint8Array(),
        proofOps: undefined,
        height: BigInt(0),
        codespace: ""
    };
}
exports.ResponseQuery = {
    typeUrl: "/tendermint.abci.ResponseQuery",
    is(o) {
        return o && (o.$typeUrl === exports.ResponseQuery.typeUrl || typeof o.code === "number" && typeof o.log === "string" && typeof o.info === "string" && typeof o.index === "bigint" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string") && typeof o.height === "bigint" && typeof o.codespace === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ResponseQuery.typeUrl || typeof o.code === "number" && typeof o.log === "string" && typeof o.info === "string" && typeof o.index === "bigint" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string") && typeof o.height === "bigint" && typeof o.codespace === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ResponseQuery.typeUrl || typeof o.code === "number" && typeof o.log === "string" && typeof o.info === "string" && typeof o.index === "bigint" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string") && typeof o.height === "bigint" && typeof o.codespace === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (message.index !== BigInt(0)) {
            writer.uint32(40).int64(message.index);
        }
        if (message.key.length !== 0) {
            writer.uint32(50).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(58).bytes(message.value);
        }
        if (message.proofOps !== undefined) {
            proof_1.ProofOps.encode(message.proofOps, writer.uint32(66).fork()).ldelim();
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(72).int64(message.height);
        }
        if (message.codespace !== "") {
            writer.uint32(82).string(message.codespace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.index = reader.int64();
                    break;
                case 6:
                    message.key = reader.bytes();
                    break;
                case 7:
                    message.value = reader.bytes();
                    break;
                case 8:
                    message.proofOps = proof_1.ProofOps.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.height = reader.int64();
                    break;
                case 10:
                    message.codespace = reader.string();
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
            code: (0, helpers_1.isSet)(object.code) ? Number(object.code) : 0,
            log: (0, helpers_1.isSet)(object.log) ? String(object.log) : "",
            info: (0, helpers_1.isSet)(object.info) ? String(object.info) : "",
            index: (0, helpers_1.isSet)(object.index) ? BigInt(object.index.toString()) : BigInt(0),
            key: (0, helpers_1.isSet)(object.key) ? (0, helpers_1.bytesFromBase64)(object.key) : new Uint8Array(),
            value: (0, helpers_1.isSet)(object.value) ? (0, helpers_1.bytesFromBase64)(object.value) : new Uint8Array(),
            proofOps: (0, helpers_1.isSet)(object.proofOps) ? proof_1.ProofOps.fromJSON(object.proofOps) : undefined,
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            codespace: (0, helpers_1.isSet)(object.codespace) ? String(object.codespace) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.log !== undefined && (obj.log = message.log);
        message.info !== undefined && (obj.info = message.info);
        message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
        message.key !== undefined && (obj.key = (0, helpers_1.base64FromBytes)(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined && (obj.value = (0, helpers_1.base64FromBytes)(message.value !== undefined ? message.value : new Uint8Array()));
        message.proofOps !== undefined && (obj.proofOps = message.proofOps ? proof_1.ProofOps.toJSON(message.proofOps) : undefined);
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.codespace !== undefined && (obj.codespace = message.codespace);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseQuery();
        message.code = object.code ?? 0;
        message.log = object.log ?? "";
        message.info = object.info ?? "";
        message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        message.proofOps = object.proofOps !== undefined && object.proofOps !== null ? proof_1.ProofOps.fromPartial(object.proofOps) : undefined;
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.codespace = object.codespace ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            code: object?.code,
            log: object?.log,
            info: object?.info,
            index: object?.index,
            key: object?.key,
            value: object?.value,
            proofOps: object.proof_ops ? proof_1.ProofOps.fromSDK(object.proof_ops) : undefined,
            height: object?.height,
            codespace: object?.codespace
        };
    },
    toSDK(message) {
        const obj = {};
        obj.code = message.code;
        obj.log = message.log;
        obj.info = message.info;
        obj.index = message.index;
        obj.key = message.key;
        obj.value = message.value;
        message.proofOps !== undefined && (obj.proof_ops = message.proofOps ? proof_1.ProofOps.toSDK(message.proofOps) : undefined);
        obj.height = message.height;
        obj.codespace = message.codespace;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseResponseQuery();
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = object.log;
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = object.info;
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = BigInt(object.index);
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = (0, helpers_1.bytesFromBase64)(object.key);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = (0, helpers_1.bytesFromBase64)(object.value);
        }
        if (object.proof_ops !== undefined && object.proof_ops !== null) {
            message.proofOps = proof_1.ProofOps.fromAmino(object.proof_ops);
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.codespace !== undefined && object.codespace !== null) {
            message.codespace = object.codespace;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code = message.code;
        obj.log = message.log;
        obj.info = message.info;
        obj.index = message.index ? message.index.toString() : undefined;
        obj.key = message.key ? (0, helpers_1.base64FromBytes)(message.key) : undefined;
        obj.value = message.value ? (0, helpers_1.base64FromBytes)(message.value) : undefined;
        obj.proof_ops = message.proofOps ? proof_1.ProofOps.toAmino(message.proofOps) : undefined;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.codespace = message.codespace;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseQuery.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseQuery.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseQuery.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseQuery",
            value: exports.ResponseQuery.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ResponseQuery.typeUrl, exports.ResponseQuery);
function createBaseResponseBeginBlock() {
    return {
        events: []
    };
}
exports.ResponseBeginBlock = {
    typeUrl: "/tendermint.abci.ResponseBeginBlock",
    is(o) {
        return o && (o.$typeUrl === exports.ResponseBeginBlock.typeUrl || Array.isArray(o.events) && (!o.events.length || exports.Event.is(o.events[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ResponseBeginBlock.typeUrl || Array.isArray(o.events) && (!o.events.length || exports.Event.isSDK(o.events[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ResponseBeginBlock.typeUrl || Array.isArray(o.events) && (!o.events.length || exports.Event.isAmino(o.events[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.events) {
            exports.Event.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseBeginBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
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
            events: Array.isArray(object?.events) ? object.events.map((e) => exports.Event.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.Event.toJSON(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseBeginBlock();
        message.events = object.events?.map(e => exports.Event.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            events: Array.isArray(object?.events) ? object.events.map((e) => exports.Event.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.Event.toSDK(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseResponseBeginBlock();
        message.events = object.events?.map(e => exports.Event.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.Event.toAmino(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseBeginBlock.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseBeginBlock.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseBeginBlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseBeginBlock",
            value: exports.ResponseBeginBlock.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ResponseBeginBlock.typeUrl, exports.ResponseBeginBlock);
function createBaseResponseCheckTx() {
    return {
        code: 0,
        data: new Uint8Array(),
        log: "",
        info: "",
        gasWanted: BigInt(0),
        gasUsed: BigInt(0),
        events: [],
        codespace: ""
    };
}
exports.ResponseCheckTx = {
    typeUrl: "/tendermint.abci.ResponseCheckTx",
    is(o) {
        return o && (o.$typeUrl === exports.ResponseCheckTx.typeUrl || typeof o.code === "number" && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.log === "string" && typeof o.info === "string" && typeof o.gasWanted === "bigint" && typeof o.gasUsed === "bigint" && Array.isArray(o.events) && (!o.events.length || exports.Event.is(o.events[0])) && typeof o.codespace === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ResponseCheckTx.typeUrl || typeof o.code === "number" && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.log === "string" && typeof o.info === "string" && typeof o.gas_wanted === "bigint" && typeof o.gas_used === "bigint" && Array.isArray(o.events) && (!o.events.length || exports.Event.isSDK(o.events[0])) && typeof o.codespace === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ResponseCheckTx.typeUrl || typeof o.code === "number" && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.log === "string" && typeof o.info === "string" && typeof o.gas_wanted === "bigint" && typeof o.gas_used === "bigint" && Array.isArray(o.events) && (!o.events.length || exports.Event.isAmino(o.events[0])) && typeof o.codespace === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (message.gasWanted !== BigInt(0)) {
            writer.uint32(40).int64(message.gasWanted);
        }
        if (message.gasUsed !== BigInt(0)) {
            writer.uint32(48).int64(message.gasUsed);
        }
        for (const v of message.events) {
            exports.Event.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.codespace !== "") {
            writer.uint32(66).string(message.codespace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseCheckTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.gasWanted = reader.int64();
                    break;
                case 6:
                    message.gasUsed = reader.int64();
                    break;
                case 7:
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.codespace = reader.string();
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
            code: (0, helpers_1.isSet)(object.code) ? Number(object.code) : 0,
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array(),
            log: (0, helpers_1.isSet)(object.log) ? String(object.log) : "",
            info: (0, helpers_1.isSet)(object.info) ? String(object.info) : "",
            gasWanted: (0, helpers_1.isSet)(object.gas_wanted) ? BigInt(object.gas_wanted.toString()) : BigInt(0),
            gasUsed: (0, helpers_1.isSet)(object.gas_used) ? BigInt(object.gas_used.toString()) : BigInt(0),
            events: Array.isArray(object?.events) ? object.events.map((e) => exports.Event.fromJSON(e)) : [],
            codespace: (0, helpers_1.isSet)(object.codespace) ? String(object.codespace) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        message.log !== undefined && (obj.log = message.log);
        message.info !== undefined && (obj.info = message.info);
        message.gasWanted !== undefined && (obj.gas_wanted = (message.gasWanted || BigInt(0)).toString());
        message.gasUsed !== undefined && (obj.gas_used = (message.gasUsed || BigInt(0)).toString());
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.Event.toJSON(e) : undefined);
        }
        else {
            obj.events = [];
        }
        message.codespace !== undefined && (obj.codespace = message.codespace);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseCheckTx();
        message.code = object.code ?? 0;
        message.data = object.data ?? new Uint8Array();
        message.log = object.log ?? "";
        message.info = object.info ?? "";
        message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? BigInt(object.gasWanted.toString()) : BigInt(0);
        message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
        message.events = object.events?.map(e => exports.Event.fromPartial(e)) || [];
        message.codespace = object.codespace ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            code: object?.code,
            data: object?.data,
            log: object?.log,
            info: object?.info,
            gasWanted: object?.gas_wanted,
            gasUsed: object?.gas_used,
            events: Array.isArray(object?.events) ? object.events.map((e) => exports.Event.fromSDK(e)) : [],
            codespace: object?.codespace
        };
    },
    toSDK(message) {
        const obj = {};
        obj.code = message.code;
        obj.data = message.data;
        obj.log = message.log;
        obj.info = message.info;
        obj.gas_wanted = message.gasWanted;
        obj.gas_used = message.gasUsed;
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.Event.toSDK(e) : undefined);
        }
        else {
            obj.events = [];
        }
        obj.codespace = message.codespace;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseResponseCheckTx();
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = object.log;
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = object.info;
        }
        if (object.gas_wanted !== undefined && object.gas_wanted !== null) {
            message.gasWanted = BigInt(object.gas_wanted);
        }
        if (object.gas_used !== undefined && object.gas_used !== null) {
            message.gasUsed = BigInt(object.gas_used);
        }
        message.events = object.events?.map(e => exports.Event.fromAmino(e)) || [];
        if (object.codespace !== undefined && object.codespace !== null) {
            message.codespace = object.codespace;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code = message.code;
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
        obj.log = message.log;
        obj.info = message.info;
        obj.gas_wanted = message.gasWanted ? message.gasWanted.toString() : undefined;
        obj.gas_used = message.gasUsed ? message.gasUsed.toString() : undefined;
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.Event.toAmino(e) : undefined);
        }
        else {
            obj.events = [];
        }
        obj.codespace = message.codespace;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseCheckTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseCheckTx.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseCheckTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseCheckTx",
            value: exports.ResponseCheckTx.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ResponseCheckTx.typeUrl, exports.ResponseCheckTx);
function createBaseResponseDeliverTx() {
    return {
        code: 0,
        data: new Uint8Array(),
        log: "",
        info: "",
        gasWanted: BigInt(0),
        gasUsed: BigInt(0),
        events: [],
        codespace: ""
    };
}
exports.ResponseDeliverTx = {
    typeUrl: "/tendermint.abci.ResponseDeliverTx",
    is(o) {
        return o && (o.$typeUrl === exports.ResponseDeliverTx.typeUrl || typeof o.code === "number" && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.log === "string" && typeof o.info === "string" && typeof o.gasWanted === "bigint" && typeof o.gasUsed === "bigint" && Array.isArray(o.events) && (!o.events.length || exports.Event.is(o.events[0])) && typeof o.codespace === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ResponseDeliverTx.typeUrl || typeof o.code === "number" && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.log === "string" && typeof o.info === "string" && typeof o.gas_wanted === "bigint" && typeof o.gas_used === "bigint" && Array.isArray(o.events) && (!o.events.length || exports.Event.isSDK(o.events[0])) && typeof o.codespace === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ResponseDeliverTx.typeUrl || typeof o.code === "number" && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.log === "string" && typeof o.info === "string" && typeof o.gas_wanted === "bigint" && typeof o.gas_used === "bigint" && Array.isArray(o.events) && (!o.events.length || exports.Event.isAmino(o.events[0])) && typeof o.codespace === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (message.gasWanted !== BigInt(0)) {
            writer.uint32(40).int64(message.gasWanted);
        }
        if (message.gasUsed !== BigInt(0)) {
            writer.uint32(48).int64(message.gasUsed);
        }
        for (const v of message.events) {
            exports.Event.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.codespace !== "") {
            writer.uint32(66).string(message.codespace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseDeliverTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.gasWanted = reader.int64();
                    break;
                case 6:
                    message.gasUsed = reader.int64();
                    break;
                case 7:
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.codespace = reader.string();
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
            code: (0, helpers_1.isSet)(object.code) ? Number(object.code) : 0,
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array(),
            log: (0, helpers_1.isSet)(object.log) ? String(object.log) : "",
            info: (0, helpers_1.isSet)(object.info) ? String(object.info) : "",
            gasWanted: (0, helpers_1.isSet)(object.gas_wanted) ? BigInt(object.gas_wanted.toString()) : BigInt(0),
            gasUsed: (0, helpers_1.isSet)(object.gas_used) ? BigInt(object.gas_used.toString()) : BigInt(0),
            events: Array.isArray(object?.events) ? object.events.map((e) => exports.Event.fromJSON(e)) : [],
            codespace: (0, helpers_1.isSet)(object.codespace) ? String(object.codespace) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        message.log !== undefined && (obj.log = message.log);
        message.info !== undefined && (obj.info = message.info);
        message.gasWanted !== undefined && (obj.gas_wanted = (message.gasWanted || BigInt(0)).toString());
        message.gasUsed !== undefined && (obj.gas_used = (message.gasUsed || BigInt(0)).toString());
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.Event.toJSON(e) : undefined);
        }
        else {
            obj.events = [];
        }
        message.codespace !== undefined && (obj.codespace = message.codespace);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseDeliverTx();
        message.code = object.code ?? 0;
        message.data = object.data ?? new Uint8Array();
        message.log = object.log ?? "";
        message.info = object.info ?? "";
        message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? BigInt(object.gasWanted.toString()) : BigInt(0);
        message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
        message.events = object.events?.map(e => exports.Event.fromPartial(e)) || [];
        message.codespace = object.codespace ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            code: object?.code,
            data: object?.data,
            log: object?.log,
            info: object?.info,
            gasWanted: object?.gas_wanted,
            gasUsed: object?.gas_used,
            events: Array.isArray(object?.events) ? object.events.map((e) => exports.Event.fromSDK(e)) : [],
            codespace: object?.codespace
        };
    },
    toSDK(message) {
        const obj = {};
        obj.code = message.code;
        obj.data = message.data;
        obj.log = message.log;
        obj.info = message.info;
        obj.gas_wanted = message.gasWanted;
        obj.gas_used = message.gasUsed;
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.Event.toSDK(e) : undefined);
        }
        else {
            obj.events = [];
        }
        obj.codespace = message.codespace;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseResponseDeliverTx();
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = object.log;
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = object.info;
        }
        if (object.gas_wanted !== undefined && object.gas_wanted !== null) {
            message.gasWanted = BigInt(object.gas_wanted);
        }
        if (object.gas_used !== undefined && object.gas_used !== null) {
            message.gasUsed = BigInt(object.gas_used);
        }
        message.events = object.events?.map(e => exports.Event.fromAmino(e)) || [];
        if (object.codespace !== undefined && object.codespace !== null) {
            message.codespace = object.codespace;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code = message.code;
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
        obj.log = message.log;
        obj.info = message.info;
        obj.gas_wanted = message.gasWanted ? message.gasWanted.toString() : undefined;
        obj.gas_used = message.gasUsed ? message.gasUsed.toString() : undefined;
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.Event.toAmino(e) : undefined);
        }
        else {
            obj.events = [];
        }
        obj.codespace = message.codespace;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseDeliverTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseDeliverTx.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseDeliverTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseDeliverTx",
            value: exports.ResponseDeliverTx.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ResponseDeliverTx.typeUrl, exports.ResponseDeliverTx);
function createBaseResponseEndBlock() {
    return {
        validatorUpdates: [],
        consensusParamUpdates: undefined,
        events: []
    };
}
exports.ResponseEndBlock = {
    typeUrl: "/tendermint.abci.ResponseEndBlock",
    is(o) {
        return o && (o.$typeUrl === exports.ResponseEndBlock.typeUrl || Array.isArray(o.validatorUpdates) && (!o.validatorUpdates.length || exports.ValidatorUpdate.is(o.validatorUpdates[0])) && Array.isArray(o.events) && (!o.events.length || exports.Event.is(o.events[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ResponseEndBlock.typeUrl || Array.isArray(o.validator_updates) && (!o.validator_updates.length || exports.ValidatorUpdate.isSDK(o.validator_updates[0])) && Array.isArray(o.events) && (!o.events.length || exports.Event.isSDK(o.events[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ResponseEndBlock.typeUrl || Array.isArray(o.validator_updates) && (!o.validator_updates.length || exports.ValidatorUpdate.isAmino(o.validator_updates[0])) && Array.isArray(o.events) && (!o.events.length || exports.Event.isAmino(o.events[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.validatorUpdates) {
            exports.ValidatorUpdate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.consensusParamUpdates !== undefined) {
            exports.ConsensusParams.encode(message.consensusParamUpdates, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.events) {
            exports.Event.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseEndBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorUpdates.push(exports.ValidatorUpdate.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.consensusParamUpdates = exports.ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
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
            validatorUpdates: Array.isArray(object?.validatorUpdates) ? object.validatorUpdates.map((e) => exports.ValidatorUpdate.fromJSON(e)) : [],
            consensusParamUpdates: (0, helpers_1.isSet)(object.consensusParamUpdates) ? exports.ConsensusParams.fromJSON(object.consensusParamUpdates) : undefined,
            events: Array.isArray(object?.events) ? object.events.map((e) => exports.Event.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.validatorUpdates) {
            obj.validatorUpdates = message.validatorUpdates.map(e => e ? exports.ValidatorUpdate.toJSON(e) : undefined);
        }
        else {
            obj.validatorUpdates = [];
        }
        message.consensusParamUpdates !== undefined && (obj.consensusParamUpdates = message.consensusParamUpdates ? exports.ConsensusParams.toJSON(message.consensusParamUpdates) : undefined);
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.Event.toJSON(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseEndBlock();
        message.validatorUpdates = object.validatorUpdates?.map(e => exports.ValidatorUpdate.fromPartial(e)) || [];
        message.consensusParamUpdates = object.consensusParamUpdates !== undefined && object.consensusParamUpdates !== null ? exports.ConsensusParams.fromPartial(object.consensusParamUpdates) : undefined;
        message.events = object.events?.map(e => exports.Event.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            validatorUpdates: Array.isArray(object?.validator_updates) ? object.validator_updates.map((e) => exports.ValidatorUpdate.fromSDK(e)) : [],
            consensusParamUpdates: object.consensus_param_updates ? exports.ConsensusParams.fromSDK(object.consensus_param_updates) : undefined,
            events: Array.isArray(object?.events) ? object.events.map((e) => exports.Event.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.validatorUpdates) {
            obj.validator_updates = message.validatorUpdates.map(e => e ? exports.ValidatorUpdate.toSDK(e) : undefined);
        }
        else {
            obj.validator_updates = [];
        }
        message.consensusParamUpdates !== undefined && (obj.consensus_param_updates = message.consensusParamUpdates ? exports.ConsensusParams.toSDK(message.consensusParamUpdates) : undefined);
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.Event.toSDK(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseResponseEndBlock();
        message.validatorUpdates = object.validator_updates?.map(e => exports.ValidatorUpdate.fromAmino(e)) || [];
        if (object.consensus_param_updates !== undefined && object.consensus_param_updates !== null) {
            message.consensusParamUpdates = exports.ConsensusParams.fromAmino(object.consensus_param_updates);
        }
        message.events = object.events?.map(e => exports.Event.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.validatorUpdates) {
            obj.validator_updates = message.validatorUpdates.map(e => e ? exports.ValidatorUpdate.toAmino(e) : undefined);
        }
        else {
            obj.validator_updates = [];
        }
        obj.consensus_param_updates = message.consensusParamUpdates ? exports.ConsensusParams.toAmino(message.consensusParamUpdates) : undefined;
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.Event.toAmino(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseEndBlock.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseEndBlock.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseEndBlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseEndBlock",
            value: exports.ResponseEndBlock.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ResponseEndBlock.typeUrl, exports.ResponseEndBlock);
function createBaseResponseCommit() {
    return {
        data: new Uint8Array(),
        retainHeight: BigInt(0)
    };
}
exports.ResponseCommit = {
    typeUrl: "/tendermint.abci.ResponseCommit",
    is(o) {
        return o && (o.$typeUrl === exports.ResponseCommit.typeUrl || (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.retainHeight === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ResponseCommit.typeUrl || (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.retain_height === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ResponseCommit.typeUrl || (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.retain_height === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.retainHeight !== BigInt(0)) {
            writer.uint32(24).int64(message.retainHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseCommit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.retainHeight = reader.int64();
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
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array(),
            retainHeight: (0, helpers_1.isSet)(object.retainHeight) ? BigInt(object.retainHeight.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        message.retainHeight !== undefined && (obj.retainHeight = (message.retainHeight || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseCommit();
        message.data = object.data ?? new Uint8Array();
        message.retainHeight = object.retainHeight !== undefined && object.retainHeight !== null ? BigInt(object.retainHeight.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            data: object?.data,
            retainHeight: object?.retain_height
        };
    },
    toSDK(message) {
        const obj = {};
        obj.data = message.data;
        obj.retain_height = message.retainHeight;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseResponseCommit();
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        if (object.retain_height !== undefined && object.retain_height !== null) {
            message.retainHeight = BigInt(object.retain_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
        obj.retain_height = message.retainHeight ? message.retainHeight.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseCommit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseCommit.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseCommit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseCommit",
            value: exports.ResponseCommit.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ResponseCommit.typeUrl, exports.ResponseCommit);
function createBaseResponseListSnapshots() {
    return {
        snapshots: []
    };
}
exports.ResponseListSnapshots = {
    typeUrl: "/tendermint.abci.ResponseListSnapshots",
    is(o) {
        return o && (o.$typeUrl === exports.ResponseListSnapshots.typeUrl || Array.isArray(o.snapshots) && (!o.snapshots.length || exports.Snapshot.is(o.snapshots[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ResponseListSnapshots.typeUrl || Array.isArray(o.snapshots) && (!o.snapshots.length || exports.Snapshot.isSDK(o.snapshots[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ResponseListSnapshots.typeUrl || Array.isArray(o.snapshots) && (!o.snapshots.length || exports.Snapshot.isAmino(o.snapshots[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.snapshots) {
            exports.Snapshot.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseListSnapshots();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshots.push(exports.Snapshot.decode(reader, reader.uint32()));
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
            snapshots: Array.isArray(object?.snapshots) ? object.snapshots.map((e) => exports.Snapshot.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.snapshots) {
            obj.snapshots = message.snapshots.map(e => e ? exports.Snapshot.toJSON(e) : undefined);
        }
        else {
            obj.snapshots = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseListSnapshots();
        message.snapshots = object.snapshots?.map(e => exports.Snapshot.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            snapshots: Array.isArray(object?.snapshots) ? object.snapshots.map((e) => exports.Snapshot.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.snapshots) {
            obj.snapshots = message.snapshots.map(e => e ? exports.Snapshot.toSDK(e) : undefined);
        }
        else {
            obj.snapshots = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseResponseListSnapshots();
        message.snapshots = object.snapshots?.map(e => exports.Snapshot.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.snapshots) {
            obj.snapshots = message.snapshots.map(e => e ? exports.Snapshot.toAmino(e) : undefined);
        }
        else {
            obj.snapshots = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseListSnapshots.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseListSnapshots.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseListSnapshots.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseListSnapshots",
            value: exports.ResponseListSnapshots.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ResponseListSnapshots.typeUrl, exports.ResponseListSnapshots);
function createBaseResponseOfferSnapshot() {
    return {
        result: 0
    };
}
exports.ResponseOfferSnapshot = {
    typeUrl: "/tendermint.abci.ResponseOfferSnapshot",
    is(o) {
        return o && (o.$typeUrl === exports.ResponseOfferSnapshot.typeUrl || (0, helpers_1.isSet)(o.result));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ResponseOfferSnapshot.typeUrl || (0, helpers_1.isSet)(o.result));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ResponseOfferSnapshot.typeUrl || (0, helpers_1.isSet)(o.result));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseOfferSnapshot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
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
            result: (0, helpers_1.isSet)(object.result) ? responseOfferSnapshot_ResultFromJSON(object.result) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = responseOfferSnapshot_ResultToJSON(message.result));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseOfferSnapshot();
        message.result = object.result ?? 0;
        return message;
    },
    fromSDK(object) {
        return {
            result: (0, helpers_1.isSet)(object.result) ? responseOfferSnapshot_ResultFromJSON(object.result) : -1
        };
    },
    toSDK(message) {
        const obj = {};
        message.result !== undefined && (obj.result = responseOfferSnapshot_ResultToJSON(message.result));
        return obj;
    },
    fromAmino(object) {
        const message = createBaseResponseOfferSnapshot();
        if (object.result !== undefined && object.result !== null) {
            message.result = responseOfferSnapshot_ResultFromJSON(object.result);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.result = responseOfferSnapshot_ResultToJSON(message.result);
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseOfferSnapshot.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseOfferSnapshot.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseOfferSnapshot.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseOfferSnapshot",
            value: exports.ResponseOfferSnapshot.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ResponseOfferSnapshot.typeUrl, exports.ResponseOfferSnapshot);
function createBaseResponseLoadSnapshotChunk() {
    return {
        chunk: new Uint8Array()
    };
}
exports.ResponseLoadSnapshotChunk = {
    typeUrl: "/tendermint.abci.ResponseLoadSnapshotChunk",
    is(o) {
        return o && (o.$typeUrl === exports.ResponseLoadSnapshotChunk.typeUrl || o.chunk instanceof Uint8Array || typeof o.chunk === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ResponseLoadSnapshotChunk.typeUrl || o.chunk instanceof Uint8Array || typeof o.chunk === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ResponseLoadSnapshotChunk.typeUrl || o.chunk instanceof Uint8Array || typeof o.chunk === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.chunk.length !== 0) {
            writer.uint32(10).bytes(message.chunk);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseLoadSnapshotChunk();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chunk = reader.bytes();
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
            chunk: (0, helpers_1.isSet)(object.chunk) ? (0, helpers_1.bytesFromBase64)(object.chunk) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.chunk !== undefined && (obj.chunk = (0, helpers_1.base64FromBytes)(message.chunk !== undefined ? message.chunk : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseLoadSnapshotChunk();
        message.chunk = object.chunk ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            chunk: object?.chunk
        };
    },
    toSDK(message) {
        const obj = {};
        obj.chunk = message.chunk;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseResponseLoadSnapshotChunk();
        if (object.chunk !== undefined && object.chunk !== null) {
            message.chunk = (0, helpers_1.bytesFromBase64)(object.chunk);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chunk = message.chunk ? (0, helpers_1.base64FromBytes)(message.chunk) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseLoadSnapshotChunk.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseLoadSnapshotChunk.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseLoadSnapshotChunk.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseLoadSnapshotChunk",
            value: exports.ResponseLoadSnapshotChunk.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ResponseLoadSnapshotChunk.typeUrl, exports.ResponseLoadSnapshotChunk);
function createBaseResponseApplySnapshotChunk() {
    return {
        result: 0,
        refetchChunks: [],
        rejectSenders: []
    };
}
exports.ResponseApplySnapshotChunk = {
    typeUrl: "/tendermint.abci.ResponseApplySnapshotChunk",
    is(o) {
        return o && (o.$typeUrl === exports.ResponseApplySnapshotChunk.typeUrl || (0, helpers_1.isSet)(o.result) && Array.isArray(o.refetchChunks) && (!o.refetchChunks.length || typeof o.refetchChunks[0] === "number") && Array.isArray(o.rejectSenders) && (!o.rejectSenders.length || typeof o.rejectSenders[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ResponseApplySnapshotChunk.typeUrl || (0, helpers_1.isSet)(o.result) && Array.isArray(o.refetch_chunks) && (!o.refetch_chunks.length || typeof o.refetch_chunks[0] === "number") && Array.isArray(o.reject_senders) && (!o.reject_senders.length || typeof o.reject_senders[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ResponseApplySnapshotChunk.typeUrl || (0, helpers_1.isSet)(o.result) && Array.isArray(o.refetch_chunks) && (!o.refetch_chunks.length || typeof o.refetch_chunks[0] === "number") && Array.isArray(o.reject_senders) && (!o.reject_senders.length || typeof o.reject_senders[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        writer.uint32(18).fork();
        for (const v of message.refetchChunks) {
            writer.uint32(v);
        }
        writer.ldelim();
        for (const v of message.rejectSenders) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseApplySnapshotChunk();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.refetchChunks.push(reader.uint32());
                        }
                    }
                    else {
                        message.refetchChunks.push(reader.uint32());
                    }
                    break;
                case 3:
                    message.rejectSenders.push(reader.string());
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
            result: (0, helpers_1.isSet)(object.result) ? responseApplySnapshotChunk_ResultFromJSON(object.result) : -1,
            refetchChunks: Array.isArray(object?.refetchChunks) ? object.refetchChunks.map((e) => Number(e)) : [],
            rejectSenders: Array.isArray(object?.rejectSenders) ? object.rejectSenders.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = responseApplySnapshotChunk_ResultToJSON(message.result));
        if (message.refetchChunks) {
            obj.refetchChunks = message.refetchChunks.map(e => Math.round(e));
        }
        else {
            obj.refetchChunks = [];
        }
        if (message.rejectSenders) {
            obj.rejectSenders = message.rejectSenders.map(e => e);
        }
        else {
            obj.rejectSenders = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseApplySnapshotChunk();
        message.result = object.result ?? 0;
        message.refetchChunks = object.refetchChunks?.map(e => e) || [];
        message.rejectSenders = object.rejectSenders?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            result: (0, helpers_1.isSet)(object.result) ? responseApplySnapshotChunk_ResultFromJSON(object.result) : -1,
            refetchChunks: Array.isArray(object?.refetch_chunks) ? object.refetch_chunks.map((e) => e) : [],
            rejectSenders: Array.isArray(object?.reject_senders) ? object.reject_senders.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        message.result !== undefined && (obj.result = responseApplySnapshotChunk_ResultToJSON(message.result));
        if (message.refetchChunks) {
            obj.refetch_chunks = message.refetchChunks.map(e => e);
        }
        else {
            obj.refetch_chunks = [];
        }
        if (message.rejectSenders) {
            obj.reject_senders = message.rejectSenders.map(e => e);
        }
        else {
            obj.reject_senders = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseResponseApplySnapshotChunk();
        if (object.result !== undefined && object.result !== null) {
            message.result = responseApplySnapshotChunk_ResultFromJSON(object.result);
        }
        message.refetchChunks = object.refetch_chunks?.map(e => e) || [];
        message.rejectSenders = object.reject_senders?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.result = responseApplySnapshotChunk_ResultToJSON(message.result);
        if (message.refetchChunks) {
            obj.refetch_chunks = message.refetchChunks.map(e => e);
        }
        else {
            obj.refetch_chunks = [];
        }
        if (message.rejectSenders) {
            obj.reject_senders = message.rejectSenders.map(e => e);
        }
        else {
            obj.reject_senders = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseApplySnapshotChunk.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseApplySnapshotChunk.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseApplySnapshotChunk.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseApplySnapshotChunk",
            value: exports.ResponseApplySnapshotChunk.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ResponseApplySnapshotChunk.typeUrl, exports.ResponseApplySnapshotChunk);
function createBaseConsensusParams() {
    return {
        block: undefined,
        evidence: undefined,
        validator: undefined,
        version: undefined
    };
}
exports.ConsensusParams = {
    typeUrl: "/tendermint.abci.ConsensusParams",
    is(o) {
        return o && o.$typeUrl === exports.ConsensusParams.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.ConsensusParams.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.ConsensusParams.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.block !== undefined) {
            exports.BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            params_1.EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
        }
        if (message.validator !== undefined) {
            params_1.ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
        }
        if (message.version !== undefined) {
            params_1.VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensusParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block = exports.BlockParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.evidence = params_1.EvidenceParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.validator = params_1.ValidatorParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.version = params_1.VersionParams.decode(reader, reader.uint32());
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
            block: (0, helpers_1.isSet)(object.block) ? exports.BlockParams.fromJSON(object.block) : undefined,
            evidence: (0, helpers_1.isSet)(object.evidence) ? params_1.EvidenceParams.fromJSON(object.evidence) : undefined,
            validator: (0, helpers_1.isSet)(object.validator) ? params_1.ValidatorParams.fromJSON(object.validator) : undefined,
            version: (0, helpers_1.isSet)(object.version) ? params_1.VersionParams.fromJSON(object.version) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.block !== undefined && (obj.block = message.block ? exports.BlockParams.toJSON(message.block) : undefined);
        message.evidence !== undefined && (obj.evidence = message.evidence ? params_1.EvidenceParams.toJSON(message.evidence) : undefined);
        message.validator !== undefined && (obj.validator = message.validator ? params_1.ValidatorParams.toJSON(message.validator) : undefined);
        message.version !== undefined && (obj.version = message.version ? params_1.VersionParams.toJSON(message.version) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConsensusParams();
        message.block = object.block !== undefined && object.block !== null ? exports.BlockParams.fromPartial(object.block) : undefined;
        message.evidence = object.evidence !== undefined && object.evidence !== null ? params_1.EvidenceParams.fromPartial(object.evidence) : undefined;
        message.validator = object.validator !== undefined && object.validator !== null ? params_1.ValidatorParams.fromPartial(object.validator) : undefined;
        message.version = object.version !== undefined && object.version !== null ? params_1.VersionParams.fromPartial(object.version) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            block: object.block ? exports.BlockParams.fromSDK(object.block) : undefined,
            evidence: object.evidence ? params_1.EvidenceParams.fromSDK(object.evidence) : undefined,
            validator: object.validator ? params_1.ValidatorParams.fromSDK(object.validator) : undefined,
            version: object.version ? params_1.VersionParams.fromSDK(object.version) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.block !== undefined && (obj.block = message.block ? exports.BlockParams.toSDK(message.block) : undefined);
        message.evidence !== undefined && (obj.evidence = message.evidence ? params_1.EvidenceParams.toSDK(message.evidence) : undefined);
        message.validator !== undefined && (obj.validator = message.validator ? params_1.ValidatorParams.toSDK(message.validator) : undefined);
        message.version !== undefined && (obj.version = message.version ? params_1.VersionParams.toSDK(message.version) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseConsensusParams();
        if (object.block !== undefined && object.block !== null) {
            message.block = exports.BlockParams.fromAmino(object.block);
        }
        if (object.evidence !== undefined && object.evidence !== null) {
            message.evidence = params_1.EvidenceParams.fromAmino(object.evidence);
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = params_1.ValidatorParams.fromAmino(object.validator);
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = params_1.VersionParams.fromAmino(object.version);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block = message.block ? exports.BlockParams.toAmino(message.block) : undefined;
        obj.evidence = message.evidence ? params_1.EvidenceParams.toAmino(message.evidence) : undefined;
        obj.validator = message.validator ? params_1.ValidatorParams.toAmino(message.validator) : undefined;
        obj.version = message.version ? params_1.VersionParams.toAmino(message.version) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ConsensusParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ConsensusParams.decode(message.value);
    },
    toProto(message) {
        return exports.ConsensusParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ConsensusParams",
            value: exports.ConsensusParams.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ConsensusParams.typeUrl, exports.ConsensusParams);
function createBaseBlockParams() {
    return {
        maxBytes: BigInt(0),
        maxGas: BigInt(0)
    };
}
exports.BlockParams = {
    typeUrl: "/tendermint.abci.BlockParams",
    is(o) {
        return o && (o.$typeUrl === exports.BlockParams.typeUrl || typeof o.maxBytes === "bigint" && typeof o.maxGas === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.BlockParams.typeUrl || typeof o.max_bytes === "bigint" && typeof o.max_gas === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.BlockParams.typeUrl || typeof o.max_bytes === "bigint" && typeof o.max_gas === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.maxBytes !== BigInt(0)) {
            writer.uint32(8).int64(message.maxBytes);
        }
        if (message.maxGas !== BigInt(0)) {
            writer.uint32(16).int64(message.maxGas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxBytes = reader.int64();
                    break;
                case 2:
                    message.maxGas = reader.int64();
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
            maxBytes: (0, helpers_1.isSet)(object.maxBytes) ? BigInt(object.maxBytes.toString()) : BigInt(0),
            maxGas: (0, helpers_1.isSet)(object.maxGas) ? BigInt(object.maxGas.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.maxBytes !== undefined && (obj.maxBytes = (message.maxBytes || BigInt(0)).toString());
        message.maxGas !== undefined && (obj.maxGas = (message.maxGas || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBlockParams();
        message.maxBytes = object.maxBytes !== undefined && object.maxBytes !== null ? BigInt(object.maxBytes.toString()) : BigInt(0);
        message.maxGas = object.maxGas !== undefined && object.maxGas !== null ? BigInt(object.maxGas.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            maxBytes: object?.max_bytes,
            maxGas: object?.max_gas
        };
    },
    toSDK(message) {
        const obj = {};
        obj.max_bytes = message.maxBytes;
        obj.max_gas = message.maxGas;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseBlockParams();
        if (object.max_bytes !== undefined && object.max_bytes !== null) {
            message.maxBytes = BigInt(object.max_bytes);
        }
        if (object.max_gas !== undefined && object.max_gas !== null) {
            message.maxGas = BigInt(object.max_gas);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.max_bytes = message.maxBytes ? message.maxBytes.toString() : undefined;
        obj.max_gas = message.maxGas ? message.maxGas.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BlockParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BlockParams.decode(message.value);
    },
    toProto(message) {
        return exports.BlockParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.BlockParams",
            value: exports.BlockParams.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.BlockParams.typeUrl, exports.BlockParams);
function createBaseLastCommitInfo() {
    return {
        round: 0,
        votes: []
    };
}
exports.LastCommitInfo = {
    typeUrl: "/tendermint.abci.LastCommitInfo",
    is(o) {
        return o && (o.$typeUrl === exports.LastCommitInfo.typeUrl || typeof o.round === "number" && Array.isArray(o.votes) && (!o.votes.length || exports.VoteInfo.is(o.votes[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.LastCommitInfo.typeUrl || typeof o.round === "number" && Array.isArray(o.votes) && (!o.votes.length || exports.VoteInfo.isSDK(o.votes[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.LastCommitInfo.typeUrl || typeof o.round === "number" && Array.isArray(o.votes) && (!o.votes.length || exports.VoteInfo.isAmino(o.votes[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.round !== 0) {
            writer.uint32(8).int32(message.round);
        }
        for (const v of message.votes) {
            exports.VoteInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLastCommitInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.round = reader.int32();
                    break;
                case 2:
                    message.votes.push(exports.VoteInfo.decode(reader, reader.uint32()));
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
            round: (0, helpers_1.isSet)(object.round) ? Number(object.round) : 0,
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => exports.VoteInfo.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.round !== undefined && (obj.round = Math.round(message.round));
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? exports.VoteInfo.toJSON(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLastCommitInfo();
        message.round = object.round ?? 0;
        message.votes = object.votes?.map(e => exports.VoteInfo.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            round: object?.round,
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => exports.VoteInfo.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.round = message.round;
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? exports.VoteInfo.toSDK(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseLastCommitInfo();
        if (object.round !== undefined && object.round !== null) {
            message.round = object.round;
        }
        message.votes = object.votes?.map(e => exports.VoteInfo.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.round = message.round;
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? exports.VoteInfo.toAmino(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.LastCommitInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.LastCommitInfo.decode(message.value);
    },
    toProto(message) {
        return exports.LastCommitInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.LastCommitInfo",
            value: exports.LastCommitInfo.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.LastCommitInfo.typeUrl, exports.LastCommitInfo);
function createBaseEvent() {
    return {
        type: "",
        attributes: []
    };
}
exports.Event = {
    typeUrl: "/tendermint.abci.Event",
    is(o) {
        return o && (o.$typeUrl === exports.Event.typeUrl || typeof o.type === "string" && Array.isArray(o.attributes) && (!o.attributes.length || exports.EventAttribute.is(o.attributes[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Event.typeUrl || typeof o.type === "string" && Array.isArray(o.attributes) && (!o.attributes.length || exports.EventAttribute.isSDK(o.attributes[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Event.typeUrl || typeof o.type === "string" && Array.isArray(o.attributes) && (!o.attributes.length || exports.EventAttribute.isAmino(o.attributes[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        for (const v of message.attributes) {
            exports.EventAttribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.attributes.push(exports.EventAttribute.decode(reader, reader.uint32()));
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
            type: (0, helpers_1.isSet)(object.type) ? String(object.type) : "",
            attributes: Array.isArray(object?.attributes) ? object.attributes.map((e) => exports.EventAttribute.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? exports.EventAttribute.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEvent();
        message.type = object.type ?? "";
        message.attributes = object.attributes?.map(e => exports.EventAttribute.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            type: object?.type,
            attributes: Array.isArray(object?.attributes) ? object.attributes.map((e) => exports.EventAttribute.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.type = message.type;
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? exports.EventAttribute.toSDK(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseEvent();
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        message.attributes = object.attributes?.map(e => exports.EventAttribute.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.type;
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? exports.EventAttribute.toAmino(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Event.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Event.decode(message.value);
    },
    toProto(message) {
        return exports.Event.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.Event",
            value: exports.Event.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Event.typeUrl, exports.Event);
function createBaseEventAttribute() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array(),
        index: false
    };
}
exports.EventAttribute = {
    typeUrl: "/tendermint.abci.EventAttribute",
    is(o) {
        return o && (o.$typeUrl === exports.EventAttribute.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string") && typeof o.index === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EventAttribute.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string") && typeof o.index === "boolean");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EventAttribute.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string") && typeof o.index === "boolean");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        if (message.index === true) {
            writer.uint32(24).bool(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventAttribute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                case 3:
                    message.index = reader.bool();
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
            key: (0, helpers_1.isSet)(object.key) ? (0, helpers_1.bytesFromBase64)(object.key) : new Uint8Array(),
            value: (0, helpers_1.isSet)(object.value) ? (0, helpers_1.bytesFromBase64)(object.value) : new Uint8Array(),
            index: (0, helpers_1.isSet)(object.index) ? Boolean(object.index) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = (0, helpers_1.base64FromBytes)(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined && (obj.value = (0, helpers_1.base64FromBytes)(message.value !== undefined ? message.value : new Uint8Array()));
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventAttribute();
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        message.index = object.index ?? false;
        return message;
    },
    fromSDK(object) {
        return {
            key: object?.key,
            value: object?.value,
            index: object?.index
        };
    },
    toSDK(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        obj.index = message.index;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseEventAttribute();
        if (object.key !== undefined && object.key !== null) {
            message.key = (0, helpers_1.bytesFromBase64)(object.key);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = (0, helpers_1.bytesFromBase64)(object.value);
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key ? (0, helpers_1.base64FromBytes)(message.key) : undefined;
        obj.value = message.value ? (0, helpers_1.base64FromBytes)(message.value) : undefined;
        obj.index = message.index;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventAttribute.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventAttribute.decode(message.value);
    },
    toProto(message) {
        return exports.EventAttribute.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.EventAttribute",
            value: exports.EventAttribute.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EventAttribute.typeUrl, exports.EventAttribute);
function createBaseTxResult() {
    return {
        height: BigInt(0),
        index: 0,
        tx: new Uint8Array(),
        result: exports.ResponseDeliverTx.fromPartial({})
    };
}
exports.TxResult = {
    typeUrl: "/tendermint.abci.TxResult",
    is(o) {
        return o && (o.$typeUrl === exports.TxResult.typeUrl || typeof o.height === "bigint" && typeof o.index === "number" && (o.tx instanceof Uint8Array || typeof o.tx === "string") && exports.ResponseDeliverTx.is(o.result));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.TxResult.typeUrl || typeof o.height === "bigint" && typeof o.index === "number" && (o.tx instanceof Uint8Array || typeof o.tx === "string") && exports.ResponseDeliverTx.isSDK(o.result));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.TxResult.typeUrl || typeof o.height === "bigint" && typeof o.index === "number" && (o.tx instanceof Uint8Array || typeof o.tx === "string") && exports.ResponseDeliverTx.isAmino(o.result));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        if (message.index !== 0) {
            writer.uint32(16).uint32(message.index);
        }
        if (message.tx.length !== 0) {
            writer.uint32(26).bytes(message.tx);
        }
        if (message.result !== undefined) {
            exports.ResponseDeliverTx.encode(message.result, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.index = reader.uint32();
                    break;
                case 3:
                    message.tx = reader.bytes();
                    break;
                case 4:
                    message.result = exports.ResponseDeliverTx.decode(reader, reader.uint32());
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
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            index: (0, helpers_1.isSet)(object.index) ? Number(object.index) : 0,
            tx: (0, helpers_1.isSet)(object.tx) ? (0, helpers_1.bytesFromBase64)(object.tx) : new Uint8Array(),
            result: (0, helpers_1.isSet)(object.result) ? exports.ResponseDeliverTx.fromJSON(object.result) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.index !== undefined && (obj.index = Math.round(message.index));
        message.tx !== undefined && (obj.tx = (0, helpers_1.base64FromBytes)(message.tx !== undefined ? message.tx : new Uint8Array()));
        message.result !== undefined && (obj.result = message.result ? exports.ResponseDeliverTx.toJSON(message.result) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxResult();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.index = object.index ?? 0;
        message.tx = object.tx ?? new Uint8Array();
        message.result = object.result !== undefined && object.result !== null ? exports.ResponseDeliverTx.fromPartial(object.result) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            height: object?.height,
            index: object?.index,
            tx: object?.tx,
            result: object.result ? exports.ResponseDeliverTx.fromSDK(object.result) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.height = message.height;
        obj.index = message.index;
        obj.tx = message.tx;
        message.result !== undefined && (obj.result = message.result ? exports.ResponseDeliverTx.toSDK(message.result) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseTxResult();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = (0, helpers_1.bytesFromBase64)(object.tx);
        }
        if (object.result !== undefined && object.result !== null) {
            message.result = exports.ResponseDeliverTx.fromAmino(object.result);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.index = message.index;
        obj.tx = message.tx ? (0, helpers_1.base64FromBytes)(message.tx) : undefined;
        obj.result = message.result ? exports.ResponseDeliverTx.toAmino(message.result) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TxResult.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.TxResult.decode(message.value);
    },
    toProto(message) {
        return exports.TxResult.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.TxResult",
            value: exports.TxResult.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.TxResult.typeUrl, exports.TxResult);
function createBaseValidator() {
    return {
        address: new Uint8Array(),
        power: BigInt(0)
    };
}
exports.Validator = {
    typeUrl: "/tendermint.abci.Validator",
    is(o) {
        return o && (o.$typeUrl === exports.Validator.typeUrl || (o.address instanceof Uint8Array || typeof o.address === "string") && typeof o.power === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Validator.typeUrl || (o.address instanceof Uint8Array || typeof o.address === "string") && typeof o.power === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Validator.typeUrl || (o.address instanceof Uint8Array || typeof o.address === "string") && typeof o.power === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address.length !== 0) {
            writer.uint32(10).bytes(message.address);
        }
        if (message.power !== BigInt(0)) {
            writer.uint32(24).int64(message.power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.bytes();
                    break;
                case 3:
                    message.power = reader.int64();
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
            address: (0, helpers_1.isSet)(object.address) ? (0, helpers_1.bytesFromBase64)(object.address) : new Uint8Array(),
            power: (0, helpers_1.isSet)(object.power) ? BigInt(object.power.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = (0, helpers_1.base64FromBytes)(message.address !== undefined ? message.address : new Uint8Array()));
        message.power !== undefined && (obj.power = (message.power || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidator();
        message.address = object.address ?? new Uint8Array();
        message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address,
            power: object?.power
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        obj.power = message.power;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseValidator();
        if (object.address !== undefined && object.address !== null) {
            message.address = (0, helpers_1.bytesFromBase64)(object.address);
        }
        if (object.power !== undefined && object.power !== null) {
            message.power = BigInt(object.power);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address ? (0, helpers_1.base64FromBytes)(message.address) : undefined;
        obj.power = message.power ? message.power.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Validator.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Validator.decode(message.value);
    },
    toProto(message) {
        return exports.Validator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.Validator",
            value: exports.Validator.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Validator.typeUrl, exports.Validator);
function createBaseValidatorUpdate() {
    return {
        pubKey: keys_1.PublicKey.fromPartial({}),
        power: BigInt(0)
    };
}
exports.ValidatorUpdate = {
    typeUrl: "/tendermint.abci.ValidatorUpdate",
    is(o) {
        return o && (o.$typeUrl === exports.ValidatorUpdate.typeUrl || keys_1.PublicKey.is(o.pubKey) && typeof o.power === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ValidatorUpdate.typeUrl || keys_1.PublicKey.isSDK(o.pub_key) && typeof o.power === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ValidatorUpdate.typeUrl || keys_1.PublicKey.isAmino(o.pub_key) && typeof o.power === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pubKey !== undefined) {
            keys_1.PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.power !== BigInt(0)) {
            writer.uint32(16).int64(message.power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pubKey = keys_1.PublicKey.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.power = reader.int64();
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
            pubKey: (0, helpers_1.isSet)(object.pubKey) ? keys_1.PublicKey.fromJSON(object.pubKey) : undefined,
            power: (0, helpers_1.isSet)(object.power) ? BigInt(object.power.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.pubKey !== undefined && (obj.pubKey = message.pubKey ? keys_1.PublicKey.toJSON(message.pubKey) : undefined);
        message.power !== undefined && (obj.power = (message.power || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorUpdate();
        message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? keys_1.PublicKey.fromPartial(object.pubKey) : undefined;
        message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            pubKey: object.pub_key ? keys_1.PublicKey.fromSDK(object.pub_key) : undefined,
            power: object?.power
        };
    },
    toSDK(message) {
        const obj = {};
        message.pubKey !== undefined && (obj.pub_key = message.pubKey ? keys_1.PublicKey.toSDK(message.pubKey) : undefined);
        obj.power = message.power;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseValidatorUpdate();
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pubKey = keys_1.PublicKey.fromAmino(object.pub_key);
        }
        if (object.power !== undefined && object.power !== null) {
            message.power = BigInt(object.power);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pub_key = message.pubKey ? keys_1.PublicKey.toAmino(message.pubKey) : undefined;
        obj.power = message.power ? message.power.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorUpdate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ValidatorUpdate.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorUpdate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ValidatorUpdate",
            value: exports.ValidatorUpdate.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ValidatorUpdate.typeUrl, exports.ValidatorUpdate);
function createBaseVoteInfo() {
    return {
        validator: exports.Validator.fromPartial({}),
        signedLastBlock: false
    };
}
exports.VoteInfo = {
    typeUrl: "/tendermint.abci.VoteInfo",
    is(o) {
        return o && (o.$typeUrl === exports.VoteInfo.typeUrl || exports.Validator.is(o.validator) && typeof o.signedLastBlock === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.VoteInfo.typeUrl || exports.Validator.isSDK(o.validator) && typeof o.signed_last_block === "boolean");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.VoteInfo.typeUrl || exports.Validator.isAmino(o.validator) && typeof o.signed_last_block === "boolean");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validator !== undefined) {
            exports.Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
        }
        if (message.signedLastBlock === true) {
            writer.uint32(16).bool(message.signedLastBlock);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVoteInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = exports.Validator.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signedLastBlock = reader.bool();
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
            validator: (0, helpers_1.isSet)(object.validator) ? exports.Validator.fromJSON(object.validator) : undefined,
            signedLastBlock: (0, helpers_1.isSet)(object.signedLastBlock) ? Boolean(object.signedLastBlock) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator !== undefined && (obj.validator = message.validator ? exports.Validator.toJSON(message.validator) : undefined);
        message.signedLastBlock !== undefined && (obj.signedLastBlock = message.signedLastBlock);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVoteInfo();
        message.validator = object.validator !== undefined && object.validator !== null ? exports.Validator.fromPartial(object.validator) : undefined;
        message.signedLastBlock = object.signedLastBlock ?? false;
        return message;
    },
    fromSDK(object) {
        return {
            validator: object.validator ? exports.Validator.fromSDK(object.validator) : undefined,
            signedLastBlock: object?.signed_last_block
        };
    },
    toSDK(message) {
        const obj = {};
        message.validator !== undefined && (obj.validator = message.validator ? exports.Validator.toSDK(message.validator) : undefined);
        obj.signed_last_block = message.signedLastBlock;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseVoteInfo();
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = exports.Validator.fromAmino(object.validator);
        }
        if (object.signed_last_block !== undefined && object.signed_last_block !== null) {
            message.signedLastBlock = object.signed_last_block;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator = message.validator ? exports.Validator.toAmino(message.validator) : undefined;
        obj.signed_last_block = message.signedLastBlock;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.VoteInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.VoteInfo.decode(message.value);
    },
    toProto(message) {
        return exports.VoteInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.VoteInfo",
            value: exports.VoteInfo.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.VoteInfo.typeUrl, exports.VoteInfo);
function createBaseEvidence() {
    return {
        type: 0,
        validator: exports.Validator.fromPartial({}),
        height: BigInt(0),
        time: new Date(),
        totalVotingPower: BigInt(0)
    };
}
exports.Evidence = {
    typeUrl: "/tendermint.abci.Evidence",
    is(o) {
        return o && (o.$typeUrl === exports.Evidence.typeUrl || (0, helpers_1.isSet)(o.type) && exports.Validator.is(o.validator) && typeof o.height === "bigint" && timestamp_1.Timestamp.is(o.time) && typeof o.totalVotingPower === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Evidence.typeUrl || (0, helpers_1.isSet)(o.type) && exports.Validator.isSDK(o.validator) && typeof o.height === "bigint" && timestamp_1.Timestamp.isSDK(o.time) && typeof o.total_voting_power === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Evidence.typeUrl || (0, helpers_1.isSet)(o.type) && exports.Validator.isAmino(o.validator) && typeof o.height === "bigint" && timestamp_1.Timestamp.isAmino(o.time) && typeof o.total_voting_power === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.validator !== undefined) {
            exports.Validator.encode(message.validator, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(24).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.time), writer.uint32(34).fork()).ldelim();
        }
        if (message.totalVotingPower !== BigInt(0)) {
            writer.uint32(40).int64(message.totalVotingPower);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvidence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.validator = exports.Validator.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.totalVotingPower = reader.int64();
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
            type: (0, helpers_1.isSet)(object.type) ? evidenceTypeFromJSON(object.type) : -1,
            validator: (0, helpers_1.isSet)(object.validator) ? exports.Validator.fromJSON(object.validator) : undefined,
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            time: (0, helpers_1.isSet)(object.time) ? new Date(object.time) : undefined,
            totalVotingPower: (0, helpers_1.isSet)(object.totalVotingPower) ? BigInt(object.totalVotingPower.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = evidenceTypeToJSON(message.type));
        message.validator !== undefined && (obj.validator = message.validator ? exports.Validator.toJSON(message.validator) : undefined);
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.totalVotingPower !== undefined && (obj.totalVotingPower = (message.totalVotingPower || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEvidence();
        message.type = object.type ?? 0;
        message.validator = object.validator !== undefined && object.validator !== null ? exports.Validator.fromPartial(object.validator) : undefined;
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.time = object.time ?? undefined;
        message.totalVotingPower = object.totalVotingPower !== undefined && object.totalVotingPower !== null ? BigInt(object.totalVotingPower.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            type: (0, helpers_1.isSet)(object.type) ? evidenceTypeFromJSON(object.type) : -1,
            validator: object.validator ? exports.Validator.fromSDK(object.validator) : undefined,
            height: object?.height,
            time: object.time ?? undefined,
            totalVotingPower: object?.total_voting_power
        };
    },
    toSDK(message) {
        const obj = {};
        message.type !== undefined && (obj.type = evidenceTypeToJSON(message.type));
        message.validator !== undefined && (obj.validator = message.validator ? exports.Validator.toSDK(message.validator) : undefined);
        obj.height = message.height;
        message.time !== undefined && (obj.time = message.time ?? undefined);
        obj.total_voting_power = message.totalVotingPower;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseEvidence();
        if (object.type !== undefined && object.type !== null) {
            message.type = evidenceTypeFromJSON(object.type);
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = exports.Validator.fromAmino(object.validator);
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.time));
        }
        if (object.total_voting_power !== undefined && object.total_voting_power !== null) {
            message.totalVotingPower = BigInt(object.total_voting_power);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.type = evidenceTypeToJSON(message.type);
        obj.validator = message.validator ? exports.Validator.toAmino(message.validator) : undefined;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.time = message.time ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.time)) : undefined;
        obj.total_voting_power = message.totalVotingPower ? message.totalVotingPower.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Evidence.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Evidence.decode(message.value);
    },
    toProto(message) {
        return exports.Evidence.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.Evidence",
            value: exports.Evidence.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Evidence.typeUrl, exports.Evidence);
function createBaseSnapshot() {
    return {
        height: BigInt(0),
        format: 0,
        chunks: 0,
        hash: new Uint8Array(),
        metadata: new Uint8Array()
    };
}
exports.Snapshot = {
    typeUrl: "/tendermint.abci.Snapshot",
    is(o) {
        return o && (o.$typeUrl === exports.Snapshot.typeUrl || typeof o.height === "bigint" && typeof o.format === "number" && typeof o.chunks === "number" && (o.hash instanceof Uint8Array || typeof o.hash === "string") && (o.metadata instanceof Uint8Array || typeof o.metadata === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Snapshot.typeUrl || typeof o.height === "bigint" && typeof o.format === "number" && typeof o.chunks === "number" && (o.hash instanceof Uint8Array || typeof o.hash === "string") && (o.metadata instanceof Uint8Array || typeof o.metadata === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Snapshot.typeUrl || typeof o.height === "bigint" && typeof o.format === "number" && typeof o.chunks === "number" && (o.hash instanceof Uint8Array || typeof o.hash === "string") && (o.metadata instanceof Uint8Array || typeof o.metadata === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.chunks !== 0) {
            writer.uint32(24).uint32(message.chunks);
        }
        if (message.hash.length !== 0) {
            writer.uint32(34).bytes(message.hash);
        }
        if (message.metadata.length !== 0) {
            writer.uint32(42).bytes(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.uint64();
                    break;
                case 2:
                    message.format = reader.uint32();
                    break;
                case 3:
                    message.chunks = reader.uint32();
                    break;
                case 4:
                    message.hash = reader.bytes();
                    break;
                case 5:
                    message.metadata = reader.bytes();
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
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            format: (0, helpers_1.isSet)(object.format) ? Number(object.format) : 0,
            chunks: (0, helpers_1.isSet)(object.chunks) ? Number(object.chunks) : 0,
            hash: (0, helpers_1.isSet)(object.hash) ? (0, helpers_1.bytesFromBase64)(object.hash) : new Uint8Array(),
            metadata: (0, helpers_1.isSet)(object.metadata) ? (0, helpers_1.bytesFromBase64)(object.metadata) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.format !== undefined && (obj.format = Math.round(message.format));
        message.chunks !== undefined && (obj.chunks = Math.round(message.chunks));
        message.hash !== undefined && (obj.hash = (0, helpers_1.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.metadata !== undefined && (obj.metadata = (0, helpers_1.base64FromBytes)(message.metadata !== undefined ? message.metadata : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSnapshot();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.format = object.format ?? 0;
        message.chunks = object.chunks ?? 0;
        message.hash = object.hash ?? new Uint8Array();
        message.metadata = object.metadata ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            height: object?.height,
            format: object?.format,
            chunks: object?.chunks,
            hash: object?.hash,
            metadata: object?.metadata
        };
    },
    toSDK(message) {
        const obj = {};
        obj.height = message.height;
        obj.format = message.format;
        obj.chunks = message.chunks;
        obj.hash = message.hash;
        obj.metadata = message.metadata;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSnapshot();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = object.format;
        }
        if (object.chunks !== undefined && object.chunks !== null) {
            message.chunks = object.chunks;
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = (0, helpers_1.bytesFromBase64)(object.hash);
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = (0, helpers_1.bytesFromBase64)(object.metadata);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.format = message.format;
        obj.chunks = message.chunks;
        obj.hash = message.hash ? (0, helpers_1.base64FromBytes)(message.hash) : undefined;
        obj.metadata = message.metadata ? (0, helpers_1.base64FromBytes)(message.metadata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Snapshot.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Snapshot.decode(message.value);
    },
    toProto(message) {
        return exports.Snapshot.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.Snapshot",
            value: exports.Snapshot.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Snapshot.typeUrl, exports.Snapshot);
