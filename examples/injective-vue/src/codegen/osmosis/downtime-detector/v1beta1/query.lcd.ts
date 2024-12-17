import { Downtime, DowntimeSDKType } from "./downtime_duration";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { LCDClient } from "@cosmology/lcd";
import { RecoveredSinceDowntimeOfLengthRequest, RecoveredSinceDowntimeOfLengthRequestSDKType, RecoveredSinceDowntimeOfLengthResponse, RecoveredSinceDowntimeOfLengthResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.recoveredSinceDowntimeOfLength = this.recoveredSinceDowntimeOfLength.bind(this);
  }
  /* RecoveredSinceDowntimeOfLength */
  async recoveredSinceDowntimeOfLength(params: RecoveredSinceDowntimeOfLengthRequest): Promise<RecoveredSinceDowntimeOfLengthResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.downtime !== "undefined") {
      options.params.downtime = params.downtime;
    }
    if (typeof params?.recovery !== "undefined") {
      options.params.recovery = params.recovery;
    }
    const endpoint = `osmosis/downtime-detector/v1beta1/RecoveredSinceDowntimeOfLength`;
    return RecoveredSinceDowntimeOfLengthResponse.fromSDKJSON(await this.req.get<RecoveredSinceDowntimeOfLengthResponseSDKType>(endpoint, options));
  }
}