import { TelescopeGeneratedType } from "../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgLockTokens, MsgBeginUnlockingAll, MsgBeginUnlocking, MsgExtendLockup, MsgForceUnlock } from "./tx";
export declare const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        lockTokens(value: MsgLockTokens): {
            typeUrl: string;
            value: Uint8Array;
        };
        beginUnlockingAll(value: MsgBeginUnlockingAll): {
            typeUrl: string;
            value: Uint8Array;
        };
        beginUnlocking(value: MsgBeginUnlocking): {
            typeUrl: string;
            value: Uint8Array;
        };
        extendLockup(value: MsgExtendLockup): {
            typeUrl: string;
            value: Uint8Array;
        };
        forceUnlock(value: MsgForceUnlock): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        lockTokens(value: MsgLockTokens): {
            typeUrl: string;
            value: MsgLockTokens;
        };
        beginUnlockingAll(value: MsgBeginUnlockingAll): {
            typeUrl: string;
            value: MsgBeginUnlockingAll;
        };
        beginUnlocking(value: MsgBeginUnlocking): {
            typeUrl: string;
            value: MsgBeginUnlocking;
        };
        extendLockup(value: MsgExtendLockup): {
            typeUrl: string;
            value: MsgExtendLockup;
        };
        forceUnlock(value: MsgForceUnlock): {
            typeUrl: string;
            value: MsgForceUnlock;
        };
    };
    toJSON: {
        lockTokens(value: MsgLockTokens): {
            typeUrl: string;
            value: unknown;
        };
        beginUnlockingAll(value: MsgBeginUnlockingAll): {
            typeUrl: string;
            value: unknown;
        };
        beginUnlocking(value: MsgBeginUnlocking): {
            typeUrl: string;
            value: unknown;
        };
        extendLockup(value: MsgExtendLockup): {
            typeUrl: string;
            value: unknown;
        };
        forceUnlock(value: MsgForceUnlock): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        lockTokens(value: any): {
            typeUrl: string;
            value: MsgLockTokens;
        };
        beginUnlockingAll(value: any): {
            typeUrl: string;
            value: MsgBeginUnlockingAll;
        };
        beginUnlocking(value: any): {
            typeUrl: string;
            value: MsgBeginUnlocking;
        };
        extendLockup(value: any): {
            typeUrl: string;
            value: MsgExtendLockup;
        };
        forceUnlock(value: any): {
            typeUrl: string;
            value: MsgForceUnlock;
        };
    };
    fromPartial: {
        lockTokens(value: MsgLockTokens): {
            typeUrl: string;
            value: MsgLockTokens;
        };
        beginUnlockingAll(value: MsgBeginUnlockingAll): {
            typeUrl: string;
            value: MsgBeginUnlockingAll;
        };
        beginUnlocking(value: MsgBeginUnlocking): {
            typeUrl: string;
            value: MsgBeginUnlocking;
        };
        extendLockup(value: MsgExtendLockup): {
            typeUrl: string;
            value: MsgExtendLockup;
        };
        forceUnlock(value: MsgForceUnlock): {
            typeUrl: string;
            value: MsgForceUnlock;
        };
    };
};
