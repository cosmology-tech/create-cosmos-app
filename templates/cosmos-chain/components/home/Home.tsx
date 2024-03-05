import { useContext } from "react";
import {
  AssetListItem,
  Box,
  Spinner,
  Text,
  useColorModeValue,
} from "@interchain-ui/react";
import { ApplicationContext } from "@/config";
import { useBalances, usePrices } from "@/hooks";
import { convertChainBalances, formatPrice, getChain, getLogo } from "@/utils";

export function Home() {
  const { chainName } = useContext(ApplicationContext);

  const { nonGamm, query } = useBalances(chainName);

  const chain = getChain(chainName);
  const balances = convertChainBalances(chainName, nonGamm);
  const prices = usePrices(balances.map((balance) => balance.asset!));
  const values = balances.map((balance) => {
    const price = prices[balance.asset!.coingecko_id!] || null;
    return price == null ? "N/A" : formatPrice(price * Number(balance.amount));
  });

  const Loading = (
    <Spinner
      size="$3xl"
      color={useColorModeValue("$blackAlpha700", "$whiteAlpha900")}
      attributes={{ mt: "$6" }}
    />
  );

  return (
    <Box px="$10" pt="$12">
      <Text fontSize="$xl" fontWeight="500" attributes={{ mb: "$6" }}>
        Your Assets on {chain?.pretty_name}
      </Text>

      {query.isLoading ? Loading : null}

      {balances.map((balance, index) => (
        <Box py="$5">
          <AssetListItem
            isOtherChains={false}
            key={balance.balance.denom}
            name={balance.asset?.name!}
            symbol={balance.asset!.symbol}
            imgSrc={getLogo(balance.asset!)!}
            tokenAmount={balance.amount!}
            tokenAmountPrice={values[index]}
          />
        </Box>
      ))}
    </Box>
  );
}
