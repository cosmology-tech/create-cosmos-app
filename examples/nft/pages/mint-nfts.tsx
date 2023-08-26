import { Divider } from '@chakra-ui/react';
import { WalletSection, MintNftsSection, Layout } from '@/components';

export default function MintNfts() {
  return (
    <Layout>
      <WalletSection />
      <MintNftsSection />
      <Divider mb={16} />
    </Layout>
  );
}
