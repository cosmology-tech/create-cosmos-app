import { ValidatorPreference, ValidatorPreferenceSDKType } from "./state";
import { LCDClient } from "@cosmology/lcd";
import { UserValidatorPreferencesRequest, UserValidatorPreferencesRequestSDKType, UserValidatorPreferencesResponse, UserValidatorPreferencesResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.userValidatorPreferences = this.userValidatorPreferences.bind(this);
  }
  /* Returns the list of ValidatorPreferences for the user. */
  async userValidatorPreferences(params: UserValidatorPreferencesRequest): Promise<UserValidatorPreferencesResponseSDKType> {
    const endpoint = `osmosis/valset-pref/v1beta1/${params.address}`;
    return UserValidatorPreferencesResponse.fromSDKJSON(await this.req.get<UserValidatorPreferencesResponseSDKType>(endpoint));
  }
}