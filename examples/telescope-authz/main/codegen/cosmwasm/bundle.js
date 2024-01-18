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
exports.cosmwasm = void 0;
const _94 = __importStar(require("./wasm/v1/genesis"));
const _95 = __importStar(require("./wasm/v1/ibc"));
const _96 = __importStar(require("./wasm/v1/proposal"));
const _97 = __importStar(require("./wasm/v1/query"));
const _98 = __importStar(require("./wasm/v1/tx"));
const _99 = __importStar(require("./wasm/v1/types"));
const _250 = __importStar(require("./wasm/v1/tx.amino"));
const _251 = __importStar(require("./wasm/v1/tx.registry"));
const _252 = __importStar(require("./wasm/v1/query.rpc.Query"));
const _253 = __importStar(require("./wasm/v1/tx.rpc.msg"));
const _304 = __importStar(require("./rpc.query"));
const _305 = __importStar(require("./rpc.tx"));
var cosmwasm;
(function (cosmwasm) {
    let wasm;
    (function (wasm) {
        wasm.v1 = {
            ..._94,
            ..._95,
            ..._96,
            ..._97,
            ..._98,
            ..._99,
            ..._250,
            ..._251,
            ..._252,
            ..._253
        };
    })(wasm = cosmwasm.wasm || (cosmwasm.wasm = {}));
    cosmwasm.ClientFactory = {
        ..._304,
        ..._305
    };
})(cosmwasm || (exports.cosmwasm = cosmwasm = {}));
