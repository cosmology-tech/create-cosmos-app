/* eslint-disable react-hooks/exhaustive-deps */

import { MouseEventHandler, useEffect, useMemo } from 'react';
import { ChainCard } from '../components';
import { Address } from './react/views';
import {
  ArrowPathIcon,
  ArrowDownTrayIcon,
  WalletIcon,
} from '@heroicons/react/24/outline';
import { useChain } from '@cosmos-kit/react';
import { WalletStatus } from '@cosmos-kit/core';
import { chainName } from '../config';

const buttons = {
  Disconnected: {
    icon: WalletIcon,
    title: 'Connect Wallet',
  },
  Connected: {
    icon: WalletIcon,
    title: 'My Wallet',
  },
  Rejected: {
    icon: ArrowPathIcon,
    title: 'Reconnect',
  },
  Error: {
    icon: ArrowPathIcon,
    title: 'Change Wallet',
  },
  NotExist: {
    icon: ArrowDownTrayIcon,
    title: 'Install Wallet',
  },
};

export const WalletSection = () => {
  const {
    connect,
    openView,
    status,
    username,
    address,
    chain: chainInfo,
    logoUrl,
  } = useChain(chainName);

  const chain = {
    chainName,
    label: chainInfo.pretty_name,
    value: chainName,
    icon: logoUrl,
  };

  // Events
  const onClickConnect: MouseEventHandler = async (e) => {
    e.preventDefault();
    await connect();
  };

  const onClickOpenView: MouseEventHandler = (e) => {
    e.preventDefault();
    openView();
  };

  const _renderConnectButton = useMemo(() => {
    // Spinner
    if (status === WalletStatus.Connecting) {
      return (
        <button className="rounded-lg w-full bg-purple-damp hover:bg-purple-damp/75 inline-flex justify-center items-center py-2.5 font-medium cursor-wait text-white">
          <svg
            className="w-5 h-5 text-white animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </button>
      );
    }

    let onClick;
    if (
      status === WalletStatus.Disconnected ||
      status === WalletStatus.Rejected
    )
      onClick = onClickConnect;
    else onClick = onClickOpenView;

    const buttonData = buttons[status];

    return (
      <button
        className="rounded-lg bg-purple-damp w-full hover:bg-purple-damp/75 inline-flex justify-center items-center py-2.5 font-medium text-white"
        onClick={onClick}
      >
        <buttonData.icon className="flex-shrink-0 w-5 h-5 mr-2 text-white" />
        {buttonData.title}
      </button>
    );
  }, [onClickConnect, onClickOpenView, status]);

  return (
    <div className="w-full max-w-sm pt-12 pb-16 mx-auto">
      <div className="grid grid-cols-1 gap-4">
        {chainName && (
          <div className="mb-4">
            <ChainCard
              prettyName={chain?.label || chainName}
              icon={chain?.icon}
            />
          </div>
        )}
        <div className="px-6">
          <div className="flex flex-col items-center justify-center px-4 py-6 mb-2 bg-white border rounded-lg border-black/10 dark:border-white/10 dark:bg-gray-lightbg md:py-12">
            <div>
              {username && (
                <div className="flex flex-row items-center mx-auto space-x-2 mb-2">
                  <div className="w-8 h-8 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
                  <p className="mt-2 mb-2 text-lg font-medium text-black dark:text-white">
                    {username}
                  </p>
                </div>
              )}
            </div>
            {address ? <Address>{address}</Address> : <></>}
            <div className="w-full max-w-[52] md:max-w-[64] px-8">
              {_renderConnectButton}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
