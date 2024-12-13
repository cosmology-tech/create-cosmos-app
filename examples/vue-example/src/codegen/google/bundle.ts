import * as _181 from "./api/annotations";
import * as _182 from "./api/auth";
import * as _183 from "./api/backend";
import * as _184 from "./api/billing";
import * as _185 from "./api/client";
import * as _186 from "./api/config_change";
import * as _187 from "./api/consumer";
import * as _188 from "./api/context";
import * as _189 from "./api/control";
import * as _190 from "./api/distribution";
import * as _191 from "./api/documentation";
import * as _192 from "./api/endpoint";
import * as _193 from "./api/error_reason";
import * as _194 from "./api/field_behavior";
import * as _195 from "./api/http";
import * as _196 from "./api/httpbody";
import * as _197 from "./api/label";
import * as _198 from "./api/launch_stage";
import * as _199 from "./api/log";
import * as _200 from "./api/logging";
import * as _201 from "./api/metric";
import * as _202 from "./api/monitored_resource";
import * as _203 from "./api/monitoring";
import * as _204 from "./api/quota";
import * as _205 from "./api/resource";
import * as _206 from "./api/routing";
import * as _207 from "./api/service";
import * as _208 from "./api/source_info";
import * as _209 from "./api/system_parameter";
import * as _210 from "./api/usage";
import * as _211 from "./api/visibility";
import * as _212 from "./logging/type/http_request";
import * as _213 from "./logging/type/log_severity";
import * as _214 from "./logging/v2/log_entry";
import * as _215 from "./logging/v2/logging_config";
import * as _216 from "./logging/v2/logging_metrics";
import * as _217 from "./logging/v2/logging";
import * as _218 from "./longrunning/operations";
import * as _219 from "./protobuf/any";
import * as _220 from "./protobuf/api";
import * as _221 from "./protobuf/descriptor";
import * as _222 from "./protobuf/duration";
import * as _223 from "./protobuf/empty";
import * as _224 from "./protobuf/field_mask";
import * as _225 from "./protobuf/source_context";
import * as _226 from "./protobuf/struct";
import * as _227 from "./protobuf/timestamp";
import * as _228 from "./protobuf/type";
import * as _229 from "./protobuf/wrappers";
import * as _230 from "./rpc/code";
import * as _231 from "./rpc/error_details";
import * as _232 from "./rpc/status";
export namespace google {
  export const api = {
    ..._181,
    ..._182,
    ..._183,
    ..._184,
    ..._185,
    ..._186,
    ..._187,
    ..._188,
    ..._189,
    ..._190,
    ..._191,
    ..._192,
    ..._193,
    ..._194,
    ..._195,
    ..._196,
    ..._197,
    ..._198,
    ..._199,
    ..._200,
    ..._201,
    ..._202,
    ..._203,
    ..._204,
    ..._205,
    ..._206,
    ..._207,
    ..._208,
    ..._209,
    ..._210,
    ..._211
  };
  export namespace logging {
    export const type = {
      ..._212,
      ..._213
    };
    export const v2 = {
      ..._214,
      ..._215,
      ..._216,
      ..._217
    };
  }
  export const longrunning = {
    ..._218
  };
  export const protobuf = {
    ..._219,
    ..._220,
    ..._221,
    ..._222,
    ..._223,
    ..._224,
    ..._225,
    ..._226,
    ..._227,
    ..._228,
    ..._229
  };
  export const rpc = {
    ..._230,
    ..._231,
    ..._232
  };
}