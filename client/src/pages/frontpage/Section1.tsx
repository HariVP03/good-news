import { Flex, Heading, chakra, Image, Input, Button } from '@chakra-ui/react';
import React from 'react';
import { AnimateDiv } from '../../animations/scaleAnimation';

const S1: React.FC = () => {
  return (
    <Flex
      minW="100vw"
      minH="100vh"
      bg="#101724"
      justify="center"
      align="center"
    >
      <Flex minH="100vh" p={3} direction="column">
        <Heading
          fontSize="80px"
          mt="18%"
          ml="15%"
          w="60%"
          color="white"
          fontWeight="800"
          fontFamily="'Karla', sans-serif;"
        >
          What's the News Today?
        </Heading>
        <chakra.h1
          mt="6"
          ml="15%"
          w="60%"
          fontFamily="'Karla', sans-serif;"
          color="gray.300"
          fontSize="27px"
        >
          <chakra.span color="gray.500">Read news</chakra.span> from all over
          the world{' '}
          <chakra.span color="gray.500">or their short summaries.</chakra.span>
        </chakra.h1>
        <chakra.h1
          mt="5"
          ml="15%"
          w="60%"
          fontFamily="'Karla', sans-serif;"
          color="gray.500"
          fontSize="22px"
        >
          Get started by signing up and unsubscribe at any time completely free
          of cost!
        </chakra.h1>
      </Flex>
      <Flex justify="center" align="center" w="40%">
        <Flex
          direction="column"
          align="center"
          w="400px"
          h="450px"
          bg="white"
          rounded="3xl"
        >
          <Flex h="45%" mt="4%" rounded="2xl" w="92%" p={3} bg="red.300">
            <Image
              w="100%"
              rounded="lg"
              h="100%"
              objectFit="cover"
              src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </Flex>
          <Input
            placeholder="Email"
            type="email"
            borderColor="gray.400"
            fontFamily="'Karla', sans-serif;"
            mt={10}
            fontSize="xl"
            w="92%"
            variant="flushed"
          />
          <AnimateDiv>
            <Button
              rounded="xl"
              size="lg"
              bg="#1B51F0"
              color="gray.200"
              _hover={{ bg: 'blue.700' }}
              fontSize="20px"
              mt={12}
              fontFamily="'Karla', sans-serif;"
            >
              Sign Me Up!
            </Button>
          </AnimateDiv>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default S1;
