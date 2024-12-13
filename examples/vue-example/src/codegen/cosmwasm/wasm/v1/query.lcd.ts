import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { ContractInfo, ContractInfoSDKType, ContractCodeHistoryEntry, ContractCodeHistoryEntrySDKType, Model, ModelSDKType } from "./types";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryContractInfoRequest, QueryContractInfoRequestSDKType, QueryContractInfoResponse, QueryContractInfoResponseSDKType, QueryContractHistoryRequest, QueryContractHistoryRequestSDKType, QueryContractHistoryResponse, QueryContractHistoryResponseSDKType, QueryContractsByCodeRequest, QueryContractsByCodeRequestSDKType, QueryContractsByCodeResponse, QueryContractsByCodeResponseSDKType, QueryAllContractStateRequest, QueryAllContractStateRequestSDKType, QueryAllContractStateResponse, QueryAllContractStateResponseSDKType, QueryRawContractStateRequest, QueryRawContractStateRequestSDKType, QueryRawContractStateResponse, QueryRawContractStateResponseSDKType, QuerySmartContractStateRequest, QuerySmartContractStateRequestSDKType, QuerySmartContractStateResponse, QuerySmartContractStateResponseSDKType, QueryCodeRequest, QueryCodeRequestSDKType, QueryCodeResponse, QueryCodeResponseSDKType, QueryCodesRequest, QueryCodesRequestSDKType, QueryCodesResponse, QueryCodesResponseSDKType, QueryPinnedCodesRequest, QueryPinnedCodesRequestSDKType, QueryPinnedCodesResponse, QueryPinnedCodesResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.contractInfo = this.contractInfo.bind(this);
    this.contractHistory = this.contractHistory.bind(this);
    this.contractsByCode = this.contractsByCode.bind(this);
    this.allContractState = this.allContractState.bind(this);
    this.rawContractState = this.rawContractState.bind(this);
    this.smartContractState = this.smartContractState.bind(this);
    this.code = this.code.bind(this);
    this.codes = this.codes.bind(this);
    this.pinnedCodes = this.pinnedCodes.bind(this);
  }
  /* ContractInfo gets the contract meta data */
  async contractInfo(params: QueryContractInfoRequest): Promise<QueryContractInfoResponseSDKType> {
    const endpoint = `cosmwasm/wasm/v1/contract/${params.address}`;
    return QueryContractInfoResponse.fromSDKJSON(await this.req.get<QueryContractInfoResponseSDKType>(endpoint));
  }
  /* ContractHistory gets the contract code history */
  async contractHistory(params: QueryContractHistoryRequest): Promise<QueryContractHistoryResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmwasm/wasm/v1/contract/${params.address}/history`;
    return QueryContractHistoryResponse.fromSDKJSON(await this.req.get<QueryContractHistoryResponseSDKType>(endpoint, options));
  }
  /* ContractsByCode lists all smart contracts for a code id */
  async contractsByCode(params: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmwasm/wasm/v1/code/${params.codeId}/contracts`;
    return QueryContractsByCodeResponse.fromSDKJSON(await this.req.get<QueryContractsByCodeResponseSDKType>(endpoint, options));
  }
  /* AllContractState gets all raw store data for a single contract */
  async allContractState(params: QueryAllContractStateRequest): Promise<QueryAllContractStateResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmwasm/wasm/v1/contract/${params.address}/state`;
    return QueryAllContractStateResponse.fromSDKJSON(await this.req.get<QueryAllContractStateResponseSDKType>(endpoint, options));
  }
  /* RawContractState gets single key from the raw store data of a contract */
  async rawContractState(params: QueryRawContractStateRequest): Promise<QueryRawContractStateResponseSDKType> {
    const endpoint = `wasm/v1/contract/${params.address}/raw/${params.queryData}`;
    return QueryRawContractStateResponse.fromSDKJSON(await this.req.get<QueryRawContractStateResponseSDKType>(endpoint));
  }
  /* SmartContractState get smart query result from the contract */
  async smartContractState(params: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponseSDKType> {
    const endpoint = `wasm/v1/contract/${params.address}/smart/${params.queryData}`;
    return QuerySmartContractStateResponse.fromSDKJSON(await this.req.get<QuerySmartContractStateResponseSDKType>(endpoint));
  }
  /* Code gets the binary code and metadata for a singe wasm code */
  async code(params: QueryCodeRequest): Promise<QueryCodeResponseSDKType> {
    const endpoint = `cosmwasm/wasm/v1/code/${params.codeId}`;
    return QueryCodeResponse.fromSDKJSON(await this.req.get<QueryCodeResponseSDKType>(endpoint));
  }
  /* Codes gets the metadata for all stored wasm codes */
  async codes(params: QueryCodesRequest = {
    pagination: undefined
  }): Promise<QueryCodesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmwasm/wasm/v1/code`;
    return QueryCodesResponse.fromSDKJSON(await this.req.get<QueryCodesResponseSDKType>(endpoint, options));
  }
  /* PinnedCodes gets the pinned code ids */
  async pinnedCodes(params: QueryPinnedCodesRequest = {
    pagination: undefined
  }): Promise<QueryPinnedCodesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmwasm/wasm/v1/codes/pinned`;
    return QueryPinnedCodesResponse.fromSDKJSON(await this.req.get<QueryPinnedCodesResponseSDKType>(endpoint, options));
  }
}