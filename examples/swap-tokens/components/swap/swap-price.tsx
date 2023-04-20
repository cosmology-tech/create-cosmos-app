import {
  Box,
  Divider,
  Flex,
  IconButton,
  Image,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { AnimateBox } from '@cosmology-ui/animation';
import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

import { SwapSkeletonPrice } from './swap-skeleton';
import { SwapPriceDetail, SwapPriceType } from './type';

const SwapDetail = ({
  priceImpact,
  swapFee,
  expectedOutput,
  minimumReceived,
  route
}: SwapPriceDetail) => {
  return (
    <Box className="swap-price-detail-box">
      {priceImpact ? (
        <Flex className="swap-price-detail swap-price-impact">
          <Text className="swap-price-title">Price Impact</Text>
          <Text className="swap-price-value">{priceImpact}</Text>
        </Flex>
      ) : undefined}
      {swapFee ? (
        <Flex className="swap-price-detail swap-fee">
          <Text className="swap-price-title">
            Swap Fee{`(${swapFee.percentage})`}
          </Text>
          <Text className="swap-price-value">~ {swapFee.value}</Text>
        </Flex>
      ) : undefined}
      {expectedOutput ? (
        <Flex className="swap-price-detail swap-expected-output">
          <Text className="swap-price-title">Expected Output</Text>
          <Text className="swap-price-value">
            ~ {expectedOutput.value} {expectedOutput.symbol}
          </Text>
        </Flex>
      ) : undefined}
      {minimumReceived ? (
        <Flex className="swap-price-detail swap-minimum-received">
          <Text className="swap-price-title">
            Minimum received after slippage
          </Text>
          <Text className="swap-price-value">
            {minimumReceived.value} {minimumReceived.symbol}
          </Text>
        </Flex>
      ) : undefined}
      {route ? (
        <Flex className="swap-price-detail swap-route">
          <Text className="swap-price-title swap-route-title">Route</Text>
          <Flex className="swap-route-details">
            <Image
              className="swap-route-sellToken swap-route-icon"
              alt={route.sellToken.name}
              src={
                route.sellToken.logoUrl
                  ? route.sellToken.logoUrl.png ||
                    route.sellToken.logoUrl.jpeg ||
                    route.sellToken.logoUrl.svg
                  : `https://dummyimage.com/400x400/A7B4C2/fff&text=${route.sellToken.name.slice(
                      0,
                      1
                    )}`
              }
            />
            <Box className="swap-route-divider-box">
              <Divider className="swap-route-divider" />
            </Box>
            {route.routes.map(
              ({
                poolId,
                swapFee,
                baseLogo,
                baseSymbol,
                quoteLogo,
                quoteSymbol
              }) => {
                return (
                  <>
                    <Flex key={poolId} className="swap-route-pool-box">
                      <Image
                        className="swap-route-icon swap-route-icon-left"
                        alt={baseSymbol}
                        src={
                          baseLogo
                            ? baseLogo.png || baseLogo.jpeg || baseLogo.svg
                            : `https://dummyimage.com/400x400/A7B4C2/fff&text=${baseSymbol.slice(
                                0,
                                1
                              )}`
                        }
                      />
                      <Image
                        className="swap-route-icon swap-route-icon-right"
                        alt={quoteSymbol}
                        src={
                          quoteLogo
                            ? quoteLogo.png || quoteLogo.jpeg || quoteLogo.svg
                            : `https://dummyimage.com/400x400/A7B4C2/fff&text=${quoteSymbol.slice(
                                0,
                                1
                              )}`
                        }
                      />
                    </Flex>
                    <Text className="swap-route-fee">{swapFee}</Text>
                    <Box className="swap-route-divider-box">
                      <Divider className="swap-route-divider" />
                    </Box>
                  </>
                );
              }
            )}
            <Image
              className="swap-route-buyToken swap-route-icon"
              alt={route.buyToken.name}
              src={
                route.buyToken.logoUrl
                  ? route.buyToken.logoUrl.png ||
                    route.buyToken.logoUrl.jpeg ||
                    route.buyToken.logoUrl.svg
                  : `https://dummyimage.com/400x400/A7B4C2/fff&text=${route.buyToken.name.slice(
                      0,
                      1
                    )}`
              }
            />
          </Flex>
        </Flex>
      ) : undefined}
    </Box>
  );
};

export const SwapPrice = ({ loading, rate, detail }: SwapPriceType) => {
  const { isOpen, onToggle } = useDisclosure();

  if (loading) {
    return <SwapSkeletonPrice />;
  }
  return (
    <Box className="swap-price-box">
      <Flex className="swap-price">
        <Text className="swap-price-title">Price</Text>
        <Box className="swap-price-value">
          <Text as="span" className="swap-price-amount">
            {rate.from.value} {rate.from.symbol}&nbsp;=&nbsp;
            {rate.to.value} {rate.to.symbol}
          </Text>
          <Text as="span" className="swap-price-fiat">
            ~&nbsp;{rate.dollar}
          </Text>
          {detail ? (
            <IconButton
              aria-label="swap-detail"
              icon={<FiChevronDown />}
              className={`swap-toggle-button ${
                isOpen ? 'swap-detail-button-open' : ''
              }`}
              onClick={onToggle}
            />
          ) : undefined}
        </Box>
      </Flex>
      {detail && isOpen ? (
        <AnimateBox
          className="swap-detail-animate"
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0, y: -48 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          <SwapDetail {...detail} />
        </AnimateBox>
      ) : undefined}
    </Box>
  );
};
