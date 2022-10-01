import { MouseEventHandler, useEffect, useMemo } from 'react'
import { ChainCard } from '../components'
import { Address, truncate } from './react/views'
import {
  ArrowPathIcon,
  ArrowDownTrayIcon,
  WalletIcon,
} from '@heroicons/react/24/outline'
import { useWallet } from '@cosmos-kit/react'
import { ChainName, WalletStatus } from '@cosmos-kit/core'
import { assets as chainAssets } from 'chain-registry'

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
}

export const WalletSection = ({ chainName }: { chainName?: ChainName }) => {
  const walletManager = useWallet()
  const {
    connect,
    openView,
    setCurrentChain,
    walletStatus,
    username,
    address,
    currentWalletName,
    chains,
  } = walletManager

  const chainOptions = useMemo(
    () =>
      chains.map((chainRecord) => {
        const assets = chainAssets.find(
          (_chain) => _chain.chain_name === chainRecord.name,
        )?.assets
        return {
          chainName: chainRecord.name,
          label: chainRecord.chain?.pretty_name,
          value: chainRecord.name,
          icon: assets
            ? assets[0]?.logo_URIs?.svg || assets[0]?.logo_URIs?.png
            : undefined,
          disabled: false,
        }
      }),
    [chains],
  )

  const chain = chainOptions.find((c) => c.chainName === chainName)

  useEffect(() => {
    setCurrentChain(chainName)
  }, [chainName, setCurrentChain])

  // Events
  const onClickConnect: MouseEventHandler = async (e) => {
    e.preventDefault()
    openView()
    if (currentWalletName) {
      await connect()
    }
  }

  const onClickOpenView: MouseEventHandler = (e) => {
    e.preventDefault()
    openView()
  }

  const _renderConnectButton = useMemo(() => {
    // Spinner
    if (walletStatus === WalletStatus.Connecting) {
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
      )
    }

    let onClick
    if (
      walletStatus === WalletStatus.Disconnected ||
      walletStatus === WalletStatus.Rejected
    )
      onClick = onClickConnect
    else onClick = onClickOpenView

    const buttonData = buttons[walletStatus]

    return (
      <button
        className="rounded-lg bg-purple-damp w-full hover:bg-purple-damp/75 inline-flex justify-center items-center py-2.5 font-medium text-white"
        onClick={onClick}
      >
        <buttonData.icon className="flex-shrink-0 w-5 h-5 mr-2 text-white" />
        {buttonData.title}
      </button>
    )
  }, [walletStatus])

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
                <div className="flex flex-row items-center mx-auto space-x-2">
                  <div className="w-8 h-8 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
                  <p className="mt-2 mb-2 text-lg font-medium text-black dark:text-white">
                    {username}
                  </p>
                </div>
              )}
            </div>
            {address ? <Address>{truncate(address)}</Address> : <></>}
            <div className="w-full max-w-[52] md:max-w-[64]">
              {_renderConnectButton}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
