import { WalletStatus } from './components';
import { CosmosWalletStatus } from '@cosmos-kit/types';

export const mapStatusFromCosmosWallet = (
  status: CosmosWalletStatus,
  error?: Error
): WalletStatus => {
  switch (status) {
    case CosmosWalletStatus.Uninitialized || CosmosWalletStatus.Disconnected:
      return WalletStatus.NotInit;
    case CosmosWalletStatus.Connecting ||
      CosmosWalletStatus.ChoosingWallet ||
      CosmosWalletStatus.PendingWalletConnect ||
      CosmosWalletStatus.EnablingWallet:
      return WalletStatus.Loading;
    case CosmosWalletStatus.Connected:
      return WalletStatus.Loaded;
    case CosmosWalletStatus.Errored:
      if (error && error.message === 'Request rejected') {
        return WalletStatus.NotInit;
      } else {
        return WalletStatus.Rejected;
      }
    default:
      return WalletStatus.NotInit;
  }
};
