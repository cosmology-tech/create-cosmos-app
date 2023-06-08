import * as _101 from "./api/annotations";
import * as _102 from "./api/auth";
import * as _103 from "./api/backend";
import * as _104 from "./api/billing";
import * as _105 from "./api/client";
import * as _106 from "./api/config_change";
import * as _107 from "./api/consumer";
import * as _108 from "./api/context";
import * as _109 from "./api/control";
import * as _110 from "./api/distribution";
import * as _111 from "./api/documentation";
import * as _112 from "./api/endpoint";
import * as _113 from "./api/error_reason";
import * as _114 from "./api/field_behavior";
import * as _115 from "./api/http";
import * as _116 from "./api/httpbody";
import * as _117 from "./api/label";
import * as _118 from "./api/launch_stage";
import * as _119 from "./api/log";
import * as _120 from "./api/logging";
import * as _121 from "./api/metric";
import * as _122 from "./api/monitored_resource";
import * as _123 from "./api/monitoring";
import * as _124 from "./api/quota";
import * as _125 from "./api/resource";
import * as _126 from "./api/routing";
import * as _127 from "./api/service";
import * as _128 from "./api/source_info";
import * as _129 from "./api/system_parameter";
import * as _130 from "./api/usage";
import * as _131 from "./api/visibility";
import * as _132 from "./logging/type/http_request";
import * as _133 from "./logging/type/log_severity";
import * as _134 from "./logging/v2/log_entry";
import * as _135 from "./logging/v2/logging_config";
import * as _136 from "./logging/v2/logging_metrics";
import * as _137 from "./logging/v2/logging";
import * as _138 from "./longrunning/operations";
import * as _139 from "./protobuf/any";
import * as _140 from "./protobuf/api";
import * as _141 from "./protobuf/descriptor";
import * as _142 from "./protobuf/duration";
import * as _143 from "./protobuf/empty";
import * as _144 from "./protobuf/field_mask";
import * as _145 from "./protobuf/source_context";
import * as _146 from "./protobuf/struct";
import * as _147 from "./protobuf/timestamp";
import * as _148 from "./protobuf/type";
import * as _149 from "./protobuf/wrappers";
import * as _150 from "./rpc/code";
import * as _151 from "./rpc/error_details";
import * as _152 from "./rpc/status";
export namespace google {
  export const api = {
    ..._101,
    ..._102,
    ..._103,
    ..._104,
    ..._105,
    ..._106,
    ..._107,
    ..._108,
    ..._109,
    ..._110,
    ..._111,
    ..._112,
    ..._113,
    ..._114,
    ..._115,
    ..._116,
    ..._117,
    ..._118,
    ..._119,
    ..._120,
    ..._121,
    ..._122,
    ..._123,
    ..._124,
    ..._125,
    ..._126,
    ..._127,
    ..._128,
    ..._129,
    ..._130,
    ..._131
  };
  export namespace logging {
    export const type = {
      ..._132,
      ..._133
    };
    export const v2 = {
      ..._134,
      ..._135,
      ..._136,
      ..._137
    };
  }
  export const longrunning = {
    ..._138
  };
  export const protobuf = {
    ..._139,
    ..._140,
    ..._141,
    ..._142,
    ..._143,
    ..._144,
    ..._145,
    ..._146,
    ..._147,
    ..._148,
    ..._149
  };
  export const rpc = {
    ..._150,
    ..._151,
    ..._152
  };
}