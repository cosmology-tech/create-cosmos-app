import * as _130 from "./abci/types";
import * as _131 from "./crypto/keys";
import * as _132 from "./crypto/proof";
import * as _133 from "./libs/bits/types";
import * as _134 from "./p2p/types";
import * as _135 from "./types/block";
import * as _136 from "./types/evidence";
import * as _137 from "./types/params";
import * as _138 from "./types/types";
import * as _139 from "./types/validator";
import * as _140 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._130
  };
  export const crypto = {
    ..._131,
    ..._132
  };
  export namespace libs {
    export const bits = {
      ..._133
    };
  }
  export const p2p = {
    ..._134
  };
  export const types = {
    ..._135,
    ..._136,
    ..._137,
    ..._138,
    ..._139
  };
  export const version = {
    ..._140
  };
}