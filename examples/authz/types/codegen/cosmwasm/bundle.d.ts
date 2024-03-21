import * as _94 from "./wasm/v1/genesis";
import * as _95 from "./wasm/v1/ibc";
import * as _96 from "./wasm/v1/proposal";
import * as _97 from "./wasm/v1/query";
import * as _98 from "./wasm/v1/tx";
import * as _99 from "./wasm/v1/types";
import * as _252 from "./wasm/v1/query.rpc.Query";
import * as _253 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _253.MsgClientImpl;
            createClientImpl: (rpc: import("..").TxRpc) => _253.MsgClientImpl;
            QueryClientImpl: typeof _252.QueryClientImpl;
            createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                useContractInfo: <TData = _97.QueryContractInfoResponse>({ request, options }: _252.UseContractInfoQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                useContractHistory: <TData_1 = _97.QueryContractHistoryResponse>({ request, options }: _252.UseContractHistoryQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                useContractsByCode: <TData_2 = _97.QueryContractsByCodeResponse>({ request, options }: _252.UseContractsByCodeQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
                useAllContractState: <TData_3 = _97.QueryAllContractStateResponse>({ request, options }: _252.UseAllContractStateQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
                useRawContractState: <TData_4 = _97.QueryRawContractStateResponse>({ request, options }: _252.UseRawContractStateQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
                useSmartContractState: <TData_5 = _97.QuerySmartContractStateResponse>({ request, options }: _252.UseSmartContractStateQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
                useCode: <TData_6 = _97.QueryCodeResponse>({ request, options }: _252.UseCodeQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
                useCodes: <TData_7 = _97.QueryCodesResponse>({ request, options }: _252.UseCodesQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
                usePinnedCodes: <TData_8 = _97.QueryPinnedCodesResponse>({ request, options }: _252.UsePinnedCodesQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
            };
            createRpcQueryMobxStores: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                QueryContractInfoStore: {
                    new (): {
                        store: import("..").QueryStore<_97.QueryContractInfoRequest, _97.QueryContractInfoResponse>;
                        contractInfo(request: _97.QueryContractInfoRequest): import("..").MobxResponse<_97.QueryContractInfoResponse>;
                    };
                };
                QueryContractHistoryStore: {
                    new (): {
                        store: import("..").QueryStore<_97.QueryContractHistoryRequest, _97.QueryContractHistoryResponse>;
                        contractHistory(request: _97.QueryContractHistoryRequest): import("..").MobxResponse<_97.QueryContractHistoryResponse>;
                    };
                };
                QueryContractsByCodeStore: {
                    new (): {
                        store: import("..").QueryStore<_97.QueryContractsByCodeRequest, _97.QueryContractsByCodeResponse>;
                        contractsByCode(request: _97.QueryContractsByCodeRequest): import("..").MobxResponse<_97.QueryContractsByCodeResponse>;
                    };
                };
                QueryAllContractStateStore: {
                    new (): {
                        store: import("..").QueryStore<_97.QueryAllContractStateRequest, _97.QueryAllContractStateResponse>;
                        allContractState(request: _97.QueryAllContractStateRequest): import("..").MobxResponse<_97.QueryAllContractStateResponse>;
                    };
                };
                QueryRawContractStateStore: {
                    new (): {
                        store: import("..").QueryStore<_97.QueryRawContractStateRequest, _97.QueryRawContractStateResponse>;
                        rawContractState(request: _97.QueryRawContractStateRequest): import("..").MobxResponse<_97.QueryRawContractStateResponse>;
                    };
                };
                QuerySmartContractStateStore: {
                    new (): {
                        store: import("..").QueryStore<_97.QuerySmartContractStateRequest, _97.QuerySmartContractStateResponse>;
                        smartContractState(request: _97.QuerySmartContractStateRequest): import("..").MobxResponse<_97.QuerySmartContractStateResponse>;
                    };
                };
                QueryCodeStore: {
                    new (): {
                        store: import("..").QueryStore<_97.QueryCodeRequest, _97.QueryCodeResponse>;
                        code(request: _97.QueryCodeRequest): import("..").MobxResponse<_97.QueryCodeResponse>;
                    };
                };
                QueryCodesStore: {
                    new (): {
                        store: import("..").QueryStore<_97.QueryCodesRequest, _97.QueryCodesResponse>;
                        codes(request: _97.QueryCodesRequest): import("..").MobxResponse<_97.QueryCodesResponse>;
                    };
                };
                QueryPinnedCodesStore: {
                    new (): {
                        store: import("..").QueryStore<_97.QueryPinnedCodesRequest, _97.QueryPinnedCodesResponse>;
                        pinnedCodes(request: _97.QueryPinnedCodesRequest): import("..").MobxResponse<_97.QueryPinnedCodesResponse>;
                    };
                };
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _98.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _98.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _98.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _98.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _98.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _98.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _98.MsgStoreCode): {
                        typeUrl: string;
                        value: _98.MsgStoreCode;
                    };
                    instantiateContract(value: _98.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _98.MsgInstantiateContract;
                    };
                    executeContract(value: _98.MsgExecuteContract): {
                        typeUrl: string;
                        value: _98.MsgExecuteContract;
                    };
                    migrateContract(value: _98.MsgMigrateContract): {
                        typeUrl: string;
                        value: _98.MsgMigrateContract;
                    };
                    updateAdmin(value: _98.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _98.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _98.MsgClearAdmin): {
                        typeUrl: string;
                        value: _98.MsgClearAdmin;
                    };
                };
                toJSON: {
                    storeCode(value: _98.MsgStoreCode): {
                        typeUrl: string;
                        value: unknown;
                    };
                    instantiateContract(value: _98.MsgInstantiateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    executeContract(value: _98.MsgExecuteContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    migrateContract(value: _98.MsgMigrateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateAdmin(value: _98.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    clearAdmin(value: _98.MsgClearAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _98.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _98.MsgInstantiateContract;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _98.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _98.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _98.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _98.MsgClearAdmin;
                    };
                };
                fromPartial: {
                    storeCode(value: _98.MsgStoreCode): {
                        typeUrl: string;
                        value: _98.MsgStoreCode;
                    };
                    instantiateContract(value: _98.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _98.MsgInstantiateContract;
                    };
                    executeContract(value: _98.MsgExecuteContract): {
                        typeUrl: string;
                        value: _98.MsgExecuteContract;
                    };
                    migrateContract(value: _98.MsgMigrateContract): {
                        typeUrl: string;
                        value: _98.MsgMigrateContract;
                    };
                    updateAdmin(value: _98.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _98.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _98.MsgClearAdmin): {
                        typeUrl: string;
                        value: _98.MsgClearAdmin;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _98.MsgStoreCode) => _98.MsgStoreCodeAmino;
                    fromAmino: (object: _98.MsgStoreCodeAmino) => _98.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _98.MsgInstantiateContract) => _98.MsgInstantiateContractAmino;
                    fromAmino: (object: _98.MsgInstantiateContractAmino) => _98.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _98.MsgExecuteContract) => _98.MsgExecuteContractAmino;
                    fromAmino: (object: _98.MsgExecuteContractAmino) => _98.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _98.MsgMigrateContract) => _98.MsgMigrateContractAmino;
                    fromAmino: (object: _98.MsgMigrateContractAmino) => _98.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _98.MsgUpdateAdmin) => _98.MsgUpdateAdminAmino;
                    fromAmino: (object: _98.MsgUpdateAdminAmino) => _98.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _98.MsgClearAdmin) => _98.MsgClearAdminAmino;
                    fromAmino: (object: _98.MsgClearAdminAmino) => _98.MsgClearAdmin;
                };
            };
            accessTypeFromJSON(object: any): _99.AccessType;
            accessTypeToJSON(object: _99.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _99.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _99.ContractCodeHistoryOperationType): string;
            AccessType: typeof _99.AccessType;
            AccessTypeSDKType: typeof _99.AccessType;
            AccessTypeAmino: typeof _99.AccessType;
            ContractCodeHistoryOperationType: typeof _99.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _99.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeAmino: typeof _99.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _99.AccessTypeParam;
                isSDK(o: any): o is _99.AccessTypeParamSDKType;
                isAmino(o: any): o is _99.AccessTypeParamAmino;
                encode(message: _99.AccessTypeParam, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.AccessTypeParam;
                fromJSON(object: any): _99.AccessTypeParam;
                toJSON(message: _99.AccessTypeParam): unknown;
                fromPartial(object: {
                    value?: _99.AccessType;
                }): _99.AccessTypeParam;
                fromSDK(object: _99.AccessTypeParamSDKType): _99.AccessTypeParam;
                toSDK(message: _99.AccessTypeParam): _99.AccessTypeParamSDKType;
                fromAmino(object: _99.AccessTypeParamAmino): _99.AccessTypeParam;
                toAmino(message: _99.AccessTypeParam): _99.AccessTypeParamAmino;
                fromAminoMsg(object: _99.AccessTypeParamAminoMsg): _99.AccessTypeParam;
                toAminoMsg(message: _99.AccessTypeParam): _99.AccessTypeParamAminoMsg;
                fromProtoMsg(message: _99.AccessTypeParamProtoMsg): _99.AccessTypeParam;
                toProto(message: _99.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _99.AccessTypeParam): _99.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _99.AccessConfig;
                isSDK(o: any): o is _99.AccessConfigSDKType;
                isAmino(o: any): o is _99.AccessConfigAmino;
                encode(message: _99.AccessConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.AccessConfig;
                fromJSON(object: any): _99.AccessConfig;
                toJSON(message: _99.AccessConfig): unknown;
                fromPartial(object: {
                    permission?: _99.AccessType;
                    address?: string;
                }): _99.AccessConfig;
                fromSDK(object: _99.AccessConfigSDKType): _99.AccessConfig;
                toSDK(message: _99.AccessConfig): _99.AccessConfigSDKType;
                fromAmino(object: _99.AccessConfigAmino): _99.AccessConfig;
                toAmino(message: _99.AccessConfig): _99.AccessConfigAmino;
                fromAminoMsg(object: _99.AccessConfigAminoMsg): _99.AccessConfig;
                toAminoMsg(message: _99.AccessConfig): _99.AccessConfigAminoMsg;
                fromProtoMsg(message: _99.AccessConfigProtoMsg): _99.AccessConfig;
                toProto(message: _99.AccessConfig): Uint8Array;
                toProtoMsg(message: _99.AccessConfig): _99.AccessConfigProtoMsg;
            };
            Params: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _99.Params;
                isSDK(o: any): o is _99.ParamsSDKType;
                isAmino(o: any): o is _99.ParamsAmino;
                encode(message: _99.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.Params;
                fromJSON(object: any): _99.Params;
                toJSON(message: _99.Params): unknown;
                fromPartial(object: {
                    codeUploadAccess?: {
                        permission?: _99.AccessType;
                        address?: string;
                    };
                    instantiateDefaultPermission?: _99.AccessType;
                    maxWasmCodeSize?: bigint;
                }): _99.Params;
                fromSDK(object: _99.ParamsSDKType): _99.Params;
                toSDK(message: _99.Params): _99.ParamsSDKType;
                fromAmino(object: _99.ParamsAmino): _99.Params;
                toAmino(message: _99.Params): _99.ParamsAmino;
                fromAminoMsg(object: _99.ParamsAminoMsg): _99.Params;
                toAminoMsg(message: _99.Params): _99.ParamsAminoMsg;
                fromProtoMsg(message: _99.ParamsProtoMsg): _99.Params;
                toProto(message: _99.Params): Uint8Array;
                toProtoMsg(message: _99.Params): _99.ParamsProtoMsg;
            };
            CodeInfo: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _99.CodeInfo;
                isSDK(o: any): o is _99.CodeInfoSDKType;
                isAmino(o: any): o is _99.CodeInfoAmino;
                encode(message: _99.CodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.CodeInfo;
                fromJSON(object: any): _99.CodeInfo;
                toJSON(message: _99.CodeInfo): unknown;
                fromPartial(object: {
                    codeHash?: Uint8Array;
                    creator?: string;
                    instantiateConfig?: {
                        permission?: _99.AccessType;
                        address?: string;
                    };
                }): _99.CodeInfo;
                fromSDK(object: _99.CodeInfoSDKType): _99.CodeInfo;
                toSDK(message: _99.CodeInfo): _99.CodeInfoSDKType;
                fromAmino(object: _99.CodeInfoAmino): _99.CodeInfo;
                toAmino(message: _99.CodeInfo): _99.CodeInfoAmino;
                fromAminoMsg(object: _99.CodeInfoAminoMsg): _99.CodeInfo;
                toAminoMsg(message: _99.CodeInfo): _99.CodeInfoAminoMsg;
                fromProtoMsg(message: _99.CodeInfoProtoMsg): _99.CodeInfo;
                toProto(message: _99.CodeInfo): Uint8Array;
                toProtoMsg(message: _99.CodeInfo): _99.CodeInfoProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _99.ContractInfo;
                isSDK(o: any): o is _99.ContractInfoSDKType;
                isAmino(o: any): o is _99.ContractInfoAmino;
                encode(message: _99.ContractInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.ContractInfo;
                fromJSON(object: any): _99.ContractInfo;
                toJSON(message: _99.ContractInfo): unknown;
                fromPartial(object: {
                    codeId?: bigint;
                    creator?: string;
                    admin?: string;
                    label?: string;
                    created?: {
                        blockHeight?: bigint;
                        txIndex?: bigint;
                    };
                    ibcPortId?: string;
                    extension?: {
                        $typeUrl?: "/google.protobuf.Any";
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _99.ContractInfo;
                fromSDK(object: _99.ContractInfoSDKType): _99.ContractInfo;
                toSDK(message: _99.ContractInfo): _99.ContractInfoSDKType;
                fromAmino(object: _99.ContractInfoAmino): _99.ContractInfo;
                toAmino(message: _99.ContractInfo): _99.ContractInfoAmino;
                fromAminoMsg(object: _99.ContractInfoAminoMsg): _99.ContractInfo;
                toAminoMsg(message: _99.ContractInfo): _99.ContractInfoAminoMsg;
                fromProtoMsg(message: _99.ContractInfoProtoMsg): _99.ContractInfo;
                toProto(message: _99.ContractInfo): Uint8Array;
                toProtoMsg(message: _99.ContractInfo): _99.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _99.ContractCodeHistoryEntry;
                isSDK(o: any): o is _99.ContractCodeHistoryEntrySDKType;
                isAmino(o: any): o is _99.ContractCodeHistoryEntryAmino;
                encode(message: _99.ContractCodeHistoryEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.ContractCodeHistoryEntry;
                fromJSON(object: any): _99.ContractCodeHistoryEntry;
                toJSON(message: _99.ContractCodeHistoryEntry): unknown;
                fromPartial(object: {
                    operation?: _99.ContractCodeHistoryOperationType;
                    codeId?: bigint;
                    updated?: {
                        blockHeight?: bigint;
                        txIndex?: bigint;
                    };
                    msg?: Uint8Array;
                }): _99.ContractCodeHistoryEntry;
                fromSDK(object: _99.ContractCodeHistoryEntrySDKType): _99.ContractCodeHistoryEntry;
                toSDK(message: _99.ContractCodeHistoryEntry): _99.ContractCodeHistoryEntrySDKType;
                fromAmino(object: _99.ContractCodeHistoryEntryAmino): _99.ContractCodeHistoryEntry;
                toAmino(message: _99.ContractCodeHistoryEntry): _99.ContractCodeHistoryEntryAmino;
                fromAminoMsg(object: _99.ContractCodeHistoryEntryAminoMsg): _99.ContractCodeHistoryEntry;
                toAminoMsg(message: _99.ContractCodeHistoryEntry): _99.ContractCodeHistoryEntryAminoMsg;
                fromProtoMsg(message: _99.ContractCodeHistoryEntryProtoMsg): _99.ContractCodeHistoryEntry;
                toProto(message: _99.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _99.ContractCodeHistoryEntry): _99.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _99.AbsoluteTxPosition;
                isSDK(o: any): o is _99.AbsoluteTxPositionSDKType;
                isAmino(o: any): o is _99.AbsoluteTxPositionAmino;
                encode(message: _99.AbsoluteTxPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.AbsoluteTxPosition;
                fromJSON(object: any): _99.AbsoluteTxPosition;
                toJSON(message: _99.AbsoluteTxPosition): unknown;
                fromPartial(object: {
                    blockHeight?: bigint;
                    txIndex?: bigint;
                }): _99.AbsoluteTxPosition;
                fromSDK(object: _99.AbsoluteTxPositionSDKType): _99.AbsoluteTxPosition;
                toSDK(message: _99.AbsoluteTxPosition): _99.AbsoluteTxPositionSDKType;
                fromAmino(object: _99.AbsoluteTxPositionAmino): _99.AbsoluteTxPosition;
                toAmino(message: _99.AbsoluteTxPosition): _99.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _99.AbsoluteTxPositionAminoMsg): _99.AbsoluteTxPosition;
                toAminoMsg(message: _99.AbsoluteTxPosition): _99.AbsoluteTxPositionAminoMsg;
                fromProtoMsg(message: _99.AbsoluteTxPositionProtoMsg): _99.AbsoluteTxPosition;
                toProto(message: _99.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _99.AbsoluteTxPosition): _99.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _99.Model;
                isSDK(o: any): o is _99.ModelSDKType;
                isAmino(o: any): o is _99.ModelAmino;
                encode(message: _99.Model, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.Model;
                fromJSON(object: any): _99.Model;
                toJSON(message: _99.Model): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                }): _99.Model;
                fromSDK(object: _99.ModelSDKType): _99.Model;
                toSDK(message: _99.Model): _99.ModelSDKType;
                fromAmino(object: _99.ModelAmino): _99.Model;
                toAmino(message: _99.Model): _99.ModelAmino;
                fromAminoMsg(object: _99.ModelAminoMsg): _99.Model;
                toAminoMsg(message: _99.Model): _99.ModelAminoMsg;
                fromProtoMsg(message: _99.ModelProtoMsg): _99.Model;
                toProto(message: _99.Model): Uint8Array;
                toProtoMsg(message: _99.Model): _99.ModelProtoMsg;
            };
            MsgStoreCode: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _98.MsgStoreCode;
                isSDK(o: any): o is _98.MsgStoreCodeSDKType;
                isAmino(o: any): o is _98.MsgStoreCodeAmino;
                encode(message: _98.MsgStoreCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.MsgStoreCode;
                fromJSON(object: any): _98.MsgStoreCode;
                toJSON(message: _98.MsgStoreCode): unknown;
                fromPartial(object: {
                    sender?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _99.AccessType;
                        address?: string;
                    };
                }): _98.MsgStoreCode;
                fromSDK(object: _98.MsgStoreCodeSDKType): _98.MsgStoreCode;
                toSDK(message: _98.MsgStoreCode): _98.MsgStoreCodeSDKType;
                fromAmino(object: _98.MsgStoreCodeAmino): _98.MsgStoreCode;
                toAmino(message: _98.MsgStoreCode): _98.MsgStoreCodeAmino;
                fromAminoMsg(object: _98.MsgStoreCodeAminoMsg): _98.MsgStoreCode;
                toAminoMsg(message: _98.MsgStoreCode): _98.MsgStoreCodeAminoMsg;
                fromProtoMsg(message: _98.MsgStoreCodeProtoMsg): _98.MsgStoreCode;
                toProto(message: _98.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _98.MsgStoreCode): _98.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _98.MsgStoreCodeResponse;
                isSDK(o: any): o is _98.MsgStoreCodeResponseSDKType;
                isAmino(o: any): o is _98.MsgStoreCodeResponseAmino;
                encode(message: _98.MsgStoreCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.MsgStoreCodeResponse;
                fromJSON(object: any): _98.MsgStoreCodeResponse;
                toJSON(message: _98.MsgStoreCodeResponse): unknown;
                fromPartial(object: {
                    codeId?: bigint;
                }): _98.MsgStoreCodeResponse;
                fromSDK(object: _98.MsgStoreCodeResponseSDKType): _98.MsgStoreCodeResponse;
                toSDK(message: _98.MsgStoreCodeResponse): _98.MsgStoreCodeResponseSDKType;
                fromAmino(object: _98.MsgStoreCodeResponseAmino): _98.MsgStoreCodeResponse;
                toAmino(message: _98.MsgStoreCodeResponse): _98.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _98.MsgStoreCodeResponseAminoMsg): _98.MsgStoreCodeResponse;
                toAminoMsg(message: _98.MsgStoreCodeResponse): _98.MsgStoreCodeResponseAminoMsg;
                fromProtoMsg(message: _98.MsgStoreCodeResponseProtoMsg): _98.MsgStoreCodeResponse;
                toProto(message: _98.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _98.MsgStoreCodeResponse): _98.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _98.MsgInstantiateContract;
                isSDK(o: any): o is _98.MsgInstantiateContractSDKType;
                isAmino(o: any): o is _98.MsgInstantiateContractAmino;
                encode(message: _98.MsgInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.MsgInstantiateContract;
                fromJSON(object: any): _98.MsgInstantiateContract;
                toJSON(message: _98.MsgInstantiateContract): unknown;
                fromPartial(object: {
                    sender?: string;
                    admin?: string;
                    codeId?: bigint;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _98.MsgInstantiateContract;
                fromSDK(object: _98.MsgInstantiateContractSDKType): _98.MsgInstantiateContract;
                toSDK(message: _98.MsgInstantiateContract): _98.MsgInstantiateContractSDKType;
                fromAmino(object: _98.MsgInstantiateContractAmino): _98.MsgInstantiateContract;
                toAmino(message: _98.MsgInstantiateContract): _98.MsgInstantiateContractAmino;
                fromAminoMsg(object: _98.MsgInstantiateContractAminoMsg): _98.MsgInstantiateContract;
                toAminoMsg(message: _98.MsgInstantiateContract): _98.MsgInstantiateContractAminoMsg;
                fromProtoMsg(message: _98.MsgInstantiateContractProtoMsg): _98.MsgInstantiateContract;
                toProto(message: _98.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _98.MsgInstantiateContract): _98.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContractResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _98.MsgInstantiateContractResponse;
                isSDK(o: any): o is _98.MsgInstantiateContractResponseSDKType;
                isAmino(o: any): o is _98.MsgInstantiateContractResponseAmino;
                encode(message: _98.MsgInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.MsgInstantiateContractResponse;
                fromJSON(object: any): _98.MsgInstantiateContractResponse;
                toJSON(message: _98.MsgInstantiateContractResponse): unknown;
                fromPartial(object: {
                    address?: string;
                    data?: Uint8Array;
                }): _98.MsgInstantiateContractResponse;
                fromSDK(object: _98.MsgInstantiateContractResponseSDKType): _98.MsgInstantiateContractResponse;
                toSDK(message: _98.MsgInstantiateContractResponse): _98.MsgInstantiateContractResponseSDKType;
                fromAmino(object: _98.MsgInstantiateContractResponseAmino): _98.MsgInstantiateContractResponse;
                toAmino(message: _98.MsgInstantiateContractResponse): _98.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _98.MsgInstantiateContractResponseAminoMsg): _98.MsgInstantiateContractResponse;
                toAminoMsg(message: _98.MsgInstantiateContractResponse): _98.MsgInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _98.MsgInstantiateContractResponseProtoMsg): _98.MsgInstantiateContractResponse;
                toProto(message: _98.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _98.MsgInstantiateContractResponse): _98.MsgInstantiateContractResponseProtoMsg;
            };
            MsgExecuteContract: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _98.MsgExecuteContract;
                isSDK(o: any): o is _98.MsgExecuteContractSDKType;
                isAmino(o: any): o is _98.MsgExecuteContractAmino;
                encode(message: _98.MsgExecuteContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.MsgExecuteContract;
                fromJSON(object: any): _98.MsgExecuteContract;
                toJSON(message: _98.MsgExecuteContract): unknown;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _98.MsgExecuteContract;
                fromSDK(object: _98.MsgExecuteContractSDKType): _98.MsgExecuteContract;
                toSDK(message: _98.MsgExecuteContract): _98.MsgExecuteContractSDKType;
                fromAmino(object: _98.MsgExecuteContractAmino): _98.MsgExecuteContract;
                toAmino(message: _98.MsgExecuteContract): _98.MsgExecuteContractAmino;
                fromAminoMsg(object: _98.MsgExecuteContractAminoMsg): _98.MsgExecuteContract;
                toAminoMsg(message: _98.MsgExecuteContract): _98.MsgExecuteContractAminoMsg;
                fromProtoMsg(message: _98.MsgExecuteContractProtoMsg): _98.MsgExecuteContract;
                toProto(message: _98.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _98.MsgExecuteContract): _98.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _98.MsgExecuteContractResponse;
                isSDK(o: any): o is _98.MsgExecuteContractResponseSDKType;
                isAmino(o: any): o is _98.MsgExecuteContractResponseAmino;
                encode(message: _98.MsgExecuteContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.MsgExecuteContractResponse;
                fromJSON(object: any): _98.MsgExecuteContractResponse;
                toJSON(message: _98.MsgExecuteContractResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _98.MsgExecuteContractResponse;
                fromSDK(object: _98.MsgExecuteContractResponseSDKType): _98.MsgExecuteContractResponse;
                toSDK(message: _98.MsgExecuteContractResponse): _98.MsgExecuteContractResponseSDKType;
                fromAmino(object: _98.MsgExecuteContractResponseAmino): _98.MsgExecuteContractResponse;
                toAmino(message: _98.MsgExecuteContractResponse): _98.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _98.MsgExecuteContractResponseAminoMsg): _98.MsgExecuteContractResponse;
                toAminoMsg(message: _98.MsgExecuteContractResponse): _98.MsgExecuteContractResponseAminoMsg;
                fromProtoMsg(message: _98.MsgExecuteContractResponseProtoMsg): _98.MsgExecuteContractResponse;
                toProto(message: _98.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _98.MsgExecuteContractResponse): _98.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _98.MsgMigrateContract;
                isSDK(o: any): o is _98.MsgMigrateContractSDKType;
                isAmino(o: any): o is _98.MsgMigrateContractAmino;
                encode(message: _98.MsgMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.MsgMigrateContract;
                fromJSON(object: any): _98.MsgMigrateContract;
                toJSON(message: _98.MsgMigrateContract): unknown;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    codeId?: bigint;
                    msg?: Uint8Array;
                }): _98.MsgMigrateContract;
                fromSDK(object: _98.MsgMigrateContractSDKType): _98.MsgMigrateContract;
                toSDK(message: _98.MsgMigrateContract): _98.MsgMigrateContractSDKType;
                fromAmino(object: _98.MsgMigrateContractAmino): _98.MsgMigrateContract;
                toAmino(message: _98.MsgMigrateContract): _98.MsgMigrateContractAmino;
                fromAminoMsg(object: _98.MsgMigrateContractAminoMsg): _98.MsgMigrateContract;
                toAminoMsg(message: _98.MsgMigrateContract): _98.MsgMigrateContractAminoMsg;
                fromProtoMsg(message: _98.MsgMigrateContractProtoMsg): _98.MsgMigrateContract;
                toProto(message: _98.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _98.MsgMigrateContract): _98.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _98.MsgMigrateContractResponse;
                isSDK(o: any): o is _98.MsgMigrateContractResponseSDKType;
                isAmino(o: any): o is _98.MsgMigrateContractResponseAmino;
                encode(message: _98.MsgMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.MsgMigrateContractResponse;
                fromJSON(object: any): _98.MsgMigrateContractResponse;
                toJSON(message: _98.MsgMigrateContractResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _98.MsgMigrateContractResponse;
                fromSDK(object: _98.MsgMigrateContractResponseSDKType): _98.MsgMigrateContractResponse;
                toSDK(message: _98.MsgMigrateContractResponse): _98.MsgMigrateContractResponseSDKType;
                fromAmino(object: _98.MsgMigrateContractResponseAmino): _98.MsgMigrateContractResponse;
                toAmino(message: _98.MsgMigrateContractResponse): _98.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _98.MsgMigrateContractResponseAminoMsg): _98.MsgMigrateContractResponse;
                toAminoMsg(message: _98.MsgMigrateContractResponse): _98.MsgMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _98.MsgMigrateContractResponseProtoMsg): _98.MsgMigrateContractResponse;
                toProto(message: _98.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _98.MsgMigrateContractResponse): _98.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _98.MsgUpdateAdmin;
                isSDK(o: any): o is _98.MsgUpdateAdminSDKType;
                isAmino(o: any): o is _98.MsgUpdateAdminAmino;
                encode(message: _98.MsgUpdateAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.MsgUpdateAdmin;
                fromJSON(object: any): _98.MsgUpdateAdmin;
                toJSON(message: _98.MsgUpdateAdmin): unknown;
                fromPartial(object: {
                    sender?: string;
                    newAdmin?: string;
                    contract?: string;
                }): _98.MsgUpdateAdmin;
                fromSDK(object: _98.MsgUpdateAdminSDKType): _98.MsgUpdateAdmin;
                toSDK(message: _98.MsgUpdateAdmin): _98.MsgUpdateAdminSDKType;
                fromAmino(object: _98.MsgUpdateAdminAmino): _98.MsgUpdateAdmin;
                toAmino(message: _98.MsgUpdateAdmin): _98.MsgUpdateAdminAmino;
                fromAminoMsg(object: _98.MsgUpdateAdminAminoMsg): _98.MsgUpdateAdmin;
                toAminoMsg(message: _98.MsgUpdateAdmin): _98.MsgUpdateAdminAminoMsg;
                fromProtoMsg(message: _98.MsgUpdateAdminProtoMsg): _98.MsgUpdateAdmin;
                toProto(message: _98.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _98.MsgUpdateAdmin): _98.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _98.MsgUpdateAdminResponse;
                isSDK(o: any): o is _98.MsgUpdateAdminResponseSDKType;
                isAmino(o: any): o is _98.MsgUpdateAdminResponseAmino;
                encode(_: _98.MsgUpdateAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.MsgUpdateAdminResponse;
                fromJSON(_: any): _98.MsgUpdateAdminResponse;
                toJSON(_: _98.MsgUpdateAdminResponse): unknown;
                fromPartial(_: {}): _98.MsgUpdateAdminResponse;
                fromSDK(_: _98.MsgUpdateAdminResponseSDKType): _98.MsgUpdateAdminResponse;
                toSDK(_: _98.MsgUpdateAdminResponse): _98.MsgUpdateAdminResponseSDKType;
                fromAmino(_: _98.MsgUpdateAdminResponseAmino): _98.MsgUpdateAdminResponse;
                toAmino(_: _98.MsgUpdateAdminResponse): _98.MsgUpdateAdminResponseAmino;
                fromAminoMsg(object: _98.MsgUpdateAdminResponseAminoMsg): _98.MsgUpdateAdminResponse;
                toAminoMsg(message: _98.MsgUpdateAdminResponse): _98.MsgUpdateAdminResponseAminoMsg;
                fromProtoMsg(message: _98.MsgUpdateAdminResponseProtoMsg): _98.MsgUpdateAdminResponse;
                toProto(message: _98.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _98.MsgUpdateAdminResponse): _98.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _98.MsgClearAdmin;
                isSDK(o: any): o is _98.MsgClearAdminSDKType;
                isAmino(o: any): o is _98.MsgClearAdminAmino;
                encode(message: _98.MsgClearAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.MsgClearAdmin;
                fromJSON(object: any): _98.MsgClearAdmin;
                toJSON(message: _98.MsgClearAdmin): unknown;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                }): _98.MsgClearAdmin;
                fromSDK(object: _98.MsgClearAdminSDKType): _98.MsgClearAdmin;
                toSDK(message: _98.MsgClearAdmin): _98.MsgClearAdminSDKType;
                fromAmino(object: _98.MsgClearAdminAmino): _98.MsgClearAdmin;
                toAmino(message: _98.MsgClearAdmin): _98.MsgClearAdminAmino;
                fromAminoMsg(object: _98.MsgClearAdminAminoMsg): _98.MsgClearAdmin;
                toAminoMsg(message: _98.MsgClearAdmin): _98.MsgClearAdminAminoMsg;
                fromProtoMsg(message: _98.MsgClearAdminProtoMsg): _98.MsgClearAdmin;
                toProto(message: _98.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _98.MsgClearAdmin): _98.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _98.MsgClearAdminResponse;
                isSDK(o: any): o is _98.MsgClearAdminResponseSDKType;
                isAmino(o: any): o is _98.MsgClearAdminResponseAmino;
                encode(_: _98.MsgClearAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.MsgClearAdminResponse;
                fromJSON(_: any): _98.MsgClearAdminResponse;
                toJSON(_: _98.MsgClearAdminResponse): unknown;
                fromPartial(_: {}): _98.MsgClearAdminResponse;
                fromSDK(_: _98.MsgClearAdminResponseSDKType): _98.MsgClearAdminResponse;
                toSDK(_: _98.MsgClearAdminResponse): _98.MsgClearAdminResponseSDKType;
                fromAmino(_: _98.MsgClearAdminResponseAmino): _98.MsgClearAdminResponse;
                toAmino(_: _98.MsgClearAdminResponse): _98.MsgClearAdminResponseAmino;
                fromAminoMsg(object: _98.MsgClearAdminResponseAminoMsg): _98.MsgClearAdminResponse;
                toAminoMsg(message: _98.MsgClearAdminResponse): _98.MsgClearAdminResponseAminoMsg;
                fromProtoMsg(message: _98.MsgClearAdminResponseProtoMsg): _98.MsgClearAdminResponse;
                toProto(message: _98.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _98.MsgClearAdminResponse): _98.MsgClearAdminResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _97.QueryContractInfoRequest;
                isSDK(o: any): o is _97.QueryContractInfoRequestSDKType;
                isAmino(o: any): o is _97.QueryContractInfoRequestAmino;
                encode(message: _97.QueryContractInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryContractInfoRequest;
                fromJSON(object: any): _97.QueryContractInfoRequest;
                toJSON(message: _97.QueryContractInfoRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _97.QueryContractInfoRequest;
                fromSDK(object: _97.QueryContractInfoRequestSDKType): _97.QueryContractInfoRequest;
                toSDK(message: _97.QueryContractInfoRequest): _97.QueryContractInfoRequestSDKType;
                fromAmino(object: _97.QueryContractInfoRequestAmino): _97.QueryContractInfoRequest;
                toAmino(message: _97.QueryContractInfoRequest): _97.QueryContractInfoRequestAmino;
                fromAminoMsg(object: _97.QueryContractInfoRequestAminoMsg): _97.QueryContractInfoRequest;
                toAminoMsg(message: _97.QueryContractInfoRequest): _97.QueryContractInfoRequestAminoMsg;
                fromProtoMsg(message: _97.QueryContractInfoRequestProtoMsg): _97.QueryContractInfoRequest;
                toProto(message: _97.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _97.QueryContractInfoRequest): _97.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _97.QueryContractInfoResponse;
                isSDK(o: any): o is _97.QueryContractInfoResponseSDKType;
                isAmino(o: any): o is _97.QueryContractInfoResponseAmino;
                encode(message: _97.QueryContractInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryContractInfoResponse;
                fromJSON(object: any): _97.QueryContractInfoResponse;
                toJSON(message: _97.QueryContractInfoResponse): unknown;
                fromPartial(object: {
                    address?: string;
                    contractInfo?: {
                        codeId?: bigint;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            blockHeight?: bigint;
                            txIndex?: bigint;
                        };
                        ibcPortId?: string;
                        extension?: {
                            $typeUrl?: "/google.protobuf.Any";
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _97.QueryContractInfoResponse;
                fromSDK(object: _97.QueryContractInfoResponseSDKType): _97.QueryContractInfoResponse;
                toSDK(message: _97.QueryContractInfoResponse): _97.QueryContractInfoResponseSDKType;
                fromAmino(object: _97.QueryContractInfoResponseAmino): _97.QueryContractInfoResponse;
                toAmino(message: _97.QueryContractInfoResponse): _97.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _97.QueryContractInfoResponseAminoMsg): _97.QueryContractInfoResponse;
                toAminoMsg(message: _97.QueryContractInfoResponse): _97.QueryContractInfoResponseAminoMsg;
                fromProtoMsg(message: _97.QueryContractInfoResponseProtoMsg): _97.QueryContractInfoResponse;
                toProto(message: _97.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _97.QueryContractInfoResponse): _97.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _97.QueryContractHistoryRequest;
                isSDK(o: any): o is _97.QueryContractHistoryRequestSDKType;
                isAmino(o: any): o is _97.QueryContractHistoryRequestAmino;
                encode(message: _97.QueryContractHistoryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryContractHistoryRequest;
                fromJSON(object: any): _97.QueryContractHistoryRequest;
                toJSON(message: _97.QueryContractHistoryRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _97.QueryContractHistoryRequest;
                fromSDK(object: _97.QueryContractHistoryRequestSDKType): _97.QueryContractHistoryRequest;
                toSDK(message: _97.QueryContractHistoryRequest): _97.QueryContractHistoryRequestSDKType;
                fromAmino(object: _97.QueryContractHistoryRequestAmino): _97.QueryContractHistoryRequest;
                toAmino(message: _97.QueryContractHistoryRequest): _97.QueryContractHistoryRequestAmino;
                fromAminoMsg(object: _97.QueryContractHistoryRequestAminoMsg): _97.QueryContractHistoryRequest;
                toAminoMsg(message: _97.QueryContractHistoryRequest): _97.QueryContractHistoryRequestAminoMsg;
                fromProtoMsg(message: _97.QueryContractHistoryRequestProtoMsg): _97.QueryContractHistoryRequest;
                toProto(message: _97.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _97.QueryContractHistoryRequest): _97.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _97.QueryContractHistoryResponse;
                isSDK(o: any): o is _97.QueryContractHistoryResponseSDKType;
                isAmino(o: any): o is _97.QueryContractHistoryResponseAmino;
                encode(message: _97.QueryContractHistoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryContractHistoryResponse;
                fromJSON(object: any): _97.QueryContractHistoryResponse;
                toJSON(message: _97.QueryContractHistoryResponse): unknown;
                fromPartial(object: {
                    entries?: {
                        operation?: _99.ContractCodeHistoryOperationType;
                        codeId?: bigint;
                        updated?: {
                            blockHeight?: bigint;
                            txIndex?: bigint;
                        };
                        msg?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _97.QueryContractHistoryResponse;
                fromSDK(object: _97.QueryContractHistoryResponseSDKType): _97.QueryContractHistoryResponse;
                toSDK(message: _97.QueryContractHistoryResponse): _97.QueryContractHistoryResponseSDKType;
                fromAmino(object: _97.QueryContractHistoryResponseAmino): _97.QueryContractHistoryResponse;
                toAmino(message: _97.QueryContractHistoryResponse): _97.QueryContractHistoryResponseAmino;
                fromAminoMsg(object: _97.QueryContractHistoryResponseAminoMsg): _97.QueryContractHistoryResponse;
                toAminoMsg(message: _97.QueryContractHistoryResponse): _97.QueryContractHistoryResponseAminoMsg;
                fromProtoMsg(message: _97.QueryContractHistoryResponseProtoMsg): _97.QueryContractHistoryResponse;
                toProto(message: _97.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _97.QueryContractHistoryResponse): _97.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _97.QueryContractsByCodeRequest;
                isSDK(o: any): o is _97.QueryContractsByCodeRequestSDKType;
                isAmino(o: any): o is _97.QueryContractsByCodeRequestAmino;
                encode(message: _97.QueryContractsByCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryContractsByCodeRequest;
                fromJSON(object: any): _97.QueryContractsByCodeRequest;
                toJSON(message: _97.QueryContractsByCodeRequest): unknown;
                fromPartial(object: {
                    codeId?: bigint;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _97.QueryContractsByCodeRequest;
                fromSDK(object: _97.QueryContractsByCodeRequestSDKType): _97.QueryContractsByCodeRequest;
                toSDK(message: _97.QueryContractsByCodeRequest): _97.QueryContractsByCodeRequestSDKType;
                fromAmino(object: _97.QueryContractsByCodeRequestAmino): _97.QueryContractsByCodeRequest;
                toAmino(message: _97.QueryContractsByCodeRequest): _97.QueryContractsByCodeRequestAmino;
                fromAminoMsg(object: _97.QueryContractsByCodeRequestAminoMsg): _97.QueryContractsByCodeRequest;
                toAminoMsg(message: _97.QueryContractsByCodeRequest): _97.QueryContractsByCodeRequestAminoMsg;
                fromProtoMsg(message: _97.QueryContractsByCodeRequestProtoMsg): _97.QueryContractsByCodeRequest;
                toProto(message: _97.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _97.QueryContractsByCodeRequest): _97.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _97.QueryContractsByCodeResponse;
                isSDK(o: any): o is _97.QueryContractsByCodeResponseSDKType;
                isAmino(o: any): o is _97.QueryContractsByCodeResponseAmino;
                encode(message: _97.QueryContractsByCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryContractsByCodeResponse;
                fromJSON(object: any): _97.QueryContractsByCodeResponse;
                toJSON(message: _97.QueryContractsByCodeResponse): unknown;
                fromPartial(object: {
                    contracts?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _97.QueryContractsByCodeResponse;
                fromSDK(object: _97.QueryContractsByCodeResponseSDKType): _97.QueryContractsByCodeResponse;
                toSDK(message: _97.QueryContractsByCodeResponse): _97.QueryContractsByCodeResponseSDKType;
                fromAmino(object: _97.QueryContractsByCodeResponseAmino): _97.QueryContractsByCodeResponse;
                toAmino(message: _97.QueryContractsByCodeResponse): _97.QueryContractsByCodeResponseAmino;
                fromAminoMsg(object: _97.QueryContractsByCodeResponseAminoMsg): _97.QueryContractsByCodeResponse;
                toAminoMsg(message: _97.QueryContractsByCodeResponse): _97.QueryContractsByCodeResponseAminoMsg;
                fromProtoMsg(message: _97.QueryContractsByCodeResponseProtoMsg): _97.QueryContractsByCodeResponse;
                toProto(message: _97.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _97.QueryContractsByCodeResponse): _97.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _97.QueryAllContractStateRequest;
                isSDK(o: any): o is _97.QueryAllContractStateRequestSDKType;
                isAmino(o: any): o is _97.QueryAllContractStateRequestAmino;
                encode(message: _97.QueryAllContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryAllContractStateRequest;
                fromJSON(object: any): _97.QueryAllContractStateRequest;
                toJSON(message: _97.QueryAllContractStateRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _97.QueryAllContractStateRequest;
                fromSDK(object: _97.QueryAllContractStateRequestSDKType): _97.QueryAllContractStateRequest;
                toSDK(message: _97.QueryAllContractStateRequest): _97.QueryAllContractStateRequestSDKType;
                fromAmino(object: _97.QueryAllContractStateRequestAmino): _97.QueryAllContractStateRequest;
                toAmino(message: _97.QueryAllContractStateRequest): _97.QueryAllContractStateRequestAmino;
                fromAminoMsg(object: _97.QueryAllContractStateRequestAminoMsg): _97.QueryAllContractStateRequest;
                toAminoMsg(message: _97.QueryAllContractStateRequest): _97.QueryAllContractStateRequestAminoMsg;
                fromProtoMsg(message: _97.QueryAllContractStateRequestProtoMsg): _97.QueryAllContractStateRequest;
                toProto(message: _97.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _97.QueryAllContractStateRequest): _97.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _97.QueryAllContractStateResponse;
                isSDK(o: any): o is _97.QueryAllContractStateResponseSDKType;
                isAmino(o: any): o is _97.QueryAllContractStateResponseAmino;
                encode(message: _97.QueryAllContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryAllContractStateResponse;
                fromJSON(object: any): _97.QueryAllContractStateResponse;
                toJSON(message: _97.QueryAllContractStateResponse): unknown;
                fromPartial(object: {
                    models?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _97.QueryAllContractStateResponse;
                fromSDK(object: _97.QueryAllContractStateResponseSDKType): _97.QueryAllContractStateResponse;
                toSDK(message: _97.QueryAllContractStateResponse): _97.QueryAllContractStateResponseSDKType;
                fromAmino(object: _97.QueryAllContractStateResponseAmino): _97.QueryAllContractStateResponse;
                toAmino(message: _97.QueryAllContractStateResponse): _97.QueryAllContractStateResponseAmino;
                fromAminoMsg(object: _97.QueryAllContractStateResponseAminoMsg): _97.QueryAllContractStateResponse;
                toAminoMsg(message: _97.QueryAllContractStateResponse): _97.QueryAllContractStateResponseAminoMsg;
                fromProtoMsg(message: _97.QueryAllContractStateResponseProtoMsg): _97.QueryAllContractStateResponse;
                toProto(message: _97.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _97.QueryAllContractStateResponse): _97.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _97.QueryRawContractStateRequest;
                isSDK(o: any): o is _97.QueryRawContractStateRequestSDKType;
                isAmino(o: any): o is _97.QueryRawContractStateRequestAmino;
                encode(message: _97.QueryRawContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryRawContractStateRequest;
                fromJSON(object: any): _97.QueryRawContractStateRequest;
                toJSON(message: _97.QueryRawContractStateRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    queryData?: Uint8Array;
                }): _97.QueryRawContractStateRequest;
                fromSDK(object: _97.QueryRawContractStateRequestSDKType): _97.QueryRawContractStateRequest;
                toSDK(message: _97.QueryRawContractStateRequest): _97.QueryRawContractStateRequestSDKType;
                fromAmino(object: _97.QueryRawContractStateRequestAmino): _97.QueryRawContractStateRequest;
                toAmino(message: _97.QueryRawContractStateRequest): _97.QueryRawContractStateRequestAmino;
                fromAminoMsg(object: _97.QueryRawContractStateRequestAminoMsg): _97.QueryRawContractStateRequest;
                toAminoMsg(message: _97.QueryRawContractStateRequest): _97.QueryRawContractStateRequestAminoMsg;
                fromProtoMsg(message: _97.QueryRawContractStateRequestProtoMsg): _97.QueryRawContractStateRequest;
                toProto(message: _97.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _97.QueryRawContractStateRequest): _97.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _97.QueryRawContractStateResponse;
                isSDK(o: any): o is _97.QueryRawContractStateResponseSDKType;
                isAmino(o: any): o is _97.QueryRawContractStateResponseAmino;
                encode(message: _97.QueryRawContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryRawContractStateResponse;
                fromJSON(object: any): _97.QueryRawContractStateResponse;
                toJSON(message: _97.QueryRawContractStateResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _97.QueryRawContractStateResponse;
                fromSDK(object: _97.QueryRawContractStateResponseSDKType): _97.QueryRawContractStateResponse;
                toSDK(message: _97.QueryRawContractStateResponse): _97.QueryRawContractStateResponseSDKType;
                fromAmino(object: _97.QueryRawContractStateResponseAmino): _97.QueryRawContractStateResponse;
                toAmino(message: _97.QueryRawContractStateResponse): _97.QueryRawContractStateResponseAmino;
                fromAminoMsg(object: _97.QueryRawContractStateResponseAminoMsg): _97.QueryRawContractStateResponse;
                toAminoMsg(message: _97.QueryRawContractStateResponse): _97.QueryRawContractStateResponseAminoMsg;
                fromProtoMsg(message: _97.QueryRawContractStateResponseProtoMsg): _97.QueryRawContractStateResponse;
                toProto(message: _97.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _97.QueryRawContractStateResponse): _97.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _97.QuerySmartContractStateRequest;
                isSDK(o: any): o is _97.QuerySmartContractStateRequestSDKType;
                isAmino(o: any): o is _97.QuerySmartContractStateRequestAmino;
                encode(message: _97.QuerySmartContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QuerySmartContractStateRequest;
                fromJSON(object: any): _97.QuerySmartContractStateRequest;
                toJSON(message: _97.QuerySmartContractStateRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    queryData?: Uint8Array;
                }): _97.QuerySmartContractStateRequest;
                fromSDK(object: _97.QuerySmartContractStateRequestSDKType): _97.QuerySmartContractStateRequest;
                toSDK(message: _97.QuerySmartContractStateRequest): _97.QuerySmartContractStateRequestSDKType;
                fromAmino(object: _97.QuerySmartContractStateRequestAmino): _97.QuerySmartContractStateRequest;
                toAmino(message: _97.QuerySmartContractStateRequest): _97.QuerySmartContractStateRequestAmino;
                fromAminoMsg(object: _97.QuerySmartContractStateRequestAminoMsg): _97.QuerySmartContractStateRequest;
                toAminoMsg(message: _97.QuerySmartContractStateRequest): _97.QuerySmartContractStateRequestAminoMsg;
                fromProtoMsg(message: _97.QuerySmartContractStateRequestProtoMsg): _97.QuerySmartContractStateRequest;
                toProto(message: _97.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _97.QuerySmartContractStateRequest): _97.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _97.QuerySmartContractStateResponse;
                isSDK(o: any): o is _97.QuerySmartContractStateResponseSDKType;
                isAmino(o: any): o is _97.QuerySmartContractStateResponseAmino;
                encode(message: _97.QuerySmartContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QuerySmartContractStateResponse;
                fromJSON(object: any): _97.QuerySmartContractStateResponse;
                toJSON(message: _97.QuerySmartContractStateResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _97.QuerySmartContractStateResponse;
                fromSDK(object: _97.QuerySmartContractStateResponseSDKType): _97.QuerySmartContractStateResponse;
                toSDK(message: _97.QuerySmartContractStateResponse): _97.QuerySmartContractStateResponseSDKType;
                fromAmino(object: _97.QuerySmartContractStateResponseAmino): _97.QuerySmartContractStateResponse;
                toAmino(message: _97.QuerySmartContractStateResponse): _97.QuerySmartContractStateResponseAmino;
                fromAminoMsg(object: _97.QuerySmartContractStateResponseAminoMsg): _97.QuerySmartContractStateResponse;
                toAminoMsg(message: _97.QuerySmartContractStateResponse): _97.QuerySmartContractStateResponseAminoMsg;
                fromProtoMsg(message: _97.QuerySmartContractStateResponseProtoMsg): _97.QuerySmartContractStateResponse;
                toProto(message: _97.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _97.QuerySmartContractStateResponse): _97.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _97.QueryCodeRequest;
                isSDK(o: any): o is _97.QueryCodeRequestSDKType;
                isAmino(o: any): o is _97.QueryCodeRequestAmino;
                encode(message: _97.QueryCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryCodeRequest;
                fromJSON(object: any): _97.QueryCodeRequest;
                toJSON(message: _97.QueryCodeRequest): unknown;
                fromPartial(object: {
                    codeId?: bigint;
                }): _97.QueryCodeRequest;
                fromSDK(object: _97.QueryCodeRequestSDKType): _97.QueryCodeRequest;
                toSDK(message: _97.QueryCodeRequest): _97.QueryCodeRequestSDKType;
                fromAmino(object: _97.QueryCodeRequestAmino): _97.QueryCodeRequest;
                toAmino(message: _97.QueryCodeRequest): _97.QueryCodeRequestAmino;
                fromAminoMsg(object: _97.QueryCodeRequestAminoMsg): _97.QueryCodeRequest;
                toAminoMsg(message: _97.QueryCodeRequest): _97.QueryCodeRequestAminoMsg;
                fromProtoMsg(message: _97.QueryCodeRequestProtoMsg): _97.QueryCodeRequest;
                toProto(message: _97.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _97.QueryCodeRequest): _97.QueryCodeRequestProtoMsg;
            };
            CodeInfoResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _97.CodeInfoResponse;
                isSDK(o: any): o is _97.CodeInfoResponseSDKType;
                isAmino(o: any): o is _97.CodeInfoResponseAmino;
                encode(message: _97.CodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.CodeInfoResponse;
                fromJSON(object: any): _97.CodeInfoResponse;
                toJSON(message: _97.CodeInfoResponse): unknown;
                fromPartial(object: {
                    codeId?: bigint;
                    creator?: string;
                    dataHash?: Uint8Array;
                }): _97.CodeInfoResponse;
                fromSDK(object: _97.CodeInfoResponseSDKType): _97.CodeInfoResponse;
                toSDK(message: _97.CodeInfoResponse): _97.CodeInfoResponseSDKType;
                fromAmino(object: _97.CodeInfoResponseAmino): _97.CodeInfoResponse;
                toAmino(message: _97.CodeInfoResponse): _97.CodeInfoResponseAmino;
                fromAminoMsg(object: _97.CodeInfoResponseAminoMsg): _97.CodeInfoResponse;
                toAminoMsg(message: _97.CodeInfoResponse): _97.CodeInfoResponseAminoMsg;
                fromProtoMsg(message: _97.CodeInfoResponseProtoMsg): _97.CodeInfoResponse;
                toProto(message: _97.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _97.CodeInfoResponse): _97.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _97.QueryCodeResponse;
                isSDK(o: any): o is _97.QueryCodeResponseSDKType;
                isAmino(o: any): o is _97.QueryCodeResponseAmino;
                encode(message: _97.QueryCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryCodeResponse;
                fromJSON(object: any): _97.QueryCodeResponse;
                toJSON(message: _97.QueryCodeResponse): unknown;
                fromPartial(object: {
                    codeInfo?: {
                        codeId?: bigint;
                        creator?: string;
                        dataHash?: Uint8Array;
                    };
                    data?: Uint8Array;
                }): _97.QueryCodeResponse;
                fromSDK(object: _97.QueryCodeResponseSDKType): _97.QueryCodeResponse;
                toSDK(message: _97.QueryCodeResponse): _97.QueryCodeResponseSDKType;
                fromAmino(object: _97.QueryCodeResponseAmino): _97.QueryCodeResponse;
                toAmino(message: _97.QueryCodeResponse): _97.QueryCodeResponseAmino;
                fromAminoMsg(object: _97.QueryCodeResponseAminoMsg): _97.QueryCodeResponse;
                toAminoMsg(message: _97.QueryCodeResponse): _97.QueryCodeResponseAminoMsg;
                fromProtoMsg(message: _97.QueryCodeResponseProtoMsg): _97.QueryCodeResponse;
                toProto(message: _97.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _97.QueryCodeResponse): _97.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _97.QueryCodesRequest;
                isSDK(o: any): o is _97.QueryCodesRequestSDKType;
                isAmino(o: any): o is _97.QueryCodesRequestAmino;
                encode(message: _97.QueryCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryCodesRequest;
                fromJSON(object: any): _97.QueryCodesRequest;
                toJSON(message: _97.QueryCodesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _97.QueryCodesRequest;
                fromSDK(object: _97.QueryCodesRequestSDKType): _97.QueryCodesRequest;
                toSDK(message: _97.QueryCodesRequest): _97.QueryCodesRequestSDKType;
                fromAmino(object: _97.QueryCodesRequestAmino): _97.QueryCodesRequest;
                toAmino(message: _97.QueryCodesRequest): _97.QueryCodesRequestAmino;
                fromAminoMsg(object: _97.QueryCodesRequestAminoMsg): _97.QueryCodesRequest;
                toAminoMsg(message: _97.QueryCodesRequest): _97.QueryCodesRequestAminoMsg;
                fromProtoMsg(message: _97.QueryCodesRequestProtoMsg): _97.QueryCodesRequest;
                toProto(message: _97.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _97.QueryCodesRequest): _97.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _97.QueryCodesResponse;
                isSDK(o: any): o is _97.QueryCodesResponseSDKType;
                isAmino(o: any): o is _97.QueryCodesResponseAmino;
                encode(message: _97.QueryCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryCodesResponse;
                fromJSON(object: any): _97.QueryCodesResponse;
                toJSON(message: _97.QueryCodesResponse): unknown;
                fromPartial(object: {
                    codeInfos?: {
                        codeId?: bigint;
                        creator?: string;
                        dataHash?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _97.QueryCodesResponse;
                fromSDK(object: _97.QueryCodesResponseSDKType): _97.QueryCodesResponse;
                toSDK(message: _97.QueryCodesResponse): _97.QueryCodesResponseSDKType;
                fromAmino(object: _97.QueryCodesResponseAmino): _97.QueryCodesResponse;
                toAmino(message: _97.QueryCodesResponse): _97.QueryCodesResponseAmino;
                fromAminoMsg(object: _97.QueryCodesResponseAminoMsg): _97.QueryCodesResponse;
                toAminoMsg(message: _97.QueryCodesResponse): _97.QueryCodesResponseAminoMsg;
                fromProtoMsg(message: _97.QueryCodesResponseProtoMsg): _97.QueryCodesResponse;
                toProto(message: _97.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _97.QueryCodesResponse): _97.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _97.QueryPinnedCodesRequest;
                isSDK(o: any): o is _97.QueryPinnedCodesRequestSDKType;
                isAmino(o: any): o is _97.QueryPinnedCodesRequestAmino;
                encode(message: _97.QueryPinnedCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryPinnedCodesRequest;
                fromJSON(object: any): _97.QueryPinnedCodesRequest;
                toJSON(message: _97.QueryPinnedCodesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _97.QueryPinnedCodesRequest;
                fromSDK(object: _97.QueryPinnedCodesRequestSDKType): _97.QueryPinnedCodesRequest;
                toSDK(message: _97.QueryPinnedCodesRequest): _97.QueryPinnedCodesRequestSDKType;
                fromAmino(object: _97.QueryPinnedCodesRequestAmino): _97.QueryPinnedCodesRequest;
                toAmino(message: _97.QueryPinnedCodesRequest): _97.QueryPinnedCodesRequestAmino;
                fromAminoMsg(object: _97.QueryPinnedCodesRequestAminoMsg): _97.QueryPinnedCodesRequest;
                toAminoMsg(message: _97.QueryPinnedCodesRequest): _97.QueryPinnedCodesRequestAminoMsg;
                fromProtoMsg(message: _97.QueryPinnedCodesRequestProtoMsg): _97.QueryPinnedCodesRequest;
                toProto(message: _97.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _97.QueryPinnedCodesRequest): _97.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _97.QueryPinnedCodesResponse;
                isSDK(o: any): o is _97.QueryPinnedCodesResponseSDKType;
                isAmino(o: any): o is _97.QueryPinnedCodesResponseAmino;
                encode(message: _97.QueryPinnedCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryPinnedCodesResponse;
                fromJSON(object: any): _97.QueryPinnedCodesResponse;
                toJSON(message: _97.QueryPinnedCodesResponse): unknown;
                fromPartial(object: {
                    codeIds?: bigint[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _97.QueryPinnedCodesResponse;
                fromSDK(object: _97.QueryPinnedCodesResponseSDKType): _97.QueryPinnedCodesResponse;
                toSDK(message: _97.QueryPinnedCodesResponse): _97.QueryPinnedCodesResponseSDKType;
                fromAmino(object: _97.QueryPinnedCodesResponseAmino): _97.QueryPinnedCodesResponse;
                toAmino(message: _97.QueryPinnedCodesResponse): _97.QueryPinnedCodesResponseAmino;
                fromAminoMsg(object: _97.QueryPinnedCodesResponseAminoMsg): _97.QueryPinnedCodesResponse;
                toAminoMsg(message: _97.QueryPinnedCodesResponse): _97.QueryPinnedCodesResponseAminoMsg;
                fromProtoMsg(message: _97.QueryPinnedCodesResponseProtoMsg): _97.QueryPinnedCodesResponse;
                toProto(message: _97.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _97.QueryPinnedCodesResponse): _97.QueryPinnedCodesResponseProtoMsg;
            };
            StoreCodeProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _96.StoreCodeProposal;
                isSDK(o: any): o is _96.StoreCodeProposalSDKType;
                isAmino(o: any): o is _96.StoreCodeProposalAmino;
                encode(message: _96.StoreCodeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.StoreCodeProposal;
                fromJSON(object: any): _96.StoreCodeProposal;
                toJSON(message: _96.StoreCodeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _99.AccessType;
                        address?: string;
                    };
                }): _96.StoreCodeProposal;
                fromSDK(object: _96.StoreCodeProposalSDKType): _96.StoreCodeProposal;
                toSDK(message: _96.StoreCodeProposal): _96.StoreCodeProposalSDKType;
                fromAmino(object: _96.StoreCodeProposalAmino): _96.StoreCodeProposal;
                toAmino(message: _96.StoreCodeProposal): _96.StoreCodeProposalAmino;
                fromAminoMsg(object: _96.StoreCodeProposalAminoMsg): _96.StoreCodeProposal;
                toAminoMsg(message: _96.StoreCodeProposal): _96.StoreCodeProposalAminoMsg;
                fromProtoMsg(message: _96.StoreCodeProposalProtoMsg): _96.StoreCodeProposal;
                toProto(message: _96.StoreCodeProposal): Uint8Array;
                toProtoMsg(message: _96.StoreCodeProposal): _96.StoreCodeProposalProtoMsg;
            };
            InstantiateContractProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _96.InstantiateContractProposal;
                isSDK(o: any): o is _96.InstantiateContractProposalSDKType;
                isAmino(o: any): o is _96.InstantiateContractProposalAmino;
                encode(message: _96.InstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.InstantiateContractProposal;
                fromJSON(object: any): _96.InstantiateContractProposal;
                toJSON(message: _96.InstantiateContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    admin?: string;
                    codeId?: bigint;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _96.InstantiateContractProposal;
                fromSDK(object: _96.InstantiateContractProposalSDKType): _96.InstantiateContractProposal;
                toSDK(message: _96.InstantiateContractProposal): _96.InstantiateContractProposalSDKType;
                fromAmino(object: _96.InstantiateContractProposalAmino): _96.InstantiateContractProposal;
                toAmino(message: _96.InstantiateContractProposal): _96.InstantiateContractProposalAmino;
                fromAminoMsg(object: _96.InstantiateContractProposalAminoMsg): _96.InstantiateContractProposal;
                toAminoMsg(message: _96.InstantiateContractProposal): _96.InstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _96.InstantiateContractProposalProtoMsg): _96.InstantiateContractProposal;
                toProto(message: _96.InstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _96.InstantiateContractProposal): _96.InstantiateContractProposalProtoMsg;
            };
            MigrateContractProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _96.MigrateContractProposal;
                isSDK(o: any): o is _96.MigrateContractProposalSDKType;
                isAmino(o: any): o is _96.MigrateContractProposalAmino;
                encode(message: _96.MigrateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.MigrateContractProposal;
                fromJSON(object: any): _96.MigrateContractProposal;
                toJSON(message: _96.MigrateContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    codeId?: bigint;
                    msg?: Uint8Array;
                }): _96.MigrateContractProposal;
                fromSDK(object: _96.MigrateContractProposalSDKType): _96.MigrateContractProposal;
                toSDK(message: _96.MigrateContractProposal): _96.MigrateContractProposalSDKType;
                fromAmino(object: _96.MigrateContractProposalAmino): _96.MigrateContractProposal;
                toAmino(message: _96.MigrateContractProposal): _96.MigrateContractProposalAmino;
                fromAminoMsg(object: _96.MigrateContractProposalAminoMsg): _96.MigrateContractProposal;
                toAminoMsg(message: _96.MigrateContractProposal): _96.MigrateContractProposalAminoMsg;
                fromProtoMsg(message: _96.MigrateContractProposalProtoMsg): _96.MigrateContractProposal;
                toProto(message: _96.MigrateContractProposal): Uint8Array;
                toProtoMsg(message: _96.MigrateContractProposal): _96.MigrateContractProposalProtoMsg;
            };
            SudoContractProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _96.SudoContractProposal;
                isSDK(o: any): o is _96.SudoContractProposalSDKType;
                isAmino(o: any): o is _96.SudoContractProposalAmino;
                encode(message: _96.SudoContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.SudoContractProposal;
                fromJSON(object: any): _96.SudoContractProposal;
                toJSON(message: _96.SudoContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    msg?: Uint8Array;
                }): _96.SudoContractProposal;
                fromSDK(object: _96.SudoContractProposalSDKType): _96.SudoContractProposal;
                toSDK(message: _96.SudoContractProposal): _96.SudoContractProposalSDKType;
                fromAmino(object: _96.SudoContractProposalAmino): _96.SudoContractProposal;
                toAmino(message: _96.SudoContractProposal): _96.SudoContractProposalAmino;
                fromAminoMsg(object: _96.SudoContractProposalAminoMsg): _96.SudoContractProposal;
                toAminoMsg(message: _96.SudoContractProposal): _96.SudoContractProposalAminoMsg;
                fromProtoMsg(message: _96.SudoContractProposalProtoMsg): _96.SudoContractProposal;
                toProto(message: _96.SudoContractProposal): Uint8Array;
                toProtoMsg(message: _96.SudoContractProposal): _96.SudoContractProposalProtoMsg;
            };
            ExecuteContractProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _96.ExecuteContractProposal;
                isSDK(o: any): o is _96.ExecuteContractProposalSDKType;
                isAmino(o: any): o is _96.ExecuteContractProposalAmino;
                encode(message: _96.ExecuteContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.ExecuteContractProposal;
                fromJSON(object: any): _96.ExecuteContractProposal;
                toJSON(message: _96.ExecuteContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _96.ExecuteContractProposal;
                fromSDK(object: _96.ExecuteContractProposalSDKType): _96.ExecuteContractProposal;
                toSDK(message: _96.ExecuteContractProposal): _96.ExecuteContractProposalSDKType;
                fromAmino(object: _96.ExecuteContractProposalAmino): _96.ExecuteContractProposal;
                toAmino(message: _96.ExecuteContractProposal): _96.ExecuteContractProposalAmino;
                fromAminoMsg(object: _96.ExecuteContractProposalAminoMsg): _96.ExecuteContractProposal;
                toAminoMsg(message: _96.ExecuteContractProposal): _96.ExecuteContractProposalAminoMsg;
                fromProtoMsg(message: _96.ExecuteContractProposalProtoMsg): _96.ExecuteContractProposal;
                toProto(message: _96.ExecuteContractProposal): Uint8Array;
                toProtoMsg(message: _96.ExecuteContractProposal): _96.ExecuteContractProposalProtoMsg;
            };
            UpdateAdminProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _96.UpdateAdminProposal;
                isSDK(o: any): o is _96.UpdateAdminProposalSDKType;
                isAmino(o: any): o is _96.UpdateAdminProposalAmino;
                encode(message: _96.UpdateAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.UpdateAdminProposal;
                fromJSON(object: any): _96.UpdateAdminProposal;
                toJSON(message: _96.UpdateAdminProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    newAdmin?: string;
                    contract?: string;
                }): _96.UpdateAdminProposal;
                fromSDK(object: _96.UpdateAdminProposalSDKType): _96.UpdateAdminProposal;
                toSDK(message: _96.UpdateAdminProposal): _96.UpdateAdminProposalSDKType;
                fromAmino(object: _96.UpdateAdminProposalAmino): _96.UpdateAdminProposal;
                toAmino(message: _96.UpdateAdminProposal): _96.UpdateAdminProposalAmino;
                fromAminoMsg(object: _96.UpdateAdminProposalAminoMsg): _96.UpdateAdminProposal;
                toAminoMsg(message: _96.UpdateAdminProposal): _96.UpdateAdminProposalAminoMsg;
                fromProtoMsg(message: _96.UpdateAdminProposalProtoMsg): _96.UpdateAdminProposal;
                toProto(message: _96.UpdateAdminProposal): Uint8Array;
                toProtoMsg(message: _96.UpdateAdminProposal): _96.UpdateAdminProposalProtoMsg;
            };
            ClearAdminProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _96.ClearAdminProposal;
                isSDK(o: any): o is _96.ClearAdminProposalSDKType;
                isAmino(o: any): o is _96.ClearAdminProposalAmino;
                encode(message: _96.ClearAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.ClearAdminProposal;
                fromJSON(object: any): _96.ClearAdminProposal;
                toJSON(message: _96.ClearAdminProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                }): _96.ClearAdminProposal;
                fromSDK(object: _96.ClearAdminProposalSDKType): _96.ClearAdminProposal;
                toSDK(message: _96.ClearAdminProposal): _96.ClearAdminProposalSDKType;
                fromAmino(object: _96.ClearAdminProposalAmino): _96.ClearAdminProposal;
                toAmino(message: _96.ClearAdminProposal): _96.ClearAdminProposalAmino;
                fromAminoMsg(object: _96.ClearAdminProposalAminoMsg): _96.ClearAdminProposal;
                toAminoMsg(message: _96.ClearAdminProposal): _96.ClearAdminProposalAminoMsg;
                fromProtoMsg(message: _96.ClearAdminProposalProtoMsg): _96.ClearAdminProposal;
                toProto(message: _96.ClearAdminProposal): Uint8Array;
                toProtoMsg(message: _96.ClearAdminProposal): _96.ClearAdminProposalProtoMsg;
            };
            PinCodesProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _96.PinCodesProposal;
                isSDK(o: any): o is _96.PinCodesProposalSDKType;
                isAmino(o: any): o is _96.PinCodesProposalAmino;
                encode(message: _96.PinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.PinCodesProposal;
                fromJSON(object: any): _96.PinCodesProposal;
                toJSON(message: _96.PinCodesProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    codeIds?: bigint[];
                }): _96.PinCodesProposal;
                fromSDK(object: _96.PinCodesProposalSDKType): _96.PinCodesProposal;
                toSDK(message: _96.PinCodesProposal): _96.PinCodesProposalSDKType;
                fromAmino(object: _96.PinCodesProposalAmino): _96.PinCodesProposal;
                toAmino(message: _96.PinCodesProposal): _96.PinCodesProposalAmino;
                fromAminoMsg(object: _96.PinCodesProposalAminoMsg): _96.PinCodesProposal;
                toAminoMsg(message: _96.PinCodesProposal): _96.PinCodesProposalAminoMsg;
                fromProtoMsg(message: _96.PinCodesProposalProtoMsg): _96.PinCodesProposal;
                toProto(message: _96.PinCodesProposal): Uint8Array;
                toProtoMsg(message: _96.PinCodesProposal): _96.PinCodesProposalProtoMsg;
            };
            UnpinCodesProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _96.UnpinCodesProposal;
                isSDK(o: any): o is _96.UnpinCodesProposalSDKType;
                isAmino(o: any): o is _96.UnpinCodesProposalAmino;
                encode(message: _96.UnpinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.UnpinCodesProposal;
                fromJSON(object: any): _96.UnpinCodesProposal;
                toJSON(message: _96.UnpinCodesProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    codeIds?: bigint[];
                }): _96.UnpinCodesProposal;
                fromSDK(object: _96.UnpinCodesProposalSDKType): _96.UnpinCodesProposal;
                toSDK(message: _96.UnpinCodesProposal): _96.UnpinCodesProposalSDKType;
                fromAmino(object: _96.UnpinCodesProposalAmino): _96.UnpinCodesProposal;
                toAmino(message: _96.UnpinCodesProposal): _96.UnpinCodesProposalAmino;
                fromAminoMsg(object: _96.UnpinCodesProposalAminoMsg): _96.UnpinCodesProposal;
                toAminoMsg(message: _96.UnpinCodesProposal): _96.UnpinCodesProposalAminoMsg;
                fromProtoMsg(message: _96.UnpinCodesProposalProtoMsg): _96.UnpinCodesProposal;
                toProto(message: _96.UnpinCodesProposal): Uint8Array;
                toProtoMsg(message: _96.UnpinCodesProposal): _96.UnpinCodesProposalProtoMsg;
            };
            MsgIBCSend: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _95.MsgIBCSend;
                isSDK(o: any): o is _95.MsgIBCSendSDKType;
                isAmino(o: any): o is _95.MsgIBCSendAmino;
                encode(message: _95.MsgIBCSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgIBCSend;
                fromJSON(object: any): _95.MsgIBCSend;
                toJSON(message: _95.MsgIBCSend): unknown;
                fromPartial(object: {
                    channel?: string;
                    timeoutHeight?: bigint;
                    timeoutTimestamp?: bigint;
                    data?: Uint8Array;
                }): _95.MsgIBCSend;
                fromSDK(object: _95.MsgIBCSendSDKType): _95.MsgIBCSend;
                toSDK(message: _95.MsgIBCSend): _95.MsgIBCSendSDKType;
                fromAmino(object: _95.MsgIBCSendAmino): _95.MsgIBCSend;
                toAmino(message: _95.MsgIBCSend): _95.MsgIBCSendAmino;
                fromAminoMsg(object: _95.MsgIBCSendAminoMsg): _95.MsgIBCSend;
                toAminoMsg(message: _95.MsgIBCSend): _95.MsgIBCSendAminoMsg;
                fromProtoMsg(message: _95.MsgIBCSendProtoMsg): _95.MsgIBCSend;
                toProto(message: _95.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _95.MsgIBCSend): _95.MsgIBCSendProtoMsg;
            };
            MsgIBCCloseChannel: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _95.MsgIBCCloseChannel;
                isSDK(o: any): o is _95.MsgIBCCloseChannelSDKType;
                isAmino(o: any): o is _95.MsgIBCCloseChannelAmino;
                encode(message: _95.MsgIBCCloseChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgIBCCloseChannel;
                fromJSON(object: any): _95.MsgIBCCloseChannel;
                toJSON(message: _95.MsgIBCCloseChannel): unknown;
                fromPartial(object: {
                    channel?: string;
                }): _95.MsgIBCCloseChannel;
                fromSDK(object: _95.MsgIBCCloseChannelSDKType): _95.MsgIBCCloseChannel;
                toSDK(message: _95.MsgIBCCloseChannel): _95.MsgIBCCloseChannelSDKType;
                fromAmino(object: _95.MsgIBCCloseChannelAmino): _95.MsgIBCCloseChannel;
                toAmino(message: _95.MsgIBCCloseChannel): _95.MsgIBCCloseChannelAmino;
                fromAminoMsg(object: _95.MsgIBCCloseChannelAminoMsg): _95.MsgIBCCloseChannel;
                toAminoMsg(message: _95.MsgIBCCloseChannel): _95.MsgIBCCloseChannelAminoMsg;
                fromProtoMsg(message: _95.MsgIBCCloseChannelProtoMsg): _95.MsgIBCCloseChannel;
                toProto(message: _95.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _95.MsgIBCCloseChannel): _95.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _94.GenesisState;
                isSDK(o: any): o is _94.GenesisStateSDKType;
                isAmino(o: any): o is _94.GenesisStateAmino;
                encode(message: _94.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.GenesisState;
                fromJSON(object: any): _94.GenesisState;
                toJSON(message: _94.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        codeUploadAccess?: {
                            permission?: _99.AccessType;
                            address?: string;
                        };
                        instantiateDefaultPermission?: _99.AccessType;
                        maxWasmCodeSize?: bigint;
                    };
                    codes?: {
                        codeId?: bigint;
                        codeInfo?: {
                            codeHash?: Uint8Array;
                            creator?: string;
                            instantiateConfig?: {
                                permission?: _99.AccessType;
                                address?: string;
                            };
                        };
                        codeBytes?: Uint8Array;
                        pinned?: boolean;
                    }[];
                    contracts?: {
                        contractAddress?: string;
                        contractInfo?: {
                            codeId?: bigint;
                            creator?: string;
                            admin?: string;
                            label?: string;
                            created?: {
                                blockHeight?: bigint;
                                txIndex?: bigint;
                            };
                            ibcPortId?: string;
                            extension?: {
                                $typeUrl?: "/google.protobuf.Any";
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        contractState?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }[];
                    sequences?: {
                        idKey?: Uint8Array;
                        value?: bigint;
                    }[];
                    genMsgs?: {
                        storeCode?: {
                            sender?: string;
                            wasmByteCode?: Uint8Array;
                            instantiatePermission?: {
                                permission?: _99.AccessType;
                                address?: string;
                            };
                        };
                        instantiateContract?: {
                            sender?: string;
                            admin?: string;
                            codeId?: bigint;
                            label?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                        executeContract?: {
                            sender?: string;
                            contract?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[];
                }): _94.GenesisState;
                fromSDK(object: _94.GenesisStateSDKType): _94.GenesisState;
                toSDK(message: _94.GenesisState): _94.GenesisStateSDKType;
                fromAmino(object: _94.GenesisStateAmino): _94.GenesisState;
                toAmino(message: _94.GenesisState): _94.GenesisStateAmino;
                fromAminoMsg(object: _94.GenesisStateAminoMsg): _94.GenesisState;
                toAminoMsg(message: _94.GenesisState): _94.GenesisStateAminoMsg;
                fromProtoMsg(message: _94.GenesisStateProtoMsg): _94.GenesisState;
                toProto(message: _94.GenesisState): Uint8Array;
                toProtoMsg(message: _94.GenesisState): _94.GenesisStateProtoMsg;
            };
            GenesisState_GenMsgs: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _94.GenesisState_GenMsgs;
                isSDK(o: any): o is _94.GenesisState_GenMsgsSDKType;
                isAmino(o: any): o is _94.GenesisState_GenMsgsAmino;
                encode(message: _94.GenesisState_GenMsgs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.GenesisState_GenMsgs;
                fromJSON(object: any): _94.GenesisState_GenMsgs;
                toJSON(message: _94.GenesisState_GenMsgs): unknown;
                fromPartial(object: {
                    storeCode?: {
                        sender?: string;
                        wasmByteCode?: Uint8Array;
                        instantiatePermission?: {
                            permission?: _99.AccessType;
                            address?: string;
                        };
                    };
                    instantiateContract?: {
                        sender?: string;
                        admin?: string;
                        codeId?: bigint;
                        label?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    executeContract?: {
                        sender?: string;
                        contract?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _94.GenesisState_GenMsgs;
                fromSDK(object: _94.GenesisState_GenMsgsSDKType): _94.GenesisState_GenMsgs;
                toSDK(message: _94.GenesisState_GenMsgs): _94.GenesisState_GenMsgsSDKType;
                fromAmino(object: _94.GenesisState_GenMsgsAmino): _94.GenesisState_GenMsgs;
                toAmino(message: _94.GenesisState_GenMsgs): _94.GenesisState_GenMsgsAmino;
                fromAminoMsg(object: _94.GenesisState_GenMsgsAminoMsg): _94.GenesisState_GenMsgs;
                toAminoMsg(message: _94.GenesisState_GenMsgs): _94.GenesisState_GenMsgsAminoMsg;
                fromProtoMsg(message: _94.GenesisState_GenMsgsProtoMsg): _94.GenesisState_GenMsgs;
                toProto(message: _94.GenesisState_GenMsgs): Uint8Array;
                toProtoMsg(message: _94.GenesisState_GenMsgs): _94.GenesisState_GenMsgsProtoMsg;
            };
            Code: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _94.Code;
                isSDK(o: any): o is _94.CodeSDKType;
                isAmino(o: any): o is _94.CodeAmino;
                encode(message: _94.Code, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.Code;
                fromJSON(object: any): _94.Code;
                toJSON(message: _94.Code): unknown;
                fromPartial(object: {
                    codeId?: bigint;
                    codeInfo?: {
                        codeHash?: Uint8Array;
                        creator?: string;
                        instantiateConfig?: {
                            permission?: _99.AccessType;
                            address?: string;
                        };
                    };
                    codeBytes?: Uint8Array;
                    pinned?: boolean;
                }): _94.Code;
                fromSDK(object: _94.CodeSDKType): _94.Code;
                toSDK(message: _94.Code): _94.CodeSDKType;
                fromAmino(object: _94.CodeAmino): _94.Code;
                toAmino(message: _94.Code): _94.CodeAmino;
                fromAminoMsg(object: _94.CodeAminoMsg): _94.Code;
                toAminoMsg(message: _94.Code): _94.CodeAminoMsg;
                fromProtoMsg(message: _94.CodeProtoMsg): _94.Code;
                toProto(message: _94.Code): Uint8Array;
                toProtoMsg(message: _94.Code): _94.CodeProtoMsg;
            };
            Contract: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _94.Contract;
                isSDK(o: any): o is _94.ContractSDKType;
                isAmino(o: any): o is _94.ContractAmino;
                encode(message: _94.Contract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.Contract;
                fromJSON(object: any): _94.Contract;
                toJSON(message: _94.Contract): unknown;
                fromPartial(object: {
                    contractAddress?: string;
                    contractInfo?: {
                        codeId?: bigint;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            blockHeight?: bigint;
                            txIndex?: bigint;
                        };
                        ibcPortId?: string;
                        extension?: {
                            $typeUrl?: "/google.protobuf.Any";
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                    contractState?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                }): _94.Contract;
                fromSDK(object: _94.ContractSDKType): _94.Contract;
                toSDK(message: _94.Contract): _94.ContractSDKType;
                fromAmino(object: _94.ContractAmino): _94.Contract;
                toAmino(message: _94.Contract): _94.ContractAmino;
                fromAminoMsg(object: _94.ContractAminoMsg): _94.Contract;
                toAminoMsg(message: _94.Contract): _94.ContractAminoMsg;
                fromProtoMsg(message: _94.ContractProtoMsg): _94.Contract;
                toProto(message: _94.Contract): Uint8Array;
                toProtoMsg(message: _94.Contract): _94.ContractProtoMsg;
            };
            Sequence: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _94.Sequence;
                isSDK(o: any): o is _94.SequenceSDKType;
                isAmino(o: any): o is _94.SequenceAmino;
                encode(message: _94.Sequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.Sequence;
                fromJSON(object: any): _94.Sequence;
                toJSON(message: _94.Sequence): unknown;
                fromPartial(object: {
                    idKey?: Uint8Array;
                    value?: bigint;
                }): _94.Sequence;
                fromSDK(object: _94.SequenceSDKType): _94.Sequence;
                toSDK(message: _94.Sequence): _94.SequenceSDKType;
                fromAmino(object: _94.SequenceAmino): _94.Sequence;
                toAmino(message: _94.Sequence): _94.SequenceAmino;
                fromAminoMsg(object: _94.SequenceAminoMsg): _94.Sequence;
                toAminoMsg(message: _94.Sequence): _94.SequenceAminoMsg;
                fromProtoMsg(message: _94.SequenceProtoMsg): _94.Sequence;
                toProto(message: _94.Sequence): Uint8Array;
                toProtoMsg(message: _94.Sequence): _94.SequenceProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            cosmwasm: {
                wasm: {
                    v1: _253.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: import("../cosmos/app/v1alpha1/query.rpc.Query").QueryClientImpl;
                };
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                base: {
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.rpc.Service").ServiceClientImpl;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.rpc.Query").QueryClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.rpc.Query").QueryClientImpl;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.rpc.Service").ServiceClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.rpc.Query").QueryClientImpl;
                };
            };
            cosmwasm: {
                wasm: {
                    v1: _252.QueryClientImpl;
                };
            };
        }>;
    };
}
