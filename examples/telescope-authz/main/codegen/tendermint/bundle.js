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
exports.tendermint = void 0;
const _179 = __importStar(require("./abci/types"));
const _180 = __importStar(require("./crypto/keys"));
const _181 = __importStar(require("./crypto/proof"));
const _182 = __importStar(require("./libs/bits/types"));
const _183 = __importStar(require("./p2p/types"));
const _184 = __importStar(require("./types/block"));
const _185 = __importStar(require("./types/evidence"));
const _186 = __importStar(require("./types/params"));
const _187 = __importStar(require("./types/types"));
const _188 = __importStar(require("./types/validator"));
const _189 = __importStar(require("./version/types"));
var tendermint;
(function (tendermint) {
    tendermint.abci = {
        ..._179
    };
    tendermint.crypto = {
        ..._180,
        ..._181
    };
    let libs;
    (function (libs) {
        libs.bits = {
            ..._182
        };
    })(libs = tendermint.libs || (tendermint.libs = {}));
    tendermint.p2p = {
        ..._183
    };
    tendermint.types = {
        ..._184,
        ..._185,
        ..._186,
        ..._187,
        ..._188
    };
    tendermint.version = {
        ..._189
    };
})(tendermint || (exports.tendermint = tendermint = {}));
