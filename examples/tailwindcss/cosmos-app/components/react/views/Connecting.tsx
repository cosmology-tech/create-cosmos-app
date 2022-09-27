/* eslint-disable @next/next/no-img-element */
import { useWallet } from '@cosmos-kit/react'
import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'

export const Connecting = ({
  onClose,
  onReturn,
  name,
  logo,
  title,
  subtitle,
}: {
  onClose: () => void
  onReturn: () => void
  name: string
  logo: string
  title: string
  subtitle: string
}) => {
  const { disconnect } = useWallet()

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
      <div className="mt-4 h-full w-full flex flex-col sm:px-8 sm:py-6">
        <img
          src={logo}
          alt={name}
          className="w-24 h-24 aspect-1 flex-shrink-0 mx-auto"
        />
        <p className="text-black font-medium mt-6">{title}</p>
        <p className="text-gray-500 text-sm mt-2">{subtitle}</p>
      </div>
    </div>
  )
}
