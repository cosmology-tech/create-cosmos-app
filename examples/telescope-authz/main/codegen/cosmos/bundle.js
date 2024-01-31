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
exports.cosmos = void 0;
const _2 = __importStar(require("./app/v1alpha1/config"));
const _3 = __importStar(require("./app/v1alpha1/module"));
const _4 = __importStar(require("./app/v1alpha1/query"));
const _5 = __importStar(require("./auth/v1beta1/auth"));
const _6 = __importStar(require("./auth/v1beta1/genesis"));
const _7 = __importStar(require("./auth/v1beta1/query"));
const _8 = __importStar(require("./authz/v1beta1/authz"));
const _9 = __importStar(require("./authz/v1beta1/event"));
const _10 = __importStar(require("./authz/v1beta1/genesis"));
const _11 = __importStar(require("./authz/v1beta1/query"));
const _12 = __importStar(require("./authz/v1beta1/tx"));
const _13 = __importStar(require("./bank/v1beta1/authz"));
const _14 = __importStar(require("./bank/v1beta1/bank"));
const _15 = __importStar(require("./bank/v1beta1/genesis"));
const _16 = __importStar(require("./bank/v1beta1/query"));
const _17 = __importStar(require("./bank/v1beta1/tx"));
const _18 = __importStar(require("./base/abci/v1beta1/abci"));
const _19 = __importStar(require("./base/kv/v1beta1/kv"));
const _20 = __importStar(require("./base/query/v1beta1/pagination"));
const _21 = __importStar(require("./base/reflection/v1beta1/reflection"));
const _22 = __importStar(require("./base/reflection/v2alpha1/reflection"));
const _23 = __importStar(require("./base/snapshots/v1beta1/snapshot"));
const _24 = __importStar(require("./base/store/v1beta1/commit_info"));
const _25 = __importStar(require("./base/store/v1beta1/listening"));
const _26 = __importStar(require("./base/tendermint/v1beta1/query"));
const _27 = __importStar(require("./base/v1beta1/coin"));
const _28 = __importStar(require("./capability/v1beta1/capability"));
const _29 = __importStar(require("./capability/v1beta1/genesis"));
const _30 = __importStar(require("./crisis/v1beta1/genesis"));
const _31 = __importStar(require("./crisis/v1beta1/tx"));
const _32 = __importStar(require("./crypto/ed25519/keys"));
const _33 = __importStar(require("./crypto/hd/v1/hd"));
const _34 = __importStar(require("./crypto/keyring/v1/record"));
const _35 = __importStar(require("./crypto/multisig/keys"));
const _36 = __importStar(require("./crypto/secp256k1/keys"));
const _37 = __importStar(require("./crypto/secp256r1/keys"));
const _38 = __importStar(require("./distribution/v1beta1/distribution"));
const _39 = __importStar(require("./distribution/v1beta1/genesis"));
const _40 = __importStar(require("./distribution/v1beta1/query"));
const _41 = __importStar(require("./distribution/v1beta1/tx"));
const _42 = __importStar(require("./evidence/v1beta1/evidence"));
const _43 = __importStar(require("./evidence/v1beta1/genesis"));
const _44 = __importStar(require("./evidence/v1beta1/query"));
const _45 = __importStar(require("./evidence/v1beta1/tx"));
const _46 = __importStar(require("./feegrant/v1beta1/feegrant"));
const _47 = __importStar(require("./feegrant/v1beta1/genesis"));
const _48 = __importStar(require("./feegrant/v1beta1/query"));
const _49 = __importStar(require("./feegrant/v1beta1/tx"));
const _50 = __importStar(require("./genutil/v1beta1/genesis"));
const _51 = __importStar(require("./gov/v1/genesis"));
const _52 = __importStar(require("./gov/v1/gov"));
const _53 = __importStar(require("./gov/v1/query"));
const _54 = __importStar(require("./gov/v1/tx"));
const _55 = __importStar(require("./gov/v1beta1/genesis"));
const _56 = __importStar(require("./gov/v1beta1/gov"));
const _57 = __importStar(require("./gov/v1beta1/query"));
const _58 = __importStar(require("./gov/v1beta1/tx"));
const _59 = __importStar(require("./group/v1/events"));
const _60 = __importStar(require("./group/v1/genesis"));
const _61 = __importStar(require("./group/v1/query"));
const _62 = __importStar(require("./group/v1/tx"));
const _63 = __importStar(require("./group/v1/types"));
const _64 = __importStar(require("./mint/v1beta1/genesis"));
const _65 = __importStar(require("./mint/v1beta1/mint"));
const _66 = __importStar(require("./mint/v1beta1/query"));
const _67 = __importStar(require("./msg/v1/msg"));
const _68 = __importStar(require("./nft/v1beta1/event"));
const _69 = __importStar(require("./nft/v1beta1/genesis"));
const _70 = __importStar(require("./nft/v1beta1/nft"));
const _71 = __importStar(require("./nft/v1beta1/query"));
const _72 = __importStar(require("./nft/v1beta1/tx"));
const _73 = __importStar(require("./orm/v1/orm"));
const _74 = __importStar(require("./orm/v1alpha1/schema"));
const _75 = __importStar(require("./params/v1beta1/params"));
const _76 = __importStar(require("./params/v1beta1/query"));
const _77 = __importStar(require("./slashing/v1beta1/genesis"));
const _78 = __importStar(require("./slashing/v1beta1/query"));
const _79 = __importStar(require("./slashing/v1beta1/slashing"));
const _80 = __importStar(require("./slashing/v1beta1/tx"));
const _81 = __importStar(require("./staking/v1beta1/authz"));
const _82 = __importStar(require("./staking/v1beta1/genesis"));
const _83 = __importStar(require("./staking/v1beta1/query"));
const _84 = __importStar(require("./staking/v1beta1/staking"));
const _85 = __importStar(require("./staking/v1beta1/tx"));
const _86 = __importStar(require("./tx/signing/v1beta1/signing"));
const _87 = __importStar(require("./tx/v1beta1/service"));
const _88 = __importStar(require("./tx/v1beta1/tx"));
const _89 = __importStar(require("./upgrade/v1beta1/query"));
const _90 = __importStar(require("./upgrade/v1beta1/tx"));
const _91 = __importStar(require("./upgrade/v1beta1/upgrade"));
const _92 = __importStar(require("./vesting/v1beta1/tx"));
const _93 = __importStar(require("./vesting/v1beta1/vesting"));
const _190 = __importStar(require("./authz/v1beta1/tx.amino"));
const _191 = __importStar(require("./bank/v1beta1/tx.amino"));
const _192 = __importStar(require("./crisis/v1beta1/tx.amino"));
const _193 = __importStar(require("./distribution/v1beta1/tx.amino"));
const _194 = __importStar(require("./evidence/v1beta1/tx.amino"));
const _195 = __importStar(require("./feegrant/v1beta1/tx.amino"));
const _196 = __importStar(require("./gov/v1/tx.amino"));
const _197 = __importStar(require("./gov/v1beta1/tx.amino"));
const _198 = __importStar(require("./group/v1/tx.amino"));
const _199 = __importStar(require("./nft/v1beta1/tx.amino"));
const _200 = __importStar(require("./slashing/v1beta1/tx.amino"));
const _201 = __importStar(require("./staking/v1beta1/tx.amino"));
const _202 = __importStar(require("./upgrade/v1beta1/tx.amino"));
const _203 = __importStar(require("./vesting/v1beta1/tx.amino"));
const _204 = __importStar(require("./authz/v1beta1/tx.registry"));
const _205 = __importStar(require("./bank/v1beta1/tx.registry"));
const _206 = __importStar(require("./crisis/v1beta1/tx.registry"));
const _207 = __importStar(require("./distribution/v1beta1/tx.registry"));
const _208 = __importStar(require("./evidence/v1beta1/tx.registry"));
const _209 = __importStar(require("./feegrant/v1beta1/tx.registry"));
const _210 = __importStar(require("./gov/v1/tx.registry"));
const _211 = __importStar(require("./gov/v1beta1/tx.registry"));
const _212 = __importStar(require("./group/v1/tx.registry"));
const _213 = __importStar(require("./nft/v1beta1/tx.registry"));
const _214 = __importStar(require("./slashing/v1beta1/tx.registry"));
const _215 = __importStar(require("./staking/v1beta1/tx.registry"));
const _216 = __importStar(require("./upgrade/v1beta1/tx.registry"));
const _217 = __importStar(require("./vesting/v1beta1/tx.registry"));
const _218 = __importStar(require("./app/v1alpha1/query.rpc.Query"));
const _219 = __importStar(require("./auth/v1beta1/query.rpc.Query"));
const _220 = __importStar(require("./authz/v1beta1/query.rpc.Query"));
const _221 = __importStar(require("./bank/v1beta1/query.rpc.Query"));
const _222 = __importStar(require("./base/tendermint/v1beta1/query.rpc.Service"));
const _223 = __importStar(require("./distribution/v1beta1/query.rpc.Query"));
const _224 = __importStar(require("./evidence/v1beta1/query.rpc.Query"));
const _225 = __importStar(require("./feegrant/v1beta1/query.rpc.Query"));
const _226 = __importStar(require("./gov/v1/query.rpc.Query"));
const _227 = __importStar(require("./gov/v1beta1/query.rpc.Query"));
const _228 = __importStar(require("./group/v1/query.rpc.Query"));
const _229 = __importStar(require("./mint/v1beta1/query.rpc.Query"));
const _230 = __importStar(require("./nft/v1beta1/query.rpc.Query"));
const _231 = __importStar(require("./params/v1beta1/query.rpc.Query"));
const _232 = __importStar(require("./slashing/v1beta1/query.rpc.Query"));
const _233 = __importStar(require("./staking/v1beta1/query.rpc.Query"));
const _234 = __importStar(require("./tx/v1beta1/service.rpc.Service"));
const _235 = __importStar(require("./upgrade/v1beta1/query.rpc.Query"));
const _236 = __importStar(require("./authz/v1beta1/tx.rpc.msg"));
const _237 = __importStar(require("./bank/v1beta1/tx.rpc.msg"));
const _238 = __importStar(require("./crisis/v1beta1/tx.rpc.msg"));
const _239 = __importStar(require("./distribution/v1beta1/tx.rpc.msg"));
const _240 = __importStar(require("./evidence/v1beta1/tx.rpc.msg"));
const _241 = __importStar(require("./feegrant/v1beta1/tx.rpc.msg"));
const _242 = __importStar(require("./gov/v1/tx.rpc.msg"));
const _243 = __importStar(require("./gov/v1beta1/tx.rpc.msg"));
const _244 = __importStar(require("./group/v1/tx.rpc.msg"));
const _245 = __importStar(require("./nft/v1beta1/tx.rpc.msg"));
const _246 = __importStar(require("./slashing/v1beta1/tx.rpc.msg"));
const _247 = __importStar(require("./staking/v1beta1/tx.rpc.msg"));
const _248 = __importStar(require("./upgrade/v1beta1/tx.rpc.msg"));
const _249 = __importStar(require("./vesting/v1beta1/tx.rpc.msg"));
const _302 = __importStar(require("./rpc.query"));
const _303 = __importStar(require("./rpc.tx"));
var cosmos;
(function (cosmos) {
    let app;
    (function (app) {
        app.v1alpha1 = {
            ..._2,
            ..._3,
            ..._4,
            ..._218
        };
    })(app = cosmos.app || (cosmos.app = {}));
    let auth;
    (function (auth) {
        auth.v1beta1 = {
            ..._5,
            ..._6,
            ..._7,
            ..._219
        };
    })(auth = cosmos.auth || (cosmos.auth = {}));
    let authz;
    (function (authz) {
        authz.v1beta1 = {
            ..._8,
            ..._9,
            ..._10,
            ..._11,
            ..._12,
            ..._190,
            ..._204,
            ..._220,
            ..._236
        };
    })(authz = cosmos.authz || (cosmos.authz = {}));
    let bank;
    (function (bank) {
        bank.v1beta1 = {
            ..._13,
            ..._14,
            ..._15,
            ..._16,
            ..._17,
            ..._191,
            ..._205,
            ..._221,
            ..._237
        };
    })(bank = cosmos.bank || (cosmos.bank = {}));
    let base;
    (function (base) {
        let abci;
        (function (abci) {
            abci.v1beta1 = {
                ..._18
            };
        })(abci = base.abci || (base.abci = {}));
        let kv;
        (function (kv) {
            kv.v1beta1 = {
                ..._19
            };
        })(kv = base.kv || (base.kv = {}));
        let query;
        (function (query) {
            query.v1beta1 = {
                ..._20
            };
        })(query = base.query || (base.query = {}));
        let reflection;
        (function (reflection) {
            reflection.v1beta1 = {
                ..._21
            };
            reflection.v2alpha1 = {
                ..._22
            };
        })(reflection = base.reflection || (base.reflection = {}));
        let snapshots;
        (function (snapshots) {
            snapshots.v1beta1 = {
                ..._23
            };
        })(snapshots = base.snapshots || (base.snapshots = {}));
        let store;
        (function (store) {
            store.v1beta1 = {
                ..._24,
                ..._25
            };
        })(store = base.store || (base.store = {}));
        let tendermint;
        (function (tendermint) {
            tendermint.v1beta1 = {
                ..._26,
                ..._222
            };
        })(tendermint = base.tendermint || (base.tendermint = {}));
        base.v1beta1 = {
            ..._27
        };
    })(base = cosmos.base || (cosmos.base = {}));
    let capability;
    (function (capability) {
        capability.v1beta1 = {
            ..._28,
            ..._29
        };
    })(capability = cosmos.capability || (cosmos.capability = {}));
    let crisis;
    (function (crisis) {
        crisis.v1beta1 = {
            ..._30,
            ..._31,
            ..._192,
            ..._206,
            ..._238
        };
    })(crisis = cosmos.crisis || (cosmos.crisis = {}));
    let crypto;
    (function (crypto) {
        crypto.ed25519 = {
            ..._32
        };
        let hd;
        (function (hd) {
            hd.v1 = {
                ..._33
            };
        })(hd = crypto.hd || (crypto.hd = {}));
        let keyring;
        (function (keyring) {
            keyring.v1 = {
                ..._34
            };
        })(keyring = crypto.keyring || (crypto.keyring = {}));
        crypto.multisig = {
            ..._35
        };
        crypto.secp256k1 = {
            ..._36
        };
        crypto.secp256r1 = {
            ..._37
        };
    })(crypto = cosmos.crypto || (cosmos.crypto = {}));
    let distribution;
    (function (distribution) {
        distribution.v1beta1 = {
            ..._38,
            ..._39,
            ..._40,
            ..._41,
            ..._193,
            ..._207,
            ..._223,
            ..._239
        };
    })(distribution = cosmos.distribution || (cosmos.distribution = {}));
    let evidence;
    (function (evidence) {
        evidence.v1beta1 = {
            ..._42,
            ..._43,
            ..._44,
            ..._45,
            ..._194,
            ..._208,
            ..._224,
            ..._240
        };
    })(evidence = cosmos.evidence || (cosmos.evidence = {}));
    let feegrant;
    (function (feegrant) {
        feegrant.v1beta1 = {
            ..._46,
            ..._47,
            ..._48,
            ..._49,
            ..._195,
            ..._209,
            ..._225,
            ..._241
        };
    })(feegrant = cosmos.feegrant || (cosmos.feegrant = {}));
    let genutil;
    (function (genutil) {
        genutil.v1beta1 = {
            ..._50
        };
    })(genutil = cosmos.genutil || (cosmos.genutil = {}));
    let gov;
    (function (gov) {
        gov.v1 = {
            ..._51,
            ..._52,
            ..._53,
            ..._54,
            ..._196,
            ..._210,
            ..._226,
            ..._242
        };
        gov.v1beta1 = {
            ..._55,
            ..._56,
            ..._57,
            ..._58,
            ..._197,
            ..._211,
            ..._227,
            ..._243
        };
    })(gov = cosmos.gov || (cosmos.gov = {}));
    let group;
    (function (group) {
        group.v1 = {
            ..._59,
            ..._60,
            ..._61,
            ..._62,
            ..._63,
            ..._198,
            ..._212,
            ..._228,
            ..._244
        };
    })(group = cosmos.group || (cosmos.group = {}));
    let mint;
    (function (mint) {
        mint.v1beta1 = {
            ..._64,
            ..._65,
            ..._66,
            ..._229
        };
    })(mint = cosmos.mint || (cosmos.mint = {}));
    let msg;
    (function (msg) {
        msg.v1 = {
            ..._67
        };
    })(msg = cosmos.msg || (cosmos.msg = {}));
    let nft;
    (function (nft) {
        nft.v1beta1 = {
            ..._68,
            ..._69,
            ..._70,
            ..._71,
            ..._72,
            ..._199,
            ..._213,
            ..._230,
            ..._245
        };
    })(nft = cosmos.nft || (cosmos.nft = {}));
    let orm;
    (function (orm) {
        orm.v1 = {
            ..._73
        };
        orm.v1alpha1 = {
            ..._74
        };
    })(orm = cosmos.orm || (cosmos.orm = {}));
    let params;
    (function (params) {
        params.v1beta1 = {
            ..._75,
            ..._76,
            ..._231
        };
    })(params = cosmos.params || (cosmos.params = {}));
    let slashing;
    (function (slashing) {
        slashing.v1beta1 = {
            ..._77,
            ..._78,
            ..._79,
            ..._80,
            ..._200,
            ..._214,
            ..._232,
            ..._246
        };
    })(slashing = cosmos.slashing || (cosmos.slashing = {}));
    let staking;
    (function (staking) {
        staking.v1beta1 = {
            ..._81,
            ..._82,
            ..._83,
            ..._84,
            ..._85,
            ..._201,
            ..._215,
            ..._233,
            ..._247
        };
    })(staking = cosmos.staking || (cosmos.staking = {}));
    let tx;
    (function (tx) {
        let signing;
        (function (signing) {
            signing.v1beta1 = {
                ..._86
            };
        })(signing = tx.signing || (tx.signing = {}));
        tx.v1beta1 = {
            ..._87,
            ..._88,
            ..._234
        };
    })(tx = cosmos.tx || (cosmos.tx = {}));
    let upgrade;
    (function (upgrade) {
        upgrade.v1beta1 = {
            ..._89,
            ..._90,
            ..._91,
            ..._202,
            ..._216,
            ..._235,
            ..._248
        };
    })(upgrade = cosmos.upgrade || (cosmos.upgrade = {}));
    let vesting;
    (function (vesting) {
        vesting.v1beta1 = {
            ..._92,
            ..._93,
            ..._203,
            ..._217,
            ..._249
        };
    })(vesting = cosmos.vesting || (cosmos.vesting = {}));
    cosmos.ClientFactory = {
        ..._302,
        ..._303
    };
})(cosmos || (exports.cosmos = cosmos = {}));
