import NoSSR from 'react-no-ssr';
import { Layout, IbcTransfer } from '@/components';

export default function Home() {
  return (
    <Layout>
      <NoSSR>
        <IbcTransfer />
      </NoSSR>
    </Layout>
  );
}
