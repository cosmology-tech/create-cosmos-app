/* eslint-disable @next/next/no-img-element */
import type { WalletModalProps } from '@cosmos-kit/core';
import { WalletStatus } from '@cosmos-kit/core';
import { useWallet } from '@cosmos-kit/react';
import { useCallback, Fragment, useState, useMemo, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  Connected,
  Connecting,
  Error,
  NotExist,
  QRCode,
  WalletList
} from './views';
import { useRouter } from 'next/router';
import Bowser from 'bowser';

export enum ModalView {
  WalletList,
  QRCode,
  Connecting,
  Connected,
  Error,
  NotExist
}

export const TailwindModal = ({ isOpen, setOpen }: WalletModalProps) => {
  const router = useRouter();

  const [userBrowserInfo, setUserBrowserInfo] = useState<{
    browser: string;
    device: string | undefined;
    os: string;
  }>();

  useEffect(() => {
    const parser = Bowser.getParser(window.navigator.userAgent);
    setUserBrowserInfo({
      browser: parser.getBrowserName(true),
      device: parser.getPlatform().type,
      os: parser.getOSName(true)
    });
  }, []);

  const { setCurrentWallet, connect, walletStatus, currentWalletName, currentWallet, getWallet } =
    useWallet();

  const [currentView, setCurrentView] = useState<ModalView>(
    ModalView.WalletList
  );

  const currentWalletData = currentWallet?.walletInfo;

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
      setCurrentWallet(name);
      connect();

      // 1ms timeout prevents _render from determining the view to show first
      setTimeout(() => {
        if (getWallet(name)?.walletInfo.mode === 'wallet-connect')
          setCurrentView(ModalView.QRCode);
      }, 1);
    },
    [setCurrentWallet, connect, getWallet]
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
          />
        );
      case ModalView.Connected:
        return (
          <Connected
            onClose={onCloseModal}
            onReturn={() => setCurrentView(ModalView.WalletList)}
            name={currentWalletData?.prettyName!}
            logo={currentWalletData?.logo!}
          />
        );
      case ModalView.Connecting:
        let subtitle: string;
        if (currentWalletData!.mode === 'wallet-connect') {
          subtitle = `Approve ${currentWalletData!.prettyName
            } connection request on your mobile.`;
        } else {
          subtitle = `Open the ${currentWalletData!.prettyName
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
        type Device = 'desktop' | 'tablet' | 'mobile';
        const device = userBrowserInfo?.device as Device;
        const downloads = currentWalletData?.downloads!;
        return (
          <NotExist
            onClose={onCloseModal}
            onReturn={() => setCurrentView(ModalView.WalletList)}
            onInstall={() =>
              router.push(
                downloads[device]?.find(
                  ({ browser, os }) =>
                    browser === userBrowserInfo?.browser ||
                    os === userBrowserInfo?.os
                )?.link || (currentWalletData?.downloads?.default as string)
              )
            }
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
    userBrowserInfo
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-xl bg-white dark:bg-gray-lightbg px-4 pt-5 pb-4 [min-height:18rem] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-4">
                <div className="h-full">{_render}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
