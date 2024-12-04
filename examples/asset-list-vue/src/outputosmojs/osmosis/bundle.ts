import * as _275 from "./claim/v1beta1/claim";
import * as _276 from "./claim/v1beta1/genesis";
import * as _277 from "./claim/v1beta1/params";
import * as _278 from "./claim/v1beta1/query";
import * as _279 from "./epochs/genesis";
import * as _280 from "./epochs/query";
import * as _281 from "./gamm/pool-models/balancer/balancerPool";
import * as _282 from "./gamm/v1beta1/genesis";
import * as _283 from "./gamm/v1beta1/query";
import * as _284 from "./gamm/v1beta1/tx";
import * as _285 from "./gamm/v1beta1/gov";
import * as _286 from "./gamm/pool-models/balancer/tx/tx";
import * as _287 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _288 from "./gamm/pool-models/stableswap/tx";
import * as _289 from "./gamm/v2/query";
import * as _290 from "./ibc-rate-limit/v1beta1/params";
import * as _291 from "./ibc-rate-limit/v1beta1/query";
import * as _292 from "./ibc-rate-limit/v1beta1/genesis";
import * as _293 from "./incentives/gauge";
import * as _294 from "./incentives/genesis";
import * as _295 from "./incentives/params";
import * as _296 from "./incentives/query";
import * as _297 from "./incentives/tx";
import * as _298 from "./lockup/genesis";
import * as _299 from "./lockup/lock";
import * as _300 from "./lockup/params";
import * as _301 from "./lockup/query";
import * as _302 from "./lockup/tx";
import * as _303 from "./mint/v1beta1/genesis";
import * as _304 from "./mint/v1beta1/mint";
import * as _305 from "./mint/v1beta1/query";
import * as _306 from "./pool-incentives/v1beta1/genesis";
import * as _307 from "./pool-incentives/v1beta1/gov";
import * as _308 from "./pool-incentives/v1beta1/incentives";
import * as _309 from "./pool-incentives/v1beta1/query";
import * as _310 from "./sumtree/v1beta1/tree";
import * as _311 from "./superfluid/genesis";
import * as _312 from "./superfluid/params";
import * as _313 from "./superfluid/query";
import * as _314 from "./superfluid/superfluid";
import * as _315 from "./superfluid/tx";
import * as _316 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _317 from "./tokenfactory/v1beta1/genesis";
import * as _318 from "./tokenfactory/v1beta1/params";
import * as _319 from "./tokenfactory/v1beta1/query";
import * as _320 from "./tokenfactory/v1beta1/tx";
import * as _321 from "./twap/v1beta1/genesis";
import * as _322 from "./twap/v1beta1/query";
import * as _323 from "./twap/v1beta1/twap_record";
import * as _324 from "./txfees/v1beta1/feetoken";
import * as _325 from "./txfees/v1beta1/genesis";
import * as _326 from "./txfees/v1beta1/gov";
import * as _327 from "./txfees/v1beta1/query";
import * as _328 from "./accum/v1beta1/accum";
import * as _329 from "./concentrated-liquidity/params";
import * as _330 from "./cosmwasmpool/v1beta1/genesis";
import * as _331 from "./cosmwasmpool/v1beta1/model/pool";
import * as _332 from "./cosmwasmpool/v1beta1/model/tx";
import * as _333 from "./cosmwasmpool/v1beta1/query";
import * as _334 from "./cosmwasmpool/v1beta1/tx";
import * as _335 from "./downtime-detector/v1beta1/downtime_duration";
import * as _336 from "./downtime-detector/v1beta1/genesis";
import * as _337 from "./downtime-detector/v1beta1/query";
import * as _338 from "./poolmanager/v1beta1/genesis";
import * as _339 from "./poolmanager/v1beta1/module_route";
import * as _340 from "./poolmanager/v1beta1/query";
import * as _341 from "./poolmanager/v1beta1/swap_route";
import * as _342 from "./poolmanager/v1beta1/tx";
import * as _343 from "./protorev/v1beta1/genesis";
import * as _344 from "./protorev/v1beta1/gov";
import * as _345 from "./protorev/v1beta1/params";
import * as _346 from "./protorev/v1beta1/protorev";
import * as _347 from "./protorev/v1beta1/query";
import * as _348 from "./protorev/v1beta1/tx";
import * as _349 from "./valset-pref/v1beta1/query";
import * as _350 from "./valset-pref/v1beta1/state";
import * as _351 from "./valset-pref/v1beta1/tx";
import * as _550 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _551 from "./gamm/pool-models/stableswap/tx.amino";
import * as _552 from "./gamm/v1beta1/tx.amino";
import * as _553 from "./incentives/tx.amino";
import * as _554 from "./lockup/tx.amino";
import * as _555 from "./superfluid/tx.amino";
import * as _556 from "./tokenfactory/v1beta1/tx.amino";
import * as _557 from "./concentrated-liquidity/tx.amino";
import * as _558 from "./poolmanager/v1beta1/tx.amino";
import * as _559 from "./protorev/v1beta1/tx.amino";
import * as _560 from "./valset-pref/v1beta1/tx.amino";
import * as _561 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _562 from "./gamm/pool-models/stableswap/tx.registry";
import * as _563 from "./gamm/v1beta1/tx.registry";
import * as _564 from "./incentives/tx.registry";
import * as _565 from "./lockup/tx.registry";
import * as _566 from "./superfluid/tx.registry";
import * as _567 from "./tokenfactory/v1beta1/tx.registry";
import * as _568 from "./concentrated-liquidity/tx.registry";
import * as _569 from "./poolmanager/v1beta1/tx.registry";
import * as _570 from "./protorev/v1beta1/tx.registry";
import * as _571 from "./valset-pref/v1beta1/tx.registry";
import * as _572 from "./claim/v1beta1/query.lcd";
import * as _573 from "./epochs/query.lcd";
import * as _574 from "./gamm/v1beta1/query.lcd";
import * as _575 from "./gamm/v2/query.lcd";
import * as _576 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _577 from "./incentives/query.lcd";
import * as _578 from "./lockup/query.lcd";
import * as _579 from "./mint/v1beta1/query.lcd";
import * as _580 from "./pool-incentives/v1beta1/query.lcd";
import * as _581 from "./superfluid/query.lcd";
import * as _582 from "./tokenfactory/v1beta1/query.lcd";
import * as _583 from "./twap/v1beta1/query.lcd";
import * as _584 from "./txfees/v1beta1/query.lcd";
import * as _585 from "./concentrated-liquidity/pool-model/query.lcd";
import * as _586 from "./cosmwasmpool/v1beta1/query.lcd";
import * as _587 from "./downtime-detector/v1beta1/query.lcd";
import * as _588 from "./poolmanager/v1beta1/query.lcd";
import * as _589 from "./protorev/v1beta1/query.lcd";
import * as _590 from "./valset-pref/v1beta1/query.lcd";
import * as _591 from "./claim/v1beta1/query.rpc.Query";
import * as _592 from "./epochs/query.rpc.Query";
import * as _593 from "./gamm/v1beta1/query.rpc.Query";
import * as _594 from "./gamm/v2/query.rpc.Query";
import * as _595 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _596 from "./incentives/query.rpc.Query";
import * as _597 from "./lockup/query.rpc.Query";
import * as _598 from "./mint/v1beta1/query.rpc.Query";
import * as _599 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _600 from "./superfluid/query.rpc.Query";
import * as _601 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _602 from "./twap/v1beta1/query.rpc.Query";
import * as _603 from "./txfees/v1beta1/query.rpc.Query";
import * as _604 from "./concentrated-liquidity/pool-model/query.rpc.Query";
import * as _605 from "./cosmwasmpool/v1beta1/query.rpc.Query";
import * as _606 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _607 from "./poolmanager/v1beta1/query.rpc.Query";
import * as _608 from "./protorev/v1beta1/query.rpc.Query";
import * as _609 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _610 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _611 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _612 from "./gamm/v1beta1/tx.rpc.msg";
import * as _613 from "./incentives/tx.rpc.msg";
import * as _614 from "./lockup/tx.rpc.msg";
import * as _615 from "./superfluid/tx.rpc.msg";
import * as _616 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _617 from "./concentrated-liquidity/tx.rpc.msg";
import * as _618 from "./poolmanager/v1beta1/tx.rpc.msg";
import * as _619 from "./protorev/v1beta1/tx.rpc.msg";
import * as _620 from "./valset-pref/v1beta1/tx.rpc.msg";
import * as _621 from "./gamm/v1beta1/query.pinia.store";
import * as _622 from "./gamm/v2/query.pinia.store";
import * as _644 from "./lcd";
import * as _645 from "./custom-lcd-client";
import * as _646 from "./rpc.query";
import * as _647 from "./rpc.tx";
export namespace osmosis {
  export namespace claim {
    export const v1beta1 = {
      ..._275,
      ..._276,
      ..._277,
      ..._278,
      ..._572,
      ..._591
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._279,
      ..._280,
      ..._573,
      ..._592
    };
  }
  export namespace gamm {
    export const v1beta1 = {
      ..._281,
      ..._282,
      ..._283,
      ..._284,
      ..._285,
      ..._552,
      ..._563,
      ..._574,
      ..._593,
      ..._612,
      ..._621
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._286,
          ..._550,
          ..._561,
          ..._610
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._287,
          ..._288,
          ..._551,
          ..._562,
          ..._611
        };
      }
    }
    export const v2 = {
      ..._289,
      ..._575,
      ..._594,
      ..._622
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._290,
      ..._291,
      ..._292,
      ..._576,
      ..._595
    };
  }
  export const incentives = {
    ..._293,
    ..._294,
    ..._295,
    ..._296,
    ..._297,
    ..._553,
    ..._564,
    ..._577,
    ..._596,
    ..._613
  };
  export const lockup = {
    ..._298,
    ..._299,
    ..._300,
    ..._301,
    ..._302,
    ..._554,
    ..._565,
    ..._578,
    ..._597,
    ..._614
  };
  export namespace mint {
    export const v1beta1 = {
      ..._303,
      ..._304,
      ..._305,
      ..._579,
      ..._598
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._306,
      ..._307,
      ..._308,
      ..._309,
      ..._580,
      ..._599
    };
  }
  export namespace store {
    export const v1beta1 = {
      ..._310
    };
  }
  export const superfluid = {
    ..._311,
    ..._312,
    ..._313,
    ..._314,
    ..._315,
    ..._555,
    ..._566,
    ..._581,
    ..._600,
    ..._615
  };
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._316,
      ..._317,
      ..._318,
      ..._319,
      ..._320,
      ..._556,
      ..._567,
      ..._582,
      ..._601,
      ..._616
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._321,
      ..._322,
      ..._323,
      ..._583,
      ..._602
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._324,
      ..._325,
      ..._326,
      ..._327,
      ..._584,
      ..._603
    };
  }
  export namespace accum {
    export const v1beta1 = {
      ..._328
    };
  }
  export const concentratedliquidity = {
    ..._329,
    v1beta1: {
      ..._557,
      ..._568,
      ..._585,
      ..._604,
      ..._617
    }
  };
  export namespace cosmwasmpool {
    export const v1beta1 = {
      ..._330,
      ..._331,
      ..._332,
      ..._333,
      ..._334,
      ..._586,
      ..._605
    };
  }
  export namespace downtimedetector {
    export const v1beta1 = {
      ..._335,
      ..._336,
      ..._337,
      ..._587,
      ..._606
    };
  }
  export namespace poolmanager {
    export const v1beta1 = {
      ..._338,
      ..._339,
      ..._340,
      ..._341,
      ..._342,
      ..._558,
      ..._569,
      ..._588,
      ..._607,
      ..._618
    };
  }
  export namespace protorev {
    export const v1beta1 = {
      ..._343,
      ..._344,
      ..._345,
      ..._346,
      ..._347,
      ..._348,
      ..._559,
      ..._570,
      ..._589,
      ..._608,
      ..._619
    };
  }
  export namespace valsetpref {
    export const v1beta1 = {
      ..._349,
      ..._350,
      ..._351,
      ..._560,
      ..._571,
      ..._590,
      ..._609,
      ..._620
    };
  }
  export const ClientFactory = {
    ..._644,
    ..._645,
    ..._646,
    ..._647
  };
}