import {
  Box,
  Divider,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@interchain-ui/react";
import { dependencies, products, Project } from "@/config";

function Product({ name, desc, link }: Project) {
  return (
    <Link href={link} target="_blank" underline={false}>
      <Stack
        space="$5"
        direction="vertical"
        attributes={{
          height: "$full",
          minHeight: "$24",
          padding: "$9",
          justifyContent: "center",
          borderRadius: "$xl",
          color: {
            base: "$text",
            hover: useColorModeValue("$purple600", "$purple300"),
          },
          boxShadow: {
            base: useColorModeValue(
              "0 2px 5px #ccc",
              "0 1px 3px #727272, 0 2px 12px -2px #2f2f2f",
            ),
            hover: useColorModeValue(
              "0 2px 5px #bca5e9",
              "0 0 3px rgba(150, 75, 213, 0.8), 0 3px 8px -2px rgba(175, 89, 246, 0.9)",
            ),
          },
        }}
      >
        <Text as="h2" fontSize="$xl" color="inherit" attributes={{ margin: 0 }}>
          {name}&ensp;&rarr;
        </Text>
        <Text
          color="inherit"
          as="p"
          fontSize="$md"
          fontWeight="$normal"
          attributes={{ marginY: "$1" }}
        >
          {desc}
        </Text>
      </Stack>
    </Link>
  );
}

function Dependency({ name, desc, link }: Project) {
  return (
    <Link href={link} target="_blank" underline={false}>
      <Stack
        key={name}
        space="$6"
        direction="horizontal"
        attributes={{
          height: "$full",
          padding: "$8",
          justifyContent: "center",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: useColorModeValue("$blackAlpha200", "$whiteAlpha100"),
          borderRadius: "$xl",
          boxShadow: {
            base: "none",
            hover: useColorModeValue(
              "0 2px 5px #ccc",
              "0 1px 3px #727272, 0 2px 12px -2px #2f2f2f",
            ),
          },
        }}
      >
        <Box
          color={useColorModeValue("$primary500", "$primary200")}
          flex="0 0 auto"
        >
          <Icon name="link" size="$md" attributes={{ mt: "$2" }} />
        </Box>

        <Stack space="$2" direction="vertical">
          <Text
            as="p"
            fontSize="$lg"
            fontWeight="$semibold"
            attributes={{ marginY: "$1" }}
          >
            {name}
          </Text>
          <Text
            as="p"
            fontSize="$md"
            fontWeight="$light"
            attributes={{
              color: useColorModeValue("$blackAlpha700", "$whiteAlpha700"),
              lineHeight: "$short",
              marginY: "$1",
            }}
          >
            {desc}
          </Text>
        </Stack>
      </Stack>
    </Link>
  );
}

export function Footer() {
  return (
    <>
      <Box
        display="grid"
        gridTemplateColumns={{
          tablet: "repeat(2, 1fr)",
          desktop: "repeat(3, 1fr)",
        }}
        mb="$16"
        gap="$12"
      >
        {products.map((product) => (
          <Product key={product.name} {...product}></Product>
        ))}
      </Box>
      <Box
        display="grid"
        gridTemplateColumns={{ tablet: "repeat(3, 1fr)" }}
        gap="$12"
        mb="$19"
      >
        {dependencies.map((dependency) => (
          <Dependency key={dependency.name} {...dependency}></Dependency>
        ))}
      </Box>
      <Box mb="$6">
        <Divider />
      </Box>
      <Stack
        direction="horizontal"
        space="$2"
        attributes={{
          justifyContent: "center",
          opacity: 0.5,
          fontSize: "$sm",
        }}
      >
        <Text>Built with</Text>
        <Link href="https://cosmology.zone/" target="_blank">
          Cosmology
        </Link>
      </Stack>
    </>
  );
}
