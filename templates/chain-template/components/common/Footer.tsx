import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';
import { Box, Icon, Text } from '@interchain-ui/react';

import { useDetectBreakpoints } from '@/hooks';

export const Footer = () => {
  const { isMobile } = useDetectBreakpoints();

  return (
    <Box mt="100px">
      {isMobile && (
        <Box display="flex" justifyContent="center" mb="10px">
          <SocialLinks />
        </Box>
      )}
      <Box
        display="flex"
        justifyContent={isMobile ? 'center' : 'space-between'}
        alignItems="center"
        gap="4px"
      >
        <Text color="$blackAlpha500" fontSize="12px" fontWeight="500">
          © {new Date().getFullYear()} Hyperweb
        </Text>
        {isMobile ? <TextDivider /> : <SocialLinks />}
        <Link href="/disclaimer">
          <Text color="$blackAlpha500" fontSize="12px" fontWeight="500">
            Terms of Service
          </Text>
        </Link>
      </Box>
    </Box>
  );
};

const TextDivider = () => {
  return (
    <Text color="$blackAlpha200" fontSize="12px" fontWeight="500">
      |
    </Text>
  );
};

const socialLinks = [
  {
    icon: <Icon name="github" color="$blackAlpha600" />,
    href: 'https://github.com/hyperweb-io',
  },
  {
    icon: <Icon name="discord" color="$blackAlpha600" />,
    href: 'https://discord.com/invite/xh3ZwHj2qQ',
  },
  {
    icon: (
      <Box color="$blackAlpha600">
        <FaXTwitter size="16px" />
      </Box>
    ),
    href: 'https://x.com/cosmology_tech',
  },
  {
    icon: <Icon name="youtube" color="$blackAlpha600" />,
    href: 'https://www.youtube.com/channel/UCA9jzRlnUJRxec8S5Lt7Vcw',
  },
];

const SocialLinks = () => {
  return (
    <Box display="flex" alignItems="center" gap="16px">
      {socialLinks.map(({ icon, href }) => (
        <Link href={href} target="_blank" key={href}>
          {icon}
        </Link>
      ))}
    </Box>
  );
};
