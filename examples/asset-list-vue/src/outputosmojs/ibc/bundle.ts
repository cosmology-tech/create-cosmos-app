import * as _233 from "./applications/transfer/v1/genesis";
import * as _234 from "./applications/transfer/v1/query";
import * as _235 from "./applications/transfer/v1/transfer";
import * as _236 from "./applications/transfer/v1/tx";
import * as _237 from "./applications/transfer/v1/authz";
import * as _238 from "./applications/transfer/v2/packet";
import * as _239 from "./applications/fee/v1/ack";
import * as _240 from "./applications/fee/v1/fee";
import * as _241 from "./applications/fee/v1/genesis";
import * as _242 from "./applications/fee/v1/metadata";
import * as _243 from "./applications/fee/v1/query";
import * as _244 from "./applications/fee/v1/tx";
import * as _245 from "./applications/interchain_accounts/controller/v1/controller";
import * as _246 from "./applications/interchain_accounts/controller/v1/query";
import * as _247 from "./applications/interchain_accounts/controller/v1/tx";
import * as _248 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _249 from "./applications/interchain_accounts/host/v1/host";
import * as _250 from "./applications/interchain_accounts/host/v1/query";
import * as _251 from "./applications/interchain_accounts/v1/account";
import * as _252 from "./applications/interchain_accounts/v1/metadata";
import * as _253 from "./applications/interchain_accounts/v1/packet";
import * as _254 from "./core/channel/v1/channel";
import * as _255 from "./core/channel/v1/genesis";
import * as _256 from "./core/channel/v1/query";
import * as _257 from "./core/channel/v1/tx";
import * as _258 from "./core/client/v1/client";
import * as _259 from "./core/client/v1/genesis";
import * as _260 from "./core/client/v1/query";
import * as _261 from "./core/client/v1/tx";
import * as _262 from "./core/commitment/v1/commitment";
import * as _263 from "./core/connection/v1/connection";
import * as _264 from "./core/connection/v1/genesis";
import * as _265 from "./core/connection/v1/query";
import * as _266 from "./core/connection/v1/tx";
import * as _267 from "./core/port/v1/query";
import * as _268 from "./core/types/v1/genesis";
import * as _269 from "./lightclients/localhost/v1/localhost";
import * as _270 from "./lightclients/localhost/v2/localhost";
import * as _271 from "./lightclients/solomachine/v1/solomachine";
import * as _272 from "./lightclients/solomachine/v2/solomachine";
import * as _273 from "./lightclients/solomachine/v3/solomachine";
import * as _274 from "./lightclients/tendermint/v1/tendermint";
import * as _517 from "./applications/transfer/v1/tx.amino";
import * as _518 from "./core/channel/v1/tx.amino";
import * as _519 from "./core/client/v1/tx.amino";
import * as _520 from "./core/connection/v1/tx.amino";
import * as _521 from "./applications/fee/v1/tx.amino";
import * as _522 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _523 from "./applications/transfer/v1/tx.registry";
import * as _524 from "./core/channel/v1/tx.registry";
import * as _525 from "./core/client/v1/tx.registry";
import * as _526 from "./core/connection/v1/tx.registry";
import * as _527 from "./applications/fee/v1/tx.registry";
import * as _528 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _529 from "./applications/transfer/v1/query.lcd";
import * as _530 from "./core/channel/v1/query.lcd";
import * as _531 from "./core/client/v1/query.lcd";
import * as _532 from "./core/connection/v1/query.lcd";
import * as _533 from "./applications/fee/v1/query.lcd";
import * as _534 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _535 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _536 from "./applications/transfer/v1/query.rpc.Query";
import * as _537 from "./core/channel/v1/query.rpc.Query";
import * as _538 from "./core/client/v1/query.rpc.Query";
import * as _539 from "./core/connection/v1/query.rpc.Query";
import * as _540 from "./core/port/v1/query.rpc.Query";
import * as _541 from "./applications/fee/v1/query.rpc.Query";
import * as _542 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _543 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _544 from "./applications/transfer/v1/tx.rpc.msg";
import * as _545 from "./core/channel/v1/tx.rpc.msg";
import * as _546 from "./core/client/v1/tx.rpc.msg";
import * as _547 from "./core/connection/v1/tx.rpc.msg";
import * as _548 from "./applications/fee/v1/tx.rpc.msg";
import * as _549 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _641 from "./lcd";
import * as _642 from "./rpc.query";
import * as _643 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._233,
        ..._234,
        ..._235,
        ..._236,
        ..._237,
        ..._517,
        ..._523,
        ..._529,
        ..._536,
        ..._544
      };
      export const v2 = {
        ..._238
      };
    }
    export namespace fee {
      export const v1 = {
        ..._239,
        ..._240,
        ..._241,
        ..._242,
        ..._243,
        ..._244,
        ..._521,
        ..._527,
        ..._533,
        ..._541,
        ..._548
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._245,
          ..._246,
          ..._247,
          ..._522,
          ..._528,
          ..._534,
          ..._542,
          ..._549
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._248
        };
      }
      export namespace host {
        export const v1 = {
          ..._249,
          ..._250,
          ..._535,
          ..._543
        };
      }
      export const v1 = {
        ..._251,
        ..._252,
        ..._253
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._254,
        ..._255,
        ..._256,
        ..._257,
        ..._518,
        ..._524,
        ..._530,
        ..._537,
        ..._545
      };
    }
    export namespace client {
      export const v1 = {
        ..._258,
        ..._259,
        ..._260,
        ..._261,
        ..._519,
        ..._525,
        ..._531,
        ..._538,
        ..._546
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._262
      };
    }
    export namespace connection {
      export const v1 = {
        ..._263,
        ..._264,
        ..._265,
        ..._266,
        ..._520,
        ..._526,
        ..._532,
        ..._539,
        ..._547
      };
    }
    export namespace port {
      export const v1 = {
        ..._267,
        ..._540
      };
    }
    export namespace types {
      export const v1 = {
        ..._268
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._269
      };
      export const v2 = {
        ..._270
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._271
      };
      export const v2 = {
        ..._272
      };
      export const v3 = {
        ..._273
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._274
      };
    }
  }
  export const ClientFactory = {
    ..._641,
    ..._642,
    ..._643
  };
}