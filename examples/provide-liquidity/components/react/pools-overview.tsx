import {
  Grid,
  GridItem,
  Flex,
  Image,
  Text,
  useMediaQuery,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import { useChain, useManager } from '@cosmos-kit/react';
import { EpochInfo } from 'osmojs/types/codegen/osmosis/epochs/genesis';
import { ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import { chainName } from '../../config';
import { RewardText } from './modal-components';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { osmosis } from 'osmojs';

dayjs.extend(duration);

const Colon = () => (
  <Text mx="4px" transform="translateY(-2px)" color="#697584">
    :
  </Text>
);

const StatBox = ({
  children,
  bgColor,
  width,
}: {
  bgColor?: string;
  children: ReactElement;
  width: { [key: string]: string } | string;
}) => {
  const defaultBgColor = useColorModeValue('#F5F7FB', '#1D2024');

  return (
    <Box
      w={width}
      h="92px"
      borderRadius="7px"
      bgColor={bgColor || defaultBgColor}
      py="20px"
      px="22px"
    >
      {children}
    </Box>
  );
};

export const PoolsOverview = ({
  osmoPrice,
  totalRewardPerDay,
}: {
  osmoPrice: string | number;
  totalRewardPerDay: number;
}) => {
  const [countdown, setCountdown] = useState(['00', '00', '00']);
  const isMountedRef = useRef(false);

  const { getRpcEndpoint } = useChain(chainName);
  const { getChainLogo } = useManager();

  const [isMobile] = useMediaQuery('(max-width: 660px)');

  const getEpoch = useCallback(async () => {
    let rpcEndpoint = await getRpcEndpoint();

    if (!rpcEndpoint) {
      console.log('no rpc endpoint — using a fallback');
      rpcEndpoint = `https://rpc.cosmos.directory/${chainName}`;
    }

    const client = await osmosis.ClientFactory.createRPCQueryClient({
      rpcEndpoint,
    });

    const { epochs } = await client.osmosis.epochs.v1beta1.epochInfos();

    const currentEpoch = epochs.find(
      (epoch) => epoch.identifier === 'day'
    ) as EpochInfo;

    const startTime = currentEpoch.currentEpochStartTime;
    const duration = currentEpoch.duration?.seconds.low || 60 * 60 * 24;
    const endTime = dayjs(startTime).add(duration, 'second');

    const countdownInterval = setInterval(async () => {
      if (dayjs().isAfter(endTime)) clearInterval(countdownInterval);

      const leftTime = dayjs.duration(endTime.diff(dayjs())).format('HH:mm:ss');
      setCountdown(leftTime.split(':'));
    }, 1000);
  }, [getRpcEndpoint]);

  useEffect(() => {
    if (!isMountedRef.current) {
      getEpoch();
      isMountedRef.current = true;
    }
  }, [getEpoch]);

  const titleColor = useColorModeValue('#697584', '#A7B4C2');
  const amountColor = useColorModeValue('#2C3137', '#EEF2F8');

  return (
    <Grid
      mb="25px"
      gap="24px"
      templateRows={isMobile ? 'repeat(2, 1fr)' : ''}
      templateColumns={`repeat(${isMobile ? 2 : 3}, 1fr)`}
    >
      <GridItem colSpan={1}>
        <StatBox width="100%">
          <Flex h="100%" alignItems="center">
            <Image
              w="56px"
              alt="Osmosis"
              src={getChainLogo(chainName)}
              transform="translateX(-8px)"
            />
            <Flex flexDir="column" justifyContent="space-between">
              <Text color={titleColor} fontWeight="600" fontSize="14px">
                OSMO Price
              </Text>
              <Flex alignItems="flex-end" gap="1px">
                <Text fontWeight="600" fontSize="14px" lineHeight="24px">
                  $
                </Text>
                <Text
                  color={amountColor}
                  fontWeight="600"
                  fontSize="26px"
                  lineHeight="30px"
                >
                  {Number(osmoPrice).toFixed(2)}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </StatBox>
      </GridItem>

      <GridItem colSpan={1}>
        <StatBox width="100%">
          <Flex
            h="100%"
            flexDir="column"
            justifyContent="center"
            fontWeight="600"
          >
            <Text color={titleColor} fontSize="14px">
              Reward distribution in
            </Text>
            <Flex
              color={amountColor}
              fontSize="26px"
              lineHeight="30px"
              alignItems="center"
            >
              <Text>{countdown[0]}</Text>
              <Colon />
              <Text>{countdown[1]}</Text>
              <Colon />
              <Text>{countdown[2]}</Text>
            </Flex>
          </Flex>
        </StatBox>
      </GridItem>
      <GridItem colSpan={isMobile ? 2 : 1}>
        <StatBox bgColor={useColorModeValue('#E5FFE4', '#304139')} width="100%">
          <Flex
            h="100%"
            flexDir="column"
            justifyContent="center"
            fontWeight="600"
          >
            <Text
              color={useColorModeValue('#36BB35', '#AEFFAB')}
              fontSize="14px"
            >
              Currently earning
            </Text>
            <RewardText reward={totalRewardPerDay} />
          </Flex>
        </StatBox>
      </GridItem>
    </Grid>
  );
};
