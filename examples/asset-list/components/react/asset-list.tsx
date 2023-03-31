import React, { useCallback, useEffect } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import AssetsOverview from './assets-overview';
import OsmosisAssetsList from './osmosis-assets';
import { chainName } from '../../config';
import { useChain } from '@cosmos-kit/react';
import { useRequest, useOsmosisClient } from '../../hooks';

// TODO: in useRequest, add cache functionality and make this a choice

export const AssetList = () => {
  const { address } = useChain(chainName);
  const osmosisClient = useOsmosisClient();
  const getBalances = useRequest(osmosisClient.getBalances);

  const getData = () => {
    if (!address) return;
    console.log('getting data...');
    getBalances.request({ address });
  };

  if (!getBalances.loading) console.log('balances', getBalances.data);
  // if (!getParams.loading) console.log('params', getParams.data);

  // useEffect(() => {
  //   getData();
  // }, [getData]);

  return (
    <Box maxW="768px" mx="auto" mb="60px">
      <Button onClick={getData}>Run</Button>
      <Box>
        {getBalances.loading
          ? 'loading'
          : getBalances.data?.map(({ denom }) => (
              <Box key={denom}>{denom}</Box>
            ))}
      </Box>
      <Text
        fontSize="20px"
        fontWeight="600"
        color="#2C3137"
        lineHeight="24px"
        mb="26px"
      >
        My assets
      </Text>
      <AssetsOverview />
      <Text
        fontSize="18px"
        fontWeight="600"
        color="#697584"
        lineHeight="22px"
        mb="20px"
      >
        On Osmosis
      </Text>
      <OsmosisAssetsList />
    </Box>
  );
};
