import * as _79 from "./claim/v1beta1/claim";
import * as _80 from "./claim/v1beta1/genesis";
import * as _81 from "./claim/v1beta1/params";
import * as _82 from "./claim/v1beta1/query";
import * as _83 from "./epochs/genesis";
import * as _84 from "./epochs/query";
import * as _85 from "./gamm/pool-models/balancer/balancerPool";
import * as _86 from "./gamm/v1beta1/genesis";
import * as _87 from "./gamm/v1beta1/query";
import * as _88 from "./gamm/v1beta1/tx";
import * as _89 from "./gamm/pool-models/balancer/tx/tx";
import * as _90 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _91 from "./gamm/pool-models/stableswap/tx";
import * as _92 from "./gamm/v2/query";
import * as _93 from "./ibc-rate-limit/v1beta1/params";
import * as _94 from "./ibc-rate-limit/v1beta1/query";
import * as _95 from "./incentives/gauge";
import * as _96 from "./incentives/genesis";
import * as _97 from "./incentives/params";
import * as _98 from "./incentives/query";
import * as _99 from "./incentives/tx";
import * as _100 from "./lockup/genesis";
import * as _101 from "./lockup/lock";
import * as _102 from "./lockup/params";
import * as _103 from "./lockup/query";
import * as _104 from "./lockup/tx";
import * as _105 from "./mint/v1beta1/genesis";
import * as _106 from "./mint/v1beta1/mint";
import * as _107 from "./mint/v1beta1/query";
import * as _108 from "./pool-incentives/v1beta1/genesis";
import * as _109 from "./pool-incentives/v1beta1/gov";
import * as _110 from "./pool-incentives/v1beta1/incentives";
import * as _111 from "./pool-incentives/v1beta1/query";
import * as _112 from "./sumtree/v1beta1/tree";
import * as _113 from "./superfluid/genesis";
import * as _114 from "./superfluid/params";
import * as _115 from "./superfluid/query";
import * as _116 from "./superfluid/superfluid";
import * as _117 from "./superfluid/tx";
import * as _118 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _119 from "./tokenfactory/v1beta1/genesis";
import * as _120 from "./tokenfactory/v1beta1/params";
import * as _121 from "./tokenfactory/v1beta1/query";
import * as _122 from "./tokenfactory/v1beta1/tx";
import * as _123 from "./twap/v1beta1/genesis";
import * as _124 from "./twap/v1beta1/query";
import * as _125 from "./twap/v1beta1/twap_record";
import * as _126 from "./txfees/v1beta1/feetoken";
import * as _127 from "./txfees/v1beta1/genesis";
import * as _128 from "./txfees/v1beta1/gov";
import * as _129 from "./txfees/v1beta1/query";
import * as _203 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _204 from "./gamm/pool-models/stableswap/tx.amino";
import * as _205 from "./gamm/v1beta1/tx.amino";
import * as _206 from "./incentives/tx.amino";
import * as _207 from "./lockup/tx.amino";
import * as _208 from "./superfluid/tx.amino";
import * as _209 from "./tokenfactory/v1beta1/tx.amino";
import * as _210 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _211 from "./gamm/pool-models/stableswap/tx.registry";
import * as _212 from "./gamm/v1beta1/tx.registry";
import * as _213 from "./incentives/tx.registry";
import * as _214 from "./lockup/tx.registry";
import * as _215 from "./superfluid/tx.registry";
import * as _216 from "./tokenfactory/v1beta1/tx.registry";
import * as _217 from "./claim/v1beta1/query.lcd";
import * as _218 from "./epochs/query.lcd";
import * as _219 from "./gamm/v1beta1/query.lcd";
import * as _220 from "./gamm/v2/query.lcd";
import * as _221 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _222 from "./incentives/query.lcd";
import * as _223 from "./lockup/query.lcd";
import * as _224 from "./mint/v1beta1/query.lcd";
import * as _225 from "./pool-incentives/v1beta1/query.lcd";
import * as _226 from "./superfluid/query.lcd";
import * as _227 from "./tokenfactory/v1beta1/query.lcd";
import * as _228 from "./twap/v1beta1/query.lcd";
import * as _229 from "./txfees/v1beta1/query.lcd";
import * as _230 from "./claim/v1beta1/query.rpc.Query";
import * as _231 from "./epochs/query.rpc.Query";
import * as _232 from "./gamm/v1beta1/query.rpc.Query";
import * as _233 from "./gamm/v2/query.rpc.Query";
import * as _234 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _235 from "./incentives/query.rpc.Query";
import * as _236 from "./lockup/query.rpc.Query";
import * as _237 from "./mint/v1beta1/query.rpc.Query";
import * as _238 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _239 from "./superfluid/query.rpc.Query";
import * as _240 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _241 from "./twap/v1beta1/query.rpc.Query";
import * as _242 from "./txfees/v1beta1/query.rpc.Query";
import * as _243 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _244 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _245 from "./gamm/v1beta1/tx.rpc.msg";
import * as _246 from "./incentives/tx.rpc.msg";
import * as _247 from "./lockup/tx.rpc.msg";
import * as _248 from "./superfluid/tx.rpc.msg";
import * as _249 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _259 from "./lcd";
import * as _260 from "./rpc.query";
import * as _261 from "./rpc.tx";
export namespace osmosis {
  export namespace claim {
    export const v1beta1 = {
      ..._79,
      ..._80,
      ..._81,
      ..._82,
      ..._217,
      ..._230
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._83,
      ..._84,
      ..._218,
      ..._231
    };
  }
  export namespace gamm {
    export const v1beta1 = {
      ..._85,
      ..._86,
      ..._87,
      ..._88,
      ..._205,
      ..._212,
      ..._219,
      ..._232,
      ..._245
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._89,
          ..._203,
          ..._210,
          ..._243
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._90,
          ..._91,
          ..._204,
          ..._211,
          ..._244
        };
      }
    }
    export const v2 = {
      ..._92,
      ..._220,
      ..._233
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._93,
      ..._94,
      ..._221,
      ..._234
    };
  }
  export const incentives = {
    ..._95,
    ..._96,
    ..._97,
    ..._98,
    ..._99,
    ..._206,
    ..._213,
    ..._222,
    ..._235,
    ..._246
  };
  export const lockup = {
    ..._100,
    ..._101,
    ..._102,
    ..._103,
    ..._104,
    ..._207,
    ..._214,
    ..._223,
    ..._236,
    ..._247
  };
  export namespace mint {
    export const v1beta1 = {
      ..._105,
      ..._106,
      ..._107,
      ..._224,
      ..._237
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._108,
      ..._109,
      ..._110,
      ..._111,
      ..._225,
      ..._238
    };
  }
  export namespace store {
    export const v1beta1 = {
      ..._112
    };
  }
  export const superfluid = {
    ..._113,
    ..._114,
    ..._115,
    ..._116,
    ..._117,
    ..._208,
    ..._215,
    ..._226,
    ..._239,
    ..._248
  };
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._118,
      ..._119,
      ..._120,
      ..._121,
      ..._122,
      ..._209,
      ..._216,
      ..._227,
      ..._240,
      ..._249
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._123,
      ..._124,
      ..._125,
      ..._228,
      ..._241
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._229,
      ..._242
    };
  }
  export const ClientFactory = {
    ..._259,
    ..._260,
    ..._261
  };
}