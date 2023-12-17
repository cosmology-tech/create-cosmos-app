"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.osmosis = void 0;
const _132 = __importStar(require("./claim/v1beta1/claim"));
const _133 = __importStar(require("./claim/v1beta1/genesis"));
const _134 = __importStar(require("./claim/v1beta1/params"));
const _135 = __importStar(require("./claim/v1beta1/query"));
const _136 = __importStar(require("./epochs/genesis"));
const _137 = __importStar(require("./epochs/query"));
const _138 = __importStar(require("./gamm/pool-models/balancer/tx/tx"));
const _139 = __importStar(require("./gamm/pool-models/stableswap/stableswap_pool"));
const _140 = __importStar(require("./gamm/pool-models/stableswap/tx"));
const _141 = __importStar(require("./gamm/v2/query"));
const _142 = __importStar(require("./ibc-rate-limit/v1beta1/params"));
const _143 = __importStar(require("./ibc-rate-limit/v1beta1/query"));
const _144 = __importStar(require("./incentives/gauge"));
const _145 = __importStar(require("./incentives/genesis"));
const _146 = __importStar(require("./incentives/params"));
const _147 = __importStar(require("./incentives/query"));
const _148 = __importStar(require("./incentives/tx"));
const _149 = __importStar(require("./lockup/genesis"));
const _150 = __importStar(require("./lockup/lock"));
const _151 = __importStar(require("./lockup/params"));
const _152 = __importStar(require("./lockup/query"));
const _153 = __importStar(require("./lockup/tx"));
const _154 = __importStar(require("./mint/v1beta1/genesis"));
const _155 = __importStar(require("./mint/v1beta1/mint"));
const _156 = __importStar(require("./mint/v1beta1/query"));
const _157 = __importStar(require("./pool-incentives/v1beta1/genesis"));
const _158 = __importStar(require("./pool-incentives/v1beta1/gov"));
const _159 = __importStar(require("./pool-incentives/v1beta1/incentives"));
const _160 = __importStar(require("./pool-incentives/v1beta1/query"));
const _161 = __importStar(require("./sumtree/v1beta1/tree"));
const _162 = __importStar(require("./superfluid/genesis"));
const _163 = __importStar(require("./superfluid/params"));
const _164 = __importStar(require("./superfluid/query"));
const _165 = __importStar(require("./superfluid/superfluid"));
const _166 = __importStar(require("./superfluid/tx"));
const _167 = __importStar(require("./tokenfactory/v1beta1/authorityMetadata"));
const _168 = __importStar(require("./tokenfactory/v1beta1/genesis"));
const _169 = __importStar(require("./tokenfactory/v1beta1/params"));
const _170 = __importStar(require("./tokenfactory/v1beta1/query"));
const _171 = __importStar(require("./tokenfactory/v1beta1/tx"));
const _172 = __importStar(require("./twap/v1beta1/genesis"));
const _173 = __importStar(require("./twap/v1beta1/query"));
const _174 = __importStar(require("./twap/v1beta1/twap_record"));
const _175 = __importStar(require("./txfees/v1beta1/feetoken"));
const _176 = __importStar(require("./txfees/v1beta1/genesis"));
const _177 = __importStar(require("./txfees/v1beta1/gov"));
const _178 = __importStar(require("./txfees/v1beta1/query"));
const _271 = __importStar(require("./gamm/pool-models/balancer/tx/tx.amino"));
const _272 = __importStar(require("./gamm/pool-models/stableswap/tx.amino"));
const _273 = __importStar(require("./gamm/v1beta1/tx.amino"));
const _274 = __importStar(require("./incentives/tx.amino"));
const _275 = __importStar(require("./lockup/tx.amino"));
const _276 = __importStar(require("./superfluid/tx.amino"));
const _277 = __importStar(require("./tokenfactory/v1beta1/tx.amino"));
const _278 = __importStar(require("./gamm/pool-models/balancer/tx/tx.registry"));
const _279 = __importStar(require("./gamm/pool-models/stableswap/tx.registry"));
const _280 = __importStar(require("./incentives/tx.registry"));
const _281 = __importStar(require("./lockup/tx.registry"));
const _282 = __importStar(require("./superfluid/tx.registry"));
const _283 = __importStar(require("./tokenfactory/v1beta1/tx.registry"));
const _284 = __importStar(require("./claim/v1beta1/query.rpc.Query"));
const _285 = __importStar(require("./epochs/query.rpc.Query"));
const _286 = __importStar(require("./gamm/v2/query.rpc.Query"));
const _287 = __importStar(require("./ibc-rate-limit/v1beta1/query.rpc.Query"));
const _288 = __importStar(require("./incentives/query.rpc.Query"));
const _289 = __importStar(require("./lockup/query.rpc.Query"));
const _290 = __importStar(require("./mint/v1beta1/query.rpc.Query"));
const _291 = __importStar(require("./pool-incentives/v1beta1/query.rpc.Query"));
const _292 = __importStar(require("./superfluid/query.rpc.Query"));
const _293 = __importStar(require("./tokenfactory/v1beta1/query.rpc.Query"));
const _294 = __importStar(require("./twap/v1beta1/query.rpc.Query"));
const _295 = __importStar(require("./txfees/v1beta1/query.rpc.Query"));
const _296 = __importStar(require("./gamm/pool-models/balancer/tx/tx.rpc.msg"));
const _297 = __importStar(require("./gamm/pool-models/stableswap/tx.rpc.msg"));
const _298 = __importStar(require("./incentives/tx.rpc.msg"));
const _299 = __importStar(require("./lockup/tx.rpc.msg"));
const _300 = __importStar(require("./superfluid/tx.rpc.msg"));
const _301 = __importStar(require("./tokenfactory/v1beta1/tx.rpc.msg"));
const _308 = __importStar(require("./rpc.query"));
const _309 = __importStar(require("./rpc.tx"));
var osmosis;
(function (osmosis) {
    let claim;
    (function (claim) {
        claim.v1beta1 = {
            ..._132,
            ..._133,
            ..._134,
            ..._135,
            ..._284
        };
    })(claim = osmosis.claim || (osmosis.claim = {}));
    let epochs;
    (function (epochs) {
        epochs.v1beta1 = {
            ..._136,
            ..._137,
            ..._285
        };
    })(epochs = osmosis.epochs || (osmosis.epochs = {}));
    let gamm;
    (function (gamm) {
        let poolmodels;
        (function (poolmodels) {
            let balancer;
            (function (balancer) {
                balancer.v1beta1 = {
                    ..._138,
                    ..._271,
                    ..._278,
                    ..._296
                };
            })(balancer = poolmodels.balancer || (poolmodels.balancer = {}));
            let stableswap;
            (function (stableswap) {
                stableswap.v1beta1 = {
                    ..._139,
                    ..._140,
                    ..._272,
                    ..._279,
                    ..._297
                };
            })(stableswap = poolmodels.stableswap || (poolmodels.stableswap = {}));
        })(poolmodels = gamm.poolmodels || (gamm.poolmodels = {}));
        gamm.v2 = {
            ..._141,
            ..._286
        };
        gamm.v1beta1 = {
            ..._273
        };
    })(gamm = osmosis.gamm || (osmosis.gamm = {}));
    let ibcratelimit;
    (function (ibcratelimit) {
        ibcratelimit.v1beta1 = {
            ..._142,
            ..._143,
            ..._287
        };
    })(ibcratelimit = osmosis.ibcratelimit || (osmosis.ibcratelimit = {}));
    osmosis.incentives = {
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
    osmosis.lockup = {
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
    let mint;
    (function (mint) {
        mint.v1beta1 = {
            ..._154,
            ..._155,
            ..._156,
            ..._290
        };
    })(mint = osmosis.mint || (osmosis.mint = {}));
    let poolincentives;
    (function (poolincentives) {
        poolincentives.v1beta1 = {
            ..._157,
            ..._158,
            ..._159,
            ..._160,
            ..._291
        };
    })(poolincentives = osmosis.poolincentives || (osmosis.poolincentives = {}));
    let store;
    (function (store) {
        store.v1beta1 = {
            ..._161
        };
    })(store = osmosis.store || (osmosis.store = {}));
    osmosis.superfluid = {
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
    let tokenfactory;
    (function (tokenfactory) {
        tokenfactory.v1beta1 = {
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
    })(tokenfactory = osmosis.tokenfactory || (osmosis.tokenfactory = {}));
    let twap;
    (function (twap) {
        twap.v1beta1 = {
            ..._172,
            ..._173,
            ..._174,
            ..._294
        };
    })(twap = osmosis.twap || (osmosis.twap = {}));
    let txfees;
    (function (txfees) {
        txfees.v1beta1 = {
            ..._175,
            ..._176,
            ..._177,
            ..._178,
            ..._295
        };
    })(txfees = osmosis.txfees || (osmosis.txfees = {}));
    osmosis.ClientFactory = {
        ..._308,
        ..._309
    };
})(osmosis || (exports.osmosis = osmosis = {}));
