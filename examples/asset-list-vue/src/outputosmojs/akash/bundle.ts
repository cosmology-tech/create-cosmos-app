import * as _0 from "./audit/v1beta1/audit";
import * as _1 from "./audit/v1beta2/audit";
import * as _2 from "./audit/v1beta2/genesis";
import * as _3 from "./audit/v1beta2/query";
import * as _4 from "./base/v1beta1/attribute";
import * as _5 from "./base/v1beta1/endpoint";
import * as _6 from "./base/v1beta1/resource";
import * as _7 from "./base/v1beta1/resourcevalue";
import * as _8 from "./base/v1beta2/attribute";
import * as _9 from "./base/v1beta2/endpoint";
import * as _10 from "./base/v1beta2/resource";
import * as _11 from "./base/v1beta2/resourceunits";
import * as _12 from "./base/v1beta2/resourcevalue";
import * as _13 from "./cert/v1beta2/cert";
import * as _14 from "./cert/v1beta2/genesis";
import * as _15 from "./cert/v1beta2/query";
import * as _16 from "./deployment/v1beta1/authz";
import * as _17 from "./deployment/v1beta1/deployment";
import * as _18 from "./deployment/v1beta1/genesis";
import * as _19 from "./deployment/v1beta1/group";
import * as _20 from "./deployment/v1beta1/params";
import * as _21 from "./deployment/v1beta1/query";
import * as _22 from "./deployment/v1beta2/authz";
import * as _23 from "./deployment/v1beta2/deployment";
import * as _24 from "./deployment/v1beta2/deploymentmsg";
import * as _25 from "./deployment/v1beta2/genesis";
import * as _26 from "./deployment/v1beta2/group";
import * as _27 from "./deployment/v1beta2/groupid";
import * as _28 from "./deployment/v1beta2/groupmsg";
import * as _29 from "./deployment/v1beta2/groupspec";
import * as _30 from "./deployment/v1beta2/params";
import * as _31 from "./deployment/v1beta2/query";
import * as _32 from "./deployment/v1beta2/resource";
import * as _33 from "./deployment/v1beta2/service";
import * as _34 from "./escrow/v1beta1/genesis";
import * as _35 from "./escrow/v1beta1/query";
import * as _36 from "./escrow/v1beta1/types";
import * as _37 from "./escrow/v1beta2/genesis";
import * as _38 from "./escrow/v1beta2/query";
import * as _39 from "./escrow/v1beta2/types";
import * as _40 from "./inflation/v1beta2/genesis";
import * as _41 from "./inflation/v1beta2/params";
import * as _42 from "./market/v1beta2/bid";
import * as _43 from "./market/v1beta2/genesis";
import * as _44 from "./market/v1beta2/lease";
import * as _45 from "./market/v1beta2/order";
import * as _46 from "./market/v1beta2/params";
import * as _47 from "./market/v1beta2/query";
import * as _48 from "./market/v1beta2/service";
import * as _49 from "./provider/v1beta1/provider";
import * as _50 from "./provider/v1beta2/genesis";
import * as _51 from "./provider/v1beta2/provider";
import * as _52 from "./provider/v1beta2/query";
import * as _366 from "./audit/v1beta1/audit.amino";
import * as _367 from "./audit/v1beta2/audit.amino";
import * as _368 from "./cert/v1beta2/cert.amino";
import * as _369 from "./deployment/v1beta2/service.amino";
import * as _370 from "./market/v1beta2/service.amino";
import * as _371 from "./provider/v1beta1/provider.amino";
import * as _372 from "./provider/v1beta2/provider.amino";
import * as _373 from "./audit/v1beta1/audit.registry";
import * as _374 from "./audit/v1beta2/audit.registry";
import * as _375 from "./cert/v1beta2/cert.registry";
import * as _376 from "./deployment/v1beta2/service.registry";
import * as _377 from "./market/v1beta2/service.registry";
import * as _378 from "./provider/v1beta1/provider.registry";
import * as _379 from "./provider/v1beta2/provider.registry";
import * as _380 from "./audit/v1beta2/query.lcd";
import * as _381 from "./cert/v1beta2/query.lcd";
import * as _382 from "./deployment/v1beta1/query.lcd";
import * as _383 from "./deployment/v1beta2/query.lcd";
import * as _384 from "./escrow/v1beta1/query.lcd";
import * as _385 from "./escrow/v1beta2/query.lcd";
import * as _386 from "./market/v1beta2/query.lcd";
import * as _387 from "./provider/v1beta2/query.lcd";
import * as _388 from "./audit/v1beta2/query.rpc.Query";
import * as _389 from "./cert/v1beta2/query.rpc.Query";
import * as _390 from "./deployment/v1beta2/query.rpc.Query";
import * as _391 from "./escrow/v1beta1/query.rpc.Query";
import * as _392 from "./escrow/v1beta2/query.rpc.Query";
import * as _393 from "./market/v1beta2/query.rpc.Query";
import * as _394 from "./provider/v1beta2/query.rpc.Query";
import * as _395 from "./audit/v1beta1/audit.rpc.msg";
import * as _396 from "./audit/v1beta2/audit.rpc.msg";
import * as _397 from "./cert/v1beta2/cert.rpc.msg";
import * as _398 from "./deployment/v1beta2/service.rpc.msg";
import * as _399 from "./market/v1beta2/service.rpc.msg";
import * as _400 from "./provider/v1beta1/provider.rpc.msg";
import * as _401 from "./provider/v1beta2/provider.rpc.msg";
import * as _402 from "./cert/v1beta2/query.pinia.store";
import * as _624 from "./lcd";
import * as _625 from "./rpc.query";
import * as _626 from "./rpc.tx";
export namespace akash {
  export namespace audit {
    export const v1beta1 = {
      ..._0,
      ..._366,
      ..._373,
      ..._395
    };
    export const v1beta2 = {
      ..._1,
      ..._2,
      ..._3,
      ..._367,
      ..._374,
      ..._380,
      ..._388,
      ..._396
    };
  }
  export namespace base {
    export const v1beta1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._7
    };
    export const v1beta2 = {
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._12
    };
  }
  export namespace cert {
    export const v1beta2 = {
      ..._13,
      ..._14,
      ..._15,
      ..._368,
      ..._375,
      ..._381,
      ..._389,
      ..._397,
      ..._402
    };
  }
  export namespace deployment {
    export const v1beta1 = {
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._382
    };
    export const v1beta2 = {
      ..._22,
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._369,
      ..._376,
      ..._383,
      ..._390,
      ..._398
    };
  }
  export namespace escrow {
    export const v1beta1 = {
      ..._34,
      ..._35,
      ..._36,
      ..._384,
      ..._391
    };
    export const v1beta2 = {
      ..._37,
      ..._38,
      ..._39,
      ..._385,
      ..._392
    };
  }
  export namespace inflation {
    export const v1beta2 = {
      ..._40,
      ..._41
    };
  }
  export namespace market {
    export const v1beta2 = {
      ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._370,
      ..._377,
      ..._386,
      ..._393,
      ..._399
    };
  }
  export namespace provider {
    export const v1beta1 = {
      ..._49,
      ..._371,
      ..._378,
      ..._400
    };
    export const v1beta2 = {
      ..._50,
      ..._51,
      ..._52,
      ..._372,
      ..._379,
      ..._387,
      ..._394,
      ..._401
    };
  }
  export const ClientFactory = {
    ..._624,
    ..._625,
    ..._626
  };
}