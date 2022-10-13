import * as _132 from "./abci/types";
import * as _133 from "./crypto/keys";
import * as _134 from "./crypto/proof";
import * as _135 from "./libs/bits/types";
import * as _136 from "./p2p/types";
import * as _137 from "./types/block";
import * as _138 from "./types/evidence";
import * as _139 from "./types/params";
import * as _140 from "./types/types";
import * as _141 from "./types/validator";
import * as _142 from "./version/types";
export namespace tendermint {
  export const abci = { ..._132
  };
  export const crypto = { ..._133,
    ..._134
  };
  export namespace libs {
    export const bits = { ..._135
    };
  }
  export const p2p = { ..._136
  };
  export const types = { ..._137,
    ..._138,
    ..._139,
    ..._140,
    ..._141
  };
  export const version = { ..._142
  };
}