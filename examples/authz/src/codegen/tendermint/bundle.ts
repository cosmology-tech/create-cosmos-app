//@ts-nocheck
import * as _183 from "./abci/types";
import * as _184 from "./crypto/keys";
import * as _185 from "./crypto/proof";
import * as _186 from "./libs/bits/types";
import * as _187 from "./p2p/types";
import * as _188 from "./types/block";
import * as _189 from "./types/evidence";
import * as _190 from "./types/params";
import * as _191 from "./types/types";
import * as _192 from "./types/validator";
import * as _193 from "./version/types";
import * as _348 from "./abci/types.rpc.ABCIApplication";
import * as _364 from "./lcd";
import * as _365 from "./rpc.query";
export namespace tendermint {
  export const abci = {
    ..._183,
    ..._348
  };
  export const crypto = {
    ..._184,
    ..._185
  };
  export namespace libs {
    export const bits = {
      ..._186
    };
  }
  export const p2p = {
    ..._187
  };
  export const types = {
    ..._188,
    ..._189,
    ..._190,
    ..._191,
    ..._192
  };
  export const version = {
    ..._193
  };
  export const ClientFactory = {
    ..._364,
    ..._365
  };
}