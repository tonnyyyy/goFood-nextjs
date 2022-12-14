import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { Box, Flex, Grid, GridItem, Image, Text, useTheme } from '@chakra-ui/react';
import { RiArrowRightLine } from 'react-icons/ri';

import { Button } from '../components/button';

const Home: NextPage = () => {
  const theme = useTheme()

  // implementar contexto futuramente
  const isAuthenticated = false

  return (
    <Box bgColor='primary'>
      <Head>
        <title>GoFood | Home</title>
      </Head>
      <Grid
        margin='0 auto'
        templateColumns='12fr'
        templateRows='1fr 7fr 4fr'
        height="100vh"
        gap={1}

        maxW={theme.__breakpoints?.asObject?.md}
      >
        <GridItem px={8} paddingTop={8}>
          <Text fontSize='3xl' color="subtitleLight" fontFamily='pt serif, serif'>gofood</Text>
        </GridItem>

        <GridItem>
          <Flex align='center' justify='center' height="100%">
            <Image boxSize='300px' src='img/home-logo.png' alt='fork and knife' />
            <Image 
              width="300px"
              height="350px"
              src='img/home-logo-background.png'
              alt='fork and knife'
              position="absolute"
              opacity=".1"
            />
          </Flex>
        </GridItem>

        <GridItem px={8} paddingBottom={8}>
          <Flex direction="column" align="center" justify="space-between" height="100%">
            <Box w="100%">
              <Text fontSize='5xl' fontWeight="semibold" align="center" color='titleLight' fontFamily='pt serif, serif'>Go, food!</Text>
              <Text fontSize='lg' align="center" color="subtitleLight" fontFamily='montserrat, sans-serif'>Eat it whenever you want.</Text>
            </Box>
            <Link href={isAuthenticated ? 'dashboard' : 'login'}>
              <Button w="100%" h="100%" mt={5} color="pLight" bgColor="#d8d8d866" rightIcon={<RiArrowRightLine size={25} />}>
                Order now
              </Button>
            </Link>
          </Flex>
        </GridItem>
      </Grid>
    </Box>

  ) 
}

export default Home
