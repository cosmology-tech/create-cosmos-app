/* eslint-disable @next/next/no-img-element */
import { useWallet } from '@cosmos-kit/react'
import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

export const WalletList = ({
  onClose,
  onWalletClicked,
}: {
  onClose: () => void
  onWalletClicked: (name: string) => void
}) => {
  const { wallets } = useWallet()

  return (
    <div className="mt-3 text-center sm:mt-1.5 sm:ml-2 sm:text-left">
      <div className="flex flex-row justify-between items-center pl-3">
        <Dialog.Title as="h3" className="font-medium leading-6 text-gray-900">
          Select a Wallet
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
      <div className="mt-2 flex flex-col space-y-2 w-full">
        {wallets.map(({ name, prettyName, logo }) => (
          <button
            key={name}
            onClick={() => onWalletClicked(name)}
            className="bg-white rounded-lg px-2 py-3 inline-flex items-center justify-between group border w-full hover:border-purple-200 transition duration-150 ease-in-out"
          >
            <div className="flex flex-row items-center space-x-3">
              <img
                src={logo}
                alt={prettyName}
                className="h-8 w-8 aspect-1 flex-shrink-0"
              />
              <p className="text-black group-hover:text-purple-damp font-bold">
                {prettyName}
              </p>
            </div>
            <ChevronRightIcon className="text-black group-hover:text-purple-damp w-5 h-5 flex-shrink-0" />
          </button>
        ))}
      </div>
    </div>
  )
}
