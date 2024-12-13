import * as _352 from "./abci/types";
import * as _353 from "./crypto/keys";
import * as _354 from "./crypto/proof";
import * as _355 from "./libs/bits/types";
import * as _356 from "./p2p/types";
import * as _357 from "./types/block";
import * as _358 from "./types/evidence";
import * as _359 from "./types/params";
import * as _360 from "./types/types";
import * as _361 from "./types/validator";
import * as _362 from "./version/types";
import * as _619 from "./abci/types.rpc.ABCIApplication";
import * as _644 from "./lcd";
import * as _645 from "./rpc.query";
export namespace tendermint {
  export const abci = {
    ..._352,
    ..._619
  };
  export const crypto = {
    ..._353,
    ..._354
  };
  export namespace libs {
    export const bits = {
      ..._355
    };
  }
  export const p2p = {
    ..._356
  };
  export const types = {
    ..._357,
    ..._358,
    ..._359,
    ..._360,
    ..._361
  };
  export const version = {
    ..._362
  };
  export const ClientFactory = {
    ..._644,
    ..._645
  };
}