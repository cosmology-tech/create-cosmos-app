import { ActionMeta, OnChangeValue, OptionBase } from 'chakra-react-select';

/**
 * Swap display `From` or `To`.
 */
export enum SwapType {
  from = 'from',
  to = 'to'
}

export enum SwapInputType {
  INPUT = 'INPUT',
  INVALID = 'INVALID'
}

export interface SwapOptionDataType extends OptionBase {
  /**
   * Required. Unique identifier for option, also the display chain name.
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
  denom?: string;
  /**
   * Current balance of this chain.
   */
  balanceDisplayAmount: string;
  /**
   * Amount denominated in fiat currency.
   */
  dollarValue: string;
}

export interface SwapTokenType extends SwapOptionDataType {
  /**
   * Current balance of this chain.
   */
  currentDisplayAmount?: string;
  /**
   * Amount denominated in fiat currency.
   */
  currentDollarValue?: string;
}

export type handleSwapDropdown = (
  newValue: OnChangeValue<SwapOptionDataType, false>,
  actionMeta: ActionMeta<SwapOptionDataType>
) => void;

export type handleSwapInput = (newValue: string) => void;

export type SwapDropdownType = {
  /**
   * Display dropdown or not.
   */
  isOpen: boolean;
  /**
   * Data of options.
   * @see {@link SwapOptionDataType}
   */
  dropdownData: SwapOptionDataType[];
  /**
   * Selected item.
   * @see {@link SwapOptionDataType}
   */
  selectedToken?: SwapOptionDataType;
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
   * @see {@link SwapTokenType}
   */
  selectedToken: SwapTokenType;
  /**
   * The function to open dropdown.
   */
  onOpen: () => void;
};

export type SwapControlInputValuePanelType = {
  displayPanel: boolean;
  loading: boolean;
  amount?: string;
  onAmountInputChange: handleSwapInput;
};

export type SwapEditableInputType = {
  id: string;
  inputAmount: string;
  inputDollarValue: string;
  selectedToken?: SwapOptionDataType;
  invalid?: boolean;
  invalidText?: string;
  onAmountInputChange: handleSwapInput;
};

export type SwapDisplayAmountType = {
  id: string;
  selectedToken?: SwapOptionDataType;
};

export interface SwapInputConfig {
  /**
   * Display input loading skeleton.
   */
  inputLoading: boolean;
  /**
   * Amount of the token.
   */
  inputAmount?: string;
  /**
   * Equal to the fiat currency value.
   */
  inputDollarValue?: string;
  /**
   * Display input invalid style.
   */
  invalid?: boolean;
  /**
   * Tips text of why invalid.
   */
  invalidText?: string;
}

export type SwapDropdownConfig = {
  /**
   * Display dropdown loading skeleton.
   */
  dropdownLoading: boolean;
  /**
   * Data of dropdown options.
   */
  dropdownData?: SwapOptionDataType[];
};

export interface SwapControlPanelType {
  /**
   * Required. Display `From` or `To` panel.
   * @see {@link SwapType}
   */
  swapType: SwapType;
  /**
   * Selected options.
   * @see {@link SwapTokenType}
   */
  selectedToken?: SwapTokenType;
  /**
   * Config to from token input.
   * @see {@link SwapInputConfig}
   */
  inputConfig?: SwapInputConfig;
  /**
   * Config to token dropdown.
   * @see {@link SwapDropdownConfig}
   */
  dropdownConfig: SwapDropdownConfig;
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
  onAmountInputChange?: handleSwapInput;
}

export interface SwapDropdownsViewFromConfig {
  /**
   * Selected options.
   * @see {@link SwapTokenType}
   */
  selectedToken?: SwapTokenType;
  /**
   * Config to from token input.
   * @see {@link SwapInputConfig}
   */
  inputConfig?: SwapInputConfig;
  /**
   * Config to token dropdown.
   * @see {@link SwapDropdownConfig}
   */
  dropdownConfig: SwapDropdownConfig;
}

export interface SwapDropdownsViewToConfig {
  /**
   * Selected options.
   * @see {@link SwapTokenType}
   */
  selectedToken?: SwapTokenType;
  /**
   * Config to token dropdown.
   * @see {@link SwapDropdownConfig}
   */
  dropdownConfig: SwapDropdownConfig;
}

export interface SwapDropdownsViewType {
  /**
   * Config to the `From` panel.
   * @see {@link SwapDropdownsViewFromConfig}
   */
  fromConfig: SwapDropdownsViewFromConfig;
  /**
   * Config to the `To` panel.
   * @see {@link SwapDropdownsViewToConfig}
   */
  toConfig: SwapDropdownsViewToConfig;
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
  onAmountInputChange?: handleSwapInput;
  /**
   *  A function called to handle switch dropdowns.
   */
  onSwapSwitch: () => void;
}

export type SwapSwitchButtonType = {
  onSwapSwitch: () => void;
};

export type SwapSlippageConfig = {
  /**
   * Selected slippage.
   */
  slippages: string[];
  /**
   * Display slippages list.
   */
  selectedSlippage: string;
};

export type SwapPriceRate = {
  from: {
    symbol?: string;
    value?: string;
  };
  to: {
    symbol?: string;
    value?: string;
  };
  dollar?: string;
};

export type SwapPriceDetailCoin = {
  logoUrl:
    | {
        png?: string;
        jpeg?: string;
        svg?: string;
      }
    | undefined;
  denom: string;
  amount: string;
  name: string;
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
  sellToken: SwapPriceDetailCoin;
  routes: SwapPriceDetailRoute[];
  buyToken: SwapPriceDetailCoin;
};

export type SwapPriceDetail = {
  priceImpact?: string;
  swapFee?: {
    percentage: string;
    value: string;
  };
  expectedOutput?: {
    value: string;
    symbol: string;
  };
  minimumReceived?: {
    value: string;
    symbol: string;
  };
  route?: SwapPriceDetailRouteDetail;
};

export interface SwapPriceType {
  loading: boolean;
  rate: SwapPriceRate;
  detail?: SwapPriceDetail;
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

export type SwapSettingType = {
  /**
   * Slippage tolerance config.
   * @see {@link SwapSlippageConfig}
   */
  slippageConfig: SwapSlippageConfig;
  /**
   * A function called to set slippage.
   */
  setSelectedSlippage: (value: string) => void;
};

/**
 * @see {@link SwapDropdownsViewType}
 */
export interface SwapViewType extends SwapDropdownsViewType, SwapSettingType {
  /**
   * An object of the current price exchange rate.
   * @see {@link SwapPriceType}
   */
  price: SwapPriceType;
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
  };
  /**
   * A function called to control submit.
   */
  onSwapSubmit: () => void;
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
