/* eslint-disable @next/next/no-img-element */
import { useWallet } from '@cosmos-kit/react'
import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'
import { QRCodeSVG } from 'qrcode.react'

export const QRCode = ({
  onClose,
  onReturn,
}: {
  onClose: () => void
  onReturn: () => void
}) => {
  const { currentWallet } = useWallet()

  return (
    <div className="mt-3 text-center sm:mt-1.5 sm:ml-2 sm:text-left">
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
          Keplr Mobile
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
      <div className="w-full">
        <div className="mt-4">
          <QRCodeSVG
            value={currentWallet?.qrUri}
            bgColor={'#ffffff'}
            fgColor={'#000000'}
            level={'L'}
            includeMargin={false}
            className="w-auto h-72 border rounded-lg border-black/10 p-4 mx-auto"
          />
        </div>
      </div>
    </div>
  )
}
