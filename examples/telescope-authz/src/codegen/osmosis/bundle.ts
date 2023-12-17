import * as _132 from "./claim/v1beta1/claim";
import * as _133 from "./claim/v1beta1/genesis";
import * as _134 from "./claim/v1beta1/params";
import * as _135 from "./claim/v1beta1/query";
import * as _136 from "./epochs/genesis";
import * as _137 from "./epochs/query";
import * as _138 from "./gamm/pool-models/balancer/tx/tx";
import * as _139 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _140 from "./gamm/pool-models/stableswap/tx";
import * as _141 from "./gamm/v2/query";
import * as _142 from "./ibc-rate-limit/v1beta1/params";
import * as _143 from "./ibc-rate-limit/v1beta1/query";
import * as _144 from "./incentives/gauge";
import * as _145 from "./incentives/genesis";
import * as _146 from "./incentives/params";
import * as _147 from "./incentives/query";
import * as _148 from "./incentives/tx";
import * as _149 from "./lockup/genesis";
import * as _150 from "./lockup/lock";
import * as _151 from "./lockup/params";
import * as _152 from "./lockup/query";
import * as _153 from "./lockup/tx";
import * as _154 from "./mint/v1beta1/genesis";
import * as _155 from "./mint/v1beta1/mint";
import * as _156 from "./mint/v1beta1/query";
import * as _157 from "./pool-incentives/v1beta1/genesis";
import * as _158 from "./pool-incentives/v1beta1/gov";
import * as _159 from "./pool-incentives/v1beta1/incentives";
import * as _160 from "./pool-incentives/v1beta1/query";
import * as _161 from "./sumtree/v1beta1/tree";
import * as _162 from "./superfluid/genesis";
import * as _163 from "./superfluid/params";
import * as _164 from "./superfluid/query";
import * as _165 from "./superfluid/superfluid";
import * as _166 from "./superfluid/tx";
import * as _167 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _168 from "./tokenfactory/v1beta1/genesis";
import * as _169 from "./tokenfactory/v1beta1/params";
import * as _170 from "./tokenfactory/v1beta1/query";
import * as _171 from "./tokenfactory/v1beta1/tx";
import * as _172 from "./twap/v1beta1/genesis";
import * as _173 from "./twap/v1beta1/query";
import * as _174 from "./twap/v1beta1/twap_record";
import * as _175 from "./txfees/v1beta1/feetoken";
import * as _176 from "./txfees/v1beta1/genesis";
import * as _177 from "./txfees/v1beta1/gov";
import * as _178 from "./txfees/v1beta1/query";
import * as _271 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _272 from "./gamm/pool-models/stableswap/tx.amino";
import * as _273 from "./gamm/v1beta1/tx.amino";
import * as _274 from "./incentives/tx.amino";
import * as _275 from "./lockup/tx.amino";
import * as _276 from "./superfluid/tx.amino";
import * as _277 from "./tokenfactory/v1beta1/tx.amino";
import * as _278 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _279 from "./gamm/pool-models/stableswap/tx.registry";
import * as _280 from "./incentives/tx.registry";
import * as _281 from "./lockup/tx.registry";
import * as _282 from "./superfluid/tx.registry";
import * as _283 from "./tokenfactory/v1beta1/tx.registry";
import * as _284 from "./claim/v1beta1/query.rpc.Query";
import * as _285 from "./epochs/query.rpc.Query";
import * as _286 from "./gamm/v2/query.rpc.Query";
import * as _287 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _288 from "./incentives/query.rpc.Query";
import * as _289 from "./lockup/query.rpc.Query";
import * as _290 from "./mint/v1beta1/query.rpc.Query";
import * as _291 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _292 from "./superfluid/query.rpc.Query";
import * as _293 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _294 from "./twap/v1beta1/query.rpc.Query";
import * as _295 from "./txfees/v1beta1/query.rpc.Query";
import * as _296 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _297 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _298 from "./incentives/tx.rpc.msg";
import * as _299 from "./lockup/tx.rpc.msg";
import * as _300 from "./superfluid/tx.rpc.msg";
import * as _301 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _308 from "./rpc.query";
import * as _309 from "./rpc.tx";
export namespace osmosis {
  export namespace claim {
    export const v1beta1 = {
      ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._284
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._136,
      ..._137,
      ..._285
    };
  }
  export namespace gamm {
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._138,
          ..._271,
          ..._278,
          ..._296
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._139,
          ..._140,
          ..._272,
          ..._279,
          ..._297
        };
      }
    }
    export const v2 = {
      ..._141,
      ..._286
    };
    export const v1beta1 = {
      ..._273
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._142,
      ..._143,
      ..._287
    };
  }
  export const incentives = {
    ..._144,
    ..._145,
    ..._146,
    ..._147,
    ..._148,
    ..._274,
    ..._280,
    ..._288,
    ..._298
  };
  export const lockup = {
    ..._149,
    ..._150,
    ..._151,
    ..._152,
    ..._153,
    ..._275,
    ..._281,
    ..._289,
    ..._299
  };
  export namespace mint {
    export const v1beta1 = {
      ..._154,
      ..._155,
      ..._156,
      ..._290
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._157,
      ..._158,
      ..._159,
      ..._160,
      ..._291
    };
  }
  export namespace store {
    export const v1beta1 = {
      ..._161
    };
  }
  export const superfluid = {
    ..._162,
    ..._163,
    ..._164,
    ..._165,
    ..._166,
    ..._276,
    ..._282,
    ..._292,
    ..._300
  };
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._167,
      ..._168,
      ..._169,
      ..._170,
      ..._171,
      ..._277,
      ..._283,
      ..._293,
      ..._301
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._172,
      ..._173,
      ..._174,
      ..._294
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._175,
      ..._176,
      ..._177,
      ..._178,
      ..._295
    };
  }
  export const ClientFactory = {
    ..._308,
    ..._309
  };
}