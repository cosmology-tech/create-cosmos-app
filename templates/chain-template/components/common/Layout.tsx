import Head from 'next/head';
import { Box, useColorModeValue } from '@interchain-ui/react';

import { Header } from './Header';
import { Sidebar } from './Sidebar';
import styles from '@/styles/layout.module.css';
import { useDisclosure } from '@/hooks';

export function Layout({ children }: { children: React.ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      minHeight="100vh"
      backgroundColor={useColorModeValue('$white', '$background')}
      className={styles.layout}
    >
      <Box maxWidth="1440px" width="$full" mx="$auto" display="flex">
        <Head>
          <title>Create Cosmos App</title>
          <meta name="description" content="Generated by create cosmos app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Sidebar isOpen={isOpen} onClose={onClose} />
        <Box p="30px" width="$full">
          <Header onOpenSidebar={onOpen} />
          {children}
        </Box>
      </Box>
    </Box>
  );
}
