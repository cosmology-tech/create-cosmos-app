import Image from "next/image";
import { ellipsis, ipfs } from "@/utils";
import { Collection, useTokens } from "@/hooks/mint";
import { Box, Button, Skeleton, Text } from "@interchain-ui/react";

export type HeroProps = {
  collection: Partial<Collection> | null;
  onMint?: () => void;
};

export function Hero({ collection, onMint = () => {} }: HeroProps) {
  const { tokens } = useTokens();
  const positions = [
    { top: "40px" },
    { left: "160px", top: "-55px", zIndex: "0.4" },
    { right: "0", top: "80px", zIndex: "0.3" },
    { bottom: "-55px", left: "130px", zIndex: "0.2" },
  ];
  const images = tokens.length > 0
    ? tokens.map((token, i) => ({
      url: token.imageUrl!,
      css: positions[i],
    }))
    : [];

  const TitleSkeleton = (
    <Box
      mb="$12"
      display="flex"
      flexDirection="column"
      gap="$6"
    >
      <Skeleton
        mb="$6"
        borderRadius="$sm"
        height="$14"
        width="$28"
      />
      <Skeleton
        mb="$2"
        borderRadius="$sm"
        height="$12"
        width="$32"
      />
      <Skeleton
        mb="$10"
        borderRadius="$sm"
        height="$12"
        width="$30"
      />
      <Skeleton
        borderRadius="$md"
        height="$16"
        width="$28"
      />
    </Box>
  );

  return (
    collection?.address
      ? (
        <Box
          width="$full"
          height="460px"
          mb="100px"
          py="85px"
          px="24px"
          gap="4rem"
          display="flex"
        >
          <Box flex="1">
            {collection.isLoading ? TitleSkeleton : (
              <>
                <Text
                  fontSize="3rem"
                  fontWeight="600"
                  lineHeight="shorter"
                  attributes={{ display: "block" }}
                >
                  {collection.contract?.name}
                </Text>
                <Text
                  fontSize="1rem"
                  fontWeight="400"
                  lineHeight="shorter"
                  color="$textSecondary"
                  attributes={{ mt: "$10", mb: "$14" }}
                >
                  {ellipsis(collection.info?.description)}
                </Text>
                <Button
                  size="lg"
                  intent="tertiary"
                  onClick={onMint}
                  domAttributes={{ style: { width: "260px" } }}
                >
                  Mint Now
                </Button>
              </>
            )}
          </Box>
          {collection.isLoading
            ? <Skeleton width="23rem" height="23rem" borderRadius="$md" />
            : (
              <Box position="relative" flex="1">
                {images.map(({ url, css }) => (
                  <Image
                    alt={""}
                    key={url}
                    src={ipfs(url)}
                    width="180"
                    height="180"
                    style={{
                      ...css,
                      borderRadius: "6px",
                      position: "absolute",
                    }}
                  />
                ))}
              </Box>
            )}
        </Box>
      )
      : null
  );
}
