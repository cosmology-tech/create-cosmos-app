import Link from 'next/link';
import { useState } from 'react';
import { Box, Icon, Tabs, Text } from '@interchain-ui/react';

import styles from '@/styles/utils.module.css';
import { ProductCategory, products } from '@/config';

type Tab = {
  label: string;
  category: ProductCategory | null;
};

const tabs: Tab[] = [
  {
    label: 'All',
    category: null,
  },
  {
    label: 'CosmWasm',
    category: 'cosmwasm',
  },
  {
    label: 'Cosmos SDK',
    category: 'cosmos-sdk',
  },
  {
    label: 'Frontend & UI',
    category: 'frontend',
  },
  {
    label: 'Testing',
    category: 'testing',
  },
];

export default function SidebarHomePage() {
  const [activeTab, setActiveTab] = useState(0);

  const filteredProducts = products.filter(
    (product) =>
      tabs[activeTab].category === null ||
      product.category === tabs[activeTab].category
  );

  return (
    <Box width="900px" mx="auto">
      <Tabs
        tabs={tabs.map(({ label }) => ({ label, content: undefined }))}
        activeTab={activeTab}
        onActiveTabChange={(tabId) => setActiveTab(tabId)}
      />
      <Box mt="20px" display="flex" flexWrap="wrap" gap="20px">
        {filteredProducts.map(({ name, link, description }) => (
          <ProductItem
            key={name}
            name={name}
            link={link}
            description={description}
          />
        ))}
      </Box>
    </Box>
  );
}

const ProductItem = ({
  name,
  link,
  description,
}: {
  name: string;
  description: string;
  link: string;
}) => {
  return (
    <Link href={link} target="_blank">
      <Box
        width="286px"
        height="138px"
        p="20px"
        borderWidth="1px"
        borderStyle="solid"
        borderColor="#D9E0E9"
        borderRadius="4px"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb="10px"
        >
          <Text
            fontSize="20px"
            fontWeight="500"
            attributes={{
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
            }}
          >
            {name}
          </Text>
          <Icon name="arrowRightLine" size="$lg" />
        </Box>
        <Text
          color="$textSecondary"
          fontSize="16px"
          fontWeight="500"
          lineHeight="$short"
          className={styles.threeLineClamp}
        >
          {description}
        </Text>
      </Box>
    </Link>
  );
};
