import {
  Box,
  Button,
  Icon,
  Link,
  Text,
  useColorModeValue,
  useTheme,
} from "@interchain-ui/react";
import { dependencies } from "@/config";

const stacks = ["CosmosKit", "Next.js"];

const osmojs = dependencies[0];

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
            {" + "}

            <Link
              href={osmojs.name}
              target="_blank"
              rel="noreferrer"
              attributes={{
                color: useColorModeValue("$primary500", "$primary200"),
                fontSize: { mobile: "$4xl", tablet: "$8xl", desktop: "$8xl" },
              }}
            >
              {osmojs.name}
            </Link>
          </Text>
        </Text>
      </Box>
    </>
  );
}
