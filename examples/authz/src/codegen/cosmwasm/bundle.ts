//@ts-nocheck
import * as _94 from "./wasm/v1/genesis";
import * as _95 from "./wasm/v1/ibc";
import * as _96 from "./wasm/v1/proposal";
import * as _97 from "./wasm/v1/query";
import * as _98 from "./wasm/v1/tx";
import * as _99 from "./wasm/v1/types";
import * as _275 from "./wasm/v1/tx.amino";
import * as _276 from "./wasm/v1/tx.registry";
import * as _277 from "./wasm/v1/query.lcd";
import * as _278 from "./wasm/v1/query.rpc.Query";
import * as _279 from "./wasm/v1/tx.rpc.msg";
import * as _354 from "./lcd";
import * as _355 from "./rpc.query";
import * as _356 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._275,
      ..._276,
      ..._277,
      ..._278,
      ..._279
    };
  }
  export const ClientFactory = {
    ..._354,
    ..._355,
    ..._356
  };
}