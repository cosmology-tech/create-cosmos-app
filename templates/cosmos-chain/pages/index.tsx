import NoSSR from "react-no-ssr";
import { Home, Layout } from "@/components";

export default function Index() {
  return (
    <Layout>
      <NoSSR>
        <Home />
      </NoSSR>
    </Layout>
  );
}
