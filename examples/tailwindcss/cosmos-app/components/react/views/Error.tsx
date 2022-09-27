/* eslint-disable @next/next/no-img-element */
import { useWallet } from '@cosmos-kit/react'
import { Dialog } from '@headlessui/react'
import { XMarkIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'

export const Error = ({
  onClose,
  onReturn,
  onReconnect,
  logo,
}: {
  onClose: () => void
  onReturn: () => void
  onReconnect: () => void
  logo: string
}) => {
  return (
    <div className="mt-3 text-center sm:mt-1.5">
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
          Error
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
      <div className="mt-4 py-6 h-full w-full flex flex-col sm:px-8">
        <div className="p-1.5 border rounded-full border-red-600 mx-auto aspect-1 flex-shrink-0">
          <img
            src={logo}
            alt="Wallet type logo"
            className="w-24 h-24 aspect-1 flex-shrink-0"
          />
        </div>
        <p className="text-black font-medium mt-6">An error has occured</p>
        <p className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet</p>
        <button
          className="rounded-lg bg-purple-damp hover:bg-purple-damp/75 inline-flex justify-center items-center py-2.5 font-medium mt-6"
          onClick={onReconnect}
        >
          <ArrowPathIcon className="text-white w-5 h-5 flex-shrink-0 mr-2" />
          Reconnect
        </button>
      </div>
    </div>
  )
}
