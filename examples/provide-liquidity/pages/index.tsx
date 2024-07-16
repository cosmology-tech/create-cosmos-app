import { ReactNoSSR } from '@interchain-ui/react-no-ssr';
import { WalletSection, ProvideLiquidity, Layout } from '@/components';

export default function Home() {
  return (
    <Layout>
      <WalletSection />
      <ReactNoSSR>
        <ProvideLiquidity />
      </ReactNoSSR>
    </Layout>
  );
}
