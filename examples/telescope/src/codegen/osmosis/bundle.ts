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
import * as _275 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _276 from "./gamm/pool-models/stableswap/tx.amino";
import * as _277 from "./gamm/v1beta1/tx.amino";
import * as _278 from "./incentives/tx.amino";
import * as _279 from "./lockup/tx.amino";
import * as _280 from "./superfluid/tx.amino";
import * as _281 from "./tokenfactory/v1beta1/tx.amino";
import * as _282 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _283 from "./gamm/pool-models/stableswap/tx.registry";
import * as _284 from "./gamm/v1beta1/tx.registry";
import * as _285 from "./incentives/tx.registry";
import * as _286 from "./lockup/tx.registry";
import * as _287 from "./superfluid/tx.registry";
import * as _288 from "./tokenfactory/v1beta1/tx.registry";
import * as _289 from "./claim/v1beta1/query.rpc.Query";
import * as _290 from "./epochs/query.rpc.Query";
import * as _291 from "./gamm/v1beta1/query.rpc.Query";
import * as _292 from "./gamm/v2/query.rpc.Query";
import * as _293 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _294 from "./incentives/query.rpc.Query";
import * as _295 from "./lockup/query.rpc.Query";
import * as _296 from "./mint/v1beta1/query.rpc.Query";
import * as _297 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _298 from "./superfluid/query.rpc.Query";
import * as _299 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _300 from "./twap/v1beta1/query.rpc.Query";
import * as _301 from "./txfees/v1beta1/query.rpc.Query";
import * as _302 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _303 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _304 from "./gamm/v1beta1/tx.rpc.msg";
import * as _305 from "./incentives/tx.rpc.msg";
import * as _306 from "./lockup/tx.rpc.msg";
import * as _307 from "./superfluid/tx.rpc.msg";
import * as _308 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _315 from "./rpc.query";
import * as _316 from "./rpc.tx";
export namespace osmosis {
  export namespace claim {
    export const v1beta1 = {
      ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._289
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._136,
      ..._137,
      ..._290
    };
  }
  export namespace gamm {
    export const v1beta1 = {
      ..._138,
      ..._139,
      ..._140,
      ..._141,
      ..._277,
      ..._284,
      ..._291,
      ..._304
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._142,
          ..._275,
          ..._282,
          ..._302
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._143,
          ..._144,
          ..._276,
          ..._283,
          ..._303
        };
      }
    }
    export const v2 = {
      ..._145,
      ..._292
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._146,
      ..._147,
      ..._293
    };
  }
  export const incentives = {
    ..._148,
    ..._149,
    ..._150,
    ..._151,
    ..._152,
    ..._278,
    ..._285,
    ..._294,
    ..._305
  };
  export const lockup = {
    ..._153,
    ..._154,
    ..._155,
    ..._156,
    ..._157,
    ..._279,
    ..._286,
    ..._295,
    ..._306
  };
  export namespace mint {
    export const v1beta1 = {
      ..._158,
      ..._159,
      ..._160,
      ..._296
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._161,
      ..._162,
      ..._163,
      ..._164,
      ..._297
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
    ..._280,
    ..._287,
    ..._298,
    ..._307
  };
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._171,
      ..._172,
      ..._173,
      ..._174,
      ..._175,
      ..._281,
      ..._288,
      ..._299,
      ..._308
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._176,
      ..._177,
      ..._178,
      ..._300
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._179,
      ..._180,
      ..._181,
      ..._182,
      ..._301
    };
  }
  export const ClientFactory = {
    ..._315,
    ..._316
  };
}