import * as _254 from "./claim/v1beta1/claim";
import * as _255 from "./claim/v1beta1/genesis";
import * as _256 from "./claim/v1beta1/params";
import * as _257 from "./claim/v1beta1/query";
import * as _258 from "./epochs/genesis";
import * as _259 from "./epochs/query";
import * as _260 from "./gamm/pool-models/balancer/balancerPool";
import * as _261 from "./gamm/v1beta1/genesis";
import * as _262 from "./gamm/v1beta1/query";
import * as _263 from "./gamm/v1beta1/tx";
import * as _264 from "./gamm/pool-models/balancer/tx/tx";
import * as _265 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _266 from "./gamm/pool-models/stableswap/tx";
import * as _267 from "./gamm/v2/query";
import * as _268 from "./ibc-rate-limit/v1beta1/params";
import * as _269 from "./ibc-rate-limit/v1beta1/query";
import * as _270 from "./incentives/gauge";
import * as _271 from "./incentives/genesis";
import * as _272 from "./incentives/params";
import * as _273 from "./incentives/query";
import * as _274 from "./incentives/tx";
import * as _275 from "./lockup/genesis";
import * as _276 from "./lockup/lock";
import * as _277 from "./lockup/params";
import * as _278 from "./lockup/query";
import * as _279 from "./lockup/tx";
import * as _280 from "./mint/v1beta1/genesis";
import * as _281 from "./mint/v1beta1/mint";
import * as _282 from "./mint/v1beta1/query";
import * as _283 from "./pool-incentives/v1beta1/genesis";
import * as _284 from "./pool-incentives/v1beta1/gov";
import * as _285 from "./pool-incentives/v1beta1/incentives";
import * as _286 from "./pool-incentives/v1beta1/query";
import * as _287 from "./sumtree/v1beta1/tree";
import * as _288 from "./superfluid/genesis";
import * as _289 from "./superfluid/params";
import * as _290 from "./superfluid/query";
import * as _291 from "./superfluid/superfluid";
import * as _292 from "./superfluid/tx";
import * as _293 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _294 from "./tokenfactory/v1beta1/genesis";
import * as _295 from "./tokenfactory/v1beta1/params";
import * as _296 from "./tokenfactory/v1beta1/query";
import * as _297 from "./tokenfactory/v1beta1/tx";
import * as _298 from "./twap/v1beta1/genesis";
import * as _299 from "./twap/v1beta1/query";
import * as _300 from "./twap/v1beta1/twap_record";
import * as _301 from "./txfees/v1beta1/feetoken";
import * as _302 from "./txfees/v1beta1/genesis";
import * as _303 from "./txfees/v1beta1/gov";
import * as _304 from "./txfees/v1beta1/query";
import * as _484 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _485 from "./gamm/pool-models/stableswap/tx.amino";
import * as _486 from "./gamm/v1beta1/tx.amino";
import * as _487 from "./incentives/tx.amino";
import * as _488 from "./lockup/tx.amino";
import * as _489 from "./superfluid/tx.amino";
import * as _490 from "./tokenfactory/v1beta1/tx.amino";
import * as _491 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _492 from "./gamm/pool-models/stableswap/tx.registry";
import * as _493 from "./gamm/v1beta1/tx.registry";
import * as _494 from "./incentives/tx.registry";
import * as _495 from "./lockup/tx.registry";
import * as _496 from "./superfluid/tx.registry";
import * as _497 from "./tokenfactory/v1beta1/tx.registry";
import * as _498 from "./claim/v1beta1/query.lcd";
import * as _499 from "./epochs/query.lcd";
import * as _500 from "./gamm/v1beta1/query.lcd";
import * as _501 from "./gamm/v2/query.lcd";
import * as _502 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _503 from "./incentives/query.lcd";
import * as _504 from "./lockup/query.lcd";
import * as _505 from "./mint/v1beta1/query.lcd";
import * as _506 from "./pool-incentives/v1beta1/query.lcd";
import * as _507 from "./superfluid/query.lcd";
import * as _508 from "./tokenfactory/v1beta1/query.lcd";
import * as _509 from "./twap/v1beta1/query.lcd";
import * as _510 from "./txfees/v1beta1/query.lcd";
import * as _511 from "./claim/v1beta1/query.rpc.Query";
import * as _512 from "./epochs/query.rpc.Query";
import * as _513 from "./gamm/v1beta1/query.rpc.Query";
import * as _514 from "./gamm/v2/query.rpc.Query";
import * as _515 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _516 from "./incentives/query.rpc.Query";
import * as _517 from "./lockup/query.rpc.Query";
import * as _518 from "./mint/v1beta1/query.rpc.Query";
import * as _519 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _520 from "./superfluid/query.rpc.Query";
import * as _521 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _522 from "./twap/v1beta1/query.rpc.Query";
import * as _523 from "./txfees/v1beta1/query.rpc.Query";
import * as _524 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _525 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _526 from "./gamm/v1beta1/tx.rpc.msg";
import * as _527 from "./incentives/tx.rpc.msg";
import * as _528 from "./lockup/tx.rpc.msg";
import * as _529 from "./superfluid/tx.rpc.msg";
import * as _530 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _546 from "./lcd";
import * as _547 from "./rpc.query";
import * as _548 from "./rpc.tx";
export namespace osmosis {
  export namespace claim {
    export const v1beta1 = {
      ..._254,
      ..._255,
      ..._256,
      ..._257,
      ..._498,
      ..._511
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._258,
      ..._259,
      ..._499,
      ..._512
    };
  }
  export namespace gamm {
    export const v1beta1 = {
      ..._260,
      ..._261,
      ..._262,
      ..._263,
      ..._486,
      ..._493,
      ..._500,
      ..._513,
      ..._526
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._264,
          ..._484,
          ..._491,
          ..._524
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._265,
          ..._266,
          ..._485,
          ..._492,
          ..._525
        };
      }
    }
    export const v2 = {
      ..._267,
      ..._501,
      ..._514
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._268,
      ..._269,
      ..._502,
      ..._515
    };
  }
  export const incentives = {
    ..._270,
    ..._271,
    ..._272,
    ..._273,
    ..._274,
    ..._487,
    ..._494,
    ..._503,
    ..._516,
    ..._527
  };
  export const lockup = {
    ..._275,
    ..._276,
    ..._277,
    ..._278,
    ..._279,
    ..._488,
    ..._495,
    ..._504,
    ..._517,
    ..._528
  };
  export namespace mint {
    export const v1beta1 = {
      ..._280,
      ..._281,
      ..._282,
      ..._505,
      ..._518
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._283,
      ..._284,
      ..._285,
      ..._286,
      ..._506,
      ..._519
    };
  }
  export namespace store {
    export const v1beta1 = {
      ..._287
    };
  }
  export const superfluid = {
    ..._288,
    ..._289,
    ..._290,
    ..._291,
    ..._292,
    ..._489,
    ..._496,
    ..._507,
    ..._520,
    ..._529
  };
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._293,
      ..._294,
      ..._295,
      ..._296,
      ..._297,
      ..._490,
      ..._497,
      ..._508,
      ..._521,
      ..._530
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._298,
      ..._299,
      ..._300,
      ..._509,
      ..._522
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._301,
      ..._302,
      ..._303,
      ..._304,
      ..._510,
      ..._523
    };
  }
  export const ClientFactory = {
    ..._546,
    ..._547,
    ..._548
  };
}