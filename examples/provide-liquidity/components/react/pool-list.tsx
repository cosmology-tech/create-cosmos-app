import React from 'react';
import {
  Icon,
  Image,
  Flex,
  TableContainer,
  Table,
  Tr,
  Th,
  Thead,
  Tbody,
  Td,
  Text,
  Center,
  Box,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import { SlOptionsVertical } from 'react-icons/sl';
import { Asset, AssetList } from '@chain-registry/types';
import { asset_lists as ibcAssets } from '@chain-registry/assets';
import { assets } from 'chain-registry';
import { Pool } from './provide-liquidity';
import AddLiquidityModal from './add-liquidity-modal';
import BondSharesModal from './bond-shares-modal';
import RemoveLiquidityModal from './remove-liquidity-modal';

const denomToAsset = (denom: string): Asset | undefined => {
  const isIbcDenom = denom.startsWith('ibc/');

  for (const chain of isIbcDenom ? ibcAssets : assets) {
    for (const asset of chain.assets) {
      if (asset.base === denom) return asset;
    }
  }
};

export const getSymbolFromDenom = (denom: string | undefined) => {
  if (!denom) return denom;
  if (denom.startsWith('ibc/CD')) return 'TICK'; // TODO: fix this
  const asset = denomToAsset(denom);
  return asset?.symbol || denom.slice(0, 7) + '...';
};

export const getLogoUrlFromDenom = (denom: string | undefined) => {
  if (!denom) return '';
  const asset = denomToAsset(denom);
  return asset?.logo_URIs?.png;
};

const ChainLogo = ({
  index,
  logoWidth,
  url,
}: {
  index: number;
  logoWidth: number;
  url: string | undefined;
}) => {
  if (!url)
    return (
      <Center
        minW={logoWidth + 'px'}
        minH={logoWidth + 'px'}
        border="none"
        borderRadius="full"
        bgColor="#cdd5f3e6"
        transform={`translateX(-${index * 8}px)`}
      >
        <Text color="gray.600">?</Text>
      </Center>
    );
  return (
    <Image
      alt=""
      src={url}
      boxSize={logoWidth + 'px'}
      border="none"
      borderRadius="full"
      bgColor="#cdd5f3e6"
      transform={`translateX(-${index * 8}px)`}
    />
  );
};

const PoolList = ({
  pools,
  isMyPools = false,
  setPool,
  openPoolDetailModal,
  currentPool,
}: {
  pools: Pool[];
  isMyPools?: boolean;
  setPool: (pool: Pool) => void;
  currentPool: Pool | undefined;
  openPoolDetailModal: () => void;
}) => {
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

  const poolProperties = isMyPools
    ? ['My Liquidity', 'Bonded']
    : ['24H Volume', '7D Fees'];

  const tableHeaders: string[] = [
    '',
    'Pool',
    'Liquidity',
    ...poolProperties,
    'APR',
    '',
  ];

  const hasMultiTokens = pools.some(({ poolAssets }) => poolAssets.length > 2);

  return (
    <>
      <AddLiquidityModal
        isOpen={isAddLiquidityOpen}
        onClose={onAddLiquidityClose}
        currentPool={currentPool}
      />
      <RemoveLiquidityModal
        isOpen={isRemoveLiquidityOpen}
        onClose={onRemoveLiquidityClose}
        currentPool={currentPool}
      />
      <BondSharesModal
        isOpen={isBondSharesOpen}
        onClose={onBondSharesClose}
        currentPool={currentPool}
      />
      <TableContainer mb="20px">
        <Table variant="unstyled">
          <Thead>
            <Tr>
              {tableHeaders.map((header, i) => (
                <Th
                  key={header + i}
                  css={{ textTransform: 'none' }}
                  fontWeight="400"
                  fontSize="14px"
                  color="#697584"
                  transform={
                    header === 'Pool' && hasMultiTokens
                      ? 'translateX(26px)'
                      : ''
                  }
                >
                  {header}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {pools.map((pool) => {
              const poolData = isMyPools
                ? [pool.myLiquidity, pool.bonded]
                : [pool.volume24H, pool.fees7D];
              const allData = [pool.liquidity, ...poolData, '24%'];

              const formattedData = allData.map((item, i) => {
                if (i === allData.length - 1) return item;
                return '$' + (item ?? 0).toLocaleString();
              });

              return (
                <Tr
                  key={pool.id.low}
                  onClick={() => {
                    setPool(pool);
                    openPoolDetailModal();
                  }}
                  cursor="pointer"
                  _hover={{
                    backgroundColor: 'gray.200',
                  }}
                >
                  <Td p={0} w={0}>
                    <Flex w={isMyPools ? '60px' : '40px'} alignItems="center">
                      {pool.poolAssets.slice(0, 3).map(({ token }, i) => {
                        const logoWidth = isMyPools ? 40 : 30;
                        const denom = token!.denom;
                        return (
                          <ChainLogo
                            index={i}
                            key={denom}
                            logoWidth={logoWidth}
                            url={getLogoUrlFromDenom(denom)}
                          />
                        );
                      })}
                      {pool.poolAssets.length > 3 && (
                        <Text
                          fontWeight="400"
                          fontSize="14px"
                          color="#697584"
                          transform="translateX(-20px)"
                        >
                          +{pool.poolAssets.length - 3}
                        </Text>
                      )}
                    </Flex>
                  </Td>
                  <Td
                    py={0}
                    transform={hasMultiTokens ? 'translateX(26px)' : ''}
                  >
                    <Text
                      mb="2px"
                      fontWeight="600"
                      fontSize="14px"
                      color={isMyPools ? '#2C3137' : '#697584'}
                    >
                      {pool.poolAssets.length > 2
                        ? `${pool.poolAssets.length} Token Pool`
                        : pool.poolAssets
                            .map(({ token }) =>
                              getSymbolFromDenom(token?.denom)
                            )
                            .join('/')}
                    </Text>
                    <Text fontWeight="400" fontSize="14px" color="#697584">
                      Pool #{pool.id.low}
                    </Text>
                  </Td>
                  {formattedData.map((stat, i) => (
                    <Td key={pool.id.low + stat!.toString() + i}>
                      <Text
                        fontWeight="600"
                        fontSize={isMyPools ? '14px' : '12px'}
                        color={isMyPools ? '#2C3137' : '#697584'}
                      >
                        {stat}
                      </Text>
                    </Td>
                  ))}
                  <Td px={0} py="14px" position="relative">
                    <Popover placement="bottom-end">
                      <PopoverTrigger>
                        <Center
                          w="38px"
                          h="38px"
                          ml="auto"
                          borderRadius="4px"
                          transition="all 0.2s linear"
                          cursor="pointer"
                          _hover={{
                            backgroundColor: '#EEF2F8',
                          }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Icon as={SlOptionsVertical} />
                        </Center>
                      </PopoverTrigger>
                      <Portal>
                        <PopoverContent w="200px" bg="blackAlpha.800">
                          <PopoverArrow bg="blackAlpha.800" />
                          <PopoverBody cursor="pointer">
                            <Box
                              py="2px"
                              pl="4px"
                              bg="blackAlpha.100"
                              color="white"
                              _hover={{ background: 'whiteAlpha.400' }}
                              onClick={(e) => {
                                e.stopPropagation();
                                setPool(pool);
                                onAddLiquidityOpen();
                              }}
                            >
                              Add liquidity
                            </Box>
                            <Box
                              py="2px"
                              pl="4px"
                              bg="blackAlpha.100"
                              color="white"
                              _hover={{ background: 'whiteAlpha.400' }}
                              onClick={(e) => {
                                e.stopPropagation();
                                onRemoveLiquidityOpen();
                              }}
                            >
                              Remove liquidity
                            </Box>
                            <Box
                              py="2px"
                              pl="4px"
                              bg="blackAlpha.100"
                              color="white"
                              _hover={{ background: 'whiteAlpha.400' }}
                            >
                              View detail
                            </Box>
                          </PopoverBody>
                        </PopoverContent>
                      </Portal>
                    </Popover>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PoolList;
