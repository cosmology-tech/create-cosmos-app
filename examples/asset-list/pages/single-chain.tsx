import { defaultChainName } from '@/config';
import { AssetListSection, Layout } from '@/components';
import { WalletSection } from '@/components/wallet';
import { useState, useEffect } from 'react';

export default function SingleChain() {
  const [content, setContent] = useState<JSX.Element>();

  useEffect(() => {
    setContent(<AssetListSection chainName={defaultChainName} />);
  }, []);

  return (
    <Layout>
      <WalletSection isMultiChain={false} />
      {content}
    </Layout>
  );
}
