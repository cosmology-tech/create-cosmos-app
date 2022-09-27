/* eslint-disable @next/next/no-img-element */
import { Dialog } from '@headlessui/react'
import { XMarkIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'

export const NotExist = ({
  onClose,
  onReturn,
  onInstall,
  logo,
  name,
}: {
  onClose: () => void
  onReturn: () => void
  onInstall: () => void
  logo: string
  name: string
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
      <div className="mt-4 py-6 h-full w-full flex flex-col sm:px-8">
        <img
          src={logo}
          alt={name}
          className="w-24 h-24 aspect-1 mx-auto flex-shrink-0"
        />
        <p className="text-black font-medium mt-6">Install {name}</p>
        <p className="text-gray-500 text-sm mt-2">
          To connect your {name} wallet, install the browser extension.
        </p>
        <button
          className="rounded-lg bg-purple-damp hover:bg-purple-damp/75 inline-flex justify-center items-center py-2.5 font-medium mt-6"
          onClick={onInstall}
        >
          <ArrowDownTrayIcon className="text-white w-5 h-5 flex-shrink-0 mr-2" />
          Install {name}
        </button>
      </div>
    </div>
  )
}
