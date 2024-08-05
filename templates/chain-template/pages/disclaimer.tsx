import { Box, Text } from '@interchain-ui/react';

export default function Disclaimer() {
  return (
    <Box maxWidth="650px" mx="auto">
      <Title>Disclaimer</Title>
      <SectionTitle>No Investment Advice</SectionTitle>
      <SectionBody>
        The information provided on this website does not constitute investment
        advice, financial advice, trading advice, or any other sort of advice
        and you should not treat any of the website&apos;s content as such.
        Cosmology does not recommend that any cryptocurrency should be bought,
        sold, or held by you. Do conduct your own due diligence and consult your
        financial advisor before making any investment decisions.
      </SectionBody>
      <SectionTitle>Accuracy of Information</SectionTitle>
      <SectionBody>
        Cosmology will strive to ensure accuracy of information listed on this
        website although it will not hold any responsibility for any missing or
        wrong information. Cosmology provides all information as is. You
        understand that you are using any and all information available here at
        your own risk.
      </SectionBody>
      <SectionTitle>Risk Statement</SectionTitle>
      <SectionBody>
        The trading of cryptocurrencies has potential rewards, and it also has
        potential risks involved. Trading may not be suitable for all people.
        Anyone wishing to invest should seek his or her own independent
        financial or professional advice.
      </SectionBody>
      <SectionTitle>Tax Compliance</SectionTitle>
      <SectionBody>
        The users of Cosmology app are solely responsible to determinate what,
        if any, taxes apply to their cryptocurrency transactions. The owners of,
        or contributors to, the Cosmology app are NOT responsible for
        determining the taxes that apply to cryptocurrency transactions.
      </SectionBody>
      <SectionTitle>Software Disclaimer</SectionTitle>
      <SectionBody>
        Cosmology leverages decentralized peer-to-peer blockchains that people
        can use to create liquidity and trade IBC enabled tokens. These
        blockchains are made up of free, public, and open-source software. Your
        use of Cosmology involves various risks, including, but not limited, to
        losses while digital assets are being supplied to liquidity pools and
        losses due to the fluctuation of prices of tokens in a trading pair or
        liquidity pool, including Impermanence Loss. Before using any pool on
        these blockchains, you should review the relevant documentation to make
        sure you understand how they work, and the pool you use on each
        blockchain works. Additionally, just as you can access email protocols,
        such as SMTP, through multiple email clients, you can access pools on
        the blockchain through several web or mobile interfaces. You are
        responsible for doing your own diligence on those interfaces to
        understand the fees and risks they present. AS DESCRIBED IN THE
        COSMOLOGY LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK,
        AND WITHOUT WARRANTIES OF ANY KIND. Although Web, Inc. ( “Web Incubator”
        ) developed much of the initial code for the Cosmology app, it does not
        provide, own, or control the leveraged blockchain protocols, which are
        run by decentralized validator sets. Upgrades and modifications to these
        protocol are managed in a community-driven way by holders of various
        governance tokens. No developer or entity involved in creating Cosmology
        will be liable for any claims or damages whatsoever associated with your
        use, inability to use, or your interaction with other users of the
        Cosmology app, including any direct, indirect, incidental, special,
        exemplary, punitive or consequential damages, or loss of profits,
        cryptocurrencies, tokens, or anything else of value.
      </SectionBody>
    </Box>
  );
}

const Title = ({ children }: { children: string }) => {
  return (
    <Text
      color="$blackAlpha600"
      fontSize="28px"
      fontWeight="600"
      attributes={{ mb: '24px' }}
    >
      {children}
    </Text>
  );
};

const SectionTitle = ({ children }: { children: string }) => {
  return (
    <Text
      color="$blackAlpha600"
      fontSize="18px"
      fontWeight="600"
      attributes={{ mb: '16px' }}
    >
      {children}
    </Text>
  );
};

const SectionBody = ({ children }: { children: string }) => {
  return (
    <Text
      color="$blackAlpha500"
      fontSize="14px"
      fontWeight="400"
      lineHeight="$base"
      attributes={{ mb: '20px' }}
    >
      {children}
    </Text>
  );
};
