import { FunctionComponent } from "react";
import { Heading } from "@chakra-ui/react";
import { WalletStatus } from "@cosmos-kit/core";
import { useWallet } from "@cosmos-kit/react";
import { useHackCw20Balance } from "../../hooks/use-hack-cw20-balance";
import { cw20ContractAddress } from "../../config";

export default function HackCw20() {
  const { walletStatus } = useWallet();

  const { balance } = useHackCw20Balance(
    cw20ContractAddress
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
