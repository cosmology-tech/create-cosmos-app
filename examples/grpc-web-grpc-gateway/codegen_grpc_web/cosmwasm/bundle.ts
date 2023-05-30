import * as _147 from "./wasm/v1/genesis";
import * as _148 from "./wasm/v1/ibc";
import * as _149 from "./wasm/v1/proposal";
import * as _150 from "./wasm/v1/query";
import * as _151 from "./wasm/v1/tx";
import * as _152 from "./wasm/v1/types";
import * as _433 from "./wasm/v1/tx.amino";
import * as _434 from "./wasm/v1/tx.registry";
import * as _435 from "./wasm/v1/query.lcd";
import * as _436 from "./wasm/v1/query.rpc.Query";
import * as _437 from "./wasm/v1/tx.rpc.msg";
import * as _537 from "./lcd";
import * as _538 from "./rpc.query";
import * as _539 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._433,
      ..._434,
      ..._435,
      ..._436,
      ..._437
    };
  }
  export const ClientFactory = {
    ..._537,
    ..._538,
    ..._539
  };
}