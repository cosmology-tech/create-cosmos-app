import { ValidatorPreference, ValidatorPreferenceSDKType } from "./state";
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { UserValidatorPreferencesRequest, UserValidatorPreferencesRequestSDKType, UserValidatorPreferencesResponse, UserValidatorPreferencesResponseSDKType } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Returns the list of ValidatorPreferences for the user. */
  userValidatorPreferences(request: UserValidatorPreferencesRequest): Promise<UserValidatorPreferencesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.userValidatorPreferences = this.userValidatorPreferences.bind(this);
  }
  userValidatorPreferences(request: UserValidatorPreferencesRequest): Promise<UserValidatorPreferencesResponse> {
    const data = UserValidatorPreferencesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Query", "UserValidatorPreferences", data);
    return promise.then(data => UserValidatorPreferencesResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    userValidatorPreferences(request: UserValidatorPreferencesRequest): Promise<UserValidatorPreferencesResponse> {
      return queryService.userValidatorPreferences(request);
    }
  };
};