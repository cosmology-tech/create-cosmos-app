import * as _94 from "./wasm/v1/genesis";
import * as _95 from "./wasm/v1/ibc";
import * as _96 from "./wasm/v1/proposal";
import * as _97 from "./wasm/v1/query";
import * as _98 from "./wasm/v1/tx";
import * as _99 from "./wasm/v1/types";
import * as _271 from "./wasm/v1/tx.amino";
import * as _272 from "./wasm/v1/tx.registry";
import * as _273 from "./wasm/v1/query.lcd";
import * as _274 from "./wasm/v1/query.rpc.Query";
import * as _275 from "./wasm/v1/tx.rpc.msg";
import * as _347 from "./lcd";
import * as _348 from "./rpc.query";
import * as _349 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._271,
      ..._272,
      ..._273,
      ..._274,
      ..._275
    };
  }
  export const ClientFactory = {
    ..._347,
    ..._348,
    ..._349
  };
}