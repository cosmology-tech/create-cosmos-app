import * as _57 from "./applications/transfer/v1/genesis";
import * as _58 from "./applications/transfer/v1/query";
import * as _59 from "./applications/transfer/v1/transfer";
import * as _60 from "./applications/transfer/v1/tx";
import * as _61 from "./applications/transfer/v2/packet";
import * as _62 from "./core/channel/v1/channel";
import * as _63 from "./core/channel/v1/genesis";
import * as _64 from "./core/channel/v1/query";
import * as _65 from "./core/channel/v1/tx";
import * as _66 from "./core/client/v1/client";
import * as _67 from "./core/client/v1/genesis";
import * as _68 from "./core/client/v1/query";
import * as _69 from "./core/client/v1/tx";
import * as _70 from "./core/commitment/v1/commitment";
import * as _71 from "./core/connection/v1/connection";
import * as _72 from "./core/connection/v1/genesis";
import * as _73 from "./core/connection/v1/query";
import * as _74 from "./core/connection/v1/tx";
import * as _75 from "./lightclients/localhost/v1/localhost";
import * as _76 from "./lightclients/solomachine/v1/solomachine";
import * as _77 from "./lightclients/solomachine/v2/solomachine";
import * as _78 from "./lightclients/tendermint/v1/tendermint";
import * as _183 from "./applications/transfer/v1/tx.amino";
import * as _184 from "./core/channel/v1/tx.amino";
import * as _185 from "./core/client/v1/tx.amino";
import * as _186 from "./core/connection/v1/tx.amino";
import * as _187 from "./applications/transfer/v1/tx.registry";
import * as _188 from "./core/channel/v1/tx.registry";
import * as _189 from "./core/client/v1/tx.registry";
import * as _190 from "./core/connection/v1/tx.registry";
import * as _191 from "./applications/transfer/v1/query.lcd";
import * as _192 from "./core/channel/v1/query.lcd";
import * as _193 from "./core/client/v1/query.lcd";
import * as _194 from "./core/connection/v1/query.lcd";
import * as _195 from "./applications/transfer/v1/query.rpc.Query";
import * as _196 from "./core/channel/v1/query.rpc.Query";
import * as _197 from "./core/client/v1/query.rpc.Query";
import * as _198 from "./core/connection/v1/query.rpc.Query";
import * as _199 from "./applications/transfer/v1/tx.rpc.msg";
import * as _200 from "./core/channel/v1/tx.rpc.msg";
import * as _201 from "./core/client/v1/tx.rpc.msg";
import * as _202 from "./core/connection/v1/tx.rpc.msg";
import * as _256 from "./lcd";
import * as _257 from "./rpc.query";
import * as _258 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._57,
        ..._58,
        ..._59,
        ..._60,
        ..._183,
        ..._187,
        ..._191,
        ..._195,
        ..._199
      };
      export const v2 = {
        ..._61
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._62,
        ..._63,
        ..._64,
        ..._65,
        ..._184,
        ..._188,
        ..._192,
        ..._196,
        ..._200
      };
    }
    export namespace client {
      export const v1 = {
        ..._66,
        ..._67,
        ..._68,
        ..._69,
        ..._185,
        ..._189,
        ..._193,
        ..._197,
        ..._201
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._70
      };
    }
    export namespace connection {
      export const v1 = {
        ..._71,
        ..._72,
        ..._73,
        ..._74,
        ..._186,
        ..._190,
        ..._194,
        ..._198,
        ..._202
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._75
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._76
      };
      export const v2 = {
        ..._77
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._78
      };
    }
  }
  export const ClientFactory = {
    ..._256,
    ..._257,
    ..._258
  };
}