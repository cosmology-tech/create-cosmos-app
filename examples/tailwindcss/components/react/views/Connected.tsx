/* eslint-disable @next/next/no-img-element */
import { useWallet } from '@cosmos-kit/react'
import { Dialog } from '@headlessui/react'
import {
  XMarkIcon,
  ArrowRightOnRectangleIcon,
  ClipboardDocumentIcon,
} from '@heroicons/react/24/outline'
import { ChevronLeftIcon, CheckIcon } from '@heroicons/react/20/solid'
import copyToClipboard from 'copy-to-clipboard'
import { useState } from 'react'

export function truncate(address: string) {
  return `${address.substring(0, 12)}...${address.substring(
    address.length - 8,
    address.length,
  )}`
}

const Address = ({ children: address }: { children: string }) => {
  const [copied, setCopied] = useState<boolean>(false)
  return (
    <button
      className="border text-sm inline-flex items-center mx-4 space-x-2 justify-center py-1 rounded-full border-black/10 bg-white hover:bg-zinc-200 hover:border-zinc-200 text-gray-500"
      onClick={() => {
        copyToClipboard(address)
        setCopied(true)
        setTimeout(() => {
          setCopied(false)
        }, 1500)
      }}
    >
      <p>{truncate(address || '')}</p>
      {copied ? (
        <CheckIcon className="text-gray-500 h-3 w-3" />
      ) : (
        <ClipboardDocumentIcon className="text-gray-500 h-3 w-3" />
      )}
    </button>
  )
}

export const Connected = ({
  onClose,
  onReturn,
  name,
  logo,
}: {
  onClose: () => void
  onReturn: () => void
  name: string
  logo: string
}) => {
  const { disconnect, currentWallet } = useWallet()

  return (
    <div className="mt-3 text-center sm:mt-1.5 sm:text-left">
      <div className="flex flex-row justify-between items-center pl-3">
        <button
          type="button"
          className="text-black rounded-full bg-white hover:bg-gray-200 p-2"
          onClick={onReturn}
        >
          <span className="sr-only">Return</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        <Dialog.Title
          as="h3"
          className="font-medium text-center leading-6 text-gray-900"
        >
          {name}
        </Dialog.Title>
        <button
          type="button"
          className="text-black rounded-full bg-white hover:bg-gray-200 p-2"
          onClick={onClose}
        >
          <span className="sr-only">Close</span>
          <XMarkIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
      <div className="mt-4 flex flex-col justify-between h-full w-full pt-4 pb-8 px-2">
        <div className="w-16 h-16 rounded-full mx-auto bg-gradient-to-r from-purple-500 to-blue-500"></div>
        <div className="flex flex-row space-x-2 items-center mx-auto">
          <img
            src={logo}
            alt={name}
            className="w-5 h-5 aspect-1 flex-shrink-0 mt-1"
          />
          <p className="font-medium text-lg text-black mt-3 mb-2">
            {currentWallet!.username}
          </p>
        </div>
        <Address>{currentWallet!.address}</Address>
        <button
          className="rounded-lg bg-purple-damp mt-4 hover:bg-purple-damp/75 inline-flex justify-center items-center py-2.5 font-medium"
          onClick={() => {
            disconnect()
            onClose()
          }}
        >
          <ArrowRightOnRectangleIcon className="text-white w-5 h-5 flex-shrink-0 mr-2" />
          Disconnect
        </button>
      </div>
    </div>
  )
}
