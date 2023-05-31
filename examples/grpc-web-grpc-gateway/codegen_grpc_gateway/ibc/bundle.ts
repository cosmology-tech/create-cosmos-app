import * as _230 from "./applications/transfer/v1/genesis";
import * as _231 from "./applications/transfer/v1/query";
import * as _232 from "./applications/transfer/v1/transfer";
import * as _233 from "./applications/transfer/v1/tx";
import * as _234 from "./applications/transfer/v2/packet";
import * as _235 from "./core/channel/v1/channel";
import * as _236 from "./core/channel/v1/genesis";
import * as _237 from "./core/channel/v1/query";
import * as _238 from "./core/channel/v1/tx";
import * as _239 from "./core/client/v1/client";
import * as _240 from "./core/client/v1/genesis";
import * as _241 from "./core/client/v1/query";
import * as _242 from "./core/client/v1/tx";
import * as _243 from "./core/commitment/v1/commitment";
import * as _244 from "./core/connection/v1/connection";
import * as _245 from "./core/connection/v1/genesis";
import * as _246 from "./core/connection/v1/query";
import * as _247 from "./core/connection/v1/tx";
import * as _248 from "./core/port/v1/query";
import * as _249 from "./core/types/v1/genesis";
import * as _250 from "./lightclients/localhost/v1/localhost";
import * as _251 from "./lightclients/solomachine/v1/solomachine";
import * as _252 from "./lightclients/solomachine/v2/solomachine";
import * as _253 from "./lightclients/tendermint/v1/tendermint";
import * as _463 from "./applications/transfer/v1/tx.amino";
import * as _464 from "./core/channel/v1/tx.amino";
import * as _465 from "./core/client/v1/tx.amino";
import * as _466 from "./core/connection/v1/tx.amino";
import * as _467 from "./applications/transfer/v1/tx.registry";
import * as _468 from "./core/channel/v1/tx.registry";
import * as _469 from "./core/client/v1/tx.registry";
import * as _470 from "./core/connection/v1/tx.registry";
import * as _471 from "./applications/transfer/v1/query.lcd";
import * as _472 from "./core/channel/v1/query.lcd";
import * as _473 from "./core/client/v1/query.lcd";
import * as _474 from "./core/connection/v1/query.lcd";
import * as _475 from "./applications/transfer/v1/query.rpc.Query";
import * as _476 from "./core/channel/v1/query.rpc.Query";
import * as _477 from "./core/client/v1/query.rpc.Query";
import * as _478 from "./core/connection/v1/query.rpc.Query";
import * as _479 from "./core/port/v1/query.rpc.Query";
import * as _480 from "./applications/transfer/v1/tx.rpc.msg";
import * as _481 from "./core/channel/v1/tx.rpc.msg";
import * as _482 from "./core/client/v1/tx.rpc.msg";
import * as _483 from "./core/connection/v1/tx.rpc.msg";
import * as _543 from "./lcd";
import * as _544 from "./rpc.query";
import * as _545 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._230,
        ..._231,
        ..._232,
        ..._233,
        ..._463,
        ..._467,
        ..._471,
        ..._475,
        ..._480
      };
      export const v2 = {
        ..._234
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._235,
        ..._236,
        ..._237,
        ..._238,
        ..._464,
        ..._468,
        ..._472,
        ..._476,
        ..._481
      };
    }
    export namespace client {
      export const v1 = {
        ..._239,
        ..._240,
        ..._241,
        ..._242,
        ..._465,
        ..._469,
        ..._473,
        ..._477,
        ..._482
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._243
      };
    }
    export namespace connection {
      export const v1 = {
        ..._244,
        ..._245,
        ..._246,
        ..._247,
        ..._466,
        ..._470,
        ..._474,
        ..._478,
        ..._483
      };
    }
    export namespace port {
      export const v1 = {
        ..._248,
        ..._479
      };
    }
    export namespace types {
      export const v1 = {
        ..._249
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._250
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._251
      };
      export const v2 = {
        ..._252
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._253
      };
    }
  }
  export const ClientFactory = {
    ..._543,
    ..._544,
    ..._545
  };
}