import { Footer, Header, Hero, Layout } from "@/components";
import { Box, Text } from "@interchain-ui/react";

export default function Components() {
  return (
    <Layout>
      <Box mt="$12">
        <Text fontSize="$xl" fontWeight="$semibold">
          Application UI
        </Text>
        <Text
          color="$gray500"
          fontSize="$sm"
          fontWeight="$thin"
          attributes={{ marginTop: "$7" }}
        >
          Form layouts, tables, dialogs — everything you need to build beautiful
          responsive web applications.
        </Text>
      </Box>
      <Box mt="$16" mb="$18">
        <Box mb="$12">
          <Text fontSize="$lg" fontWeight="$semibold">
            Header
          </Text>
        </Box>
        <Box flex="1">
          <Header />
        </Box>
      </Box>
      <Box my="$18">
        <Box mb="$12">
          <Text fontSize="$lg" fontWeight="$semibold">
            Footer
          </Text>
        </Box>
        <Box flex="1">
          <Footer />
        </Box>
      </Box>
    </Layout>
  );
}
