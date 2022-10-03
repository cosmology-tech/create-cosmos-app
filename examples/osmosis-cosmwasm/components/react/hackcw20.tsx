import { FunctionComponent } from "react";
import { Heading } from "@chakra-ui/react";
import { WalletStatus } from "@cosmos-kit/core";
import { useWallet } from "@cosmos-kit/react";
import { useHackCw20Balance } from "../../hooks/use-hack-cw20-balance";

export default function HackCw20() {
  const { walletStatus } = useWallet();

  const { balance } = useHackCw20Balance(
    "osmo1y0ywcujptlmnx4fgstlqfp7nftc8w5qndsfds9wxwtm0ltjpzp4qdj09j8"
  );

  return (
    <Heading>
      <div>
        HackCW20 Balance:{" "}
        {walletStatus === WalletStatus.Disconnected
          ? "Connect wallet!"
          : balance ?? "loading..."}
      </div>
    </Heading>
  );
}
