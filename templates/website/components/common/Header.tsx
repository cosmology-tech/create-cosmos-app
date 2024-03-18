import Image from "next/image";
import { Box, IconButton, Link } from "@interchain-ui/react";

import logo from "../../images/cosmology-name-logo.svg";

export type HeaderProps = {
  onMenuButtonClick?: () => void;
};

export function Header({
  onMenuButtonClick = () => {},
}: HeaderProps) {
  return (
    <Box
      pb="$8"
      display="flex"
      alignItems="center"
      borderBottomWidth="1px"
      borderBottomColor="$gray100"
      borderBottomStyle="solid"
    >
      <Box flex="1">
        <Link href="/">
          <Image src={logo} alt="Interchain Logo" width={180} />
        </Link>
      </Box>
      <Box display={{ mobile: "none", desktop: "block" }}>
        <Link
          href="/components"
          color="$purple500"
          attributes={{
            fontWeight: "$semibold",
            textDecoration: "none",
          }}
        >
          Components
        </Link>
      </Box>
      <Box display={{ mobile: "block", desktop: "none" }}>
        <IconButton
          icon="verticalMore"
          variant="ghost"
          intent="secondary"
          onClick={onMenuButtonClick}
        />
      </Box>
    </Box>
  );
}
