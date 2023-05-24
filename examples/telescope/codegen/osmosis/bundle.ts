import * as _132 from "./claim/v1beta1/claim";
import * as _133 from "./claim/v1beta1/genesis";
import * as _134 from "./claim/v1beta1/params";
import * as _135 from "./claim/v1beta1/query";
import * as _136 from "./epochs/genesis";
import * as _137 from "./epochs/query";
import * as _138 from "./gamm/pool-models/balancer/balancerPool";
import * as _139 from "./gamm/v1beta1/genesis";
import * as _140 from "./gamm/v1beta1/query";
import * as _141 from "./gamm/v1beta1/tx";
import * as _142 from "./gamm/pool-models/balancer/tx/tx";
import * as _143 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _144 from "./gamm/pool-models/stableswap/tx";
import * as _145 from "./gamm/v2/query";
import * as _146 from "./ibc-rate-limit/v1beta1/params";
import * as _147 from "./ibc-rate-limit/v1beta1/query";
import * as _148 from "./incentives/gauge";
import * as _149 from "./incentives/genesis";
import * as _150 from "./incentives/params";
import * as _151 from "./incentives/query";
import * as _152 from "./incentives/tx";
import * as _153 from "./lockup/genesis";
import * as _154 from "./lockup/lock";
import * as _155 from "./lockup/params";
import * as _156 from "./lockup/query";
import * as _157 from "./lockup/tx";
import * as _158 from "./mint/v1beta1/genesis";
import * as _159 from "./mint/v1beta1/mint";
import * as _160 from "./mint/v1beta1/query";
import * as _161 from "./pool-incentives/v1beta1/genesis";
import * as _162 from "./pool-incentives/v1beta1/gov";
import * as _163 from "./pool-incentives/v1beta1/incentives";
import * as _164 from "./pool-incentives/v1beta1/query";
import * as _165 from "./sumtree/v1beta1/tree";
import * as _166 from "./superfluid/genesis";
import * as _167 from "./superfluid/params";
import * as _168 from "./superfluid/query";
import * as _169 from "./superfluid/superfluid";
import * as _170 from "./superfluid/tx";
import * as _171 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _172 from "./tokenfactory/v1beta1/genesis";
import * as _173 from "./tokenfactory/v1beta1/params";
import * as _174 from "./tokenfactory/v1beta1/query";
import * as _175 from "./tokenfactory/v1beta1/tx";
import * as _176 from "./twap/v1beta1/genesis";
import * as _177 from "./twap/v1beta1/query";
import * as _178 from "./twap/v1beta1/twap_record";
import * as _179 from "./txfees/v1beta1/feetoken";
import * as _180 from "./txfees/v1beta1/genesis";
import * as _181 from "./txfees/v1beta1/gov";
import * as _182 from "./txfees/v1beta1/query";
import * as _297 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _298 from "./gamm/pool-models/stableswap/tx.amino";
import * as _299 from "./gamm/v1beta1/tx.amino";
import * as _300 from "./incentives/tx.amino";
import * as _301 from "./lockup/tx.amino";
import * as _302 from "./superfluid/tx.amino";
import * as _303 from "./tokenfactory/v1beta1/tx.amino";
import * as _304 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _305 from "./gamm/pool-models/stableswap/tx.registry";
import * as _306 from "./gamm/v1beta1/tx.registry";
import * as _307 from "./incentives/tx.registry";
import * as _308 from "./lockup/tx.registry";
import * as _309 from "./superfluid/tx.registry";
import * as _310 from "./tokenfactory/v1beta1/tx.registry";
import * as _311 from "./claim/v1beta1/query.lcd";
import * as _312 from "./epochs/query.lcd";
import * as _313 from "./gamm/v1beta1/query.lcd";
import * as _314 from "./gamm/v2/query.lcd";
import * as _315 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _316 from "./incentives/query.lcd";
import * as _317 from "./lockup/query.lcd";
import * as _318 from "./mint/v1beta1/query.lcd";
import * as _319 from "./pool-incentives/v1beta1/query.lcd";
import * as _320 from "./superfluid/query.lcd";
import * as _321 from "./tokenfactory/v1beta1/query.lcd";
import * as _322 from "./twap/v1beta1/query.lcd";
import * as _323 from "./txfees/v1beta1/query.lcd";
import * as _324 from "./claim/v1beta1/query.rpc.Query";
import * as _325 from "./epochs/query.rpc.Query";
import * as _326 from "./gamm/v1beta1/query.rpc.Query";
import * as _327 from "./gamm/v2/query.rpc.Query";
import * as _328 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _329 from "./incentives/query.rpc.Query";
import * as _330 from "./lockup/query.rpc.Query";
import * as _331 from "./mint/v1beta1/query.rpc.Query";
import * as _332 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _333 from "./superfluid/query.rpc.Query";
import * as _334 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _335 from "./twap/v1beta1/query.rpc.Query";
import * as _336 from "./txfees/v1beta1/query.rpc.Query";
import * as _337 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _338 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _339 from "./gamm/v1beta1/tx.rpc.msg";
import * as _340 from "./incentives/tx.rpc.msg";
import * as _341 from "./lockup/tx.rpc.msg";
import * as _342 from "./superfluid/tx.rpc.msg";
import * as _343 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _353 from "./lcd";
import * as _354 from "./rpc.query";
import * as _355 from "./rpc.tx";
export namespace osmosis {
  export namespace claim {
    export const v1beta1 = {
      ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._311,
      ..._324
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._136,
      ..._137,
      ..._312,
      ..._325
    };
  }
  export namespace gamm {
    export const v1beta1 = {
      ..._138,
      ..._139,
      ..._140,
      ..._141,
      ..._299,
      ..._306,
      ..._313,
      ..._326,
      ..._339
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._142,
          ..._297,
          ..._304,
          ..._337
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._143,
          ..._144,
          ..._298,
          ..._305,
          ..._338
        };
      }
    }
    export const v2 = {
      ..._145,
      ..._314,
      ..._327
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._146,
      ..._147,
      ..._315,
      ..._328
    };
  }
  export const incentives = {
    ..._148,
    ..._149,
    ..._150,
    ..._151,
    ..._152,
    ..._300,
    ..._307,
    ..._316,
    ..._329,
    ..._340
  };
  export const lockup = {
    ..._153,
    ..._154,
    ..._155,
    ..._156,
    ..._157,
    ..._301,
    ..._308,
    ..._317,
    ..._330,
    ..._341
  };
  export namespace mint {
    export const v1beta1 = {
      ..._158,
      ..._159,
      ..._160,
      ..._318,
      ..._331
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._161,
      ..._162,
      ..._163,
      ..._164,
      ..._319,
      ..._332
    };
  }
  export namespace store {
    export const v1beta1 = {
      ..._165
    };
  }
  export const superfluid = {
    ..._166,
    ..._167,
    ..._168,
    ..._169,
    ..._170,
    ..._302,
    ..._309,
    ..._320,
    ..._333,
    ..._342
  };
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._171,
      ..._172,
      ..._173,
      ..._174,
      ..._175,
      ..._303,
      ..._310,
      ..._321,
      ..._334,
      ..._343
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._176,
      ..._177,
      ..._178,
      ..._322,
      ..._335
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._179,
      ..._180,
      ..._181,
      ..._182,
      ..._323,
      ..._336
    };
  }
  export const ClientFactory = {
    ..._353,
    ..._354,
    ..._355
  };
}