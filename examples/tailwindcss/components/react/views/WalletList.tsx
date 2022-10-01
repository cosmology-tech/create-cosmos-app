/* eslint-disable @next/next/no-img-element */
import { useWallet } from '@cosmos-kit/react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

export const WalletList = ({
  onClose,
  onWalletClicked
}: {
  onClose: () => void;
  onWalletClicked: (name: string) => void;
}) => {
  const { wallets } = useWallet();

  return (
    <div className="mt-3 text-center sm:mt-1.5 sm:text-left">
      <div className="flex flex-row items-center justify-between pl-3">
        <Dialog.Title
          as="h3"
          className="font-medium leading-6 text-gray-900 dark:text-white"
        >
          Select a Wallet
        </Dialog.Title>
        <button
          type="button"
          className="p-2 text-black bg-white rounded-full hover:bg-gray-200 dark:text-white dark:bg-gray-lightbg dark:hover:bg-white/10"
          onClick={onClose}
        >
          <span className="sr-only">Close</span>
          <XMarkIcon className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
      <div className="flex flex-col w-full mt-2 space-y-2">
        {wallets.map(({ walletInfo: { name, prettyName, logo } }) => (
          <button
            key={name}
            onClick={() => onWalletClicked(name)}
            className="inline-flex items-center justify-between w-full px-2 py-3 transition duration-150 ease-in-out bg-white border rounded-lg border-black/10 dark:border-white/10 dark:bg-gray-lightbg group hover:border-purple-200"
          >
            <div className="flex flex-row items-center space-x-3">
              <img
                src={logo}
                alt={prettyName}
                className="flex-shrink-0 w-8 h-8 aspect-1"
              />
              <p className="font-bold text-black dark:text-white group-hover:text-purple-damp">
                {prettyName}
              </p>
            </div>
            <ChevronRightIcon className="flex-shrink-0 w-5 h-5 text-black dark:text-white group-hover:text-purple-damp" />
          </button>
        ))}
      </div>
    </div>
  );
};
