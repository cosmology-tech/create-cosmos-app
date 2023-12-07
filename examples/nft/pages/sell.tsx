import { Layout, Wallet } from "@/components";
import { Divider } from "@interchain-ui/react";
import { Sell } from "@/components/sell";

export default function() {
  return (
    <Layout>
      <Wallet />
      <Sell />
      <Divider mt="$16" mb="$16" />
    </Layout>
  )
}