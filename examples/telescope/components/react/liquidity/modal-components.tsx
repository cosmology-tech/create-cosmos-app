import {
  Box,
  Button,
  Flex,
  Text,
  useColorModeValue,
  useMediaQuery,
  useRadio,
  UseRadioProps,
} from '@chakra-ui/react';
import BigNumber from 'bignumber.js';
import { ChainLogo } from './pool-card';
import { truncDecimals } from './pool-detail-modal';

export const NormalButton = ({
  type,
  size,
  onClick,
  text,
  mr,
  disabled,
  isLoading = false,
}: {
  type: 'solid' | 'outline';
  size: { w: string; h: string };
  onClick: () => void;
  text: string;
  mr?: string;
  disabled?: boolean;
  isLoading?: boolean;
}) => {
  const baseStyle = {
    solid: {
      color: useColorModeValue('#FFF', '#1D2024'),
      backgroundColor: useColorModeValue('#2C3137', '#EEF2F8'),
    },
    outline: {
      color: useColorModeValue('#2C3137', '#EEF2F8'),
      border: `2px solid ${useColorModeValue('#2C3137', '#EEF2F8')}`,
      backgroundColor: 'transparent',
    },
  };

  const isDisabledState = isLoading || disabled;

  return (
    <Button
      mr={mr}
      w={size.w}
      h={size.h}
      isDisabled={isDisabledState}
      fontWeight="600"
      fontSize="14px"
      css={{ ...baseStyle[type] }}
      onClick={onClick}
      isLoading={isLoading}
      _hover={{
        opacity: isDisabledState ? 0.6 : 0.8,
      }}
      _active={{
        opacity: isDisabledState ? 0.6 : 0.8,
      }}
      _disabled={{
        opacity: 0.6,
        cursor: 'not-allowed',
      }}
    >
      {text}
    </Button>
  );
};

export const LargeButton = ({
  width,
  btnText,
  isLoading,
  handleClick,
  disabled,
}: {
  width: string;
  btnText: string;
  isLoading: boolean;
  handleClick: () => void;
  disabled?: boolean;
}) => {
  return (
    <Button
      isLoading={isLoading}
      isDisabled={isLoading || disabled}
      onClick={handleClick}
      _hover={{
        opacity: isLoading || disabled ? 1 : 0.9,
      }}
      _active={{
        opacity: isLoading || disabled ? 1 : 0.9,
      }}
      _disabled={{
        cursor: 'not-allowed',
        background: '#CBD3DD',
        color: '#697584',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)',
      }}
      w={width}
      h="68px"
      bgColor={useColorModeValue('#2C3137', '#EEF2F8')}
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.3)"
      borderRadius="6px"
      fontWeight="semibold"
      fontSize="18px"
      color={useColorModeValue('#FFF', '#1D2024')}
    >
      {btnText}
    </Button>
  );
};

export const PoolAssetDisplay = ({
  logoUrl,
  amount,
  token,
  mt,
}: {
  logoUrl: string | undefined;
  amount: number | string;
  token: string;
  mt?: string;
}) => {
  const textColor = useColorModeValue('#697584', '#A7B4C2');

  return (
    <Flex alignItems="center" mt={mt || 0}>
      <ChainLogo url={logoUrl} width="16px" />
      <Text ml="8px" fontWeight="600" fontSize="14px" color={textColor}>
        {amount}
      </Text>
      <Text ml="4px" fontWeight="400" fontSize="14px" color={textColor}>
        {token}
      </Text>
    </Flex>
  );
};

