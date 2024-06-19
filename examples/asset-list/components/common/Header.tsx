// @ts-nocheck
import { Link, Box, Button, Icon, Text, useTheme } from '@interchain-ui/react';
import { dependencies } from '@/config';

const stacks = ['Cosmos Kit', 'Next.js'];

const osmojs = dependencies[0];

export function Header() {
  const { theme, setTheme } = useTheme();

  const toggleColorMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
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
          <Icon name={theme === 'light' ? 'moonLine' : 'sunLine'} />
        </Button>
      </Box>

      <Box textAlign="center">
        <Text
          as="h1"
          fontWeight="$extrabold"
          fontSize={{ mobile: '$3xl', tablet: '$4xl', desktop: '$10xl' }}
          attributes={{
            marginBottom: '$6',
          }}
        >
          Create Cosmos App
        </Text>
        <Text as="h1" fontWeight="$bold">
          <Text
            as="span"
            fontSize={{ mobile: '$4xl', tablet: '$8xl', desktop: '$8xl' }}
          >
            Welcome to&nbsp;
          </Text>
          <Text
            as="span"
            fontSize={{ mobile: '$4xl', tablet: '$8xl', desktop: '$8xl' }}
            color={theme === 'light' ? '$primary500' : '$primary200'}
          >
            {stacks.join(' + ')}
            {' + '}

            <Link
              href={osmojs.name}
              target="_blank"
              rel="noreferrer"
              attributes={{
                fontSize: { mobile: '$4xl', tablet: '$8xl', desktop: '$8xl' },
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
