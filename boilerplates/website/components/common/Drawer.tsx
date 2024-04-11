import { PropsWithChildren } from "react";
import { Box } from "@interchain-ui/react";

export type DrawerProps = PropsWithChildren & {
  show?: boolean;
  onClose?: () => void;
};

export function Drawer({
  children,
  show = false,
  onClose = () => {},
}: DrawerProps) {
  return (
    <Box
      top="0"
      left="0"
      right="0"
      bottom="0"
      zIndex={show ? 100 : -100}
      width="100%"
      height="100%"
      display="flex"
      position="fixed"
      opacity={show ? 1 : 0}
      transition="all .3s ease"
    >
      <Box
        transition="all .3s ease"
        backgroundColor={show ? "$blackAlpha500" : "transparent"}
        attributes={{
          onClick: onClose,
          style: {
            flex: 1,
            backdropFilter: show ? "blur(2px)" : "none",
          },
        }}
      />
      <Box
        width={show ? "80%" : "0"}
        transition="all .3s ease"
        backgroundColor="white"
      >
        {children}
      </Box>
    </Box>
  );
}
