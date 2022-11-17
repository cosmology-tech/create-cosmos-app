import * as _2 from "./app/v1alpha1/config";
import * as _3 from "./app/v1alpha1/module";
import * as _4 from "./app/v1alpha1/query";
import * as _5 from "./auth/v1beta1/auth";
import * as _6 from "./auth/v1beta1/genesis";
import * as _7 from "./auth/v1beta1/query";
import * as _8 from "./authz/v1beta1/authz";
import * as _9 from "./authz/v1beta1/event";
import * as _10 from "./authz/v1beta1/genesis";
import * as _11 from "./authz/v1beta1/query";
import * as _12 from "./authz/v1beta1/tx";
import * as _13 from "./bank/v1beta1/authz";
import * as _14 from "./bank/v1beta1/bank";
import * as _15 from "./bank/v1beta1/genesis";
import * as _16 from "./bank/v1beta1/query";
import * as _17 from "./bank/v1beta1/tx";
import * as _18 from "./base/abci/v1beta1/abci";
import * as _19 from "./base/kv/v1beta1/kv";
import * as _20 from "./base/query/v1beta1/pagination";
import * as _21 from "./base/reflection/v1beta1/reflection";
import * as _22 from "./base/reflection/v2alpha1/reflection";
import * as _23 from "./base/snapshots/v1beta1/snapshot";
import * as _24 from "./base/store/v1beta1/commit_info";
import * as _25 from "./base/store/v1beta1/listening";
import * as _26 from "./base/tendermint/v1beta1/query";
import * as _27 from "./base/v1beta1/coin";
import * as _28 from "./capability/v1beta1/capability";
import * as _29 from "./capability/v1beta1/genesis";
import * as _30 from "./crisis/v1beta1/genesis";
import * as _31 from "./crisis/v1beta1/tx";
import * as _32 from "./crypto/ed25519/keys";
import * as _33 from "./crypto/hd/v1/hd";
import * as _34 from "./crypto/keyring/v1/record";
import * as _35 from "./crypto/multisig/keys";
import * as _36 from "./crypto/secp256k1/keys";
import * as _37 from "./crypto/secp256r1/keys";
import * as _38 from "./distribution/v1beta1/distribution";
import * as _39 from "./distribution/v1beta1/genesis";
import * as _40 from "./distribution/v1beta1/query";
import * as _41 from "./distribution/v1beta1/tx";
import * as _42 from "./evidence/v1beta1/evidence";
import * as _43 from "./evidence/v1beta1/genesis";
import * as _44 from "./evidence/v1beta1/query";
import * as _45 from "./evidence/v1beta1/tx";
import * as _46 from "./feegrant/v1beta1/feegrant";
import * as _47 from "./feegrant/v1beta1/genesis";
import * as _48 from "./feegrant/v1beta1/query";
import * as _49 from "./feegrant/v1beta1/tx";
import * as _50 from "./genutil/v1beta1/genesis";
import * as _51 from "./gov/v1/genesis";
import * as _52 from "./gov/v1/gov";
import * as _53 from "./gov/v1/query";
import * as _54 from "./gov/v1/tx";
import * as _55 from "./gov/v1beta1/genesis";
import * as _56 from "./gov/v1beta1/gov";
import * as _57 from "./gov/v1beta1/query";
import * as _58 from "./gov/v1beta1/tx";
import * as _59 from "./group/v1/events";
import * as _60 from "./group/v1/genesis";
import * as _61 from "./group/v1/query";
import * as _62 from "./group/v1/tx";
import * as _63 from "./group/v1/types";
import * as _64 from "./mint/v1beta1/genesis";
import * as _65 from "./mint/v1beta1/mint";
import * as _66 from "./mint/v1beta1/query";
import * as _67 from "./msg/v1/msg";
import * as _68 from "./nft/v1beta1/event";
import * as _69 from "./nft/v1beta1/genesis";
import * as _70 from "./nft/v1beta1/nft";
import * as _71 from "./nft/v1beta1/query";
import * as _72 from "./nft/v1beta1/tx";
import * as _73 from "./orm/v1/orm";
import * as _74 from "./orm/v1alpha1/schema";
import * as _75 from "./params/v1beta1/params";
import * as _76 from "./params/v1beta1/query";
import * as _77 from "./slashing/v1beta1/genesis";
import * as _78 from "./slashing/v1beta1/query";
import * as _79 from "./slashing/v1beta1/slashing";
import * as _80 from "./slashing/v1beta1/tx";
import * as _81 from "./staking/v1beta1/authz";
import * as _82 from "./staking/v1beta1/genesis";
import * as _83 from "./staking/v1beta1/query";
import * as _84 from "./staking/v1beta1/staking";
import * as _85 from "./staking/v1beta1/tx";
import * as _86 from "./tx/signing/v1beta1/signing";
import * as _87 from "./tx/v1beta1/service";
import * as _88 from "./tx/v1beta1/tx";
import * as _89 from "./upgrade/v1beta1/query";
import * as _90 from "./upgrade/v1beta1/tx";
import * as _91 from "./upgrade/v1beta1/upgrade";
import * as _92 from "./vesting/v1beta1/tx";
import * as _93 from "./vesting/v1beta1/vesting";
import * as _143 from "./authz/v1beta1/tx.amino";
import * as _144 from "./bank/v1beta1/tx.amino";
import * as _145 from "./crisis/v1beta1/tx.amino";
import * as _146 from "./distribution/v1beta1/tx.amino";
import * as _147 from "./evidence/v1beta1/tx.amino";
import * as _148 from "./feegrant/v1beta1/tx.amino";
import * as _149 from "./gov/v1/tx.amino";
import * as _150 from "./gov/v1beta1/tx.amino";
import * as _151 from "./group/v1/tx.amino";
import * as _152 from "./nft/v1beta1/tx.amino";
import * as _153 from "./slashing/v1beta1/tx.amino";
import * as _154 from "./staking/v1beta1/tx.amino";
import * as _155 from "./upgrade/v1beta1/tx.amino";
import * as _156 from "./vesting/v1beta1/tx.amino";
import * as _157 from "./authz/v1beta1/tx.registry";
import * as _158 from "./bank/v1beta1/tx.registry";
import * as _159 from "./crisis/v1beta1/tx.registry";
import * as _160 from "./distribution/v1beta1/tx.registry";
import * as _161 from "./evidence/v1beta1/tx.registry";
import * as _162 from "./feegrant/v1beta1/tx.registry";
import * as _163 from "./gov/v1/tx.registry";
import * as _164 from "./gov/v1beta1/tx.registry";
import * as _165 from "./group/v1/tx.registry";
import * as _166 from "./nft/v1beta1/tx.registry";
import * as _167 from "./slashing/v1beta1/tx.registry";
import * as _168 from "./staking/v1beta1/tx.registry";
import * as _169 from "./upgrade/v1beta1/tx.registry";
import * as _170 from "./vesting/v1beta1/tx.registry";
import * as _171 from "./auth/v1beta1/query.lcd";
import * as _172 from "./authz/v1beta1/query.lcd";
import * as _173 from "./bank/v1beta1/query.lcd";
import * as _174 from "./base/tendermint/v1beta1/query.lcd";
import * as _175 from "./distribution/v1beta1/query.lcd";
import * as _176 from "./evidence/v1beta1/query.lcd";
import * as _177 from "./feegrant/v1beta1/query.lcd";
import * as _178 from "./gov/v1/query.lcd";
import * as _179 from "./gov/v1beta1/query.lcd";
import * as _180 from "./group/v1/query.lcd";
import * as _181 from "./mint/v1beta1/query.lcd";
import * as _182 from "./nft/v1beta1/query.lcd";
import * as _183 from "./params/v1beta1/query.lcd";
import * as _184 from "./slashing/v1beta1/query.lcd";
import * as _185 from "./staking/v1beta1/query.lcd";
import * as _186 from "./tx/v1beta1/service.lcd";
import * as _187 from "./upgrade/v1beta1/query.lcd";
import * as _188 from "./app/v1alpha1/query.rpc.Query";
import * as _189 from "./auth/v1beta1/query.rpc.Query";
import * as _190 from "./authz/v1beta1/query.rpc.Query";
import * as _191 from "./bank/v1beta1/query.rpc.Query";
import * as _192 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _193 from "./distribution/v1beta1/query.rpc.Query";
import * as _194 from "./evidence/v1beta1/query.rpc.Query";
import * as _195 from "./feegrant/v1beta1/query.rpc.Query";
import * as _196 from "./gov/v1/query.rpc.Query";
import * as _197 from "./gov/v1beta1/query.rpc.Query";
import * as _198 from "./group/v1/query.rpc.Query";
import * as _199 from "./mint/v1beta1/query.rpc.Query";
import * as _200 from "./nft/v1beta1/query.rpc.Query";
import * as _201 from "./params/v1beta1/query.rpc.Query";
import * as _202 from "./slashing/v1beta1/query.rpc.Query";
import * as _203 from "./staking/v1beta1/query.rpc.Query";
import * as _204 from "./tx/v1beta1/service.rpc.Service";
import * as _205 from "./upgrade/v1beta1/query.rpc.Query";
import * as _206 from "./authz/v1beta1/tx.rpc.msg";
import * as _207 from "./bank/v1beta1/tx.rpc.msg";
import * as _208 from "./crisis/v1beta1/tx.rpc.msg";
import * as _209 from "./distribution/v1beta1/tx.rpc.msg";
import * as _210 from "./evidence/v1beta1/tx.rpc.msg";
import * as _211 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _212 from "./gov/v1/tx.rpc.msg";
import * as _213 from "./gov/v1beta1/tx.rpc.msg";
import * as _214 from "./group/v1/tx.rpc.msg";
import * as _215 from "./nft/v1beta1/tx.rpc.msg";
import * as _216 from "./slashing/v1beta1/tx.rpc.msg";
import * as _217 from "./staking/v1beta1/tx.rpc.msg";
import * as _218 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _219 from "./vesting/v1beta1/tx.rpc.msg";
import * as _246 from "./lcd";
import * as _247 from "./rpc.query";
import * as _248 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export const v1alpha1 = { ..._2,
      ..._3,
      ..._4,
      ..._188
    };
  }
  export namespace auth {
    export const v1beta1 = { ..._5,
      ..._6,
      ..._7,
      ..._171,
      ..._189
    };
  }
  export namespace authz {
    export const v1beta1 = { ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._143,
      ..._157,
      ..._172,
      ..._190,
      ..._206
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._17,
      ..._144,
      ..._158,
      ..._173,
      ..._191,
      ..._207
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._18
      };
    }
    export namespace kv {
      export const v1beta1 = { ..._19
      };
    }
    export namespace query {
      export const v1beta1 = { ..._20
      };
    }
    export namespace reflection {
      export const v1beta1 = { ..._21
      };
      export const v2alpha1 = { ..._22
      };
    }
    export namespace snapshots {
      export const v1beta1 = { ..._23
      };
    }
    export namespace store {
      export const v1beta1 = { ..._24,
        ..._25
      };
    }
    export namespace tendermint {
      export const v1beta1 = { ..._26,
        ..._174,
        ..._192
      };
    }
    export const v1beta1 = { ..._27
    };
  }
  export namespace capability {
    export const v1beta1 = { ..._28,
      ..._29
    };
  }
  export namespace crisis {
    export const v1beta1 = { ..._30,
      ..._31,
      ..._145,
      ..._159,
      ..._208
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._32
    };
    export namespace hd {
      export const v1 = { ..._33
      };
    }
    export namespace keyring {
      export const v1 = { ..._34
      };
    }
    export const multisig = { ..._35
    };
    export const secp256k1 = { ..._36
    };
    export const secp256r1 = { ..._37
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._38,
      ..._39,
      ..._40,
      ..._41,
      ..._146,
      ..._160,
      ..._175,
      ..._193,
      ..._209
    };
  }
  export namespace evidence {
    export const v1beta1 = { ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._147,
      ..._161,
      ..._176,
      ..._194,
      ..._210
    };
  }
  export namespace feegrant {
    export const v1beta1 = { ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._148,
      ..._162,
      ..._177,
      ..._195,
      ..._211
    };
  }
  export namespace genutil {
    export const v1beta1 = { ..._50
    };
  }
  export namespace gov {
    export const v1 = { ..._51,
      ..._52,
      ..._53,
      ..._54,
      ..._149,
      ..._163,
      ..._178,
      ..._196,
      ..._212
    };
    export const v1beta1 = { ..._55,
      ..._56,
      ..._57,
      ..._58,
      ..._150,
      ..._164,
      ..._179,
      ..._197,
      ..._213
    };
  }
  export namespace group {
    export const v1 = { ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._63,
      ..._151,
      ..._165,
      ..._180,
      ..._198,
      ..._214
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._64,
      ..._65,
      ..._66,
      ..._181,
      ..._199
    };
  }
  export namespace msg {
    export const v1 = { ..._67
    };
  }
  export namespace nft {
    export const v1beta1 = { ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._72,
      ..._152,
      ..._166,
      ..._182,
      ..._200,
      ..._215
    };
  }
  export namespace orm {
    export const v1 = { ..._73
    };
    export const v1alpha1 = { ..._74
    };
  }
  export namespace params {
    export const v1beta1 = { ..._75,
      ..._76,
      ..._183,
      ..._201
    };
  }
  export namespace slashing {
    export const v1beta1 = { ..._77,
      ..._78,
      ..._79,
      ..._80,
      ..._153,
      ..._167,
      ..._184,
      ..._202,
      ..._216
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._81,
      ..._82,
      ..._83,
      ..._84,
      ..._85,
      ..._154,
      ..._168,
      ..._185,
      ..._203,
      ..._217
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._86
      };
    }
    export const v1beta1 = { ..._87,
      ..._88,
      ..._186,
      ..._204
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._89,
      ..._90,
      ..._91,
      ..._155,
      ..._169,
      ..._187,
      ..._205,
      ..._218
    };
  }
  export namespace vesting {
    export const v1beta1 = { ..._92,
      ..._93,
      ..._156,
      ..._170,
      ..._219
    };
  }
  export const ClientFactory = { ..._246,
    ..._247,
    ..._248
  };
}