import { Divider } from "@interchain-ui/react";
import { Layout, Wallet } from "@/components";
import { Mint } from "@/components/mint";

export default function MintPage() {
  return (
    <Layout>
      <Wallet />
      <Mint />
      <Divider mt="$16" mb="$16" />
    </Layout>
  )
}