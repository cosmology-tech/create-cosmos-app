// @ts-nocheck
import {
  Link,
  Text,
  Stack,
  Box,
  Icon,
  Divider,
  useTheme,
} from '@interchain-ui/react';
import { dependencies, products, Project } from '../../config';

const boxShadowBaseLight = `
  rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(0, 0, 0, 0.03) 0px 0px 15px 0px,
  rgba(0, 0, 0, 0.08) 0px 2px 30px 0px,
  rgba(0, 0, 0, 0.3) 0px 0px 1px 0px
`;

const boxShadowBaseDark = `
  0.4px 0px 2.2px rgba(0, 0, 0, 0.07),
  1px 0px 5.3px rgba(0, 0, 0, 0.058),
  1.9px 0px 10px rgba(0, 0, 0, 0.048),
  3.4px 0px 17.9px rgba(0, 0, 0, 0.039),
  6.3px 0px 33.4px rgba(0, 0, 0, 0.031),
  15px 0px 80px rgba(0, 0, 0, 0.023)
`;

const boxShadowHover = `
  0 0 0 1px rgba(174, 132, 226,.2), 0 1px 1px rgba(174, 132, 226,.4), 0 2px 6px rgba(174, 132, 226,.4)
`;

const boxShadowTransition = `box-shadow 150ms ease-in-out, border 150ms ease-in-out`;

function Product({ name, desc, link }: Project) {
  const { theme } = useTheme();

  return (
    <Link href={link} target="_blank" underline={false}>
      <Stack
        space="$5"
        direction="vertical"
        attributes={{
          height: '$full',
          minHeight: '$24',
          padding: '$9',
          justifyContent: 'center',
          borderRadius: '$xl',
          transition: boxShadowTransition,
          color: {
            base: '$text',
            hover: theme === 'light' ? '$purple600' : '$purple300',
          },
          boxShadow: {
            base: theme === 'light' ? boxShadowBaseLight : boxShadowBaseDark,
            hover: boxShadowHover,
          },
          // borderWidth: '1px',
          // borderStyle: '$solid',
          // borderColor: {
          //   base: 'transparent',
          //   hover: 'rgba(174, 132, 226, 1)',
          // },
        }}
      >
        <Text as="h2" fontSize="$xl" color="inherit" attributes={{ margin: 0 }}>
          {name}&ensp;&rarr;
        </Text>
        <Text color="inherit" as="p" fontSize="$md">
          {desc}
        </Text>
      </Stack>
    </Link>
  );
}

function Dependency({ name, desc, link }: Project) {
  const { theme } = useTheme();

  return (
    <Link href={link} target="_blank" underline={false}>
      <Stack
        key={name}
        space="$6"
        direction="horizontal"
        attributes={{
          height: '$full',
          padding: '$8',
          justifyContent: 'center',
          borderRadius: '$xl',
          transition: boxShadowTransition,
          boxShadow: {
            base: theme === 'light' ? boxShadowBaseLight : boxShadowBaseDark,
            hover: boxShadowHover,
          },
          // borderWidth: '1px',
          // borderStyle: '$solid',
          // borderColor: {
          //   base: theme === 'light' ? '$blackAlpha200' : '$whiteAlpha100',
          //   hover: 'rgba(174, 132, 226, 1)',
          // },
        }}
      >
        <Box
          color={theme === 'light' ? '$primary500' : '$primary200'}
          flex="0 0 auto"
        >
          <Icon name="link" size="$md" />
        </Box>

        <Stack space="$2" direction="vertical">
          <Text as="p" fontSize="$lg" fontWeight="$semibold">
            {name}
          </Text>
          <Text
            as="p"
            fontSize="$md"
            fontWeight="$light"
            attributes={{
              color: theme === 'light' ? '$blackAlpha700' : '$whiteAlpha700',
              lineHeight: '$short',
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
          tablet: 'repeat(2, 1fr)',
          desktop: 'repeat(3, 1fr)',
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
        gridTemplateColumns={{ tablet: 'repeat(3, 1fr)' }}
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
          justifyContent: 'center',
          opacity: 0.5,
          fontSize: '$sm',
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
