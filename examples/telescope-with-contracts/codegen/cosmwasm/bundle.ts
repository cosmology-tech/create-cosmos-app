import * as _94 from "./wasm/v1/genesis";
import * as _95 from "./wasm/v1/ibc";
import * as _96 from "./wasm/v1/proposal";
import * as _97 from "./wasm/v1/query";
import * as _98 from "./wasm/v1/tx";
import * as _99 from "./wasm/v1/types";
import * as _193 from "./wasm/v1/query.lcd";
import * as _194 from "./wasm/v1/query.rpc.query";
import * as _195 from "./wasm/v1/tx.rpc.msg";
import * as _212 from "./lcd";
import * as _213 from "./rpc.query";
import * as _214 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._193,
      ..._194,
      ..._195
    };
  }
  export const ClientFactory = { ..._212,
    ..._213,
    ..._214
  };
}