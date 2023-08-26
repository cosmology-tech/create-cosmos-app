import NoSSR from 'react-no-ssr';
import { WalletSection, SwapTokens, Layout } from '@/components';

export default function Home() {
  return (
    <Layout>
      <WalletSection />
      <NoSSR>
        <SwapTokens />
      </NoSSR>
    </Layout>
  );
}
