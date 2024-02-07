import { useState } from "react";
import { Layout, Wallet } from "@/components";
import { CHAIN_NAME } from "@/config";

export default function Home() {
  const [chainName, setChainName] = useState(CHAIN_NAME);

  function onChainChange(chainName?: string) {
    setChainName(chainName!);
  }

  return (
    <Layout>
      <Wallet chainName={chainName} onChainChange={onChainChange} />
    </Layout>
  );
}