export const BondLiquidityCard = ({
  duration,
  openBondModal,
  apr,
  bondedShares,
  bondedValue,
  onUnbondClick,
  isUnbonding,
}: {
  duration: string;
  openBondModal: () => void;
  apr: number | string;
  bondedValue: number | string;
  bondedShares: number | string;
  onUnbondClick: () => void;
  isUnbonding: boolean;
}) => {
  const val = new BigNumber(bondedValue);
  const isValueTooSmall = val.lt(0.01) && val.gt(0);
  const [isMobile] = useMediaQuery('(max-width: 480px)');

  const titleColor = useColorModeValue('#697584', '#A7B4C2');
  const statColor = useColorModeValue('#2C3137', '#EEF2F8');

  return (
    <Flex
      w={isMobile ? '100%' : { sm: '100%', md: '226px', lg: '226px' }}
      h="242px"
      bgColor={useColorModeValue('#F5F7FB', '#1D2024')}
      borderRadius="7px"
      flexDir="column"
      justifyContent="space-between"
      p="24px"
    >
      <Box>
        <Text color={titleColor} fontWeight="600" fontSize="14px" mb="4px">
          Bonded {duration} day
        </Text>
        <Flex mb="24px" alignItems="flex-end">
          <Text color={titleColor} fontWeight="600" fontSize="14px" mr="10px">
            APR
          </Text>
          <Text
            color={titleColor}
            fontWeight="600"
            fontSize="26px"
            lineHeight="28px"
            mr="2px"
          >
            {truncDecimals(apr, 2)}
          </Text>
          <Text color={titleColor} fontWeight="600" fontSize="14px">
            %
          </Text>
        </Flex>
        <Flex alignItems="flex-end">
          {isValueTooSmall && (
            <Text
              color={statColor}
              fontWeight="600"
              fontSize="20px"
              lineHeight="shorter"
              mr="4px"
            >
              {'<'}
            </Text>
          )}
          <Text color={statColor} fontWeight="600" fontSize="14px" mr="4px">
            $
          </Text>
          <Text
            color={statColor}
            fontWeight="600"
            fontSize="26px"
            lineHeight="26px"
          >
            {isValueTooSmall ? '0.01' : truncDecimals(bondedValue, 2)}
          </Text>
        </Flex>
        <Flex>
          <Text color={statColor} fontWeight="600" fontSize="14px" mr="4px">
            {truncDecimals(bondedShares, 4)}
          </Text>
          <Text color={statColor} fontWeight="400" fontSize="14px">
            pool shares
          </Text>
        </Flex>
      </Box>
      <Flex>
        <NormalButton
          mr="12px"
          text="Unbond"
          type="outline"
          size={{ w: '74px', h: '32px' }}
          onClick={onUnbondClick}
          disabled={new BigNumber(bondedValue).lte(0)}
          isLoading={isUnbonding}
        />
        <NormalButton
          type="solid"
          text="Bond more"
          size={{ w: '94px', h: '32px' }}
          onClick={openBondModal}
        />
      </Flex>
    </Flex>
  );
};

export const RadioCard = (
  props: UseRadioProps & { title: string; apr: string }
) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const { apr, title } = props;

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderRadius="7px"
        w="228px"
        h="98px"
        bg="#F5F7FB"
        pl="24px"
      >
        <Flex w="100%" h="100%" alignItems="center">
          <Box
            {...checkbox}
            mr="16px"
            boxSize="24px"
            borderRadius="full"
            border="2px solid #B5BAC2"
            _checked={{
              border: '6px solid #2C3137',
            }}
          />
          <Box color="#2C3137">
            <Text fontWeight="semibold" fontSize="22px">
              {title}
            </Text>
            <Text fontSize="14px">{apr}</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export const RewardText = ({ reward }: { reward: number }) => {
  const rewardDisplay = truncDecimals(reward, 2);
  const rewardNum = new BigNumber(reward);
  const isRewardEqualsToZero = rewardNum.isEqualTo(0);
  const isRewardTooSmall = rewardNum.lt(0.01) && rewardNum.gt(0);

  return (
    <Flex
      alignItems="flex-end"
      gap="1px"
      color={useColorModeValue('#36BB35', '#AEFFAB')}
      fontWeight="600"
    >
      {isRewardTooSmall && (
        <Text fontSize="22px" lineHeight="26px" mr="5px">
          {'<'}
        </Text>
      )}
      <Text fontSize="26px" lineHeight="26px">
        <span style={{ fontSize: '14px', lineHeight: '14px' }}>$</span>
        {!isRewardEqualsToZero
          ? isRewardTooSmall
            ? '0.01'
            : rewardDisplay
          : '0'}
      </Text>
      <Text fontSize="14px">/</Text>
      <Text fontSize="14px">day</Text>
    </Flex>
  );
};
