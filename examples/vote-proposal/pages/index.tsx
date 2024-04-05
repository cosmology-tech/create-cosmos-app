import NoSSR from "react-no-ssr";
import { useState } from "react";
import { CHAIN_NAME, Layout, Voting, Wallet } from "@/components";

export default function Home() {
  const [chainName, setChainName] = useState(CHAIN_NAME);

  function onChainChange(chainName?: string) {
    setChainName(chainName!);
  }

  return (
    <Layout>
      {/* TODO fix type error */}
      {/* Type error: This JSX tag's 'children' prop expects a single child of type 'ReactNode', but multiple children were provided. */}
      {/* @ts-ignore */}
      <NoSSR>
        <Wallet chainName={chainName} onChainChange={onChainChange} />
        <Voting chainName={chainName} />
      </NoSSR>
    </Layout>
  );
}
