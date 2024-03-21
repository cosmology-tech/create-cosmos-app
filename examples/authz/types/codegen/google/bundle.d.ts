import * as _102 from "./api/http";
import * as _103 from "./protobuf/any";
import * as _104 from "./protobuf/descriptor";
import * as _105 from "./protobuf/duration";
import * as _106 from "./protobuf/empty";
import * as _107 from "./protobuf/timestamp";
export declare namespace google {
    const api: {
        Http: {
            typeUrl: string;
            is(o: any): o is _102.Http;
            isSDK(o: any): o is _102.HttpSDKType;
            isAmino(o: any): o is _102.HttpAmino;
            encode(message: _102.Http, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.Http;
            fromJSON(object: any): _102.Http;
            toJSON(message: _102.Http): unknown;
            fromPartial(object: {
                rules?: {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: any[];
                }[];
                fullyDecodeReservedExpansion?: boolean;
            }): _102.Http;
            fromSDK(object: _102.HttpSDKType): _102.Http;
            toSDK(message: _102.Http): _102.HttpSDKType;
            fromAmino(object: _102.HttpAmino): _102.Http;
            toAmino(message: _102.Http): _102.HttpAmino;
            fromAminoMsg(object: _102.HttpAminoMsg): _102.Http;
            fromProtoMsg(message: _102.HttpProtoMsg): _102.Http;
            toProto(message: _102.Http): Uint8Array;
            toProtoMsg(message: _102.Http): _102.HttpProtoMsg;
        };
        HttpRule: {
            typeUrl: string;
            is(o: any): o is _102.HttpRule;
            isSDK(o: any): o is _102.HttpRuleSDKType;
            isAmino(o: any): o is _102.HttpRuleAmino;
            encode(message: _102.HttpRule, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.HttpRule;
            fromJSON(object: any): _102.HttpRule;
            toJSON(message: _102.HttpRule): unknown;
            fromPartial(object: {
                selector?: string;
                get?: string;
                put?: string;
                post?: string;
                delete?: string;
                patch?: string;
                custom?: {
                    kind?: string;
                    path?: string;
                };
                body?: string;
                responseBody?: string;
                additionalBindings?: any[];
            }): _102.HttpRule;
            fromSDK(object: _102.HttpRuleSDKType): _102.HttpRule;
            toSDK(message: _102.HttpRule): _102.HttpRuleSDKType;
            fromAmino(object: _102.HttpRuleAmino): _102.HttpRule;
            toAmino(message: _102.HttpRule): _102.HttpRuleAmino;
            fromAminoMsg(object: _102.HttpRuleAminoMsg): _102.HttpRule;
            fromProtoMsg(message: _102.HttpRuleProtoMsg): _102.HttpRule;
            toProto(message: _102.HttpRule): Uint8Array;
            toProtoMsg(message: _102.HttpRule): _102.HttpRuleProtoMsg;
        };
        CustomHttpPattern: {
            typeUrl: string;
            is(o: any): o is _102.CustomHttpPattern;
            isSDK(o: any): o is _102.CustomHttpPatternSDKType;
            isAmino(o: any): o is _102.CustomHttpPatternAmino;
            encode(message: _102.CustomHttpPattern, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.CustomHttpPattern;
            fromJSON(object: any): _102.CustomHttpPattern;
            toJSON(message: _102.CustomHttpPattern): unknown;
            fromPartial(object: {
                kind?: string;
                path?: string;
            }): _102.CustomHttpPattern;
            fromSDK(object: _102.CustomHttpPatternSDKType): _102.CustomHttpPattern;
            toSDK(message: _102.CustomHttpPattern): _102.CustomHttpPatternSDKType;
            fromAmino(object: _102.CustomHttpPatternAmino): _102.CustomHttpPattern;
            toAmino(message: _102.CustomHttpPattern): _102.CustomHttpPatternAmino;
            fromAminoMsg(object: _102.CustomHttpPatternAminoMsg): _102.CustomHttpPattern;
            fromProtoMsg(message: _102.CustomHttpPatternProtoMsg): _102.CustomHttpPattern;
            toProto(message: _102.CustomHttpPattern): Uint8Array;
            toProtoMsg(message: _102.CustomHttpPattern): _102.CustomHttpPatternProtoMsg;
        };
    };
    const protobuf: {
        Timestamp: {
            typeUrl: string;
            is(o: any): o is _107.Timestamp;
            isSDK(o: any): o is _107.TimestampSDKType;
            isAmino(o: any): o is string;
            encode(message: _107.Timestamp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.Timestamp;
            fromJSON(object: any): _107.Timestamp;
            toJSON(message: _107.Timestamp): unknown;
            fromPartial(object: {
                seconds?: bigint;
                nanos?: number;
            }): _107.Timestamp;
            fromSDK(object: _107.TimestampSDKType): _107.Timestamp;
            toSDK(message: _107.Timestamp): _107.TimestampSDKType;
            fromAmino(object: string): _107.Timestamp;
            toAmino(message: _107.Timestamp): string;
            fromAminoMsg(object: _107.TimestampAminoMsg): _107.Timestamp;
            fromProtoMsg(message: _107.TimestampProtoMsg): _107.Timestamp;
            toProto(message: _107.Timestamp): Uint8Array;
            toProtoMsg(message: _107.Timestamp): _107.TimestampProtoMsg;
        };
        Empty: {
            typeUrl: string;
            is(o: any): o is _106.Empty;
            isSDK(o: any): o is _106.EmptySDKType;
            isAmino(o: any): o is _106.EmptyAmino;
            encode(_: _106.Empty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.Empty;
            fromJSON(_: any): _106.Empty;
            toJSON(_: _106.Empty): unknown;
            fromPartial(_: {}): _106.Empty;
            fromSDK(_: _106.EmptySDKType): _106.Empty;
            toSDK(_: _106.Empty): _106.EmptySDKType;
            fromAmino(_: _106.EmptyAmino): _106.Empty;
            toAmino(_: _106.Empty): _106.EmptyAmino;
            fromAminoMsg(object: _106.EmptyAminoMsg): _106.Empty;
            fromProtoMsg(message: _106.EmptyProtoMsg): _106.Empty;
            toProto(message: _106.Empty): Uint8Array;
            toProtoMsg(message: _106.Empty): _106.EmptyProtoMsg;
        };
        Duration: {
            typeUrl: string;
            is(o: any): o is _105.Duration;
            isSDK(o: any): o is _105.DurationSDKType;
            isAmino(o: any): o is string;
            encode(message: _105.Duration, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.Duration;
            fromJSON(object: any): _105.Duration;
            toJSON(message: _105.Duration): unknown;
            fromPartial(object: {
                seconds?: bigint;
                nanos?: number;
            }): _105.Duration;
            fromSDK(object: _105.DurationSDKType): _105.Duration;
            toSDK(message: _105.Duration): _105.DurationSDKType;
            fromAmino(object: string): _105.Duration;
            toAmino(message: _105.Duration): string;
            fromAminoMsg(object: _105.DurationAminoMsg): _105.Duration;
            fromProtoMsg(message: _105.DurationProtoMsg): _105.Duration;
            toProto(message: _105.Duration): Uint8Array;
            toProtoMsg(message: _105.Duration): _105.DurationProtoMsg;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _104.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _104.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _104.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _104.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _104.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _104.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _104.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _104.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _104.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _104.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _104.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _104.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _104.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _104.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeAmino: typeof _104.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _104.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _104.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelAmino: typeof _104.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _104.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _104.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeAmino: typeof _104.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _104.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _104.FieldOptions_CType;
        FieldOptions_CTypeAmino: typeof _104.FieldOptions_CType;
        FieldOptions_JSType: typeof _104.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _104.FieldOptions_JSType;
        FieldOptions_JSTypeAmino: typeof _104.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _104.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _104.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelAmino: typeof _104.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            typeUrl: string;
            is(o: any): o is _104.FileDescriptorSet;
            isSDK(o: any): o is _104.FileDescriptorSetSDKType;
            isAmino(o: any): o is _104.FileDescriptorSetAmino;
            encode(message: _104.FileDescriptorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.FileDescriptorSet;
            fromJSON(object: any): _104.FileDescriptorSet;
            toJSON(message: _104.FileDescriptorSet): unknown;
            fromPartial(object: {
                file?: {
                    name?: string;
                    package?: string;
                    dependency?: string[];
                    publicDependency?: number[];
                    weakDependency?: number[];
                    messageType?: {
                        name?: string;
                        field?: {
                            name?: string;
                            number?: number;
                            label?: _104.FieldDescriptorProto_Label;
                            type?: _104.FieldDescriptorProto_Type;
                            typeName?: string;
                            extendee?: string;
                            defaultValue?: string;
                            oneofIndex?: number;
                            jsonName?: string;
                            options?: {
                                ctype?: _104.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _104.FieldOptions_JSType;
                                lazy?: boolean;
                                deprecated?: boolean;
                                weak?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: bigint;
                                    negativeIntValue?: bigint;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        extension?: {
                            name?: string;
                            number?: number;
                            label?: _104.FieldDescriptorProto_Label;
                            type?: _104.FieldDescriptorProto_Type;
                            typeName?: string;
                            extendee?: string;
                            defaultValue?: string;
                            oneofIndex?: number;
                            jsonName?: string;
                            options?: {
                                ctype?: _104.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _104.FieldOptions_JSType;
                                lazy?: boolean;
                                deprecated?: boolean;
                                weak?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: bigint;
                                    negativeIntValue?: bigint;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        nestedType?: any[];
                        enumType?: {
                            name?: string;
                            value?: {
                                name?: string;
                                number?: number;
                                options?: {
                                    deprecated?: boolean;
                                    uninterpretedOption?: {
                                        name?: {
                                            namePart?: string;
                                            isExtension?: boolean;
                                        }[];
                                        identifierValue?: string;
                                        positiveIntValue?: bigint;
                                        negativeIntValue?: bigint;
                                        doubleValue?: number;
                                        stringValue?: Uint8Array;
                                        aggregateValue?: string;
                                    }[];
                                };
                            }[];
                            options?: {
                                allowAlias?: boolean;
                                deprecated?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: bigint;
                                    negativeIntValue?: bigint;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                            reservedRange?: {
                                start?: number;
                                end?: number;
                            }[];
                            reservedName?: string[];
                        }[];
                        extensionRange?: {
                            start?: number;
                            end?: number;
                            options?: {
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: bigint;
                                    negativeIntValue?: bigint;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        oneofDecl?: {
                            name?: string;
                            options?: {
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: bigint;
                                    negativeIntValue?: bigint;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            messageSetWireFormat?: boolean;
                            noStandardDescriptorAccessor?: boolean;
                            deprecated?: boolean;
                            mapEntry?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                        reservedRange?: {
                            start?: number;
                            end?: number;
                        }[];
                        reservedName?: string[];
                    }[];
                    enumType?: {
                        name?: string;
                        value?: {
                            name?: string;
                            number?: number;
                            options?: {
                                deprecated?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: bigint;
                                    negativeIntValue?: bigint;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            allowAlias?: boolean;
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                        reservedRange?: {
                            start?: number;
                            end?: number;
                        }[];
                        reservedName?: string[];
                    }[];
                    service?: {
                        name?: string;
                        method?: {
                            name?: string;
                            inputType?: string;
                            outputType?: string;
                            options?: {
                                deprecated?: boolean;
                                idempotencyLevel?: _104.MethodOptions_IdempotencyLevel;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: bigint;
                                    negativeIntValue?: bigint;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                            clientStreaming?: boolean;
                            serverStreaming?: boolean;
                        }[];
                        options?: {
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    extension?: {
                        name?: string;
                        number?: number;
                        label?: _104.FieldDescriptorProto_Label;
                        type?: _104.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _104.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _104.FieldOptions_JSType;
                            lazy?: boolean;
                            deprecated?: boolean;
                            weak?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        javaPackage?: string;
                        javaOuterClassname?: string;
                        javaMultipleFiles?: boolean;
                        javaGenerateEqualsAndHash?: boolean;
                        javaStringCheckUtf8?: boolean;
                        optimizeFor?: _104.FileOptions_OptimizeMode;
                        goPackage?: string;
                        ccGenericServices?: boolean;
                        javaGenericServices?: boolean;
                        pyGenericServices?: boolean;
                        phpGenericServices?: boolean;
                        deprecated?: boolean;
                        ccEnableArenas?: boolean;
                        objcClassPrefix?: string;
                        csharpNamespace?: string;
                        swiftPrefix?: string;
                        phpClassPrefix?: string;
                        phpNamespace?: string;
                        phpMetadataNamespace?: string;
                        rubyPackage?: string;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: bigint;
                            negativeIntValue?: bigint;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    sourceCodeInfo?: {
                        location?: {
                            path?: number[];
                            span?: number[];
                            leadingComments?: string;
                            trailingComments?: string;
                            leadingDetachedComments?: string[];
                        }[];
                    };
                    syntax?: string;
                }[];
            }): _104.FileDescriptorSet;
            fromSDK(object: _104.FileDescriptorSetSDKType): _104.FileDescriptorSet;
            toSDK(message: _104.FileDescriptorSet): _104.FileDescriptorSetSDKType;
            fromAmino(object: _104.FileDescriptorSetAmino): _104.FileDescriptorSet;
            toAmino(message: _104.FileDescriptorSet): _104.FileDescriptorSetAmino;
            fromAminoMsg(object: _104.FileDescriptorSetAminoMsg): _104.FileDescriptorSet;
            fromProtoMsg(message: _104.FileDescriptorSetProtoMsg): _104.FileDescriptorSet;
            toProto(message: _104.FileDescriptorSet): Uint8Array;
            toProtoMsg(message: _104.FileDescriptorSet): _104.FileDescriptorSetProtoMsg;
        };
        FileDescriptorProto: {
            typeUrl: string;
            is(o: any): o is _104.FileDescriptorProto;
            isSDK(o: any): o is _104.FileDescriptorProtoSDKType;
            isAmino(o: any): o is _104.FileDescriptorProtoAmino;
            encode(message: _104.FileDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.FileDescriptorProto;
            fromJSON(object: any): _104.FileDescriptorProto;
            toJSON(message: _104.FileDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                package?: string;
                dependency?: string[];
                publicDependency?: number[];
                weakDependency?: number[];
                messageType?: {
                    name?: string;
                    field?: {
                        name?: string;
                        number?: number;
                        label?: _104.FieldDescriptorProto_Label;
                        type?: _104.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _104.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _104.FieldOptions_JSType;
                            lazy?: boolean;
                            deprecated?: boolean;
                            weak?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    extension?: {
                        name?: string;
                        number?: number;
                        label?: _104.FieldDescriptorProto_Label;
                        type?: _104.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _104.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _104.FieldOptions_JSType;
                            lazy?: boolean;
                            deprecated?: boolean;
                            weak?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    nestedType?: any[];
                    enumType?: {
                        name?: string;
                        value?: {
                            name?: string;
                            number?: number;
                            options?: {
                                deprecated?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: bigint;
                                    negativeIntValue?: bigint;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            allowAlias?: boolean;
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                        reservedRange?: {
                            start?: number;
                            end?: number;
                        }[];
                        reservedName?: string[];
                    }[];
                    extensionRange?: {
                        start?: number;
                        end?: number;
                        options?: {
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    oneofDecl?: {
                        name?: string;
                        options?: {
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        messageSetWireFormat?: boolean;
                        noStandardDescriptorAccessor?: boolean;
                        deprecated?: boolean;
                        mapEntry?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: bigint;
                            negativeIntValue?: bigint;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    reservedRange?: {
                        start?: number;
                        end?: number;
                    }[];
                    reservedName?: string[];
                }[];
                enumType?: {
                    name?: string;
                    value?: {
                        name?: string;
                        number?: number;
                        options?: {
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        allowAlias?: boolean;
                        deprecated?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: bigint;
                            negativeIntValue?: bigint;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    reservedRange?: {
                        start?: number;
                        end?: number;
                    }[];
                    reservedName?: string[];
                }[];
                service?: {
                    name?: string;
                    method?: {
                        name?: string;
                        inputType?: string;
                        outputType?: string;
                        options?: {
                            deprecated?: boolean;
                            idempotencyLevel?: _104.MethodOptions_IdempotencyLevel;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                        clientStreaming?: boolean;
                        serverStreaming?: boolean;
                    }[];
                    options?: {
                        deprecated?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: bigint;
                            negativeIntValue?: bigint;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                extension?: {
                    name?: string;
                    number?: number;
                    label?: _104.FieldDescriptorProto_Label;
                    type?: _104.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _104.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _104.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: bigint;
                            negativeIntValue?: bigint;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                options?: {
                    javaPackage?: string;
                    javaOuterClassname?: string;
                    javaMultipleFiles?: boolean;
                    javaGenerateEqualsAndHash?: boolean;
                    javaStringCheckUtf8?: boolean;
                    optimizeFor?: _104.FileOptions_OptimizeMode;
                    goPackage?: string;
                    ccGenericServices?: boolean;
                    javaGenericServices?: boolean;
                    pyGenericServices?: boolean;
                    phpGenericServices?: boolean;
                    deprecated?: boolean;
                    ccEnableArenas?: boolean;
                    objcClassPrefix?: string;
                    csharpNamespace?: string;
                    swiftPrefix?: string;
                    phpClassPrefix?: string;
                    phpNamespace?: string;
                    phpMetadataNamespace?: string;
                    rubyPackage?: string;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: bigint;
                        negativeIntValue?: bigint;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
                sourceCodeInfo?: {
                    location?: {
                        path?: number[];
                        span?: number[];
                        leadingComments?: string;
                        trailingComments?: string;
                        leadingDetachedComments?: string[];
                    }[];
                };
                syntax?: string;
            }): _104.FileDescriptorProto;
            fromSDK(object: _104.FileDescriptorProtoSDKType): _104.FileDescriptorProto;
            toSDK(message: _104.FileDescriptorProto): _104.FileDescriptorProtoSDKType;
            fromAmino(object: _104.FileDescriptorProtoAmino): _104.FileDescriptorProto;
            toAmino(message: _104.FileDescriptorProto): _104.FileDescriptorProtoAmino;
            fromAminoMsg(object: _104.FileDescriptorProtoAminoMsg): _104.FileDescriptorProto;
            fromProtoMsg(message: _104.FileDescriptorProtoProtoMsg): _104.FileDescriptorProto;
            toProto(message: _104.FileDescriptorProto): Uint8Array;
            toProtoMsg(message: _104.FileDescriptorProto): _104.FileDescriptorProtoProtoMsg;
        };
        DescriptorProto: {
            typeUrl: string;
            is(o: any): o is _104.DescriptorProto;
            isSDK(o: any): o is _104.DescriptorProtoSDKType;
            isAmino(o: any): o is _104.DescriptorProtoAmino;
            encode(message: _104.DescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.DescriptorProto;
            fromJSON(object: any): _104.DescriptorProto;
            toJSON(message: _104.DescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                field?: {
                    name?: string;
                    number?: number;
                    label?: _104.FieldDescriptorProto_Label;
                    type?: _104.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _104.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _104.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: bigint;
                            negativeIntValue?: bigint;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                extension?: {
                    name?: string;
                    number?: number;
                    label?: _104.FieldDescriptorProto_Label;
                    type?: _104.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _104.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _104.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: bigint;
                            negativeIntValue?: bigint;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                nestedType?: any[];
                enumType?: {
                    name?: string;
                    value?: {
                        name?: string;
                        number?: number;
                        options?: {
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        allowAlias?: boolean;
                        deprecated?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: bigint;
                            negativeIntValue?: bigint;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    reservedRange?: {
                        start?: number;
                        end?: number;
                    }[];
                    reservedName?: string[];
                }[];
                extensionRange?: {
                    start?: number;
                    end?: number;
                    options?: {
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: bigint;
                            negativeIntValue?: bigint;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                oneofDecl?: {
                    name?: string;
                    options?: {
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: bigint;
                            negativeIntValue?: bigint;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                options?: {
                    messageSetWireFormat?: boolean;
                    noStandardDescriptorAccessor?: boolean;
                    deprecated?: boolean;
                    mapEntry?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: bigint;
                        negativeIntValue?: bigint;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
                reservedRange?: {
                    start?: number;
                    end?: number;
                }[];
                reservedName?: string[];
            }): _104.DescriptorProto;
            fromSDK(object: _104.DescriptorProtoSDKType): _104.DescriptorProto;
            toSDK(message: _104.DescriptorProto): _104.DescriptorProtoSDKType;
            fromAmino(object: _104.DescriptorProtoAmino): _104.DescriptorProto;
            toAmino(message: _104.DescriptorProto): _104.DescriptorProtoAmino;
            fromAminoMsg(object: _104.DescriptorProtoAminoMsg): _104.DescriptorProto;
            fromProtoMsg(message: _104.DescriptorProtoProtoMsg): _104.DescriptorProto;
            toProto(message: _104.DescriptorProto): Uint8Array;
            toProtoMsg(message: _104.DescriptorProto): _104.DescriptorProtoProtoMsg;
        };
        DescriptorProto_ExtensionRange: {
            typeUrl: string;
            is(o: any): o is _104.DescriptorProto_ExtensionRange;
            isSDK(o: any): o is _104.DescriptorProto_ExtensionRangeSDKType;
            isAmino(o: any): o is _104.DescriptorProto_ExtensionRangeAmino;
            encode(message: _104.DescriptorProto_ExtensionRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _104.DescriptorProto_ExtensionRange;
            toJSON(message: _104.DescriptorProto_ExtensionRange): unknown;
            fromPartial(object: {
                start?: number;
                end?: number;
                options?: {
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: bigint;
                        negativeIntValue?: bigint;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _104.DescriptorProto_ExtensionRange;
            fromSDK(object: _104.DescriptorProto_ExtensionRangeSDKType): _104.DescriptorProto_ExtensionRange;
            toSDK(message: _104.DescriptorProto_ExtensionRange): _104.DescriptorProto_ExtensionRangeSDKType;
            fromAmino(object: _104.DescriptorProto_ExtensionRangeAmino): _104.DescriptorProto_ExtensionRange;
            toAmino(message: _104.DescriptorProto_ExtensionRange): _104.DescriptorProto_ExtensionRangeAmino;
            fromAminoMsg(object: _104.DescriptorProto_ExtensionRangeAminoMsg): _104.DescriptorProto_ExtensionRange;
            fromProtoMsg(message: _104.DescriptorProto_ExtensionRangeProtoMsg): _104.DescriptorProto_ExtensionRange;
            toProto(message: _104.DescriptorProto_ExtensionRange): Uint8Array;
            toProtoMsg(message: _104.DescriptorProto_ExtensionRange): _104.DescriptorProto_ExtensionRangeProtoMsg;
        };
        DescriptorProto_ReservedRange: {
            typeUrl: string;
            is(o: any): o is _104.DescriptorProto_ReservedRange;
            isSDK(o: any): o is _104.DescriptorProto_ReservedRangeSDKType;
            isAmino(o: any): o is _104.DescriptorProto_ReservedRangeAmino;
            encode(message: _104.DescriptorProto_ReservedRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.DescriptorProto_ReservedRange;
            fromJSON(object: any): _104.DescriptorProto_ReservedRange;
            toJSON(message: _104.DescriptorProto_ReservedRange): unknown;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _104.DescriptorProto_ReservedRange;
            fromSDK(object: _104.DescriptorProto_ReservedRangeSDKType): _104.DescriptorProto_ReservedRange;
            toSDK(message: _104.DescriptorProto_ReservedRange): _104.DescriptorProto_ReservedRangeSDKType;
            fromAmino(object: _104.DescriptorProto_ReservedRangeAmino): _104.DescriptorProto_ReservedRange;
            toAmino(message: _104.DescriptorProto_ReservedRange): _104.DescriptorProto_ReservedRangeAmino;
            fromAminoMsg(object: _104.DescriptorProto_ReservedRangeAminoMsg): _104.DescriptorProto_ReservedRange;
            fromProtoMsg(message: _104.DescriptorProto_ReservedRangeProtoMsg): _104.DescriptorProto_ReservedRange;
            toProto(message: _104.DescriptorProto_ReservedRange): Uint8Array;
            toProtoMsg(message: _104.DescriptorProto_ReservedRange): _104.DescriptorProto_ReservedRangeProtoMsg;
        };
        ExtensionRangeOptions: {
            typeUrl: string;
            is(o: any): o is _104.ExtensionRangeOptions;
            isSDK(o: any): o is _104.ExtensionRangeOptionsSDKType;
            isAmino(o: any): o is _104.ExtensionRangeOptionsAmino;
            encode(message: _104.ExtensionRangeOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.ExtensionRangeOptions;
            fromJSON(object: any): _104.ExtensionRangeOptions;
            toJSON(message: _104.ExtensionRangeOptions): unknown;
            fromPartial(object: {
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: bigint;
                    negativeIntValue?: bigint;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _104.ExtensionRangeOptions;
            fromSDK(object: _104.ExtensionRangeOptionsSDKType): _104.ExtensionRangeOptions;
            toSDK(message: _104.ExtensionRangeOptions): _104.ExtensionRangeOptionsSDKType;
            fromAmino(object: _104.ExtensionRangeOptionsAmino): _104.ExtensionRangeOptions;
            toAmino(message: _104.ExtensionRangeOptions): _104.ExtensionRangeOptionsAmino;
            fromAminoMsg(object: _104.ExtensionRangeOptionsAminoMsg): _104.ExtensionRangeOptions;
            fromProtoMsg(message: _104.ExtensionRangeOptionsProtoMsg): _104.ExtensionRangeOptions;
            toProto(message: _104.ExtensionRangeOptions): Uint8Array;
            toProtoMsg(message: _104.ExtensionRangeOptions): _104.ExtensionRangeOptionsProtoMsg;
        };
        FieldDescriptorProto: {
            typeUrl: string;
            is(o: any): o is _104.FieldDescriptorProto;
            isSDK(o: any): o is _104.FieldDescriptorProtoSDKType;
            isAmino(o: any): o is _104.FieldDescriptorProtoAmino;
            encode(message: _104.FieldDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.FieldDescriptorProto;
            fromJSON(object: any): _104.FieldDescriptorProto;
            toJSON(message: _104.FieldDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                number?: number;
                label?: _104.FieldDescriptorProto_Label;
                type?: _104.FieldDescriptorProto_Type;
                typeName?: string;
                extendee?: string;
                defaultValue?: string;
                oneofIndex?: number;
                jsonName?: string;
                options?: {
                    ctype?: _104.FieldOptions_CType;
                    packed?: boolean;
                    jstype?: _104.FieldOptions_JSType;
                    lazy?: boolean;
                    deprecated?: boolean;
                    weak?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: bigint;
                        negativeIntValue?: bigint;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _104.FieldDescriptorProto;
            fromSDK(object: _104.FieldDescriptorProtoSDKType): _104.FieldDescriptorProto;
            toSDK(message: _104.FieldDescriptorProto): _104.FieldDescriptorProtoSDKType;
            fromAmino(object: _104.FieldDescriptorProtoAmino): _104.FieldDescriptorProto;
            toAmino(message: _104.FieldDescriptorProto): _104.FieldDescriptorProtoAmino;
            fromAminoMsg(object: _104.FieldDescriptorProtoAminoMsg): _104.FieldDescriptorProto;
            fromProtoMsg(message: _104.FieldDescriptorProtoProtoMsg): _104.FieldDescriptorProto;
            toProto(message: _104.FieldDescriptorProto): Uint8Array;
            toProtoMsg(message: _104.FieldDescriptorProto): _104.FieldDescriptorProtoProtoMsg;
        };
        OneofDescriptorProto: {
            typeUrl: string;
            is(o: any): o is _104.OneofDescriptorProto;
            isSDK(o: any): o is _104.OneofDescriptorProtoSDKType;
            isAmino(o: any): o is _104.OneofDescriptorProtoAmino;
            encode(message: _104.OneofDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.OneofDescriptorProto;
            fromJSON(object: any): _104.OneofDescriptorProto;
            toJSON(message: _104.OneofDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                options?: {
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: bigint;
                        negativeIntValue?: bigint;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _104.OneofDescriptorProto;
            fromSDK(object: _104.OneofDescriptorProtoSDKType): _104.OneofDescriptorProto;
            toSDK(message: _104.OneofDescriptorProto): _104.OneofDescriptorProtoSDKType;
            fromAmino(object: _104.OneofDescriptorProtoAmino): _104.OneofDescriptorProto;
            toAmino(message: _104.OneofDescriptorProto): _104.OneofDescriptorProtoAmino;
            fromAminoMsg(object: _104.OneofDescriptorProtoAminoMsg): _104.OneofDescriptorProto;
            fromProtoMsg(message: _104.OneofDescriptorProtoProtoMsg): _104.OneofDescriptorProto;
            toProto(message: _104.OneofDescriptorProto): Uint8Array;
            toProtoMsg(message: _104.OneofDescriptorProto): _104.OneofDescriptorProtoProtoMsg;
        };
        EnumDescriptorProto: {
            typeUrl: string;
            is(o: any): o is _104.EnumDescriptorProto;
            isSDK(o: any): o is _104.EnumDescriptorProtoSDKType;
            isAmino(o: any): o is _104.EnumDescriptorProtoAmino;
            encode(message: _104.EnumDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.EnumDescriptorProto;
            fromJSON(object: any): _104.EnumDescriptorProto;
            toJSON(message: _104.EnumDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                value?: {
                    name?: string;
                    number?: number;
                    options?: {
                        deprecated?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: bigint;
                            negativeIntValue?: bigint;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                options?: {
                    allowAlias?: boolean;
                    deprecated?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: bigint;
                        negativeIntValue?: bigint;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
                reservedRange?: {
                    start?: number;
                    end?: number;
                }[];
                reservedName?: string[];
            }): _104.EnumDescriptorProto;
            fromSDK(object: _104.EnumDescriptorProtoSDKType): _104.EnumDescriptorProto;
            toSDK(message: _104.EnumDescriptorProto): _104.EnumDescriptorProtoSDKType;
            fromAmino(object: _104.EnumDescriptorProtoAmino): _104.EnumDescriptorProto;
            toAmino(message: _104.EnumDescriptorProto): _104.EnumDescriptorProtoAmino;
            fromAminoMsg(object: _104.EnumDescriptorProtoAminoMsg): _104.EnumDescriptorProto;
            fromProtoMsg(message: _104.EnumDescriptorProtoProtoMsg): _104.EnumDescriptorProto;
            toProto(message: _104.EnumDescriptorProto): Uint8Array;
            toProtoMsg(message: _104.EnumDescriptorProto): _104.EnumDescriptorProtoProtoMsg;
        };
        EnumDescriptorProto_EnumReservedRange: {
            typeUrl: string;
            is(o: any): o is _104.EnumDescriptorProto_EnumReservedRange;
            isSDK(o: any): o is _104.EnumDescriptorProto_EnumReservedRangeSDKType;
            isAmino(o: any): o is _104.EnumDescriptorProto_EnumReservedRangeAmino;
            encode(message: _104.EnumDescriptorProto_EnumReservedRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _104.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _104.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _104.EnumDescriptorProto_EnumReservedRange;
            fromSDK(object: _104.EnumDescriptorProto_EnumReservedRangeSDKType): _104.EnumDescriptorProto_EnumReservedRange;
            toSDK(message: _104.EnumDescriptorProto_EnumReservedRange): _104.EnumDescriptorProto_EnumReservedRangeSDKType;
            fromAmino(object: _104.EnumDescriptorProto_EnumReservedRangeAmino): _104.EnumDescriptorProto_EnumReservedRange;
            toAmino(message: _104.EnumDescriptorProto_EnumReservedRange): _104.EnumDescriptorProto_EnumReservedRangeAmino;
            fromAminoMsg(object: _104.EnumDescriptorProto_EnumReservedRangeAminoMsg): _104.EnumDescriptorProto_EnumReservedRange;
            fromProtoMsg(message: _104.EnumDescriptorProto_EnumReservedRangeProtoMsg): _104.EnumDescriptorProto_EnumReservedRange;
            toProto(message: _104.EnumDescriptorProto_EnumReservedRange): Uint8Array;
            toProtoMsg(message: _104.EnumDescriptorProto_EnumReservedRange): _104.EnumDescriptorProto_EnumReservedRangeProtoMsg;
        };
        EnumValueDescriptorProto: {
            typeUrl: string;
            is(o: any): o is _104.EnumValueDescriptorProto;
            isSDK(o: any): o is _104.EnumValueDescriptorProtoSDKType;
            isAmino(o: any): o is _104.EnumValueDescriptorProtoAmino;
            encode(message: _104.EnumValueDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.EnumValueDescriptorProto;
            fromJSON(object: any): _104.EnumValueDescriptorProto;
            toJSON(message: _104.EnumValueDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                number?: number;
                options?: {
                    deprecated?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: bigint;
                        negativeIntValue?: bigint;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _104.EnumValueDescriptorProto;
            fromSDK(object: _104.EnumValueDescriptorProtoSDKType): _104.EnumValueDescriptorProto;
            toSDK(message: _104.EnumValueDescriptorProto): _104.EnumValueDescriptorProtoSDKType;
            fromAmino(object: _104.EnumValueDescriptorProtoAmino): _104.EnumValueDescriptorProto;
            toAmino(message: _104.EnumValueDescriptorProto): _104.EnumValueDescriptorProtoAmino;
            fromAminoMsg(object: _104.EnumValueDescriptorProtoAminoMsg): _104.EnumValueDescriptorProto;
            fromProtoMsg(message: _104.EnumValueDescriptorProtoProtoMsg): _104.EnumValueDescriptorProto;
            toProto(message: _104.EnumValueDescriptorProto): Uint8Array;
            toProtoMsg(message: _104.EnumValueDescriptorProto): _104.EnumValueDescriptorProtoProtoMsg;
        };
        ServiceDescriptorProto: {
            typeUrl: string;
            is(o: any): o is _104.ServiceDescriptorProto;
            isSDK(o: any): o is _104.ServiceDescriptorProtoSDKType;
            isAmino(o: any): o is _104.ServiceDescriptorProtoAmino;
            encode(message: _104.ServiceDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.ServiceDescriptorProto;
            fromJSON(object: any): _104.ServiceDescriptorProto;
            toJSON(message: _104.ServiceDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                method?: {
                    name?: string;
                    inputType?: string;
                    outputType?: string;
                    options?: {
                        deprecated?: boolean;
                        idempotencyLevel?: _104.MethodOptions_IdempotencyLevel;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: bigint;
                            negativeIntValue?: bigint;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    clientStreaming?: boolean;
                    serverStreaming?: boolean;
                }[];
                options?: {
                    deprecated?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: bigint;
                        negativeIntValue?: bigint;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _104.ServiceDescriptorProto;
            fromSDK(object: _104.ServiceDescriptorProtoSDKType): _104.ServiceDescriptorProto;
            toSDK(message: _104.ServiceDescriptorProto): _104.ServiceDescriptorProtoSDKType;
            fromAmino(object: _104.ServiceDescriptorProtoAmino): _104.ServiceDescriptorProto;
            toAmino(message: _104.ServiceDescriptorProto): _104.ServiceDescriptorProtoAmino;
            fromAminoMsg(object: _104.ServiceDescriptorProtoAminoMsg): _104.ServiceDescriptorProto;
            fromProtoMsg(message: _104.ServiceDescriptorProtoProtoMsg): _104.ServiceDescriptorProto;
            toProto(message: _104.ServiceDescriptorProto): Uint8Array;
            toProtoMsg(message: _104.ServiceDescriptorProto): _104.ServiceDescriptorProtoProtoMsg;
        };
        MethodDescriptorProto: {
            typeUrl: string;
            is(o: any): o is _104.MethodDescriptorProto;
            isSDK(o: any): o is _104.MethodDescriptorProtoSDKType;
            isAmino(o: any): o is _104.MethodDescriptorProtoAmino;
            encode(message: _104.MethodDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.MethodDescriptorProto;
            fromJSON(object: any): _104.MethodDescriptorProto;
            toJSON(message: _104.MethodDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                inputType?: string;
                outputType?: string;
                options?: {
                    deprecated?: boolean;
                    idempotencyLevel?: _104.MethodOptions_IdempotencyLevel;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: bigint;
                        negativeIntValue?: bigint;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
                clientStreaming?: boolean;
                serverStreaming?: boolean;
            }): _104.MethodDescriptorProto;
            fromSDK(object: _104.MethodDescriptorProtoSDKType): _104.MethodDescriptorProto;
            toSDK(message: _104.MethodDescriptorProto): _104.MethodDescriptorProtoSDKType;
            fromAmino(object: _104.MethodDescriptorProtoAmino): _104.MethodDescriptorProto;
            toAmino(message: _104.MethodDescriptorProto): _104.MethodDescriptorProtoAmino;
            fromAminoMsg(object: _104.MethodDescriptorProtoAminoMsg): _104.MethodDescriptorProto;
            fromProtoMsg(message: _104.MethodDescriptorProtoProtoMsg): _104.MethodDescriptorProto;
            toProto(message: _104.MethodDescriptorProto): Uint8Array;
            toProtoMsg(message: _104.MethodDescriptorProto): _104.MethodDescriptorProtoProtoMsg;
        };
        FileOptions: {
            typeUrl: string;
            is(o: any): o is _104.FileOptions;
            isSDK(o: any): o is _104.FileOptionsSDKType;
            isAmino(o: any): o is _104.FileOptionsAmino;
            encode(message: _104.FileOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.FileOptions;
            fromJSON(object: any): _104.FileOptions;
            toJSON(message: _104.FileOptions): unknown;
            fromPartial(object: {
                javaPackage?: string;
                javaOuterClassname?: string;
                javaMultipleFiles?: boolean;
                javaGenerateEqualsAndHash?: boolean;
                javaStringCheckUtf8?: boolean;
                optimizeFor?: _104.FileOptions_OptimizeMode;
                goPackage?: string;
                ccGenericServices?: boolean;
                javaGenericServices?: boolean;
                pyGenericServices?: boolean;
                phpGenericServices?: boolean;
                deprecated?: boolean;
                ccEnableArenas?: boolean;
                objcClassPrefix?: string;
                csharpNamespace?: string;
                swiftPrefix?: string;
                phpClassPrefix?: string;
                phpNamespace?: string;
                phpMetadataNamespace?: string;
                rubyPackage?: string;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: bigint;
                    negativeIntValue?: bigint;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _104.FileOptions;
            fromSDK(object: _104.FileOptionsSDKType): _104.FileOptions;
            toSDK(message: _104.FileOptions): _104.FileOptionsSDKType;
            fromAmino(object: _104.FileOptionsAmino): _104.FileOptions;
            toAmino(message: _104.FileOptions): _104.FileOptionsAmino;
            fromAminoMsg(object: _104.FileOptionsAminoMsg): _104.FileOptions;
            fromProtoMsg(message: _104.FileOptionsProtoMsg): _104.FileOptions;
            toProto(message: _104.FileOptions): Uint8Array;
            toProtoMsg(message: _104.FileOptions): _104.FileOptionsProtoMsg;
        };
        MessageOptions: {
            typeUrl: string;
            is(o: any): o is _104.MessageOptions;
            isSDK(o: any): o is _104.MessageOptionsSDKType;
            isAmino(o: any): o is _104.MessageOptionsAmino;
            encode(message: _104.MessageOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.MessageOptions;
            fromJSON(object: any): _104.MessageOptions;
            toJSON(message: _104.MessageOptions): unknown;
            fromPartial(object: {
                messageSetWireFormat?: boolean;
                noStandardDescriptorAccessor?: boolean;
                deprecated?: boolean;
                mapEntry?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: bigint;
                    negativeIntValue?: bigint;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _104.MessageOptions;
            fromSDK(object: _104.MessageOptionsSDKType): _104.MessageOptions;
            toSDK(message: _104.MessageOptions): _104.MessageOptionsSDKType;
            fromAmino(object: _104.MessageOptionsAmino): _104.MessageOptions;
            toAmino(message: _104.MessageOptions): _104.MessageOptionsAmino;
            fromAminoMsg(object: _104.MessageOptionsAminoMsg): _104.MessageOptions;
            fromProtoMsg(message: _104.MessageOptionsProtoMsg): _104.MessageOptions;
            toProto(message: _104.MessageOptions): Uint8Array;
            toProtoMsg(message: _104.MessageOptions): _104.MessageOptionsProtoMsg;
        };
        FieldOptions: {
            typeUrl: string;
            is(o: any): o is _104.FieldOptions;
            isSDK(o: any): o is _104.FieldOptionsSDKType;
            isAmino(o: any): o is _104.FieldOptionsAmino;
            encode(message: _104.FieldOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.FieldOptions;
            fromJSON(object: any): _104.FieldOptions;
            toJSON(message: _104.FieldOptions): unknown;
            fromPartial(object: {
                ctype?: _104.FieldOptions_CType;
                packed?: boolean;
                jstype?: _104.FieldOptions_JSType;
                lazy?: boolean;
                deprecated?: boolean;
                weak?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: bigint;
                    negativeIntValue?: bigint;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _104.FieldOptions;
            fromSDK(object: _104.FieldOptionsSDKType): _104.FieldOptions;
            toSDK(message: _104.FieldOptions): _104.FieldOptionsSDKType;
            fromAmino(object: _104.FieldOptionsAmino): _104.FieldOptions;
            toAmino(message: _104.FieldOptions): _104.FieldOptionsAmino;
            fromAminoMsg(object: _104.FieldOptionsAminoMsg): _104.FieldOptions;
            fromProtoMsg(message: _104.FieldOptionsProtoMsg): _104.FieldOptions;
            toProto(message: _104.FieldOptions): Uint8Array;
            toProtoMsg(message: _104.FieldOptions): _104.FieldOptionsProtoMsg;
        };
        OneofOptions: {
            typeUrl: string;
            is(o: any): o is _104.OneofOptions;
            isSDK(o: any): o is _104.OneofOptionsSDKType;
            isAmino(o: any): o is _104.OneofOptionsAmino;
            encode(message: _104.OneofOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.OneofOptions;
            fromJSON(object: any): _104.OneofOptions;
            toJSON(message: _104.OneofOptions): unknown;
            fromPartial(object: {
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: bigint;
                    negativeIntValue?: bigint;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _104.OneofOptions;
            fromSDK(object: _104.OneofOptionsSDKType): _104.OneofOptions;
            toSDK(message: _104.OneofOptions): _104.OneofOptionsSDKType;
            fromAmino(object: _104.OneofOptionsAmino): _104.OneofOptions;
            toAmino(message: _104.OneofOptions): _104.OneofOptionsAmino;
            fromAminoMsg(object: _104.OneofOptionsAminoMsg): _104.OneofOptions;
            fromProtoMsg(message: _104.OneofOptionsProtoMsg): _104.OneofOptions;
            toProto(message: _104.OneofOptions): Uint8Array;
            toProtoMsg(message: _104.OneofOptions): _104.OneofOptionsProtoMsg;
        };
        EnumOptions: {
            typeUrl: string;
            is(o: any): o is _104.EnumOptions;
            isSDK(o: any): o is _104.EnumOptionsSDKType;
            isAmino(o: any): o is _104.EnumOptionsAmino;
            encode(message: _104.EnumOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.EnumOptions;
            fromJSON(object: any): _104.EnumOptions;
            toJSON(message: _104.EnumOptions): unknown;
            fromPartial(object: {
                allowAlias?: boolean;
                deprecated?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: bigint;
                    negativeIntValue?: bigint;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _104.EnumOptions;
            fromSDK(object: _104.EnumOptionsSDKType): _104.EnumOptions;
            toSDK(message: _104.EnumOptions): _104.EnumOptionsSDKType;
            fromAmino(object: _104.EnumOptionsAmino): _104.EnumOptions;
            toAmino(message: _104.EnumOptions): _104.EnumOptionsAmino;
            fromAminoMsg(object: _104.EnumOptionsAminoMsg): _104.EnumOptions;
            fromProtoMsg(message: _104.EnumOptionsProtoMsg): _104.EnumOptions;
            toProto(message: _104.EnumOptions): Uint8Array;
            toProtoMsg(message: _104.EnumOptions): _104.EnumOptionsProtoMsg;
        };
        EnumValueOptions: {
            typeUrl: string;
            is(o: any): o is _104.EnumValueOptions;
            isSDK(o: any): o is _104.EnumValueOptionsSDKType;
            isAmino(o: any): o is _104.EnumValueOptionsAmino;
            encode(message: _104.EnumValueOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.EnumValueOptions;
            fromJSON(object: any): _104.EnumValueOptions;
            toJSON(message: _104.EnumValueOptions): unknown;
            fromPartial(object: {
                deprecated?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: bigint;
                    negativeIntValue?: bigint;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _104.EnumValueOptions;
            fromSDK(object: _104.EnumValueOptionsSDKType): _104.EnumValueOptions;
            toSDK(message: _104.EnumValueOptions): _104.EnumValueOptionsSDKType;
            fromAmino(object: _104.EnumValueOptionsAmino): _104.EnumValueOptions;
            toAmino(message: _104.EnumValueOptions): _104.EnumValueOptionsAmino;
            fromAminoMsg(object: _104.EnumValueOptionsAminoMsg): _104.EnumValueOptions;
            fromProtoMsg(message: _104.EnumValueOptionsProtoMsg): _104.EnumValueOptions;
            toProto(message: _104.EnumValueOptions): Uint8Array;
            toProtoMsg(message: _104.EnumValueOptions): _104.EnumValueOptionsProtoMsg;
        };
        ServiceOptions: {
            typeUrl: string;
            is(o: any): o is _104.ServiceOptions;
            isSDK(o: any): o is _104.ServiceOptionsSDKType;
            isAmino(o: any): o is _104.ServiceOptionsAmino;
            encode(message: _104.ServiceOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.ServiceOptions;
            fromJSON(object: any): _104.ServiceOptions;
            toJSON(message: _104.ServiceOptions): unknown;
            fromPartial(object: {
                deprecated?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: bigint;
                    negativeIntValue?: bigint;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _104.ServiceOptions;
            fromSDK(object: _104.ServiceOptionsSDKType): _104.ServiceOptions;
            toSDK(message: _104.ServiceOptions): _104.ServiceOptionsSDKType;
            fromAmino(object: _104.ServiceOptionsAmino): _104.ServiceOptions;
            toAmino(message: _104.ServiceOptions): _104.ServiceOptionsAmino;
            fromAminoMsg(object: _104.ServiceOptionsAminoMsg): _104.ServiceOptions;
            fromProtoMsg(message: _104.ServiceOptionsProtoMsg): _104.ServiceOptions;
            toProto(message: _104.ServiceOptions): Uint8Array;
            toProtoMsg(message: _104.ServiceOptions): _104.ServiceOptionsProtoMsg;
        };
        MethodOptions: {
            typeUrl: string;
            is(o: any): o is _104.MethodOptions;
            isSDK(o: any): o is _104.MethodOptionsSDKType;
            isAmino(o: any): o is _104.MethodOptionsAmino;
            encode(message: _104.MethodOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.MethodOptions;
            fromJSON(object: any): _104.MethodOptions;
            toJSON(message: _104.MethodOptions): unknown;
            fromPartial(object: {
                deprecated?: boolean;
                idempotencyLevel?: _104.MethodOptions_IdempotencyLevel;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: bigint;
                    negativeIntValue?: bigint;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _104.MethodOptions;
            fromSDK(object: _104.MethodOptionsSDKType): _104.MethodOptions;
            toSDK(message: _104.MethodOptions): _104.MethodOptionsSDKType;
            fromAmino(object: _104.MethodOptionsAmino): _104.MethodOptions;
            toAmino(message: _104.MethodOptions): _104.MethodOptionsAmino;
            fromAminoMsg(object: _104.MethodOptionsAminoMsg): _104.MethodOptions;
            fromProtoMsg(message: _104.MethodOptionsProtoMsg): _104.MethodOptions;
            toProto(message: _104.MethodOptions): Uint8Array;
            toProtoMsg(message: _104.MethodOptions): _104.MethodOptionsProtoMsg;
        };
        UninterpretedOption: {
            typeUrl: string;
            is(o: any): o is _104.UninterpretedOption;
            isSDK(o: any): o is _104.UninterpretedOptionSDKType;
            isAmino(o: any): o is _104.UninterpretedOptionAmino;
            encode(message: _104.UninterpretedOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.UninterpretedOption;
            fromJSON(object: any): _104.UninterpretedOption;
            toJSON(message: _104.UninterpretedOption): unknown;
            fromPartial(object: {
                name?: {
                    namePart?: string;
                    isExtension?: boolean;
                }[];
                identifierValue?: string;
                positiveIntValue?: bigint;
                negativeIntValue?: bigint;
                doubleValue?: number;
                stringValue?: Uint8Array;
                aggregateValue?: string;
            }): _104.UninterpretedOption;
            fromSDK(object: _104.UninterpretedOptionSDKType): _104.UninterpretedOption;
            toSDK(message: _104.UninterpretedOption): _104.UninterpretedOptionSDKType;
            fromAmino(object: _104.UninterpretedOptionAmino): _104.UninterpretedOption;
            toAmino(message: _104.UninterpretedOption): _104.UninterpretedOptionAmino;
            fromAminoMsg(object: _104.UninterpretedOptionAminoMsg): _104.UninterpretedOption;
            fromProtoMsg(message: _104.UninterpretedOptionProtoMsg): _104.UninterpretedOption;
            toProto(message: _104.UninterpretedOption): Uint8Array;
            toProtoMsg(message: _104.UninterpretedOption): _104.UninterpretedOptionProtoMsg;
        };
        UninterpretedOption_NamePart: {
            typeUrl: string;
            is(o: any): o is _104.UninterpretedOption_NamePart;
            isSDK(o: any): o is _104.UninterpretedOption_NamePartSDKType;
            isAmino(o: any): o is _104.UninterpretedOption_NamePartAmino;
            encode(message: _104.UninterpretedOption_NamePart, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.UninterpretedOption_NamePart;
            fromJSON(object: any): _104.UninterpretedOption_NamePart;
            toJSON(message: _104.UninterpretedOption_NamePart): unknown;
            fromPartial(object: {
                namePart?: string;
                isExtension?: boolean;
            }): _104.UninterpretedOption_NamePart;
            fromSDK(object: _104.UninterpretedOption_NamePartSDKType): _104.UninterpretedOption_NamePart;
            toSDK(message: _104.UninterpretedOption_NamePart): _104.UninterpretedOption_NamePartSDKType;
            fromAmino(object: _104.UninterpretedOption_NamePartAmino): _104.UninterpretedOption_NamePart;
            toAmino(message: _104.UninterpretedOption_NamePart): _104.UninterpretedOption_NamePartAmino;
            fromAminoMsg(object: _104.UninterpretedOption_NamePartAminoMsg): _104.UninterpretedOption_NamePart;
            fromProtoMsg(message: _104.UninterpretedOption_NamePartProtoMsg): _104.UninterpretedOption_NamePart;
            toProto(message: _104.UninterpretedOption_NamePart): Uint8Array;
            toProtoMsg(message: _104.UninterpretedOption_NamePart): _104.UninterpretedOption_NamePartProtoMsg;
        };
        SourceCodeInfo: {
            typeUrl: string;
            is(o: any): o is _104.SourceCodeInfo;
            isSDK(o: any): o is _104.SourceCodeInfoSDKType;
            isAmino(o: any): o is _104.SourceCodeInfoAmino;
            encode(message: _104.SourceCodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.SourceCodeInfo;
            fromJSON(object: any): _104.SourceCodeInfo;
            toJSON(message: _104.SourceCodeInfo): unknown;
            fromPartial(object: {
                location?: {
                    path?: number[];
                    span?: number[];
                    leadingComments?: string;
                    trailingComments?: string;
                    leadingDetachedComments?: string[];
                }[];
            }): _104.SourceCodeInfo;
            fromSDK(object: _104.SourceCodeInfoSDKType): _104.SourceCodeInfo;
            toSDK(message: _104.SourceCodeInfo): _104.SourceCodeInfoSDKType;
            fromAmino(object: _104.SourceCodeInfoAmino): _104.SourceCodeInfo;
            toAmino(message: _104.SourceCodeInfo): _104.SourceCodeInfoAmino;
            fromAminoMsg(object: _104.SourceCodeInfoAminoMsg): _104.SourceCodeInfo;
            fromProtoMsg(message: _104.SourceCodeInfoProtoMsg): _104.SourceCodeInfo;
            toProto(message: _104.SourceCodeInfo): Uint8Array;
            toProtoMsg(message: _104.SourceCodeInfo): _104.SourceCodeInfoProtoMsg;
        };
        SourceCodeInfo_Location: {
            typeUrl: string;
            is(o: any): o is _104.SourceCodeInfo_Location;
            isSDK(o: any): o is _104.SourceCodeInfo_LocationSDKType;
            isAmino(o: any): o is _104.SourceCodeInfo_LocationAmino;
            encode(message: _104.SourceCodeInfo_Location, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.SourceCodeInfo_Location;
            fromJSON(object: any): _104.SourceCodeInfo_Location;
            toJSON(message: _104.SourceCodeInfo_Location): unknown;
            fromPartial(object: {
                path?: number[];
                span?: number[];
                leadingComments?: string;
                trailingComments?: string;
                leadingDetachedComments?: string[];
            }): _104.SourceCodeInfo_Location;
            fromSDK(object: _104.SourceCodeInfo_LocationSDKType): _104.SourceCodeInfo_Location;
            toSDK(message: _104.SourceCodeInfo_Location): _104.SourceCodeInfo_LocationSDKType;
            fromAmino(object: _104.SourceCodeInfo_LocationAmino): _104.SourceCodeInfo_Location;
            toAmino(message: _104.SourceCodeInfo_Location): _104.SourceCodeInfo_LocationAmino;
            fromAminoMsg(object: _104.SourceCodeInfo_LocationAminoMsg): _104.SourceCodeInfo_Location;
            fromProtoMsg(message: _104.SourceCodeInfo_LocationProtoMsg): _104.SourceCodeInfo_Location;
            toProto(message: _104.SourceCodeInfo_Location): Uint8Array;
            toProtoMsg(message: _104.SourceCodeInfo_Location): _104.SourceCodeInfo_LocationProtoMsg;
        };
        GeneratedCodeInfo: {
            typeUrl: string;
            is(o: any): o is _104.GeneratedCodeInfo;
            isSDK(o: any): o is _104.GeneratedCodeInfoSDKType;
            isAmino(o: any): o is _104.GeneratedCodeInfoAmino;
            encode(message: _104.GeneratedCodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.GeneratedCodeInfo;
            fromJSON(object: any): _104.GeneratedCodeInfo;
            toJSON(message: _104.GeneratedCodeInfo): unknown;
            fromPartial(object: {
                annotation?: {
                    path?: number[];
                    sourceFile?: string;
                    begin?: number;
                    end?: number;
                }[];
            }): _104.GeneratedCodeInfo;
            fromSDK(object: _104.GeneratedCodeInfoSDKType): _104.GeneratedCodeInfo;
            toSDK(message: _104.GeneratedCodeInfo): _104.GeneratedCodeInfoSDKType;
            fromAmino(object: _104.GeneratedCodeInfoAmino): _104.GeneratedCodeInfo;
            toAmino(message: _104.GeneratedCodeInfo): _104.GeneratedCodeInfoAmino;
            fromAminoMsg(object: _104.GeneratedCodeInfoAminoMsg): _104.GeneratedCodeInfo;
            fromProtoMsg(message: _104.GeneratedCodeInfoProtoMsg): _104.GeneratedCodeInfo;
            toProto(message: _104.GeneratedCodeInfo): Uint8Array;
            toProtoMsg(message: _104.GeneratedCodeInfo): _104.GeneratedCodeInfoProtoMsg;
        };
        GeneratedCodeInfo_Annotation: {
            typeUrl: string;
            is(o: any): o is _104.GeneratedCodeInfo_Annotation;
            isSDK(o: any): o is _104.GeneratedCodeInfo_AnnotationSDKType;
            isAmino(o: any): o is _104.GeneratedCodeInfo_AnnotationAmino;
            encode(message: _104.GeneratedCodeInfo_Annotation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _104.GeneratedCodeInfo_Annotation;
            toJSON(message: _104.GeneratedCodeInfo_Annotation): unknown;
            fromPartial(object: {
                path?: number[];
                sourceFile?: string;
                begin?: number;
                end?: number;
            }): _104.GeneratedCodeInfo_Annotation;
            fromSDK(object: _104.GeneratedCodeInfo_AnnotationSDKType): _104.GeneratedCodeInfo_Annotation;
            toSDK(message: _104.GeneratedCodeInfo_Annotation): _104.GeneratedCodeInfo_AnnotationSDKType;
            fromAmino(object: _104.GeneratedCodeInfo_AnnotationAmino): _104.GeneratedCodeInfo_Annotation;
            toAmino(message: _104.GeneratedCodeInfo_Annotation): _104.GeneratedCodeInfo_AnnotationAmino;
            fromAminoMsg(object: _104.GeneratedCodeInfo_AnnotationAminoMsg): _104.GeneratedCodeInfo_Annotation;
            fromProtoMsg(message: _104.GeneratedCodeInfo_AnnotationProtoMsg): _104.GeneratedCodeInfo_Annotation;
            toProto(message: _104.GeneratedCodeInfo_Annotation): Uint8Array;
            toProtoMsg(message: _104.GeneratedCodeInfo_Annotation): _104.GeneratedCodeInfo_AnnotationProtoMsg;
        };
        Any: {
            typeUrl: string;
            is(o: any): o is _103.Any;
            isSDK(o: any): o is _103.AnySDKType;
            isAmino(o: any): o is _103.AnyAmino;
            encode(message: _103.Any, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.Any;
            fromJSON(object: any): _103.Any;
            toJSON(message: _103.Any): unknown;
            fromPartial(object: {
                $typeUrl?: "/google.protobuf.Any";
                typeUrl?: string;
                value?: Uint8Array;
            }): _103.Any;
            fromSDK(object: _103.AnySDKType): _103.Any;
            toSDK(message: _103.Any): _103.AnySDKType;
            fromAmino(object: _103.AnyAmino): _103.Any;
            toAmino(message: _103.Any): _103.AnyAmino;
            fromAminoMsg(object: _103.AnyAminoMsg): _103.Any;
            fromProtoMsg(message: _103.AnyProtoMsg): _103.Any;
            toProto(message: _103.Any): Uint8Array;
            toProtoMsg(message: _103.Any): _103.AnyProtoMsg;
        };
    };
}
