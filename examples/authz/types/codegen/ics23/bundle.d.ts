import * as _0 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _0.HashOp;
    hashOpToJSON(object: _0.HashOp): string;
    lengthOpFromJSON(object: any): _0.LengthOp;
    lengthOpToJSON(object: _0.LengthOp): string;
    HashOp: typeof _0.HashOp;
    HashOpSDKType: typeof _0.HashOp;
    HashOpAmino: typeof _0.HashOp;
    LengthOp: typeof _0.LengthOp;
    LengthOpSDKType: typeof _0.LengthOp;
    LengthOpAmino: typeof _0.LengthOp;
    ExistenceProof: {
        typeUrl: string;
        is(o: any): o is _0.ExistenceProof;
        isSDK(o: any): o is _0.ExistenceProofSDKType;
        isAmino(o: any): o is _0.ExistenceProofAmino;
        encode(message: _0.ExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _0.ExistenceProof;
        fromJSON(object: any): _0.ExistenceProof;
        toJSON(message: _0.ExistenceProof): unknown;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _0.HashOp;
                prehashKey?: _0.HashOp;
                prehashValue?: _0.HashOp;
                length?: _0.LengthOp;
                prefix?: Uint8Array;
            };
            path?: {
                hash?: _0.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _0.ExistenceProof;
        fromSDK(object: _0.ExistenceProofSDKType): _0.ExistenceProof;
        toSDK(message: _0.ExistenceProof): _0.ExistenceProofSDKType;
        fromAmino(object: _0.ExistenceProofAmino): _0.ExistenceProof;
        toAmino(message: _0.ExistenceProof): _0.ExistenceProofAmino;
        fromAminoMsg(object: _0.ExistenceProofAminoMsg): _0.ExistenceProof;
        fromProtoMsg(message: _0.ExistenceProofProtoMsg): _0.ExistenceProof;
        toProto(message: _0.ExistenceProof): Uint8Array;
        toProtoMsg(message: _0.ExistenceProof): _0.ExistenceProofProtoMsg;
    };
    NonExistenceProof: {
        typeUrl: string;
        is(o: any): o is _0.NonExistenceProof;
        isSDK(o: any): o is _0.NonExistenceProofSDKType;
        isAmino(o: any): o is _0.NonExistenceProofAmino;
        encode(message: _0.NonExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _0.NonExistenceProof;
        fromJSON(object: any): _0.NonExistenceProof;
        toJSON(message: _0.NonExistenceProof): unknown;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _0.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _0.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _0.NonExistenceProof;
        fromSDK(object: _0.NonExistenceProofSDKType): _0.NonExistenceProof;
        toSDK(message: _0.NonExistenceProof): _0.NonExistenceProofSDKType;
        fromAmino(object: _0.NonExistenceProofAmino): _0.NonExistenceProof;
        toAmino(message: _0.NonExistenceProof): _0.NonExistenceProofAmino;
        fromAminoMsg(object: _0.NonExistenceProofAminoMsg): _0.NonExistenceProof;
        fromProtoMsg(message: _0.NonExistenceProofProtoMsg): _0.NonExistenceProof;
        toProto(message: _0.NonExistenceProof): Uint8Array;
        toProtoMsg(message: _0.NonExistenceProof): _0.NonExistenceProofProtoMsg;
    };
    CommitmentProof: {
        typeUrl: string;
        is(o: any): o is _0.CommitmentProof;
        isSDK(o: any): o is _0.CommitmentProofSDKType;
        isAmino(o: any): o is _0.CommitmentProofAmino;
        encode(message: _0.CommitmentProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _0.CommitmentProof;
        fromJSON(object: any): _0.CommitmentProof;
        toJSON(message: _0.CommitmentProof): unknown;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _0.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
            };
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _0.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _0.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _0.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                    };
                }[];
            };
            compressed?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                }[];
                lookupInners?: {
                    hash?: _0.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _0.CommitmentProof;
        fromSDK(object: _0.CommitmentProofSDKType): _0.CommitmentProof;
        toSDK(message: _0.CommitmentProof): _0.CommitmentProofSDKType;
        fromAmino(object: _0.CommitmentProofAmino): _0.CommitmentProof;
        toAmino(message: _0.CommitmentProof): _0.CommitmentProofAmino;
        fromAminoMsg(object: _0.CommitmentProofAminoMsg): _0.CommitmentProof;
        fromProtoMsg(message: _0.CommitmentProofProtoMsg): _0.CommitmentProof;
        toProto(message: _0.CommitmentProof): Uint8Array;
        toProtoMsg(message: _0.CommitmentProof): _0.CommitmentProofProtoMsg;
    };
    LeafOp: {
        typeUrl: string;
        is(o: any): o is _0.LeafOp;
        isSDK(o: any): o is _0.LeafOpSDKType;
        isAmino(o: any): o is _0.LeafOpAmino;
        encode(message: _0.LeafOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _0.LeafOp;
        fromJSON(object: any): _0.LeafOp;
        toJSON(message: _0.LeafOp): unknown;
        fromPartial(object: {
            hash?: _0.HashOp;
            prehashKey?: _0.HashOp;
            prehashValue?: _0.HashOp;
            length?: _0.LengthOp;
            prefix?: Uint8Array;
        }): _0.LeafOp;
        fromSDK(object: _0.LeafOpSDKType): _0.LeafOp;
        toSDK(message: _0.LeafOp): _0.LeafOpSDKType;
        fromAmino(object: _0.LeafOpAmino): _0.LeafOp;
        toAmino(message: _0.LeafOp): _0.LeafOpAmino;
        fromAminoMsg(object: _0.LeafOpAminoMsg): _0.LeafOp;
        fromProtoMsg(message: _0.LeafOpProtoMsg): _0.LeafOp;
        toProto(message: _0.LeafOp): Uint8Array;
        toProtoMsg(message: _0.LeafOp): _0.LeafOpProtoMsg;
    };
    InnerOp: {
        typeUrl: string;
        is(o: any): o is _0.InnerOp;
        isSDK(o: any): o is _0.InnerOpSDKType;
        isAmino(o: any): o is _0.InnerOpAmino;
        encode(message: _0.InnerOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _0.InnerOp;
        fromJSON(object: any): _0.InnerOp;
        toJSON(message: _0.InnerOp): unknown;
        fromPartial(object: {
            hash?: _0.HashOp;
            prefix?: Uint8Array;
            suffix?: Uint8Array;
        }): _0.InnerOp;
        fromSDK(object: _0.InnerOpSDKType): _0.InnerOp;
        toSDK(message: _0.InnerOp): _0.InnerOpSDKType;
        fromAmino(object: _0.InnerOpAmino): _0.InnerOp;
        toAmino(message: _0.InnerOp): _0.InnerOpAmino;
        fromAminoMsg(object: _0.InnerOpAminoMsg): _0.InnerOp;
        fromProtoMsg(message: _0.InnerOpProtoMsg): _0.InnerOp;
        toProto(message: _0.InnerOp): Uint8Array;
        toProtoMsg(message: _0.InnerOp): _0.InnerOpProtoMsg;
    };
    ProofSpec: {
        typeUrl: string;
        is(o: any): o is _0.ProofSpec;
        isSDK(o: any): o is _0.ProofSpecSDKType;
        isAmino(o: any): o is _0.ProofSpecAmino;
        encode(message: _0.ProofSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _0.ProofSpec;
        fromJSON(object: any): _0.ProofSpec;
        toJSON(message: _0.ProofSpec): unknown;
        fromPartial(object: {
            leafSpec?: {
                hash?: _0.HashOp;
                prehashKey?: _0.HashOp;
                prehashValue?: _0.HashOp;
                length?: _0.LengthOp;
                prefix?: Uint8Array;
            };
            innerSpec?: {
                childOrder?: number[];
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: _0.HashOp;
            };
            maxDepth?: number;
            minDepth?: number;
        }): _0.ProofSpec;
        fromSDK(object: _0.ProofSpecSDKType): _0.ProofSpec;
        toSDK(message: _0.ProofSpec): _0.ProofSpecSDKType;
        fromAmino(object: _0.ProofSpecAmino): _0.ProofSpec;
        toAmino(message: _0.ProofSpec): _0.ProofSpecAmino;
        fromAminoMsg(object: _0.ProofSpecAminoMsg): _0.ProofSpec;
        fromProtoMsg(message: _0.ProofSpecProtoMsg): _0.ProofSpec;
        toProto(message: _0.ProofSpec): Uint8Array;
        toProtoMsg(message: _0.ProofSpec): _0.ProofSpecProtoMsg;
    };
    InnerSpec: {
        typeUrl: string;
        is(o: any): o is _0.InnerSpec;
        isSDK(o: any): o is _0.InnerSpecSDKType;
        isAmino(o: any): o is _0.InnerSpecAmino;
        encode(message: _0.InnerSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _0.InnerSpec;
        fromJSON(object: any): _0.InnerSpec;
        toJSON(message: _0.InnerSpec): unknown;
        fromPartial(object: {
            childOrder?: number[];
            childSize?: number;
            minPrefixLength?: number;
            maxPrefixLength?: number;
            emptyChild?: Uint8Array;
            hash?: _0.HashOp;
        }): _0.InnerSpec;
        fromSDK(object: _0.InnerSpecSDKType): _0.InnerSpec;
        toSDK(message: _0.InnerSpec): _0.InnerSpecSDKType;
        fromAmino(object: _0.InnerSpecAmino): _0.InnerSpec;
        toAmino(message: _0.InnerSpec): _0.InnerSpecAmino;
        fromAminoMsg(object: _0.InnerSpecAminoMsg): _0.InnerSpec;
        fromProtoMsg(message: _0.InnerSpecProtoMsg): _0.InnerSpec;
        toProto(message: _0.InnerSpec): Uint8Array;
        toProtoMsg(message: _0.InnerSpec): _0.InnerSpecProtoMsg;
    };
    BatchProof: {
        typeUrl: string;
        is(o: any): o is _0.BatchProof;
        isSDK(o: any): o is _0.BatchProofSDKType;
        isAmino(o: any): o is _0.BatchProofAmino;
        encode(message: _0.BatchProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _0.BatchProof;
        fromJSON(object: any): _0.BatchProof;
        toJSON(message: _0.BatchProof): unknown;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                nonexist?: {
                    key?: Uint8Array;
                    left?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _0.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _0.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                };
            }[];
        }): _0.BatchProof;
        fromSDK(object: _0.BatchProofSDKType): _0.BatchProof;
        toSDK(message: _0.BatchProof): _0.BatchProofSDKType;
        fromAmino(object: _0.BatchProofAmino): _0.BatchProof;
        toAmino(message: _0.BatchProof): _0.BatchProofAmino;
        fromAminoMsg(object: _0.BatchProofAminoMsg): _0.BatchProof;
        fromProtoMsg(message: _0.BatchProofProtoMsg): _0.BatchProof;
        toProto(message: _0.BatchProof): Uint8Array;
        toProtoMsg(message: _0.BatchProof): _0.BatchProofProtoMsg;
    };
    BatchEntry: {
        typeUrl: string;
        is(o: any): o is _0.BatchEntry;
        isSDK(o: any): o is _0.BatchEntrySDKType;
        isAmino(o: any): o is _0.BatchEntryAmino;
        encode(message: _0.BatchEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _0.BatchEntry;
        fromJSON(object: any): _0.BatchEntry;
        toJSON(message: _0.BatchEntry): unknown;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _0.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
            };
        }): _0.BatchEntry;
        fromSDK(object: _0.BatchEntrySDKType): _0.BatchEntry;
        toSDK(message: _0.BatchEntry): _0.BatchEntrySDKType;
        fromAmino(object: _0.BatchEntryAmino): _0.BatchEntry;
        toAmino(message: _0.BatchEntry): _0.BatchEntryAmino;
        fromAminoMsg(object: _0.BatchEntryAminoMsg): _0.BatchEntry;
        fromProtoMsg(message: _0.BatchEntryProtoMsg): _0.BatchEntry;
        toProto(message: _0.BatchEntry): Uint8Array;
        toProtoMsg(message: _0.BatchEntry): _0.BatchEntryProtoMsg;
    };
    CompressedBatchProof: {
        typeUrl: string;
        is(o: any): o is _0.CompressedBatchProof;
        isSDK(o: any): o is _0.CompressedBatchProofSDKType;
        isAmino(o: any): o is _0.CompressedBatchProofAmino;
        encode(message: _0.CompressedBatchProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _0.CompressedBatchProof;
        fromJSON(object: any): _0.CompressedBatchProof;
        toJSON(message: _0.CompressedBatchProof): unknown;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
                nonexist?: {
                    key?: Uint8Array;
                    left?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                };
            }[];
            lookupInners?: {
                hash?: _0.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _0.CompressedBatchProof;
        fromSDK(object: _0.CompressedBatchProofSDKType): _0.CompressedBatchProof;
        toSDK(message: _0.CompressedBatchProof): _0.CompressedBatchProofSDKType;
        fromAmino(object: _0.CompressedBatchProofAmino): _0.CompressedBatchProof;
        toAmino(message: _0.CompressedBatchProof): _0.CompressedBatchProofAmino;
        fromAminoMsg(object: _0.CompressedBatchProofAminoMsg): _0.CompressedBatchProof;
        fromProtoMsg(message: _0.CompressedBatchProofProtoMsg): _0.CompressedBatchProof;
        toProto(message: _0.CompressedBatchProof): Uint8Array;
        toProtoMsg(message: _0.CompressedBatchProof): _0.CompressedBatchProofProtoMsg;
    };
    CompressedBatchEntry: {
        typeUrl: string;
        is(o: any): o is _0.CompressedBatchEntry;
        isSDK(o: any): o is _0.CompressedBatchEntrySDKType;
        isAmino(o: any): o is _0.CompressedBatchEntryAmino;
        encode(message: _0.CompressedBatchEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _0.CompressedBatchEntry;
        fromJSON(object: any): _0.CompressedBatchEntry;
        toJSON(message: _0.CompressedBatchEntry): unknown;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
            };
        }): _0.CompressedBatchEntry;
        fromSDK(object: _0.CompressedBatchEntrySDKType): _0.CompressedBatchEntry;
        toSDK(message: _0.CompressedBatchEntry): _0.CompressedBatchEntrySDKType;
        fromAmino(object: _0.CompressedBatchEntryAmino): _0.CompressedBatchEntry;
        toAmino(message: _0.CompressedBatchEntry): _0.CompressedBatchEntryAmino;
        fromAminoMsg(object: _0.CompressedBatchEntryAminoMsg): _0.CompressedBatchEntry;
        fromProtoMsg(message: _0.CompressedBatchEntryProtoMsg): _0.CompressedBatchEntry;
        toProto(message: _0.CompressedBatchEntry): Uint8Array;
        toProtoMsg(message: _0.CompressedBatchEntry): _0.CompressedBatchEntryProtoMsg;
    };
    CompressedExistenceProof: {
        typeUrl: string;
        is(o: any): o is _0.CompressedExistenceProof;
        isSDK(o: any): o is _0.CompressedExistenceProofSDKType;
        isAmino(o: any): o is _0.CompressedExistenceProofAmino;
        encode(message: _0.CompressedExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _0.CompressedExistenceProof;
        fromJSON(object: any): _0.CompressedExistenceProof;
        toJSON(message: _0.CompressedExistenceProof): unknown;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _0.HashOp;
                prehashKey?: _0.HashOp;
                prehashValue?: _0.HashOp;
                length?: _0.LengthOp;
                prefix?: Uint8Array;
            };
            path?: number[];
        }): _0.CompressedExistenceProof;
        fromSDK(object: _0.CompressedExistenceProofSDKType): _0.CompressedExistenceProof;
        toSDK(message: _0.CompressedExistenceProof): _0.CompressedExistenceProofSDKType;
        fromAmino(object: _0.CompressedExistenceProofAmino): _0.CompressedExistenceProof;
        toAmino(message: _0.CompressedExistenceProof): _0.CompressedExistenceProofAmino;
        fromAminoMsg(object: _0.CompressedExistenceProofAminoMsg): _0.CompressedExistenceProof;
        fromProtoMsg(message: _0.CompressedExistenceProofProtoMsg): _0.CompressedExistenceProof;
        toProto(message: _0.CompressedExistenceProof): Uint8Array;
        toProtoMsg(message: _0.CompressedExistenceProof): _0.CompressedExistenceProofProtoMsg;
    };
    CompressedNonExistenceProof: {
        typeUrl: string;
        is(o: any): o is _0.CompressedNonExistenceProof;
        isSDK(o: any): o is _0.CompressedNonExistenceProofSDKType;
        isAmino(o: any): o is _0.CompressedNonExistenceProofAmino;
        encode(message: _0.CompressedNonExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _0.CompressedNonExistenceProof;
        fromJSON(object: any): _0.CompressedNonExistenceProof;
        toJSON(message: _0.CompressedNonExistenceProof): unknown;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
        }): _0.CompressedNonExistenceProof;
        fromSDK(object: _0.CompressedNonExistenceProofSDKType): _0.CompressedNonExistenceProof;
        toSDK(message: _0.CompressedNonExistenceProof): _0.CompressedNonExistenceProofSDKType;
        fromAmino(object: _0.CompressedNonExistenceProofAmino): _0.CompressedNonExistenceProof;
        toAmino(message: _0.CompressedNonExistenceProof): _0.CompressedNonExistenceProofAmino;
        fromAminoMsg(object: _0.CompressedNonExistenceProofAminoMsg): _0.CompressedNonExistenceProof;
        fromProtoMsg(message: _0.CompressedNonExistenceProofProtoMsg): _0.CompressedNonExistenceProof;
        toProto(message: _0.CompressedNonExistenceProof): Uint8Array;
        toProtoMsg(message: _0.CompressedNonExistenceProof): _0.CompressedNonExistenceProofProtoMsg;
    };
};
