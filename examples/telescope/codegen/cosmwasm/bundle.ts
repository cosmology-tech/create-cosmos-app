import * as _94 from "./wasm/v1/genesis";
import * as _95 from "./wasm/v1/ibc";
import * as _96 from "./wasm/v1/proposal";
import * as _97 from "./wasm/v1/query";
import * as _98 from "./wasm/v1/tx";
import * as _99 from "./wasm/v1/types";
import * as _221 from "./wasm/v1/tx.amino";
import * as _222 from "./wasm/v1/tx.registry";
import * as _223 from "./wasm/v1/query.lcd";
import * as _224 from "./wasm/v1/query.rpc.query";
import * as _225 from "./wasm/v1/tx.rpc.msg";
import * as _250 from "./lcd";
import * as _251 from "./rpc.query";
import * as _252 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._221,
      ..._222,
      ..._223,
      ..._224,
      ..._225
    };
  }
  export const ClientFactory = { ..._250,
    ..._251,
    ..._252
  };
}