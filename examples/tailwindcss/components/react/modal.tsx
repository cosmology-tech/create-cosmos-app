/* eslint-disable @next/next/no-img-element */
import type { ChainWalletBase, WalletModalProps } from '@cosmos-kit/core';
import { WalletStatus } from '@cosmos-kit/core';
import { useCallback, Fragment, useState, useMemo, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  Connected,
  Connecting,
  Error,
  NotExist,
  QRCode,
  WalletList,
} from './views';
import { useRouter } from 'next/router';
import Bowser from 'bowser';
import { disconnect } from 'process';

export enum ModalView {
  WalletList,
  QRCode,
  Connecting,
  Connected,
  Error,
  NotExist,
}

export const TailwindModal = ({
  isOpen,
  setOpen,
  walletRepo,
}: WalletModalProps) => {
  const router = useRouter();

  const [currentView, setCurrentView] = useState<ModalView>(
    ModalView.WalletList
  );
  const [qrWallet, setQRWallet] = useState<ChainWalletBase | undefined>();

  const current = walletRepo?.current;
  const currentWalletData = current?.walletInfo;
  const walletStatus = current?.walletStatus || WalletStatus.Disconnected;
  const currentWalletName = current?.walletName;

  useEffect(() => {
    if (isOpen) {
      switch (walletStatus) {
        case WalletStatus.Disconnected:
          setCurrentView(ModalView.WalletList);
          break;
        case WalletStatus.Connecting:
          setCurrentView(ModalView.Connecting);
          break;
        case WalletStatus.Connected:
          setCurrentView(ModalView.Connected);
          break;
        case WalletStatus.Error:
          setCurrentView(ModalView.Error);
          break;
        case WalletStatus.Rejected:
          setCurrentView(ModalView.Error);
          break;
        case WalletStatus.NotExist:
          setCurrentView(ModalView.NotExist);
          break;
      }
    }
  }, [isOpen, walletStatus, currentWalletName]);

  const onWalletClicked = useCallback(
    (name: string) => {
      walletRepo?.connect(name);

      // 1ms timeout prevents _render from determining the view to show first
      setTimeout(() => {
        const wallet = walletRepo?.getWallet(name);
        if (wallet?.walletInfo.mode === 'wallet-connect') {
          setCurrentView(ModalView.QRCode);
          setQRWallet(wallet);
        }
      }, 1);
    },
    [walletRepo]
  );

  const onCloseModal = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const _render = useMemo(() => {
    switch (currentView) {
      case ModalView.WalletList:
        return (
          <WalletList
            onClose={onCloseModal}
            onWalletClicked={onWalletClicked}
            wallets={walletRepo?.wallets || []}
          />
        );
      case ModalView.Connected:
        return (
          <Connected
            onClose={onCloseModal}
            onReturn={() => setCurrentView(ModalView.WalletList)}
            disconnect={() => current?.disconnect()}
            name={currentWalletData?.prettyName!}
            logo={currentWalletData?.logo!}
            username={current?.username}
            address={current?.address}
          />
        );
      case ModalView.Connecting:
        let subtitle: string;
        if (currentWalletData!.mode === 'wallet-connect') {
          subtitle = `Approve ${
            currentWalletData!.prettyName
          } connection request on your mobile.`;
        } else {
          subtitle = `Open the ${
            currentWalletData!.prettyName
          } browser extension to connect your wallet.`;
        }

        return (
          <Connecting
            onClose={onCloseModal}
            onReturn={() => setCurrentView(ModalView.WalletList)}
            name={currentWalletData?.prettyName!}
            logo={currentWalletData?.logo!}
            title="Requesting Connection"
            subtitle={subtitle}
          />
        );
      case ModalView.QRCode:
        return (
          <QRCode
            onClose={onCloseModal}
            onReturn={() => setCurrentView(ModalView.WalletList)}
            qrUri={qrWallet?.qrUrl}
            name={qrWallet?.walletInfo.prettyName}
          />
        );
      case ModalView.Error:
        return (
          <Error
            onClose={onCloseModal}
            onReturn={() => setCurrentView(ModalView.WalletList)}
            logo={currentWalletData?.logo!}
            onReconnect={() => onWalletClicked(currentWalletData?.name!)}
          />
        );
      case ModalView.NotExist:
        return (
          <NotExist
            onClose={onCloseModal}
            onReturn={() => setCurrentView(ModalView.WalletList)}
            onInstall={() => {
              const link = current?.downloadInfo?.link;
              if (link) router.push(current?.downloadInfo?.link);
            }}
            logo={currentWalletData?.logo!}
            name={currentWalletData?.prettyName!}
          />
        );
    }
  }, [
    currentView,
    onCloseModal,
    onWalletClicked,
    currentWalletData,
    router,
    current,
  ]);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onCloseModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-xl bg-white dark:bg-gray-lightbg px-4 pt-2.5 pb-4 [min-height:18rem] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xs sm:p-4">
                <div className="h-full">{_render}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
