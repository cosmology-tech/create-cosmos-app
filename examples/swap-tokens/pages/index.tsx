import { WalletSection, SwapTokens, Layout } from '@/components';
import { useState, useEffect } from 'react';

export default function Home() {
  const [content, setContent] = useState<JSX.Element>();

  useEffect(() => {
    setContent(<SwapTokens />);
  }, []);

  return (
    <Layout>
      <WalletSection />
      {content}
    </Layout>
  );
}
