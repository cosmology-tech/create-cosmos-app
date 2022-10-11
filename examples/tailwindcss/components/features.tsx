import { LinkIcon } from '@heroicons/react/24/outline'
import { FeatureProps } from './types'

export const Product = ({ title, text, href }: FeatureProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className="h-full [min-height:9rem] p-5 justify-center border rounded-lg border-black/10 transition duration-75 hover:shadow-xl dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10">
        <h3 className="text-lg font-medium">{title}&ensp;&rarr;</h3>
        <p className="mt-1 text-black/75 dark:text-white/75">{text}</p>
      </div>
    </a>
  )
}

export const Dependency = ({ title, text, href }: FeatureProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className="flex flex-row items-start justify-center h-full p-5 space-x-2 transition duration-75 border rounded-lg border-black/10 hover:shadow-xl dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10">
        <LinkIcon className="flex-shrink-0 w-5 h-5 mt-1 text-black/75 dark:text-white/75" />
        <div>
          <h3 className="text-lg font-medium">{title}&ensp;&rarr;</h3>
          <p className="mt-1 text-black/75 dark:text-white/75">{text}</p>
        </div>
      </div>
    </a>
  )
}
