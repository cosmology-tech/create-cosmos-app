/* eslint-disable @next/next/no-img-element */
import { useWallet } from '@cosmos-kit/react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import { QRCodeSVG } from 'qrcode.react';

export const QRCode = ({
  onClose,
  onReturn
}: {
  onClose: () => void;
  onReturn: () => void;
}) => {
  const { currentWallet } = useWallet();

  return (
    <div className="mt-3 text-center sm:mt-1.5 sm:text-left">
      <div className="flex flex-row items-center justify-between pl-3">
        <button
          type="button"
          className="p-2 text-black bg-white rounded-full hover:bg-gray-200 dark:text-white dark:bg-gray-lightbg dark:hover:bg-white/10"
          onClick={onReturn}
        >
          <span className="sr-only">Return</span>
          <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
        </button>
        <Dialog.Title
          as="h3"
          className="font-medium leading-6 text-center text-gray-900 dark:text-white"
        >
          Keplr Mobile
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
      <div className="w-full">
        <div className="mt-4">
          <QRCodeSVG
            value={currentWallet?.qrUri}
            bgColor={'#ffffff'}
            fgColor={'#000000'}
            level={'L'}
            includeMargin={false}
            className="w-auto p-4 mx-auto border rounded-lg h-72 border-black/10 dark:border-white/10"
          />
        </div>
      </div>
    </div>
  );
};
