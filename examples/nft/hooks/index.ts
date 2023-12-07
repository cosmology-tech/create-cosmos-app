export * from './useTx';
export * from './useModal';
export * from './useGraphQL';
export * from './useContracts';
export * from './useStarsPrice';
export * from './useStarsBalance';
export * from './useRpcQueryClient';

export type HookOptions = {
  success?: () => void
  error?: () => void
}