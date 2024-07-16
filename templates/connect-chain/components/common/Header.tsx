import {
  Box,
  Button,
  Icon,
  Link,
  Text,
  useColorModeValue,
  useTheme,
} from "@interchain-ui/react";

const stacks = ["Cosmos Kit", "Next.js", "CosmJS"];

export function Header() {
  const { theme, setTheme } = useTheme();

  const toggleColorMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Box display="flex" justifyContent="end" mb="$8">
        <Button
          intent="secondary"
          size="sm"
          attributes={{
            paddingX: 0,
          }}
          onClick={toggleColorMode}
        >
          <Icon name={useColorModeValue("moonLine", "sunLine")} />
        </Button>
      </Box>

      <Box textAlign="center">
        <Text
          as="h1"
          fontWeight="$extrabold"
          fontSize={{ mobile: "$6xl", tablet: "$10xl" }}
          attributes={{
            marginBottom: "$8",
          }}
        >
          Create Cosmos App
        </Text>
        <Text as="h2" fontWeight="$bold">
          <Text
            as="span"
            fontSize={{ mobile: "$3xl", tablet: "$8xl", desktop: "$8xl" }}
          >
            Welcome to&nbsp;
          </Text>
          <Text
            as="span"
            fontSize={{ mobile: "$3xl", tablet: "$8xl", desktop: "$8xl" }}
            color={useColorModeValue("$primary500", "$primary200")}
          >
            {stacks.join(" + ")}
          </Text>
        </Text>
      </Box>
    </>
  );
}
