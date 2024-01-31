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
exports.ibc = void 0;
const _108 = __importStar(require("./applications/transfer/v1/genesis"));
const _109 = __importStar(require("./applications/transfer/v1/query"));
const _110 = __importStar(require("./applications/transfer/v1/transfer"));
const _111 = __importStar(require("./applications/transfer/v1/tx"));
const _112 = __importStar(require("./applications/transfer/v2/packet"));
const _113 = __importStar(require("./core/channel/v1/channel"));
const _114 = __importStar(require("./core/channel/v1/genesis"));
const _115 = __importStar(require("./core/channel/v1/query"));
const _116 = __importStar(require("./core/channel/v1/tx"));
const _117 = __importStar(require("./core/client/v1/client"));
const _118 = __importStar(require("./core/client/v1/genesis"));
const _119 = __importStar(require("./core/client/v1/query"));
const _120 = __importStar(require("./core/client/v1/tx"));
const _121 = __importStar(require("./core/commitment/v1/commitment"));
const _122 = __importStar(require("./core/connection/v1/connection"));
const _123 = __importStar(require("./core/connection/v1/genesis"));
const _124 = __importStar(require("./core/connection/v1/query"));
const _125 = __importStar(require("./core/connection/v1/tx"));
const _126 = __importStar(require("./core/port/v1/query"));
const _127 = __importStar(require("./core/types/v1/genesis"));
const _128 = __importStar(require("./lightclients/localhost/v1/localhost"));
const _129 = __importStar(require("./lightclients/solomachine/v1/solomachine"));
const _130 = __importStar(require("./lightclients/solomachine/v2/solomachine"));
const _131 = __importStar(require("./lightclients/tendermint/v1/tendermint"));
const _254 = __importStar(require("./applications/transfer/v1/tx.amino"));
const _255 = __importStar(require("./core/channel/v1/tx.amino"));
const _256 = __importStar(require("./core/client/v1/tx.amino"));
const _257 = __importStar(require("./core/connection/v1/tx.amino"));
const _258 = __importStar(require("./applications/transfer/v1/tx.registry"));
const _259 = __importStar(require("./core/channel/v1/tx.registry"));
const _260 = __importStar(require("./core/client/v1/tx.registry"));
const _261 = __importStar(require("./core/connection/v1/tx.registry"));
const _262 = __importStar(require("./applications/transfer/v1/query.rpc.Query"));
const _263 = __importStar(require("./core/channel/v1/query.rpc.Query"));
const _264 = __importStar(require("./core/client/v1/query.rpc.Query"));
const _265 = __importStar(require("./core/connection/v1/query.rpc.Query"));
const _266 = __importStar(require("./core/port/v1/query.rpc.Query"));
const _267 = __importStar(require("./applications/transfer/v1/tx.rpc.msg"));
const _268 = __importStar(require("./core/channel/v1/tx.rpc.msg"));
const _269 = __importStar(require("./core/client/v1/tx.rpc.msg"));
const _270 = __importStar(require("./core/connection/v1/tx.rpc.msg"));
const _306 = __importStar(require("./rpc.query"));
const _307 = __importStar(require("./rpc.tx"));
var ibc;
(function (ibc) {
    let applications;
    (function (applications) {
        let transfer;
        (function (transfer) {
            transfer.v1 = {
                ..._108,
                ..._109,
                ..._110,
                ..._111,
                ..._254,
                ..._258,
                ..._262,
                ..._267
            };
            transfer.v2 = {
                ..._112
            };
        })(transfer = applications.transfer || (applications.transfer = {}));
    })(applications = ibc.applications || (ibc.applications = {}));
    let core;
    (function (core) {
        let channel;
        (function (channel) {
            channel.v1 = {
                ..._113,
                ..._114,
                ..._115,
                ..._116,
                ..._255,
                ..._259,
                ..._263,
                ..._268
            };
        })(channel = core.channel || (core.channel = {}));
        let client;
        (function (client) {
            client.v1 = {
                ..._117,
                ..._118,
                ..._119,
                ..._120,
                ..._256,
                ..._260,
                ..._264,
                ..._269
            };
        })(client = core.client || (core.client = {}));
        let commitment;
        (function (commitment) {
            commitment.v1 = {
                ..._121
            };
        })(commitment = core.commitment || (core.commitment = {}));
        let connection;
        (function (connection) {
            connection.v1 = {
                ..._122,
                ..._123,
                ..._124,
                ..._125,
                ..._257,
                ..._261,
                ..._265,
                ..._270
            };
        })(connection = core.connection || (core.connection = {}));
        let port;
        (function (port) {
            port.v1 = {
                ..._126,
                ..._266
            };
        })(port = core.port || (core.port = {}));
        let types;
        (function (types) {
            types.v1 = {
                ..._127
            };
        })(types = core.types || (core.types = {}));
    })(core = ibc.core || (ibc.core = {}));
    let lightclients;
    (function (lightclients) {
        let localhost;
        (function (localhost) {
            localhost.v1 = {
                ..._128
            };
        })(localhost = lightclients.localhost || (lightclients.localhost = {}));
        let solomachine;
        (function (solomachine) {
            solomachine.v1 = {
                ..._129
            };
            solomachine.v2 = {
                ..._130
            };
        })(solomachine = lightclients.solomachine || (lightclients.solomachine = {}));
        let tendermint;
        (function (tendermint) {
            tendermint.v1 = {
                ..._131
            };
        })(tendermint = lightclients.tendermint || (lightclients.tendermint = {}));
    })(lightclients = ibc.lightclients || (ibc.lightclients = {}));
    ibc.ClientFactory = {
        ..._306,
        ..._307
    };
})(ibc || (exports.ibc = ibc = {}));
