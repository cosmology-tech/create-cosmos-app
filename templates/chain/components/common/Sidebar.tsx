import {
  Box,
  ClipboardCopyText,
  Stack,
  Text,
  useColorModeValue,
  useTheme,
} from "@interchain-ui/react";
import {
  ButtonConnect,
  ButtonConnected,
  ButtonConnecting,
  ButtonDisconnected,
  ButtonError,
  ButtonNotExist,
  ButtonRejected,
  User,
  Warning,
} from "../wallet";
import Link from "next/link";
import { Logo } from "./Logo";
import { CHAIN_NAME } from "@/config";
import { useChain } from "@cosmos-kit/react";
import { WalletStatus } from "@cosmos-kit/core";

export type SidebarProps = {
  show?: boolean;
  border?: boolean;
  chainName?: string;
};

export function Sidebar({
  show = false,
  border = false,
  chainName = CHAIN_NAME,
}: SidebarProps) {
  const theme = useTheme();

  const {
    chain,
    status,
    wallet,
    username,
    address,
    message,
    connect,
    openView,
  } = useChain(chainName);

  const ConnectButton = {
    [WalletStatus.Connected]: <ButtonConnected onClick={openView} />,
    [WalletStatus.Connecting]: <ButtonConnecting />,
    [WalletStatus.Disconnected]: <ButtonDisconnected onClick={connect} />,
    [WalletStatus.Error]: <ButtonError onClick={openView} />,
    [WalletStatus.Rejected]: <ButtonRejected onClick={connect} />,
    [WalletStatus.NotExist]: <ButtonConnect onClick={openView} />,
  }[status] || <ButtonConnect onClick={connect} />;

  return (
    <Stack
      direction="vertical"
      attributes={{
        p: "$8",
        zIndex: 10,
        minHeight: "100vh",
        minWidth: { mobile: "20rem", desktop: "16rem" },
        backgroundColor: useColorModeValue("$white", "$background"),
        borderRightWidth: border ? "1px" : "0",
        borderRightColor: "$divider",
        borderRightStyle: "solid",
        position: {
          mobile: "fixed",
          tablet: "fixed",
          desktop: "relative",
        },
        transform: show ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.3s ease",
      }}
    >
      <Stack attributes={{ mt: "$4", justifyContent: "center" }}>
        <Logo width={180} />
      </Stack>
      <Stack
        space="$14"
        direction="vertical"
        attributes={{ mt: "$22", flex: "1", alignItems: "center" }}
      >
        <Link href="/">
          <Text fontSize="$xl" fontWeight="$semibold">Home</Text>
        </Link>
        <Link href="/governance">
          <Text fontSize="$xl" fontWeight="$semibold">Governance</Text>
        </Link>
        <Link href="/distribution">
          <Text fontSize="$xl" fontWeight="$semibold">Distribution</Text>
        </Link>
        <Link href="/faucet">
          <Text fontSize="$xl" fontWeight="$semibold">Faucet</Text>
        </Link>
      </Stack>
      <Stack
        direction="vertical"
        attributes={{
          justifyContent: "center",
          pb: { mobile: "$20", desktop: "0" },
        }}
      >
        {username ? <User name={username} /> : null}
        {address
          ? <ClipboardCopyText text={address} truncate="middle" />
          : null}
        <Box
          my="$8"
          flex="1"
          width="full"
          display="flex"
          height="$16"
          overflow="hidden"
          justifyContent="center"
        >
          {ConnectButton}
        </Box>

        {message && [WalletStatus.Error, WalletStatus.Rejected].includes(status)
          ? <Warning text={`${wallet?.prettyName}: ${message}`} />
          : null}
      </Stack>
    </Stack>
  );
}
