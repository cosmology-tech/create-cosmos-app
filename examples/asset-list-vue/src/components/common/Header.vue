<script setup lang="ts">
import { Link, Text, Box, Container, Button, Icon } from '@interchain-ui/vue';
import { dependencies } from '@/config/features'
const stacks = ['Interchain Kit', 'Vue'];
const osmojs = dependencies[0];

</script>

<template>
  <Box display="flex" justifyContent="end" mb="$8">
    <Button intent="secondary" size="sm" :attributes="{ paddingX: 0, }">
      <Icon name="moonLine" />
    </Button>
  </Box>

  <Box textAlign="center">
    <Text as="h1" fontWeight="$extrabold" :fontSize="{ mobile: '$3xl', tablet: '$4xl', desktop: '$10xl' }" :attributes="{
      marginBottom: '$6',
    }">
      Create Cosmos App
    </Text>
    <Text as="h1" fontWeight="$bold">
      <Text as="span" :fontSize="{ mobile: '$4xl', tablet: '$8xl', desktop: '$8xl' }">
        Welcome to&nbsp;
      </Text>
      <Text as="span" :fontSize="{ mobile: '$4xl', tablet: '$8xl', desktop: '$8xl' }" color="$primary500">
        {{ stacks.join(' + ') }} {{ ' + ' }}
        <Link :href="osmojs.name" target="_blank" rel="noreferrer" :attributes="{
          fontSize: { mobile: '$4xl', tablet: '$8xl', desktop: '$8xl' },
        }">
        {{ osmojs.name }}
        </Link>
      </Text>
    </Text>
  </Box>
</template>

<style scoped></style>
