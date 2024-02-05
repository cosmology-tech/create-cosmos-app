import { useEffect, useState } from "react";
import { Asset } from "@chain-registry/types";
import { assets } from "chain-registry";
import {
  Box,
  Button,
  ChangeChainCombobox,
  FieldLabel,
  GovernanceRadio,
  GovernanceRadioGroup,
  Text,
  TextField,
  toast,
} from "@interchain-ui/react";
import { Layout } from "@/components";
import { AssetSelect } from "@/components";

const AssetList = Object.values(
  assets.reduce((acc: Asset[], cur) => acc.concat(cur.assets), [])
    .reduce(
      (acc, cur) => acc[cur.base] ? acc : ((acc[cur.base] = cur), acc),
      {} as Record<string, Asset>,
    ),
).filter((asset) => asset.type_asset !== "ics20")
  .sort((a, b) => a.name.localeCompare(b.name));

const Atom = AssetList.find((asset) => asset.base === "uatom");

console.log("Atom", Atom);

export default function Faucet() {
  const [address, setAddress] = useState("");
  const [asset, setAsset] = useState(Atom);
  const [denom, setDenom] = useState("uatom");

  useEffect(() => {
    setDenom(asset?.denom_units[0].denom || "uatom");
  }, [asset]);

  function onSend() {
    console.log("address", address);
    console.log("asset", asset);
    console.log("denom", denom);

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
    <Layout>
      <Box p="$8">
        <Text fontSize="$2xl" fontWeight="$bold">Faucet</Text>

        <Box mt="$8" maxWidth="30rem">
          <FieldLabel
            htmlFor="address"
            label="Address"
            attributes={{ mb: "$4" }}
          />
          <TextField
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
          />
        </Box>

        <Box mt="$8" maxWidth="30rem">
          <FieldLabel
            htmlFor="asset"
            label="Asset"
            attributes={{ mb: "$4" }}
          />
          <AssetSelect asset={Atom!} assets={AssetList} onChange={setAsset} />
          <Text fontSize="$sm" color="$gray500" attributes={{ mt: "$3" }}>
            {asset?.description}
          </Text>
        </Box>

        <Box mt="$8" maxWidth="30rem">
          <FieldLabel
            htmlFor="denom"
            label="Denom"
            attributes={{ mb: "$4" }}
          />
          <GovernanceRadioGroup value={denom} onChange={setDenom}>
            <Box display="flex" flexWrap="wrap" gap="$8">
              {asset?.denom_units.map((denom) => (
                <Box textAlign="center">
                  <GovernanceRadio
                    key={denom.denom}
                    id={denom.denom}
                    value={denom.denom}
                  >
                    {denom.aliases?.length ? denom.aliases[0] + " - " : ""}
                    {denom.denom}
                  </GovernanceRadio>
                  <Box display="flex" gap="$6" justifyContent="center">
                    <Text
                      fontSize="$sm"
                      color="$gray500"
                      attributes={{ mt: "$3" }}
                    >
                      exponent: {denom.exponent}
                    </Text>
                    {denom.aliases?.length
                      ? (
                        <Text
                          fontSize="$sm"
                          color="$gray500"
                          attributes={{ mt: "$3" }}
                        >
                          aliases: {denom.aliases.join(", ")}
                        </Text>
                      )
                      : null}
                  </Box>
                </Box>
              ))}
            </Box>
          </GovernanceRadioGroup>
        </Box>

        <Box mt="$8" maxWidth="30rem">
          <FieldLabel
            htmlFor="denom"
            label="Type whatever denom you want"
            attributes={{ mb: "$4" }}
          />
          <TextField
            id="denom"
            type="text"
            value={denom}
            onChange={(e) => setDenom(e.target.value)}
            placeholder="Enter your denom"
          />
        </Box>

        <Box mt="$12" maxWidth="30rem">
          <Button
            fluidWidth
            intent="tertiary"
            onClick={onSend}
          >
            Show me the money !
          </Button>
        </Box>
      </Box>
    </Layout>
  );
}
