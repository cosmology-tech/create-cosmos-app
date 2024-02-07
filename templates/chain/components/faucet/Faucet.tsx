import { useContext, useEffect, useState } from "react";
import { useChain, useWallet } from "@cosmos-kit/react";
import { asset_lists } from "@chain-registry/assets";
import { Asset } from "@chain-registry/types";
import {
  Box,
  Button,
  FieldLabel,
  Icon,
  Text,
  TextField,
  toast,
  useColorModeValue,
} from "@interchain-ui/react";
import { AssetSelect, ChainContext } from "@/components";

export function Faucet() {
  const [receiver, setReceiver] = useState("");
  const [asset, setAsset] = useState<Asset | null>(null);
  const [assets, setAssets] = useState<Asset[]>([]);
  const { chainName } = useContext(ChainContext);
  const { address, openView } = useChain(chainName);
  const { wallet } = useWallet();
  const walletLogo = typeof wallet?.logo === "string"
    ? wallet?.logo
    : wallet?.logo?.major;

  useEffect(() => {
    setAssets(
      asset_lists.find((list) => list.chain_name === chainName)?.assets || [],
    );
  }, [chainName]);

  function onFill() {
    if (!address) return openView();
    setReceiver(address);
  }

  function onSend() {
    console.log("receiver", receiver);
    console.log("asset", asset);

    // fetch("/api/faucet", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     denom,
    //     address,
    //   }),
    // }).then((res) => {
    //   toast.success("Success");
    // }).catch(() => {
    //   toast.error("Fail");
    // });
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="80vh"
    >
      <Box minWidth={{ mobile: "23rem", tablet: "26rem", desktop: "32rem" }}>
        <Text fontSize="$2xl" fontWeight="$bold">Faucet</Text>

        <Box mt="$9" maxWidth="32rem">
          <FieldLabel
            htmlFor="address"
            label="Address"
            attributes={{ mb: "$4" }}
          />
          <Box gap="$6" display="flex" alignItems="center">
            <Box flex="1" position="relative">
              <TextField
                id="address"
                type="text"
                value={receiver}
                onChange={(e) => setReceiver(e.target.value)}
                placeholder="Enter your address"
              />
              <Icon
                name="close"
                size="$md"
                color={useColorModeValue("$blackAlpha400", "$divider")}
                attributes={{
                  position: "absolute",
                  cursor: "pointer",
                  top: "$6",
                  right: "$4",
                  onClick: () => setReceiver(""),
                }}
              />
            </Box>
            <Button
              size="sm"
              intent="secondary"
              onClick={onFill}
              domAttributes={{ style: { height: "40px" } }}
            >
              {wallet
                ? (
                  <img
                    src={walletLogo}
                    width={16}
                    height={16}
                    style={{ marginRight: "6px" }}
                  />
                )
                : (
                  <Icon
                    name="walletFilled"
                    size="$md"
                    attributes={{ mr: "$3" }}
                  />
                )}
              Auto Fill
            </Button>
          </Box>
        </Box>

        <Box mt="$8" maxWidth="32rem">
          <FieldLabel
            htmlFor="asset"
            label="Asset"
            attributes={{ mb: "$4" }}
          />
          <AssetSelect assets={assets} onChange={setAsset} />
        </Box>

        <Box mt="$12" maxWidth="32rem">
          <Button
            fluidWidth
            disabled={!address || !asset || receiver.length < 44}
            intent="tertiary"
            onClick={onSend}
          >
            Show me the money !
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
