//@ts-nocheck
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Params, ParamsSDKType, BaseAccount, BaseAccountSDKType, ModuleAccount, ModuleAccountSDKType } from "./auth";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryAccountsRequest, QueryAccountsRequestSDKType, QueryAccountsResponse, QueryAccountsResponseSDKType, QueryAccountRequest, QueryAccountRequestSDKType, QueryAccountResponse, QueryAccountResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryModuleAccountsRequest, QueryModuleAccountsRequestSDKType, QueryModuleAccountsResponse, QueryModuleAccountsResponseSDKType, Bech32PrefixRequest, Bech32PrefixRequestSDKType, Bech32PrefixResponse, Bech32PrefixResponseSDKType, AddressBytesToStringRequest, AddressBytesToStringRequestSDKType, AddressBytesToStringResponse, AddressBytesToStringResponseSDKType, AddressStringToBytesRequest, AddressStringToBytesRequestSDKType, AddressStringToBytesResponse, AddressStringToBytesResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Accounts returns all the existing accounts
  
   Since: cosmos-sdk 0.43 */
  accounts = async (params: QueryAccountsRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<QueryAccountsResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/auth/v1beta1/accounts`;
    return await this.req.get<QueryAccountsResponseSDKType>(endpoint, options);
  };
  /* Account returns account details based on address. */
  account = async (params: QueryAccountRequest): Promise<QueryAccountResponseSDKType> => {
    const endpoint = `cosmos/auth/v1beta1/accounts/${params.address}`;
    return await this.req.get<QueryAccountResponseSDKType>(endpoint);
  };
  /* Params queries all parameters. */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> => {
    const endpoint = `cosmos/auth/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  };
  /* ModuleAccounts returns all the existing module accounts. */
  moduleAccounts = async (_params: QueryModuleAccountsRequest = {}): Promise<QueryModuleAccountsResponseSDKType> => {
    const endpoint = `cosmos/auth/v1beta1/module_accounts`;
    return await this.req.get<QueryModuleAccountsResponseSDKType>(endpoint);
  };
  /* Bech32 queries bech32Prefix */
  bech32Prefix = async (_params: Bech32PrefixRequest = {}): Promise<Bech32PrefixResponseSDKType> => {
    const endpoint = `cosmos/auth/v1beta1/bech32`;
    return await this.req.get<Bech32PrefixResponseSDKType>(endpoint);
  };
  /* AddressBytesToString converts Account Address bytes to string */
  addressBytesToString = async (params: AddressBytesToStringRequest): Promise<AddressBytesToStringResponseSDKType> => {
    const endpoint = `cosmos/auth/v1beta1/bech32/${params.addressBytes}`;
    return await this.req.get<AddressBytesToStringResponseSDKType>(endpoint);
  };
  /* AddressStringToBytes converts Address string to bytes */
  addressStringToBytes = async (params: AddressStringToBytesRequest): Promise<AddressStringToBytesResponseSDKType> => {
    const endpoint = `cosmos/auth/v1beta1/bech32/${params.addressString}`;
    return await this.req.get<AddressStringToBytesResponseSDKType>(endpoint);
  };
}