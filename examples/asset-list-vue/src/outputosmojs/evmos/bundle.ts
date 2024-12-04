import * as _156 from "./claims/v1/claims";
import * as _157 from "./claims/v1/genesis";
import * as _158 from "./claims/v1/query";
import * as _159 from "./epochs/v1/genesis";
import * as _160 from "./epochs/v1/query";
import * as _161 from "./erc20/v1/erc20";
import * as _162 from "./erc20/v1/genesis";
import * as _163 from "./erc20/v1/query";
import * as _164 from "./erc20/v1/tx";
import * as _165 from "./fees/v1/fees";
import * as _166 from "./fees/v1/genesis";
import * as _167 from "./fees/v1/query";
import * as _168 from "./fees/v1/tx";
import * as _169 from "./incentives/v1/genesis";
import * as _170 from "./incentives/v1/incentives";
import * as _171 from "./incentives/v1/query";
import * as _172 from "./inflation/v1/genesis";
import * as _173 from "./inflation/v1/inflation";
import * as _174 from "./inflation/v1/query";
import * as _175 from "./recovery/v1/genesis";
import * as _176 from "./recovery/v1/query";
import * as _177 from "./vesting/v1/query";
import * as _178 from "./vesting/v1/tx";
import * as _179 from "./vesting/v1/vesting";
import * as _491 from "./erc20/v1/tx.amino";
import * as _492 from "./fees/v1/tx.amino";
import * as _493 from "./vesting/v1/tx.amino";
import * as _494 from "./erc20/v1/tx.registry";
import * as _495 from "./fees/v1/tx.registry";
import * as _496 from "./vesting/v1/tx.registry";
import * as _497 from "./claims/v1/query.lcd";
import * as _498 from "./epochs/v1/query.lcd";
import * as _499 from "./erc20/v1/query.lcd";
import * as _500 from "./fees/v1/query.lcd";
import * as _501 from "./incentives/v1/query.lcd";
import * as _502 from "./inflation/v1/query.lcd";
import * as _503 from "./recovery/v1/query.lcd";
import * as _504 from "./vesting/v1/query.lcd";
import * as _505 from "./claims/v1/query.rpc.Query";
import * as _506 from "./epochs/v1/query.rpc.Query";
import * as _507 from "./erc20/v1/query.rpc.Query";
import * as _508 from "./fees/v1/query.rpc.Query";
import * as _509 from "./incentives/v1/query.rpc.Query";
import * as _510 from "./inflation/v1/query.rpc.Query";
import * as _511 from "./recovery/v1/query.rpc.Query";
import * as _512 from "./vesting/v1/query.rpc.Query";
import * as _513 from "./erc20/v1/tx.rpc.msg";
import * as _514 from "./fees/v1/tx.rpc.msg";
import * as _515 from "./vesting/v1/tx.rpc.msg";
import * as _516 from "./erc20/v1/query.pinia.store";
import * as _635 from "./lcd";
import * as _636 from "./custom-lcd-client";
import * as _637 from "./rpc.query";
import * as _638 from "./evmos-rpc-client.query";
import * as _639 from "./rpc.tx";
import * as _640 from "./evmos-rpc-client.tx";
export namespace evmos {
  export namespace claims {
    export const v1 = {
      ..._156,
      ..._157,
      ..._158,
      ..._497,
      ..._505
    };
  }
  export namespace epochs {
    export const v1 = {
      ..._159,
      ..._160,
      ..._498,
      ..._506
    };
  }
  export namespace erc20 {
    export const v1 = {
      ..._161,
      ..._162,
      ..._163,
      ..._164,
      ..._491,
      ..._494,
      ..._499,
      ..._507,
      ..._513,
      ..._516
    };
  }
  export namespace fees {
    export const v1 = {
      ..._165,
      ..._166,
      ..._167,
      ..._168,
      ..._492,
      ..._495,
      ..._500,
      ..._508,
      ..._514
    };
  }
  export namespace incentives {
    export const v1 = {
      ..._169,
      ..._170,
      ..._171,
      ..._501,
      ..._509
    };
  }
  export namespace inflation {
    export const v1 = {
      ..._172,
      ..._173,
      ..._174,
      ..._502,
      ..._510
    };
  }
  export namespace recovery {
    export const v1 = {
      ..._175,
      ..._176,
      ..._503,
      ..._511
    };
  }
  export namespace vesting {
    export const v1 = {
      ..._177,
      ..._178,
      ..._179,
      ..._493,
      ..._496,
      ..._504,
      ..._512,
      ..._515
    };
  }
  export const ClientFactory = {
    ..._635,
    ..._636,
    ..._637,
    ..._638,
    ..._639,
    ..._640
  };
}