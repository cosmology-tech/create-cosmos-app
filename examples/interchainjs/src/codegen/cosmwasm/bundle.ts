import * as _94 from "./wasm/v1/genesis";
import * as _95 from "./wasm/v1/ibc";
import * as _96 from "./wasm/v1/proposal";
import * as _97 from "./wasm/v1/query";
import * as _98 from "./wasm/v1/tx";
import * as _99 from "./wasm/v1/types";
import * as _254 from "./wasm/v1/tx.amino";
import * as _255 from "./wasm/v1/tx.registry";
import * as _256 from "./wasm/v1/query.rpc.Query";
import * as _257 from "./wasm/v1/tx.rpc.msg";
import * as _311 from "./rpc.query";
import * as _312 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._254,
      ..._255,
      ..._256,
      ..._257
    };
  }
  export const ClientFactory = {
    ..._311,
    ..._312
  };
}