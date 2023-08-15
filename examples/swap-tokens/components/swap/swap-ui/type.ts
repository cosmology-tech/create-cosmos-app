import { ActionMeta, OnChangeValue, OptionBase } from 'chakra-react-select';

/**
 * Swap display `From` or `To`.
 */
export enum SwapType {
  from = 'From',
  to = 'To',
}

export enum SwapInputType {
  INPUT = 'INPUT',
  INVALID = 'INVALID',
}

export enum LoadingMode {
  INITIAL = 'initial',
  AFTER_SWAP = 'afterSwap',
}

export interface SwapOptionType extends OptionBase {
  /**
   * Required. Unique identifier for option.
   */
  value: string;
  /**
   * Display symbol name.
   */
  symbol: string;
  /**
   * Icon display for option.
   */
  icon?: {
    png?: string;
    jpeg?: string;
    svg?: string;
  };
  /**
   * Unit of the chain.
   */
  denom: string;
  amount: string;
  displayAmount: string;
  dollarValue: string;
  chainName: string;
}

export type handleSwapDropdown = (
  newValue: SwapOptionType,
  actionMeta: ActionMeta<SwapOptionType>
) => void;

export type handleSwapInput = (newValue: string) => void;

export type SwapDropdownType = {
  /**
   * Display dropdown or not.
   */
  isOpen: boolean;
  /**
   * Data of options.
   * @see {@link SwapOptionType}
   */
  dropdownData: SwapOptionType[];
  /**
   * Selected item.
   * @see {@link SwapOptionType}
   */
  selectedToken?: SwapOptionType;
  /**
   * Close dropdown when selected token.
   */
  onClose: () => void;
  /**
   * A function called to handle select item.
   * @see {@link handleSwapDropdown}
   */
  onDropdownChange: handleSwapDropdown;
};

export type SwapControlDropdownButtonType = {
  loading: boolean;
  /**
   * The selected item.
   * @see {@link SwapOptionType}
   */
  selectedToken?: SwapOptionType;
  /**
   * The function to open dropdown.
   */
  onOpen: () => void;
};

export type SwapControlInputValuePanelType = {
  loading: boolean;
  amount?: string;
  onAmountInputChange: handleSwapInput;
};

export type SwapEditableInputType = {
  id: string;
  inputAmount: string;
  inputDollarValue: string;
  selectedToken?: SwapOptionType;
  invalidText?: string;
  onAmountInputChange: handleSwapInput;
};

export type SwapDisplayAmountType = {
  id: string;
  selectedToken?: SwapOptionType;
};

export interface SwapInputData {
  fromToken: {
    inputAmount: string;
    inputValue: string;
  };
  toToken: {
    outputAmount: string;
    outputValue: string;
  };
  invalidText?: string;
}

export interface SwapControlPanelType {
  loading: {
    [k in LoadingMode]: boolean;
  };
  /**
   * Required. Display `From` or `To` panel.
   * @see {@link SwapType}
   */
  swapType: SwapType;
  /**
   * Selected options.
   * @see {@link SwapOptionType}
   */
  selectedToken?: SwapOptionType;
  /**
   * Config to from token input.
   * @see {@link SwapInputData}
   */
  inputData?: SwapInputData;

  dropdownData: SwapOptionType[];

  /**
   * Can add a stable class name to control CSS.
   */
  className?: string;
  /**
   * A function called to handle dropdown change.
   * @see {@link handleSwapDropdown}
   */
  onDropdownChange: handleSwapDropdown;
  /**
   * A function called to handle amount input change.
   * @see {@link handleSwapInput}
   */
  onAmountInputChange: handleSwapInput;
}

export interface SwapDropdownsViewType {
  loading: {
    [k in LoadingMode]: boolean;
  };
  fromToken?: SwapOptionType;
  toToken?: SwapOptionType;
  /**
   * Config to from token input.
   * @see {@link SwapInputData}
   */
  inputData?: SwapInputData;
  dropdownData: SwapOptionType[];
  /**
   * A function called to handle dropdown change.
   * @see {@link handleSwapDropdown}
   */
  onFromDropdownChange: handleSwapDropdown;
  /**
   * A function called to handle dropdown change.
   * @see {@link handleSwapDropdown}
   */
  onToDropdownChange: handleSwapDropdown;
  /**
   * A function called to handle amount input change.
   * @see {@link handleSwapInput}
   */
  onAmountInputChange: handleSwapInput;
  /**
   *  A function called to handle switch dropdowns.
   */
  onSwapSwitch: () => void;
}

export type SwapSwitchButtonType = {
  onSwapSwitch: () => void;
};

export type SwapDetailCoin = {
  logoUrl:
    | {
        png?: string;
        jpeg?: string;
        svg?: string;
      }
    | undefined;
  symbol: string;
};

export type SwapPriceDetailRoute = {
  poolId: string;
  swapFee: string;
  baseLogo:
    | {
        png?: string;
        jpeg?: string;
        svg?: string;
      }
    | undefined;
  baseSymbol: string;
  quoteLogo:
    | {
        png?: string;
        jpeg?: string;
        svg?: string;
      }
    | undefined;
  quoteSymbol: string;
};

export type SwapPriceDetailRouteDetail = {
  tokenIn: SwapDetailCoin;
  routes: SwapPriceDetailRoute[];
  tokenOut: SwapDetailCoin;
};

export type SwapDetailsType = {
  priceImpact?: string;
  swapFee?: {
    percentage: string;
    value: string;
  };
  expectedOutput?: string;
  minimumReceived?: string;
  route?: SwapPriceDetailRouteDetail;
};

export interface SwapPriceType {
  priceRate: string;
  dollarValue: string;
}

export interface SwapPriceAndDetailsType {
  loading: boolean;
  price: SwapPriceType;
  tokenInSymbol?: string;
  tokenOutSymbol?: string;
  swapDetails?: SwapDetailsType;
}

export type SwapToggleSlippagesListButtonType = {
  slippagesListOpen: boolean;
  toggleOpenSlippagesList: () => void;
};

export type SwapSlippageButtonType = {
  label: string;
  selectedSlippage: string;
  setSelectedSlippage: (value: string) => void;
  onCloseSettingList: () => void;
};

export type SwapSlippageConfigType = {
  slippageConfig: {
    /**
     * Selected slippage.
     */
    slippages: string[];
    /**
     * Display slippages list.
     */
    selectedSlippage: string;
    /**
     * A function called to set slippage.
     */
    setSelectedSlippage: (value: string) => void;
  };
};

export type LoadingConfig = {
  mode: `${LoadingMode}`;
  isLoading: boolean;
};

/**
 * @see {@link SwapDropdownsViewType}
 */
export interface SwapViewType
  extends Omit<SwapDropdownsViewType, 'loading'>,
    SwapSlippageConfigType {
  /**
   * An object of the current price exchange rate.
   * @see {@link SwapPriceType}
   */
  tokenPrice: SwapPriceType;

  swapDetails?: SwapDetailsType;
  /**
   * Submit button status.
   */
  submitButtonConfig: {
    /**
     * Submit button display loading.
     */
    loading?: boolean;
    /**
     * Submit button display disabled.
     */
    disabled?: boolean;
    /**
     * Change the button display text.
     */
    btnText?: string;
  };
  /**
   * A function called to control submit.
   */
  onSwapSubmit: () => void;
  loadingConfig: LoadingConfig;
}
export interface SwapModalType extends SwapViewType {
  /**
   * If `true`, the modal will be open.
   */
  isOpen: boolean;
  /**
   * A function called to close modal.
   */
  onClose: () => void;
}
