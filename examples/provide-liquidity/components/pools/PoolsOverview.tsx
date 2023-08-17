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
import { useManager } from '@cosmos-kit/react';
import { ReactElement, useEffect, useState } from 'react';
import { coin, defaultChainName } from '@/config';
import { RewardText } from './modals/ModalComponents';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { useEpochs, usePrices } from '@/hooks';

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
  totalDayReward,
}: {
  totalDayReward: number;
}) => {
  const [countdown, setCountdown] = useState(['00', '00', '00']);
  const { epochs, updateEpochs } = useEpochs();
  const { data: prices } = usePrices();

  const { getChainLogo } = useManager();
  const [isMobile] = useMediaQuery('(max-width: 660px)');

  useEffect(() => {
    if (!epochs) return;
    const currentEpoch = epochs.find((epoch) => epoch.identifier === 'day')!;

    const startTime = currentEpoch.currentEpochStartTime;
    const duration = Number(currentEpoch.duration?.seconds) || 60 * 60 * 24;
    const endTime = dayjs(startTime).add(duration, 'second');

    const countdownInterval = setInterval(() => {
      if (dayjs().isAfter(endTime)) {
        clearInterval(countdownInterval);
        updateEpochs();
      }

      const leftTime = dayjs.duration(endTime.diff(dayjs())).format('HH:mm:ss');
      setCountdown(leftTime.split(':'));
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [epochs, updateEpochs]);

  const osmoPrice = prices?.[coin.base] || 0;

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
              src={getChainLogo(defaultChainName)}
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
            <RewardText reward={totalDayReward} />
          </Flex>
        </StatBox>
      </GridItem>
    </Grid>
  );
};
