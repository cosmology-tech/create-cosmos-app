import * as _149 from "./wasm/v1/genesis";
import * as _150 from "./wasm/v1/ibc";
import * as _151 from "./wasm/v1/proposal";
import * as _152 from "./wasm/v1/query";
import * as _153 from "./wasm/v1/tx";
import * as _154 from "./wasm/v1/types";
import * as _155 from "./wasm/v1/authz";
import * as _486 from "./wasm/v1/tx.amino";
import * as _487 from "./wasm/v1/tx.registry";
import * as _488 from "./wasm/v1/query.lcd";
import * as _489 from "./wasm/v1/query.rpc.Query";
import * as _490 from "./wasm/v1/tx.rpc.msg";
import * as _632 from "./lcd";
import * as _633 from "./rpc.query";
import * as _634 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._155,
      ..._486,
      ..._487,
      ..._488,
      ..._489,
      ..._490
    };
  }
  export const ClientFactory = {
    ..._632,
    ..._633,
    ..._634
  };
}