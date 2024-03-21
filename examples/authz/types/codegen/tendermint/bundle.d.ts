import * as _179 from "./abci/types";
import * as _180 from "./crypto/keys";
import * as _181 from "./crypto/proof";
import * as _182 from "./libs/bits/types";
import * as _183 from "./p2p/types";
import * as _184 from "./types/block";
import * as _185 from "./types/evidence";
import * as _186 from "./types/params";
import * as _187 from "./types/types";
import * as _188 from "./types/validator";
import * as _189 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _179.CheckTxType;
        checkTxTypeToJSON(object: _179.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _179.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _179.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _179.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _179.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _179.EvidenceType;
        evidenceTypeToJSON(object: _179.EvidenceType): string;
        CheckTxType: typeof _179.CheckTxType;
        CheckTxTypeSDKType: typeof _179.CheckTxType;
        CheckTxTypeAmino: typeof _179.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _179.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _179.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultAmino: typeof _179.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _179.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _179.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultAmino: typeof _179.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _179.EvidenceType;
        EvidenceTypeSDKType: typeof _179.EvidenceType;
        EvidenceTypeAmino: typeof _179.EvidenceType;
        Request: {
            typeUrl: string;
            is(o: any): o is _179.Request;
            isSDK(o: any): o is _179.RequestSDKType;
            isAmino(o: any): o is _179.RequestAmino;
            encode(message: _179.Request, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.Request;
            fromJSON(object: any): _179.Request;
            toJSON(message: _179.Request): unknown;
            fromPartial(object: {
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    version?: string;
                    blockVersion?: bigint;
                    p2pVersion?: bigint;
                };
                setOption?: {
                    key?: string;
                    value?: string;
                };
                initChain?: {
                    time?: Date;
                    chainId?: string;
                    consensusParams?: {
                        block?: {
                            maxBytes?: bigint;
                            maxGas?: bigint;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: bigint;
                            maxAgeDuration?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            maxBytes?: bigint;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: bigint;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: bigint;
                    }[];
                    appStateBytes?: Uint8Array;
                    initialHeight?: bigint;
                };
                query?: {
                    data?: Uint8Array;
                    path?: string;
                    height?: bigint;
                    prove?: boolean;
                };
                beginBlock?: {
                    hash?: Uint8Array;
                    header?: {
                        version?: {
                            block?: bigint;
                            app?: bigint;
                        };
                        chainId?: string;
                        height?: bigint;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    lastCommitInfo?: {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: bigint;
                            };
                            signedLastBlock?: boolean;
                        }[];
                    };
                    byzantineValidators?: {
                        type?: _179.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: bigint;
                        };
                        height?: bigint;
                        time?: Date;
                        totalVotingPower?: bigint;
                    }[];
                };
                checkTx?: {
                    tx?: Uint8Array;
                    type?: _179.CheckTxType;
                };
                deliverTx?: {
                    tx?: Uint8Array;
                };
                endBlock?: {
                    height?: bigint;
                };
                commit?: {};
                listSnapshots?: {};
                offerSnapshot?: {
                    snapshot?: {
                        height?: bigint;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    };
                    appHash?: Uint8Array;
                };
                loadSnapshotChunk?: {
                    height?: bigint;
                    format?: number;
                    chunk?: number;
                };
                applySnapshotChunk?: {
                    index?: number;
                    chunk?: Uint8Array;
                    sender?: string;
                };
            }): _179.Request;
            fromSDK(object: _179.RequestSDKType): _179.Request;
            toSDK(message: _179.Request): _179.RequestSDKType;
            fromAmino(object: _179.RequestAmino): _179.Request;
            toAmino(message: _179.Request): _179.RequestAmino;
            fromAminoMsg(object: _179.RequestAminoMsg): _179.Request;
            fromProtoMsg(message: _179.RequestProtoMsg): _179.Request;
            toProto(message: _179.Request): Uint8Array;
            toProtoMsg(message: _179.Request): _179.RequestProtoMsg;
        };
        RequestEcho: {
            typeUrl: string;
            is(o: any): o is _179.RequestEcho;
            isSDK(o: any): o is _179.RequestEchoSDKType;
            isAmino(o: any): o is _179.RequestEchoAmino;
            encode(message: _179.RequestEcho, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.RequestEcho;
            fromJSON(object: any): _179.RequestEcho;
            toJSON(message: _179.RequestEcho): unknown;
            fromPartial(object: {
                message?: string;
            }): _179.RequestEcho;
            fromSDK(object: _179.RequestEchoSDKType): _179.RequestEcho;
            toSDK(message: _179.RequestEcho): _179.RequestEchoSDKType;
            fromAmino(object: _179.RequestEchoAmino): _179.RequestEcho;
            toAmino(message: _179.RequestEcho): _179.RequestEchoAmino;
            fromAminoMsg(object: _179.RequestEchoAminoMsg): _179.RequestEcho;
            fromProtoMsg(message: _179.RequestEchoProtoMsg): _179.RequestEcho;
            toProto(message: _179.RequestEcho): Uint8Array;
            toProtoMsg(message: _179.RequestEcho): _179.RequestEchoProtoMsg;
        };
        RequestFlush: {
            typeUrl: string;
            is(o: any): o is _179.RequestFlush;
            isSDK(o: any): o is _179.RequestFlushSDKType;
            isAmino(o: any): o is _179.RequestFlushAmino;
            encode(_: _179.RequestFlush, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.RequestFlush;
            fromJSON(_: any): _179.RequestFlush;
            toJSON(_: _179.RequestFlush): unknown;
            fromPartial(_: {}): _179.RequestFlush;
            fromSDK(_: _179.RequestFlushSDKType): _179.RequestFlush;
            toSDK(_: _179.RequestFlush): _179.RequestFlushSDKType;
            fromAmino(_: _179.RequestFlushAmino): _179.RequestFlush;
            toAmino(_: _179.RequestFlush): _179.RequestFlushAmino;
            fromAminoMsg(object: _179.RequestFlushAminoMsg): _179.RequestFlush;
            fromProtoMsg(message: _179.RequestFlushProtoMsg): _179.RequestFlush;
            toProto(message: _179.RequestFlush): Uint8Array;
            toProtoMsg(message: _179.RequestFlush): _179.RequestFlushProtoMsg;
        };
        RequestInfo: {
            typeUrl: string;
            is(o: any): o is _179.RequestInfo;
            isSDK(o: any): o is _179.RequestInfoSDKType;
            isAmino(o: any): o is _179.RequestInfoAmino;
            encode(message: _179.RequestInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.RequestInfo;
            fromJSON(object: any): _179.RequestInfo;
            toJSON(message: _179.RequestInfo): unknown;
            fromPartial(object: {
                version?: string;
                blockVersion?: bigint;
                p2pVersion?: bigint;
            }): _179.RequestInfo;
            fromSDK(object: _179.RequestInfoSDKType): _179.RequestInfo;
            toSDK(message: _179.RequestInfo): _179.RequestInfoSDKType;
            fromAmino(object: _179.RequestInfoAmino): _179.RequestInfo;
            toAmino(message: _179.RequestInfo): _179.RequestInfoAmino;
            fromAminoMsg(object: _179.RequestInfoAminoMsg): _179.RequestInfo;
            fromProtoMsg(message: _179.RequestInfoProtoMsg): _179.RequestInfo;
            toProto(message: _179.RequestInfo): Uint8Array;
            toProtoMsg(message: _179.RequestInfo): _179.RequestInfoProtoMsg;
        };
        RequestSetOption: {
            typeUrl: string;
            is(o: any): o is _179.RequestSetOption;
            isSDK(o: any): o is _179.RequestSetOptionSDKType;
            isAmino(o: any): o is _179.RequestSetOptionAmino;
            encode(message: _179.RequestSetOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.RequestSetOption;
            fromJSON(object: any): _179.RequestSetOption;
            toJSON(message: _179.RequestSetOption): unknown;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _179.RequestSetOption;
            fromSDK(object: _179.RequestSetOptionSDKType): _179.RequestSetOption;
            toSDK(message: _179.RequestSetOption): _179.RequestSetOptionSDKType;
            fromAmino(object: _179.RequestSetOptionAmino): _179.RequestSetOption;
            toAmino(message: _179.RequestSetOption): _179.RequestSetOptionAmino;
            fromAminoMsg(object: _179.RequestSetOptionAminoMsg): _179.RequestSetOption;
            fromProtoMsg(message: _179.RequestSetOptionProtoMsg): _179.RequestSetOption;
            toProto(message: _179.RequestSetOption): Uint8Array;
            toProtoMsg(message: _179.RequestSetOption): _179.RequestSetOptionProtoMsg;
        };
        RequestInitChain: {
            typeUrl: string;
            is(o: any): o is _179.RequestInitChain;
            isSDK(o: any): o is _179.RequestInitChainSDKType;
            isAmino(o: any): o is _179.RequestInitChainAmino;
            encode(message: _179.RequestInitChain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.RequestInitChain;
            fromJSON(object: any): _179.RequestInitChain;
            toJSON(message: _179.RequestInitChain): unknown;
            fromPartial(object: {
                time?: Date;
                chainId?: string;
                consensusParams?: {
                    block?: {
                        maxBytes?: bigint;
                        maxGas?: bigint;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: bigint;
                        maxAgeDuration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        maxBytes?: bigint;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: bigint;
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: bigint;
                }[];
                appStateBytes?: Uint8Array;
                initialHeight?: bigint;
            }): _179.RequestInitChain;
            fromSDK(object: _179.RequestInitChainSDKType): _179.RequestInitChain;
            toSDK(message: _179.RequestInitChain): _179.RequestInitChainSDKType;
            fromAmino(object: _179.RequestInitChainAmino): _179.RequestInitChain;
            toAmino(message: _179.RequestInitChain): _179.RequestInitChainAmino;
            fromAminoMsg(object: _179.RequestInitChainAminoMsg): _179.RequestInitChain;
            fromProtoMsg(message: _179.RequestInitChainProtoMsg): _179.RequestInitChain;
            toProto(message: _179.RequestInitChain): Uint8Array;
            toProtoMsg(message: _179.RequestInitChain): _179.RequestInitChainProtoMsg;
        };
        RequestQuery: {
            typeUrl: string;
            is(o: any): o is _179.RequestQuery;
            isSDK(o: any): o is _179.RequestQuerySDKType;
            isAmino(o: any): o is _179.RequestQueryAmino;
            encode(message: _179.RequestQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.RequestQuery;
            fromJSON(object: any): _179.RequestQuery;
            toJSON(message: _179.RequestQuery): unknown;
            fromPartial(object: {
                data?: Uint8Array;
                path?: string;
                height?: bigint;
                prove?: boolean;
            }): _179.RequestQuery;
            fromSDK(object: _179.RequestQuerySDKType): _179.RequestQuery;
            toSDK(message: _179.RequestQuery): _179.RequestQuerySDKType;
            fromAmino(object: _179.RequestQueryAmino): _179.RequestQuery;
            toAmino(message: _179.RequestQuery): _179.RequestQueryAmino;
            fromAminoMsg(object: _179.RequestQueryAminoMsg): _179.RequestQuery;
            fromProtoMsg(message: _179.RequestQueryProtoMsg): _179.RequestQuery;
            toProto(message: _179.RequestQuery): Uint8Array;
            toProtoMsg(message: _179.RequestQuery): _179.RequestQueryProtoMsg;
        };
        RequestBeginBlock: {
            typeUrl: string;
            is(o: any): o is _179.RequestBeginBlock;
            isSDK(o: any): o is _179.RequestBeginBlockSDKType;
            isAmino(o: any): o is _179.RequestBeginBlockAmino;
            encode(message: _179.RequestBeginBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.RequestBeginBlock;
            fromJSON(object: any): _179.RequestBeginBlock;
            toJSON(message: _179.RequestBeginBlock): unknown;
            fromPartial(object: {
                hash?: Uint8Array;
                header?: {
                    version?: {
                        block?: bigint;
                        app?: bigint;
                    };
                    chainId?: string;
                    height?: bigint;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                lastCommitInfo?: {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: bigint;
                        };
                        signedLastBlock?: boolean;
                    }[];
                };
                byzantineValidators?: {
                    type?: _179.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: bigint;
                    };
                    height?: bigint;
                    time?: Date;
                    totalVotingPower?: bigint;
                }[];
            }): _179.RequestBeginBlock;
            fromSDK(object: _179.RequestBeginBlockSDKType): _179.RequestBeginBlock;
            toSDK(message: _179.RequestBeginBlock): _179.RequestBeginBlockSDKType;
            fromAmino(object: _179.RequestBeginBlockAmino): _179.RequestBeginBlock;
            toAmino(message: _179.RequestBeginBlock): _179.RequestBeginBlockAmino;
            fromAminoMsg(object: _179.RequestBeginBlockAminoMsg): _179.RequestBeginBlock;
            fromProtoMsg(message: _179.RequestBeginBlockProtoMsg): _179.RequestBeginBlock;
            toProto(message: _179.RequestBeginBlock): Uint8Array;
            toProtoMsg(message: _179.RequestBeginBlock): _179.RequestBeginBlockProtoMsg;
        };
        RequestCheckTx: {
            typeUrl: string;
            is(o: any): o is _179.RequestCheckTx;
            isSDK(o: any): o is _179.RequestCheckTxSDKType;
            isAmino(o: any): o is _179.RequestCheckTxAmino;
            encode(message: _179.RequestCheckTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.RequestCheckTx;
            fromJSON(object: any): _179.RequestCheckTx;
            toJSON(message: _179.RequestCheckTx): unknown;
            fromPartial(object: {
                tx?: Uint8Array;
                type?: _179.CheckTxType;
            }): _179.RequestCheckTx;
            fromSDK(object: _179.RequestCheckTxSDKType): _179.RequestCheckTx;
            toSDK(message: _179.RequestCheckTx): _179.RequestCheckTxSDKType;
            fromAmino(object: _179.RequestCheckTxAmino): _179.RequestCheckTx;
            toAmino(message: _179.RequestCheckTx): _179.RequestCheckTxAmino;
            fromAminoMsg(object: _179.RequestCheckTxAminoMsg): _179.RequestCheckTx;
            fromProtoMsg(message: _179.RequestCheckTxProtoMsg): _179.RequestCheckTx;
            toProto(message: _179.RequestCheckTx): Uint8Array;
            toProtoMsg(message: _179.RequestCheckTx): _179.RequestCheckTxProtoMsg;
        };
        RequestDeliverTx: {
            typeUrl: string;
            is(o: any): o is _179.RequestDeliverTx;
            isSDK(o: any): o is _179.RequestDeliverTxSDKType;
            isAmino(o: any): o is _179.RequestDeliverTxAmino;
            encode(message: _179.RequestDeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.RequestDeliverTx;
            fromJSON(object: any): _179.RequestDeliverTx;
            toJSON(message: _179.RequestDeliverTx): unknown;
            fromPartial(object: {
                tx?: Uint8Array;
            }): _179.RequestDeliverTx;
            fromSDK(object: _179.RequestDeliverTxSDKType): _179.RequestDeliverTx;
            toSDK(message: _179.RequestDeliverTx): _179.RequestDeliverTxSDKType;
            fromAmino(object: _179.RequestDeliverTxAmino): _179.RequestDeliverTx;
            toAmino(message: _179.RequestDeliverTx): _179.RequestDeliverTxAmino;
            fromAminoMsg(object: _179.RequestDeliverTxAminoMsg): _179.RequestDeliverTx;
            fromProtoMsg(message: _179.RequestDeliverTxProtoMsg): _179.RequestDeliverTx;
            toProto(message: _179.RequestDeliverTx): Uint8Array;
            toProtoMsg(message: _179.RequestDeliverTx): _179.RequestDeliverTxProtoMsg;
        };
        RequestEndBlock: {
            typeUrl: string;
            is(o: any): o is _179.RequestEndBlock;
            isSDK(o: any): o is _179.RequestEndBlockSDKType;
            isAmino(o: any): o is _179.RequestEndBlockAmino;
            encode(message: _179.RequestEndBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.RequestEndBlock;
            fromJSON(object: any): _179.RequestEndBlock;
            toJSON(message: _179.RequestEndBlock): unknown;
            fromPartial(object: {
                height?: bigint;
            }): _179.RequestEndBlock;
            fromSDK(object: _179.RequestEndBlockSDKType): _179.RequestEndBlock;
            toSDK(message: _179.RequestEndBlock): _179.RequestEndBlockSDKType;
            fromAmino(object: _179.RequestEndBlockAmino): _179.RequestEndBlock;
            toAmino(message: _179.RequestEndBlock): _179.RequestEndBlockAmino;
            fromAminoMsg(object: _179.RequestEndBlockAminoMsg): _179.RequestEndBlock;
            fromProtoMsg(message: _179.RequestEndBlockProtoMsg): _179.RequestEndBlock;
            toProto(message: _179.RequestEndBlock): Uint8Array;
            toProtoMsg(message: _179.RequestEndBlock): _179.RequestEndBlockProtoMsg;
        };
        RequestCommit: {
            typeUrl: string;
            is(o: any): o is _179.RequestCommit;
            isSDK(o: any): o is _179.RequestCommitSDKType;
            isAmino(o: any): o is _179.RequestCommitAmino;
            encode(_: _179.RequestCommit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.RequestCommit;
            fromJSON(_: any): _179.RequestCommit;
            toJSON(_: _179.RequestCommit): unknown;
            fromPartial(_: {}): _179.RequestCommit;
            fromSDK(_: _179.RequestCommitSDKType): _179.RequestCommit;
            toSDK(_: _179.RequestCommit): _179.RequestCommitSDKType;
            fromAmino(_: _179.RequestCommitAmino): _179.RequestCommit;
            toAmino(_: _179.RequestCommit): _179.RequestCommitAmino;
            fromAminoMsg(object: _179.RequestCommitAminoMsg): _179.RequestCommit;
            fromProtoMsg(message: _179.RequestCommitProtoMsg): _179.RequestCommit;
            toProto(message: _179.RequestCommit): Uint8Array;
            toProtoMsg(message: _179.RequestCommit): _179.RequestCommitProtoMsg;
        };
        RequestListSnapshots: {
            typeUrl: string;
            is(o: any): o is _179.RequestListSnapshots;
            isSDK(o: any): o is _179.RequestListSnapshotsSDKType;
            isAmino(o: any): o is _179.RequestListSnapshotsAmino;
            encode(_: _179.RequestListSnapshots, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.RequestListSnapshots;
            fromJSON(_: any): _179.RequestListSnapshots;
            toJSON(_: _179.RequestListSnapshots): unknown;
            fromPartial(_: {}): _179.RequestListSnapshots;
            fromSDK(_: _179.RequestListSnapshotsSDKType): _179.RequestListSnapshots;
            toSDK(_: _179.RequestListSnapshots): _179.RequestListSnapshotsSDKType;
            fromAmino(_: _179.RequestListSnapshotsAmino): _179.RequestListSnapshots;
            toAmino(_: _179.RequestListSnapshots): _179.RequestListSnapshotsAmino;
            fromAminoMsg(object: _179.RequestListSnapshotsAminoMsg): _179.RequestListSnapshots;
            fromProtoMsg(message: _179.RequestListSnapshotsProtoMsg): _179.RequestListSnapshots;
            toProto(message: _179.RequestListSnapshots): Uint8Array;
            toProtoMsg(message: _179.RequestListSnapshots): _179.RequestListSnapshotsProtoMsg;
        };
        RequestOfferSnapshot: {
            typeUrl: string;
            is(o: any): o is _179.RequestOfferSnapshot;
            isSDK(o: any): o is _179.RequestOfferSnapshotSDKType;
            isAmino(o: any): o is _179.RequestOfferSnapshotAmino;
            encode(message: _179.RequestOfferSnapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.RequestOfferSnapshot;
            fromJSON(object: any): _179.RequestOfferSnapshot;
            toJSON(message: _179.RequestOfferSnapshot): unknown;
            fromPartial(object: {
                snapshot?: {
                    height?: bigint;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                };
                appHash?: Uint8Array;
            }): _179.RequestOfferSnapshot;
            fromSDK(object: _179.RequestOfferSnapshotSDKType): _179.RequestOfferSnapshot;
            toSDK(message: _179.RequestOfferSnapshot): _179.RequestOfferSnapshotSDKType;
            fromAmino(object: _179.RequestOfferSnapshotAmino): _179.RequestOfferSnapshot;
            toAmino(message: _179.RequestOfferSnapshot): _179.RequestOfferSnapshotAmino;
            fromAminoMsg(object: _179.RequestOfferSnapshotAminoMsg): _179.RequestOfferSnapshot;
            fromProtoMsg(message: _179.RequestOfferSnapshotProtoMsg): _179.RequestOfferSnapshot;
            toProto(message: _179.RequestOfferSnapshot): Uint8Array;
            toProtoMsg(message: _179.RequestOfferSnapshot): _179.RequestOfferSnapshotProtoMsg;
        };
        RequestLoadSnapshotChunk: {
            typeUrl: string;
            is(o: any): o is _179.RequestLoadSnapshotChunk;
            isSDK(o: any): o is _179.RequestLoadSnapshotChunkSDKType;
            isAmino(o: any): o is _179.RequestLoadSnapshotChunkAmino;
            encode(message: _179.RequestLoadSnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.RequestLoadSnapshotChunk;
            fromJSON(object: any): _179.RequestLoadSnapshotChunk;
            toJSON(message: _179.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: {
                height?: bigint;
                format?: number;
                chunk?: number;
            }): _179.RequestLoadSnapshotChunk;
            fromSDK(object: _179.RequestLoadSnapshotChunkSDKType): _179.RequestLoadSnapshotChunk;
            toSDK(message: _179.RequestLoadSnapshotChunk): _179.RequestLoadSnapshotChunkSDKType;
            fromAmino(object: _179.RequestLoadSnapshotChunkAmino): _179.RequestLoadSnapshotChunk;
            toAmino(message: _179.RequestLoadSnapshotChunk): _179.RequestLoadSnapshotChunkAmino;
            fromAminoMsg(object: _179.RequestLoadSnapshotChunkAminoMsg): _179.RequestLoadSnapshotChunk;
            fromProtoMsg(message: _179.RequestLoadSnapshotChunkProtoMsg): _179.RequestLoadSnapshotChunk;
            toProto(message: _179.RequestLoadSnapshotChunk): Uint8Array;
            toProtoMsg(message: _179.RequestLoadSnapshotChunk): _179.RequestLoadSnapshotChunkProtoMsg;
        };
        RequestApplySnapshotChunk: {
            typeUrl: string;
            is(o: any): o is _179.RequestApplySnapshotChunk;
            isSDK(o: any): o is _179.RequestApplySnapshotChunkSDKType;
            isAmino(o: any): o is _179.RequestApplySnapshotChunkAmino;
            encode(message: _179.RequestApplySnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.RequestApplySnapshotChunk;
            fromJSON(object: any): _179.RequestApplySnapshotChunk;
            toJSON(message: _179.RequestApplySnapshotChunk): unknown;
            fromPartial(object: {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            }): _179.RequestApplySnapshotChunk;
            fromSDK(object: _179.RequestApplySnapshotChunkSDKType): _179.RequestApplySnapshotChunk;
            toSDK(message: _179.RequestApplySnapshotChunk): _179.RequestApplySnapshotChunkSDKType;
            fromAmino(object: _179.RequestApplySnapshotChunkAmino): _179.RequestApplySnapshotChunk;
            toAmino(message: _179.RequestApplySnapshotChunk): _179.RequestApplySnapshotChunkAmino;
            fromAminoMsg(object: _179.RequestApplySnapshotChunkAminoMsg): _179.RequestApplySnapshotChunk;
            fromProtoMsg(message: _179.RequestApplySnapshotChunkProtoMsg): _179.RequestApplySnapshotChunk;
            toProto(message: _179.RequestApplySnapshotChunk): Uint8Array;
            toProtoMsg(message: _179.RequestApplySnapshotChunk): _179.RequestApplySnapshotChunkProtoMsg;
        };
        Response: {
            typeUrl: string;
            is(o: any): o is _179.Response;
            isSDK(o: any): o is _179.ResponseSDKType;
            isAmino(o: any): o is _179.ResponseAmino;
            encode(message: _179.Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.Response;
            fromJSON(object: any): _179.Response;
            toJSON(message: _179.Response): unknown;
            fromPartial(object: {
                exception?: {
                    error?: string;
                };
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    data?: string;
                    version?: string;
                    appVersion?: bigint;
                    lastBlockHeight?: bigint;
                    lastBlockAppHash?: Uint8Array;
                };
                setOption?: {
                    code?: number;
                    log?: string;
                    info?: string;
                };
                initChain?: {
                    consensusParams?: {
                        block?: {
                            maxBytes?: bigint;
                            maxGas?: bigint;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: bigint;
                            maxAgeDuration?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            maxBytes?: bigint;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: bigint;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: bigint;
                    }[];
                    appHash?: Uint8Array;
                };
                query?: {
                    code?: number;
                    log?: string;
                    info?: string;
                    index?: bigint;
                    key?: Uint8Array;
                    value?: Uint8Array;
                    proofOps?: {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                    };
                    height?: bigint;
                    codespace?: string;
                };
                beginBlock?: {
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                checkTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: bigint;
                    gasUsed?: bigint;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
                deliverTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: bigint;
                    gasUsed?: bigint;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
                endBlock?: {
                    validatorUpdates?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: bigint;
                    }[];
                    consensusParamUpdates?: {
                        block?: {
                            maxBytes?: bigint;
                            maxGas?: bigint;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: bigint;
                            maxAgeDuration?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            maxBytes?: bigint;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: bigint;
                        };
                    };
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                commit?: {
                    data?: Uint8Array;
                    retainHeight?: bigint;
                };
                listSnapshots?: {
                    snapshots?: {
                        height?: bigint;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[];
                };
                offerSnapshot?: {
                    result?: _179.ResponseOfferSnapshot_Result;
                };
                loadSnapshotChunk?: {
                    chunk?: Uint8Array;
                };
                applySnapshotChunk?: {
                    result?: _179.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[];
                    rejectSenders?: string[];
                };
            }): _179.Response;
            fromSDK(object: _179.ResponseSDKType): _179.Response;
            toSDK(message: _179.Response): _179.ResponseSDKType;
            fromAmino(object: _179.ResponseAmino): _179.Response;
            toAmino(message: _179.Response): _179.ResponseAmino;
            fromAminoMsg(object: _179.ResponseAminoMsg): _179.Response;
            fromProtoMsg(message: _179.ResponseProtoMsg): _179.Response;
            toProto(message: _179.Response): Uint8Array;
            toProtoMsg(message: _179.Response): _179.ResponseProtoMsg;
        };
        ResponseException: {
            typeUrl: string;
            is(o: any): o is _179.ResponseException;
            isSDK(o: any): o is _179.ResponseExceptionSDKType;
            isAmino(o: any): o is _179.ResponseExceptionAmino;
            encode(message: _179.ResponseException, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.ResponseException;
            fromJSON(object: any): _179.ResponseException;
            toJSON(message: _179.ResponseException): unknown;
            fromPartial(object: {
                error?: string;
            }): _179.ResponseException;
            fromSDK(object: _179.ResponseExceptionSDKType): _179.ResponseException;
            toSDK(message: _179.ResponseException): _179.ResponseExceptionSDKType;
            fromAmino(object: _179.ResponseExceptionAmino): _179.ResponseException;
            toAmino(message: _179.ResponseException): _179.ResponseExceptionAmino;
            fromAminoMsg(object: _179.ResponseExceptionAminoMsg): _179.ResponseException;
            fromProtoMsg(message: _179.ResponseExceptionProtoMsg): _179.ResponseException;
            toProto(message: _179.ResponseException): Uint8Array;
            toProtoMsg(message: _179.ResponseException): _179.ResponseExceptionProtoMsg;
        };
        ResponseEcho: {
            typeUrl: string;
            is(o: any): o is _179.ResponseEcho;
            isSDK(o: any): o is _179.ResponseEchoSDKType;
            isAmino(o: any): o is _179.ResponseEchoAmino;
            encode(message: _179.ResponseEcho, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.ResponseEcho;
            fromJSON(object: any): _179.ResponseEcho;
            toJSON(message: _179.ResponseEcho): unknown;
            fromPartial(object: {
                message?: string;
            }): _179.ResponseEcho;
            fromSDK(object: _179.ResponseEchoSDKType): _179.ResponseEcho;
            toSDK(message: _179.ResponseEcho): _179.ResponseEchoSDKType;
            fromAmino(object: _179.ResponseEchoAmino): _179.ResponseEcho;
            toAmino(message: _179.ResponseEcho): _179.ResponseEchoAmino;
            fromAminoMsg(object: _179.ResponseEchoAminoMsg): _179.ResponseEcho;
            fromProtoMsg(message: _179.ResponseEchoProtoMsg): _179.ResponseEcho;
            toProto(message: _179.ResponseEcho): Uint8Array;
            toProtoMsg(message: _179.ResponseEcho): _179.ResponseEchoProtoMsg;
        };
        ResponseFlush: {
            typeUrl: string;
            is(o: any): o is _179.ResponseFlush;
            isSDK(o: any): o is _179.ResponseFlushSDKType;
            isAmino(o: any): o is _179.ResponseFlushAmino;
            encode(_: _179.ResponseFlush, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.ResponseFlush;
            fromJSON(_: any): _179.ResponseFlush;
            toJSON(_: _179.ResponseFlush): unknown;
            fromPartial(_: {}): _179.ResponseFlush;
            fromSDK(_: _179.ResponseFlushSDKType): _179.ResponseFlush;
            toSDK(_: _179.ResponseFlush): _179.ResponseFlushSDKType;
            fromAmino(_: _179.ResponseFlushAmino): _179.ResponseFlush;
            toAmino(_: _179.ResponseFlush): _179.ResponseFlushAmino;
            fromAminoMsg(object: _179.ResponseFlushAminoMsg): _179.ResponseFlush;
            fromProtoMsg(message: _179.ResponseFlushProtoMsg): _179.ResponseFlush;
            toProto(message: _179.ResponseFlush): Uint8Array;
            toProtoMsg(message: _179.ResponseFlush): _179.ResponseFlushProtoMsg;
        };
        ResponseInfo: {
            typeUrl: string;
            is(o: any): o is _179.ResponseInfo;
            isSDK(o: any): o is _179.ResponseInfoSDKType;
            isAmino(o: any): o is _179.ResponseInfoAmino;
            encode(message: _179.ResponseInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.ResponseInfo;
            fromJSON(object: any): _179.ResponseInfo;
            toJSON(message: _179.ResponseInfo): unknown;
            fromPartial(object: {
                data?: string;
                version?: string;
                appVersion?: bigint;
                lastBlockHeight?: bigint;
                lastBlockAppHash?: Uint8Array;
            }): _179.ResponseInfo;
            fromSDK(object: _179.ResponseInfoSDKType): _179.ResponseInfo;
            toSDK(message: _179.ResponseInfo): _179.ResponseInfoSDKType;
            fromAmino(object: _179.ResponseInfoAmino): _179.ResponseInfo;
            toAmino(message: _179.ResponseInfo): _179.ResponseInfoAmino;
            fromAminoMsg(object: _179.ResponseInfoAminoMsg): _179.ResponseInfo;
            fromProtoMsg(message: _179.ResponseInfoProtoMsg): _179.ResponseInfo;
            toProto(message: _179.ResponseInfo): Uint8Array;
            toProtoMsg(message: _179.ResponseInfo): _179.ResponseInfoProtoMsg;
        };
        ResponseSetOption: {
            typeUrl: string;
            is(o: any): o is _179.ResponseSetOption;
            isSDK(o: any): o is _179.ResponseSetOptionSDKType;
            isAmino(o: any): o is _179.ResponseSetOptionAmino;
            encode(message: _179.ResponseSetOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.ResponseSetOption;
            fromJSON(object: any): _179.ResponseSetOption;
            toJSON(message: _179.ResponseSetOption): unknown;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
            }): _179.ResponseSetOption;
            fromSDK(object: _179.ResponseSetOptionSDKType): _179.ResponseSetOption;
            toSDK(message: _179.ResponseSetOption): _179.ResponseSetOptionSDKType;
            fromAmino(object: _179.ResponseSetOptionAmino): _179.ResponseSetOption;
            toAmino(message: _179.ResponseSetOption): _179.ResponseSetOptionAmino;
            fromAminoMsg(object: _179.ResponseSetOptionAminoMsg): _179.ResponseSetOption;
            fromProtoMsg(message: _179.ResponseSetOptionProtoMsg): _179.ResponseSetOption;
            toProto(message: _179.ResponseSetOption): Uint8Array;
            toProtoMsg(message: _179.ResponseSetOption): _179.ResponseSetOptionProtoMsg;
        };
        ResponseInitChain: {
            typeUrl: string;
            is(o: any): o is _179.ResponseInitChain;
            isSDK(o: any): o is _179.ResponseInitChainSDKType;
            isAmino(o: any): o is _179.ResponseInitChainAmino;
            encode(message: _179.ResponseInitChain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.ResponseInitChain;
            fromJSON(object: any): _179.ResponseInitChain;
            toJSON(message: _179.ResponseInitChain): unknown;
            fromPartial(object: {
                consensusParams?: {
                    block?: {
                        maxBytes?: bigint;
                        maxGas?: bigint;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: bigint;
                        maxAgeDuration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        maxBytes?: bigint;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: bigint;
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: bigint;
                }[];
                appHash?: Uint8Array;
            }): _179.ResponseInitChain;
            fromSDK(object: _179.ResponseInitChainSDKType): _179.ResponseInitChain;
            toSDK(message: _179.ResponseInitChain): _179.ResponseInitChainSDKType;
            fromAmino(object: _179.ResponseInitChainAmino): _179.ResponseInitChain;
            toAmino(message: _179.ResponseInitChain): _179.ResponseInitChainAmino;
            fromAminoMsg(object: _179.ResponseInitChainAminoMsg): _179.ResponseInitChain;
            fromProtoMsg(message: _179.ResponseInitChainProtoMsg): _179.ResponseInitChain;
            toProto(message: _179.ResponseInitChain): Uint8Array;
            toProtoMsg(message: _179.ResponseInitChain): _179.ResponseInitChainProtoMsg;
        };
        ResponseQuery: {
            typeUrl: string;
            is(o: any): o is _179.ResponseQuery;
            isSDK(o: any): o is _179.ResponseQuerySDKType;
            isAmino(o: any): o is _179.ResponseQueryAmino;
            encode(message: _179.ResponseQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.ResponseQuery;
            fromJSON(object: any): _179.ResponseQuery;
            toJSON(message: _179.ResponseQuery): unknown;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
                index?: bigint;
                key?: Uint8Array;
                value?: Uint8Array;
                proofOps?: {
                    ops?: {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                };
                height?: bigint;
                codespace?: string;
            }): _179.ResponseQuery;
            fromSDK(object: _179.ResponseQuerySDKType): _179.ResponseQuery;
            toSDK(message: _179.ResponseQuery): _179.ResponseQuerySDKType;
            fromAmino(object: _179.ResponseQueryAmino): _179.ResponseQuery;
            toAmino(message: _179.ResponseQuery): _179.ResponseQueryAmino;
            fromAminoMsg(object: _179.ResponseQueryAminoMsg): _179.ResponseQuery;
            fromProtoMsg(message: _179.ResponseQueryProtoMsg): _179.ResponseQuery;
            toProto(message: _179.ResponseQuery): Uint8Array;
            toProtoMsg(message: _179.ResponseQuery): _179.ResponseQueryProtoMsg;
        };
        ResponseBeginBlock: {
            typeUrl: string;
            is(o: any): o is _179.ResponseBeginBlock;
            isSDK(o: any): o is _179.ResponseBeginBlockSDKType;
            isAmino(o: any): o is _179.ResponseBeginBlockAmino;
            encode(message: _179.ResponseBeginBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.ResponseBeginBlock;
            fromJSON(object: any): _179.ResponseBeginBlock;
            toJSON(message: _179.ResponseBeginBlock): unknown;
            fromPartial(object: {
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _179.ResponseBeginBlock;
            fromSDK(object: _179.ResponseBeginBlockSDKType): _179.ResponseBeginBlock;
            toSDK(message: _179.ResponseBeginBlock): _179.ResponseBeginBlockSDKType;
            fromAmino(object: _179.ResponseBeginBlockAmino): _179.ResponseBeginBlock;
            toAmino(message: _179.ResponseBeginBlock): _179.ResponseBeginBlockAmino;
            fromAminoMsg(object: _179.ResponseBeginBlockAminoMsg): _179.ResponseBeginBlock;
            fromProtoMsg(message: _179.ResponseBeginBlockProtoMsg): _179.ResponseBeginBlock;
            toProto(message: _179.ResponseBeginBlock): Uint8Array;
            toProtoMsg(message: _179.ResponseBeginBlock): _179.ResponseBeginBlockProtoMsg;
        };
        ResponseCheckTx: {
            typeUrl: string;
            is(o: any): o is _179.ResponseCheckTx;
            isSDK(o: any): o is _179.ResponseCheckTxSDKType;
            isAmino(o: any): o is _179.ResponseCheckTxAmino;
            encode(message: _179.ResponseCheckTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.ResponseCheckTx;
            fromJSON(object: any): _179.ResponseCheckTx;
            toJSON(message: _179.ResponseCheckTx): unknown;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: bigint;
                gasUsed?: bigint;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _179.ResponseCheckTx;
            fromSDK(object: _179.ResponseCheckTxSDKType): _179.ResponseCheckTx;
            toSDK(message: _179.ResponseCheckTx): _179.ResponseCheckTxSDKType;
            fromAmino(object: _179.ResponseCheckTxAmino): _179.ResponseCheckTx;
            toAmino(message: _179.ResponseCheckTx): _179.ResponseCheckTxAmino;
            fromAminoMsg(object: _179.ResponseCheckTxAminoMsg): _179.ResponseCheckTx;
            fromProtoMsg(message: _179.ResponseCheckTxProtoMsg): _179.ResponseCheckTx;
            toProto(message: _179.ResponseCheckTx): Uint8Array;
            toProtoMsg(message: _179.ResponseCheckTx): _179.ResponseCheckTxProtoMsg;
        };
        ResponseDeliverTx: {
            typeUrl: string;
            is(o: any): o is _179.ResponseDeliverTx;
            isSDK(o: any): o is _179.ResponseDeliverTxSDKType;
            isAmino(o: any): o is _179.ResponseDeliverTxAmino;
            encode(message: _179.ResponseDeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.ResponseDeliverTx;
            fromJSON(object: any): _179.ResponseDeliverTx;
            toJSON(message: _179.ResponseDeliverTx): unknown;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: bigint;
                gasUsed?: bigint;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _179.ResponseDeliverTx;
            fromSDK(object: _179.ResponseDeliverTxSDKType): _179.ResponseDeliverTx;
            toSDK(message: _179.ResponseDeliverTx): _179.ResponseDeliverTxSDKType;
            fromAmino(object: _179.ResponseDeliverTxAmino): _179.ResponseDeliverTx;
            toAmino(message: _179.ResponseDeliverTx): _179.ResponseDeliverTxAmino;
            fromAminoMsg(object: _179.ResponseDeliverTxAminoMsg): _179.ResponseDeliverTx;
            fromProtoMsg(message: _179.ResponseDeliverTxProtoMsg): _179.ResponseDeliverTx;
            toProto(message: _179.ResponseDeliverTx): Uint8Array;
            toProtoMsg(message: _179.ResponseDeliverTx): _179.ResponseDeliverTxProtoMsg;
        };
        ResponseEndBlock: {
            typeUrl: string;
            is(o: any): o is _179.ResponseEndBlock;
            isSDK(o: any): o is _179.ResponseEndBlockSDKType;
            isAmino(o: any): o is _179.ResponseEndBlockAmino;
            encode(message: _179.ResponseEndBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.ResponseEndBlock;
            fromJSON(object: any): _179.ResponseEndBlock;
            toJSON(message: _179.ResponseEndBlock): unknown;
            fromPartial(object: {
                validatorUpdates?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: bigint;
                }[];
                consensusParamUpdates?: {
                    block?: {
                        maxBytes?: bigint;
                        maxGas?: bigint;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: bigint;
                        maxAgeDuration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        maxBytes?: bigint;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: bigint;
                    };
                };
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _179.ResponseEndBlock;
            fromSDK(object: _179.ResponseEndBlockSDKType): _179.ResponseEndBlock;
            toSDK(message: _179.ResponseEndBlock): _179.ResponseEndBlockSDKType;
            fromAmino(object: _179.ResponseEndBlockAmino): _179.ResponseEndBlock;
            toAmino(message: _179.ResponseEndBlock): _179.ResponseEndBlockAmino;
            fromAminoMsg(object: _179.ResponseEndBlockAminoMsg): _179.ResponseEndBlock;
            fromProtoMsg(message: _179.ResponseEndBlockProtoMsg): _179.ResponseEndBlock;
            toProto(message: _179.ResponseEndBlock): Uint8Array;
            toProtoMsg(message: _179.ResponseEndBlock): _179.ResponseEndBlockProtoMsg;
        };
        ResponseCommit: {
            typeUrl: string;
            is(o: any): o is _179.ResponseCommit;
            isSDK(o: any): o is _179.ResponseCommitSDKType;
            isAmino(o: any): o is _179.ResponseCommitAmino;
            encode(message: _179.ResponseCommit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.ResponseCommit;
            fromJSON(object: any): _179.ResponseCommit;
            toJSON(message: _179.ResponseCommit): unknown;
            fromPartial(object: {
                data?: Uint8Array;
                retainHeight?: bigint;
            }): _179.ResponseCommit;
            fromSDK(object: _179.ResponseCommitSDKType): _179.ResponseCommit;
            toSDK(message: _179.ResponseCommit): _179.ResponseCommitSDKType;
            fromAmino(object: _179.ResponseCommitAmino): _179.ResponseCommit;
            toAmino(message: _179.ResponseCommit): _179.ResponseCommitAmino;
            fromAminoMsg(object: _179.ResponseCommitAminoMsg): _179.ResponseCommit;
            fromProtoMsg(message: _179.ResponseCommitProtoMsg): _179.ResponseCommit;
            toProto(message: _179.ResponseCommit): Uint8Array;
            toProtoMsg(message: _179.ResponseCommit): _179.ResponseCommitProtoMsg;
        };
        ResponseListSnapshots: {
            typeUrl: string;
            is(o: any): o is _179.ResponseListSnapshots;
            isSDK(o: any): o is _179.ResponseListSnapshotsSDKType;
            isAmino(o: any): o is _179.ResponseListSnapshotsAmino;
            encode(message: _179.ResponseListSnapshots, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.ResponseListSnapshots;
            fromJSON(object: any): _179.ResponseListSnapshots;
            toJSON(message: _179.ResponseListSnapshots): unknown;
            fromPartial(object: {
                snapshots?: {
                    height?: bigint;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[];
            }): _179.ResponseListSnapshots;
            fromSDK(object: _179.ResponseListSnapshotsSDKType): _179.ResponseListSnapshots;
            toSDK(message: _179.ResponseListSnapshots): _179.ResponseListSnapshotsSDKType;
            fromAmino(object: _179.ResponseListSnapshotsAmino): _179.ResponseListSnapshots;
            toAmino(message: _179.ResponseListSnapshots): _179.ResponseListSnapshotsAmino;
            fromAminoMsg(object: _179.ResponseListSnapshotsAminoMsg): _179.ResponseListSnapshots;
            fromProtoMsg(message: _179.ResponseListSnapshotsProtoMsg): _179.ResponseListSnapshots;
            toProto(message: _179.ResponseListSnapshots): Uint8Array;
            toProtoMsg(message: _179.ResponseListSnapshots): _179.ResponseListSnapshotsProtoMsg;
        };
        ResponseOfferSnapshot: {
            typeUrl: string;
            is(o: any): o is _179.ResponseOfferSnapshot;
            isSDK(o: any): o is _179.ResponseOfferSnapshotSDKType;
            isAmino(o: any): o is _179.ResponseOfferSnapshotAmino;
            encode(message: _179.ResponseOfferSnapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.ResponseOfferSnapshot;
            fromJSON(object: any): _179.ResponseOfferSnapshot;
            toJSON(message: _179.ResponseOfferSnapshot): unknown;
            fromPartial(object: {
                result?: _179.ResponseOfferSnapshot_Result;
            }): _179.ResponseOfferSnapshot;
            fromSDK(object: _179.ResponseOfferSnapshotSDKType): _179.ResponseOfferSnapshot;
            toSDK(message: _179.ResponseOfferSnapshot): _179.ResponseOfferSnapshotSDKType;
            fromAmino(object: _179.ResponseOfferSnapshotAmino): _179.ResponseOfferSnapshot;
            toAmino(message: _179.ResponseOfferSnapshot): _179.ResponseOfferSnapshotAmino;
            fromAminoMsg(object: _179.ResponseOfferSnapshotAminoMsg): _179.ResponseOfferSnapshot;
            fromProtoMsg(message: _179.ResponseOfferSnapshotProtoMsg): _179.ResponseOfferSnapshot;
            toProto(message: _179.ResponseOfferSnapshot): Uint8Array;
            toProtoMsg(message: _179.ResponseOfferSnapshot): _179.ResponseOfferSnapshotProtoMsg;
        };
        ResponseLoadSnapshotChunk: {
            typeUrl: string;
            is(o: any): o is _179.ResponseLoadSnapshotChunk;
            isSDK(o: any): o is _179.ResponseLoadSnapshotChunkSDKType;
            isAmino(o: any): o is _179.ResponseLoadSnapshotChunkAmino;
            encode(message: _179.ResponseLoadSnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _179.ResponseLoadSnapshotChunk;
            toJSON(message: _179.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: {
                chunk?: Uint8Array;
            }): _179.ResponseLoadSnapshotChunk;
            fromSDK(object: _179.ResponseLoadSnapshotChunkSDKType): _179.ResponseLoadSnapshotChunk;
            toSDK(message: _179.ResponseLoadSnapshotChunk): _179.ResponseLoadSnapshotChunkSDKType;
            fromAmino(object: _179.ResponseLoadSnapshotChunkAmino): _179.ResponseLoadSnapshotChunk;
            toAmino(message: _179.ResponseLoadSnapshotChunk): _179.ResponseLoadSnapshotChunkAmino;
            fromAminoMsg(object: _179.ResponseLoadSnapshotChunkAminoMsg): _179.ResponseLoadSnapshotChunk;
            fromProtoMsg(message: _179.ResponseLoadSnapshotChunkProtoMsg): _179.ResponseLoadSnapshotChunk;
            toProto(message: _179.ResponseLoadSnapshotChunk): Uint8Array;
            toProtoMsg(message: _179.ResponseLoadSnapshotChunk): _179.ResponseLoadSnapshotChunkProtoMsg;
        };
        ResponseApplySnapshotChunk: {
            typeUrl: string;
            is(o: any): o is _179.ResponseApplySnapshotChunk;
            isSDK(o: any): o is _179.ResponseApplySnapshotChunkSDKType;
            isAmino(o: any): o is _179.ResponseApplySnapshotChunkAmino;
            encode(message: _179.ResponseApplySnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.ResponseApplySnapshotChunk;
            fromJSON(object: any): _179.ResponseApplySnapshotChunk;
            toJSON(message: _179.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: {
                result?: _179.ResponseApplySnapshotChunk_Result;
                refetchChunks?: number[];
                rejectSenders?: string[];
            }): _179.ResponseApplySnapshotChunk;
            fromSDK(object: _179.ResponseApplySnapshotChunkSDKType): _179.ResponseApplySnapshotChunk;
            toSDK(message: _179.ResponseApplySnapshotChunk): _179.ResponseApplySnapshotChunkSDKType;
            fromAmino(object: _179.ResponseApplySnapshotChunkAmino): _179.ResponseApplySnapshotChunk;
            toAmino(message: _179.ResponseApplySnapshotChunk): _179.ResponseApplySnapshotChunkAmino;
            fromAminoMsg(object: _179.ResponseApplySnapshotChunkAminoMsg): _179.ResponseApplySnapshotChunk;
            fromProtoMsg(message: _179.ResponseApplySnapshotChunkProtoMsg): _179.ResponseApplySnapshotChunk;
            toProto(message: _179.ResponseApplySnapshotChunk): Uint8Array;
            toProtoMsg(message: _179.ResponseApplySnapshotChunk): _179.ResponseApplySnapshotChunkProtoMsg;
        };
        ConsensusParams: {
            typeUrl: string;
            is(o: any): o is _179.ConsensusParams;
            isSDK(o: any): o is _179.ConsensusParamsSDKType;
            isAmino(o: any): o is _179.ConsensusParamsAmino;
            encode(message: _179.ConsensusParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.ConsensusParams;
            fromJSON(object: any): _179.ConsensusParams;
            toJSON(message: _179.ConsensusParams): unknown;
            fromPartial(object: {
                block?: {
                    maxBytes?: bigint;
                    maxGas?: bigint;
                };
                evidence?: {
                    maxAgeNumBlocks?: bigint;
                    maxAgeDuration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    maxBytes?: bigint;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: bigint;
                };
            }): _179.ConsensusParams;
            fromSDK(object: _179.ConsensusParamsSDKType): _179.ConsensusParams;
            toSDK(message: _179.ConsensusParams): _179.ConsensusParamsSDKType;
            fromAmino(object: _179.ConsensusParamsAmino): _179.ConsensusParams;
            toAmino(message: _179.ConsensusParams): _179.ConsensusParamsAmino;
            fromAminoMsg(object: _179.ConsensusParamsAminoMsg): _179.ConsensusParams;
            fromProtoMsg(message: _179.ConsensusParamsProtoMsg): _179.ConsensusParams;
            toProto(message: _179.ConsensusParams): Uint8Array;
            toProtoMsg(message: _179.ConsensusParams): _179.ConsensusParamsProtoMsg;
        };
        BlockParams: {
            typeUrl: string;
            is(o: any): o is _179.BlockParams;
            isSDK(o: any): o is _179.BlockParamsSDKType;
            isAmino(o: any): o is _179.BlockParamsAmino;
            encode(message: _179.BlockParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.BlockParams;
            fromJSON(object: any): _179.BlockParams;
            toJSON(message: _179.BlockParams): unknown;
            fromPartial(object: {
                maxBytes?: bigint;
                maxGas?: bigint;
            }): _179.BlockParams;
            fromSDK(object: _179.BlockParamsSDKType): _179.BlockParams;
            toSDK(message: _179.BlockParams): _179.BlockParamsSDKType;
            fromAmino(object: _179.BlockParamsAmino): _179.BlockParams;
            toAmino(message: _179.BlockParams): _179.BlockParamsAmino;
            fromAminoMsg(object: _179.BlockParamsAminoMsg): _179.BlockParams;
            fromProtoMsg(message: _179.BlockParamsProtoMsg): _179.BlockParams;
            toProto(message: _179.BlockParams): Uint8Array;
            toProtoMsg(message: _179.BlockParams): _179.BlockParamsProtoMsg;
        };
        LastCommitInfo: {
            typeUrl: string;
            is(o: any): o is _179.LastCommitInfo;
            isSDK(o: any): o is _179.LastCommitInfoSDKType;
            isAmino(o: any): o is _179.LastCommitInfoAmino;
            encode(message: _179.LastCommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.LastCommitInfo;
            fromJSON(object: any): _179.LastCommitInfo;
            toJSON(message: _179.LastCommitInfo): unknown;
            fromPartial(object: {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: bigint;
                    };
                    signedLastBlock?: boolean;
                }[];
            }): _179.LastCommitInfo;
            fromSDK(object: _179.LastCommitInfoSDKType): _179.LastCommitInfo;
            toSDK(message: _179.LastCommitInfo): _179.LastCommitInfoSDKType;
            fromAmino(object: _179.LastCommitInfoAmino): _179.LastCommitInfo;
            toAmino(message: _179.LastCommitInfo): _179.LastCommitInfoAmino;
            fromAminoMsg(object: _179.LastCommitInfoAminoMsg): _179.LastCommitInfo;
            fromProtoMsg(message: _179.LastCommitInfoProtoMsg): _179.LastCommitInfo;
            toProto(message: _179.LastCommitInfo): Uint8Array;
            toProtoMsg(message: _179.LastCommitInfo): _179.LastCommitInfoProtoMsg;
        };
        Event: {
            typeUrl: string;
            is(o: any): o is _179.Event;
            isSDK(o: any): o is _179.EventSDKType;
            isAmino(o: any): o is _179.EventAmino;
            encode(message: _179.Event, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.Event;
            fromJSON(object: any): _179.Event;
            toJSON(message: _179.Event): unknown;
            fromPartial(object: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }): _179.Event;
            fromSDK(object: _179.EventSDKType): _179.Event;
            toSDK(message: _179.Event): _179.EventSDKType;
            fromAmino(object: _179.EventAmino): _179.Event;
            toAmino(message: _179.Event): _179.EventAmino;
            fromAminoMsg(object: _179.EventAminoMsg): _179.Event;
            fromProtoMsg(message: _179.EventProtoMsg): _179.Event;
            toProto(message: _179.Event): Uint8Array;
            toProtoMsg(message: _179.Event): _179.EventProtoMsg;
        };
        EventAttribute: {
            typeUrl: string;
            is(o: any): o is _179.EventAttribute;
            isSDK(o: any): o is _179.EventAttributeSDKType;
            isAmino(o: any): o is _179.EventAttributeAmino;
            encode(message: _179.EventAttribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.EventAttribute;
            fromJSON(object: any): _179.EventAttribute;
            toJSON(message: _179.EventAttribute): unknown;
            fromPartial(object: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }): _179.EventAttribute;
            fromSDK(object: _179.EventAttributeSDKType): _179.EventAttribute;
            toSDK(message: _179.EventAttribute): _179.EventAttributeSDKType;
            fromAmino(object: _179.EventAttributeAmino): _179.EventAttribute;
            toAmino(message: _179.EventAttribute): _179.EventAttributeAmino;
            fromAminoMsg(object: _179.EventAttributeAminoMsg): _179.EventAttribute;
            fromProtoMsg(message: _179.EventAttributeProtoMsg): _179.EventAttribute;
            toProto(message: _179.EventAttribute): Uint8Array;
            toProtoMsg(message: _179.EventAttribute): _179.EventAttributeProtoMsg;
        };
        TxResult: {
            typeUrl: string;
            is(o: any): o is _179.TxResult;
            isSDK(o: any): o is _179.TxResultSDKType;
            isAmino(o: any): o is _179.TxResultAmino;
            encode(message: _179.TxResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.TxResult;
            fromJSON(object: any): _179.TxResult;
            toJSON(message: _179.TxResult): unknown;
            fromPartial(object: {
                height?: bigint;
                index?: number;
                tx?: Uint8Array;
                result?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: bigint;
                    gasUsed?: bigint;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
            }): _179.TxResult;
            fromSDK(object: _179.TxResultSDKType): _179.TxResult;
            toSDK(message: _179.TxResult): _179.TxResultSDKType;
            fromAmino(object: _179.TxResultAmino): _179.TxResult;
            toAmino(message: _179.TxResult): _179.TxResultAmino;
            fromAminoMsg(object: _179.TxResultAminoMsg): _179.TxResult;
            fromProtoMsg(message: _179.TxResultProtoMsg): _179.TxResult;
            toProto(message: _179.TxResult): Uint8Array;
            toProtoMsg(message: _179.TxResult): _179.TxResultProtoMsg;
        };
        Validator: {
            typeUrl: string;
            is(o: any): o is _179.Validator;
            isSDK(o: any): o is _179.ValidatorSDKType;
            isAmino(o: any): o is _179.ValidatorAmino;
            encode(message: _179.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.Validator;
            fromJSON(object: any): _179.Validator;
            toJSON(message: _179.Validator): unknown;
            fromPartial(object: {
                address?: Uint8Array;
                power?: bigint;
            }): _179.Validator;
            fromSDK(object: _179.ValidatorSDKType): _179.Validator;
            toSDK(message: _179.Validator): _179.ValidatorSDKType;
            fromAmino(object: _179.ValidatorAmino): _179.Validator;
            toAmino(message: _179.Validator): _179.ValidatorAmino;
            fromAminoMsg(object: _179.ValidatorAminoMsg): _179.Validator;
            fromProtoMsg(message: _179.ValidatorProtoMsg): _179.Validator;
            toProto(message: _179.Validator): Uint8Array;
            toProtoMsg(message: _179.Validator): _179.ValidatorProtoMsg;
        };
        ValidatorUpdate: {
            typeUrl: string;
            is(o: any): o is _179.ValidatorUpdate;
            isSDK(o: any): o is _179.ValidatorUpdateSDKType;
            isAmino(o: any): o is _179.ValidatorUpdateAmino;
            encode(message: _179.ValidatorUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.ValidatorUpdate;
            fromJSON(object: any): _179.ValidatorUpdate;
            toJSON(message: _179.ValidatorUpdate): unknown;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: bigint;
            }): _179.ValidatorUpdate;
            fromSDK(object: _179.ValidatorUpdateSDKType): _179.ValidatorUpdate;
            toSDK(message: _179.ValidatorUpdate): _179.ValidatorUpdateSDKType;
            fromAmino(object: _179.ValidatorUpdateAmino): _179.ValidatorUpdate;
            toAmino(message: _179.ValidatorUpdate): _179.ValidatorUpdateAmino;
            fromAminoMsg(object: _179.ValidatorUpdateAminoMsg): _179.ValidatorUpdate;
            fromProtoMsg(message: _179.ValidatorUpdateProtoMsg): _179.ValidatorUpdate;
            toProto(message: _179.ValidatorUpdate): Uint8Array;
            toProtoMsg(message: _179.ValidatorUpdate): _179.ValidatorUpdateProtoMsg;
        };
        VoteInfo: {
            typeUrl: string;
            is(o: any): o is _179.VoteInfo;
            isSDK(o: any): o is _179.VoteInfoSDKType;
            isAmino(o: any): o is _179.VoteInfoAmino;
            encode(message: _179.VoteInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.VoteInfo;
            fromJSON(object: any): _179.VoteInfo;
            toJSON(message: _179.VoteInfo): unknown;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array;
                    power?: bigint;
                };
                signedLastBlock?: boolean;
            }): _179.VoteInfo;
            fromSDK(object: _179.VoteInfoSDKType): _179.VoteInfo;
            toSDK(message: _179.VoteInfo): _179.VoteInfoSDKType;
            fromAmino(object: _179.VoteInfoAmino): _179.VoteInfo;
            toAmino(message: _179.VoteInfo): _179.VoteInfoAmino;
            fromAminoMsg(object: _179.VoteInfoAminoMsg): _179.VoteInfo;
            fromProtoMsg(message: _179.VoteInfoProtoMsg): _179.VoteInfo;
            toProto(message: _179.VoteInfo): Uint8Array;
            toProtoMsg(message: _179.VoteInfo): _179.VoteInfoProtoMsg;
        };
        Evidence: {
            typeUrl: string;
            is(o: any): o is _179.Evidence;
            isSDK(o: any): o is _179.EvidenceSDKType;
            isAmino(o: any): o is _179.EvidenceAmino;
            encode(message: _179.Evidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.Evidence;
            fromJSON(object: any): _179.Evidence;
            toJSON(message: _179.Evidence): unknown;
            fromPartial(object: {
                type?: _179.EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: bigint;
                };
                height?: bigint;
                time?: Date;
                totalVotingPower?: bigint;
            }): _179.Evidence;
            fromSDK(object: _179.EvidenceSDKType): _179.Evidence;
            toSDK(message: _179.Evidence): _179.EvidenceSDKType;
            fromAmino(object: _179.EvidenceAmino): _179.Evidence;
            toAmino(message: _179.Evidence): _179.EvidenceAmino;
            fromAminoMsg(object: _179.EvidenceAminoMsg): _179.Evidence;
            fromProtoMsg(message: _179.EvidenceProtoMsg): _179.Evidence;
            toProto(message: _179.Evidence): Uint8Array;
            toProtoMsg(message: _179.Evidence): _179.EvidenceProtoMsg;
        };
        Snapshot: {
            typeUrl: string;
            is(o: any): o is _179.Snapshot;
            isSDK(o: any): o is _179.SnapshotSDKType;
            isAmino(o: any): o is _179.SnapshotAmino;
            encode(message: _179.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.Snapshot;
            fromJSON(object: any): _179.Snapshot;
            toJSON(message: _179.Snapshot): unknown;
            fromPartial(object: {
                height?: bigint;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            }): _179.Snapshot;
            fromSDK(object: _179.SnapshotSDKType): _179.Snapshot;
            toSDK(message: _179.Snapshot): _179.SnapshotSDKType;
            fromAmino(object: _179.SnapshotAmino): _179.Snapshot;
            toAmino(message: _179.Snapshot): _179.SnapshotAmino;
            fromAminoMsg(object: _179.SnapshotAminoMsg): _179.Snapshot;
            fromProtoMsg(message: _179.SnapshotProtoMsg): _179.Snapshot;
            toProto(message: _179.Snapshot): Uint8Array;
            toProtoMsg(message: _179.Snapshot): _179.SnapshotProtoMsg;
        };
    };
    const crypto: {
        Proof: {
            typeUrl: string;
            is(o: any): o is _181.Proof;
            isSDK(o: any): o is _181.ProofSDKType;
            isAmino(o: any): o is _181.ProofAmino;
            encode(message: _181.Proof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.Proof;
            fromJSON(object: any): _181.Proof;
            toJSON(message: _181.Proof): unknown;
            fromPartial(object: {
                total?: bigint;
                index?: bigint;
                leafHash?: Uint8Array;
                aunts?: Uint8Array[];
            }): _181.Proof;
            fromSDK(object: _181.ProofSDKType): _181.Proof;
            toSDK(message: _181.Proof): _181.ProofSDKType;
            fromAmino(object: _181.ProofAmino): _181.Proof;
            toAmino(message: _181.Proof): _181.ProofAmino;
            fromAminoMsg(object: _181.ProofAminoMsg): _181.Proof;
            fromProtoMsg(message: _181.ProofProtoMsg): _181.Proof;
            toProto(message: _181.Proof): Uint8Array;
            toProtoMsg(message: _181.Proof): _181.ProofProtoMsg;
        };
        ValueOp: {
            typeUrl: string;
            is(o: any): o is _181.ValueOp;
            isSDK(o: any): o is _181.ValueOpSDKType;
            isAmino(o: any): o is _181.ValueOpAmino;
            encode(message: _181.ValueOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.ValueOp;
            fromJSON(object: any): _181.ValueOp;
            toJSON(message: _181.ValueOp): unknown;
            fromPartial(object: {
                key?: Uint8Array;
                proof?: {
                    total?: bigint;
                    index?: bigint;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _181.ValueOp;
            fromSDK(object: _181.ValueOpSDKType): _181.ValueOp;
            toSDK(message: _181.ValueOp): _181.ValueOpSDKType;
            fromAmino(object: _181.ValueOpAmino): _181.ValueOp;
            toAmino(message: _181.ValueOp): _181.ValueOpAmino;
            fromAminoMsg(object: _181.ValueOpAminoMsg): _181.ValueOp;
            fromProtoMsg(message: _181.ValueOpProtoMsg): _181.ValueOp;
            toProto(message: _181.ValueOp): Uint8Array;
            toProtoMsg(message: _181.ValueOp): _181.ValueOpProtoMsg;
        };
        DominoOp: {
            typeUrl: string;
            is(o: any): o is _181.DominoOp;
            isSDK(o: any): o is _181.DominoOpSDKType;
            isAmino(o: any): o is _181.DominoOpAmino;
            encode(message: _181.DominoOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.DominoOp;
            fromJSON(object: any): _181.DominoOp;
            toJSON(message: _181.DominoOp): unknown;
            fromPartial(object: {
                key?: string;
                input?: string;
                output?: string;
            }): _181.DominoOp;
            fromSDK(object: _181.DominoOpSDKType): _181.DominoOp;
            toSDK(message: _181.DominoOp): _181.DominoOpSDKType;
            fromAmino(object: _181.DominoOpAmino): _181.DominoOp;
            toAmino(message: _181.DominoOp): _181.DominoOpAmino;
            fromAminoMsg(object: _181.DominoOpAminoMsg): _181.DominoOp;
            fromProtoMsg(message: _181.DominoOpProtoMsg): _181.DominoOp;
            toProto(message: _181.DominoOp): Uint8Array;
            toProtoMsg(message: _181.DominoOp): _181.DominoOpProtoMsg;
        };
        ProofOp: {
            typeUrl: string;
            is(o: any): o is _181.ProofOp;
            isSDK(o: any): o is _181.ProofOpSDKType;
            isAmino(o: any): o is _181.ProofOpAmino;
            encode(message: _181.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.ProofOp;
            fromJSON(object: any): _181.ProofOp;
            toJSON(message: _181.ProofOp): unknown;
            fromPartial(object: {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            }): _181.ProofOp;
            fromSDK(object: _181.ProofOpSDKType): _181.ProofOp;
            toSDK(message: _181.ProofOp): _181.ProofOpSDKType;
            fromAmino(object: _181.ProofOpAmino): _181.ProofOp;
            toAmino(message: _181.ProofOp): _181.ProofOpAmino;
            fromAminoMsg(object: _181.ProofOpAminoMsg): _181.ProofOp;
            fromProtoMsg(message: _181.ProofOpProtoMsg): _181.ProofOp;
            toProto(message: _181.ProofOp): Uint8Array;
            toProtoMsg(message: _181.ProofOp): _181.ProofOpProtoMsg;
        };
        ProofOps: {
            typeUrl: string;
            is(o: any): o is _181.ProofOps;
            isSDK(o: any): o is _181.ProofOpsSDKType;
            isAmino(o: any): o is _181.ProofOpsAmino;
            encode(message: _181.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.ProofOps;
            fromJSON(object: any): _181.ProofOps;
            toJSON(message: _181.ProofOps): unknown;
            fromPartial(object: {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[];
            }): _181.ProofOps;
            fromSDK(object: _181.ProofOpsSDKType): _181.ProofOps;
            toSDK(message: _181.ProofOps): _181.ProofOpsSDKType;
            fromAmino(object: _181.ProofOpsAmino): _181.ProofOps;
            toAmino(message: _181.ProofOps): _181.ProofOpsAmino;
            fromAminoMsg(object: _181.ProofOpsAminoMsg): _181.ProofOps;
            fromProtoMsg(message: _181.ProofOpsProtoMsg): _181.ProofOps;
            toProto(message: _181.ProofOps): Uint8Array;
            toProtoMsg(message: _181.ProofOps): _181.ProofOpsProtoMsg;
        };
        PublicKey: {
            typeUrl: string;
            is(o: any): o is _180.PublicKey;
            isSDK(o: any): o is _180.PublicKeySDKType;
            isAmino(o: any): o is _180.PublicKeyAmino;
            encode(message: _180.PublicKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.PublicKey;
            fromJSON(object: any): _180.PublicKey;
            toJSON(message: _180.PublicKey): unknown;
            fromPartial(object: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            }): _180.PublicKey;
            fromSDK(object: _180.PublicKeySDKType): _180.PublicKey;
            toSDK(message: _180.PublicKey): _180.PublicKeySDKType;
            fromAmino(object: _180.PublicKeyAmino): _180.PublicKey;
            toAmino(message: _180.PublicKey): _180.PublicKeyAmino;
            fromAminoMsg(object: _180.PublicKeyAminoMsg): _180.PublicKey;
            fromProtoMsg(message: _180.PublicKeyProtoMsg): _180.PublicKey;
            toProto(message: _180.PublicKey): Uint8Array;
            toProtoMsg(message: _180.PublicKey): _180.PublicKeyProtoMsg;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                typeUrl: string;
                is(o: any): o is _182.BitArray;
                isSDK(o: any): o is _182.BitArraySDKType;
                isAmino(o: any): o is _182.BitArrayAmino;
                encode(message: _182.BitArray, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.BitArray;
                fromJSON(object: any): _182.BitArray;
                toJSON(message: _182.BitArray): unknown;
                fromPartial(object: {
                    bits?: bigint;
                    elems?: bigint[];
                }): _182.BitArray;
                fromSDK(object: _182.BitArraySDKType): _182.BitArray;
                toSDK(message: _182.BitArray): _182.BitArraySDKType;
                fromAmino(object: _182.BitArrayAmino): _182.BitArray;
                toAmino(message: _182.BitArray): _182.BitArrayAmino;
                fromAminoMsg(object: _182.BitArrayAminoMsg): _182.BitArray;
                fromProtoMsg(message: _182.BitArrayProtoMsg): _182.BitArray;
                toProto(message: _182.BitArray): Uint8Array;
                toProtoMsg(message: _182.BitArray): _182.BitArrayProtoMsg;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            typeUrl: string;
            is(o: any): o is _183.ProtocolVersion;
            isSDK(o: any): o is _183.ProtocolVersionSDKType;
            isAmino(o: any): o is _183.ProtocolVersionAmino;
            encode(message: _183.ProtocolVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.ProtocolVersion;
            fromJSON(object: any): _183.ProtocolVersion;
            toJSON(message: _183.ProtocolVersion): unknown;
            fromPartial(object: {
                p2p?: bigint;
                block?: bigint;
                app?: bigint;
            }): _183.ProtocolVersion;
            fromSDK(object: _183.ProtocolVersionSDKType): _183.ProtocolVersion;
            toSDK(message: _183.ProtocolVersion): _183.ProtocolVersionSDKType;
            fromAmino(object: _183.ProtocolVersionAmino): _183.ProtocolVersion;
            toAmino(message: _183.ProtocolVersion): _183.ProtocolVersionAmino;
            fromAminoMsg(object: _183.ProtocolVersionAminoMsg): _183.ProtocolVersion;
            fromProtoMsg(message: _183.ProtocolVersionProtoMsg): _183.ProtocolVersion;
            toProto(message: _183.ProtocolVersion): Uint8Array;
            toProtoMsg(message: _183.ProtocolVersion): _183.ProtocolVersionProtoMsg;
        };
        NodeInfo: {
            typeUrl: string;
            is(o: any): o is _183.NodeInfo;
            isSDK(o: any): o is _183.NodeInfoSDKType;
            isAmino(o: any): o is _183.NodeInfoAmino;
            encode(message: _183.NodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.NodeInfo;
            fromJSON(object: any): _183.NodeInfo;
            toJSON(message: _183.NodeInfo): unknown;
            fromPartial(object: {
                protocolVersion?: {
                    p2p?: bigint;
                    block?: bigint;
                    app?: bigint;
                };
                nodeId?: string;
                listenAddr?: string;
                network?: string;
                version?: string;
                channels?: Uint8Array;
                moniker?: string;
                other?: {
                    txIndex?: string;
                    rpcAddress?: string;
                };
            }): _183.NodeInfo;
            fromSDK(object: _183.NodeInfoSDKType): _183.NodeInfo;
            toSDK(message: _183.NodeInfo): _183.NodeInfoSDKType;
            fromAmino(object: _183.NodeInfoAmino): _183.NodeInfo;
            toAmino(message: _183.NodeInfo): _183.NodeInfoAmino;
            fromAminoMsg(object: _183.NodeInfoAminoMsg): _183.NodeInfo;
            fromProtoMsg(message: _183.NodeInfoProtoMsg): _183.NodeInfo;
            toProto(message: _183.NodeInfo): Uint8Array;
            toProtoMsg(message: _183.NodeInfo): _183.NodeInfoProtoMsg;
        };
        NodeInfoOther: {
            typeUrl: string;
            is(o: any): o is _183.NodeInfoOther;
            isSDK(o: any): o is _183.NodeInfoOtherSDKType;
            isAmino(o: any): o is _183.NodeInfoOtherAmino;
            encode(message: _183.NodeInfoOther, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.NodeInfoOther;
            fromJSON(object: any): _183.NodeInfoOther;
            toJSON(message: _183.NodeInfoOther): unknown;
            fromPartial(object: {
                txIndex?: string;
                rpcAddress?: string;
            }): _183.NodeInfoOther;
            fromSDK(object: _183.NodeInfoOtherSDKType): _183.NodeInfoOther;
            toSDK(message: _183.NodeInfoOther): _183.NodeInfoOtherSDKType;
            fromAmino(object: _183.NodeInfoOtherAmino): _183.NodeInfoOther;
            toAmino(message: _183.NodeInfoOther): _183.NodeInfoOtherAmino;
            fromAminoMsg(object: _183.NodeInfoOtherAminoMsg): _183.NodeInfoOther;
            fromProtoMsg(message: _183.NodeInfoOtherProtoMsg): _183.NodeInfoOther;
            toProto(message: _183.NodeInfoOther): Uint8Array;
            toProtoMsg(message: _183.NodeInfoOther): _183.NodeInfoOtherProtoMsg;
        };
        PeerInfo: {
            typeUrl: string;
            is(o: any): o is _183.PeerInfo;
            isSDK(o: any): o is _183.PeerInfoSDKType;
            isAmino(o: any): o is _183.PeerInfoAmino;
            encode(message: _183.PeerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.PeerInfo;
            fromJSON(object: any): _183.PeerInfo;
            toJSON(message: _183.PeerInfo): unknown;
            fromPartial(object: {
                id?: string;
                addressInfo?: {
                    address?: string;
                    lastDialSuccess?: Date;
                    lastDialFailure?: Date;
                    dialFailures?: number;
                }[];
                lastConnected?: Date;
            }): _183.PeerInfo;
            fromSDK(object: _183.PeerInfoSDKType): _183.PeerInfo;
            toSDK(message: _183.PeerInfo): _183.PeerInfoSDKType;
            fromAmino(object: _183.PeerInfoAmino): _183.PeerInfo;
            toAmino(message: _183.PeerInfo): _183.PeerInfoAmino;
            fromAminoMsg(object: _183.PeerInfoAminoMsg): _183.PeerInfo;
            fromProtoMsg(message: _183.PeerInfoProtoMsg): _183.PeerInfo;
            toProto(message: _183.PeerInfo): Uint8Array;
            toProtoMsg(message: _183.PeerInfo): _183.PeerInfoProtoMsg;
        };
        PeerAddressInfo: {
            typeUrl: string;
            is(o: any): o is _183.PeerAddressInfo;
            isSDK(o: any): o is _183.PeerAddressInfoSDKType;
            isAmino(o: any): o is _183.PeerAddressInfoAmino;
            encode(message: _183.PeerAddressInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.PeerAddressInfo;
            fromJSON(object: any): _183.PeerAddressInfo;
            toJSON(message: _183.PeerAddressInfo): unknown;
            fromPartial(object: {
                address?: string;
                lastDialSuccess?: Date;
                lastDialFailure?: Date;
                dialFailures?: number;
            }): _183.PeerAddressInfo;
            fromSDK(object: _183.PeerAddressInfoSDKType): _183.PeerAddressInfo;
            toSDK(message: _183.PeerAddressInfo): _183.PeerAddressInfoSDKType;
            fromAmino(object: _183.PeerAddressInfoAmino): _183.PeerAddressInfo;
            toAmino(message: _183.PeerAddressInfo): _183.PeerAddressInfoAmino;
            fromAminoMsg(object: _183.PeerAddressInfoAminoMsg): _183.PeerAddressInfo;
            fromProtoMsg(message: _183.PeerAddressInfoProtoMsg): _183.PeerAddressInfo;
            toProto(message: _183.PeerAddressInfo): Uint8Array;
            toProtoMsg(message: _183.PeerAddressInfo): _183.PeerAddressInfoProtoMsg;
        };
    };
    const types: {
        ValidatorSet: {
            typeUrl: string;
            is(o: any): o is _188.ValidatorSet;
            isSDK(o: any): o is _188.ValidatorSetSDKType;
            isAmino(o: any): o is _188.ValidatorSetAmino;
            encode(message: _188.ValidatorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.ValidatorSet;
            fromJSON(object: any): _188.ValidatorSet;
            toJSON(message: _188.ValidatorSet): unknown;
            fromPartial(object: {
                validators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: bigint;
                    proposerPriority?: bigint;
                }[];
                proposer?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: bigint;
                    proposerPriority?: bigint;
                };
                totalVotingPower?: bigint;
            }): _188.ValidatorSet;
            fromSDK(object: _188.ValidatorSetSDKType): _188.ValidatorSet;
            toSDK(message: _188.ValidatorSet): _188.ValidatorSetSDKType;
            fromAmino(object: _188.ValidatorSetAmino): _188.ValidatorSet;
            toAmino(message: _188.ValidatorSet): _188.ValidatorSetAmino;
            fromAminoMsg(object: _188.ValidatorSetAminoMsg): _188.ValidatorSet;
            fromProtoMsg(message: _188.ValidatorSetProtoMsg): _188.ValidatorSet;
            toProto(message: _188.ValidatorSet): Uint8Array;
            toProtoMsg(message: _188.ValidatorSet): _188.ValidatorSetProtoMsg;
        };
        Validator: {
            typeUrl: string;
            is(o: any): o is _188.Validator;
            isSDK(o: any): o is _188.ValidatorSDKType;
            isAmino(o: any): o is _188.ValidatorAmino;
            encode(message: _188.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.Validator;
            fromJSON(object: any): _188.Validator;
            toJSON(message: _188.Validator): unknown;
            fromPartial(object: {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: bigint;
                proposerPriority?: bigint;
            }): _188.Validator;
            fromSDK(object: _188.ValidatorSDKType): _188.Validator;
            toSDK(message: _188.Validator): _188.ValidatorSDKType;
            fromAmino(object: _188.ValidatorAmino): _188.Validator;
            toAmino(message: _188.Validator): _188.ValidatorAmino;
            fromAminoMsg(object: _188.ValidatorAminoMsg): _188.Validator;
            fromProtoMsg(message: _188.ValidatorProtoMsg): _188.Validator;
            toProto(message: _188.Validator): Uint8Array;
            toProtoMsg(message: _188.Validator): _188.ValidatorProtoMsg;
        };
        SimpleValidator: {
            typeUrl: string;
            is(o: any): o is _188.SimpleValidator;
            isSDK(o: any): o is _188.SimpleValidatorSDKType;
            isAmino(o: any): o is _188.SimpleValidatorAmino;
            encode(message: _188.SimpleValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.SimpleValidator;
            fromJSON(object: any): _188.SimpleValidator;
            toJSON(message: _188.SimpleValidator): unknown;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: bigint;
            }): _188.SimpleValidator;
            fromSDK(object: _188.SimpleValidatorSDKType): _188.SimpleValidator;
            toSDK(message: _188.SimpleValidator): _188.SimpleValidatorSDKType;
            fromAmino(object: _188.SimpleValidatorAmino): _188.SimpleValidator;
            toAmino(message: _188.SimpleValidator): _188.SimpleValidatorAmino;
            fromAminoMsg(object: _188.SimpleValidatorAminoMsg): _188.SimpleValidator;
            fromProtoMsg(message: _188.SimpleValidatorProtoMsg): _188.SimpleValidator;
            toProto(message: _188.SimpleValidator): Uint8Array;
            toProtoMsg(message: _188.SimpleValidator): _188.SimpleValidatorProtoMsg;
        };
        blockIDFlagFromJSON(object: any): _187.BlockIDFlag;
        blockIDFlagToJSON(object: _187.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _187.SignedMsgType;
        signedMsgTypeToJSON(object: _187.SignedMsgType): string;
        BlockIDFlag: typeof _187.BlockIDFlag;
        BlockIDFlagSDKType: typeof _187.BlockIDFlag;
        BlockIDFlagAmino: typeof _187.BlockIDFlag;
        SignedMsgType: typeof _187.SignedMsgType;
        SignedMsgTypeSDKType: typeof _187.SignedMsgType;
        SignedMsgTypeAmino: typeof _187.SignedMsgType;
        PartSetHeader: {
            typeUrl: string;
            is(o: any): o is _187.PartSetHeader;
            isSDK(o: any): o is _187.PartSetHeaderSDKType;
            isAmino(o: any): o is _187.PartSetHeaderAmino;
            encode(message: _187.PartSetHeader, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.PartSetHeader;
            fromJSON(object: any): _187.PartSetHeader;
            toJSON(message: _187.PartSetHeader): unknown;
            fromPartial(object: {
                total?: number;
                hash?: Uint8Array;
            }): _187.PartSetHeader;
            fromSDK(object: _187.PartSetHeaderSDKType): _187.PartSetHeader;
            toSDK(message: _187.PartSetHeader): _187.PartSetHeaderSDKType;
            fromAmino(object: _187.PartSetHeaderAmino): _187.PartSetHeader;
            toAmino(message: _187.PartSetHeader): _187.PartSetHeaderAmino;
            fromAminoMsg(object: _187.PartSetHeaderAminoMsg): _187.PartSetHeader;
            fromProtoMsg(message: _187.PartSetHeaderProtoMsg): _187.PartSetHeader;
            toProto(message: _187.PartSetHeader): Uint8Array;
            toProtoMsg(message: _187.PartSetHeader): _187.PartSetHeaderProtoMsg;
        };
        Part: {
            typeUrl: string;
            is(o: any): o is _187.Part;
            isSDK(o: any): o is _187.PartSDKType;
            isAmino(o: any): o is _187.PartAmino;
            encode(message: _187.Part, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.Part;
            fromJSON(object: any): _187.Part;
            toJSON(message: _187.Part): unknown;
            fromPartial(object: {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: bigint;
                    index?: bigint;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _187.Part;
            fromSDK(object: _187.PartSDKType): _187.Part;
            toSDK(message: _187.Part): _187.PartSDKType;
            fromAmino(object: _187.PartAmino): _187.Part;
            toAmino(message: _187.Part): _187.PartAmino;
            fromAminoMsg(object: _187.PartAminoMsg): _187.Part;
            fromProtoMsg(message: _187.PartProtoMsg): _187.Part;
            toProto(message: _187.Part): Uint8Array;
            toProtoMsg(message: _187.Part): _187.PartProtoMsg;
        };
        BlockID: {
            typeUrl: string;
            is(o: any): o is _187.BlockID;
            isSDK(o: any): o is _187.BlockIDSDKType;
            isAmino(o: any): o is _187.BlockIDAmino;
            encode(message: _187.BlockID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.BlockID;
            fromJSON(object: any): _187.BlockID;
            toJSON(message: _187.BlockID): unknown;
            fromPartial(object: {
                hash?: Uint8Array;
                partSetHeader?: {
                    total?: number;
                    hash?: Uint8Array;
                };
            }): _187.BlockID;
            fromSDK(object: _187.BlockIDSDKType): _187.BlockID;
            toSDK(message: _187.BlockID): _187.BlockIDSDKType;
            fromAmino(object: _187.BlockIDAmino): _187.BlockID;
            toAmino(message: _187.BlockID): _187.BlockIDAmino;
            fromAminoMsg(object: _187.BlockIDAminoMsg): _187.BlockID;
            fromProtoMsg(message: _187.BlockIDProtoMsg): _187.BlockID;
            toProto(message: _187.BlockID): Uint8Array;
            toProtoMsg(message: _187.BlockID): _187.BlockIDProtoMsg;
        };
        Header: {
            typeUrl: string;
            is(o: any): o is _187.Header;
            isSDK(o: any): o is _187.HeaderSDKType;
            isAmino(o: any): o is _187.HeaderAmino;
            encode(message: _187.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.Header;
            fromJSON(object: any): _187.Header;
            toJSON(message: _187.Header): unknown;
            fromPartial(object: {
                version?: {
                    block?: bigint;
                    app?: bigint;
                };
                chainId?: string;
                height?: bigint;
                time?: Date;
                lastBlockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                lastCommitHash?: Uint8Array;
                dataHash?: Uint8Array;
                validatorsHash?: Uint8Array;
                nextValidatorsHash?: Uint8Array;
                consensusHash?: Uint8Array;
                appHash?: Uint8Array;
                lastResultsHash?: Uint8Array;
                evidenceHash?: Uint8Array;
                proposerAddress?: Uint8Array;
            }): _187.Header;
            fromSDK(object: _187.HeaderSDKType): _187.Header;
            toSDK(message: _187.Header): _187.HeaderSDKType;
            fromAmino(object: _187.HeaderAmino): _187.Header;
            toAmino(message: _187.Header): _187.HeaderAmino;
            fromAminoMsg(object: _187.HeaderAminoMsg): _187.Header;
            fromProtoMsg(message: _187.HeaderProtoMsg): _187.Header;
            toProto(message: _187.Header): Uint8Array;
            toProtoMsg(message: _187.Header): _187.HeaderProtoMsg;
        };
        Data: {
            typeUrl: string;
            is(o: any): o is _187.Data;
            isSDK(o: any): o is _187.DataSDKType;
            isAmino(o: any): o is _187.DataAmino;
            encode(message: _187.Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.Data;
            fromJSON(object: any): _187.Data;
            toJSON(message: _187.Data): unknown;
            fromPartial(object: {
                txs?: Uint8Array[];
            }): _187.Data;
            fromSDK(object: _187.DataSDKType): _187.Data;
            toSDK(message: _187.Data): _187.DataSDKType;
            fromAmino(object: _187.DataAmino): _187.Data;
            toAmino(message: _187.Data): _187.DataAmino;
            fromAminoMsg(object: _187.DataAminoMsg): _187.Data;
            fromProtoMsg(message: _187.DataProtoMsg): _187.Data;
            toProto(message: _187.Data): Uint8Array;
            toProtoMsg(message: _187.Data): _187.DataProtoMsg;
        };
        Vote: {
            typeUrl: string;
            is(o: any): o is _187.Vote;
            isSDK(o: any): o is _187.VoteSDKType;
            isAmino(o: any): o is _187.VoteAmino;
            encode(message: _187.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.Vote;
            fromJSON(object: any): _187.Vote;
            toJSON(message: _187.Vote): unknown;
            fromPartial(object: {
                type?: _187.SignedMsgType;
                height?: bigint;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: Date;
                validatorAddress?: Uint8Array;
                validatorIndex?: number;
                signature?: Uint8Array;
            }): _187.Vote;
            fromSDK(object: _187.VoteSDKType): _187.Vote;
            toSDK(message: _187.Vote): _187.VoteSDKType;
            fromAmino(object: _187.VoteAmino): _187.Vote;
            toAmino(message: _187.Vote): _187.VoteAmino;
            fromAminoMsg(object: _187.VoteAminoMsg): _187.Vote;
            fromProtoMsg(message: _187.VoteProtoMsg): _187.Vote;
            toProto(message: _187.Vote): Uint8Array;
            toProtoMsg(message: _187.Vote): _187.VoteProtoMsg;
        };
        Commit: {
            typeUrl: string;
            is(o: any): o is _187.Commit;
            isSDK(o: any): o is _187.CommitSDKType;
            isAmino(o: any): o is _187.CommitAmino;
            encode(message: _187.Commit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.Commit;
            fromJSON(object: any): _187.Commit;
            toJSON(message: _187.Commit): unknown;
            fromPartial(object: {
                height?: bigint;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                signatures?: {
                    blockIdFlag?: _187.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[];
            }): _187.Commit;
            fromSDK(object: _187.CommitSDKType): _187.Commit;
            toSDK(message: _187.Commit): _187.CommitSDKType;
            fromAmino(object: _187.CommitAmino): _187.Commit;
            toAmino(message: _187.Commit): _187.CommitAmino;
            fromAminoMsg(object: _187.CommitAminoMsg): _187.Commit;
            fromProtoMsg(message: _187.CommitProtoMsg): _187.Commit;
            toProto(message: _187.Commit): Uint8Array;
            toProtoMsg(message: _187.Commit): _187.CommitProtoMsg;
        };
        CommitSig: {
            typeUrl: string;
            is(o: any): o is _187.CommitSig;
            isSDK(o: any): o is _187.CommitSigSDKType;
            isAmino(o: any): o is _187.CommitSigAmino;
            encode(message: _187.CommitSig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.CommitSig;
            fromJSON(object: any): _187.CommitSig;
            toJSON(message: _187.CommitSig): unknown;
            fromPartial(object: {
                blockIdFlag?: _187.BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
            }): _187.CommitSig;
            fromSDK(object: _187.CommitSigSDKType): _187.CommitSig;
            toSDK(message: _187.CommitSig): _187.CommitSigSDKType;
            fromAmino(object: _187.CommitSigAmino): _187.CommitSig;
            toAmino(message: _187.CommitSig): _187.CommitSigAmino;
            fromAminoMsg(object: _187.CommitSigAminoMsg): _187.CommitSig;
            fromProtoMsg(message: _187.CommitSigProtoMsg): _187.CommitSig;
            toProto(message: _187.CommitSig): Uint8Array;
            toProtoMsg(message: _187.CommitSig): _187.CommitSigProtoMsg;
        };
        Proposal: {
            typeUrl: string;
            is(o: any): o is _187.Proposal;
            isSDK(o: any): o is _187.ProposalSDKType;
            isAmino(o: any): o is _187.ProposalAmino;
            encode(message: _187.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.Proposal;
            fromJSON(object: any): _187.Proposal;
            toJSON(message: _187.Proposal): unknown;
            fromPartial(object: {
                type?: _187.SignedMsgType;
                height?: bigint;
                round?: number;
                polRound?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: Date;
                signature?: Uint8Array;
            }): _187.Proposal;
            fromSDK(object: _187.ProposalSDKType): _187.Proposal;
            toSDK(message: _187.Proposal): _187.ProposalSDKType;
            fromAmino(object: _187.ProposalAmino): _187.Proposal;
            toAmino(message: _187.Proposal): _187.ProposalAmino;
            fromAminoMsg(object: _187.ProposalAminoMsg): _187.Proposal;
            fromProtoMsg(message: _187.ProposalProtoMsg): _187.Proposal;
            toProto(message: _187.Proposal): Uint8Array;
            toProtoMsg(message: _187.Proposal): _187.ProposalProtoMsg;
        };
        SignedHeader: {
            typeUrl: string;
            is(o: any): o is _187.SignedHeader;
            isSDK(o: any): o is _187.SignedHeaderSDKType;
            isAmino(o: any): o is _187.SignedHeaderAmino;
            encode(message: _187.SignedHeader, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.SignedHeader;
            fromJSON(object: any): _187.SignedHeader;
            toJSON(message: _187.SignedHeader): unknown;
            fromPartial(object: {
                header?: {
                    version?: {
                        block?: bigint;
                        app?: bigint;
                    };
                    chainId?: string;
                    height?: bigint;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                commit?: {
                    height?: bigint;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: _187.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _187.SignedHeader;
            fromSDK(object: _187.SignedHeaderSDKType): _187.SignedHeader;
            toSDK(message: _187.SignedHeader): _187.SignedHeaderSDKType;
            fromAmino(object: _187.SignedHeaderAmino): _187.SignedHeader;
            toAmino(message: _187.SignedHeader): _187.SignedHeaderAmino;
            fromAminoMsg(object: _187.SignedHeaderAminoMsg): _187.SignedHeader;
            fromProtoMsg(message: _187.SignedHeaderProtoMsg): _187.SignedHeader;
            toProto(message: _187.SignedHeader): Uint8Array;
            toProtoMsg(message: _187.SignedHeader): _187.SignedHeaderProtoMsg;
        };
        LightBlock: {
            typeUrl: string;
            is(o: any): o is _187.LightBlock;
            isSDK(o: any): o is _187.LightBlockSDKType;
            isAmino(o: any): o is _187.LightBlockAmino;
            encode(message: _187.LightBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.LightBlock;
            fromJSON(object: any): _187.LightBlock;
            toJSON(message: _187.LightBlock): unknown;
            fromPartial(object: {
                signedHeader?: {
                    header?: {
                        version?: {
                            block?: bigint;
                            app?: bigint;
                        };
                        chainId?: string;
                        height?: bigint;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    commit?: {
                        height?: bigint;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        signatures?: {
                            blockIdFlag?: _187.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        }[];
                    };
                };
                validatorSet?: {
                    validators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: bigint;
                        proposerPriority?: bigint;
                    }[];
                    proposer?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: bigint;
                        proposerPriority?: bigint;
                    };
                    totalVotingPower?: bigint;
                };
            }): _187.LightBlock;
            fromSDK(object: _187.LightBlockSDKType): _187.LightBlock;
            toSDK(message: _187.LightBlock): _187.LightBlockSDKType;
            fromAmino(object: _187.LightBlockAmino): _187.LightBlock;
            toAmino(message: _187.LightBlock): _187.LightBlockAmino;
            fromAminoMsg(object: _187.LightBlockAminoMsg): _187.LightBlock;
            fromProtoMsg(message: _187.LightBlockProtoMsg): _187.LightBlock;
            toProto(message: _187.LightBlock): Uint8Array;
            toProtoMsg(message: _187.LightBlock): _187.LightBlockProtoMsg;
        };
        BlockMeta: {
            typeUrl: string;
            is(o: any): o is _187.BlockMeta;
            isSDK(o: any): o is _187.BlockMetaSDKType;
            isAmino(o: any): o is _187.BlockMetaAmino;
            encode(message: _187.BlockMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.BlockMeta;
            fromJSON(object: any): _187.BlockMeta;
            toJSON(message: _187.BlockMeta): unknown;
            fromPartial(object: {
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                blockSize?: bigint;
                header?: {
                    version?: {
                        block?: bigint;
                        app?: bigint;
                    };
                    chainId?: string;
                    height?: bigint;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                numTxs?: bigint;
            }): _187.BlockMeta;
            fromSDK(object: _187.BlockMetaSDKType): _187.BlockMeta;
            toSDK(message: _187.BlockMeta): _187.BlockMetaSDKType;
            fromAmino(object: _187.BlockMetaAmino): _187.BlockMeta;
            toAmino(message: _187.BlockMeta): _187.BlockMetaAmino;
            fromAminoMsg(object: _187.BlockMetaAminoMsg): _187.BlockMeta;
            fromProtoMsg(message: _187.BlockMetaProtoMsg): _187.BlockMeta;
            toProto(message: _187.BlockMeta): Uint8Array;
            toProtoMsg(message: _187.BlockMeta): _187.BlockMetaProtoMsg;
        };
        TxProof: {
            typeUrl: string;
            is(o: any): o is _187.TxProof;
            isSDK(o: any): o is _187.TxProofSDKType;
            isAmino(o: any): o is _187.TxProofAmino;
            encode(message: _187.TxProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.TxProof;
            fromJSON(object: any): _187.TxProof;
            toJSON(message: _187.TxProof): unknown;
            fromPartial(object: {
                rootHash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: bigint;
                    index?: bigint;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _187.TxProof;
            fromSDK(object: _187.TxProofSDKType): _187.TxProof;
            toSDK(message: _187.TxProof): _187.TxProofSDKType;
            fromAmino(object: _187.TxProofAmino): _187.TxProof;
            toAmino(message: _187.TxProof): _187.TxProofAmino;
            fromAminoMsg(object: _187.TxProofAminoMsg): _187.TxProof;
            fromProtoMsg(message: _187.TxProofProtoMsg): _187.TxProof;
            toProto(message: _187.TxProof): Uint8Array;
            toProtoMsg(message: _187.TxProof): _187.TxProofProtoMsg;
        };
        ConsensusParams: {
            typeUrl: string;
            is(o: any): o is _186.ConsensusParams;
            isSDK(o: any): o is _186.ConsensusParamsSDKType;
            isAmino(o: any): o is _186.ConsensusParamsAmino;
            encode(message: _186.ConsensusParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.ConsensusParams;
            fromJSON(object: any): _186.ConsensusParams;
            toJSON(message: _186.ConsensusParams): unknown;
            fromPartial(object: {
                block?: {
                    maxBytes?: bigint;
                    maxGas?: bigint;
                    timeIotaMs?: bigint;
                };
                evidence?: {
                    maxAgeNumBlocks?: bigint;
                    maxAgeDuration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    maxBytes?: bigint;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: bigint;
                };
            }): _186.ConsensusParams;
            fromSDK(object: _186.ConsensusParamsSDKType): _186.ConsensusParams;
            toSDK(message: _186.ConsensusParams): _186.ConsensusParamsSDKType;
            fromAmino(object: _186.ConsensusParamsAmino): _186.ConsensusParams;
            toAmino(message: _186.ConsensusParams): _186.ConsensusParamsAmino;
            fromAminoMsg(object: _186.ConsensusParamsAminoMsg): _186.ConsensusParams;
            fromProtoMsg(message: _186.ConsensusParamsProtoMsg): _186.ConsensusParams;
            toProto(message: _186.ConsensusParams): Uint8Array;
            toProtoMsg(message: _186.ConsensusParams): _186.ConsensusParamsProtoMsg;
        };
        BlockParams: {
            typeUrl: string;
            is(o: any): o is _186.BlockParams;
            isSDK(o: any): o is _186.BlockParamsSDKType;
            isAmino(o: any): o is _186.BlockParamsAmino;
            encode(message: _186.BlockParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.BlockParams;
            fromJSON(object: any): _186.BlockParams;
            toJSON(message: _186.BlockParams): unknown;
            fromPartial(object: {
                maxBytes?: bigint;
                maxGas?: bigint;
                timeIotaMs?: bigint;
            }): _186.BlockParams;
            fromSDK(object: _186.BlockParamsSDKType): _186.BlockParams;
            toSDK(message: _186.BlockParams): _186.BlockParamsSDKType;
            fromAmino(object: _186.BlockParamsAmino): _186.BlockParams;
            toAmino(message: _186.BlockParams): _186.BlockParamsAmino;
            fromAminoMsg(object: _186.BlockParamsAminoMsg): _186.BlockParams;
            fromProtoMsg(message: _186.BlockParamsProtoMsg): _186.BlockParams;
            toProto(message: _186.BlockParams): Uint8Array;
            toProtoMsg(message: _186.BlockParams): _186.BlockParamsProtoMsg;
        };
        EvidenceParams: {
            typeUrl: string;
            is(o: any): o is _186.EvidenceParams;
            isSDK(o: any): o is _186.EvidenceParamsSDKType;
            isAmino(o: any): o is _186.EvidenceParamsAmino;
            encode(message: _186.EvidenceParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.EvidenceParams;
            fromJSON(object: any): _186.EvidenceParams;
            toJSON(message: _186.EvidenceParams): unknown;
            fromPartial(object: {
                maxAgeNumBlocks?: bigint;
                maxAgeDuration?: {
                    seconds?: bigint;
                    nanos?: number;
                };
                maxBytes?: bigint;
            }): _186.EvidenceParams;
            fromSDK(object: _186.EvidenceParamsSDKType): _186.EvidenceParams;
            toSDK(message: _186.EvidenceParams): _186.EvidenceParamsSDKType;
            fromAmino(object: _186.EvidenceParamsAmino): _186.EvidenceParams;
            toAmino(message: _186.EvidenceParams): _186.EvidenceParamsAmino;
            fromAminoMsg(object: _186.EvidenceParamsAminoMsg): _186.EvidenceParams;
            fromProtoMsg(message: _186.EvidenceParamsProtoMsg): _186.EvidenceParams;
            toProto(message: _186.EvidenceParams): Uint8Array;
            toProtoMsg(message: _186.EvidenceParams): _186.EvidenceParamsProtoMsg;
        };
        ValidatorParams: {
            typeUrl: string;
            is(o: any): o is _186.ValidatorParams;
            isSDK(o: any): o is _186.ValidatorParamsSDKType;
            isAmino(o: any): o is _186.ValidatorParamsAmino;
            encode(message: _186.ValidatorParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.ValidatorParams;
            fromJSON(object: any): _186.ValidatorParams;
            toJSON(message: _186.ValidatorParams): unknown;
            fromPartial(object: {
                pubKeyTypes?: string[];
            }): _186.ValidatorParams;
            fromSDK(object: _186.ValidatorParamsSDKType): _186.ValidatorParams;
            toSDK(message: _186.ValidatorParams): _186.ValidatorParamsSDKType;
            fromAmino(object: _186.ValidatorParamsAmino): _186.ValidatorParams;
            toAmino(message: _186.ValidatorParams): _186.ValidatorParamsAmino;
            fromAminoMsg(object: _186.ValidatorParamsAminoMsg): _186.ValidatorParams;
            fromProtoMsg(message: _186.ValidatorParamsProtoMsg): _186.ValidatorParams;
            toProto(message: _186.ValidatorParams): Uint8Array;
            toProtoMsg(message: _186.ValidatorParams): _186.ValidatorParamsProtoMsg;
        };
        VersionParams: {
            typeUrl: string;
            is(o: any): o is _186.VersionParams;
            isSDK(o: any): o is _186.VersionParamsSDKType;
            isAmino(o: any): o is _186.VersionParamsAmino;
            encode(message: _186.VersionParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.VersionParams;
            fromJSON(object: any): _186.VersionParams;
            toJSON(message: _186.VersionParams): unknown;
            fromPartial(object: {
                appVersion?: bigint;
            }): _186.VersionParams;
            fromSDK(object: _186.VersionParamsSDKType): _186.VersionParams;
            toSDK(message: _186.VersionParams): _186.VersionParamsSDKType;
            fromAmino(object: _186.VersionParamsAmino): _186.VersionParams;
            toAmino(message: _186.VersionParams): _186.VersionParamsAmino;
            fromAminoMsg(object: _186.VersionParamsAminoMsg): _186.VersionParams;
            fromProtoMsg(message: _186.VersionParamsProtoMsg): _186.VersionParams;
            toProto(message: _186.VersionParams): Uint8Array;
            toProtoMsg(message: _186.VersionParams): _186.VersionParamsProtoMsg;
        };
        HashedParams: {
            typeUrl: string;
            is(o: any): o is _186.HashedParams;
            isSDK(o: any): o is _186.HashedParamsSDKType;
            isAmino(o: any): o is _186.HashedParamsAmino;
            encode(message: _186.HashedParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.HashedParams;
            fromJSON(object: any): _186.HashedParams;
            toJSON(message: _186.HashedParams): unknown;
            fromPartial(object: {
                blockMaxBytes?: bigint;
                blockMaxGas?: bigint;
            }): _186.HashedParams;
            fromSDK(object: _186.HashedParamsSDKType): _186.HashedParams;
            toSDK(message: _186.HashedParams): _186.HashedParamsSDKType;
            fromAmino(object: _186.HashedParamsAmino): _186.HashedParams;
            toAmino(message: _186.HashedParams): _186.HashedParamsAmino;
            fromAminoMsg(object: _186.HashedParamsAminoMsg): _186.HashedParams;
            fromProtoMsg(message: _186.HashedParamsProtoMsg): _186.HashedParams;
            toProto(message: _186.HashedParams): Uint8Array;
            toProtoMsg(message: _186.HashedParams): _186.HashedParamsProtoMsg;
        };
        Evidence: {
            typeUrl: string;
            is(o: any): o is _185.Evidence;
            isSDK(o: any): o is _185.EvidenceSDKType;
            isAmino(o: any): o is _185.EvidenceAmino;
            encode(message: _185.Evidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.Evidence;
            fromJSON(object: any): _185.Evidence;
            toJSON(message: _185.Evidence): unknown;
            fromPartial(object: {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: _187.SignedMsgType;
                        height?: bigint;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    };
                    voteB?: {
                        type?: _187.SignedMsgType;
                        height?: bigint;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    };
                    totalVotingPower?: bigint;
                    validatorPower?: bigint;
                    timestamp?: Date;
                };
                lightClientAttackEvidence?: {
                    conflictingBlock?: {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: bigint;
                                    app?: bigint;
                                };
                                chainId?: string;
                                height?: bigint;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            commit?: {
                                height?: bigint;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: _187.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                        validatorSet?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: bigint;
                                proposerPriority?: bigint;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: bigint;
                                proposerPriority?: bigint;
                            };
                            totalVotingPower?: bigint;
                        };
                    };
                    commonHeight?: bigint;
                    byzantineValidators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: bigint;
                        proposerPriority?: bigint;
                    }[];
                    totalVotingPower?: bigint;
                    timestamp?: Date;
                };
            }): _185.Evidence;
            fromSDK(object: _185.EvidenceSDKType): _185.Evidence;
            toSDK(message: _185.Evidence): _185.EvidenceSDKType;
            fromAmino(object: _185.EvidenceAmino): _185.Evidence;
            toAmino(message: _185.Evidence): _185.EvidenceAmino;
            fromAminoMsg(object: _185.EvidenceAminoMsg): _185.Evidence;
            fromProtoMsg(message: _185.EvidenceProtoMsg): _185.Evidence;
            toProto(message: _185.Evidence): Uint8Array;
            toProtoMsg(message: _185.Evidence): _185.EvidenceProtoMsg;
        };
        DuplicateVoteEvidence: {
            typeUrl: string;
            is(o: any): o is _185.DuplicateVoteEvidence;
            isSDK(o: any): o is _185.DuplicateVoteEvidenceSDKType;
            isAmino(o: any): o is _185.DuplicateVoteEvidenceAmino;
            encode(message: _185.DuplicateVoteEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.DuplicateVoteEvidence;
            fromJSON(object: any): _185.DuplicateVoteEvidence;
            toJSON(message: _185.DuplicateVoteEvidence): unknown;
            fromPartial(object: {
                voteA?: {
                    type?: _187.SignedMsgType;
                    height?: bigint;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: Date;
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                };
                voteB?: {
                    type?: _187.SignedMsgType;
                    height?: bigint;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: Date;
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                };
                totalVotingPower?: bigint;
                validatorPower?: bigint;
                timestamp?: Date;
            }): _185.DuplicateVoteEvidence;
            fromSDK(object: _185.DuplicateVoteEvidenceSDKType): _185.DuplicateVoteEvidence;
            toSDK(message: _185.DuplicateVoteEvidence): _185.DuplicateVoteEvidenceSDKType;
            fromAmino(object: _185.DuplicateVoteEvidenceAmino): _185.DuplicateVoteEvidence;
            toAmino(message: _185.DuplicateVoteEvidence): _185.DuplicateVoteEvidenceAmino;
            fromAminoMsg(object: _185.DuplicateVoteEvidenceAminoMsg): _185.DuplicateVoteEvidence;
            fromProtoMsg(message: _185.DuplicateVoteEvidenceProtoMsg): _185.DuplicateVoteEvidence;
            toProto(message: _185.DuplicateVoteEvidence): Uint8Array;
            toProtoMsg(message: _185.DuplicateVoteEvidence): _185.DuplicateVoteEvidenceProtoMsg;
        };
        LightClientAttackEvidence: {
            typeUrl: string;
            is(o: any): o is _185.LightClientAttackEvidence;
            isSDK(o: any): o is _185.LightClientAttackEvidenceSDKType;
            isAmino(o: any): o is _185.LightClientAttackEvidenceAmino;
            encode(message: _185.LightClientAttackEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.LightClientAttackEvidence;
            fromJSON(object: any): _185.LightClientAttackEvidence;
            toJSON(message: _185.LightClientAttackEvidence): unknown;
            fromPartial(object: {
                conflictingBlock?: {
                    signedHeader?: {
                        header?: {
                            version?: {
                                block?: bigint;
                                app?: bigint;
                            };
                            chainId?: string;
                            height?: bigint;
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        commit?: {
                            height?: bigint;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                blockIdFlag?: _187.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[];
                        };
                    };
                    validatorSet?: {
                        validators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: bigint;
                            proposerPriority?: bigint;
                        }[];
                        proposer?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: bigint;
                            proposerPriority?: bigint;
                        };
                        totalVotingPower?: bigint;
                    };
                };
                commonHeight?: bigint;
                byzantineValidators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: bigint;
                    proposerPriority?: bigint;
                }[];
                totalVotingPower?: bigint;
                timestamp?: Date;
            }): _185.LightClientAttackEvidence;
            fromSDK(object: _185.LightClientAttackEvidenceSDKType): _185.LightClientAttackEvidence;
            toSDK(message: _185.LightClientAttackEvidence): _185.LightClientAttackEvidenceSDKType;
            fromAmino(object: _185.LightClientAttackEvidenceAmino): _185.LightClientAttackEvidence;
            toAmino(message: _185.LightClientAttackEvidence): _185.LightClientAttackEvidenceAmino;
            fromAminoMsg(object: _185.LightClientAttackEvidenceAminoMsg): _185.LightClientAttackEvidence;
            fromProtoMsg(message: _185.LightClientAttackEvidenceProtoMsg): _185.LightClientAttackEvidence;
            toProto(message: _185.LightClientAttackEvidence): Uint8Array;
            toProtoMsg(message: _185.LightClientAttackEvidence): _185.LightClientAttackEvidenceProtoMsg;
        };
        EvidenceList: {
            typeUrl: string;
            is(o: any): o is _185.EvidenceList;
            isSDK(o: any): o is _185.EvidenceListSDKType;
            isAmino(o: any): o is _185.EvidenceListAmino;
            encode(message: _185.EvidenceList, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.EvidenceList;
            fromJSON(object: any): _185.EvidenceList;
            toJSON(message: _185.EvidenceList): unknown;
            fromPartial(object: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _187.SignedMsgType;
                            height?: bigint;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        voteB?: {
                            type?: _187.SignedMsgType;
                            height?: bigint;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        totalVotingPower?: bigint;
                        validatorPower?: bigint;
                        timestamp?: Date;
                    };
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: bigint;
                                        app?: bigint;
                                    };
                                    chainId?: string;
                                    height?: bigint;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: bigint;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: _187.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: bigint;
                                    proposerPriority?: bigint;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: bigint;
                                    proposerPriority?: bigint;
                                };
                                totalVotingPower?: bigint;
                            };
                        };
                        commonHeight?: bigint;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: bigint;
                            proposerPriority?: bigint;
                        }[];
                        totalVotingPower?: bigint;
                        timestamp?: Date;
                    };
                }[];
            }): _185.EvidenceList;
            fromSDK(object: _185.EvidenceListSDKType): _185.EvidenceList;
            toSDK(message: _185.EvidenceList): _185.EvidenceListSDKType;
            fromAmino(object: _185.EvidenceListAmino): _185.EvidenceList;
            toAmino(message: _185.EvidenceList): _185.EvidenceListAmino;
            fromAminoMsg(object: _185.EvidenceListAminoMsg): _185.EvidenceList;
            fromProtoMsg(message: _185.EvidenceListProtoMsg): _185.EvidenceList;
            toProto(message: _185.EvidenceList): Uint8Array;
            toProtoMsg(message: _185.EvidenceList): _185.EvidenceListProtoMsg;
        };
        Block: {
            typeUrl: string;
            is(o: any): o is _184.Block;
            isSDK(o: any): o is _184.BlockSDKType;
            isAmino(o: any): o is _184.BlockAmino;
            encode(message: _184.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _184.Block;
            fromJSON(object: any): _184.Block;
            toJSON(message: _184.Block): unknown;
            fromPartial(object: {
                header?: {
                    version?: {
                        block?: bigint;
                        app?: bigint;
                    };
                    chainId?: string;
                    height?: bigint;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                data?: {
                    txs?: Uint8Array[];
                };
                evidence?: {
                    evidence?: {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _187.SignedMsgType;
                                height?: bigint;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            voteB?: {
                                type?: _187.SignedMsgType;
                                height?: bigint;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            totalVotingPower?: bigint;
                            validatorPower?: bigint;
                            timestamp?: Date;
                        };
                        lightClientAttackEvidence?: {
                            conflictingBlock?: {
                                signedHeader?: {
                                    header?: {
                                        version?: {
                                            block?: bigint;
                                            app?: bigint;
                                        };
                                        chainId?: string;
                                        height?: bigint;
                                        time?: Date;
                                        lastBlockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        lastCommitHash?: Uint8Array;
                                        dataHash?: Uint8Array;
                                        validatorsHash?: Uint8Array;
                                        nextValidatorsHash?: Uint8Array;
                                        consensusHash?: Uint8Array;
                                        appHash?: Uint8Array;
                                        lastResultsHash?: Uint8Array;
                                        evidenceHash?: Uint8Array;
                                        proposerAddress?: Uint8Array;
                                    };
                                    commit?: {
                                        height?: bigint;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            blockIdFlag?: _187.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[];
                                    };
                                };
                                validatorSet?: {
                                    validators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: bigint;
                                        proposerPriority?: bigint;
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: bigint;
                                        proposerPriority?: bigint;
                                    };
                                    totalVotingPower?: bigint;
                                };
                            };
                            commonHeight?: bigint;
                            byzantineValidators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: bigint;
                                proposerPriority?: bigint;
                            }[];
                            totalVotingPower?: bigint;
                            timestamp?: Date;
                        };
                    }[];
                };
                lastCommit?: {
                    height?: bigint;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: _187.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _184.Block;
            fromSDK(object: _184.BlockSDKType): _184.Block;
            toSDK(message: _184.Block): _184.BlockSDKType;
            fromAmino(object: _184.BlockAmino): _184.Block;
            toAmino(message: _184.Block): _184.BlockAmino;
            fromAminoMsg(object: _184.BlockAminoMsg): _184.Block;
            fromProtoMsg(message: _184.BlockProtoMsg): _184.Block;
            toProto(message: _184.Block): Uint8Array;
            toProtoMsg(message: _184.Block): _184.BlockProtoMsg;
        };
    };
    const version: {
        App: {
            typeUrl: string;
            is(o: any): o is _189.App;
            isSDK(o: any): o is _189.AppSDKType;
            isAmino(o: any): o is _189.AppAmino;
            encode(message: _189.App, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.App;
            fromJSON(object: any): _189.App;
            toJSON(message: _189.App): unknown;
            fromPartial(object: {
                protocol?: bigint;
                software?: string;
            }): _189.App;
            fromSDK(object: _189.AppSDKType): _189.App;
            toSDK(message: _189.App): _189.AppSDKType;
            fromAmino(object: _189.AppAmino): _189.App;
            toAmino(message: _189.App): _189.AppAmino;
            fromAminoMsg(object: _189.AppAminoMsg): _189.App;
            fromProtoMsg(message: _189.AppProtoMsg): _189.App;
            toProto(message: _189.App): Uint8Array;
            toProtoMsg(message: _189.App): _189.AppProtoMsg;
        };
        Consensus: {
            typeUrl: string;
            is(o: any): o is _189.Consensus;
            isSDK(o: any): o is _189.ConsensusSDKType;
            isAmino(o: any): o is _189.ConsensusAmino;
            encode(message: _189.Consensus, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.Consensus;
            fromJSON(object: any): _189.Consensus;
            toJSON(message: _189.Consensus): unknown;
            fromPartial(object: {
                block?: bigint;
                app?: bigint;
            }): _189.Consensus;
            fromSDK(object: _189.ConsensusSDKType): _189.Consensus;
            toSDK(message: _189.Consensus): _189.ConsensusSDKType;
            fromAmino(object: _189.ConsensusAmino): _189.Consensus;
            toAmino(message: _189.Consensus): _189.ConsensusAmino;
            fromAminoMsg(object: _189.ConsensusAminoMsg): _189.Consensus;
            fromProtoMsg(message: _189.ConsensusProtoMsg): _189.Consensus;
            toProto(message: _189.Consensus): Uint8Array;
            toProtoMsg(message: _189.Consensus): _189.ConsensusProtoMsg;
        };
    };
}
