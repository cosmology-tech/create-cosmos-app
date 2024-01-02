export declare const calcShareOutAmount: (poolInfo: any, coinsNeeded: any) => any;
export declare const waitUntil: (date: any, timeout?: number) => Promise<unknown>;
export declare const transferIbcTokens: (fromChain: any, toChain: any, toAddress: any, amount: any) => Promise<{
    denom: any;
    amount: any;
}>;
