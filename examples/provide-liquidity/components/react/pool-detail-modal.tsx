import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button as ChakraButton,
  Text,
  Flex,
  Box,
  Heading,
  useDisclosure,
} from '@chakra-ui/react';
import { Pool } from './provide-liquidity';
import { getSymbolFromDenom, getLogoUrlFromDenom } from './pool-list';
import { ChainLogo } from './pool-card';
import AddLiquidityModal from './add-liquidity-modal';
import RemoveLiquidityModal from './remove-liquidity-modal';
import BondSharesModal from './bond-shares-modal';

const PoolAssetDisplay = ({
  logoUrl,
  amount,
  token,
  mt,
}: {
  logoUrl: string | undefined;
  amount: number;
  token: string;
  mt?: string;
}) => {
  return (
    <Flex alignItems="center" mt={mt || 0}>
      <ChainLogo url={logoUrl} width="16px" />
      <Text ml="8px" fontWeight="600" fontSize="14px" color="#697584">
        {amount}
      </Text>
      <Text ml="4px" fontWeight="400" fontSize="14px" color="#697584">
        {token}
      </Text>
    </Flex>
  );
};

const Button = ({
  type,
  size,
  onClick,
  text,
  mr,
}: {
  type: 'solid' | 'outline';
  size: { w: string; h: string };
  onClick: () => void;
  text: string;
  mr?: string;
}) => {
  const baseStyle = {
    solid: {
      color: '#FFFFFF',
      backgroundColor: '#2C3137',
    },
    outline: {
      color: '#2C3137',
      border: '2px solid #2C3137',
      backgroundColor: 'transparent',
    },
  };

  return (
    <ChakraButton
      mr={mr}
      w={size.w}
      h={size.h}
      fontWeight="600"
      fontSize="14px"
      css={{ ...baseStyle[type] }}
      onClick={onClick}
      _hover={{
        opacity: 0.8,
      }}
    >
      {text}
    </ChakraButton>
  );
};

const BondLiquidityCard = ({ period }: { period: number }) => {
  return (
    <Flex
      w="226px"
      h="242px"
      bgColor="#F5F7FB"
      borderRadius="7px"
      flexDir="column"
      justifyContent="space-between"
      p="24px"
    >
      <Box>
        <Text color="#697584" fontWeight="600" fontSize="14px">
          Bonded {period} day
        </Text>
        <Flex mb="24px" alignItems="flex-end">
          <Text color="#697584" fontWeight="600" fontSize="14px" mr="10px">
            APR
          </Text>
          <Text
            color="#697584"
            fontWeight="600"
            fontSize="26px"
            lineHeight="28px"
            mr="2px"
          >
            2.43
          </Text>
          <Text color="#697584" fontWeight="600" fontSize="14px">
            %
          </Text>
        </Flex>
        <Flex alignItems="flex-end">
          <Text color="#2C3137" fontWeight="600" fontSize="14px" mr="4px">
            $
          </Text>
          <Text
            color="#2C3137"
            fontWeight="600"
            fontSize="26px"
            lineHeight="26px"
          >
            2.94
          </Text>
        </Flex>
        <Flex>
          <Text color="#2C3137" fontWeight="600" fontSize="14px" mr="4px">
            12.02
          </Text>
          <Text color="#2C3137" fontWeight="400" fontSize="14px">
            pool shares
          </Text>
        </Flex>
      </Box>
      <Flex>
        <Button
          mr="12px"
          text="unbond"
          type="outline"
          size={{ w: '74px', h: '32px' }}
          onClick={() => console.log('unbond')}
        />
        <Button
          type="solid"
          text="Bond more"
          size={{ w: '94px', h: '32px' }}
          onClick={() => console.log('Bond more')}
        />
      </Flex>
    </Flex>
  );
};

