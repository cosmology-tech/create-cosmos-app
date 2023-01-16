/* eslint-disable @next/next/no-img-element */
import { useChain } from '@cosmos-kit/react';
import { Dialog } from '@headlessui/react';
import {
  XMarkIcon,
  ArrowRightOnRectangleIcon,
  ClipboardDocumentIcon,
} from '@heroicons/react/24/outline';
import { ChevronLeftIcon, CheckIcon } from '@heroicons/react/20/solid';
import copyToClipboard from 'copy-to-clipboard';
import { useState } from 'react';

export function truncate(address: string) {
  return `${address.substring(0, 12)}...${address.substring(
    address.length - 8,
    address.length
  )}`;
}

export const Address = ({ children: address }: { children: string }) => {
  const [copied, setCopied] = useState<boolean>(false);
  return (
    <button
      className="inline-flex items-center justify-center px-6 py-1 mx-4 mb-4 space-x-2 text-sm text-gray-500 bg-white border rounded-full dark:text-white/75 dark:bg-gray-lightbg border-black/10 dark:border-white/10 hover:bg-zinc-200 dark:hover:bg-white/10 hover:border-zinc-200 dark:hover:border-white/10"
      onClick={() => {
        copyToClipboard(address);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1500);
      }}
    >
      <p>{truncate(address || '')}</p>
      {copied ? (
        <CheckIcon className="w-3 h-3 text-gray-500 dark:text-white/75" />
      ) : (
        <ClipboardDocumentIcon className="w-3 h-3 text-gray-500 dark:text-white/75" />
      )}
    </button>
  );
};

export const Connected = ({
  onClose,
  onReturn,
  disconnect,
  name,
  logo,
  username,
  address,
}: {
  onClose: () => void;
  onReturn: () => void;
  disconnect: () => void;
  name: string;
  logo: string;
  username?: string;
  address?: string;
}) => {
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
          {name}
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
      <div className="flex flex-col justify-between w-full h-full px-2 pt-4 pb-8 mt-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
        <div className="flex flex-row items-center mx-auto space-x-2">
          <img
            src={logo}
            alt={name}
            className="flex-shrink-0 w-4 h-4 mt-1 aspect-1"
          />
          <p className="mt-3 mb-2 text-lg font-medium text-black dark:text-white">
            {username || ''}
          </p>
        </div>
        <Address>{address || ''}</Address>
        <button
          className="rounded-lg bg-purple-damp hover:bg-purple-damp/75 inline-flex justify-center items-center py-2.5 font-medium text-white"
          onClick={() => {
            disconnect();
            onClose();
          }}
        >
          <ArrowRightOnRectangleIcon className="flex-shrink-0 w-5 h-5 mr-2 text-white" />
          Disconnect
        </button>
      </div>
    </div>
  );
};
