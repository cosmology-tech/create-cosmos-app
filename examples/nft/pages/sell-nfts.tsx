import { Divider } from '@chakra-ui/react';
import { WalletSection, SellNftsSection, Layout } from '@/components';

export default function SellNfts() {
  return (
    <Layout>
      <WalletSection />
      <SellNftsSection />
      <Divider mb={16} />
    </Layout>
  );
}
