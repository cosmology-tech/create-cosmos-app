import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import AssetsOverview from './assets-overview';
import OsmosisAssetsList from './osmosis-assets';

export const AssetList = () => {
  return (
    <Box maxW="768px" mx="auto" mb="60px">
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
