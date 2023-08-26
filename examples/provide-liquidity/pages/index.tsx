import NoSSR from 'react-no-ssr';
import { WalletSection, ProvideLiquidity, Layout } from '@/components';

export default function Home() {
  return (
    <Layout>
      <WalletSection />
      <NoSSR>
        <ProvideLiquidity />
      </NoSSR>
    </Layout>
  );
}