export const PoolDetailModal = ({
  isOpen,
  onClose,
  pool,
}: {
  isOpen: boolean;
  onClose: () => void;
  pool: Pool | undefined;
}) => {
  const poolId = pool?.id.low;

  const poolName = pool?.poolAssets.map(({ token }) =>
    getSymbolFromDenom(token?.denom)
  );

  const {
    isOpen: isAddLiquidityOpen,
    onOpen: onAddLiquidityOpen,
    onClose: onAddLiquidityClose,
  } = useDisclosure();

  const {
    isOpen: isRemoveLiquidityOpen,
    onOpen: onRemoveLiquidityOpen,
    onClose: onRemoveLiquidityClose,
  } = useDisclosure();

  const {
    isOpen: isBondSharesOpen,
    onOpen: onBondSharesOpen,
    onClose: onBondSharesClose,
  } = useDisclosure();

  return (
    <>
      <AddLiquidityModal
        isOpen={isAddLiquidityOpen}
        onClose={onAddLiquidityClose}
        currentPool={pool}
      />
      <RemoveLiquidityModal
        isOpen={isRemoveLiquidityOpen}
        onClose={onRemoveLiquidityClose}
        currentPool={pool}
      />
      <BondSharesModal
        isOpen={isBondSharesOpen}
        onClose={onBondSharesClose}
        currentPool={pool}
      />
      <Modal isOpen={isOpen} onClose={onClose} size="6xl" isCentered>
        <ModalOverlay />
        <ModalContent w="768px">
          <ModalHeader>
            <Text fontWeight="600" fontSize="20px">
              {poolName?.join(' / ')}
            </Text>
            <Text fontWeight="400" fontSize="14px">
              Pool #{poolId}
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex mb="40px">
              <ChainLogo
                url={getLogoUrlFromDenom(pool?.poolAssets[0].token?.denom)}
                width="54px"
              />
              <ChainLogo
                url={getLogoUrlFromDenom(pool?.poolAssets[1].token?.denom)}
                width="54px"
                isAtRight
              />
              <Box ml="14px">
                <Text fontWeight="600" fontSize="14px" color="#697584">
                  Pool liquidity
                </Text>
                <Text fontWeight="600" fontSize="26px" color="#2C3137">
                  $70,055,692
                </Text>
              </Box>
              <Box ml="110px">
                <Text fontWeight="600" fontSize="14px" color="#697584">
                  Swap fee
                </Text>
                <Text fontWeight="600" fontSize="26px" color="#2C3137">
                  0.2%
                </Text>
              </Box>
              <Box ml="58px">
                <Text fontWeight="600" fontSize="14px" color="#697584">
                  24h trading volume
                </Text>
                <Text fontWeight="600" fontSize="26px" color="#2C3137">
                  $70,055,692
                </Text>
              </Box>
            </Flex>
            <Flex justifyContent="space-between" mb="36px">
              <Box
                w="476px"
                h="192px"
                bgColor="#F5F7FB"
                borderRadius="8px"
                py="20px"
                px="24px"
              >
                <Text fontWeight="600" fontSize="14px" color="#697584" mb="2px">
                  Your pool balance
                </Text>
                <Flex mb="28px">
                  <Box>
                    <Text fontWeight="600" fontSize="26px" lineHeight="30px">
                      $128.02
                    </Text>
                    <Text fontWeight="400" fontSize="14px" color="#2C3137">
                      212.0432 pool shares
                    </Text>
                  </Box>
                  <Flex ml="70px" flexDir="column" justifyContent="flex-end">
                    <PoolAssetDisplay
                      amount={45.321}
                      logoUrl={getLogoUrlFromDenom(
                        pool?.poolAssets[0].token?.denom
                      )}
                      token="ATOM"
                    />
                    <PoolAssetDisplay
                      amount={12.043}
                      logoUrl={getLogoUrlFromDenom(
                        pool?.poolAssets[1].token?.denom
                      )}
                      token="OSMO"
                      mt="6px"
                    />
                  </Flex>
                </Flex>
                <Flex>
                  <Button
                    onClick={onAddLiquidityOpen}
                    size={{ w: '124px', h: '48px' }}
                    type="solid"
                    text="Add liquidity"
                    mr="20px"
                  />
                  <Button
                    onClick={onRemoveLiquidityOpen}
                    size={{ w: '156px', h: '48px' }}
                    type="outline"
                    text="Remove liquidity"
                  />
                </Flex>
              </Box>
              <Box
                w="220px"
                h="192px"
                bgColor="#E5FFE4"
                borderRadius="8px"
                py="20px"
                px="24px"
              >
                <Text color="#36BB35" fontWeight="600" fontSize="14px">
                  Yesterdays rewards
                </Text>
                <Flex color="#36BB35" fontWeight="600" alignItems="flex-end">
                  <Text fontSize="26px" lineHeight="30px">
                    12.87
                  </Text>
                  <Text fontSize="14px">OSMO</Text>
                </Flex>
                <Text color="#36BB35" fontWeight="400" fontSize="14px">
                  $12.87
                </Text>
              </Box>
            </Flex>
            <Flex mb="34px">
              <Box>
                <Heading fontWeight="600" fontSize="20px">
                  Bond your liquidity
                </Heading>
                <Text color="#2C3137" fontWeight="400" fontSize="14px">
                  Bond your tokens to earn additional OSMO rewards to the swap
                  fees.
                </Text>
              </Box>
              <Box ml="44px">
                <Text color="#697584" fontWeight="600" fontSize="14px">
                  Unbonded
                </Text>
                <Text color="#2C3137" fontWeight="600" fontSize="26px">
                  $22.51
                </Text>
                <Flex color="#2C3137" fontSize="14px">
                  <Text fontWeight="600">12.02</Text>
                  <Text fontWeight="400" ml="4px">
                    pool shares
                  </Text>
                </Flex>
              </Box>
            </Flex>
            <Flex mb="40px" justifyContent="space-between">
              <BondLiquidityCard period={1} />
              <BondLiquidityCard period={7} />
              <BondLiquidityCard period={14} />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
