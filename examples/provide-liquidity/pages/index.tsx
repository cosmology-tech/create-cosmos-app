import { useEffect, useState } from 'react';
import { WalletSection, ProvideLiquidity, Layout } from '@/components';

export default function Home() {
  const [content, setContent] = useState<JSX.Element>();

  useEffect(() => {
    setContent(<ProvideLiquidity />);
  }, []);

  return (
    <Layout>
      <WalletSection />
      {content}
    </Layout>
  );
}
