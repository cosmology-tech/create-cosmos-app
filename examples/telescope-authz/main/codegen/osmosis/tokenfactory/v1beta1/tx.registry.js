"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/osmosis.tokenfactory.v1beta1.MsgCreateDenom", tx_1.MsgCreateDenom], ["/osmosis.tokenfactory.v1beta1.MsgMint", tx_1.MsgMint], ["/osmosis.tokenfactory.v1beta1.MsgBurn", tx_1.MsgBurn], ["/osmosis.tokenfactory.v1beta1.MsgChangeAdmin", tx_1.MsgChangeAdmin], ["/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata", tx_1.MsgSetDenomMetadata]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        createDenom(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenom",
                value: tx_1.MsgCreateDenom.encode(value).finish()
            };
        },
        mint(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMint",
                value: tx_1.MsgMint.encode(value).finish()
            };
        },
        burn(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurn",
                value: tx_1.MsgBurn.encode(value).finish()
            };
        },
        changeAdmin(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin",
                value: tx_1.MsgChangeAdmin.encode(value).finish()
            };
        },
        setDenomMetadata(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata",
                value: tx_1.MsgSetDenomMetadata.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createDenom(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenom",
                value
            };
        },
        mint(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMint",
                value
            };
        },
        burn(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurn",
                value
            };
        },
        changeAdmin(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin",
                value
            };
        },
        setDenomMetadata(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata",
                value
            };
        }
    },
    toJSON: {
        createDenom(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenom",
                value: tx_1.MsgCreateDenom.toJSON(value)
            };
        },
        mint(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMint",
                value: tx_1.MsgMint.toJSON(value)
            };
        },
        burn(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurn",
                value: tx_1.MsgBurn.toJSON(value)
            };
        },
        changeAdmin(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin",
                value: tx_1.MsgChangeAdmin.toJSON(value)
            };
        },
        setDenomMetadata(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata",
                value: tx_1.MsgSetDenomMetadata.toJSON(value)
            };
        }
    },
    fromJSON: {
        createDenom(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenom",
                value: tx_1.MsgCreateDenom.fromJSON(value)
            };
        },
        mint(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMint",
                value: tx_1.MsgMint.fromJSON(value)
            };
        },
        burn(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurn",
                value: tx_1.MsgBurn.fromJSON(value)
            };
        },
        changeAdmin(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin",
                value: tx_1.MsgChangeAdmin.fromJSON(value)
            };
        },
        setDenomMetadata(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata",
                value: tx_1.MsgSetDenomMetadata.fromJSON(value)
            };
        }
    },
    fromPartial: {
        createDenom(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenom",
                value: tx_1.MsgCreateDenom.fromPartial(value)
            };
        },
        mint(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMint",
                value: tx_1.MsgMint.fromPartial(value)
            };
        },
        burn(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurn",
                value: tx_1.MsgBurn.fromPartial(value)
            };
        },
        changeAdmin(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin",
                value: tx_1.MsgChangeAdmin.fromPartial(value)
            };
        },
        setDenomMetadata(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata",
                value: tx_1.MsgSetDenomMetadata.fromPartial(value)
            };
        }
    }
};
