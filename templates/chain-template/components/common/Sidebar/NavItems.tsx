import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box, Icon, IconName, Stack, Text } from '@interchain-ui/react';
import { RiHome7Line, RiStackLine } from 'react-icons/ri';
import { MdOutlineWaterDrop, MdOutlineHowToVote } from 'react-icons/md';
import { LuAlignHorizontalDistributeCenter, LuFileJson } from 'react-icons/lu';

type NavIcon = IconName | JSX.Element;

type NavItem = {
  icon: NavIcon;
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  {
    icon: <RiHome7Line size="20px" />,
    label: 'Home',
    href: '/',
  },
  {
    icon: <RiStackLine size="20px" />,
    label: 'Staking',
    href: '/staking',
  },
  {
    icon: <MdOutlineHowToVote size="20px" />,
    label: 'Governance',
    href: '/governance',
  },
  {
    icon: <LuAlignHorizontalDistributeCenter size="20px" />,
    label: 'Distribution',
    href: '/distribution',
  },
  {
    icon: <MdOutlineWaterDrop size="20px" />,
    label: 'Faucet',
    href: '/faucet',
  },
  {
    icon: <LuFileJson size="20px" />,
    label: 'Contract',
    href: '/contract',
  },
  {
    icon: 'coinsLine',
    label: 'Asset List',
    href: '/asset-list',
  },
];

const NavItem = ({ icon, label, href }: NavItem) => {
  const router = useRouter();

  const isActive = router.pathname === href;

  return (
    <Link href={href}>
      <Box
        p="10px"
        display="flex"
        alignItems="center"
        gap="10px"
        width="180px"
        height="40px"
        cursor="pointer"
        borderRadius="4px"
        color="$text"
        backgroundColor={{
          hover: '#E5D4FB',
          base: isActive ? '#E5D4FB' : 'transparent',
        }}
      >
        {typeof icon === 'string' ? <Icon name={icon} size="$xl" /> : icon}
        <Text fontSize="$md" fontWeight="$medium">
          {label}
        </Text>
      </Box>
    </Link>
  );
};

export const NavItems = () => {
  return (
    <Stack direction="vertical" space="20px">
      {navItems.map(({ href, icon, label }) => (
        <NavItem key={label} icon={icon} label={label} href={href} />
      ))}
    </Stack>
  );
};
