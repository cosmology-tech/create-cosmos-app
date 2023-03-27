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
  Grid,
  GridItem,
  Skeleton,
  useMediaQuery,
  useColorModeValue,
} from '@chakra-ui/react';
import { SlOptionsVertical } from 'react-icons/sl';
import { Pool } from './provide-liquidity';
import BigNumber from 'bignumber.js';
import { truncDecimals } from './pool-detail-modal';
import { getOsmoAssetByDenom, getSymbolForDenom } from '../../utils';

export const getLogoUrlFromDenom = (denom: string | undefined) => {
  if (!denom) return '';
  const asset = getOsmoAssetByDenom(denom);
  return asset?.logo_URIs?.png;
};

export const ChainLogo = ({
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

const PoolName = ({ isMyPools, pool }: { isMyPools: boolean; pool: Pool }) => {
  const myPoolsColor = useColorModeValue('#2C3137', '#EEF2F8');
  const allPoolsColor = useColorModeValue('#697584', '#A7B4C2');
  const poolIdColor = useColorModeValue('#697584', '#A7B4C2');

  return (
    <Box>
      <Text
        mb="2px"
        fontWeight="600"
        fontSize="14px"
        color={isMyPools ? myPoolsColor : allPoolsColor}
      >
        {pool.poolAssets.length > 2
          ? `${pool.poolAssets.length} Token Pool`
          : pool.poolAssets
              .map(({ token }) => getSymbolForDenom(token!.denom))
              .join('/')}
      </Text>
      <Text fontWeight="400" fontSize="14px" color={poolIdColor}>
        Pool #{pool.id.low}
      </Text>
    </Box>
  );
};

const ChainLogoGroup = ({
  pool,
  style,
  logoWidth,
}: {
  pool: Pool;
  logoWidth: number;
  style?: React.CSSProperties;
}) => {
  return (
    <Flex alignItems="center" style={style}>
      {pool.poolAssets.slice(0, 3).map(({ token }, i) => {
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
  );
};

const PoolStat = ({
  name,
  amount,
  isMyPools,
}: {
  name: string;
  amount: string;
  isMyPools: boolean;
}) => {
  const titleColor = useColorModeValue('#697584', '#A7B4C2');
  const myPoolsStatColor = useColorModeValue('#2C3137', '#EEF2F8');
  const allPoolsStatColor = useColorModeValue('#697584', '#A7B4C2');
  return (
    <Flex flexDir="column" justifyContent="space-between" h="100%">
      <Text
        fontWeight="400"
        fontSize="14px"
        color={titleColor}
        lineHeight="short"
      >
        {name}
      </Text>
      <Text
        fontWeight="600"
        fontSize={isMyPools ? '14px' : '12px'}
        color={isMyPools ? myPoolsStatColor : allPoolsStatColor}
        lineHeight="short"
      >
        {amount}
      </Text>
    </Flex>
  );
};

const MenuPopover = ({
  pool,
  handleAddLiquidityClick,
  handleRemoveLiquidityClick,
  handleViewDetailClick,
}: {
  pool: Pool;
  handleAddLiquidityClick: () => void;
  handleRemoveLiquidityClick: () => void;
  handleViewDetailClick: () => void;
}) => {
  const hoverBgColor = useColorModeValue('#EEF2F8', '#1D2024');
  return (
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
            backgroundColor: hoverBgColor,
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
                handleAddLiquidityClick();
              }}
            >
              Add liquidity
            </Box>
            {new BigNumber(pool.myLiquidity || 0).gt(0) && (
              <Box
                py="2px"
                pl="4px"
                bg="blackAlpha.100"
                color="white"
                _hover={{ background: 'whiteAlpha.400' }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveLiquidityClick();
                }}
              >
                Remove liquidity
              </Box>
            )}
            <Box
              py="2px"
              pl="4px"
              bg="blackAlpha.100"
              color="white"
              _hover={{ background: 'whiteAlpha.400' }}
              onClick={(e) => {
                e.stopPropagation();
                handleViewDetailClick();
              }}
            >
              View pool detail
            </Box>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

const PoolList = ({
  pools,
  isMyPools = false,
  setPool,
  openPoolDetailModal,
  isFetchingApr,
  openModals,
}: {
  pools: Pool[];
  isMyPools?: boolean;
  setPool: (pool: Pool) => void;
  openPoolDetailModal: () => void;
  isFetchingApr: boolean;
  openModals: {
    onAddLiquidityOpen: () => void;
    onRemoveLiquidityOpen: () => void;
  };
}) => {
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

  const mobileHeaders = tableHeaders.slice(2, 5);

  const hasMultiTokens = pools.some(({ poolAssets }) => poolAssets.length > 2);
  const [isMobile] = useMediaQuery('(max-width: 780px)');

  const transformData = (isMyPools: boolean, pool: Pool) => {
    const dataSource = isMyPools
      ? [pool.myLiquidity, pool.bonded]
      : [pool.volume24H, pool.fees7D];

    const poolData = dataSource.map((data) => {
      if (isMyPools)
        return new BigNumber(data || 0).decimalPlaces(3).toString();
      return data;
    });

    const allData = [pool.liquidity, ...poolData];

    const formattedData = allData.map((item) => {
      return '$' + (item ?? 0).toLocaleString();
    });

    return formattedData;
  };

  const tableHeaderColor = useColorModeValue('#697584', '#A7B4C2');
  const myPoolsStatColor = useColorModeValue('#2C3137', '#EEF2F8');
  const allPoolsStatColor = useColorModeValue('#697584', '#A7B4C2');
  const rowHoverBgColor = useColorModeValue('#DDE3EB', '#1D2024');

  return (
    <>
      {isMobile ? (
        <Flex flexDir="column" gap="32px">
          {pools.map((pool) => {
            const formattedData = transformData(isMyPools, pool);

            return (
              <Grid
                h="98px"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(3, 1fr)"
                rowGap="18px"
                key={pool.id.low}
              >
                <GridItem colSpan={2} h="40px">
                  <Flex>
                    <ChainLogoGroup
                      logoWidth={isMyPools ? 40 : 28}
                      pool={pool}
                      style={{ marginRight: '8px' }}
                    />
                    <PoolName isMyPools={isMyPools} pool={pool} />
                  </Flex>
                </GridItem>
                <GridItem colSpan={1}>
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    h="100%"
                  >
                    <PoolStat
                      amount={truncDecimals(pool.apr['14'].totalApr, 2) + '%'}
                      isMyPools={isMyPools}
                      name="APR"
                    />
                    <MenuPopover
                      handleViewDetailClick={() => {
                        setPool(pool);
                        openPoolDetailModal();
                      }}
                      handleAddLiquidityClick={() => {
                        setPool(pool);
                        openModals.onAddLiquidityOpen();
                      }}
                      handleRemoveLiquidityClick={() => {
                        setPool(pool);
                        openModals.onRemoveLiquidityOpen();
                      }}
                      pool={pool}
                    />
                  </Flex>
                </GridItem>
                {mobileHeaders.map((header, i) => (
                  <GridItem colSpan={1} key={header}>
                    <PoolStat
                      amount={formattedData[i]}
                      isMyPools={isMyPools}
                      name={header}
                    />
                  </GridItem>
                ))}
              </Grid>
            );
          })}
        </Flex>
      ) : (
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
                    color={tableHeaderColor}
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
                const formattedData = transformData(isMyPools, pool);

                return (
                  <Tr
                    key={pool.id.low}
                    onClick={() => {
                      setPool(pool);
                      openPoolDetailModal();
                    }}
                    cursor="pointer"
                    _hover={{
                      backgroundColor: rowHoverBgColor,
                    }}
                  >
                    <Td p={0} w={0}>
                      <ChainLogoGroup
                        logoWidth={isMyPools ? 40 : 30}
                        pool={pool}
                        style={{ width: isMyPools ? '60px' : '40px' }}
                      />
                    </Td>
                    <Td
                      py={0}
                      transform={hasMultiTokens ? 'translateX(26px)' : ''}
                    >
                      <PoolName isMyPools={isMyPools} pool={pool} />
                    </Td>
                    {formattedData.map((stat, i) => (
                      <Td key={pool.id.low + i.toString()}>
                        <Text
                          fontWeight="600"
                          fontSize={isMyPools ? '14px' : '12px'}
                          color={
                            isMyPools ? myPoolsStatColor : allPoolsStatColor
                          }
                        >
                          {stat}
                        </Text>
                      </Td>
                    ))}
                    <Td>
                      <Skeleton isLoaded={!isFetchingApr} height="18px">
                        <Text
                          fontWeight="600"
                          fontSize={isMyPools ? '14px' : '12px'}
                          color={
                            isMyPools ? myPoolsStatColor : allPoolsStatColor
                          }
                        >
                          {truncDecimals(pool.apr['14'].totalApr, 2) + '%'}
                        </Text>
                      </Skeleton>
                    </Td>
                    <Td px={0} py="14px" position="relative">
                      <MenuPopover
                        handleViewDetailClick={() => {
                          setPool(pool);
                          openPoolDetailModal();
                        }}
                        handleAddLiquidityClick={() => {
                          setPool(pool);
                          openModals.onAddLiquidityOpen();
                        }}
                        handleRemoveLiquidityClick={() => {
                          setPool(pool);
                          openModals.onRemoveLiquidityOpen();
                        }}
                        pool={pool}
                      />
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default PoolList;
