import {
  Box,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue
} from '@interchain-ui/react';
import { FeatureProps } from './types';

export const Product = ({ title, text, href }: FeatureProps) => {
  return (
    <Link href={href} target="_blank">
      <Stack
        attributes={{
          height: 'full',
          minHeight: 36,
          padding: 5,
          justifyContent: 'center',
          borderRadius: 5,
          boxShadow: useColorModeValue(
            '0 2px 5px #ccc',
            '0 1px 3px #727272, 0 2px 12px -2px #2f2f2f'
          ),

        }}
        space={2.5}
      >
        <Text as='h1' fontSize="xl">{title}&ensp;&rarr;</Text>
        <Text>{text}</Text>
      </Stack>
    </Link>
  );
};

export const Dependency = ({ title, text, href }: FeatureProps) => {
  return (
    <Link href={href} target="_blank">
      <Stack
        direction='horizontal'
        key={title}
        space={3}
        attributes={{
          height: 'full',
          padding: 4,
          justifyContent: 'center',
          borderRadius: 'md',
          border: '1px solid',
          borderColor: useColorModeValue('blackAlpha.200', 'whiteAlpha.100'),
        }}
      >
        {/* @ts-ignore */}
        <Box
          color={useColorModeValue('primary.500', 'primary.200')}
        >
          <Icon name='link' />
        </Box>
        <Stack space={1}>
          <Text fontSize="lg" fontWeight="semibold">
            {title}
          </Text>
          <Text
            lineHeight="short"
            color={useColorModeValue('blackAlpha.700', 'whiteAlpha.700')}
          >
            {text}
          </Text>
        </Stack>
      </Stack>
    </Link>
  );
};
